import { useState } from 'react';

function useFetch(url) {
    const [response, setResponse] = useState(null);

    function fetchData() {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setResponse(data));
    }
    return [response, fetchData];
}

export default useFetch;