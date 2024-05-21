import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Destination } from './destination'
import { Home } from './home'
import { Crew } from './crew'
import { Technology } from './technology'

export const AppRoutes = () => {    
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/destination' element={<Destination />} />
                <Route exact path='/crew' element={<Crew />} />
                <Route exact path='/technology' element={<Technology />} />
            </Routes>
        </BrowserRouter>
    )
}