import { ActivitiesService } from '../src/service/activities'
import { MockInfoTest } from './libs/classFake'
import activitiesFake from './libs/activities.json'

jest.mock('../src/repository/activities', () => {
  return {
    ActivitiesRepository: jest.fn().mockImplementation(() => new MockInfoTest())
  }
})

describe('create test', () => {
  let service: ActivitiesService

  beforeEach(() => {
    service = new ActivitiesService()
    jest.clearAllMocks()
  })

  test('create activities', async () => {
    new MockInfoTest().getForTitle = jest.fn().mockResolvedValue(null)

    const data = {
      id: '7277ee95-81dc-46e3-b130-9a5853333333',
      title: 'fake20',
      dates: '2020-01-01T00:00:00.000Z',
      description: 'fake20',
      nameUser: 'fake20'
    }

    expect(await service.create(data)).toBeDefined()
  })

  test('create activity with the same title', async () => {
    const data = {
      id: '7277ee95-81dc-46e3-b130-9a5853333333',
      title: 'fake',
      dates: '2020-01-01T00:00:00.000Z',
      description: 'fake3',
      nameUser: 'fake3'
    }
    new MockInfoTest().getForTitle = jest.fn().mockResolvedValue(data)

    await expect(service.create(data)).rejects.toThrow('The activity was created previously')
  })
})

describe('get test list', () => {
  let service: ActivitiesService

  beforeEach(() => {
    service = new ActivitiesService()
    jest.clearAllMocks()
  })

  test('get activities', async () => {
    const activities = await service.get()

    expect(activities.length).toEqual(activitiesFake.length)
  })
})

describe('update test', () => {
  let service: ActivitiesService

  beforeEach(() => {
    service = new ActivitiesService()
    jest.clearAllMocks()
  })

  test('update activities', async () => {
    const newData = {
      title: 'fake4',
      dates: '2020-01-01T00:00:00.000Z',
      description: 'fake3',
      nameUser: 'fake89'
    }

    const data = {
      title: 'fake5',
      dates: '2020-01-01T00:00:00.000Z',
      description: 'fake3',
      nameUser: 'fake89'
    }

    new MockInfoTest().getOne = jest.fn().mockResolvedValue(data)

    expect(await service.update('7277ee95-81dc-46e3-b130-9a5859888888', newData)).toEqual(newData)
  })

  test('update activity if the id does not exist', async () => {
    const newData = {
      title: 'fake4',
      dates: '2020-01-01T00:00:00.000Z',
      description: 'fake3',
      nameUser: 'fake89'
    }

    await expect(service.update('7277ee95-81dc-46e3-b130-9a5859888880', newData)).rejects.toThrow('The activity was does not exist')
  })
})


describe('delete test', () => {
  let service: ActivitiesService

  beforeEach(() => {
    service = new ActivitiesService()
    jest.clearAllMocks()
  })

  test('delete activities', async () => {
    const data = {
      id: '7277ee95-81dc-46e3-b130-9a5859888888',
      title: "fake",
      dates: "2020-01-01T00:00:00.000Z",
      description: "fake",
      nameUser: "fake"
    }

    new MockInfoTest().getOne = jest.fn().mockResolvedValue(data)

    expect(await service.delete('7277ee95-81dc-46e3-b130-9a5859888888')).toEqual({ title: data.title })
  })

  test('delete activity if the id does not exist', async () => {
    await expect(service.delete('7277ee95-81dc-46e3-b130-9a585988881010')).rejects.toThrow('The activity was does not exist')
  })
})


