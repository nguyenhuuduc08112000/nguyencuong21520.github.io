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
                await controller.loadDataFromDataWhereToGo()
                controller.setUpDataChange()
                controller.loadDataFromDataUserPush()

                // push hash tag
                let pushHashTags = document.querySelectorAll('.input-tag')
                for (let hashTag of pushHashTags) {
                    hashTag.onclick = function (event) {
                        let currentHashTag = event.target;
                        let inputHashTag = document.querySelector('.hashTag')
                        inputHashTag.value += currentHashTag.innerText
                    }
                }
                // push data to firebase
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
                // show data from dataWhereToGo
                let buttonSelectLeft = document.querySelector('#kham-pha-ben-trai')
                buttonSelectLeft.onclick = async function () {
                    utils.topFunction()

                    let data = model.dataWhereToGo
                    let data1 = []
                    for (let i = 0; i < 21; i++) {
                        data1[i] = data[i]
                    }
                    view.showListData(data1, 1)
                }
                // show tour
                let buttonSelectRight = document.querySelector('#kham-pha-ben-phai')
                buttonSelectRight.onclick = async function () {
                    let listContainer = document.querySelector('#body-home-nek')
                    listContainer.innerHTML = components.tour
                    utils.topFunction()
                }
                // search data from dataWhereToGo
                let formsearch = document.querySelector('.searchPlace')
                formsearch.onsubmit = async function (event) {
                    event.preventDefault()
                    let dataSearch = formsearch.search.value + " ";
                    if (dataSearch.length > 1) {
                        utils.setLoadingContent('#search-icon', `<div class="lds-facebook" style="height: 36px;"><div></div><div></div><div></div></div>`)
                        let pattern = dataSearch.replace(/hà nội/g, ' ').replace(/\s{1,}/g, ' ').replace(/(.*?)\s/g, "($1)|");
                        pattern = pattern.substr(0, pattern.length - 1);
                        await controller.searchPlace(pattern)

                    }
                }
            }
        }
    },
    showListData: async function (data, index) {
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
                        <div class="left-incrad-wrapper left-incard-${id}">

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
            view.showNextPrePage(index)
            for (let i = 1; i < 6; i++) {
                let select = document.querySelector(`#id-page-${i}`)
                select.onclick = function () {
                    let data = model.dataWhereToGo
                    let data1 = []
                    for (let x = 0; x < 21; x++) {
                        if (i == 5) {
                            data1[x] = data[80 + x]
                        } else
                            data1[x] = data[(i - 1) * 20 + x]
                    }
                    view.showListData(data1, i)
                }
            }
            view.showLike(data)
            view.getDataForAddLike(data)
            const listProduct = document.getElementsByClassName("clickForAddData")
            controller.getDataWhenClick(listProduct, data)
        }
    },
    showLike: function (data) {
        for (let x of data) {
            let id = x.id
            listUserLike = document.querySelector(`.left-incard-${id}`)
            let html = `<div class="left-incard-content-wrapper dropdown">
        <p data-toggle="dropdown">${x.like.length} <i class="fas fa-heart-circle like-${id}"></i></p>
        <ul class="dropdown-menu">
              <li class="dropdown-header"><strong>Người thích</strong></li>
              <div id="listUserLike-${id}">
              </div>                       
        </ul>
        </div>`
            listUserLike.innerHTML += html
            let html0 = document.querySelector(`#listUserLike-${id}`)
            for (let y of x.like) {
                let l = `<li>${y}</li>`
                html0.innerHTML += l
            }
        }

    },
    getDataForAddLike: function (data) {
        if (model.currentUser) {
            let currentUser = firebase.auth().currentUser.displayName
            for (let cardIndex of data) {
                let id = cardIndex.id
                let like = document.querySelector(`.like-${id}`)
                like.onclick = function () {
                    controller.addLike(currentUser, id)
                }
            }
        }
    },
    showNextPrePage: async function (index) {

        let id_1 = ''
        let id_2 = ''
        let id_3 = ''
        let id_4 = ''
        let id_5 = ''

        if (index == 1) {
            id_1 = 'active'
        }
        if (index == 2) {
            id_2 = 'active'
        }
        if (index == 3) {
            id_3 = 'active'
        }
        if (index == 4) {
            id_4 = 'active'
        }
        if (index == 5) {
            id_5 = 'active'
        }

        let nextPre = document.querySelector('#next-pre-page')

        nextPre.innerHTML = `  <ul class="pagination">

        <li id="id-page-1" class="page-item  ${id_1}"><a class="page-link" href="#">1</a></li>
        <li id="id-page-2" class="page-item  ${id_2}"><a class="page-link" href="#">2</a></li>
        <li id="id-page-3" class="page-item  ${id_3}"><a class="page-link" href="#">3</a></li>
        <li id="id-page-4" class="page-item  ${id_4}"><a class="page-link" href="#">4</a></li>
        <li id="id-page-5" class="page-item  ${id_5}"><a class="page-link" href="#">5</a></li>

          </ul>`

    }
}

// function triggerUploadFile() {
// document.querySelector('.upLoad-file').click()
// }