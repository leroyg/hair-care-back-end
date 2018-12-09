# MVP Backend List

## API Structure and Endpoints

+ [ ] Build a CRUD API using Node and Express
  
+ [ ] The following endpoints are to be built:

+ [ ] GET `/api/stylists` *this endpoint responds with an array of stylist objects containing various stylist info properties, stylist and user access.*

+ [ ] GET `/api/stylist:id` *this endpoint responds with a single stylist object and contains info as properties, stylist and user access*
  
+ [ ] POST `/api/stylists` *this endpoint accepts an object of stylist information and responds with the a newly created `[stylist_id]`. Stylist access ONLY*
  
+ [ ] PUT `/api/stylist/:id` *this endpoint allows allows a request sent with an object of modifications and responds with `[1]` (the number of objects modified) if successful. Stylist access only*

+ [ ] POST `/api/login` *this endpoint will require a request with username and password and if authenticated will allow access to all the protected routes above, if successful it will respond with the user_id and JWT Token, Stylist access only*

+ [ ] DELETE `/api/stylist/:id` *this endpoint accepts an existing id and responds with [1] (the number of objects deleted) if successful* Stylist access ONLY`

## Database & Schema Architecture

+ [ ] A normalized data model is established and persists application data

+ [ ] The database contains the following tables and schema:
  
            1. "stylist"
                "id": Integer, unsigned, required, primary key, autoincremented
                "firstname": String, required, 128 char max
                "lastname": String, required, 128 char max
                "rating": Integer, unsigned, range of 1-5
                "username": String, unique, 128 char max
                "password": String, 128 char max

            2. "work"
                "stylist_id": foreign key, 1 to many (1 stylist in theory could work at multiple locations, or work at home and a salon,etc.), required, unique, references stylist table
                "address": String, required, unique, 256 char max
                "phone": String, required, unique, 14 char max to account for 1-800-000-0000 style numbers
                "email": String, unique, 128 char max

            3.  "user"
                "id": Integer, unsigned, required, primary key, autoincremented
                "username": String, unique, 128 char max
                "password": String, 128 char max

            4.  "social"
                 "stylist_id": foreign key, 1 to many (1 stylist can be associated with many comments, replies, and likes), required, unique, references stylist table
                 "user_id": foreign key, 1 to many, required, unique, references user table
                 "comment": String, 255 char max
                 "reply": String, 255 char max
                 "like": Boolean, True if "Liked"


## Authentication

+ [ ] Authentication is incorporated into the API

+ [ ] An authenticated user can log in and the login persists for the session.  

+ [ ] An authenticated stylist can log in and the login persists.

+ [ ] A user can only access stylist data / read only and is able to post a comment and reply.
  
+ [ ] A stylist is able to gain access to posting their own profiles, modifying their profiles and deleting their own.

## Automated Testing

+ [ ] Automated testing is established and covers both endpoints and business logic
  
+ [ ] API endpoints are tested using JEST and support the expectations of the endpoints
  
+ [ ] Business and Middleware logic is tested and demonstrates expected outcomes
  
+ [ ] Testing is automated including end to end testing and integration testing.

## Deployment

+ [ ] The API is deployed to the web

+ [ ] The project is continuously deployed on commits to Github

+ [ ] The API can be accessed from anywhere

## Environmental Vars and dotenv

+ [ ] The project is configured to dynamically load the appropriate secrets based on the environment it's running on.