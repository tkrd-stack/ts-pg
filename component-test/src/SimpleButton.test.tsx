import { render, screen } from '@testing-library/react';
import { SimpleButton } from './SimpleButton';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

test('should first', async () => {
  const user = userEvent.setup();
  render(<SimpleButton />);

  // testing-libraryによるテスト
  const simpleButton = screen.getByRole('button');
  expect(simpleButton).toHaveTextContent('OFF');
  await user.click(simpleButton);
  expect(simpleButton).toHaveTextContent('ON');

  // jestのスナップショットによるテスト
  const view = render(<SimpleButton />);
  expect(view.container).toMatchSnapshot();
});
