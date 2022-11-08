import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Lobster&family=Roboto:wght@300&family=Ubuntu:wght@500&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
