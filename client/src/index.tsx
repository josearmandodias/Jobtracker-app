import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './components/Accueil/Home';
import LoginForm from './components/Auth/Signin';
import Signup from './components/Auth/Signup';
import Signin from './components/Auth/Signin';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<LoginForm />}/>
      <Route path="/login" element={<Signin />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/home" element={<Home />}/>
    </Route>
  )
);

// Je créer un root pour mon application (a partir d'un élément HTML)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// On injecte notre application dans le DOM
root.render(
    <RouterProvider router={router} />
);