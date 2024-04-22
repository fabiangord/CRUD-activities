import { Activities } from '@prisma/client'
import { prisma } from '../config/db'
import { randomUUID } from 'node:crypto'
import { ActivitiesType } from '../types/types'

export class ActivitiesRepository {
  async create(data: ActivitiesType): Promise<Activities> {
    return await prisma.activities.create({
      data: {
        id: randomUUID(),
        title: data.title,
        dates: data.dates,
        description: data.description,
        nameUser: data.nameUser
      }
    })
  }

  async get(): Promise<Activities[]> {
    return await prisma.activities.findMany({})
  }

  async getOne(id: string): Promise<Activities | null> {
    return await prisma.activities.findUnique({
      where: {
        id
      }
    })
  }

  async getForTitle(title: string): Promise<Activities | null> {
    return await prisma.activities.findUnique({
      where: {
        title
      }
    })
  }

  async update(id: string, data: Omit<ActivitiesType, 'id'>): Promise<Activities> {
    return await prisma.activities.update({
      where: {
        id
      },
      data: {
        title: data.title,
        dates: new Date(data.dates),
        description: data.description,
        nameUser: data.nameUser
      }
    })
  }

  async delete(id: string): Promise<{ title: string }> {
    return await prisma.activities.delete({
      where: {
        id
      },
      select: {
        title: true
      }
    })
  }
}
