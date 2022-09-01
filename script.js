
const tipcal = () => {
    let amount = document.getElementById('billamount').value;
    let perc = document.getElementById('tipperc').value;
    let tip = amount * (perc/100);
    
    let total = tip + Number(amount);

    document.getElementById('tiptotal').value = tip;
    document.getElementById('totalbill').value = total;

}