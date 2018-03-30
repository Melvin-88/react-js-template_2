// import React from 'react'
// import { shallow } from 'enzyme'
// import toJson from 'enzyme-to-json'
// import createBrowserHistory from 'history/createBrowserHistory';
// import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
// import SignIn from './SignIn';
// import renderer from 'react-test-renderer'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import { reduxForm } from 'redux-form'
// import {
//     Route,
//     Switch,
//     Redirect,
//     MemoryRouter
// } from 'react-router-dom';
//
// jest.mock('react-dom');
//
// const history = createBrowserHistory();
// const spy = jest.fn();
// const initialStateValues = {
//     main:{
//         error:{}
//     }
// };
// const Decorated = reduxForm({
//     form: 'testForm',
//     onSubmit: { spy }
// })(SignIn);
//
// const formFieldValues = {
//     login: '',
//     password: ''
// }
//
// it('SignIn renders correctly', () => {
//     const store = createStore((state) => state, initialStateValues);
//     const tree = renderer.create(
//         <Provider store={store}>
//             <ConnectedRouter history={history}>
//                 <MemoryRouter keyLength={0}>
//                     <Decorated
//                                 {...formFieldValues}
//                             />
//                 </MemoryRouter>
//             </ConnectedRouter>
//         </Provider>
//     )
//     expect(toJson(tree)).toEqual()
// });