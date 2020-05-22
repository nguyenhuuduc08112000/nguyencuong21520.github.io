window.onload = init 
function init(){
    firebase.auth().onAuthStateChanged(function (user) {
        if (user && user.emailVerified){
            model.currentUser = user   
        }
        view.showScreen('home')
    })
}