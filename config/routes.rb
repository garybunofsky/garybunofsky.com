Rails.application.routes.draw do
  
	root 'root#index'
  
  # Ugky old route redirects
  get '/contact/', to: redirect('/', status: 301)
  get '/services/', to: redirect('/', status: 301)
  get '/Gary-Bunofsky-Resume.pdf', to: redirect('/', status: 301)
  get '/resume', to: redirect('/', status: 301)
  get '/west-side-market/', to: redirect('/', status: 301)
  get '/articles/font-awesome/', to: redirect('/', status: 301)
  get '/exacta-land-surveying/', to: redirect('/', status: 301)
  get '/haywood/index.html', to: redirect('/', status: 301)
  get '/exacta/', to: redirect('/', status: 301)
  get '/inquiry/', to: redirect('/', status: 301)
  get '/haywood-turkey-calls/', to: redirect('/', status: 301)
  get '/homepage.html', to: redirect('/', status: 301)
  get '/portfolio/haywood-turkey-calls/', to: redirect('/', status: 301)
  get '/p1.html', to: redirect('/', status: 301)
  get '/life/', to: redirect('/', status: 301)
  get '/p5.html', to: redirect('/', status: 301)
  get '/redcross/', to: redirect('/', status: 301)
  get '/p3.html', to: redirect('/', status: 301)
  get '/GaryBunofsky_Resume.pdf', to: redirect('/', status: 301)
  get '/index_1.html', to: redirect('/', status: 301)
  get '/portfolio/second-cycle-carpet-cleaner/', to: redirect('/', status: 301)
  get '/backend/index.html', to: redirect('/', status: 301)
  get '/portfolio/droplet/', to: redirect('/', status: 301)
  get '/network.html', to: redirect('/', status: 301)
  get '/assets/Resume.pdf', to: redirect('/', status: 301)
  get '/m/', to: redirect('/', status: 301)
  get '/mobile/', to: redirect('/', status: 301)
  
  controller :pay do
    post "/pay/create" => :create
  end
  	
	controller :changelog do
		get '/changelog' => :index
	end
  
  controller :errors do
    match "/404", :to => :not_found, :via => :all
    match "/500", :to => :internal_server_error, :via => :all
  end
  
	controller :static do
		get '/:page' => :index, :as => :static
		get '/:page/:subpage' => :show, :as => :subpage
	end

end
