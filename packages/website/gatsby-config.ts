import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
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
        'icon': 'src/images/icon.png'
      },
    },
  ]
}

export default config
