const increase_t = document.getElementById("increase_t");
const decrease_t = document.getElementById("decrease_t");
const q_number_t = document.getElementById("q_number_t");
function updateQuantity (e) {
    if ( e.which == null && (e.charCode != null || e.keyCode != null) ) {
        e.which = e.charCode != null ? e.charCode : e.keyCode;
    }
    let target = e.target.id;
    console.log(e);
    console.log(e.target.localName);
    const q_number = (e.target.localName === "button") ? document.getElementById(e.target.getAttribute("aria-controls")) : e.target;
    let val = Number(q_number.value);
    if ((target === "decrease_t" || target === "decrease_n") && val > 1) q_number.value = val - 1;
    if  (target === "increase_t" || target === "increase_n") q_number.value = val + 1;
    if (e.which === 33) {
        e.preventDefault();
        e.target.value = val + 10;
    }
    if (e.which === 34 && q_number.value > 10) {
        e.preventDefault();
        e.target.value = val - 10;
    }
}
function validateInput (e) {
    let increase = document.getElementById(e.target.dataset.increase);
    let decrease = document.getElementById(e.target.dataset.decrease);

    if ( e.which == null && (e.charCode != null || e.keyCode != null) ) {
        e.which = e.charCode != null ? e.charCode : e.keyCode;
    }
    if (e.which !== 8 && e.which !== 9 && e.which !== 16 && e.which !== 33 && e.which !== 34
        && e.which !== 46 && e.which !== 37 && e.which !== 38 && e.which !== 39
        && e.which !== 40 && e.which !== 48 && e.which !== 49 && e.which !== 50 && e.which !== 51
        && e.which !== 52 && e.which !== 53 && e.which !== 54 && e.which !== 55 && e.which !== 56 && e.which !== 57
        && e.which !== 96 && e.which !== 97 && e.which !== 98 && e.which !== 99 && e.which !== 100 && e.which !== 101
        && e.which !== 102 && e.which !== 103 && e.which !== 104 && e.which !== 105) {
        e.preventDefault();
    }
    else {
        if (e.which === 38) increase.click(e);
        if (e.which === 40) decrease.click(e);
        if (e.which === 33) updateQuantity(e);
        if (e.which === 34) updateQuantity(e);
    }
}
function toggleLive (e) {
    if (e.type === "focus") e.target.removeAttribute("aria-live");
    if (e.type === "blur") e.target.setAttribute("aria-live", "assertive");
}
increase_t.addEventListener("click", updateQuantity, false);
decrease_t.addEventListener("click", updateQuantity, false);
increase_n.addEventListener("click", updateQuantity, false);
decrease_n.addEventListener("click", updateQuantity, false);
q_number_t.addEventListener("keydown", validateInput, false);
q_number_t.addEventListener("focus", toggleLive, false);
q_number_t.addEventListener("blur", toggleLive, false);
q_number_n.addEventListener("keydown", updateQuantity, false);
q_number_n.addEventListener("focus", toggleLive, false);
q_number_n.addEventListener("blur", toggleLive, false)