import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import http from 'http';
//import { config } from 'dotenv/types';
import configData from './environment';
const app = express ();

app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


app.get('/index', (req, res) => {
    //console.log('res', res);
    res.send('Hello Index!');
  })

  app.post('/create', (req, res) => {
    res.send('Hello Create!')
  })

  app.delete('/remove', (req, res) => {
    res.send('Hello Delete!')
  })

  app.put('/update', (req, res) => {
    res.send('Hello Update!')
  })


const server = http.createServer(app);

function startServer(){
    server.listen(configData.port, parseInt(configData.host), function (){
        console.log('Express server listening on %d, in %s mode %s', configData.port, configData.host, configData.env);
    });
}

setImmediate(startServer);


