document.getElementById("btnMultiply").addEventListener('click', function() {
    let FirstNum = document.getElementById('firstNum').value;
    let SecondNum = document.getElementById('secondNum').value;
    let TableBody = "";

    for (let RowStart = 1; RowStart <= FirstNum; RowStart++)  {
        TableBody += "<tr>";
        for(let ColStart = 1; ColStart <= SecondNum; ColStart++) {
            TableBody += "<td>" +(RowStart * ColStart)+ "</td>";
        }
        TableBody += "</tr>";
    }
    document.getElementById("tableBody").innerHTML = TableBody;
});