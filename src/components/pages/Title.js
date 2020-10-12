import React from 'react';
import { useQuery } from '@apollo/client';

import { TITLE_BY_URL_ID } from '../../graphql/queries';
import TitleHeader from '../TitleHeader';
import TitleBody from '../TitleBody';

const Title = (props) => {
    console.log("Movie ID:", props.match.params.id)

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
        <div className="container-fluid">
            <br />
            <br />
            <TitleHeader title={data.titleByUrlID.name}
                        released={data.titleByUrlID.released}
                        certificate={data.titleByUrlID.certificateRating}
                        genres={data.titleByUrlID.genres} />
            <TitleBody description={data.titleByUrlID.description}
                        cast={data.titleByUrlID.cast}
                        directors={data.titleByUrlID.directors}
                        writers={data.titleByUrlID.writers}
                        genres={data.titleByUrlID.genres} />
        </div>
    )
}

export default Title;