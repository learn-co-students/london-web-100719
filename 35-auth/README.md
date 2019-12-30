## Backend

# Set up

`rails new blog --api --database=postgresql`

`bundle add active_model_serializers`

uncomment `rack-cors` and `bcrypt` from Gemfile

`bundle install`

# Create Models and Controllers

`rails g model User email password_digest`

`rails g controller api/v1/users`

`rails g serializer user`

`rails g model Post title content:text user:references`

`rails g controller api/v1/posts`

`rails g serializer post`

`rails db:create`

`rails db:migrate`

add `has_secure_password` and `has_many :posts` to User

# Build controller functionality

`users#create`

update routes:

```
namespace :api do
    namespace :v1 do
        resources :users, only: [:create]
    end
end
```

run `rails s`

go to `http://localhost:3000` in your browser and run `fetch('http://localhost:3000/api/v1/users', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({user:{email:'a@a.com',password:'a123'}}) })` in the console

update `UserSerializer` with the attributes you want to include (`:email`)

`posts#create`

update routes with `resources :posts, only: [:create]`

in your browser, run `fetch('http://localhost:3000/api/v1/posts', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({post:{user_id:1,title:'first post',content:'super secure stuff'}}) })`

update `PostSerializer` with the attributes you want to include (`:title, :content, :user`)

create a `user` method on PostSerializer to use the UserSerializer:

```
class PostSerializer < ActiveModel::Serializer
  attributes :id, :user, :title, :content

  def user
    UserSerializer.new(self.object.user)
  end
end
```

## JWTs

`bundle add jwt`

`ApplicationController`:

```
class ApplicationController < ActionController::API
    before_action :set_current_user

    def issue_token(payload)
        JWT.encode(payload, ENV['RAILS_SECRET'])
    end

    def decode_token(token)
        JWT.decode(token, ENV['RAILS_SECRET'])[0]
    end

    def get_token
        request.headers["Authorization"] || request.headers["Authorisation"]
    end

    def set_current_user
        token = get_token
        if token
            decoded_token = decode_token(token)
            @current_user = User.find(decoded_token["user_id"])
        else
            @current_user = nil
        end
    end

    def logged_in
        !!@current_user
    end
end
```

create a string at `ENV['RAILS_SECRET']` using one of these methods: http://railsapps.github.io/rails-environment-variables.html (we'll use local_env.yml, just REMEMBER TO ADD IT TO GITIGNORE and load it in config)

change `users#create` to issue a token along with the user

```
class Api::V1::UsersController < ApplicationController
    def login
        user = User.find_by(email: user_login_params[:email])
        if user && user.authenticate(user_login_params[:password])
            render json: { user: UserSerializer.new(user), token: encode_token(user_id: user.id) }, status: :accepted
        else
            render json: { message: 'Invalid email or password' }, status: :unauthorized
        end
    end

    private

    def user_login_params
        params.require(:user).permit(:email, :password)
    end
end
```

cors, in config/application.rb

```
config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'
    resource '*', headers: :any, methods: [:get, :post, :options]
  end
end
```

`users#validate_token`

`localStorage`
