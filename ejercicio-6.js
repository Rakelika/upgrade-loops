const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]


    for (let index = toys.length-1; index >=0 ; index--) {
        if (toys[index].name.includes("gato")) {
            toys.splice(index,1 )
        }     
    }


    console.log(toys)