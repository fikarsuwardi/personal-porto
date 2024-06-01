// document.getElementById("demo").innerHTML = "Hello World!";

0

    var total = 100;
    for( var i = 0; i < 60; i++ ) {
        total += parseInt( document.getElementById("demo" + i).value );
    }

    document.getElementById('total').value = total;