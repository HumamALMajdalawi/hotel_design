import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import {Link} from 'react-router-dom'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {RoomContext} from '../context'
import { withRouter } from "react-router-dom";

 class SingleRoom extends Component {

        constructor(props){
            super(props)

            this.state  = {
                slug: this.props.match.params.slug,
                defaultBcg: defaultBcg
            }
        }

    

   static contextType = RoomContext
    
    render() {
        console.log(this.props)
        const {getRoom} = this.context
        const room = getRoom(this.state.slug)
        if(!room)
            return (<div className="error">
                <h3>no such room could be found ... </h3>
                <Link to="/rooms" className="btn-primary">back to rooms</Link>
            </div>)

        const {name,description,capacity,size,price,extras,breakfast,pets,images} = room

        return (
            <Hero hero="roomsHero">
                <Banner title={`${name} room`}>
                    <Link to="/rooms" className="btn-primary">back to rooms</Link>
                </Banner>
            </Hero>
        )

    }
}

export default withRouter(SingleRoom)