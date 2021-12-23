import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setdata] =  useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        fetch(url)                                      // async await not required if used fetch-then-then
        .then(res => {    
            // console.log(res);          
            if( !res.ok ){
                throw Error(`${res.url} - ${res.status} ${res.statusText}`);        // custom error throw
            }
            return res.json();                          // json obj
        })    
        .then((data) => {                               // data holds array of objs of the resource(data)
            // console.log(data);
            setdata(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            // console.log(err.message);                   // server or network connection error
            setError(err.message);
            setIsPending(false);
        })

    }, []) 

    return {data, isPending, error}
}

export default useFetch;