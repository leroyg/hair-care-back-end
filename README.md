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
    PUT: res = 0(unsuccessful) or 1(successful) ; req = {comment: string}

  + `api/comments/picture/:id`

    GET: res: all comments per picture, req: send id
    POST: res: 0 (unsuccessful) or 1 (successful), req: {comment: string}

  + `api/pictures`

    GET: res = all pictures, {picture: string, user_id: string}

  + `api/pictures/:id`

    GET: res = one picture, {picture: string, user_id: string}
    DELETE: res = 0 (unsuccessful) or 1(successful) ; req = send
    PUT: res = 0(unsuccessful) or 1(successful) ; {picture: string}

  + `api/pictures/stylist/:id`

    GET: res: all pictures per stylist, req: send id
    POST: res: 0 (unsuccessful) or 1 (successful), req: {picture_: string}

  + `api/likes`

    GET: res = all likes, {likes: string}

  + `api/likes/:id`
  
    GET: res = one likes, {likes: string}
    PUT: res = 0(unsuccessful) or 1(successful) ; req = {likes: string}

  + `api/likes/picture/:id`

    GET: res: all likes per picture, req: send id
    POST: res: 0 (unsuccessful) or 1 (successful), req: {likes: string}

  + `api/register`

    POST: res: provides user_id and success message, req: {username: string, password: string, isStylist: boolean}

  + `api/login`

    POST: res: provides user_id and JWT signed token, req: {username: string, password: string}

## Database & Schema Architecture

+ [ ] A normalized data model is established and persists application data

+ [ ] The database contains the following tables and schema:
  

## Database && Schema Architecture

+ [ ] A normalized data model is established and persists application data

+ [ ] The database contains a stylists table structured with the following schema:

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