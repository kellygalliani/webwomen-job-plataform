function remove(idSmallCard){

    let remove = arraySmall.find((element)=>
        element.id == idSmallCard 
    )
    
    if(remove){
        let index = arraySmall.indexOf(remove)
        arraySmall.splice(index, 1)
        renderJobs_SmallCards(arraySmall)
        empty(arraySmall)
    }
}
