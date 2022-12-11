import './globals.scss'
import { Bar } from 'components'


export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head/>
      <body>
        <Bar/>
        {children}
      </body>
    </html>
  )
}
