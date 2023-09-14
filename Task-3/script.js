var rupi = document.getElementById('rupi');
var dolla = document.getElementById('dolla');
var yen = document.getElementById('crn-1');
var renminbi = document.getElementById('crn-2');
var dhiram = document.getElementById('crn-4');


function ruppeeConvo(){
    let r = rupi.value;
   let d = r * 0.012;
   let y = r * 1.77;
   let re = r * 0.088;
   let par = r * 3.61;
   let dh = r * 0.044;

   dolla.value = parseFloat(d.toFixed(4));
   yen.value = parseFloat(y.toFixed(4));
   renminbi.value = parseFloat(re.toFixed(4));

   dhiram.value = parseFloat(dh.toFixed(4));


}
function dollaConvo(){
    let d = dolla.value;
   let r = d * 82.90;
   let y = d * 147.17;
   let re = d *( r * 0.088);
   let par = d *(r * 3.61);
   let dh = d * 3.67;

   rupi.value = parseFloat(r.toFixed(4));
   yen.value = parseFloat(y.toFixed(4));
   renminbi.value = parseFloat(re.toFixed(4));

   dhiram.value = parseFloat(dh.toFixed(4));


}function yenConvo(){
    let y = yen.value;
   let d = y * 0.0068;
   let r = y * 0.56;
   let re = y * 0.050;
   let par = y * 2.04;
   let dh = y * r * 0.044;

   dolla.value = parseFloat(d.toFixed(4));
   rupi.value = parseFloat(r.toFixed(4));
   renminbi.value = parseFloat(re.toFixed(4));
 
   dhiram.value = parseFloat(dh.toFixed(4));


}
function yaunConvo(){
    let re = renminbi.value;
    let r = re* 11.51;
   let d = re * 0.14;
   let y = re *20.44;
   let par = re * 41.09;
   let dh = re * 0.50;

   dolla.value = parseFloat(d.toFixed(4));
   yen.value = parseFloat(y.toFixed(4));
   rupi.value = parseFloat(r.toFixed(4));
 
   dhiram.value = parseFloat(dh.toFixed(4));


}

function dhiramConvo(){
    let dh = dhiram.value;
   let d = dh * 0.27;
   let y = dh * 40.07;
   let re = dh * 1.99;
   let par = dh * 81.58;
   let r = dh * 22.56;

   dolla.value = parseFloat(d.toFixed(4));
   yen.value = parseFloat(y.toFixed(4));
   renminbi.value = parseFloat(re.toFixed(4));
   rupi.value = parseFloat(r.toFixed(4));


}
