---
layout: post
title: 用管理员在此处打开cmd
date: 2019-08-26 20:17:00
tags: cmd regedit
categories: tech-regedit trick
excerpt: Why not have a try?
---

* TOC
{:toc}

相信大家看过不少类似的博客，我也看过不少，但觉得很多博客都写得比较杂乱，或者不够全面，本篇博客就是想要简洁明了地把方法展示给大家。

# 话不多说，直入正题

- **此处涉及的所有的右击目标操作，均可以替换为选中目标并在右侧窗口空白处右击**
- **所有的值均不带引号**
- **带※的步骤为可选项**

1. **打开“运行”窗口**（快捷键：Windows徽标键+R）**，输入“regedit”打开注册表编辑器**
2. **上方路径处输入“计算机\\HKEY_CLASSES_ROOT\\Directory\\Background\\shell”**（也可能是“我的电脑”等）
3. **右击“shell”→“新建”→“项”，命名为“runas”**（管理员权限打开，命名为其他无权限）
4. ※&nbsp;选中“runas”项，双击右侧窗口的“（默认）”项（其值为显示在右键菜单中的名称，若不设置则显示为上一步中设置的名字）
5. ※&nbsp;右击“runas”→“新建”→“字符串值”，命名为“Icon”
6. ※&nbsp;双击“Icon”，设置其值为“cmd.exe”（其值为右键菜单中显示的图标的路径）
7. ※&nbsp;右击“runas”→“新建”→“DWORD (32 位)值”，命名为“ShowBasedOnVelocityId”
8. ※&nbsp;双击“ShowBasedOnVelocityId”，设置其值为“639bc8”（十六进制，十进制值为6527944）
9. **右击“runas”→“新建”→“项”，命名为“command”**
10. **选中“command”项，双击右侧窗口的“（默认）”项，设置其值为“cmd.exe /s /k pushd "%V"”**（设置为在此处打开）

# 对比图

![][pic-1]
![][pic-2]
![][pic-3]

[pic-1]: {{ '/Admin Command Here/pic-1.png' | prepend: site.imgrepo }}
[pic-2]: {{ '/Admin Command Here/pic-2.png' | prepend: site.imgrepo }}
[pic-3]: {{ '/Admin Command Here/pic-3.png' | prepend: site.imgrepo }}
