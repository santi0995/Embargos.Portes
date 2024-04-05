const selector = document.querySelector("#login");
selector.addEventListener("click", async () => {
  try {
    const data = {
      email: document.querySelector("#email").value,
      password: document.querySelector("#password").value,
    };
    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    let response = await fetch("/api/sessions/login", opts);
    response = await response.json();
    if (response.statusCode === 200) {
      console.log(response);
      location.replace("/options");
      alert(response.response);
    } else {
      const error = new Error("Wrong User or password");
      throw error;
    }
  } catch (error) {
    alert(error.message);
  }
});
