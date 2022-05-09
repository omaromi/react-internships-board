import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form'

const TestForm = () => {
    const [staffFilter, setStaffFilter] = useState('');

    return ( 
        <div className='test-form'>
            <Form>
                <label>Enter Staff Name to Filter:</label>
                <input type='text' value={staffFilter} onChange={(e) => setStaffFilter(e.target.value)}/>
                <Button variant='secondary'>Submit</Button>
            </Form>
            <p>{staffFilter}</p>
        </div>

     );
}
 
export default TestForm;