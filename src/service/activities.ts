import { Activities } from '@prisma/client'
import { ActivitiesRepository } from '../repository/activities'
import { ActivitiesType } from '../types/types'

export class ActivitiesService {
  constructor(private readonly repository: ActivitiesRepository = new ActivitiesRepository()) { }

  async create(data: ActivitiesType): Promise<Activities> {
    const activity = await this.repository.getForTitle(data.title)

    if (activity != null) throw new Error('The activity was created previously')

    return await this.repository.create(data)
  }

  async get(): Promise<Activities[]> {
    const activities = await this.repository.get()

    return activities
  }

  async update(id: string, data: ActivitiesType): Promise<Activities> {
    const activity = await this.repository.getOne(id)

    if (activity === null) throw new Error('The activity was does not exist')

    return await this.repository.update(id, data)
  }

  async delete(id: string): Promise<{ title: string }> {
    const activity = await this.repository.getOne(id)

    if (activity === null) throw new Error('The activity was does not exist')

    return await this.repository.delete(id)
  }
}
