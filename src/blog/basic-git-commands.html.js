module.exports = `
<h1 class="font-size--7 margin--t-7">Basic Git Commands</h1>
<div class="margin--b-4">
<p class="font-size--5">Features are added, files are refactored and bugs are removed. For this reason seasoned developers use version control. There are plenty of benefits to using version control. Below you can find the main reasons I, as well as many others, love it.</p>
<h2 class="font-size--6">Benefits of version control</h2>
<ul class="font-size--5">
  <li>Revert back to previous versions.</li>
  <li>Simultaneously work on the same file with others.</li>
  <li>Maintain multiple versions of code.</li>
  <li>See the difference between versions of  code.</li>
  <li>Prove a particular change broke or fixed a feature.</li>
  <li>Examine the history of your project.</li>
  <li>Submit a change on a collaborative project.</li>
  <li>Share code.</li>
  <li>Allow others to work on your code</li>
  <li>View when work is being done and by whom.</li>
  <li>Test a feature without interfering with working code.</li>
</ul>
<p class="font-size--5">As much as I love Git. It never fails that I forget a command or two. It doesn't help that there's many ways to do the same thing. Regardless, when I forget one command I reference the list below.</p>
<h2 class="font-size--6">Creating Repositories</h2>
<h4 class="font-size--5 margin--b-0">Create a local repo</h4>
<pre>git init</pre>

<h4 class="font-size--5 margin--b-0">Download a repository and its history</h4>
<pre>git clone https://github.com/user/repo</pre>

<h4 class="font-size--5 margin--b-0">Change the URI or URL for a remote repo</h4>
<pre>git remote set-url origin https://your.new.url</pre>

<h2>Making Changes</h2>
<h4 class="font-size--5 margin--b-0">List all files to be committed</h4>
<pre>git status</pre>

<h4 class="font-size--5 margin--b-0">View file differences that are unstaged</h4>
<pre>git diff</pre>

<h4 class="font-size--5 margin--b-0">Stage single file</h4>
<pre>git add path/of/file</pre>

<h4 class="font-size--5 margin--b-0">Stage all files</h4>
<pre>git add .</pre>

<h4 class="font-size--5 margin--b-0">Unstage single file, but retains contents</h4>
<pre>git reset path/of/file</pre>

<h4 class="font-size--5 margin--b-0">Commit changes to repository</h4>
<pre>git commit -m "message"</pre>
</div>

<div class="margin--b-4">
  <h2>Managing Branches</h2>
  <h4 class="font-size--5 margin--b-0">View local branches</h4>
  <pre>git branch</pre>

  <h4 class="font-size--5 margin--b-0">View remote branches</h4>
  <pre>git branch -r</pre>

  <h4 class="font-size--5 margin--b-0">View all local and remote branches</h4>
  <pre>git branch -a</pre>

  <h4 class="font-size--5 margin--b-0">Switch branches</h4>
  <pre>git checkout your-branch-name</pre>

  <h4 class="font-size--5 margin--b-0">Merge specific commit to current branch</h4>
  <pre>git cherry-pick your-sha</pre>

  <h4 class="font-size--5 margin--b-0">Merge a range of commits to current branch</h4>
  <pre>git cherry-pick your-first-sha^..your-second-sha</pre>
</div>

<div class="margin--b-4">
  <h2>Stashing and Unstashing</h2>
  <h4 class="font-size--5 margin--b-0">Save changes as stash</h4>
  <pre>git stash save "message"</pre>

  <h4 class="font-size--5 margin--b-0">Apply stash</h4>
  <pre>git stash apply stash@{#}</pre>

  <h4 class="font-size--5 margin--b-0">View all stashes</h4>
  <pre>git stash list</pre>
</div>

<div class="margin--b-4">
  <h2 class="font-size--6">Others</h2>
  <h4 class="font-size--5 margin--b-0">Change URL for remote git repository</h4>
  <pre>git remote set-url origin https://github.com/user/repo</pre>

  <h4 class="font-size--5 margin--b-0">View existing remotes</h4>
  <pre>git remote -v</pre>

  <h4 class="font-size--5 margin--b-0">Remove cached files</h4>
  <pre>git rm -r --cached .</pre>

  <h4 class="font-size--5 margin--b-0">Overwrite all local files and update to latest commit</h4><h4>
  <pre>git reset --hard origin/master</pre>
</div>
`;
