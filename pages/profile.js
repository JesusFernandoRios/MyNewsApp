
import profileStyles from '../styles/profile.module.css'


export const PROFILE = ({profile}) => {

    console.log(profile)

    return(
        <div className="page-container">
            <div className={profileStyles.main}>
                <h1>My Profile</h1>

                <div className={profileStyles.myProfileClass}>

                    <h3>{profile.name}</h3>
                    <h6>{profile.position}</h6>
                    <img src={profile.image} alt="profile picture"/>
                    <p>{profile.description}</p>

                </div>
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