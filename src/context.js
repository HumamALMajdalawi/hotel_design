import React, { Component } from 'react'
import items from './data'
const RoomContext = React.createContext()

class RoomProvider extends Component {

    state ={
        rooms: [],
        storedRooms:[],
        featuredRooms:[],
        loading: true
    }

    componentDidMount(){
     let rooms = this.formatData(items)
     let featuredRooms = rooms.filter(room => room.featured === true)
     this.setState({rooms, featuredRooms, storedRooms:rooms, loading: false})
        console.log(rooms)
    }

    formatData(items){
         let tempList  = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url)
            let room =  {...item.fields, images, id}
            return room
        })
        return tempList
    }

    getRoom = (slug) => {
       let tempRooms =  [...this.state.rooms]
       const room = tempRooms.find(room => room.slug === slug) 
       return room
    }
    render() {
        return (
            <RoomContext.Provider value={{...this.state, getRoom: this.getRoom}}>
            {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer

export {RoomContext,RoomConsumer,RoomProvider}
