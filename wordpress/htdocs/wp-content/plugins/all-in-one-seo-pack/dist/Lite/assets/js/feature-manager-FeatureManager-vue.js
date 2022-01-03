(window["aioseopjsonp"]=window["aioseopjsonp"]||[]).push([["feature-manager-FeatureManager-vue"],{"00d0":function(e,t,s){"use strict";var i=s("a467"),a=s.n(i);a.a},"11e8":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"aioseo-feature-manager"},[i("div",{staticClass:"aioseo-feature-manager-header"},[i("div",{staticClass:"buttons"},[e.$isPro&&e.$aioseo.license.isActive?i("div",{staticClass:"button-content"},[i("base-button",{attrs:{size:"medium",type:"blue",loading:e.loading.activateAll},on:{click:e.activateAllFeatures}},[e._v(e._s(e.strings.activateAllFeatures))]),i("base-button",{attrs:{size:"medium",type:"gray",loading:e.loading.deactivateAll},on:{click:e.deactivateAllFeatures}},[e._v(e._s(e.strings.deactivateAllFeatures))])],1):e._e()]),i("div",{staticClass:"search"},[i("base-input",{attrs:{size:"medium",placeholder:e.strings.searchForFeatures,"prepend-icon":"search"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)]),i("div",{staticClass:"aioseo-feature-manager-addons"},[e.$isPro&&!e.$aioseo.license.isActive?i("core-alert",{attrs:{type:"red"}},[i("strong",[e._v(e._s(e.yourLicenseIsText))]),e._v(" "+e._s(e.strings.aValidLicenseIsRequired)+" "),i("div",{staticClass:"buttons"},[i("base-button",{attrs:{type:"blue",size:"small",tag:"a",href:e.$aioseo.urls.aio.settings}},[e._v(" "+e._s(e.strings.enterLicenseKey)+" ")]),i("base-button",{attrs:{type:"green",size:"small",tag:"a",target:"_blank",href:e.$links.getUpsellUrl("feature-manager-upgrade","no-license-key","pricing")}},[e._v(" "+e._s(e.strings.purchaseLicense)+" ")])],1)]):e._e(),i("grid-row",e._l(e.getAddons,(function(t,s){return i("grid-column",{key:s,attrs:{sm:"6",lg:"4"}},[i("core-feature-card",{ref:"addons",refInFor:!0,attrs:{feature:t},scopedSlots:e._u([{key:"title",fn:function(){return[i(e.getIconComponent(t.icon),{tag:"component",attrs:{src:e.getIconSrc(t.icon,t.image)}}),e._v(" "+e._s(t.name)+" ")]},proxy:!0},{key:"description",fn:function(){return[i("div",{domProps:{innerHTML:e._s(e.getAddonDescription(t))}})]},proxy:!0}],null,!0)})],1)})),1)],1),e.isUnlicensed?i("cta",{staticClass:"feature-manager-upsell",attrs:{type:2,"button-text":e.strings.ctaButtonText,floating:!1,"cta-link":e.$links.utmUrl("feature-manager","main-cta"),"learn-more-link":e.$links.getUpsellUrl("feature-manager","main-cta","home"),"feature-list":[e.strings.videoNewsSitemaps,e.strings.imageSeoOptimization,e.strings.localBusinessSeo,e.strings.advancedWooCommerce,e.strings.customTaxonomies,e.strings.andMore]},scopedSlots:e._u([{key:"header-text",fn:function(){return[i("span",{staticClass:"large"},[e._v(e._s(e.strings.ctaHeaderText))])]},proxy:!0},{key:"description",fn:function(){return[e._v(" "+e._s(e.upgradeToday)+" ")]},proxy:!0},{key:"featured-image",fn:function(){return[i("img",{attrs:{src:s("cd82")}})]},proxy:!0}],null,!1,2253571885)}):e._e()],1)},a=[],n=(s("a4d3"),s("e01a"),s("4de4"),s("4160"),s("caad"),s("d81d"),s("b0c0"),s("b64b"),s("ac1f"),s("2532"),s("5319"),s("841c"),s("2ca0"),s("159b"),s("5530")),r=s("9c0e"),o=s("2f62"),c={mixins:[r["e"]],data:function(){return{search:null,loading:{activateAll:!1,deactivateAll:!1},strings:{videoNewsSitemaps:this.$t.__("Video and News Sitemaps",this.$td),imageSeoOptimization:this.$t.__("Image SEO Optimization",this.$td),localBusinessSeo:this.$t.__("Local Business SEO",this.$td),advancedWooCommerce:this.$t.__("Advanced WooCommerce",this.$td),customTaxonomies:this.$t.__("SEO for Categories, Tags and Custom Taxonomies",this.$td),andMore:this.$t.__("And many more...",this.$td),activateAllFeatures:this.$t.__("Activate All Features",this.$td),deactivateAllFeatures:this.$t.__("Deactivate All Features",this.$td),searchForFeatures:this.$t.__("Search for Features...",this.$td),ctaHeaderText:this.$t.sprintf(this.$t.__("Upgrade %1$s to Pro and Unlock all Features!",this.$td),"AIOSEO"),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock All Features",this.$td),aValidLicenseIsRequired:this.$t.__("A valid license key is required in order to use our addons.",this.$td),enterLicenseKey:this.$t.__("Enter License Key",this.$td),purchaseLicense:this.$t.__("Purchase License",this.$td)},descriptions:{aioseoImageSeo:{description:this.$t.__("Globally control the Title attribute and Alt text for images in your content. These attributes are essential for both accessibility and SEO.",this.$td),version:0},aioseoVideoSitemap:{description:this.$t.__("The Video Sitemap works in much the same way as the XML Sitemap module, it generates an XML Sitemap specifically for video content on your site. Search engines use this information to display rich snippet information in search results.",this.$td),version:0},aioseoNewsSitemap:{description:this.$t.__("Our Google News Sitemap lets you control which content you submit to Google News and only contains articles that were published in the last 48 hours. In order to submit a News Sitemap to Google, you must have added your site to Google’s Publisher Center and had it approved.",this.$td),version:0},aioseoLocalBusiness:{description:this.$t.__("Local Business schema markup enables you to tell Google about your business, including your business name, address and phone number, opening hours and price range. This information may be displayed as a Knowledge Graph card or business carousel.",this.$td),version:0}}}},computed:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(o["c"])(["isUnlicensed"])),Object(o["e"])(["addons"])),{},{upgradeToday:function(){return this.$t.sprintf(this.$t.__("%1$s %2$s comes with many additional features to help take your site's SEO to the next level!",this.$td),"AIOSEO","Pro")},getAddons:function(){var e=this;return this.addons.filter((function(t){return!e.search||t.name.toLowerCase().includes(e.search.toLowerCase())}))}}),methods:Object(n["a"])(Object(n["a"])({},Object(o["b"])(["installPlugins","deactivatePlugins"])),{},{getIconComponent:function(e){return e.startsWith("svg-")?e:"img"},getIconSrc:function(e,t){return"string"===typeof e&&e.startsWith("svg-")?null:"string"===typeof e?"data:image/svg+xml;base64,".concat(e):t},getAddonDescription:function(e){var t=e.sku.replace(/-./g,(function(e){return e.toUpperCase()[1]}));return this.descriptions[t]&&this.descriptions[t].description&&e.descriptionVersion<=this.descriptions[t].version?this.descriptions[t].description:e.description},activateAllFeatures:function(){var e=this;this.loading.activateAll=!0;var t=this.addons.filter((function(e){return!e.requiresUpgrade})).map((function(e){return{plugin:e.basename}}));this.installPlugins(t).then((function(t){var s=Object.keys(t.body.completed).map((function(e){return t.body.completed[e]}));e.$refs.addons.forEach((function(e){s.includes(e.feature.basename)&&(e.activated=!0)})),e.loading.activateAll=!1}))},deactivateAllFeatures:function(){var e=this;this.loading.deactivateAll=!0;var t=this.addons.filter((function(e){return!e.requiresUpgrade})).filter((function(e){return e.installed})).map((function(e){return{plugin:e.basename}}));this.deactivatePlugins(t).then((function(t){var s=Object.keys(t.body.completed).map((function(e){return t.body.completed[e]}));e.$refs.addons.forEach((function(e){s.includes(e.feature.basename)&&(e.activated=!1)})),e.loading.deactivateAll=!1}))}})},d=c,l=(s("00d0"),s("2877")),u=Object(l["a"])(d,i,a,!1,null,null,null);t["default"]=u.exports},a467:function(e,t,s){},cd82:function(e,t,s){e.exports=s.p+"img/news-sitemap.png"}}]);