function renderJobs_SmallCards(array){
    
    ulListSmallCards.innerHTML = ""
    //arraySmall = getJobsFavoritesLocation()
    array.forEach((smallCard, index) => {
        const card = credMiniCards(smallCard, index);
        ulListSmallCards.appendChild(card);
        empty(arraySmall)
    });
    localStorage.setItem("@webWoman:jobsFavorites", JSON.stringify(arraySmall))
}

function credMiniCards(smallCard){

    const {id, title, enterprise, location, descrition, modalities} = smallCard

        const tagLIm             = document.createElement("li")
        const tagDivHeaderm      = document.createElement("div")
        const tagH3Titlem        = document.createElement("h3")
        const tagImgTrash        = document.createElement("img")
        const tagDivCompanyCitym = document.createElement("div")
        const tagCompany         = document.createElement("p")
        const tagCity            = document.createElement("p")
        
        tagLIm.classList             = "li_smallCards"
        tagDivHeaderm.classList      = "header_mini_card"
        tagH3Titlem.classList        = "title5"
        tagImgTrash.classList        = "trash"
        tagDivCompanyCitym.classList = "div_company_and_city"

        tagH3Titlem.innerText = title
        tagImgTrash.src = "../../assets/img/trash.svg"
        tagCompany.innerText  = enterprise
        tagCity.innerText     = location

        tagImgTrash.addEventListener("click", ()=>{
            let buttonBigCard = document.getElementById(id)
            buttonBigCard.innerText = "Candidatar"
            remove(id)
        })

        tagLIm.append(tagDivHeaderm, tagDivCompanyCitym)
        tagDivHeaderm.append(tagH3Titlem, tagImgTrash)
        tagDivCompanyCitym.append(tagCompany, tagCity)

        return tagLIm
}

/* function button(arrayData, arraySmall){
    arrayData.
    if( == )
} */
//renderJobs_SmallCards(arraySmall)