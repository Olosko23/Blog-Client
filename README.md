
# Blogging Website Documentation.

<hr />

https://phreddy.netlify.app/

 <hr />

## Introduction

Welcome to the documentation for your blogging website! This documentation provides an overview of the structure and functionality of the website, with a focus on the `app.js` file.

## Table of Contents

1. [Overview](#overview)
2. [File Structure](#file-structure)
3. [Routing](#routing)
4. [Components](#components)
5. [Pages](#pages)
6. [Settings](#settings)
7. [Recommendations](#recommendations)
8. [How To Contribute](#contribute)

## Overview

Your blogging website is built using React and utilizes the React Router library for navigation. The `app.js` file is the entry point of your application and defines the structure of your website, including the navigation bar, routes, and footer.

## File Structure

The file structure of your project may look like this


## Routing

Routing is handled using the `react-router-dom` library. The `BrowserRouter` component is used to wrap the entire application. Routes are defined using the `Routes` and `Route` components

Here's a breakdown of the routes in your application:

- `/` - Home page (`<Home />`)
- `/about` - About page (`<About />`)
- `/contact` - Contact page (`<Contact />`)
- `/blogs` - Blogs page (`<Blogs />`)
- `/blog/:id` - Individual blog page (`<Blog />`)
- `/login` - Login page (`<Login />`)
- `/signup` - Signup page (`<Signup />`)
- `/forgot_password` - Forgot Password page (`<ForgotPassword />`)
- `/reset/password/:token` - Reset Password page (`<ResetPassword />`)
- `/privacy_policy` - Privacy Policy page (`<Privacy />`)
- `/terms_of_service` - Terms of Service page (`<Terms />`)
- `/create` - Blog creation page (`<Create />`)
- `/details` - Blog details page (`<Details />`)

## Components

- **Navbar:** The navigation bar component (`<Navbar />`) is displayed at the top of each page, providing links to different sections of the website

- **Footer:** The footer component (`<Footer />`) is displayed at the bottom of each page, containing additional information or links.

## Pages

### Home

- Displays the main content of your homepage

### About

- Provides information about your website or organization

### Blogs

- Lists all the blogs available on your website

### Blog

- Displays a specific blog post based on the provided `id` parameter.

### Login

- Allows users to log in to their accounts.

### Signup

- Allows new users to create an account.

### ForgotPassword

- Assists users in recovering their forgotten passwords.

### ResetPassword

- Allows users to reset their passwords using a provided token

### Privacy

- Presents the privacy policy of your website.

### Terms

- Displays the terms of service for your website.

### Create

- Enables users to create new blog posts.

### Details

- Provides detailed information about a specific blog post

### Error404
- Provides a page to show broken links.


