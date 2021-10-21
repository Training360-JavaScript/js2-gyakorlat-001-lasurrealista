import concatArrays from '../js/03/concatArrays';

const normalizeStr = (str) => str
  .replace(/\s+/g, '')
  .replace(/ {2,}/g, ' ')
  .replace(/> </g, '><')
  .trim();

describe('module excercises ', () => {

  test('3. Feladat: concatArrays should return a concated arrays', () => {
    const result = concatArrays('r', ['robi', 'géza'], [' márton'], ['hammadata']);

    expect(result).toEqual(['géza', 'hammadata']);
  });

});
