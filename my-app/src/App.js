import './App.css';
import Navigationbar from './components/navbar';
import Homepage from './components/homepage';
import Staffpage from './components/staffpage';
import { Route, Switch } from 'react-router-dom';
import AddInternship from './components/AddInternship';
import SomeOtherFunction from './components/othertest';
import StaffInternships from './components/StaffInternships';
import EditInternship from './components/EditInternship';

function App() {
  return (
      <div className="App">
        <Navigationbar />
        <div className='main-content'>
          <Switch>
            <Route path='/staff'><Staffpage /> </Route>
            <Route path ='/' exact><Homepage /></Route>
            <Route path='/add'><AddInternship /></Route>
            <Route path='/filter'><SomeOtherFunction /></Route>
            <Route path='/internships/:id'><StaffInternships /></Route>
            <Route path='/edit/:id'><EditInternship /></Route>
          </Switch>
        </div>
      </div>
  );
}

export default App;
