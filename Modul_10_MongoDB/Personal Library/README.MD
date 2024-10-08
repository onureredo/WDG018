# Personal Library API

This is a RESTful API for managing a personal library. The API allows users to create accounts, manage a reading list, and perform CRUD operations for both users and books. Below is a step-by-step guide to set up and run the API.

## API Overview

The API has two main resources:

1. **Books**: Manage the books in the library.
2. **Users**: Manage users and their personal reading lists.

The API has been deployed on Render, and the base URL for the live version is:

**[https://wdg18-personallibrary.onrender.com](https://wdg18-personallibrary.onrender.com)**

All the local endpoints are also available on Render.

---

## Local Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd personal-library-api
```

### 2. Install Dependencies

Make sure you have `Node.js` and `npm` installed. Then, install the necessary dependencies:

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```
MONGO_URI=<your-mongodb-uri>

```

Replace `<your-mongodb-uri>` with your actual MongoDB connection string.

### 4. Running the Server

To start the server in development mode with `nodemon`, use the following command:

```bash
npm run dev
```

By default, the API will run on `http://localhost:8000`.

### 5. API Endpoints

#### **Books**

- **GET /books**  
  Retrieve all books in the library.
- **GET /books/:id**  
  Retrieve a specific book by its ID.

- **POST /books**  
  Add a new book to the library.  
  Request body example:

  ```json
  {
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "isbn": "9780316769488"
  }
  ```

- **PUT /books/:id**  
  Update the details of a specific book.

- **DELETE /books/:id**  
  Remove a book from the library.

#### **Users**

- **GET /users**  
  Retrieve all users, including their reading lists.

- **GET /users/:id**  
  Retrieve a specific user by their ID.

- **POST /users**  
  Create a new user.  
  Request body example:

  ```json
  {
    "firstName": "John",
    "lastName": "Doe"
  }
  ```

- **PUT /users/:id**  
  Update a user's details.

- **DELETE /users/:id**  
  Delete a user from the system.

#### **Users' Reading List**

- **POST /users/:id/books**  
  Add a book to a user's reading list.  
  Request body example:

  ```json
  {
    "bookRefId": "615c1fd1c25e4c001c5a4678"
  }
  ```

- **PUT /users/:id/books/:bookId**  
  Toggle the read/unread status of a book in a user's reading list.

- **DELETE /users/:id/books/:bookId**  
  Remove a book from a user's reading list.

---

## Deployment

This project is deployed on Render. You can access the API at:

**[https://wdg18-personallibrary.onrender.com](https://wdg18-personallibrary.onrender.com)**

All the endpoints mentioned above are available via this URL.
