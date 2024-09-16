"use client";
import React, { useState, useEffect } from "react";
import { User } from "@/types/user";

const fakeUsersData: User[] = [
  {
    id: "1",
    name: "Alice Johnson",
    email: "alice@example.com",
    cpf: "55555555598",
  },
  { id: "2", name: "Bob Smith", email: "bob@example.com", cpf: "55555555598" },
  {
    id: "3",
    name: "Charlie Brown",
    email: "charlie@example.com",
    cpf: "55555555598",
  },
  {
    id: "4",
    name: "Diana Prince",
    email: "diana@example.com",
    cpf: "55555555598",
  },
  { id: "5", name: "Eve White", email: "eve@example.com", cpf: "55555555598" },
];

const useFakeUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = () => {
      setLoading(true);
      setTimeout(() => {
        setUsers(fakeUsersData);
        setLoading(false);
      }, 1000);
    };

    fetchUsers();
  }, []);

  return { users, loading };
};

export default useFakeUsers;
