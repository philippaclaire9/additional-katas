const { checkDiagWin } = require('../checkDiagWin');

describe('checkDiagWin()', () => {
  it('returns Please provide a 7*6 matrix when no matrix is provided', () => {
    expect(checkDiagWin([])).toEqual('Please provide a 7*6 matrix');
  });
  it('returns Please provide 7*6 matrix when matrix is incorrect size', () => {
    expect(
      checkDiagWin([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
      ])
    ).toEqual('Please provide a 7*6 matrix');
    expect(
      checkDiagWin([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
      ])
    ).toEqual('Please provide a 7*6 matrix');
  });
  it('returns false when no diagonal winner (no counters)', () => {
    expect(
      checkDiagWin([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
      ])
    ).toEqual(false);
  });
  it('returns false when no diagonal winner (horizontal counters)', () => {
    expect(
      checkDiagWin([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, 'x', 'x', 'x', 'x', null, null],
      ])
    ).toEqual(false);
  });
  it('returns false when no diagonal winner (vertical counters)', () => {
    expect(
      checkDiagWin([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, 'o', null, null, null, null, null],
        [null, 'o', null, null, null, null, null],
        [null, 'o', null, null, null, null, null],
        [null, 'o', null, null, null, null, null],
      ])
    ).toEqual(false);
  });
  it.only('returns true when diagonal winner', () => {
    expect(
      checkDiagWin([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, 'x', null, null, null],
        [null, null, 'x', null, null, null, null],
        [null, 'x', null, null, null, null, null],
        ['x', null, null, null, null, null, null],
      ])
    ).toEqual('x');
    expect(
      checkDiagWin([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, 'o', null, null, null, null],
        [null, null, null, 'o', null, null, null],
        [null, null, null, null, 'o', null, null],
        [null, null, null, null, null, 'o', null],
      ])
    ).toEqual('o');
  });
});
