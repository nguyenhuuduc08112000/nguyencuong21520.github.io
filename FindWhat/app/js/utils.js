const utils = {
    setText(query, text) {
        document.querySelector(query).innerText = text
    },
    Validate(condition, queryErrorTag, messageError) {
        if (condition) {
            utils.setText(queryErrorTag, '')
            return true
        } else {
            utils.setText(queryErrorTag, messageError)
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
    setLoadingContent(query, html) {
        document.querySelector(query).innerHTML = html
    },
    getDataFromDoc(doc) {
        let data = doc.data()
        data.id = doc.id
        return data

    },
    getDataFromDocs(docs) {
        let result = []
        for (let doc of docs) {
            let data = utils.getDataFromDoc(doc)
            result.push(data)
        }
        return result
    },
    topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    },
    showHomeWhenClickOnLogo() {
        view.showScreen('home')
    },
    chatOpen() {
        let chatStaus = document.querySelector('.chat-container')
        chatStaus.classList.add('show-list')
    },
    chatClose() {
        let chatStaus = document.querySelector('.chat-container')
        chatStaus.classList.remove('show-list')
    }

}