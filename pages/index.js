import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Meriem</p>
        <p>
          I'm a fullstack developer and a marketing professional passionate about digital products. 
          {' '}
          Reach out at Meriem.Manouchi@gmail.com or 
          {' '}
          <a href="https://www.linkedin.com/in/meriemmanouchi/"> find me at LinkedIn</a>.
        </p>
      </section>
    </Layout>
  )
}