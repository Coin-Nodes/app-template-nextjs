
 <p align="center">
  <a href="https://coinnodes.tech/">
    <img src="https://www.coinnodes.tech/images/logo.png" alt="Logo da Coinnodes.tech" width="400"/>
  </a>
</p>

# Acesse nosso site: [coinnodes.tech](https://coinnodes.tech/)

*CoinNodes.tech:* Trabalhamos no fornecimento de dados e tecnologia para o mercado de financeiro de bancos, pagamentos e criptoativos, proporcionando soluções avançadas e confiáveis para todos os envolvidos no setor, incluindo investidores, empresas e desenvolvedores.

Para mais informações, visite nosso site [aqui](https://coinnodes.tech/en).
# Next.js Base Template

## Introdução

Nenhuma estrutura de projeto será perfeita ou 100% adequada para todas as situações. Este é um ponto de partida flexível que pode ser adaptado conforme o contexto e as necessidades específicas do projeto. É importante que o desenvolvedor ou equipe analise as exigências do projeto e tome decisões técnicas que sejam mais apropriadas para aquele cenário.

## Como Usar Este Template

Para utilizar este template em seus projetos, siga estas etapas:

1. **Clone o Repositório**: Clone ou faça o download deste repositório para o seu ambiente de desenvolvimento local.
2. **Instale as Dependências**: Execute `npm install` ou `yarn` para instalar todas as dependências listadas no `package.json`.
3. **Execute o Projeto**: Utilize `npm run dev` ou `yarn dev` para iniciar o servidor de desenvolvimento.
4. **Executar test da aplicação**: Utilize `npm test`

Este template inclui uma estrutura de pastas organizada e uma configuração de dependências que segue boas práticas para aplicações Next.js.

## Arquivo `package.json`

```json
{
  "name": "nextjs-base-template",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "jest",
    "test:watch": "jest --watchAll"
  },
  "dependencies": {
    "@radix-ui/react-icons": "^1.3.0",
    "@tanstack/react-query": "^5.56.2",
    "axios": "^1.7.7",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "crypto-js": "^4.2.0",
    "js-cookie": "^3.0.5",
    "lucide-react": "^0.441.0",
    "next": "14.2.11",
    "next-nprogress-bar": "^2.3.13",
    "next-themes": "^0.3.0",
    "nookies": "^2.5.2",
    "react": "^18",
    "react-dom": "^18",
    "react-hot-toast": "^2.4.1",
    "react-icons": "^5.3.0",
    "react-select": "^5.8.0",
    "tailwind-merge": "^2.5.2",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.5.0",
    "@testing-library/react": "^16.0.1",
    "@testing-library/user-event": "^14.5.2",
    "@types/jest": "^29.5.13",
    "@types/node": "^20",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "eslint": "^8",
    "eslint-config-next": "14.2.11",
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "ts-jest": "^29.2.5",
    "ts-node": "^10.9.2",
    "typescript": "^5.6.2"
  }
}
```

## Decisões de Escolha das Dependências

- [**`next-nprogress-bar`**](https://www.npmjs.com/package/next-nprogress-bar): Usado para relizar o efeito de loading entre paginas lib escolhida com sua compatibilidade com o /app do next,
  caso precise usar redirecionamento usar o useRouter da biblioteca
- [**`@shadcn-ui`**](https://ui.shadcn.com/docs): Uma biblioteca de componentes React para criar interfaces de usuário acessíveis e customizáveis. Ela oferece uma ampla gama de componentes pré-construídos e estilizados, baseando-se nas práticas recomendadas de acessibilidade e design. O @shadcn-ui é altamente flexível, facilitando a personalização e integração com sistemas de design existentes.
- [**`react-icons`**](https://react-icons.github.io/react-icons/): Fornece um conjunto de ícones de alta qualidade para uso em componentes React.
- [**`@tanstack/react-query`**](https://tanstack.com/query/v4/docs/framework/react/overview): Facilita o gerenciamento de estado assíncrono, como requisições HTTP.

## Estrutura Base Geral

```bash
📦 my-nextjs-app
├── 📂 public
├── 📂 src
│   ├── 📂 app
│   │   ├── 📂 dashboard
│   │   │   ├── page.tsx  (Página do dashboard)
│   │   │── layout.tsx  (Layout global, aplicável a todas as rotas)
│   │   │── page.tsx  (Página inicial, ex: `/`)
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
│   │   └── (Arquivos de estilização global, como `global.css` ou arquivos de scss)
│   ├── 📂 types
│   │   └── (Arquivos de tipos TypeScript usados globalmente no projeto)
│   ├── 📂 utils
│   │   └── (Funções utilitárias e helpers)
│   ├── 📂 contexts
│   │   └── (Contextos globais utilizando a API de Context do React)
│   ├── 📂 tests
│   │   ├── 📂 app
│   │   │     ├── layout
│   │   │     └── (Organização de testes seguindo a arquitetura do projeto)
│   │   ├── 📂 components
│   │   └── 📂 e2e
│   └── 📂 lib
│       └── (Bibliotecas ou pacotes customizados específicos da aplicação)
└── next.config.js
└── package.json
└── tsconfig.json
└── .env
```

## Detalhes das Pastas

### `/public`

- Armazena arquivos estáticos acessíveis publicamente, como imagens, vídeos e favicons. Essa pasta é usada para qualquer recurso que precise ser acessível diretamente no navegador. **Escolha**: Colocar todos os arquivos estáticos aqui facilita o acesso e permite uma gestão clara dos recursos públicos da aplicação.

### `/src/app`

- A pasta principal para as rotas e páginas da aplicação. No Next.js 13, esta pasta introduz uma maneira mais moderna e eficiente de organizar as rotas, utilizando layouts aninhados e segmentação de rotas.

  - **layout.tsx**: Define o layout global da aplicação, aplicável a todas as rotas. Este arquivo é uma excelente maneira de garantir consistência na UI.
  - **page.tsx**: Página inicial da aplicação. Cada subpasta dentro de `app` representa uma rota, e o arquivo `page.tsx` define a entrada da rota.
  - **dashboard/**: Rotas e layouts específicos para o dashboard, aproveitando a estrutura de rotas aninhadas

### `/src/components`

- Organiza componentes reutilizáveis e modulares.
  - **common/**: Componentes globais e reutilizáveis, como botões e modais.
  - **layout/**: Componentes de layout, como cabeçalho e rodapé.
  - **modules/**: Componentes específicos para certas páginas, encapsulando a lógica e a apresentação necessárias. **Escolha**: Essa separação facilita a identificação e reutilização de componentes em toda a aplicação.

### `/src/hooks`

- Contém hooks customizados para encapsular lógicas complexas e promover a reutilização. podemos veer um **Escolha**: Ter hooks centralizados ajuda a organizar a lógica e evita duplicação de código.

### `/src/services`

- Centraliza a lógica de comunicação com APIs. **Escolha**: Manter as chamadas à API e a lógica de dados separadas dos componentes facilita a manutenção e promove a reutilização.

### `/src/styles`

- Contém arquivos de estilo globais, como `global.css`. **Escolha**: Ter um local dedicado para estilos ajuda a manter a consistência visual e evita conflitos de estilo.

### `/src/types`

- Define tipos globais para o TypeScript, promovendo tipagem consistente em toda a aplicação. **Escolha**: Facilita a manutenção e a legibilidade do código.

### `/src/utils`

- Armazena funções utilitárias e helpers que são usadas em várias partes do projeto. **Escolha**: Promove a reutilização de lógica comum.

### `/src/contexts`

- Armazena contextos globais usando a API de Context do React. **Escolha**: Fornece estados e funções globais de forma centralizada.

### `/src/tests`

- Organiza os testes da aplicação:
  - **App/**: Sobre a organização dos testes sera uma replicação da arquitetura do projeto pois assim conseguimos manter clara a manutenção em projetos grandes
  - **e2e/**: Testes end-to-end que simulam fluxos completos do usuário. e esses testes serão os mais complexo pois ira testar a aplicação completamente **Escolha**: Essa divisão clara facilita a execução e a manutenção de testes em projetos grandes.

### `/src/lib`

- Contém bibliotecas customizadas específicas da aplicação. **Escolha**: Encapsula lógicas complexas que podem ser usadas em várias partes da aplicação.

## Arquivos de Configuração

- **next.config.js**: Configurações do Next.js.
- **package.json**: Gerenciamento de dependências e scripts do projeto.
- **tsconfig.json**: Configurações do TypeScript.
- **.env**: Armazena variáveis de ambiente sensíveis.

## Benefícios Desta Estrutura

- **Escalabilidade**: Modulariza a aplicação, facilitando a adição de novas funcionalidades.
- **Organização**: Segrega diferentes tipos de arquivos e lógicas, tornando a aplicação mais fácil de manter.
- **Reutilização**: Centraliza componentes, hooks e serviços, promovendo a reutilização e evitando duplicação.
- **Testabilidade**: Estrutura clara para testes, promovendo uma cobertura abrangente da aplicação.
