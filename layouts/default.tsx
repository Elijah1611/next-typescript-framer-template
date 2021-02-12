import { ReactChild } from "react"
import Head from 'next/head'

interface Props {
    title: string;
    children: ReactChild | ReactChild[];
}

const Layout: React.FC<Props> = ({ title, children }) => {
    return (
        <div>
            <Head>
                <title>{title} | Cardona Contstruction</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <nav>
                <h1>Navbar</h1>
            </nav>

            <main>
                {children}
            </main>

            <footer>
                <h2>Footer</h2>
            </footer>
        </div>
    )
}

export default Layout