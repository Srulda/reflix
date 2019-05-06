import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Landing  extends Component {
    constructor(){
        super()
        this.state = {
            users : [
                {name: "Srul", bColor: "blue"},
                {name: "Shiran", bColor: "red"},
                {name: "Nadav", bColor: "yellow"},
                {name: "Chen", bColor: "green"}
            ]
        }


    }

    render() {
        return (
            <div  className = "users">
                {this.state.users
                    .map(u =>
                    <Link to ="/catalog"> 
                        <div key = {u.name} style ={{backgroundColor : u.bColor}} >
                            {u.name}
                        </div>
                    </Link>)}
            </div>
        )
    }
}

export default Landing ;