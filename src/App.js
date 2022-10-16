import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main/Main';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import PrivateRoute from './Routes/PrivateRoute';
import Orders from './Component/Orders/Orders';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element:
            <PrivateRoute>
              <Home></Home>
            </PrivateRoute>,
        },
        {
          path: '/home',
          element:
            <PrivateRoute>
              <Home></Home>
            </PrivateRoute>,
        },
        {
          path: '/orders',
          element:
            <PrivateRoute>
              <Orders></Orders>
            </PrivateRoute>
        },
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/register',
          element: <Register></Register>,
        },
      ]
    }
  ]);


  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
