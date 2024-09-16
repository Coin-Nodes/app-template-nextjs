import React from "react";
import { render, screen } from "@testing-library/react";
import HomeContent from "@/components/modules/home/HomeContent";

describe("HomeContent Component", () => {
  it("deve renderizar o título principal corretamente", () => {
    render(<HomeContent />);
    expect(
      screen.getByText("Estrutura Base Geral do Projeto Next.js")
    ).toBeInTheDocument();
  });

  it("deve renderizar os benefícios da estrutura", () => {
    render(<HomeContent />);
    expect(screen.getByText("Benefícios Desta Estrutura")).toBeInTheDocument();
    expect(screen.getByTestId("benefits-scalability")).toBeInTheDocument();
    expect(screen.getByTestId("benefits-organization")).toBeInTheDocument();
    expect(screen.getByTestId("benefits-reusability")).toBeInTheDocument();
    expect(screen.getByTestId("benefits-testability")).toBeInTheDocument();
  });

  it("deve renderizar as seções de detalhes das pastas", () => {
    render(<HomeContent />);
    expect(screen.getByText("/public")).toBeInTheDocument();
    expect(screen.getByTestId("public-folder-description")).toBeInTheDocument();
    expect(screen.getByText("/src/app")).toBeInTheDocument();
    expect(screen.getByTestId("app-folder-description")).toBeInTheDocument();
    expect(screen.getByText("/src/components")).toBeInTheDocument();
    expect(
      screen.getByTestId("components-folder-description")
    ).toBeInTheDocument();
  });
});
