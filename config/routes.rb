Rails.application.routes.draw do
  get 'classroom/lectures'
  resources :lectures
  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root "hello_world#index"
end
