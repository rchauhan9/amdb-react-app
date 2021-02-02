import React from "react";
import { mount } from 'enzyme';
import 'jest-enzyme';
import SectionCard from "../SectionCard";

describe("<SectionCard />", () => {

    it("Renders a div and it's children are placed inside it", () => {
        const wrapper = mount(
            <SectionCard>
                <p>Some text here</p>
            </SectionCard>
        );
        const div = wrapper.find('Section')
        expect(div).toHaveProp("children", <p>Some text here</p>)
    })
})