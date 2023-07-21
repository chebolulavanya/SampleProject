/**
 * @format
 */

// import 'react-native';
// import React from 'react';
// // const App = require('../App');
// import App from '../App'

// // Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

// it('renders correctly', () => {
//   renderer.create(<App />);
//   // const tree = renderer.create(<App />).toJSON();
//   // expect(tree).toMatchSnapshot();
// });

import React from 'react'; import { render, getByText } from '@testing-library/react-native';

import App from '../App';

describe('App', () => { test('renders App component', () => { const { getByText } = render(); const appText = getByText('Hello, World!'); expect(appText).toBeDefined(); }); });
