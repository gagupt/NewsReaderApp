import ApiService from './Api';

const BASE_URL = 'https://stark-retreat-06562.herokuapp.com';
const client = new ApiService({ baseURL: BASE_URL });

const hackerNewsApi = {};

const PAGE_LIMIT = 20;
const getPageSlice = (limit, page = 0) => ({ begin: page * limit, end: (page + 1) * limit });
const getPageValues = ({ begin, end, items }) => items.slice(begin, end);

hackerNewsApi.getTopStoryIds = () => client.get(`/topstories`);
hackerNewsApi.getStory = id => client.get(`/item/${id}`);
hackerNewsApi.getStoriesByPage = (ids, page) => {
  const { begin, end } = getPageSlice(PAGE_LIMIT, page);
  const activeIds = getPageValues({ begin, end, items: ids });
  const storyPromises = activeIds.map(id => hackerNewsApi.getStory(id));
  return Promise.all(storyPromises);
};

export default hackerNewsApi;
