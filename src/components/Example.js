import React from 'react';
import { useQuery } from '@apollo/client';
import Button from 'react-bootstrap/Button'; 

import { PERSON_BY_URL_ID } from '../graphql/queries'

const Example = (props) => {
    const { loading, error, data } = useQuery(PERSON_BY_URL_ID, {
        variables: {
            urlID: props.urlID
        },
     });

      if (loading) return null;
      if (error) return `Error! ${error}`;

      return (
          <div>
              <div>{data.personByUrlID.name}</div>
              <div>{data.personByUrlID.dateOfBirth}</div>
              <Button variant="primary">Primary</Button>
          </div>
      );
}

export default Example;