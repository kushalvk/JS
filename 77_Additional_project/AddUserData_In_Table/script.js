document.getElementById("btn").onclick = () => {
    let table = document.getElementById("tbl");
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");

    let rowCount = table.rows.length;
    let row = table.insertRow(rowCount);
    var cell3 = row.insertCell(0);
    cell3.innerHTML = fname.value;
    var cell3 = row.insertCell(1);
    cell3.innerHTML = lname.value;
};