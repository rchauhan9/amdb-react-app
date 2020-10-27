import React from "react";
import HScrollView from "./HScrollView";
import CastCard from "../cards/CastCard";
import {compareCast} from "../../helpers/sorting";

const HorizontalCastView = (props) => {
    const renderCast = (cast) => {
        cast = cast.slice().sort(compareCast)
        return cast.map(c => {
            return (
                <CastCard castMember={c} key={c.person.name} />
            )
        })
    }

    return (
        <HScrollView>
            {renderCast(props.cast)}
        </HScrollView>
    )
}

export default HorizontalCastView;