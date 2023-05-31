function convert()  
{
    var temperature = parseFloat(document.getElementById("inputTemp").value);
    var inputUnit = document.getElementById("inputUnit").value;
    var outputUnit = document.getElementById("outputUnit").value;
    var result;
    if (inputUnit == "celsius" && outputUnit == "fahrenheit") 
    {
        result = temperature * 9/5 + 32;
    } 
    else if (inputUnit == "fahrenheit" && outputUnit == "celsius") 
    {
        result = (temperature - 32) * 5/9;
    } 
    else 
    {
        result = temperature; 
    } 
    document.getElementById("outputTemp").value = result.toFixed(2);
}