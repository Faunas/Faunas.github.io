document.addEventListener("DOMContentLoaded", function () {

    function calculateTotal() {
        var productSelect = document.getElementById("product");
        var selectedProduct = productSelect.options[productSelect.selectedIndex];
        var price = selectedProduct.dataset.price;
        var quantity = document.getElementById("quantity").value;

        if (!isValidInput(quantity)) {
            alert("Количество товара может содержать только целые числа!");
            return;
        }
        var total = price * quantity;
        document.getElementById("total").innerText = total;
    }
    function isValidInput(input) {
        // Проверка правильного количества товара используя регулярное выражения.
        return /^\d+$/.test(input); // Только цифры и ничего больше.
    }
    document.getElementById("calculateButton").addEventListener("click", calculateTotal);
});