import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import PlayersList from './components/PlayersList';
import CreatePlayer from './components/CreatePlayer';
import EditPlayer from './components/EditPlayer';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene
        key="auth"
      >
        <Scene
          key="login"
          title="Please Login"
          component={LoginForm}
          initial
        />
      </Scene>
      <Scene
        key="main"
      >
        <Scene
          rightTitle="Add"
          onRight={() => Actions.createPlayer()}
          key="playersList"
          title="Players"
          component={PlayersList}
          initial
        />
        <Scene
          key="createPlayer"
          title="Create Player"
          component={CreatePlayer}
        />

        <Scene
          key="editPlayer"
          title="Edit Player"
          component={EditPlayer}
        />
      </Scene>
    </Router>
  )
}

export default RouterComponent;
