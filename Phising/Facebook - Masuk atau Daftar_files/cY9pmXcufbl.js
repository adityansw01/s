if (self.CavalryLogger) { CavalryLogger.start_js(["PNQoF"]); }

__d("PartnershipsMarketingLoggingUtils",["Event","UniversalMicroSiteTrackingController"],(function(a,b,c,d,e,f){"use strict";f.logSearchWithQuery=a;function a(a,c){b("Event").listen(a,"click",function(){b("UniversalMicroSiteTrackingController").performAsyncSearchLog(a,c.value)})}}),null);
__d("PixelRatioConst",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({cookieName:"dpr"})}),null);
__d("VideoHomeClickLogger",["VideoHomeEvents","VideoHomeTypedLogger"],(function(a,b,c,d,e,f){"use strict";f.logClick=g;f.init=a;function g(a){var c=a.target,d=a.id,e=a.clickPoint,f=a.playerOrigin;f=f===void 0?"video_home":f;a=a.eventTargetInfo;a=a===void 0?null:a;new(b("VideoHomeTypedLogger"))().setEvent(b("VideoHomeEvents").CLICK).setEventTarget(c).setEventTargetID(d).setClickPoint(e).setPlayerOrigin(f).setEventTargetInfo(a).log()}function a(a,b){a.addEventListener("click",function(){g(b)})}}),null);