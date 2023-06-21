import type { GatsbyConfig } from 'gatsby'

import { payload } from './src/data/metadata'

const config: GatsbyConfig = {
  siteMetadata: {
    // needed for gatsby-plugin-sitemap
    siteUrl: payload.url,
  },

  plugins: [
    'gatsby-plugin-emotion',

    { resolve: 'gatsby-plugin-google-analytics',
      options: {
        'trackingId': '23423423'
      },
    },

    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',

    { resolve: 'gatsby-plugin-manifest',
      options: {
        // 'icon': 'src/images/icon.png'
      },
    },
  ]
}

export default config
