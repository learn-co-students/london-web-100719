class User < ApplicationRecord
    has_secure_password
    # fix some other unrelated bug on user
end
