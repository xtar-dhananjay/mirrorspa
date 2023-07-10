let seoTitle = document.getElementById('seoTitle');
let seoKeywords = document.getElementById('seoKeywords');
let seoAuthor = document.getElementById('seoAuthor');
let submitBtn = document.querySelector('#formSection form button');

function getData(){
    fetch(`php/seo/getData.php?page="Contact"`)
    .then(Response => Response.json())
    .then(data => {
        seoTitle.value = data[0].title;            
        seoKeywords.value = data[0].keywords;        
        seoAuthor.value = data[0].author;            
    })
}
getData();


submitBtn.onclick = (e) => {
    e.preventDefault();

    let seoForm = document.querySelector('#formSection form');
    var formData = new FormData(seoForm);
    var jsonObject = {};

    for (var pair of formData.entries()) {
        jsonObject[pair[0]] = pair[1];
    }

    var jsonData = JSON.stringify(jsonObject);
    fetch('php/seo/insert.php', {
        method: "PUT",
        body: jsonData,
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(Response => Response.json())
    .then(data => {
        if (data.status == "success") {   
            sucMsg('Details Updated');
        }else{
            errMsg('have a some Problem');   
        }
    })


}

