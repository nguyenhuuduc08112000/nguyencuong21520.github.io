const view = {
    async showScreen(screenName) {
        let app = document.querySelector('#app')
        switch (screenName) {
            case 'signIn': {
                app.innerHTML = components.signIn
                utils.setLoadingContent('#btn-sign-in', `Đăng Nhập`)
                let linka = document.querySelector('#aSignIn')
                linka.onclick = function () {
                    view.showScreen('signUp')
                }

                let form = document.querySelector('.form-sign-in')
                form.onsubmit = function (event) {
                    event.preventDefault()

                    let signInInfo = {
                        email: form.email.value.trim().toLowerCase(),
                        password: form.password.value
                    }

                    let checkPassword = null
                    if (!signInInfo.password) {
                        checkPassword = 'Vui lòng điền mật khẩu'
                    } else if (signInInfo.password.length < 6) {
                        checkPassword = 'Mật khẩu quá ngắn'
                    }

                    let validateResult = [
                        utils.Validate(signInInfo.email, '#email-error', 'Vui lòng nhập email'),
                        utils.Validate(signInInfo.password && signInInfo.password.length >= 6, '#passWord-error', checkPassword)
                    ]

                    if (utils.allPassed(validateResult)) {
                        controller.signIn(signInInfo)
                    }
                }

                break
            }
            case 'signUp': {
                app.innerHTML = components.signUp
                utils.setLoadingContent('#btn-sign-up', `Đăng Kí`)
                let linka = document.querySelector('#aSignUp')
                linka.onclick = function () {
                    view.showScreen('signIn')
                }

                let form = document.querySelector('.form-sign-up')
                form.onsubmit = function (event) {
                    event.preventDefault()

                    let signUpInfo = {
                        fullName: form.fullName.value.trim(),
                        email: form.email.value.trim().toLowerCase(),
                        password: form.password.value,
                        confirmPassword: form.confirmPassword.value
                    }

                    let checkPassword = null
                    if (!signUpInfo.password) {
                        checkPassword = 'Vui lòng điền mật khẩu'
                    } else if (signUpInfo.password.length < 6) {
                        checkPassword = 'Mật khẩu quá ngắn'
                    }

                    let validateResult = [
                        utils.Validate(signUpInfo.fullName, '#fullName-error', 'Vui lòng điền tên'),
                        utils.Validate(signUpInfo.email, '#email-error', 'Vui lòng điền email'),
                        utils.Validate(signUpInfo.password && signUpInfo.password.length >= 6, '#passWord-error', checkPassword),
                        utils.Validate(signUpInfo.password == signUpInfo.confirmPassword, '#confirmPassWord-error', 'Mật khẩu không chính xác')
                    ]

                    if (utils.allPassed(validateResult)) {
                        controller.signUp(signUpInfo)
                    }

                }

                let googleSignUp = document.querySelector('#googlenek')
                googleSignUp.onclick = function () {
                    controller.googleSignUp()
                }
                break
            }
            case 'home': {
                app.innerHTML = components.home
                if (model.currentUser) {
                    let user = firebase.auth().currentUser.displayName
                    utils.setText('#dangNhapChange', user)
                    utils.setLoadingContent('#dangKyChange', `<i class="fas fa-sign-out-alt"></i>`)
                }
                let out = document.querySelector('#dangKyChange')
                let innek = document.querySelector('#dangNhapChange')
                out.onclick = function () {
                    if (model.currentUser) {
                        firebase.auth().signOut()
                        model.currentUser = null
                    } else
                        view.showScreen('signUp')
                }
                innek.onclick = function () {
                    if (model.currentUser) {} else
                        view.showScreen('signIn')
                }
                controller.loadDataFromDataWhereToGo()
                await controller.loadDataFromDataUserPush()


                let pushHashTags = document.querySelectorAll('.input-tag')
                for (let hashTag of pushHashTags) {
                    hashTag.onclick = function (event) {
                        let currentHashTag = event.target;
                        let inputHashTag = document.querySelector('.hashTag')
                        inputHashTag.value += currentHashTag.innerText
                    }
                }

                let formPostPlace = document.querySelector('#form-input-user-wrapper')
                formPostPlace.onsubmit = async function (event) {
                    event.preventDefault()
                    utils.setLoadingContent('#zxcvb', `<div class="lds-facebook"><div></div><div></div><div></div></div>`)
                    let title = formPostPlace.title.value.trim()
                    let address = formPostPlace.address.value.trim()
                    let type = formPostPlace.type.value.trim()
                    let hashtag = formPostPlace.hashtag.value.trim()
                    let content = formPostPlace.content.value.trim()
                    let images = [];
                    let inputUpLoad = document.querySelector('.upLoad-file')
                    var fileList = inputUpLoad.files;
                    for (file of fileList) {
                        let url = await controller.upLoadImage(file)
                        images.push(url);
                    }
                    controller.addData(title, address, type, hashtag, content, images)
                }

                let buttonSelectLeft = document.querySelector('#kham-pha-ben-trai')
                buttonSelectLeft.onclick = async function () {
                    utils.topFunction()
                    let data = model.dataWhereToGo
                    let data1 = []
                    for (let i = 0; i < 6; i++) {
                        data1[i] = data[i]
                    }
                    view.showListData(data1)

                    // add like 
                    let currentUser = firebase.auth().currentUser.displayName
                    for (let cardIndex of data1) {
                        let id = cardIndex.id
                        let like = document.querySelector(`.like-${id}`)
                        like.onclick = function () {
                            controller.addLike(currentUser,id)                            
                        }
                    }
                    const listProduct = document.getElementsByClassName("clickForAddData")
                    controller.getDataWhenClick(listProduct, data1)

                }

                let formsearch = document.querySelector('.searchPlace')
                formsearch.onsubmit = async function (event) {
                    event.preventDefault()
                    let dataSearch = formsearch.search.value + " ";
                    if (dataSearch.length > 1) {
                        utils.setLoadingContent('#search-icon', `<div class="lds-facebook" style="height: 36px;"><div></div><div></div><div></div></div>`)
                        let pattern = dataSearch.replace(/hà nội/g, ' ').replace(/\s{1,}/g, ' ').replace(/(.*?)\s/g, "($1)|");
                        pattern = pattern.substr(0, pattern.length - 1);
                        await controller.searchPlace(pattern)

                        const listProduct = document.getElementsByClassName("clickForAddData")
                        controller.getDataWhenClick(listProduct, model.dataSearch)
                    }
                }
            }
        }
    },
    showListData(data) {
        if (data) {
            let listContainer = document.querySelector('#body-home-nek')
            listContainer.innerHTML = components.menu

            let card = document.querySelector('#cacdeck')
            for (let data1 of data) {
                let id = data1.id
                let html = `<div class="col-md-4 col-sm-6"style="margin-bottom: 30px;">
                <div class="card">
                    <span class="content-span" style="padding: 5px 0px 0px 10px"><i class="fas fa-user-tie"></i> Nguyễn Văn Cường</span>
                    <div class="show-time-user" style="margin-left:36px !important; ">18:00 21/05/2000</div>
                    <img class="card-img-top img-fluid img-cuong" src="${data1.image}" alt="Đức ơi là đức">
                    <div class="card-body text-center">
                    <p class="type-name-incard">${data1.time}</p>
                    <h4>${data1.title}</h4>
                    <p class="content-incrad">${data1.content}</p>
                    <div class="container-fluid">
                        <div class="left-incrad-wrapper">
                            <div class="left-incard-content-wrapper">
                            <div class="left-incard-content-wrapper dropdown">
                            <p data-toggle="dropdown">${data1.like} <i class="fas fa-heart-circle like-${id}"></i></p>
                            <ul class="dropdown-menu">
                                  <li class="dropdown-header"><strong>Người thích</strong></li>
                                  <li>Nguyễn Văn Cường</li>
                                  <li>Nguyễn Hồng Hà</li> 
                                  <li>Nguyễn Văn Cường</li>
                                  <li>Nguyễn Hồng Hà</li>
                                  <li>Nguyễn Văn Cường</li>
                                  <li>Nguyễn Hồng Hà</li>                        
                                </ul>
                          </div>
                            </div>
                        </div>
                        <div class="right-incrad-wrapper">
                            <button class="btn btn-outline-light text-dark" data-toggle="modal" data-target="#modalYT${id}">Chi tiết</button>
              <!-- alooooo -->
                    <div class="modal fade" id="modalYT${id}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">

                  <!--Content-->
                  <button type="button" style="width:auto" class="close" data-dismiss="modal">&times;</button>
                  <div class="modal-content">

                    <!--Body-->
                    <div class="modal-body mb-0 p-0">

                      <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                        <img class="embed-responsive-item"
                          src="${data1.image}" alt="lại mất ảnh r hjc">
                      </div>
                      <div class="content-cac-ban-oi">
                        <h1>${data1.title}</h1>
                        <div class="modal-tag">
                          <a>${data1.hashtag}</a>
                          
                        </div>
                        <div class="boc-noi-dung">
                          <p>${data1.content}</p>
                        </div>
                      </div>


                    </div>

                    <!--Footer-->
                    <div class="modal-footer flex-column flex-md-row">
                      <p>1 <i class="fas fa-heart-circle"></i></p>
                      <span class="">${data1.address}</span>
                      <div class="boc-cai-button">
                        <button type="button" class="btn btn-outline-light text-dark clickForAddData" data-dismiss="modal">Thêm vào list</button>
                      </div>

                    </div>

                  </div>
                  <!--/.Content-->

                </div>
              </div>
              <!-- aloooo -->
            </div>
          </div>
        </div>
      </div>
      </div>`
                card.innerHTML += html
            }
            // const listProduct = document.getElementsByClassName("card")
            // let cart = [];
            // for (let i = 0; i < listProduct.length; i++) {
            //     listProduct.item(i).onclick = function(){
            //         cart.push(visit[i]);
            //         localStorage.setItem("cart", JSON.stringify(cart))
            //         let cuongalo =JSON.parse(localStorage.getItem("cart"));           
            //         console.log(cart)
            //         console.log('cuong',cuongalo)
            //     }
            // }
        }
    }
}

// function triggerUploadFile() {
// document.querySelector('.upLoad-file').click()
// }