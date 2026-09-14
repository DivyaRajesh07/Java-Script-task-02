//TASK=01:(Product API Basics)
//==============================

/*const apiLink = "https://fakestoreapi.com/products";

fetch(apiLink)
    .then(response => response.json())
    .then(products => {

        console.log("===== ALL PRODUCTS =====");

        products.forEach(product => {
            console.log("Title:", product.title);
            console.log("Price: $" + product.price);
            console.log("Category:", product.category);
            console.log("-------------------------");
        });

        // map() - title and price only
        const productDetails = products.map(product => {
            return {
                title: product.title,
                price: product.price
            };
        });

        console.log("===== TITLE AND PRICE =====");
        console.log(productDetails);

        // filter() - price greater than $100
        const expensiveProducts = products.filter(product => {
            return product.price > 100;
        });

        console.log("===== PRODUCTS ABOVE $100 =====");
        console.log(expensiveProducts);

        // find() - first electronics product
        const electronicsProduct = products.find(product => {
            return product.category === "electronics";
        });

        console.log("===== FIRST ELECTRONICS PRODUCT =====");
        console.log(electronicsProduct);

        // reduce() - total price
        const totalPrice = products.reduce((total, product) => {
            return total + product.price;
        }, 0);

        console.log("===== TOTAL PRICE =====");
        console.log("$" + totalPrice.toFixed(2));

        // sort() - highest to lowest
        const sortedProducts = products.sort((a, b) => {
            return b.price - a.price;
        });

        console.log("===== HIGHEST TO LOWEST =====");

        sortedProducts.forEach(product => {
            console.log(product.title + " - $" + product.price);
        });
    })
    .catch(error => {
        console.log("API Error:", error);
    })
    .finally(() => {
        console.log("===== TASK 1 COMPLETED =====");
    });*/


//TASK=02:(Product Category Dashboard)
//======================================

/*const apiLink = "https://fakestoreapi.com/products";

function calculateAverage(total, count) {
    return total / count;
}

fetch(apiLink)
    .then(response => response.json())
    .then(products => {

        const totalProducts = products.length;

        const electronics = products.filter(product => {
            return product.category === "electronics";
        });

        const jewelery = products.filter(product => {
            return product.category === "jewelery";
        });

        const mensClothing = products.filter(product => {
            return product.category === "men's clothing";
        });

        const womensClothing = products.filter(product => {
            return product.category === "women's clothing";
        });

        const prices = products.map(product => {
            return product.price;
        });

        const totalPrice = prices.reduce((total, price) => {
            return total + price;
        }, 0);

        const sortedPrices = prices.sort((a, b) => b - a);

        const highestPrice = sortedPrices[0];
        const lowestPrice = sortedPrices[sortedPrices.length - 1];

        const averagePrice = calculateAverage(totalPrice, totalProducts);

        console.log("===== PRODUCT DASHBOARD =====");

        console.log(`Total Products: ${totalProducts}`);

        console.log(`Electronics: ${electronics.length}`);
        console.log(`Jewelery: ${jewelery.length}`);
        console.log(`Men's Clothing: ${mensClothing.length}`);
        console.log(`Women's Clothing: ${womensClothing.length}`);

        console.log(`Highest Price: $${highestPrice}`);
        console.log(`Lowest Price: $${lowestPrice}`);
        console.log(`Average Price: $${averagePrice.toFixed(2)}`);
    })
    .catch(error => {
        console.log("API Error:", error);
    })
    .finally(() => {
        console.log("===== TASK 2 COMPLETED =====");
    });*/


//TASK=03:( User & Post API)
//==========================

/*const usersApi = "https://jsonplaceholder.typicode.com/users";
const postsApi = "https://jsonplaceholder.typicode.com/posts";

fetch(usersApi)
    .then(response => response.json())
    .then(users => {

        console.log("===== USER NAMES =====");

        users.forEach(user => {
            console.log(user.name);
        });

        console.log("===== USER NAME + EMAIL =====");

        users.forEach(user => {
            console.log(`${user.name} - ${user.email}`);
        });

        // Find user with ID 5
        const user5 = users.find(user => {
            return user.id === 5;
        });

        console.log("===== USER ID 5 =====");
        console.log(user5);

        // Filter users from a particular city
        const cityUsers = users.filter(user => {
            return user.address.city === "Gwenborough";
        });

        console.log("===== USERS FROM GWENBOROUGH =====");
        console.log(cityUsers);

        // Fetch posts
        return fetch(postsApi);
    })
    .then(response => response.json())
    .then(posts => {

        // Posts written by user ID 1
        const user1Posts = posts.filter(post => {
            return post.userId === 1;
        });

        console.log("===== POSTS BY USER ID 1 =====");
        console.log(user1Posts);

        // Count posts
        console.log(`User ID 1 Post Count: ${user1Posts.length}`);

        // First post with title > 50 characters
        const longTitlePost = posts.find(post => {
            return post.title.length > 50;
        });

        console.log("===== FIRST TITLE ABOVE 50 CHARACTERS =====");
        console.log(longTitlePost);
    })
    .catch(error => {
        console.log("API Error:", error);
    })
    .finally(() => {
        console.log("===== TASK 3 COMPLETED =====");
    });*/



//TASK=04:( API + Search)
//========================

/*const apiLink = "https://fakestoreapi.com/products";

function searchProducts(products, category, maxPrice) {

    return products.filter(product => {
        return product.category === category &&
               product.price <= maxPrice;
    });
}

const category = prompt("Enter product category:");

const maxPrice = Number(prompt("Enter maximum price:"));

fetch(apiLink)
    .then(response => response.json())
    .then(products => {

        const result = searchProducts(
            products,
            category,
            maxPrice
        );

        console.log("===== SEARCH RESULTS =====");

        if (result.length === 0) {
            console.log("No products found.");
        } else {

            result.forEach(product => {
                console.log(`Product: ${product.title}`);
                console.log(`Price: $${product.price}`);
                console.log(`Category: ${product.category}`);
                console.log("-------------------------");
            });
        }
    })
    .catch(error => {
        console.log("API Error:", error);
    })
    .finally(() => {
        console.log("===== TASK 4 COMPLETED =====");
    });*/



//TASK=05:(API Shopping Cart)
//============================

/*const apiLink = "https://fakestoreapi.com/products";

fetch(apiLink)
    .then(response => response.json())
    .then(products => {

        console.log("===== AVAILABLE PRODUCTS =====");

        products.forEach(product => {
            console.log(
                `ID: ${product.id} | ${product.title} | $${product.price}`
            );
        });

        const selectedIds = [1, 2];

        const cart = products.filter(product => {
            return selectedIds.includes(product.id);
        });

        console.log("===== CART =====");

        cart.forEach((product, index) => {
            console.log(`Product ${index + 1}: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log("-------------------------");
        });

        // reduce() - cart total
        const total = cart.reduce((sum, product) => {
            return sum + product.price;
        }, 0);

        let discount = 0;

        if (total > 200) {
            discount = 20;
        } else if (total > 100) {
            discount = 10;
        }

        const discountAmount = total * discount / 100;

        const finalAmount = total - discountAmount;

        console.log(`Total: $${total.toFixed(2)}`);
        console.log(`Discount: ${discount}%`);
        console.log(`Final Amount: $${finalAmount.toFixed(2)}`);
    })
    .catch(error => {
        console.log("API Error:", error);
    })
    .finally(() => {
        console.log("===== TASK 5 COMPLETED =====");
    });*/


//TASK=06:(FakeStore Product Report)
//===================================

const apiLink = "https://fakestoreapi.com/products";

fetch(apiLink)
    .then(response => response.json())
    .then(products => {

        console.log("========== PRODUCT REPORT ==========");

        // 1. Display all products using forEach()
        console.log("===== ALL PRODUCTS =====");

        products.forEach(product => {
            console.log(
                `${product.title} - $${product.price} - ${product.category}`
            );
        });

        // 2. Create product names array using map()
        const productNames = products.map(product => {
            return product.title;
        });

        console.log("===== PRODUCT NAMES =====");

        productNames.forEach(name => {
            console.log("- " + name);
        });

        // 3. Filter expensive products
        const expensiveProducts = products.filter(product => {
            return product.price > 100;
        });

        console.log("===== PRODUCTS ABOVE $100 =====");

        expensiveProducts.forEach(product => {
            console.log(`${product.title} - $${product.price}`);
        });

        // 4. Find electronics product
        const electronicsProduct = products.find(product => {
            return product.category === "electronics";
        });

        console.log("===== ELECTRONICS PRODUCT =====");
        console.log(electronicsProduct);

        // 5. Calculate total price using reduce()
        const totalValue = products.reduce((total, product) => {
            return total + product.price;
        }, 0);

        console.log("===== TOTAL PRODUCT VALUE =====");
        console.log(`$${totalValue.toFixed(2)}`);

        // 6. some() - any product above $500
        const anyAbove500 = products.some(product => {
            return product.price > 500;
        });

        console.log("Any Product Above $500:");
        console.log(anyAbove500);

        // 7. every() - all products above $1
        const allAbove1 = products.every(product => {
            return product.price > 1;
        });

        console.log("All Products Above $1:");
        console.log(allAbove1);

        // 8. sort() - highest to lowest
        const sortedProducts = [...products].sort((a, b) => {
            return b.price - a.price;
        });

        console.log("===== HIGHEST → LOWEST =====");

        sortedProducts.forEach(product => {
            console.log(`${product.title} - $${product.price}`);
        });
    })
    .catch(error => {
        console.log("API Error:", error);
    })
    .finally(() => {
        console.log("========== TASK 6 COMPLETED ==========");
    });