import './App.css';
import Navigationbar from './components/navbar';
import Homepage from './components/homepage';
import Staffpage from './components/staffpage';
import { Route, Switch } from 'react-router-dom';
import AddInternship from './components/AddInternship';

function App() {
  return (
      <div className="App">
        <Navigationbar />
        <div className='main-content'>
          <Switch>
            <Route path='/staff'><Staffpage /> </Route>
            <Route path ='/' exact><Homepage /></Route>
            <Route path='/add'><AddInternship /></Route>
          </Switch>
        </div>
      </div>
  );
}

export default App;
