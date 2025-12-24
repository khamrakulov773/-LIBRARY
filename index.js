import { formatDateToRU, formatDateToUS } from "./lib/formatDate/formatDate.js";

let country = "ru";
const currentDate = new Date();

const formatDateForCountry = (date, country) => {
    switch (country){
        case "us":
            return formatDateToUS(date);
        case "ru":
            return formatDateToRU(date);

        default:
            return formatDateToRU(date);
    }
};

const now = formatDateForCountry(currentDate, country);

const weekLater = new Date(currentDate.getTime() + 1000 * 60 * 60 * 24 * 7);
const then = formatDateForCountry(weekLater, country);

document.getElementById("now").innerText = now;
document.getElementById("then").innerText = then;

