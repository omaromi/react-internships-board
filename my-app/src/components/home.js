import {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Jobcard from './jobcard';
import Navigationbar from './navbar';


const Home = () => {
    const [jobs, setJobs] = useState(null);
    const [isStaffClicked, setIsStaffClicked] = useState(false);

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/internships/').then(
            res => {return res.json()}
            ).then(data => {
                console.log(data.internships);
                setJobs(data.internships)})
        console.log('internship data retrieved')
    }, []);

    useEffect( () =>{
        fetch('http://127.0.0.1:8000/staffs/').then(
            res => {return res.json()}
            ).then(data => {
                console.log(data.staffs);
                setJobs(data.staffs)})
        console.log('staff data retrieved')
    }
    ,[]
    )

    // console.log(jobs)
    const handleIzaClick = (id) => {
        // https://stackoverflow.com/questions/55856176/ui-not-re-rendering-on-state-update-using-react-hooks-and-form-submission
        // When tryna establish a new array, use three dots and the square brackets. just using single equal references the original so it does not get sensed as a state change
        const newJobs = [...jobs]
        const objIndex = newJobs.findIndex((obj => obj.id === id));
        newJobs[objIndex]['staff'] = 'Iza';
        console.log('Iza Click Executed')
        setJobs(newJobs);
    };

    const handleStaffClick = () => {
        console.log('staff clicked worked');
        isStaffClicked ? setIsStaffClicked(false): setIsStaffClicked(true);
    };


    return (
        <div>
        <Navigationbar handleStaffClick={handleStaffClick} />
        <div className='job-display'>
            <Container className='container-md py-4'>
            { isStaffClicked && <div><h2>Here's an image of each of the staff</h2></div>}
            { !isStaffClicked && jobs && <Jobcard jobs={jobs} handleIzaClick={handleIzaClick} />}
            </Container>
        </div>
        </div>
     );
}
 
export default Home;