import Container from 'react-bootstrap/Container';
import Staffcard from './staffcard';
import useFetch from '../hooks/useFetch';



const Staffpage = () => {
    // const [staffs, setStaffs] = useState(null);

    const staffs = useFetch('staffs', null);

    return (
        <div className='staff-display'>
            <Container className='container-md py-4'>
                {staffs && <Staffcard staffs={staffs} />}
            </Container>
        </div>
    );
}

export default Staffpage;