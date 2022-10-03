const fetchData = async (url, body = {}) => {
  const response = await fetch(url, body);
  showLoader();
  if (response.ok) {
    return response
      .json()
      .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });
  }
};

getFetchBtn.addEventListener('click', async () => {
  const response = await fetchData(URL, {
    method: 'GET',
    Headers: HEADERS,
    data: JSON.stringify(DATA)
  });
  if (response) {
    renderData(response, 'getFetch');
  } else {
    renderPostResponse('Error', 'postFetch');
  }
  removeLoader();
});

postFetchBtn.addEventListener('click', async () => {
  const response = await fetchData(URL, {
    method: 'POST',
    Headers: HEADERS,
    data: JSON.stringify(DATA)
  });
  if (response) {
    renderPostResponse('Success request', 'postFetch');
  } else {
    renderPostResponse('Error', 'postFetch');
  }
  removeLoader();
});
