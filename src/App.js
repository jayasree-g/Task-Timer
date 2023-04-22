import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Tasks from './components/Tasks';
import RootLayout from './components/RootLayout';
import Dashboard from './components/Dashboard';
import Calendar from './components/Calendar';
import Reports from './components/Reports';

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[
        {
          path:"/",
          element:<Tasks/>
        },
        {
          path:"/dashboard",
          element:<Dashboard/>
        },
        {
          path:"/calendar",
          element:<Calendar/>
        },
        {
          path:"/reports",
          element:<Reports/>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;