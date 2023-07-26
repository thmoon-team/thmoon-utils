import { isReliablePassword } from './isReliablePassword';

const CORRECT_PASSWORD = ['TesT123123', '123456789sdsa', 'sdasdaskjsnddsdasdsa', 'TestT@1123'];

const INCORRECT_PASSWORD = ['12345678', '111122233', 'test'];

describe('isReliablePassword', () => {
    it('Should be return true for valid password', () => {
        CORRECT_PASSWORD.forEach((password) => {
            expect(isReliablePassword(password)).toBeTruthy();
        });
    });

    it('Should be return false for invalid password', () => {
        INCORRECT_PASSWORD.forEach((password) => {
            expect(isReliablePassword(password)).toBeFalsy();
        });
    });
});
