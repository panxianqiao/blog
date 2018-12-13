---
title: home
---

[[toc]]


# markdwon 常用语法

## 标题

```
# ~ ######
一级标题 ~ 六级标题
```

## 引用

```
>引用
```

view:
>引用

## 分割线

```
---
```

view:

---

## 图片

```
![img](https://img1.doubanio.com/view/photo/raw/public/p2181978069.jpg)
```
view:
![img](https://img1.doubanio.com/view/photo/raw/public/p2181978069.jpg)

## 超链接
```
[百度](https://www.baidu.com)
```
[百度](https://www.baidu.com)

## 列表

### 无序列表

```
- item1
- item1
- item1
```

view:
- item1
- item1
- item1

### 有序列表
```
1. item1
2. item1
3. item1
```

view:
1. item1
2. item1
3. item1

### 列表嵌套
```
- item1
   - item2
      - item3
```
view:
- item1
   - item2
      - item3
```
1. item1
   1. item1-1
      1. item1-1-1
```
view:
1. item1
   1. item1-1
       1. item1-1-1

## 表格

```
表头|表头|表头
---|:--:|---
内容|内容12123|内容111
内容|内容|内容
```
view:
表头|表头|表头
---|:--:|---:
内容|内容12123|内容111
内容|内容|内容

# VuePress 拓展

## 图片引用路径别名
```
~@images/xxx.png
```



## Emoji

```
:tada: :100:
```

view:

:tada: :100:

## 目录

```
[[toc]]
```

view:
[[toc]]

## 自定义容器

```
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: danger STOP
Danger zone, do not proceed
:::
```

view:

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: danger STOP
Danger zone, do not proceed
:::

## 导入代码片段

```
<<< @/docs/README.md
```

view:

<<< @/docs/README.md
