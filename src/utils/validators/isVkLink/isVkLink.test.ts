import { isVkLink } from './isVkLink';

const CORRECT_LINKS = [
    'vk.com/id291273048',
    'https://vk.ru/krismyoll',
    'vk.com',
    'https://vk.com/searchc%5Bper_page%5D=80&c%5Bq%5D=webM%20Anime&c%5Bsection%5D=video&c%5Bsort%5D=2&z=video-102087446_456247715',
    'https://vk.com/krismyoll?z=albums291273048',
    'https://vk.ru/wall207616702_1855',
    'https://vk.com/friends',
    'https://vk.com/im',
];

const INCORRECT_LINKS = [
    'vko.com/123456789',
    'vk.v.com/channels/mychannel/123456789',
    'vimeo-bug.com/groups/shortfilms/videos/123456789',
    'vk.en/12321',
    'http://vimeo.co/123456789',
    'https::/www.vk.se.com',
];

describe('isVkLink', () => {
    it('Should be return true for valid url', () => {
        CORRECT_LINKS.forEach((url) => {
            expect(isVkLink(url)).toBeTruthy();
        });
    });

    it('Should be return false for invalid url', () => {
        INCORRECT_LINKS.forEach((url) => {
            expect(isVkLink(url)).toBeFalsy();
        });
    });
});
