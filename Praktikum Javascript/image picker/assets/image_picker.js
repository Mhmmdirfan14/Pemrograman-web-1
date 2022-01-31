function gantiGambar() {
    var getSelect = document.getElementById('select_img').value;
    var g1 = document.getElementById('g1').value;
    var g2 = document.getElementById('g2').value;
    var g3 = document.getElementById('g3').value;
    var g4 = document.getElementById('g4').value;
    var g5 = document.getElementById('g5').value;
    var g6 = document.getElementById('g6').value;

    var imgDefault = document.getElementById('imgDefault');

    if (getSelect == g1) {
        imgDefault.src = 'assets/image/monyet.png';
        alert('Anda memilih gambar monyet');
    }
    else if (getSelect == g2) {
        imgDefault.src = 'assets/image/harimau.png';
        alert('Anda memilih gambar harimau');
    }
    else if (getSelect == g3) {
        imgDefault.src = 'assets/image/gajah.png';
        alert('Anda memilih gambar gajah');
    }
    else if (getSelect == g4) {
        imgDefault.src = 'assets/image/jerapah.png';
        alert('Anda memilih gambar jerapah');
    }
    else if (getSelect == g5) {
        imgDefault.src ='assets/image/ular.png';
        alert('Anda memilih gambar ular');
    } 
    else if (getSelect == g6) {
        imgDefault.src = 'assets/image/burung.png';
        alert('Anda memilih gambar burung');
    }
     else {
        imgDefault.src = 'assets/image/monyet.png';
        alert('Anda memilih gambar monyet');
    }
}