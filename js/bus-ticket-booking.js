// button scrolling functionality
document.addEventListener("DOMContentLoaded", function () {
  const scrollButton = document.getElementById("scroll-button");
  const targetSection = document.getElementById("ticket-booking-section");

  scrollButton.addEventListener("click", function () {
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// selected seat
function selectedSeat() {
  let count = 1;
  document.addEventListener("click", function (e) {
    const seatElement = e.target;
    if (
      seatElement.tagName === "P" &&
      seatElement.classList.contains("bg-[#F7F8F8]")
    ) {
      seatElement.removeAttribute("onclick");
      const elementText = seatElement.innerText;
      removeBackgroundColorById(elementText);
      setBackgroundColorById(elementText);

      // available seats
      const totalSeat = getInnerTextValueById("total-seat");
      const availableSeat = totalSeat - 1;
      setInnerTextById("total-seat", availableSeat);

      // selected seat
      const selectedSeat = getInnerTextValueById("selected-seat");
      const totalSelectedSeat = selectedSeat + count;
      setInnerTextById("selected-seat", totalSelectedSeat);

      // seat name, class & price
      const ticketDetails = document.getElementById("ticket-details");
      const li = document.createElement("li");
      const seatName = document.createElement("p");
      seatName.innerText = elementText;
      const seatClass = document.createElement("p");
      seatClass.innerText = "Economy";
      const ticketPrice = document.createElement("p");
      ticketPrice.innerText = "550";
      li.appendChild(seatName);
      li.appendChild(seatClass);
      li.appendChild(ticketPrice);
      ticketDetails.appendChild(li);

      // total price
      const initialTotalPrice = getInnerTextValueById("total-price");
      const perTicketPrice = 550;
      const finalTotalPrice = initialTotalPrice + perTicketPrice;
      
      setInnerTextById("total-price", finalTotalPrice);

      // grand total
      const initialGrandTotal = document.getElementById("grand-total");
      setInnerTextById("grand-total", finalTotalPrice);

    }
  });
}
