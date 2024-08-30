import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsPending(true);
        axios.get(url)
            .then(res => {
                setData(res.data);
                setIsPending(false);
            })
            .catch(error => {
                setError(error);
                setIsPending(false);
            })
    }, [url])

    return [data, isPending, error];
}

export default useFetch