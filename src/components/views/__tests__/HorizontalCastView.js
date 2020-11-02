import React from "react";
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import 'jest-enzyme';
import HorizontalCastView from "../HorizontalCastView";
import CastCard from "../../cards/CastCard";

describe("<HorizontalCastView />", () => {

    const cast = [
        {
            billing: 1,
            characters: ["Joker"],
            person: {
                name: "Heath Ledger",
                urlID: "S28FHolVGIU",
            }
        },
        {
            billing: 2,
            characters: ["Harvey Dent"],
            person: {
                name: "Aaron Eckhart",
                urlID: "aJKteAqEpu4",
            }
        },
        {
            billing: 0,
            characters: ["Bruce Wayne", "Batman"],
            person: {
                name: "Christian Bale",
                urlID: "q-0cUB8tMF4",
            }
        }
    ]

    it("Renders CastCard components for each cast member, all within an HScrollView component", () => {
        const wrapper = mount(
            <Router>
                <HorizontalCastView cast={cast} />
            </Router>
        );
        expect(wrapper).toContainMatchingElements(1, "HScrollView");
        expect(wrapper).toContainMatchingElements(3, "CastCard");
        const hsv_children = wrapper.find('HScrollView').props().children;
        expect(hsv_children.length).toBe(3);
        hsv_children.map(child => {
            expect(child.type).toBe(CastCard)
        });
    })

    it("Renders the cast in order of billing", () => {
        const wrapper = mount(
            <Router>
                <HorizontalCastView cast={cast} />
            </Router>
        );
        const hsv = wrapper.find('HScrollView');
        expect(hsv.props().children[0].key).toBe("christian-bale-cast-card")
        expect(hsv.props().children[1].key).toBe("heath-ledger-cast-card")
        expect(hsv.props().children[2].key).toBe("aaron-eckhart-cast-card")
    })

})