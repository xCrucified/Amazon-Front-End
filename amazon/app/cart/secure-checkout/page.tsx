"use client";

import { Label } from "@/components/ui/label";
import { RootState } from "@/store/store";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import Products from "@/components/shared/cart-payment-products";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AddressCard } from "@/components/shared/cards/address-card";
import { cn } from "@/lib/utils";
import { PaymentCard } from "@/components/shared/cards/payment-card";
import { ChevronRight } from "lucide-react";
import { DateCard } from "@/components/shared/cards/date-card";
import { Button } from "@/components/ui/button";
import { Months } from "@/lib/months";
import { setSelected } from "@/store/slices/deliveryDateSlice";
import AddressForm from "@/components/shared/forms/address-form";
import PaymentCardForm from "@/components/shared/forms/payment-card-form";
import DeliveryDateForm from "@/components/shared/forms/delivery-date-form";
import {
  setOrderAddress,
  setOrderCard,
  setOrderDate,
  setOrderId,
  setOrderProducts,
} from "@/store/slices/orderSlice";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/navigation";

export default function Page() {
  const { push } = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.products);
  const addresses = useSelector((state: RootState) => state.addresses.addresses);
  const cards = useSelector((state: RootState) => state.paymentCards.cards);
  const order = useSelector((state: RootState) => state.order);
  const [selectedAddress, setSelectedAddress] = useState<number | null>(null);
  const [selectedCard, setSelectedCard] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [addressAddHovered, setAddressAddHovered] = useState(false);
  const [cardAddHovered, setCardAddHovered] = useState(false);
  const [dateAddHovered, setDateAddHovered] = useState(false);
  const [addressDialogOpen, setAddressDialogOpen] = useState(false);
  const [cardDialogOpen, setCardDialogOpen] = useState(false);
  const [dateDialogOpen, setDateDialogOpen] = useState(false);
  const deliveryDate = useSelector((state: RootState) => state.deliveryDate.date);
  const freeDeliveryDate = new Date(new Date().setDate(new Date().getDate() + 3));

  useEffect(() => {
    if (!order.id) {
      const newId = uuid();
      dispatch(setOrderId(newId));
    }
    dispatch(setOrderProducts(Object.values(cart).filter((product) => product.selected > 0)));
  }, [cart, dispatch, order.id]);

  async function Redirect() {
    push("/cart/secure-checkout/paymenting");
  }

  function setItems(arg0: import("../../../store/slices/cartSlice").Product[]): import("react").ReactNode {
    throw new Error(arg0 + "Function not implemented.");
  }

  return (
    <div className="flex w-[1492px] gap-[60px] mx-auto py-12">
      {/* left side */}
      <section className="w-[fit-content] max-w-[900px] flex flex-col gap-4">
        <section className="flex flex-col w-full h-[fit-content] bg-[#f0f0f0] p-7 rounded-xl">
          <Label className="text-[23px] font-bold pb-4">Add a delivery or pickup address</Label>
          <div className="flex gap-4 flex-wrap">
            {addresses.map((addr) => (
              <AddressCard
                key={addr.id}
                id={addr.id}
                name={addr.name}
                country={addr.country}
                city={addr.city}
                postalCode={addr.postalCode}
                street={addr.street}
                building={addr.building}
                selected={selectedAddress === addr.id}
                onSelect={(id) => {
                  setSelectedAddress(id);
                  dispatch(setOrderAddress(addresses.find((a) => a.id === id)!));
                }}
              />
            ))}
            <Dialog open={addressDialogOpen} onOpenChange={setAddressDialogOpen}>
              <DialogTrigger asChild>
                <div
                  className={cn(
                    addressAddHovered ? "border-[#e16c60]" : "border-[#e8e8e8]",
                    "w-[172px] h-[fit-content] p-4 bg-white rounded-xl border-[3px] cursor-pointer transition-all ease-in-out duration-100"
                  )}
                  onMouseEnter={() => setAddressAddHovered(true)}
                  onMouseLeave={() => setAddressAddHovered(false)}
                >
                  Add a new delivery address
                </div>
              </DialogTrigger>
              <DialogContent className="w-[405px]">
                <DialogHeader>
                  <DialogTitle className="text-center text-[23px] font-bold">
                    Add new address
                  </DialogTitle>
                </DialogHeader>
                <AddressForm
                  onSuccess={(newAddressId) => {
                    setAddressDialogOpen(false);
                    setSelectedAddress(newAddressId);
                  }}
                />
              </DialogContent>
            </Dialog>
          </div>
        </section>
        <section className="flex flex-col w-full h-[fit-content] bg-[#f0f0f0] p-7 rounded-xl">
          <Label
            className={cn(
              selectedAddress !== null ? "text-black pb-4" : "text-black/40",
              "text-[23px] font-bold leading-[23px]"
            )}
          >
            Payment method
          </Label>
          {selectedAddress !== null && (
            <div className="flex gap-4 flex-wrap">
              {cards.map((card) => (
                <PaymentCard
                  key={card.cardNumber}
                  name={card.name}
                  cardNumber={card.cardNumber}
                  expiry={card.expiry}
                  cardType={card.cardType}
                  selected={selectedCard === card.cardNumber}
                  onSelect={(number) => {
                    setSelectedCard(number);
                    dispatch(setOrderCard(card));
                  }}
                />
              ))}
              <Dialog open={cardDialogOpen} onOpenChange={setCardDialogOpen}>
                <DialogTrigger asChild>
                  <div
                    className={cn(
                      cardAddHovered ? "border-[#e16c60]" : "border-[#e8e8e8]",
                      "w-[172px] h-[fit-content] flex flex-col gap-4 p-4 bg-white rounded-xl border-[3px] cursor-pointer transition-all ease-in-out duration-100"
                    )}
                    onMouseEnter={() => setCardAddHovered(true)}
                    onMouseLeave={() => setCardAddHovered(false)}
                  >
                    <ChevronRight className="ml-auto" size={18} />
                    <span>New card</span>
                  </div>
                </DialogTrigger>
                <DialogContent className="w-[405px]">
                  <DialogHeader>
                    <DialogTitle className="text-center text-[23px] font-bold">
                      Add new card
                    </DialogTitle>
                  </DialogHeader>
                  <PaymentCardForm
                    onSuccess={(newCardId) => {
                      setCardDialogOpen(false);
                      setSelectedCard(newCardId);
                    }}
                  />
                </DialogContent>
              </Dialog>
            </div>
          )}
        </section>
        <section className="flex flex-col w-full h-[fit-content] bg-[#f0f0f0] p-7 rounded-xl">
          <Label
            className={cn(
              selectedCard ? "text-black pb-4" : "text-black/40",
              "text-[23px] font-bold leading-[23px]"
            )}
          >
            Items and shipping
          </Label>
          {selectedCard && (
            <div className="flex gap-4 flex-wrap">
              <DateCard
                id="0"
                label="Free delivery"
                date={Months.at(freeDeliveryDate.getMonth())! + " " + freeDeliveryDate.getDate()}
                selected={selectedDate === "0"}
                onSelect={(id) => {
                  setSelectedDate(id);
                  dispatch(setSelected(false));
                  dispatch(setOrderDate(freeDeliveryDate.toISOString()));
                }}
              />
              <Dialog open={dateDialogOpen} onOpenChange={setDateDialogOpen}>
                <DialogTrigger asChild className="cursor-pointer">
                  {deliveryDate ? (
                    <DateCard
                      id="1"
                      label="Onyx delivery"
                      date={
                        Months.at(new Date(deliveryDate).getMonth())! +
                        " " +
                        new Date(deliveryDate).getDate()
                      }
                      selected={selectedDate === "1"}
                      onSelect={(id) => {
                        if (selectedDate === "1") {
                          setDateDialogOpen(true);
                        }
                        dispatch(setSelected(true));
                        dispatch(setOrderDate(deliveryDate));
                        setSelectedDate(id);
                      }}
                    />
                  ) : (
                    <div
                      className={cn(
                        dateAddHovered ? "border-[#e16c60]" : "border-[#e8e8e8]",
                        "min-w-[340px] h-[fit-content] flex flex-col gap-4 p-4 bg-white rounded-xl border-[3px] transition-all ease-in-out duration-100"
                      )}
                      onMouseEnter={() => setDateAddHovered(true)}
                      onMouseLeave={() => setDateAddHovered(false)}
                    >
                      <div className="flex justify-between items-center">
                        <span>Delivery option:</span>
                        <ChevronRight className="ml-auto" size={18} />
                      </div>
                      <div className="flex flex-col">
                        <Label className="text-black/60 text-[16px] leading-[20px] cursor-pointer">
                          We&apos;ll deliver your order together
                        </Label>
                        <Label className="text-[16px] text-[#37569E] leading-[20px] cursor-pointer">
                          Choose your Onyx day
                        </Label>
                      </div>
                    </div>
                  )}
                </DialogTrigger>
                <DialogContent className="w-[fit-content]">
                  <DialogHeader>
                    <DialogTitle className="text-center text-[23px] font-bold">
                      Delivery Schedule
                    </DialogTitle>
                  </DialogHeader>
                  <DeliveryDateForm
                    onSuccess={() => {
                      setDateDialogOpen(false);
                      setSelectedDate("1");
                    }}
                  />
                </DialogContent>
              </Dialog>
            </div>
          )}
        </section>
        <p className="text-[13px] text-black/75 pb-1">
          Need help? Check our{" "}
          <Link href="/help" className="text-[#37569e]">
            Help pages
          </Link>{" "}
          or{" "}
          <Link href="/contact-us" className="text-[#37569e] ">
            contact us
          </Link>
        </p>
        <p className="text-[15px] text-black/75 leading-[16px] pb-1">
          For an item ordered from Onyx.com: When you click the `Place Your Order` button, we will
          send you an e-mail acknowledging receipt of your order. Your contract to purchase an item
          will not be complete until we send you an e-mail notifying you that the item has been
          shipped to you. By placing your order, you agree to Onyx.com&apos;s privacy notice and
          conditions of use.
        </p>
        <p className="text-[15px] text-black/75 leading-[16px]">
          Within 30 days of delivery, you may return new, unopened merchandise in its original
          condition. Exceptions and restrictions apply. See Onyx.com&apos;s{" "}
          <Link href="/refund" className="text-[#37569e]">
            Returns Policy.
          </Link>
        </p>
      </section>
      {/* right side */}
      <section className="w-[612px] h-[fit-content] flex flex-col">
        <div className="flex flex-col gap-4 bg-[#f0f0f0] p-5 rounded-xl">
          <Label className="w-full flex items-end justify-between">
            <div className="text-[32px] font-bold leading-[32px]">Items in order</div>
            <div className="text-[23px] font-bold leading-[34px]">
              {setItems(Object.values(cart).filter((product) => product.selected > 0))}
            </div>
          </Label>
          <Label className="text-[16px] leading-[18px]">
            Choose a shipping address and payment method in order to calculate shipping, handling,
            and tax.
          </Label>
          <Products />
          {selectedDate && (
            <Button variant="figmaSecondary" type="button" className="w-full" onClick={Redirect}>
              Buy now
            </Button>
          )}
        </div>
        <Link href="/order-price" className="text-[#37569E] text-right text-[14px] mt-4">
          How are shipping costs calculated?
        </Link>
      </section>
    </div>
  );
}
