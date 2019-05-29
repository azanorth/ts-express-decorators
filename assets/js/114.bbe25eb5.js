(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{353:function(s,t,n){"use strict";n.r(t);var a=n(0),r=Object(a.a)({},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"jsonproperty"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jsonproperty","aria-hidden":"true"}},[s._v("#")]),s._v(" JsonProperty "),n("Badge",{attrs:{text:"Decorator",type:"decorator"}})],1),s._v(" "),s._m(0),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),s._m(4)])},[function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("section",{staticClass:"symbol-info"},[n("table",{staticClass:"is-full-width"},[n("tbody",[n("tr",[n("th",[s._v("Module")]),n("td",[n("div",{staticClass:"lang-typescript"},[n("span",{staticClass:"token keyword"},[s._v("import")]),s._v(" { JsonProperty } "),n("span",{staticClass:"token keyword"},[s._v("from")]),s._v(" "),n("span",{staticClass:"token string"},[s._v('"@tsed/common"')])])])]),n("tr",[n("th",[s._v("Source")]),n("td",[n("a",{attrs:{href:"https://github.com/TypedProject/ts-express-decorators/blob/v5.18.1/packages/common/src/jsonschema/decorators/jsonProperty.ts#L0-L0"}},[s._v("/packages/common/src/jsonschema/decorators/jsonProperty.ts")])])])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("pre",[n("code",{staticClass:"typescript-lang "},[s._v("function "),n("span",{staticClass:"token function"},[s._v("JsonProperty")]),n("span",{staticClass:"token punctuation"},[s._v("(")]),s._v("options?"),n("span",{staticClass:"token punctuation"},[s._v(":")]),s._v(" "),n("a",{attrs:{href:"/api/common/converters/interfaces/IPropertyOptions.html"}},[n("span",{staticClass:"token"},[s._v("IPropertyOptions")])]),s._v(" | "),n("span",{staticClass:"token keyword"},[s._v("string")]),n("span",{staticClass:"token punctuation"},[s._v(")")]),n("span",{staticClass:"token punctuation"},[s._v(":")]),s._v(" Function"),n("span",{staticClass:"token punctuation"},[s._v(";")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description","aria-hidden":"true"}},[this._v("#")]),this._v(" Description")])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{pre:!0},[n("p",[n("code",[s._v("@JsonProperty()")]),s._v(" let you decorate an attribute that can be serialized or deserialized. By default, no parameters are required to use it.\nBut in some cases, we need to configure explicitly the JSON attribute name mapped to the provide attribute.")]),s._v(" "),n("p",[s._v("Here an example of different use cases with "),n("code",[s._v("@JsonProperty()")]),s._v(":")]),s._v(" "),n("div",{pre:!0,attrs:{class:"language-typescript line-numbers-mode"}},[n("pre",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("EventModel")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n   @"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("JsonProperty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n   @"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("JsonProperty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   @"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Format")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'date-time'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   startDate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Date"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n   @"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("JsonProperty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'end-date'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// alias nam doesn't work with JsonSchema")]),s._v("\n   @"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Format")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'date-time'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   endDate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Date"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n   @"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("PropertyType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Task"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// eq. @Property({use: Task})")]),s._v("\n   tasks"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" TaskModel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TaskModel")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    @"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Property")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    subject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    @"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Minimum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Property or JsonProperty is not required when a JsonSchema decorator is used")]),s._v("\n    @"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Maximum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    rate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Theses "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ES6")]),s._v(" collections can be used"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Map and Set"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" Map will be serialized "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" an object and Set "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" an array"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nBy "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" Date"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Map and Set have a "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" custom Converter already embed"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" But you can override "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("theses")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("see next part"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\nFor the "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" you must use the "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token string"}},[s._v("`@PropertyType`")])]),s._v(" decorator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token string"}},[s._v("`TypeClass`")])]),s._v(" will be used to deserialize each item "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" the collection stored on the attribute source"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\nAccording to the previous example"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" the JsonSchema generated will be "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" follow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token string"}},[s._v("``")])]),s._v("`typescript\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"object"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"properties"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"string"')]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"startDate"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"string"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"format"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"date-time"')]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"endDate"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"string"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"format"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"date-time"')]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tasks"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"array"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"items"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$ref"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#/definitions/Task"')]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"definitions"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Task"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"object"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"properties"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"subject"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"string"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rate"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"number"')]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"minimum"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v('\n            "maximum'),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n       "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{pre:!0,attrs:{class:"line-numbers-wrapper"}},[n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("1")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("2")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("3")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("4")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("5")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("6")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("7")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("8")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("9")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("10")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("11")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("12")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("13")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("14")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("15")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("16")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("17")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("18")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("19")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("20")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("21")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("22")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("23")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("24")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("25")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("26")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("27")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("28")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("29")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("30")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("31")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("32")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("33")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("34")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("35")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("36")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("37")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("38")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("39")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("40")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("41")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("42")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("43")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("44")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("45")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("46")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("47")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("48")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("49")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("50")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("51")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("52")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("53")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("54")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("55")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("56")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("57")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("58")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("59")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("60")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("61")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("62")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("63")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("64")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("65")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("66")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("67")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("68")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("69")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("70")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("71")]),n("br"),n("span",{pre:!0,attrs:{class:"line-number"}},[s._v("72")]),n("br")])]),n("p",[s._v("@returns {Function}\n@decorator\n@param options\n@decorator\n@converters\n@jsonschema\n@property")])])}],!1,null,null,null);t.default=r.exports}}]);