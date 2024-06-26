fetch("/api/sessions/", { method: "POST" })
  .then((res) => res.json())
  .then((res) => {
    if(res.statusCode===200) {
      document.querySelector(".navbar-nav").removeChild(document.querySelector("#registerButton"))
      document.querySelector(".navbar-nav").removeChild(document.querySelector("#loginButton"))
      document.querySelector("#signout").addEventListener("click", async () => {
        try {
          const token = localStorage.getItem("token");
          const opts = {
            method: "POST",
            headers: { "Content-Type": "application/json" /* , token */ },
          };
          let response = await fetch("/api/sessions/signout", opts);
          response = await response.json();
          if (response.statusCode === 200) {
            alert(response.response);
            localStorage.removeItem("token");
            location.replace("/sessions/login");
          }
        } catch (error) {
          console.log(error);
        }
      });
    } else {
      document.querySelector(".navbar-nav").removeChild(document.querySelector("#signout"))
      document.querySelector(".navbar-nav").removeChild(document.querySelector("#newProduct"))
      document.querySelector(".navbar-nav").removeChild(document.querySelector("#home"))
    }
    if (res.response?.role===0) {
      document.querySelector(".navbar-nav").removeChild(document.querySelector("#formButton"))
    } else if (res.response?.role===1) {
    }
  });