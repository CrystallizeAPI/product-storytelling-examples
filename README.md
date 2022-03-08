# Product Storytelling
The product storytelling boilerplate is a minimal eCommerce boilerplate built using Remix and Crystallize. You can also check out the [live demo](https://dounot.milliseconds.live/) of this boilerplate.

![dounot-frontpage](https://user-images.githubusercontent.com/26195876/156512917-e86bc64d-6069-4ed8-9705-74134b40a257.png)

## What this guide covers:

- Setting up your project
- Instructions for running the project
- Accessing the development site
- Folder structure of the boilerplate
- Editing the components and the overall theme
- Deploying the project

## Getting Started

To get started, head over to GitHub and clone [the repository](https://github.com/CrystallizeAPI/product-storytelling-examples). This project contains two folders - remix and service-api. The remix folder contains the application while the service-api folder contains a middleware service that connects your frontend to your backend. You can find a more detailed explanation of what the API does in the [GraphQL Service API documentation](https://crystallize.com/learn/open-source/boilerplates/service-api). Make sure to install all the required packages by running the following command for both the folders:

```bash
npm install
```

## Running the Project

Running the project in development is very straightforward. To run the project, head over to the ‘remix’ folder and run the following command:

```bash
npm run dev
```

> Note: In order to disable LiveReload on Production we had to create a new NODE_EXECUTION_MODE variable to indicate the correct execution mode to the app.
> Indeed, Remix was using NODE_ENV correctly but it was always passing NODE_ENV === 'development' to the application.
> It might be a Remix bug.


## Accessing the Development Site


Once the development server is running, you will be able to browse to http://localhost:3000.

![dounot-development](https://user-images.githubusercontent.com/26195876/156513206-abb8cda1-ead0-4cf1-81df-fcca82529ba6.png)

## Folder Structure (Remix)

This section provides you with a better understanding of the folder structure.

**app/components**

Contains all the components used throughout the application

**app/config**

A single file containing the details of the locale

**app/crystallize**

Includes the GraphQL queries used to fetch data from Crystallize

**app/routes**

Has all the individual pages the website contains

**app/service-api**

This folder contains all the queries related to the service-api

**app/styles**

The styles folder has the CSS files needed to style the components

## Editing the theme

All the theme related information can be edited in the **tailwind.config.js** file. This includes the colors, spacing, typography used throughout the application.

## Editing the components

Components can be edited by heading over to the **components** folder in **app.** 

### Frontpage

The frontpage contains a grid and it is fetching all the grid related information (including the layout) from Crystallize. You can directly edit the grid in Crystallize for changes to take effect. Editing the styling such as the background and typography can be done in the **grid-item** component.

![dounot-grid](https://user-images.githubusercontent.com/26195876/156513469-1e8d04ba-cbd7-4e4c-a1f4-3e45cc430948.png)

### Product

Individual product pages are using two components - one is the **product** component that contains the hero section, and the ‘Add to cart’ button and then the **product-body** component that can be edited to change the layout of the marketing information displayed on the page.

### Cart, Checkout, and Confirmation

The basket, checkout, and the confirmation pages can be edited in their respective files located in the **routes** folder.

## Deploying to Fly.io

The first step is to install **flyctl.** To do so, head over to the [Fly.io documentation](https://fly.io/docs/getting-started/installing-flyctl/). Once installed, you can sign up or login to Fly by typing the following command:

```bash
flyctl auth signup
```

Next step is to build the app which can be done by entering:

```bash
flyctl launch
```

Lastly, to deploy the application, all you need to do is run:

```bash
npm run deploy
```
## Next Step: Service API

In order to manage a fully operational conference website, you need to manage basket validation, payments and such. For that, we have prepared a boilerplate for you, the [Service API boilerplate](https://crystallize.com/learn/open-source/boilerplates/service-api), which you would want to add alongside your project. Follow [our guide](https://crystallize.com/learn/open-source/boilerplates/service-api) for how to set it up.
