import { Activities } from '@prisma/client'
import { z } from 'zod'
import { ActivitiesType } from '../types/types'

const createSchema = z.object({
  title: z.string({
    required_error: 'Title is required'
  }),
  dates: z.string({
    required_error: 'Date is required'
  }).datetime(),
  description: z.string({
    required_error: 'Description is required'
  }),
  nameUser: z.string({
    required_error: 'Name User is required'
  })
})

const createIdSchema = z.string({
  required_error: 'Id dont does exist'
})

export function validateCreateSchema(data: Activities): ActivitiesType {
  return createSchema.parse(data)
}

export function validateIdSchema(id: string): string {
  return createIdSchema.parse(id)
}
