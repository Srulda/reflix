import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Landing  extends Component {
    constructor(){
        super()
        this.state = {
            users : [
                {name: "Srul", img: "https://pbs.twimg.com/media/CadzcrOW0AE5hzG.jpg"},
                {name: "Nadav", img: "https://www.staffstars.com/images/user/missing.png"},
                {name: "Shiran", img: "https://blog.eu.playstation.com/files/avatars/avatar_4937499.jpg"},
                {name: "Chen", img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/f9fa8a33850498.56ba69ac2cc3a.png"}
            ]
        }


    }

    render() {
        return (
            <div>
            <h1 id= "watching">Who's Watching?</h1>
            <div  className = "users">
                 {this.state.users
                    .map(u =>
                    <Link to ="/catalog" style={{ textDecoration: 'none' }}> 
                        <div id="user" key = {u.name} style={{backgroundImage: `url(${u.img})`}} >
                            {u.name}
                        </div>
                    </Link>)}
            </div>
        </div>
        )
    }
}

export default Landing ;