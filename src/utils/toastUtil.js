export function showSuccessToast(message) {
  Toastify({
    text: message,
    duration: 3000,
    gravity: "bottom",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "rgb(61, 137, 44)",
    },
  }).showToast();
}

export function showErrorToast(message) {
  Toastify({
    text: message,
    duration: 3000,
    gravity: "bottom",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #8B0000, #FFCCCB)",
    },
  }).showToast();
}
