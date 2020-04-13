function goToDB (id){
	fetch('/dbSearched/db?' + new URLSearchParams({
    dbName: id
	}), {
    method: 'GET'
  	}).then(function(response) {
  	console.log(response);
    response.json().then(data=>{
    	console.log(data);
    })
  		}).then(function(data) {
  			console.log(data);
  		});
}