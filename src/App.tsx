import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Tags from './views/Tags'
import {Tag} from './views/Tag'
import Money from './views/Money'
import Statistics from './views/Statistics'
import NoMatch from './views/NoMatch'
import styled from 'styled-components';

const AppWrapper = styled.div`
  color:#333;
`

export default function App() {
  return (
    <AppWrapper>
      <Router>
            <Switch>
              <Route exact path="/tags">
                <Tags />
              </Route>
              <Route exact path="/tags/:tag">
                <Tag></Tag>
              </Route>
              <Route exact path="/money">
                <Money />
              </Route>
              <Route exact path="/statistics">
                <Statistics />
              </Route>
              <Redirect exact from="/" to="/tags"/>
              <Route path="*">
                <NoMatch/>
              </Route>
            </Switch>
      </Router>
    </AppWrapper>
  );
}





