import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion'
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";


const Staffcard = ({ staffs }) => {

    return (
        <div className='staff-list'>
            <Row className='row row-cols-md-3 row-cols-sm-2 g-4'>
                {staffs.map((staff) => (
                    <Col key={staff.id}>
                        <Card className='card h-100'>

                            <div className="card-header">
                                <small className='btn disabled float-start'>{staff.name}</small>
                                <Button as={Link} to={'/internships/' + staff.name} className='btn float-end'>{staff.name}'s Internships</Button>
                            </div>

                            <div className="card-body">
                                <h5 className="card-title">Email Address: {staff.email}</h5>
                            </div>

                            <Accordion className='card-footer' flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header> {staff.position}  </Accordion.Header>
                                    <Accordion.Body>Email Address: {staff.email}</Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Card>
                    </Col>
                ))}
            </Row>

        </div>
    )

}
export default Staffcard;