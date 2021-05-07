
export const Feed = ({pageNumber, articles}) => {

    return (
        <>
        </>
    )
}

export const getServerSideProps = async pageContext => {
    const pageNumber = pageContext.query.news;
    if(!pageNumber || pageNumber < 1 || pageNumber > 5){
        return {
            props:{
                articles:[],
                pageNumber:1,
            }
        }
    }
}

const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
    {
        headers: {
            Authorization: `Bearer ${process.env.PUBLIC_NEWS_KEY}`
        }
    }
)