function footToMeter(foot){
    let meter =0.305*foot;
    return meter;
    }
function meterToFoot(meter){
    let foot =3.279*meter;
    return foot;
}
function meterConverter() {
    let a = Number(document.getElementById("inputFoot").value);
    let result = footToMeter(a);
    document.getElementById("outputMeter").innerText=result;
    
}
function footConverter() {
    let a = Number(document.getElementById("inputMeter").value);
    let result = meterToFoot(a);
    document.getElementById("outputFoot").innerText=result;

}