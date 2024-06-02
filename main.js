const listProjectMobile = [
  {
    id: 1,
    name: "Chat App",
    desc: "A chat application with registration, login and chat features",
    repo: "https://github.com/fikarsuwardi/chat_app",
    link: "-",
    techStack: "Flutter, Firebase (Authentication, Storage, Firestore Database, Messaging)",
  },
  {
    id: 2,
    name: "Expenses App",
    desc: "Application to record every expense",
    repo: "https://github.com/fikarsuwardi/expenses_app",
    link: "-",
    techStack: "React Native, Expo, Axios, Realtime Database",
  },
  {
    id: 3,
    name: "Flash Chat",
    desc: "A chat application with registration, login and chat features",
    repo: "https://github.com/fikarsuwardi/Flash-Chat-IOS",
    link: "-",
    techStack: "Swift, Xcode, CocoaPods, Authentication, Cloud Database, MVC",
  },
];

const listProjectWeb = [
  {
    id: 1,
    name: "Beta Mart",
    desc: "A web application that show list of store with employee.",
    repo: "https://github.com/fikarsuwardi/Beta_Mart",
    link: "-",
    techStack: "Node, Express, EJS, PostgreSQL, Sequelize (monolithic server)",
  },
  {
    id: 2,
    name: "CMS Restaurant App Server",
    desc: "A web application that show list food.",
    repo: "https://github.com/fikarsuwardi/restaurant_app_server",
    link: "-",
    techStack: "SQL, Node, Express, PostgreSQL, Sequelize, Axios, jsonwebtoken, cors, dotenv, google-auth-library",
  },
  {
    id: 3,
    name: "CMS Restaurant App Client JQuery",
    desc: "A web application that show list food.",
    repo: "https://github.com/fikarsuwardi/restaurant_app_client_jquery",
    link: "-",
    techStack: "HTML, CSS, JQuery Ajax",
  },
  {
    id: 4,
    name: "CMS Restaurant App Client Vue",
    desc: "A web application that show list food.",
    repo: "https://github.com/fikarsuwardi/cms-restaurant-app-client-vue-router",
    link: "-",
    techStack: "Vue, Vue Router, Axios, Pinia",
  },
  {
    id: 5,
    name: "Movie List",
    desc: "A web application that show list of popular movie",
    repo: "https://github.com/fikarsuwardi/movie-fikar-vue",
    link: "-",
    techStack: "Vue, Pinia, Tailwind",
  },
  {
    id: 6,
    name: "Book Review",
    desc: "A web application that show list of books with review and rating feature.",
    repo: "https://github.com/fikarsuwardi/l11-book-review",
    link: "-",
    techStack: "Laravel",
  }
];

function addProjectMobile() {
  var table = document.getElementById("project-table-mobile");
  listProjectMobile.forEach(function (data, index) {
    const newRow = `<tr>
                <th colspan="4">${data.id}. ${data.name}</th>
              </tr>
              <tr>
                <td></td>
                <td>Desc</td>
                <td>:</td>
                <td>${data.desc}</td>
              </tr>
              <tr>
                <td></td>
                <td>Repo</td>
                <td>:</td>
                <td><a href="">${data.repo}</a></td>
              </tr>
              <tr>
                <td></td>
                <td>Link</td>
                <td>:</td>
                <td><a href="">${data.link}</a></td>
              </tr>
              <tr class="spacer">
                <td></td>
                <td>Tech Stack</td>
                <td>:</td>
                <td>${data.techStack}</td>
              </tr>
              `;
    table.insertAdjacentHTML("beforeend", newRow);


  });
}

addProjectMobile();

function addProjectWeb() {
  var table = document.getElementById("project-table-web");
  listProjectWeb.forEach(function (data, index) {
    const newRow = `<tr>
                <th colspan="4">${data.id}. ${data.name}</th>
              </tr>
              <tr>
                <td></td>
                <td>Desc</td>
                <td>:</td>
                <td>${data.desc}</td>
              </tr>
              <tr>
                <td></td>
                <td>Repo</td>
                <td>:</td>
                <td><a href="">${data.repo}</a></td>
              </tr>
              <tr>
                <td></td>
                <td>Link</td>
                <td>:</td>
                <td><a href="">${data.link}</a></td>
              </tr>
              <tr class="spacer">
                <td></td>
                <td>Tech Stack</td>
                <td>:</td>
                <td>${data.techStack}</td>
              </tr>
              `;
    table.insertAdjacentHTML("beforeend", newRow);


  });
}

addProjectWeb();