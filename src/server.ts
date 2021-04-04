import express, { json } from 'express';

import user from './routes/user';
import service from './routes/service';

const server = express();

server.use(json());

server.use('/user', user);
server.use('/service', service);

export default server;
