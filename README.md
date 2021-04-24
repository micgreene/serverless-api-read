# Lab 18 - AWS: API, Dynamo and Lambda

Codefellows 401 JavaScript

## Create a serverless REST API

**Overview**
- **This is the GET method used for the Lambda**
- Create a single resource REST API using a domain model of your choosing, constructed using AWS Cloud Services
- Database: DynamoDB
  - 1 Table required

- Routing: API Gateway
  - POST 
    - /people - Given a JSON body, inserts a record into the database
      - returns an object representing one record, by its id (##)
  - GET
    - /people - returns an array of objects representing the records in the database
    - /people/## - returns an object representing one record, by its id (##)
  - PUT
    - /people/## - Given a JSON body and an ID (##), updates a record in the database
      - returns an object representing one record, by its id (##)
  - DELETE
    - /people/## - Given an id (##) removes the matching record from the database
        - returns an empty object

- CRUD Operation Handlers: Lambda Functions

### Authors

- Mike Greene

### Links and Resources

- dynamoose
- uuid

### API Routes

- API: https://bj2cx2r99h.execute-api.us-west-2.amazonaws.com
  - Routes: 
    - POST: /people - inserts a record into the DB
    - GET: /people - returns an array of all objects in DB
    - GET: /people/% id# % - returns one object from the DB by its id#
    - PUT: /people/% id# % - Updates an object in the DB by its id#
    - DELETE: /people/% id# % - removes the matching object from the DB

#### `.env` requirements (where applicable)

- N/A
