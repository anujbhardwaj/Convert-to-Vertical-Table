/**
* vertical-stacktable.js
* Author & copyright (c) 2016: Anuj Bhardwaj
*
* jQuery plugin for stacking horizontal table to vertical table
*
*/

$('.table-responsive').each(function(){

	var tr = $(this).find('tr');
	var td;
	var newTable = document.createElement('table');
	for(var i=0; i<tr.length; i++){
		td = tr[i].getElementsByTagName('td');
		if(i === 0){
			for(var j=0; j<td.length; j++){
				var newTr = document.createElement('tr');
				var newTd2 = document.createElement('td');
				newTd2.innerHTML = td[j].innerHTML;
				newTr.appendChild(newTd2);
				newTable.appendChild(newTr);
			}
		}
		else {
			var oldtr = newTable.getElementsByTagName('tr');
			for(var j=0; j<oldtr.length; j++){
				var newTd2 = document.createElement('td');
					newTd2.innerHTML = td[j].innerHTML;
					oldtr[j].appendChild(newTd2);
					newTable.appendChild(newTr);
			}
		}
	}


	$(this).after(newTable);
	$(this).next('table').addClass('vertical-stacktable');
	$(this).next('table').find('tr').addClass('table-row');
	$(this).next('table').find('td').addClass('table-col');
	$(this).next('table').find('tr').first().addClass('table-row-main');
	$(this).next('table').find('td').addClass('table-col');
	$(this).next('table').find('tr').first().find('td').addClass('table-col-main');
	$('.vertical-stacktable').attr('border', '1');
	$('.vertical-stacktable').attr('cellspacing', '0');
});
