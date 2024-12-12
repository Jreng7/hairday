import dayjs from "dayjs";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date")

const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Define a data atual! E define a data atual como sendo a data mínima. 
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = (event) => {
  // Previne de carregar a página.
  event.preventDefault();
};
