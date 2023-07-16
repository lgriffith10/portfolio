import { createBrowserRouter } from 'react-router-dom';
import { Intro, Home } from '@/views';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Intro />,
  },
  {
    path: '/home',
    element: <Home />
  }
])