//仅用来展示
import React, {Fragment } from 'react'
import PropTypes from 'prop-types'

//解构props
const  ListItem = ({userData:{id ,name,value,more}}) => {
        return (
            <Fragment>
                <div className="card">
                    <span className="circle" style={circle}></span>
                    <span>{name}</span>
                    <h1>{value}</h1>
                    <h1>{more}</h1>
                </div>
            </Fragment>
        )
}
const circle = {
    display:'inline-block',
    width:'2rem',
    height:'2rem',
    borderRadius:'1rem',
    backgroundColor:'#8c8c8c'
}

//定义属性类型
ListItem.propTypes = {
    userData:PropTypes.object.isRequired,

}
export default ListItem
