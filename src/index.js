import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from '@apollo/client';

import App from './components/App';
import { client } from './graphql/Client';
import {ThemeProvider} from "styled-components";

const theme = {
    main: '#2f2f2f',
    cardbg: '#454545'
};

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </ThemeProvider>, document.querySelector('#root'));