// app/admin/page.tsx
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authConfig } from "@/lib/auth";
import Link from "next/link";

export default async function AdminPage() {
  const session = await getServerSession(authConfig);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="p-5 h-svh">
      <h1 className="text-xl font-bold">Админ Панель</h1>
      <p>Добро пожаловать, {session.user.email}!</p>
      <Link classNap--me="bg-red-500 w-[50px]" href={"admin/dashboard"}>YOOO</Link>
    </div>
  );
}
