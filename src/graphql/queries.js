import { gql } from '@apollo/client';

export const PERSON_BY_URL_ID = gql`
 query Person($urlID: String!) {
   personByUrlID(urlID: $urlID) {
    name
    dateOfBirth
   }
 }
`;

export const SEARCHABLES_BY_NAME = gql`
 query Searchable($name: String!) {
    searchableByName(name: $name) {
        name
        ... on Title {
            released
        }
        ... on Person {
            dateOfBirth
        }
        urlID
    }
 }
`

export const TITLE_BY_URL_ID = gql`
 query Title($urlID: String!) {
   titleByUrlID(urlID: $urlID) {
     id
     name
     summary
     released
     certificateRating
     storyline
     tagline
     urlID
     genres {
      genre {
       name
      }
     }
     cast {
       characters
       billing
       person {
         name
       }
     }
     directors {
       person {
         name
       }
     }
     writers {
       person {
         name
       }
     }
   }
 }
 `;