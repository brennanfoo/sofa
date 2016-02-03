Rails.application.routes.draw do
  resources :posts

  root                 'posts#show'
  get 'random' =>      'posts#show'
end
