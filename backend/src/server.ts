import express, { json } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import user from './routes/user';
import service from './routes/service';

const server = express();

server.use(json());
server.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
server.use(cookieParser());

server.use('/user', user);
server.use('/service', service);

export default server;
