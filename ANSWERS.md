<!-- Answers to the Short Answer Essay Questions go here -->

1. What is the purpose of using _sessions_?

Sessions allows us to store authentication information for each device that accesses our app on the server. We do this by producing a cookie on the server and sending that to the client w/proper authentication. The client then sends this session data (cookie) pm every request and now the server can verify that the user is verified if they provide a valid cookie on each request. 

2. What does bcrypt do to help us store passwords in a secure manner.

Bcrypt is a Key Derivation library which gives us the ability to add time to our hashing function to encrypt our passwords to prevent attackers (or anyone really) from seeing them in plaintext. 

3. What does bcrypt do to slow down attackers?

Bcrypt adds hashing rounds you specify to a password and can manually/automatically salt (add more noise) to your passwords. We don't have to write our own hash function using these types of libraries. This helps prevent rainbow table attacks because the random string adds to the randomized output you get which makes it harder to crack. 

4. What are the three parts of the JSON Web Token?
The three parts of a JSON Web Token are the header, the payload, and the verification signature. 
