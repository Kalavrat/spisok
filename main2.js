let array = [1, 2, "три", "четыре"];
let value = 2;
function newFunc(array) {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "object") {
      array[i] = {
        value: `${array[i]}`,
        label: `${array[i]}`,
      };
    }
  }
  return array;
}
array = newFunc(array);

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
