import {CounterSchema} from '../types/counterSchema';
import counterReducer, {counterActions} from './counterSlice'

describe('counterSlice.test', () => {
    it('it should increment value', () => {
        const state: CounterSchema = {
            value: 10,
        }
        expect(counterReducer(state, counterActions.increment())).toEqual({value: 11})
    })

    it('it should decrement value', () => {
        const state: CounterSchema = {
            value: 10,
        }
        expect(counterReducer(state, counterActions.decrement())).toEqual({value: 9})
    })

    it('it should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({value: 1})
    })
})