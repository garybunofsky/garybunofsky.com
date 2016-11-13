require 'rubygems'
require 'sitemap_generator'

SitemapGenerator::Sitemap.default_host = 'https://garybunofsky.com'
SitemapGenerator::Sitemap.create do
  add '/home', :changefreq => 'weekly', :priority => 0.9
  add '/about', :changefreq => 'monthly', :priority => 0.5
  add '/blog', :changefreq => 'weekly', :priority => 0.7
	add '/blog/basic-git-commands', :changefreq => 'weekly', :priority => 0.6
	add '/blog/finding-photos', :changefreq => 'weekly', :priority => 0.6
	add '/blog/the-hamburger-icon', :changefreq => 'weekly', :priority => 0.6
	add '/blog/website-deployment-checklist', :changefreq => 'weekly', :priority => 0.6
	add '/changelog', :changefreq => 'weekly', :priority => 0.4
	add '/portfolio', :changefreq => 'weekly', :priority => 0.8
	add '/libary', :changefreq => 'weekly', :priority => 0.5
	add '/resume.pdf', :changefreq => 'weekly', :priority => 0.9
	add '/style-guide', :changefreq => 'weekly', :priority => 0.3
end
SitemapGenerator::Sitemap.ping_search_engines # Not needed if you use the rake tasks
d 