let numberInput = document.getElementById('number-input'); //ช่องใส่เลข
let runButton = document.getElementById('run-Button'); //ปุ่มกด
let output = document.getElementById('output'); //ช่องใส่เลข

function printmultiply() {
    let number = Number(numberInput.value);
    let outputHtml = '';

    for (let x = 1; x <=12; x++) {
        outputHtml += '<p>' 
        outputHtml += number + ' x ' + x + ' = ' + (number * x) //ขั้นตอนการคำนวณ
        outputHtml += '</p>'
    } 
    
    output.innerHTML = outputHtml;
}

runButton.addEventListener('click', printmultiply()); //เมื่อกดปุ่มให้แสดงข้อมูล
