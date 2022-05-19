import { useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
// import useFetch from "../hooks/useFetch";
import Jobcard from "./jobcard";
import { useSelector } from "react-redux";

const StaffInternships = () => {

    let { id } = useParams()

    const jobs = useSelector((state) => state.jobs.arr).filter(obj => obj.staff == id)

    // const handleReduxSave = (id) => {
    //     // const newSaveState = JSON.parse(JSON.stringify(state));
    //     const newSaveState = JSON.parse(JSON.stringify(jobs))
    //     const objIndex = newSaveState.findIndex((obj => obj.id === id));
    //     newSaveState[objIndex]['saved'] = !newSaveState[objIndex]['saved']
    //     dispatch(savetoggle(newSaveState))
    //     // setState(newSaveState)
    // }


    return (
        <div>

            <Container className='container-md py-4'>
                {jobs && <Jobcard jobs={jobs} />}
            </Container>
        </div>
    );
}

export default StaffInternships;