$("#submit-form").submit((e) => {
    e.preventDefault()
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbxZwTxlXmA-jKJJZ-cf86JgDea48lgimiJDVIh2b-1VgupFZz0/exec",
        data: $("#submit-form").serialize(),
        method: "post",
        success: function (response) {
            // alert("Form submitted successfully")
            // location.href = "./submission.html"
            // window.location.reload()
            //window.location.href="https://google.com"
        },
        error: function (err) {
            alert("Something Error")

        }
    })
})

var form1 = document.getElementById("form1")
var form2 = document.getElementById("form2")
var form3 = document.getElementById("form3")
var form4 = document.getElementById("form4")
var form5 = document.getElementById("form5")
var form6 = document.getElementById("form6")
var form7 = document.getElementById("form7")
var form8 = document.getElementById("form8")
var form9 = document.getElementById("form9")
var form10 = document.getElementById("form10")
var form11 = document.getElementById("form11")
var form12 = document.getElementById("form12")

const container = document.querySelector(".container")
const container2 = document.querySelector(".container2")

document.querySelector(".button").onclick = () => {
    container.style.display = "none"
    container2.style.visibility = "visible"
    document.getElementById("sub1").innerHTML = form1.value
    console.log(form1)
    document.getElementById("sub2").innerHTML = form2.value
    console.log(form2)
    document.getElementById("sub3").innerHTML = form3.value
    console.log(form3)
    document.getElementById("sub4").innerHTML = form4.value
    console.log(form4)
    document.getElementById("sub5").innerHTML = form5.value
    console.log(form5)
    document.getElementById("sub6").innerHTML = form6.value
    console.log(form6)
    document.getElementById("sub7").innerHTML = form7.value
    console.log(form7)
    document.getElementById("sub8").innerHTML = form8.value
    console.log(form8)
    document.getElementById("sub9").innerHTML = form9.value
    console.log(form9)
    document.getElementById("sub10").innerHTML = form10.value
    console.log(form10)
    document.getElementById("sub11").innerHTML = form11.value
    console.log(form11)
    document.getElementById("sub12").innerHTML = form12.value
    console.log(form12)

}