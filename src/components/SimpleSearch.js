import React, {useState, useEffect} from "react";
import {useLazyQuery} from "@apollo/client";
import { SEARCHABLES_BY_NAME } from "../graphql/queries";
import Suggestion from "./Suggestion";

import { Search } from 'react-bootstrap-icons';

import '../css/simple-search.css'
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

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
                        return (
                            <Suggestion suggestion={result} />
                        )
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
            <InputGroup size="lg" className="addon">
                <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm"
                             placeholder="Search for a title or person" onChange={e => setTerm(e.target.value)}/>
            </InputGroup>
            <ul>
                {data && renderResults(data)}
            </ul>
        </>
    )

}

export default SimpleSearch;