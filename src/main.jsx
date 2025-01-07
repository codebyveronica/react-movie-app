// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import axios from 'axios'
import { Provider } from 'react-redux'
import { store } from './store/store'

import './index.css'

// setup axios
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common['Authorization'] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmE3NzFiODE5YTY5YTQ2MDk2NWIzN2Y2YzMyOGY5NiIsIm5iZiI6MTczMzkyNTIwNS43OTIsInN1YiI6IjY3NTk5OTU1MmJlMTU4MTFiNDRmMGQ5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r2WMw7LPO7o_kG2NQAxBiSOPEXZ6kh0am7V1ALiSFy0`;

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </StrictMode>
)
