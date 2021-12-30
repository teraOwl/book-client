import { useEffect, useRef, useState } from "react"

export const useFetch = (url:string) => {
    type ObjectStrings = {
        [key:string]:string
    }
    const [state, setState] = useState<({data:null | ObjectStrings[] ,loading:boolean,error:Object | null})>({ data: null, loading: true, error: null })
    const isMounted = useRef(true)

    useEffect(() => {
        return () => {
            isMounted.current = false
        }
    }, [])

    useEffect(() => {
        setState({ data: null, loading: true, error: null })
        // setState({...state,loading:true})
        fetch(url).then(data => data.json()).then(async data => {
            if (isMounted.current) {
                setState({
                    loading: false,
                    error: null,
                    data: data
                })
            }
        })
    }, [url])

    return state;
}
