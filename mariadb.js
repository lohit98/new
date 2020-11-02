const mariadb = require('mariadb/callback');
const conn = mariadb.createConnection({ host: 'mydb.com', user: 'root', password: 'root', database: 'lohit' });

if (conn)
    console.log("done")
else
    console.log("ERROR")

    
    // conn.query("SELECT 1 as val", (err, rows) => {
    //     console.log(rows); //[ {val: 1}, meta: ... ]
    //     conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"], (err, res) => {
    //         console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
    //         conn.end();
    //     });
    //     console.log("ERO")
    // });
    
    