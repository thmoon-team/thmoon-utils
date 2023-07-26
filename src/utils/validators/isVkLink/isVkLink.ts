export const VK_LINK_REGEX = /(?:http|https)?:?\/?\/?(?:www\.)?vk\.com|ru\/(\w|\d)+?\/?$/;

export const isVkLink = (url = '') => VK_LINK_REGEX.test(url);
