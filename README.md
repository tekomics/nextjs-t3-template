This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Setup

First, update all packages:

```bash
pnpm i @clerk/nextjs @headlessui/react @heroicons/react @hookform/resolvers @planetscale/database @t3-oss/env-nextjs @tailwindcss/aspect-ratio @tailwindcss/forms @tailwindcss/typography @tanstack/react-query @trpc/client @trpc/react-query @trpc/server classnames drizzle-orm drizzle-zod nanoid next react react-dom react-hot-toast react-tooltip superjson tailwind-variants zod
```
```bash
pnpm i -D @types/eslint @types/node @types/prettier @types/react @types/react-dom @typescript-eslint/eslint-plugin @typescript-eslint/parser autoprefixer dotenv drizzle-kit eslint eslint-config-next mysql2 postcss prettier prettier-plugin-tailwindcss tailwindcss ts-node typescript
```

Then, add ```next-env.d.ts``` to the ```.gitignore``` file.

Then, use the file ```.env.example``` to construct a ```.env``` file after setting up a Clerk account and a PlanetScale database.
