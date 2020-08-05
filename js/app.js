var colorCode= ['6','7','8','9','A','B','C','D','E','F']

document.getElementById('control').addEventListener('click', getColorCode)
var hexCode='';
var temp='';
function getColorCode(hexCode){
if(hexCode.length==6)
{
    finallyChangeColor(hexCode);
    return;
}
else{
    let getTwoChar= getRandomTwoChar();
     temp= temp+ getTwoChar;
     getTwoChar='';
    getColorCode(temp);
}
}

function getRandomTwoChar(){
    let randomNumber =Math.random();
    randomNumber*=10;
    randomNumber= Math.floor(randomNumber);
    randomNumber= randomNumber + colorCode[randomNumber]
    return randomNumber;
}
function finallyChangeColor(finalHexColor){
    let color ="#"+finalHexColor;
    document.getElementById('mybody').style.background= color;
    document.getElementById('hexCode').innerText= color;
    hexCode='';
    temp='';
}