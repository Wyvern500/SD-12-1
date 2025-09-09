import { getServerURL } from "./task1.js";

// Task 3: addUser(first_name, last_name, email)
export async function addUser(first_name, last_name, email) {
    let id;
    await fetch(getServerURL() + "users").then(response => response.json()).then(data => id = data[data.length - 1].id);

    const response = await fetch(getServerURL() + "users", {
        method: "POST",
        body: JSON.stringify({ id: "" + (parseInt(id) + 1), first_name: first_name, last_name: last_name, email: email })
    });
}
