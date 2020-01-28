(async function() {
  const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=14456807edb64536b2eba522b1da35bb';
  const response = await fetch(url);
  const myJson = await response.json();
  const articles = myJson.articles;
  console.log(articles);
  articles.forEach(item => {
      var newsContainer = document.getElementById('news_container');
      newsContainer.insertAdjacentHTML('beforeend', 
      `<div class="column is-half-desktop">
        <article class="message">
          <div class="message-header">
            <p>${item.title}</p>
            <button class="delete" aria-label="delete"></button>
          </div>
          <div class="message-body">
            ${item.content}
          </div>
        </article>
      </div>`
      )
  })
})();