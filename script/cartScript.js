// function calculate total price and display it
function calculateTotalPrice() {
  const cart = JSON.parse(localStorage.getItem("cart")) || []; //to make it to object

  let bookNames = [0, 0, 0, 0, 0, 0, 0];
  console.log(cart);

  // add harry potter to book name
  cart.forEach((item) => {
    switch (item.title) {
      case "แฮร์รี่ พอตเตอร์กับศิลาอาถรรพ์":
        bookNames[0]++;
        break;
      case "แฮร์รี่ พอตเตอร์กับห้องแห่งความลับ":
        bookNames[1]++;
        break;
      case "แฮร์รี่ พอตเตอร์กับนักโทษแห่งอัซคาบัน":
        bookNames[2]++;
        break;
      case "แฮร์รี่ พอตเตอร์กับถ้วยอัคนี":
        bookNames[3]++;
        break;
      case "แฮร์รี่ พอตเตอร์กับภาคีนกฟีนิกซ์":
        bookNames[4]++;
        break;
      case "แฮร์รี่ พอตเตอร์กับเจ้าชายเลือดผสม":
        bookNames[5]++;
        break;
      case "แฮร์รี่ พอตเตอร์กับเครื่องรางยมทูต":
        bookNames[6]++;
        break;
      default:
    }
  });

  const bookPrice = 100;
  let totalPrice = 0;
  let count = 0;
  let check = true;
  let pairs = [];

  //find the total price
  bookNames.forEach((bookName) => {
    totalPrice += bookName * bookPrice;
  });

  //fine the pair
  while (check) {
    let i = 0;
    bookNames.forEach((bookName) => {
      if (bookName > 0) {
        bookNames[i]--;
        count++;
      }
      i++;
    });
    if (count != 0) pairs.push(count);

    if (count <= 1) check = false;
    else count = 0;
  }
  // pair is pair of the book
  let discountPrice = 0;

  //calculate the discount
  pairs.forEach((pair) => {
    discountPrice += pair * bookPrice * (((pair - 1) * 10) / 100);
  });

  //to check if it's not harry potter
  cart.forEach((item) => {
    switch (item.title) {
      case "แฮร์รี่ พอตเตอร์กับศิลาอาถรรพ์":
        break;
      case "แฮร์รี่ พอตเตอร์กับห้องแห่งความลับ":
        break;
      case "แฮร์รี่ พอตเตอร์กับนักโทษแห่งอัซคาบัน":
        break;
      case "แฮร์รี่ พอตเตอร์กับถ้วยอัคนี":
        break;
      case "แฮร์รี่ พอตเตอร์กับภาคีนกฟีนิกซ์":
        break;
      case "แฮร์รี่ พอตเตอร์กับเจ้าชายเลือดผสม":
        break;
      case "แฮร์รี่ พอตเตอร์กับเครื่องรางยมทูต":
        break;
      default:
        totalPrice += item.price;
    }
  });

  // the netprice
  let netPrice = totalPrice - discountPrice;
  console.log(cart);

  totalPrice = document.getElementById(
    "totalPrice"
  ).textContent = `ราคารวม: ${totalPrice.toFixed(2)} บาท`;

  discountPrice = document.getElementById(
    "discountPrice"
  ).textContent = `ส่วนลด: ${discountPrice.toFixed(2)} บาท`;

  netPrice = document.getElementById(
    "netPrice"
  ).textContent = `รวมสุทธิ: ${netPrice.toFixed(2)} บาท`;
}

// function to display book in cart 
function displayCartItems() {
  const cartList = document.getElementById("cartList");
  cartList.innerHTML = ""; // Clear the current cart items

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.textContent = `${item.title} - ${item.price.toFixed(2)} บาท`;
    cartList.appendChild(listItem);
  });
}

// setup
displayCartItems();
calculateTotalPrice();

// function to clear the book on Local Storage session
function clearLocalStorage() {
  localStorage.removeItem("cart");
  // After clearing, you can also redirect back to the index page or take any other desired action.
}

// add click to "Clear Cart" button
const clearCartButton = document.getElementById("clearCartButton");
clearCartButton.addEventListener("click", function () {
  if (
    confirm(
      "Are you sure you want to clear the cart?"
    )
  ) {
    // do the function
    clearLocalStorage();
    // navigate to index.html
    window.location.href = "index.html";
  }
});
