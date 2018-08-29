$(document).ready(function(){
    var long;
    var lat;
    var fTemp;
    var kTemp;
    var cTemp;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            long= position.coords.longitude;
            lat=position.coords.latitude;
        
    var api='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=db29ef952522ebd59e57505252f150dd';
    $.getJSON(api, function(data){
        var weatherType=data.weather[0].description;
        var kTemp= data.main.temp;
        var windSpeed=data.wind.speed;
        var city=data.name;
        var tempSwap=true;

        
       
        $("#city").html(city);
        $("#weatherType").html(weatherType);
        windSpeed=(2.237*(windSpeed)).toFixed(2);
        $("#windSpeed").html(windSpeed + " mph");
        fTemp=((kTemp)*(9/5)-459.67).toFixed(1);
        cTemp=(kTemp-273).toFixed(1);
        $("#fTemp").html(fTemp + "&#176F");
        $("#fTemp").click(function(){
            if(tempSwap===false){
            $("#fTemp").html(fTemp + "&#176F");   
                tempSwap=true;
            }
            else{
            $("#fTemp").html(cTemp + "&#176C");
            tempSwap=false; 
        }});
    });
});
    }})
