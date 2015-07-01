<?php
/**
 * Template Name: Style Guide
 */
?>


<?php while (have_posts()) : the_post(); ?>
	<div class="container">
		<div class="row">
			<div class="col-md-10 col-md-offset-7">
				<h1 class="animated fadeIn"><?php echo get_the_title( $ID ); ?></h1>
				<div class="mT2">
					<p>This page's purpose is to demonstrated the various style of elements that make up this site. The page not only helps to aid in maintenance, but is also present to satisfy the curiosity of others who are interested in such things.</p>
					<figure class="align-left"><img src="/wp-content/uploads/2015/04/night-flight.jpg" alt="" />
					This is an example of a caption.</figure>&nbsp;
					<p>At the time of writing the type was set in Adriane Text and Franklin Gothic URW. Heading one is only to be used to display the page's title. Therefore, should not be used more than once on each page.</p>
					<h2>Heading Two</h2>
					<p>Second level headings are used organize content into sections. They commonly denote subjects, projects, articles or topics. Second level headings can also be used to show importance or emphasis, however the <strong>strong</strong> or <em>emphasis</em> tag can create a similar a result that is much more tasteful. In order to remain consistent, only one space should be between the ending punctuation mark and the character of the next sentence.<p>
					<h3>Heading Three</h3>
					<p>Naturally, the third level heading is slightly less important to that of second level headings. It's size is smaller as a result. No matter their numerical level, headings should <em>not</em> be hyperlinks in any case. Links can be created from plain text, such as what you're reading – or from a button, which is explained below.<p>
					<h3>Colors</h3>
					<p>These are the six colors that are used along with their corresponding Hex codes.</p>
					<div class="block">
						<div class="col-sm-8 brand-primary">
							<p class="sm">Brand Primary<br />
							Hex: #333333</p>
						</div>
						<div class="col-sm-8 brand-secondary">
							<p class="sm">Brand Secondary<br />
							Hex: #666666</p>
						</div>
						<div class="col-sm-8 grey">
							<p class="sm">Grey<br />
							Hex: #cccccc</p>
						</div>
						<div class="col-sm-8 neutral-secondary">
							<p class="sm">Neutral Secondary<br />
							Hex: #fafafa</p>
						</div>
						<div class="col-sm-8 accent">
							<p class="sm">Accent<br />
							Hex: #4078c0</p>
						</div>
						<div class="col-sm-8 neutral">
							<p class="sm">Neutral<br />
							Hex: #ffffff</p>
						</div>
					</div>
					<h3>Buttons</h3>
					<p>Buttons can be used as a way to link to pages, documents and websites. Since they are fairly large in size, buttons should be used sparingly. Links, whether styled as a button or otherwise, should not use a target attribute to open in a new tab <sup id="fn:1"><a href="#fnref:1" data-scroll="" data-options="{ &quot;easing&quot;: &quot;easeInQuad&quot; }">1</a></sup>.<p>
					<div class="row">
						<div class="col-xs-8">
							<a class="btn">Example</a>
						</div>
					</div>
					<figure class="bleed-center"><img src="/wp-content/uploads/2015/04/meeting.jpg" alt="" />An image that is centered with bleed.</figure>
					<h3>Lists</h3>
					<p>To showcase multiple elements of equal importance an unordered list will be utilized. All unordered lists are required to be in alphabetical order. Below is an example displaying how it will render.</p>
					<ul>
						<li>Primary item</li>
						<li>Primary item
					<ul>
						<li>Secondary item</li>
						<li>Secondary item</li>
					</ul>
					</li>
						<li>Primary item</li>
					</ul>
					<blockquote>Although lists are uncommon throughout this website – it would be precarious to style only an unordered list. Below is an example of an ordered list. Please also note that this is an example of a blockquote. As the saying goes, we have killed two birds with one stone by placing it here.</blockquote>
					<ol>
						<li>Primary item</li>
						<li>Primary item
					<ol>
						<li>Secondary item</li>
						<li>Secondary item</li>
					</ol>
					</li>
						<li>Primary item</li>
					</ol>
					<bdi>"This is an example of a quote wrapped in bi-directional isolation tag. It can be used to emphasize or supplement the article text. It's placement is quite similar to that of a blockquote, however it bleeds over either margin."</bdi>
					<h3>Pre-formatted Text</h3>
					<pre>
						!  "  #  $  %  &amp;  '  (  )  *  +  ,  -  .  /
						0  1  2 3  4  5  6  7  8  9  :  ;  &lt;  =  &gt;  ?
						@  A  B  C  D  E  F  G  H  I  J  K  L  M  N  O
						P  Q  R  S T  U  V  W  X  Y  Z  [  \  ]  ^  _
						`  a  b  c  d  e  f  g  h  i  j  k  l  m  n  o
						p  q  r  s  t  u  v  w  x  y  z  {  |  }  ~  
					</pre>
					<div class="footnotes">
						<ol>
							<li id="fnref:1">Unless that tag is linking to an external source.<a href="#fn:1">↑</a></li>
							<li id="fnref:2">Example footnote two.<a href="#fn:2">↑</a></li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	</div>
<?php endwhile; ?>