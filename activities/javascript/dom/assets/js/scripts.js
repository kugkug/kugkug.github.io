document.querySelector("#btnAddItem").addEventListener("click", function () {
  let DivCol = document.createElement("div");
  DivCol.className = "col-md-12 div-grade mt-2";

  let InputGrade = document.createElement("input");
  InputGrade.type = "number";
  InputGrade.className = "form-control form-control-sm txt-grades";
  InputGrade.placeholder = "Enter Grade";

  DivCol.append(InputGrade);

  document.querySelector("#div-parent").appendChild(DivCol);
});

document.querySelector("#btnRemove").addEventListener("click", function () {
  const LastGrade = document.querySelector(".div-grade:last-child");
  LastGrade.remove();

  Calculate();
});

document.querySelector("#btnCalculate").addEventListener("click", function () {
  Calculate();
});

function Calculate() {
  const Grades = document.querySelectorAll(".txt-grades");
  let Total = 0;
  for (const grade of Grades) {
    Total += grade.value != "" ? parseFloat(grade.value) : 0;
  }

  if (Total > 0)
    document.querySelector("#spn-result").innerText = (
      Total / Grades.length
    ).toFixed(2);
  else document.querySelector("#spn-result").innerText = 0;
}
