import objectsMerge from '../js/01/objectsMerge';

const normalizeStr = (str) => str
  .replace(/\s+/g, '')
  .replace(/ {2,}/g, ' ')
  .replace(/> </g, '><')
  .trim();

describe('module excercises ', () => {

  test('1. Feladat: objectsMerge should return a concated object', () => {
    const johnDoe = {
      firstName: 'Jonh',
      lastName: 'Doe',
    };

    const janeDoe = {
      firstName: 'Jane',
      lastName: 'Doe',
    };

    const result = objectsMerge(johnDoe, janeDoe);
    const expexted = {
      0: {
        firstName: 'Jonh',
        lastName: 'Doe',
      },
      1: {
        firstName: 'Jane',
        lastName: 'Doe',
      },
    };

    expect(result).toEqual(expexted);
  });

});
