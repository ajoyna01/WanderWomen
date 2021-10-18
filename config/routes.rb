Rails.application.routes.draw do

  resources :connections
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/users", to: "users#index"
  # delete "/entries/:id", to: "entries#destroy"
  patch "/me", to: "users#update"
  # get "/entries", to: "entries#index"
  # get "/entries/:id", to: "entries#show"
  # post "/entries", to: "entries#create"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
