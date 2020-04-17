---
path: "/blog/create-ssh-user-on-ec2-bitnami-wordpress"
date: "2018-11-11"
title: "Create SSH User on EC2 Bitnami Wordpress"
tags: ["SSH", "Backend", "EC2"]
---
1. SSH on to the server using our PEM key
`ssh -i /Users/our_user/.ssh/our_pem_file.pem ubuntu@ec2-12-102-50-85.compute-1.amazonaws.com`
2. Create another user so we’re not using ubuntu, bitnami or root
`CREATE USER ‘our_new_user@‘localhost' IDENTIFIED BY ‘some_strong_password’;` or `CREATE USER 'our_new_user'@'%' IDENTIFIED BY 'some_strong_password';`
3. Give the new user all privileges 
`GRANT ALL PRIVILEGES ON *.* to our_new_user@localhost IDENTIFIED BY 'some_strong_password' WITH GRANT OPTION;` 
4. Flush privileges to 
`FLUSH PRIVILEGES;`
6. Exit
`Exit;`

