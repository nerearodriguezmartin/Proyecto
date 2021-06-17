import mysql from 'promise-mysql';
import keys from './keys'
// import  Error, Row, Field from 'mysql';

const pool = mysql.createPool(keys.database);

pool.getConnection()
    .then(connection => {
        pool.releaseConnection(connection);
        console.log('DB is connected');
    });

    /*pool.query('SELECT * FROM users', function(err: Error, rows, fields) {
        if (err) throw err;
      });*/
export default pool;