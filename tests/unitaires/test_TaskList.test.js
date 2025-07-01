import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskList from '../../frontend/src/components/TaskList';

describe('TaskList', () => {
  const tasks = [
    { id: 1, title: 'Tâche 1', description: 'Desc 1', status: 'OK', priority: 'Basse' },
    { id: 2, title: 'Tâche 2', description: 'Desc 2', status: 'En cours', priority: 'Haute' },
  ];

  test('affiche une liste de TaskCard', () => {
    render(<TaskList tasks={tasks} />);
    expect(screen.getByText(/tâche 1/i)).toBeInTheDocument();
    expect(screen.getByText(/tâche 2/i)).toBeInTheDocument();
  });

  test('rend un message quand la liste est vide', () => {
    render(<TaskList tasks={[]} />);
    expect(screen.getByText(/aucune tâche/i)).toBeInTheDocument();
  });
});
