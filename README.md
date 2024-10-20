<p align="center">
<a href="https://coinnodes.tech/">
<img src="https://www.coinnodes.tech/images/logo.png" alt="Coinnodes.tech Logo" width="400"/>
</a>
</p>

# Visit our website: [coinnodes.tech](https://coinnodes.tech/)

*CoinNodes.tech:* We are a data and technology provider for the banking, payments, and crypto financial markets, providing advanced and reliable solutions for everyone involved in the sector, including investors, businesses, and developers.

For more information, visit our website [here](https://coinnodes.tech/en).
# Next.js Base Template

## Introduction

No project structure is going to be perfect or 100% suitable for all situations. This is a flexible starting point that can be adapted according to the context and specific needs of the project. It is important for the developer or team to analyze the project requirements and make technical decisions that are most appropriate for that scenario.

## How to Use This Template

To use this template in your projects, follow these steps:

1. **Clone the Repository**: Clone or download this repository to your local development environment.

2. **Install Dependencies**: Run `npm install` or `yarn` to install all dependencies listed in `package.json`.

3. **Run the Project**: Use `npm run dev` or `yarn dev` to start the development server.

4. **Run the Application Test**: Use `npm test`

This template includes an organized folder structure and a dependency configuration that follows best practices for Next.js applications.

## File `package.json` ```json { "name": "nextjs-base-template", "version": "0.1.0", "private": true, "scripts": { "dev": "next dev", "build": "next build", "start": "next start", "lint": "next lint", "test": "jest", "test:watch": "jest --watchAll" }, : { "@radix-ui/react-icons": "^1.3.0", "@tanstack/react-query": "^5.56.2", "axios": "^1.7.7", "class-variance-authority": "^0.7.0", "clsx": "^2.1.1", "crypto-js": "^4.2.0" "^18", "react-hot-toast": "^2.4.1", "react-icons": "^5.3.0", "react-select": "^5.8.0", "tailwind-merge": "^2.5.2", "tailwindcss-animate": "^1.0.7" }, "devDependencies": {
 "@testing-library/jest-dom": "^6.5.0", "@testing-library/react": "^16.0.1", "@testing-library/user-event": "^14.5.2", "@types/jest": "^29.5.13", "@types/node": "^20", "@types/react": "^18.3.5", s/react-dom": "^18.3.0", "eslint": "^8", "eslint-config-next": "14.2.11", "jest": "^29.7.0", "jest-environment-jsdom": "^29.7.0", "postcss": "^8", "tailwindcss": "^3.4.1",
"ts-jest": "^29.2.5",
"ts-node": "^10.9.2",
"typescript": "^5.6.2"
}
}
```

## Dependency Selection Decisions

- [**`next-nprogress-bar`**](https://www.npmjs.com/package/next-nprogress-bar): Used to perform the loading effect between pages. The chosen lib is compatible with next's /app.

If you need to use redirection, use the library's useRouter.

- [**`@shadcn-ui`**](https://ui.shadcn.com/docs): A React component library for creating accessible and customizable user interfaces. It offers a wide range of pre-built and styled components, based on accessibility and design best practices. @shadcn-ui is highly flexible, making it easy to customize and integrate with existing design systems.
- [**`react-icons`**](https://react-icons.github.io/react-icons/): Provides a set of high-quality icons for use in React components.
- [**`@tanstack/react-query`**](https://tanstack.com/query/v4/docs/framework/react/overview): Facilitates asynchronous state management, such as HTTP requests.

## General Base Structure

```bash
📦 my-nextjs-app
├── 📂 public
├── 📂 src
│ ├── 📂 app
│ │ ├── 📂 dashboard
│ │ │ ├── page.tsx (Dashboard page)
│ │ │── layout.tsx (Global layout, applicable to all routes)
│ │ │── page.tsx (Home page, e.g. `/`)
│ │ └── 📂 (other route segments...)
│ ├── 📂 components
│ │ ├── 📂 common
│ │ │ └── (Global and reusable components, such as Button, Modal, Input)
│ │ ├── 📂 layout
│ │ │ └── (Layout components, such as Navbar, Footer, Sidebar)
│ │ ├── 📂 modules
│ │ │ └── (Page-specific components)
│ ├── 📂 hooks
│ │ └── (Custom hooks created to facilitate the logic and code reuse)
│ ├── 📂 services
│ │ └── (API services, HTTP requests, like axios)
│ ├── 📂 styles
│ │ └── (Global styling files, like `global.css` or scss files)
│ ├── 📂 types
│ │ └── (Type files, like `global.css`)peScript used globally in the project)
│ ├── 📂 utils
│ │ └── (Utility functions and helpers)
│ ├── 📂 contexts
│ │ └── (Global contexts using React's Context API)
│ ├── 📂 tests
│ │ ├── 📂 app
│ │ │ ├── layout
│ │ │ └── (Test organization following the project architecture)
│ │ ├── 📂 components
│ │ └── 📂 e2e
│ └── 📂 lib
│ └── (Application-specific custom libraries or packages)
└── next.config.js
└── package.json
└── tsconfig.json
└── .env
```

## Folder Details

### `/public`

- Stores publicly accessible static files, such as images, videos, and favicons. This folder is used for any resources that need to be accessible directly in the browser. **Choice**: Placing all static files here makes them easier to access and allows for clear management of the application's public resources.

### `/src/app`

- The main folder for the application's routes and pages. In Next.js 13, this folder introduces a more modern and efficient way to organize routes, using nested layouts and route segmentation.

- **layout.tsx**: Defines the global layout of the application, applicable to all routes. This file is a great way to ensure consistency in the UI.
- **page.tsx**: The application's home page. Each subfolder within `app` represents a route, and the `page.tsx` file defines the route entry.
- **dashboard/**: Specific routes and layouts for the dashboard, taking advantage of the nested route structure

### `/src/components`

- Organizes reusable and modular components.
- **common/**: Global and reusable components, such as buttons and modals.
- **layout/**: Layout components, such as header and footer.
- **modules/**: Components specific to certain pages, encapsulating the necessary logic and presentation. **Choice**: This separation makes it easier to identify and reuse components throughout the application.

### `/src/hooks`

- Contains custom hooks to encapsulate complex logic and promote reuse. we can see a **Choice**: Having centralized hooks helps organize logic and avoids code duplication.

### `/src/services`

- Centralizes the logic for communicating with APIs. **Choice**: Keeping API calls and data logic separate from components makes them easier to maintain and promotes reuse.

### `/src/styles`

- Contains global style files, such as `global.css`. **Choice**: Having a dedicated location for styles helps maintain visual consistency and avoids style conflicts.

### `/src/types`

- Defines global types for TypeScript, promoting consistent typing throughout the application. **Choice**: Makes code easier to maintain and readable.

### `/src/utils`

- Stores utility functions and helpers that are used in various parts of the project. **Choice**: Promotes the reuse of common logic.

### `/src/contexts`

- Stores global contexts using React's Context API. **Choice**: Provides centralized global states and functions.

### `/src/tests`

- Organizes the application's tests:

- **App/**: Regarding the organization of the tests, it will be a replication of the project's architecture, so we can maintain maintenance in large projects clearly.

- **e2e/**: End-to-end tests that simulate complete user flows. These tests will be the most complex, since they will test the entire application. **Choice**: This clear division makes it easier to run and maintain tests in large projects.

### `/src/lib`

- Contains application-specific custom libraries. **Choice**: Encapsulates complex logic that can be used in multiple parts of the application.

## Configuration Files

- **next.config.js**: Next.js configurations.
- **package.json**: Project dependency and script management.
- **tsconfig.json**: TypeScript configurations.
- **.env**: Stores sensitive environment variables.

## Benefits of This Structure

- **Scalability**: Modularizes the application, making it easier to add new features.
- **Organization**: Segregates different types of files and logic, making the application easier to maintain.
- **Reusability**: Centralizes components, hooks and services, promoting reuse and avoiding duplication.
- **Testability**: Clear structure for testing, promoting comprehensive application coverage.

---------------

© 2024 Coin Nodes LTDA. All rights reserved.

The written code and documentation belong to and were built by Coin Nodes LTDA. They are intellectual property and are protected by copyright laws. Any unauthorized use, reproduction or distribution without the explicit consent of Coin Nodes LTDA is strictly prohibited.
