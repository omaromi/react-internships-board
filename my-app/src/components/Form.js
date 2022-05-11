import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form'
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";

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

    const jobs = useFetch('internships',null);
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
                <Button variant='secondary' value={staffFilter}>Submit</Button>
            </Form>
            {/* <Button variant='secondary' value='Omar' onClick={filterOmar}>Omar's Filter</Button> */}
            {/* <p>{staffFilter}</p> */}
            <p>{staffFilter && JSON.stringify(jobs.filter((p) => {
                return p.staff === staffFilter;
            }))
        }</p>
        </div>

     );
}
 
export default TestForm;