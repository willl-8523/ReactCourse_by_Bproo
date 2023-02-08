import { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw Error("Une erreur est survenue"); 
                    }
                    return response.json();
                })
                .then((data) => {
                    setData(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch( err => {
                    setError(err.message);
                    setIsLoading(false);
                });
        }, 2000);
  }, [url]);

    return {data, isLoading, error};
}
 
export default useFetch;