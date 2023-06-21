/** @type {import('semantic-release').Options} */
module.exports = {
  extends: 'semantic-release-monorepo',
  branches: [
    '+([0-9])?(.{+([0-9]),x}).x',
    'main',
    'next',
    'next-major',
    {name: 'beta', prerelease: true},
    {name: 'alpha', prerelease: true},
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/github',
    // ['@semantic-release/exec', {
    //   prepareCmd: 'export SEMREL_NEXT_RELEASE_VERSION=${nextRelease.version} && npm run deploy',
    // }],
    ['@semantic-release/git', {
      assets: [
        'CHANGELOG*',
      ],
    }],
  ],
}
