// const ulListBigCards = document.querySelector(".ul_list_vacancies")
// function renderJobs_BigCards(array){

//     ulListBigCards.innerHTML = ""

//     array.forEach((Bigcard, index) => {
//         const {id, title, enterprise, location, descrition, modalities} = Bigcard
//        /*  const card = createCard(Bigcard, index); */
//         ${modalities.map((e) =>{
//                     let p = document.createElement("p")
//                     p.classList = "text3"
//                     p.innerText = e
        
//                     return p
//                 })}
//        ulListBigCards.insertAdjacentHTML("beforeend", `
//             <li class="li_bigCards">
//                 <div class="li_list_vacancies_header">
//                 <h3 class="title4">${title}</h3>
//                 <div class="div_company_and_city">
//                     <p class="text3">${enterprise}</p>
//                     <p class="text3">${location}</p>
//                 </div>
//                 </div>
//                 <p class="text2">${descrition}</p>
//                 <div class="li_list_vacancies_footer">
//                 <p class="text3 tag_vacancies">Home Office</p> 
//                 <button class="button_medium">Candidatar</button>
//                 </div>
//             </li>
//         `) 
//     });
// }
        
// renderJobs_BigCards(jobsData)