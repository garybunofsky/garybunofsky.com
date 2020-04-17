---
path: "/blog/notes-from-rustbelt-refresh-2019"
date: "2019-03-08"
title: "Notes from Rustbelt Refresh 2019"
tags: ["CSS", "Design", "Frontend"]
---

[Rustbelt Refresh CSS Layout Workshop by rachelandrew on CodePen](https://codepen.io/rachelandrew/post/47a9337f00ec6d6481fae53970ef540f/rustbelt-refresh-css-layout-workshop)

*display: flow-root;* 
Used for making div display block and establishes a new formatting context for its contents.

*display: contents;* 
Only displays content, removes all styling. Also removes all A11Y shit.

## Columns 
*column-width: 400px;*
Make two column layout. This shit is inherently responsive.

*column-count: 2;*
Specify column count.

*column-gap: 1em;*
Sets a gap between them cols.

*column-rule: 1px solid red;*
Add a rule to a column. This doesn't take up its own space.

*column-span: all;*
Make that headline span across those columns.

*break-inside: avoid;*
Stop fragmentation from happening


## Multi-column
> Multi-col is good for checkboxes and lots of form fields because it breaks things into sections. You can do something like:

```css
.fields {
  max-width: 400px;
  column-count: 4;
}
```


## Alignment (For Grid)
*Align-content*, along with other *align* prefixed attributes, deal with vertical alignment. *Justify-content* along with other *justify* prefixed attributes align on a horizontal level.

> Justify means inline model
> Align means box model


## Writing modes
```css
writing-mode: vertical-lr; //vertical writing mode
writing-mode: horizontal-tb; // horizontal writing mode
```

### Flexbox
> Rachel thinks flex box makes for a terrible grid system. Flexbox is good at displaying a bunch of stuff in a sensible way. Big stuff gets more space, small stuff gets less space. Once you try to control Flexbox it starts misbehaving. 

### How are Flexbox and Grid different?
> Flexbox is one dimensional. You’re either dealing with column or row. However you can wrap that to make it two dimensional. Two dimensional stuff is best left to Grid.


#### Spacing evenly
```css 
.add-space {
	justify-content: space-evenly; 
	// or //
	justify-content: space-between;
}
```


> _inline-size_ and _block-size_ might replace _width_ and _height_.

