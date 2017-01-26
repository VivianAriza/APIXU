$(document).ready(function(){
    $("#go").click(function(){
        
        var inputVal =$("#search").val();
       
        var apiUrl="https://api.apixu.com/v1/current.json?key=48664efaae034090bc9131838171201&q="+inputVal;
     $.getJSON(apiUrl,function(response){
         var temperature= response.current.temp_f
         var windspeed=response.current.wind_mph
         var humidity=response.current.humidity
        
         $("#search-results").append(temperature+"<br>"+ windspeed+"<br>"+humidity);
     })   
        
    })
    }); 
