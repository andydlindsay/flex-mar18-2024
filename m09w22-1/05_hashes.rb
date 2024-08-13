# collection of key/value pairs; hash, object, dictionaries, associative arrays

user = {
  'username' => 'alice',
  'password' => '1234',
}

# puts user['username']

# symbols === lightweight strings (as close to a primitive as you can get in Ruby)
:username
'username'

user = {
  :username => 'alice',
  :password => '1234'
}

# puts user['username'] # nil
# puts user[:username]

user = {
  username: 'alice',
  password: '1234'
}

puts user
