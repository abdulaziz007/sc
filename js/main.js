// Calendar Settings
$(document).ready(function() {
  $("#MADate").datetimepicker({
    locale: "ar-sa",
    format: "iYYYY-iMM-iDD",
    dayViewHeaderFormat: "iMMMM iYYYY",
    allowInputToggle: true,
    showTodayButton: false,
    useCurrent: false,
    showClear: false,
    isRTL: true,
    keepOpen: false,
    hijri: true,
    debug: false
  });
  $("#bachDate").datetimepicker({
    locale: "ar-sa",
    format: "iYYYY-iMM-iDD",
    dayViewHeaderFormat: "iMMMM iYYYY",
    allowInputToggle: true,
    showTodayButton: false,
    useCurrent: false,
    showClear: false,
    isRTL: true,
    keepOpen: false,
    hijri: true,
    debug: false
  });
  $("#PHDDate").datetimepicker({
    locale: "ar-sa",
    format: "iYYYY-iMM-iDD",
    dayViewHeaderFormat: "iMMMM iYYYY",
    allowInputToggle: true,
    showTodayButton: false,
    useCurrent: false,
    showClear: false,
    isRTL: true,
    keepOpen: false,
    hijri: true,
    debug: false
  });
  $("#MOEDate").datetimepicker({
    locale: "ar-sa",
    format: "iYYYY-iMM-iDD",
    dayViewHeaderFormat: "iMMMM iYYYY",
    allowInputToggle: true,
    showTodayButton: false,
    useCurrent: false,
    showClear: false,
    isRTL: true,
    keepOpen: false,
    hijri: true,
    debug: false
  });
  $("#nowDate").datetimepicker({
    locale: "ar-sa",
    format: "iYYYY-iMM-iDD",
    dayViewHeaderFormat: "iMMMM iYYYY",
    allowInputToggle: true,
    showTodayButton: false,
    useCurrent: false,
    showClear: false,
    isRTL: true,
    keepOpen: false,
    hijri: true,
    debug: false
  });
});
// Change the message for required fields
document.addEventListener("DOMContentLoaded", function() {
  var elements = document.getElementsByTagName("INPUT");
  for (var i = 0; i < elements.length; i++) {
    elements[i].oninvalid = function(e) {
      e.target.setCustomValidity("");
      if (!e.target.validity.valid) {
        e.target.setCustomValidity("الحقل مطلوب");
      }
    };
    elements[i].oninput = function(e) {
      e.target.setCustomValidity("");
    };
  }
});
var httpRequest;
// Getting the email while typing it
let email_conf = document.querySelector("#email");
email_conf.onkeyup = function() {
  document.querySelector("#email-conf").innerHTML = email_conf.value;
};
// Getting the name while typing it
let dear_name = document.querySelector("#name");
dear_name.onkeyup = function() {
  document.querySelector("#dear-name").innerHTML = dear_name.value;
};

// Calculate how many years served
function calcAmount() {
  var year_amount = document.getElementById("year_amount");
  var mount = 0;

  var ele = document.getElementById("year1").value;
  if (ele == "") {
    ele = 0;
  }
  var mediat = document.getElementById("year2").value;
  if (mediat == "") {
    mediat = 0;
  }
  var high = document.getElementById("year3").value;
  if (high == "") {
    high = 0;
  }
  var boss = document.getElementById("year4").value;
  if (boss == "") {
    boss = 0;
  }
  var vboss = document.getElementById("year5").value;
  if (vboss == "") {
    vboss = 0;
  }
  var advisor = document.getElementById("year6").value;
  if (advisor == "") {
    advisor = 0;
  }
  var superv = document.getElementById("year7").value;
  if (superv == "") {
    superv = 0;
  }
  var other = document.getElementById("year8").value;
  if (other == "") {
    other = 0;
  }

  year_amount.value =
    parseInt(ele) +
    parseInt(mediat) +
    parseInt(high) +
    parseInt(boss) +
    parseInt(vboss) +
    parseInt(advisor) +
    parseInt(superv) +
    parseInt(other);
}

// Getting data and sending it to the server
var httpRequest;
let script_url =
  "https://script.google.com/macros/s/AKfycbxiKh8uYjl3dJW-Mn0U1FW_nag0yjr03Aw_PmPfmfM0VC8l39xY/exec";
function insert_value() {
  const loader = document.querySelector("#loader");
  loader.removeAttribute("hidden");
  let fullName = document.querySelector("#name").value;
  let job = document.querySelector("#job").value;
  let phone = "'" + document.querySelector("#phone").value;
  let email = document.querySelector("#email").value;
  let answer1 = document.querySelector(
    'input[name="inlineRadioOptions"]:checked'
  ).value;
  let answer2 = document.querySelector(
    'input[name="inlineRadioOptions2"]:checked'
  ).value;
  let answer3 = document.querySelector(
    'input[name="inlineRadioOptions3"]:checked'
  ).value;
  let answer4 = document.querySelector(
    'input[name="inlineRadioOptions4"]:checked'
  ).value;
  let answer5 = document.querySelector(
    'input[name="inlineRadioOptions5"]:checked'
  ).value;
  let answer6 = document.querySelector(
    'input[name="inlineRadioOptions6"]:checked'
  ).value;
  let url =
    script_url +
    "?full_name=" +
    fullName +
    "&job=" +
    job +
    "&phone=" +
    phone +
    "&email=" +
    email +
    "&answer1=" +
    answer1 +
    "&answer2=" +
    answer2 +
    "&answer3=" +
    answer3 +
    "&answer4=" +
    answer4 +
    "&answer5=" +
    answer5 +
    "&answer6=" +
    answer6 +
    "&action=insert";

  // Old compatibility code, no longer needed.
  if (window.XMLHttpRequest) {
    // Mozilla, Safari, IE7+ ...
    httpRequest = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    // IE 6 and older
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
  }
  httpRequest.onreadystatechange = serverFeedback;
  httpRequest.open("GET", url, true);
  httpRequest.send();
}

function serverFeedback() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      document.querySelector("#resetForm").reset();
      let feedback = JSON.parse(httpRequest.responseText);
      alert(feedback.result);
      if (feedback.resultStatus == 1) {
        window.location.replace("results.html");
      } else {
        window.location.replace("index.html");
      }
    } else {
      alert("الرجاء المحاولة بوقت آخر");
    }
  }
  // let resultStatus = e["resultStatus"];
  // let result = e["result"];
  // console.log(result);
  // console.log(resultStatus);
  // //alert(result);
  // if (resultStatus == 0) {
  //   document.getElementById("message").innerHTML =
  //     '<div class="alert alert-danger mt-5" role="alert">تم اختبارك سابقاً الرجاء التواصل مع المدرب</div> ';
  //   document.getElementById("message-bottom").innerHTML =
  //     '<div class="alert alert-danger mt-5" role="alert">تم اختبارك سابقاً الرجاء التواصل مع المدرب</div> ';
  // } else if (resultStatus == 1) {
  //   document.getElementById("message").innerHTML =
  //     '<div class="alert alert-primary mt-5" role="alert">تم ارسال اجاباتك بنجاح</div> ';
  //   document.getElementById("message-bottom").innerHTML =
  //     '<div class="alert alert-primary mt-5" role="alert">تم ارسال اجاباتك بنجاح</div> ';
  //   document.getElementById("resetForm").reset();
  // } else {
  //   document.getElementById("message").innerHTML =
  //     ' <div class="alert alert-danger mt-5" role="alert">الرجاء المحاولة بوقت آخر </div> ';
  //   document.getElementById("message-bottom").innerHTML =
  //     ' <div class="alert alert-danger mt-5" role="alert">الرجاء المحاولة بوقت آخر </div> ';
  // }
}
