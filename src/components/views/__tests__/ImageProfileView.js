import React from "react";
import { mount } from 'enzyme';
import 'jest-enzyme';
import {useImage} from "../../hooks/useImage";
import ImageProfileView from "../ImageProfileView";
jest.mock("../../hooks/useImage")

describe("<ImageProfileView />", () => {

    it("Renders a div img-container with an img inside of it", () => {
        const wrapper = mount(<ImageProfileView src="img/src" alt="image alt text"/>);
        expect(wrapper).toContainMatchingElements(1, "image-profile-view")
        expect(wrapper).toContainMatchingElements(1, "img")
    })

    it("useImage receives src prop as arg and passes it's return value to img's src prop. alt prop is passed directly to img's alt prop", () => {
        useImage.mockReturnValue("s3-signed-url")
        const wrapper = mount(<ImageProfileView src="img/src" alt="image alt text"/>);
        const img = wrapper.find("img")
        expect(useImage.mock.calls[0][0]).toBe("img/src");
        expect(img).toHaveProp("src", "s3-signed-url");
        expect(img).toHaveProp("alt", "image alt text");
    })
})