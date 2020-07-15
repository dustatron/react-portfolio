import React, { Fragment, useState } from 'react';
// import { Switch, Route } from 'react-router-dom';

// Components
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Project from './pages/Project';

function App() {
  const [view, setView] = useState(1);
  const [selectedProject, setSelectedProject] = useState(1);
  const handleView = (value, projId) => {
    if (projId) {
      setSelectedProject(projId);
    }
    setView(value);
    console.log('value:', value, 'view state:', view);
  };
  return (
    <Fragment>
      <div className='grid-container'>
        <div className='grid-container-left'>
          <NavBar updateView={handleView} />
        </div>
        <div className='grid-container-center'>
          {view === 1 && <Home updateView={handleView} />}
          {view === 2 && (
            <Project updateView={handleView} currentProj={selectedProject} />
          )}
          {/* <Switch>
            <Route exact path={`/proj/:id`} component={Project} />
            <Route exact path={`/home`} component={Home} />
            <Route path='/' component={Home} />
          </Switch> */}
        </div>
        <div className='grid-container-right'></div>
      </div>
    </Fragment>
  );
}

export default App;
