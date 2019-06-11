Rails.application.routes.draw do
  get 'classroom/lectures', to: redirect('classroom/lectures/1')
  get 'classroom/lectures/:id', to: 'classroom#lectures'
  resources :lectures
  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root "lectures#index"
end
