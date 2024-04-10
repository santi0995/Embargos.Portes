fetch("/api/sessions/", { method: "POST" })
  .then((res) => res.json())
  .then((res) => {
    if(res.statusCode !== 200){
        alert("Debes loguearte")
        location.replace("/sessions/login")
    }
  })