"use client";
import { useRouter } from "next-nprogress-bar";
import React, { useState } from "react";

const TestPage: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState<string | null>(null);
  const router = useRouter();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    setSubmittedValue(inputValue);
  };

  return (
    <div>
      <h1>Página de Teste</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Digite algo"
      />
      <button onClick={handleSubmit}>Enviar</button>
      {submittedValue && <p>Valor enviado: {submittedValue}</p>}
      <button className="block mt-10" onClick={() => router.push("/")}>
        Home
      </button>
    </div>
  );
};

export default TestPage;
