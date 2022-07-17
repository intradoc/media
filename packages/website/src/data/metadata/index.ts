import type { Metadata } from '../../types/data'

export { key } from './key'

export const payload: Metadata = {
  title:   '@intradoc - Update Your Docs In-Place',
  url:     'https://intradoc.github.io',
  version: process.env.SEMREL_NEXT_RELEASE_VERSION || '0.0.0-development',
}
