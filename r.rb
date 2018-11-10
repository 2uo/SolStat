def pascals_triangle(row = [1])
  current = row
  Enumerator.new do |y|
    loop do
      y << current
      current = pascals_row(current)
    end
  end
end

def pascals_row(row)
  ([0] + row).zip(row + [0]).collect { |a, b| a + b }
end

pascals_triangle.with_index(1).take(20).each do |row, i|
  puts "%d:%#{70+(row.inspect.length/2)}s" % [i, row.inspect]
end
