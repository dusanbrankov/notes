# Fetch methods

When you send a network request with the fetch method, you are performing a fetch with a method **GET** by default. There are 4 common methods that you should know about:

Every one of these methods corresponds to an action:

- **GET**: _read data_
- **POST**: _create data_
- **PUT**: _update data_
- **DELETE**: _delete data_

You, as the web developer (the end user of an API), will be told which `method` to use. Remember the base URL we talked about? Here's what the documentation looks like:

Base URL: https://example.com/api

- list users GET `/users`
- create a user POST `/users`
- update a specific user PUT `/users/{id}`
- delete a specific user DELETE `/users/{id}`

It's important to note that this is a convention and that APIs might differ a little bit. It ultimately depends on how they were implemented. Always read their documentation.

## Request 'body'

Requests made with method **PUT**, **POST**, or **DELETE** can have an extra field called `body`. The body can contain any information that you want to send with the request. However, requests made with **GET** are not allowed to have a `body`.

Here's why:

With **GET**, you are _reading_ information. You're not sending information.

Whereas with the other methods, you are sending information. For example, to update a user, you have to provide the new details. Another example, to create a new user, you have to provide the details of that user.

These details go in the `body` of the fetch request.
