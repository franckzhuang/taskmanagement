// tests/Dashboard.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../../frontend/src/components/Dashboard';

describe('Dashboard', () => {
  test('rend le titre Dashboard', () => {
    render(<Dashboard />);
    // suppose que votre Dashboard affiche un titre contenant "Dashboard"
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
  });
});
