let array = [
  { value: "Кукушка", label: "Кукушка" },
  { value: "Синица", label: "Синица" },
  { value: "Воробей", label: "Воробей" },
];
let value = 2;
function arrSelect(array, value = 0) {
  let select = document.createElement("select");
  let old = [];
  for (let i = 0; i < array.length; i++) {
    old[i] = document.createElement("option");
    old[i].textContent = array[i].label;
    old[i].value = array[i].value;
    select.append(old[i]);
  }
  select.selectedIndex = value;
  return select;
}

document.body.append(arrSelect(array, value));
