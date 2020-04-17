---
path: "/blog/ruby-safe-navigation-operator"
title: "Ruby Safe Navigation Operator"
date: "2018-10-09"
tags: ["Ruby", "Backend"]
---

Ruby's safe navigation operator is used to access a method on an object that
might be `undefined`. Say we want to get the full address of a user's company.
It would look something like this: `user.company.full_address`

But what if not all users have a company? The `user.company` would be `nil`. And
then we would be trying to access the method `full_address` on `nil`. Ultimately
we would be left with the following error: `Undefined method 'full_address'
for nil:NilClass`

We can use a safe navigation operator to prevent this error. We would write
`user.company&.full_address`. This would allow us to get the `full_address`,
only if the `user.company` was not `nil`.
