import React            from 'react';
import ReactDOM         from 'react-dom';
import { BrowserRouter, Switch, Redirect, Route, Link } from 'react-router-dom'


//页面
import Layout from 'component/layout/index.jsx';
import Home from 'page/home/index.jsx';
import Login from 'page/login/index.jsx';


class App extends React.Component{
    render(){
        let LayoutRouter = (
            <Layout>
                <Switch>
                    <Route exacts path="/" component={Home} />
                    <Route path="/product" component={Home} />
                    <Route path="/product-category" component={Home} />
                    <Route path="/order" component={Home} />
                    <Route path="/user" component={Home} />
                </Switch>
            </Layout>
        );
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/" render={ props => LayoutRouter}/>
                </Switch>
            </BrowserRouter>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);