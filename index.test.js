const { add } = require('./');

describe('add', () => {
  it('adds two numbers', () => {
    expect(add(1, 2)).toMatchSnapshot();
  });
});

