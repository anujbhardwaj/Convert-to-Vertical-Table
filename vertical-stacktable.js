/**
* vertical-stacktable.js
* Author & copyright (c) 2016: Anuj Bhardwaj
*
* jQuery plugin for stacking horizontal table to vertical table
*
*/

$('.ab-table-responsive').each(function(){

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


	$(this).before(newTable);
	$(this).prev('table').addClass('ab-table');
	$(this).prev('table').find('tr').addClass('ab-table-row');
	$(this).prev('table').find('td').addClass('ab-table-col');
	$(this).prev('table').find('tr').first().addClass('ab-table-row-main');
	$(this).prev('table').find('td').addClass('ab-table-col');
	$(this).prev('table').find('tr').first().find('td').addClass('ab-table-col-main');
	$('.ab-table').attr('border', '1');
	$('.ab-table').attr('cellspacing', '0');
});
