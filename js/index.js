 const loggedOUtLinks = document.querySelectorAll('.logged-out');
 const loggedInLinks = document.querySelectorAll('.logged-in');
 
 const setupUI = (user) => {
     if (user) {
         loggedInLinks.forEach(item => item.style.display = 'block');
         loggedOUtLinks.forEach(item => item.style.display = 'none');
     } else {
         loggedInLinks.forEach(item => item.style.display = 'none');
         loggedOUtLinks.forEach(item => item.style.display = 'block');
     }
 }
 
 
 // setup materialize components
 document.addEventListener('DOMContentLoaded', function() {
 
     var modals = document.querySelectorAll('.modal');
     M.Modal.init(modals);
 
 });