import React from "react";
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import 'jest-enzyme';
import HorizontalGenresView from "../HorizontalGenresView";
import GenreCard from "../../cards/GenreCard";

describe("<HorizontalGenresView />", () => {

    const genres = [
        {
            genre: {
                name: "Thriller",
                urlID: "vkva3zpidc8"
            }
        },
        {
            genre: {
                name: "Comedy",
                urlID: "vtgD1zpfd36"
            }
        },
        {
            genre: {
                name: "Drama",
                urlID: "c7yC_nGq-Zg"
            }
        },
    ]

    it("Renders GenreCard components for each genre, all within an HScrollView component", () => {
        const wrapper = mount(
            <Router>
                <HorizontalGenresView genres={genres} />
            </Router>
        );
        expect(wrapper).toContainMatchingElements(1, "HScrollView");
        expect(wrapper).toContainMatchingElements(3, "GenreCard");
        const hsv_children = wrapper.find('HScrollView').props().children;
        expect(hsv_children.length).toBe(3);
        hsv_children.map(child => {
            expect(child.type).toBe(GenreCard)
        });
    })
})