var search = document.getElementById("searchRes");
var news = document.getElementById("main");

function getData() {
  console.log(search.value)

  fetch(
    `https://newsapi.org/v2/everything?q=${search.value}&from=2021-06-24&sortBy=publishedAt&apiKey=1b712f6e3cdf4c4fa227b9ea09482428`
  )
    .then((response) => response.json())
    .then((json) => setData(json));
}
function setData(data) {
  console.log(data);

  for (var i = 0; i < data.articles.length; i++) {
    let card = `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${data.articles[i].urlToImage}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${data.articles[i].title}</h5>
          <p class="card-text">${data.articles[i].description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Published at: ${data.articles[i].publishedAt}</li>
          <li class="list-group-item">Author: ${data.articles[i].author}</li>
          <li class="list-group-item">Source: ${data.articles[i].source.name}</li>
        </ul>
        
      </div>`;
    news.innerHTML += card;
  }
}
