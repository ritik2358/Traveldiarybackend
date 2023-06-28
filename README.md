# Traveldiarybackend
This is Backend of the MERN Application TravelDiary which contains build folder of the frontend and deployed using Render.

## how to run locally

- install Docker Desktop
- from the root of the project run `docker-compose up -d`, this will launch a local MongoDB instance
- `sleep 5` to let the MongoDB instance start
- `npm run dev` will run the API
- a one liner would be `docker-compose up -d && sleep 5 && npm run dev`

### how to run tests

- `npm run test`

#### how to debug tests

- open the project in VSCode
- go to any file that ends with `.test.js`
- set a breakpoint (left click on the line number) where it makes sense
- hit `F5` to start debugging