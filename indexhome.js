function validasi() {
    var a = document.getElementById("FN").value;
    var b = document.getElementById("LN").value;
    var c = document.getElementById("NIM").value;
    var d = document.getElementById("prodi").value
    var e = document.getElementById("email").value;
    var f = document.getElementById("TG").value;
    var g = document.getElementById("JK").value;
    var h = document.getElementById("PW").value;
    var i = document.getElementById("telp").value;
    var j = document.getElementById("cek").value;

    var tabel = document.getElementById("inputan");
    var row = tabel.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();
    var cell5 = row.insertCell();
    var cell6 = row.insertCell();
    var cell7 = row.insertCell();
    var cell8 = row.insertCell();
    var cell9 = row.insertCell();
    var cell10 = row.insertCell();

  if (  a=='' && b=='' && c=='' && d=='' && e=='' && f=='' && g=='' && h=='' && i=='' && j=='') {
    alert('Anda harus mengisi data dengan lengkap !');
  }else{
    cell1.innerHTML = a;
    cell2.innerHTML = b;
    cell3.innerHTML = c;
    cell4.innerHTML = d;
    cell5.innerHTML = e;
    cell6.innerHTML = f;
    cell7.innerHTML = g;
    cell8.innerHTML = h;
    cell9.innerHTML = i;
    cell10.innerHTML = j;
    confirm ("Apakah yakin dengan data ini?");
    window.location.href = "indexHome.html";
  }
}
