"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [router, status]);

  if (status === "loading") {
    return <p>Загрузка...</p>;
  }

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold">Админ Панель</h1>
      <p>Привет, {session?.user?.username}!</p>
    </div>
  );
}
