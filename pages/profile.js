export const PROFILE = ({profile}) => {
    return(
        <div className="page-container">
            <div>
                <h1>My Profile</h1>
            </div>
        </div>
    )
}

export const getServerSideProps = async pageContext => {
    const apiResponse = await fetch(
        'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth'
    );

    const profile = await apiResponse.json()

    return {
        props:{
            profile
        }
    }
}

export default PROFILE;