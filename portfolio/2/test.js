var ths =[];
var tds = [];
var trs = [];

for(var i=1;i<=9;i++){
  ths.push("<th class=text-center>"  + i+"단" + "</th>");
}
      for(var i=1; i<=9; i++){
        tds=[];
        for(var j=1; j<=9;j++){
          tds.push("<td class=text-center>" + j + "&nbsp*&nbsp" + i + "&nbsp=&nbsp" + (i*j) + "</td>");
        }
        trs.push("<tr>" + tds.join("") + "</tr>");
      }

  th.innerHTML = ths.join("");
  target.innerHTML = trs.join("");
