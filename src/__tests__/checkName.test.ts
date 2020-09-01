import {checkName} from './../checkName';



describe('expected name', ()=> {
    test('first test', ()=> {
        expect(checkName('Kolya')).toBe('Hello, Kolya')
    })
    test('first test', ()=> {
        expect(checkName('Some')).toBe('Hello, Some')
    })
})