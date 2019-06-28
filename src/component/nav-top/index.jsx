import React from 'react'
import {Link} from 'react-router-dom'

class NavTop extends React.Component{

    onLogout(){
        console.log("退出登陆")
    }
    render(){
        return (
            <div className="navbar navbar-default top-navbar">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/"><b>WHY</b>JS</Link>
                    </div>

                    <ul className="nav navbar-top-links navbar-right">

                        <li className="dropdown">
                            <a className="dropdown-toggle" href="javascript:;">
                                <i className="fa fa-user fa-fw"></i>
                                    <span>欢迎您</span>
                                <i className="fa fa-caret-down"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-user">

                                <li>
                                    <a onClick={()=>{this.onLogout()}}>
                                        <i className="fa fa-sign-out fa-fw"></i>
                                        <span>退出登录</span>
                                    </a>
                                </li>
                            </ul>

                        </li>

                    </ul>
                </div>
        );
    }
}


export default NavTop