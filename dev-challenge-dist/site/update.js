/* 
.
.
	This function get the data from websocket and checks that the new data is already available or not in the table
If the data is avaible then it update the value in the table and displayed the sorted table
If not availble then simple call the addRow() which is implemented in add.js 
.
.	*/
 
function updateData(newData) {
     var term = newData.name;                    
  var column = 0;                             
  var pattern = new RegExp(term, 'g');      
  var table = document.getElementById('dataTable');
  var tr = table.getElementsByTagName('tr');
  var isAvailable;
  if(tr.length > 1){
  for(var i = 0; i < tr.length; i++){
	  
    var td = tr[i].getElementsByTagName('td');

    for(var j = 0; j < td.length; j++){
      if(j == column && td[j].innerHTML == term){  
	  
        td[j].parentElement.children[1].innerHTML = newData.bestBid;
        td[j].parentElement.children[2].innerHTML = newData.bestAsk;
        td[j].parentElement.children[3].innerHTML = newData.lastChangeAsk;
        td[j].parentElement.children[4].innerHTML = newData.lastChangeBid; 
		 td[j].parentElement.children[5].innerHTML
		
        var updatedRow = td[j].parentElement; 
        var deleteRow = td[j].parentNode; 
		
		var adds = (newData.bestBid + newData.bestAsk)/2;
        var sparkline = new Sparkline(updatedRow.querySelector("span.sparkline"));	
        sparkline.draw([parseInt(newData.bestBid),parseInt(newData.bestAsk),parseInt(adds)]); 
	   
        deleteRow.parentNode.removeChild(deleteRow); 
        table.insertBefore( updatedRow, table.firstChild );
		  isAvailable= true;
		  break;
      }else{
		  isAvailable= false; 
	  }
    }
     if(isAvailable){
          break;
    }
     	 
      	
  }
  }else{
	 addRow(newData); 
  }
  
  if(isAvailable == false){
          addRow(newData); 		 
		  isAvailable= true; 
 }
  
  
 
}
 



	