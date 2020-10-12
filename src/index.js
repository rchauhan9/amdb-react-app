import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from '@apollo/client';

import App from './components/App';
import { client } from './graphql/Client';

ReactDOM.render(
    <ApolloProvider client={client}>
            <App />  
    </ApolloProvider>, document.querySelector('#root'));