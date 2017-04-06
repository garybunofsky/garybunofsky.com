module ApplicationHelper
  def browser(img_src, alt, url)
    return "<div class=\"browser mb-8\">
      <div class=\"browser_header\">
        <ul class=\"spotlights\">
          <li class=\"spotlights_item\"></li>
          <li class=\"spotlights_item\"></li>
          <li class=\"spotlights_item\"></li>
        </ul>
        <div class=\"search\">
          <span>#{url}</span>
        </div>
      </div>
      <img src=\"#{img_src}\" alt=\"#{alt}.\">
    </div>".html_safe
  end
end

