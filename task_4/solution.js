// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {
    // Аргументом функции является JSON
    let data = JSON.parse(json);
    let products = data.products;
    // Преобразуйте строку json, переданную как аргумент функции,
    // в объект с помощью функции JSON.parse(json)
    // и запишите в переменную data

} return data.products; // Верните как результат функции свойство products объекта data

function renderProductsCards(json) {

    clearProducts();

    products = parseProducts(json);

    length = (products.length);
    for (let i = 0; i < length; i += 1) {
        addProduct(products[i]);
     }

}