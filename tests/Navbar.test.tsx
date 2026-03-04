import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Navbar } from '../components/Navbar';
import { SectionId } from '../types';

// simple smoke tests

describe('Navbar component', () => {
  it('renders brand text and nav links', () => {
    render(<Navbar />);
    expect(screen.getByText(/DACE'S/i)).toBeInTheDocument();
    // use text queries to avoid collisions with toggle control
    expect(screen.getByText(/^Home$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Menu$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Location$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Contact$/i)).toBeInTheDocument();
  });

  it('toggles mobile menu when toggle control is clicked', async () => {
    render(<Navbar />);
    const toggleBtn = screen.getByLabelText(/toggle menu/i);
    // open mobile menu
    fireEvent.click(toggleBtn);
    // wait for mobile link text to appear
    const fbLink = await screen.findByText(/facebook/i);
    expect(fbLink).toBeInTheDocument();
    // close it again and wait for exit animation to finish
    fireEvent.click(toggleBtn);
    await screen.findByLabelText(/toggle menu/i); // ensure toggle is still available
    await waitFor(() => {
      expect(screen.queryByText(/facebook/i)).not.toBeInTheDocument();
    });
  });
});
