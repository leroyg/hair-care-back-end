# MVP Backend List

## API Structure and Endpoints

+ [ ] Build a CRUD API using Node and Express
  The following endpoints can be grouped into these major categories.  Where necessary; headers, request bodies, and responses are indicated.
  
  + `api/clients`
  
    GET: res = all clients; {first_name: string, last_name: string}

  + `api/clients/:id`
  + 
    GET: res = one client, {first_name: string, last_name: string}

  + `api/stylists`
  
    GET: res = all stylists, {first_name: string, last_name:string, phone_number:string, address:string, city:string, state:string, zip number, rating:string, services:string, specialty:string, average_cost, number, social_network_site:string, social_network_link:string, profile_photo: string},

  + `api/stylists/:id`

    GET: res = one stylist, object has the same structure has the object returned by the preceding route.

  + `api/comments`

    GET: res = all comments, {comments: string}

  + `api/comments/:id`

    GET: res = one comment, {comments: string}
    DELETE: res = 0 (unsuccessful) or 1(successful) ; req = send 

  + `api/comments/picture/:id`

    GET: res: all comments per picture, req: send id


  + `api/pictures`
  + `api/pictures/:id`
  + `api/pictures/stylist/:id`
  + `api/ratings`
  + `api/ratings/:id`
  + `api/ratings/stylist/:id`
  + `api/likes`
  + `api/likes/:id`
  + `api/likes/picture/:id`
  + `api/register`
  + `api/login`

## Database & Schema Architecture

+ [ ] A normalized data model is established and persists application data

+ [ ] The database contains the following tables and schema:
  

## Database && Schema Architecture

+ [ ] A normalized data model is established and persists application data

+ [ ] The database contains a stylists table structured with the following schema:
  
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