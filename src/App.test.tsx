import { cleanup, fireEvent, render, RenderResult } from '@testing-library/react';

import App from './App';

describe('App', () => {
  let documentBody: RenderResult;

  beforeEach(() => {
    documentBody = render(<App />);
  });
  afterEach(cleanup);

  it('should change counter when clicked', () => {
    const button = documentBody.getByTestId('counter');

    fireEvent.click(button);

    expect(documentBody.getByTestId('counter').innerHTML).toBe('count is: 1');
  });
});
