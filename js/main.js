var update = function(data){
    console.log(data);
  }

  var getdata = function (year) {
    var url = new URL("http://127.0.0.1:5432/getdata");
    url.searchParams.append("year", year);
    fetch(url)
      // Handle success
      .then((response) => response.json()) // convert to json
      .then((json) => update(json)) //print data to console
      .catch((err) => console.log("Request Failed", err)); // Catch errors
  };
 
  
  var getfiles = function(){
    var url = new URL("http://127.0.0.1:5432/getfiles");
    log(url)
    fetch(url)
      // Handle success
      .then((response) => response.json()) // convert to json
      .then((json) => update(json)) //print data to console
      .catch((err) => console.log("Request Failed", err)); 

  }

  document.getElementById("output").innerHTML="MAIN"
  getfiles()