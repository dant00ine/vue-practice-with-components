Rails.application.routes.draw do

    root 'posts#index'
    post '/posts/count', to: 'posts#count'
    get '/posts/get-count', to: 'posts#getCount'
    get '/posts/show', to: 'posts#show'
  resources :posts
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
