import express from 'express';
import routes from './routes'
import cors from 'cors';

class App {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.middleware();
    this.routes();
    
  }

  private middleware(): void {
    this.server.use(cors());
    this.server.use(express.json());
  }

  private routes(): void {
    this.server.use(routes);
  }
}

export default new App().server;