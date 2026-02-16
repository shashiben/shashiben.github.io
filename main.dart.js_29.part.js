((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
aKa(d,e,f){var x,w,v,u,t
if(f<=C.b.ga5(e))return C.b.ga5(d)
if(f>=C.b.ga3(e))return C.b.ga3(d)
x=C.b.apK(e,new B.aye(f))
w=d[x]
v=x+1
u=d[v]
t=e[x]
t=A.x(w,u,(f-t)/(e[v]-t))
t.toString
return t},
aYE(d,e,f,g,h){var x,w,v=E.Rw(null,null,y.b)
v.F(0,e)
v.F(0,g)
x=A.W(v,v.$ti.c)
x.$flags=1
w=x
x=A.a0(w).h("a_<1,z>")
x=A.W(new A.a_(w,new B.axH(d,e,f,g,h),x),x.h("ay.E"))
x.$flags=1
return new B.ap_(x,w)},
aGb(d,e,f){var x,w,v,u,t
if(d==e)return d
if(d==null)return e.aM(f)
if(e==null)return d.aM(1-f)
x=B.aYE(d.a,d.DI(),e.a,e.DI(),f)
w=A.q4(d.d,e.d,f)
w.toString
v=A.q4(d.e,e.e,f)
v.toString
u=f<0.5
t=u?d.f:e.f
u=u?d.c:e.c
return new B.or(w,v,t,x.a,x.b,u)},
ap_:function ap_(d,e){this.a=d
this.b=e},
aye:function aye(d){this.a=d},
axH:function axH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a8Y:function a8Y(){},
or:function or(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.a=g
_.b=h
_.c=i},
aaG:function aaG(d){this.a=d},
Ex:function Ex(d,e){var _=this
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
Dt:function Dt(d,e,f,g){var _=this
_.v=d
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
Q0:function Q0(d,e,f,g,h){var _=this
_.v=d
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
R8:function R8(d,e,f){this.e=d
this.c=e
this.a=f},
L6:function L6(d,e,f){this.e=d
this.c=e
this.a=f},
vr:function vr(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a8Z:function a8Z(d){this.a=d}},D,E
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[15],B)
D=c[45]
E=c[19]
B.ap_.prototype={}
B.a8Y.prototype={
DI(){var x,w,v,u=this.b
if(u!=null)return u
u=this.a.length
x=1/(u-1)
w=J.aFW(u,y.b)
for(v=0;v<u;++v)w[v]=v*x
return w}}
B.or.prototype={
Gi(d,e){var x=this,w=x.d.aa(e).Z6(d),v=x.e.aa(e).Z6(d),u=x.DI()
return A.a9_(w,v,x.a,u,x.f,null)},
alA(d){return this.Gi(d,null)},
aM(d){var x=this,w=x.a,v=A.a0(w).h("a_<1,z>")
w=A.W(new A.a_(w,new B.aaG(d),v),v.h("ay.E"))
return new B.or(x.d,x.e,x.f,w,x.b,null)},
d3(d,e){var x=B.aGb(d,this,e)
return x},
d4(d,e){var x=B.aGb(this,d,e)
return x},
i(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.V(e)!==A.u(x))return!1
return e instanceof B.or&&e.d.i(0,x.d)&&e.e.i(0,x.e)&&e.f===x.f&&A.cE(e.a,x.a)&&A.cE(e.b,x.b)},
gt(d){var x=this,w=A.b4(x.a),v=x.b
v=v==null?null:A.b4(v)
return A.H(x.d,x.e,x.f,x.c,w,v,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
k(d){var x=this,w=A.b(["begin: "+x.d.k(0),"end: "+x.e.k(0),"colors: "+A.k(x.a)],y.x),v=x.b
if(v!=null)w.push("stops: "+A.k(v))
w.push("tileMode: "+x.f.k(0))
return"LinearGradient("+C.b.bk(w,", ")+")"}}
B.Ex.prototype={
fS(d){var x,w,v=this,u=v.k3
u.toString
x=v.k4
x.toString
w=v.ok
w.toString
y.o.a(v.x)
v.seJ(d.jz(new A.wK(u,x,w,C.kq,A.b([],y.k),C.U)))
v.he(d)
d.e5()}}
B.Dt.prototype={
saj9(d){if(this.v===d)return
this.v=d
this.Y()},
b3(d){var x
if(isFinite(d))return d*this.v
x=this.B$
x=x==null?null:x.aA(C.ar,d,x.gbx())
return x==null?0:x},
b9(d){var x
if(isFinite(d))return d/this.v
x=this.B$
x=x==null?null:x.aA(C.b4,d,x.gbP())
return x==null?0:x},
b8(d){var x
if(isFinite(d))return d/this.v
x=this.B$
x=x==null?null:x.aA(C.aB,d,x.gbF())
return x==null?0:x},
a5_(d){var x,w,v,u,t=d.a,s=d.b
if(t>=s&&d.c>=d.d)return new A.F(A.B(0,t,s),A.B(0,d.c,d.d))
x=this.v
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
w=u}return d.ba(new A.F(t,w))},
bY(d){return this.a5_(d)},
d1(d,e){return this.Le(A.km(this.aA(C.K,d,this.gc0())),e)},
bt(){var x,w=this
w.fy=w.aA(C.K,y.a.a(A.q.prototype.gS.call(w)),w.gc0())
x=w.B$
if(x!=null)x.fg(A.km(w.gq()))}}
B.Q0.prototype={
sa_u(d){if(J.d(this.v,d))return
this.v=d
this.ai()},
sFC(d){if(this.P===d)return
this.P=d
this.ai()},
ghN(){return this.B$!=null},
aF(d,e){var x,w,v,u,t,s=this
if(s.B$!=null){x=y.n
if(x.a(A.q.prototype.gak.call(s))==null)s.ch.sak(new B.Ex(A.n(y.e,y.z),A.ae()))
w=x.a(A.q.prototype.gak.call(s))
w.toString
v=s.gq()
v=s.v.$1(new A.v(0,0,0+v.a,0+v.b))
if(v!=w.k3){w.k3=v
w.dS()}v=s.gq()
u=e.a
t=e.b
v=new A.v(u,t,u+v.a,t+v.b)
if(!v.i(0,w.k4)){w.k4=v
w.dS()}v=s.P
if(v!==w.ok){w.ok=v
w.dS()}x=x.a(A.q.prototype.gak.call(s))
x.toString
d.jA(x,A.e1.prototype.gdH.call(s),e)}else s.ch.sak(null)}}
B.R8.prototype={
aD(d){var x=new B.Q0(this.e,C.fu,null,new A.aH(),A.ae())
x.aC()
x.saP(null)
return x},
aJ(d,e){e.sa_u(this.e)
e.sFC(C.fu)}}
B.L6.prototype={
aD(d){var x=new B.Dt(this.e,null,new A.aH(),A.ae())
x.aC()
x.saP(null)
return x},
aJ(d,e){e.saj9(this.e)}}
B.vr.prototype={
J(d){var x,w,v,u,t,s=this,r=null,q=A.cz(d),p=A.T(d).ax.a===C.a9,o=s.e
if(o==null)o=D.mI
x=y.c
w=q.c
v=q.w
u=p?A.b([w,w,A.as(60,v.u()>>>16&255,v.u()>>>8&255,v.u()&255),A.as(90,v.u()>>>16&255,v.u()>>>8&255,v.u()&255),w],x):A.b([w,A.as(80,v.u()>>>16&255,v.u()>>>8&255,v.u()&255),A.as(120,v.u()>>>16&255,v.u()>>>8&255,v.u()&255),A.as(80,v.u()>>>16&255,v.u()>>>8&255,v.u()&255),w],x)
w=q.e
t=p?A.b([w,A.as(230,w.u()>>>16&255,w.u()>>>8&255,w.u()&255)],x):A.b([w,A.as(240,w.u()>>>16&255,w.u()>>>8&255,w.u()&255)],x)
x=s.f
w=x?2:3
v=x?10:18
return A.Ad(o,new B.L6(s.d,A.bq(C.I,new B.R8(new B.a8Z(t),A.b8(s.c,w,C.bd,A.aL3().$4$color$fontSize$fontWeight$letterSpacing(C.l,v,C.bx,x?0.5:2),C.ff),r),C.m,r,r,new A.bj(r,r,r,r,r,new B.or(C.cx,D.mB,C.c5,u,D.ME,r),C.F),r,r,r,r,r,r,r),r))}}
var z=a.updateTypes(["G(G)"])
B.aye.prototype={
$1(d){return d<=this.a},
$S:571}
B.axH.prototype={
$1(d){var x=this,w=A.x(B.aKa(x.a,x.b,d),B.aKa(x.c,x.d,d),x.e)
w.toString
return w},
$S:572}
B.aaG.prototype={
$1(d){var x=A.x(null,d,this.a)
x.toString
return x},
$S:80}
B.a8Z.prototype={
$1(d){return new B.or(C.cx,D.mB,C.c5,this.a,null,null).alA(d)},
$S:573};(function installTearOffs(){var x=a._instance_1u
var w
x(w=B.Dt.prototype,"gbx","b3",0)
x(w,"gbP","b9",0)
x(w,"gbF","b8",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.o,[B.ap_,B.a8Y])
x(A.eb,[B.aye,B.axH,B.aaG,B.a8Z])
w(B.or,B.a8Y)
w(B.Ex,A.ec)
x(A.wq,[B.Dt,B.Q0])
x(A.aR,[B.R8,B.L6])
w(B.vr,A.a5)})()
A.fP(b.typeUniverse,JSON.parse('{"Ex":{"ec":[],"dX":[]},"Dt":{"w":[],"aG":["w"],"q":[],"an":[]},"Q0":{"w":[],"aG":["w"],"q":[],"an":[]},"R8":{"aR":[],"ap":[],"e":[]},"L6":{"aR":[],"ap":[],"e":[]},"vr":{"a5":[],"e":[]}}'))
var y={a:A.L("ag"),c:A.L("l<z>"),k:A.L("l<eE>"),x:A.L("l<f>"),b:A.L("G"),e:A.L("p"),o:A.L("aHs?"),n:A.L("Ex?"),z:A.L("~()")};(function constants(){var x=a.makeConstList
D.mB=new A.e9(1,1)
D.zf=new A.aV(15,15)
D.mI=new A.cM(D.zf,D.zf,C.D,C.D)
D.ME=x([0,0.3,0.5,0.7,1],A.L("l<G>"))})()};
(a=>{a["2pGpQVje/ZwVtlU1JWyWGclQx40="]=a.current})($__dart_deferred_initializers__);