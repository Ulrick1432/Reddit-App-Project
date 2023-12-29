//should be used for real API fetch

export const searchReddit = (query) => {
    return fetch(`https://www.reddit.com/search.json?q=${query}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        return data.data.children;
      });
  };
  
export const topicReddit = (query) => {
  return fetch(`https://www.reddit.com/r/${query}.json`)
  .then((response) => {
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
  })
  .then((data) => {
      return data.data.children;
  });
};

export const initialReddit = () => {
    return fetch(`https://www.reddit.com/r/popular.json`)
      .then((response) => {
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
      })
      .then((data) => {
          return data.data.children;
      });
};

