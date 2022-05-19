// import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Jobcard from './jobcard';
// import useFetch from '../hooks/useFetch';
import React from "react";
import { useSelector } from 'react-redux';
// import { savetoggle } from "../redux/jobsSlice";



const Homepage = () => {

    // const jobs = useFetch('internships', []);

    const jobs = useSelector((state) => state.jobs.arr)

    // const dispatch = useDispatch()

    // useEffect(() => {
    //     // https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
    //     // if you move initialState out of the useEffect Hook, then you get a warning about using initialState in the dependency array,
    //     // but this is fine because initialState is not used anywhere else in the page
    //     const initialState = jobs.map(job => ({ ...job, 'saved': false }))
    //     console.log('re-render via useEffect')
    //     dispatch(savetoggle(initialState))
    // }, [jobs]
    // )

    // const handleReduxSave = (id) => {
    //     // const newSaveState = JSON.parse(JSON.stringify(state));
    //     const newSaveState = JSON.parse(JSON.stringify(jobs))
    //     const objIndex = newSaveState.findIndex((obj => obj.id === id));
    //     newSaveState[objIndex]['saved'] = !newSaveState[objIndex]['saved']
    //     dispatch(savetoggle(newSaveState))
    //     // setState(newSaveState)
    // }



    // const handleIzaClick = (id) => {
    //     // https://stackoverflow.com/questions/55856176/ui-not-re-rendering-on-state-update-using-react-hooks-and-form-submission
    //     // When tryna establish a new array, use three dots and the square brackets. just using single equal references the original so it does not get sensed as a state change
    //     const newJobs = [...jobs]
    //     const objIndex = newJobs.findIndex((obj => obj.id === id));
    //     newJobs[objIndex]['staff'] = 'Iza';
    //     // console.log('Iza Click Executed')
    //     setJobs(newJobs);
    // }; 


    return (
        <div className='job-display'>
            {/* <React.Fragment><TestForm /> </React.Fragment> */}

            <Container className='container-md py-4'>
                {jobs && <Jobcard jobs={jobs} />}
            </Container>
        </div>
    );
}

export default Homepage;