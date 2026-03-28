const listProjects = [
  {
    id: 1,
    name: "Kasir Super",
    category: "mobile",
    images: [
      "images/project/kasir/beranda.png",
      "images/project/kasir/produk.png",
      "images/project/kasir/transaksi.png",
      "images/project/kasir/lainnya.png",
    ],
    desc: "A cashier application for businesses to process sales transactions, manage inventory, and generate sales reports efficiently.",
    repo: "https://github.com/fikarsuwardi/my_kasir_super",
    link: "https://kasirsuper-demo.vercel.app/",
    techStack: ["Flutter", "Firebase", "Bloc", "Dio"],
  },
  {
    id: 3,
    name: "Workflow Catatan Belanja",
    category: "workflow",
    images: [
      "images/project/workflow catatan belanja/workflow.png",
      "images/project/workflow catatan belanja/demo-workflow.jpg",
    ],
    desc: "An automated shopping expense tracker built with n8n. Supports receipt scanning via OpenAI vision, manual input via Telegram bot, and generates expense reports stored in Google Sheets.",
    repo: "",
    link: "",
    techStack: ["n8n", "OpenAI", "Google Sheets", "Telegram Bot"],
  },
  {
    id: 7,
    name: "Alnico Agency Partner Dashboard",
    category: "web",
    images: [
      "images/project/alnico agency/alnico1.png",
      "images/project/alnico agency/alnico2.png",
    ],
    desc: "Internal web app for managing and monitoring agency partner performance. Features a KPI dashboard with metrics like client renewal rate, satisfaction scores, and active accounts. Also includes client management, renewal tracking, and an admin panel for departments and users.",
    repo: "",
    link: "",
    techStack: ["Next.js", "Lark"],
  },
  {
    id: 6,
    name: "Carlyle Financial",
    category: "web",
    images: [
      "images/project/carlylefinancial/carly1.png",
      "images/project/carlylefinancial/carly2.png",
    ],
    desc: "A mortgage lending platform specializing in jumbo home loans in California.",
    repo: "",
    link: "https://www.carlylefinancial.com/",
    techStack: ["WordPress", "Strapi", "SEO"],
  },
  {
    id: 5,
    name: "Choque Carro",
    category: "web",
    images: [
      "images/project/choque carro/cc1.png",
      "images/project/choque carro/cc2.png",
    ],
    desc: "A legal services website connecting car accident victims in California with Spanish speaking lawyers.",
    repo: "",
    link: "https://choquecarro.com/",
    techStack: ["WordPress", "Strapi"],
  },
  {
    id: 4,
    name: "Corebridge Solutions",
    category: "web",
    images: [
      "images/project/corebridge solutions/corebridge1.png",
      "images/project/corebridge solutions/corebridge2.png",
    ],
    desc: "Company profile website for Corebridge Solutions Corporation, a software solutions company. Built with modern web technologies and deployed to production.",
    repo: "",
    link: "https://www.corebridgesolutions.com/",
    techStack: ["Next.js", "Strapi", "SEO"],
  },
  {
    id: 2,
    name: "Movie List",
    category: "web",
    images: [
      "images/project/movieList/movieFikar.jpeg",
      "images/project/movieList/detailMovie.png",
      "images/project/movieList/listActor.png",
      "images/project/movieList/detailActor.png",
    ],
    desc: "A web application that shows a list of popular movies and actor details.",
    repo: "https://github.com/fikarsuwardi/movie-fikar-vue",
    link: "https://movie-fikar-vue.web.app/",
    techStack: ["Vue", "Pinia", "Tailwind"],
  },
];

function loadProjects() {
  const container = document.getElementById("project-cards");

  listProjects.forEach((project) => {
    const col = document.createElement("div");
    col.classList.add("col-12", "col-md-6", "mb-4");

    const carouselId = `carousel-${project.id}`;

    const indicators = project.images
      .map((_, i) => `<li data-target="#${carouselId}" data-slide-to="${i}" ${i === 0 ? 'class="active"' : ''}></li>`)
      .join("");

    const slides = project.images
      .map((img, i) => `
        <div class="carousel-item ${i === 0 ? 'active' : ''}">
          <img src="${img}" alt="${project.name} screenshot ${i + 1}" class="carousel-zoomable" style="cursor:zoom-in;" />
        </div>`)
      .join("");

    const techBadges = project.techStack
      .map((t) => `<span class="project-tech-badge">${t}</span>`)
      .join("");

    col.innerHTML = `
      <div class="project-card">
        <div id="${carouselId}" class="carousel slide project-carousel" data-ride="carousel" data-interval="3000">
          <ol class="carousel-indicators">${indicators}</ol>
          <div class="carousel-inner">${slides}</div>
          <a class="carousel-control-prev" href="#${carouselId}" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#${carouselId}" role="button" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>
        <div class="project-card-body">
          <span class="project-category ${project.category}">${project.category === 'mobile' ? 'Mobile' : project.category === 'workflow' ? 'Workflow' : 'Web'}</span>
          <h5>${project.name}</h5>
          <p class="project-desc">${project.desc}</p>
          <div class="project-tech-badges">${techBadges}</div>
          <div class="project-actions">
            ${project.repo ? `<a href="${project.repo}" class="btn btn-primary" target="_blank"><i class="fab fa-github mr-1"></i>GitHub</a>` : ''}
            ${project.link ? `<a href="${project.link}" class="btn btn-outline-primary" target="_blank"><i class="fas fa-external-link-alt mr-1"></i>Website</a>` : ''}
          </div>
        </div>
      </div>
    `;
    container.appendChild(col);
  });
}

loadProjects();

var modalImages = [];
var modalIndex = 0;

function updateModal(index) {
  modalIndex = index;
  $('#modalImage').attr('src', modalImages[modalIndex]);
  $('#modalCounter').text((modalIndex + 1) + ' / ' + modalImages.length);
  $('#modalPrev').toggle(modalImages.length > 1);
  $('#modalNext').toggle(modalImages.length > 1);
}

$(document).on('click', '.carousel-zoomable', function () {
  var src = $(this).attr('src');
  var projectId = $(this).closest('.carousel').attr('id').replace('carousel-', '');
  var project = listProjects.find(function (p) { return String(p.id) === String(projectId); });
  modalImages = project ? project.images : [src];
  var idx = modalImages.indexOf(src);
  updateModal(idx >= 0 ? idx : 0);
  $('#imageModal').modal('show');
});

$('#modalPrev').on('click', function () {
  updateModal((modalIndex - 1 + modalImages.length) % modalImages.length);
});

$('#modalNext').on('click', function () {
  updateModal((modalIndex + 1) % modalImages.length);
});

$(document).on('keydown', function (e) {
  if (!$('#imageModal').hasClass('show')) return;
  if (e.key === 'ArrowLeft') updateModal((modalIndex - 1 + modalImages.length) % modalImages.length);
  if (e.key === 'ArrowRight') updateModal((modalIndex + 1) % modalImages.length);
});
