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
                    <button type="button" class="btn btn-primary btn-lg">Khám Phá</button>
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
</div> `
}