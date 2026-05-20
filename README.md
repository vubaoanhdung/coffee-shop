# Coffee Shop

A full-stack web application for a coffee shop with separate client-facing and employee-facing interfaces. Customers can browse the menu, add items to their cart, and pay via Stripe. Employees can manage menu items and fulfill orders.

## Tech Stack

- **Backend:** Node.js, Express, MongoDB (Mongoose)
- **Client App:** React, Redux, React Router (port 3000)
- **Employee App:** React, Redux, React Router (port 3001)
- **Authentication:** Google OAuth 2.0 (Passport.js)
- **Payments:** Stripe

## Project Structure

```
coffee-shop/
├── index.js              # Express server entry point
├── config/               # API keys and environment config (gitignored)
├── models/
│   ├── User.js           # User schema (googleId, cart, history)
│   ├── Item.js           # Menu item schema (name, description, price, calories, image)
│   └── Order.js          # Order schema (name, ready, imageSource, customer)
├── routes/
│   ├── authRoutes.js     # Google OAuth login/logout/callback
│   ├── menuRoutes.js     # CRUD for menu items
│   ├── billingRoutes.js  # Stripe payment processing
│   ├── ordersRoutes.js   # Order retrieval and fulfillment
│   └── updateRoutes.js   # Add/remove items from user cart
├── services/
│   └── passport.js       # Passport Google OAuth strategy
├── middlewares/
│   └── requireLogin.js   # Auth guard middleware
├── client/               # Customer-facing React app (port 3000)
│   └── src/
│       ├── components/   # Landing, Menu, Item, Cart, Payment, History, Header
│       ├── actions/      # Redux action creators
│       └── reducers/     # User and menu reducers
└── employee/             # Employee-facing React app (port 3001)
    └── src/
        ├── components/   # Header, App
        └── routes/       # Landing, Menu, Orders, ItemEdit, ItemCard, ItemForm
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v14+)
- [MongoDB](https://www.mongodb.com/) instance (local or Atlas)
- [Google OAuth 2.0 credentials](https://console.cloud.google.com/apis/credentials)
- [Stripe API keys](https://dashboard.stripe.com/apikeys)

## Configuration

Create a `config/keys.js` file in the project root with your credentials:

```js
module.exports = {
  googleClientId: "YOUR_GOOGLE_CLIENT_ID",
  googleClientSecret: "YOUR_GOOGLE_CLIENT_SECRET",
  mongoURI: "YOUR_MONGODB_CONNECTION_STRING",
  cookieKey: "YOUR_COOKIE_SECRET",
  stripePublishableKey: "YOUR_STRIPE_PUBLISHABLE_KEY",
  stripeSecretKey: "YOUR_STRIPE_SECRET_KEY",
};
```

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/vubaoanhdung/coffee-shop.git
   cd coffee-shop
   ```

2. **Install dependencies:**

   ```bash
   npm install
   cd client && npm install && cd ..
   cd employee && npm install && cd ..
   ```

3. **Set up configuration** (see [Configuration](#configuration) above).

4. **Run all services concurrently:**

   ```bash
   npm start
   ```

   This starts the Express API server (port 5000), the client app (port 3000), and the employee app (port 3001) simultaneously using `concurrently`.

## API Endpoints

| Method   | Endpoint                         | Description                     | Auth Required |
| -------- | -------------------------------- | ------------------------------- | ------------- |
| `GET`    | `/auth/google`                   | Initiate Google OAuth login     | No            |
| `GET`    | `/auth/google/callback`          | Google OAuth callback           | No            |
| `GET`    | `/api/current_user`              | Get the currently logged-in user| No            |
| `GET`    | `/api/logout`                    | Log out the current user        | No            |
| `GET`    | `/api/menu`                      | Get all menu items              | No            |
| `GET`    | `/api/menu/:id`                  | Get a single menu item          | No            |
| `POST`   | `/api/menu`                      | Create a new menu item          | No            |
| `PATCH`  | `/api/menu/:id`                  | Update a menu item              | No            |
| `DELETE` | `/api/menu/:id`                  | Delete a menu item              | No            |
| `POST`   | `/api/stripe`                    | Process a Stripe payment        | Yes           |
| `PATCH`  | `/api/current_user/add_item`     | Add an item to the user's cart  | No            |
| `PATCH`  | `/api/current_user/remove_item`  | Remove an item from the cart    | No            |
| `GET`    | `/api/orders`                    | Get all orders                  | No            |
| `DELETE` | `/api/orders/:orderId`           | Mark order as ready and remove  | No            |

## Screenshots

### Client

![client1](https://user-images.githubusercontent.com/39688337/158076139-2261aa6f-4d20-4512-a509-4da624ab1d17.png)
![client2](https://user-images.githubusercontent.com/39688337/158076144-82e58949-0d3e-4df9-9569-7c2905055391.png)
![client3](https://user-images.githubusercontent.com/39688337/158076157-7ba15786-e453-4807-bab1-d4b82c0a39d0.png)
![client4](https://user-images.githubusercontent.com/39688337/158076158-a767a022-e598-4d8f-a166-6612b0d0ff62.png)
![client5](https://user-images.githubusercontent.com/39688337/158076159-52ca6da4-a82c-48ab-a074-2e6dca9d6f4c.png)
![client6](https://user-images.githubusercontent.com/39688337/158076160-efc1f98b-f497-4ea6-8957-350d0a00e7e9.png)
![client7](https://user-images.githubusercontent.com/39688337/158076161-4c534cfb-1912-4b9a-800f-a202d76f6e88.png)

### Employee

![employee1](https://user-images.githubusercontent.com/39688337/158076164-2199b97a-f78e-4391-9db5-2c332d554d52.png)
![employee2](https://user-images.githubusercontent.com/39688337/158076165-bc7e365f-37c4-47af-a9e5-7000adcb86f6.png)
![employee3](https://user-images.githubusercontent.com/39688337/158076166-5c9567ff-0f89-4c50-8a5d-4fc35e21baf8.png)
![employee4](https://user-images.githubusercontent.com/39688337/158076167-23c856af-27e2-4de1-8a8a-3fd323b157e0.png)
![employee5](https://user-images.githubusercontent.com/39688337/158076168-d02c9b13-c48a-4b62-9dac-a76a180aa00e.png)

## License

ISC
