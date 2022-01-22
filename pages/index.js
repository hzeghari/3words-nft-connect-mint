import Head from 'next/head'
import Image from 'next/image'
import HeaderCenter from '../components/HeaderCenter'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Connect and mint</title>
        <meta name="description" content="Connect your wallet and easily mint your 3 Words NFT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeaderCenter />
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
