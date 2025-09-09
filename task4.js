import { getServerURL } from "./task1.js";

// Task 4: delUser(number)
export async function delUser(number) {
    const response = await fetch(getServerURL() + "users/" + number, {
        method: "DELETE"
    });
}
