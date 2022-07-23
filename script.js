function compute()
{
    //method to compute interest
    var principal = document.getElementById("principal").value;
      //validation for positive 
      //if the NO. is 0 or negative NO.
      if (principal<=0) { 
        alert("Please Enter a positive number"); 
        principal.focus();
        return false;
      } 
    else { // if the number is positive then continue the calculations
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML="<br/><br/>If you deposit "+`<mark>${principal},</mark>`+"\
     <br\> at an interest rate of "+`<mark>${rate}%,</mark>`+"\
     <br\>You will receive an amount of "+`<mark>${interest},</mark>`+"\
     <br\> in the year "+`<mark>${year}</mark>`+"<br\>"
            }
        }
    //method to update rate in realtime on slider
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
        

