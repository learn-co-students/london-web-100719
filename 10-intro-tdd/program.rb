def is_palindrome?(string_of_chars)

  # error handling of the input
  if string_of_chars.class != String || string_of_chars.length <= 1
    raise ArgumentError.new('Input must be a string of lenght greater than one!')
  end

  # given correct input, perform transfromations (do something)
  string_of_chars = string_of_chars
    .gsub(/\s/, '')
    .downcase
    .gsub(/\p{P}/, '')

  # assert the final result
  string_of_chars == string_of_chars.reverse
end

