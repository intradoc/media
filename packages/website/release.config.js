module.exports = {
  extends: 'semantic-release-monorepo',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/github',
    ['@semantic-release/exec', {
      prepareCmd: `
        export SEMREL_NEXT_RELEASE_VERSION=\${nextRelease.version}
        && npm run deploy
      `,
    }],
    ['@semantic-release/git', {
      assets: [
        'CHANGELOG*',
      ],
    }],
  ],
}
