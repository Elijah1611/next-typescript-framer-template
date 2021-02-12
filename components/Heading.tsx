import styled from 'styled-components'

const Text = styled.h1`
    color: red;
`

interface Props {
    text: string;
}

const Heading: React.FC<Props> = ({ text }) => {
    return <Text>{text}</Text>
}

export default Heading