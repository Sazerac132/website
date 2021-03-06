import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import './style.scss';

import Header from '../Header';
import Menu from '../Menu';
import Footer from '../Footer';

import Blog from '../Blog';
import BlogPost from '../../Components/BlogPost';
import Photography from '../Photography';

const App = () => {
  return (
    <div className='pageWrapper'>
      <div className='wrapper'>
        <Header />
        <div className='separator' />
        <Router>
          <Menu />
          <div className='separator' />
          <Switch>
            <Route path='/' exact component={Blog} />
            <Route path='/blog/' exact component={Blog} />
            <Route path='/blog/category/:category' component={Blog} />
            <Route path='/blog/:slug' component={BlogPost} />
            <Route path='/technology/' component={Blog} />
            <Route path='/about/' component={Blog} />
            <Route path='/photography/' component={Photography} />
            <Route path='/music/' component={Blog} />
            <Route path='/blog/:category?' component={Blog} />
            <Route path='/contact/' component={Blog} />
          </Switch>
        </Router>
        <div className='separator' />
        <Footer />
      </div>
    </div>
  );
}

export default App;
