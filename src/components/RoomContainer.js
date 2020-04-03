import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import {withContextConsumer} from '../context'
import Loading from './Loading'

function RoomContainer({context}){
    const {loading,storedRooms, rooms} = context
        if(loading)
            return <Loading/>

        return  (
        <div>
            <RoomFilter rooms={rooms} />
            <RoomList  rooms={storedRooms} />
        </div>  
        )   
}

export default withContextConsumer(RoomContainer)