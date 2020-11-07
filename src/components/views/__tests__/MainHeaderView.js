import React from "react";
import { mount } from 'enzyme';
import 'jest-enzyme';
import MainHeaderView from "../MainHeaderView";

describe("<MainHeaderView />", () => {

    it("Renders a div which contains an h1 and br tag", () => {
        const wrapper = mount(<MainHeaderView mainHeader="The Dark Knight" subHeader="2008" />);
        const div = wrapper.find('div')
        expect(div).toContainMatchingElements(1, "h1")
        expect(div).toContainMatchingElements(1, "br")
    })

    it("The h1 component houses the mainHeader and the span within the h1 houses the subHeader", () => {
        const wrapper = mount(<MainHeaderView mainHeader="The Dark Knight" subHeader="2008" />);
        const h1 = wrapper.find('h1')
        expect(h1).toHaveText("The Dark Knight 2008")
        const span = h1.find('span')
        expect(span).toHaveText(" 2008")
    })

    it("When no subHeader is passed no span tag is rendered", () => {
        const wrapper = mount(<MainHeaderView mainHeader="The Dark Knight" />);
        expect(wrapper.find('span')).not.toExist()
    })
})