import { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
              .then((response) => {
                if (!response.ok) {
                  throw Error('Une erreur est survenue');
                }
                return response.json();
              })
              .then((data) => {
                setData(data);
                setIsLoading(false);
                setError(null);
              })
              .catch((err) => {
                if ( err.name === "AbortError") {
                    console.log('fetch a été stoppé');
                } else {
                    setError(err.message);
                    setIsLoading(false);
                }
              });
        }, 2000);

        return () => abortCont.abort();

    }, [url]);

    return {data, isLoading, error};
}
 
export default useFetch;