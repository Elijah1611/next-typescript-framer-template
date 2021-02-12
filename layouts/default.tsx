import { ReactChild } from "react"
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { FrameProps } from "framer"

const Frame = dynamic<Partial<FrameProps>>(() => import('framer').then((framer) => framer.Frame), { ssr: false })

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
                <Frame position="relative" width="100%" height="auto">
                    <h2>Footer</h2>
                </Frame>
            </footer>
        </div>
    )
}

export default Layout