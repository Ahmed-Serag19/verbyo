# Verbyo App

![Verbyo Logo](./src/assets/verbyo-logo.png)

Welcome to the **Verbyo App** repository! This React-based web application is designed to enhance the social media experience by providing users with the ability to create and share content, get rewarded, and amplify social causes. The app is built with a modern front-end stack including React, Tailwind CSS, and various other utilities to ensure a seamless and fully responsive user experience.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Responsive Design](#responsive-design)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Verbyo App offers users a platform where they can create content on social media, get rewarded for their contributions, and participate in campaigns that drive social change. It is designed to be user-friendly and is fully responsive, ensuring optimal performance across all devices.

## Features

- **Dynamic Content Sharing**: Users can select content to post on their social media accounts and get rewarded.
- **Campaigns**: Participate in advertising and social cause campaigns directly from the app.
- **Internationalization**: Multi-language support with English and French translations.
- **Responsive Design**: Optimized for mobile, tablet, and desktop screens.
- **Brand Collaboration**: Trusted by major brands and foundations.
- **Interactive Elements**: Includes Swiper.js for dynamic slideshows, Accordion for FAQs, and more.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Swiper.js**: A modern mobile touch slider with hardware-accelerated transitions.
- **react-i18next**: A powerful internationalization framework for React applications.
- **react-helmet**: Manage document head changes dynamically within your React components.
- **react-device-detect**: For detecting the user’s device and rendering components conditionally.
- **AOS (Animate On Scroll)**: Animate elements on scroll with ease.
- **Material Tailwind**: For additional UI components and utilities.

## Installation

To get started with the Verbyo App locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/verbyo-app.git
   Navigate into the project directory:
   ```

bash
Copy code
cd verbyo-app
Install the dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
Open your browser and navigate to:

bash
Copy code
http://localhost:3000
Usage
Home Page: The main landing page includes a hero section, brand collaborations, campaigns, and more.
Language Selector: Toggle between English and French using the language selector in the navbar.
Dynamic Content: Explore the “What You Can Do” and “How App Works” sections to see content updates and interactions.
Footer: The footer includes links to the Terms & Conditions, Privacy Policy, and social media profiles.
Project Structure
Here’s a brief overview of the project structure:

php
Copy code
verbyo-app/
│
├── public/ # Static files
├── src/ # Source code
│ ├── assets/ # Images and icons
│ ├── components/ # Reusable components
│ ├── contexts/ # React context for global state
│ ├── pages/ # Page components for routing
│ ├── styles/ # Global and component-specific styles
│ ├── utils/ # Utility functions and context providers
│ └── index.js # Entry point of the application
├── .eslintrc.js # ESLint configuration
├── tailwind.config.js # Tailwind CSS configuration
├── vite.config.js # Vite configuration
├── package.json # Node.js dependencies and scripts
└── README.md # This file
Responsive Design
The app is designed to be fully responsive, ensuring a seamless user experience on all device sizes:

Mobile: Optimized layouts for smaller screens, including responsive image scaling and touch-friendly interactions.
Tablet: Enhanced readability and interaction space for medium-sized screens.
Desktop: Utilizes available screen real estate to provide a richer experience with additional features and content visibility.
Contributing
We welcome contributions to improve the Verbyo App! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature-name).
Make your changes.
Commit your changes (git commit -m 'Add your message here').
Push to the branch (git push origin feature/your-feature-name).
Open a pull request.
License
The Verbyo App is open-source software licensed under the MIT license.
