
# Simplified ERP System with React

The goal of this project is to create a simplified interface for an ERP (Enterprise Resource
Planning) system, designed to manage basic business operations efficiently.

ERP systems play a crucial role in helping organizations streamline their operations, improve efficiency, and adapt to changing business needs in today's competitive landscape.

This website's name is LogisticSystem, and a logo was created to give it a realistic appearance.I made three components. They are: Dashboard, Products,and Orders.

# Objectives

Developing a user-friendly interface, utilizing React, implementing React Router for navigation, and ensuring responsive design.



## Sidebar Component

This Sidebar Component has  logo and name of the website and below them menu is specified ,in menu there are menuitems like DashBoard,Products,Orders.

 They have smooth transitions applied using css.youn can see these transitions by clicking on each of them. 

## DashBoard Component

The purpose of the Dashboard page, which is to provide an overview of key metrics or features.

This Component consists of two cards through which users can get to know about features like total number of products, total number of orders.




## Products Component

This Component has a table in which user can get to know about the total information about Products
such as name of the product, product ID,category of the product,price,stock of the product.

Buttons like

"Add" can insert new row,

"Edit" can modify the data in row,

"Delete" can delete row.

## Orders Component

This Component has a table in which user can get to know about the total information about Orders
such as name of the Customer Name, order ID,Date of delivery,status i.e (Pending,Approved,Delivered) of the order.

Buttons like

"Add" can insert new row,

"Details" can show details about the Order,

"Delete" can delete row.
## Main code

    import './App.css';
     css file of the main code.
    import Sidebar from './components/Sidebar/Sidebar';
     It anables to use <Sidebar> component.
    import DashBoard from './components/DashBoard/DashBoard';
     It anables to use <DashBoard> component.
    import Products from './components/Pages/Products/Products';
     It anables to use <Products> component.
    import Orders from './components/Pages/Orders/Orders'
     It anables to use <Orders> component.
     import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
     to use this import react-router-dom should be installed in the system(mentioned how to install in installation).
      
#BrowserRouter: 
BrowserRouter is a router implementation that uses the HTML5 history API (pushstate, replacestate, and popstate events) to keep your UI in sync with the URL. It is the parent component used to store all other components.

#Route: 
This is a new component introduced in v6 and an upgrade of the component. The main advantages of Switch Over Routes are:
        
#Route: 
A route is a conditionally shown component that provides UI when its path matches the current URL.

#Links: 
The Links component creates links for different routes and implements navigation around the application. It works as an HTML anchor tag.







## Technology Used
   HTML,
   CSS,
   Javascript,
   React.
## Installation

#Install Node.js and npm:

Before creating a React app, ensure that Node.js and npm are installed on your system by following the steps mentioned in the previous response.

#Create a React App:

Open a terminal or command prompt.
Use npm to install the create-react-app package globally by running the following command:

```bash
  npm install -g create-react-app

```

#Generate a New React App:

Once create-react-app is installed, you can create a new React app by running:

```bash
   npx create-react-app my-react-app

```


Replace "my-react-app" with the desired name,i named it as "erp-system-app" for your React application. This command will create a new directory with the specified name and generate the initial project structure and files for your React app.

Navigate to Your React App Directory:

#Change into the directory of your newly created React app:

```bash
    cd erp-system-app
```
#install React Router 

  React Router is a standard library for routing in React. It enables navigation between views from different components in a React application, allows the browser URL to be changed, and keeps the UI in sync with the URL.

```bash
    npm i react-router-dom
```
    
## Deployment

Once inside React app directory, you can start the development server
 
 

To deploy this project 

```bash
  npm start
```

This command will compile your React app and launch it in your default web browser. You'll be able to see your React application running at http://localhost:3000.
   
you can see DashBoard page because it is set as index page. 
   
To navigate to various pages user have to type routes in browser serach bar 
 
For DashBoard  http://localhost:3000/DashBoard

For Products   http://localhost:3000/Products

For Orders     http://localhost:3000/Orders

OR

Can navigate through buttons below the page 

For DashBoard  DashBoard button

For Products   Products button

For Orders     Orders button

OR

Can navigate through Sidebar also 
 
## Folder Structure

A part from the folder Structure created by the Create command the other folders are 
In Public folder
img of logo is saved in public folder.
    index.html
     has logo and title of website .
In src folder

    Components
         In Components folder ,there are folders 
    Card 
         This floder has code to design Card.
    Cards
         This floder has code to design Cards.
    Sidebar
         This floder has code to design Sidebar.
    DashBoard
         This floder has code to design DashBoard.
    Pages
             This floder has another two floders 
    Products
             This floder has code to design       Products.    
    Orders
             This floder has code to design Orders.
    Data
     This floder has code that is used as data to other components.
    imgs
      This floder has  images which are used in project.


    App.js 
       This file has the main page code include all components(Sidebar,DashBoard,Products,Orders) which are created. 
    App.css
       This file has the main page css.
       
          
    
##Logo

This is the logo of this website

![logo](https://github.com/SuprathikaKodi/erp-system-app/assets/93345887/f61fe7c3-4943-4897-9156-e9d03de4322d)


## Outputs

IndexPage

![IndexPage](https://github.com/SuprathikaKodi/erp-system-app/assets/93345887/03c6170c-a8d0-4ad1-aaac-b1d5603c6918)

DashBoard

![DashBoardPage](https://github.com/SuprathikaKodi/erp-system-app/assets/93345887/f798faaf-f913-4525-8076-6aab2e700025)

Products Page

![ProductsPage](https://github.com/SuprathikaKodi/erp-system-app/assets/93345887/92672995-ee33-4cbd-a622-91a174811b06)

Orders Page

![OrdersPage](https://github.com/SuprathikaKodi/erp-system-app/assets/93345887/c5af93f2-7927-475f-a430-d7cac100be78)
