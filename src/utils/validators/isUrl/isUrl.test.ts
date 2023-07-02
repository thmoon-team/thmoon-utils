import { isUrl } from './isUrl';

const CORRECT_URL = ['https://www.test-url.com/test', 'www.test-url.com/test', 'https://test-url.com/test'];

const INCORRECT_URL = ['test-incorrect', 'test-url.com'];

describe('isUrl', () => {
    it('Should be return true for valid url', () => {
        CORRECT_URL.forEach((url) => {
            expect(isUrl(url)).toBeTruthy();
        });
    });

    it('Should be return false for invalidurls', () => {
        INCORRECT_URL.forEach((url) => {
            expect(isUrl(url)).toBeFalsy();
        });
    });
});
