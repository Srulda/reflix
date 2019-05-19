import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Landing  extends Component {
    constructor(){
        super()
        this.state = {
            users : [
                {name: "Srul", img: "https://ep01.epimg.net/cultura/imagenes/2017/06/26/television/1498473684_141038_1498480140_noticia_normal.jpg"},
                {name: "Nadav", img: "https://ae01.alicdn.com/kf/HTB1IWWZc4k98KJjSZFoq6xS6pXaF/Free-Shipping-Halloween-Carnival-Masquerade-Adult-Cosplay-The-Mask-Costume-Props-Eco-friendly-Latex-Jim-Carrey.jpg_640x640.jpg"},
                {name: "Shiran", img: "https://lgbtfansdeservebetter.com/static/uploads/2017/03/Maia-Rose-Leslie.png"},
                {name: "Chen", img: "https://thumbs.gfycat.com/IcyAgedGreendarnerdragonfly-poster.jpg"}
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
                        </div>
                        {u.name}
                    </Link>)}

            </div>
        </div>
        )
    }
}

export default Landing ;