import React from 'react';
import {SEARCHABLES_BY_NAME} from "../../graphql/queries";
import {useQuery} from "@apollo/client";
import {Link} from "react-router-dom";
import Suggestion from "../Suggestion";

const Search = (props) => {

    console.log(props.match.params.term)

    const { loading, error, data } = useQuery(SEARCHABLES_BY_NAME, {
            variables: {
                name: props.match.params.term.split("+").join(" ")
            }
    });
    console.log(data)

    const renderResults = ({searchableByName}) => {
        if (searchableByName) {
            return (
                <>
                    {searchableByName.map((result, i) => {
                        return (
                            <Suggestion suggestion={result} id={i}/>
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
        <ul>
            {data && renderResults(data)}
        </ul>
    )
}

export default Search;