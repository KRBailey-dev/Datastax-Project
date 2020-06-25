/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
		{
			resolve: 'gatsby-plugin-snipcart',
			options: {
        apiKey: 'YzU2ODE2NDQtOGY4NC00ODc5LWFjNzMtOTNmMDNmYTQyNDkxNjM3Mjg0MzcxMDY5NTU5Mzk2',
        autopop:true,
			}
		},
	]
}
