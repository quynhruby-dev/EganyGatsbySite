module.exports = {
  siteMetadata: {
    title: 'EGANY',
    description: 'We are focused on delivering high-class front-end development (both web & mobile apps) and implementing eCommerce solutions such as Shopify, Bizweb and Haravan. Complete courses about the best tools and design systems. Prototype and build apps with React and Swift. 60 hours of video content and resource materials. No coding experience required.',
    keywords: 'react, gatsby',
    haha: 'hele'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'kertlszpntjq',
        accessToken: '871dc1ab43c2fb59aaa13f5a5a4d5e922cc6a7211d92fc065d453d73cf7cfcd0'
      }
    }
  ],
}