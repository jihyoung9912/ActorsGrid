import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

/*
 * Routing Simulator,
 */
test('Rendering Home component Test on the / route', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  );

  const homeText = screen.getByText('Celebrities');
  expect(homeText).toBeInTheDocument();
});

test('Rendering ActorSearch component on the /search/:searchParams route', () => {
  render(
    <MemoryRouter initialEntries={['/search/actors']}>
      <App />
    </MemoryRouter>,
  );

  // const actorSearchComponent = screen.getByText(/Actor Search Page/i);
  // expect(actorSearchComponent).toBeInTheDocument();
});
