import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import 'jest-enzyme';
import RoleCard from "../RoleCard";
import {useImage} from "../../hooks/useImage";
jest.mock("../../hooks/useImage")

describe("<RoleCard />", () => {

    const person = {
        name: "Christopher Nolan",
        urlID: "aBcDeFg1234",
        id: "1a2a2185-237d-4a9e-9f37-55f276033657"
    }
    const items = ["producer"]
    const role = "Producer"

    it("Renders a Card component", () => {
        const wrapper = mount(
            <Router>
                <RoleCard role={role} person={person} items={items} />
            </Router>
        );
        expect(wrapper).toContainMatchingElements(1, "Card")
    })

    it("Renders an 'ILink' component with prop 'to' using person's urlID", () => {
        const wrapper = mount(
            <Router>
                <RoleCard role={role} person={person} items={items} />
            </Router>
        );
        const iLink = wrapper.find('ILink')
        expect(iLink).toHaveProp("to", "/person/aBcDeFg1234")
    })

    it("Renders an Card Title component with role.name inside of it", () => {
        const wrapper = mount(
            <Router>
                <RoleCard role={role} person={person} items={items} />
            </Router>
        );
        const title = wrapper.find('div.role-title')
        expect(title).toHaveText("Producer")
    })

    it("Renders a details component with person name and items inside of it", () => {
        const wrapper = mount(
            <Router>
                <RoleCard role={role} person={person} items={items} />
            </Router>
        );
        const details = wrapper.find('div.role-details')
        const text = details.find('p.role-text')
        const subtext = details.find('p.role-subtext')
        expect(text).toHaveText("Christopher Nolan")
        expect(subtext).toHaveText("producer")
    })

    it("Renders an img component with src an s3 signed url", () => {
        useImage.mockReturnValue("s3-signed-url")
        const wrapper = mount(
            <Router>
                <RoleCard role={role} person={person} items={items} />
            </Router>
        );
        expect(wrapper).toContainMatchingElements(1, "img")
        const img = wrapper.find("img")
        expect(img).toHaveProp("src", "s3-signed-url")
    })
})