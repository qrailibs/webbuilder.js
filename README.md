![webbuilder.js](https://via.placeholder.com/800x500/232424/0afc77?text=webbuilder.js)

webbuilder.js is JavaScript library to create your own HTML drag & drop page builder (constructor).

# Installation
You can install webbuilder.js via NPM:
```
npm install webbuilder-js
```

# How to use
webbuilder.js allows you to create fully-functional drag & drop builder, firstly you 
have to initialize webbuilder and define **toolbox** (element from where elements will be dragged)
and **container** (element on what elements will be dropped):
```html
<div id="toolbox"></div>
<div id="container"></div>

<script>
    webbuilder.init(new BuilderToolbox('#toolbox'), new BuilderContainer('#container'));
</script>
```
