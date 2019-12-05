checkboxes = [...document.querySelectorAll("input[type='checkbox'")];

let firstChecked;

function handleClick(e){
    let inBetween = false;



   if (e.shiftKey && this.checked) {
      checkboxes.forEach(checkbox => {
          if(checkbox === this || checkbox === firstChecked){
                inBetween = !inBetween;
                console.log('checking in-between')
          }
          if (inBetween){
              checkbox.checked = true;
          }
      });
   }
   
   
   firstChecked = this;
   
    

}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleClick))






