import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Fruits from './components/Fruits/Fruits';
import Sec1 from './components/Sec1/Sec1';
import About from './components/About/About';
import Main from './layout/Main';
import Basket from './components/Basket/Basket';
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
        }
      ]
    },
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

// style={{position: 'relative'}}

export default App;