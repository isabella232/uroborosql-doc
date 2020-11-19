(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{215:function(t,n,a){"use strict";a.r(n);var s=a(3),e=Object(s.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"connectionsupplier"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connectionsupplier"}},[t._v("#")]),t._v(" ConnectionSupplier")]),t._v(" "),a("p",[t._v("DB接続を行う際のコネクションを提供するクラスです。\n標準で以下のクラスが提供されているので用途に応じて使い分けてください。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("クラス名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("説明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("DefaultConnectionSupplierImpl")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("コンストラクタで受け取ったコネクションを返すだけのコネクション供給クラス")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("JdbcConnectionSupplierImpl")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("JDBCドライバーマネージャを使用したコネクション提供クラス")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("DataSourceConnectionSupplierImpl")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("データソースを使用したコネクション提供クラス")])])])]),t._v(" "),a("p",[t._v("また、"),a("a",{attrs:{href:"https://github.com/future-architect/uroborosql/blob/master/src/main/java/jp/co/future/uroborosql/connection/ConnectionSupplier.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("ConnectionSupplier"),a("OutboundLink")],1),t._v("インタフェースを実装した独自のJDBCコネクション提供クラスを利用することもできます。")]),t._v(" "),a("h2",{attrs:{id:"connectioncontext"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connectioncontext"}},[t._v("#")]),t._v(" ConnectionContext "),a("Badge",{attrs:{text:"0.19.0+"}})],1),t._v(" "),a("p",[t._v("動的に"),a("code",[t._v("SqlAgent")]),t._v("の接続先を切り替える場合は、"),a("code",[t._v("SqlConfig#agent(ConnectionContext)")]),t._v("メソッドを使用します。")]),t._v(" "),a("p",[a("code",[t._v("ConnectionContext")]),t._v("は、"),a("code",[t._v("ConnectionContextBuilder")]),t._v("の下記メソッドを利用して、インスタンスを生成します。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("戻り値")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("メソッド名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("説明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("DataSourceConnectionContext")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("dataSource()")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("DataSourceConnectionContext を生成する.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("DataSourceConnectionContext")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("dataSource(String dataSourceName)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("DataSourceConnectionContext を生成する.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("JdbcConnectionContext")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("jdbc(String url)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("JdbcConnectionContext を生成する.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("JdbcConnectionContext")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("jdbc(String url, String user, String password)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("JdbcConnectionContext を生成する.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("JdbcConnectionContext")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("jdbc(String url, String user, String password, String schema)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("JdbcConnectionContext を生成する.")])])])]),t._v(" "),a("h3",{attrs:{id:"実装例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#実装例"}},[t._v("#")]),t._v(" 実装例")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SqlConfig")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UroboroSQL")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("builder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setConnectionSupplier")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JdbcConnectionSupplier")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jdbc:h2:mem:mainConnection"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sa"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sa"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SqlAgent")]),t._v(" agent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("agent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// using jdbc:h2:mem:mainConnection")]),t._v("\n  agent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("required")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//-------------------------------------------------------")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SqlAgent")]),t._v(" agent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("agent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConnectionContextBuilder")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("jdbc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jdbc:h2:mem:subConnection"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sa"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sa"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// usingjdbc:h2:mem:subConnection")]),t._v("\n  agent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("required")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);