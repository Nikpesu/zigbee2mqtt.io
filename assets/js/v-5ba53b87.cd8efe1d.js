"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[53691],{779669:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-5ba53b87","path":"/devices/ZTH05Z.html","title":"Tuya ZTH05Z control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya ZTH05Z control via MQTT","description":"Integrate your Tuya ZTH05Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-01-31T20:08:00.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Temperature unit (enum)","slug":"temperature-unit-enum","link":"#temperature-unit-enum","children":[]},{"level":3,"title":"Max temperature alarm (numeric)","slug":"max-temperature-alarm-numeric","link":"#max-temperature-alarm-numeric","children":[]},{"level":3,"title":"Min temperature alarm (numeric)","slug":"min-temperature-alarm-numeric","link":"#min-temperature-alarm-numeric","children":[]},{"level":3,"title":"Max humidity alarm (numeric)","slug":"max-humidity-alarm-numeric","link":"#max-humidity-alarm-numeric","children":[]},{"level":3,"title":"Min humidity alarm (numeric)","slug":"min-humidity-alarm-numeric","link":"#min-humidity-alarm-numeric","children":[]},{"level":3,"title":"Temperature alarm (enum)","slug":"temperature-alarm-enum","link":"#temperature-alarm-enum","children":[]},{"level":3,"title":"Humidity alarm (enum)","slug":"humidity-alarm-enum","link":"#humidity-alarm-enum","children":[]},{"level":3,"title":"Temperature periodic report (numeric)","slug":"temperature-periodic-report-numeric","link":"#temperature-periodic-report-numeric","children":[]},{"level":3,"title":"Humidity periodic report (numeric)","slug":"humidity-periodic-report-numeric","link":"#humidity-periodic-report-numeric","children":[]},{"level":3,"title":"Temperature sensitivity (numeric)","slug":"temperature-sensitivity-numeric","link":"#temperature-sensitivity-numeric","children":[]},{"level":3,"title":"Humidity sensitivity (numeric)","slug":"humidity-sensitivity-numeric","link":"#humidity-sensitivity-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1720635688000},"filePathRelative":"devices/ZTH05Z.md"}')},649846:(e,t,i)=>{i.r(t),i.d(t,{default:()=>p});var a=i(166252);const r=(0,a._)("h1",{id:"tuya-zth05z",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#tuya-zth05z","aria-hidden":"true"},"#"),(0,a.Uk)(" Tuya ZTH05Z")],-1),o=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),d=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"ZTH05Z")],-1),u=(0,a._)("td",null,"Vendor",-1),n=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Temperature and humidity sensor")],-1),c=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"temperature, humidity, battery, temperature_unit, max_temperature_alarm, min_temperature_alarm, max_humidity_alarm, min_humidity_alarm, temperature_alarm, humidity_alarm, temperature_periodic_report, humidity_periodic_report, temperature_sensitivity, humidity_sensitivity, linkquality")],-1),l=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZTH05Z.png",alt:"Tuya ZTH05Z"})])],-1),m=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),s=(0,a.uE)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="temperature-unit-enum" tabindex="-1"><a class="header-anchor" href="#temperature-unit-enum" aria-hidden="true">#</a> Temperature unit (enum)</h3><p>Temperature unit. Value can be found in the published state on the <code>temperature_unit</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_unit&quot;: NEW_VALUE}</code>. The possible values are: <code>celsius</code>, <code>fahrenheit</code>.</p><h3 id="max-temperature-alarm-numeric" tabindex="-1"><a class="header-anchor" href="#max-temperature-alarm-numeric" aria-hidden="true">#</a> Max temperature alarm (numeric)</h3><p>Alarm temperature max. Value can be found in the published state on the <code>max_temperature_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_temperature_alarm&quot;: NEW_VALUE}</code>. The minimal value is <code>-20</code> and the maximum value is <code>60</code>. The unit of this value is <code>°C</code>.</p><h3 id="min-temperature-alarm-numeric" tabindex="-1"><a class="header-anchor" href="#min-temperature-alarm-numeric" aria-hidden="true">#</a> Min temperature alarm (numeric)</h3><p>Alarm temperature min. Value can be found in the published state on the <code>min_temperature_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;min_temperature_alarm&quot;: NEW_VALUE}</code>. The minimal value is <code>-20</code> and the maximum value is <code>60</code>. The unit of this value is <code>°C</code>.</p><h3 id="max-humidity-alarm-numeric" tabindex="-1"><a class="header-anchor" href="#max-humidity-alarm-numeric" aria-hidden="true">#</a> Max humidity alarm (numeric)</h3><p>Alarm humidity max. Value can be found in the published state on the <code>max_humidity_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_humidity_alarm&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="min-humidity-alarm-numeric" tabindex="-1"><a class="header-anchor" href="#min-humidity-alarm-numeric" aria-hidden="true">#</a> Min humidity alarm (numeric)</h3><p>Alarm humidity min. Value can be found in the published state on the <code>min_humidity_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;min_humidity_alarm&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="temperature-alarm-enum" tabindex="-1"><a class="header-anchor" href="#temperature-alarm-enum" aria-hidden="true">#</a> Temperature alarm (enum)</h3><p>Temperature alarm. Value can be found in the published state on the <code>temperature_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_alarm&quot;: NEW_VALUE}</code>. The possible values are: <code>lower_alarm</code>, <code>upper_alarm</code>, <code>cancel</code>.</p><h3 id="humidity-alarm-enum" tabindex="-1"><a class="header-anchor" href="#humidity-alarm-enum" aria-hidden="true">#</a> Humidity alarm (enum)</h3><p>Humidity alarm. Value can be found in the published state on the <code>humidity_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;humidity_alarm&quot;: NEW_VALUE}</code>. The possible values are: <code>lower_alarm</code>, <code>upper_alarm</code>, <code>cancel</code>.</p><h3 id="temperature-periodic-report-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-periodic-report-numeric" aria-hidden="true">#</a> Temperature periodic report (numeric)</h3><p>Temp periodic report. Value can be found in the published state on the <code>temperature_periodic_report</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_periodic_report&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="humidity-periodic-report-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-periodic-report-numeric" aria-hidden="true">#</a> Humidity periodic report (numeric)</h3><p>Humidity periodic report. Value can be found in the published state on the <code>humidity_periodic_report</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;humidity_periodic_report&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="temperature-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-sensitivity-numeric" aria-hidden="true">#</a> Temperature sensitivity (numeric)</h3><p>Sensitivity of temperature. Value can be found in the published state on the <code>temperature_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>3</code> and the maximum value is <code>10</code>. The unit of this value is <code>°C</code>.</p><h3 id="humidity-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-sensitivity-numeric" aria-hidden="true">#</a> Humidity sensitivity (numeric)</h3><p>Sensitivity of humidity. Value can be found in the published state on the <code>humidity_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;humidity_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>3</code> and the maximum value is <code>10</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',32),h={},p=(0,i(983744).Z)(h,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),r,(0,a._)("table",null,[o,(0,a._)("tbody",null,[d,(0,a._)("tr",null,[u,(0,a._)("td",null,[(0,a.Wm)(i,{to:"/supported-devices/#v=Tuya"},{default:(0,a.w5)((()=>[(0,a.Uk)("Tuya")])),_:1})])]),n,c,l])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,a.kq)(" Notes END: Do not edit below this line "),m,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[(0,a.Uk)("How to use device type specific configuration")])),_:1})])]),s])}]])}}]);