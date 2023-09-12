import { Routes as RoutesContainer, Route } from 'react-router-dom';
import { Home } from '../pages';
import { NotFound } from './NotFound';

export const AppRoutes = () => {
    return (
        <RoutesContainer>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />}>
                <Route path="logado" element={<h1>Logado</h1>} />
            </Route>
        </RoutesContainer>
    );
};
