import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function sendOTP() {
  try {
    const generatedOTP = Math.floor(10000 + Math.random() * 90000).toString();
    await fetch("/api/otp/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ otp: generatedOTP }),
    });
    console.log("Expected OTP:", generatedOTP);
  } catch (error) {
    console.error("sendOTP error: ", error);
  }
}

export interface IUser {
  id: number;
  username: string;
  email: string;
  phoneNumber: string;
  exp: number;
}

import { jwtDecode } from "jwt-decode";
export const jwtParse = (token: string): IUser | null => {
  try {
    const data = jwtDecode<any>(token);
    return {
      id: data["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"],
      username: data["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
      email: data["email"],
      phoneNumber: data["phoneNumber"],
      exp: data["exp"],
    };
  } catch (error) {
    console.log("Jwt parse error: ", error);
    return null;
  }
};
