
//import url
let url = 'https://studentcrudapplication.onrender.com'
//let url = "http://localhost:8020"

function LOAD(e) {
    $.ajax({
        url: url+"/fetch",
        type: "GET",
        success: (posRes) => {
            console.log(posRes)
            let x = ``
            x = x + `<table border = 1px    
                            cellspacing = 10px
                            cellpadding = 10px
                            align = center>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Gender</th>
                            <th>Language</th>
                            <th>Zipcode</th>
                        </tr>
                    </thead>
                    <tbody>
            `
            for (let i = 0; i < posRes.length; i++) {
                x = x + `
                    <tr>
                        <td>${posRes[i].s_id}</td>
                        <td>${posRes[i].s_name}</td>
                        <td>${posRes[i].s_email}</td>
                        <td>${posRes[i].s_phonenumber}</td>
                        <td>${posRes[i].s_gender}</td>
                        <td>${posRes[i].s_language}</td>
                        <td>${posRes[i].s_zipcode}</td>
                    </tr>
                `
            }
            x = x + `</tbody>
                </table>`
            document.getElementById('op').innerHTML = x
        },
        error: (errRes) => {
            console.log(errRes)
        }
    })
}

$(document).ready(() =>{
    $('#getData').click(()=>{
        LOAD()
    })
    $('#send').click((e) => {
        e.preventDefault()  //preventing default behaviour of browser
        let data = {
            "s_id": parseInt(document.getElementById('s_id').value),
            "s_name": document.getElementById("s_name").value,
            "s_email": document.getElementById("s_email").value,
            "s_phonenumber": parseInt(document.getElementById("s_phonenumber").value),
            "s_gender": document.getElementById("s_gender").value,
            "s_language": document.getElementById("s_language").value,
            "s_zipcode": parseInt(document.getElementById("s_zipcode").value),
        }
        $.ajax({
            url: url+"/insert",
            type: 'POST',
            data: data,
            success: (posRes) => {
                console.log(posRes)
            },
            error: (errRes) => {
                console.log(errRes)
            }
        })
        LOAD()
    })
    $('#update').click((e) => {
        e.preventDefault()
        //let p_id= parseInt(document.getElementById('id').value)
        let data = {
            "s_id": parseInt(document.getElementById('s_id').value),
            "s_name": document.getElementById("s_name").value,
            "s_email": document.getElementById("s_email").value,
            "s_phonenumber": parseInt(document.getElementById("s_phonenumber").value),
            "s_gender": document.getElementById("s_gender").value,
            "s_language": document.getElementById("s_language").value,
            "s_zipcode": parseInt(document.getElementById("s_zipcode").value),
        }
        $.ajax({
            url: url +"/update",
            type: 'POST',
            data: data,
            success: (posRes) => {
                console.log(posRes)
            },
            error: (errRes) => {
                console.log(errRes)
            }
        })
    })
    $('#delete').click((e) => {
        e.preventDefault()
        let data={
            "s_id": parseInt(document.getElementById('s_id').value)
        }
        $.ajax({
            url: url +"/delete",
            type: 'POST',
            data: data,
            success: (posRes) => {
                console.log(posRes)
            },
            error: (errRes) => {
                console.log(errRes)
            }
        })
    })
})
