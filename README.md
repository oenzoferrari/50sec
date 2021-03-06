# 50sec
#### Video Demo:  https://youtu.be/9nmyVIbDnQM
#### Description: 
A safe way to store and generate strong passwords in the Cloud. This project makes use of two-way cyphering and hashing techinics to safely handle passwords in the Cloud. All the client-side authentication is handled by JWT tokens, and React Contexts to listen to cookies changing every 100ms. The database chosen was MongoDB, the frontend framework was React (Next.js) and the backend was built entirely in Node.js. The process starts with the input of a service, its name and login, then, the server generates a secure password, and encyphers it with both the user key and the server key. The user auth records, makes use of bcrypt to hash the password, making it one-way encrypted. When the user asks for their services, the server can decypher all the service passwords generated with the provided user key.

This is 50sec! It is an utilitary that can generate passwords and store them safely in the cloud.
The process is safe because the database has zero knowledge about any of the passwords (even the user password).

An example of the process:

    INPUT (password) 
        --> [cypher] (based on the user secret and the server secret)
            --> [store] (store only the cypher in the database)

An example of how the user password is stored:

    INPUT (password) 
        --> [hash] (one-way encryption hash)
            --> [store] (store only the hash in the database)

What happens when the user logs in?:

    INPUT (REQUEST) 
        --> [token] (verify if the user token is valid)
            --> [retrieve] (retrieve all user's cyphers)
                --> [decypher] (decypher all the user cyphers)

The decyphering needs both the user secret and the server secret. The server and the database doesn't know what is the user secret.

The frontend is entirely built on React, for reasons being: it's my comfortable zone. 

The backend is entirely on Node.js (using typescript), for the same reason.

The database was a mongoDB instance, running on Docker.

You'll need:

- mongoDB instance listening to 27017 port. 
- create .env file on the backend root with 3 secrets
- run yarn to install packages on both frontend and backend
- run yarn dev on both, to initialize the applications