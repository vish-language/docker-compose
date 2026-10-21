## Manual Installation
install node js locally 
clone the repo
install dependencies
run the database either from docker or neon
change the db credentials 
npx prisma migrate dev
npx prisma generate
npm build 
npm start


## Docker installation

install docker 
run the postgres image from docker hub
build the docker image from the repo `docker build  --network=host -t user-project .`
start the docker image



## Docker Compose Installation 

install docker and docker compose
run the docker compose file from the repo 

