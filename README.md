# DealDepot

A fully functional e-commerce web application built on MERN stack

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
npm and Node.js installed

### Cloning the repo
```
$ git clone git@github.com:keshavbhagat7/DealDepot.git
$ cd DealDepot
```

### Installing
Execute these commands from the project directory
```
npm install
cd frontend && npm install
```

### .env
In the backend > config > config.env file, you can find some information. Please update the following variables using your own API keys and update the Simple Mail Transfer Protocol (SMTP) credentials.
```
DB_URL=your_url
STRIPE_SECRET_KEY=your_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret
JWT_SECRET=your_token
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_publishable_api_key
CLOUDINARY_API_SECRET=your_secret_api_key
```

## Running the app
Open a terminal on backend directory
```
$ npm run dev
```

and open another terminal on frontend directory
```
$ npm start
```

Access the web app at http://localhost:3000/

## Production Usage
https://dealdepot.onrender.com/

## Technologies
- Front-end: React.js, redux, JavaScript, HTML5/CSS3
- Back-end: Node.js, Express.js, MongoDB
- API's - Stripe API, Cloudinary API, MongoDb keys, SMTP credentials, JWT key
