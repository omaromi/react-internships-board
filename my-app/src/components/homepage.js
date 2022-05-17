import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Jobcard from './jobcard';
import useFetch from '../hooks/useFetch';
import TestForm from "./Form";
import React from "react";



const Homepage = () => {

    const jobs = useFetch('internships', null);
    // let history = useHistory();


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