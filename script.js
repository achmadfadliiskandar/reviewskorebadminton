    // javascript begin //
    // bikin tahun otomatis dengan javascript
    const date = new Date()
    let tahun = date.getFullYear()
    document.getElementById("tahun").innerHTML = tahun
    // end bikin tahun otomatis dengan javascript

    function BackendCount(){
        var datapemain1 = document.getElementById("player1").value;
        var datapemain2 = document.getElementById("player2").value;
        if (datapemain1 == 0 || datapemain2 == 0){
            // alert('tolong di isi') kayaknya kurang kalau begini
            // mendingan begini
            document.getElementById("validasi").style.display = "block"
            document.getElementById("scoreplayer1").style.display = "none"
            document.getElementById("scoreplayer2").style.display = "none"
            document.getElementById("play1").style.display = "none"
            document.getElementById("play2").style.display = "none"
            document.getElementById("scorebabak1").style.display = "none"
            document.getElementById("scorebabak2").style.display = "none"
            document.getElementById("empty").style.display = "block"
            document.getElementById("emptyy").style.display = "block"
            document.getElementById("info").style.display = "none"
            document.getElementById("reportinfo").style.display = "none"
            document.getElementById("reportinfo1").style.display = "none"
            document.getElementById("reportinfo2").style.display = "none"
        }else if(datapemain1 == datapemain2){
            document.getElementById("validasi").style.display = "block"
            document.getElementById("validasi").innerHTML = "jangan sama dong player 1 dan 2"
            document.getElementById("scoreplayer1").style.display = "none"
            document.getElementById("scoreplayer2").style.display = "none"
            document.getElementById("play1").style.display = "none"
            document.getElementById("play2").style.display = "none"
            document.getElementById("scorebabak1").style.display = "none"
            document.getElementById("scorebabak2").style.display = "none"
            document.getElementById("empty").style.display = "block"
            document.getElementById("emptyy").style.display = "block"
            document.getElementById("info").style.display = "none"
            document.getElementById("reportinfo").style.display = "none"
            document.getElementById("reportinfo1").style.display = "none"
            document.getElementById("reportinfo2").style.display = "none"
        }else{
            let d1 = document.getElementById("dataplayer1").innerHTML = datapemain1;
            const smbl = document.getElementById("vs").style.display = "block";
            let d2 = document.getElementById("dataplayer2").innerHTML = datapemain2;
            document.getElementById("validasi").style.display = "none"
            document.getElementById("scoreplayer1").style.display = "block"
            document.getElementById("scoreplayer2").style.display = "block"
            document.getElementById("play1").style.display = "block"
            document.getElementById("play2").style.display = "block"
            document.getElementById("scorebabak1").style.display = "none"
            document.getElementById("scorebabak2").style.display = "none"
            document.getElementById("datap1").innerHTML = datapemain1
            document.getElementById("datap2").innerHTML = datapemain2
            document.getElementById("empty").style.display = "none"
            document.getElementById("emptyy").style.display = "none"
            document.getElementById("info").style.display = "block"
            document.getElementById("reportinfo").style.display = "block"
            document.getElementById("reportinfo1").style.display = "block"
            document.getElementById("reportinfo2").style.display = "block"
        }
    }
    // variabel score p1 dan p2
    var scoresp1 = 0;
    var scoresp2 = 0;
    // end variabel p1 dan p2

    // variabel score set global angka 1 dan 2 dan 0
    var scoreset1 = 0
    var scoreset2 = 0
    // end variabel score set global angka 1 dan 2 dan 0

    // fungsi button add point for p1
    function btn1() {
        var datapemain1 = document.getElementById("player1").value;
        var datapemain2 = document.getElementById("player2").value;
        ++scoresp1;
        datas = scoresp2;
        if (scoresp1 > 0){
            document.getElementById("playmin1").style.display = "block";
            document.getElementById("playmin1").innerHTML = "Kurangi Poin "+datapemain1
        }
        if(scoresp1 == 20 && datas < 20 || scoresp1 == 21 && datas == 20 || scoresp1 == 22 && datas == 21 || scoresp1 == 23 && datas == 22 || scoresp1 == 24 && datas == 23 || scoresp1 == 25 && datas == 24 || scoresp1 == 26 && datas == 25 || scoresp1 == 27 && datas == 26 || scoresp1 == 28 && datas == 27 || scoresp1 == 29 && datas == 28 || scoresp1 == 29 && datas == 29){
            alert("Game Poin " + datapemain1)
        }
        if (scoresp1 == 21 && datas <=19 || scoresp1 == 22 && datas <=20 || scoresp1 == 23 && datas <=21 || scoresp1 == 24 && datas <=22 || scoresp1 == 25 && datas <=23 || scoresp1 == 26 && datas <=24 || scoresp1 == 27 && datas <=25 || scoresp1 == 28 && datas <=26 || scoresp1 == 29 && datas <=27 || scoresp1 == 30 && datas == 28 || scoresp1 == 30 && datas == 29){
            // alert("kamu menang " + datapemain1)
            Swal.fire(
            'Selamat',
            'Kamu memenangkan set 1',
            'success'
            )
            // button 1 hilang
            document.getElementById("playmin1").style.display = "none";
            document.getElementById("play1").style.display = "none";
            // button 2 hilang juga
            document.getElementById("playmin2").style.display = "none";
            document.getElementById("play2").style.display = "none";
            // ini wajib hilang wkwk
            document.getElementById("buttonsubmit").style.display = "none";

            // ini yang muncul
            
            // untuk hasil report pertandingan babak 1
            document.getElementById("repplayer1").style.display = "block" // pemain 1
            document.getElementById("repplayer1").innerHTML = datapemain1 // nama pemain 1
            document.getElementById("repplayer2").style.display = "block" // pemain 2
            document.getElementById("repplayer2").innerHTML = datapemain2 // nama pemain 2
            // end baris 238
            
            var simpanskorep1 = scoresp1;
            var simpanskorep2 = scoresp2;
            document.getElementById("scorebabak1").style.display = "block" // angka pemain1
            document.getElementById("scorebabak1").innerHTML = simpanskorep1; // untuk menyimpan angka yang didapat oleh player 1
            document.getElementById("scorebabak2").style.display = "block" // angka pemain2
            document.getElementById("scorebabak2").innerHTML = simpanskorep2; // untuk menyimpan angka yang didapat oleh player 2
            // console.log("Babak Pertama : " + simpanskorep1 + " " + simpanskorep2)
            ++scoreset1;
            // console.log(scoreset1 + ":" + scoreset2)
            document.getElementById("num1").style.display = "block" // angka 1/0 untuk angka p1
            document.getElementById("num2").style.display = "block" // angka 1/0 untuk angka p2
            document.getElementById("num1").innerHTML = scoreset1
            document.getElementById("num2").innerHTML = scoreset2 
            // ini juga wajib muncul
            // fungsi babak kedua
            var scorebabak3 = 0
            var scorebabak4 = 0
            function SecondHalf() {
                // variabel score p1 dan p2
                document.getElementById("scoreplayer1").innerHTML = scorebabak3;
                document.getElementById("scoreplayer2").innerHTML = scorebabak4;
                document.getElementById("play3").style.display = "block"
                document.getElementById("playmin3").style.display = "none"
                document.getElementById("play4").style.display = "block"
                document.getElementById("playmin4").style.display = "none"
                // penambahan variabel nama
                document.getElementById("play3").innerHTML = "Tambah Poin : " + datapemain1
                document.getElementById("playmin3").innerHTML = "Kurangi Poin : " + datapemain1
                document.getElementById("play4").innerHTML = "Tambah Poin : " + datapemain2
                document.getElementById("playmin4").innerHTML = "Kurangi Poin : " + datapemain2
            }
            SecondHalf()
            // fungsi babak kedua
        }   
        else if (scoresp1 == 20 && datas == 20) {
            alert("kalian just ( tambahkan dua poin untuk menyelesakan)")
        }
        else{
            let skore1 = document.getElementById("scoreplayer1").innerHTML = scoresp1;
        }
    }
    // end fungsi btn add point for p1

    // fungsi btn min point for p1
    function btnk1(){
        var datapemain1 = document.getElementById("player1").value;
        var datapemain2 = document.getElementById("player2").value;
        --scoresp1;
        datas = scoresp2;
        if (scoresp1 < 1) {
            // alert("poin pas nol jangan dikurangin")
            document.getElementById("playmin1").style.display = "none";
        }
        if(scoresp1 == 20 && datas < 20 || scoresp1 == 21 && datas == 20 || scoresp1 == 22 && datas == 21 || scoresp1 == 23 && datas == 22 || scoresp1 == 24 && datas == 23 || scoresp1 == 25 && datas == 24 || scoresp1 == 26 && datas == 25 || scoresp1 == 27 && datas == 26 || scoresp1 == 28 && datas == 27 || scoresp1 == 29 && datas == 28|| scoresp1 == 29 && datas == 29){
            alert("Game Poin " + datapemain1)
        }
        if (scoresp1 == 21 && datas <=19 || scoresp1 == 22 && datas <=20 || scoresp1 == 23 && datas <=21 || scoresp1 == 24 && datas <=22 || scoresp1 == 25 && datas <=23 || scoresp1 == 26 && datas <=24 || scoresp1 == 27 && datas <=25 || scoresp1 == 28 && datas <=26 || scoresp1 == 29 && datas <=27|| scoresp1 == 30 && datas == 28 || scoresp1 == 30 && datas == 29){
            // alert("kamu menang " + datapemain1)
            Swal.fire(
            'Selamat',
            'Kamu memenangkan set 1',
            'success'
            )
            document.getElementById("playmin1").style.display = "none";
            document.getElementById("play1").style.display = "none";
            // button 2 hilang juga
            document.getElementById("playmin2").style.display = "none";
            document.getElementById("play2").style.display = "none";
            // ini wajib hilang wkwk
            document.getElementById("buttonsubmit").style.display = "none";
            // ini yang muncul
            
            // untuk hasil report pertandingan babak 1
            document.getElementById("repplayer1").style.display = "block" // pemain 1
            document.getElementById("repplayer1").innerHTML = datapemain1 // nama pemain 1
            document.getElementById("repplayer2").style.display = "block" // pemain 2
            document.getElementById("repplayer2").innerHTML = datapemain2 // nama pemain 2
            // end baris 238
            
            var simpanskorep1 = scoresp1;
            var simpanskorep2 = scoresp2;
            document.getElementById("scorebabak1").style.display = "block" // angka pemain1
            document.getElementById("scorebabak1").innerHTML = simpanskorep1; // untuk menyimpan angka yang didapat oleh player 1
            document.getElementById("scorebabak2").style.display = "block" // angka pemain2
            document.getElementById("scorebabak2").innerHTML = simpanskorep2; // untuk menyimpan angka yang didapat oleh player 2
            // console.log("Babak Pertama : " + simpanskorep1 + " " + simpanskorep2)
            ++scoreset1;
            // console.log(scoreset1 + ":" + scoreset2)
            document.getElementById("num1").style.display = "block" // angka 1/0 untuk angka p1
            document.getElementById("num2").style.display = "block" // angka 1/0 untuk angka p2
            document.getElementById("num1").innerHTML = scoreset1
            document.getElementById("num2").innerHTML = scoreset2 
            
            var scorebabak3 = 0
            var scorebabak4 = 0
            function SecondHalf() {
                // variabel score p1 dan p2
                document.getElementById("scoreplayer1").innerHTML = scorebabak3;
                document.getElementById("scoreplayer2").innerHTML = scorebabak4;
                document.getElementById("play3").style.display = "block"
                document.getElementById("playmin3").style.display = "none"
                document.getElementById("play4").style.display = "block"
                document.getElementById("playmin4").style.display = "none"
                // penambahan variabel nama
                document.getElementById("play3").innerHTML = "Tambah Poin : " + datapemain1
                // document.getElementById("playmin3").innerHTML = "Kurangi Poin : " + datapemain1
                document.getElementById("play4").innerHTML = "Tambah Poin : " + datapemain2
                // document.getElementById("playmin4").innerHTML = "Kurangi Poin : " + datapemain2
            }
            SecondHalf()
        }
        else if (scoresp1 == 20 && datas == 20) {
            alert("kalian just ( tambahkan dua poin untuk menyelesakan)")
        }
        else{
            let skore1 = document.getElementById("scoreplayer1").innerHTML = scoresp1;
        }
    }
    // end fungsi btn min point for p1

    // fungsi button add point for p2
    function btn2() {
        var datapemain1 = document.getElementById("player1").value;
        var datapemain2 = document.getElementById("player2").value;
        ++scoresp2;
        data = scoresp1;
        if (scoresp2 > 0){
            document.getElementById("playmin2").style.display = "block";
            document.getElementById("playmin2").innerHTML = "Kurangi Poin "+datapemain2
        }
        if(scoresp2 == 20 && data < 20 || scoresp2 == 21 && data == 20 || scoresp2 == 22 && data == 21 || scoresp2 == 23 && data == 22 || scoresp2 == 24 && data == 23 || scoresp2 == 25 && data == 24 || scoresp2 == 26 && data == 25 || scoresp2 == 27 && data == 26 || scoresp2 == 28 && data == 27 || scoresp2 == 29 && data == 28 || scoresp2 == 29 && data == 29){
            alert("Game Poin " + datapemain2)
        }
        if (scoresp2 == 21 && data <=19 || scoresp2 == 22 && data <=20 || scoresp2 == 23 && data <=21 || scoresp2 == 24 && data <=22 || scoresp2 == 25 && data <=23 || scoresp2 == 26 && data <=24 || scoresp2 == 27 && data <=25 || scoresp2 == 28 && data <=26 || scoresp2 == 29 && data <=27 || scoresp2 == 30 && data == 28 || scoresp2 == 30 && data == 29){
            // alert("kamu menang " + datapemain2)
            Swal.fire(
            'Selamat',
            'Kamu memenangkan set 1',
            'success'
            )
            document.getElementById("playmin2").style.display = "none";
            document.getElementById("playmin1").style.display = "none";
            document.getElementById("play1").style.display = "none";
            // button 2 hilang juga
            document.getElementById("play2").style.display = "none";
            // ini wajib hilang wkwk
            document.getElementById("buttonsubmit").style.display = "none";
            // ini yang muncul
            
            // untuk hasil report pertandingan babak 1
            document.getElementById("repplayer1").style.display = "block" // pemain 1
            document.getElementById("repplayer1").innerHTML = datapemain1 // nama pemain 1
            document.getElementById("repplayer2").style.display = "block" // pemain 2
            document.getElementById("repplayer2").innerHTML = datapemain2 // nama pemain 2
            // end baris 238
            
            var simpanskorep1 = scoresp1;
            var simpanskorep2 = scoresp2;
            document.getElementById("scorebabak1").style.display = "block" // angka pemain1
            document.getElementById("scorebabak1").innerHTML = simpanskorep1; // untuk menyimpan angka yang didapat oleh player 1
            document.getElementById("scorebabak2").style.display = "block" // angka pemain2
            document.getElementById("scorebabak2").innerHTML = simpanskorep2; // untuk menyimpan angka yang didapat oleh player 2
            // console.log("Babak Pertama : " + simpanskorep1 + " " + simpanskorep2)
            ++scoreset2;
            // console.log(scoreset1 + ":" + scoreset2)
            document.getElementById("num1").style.display = "block" // angka 1/0 untuk angka p1
            document.getElementById("num2").style.display = "block" // angka 1/0 untuk angka p2
            document.getElementById("num1").innerHTML = scoreset1
            document.getElementById("num2").innerHTML = scoreset2 

            var scorebabak3 = 0
            var scorebabak4 = 0
            function SecondHalf() {
                // variabel score p1 dan p2
                document.getElementById("scoreplayer1").innerHTML = scorebabak3;
                document.getElementById("scoreplayer2").innerHTML = scorebabak4;
                document.getElementById("play3").style.display = "block"
                document.getElementById("playmin3").style.display = "none"
                document.getElementById("play4").style.display = "block"
                document.getElementById("playmin4").style.display = "none"
                // penambahan variabel nama
                document.getElementById("play3").innerHTML = "Tambah Poin : " + datapemain1
                document.getElementById("playmin3").innerHTML = "Kurangi Poin : " + datapemain1
                document.getElementById("play4").innerHTML = "Tambah Poin : " + datapemain2
                document.getElementById("playmin4").innerHTML = "Kurangi Poin : " + datapemain2
            }
            SecondHalf()
        }
        else if (scoresp2 == 20 && data == 20) {
            alert("kalian just ( tambahkan dua poin untuk menyelesaikan)")
        }
        else{
            let skore2 = document.getElementById("scoreplayer2").innerHTML = scoresp2;
        }
    }
    // end fungsi button add point for p2

    // fungsi button min point for p2
    function btnk2() {
        var datapemain1 = document.getElementById("player1").value;
        var datapemain2 = document.getElementById("player2").value;
        --scoresp2;
        data = scoresp1;
        if (scoresp2 < 1) {
            // alert("poin pas nol jangan dikurangin")
            document.getElementById("playmin2").style.display = "none";
        }
        if(scoresp2 == 20 && data < 20 || scoresp2 == 21 && data == 20 || scoresp2 == 22 && data == 21 || scoresp2 == 23 && data == 22 || scoresp2 == 24 && data == 23 || scoresp2 == 25 && data == 24 || scoresp2 == 26 && data == 25 || scoresp2 == 27 && data == 26 || scoresp2 == 28 && data == 27 || scoresp2 == 29 && data == 28 || scoresp2 == 29 && data == 29){
            alert("Game Poin " + datapemain2)
        }
        if (scoresp2 == 21 && data <=19 || scoresp2 == 22 && data <=20 || scoresp2 == 23 && data <=21 || scoresp2 == 24 && data <=22 || scoresp2 == 25 && data <=23 || scoresp2 == 26 && data <=24 || scoresp2 == 27 && data <=25 || scoresp2 == 28 && data <=26 || scoresp2 == 29 && data <=27 || scoresp2 == 30 && data == 28 || scoresp2 == 30 && data == 29){
            // alert("kamu menang " + datapemain2)
            Swal.fire(
            'Selamat',
            'Kamu memenangkan set 1',
            'success'
            )
            document.getElementById("playmin1").style.display = "none";
            document.getElementById("play1").style.display = "none";
            // button 2 hilang juga
            document.getElementById("playmin2").style.display = "none";
            document.getElementById("play2").style.display = "none";
            // ini wajib hilang wkwk
            document.getElementById("buttonsubmit").style.display = "none";
            // ini yang muncul
            
            // untuk hasil report pertandingan babak 1
            document.getElementById("repplayer1").style.display = "block" // pemain 1
            document.getElementById("repplayer1").innerHTML = datapemain1 // nama pemain 1
            document.getElementById("repplayer2").style.display = "block" // pemain 2
            document.getElementById("repplayer2").innerHTML = datapemain2 // nama pemain 2
            // end baris 238
            
            var simpanskorep1 = scoresp1;
            var simpanskorep2 = scoresp2;
            document.getElementById("scorebabak1").style.display = "block" // angka pemain1
            document.getElementById("scorebabak1").innerHTML = simpanskorep1; // untuk menyimpan angka yang didapat oleh player 1
            document.getElementById("scorebabak2").style.display = "block" // angka pemain2
            document.getElementById("scorebabak2").innerHTML = simpanskorep2; // untuk menyimpan angka yang didapat oleh player 2
            // console.log("Babak Pertama : " + simpanskorep1 + " " + simpanskorep2)
            ++scoreset2;
            // console.log(scoreset1 + ":" + scoreset2)
            document.getElementById("num1").style.display = "block" // angka 1/0 untuk angka p1
            document.getElementById("num2").style.display = "block" // angka 1/0 untuk angka p2
            document.getElementById("num1").innerHTML = scoreset1
            document.getElementById("num2").innerHTML = scoreset2 
            
            var scorebabak3 = 0
            var scorebabak4 = 0
            function SecondHalf() {
                // variabel score p1 dan p2
                document.getElementById("scoreplayer1").innerHTML = scorebabak3;
                document.getElementById("scoreplayer2").innerHTML = scorebabak4;
                document.getElementById("play3").style.display = "block"
                document.getElementById("playmin3").style.display = "none"
                document.getElementById("play4").style.display = "block"
                document.getElementById("playmin4").style.display = "none"
                // penambahan variabel nama
                document.getElementById("play3").innerHTML = "Tambah Poin : " + datapemain1
                // document.getElementById("playmin3").innerHTML = "Kurangi Poin : " + datapemain1
                document.getElementById("play4").innerHTML = "Tambah Poin : " + datapemain2
                // document.getElementById("playmin4").innerHTML = "Kurangi Poin : " + datapemain2
            }
            SecondHalf()
        }
        else if (scoresp2 == 20 && data == 20) {
            alert("kalian just ( tambahkan dua poin untuk menyelesaikan)")
        }
        else{
            let skore2 = document.getElementById("scoreplayer2").innerHTML = scoresp2;
        }
    }
    // fungsi babak ketiga yang akan muncul setelah babak 1 selesai
    var scorebabak3 = 0;
    var scorebabak4 = 0;
    function btn3() {
        var datapemain1 = document.getElementById("player1").value;
        var datapemain2 = document.getElementById("player2").value;
        ++scorebabak3;
        datas = scorebabak4;
        if (scorebabak3 > 0){
            document.getElementById("playmin3").style.display = "block";
        }
        if(scorebabak3 == 20 && datas < 20 || scorebabak3 == 21 && datas == 20 || scorebabak3 == 22 && datas == 21 || scorebabak3 == 23 && datas == 22 || scorebabak3 == 24 && datas == 23 || scorebabak3 == 25 && datas == 24 || scorebabak3 == 26 && datas == 25 || scorebabak3 == 27 && datas == 26 || scorebabak3 == 28 && datas == 27 || scorebabak3 == 29 && datas == 28 || scorebabak3 == 29 && datas == 29){
            alert("Game Poin ")
        }
        if (scorebabak3 == 21 && datas <=19 || scorebabak3 == 22 && datas <=20 || scorebabak3 == 23 && datas <=21 || scorebabak3 == 24 && datas <=22 || scorebabak3 == 25 && datas <=23 || scorebabak3 == 26 && datas <=24 || scorebabak3 == 27 && datas <=25 || scorebabak3 == 28 && datas <=26 || scorebabak3 == 29 && datas <=27 || scorebabak3 == 30 && datas == 28 || scorebabak3 == 30 && datas == 29){
            // alert("kamu menang ")
            Swal.fire(
            'Selamat',
            'Kamu memenangkan set 2',
            'success'
            )
            // skore babak 2 pemain1
            var simpanskorep3 = scorebabak3;
            var simpanskorep4 = scorebabak4;

            // desain css
            document.getElementById("repplayerr3").style.display = "block" // pemain 1
            document.getElementById("repplayerr3").innerHTML = datapemain1 // nama pemain 1
            document.getElementById("repplayerr4").style.display = "block" // pemain 2
            document.getElementById("repplayerr4").innerHTML = datapemain2 // nama pemain 2
            // end dc

            document.getElementById("scorebabakk3").style.display = "block" // angka pemain1
            document.getElementById("scorebabakk3").innerHTML = simpanskorep3; // untuk menyimpan angka yang didapat oleh player 1
            document.getElementById("scorebabakk4").style.display = "block" // angka pemain2
            document.getElementById("scorebabakk4").innerHTML = simpanskorep4; // untuk menyimpan angka yang didapat oleh player 2
            // console.log("Babak Pertama : " + simpanskorep1 + " " + simpanskorep2)
            ++scoreset1;
            // console.log(scoreset1 + ":" + scoreset2)
            document.getElementById("num3").style.display = "block" // angka 1/0 untuk angka p1
            document.getElementById("num4").style.display = "block" // angka 1/0 untuk angka p2
            document.getElementById("num3").innerHTML = scoreset1
            document.getElementById("num4").innerHTML = scoreset2 
            if (scoreset1 == scoreset2) {
                Swal.fire({
                        title: 'Konfirmasi',
                        text: "kamu mau lanjutin game rubber nggak?",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        allowEscapeKey: false,
                        allowOutsideClick: false,
                        confirmButtonText: 'Lanjutkan',
                        }).then((result) => {
                        if (result.isConfirmed) {
                            function RubberGame() {
                            // variabel score p1 dan p2
                            document.getElementById("scoreplayer1").innerHTML = scores5;
                            document.getElementById("scoreplayer2").innerHTML = scores6;
                            document.getElementById("play3").style.display = "none";
                            document.getElementById("playmin3").style.display = "none";
                            document.getElementById("play4").style.display = "none";
                            document.getElementById("playmin4").style.display = "none";
                            document.getElementById("play5").style.display = "block"
                            document.getElementById("playmin5").style.display = "none"
                            document.getElementById("play6").style.display = "block"
                            document.getElementById("playmin6").style.display = "none"
                            // penambahan variabel nama
                            document.getElementById("play5").innerHTML = "Tambah Poin : " + datapemain1
                            document.getElementById("playmin5").innerHTML = "Kurangi Poin : " + datapemain1
                            document.getElementById("play6").innerHTML = "Tambah Poin : " + datapemain2
                            document.getElementById("playmin6").innerHTML = "Kurangi Poin : " + datapemain2
                        }
                        RubberGame()
                        }
                        else{
                            Swal.fire({
                                title:'Thank You',
                                text:'Terima Kasih Sudah Mencoba Website ini',
                                icon:'success',
                                allowEscapeKey: false,
                                allowOutsideClick: false,
                                showConfirmButton: false,
                            })
                            const greetback = setTimeout(FuncEnd,5000)
                            function FuncEnd() {
                                location.reload()
                            }
                        }
                        })
            }else{
                console.log("kamu menang")
            }
            // end scorebabak2 pemain1
        }
        else if (scorebabak3 == 20 && datas == 20) {
            alert("kalian just ( tambahkan dua poin untuk menyelesakan)")
        }
        else{
            let score3 = document.getElementById("scoreplayer1").innerHTML = scorebabak3;
        }
    }
    function btnk3(){
        var datapemain1 = document.getElementById("player1").value;
        var datapemain2 = document.getElementById("player2").value;
        --scorebabak3;
        datas = scorebabak4;
        if (scorebabak3 < 1) {
            document.getElementById("playmin3").style.display = "none";
        }
        if(scorebabak3 == 20 && datas < 20 || scorebabak3 == 21 && datas == 20 || scorebabak3 == 22 && datas == 21 || scorebabak3 == 23 && datas == 22 || scorebabak3 == 24 && datas == 23 || scorebabak3 == 25 && datas == 24 || scorebabak3 == 26 && datas == 25 || scorebabak3 == 27 && datas == 26 || scorebabak3 == 28 && datas == 27 || scorebabak3 == 29 && datas == 28 || scorebabak3 == 29 && datas == 29){
            alert("Game Poin ")
        }
        if (scorebabak3 == 21 && datas <=19 || scorebabak3 == 22 && datas <=20 || scorebabak3 == 23 && datas <=21 || scorebabak3 == 24 && datas <=22 || scorebabak3 == 25 && datas <=23 || scorebabak3 == 26 && datas <=24 || scorebabak3 == 27 && datas <=25 || scorebabak3 == 28 && datas <=26 || scorebabak3 == 29 && datas <=27 || scorebabak3 == 30 && datas == 28 || scorebabak3 == 30 && datas == 29){
            // alert("kamu menang ")
            Swal.fire(
            'Selamat',
            'Kamu memenangkan set 2',
            'success'
            )
            // skore babak 2 pemain1

            var simpanskorep3 = scorebabak3;
            var simpanskorep4 = scorebabak4;

            // desain css
            document.getElementById("repplayerr3").style.display = "block" // pemain 1
            document.getElementById("repplayerr3").innerHTML = datapemain1 // nama pemain 1
            document.getElementById("repplayerr4").style.display = "block" // pemain 2
            document.getElementById("repplayerr4").innerHTML = datapemain2 // nama pemain 2
            // end dc

            document.getElementById("scorebabakk3").style.display = "block" // angka pemain1
            document.getElementById("scorebabakk3").innerHTML = simpanskorep3; // untuk menyimpan angka yang didapat oleh player 1
            document.getElementById("scorebabakk4").style.display = "block" // angka pemain2
            document.getElementById("scorebabakk4").innerHTML = simpanskorep4; // untuk menyimpan angka yang didapat oleh player 2
            // console.log("Babak Pertama : " + simpanskorep1 + " " + simpanskorep2)
            ++scoreset1;
            // console.log(scoreset1 + ":" + scoreset2)
            document.getElementById("num3").style.display = "block" // angka 1/0 untuk angka p1
            document.getElementById("num4").style.display = "block" // angka 1/0 untuk angka p2
            document.getElementById("num3").innerHTML = scoreset1
            document.getElementById("num4").innerHTML = scoreset2 

            if (scoreset1 == scoreset2) {
                Swal.fire({
                        title: 'Konfirmasi',
                        text: "kamu mau lanjutin game rubber nggak?",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        allowEscapeKey: false,
                        allowOutsideClick: false,
                        confirmButtonText: 'Lanjutkan',
                        }).then((result) => {
                        if (result.isConfirmed) {
                            function RubberGame() {
                            // variabel score p1 dan p2
                            document.getElementById("scoreplayer1").innerHTML = scores5;
                            document.getElementById("scoreplayer2").innerHTML = scores6;
                            document.getElementById("play3").style.display = "none";
                            document.getElementById("playmin3").style.display = "none";
                            document.getElementById("play4").style.display = "none";
                            document.getElementById("playmin4").style.display = "none";
                            document.getElementById("play5").style.display = "block"
                            document.getElementById("playmin5").style.display = "none"
                            document.getElementById("play6").style.display = "block"
                            document.getElementById("playmin6").style.display = "none"
                            // penambahan variabel nama
                            document.getElementById("play5").innerHTML = "Tambah Poin : " + datapemain1
                            document.getElementById("playmin5").innerHTML = "Kurangi Poin : " + datapemain1
                            document.getElementById("play6").innerHTML = "Tambah Poin : " + datapemain2
                            document.getElementById("playmin6").innerHTML = "Kurangi Poin : " + datapemain2
                        }
                        RubberGame()
                        }
                        else{
                            Swal.fire({
                                title:'Thank You',
                                text:'Terima Kasih Sudah Mencoba Website ini',
                                icon:'success',
                                allowEscapeKey: false,
                                allowOutsideClick: false,
                                showConfirmButton: false,
                            })
                            const greetback = setTimeout(FuncEnd,5000)
                            function FuncEnd() {
                                location.reload()
                            }
                        }
                        })
            }else{
                console.log("kamu menang")
            }
            // end scorebabak2 pemain1
        }
        else if (scorebabak3 == 20 && datas == 20) {
            alert("kalian just ( tambahkan dua poin untuk menyelesakan)")
        }
        else{
            let score3 = document.getElementById("scoreplayer1").innerHTML = scorebabak3;
        }
    }
    // end fungsi babak ketiga yang akan muncul setelah babak 1 selesai

    // fungsi babak keempat yang akan muncul setelah babak 1 selesai
    function btn4() {
        var datapemain1 = document.getElementById("player1").value;
        var datapemain2 = document.getElementById("player2").value;
        ++scorebabak4;
        datas = scorebabak3;
        if (scorebabak4 > 0){
            document.getElementById("playmin4").style.display = "block";
        }
        if(scorebabak4 == 20 && datas < 20 || scorebabak4 == 21 && datas == 20 || scorebabak4 == 22 && datas == 21 || scorebabak4 == 23 && datas == 22 || scorebabak4 == 24 && datas == 23 || scorebabak4 == 25 && datas == 24 || scorebabak4 == 26 && datas == 25 || scorebabak4 == 27 && datas == 26 || scorebabak4 == 28 && datas == 27 || scorebabak4 == 29 && datas == 28 || scorebabak4 == 29 && datas == 29){
            alert("Game Poin ")
        }
        if (scorebabak4 == 21 && datas <=19 || scorebabak4 == 22 && datas <=20 || scorebabak4 == 23 && datas <=21 || scorebabak4 == 24 && datas <=22 || scorebabak4 == 25 && datas <=23 || scorebabak4 == 26 && datas <=24 || scorebabak4 == 27 && datas <=25 || scorebabak4 == 28 && datas <=26 || scorebabak4 == 29 && datas <=27 || scorebabak4 == 30 && datas == 28 || scorebabak4 == 30 && datas == 29){
            // alert("kamu menang ")
            Swal.fire(
            'Selamat',
            'Kamu memenangkan set 2',
            'success'
            )
            // skore babak 2 pemain2
            var simpanskorep3 = scorebabak3;
            var simpanskorep4 = scorebabak4;
            // desain css
            document.getElementById("repplayerr3").style.display = "block" // pemain 1
            document.getElementById("repplayerr3").innerHTML = datapemain1 // nama pemain 1
            document.getElementById("repplayerr4").style.display = "block" // pemain 2
            document.getElementById("repplayerr4").innerHTML = datapemain2 // nama pemain 2
            // end dc

            document.getElementById("scorebabakk3").style.display = "block" // angka pemain1
            document.getElementById("scorebabakk3").innerHTML = simpanskorep3; // untuk menyimpan angka yang didapat oleh player 1
            document.getElementById("scorebabakk4").style.display = "block" // angka pemain2
            document.getElementById("scorebabakk4").innerHTML = simpanskorep4; // untuk menyimpan angka yang didapat oleh player 2
            // console.log("Babak Pertama : " + simpanskorep1 + " " + simpanskorep2)
            ++scoreset2;
            // console.log(scoreset1 + ":" + scoreset2)
            document.getElementById("num3").style.display = "block" // angka 1/0 untuk angka p1
            document.getElementById("num4").style.display = "block" // angka 1/0 untuk angka p2
            document.getElementById("num3").innerHTML = scoreset1
            document.getElementById("num4").innerHTML = scoreset2 

            if (scoreset1 == scoreset2) {
                Swal.fire({
                        title: 'Konfirmasi',
                        text: "kamu mau lanjutin game rubber nggak?",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        allowEscapeKey: false,
                        allowOutsideClick: false,
                        confirmButtonText: 'Lanjutkan',
                        }).then((result) => {
                        if (result.isConfirmed) {
                            function RubberGame() {
                            // variabel score p1 dan p2
                            document.getElementById("scoreplayer1").innerHTML = scores5;
                            document.getElementById("scoreplayer2").innerHTML = scores6;
                            document.getElementById("play3").style.display = "none";
                            document.getElementById("playmin3").style.display = "none";
                            document.getElementById("play4").style.display = "none";
                            document.getElementById("playmin4").style.display = "none";
                            document.getElementById("play5").style.display = "block"
                            document.getElementById("playmin5").style.display = "none"
                            document.getElementById("play6").style.display = "block"
                            document.getElementById("playmin6").style.display = "none"
                            // penambahan variabel nama
                            document.getElementById("play5").innerHTML = "Tambah Poin : " + datapemain1
                            document.getElementById("playmin5").innerHTML = "Kurangi Poin : " + datapemain1
                            document.getElementById("play6").innerHTML = "Tambah Poin : " + datapemain2
                            document.getElementById("playmin6").innerHTML = "Kurangi Poin : " + datapemain2
                        }
                        RubberGame()
                        }
                        else{
                            Swal.fire({
                                title:'Thank You',
                                text:'Terima Kasih Sudah Mencoba Website ini',
                                icon:'success',
                                allowEscapeKey: false,
                                allowOutsideClick: false,
                                showConfirmButton: false,
                            })
                            const greetback = setTimeout(FuncEnd,5000)
                            function FuncEnd() {
                                location.reload()
                            }
                        }
                        })
            }else{
                console.log("kamu menang")
            }
            // end scorebabak2 pemain2
        }
        else if (scorebabak4 == 20 && datas == 20) {
            alert("kalian just ( tambahkan dua poin untuk menyelesakan)")
        }
        else{
            let score4 = document.getElementById("scoreplayer2").innerHTML = scorebabak4;
        }
    }
    function btnk4(){
        var datapemain1 = document.getElementById("player1").value;
        var datapemain2 = document.getElementById("player2").value;
        --scorebabak4;
        datas = scorebabak3;
        if (scorebabak4 < 1) {
            document.getElementById("playmin4").style.display = "none";
        }
        if(scorebabak4 == 20 && datas < 20 || scorebabak4 == 21 && datas == 20 || scorebabak4 == 22 && datas == 21 || scorebabak4 == 23 && datas == 22 || scorebabak4 == 24 && datas == 23 || scorebabak4 == 25 && datas == 24 || scorebabak4 == 26 && datas == 25 || scorebabak4 == 27 && datas == 26 || scorebabak4 == 28 && datas == 27 || scorebabak4 == 29 && datas == 28 || scorebabak4 == 29 && datas == 29){
            alert("Game Poin ")
        }
        if (scorebabak4 == 21 && datas <=19 || scorebabak4 == 22 && datas <=20 || scorebabak4 == 23 && datas <=21 || scorebabak4 == 24 && datas <=22 || scorebabak4 == 25 && datas <=23 || scorebabak4 == 26 && datas <=24 || scorebabak4 == 27 && datas <=25 || scorebabak4 == 28 && datas <=26 || scorebabak4 == 29 && datas <=27 || scorebabak4 == 30 && datas == 28 || scorebabak4 == 30 && datas == 29){
            // alert("kamu menang ")
            Swal.fire(
            'Selamat',
            'Kamu memenangkan set 2',
            'success'
            )
            // skore babak 2 pemain2
            var simpanskorep3 = scorebabak3;
            var simpanskorep4 = scorebabak4;
            // desain css
            document.getElementById("repplayerr3").style.display = "block" // pemain 1
            document.getElementById("repplayerr3").innerHTML = datapemain1 // nama pemain 1
            document.getElementById("repplayerr4").style.display = "block" // pemain 2
            document.getElementById("repplayerr4").innerHTML = datapemain2 // nama pemain 2
            // end dc

            document.getElementById("scorebabakk3").style.display = "block" // angka pemain1
            document.getElementById("scorebabakk3").innerHTML = simpanskorep3; // untuk menyimpan angka yang didapat oleh player 1
            document.getElementById("scorebabakk4").style.display = "block" // angka pemain2
            document.getElementById("scorebabakk4").innerHTML = simpanskorep4; // untuk menyimpan angka yang didapat oleh player 2
            // console.log("Babak Pertama : " + simpanskorep1 + " " + simpanskorep2)
            ++scoreset2;
            // console.log(scoreset1 + ":" + scoreset2)
            document.getElementById("num3").style.display = "block" // angka 1/0 untuk angka p1
            document.getElementById("num4").style.display = "block" // angka 1/0 untuk angka p2
            document.getElementById("num3").innerHTML = scoreset1
            document.getElementById("num4").innerHTML = scoreset2 
            if (scoreset1 == scoreset2) {
                Swal.fire({
                        title: 'Konfirmasi',
                        text: "kamu mau lanjutin game rubber nggak?",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        allowEscapeKey: false,
                        allowOutsideClick: false,
                        confirmButtonText: 'Lanjutkan',
                        }).then((result) => {
                        if (result.isConfirmed) {
                            function RubberGame() {
                            // variabel score p1 dan p2
                            document.getElementById("scoreplayer1").innerHTML = scores5;
                            document.getElementById("scoreplayer2").innerHTML = scores6;
                            document.getElementById("play3").style.display = "none";
                            document.getElementById("playmin3").style.display = "none";
                            document.getElementById("play4").style.display = "none";
                            document.getElementById("playmin4").style.display = "none";
                            document.getElementById("play5").style.display = "block"
                            document.getElementById("playmin5").style.display = "none"
                            document.getElementById("play6").style.display = "block"
                            document.getElementById("playmin6").style.display = "none"
                            // penambahan variabel nama
                            document.getElementById("play5").innerHTML = "Tambah Poin : " + datapemain1
                            document.getElementById("playmin5").innerHTML = "Kurangi Poin : " + datapemain1
                            document.getElementById("play6").innerHTML = "Tambah Poin : " + datapemain2
                            document.getElementById("playmin6").innerHTML = "Kurangi Poin : " + datapemain2
                        }
                        RubberGame()
                        }
                        else{
                            Swal.fire({
                                title:'Thank You',
                                text:'Terima Kasih Sudah Mencoba Website ini',
                                icon:'success',
                                allowEscapeKey: false,
                                allowOutsideClick: false,
                                showConfirmButton: false,
                            })
                            const greetback = setTimeout(FuncEnd,5000)
                            function FuncEnd() {
                                location.reload()
                            }
                        }
                        })
            }else{
                console.log("kamu menang")
            }
            // end scorebabak2 pemain2
        }
        else if (scorebabak4 == 20 && datas == 20) {
            alert("kalian just ( tambahkan dua poin untuk menyelesakan)")
        }
        else{
            let score4 = document.getElementById("scoreplayer2").innerHTML = scorebabak4;
        }
    }
    
    // note
    // fungsi ini akan berjalan ketika kondisi lanjut rubber
    // dengan kata lain pemain jika ingin melanjutkan permainan
    // ke babak terakhir maka fungsi ini akan di jalankan
    // end note

    // variabel score 5 dan 6
    var scores5 = 0
    var scores6 = 0
    // end variabel score 5 dan 6

    function btn5() {
        // alert("testing bos")
        var datapemain1 = document.getElementById("player1").value;
        var datapemain2 = document.getElementById("player2").value;
        ++scores5;
        datas = scores6;
        if (scores5 > 0){
            document.getElementById("playmin5").style.display = "block";
            document.getElementById("playmin5").innerHTML = "Kurangi Poin "+datapemain1
        }
        if(scores5 == 20 && datas < 20 || scores5 == 21 && datas == 20 || scores5 == 22 && datas == 21 || scores5 == 23 && datas == 22 || scores5 == 24 && datas == 23 || scores5 == 25 && datas == 24 || scores5 == 26 && datas == 25 || scores5 == 27 && datas == 26 || scores5 == 28 && datas == 27 || scores5 == 29 && datas == 28 || scores5 == 29 && datas == 29){
            alert("Game Poin " + datapemain1)
        }
        if (scores5 == 21 && datas <=19 || scores5 == 22 && datas <=20 || scores5 == 23 && datas <=21 || scores5 == 24 && datas <=22 || scores5 == 25 && datas <=23 || scores5 == 26 && datas <=24 || scores5 == 27 && datas <=25 || scores5 == 28 && datas <=26 || scores5 == 29 && datas <=27 || scores5 == 30 && datas == 28 || scores5 == 30 && datas == 29){
            // alert("kamu menang " + datapemain1)
            Swal.fire(
            'Selamat',
            'Kamu memenangkan set terakhir',
            'success'
            )
            // button 1 hilang
            document.getElementById("playmin1").style.display = "none";
            document.getElementById("play1").style.display = "none";
            // button 2 hilang juga
            document.getElementById("playmin2").style.display = "none";
            document.getElementById("play2").style.display = "none";
            // ini wajib hilang wkwk
            document.getElementById("buttonsubmit").style.display = "none";
            // ini yang muncul
            var simpanskorep5 = scores5;
            var simpanskorep6 = scores6;
            // untuk hasil report pertandingan babak 1
            document.getElementById("repplayerr5").style.display = "block" // pemain 1
            document.getElementById("repplayerr5").innerHTML = datapemain1 // nama pemain 1
            document.getElementById("repplayerr6").style.display = "block" // pemain 2
            document.getElementById("repplayerr6").innerHTML = datapemain2 // nama pemain 2
            // end baris 238
            document.getElementById("scorebabakk5").style.display = "block" // angka pemain1
            document.getElementById("scorebabakk5").innerHTML = simpanskorep5; // untuk menyimpan angka yang didapat oleh player 1
            document.getElementById("scorebabakk6").style.display = "block" // angka pemain2
            document.getElementById("scorebabakk6").innerHTML = simpanskorep6; // untuk menyimpan angka yang didapat oleh player 2
            // console.log("Babak Pertama : " + simpanskorep1 + " " + simpanskorep2)
            ++scoreset1;
            // console.log(scoreset1 + ":" + scoreset2)
            document.getElementById("num5").style.display = "block" // angka 1/0 untuk angka p1
            document.getElementById("num6").style.display = "block" // angka 1/0 untuk angka p2
            document.getElementById("num5").innerHTML = scoreset1
            document.getElementById("num6").innerHTML = scoreset2
            // document.getElementById("babakkedua").style.display = "block";
            // ini juga wajib muncul
            // fungsi babak kedua
        }   
        else if (scores5 == 20 && datas == 20) {
            alert("kalian just ( tambahkan dua poin untuk menyelesakan)")
        }
        else{
            let skore1 = document.getElementById("scoreplayer1").innerHTML = scores5;
        }
    }
    function btnk5() {
        var datapemain1 = document.getElementById("player1").value;
        var datapemain2 = document.getElementById("player2").value;
        --scores5;
        datas = scores6;
        if (scores5 < 1) {
            // alert("poin pas nol jangan dikurangin")
            document.getElementById("playmin5").style.display = "none";
        }
        if(scores5 == 20 && datas < 20 || scores5 == 21 && datas == 20 || scores5 == 22 && datas == 21 || scores5 == 23 && datas == 22 || scores5 == 24 && datas == 23 || scores5 == 25 && datas == 24 || scores5 == 26 && datas == 25 || scores5 == 27 && datas == 26 || scores5 == 28 && datas == 27 || scores5 == 29 && datas == 28|| scores5 == 29 && datas == 29){
            alert("Game Poin " + datapemain1)
        }
        if (scores5 == 21 && datas <=19 || scores5 == 22 && datas <=20 || scores5 == 23 && datas <=21 || scores5 == 24 && datas <=22 || scores5 == 25 && datas <=23 || scores5 == 26 && datas <=24 || scores5 == 27 && datas <=25 || scores5 == 28 && datas <=26 || scores5 == 29 && datas <=27|| scores5 == 30 && datas == 28 || scores5 == 30 && datas == 29){
            // alert("kamu menang " + datapemain1)
            Swal.fire(
            'Selamat',
            'Kamu memenangkan set terakhir',
            'success'
            )
            document.getElementById("playmin1").style.display = "none";
            document.getElementById("play1").style.display = "none";
            // button 2 hilang juga
            document.getElementById("playmin2").style.display = "none";
            document.getElementById("play2").style.display = "none";
            // ini wajib hilang wkwk
            document.getElementById("buttonsubmit").style.display = "none";
            // ini yang muncul
            // ini yang muncul
            var simpanskorep5 = scores5;
            var simpanskorep6 = scores6;
            // untuk hasil report pertandingan babak 1
            document.getElementById("repplayerr5").style.display = "block" // pemain 1
            document.getElementById("repplayerr5").innerHTML = datapemain1 // nama pemain 1
            document.getElementById("repplayerr6").style.display = "block" // pemain 2
            document.getElementById("repplayerr6").innerHTML = datapemain2 // nama pemain 2
            // end baris 238
            document.getElementById("scorebabakk5").style.display = "block" // angka pemain1
            document.getElementById("scorebabakk5").innerHTML = simpanskorep5; // untuk menyimpan angka yang didapat oleh player 1
            document.getElementById("scorebabakk6").style.display = "block" // angka pemain2
            document.getElementById("scorebabakk6").innerHTML = simpanskorep6; // untuk menyimpan angka yang didapat oleh player 2
            // console.log("Babak Pertama : " + simpanskorep1 + " " + simpanskorep2)
            ++scoreset1;
            // console.log(scoreset1 + ":" + scoreset2)
            document.getElementById("num5").style.display = "block" // angka 1/0 untuk angka p1
            document.getElementById("num6").style.display = "block" // angka 1/0 untuk angka p2
            document.getElementById("num5").innerHTML = scoreset1
            document.getElementById("num6").innerHTML = scoreset2
        }
        else if (scores5 == 20 && datas == 20) {
            alert("kalian just ( tambahkan dua poin untuk menyelesakan)")
        }
        else{
            let skore1 = document.getElementById("scoreplayer1").innerHTML = scores5;
        }
    }
    function btn6() {
        var datapemain1 = document.getElementById("player1").value;
        var datapemain2 = document.getElementById("player2").value;
        // alert("testing bosss")
        ++scores6;
        data = scores5;
        if (scores6 > 0){
            document.getElementById("playmin6").style.display = "block";
            document.getElementById("playmin6").innerHTML = "Kurangi Poin "+datapemain2
        }
        if(scores6 == 20 && data < 20 || scores6 == 21 && data == 20 || scores6 == 22 && data == 21 || scores6 == 23 && data == 22 || scores6 == 24 && data == 23 || scores6 == 25 && data == 24 || scores6 == 26 && data == 25 || scores6 == 27 && data == 26 || scores6 == 28 && data == 27 || scores6 == 29 && data == 28 || scores6 == 29 && data == 29){
            alert("Game Poin " + datapemain2)
        }
        if (scores6 == 21 && data <=19 || scores6 == 22 && data <=20 || scores6 == 23 && data <=21 || scores6 == 24 && data <=22 || scores6 == 25 && data <=23 || scores6 == 26 && data <=24 || scores6 == 27 && data <=25 || scores6 == 28 && data <=26 || scores6 == 29 && data <=27 || scores6 == 30 && data == 28 || scores6 == 30 && data == 29){
            // alert("kamu menang " + datapemain2)
            Swal.fire(
            'Selamat',
            'Kamu memenangkan set terakhir',
            'success'
            )
            document.getElementById("playmin2").style.display = "none";
            document.getElementById("playmin1").style.display = "none";
            document.getElementById("play1").style.display = "none";
            // button 2 hilang juga
            document.getElementById("play2").style.display = "none";
            // ini wajib hilang wkwk
            document.getElementById("buttonsubmit").style.display = "none";
            // ini yang muncul
            var simpanskorep5 = scores5;
            var simpanskorep6 = scores6;
            // untuk hasil report pertandingan babak 1
            document.getElementById("repplayerr5").style.display = "block" // pemain 1
            document.getElementById("repplayerr5").innerHTML = datapemain1 // nama pemain 1
            document.getElementById("repplayerr6").style.display = "block" // pemain 2
            document.getElementById("repplayerr6").innerHTML = datapemain2 // nama pemain 2
            // end baris 238
            document.getElementById("scorebabakk5").style.display = "block" // angka pemain1
            document.getElementById("scorebabakk5").innerHTML = simpanskorep5; // untuk menyimpan angka yang didapat oleh player 1
            document.getElementById("scorebabakk6").style.display = "block" // angka pemain2
            document.getElementById("scorebabakk6").innerHTML = simpanskorep6; // untuk menyimpan angka yang didapat oleh player 2
            // console.log("Babak Pertama : " + simpanskorep1 + " " + simpanskorep2)
            ++scoreset2;
            // console.log(scoreset1 + ":" + scoreset2)
            document.getElementById("num5").style.display = "block" // angka 1/0 untuk angka p1
            document.getElementById("num6").style.display = "block" // angka 1/0 untuk angka p2
            document.getElementById("num5").innerHTML = scoreset1
            document.getElementById("num6").innerHTML = scoreset2
        }
        else if (scores6 == 20 && data == 20) {
            alert("kalian just ( tambahkan dua poin untuk menyelesaikan)")
        }
        else{
            let skore2 = document.getElementById("scoreplayer2").innerHTML = scores6;
        }
    }
    function btnk6() {
        var datapemain1 = document.getElementById("player1").value;
        var datapemain2 = document.getElementById("player2").value;
        // alert("testing bosssss")
        --scores6;
        data = scores5;
        if (scores6 < 1) {
            // alert("poin pas nol jangan dikurangin")
            document.getElementById("playmin6").style.display = "none";
        }
        if(scores6 == 20 && data < 20 || scores6 == 21 && data == 20 || scores6 == 22 && data == 21 || scores6 == 23 && data == 22 || scores6 == 24 && data == 23 || scores6 == 25 && data == 24 || scores6 == 26 && data == 25 || scores6 == 27 && data == 26 || scores6 == 28 && data == 27 || scores6 == 29 && data == 28 || scores6 == 29 && data == 29){
            alert("Game Poin " + datapemain2)
        }
        if (scores6 == 21 && data <=19 || scores6 == 22 && data <=20 || scores6 == 23 && data <=21 || scores6 == 24 && data <=22 || scores6 == 25 && data <=23 || scores6 == 26 && data <=24 || scores6 == 27 && data <=25 || scores6 == 28 && data <=26 || scores6 == 29 && data <=27 || scores6 == 30 && data == 28 || scores6 == 30 && data == 29){
            // alert("kamu menang " + datapemain2)
            Swal.fire(
            'Selamat',
            'Kamu memenangkan set terakhir',
            'success'
            )
            document.getElementById("playmin1").style.display = "none";
            document.getElementById("play1").style.display = "none";
            // button 2 hilang juga
            document.getElementById("playmin2").style.display = "none";
            document.getElementById("play2").style.display = "none";
            // ini wajib hilang wkwk
            document.getElementById("buttonsubmit").style.display = "none";
            // ini yang muncul
            var simpanskorep5 = scores5;
            var simpanskorep6 = scores6;
            // untuk hasil report pertandingan babak 1
            document.getElementById("repplayerr5").style.display = "block" // pemain 1
            document.getElementById("repplayerr5").innerHTML = datapemain1 // nama pemain 1
            document.getElementById("repplayerr6").style.display = "block" // pemain 2
            document.getElementById("repplayerr6").innerHTML = datapemain2 // nama pemain 2
            // end baris 238
            document.getElementById("scorebabakk5").style.display = "block" // angka pemain1
            document.getElementById("scorebabakk5").innerHTML = simpanskorep5; // untuk menyimpan angka yang didapat oleh player 1
            document.getElementById("scorebabakk6").style.display = "block" // angka pemain2
            document.getElementById("scorebabakk6").innerHTML = simpanskorep6; // untuk menyimpan angka yang didapat oleh player 2
            // console.log("Babak Pertama : " + simpanskorep1 + " " + simpanskorep2)
            ++scoreset2;
            // console.log(scoreset1 + ":" + scoreset2)
            document.getElementById("num5").style.display = "block" // angka 1/0 untuk angka p1
            document.getElementById("num6").style.display = "block" // angka 1/0 untuk angka p2
            document.getElementById("num5").innerHTML = scoreset1
            document.getElementById("num6").innerHTML = scoreset2
        }
        else if (scores6 == 20 && data == 20) {
            alert("kalian just ( tambahkan dua poin untuk menyelesaikan)")
        }
        else{
            let skore2 = document.getElementById("scoreplayer2").innerHTML = scores6;
        }
    }
    // end fungsi babak keempat yang akan muncul setelah babak 1 selesai
    // javascript end //