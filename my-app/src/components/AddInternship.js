import { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form'
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Container from "react-bootstrap/esm/Container";
import useFetch from "../hooks/useFetch";

const AddInternship = () => {

    const [state, setState] = useState({
        position_title: '',
        app_link: '',
        description: '',
        duedate: '',
        staff:'',
        company:'',
    })
    
    const [staffdd,setStaffdd] = useState([])
    useEffect(()=>{
        fetch('http://127.0.0.1:8000/staffnames/')
        .then(
            res => {return res.json()}
            ).then(data => {
                setStaffdd(data.staffnames)})
    }, []);

    const [companydd,setCompanydd] = useState([])
    useEffect(()=>{
        fetch('http://127.0.0.1:8000/companynames/')
        .then(
            res => {return res.json()}
            ).then(data => {
                setCompanydd(data.companynames)})
    }, []);

    // fetch('http://127.0.0.1:8000/staffnames/')
    //     .then(
    //         res => {return res.json()}
    //         ).then(data => {
    //             console.log('data', new Array(data))
    //             StaffNames.concat(new Array(data))
    //             return new Array(data)
    //         });

    // // console.log('datafetched',datafetched)
    // console.log('staffnames', StaffNames)
    

    // Need to add fullform, full object, so that it can create a proper post request
    const handleInternshipAdd = (e) => {
        e.preventDefault();
        const newInternship = { 
            'position_title': state.position_title, 
            'app_link': state.app_link, 
            'description': state.description,
            'duedate':state.duedate,
            'staff': state.staff,

        }
        console.log('newobject:', newInternship)
        // getstafflist()

        fetch('http://127.0.0.1:8000/internships/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newInternship)
        }).then(()=> { console.log('new internship POSTed')})}
    
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
            <FloatingLabel className='mb-3' controlId='duedate' label='Due Date:'>
                <Form.Control
                type="text"
                value={state.duedate}
                onChange= {(e)=> {
                    e.persist();
                    setState((values) => ({
                        ...values,
                        'duedate': e.target.value})
                )}} 
                />
            </FloatingLabel>
            <Form.Select className='mb-3' label="Assigned Staff Member" value={state.staff}
                onChange={(e)=> {
                    e.persist();
                    setState((values) => ({
                        ...values,
                        'staff': e.target.value})
                );
                // handleDropdown(e.target.value)
                }}>
                <option>Assigned Staff Member</option>
                {/* <option value="Omar">Omar</option>
                <option value="Iza">Iza</option>
                <option value="Raven">Raven</option>
                <option value="Stephanie">Stephanie</option> */}

                {staffdd.map((e, c=1)=> {
                    return(<option key={c} value={e}>{e}</option>)
                    c++})}

            </Form.Select>
            <Form.Select className='mb-3' label="Company">
                <option>Company</option>
                {companydd.map((e, c=1)=> {
                    return(<option key={c} value={e}>{e}</option>)
                    c++})}
                {/* <option value="1">Spotify</option>
                <option value="2">Facebook</option>
                <option value="3">Amazon</option>
                <option value="4">Pinterest</option> */}
            </Form.Select>
            <Button className='btn-secondary float-start' type='submit' >Submit</Button>
            </Form>
            </Container>
        </div>
    )};
export default AddInternship;