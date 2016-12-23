###这是jQuery学习练习库 <hr>
1. jQuery选择器之层级选择器<br>
![](http://img.mukewang.com/5590e98b0001f60d06130229.jpg)
2. jQuery选择器之基本筛选选择器

![](http://img.mukewang.com/57cd1df2000146de06020498.jpg)
<br>
注意事项：
     :eq(), :lt(), :gt(), :even, :odd 用来筛选他们前面的匹配表达式的集合元素，根据之前匹配的元素在进一步筛选，注意jQuery合集都是从0开始索引*/
<br>
(ps 学编程，遇到一些简称的代码，去查清楚全称，记忆会更牢固，就比如eq全称是equal(意思是“等于”)；gt全称是greater than(意思是大于)；lt全称是less than(意思是小于)__)

<br>
3. jQuery选择器之属性筛选选择器
<br>

![](http://img.mukewang.com/57d654200001c46507360560.jpg)<br>
在这么多属性选择器中`[attr="value"]`和`[attr*="value"]`是最实用的
<br>
[attr="value"]能帮我们定位不同类型的元素，特别是表单form元素的操作，比如说input[type="text"],input[type="checkbox"]等
<br>
[attr*="value"]能在网站中帮助我们匹配不同类型的文件