// UKOL 1

function parseDate (datum) {
    let d = Number(datum.slice(0,2))
    let m = Number(datum.slice(3,5))
    let y = Number(datum.slice(6,10))
    return datum1 = {
        day: d,
        month: m,
        year: y
    }
}
//datum ve formátu parseDate("12.12.2020")

//UKOL 2

function formatDate (den,mesic,rok) {
    den1 = Number(den);
    mesic1 = Number(mesic)
    rok1 = Number(rok)
    if (den1.lenght < 2) {
        dd = den1.padStart(1,"0")
    }
    if (mesic1.lenght < 2) {
        mm = mesic1.padStart(1,"0")
    }
    return datum2 = dd + "." + mm + "." + rok1;
}