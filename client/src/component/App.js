import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { UsersPage } from '../pages/UsersPage'
import { GroupsPage } from '../pages/GroupsPage'
import { PageNotFound } from '../pages/PageNotFound'
import { Layout } from './Layout'

function App() {    
    return (
        <>    
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<UsersPage />} />
              <Route path='mortgage-calculator' element={<GroupsPage />} />
              <Route path='*' element={<PageNotFound />} />
            </Route>        
          </Routes>
        </>
    )
}

export default App;

