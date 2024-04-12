# Express.js API with Sequelize and PostgreSQL

This is a functional Express.js API integrated with Sequelize ORM to interact with a PostgreSQL database. It provides endpoints to perform CRUD operations on categories, products, and tags.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Description

This API serves as the backend for managing categories, products, and tags. It leverages Sequelize as an ORM to interact with the PostgreSQL database. The API supports CRUD operations through various endpoints, providing flexibility in managing data.

## Features

- Connection to a PostgreSQL database using Sequelize ORM
- Automatic creation and seeding of a development database with test data
- Syncing Sequelize models with the PostgreSQL database
- RESTful API endpoints for categories, products, and tags
- Support for GET, POST, PUT, and DELETE operations
- Formatted JSON responses for easy consumption

## Installation

To install and run the Express.js API locally, follow these steps:

1. Clone this repository to your local machine using `git clone`.
2. Navigate to the project directory.
3. Create a `.env` file and add your database name, PostgreSQL username, and PostgreSQL password in the following format:

   ```plaintext
   DB_NAME=your_database_name
   DB_USER=your_postgres_username
   DB_PASSWORD=your_postgres_password
   ```

4. Install dependencies by running `npm install` or `yarn install`.
5. Run the schema and seed commands to create the development database and seed it with test data:

   ```bash
   npx sequelize-cli db:create
   npx sequelize-cli db:migrate
   npx sequelize-cli db:seed:all
   ```

6. Start the application by running `npm start` or `yarn start`.
7. The server should now be running, and Sequelize models will be synced to the PostgreSQL database.

## Usage

Once the server is running, you can interact with the API using tools like Insomnia Core or Postman:

- Use GET routes for `/api/categories`, `/api/products`, and `/api/tags` to retrieve data in formatted JSON.
- Test POST, PUT, and DELETE routes in Insomnia Core or Postman to create, update, and delete data in the database.

## Testing

To test the API routes, you can use tools like Insomnia Core or Postman. Here's how you can test:

1. Open Insomnia Core or Postman.
2. Use the appropriate HTTP methods (GET, POST, PUT, DELETE) along with the API routes (`/api/categories`, `/api/products`, `/api/tags`) to perform CRUD operations.
3. Verify that the data is retrieved, created, updated, or deleted successfully.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or feature requests, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
```

Feel free to copy and use it in your Markdown file!
