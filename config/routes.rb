Rails.application.routes.draw do
  root 'static#index'
  namespace :v1, default: { format: 'json' } do
    get 'greetings', to: 'greetings#index'
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
