import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getGreeting } from '../redux/greetingsActions';
import Greeting from './Greeting';

function App() {
  const dispatch = useDispatch();
  const getGreetingAction = bindActionCreators(getGreeting, dispatch);
  const greeting = useSelector((state) => state.greetingReducer);
  useEffect(() => {
    getGreetingAction();
  }, []);

  return (
  <Router>
    <Routes>
      <Route
        exact
        path="/"
        element={<Greeting message={greeting.message} />}
      />
    </Routes>
  </Router>
  );
}

export default App;