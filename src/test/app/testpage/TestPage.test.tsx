// TestPage.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TestPage from "@/app/testpage/page";

describe("TestPage Component", () => {
  it("deve renderizar o título corretamente", () => {
    render(<TestPage />);
    expect(screen.getByText("Página de Teste")).toBeInTheDocument();
  });

  it("deve permitir a digitação no campo de entrada", () => {
    render(<TestPage />);
    const inputElement = screen.getByPlaceholderText("Digite algo");

    fireEvent.change(inputElement, { target: { value: "Teste" } });
    expect(inputElement).toHaveValue("Teste");
  });

  it("deve exibir o valor enviado após clicar no botão", () => {
    render(<TestPage />);
    const inputElement = screen.getByPlaceholderText("Digite algo");
    const buttonElement = screen.getByText("Enviar");

    fireEvent.change(inputElement, { target: { value: "Teste Enviado" } });
    fireEvent.click(buttonElement);

    expect(
      screen.getByText("Valor enviado: Teste Enviado")
    ).toBeInTheDocument();
  });
});
