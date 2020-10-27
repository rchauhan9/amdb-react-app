import { gql } from '@apollo/client';

export const PERSON_BY_URL_ID = gql`
 query Person($urlID: String!) {
   personByUrlID(urlID: $urlID) {
    id
    name
    dateOfBirth
    actedIn {
     title {
      name
      released
      urlID
     }
    }
    directed {
     title {
      name
      released
      urlID
     }
    }
    produced {
     title {
      name
      released
      urlID
     }
    }
    wrote {
     title {
      name
      released
      urlID
     }
    }
    awardNominations {
     award {
      name
      organisation
      urlID
     }
     year
     titleName
     titleReleased
    }
    awardWins {
     award {
      name
      organisation
      urlID
     }
     year
     titleName
     titleReleased
    }
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
       urlID
       name
      }
     }
     cast {
       characters
       billing
       person {
         urlID
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