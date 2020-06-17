const { findConnectFourWinner } = require('../findConnectFourWinner');

describe('findConnectFourWinner()', () => {
  it('Returns Please provide a 7 * 6 matrix if no matrix provided', () => {
    expect(findConnectFourWinner([])).toEqual('Please provide a 7 * 6 matrix');
  });
  it('Returns Please provide a 7 * 6 matrix matrix dimensions are incorrect', () => {
    expect(
      findConnectFourWinner([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
      ])
    ).toEqual('Please provide a 7 * 6 matrix');
    expect(
      findConnectFourWinner([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
      ])
    ).toEqual('Please provide a 7 * 6 matrix');
  });
  it('Returns false when no winner when board is null', () => {
    expect(
      findConnectFourWinner([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
      ])
    ).toEqual(false);
  });
  it('Returns false when no winner', () => {
    expect(
      findConnectFourWinner([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, 'o', null, null, null, null],
        [null, null, 'x', null, null, null, null],
        [null, 'x', 'o', 'x', null, null, null],
        [null, 'x', 'o', 'x', null, null, null],
      ])
    ).toEqual(false);
  });
  it.only('Returns counter winner when vertical winner', () => {
    expect(
      findConnectFourWinner([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, 'o', null, null, null, null],
        [null, null, 'o', null, null, null, null],
        [null, 'x', 'o', 'x', null, null, null],
        [null, 'x', 'o', 'x', null, null, null],
      ])
    ).toEqual('o');
  });
  it.only('Returns counter winner when vertical winner', () => {
    expect(
      findConnectFourWinner([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, 'x', null, null, null, null],
        [null, null, 'x', null, null, null, null],
        [null, 'o', 'x', 'o', null, null, null],
        [null, 'o', 'x', 'o', null, null, null],
      ])
    ).toEqual('x');
  });
  it('Returns winning team when horizontal winner', () => {
    expect(
      findConnectFourWinner([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, 'x', null, null, null, null],
        [null, null, 'x', 'x', 'x', null, null],
        [null, null, 'o', 'o', 'o', 'o', null],
      ])
    ).toEqual('o');
  });
  it('Returns winning team when horizontal winner', () => {
    expect(
      findConnectFourWinner([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, 'o', null, null, null, null],
        [null, null, 'o', 'x', 'x', null, null],
        [null, null, 'x', 'x', 'x', 'x', null],
      ])
    ).toEqual('x');
  });
  it.only('Returns winning team when diagonal winner', () => {
    expect(
      findConnectFourWinner([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, 'x', null, null, null],
        [null, null, 'x', 'o', null, null, null],
        [null, 'x', 'o', 'x', null, null, null],
        ['x', 'x', 'o', 'o', null, null, 'o'],
      ])
    ).toEqual('x');
  });
});
