import React from 'react'
import {Link} from 'react-router-dom'

import NavTop from 'component/nav-top/index.jsx'
import NavSide from 'component/nav-side/index.jsx'
import './index.css'
import './theme.css'

class Layout extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div id="wrapper">
                <NavTop />
                <NavSide />
                {this.props.children}
            </div>
        );
    }
}

export default Layout