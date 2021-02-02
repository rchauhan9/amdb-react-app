import React from "react";
import { mount } from 'enzyme';
import 'jest-enzyme';
import HScrollView from "../HScrollView";

describe("<HScrollView />", () => {

    it("Renders a div with className list", () => {
        const wrapper = mount(<HScrollView />);
        expect(wrapper).toContainMatchingElements(1, 'HSV')
    })
})