function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate of interest").value;
    t = document.getElementById("time").value;
    s = document.getElementById("Result");
    result.innerHTML = "Simple interest is =" + (p*r*t/100) + "Amount after time =" + (p+p*r*t);
    
}
        
