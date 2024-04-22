import { ActivitiesType } from '../../src/types/types'
import activitiesFakeInfo from './activities.json'

export class MockInfoTest {
  create(data: ActivitiesType): ActivitiesType {
    return data
  }

  get(): ActivitiesType[] {
    const activities = activitiesFakeInfo
    return activities
  }

  update(_id: string, data: ActivitiesType): ActivitiesType {
    return data
  }

  delete(id: string): { title: string | undefined } {
    return { title: this.getOne(id)?.title }
  }

  getForTitle(title: string): ActivitiesType | null {
    const activity = activitiesFakeInfo.find(activity => activity.title === title)
    return activity ? activity : null
  }

  getOne(id: string): ActivitiesType | null {
    const activity = activitiesFakeInfo.find(activity => activity.id === id)
    return activity ? activity : null
  }
}
