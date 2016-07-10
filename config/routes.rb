Rails.application.routes.draw do

	root 'root#index'

	controller :changelog do
		get '/changelog' => :index
	end

	controller :static do
		get '/:page' => :index, :as => :static
		get '/:page/:subpage' => :show, :as => :subpage
	end

end
