/* Pure IPv4 arithmetic, shared by browser and Node tests. */
(function(root){
'use strict';
function toNumber(value){const p=String(value).trim().split('.');if(p.length!==4||p.some(x=>!/^(0|[1-9][0-9]{0,2})$/.test(x)||Number(x)>255))throw new Error('Adresse IPv4 invalide. Exemple : 192.168.10.42');return p.reduce((n,x)=>n*256+Number(x),0);}
function toIP(n){return [24,16,8,0].map(s=>Math.floor(n/2**s)%256).join('.');}
function prefix(value){if(!/^(0|[1-9][0-9]?)$/.test(String(value))||Number(value)>32)throw new Error('Le préfixe doit être un entier de 0 à 32.');return Number(value);}
function calculate(ip,p){const address=toNumber(ip),bits=prefix(p),size=2**(32-bits),net=Math.floor(address/size)*size,last=net+size-1,mask=2**32-size;return {ip:toIP(address),prefix:bits,cidr:toIP(net)+'/'+bits,network:toIP(net),lastAddress:toIP(last),mask:toIP(mask),wildcard:toIP(size-1),addresses:size,hosts:bits>=31?size:size-2,firstHost:toIP(bits>=31?net:net+1),lastHost:toIP(bits>=31?last:last-1),binary:address.toString(2).padStart(32,'0'),maskBinary:mask.toString(2).padStart(32,'0'),privateAddress:(address>=167772160&&address<=184549375)||(address>=2886729728&&address<=2887778303)||(address>=3232235520&&address<=3232301055),convention:bits===31?'Lien point à point : les deux adresses sont utilisables (convention /31).':bits===32?'Route vers un hôte unique : une seule adresse.':'Réseau et broadcast exclus de la plage des hôtes.'};}
function splitSubnet(result,value,limit=16){const p=prefix(value);if(p<result.prefix)throw new Error('Le nouveau préfixe doit être supérieur ou égal au préfixe initial.');const total=2**(p-result.prefix),start=toNumber(result.network),size=2**(32-p);return {total,rows:Array.from({length:Math.min(total,limit)},(_,i)=>calculate(toIP(start+i*size),p))};}
const api={calculate,splitSubnet,toNumber,toIP};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.NetworkLab=api;
})(typeof globalThis!=='undefined'?globalThis:this);
