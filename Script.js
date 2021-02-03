function rgb(r, g, b) {
    return "rgb(" + r + "," + g + "," + b + ")";
}
function changeColor()
{
    var valr = document.getElementById("red").value;
    var valg = document.getElementById("green").value;
    var valb = document.getElementById("blue").value;
    //console.log(valr + valg + valb);
    document.getElementById("billu").style.backgroundColor = rgb(valr, valg, valb);
    if (Number(valb) < 210 && Number(valg) < 120 && Number(valr) < 150 )
    {
        document.getElementById("clr").style.color = "white";
    }
    else{
        document.getElementById("clr").style.color = "black";
    }
}

function onSlide(id)
{
    var val = document.getElementById(id).value;
    //console.log(val);
    document.getElementById(id+"-val").innerHTML = val;
    changeColor();
}

function print(str)
{
    console.log(str);
}

function play(id){
    
    var dir = [-1, 1][Math.floor(Math.random() * 10) % 2] ;
    //print(dir);
    var k = + 50 +  Math.floor(Math.random() * 1000) % 200;
    //print(k);
    i = 0;
    var del = 10;
    function dec(){
        
        i += 1;
        var m = Number(document.getElementById(id).value) ;
        m += dir;
        if (m>255) { m = 255 ; dir = -1;}
        if (m<0) { m = 0; dir = 1;}
        //print(m);
        document.getElementById(id).value = m;
        changeColor();
        onSlide(id);
        //print(id + " " + m + " " + dir);
        if (k != i && isRun) {
            setTimeout(dec, del+ 10);
        }
    }
    dec();
    if (isRun) setTimeout(play, del*k , id);
}


var isRun = false;
var inr;
function auto()
{
    if (!isRun)
    {
        document.getElementById('bttn').innerHTML = "Stop";
        isRun = true;
        setTimeout(play, 10, "red");
        setTimeout(play, 20, "green");
        setTimeout(play, 30, "blue");
    }
    else
    {
        document.getElementById('bttn').innerHTML = "Automate";
        isRun = false;
    }

}