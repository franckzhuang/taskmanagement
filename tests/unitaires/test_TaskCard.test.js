// tests/TaskCard.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskCard from '../../frontend/src/components/TaskCard';

describe('TaskCard', () => {
  const sampleTask = {
    id: 1,
    title: 'Titre de la tâche',
    description: 'Description détaillée',
    status: 'En cours',
    priority: 'Haute'
  };

  test('affiche le titre, la description et le statut', () => {
    render(<TaskCard task={sampleTask} />);
    expect(screen.getByText(/titre de la tâche/i)).toBeInTheDocument();
    expect(screen.getByText(/description détaillée/i)).toBeInTheDocument();
    expect(screen.getByText(/en cours/i)).toBeInTheDocument();
    expect(screen.getByText(/haute/i)).toBeInTheDocument();
  });
});
