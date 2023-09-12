window.addEventListener("load", () => {});
function getJobsFavoritesLocation() {
  return JSON.parse(localStorage.getItem("@webWoman:jobsFavorites")) || [];
}

let arraySmall = getJobsFavoritesLocation();

const ulListBigCards = document.querySelector(".ul_list_vacancies");
const ulListSmallCards = document.querySelector(".ul_card_list");

function renderJobs_BigCards(array) {
  ulListBigCards.innerHTML = "";

  array.forEach((Bigcard, index) => {
    const card = createCard(Bigcard, index);
    ulListBigCards.appendChild(card);
  });
}

function createCard(Bigcard) {
  const { id, title, enterprise, location, descrition, modalities } = Bigcard;

  const tagLi = document.createElement("li");
  const tagDivLiHeader = document.createElement("div");
  const tagH3Title = document.createElement("h3");
  const tagDivCompanyCity = document.createElement("div");
  const tagPCompany = document.createElement("p");
  const tagPCity = document.createElement("p");
  const tagPDesciption = document.createElement("p");
  const tagDivLiFooter = document.createElement("div");
  const tagDivModalities = document.createElement("div");
  const tagTag = document.createElement("p");
  const tagTag2 = document.createElement("p");
  const tagButton = document.createElement("button");

  tagLi.classList = "li_bigCards";
  tagDivLiHeader.classList = "li_list_vacancies_header";
  tagH3Title.classList = "title4";
  tagDivCompanyCity.classList = "div_company_and_city";
  tagPCompany.classList = "text3";
  tagPCity.classList = "text3";
  tagPDesciption.classList = "text2";
  tagDivLiFooter.classList = "li_list_vacancies_footer";
  tagDivModalities.classList.add("modalities");
  tagTag.classList.add("text3", "tag_vacancies");
  tagTag2.classList.add("text3", "tag_vacancies");
  tagButton.classList.add("button_medium");
  tagButton.id = id;

  tagH3Title.innerText = title;
  tagPCompany.innerText = enterprise;
  tagPCity.innerText = location;
  tagPDesciption.innerText = descrition;
  tagTag.innerText = modalities[0];
  tagTag2.innerText = modalities[1];
  tagButton.innerText = "Candidatar";

  tagButton.addEventListener("click", () => {
    let verSeProdutoExiste = arraySmall.find((element) => element.id == id);
    if (verSeProdutoExiste) {
      tagButton.innerText = "Candidatar";
      remove(id);
    } else {
      tagButton.innerText = "Remover candidatura";
      arraySmall.push(Bigcard);

      renderJobs_SmallCards(arraySmall);
    }
  });

  tagLi.append(tagDivLiHeader, tagPDesciption, tagDivLiFooter);
  tagDivLiHeader.append(tagH3Title, tagDivCompanyCity);
  tagDivCompanyCity.append(tagPCompany, tagPCity);
  tagDivLiFooter.append(tagDivModalities, tagButton);
  tagDivModalities.append(tagTag, tagTag2);

  return tagLi;
}
renderJobs_BigCards(jobsData);

function empty(array) {
  let emptyPlace = document.querySelector(".empty_place");

  if (array.length) {
    emptyPlace.classList.add("hidden");
  } else {
    emptyPlace.classList.remove("hidden");
  }
}

empty(arraySmall);

if (JSON.parse(localStorage.getItem("@webWoman:jobsFavorites"))) {
  renderJobs_SmallCards(arraySmall);
  button();
}

function button() {
  const jobIds = new Set(arraySmall.map((job) => job.id));

  jobsData.forEach((j) => {
    if (jobIds.has(j.id)) {
      const buttons = document.querySelectorAll(`.button_medium[id="${j.id}"]`);
      buttons.forEach((b) => {
        b.innerText = "Remover candidatura";
      });
    }
  });
}
