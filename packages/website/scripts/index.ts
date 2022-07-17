import { join } from 'node:path'
import { newRepository } from '@utils/repository'

// -----------------------------------------------------------------------------

export const ROOT_DIR = join(__dirname, '..')
export const DIST_DIR = join(ROOT_DIR, '/.dist')

export const USER       = 'intradoc'
export const REPOSITORY = 'intradoc.github.io'

// -----------------------------------------------------------------------------

export const getRepository = async () => {
  const repository = await newRepository({
    user:       USER,
    repository: REPOSITORY,
    dist:       DIST_DIR,
  })

  return { repository }
}
