## Intro

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This is work in progress.

The main purposes of this repository is to show an implementation of Azure/Entra Single Sign On using Next.js for a Single-page application but in this example I have locked the authenticated content behind another component to demonstrate the easiest MVP for implementation.

This project also makes a few assumptions:

- You do not have an existing data source or line of business system, so you require a stand alone system. Login flow is managed via Azure. MongoDB is used to safely store user bookings, customer details.
- Azure/Entra is the only acceptable autentication - all users are authenticated against your own Entra directory and only users in your Organsation can sign in with their Microsoft account. Most secure for internal applications.
- Roles/Scopes are Manager/Operative and have different views, you should have full access to the Azure portal to configure this. Sign up for a [free E5 Sandbox](https://learn.microsoft.com/en-us/office/developer-program/microsoft-365-developer-program-get-started) and sign into [Entra Admin](https://entra.microsoft.com/) with your new Organsational account.

## Demo/screenshots

You can view a demo of this project online: https://pest-control-management-system.vercel.app/

User flow: Land on login page

![image](https://github.com/Veeeetzzzz/pest-control-management-system/assets/40268197/eb1bda29-0a8d-47b8-b1b2-9a15cc0fe5a9) 

Authenticate against Entra Directory -> Get scope/role from App Role (Manager/Operative)

![image](https://github.com/Veeeetzzzz/pest-control-management-system/assets/40268197/2fb000dc-affb-48c8-bb69-584e6e93a254)

Redirect to dashboard. 

![image](https://github.com/Veeeetzzzz/pest-control-management-system/assets/40268197/287cc630-2371-45a4-a8b4-4f10e8efa3ce)

## Requirements & Getting Started

- Microsoft Entra Application - you can see the [full guide here](https://learn.microsoft.com/en-gb/entra/identity-platform/quickstart-single-page-app-react-sign-in)
- Update the [config.jsx file](https://github.com/Veeeetzzzz/pest-control-management-system/blob/main/src/components/auth/config.tsx) with your organsation's values.
- Download this repository and run ```npx next``` in the downloaded directory to run a dev server. Open [http://localhost:3000](http://localhost:3000) to see results, you can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
- When your ready for production deploy on local/internal tech stack for best practice, publicly hosted infrastructure should be used when Enterprise level SLAs can be agreed.

## To do

- Database integration
