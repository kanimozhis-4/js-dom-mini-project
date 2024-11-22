document.addEventListener("DOMContentLoaded", () => {
    
    const leftCheckboxes = document.querySelectorAll(".left-container input[type='checkbox']");
    const rightCheckboxes = document.querySelectorAll(".right-container input[type='checkbox']");
  
    const allLeftBtn = document.querySelector(".all-left");
    const leftBtn = document.querySelector(".left");
    const rightBtn = document.querySelector(".right");
    const allRightBtn = document.querySelector(".all-right");
    function getLeftCheckboxes() {
        return document.querySelectorAll(".left-container input[type='checkbox']");
    }

    function getRightCheckboxes() {
        return document.querySelectorAll(".right-container input[type='checkbox']");
    } 
    function initailState() {
      const leftCheckboxes = getLeftCheckboxes();
      const rightCheckboxes = getRightCheckboxes();
      const leftSelected = Array.from(leftCheckboxes).filter(checkbox => checkbox.checked);
      const rightSelected = Array.from(rightCheckboxes).filter(checkbox => checkbox.checked);
      console.log(leftSelected.length,rightSelected.length)
      leftBtn.disabled = leftSelected.length === 0;
      rightBtn.disabled = rightSelected.length === 0;
      allRightBtn.disabled =  rightCheckboxes.length  === 0;
      allLeftBtn.disabled = leftCheckboxes.length=== 0;
    }  
    function moveToRight() { 
      const leftCheckboxes = getLeftCheckboxes();
      const rightCheckboxes = getRightCheckboxes();
      const rightContent = document.querySelector(".right-container .right-content");
      const leftSelected = Array.from(leftCheckboxes).filter(checkbox => checkbox.checked);
      leftSelected.forEach(checkbox => {
        const label = checkbox.parentElement;
        label.parentElement.removeChild(label);
        // console.log("label ",label);
        rightContent.appendChild(label);
        checkbox.checked = false;  
      });
      initailState(); 
    } 
    function  moveToLeft() { 
        const leftCheckboxes = getLeftCheckboxes();
        const rightCheckboxes = getRightCheckboxes();
        const leftContent = document.querySelector(".left-container .left-content");
        const rightSelected = Array.from(rightCheckboxes).filter(checkbox => checkbox.checked);
        rightSelected.forEach(checkbox => {
          const label = checkbox.parentElement;
          label.parentElement.removeChild(label);
        //   console.log("label ",label);
          leftContent.appendChild(label);
          checkbox.checked = false;  
        });  
        initailState(); 

      } 
    function moveAllToRight(){
        const leftCheckboxes = getLeftCheckboxes();
        const rightCheckboxes = getRightCheckboxes();
        const rightContent = document.querySelector(".right-container .right-content");
        const leftSelected = Array.from(leftCheckboxes)
        leftSelected.forEach(checkbox => {
            const label = checkbox.parentElement;
            label.parentElement.removeChild(label);
            // console.log("label ",label);
            rightContent.appendChild(label);
            checkbox.checked = false;  
          });
          initailState(); 
          

    } 
    function moveAllToLeft(){
        const leftCheckboxes = getLeftCheckboxes();
        const rightCheckboxes = getRightCheckboxes();
        const leftContent = document.querySelector(".left-container .left-content");
        const rightSelected = Array.from(rightCheckboxes);
        rightSelected.forEach(checkbox => {
            const label = checkbox.parentElement;
            label.parentElement.removeChild(label);
          //   console.log("label ",label);
            leftContent.appendChild(label);
            checkbox.checked = false;  
          });
          initailState(); 
    } 
    initailState();  

    // left eventListener
    leftCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', initailState);
    });
    // right eventListener
    rightCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', initailState);
    }); 
    // button eventListener
    leftBtn.addEventListener("click", moveToRight);
    rightBtn.addEventListener("click", moveToLeft);
    allLeftBtn.addEventListener("click", moveAllToRight);
    allRightBtn.addEventListener("click", moveAllToLeft);
  
  });
  