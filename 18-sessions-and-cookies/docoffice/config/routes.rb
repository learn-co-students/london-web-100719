Rails.application.routes.draw do
  resources :doctors
  resources :patients

  resources :users, only: [:create, :show]

  get "signup", to: "users#new", as: "signup"
  get "login", to: "sessions#new", as: "login"
  post "sessions", to: "sessions#create", as: "sessions"
  delete "sessions", to: "sessions#destroy", as: "logout"
end
