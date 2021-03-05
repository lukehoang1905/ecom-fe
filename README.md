# Ecommerce Web App

Yes! Ecommerce website , the constant headlines material in this era. No matter where you are right now on plannet earth, as long as you are connected to the internet, you are a pottential if not yet a customer of E-commerce. Today we are building together a simple Ecommerce website that handles some of the fundamentails requirement of a web of this nature.

In this guide, we will walk through every step in detail the entire process. However, you will be provided with boilerplate and hints which pointing to the right direction with out 100% solution. You are required to identify missing code, logics as well as bugs and pottential improvement. Sound like an enormous task, but hey, we did choose programming because it easy.

So, let's get our fingers warm up and start coding:

## Features

In a proper Ecommerce platforms, there would be multiple sellers and multiple customers. However, in our simple online shop, there are Public User, Register User and Admin who is also the owner of products sold on the web.

### Public User

- User can Navigate through **Navbar** or other **Links/Buttons** in pages
- User can login / register / logout in its **Pages**
- User can see all/filtered products with **Pagination**,
  request for single product detail, request for add to cart in **Home Page**
- User can see detail of single product, request for add to cart in **Product Detail Page**
  request checkout and redirect to **Login**
- User see notifications according to result of behaviors in **Alert Message**

### Registered User

- Inherit all Public User features and :
- R.User can have persistent login
- R.User can check profile detail in **Profile Page**
- R.User can checkout cart, make payment with their tokens in **Checkout Page**
- R.User can check orders history in **History Page**

### Admin

- Inherit all features and :
- Admin can see all Users, Product list ,Orders history through **Dashboard**
- Admin can add , edit and delete products through **Add/edit Page**
- Admin can top up user balance **Topup Balance**

## Implementation

### Client side

Let's get started:

#### Monday

**Project setup**

- [Setup a React App](./docs/00_setup_project.md)
- [Project Structure](./docs/01_project_structure.md)
- [Redux configuration](./docs/02_redux_config.md)
- [React Router and layouts](./docs/03_routes_layouts.md)

**Basic Features**

- [User can see a list of blogs in the home page](./docs/04_get_blogs.md)
