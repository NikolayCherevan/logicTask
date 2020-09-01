import { walk } from './../maze';

describe('expected number of walk', () => {
    test('expected 3', () => {
        expect(walk(['...', '.x.', 'x..'], 2, 2, 0, 0)).toBe(3);
    })
    test('expected 2', () => {
        expect(walk(['.x.', '...', 'x..'], 2, 2, 0, 0)).toBe(2);
    })
    test('expected 4', () => {
        expect(walk(['...', 'xx.', '...'], 2, 2, 0, 0)).toBe(4);
    })
  
});

