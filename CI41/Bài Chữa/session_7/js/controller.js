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
    view.setText('#sign-in-error', '')
    view.disable('#form-sign-in-btn')
    try {
      let email = signInInfo.email
      let password = signInInfo.password
      let result = await firebase.auth().signInWithEmailAndPassword(email, password)
      let user = result.user
      if(user.emailVerified) {
        view.showScreen('chat')
      } else {
        throw new Error('Must verify email!')
      }
    } catch(error) {
      let message = error.message
      view.setText('#sign-in-error', message)
      view.enable('#form-sign-in-btn')
    }
  },
  loadConversations: async function() {
    let result = await firebase.firestore()
      .collection('conversations')
      .get()
    let conversations = utils.getDataFromDocs(result.docs)
    model.saveListConversations(conversations)
    if(conversations.length) {
      let currentConversation = conversations[0]
      model.saveCurrentConversation(currentConversation)
    }
  }
}
