server menggunakan node sequelize express 
database menggunakan potgres (konfigurasi terlebih dahulu pada config/config.json sesuai keinginan)


jalankan server:
cd server or open in integrated terminal
npm i
sequelize db:create or npx sequelize-cli db:create
sequelize db:migrate or npx sequelize-cli db:migrate
sequelize db:seed:all or npx sequelize-cli db:seed:all
npm start

jalankan client:

open in integrated terminal pada client/client-fastprint
npm i 
npm run dev
open http://localhost:5173/ (by default)

