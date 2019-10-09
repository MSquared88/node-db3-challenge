# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

select productName, CategoryName from products as p
join categories as c on p.categoryId = c.categoryId

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

select orderId, ShipperName, OrderDate from orders as o
join shippers as s on o.shipperId = s.shipperId
where orderDate < 1997/01/09

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT ProductName, Quantity from orderDetails as o
join products as p on o.productid = p.productid
where OrderId = 10251
order by ProductName

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

select Orderid, CustomerName as [Customers Name], LastName as [Employees Last Name] from orders as o
join employees as e on o.employeeId = e.employeeId
join customers as c on o.customerId = c.customerId

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 