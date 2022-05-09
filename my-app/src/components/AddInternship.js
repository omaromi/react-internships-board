import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form'
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Container from "react-bootstrap/esm/Container";

const AddInternship = () => {
    // const [positionTitle, setPositionTitle] = useState('');
    // const [appLink, setAppLink] = useState('');
    // const [jobDesc, setJobDesc] = useState('');

    const [state, setState] = useState({
        position_title: '',
        app_link: '',
        description: '',
        duedate: '',
        staff:'',
        company:''
    })
    

    // Need to add fullform, full object, so that it can create a proper post request
    const handleInternshipAdd = (e) => {
        e.preventDefault();
        const newInternship = { 
            'position_title': state.position_title, 
            'app_link': state.app_link, 
            'description': state.description,
        }
        console.log('newobject:', newInternship)

        fetch('http://127.0.0.1:8000/internships/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newInternship)
        }).then(()=> { console.log('new internship POSTed')}
        )

    }
    
    return ( 
        <div className='add-internship'>
            <Container className='container-md py-4'>
            <h2>Here you can add an internship</h2>
            
                <Form onSubmit={handleInternshipAdd} >
            <FloatingLabel className="mb-3" controlId="position_title" label="Position Title" >
                <Form.Control type="text" value={state.position_title} 
                onChange= {(e)=> {
                    e.persist();
                    setState((values) => ({
                        ...values,
                        'position_title': e.target.value})
                )}}/>
            </FloatingLabel>
            <FloatingLabel className='mb-3' controlId="app_link" label="Link to Apply">
                <Form.Control type="text" value={state.app_link} 
                onChange= {(e)=> {
                    e.persist();
                    setState((values) => ({
                        ...values,
                        'app_link': e.target.value})
                )}} />
            </FloatingLabel>
            <FloatingLabel className='mb-3' controlId="desc" label="Job Description:">
                <Form.Control 
                as='textarea' 
                style={{ height: '100px' }} 
                type="text" 
                value={state.description}
                onChange= {(e)=> {
                    e.persist();
                    setState((values) => ({
                        ...values,
                        'description': e.target.value})
                )}}                />
            </FloatingLabel>
            {/* <Form.Select className='mb-3' label="Assigned Staff Member" value={staff} >
                <option>Assigned Staff Member</option>
                <option value="1">Omar</option>
                <option value="2">Iza</option>
                <option value="3">Raven</option>
                <option value="4">Stephanie</option>
            </Form.Select>
            <Form.Select className='mb-3' label="Company">
            <option>Company</option>
                <option value="1">Spotify</option>
                <option value="2">Facebook</option>
                <option value="3">Amazon</option>
                <option value="4">Pinterest</option>
            </Form.Select> */}
            <Button className='btn-secondary float-start' type='submit' >Submit</Button>
            </Form>
            </Container>
        </div>

     );
}
 
export default AddInternship;