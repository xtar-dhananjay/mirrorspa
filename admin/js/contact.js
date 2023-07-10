// this is for menu status bar
let allMenu = document.querySelectorAll('header nav ul li');
allMenu.forEach(e => {
    e.classList.remove('active');
})
allMenu[1].classList.add('active');

// toggle msg
let allMsgBtns = document.querySelectorAll('#inquiryTable table tbody button');
let contactCloseMsg = document.querySelector('#closeBtnBox button');

// get data from database
let loadBtn = document.querySelector('#loadBox button');
let htmlData = '';
let tableIndex = 1;
function getData(page) {
    fetch(`php/contact/getData.php?page=${page}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        if (data.totalRows == 0) {
            errMsg('data not found');
            loadBtn.style.background = 'lightgray';
            loadBtn.style.pointerEvents = "none";
        }else{
            const tBody = document.getElementById('tBody');
            tBody.innerHTML = '';
    
            data.mainData.forEach(row => {
                htmlData += `<tr>
                                <td>${tableIndex++}</td>
                                <td>${row.contactName}</td>
                                <td>${row.contactEmail}</td>
                                <td>+91 <span>${row.contactPhone}</span></td>
                                <td><button class="contactMsgBtn" msgData="${row.contactMessage}">Message</button></td>
                                <td>${row.contactTime}</td>
                            </tr>`;
                tBody.innerHTML = htmlData;
                console.log(htmlData);
            });
        }

        if (data.totalRows == 10) {
            loadBtn.style.display = 'inline-block';
        }
    });
}


let loadTime = 1;
loadBtn.onclick = () => {
    getData(loadTime++);
}
getData(loadTime++);

// view inquiry messages
$(document).on('click', '.contactMsgBtn', function() {
    let Message = $(this).attr('msgData');
    $('#contactMsg').addClass('active');
    $('#contactMsg p').text(Message);
});

$('#closeMsgBtn').click(function(){
    $('#contactMsg').removeClass('active');
});
