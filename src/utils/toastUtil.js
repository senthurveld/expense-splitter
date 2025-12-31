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
      background: "tomato",
    },
  }).showToast();
}
