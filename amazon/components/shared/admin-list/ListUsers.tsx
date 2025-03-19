"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface User {
  Id: string;
  UserName: string;
  Email: string;
  BirthDate: string;
  PhoneNumber: string;
}

const ListUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("api/users");

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Data loading error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;

  const handleEdit = async (
    id: string,
    userName: string,
    email: string,
    phoneNumber: string
  ) => {
    try {
      const response = await fetch("/api/users", {
        method: "PUT",
        body: JSON.stringify({ id, userName, email, phoneNumber }),
      });

      const data = await response.json();
      console.log("Updated user:", data);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch("/api/users", {
        method: "DELETE",
        body: JSON.stringify({ id }),
      });

      if (!response.ok) throw new Error("Failed to delete user");

      console.log("User deleted");

      setUsers((prevUsers) => prevUsers.filter((user) => user.Id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };


  const handleNavigateToCreateUser = () => {
    router.push('/create-items/CreateUserForm.tsx');
  };

  return (
    <div className="w-full">
      <div className="flex gap-10">
        <h2 className="text-2xl font-bold mb-4">Users</h2>
        <Button onClick={handleNavigateToCreateUser} className="bg-green-700 w-[200px]">Add</Button>
      </div>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Birthday</th>
            <th className="p-3 text-left">Phone number</th>
          </tr>
        </thead>
        <tbody>
        {users.map((user) => (
            <tr key={user.Id} className="border-t border-gray-200">
              <td className="p-3">{user.Id}</td>
              <td className="p-3">{user.UserName}</td>
              <td className="p-3">{user.Email}</td>
              <td className="p-3">{user.BirthDate}</td>
              <td className="p-3">{user.PhoneNumber}</td>
              <td className="p-3 flex justify-start gap-3">
                <Button
                  onClick={() =>
                    handleEdit(user.Id, user.UserName, user.Email, user.PhoneNumber)
                  }
                  className="bg-purple-400 hover:opacity-80"
                >
                  Edit
                </Button>
                <Button
                  onClick={() => handleDelete(user.Id)}
                  className="bg-red-400 hover:opacity-80"
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListUsers;
