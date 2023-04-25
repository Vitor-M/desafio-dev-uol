elements = document.querySelectorAll(".js-productClick")

filteredElements = Array.from(elements).filter((element) => {
    const productSkuValue = parseInt(element.getAttribute('data-product-sku'));

    return element.hasAttribute('title') && productSkuValue%3 == 0;
})

console.log(filteredElements);