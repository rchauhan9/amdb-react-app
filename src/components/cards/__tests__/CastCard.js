import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import 'jest-enzyme';
import CastCard from "../CastCard";
import {useImage} from "../../hooks/useImage";
jest.mock("../../hooks/useImage")

describe("<CastCard />", () => {

    const castMember = {
        characters: ["Bruce Wayne", "Batman"],
        person: {
            name: "Christian Bale",
            urlID: "aBcDeFg1234",
            id: "1a2a2185-237d-4a9e-9f37-55f276033657"
        }
    }

    it("Renders a 'Card' component", () => {
        const wrapper = mount(
            <Router>
                <CastCard castMember={castMember} />
            </Router>
        );
        expect(wrapper).toContainMatchingElements(1, "Card")
    })

    it("Renders an 'ILink' component with prop 'to' using castMember's urlID", () => {
        const wrapper = mount(
            <Router>
                <CastCard castMember={castMember} />
            </Router>
        );
        const iLink = wrapper.find('ILink')
        expect(iLink).toHaveProp("to", "/person/aBcDeFg1234")
    })

    it("Renders an img component with src an s3 signed url", () => {
        useImage.mockReturnValue("s3-signed-url")
        const wrapper = mount(
            <Router>
                <CastCard castMember={castMember} />
            </Router>
        );
        expect(wrapper).toContainMatchingElements(1, "img")
        const cardImg = wrapper.find("img")
        expect(cardImg).toHaveProp("src", "s3-signed-url")
    })

    it("Renders a Card.Title component with a person's name in it", () => {
        const wrapper = mount(
            <Router>
                <CastCard castMember={castMember} />
            </Router>
        );
        const cardTitle = wrapper.find("div.title")
        expect(cardTitle).toHaveText("Christian Bale")
    })

    it("Renders a Card.Text component with a person's characters in it", () => {
        const wrapper = mount(
            <Router>
                <CastCard castMember={castMember} />
            </Router>
        );
        const cardText = wrapper.find("p.text")
        expect(cardText).toHaveText("Bruce Wayne / Batman")
    })

})