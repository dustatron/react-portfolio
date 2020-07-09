import React, { Fragment } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

// Components
import Home from './components/Home';
// Components
import Project from './components/Project';

function App() {
  return (
    <Fragment>
      <div className='grid-container'>
        <div className='grid-container-left'>
          <p>
            <Link to={'/'}>Home</Link>
          </p>
          <p>
            <Link to={'/proj/1'}>Proj</Link>
          </p>
        </div>
        <div className='grid-container-center'>
          <Switch>
            <Route path='/proj/:id' component={Project} />
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
        <div className='grid-container-right'>right</div>
      </div>
    </Fragment>
  );
}

export default App;
