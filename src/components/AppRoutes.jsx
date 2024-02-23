import React from 'react'
import Dashboard from '../components/Dashboard'
import Create from '../components/Create'
import Edit from '../components/Edit'
import { Navigate } from 'react-router-dom'

const AppRoutes = [
    {
        path : '/',
        element : <Dashboard/>,
        exact : true,
    },
    {
        path : '/create',
        element : <Create/>,
        exact : true,
    },
    {
        path : '/edit/:id',
        element : <Edit/>,
        exact : true,
    },
    {
        path : '*',
        element : <Navigate to='/'/>,
        exact : false,
    }
]

export default AppRoutes