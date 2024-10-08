## Update 28/09/2024.

This repo has served it's purpose and will be archived with no plans to contribute further.

If you are interested in the continuation of this project, efforts are now focused on rebuilding a complete open source solution with full intergration into Enterprise ecosystems.

You can visit the [Pest Control Standalone Reporting Form repository](https://github.com/Veeeetzzzz/pest-control-standalone-reporting-form/tree/main) to stay up to date on this endavour. 

## Intro

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This project should not be used in production settings. 

The main purposes of this repository is to show an implementation of Azure/Entra Single Sign On using Next.js for a Single-page application but in this example I have locked the authenticated content behind another component to demonstrate the easiest MVP for implementation. It is a basic MVP to demonstrate one type of implementation for Azure/Entra Single Sign On with Next.js applications.

This project also makes a few assumptions:

- You do not have an existing data source or line of business system, so you require a stand alone system.
- Microsoft Entra is the only acceptable autentication - all users are authenticated against your own Entra directory.
- Roles/Scopes are Manager/Operative and have different views, you should have full access to the Azure portal to configure this.

## To do list

- Fix/test profile picture import for navbar
- Move database calls to API calls via PostgREST/postgrest (experimental)

## Demo/screenshots

You can view a demo of this implementation via https://pest-control-management-system.vercel.app but note you will not be able to login as it authenticates against my own Azure resources - download this project, update the config.jsx file with your values and you can test this locally.

User flow: Land on login page

![image](https://github.com/Veeeetzzzz/pest-control-management-system/assets/40268197/eb1bda29-0a8d-47b8-b1b2-9a15cc0fe5a9) 

Authenticate against Entra Directory -> Get scope/role from App Role (Manager/Operative)

![image](https://github.com/Veeeetzzzz/pest-control-management-system/assets/40268197/2fb000dc-affb-48c8-bb69-584e6e93a254)

Redirect to dashboard. 

![image](https://github.com/Veeeetzzzz/pest-control-management-system/assets/40268197/287cc630-2371-45a4-a8b4-4f10e8efa3ce)

## Requirements & Getting Started

- Microsoft Entra Application - you can see the [full guide here](https://learn.microsoft.com/en-gb/entra/identity-platform/quickstart-single-page-app-react-sign-in)
- Sign up for a [free E5 Sandbox](https://learn.microsoft.com/en-us/office/developer-program/microsoft-365-developer-program-get-started) and sign into [Entra Admin](https://entra.microsoft.com/) with your new Organsational account.
- Update the [config.jsx file](https://github.com/Veeeetzzzz/pest-control-management-system/blob/main/src/components/auth/config.tsx) with your organsation's values.
- Populate your DB with the scripts in [/db-demo-scripts/dashboard.sql](https://github.com/Veeeetzzzz/pest-control-management-system/blob/main/db-demo-scripts/dashboard.sql)
- Update [components/auth/postgres-stuff file](https://github.com/Veeeetzzzz/pest-control-management-system/blob/main/src/components/auth/postgres-stuff.tsx)
- The application will now use dummy data generated by the script to populate the views.
- Download this repository and run ```npx next``` in the downloaded directory to run a dev server. Open [http://localhost:3000](http://localhost:3000) to see results, you can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
- When your ready for production deploy on local/internal tech stack for best practice, publicly hosted infrastructure should be used when Enterprise level SLAs can be agreed.
