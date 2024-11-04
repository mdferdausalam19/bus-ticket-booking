// scrolling functionality
document.addEventListener("DOMContentLoaded", function () {
  const scrollButton = document.getElementById("scroll-button");
  const targetSection = document.getElementById("ticket-booking-section");

  scrollButton.addEventListener("click", function () {
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// seat selection functionality
let count = 0;
function selectedSeat() {
  document.addEventListener("click", function (e) {
    e.stopImmediatePropagation();
    const seatElement = e.target;
    if (
      seatElement.tagName === "P" &&
      seatElement.classList.contains("bg-[#F7F8F8]")
    ) {
      count++;
      if (count > 4) {
        alert(
          "Maximum ticket booking limit exceeded. You can only purchase up to 4 tickets at a time."
        );
        return;
      }

      const elementText = seatElement.innerText;

      // selected seats
      const selectedSeat = getInnerTextValueById("selected-seat");
      const totalSelectedSeat = selectedSeat + 1;
      setInnerTextById("selected-seat", totalSelectedSeat);

      // available seats
      const totalSeat = getInnerTextValueById("total-seat");
      const availableSeat = totalSeat - 1;
      setInnerTextById("total-seat", availableSeat);

      // set and remove background color
      removeBackgroundColorById(elementText);
      setBackgroundColorById(elementText);

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
      const finalGrandTotal = finalTotalPrice;
      setInnerTextById("grand-total", finalGrandTotal);

      // enable apply coupon button
      const applyButton = document.getElementById("apply-button");
      if (totalSelectedSeat === 4) {
        applyButton.removeAttribute("disabled");
      } else {
        applyButton.setAttribute("disabled", true);
      }
    }
  });
}

// apply coupon code functionality
function applyCouponCode() {
  let discount = 0;
  let couponCount = 0;
  const totalPrice = getInnerTextValueById("total-price");
  const discountedPrice = document.getElementById("discounted-price");
  const couponCode = document.getElementById("coupon-code").value;

  if (couponCode === "NEW15") {
    discount = totalPrice * 0.15;
    couponCount++;
  } else if (couponCode === "Couple 20") {
    discount = totalPrice * 0.2;
    couponCount++;
  } else {
    alert("Invalid coupon code");
  }

  if (couponCount === 1) {
    const li = document.createElement("li");
    const discountTitle = document.createElement("h3");
    discountTitle.innerText = "Discounted Price";
    const price = document.createElement("h3");
    price.innerText = "BDT " + discount;
    li.appendChild(discountTitle);
    li.appendChild(price);
    discountedPrice.appendChild(li);
    document
      .getElementById("coupon-code-container")
      .setAttribute("hidden", true);
    const initialGrandTotal = document.getElementById("grand-total");
    const finalGrandTotal = totalPrice - discount;
    setInnerTextById("grand-total", finalGrandTotal);
  }
}

// taking passenger's phone number and enable next button
const passengerPhoneNumberInput = document
  .getElementById("passenger-phone-number")
  .addEventListener("keyup", function (e) {
    const selectedSeat = getInnerTextValueById("selected-seat");
    const phoneNumber = e.target.value;
    const convertedPhoneNumber = parseInt(phoneNumber);
    const nextButton = document.getElementById("next-button");
    if (
      selectedSeat >= 1 &&
      typeof convertedPhoneNumber === "number" &&
      convertedPhoneNumber >= 0
    ) {
      nextButton.removeAttribute("disabled");
    } else {
      nextButton.setAttribute("disabled", true);
    }
  });

// next button functionality
const nextButtonElement = document.getElementById("next-button");
nextButtonElement.addEventListener("click", function () {
  count = 0;
  // update selected seat
  document.getElementById("selected-seat").innerText = "0";
  // update seat name, class & price
  document.getElementById("ticket-details").innerText = "";
  // display coupon code container
  document.getElementById("coupon-code-container").removeAttribute("hidden");
  // update coupon code input field
  document.getElementById("coupon-code").value = "";
  // disable coupon code apply button
  document.getElementById("apply-button").setAttribute("disabled", true);
  // update discounted price
  document.getElementById("discounted-price").innerText = "";
  // update total price
  document.getElementById("total-price").innerText = "0";
  // update grand total
  document.getElementById("grand-total").innerText = "0";
  // update passenger phone number, email & name
  document.getElementById("passenger-phone-number").value = "";
  document.getElementById("passenger-email").value = "";
  document.getElementById("passenger-name").value = "";
  // disable next button
  document.getElementById("next-button").setAttribute("disabled", true);
});
