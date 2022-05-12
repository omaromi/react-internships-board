import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Jobcard from "./jobcard";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

const InternshipDetails = () => {
    
    let {id} = useParams()

    const [job] = useFetch('internships',[]).filter(obj => obj.id == id)

    return ( 
        <div className='internshipDetails'>
            {job &&
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
                        <Button as={Link} to={'/edit/' + job.id}>Edit Here</Button>
                        {/* <Button className='btn btn-secondary float-end' onClick={() => handleDelete(job.id)}>Delete</Button> */}
                    </Card.Footer>
                </Card>
                </Col>}
        </div>
     );
}
 
export default InternshipDetails;