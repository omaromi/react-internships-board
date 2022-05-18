import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";



const Jobcard = ({ jobs }) => {

    const history = useHistory()

    const handleDelete = (id) => {
        fetch('http://127.0.0.1:8000/internships/' + id, { method: 'DELETE' }
        ).then(history.push('/'))
    }


    const [state, setState] = useState([]);

    useEffect(() => {
        // https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
        // if you move initialState out of the useEffect Hook, then you get a warning about using initialState in the dependency array,
        // but this is fine because initialState is not used anywhere else in the page
        const initialState = jobs.map(job => ({ ...job, 'saved': false }))
        console.log('re-render via useEffect')
        setState(initialState);
    }, [jobs]
    )


    const handleSave = (id) => {
        const newSaveState = [...state]
        const objIndex = newSaveState.findIndex((obj => obj.id === id));
        newSaveState[objIndex]['saved'] = !newSaveState[objIndex]['saved']
        setState(newSaveState)
    }


    return (
        <div className='job-list'>
            <Row className='row row-cols-md-3 row-cols-sm-2 g-4'>
                {state.map((job) => (
                    <Col key={job.id} >
                        <Card className='card h-100'>

                            <div className="card-header">
                                <small className='btn disabled text-primary float-start'>{job.company}</small>
                                <a href={job.app_link} className='btn btn-outline-primary float-end'>Apply Here</a>
                            </div>

                            <div className="card-body">
                                <h5 className="card-title">{job['position_title']}</h5>
                                <Link to={'/internshipdetails/' + job.id} className="btn btn-outline-secondary ">Learn More</Link>
                            </div>

                            <Card.Footer>
                                <Stack gap={2}>
                                    <div>Currently Assigned to: {job.staff}</div>
                                    {/* <Button variant="primary" onClick={() => handleIzaClick(job['id'])}>Assign to Iza</Button> */}

                                </Stack>
                                <Button variant={job['saved'] ? 'dark' : 'outline-dark'} className='btn float-start' onClick={() => handleSave(job.id)}>{job['saved'] ? 'Saved' : 'Save?'}</Button>
                                {/* <Button variant='outline-dark' className='btn float-start'>Save?</Button> */}
                                <Button as={Link} to={'/edit/' + job.id}>Edit Here</Button>
                                <Button className='btn btn-secondary float-end' onClick={() => handleDelete(job.id)}>Delete</Button>
                            </Card.Footer>
                        </Card>
                        {/* {console.log('this is the color', job.buttoncolor, 'and this is the text', job.buttontext)} */}
                    </Col>
                )
                )}
            </Row>

        </div >
    )

}
export default Jobcard;