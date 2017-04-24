//	This function simply insert the new record into the table and draw the sparkline
	
	function addRow(data){
		 
		   var row = document.createElement("tr");
		   var bestBid = data.bestBid;
		   var bestAsk = data.bestAsk;
		   var adds = (bestBid + bestAsk)/2;
		   
		  
		   row.innerHTML = "<td>"+data.name+"</td>"+"<td>"+data.bestBid+"</td>"+"<td>"+data.bestAsk+"</td>"+"<td>"+data.lastChangeAsk+"</td>"+"<td>"+data.lastChangeBid+"</td>"+"<td><span class='sparkline'></span></td>";
		   var sparkline = new Sparkline(row.querySelector("span.sparkline"));	
		   sparkline.draw([parseInt(bestBid),parseInt(bestAsk),parseInt(adds)]);
		   document.getElementById("currecord").appendChild(row);
	}



	