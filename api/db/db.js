const mysql = require('mysql');

const { db_creds } = require('../config/config');

class Db {
    constructor() {
    }

    initConnection() {
        return new Promise((reject, resolve) => {
            this.conn = mysql.createConnection(db_creds);
            this.handleConnection()
                .then(() => {
                    resolve();
                })
                .catch((err) => {
                    reject(err);
                });
            this.handleError();
        });
    }

    handleConnection() {
        return new Promise((reject, resolve) => {
            this.conn.connect((err) => {
                if (err) {
                    console.error('MySql error connecting: ' + err.stack);
                    reject();
                    return;
                }
                resolve();
                console.log('MySql connected...');
            });

        })
    }

    closeConn() {
        return new Promise((resolve) => {
            this.conn.end(() => {
                console.log('MySql conn closed.')
                resolve();
            });
        })
    }

    handleError() {
        this.conn.on('error', (err) => {
            // if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                this.initConnection();
            // } else {
                // throw err;
            // }
        });
    }
}

module.exports = { Db };