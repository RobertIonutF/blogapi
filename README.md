# BlogAPI

## Introduction

BlogAPI is a simple, yet powerful REST API designed for blogging applications. It provides a solid foundation for managing users and blog posts, offering endpoints for authentication, user management, and post operations.

## Installation

To get started with BlogAPI, clone this repository and install the dependencies:

```bash
git clone https://github.com/RobertIonutF/blogapi.git
cd blogapi
npm install
```

Ensure you have Node.js installed on your system to run the application.

## Usage

Start the server with the following command:

```bash
node app.js
```

## API Endpoints

### User Operations

- **Register a User**: POST `/auth/sign-up`
- **Login**: POST `/auth/sign-in`

### Post Operations

- **Create a Post**: POST `/posts`
- **Get All Posts**: GET `/posts`
- **Get a Single Post**: GET `/posts/:id`
- **Update a Post**: PATCH `/posts/:id`
- **Delete a Post**: DELETE `/posts/:id`

## Contributions

Contributions are welcome! If you'd like to contribute, please fork the repository and create a pull request with your changes.

---

This README provides a basic overview of the BlogAPI project. For detailed information on request and response formats, refer to the specific route handlers within the code.
