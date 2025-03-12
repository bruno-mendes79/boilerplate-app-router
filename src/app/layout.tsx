import type { Metadata } from 'next'
import StyledComponentsRegistry from './lib/registry'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'NextJS App',
  description: 'Boilerplate com Next.js'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
