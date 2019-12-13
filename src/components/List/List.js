import React, { Component } from 'react'
import ListItem from './ListItem'
class List extends Component {
    constructor(props){
        super(props)
        console.log(this,this.props.test,this.props.userData)
    }
    render() {
        return (
            <div className="card" style={userStyle}>
               {this.props.userData.map(user=>(
                <ListItem userData={user} key={user.id}/>
               ))}
            </div>
        )
    }
}

const userStyle = {
    display: "grid",
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}

export default List
