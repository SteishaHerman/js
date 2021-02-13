var weather =
{ 
"France" : 5,
"Spain" : 8,
"Belarus" : -11,
"USA" : -6,
"Switzerland" :-2
};
var Fran = weather["France" ];
var Sp = weather["Spain" ];
var Bel = weather["Belarus" ];
var U = weather["USA" ];
var Swit = weather["Switzerland" ];
var srednee = (Fran+Sp+Bel+U+Swit)/5;
document.write('среднее значение среди стран ',srednee )
