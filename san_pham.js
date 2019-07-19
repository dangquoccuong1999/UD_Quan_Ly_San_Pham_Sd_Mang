let nameProduct = ['Nokia', 'Iphone', 'Sam Sung', 'Sony'];

let SanPham = function () {
    this.addProduct= function () {
        this.input = document.getElementById("input").value;
        nameProduct.push(this.input);
    }
    this.clearProduct = function (id,quanLy) {
        nameProduct.splice(id,1);
        quanLy.clearProduct();
    }
}