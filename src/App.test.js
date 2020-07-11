import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import App from './App';
import { Registrasi, Harapan, Calculator } from './views';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

//snapshot testing 
test('fungsi handel change',()=>{
  const component = renderer.create(
    <Calculator/>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  component.getInstance().handleJumlahChange();
  tree=component.toJSON();
  expect(tree).toMatchSnapshot();
  
  component.getInstance().handleTotalChange();
  tree=component.toJSON();
  expect(tree).toMatchSnapshot();
  
});

test('x',()=>{
  const div = document.createElement("div");
  ReactDOM.render(<button></button>, div);
})

// test('fungsi handel input registrasi',()=>{
//     const component = renderer.create(
//       <Registrasi/>
//     );
  
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
  
//     component.getInstance().handleSubmit();
//     tree=component.toJSON();
//     expect(tree).toMatchSnapshot();
   
//   });

  //redux #Middleware test
  const thunk = ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState)
    }
  
    return next(action)
  }

  const create = () => {
    const store = {
      getState: jest.fn(() => ({})),
      dispatch: jest.fn()
    }
    const next = jest.fn()
  
    const invoke = action => thunk(store)(next)(action)
  
    return { store, next, invoke }
  }

  test('passes through non-function action', () => {
    const { next, invoke } = create()
    const action = { type: 'TEST' }
    invoke(action)
    expect(next).toHaveBeenCalledWith(action)
  })
  
  test('calls the function', () => {
    const { invoke } = create()
    const fn = jest.fn()
    invoke(fn)
    expect(fn).toHaveBeenCalled()
  })
  
  test('passes dispatch and getState', () => {
    const { store, invoke } = create()
    invoke((dispatch, getState) => {
      dispatch('TEST DISPATCH')
      getState()
    })
    expect(store.dispatch).toHaveBeenCalledWith('TEST DISPATCH')
    expect(store.getState).toHaveBeenCalled()
  })

  