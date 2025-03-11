import { render, screen } from '@testing-library/react';
import { SimpleButton } from './SimpleButton';
import '@testing-library/jest-dom';

test('should first', () => {
  render(<SimpleButton />);
  const simpleButton = screen.getByRole('button');
  expect(simpleButton).toHaveTextContent('OFF');
});
