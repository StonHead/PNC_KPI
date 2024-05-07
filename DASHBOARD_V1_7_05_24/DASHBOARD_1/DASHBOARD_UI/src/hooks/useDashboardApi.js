import React, { useState } from 'react'
import { useSnackBar } from './useSnackBar';

const useDashboardApi = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const { snackBar } = useSnackBar();

    const getApiFuncHandler = async (apiFunc, ...params) => {
        setIsLoading(true)
        await apiFunc(...params)
            .then(({ data }) => {
                console.log(data)
                console.log(data.response)
                if (data.code >= 400) {
                    throw new Error(data)
                }
                console.log(data)

                if(!data?.response) throw new Error("Something went wrong!");
                if(!data?.response?.compData?.length) throw new Error(`${data?.response?.compName || "Some"} data not present!`)
                
                let parsedData = data?.response?.compData?.length ? JSON.parse(data.response.compData) : {}
                console.log(parsedData)
                setData(parsedData)
            })
            .catch((err) => {
                console.log(err)
                setError(err)
                snackBar({ status: true, severity: "error", message: err.message });
            })
            .finally(() => setIsLoading(false))
    }
    // debugger

    return { getApiFuncHandler, data, error, isLoading }
}

export default useDashboardApi