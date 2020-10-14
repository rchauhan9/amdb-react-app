import React, {useState, useEffect} from "react";
import {useLazyQuery} from "@apollo/client";
import { SEARCHABLES_BY_NAME } from "../graphql/queries";

const SimpleSearch = (props) => {

    const [term, setTerm] = useState('')
    const [getSearchables, {loading, data}] = useLazyQuery(SEARCHABLES_BY_NAME)
    useEffect(() => {
        const timeoutID = setTimeout(() => {
            console.log(term)
            if (term !== '') {
                getSearchables({variables: {name: term}})
            }
        }, 500)
        return () => {
            clearTimeout(timeoutID)
        }

    }, [term, getSearchables])

    useEffect(() => {

    }, [data])
    console.log(data)

    const renderResults = ({searchableByName}) => {
        if (searchableByName) {
            return (
                <>
                    {searchableByName.map((result, i) => {
                        return (<li key={i}><a href={`${result.__typename.toLowerCase()}/${result.urlID}`}>{result.name}</a></li>)
                    })}
                </>
            )
        }
    }

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search for a title or person"
                       aria-label="Search for a title or person" aria-describedby="basic-addon2" onChange={e => setTerm(e.target.value)}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">Search</button>
                </div>
            </div>
            <ul>
                {data && renderResults(data)}
            </ul>
        </>
    )

}

export default SimpleSearch;