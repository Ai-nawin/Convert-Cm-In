const centimeter = document.querySelector("#cm"),
inch = document.querySelector("#in");

window.addEventListener("load", () => centimeter.focus());

centimeter.addEventListener("input", ()=>{
    inch.value = (centimeter.value * 0.3937).toFixed(4);
    if(!centimeter.value) inch.value = "";
});

inch.addEventListener("input", ()=>{
    centimeter.value = (inch.value * 2.54).toFixed(2);
    if(!inch.value) centimeter.value = "";
});

const Meter = document.querySelector("#m"),
inch2 = document.querySelector("#in2");

window.addEventListener("load", () => Meter.focus());

Meter.addEventListener("input", ()=>{
    inch2.value = (Meter.value * 39.3701).toFixed(4);
    if(!Meter.value) inch2.value = "";
});

inch2.addEventListener("input", ()=>{
    Meter.value = (inch2.value * 0.0254).toFixed(4);
    if(!inch2.value) Meter.value = "";
});