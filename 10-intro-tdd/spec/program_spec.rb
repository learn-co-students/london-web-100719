require_relative '../program'

describe 'is_palindrome?' do
  it 'should return true if the string is a palindrome if passed kayak' do
    expect(is_palindrome?('kayak')).to be(true)
  end

  it 'should return false if the string is not a palindrome if passed kayaks' do
    expect(is_palindrome?('kayaks')).to be(false)
  end

  it 'should return true if the string is a palindrome and has spaces' do
    expect(is_palindrome?('a lad named e mandala')).to be (true)
  end

  it 'should return false if the string is not a palindrom and has spaces' do
    expect(is_palindrome?('whatever is not a palindrome')).to be (false)
  end

  it 'should return true if the input has spaces and is a palindrome and has capital letters' do
    expect(is_palindrome?('A lad naMed e maNdala')).to be (true)
  end

  it 'should return false if the input has spaces and is not a palindrome and has capital letters' do
    expect(is_palindrome?('A lad naMed e m1350u9aNdala')).to be (false)
  end

  it 'should return true if the input has spaces and is a palindrome and has capital letters and non alphanumeric characters' do
    expect(is_palindrome?('A .lad naMed :\e maNdal;a')).to be (true)
  end

  it 'should return false if the input has spaces and is not a palindrome and has capital letters and non alphanumeric characters' do
    expect(is_palindrome?('zA .lad naMed :\e maNdal;a')).to be (false)
  end

  it 'should raise an error if given an int' do
    expect {is_palindrome?(131)}.to raise_error(ArgumentError)
  end

  it 'should raise an error if passed nil' do
    expect {is_palindrome?(nil)}.to raise_error(ArgumentError)
  end

  it 'should raise an error if passed an empty string' do
    expect {is_palindrome?('')}.to raise_error(ArgumentError)
  end

  it 'should raise an error if given a string of lenght one' do
    expect {is_palindrome?('a')}.to raise_error(ArgumentError)
  end
end