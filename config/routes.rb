Rails.application.routes.draw do
  
	root 'root#index'	
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
