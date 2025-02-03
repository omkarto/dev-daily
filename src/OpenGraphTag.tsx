import { Helmet } from 'react-helmet';

const OpenGraphTags = ({ title, description, image, url, type = 'website' }:any) => {
  return (
    <Helmet>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8479589675657965"
     crossOrigin="anonymous"></script>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta name="google-adsense-account" content="ca-pub-8479589675657965" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default OpenGraphTags;
