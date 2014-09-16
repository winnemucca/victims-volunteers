
	var victimNames=[];
	var victimAddress=[ ];
	var victimPhone = [ ];
	var volunteersNames=[];
	var volunteersAddress=[ ];
	var volunteersPhone = [ ];

	// var volunteersAndVictims= [];

// 	var victimsIdentified = prompt('Number of Victims identified?');
// 	for(var i =1; i <=victimsIdentified; i++) {
// 		victimNames.push(prompt('please enter the name of the victim'));
// 		victimAddress.push(prompt('please enter the  victim address'));
// 		victimPhone.push(prompt('Please enter the victims phone number'));
// 	}


// 	var volunteersIdentified = prompt('Number of volunteers available');
// 	for(var i =1; i <=volunteersIdentified; i++) {
// 		volunteersNames.push(prompt('please enter the volunteer name'));
// 		volunteersAddress.push(prompt('please enter the  volunteer address'));
// 		volunteersPhone.push(prompt('Please enter the volunteers phone number'));
// 	}

// 	// var volunteersIdentified = {
// 	// 	volunteersNeeded: volunteers.push(prompt('How many volunteers?'));
// 	// 	loop: for (var i =1; i<=volunteersNeeded; i++);
// 	// 	volunteersN: volunteersNames.push(prompt('Please enter volunteer name')), 
// 	// 	volunteersA: volunteersAddress.push(prompt('Please enter volunteer address')),
// 	// 	volunteersP: volunteersPhone.push(prompt('please enter a volunteer phone'))
// 	// };

// var personell = alert('number of victims ' + victimsIdentified + "\n" + ' number of volunteers ' + volunteersIdentified + "\n" + ' list of voluneers ' + volunteersNames +  "\n" +  ' list of victims ' + victimNames);
  
// });

											// bonus #1
// creating a while loop.  in this part the app will start as true.  the app will continue until the user no longer wants to enter data by using the false option;


// var more = true;
// 	while(more) {
// 		victimNames.push(prompt('Enter the victim name'));
// 		victimPhone.push(prompt('enter the victims phone #'));
// 		victimAddress.push(prompt('Enter the victim address'));
// 		more = confirm('Would you like to enter another victim');

// 	}

	
// 	var more = true;
// 	while(more) {
// 		volunteersNames.push(prompt('Enter the volunteer name'));
// 		volunteersPhone.push(prompt('enter the volunteer phone #'));
// 		volunteersAddress.push(prompt('Enter the volunteer address'));
// 		more = confirm('Would you like to enter another volunteer');

// 	}

// 	var message = '# victims :' + victimNames.length + '\n' +
// 					'# of volunteers' + volunteersNames.length +'\n';



// 	message+='victims: \n';
// 	for(var i =0; i<victimNames.length; i++) {
// 		message+= ' name: ' +victimNames[i];
// 					' phone ' + victimPhone[i];
// 					'address: ' + victimAddress[i];
// 	}


// 	message+='volunteers: \n';
// 	for(var i =0; i<volunteersNames.length; i++) {
// 		message+= ' name: ' +volunteersNames[i];
// 					' phone: ' +volunteersPhone[i];
// 					'address: ' + volunteersAddress[i];
// 	}

// 	alert(message);

// 	var victimList = null;
// 	var availableVolunteers = [];

// 	var need = prompt('enter the name of a person in need of asssistance');
// 	for(x =0; x<victimNames.length; x++) {
// 		if(victimNames[i].length === need) {
// 			victimList = i;
// 		}
// 	}
	
// 	for(var i = 0; i< volunteersAddress.length; i++) {
// 		if(volunteersAddress[i] ===victimAddress[victimList]) {
// 			availableVolunteers.push(volunteersNames[i]);
// 		}

// 	}

// 	if(availableVolunteers.length > 0) {
// 		alert('volunteers on the same street: ' + availableVolunteers.join(', '));
// 	}
// 		else {
// 			alert('no volunteers near enough to help');
// 		}



