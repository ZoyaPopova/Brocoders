function insertrows(){
      var cell,
      i,
      j,
      a=document.getElementsByTagName("tr").length,
      b=document.getElementsByTagName("td").length,
      d=b/a,
      row,
      table = document.getElementById("table");

    for (i = 0; i < 1; i++) {
      row = table.insertRow(i);

      for (j = 0; j < d; j++) {
        cell = row.insertCell(j);
}       }
    }



