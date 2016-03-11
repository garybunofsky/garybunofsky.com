class ChangelogController < ApplicationController
  def index
		request_uri = 'https://api.github.com/repos/garybunofsky/garybunofsky.com/commits'
		uri = URI(request_uri)
		response = Net::HTTP.get(uri)
		@data = JSON.parse(response)
  end
end
