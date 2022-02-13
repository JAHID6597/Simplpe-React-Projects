import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../mainPage/MainPage';
import Birthday from '../birthday/Birthday';
import GithubUsers from "../githubUsers/GithubUsers";
import ToDoList from '../todo_list/ToDoList';

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact><MainPage /></Route>
      <Route path="/birthday" exact><Birthday /></Route>
      <Route path="/githubusers" exact><GithubUsers /></Route>
      <Route path="/todolist" exact><ToDoList /></Route>
    </Switch>
  );
};

export default Router;
