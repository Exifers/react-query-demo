import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//

import { Wrapper, Main } from './components/styled'
import Sidebar from './components/Sidebar'

import Admin from './screens/admin'
import AdminEpisode from './screens/admin/Episode'
import Episodes from './screens/episodes'
import Episode from './screens/episodes/Episode'

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof document === 'undefined' ? null : children}
    </div>
  )
}

export default function App() {
  return (
    <SafeHydrate>
      <BrowserRouter>
        <Wrapper>
          <Sidebar />
          <Main>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <h1>Welcome!</h1>
                  </>
                }
              />
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/:episodeId" element={<AdminEpisode />} />
              <Route path="/episodes" element={<Episodes />} />
              <Route path="/episodes/:episodeId" element={<Episode />} />
            </Routes>
          </Main>
        </Wrapper>
      </BrowserRouter>
    </SafeHydrate>
  )
}
