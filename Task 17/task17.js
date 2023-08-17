"use strict";
let invitations = ["Ali", "Mohsin", "Muzamil"];
for (let i = 0; i < 3; i++) {
    console.log("Aoa!", invitations[i], "You are invited on a dinner at xyz on 16 December 2023");
}
console.log(invitations[2], "was busy");
invitations[2] = "Umair";
for (let k = 0; k < 3; k++) {
    console.log("Aoa", invitations[k], "You are invited on dinner at xyz on  16 December 2023");
}
invitations.unshift("Kashif");
invitations.splice(2, 0, "Hanzla");
invitations.push("Haseeb");
console.log(invitations);
for (let k = 0; k < 6; k++) {
    console.log("Aoa!", invitations[k], "You are invited to a dinner at xyz on 16 December 2023");
}
console.log("Due to Dinning Table shortage we can only invite two people");
for (let k = 5; k > 1; k--) {
    invitations.pop();
}
console.log(invitations);
for (let k = 0; k < 2; k++) {
    console.log("Aoa!", invitations[k], "You are still invited");
}
invitations.pop();
invitations.pop();
console.log(invitations);
