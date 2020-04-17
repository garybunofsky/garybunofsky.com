---
title: Exporting a CSV from Rails
date: "2020-02-06"
path: "blog/exporting-csv-from-rails
---

Every once in a while a client I'm working with needs some custom data from our
Rails app. Usually it's granular they need it before the end of day to land a
deal or impress somebody who I'll probably never meet. Long story short I find
myself in rails console exporting a CSV. Here's what that looks like. It's
normally much more intricate than this, but for example purposes this will
suffice.

```
require 'csv' # We need this since we're working with a CSV
file = "#{Rails.root}/public/export.csv" # Now we'll define where the file will
be saved
header = %w[brand number_of_products]
brands = Brand.all.map { |brand| {name: brand.name, number_of_products: brand.products.count} }
CSV.open(file, 'w', write_headers: true, headers: header) do |write|
  brands.each do |b|
    write << [b[:name], b[:number_of_products]]
  end
end
```
