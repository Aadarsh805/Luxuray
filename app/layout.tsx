import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <header className='bg-gray-600 p-8 text-center'>header it is</header>
        {children}
        </body>
    </html>
  )
}
