import { validateRequiredParameter } from '../logic';

describe('test validateRequiredParameter', () => {
  it('should throw an error if the parameter value is null', () => {
    expect(() => validateRequiredParameter('param1', null)).toThrow();
  });
});
