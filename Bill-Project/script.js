let Iname = document.getElementById("Iname");
let Iprice = document.getElementById("Iprice");
let Iqnt = document.getElementById("Iqnt");
let add = document.getElementById("add");
let table = document.getElementById("Table");
let addTax = document.getElementById("addTax")
let Tval = document.getElementById("Tval")
let tax = document.getElementById("tax");
let taxValue= document.getElementById("taxValue")
let totArr = [];

let sum = 0;

add.addEventListener("click",()=>{
    event.preventDefault();

    if(Iname.value == "" || Iprice.value == "" || Iqnt == ""){
        console.log("Invalid Data");
    }
    else{
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <td><a id="cut"><img src="./Assets/cross.png" alt=""></a></td>
                    <td>${Iname.value}</td>
                    <td>${Iprice.value}</td>
                    <td>${Iqnt.value}</td>
                    <td id="tot">${(Iprice.value)*(Iqnt.value)}</td>
    `;
    table.appendChild(tr);
    sum = sum + (Iprice.value)*(Iqnt.value);
    updateTot(sum);

    tr.querySelector("#cut").addEventListener('click',()=>{
        tr.remove();
        let res = tr.querySelector("#tot").innerText;
        DeleteTot(res);
    })    
    }
})

let updateTot = ()=>{
    Tval.innerText =`${sum}/-` 
} 

let DeleteTot = (val)=>{
    val = Number(val);
    sum = sum - val;
    Tval.innerText =`${sum}/-`
}

addTax.addEventListener("click",()=>{
    if(tax != ""){
        let taxVal = tax.value;
        let per = (sum / 100)*taxVal;
        console.log(`TAX: ${per}`);
        per = Math.round(per)
        taxValue.innerHTML = `(${per})`;
        sum = sum + per;
        updateTot();
    }
})





