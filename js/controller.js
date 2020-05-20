const controller = {

    signUp: async function (signUpInfo) {
        let fullName = signUpInfo.fullName
        let email = signUpInfo.email
        let password = signUpInfo.password

        utils.setText('#sign-up-success', '')
        utils.setText('#confirmPassWord-error', '')
        utils.setLoadingContent('#btn-sign-up', `<div class="lds-facebook"><div></div><div></div><div></div></div>`)

        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password)
            await firebase.auth().currentUser.updateProfile({
                displayName: fullName
            })
            await firebase.auth().currentUser.sendEmailVerification()
            utils.setText('#sign-up-success', 'An email verification has been sent to your email')
        } catch (error) {
            let message = error.message
            utils.setText('#confirmPassWord-error', message)
        }
        utils.setLoadingContent('#btn-sign-up', `Đăng Kí`)
    },
    signIn: async function (signInInfo) {
        let email = signInInfo.email
        let password = signInInfo.password

        utils.setText('#passWord-error', '')
        utils.setLoadingContent('#btn-sign-in', `<div class="lds-facebook"><div></div><div></div><div></div></div>`)

        try {
            let result = await firebase.auth().signInWithEmailAndPassword(email, password)
            let user = result.user
            if (user.emailVerified) {
                // window.open("./home.html","_self")
                view.showScreen('home')
            } else {
                throw new Error('Must verify email')
            }
        } catch (error) {
            let message = error.message
            utils.setText('#passWord-error', message)
        }
        utils.setLoadingContent('#btn-sign-in', `Đăng Nhập`)
    },
    googleSignUp: function () {
        let provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider).then(function (result) {
            console.log('success')
        }).catch(function (error) {
            console.log(error.message)
        });

    },
    upLoadImage: async function (file) {
        let upLoadedFile = await storage.ref('/Images/' + file.name).put(file)
        let path = upLoadedFile.metadata.fullPath;
        let url = await storage.ref(path).getDownloadURL();
        // console.log(url);
        return url;
    },
    addData: async function (title, address, type, hashtag, content, images) {
        let currentEmail = firebase.auth().currentUser.email
        let now = new Date().toISOString()
        let dataUserPut = {
            title: title,
            user: currentEmail,
            address: address,
            type: type,
            hashtag: hashtag,
            content: content,
            user: currentEmail,
            images: images,
            time: now
        }
        await firebase.firestore()
            .collection('dataUserUp')
            .add(dataUserPut)
        document.querySelector('#form-input-user-wrapper').reset()
        utils.setLoadingContent('#zxcvb', `Đăng`)
    },
    loadDataFromDataWhereToGo: async function () {
        let result = await firebase.firestore()
            .collection('dataWhereToGo')
            .get()
        let data = utils.getDataFromDocs(result.docs)
        model.saveDataWhereToGo(data)
    },
    loadDataFromDataUserPush: async function () {
        let result = await firebase.firestore()
            .collection('dataUserUp')
            .get()
        let data = utils.getDataFromDocs(result.docs)
        model.saveDataUserPush(data)
    },
    searchPlace: async function (pattern) {

        var places = [];
        let result = model.dataWhereToGo;
        result.forEach(function (doc) {
            places.push(doc);
        });
        let foundPlaces = places.filter(function (place) {
            let general = `
            {{Title}}
            ${place.title}
            {{Address}}
            ${place.address}
            `;
            let regex = new RegExp(pattern, "gmi");
            let matches = general.match(regex);
            if (matches) {
                if (matches.length >= pattern.trim().split('|').length) {
                    return true;
                }
            }
            return false;
        });
        model.dataSearch = foundPlaces
        utils.topFunction()
        await view.showListData(foundPlaces)
        utils.setLoadingContent('#search-icon', `<i class="fas fa-search" style="color:  rgb(133, 133, 231); padding: 10px 10px;"></i>`)
    },
    getDataWhenClick: function (list, data) {
        let cart = [];
        for (let i = 0; i < list.length; i++) {
            list.item(i).onclick = function () {
                cart.push(data[i]);
                localStorage.setItem("cart", JSON.stringify(cart))
                document.querySelector('#countCard').innerText = cart.length
                // let dataFromLocalStorage = JSON.parse(localStorage.getItem("cart"));           
            }
        }
    },
    addLike: async function (user, id) {
        if(model)
        await firebase.firestore()
            .collection('dataWhereToGo')
            .doc(id)
            .update({
                like: firebase.firestore.FieldValue.arrayUnion(user)
            })
    }
}