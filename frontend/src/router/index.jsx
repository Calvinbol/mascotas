import { createBrowserRouter } from 'react-router-dom'
import Home from '../components/Home'
import Layout from '../Layouts/Layout'
import Signup from '../pages/Signup/Signup'
import Mascotas from '../components/Mascotas'
import Contacto from '../components/Contacto'
import Adoptar from '../components/Adoptar'
import Login from '../pages/Login/Login'
import PetsView from '../pages/pets/PetsView'
import PetDetails from '../pages/PetDetails/PetDetails'


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/mascotas",
        element: <Mascotas />,
      },
      {
        path: "/contacto",
        element: <Contacto />,
      },
      {
        path: "/adoptar",
        element: <Adoptar/>
      },
      {
        path: "/adoptar/:animal",
        element: <PetsView />
      },
      {
        path: "/adoptar/todas",
        element: <PetsView/>
      },
      {
        path: "/register",
        element: <Signup />,
      },
      {
        path: '/adoptar/animal/:id', // Nueva ruta para los detalles del animal
        element: <PetDetails />,
      },

    ],
  },
]);