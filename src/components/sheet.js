// import ExampleSheet from './examplesheet';
// import ConfirmSheet from './confirm';
import ActionButtons from './ActionButtons';
import {registerSheet} from 'react-native-actions-sheet';

/**
 * Registering the sheets here because otherwise sheet closes on
 * hot reload during development.
 */
// registerSheet('confirm-sheet', ConfirmSheet);
// registerSheet('example-sheet', ExampleSheet);
registerSheet('ActionButtons', ActionButtons);
export {};

/**
 * Since we are not importing our Sheets in any component or file, we want to make sure
 * they are bundled by the JS bundler. Hence we will import this file in App.js.
 */