module.exports = {
  // Client ID are safe to expose
  client_id:
    "746239575955-c4d2o1ahg4ts6ahm3a5lh5lp9g8m15h4.apps.googleusercontent.com",
  // Client secret and refresh token are encrypted
  // Using encryption key
  // https://drive.mbaharip.com/gudora-setup
  client_secret:
    "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",
  refresh_token:
    "1//0ezoztzL7obWECgYIARAAGA4SNwF-L9IrC5oObU8u-l6mLcfiNcUS5ryEZPKKZUA3UCNbm5xkHpYXt4g-fx-iQq9HVX92eaQM4EA",

  files: {
    // How many files to show per page
    itemsPerPage: 25,
    // Max number of files to show in search result
    searchResult: 5,
    // Starting point of the drive
    // Use 'root' to use My Drive as starting point
    // Or use folder id to use a specific folder as starting point
    // TODO: Change when final
    // rootFolder: "root",
    rootFolder: "1KgPV6QB1GYT8fmn2uTfbtr9rDXqcRR0j", // Test folder
    // Limit breadcrumb to specific depth
    // 0 = Unlimited
    // 1 = Only show current folder
    // 2 = Show current folder and its parent
    // 3 = Show current folder and its parent and grandparent
    // and so on.
    // Warning: More parent = More API calls = Slower loading time
    // There are no workaround for this yet, since Google Drive API v3 return only 1 parent
    // Default: 2
    breadcrumbDepth: 2,
  },

  // Cache control header
  // https://web.dev/uses-long-cache-ttl/
  // Default: 1 minute
  cache: "s-maxage=60, stale-while-revalidate",

  // Max response body size
  // If you're using Vercel, the max response size is 4.5MB
  // https://vercel.com/docs/platform/limits#serverless-function-payload-size-limit
  // If you're using another platform that has different limit,
  // change this value to match your platform.
  maxResponseSize: 4 * 1024 * 1024,
};
