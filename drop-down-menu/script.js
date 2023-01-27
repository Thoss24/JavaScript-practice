

function handleSelectedMenu() {
   const dropDownMenus = document.querySelectorAll('.dropbtn');

   dropDownMenus.forEach((menu) => menu.addEventListener('click', () => {
    menu.classList.toggle('clicked')
   }));

}
handleSelectedMenu()

