((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={mp:function mp(d,e){this.a=d
this.b=e},
av6(d,e,f,g,h,i,j,k){var x
if(k!=null||h!=null)x=B.kE(h,k)
else x=null
return new A.oP(d,i,f,x,j,e,g,null,null)},
oY:function oY(d,e){this.a=d
this.b=e},
mP:function mP(d,e){this.a=d
this.b=e},
q3:function q3(d,e){this.a=d
this.b=e},
oP:function oP(d,e,f,g,h,i,j,k,l){var _=this
_.r=d
_.x=e
_.y=f
_.Q=g
_.at=h
_.c=i
_.d=j
_.e=k
_.a=l},
PY:function PY(d,e){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=null
_.e=_.d=$
_.bT$=d
_.aX$=e
_.c=_.a=null},
aiJ:function aiJ(){},
aiK:function aiK(){},
aiL:function aiL(){},
aiM:function aiM(){},
aiN:function aiN(){},
aiO:function aiO(){},
aiP:function aiP(){},
aiQ:function aiQ(){},
aBN(){var x=new Float64Array(4)
x[3]=1
return new A.ly(x)},
ly:function ly(d){this.a=d}}
B=c[0]
C=c[2]
A=a.updateHolder(c[18],A)
A.mp.prototype={
dS(d){return B.oN(this.a,this.b,d)}}
A.oY.prototype={
dS(d){var x=B.hk(this.a,this.b,d)
x.toString
return x}}
A.mP.prototype={
dS(d){var x=B.cF(this.a,this.b,d)
x.toString
return x}}
A.q3.prototype={
dS(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.em(new Float64Array(3)),a3=new B.em(new Float64Array(3)),a4=A.aBN(),a5=A.aBN(),a6=new B.em(new Float64Array(3)),a7=new B.em(new Float64Array(3))
this.a.SK(a2,a4,a6)
this.b.SK(a3,a5,a7)
x=1-a8
w=a2.lo(x).U(0,a3.lo(a8))
v=a4.lo(x).U(0,a5.lo(a8))
u=new Float64Array(4)
t=new A.ly(u)
t.bS(v)
t.amP()
s=a6.lo(x).U(0,a7.lo(a8))
x=new Float64Array(16)
v=new B.aV(x)
r=u[0]
q=u[1]
p=u[2]
o=u[3]
n=r+r
m=q+q
l=p+p
k=r*n
j=r*m
i=r*l
h=q*m
g=q*l
f=p*l
e=o*n
d=o*m
a0=o*l
a1=w.a
x[0]=1-(h+f)
x[1]=j+a0
x[2]=i-d
x[3]=0
x[4]=j-a0
x[5]=1-(k+f)
x[6]=g+e
x[7]=0
x[8]=i+d
x[9]=g-e
x[10]=1-(k+h)
x[11]=0
x[12]=a1[0]
x[13]=a1[1]
x[14]=a1[2]
x[15]=1
x=s.a
v.op(x[0],x[1],x[2],1)
return v}}
A.oP.prototype={
af(){return new A.PY(null,null)}}
A.PY.prototype={
kY(d){var x,w,v,u=this,t=null,s=u.CW
u.a.toString
x=y.b
u.CW=x.a(d.$3(s,t,new A.aiJ()))
s=y.f
u.cx=s.a(d.$3(u.cx,u.a.x,new A.aiK()))
w=y.d
u.cy=w.a(d.$3(u.cy,u.a.y,new A.aiL()))
v=u.db
u.a.toString
u.db=w.a(d.$3(v,t,new A.aiM()))
u.dx=y.e.a(d.$3(u.dx,u.a.Q,new A.aiN()))
v=u.dy
u.a.toString
u.dy=s.a(d.$3(v,t,new A.aiO()))
u.fr=y.w.a(d.$3(u.fr,u.a.at,new A.aiP()))
v=u.fx
u.a.toString
u.fx=x.a(d.$3(v,t,new A.aiQ()))},
H(d){var x,w,v,u,t,s,r,q=this,p=null,o=q.gdM(),n=q.CW
n=n==null?p:n.a3(o.gt())
x=q.cx
x=x==null?p:x.a3(o.gt())
w=q.cy
w=w==null?p:w.a3(o.gt())
v=q.db
v=v==null?p:v.a3(o.gt())
u=q.dx
u=u==null?p:u.a3(o.gt())
t=q.dy
t=t==null?p:t.a3(o.gt())
s=q.fr
s=s==null?p:s.a3(o.gt())
r=q.fx
r=r==null?p:r.a3(o.gt())
return B.bk(n,q.a.r,C.m,p,u,w,v,p,t,x,s,r,p)}}
A.ly.prototype={
bS(d){var x=d.a,w=this.a,v=x[0]
w.$flags&2&&B.a7(w)
w[0]=v
w[1]=x[1]
w[2]=x[2]
w[3]=x[3]},
XQ(d){var x,w,v,u,t,s=d.a,r=s[0],q=s[4],p=s[8],o=0+r+q+p
if(o>0){x=Math.sqrt(o+1)
r=this.a
r.$flags&2&&B.a7(r)
r[3]=x*0.5
x=0.5/x
r[0]=(s[5]-s[7])*x
r[1]=(s[6]-s[2])*x
r[2]=(s[1]-s[3])*x}else{if(r<q)w=q<p?2:1
else w=r<p?2:0
v=(w+1)%3
u=(w+2)%3
r=w*3
q=v*3
p=u*3
x=Math.sqrt(s[r+w]-s[q+v]-s[p+u]+1)
t=this.a
t.$flags&2&&B.a7(t)
t[w]=x*0.5
x=0.5/x
t[3]=(s[q+u]-s[p+v])*x
t[v]=(s[r+v]+s[q+w])*x
t[u]=(s[r+u]+s[p+w])*x}},
amP(){var x,w,v,u=Math.sqrt(this.guc())
if(u===0)return 0
x=1/u
w=this.a
v=w[0]
w.$flags&2&&B.a7(w)
w[0]=v*x
w[1]=w[1]*x
w[2]=w[2]*x
w[3]=w[3]*x
return u},
guc(){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return w*w+v*v+u*u+t*t},
gE(d){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return Math.sqrt(w*w+v*v+u*u+t*t)},
lo(d){var x=new Float64Array(4),w=new A.ly(x)
w.bS(this)
x[3]=x[3]*d
x[2]=x[2]*d
x[1]=x[1]*d
x[0]=x[0]*d
return w},
a4(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=h[3],f=h[2],e=h[1],d=h[0],a0=a6.gapK(),a1=a0[3],a2=a0[2],a3=a0[1],a4=a0[0]
h=C.c.a4(g,a4)
x=C.c.a4(d,a1)
w=C.c.a4(e,a2)
v=C.c.a4(f,a3)
u=C.c.a4(g,a3)
t=C.c.a4(e,a1)
s=C.c.a4(f,a4)
r=C.c.a4(d,a2)
q=C.c.a4(g,a2)
p=C.c.a4(f,a1)
o=C.c.a4(d,a3)
n=C.c.a4(e,a4)
m=C.c.a4(g,a1)
l=C.c.a4(d,a4)
k=C.c.a4(e,a3)
j=C.c.a4(f,a2)
i=new Float64Array(4)
i[0]=h+x+w-v
i[1]=u+t+s-r
i[2]=q+p+o-n
i[3]=m-l-k-j
return new A.ly(i)},
i(d,e){var x,w,v
if(e==null)return!1
if(e instanceof A.ly){x=this.a
w=x[3]
v=e.a
x=w===v[3]&&x[2]===v[2]&&x[1]===v[1]&&x[0]===v[0]}else x=!1
return x},
gv(d){return B.bu(this.a)},
U(d,e){var x,w=new Float64Array(4),v=new A.ly(w)
v.bS(this)
x=e.a
w[0]=w[0]+x[0]
w[1]=w[1]+x[1]
w[2]=w[2]+x[2]
w[3]=w[3]+x[3]
return v},
W(d,e){var x,w=new Float64Array(4),v=new A.ly(w)
v.bS(this)
x=e.a
w[0]=w[0]-x[0]
w[1]=w[1]-x[1]
w[2]=w[2]-x[2]
w[3]=w[3]-x[3]
return v},
k(d){var x=this.a
return B.k(x[0])+", "+B.k(x[1])+", "+B.k(x[2])+" @ "+B.k(x[3])}}
var z=a.updateTypes(["mp(@)","mP(@)","oY(@)","q3(@)"])
A.aiJ.prototype={
$1(d){return new A.mp(y.k.a(d),null)},
$S:z+0}
A.aiK.prototype={
$1(d){return new A.mP(y.m.a(d),null)},
$S:z+1}
A.aiL.prototype={
$1(d){return new B.kP(y.r.a(d),null)},
$S:136}
A.aiM.prototype={
$1(d){return new B.kP(y.r.a(d),null)},
$S:136}
A.aiN.prototype={
$1(d){return new A.oY(y.a.a(d),null)},
$S:z+2}
A.aiO.prototype={
$1(d){return new A.mP(y.m.a(d),null)},
$S:z+1}
A.aiP.prototype={
$1(d){return new A.q3(y.E.a(d),null)},
$S:z+3}
A.aiQ.prototype={
$1(d){return new A.mp(y.k.a(d),null)},
$S:z+0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.am,[A.mp,A.oY,A.mP,A.q3])
w(A.oP,B.u1)
w(A.PY,B.oR)
x(B.dQ,[A.aiJ,A.aiK,A.aiL,A.aiM,A.aiN,A.aiO,A.aiP,A.aiQ])
w(A.ly,B.n)})()
B.eW(b.typeUniverse,JSON.parse('{"mp":{"am":["fj?"],"ah":["fj?"],"am.T":"fj?","ah.T":"fj?"},"oY":{"am":["ad"],"ah":["ad"],"am.T":"ad","ah.T":"ad"},"mP":{"am":["cn"],"ah":["cn"],"am.T":"cn","ah.T":"cn"},"q3":{"am":["aV"],"ah":["aV"],"am.T":"aV","ah.T":"aV"},"oP":{"W":[],"e":[]},"PY":{"a5":["oP"]}}'))
var y=(function rtii(){var x=B.R
return{k:x("fj"),a:x("ad"),r:x("hY"),m:x("cn"),E:x("aV"),b:x("mp?"),e:x("oY?"),d:x("kP?"),f:x("mP?"),w:x("q3?")}})()};
(a=>{a["4NpwIXq7WmNfZX1mjSn2jchNEO8="]=a.current})($__dart_deferred_initializers__);