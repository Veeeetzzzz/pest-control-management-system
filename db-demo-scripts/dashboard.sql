-- Create the table
CREATE TABLE Invoice (
    InvoiceID SERIAL PRIMARY KEY,
    InvoiceNumber VARCHAR(10),
    Status VARCHAR(10),
    Method VARCHAR(20),
    Amount NUMERIC(10, 2)
);

-- Insert dummy data
INSERT INTO Invoice (InvoiceNumber, Status, Method, Amount) VALUES
('INV001', 'Paid', 'Credit Card', 250.00),
('INV002', 'Pending', 'PayPal', 150.00),
('INV003', 'Unpaid', 'Bank Transfer', 350.00),
('INV004', 'Paid', 'Credit Card', 450.00),
('INV005', 'Paid', 'PayPal', 550.00),
('INV006', 'Pending', 'Credit Card', 125.00),
('INV007', 'Unpaid', 'PayPal', 375.00),
('INV008', 'Paid', 'Bank Transfer', 200.00),
('INV009', 'Paid', 'Credit Card', 300.00),
('INV010', 'Pending', 'PayPal', 400.00),
('INV011', 'Unpaid', 'Bank Transfer', 275.00),
('INV012', 'Paid', 'Credit Card', 225.00),
('INV013', 'Pending', 'PayPal', 125.00),
('INV014', 'Unpaid', 'Bank Transfer', 175.00),
('INV015', 'Paid', 'Credit Card', 350.00),
('INV016', 'Pending', 'PayPal', 325.00),
('INV017', 'Unpaid', 'Bank Transfer', 425.00),
('INV018', 'Paid', 'Credit Card', 500.00),
('INV019', 'Pending', 'PayPal', 450.00),
('INV020', 'Unpaid', 'Bank Transfer', 475.00),
('INV021', 'Paid', 'Credit Card', 600.00),
('INV022', 'Pending', 'PayPal', 525.00),
('INV023', 'Unpaid', 'Bank Transfer', 325.00),
('INV024', 'Paid', 'Credit Card', 150.00),
('INV025', 'Pending', 'PayPal', 225.00);
