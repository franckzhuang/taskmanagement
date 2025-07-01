// tests/PrivateRoute.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from '../../frontend/src/components/PrivateRoute';
import { AuthContext } from '../../frontend/src/contexts/AuthContext';

describe('PrivateRoute', () => {
  test('redirige vers /login si non authentifié', () => {
    render(
      <AuthContext.Provider value={{ user: null }}>
        <MemoryRouter initialEntries={['/protected']}>
          <Routes>
            <Route path="/login" element={<div>Login Page</div>} />
            <Route path="/protected" element={
              <PrivateRoute>
                <div>Protected Content</div>
              </PrivateRoute>
            } />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText(/login page/i)).toBeInTheDocument();
  });

  test('affiche le contenu protégé si authentifié', () => {
    render(
      <AuthContext.Provider value={{ user: { id: 1, name: 'Test' } }}>
        <MemoryRouter initialEntries={['/protected']}>
          <Routes>
            <Route path="/protected" element={
              <PrivateRoute>
                <div>Protected Content</div>
              </PrivateRoute>
            } />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText(/protected content/i)).toBeInTheDocument();
  });
});
