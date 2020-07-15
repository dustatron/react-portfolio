import React, { Fragment } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

// Components
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Project from './pages/Project';

function App() {
  const match = useRouteMatch();
  return (
    <Fragment>
      <div className='grid-container'>
        <div className='grid-container-left'>
          <NavBar />
        </div>
        <div className='grid-container-center'>
          <Switch>
            <Route path={`/dm-portfolio/proj/:id`} component={Project} />
            <Route exact path={`/dm-portfolio`} component={Home} />
            <Route path='/' component={Home} />
          </Switch>
        </div>
        <div className='grid-container-right'></div>
      </div>
    </Fragment>
  );
}

export default App;
