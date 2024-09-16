"use client";
import React from "react";
import useFakeUsers from "../../hooks/useFakeUsers";
import { formatCPF } from "@/utils/formatDocuments";

const UserList = () => {
  const { users, loading } = useFakeUsers();

  if (loading) {
    return <p>Carregando usuários...</p>;
  }

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email} - {formatCPF(user.cpf)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
