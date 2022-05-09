import {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Jobcard from './jobcard';
import useFetch from '../hooks/useFetch';



const Homepage = () => {
    // const [jobs, setJobs] = useState(null);
    // const [staffs, setStaffs] = useState(null);
    

    const jobs = useFetch('internships');
    // useEffect(()=>{
    //     fetch('http://127.0.0.1:8000/'+ 'internships' + '/').then(
    //         res => {return res.json()}
    //         ).then(data => {
    //             // console.log(data.internships);
    //             setJobs(data.internships)})
    //     // console.log('internship data retrieved')
    // }, []);

    // const staffs = useFetch('staffs');
    // useEffect( () =>{
    //     fetch('http://127.0.0.1:8000/staffs/').then(
    //         res => {return res.json()}
    //         ).then(data => {
    //             // console.log(data.staffs);
    //             setStaffs(data.staffs)})
    // }
    // ,[]
    // )

    // const [iza, setIza] = useState(jobs)
    // setIza
    // console.log(iza)
    // console.log(jobs)
    // const handleIzaClick = (id) => {
    //     // https://stackoverflow.com/questions/55856176/ui-not-re-rendering-on-state-update-using-react-hooks-and-form-submission
    //     // When tryna establish a new array, use three dots and the square brackets. just using single equal references the original so it does not get sensed as a state change
    //     const newJobs = [...jobs]
    //     const objIndex = newJobs.findIndex((obj => obj.id === id));
    //     newJobs[objIndex]['staff'] = 'Iza';
    //     // console.log('Iza Click Executed')
    //     setJobs(newJobs);
    // };


    return (
        <div className='job-display'>
            <Container className='container-md py-4'>
            { jobs && <Jobcard jobs={jobs} />}
            </Container>
        </div>
     );
}
 
export default Homepage;