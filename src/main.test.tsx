import * as all from './main';

describe('App', () => {
  it('should change counter when clicked', () => {
    jest.mock('./main', () => jest.fn());

    expect(all).toHaveBeenCalled();
  });
});
