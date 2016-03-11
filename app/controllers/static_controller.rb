class StaticController < ApplicationController
  def index
    render template: "#{params[:page]}/index.erb"
  end
  def show
    render template: "#{params[:page]}/#{params[:subpage]}"
  end
end