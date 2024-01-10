alert ("bienvenidos a Rapicredito , estas a un solo paso de tomar el control de tu vida financiera...");

let nombre = prompt ("ingrese su nombre...");

let verificacion = false;


while(!verificacion) {

    let nroDocumento = prompt("ingrese su nro de documento...");
    let dato = prompt(`verifique que el numero de documento sea correcto ${nroDocumento} si o no ?`);

    if (dato === "si" ) {
        alert (`podemos continuar con su solcitud ${nombre}`);
        verificacion = true;
        break;
    } else {
        alert ("Vuelva a ingresar su numero de documento");
    }
}

let monto = Number(prompt("ingrese el monto que desea solicitar..."));
let meses  = Number(prompt("ingrese el plazo del prestamo entre 1 a 6 meses..."));

let interes = 0.0006;
let pagoMensual = ((interes * monto) * 30 );
let pagoMensualRedondeado = pagoMensual.toFixed(0);
let pagoTotal = ((pagoMensualRedondeado * meses) + monto);

alert (`Su porcentaje de interés mensual es del 0.06%`);
alert (`El valor mensual a cancelar es ${pagoMensualRedondeado} pesos `);
alert (`El pago total de su prestamo es ${pagoTotal} pesos`); 
