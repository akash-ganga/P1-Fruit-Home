import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Fruits from './components/Fruits/Fruits';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Sec1 from './components/Sec1/Sec1';
import Main from './layout/Main';
import BasketDetail from './components/BasketDetail/BasketDetail';
import { fruitsBasketLoader } from './loaders/fruitsBasketLoader';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/', element: [<Sec1></Sec1>, <Fruits></Fruits>]},
        {
          path: '/basket-detail',
          loader: fruitsBasketLoader,
          element: <BasketDetail></BasketDetail>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        }
      ]
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

// style={{position: 'relative'}}

export default App;