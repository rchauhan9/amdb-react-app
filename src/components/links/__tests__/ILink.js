import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import 'jest-enzyme';
import ILink from "../ILink";

describe("<ILink />", () => {

    it("Renders a Link component with specific styling", () => {
        const wrapper = mount(
            <Router>
                <ILink to="some/made/up/dest" />
            </Router>
        );
        const link = wrapper.find('Link')
        expect(link).toHaveStyle('height', '100%')
        expect(link).toHaveStyle('width', '100%')
        expect(link).toHaveStyle('textDecoration', 'none')
    })

    it("Renders a Link component with all children inside", () => {
        const wrapper = mount(
            <Router>
                <ILink to="some/made/up/dest">
                    <p>Some text here</p>
                </ILink>
            </Router>
        );
        const link = wrapper.find('Link')
        expect(link).toHaveProp('children', <p>Some text here</p>)
    })
})