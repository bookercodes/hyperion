export async function getStaticPaths() {
    const paths = [{
        params: {
            id: "123"
        }
    }]
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    return {
        props: {
            id: params.id
        }
    }
}

export default function Post ({ id }) {
    return (
        <h1>Post {id}</h1>
    )
}