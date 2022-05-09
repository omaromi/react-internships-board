import {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Staffcard from './staffcard';
import useFetch from '../hooks/useFetch';



const Staffpage = () => {
    // const [staffs, setStaffs] = useState(null);

    const staffs = useFetch('staffs');

    // useEffect(() =>{
    //     fetch('http://127.0.0.1:8000/staffs/').then(
    //         res => {return res.json()}
    //         ).then(data => {
    //             // data.staffs.forEach(e => console.log(e.name));
    //             setStaffs(data.staffs)})
    //     console.log('staff data retrieved again')
    //     if (staffs) {
    //         staffs.forEach(e => console.log(e.name))
    //     }
    // }
    // ,[]
    // )

    return (
        <div className='staff-display'>
            <Container className='container-md py-4'>
            { staffs && <Staffcard staffs={staffs} />}
            </Container>
        </div>
     );
}
 
export default Staffpage;