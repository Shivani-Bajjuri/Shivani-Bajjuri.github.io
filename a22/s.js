document.getElementById("searchBtn").addEventListener("click", async () => {
    const emailInput = document.getElementById("email");
    const result = document.getElementById("result");
    const loading = document.getElementById("loading");

    const email = emailInput.value.trim().toLowerCase();
    result.textContent = "";

    if (!email) {
        result.textContent = "Please enter an email.";
        return;
    }

    if (loading) loading.style.display = "block";

    try {
        const userResponse = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await userResponse.json();
        const user = users.find(u => u.email.toLowerCase() === email);

        if (user) {
            const postResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
            const posts = await postResponse.json();
            const userPosts = posts.filter(post => post.userId === user.id);

            result.innerHTML = `
                <strong>Name:</strong> ${user.name}<br>
                <strong>Username:</strong> ${user.username}<br>
                <strong>Email:</strong> ${user.email}<br>
                <strong>Total Posts:</strong> ${userPosts.length}
            `;
        } else {
            result.textContent = "User not found.";
        }
    } catch (error) {
        console.error(error);
        result.textContent = "Error fetching data. Please try again.";
    } finally {
        if (loading) loading.style.display = "none";
    }
});
