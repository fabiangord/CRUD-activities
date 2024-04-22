import { BaseRouter } from '../config/base-router'
import { ActivitiesController } from '../controllers/activities'

export class ActivitiesRouter extends BaseRouter {
  constructor(private readonly controller: ActivitiesController = new ActivitiesController()) {
    super()
  }

  public routes(): void {
    this.router.post('/activities', async (req, res) => await this.controller.create(req, res))

    this.router.get('/activities', async (req, res) => await this.controller.get(req, res))

    this.router.patch('/activities/:id', async (req, res) => await this.controller.update(req, res))

    this.router.delete('/activities/:id', async (req, res) => await this.controller.delete(req, res))
  }
}
