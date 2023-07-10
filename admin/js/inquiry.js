let loadBtn = document.querySelector('#loadBox button');


let htmlData = '';
let tableIndex = 1;
function getData(page) {
    fetch(`php/inquiry/getData.php?page=${page}`)
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
                            <td>${row.inquiryName}</td>
                            <td>+91 <span>${row.InquiryPhone}</span></td>
                            <td>${row.inquiryTime}</td>
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