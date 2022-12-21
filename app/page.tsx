import Image from 'next/image'
import styles from './page.module.scss'
import { Tours } from '@server-components'
import api from '@api';


export default async function Home() {
  const tours = await api.getTours()

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>Próximas excursões:</h2>
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
