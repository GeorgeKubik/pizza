import { useState, useCallback } from 'react';
export const useHttp = () => {
    const [process, setProcess] = useState('waiting');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const request = useCallback(
        async (
            url,
            method = 'GET',
            body = null,
            headers = {
                'Content-type': 'application/json',
            }
        ) => {
            setProcess('loading');
            setLoading(true);
            try {
                const response = await fetch(url, { method, body, headers });

                if (!response.ok) {
                    throw new Error(
                        `Could not fetch ${url}, status: ${response.status}`
                    );
                }
                const data = await response.json();
                setLoading(false);
                return data;
            } catch (e) {
                setProcess('error');
                setLoading(false);
                setError(e.message);
                throw e;
            }
        },
        []
    );

    const clearError = useCallback(() => {
        setProcess('loading');
        setError(null);
    }, []);

    return { loading, error, request, clearError, process, setProcess };
};
