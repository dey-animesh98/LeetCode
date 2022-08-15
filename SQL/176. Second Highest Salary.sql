SELECT ifnull((
    SELECT DISTINCT salary  FROM Employee ORDER BY salary DESC LIMIT 1 offset 1 ),
    null) as SecondHighestSalary;
    