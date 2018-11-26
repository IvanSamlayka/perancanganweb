function terimainput(){
    var a = document.getElementById("nama").value;
    var b = document.getElementById("pass").value;
    var c = document.getElementById("cb").value;

    var tabel = document.getElementById("inputan");
    var row = tabel.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();

    if (!a || !b || !c) {
        alert("Data tidak boleh ada yang kosong");

    } else {
        cell1.innerHTML = a;
        cell2.innerHTML = b;
        cell3.innerHTML = c;
        alert("Login sukses !!")
        window.location.href = "indexHome.html";
    }
}
