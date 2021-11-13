Rails.application.routes.draw do
  namespace :api do
    resources :greetings
  end

  root 'greetings#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
