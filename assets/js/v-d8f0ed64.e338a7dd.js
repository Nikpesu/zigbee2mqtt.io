"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[26764],{168048:(e,t,o)=>{o.r(t),o.d(t,{data:()=>n});const n=JSON.parse('{"key":"v-d8f0ed64","path":"/devices/AB401130055.html","title":"OSRAM AB401130055 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"OSRAM AB401130055 control via MQTT","description":"Integrate your OSRAM AB401130055 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-07-22T20:08:17.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Set default power on/off transition","slug":"set-default-power-on-off-transition","link":"#set-default-power-on-off-transition","children":[]},{"level":3,"title":"Remember current light state","slug":"remember-current-light-state","link":"#remember-current-light-state","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Light","slug":"light","link":"#light","children":[]},{"level":3,"title":"Effect (enum)","slug":"effect-enum","link":"#effect-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1720635688000},"filePathRelative":"devices/AB401130055.md"}')},7842:(e,t,o)=>{o.r(t),o.d(t,{default:()=>k});var n=o(166252);const a=(0,n._)("h1",{id:"osram-ab401130055",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#osram-ab401130055","aria-hidden":"true"},"#"),(0,n.Uk)(" OSRAM AB401130055")],-1),s=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th"),(0,n._)("th")])],-1),i=(0,n._)("tr",null,[(0,n._)("td",null,"Model"),(0,n._)("td",null,"AB401130055")],-1),r=(0,n._)("td",null,"Vendor",-1),l=(0,n._)("tr",null,[(0,n._)("td",null,"Description"),(0,n._)("td",null,"LIGHTIFY Surface Light LED Tunable White")],-1),d=(0,n._)("tr",null,[(0,n._)("td",null,"Exposes"),(0,n._)("td",null,"light (state, brightness, color_temp), effect, linkquality")],-1),c=(0,n._)("tr",null,[(0,n._)("td",null,"Picture"),(0,n._)("td",null,[(0,n._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/AB401130055.png",alt:"OSRAM AB401130055"})])],-1),u=(0,n._)("h2",{id:"notes",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,n.Uk)(" Notes")],-1),p=(0,n._)("h3",{id:"pairing",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,n.Uk)(" Pairing")],-1),h={href:"http://belkin.force.com/Articles/articles/en_US/Troubleshooting_and_Tutorials/Resetting-the-OSRAM-LIGHTIFY-Tunable-White-60-Bulb#a",target:"_blank",rel:"noopener noreferrer"},m=(0,n.uE)('<h3 id="set-default-power-on-off-transition" tabindex="-1"><a class="header-anchor" href="#set-default-power-on-off-transition" aria-hidden="true">#</a> Set default power on/off transition</h3><p>Various Osram/Sylvania LED support setting a default transition when turning a light on and off.</p><p><strong>TOPIC</strong>: <code>zigbee2mqtt/FRIENDLY_NAME/set</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string-property property">&quot;set_transition&quot;</span><span class="token operator">:</span> <span class="token number">1</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>INFO</strong>: Value is time in seconds (integer, float values are not supported)</p><h3 id="remember-current-light-state" tabindex="-1"><a class="header-anchor" href="#remember-current-light-state" aria-hidden="true">#</a> Remember current light state</h3><p>Various Osram/Sylvania LED support remembering their current state in case of power loss, or if a light is manually switched off then on. Lights will remember their respective attributes (i.e. brightness, color, saturation, etc.). <strong>NOTE</strong>: This must be executed every time you make changes to a light&#39;s attributes for it to then &#39;remember&#39; it.</p><p><strong>TOPIC</strong>: <code>zigbee2mqtt/FRIENDLY_NAME/set</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string-property property">&quot;remember_state&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>INFO</strong>: Value is true, false (boolean)</p>',10),g=(0,n._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,n.Uk)(" OTA updates")],-1),b=(0,n._)("h2",{id:"options",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,n.Uk)(" Options")],-1),f=(0,n.uE)('<ul><li><p><code>transition</code>: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to <code>0</code> (no transition). The value must be a number with a minimum value of <code>0</code></p></li><li><p><code>color_sync</code>: When enabled colors will be synced, e.g. if the light supports both color x/y and color temperature a conversion from color x/y to color temperature will be done when setting the x/y color (default true). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light" aria-hidden="true">#</a> Light</h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>, <code>color_temp</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</li><li><code>color_temp</code>: To control the color temperature (in reciprocal megakelvin a.k.a. mired scale) publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;color_temp&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>153</code> and <code>370</code>, the higher the warmer the color. To read the color temperature send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;color_temp&quot;: &quot;&quot;}</code>. Besides the numeric values the following values are accepted: <code>coolest</code>, <code>cool</code>, <code>neutral</code>, <code>warmest</code>.</li></ul><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off" aria-hidden="true">#</a> On with timed off</h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionnaly an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the light will not answer to other on with timed off commands. Support depend on the light firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h4 id="transition" tabindex="-1"><a class="header-anchor" href="#transition" aria-hidden="true">#</a> Transition</h4><p>For all of the above mentioned features it is possible to do a transition of the value over time. To do this add an additional property <code>transition</code> to the payload which is the transition time in seconds. Examples: <code>{&quot;brightness&quot;:156,&quot;transition&quot;:3}</code>, <code>{&quot;color_temp&quot;:241,&quot;transition&quot;:1}</code>.</p><h4 id="moving-stepping" tabindex="-1"><a class="header-anchor" href="#moving-stepping" aria-hidden="true">#</a> Moving/stepping</h4><p>Instead of setting a value (e.g. brightness) directly it is also possible to:</p><ul><li>move: this will automatically move the value over time, to stop send value <code>stop</code> or <code>0</code>.</li><li>step: this will increment/decrement the current value by the given one.</li></ul><p>The direction of move and step can be either up or down, provide a negative value to move/step down, a positive value to move/step up. To do this send a payload like below to <code>zigbee2mqtt/FRIENDLY_NAME/set</code></p><p><strong>NOTE</strong>: brightness move/step will stop at the minimum brightness and won&#39;t turn on the light when it&#39;s off. In this case use <code>brightness_move_onoff</code>/<code>brightness_step_onoff</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token string-property property">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving brightness down at 40 units per second</span>\n  <span class="token string-property property">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// Stop moving brightness</span>\n  <span class="token string-property property">&quot;brightness_step&quot;</span><span class="token operator">:</span> <span class="token number">40</span> <span class="token comment">// Increases brightness by 40</span>\n  <span class="token string-property property">&quot;color_temp_move&quot;</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving color temperature up at 60 units per second</span>\n  <span class="token string-property property">&quot;color_temp_move&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stop&quot;</span><span class="token punctuation">,</span> <span class="token comment">// Stop moving color temperature</span>\n  <span class="token string-property property">&quot;color_temp_step&quot;</span><span class="token operator">:</span> <span class="token number">99</span><span class="token punctuation">,</span> <span class="token comment">// Increase color temperature by 99</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="effect-enum" tabindex="-1"><a class="header-anchor" href="#effect-enum" aria-hidden="true">#</a> Effect (enum)</h3><p>Triggers an effect on the light (e.g. make light blink for a few seconds). Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;effect&quot;: NEW_VALUE}</code>. The possible values are: <code>blink</code>, <code>breathe</code>, <code>okay</code>, <code>channel_change</code>, <code>finish_effect</code>, <code>stop_effect</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',19),v={},k=(0,o(983744).Z)(v,[["render",function(e,t){const o=(0,n.up)("RouterLink"),v=(0,n.up)("ExternalLinkIcon");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.kq)(" !!!! "),(0,n.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,n.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,n.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,n.kq)(" !!!! "),a,(0,n._)("table",null,[s,(0,n._)("tbody",null,[i,(0,n._)("tr",null,[r,(0,n._)("td",null,[(0,n.Wm)(o,{to:"/supported-devices/#v=OSRAM"},{default:(0,n.w5)((()=>[(0,n.Uk)("OSRAM")])),_:1})])]),l,d,c])]),(0,n.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,p,(0,n._)("p",null,[(0,n.Uk)("Follow instruction from "),(0,n._)("a",h,[(0,n.Uk)("Manual reset"),(0,n.Wm)(v)]),(0,n.Uk)(". After resetting the bulb will automatically connect.")]),m,(0,n.kq)(" Notes END: Do not edit below this line "),g,(0,n._)("p",null,[(0,n.Uk)("This device supports OTA updates, for more information see "),(0,n.Wm)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,n.w5)((()=>[(0,n.Uk)("OTA updates")])),_:1}),(0,n.Uk)(".")]),b,(0,n._)("p",null,[(0,n._)("em",null,[(0,n.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.w5)((()=>[(0,n.Uk)("How to use device type specific configuration")])),_:1})])]),f])}]])}}]);