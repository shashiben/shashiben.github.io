((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={nx:function nx(d,e){this.a=d
this.b=e},
aAc(d,e,f,g,h,i,j,k){var x
if(k!=null||h!=null)x=B.lG(h,k)
else x=null
return new A.q6(d,i,f,x,j,e,g,null,null)},
qf:function qf(d,e){this.a=d
this.b=e},
nX:function nX(d,e){this.a=d
this.b=e},
rp:function rp(d,e){this.a=d
this.b=e},
q6:function q6(d,e,f,g,h,i,j,k,l){var _=this
_.r=d
_.x=e
_.y=f
_.Q=g
_.at=h
_.c=i
_.d=j
_.e=k
_.a=l},
T_:function T_(d,e){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=null
_.e=_.d=$
_.c1$=d
_.b1$=e
_.c=_.a=null},
ani:function ani(){},
anj:function anj(){},
ank:function ank(){},
anl:function anl(){},
anm:function anm(){},
ann:function ann(){},
ano:function ano(){},
anp:function anp(){},
aGZ(){var x=new Float64Array(4)
x[3]=1
return new A.mF(x)},
mF:function mF(d){this.a=d}}
B=c[0]
C=c[2]
A=a.updateHolder(c[17],A)
A.nx.prototype={
e4(d){return B.q4(this.a,this.b,d)}}
A.qf.prototype={
e4(d){var x=B.hW(this.a,this.b,d)
x.toString
return x}}
A.nX.prototype={
e4(d){var x=B.cU(this.a,this.b,d)
x.toString
return x}}
A.rp.prototype={
e4(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.eT(new Float64Array(3)),a3=new B.eT(new Float64Array(3)),a4=A.aGZ(),a5=A.aGZ(),a6=new B.eT(new Float64Array(3)),a7=new B.eT(new Float64Array(3))
this.a.UH(a2,a4,a6)
this.b.UH(a3,a5,a7)
x=1-a8
w=a2.lY(x).T(0,a3.lY(a8))
v=a4.lY(x).T(0,a5.lY(a8))
u=new Float64Array(4)
t=new A.mF(u)
t.bC(v)
t.aqL()
s=a6.lY(x).T(0,a7.lY(a8))
x=new Float64Array(16)
v=new B.b_(x)
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
v.iZ(x[0],x[1],x[2],1)
return v}}
A.q6.prototype={
af(){return new A.T_(null,null)}}
A.T_.prototype={
lx(d){var x,w,v,u=this,t=null,s=u.CW
u.a.toString
x=y.b
u.CW=x.a(d.$3(s,t,new A.ani()))
s=y.f
u.cx=s.a(d.$3(u.cx,u.a.x,new A.anj()))
w=y.d
u.cy=w.a(d.$3(u.cy,u.a.y,new A.ank()))
v=u.db
u.a.toString
u.db=w.a(d.$3(v,t,new A.anl()))
u.dx=y.e.a(d.$3(u.dx,u.a.Q,new A.anm()))
v=u.dy
u.a.toString
u.dy=s.a(d.$3(v,t,new A.ann()))
u.fr=y.w.a(d.$3(u.fr,u.a.at,new A.ano()))
v=u.fx
u.a.toString
u.fx=x.a(d.$3(v,t,new A.anp()))},
J(d){var x,w,v,u,t,s,r,q=this,p=null,o=q.gdX(),n=q.CW
n=n==null?p:n.a7(o.gn())
x=q.cx
x=x==null?p:x.a7(o.gn())
w=q.cy
w=w==null?p:w.a7(o.gn())
v=q.db
v=v==null?p:v.a7(o.gn())
u=q.dx
u=u==null?p:u.a7(o.gn())
t=q.dy
t=t==null?p:t.a7(o.gn())
s=q.fr
s=s==null?p:s.a7(o.gn())
r=q.fx
r=r==null?p:r.a7(o.gn())
return B.bq(n,q.a.r,C.m,p,u,w,v,p,t,x,s,r,p)}}
A.mF.prototype={
bC(d){var x=d.a,w=this.a,v=x[0]
w.$flags&2&&B.a6(w)
w[0]=v
w[1]=x[1]
w[2]=x[2]
w[3]=x[3]},
a_f(d){var x,w,v,u,t,s=d.a,r=s[0],q=s[4],p=s[8],o=0+r+q+p
if(o>0){x=Math.sqrt(o+1)
r=this.a
r.$flags&2&&B.a6(r)
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
t.$flags&2&&B.a6(t)
t[w]=x*0.5
x=0.5/x
t[3]=(s[q+u]-s[p+v])*x
t[v]=(s[r+v]+s[q+w])*x
t[u]=(s[r+u]+s[p+w])*x}},
aqL(){var x,w,v,u=Math.sqrt(this.gve())
if(u===0)return 0
x=1/u
w=this.a
v=w[0]
w.$flags&2&&B.a6(w)
w[0]=v*x
w[1]=w[1]*x
w[2]=w[2]*x
w[3]=w[3]*x
return u},
gve(){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return w*w+v*v+u*u+t*t},
gG(d){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return Math.sqrt(w*w+v*v+u*u+t*t)},
lY(d){var x=new Float64Array(4),w=new A.mF(x)
w.bC(this)
x[3]=x[3]*d
x[2]=x[2]*d
x[1]=x[1]*d
x[0]=x[0]*d
return w},
a4(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=h[3],f=h[2],e=h[1],d=h[0],a0=a6.gau2(),a1=a0[3],a2=a0[2],a3=a0[1],a4=a0[0]
h=C.d.a4(g,a4)
x=C.d.a4(d,a1)
w=C.d.a4(e,a2)
v=C.d.a4(f,a3)
u=C.d.a4(g,a3)
t=C.d.a4(e,a1)
s=C.d.a4(f,a4)
r=C.d.a4(d,a2)
q=C.d.a4(g,a2)
p=C.d.a4(f,a1)
o=C.d.a4(d,a3)
n=C.d.a4(e,a4)
m=C.d.a4(g,a1)
l=C.d.a4(d,a4)
k=C.d.a4(e,a3)
j=C.d.a4(f,a2)
i=new Float64Array(4)
i[0]=h+x+w-v
i[1]=u+t+s-r
i[2]=q+p+o-n
i[3]=m-l-k-j
return new A.mF(i)},
i(d,e){var x,w,v
if(e==null)return!1
if(e instanceof A.mF){x=this.a
w=x[3]
v=e.a
x=w===v[3]&&x[2]===v[2]&&x[1]===v[1]&&x[0]===v[0]}else x=!1
return x},
gt(d){return B.b4(this.a)},
T(d,e){var x,w=new Float64Array(4),v=new A.mF(w)
v.bC(this)
x=e.a
w[0]=w[0]+x[0]
w[1]=w[1]+x[1]
w[2]=w[2]+x[2]
w[3]=w[3]+x[3]
return v},
U(d,e){var x,w=new Float64Array(4),v=new A.mF(w)
v.bC(this)
x=e.a
w[0]=w[0]-x[0]
w[1]=w[1]-x[1]
w[2]=w[2]-x[2]
w[3]=w[3]-x[3]
return v},
k(d){var x=this.a
return B.k(x[0])+", "+B.k(x[1])+", "+B.k(x[2])+" @ "+B.k(x[3])}}
var z=a.updateTypes(["nx(@)","nX(@)","qf(@)","rp(@)"])
A.ani.prototype={
$1(d){return new A.nx(y.k.a(d),null)},
$S:z+0}
A.anj.prototype={
$1(d){return new A.nX(y.m.a(d),null)},
$S:z+1}
A.ank.prototype={
$1(d){return new B.lT(y.r.a(d),null)},
$S:184}
A.anl.prototype={
$1(d){return new B.lT(y.r.a(d),null)},
$S:184}
A.anm.prototype={
$1(d){return new A.qf(y.a.a(d),null)},
$S:z+2}
A.ann.prototype={
$1(d){return new A.nX(y.m.a(d),null)},
$S:z+1}
A.ano.prototype={
$1(d){return new A.rp(y.E.a(d),null)},
$S:z+3}
A.anp.prototype={
$1(d){return new A.nx(y.k.a(d),null)},
$S:z+0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.ar,[A.nx,A.qf,A.nX,A.rp])
w(A.q6,B.vv)
w(A.T_,B.q8)
x(B.eb,[A.ani,A.anj,A.ank,A.anl,A.anm,A.ann,A.ano,A.anp])
w(A.mF,B.o)})()
B.fP(b.typeUniverse,JSON.parse('{"nx":{"ar":["fS?"],"am":["fS?"],"ar.T":"fS?","am.T":"fS?"},"qf":{"ar":["ag"],"am":["ag"],"ar.T":"ag","am.T":"ag"},"nX":{"ar":["cB"],"am":["cB"],"ar.T":"cB","am.T":"cB"},"rp":{"ar":["b_"],"am":["b_"],"ar.T":"b_","am.T":"b_"},"q6":{"Y":[],"e":[]},"T_":{"a8":["q6"]}}'))
var y=(function rtii(){var x=B.L
return{k:x("fS"),a:x("ag"),r:x("iI"),m:x("cB"),E:x("b_"),b:x("nx?"),e:x("qf?"),d:x("lT?"),f:x("nX?"),w:x("rp?")}})()};
(a=>{a["J5bZ2jbNgUN6mdf2CM0QtDRevTY="]=a.current})($__dart_deferred_initializers__);