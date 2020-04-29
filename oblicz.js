function oblicz()
{
    let ilosc = document.getElementById("ilosc").value;
    let checkbox = document.getElementById('checkbox').checked

    if (ilosc == "")
    {
    document.getElementById("wynik").innerHTML = 
    '<span style="color:red; background-color: yellow;">podaj liczbę gości </span>' ;
    }
    else if (checkbox == false)
    {
    document.getElementById("wynik").innerHTML = "Koszt Twojego wesela to  "+(ilosc * 100)+" złotych" ;
    }
    else
    {
    document.getElementById("wynik").innerHTML = "Koszt Twojego wesela to  "+(ilosc * 100 * 1.3)+" złotych" ;
    }
}