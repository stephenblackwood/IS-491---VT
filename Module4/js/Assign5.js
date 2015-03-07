function MenuSelect()

{
    if (document.getElementById("menu").value == "Display Prague")
    {
        document.getElementById("section1").style.visibility = "visible";
        document.getElementById("section2").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value == "Display Kobenhaven")
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "visible";
    }
    
    else
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
    }
}


