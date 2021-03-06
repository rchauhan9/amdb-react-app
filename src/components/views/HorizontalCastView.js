import React from "react";
import HScrollView from "./HScrollView";
import CastCard from "../cards/CastCard";
import {compareCast} from "../../helpers/sorting";
import {formatToSlug} from "../../helpers/formatting";

const HorizontalCastView = ({cast}) => {
    const renderCast = (cast) => {
        cast = cast.slice().sort(compareCast)
        return cast.map(c => {
            return (
                <CastCard castMember={c} key={formatToSlug(`${c.person.name} Cast Card`)} />
            )
        })
    }

    return (
        <HScrollView>
            {renderCast(cast)}
        </HScrollView>
    )
}

export default HorizontalCastView;