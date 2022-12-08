const placesToTravel = [
    {id: 5, name: 'Japan'}, 
    {id: 11, name: 'Venecia'}, 
    {id: 23, name: 'Murcia'}, 
    {id: 40, name: 'Santander'}, 
    {id: 44, name: 'Filipinas'}, 
    {id: 59, name: 'Madagascar'}
]


for (let index = placesToTravel.length-1; index >=0 ; index--) {
    if (placesToTravel[index].id==40 || placesToTravel[index].id==11) {
        placesToTravel.splice(index, 1)
    }
  
}

console.log(placesToTravel)