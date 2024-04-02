# Welcome

This is an official cuspy frontend apps repo. This monorepo is created by Turborepo.

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `home`: another [Next.js](https://nextjs.org/) app
- `@cuspy-apps/ui`: a stub React component library shared by both `home` and `docs` applications
- `@cuspy-apps/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@cuspy-apps/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Monorepo has some additional tools setup:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd cuspy-apps
npm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd cuspy-apps
npm dev
``` 