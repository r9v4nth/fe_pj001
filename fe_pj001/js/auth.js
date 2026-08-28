const form = document.getElementById("loginForm");
const message = document.getElementById("message");

if (form) {
    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const button = form.querySelector("button[type='submit']");
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value;

        message.className = "message info";
        message.textContent = "Logging in...";
        button.disabled = true;

        try {
            const result = await apiRequest("/login", {
                method: "POST",
                body: JSON.stringify({
                    username,
                    password
                })
            });

            if (result.ok && result.data?.success) {
                localStorage.setItem("ax_token", result.data.token);
                localStorage.setItem(
                    "ax_user",
                    JSON.stringify(result.data.user)
                );

                message.className = "message success";
                message.textContent = "Login successful. Redirecting...";

                window.location.href = "home.html";
            } else {
                message.className = "message error";
                message.textContent =
                    result.data?.detail ||
                    result.data?.message ||
                    "Invalid username or password.";
            }
        } catch (error) {
            console.error(error);

            message.className = "message error";
            message.textContent = "Could not connect to backend.";
        } finally {
            button.disabled = false;
        }
    });
}


/* Password show / hide */
document.querySelectorAll(".password-toggle").forEach((button) => {

    button.addEventListener("click", () => {

        const target = document.getElementById(button.dataset.target);

        if (!target) return;

        const isVisible = target.type === "text";

        target.type = isVisible ? "password" : "text";

        /* Normal eye when password is hidden */
        if (isVisible) {

            button.innerHTML = `
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"></path>
                    <circle cx="12" cy="12" r="2.8"></circle>
                </svg>
            `;

            button.setAttribute("aria-label", "Show password");

        }

        /* Eye with slash when password is visible */
        else {

            button.innerHTML = `
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"></path>
                    <circle cx="12" cy="12" r="2.8"></circle>
                    <path d="M4 4l16 16"></path>
                </svg>
            `;

            button.setAttribute("aria-label", "Hide password");
        }
    });

});