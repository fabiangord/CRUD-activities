En este caso el proyecto esta realizado con PNPM y su base de datos esta con Docker

1. Recuerda tener instalado NODE, PNPM(si desea ejecutar con NPM `npm i`) y DOCKER
2. Crear archivo .env con DATABASE_URL=
3. Ejecutar contenedor en docker `docker compose up --build`
4. Ejecutar app `pnpm run start:dev`
5. Ejecutar unit test `pnpm run test`
