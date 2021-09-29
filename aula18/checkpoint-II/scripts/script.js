const productsContainer = document.querySelectorAll('ul.products li .item-wrapper')
const productQuantity = document.querySelectorAll('ul li .quantity')
const productsNames = document.querySelectorAll('ul li .description .container p')
const productsPrices = document.querySelectorAll('.price p:first-child')
const backtoTop = document.querySelector('section .back-to-top')
const carousel = document.querySelector('.carousel-wrapper')

// Esta array precisa (por enquanto) ter a mesma quantidade de produtos que existem na página inicial (30)
const listofProducts = [
    {
        name: '',
        inCart: 0,
        price: 2.68,
        tag: 'dark-chocolate-bar'
    },
    {
        name: '',
        inCart: 0,
        price: 2.57,
        tag: 'black-white-chocolate-bar'
    },
    {
        name: '',
        inCart: 0,
        price: 3.85,
        tag: 'chocolate-chip-cookie'
    },
    {
        name: '',
        inCart: 0,
        price: 3.98,
        tag: 'double-chocolate-cookie'
    },
    {
        name: '',
        inCart: 0,
        price: 3.90,
        tag: 'salted-oatmeal-cornflake'
    },
    {
        name: '',
        inCart: 0,
        price: 5.78,
        tag: 'pumpkin-cupcake'
    },
    {
        name: '',
        inCart: 0,
        price: 3.98,
        tag: 'red-velvet-cookie'
    },
    {
        name: '',
        inCart: 0,
        price: 5.88,
        tag: 'red-velvet-cupcake'
    },
    {
        name: '',
        inCart: 0,
        price: 6.05,
        tag: 'dark-chocolate-cookie'
    },
    {
        name: '',
        inCart: 0,
        price: 5.58,
        tag: 'salty-caramel-cupcake'
    },
    {
        name: '',
        inCart: 0,
        price: 5.78,
        tag: 'pumpkin-cupcake'
    },
    {
        name: '',
        inCart: 0,
        price: 5.88,
        tag: 'red-velvet-cupcake'
    },
    {
        name: '',
        inCart: 0,
        price: 5.58,
        tag: 'salty-caramel-cupcake'
    },
    {
        name: '',
        inCart: 0,
        price: 6.05,
        tag: 'pumpkin-spice-latte'
    },
    {
        name: '',
        inCart: 0,
        price: 6.05,
        tag: 'dark-chocolate-cookie'
    },
    {
        name: '',
        inCart: 0,
        price: 5.81,
        tag: 'sprinkle-cupcake'
    },
    {
        name: '',
        inCart: 0,
        price: 5.48,
        tag: 'vanilla'
    },
    {
        name: '',
        inCart: 0,
        price: 5.12,
        tag: 'banana'
    },
    {
        name: '',
        inCart: 0,
        price: 5.35,
        tag: 'lemon-blueberry'
    },
    {
        name: '',
        inCart: 0,
        price: 5.76,
        tag: 'chocolate-marshmallow'
    },
    {
        name: '',
        inCart: 0,
        price: 3.85,
        tag: 'chocolate-chip-cookie'
    },
    {
        name: '',
        inCart: 0,
        price: 3.90,
        tag: 'salted-oatmeal-cornflake'
    },
    {
        name: '',
        inCart: 0,
        price: 3.98,
        tag: 'red-velvet-cookie'
    },
    {
        name: '',
        inCart: 0,
        price: 3.85,
        tag: 'chocolate-chip-cookie'
    },
    {
        name: '',
        inCart: 0,
        price: 3.98,
        tag: 'double-chocolate-cookie'
    },
    {
        name: '',
        inCart: 0,
        price: 3.35,
        tag: 'fudge-brownie'
    },
    {
        name: '',
        inCart: 0,
        price: 3.89,
        tag: '3-pack-of-frost'
    },
    {
        name: '',
        inCart: 0,
        price: 3.96,
        tag: 'frost-a-roos'
    },
    {
        name: '',
        inCart: 0,
        price: 2.57,
        tag: 'black-white-chocolate-bar'
    },
    {
        name: '',
        inCart: 0,
        price: 2.68,
        tag: 'dark-chocolate-bar'
    }
]

/// Capturando cada clique no container de produtos
productsContainer.forEach((product, index) => {

    product.addEventListener('click', () => {
        cartNumbers(listofProducts[index])
        totalCost(listofProducts[index])

        product.classList.add('border-purple') // alterando a corda borda para roxo ao clicar no produto
        // createQuantitySpan(product) // criando span ao clicar no produto

    })
})

// Adiciona o titulo do produto à array listofProducts (depende de ter a mesma quantidade de titulos de produtos no html e de objetos na array listOfProducts)
productsNames.forEach((titulo, index) => listofProducts[index].name = titulo.innerText)

// Fazendo o carrinho de compras ter a quantidade de itens adicionados mesmo ao recarregar a página
const onLoadCartNumbers = () => {
    let productNumbers = localStorage.getItem('cartNumbers')
    productNumbers ? document.querySelector('.shopping-cart a span').textContent = productNumbers : ''
    
}

// Função de Adicionar Itens ao Carrinho (envia dados para o localStorage e para o cartNumbers)
const cartNumbers = (product, action) => {
    
    let productNumbers = localStorage.getItem('cartNumbers')
    productNumbers = parseInt(productNumbers)
    
    let cartItems = localStorage.getItem('productsInCart')
    cartItems = JSON.parse(cartItems)

    if (action == 'decrease') {
        localStorage.setItem('cartNumbers', productNumbers - 1)
        document.querySelector('.shopping-cart a span').textContent = productNumbers - 1

    } else if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1)
        document.querySelector('.shopping-cart a span').textContent = productNumbers + 1
    } else {
        localStorage.setItem('cartNumbers', 1)
        document.querySelector('.shopping-cart a span').textContent = 1
    }

    setItems(product);

}

// Adicionaod itens da Array para o localStorage
const setItems = (product) => {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems)


    if(cartItems !== null){
        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1
        cartItems = {
            [product.tag]: product
        }
    }
    
    localStorage.setItem('productsInCart', JSON.stringify(cartItems));

}

      
function displayCart() {
    let cartItems = localStorage.getItem('productsInCart')
    cartItems = JSON.parse(cartItems)

    let productContainer = document.querySelector('section.products') 
    let cartCost = localStorage.getItem('totalCost')

    if(cartItems && productContainer) {

        productContainer.innerHTML = '';

        Object.values(cartItems).map(item => {

            productContainer.innerHTML += `
                <div class="product">
                    <i class="far fa-trash-alt"></i>
                    <img src="../assets/products/${item.tag}.svg"></img>
                    <span>${item.name}</span>
                    <div class="price">$${item.price}</div>
                    <div class="quantity">
                    <i class="fas fa-minus"></i><span>${item.inCart}</span><i class="fas fa-plus"></i>
                    </div>
                    <div class="total">$${item.inCart * item.price}</div>
                </div>
               
            `
        });

        productContainer.innerHTML += `
            <div class="totalFinal">
                <h3 class="totalFinalTitle">
                    Total
                </h3>
                <p>$${cartCost}</p>
            </div>
        `


    }

    deleteButtons()
    manageQuantity()
}

// const createQuantitySpan = (product) => {

//     const span = document.createElement('span')

//     span.textContent = 1

//     span.classList.add('quantity')
//     product.appendChild(span);
    
// }

const totalCost = (product, action) => {
   
    // armazenando o total cost do local storage na variavel cartCost
    let cartCost = localStorage.getItem('totalCost')

    if (action == 'decrease'){
        cartCost = parseFloat(cartCost)
        localStorage.setItem('totalCost', cartCost - product.price)
    } else if (cartCost != null) { // se cartCost existe
        cartCost = parseFloat(cartCost)
         // convertendo de string para number 
        localStorage.setItem('totalCost', cartCost + product.price) 
    } else {
      
        localStorage.setItem('totalCost', product.price)
    }


}

const deleteButtons = () => {
    const removeItem = document.querySelectorAll('.product i.far.fa-trash-alt')
    let productName;
    let productNumbers = localStorage.getItem('cartNumbers')
    let cartItems = localStorage.getItem('productsInCart')
    cartItems = JSON.parse(cartItems)

    let cartCost = localStorage.getItem('totalCost')

    removeItem.forEach(item => {
        item.addEventListener('click', () => {
            const productName = item.parentElement.querySelector('span').textContent.toLowerCase().replace(/ /g, '-')
            localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart)
            localStorage.setItem('totalCost', cartCost - (cartItems[productName].price * cartItems[productName].inCart))

            delete cartItems[productName];
            localStorage.setItem('productsInCart', JSON.stringify(cartItems))

            displayCart()
            onLoadCartNumbers()
        })
    })

}

const manageQuantity = () => {
    const decreaseButtons = document.querySelectorAll('.product i.fas.fa-minus')
    const increaseButtons = document.querySelectorAll('.product i.fas.fa-plus')
    let cartItems = localStorage.getItem('productsInCart');
    let currentQuantity = 0;
    let currentProduct = '';
    cartItems = JSON.parse(cartItems);

    decreaseButtons.forEach(item => {
        item.addEventListener('click', () => {
            currentQuantity = item.parentElement.querySelector('span').textContent
            currentProduct = item.parentElement.parentElement.querySelector('span').textContent.toLowerCase().replace(/ /g, '-')

            if (cartItems[currentProduct].inCart > 1) {
                cartItems[currentProduct].inCart -= 1
                cartNumbers(cartItems[currentProduct], 'decrease')
                totalCost(cartItems[currentProduct], 'decrease')
                localStorage.setItem('productsInCart', JSON.stringify(cartItems))
                displayCart();
            }
           
        })
    })

    increaseButtons.forEach(item => {
        item.addEventListener('click', () => {

            currentProduct = item.parentElement.parentElement.querySelector('span').textContent.toLowerCase().replace(/ /g, '-')

            cartItems[currentProduct].inCart += 1
            cartNumbers(cartItems[currentProduct])
            totalCost(cartItems[currentProduct])
            localStorage.setItem('productsInCart', JSON.stringify(cartItems))
            displayCart();
            
        })
    })

}

const showButton = () => window.scrollY >= 600 ? backtoTop.classList.add('show') : backtoTop.classList.remove('show')
window.addEventListener('scroll', () => showButton())

displayCart()
onLoadCartNumbers()
showButton()

