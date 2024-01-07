import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect';

test( 'it should foo', () => {
  const { getByText } = render( <App /> );
  const linkElement = getByText( /foo/i );
  expect( linkElement ).toBeInTheDocument();
} );
