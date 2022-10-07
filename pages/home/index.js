/* 
Utilizar método map()
Utilizar método filter()
Utilizar método find()
Utilizar spread operador
Persistir dados no Localstorage 

renderizar - 
renderizar os cards de jobs - ok
renderizar os mini cards - ok
evento de botão - 
    - inserir uma vaga no carrinho - ok
    - transformar o texto do bigcard - em REMOVER VAGA - ok 
    (falta fazer ele voltar a ficar como CADIDATAR qndo retiro o item do carrinho)
    - botão remover vaga no próprio minicard 
Persistir os dados no Localstorage - dados carrinho
*/

function renderJobs_BigCards(array){
    const ulListBigCards = document.querySelector(".ul_list_vacancies")

    ulListBigCards.innerHTML = ""

    array.forEach((Bigcard, index) => {
        const card = createCard(Bigcard, index);
        ulListBigCards.appendChild(card);
    });
}

function createCard(Bigcard){

    const {id, title, enterprise, location, descrition, modalities} = Bigcard
    
    const tagLi = document.createElement("li")
    const tagDivLiHeader = document.createElement("div")
    const tagH3Title = document.createElement("h3")
    const tagDivCompanyCity = document.createElement("div")
    const tagPCompany = document.createElement("p")
    const tagPCity = document.createElement("p")
    const tagPDesciption = document.createElement("p")
    const tagDivLiFooter = document.createElement("div")
    const tagTag = document.createElement("p")
    const tagButton = document.createElement("button")
    
    tagLi.classList = "li_bigCards"
    tagDivLiHeader.classList = "li_list_vacancies_header"
    tagH3Title.classList = "title4"
    tagDivCompanyCity.classList = "div_company_and_city"
    tagPCompany.classList = "text3"
    tagPCity.classList = "text3"
    tagPDesciption.classList = "text2"
    tagDivLiFooter.classList = "li_list_vacancies_footer"
    tagTag.classList = "text3", "tag_vacancies"
    tagButton.classList = "button_medium"
    tagButton.id = id

    tagH3Title.innerText = title
    tagPCompany.innerText = enterprise
    tagPCity.innerText = location
    tagPDesciption.innerText = descrition
    modalities.forEach((modality)=>{
        tagTag.innerText = modality
    })
    tagButton.innerText = "Candidatar"

    tagButton.addEventListener("click", ()=>{

        tagButton.innerText = "Remover candidatura"
        renderJobs_SmallCards(id, Bigcard)
    })
    
    tagLi.append(tagDivLiHeader, tagPDesciption, tagDivLiFooter)
    tagDivLiHeader.append(tagH3Title, tagDivCompanyCity)
    tagDivCompanyCity.append(tagPCompany, tagPCity)
    tagDivLiFooter.append(tagTag, tagButton)
    
    return tagLi
}

renderJobs_BigCards(jobsData)

function renderJobs_SmallCards(idCardClicked, Bigcard){

    const {id, title, enterprise, location, descrition, modalities} = Bigcard
    const ul_MiniCard = document.querySelector(".ul_card_list").insertAdjacentHTML("beforeend", `
        <li id="${id}" class="li_smallCards">
        <div class="header_mini_card">
        <h3 class="title5">${title}</h3>
        <img class="trash" src="../../assets/img/trash.svg" alt="">
        </div>
        <div class="div_company_and_city">
        <p class="text3">${enterprise}</p>
        <p class="text3">${location}</p>
        </div>
    </li>
        `)

    const buttonBigCard = document.getElementById(idCardClicked)
    const buttonSmallCard = document.querySelector(".trash")
    buttonBigCard.addEventListener("click", ()=>{
        ul_MiniCard.remove(Bigcard)
        renderJobs_SmallCards(jobsData)
    })
    buttonSmallCard.addEventListener("click", ()=>{
        ul_MiniCard.remove(Bigcard)
        renderJobs_SmallCards(jobsData)
    })
}


