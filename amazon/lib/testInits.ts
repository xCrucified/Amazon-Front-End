import { User, Order, Product, Review } from "./interfaces";

function createSampleProduct(productId: number, user: User, reviewId: number): Product {
    const review: Review = {
        id: reviewId,
        reviewText: "Great product!",
        postDate: new Date("2025-03-21"),
        rate: 5,
        user: user,
    };

    const product: Product = {
        id: productId,
        description: `Sample product description for product ${productId}`,
        reviews: [review],
        price: 29.99,
        image: [{ url: `http://example.com/product${productId}.jpg` }],
        inStock: 10,
        selected: 0,
        properties: [{ key: "size", value: "M" }],
    };

    return product;
}

const user1: User = {
    id: 1,
    username: "user1",
    email: "user1@example.com",
    phoneNyumber: "1234567890",
    cart: { products: [] },
    wishlists: [
        { id: 1, name: "User1 Wishlist 1", isPublic: true, products: [] },
        { id: 2, name: "User1 Wishlist 2", isPublic: false, products: [] },
    ],
    orders: [],
};

const user1Order1: Order = {
    purchaseDate: new Date("2025-03-20"),
    products: [createSampleProduct(101, user1, 1)],
};

const user1Order2: Order = {
    purchaseDate: new Date("2025-03-22"),
    products: [createSampleProduct(102, user1, 2)],
};

user1.orders.push(user1Order1, user1Order2);

user1.cart.products.push(
    createSampleProduct(501, user1, 8),
    createSampleProduct(502, user1, 9),
    createSampleProduct(503, user1, 10)
);

const user2: User = {
    id: 2,
    username: "user2",
    email: "user2@example.com",
    phoneNyumber: "2345678901",
    cart: { products: [] },
    wishlists: [
        { id: 3, name: "User2 Wishlist 1", isPublic: true, products: [] },
        { id: 4, name: "User2 Wishlist 2", isPublic: false, products: [] },
    ],
    orders: [],
};

const user2Order1: Order = {
    purchaseDate: new Date("2025-03-18"),
    products: [createSampleProduct(201, user2, 3)],
};

const user2Order2: Order = {
    purchaseDate: new Date("2025-03-19"),
    products: [createSampleProduct(202, user2, 4)],
};

const user2Order3: Order = {
    purchaseDate: new Date("2025-03-21"),
    products: [createSampleProduct(203, user2, 5)],
};

user2.orders.push(user2Order1, user2Order2, user2Order3);

user2.cart.products.push(
    createSampleProduct(601, user2, 11),
    createSampleProduct(602, user2, 12),
    createSampleProduct(603, user2, 13),
    createSampleProduct(604, user2, 14)
);

const user3: User = {
    id: 3,
    username: "user3",
    email: "user3@example.com",
    phoneNyumber: "3456789012",
    cart: { products: [] },
    wishlists: [
        { id: 5, name: "User3 Wishlist 1", isPublic: true, products: [] },
        { id: 6, name: "User3 Wishlist 2", isPublic: false, products: [] },
    ],
    orders: [],
};

const user3Order1: Order = {
    purchaseDate: new Date("2025-03-17"),
    products: [createSampleProduct(301, user3, 6)],
};

const user3Order2: Order = {
    purchaseDate: new Date("2025-03-20"),
    products: [createSampleProduct(302, user3, 7)],
};

user3.orders.push(user3Order1, user3Order2);

user3.cart.products.push(
    createSampleProduct(701, user3, 15),
    createSampleProduct(702, user3, 16)
);

export const users: User[] = [user1, user2, user3];
