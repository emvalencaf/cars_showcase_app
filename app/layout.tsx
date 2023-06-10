// components
import Footer from '../components/Footer';
import Header from '../components/Header';

// css
import './globals.css';


// metadata of the webapp
export const metadata = {
  title: 'Car Hub App',
  description: 'Discover the best cars in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
