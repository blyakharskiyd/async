const URL = 'https://jsonplaceholder.ir/users';
const DATA = { name: 'Success' };
const HEADERS = {
  Accept: 'application.json',
  'Content-Type': 'application/json'
};
const getFetchBtn = document.getElementById('getFetchButton');
const postFetchBtn = document.getElementById('postFetchButton');
const getXhrBtn = document.getElementById('getXhrButton');
const postXhrBtn = document.getElementById('postXhrButton');
const getTryBtn = document.getElementById('getTryButton');
const postTryBtn = document.getElementById('postTryButton');
const promiseGetBtn = document.getElementById('promiseGetButton');
const promisePostBtn = document.getElementById('promisePostButton');
const loadingWrapper = document.getElementById('loading');
const wrapper = document.getElementById('promiseWrapper');

const renderData = (data, type) => {
  const wrapper = document.getElementById(`${type}Wrapper`);
  const renderData = data
    .map(user => {
      return `<li class="wrapperData">${user.username}, ${user.email}</li>`;
    })
    .join(' ');
  wrapper.insertAdjacentHTML('afterbegin', renderData);
};

const renderPostResponse = (data, type) => {
  const wrapper = document.getElementById(`${type}Wrapper`);
  wrapper.innerHTML = `<div class="wrapperDataPost">${data}</div>`;
};

const removeLoader = () => {
  loadingWrapper.innerHTML = '';
};

const showLoader = () => {
  loadingWrapper.innerHTML = 'Loading...';
};
