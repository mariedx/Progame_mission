const PageList = (argument = "") => {
  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");
    let articles = "";

    const fetchList = (url, argument) => {
      let finalURL = url;
      if (argument) {
        finalURL = url + "?search=" + argument;
      }
      
      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          response.results.forEach((article) => {
          articles += `
            <div class="card mb-3" id="mouse-on">
              <img class="card-img-top" src="${article.background_image}" alt="Card image cap">     
              <a href = "#pagedetail/${article.id}" class="card-title">${article.name}</a>
              <div id="more-info"></div>  
            </div>`;
            
            document.querySelector(".page-list .articles").innerHTML = articles;

            const mouseOn = document.getElementById("mouse-on");
            const showInfo = document.getElementById('more-info');
            
            mouseOn.addEventListener('mouseover', () => {
              showInfo.innerHTML =
              `<div class="text-left">
                <p>&#128197;  ${article.released}</p>
                <p>&#11088;  ${article.rating} / 5</p>
                <p>&#128100;  ${article.tags[0].name}</p> 
                <p>&#128126;  ${article.genres[0].name} </p>
              </div>
              ` ;  
            }); 
            
          });
        });
    };
    fetchList("https://api.rawg.io/api/games", cleanedArgument);
  };


  const render = () => {
    pageContent.innerHTML = `
      <section class="page-list">
        <h1 class="mb-2">Welcome,</h1>
        <p class="mb-5"> The Hyper Progame is the world’s premier event for computer and video games and related products. At The Hyper Progame,
          the video game industry’s top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best,
          brightest, and most innovative in the interactive entertainment industry. For three exciting days, leading-edge companies,
          groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you
          with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure
        </p>
        <div class="container text-center mt-4">
          <div class="articles">...loading</div>
        </div>
      </section>
    `;

    preparePage();
  };

  render();
};

export { PageList };