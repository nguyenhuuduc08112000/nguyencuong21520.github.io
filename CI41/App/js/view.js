const view = {
    async showScreen(screenName) {
        let app = document.querySelector('#app')
        switch (screenName) {
            case 'signUp': {
                app.innerHTML = components.signUp
                let link = document.querySelector('#form-sign-up-link')
                link.onclick = function () {
                    view.showScreen('signIn')
                }
                let form = document.querySelector('.form-sign-up')
                // console.log(form.firstname)
                form.onsubmit = function (event) {
                    event.preventDefault()
                    //1.get data

                    let signUpInfo = {
                        firstname: form.firstname.value.trim(),
                        lastname: form.lastname.value.trim(),
                        email: form.email.value.trim().toLowerCase(),
                        password: form.password.value,
                        confirmPassword: form.confirmPassword.value
                    }

                    //2.validate data
                    // if (signUpInfo.firstname){
                    //     // document.querySelector('#firstname-error').innerHTML=''
                    //     view.setText('#firstname-error','')
                    // }
                    // else{
                    //     // document.querySelector('#firstname-error').innerHTML='Missing FirstName'
                    //     view.setText('#firstname-error','duc ngu')
                    // }
                    let validateResult = [

                        view.Validate(signUpInfo.firstname, '#firstname-error', 'Missing'),
                        view.Validate(signUpInfo.lastname, '#lasttname-error', 'Missing'),
                        view.Validate(signUpInfo.email, '#email-error', 'Missing'),
                        view.Validate(signUpInfo.password && signUpInfo.password.length >= 6, '#passWord1-error', 'invalid password'),
                        view.Validate(signUpInfo.password == signUpInfo.confirmPassword, '#passWord-error', 'PassWord Incorrect')
                    ]

                    //3. submit data (next season)
                    // console.log(validateResult)
                    if (view.allPassed(validateResult)) {
                        controller.signUp(signUpInfo)
                    }
                }
                break
            }
            case 'signIn': {
                app.innerHTML = components.signIn
                let link = document.querySelector('#form-sign-in-link')
                link.onclick = function () {
                    view.showScreen('signUp')
                }
                let form = document.querySelector('.form-sign-in')
                form.onsubmit = function (event) {
                    event.preventDefault()
                    // 1 get data
                    let signInInfo = {
                        email: form.email.value.trim().toLowerCase(),
                        password: form.password.value
                    }
                    // 2 validate data
                    let validateResult = [
                        // console.log(signInInfo),
                        view.Validate(signInInfo.email, '#email-error', 'Missing'),
                        view.Validate(signInInfo.password && signInInfo.password.length >= 6, '#firstname-error', 'Invalid password')
                    ]
                    // 3 submit data
                    if (view.allPassed(validateResult)) {
                        controller.signIn(signInInfo)
                    }
                }
                break
            }
            case 'chat': {
                app.innerHTML = components.chat // Nội dung empty

                let currentEmail = firebase.auth().currentUser.email
                let currentEmailDisplay = document.querySelector('#nav')
                currentEmailDisplay.innerHTML =`<div>${currentEmail}</div>
                <button id="bbb" class ="btn-icon">Sigout</button>`
                // load conversations form database => save conversations to model
                await controller.loadConversations()
                controller.setUpConversationchange()
                //display messages of current conversations // nội dung đầy đủ
                view.showListConversation()
                view.showCurrentConversations()

                //event form-add-message 
                let formAddMessage = document.querySelector('.form-add-message-chat')
                formAddMessage.onsubmit = function (event) {
                    event.preventDefault()

                    let messageContent = formAddMessage.message.value.trim()
                    if (messageContent) {
                        controller.updateNewMessage(messageContent)
                    }
                }

                //event form-add-conversation
                let formAddConversation = document.querySelector('.form-add-conversation')
                formAddConversation.onsubmit = function (event) {
                    event.preventDefault()

                    let title = formAddConversation.title.value.trim()
                    let friendEmail = formAddConversation.friendEmail.value.trim().toLowerCase()

                    controller.addConversation(title, friendEmail)

                }
                let btnLeaveConversation = document.querySelector('#btn-leave-conversation')
                btnLeaveConversation.onclick = function () {
                    controller.leaveCurrentConversation()
                }

                let out = document.querySelector('#bbb')
                out.onclick = function () {
                    firebase.auth().signOut()
                }
            }
        }
    },
    showListConversation() {
        if (model.listConversations) {

            let listConversation = model.listConversations
            let listContainer = document.querySelector('.list-conversation')

            listContainer.innerHTML = ''
            for (let conversation of listConversation) {
                let conversationId = conversation.id
                let title = conversation.title
                let memberCount = conversation.users.length

                let members = (memberCount > 1) ? `${memberCount} members` : `${memberCount} member`
                let className = (model.currentConversations && model.currentConversations.id == conversationId) ?
                    'list-conversation-wrapper current' :
                    'list-conversation-wrapper'

                let html = `<div class="${className}">
                <div id="conversation-${conversationId}" >
                    <div class="conversation-title">${title}</div>
                    <div class="conversation-members">${members}</div>
                    </div> 
                    </div>`

                listContainer.innerHTML += html
            }
            // bind event to conversation tags
            for (let conversation of listConversation) {
                let conversationId = conversation.id
                let conversationDiv = document.querySelector(`#conversation-${conversationId}`)

                // console.log(conversationDiv)+
                conversationDiv.onclick = function () {
                    model.saveCurrentConversations(conversation)
                    view.showCurrentConversations()
                    view.showListConversation()
                }
            }

        }
    },
    showCurrentConversations() {
            let listContainer = document.querySelector('.list-message-chat')
            let detailContainer = document.querySelector('.details-current-conversation')

        listContainer.innerHTML = ''
        detailContainer.innerHTML = ''
        if (model.currentConversations) {
            let messages = model.currentConversations.messages
            let currentEmail = firebase.auth().currentUser.email
            let users = model.currentConversations.users
            let createAt = model.currentConversations.createAt
            let createAtLocale = new Date(createAt).toLocaleString()



            if (messages) {
                for (let message of messages) {
                    let owner = message.owner

                    // let className = null
                    // if (owner == currentEmail)
                    //     className = 'message-chat your'
                    // else
                    //     className = 'message-chat'
                    let className = (owner == currentEmail) ? `message-chat your` : `message-chat`

                    let messageHtml = `
               <div class="${className}">
               <span>${message.content}</span>
               </div>`

                    listContainer.innerHTML += messageHtml
                }
            }

            for (let email of users) {
                let emailHtml = `
                <div class="conversation-email">${email}</div>`

                detailContainer.innerHTML += emailHtml
            }
            let createAtHtml = `
            <div class="conversation-create-at">${createAtLocale}</div>
            `
            detailContainer.innerHTML += createAtHtml
        }
    },
    setText(query, text) {
        document.querySelector(query).innerText = text
    },
    Validate(condition, queryErrorTag, messageError) {
        if (condition) {
            view.setText(queryErrorTag, '')
            return true
        } else {
            view.setText(queryErrorTag, messageError)
            return false
        }
    },
    allPassed(validateResult) {
        for (let result of validateResult) {
            if (!result) {
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
    },

}