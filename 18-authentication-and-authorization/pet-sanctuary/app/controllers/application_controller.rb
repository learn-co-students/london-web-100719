class ApplicationController < ActionController::Base
  helper_method :current_user, :authorize_user

  def current_user
    if session[:user_id]
      User.find(session[:user_id])
    end
  end

  def authorize_user
    unless current_user
      flash[:notice] = "Sorry, you must be logged in to use this feature"
      redirect_to pets_path
    end
  end
end
