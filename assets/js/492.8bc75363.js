(window.webpackJsonp=window.webpackJsonp||[]).push([[492],{731:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"socketmiddleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#socketmiddleware","aria-hidden":"true"}},[t._v("#")]),t._v(" SocketMiddleware "),a("Badge",{attrs:{text:"Decorator",type:"decorator"}})],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)])},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"symbol-info"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[t._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { SocketMiddleware } "),a("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"token string"},[t._v('"@tsed/socketio"')])])])]),a("tr",[a("th",[t._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/TypedProject/ts-express-decorators/blob/v5.18.1/packages/socketio/src/decorators/socketMiddleware.ts#L0-L0"}},[t._v("/packages/socketio/src/decorators/socketMiddleware.ts")])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",[s("code",{staticClass:"typescript-lang "},[this._v("function "),s("span",{staticClass:"token function"},[this._v("SocketMiddleware")]),s("span",{staticClass:"token punctuation"},[this._v("(")]),s("span",{staticClass:"token punctuation"},[this._v(")")]),s("span",{staticClass:"token punctuation"},[this._v(":")]),this._v(" Function"),s("span",{staticClass:"token punctuation"},[this._v(";")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description","aria-hidden":"true"}},[this._v("#")]),this._v(" Description")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{pre:!0},[a("p",[t._v("Declare a new SocketMiddleware.")]),t._v(" "),a("h3",{pre:!0,attrs:{id:"example"}},[a("a",{pre:!0,attrs:{class:"header-anchor",href:"#example","aria-hidden":"true"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("p",[t._v("A middleware can be also used on a "),a("code",[t._v("SocketService")]),t._v(" either on a class or on a method.")]),t._v(" "),a("p",[t._v("Here an example of a middleware:")]),t._v(" "),a("div",{pre:!0,attrs:{class:"language-typescript line-numbers-mode"}},[a("pre",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[a("code",[t._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SocketMiddleware")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserConverterSocketMiddleware")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" converterService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ConverterService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// update Arguments")]),t._v("\n        user "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("converterService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("deserialize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" User"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{pre:!0,attrs:{class:"line-numbers-wrapper"}},[a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("1")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("2")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("3")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("4")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("5")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("6")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("7")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("8")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("9")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("10")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("11")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("12")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("13")]),a("br")])]),a("blockquote",[a("p",[t._v("The user instance will be forwarded to the next middleware and to your decorated method.")])]),t._v(" "),a("p",[t._v("Then:")]),t._v(" "),a("div",{pre:!0,attrs:{class:"language-typescript line-numbers-mode"}},[a("pre",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SocketService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SocketUseAfter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SocketUseBefore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Emit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@tsed/socketio"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("UserConverterSocketMiddleware"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../middlewares"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("User"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../models/User"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SocketService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/my-namespace"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SocketUseBefore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UserConverterSocketMiddleware"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// global version")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MySocketService")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n   @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Input")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eventName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Emit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"responseEventName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or Broadcast or BroadcastOthers")]),t._v("\n   @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SocketUseBefore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UserConverterSocketMiddleware"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("myMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" User"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n       "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{pre:!0,attrs:{class:"line-numbers-wrapper"}},[a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("1")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("2")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("3")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("4")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("5")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("6")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("7")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("8")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("9")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("10")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("11")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("12")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("13")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("14")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("15")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("16")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("17")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("18")]),a("br")])])])}],!1,null,null,null);s.default=n.exports}}]);