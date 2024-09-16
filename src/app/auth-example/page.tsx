"use client";
import React from "react";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";

const AuthExample = () => {
  const { user, login, logout } = useAuth();

  const handleLogin = () => {
    const mockUser = {
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
    };
    login(mockUser);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Bem-vindo, {user.name}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Você não está autenticado.</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

const App = () => (
  <AuthProvider>
    <AuthExample />
  </AuthProvider>
);

export default App;
