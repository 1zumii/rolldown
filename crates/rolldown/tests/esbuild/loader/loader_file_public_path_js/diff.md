# Reason
1. not support public path
2. not support asset path template
# Diff
## /out/image-LSAMBFUD.png
### esbuild
```js
x
```
### rolldown
```js

```
### diff
```diff
===================================================================
--- esbuild	/out/image-LSAMBFUD.png
+++ rolldown	
@@ -1,1 +0,0 @@
-x;

```
## /out/entries/entry.js
### esbuild
```js
// src/images/image.png
var image_default = "https://example.com/image-LSAMBFUD.png";

// src/entries/entry.js
console.log(image_default);
```
### rolldown
```js

```
### diff
```diff
===================================================================
--- esbuild	/out/entries/entry.js
+++ rolldown	
@@ -1,2 +0,0 @@
-var image_default = "https://example.com/image-LSAMBFUD.png";
-console.log(image_default);

```