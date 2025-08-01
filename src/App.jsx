import React from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from './page/layout/Layout'
import Country from './page/country/Country'
import Movie from './page/movie/Movie'

const App = () => {
  return (
    useRoutes([
      {
        path: "/",
        element: <Layout/>,
        children: [
          {
            index: true,
            element: <Country/>
          },
          {
            path: "/movie",
            element: <Movie/>
          }
        ]
      }
    ])
  )
}

export default App