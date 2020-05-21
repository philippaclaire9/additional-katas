const { wrongWayCow } = require('../wrongWayCow');

describe('wrongWayCow()', () => {
  xit('returns an empty array when all cows facing the same way', () => {
    expect(wrongWayCow('cowcowcowcow')).toEqual([]);
  });
  xit('returns coordinates of wrong way cow in 1 field', () => {
    expect(wrongWayCow('cowcowwoccow')).toEqual([0, 2]);
  });
  xit('returns coordinates of wrong way cow in 1 field', () => {
    expect(wrongWayCow('wocwoccowwoc')).toEqual([0, 2]);
  });
  it('returns coordinates of wrong way cow in 2 fields', () => {
    expect(wrongWayCow('wocwocwocwoc\\ncowcowwoccow')).toEqual([1, 2]);
  });
});
