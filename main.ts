import f from'fs'
let{readFileSync:F,writeFileSync:W}=f,
M='0Aa46:;?........999999959995999.999.............PTTP0...........58..............4414',
e=process.env,I=e.MAKEFUN_INPUT_DIR??'/input',O=e.MAKEFUN_OUTPUT_DIR??'/output',S=65536,A=()=>new Int32Array(256)
for(let d of f.readdirSync(I)){
d+='/';let B=O+'/'+d,p=F(I+'/'+d+'program.bin'),q=F(I+'/'+d+'input.bin'),w=Buffer.alloc(S),l=0,D=A(),C=A(),m=A(),s=0,k=0,c=0,i=0,n=0,N=p.length,E=-1,o,x,z,a,b,u,v,t,y
for(;n<1e6&&E<0;)if((E=c>>>0>=N?9:!((x=M.charCodeAt(o=p[c])-48)>=0)?5:c+(z=1<<(x>>4)>>1)>=N?9:(n++,s<(a=x>>2&3)?2:s-a+(x&3)>256?3:-1))<0)
c+=1+z,y=s-1,o>15&&o<35?(b=D[y],a=D[(s-=a-1)-1],o>18&&o<23&&!b?E=4:(u=a>>>0,v=b>>>0,D[s-1]=[a+b,a-b,Math.imul(a,b),a/b,a%b,u/v,u%v,-b,a&b,a|b,a^b,~b,a<<b,a>>b,a>>>b,0,a==b,a<b,u<v][o-16]))
:!o?E=0:o<3?D[s++]=o<2?p.readInt8(c-1):p.readInt32LE(c-4):o<4?s--:o==5?(t=D[y],D[y]=D[s-2],D[s-2]=t):o<7?D[s]=D[s++-(o>4?2:1)]:o<8?(t=D[s-3],D.copyWithin(s-3,s-2,s),D[y]=t)
:o<51?(o<49||!D[--s]==o<50)&&(c+=p.readInt16LE(c-2)):o<52?k>63?E=7:(C[k++]=c,c=p[c-2]|p[c-1]<<8):o<53?k?c=C[--k]:E=8
:o<66?(t=D[y],t>>>8?E=6:o<65?D[y]=m[t]:(m[t]=D[s-2],s-=2)):o<81?(t=''+D[--s],l+t.length>S?E=11:l+=w.write(t,l)):o<82?l<S?w[l++]=D[--s]:E=11:o<83?D[s++]=q[i++]??-1:E=D[--s]&255
f.mkdirSync(B,{recursive:!0});W(B+'stdout.bin',w.slice(0,l));W(B+'exit.txt',''+(E<0?10:E))
}
