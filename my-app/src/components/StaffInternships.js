import { useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import useFetch from "../hooks/useFetch";
import Jobcard from "./jobcard";

const StaffInternships = () => {

    let { id } = useParams()

    const jobs = useFetch('internships', []).filter(obj => obj.staff == id)


    return (
        <div>

            <Container className='container-md py-4'>
                {jobs && <Jobcard jobs={jobs} />}
            </Container>
        </div>
    );
}

export default StaffInternships;