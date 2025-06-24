import './globals.css'

export const metadata = {
  title: 'Tik-Tak-Game',
  description: 'Онлайн игра крестики-нолики',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
} 