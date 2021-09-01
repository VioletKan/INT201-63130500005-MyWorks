//จำกัดอายุ
// let age = prompt("กรุณาใส่อายุของคุณ")
// if(age > 13){
//     document.getElementById("content").innerHTML="<iframe width=\"560\" height=\"315\"src=\"https://www.youtube.com/embed/_pU8gi6ROgA\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
// }

let lotto_number = prompt("กรอกเลขที่ต้องการซื้อ : ")
let random_number = Math.floor(Math.random() * 100)
document.getElementById("random").innerHTML = random_number
if (lotto_number == random_number) {
    document.getElementById("result").innerHTML = "ยินดีด้วยคุณถูกรางวัลเลขท้าย 3 ตัว"
    
}
else{
    document.getElementById("result").innerHTML="เสียใจด้วย คุณไม่ถูกรางวัล"
}