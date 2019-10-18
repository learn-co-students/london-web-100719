class SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by(username: params[:user][:username])
    # If we found a user with this username, AND their password is correct, log them in and redirect them to the pets index
    if @user && @user.authenticate(params[:user][:password])
      session[:user_id] = @user.id
      redirect_to pets_path
    # Otherwise, we'll show them the log in form again and let them know that they entered invalid information
    else
      flash[:notice] = "Sorry, we can't find a user with that username and password"
      redirect_to new_session_path
    end
  end

  def destroy
    session.destroy

    redirect_to new_session_path
  end
end
