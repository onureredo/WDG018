# Books API with Express and Neon PostgreSQL

This project is a simple RESTful API for managing books using Express.js and PostgreSQL hosted on NeonSQL. The API allows you to perform basic CRUD operations (Create, Read, Update, Delete) on a "books" table.

## Prerequisites

- Node.js (>= v16)
- NeonSQL account and database
- PostgreSQL client (optional for direct interaction with the DB)

## Getting Started

1. **Install dependencies:**

   After clone, make sure you have Node.js installed, then run:

   ```bash
   npm install
   ```

   Required dependencies:

   - dotenv: "^16.4.5"
   - express: "^4.21.0"
   - nodemon: "^3.1.7"
   - pg: "^8.13.0"

2. **Configure environment variables:**

   Create a `.env` file in the root of the project, and add your NeonSQL credentials:

   ```bash
   PGHOST='************'
   PGDATABASE='='************''
   PGUSER='='************''
   PGPASSWORD='='************''
   PORT=5432
   ```

3. **Create the `books` table in NeonSQL:**

   To interact with the database, you need to have the `books` table created. You can use the following SQL statement in the Neon SQL editor:

   ```sql
   CREATE TABLE books (
       id SERIAL PRIMARY KEY,
       name VARCHAR(255),
       author VARCHAR(255),
       image_url VARCHAR(255)
   );
   ```

4. **Insert some sample data:**

   Add sample data to the database using this SQL query:

   ```sql
   INSERT INTO books (name, author, image_url)
   VALUES
   ('Harry Potter and the Philosopher"s Stone', 'J. K. Rowling', 'https://en.wikipedia.org/wiki/Harry_Potter_and_the_Philosopher%27s_Stone#/media/File:Harry_Potter_and_the_Philosopher"s_Stone_Book_Cover.jpg');
   ```

5. **Run the development server:**

   Use `nodemon --require dotenv/config index.js` script to automatically restart the server on file changes with dotenv config.

   ```bash
   npm run dev
   ```

   The server should be running on `http://localhost:8000`.

## API Endpoints

- `GET /books`: Get all books
- `GET /books/:id`: Get a book by ID
- `POST /books`: Add a new book
- `PUT /books/:id`: Update a book by ID
- `DELETE /books/:id`: Delete a book by ID
