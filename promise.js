const promise = (url, method, data) => {
  return new Promise((onResolve, onReject) => {
    showLoader();
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {
      const parsedData = JSON.parse(xhr.response);
      onResolve(parsedData);
      removeLoader();
    };
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status >= 400) {
        onReject('Error');
        removeLoader();
      }
    };
    xhr.send(JSON.stringify(data));
  });
};

promiseGetBtn.addEventListener('click', () => {
  const getUsers = promise(URL, 'GET', DATA);
  getUsers.then(
    data => {
      renderData(data, 'promiseGet');
    },
    error => {
      renderPostResponse(error, 'promisePost');
    }
  );
});

promisePostBtn.addEventListener('click', () => {
  const postUsers = promise(URL, 'POST', DATA);
  postUsers.then(
    () => {
      renderPostResponse('Success request', 'promisePost');
    },
    error => {
      renderPostResponse(error, 'promisePost');
    }
  );
});
