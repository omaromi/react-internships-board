import './App.css';
import Navigationbar from './components/navbar';
import Homepage from './components/homepage';
import Staffpage from './components/staffpage';
import { Route, Switch } from 'react-router-dom';
import AddInternship from './components/AddInternship';
import FilterSearch from './components/othertest';
import StaffInternships from './components/StaffInternships';
import EditInternship from './components/EditInternship';
import InternshipDetails from './components/InternshipDetails';
import { useDispatch } from 'react-redux';
import { preload } from "./redux/jobsSlice";



function App() {
  const dispatch = useDispatch();

  const preloadState = (endpoint) => {
    fetch('http://127.0.0.1:8000/' + endpoint + '/')
      .then(
        res => { return res.json() }
      ).then(data => {
        dispatch(preload(data[endpoint]))
      })
    // console.log('custom data retrieved')
  }

  preloadState('internships')

  return (
    <div className="App">
      <Navigationbar />
      <div className='main-content'>
        <Switch>
          <Route path='/staff'><Staffpage /> </Route>
          <Route path='/' exact><Homepage /></Route>
          <Route path='/add'><AddInternship /></Route>
          <Route path='/filter'><FilterSearch /></Route>
          <Route path='/internships/:id'><StaffInternships /></Route>
          <Route path='/edit/:id'><EditInternship /></Route>
          <Route path='/internshipdetails/:id'><InternshipDetails /></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
