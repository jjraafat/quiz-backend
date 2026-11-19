# Node.js + Express MVC Starter

A beginner-friendly Express API structure using MVC plus a service layer.

## 1. Install dependencies

```bash
npm install express
npm install --save-dev nodemon
```

## 2. Run the project

```bash
npm run dev
```

Open `http://localhost:3000`.

## 3. Folder structure

```text
node-express-mvc/
├── server.js
├── package.json
├── .env.example
├── .gitignore
├── README.md
└── src/
    ├── app.js
    ├── config/
    │   └── database.js
    ├── controllers/
    │   └── product.controller.js
    ├── middleware/
    │   └── error.middleware.js
    ├── models/
    │   └── product.model.js
    ├── routes/
    │   └── product.routes.js
    ├── services/
    │   └── product.service.js
    └── utils/
```

## 4. What each layer does

- **Model:** represents data and performs data operations. The example uses temporary in-memory storage.
- **Route:** defines API URLs and connects them to controller functions.
- **Controller:** receives the request, calls the service, and returns the response.
- **Service:** contains business logic and validation, keeping controllers simple.
- **Middleware:** runs during the request/response cycle, for example error handling.
- **Config:** stores configuration such as database connection setup.
- **Utils:** reusable helper functions.
- **app.js:** configures Express and registers middleware and routes.
- **server.js:** starts the HTTP server.

## 5. Example API endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/` | Check that the API is running |
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get one product |
| POST | `/api/products` | Create a product |
| DELETE | `/api/products/:id` | Delete a product |

Example POST JSON body:

```json
{
  "name": "Notebook",
  "price": 50
}
```

**Note:** Products are stored in memory for this starter, so they reset when the server restarts. A database can be connected later.
