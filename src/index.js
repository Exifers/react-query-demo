import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//

import {Wrapper, Main} from './components/styled'
import Sidebar from './components/Sidebar'

import Admin from './screens/admin/admin'
import AdminEpisode from './screens/admin/AdminEpisode'
import EpisodesList from './screens/episodes/EpisodesList'
import EpisodeDetailCard from './screens/episodes/EpisodeDetailCard'
import {QueryClientProvider, QueryClient} from "react-query";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        }
    }
})

function SafeHydrate({children}) {
    return (
        <div suppressHydrationWarning>
            {typeof document === 'undefined' ? null : children}
        </div>
    )
}

export default function App() {
    return (
        <SafeHydrate>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Wrapper>
                        <Sidebar/>
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
                                <Route path="/admin" element={<Admin/>}/>
                                <Route path="/admin/:episodeId" element={<AdminEpisode/>}/>
                                <Route path="/episodes" element={<EpisodesList/>}/>
                                <Route path="/episodes/:episodeId" element={<EpisodeDetailCard/>}/>
                            </Routes>
                        </Main>
                    </Wrapper>
                    <ToastContainer/>
                </BrowserRouter>
            </QueryClientProvider>
        </SafeHydrate>
    )
}
