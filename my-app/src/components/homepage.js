// import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Jobcard from './jobcard';
import useFetch from '../hooks/useFetch';
import React from "react";



const Homepage = () => {

    const jobs = useFetch('internships', []);


    // const handleIzaClick = (id) => {
    //     // https://stackoverflow.com/questions/55856176/ui-not-re-rendering-on-state-update-using-react-hooks-and-form-submission
    //     // When tryna establish a new array, use three dots and the square brackets. just using single equal references the original so it does not get sensed as a state change
    //     const newJobs = [...jobs]
    //     const objIndex = newJobs.findIndex((obj => obj.id === id));
    //     newJobs[objIndex]['staff'] = 'Iza';
    //     // console.log('Iza Click Executed')
    //     setJobs(newJobs);
    // }; 

    // const [save, setSave] = useState(false);
    // const [buttonColor, setButtonColor] = useState('outline-dark')
    // const [buttonText, setButtonText] = useState('Save?')

    // jobs.map((job) => {
    //     job['saved'] = save
    //     job['buttoncolor'] = 'outline-dark'
    //     job['buttontext'] = 'Save?'
    // }
    // )

    // const handleSave = (id) => {
    //     const objIndex = jobs.findIndex((obj => obj.id === id));
    //     if (save) {
    //         setButtonColor('dark');
    //         setButtonText('Saved');
    //     } else {
    //         setButtonColor('outline-dark')
    //         setButtonText('Save?');
    //     }
    //     jobs[objIndex]['saved'] = !save
    //     jobs[objIndex]['buttoncolor'] = buttonColor
    //     jobs[objIndex]['buttontext'] = buttonText

    //     console.log('toggle executed', save, buttonColor, 'space', buttonText)
    //     setSave(!save);
    // }


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