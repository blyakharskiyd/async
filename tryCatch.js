getTryBtn.addEventListener('click', () => {
  try {
    loadingWrapper.innerHTML = 'Loading...';
    const response = fetchData(URL, {
      method: 'GET',
      Headers: HEADERS
    });
    response
      .then(response => {
        renderData(response, 'getTry');
      })
      .then(() => {
        loadingWrapper.innerHTML = '';
      })
      .catch();
  } catch {
    renderPostResponse('Error', 'getTry');
  }
});
