let productsCart = [
    {
        id: 1,
        name: "Arroz arbório",
        price: 20.00
    },
    {
        id: 2,
        name: "Vinho branco seco",
        price: 70.00
    },
    {
        id: 3,
        name: "Alho poró",
        price: 5.00
    },
    {
        id: 4,
        name: "Limão siciliano",
        price: 7.00
    },
    {
        id: 5,
        name: "Vinho tinto seco",
        price: 80.00
    },
    {
        id: 6,
        name: "Água com gás",
        price: 8.00
    },
]

const tagBody = document.querySelector('body');

const tagMain = document.createElement('main');
const tagH1 = document.createElement('h1');
const tagUl = document.createElement('ul');
const tagDivHeader = document.createElement('div');
const tagPProduct = document.createElement('p');
const tagPValue = document.createElement('p');
const tagSection = document.createElement('section');
const tagDivSum = document.createElement('div');
const tagPSum = document.createElement('p');
const tagPTotal = document.createElement('p');
const tagButton = document.createElement('button');

tagUl.id = 'products-list';
tagDivHeader.classList.add('div-header');
tagPProduct.classList.add('header-product');
tagPValue.classList.add('header-value');
tagPSum.classList.add('sum');
tagPTotal.classList.add('total');
tagButton.classList.add('button-end');

tagBody.appendChild(tagMain);
tagMain.append(tagH1, tagUl, tagSection);
tagDivHeader.append(tagPProduct, tagPValue);
tagUl.appendChild(tagDivHeader);
tagSection.append(tagDivSum, tagButton);
tagDivSum.append(tagPSum, tagPTotal);

tagH1.innerText = 'Virtual Market';
tagPProduct.innerText = 'Item';
tagPValue.innerText = 'Valor';
tagPSum.innerText = 'Total';
tagPTotal.innerText = sum(productsCart);
tagButton.innerText = 'Finalizar compra';


function sum(list) {
    count = 0;
    for(let i = 0; i < list.length; i++) {
        let item = list[i];
        let value = item.price;
        count += value;
    }
    return `R$ ${count}`;
}


function listItems(list, referenceHtml) {
    for(let i = 0; i < list.length; i++) {
        let item = list[i];
        let assembledTemplate = createTemplate(item);
        referenceHtml.appendChild(assembledTemplate);
    }
}

const itemsList = document.getElementById('products-list');

listItems(productsCart, itemsList);


function createTemplate(object) {
    let name = object.name;
    let price = object.price;

    let tagLi = document.createElement('li');
    let tagName = document.createElement('p');
    let tagImg = document.createElement('img');
    let tagPrice = document.createElement('p');
    
    tagLi.classList.add('product-details');
    tagName.classList.add('item-name');
    tagImg.classList.add('trash', 'hidden');
    tagPrice.classList.add('item-price');
    
    tagName.innerText = name;
    tagImg.src = './img/lixeira.png';
    tagImg.alt = 'Excluir';
    tagImg.key = object.id;
    tagPrice.innerText = `R$ ${price}`;

    tagLi.append(tagName, tagImg, tagPrice);
    
    return tagLi;
}

tagButton.addEventListener('click', function() {
    alert('Compra finalizada!')
})


itemsList.addEventListener('click', remove);

function remove(event) {
    let imageTrash = event.target;
    if(imageTrash.tagName === 'IMG') {
        removeItemList(imageTrash.key);
        let li = imageTrash.closest('li');
        li.remove();
        tagPTotal.innerText = sum(productsCart);
    } 
}

function removeItemList(id){
    const novoProductsCart = [];
    for(let i = 0; i < productsCart.length; i++){
        if(productsCart[i].id !== id){
            novoProductsCart.push(productsCart[i]);
        }
    }
    productsCart = novoProductsCart;
}