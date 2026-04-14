let n = Math.floor(Math.random() * 100) + 1;
for (let i = 0; (i < 1000 && n > 1); i++) {
    console.log("i = " + i);
    if (n % 2 === 0){
        n = n / 2;
    }
    else {
        n = 3 * n + 1;
    }
    i++;
    console.log("n = " + n);
}

/*
Cuando se llega a un número n = 2^x, estamos llegando a un número que si lo divimos entre 2 nos queda 2^x/2^1=2^(x-1), así hasta llegar a 2^0=1, por lo tanto, si se llega
a un n = 2^x, acabaremos llegando a 1 siempre.
*/

/*
3n+1, es siempre par, con n = impar. Si tenemos que 3n+1=(2+1)n+1=2n+n+1. La primera parte 2n siempre va a ser par, cuando a un número par le sumamos un número impar,
obtenemos un número impar, por lo que tenemos que 3n será un número impar, al sumarle otro número impar nos quedaria un número par, por lo que 3n+1 es siempre par.
*/

/*
27
*/