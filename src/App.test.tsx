import { cleanup, render, RenderResult } from '@testing-library/react';

import App from './App';

describe('App', () => {
  let documentBody: RenderResult;

  beforeEach(() => {
    documentBody = render(<App />);
  });
  afterEach(cleanup);

  it('should exist', () => {
    expect(documentBody).toBeTruthy();
  });
});
