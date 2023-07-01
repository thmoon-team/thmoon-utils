import { isEmail } from './isEmail';

const CORRECT_EMAIL = [
    'test@mail.ru',
    'test_test@mail.com',
    'test-test@gmail.com',
    'test-test@thmoon.ru',
    'test-test@thmoon.ro',
];

const INCORRECT_EMAIL = ['testmailru', 'test_test@mail', 'test-testgmail.com', 'test-test@_thmoon/ro'];

describe('isEmail', () => {
    it('Should be return true for valid emails', () => {
        CORRECT_EMAIL.forEach((email) => {
            expect(isEmail(email)).toBeTruthy();
        });
    });

    it('Should be return false for invalid emails', () => {
        INCORRECT_EMAIL.forEach((email) => {
            expect(isEmail(email)).toBeFalsy();
        });
    });
});
