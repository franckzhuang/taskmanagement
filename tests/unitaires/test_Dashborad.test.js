import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../../frontend/src/components/Dashboard';

describe('Dashboard', () => {
  test('rend le titre Dashboard', () => {
    render(<Dashboard />);
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
  });
});
