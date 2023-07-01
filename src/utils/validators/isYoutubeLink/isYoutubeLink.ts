export const YOUTUBE_LINK_REGEX =
    /(http:|https:)?(\/\/)?(www\.)?(youtube.com|youtu.be)\/(watch|embed)?(\?v=|\/)?(\S+)?/;

export const isYoutubeLink = (url = '') => YOUTUBE_LINK_REGEX.test(url);
