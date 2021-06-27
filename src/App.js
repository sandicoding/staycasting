import React from 'react';
import 'assets/scss/style.scss';
import { BrowserRouter as Router, Route,} from 'react-router-dom'
import LandingPage from 'pages/LandingPage';
import Example from 'pages/Example';
import DetailsPage from 'pages/DetailsPage';

function App() {
  return (
      <div className="App">
          <Router>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/properties/:id" component={DetailsPage} />
              <Route path="/example" component={Example} />
          </Router>
      </div>
  );
}

export default App;
