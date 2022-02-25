---
title: قوائم
description: استعراض لبقية مزايا الماركداون
date: 2022-02-26
tags: code
---

## جدول كتب

هذه قائمة ببعض مترجمات منير بعلبكي:

| الاسم        | المؤلف الأصلي | سنة التأليف |
| ------------ | ------------- | ----------- |
| البؤساء      | فيكتور هيوغو  | 1862        |
| أوليفر تويست | تشارلز ديكنز  | 1838        |
| الأرض الطيبة | بيرل بوك      | 1931        |

![Pauley Pavilion at UCLA](/2021-12-03.jpg)

## قائمة

1. كتب عربية
	1. خيالية
		1. جلجامش
		2. مدن الملح
	2. غير خيالية

## برمجة

سكربت بسيط لإضافة جدول عبر جوجل:

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

