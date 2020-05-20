let model ={
    currentUser: null,
    dataWhereToGo: null,
    dataUserPush: null,
    dataSearch: null,

    saveDataWhereToGo(data){
        model.dataWhereToGo = data
    },
    saveDataUserPush(data){
        model.dataUserPush = data
    }
}