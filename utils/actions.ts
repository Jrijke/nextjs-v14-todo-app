'use server'

import { revalidatePath } from 'next/cache'
import db from './db'

export const newTodo = async (formData: any) => {
  await db.todo.create({
    data: {
      content: formData.get('content'),
    },
  })

  revalidatePath('/todos')
}

export const completeTodo = async (id: string) => {
  await db.todo.update({
    where: { id },
    data: { completed: true },
  })

  revalidatePath('/todos')
}
