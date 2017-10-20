// needed for regenerator-runtime
// (ES7 generator support is required by redux-saga)
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import 'babel-polyfill';

configure({ adapter: new Adapter() });
