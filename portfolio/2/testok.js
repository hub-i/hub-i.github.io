function show(){

  var ths =[];
  var tds = [];
  var trs = [];
  var min=parseInt(document.getElementById("min1").value,10);
  var max=parseInt(document.getElementById("max1").value,10);
        if(max>20){
            max=20;
            document.getElementById('max1').value = max;
          }


  for(i=min; i<=max ; i++){
    ths.push("<th class=text-center>"  + i+"단" + "</th>");
  }

        for(i = 1; i<=9; i++){
          tds=[];
          for(j=min; j<=max;j++){
            tds.push("<td class=text-center>" + j + "&nbsp*&nbsp" + i + "&nbsp=&nbsp" + (i*j) + "</td>");
          }
          trs.push("<tr>" + tds.join("") + "</tr>");
        }

        th.innerHTML = ths.join("");
        target.innerHTML = trs.join("");

}
