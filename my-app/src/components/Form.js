import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form'
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Container from "react-bootstrap/esm/Container";
import Jobcard from "./jobcard";

const TestForm = () => {
    const [staffFilter, setStaffFilter] = useState('');
    // const [jobs, setJobs] = useState(null);

    // useEffect(()=>{
    //     fetch('http://127.0.0.1:8000/internships/')
    //     .then(
    //         res => {return res.json()}
    //         ).then(data => {
    //             // console.log(data[endpoint])
    //             setJobs(data['internships'])})
    //     // console.log('custom data retrieved')
    // }, []);

    const jobs = useFetch('internships',[]).filter(obj=>obj.staff == staffFilter);
    // const staffs = useFetch('staffs',null);
    // const staffNames = useFetch('staffnames',[]);
    // const companyNames = useFetch('companynames',[]);


    // console.log(jobs)

    // const filterOmar = (e) => {
    //     const newJobs = jobs.filter( (p) => {
    //         return p.staff === e.target.value;
    //     });
    //     console.log('input is', e.target)
    //     setJobs(newJobs);
    // }

    return ( 
        <div className='test-form'>
            <Form>
                <label>Enter Staff Name to Filter:</label>
                <input type='text' onChange={(e) => setStaffFilter(e.target.value)}/>
                {/* <Button variant='secondary' value={staffFilter}>Submit</Button> */}
            </Form>
            {/* <Button variant='secondary' value='Omar' onClick={filterOmar}>Omar's Filter</Button> */}
            {/* <p>{staffFilter}</p> */}
            <Container className='container-md py-4'>
            { jobs && <Jobcard jobs={jobs} />}
            </Container>
        </div>

     );
}
 
export default TestForm;