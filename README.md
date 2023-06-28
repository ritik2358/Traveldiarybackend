# Traveldiarybackend
This is Backend of the MERN Application TravelDiary which contains build folder of the frontend and deployed using Render.

## how to run locally

- install Docker Desktop
- from the root of the project run `docker-compose up -d`, this will launch a local MongoDB instance
- `sleep 5` to let the MongoDB instance start
- `npm run dev` will run the API
- a one liner would be `docker-compose up -d && sleep 5 && npm run dev`