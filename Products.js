const products = [
    {modelNum: "TOS20-24S3.3", power: "20", inputVoltage: "9-36", outputVoltage: "3.3"}, 
    {modelNum: "TOS20-24S5", power: "20", inputVoltage: "9-36", outputVoltage: "5"}, 
    {modelNum: "TOS20-24S9", power: "20", inputVoltage: "9-36", outputVoltage: "9"}, 
    {modelNum: "TOS20-24S12", power: "20", inputVoltage: "9-36", outputVoltage: "12"}, 
    {modelNum: "TOS20-24S15", power: "20", inputVoltage: "9-36", outputVoltage: "15"}, 
    {modelNum: "TOS20-24S24", power: "20", inputVoltage: "9-36", outputVoltage: "24"}, 
    {modelNum: "TOS20-24S28", power: "20", inputVoltage: "9-36", outputVoltage: "28"}, 
    {modelNum: "TOS20-24S48", power: "20", inputVoltage: "9-36", outputVoltage: "48"}, 
    {modelNum: "TOS20-24D5", power: "20", inputVoltage: "9-36", outputVoltage: "±5"}, 
    {modelNum: "TOS20-24D12", power: "20", inputVoltage: "9-36", outputVoltage: "±12"}, 
    {modelNum: "TOS20-24D15", power: "20", inputVoltage: "9-36", outputVoltage: "±15"}, 
    {modelNum: "TOS20-48S3.3", power: "20", inputVoltage: "18-75", outputVoltage: "3.3"}, 
    {modelNum: "TOS20-48S5", power: "20", inputVoltage: "18-75", outputVoltage: "5"}, 
    {modelNum: "TOS20-48S9", power: "20", inputVoltage: "18-75", outputVoltage: "9"}, 
    {modelNum: "TOS20-48S12", power: "20", inputVoltage: "18-75", outputVoltage: "12"}, 
    {modelNum: "TOS20-48S15", power: "20", inputVoltage: "18-75", outputVoltage: "15"}, 
    {modelNum: "TOS20-48S24", power: "20", inputVoltage: "18-75", outputVoltage: "24"}, 
    {modelNum: "TOS20-48S28", power: "20", inputVoltage: "18-75", outputVoltage: "28"}, 
    {modelNum: "TOS20-48S48", power: "20", inputVoltage: "18-75", outputVoltage: "48"}, 
    {modelNum: "TOS20-48D5", power: "20", inputVoltage: "18-75", outputVoltage: "±5"}, 
    {modelNum: "TOS20-48D12", power: "20", inputVoltage: "18-75", outputVoltage: "±12"}, 
    {modelNum: "TOS20-48D15", power: "20", inputVoltage: "18-75", outputVoltage: "±15"}, 
    {modelNum: "TOS50-24S5", power: "50", inputVoltage: "9-36", outputVoltage: "5"}, 
    {modelNum: "TOS50-24S9", power: "50", inputVoltage: "9-36", outputVoltage: "9"}, 
    {modelNum: "TOS50-24S12", power: "50", inputVoltage: "9-36", outputVoltage: "12"}, 
    {modelNum: "TOS50-24S15", power: "50", inputVoltage: "9-36", outputVoltage: "15"}, 
    {modelNum: "TOS50-24S24", power: "50", inputVoltage: "9-36", outputVoltage: "24"}, 
    {modelNum: "TOS50-24S28", power: "50", inputVoltage: "9-36", outputVoltage: "28"}, 
    {modelNum: "TOS50-24S48", power: "50", inputVoltage: "9-36", outputVoltage: "48"}, 
    {modelNum: "TOS50-48S5", power: "50", inputVoltage: "18-75", outputVoltage: "5"}, 
    {modelNum: "TOS50-48S9", power: "50", inputVoltage: "18-75", outputVoltage: "9"}, 
    {modelNum: "TOS50-48S12", power: "50", inputVoltage: "18-75", outputVoltage: "12"}, 
    {modelNum: "TOS50-48S15", power: "50", inputVoltage: "18-75", outputVoltage: "15"}, 
    {modelNum: "TOS50-48S24", power: "50", inputVoltage: "18-75", outputVoltage: "24"}, 
    {modelNum: "TOS50-48S28", power: "50", inputVoltage: "18-75", outputVoltage: "28"}, 
    {modelNum: "TOS50-48S48", power: "50", inputVoltage: "18-75", outputVoltage: "48"}, 
    {modelNum: "TOS100-24S5", power: "100", inputVoltage: "9-36", outputVoltage: "5"}, 
    {modelNum: "TOS100-24S9", power: "100", inputVoltage: "9-36", outputVoltage: "9"}, 
    {modelNum: "TOS100-24S12", power: "100", inputVoltage: "9-36", outputVoltage: "12"}, 
    {modelNum: "TOS100-24S15", power: "100", inputVoltage: "9-36", outputVoltage: "15"}, 
    {modelNum: "TOS100-24S24", power: "100", inputVoltage: "9-36", outputVoltage: "24"}, 
    {modelNum: "TOS100-24S28", power: "100", inputVoltage: "9-36", outputVoltage: "28"}, 
    {modelNum: "TOS100-24S48", power: "100", inputVoltage: "9-36", outputVoltage: "48"}, 
    {modelNum: "TOS100-48S5", power: "100", inputVoltage: "18-75", outputVoltage: "5"}, 
    {modelNum: "TOS100-48S9", power: "100", inputVoltage: "18-75", outputVoltage: "9"}, 
    {modelNum: "TOS100-48S12", power: "100", inputVoltage: "18-75", outputVoltage: "12"}, 
    {modelNum: "TOS100-48S15", power: "100", inputVoltage: "18-75", outputVoltage: "15"}, 
    {modelNum: "TOS100-48S24", power: "100", inputVoltage: "18-75", outputVoltage: "24"}, 
    {modelNum: "TOS100-48S28", power: "100", inputVoltage: "18-75", outputVoltage: "28"}, 
    {modelNum: "TOS100-48S48", power: "100", inputVoltage: "18-75", outputVoltage: "48"}
];

function openNavBar() {
    document.querySelector("footer").style.display = "none";
    document.querySelector("main").style.display = "none";
    document.getElementById("mobile-nav").style.display = "flex";
    document.getElementById("nav-btn").onclick = closeNavBar;
}

function closeNavBar() {
    document.querySelector("footer").style.display = "flex";
    document.querySelector("main").style.display = "flex";
    document.getElementById("mobile-nav").style.display = "none";
    document.getElementById("nav-btn").onclick = openNavBar;
}

document.getElementById("nav-btn").onclick = openNavBar;

document.querySelectorAll(".filter-header").forEach(element => element.addEventListener("click", event => {
    const next = event.currentTarget.nextElementSibling;
    const style = window.getComputedStyle(next);

    if (style.display === "none"){
        next.style.display = "flex";
    }
    else{
        next.style.display = "none";
    }
}));

function loadData(arr){
    const tbody = document.querySelector("tbody");
    tbody.querySelectorAll("*").forEach(child => child.remove());

    for (let i = 0; i < arr.length; i++) {
        const row = document.createElement("tr");
        const cell1 = document.createElement("th");
        const cell2 = document.createElement("th");
        const cell3 = document.createElement("th");
        const cell4 = document.createElement("th");
        cell1.textContent = arr[i].modelNum;
        cell2.textContent = arr[i].power;
        cell3.textContent = arr[i].inputVoltage;
        cell4.textContent = arr[i].outputVoltage;

        row.append(cell1, cell2, cell3, cell4);
        tbody.append(row);
    }
}

function filterData(filPow, filIn, filOut, searchKey) {

    const data = [];

    for(let i = 0; i < products.length; i++){
        let flag = true;

        if (filPow.length !== 0 && !filPow.includes(products[i].power)){
            flag = false;
        }

        if (filIn.length !== 0 && !filIn.includes(products[i].inputVoltage)){
            flag = false;
        }

        if (filOut.length !== 0 && !filOut.includes(products[i].outputVoltage)){
            flag = false;
        }

        if (flag && products[i].modelNum.toLowerCase().includes(searchKey.toLowerCase())){
            data.push(products[i]);
        }
    }

    return data;
}


const filterPower = [];
const filterInput = [];
const filterOutput = [];
let search = "";

document.querySelector('#searchBox').addEventListener("input", event => {
    search = event.target.value.trim();
    loadData(filterData(filterPower, filterInput, filterOutput, search))
});
const checkboxes = document.querySelectorAll('input[type="checkbox"]')

for (let i = 0; i < checkboxes.length; i++){
    checkboxes[i].addEventListener("change", event => {
        const value = event.target.value.split(" ");
        const isChecked = event.target.checked;


        if (isChecked){
            if (value[0] == "power"){
                filterPower.push(value[1]);
            }

            else if (value[0] == "input"){
                filterInput.push(value[1]);
            }

            else if (value[0] == "output"){
                filterOutput.push(value[1]);
            }
        }
        
        else{
            if (value[0] == "power"){
                filterPower.splice(filterPower.indexOf(value[1]), 1);
            }

            else if (value[0] == "input"){
                filterInput.splice(filterInput.indexOf(value[1]), 1);
            }

            else if (value[0] == "output"){
                filterOutput.splice(filterOutput.indexOf(value[1]), 1);
            }
        }
        loadData(filterData(filterPower, filterInput, filterOutput, search));
    })
}

loadData(products);
