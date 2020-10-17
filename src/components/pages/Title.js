import React from 'react';
import { useQuery } from '@apollo/client';

import { TITLE_BY_URL_ID } from '../../graphql/queries';
import TitleBody from '../TitleBody';
import MainHeaderView from '../views/MainHeaderView';

import '../../css/pages/page.css'

const Title = (props) => {

    const { loading, error, data } = useQuery(TITLE_BY_URL_ID, {
        variables: {
            urlID: props.match.params.id
        },
     });

    if (loading) return null;
    if (error) return `Error! ${error}`;
    if (data.titleByUrlID == null) {
        return (
            <div>
                Page Not Found
            </div>
        )
    }

    return (
        <div className="container page">
            <br />
            <br />
            <MainHeaderView mainHeader={data.titleByUrlID.name} subHeader={`(${data.titleByUrlID.released})`} />
            <TitleBody id = {data.titleByUrlID.id}
                       name = {data.titleByUrlID.name}
                        description={data.titleByUrlID.description}
                        cast={data.titleByUrlID.cast}
                        summary={data.titleByUrlID.summary}
                        storyline={data.titleByUrlID.storyline}
                        tagline={data.titleByUrlID.tagline}
                        directors={data.titleByUrlID.directors}
                        writers={data.titleByUrlID.writers}
                        genres={data.titleByUrlID.genres} />
        </div>
    )
}

export default Title;