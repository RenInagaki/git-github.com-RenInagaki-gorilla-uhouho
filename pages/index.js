import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout, {siteTitle} from '../components/Layout'
import {getPostsData} from '../lib/post'

import Link from 'next/link'
import utilStyle from '../styles/utils.module.css'

//SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData();
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (  
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyle.headingMd}>
        <p>うほほほほほほほほほほほほほ！！！！！</p>
      </section>

      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <h2>🍌杉森陽己が宇宙帝王と呼ばれた軌跡</h2>
      <div className={styles.grid}>
        {allPostsData.map(({id,title,date,thumbnail}) => (
        <article key={id}>
        <Link href={`/posts/${id}`}>
          <img src={`${thumbnail}`} className={styles.thumbnailImage}/>
        </Link>
        <Link href={`/posts/${id}`}>
          <a className={utilStyle.boldText}>{title}</a>
        </Link>
        <br />
        <small className={utilStyle.lightText}>{date}</small>
      </article>
        ))}

      </div>
      </section>
      
    </Layout>
  )
}
