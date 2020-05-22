// window.onload= init
// function init(){
//     //Dom
//     let section = document.querySelector('section')
//     section.innerHTML='';
//     section.style.background='red';
//     section.onclick=function(){
//         console.log('sectio on click')
//     }
//     console.log(section)
// }
// window.onclick =function aa(){
//     alert('sasas')
// }
window.onload = init

function init() {
    // let app = document.querySelector('#app')

    // app.innerHTML=components.signUp
    // let alo = document.querySelector('#alo')
    // alo.innerHTML=components.signIn
    firebase.auth().onAuthStateChanged(function (user) {
        if (user && user.emailVerified)
            view.showScreen('chat')
        else
            view.showScreen('signIn')
    })

    // learnDB() cái này để học na


}
// hàm lấy sự thay đổi của database
// let isFirstRun = true
// firebase.firestore()
//     .collection('conversations')
//     .onSnapshot(function (snapshot) {
//         if (isFirstRun) { // skip first run
//             isFirstRun = false
//             return
//         }

//         let docChanges = snapshot.docChanges()

//         for (let docChange of docChanges) {
//             let type = docChange.type
//             let doc = docChange.doc

//             let conversation = utils.getDataFromDoc(doc)

//             console.log('docChange type', type)
//             console.log('docChange data', conversation)
//             // if(type == 'modified') ...
//         }
//     })

// learn Database
// collection = bảng
//document = bản ghi ( 1 dòng)
async function learnDB() {
    //create
    // let user = {
    //     name: 'test fireBase Ne',
    //     age: '20'
    // }
    // let test = {
    //     name: 'alo hihi',
    //     age: '16',
    //     address: 'Ha Noi'}
    // await firebase.firestore()
    // .collection('users')
    // .add(test) 
    // console.log('create new document in collection user')

    //read

    // let  result = await firebase.firestore()
    // .collection('users')
    // .where('age', '>', 21) //just condition
    // .get()
    // let docs = result.docs
    // console.log('document',docs)

    // let users = getDataFromDocs(docs)
    // console.log('alo',users)

    // update
    // let id= 'ZQVHdTvdaQlw1v3ittkV'
    // await firebase.firestore()
    // .collection('users')
    // .doc('jrjLDyA3SgnOTEreKtBo') 
    // // .update({
    // //     classes: firebase.firestore.FieldValue.arrayRemove('7a1') //xóa 1 phần tử vào mảng classes
    // // })

    // .update({
    //     classes: firebase.firestore.FieldValue.arrayUnion('alo2 nek') //thêm 1 phần tử vào mảng classes
    // })

    // .update({
    //     name:'Nguyen Van Sua',
    //     age:50
    // })
    // console.log('alsasdo ',id)
    // delete
    // let id ='CbwcGjfrzsLxESNr4Hjs'
    // await firebase.firestore()
    // .collection('users')
    // .doc(id)
    // .delete()

    // }
    // function getDataFromDoc(doc){
    //      let data = doc.data()
    //      data.id = doc.id
    //      return data

    // }
    // function getDataFromDocs(docs){
    //     let result =[]
    //     for(let doc of docs){
    //         let data = getDataFromDoc(doc)
    //         result.push(data)

    //     }

    //     return result
}