let QuanLy = function (sanPham) {
    this.sanPham = sanPham;
    this.table = '';
    this.tableProduct = function () {
        this.table += "<table border= 1px soild = black; cellspacing=0px width='400px'> <tr> <td> Số thứ tự </td> <td>Sản phẩm </td> <td>Xóa sản phẩm </td> </tr>";
        for (let i = 0; i < nameProduct.length; i++) {
            this.table += "<tr>" + "<td>" + i + "</td>" + "<td>" + nameProduct[i] + "</td>" + "<td><button id='" + i +
                "' onclick='sanPham.clearProduct(id,quanLy)'>Clear Product</button></td></tr>";
        }
        this.table += "</table>";
        document.getElementById('sanPham').innerHTML = this.table;
    };
    this.addProduct = function () {
        sanPham.addProduct();
        this.table = '';
        this.tableProduct();
    };
    this.clearProduct = function () {
        this.table = '';
        this.tableProduct();
    }
};
let sanPham = new SanPham();
let quanLy = new QuanLy(sanPham);
quanLy.tableProduct();
