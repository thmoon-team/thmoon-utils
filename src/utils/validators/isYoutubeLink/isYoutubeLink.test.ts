import { isYoutubeLink } from './isYoutubeLink';

const CORRECT_LINKS = [
    'https://www.youtube.com/attribution_link?a=tolCzpA7CrY&u=%2Fwatch%3Fv%3DMoBL33GT9S8%26feature%3Dshare',
    'http://www.youtube.com/watch?v=iwGFalTRHDA',
    'http://www.youtube.com/watch?v=iwGFalTRHDA&feature=related',
    'http://youtu.be/iwGFalTRHDA',
    'http://www.youtube.com/embed/watch?feature=player_embedded&v=iwGFalTRHDA',
    'www.youtube.com/watch?v=iwGFalTRHDA',
    'www.youtu.be/iwGFalTRHDA',
    'youtu.be/iwGFalTRHDA',
    'youtube.com/watch?v=iwGFalTRHDA',
    'http://www.youtube.com/attribution_link?u=/watch?v=aGmiw_rrNxk&feature=share&a=9QlmP1yvjcllp0h3l0NwuA',
];

const INCORRECT_LINKS = [
    'http://www.youube.com/embed/',
    'http://www.rutube.com/embed/',
    'www.you.com.test',
    'youtube.en/12321',
];

describe('isYoutubeLink', () => {
    it('Should be return true for valid url', () => {
        CORRECT_LINKS.forEach((url) => {
            expect(isYoutubeLink(url)).toBeTruthy();
        });
    });

    it('Should be return false for invalid url', () => {
        INCORRECT_LINKS.forEach((url) => {
            expect(isYoutubeLink(url)).toBeFalsy();
        });
    });
});
