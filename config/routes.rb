
Rails.application.routes.draw do

  root 'images#show'
  resources :images, only: [:show]
  resources :tags, only: [:create]

end
