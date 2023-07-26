import { isVimeoLink } from './isVimeoLink';

const CORRECT_LINKS = [
    'vimeo.com/123456789',
    'vimeo.com/channels/mychannel/123456789',
    'vimeo.com/groups/shortfilms/videos/123456789',
    'player.vimeo.com/video/123456789',
    'http://vimeo.com/123456789',
    'https://vimeo.com/channels/mychannel/123456789',
    'https://vimeo.com/groups/shortfilms/videos/123456789',
    'https://www.player.vimeo.com/video/123456789',
];

const INCORRECT_LINKS = [
    'wimeo.com/123456789',
    'www.vime.com/channels/mychannel/123456789',
    'vimeo-bug.com/groups/shortfilms/videos/123456789',
    'player.vimeo.ru/video/123456789',
    'http://vimeo.co/123456789',
    'vimeo.se.com',
];

describe('isVimeoLink', () => {
    it('Should be return true for valid url', () => {
        CORRECT_LINKS.forEach((url) => {
            expect(isVimeoLink(url)).toBeTruthy();
        });
    });

    it('Should be return false for invalid url', () => {
        INCORRECT_LINKS.forEach((url) => {
            expect(isVimeoLink(url)).toBeFalsy();
        });
    });
});
