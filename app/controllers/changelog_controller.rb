class ChangelogController < ApplicationController
  def index
    require 'net/http'
    require 'net/https'
		request_uri = 'https://api.github.com/repos/garybunofsky/garybunofsky.com/commits'
		uri = URI(request_uri)
		response = Net::HTTP.get(uri)
		@data = JSON.parse(response)

		@month_array = Array.new
		@data.each do |item|
				 @commit_month = Date.parse(item['commit']['author']['date']).strftime('%Y-%m-%d')
				 @month_array.push @commit_month
		 end
		 @counts = @month_array.reverse.group_by{|i| i}.map{|k,v| [k, v.count] }.to_json.html_safe
	end
end
