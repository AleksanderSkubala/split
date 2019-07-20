# Split.js

Split.js is a piece of code that will help you(i hope ;D) in splitting your pages(in HTML that are size of A4). It is helpful in e.g. generating pdf-s, preparing to print and other !!!

### What you have to do

If you want to use split.js you have to:
  - Import split.min.js in your html file
  - create the hierarchy by steps below
  - add 'split();' in script

That's all what you have to do! It's so simple, isn't it?

### Import

You can import Split.js by:
 - raw github
 - download file

Raw link
```sh
https://raw.githubusercontent.com/AleksanderSkubala/split/master/split.min.js
```

OR

Download this
```sh
https://github.com/AleksanderSkubala/split/blob/master/split.min.js
```

### Hierarchy
Split.js has to know what pages you want to split. So div's that are considered as pages must have class 'page'. (Who would have thought? :D)

### How does it work

If el.page is higher than 1123px the elements there are pulled on the next page with the styles and in the correct order. (If next page does't exists, script will make it.)

Author
----
Aleksander Skubała

License
----
MIT


**Free Software, Hell Yeah!**
