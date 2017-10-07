n = gets.to_i
a = gets.split
i = n - 1
sum = 0
for i in  (0..n-1) do
	sum += a[i].to_i
end
puts sum
