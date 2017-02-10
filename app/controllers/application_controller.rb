class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  before_filter :redirect_subdomain
  def redirect_subdomain
    if request.host == 'www.garybunofsky.com'
      redirect_to 'https://garybunofsky.com' + request.fullpath, :status => 301
    end
  end
  
  # Redirect to 404 not_found if template is missing
  rescue_from ActionView::MissingTemplate do |exception|
    redirect_to controller: 'errors', action: 'not_found'
  end
  
end
