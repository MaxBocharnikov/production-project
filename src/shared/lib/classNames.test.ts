import {classNames} from './classNames';

describe("className", () => {
    test('with first parameter', () => {
        expect(classNames('someClass'))
            .toBe('someClass');
    })

    test('with additional parameter', () => {
        expect(classNames('someClass', {}, ['class1', 'class2']))
            .toBe('someClass class1 class2');
    })

    test('with mods', () => {
        expect(classNames('someClass', {hovered: true, scrollable: true}, ['class1', 'class2']))
            .toBe('someClass class1 class2 hovered scrollable');
    })

    test('with partial mods', () => {
        expect(classNames('someClass', {hovered: true, scrollable: false}, ['class1', 'class2']))
            .toBe('someClass class1 class2 hovered');
    })

    test('with partial mods undefined', () => {
        expect(classNames('someClass', {hovered: undefined, scrollable: true}, ['class1', 'class2']))
            .toBe('someClass class1 class2 scrollable');
    })
})