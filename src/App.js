import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Fruits from './components/Fruits/Fruits';
import Header from './components/Header/Header';
import Sec1 from './components/Sec1/Sec1';
import About from './components/About/About';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/about', element: <About></About>}
    ]},
    { path: '/home', element: <div>balchal</div>}
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      {/* <Header></Header> */}
      <Sec1></Sec1>
      <Fruits></Fruits>
      <Footer></Footer>
    </div>
  );
}

export default App;