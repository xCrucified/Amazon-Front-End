// app/admin/page.tsx
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authConfig } from "@/lib/auth";

export default async function AdminPage() {
  const session = await getServerSession(authConfig);

  if (!session) {
    redirect("/login"); // редиректим на login, если нет сессии
  }

  return (
    <div className="p-5 h-svh">
      <h1 className="text-xl font-bold">Админ Панель</h1>
      <p>Добро пожаловать, {session.user?.username}!</p>
    </div>
  );
}
