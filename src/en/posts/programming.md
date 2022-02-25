---
title: Tables and codes
description: demonstration of other markdown features
date: 2022-02-26
tags:
  - code
---

## A table

![Pauley Pavilion at UCLA](/2021-12-03.jpg)

This is a list of books

| Name           | Author          | Date |
| -------------- | --------------- | ---- |
| Les Miserables | Victor Hugo     | 1862 |
| Oliver Twist   | Charles Dickens | 1838 |
| The good earth | Pearl Buck      | 1931 |

## List

1. This is Item1.
  1. Another item
        1. Foo
            2. Bar

  2. Last item

2. finally

## Programming

A simple script to add an event to google calendar by cli. See my [Github gists](gists.github.com/mstfelg).

```bash
#     Title           :   Schejule
#     Author          :   MUSTAFA ALELG
#     Date            :   2021-11-20
#     Description     :   A quick entry tool to create a Google Calendar event
#!/bin/sh

echo "Today is $(date -I). Add an event:"
echo "¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯"
read -p "Title: " title
read -p "Start: " start
read -p "End:   " end
read -p "Loc:   " loc
read -p "Note:  " note


[[ ${end::1} == "." ]] && end="${start%% *}${end:1}"

start=$(date -d "$start" "+%Y%m%dT%H%M")
end=$(date -d "$end" "+%Y%m%dT%H%M")

url="https://www.google.com/calendar/render?action=TEMPLATE&"\
"text=$title&"\
"dates=$start%2F$end&"\
"location=$loc&"\
"details=$note&"
# "trp=$&" for availability

firefox "$url"
```

