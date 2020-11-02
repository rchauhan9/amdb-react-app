import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import 'jest-enzyme';
import GenreCard from "../GenreCard";

describe("<GenreCard />", () => {

    const genre = {
        name: "Thriller",
        urlID: "aBcDeFg1234",
        id: "1a2a2185-237d-4a9e-9f37-55f276033657"
    }

    it("Renders an 'ILink' component with prop 'to' using genre's urlID", () => {
        const wrapper = mount(
            <Router>
                <GenreCard genre={genre}/>
            </Router>
        );
        const iLink = wrapper.find('ILink')
        expect(iLink).toHaveProp("to", "/genre/aBcDeFg1234")
    })

    it("Renders a div with classnames genre-card and lower-case of genre.name", () => {
        const wrapper = mount(
            <Router>
                <GenreCard genre={genre}/>
            </Router>
        );
        const div = wrapper.find('div')
        expect(div).toHaveClassName("genre-card thriller")
    })

    it("Renders an h3 component with a genre's name in it", () => {
        const wrapper = mount(
            <Router>
                <GenreCard genre={genre}/>
            </Router>
        );
        const h3 = wrapper.find("h3")
        expect(h3).toHaveText("Thriller")
    })

})
