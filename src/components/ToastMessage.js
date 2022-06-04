import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
const Toastmessage = (message) => {
   return Toastify({
      text: message,
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
         background: "linear-gradient(to right, #654ea3, #eaafc8)",
      },
      onClick: function () {}, // Callback after click
   }).showToast();
};

export default Toastmessage;
