import {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Staffcard from './staffcard';
import { withRouter } from 'react-router-dom';



const Staffpage = () => {
    const [staffs, setStaffs] = useState(null);

    useEffect( () =>{
        fetch('http://127.0.0.1:8000/staffs/').then(
            res => {return res.json()}
            ).then(data => {
                console.log(data.staffs);
                setStaffs(data.staffs)})
        console.log('staff data retrieved')
    }
    ,[]
    )

    return (
        <div className='staff-display'>
            <Container className='container-md py-4'>
            { staffs && <Staffcard staffs={staffs} />}
            </Container>
        </div>
     );
}
 
export default Staffpage;