buttons = document.getElementsByClassName("btn-send");
categories = document.getElementById("categories");

buttons[0].onclick = function () {
  let table = document.getElementsByClassName("table")[0];
  //   console.log(table);
  let reserve = table.rows[0]
    .getElementsByTagName("td")[1]
    .innerText.replace(/[^0-9.,]/g, "");
  let emmission = table.rows[1]
    .getElementsByTagName("td")[1]
    .innerText.replace(/[^0-9.,]/g, "");
  let delegated = table.rows[2]
    .getElementsByTagName("td")[1]
    .innerText.replace(/[^0-9.,]/g, "");
  let initialReserve = table.rows[3]
    .getElementsByTagName("td")[1]
    .innerText.replace(/[^0-9.,]/g, "");
  let initialEmission = table.rows[4]
    .getElementsByTagName("td")[1]
    .innerText.replace(/[^0-9.,]/g, "");
  let initialPrice = table.rows[5]
    .getElementsByTagName("td")[1]
    .innerText.replace(/[^0-9.,]/g, "");

  // take date value and spilt it and join by /
  let date = table.rows[6].getElementsByTagName("td")[1].innerText.split(" ");
  let createdAtDate = date[0].split("-").reverse().join("/");
  let time = date[1].split(":");
  let createdAtTime = time[0] + ":" + time[2];

  //   take selected categories from left side and store it
  let selectedCategories = Array.from(
    document.getElementById("categories").options
  ).filter((option) => option.selected);

  //   take right side categories by using name
  let categories = document.querySelector('[name="Categories[]"]');
  categories.options.length = 0;

  for (let selCat of selectedCategories) {
    categories.options.add(createOption(selCat.value, selCat.innerText));
  }
  //   console.log(categories.options.length);
  let walletPayer = table.rows[8].getElementsByTagName("td")[1].innerText;

  //   hidden categories
  let hcategories = Array.from(
    document.getElementById("categories").selectedOptions
  ).map((i) => i.value);
  console.log(hcategories);

  // document.getElementsByClassName("row").style.innerText = "center";
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
  ).map((i) => i.value);
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
  //   document.getElementsByClassName("result").style.innerText = "center";
  let result = document.getElementById("ResultJSON");
  //   result.style = "/n";
  result.value = JSON.stringify(data);
};

function createOption(value, label) {
  let option = document.createElement("option");
  option.setAttribute("value", value);
  option.innerHTML = label;

  return option;
}
