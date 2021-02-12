import Heading from '../components/Heading'
import Layout from '../layouts/default'
import dynamic from 'next/dynamic'
import { FrameProps, PageProps } from 'framer'

const Page = dynamic<Partial<PageProps | FrameProps>>(() => import('framer').then((framer) => framer.Page), { ssr: false })
const Frame = dynamic<Partial<FrameProps>>(() => import('framer').then((framer) => framer.Frame), { ssr: false })

export default function Home() {
    return (
        <Layout title="Home">
            <Page position="relative" minWidth="100%" height="500px">
                <Frame>
                    <Heading text="Hello World!" />
                </Frame>
                <Frame>
                    <Heading text="Hello World Again!" />
                </Frame>
            </Page>
        </Layout>
    )
}
