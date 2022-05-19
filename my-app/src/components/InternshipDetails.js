import { useParams } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { savetoggle } from "../redux/jobsSlice";


const InternshipDetails = () => {

    let { id } = useParams()

    const jobs = useSelector((state) => state.jobs.arr).filter(obj => obj.id === id)

    const dispatch = useDispatch();

    const handleRedux2Save = (intID) => {
        const newSaveState = JSON.parse(JSON.stringify(jobs))
        const arrIndex = newSaveState.findIndex((obj => obj.id === intID));
        newSaveState[arrIndex]['saved'] = !newSaveState[arrIndex]['saved']
        dispatch(savetoggle(newSaveState[arrIndex]))
    }

    return (
        <div className='internshipDetails'>
            {jobs &&
                jobs.map((job) => (
                    <Col key={job.id}>
                        <Card className='card h-100'>

                            <div className="card-header">
                                <small className='btn disabled text-primary float-start'>{job.company}</small>
                                <a href={job.app_link} className='btn btn-outline-primary float-end'>Apply Here</a>
                            </div>

                            <div className="card-body">
                                <h5 className="card-title">{job['position_title']}</h5>
                                <p>{job.description}</p>
                            </div>

                            <Card.Footer>
                                <Stack gap={2}>
                                    <div>Currently Assigned to: {job.staff}</div>
                                    {/* <Button variant="primary" onClick={() => handleIzaClick(job['id'])}>Assign to Iza</Button> */}

                                </Stack>
                                <Button variant={job['saved'] ? 'dark' : 'outline-dark'} className='btn float-start' onClick={() => handleRedux2Save(job.id)}>{job['saved'] ? 'Saved' : 'Save?'}</Button>
                                <Button as={Link} to={'/edit/' + job.id}>Edit Here</Button>
                                {/* <Button className='btn btn-secondary float-end' onClick={() => handleDelete(job.id)}>Delete</Button> */}
                            </Card.Footer>
                        </Card>
                    </Col>))}
        </div>
    );
}

export default InternshipDetails;