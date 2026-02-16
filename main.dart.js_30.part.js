((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
aEL(d,e,f){var x,w,v,u,t
if(f<=C.b.ga2(e))return C.b.ga2(d)
if(f>=C.b.ga8(e))return C.b.ga8(d)
x=C.b.alT(e,new B.atk(f))
w=d[x]
v=x+1
u=d[v]
t=e[x]
t=A.w(w,u,(f-t)/(e[v]-t))
t.toString
return t},
b_e(d,e,f,g,h){var x,w,v=E.ON(null,null,y.b)
v.O(0,e)
v.O(0,g)
x=A.Z(v,v.$ti.c)
x.$flags=1
w=x
x=A.a_(w).h("a2<1,x>")
x=A.Z(new A.a2(w,new B.asM(d,e,f,g,h),x),x.h("ax.E"))
x.$flags=1
return new B.akp(x,w)},
aAZ(d,e,f){var x,w,v,u,t
if(d==e)return d
if(d==null)return e.aN(f)
if(e==null)return d.aN(1-f)
x=B.b_e(d.a,d.Ct(),e.a,e.Ct(),f)
w=A.oN(d.d,e.d,f)
w.toString
v=A.oN(d.e,e.e,f)
v.toString
u=f<0.5
t=u?d.f:e.f
u=u?d.c:e.c
return new B.nh(w,v,t,x.a,x.b,u)},
akp:function akp(d,e){this.a=d
this.b=e},
atk:function atk(d){this.a=d},
asM:function asM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a5h:function a5h(){},
nh:function nh(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.a=g
_.b=h
_.c=i},
a6W:function a6W(d){this.a=d},
Cq:function Cq(d,e){var _=this
_.ay=_.ax=_.ok=_.k4=_.k3=null
_.a=d
_.b=0
_.e=e
_.f=0
_.r=null
_.w=!0
_.y=_.x=null
_.z=0
_.as=_.Q=null},
Bt:function Bt(d,e,f,g){var _=this
_.u=d
_.B$=e
_.dy=f
_.b=_.fy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=g
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},
Ns:function Ns(d,e,f,g,h){var _=this
_.u=d
_.P=e
_.B$=f
_.dy=g
_.b=_.fy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=h
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},
On:function On(d,e,f){this.e=d
this.c=e
this.a=f},
IQ:function IQ(d,e,f){this.e=d
this.c=e
this.a=f},
tY:function tY(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a5i:function a5i(d){this.a=d}},D,E
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[15],B)
D=c[46]
E=c[20]
B.akp.prototype={}
B.a5h.prototype={
Ct(){var x,w,v,u=this.b
if(u!=null)return u
u=this.a.length
x=1/(u-1)
w=J.aAJ(u,y.b)
for(v=0;v<u;++v)w[v]=v*x
return w}}
B.nh.prototype={
F_(d,e){var x=this,w=x.d.a9(e).WN(d),v=x.e.a9(e).WN(d),u=x.Ct()
return A.avS(w,v,x.a,u,x.f,null)},
aid(d){return this.F_(d,null)},
aN(d){var x=this,w=x.a,v=A.a_(w).h("a2<1,x>")
w=A.Z(new A.a2(w,new B.a6W(d),v),v.h("ax.E"))
return new B.nh(x.d,x.e,x.f,w,x.b,null)},
cW(d,e){var x=B.aAZ(d,this,e)
return x},
cX(d,e){var x=B.aAZ(this,d,e)
return x},
i(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.U(e)!==A.v(x))return!1
return e instanceof B.nh&&e.d.i(0,x.d)&&e.e.i(0,x.e)&&e.f===x.f&&A.cp(e.a,x.a)&&A.cp(e.b,x.b)},
gv(d){var x=this,w=A.bu(x.a),v=x.b
v=v==null?null:A.bu(v)
return A.L(x.d,x.e,x.f,x.c,w,v,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
k(d){var x=this,w=A.b(["begin: "+x.d.k(0),"end: "+x.e.k(0),"colors: "+A.k(x.a)],y.x),v=x.b
if(v!=null)w.push("stops: "+A.k(v))
w.push("tileMode: "+x.f.k(0))
return"LinearGradient("+C.b.b9(w,", ")+")"}}
B.Cq.prototype={
fw(d){var x,w,v=this,u=v.k3
u.toString
x=v.k4
x.toString
w=v.ok
w.toString
y.o.a(v.x)
v.ser(d.j5(new A.va(u,x,w,C.nC,A.b([],y.k),C.Q)))
v.fY(d)
d.dT()}}
B.Bt.prototype={
sag5(d){if(this.u===d)return
this.u=d
this.Y()},
aY(d){var x
if(isFinite(d))return d*this.u
x=this.B$
x=x==null?null:x.az(C.ap,d,x.gbk())
return x==null?0:x},
b3(d){var x
if(isFinite(d))return d/this.u
x=this.B$
x=x==null?null:x.az(C.b0,d,x.gbH())
return x==null?0:x},
b2(d){var x
if(isFinite(d))return d/this.u
x=this.B$
x=x==null?null:x.az(C.aA,d,x.gbv())
return x==null?0:x},
a2s(d){var x,w,v,u,t=d.a,s=d.b
if(t>=s&&d.c>=d.d)return new A.F(A.D(0,t,s),A.D(0,d.c,d.d))
x=this.u
if(isFinite(s)){w=s/x
v=s}else{w=d.d
v=w*x}if(v>s)w=s/x
else s=v
u=d.d
if(w>u){s=u*x
w=u}if(s<t)w=t/x
else t=s
u=d.c
if(w<u){t=u*x
w=u}return d.b6(new A.F(t,w))},
ca(d){return this.a2s(d)},
cU(d,e){return this.JG(A.jp(this.az(C.J,d,this.gbV())),e)},
bo(){var x,w=this
w.fy=w.az(C.J,y.a.a(A.t.prototype.gR.call(w)),w.gbV())
x=w.B$
if(x!=null)x.fo(A.jp(w.gq()))}}
B.Ns.prototype={
sY2(d){if(J.d(this.u,d))return
this.u=d
this.aq()},
sEj(d){if(this.P===d)return
this.P=d
this.aq()},
ghY(){return this.B$!=null},
aG(d,e){var x,w,v,u,t,s=this
if(s.B$!=null){x=y.n
if(x.a(A.t.prototype.gap.call(s))==null)s.ch.sap(new B.Cq(A.u(y.e,y.z),A.af()))
w=x.a(A.t.prototype.gap.call(s))
w.toString
v=s.gq()
v=s.u.$1(new A.y(0,0,0+v.a,0+v.b))
if(v!=w.k3){w.k3=v
w.dD()}v=s.gq()
u=e.a
t=e.b
v=new A.y(u,t,u+v.a,t+v.b)
if(!v.i(0,w.k4)){w.k4=v
w.dD()}v=s.P
if(v!==w.ok){w.ok=v
w.dD()}x=x.a(A.t.prototype.gap.call(s))
x.toString
d.j6(x,A.dY.prototype.gdF.call(s),e)}else s.ch.sap(null)}}
B.On.prototype={
aF(d){var x=new B.Ns(this.e,C.iH,null,new A.aG(),A.af())
x.aD()
x.saO(null)
return x},
aJ(d,e){e.sY2(this.e)
e.sEj(C.iH)}}
B.IQ.prototype={
aF(d){var x=new B.Bt(this.e,null,new A.aG(),A.af())
x.aD()
x.saO(null)
return x},
aJ(d,e){e.sag5(this.e)}}
B.tY.prototype={
H(d){var x,w,v,u,t,s=this,r=null,q=A.cl(d),p=A.S(d).ax.a===C.a6,o=s.e
if(o==null)o=D.lU
x=y.c
w=q.c
v=q.w
u=p?A.b([w,w,A.ap(60,v.p()>>>16&255,v.p()>>>8&255,v.p()&255),A.ap(90,v.p()>>>16&255,v.p()>>>8&255,v.p()&255),w],x):A.b([w,A.ap(80,v.p()>>>16&255,v.p()>>>8&255,v.p()&255),A.ap(120,v.p()>>>16&255,v.p()>>>8&255,v.p()&255),A.ap(80,v.p()>>>16&255,v.p()>>>8&255,v.p()&255),w],x)
w=q.e
t=p?A.b([w,A.ap(230,w.p()>>>16&255,w.p()>>>8&255,w.p()&255)],x):A.b([w,A.ap(240,w.p()>>>16&255,w.p()>>>8&255,w.p()&255)],x)
x=s.f
w=x?2:3
v=x?10:18
return A.yt(o,new B.IQ(s.d,A.bk(C.M,new B.On(new B.a5i(t),A.b1(s.c,w,C.b9,A.aFu().$4$color$fontSize$fontWeight$letterSpacing(C.l,v,C.bs,x?0.5:2),C.eX),r),C.m,r,r,new A.bg(r,r,r,r,r,new B.nh(C.cm,D.lP,C.cj,u,D.Im,r),C.F),r,r,r,r,r,r,r),r))}}
var z=a.updateTypes(["H(H)"])
B.atk.prototype={
$1(d){return d<=this.a},
$S:563}
B.asM.prototype={
$1(d){var x=this,w=A.w(B.aEL(x.a,x.b,d),B.aEL(x.c,x.d,d),x.e)
w.toString
return w},
$S:564}
B.a6W.prototype={
$1(d){var x=A.w(null,d,this.a)
x.toString
return x},
$S:72}
B.a5i.prototype={
$1(d){return new B.nh(C.cm,D.lP,C.cj,this.a,null,null).aid(d)},
$S:565};(function installTearOffs(){var x=a._instance_1u
var w
x(w=B.Bt.prototype,"gbk","aY",0)
x(w,"gbH","b3",0)
x(w,"gbv","b2",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.n,[B.akp,B.a5h])
x(A.dQ,[B.atk,B.asM,B.a6W,B.a5i])
w(B.nh,B.a5h)
w(B.Cq,A.dR)
x(A.uS,[B.Bt,B.Ns])
x(A.aP,[B.On,B.IQ])
w(B.tY,A.a3)})()
A.eW(b.typeUniverse,JSON.parse('{"Cq":{"dR":[],"dD":[]},"Bt":{"z":[],"az":["z"],"t":[],"an":[]},"Ns":{"z":[],"az":["z"],"t":[],"an":[]},"On":{"aP":[],"as":[],"e":[]},"IQ":{"aP":[],"as":[],"e":[]},"tY":{"a3":[],"e":[]}}'))
var y={a:A.R("ad"),c:A.R("q<x>"),k:A.R("q<e9>"),x:A.R("q<m>"),b:A.R("H"),e:A.R("p"),o:A.R("aCg?"),n:A.R("Cq?"),z:A.R("~()")};(function constants(){var x=a.makeConstList
D.lP=new A.dO(1,1)
D.yb=new A.aL(15,15)
D.lU=new A.cy(D.yb,D.yb,C.D,C.D)
D.Im=x([0,0.3,0.5,0.7,1],A.R("q<H>"))})()};
(a=>{a["T/t063hMwtIO263SBgargoj+9w4="]=a.current})($__dart_deferred_initializers__);