import {getCounter} from './getCounter';
import {StateSchema} from 'app/providers/StoreProvider';

describe('getCounter', () => {
    it('should return counter value', () => {
        const state: Partial<StateSchema> = {
           counter: {value: 10}
        }
        expect(getCounter(state as StateSchema)).toEqual({value: 10})
    })
})