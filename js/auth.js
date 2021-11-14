//listen for auth status changes
function initApp(){
firebase.auth().onAuthStateChanged(user => {
    if(user){
        //user signed in
        console.log('user signed in', user);
        setupUI(user);
        //check if user is admin
        //checkAdmin(user.uid);
    }else{
        //user signed out
        console.log('user signed out');
        setupUI();
        //window.location = 'index.html';
    }
    
});
}
window.addEventListener('load', initApp);
// };
//signUp
const SignUpForm= document.querySelector('#SignUpForm');
SignUpForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    //get user info
    //const username= SignUpForm['username'].value;
    const email= SignUpForm['SignUpEmail'].value;
    const password= SignUpForm['SignUpPassword'].value;
    
    //sign up the user
    firebase.auth().createUserWithEmailAndPassword(email, password).then(cred=>{
        console.log(cred.user);
        const modal= document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        
        SignUpForm.querySelector('.error').innerHTML= '';
        SignUpForm.reset();

    }).catch(err=>{
        SignUpForm.querySelector('.error').innerHTML= err.message;
        SignUpForm.reset();
        
    });
});

//logout
const logout= document.querySelector('#logout');
logout.addEventListener('click', (e)=>{
    e.preventDefault();
    firebase.auth().signOut();//.then(()=>{
        //console.log('userSignout');
        //initApp();
    });
//});

//login
const loginForm= document.querySelector('#LogInForm');
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    //get user info
    //const username= SignUpForm['username'].value;
    const email= loginForm['LoginEmail'].value;
    const password= loginForm['LoginPassword'].value;
    
    //sign up the user
    firebase.auth().signInWithEmailAndPassword(email, password).then(cred=>{
        //console.log(cred.user);
        //loginForm.reset();
        //close the login modal and reset form
        const modal= document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        
       loginForm.querySelector('.error').innerHTML= '';
       loginForm.reset(); 
        //initApp();
    }).catch(err=>{
       loginForm.querySelector('.error').innerHTML= "Invalid Credentials";
       loginForm.reset();
    });
});
