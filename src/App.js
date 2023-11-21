
import React from 'react'
import { createBrowserRouter, RouterProvider, Routes, Route, Link, Outlet } from 'react-router-dom'

const router = createBrowserRouter([{ path: "*", Component: Root }]);

function Root() {
    return <React.Fragment>
  <div>
    123123
  </div>
</React.Fragment>
}

export default function App() {
    return <RouterProvider router={router} />
}
