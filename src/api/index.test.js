import API from './index';

describe('API', () => {
  it('should be truthy', () => {
    // Assert
    expect(API).toBeTruthy();
  });

  it('should have a root', () => {
    // Assert
    expect(typeof API.root).toEqual('string');
  });

  it('should have a path object', () => {
    // Assert
    expect(typeof API.path).toEqual('object');
  });

  it('should have load rates path', () => {
    // Assert
    expect(typeof API.path.loadRates).toEqual('string');
  });
});
