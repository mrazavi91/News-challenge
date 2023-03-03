// Customised hook 

import { useState , useEffect} from "react";
import axios from 'axios';

const UseFetch = (url) => {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        //'https://content.guardianapis.com/search?api-key=4aa45470-7bc3-4465-8327-49285e3bf381'
        // have to use thissss ====> https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=4aa45470-7bc3-4465-8327-49285e3bf381
        // console.log(url)
        axios.get(url)
            .then(res => {
                // console.log(res.data.results)
                // setData(res.data.response.results) 
                setData(res.data.results) 
                setIsPending(false)
                setError(null)
            }).catch(err => {
                setIsPending(true);
                setError(err.message);
            });
    }, [data.length])
    
    // console.log(data)
    return {data, isPending , error}
}

export default UseFetch;