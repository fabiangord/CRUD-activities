import { Request, Response } from 'express'
import { ActivitiesService } from '../service/activities'
import { validateCreateSchema, validateIdSchema } from '../schemas/activities'

export class ActivitiesController {
  constructor(private readonly service: ActivitiesService = new ActivitiesService()) { }

  async create(req: Request, res: Response): Promise<string | Response<Error>> {
    try {
      const data = validateCreateSchema(req.body)

      return res.status(200).json(await this.service.create(data))
    } catch (error) {
      return error instanceof Error ? res.status(400).json({ message: error.message }) : `unexpected error ${error}`
    }
  }

  async get(_req: Request, res: Response): Promise<string | Response<Error>> {
    try {
      return res.status(200).json(await this.service.get())
    } catch (error) {
      return error instanceof Error ? res.status(400).json({ message: error.message }) : `unexpected error ${error}`
    }
  }

  async update(req: Request, res: Response): Promise<string | Response<Error>> {
    try {
      const id = validateIdSchema(req.params.id)

      const data = validateCreateSchema(req.body)

      return res.status(200).json(await this.service.update(id, data))
    } catch (error) {
      return error instanceof Error ? res.status(400).json({ message: error.message }) : `unexpected error ${error}`
    }
  }

  async delete(req: Request, res: Response): Promise<string | Response<Error>> {
    try {
      const id = validateIdSchema(req.params.id)

      return res.status(200).json(await this.service.delete(id))
    } catch (error) {
      return error instanceof Error ? res.status(400).json({ message: error.message }) : `unexpected error ${error}`
    }
  }
}
