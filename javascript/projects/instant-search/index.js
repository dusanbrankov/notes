import {data} from "./data.js";

// visualize one of the items in `data` (feel free to remove the next line)
// console.log(data[0]);

// TODO: implement instant search
const search = document.querySelector("#app-search");
const list = document.querySelector("#results-list");


const render = (query = "") => {
    const cleanedUpQuery = query.trim().toLowerCase();
    const filtered = data.filter(item => item.spacecraft.toLowerCase().includes(cleanedUpQuery));
    list.innerHTML = "";
    filtered.forEach(obj => {
        list.insertAdjacentHTML("beforeend", `<li>${obj.spacecraft}</li>`);
    });
}


search.addEventListener("keyup", () => {
    render(search.value);
});


render();
