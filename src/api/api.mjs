//should be used for real API fetch

export const searchReddit = (query) => {
  // Use the fetch API to make an HTTP request to the Reddit API
    return fetch(`https://www.reddit.com/search.json?q=${query}`)
      .then((response) => {
        // Check if the response is OK (status code 200)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // If OK, parse the response as JSON
        return response.json();
      })
      .then((data) => {
        // Extract and return the 'children' property from the response data
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

