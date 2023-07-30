export default function showActivetab(tab) {
    const previousTab = document.querySelector(".active");
    if (previousTab) {
        previousTab.classList.toggle("active");
    }
    tab.classList.toggle("active");
};