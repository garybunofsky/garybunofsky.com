require 'rubygems'
require 'sitemap_generator'

SitemapGenerator::Sitemap.default_host = 'http://garybunofsky.com'
SitemapGenerator::Sitemap.create do
  add '/home', :changefreq => 'weekly', :priority => 0.9
  add '/blog', :changefreq => 'weekly'
	add '/blog/basic-git-commands', :changefreq => 'weekly'
	add '/blog/finding-photos', :changefreq => 'weekly'
	add '/blog/the-hamburger-icon', :changefreq => 'weekly'
	add '/blog/website-deployment-checklist', :changefreq => 'weekly'
	add '/changelog', :changefreq => 'weekly'
	add '/portfolio', :changefreq => 'weekly'
	add '/libary', :changefreq => 'weekly'
	add '/resume', :changefreq => 'weekly'
	add '/style-guide', :changefreq => 'weekly'
end
SitemapGenerator::Sitemap.ping_search_engines # Not needed if you use the rake tasks
