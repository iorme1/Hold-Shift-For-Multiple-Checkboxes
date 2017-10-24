let checkboxes = document.querySelectorAll("input[type='checkbox']");
let originalClick;

const handleSelection = function(e){
  let inBetween = false;

  if (e.shiftKey && this.checked) {
    checkboxes.forEach( checkbox => {
      if (checkbox == this || checkbox == originalClick) {
        inBetween = !inBetween
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  
  originalClick = this
}

checkboxes.forEach( checkbox => {
  checkbox.addEventListener("click", handleSelection)
})
