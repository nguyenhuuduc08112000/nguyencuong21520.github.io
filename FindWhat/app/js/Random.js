// let dataFromLocalStorage = JSON.parse(localStorage.getItem("cart"));
function getCardFromLocal(){
  try{
    return JSON.parse(localStorage.getItem("cart"))
  }
  catch(err){
    return []
  }
}
let dataFromLocalStorage = getCardFromLocal()
  
if(dataFromLocalStorage.length>0){
let i = Math.floor(Math.random() * dataFromLocalStorage.length)

document.querySelector('#showRandomResult').innerHTML = `
<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
  <div class="slider-container">
    <div class="menu-place">
    </div>
    <div id="slide-wrapper"></div>
  </div>
</div> 
<div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
  <div class="row tour-name">
    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
      <h3>${dataFromLocalStorage[i].title}</h3>
    </div>
    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
      <button type="button" class="btn btn-primary"><i class="fas fa-thumbs-up"></i>Like</button>
    </div>
  </div>     
  <table class="table ">          
    <tbody>
      <tr>
        <td><strong>Địa điểm: </strong>${dataFromLocalStorage[i].title}</td>
        <td><strong>Địa chỉ: </strong>${dataFromLocalStorage[i].address}</td>
      </tr>
      <tr>
        <td><strong>Giờ mở cửa: </strong>${dataFromLocalStorage[i].time} </td>
        <td><strong>Số like: </strong>1000</td>
      </tr>
    </tbody>
  </table>        
  <div class="panel panel-default">
    <div class="panel-body">
      <div class="row">              
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <button type="button" class="btn btn-default" style="background-color: rgb(50, 145, 50); border:rgb(50, 145, 50);color: white;"><i class="fas fa-phone-alt "></i>1900 8888</button>
        </div>  
        <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
          <h4>* Hãy liên hệ ngay với chúng tôi để có trải nghiệm lý thú nhất</h4>
        </div> 
      </div> 
    </div>
    <button type="button" class="btn btn-primary btn-lg" onclick = "location.reload()" >load lại</button>
  </div>
  
</div>`

let label = document.querySelector('.menu-place')
let slider = document.querySelector('#slide-wrapper')
let index = 0
for(let img of dataFromLocalStorage){
    let x =''
    if(index == i){
        x = "checked"
    }
    let html =`<label for="slide-dot-${index}">
    <img src="${img.image}" alt="" width="100" height="66.66px">
    </label>`

    let html0 = `<input id="slide-dot-${index}" type="radio" name="slides" ${x}>
    <div class="slide" style="background-image: url(${img.image})"></div>`
    index +=1
    slider.innerHTML += html0
    label.innerHTML += html
}
}