import './globals.scss'
import { Banner } from '@server-components'


export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head/>
      <body>
        <Banner>
            {/*TODO: Include banner content*/}
        </Banner>
        {children}
      </body>
    </html>
  )
}
