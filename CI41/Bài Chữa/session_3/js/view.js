const view = {
  showScreen(screenName) {
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
            firstname: form.firstname.value, // required
            lastname: form.lastname.value, // required
            email: form.email.value, // required
            password: form.password.value, // required && length >= 6
            confirmPassword: form.confirmPassword.value // required && length >= 6 && == password
          }

          // 2. validate data
          view.validate(signUpInfo.firstname, '#firstname-error', 'Missing firstname!')

          // 3. submit data (next session)
        }

        break
      }
      case 'signIn': {
        app.innerHTML = components.signIn

        let link = document.querySelector('#form-sign-in-link')
        link.onclick = function() {
          view.showScreen('signUp')
        }

        break
      }
    }
  },
  setText(query, text) {
    document.querySelector(query).innerText = text
  },
  validate(condition, queryErrorTag, messageError) {
    if(condition) {
      view.setText(queryErrorTag, '')
    } else {
      view.setText(queryErrorTag, messageError)
    }
  }
}