import Image from 'next/image'
import styles from './page.module.scss'
import { Tours } from '@server-components'
import api from '@api';


export default async function Home() {
  const tours = await api.getTours()

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        
        <h1 className={styles.title}>
          <a href="https://instagram.com/navetrance">Nave trance</a>
        </h1>

        <p className={styles.description}>
          A companhia mais certa para seus momentos de{' '}
          <code className={styles.code}>maior loucura!</code>
        </p>

        <h5>Próximas excursões:</h5>
        <Tours tours={tours}/>
      </main>

      <footer className={styles.footer}>
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
      </footer>
    </div>
  )
}
