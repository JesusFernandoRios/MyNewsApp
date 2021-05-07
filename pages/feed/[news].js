import styles from '../../styles/posts.module.css'

export const Feed = ({pageNumber, articles}) => {

    console.log(pageNumber)
    console.log(articles)
    return (
        <div className={styles.main}>
            {articles.map((article, index) => (
                <div key={index} className={styles.post}>
                    <h1>{article.title}</h1>
                    <img src={article.urlToImage} alt={article.title}/>
                </div>
            ))}
        </div>
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

    const apiResponse = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}
        `,
        {
            headers: {
                Authorization: `Bearer ${process.env.PUBLIC_NEWS_KEY}`
            }
        }

    );

    const apiJson = await apiResponse.json();

    const {articles} = apiJson;

    return {
        props:{
            articles,
            pageNumber: Number.parseInt(pageNumber)
        }
    }

}



export default Feed;