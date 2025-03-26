"use client";

import Loader from "@/components/ui/loader";
import { clearDeliveyDate } from "@/store/slices/deliveryDateSlice";
import { clearOrder } from "@/store/slices/orderSlice";
import { RootState } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Page() {
  const { push } = useRouter();
  const order = useSelector((state: RootState) => state.order);
  const isDate = useSelector((state: RootState) => state.deliveryDate.isSelected);
  const dispatch = useDispatch();
  const [response, setResponse] = useState<any>(null);

  useEffect(() => {
    const fetchPaymentData = async () => {
      const exp = order.card!.expiry.split("/");
      const card_exp_month = exp[0];
      const card_exp_year = exp[1];

      let amount = 0;
      order.products.forEach((p) => (amount += p.price * p.selected));

      try {
        const response = await fetch("/api/liqpay", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: isDate ? amount + 5 : amount,
            currency: "UAH",
            description: "Test: " + order.id,
            order_id: order.id,
            card: order.card?.cardNumber.trim(),
            card_exp_month,
            card_exp_year,
            card_cvv: order.card?.cvv.trim(),
            items: order.products.map((p) =>
              JSON.stringify({
                amount: p.selected,
                price: p.price,
                cost: (p.price * p.selected).toFixed(2),
                id: p.id,
              })
            ),
          }),
        });
        setResponse(await response.json());
      } catch (e) {
        console.error(e);
      }
    };

    fetchPaymentData();
  }, [isDate, order.card, order.id, order.products]);

  return response ? (
    <div className="flex flex-col items-center">
      <div className="w-[1010px] h-[fit-content] gap-3 flex flex-col justify-center items-center mt-8 bg-emerald-50 border-emerald-400 border-2 rounded-xl p-8 shadow-emerald-400 shadow-md">
        <Image
          src="/assets/images/check-circle.svg"
          width={50}
          height={50}
          alt="check-circle"
          className="select-none"
        />
        <div className="text-2xl font-bold text-emerald-400 select-none">
          Thank you for shopping with us.
        </div>
        <div className="text-[16px]">
          Please check your email for order confirmation and detailed delivery information or visit{" "}
          <Link href="/message-center" className="text-[#37569E]">
            Message Center
          </Link>{" "}
          to review your notifications
        </div>
        <div className="text-[16px] font-bold self-start">Order number: {order.id}</div>
        <ul className="text-[16px] self-start list-disc pl-4">
          {order.products.map((p) => (
            <li key={p.id} className="items-center">
              {p.desc}
            </li>
          ))}
        </ul>
        <div className="text-[16px] font-bold self-start">
          Estimated delivery: {new Date(order.date!).toLocaleDateString()}
        </div>
      </div>
      <div className="w-[1010px] grid grid-cols-3 pt-8">
        <Image
          src="/assets/images/arrow-right.svg"
          style={{ color: "black" }}
          width={0}
          height={0}
          alt="arrow-right"
          className="col-start-3 justify-self-center w-6 h-6 cursor-pointer"
          onClick={() => {
            push("/");
            dispatch(clearOrder());
            dispatch(clearDeliveyDate());
          }}
        />
      </div>
    </div>
  ) : (
    <div className="flex min-h-[900px] justify-center">
      <div className="w-[fit-content] flex flex-col justify-center items-center">
        <Loader text="Paymenting" />
      </div>
    </div>
  );
}
