import { isPhone } from './isPhone';

const CORRECT_PHONES = ['89819790111', '37319790124', '27127654385'];

const INCORRECT_PHONES = ['9819791111', '981979111113', '373982'];

describe('isPhone', () => {
    it('Should be return true for valid phone', () => {
        CORRECT_PHONES.forEach((phone) => {
            expect(isPhone(phone)).toBeTruthy();
        });
    });

    it('Should be return false for invalid phone', () => {
        INCORRECT_PHONES.forEach((phone) => {
            expect(isPhone(phone)).toBeFalsy();
        });
    });
});
