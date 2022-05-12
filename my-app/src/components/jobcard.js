import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import TestForm from "./Form";
import React from "react";
import { Link, useHistory } from "react-router-dom";



const Jobcard = ({jobs}) => {

    const history = useHistory()

    const handleDelete = (id) => {
        fetch('http://127.0.0.1:8000/internships/' + id, {method:'DELETE'}
        ).then(history.push('/'))
        }

    return ( 
        <div className='job-list'>

            <Row className='row row-cols-md-3 row-cols-sm-2 g-4'>
            {jobs.map((job) => (
                <Col key={job.id}>
                <Card className='card h-100'>

                    <div className="card-header">    
                        <small className='btn disabled text-primary float-start'>{job.company}</small>
                        <a href={job.app_link} className='btn btn-outline-primary float-end'>Apply Here</a>
                    </div>

                    <div className="card-body">
                        <h5 className="card-title">{job['position_title']}</h5>
                        <a href="#" className="btn btn-outline-secondary ">Learn More</a>
                    </div>

                    <Card.Footer>
                        <Stack gap={2}>
                        <div>Currently Assigned to: {job.staff}</div>
                        {/* <Button variant="primary" onClick={() => handleIzaClick(job['id'])}>Assign to Iza</Button> */}
                        
                        </Stack>
                        <Button as={Link} to={'/edit/' + job.id}>Edit Here</Button>
                        <Button className='btn btn-secondary float-end' onClick={() => handleDelete(job.id)}>Delete</Button>
                    </Card.Footer>
                </Card>
                </Col>
            ))}
            </Row>
            
            </div>
    )

        }
export default Jobcard;