let powerUp = "Mushroom",
    effect = "";
if (powerUp == "Mushroom") {
    effect = "Mario becomes Super";
} else if (powerUp == "flower") {
    effect = "Mario can shoot fireballs!";
} else if (powerUp == "star") {
    effect = "Mario is invincible!";
} else if (powerUp == "none") {
    effect = "Mario is normal";
} else {
    effect = "Unknow PowerUP";
}
console.log(effect);