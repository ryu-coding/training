fetch("https://google.com")
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  });
