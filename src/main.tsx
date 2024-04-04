import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider} from 'react-router-dom'
import { router } from './routes/router.tsx'
import './main.css'

const queryClient = new QueryClient({})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
     <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/dummyjson_products' : '/'}>
    <RouterProvider router={router} />
    </BrowserRouter>
  </QueryClientProvider>
)