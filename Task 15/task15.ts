let invitations = ["Ali", "Mohsin", "Muzamil"];
for (let i = 0; i < 3; i++) {
    console.log("Aoa!", invitations[i], "You are invited on a dinner at xyz on 16 December 2023");
}
console.log(invitations[2],"was busy");
invitations[2]="Umair";
for(let k =0;k<3;k++){
    console.log("Aoa",invitations[k],"You are invited on dinner at xyz on  16 December 2023");
}