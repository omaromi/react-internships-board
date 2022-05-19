import { useState } from "react";
import Form from 'react-bootstrap/Form'
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import useFetch from "../hooks/useFetch";

const AddInternship = () => {

    const [state, setState] = useState({
        position_title: '',
        app_link: 'https://',
        description: '',
        duedate: '2022-01-01',
        staff: '',
        company: '',
    })

    const staffNames = useFetch('staffnames', [])
    const companyNames = useFetch('companynames', [])


    // Need to add fullform, full object, so that it can create a proper post request
    const handleInternshipAdd = (e) => {
        e.preventDefault();
        const newInternship = {
            'position_title': state.position_title,
            'app_link': state.app_link,
            'description': state.description,
            'duedate': state.duedate,
            'staff': state.staff,
            'company': state.company,
        }
        console.log('newobject:', newInternship)

        fetch('http://127.0.0.1:8000/internships/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newInternship)
        }).then(() => { console.log('new internship POSTed') })
    };

    return (
        <div className='add-internship'>
            <div className='container-md py-4'>
                <h2>Here you can add an internship</h2>

                <Form onSubmit={handleInternshipAdd} >
                    <FloatingLabel className="mb-3" controlId="position_title" label="Position Title" >
                        <Form.Control type="text" value={state.position_title}
                            onChange={(e) => {
                                e.persist();
                                setState((values) => ({
                                    ...values,
                                    'position_title': e.target.value
                                })
                                )
                            }} />
                    </FloatingLabel>
                    <FloatingLabel className='mb-3' controlId="app_link" label="Link to Apply">
                        <Form.Control type="text" value={state.app_link}
                            onChange={(e) => {
                                e.persist();
                                setState((values) => ({
                                    ...values,
                                    'app_link': e.target.value
                                })
                                )
                            }} />
                    </FloatingLabel>
                    <FloatingLabel className='mb-3' controlId="desc" label="Job Description:">
                        <Form.Control
                            as='textarea'
                            style={{ height: '100px' }}
                            type="text"
                            value={state.description}
                            onChange={(e) => {
                                e.persist();
                                setState((values) => ({
                                    ...values,
                                    'description': e.target.value
                                })
                                )
                            }} />
                    </FloatingLabel>
                    <FloatingLabel className='mb-3' controlId='duedate' label='Due Date:'>
                        <Form.Control
                            type="text"
                            value={state.duedate}
                            onChange={(e) => {
                                e.persist();
                                setState((values) => ({
                                    ...values,
                                    'duedate': e.target.value
                                })
                                )
                            }}
                        />
                    </FloatingLabel>
                    <Form.Select className='mb-3' label="Assigned Staff Member" value={state.staff}
                        onChange={(e) => {
                            e.persist();
                            setState((values) => ({
                                ...values,
                                'staff': e.target.value
                            })
                            );
                        }}>
                        <option>Assigned Staff Member</option>
                        {staffNames.map((e, c = 0) => {
                            c++;
                            return (<option key={c} value={e}>{e}</option>)
                        })}
                    </Form.Select>
                    <Form.Select className='mb-3' label="Company" value={state.company}
                        onChange={(e) => {
                            e.persist();
                            setState((values) => ({
                                ...values,
                                'company': e.target.value
                            })
                            );
                        }}>
                        <option>Company</option>
                        {companyNames.map((e, c = 0) => {
                            c++;
                            return (<option key={c} value={e}>{e}</option>)
                        })}
                    </Form.Select>
                    <button className='btn-secondary float-start' type='submit' >Submit</button>
                </Form>
            </div>
        </div>
    )
};
export default AddInternship;