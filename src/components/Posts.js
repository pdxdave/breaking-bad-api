import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import char_img from '../images/no_profile.jpg'


const Posts = ({posts, loading}) => {

    if(loading){
        return <h4>loading...</h4>
    }

    const addDefault = (e) => {
        e.target.src = char_img
    }

    return (

        <div style={{display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'space-between'}} >
        {posts.map(post => {
            return (
                <div class="card" style={{width: "300px"}}>
                    <div class="card-image waves-effect waves-block waves-light" style={{width: "300px" }}>
                        <img onError={addDefault}class="activator" src={post.img} alt="pic" style={{objectFit: "cover"}} />
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">{post.name}<i class="material-icons right">more_vert</i></span>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">{post.name}<i class="material-icons right">close</i></span>
                        <ul style={{textAlign: "left"}}>
                            <li>Birthday: {post.birthday}</li>
                            {post.occupation.length === 1 
                                ? (<li>Occupation: {post.occupation}</li>)
                                : (<li>Occupation: {post.occupation[0]} and {post.occupation[1]}</li>)}
                            <li>Status: {post.status}</li>
                            <li>Nickname: {post.nickname}</li><br/>
                            <li>Actor/Actress: {post.portrayed}</li>
                        </ul>
                    </div>
                </div>
            )
        })}
        
    </div>
    )
}

export default Posts
