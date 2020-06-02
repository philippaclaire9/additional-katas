const { crackCode } = require('../crackCode');

describe('crackCode()', () => {
  xit('returns false when no encrypted key provided', () => {
    expect(crackCode('')).toEqual(false);
  });
  xit('returns true if key is valid ', () => {
    expect(crackCode('ddd-aaa-z-y-x-123(adxy)')).toEqual(true);
  });
  xit('returns true if key is valid ', () => {
    expect(crackCode('a-b-c-d-e-f-g-h-i-577(abcd)')).toEqual(true);
  });
  xit('returns false if key is invalid ', () => {
    expect(crackCode('a-b-c-d-e-f-g-h-i-577(acdb)')).toEqual(false);
  });
  it('returns false if key is invalid ', () => {
    expect(crackCode('fff-gg-xx-ss-y(fgsy)')).toEqual(false);
  });
});
