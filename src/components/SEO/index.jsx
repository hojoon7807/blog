import React from "react"
import { Helmet } from "react-helmet"
import { siteUrl } from "../../../blog-config"

const SEO = ({ title, description, url }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={`${siteUrl}/og-image.png`} />
      {description && <meta name="description" content={description} />}
      {description && <meta property="og:description" content={description} />}
      <meta
        name="google-site-verification"
        content="J1DeB9jjrm-HfEuSQjTEh-iX81f3BdNw24p0VEoF7rk"
      />
    </Helmet>
  )
}

export default SEO
