const expect = require('expect');

describe('App', () => {
  it('should call the spy correctly', () => {
    // const spy = expect.jest.fn();
    // spy();
    // expect(spy).toHaveBeenCalled();
    var spy = createSpy(value)
    // spy();
    expect(spy).toHaveBeenCalled();
  })
})