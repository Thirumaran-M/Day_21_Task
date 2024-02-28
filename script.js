var res = fetch("https://restcountries.com/v3.1/all")
.then((data)=>data.json()).then((data1)=>bar(data1));
console.log(res);

var div = document.createElement("div");
div.className="container";

var row = document.createElement("div");
row.className="row";

function bar(text){
    console.log(text);
    for(var i = 0; i<text.length;i++){
    var col = document.createElement("div");
    col.className="col-md-4";
    col.innerHTML += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${text[i].name.common}</h5>
      <p class="card-text">${text[i].capital[0]}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;
  row.append(col);
  div.append(row);
  document.body.append(div);
}
}