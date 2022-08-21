let Movie = document.getElementById("movie");
let Searchmovie = document.getElementById("Searchmovie");
let tagline = document.getElementById("tagline");

let page = parseInt(document.getElementById("pages").innerHTML);
let pages = document.getElementById("pages");
let pagess = document.getElementById("pagess");
let search_key = document.getElementById("search").value;

let buttons = document.getElementById("but");
let button = document.getElementById("buttons");

let next = document.getElementById("next");
let previous = document.getElementById("previous");
let berikutnya = document.getElementById("berikutnya");
let sebelumnya = document.getElementById("sebelumnya");

fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e6a61ee3362c62483dd7dd39593fbf6b&sort_by=popularity.desc&page=${page}`)
  .then((response) => response.json())
  .then((data) =>
    data.results.forEach((movie) => {
      Movie.innerHTML += `
    <div class="col-lg-3 col-sm-4 mb-3">
      <div class="Populer-item">
        <a class="Populer-link" data-bs-toggle="modal" href=#sayur-${movie.id}>
        <div class="Populer-hover">
            <div class="Populer-hover-content"><i class="fas fa-plus fa-3x"></i></div>
          </div>
          <img class="img-fluid" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt=${movie.title} />
          </a>
           <div class="Populer-caption">
          <div class="Populer-caption-heading">${movie.title}</div>
          <div class="Populer-caption-subheading text-muted">${movie.release_date}</div>
          <div class="Populer-caption-subheading">Rating <b>${movie.vote_average}/10</b></div>
        </div>
      </div>
    </div>
    `;

      pages.innerHTML = `${page}`;
    })
  );
if (page === 1) {
  document.getElementById("previous").disabled = true;
}
let searchButton = document.getElementById("searchbutton");
// console.log(searchButton);

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  let search_key = document.getElementById("search").value;
  if (search_key === "" || search_key === null) {
    tagline.innerHTML = "";
    Movie.innerHTML = ` 
    <h1 style="text-align : center; color: red"> Enter the title of the movie you are looking for!!! </h1>
    `;
    pages.innerHTML = "1";
    document.getElementById("sebelumnya").disabled = true;
    document.getElementById("next").disabled = true;
    document.getElementById("previous").disabled = true;
    document.getElementById("berikutnya").disabled = true;
  } else {
    hapus();
    ubah();
    page = 1;

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=e6a61ee3362c62483dd7dd39593fbf6b&query=${search_key}&${page}`)
      .then((response) => response.json())
      .then((data) =>
        data.results.forEach((movie) => {
          tagline.innerHTML = `${search_key}`;
          Movie.innerHTML += `
      <div class="col-lg-3 col-sm-4 mb-3">
        <div class="Populer-item">
          <a class="Populer-link" data-bs-toggle="modal" href=#sayur-${movie.id}>
          <div class="Populer-hover">
              <div class="Populer-hover-content"><i class="fas fa-plus fa-3x"></i></div>
            </div>
            <img class="img-fluid" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt=${movie.title} />
            </a>
             <div class="Populer-caption">
            <div class="Populer-caption-heading">${movie.title}</div>
            <div class="Populer-caption-subheading text-muted">${movie.release_date}</div>
            <div class="Populer-caption-subheading">Rating <b>${movie.vote_average}/10</b></div>
          </div>
        </div>
      </div>
      `;
          if (page === 1) {
            document.getElementById("sebelumnya").disabled = true;
          } else {
            document.getElementById("sebelumnya").disabled = false;
          }
          pagess.innerHTML = `${page}`;
        })
      );
  }
});

next.addEventListener("click", (e) => {
  e.preventDefault();

  hapus();
  page += 1;

  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e6a61ee3362c62483dd7dd39593fbf6b&sort_by=popularity.desc&page=${page}`)
    .then((response) => response.json())
    .then((data) =>
      data.results.forEach((movie) => {
        Movie.innerHTML += `
    <div class="col-lg-3 col-sm-4 mb-3">
      <div class="Populer-item">
        <a class="Populer-link" data-bs-toggle="modal" href=#sayur-${movie.id}>
        <div class="Populer-hover">
            <div class="Populer-hover-content"><i class="fas fa-plus fa-3x"></i></div>
          </div>
          <img class="img-fluid" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt=${movie.title} />
          </a>
           <div class="Populer-caption">
          <div class="Populer-caption-heading">${movie.title}</div>
          <div class="Populer-caption-subheading text-muted">${movie.release_date}</div>
          <div class="Populer-caption-subheading">Rating <b>${movie.vote_average}/10</b></div>
        </div>
      </div>
    </div>
    `;
        if (page === 1) {
          document.getElementById("previous").disabled = true;
        } else {
          document.getElementById("previous").disabled = false;
        }
        pages.innerHTML = `${page}`;
      })
    );
});

berikutnya.addEventListener("click", (e) => {
  e.preventDefault();
  hapus();
  ubah();
  page += 1;
  let search_key = document.getElementById("search").value;

  fetch(`https://api.themoviedb.org/3/search/movie?api_key=e6a61ee3362c62483dd7dd39593fbf6b&query=${search_key}&page=${page}`)
    .then((response) => response.json())
    .then((data) =>
      data.results.forEach((movie) => {
        Movie.innerHTML += `
    <div class="col-lg-3 col-sm-4 mb-3">
      <div class="Populer-item">
        <a class="Populer-link" data-bs-toggle="modal" href=#sayur-${movie.id}>
        <div class="Populer-hover">
            <div class="Populer-hover-content"><i class="fas fa-plus fa-3x"></i></div>
          </div>
          <img class="img-fluid" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt=${movie.title} />
          </a>
           <div class="Populer-caption">
          <div class="Populer-caption-heading">${movie.title}</div>
          <div class="Populer-caption-subheading text-muted">${movie.release_date}</div>
          <div class="Populer-caption-subheading">Rating <b>${movie.vote_average}/10</b></div>
        </div>
      </div>
    </div>
    `;
        if (page === 1) {
          document.getElementById("sebelumnya").disabled = true;
        } else {
          document.getElementById("sebelumnya").disabled = false;
        }
        pagess.innerHTML = `${page}`;
      })
    );
});
previous.addEventListener("click", (e) => {
  e.preventDefault();
  hapus();
  page -= 1;

  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e6a61ee3362c62483dd7dd39593fbf6b&sort_by=popularity.desc&page=${page}`)
    .then((response) => response.json())
    .then((data) =>
      data.results.forEach((movie) => {
        Movie.innerHTML += `
    <div class="col-lg-3 col-sm-4 mb-3">
      <div class="Populer-item">
        <a class="Populer-link" data-bs-toggle="modal" href=#sayur-${movie.id}>
        <div class="Populer-hover">
            <div class="Populer-hover-content"><i class="fas fa-plus fa-3x"></i></div>
          </div>
          <img class="img-fluid" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt=${movie.title} />
          </a>
           <div class="Populer-caption">
          <div class="Populer-caption-heading">${movie.title}</div>
          <div class="Populer-caption-subheading text-muted">${movie.release_date}</div>
          <div class="Populer-caption-subheading">Rating <b>${movie.vote_average}/10</b></div>
        </div>
      </div>
    </div>
    `;
        if (page === 1) {
          document.getElementById("previous").disabled = true;
        } else {
          document.getElementById("previous").disabled = false;
        }
        pages.innerHTML = `${page}`;
      })
    );
});

sebelumnya.addEventListener("click", (e) => {
  e.preventDefault();
  hapus();
  ubah();
  page -= 1;
  let search_key = document.getElementById("search").value;

  fetch(`https://api.themoviedb.org/3/search/movie?api_key=e6a61ee3362c62483dd7dd39593fbf6b&query=${search_key}&page=${page}`)
    .then((response) => response.json())
    .then((data) =>
      data.results.forEach((movie) => {
        Movie.innerHTML += `
    <div class="col-lg-3 col-sm-4 mb-3">
      <div class="Populer-item">
        <a class="Populer-link" data-bs-toggle="modal" href=#sayur-${movie.id}>
        <div class="Populer-hover">
            <div class="Populer-hover-content"><i class="fas fa-plus fa-3x"></i></div>
          </div>
          <img class="img-fluid" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt=${movie.title} />
          </a>
           <div class="Populer-caption">
          <div class="Populer-caption-heading">${movie.title}</div>
          <div class="Populer-caption-subheading text-muted">${movie.release_date}</div>
          <div class="Populer-caption-subheading">Rating <b>${movie.vote_average}/10</b></div>
        </div>
      </div>
    </div>
    `;
        if (page === 1) {
          document.getElementById("sebelumnya").disabled = true;
        } else {
          document.getElementById("sebelumnya").disabled = false;
        }
        pagess.innerHTML = `${page}`;
      })
    );
});

function hapus() {
  Movie.innerHTML = "";
  tagline.innerHTML = "";
}
function ubah() {
  Movie.innerHTML = "";
  buttons.remove();
  button.classList.remove("hide");
}
