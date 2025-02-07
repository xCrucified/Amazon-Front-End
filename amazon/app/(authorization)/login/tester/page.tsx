"use client";

import { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";

// Динамічна схема валідації
const useDynamicSchema = (disablePassword: boolean) => {
  return useMemo(() => {
    return z.object({
      password: disablePassword
        ? z.string().optional() // Якщо вимкнено, поле необов'язкове
        : z.string().min(6, "Пароль повинен містити щонайменше 6 символів"),
    });
  }, [disablePassword]);
};

const PasswordForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [disablePassword, setDisablePassword] = useState(false);

  const schema = useDynamicSchema(disablePassword);

  const form = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <Form {...form}>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          onChange={() => setDisablePassword(!disablePassword)}
        />
        <label>Не вводити пароль</label>
      </div>

      {!disablePassword && (
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-[#000]">Password</FormLabel>
              <FormControl>
                <div className="flex items-center relative">
                  <Input
                    type={isPasswordVisible ? "text" : "password"}
                    className={`bg-gray-200 focus:bg-white rounded-lg focus:ring-0 focus:outline-none border p-[8px] h-[36px] text-[12px] ${
                      form.formState.errors.password
                        ? "border-[3px] border-red-500"
                        : "focus:border-[3px] focus:border-[#5a6c8d]"
                    }`}
                    {...field}
                  />
                  {isPasswordVisible ? (
                    <Image
                      src="/assets/images/EyeHidenFill.svg"
                      width={16}
                      height={16}
                      className="absolute right-3 hover:cursor-pointer"
                      alt="Hide Password"
                      onClick={() => setIsPasswordVisible(false)}
                    />
                  ) : (
                    <Image
                      src="/assets/images/EyeFill.svg"
                      width={16}
                      height={16}
                      className="absolute right-3 hover:cursor-pointer"
                      alt="Show Password"
                      onClick={() => setIsPasswordVisible(true)}
                    />
                  )}
                </div>
              </FormControl>
              <FormMessage className="flex gap-1 items-center leading-[10px]" />
            </FormItem>
          )}
        />
      )}
    </Form>
  );
};

export default PasswordForm;
