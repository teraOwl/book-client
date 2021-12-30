import Swal from "sweetalert2";

const showSwalExceed = (message: string) => {
    Swal.fire({
        title: "Book couldn't be downloaded",
        text: message,
        icon: "info",
        customClass: {
            popup: "popup-class",
            icon: "icon-class",
            confirmButton: "confirm-button-class",
        },
    });
};

const showSwalError = (message: string) => {
    Swal.fire({
        title: message,
        html: `check <a target="_blank" href="http://booksvooks.com">booksvooks</a> to read it online`,
        icon: "info",
        customClass: {
            popup: "popup-class",
            icon: "icon-class",
            confirmButton: "confirm-button-class",
        },
    });
};

export { showSwalExceed, showSwalError };
