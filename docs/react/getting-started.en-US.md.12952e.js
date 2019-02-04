(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{1621:function(n,t){n.exports={content:["article",{},["h2","First Example"],["p","There is the simplest example to show usage of Ant Design React."],["iframe",{src:"https://codesandbox.io/embed/wk04r016q8?fontsize=14",style:"width: 100%; height: 500px; border: 0px; border-radius: 4px; overflow: hidden;",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}],["h3","1. Create one codesandbox"],["p","Visit ",["a",{title:null,href:"http://u.ant.design/codesandbox-repro"},"http://u.ant.design/codesandbox-repro"]," to create a codesandbox, don't forget to press save button."],["h3","2. Using antd component"],["p","Replace the content of ",["code","index.js"]," with the following code.\nAs you can see, there is no difference between antd's components and usual React components."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">"react-dom"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker<span class="token punctuation">,</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"antd"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">"antd/dist/antd.css"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">"./index.css"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    date<span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  handleChange <span class="token operator">=</span> date <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`Selected Date: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>date <span class="token operator">?</span> date<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"YYYY-MM-DD"</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token string">"None"</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> date <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> date <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token number">400</span><span class="token punctuation">,</span> margin<span class="token punctuation">:</span> <span class="token string">"100px auto"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatePicker</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          Selected Date<span class="token punctuation">:</span> <span class="token punctuation">{</span>date <span class="token operator">?</span> date<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"YYYY-MM-DD"</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token string">"None"</span><span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code",'import React from "react";\nimport ReactDOM from "react-dom";\nimport { DatePicker, message } from "antd";\nimport "antd/dist/antd.css";\nimport "./index.css";\n\nclass App extends React.Component {\n  state = {\n    date: null,\n  };\n\n  handleChange = date => {\n    message.info(`Selected Date: ${date ? date.format("YYYY-MM-DD") : "None"}`);\n    this.setState({ date });\n  };\n\n  render() {\n    const { date } = this.state;\n    return (\n      <div style={{ width: 400, margin: "100px auto" }}>\n        <DatePicker onChange={this.handleChange} />\n        <div style={{ marginTop: 20 }}>\n          Selected Date: {date ? date.format("YYYY-MM-DD") : "None"}\n        </div>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<App />, document.getElementById("root"));']],["h3","3. Explore in more components"],["p","You can look up compnents in side menu, find one like ",["a",{title:null,href:"/components/alert"},"Alert"],". Plenty of examples are provided in component page,\nAPI documentation too."],["p","Click the corner icon at first example, there are source codes to use out of box. Now you are try import ",["code","Alert"]," in previous codesandbox:"],["pre",{lang:"diff",highlighted:"<span class=\"token deleted\">- import { DatePicker, message } from 'antd';</span>\n<span class=\"token inserted\">+ import { DatePicker, message, Alert } from 'antd';</span>"},["code","- import { DatePicker, message } from 'antd';\n+ import { DatePicker, message, Alert } from 'antd';"]],["p","Add jsx part in ",["code","render"]," function."],["pre",{lang:"diff",highlighted:"  &lt;DatePicker onChange={value => this.handleChange(value)} />\n  &lt;div style={{ marginTop: 20 }}>\n<span class=\"token deleted\">-   Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}</span>\n<span class=\"token inserted\">+   &lt;Alert message={`Selected Date: ${date ? date.format('YYYY-MM-DD') : 'None'}`} type=\"success\" /></span>\n  &lt;/div>"},["code","  <DatePicker onChange={value => this.handleChange(value)} />\n  <div style={{ marginTop: 20 }}>\n-   Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}\n+   <Alert message={`Selected Date: ${date ? date.format('YYYY-MM-DD') : 'None'}`} type=\"success\" />\n  </div>"]],["p","Then you can see the result at preview section."],["p",["img",{width:"420",src:"https://gw.alipayobjects.com/zos/antfincdn/QjCr7oLcpT/c7ce72d2-601e-4130-a33b-456d4652bb2d.png",alt:"codesandbox screenshot"}]],["p","OK! Now you know how to use antd components in a clear way, welcome to explore more usages in this codesandbox.\nWe also strongly recommend to use codesandbox to provide a reproducible demo while reporting a bug."],["h3","4. Next Step"],["p","In real world you gonna need a whole package of ",["code","compile/build/deploy/lint/debug"]," development workflow\nwhich you can read ariticles afterwards or try other scaffolds provided below:"],["ul",["li",["p",["a",{title:null,href:"http://pro.ant.design/"},"Ant Design Pro"]]],["li",["p",["a",{title:null,href:"https://github.com/zuiidea/antd-admin"},"antd-admin"]]],["li",["p",["a",{title:null,href:"https://github.com/d2-projects/d2-admin"},"d2-admin"]]],["li",["p","more scaffolds at ",["a",{title:null,href:"http://scaffold.ant.design/"},"Scaffold Market"]]]],["h2","Compatibility"],["p","Ant Design React supports all the modern browsers and IE9+."],["table",["thead",["tr",["th",["a",{title:null,href:"http://godban.github.io/browsers-support-badges/"},["img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png",alt:"IE / Edge",width:"24px",height:"24px"}]],["br"],"IE / Edge"],["th",["a",{title:null,href:"http://godban.github.io/browsers-support-badges/"},["img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png",alt:"Firefox",width:"24px",height:"24px"}]],["br"],"Firefox"],["th",["a",{title:null,href:"http://godban.github.io/browsers-support-badges/"},["img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png",alt:"Chrome",width:"24px",height:"24px"}]],["br"],"Chrome"],["th",["a",{title:null,href:"http://godban.github.io/browsers-support-badges/"},["img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png",alt:"Safari",width:"24px",height:"24px"}]],["br"],"Safari"],["th",["a",{title:null,href:"http://godban.github.io/browsers-support-badges/"},["img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png",alt:"Opera",width:"24px",height:"24px"}]],["br"],"Opera"],["th",["a",{title:null,href:"http://godban.github.io/browsers-support-badges/"},["img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png",alt:"Electron",width:"24px",height:"24px"}]],["br"],"Electron"]]],["tbody",["tr",["td","IE9, IE10, IE11, Edge"],["td","last 2 versions"],["td","last 2 versions"],["td","last 2 versions"],["td","last 2 versions"],["td","last 2 versions"]]]],["p","We offset very limit support for IE9/10, some styles and animation would be mininal under them, also we are using Flex layout in few components."],["blockquote",["p","Note, different with Ant Design, Ant Design Pro support to IE11+."]],["p","Polyfills are needed for IE browsers, we recommend ",["a",{title:null,href:"https://babeljs.io/docs/en/babel-preset-env"},"babel-preset-env"]," for it. You can set ",["code","targets"]," config if you are using ",["a",{title:null,href:"http://umijs.org/"},"umi"],"."],["p","Ant Design 3.0 support both React 15 and 16 now though, we strongly suggest React 16 for better performance and few bugs."],["h4","IE8 note"],["blockquote",["p","We don't support IE8 after ",["code","antd@2.0"],"."]],["h2","Customized Work Flow"],["p","If you want to customize your work flow, we recommend using ",["a",{title:null,href:"http://webpack.github.io/"},"webpack"]," to build and debug code."],["p","Also, you can use any ",["a",{title:null,href:"https://github.com/enaqx/awesome-react#boilerplates"},"scaffold"]," available in the React ecosystem. If you encounter problems, you can use our ",["a",{title:null,href:"https://github.com/ant-tool/atool-build/blob/master/src/getWebpackCommonConfig.js"},"webpack config"]," and ",["a",{title:null,href:"http://ant-tool.github.io/webpack-config.html"},"modify it"],"."],["p","If you are trying ",["a",{title:null,href:"https://parceljs.org"},"parcel"],", here is ",["a",{title:null,href:"https://github.com/ant-design/parcel-antd"},"a demo repository"],"."],["p","There are some ",["a",{title:null,href:"http://scaffold.ant.design/"},"scaffolds"]," which have already integrated antd, so you can try and start with one of these, and even contribute."],["h2","Import on Demand"],["p","If you see logs like below screenshot, you might be importing all components by writing ",["code","import { Button } from 'antd';"],". This will affect your app's network performance."],["pre",{lang:null,highlighted:'You are using a whole package of antd<span class="token punctuation">,</span> please use https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>npmjs<span class="token punctuation">.</span>com<span class="token operator">/</span>package<span class="token operator">/</span>babel<span class="token operator">-</span>plugin<span class="token operator">-</span>import <span class="token keyword">to</span> reduce app bundle size<span class="token punctuation">.</span>'},["code","You are using a whole package of antd, please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size."]],["blockquote",["p",["img",{title:null,src:"https://zos.alipayobjects.com/rmsportal/GHIRszVcmjccgZRakJDQ.png",alt:"console warning"}]]],["p","However, we can import individual components on demand:"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">\'antd/lib/button\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'antd/lib/button/style\'</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// or antd/lib/button/style/css for css format file</span>'},["code","import Button from 'antd/lib/button';\nimport 'antd/lib/button/style'; // or antd/lib/button/style/css for css format file"]],["blockquote",["p",["code","antd/es/button"]," to import es version module for tree shaking."]],["p","We strongly recommend using ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"],", which can convert the following code to the 'antd/lib/xxx' way:"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>'},["code","import { Button } from 'antd';"]],["p","And this plugin can load styles too, read ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import#usage"},"usage"]," for more details."],["blockquote",["p","FYI, babel-plugin-import's ",["code","style"]," option will importing some global reset styles, don't use it if you don't need those styles. You can import styles manually via ",["code","import 'antd/dist/antd.css'"]," and override the global reset styles."]],["h2","Customization"],["ul",["li",["p",["a",{title:null,href:"/docs/react/customize-theme"},"Customize Theme"]]],["li",["p",["a",{title:null,href:"https://github.com/ant-design/antd-init/tree/master/examples/local-iconfont"},"Local Iconfont"]]]]],meta:{order:1,title:"Getting Started",filename:"docs/react/getting-started.en-US.md"},description:["section",["p","Ant Design React is dedicated to providing a ",["strong","good development experience"]," for programmers. Make sure that you had installed ",["a",{title:null,href:"https://nodejs.org/"},"Node.js"],"(> 8.0.0) correctly."],["blockquote",["p","Before delving into Ant Design React, a good knowledge base of ",["a",{title:null,href:"https://reactjs.org"},"React"]," and ",["a",{title:null,href:"http://babeljs.io/docs/learn-es2015/"},"JavaScript ES2015"]," is needed."]]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#First-Example",title:"First Example"},"First Example"]],["li",["a",{className:"bisheng-toc-h2",href:"#Compatibility",title:"Compatibility"},"Compatibility"]],["li",["a",{className:"bisheng-toc-h2",href:"#Customized-Work-Flow",title:"Customized Work Flow"},"Customized Work Flow"]],["li",["a",{className:"bisheng-toc-h2",href:"#Import-on-Demand",title:"Import on Demand"},"Import on Demand"]],["li",["a",{className:"bisheng-toc-h2",href:"#Customization",title:"Customization"},"Customization"]]]}}}]);