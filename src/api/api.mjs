//should be used for real API fetch
// læs de sidste 2 svar for de seneste 2 spørgsmål her -> https://chat.openai.com/c/96668b13-7f69-40c1-a35d-af3fa86af37f

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
  
  /*searchReddit('cake%20recipes')
  .then(result => {
    console.log(result[0]);
  })
  .catch(error => {
    console.error(error);
  });*/

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

/*initialReddit()
.then(result => {
    console.log(result[0])
})
.catch(error => {
    console.error(error);
});*/