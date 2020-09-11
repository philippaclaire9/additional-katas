const findC4Winner = require('../findC4Winner');

describe('findC4Winner()', () => {
  it('returns Please provide 7*6 matrix if no board provided', () => {
    expect(findC4Winner([])).toEqual('Please provide 7*6 matrix');
  });
  it('returns Please provide 7*6 matrix when incorrect matrix dimensions are given', () => {
    expect(
      findC4Winner([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
      ])
    ).toEqual('Please provide 7*6 matrix');

    expect(
      findC4Winner([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null],
      ])
    ).toEqual('Please provide 7*6 matrix');
  });
  it('returns false when no winner (empty board)', () => {
    expect(
      findC4Winner([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
      ])
    ).toEqual(false);
  });
  it('returns counter winner when vertical winner', () => {
    expect(
      findC4Winner([
        [null, null, null, null, null, null, null],
        [null, null, 'o', null, null, null, null],
        [null, null, 'o', null, null, null, null],
        [null, null, 'o', null, null, null, null],
        [null, 'x', 'o', 'x', null, null, null],
        [null, 'x', 'x', 'x', null, null, null],
      ])
    ).toEqual('o');
    expect(
      findC4Winner([
        [null, null, null, null, null, 'x', null],
        [null, null, null, null, null, 'x', null],
        [null, null, null, null, null, 'x', null],
        [null, null, null, null, null, 'x', null],
        [null, null, null, null, null, 'o', null],
        [null, null, null, null, 'o', 'o', 'o'],
      ])
    ).toEqual('x');
  });
  it('returns false when no vertical winner', () => {
    expect(
      findC4Winner([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, 'o', null, null, null, null],
        [null, null, 'x', null, null, null, null],
        [null, 'x', 'o', 'x', null, null, null],
        [null, 'x', 'o', 'x', null, null, null],
      ])
    ).toEqual(false);
  });
  it('returns winning counter when horizontal winner', () => {
    expect(
      findC4Winner([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, 'x', null, null, null, null],
        [null, null, 'x', 'x', 'x', null, null],
        [null, null, 'o', 'o', 'o', 'o', null],
      ])
    ).toEqual('o');

    expect(
      findC4Winner([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, 'o', null, null, null],
        [null, null, null, 'x', 'x', null, null],
        [null, null, null, 'x', 'x', 'x', 'x'],
      ])
    ).toEqual('x');
    expect(
      findC4Winner([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, 'x', 'x', null, null],
        [null, null, null, 'o', 'o', null, null],
        [null, null, null, 'x', 'x', null, null],
        [null, null, null, 'x', 'x', 'x', 'x'],
      ])
    ).toEqual('x');

    expect(
      findC4Winner([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, 'o', 'o', 'o', null, null, null],
        [null, 'x', 'x', 'x', null, null, null],
        [null, 'o', 'x', 'x', 'x', null, null],
        [null, 'x', 'o', 'o', 'o', 'o', null],
      ])
    ).toEqual('o');

    expect(
      findC4Winner([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, 'o', 'o', 'o', null, null, null],
        [null, 'x', 'x', 'x', null, null, null],
        [null, 'o', 'x', 'x', 'x', null, null],
        ['o', 'x', 'o', 'o', 'o', 'o', null],
      ])
    ).toEqual('o');

    expect(
      findC4Winner([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, 'o', 'o', 'o', null, null, null],
        [null, 'x', 'x', 'x', null, null, null],
        ['x', 'o', 'o', 'o', 'o', null, null],
        ['o', 'x', 'o', 'x', 'o', 'o', null],
      ])
    ).toEqual('o');
  });
  it('returns false when 4 counters of the same type are on the board but not in a row', () => {
    expect(
      findC4Winner([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, 'o', 'o', null, null, null],
        [null, null, 'x', 'x', null, null, null],
        [null, null, 'x', 'x', 'x', null, null],
        [null, 'o', 'o', 'o', 'x', 'x', null],
      ])
    ).toEqual(false);
  });
});
