import React from "react";
import styled from 'styled-components';


const MainHeaderView = ({mainHeader, subHeader}) => {
    const renderHeaders = (mainHeader, subHeader) => {
        if (subHeader) {
            return (
                <MainHeader>
                    {mainHeader}
                    <SubHeader>{" " + subHeader}</SubHeader>
                </MainHeader>
            )
        } else {
            return (
                <MainHeader>
                    {mainHeader}
                </MainHeader>
            )
        }
    }

    return (
        <div>
            {renderHeaders(mainHeader, subHeader)}
            <br />
        </div>
    )
}

const MainHeader = styled.h1`
    color: white;
`

const SubHeader = styled.span`
    color: gray;
`

export default MainHeaderView;