/*
 Copyright (c) 2009-2011 Petr Vostrel (http://petr.vostrel.cz/)
 Dual licensed under the MIT (MIT-LICENSE.txt)
 and GPL (GPL-LICENSE.txt) licenses.

 jQuery Reel
 http://jquery.vostrel.cz/reel
 Version: 1.1.1-devel
 Updated: 2011-04-25

 Requires jQuery 1.4.2 or higher
*/
jQuery.reel||function(h,kb,ja,p){function A(j){return h.reel.instances.first().data(j)}function lb(j){return h.reel.instances.push(j[0])&&j}function mb(j){return(h.reel.instances=h.reel.instances.not("#"+j.attr(M)))&&j}function ka(j){return nb&&"data:image/gif;base64,R0lGODlh"+j}function ob(j){return"<"+j+"/>"}function la(j){return"."+j}function ma(j){return"http://code.vostrel.cz/"+j}function na(j){return"url("+j+")"}function H(j){return+j.toFixed(4)}function V(j,a,u){return N(j,La(a,u))}function pb(j){function a(){h.fn[this]||
(h.fn[this]=function(){return this})}h.each(j,a)}function oa(j,a){return v(j)*(a?-1:1)}function W(j){return j.originalEvent.touches[0]}h.reel={version:"1.1.1-devel",def:{footage:6,frame:1,frames:36,hint:"",horizontal:true,hotspot:p,indicator:0,klass:"",loops:true,reversed:p,spacing:0,stitched:0,suffix:"-reel",tooltip:"",area:p,brake:0.5,clickfree:false,cw:false,delay:-1,directional:false,draggable:true,entry:p,graph:p,image:p,images:[],inversed:false,laziness:6,monitor:p,opening:0,orbital:0,path:"",
preloader:4,rebound:0.5,revolution:p,row:1,rows:0,speed:0,step:p,steps:p,tempo:36,timeout:2,throwable:true,vertical:false,wheelable:true}};h.fn.reel=function(j){var a=h.extend({},h.reel.def,j);j=function(g){var r=[];g.filter(qb).each(function(){var c=h(this),d=a.images.length&&a.images||a.image||c.attr(Ma),t=X(c.css(Na)),m=X(c.css(Oa));!d||d==Pa||!t||!m||r.push(c)});g.filter(Qa+la(w)).each(function(){r.push(h(this))});return h(r)}(this);var u=[];a.reversed&&(a.cw=true);a.tooltip&&(a.hint=a.tooltip);
a.hotspot&&(a.area=a.hotspot);j.each(function(){var g=h(this),r=g.data(),c=function(f,b){r[f]=b;g.trigger("store",[f,b]);return b},d=function(f){var b=r[f];g.trigger("recall",[f,b]);return b},t={setup:function(f){if(g.hasClass(w))return m.call(f);var b=g.attr(Ma),e=c(M,g.attr(M)||g.attr(M,w+"-"+ +new Date).attr(M)),i=g.attr("style"),k=a.images,l=a.stitched,n=a.loops,s={x:X(g.css(Na)),y:X(g.css(Oa))},x=c(Ra,a.orbital&&a.footage||a.rows<=1&&k.length||a.frames),pa=l?1:Sa(x/a.footage),O={display:"block",
width:s.x,height:s.y};e="#"+e+a.suffix;var Ta=g.attr("class"),qa={position:"relative",width:s.x,height:s.y};qa=h(P,{id:e.substr(1),className:Ta+ra+rb,css:qa});O=g.wrap(qa).attr({className:w}).css(O).bind(t);u.push(lb(O)[0]);c(Ua,k.length&&k.length||a.image||b.replace(/^(.*)\.(jpg|jpeg|png|gif)$/,"$1"+a.suffix+".$2"));c(Va,Ta);c(y,a.frame);c(Wa,a.spacing);c(B,s);c(o,0);c(sa,a.steps||a.frames);c(Y,a.revolution||l/2||s.x*2);c(ta,pa);c(Z,1/(x-(n&&!l?0:1)));c(sb,1/N(x,d(sa)));c(ua,l);c(Xa,l-(n?0:s.x));
c($,e);c(E,c(va,a.speed)<0);c(I,0);c(J,a.vertical);c(z,(a.row-1)/(a.rows-1));c(aa,oa(1,!a.cw&&!l));c(Q,false);c(Ya,a.brake);c(C,a.tempo/(h.reel.lazy?a.laziness:1));c(ba,0);c(Za,{src:b,style:i||Pa});D.bind(F,t.tick);m.call(f);g.trigger("start")},teardown:function(f){g.unbind(q).unbind(t);var b=g.data("events"),e=g.clone().attr(g.data(Za)).css({background:"transparent"}).removeClass(w).addClass(d(Va));for(var i in b)h.each(b[i],function(k,l){e.bind(i+"."+l.namespace,l.handler,l.data)});h("img:"+wa,
g.parent()).remove();mb(g);h(d($)).replaceWith(e);ca();D.unbind(F,t.tick).unbind(F,t.opening_tick);da.unbind(xa).unbind(ya);m.call(f)},start:function(){var f=d(B),b=d(Ra),e=N(b,d(sa));e=c(o,1/e*((a.step||a.frame)-1));c(y,e*b+1);g.attr("id");b=g.parent();e=h(P,{className:tb,css:{position:ea,left:0,top:0,width:f.x,height:f.y,background:za,opacity:0}}).appendTo(b);e=c($a,h(a.area||e));if(h.reel.touchy){g.css({WebkitUserSelect:"none",WebkitBackgroundSize:a.images.length?"auto":d(ua)&&d(ua)+"px "+f.y+
"px"||f.x*a.footage+"px "+f.y*d(ta)*(a.rows||1)*(a.directional?2:1)+"px"});e.bind(ub,function(i){g.trigger("down",[W(i).clientX,W(i).clientY,true])}).bind(vb,function(i){g.trigger("slide",[W(i).clientX,W(i).clientY,true]);return!(a.rows>1||a.orbital||d(Q))}).bind(wb,function(){g.trigger("up",[true]);return false}).bind(xb,function(){g.trigger("up",[true]);return false})}else e.css({cursor:"url("+ab+"), "+Aa}).bind(yb,function(i,k){g.trigger("wheel",[k]);return false}).bind(zb,function(){g.trigger("play")}).bind(a.clickfree?
Ab:Bb,function(i){g.trigger("down",[i.clientX,i.clientY]);return false}).bind(a.clickfree?Cb:"",function(){g.trigger("up");return false}).disableTextSelect();a.hint&&e.attr(Db,a.hint);a.monitor&&b.append(Ba=h(P,{className:Eb,css:{position:ea,left:0,top:0}}))||(Ba=h());a.indicator&&b.append(bb("x"));a.rows>1&&a.indicator&&b.append(bb("y"));g.trigger("preload")},preload:function(f){var b=d(B),e=g.parent(),i=d(Ua),k=a.images,l=!k.length?[i]:[].concat(k),n=g[0];n.frames=l.length;n.preloaded=0;g.trigger("stop");
for(e.append(Ca=h(P,{className:Fb,css:{position:ea,left:0,top:b.y-a.preloader,height:a.preloader,overflow:wa,backgroundColor:za}}));l.length;){var s=a.path+l.shift(),x=h(new Image).hide().bind("load"+q,function(){n.preloaded++;h(this).unbind(q);Ca.css({width:1/n.frames*n.preloaded*b.x});if(n.frames==n.preloaded){Ca.remove();k.length||g.css({backgroundImage:na(a.path+i)});g.attr({src:Gb}).trigger(a.rows>1&&!a.stitched?"rowChange":"frameChange").trigger("loaded").trigger("opening");m.call(f)}});e.append(x);
setTimeout(function(pa,O){return function(){pa.attr({src:O})}}(x,s),0)}},tick:function(f){var b=d(I);if(R){var e=H(b-d(Ya)/A(C)*R);b=!(b*e<=0||b<v(e))&&c(I,b>v(d(va))?e:(R=G=0))}Ba.text(d(a.monitor));b&&R++;G&&G++;cb(0);Da=true;if(G&&!b)return m.call(f);if(d(fa))return m.call(f,K());e=d(aa)*oa(1,d(E));var i=(d(Ea)?b:v(d(va))+b)/A(C);b=d(o);e=c(o,b-i*e);m.call(f);e!=b&&g.trigger("fractionChange")},opening:function(){var f=a.entry||a.speed,b=d(o),e=a.opening;c(o,b-f*a.opening);c(ba,e*A(C));D.bind(F,
t.opening_tick)},opening_tick:function(f){var b=(a.entry||a.speed)/A(C)*(a.cw?-1:1),e=d(o);c(o,H(e+b));b=c(ba,d(ba)-1);g.trigger("fractionChange");m.call(f);if(!(b>1)){D.unbind(F,t.opening_tick);Hb()}},play:function(f){var b=c(Fa,true);c(Ea,!b);db();m.call(f)},pause:function(f){c(Fa,false);K();m.call(f)},stop:function(f){var b=c(Ea,true);c(Fa,!b);m.call(f)},down:function(f,b,e,i){if(a.draggable){c(fa,d(y));c(I,0);ga=ha(b,e,d(o),d(Y),d(z));K();ca();if(!i){da.css({cursor:na(Ib)+", "+Aa}).bind(ya,function(k){g.trigger("slide",
[k.clientX,k.clientY]);m.call(k);return false});a.clickfree||da.bind(xa,function(k){g.trigger("up");m.call(k)})}}m.call(f)},up:function(f,b){if(!a.draggable)return m.call(f);c(fa,false);c(Q,false);var e=c(I,!a.throwable?0:v(S[0]+S[1])/60);R=e?1:0;e?db():K();ca();!b&&da.unbind(xa).unbind(ya)&&d($a).css({cursor:na(ab)+", "+Aa});m.call(f)},slide:function(f,b,e){if(a.draggable&&Da){Da=false;K();var i={x:b-ga.x,y:e-ga.y};if(v(i.x)>0||v(i.y)>0){ga={x:b,y:e};var k=d(Y),l=d(eb),n=d(J),s=c(o,fb(n?e-l.y:b-
l.x,d(Ga),k,d(Ha),d(Ia),d(aa)));c(Q,d(Q)||d(y)!=d(fa));(i=cb(n?i.y:i.x||0))&&c(E,i<0);if(a.orbital&&d(gb)){c(J,v(e-l.y)>v(b-l.x));l=ha(b,e,s,k,d(z))}if(a.rows>1){i=d(B).y;n=d(hb);var x=-n*i;c(z,H(h.reel.math.envelope(e-l.y,n,i,x,x+i,-1)))}!(s%1)&&!a.loops&&ha(b,e,s,k,d(z));g.trigger("fractionChange")}}m.call(f)},wheel:function(f,b){if(!a.wheelable)return m.call(f);var e=Sa(Jb(v(b))/2);e=oa(e,b>0);b=0.2*d(Y);ha(p,p,d(o),b,d(z));c(o,fb(e,d(Ga),b,d(Ha),d(Ia),d(aa)));e&&c(E,e<0);c(I,0);K();m.call(f);
g.trigger("fractionChange");return false},fractionChange:function(f,b){b=!b?d(o):c(o,b);b=a.loops?b-T(b):V(0,1,b);b=c(o,H(b));var e=d(y),i=c(y,1+T(b/d(Z))),k=a.orbital;c(gb,k&&(i<=k||i>=a.footage-k+2));if(!a.loops&&a.rebound){!G&&!(b%1)?Ja++:(Ja=0);Ja>=a.rebound*1E3/A(C)&&c(E,!d(E))}k=d(B);var l=(d(J)?k.y:k.x)-a.indicator;b=V(0,l,U(h.reel.math.interpolate(b,-1,l+2)));b=!a.cw||a.stitched?b:l-b;h(la(Ka+".x"),d($)).css(d(J)?{left:0,top:b}:{left:b,top:k.y-a.indicator});if(a.rows>1){b=d(B).y-a.indicator;
b=V(0,b,U(h.reel.math.interpolate(d(z),-1,b+2)));h(la(Ka+".y"),d($)).css({top:b})}if(i==e&&i!=1)return m.call(f);g.trigger(a.rows>1?"rowChange":"frameChange");m.call(f)},rowChange:function(f,b){var e=T(d(o)/d(Z))+1;b=c(z,V(0,1,H(b!=p?(b-1)/(a.rows-1):d(z))));c(y,e+(a.rows<=1?0:U(b*(a.rows-1))*a.frames));m.call(f);g.trigger("frameChange")},frameChange:function(f,b){var e=!b?d(o):c(o,H(d(Z)*(b-1)));b=c(y,U(b?b:d(y)));var i=a.images,k=a.footage,l=d(B),n=a.horizontal;if(d(J)){b=a.inversed?k+1-b:b;b+=
k}if(i.length)g.attr({src:a.path+i[b-1]});else{if(a.stitched)i=[-U(e*d(Xa))+L,0+L];else{e=b%k-1;e=e<0?k-1:e;k=T((b-0.1)/k);k+=a.rows>1?0:d(E)?0:d(ta);b=d(Wa);k=k*((n?l.y:l.x)+b);l=e*((n?l.x:l.y)+b);i=i.length?[0,0]:n?[-l+L,-k+L]:[-k+L,-l+L]}g.css({backgroundPosition:i.join(ra)})}m.call(f)}},m=function(f){ib||delete this;return f},G,R=0,db=function(){return G=0},K=function(){clearTimeout(jb);D.unbind(F,t.opening_tick);g.trigger("play");return G=-a.timeout*A(C)},jb,Hb=function(){jb=setTimeout(function(){g.trigger("play")},
a.delay*1E3||0)},Ba,Ca,bb=function(f){return h(P,{className:[Ka,f].join(ra),css:{width:a.indicator,height:a.indicator,overflow:wa,top:d(B).y-a.indicator,left:0,position:ea,backgroundColor:za}})},Ja=0,ga={x:0,y:0},cb=function(f){return S.push(f)&&S.shift()&&f},ca=function(){return S=[0,0]},S=ca(),fb=a.graph||h.reel.math[a.loops?"hatch":"envelope"],ha=function(f,b,e,i,k){c(Ga,e);c(hb,k);c(Ha,a.loops?0:-e*i);c(Ia,a.loops?i:i-e*i);return f&&c(eb,{x:f,y:b})||p},Da=true,da=h.browser.opera?D:h.unique(D.add(kb.top.document));
t.setup()});ia=ia||function g(){var r=+new Date,c=A(C);if(c){D.trigger(F);h.reel.cost=(+new Date+h.reel.cost-r)/2;return ia=setTimeout(g,N(4,1E3/c-h.reel.cost))}else return ia=p}();return h(u)};h.reel.math={envelope:function(j,a,u,g,r,c){return a+N(g,La(r,-j*c))/u},hatch:function(j,a,u,g,r,c){j=(j<g?r:0)+j%r;j=a+-j*c/u;return j-T(j)},interpolate:function(j,a,u){return a+j*(u-a)}};h.reel.touchy=/iphone|ipod|ipad|android/i.test(navigator.userAgent);h.reel.lazy=/iphone|ipod|android/i.test(navigator.userAgent);
h.reel.instances=h();h.reel.cost=0;h.reel.leader=A;pb("mousewheel disableTextSelect enableTextSelect".split(/ /));var D=h(ja);ja=+h.browser.version.split(".").slice(0,2).join(".");var ib=h.browser.msie,nb=!(ib&&ja<8),Aa="ew-resize",ia,w="jquery-reel",rb=w+"-overlay",Ka=w+"-indicator",Fb=w+"-preloader",Eb=w+"-monitor",tb=w+"-interface",Gb=ka("CAAIAIAAAAAAAAAAACH5BAEAAAAALAAAAAAIAAgAAAIHhI+py+1dAAA7")||ma("blank.gif"),ab=ka("EAAQAJECAAAAAP///////wAAACH5BAEAAAIALAAAAAAQABAAQAI3lC8AeBDvgosQxQtne7yvLWGStVBelXBKqDJpNzLKq3xWBlU2nUs4C/O8cCvU0EfZGUwt19FYAAA7")||
ma("jquery.reel.cursor-drag.gif"),Ib=ka("EAAQAJECAAAAAP///////wAAACH5BAEAAAIALAAAAAAQABAAQAIslI95EB3MHECxNjBVdE/5b2zcRV1QBabqhwltq41St4hj5konmVioZ6OtEgUAOw==")||ma("jquery.reel.cursor-drag-down.gif"),U=Math.round,T=Math.floor,Sa=Math.ceil,La=Math.min,N=Math.max,v=Math.abs,Jb=Math.sqrt,X=parseInt,$a="area",Za="backup",E="backwards",Z="bit",Ya="brake",gb="center",Va="classes",fa="clicked",eb="clicked_location",Ga="clicked_on",hb="clicked_row",aa="cwish",B="dimensions",o="fraction",y="frame",Ra="frames",
Ia="hi",wa="hidden",Ua="image",ba="opening_ticks",Ha="lo",Fa="playing",Q="reeling",Y="revolution",z="row",ta="rows",Wa="spacing",va="speed",$="stage",sa="steps",ua="stitched",Xa="stitched_travel",Ea="stopped",C="tempo",I="velocity",J="vertical",sb="wheel_step",q=".reel",zb="dblclick"+q,Bb="mousedown"+q,Ab="mouseenter"+q,Cb="mouseleave"+q,ya="mousemove"+q,xa="mouseup"+q,yb="mousewheel"+q,F="tick"+q,xb="touchcancel"+q,wb="touchend"+q,ub="touchstart"+q,vb="touchmove"+q,Pa="",ra=" ",ea="absolute",Qa=
"div",P=ob(Qa),Oa="height",za="#000",M="id",qb="img",L="px",Ma="src",Db="title",Na="width"}(jQuery,window,document);
