const controller = {
  signUp: async function(signUpInfo) {
    let email = signUpInfo.email
    let password = signUpInfo.password
    let firstname = signUpInfo.firstname
    let lastname = signUpInfo.lastname
    
    view.setText('#sign-up-success', '')
    view.setText('#sign-up-error', '')
    view.disable('#form-sign-up-btn')

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      await firebase.auth().currentUser.updateProfile({
        displayName: firstname + " " + lastname
      })
      await firebase.auth().currentUser.sendEmailVerification()

      view.setText('#sign-up-success', 'An email verification has been sended to your email!')
    } catch(error) {
      let message = error.message
      view.setText('#sign-up-error', message)
    }

    view.enable('#form-sign-up-btn')

  },
  signIn: async function(signInInfo) {

    try {
      // let result = await firebase.auth().signInWithEmailAndPassword(email, password)
      // result.user = { email, emailVerified, displayName }
    } catch(error) {

    }
  }
}