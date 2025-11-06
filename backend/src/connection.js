import mysql from 'mysql2/promise'

const connection = await mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: 'root',
  password: "P@$$w0rd",
  database: "status"
});

console.log('---> Conexão com BD estabelecida <---');


export default connection