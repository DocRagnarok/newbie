 
function myFunction() {
    var a = document.getElementById("firstnumber").value
    var c =  parseInt(a)
    var b = 1
    for(let i=1; i<=c;i++){
        b = b*i 
    }
    console.log(document.getElementById("firstnumber").value)
    console.log(document.getElementById("padpad").innerHTML = b)

}