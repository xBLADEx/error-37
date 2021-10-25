import Head from 'next/head';
import Popup from '../components/popup/popup';
import Splatter from '../components/splatter/splatter';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Error 37</title>
        <meta name="description" content="Error 37" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Error 37!</h1>
        <Splatter />
        <Popup />
      </main>
    </div>
  );
}
