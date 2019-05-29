(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{364:function(t,s,n){"use strict";n.r(s);var a=n(0),r=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"property"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#property","aria-hidden":"true"}},[t._v("#")]),t._v(" Property "),n("Badge",{attrs:{text:"Decorator",type:"decorator"}})],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)])},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("section",{staticClass:"symbol-info"},[n("table",{staticClass:"is-full-width"},[n("tbody",[n("tr",[n("th",[t._v("Module")]),n("td",[n("div",{staticClass:"lang-typescript"},[n("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { Property } "),n("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),n("span",{staticClass:"token string"},[t._v('"@tsed/common"')])])])]),n("tr",[n("th",[t._v("Source")]),n("td",[n("a",{attrs:{href:"https://github.com/TypedProject/ts-express-decorators/blob/v5.18.1/packages/common/src/jsonschema/decorators/jsonProperty.ts#L0-L0"}},[t._v("/packages/common/src/jsonschema/decorators/jsonProperty.ts")])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",[n("code",{staticClass:"typescript-lang "},[t._v("function "),n("span",{staticClass:"token function"},[t._v("Property")]),n("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("options?"),n("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),n("a",{attrs:{href:"/api/common/converters/interfaces/IPropertyOptions.html"}},[n("span",{staticClass:"token"},[t._v("IPropertyOptions")])]),t._v(" | "),n("span",{staticClass:"token keyword"},[t._v("string")]),n("span",{staticClass:"token punctuation"},[t._v(")")]),n("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" Function"),n("span",{staticClass:"token punctuation"},[t._v(";")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description","aria-hidden":"true"}},[this._v("#")]),this._v(" Description")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{pre:!0},[n("p",[n("code",[t._v("@Property()")]),t._v(" let you decorate an attribute that can be serialized or deserialized. By default, no parameters are required to use it.\nBut in some cases, we need to configure explicitly the JSON attribute name mapped to the provide attribute.")]),t._v(" "),n("p",[t._v("Here an example of different use cases with "),n("code",[t._v("@Property()")]),t._v(":")]),t._v(" "),n("div",{pre:!0,attrs:{class:"language-typescript line-numbers-mode"}},[n("pre",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventModel")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n   @"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Property")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   @"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Property")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   @"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Format")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'date-time'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   startDate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Date"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   @"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Property")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'end-date'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   @"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Format")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'date-time'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   endDate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Date"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   @"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("PropertyType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Task"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// eq. @Property({use: Task})")]),t._v("\n   tasks"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TaskModel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TaskModel")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    @"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Property")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    subject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    @"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Minimum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Property or JsonProperty is not required when a JsonSchema decorator is used")]),t._v("\n    @"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Maximum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    rate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Theses "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ES6")]),t._v(" collections can be used"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Map and Set"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Map will be serialized "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" an object and Set "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" an array"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nBy "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" Date"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Map and Set have a "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" custom Converter already embed"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" But you can override "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("theses")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("see next part"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\nFor the "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" you must use the "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token string"}},[t._v("`@PropertyType`")])]),t._v(" decorator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token string"}},[t._v("`TypeClass`")])]),t._v(" will be used to deserialize each item "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" the collection stored on the attribute source"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\nAccording to the previous example"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" the JsonSchema generated will be "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" follow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token string"}},[t._v("``")])]),t._v("`typescript\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"object"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"properties"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"startDate"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"format"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"date-time"')]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"endDate"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"format"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"date-time"')]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tasks"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"array"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"items"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$ref"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#/definitions/Task"')]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"definitions"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Task"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"object"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"properties"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"subject"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rate"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"number"')]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"minimum"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v('\n            "maximum'),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{pre:!0,attrs:{class:"line-numbers-wrapper"}},[n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("1")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("2")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("3")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("4")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("5")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("6")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("7")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("8")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("9")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("10")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("11")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("12")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("13")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("14")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("15")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("16")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("17")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("18")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("19")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("20")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("21")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("22")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("23")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("24")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("25")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("26")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("27")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("28")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("29")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("30")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("31")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("32")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("33")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("34")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("35")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("36")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("37")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("38")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("39")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("40")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("41")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("42")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("43")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("44")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("45")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("46")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("47")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("48")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("49")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("50")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("51")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("52")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("53")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("54")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("55")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("56")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("57")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("58")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("59")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("60")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("61")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("62")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("63")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("64")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("65")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("66")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("67")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("68")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("69")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("70")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("71")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[t._v("72")]),n("br")])]),n("p",[t._v("@returns {Function}\n@param options\n@decorator\n@converters\n@jsonschema\n@property")])])}],!1,null,null,null);s.default=r.exports}}]);