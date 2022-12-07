const alumns = [
        {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]


for (let alumn of alumns) {

	let isApproved;  

	if (alumn.T1 + alumn.T2 + alumn.T3 >= 2) {
		isApproved = "aprobado";
		console.log(alumn.name + ": " + isApproved)
	}

	else {
		isApproved = "suspenso";
		console.log(alumn.name + ": " + isApproved)
	}

}


