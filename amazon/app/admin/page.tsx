// app/admin/page.tsx
'use server';  // This marks the file as a server component
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authConfig } from "@/lib/auth";
import Link from "next/link";
import React from "react";

// Define nav items
const navItems = [
  { id: "Categories", label: "Categories" },
  { id: "Products", label: "Products" },
  { id: "Users", label: "ListUsers" },
] as const;


export default async function Page() {
  const session = await getServerSession(authConfig);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="p-5 h-svh">
      <h1 className="text-xl font-bold">Админ Панель</h1>
      <p>Добро пожаловать, {session.user.email}!</p>
      <Link className="bg-red-500 w-[50px]" href={"admin/dashboard"}>YOOO</Link>
      <nav className="flex flex-col gap-2">
        {navItems.map(({ id, label }) => (
          <button
            key={id}
            className={`text-sm font-[800] p-4 border-b border-[#2E2E2E] text-black hover:text-[#E16C60] transition flex items-center last:border-none`}
          >
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
}
