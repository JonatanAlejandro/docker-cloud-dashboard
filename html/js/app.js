function clock(){

let date=new Date();

document.getElementById("clock")
.innerHTML=date.toLocaleString();

}


setInterval(clock,1000);



let cpu=20;


setInterval(()=>{


cpu=Math.floor(Math.random()*100);


document.getElementById("cpu")
.innerHTML=cpu+"%";



let ram=(Math.random()*8).toFixed(1);


document.getElementById("ram")
.innerHTML=ram+" GB";



let cont=Math.floor(Math.random()*10);


document.getElementById("containers")
.innerHTML=cont;



},2000);





let text=[

"docker ps",

"apache running",

"network ok",

"container started",

"system ready"

];


let i=0;


setInterval(()=>{


document.getElementById("terminal")
innerHTML+=text[i]+"<br>";

i++;


if(i>=text.length)

i=0;


},1500);


new Chart(

document.getElementById('chart'),

{

type:'line',

data:{

labels:[

"1",
"2",
"3",
"4",
"5"

],

datasets:[{

label:"CPU",

data:[20,40,30,80,50],

borderColor:"#38bdf8",

backgroundColor:"#38bdf8"

}]

}

}

);
