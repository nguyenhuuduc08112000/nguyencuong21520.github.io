const components = {
    signIn: `<section class="form-sign-in-container">
    <form class="form-sign-in">
        <h1>Đăng Nhập</h1>
        <div class="txtb">
            <input type="email" name="email" placeholder="Email">
            <span></span>
            <div class="alert-error" id="email-error"></div>
        </div>
        <div class="txtb">
            <input type="password" name = "password" placeholder="Mật khẩu">
            <span></span>
            <div class="alert-error" id="passWord-error"></div>
        </div>
        <button id="btn-sign-in"  class="logbtn" type="submit">Đăng nhập</button>
        <div class="bottom-in">
            Bạn chưa có tài khoản?<a id= "aSignIn"href="#"> Đăng kí</a>
        </div>
        <div class="social-media">
            <ul>
                <li id="fbnek"><img src="img/FbIcon.png"></li>
                <li id="googlenek"><img src="img/googleIcon.png"></li>
                <li id="phonenek"><img src="img/phoneIcon.png"></li>
                <li id="githubnek"><img src="img/githubIcon.png"></li>
            </ul>
        </div>
    </form>
</section>`,
    signUp: `<section class="form-sign-up-container">
    <form class="form-sign-up">
        <h1>Đăng Kí</h1>
        <div id ="form-input-signup-wrapper">
        <div class="txtbup">
            <input type="text" name="fullName" placeholder="Họ tên">
            <span></span>
            <div class="alert-error" id="fullName-error"></div>
            
        </div>
        <div class="txtbup">
            <input type="email" name="email" placeholder="Email">
            <span></span>
            <div class="alert-error" id="email-error"></div>
        </div>
        <div class="txtbup">
            <input type="password" name="password" placeholder="Mật khẩu">
            <span></span>
            <div class="alert-error" id="passWord-error"></div>
        </div>
        <div class="txtbup">
            <input type="password" name="confirmPassword" placeholder="Xác nhận mật khẩu">
            <div class="alert-error" id="confirmPassWord-error"></div>
            <div class="alert-success" id="sign-up-success"></div>
            <span></span>
            
        </div>
        </div>
        <button id="btn-sign-up" class="logbtn" type="submit" ></button>
        <div class="bottom-up">
            Bạn đã có tài khoản?<a id="aSignUp" href="#"> Đăng Nhập</a>
        </div>
        <div class="social-media social-media-up">
            <ul>
            <li id="fbnek"><img src="img/FbIcon.png"></li>
            <li id="googlenek"><img src="img/googleIcon.png"></li>
            <li id="phonenek"><img src="img/phoneIcon.png"></li>
            <li id="githubnek"><img src="img/githubIcon.png"></li>
            </ul>
        </div>
    </form>
</section>`,
    home: `<nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
    <div class="container-fluid">
        <a class="navbar-branch mr-4" href="#" onclick="utils.showHomeWhenClickOnLogo()">
            <img height="45px" src="./img/logo.JPG" style="border-radius: 50%;">
            Where to go</a>
        <form class="form-inline input-nav searchPlace" action="/action_page.php">
            <input class="form-control mr-sm-2" type="text" name="search" placeholder="Tìm kiếm">
            <button id="search-icon" class="btn btn-outline-light" type="submit"> <i class="fas fa-search"></i>
            </button>
        </form>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Home</a>
                </li>
                <li class="nav-item" onclick="utils.chatOpen()">
                    <a class="nav-link" href="#">Chat</a>
                </li>
                <li class="nav-item mr-4">
                    <a class="nav-link" href="#">Team</a>
                </li>
                <li class="nav-item">
                    <a id="dangNhapChange" class="nav-link pr-0" href="#">Đăng Nhập</a>
                </li>
                <li class="nav-item">
                    <a id="dangKyChange" class="nav-link" href="#">Đăng Ký</a>
                </li>

            </ul>
        </div>
    </div>
</nav>
<section id="body-home-nek">
    <!-- XXX  body  XXX -->
    <!-- banner introduce -->
    <div id="demo" class="carousel slide" data-ride="carousel">

        <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
        </ul>


        <div class="carousel-inner">
            <div class="carousel-item active">
                <img style="width: 100%; " src="./img/banner11.JPG" alt="Sập Mẹ Web r">

            </div>
            <div class="carousel-item">
                <img style="width: 100%;height: auto;" src="./img/c2.jpg" alt="Sập Mẹ Web r">
                <div class="carousel-caption">
                    <h2 class="display-2">Giới Thiệu Nè</h2>
                    <h4>nói gì thì nói</h4>
                    <h4>cac kieu cac kieu</h4>
                    <h4>font chữ Huyền chọn đi nhé hihi</h4>

                </div>
            </div>
            <div class="carousel-item">
                <img style="width: 100%;height: auto;" src="./img/c1.jpg" alt="Sập Mẹ Web r">
            </div>
        </div>


        <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
        </a>
    </div>
    <!-- form input content -->
    <div class="container">
        <h2>Bạn có địa điểm gì mới</h2>
        <p>Chia sẻ đi bạn êi</p>
        <form id="form-input-user-wrapper" class="row">
            <div class="left-input-user-wrapper col-md-6 col-12">
                <div class="input-group input-group-sm bbbx">
                    <div class="input-group-prepend">
                        <p>Tên:</p>
                    </div>
                    <input type="text" name="title" class="form-control">
                </div>
                <span></span>
                <div class="input-group input-group-sm bbbx">
                    <div class="input-group-prepend">
                        <p>Đia Chỉ:</p>
                    </div>
                    <input type="text" name="address" class="form-control">
                </div>
                <span></span>
                <div class="input-group input-group-sm bbbx">
                    <div class="input-group-prepend">
                        <p>Thể Loại:</p>
                    </div>
                    <input type="text" name="type" class="form-control">
                </div>
                <span></span>
                <div class="input-group input-group-sm bbbx">
                    <div class="input-group-prepend">
                        <p>Hashtag:</p>
                    </div>
                    <input type="text" name="hashtag" class="form-control hashTag"">
            </div>
            <span></span>
            <div class=" input-tag" style="width: fit-content;">
                    <a class="club">#club</a>
                    <a class="nightlife">#nightlife</a>
                    <a class="night">#Buổitối</a>
                    <a class="noon">#Buổitrưa</a>
                    <a class="morning">#BuổiSáng</a>
                    <a class="fun">#Fun</a>
                </div>
            </div>
            <div class="right-input-user-wrapper col-md-6 col-12">
                <label for="comment">Content:</label>
                <textarea class="form-control" rows="5" id="comment" name="content"></textarea>
                <!-- <i onclick="triggerUploadFile()" class="far fa-paperclip">Thêm Ảnh</i> -->
                <input type="file" class="upLoad-file btn" style=" margin-top: 10px;" multiple name="ChooseFile"
                    id="" placeholder="Thêm Ảnh">
            </div>
            <div style="width: 100%;display: flex;justify-content: flex-end;margin-right: 40px;">
                <button class="btn " id="zxcvb"
                    style="border-radius: 20px;padding-bottom: 0px;padding-top: 0px;height: 38px;color:white;"
                    type="submit">Đăng</button>
            </div>
        </form>
    </div>
    <div class="container">
        <div class="blog-card">
            <input type="radio" name="select" id="tap-1" checked>
            <input type="radio" name="select" id="tap-2">
            <input type="radio" name="select" id="tap-3">
            <input type="radio" name="select" id="tap-4">
            <input type="checkbox" id="imgTap">
            <div class="sliders">
                <label for="tap-1" class="tap tap-1"></label>
                <label for="tap-2" class="tap tap-2"></label>
                <label for="tap-3" class="tap tap-3"></label>
                <label for="tap-4" class="tap tap-4"></label>
            </div>
            <div class="inner-part row">
                <div class="col-md-5 col-ms-12" style="padding-right:0px ;">
                <label for="imgTap" class="img">
                    <img class="img-1" src="./img/thelavish.jpg">
                </label>
                </div>
                <div class="col-md-7 col-ms-12" style="padding-left:0px ;">
                <div class="content content-1">
                    <span class="content-span"><i class="fas fa-user-tie"></i> Nguyễn Văn Cường</span>
                    <div class="show-time-user">18:00 21/05/2000</div>
                    <div class="title">The Lavish</div>
                    <div class="show-type-user">Quán bar</div>
                    <div class="input-tag padding-0px">
                        <a>#club</a>
                        <a>#nightlife</a>
                        <a>#Buổitối</a>
                    </div>
                    <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo animi
                        atque aliquid pariatur voluptatem numquam, quisquam. Neque est voluptates doloribus!</div>
                    <div class="conatiner-fluid home-tim">
                        <p class="left-incard-wrapper-home">1 <i class="fas fa-heart-circle"></i></p>

                        <div class="right-incard-wapper-home">
                            <span>12 Hàng Tre, Hoàn Kiếm, Hà Nội</span>
                            <button class="btn">Liên Hệ</button>
                        </div>

                    </div>
                </div>
            </div>
            </div>
            <div class="inner-part row">
                <div class="col-md-5 col-ms-12" style="padding-right:0px ;">
                <label for="imgTap" class="img">
                    <img class="img-2" src="./img/thelavish.jpg">
                </label>
                </div>
                <div class="col-md-7 col-ms-12" style="padding-left:0px ;">
                <div class="content content-2">
                    <span class="content-span"><i class="fas fa-user-tie"></i> Nguyễn Văn Cường</span>
                    <div class="show-time-user">18:00 21/05/2000</div>
                    <div class="title">The Lavish</div>
                    <div class="show-type-user">Quán bar</div>
                    <div class="input-tag padding-0px">
                        <a>#club</a>
                        <a>#nightlife</a>
                        <a>#Buổitối</a>
                    </div>
                    <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo animi
                        atque aliquid pariatur voluptatem numquam, quisquam. Neque est voluptates doloribus!</div>
                    <div class="conatiner-fluid home-tim">
                        <p class="left-incard-wrapper-home">1 <i class="fas fa-heart-circle"></i></p>

                        <div class="right-incard-wapper-home">
                            <span>12 Hàng Tre, Hoàn Kiếm, Hà Nội</span>
                            <button class="btn">Liên Hệ</button>
                        </div>

                    </div>
                </div>
            </div>
            </div>
            <div class="inner-part row">
                <div class="col-md-5 col-ms-12" style="padding-right:0px ;">
                <label for="imgTap" class="img">
                    <img class="img-3" src="./img/thelavish.jpg">
                </label>
                </div>
                <div class="col-md-7 col-ms-12" style="padding-left:0px ;">
                <div class="content content-3">
                    <span class="content-span"><i class="fas fa-user-tie"></i> Nguyễn Văn Cường</span>
                    <div class="show-time-user">18:00 21/05/2000</div>
                    <div class="title">The Lavish</div>
                    <div class="show-type-user">Quán bar</div>
                    <div class="input-tag padding-0px">
                        <a>#club</a>
                        <a>#nightlife</a>
                        <a>#Buổitối</a>
                    </div>
                    <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo animi
                        atque aliquid pariatur voluptatem numquam, quisquam. Neque est voluptates doloribus!</div>
                    <div class="conatiner-fluid home-tim">
                        <p class="left-incard-wrapper-home">1 <i class="fas fa-heart-circle"></i></p>

                        <div class="right-incard-wapper-home">
                            <span>12 Hàng Tre, Hoàn Kiếm, Hà Nội</span>
                            <button class="btn">Liên Hệ</button>
                        </div>

                    </div>
                </div>
            </div>
            </div>
            <div class="inner-part row">
                <div class="col-md-5 col-ms-12" style="padding-right:0px ;">
                <label for="imgTap" class="img">
                    <img class="img-4" src="./img/thelavish.jpg">
                </label>
                </div>
                <div class="col-md-7 col-ms-12" style="padding-left:0px ;">
                <div class="content content-4">
                    <span class="content-span"><i class="fas fa-user-tie"></i> Nguyễn Văn Cường</span>
                    <div class="show-time-user">18:00 21/05/2000</div>
                    <div class="title">The Lavish</div>
                    <div class="show-type-user">Quán bar</div>
                    <div class="input-tag padding-0px">
                        <a>#club</a>
                        <a>#nightlife</a>
                        <a>#Buổitối</a>
                    </div>
                    <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo animi
                        atque aliquid pariatur voluptatem numquam, quisquam. Neque est voluptates doloribus!</div>
                    <div class="conatiner-fluid home-tim">
                        <p class="left-incard-wrapper-home">1 <i class="fas fa-heart-circle"></i></p>

                        <div class="right-incard-wapper-home">
                            <span>12 Hàng Tre, Hoàn Kiếm, Hà Nội</span>
                            <button class="btn">Liên Hệ</button>
                        </div>

                    </div>
                </div>
            </div>
            </div>

        </div>
    </div>
    <!-- show infomation of HaNoi -->
    <div class="container thong-tin-noi-bat">
        <h2>Thông tin nổi bật</h2>
        <h4>Những thông tin mới nhất về Hà Nội</h4>

        <div class="container mt-4">
            <div id="demo1" class="carousel slide" data-ride="carousel">

                <ul class="carousel-indicators">
                    <li data-target="#demo1" data-slide-to="0" class="active"></li>
                    <li data-target="#demo1" data-slide-to="1"></li>
                </ul>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="row">
                            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-6">
                                <form class="form-item-nhd">
                                    <div class="text-center nhd">
                                        <a href="https://dulichvietnam.com.vn/5-dieu-nhat-dinh-phai-lam-de-cam-nhan-ve-dep-ha-noi-sang-som.html"
                                            title="5 điều nhất định phải làm để cảm nhận vẻ đẹp Hà Nội sáng sớm">
                                            <img src="https://dulichvietnam.com.vn/data/ha-noi-sang-som-8.jpg"
                                                class="rounded"
                                                alt="5 điều nhất định phải làm để cảm nhận vẻ đẹp Hà Nội sáng sớm">
                                        </a>
                                    </div>
                                    <div class="hashtag-nhd">
                                        <button type="button" class="btn btn-primary btn-sm">
                                            Hà Nội
                                        </button>
                                    </div>
                                    <h5 class="content-nhd">
                                        <a
                                            href="https://dulichvietnam.com.vn/5-dieu-nhat-dinh-phai-lam-de-cam-nhan-ve-dep-ha-noi-sang-som.html">
                                            5 điều nhất định phải làm để cảm nhận vẻ đẹp Hà Nội sáng sớm
                                        </a>
                                    </h5>
                                    <div class="view-nhd">
                                        <div class="rate-nhd">
                                            <i class="fas fa-star" style="color: #fbfb02e3;"></i>
                                            <span class="start-nhd">0.0</span>
                                            /
                                            <span class="finish-nhd">5.0</span>
                                        </div>
                                        <div class="like-nhd">
                                            <i class="far fa-thumbs-up" style="color: #1313aad9;"></i>
                                            <span>0</span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-6">
                                <form class="form-item-nhd">
                                    <div class="text-center nhd">
                                        <a href="https://zingnews.vn/50-khoanh-khac-dang-yeu-cua-ha-noi-post882074.html"
                                            title="50 khoảnh khắc đáng yêu của Hà Nội">
                                            <img src="https://znews-photo.zadn.vn/w860/Uploaded/lerl/2018_10_05/_HTV138400.jpg"
                                                class="rounded" alt="50 khoảnh khắc đáng yêu của Hà Nội">
                                        </a>
                                    </div>
                                    <div class="hashtag-nhd">
                                        <button type="button" class="btn btn-primary btn-sm">Hà Nội</button>
                                    </div>
                                    <h5 class="content-nhd">
                                        <a
                                            href="https://zingnews.vn/50-khoanh-khac-dang-yeu-cua-ha-noi-post882074.html">
                                            50 khoảnh khắc đáng yêu của thủ đô Hà Nội
                                        </a>
                                    </h5>
                                    <div class="view-nhd">
                                        <div class="rate-nhd">
                                            <i class="fas fa-star" style="color: #fbfb02e3;"></i>
                                            <span class="start-nhd">0.0</span>
                                            /
                                            <span class="finish-nhd">5.0</span>
                                        </div>
                                        <div class="like-nhd">
                                            <i class="far fa-thumbs-up" style="color: #1313aad9;"></i>
                                            <span>0</span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-6">
                                <form class="form-item-nhd">
                                    <div class="text-center nhd">
                                        <a href="https://mytour.vn/location/13721-cac-hot-instagram-goi-y-nhung-dia-diem-check-in-da-dep-lai-con-free-o-ha-noi.html"
                                            title="Các Hot Instagram Gợi Ý Những Địa Điểm Check In Đã Đẹp Lại Còn Free Ở Hà Nội">
                                            <img src="https://lh5.googleusercontent.com/kIXHA46vhk0mE7Lg5J3dAe0NKoj1qmV9LQy_IL5nBevT3yh22bOZcPara5cUAuuNYuqh2pDnyWyVLqQssEagn111Uxi_Hbr9Ln_NcapO5wEAmmoc1C5o4WxP4IDBrS__IxwUTyMz"
                                                class="rounded"
                                                alt="Các Hot Instagram Gợi Ý Những Địa Điểm Check In Đã Đẹp Lại Còn Free Ở Hà Nội">
                                        </a>
                                    </div>
                                    <div class="hashtag-nhd">
                                        <button type="button" class="btn btn-primary btn-sm">Hà Nội</button>
                                    </div>
                                    <div class="hashtag-nhd">
                                        <button type="button" class="btn btn-primary btn-sm">Checkin</button>
                                    </div>
                                    <h5 class="content-nhd">
                                        <a
                                            href="https://mytour.vn/location/13721-cac-hot-instagram-goi-y-nhung-dia-diem-check-in-da-dep-lai-con-free-o-ha-noi.html">
                                            Các Hot Instagram Gợi Ý Những Địa Điểm Check In Đã Đẹp Lại Còn Free Ở Hà
                                            Nội
                                        </a>
                                    </h5>
                                    <div class="view-nhd">
                                        <div class="rate-nhd">
                                            <i class="fas fa-star" style="color: #fbfb02e3;"></i>
                                            <span class="start-nhd">0.0</span>
                                            /
                                            <span class="finish-nhd">5.0</span>
                                        </div>
                                        <div class="like-nhd">
                                            <i class="far fa-thumbs-up" style="color: #1313aad9;"></i>
                                            <span>0</span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-6">
                                <form class="form-item-nhd">
                                    <div class="text-center nhd">
                                        <a href="https://saostar.vn/xa-hoi/co-mot-ha-noi-binh-yen-va-gan-gui-trong-mat-ban-be-quoc-te-4684508.html"
                                            title="Có một Hà Nội bình yên và gần gũi trong mắt bạn bè quốc tế">
                                            <img src="https://ss-images.catscdn.vn/wp660/2019/03/01/4684508/cf-giang-4_euzt.jpg"
                                                class="rounded"
                                                alt="Có một Hà Nội bình yên và gần gũi trong mắt bạn bè quốc tế">
                                        </a>
                                    </div>
                                    <div class="hashtag-nhd">
                                        <button type="button" class="btn btn-primary btn-sm">Hà Nội</button>
                                    </div>
                                    <h5 class="content-nhd">
                                        <a
                                            href="https://saostar.vn/xa-hoi/co-mot-ha-noi-binh-yen-va-gan-gui-trong-mat-ban-be-quoc-te-4684508.html">
                                            Có một Hà Nội bình yên và gần gũi trong mắt bạn bè quốc tế
                                        </a>
                                    </h5>
                                    <div class="view-nhd">
                                        <div class="rate-nhd">
                                            <i class="fas fa-star" style="color: #fbfb02e3;"></i>
                                            <span class="start-nhd">0.0</span>
                                            /
                                            <span class="finish-nhd">5.0</span>
                                        </div>
                                        <div class="like-nhd">
                                            <i class="far fa-thumbs-up" style="color: #1313aad9;"></i>
                                            <span>0</span>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row">
                            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-6">
                                <form class="form-item-nhd">
                                    <div class="text-center nhd">
                                        <a href="https://dulichvietnam.com.vn/5-dieu-nhat-dinh-phai-lam-de-cam-nhan-ve-dep-ha-noi-sang-som.html"
                                            title="5 điều nhất định phải làm để cảm nhận vẻ đẹp Hà Nội sáng sớm">
                                            <img src="https://dulichvietnam.com.vn/data/ha-noi-sang-som-8.jpg"
                                                class="rounded"
                                                alt="5 điều nhất định phải làm để cảm nhận vẻ đẹp Hà Nội sáng sớm">
                                        </a>
                                    </div>
                                    <div class="hashtag-nhd">
                                        <button type="button" class="btn btn-primary btn-sm">
                                            Hà Nội
                                        </button>
                                    </div>
                                    <h5 class="content-nhd">
                                        <a
                                            href="https://dulichvietnam.com.vn/5-dieu-nhat-dinh-phai-lam-de-cam-nhan-ve-dep-ha-noi-sang-som.html">
                                            5 điều nhất định phải làm để cảm nhận vẻ đẹp Hà Nội sáng sớm
                                        </a>
                                    </h5>
                                    <div class="view-nhd">
                                        <div class="rate-nhd">
                                            <i class="fas fa-star" style="color: #fbfb02e3;"></i>
                                            <span class="start-nhd">0.0</span>
                                            /
                                            <span class="finish-nhd">5.0</span>
                                        </div>
                                        <div class="like-nhd">
                                            <i class="far fa-thumbs-up" style="color: #1313aad9;"></i>
                                            <span>0</span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-6">
                                <form class="form-item-nhd">
                                    <div class="text-center nhd">
                                        <a href="https://zingnews.vn/50-khoanh-khac-dang-yeu-cua-ha-noi-post882074.html"
                                            title="50 khoảnh khắc đáng yêu của Hà Nội">
                                            <img src="https://znews-photo.zadn.vn/w860/Uploaded/lerl/2018_10_05/_HTV138400.jpg"
                                                class="rounded" alt="50 khoảnh khắc đáng yêu của Hà Nội">
                                        </a>
                                    </div>
                                    <div class="hashtag-nhd">
                                        <button type="button" class="btn btn-primary btn-sm">Hà Nội</button>
                                    </div>
                                    <h5 class="content-nhd">
                                        <a
                                            href="https://zingnews.vn/50-khoanh-khac-dang-yeu-cua-ha-noi-post882074.html">
                                            50 khoảnh khắc đáng yêu của thủ đô Hà Nội
                                        </a>
                                    </h5>
                                    <div class="view-nhd">
                                        <div class="rate-nhd">
                                            <i class="fas fa-star" style="color: #fbfb02e3;"></i>
                                            <span class="start-nhd">0.0</span>
                                            /
                                            <span class="finish-nhd">5.0</span>
                                        </div>
                                        <div class="like-nhd">
                                            <i class="far fa-thumbs-up" style="color: #1313aad9;"></i>
                                            <span>0</span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-6">
                                <form class="form-item-nhd">
                                    <div class="text-center nhd">
                                        <a href="https://mytour.vn/location/13721-cac-hot-instagram-goi-y-nhung-dia-diem-check-in-da-dep-lai-con-free-o-ha-noi.html"
                                            title="Các Hot Instagram Gợi Ý Những Địa Điểm Check In Đã Đẹp Lại Còn Free Ở Hà Nội">
                                            <img src="https://lh5.googleusercontent.com/kIXHA46vhk0mE7Lg5J3dAe0NKoj1qmV9LQy_IL5nBevT3yh22bOZcPara5cUAuuNYuqh2pDnyWyVLqQssEagn111Uxi_Hbr9Ln_NcapO5wEAmmoc1C5o4WxP4IDBrS__IxwUTyMz"
                                                class="rounded"
                                                alt="Các Hot Instagram Gợi Ý Những Địa Điểm Check In Đã Đẹp Lại Còn Free Ở Hà Nội">
                                        </a>
                                    </div>
                                    <div class="hashtag-nhd">
                                        <button type="button" class="btn btn-primary btn-sm">Hà Nội</button>
                                    </div>
                                    <div class="hashtag-nhd">
                                        <button type="button" class="btn btn-primary btn-sm">Checkin</button>
                                    </div>
                                    <h5 class="content-nhd">
                                        <a
                                            href="https://mytour.vn/location/13721-cac-hot-instagram-goi-y-nhung-dia-diem-check-in-da-dep-lai-con-free-o-ha-noi.html">
                                            Các Hot Instagram Gợi Ý Những Địa Điểm Check In Đã Đẹp Lại Còn Free Ở Hà
                                            Nội
                                        </a>
                                    </h5>
                                    <div class="view-nhd">
                                        <div class="rate-nhd">
                                            <i class="fas fa-star" style="color: #fbfb02e3;"></i>
                                            <span class="start-nhd">0.0</span>
                                            /
                                            <span class="finish-nhd">5.0</span>
                                        </div>
                                        <div class="like-nhd">
                                            <i class="far fa-thumbs-up" style="color: #1313aad9;"></i>
                                            <span>0</span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-6">
                                <form class="form-item-nhd">
                                    <div class="text-center nhd">
                                        <a href="https://saostar.vn/xa-hoi/co-mot-ha-noi-binh-yen-va-gan-gui-trong-mat-ban-be-quoc-te-4684508.html"
                                            title="Có một Hà Nội bình yên và gần gũi trong mắt bạn bè quốc tế">
                                            <img src="https://ss-images.catscdn.vn/wp660/2019/03/01/4684508/cf-giang-4_euzt.jpg"
                                                class="rounded"
                                                alt="Có một Hà Nội bình yên và gần gũi trong mắt bạn bè quốc tế">
                                        </a>
                                    </div>
                                    <div class="hashtag-nhd">
                                        <button type="button" class="btn btn-primary btn-sm">Hà Nội</button>
                                    </div>
                                    <h5 class="content-nhd">
                                        <a
                                            href="https://saostar.vn/xa-hoi/co-mot-ha-noi-binh-yen-va-gan-gui-trong-mat-ban-be-quoc-te-4684508.html">
                                            Có một Hà Nội bình yên và gần gũi trong mắt bạn bè quốc tế
                                        </a>
                                    </h5>
                                    <div class="view-nhd">
                                        <div class="rate-nhd">
                                            <i class="fas fa-star" style="color: #fbfb02e3;"></i>
                                            <span class="start-nhd">0.0</span>
                                            /
                                            <span class="finish-nhd">5.0</span>
                                        </div>
                                        <div class="like-nhd">
                                            <i class="far fa-thumbs-up" style="color: #1313aad9;"></i>
                                            <span>0</span>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#demo1" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#demo1" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>
        </div>
    </div>
    <!-- select to show -->
    <div id="demo2" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ul class="carousel-indicators">
            <li data-target="#demo2" data-slide-to="0" class="active"></li>
            <li data-target="#demo2" data-slide-to="1"></li>
            <li data-target="#demo2" data-slide-to="2"></li>
        </ul>

        <!-- The slideshow -->
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img style="width: 100%;" src="./img/c3.jpg" alt="">
            </div>
            <div class="carousel-item">
                <img style="width: 100%;" src="./img/c2.jpg" alt="">
            </div>
            <div class="carousel-item">
                <img style="width: 100%;" src="./img/c1.jpg" alt="">
            </div>
        </div>

        <!-- Left and right controls -->
        <a class="carousel-control-prev" href="#demo2" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo2" data-slide="next">
            <span class="carousel-control-next-icon"></span>
        </a>
        <div class="option-wrapper">
            <div class="left-option-wrapper">
                <div class="left-option-wrapper-content">
                    <p class="title-nek">Danh sách các địa điểm</p>
                    <p class="content-nek">ấn vào đây sẽ ra list danh sách các nơi người dùng đã chia sẻ + data của
                        đức
                        <br> ấn vào thử đi</p>
                    <a id="kham-pha-ben-trai"><button type="button" class="btn btn-primary btn-lg ">Khám
                            Phá</button></a>
                </div>

            </div>
            <div class="right-option-wrapper">
                <div class="right-option-wrapper-content">
                    <p class="title-nek">Các tour quanh Hà Nội</p>
                    <p class="content-nek">ấn vào sẽ hiện ra 1 vài tour gần Hà Nội hoặc list đi chơi luôn <br> ví
                        dụ: đi
                        xp -> đi ăn -> đi uống nước</p>
                    <button type="button" id="kham-pha-ben-phai" class="btn btn-primary btn-lg">Khám Phá</button>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="chat-container">
    <div class="current-conversation">
        <div class="aside-top">

            <div class=" btn-leave-conversation-wrapper" onclick='utils.chatClose()'>
                <button><i class="far fa-times  btn-icon" id="btn-leave-conversation"></i> </button>



            </div>
            <div class=" details-current-conversation">

            </div>

        </div>
        <div class="list-message-chat">
        </div>
        <form class="form-add-message-chat">
            <div class="input-wrapper">
                <input type="text" name="message" placeholder="Enter your message...">
            </div>
            <button type="submit"><i class="fas fa-paper-plane" style="color: rgb(4, 88, 167);"></i></button>
        </form>
    </div>
</section>
<!--XXX footer XXX-->
<footer>
    <div class="container-fluid padding">
        <div class="row text-center">
            <div class="col-md-5">
                <hr class="light">
                <h5>Team</h5>
                <hr class="light">
                <p>Nguyễn Văn Cường</p>
                <p>Nguyễn Hồng Hà</p>
                <p>Phùng Minh Huyền</p>
                <p>Nguyễn Hữu Đức</p>
            </div>
            <div class="col-md-2">
                <img height="200px" style="padding-top: 20px;" src="./img/logo.JPG">
            </div>
            <div class="col-md-5">
                <hr class="light">
                <h5>Liên Hệ</h5>
                <hr class="light">
                <p>wtgmindx@gmail.com</p>
                <p>Hanoi, Vietnam</p>
                <p>0374523912</p>
                <div class="social-media">
                    <ul>
                        <a>
                            <li id="fbnek"><img src="img/FbIcon.png"></li>
                        </a>
                        <a>
                            <li id="googlenek"><img src="./img/instagram.png"></li>
                        </a>
                        <a>
                            <li id="phonenek"><img src="img/messenger.png"></li>
                        </a>
                        <a>
                            <li id="githubnek"><img src="img/zalo.png"></li>
                        </a>
                    </ul>
                </div>
            </div>
            <div class="col-12">
                <hr class="light-80">
                <h5>&copy; Where to go!</h5>
            </div>
        </div>
    </div>
</footer>`,
    menu: `<div style="margin-top: 20px;" class="container container-card">
<h1>list</h1>
<div id="cacdeck" class="row asd">
</div>
<div class="alert alert-success"style="position: unset">
    <strong><i class="fad fa-cart-plus"></i>  <span id="countCard">0</span></strong> Hãy tới <a href="./place.html" class="alert-link">trang ramdom</a>.
  </div>
  <div id ="next-pre-page" style = "display: flex; justify-content: center; " >

    </div>
</div> `,
    tour: `    <section style="margin-top: 20px; max-width:1500px" class="container container-card">
    <h2 style="text-align: center;">Các Tour Du Lịch Trong Ngày</h2>
    <div class="tour-deck row">
        <div class="col-xs-3 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-12">
            <div class="tour">
                <h3>Du Lịch Hà Nội</h3>
                <img class="card-img-top img-fluid img-nhd" src="https://www.vietfuntravel.com.vn/image/cache/data/hanoi/hanoi_/1284430849_chua1cot-cr-466x310.jpg">
                <div class="tour-body">
                    <h5>Điạ chỉ: Hà Nội</h5>
                    <h5>Thời gian: 1 ngày</h5>
                    <h5>Phương tiện: Xe máy, Ôtô</h5>
                    <h5>Giá Cả: 100.000đ</h5>
                    <div class="incrad-wrapper">
                        <button type="button" class="btn btn-outline-light text-dark" data-toggle="modal" data-target="#modalYT">Lịch Trình</button>
                        <div class="modal fade" id="modalYT" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
                            <div class="modal-dialog modal-lg" role="document">
                                <!--Content-->
                                <div class="modal-content">
                                <!--Body-->
                                <div class="modal-body mb-0 p-0">
                                    <div class="content-cac-ban-oi">
                                        <h1 style="text-align: center;">Lịch Trình</h1>
                                        <div class="boc-noi-dung" style="text-align: justify;">
                                            <p>Thời tiết khí hậu ở Hà Nội được chia ra làm 4 mùa rõ rệt: Xuân – Hạ – Thu – Đông, mỗi mùa lại có những vẻ đẹp đặc trưng riêng mà không giống bất cứ mùa nào. Mùa xuân với những cơn mua phùn nhỏ kéo dài, thời tiết ấm áp tạo điều kiện cho cây cối phát triển và nảy mầm. Mùa hè với tiết trời khá oi bức, những đổi lại bạn sẽ được nghe những tiếng ve râm ran vô cùng thú vị. Mùa thu là khoảnh khắc giao mùa rõ rệt, với các thời tiết hơi se lạnh, mát mẻ, tạo cảm giác dễ chịu, rất thích hợp để đi dạo, chính vì thế thời gian này được xem là thời điểm du lịch Hà Nội lý tưởng nhất. Còn mùa đông ở Hà Nội khá hanh khô và lạnh buốt, nhiều khi nhiệt độ khí hậu có thể giảm xuống mức dưới 10 độ C nên bạn cần chú ý mang đầy đủ quần áo ấm nếu du lịch Hà Nội vào thời điểm này nhé</p>
                                            <h3>Phương tiện du lịch tới Hà Nội</h3>
                                            <p>Có rất nhiều phương tiện di chuyển di chuyển tới Hà Nội như: Xe máy, ô tô khách, máy bay, tàu hỏa… Bạn có thể dựa vào vị trí bạn đang ở và điều kiện kinh tế của mình mà lựa chọn phương tiện sao cho phù hợp</p>
                                            <p>Xe máy, ô tô riêng: Thích hợp với những bạn nào ở ngoại thành Hà Nội hoặc ở những vùng lân cận.</p>
                                            <p>Xe khách: Hà Nội là trung tâm của miền Bắc, vì thế cho dù bạn ở tình nào thì cũng có xe khách đi đến Hà Nội, bạn không phải lo nhé.</p>
                                            <p>Tàu hỏa: Đối với các du khách ở khu vực miền Nam hay miền Trung thì có thể sử dụng tàu hỏa để làm phương tiện di chuyển tới Hà Nội.</p>
                                            <p> Máy bay: Nếu bạn có điều kiện kinh tế và muốn tiết kiệm thời gian di chuyển tới Hà Nội thì có thể sử dụng máy bay. Các chuyến bay tới Hà Nội thường đáp ở sân bay quốc tế Nội Bài, cách trung tâm thành phố Hà Nội khoảng 20km. Từ sân bay, bạn có thể bắt taxi để đi vào trung tâm thành phố với giá khoảng 200.000VND. Hoặc để tiết kiệm tiền, bạn cũng có thể sử dụng tuyến bus 07, 17 để vào thành phố nhé, đó là kinh nghiệm du lịch Hà Nội 1 ngày trọn vẹn, hoàn hảo.</p>
                                        
                                            <h3>Lịch trình du lịch Hà Nội 1 ngày</h3>
                                            <p>Vì thời gian du lịch Hà Nội của bạn chỉ có 1 ngày, nên bận cần phải xuất phát từ sớm để có nhiều thời gian khám phá Hà Nội hơn nhé. Tùy vào điểm đến mà bạn căn giờ đi sao cho khoảng 6h tới Hà Nội là được.</p>
                                            <h5>Buổi sáng:</h5>
                                            <p> 6h: Đầu tiên, khi đặt chân tới Hồ Gươm, bạn tìm quán bún chả – món ăn ngon, nổi tiếng ở Hà Nội để thưởng thức hương vị tuyệt vời. Ăn xong bạn ghé thăm tới quan cà phê hoặc trà đá để tận hưởng được cuộc sống của người dân Hà Nội.
                                            Sau đó, bạn đi tìm khách sạn để nghỉ ngơi ở đây một tối nhé. Bạn nên tìm những khách sạn nằm ngoài khu vực Hồ Gươm và Phố Cổ, bởi giá phòng ở đây cao hơn những địa điểm khác.</p>
                                            <p>8h: Bạn tiếp tục lên đường ghé thăm đến Lăng Bác. Tuy nhiên bạn nhớ phải gửi xe trước khi vào viếng Lăng nhé. Tuy nhiên, lăng Bác đóng cửa vào thứ 2 và thứ 6 hàng tuần, nên bạn cần chú ý đến thời gian đi du lịch. Trong trường hợp bạn du lịch Hà Nội một ngày đúng vào ngày Lăng Bác không mở cửa thì có thể đến chùa Một Cột, nằm ngay sau Lăng và chụp những bức hình lưu niệm ở đây cũng rất tuyệt vời.</p>
                                            
                                            <p>9h: Sau khi ghé thăm Lăng Bác xong, bạn tiếp tục hành trình du lịch Hà Nội 1 ngày đầy thú vị: Đi tới Văn Miếu Quốc Tử Giám ở gần đó, cách Lăng Bác chỉ khoảng 1km, nên rất thuận tiện cho việc di chuyển. Nếu bạn không rõ đường thì hãy hỏi người dân ở xung quanh đây để được chỉ đường cụ thể hơn nhé.
                                            Sau đó bạn tham quan nhanh chóng, rồi đi thăm chùa Trấn Quốc (Nằm cách Lăng 2,5km) – Đây là ngôi chùa lâu đời và nổi tiếng nhất ở Hà Nội.</p>
                                            <p>10h30: Rời khỏi chùa Trấn Quốc, tiếp tục đến Hồ Tây, cách đó khoảng 4km để tận hưởng không gian thiên nhiên trong lành, với những cảnh đẹp của hồ cũng rất hấp dẫn. Nhưng trên đường di chuyển tới Hồ Tây gặp khá nhiều chốt công an, bạn cần chú ý đường đi, chấp hành các luật an toàn giao thông để tránh gặp rắc rối với các chú giao thông nhé.</p>
                                            
                                            <p>12h: Dừng chân nghỉ ngơi tại Hồ Tây và thưởng thức món phở bò hoặc phở cuốn cực nổi tiếng của Hà Nội nằm ngay hồ Trúc Bạch (Ngay sát Hồ Tây). Hoặc thưởng thức kem Hồ Tây cũng là trải nghiệm rất tuyệt vời đấy.</p>
                                            
                                            <h5>Buổi chiều và tối:</h5>
                                            
                                            <p>13h30: Tiếp tục lịch trình du lịch Hà Nội 1 ngày vui vẻ, giá rẻ: Đến đầu giờ chiều, bạn lên xe và đi tham quan tới bảo tàng Dân Tộc Học ở phố Nguyễn Văn Huyên (Cầu Giấy) để có cơ hội khám phá và tìm hiểu về văn hóa lịch sử của người dân Việt Nam.</p>
                                            
                                            <p>15h: Bạn quay lại Hồ Gươm để đi dạo, tản bộ và thưởng thức rất nhiều các món ăn ngon, hấp dẫn (Buổi sáng thường không có gì). Bạn tìm một chỗ gửi xe quanh đó rồi tham quan đền Ngọc Sơn, ngắm cụ rùa. Sau đó bạn đi tới phố Cổ, để khám phá cuộc sống phố xá nhộn nhịp ở Hà Nội.</p>
                                            
                                            <p>17h30: Quay trở lại khách sạn, tắm rửa, ăn tối rồi nghỉ ngơi một chút để lấy sức tối đi dạo.</p>
                                            
                                            <p>20h: Nếu bạn đi du lịch Hà Nội 1 ngày cuối tuần (t6, t7, cn) thì có thể ghé thăm chợ đêm, nằm gần Hồ Gươm. Tại chợ bạn có thể hòa mình vào cuộc sống buôn bán về đêm sôi nổi, tấp nập và mua sắm những món đồ handmade, đồ linh tinh hay một số món đồ Second Hand cũng khá hay nhé, bên cạnh đó vẫn có rất nhiều những gian hàng bán đồ quần áo, mỹ phẩm, phụ kiện… cho bạn thỏa sức mua sắm.</p>
                                        </div>
                                    </div>       
                                </div>
                                <!--Footer-->
                                <div class="modal-footer flex-column flex-md-row">
                                <div class="boc-cai-button">
                                    <button type="button" class="btn btn-outline-light text-dark">Thêm vào list</button>
                                </div>
            
                                </div>
            
                                </div>
                                <!--/.Content-->
            
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xs-3 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-12">
            <div class="tour">
                <h3>Chùa Hương</h3>
                <img class="card-img-top img-fluid img-nhd" src="https://mytourcdn.com/upload_images/Image/Han%20-%20Tour/ha%20hoi/xjp1404117442.jpg">
                <div class="tour-body">
                    <h5>Địa chỉ: Hương Sơn, Mỹ Đức, Hà Nội</h5>
                    <h5>Thời gian: 1 ngày</h5>
                    <h5>Phương tiện: Ôtô</h5>
                    <h5>Giá Cả: 700.000đ</h5>
                    <div class="incrad-wrapper">
                        <button type="button" class="btn btn-outline-light text-dark" data-toggle="modal" data-target="#modalYT1">Lịch Trình</button>
                        <div class="modal fade" id="modalYT1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
                            <div class="modal-dialog modal-lg" role="document">
                                <!--Content-->
                                <div class="modal-content">
                                <!--Body-->
                                <div class="modal-body mb-0 p-0">
                                    <div class="content-cac-ban-oi">
                                        <h1 style="text-align: center";>Lịch Trình</h1>
                                        <div class="boc-noi-dung style="text-align: start;>
                                            <p>Trong chuyến du lịch chùa Hương mới nhất của mình, mình đã dành trọn vẹn một ngày để khám phá chùa Hương theo lịch trình như sau: Đền Trình - chùa Thiên Trù - động Hương Tích - chùa Tiên Sơn - chùa Thanh Sơn Hương Đài</p>
                                            <p>7h30 xuất phát tại nội thành Hà Nội theo hướng đi Nguyễn Trãi, 9h30 có mặt tại chùa Hương, mua vé để đi đò.</p>
                                            <p>10h xuất phát từ bến đò Suối Yến để vào lễ đền Trình.</p>
                                            <p>Sau đó đi đò trên Suối Yến để vào đến chùa Thiên Trù.</p>
                                            <p>Sau khi tham quan hết toàn bộ chùa Thiên Trù là khoảng 12h30, đoàn mình ăn trưa ngay tại chân chùa Thiên Trù, đi theo đoàn khá đông nên mình đã liên hệ với nhà hàng ngay đó để đặt cơm trưa.</p>
                                            <p>14h, mình xuất phát lên động Hương Tích. Do đoàn có trẻ nhỏ nên đã chọn đi cáp treo, di chuyển rất nhanh sẽ đến được động Hương Tích. Đến cổng trời, bạn sẽ đi xuống một bậc thang vài trăm mét để xuống động. Càng xuống sâu, càng mát lạnh và ẩm ướt.</p>
                                            <p>Sau khi lễ tại động Hương Tích, đi cáp treo về lại Thiên Trù, rồi lên chùa Tiên Sơn.</p>                                                   
                                            <p>Khoảng 16h, ra bến Thiên Trù, do thời gian vẫn còn khá sớm nên cả đoàn quyết định ngồi đò để vào chùa Thanh Sơn Hương Đài. Đây là một trong những ngôi chùa mà mình thích nhất tại khu danh thắng chùa Hương. Thanh Sơn Hương Đài cực kỳ yên tĩnh và thanh tịnh, với không gian thoáng đãng vô cùng. Đây cũng là nơi mà mình thường xin xăm vào mỗi đầu năm. Ngoài ra còn có động Tiểu Nhi Cầu Tự là nơi để cầu con cái, công danh, sức khỏe.</p>
                                            <p>18h xuất phát lên xe về Hà Nội.</p>
                                        </div>
                                    </div>       
                                </div>
                                <!--Footer-->
                                <div class="modal-footer flex-column flex-md-row">
                                <div class="boc-cai-button">
                                    <button type="button" class="btn btn-outline-light text-dark">Thêm vào list</button>
                                </div>
            
                                </div>
            
                                </div>
                                <!--/.Content-->
            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xs-3 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-12">
            <div class="tour">
                <h3>Chùa Tam Chúc</h3>
                <img class="card-img-top img-fluid img-nhd" src="https://media.laodong.vn/Storage/NewsPortal/2018/10/4/634327/20-TS-620677-12-7.jpg">
                <div class="tour-body">
                    <h5>Điạ chỉ: Ba Sao, Kim Bảng, Hà Nam</h5>
                    <h5>Thời gian: Trong ngày</h5>
                    <h5>Phương tiện: Ôtô</h5>
                    <h5>Giá Cả: 400.000đ-600.000đ</h5>
                    <div class="incrad-wrapper">
                        <button type="button" class="btn btn-outline-light text-dark" data-toggle="modal" data-target="#modalYT2">Lịch Trình</button>
                        <div class="modal fade" id="modalYT2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
                            <div class="modal-dialog modal-lg" role="document">
                                <!--Content-->
                                <div class="modal-content">
                                <!--Body-->
                                <div class="modal-body mb-0 p-0">
                                    <div class="content-cac-ban-oi">
                                        <h1 style="text-align: center";>Lịch Trình</h1>
                                        <div class="boc-noi-dung style="text-align: start;>
                                            <h3>Sáng: Hà Nội – Chùa Tam Chúc – Ninh Bình ( ăn trưa )</h3>
                                            <p>07h30-08h00: Xe và hướng dẫn viên đón Quý khách tại phố Cổ và Nhà hát lớn khởi hành đi Hà Nam.</p>
                                            <p>10h00: Quý khách vào thăm quan và chiêm bái chùa Tam Chúc – Ngôi chùa linh thiêng được xây dựng với hàng nghìn bức tranh bằng đá được ghép tỉ mỉ, cẩn thận bởi đôi bàn tay tài hoa của những người thợ thủ công lành nghề. 12.000 bức tranh đá miêu tả các sự tích của Đức Phật được những người Hồi giáo Indonesia tạc bằng đá núi lửa ở Indonesia sau đó đưa sang Việt Nam. Ngoài ra, Chùa Tam Chúc còn thiết lập một vườn cột kinh khổng lồ với 1.000 cột đá, mỗi cột cao 12m, nặng 200 tấn.</p>
                                            <p>Quý khách khám phá vẻ đẹp hoang sơ, tự nhiên, sơn thủy hữu tình, đẹp như cõi của mảnh đất được ví như “Vịnh Hạ Long” trên cạn.</p>
                                            <p>11h30: Quý khách lên xe đi Ninh Bình</p>
                                            <h3>Chiều: Tràng An – Hà Nội</h3>
                                            <p>Sau bữa trưa, xe và hướng dẫn đưa du khách ra bến đò Tràng An lên thuyền đi dọc theo suối giữa cánh đồng lúa thăm khu du lịch Tràng An Mới với những dải đá vôi, thung lũng và những sông ngòi đan xen tạo nên một không gian huyền ảo, kỳ bí.</p>                                                   
                                            <p>Với tuyến này quý khách có cơ hội tham quan 4 hang động tự nhiên trong số những hang động đẹp nhất trong khu du lịch Tràng An là Hang Lấm, Hang Vạng, Hang Thánh Trượt và hang cuối cùng là Hang Đại, quý khách còn dừng chân ghé thăm 3 điểm tâm linh là đền Cao Sơn, đền Suối Tiên và Hành Cung Vũ Lâm. Tuyến này sẽ rất phù hợp với những bạn trẻ, những người thích chụp ảnh Check in, quý khách có thể có những trải nghiệm đầy đủ về hành trình ngồi đò thăm hang cũng như có thể lưu lại những cảm xúc, những bức hình đẹp trong hành trình về thăm Tràng An – Di sản văn hòa và thiên nhiên thế giới!</p>
                                            <p>17h00: Quý khách lên xe trở về Hà Nội</p>
                                            <p>19h00: Về đến Hà Nội</p>
                                        </div>
                                    </div>       
                                </div>
                                <!--Footer-->
                                <div class="modal-footer flex-column flex-md-row">
                                <div class="boc-cai-button">
                                    <button type="button" class="btn btn-outline-light text-dark">Thêm vào list</button>
                                </div>
            
                                </div>
            
                                </div>
                                <!--/.Content-->
            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xs-3 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-12">
            <div class="tour">
                <h3>Thiên đường Bảo Sơn</h3>
                <img class="card-img-top img-fluid img-nhd" src="https://media.tieudungplus.vn/media/uploaded/17/2016/04/03/15-diem-du-lich-quanh-ha-noi-phu-hop-di-trong-ngay-9-ngaynay.jpg">
                <div class="tour-body">             
                    <h5>Địa chỉ: Đ.Lê Trọng Tấn, An Khánh, Hoài Đức, Hà Nội</h5>
                    <h5>Thời gian: Trong ngày</h5>
                    <h5>Phương tiện: Xe máy, Ôtô</h5>
                    <h5>Giá Cả: 100.000đ-150.000đ</h5>
                    <div class="incrad-wrapper">
                        <button type="button" class="btn btn-outline-light text-dark" data-toggle="modal" data-target="#modalYT3">Lịch Trình</button>
                        <div class="modal fade" id="modalYT3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
                            <div class="modal-dialog modal-lg" role="document">
                                <!--Content-->
                                <div class="modal-content">
                                <!--Body-->
                                <div class="modal-body mb-0 p-0">
                                    <div class="content-cac-ban-oi">
                                        <h1 style="text-align: center";>Lịch Trình</h1>
                                        <div class="boc-noi-dung style="text-align: start;>
                                            <h3>Có các khu vui chơi chính bạn không thể bỏ qua như: Làng nghề truyền thống, Tổ hợp Safari, Thế giới trò chơi, Thủy cung – công viên nước. Dưới đây một lịch trình xem ra khá “hoàn hảo” cho người đi chơi công viên Thiên Đường Bảo Sơn như sau:</h3>
                                            <p>11 giờ: Mua vé vào cổng. Sau khi các bạn ăn trưa ở nhà hàng Gà Ngon  hoặc Dê Núi 9, 11h các bạn mua vé vào cổng. 11h vào là giờ lí tưởng nhất vì tất cả các chương trình biểu diễn của khu du lịch vào thời điểm này cũng mới bắt đầu tổ chức, trước đó mà vào thì chỉ chơi tự do chỗ này chỗ kia thôi.</p>
                                            <p>11h-11h30: Ăn xong nhà hàng ngoài cổng rồi thì 11h vào mua vé để vào khu du lịch. Đầu tiên là đi xem biểu diễn múa rối nước ở khu làng nghề. Nhớ là ngày thứ 2 không có nhé.</p>
                                            <p>11h30-13h: Đi Thủy cung vì có điều hòa mát rượi tránh cái nắng gay gắt đỉnh điểm của buổi trưa hè. Thủy cung Thiên Đường Bảo Sơn được xây dựng thành 3 tầng “trên cao”  và 1 tầng ngầm “thủy cung” . Sẽ không giống như tưởng tượng của nhiều bạn là toàn bộ phải chìm dưới nước. Nếu những bạn nào từng đi Thủy cung Times City rồi thì sẽ thấy rõ sự khác biệt này.</p>
                                            <p>13h – 14h: Đi ngắm các con vật, chơi trò chơi ở khu Safari và  quay ra tham gia vào thế giới trò chơi tại Thiên Đường Bảo Sơn</p>
                                            <p>14h-14h30: Đi xem biểu diễn dân ca và nhạc cổ truyền Việt Nam ở khu làng nghề.  Nhớ là thứ 3 không biểu diễn nhé.</p>
                                            <p>14h30-15h: Đi xem biểu diễn xiếc Hải cẩu và xiếc chó.  Giờ không còn xiếc cá heo nữa các bạn nhé. Hơi tiếc vì từ trước đến nay Thiên Đường Bảo Sơn rất nổi tiếng với màn biểu diễn này cực hấp dẫn trẻ nhỏ. Tuy nhiên xiếc  hải cẩu và xiếc chó các bé xem cũng thích lắm đấy, không thể chê được.</p>                                                   
                                            <p>15h-16h: Chụp ảnh, check in các kiểu, thăm phố cổ, khu làng nghề truyền thống</p>
                                            <p>16h-17h: Tắm ở khu bể bơi. Bể bơi có mái che nên nếu bạn thích tắm sớm có nắng vẫn tắm được. Có khu căng tin có nước mía, nước ngọt, kem các loại, giá không quá đắt, 15K/cốc nước mía hoặc một que kem Melino là có thể chấp nhận được. Gửi đồ, thuê đồ bơi thì phải mất phí. Giá niêm yết ngoài bảng rồi nhé.</p>
                                            <p>17h: Ra về và ghé một nhà hàng gần đó ăn bữa chiều rồi mới lên xe về nhà bởi vì bơi xong rất đói, và về đến nhà muộn cũng chả kịp đi chợ nấu cơm.</p>
                                        </div>
                                    </div>       
                                </div>
                                <!--Footer-->
                                <div class="modal-footer flex-column flex-md-row">
                                <div class="boc-cai-button">
                                    <button type="button" class="btn btn-outline-light text-dark">Thêm vào list</button>
                                </div>
            
                                </div>
            
                                </div>
                                <!--/.Content-->
            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <h2 style="text-align: center; padding-top: 50px;">Các Tour Du Lịch 2 Ngày 1 Đêm</h2>
    <div class="tour-deck row">
        <div class="col-xs-3 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-12">
            <div class="tour">
                <h3>Hồ Đại Lải</h3>
                <img class="card-img-top img-fluid img-nhd" src="https://cdn.justfly.vn/1024x576/media/5e/a4/0a6b-3f4c-4951-bf6d-f9f2c936167f.jpg">
                <div class="tour-body">
                    <h5>Địa chỉ: Vĩnh Phúc</h5>
                    <h5>Thời gian: 2 ngày 1 đêm</h5>
                    <h5>Phương tiện: Xe máy, Ôtô</h5>
                    <h5>Giá Cả: 700.000đ-2.500.000đ</h5>
                    <div class="incrad-wrapper">
                        <button type="button" class="btn btn-outline-light text-dark" data-toggle="modal" data-target="#modalYT4">Lịch Trình</button>
                        <div class="modal fade" id="modalYT4" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
                            <div class="modal-dialog modal-lg" role="document">
                              <!--Content-->
                                <div class="modal-content">
                                <!--Body-->
                                <div class="modal-body mb-0 p-0">
                                    <div class="content-cac-ban-oi">
                                        <h1 style="text-align: center";>Lịch Trình</h1>
                                        <div class="boc-noi-dung style="text-align: start;>
                                            <h3 style="text-align: center;">Ngày thứ 1: Hà Nội – Flamingo Đại Lải</h3>
                                            <p>Buổi sáng: Sau khi di chuyển tới Flamingo Đại Lải tham quan, chụp ảnh tại câu lạc bộ nghệ thuật và nhà hàng Bambo Wings. Thăm hầm rượu nơi lưu trữ các loại rượu vang nổi tiếng trên thế giới, chụp ảnh trên các đồi cỏ nghệ thuật. Thăm Trung tâm hội nghị – công trình kiến trúc độc đáo với cảnh quan đá trên các đồi cỏ, thăm phòng trưng bày Flamingo.</p>
                                            <p>Buổi trưa: Ăn trưa và nghỉ ngơi.</p>
                                            <p>Buổi chiều: Tham quan và chụp ảnh tại các cánh đồng hoa, cánh đồng sắc màu, chụp ảnh tại đồi nghệ thuật nơi có tầm nhìn bởi dãy Tam Đảo hùng vĩ bao quanh Khu du lịch. Tham quan và chụp ảnh tại vườn Khô Đại Lải</p>
                                            <p>Tham quan rừng thông thơ mộng với những thảm lá thông dày và hương thông tinh khiết, ngắm mặt trời lặn dần dưới rặng thông. Tham quan và vui chơi tại công viên trò chơi Wonder Park.</p>
                                            <p>Tham gia các hoạt động thể thao dưới nước như Kayak, lướt ván buồm, thuyền gỗ Whitehall, thuyền buồn Mist và Alaska hoặc du thuyền 5 sao Bayliner. Ăn bữa tối lãng mạn trên thảm cỏ bên bờ hồ thơ mộng với các món BBQ với lửa, đuốc, nến và hoa.</p>
                                            <h3 style="text-align: center;">Ngày thứ 2:Flamingo Đại Lải –  Hà Nội</h3>                                                   
                                            <p>Lựa chọn các hoạt động vui chơi và tham quan sau:</p>
                                            <p>– Tham gia học làm vườn và trồng rau sạch.</p>
                                            <p>– Thi đấu cờ vua với bàn cờ khổng lồ.</p>
                                            <p>– Thư giãn tại khu Spa Flamingo.</p>
                                            <p>– Luyện giọng hát tại phòng Karaoke.</p>
                                            <p>– Đăng ký học và thực hành các hoạt động thể thao dưới nước: Chèo thuyền, thuyền buồm, lướt ván buồm…</p>
                                            <p>Tham quan Hang Dơi, Đèo Nhe và phong cảnh rừng núi cuộc sống thôn dã bằng xe jeep.</p>
                                            <p>Buổi trưa: Ăn trưa, nghỉ ngơi, trả phòng và lên đường về Hà Nội.</p>
                                        </div>
                                    </div>       
                                </div>
                                <!--Footer-->
                                <div class="modal-footer flex-column flex-md-row">
                                <div class="boc-cai-button">
                                    <button type="button" class="btn btn-outline-light text-dark">Thêm vào list</button>
                                </div>
                        
                                </div>
                        
                              </div>
                              <!--/.Content-->
                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xs-3 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-12">
            <div class="tour">
                <h3>Tam Đảo</h3>
                <img class="card-img-top img-fluid img-nhd" src="https://cdn.justfly.vn/924x616/media/f2/33/8281-cd87-476d-8013-d97b80ff94cf.jpg">
                <div class="tour-body">
                    <h5>Địa chỉ: Vĩnh Phúc</h5>
                    <h5>Thời gian: 2 ngày 1 đêm</h5>
                    <h5>Phương tiện: Xe máy, Ôtô</h5>
                    <h5>Giá Cả: 500.000đ-1.000.000đ</h5>
                    <div class="incrad-wrapper">
                        <button type="button" class="btn btn-outline-light text-dark" data-toggle="modal" data-target="#modalYT5">Lịch Trình</button>
                        <div class="modal fade" id="modalYT5" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
                            <div class="modal-dialog modal-lg" role="document">
                              <!--Content-->
                                <div class="modal-content">
                                <!--Body-->
                                <div class="modal-body mb-0 p-0">
                                    <div class="content-cac-ban-oi">
                                        <h1 style="text-align: center";>Lịch Trình</h1>
                                        <div class="boc-noi-dung style="text-align: start;>
                                            <p>Khí hậu Tam Đảo mang sắc thái của vùng khí hậu ôn đới nên mát mẻ quanh năm, nhiệt độ trung bình từ 18-19 độ C. Ngoài ra, nơi đây lúc nào cũng có một lớp sương mù lành lạnh, thuận lợi cho Tam Đảo trở thành điểm du lịch thiên đường.</p>
                                            <p>Ngày 1: Khởi hành từ Hà Nội tới Thiền viện Tây Thiên, hoặc đi Chùa Tây Thiên và tham quan tại đây. Có thể dùng cơm trưa tại đây hoặc ăn bên ngoài. Buổi trưa có mặt và nhận phòng tại Tam Đảo. Chiều tham quan tháp truyền hình. Buổi tối có thể đi ăn đồ nướng, ốc,...</p>
                                            <p>Ngày 2: Ăn sáng, đi chợ sớm để tham quan và mua quà. Có thể đi thêm Thác Bạc, nhà thờ Tam Đảo, thăm vườn quốc gia Tam Đảo. Buổi trưa về trả phòng nghỉ và quay lại Hà Nội.</p>
                                            <h4>Gợi ý ăn uống khi đến Tam Đảo</h4>
                                            <p>Tam Đảo khá nổi tiếng với những món đặc trưng là rau su su và đồ nướng. Rau su su được trồng tại vùng khí hậu mát mẻ và thổ nhưỡng thích hợp nên luôn tươi ngon, dù luộc hay xào đều hoàn hảo. Ngoài ra, món gà nướng bọc giấy bạc cũng là món ăn mà bạn không nên bỏ qua khi đặt chân đến Tam Đảo.</p>
                                            <h4>Ưu điểm và nhược điểm khi du lịch tại Tam Đảo</h4>
                                            <p style="font-style: italic;">Ưu điểm</p>
                                            <p>Phù hợp với gia đình nhiều người. Ngoài ra thích hợp cả với những nhóm bạn trẻ ưa khám phá.</p>
                                            <p>Thích hợp để đi vào cả 4 mùa trong năm.</p>
                                            <p>Có không gian cắm trại, picnic,...</p>
                                            <p>Nhiều đặc sản ngon, dễ ăn./p>
                                            <p style="font-style: italic;">Nhược điểm</p>
                                            <p>Dịch vụ hơi đắt đỏ.</p>
                                            <p>Đồ ăn tại các nhà nghỉ thường không ngon.</p>
                                            <p>Ít địa điểm nên chỉ nên đi trong 2 ngày</p>
                                            <p>Có thể đông đúc và quá tải vào những mùa cao điểm du lịch.</p>
                                        </div>
                                    </div>       
                                </div>
                                <!--Footer-->
                                <div class="modal-footer flex-column flex-md-row">
                                <div class="boc-cai-button">
                                    <button type="button" class="btn btn-outline-light text-dark">Thêm vào list</button>
                                </div>
                        
                                </div>
                        
                              </div>
                              <!--/.Content-->
                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xs-3 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-12">
            <div class="tour">
                <h3>My hill</h3>
                <img class="card-img-top img-fluid img-nhd" src="https://cdn.justfly.vn/825x550/media/fb/42/3a85-6613-46e2-9ab1-8dbc4b71467b.jpg">
                <div class="tour-body">
                    <h5>Địa chỉ: Quang Tiến, Sóc Sơn, Hà Nội</h5>
                    <h5>Thời gian: 2 ngày 1 đêm</h5>
                    <h5>Phương tiện: Xe máy, Ôtô</h5>
                    <h5>Giá Cả: 300.000đ-500.000đ</h5>
                    <div class="incrad-wrapper">
                        <button type="button" class="btn btn-outline-light text-dark" data-toggle="modal" data-target="#modalYT6">Lịch Trình</button>
                        <div class="modal fade" id="modalYT6" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
                            <div class="modal-dialog modal-lg" role="document">
                              <!--Content-->
                                <div class="modal-content">
                                <!--Body-->
                                <div class="modal-body mb-0 p-0">
                                    <div class="content-cac-ban-oi">
                                        <h1 style="text-align: center";>Lịch Trình</h1>
                                        <div class="boc-noi-dung style="text-align: start;>
                                            <p>Tất cả các thời điểm, các mùa trong năm bạn đều có thể đế với My Hill. Tuy nhiên, vì các hoạt động cắm trại, vui chơi được tổ chức hoàn toàn ngoài trời nên hãy chọn một ngày nắng đẹp, không mưa và khô ráo để đi chơi nhé.</p>
                                            <p>Ngày 1: xuất phát từ Hà Nội đến My Hill, tham quan, thuê đồ và dựng lều trại. Buổi tối có thể nướng đồ ăn, tham gia các hoạt động vui chơi, âm nhạc và giao lưu</p>
                                            <p>Ngày 2: Tham quan, chụp ảnh, trải nghiệm không gian hồ My Hill. Buổi chiều trả đồ và quay về Hà Nội.</p>
                                            <h4>Gợi ý ăn uống tại My Hill</h4>
                                            <p>My Hill là khu du lịch sinh thái với phong cách tự phục vụ. Ở đây không có sẵn nhiều hàng quán, dịch vụ mà hầu hết các bạn sẽ tự làm hết. Bạn có thể chuẩn bị đồ ăn ở nhà mang đến hoặc đặt trước theo dịch vụ tại đây</p>
                                            <h4>Ưu điểm và nhược điểm khi du lịch My Hill</h4>
                                            <p style="font-style: italic;">Ưu điểm</p>
                                            <p>Không quá xa trung tâm Hà Nội</p>
                                            <p>Đồ ăn khá rẻ và ngon</p>
                                            <p>Dịch vụ tốt, phong cảnh đẹp</p>
                                            <p>Có không gian tổ chức cắm trại, picnic, gameshow</p>
                                            <p style="font-style: italic;">Nhược điểm</p>
                                            <p>Có nhiều côn trùng</p>
                                            <p>Các ngày trong tuần thường có ít nhân viên chăm sóc</p>
                                            <p>Hồ Đồng Quan khá sâu và nguy hiểm</p>
                                        </div>
                                    </div>       
                                </div>
                                <!--Footer-->
                                <div class="modal-footer flex-column flex-md-row">
                                <div class="boc-cai-button">
                                    <button type="button" class="btn btn-outline-light text-dark">Thêm vào list</button>
                                </div>
                        
                                </div>
                        
                              </div>
                              <!--/.Content-->
                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xs-3 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-12">
            <div class="tour">
                <h3>Ba Vì</h3>
                <img class="card-img-top img-fluid img-nhd" src="https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/06/du-lich-ba-vi-vuon-quoc-gia-2.jpg">
                <div class="tour-body">
                    <h5>Điạ chỉ: Ba Vì</h5>
                    <h5>Thời gian: 2 ngày 1 đêm</h5>
                    <h5>Phương tiện: Xe máy, Ôtô</h5>
                    <h5>Giá Cả: 700.000đ-4.000.000đ</h5>
                    <div class="incrad-wrapper">
                        <button type="button" class="btn btn-outline-light text-dark" data-toggle="modal" data-target="#modalYT7">Lịch Trình</button>
                        <div class="modal fade" id="modalYT7" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
                            <div class="modal-dialog modal-lg" role="document">
                              <!--Content-->
                                <div class="modal-content">
                                <!--Body-->
                                <div class="modal-body mb-0 p-0">
                                    <div class="content-cac-ban-oi">
                                        <h1 style="text-align: center";>Lịch Trình</h1>
                                        <div class="boc-noi-dung style="text-align: start;>
                                            <h3 style="text-align: center;">Ngày thứ nhất:</h3>
                                            <p>6h00: Bắt đầu xuất phát từ BigC Thăng Long, theo Đại lộ Thăng Long để đến vườn quốc gia Ba Vì.</p>
                                            <p>7h45: Đến cổng vườn quốc gia, mua vé rồi đi thẳng 1100m để lên đền Thượng (cách cổng vườn quốc gia 12km). Đường đến đền Thượng nhiều khúc cua hiểm và dốc, các bạn nhớ di chuyển hết sức cẩn thận và quan sát kỹ xung quanh.</p>
                                            <p>8h15: Lên đến cốt 1100m các bạn gửi xe rồi rẽ phải để lên Đền Thượng và đền Mẫu.8h15: Lên đến cốt 1100m các bạn gửi xe rồi rẽ phải để lên Đền Thượng và đền Mẫu.</p>
                                            <p>12h: nghỉ ngơi, ăn trưa.</p>
                                            <p>13h: Quay về cốt 400m để nghỉ và ăn tối ở nhà hàng trong khu du lịch vườn quốc gia Ba Vì. Trên đường quay xuống có một số di tích mà các bạn có thể tham quan: Nhà thờ cổ và Trại hè thời pháp, nhà tù chính trị, cốt 600m (nơi đánh dấu trận đánh của trung đoàn Ba Vì), động Ngọc Hoa, vườn xương rồng.</p>
                                            <p>19h: Các bạn sẽ được  cảm nhận cái lạnh se se của mùa đông, không gian tĩnh lặng của một vùng quê và đón ánh nắng bình minh xen qua những tán lá thông ở cốt 400.</p>
                                            <h3 style="text-align: center;">Ngày thứ 2:</h3>
                                            <p>7h: Ăn sáng tại cốt 400</p>
                                            <p>8h: Xuất phát xuống khu du lịch Thiên Sơn – Suối Ngà cách cổng Vườn Quốc Gia 2km. Tại đây, các bạn được tắm thác, bơi tại bể bơi, trượt cầu trượt nước từ trên cao..</p>
                                            <p>11h30: Ăn trưa tại Thiên Sơn – Suối Ngà với những món đặc sản rừng núi.</p>
                                            <p>13h: Xuất phát đi Khoang Xanh hoặc Ao Vua để tận hưởng các trò chơi cảm giác mạnh thách thức độ gan dạ của mỗi người. Ngoài các trò chơi trên Ở Khoang Xanh có Thung Lũng Khủng Long cho các bé tìm hiểu thiên nhiên còn Ao Vua lại có bể tắm trà xanh, có nơi Spa lý tưởng cho mọi người.</p>
                                            <p>16h30: Rời khỏi khu du lịch và trở về Hà Nội.</p>
                                        </div>
                                    </div>       
                                </div>
                                <!--Footer-->
                                <div class="modal-footer flex-column flex-md-row">
                                <div class="boc-cai-button">
                                    <button type="button" class="btn btn-outline-light text-dark">Thêm vào list</button>
                                </div>
                        
                                </div>
                        
                              </div>
                              <!--/.Content-->
                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xs-3 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-12">
            <div class="tour">
                <h3>Mai Châu</h3>
                <img class="card-img-top img-fluid img-nhd" src="https://cdn.justfly.vn/825x550/media/6d/e2/a1f4-9d16-48b0-b04b-fb7d38482598.jpg">
                <div class="tour-body">
                    <h5>Địa chỉ: Mai Châu</h5>
                    <h5>Thời gian: 2 ngày 1 đêm</h5>
                    <h5>Phương tiện: Xe máy, Ôtô</h5>
                    <h5>Giá Cả: 200.000đ-400.000đ</h5>
                    <div class="incrad-wrapper">
                        <button type="button" class="btn btn-outline-light text-dark" data-toggle="modal" data-target="#modalYT8">Lịch Trình</button>
                        <div class="modal fade" id="modalYT8" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
                            <div class="modal-dialog modal-lg" role="document">
                              <!--Content-->
                                <div class="modal-content">
                                <!--Body-->
                                <div class="modal-body mb-0 p-0">
                                    <div class="content-cac-ban-oi">
                                        <h1 style="text-align: center";>Lịch Trình</h1>
                                        <div class="boc-noi-dung style="text-align: start;>
                                            <h3 style="text-align: center;">Ngày 1: Hà Nội - Mai Châu (Ăn trưa, tối):</h3>
                                            <p>06h30 : Khởi hành từ Hà Nội để bắt đầu tour du lịch Mai Châu 2 ngày 1 đêm.</p>
                                            <p>07h30 : Đoàn dừng chân ăn sáng tự túc trên đường.</p>
                                            <p>09h30 : Quý khách tiếp tục dừng chân nghỉ ngơi và chụp ảnh tại đèo Thung Khe – Hòa Bình.</p>
                                            <p>Khi tới đèo Thung Khe quý khách sẽ thấy một khung cảnh đẹp hết sức bình dị như là biển mây và…ngô luộc, mía tía, cơm lam, cải mèo. Ở Thung Khe – Hòa Bình một ngày như có bốn mùa. Sáng trong trẻo, trưa chói chang, chiều dìu dịu và khi màn đêm buông xuống là sương mù dày đặc.</p>
                                            <p>10h30 : Quý khách đặt chân đến bản Lác – Mai Châu. Bản Lác được mệnh danh là thủ đô của người Thái. Quý khách nghỉ ngơi, dùng bữa trưa với những món ăn truyền thống mang hương vị của núi rừng.</p>
                                            <p>14h00 – 16h00 : Quý khách tham gia chương trình khám phá thung lũng Mai Châu, thăm những ngôi nhà sàn nhỏ xinh của người Thái để tìm hiểu những nét văn hóa, phong tục tập quán độc đáo của họ.</p>
                                            <p>16h00 - 18h00 : Tự do dạo chơi tham quan chụp ảnh thung lũng Mai Châu/p>
                                            <p>18h30 : Quý khách dùng bữa tối tại nhà sàn truyền thống của người Thái.</p>
                                            <p>19h30 – 21h30 :  Quý khách tham gia các hoạt động, chương trình giao lưu văn nghệ, múa hát của các chàng trai, cô gái dân tộc Thái, uống rượu cần, đốt lửa trại.</p>
                                            <h3 style="text-align: center;">Ngày 2: Mai Châu – Chợ phiên dân tộc - Khám phá hang Chiều/ Thác Gò Lào - Hà Nội (Bữa sáng, trưa)</h3>
                                            <p>07h00 : Quý khách thức dậy ngắm cảnh bình minh, tận hưởng những giây phút tĩnh lặng, yên bình trước khi có điểm tâm nhẹ</p>
                                            <p>08h30 – 11h00 : Hướng dẫn viên sẽ đưa quý khách tham quan chợ phiên dân tộc tại Mai Châu, một hoạt động truyền thống của đồng bào dân tộc nơi đây.</p>
                                            <p>11h30 : Quý khách quay trở lại bản Lác dùng bữa, sau đó tự do khám phá, du lịch Mai Châu trước khi ra về.</p>
                                            <p>13h00 : Quý khách lên xe, tạm biệt Mai Châu yên bình, đoàn trở về Hà Nội.</p>
                                            <p>17h00 : Xe đưa quý khách về tới Hà Nội</p>
                                        </div>
                                    </div>       
                                </div>
                                <!--Footer-->
                                <div class="modal-footer flex-column flex-md-row">
                                <div class="boc-cai-button">
                                    <button type="button" class="btn btn-outline-light text-dark">Thêm vào list</button>
                                </div>
                        
                                </div>
                        
                              </div>
                              <!--/.Content-->
                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xs-3 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-12">
            <div class="tour">
                <h3>Núi Trầm</h3>
                <img class="card-img-top img-fluid img-nhd" src="https://cdn.justfly.vn/653x420/media/de/a1/00d4-4cd3-4cb3-86f6-a30ff4425e48.jpg">
                <div class="tour-body">
                    <h5>Điạ chỉ: Chương Mỹ, Hà Nội</h5>
                    <h5>Thời gian: 2 ngày 1 đêm</h5>
                    <h5>Phương tiện: Xe máy, Ôtô</h5>
                    <h5>Giá Cả: 10.000đ-150.000đ</h5>
                    <div class="incrad-wrapper">
                        <button type="button" class="btn btn-outline-light text-dark" data-toggle="modal" data-target="#modalYT9">Lịch Trình</button>
                        <div class="modal fade" id="modalYT9" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
                            <div class="modal-dialog modal-lg" role="document">
                              <!--Content-->
                                <div class="modal-content">
                                <!--Body-->
                                <div class="modal-body mb-0 p-0">
                                    <div class="content-cac-ban-oi">
                                        <h1 style="text-align: center";>Lịch Trình</h1>
                                        <div class="boc-noi-dung style="text-align: start;>
                                            <p>Núi Trầm là địa điểm bạn có thể tới vào bất cứ mùa nào trong năm. Tuy nhiên, bạn có thể lựa chọn đi tới đây cùng gia đình vào thời gian từ đầu tháng 3 đến đầu tháng 4. Đây chính là lúc hoa xưa trắng bao phủ cả đồi núi và hoa gạo nhuộm đỏ một góc trời, tạo nên khung cảnh vô cùng đẹp mắt.</p>
                        
                                            <p>Ngày 1: xuất phát từ Hà Nội, chuẩn bị đồ ăn và vật dụng cần thiết cho việc leo núi. Tới núi Trầm thuê đồ dùng cần thiết và leo núi. Lên đến đỉnh núi thì dựng lều trại, có thể đốt lửa và nướng đồ ăn. Buổi tối tham gia một số trò chơi tập thể, hát hò, kể chuyện.</p>
                                            <p>Ngày 2: Chụp hình, leo núi, tham quan hồ núi Trầm và ăn trưa. Buổi chiều dọn đồ đạc xuống núi và trở về Hà Nội.</p>
                                            <h4>Gợi ý ăn uống tại núi Trầm</h4>
                                            <p>Tại núi Trầm không có quá nhiều quán ăn cũng như đặc sản để bạn thưởng thức. Chính bởi vậy, hợp lý nhất là bạn nên chuẩn bị và mang theo đồ nguội cho cả gia đình mình.</p>
                                            <h4>Ưu điểm và nhược điểm du lịch núi Trầm</h4>   
                                            <p style="font-style: italic;">Ưu điểm</p>
                                            <p>Phù hợp với gia đình nhiều thế hệ, đặc biệt là trẻ em và người lớn tuổi.</p>
                                            <p>Các nhóm bạn trẻ cũng có thể phù hợp với địa điểm này</p>
                                            <p>Có không gian cắm trại, picnic,...</p>
                                            <p>Chi phí rẻ và hợp lý.</p>
                                            <p>Không khí trong lành, thoáng mát, không bụi bặm, xô bồ.</p>
                                            <p style="font-style: italic;">Nhược điểm</p>
                                            <p>Có ít điểm vui chơi.</p>
                                            <p>Không phù hợp với các gia đình thích du lịch kiểu nghỉ dưỡng</p>
                                            <p>Không có các món ăn đặc sản</p>
                                        </div>
                                    </div>       
                                </div>
                                <!--Footer-->
                                <div class="modal-footer flex-column flex-md-row">
                                <div class="boc-cai-button">
                                    <button type="button" class="btn btn-outline-light text-dark">Thêm vào list</button>
                                </div>
                        
                                </div>
                        
                              </div>
                              <!--/.Content-->
                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xs-3 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-12">
            <div class="tour">
                <h3>Hàm Lợn</h3>
                <img class="card-img-top img-fluid img-nhd" src="https://cdn.justfly.vn/660x439/media/72/f7/c581-331d-4003-b28c-825e6515d40c.jpg">
                <div class="tour-body">
                    <h5>Địa chỉ: Độc Tôn, Sóc Sơn, Hà Nội</h5>
                    <h5>Thời gian: 2 ngày 1 đêm</h5>
                    <h5>Phương tiện: Xe máy, Ôtô</h5>
                    <h5>Giá Cả: 300.000đ-400.000đ</h5>
                    <div class="incrad-wrapper">
                        <button type="button" class="btn btn-outline-light text-dark" data-toggle="modal" data-target="#modalYT10">Lịch Trình</button>
                        <div class="modal fade" id="modalYT10" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
                            <div class="modal-dialog modal-lg" role="document">
                              <!--Content-->
                                <div class="modal-content">
                                <!--Body-->
                                <div class="modal-body mb-0 p-0">
                                    <div class="content-cac-ban-oi">
                                        <h1 style="text-align: center";>Lịch Trình</h1>
                                        <div class="boc-noi-dung style="text-align: start;>
                                            <p>Du lịch Hàm Lợn có thể đi cả vào bốn mùa, tùy thuộc vào bạn thích trải nghiệm mà nóng hay lạnh. Sự lựa chọn tốt nhất là bạn nên đi vào mùa xuân hoặc thu, khi thời tiết khô ráo, mát mẻ và không mưa quá nhiều. Các nhóm bạn trẻ không nên tới đây vào mùa mưa, nước dâng bởi sẽ không an toàn.</p>
                        
                                            <p>Ngày 1: Từ Hà Nội đến Hồ Núi Bàu, cắm trại và ăn uống ngay bên hồ. Buổi tối sẽ thưởng thức các món ăn như gà nướng, cá nướng, cơm nắm…</p>
                                            <p>Ngày 2: Chinh phục đỉnh Hàm Lợn, dựng lều nghỉ ngơi trên đỉnh núi, buổi chiều quay xuống chân núi và trở về Hà Nội.</p>
                                            <h4>Gợi ý ăn uống tại Hàm Lợn</h4>
                                            <p>Ở dưới chân núi có khá nhiều dịch vụ bán đồ ăn, cho thuê lều trại, hướng dẫn dẫn đường,... Tuy nhiên, các bạn nên chuẩn bị đồ ăn nhẹ và đồ nướng, mang đi từ nhà để tiết kiệm chi phí và chuyến đi được chu đáo hơn nhé!</p>
                                            <h4>Ưu điểm và nhược điểm khi du lịch tại Hàm Lợn</h4>   
                                            <p style="font-style: italic;">Ưu điểm</p>
                                            <p>Không quá xa trung tâm Hà Nội</p>
                                            <p>Đồ ăn khá rẻ và ngon</p>
                                            <p>Dịch vụ tốt, phong cảnh đẹp</p>
                                            <p>Có không gian tổ chức cắm trại, picnic, gameshow</p>
                                            <p style="font-style: italic;">Nhược điểm</p>
                                            <p>Có nhiều côn trùng</p>
                                            <p>Các ngày trong tuần thường có ít nhân viên chăm sóc</p>
                                            <p>Hồ Đồng Quan khá sâu và nguy hiểm</p>
                                        </div>
                                    </div>       
                                </div>
                                <!--Footer-->
                                <div class="modal-footer flex-column flex-md-row">
                                <div class="boc-cai-button">
                                    <button type="button" class="btn btn-outline-light text-dark">Thêm vào list</button>
                                </div>
                        
                                </div>
                        
                              </div>
                              <!--/.Content-->
                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xs-3 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-12">
            <div class="tour">
                <h3>Khoang xanh - Suối tiên</h3>
                <img class="card-img-top img-fluid img-nhd" src="https://cdn.justfly.vn/640x428/media/73/b5/474d-eab7-4575-9cdb-27472ffaa37e.jpg">
                <div class="tour-body">
                    <h5>Địa chỉ: Vân Hoà, Ba Vì, Hà Nội</h5>
                    <h5>Thời gian: 2 ngày 1 đêm</h5>
                    <h5>Phương tiện: Xe máy, Ôtô</h5>
                    <h5>Giá Cả: 500.000đ</h5>
                    <div class="incrad-wrapper">
                        <button type="button" class="btn btn-outline-light text-dark" data-toggle="modal" data-target="#modalYT11">Lịch Trình</button>
                        <div class="modal fade" id="modalYT11" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
                            <div class="modal-dialog modal-lg" role="document">
                              <!--Content-->
                                <div class="modal-content">
                                <!--Body-->
                                <div class="modal-body mb-0 p-0">
                                    <div class="content-cac-ban-oi">
                                        <h1 style="text-align: center";>Lịch Trình</h1>
                                        <div class="boc-noi-dung style="text-align: start;>
                                            <h3 style="text-align: center;">Ngày 1</h3>
                                            <p>7h00: Khởi hành tới khu du lịch Khoang Xanh - Suối Tiên, một quần thể du lịch sơn thủy hữu tình nằm ngay tại cửa ngõ thủ đô thuộc huyện Ba Vì.</p>
                                            <p>9h00: Qúy khách tới Khoang Xanh, nhận phòng nghỉ ngơi và tự do tham quan.</p>
                                            <p>11h30: Quý khách tập trung tại nhà hàng Suối Tiên  để dùng bữa trưa.</p>
                                            <p>14h00: HDV sẽ đưa quý khách tham quan khám phá vẻ đẹp hoang sơ, hùng vĩ của Khoang Xanh,chiêm ngưỡng dòng suối Tiên vắt mình từ trên cao, len lỏi qua các sườn đá, tham quan thác Mơ, thác Mâm Xôi, thác Hòa Lan… </p>
                                            <p>Đỉnh núi Vua, nơi có khu rừng nguyên sinh với hệ động thực vật phong phú và các loài cây cổ thụ quý hiếm sẽ đem lại sự bất ngờ cho qúy khách. Khu bảo tồn động vật hoang dã, công viên khủng long, hồ tạo sóng, những cửa hàng bán đồ lưu niệm…cũng đang đợi bước chân du khách.</p>                                                
                                            <p>18h30: Quý khách ăn tối tại nhà hàng Suối Tiên</p>
                                            <h3 style="text-align: center;">Ngày 2</h3>   
                                            <p>7h00: Quý khách ăn sáng tại Nhà hàng Suối Tiên</p>
                                            <p>8h30: HDV đưa Quý khách tới trung tâm Suối khoáng nóng VIP SPA để tận hưởng cảm giác thư giãn thoải mái tuyệt vời sau quy trình xông hơi, tắm khoáng nóng.</p>
                                            <p>12h00: Quý khách tập trung về nhà hàng Suối Tiên để dùng bữa trưa, sau đó nghỉ ngơi và trả phòng.</p>
                                            <p>14h00: Quý khách lên xe trở về Hà Nội. Dọc đường đi quý khách có thể dừng lại để mua đặc sản sữa tươi Ba Vì về làm quà. Hẹn gặp lại Quý khách! </p>
                                            <p>17h00: Về đến Hà Nội, trở lại điểm đón ban đầu, kết thúc chương trình</p>
                                        </div>
                                    </div>       
                                </div>
                                <!--Footer-->
                                <div class="modal-footer flex-column flex-md-row">
                                <div class="boc-cai-button">
                                    <button type="button" class="btn btn-outline-light text-dark">Thêm vào list</button>
                                </div>
                        
                                </div>
                        
                              </div>
                              <!--/.Content-->
                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`
}