import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/services', element: <Services />},
  {path: '/work', element: <Work />},
  {path: '/about', element: <About />},
  {path: '/contact', element: <Contact />}
]);

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
