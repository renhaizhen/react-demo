//无状态组件 rfc
import React from 'react'
//这里直接解构props
const Navbar = ({type})=> {
        return (
            <div className="navbar bg-primary">
                <h1>React {type}</h1>
            </div>
        )
}
//默认值
Navbar.defaultProps = {
    type:'Demo'
}

export default Navbar
