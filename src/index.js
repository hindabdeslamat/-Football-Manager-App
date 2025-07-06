import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import ReducerMatch from './reducers/ReducerMatch';
// import ReducerPlayer from './reducers/ReducerPlayer';
import { Reducer } from './StoreFootball';

import { legacy_createStore as createStore} from 'redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const store1=createStore(ReducerMatch)
// const store2=createStore(ReducerPlayer)
const store=createStore(Reducer)

root.render(
   <Provider store={store}>
      <React.StrictMode>
         <BrowserRouter>
            <App />
         </BrowserRouter>
     </React.StrictMode>
   </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
