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

const FilterSearchBar = () => {
    const [staffFilter, setStaffFilter] = useState('');

    const jobs = useFetch('internships', []).filter(obj => obj.staff.toLowerCase() == staffFilter.toLowerCase());

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