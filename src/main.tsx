
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { HashRouter, Routes, Route } from 'react-router-dom'

import App from './App.tsx'
import { Form } from './components/Form.tsx'
import { Flex } from './components/Flex.tsx'
import { Grid } from './components/Grid.tsx'
import Index from './components/Index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/app" element={<App />} />
        <Route path="/flex" element={<Flex />} />
        <Route path="/grid" element={<Grid />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
