u.js API
========
This is the API documentation for u.js. Most of the methods and functions can be used the same as jQuery, with a few exceptions. If the `$` is not used, u is also assigned to it.

---

## Constructor

### u(param)
Creates a u object.
 
| Parameter | Type | Description |
|---|---|---|
| param | string, object, array, function | Can be a css selector, an html string, a dom element, an array of dom elements or a function, which is executed on DOM ready. |

```javascript
u('selector')
u('<div></div>')
u(element)
u(elements)
u(function() {
	// DOM ready function
});
```

---

## u object Methods

### .on(event, handler)
Add event handlers to element(s).

Returns the u object.

| Parameter | Type | Description |
|---|---|---|
| event | string | Can be a single event name or multiple events separated by a space. |
| handler | function(**event**) | A function to execute when the event is fired. The function has one parameter, the **event object**. |

```javascript
u('selector').on('click', function(event) {
	// do something
});
```


### .one(event, handler)
Add one time event handlers to element(s).

Returns the u object.

| Parameter | Type | Description |
|---|---|---|
| event | string | Can be a single event name or multiple events separated by a space. |
| handler | function(**event**) | A function to execute when the event is fired. The function has one argument, the **event object**. |

```javascript
u('selector').one('click', function(event) {
	// do something
});
```



### .off(event, handler)
Remove event handlers from element(s).

Returns the u object.

| Parameter | Type | Description |
|---|---|---|
| event | string | Can be a single event name or multiple events separated by a space. |
| handler | function() | The handler function to be removed. |

```javascript
u('selector').off('click', function(event) {
	// do something
});
```


### .each(callback)
Iterate collection and execute callback function.

Returns the u object.

| Parameter | Type | Description |
|---|---|---|
| callback | function(index, item) | Callback function for each element in the collection. |

```javascript
u('selector').each(function(index, item) {
	// do something
});
```


### .hasClass(class)
Checks for the presence of a class name.

Returns a boolean.

| Parameter | Type | Description |
|---|---|---|
| class | string | Class name to check for. |

```javascript
u('selector').hasClass('class-name') // true or false;
```



### .addClass(class)
Add class to element(s).

Returns the u object.

| Parameter | Type | Description |
|---|---|---|
| class | string | Can be a single class name or multiple class names separated by a space. |

```javascript
u('selector').addClass('class-name');
```


### .removeClass(class)
Remove class from element(s).

Returns the u object.

| Parameter | Type | Description |
|---|---|---|
| class | string | Can be a single class name or multiple class names separated by a space. |

```javascript
u('selector').removeClass('class-name');
```


### .toggleClass(class)
Toggle class on element(s).

Returns the u object.

| Parameter | Type | Description |
|---|---|---|
| class | string | Can be a single class name or multiple class names separated by a space. |

```javascript
u('selector').toggleClass('class-name');
```


### .position()
Get position of an element.

Returns an object with top and left position.

```javascript
u('selector').position(); // {top: 123, left: 123}
```


### .offset()
Get offset of an element.

Returns an object with top and left position.

```javascript
u('selector').offset(); // {top: 123, left: 123}
```

### .scrollTop(value)
Get or set scrollTop of an element.

Returns the scrollTop or the u object.

| Parameter | Type | Description |
|---|---|---|
| value | number | **Optional**. New scrollTop value. |

```javascript
u('selector').scrollTop(); // 1234
u('selector').scrollTop(200); // u object
```


### .width(value)
Get or set element(s) width.

Returns the width or the u object.

| Parameter | Type | Description |
|---|---|---|
| value | number | **Optional**. New width value. |

```javascript
u('selector').width() // 1234
u('selector').width(200) // u object
```


### .outerWidth(margin)
Get an element's outer width.

Returns the outer width.

| Parameter | Type | Description |
|---|---|---|
| margin | boolean | **Optional**. If true, includes margin. |

```javascript
u('selector').outerWidth()
```


### .height(value)
Get or set element(s) height.

Returns the height or the u object.

| Parameter | Type | Description |
|---|---|---|
| value | number | **Optional**. New height value. |

```javascript
u('selector').height() // 1234
u('selector').height(200) // u object
```


### .outerHeight(margin)
Get an element's outer height.

Returns the outer height.

| Parameter | Type | Description |
|---|---|---|
| margin | boolean | **Optional**. If true, includes margin. |

```javascript
u('selector').outerHeight()
```


### .hide()
Hide element(s). (Sets display to none)

Returns the u object.

```javascript
u('selector').hide()
```


### .show()
Show element(s). (Resets display property)

Returns the u object.

```javascript
u('selector').show()
```


### .attr(attribute, value)
Get or set an attribute's value.

Returns the value or the u object.

| Parameter | Type | Description |
|---|---|---|
| attribute | string | Attribute name |
| value | string | **Optional**. New attribute value. |

```javascript
u('selector').attr('id') // id
u('selector').attr('id', 'new-id') // u object
```


### .removeAttr(attribute)
Remove an attribute.

Returns the u object.

| Parameter | Type | Description |
|---|---|---|
| attribute | string | Attribute name |

```javascript
u('selector').removeAttr('id') // u object
```


### .hasAttr(attribute)
Check for the presence of an attribute.

Returns a boolean.

| Parameter | Type | Description |
|---|---|---|
| attribute | string | Attribute name |

```javascript
u('selector').hasAttr('id') // true or false
```


### .data(attribute, value)
Get or set a data attribute.

Returns the attribute value or the u object.

| Parameter | Type | Description |
|---|---|---|
| attribute | string | Attribute name (without "data-")|
| value | string | **Optional**. New attribute value. |

```javascript
u('selector').data('key') // value
u('selector').data('key', {property: 'value'}) // u object
```


### .css(property, value)
Get or set css value(s).

Returns the value or the u object.

| Parameter | Type | Description |
|---|---|---|
| property | string, object | Property name or object with propery name and value. **Important**: property names must be camelCase! |
| value | string | **Optional**. New property value. |

```javascript
u('selector').css('backgroundColor') // value
u('selector').css('backgroundColor', 'red') // u object
u('selector').css({backgroundColor: 'red', fontSize: '12px'}) // u object
```

### .append(elements)
Append element(s).

Returns the u object.

| Parameter | Type | Description |
|---|---|---|
| elements | object, array | Can be a single DOM element or an array of DOM elements |

```javascript
u('selector').append(elements) // u object
```

### .prepend(elements)
Prepend element(s).

Returns the u object.

| Parameter | Type | Description |
|---|---|---|
| elements | object, array | Can be a single DOM element or an array of DOM elements |

```javascript
u('selector').prepend(elements) // u object
```

### .before(elements)
Insert element(s) before.

Returns the u object.

| Parameter | Type | Description |
|---|---|---|
| elements | object, array | Can be a single DOM element or an array of DOM elements |

```javascript
u('selector').before(elements) // u object
```

### .before(elements)
Insert element(s) after.

Returns the u object.

| Parameter | Type | Description |
|---|---|---|
| elements | object, array | Can be a single DOM element or an array of DOM elements |

```javascript
u('selector').after(elements) // u object
```

### .first()
Get the first element of the collection.

Returns a u object with the first element.

```javascript
u('selector').first() // u object
```

### .last()
Get the last element of the collection.

Returns a u object with the last element.

```javascript
u('selector').last() // u object
```

### .get(index)
Get the element at the specified index out of the collection.

Returns a u object with the element.

| Parameter | Type | Description |
|---|---|---|
| index | number | Index of the element |


```javascript
u('selector').get(2) // u object
```

### .clone()
Get a clone of the current element.

Returns a u object with the cloned element.

```javascript
u('selector').clone() // u object
```

### .contains(element) 
Check for presence of child element.

Returns a boolean.

| Parameter | Type | Description |
|---|---|---|
| element | string, object | Can be a css selector or a u object. |

```javascript
u('selector').contains('.class') // true or false
u('selector').contains(element) // true or false
```

### .find(selector)
Find matching child elements.

Returns a u object with matching elements.

| Parameter | Type | Description |
|---|---|---|
| selector | string | A css selector |

```javascript
u('selector').find('.class') // u object
```

### .children()
Get child elements.

Returns a u object with child elements.

```javascript
u('selector').children() // u object
```

### .index(element)
Get the 0 based index of an element. 

If no argument is passed, returns the index of the first element in the current u object relative to all sibling elements.

If a selector is passed, returns the index of the first element in the current u object relative to all elements matching the selector.

If an element is passed (u object or DOM element), returns the index of the first passed element relative to the current u object.

| Parameter | Type | Description |
|---|---|---|
| element | object, string | **Optional**. An element or a css selector |

```javascript
u('selector').index() // element index
u('selector').index('other-selector') // element index
u('selector').index(u('other-selector')) // element index
```


### .prev(selector)
Get previous sisbling element. Optionally matching a css selector.

Returns a u object with the previous sibling element.

| Parameter | Type | Description |
|---|---|---|
| selector | string | **Optional**. A css selector |

```javascript
u('selector').prev() // u object
```

### .prevAll(selector)
Get all previous sisbling elements. Optionally matching a css selector.

Returns a u object with the previous sibling elements.

| Parameter | Type | Description |
|---|---|---|
| selector | string | **Optional**. A css selector |

```javascript
u('selector').prevAll() // u object
```

### .next(selector)
Get next sisbling element. Optionally matching a css selector.

Returns a u object with the next sibling element.

| Parameter | Type | Description |
|---|---|---|
| selector | string | **Optional**. A css selector |

```javascript
u('selector').next() // u object
```

### .next(selector)
Get all next sisbling elements. Optionally matching a css selector.

Returns a u object with the next sibling elements.

| Parameter | Type | Description |
|---|---|---|
| selector | string | **Optional**. A css selector |

```javascript
u('selector').nextAll() // u object
```

### .siblings(selector)
Get sibling elements. Optionally only elements matching the selector.

Returns a u object with the sibling elements.

| Parameter | Type | Description |
|---|---|---|
| selector | string | **Optional**. A css selector. |

```javascript
u('selector').siblings() // u object
u('selector').siblings('.class') // u object
```


### .filter(filter)
Filter a collection of elements.

Returns a u object with the matching elements.

| Parameter | Type | Description |
|---|---|---|
| filter | string, function(index, element) | Can be a css selector or a filter function. |

```javascript
u('selector').filter('.class') // u object
u('selector').filter(function(index, element) { 
	return u(element).is('.class')
}) // u object
```

### .text(value)
Get or set the textContent of element(s).

Returns the value or the u object.

| Parameter | Type | Description |
|---|---|---|
| value | string | **Optional**. New textContent value. |

```javascript
u('selector').text() // value
u('selector').text('value') // u object
```

### .html(value)
Get or set the innerHTML of element(s).

Returns the value or the u object.

| Parameter | Type | Description |
|---|---|---|
| value | string | **Optional**. New innerHTML value. |

```javascript
u('selector').html() // value
u('selector').html('<div></div>') // u object
```

### .outerHTML(value)
Get or replace the outerHTML of element(s).

Return the value or the u object.

| Parameter | Type | Description |
|---|---|---|
| value | string | **Optional**. New outerHTML value. |

```javascript
u('selector').outerHTML() // value
u('selector').outerHTML('<div></div>') // u object
```

### .val(value)
Get or set value attribute. (Mostly for inputs and textareas)

Returns the value or the u object.

| Parameter | Type | Description |
|---|---|---|
| value | string | **Optional**. New value. |

```javascript
u('selector').val() // value
u('selector').val('value') // u object
```

### .empty()
Empty the innerHTML of element(s).

Returns the u object.

```javascript
u('selector').empty() // u object
``` 

### .bytes()
Get the bytesize of an input or texterea's value.

Returns the number of bytes.

```javascript
u('selector').bytes() // bytesize
```

### .parent()
Get the direct parent element.

Returns a u object with the parent element.

```javascript
u('selector').parent();
```

### .parents(selector)
Get all parent elements or only the ones matching the selector.

Returns a u object with parent elements.

| Parameter | Type | Description |
|---|---|---|
| selector | string | **Optional**. A css selector. |

```javascript
u('selector').parents() // u object
u('selector').parents('.class') // u object
```

### .remove()
Remove element(s) from the DOM.

Returns the u object.

```javascript
u('selector').remove() // u object
```

### .trigger(event)
Trigger an event on element(s).

Returns the u object.

| Parameter | Type | Description |
|---|---|---|
| event | string | The name of the event. |

```javascript
u('selector').trigger('blur') // u object
```

### .is(selector)
Check if element matches selector.

Returns a boolean.

| Parameter | Type | Description |
|---|---|---|
| selector | string | A css selector. |

```javascript
u('selector').is('.class') // true or false
```

### .focus()
Set focus on an element.

Returns the u object.

```javascript
u('selector').focus() // u object
```

### .blur()
Remove focus from an element.

Returns the u object.
```javascript
u('selector').blur() // u object
```

---

## u utility functions

### u.each(array, callback)
Iterate array and execute callback function. 

Returns the array.

| Parameter | Type | Description |
|---|---|---|
| array | object, array | The array or object the iterate. |
| callback | function(index, item) | Callback function for each element in the array. |

```javascript
u.each([1,2,3], function(index, item) { 
	// do something
}) // array
```

### u.trim(string)
Trim trailing whitespace.

Returns the string.

| Parameter | Type | Description |
|---|---|---|
| string | string | A string. |

```javascript
u.trim('blabla ') // 'blabla'
```

### u.extend(base)
Extending the base object with any number of extension objects.
If only one argument is passed, the u.js namespace is extended, otherwise the first object is extended by the following objects.

Returns the extended object.

| Parameter | Type | Description |
|---|---|---|
| base | object | The base object. |

```javascript
u.extend({key: 'value'}, {key: 'newvalue', newKey: 'value'}) // {key: 'newvalue', newKey: 'value}
```

#### u.fn.extend()
Use `u.fn.extend({...})` to extend the u.js prototype, i.e. for plugins.


### u.push(array, argument), u.pop(array, argument), u.shift(array, argument), u.unshift(array, argument), u.filter(array, argument), u.map(array, argument), u.splice(array, argument)
Array methods.

Call the corresponding method of the array.

| Parameter | Type | Description |
|---|---|---|
| array | array | The array to call the method on. |
| argument | * | The argument to pass to the function. |


### u.inArray(item, array)
Check for presence of item in array.

Returns a boolean.

| Parameter | Type | Description |
|---|---|---|
| item | string | The item to find. |
| array | array | The array to search. |


```javascript
u.inArray('bla', ['bla', 'bli', 'blu']) // true
```

### u.isArray(array)
Check if argument is an array.

Returns a boolean.

```javascript
u.isArray(docuemnt.querySelectorAll('li')) // false
```

### u.toArray(nodeList)
Converts a nodeList to an array.

Returns an array.

```javascript
u.toArray(docuemnt.querySelectorAll('li')) // array
```

### u.toDash(string)
Converts a camelCase string to dash-separated string.

Returns the new string.

```javascript
u.toDash('camelCase') // camel-case
```

### u.toCamel(string)
Converts a dash-separated string to camelCase.

Returns the new string.

```javascript
u.toCamel('dash-separated') // dashSeparated
```

### u.isHtml(string)
Check if string contains HTML tags.

Returns a boolean.

```javascript
u.isHtml('<div>blabla</div>') // true
```

### u.toHtml(string)
Convert an html string to DOM elements.

Returns an array of DOM elements.

```javascript
u.toHtml('<ul><li></li></ul>') // array
```

### u.bytes(string)
Get the bytesize of a string.

Returns the number of bytes.

```javascript
u.bytes('blabla') // 6
```

### u.uuid()
Create a uuid.

Returns a uuid.

```javascript
u.uuid() // uuid
```

### u.rid(length, radix)
Create a random id.

Returns a random id.

| Parameter | Type | Description |
|---|---|---|
| length | number | The length of the id. **Default 32**. |
| radix | number | The radix for the id. **Default 16** |

```javascript
u.rid() // random id
```

### u.prfx(property)
Get the prefixed version of a css property.

Returns the prefixed css property.

| Parameter | Type | Description |
|---|---|---|
| property | string | A css property. |

```javascript
u.prfx('transform') // i.e. WebkitTransform
```

### u.stop(event)
preventDefault function.

Returns the event.

| Parameter | Type | Description |
|---|---|---|
| event | object | An event object. |

```javascript
u.stop(e) // e
```

### u.param(object, json, prefix)
Prepare data as json or form encoded param string.

Return JSON or form encoded string.

| Parameter | Type | Description |
|---|---|---|
| object | object | Data to prepare. |
| json | boolean | **Optional**. If true, formats data as JSON string. |
| prefix | string | **Optional**. If provided, an array with prefix name is created. **Only applies if form encoded!** |

```javascript
u.param({key: 'value'}) // key=value
u.param({key: 'value'}, true) // {"key": "value"}
u.param({key: 'value'}, false, 'prefix') // prefix[key]=value
```

### u.parse(string)
Parses a JSON string to an object.

Returns the parsed object or the string on error.

| Parameter | Type | Description |
|---|---|---|
| string | string | JSON string to parse. |

```javascript
u.parse('{"key": "value"}') // {key: 'value'}
u.parse('blabla') // blabla
```

### u.tpl(string, object)
Parse a template string with values.  
Taken from https://gist.github.com/haochi/1075080

Returns the parsed template string.

| Parameter | Type | Description |
|---|---|---|
| string | string | Template string to parse. |
| object | object | Object containing the referenced values. |

```javascript
var template = 'Hi my name is {{name}}.';
u.parse(template, {name: 'Steve'}) // Hi my name is Steve.

// nested values work too
var template = 'Hi my name is {{person.firstName}}.';
u.parse(template, {persion: {firstName: 'Steve'}}) // Hi my name is Steve.
```

### u.defer()
A single "defer()" function that returns an object that is both a deferred and a thenable promise.  
Taken from https://gist.github.com/kirbysayshi/1129049

Returns the promise object.

| Parameter | Type | Description |
|---|---|---|
| callbacks | function | **Optional**. Callback function. Acts as placeholder for all callbacks. |
| value | * | **Optional**. Placeholder for the values passed to the callbacks. |

#### u.defer() - promise object
The promise object has 2 functions, `.then()` and `.resolve()`.

##### .then(callback)
Add a callback for when the promise is resolved.

| Parameter | Type | Description |
|---|---|---|
| callback | function | Callback function. |

##### .resolve(values, ...)
Resolve the promise and pass arguments for the callback.


```javascript
var x = u.defer();
x.then(function() {
	console.log(arguments);
});
setTimeout(function() {
	x.resolve({key: 'value'}, 'string', [1,2,3,4]);
}, 2000);
```


### AJAX functions
#### u.get(options), u.post(options), u.put(options), u.patch(options), u.options(options), u.delete(options)
u.js AJAX functions all work pretty much the same. You call the function and pass the options object. All options work the same on all those functions, except for the get function, which ignores the json flag.

**options**

| Option | Type | Description |
|---|---|---|
| sync | boolean | **Optional**. Sync or Async. **Default true**. |
| json | boolean | **Optional**. Send as JSON or form encoded. **Default true**. |
| auth | string | **Optional**. String passed in the Authorization HTTP header. **Default null** |
| headers | object | **Optional**. Object containing additional HTTP headers. |
| success | function(data, status) | Success handler function. |
| error | function(data, status) | Error handler function. |
| up | function(total, loaded) | Upload progress handler function. |
| down | function(total, loaded) | Download progress handler function. |
| data | object | The data object to send with the request. |
| url | string | The url for the request. |

```javascript
u.post({
	sync: true,
	json: true,
	auth: 'Bearer token',
	headers: {
		'X-Requested-With': 'XMLHttpRequest',
		'a-custom-hader': 'with a custom value'
	},
	success: function(data, status) {
		// do something
	},
	error: function(data, status) {
		// do something
	},
	up: function(total, loaded) {
		// do something
	},
	down: function(total, loaded) {
		// do something
	},
	data: {
		key: value
	},
	url: 'http://example.com'
})
```

#### u.getScript(url, callback)
Load a script into global scope.

| Parameter | Type | Description |
|---|---|---|
| url | function | The url of the script to load. |
| callback | function(**event**) | **Optional**. Callback function for the onload event. |

```javascript
// i.e. load Google Maps script when needed
u.getScript('https://www.google.com/jsapi', function() {
	google.load('maps', '3.9', { other_params: 'sensor=false', callback: function() {
		// google maps setup
	}});
});
```

---

