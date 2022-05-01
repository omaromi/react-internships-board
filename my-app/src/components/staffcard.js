import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion'


const Staffcard = ({staffs}) => {

    return ( 
        <div className='staff-list'>
            <Row className='row row-cols-md-3 row-cols-sm-2 g-4'>
            {staffs.map((staff) => (
                <Col key={staff.id}>
                <Card className='card h-100'>

                    <div className="card-header">    
                        <small className='btn disabled float-start'>{staff.name}</small>
                    </div>

                    <div className="card-body">
                        <h5 className="card-title">Email Address: {staff.email}</h5>
                    </div>

                    <Card.Footer>
                        <Accordion flush>
                            <Accordion.Item eventKey="0">
                            <Accordion.Header> {staff.position}  </Accordion.Header>
                            <Accordion.Body>Email Address: {staff.email}</Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card.Footer>
                </Card>
                </Col>
            ))}
            </Row>
            
            </div>
    )

        }
export default Staffcard;