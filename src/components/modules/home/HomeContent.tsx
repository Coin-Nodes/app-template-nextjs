import React from "react";

const HomeContent: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">
        Estrutura Base Geral do Projeto Next.js
      </h1>

      <pre className="bg-gray-100 text-black p-4 rounded-md overflow-auto mb-6">
        {`
📦 my-nextjs-app
├── 📂 public
├── 📂 src
│   ├── 📂 app
│   │   ├── 📂 dashboard
│   │   │   ├── page.tsx  (Página do dashboard, ou igual para todas as rotas da aplicação)
│   │   │── layout.tsx  (Layout global, aplicável a todas as rotas)
│   │   │── page.tsx  (Página inicial, ex: \`/\`)
│   │   └── 📂 (outros segmentos de rotas...)
│   ├── 📂 components
│   │   ├── 📂 common
│   │   │   └── (Componentes globais e reutilizáveis, como Button, Modal, Input)
│   │   ├── 📂 layout
│   │   │   └── (Componentes de layout, como Navbar, Footer, Sidebar)
│   │   ├── 📂 modules
│   │   │   └── (Componentes específicos de páginas)
│   ├── 📂 hooks
│   │   └── (Custom hooks criados para facilitar a lógica e reutilização de código)
│   ├── 📂 services
│   │   └── (Serviços de API, requisições HTTP, como axios)
│   ├── 📂 styles
│   │   └── (Arquivos de estilização global, como \`global.css\` ou arquivos de scss)
│   ├── 📂 types
│   │   └── (Arquivos de tipos TypeScript usados globalmente no projeto)
│   ├── 📂 utils
│   │   └── (Funções utilitárias que são usadas em várias partes do projeto)
│   ├── 📂 contexts
│   │   └── (Contextos globais utilizando a API de Context do React)
│   ├── 📂 tests
│   │   ├── 📂 unit
│   │   ├── 📂 integration
│   │   └── 📂 e2e
│   └── 📂 lib
│       └── (Bibliotecas ou pacotes customizados específicos da aplicação)
└── next.config.js
└── package.json
└── tsconfig.json
└── .env
        `}
      </pre>

      <h2 className="text-xl font-semibold">Detalhes das Pastas</h2>

      <section className="space-y-2">
        <h3 className="text-lg font-semibold">/public</h3>
        <p data-testid="public-folder-description">
          Armazena arquivos estáticos acessíveis publicamente, como imagens,
          vídeos e favicons. Essa pasta é usada para qualquer recurso que
          precise ser acessível diretamente no navegador.
          <strong> Escolha:</strong> Colocar todos os arquivos estáticos aqui
          facilita o acesso e permite uma gestão clara dos recursos públicos da
          aplicação.
        </p>
      </section>

      <section className="space-y-2">
        <h3 className="text-lg font-semibold">/src/app</h3>
        <p data-testid="app-folder-description">
          A pasta principal para as rotas e páginas da aplicação. No Next.js 13,
          esta pasta introduz uma maneira mais moderna e eficiente de organizar
          as rotas, utilizando layouts aninhados e segmentação de rotas.
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li data-testid="app-layout-description">
            <strong>layout.tsx</strong>: Define o layout global da aplicação,
            aplicável a todas as rotas. Este arquivo é uma excelente maneira de
            garantir consistência na UI.
          </li>
          <li data-testid="app-page-description">
            <strong>page.tsx</strong>: Página inicial da aplicação. Cada
            subpasta dentro de <code>app</code> representa uma rota, e o arquivo{" "}
            <code>page.tsx</code> define a entrada da rota.
          </li>
          <li data-testid="app-dashboard-description">
            <strong>dashboard/</strong>: Rotas e layouts específicos para o
            dashboard, aproveitando a estrutura de rotas aninhadas.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h3 className="text-lg font-semibold">/src/components</h3>
        <p data-testid="components-folder-description">
          Organiza componentes reutilizáveis e modulares.
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li data-testid="components-common-description">
            <strong>common/</strong>: Componentes globais e reutilizáveis, como
            botões e modais.
          </li>
          <li data-testid="components-layout-description">
            <strong>layout/</strong>: Componentes de layout, como cabeçalho e
            rodapé.
          </li>
          <li data-testid="components-modules-description">
            <strong>modules/</strong>: Componentes específicos para certas
            páginas, encapsulando a lógica e a apresentação necessárias.
          </li>
        </ul>
      </section>

      <h2 className="text-xl font-semibold">Benefícios Desta Estrutura</h2>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li data-testid="benefits-scalability">
          <strong>Escalabilidade</strong>: Modulariza a aplicação, facilitando a
          adição de novas funcionalidades.
        </li>
        <li data-testid="benefits-organization">
          <strong>Organização</strong>: Segrega diferentes tipos de arquivos e
          lógicas, tornando a aplicação mais fácil de manter.
        </li>
        <li data-testid="benefits-reusability">
          <strong>Reutilização</strong>: Centraliza componentes, hooks e
          serviços, promovendo a reutilização e evitando duplicação.
        </li>
        <li data-testid="benefits-testability">
          <strong>Testabilidade</strong>: Estrutura clara para testes,
          promovendo uma cobertura abrangente da aplicação.
        </li>
      </ul>
    </div>
  );
};

export default HomeContent;
