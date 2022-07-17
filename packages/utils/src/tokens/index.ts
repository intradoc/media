const GH_TOKEN = process.env.GH_TOKEN || ''

export const getGHToken = () => {
  if (!GH_TOKEN) {
    throw new Error(`GH_TOKEN must be a GitHub token, got: "${GH_TOKEN}".`)
  }

  return GH_TOKEN
}

const NEXT_VERSION = process.env.SEMREL_NEXT_RELEASE_VERSION || ''

export const getNextVersion = () => {
  if (!NEXT_VERSION) {
    throw new Error(`NEXT_VERSION must be a version, got: "${NEXT_VERSION}".`)
  }

  return NEXT_VERSION
}
