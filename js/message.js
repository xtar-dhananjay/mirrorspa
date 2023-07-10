
// message box
let successMsg = document.getElementById('successMsg');
let errorMsg = document.getElementById('errorMsg');

function errMsg(content){
    if (successMsg.classList.contains('activeMsg')) {
        successMsg.classList.remove('activeMsg');
    }
    let msgContent = errorMsg.querySelector('p');
    msgContent.innerText = content;
    errorMsg.classList.add('activeMsg');
    errorMsgTime();
}

function sucMsg(content){
    if (errorMsg.classList.contains('activeMsg')) {
        errorMsg.classList.remove('activeMsg');
    }
    let sucContent = successMsg.querySelector('p');
    sucContent.innerText = content;
    successMsg.classList.add('activeMsg');
    sucessMsgTime();
}

function errorMsgTime() {
    if (!errorMsg.classList.contains('activeTime')) {
        errorMsg.classList.add('activeTime');
        setTimeout(function() {
            errorMsg.classList.remove('activeMsg');
          console.log("Timeout complete!");
        }, 3000);
      
        function callbackFunction() {
          console.log("Callback function called after timeout!");
          errorMsg.classList.remove('activeTime');
        }
      
        setTimeout(callbackFunction, 3000);
    }
}


function sucessMsgTime() {
    if (!successMsg.classList.contains('activeTime')) {
        successMsg.classList.add('activeTime');
        setTimeout(function() {
            successMsg.classList.remove('activeMsg');
          console.log("Timeout complete!");
        }, 3000);
      
        function callbackFunction1() {
          console.log("Callback function called after timeout!");
          successMsg.classList.remove('activeTime');
        }
      
        setTimeout(callbackFunction1, 3000);
    }
}