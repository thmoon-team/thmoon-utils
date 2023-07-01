export const VIMEO_LINK_REGEX =
    /(?:http|https)?:?\/?\/?(?:www\.)?(?:player\.)?vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\\/]*)\/videos\/|video\/|)(\d+)(?:|\/\?)/;

export const isVimeoLink = (url = '') => VIMEO_LINK_REGEX.test(url);
