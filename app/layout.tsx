import './globals.scss'
import { Banner } from '@server-components'
import styles from "./page.module.scss";


export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head/>
      <body>
        <Banner>
            <p className={styles.description}>
              A companhia mais certa para seus momentos de maior loucura!
            </p>
        </Banner>
        {children}
      </body>
    </html>
  )
}
