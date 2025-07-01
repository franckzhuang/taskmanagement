import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Register from '../../frontend/src/components/Register';

describe('Register', () => {
  test('rend le formulaire d\'inscription', () => {
    render(<Register />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirm password|confirmer mot de passe/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /register|inscrire/i })).toBeInTheDocument();
  });

  test('appelle onSubmit avec les bons arguments', () => {
    const mockSubmit = jest.fn();
    render(<Register onSubmit={mockSubmit} />);
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'u@e.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'abc123' } });
    fireEvent.change(screen.getByLabelText(/confirm password|confirmer mot de passe/i), { target: { value: 'abc123' } });
    fireEvent.click(screen.getByRole('button', { name: /register|inscrire/i }));
    expect(mockSubmit).toHaveBeenCalledWith({
      email: 'u@e.com',
      password: 'abc123',
      confirmPassword: 'abc123'
    });
  });
});
