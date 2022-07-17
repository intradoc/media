import { getRepository } from '..'

;(async () => {
  const { repository } = await getRepository()
  await repository.update()
})()
