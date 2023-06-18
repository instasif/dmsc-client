import { RouterProvider } from 'react-router-dom';
import './App.css'
import { router } from './Router/Routes';

function App() {

  return (
    <section className="max-w-[1440px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </section>
  );
}

export default App
