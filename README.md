This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


### classnames :
    - this package is used to optimize the render of classes based on conditions.

#### Prisma
- npm i prisma@5.3.1
- npx prisma init
    - creates schema.prisma file
- pass db url  in env file
- define schemas
- migrate
    - npx prisma migrate dev
        - create migration file with timestamp which have instrutions to create table in db and other things. if successfully created => we can check the db with newly created tables

- installed zod for body data validation
- npm i zod
- https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices

- radix-ui.com
    - themes to use from this
    - installation
    - npm i @radix-ui/themes
    - import the stylesheet at top of application in layout file
    - import '@radix-ui/themes/styles.css'
    - import Theme component and use it in layout.ts

- Add markdown editor
    - Install
        - npm install --save react-simplemde-editor easymde
    - import
        - import SimpleMDE from "react-simplemde-editor";
        - import "easymde/dist/easymde.min.css";
- @hookform/resolvers
    - this package help integration with data validation libraries like zob.