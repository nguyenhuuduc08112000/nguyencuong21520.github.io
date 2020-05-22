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
    },
    updateDataChange(newPlace){
        if(model.dataWhereToGo){
            let foundIndex = model.dataWhereToGo.findIndex(function(place){
                return place.id == newPlace.id
            })
            if(foundIndex>=0){
                model.dataWhereToGo[foundIndex] =  newPlace
            } else{
                model.dataWhereToGo.unshift(newPlace)
            }
        }
    },
}