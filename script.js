document.body.style.backgroundColor = "black";
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
    .then((registration) => {
    console.log('Service Worker registered with scope:', registration.scope);
})
.catch((error) => {
    console.error('Service Worker registration failed:', error);
});
}
let title = document.title;
window.onload = window.location.href = title;