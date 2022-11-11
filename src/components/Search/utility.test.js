import { debounce } from "./utility";

jest.useFakeTimers();
describe('debounce', () => {
    test('Call debounce function', () => {
        const func = jest.fn();
         debounce(func, 500);
       
        jest.advanceTimersByTime(500);
        debounce(func, 200);
        jest.runAllTimers();

        expect(func).toBeCalledTimes(2);
    })
})