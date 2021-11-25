import PropTypes from "prop-types"
import markdownToHtml from "../lib/markdownToHTML"
import getLocalFile from "../lib/getLocalFile"

// Components
import Layout from "../components/layout/layout"
import Map from "../components/sections/map"
import Users from "../components/sections/users"
import Video from "../components/sections/video"
import Images from "../components/sections/images"
import Markdown from "../components/sections/markdown"
import Message from "../components/sections/message"

export async function getServerSideProps() {

    const intro = await markdownToHtml(getLocalFile('intro.md'))

    const names = JSON.parse(getLocalFile('names.json'))

    const users = JSON.parse(getLocalFile('users.json'))

    return {
        props: {
            names,
            users,
            intro
        },
    }
}

export default function Home(props) {

    return (
        <Layout names={props.names}>

            <Images/>

            <Markdown markdown={props.intro}/>

            <Video/>

            <Users users={props.users}/>

            <Map/>

            <Message/>

        </Layout>
    )
}

Home.propTypes = {
    names: PropTypes.array.isRequired,
    users: PropTypes.array.isRequired,
    intro: PropTypes.string.isRequired
}
