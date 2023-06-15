import '../styles/globals.css'
import '@icon-park/react/styles/index.css'
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
      <div className="contents">
          <Head>
              <title>Spotify-clone | Home</title>
              <meta name="description" content="My clone of spotify web app" />
              <link rel="icon" href="/icon-green-64.png" />
              <link rel="stylesheet" href="/css/all.css"/>
              <link rel="stylesheet" href="/css/all.min.css"/>
              <link rel="stylesheet" href="/css/solid.css"/>
              <link rel="stylesheet" href="/css/solid.min.css"/>
              <link rel="stylesheet" href="/css/brands.min.css"/>
              <link rel="stylesheet" href="/css/brands.css"/>
              <link rel="stylesheet" href="/css/regular.css"/>
              <link rel="stylesheet" href="/css/regular.min.css"/>
              <link rel="stylesheet" href="/css/fontawesome.min.css"/>
              <link rel="stylesheet" href="/css/fontawesome.css"/>
              <Script src="/js/all.js"></Script>
              <Script src="/js/all.min.js"></Script>
              <Script src="/js/solid.js"></Script>
              <Script src="/js/solid.min.js"></Script>
              <Script src="/js/regular.js"></Script>
              <Script src="/js/regular.min.js"></Script>
              <Script src="/js/brands.js"></Script>
              <Script src="/js/brands.min.js"></Script>
              <Script src="/js/fontawesome.min.js"></Script>
              <Script src="/js/fontawesome.js"></Script>
          </Head>
          <Component {...pageProps} />
      </div>)
}

export default MyApp
