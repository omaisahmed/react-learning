// import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import store from './store/configureStore';
import TodoApp from './components/TodoApp';
import Counter from './components/Counter';
import ItemList from './components/ItemList';
import UseCallbackParentComponent from './components/UseCallbackParentComponent';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Form from './components/Form';
import Axios from './components/Axios';
import CartContainer from './containers/CartContainer';


function App() {
  const items = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];

  return (
    <Provider store={store}>
    <>
    <CartContainer/>
    <Routes>
      <Route path='/' component={Home}></Route>  
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>

    <Axios/>
    <Form/>
    <TodoApp/>
    <Counter/> {/* useState, useEffect, useRef Hook Example */}
    <ItemList items={items}/>  {/* useMemon Hook Example */}
    <UseCallbackParentComponent /> {/* useCallback Hook Example */}

    </>
    </Provider>
  );
}

export default App;
