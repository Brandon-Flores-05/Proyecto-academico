import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.tsx'
import { Flex } from './components/Flex.tsx'
import { Grid } from './components/Grid.tsx'
import Index from './components/Index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<App />*/}
    {/*<Flex/>*/}
    {/*<Grid/>*/}
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/app" element={<App />} />
        <Route path="/flex" element={<Flex />} />
        <Route path="/grid" element={<Grid />} />
      </Routes>
    </BrowserRouter>

  </StrictMode>,
)
