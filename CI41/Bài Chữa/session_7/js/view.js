const view = {
  async showScreen(screenName) {
    let app = document.querySelector('#app')

    switch(screenName) {
      case 'signUp': {
        // display page content
        app.innerHTML = components.signUp

        // bind events
        let link = document.querySelector('#form-sign-up-link')
        link.onclick = function() {
          view.showScreen('signIn')
        }

        let form = document.querySelector('.form-sign-up')
        form.onsubmit = function(event) {
          event.preventDefault()
          // 1. get data
          let signUpInfo = {
            firstname: form.firstname.value.trim(), // required
            lastname: form.lastname.value.trim(), // required
            email: form.email.value.trim().toLowerCase(), // required
            password: form.password.value, // required && length >= 6
            confirmPassword: form.confirmPassword.value // required && length >= 6 && == password
          }

          // 2. validate data
          let validateResult = [
            view.validate(signUpInfo.firstname, '#firstname-error', 'Missing firstname!'),
            view.validate(signUpInfo.lastname, '#lastname-error', 'Missing lastname!'),
            view.validate(signUpInfo.email, '#email-error', 'Missing email!'),
            view.validate(
              signUpInfo.password && signUpInfo.password.length >= 6,
              '#password-error',
              'Invalid password!'
            ),
            view.validate(
              signUpInfo.confirmPassword && signUpInfo.confirmPassword.length >= 6
                && signUpInfo.password == signUpInfo.confirmPassword,
              '#confirm-password-error',
              'Invalid confirm password!'
            )
          ]

          // 3. submit data
          
          if(view.allPassed(validateResult)) {
            controller.signUp(signUpInfo)
          }

        }

        break
      }
      case 'signIn': {
        app.innerHTML = components.signIn

        let link = document.querySelector('#form-sign-in-link')
        link.onclick = function() {
          view.showScreen('signUp')
        }

        let form = document.querySelector('.form-sign-in')
        form.onsubmit = function(e) {
          e.preventDefault()

          let signInInfo = {
            email: form.email.value.trim().toLowerCase(),
            password: form.password.value
          }
          
          let validateResult = [
            view.validate(signInInfo.email, '#email-error', 'Missing email!'),
            view.validate(
              signInInfo.password && signInInfo.password.length >= 6,
              '#password-error',
              'Invalid password!'
            )
          ]

          if(view.allPassed(validateResult)) {
            controller.signIn(signInInfo)
          }
        }

        break
      }
      case 'chat': {
        app.innerHTML = components.chat // nội dung trống
        
        // load conversations from database >> save conversations to model
        await controller.loadConversations()
        // display messages of current conversation // nội dung đầy đủ
        view.showCurrentConversation()
      }
    }
  },
  showCurrentConversation() {
    console.log('showing current conversation..')
    if(model.currentConversation) {
      let messages = model.currentConversation.messages
      let listContainer = document.querySelector('.list-message-chat')
      
      console.log('listContainer', listContainer)
      for(let message of messages) {
        // html = 
        // `<div class="message-chat">
        //   <span>Hello</span>
        // </div>`
        console.log('message', message)
      }
    }
  },
  setText(query, text) {
    document.querySelector(query).innerText = text
  },
  validate(condition, queryErrorTag, messageError) {
    if(condition) {
      view.setText(queryErrorTag, '')
      return true
    } else {
      view.setText(queryErrorTag, messageError)
      return false
    }
  },
  allPassed(validateResult) {
    for(let result of validateResult) {
      if(!result) {
        return false
      }
    }
    return true
  },
  disable(query) {
    document.querySelector(query).setAttribute('disabled', true)
  },
  enable(query) {
    document.querySelector(query).removeAttribute('disabled')
  }
}