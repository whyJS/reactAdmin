import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import PageTitle    from 'component/page-title/index.jsx';

class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div id="page-wrapper">
                <PageTitle title="首页" />
                <Link to="/">首页</Link>
            </div>

        );
    }
}

export default Home