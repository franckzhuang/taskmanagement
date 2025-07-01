// tests/TaskForm.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from '../../frontend/src/components/TaskForm';

describe('TaskForm', () => {
  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    mockOnSubmit.mockClear();
  });

  test('rend le formulaire avec champs titre et description', () => {
    render(<TaskForm onSubmit={mockOnSubmit} />);
    expect(screen.getByLabelText(/title|titre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit|ajouter/i })).toBeInTheDocument();
  });

  test('appelle onSubmit avec les données du formulaire', () => {
    render(<TaskForm onSubmit={mockOnSubmit} />);
    fireEvent.change(screen.getByLabelText(/title|titre/i), { target: { value: 'Nouvelle tâche' } });
    fireEvent.change(screen.getByLabelText(/description/i), { target: { value: 'Détails' } });
    fireEvent.click(screen.getByRole('button', { name: /submit|ajouter/i }));

    expect(mockOnSubmit).toHaveBeenCalledWith({
      title: 'Nouvelle tâche',
      description: 'Détails',
    });
  });
});
