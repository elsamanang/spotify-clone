import '../styles/globals.css'

import '@icon-park/react/styles/index.css'
import styles from "../styles/Home.module.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
      <div className={styles.container}>
          <Head>
              <title>Spotify-clone | Home</title>
              <meta name="description" content="My clone of spotify web app" />
              <link rel="icon" href="/icon-green-64.png" />
              <link rel="stylesheet" href="/css/all.css"/>
              <link rel="stylesheet" href="/css/all.min.css"/>
              <link rel="stylesheet" href="/css/solid.css"/>
              <link rel="stylesheet" href="/css/solid.min.css"/>
              <link rel="stylesheet" href="/css/regular.css"/>
              <link rel="stylesheet" href="/css/regular.min.css"/>
              <link rel="stylesheet" href="/css/fontawesome.min.css"/>
              <link rel="stylesheet" href="/css/fontawesome.css"/>
              <script src="/js/all.js"/>
              <script src="/js/all.min.js"/>
              <script src="/js/solid.js"/>
              <script src="/js/solid.min.js"/>
              <script src="/js/regular.js"/>
              <script src="/js/regular.min.js"/>
              <script src="/js/fontawesome.min.js"/>
              <srcipt src="/js/fontawesome.js"/>
          </Head>
          <Component {...pageProps} />
      </div>)
}

export default MyApp
