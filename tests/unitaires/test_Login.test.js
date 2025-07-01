import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../../frontend/src/components/Login';

describe('Login', () => {
  test('rend le formulaire de connexion', () => {
    render(<Login />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login|se connecter/i })).toBeInTheDocument();
  });

  test('appelle la callback onSubmit au clic', () => {
    const mockSubmit = jest.fn();
    render(<Login onSubmit={mockSubmit} />);
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'secret' } });
    fireEvent.click(screen.getByRole('button', { name: /login|se connecter/i }));
    expect(mockSubmit).toHaveBeenCalled();
  });
});
