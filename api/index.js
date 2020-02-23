const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const { Db } = require('./db/db');

class Server {
  constructor(db, port) {
    this.db = db;
    this.port = port;
    this.app = express();

    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id');
      res.header('Access-Control-Expose-Headers', 'x-access-token, x-refresh-token');
      next();
    });
    this.app.use(morgan('tiny'));
    this.app.use(cors());
    this.app.use(bodyParser.json());

    this.initRoutes();
    this.initServer();
  }

  initRoutes() {
    this.app.get('/', (req, res) => {
      res.status(200).send('ok');
    });

    this.app.post('/save', (req, res) => {
      let user = req.header('x-username');
      let song = req.body.song;
      let description = req.body.description;

      if (!user) return res.status(401).send('Missing user');
      if (!song) return res.status(402).send('Missing song');
      if (!description) return res.status(402).send('Missing description');

      let sql = `INSERT INTO saves (username, saves_doc, description)\
                 VALUES ('${user}', '${song}', '${description}');`

      this.db.conn.query(sql, (error, result) => {
        if (error) return res.status(500).send(error);
        res.status(200).send(result);
      });

    });

    this.app.get('/saves', (req, res) => {
      let search = req.query.search;
      let sql = `SELECT * FROM saves WHERE username='${search}'\
                OR idsaves='${search}'\
                OR description LIKE '%${search}%';`

      if (!search) sql = `SELECT * FROM saves`;
      

      this.db.conn.query(sql, (error, result) => {
        if (error) return res.status(500).send(error);
        res.status(200).send(result);
      });
    });

    this.app.delete('/saves', (req, res) => {
      let id = req.query.id;
      let sql = `DELETE FROM saves WHERE idsaves='${id}';`

      if (!id) return res.status(402).send('Missing id');
      
      this.db.conn.query(sql, (error, result) => {
        if (error) return res.status(500).send(error);
        res.sendStatus(200);
      });
    });

    this.app.patch('/saves', (req, res) => {
      let id = req.body.id;
      let username = req.body.username;
      let song = req.body.song;
      let description = req.body.description;

      if (!id) return res.status(402).send('Missing id');
      if (!username) return res.status(402).send('Missing username');
      if (!song) return res.status(402).send('Missing song');
      if (!description) return res.status(402).send('Missing description');

      let sql = `UPDATE saves SET username = '${username}' ,\
                                  saves_doc = '${song}' ,\
                                  description = '${description}'\               
                  WHERE idsaves=${id}`

      
      this.db.conn.query(sql, (error, result) => {
        if (error) return res.status(500).send(error);
        res.sendStatus(200);
      });
    });
  }

  initServer() {
    this.server = this.app.listen(this.port, () => {
      console.log(`Example app listening at port ${this.port}`);
    });
  }
}

let db = new Db();
db.initConnection()
  .then(() => {
    new Server(db, 3000);
  }).catch((err) => {
    console.error(err);
  });