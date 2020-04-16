---
path: "/wiki/how-to-kill-processes"
date: "2018-11-04"
title: "How to kill processes"
---

- List all: ```lsof -wni tcp:3000```
- Kill by id: ```kill -9 PID```
- Search by process: ```ps aux | grep pg```
