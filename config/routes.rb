Rails.application.routes.draw do
  resources :process
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"

  root 'root#index'
  get '/changelog' => 'changelog#index'
  get '/:page' => 'static#index'
  get '/:page/:subpage' => 'static#show'
  get '/pay' => 'pay#index'

  # post "/process"
  # get '/blog' => 'blog#index'
  # get '/blog/:page' => 'blog#show'
  # get '/portfolio' => 'portfolio#index'
  # get '/contact' => 'contact#index'
  # get '/services' => 'services#index'
  # get '/privacy-policy' => 'privacy#index'
end
