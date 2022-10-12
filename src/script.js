arrProducts = [];
$(document).ready(function () {
  let fg = 0;
  let eFlag = 0;
  $("#product_sku ").css("border-color", "black");
  $("#product_name").css("border-color", "black");
  $("#product_price ").css("border-color", "black");
  $("#product_quantity").css("border-color", "black");

  $("#update_product").click(function () {
    $("#product_sku ").css("border-color", "black");
    $("#product_name").css("border-color", "black");
    $("#product_price ").css("border-color", "black");
    $("#product_quantity").css("border-color", "black");

    let updateSku = Number($("#product_sku").val());
    let updateName = $("#product_name").val();
    let updatePrice = Number($("#product_price").val());
    let updateQuant = Number($("#product_quantity").val());
    let updateNameLen = updateName.length;

    if (fg == 0) {
      if (updateSku < 0) {
        $("#product_sku").focus().css("border-color", "red");
        fg = 1;
        $(".errorForm")
          .html("Product SKU can not be Lesser than 0 ")
          .css("background-color", "#FF5733");
        setTimeout(function () {
          $(".errorForm").css("display", "none");
        }, 5000);
      } else if (!(updateNameLen > 1)) {
        $("#product_name").focus().css("border-color", "red");
        fg = 1;
        $(".errorForm")
          .html("Product Name Can not be Empty Only Character allowed")
          .css("background-color", "#FF5733");
        setTimeout(function () {
          $(".errorForm").css("display", "none");
        }, 5000);
      } else if (updatePrice <= 0) {
        $("#product_price").focus().css("border-color", "red");
        fg = 1;
        $(".errorForm")
          .html("Product Price can not be less than Rs.0 or Rs.0")
          .css("background-color", "#FF5733");
        setTimeout(function () {
          $(".errorForm").css("display", "none");
        }, 5000);
      } else if (updateQuant <= 0) {
        $("#product_quantity").focus().css("border-color", "red");
        fg = 1;
        $(".errorForm")
          .html("Product Quantity can not be 0")
          .css("background-color", "#FF5733");
        setTimeout(function () {
          $(".errorForm").css("display", "none");
        }, 5000);
      } else if (fg == 0) {
        arrProducts[update].productSku = $("#product_sku").val();
        arrProducts[update].productName = $("#product_name").val();
        arrProducts[update].productPrice = $("#product_price").val();
        arrProducts[update].productQuantity = $("#product_quantity").val();
        displayTable(arrProducts);
        $(".success1").css("display", "block");
        $(".error").css("display", "none");
        $(".success").css("display", "none");
        setTimeout(function () {
          $(".success1").css("display", "none");
        }, 5000);
      }
    }
  });

  $("#add_product").click(function () {
    $("#product_sku ").css("border-color", "black");
    $("#product_name").css("border-color", "black");
    $("#product_price ").css("border-color", "black");
    $("#product_quantity").css("border-color", "black");
    let fg = 0;
    if (
      $("#product_sku").val() == "" ||
      $("#product_name").val() == "" ||
      $("#product_price").val() == "" ||
      $("#product_quantity").val() == ""
    ) {
      fg = 1;
      $("#product_sku").focus().css("border-color", "red");
      $("#product_name").focus().css("border-color", "red");
      $("#product_price").focus().css("border-color", "red");
      $("#product_quantity").focus().css("border-color", "red");
      $(".error").css("display", "block");
      setTimeout(function () {
        $(".error").css("display", "none");
      }, 5000);
    }
    let sku = Number($("#product_sku").val());
    let name = $("#product_name").val();
    let price = Number($("#product_price").val());
    let quant = Number($("#product_quantity").val());
    nameLen = name.length;
    if (fg == 0) {
      if (sku < 0) {
        $("#product_sku").focus().css("border-color", "red");
        fg = 1;
        $(".errorForm")
          .html("Product SKU can not be Lesser than 0 ")
          .css("background-color", "#FF5733");
        setTimeout(function () {
          $(".errorForm").css("display", "none");
        }, 5000);
      } else if (!(nameLen > 1)) {
        $("#product_name").focus().css("border-color", "red");
        fg = 1;
        $(".errorForm")
          .html("Product Name Can not be Empty Only Character allowed")
          .css("background-color", "#FF5733");
        setTimeout(function () {
          $(".errorForm").css("display", "none");
        }, 5000);
      } else if (price <= 0) {
        $("#product_price").focus().css("border-color", "red");
        fg = 1;
        $(".error")
          .html("Product Price can not be less than Rs.0 or Rs.0")
          .css("background-color", "#FF5733");
      } else if (quant <= 0) {
        $("#product_quantity").focus().css("border-color", "red");
        fg = 1;
        $(".error")
          .html("Product Quantity can not be 0")
          .css("background-color", "#FF5733");

        $(".error").css("display", "block");
        $(".success").css("display", "none");
        $(".success1").css("display", "none");
      } else if (fg == 0) {
        var prodObj = {
          productSku: sku,
          productName: name,
          productPrice: quant,
          productQuantity: price,
        };
        arrProducts.forEach((e) => {
          if (e.productSku == sku) {
            eFlag = 1;
          }
        });
        if (eFlag == 0) {
          arrProducts.push(prodObj);
          displayTable(arrProducts);
          $(".success").css("display", "block");
          $(".success1", ".error").css("display", "none");
          $(".error").css("display", "none");
          setTimeout(function () {
            $(".success").css("display", "none");
          }, 5000);
        } else {
          $(".success").css("display", "none");
          $(".success1", ".error").css("display", "none");
          $(".error").css("display", "block");
          alert("Can not add duplicate values");
        }
      }
    }
  });
});
function del(d) {
  arrProducts.splice(d, 1);
  displayTable(arrProducts);
}
var update;
function edi(e) {
  console.log(e);
  $("#product_sku").val(arrProducts[e].productSku),
    $("#product_name").val(arrProducts[e].productName),
    $("#product_price").val(arrProducts[e].productPrice),
    $("#product_quantity").val(arrProducts[e].productQuantity),
    (update = e);
  $("#add_product").css("display", "none");

  $("#update_product").css("display", "block");
}

function displayTable(data) {
  c = 0;
  t =
    "<tr> <th>SKU</th> <th>Name:</th> <th>Price:</th> <th>Quantity:</th> <th>Action:</th> </tr>";
  data.forEach((e) => {
    t +=
      "<tr><td>" +
      e.productSku +
      "</td><td>" +
      e.productName +
      "</td><td>" +
      e.productPrice +
      "</td><td>" +
      e.productQuantity +
      "</td><td><a href=# id='" +
      c +
      "' onclick='edi(this.id)'>Edit</a>&nbsp;<a href=# id='" +
      c +
      "' onclick='del(this.id)'>Delete</a></td></tr>";
    c++;
    clearForm();
  });
  $("#tbl").html(t);
  $("table").css("border", "1px");
  $("table").css("margin", "5%");
  $("#tbl").css("border", "solid");
  $("#tbl").css("width", "500px");
  $("#tbl").css("border-width", "2px");
  $("tr:even").css("background", "lightgrey");
}
function clearForm() {
  $("#product_sku").val(""),
    $("#product_name").val(""),
    $("#product_price").val(""),
    $("#product_quantity").val("");
}
function successfun() {
  $(".success").css("display", "none");
}
function success1fun() {
  $(".success1").css("display", "none");
}
function errorfun() {
  $(".error").css("display", "none");
}
