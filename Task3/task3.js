// take button access by classname
buttons = document.getElementsByClassName("btn-send");

// first button access with onlick funtion
buttons[0].onclick = function () {
  let table = document.getElementsByClassName("table")[0];
  //   console.log(table);

  // store data in variables and replace data and remove space and character
  let reserve = table.rows[0]
    .getElementsByTagName("td")[1]
    .innerText.replace(/[^0-9.]/g, "");
  let emmission = table.rows[1]
    .getElementsByTagName("td")[1]
    .innerText.replace(/[^0-9.]/g, "");
  let delegated = table.rows[2]
    .getElementsByTagName("td")[1]
    .innerText.replace(/[^0-9.]/g, "");
  let initialReserve = table.rows[3]
    .getElementsByTagName("td")[1]
    .innerText.replace(/[^0-9.]/g, "");
  let initialEmission = table.rows[4]
    .getElementsByTagName("td")[1]
    .innerText.replace(/[^0-9.]/g, "");
  let initialPrice = table.rows[5]
    .getElementsByTagName("td")[1]
    .innerText.replace(/[^0-9.]/g, "");
  let walletPayer = table.rows[8].getElementsByTagName("td")[1].innerText;

  // take date value and spilt it - and make it reverse and then join by /
  let date = table.rows[6].getElementsByTagName("td")[1].innerText.split(" ");
  let createdAtDate = date[0].split("-").reverse().join("/");
  let time = date[1].split(":");
  let createdAtTime = time[0] + ":" + time[2]; // time[0] for hour and time[2] for seconds and time[1] for min

  //   take selected categories from left side and store it in array by using filter and map method
  let selectedCategories = Array.from(
    document.getElementById("categories").options
  )
    .filter((option) => option.selected)
    .map((i) => i.innerText);

  // console.log(selectedCategories);

  //   take right side categories by using name so we have to use querySelector
  let categories = document.querySelector('[name="Categories[]"]');

  // let printcat = Array.from(categories.options).map((i) => i.innerText);
  // console.log(printcat);

  for (var i = 0; i < categories.options.length; i++) {
    // console.log(option);
    option = categories.options[i];
    if (selectedCategories.indexOf(option.innerText) != -1) {
      option.selected = true;
    }
  }

  //   hidden categories
  let hcategories = Array.from(
    document.getElementById("categories").selectedOptions
  ).map((i) => i.value);
  console.log(hcategories);

  // document.getElementById("Reserve").style.textAlign = "center";

  // set values to right side input values from left
  document.getElementById("Reserve").value = reserve;
  document.querySelector('[name="Emmission"]').value = emmission;
  document.querySelector('[name="Delegated"]').value = delegated;
  document.getElementById("InitialReserve").value = initialReserve;
  document.querySelector('[name="Initial_emission"]').value = initialEmission;
  document.getElementById("InitialPrice").value = initialPrice;
  document.getElementById("CreatedAtDate").value = createdAtDate;
  document.getElementById("CreatedAtTime").value = createdAtTime;
  document.getElementById("CategoriesString").value = hcategories;
  document.querySelector('[name="Wallet_payer"]').value = walletPayer;
};

// second button with same id access with onlick funtion
buttons[1].onclick = function () {
  // take value from input and store it
  let reserve = parseFloat(document.getElementById("Reserve").value);
  let emission = parseFloat(document.querySelector('[name="Emmission"]').value);
  let delegated = parseFloat(
    document.querySelector('[name="Delegated"]').value
  );
  let initialReserve = parseFloat(
    document.getElementById("InitialReserve").value
  );
  let initialEmission = parseFloat(
    document.querySelector('[name="Initial_emission"]').value
  );
  let initialPrice = parseFloat(document.getElementById("InitialPrice").value);
  let createdAtDate = document.getElementById("CreatedAtDate").value;
  let createdAtTime = document.getElementById("CreatedAtTime").value;
  let walletPayer = document.querySelector('[name="Wallet_payer"]').value;
  let categories = Array.from(
    document.querySelector('[name="Categories[]"]').selectedOptions
  ).map((i) => i.innerText);
  // set the all value into object
  let data = {
    reserve: reserve,
    emission: emission,
    delegated: delegated,
    initial_reserve: initialReserve,
    initial_emission: initialEmission,
    initial_price: initialPrice,
    created_at_date: createdAtDate,
    created_at_time: createdAtTime,
    categories: categories,
    wallet_payer: walletPayer,
  };

  let result = document.getElementById("ResultJSON");
  result.value = JSON.stringify(data, null, 2); // print data into json format using JSON.stringify
};
