import express from 'express'
import { ActivitiesRouter } from './routes/activities'

class Server {
  public app: express.Application = express()
  public PORT: Number = 4000

  constructor() {
    this.app.use(express.json())
    this.app.use('/api', this.router())
    this.listen()
  }

  public router(): express.Router[] {
    return [
      new ActivitiesRouter().router
    ]
  }

  public listen(): void {
    this.app.listen(this.PORT, () => {
      console.log(`Recibiendo en el puerto ${this.PORT}`)
    })
  }
}

void new Server()
