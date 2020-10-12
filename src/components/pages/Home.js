import React from 'react';
import CastCard from '../cards/CastCard';
import SimpleSearch from "../SimpleSearch";

const Home = () => {
    const member = {
        characters: ["test"],
        person: {
            name: "example name"
        }
    }

    return (
        <div className="container-md">
            <h1>Home Page</h1>
            <CastCard castMember={member} />
            <SimpleSearch />
        </div>
    )
}

export default Home;