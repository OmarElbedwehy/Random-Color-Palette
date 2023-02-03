let divs = document.querySelectorAll("div");
let divs_card_arr = []

function RandomHex() {
    return Math.random().toString(16).slice(2, 8)
}

for (let i = 0; i < divs.length; i++) {
    if (divs[i].id == "card") {
        divs_card_arr.push(divs[i]);
    }
}

for (let i = 0; i < divs_card_arr.length; i++) {
    divs_card_arr[i].id += `-${i}`;
    divs_card_arr[i].classList.add("card");
    divs_card_arr[i].querySelector("#color").textContent = "#2e714d"
}

for (let i = 0; i < divs_card_arr.length; i++) {
    window.localStorage.setItem(`card-${i}`, RandomHex());
    if (divs_card_arr[i].id == `card-${i}`) {
        divs_card_arr[i].querySelector("#applied_color").style.backgroundColor = `#${window.localStorage.getItem(`card-${i}`)}`;
        divs_card_arr[i].querySelector("#color").textContent = `#${window.localStorage.getItem(`card-${i}`)}`;
    }
}

let rand_btn = document.querySelector("#rand_btn");

rand_btn.addEventListener("click", () => {
    for (let i = 0; i < divs_card_arr.length; i++) {
        window.localStorage.setItem(`card-${i}`, RandomHex());
        if (divs_card_arr[i].id == `card-${i}`) {
            divs_card_arr[i].querySelector("#applied_color").style.backgroundColor = `#${window.localStorage.getItem(`card-${i}`)}`;
            divs_card_arr[i].querySelector("#color").innerHTML = `#${window.localStorage.getItem(`card-${i}`)}`;
        }
    }
})

let ps = document.querySelectorAll("p");

ps.forEach((ele)=>{
    ele.addEventListener("click", (e)=>{
        navigator.clipboard.writeText(e.target.textContent);
        e.target.parentElement.querySelector(".after").style.opacity = "1"
        e.target.parentElement.querySelector(".before").style.opacity = "1"
        setTimeout(()=>{
            e.target.parentElement.querySelector(".after").style.opacity = "0"
            e.target.parentElement.querySelector(".before").style.opacity = "0"
        }, 1000)
    })
})