import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setdata] =  useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortConst = new AbortController();

            setTimeout(() => {

                    fetch(url, { signal: abortConst.signal })       // async await not required if used fetch-then-then   // abort signal obj
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
                        if( err.name === 'AbortError' ) {           // catch - FetchAbort
                            console.log('fetch aborted');
                        } else {
                            // console.log(err.message);             // catch - server or network connection error
                            setError(err.message);
                            setIsPending(false);
                        }
                    })

            }, 500);                                                // Can't perform a React state update on an unmounted component. - Error : Fast Switching between routes

            return () => {                                          //  function fires on route change 
                console.log('clean up function called');            //  Clean Up Function - Abort
                abortConst.abort();                                 //  Abort
            }

    }, [url]) 

    return {data, isPending, error}

}

export default useFetch;