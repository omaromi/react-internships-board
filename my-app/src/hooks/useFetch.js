import { useEffect, useState } from "react";

const useFetch = (endpoint,init) => {
    const [data, setData] = useState(init)

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/'+ endpoint + '/')
        .then(
            res => {return res.json()}
            ).then(data => {
                // console.log(data[endpoint])
                setData(data[endpoint])})
        // console.log('custom data retrieved')
    }, [endpoint]);
    // console.log(data)
    return data
}

export default useFetch;