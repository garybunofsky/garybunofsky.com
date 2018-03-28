module.exports = `
<h1 class="font-size--7 margin--t-7">Not the Same</h1>
<p class="font-size--5">Library and frameworks both allow you to do more and write less. They share other similarities but shouldn't be used synonymously – although they often are. This creates confusion, so I'll try my best to clear things up.</p>

<h2 class="font-size--6">Libraries</h2>
<p class="font-size--5">Libraries are code that you call to. Once you do, you're able to use it's prewritten functions, objects, and modules. Since most of the heavy lifting is up to the library, you end up with more succinct code.</p>
<p class="font-size--5">Typically libraries solve smaller, specific problems. There are libraries for getting weather data, for formatting time and for animating elements. Because of their focused objectives, libraries tend to have fewer dependencies than frameworks. They're less opinionated and leave you with more control over the structure of your code. A few examples of libraries are Moment.js, Animate.css and D3.js.</p>
<p class="font-size--5">While it's possible, you wouldn't want to build an medium-large sized application using just libraries. You would spend a great deal of time just getting the structure up and running. Frameworks make a much better launchpad for full-fledged applications.</p>

<h2 class="font-size--6">Frameworks</h2>
<p class="font-size--5">A framework is like a blank page in a coloring book. The main structure is outlined, all that's left to do is to color inside the lines. The lines are the predetermined structure of the application. While the uncolored areas are the models, objects and functionality. Most often developers build an application or service with the help of a framework's predetermined architecture.</p>
<p class="font-size--5">Most importantly, frameworks call to your code. Therefore you must structure your codebase the way the framework intended. In turn this allows you to focus on writing the application or service, but also leave you with less control. When building an application it's likely best to use a framework. However, they have a lot of dependencies, so it'd be overkill for a trivial task – like getting the current temperature in Cleveland1. A few examples of frameworks are Laravel, Angular and Ruby on rails.</p>`;
