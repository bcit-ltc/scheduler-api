module.exports = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    // disable '@semantic-release/release-notes-generator',
    // disable @semantic-release/github to avoid pipeline errors
  ],
};
