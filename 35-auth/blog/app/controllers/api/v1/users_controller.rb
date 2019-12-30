class Api::V1::UsersController < ApplicationController

    def create
        user = User.new(user_params)

        if user.save
            render json: { user: UserSerializer.new(user), token: issue_token({user_id: user.id})}
        else
            render json: {errors: user.errors.full_messages}, status: :not_acceptable
        end
    end

    def login
        user = User.find_by(email: user_login_params[:email])
        if user && user.authenticate(user_login_params[:password])
            render json: { user: UserSerializer.new(user), token: encode_token(user_id: user.id) }, status: :accepted
        else
            render json: { message: 'Invalid email or password' }, status: :unauthorized
        end
    end

    private 

    def user_params
        params.require(:user).permit(:email, :password, :password_confirmation)
    end

    def user_login_params
        params.require(:user).permit(:email, :password)
    end
end