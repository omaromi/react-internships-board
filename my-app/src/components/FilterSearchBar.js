import { useState } from "react";
import Form from 'react-bootstrap/Form'
import Container from "react-bootstrap/esm/Container";
import Jobcard from "./jobcard";
import { useSelector } from "react-redux";


const FilterSearchBar = () => {
    const [staffFilter, setStaffFilter] = useState('');

    const jobs = useSelector((state) => state.jobs.arr).filter(obj => obj.staff.toLowerCase() === staffFilter.toLowerCase());

    return (
        <div className='test-form'>
            <Form>
                <label>Enter Staff Name to Filter:</label>
                <input type='text' onChange={(e) => setStaffFilter(e.target.value)} />
                {/* <Button variant='secondary' value={staffFilter}>Submit</Button> */}
            </Form>
            {/* <Button variant='secondary' value='Omar' onClick={filterOmar}>Omar's Filter</Button> */}
            {/* <p>{staffFilter}</p> */}
            <Container className='container-md py-4'>
                {jobs && <Jobcard jobs={jobs} />}
            </Container>
        </div>

    );
}

export default FilterSearchBar;