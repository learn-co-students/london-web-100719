class UsersController < ApplicationController
  def index
    if request.format.symbol == :html
        @users = User.all
        render :index
    elsif request.format.symbol == :json
        render json: User.all
    end
  end
end
