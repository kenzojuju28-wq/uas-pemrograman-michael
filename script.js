let orders = JSON.parse(localStorage.getItem("orders")) || [];

function simpan() {
    const user = document.getElementById("user").value;
    const product = document.getElementById("product").value;

    orders.push({
        user: user,
        product: product
    });

    localStorage.setItem("orders", JSON.stringify(orders));

    document.getElementById("hasil").innerText =
        "Transaksi berhasil disimpan (simulasi)";
}

function tampilOrders() {
    const table = document.getElementById("orderTable");
    if (!table) return;

    orders.forEach((o, i) => {
        const row = table.insertRow();
        row.insertCell(0).innerText = i + 1;
        row.insertCell(1).innerText = o.user;
        row.insertCell(2).innerText = o.product;
    });
}

tampilOrders();
