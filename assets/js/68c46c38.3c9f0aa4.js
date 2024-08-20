"use strict";(self.webpackChunkserenity_users_guide=self.webpackChunkserenity_users_guide||[]).push([[8388],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7878:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={id:"reports_custom_info",title:"Custom Fields in Reports",sidebar_position:5},s=void 0,a={unversionedId:"reporting/reports_custom_info",id:"reporting/reports_custom_info",isDocsHomePage:!1,title:"Custom Fields in Reports",description:"Custom Field Reporting",source:"@site/docs/reporting/reports-custom-info.md",sourceDirName:"reporting",slug:"/reporting/reports_custom_info",permalink:"/docs/reporting/reports_custom_info",editUrl:"https://github.com/serenity-bdd/serenity-bdd.github.io/blob/master/docs/reporting/reports-custom-info.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"reports_custom_info",title:"Custom Fields in Reports",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Integrating with JIRA",permalink:"/docs/reporting/integrating_with_jira"},next:{title:"Selenium Grid",permalink:"/docs/cloud/selenium-grid"}},l=[{value:"Custom Field Reporting",id:"custom-field-reporting",children:[{value:"Accessing system variables",id:"accessing-system-variables",children:[]},{value:"Overriding property values",id:"overriding-property-values",children:[]},{value:"Ordering the custom properties",id:"ordering-the-custom-properties",children:[]},{value:"A complete example",id:"a-complete-example",children:[]}]},{value:"Custom Build Info",id:"custom-build-info",children:[]},{value:"Defining build info programmatically",id:"defining-build-info-programmatically",children:[]}],p={toc:l};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"custom-field-reporting"},"Custom Field Reporting"),(0,o.kt)("p",null,"Custom fields can be included in the reports, using values that are either taken from the environment variables or passed into the build via system properties. This can be useful if you want to include the product or build version, the environment the tests were run on, or the test run date."),(0,o.kt)("p",null,"You can add custom fields to your report by setting system properties with the special prefix ",(0,o.kt)("inlineCode",{parentName:"p"},"report.customfields"),". These can go in your ",(0,o.kt)("inlineCode",{parentName:"p"},"serenity.properties")," file in the root directory of your project, or you can pass them in as command-line options."),(0,o.kt)("p",null,"For example, you could add the following properties to your ",(0,o.kt)("inlineCode",{parentName:"p"},"serenity.properties")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"report.customfields.environment = Integration\nreport.customfields.ApplicationVersion = 1.2.3\n")),(0,o.kt)("p",null,"This would produce a report containing these values, as shown here:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Custom fields appearing in the HTML summary report",src:n(8778).Z})),(0,o.kt)("h3",{id:"accessing-system-variables"},"Accessing system variables"),(0,o.kt)("p",null,"We can also access any system variables that Java has access to. For example, we could include the name of the user who ran the test run with the ",(0,o.kt)("inlineCode",{parentName:"p"},"${USER}")," system variable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"report.customfields.user = ${USER}\n")),(0,o.kt)("p",null,"This property would result in a report like the following:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Custom fields can also include system variables",src:n(4151).Z})),(0,o.kt)("p",null,"Not all system properties are available to Java. For example, on Linux systems, the ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOST")," variable gives the name of the local machine. We could include this in our report by adding the following property:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"report.customfields.host = ${HOST}\n")),(0,o.kt)("p",null,"However, since this variable is not available to Java, we would need to pass it to Serenity from the command line, like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mvn serenity:aggregate -DHOST=$HOST\n")),(0,o.kt)("h3",{id:"overriding-property-values"},"Overriding property values"),(0,o.kt)("p",null,"[","[custom-report-fields-with-provided-values]","]\n.You can pass system properties from the command line\nimage::custom-reports-with-provided-property.png[]"),(0,o.kt)("p",null,"You can of course pass in other properties, to override the ones in your ",(0,o.kt)("inlineCode",{parentName:"p"},"serenity.properties")," file. Here we override the application version:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mvn serenity:aggregate -DHOST=$HOST -Dreport.customfields.ApplicationVersion=1.2.4\n")),(0,o.kt)("p",null,"But a more elegant solution, if you know you will always be passing in a variable, is to use a shorter variable in your ",(0,o.kt)("inlineCode",{parentName:"p"},"serenity.properties")," file and then pass this one in. For example, here we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"environment")," property to display the current environment in the custom properties:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"report.customfields.environment = ${environment}\n")),(0,o.kt)("p",null,"We can set this value from the command line as shown here:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mvn serenity:aggregate -DHOST=$HOST -Denvironment=INT5\n")),(0,o.kt)("h4",{id:"using-default-values"},"Using default values"),(0,o.kt)("p",null,"If an environment variable doesn't exist, you can have specify a fallback value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'report.customfields.user = ${USER:-Unknown}\nreport.customfields.host = ${HOST:-} # Blank instead of the literal characters "${HOST}"\n')),(0,o.kt)("p",null,"The mechanism behind the substitution: ",(0,o.kt)("a",{parentName:"p",href:"https://commons.apache.org/proper/commons-text/apidocs/org/apache/commons/text/StringSubstitutor.html"},"Apache Commons ",(0,o.kt)("inlineCode",{parentName:"a"},"StringSubstitutor"))),(0,o.kt)("h3",{id:"ordering-the-custom-properties"},"Ordering the custom properties"),(0,o.kt)("p",null,"By default, the fields will appear in an arbitrary order. You can force the fields to appear in a pre-determined order using the ",(0,o.kt)("inlineCode",{parentName:"p"},"report.customfields.order")," field:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"report.customfields.order=ApplicationVersion,environment,user,host\n")),(0,o.kt)("h3",{id:"a-complete-example"},"A complete example"),(0,o.kt)("p",null,"A complete example of these properties and their various usages is shown here:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"report.customfields.ApplicationVersion = 1.2.3\nreport.customfields.environment = ${environment}\nreport.customfields.user = ${USER}\nreport.customfields.host = ${HOST}\nreport.customfields.order=ApplicationVersion,environment,user,host\n")),(0,o.kt)("h2",{id:"custom-build-info"},"Custom Build Info"),(0,o.kt)("p",null,"You can also add your own fields the the Build Info screen, using the ",(0,o.kt)("inlineCode",{parentName:"p"},"sysinfo.*")," properties.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"sysinfo.*")," properties let you define fields and values that will appear in the Build Info page. For simple field-value combinations, the field appears alongside the other values on the Build Info screen:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sysinfo.lead = Daisy\n")),(0,o.kt)("p",null,"You can use Groovy expressions to access system properties (that you can pass in from the command line). The ",(0,o.kt)("inlineCode",{parentName:"p"},"env")," property gives you access to the current environment variables. For example, to display the current Jenkins build number, you could include the following line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'sysinfo.build = "${env.BUILD_NUMBER}"\n')),(0,o.kt)("p",null,"You can also group custom properties into sections with sub-titles. An example of such a configuration in the ",(0,o.kt)("inlineCode",{parentName:"p"},"serenity.conf")," file is shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'sysinfo {\n  lead = Daisy\n  build = "${env.BUILD_NUMBER}"\n  Test Run {\n    Run By = "${env.USER}"\n    Java Version = "${java.version}"\n  }\n}\n')),(0,o.kt)("p",null,"The corresponding Build Info screen is shown below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Customised Build Info details",src:n(1550).Z})),(0,o.kt)("h2",{id:"defining-build-info-programmatically"},"Defining build info programmatically"),(0,o.kt)("p",null,"You can also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"BuildInfo")," class to add information to the Build Info page programmatically. Simply define the section, and add as many property name/value pairs as you want. You can see an example here:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'BuildInfo.section("Toggles").setProperty("toggle-custom-ads-v2", "on");\nBuildInfo.section("Toggles").setProperty("toggle-user-feedback", "on");\n\nBuildInfo.section("Versions").setProperty("game-history-service", "1.2.3");\nBuildInfo.section("Versions").setProperty("player-service", "3.4.5");\nBuildInfo.section("Versions").setProperty("related-products-service", "2.3.4");\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Customised Build Info details",src:n(7545).Z})))}u.isMDXComponent=!0},1550:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/build-info-2daa81eba4d528597f5c7d24e9988ab5.png"},7545:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/custom-build-info-5d970b8f7d9acdd7a50df855ef7096f5.png"},8778:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/custom-report-fields-52b92f696936c0519f9e76fb62abafcf.png"},4151:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/custom-reports-including-a-system-variable-f80f91af608be8de5ca006821f66676e.png"}}]);