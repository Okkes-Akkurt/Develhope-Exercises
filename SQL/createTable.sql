CREATE TABLE Books (
    book_id INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    genre VARCHAR(50),
    published_year INT,
    isbn VARCHAR(13) UNIQUE,
    price DECIMAL(10, 2),
    rating DECIMAL(3, 2),
    stock_count INT
);
