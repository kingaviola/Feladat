function nFaktor(n){
    var eredmeny = n;
    
    //0! es 1! == 1
    if (n == 0 || n == 1){
        return 1;
    }
    else {
        for (var i = n; i > 2; i--){
            eredmeny = eredmeny * (i - 1);
        }
        return eredmeny;
    }
}

function feladat01(szinek) {
    var darabszam = szinek.length;
    var eredmeny = 0;
    
    if (darabszam > 1) {
        var n = darabszam;
        var k = darabszam;
        
        for (var i = k; i > 1 ; i--){
            var szamlalo = nFaktor(n);
            var nevezo = nFaktor(i) * nFaktor(n-i);
            eredmeny = eredmeny + (szamlalo / nevezo);
        }
    }
    
    return eredmeny;
}

//teszteles
console.log(feladat01([]));
console.log(feladat01(["piros"]));
console.log(feladat01(["piros", "kek"]));
console.log(feladat01(["piros", "kek", "zold"]));
console.log(feladat01(["piros", "kek", "zold", "lila"]));
