import Animation from './components/animation/Animation'
import './globals.css'

export const metadata = {
  title: 'Nabil Syahnaufal',
  description: 'Portfolio Nabil Syahnaufal',
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body>
          <Animation children={children} />
        </body>
      </html>
    </>
  )
}
