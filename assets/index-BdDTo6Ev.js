const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./collision-world-oruGZRLx.js","./three.core-DiduAeGt.js"])))=>i.map(i=>d[i]);
import{c as so,N as kt,S as co,C as We,F as xr,M as nn,V as Pe,R as lo,a as _t,w as Di,W as oa,b as pn,d as at,L as Tn,H as ii,U as an,D as yt,B as xt,e as Dn,f as ai,p as fo,E as uo,g as ut,P as An,A as po,h as ui,i as It,j as Qn,k as Yi,l as Un,m as yn,n as Ar,o as ho,q as cn,r as Jn,s as mo,t as _o,u as En,O as go,v as vo,x as Eo,y as So,z as Mo,G as To,I as xo,J as Ao,K as Ro,Q as bo,T as Co,X as wo,Y as Po,Z as Lo,_ as Do,$ as Uo,a0 as yo,a1 as Io,a2 as pi,a3 as ln,a4 as Hn,a5 as No,a6 as Rn,a7 as Oo,a8 as Fo,a9 as Bo,aa as Go,ab as Rr,ac as Ho,ad as Vo,ae as ko,af as zo,ag as He,ah as Wo,ai as Xo,aj as qo,ak as rn,al as jn,am as un,an as rt,ao as br,ap as en,aq as Ut,ar as ei,as as Cr,at as wr,au as Pr,av as Lr,aw as Yo,ax as Ko,ay as $o,az as Zo,aA as Dr,aB as Qt,aC as Qo,aD as Jo,aE as jo,aF as Ur,aG as es,aH as yr,aI as Ir,aJ as hi,aK as mi,aL as _i,aM as gi,aN as $e,aO as sa,aP as ca,aQ as la,aR as da,aS as fa,aT as ua,aU as pa,aV as ha,aW as ma,aX as _a,aY as ga,aZ as va,a_ as Ea,a$ as Sa,b0 as Ma,b1 as Ta,b2 as xa,b3 as Aa,b4 as Ra,b5 as ba,b6 as Ca,b7 as wa,b8 as Pa,b9 as La,ba as Da,bb as Ua,bc as ya,bd as Ia,be as Ui,bf as yi,bg as Ii,bh as Ni,bi as Oi,bj as Fi,bk as Bi,bl as ts,bm as Na,bn as ns,bo as Kn,bp as is,bq as Oa,br as Fa,bs as Ba,bt as Gi,bu as Hi,bv as as,bw as Nr,bx as rs,by as ri,bz as os,bA as ss,bB as Or,bC as hn,bD as Ga,bE as Fr,bF as Ha,bG as Br,bH as In,bI as mn,bJ as cs,bK as ti,bL as ls,bM as ds,bN as fs,bO as Va,bP as ht,bQ as us,bR as ps,bS as hs,bT as ms,bU as _s,bV as Gr,bW as gs,bX as vs,bY as Es,bZ as Ss,b_ as Ms,b$ as Ts,c0 as xs,c1 as As,c2 as Rs,c3 as bs,c4 as Cs,c5 as ws,c6 as Jt,c7 as At,c8 as wt,c9 as ka,ca as Ps,cb as Ls,cc as Ds,cd as Vn,ce as Hr,cf as Vr,cg as Us,ch as ys,ci as Is,cj as Ns,ck as Os,cl as Fs,cm as Bs}from"./three.core-DiduAeGt.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();const Gs="modulepreload",Hs=function(e,n){return new URL(e,n).href},za={},Vi=function(n,t,i){let a=Promise.resolve();if(t&&t.length>0){let c=function(v){return Promise.all(v.map(p=>Promise.resolve(p).then(E=>({status:"fulfilled",value:E}),E=>({status:"rejected",reason:E}))))};const s=document.getElementsByTagName("link"),g=document.querySelector("meta[property=csp-nonce]"),u=g?.nonce||g?.getAttribute("nonce");a=c(t.map(v=>{if(v=Hs(v,i),v in za)return;za[v]=!0;const p=v.endsWith(".css"),E=p?'[rel="stylesheet"]':"";if(!!i)for(let x=s.length-1;x>=0;x--){const d=s[x];if(d.href===v&&(!p||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${v}"]${E}`))return;const P=document.createElement("link");if(P.rel=p?"stylesheet":Gs,p||(P.as="script"),P.crossOrigin="",P.href=v,u&&P.setAttribute("nonce",u),document.head.appendChild(P),p)return new Promise((x,d)=>{P.addEventListener("load",x),P.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${v}`)))})}))}function r(c){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=c,window.dispatchEvent(s),!s.defaultPrevented)throw c}return a.then(c=>{for(const s of c||[])s.status==="rejected"&&r(s.reason);return n().catch(r)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function kr(){let e=null,n=!1,t=null,i=null;function a(r,c){t(r,c),i=e.requestAnimationFrame(a)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(a),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(r){t=r},setContext:function(r){e=r}}}function Vs(e){const n=new WeakMap;function t(s,g){const u=s.array,v=s.usage,p=u.byteLength,E=e.createBuffer();e.bindBuffer(g,E),e.bufferData(g,u,v),s.onUploadCallback();let T;if(u instanceof Float32Array)T=e.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)T=e.HALF_FLOAT;else if(u instanceof Uint16Array)s.isFloat16BufferAttribute?T=e.HALF_FLOAT:T=e.UNSIGNED_SHORT;else if(u instanceof Int16Array)T=e.SHORT;else if(u instanceof Uint32Array)T=e.UNSIGNED_INT;else if(u instanceof Int32Array)T=e.INT;else if(u instanceof Int8Array)T=e.BYTE;else if(u instanceof Uint8Array)T=e.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)T=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:E,type:T,bytesPerElement:u.BYTES_PER_ELEMENT,version:s.version,size:p}}function i(s,g,u){const v=g.array,p=g.updateRanges;if(e.bindBuffer(u,s),p.length===0)e.bufferSubData(u,0,v);else{p.sort((T,P)=>T.start-P.start);let E=0;for(let T=1;T<p.length;T++){const P=p[E],x=p[T];x.start<=P.start+P.count+1?P.count=Math.max(P.count,x.start+x.count-P.start):(++E,p[E]=x)}p.length=E+1;for(let T=0,P=p.length;T<P;T++){const x=p[T];e.bufferSubData(u,x.start*v.BYTES_PER_ELEMENT,v,x.start,x.count)}g.clearUpdateRanges()}g.onUploadCallback()}function a(s){return s.isInterleavedBufferAttribute&&(s=s.data),n.get(s)}function r(s){s.isInterleavedBufferAttribute&&(s=s.data);const g=n.get(s);g&&(e.deleteBuffer(g.buffer),n.delete(s))}function c(s,g){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const v=n.get(s);(!v||v.version<s.version)&&n.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const u=n.get(s);if(u===void 0)n.set(s,t(s,g));else if(u.version<s.version){if(u.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,s,g),u.version=s.version}}return{get:a,remove:r,update:c}}var ks=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zs=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ws=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xs=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qs=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ys=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ks=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$s=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zs=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Qs=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Js=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,js=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ec=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ic=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ac=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,uc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pc=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_c=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ec=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Mc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ac=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Rc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ic=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Nc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Oc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vc=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$c=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qc=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,el=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tl=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nl=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,il=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,al=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rl=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ol=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sl=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cl=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ll=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dl=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fl=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ul=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pl=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hl=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ml=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_l=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gl=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vl=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,El=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sl=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ml=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tl=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xl=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Al=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rl=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bl=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cl=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wl=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pl=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ll=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dl=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ul=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yl=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Il=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nl=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ol=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hl=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vl=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kl=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wl=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ql=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yl=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kl=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$l=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zl=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ql=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jl=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jl=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ed=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,td=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,id=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ad=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,od=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ld=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ud=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,md=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_d=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ed=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:ks,alphahash_pars_fragment:zs,alphamap_fragment:Ws,alphamap_pars_fragment:Xs,alphatest_fragment:qs,alphatest_pars_fragment:Ys,aomap_fragment:Ks,aomap_pars_fragment:$s,batching_pars_vertex:Zs,batching_vertex:Qs,begin_vertex:Js,beginnormal_vertex:js,bsdfs:ec,iridescence_fragment:tc,bumpmap_pars_fragment:nc,clipping_planes_fragment:ic,clipping_planes_pars_fragment:ac,clipping_planes_pars_vertex:rc,clipping_planes_vertex:oc,color_fragment:sc,color_pars_fragment:cc,color_pars_vertex:lc,color_vertex:dc,common:fc,cube_uv_reflection_fragment:uc,defaultnormal_vertex:pc,displacementmap_pars_vertex:hc,displacementmap_vertex:mc,emissivemap_fragment:_c,emissivemap_pars_fragment:gc,colorspace_fragment:vc,colorspace_pars_fragment:Ec,envmap_fragment:Sc,envmap_common_pars_fragment:Mc,envmap_pars_fragment:Tc,envmap_pars_vertex:xc,envmap_physical_pars_fragment:Ic,envmap_vertex:Ac,fog_vertex:Rc,fog_pars_vertex:bc,fog_fragment:Cc,fog_pars_fragment:wc,gradientmap_pars_fragment:Pc,lightmap_pars_fragment:Lc,lights_lambert_fragment:Dc,lights_lambert_pars_fragment:Uc,lights_pars_begin:yc,lights_toon_fragment:Nc,lights_toon_pars_fragment:Oc,lights_phong_fragment:Fc,lights_phong_pars_fragment:Bc,lights_physical_fragment:Gc,lights_physical_pars_fragment:Hc,lights_fragment_begin:Vc,lights_fragment_maps:kc,lights_fragment_end:zc,logdepthbuf_fragment:Wc,logdepthbuf_pars_fragment:Xc,logdepthbuf_pars_vertex:qc,logdepthbuf_vertex:Yc,map_fragment:Kc,map_pars_fragment:$c,map_particle_fragment:Zc,map_particle_pars_fragment:Qc,metalnessmap_fragment:Jc,metalnessmap_pars_fragment:jc,morphinstance_vertex:el,morphcolor_vertex:tl,morphnormal_vertex:nl,morphtarget_pars_vertex:il,morphtarget_vertex:al,normal_fragment_begin:rl,normal_fragment_maps:ol,normal_pars_fragment:sl,normal_pars_vertex:cl,normal_vertex:ll,normalmap_pars_fragment:dl,clearcoat_normal_fragment_begin:fl,clearcoat_normal_fragment_maps:ul,clearcoat_pars_fragment:pl,iridescence_pars_fragment:hl,opaque_fragment:ml,packing:_l,premultiplied_alpha_fragment:gl,project_vertex:vl,dithering_fragment:El,dithering_pars_fragment:Sl,roughnessmap_fragment:Ml,roughnessmap_pars_fragment:Tl,shadowmap_pars_fragment:xl,shadowmap_pars_vertex:Al,shadowmap_vertex:Rl,shadowmask_pars_fragment:bl,skinbase_vertex:Cl,skinning_pars_vertex:wl,skinning_vertex:Pl,skinnormal_vertex:Ll,specularmap_fragment:Dl,specularmap_pars_fragment:Ul,tonemapping_fragment:yl,tonemapping_pars_fragment:Il,transmission_fragment:Nl,transmission_pars_fragment:Ol,uv_pars_fragment:Fl,uv_pars_vertex:Bl,uv_vertex:Gl,worldpos_vertex:Hl,background_vert:Vl,background_frag:kl,backgroundCube_vert:zl,backgroundCube_frag:Wl,cube_vert:Xl,cube_frag:ql,depth_vert:Yl,depth_frag:Kl,distanceRGBA_vert:$l,distanceRGBA_frag:Zl,equirect_vert:Ql,equirect_frag:Jl,linedashed_vert:jl,linedashed_frag:ed,meshbasic_vert:td,meshbasic_frag:nd,meshlambert_vert:id,meshlambert_frag:ad,meshmatcap_vert:rd,meshmatcap_frag:od,meshnormal_vert:sd,meshnormal_frag:cd,meshphong_vert:ld,meshphong_frag:dd,meshphysical_vert:fd,meshphysical_frag:ud,meshtoon_vert:pd,meshtoon_frag:hd,points_vert:md,points_frag:_d,shadow_vert:gd,shadow_frag:vd,sprite_vert:Ed,sprite_frag:Sd},ie={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Ct={basic:{uniforms:ht([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:ht([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new We(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:ht([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:ht([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:ht([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new We(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:ht([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:ht([ie.points,ie.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:ht([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:ht([ie.common,ie.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:ht([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:ht([ie.sprite,ie.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:ht([ie.common,ie.displacementmap,{referencePosition:{value:new Pe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:ht([ie.lights,ie.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Ct.physical={uniforms:ht([Ct.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const kn={r:0,b:0,g:0},Yt=new Fr,Md=new nn;function Td(e,n,t,i,a,r,c){const s=new We(0);let g=r===!0?0:1,u,v,p=null,E=0,T=null;function P(R){let M=R.isScene===!0?R.background:null;return M&&M.isTexture&&(M=(R.backgroundBlurriness>0?t:n).get(M)),M}function x(R){let M=!1;const U=P(R);U===null?o(s,g):U&&U.isColor&&(o(U,1),M=!0);const C=e.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,c):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(e.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function d(R,M){const U=P(M);U&&(U.isCubeTexture||U.mapping===ri)?(v===void 0&&(v=new rt(new hn(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:Ga(Ct.backgroundCube.uniforms),vertexShader:Ct.backgroundCube.vertexShader,fragmentShader:Ct.backgroundCube.fragmentShader,side:xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(C,O,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),Yt.copy(M.backgroundRotation),Yt.x*=-1,Yt.y*=-1,Yt.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Yt.y*=-1,Yt.z*=-1),v.material.uniforms.envMap.value=U,v.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(Md.makeRotationFromEuler(Yt)),v.material.toneMapped=at.getTransfer(U.colorSpace)!==$e,(p!==U||E!==U.version||T!==e.toneMapping)&&(v.material.needsUpdate=!0,p=U,E=U.version,T=e.toneMapping),v.layers.enableAll(),R.unshift(v,v.geometry,v.material,0,0,null)):U&&U.isTexture&&(u===void 0&&(u=new rt(new Lr(2,2),new rn({name:"BackgroundMaterial",uniforms:Ga(Ct.background.uniforms),vertexShader:Ct.background.vertexShader,fragmentShader:Ct.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(u)),u.material.uniforms.t2D.value=U,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.toneMapped=at.getTransfer(U.colorSpace)!==$e,U.matrixAutoUpdate===!0&&U.updateMatrix(),u.material.uniforms.uvTransform.value.copy(U.matrix),(p!==U||E!==U.version||T!==e.toneMapping)&&(u.material.needsUpdate=!0,p=U,E=U.version,T=e.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null))}function o(R,M){R.getRGB(kn,Or(e)),i.buffers.color.setClear(kn.r,kn.g,kn.b,M,c)}function L(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return s},setClearColor:function(R,M=1){s.set(R),g=M,o(s,g)},getClearAlpha:function(){return g},setClearAlpha:function(R){g=R,o(s,g)},render:x,addToRenderList:d,dispose:L}}function xd(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=E(null);let r=a,c=!1;function s(h,D,B,X,q){let $=!1;const W=p(X,B,D);r!==W&&(r=W,u(r.object)),$=T(h,X,B,q),$&&P(h,X,B,q),q!==null&&n.update(q,e.ELEMENT_ARRAY_BUFFER),($||c)&&(c=!1,M(h,D,B,X),q!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(q).buffer))}function g(){return e.createVertexArray()}function u(h){return e.bindVertexArray(h)}function v(h){return e.deleteVertexArray(h)}function p(h,D,B){const X=B.wireframe===!0;let q=i[h.id];q===void 0&&(q={},i[h.id]=q);let $=q[D.id];$===void 0&&($={},q[D.id]=$);let W=$[X];return W===void 0&&(W=E(g()),$[X]=W),W}function E(h){const D=[],B=[],X=[];for(let q=0;q<t;q++)D[q]=0,B[q]=0,X[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:X,object:h,attributes:{},index:null}}function T(h,D,B,X){const q=r.attributes,$=D.attributes;let W=0;const ne=B.getAttributes();for(const H in ne)if(ne[H].location>=0){const xe=q[H];let Ie=$[H];if(Ie===void 0&&(H==="instanceMatrix"&&h.instanceMatrix&&(Ie=h.instanceMatrix),H==="instanceColor"&&h.instanceColor&&(Ie=h.instanceColor)),xe===void 0||xe.attribute!==Ie||Ie&&xe.data!==Ie.data)return!0;W++}return r.attributesNum!==W||r.index!==X}function P(h,D,B,X){const q={},$=D.attributes;let W=0;const ne=B.getAttributes();for(const H in ne)if(ne[H].location>=0){let xe=$[H];xe===void 0&&(H==="instanceMatrix"&&h.instanceMatrix&&(xe=h.instanceMatrix),H==="instanceColor"&&h.instanceColor&&(xe=h.instanceColor));const Ie={};Ie.attribute=xe,xe&&xe.data&&(Ie.data=xe.data),q[H]=Ie,W++}r.attributes=q,r.attributesNum=W,r.index=X}function x(){const h=r.newAttributes;for(let D=0,B=h.length;D<B;D++)h[D]=0}function d(h){o(h,0)}function o(h,D){const B=r.newAttributes,X=r.enabledAttributes,q=r.attributeDivisors;B[h]=1,X[h]===0&&(e.enableVertexAttribArray(h),X[h]=1),q[h]!==D&&(e.vertexAttribDivisor(h,D),q[h]=D)}function L(){const h=r.newAttributes,D=r.enabledAttributes;for(let B=0,X=D.length;B<X;B++)D[B]!==h[B]&&(e.disableVertexAttribArray(B),D[B]=0)}function R(h,D,B,X,q,$,W){W===!0?e.vertexAttribIPointer(h,D,B,q,$):e.vertexAttribPointer(h,D,B,X,q,$)}function M(h,D,B,X){x();const q=X.attributes,$=B.getAttributes(),W=D.defaultAttributeValues;for(const ne in $){const H=$[ne];if(H.location>=0){let ve=q[ne];if(ve===void 0&&(ne==="instanceMatrix"&&h.instanceMatrix&&(ve=h.instanceMatrix),ne==="instanceColor"&&h.instanceColor&&(ve=h.instanceColor)),ve!==void 0){const xe=ve.normalized,Ie=ve.itemSize,Ve=n.get(ve);if(Ve===void 0)continue;const nt=Ve.buffer,et=Ve.type,Xe=Ve.bytesPerElement,k=et===e.INT||et===e.UNSIGNED_INT||ve.gpuType===Dr;if(ve.isInterleavedBufferAttribute){const K=ve.data,le=K.stride,we=ve.offset;if(K.isInstancedInterleavedBuffer){for(let Se=0;Se<H.locationSize;Se++)o(H.location+Se,K.meshPerAttribute);h.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Se=0;Se<H.locationSize;Se++)d(H.location+Se);e.bindBuffer(e.ARRAY_BUFFER,nt);for(let Se=0;Se<H.locationSize;Se++)R(H.location+Se,Ie/H.locationSize,et,xe,le*Xe,(we+Ie/H.locationSize*Se)*Xe,k)}else{if(ve.isInstancedBufferAttribute){for(let K=0;K<H.locationSize;K++)o(H.location+K,ve.meshPerAttribute);h.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let K=0;K<H.locationSize;K++)d(H.location+K);e.bindBuffer(e.ARRAY_BUFFER,nt);for(let K=0;K<H.locationSize;K++)R(H.location+K,Ie/H.locationSize,et,xe,Ie*Xe,Ie/H.locationSize*K*Xe,k)}}else if(W!==void 0){const xe=W[ne];if(xe!==void 0)switch(xe.length){case 2:e.vertexAttrib2fv(H.location,xe);break;case 3:e.vertexAttrib3fv(H.location,xe);break;case 4:e.vertexAttrib4fv(H.location,xe);break;default:e.vertexAttrib1fv(H.location,xe)}}}}L()}function U(){V();for(const h in i){const D=i[h];for(const B in D){const X=D[B];for(const q in X)v(X[q].object),delete X[q];delete D[B]}delete i[h]}}function C(h){if(i[h.id]===void 0)return;const D=i[h.id];for(const B in D){const X=D[B];for(const q in X)v(X[q].object),delete X[q];delete D[B]}delete i[h.id]}function O(h){for(const D in i){const B=i[D];if(B[h.id]===void 0)continue;const X=B[h.id];for(const q in X)v(X[q].object),delete X[q];delete B[h.id]}}function V(){_(),c=!0,r!==a&&(r=a,u(r.object))}function _(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:s,reset:V,resetDefaultState:_,dispose:U,releaseStatesOfGeometry:C,releaseStatesOfProgram:O,initAttributes:x,enableAttribute:d,disableUnusedAttributes:L}}function Ad(e,n,t){let i;function a(u){i=u}function r(u,v){e.drawArrays(i,u,v),t.update(v,i,1)}function c(u,v,p){p!==0&&(e.drawArraysInstanced(i,u,v,p),t.update(v,i,p))}function s(u,v,p){if(p===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,v,0,p);let T=0;for(let P=0;P<p;P++)T+=v[P];t.update(T,i,1)}function g(u,v,p,E){if(p===0)return;const T=n.get("WEBGL_multi_draw");if(T===null)for(let P=0;P<u.length;P++)c(u[P],v[P],E[P]);else{T.multiDrawArraysInstancedWEBGL(i,u,0,v,0,E,0,p);let P=0;for(let x=0;x<p;x++)P+=v[x]*E[x];t.update(P,i,1)}}this.setMode=a,this.render=r,this.renderInstances=c,this.renderMultiDraw=s,this.renderMultiDrawInstances=g}function Rd(e,n,t,i){let a;function r(){if(a!==void 0)return a;if(n.has("EXT_texture_filter_anisotropic")===!0){const O=n.get("EXT_texture_filter_anisotropic");a=e.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(O){return!(O!==It&&i.convert(O)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(O){const V=O===ii&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(O!==an&&i.convert(O)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Qt&&!V)}function g(O){if(O==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const v=g(u);v!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",v,"instead."),u=v);const p=t.logarithmicDepthBuffer===!0,E=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),T=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),P=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),d=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),o=e.getParameter(e.MAX_VERTEX_ATTRIBS),L=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),R=e.getParameter(e.MAX_VARYING_VECTORS),M=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),U=P>0,C=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:g,textureFormatReadable:c,textureTypeReadable:s,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:E,maxTextures:T,maxVertexTextures:P,maxTextureSize:x,maxCubemapSize:d,maxAttributes:o,maxVertexUniforms:L,maxVaryings:R,maxFragmentUniforms:M,vertexTextures:U,maxSamples:C}}function bd(e){const n=this;let t=null,i=0,a=!1,r=!1;const c=new zo,s=new He,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(p,E){const T=p.length!==0||E||i!==0||a;return a=E,i=p.length,T},this.beginShadows=function(){r=!0,v(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,E){t=v(p,E,0)},this.setState=function(p,E,T){const P=p.clippingPlanes,x=p.clipIntersection,d=p.clipShadows,o=e.get(p);if(!a||P===null||P.length===0||r&&!d)r?v(null):u();else{const L=r?0:i,R=L*4;let M=o.clippingState||null;g.value=M,M=v(P,E,R,T);for(let U=0;U!==R;++U)M[U]=t[U];o.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=L}};function u(){g.value!==t&&(g.value=t,g.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function v(p,E,T,P){const x=p!==null?p.length:0;let d=null;if(x!==0){if(d=g.value,P!==!0||d===null){const o=T+x*4,L=E.matrixWorldInverse;s.getNormalMatrix(L),(d===null||d.length<o)&&(d=new Float32Array(o));for(let R=0,M=T;R!==x;++R,M+=4)c.copy(p[R]).applyMatrix4(L,s),c.normal.toArray(d,M),d[M+3]=c.constant}g.value=d,g.needsUpdate=!0}return n.numPlanes=x,n.numIntersection=0,d}}function Cd(e){let n=new WeakMap;function t(c,s){return s===Gi?c.mapping=In:s===Hi&&(c.mapping=mn),c}function i(c){if(c&&c.isTexture){const s=c.mapping;if(s===Gi||s===Hi)if(n.has(c)){const g=n.get(c).texture;return t(g,c.mapping)}else{const g=c.image;if(g&&g.height>0){const u=new as(g.height);return u.fromEquirectangularTexture(e,c),n.set(c,u),c.addEventListener("dispose",a),t(u.texture,c.mapping)}else return null}}return c}function a(c){const s=c.target;s.removeEventListener("dispose",a);const g=n.get(s);g!==void 0&&(n.delete(s),g.dispose())}function r(){n=new WeakMap}return{get:i,dispose:r}}const dn=4,Wa=[.125,.215,.35,.446,.526,.582],Zt=20,vi=new cs,Xa=new We;let Ei=null,Si=0,Mi=0,Ti=!1;const $t=(1+Math.sqrt(5))/2,sn=1/$t,qa=[new Pe(-$t,sn,0),new Pe($t,sn,0),new Pe(-sn,0,$t),new Pe(sn,0,$t),new Pe(0,$t,-sn),new Pe(0,$t,sn),new Pe(-1,1,-1),new Pe(1,1,-1),new Pe(-1,1,1),new Pe(1,1,1)],wd=new Pe;class Ya{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,t=0,i=.1,a=100,r={}){const{size:c=256,position:s=wd}=r;Ei=this._renderer.getRenderTarget(),Si=this._renderer.getActiveCubeFace(),Mi=this._renderer.getActiveMipmapLevel(),Ti=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(n,i,a,g,s),t>0&&this._blur(g,0,0,t),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Za(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$a(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(Ei,Si,Mi),this._renderer.xr.enabled=Ti,n.scissorTest=!1,zn(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===In||n.mapping===mn?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),Ei=this._renderer.getRenderTarget(),Si=this._renderer.getActiveCubeFace(),Mi=this._renderer.getActiveMipmapLevel(),Ti=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:ii,format:It,colorSpace:ai,depthBuffer:!1},a=Ka(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ka(n,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pd(r)),this._blurMaterial=Ld(r,n,t)}return a}_compileMaterial(n){const t=new rt(this._lodPlanes[0],n);this._renderer.compile(t,vi)}_sceneToCubeUV(n,t,i,a,r){const g=new An(90,1,t,i),u=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],p=this._renderer,E=p.autoClear,T=p.toneMapping;p.getClearColor(Xa),p.toneMapping=kt,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(a),p.clearDepth(),p.setRenderTarget(null));const x=new ti({name:"PMREM.Background",side:xt,depthWrite:!1,depthTest:!1}),d=new rt(new hn,x);let o=!1;const L=n.background;L?L.isColor&&(x.color.copy(L),n.background=null,o=!0):(x.color.copy(Xa),o=!0);for(let R=0;R<6;R++){const M=R%3;M===0?(g.up.set(0,u[R],0),g.position.set(r.x,r.y,r.z),g.lookAt(r.x+v[R],r.y,r.z)):M===1?(g.up.set(0,0,u[R]),g.position.set(r.x,r.y,r.z),g.lookAt(r.x,r.y+v[R],r.z)):(g.up.set(0,u[R],0),g.position.set(r.x,r.y,r.z),g.lookAt(r.x,r.y,r.z+v[R]));const U=this._cubeSize;zn(a,M*U,R>2?U:0,U,U),p.setRenderTarget(a),o&&p.render(d,g),p.render(n,g)}d.geometry.dispose(),d.material.dispose(),p.toneMapping=T,p.autoClear=E,n.background=L}_textureToCubeUV(n,t){const i=this._renderer,a=n.mapping===In||n.mapping===mn;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Za()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$a());const r=a?this._cubemapMaterial:this._equirectMaterial,c=new rt(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=n;const g=this._cubeSize;zn(t,0,0,3*g,2*g),i.setRenderTarget(t),i.render(c,vi)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let r=1;r<a;r++){const c=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=qa[(a-r-1)%qa.length];this._blur(n,r-1,r,c,s)}t.autoClear=i}_blur(n,t,i,a,r){const c=this._pingPongRenderTarget;this._halfBlur(n,c,t,i,a,"latitudinal",r),this._halfBlur(c,n,i,i,a,"longitudinal",r)}_halfBlur(n,t,i,a,r,c,s){const g=this._renderer,u=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,p=new rt(this._lodPlanes[a],u),E=u.uniforms,T=this._sizeLods[i]-1,P=isFinite(r)?Math.PI/(2*T):2*Math.PI/(2*Zt-1),x=r/P,d=isFinite(r)?1+Math.floor(v*x):Zt;d>Zt&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Zt}`);const o=[];let L=0;for(let O=0;O<Zt;++O){const V=O/x,_=Math.exp(-V*V/2);o.push(_),O===0?L+=_:O<d&&(L+=2*_)}for(let O=0;O<o.length;O++)o[O]=o[O]/L;E.envMap.value=n.texture,E.samples.value=d,E.weights.value=o,E.latitudinal.value=c==="latitudinal",s&&(E.poleAxis.value=s);const{_lodMax:R}=this;E.dTheta.value=P,E.mipInt.value=R-i;const M=this._sizeLods[a],U=3*M*(a>R-dn?a-R+dn:0),C=4*(this._cubeSize-M);zn(t,U,C,3*M,2*M),g.setRenderTarget(t),g.render(p,vi)}}function Pd(e){const n=[],t=[],i=[];let a=e;const r=e-dn+1+Wa.length;for(let c=0;c<r;c++){const s=Math.pow(2,a);t.push(s);let g=1/s;c>e-dn?g=Wa[c-e+dn-1]:c===0&&(g=0),i.push(g);const u=1/(s-2),v=-u,p=1+u,E=[v,v,p,v,p,p,v,v,p,p,v,p],T=6,P=6,x=3,d=2,o=1,L=new Float32Array(x*P*T),R=new Float32Array(d*P*T),M=new Float32Array(o*P*T);for(let C=0;C<T;C++){const O=C%3*2/3-1,V=C>2?0:-1,_=[O,V,0,O+2/3,V,0,O+2/3,V+1,0,O,V,0,O+2/3,V+1,0,O,V+1,0];L.set(_,x*P*C),R.set(E,d*P*C);const h=[C,C,C,C,C,C];M.set(h,o*P*C)}const U=new jn;U.setAttribute("position",new un(L,x)),U.setAttribute("uv",new un(R,d)),U.setAttribute("faceIndex",new un(M,o)),n.push(U),a>dn&&a--}return{lodPlanes:n,sizeLods:t,sigmas:i}}function Ka(e,n,t){const i=new pn(e,n,t);return i.texture.mapping=ri,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zn(e,n,t,i,a){e.viewport.set(n,t,i,a),e.scissor.set(n,t,i,a)}function Ld(e,n,t){const i=new Float32Array(Zt),a=new Pe(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:Zt,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Ki(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function $a(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ki(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function Za(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ki(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function Ki(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Dd(e){let n=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const g=s.mapping,u=g===Gi||g===Hi,v=g===In||g===mn;if(u||v){let p=n.get(s);const E=p!==void 0?p.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==E)return t===null&&(t=new Ya(e)),p=u?t.fromEquirectangular(s,p):t.fromCubemap(s,p),p.texture.pmremVersion=s.pmremVersion,n.set(s,p),p.texture;if(p!==void 0)return p.texture;{const T=s.image;return u&&T&&T.height>0||v&&T&&a(T)?(t===null&&(t=new Ya(e)),p=u?t.fromEquirectangular(s):t.fromCubemap(s),p.texture.pmremVersion=s.pmremVersion,n.set(s,p),s.addEventListener("dispose",r),p.texture):null}}}return s}function a(s){let g=0;const u=6;for(let v=0;v<u;v++)s[v]!==void 0&&g++;return g===u}function r(s){const g=s.target;g.removeEventListener("dispose",r);const u=n.get(g);u!==void 0&&(n.delete(g),u.dispose())}function c(){n=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function Ud(e){const n={};function t(i){if(n[i]!==void 0)return n[i];let a;switch(i){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(i)}return n[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&Di("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function yd(e,n,t,i){const a={},r=new WeakMap;function c(p){const E=p.target;E.index!==null&&n.remove(E.index);for(const P in E.attributes)n.remove(E.attributes[P]);E.removeEventListener("dispose",c),delete a[E.id];const T=r.get(E);T&&(n.remove(T),r.delete(E)),i.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,t.memory.geometries--}function s(p,E){return a[E.id]===!0||(E.addEventListener("dispose",c),a[E.id]=!0,t.memory.geometries++),E}function g(p){const E=p.attributes;for(const T in E)n.update(E[T],e.ARRAY_BUFFER)}function u(p){const E=[],T=p.index,P=p.attributes.position;let x=0;if(T!==null){const L=T.array;x=T.version;for(let R=0,M=L.length;R<M;R+=3){const U=L[R+0],C=L[R+1],O=L[R+2];E.push(U,C,C,O,O,U)}}else if(P!==void 0){const L=P.array;x=P.version;for(let R=0,M=L.length/3-1;R<M;R+=3){const U=R+0,C=R+1,O=R+2;E.push(U,C,C,O,O,U)}}else return;const d=new(fs(E)?ls:ds)(E,1);d.version=x;const o=r.get(p);o&&n.remove(o),r.set(p,d)}function v(p){const E=r.get(p);if(E){const T=p.index;T!==null&&E.version<T.version&&u(p)}else u(p);return r.get(p)}return{get:s,update:g,getWireframeAttribute:v}}function Id(e,n,t){let i;function a(E){i=E}let r,c;function s(E){r=E.type,c=E.bytesPerElement}function g(E,T){e.drawElements(i,T,r,E*c),t.update(T,i,1)}function u(E,T,P){P!==0&&(e.drawElementsInstanced(i,T,r,E*c,P),t.update(T,i,P))}function v(E,T,P){if(P===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,T,0,r,E,0,P);let d=0;for(let o=0;o<P;o++)d+=T[o];t.update(d,i,1)}function p(E,T,P,x){if(P===0)return;const d=n.get("WEBGL_multi_draw");if(d===null)for(let o=0;o<E.length;o++)u(E[o]/c,T[o],x[o]);else{d.multiDrawElementsInstancedWEBGL(i,T,0,r,E,0,x,0,P);let o=0;for(let L=0;L<P;L++)o+=T[L]*x[L];t.update(o,i,1)}}this.setMode=a,this.setIndex=s,this.render=g,this.renderInstances=u,this.renderMultiDraw=v,this.renderMultiDrawInstances=p}function Nd(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,c,s){switch(t.calls++,c){case e.TRIANGLES:t.triangles+=s*(r/3);break;case e.LINES:t.lines+=s*(r/2);break;case e.LINE_STRIP:t.lines+=s*(r-1);break;case e.LINE_LOOP:t.lines+=s*r;break;case e.POINTS:t.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:a,update:i}}function Od(e,n,t){const i=new WeakMap,a=new _t;function r(c,s,g){const u=c.morphTargetInfluences,v=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,p=v!==void 0?v.length:0;let E=i.get(s);if(E===void 0||E.count!==p){let _=function(){O.dispose(),i.delete(s),s.removeEventListener("dispose",_)};E!==void 0&&E.texture.dispose();const T=s.morphAttributes.position!==void 0,P=s.morphAttributes.normal!==void 0,x=s.morphAttributes.color!==void 0,d=s.morphAttributes.position||[],o=s.morphAttributes.normal||[],L=s.morphAttributes.color||[];let R=0;T===!0&&(R=1),P===!0&&(R=2),x===!0&&(R=3);let M=s.attributes.position.count*R,U=1;M>n.maxTextureSize&&(U=Math.ceil(M/n.maxTextureSize),M=n.maxTextureSize);const C=new Float32Array(M*U*4*p),O=new Nr(C,M,U,p);O.type=Qt,O.needsUpdate=!0;const V=R*4;for(let h=0;h<p;h++){const D=d[h],B=o[h],X=L[h],q=M*U*4*h;for(let $=0;$<D.count;$++){const W=$*V;T===!0&&(a.fromBufferAttribute(D,$),C[q+W+0]=a.x,C[q+W+1]=a.y,C[q+W+2]=a.z,C[q+W+3]=0),P===!0&&(a.fromBufferAttribute(B,$),C[q+W+4]=a.x,C[q+W+5]=a.y,C[q+W+6]=a.z,C[q+W+7]=0),x===!0&&(a.fromBufferAttribute(X,$),C[q+W+8]=a.x,C[q+W+9]=a.y,C[q+W+10]=a.z,C[q+W+11]=X.itemSize===4?a.w:1)}}E={count:p,texture:O,size:new ut(M,U)},i.set(s,E),s.addEventListener("dispose",_)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)g.getUniforms().setValue(e,"morphTexture",c.morphTexture,t);else{let T=0;for(let x=0;x<u.length;x++)T+=u[x];const P=s.morphTargetsRelative?1:1-T;g.getUniforms().setValue(e,"morphTargetBaseInfluence",P),g.getUniforms().setValue(e,"morphTargetInfluences",u)}g.getUniforms().setValue(e,"morphTargetsTexture",E.texture,t),g.getUniforms().setValue(e,"morphTargetsTextureSize",E.size)}return{update:r}}function Fd(e,n,t,i){let a=new WeakMap;function r(g){const u=i.render.frame,v=g.geometry,p=n.get(g,v);if(a.get(p)!==u&&(n.update(p),a.set(p,u)),g.isInstancedMesh&&(g.hasEventListener("dispose",s)===!1&&g.addEventListener("dispose",s),a.get(g)!==u&&(t.update(g.instanceMatrix,e.ARRAY_BUFFER),g.instanceColor!==null&&t.update(g.instanceColor,e.ARRAY_BUFFER),a.set(g,u))),g.isSkinnedMesh){const E=g.skeleton;a.get(E)!==u&&(E.update(),a.set(E,u))}return p}function c(){a=new WeakMap}function s(g){const u=g.target;u.removeEventListener("dispose",s),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:c}}const zr=new Ts,Qa=new Ar(1,1),Wr=new Nr,Xr=new Ms,qr=new Ss,Ja=[],ja=[],er=new Float32Array(16),tr=new Float32Array(9),nr=new Float32Array(4);function gn(e,n,t){const i=e[0];if(i<=0||i>0)return e;const a=n*t;let r=Ja[a];if(r===void 0&&(r=new Float32Array(a),Ja[a]=r),n!==0){i.toArray(r,0);for(let c=1,s=0;c!==n;++c)s+=t,e[c].toArray(r,s)}return r}function ot(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function st(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function oi(e,n){let t=ja[n];t===void 0&&(t=new Int32Array(n),ja[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function Bd(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function Gd(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ot(t,n))return;e.uniform2fv(this.addr,n),st(t,n)}}function Hd(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(ot(t,n))return;e.uniform3fv(this.addr,n),st(t,n)}}function Vd(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ot(t,n))return;e.uniform4fv(this.addr,n),st(t,n)}}function kd(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ot(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),st(t,n)}else{if(ot(t,i))return;nr.set(i),e.uniformMatrix2fv(this.addr,!1,nr),st(t,i)}}function zd(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ot(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),st(t,n)}else{if(ot(t,i))return;tr.set(i),e.uniformMatrix3fv(this.addr,!1,tr),st(t,i)}}function Wd(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ot(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),st(t,n)}else{if(ot(t,i))return;er.set(i),e.uniformMatrix4fv(this.addr,!1,er),st(t,i)}}function Xd(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function qd(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ot(t,n))return;e.uniform2iv(this.addr,n),st(t,n)}}function Yd(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(ot(t,n))return;e.uniform3iv(this.addr,n),st(t,n)}}function Kd(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ot(t,n))return;e.uniform4iv(this.addr,n),st(t,n)}}function $d(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function Zd(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ot(t,n))return;e.uniform2uiv(this.addr,n),st(t,n)}}function Qd(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(ot(t,n))return;e.uniform3uiv(this.addr,n),st(t,n)}}function Jd(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ot(t,n))return;e.uniform4uiv(this.addr,n),st(t,n)}}function jd(e,n,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let r;this.type===e.SAMPLER_2D_SHADOW?(Qa.compareFunction=Rr,r=Qa):r=zr,t.setTexture2D(n||r,a)}function ef(e,n,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(n||Xr,a)}function tf(e,n,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(n||qr,a)}function nf(e,n,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(n||Wr,a)}function af(e){switch(e){case 5126:return Bd;case 35664:return Gd;case 35665:return Hd;case 35666:return Vd;case 35674:return kd;case 35675:return zd;case 35676:return Wd;case 5124:case 35670:return Xd;case 35667:case 35671:return qd;case 35668:case 35672:return Yd;case 35669:case 35673:return Kd;case 5125:return $d;case 36294:return Zd;case 36295:return Qd;case 36296:return Jd;case 35678:case 36198:case 36298:case 36306:case 35682:return jd;case 35679:case 36299:case 36307:return ef;case 35680:case 36300:case 36308:case 36293:return tf;case 36289:case 36303:case 36311:case 36292:return nf}}function rf(e,n){e.uniform1fv(this.addr,n)}function of(e,n){const t=gn(n,this.size,2);e.uniform2fv(this.addr,t)}function sf(e,n){const t=gn(n,this.size,3);e.uniform3fv(this.addr,t)}function cf(e,n){const t=gn(n,this.size,4);e.uniform4fv(this.addr,t)}function lf(e,n){const t=gn(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function df(e,n){const t=gn(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function ff(e,n){const t=gn(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function uf(e,n){e.uniform1iv(this.addr,n)}function pf(e,n){e.uniform2iv(this.addr,n)}function hf(e,n){e.uniform3iv(this.addr,n)}function mf(e,n){e.uniform4iv(this.addr,n)}function _f(e,n){e.uniform1uiv(this.addr,n)}function gf(e,n){e.uniform2uiv(this.addr,n)}function vf(e,n){e.uniform3uiv(this.addr,n)}function Ef(e,n){e.uniform4uiv(this.addr,n)}function Sf(e,n,t){const i=this.cache,a=n.length,r=oi(t,a);ot(i,r)||(e.uniform1iv(this.addr,r),st(i,r));for(let c=0;c!==a;++c)t.setTexture2D(n[c]||zr,r[c])}function Mf(e,n,t){const i=this.cache,a=n.length,r=oi(t,a);ot(i,r)||(e.uniform1iv(this.addr,r),st(i,r));for(let c=0;c!==a;++c)t.setTexture3D(n[c]||Xr,r[c])}function Tf(e,n,t){const i=this.cache,a=n.length,r=oi(t,a);ot(i,r)||(e.uniform1iv(this.addr,r),st(i,r));for(let c=0;c!==a;++c)t.setTextureCube(n[c]||qr,r[c])}function xf(e,n,t){const i=this.cache,a=n.length,r=oi(t,a);ot(i,r)||(e.uniform1iv(this.addr,r),st(i,r));for(let c=0;c!==a;++c)t.setTexture2DArray(n[c]||Wr,r[c])}function Af(e){switch(e){case 5126:return rf;case 35664:return of;case 35665:return sf;case 35666:return cf;case 35674:return lf;case 35675:return df;case 35676:return ff;case 5124:case 35670:return uf;case 35667:case 35671:return pf;case 35668:case 35672:return hf;case 35669:case 35673:return mf;case 5125:return _f;case 36294:return gf;case 36295:return vf;case 36296:return Ef;case 35678:case 36198:case 36298:case 36306:case 35682:return Sf;case 35679:case 36299:case 36307:return Mf;case 35680:case 36300:case 36308:case 36293:return Tf;case 36289:case 36303:case 36311:case 36292:return xf}}class Rf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=af(t.type)}}class bf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Af(t.type)}}class Cf{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const a=this.seq;for(let r=0,c=a.length;r!==c;++r){const s=a[r];s.setValue(n,t[s.id],i)}}}const xi=/(\w+)(\])?(\[|\.)?/g;function ir(e,n){e.seq.push(n),e.map[n.id]=n}function wf(e,n,t){const i=e.name,a=i.length;for(xi.lastIndex=0;;){const r=xi.exec(i),c=xi.lastIndex;let s=r[1];const g=r[2]==="]",u=r[3];if(g&&(s=s|0),u===void 0||u==="["&&c+2===a){ir(t,u===void 0?new Rf(s,e,n):new bf(s,e,n));break}else{let p=t.map[s];p===void 0&&(p=new Cf(s),ir(t,p)),t=p}}}class $n{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const r=n.getActiveUniform(t,a),c=n.getUniformLocation(t,r.name);wf(r,c,this)}}setValue(n,t,i,a){const r=this.map[t];r!==void 0&&r.setValue(n,i,a)}setOptional(n,t,i){const a=t[i];a!==void 0&&this.setValue(n,i,a)}static upload(n,t,i,a){for(let r=0,c=t.length;r!==c;++r){const s=t[r],g=i[s.id];g.needsUpdate!==!1&&s.setValue(n,g.value,a)}}static seqWithValue(n,t){const i=[];for(let a=0,r=n.length;a!==r;++a){const c=n[a];c.id in t&&i.push(c)}return i}}function ar(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const Pf=37297;let Lf=0;function Df(e,n){const t=e.split(`
`),i=[],a=Math.max(n-6,0),r=Math.min(n+6,t.length);for(let c=a;c<r;c++){const s=c+1;i.push(`${s===n?">":" "} ${s}: ${t[c]}`)}return i.join(`
`)}const rr=new He;function Uf(e){at._getMatrix(rr,at.workingColorSpace,e);const n=`mat3( ${rr.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(e)){case Br:return[n,"LinearTransferOETF"];case $e:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function or(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),r=(e.getShaderInfoLog(n)||"").trim();if(i&&r==="")return"";const c=/ERROR: 0:(\d+)/.exec(r);if(c){const s=parseInt(c[1]);return t.toUpperCase()+`

`+r+`

`+Df(e.getShaderSource(n),s)}else return r}function yf(e,n){const t=Uf(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function If(e,n){let t;switch(n){case Es:t="Linear";break;case vs:t="Reinhard";break;case gs:t="Cineon";break;case Gr:t="ACESFilmic";break;case _s:t="AgX";break;case ms:t="Neutral";break;case hs:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),t="Linear"}return"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wn=new Pe;function Nf(){at.getLuminanceCoefficients(Wn);const e=Wn.x.toFixed(4),n=Wn.y.toFixed(4),t=Wn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Of(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xn).join(`
`)}function Ff(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function Bf(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=e.getActiveAttrib(n,a),c=r.name;let s=1;r.type===e.FLOAT_MAT2&&(s=2),r.type===e.FLOAT_MAT3&&(s=3),r.type===e.FLOAT_MAT4&&(s=4),t[c]={type:r.type,location:e.getAttribLocation(n,c),locationSize:s}}return t}function xn(e){return e!==""}function sr(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function cr(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const Gf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ki(e){return e.replace(Gf,Vf)}const Hf=new Map;function Vf(e,n){let t=Oe[n];if(t===void 0){const i=Hf.get(n);if(i!==void 0)t=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return ki(t)}const kf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lr(e){return e.replace(kf,zf)}function zf(e,n,t,i){let a="";for(let r=parseInt(n);r<parseInt(t);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function dr(e){let n=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?n+=`
#define HIGH_PRECISION`:e.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}function Wf(e){let n="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===br?n="SHADOWMAP_TYPE_PCF":e.shadowMapType===ps?n="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Ut&&(n="SHADOWMAP_TYPE_VSM"),n}function Xf(e){let n="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case In:case mn:n="ENVMAP_TYPE_CUBE";break;case ri:n="ENVMAP_TYPE_CUBE_UV";break}return n}function qf(e){let n="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case mn:n="ENVMAP_MODE_REFRACTION";break}return n}function Yf(e){let n="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case bs:n="ENVMAP_BLENDING_MULTIPLY";break;case Rs:n="ENVMAP_BLENDING_MIX";break;case As:n="ENVMAP_BLENDING_ADD";break}return n}function Kf(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function $f(e,n,t,i){const a=e.getContext(),r=t.defines;let c=t.vertexShader,s=t.fragmentShader;const g=Wf(t),u=Xf(t),v=qf(t),p=Yf(t),E=Kf(t),T=Of(t),P=Ff(r),x=a.createProgram();let d,o,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,P].filter(xn).join(`
`),d.length>0&&(d+=`
`),o=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,P].filter(xn).join(`
`),o.length>0&&(o+=`
`)):(d=[dr(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,P,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+g:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xn).join(`
`),o=[dr(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,P,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+v:"",t.envMap?"#define "+p:"",E?"#define CUBEUV_TEXEL_WIDTH "+E.texelWidth:"",E?"#define CUBEUV_TEXEL_HEIGHT "+E.texelHeight:"",E?"#define CUBEUV_MAX_MIP "+E.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+g:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kt?"#define TONE_MAPPING":"",t.toneMapping!==kt?Oe.tonemapping_pars_fragment:"",t.toneMapping!==kt?If("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,yf("linearToOutputTexel",t.outputColorSpace),Nf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xn).join(`
`)),c=ki(c),c=sr(c,t),c=cr(c,t),s=ki(s),s=sr(s,t),s=cr(s,t),c=lr(c),s=lr(s),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,d=[T,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,o=["#define varying in",t.glslVersion===Va?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Va?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+o);const R=L+d+c,M=L+o+s,U=ar(a,a.VERTEX_SHADER,R),C=ar(a,a.FRAGMENT_SHADER,M);a.attachShader(x,U),a.attachShader(x,C),t.index0AttributeName!==void 0?a.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function O(D){if(e.debug.checkShaderErrors){const B=a.getProgramInfoLog(x)||"",X=a.getShaderInfoLog(U)||"",q=a.getShaderInfoLog(C)||"",$=B.trim(),W=X.trim(),ne=q.trim();let H=!0,ve=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(H=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,x,U,C);else{const xe=or(a,U,"vertex"),Ie=or(a,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+$+`
`+xe+`
`+Ie)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(W===""||ne==="")&&(ve=!1);ve&&(D.diagnostics={runnable:H,programLog:$,vertexShader:{log:W,prefix:d},fragmentShader:{log:ne,prefix:o}})}a.deleteShader(U),a.deleteShader(C),V=new $n(a,x),_=Bf(a,x)}let V;this.getUniforms=function(){return V===void 0&&O(this),V};let _;this.getAttributes=function(){return _===void 0&&O(this),_};let h=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return h===!1&&(h=a.getProgramParameter(x,Pf)),h},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lf++,this.cacheKey=n,this.usedTimes=1,this.program=x,this.vertexShader=U,this.fragmentShader=C,this}let Zf=0;class Qf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,a=this._getShaderStage(t),r=this._getShaderStage(i),c=this._getShaderCacheForMaterial(n);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(r)===!1&&(c.add(r),r.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new Jf(n),t.set(n,i)),i}}class Jf{constructor(n){this.id=Zf++,this.code=n,this.usedTimes=0}}function jf(e,n,t,i,a,r,c){const s=new us,g=new Qf,u=new Set,v=[],p=a.logarithmicDepthBuffer,E=a.vertexTextures;let T=a.precision;const P={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return u.add(_),_===0?"uv":`uv${_}`}function d(_,h,D,B,X){const q=B.fog,$=X.geometry,W=_.isMeshStandardMaterial?B.environment:null,ne=(_.isMeshStandardMaterial?t:n).get(_.envMap||W),H=ne&&ne.mapping===ri?ne.image.height:null,ve=P[_.type];_.precision!==null&&(T=a.getMaxPrecision(_.precision),T!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",T,"instead."));const xe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ie=xe!==void 0?xe.length:0;let Ve=0;$.morphAttributes.position!==void 0&&(Ve=1),$.morphAttributes.normal!==void 0&&(Ve=2),$.morphAttributes.color!==void 0&&(Ve=3);let nt,et,Xe,k;if(ve){const ke=Ct[ve];nt=ke.vertexShader,et=ke.fragmentShader}else nt=_.vertexShader,et=_.fragmentShader,g.update(_),Xe=g.getVertexShaderID(_),k=g.getFragmentShaderID(_);const K=e.getRenderTarget(),le=e.state.buffers.depth.getReversed(),we=X.isInstancedMesh===!0,Se=X.isBatchedMesh===!0,Be=!!_.map,dt=!!_.matcap,S=!!ne,Ze=!!_.aoMap,Ue=!!_.lightMap,be=!!_.bumpMap,ue=!!_.normalMap,Qe=!!_.displacementMap,pe=!!_.emissiveMap,Ne=!!_.metalnessMap,ct=!!_.roughnessMap,it=_.anisotropy>0,m=_.clearcoat>0,l=_.dispersion>0,y=_.iridescence>0,G=_.sheen>0,Y=_.transmission>0,F=it&&!!_.anisotropyMap,Ee=m&&!!_.clearcoatMap,ee=m&&!!_.clearcoatNormalMap,he=m&&!!_.clearcoatRoughnessMap,me=y&&!!_.iridescenceMap,J=y&&!!_.iridescenceThicknessMap,oe=G&&!!_.sheenColorMap,Re=G&&!!_.sheenRoughnessMap,_e=!!_.specularMap,ae=!!_.specularColorMap,ye=!!_.specularIntensityMap,A=Y&&!!_.transmissionMap,j=Y&&!!_.thicknessMap,te=!!_.gradientMap,ce=!!_.alphaMap,Z=_.alphaTest>0,z=!!_.alphaHash,fe=!!_.extensions;let Le=kt;_.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Le=e.toneMapping);const Ye={shaderID:ve,shaderType:_.type,shaderName:_.name,vertexShader:nt,fragmentShader:et,defines:_.defines,customVertexShaderID:Xe,customFragmentShaderID:k,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:T,batching:Se,batchingColor:Se&&X._colorsTexture!==null,instancing:we,instancingColor:we&&X.instanceColor!==null,instancingMorph:we&&X.morphTexture!==null,supportsVertexTextures:E,outputColorSpace:K===null?e.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ai,alphaToCoverage:!!_.alphaToCoverage,map:Be,matcap:dt,envMap:S,envMapMode:S&&ne.mapping,envMapCubeUVHeight:H,aoMap:Ze,lightMap:Ue,bumpMap:be,normalMap:ue,displacementMap:E&&Qe,emissiveMap:pe,normalMapObjectSpace:ue&&_.normalMapType===ss,normalMapTangentSpace:ue&&_.normalMapType===os,metalnessMap:Ne,roughnessMap:ct,anisotropy:it,anisotropyMap:F,clearcoat:m,clearcoatMap:Ee,clearcoatNormalMap:ee,clearcoatRoughnessMap:he,dispersion:l,iridescence:y,iridescenceMap:me,iridescenceThicknessMap:J,sheen:G,sheenColorMap:oe,sheenRoughnessMap:Re,specularMap:_e,specularColorMap:ae,specularIntensityMap:ye,transmission:Y,transmissionMap:A,thicknessMap:j,gradientMap:te,opaque:_.transparent===!1&&_.blending===Kn&&_.alphaToCoverage===!1,alphaMap:ce,alphaTest:Z,alphaHash:z,combine:_.combine,mapUv:Be&&x(_.map.channel),aoMapUv:Ze&&x(_.aoMap.channel),lightMapUv:Ue&&x(_.lightMap.channel),bumpMapUv:be&&x(_.bumpMap.channel),normalMapUv:ue&&x(_.normalMap.channel),displacementMapUv:Qe&&x(_.displacementMap.channel),emissiveMapUv:pe&&x(_.emissiveMap.channel),metalnessMapUv:Ne&&x(_.metalnessMap.channel),roughnessMapUv:ct&&x(_.roughnessMap.channel),anisotropyMapUv:F&&x(_.anisotropyMap.channel),clearcoatMapUv:Ee&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:ee&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:J&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Re&&x(_.sheenRoughnessMap.channel),specularMapUv:_e&&x(_.specularMap.channel),specularColorMapUv:ae&&x(_.specularColorMap.channel),specularIntensityMapUv:ye&&x(_.specularIntensityMap.channel),transmissionMapUv:A&&x(_.transmissionMap.channel),thicknessMapUv:j&&x(_.thicknessMap.channel),alphaMapUv:ce&&x(_.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(ue||it),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!$.attributes.uv&&(Be||ce),fog:!!q,useFog:_.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:_.flatShading===!0&&_.wireframe===!1,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:le,skinning:X.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:Ve,numDirLights:h.directional.length,numPointLights:h.point.length,numSpotLights:h.spot.length,numSpotLightMaps:h.spotLightMap.length,numRectAreaLights:h.rectArea.length,numHemiLights:h.hemi.length,numDirLightShadows:h.directionalShadowMap.length,numPointLightShadows:h.pointShadowMap.length,numSpotLightShadows:h.spotShadowMap.length,numSpotLightShadowsWithMaps:h.numSpotLightShadowsWithMaps,numLightProbes:h.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:_.dithering,shadowMapEnabled:e.shadowMap.enabled&&D.length>0,shadowMapType:e.shadowMap.type,toneMapping:Le,decodeVideoTexture:Be&&_.map.isVideoTexture===!0&&at.getTransfer(_.map.colorSpace)===$e,decodeVideoTextureEmissive:pe&&_.emissiveMap.isVideoTexture===!0&&at.getTransfer(_.emissiveMap.colorSpace)===$e,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===yt,flipSided:_.side===xt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:fe&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&_.extensions.multiDraw===!0||Se)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ye.vertexUv1s=u.has(1),Ye.vertexUv2s=u.has(2),Ye.vertexUv3s=u.has(3),u.clear(),Ye}function o(_){const h=[];if(_.shaderID?h.push(_.shaderID):(h.push(_.customVertexShaderID),h.push(_.customFragmentShaderID)),_.defines!==void 0)for(const D in _.defines)h.push(D),h.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(L(h,_),R(h,_),h.push(e.outputColorSpace)),h.push(_.customProgramCacheKey),h.join()}function L(_,h){_.push(h.precision),_.push(h.outputColorSpace),_.push(h.envMapMode),_.push(h.envMapCubeUVHeight),_.push(h.mapUv),_.push(h.alphaMapUv),_.push(h.lightMapUv),_.push(h.aoMapUv),_.push(h.bumpMapUv),_.push(h.normalMapUv),_.push(h.displacementMapUv),_.push(h.emissiveMapUv),_.push(h.metalnessMapUv),_.push(h.roughnessMapUv),_.push(h.anisotropyMapUv),_.push(h.clearcoatMapUv),_.push(h.clearcoatNormalMapUv),_.push(h.clearcoatRoughnessMapUv),_.push(h.iridescenceMapUv),_.push(h.iridescenceThicknessMapUv),_.push(h.sheenColorMapUv),_.push(h.sheenRoughnessMapUv),_.push(h.specularMapUv),_.push(h.specularColorMapUv),_.push(h.specularIntensityMapUv),_.push(h.transmissionMapUv),_.push(h.thicknessMapUv),_.push(h.combine),_.push(h.fogExp2),_.push(h.sizeAttenuation),_.push(h.morphTargetsCount),_.push(h.morphAttributeCount),_.push(h.numDirLights),_.push(h.numPointLights),_.push(h.numSpotLights),_.push(h.numSpotLightMaps),_.push(h.numHemiLights),_.push(h.numRectAreaLights),_.push(h.numDirLightShadows),_.push(h.numPointLightShadows),_.push(h.numSpotLightShadows),_.push(h.numSpotLightShadowsWithMaps),_.push(h.numLightProbes),_.push(h.shadowMapType),_.push(h.toneMapping),_.push(h.numClippingPlanes),_.push(h.numClipIntersection),_.push(h.depthPacking)}function R(_,h){s.disableAll(),h.supportsVertexTextures&&s.enable(0),h.instancing&&s.enable(1),h.instancingColor&&s.enable(2),h.instancingMorph&&s.enable(3),h.matcap&&s.enable(4),h.envMap&&s.enable(5),h.normalMapObjectSpace&&s.enable(6),h.normalMapTangentSpace&&s.enable(7),h.clearcoat&&s.enable(8),h.iridescence&&s.enable(9),h.alphaTest&&s.enable(10),h.vertexColors&&s.enable(11),h.vertexAlphas&&s.enable(12),h.vertexUv1s&&s.enable(13),h.vertexUv2s&&s.enable(14),h.vertexUv3s&&s.enable(15),h.vertexTangents&&s.enable(16),h.anisotropy&&s.enable(17),h.alphaHash&&s.enable(18),h.batching&&s.enable(19),h.dispersion&&s.enable(20),h.batchingColor&&s.enable(21),h.gradientMap&&s.enable(22),_.push(s.mask),s.disableAll(),h.fog&&s.enable(0),h.useFog&&s.enable(1),h.flatShading&&s.enable(2),h.logarithmicDepthBuffer&&s.enable(3),h.reversedDepthBuffer&&s.enable(4),h.skinning&&s.enable(5),h.morphTargets&&s.enable(6),h.morphNormals&&s.enable(7),h.morphColors&&s.enable(8),h.premultipliedAlpha&&s.enable(9),h.shadowMapEnabled&&s.enable(10),h.doubleSided&&s.enable(11),h.flipSided&&s.enable(12),h.useDepthPacking&&s.enable(13),h.dithering&&s.enable(14),h.transmission&&s.enable(15),h.sheen&&s.enable(16),h.opaque&&s.enable(17),h.pointsUvs&&s.enable(18),h.decodeVideoTexture&&s.enable(19),h.decodeVideoTextureEmissive&&s.enable(20),h.alphaToCoverage&&s.enable(21),_.push(s.mask)}function M(_){const h=P[_.type];let D;if(h){const B=Ct[h];D=rs.clone(B.uniforms)}else D=_.uniforms;return D}function U(_,h){let D;for(let B=0,X=v.length;B<X;B++){const q=v[B];if(q.cacheKey===h){D=q,++D.usedTimes;break}}return D===void 0&&(D=new $f(e,h,_,r),v.push(D)),D}function C(_){if(--_.usedTimes===0){const h=v.indexOf(_);v[h]=v[v.length-1],v.pop(),_.destroy()}}function O(_){g.remove(_)}function V(){g.dispose()}return{getParameters:d,getProgramCacheKey:o,getUniforms:M,acquireProgram:U,releaseProgram:C,releaseShaderCache:O,programs:v,dispose:V}}function eu(){let e=new WeakMap;function n(c){return e.has(c)}function t(c){let s=e.get(c);return s===void 0&&(s={},e.set(c,s)),s}function i(c){e.delete(c)}function a(c,s,g){e.get(c)[s]=g}function r(){e=new WeakMap}return{has:n,get:t,remove:i,update:a,dispose:r}}function tu(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.z!==n.z?e.z-n.z:e.id-n.id}function fr(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function ur(){const e=[];let n=0;const t=[],i=[],a=[];function r(){n=0,t.length=0,i.length=0,a.length=0}function c(p,E,T,P,x,d){let o=e[n];return o===void 0?(o={id:p.id,object:p,geometry:E,material:T,groupOrder:P,renderOrder:p.renderOrder,z:x,group:d},e[n]=o):(o.id=p.id,o.object=p,o.geometry=E,o.material=T,o.groupOrder=P,o.renderOrder=p.renderOrder,o.z=x,o.group=d),n++,o}function s(p,E,T,P,x,d){const o=c(p,E,T,P,x,d);T.transmission>0?i.push(o):T.transparent===!0?a.push(o):t.push(o)}function g(p,E,T,P,x,d){const o=c(p,E,T,P,x,d);T.transmission>0?i.unshift(o):T.transparent===!0?a.unshift(o):t.unshift(o)}function u(p,E){t.length>1&&t.sort(p||tu),i.length>1&&i.sort(E||fr),a.length>1&&a.sort(E||fr)}function v(){for(let p=n,E=e.length;p<E;p++){const T=e[p];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:t,transmissive:i,transparent:a,init:r,push:s,unshift:g,finish:v,sort:u}}function nu(){let e=new WeakMap;function n(i,a){const r=e.get(i);let c;return r===void 0?(c=new ur,e.set(i,[c])):a>=r.length?(c=new ur,r.push(c)):c=r[a],c}function t(){e=new WeakMap}return{get:n,dispose:t}}function iu(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new Pe,color:new We};break;case"SpotLight":t={position:new Pe,direction:new Pe,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Pe,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Pe,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new Pe,halfWidth:new Pe,halfHeight:new Pe};break}return e[n.id]=t,t}}}function au(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let ru=0;function ou(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function su(e){const n=new iu,t=au(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new Pe);const a=new Pe,r=new nn,c=new nn;function s(u){let v=0,p=0,E=0;for(let _=0;_<9;_++)i.probe[_].set(0,0,0);let T=0,P=0,x=0,d=0,o=0,L=0,R=0,M=0,U=0,C=0,O=0;u.sort(ou);for(let _=0,h=u.length;_<h;_++){const D=u[_],B=D.color,X=D.intensity,q=D.distance,$=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)v+=B.r*X,p+=B.g*X,E+=B.b*X;else if(D.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(D.sh.coefficients[W],X);O++}else if(D.isDirectionalLight){const W=n.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ne=D.shadow,H=t.get(D);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,i.directionalShadow[T]=H,i.directionalShadowMap[T]=$,i.directionalShadowMatrix[T]=D.shadow.matrix,L++}i.directional[T]=W,T++}else if(D.isSpotLight){const W=n.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(B).multiplyScalar(X),W.distance=q,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,i.spot[x]=W;const ne=D.shadow;if(D.map&&(i.spotLightMap[U]=D.map,U++,ne.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[x]=ne.matrix,D.castShadow){const H=t.get(D);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,i.spotShadow[x]=H,i.spotShadowMap[x]=$,M++}x++}else if(D.isRectAreaLight){const W=n.get(D);W.color.copy(B).multiplyScalar(X),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),i.rectArea[d]=W,d++}else if(D.isPointLight){const W=n.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){const ne=D.shadow,H=t.get(D);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,H.shadowCameraNear=ne.camera.near,H.shadowCameraFar=ne.camera.far,i.pointShadow[P]=H,i.pointShadowMap[P]=$,i.pointShadowMatrix[P]=D.shadow.matrix,R++}i.point[P]=W,P++}else if(D.isHemisphereLight){const W=n.get(D);W.skyColor.copy(D.color).multiplyScalar(X),W.groundColor.copy(D.groundColor).multiplyScalar(X),i.hemi[o]=W,o++}}d>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2)),i.ambient[0]=v,i.ambient[1]=p,i.ambient[2]=E;const V=i.hash;(V.directionalLength!==T||V.pointLength!==P||V.spotLength!==x||V.rectAreaLength!==d||V.hemiLength!==o||V.numDirectionalShadows!==L||V.numPointShadows!==R||V.numSpotShadows!==M||V.numSpotMaps!==U||V.numLightProbes!==O)&&(i.directional.length=T,i.spot.length=x,i.rectArea.length=d,i.point.length=P,i.hemi.length=o,i.directionalShadow.length=L,i.directionalShadowMap.length=L,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=L,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=M+U-C,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=O,V.directionalLength=T,V.pointLength=P,V.spotLength=x,V.rectAreaLength=d,V.hemiLength=o,V.numDirectionalShadows=L,V.numPointShadows=R,V.numSpotShadows=M,V.numSpotMaps=U,V.numLightProbes=O,i.version=ru++)}function g(u,v){let p=0,E=0,T=0,P=0,x=0;const d=v.matrixWorldInverse;for(let o=0,L=u.length;o<L;o++){const R=u[o];if(R.isDirectionalLight){const M=i.directional[p];M.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(d),p++}else if(R.isSpotLight){const M=i.spot[T];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(d),T++}else if(R.isRectAreaLight){const M=i.rectArea[P];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(d),c.identity(),r.copy(R.matrixWorld),r.premultiply(d),c.extractRotation(r),M.halfWidth.set(R.width*.5,0,0),M.halfHeight.set(0,R.height*.5,0),M.halfWidth.applyMatrix4(c),M.halfHeight.applyMatrix4(c),P++}else if(R.isPointLight){const M=i.point[E];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(d),E++}else if(R.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(R.matrixWorld),M.direction.transformDirection(d),x++}}}return{setup:s,setupView:g,state:i}}function pr(e){const n=new su(e),t=[],i=[];function a(v){u.camera=v,t.length=0,i.length=0}function r(v){t.push(v)}function c(v){i.push(v)}function s(){n.setup(t)}function g(v){n.setupView(t,v)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:a,state:u,setupLights:s,setupLightsView:g,pushLight:r,pushShadow:c}}function cu(e){let n=new WeakMap;function t(a,r=0){const c=n.get(a);let s;return c===void 0?(s=new pr(e),n.set(a,[s])):r>=c.length?(s=new pr(e),c.push(s)):s=c[r],s}function i(){n=new WeakMap}return{get:t,dispose:i}}const lu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,du=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fu(e,n,t){let i=new xr;const a=new ut,r=new ut,c=new _t,s=new Wo({depthPacking:Xo}),g=new qo,u={},v=t.maxTextureSize,p={[Dn]:xt,[xt]:Dn,[yt]:yt},E=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:lu,fragmentShader:du}),T=E.clone();T.defines.HORIZONTAL_PASS=1;const P=new jn;P.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new rt(P,E),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=br;let o=this.type;this.render=function(C,O,V){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||C.length===0)return;const _=e.getRenderTarget(),h=e.getActiveCubeFace(),D=e.getActiveMipmapLevel(),B=e.state;B.setBlending(en),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const X=o!==Ut&&this.type===Ut,q=o===Ut&&this.type!==Ut;for(let $=0,W=C.length;$<W;$++){const ne=C[$],H=ne.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);const ve=H.getFrameExtents();if(a.multiply(ve),r.copy(H.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(r.x=Math.floor(v/ve.x),a.x=r.x*ve.x,H.mapSize.x=r.x),a.y>v&&(r.y=Math.floor(v/ve.y),a.y=r.y*ve.y,H.mapSize.y=r.y)),H.map===null||X===!0||q===!0){const Ie=this.type!==Ut?{minFilter:Rn,magFilter:Rn}:{};H.map!==null&&H.map.dispose(),H.map=new pn(a.x,a.y,Ie),H.map.texture.name=ne.name+".shadowMap",H.camera.updateProjectionMatrix()}e.setRenderTarget(H.map),e.clear();const xe=H.getViewportCount();for(let Ie=0;Ie<xe;Ie++){const Ve=H.getViewport(Ie);c.set(r.x*Ve.x,r.y*Ve.y,r.x*Ve.z,r.y*Ve.w),B.viewport(c),H.updateMatrices(ne,Ie),i=H.getFrustum(),M(O,V,H.camera,ne,this.type)}H.isPointLightShadow!==!0&&this.type===Ut&&L(H,V),H.needsUpdate=!1}o=this.type,d.needsUpdate=!1,e.setRenderTarget(_,h,D)};function L(C,O){const V=n.update(x);E.defines.VSM_SAMPLES!==C.blurSamples&&(E.defines.VSM_SAMPLES=C.blurSamples,T.defines.VSM_SAMPLES=C.blurSamples,E.needsUpdate=!0,T.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new pn(a.x,a.y)),E.uniforms.shadow_pass.value=C.map.texture,E.uniforms.resolution.value=C.mapSize,E.uniforms.radius.value=C.radius,e.setRenderTarget(C.mapPass),e.clear(),e.renderBufferDirect(O,null,V,E,x,null),T.uniforms.shadow_pass.value=C.mapPass.texture,T.uniforms.resolution.value=C.mapSize,T.uniforms.radius.value=C.radius,e.setRenderTarget(C.map),e.clear(),e.renderBufferDirect(O,null,V,T,x,null)}function R(C,O,V,_){let h=null;const D=V.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)h=D;else if(h=V.isPointLight===!0?g:s,e.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const B=h.uuid,X=O.uuid;let q=u[B];q===void 0&&(q={},u[B]=q);let $=q[X];$===void 0&&($=h.clone(),q[X]=$,O.addEventListener("dispose",U)),h=$}if(h.visible=O.visible,h.wireframe=O.wireframe,_===Ut?h.side=O.shadowSide!==null?O.shadowSide:O.side:h.side=O.shadowSide!==null?O.shadowSide:p[O.side],h.alphaMap=O.alphaMap,h.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,h.map=O.map,h.clipShadows=O.clipShadows,h.clippingPlanes=O.clippingPlanes,h.clipIntersection=O.clipIntersection,h.displacementMap=O.displacementMap,h.displacementScale=O.displacementScale,h.displacementBias=O.displacementBias,h.wireframeLinewidth=O.wireframeLinewidth,h.linewidth=O.linewidth,V.isPointLight===!0&&h.isMeshDistanceMaterial===!0){const B=e.properties.get(h);B.light=V}return h}function M(C,O,V,_,h){if(C.visible===!1)return;if(C.layers.test(O.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&h===Ut)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,C.matrixWorld);const X=n.update(C),q=C.material;if(Array.isArray(q)){const $=X.groups;for(let W=0,ne=$.length;W<ne;W++){const H=$[W],ve=q[H.materialIndex];if(ve&&ve.visible){const xe=R(C,ve,_,h);C.onBeforeShadow(e,C,O,V,X,xe,H),e.renderBufferDirect(V,null,X,xe,C,H),C.onAfterShadow(e,C,O,V,X,xe,H)}}}else if(q.visible){const $=R(C,q,_,h);C.onBeforeShadow(e,C,O,V,X,$,null),e.renderBufferDirect(V,null,X,$,C,null),C.onAfterShadow(e,C,O,V,X,$,null)}}const B=C.children;for(let X=0,q=B.length;X<q;X++)M(B[X],O,V,_,h)}function U(C){C.target.removeEventListener("dispose",U);for(const V in u){const _=u[V],h=C.target.uuid;h in _&&(_[h].dispose(),delete _[h])}}}const uu={[Bi]:Fi,[Oi]:yi,[Ni]:Ui,[Jn]:Ii,[Fi]:Bi,[yi]:Oi,[Ui]:Ni,[Ii]:Jn};function pu(e,n){function t(){let A=!1;const j=new _t;let te=null;const ce=new _t(0,0,0,0);return{setMask:function(Z){te!==Z&&!A&&(e.colorMask(Z,Z,Z,Z),te=Z)},setLocked:function(Z){A=Z},setClear:function(Z,z,fe,Le,Ye){Ye===!0&&(Z*=Le,z*=Le,fe*=Le),j.set(Z,z,fe,Le),ce.equals(j)===!1&&(e.clearColor(Z,z,fe,Le),ce.copy(j))},reset:function(){A=!1,te=null,ce.set(-1,0,0,0)}}}function i(){let A=!1,j=!1,te=null,ce=null,Z=null;return{setReversed:function(z){if(j!==z){const fe=n.get("EXT_clip_control");z?fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.ZERO_TO_ONE_EXT):fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.NEGATIVE_ONE_TO_ONE_EXT),j=z;const Le=Z;Z=null,this.setClear(Le)}},getReversed:function(){return j},setTest:function(z){z?K(e.DEPTH_TEST):le(e.DEPTH_TEST)},setMask:function(z){te!==z&&!A&&(e.depthMask(z),te=z)},setFunc:function(z){if(j&&(z=uu[z]),ce!==z){switch(z){case Bi:e.depthFunc(e.NEVER);break;case Fi:e.depthFunc(e.ALWAYS);break;case Oi:e.depthFunc(e.LESS);break;case Jn:e.depthFunc(e.LEQUAL);break;case Ni:e.depthFunc(e.EQUAL);break;case Ii:e.depthFunc(e.GEQUAL);break;case yi:e.depthFunc(e.GREATER);break;case Ui:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ce=z}},setLocked:function(z){A=z},setClear:function(z){Z!==z&&(j&&(z=1-z),e.clearDepth(z),Z=z)},reset:function(){A=!1,te=null,ce=null,Z=null,j=!1}}}function a(){let A=!1,j=null,te=null,ce=null,Z=null,z=null,fe=null,Le=null,Ye=null;return{setTest:function(ke){A||(ke?K(e.STENCIL_TEST):le(e.STENCIL_TEST))},setMask:function(ke){j!==ke&&!A&&(e.stencilMask(ke),j=ke)},setFunc:function(ke,Dt,bt){(te!==ke||ce!==Dt||Z!==bt)&&(e.stencilFunc(ke,Dt,bt),te=ke,ce=Dt,Z=bt)},setOp:function(ke,Dt,bt){(z!==ke||fe!==Dt||Le!==bt)&&(e.stencilOp(ke,Dt,bt),z=ke,fe=Dt,Le=bt)},setLocked:function(ke){A=ke},setClear:function(ke){Ye!==ke&&(e.clearStencil(ke),Ye=ke)},reset:function(){A=!1,j=null,te=null,ce=null,Z=null,z=null,fe=null,Le=null,Ye=null}}}const r=new t,c=new i,s=new a,g=new WeakMap,u=new WeakMap;let v={},p={},E=new WeakMap,T=[],P=null,x=!1,d=null,o=null,L=null,R=null,M=null,U=null,C=null,O=new We(0,0,0),V=0,_=!1,h=null,D=null,B=null,X=null,q=null;const $=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ne=0;const H=e.getParameter(e.VERSION);H.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=ne>=1):H.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=ne>=2);let ve=null,xe={};const Ie=e.getParameter(e.SCISSOR_BOX),Ve=e.getParameter(e.VIEWPORT),nt=new _t().fromArray(Ie),et=new _t().fromArray(Ve);function Xe(A,j,te,ce){const Z=new Uint8Array(4),z=e.createTexture();e.bindTexture(A,z),e.texParameteri(A,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(A,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let fe=0;fe<te;fe++)A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY?e.texImage3D(j,0,e.RGBA,1,1,ce,0,e.RGBA,e.UNSIGNED_BYTE,Z):e.texImage2D(j+fe,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Z);return z}const k={};k[e.TEXTURE_2D]=Xe(e.TEXTURE_2D,e.TEXTURE_2D,1),k[e.TEXTURE_CUBE_MAP]=Xe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[e.TEXTURE_2D_ARRAY]=Xe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),k[e.TEXTURE_3D]=Xe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),c.setClear(1),s.setClear(0),K(e.DEPTH_TEST),c.setFunc(Jn),be(!1),ue(Na),K(e.CULL_FACE),Ze(en);function K(A){v[A]!==!0&&(e.enable(A),v[A]=!0)}function le(A){v[A]!==!1&&(e.disable(A),v[A]=!1)}function we(A,j){return p[A]!==j?(e.bindFramebuffer(A,j),p[A]=j,A===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=j),A===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=j),!0):!1}function Se(A,j){let te=T,ce=!1;if(A){te=E.get(j),te===void 0&&(te=[],E.set(j,te));const Z=A.textures;if(te.length!==Z.length||te[0]!==e.COLOR_ATTACHMENT0){for(let z=0,fe=Z.length;z<fe;z++)te[z]=e.COLOR_ATTACHMENT0+z;te.length=Z.length,ce=!0}}else te[0]!==e.BACK&&(te[0]=e.BACK,ce=!0);ce&&e.drawBuffers(te)}function Be(A){return P!==A?(e.useProgram(A),P=A,!0):!1}const dt={[En]:e.FUNC_ADD,[_o]:e.FUNC_SUBTRACT,[mo]:e.FUNC_REVERSE_SUBTRACT};dt[Cs]=e.MIN,dt[ws]=e.MAX;const S={[Do]:e.ZERO,[Lo]:e.ONE,[Po]:e.SRC_COLOR,[wo]:e.SRC_ALPHA,[Co]:e.SRC_ALPHA_SATURATE,[bo]:e.DST_COLOR,[Ro]:e.DST_ALPHA,[Ao]:e.ONE_MINUS_SRC_COLOR,[xo]:e.ONE_MINUS_SRC_ALPHA,[To]:e.ONE_MINUS_DST_COLOR,[Mo]:e.ONE_MINUS_DST_ALPHA,[So]:e.CONSTANT_COLOR,[Eo]:e.ONE_MINUS_CONSTANT_COLOR,[vo]:e.CONSTANT_ALPHA,[go]:e.ONE_MINUS_CONSTANT_ALPHA};function Ze(A,j,te,ce,Z,z,fe,Le,Ye,ke){if(A===en){x===!0&&(le(e.BLEND),x=!1);return}if(x===!1&&(K(e.BLEND),x=!0),A!==is){if(A!==d||ke!==_){if((o!==En||M!==En)&&(e.blendEquation(e.FUNC_ADD),o=En,M=En),ke)switch(A){case Kn:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ba:e.blendFunc(e.ONE,e.ONE);break;case Fa:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Oa:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Kn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ba:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Fa:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Oa:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}L=null,R=null,U=null,C=null,O.set(0,0,0),V=0,d=A,_=ke}return}Z=Z||j,z=z||te,fe=fe||ce,(j!==o||Z!==M)&&(e.blendEquationSeparate(dt[j],dt[Z]),o=j,M=Z),(te!==L||ce!==R||z!==U||fe!==C)&&(e.blendFuncSeparate(S[te],S[ce],S[z],S[fe]),L=te,R=ce,U=z,C=fe),(Le.equals(O)===!1||Ye!==V)&&(e.blendColor(Le.r,Le.g,Le.b,Ye),O.copy(Le),V=Ye),d=A,_=!1}function Ue(A,j){A.side===yt?le(e.CULL_FACE):K(e.CULL_FACE);let te=A.side===xt;j&&(te=!te),be(te),A.blending===Kn&&A.transparent===!1?Ze(en):Ze(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),c.setFunc(A.depthFunc),c.setTest(A.depthTest),c.setMask(A.depthWrite),r.setMask(A.colorWrite);const ce=A.stencilWrite;s.setTest(ce),ce&&(s.setMask(A.stencilWriteMask),s.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),s.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),pe(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?K(e.SAMPLE_ALPHA_TO_COVERAGE):le(e.SAMPLE_ALPHA_TO_COVERAGE)}function be(A){h!==A&&(A?e.frontFace(e.CW):e.frontFace(e.CCW),h=A)}function ue(A){A!==ts?(K(e.CULL_FACE),A!==D&&(A===Na?e.cullFace(e.BACK):A===ns?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):le(e.CULL_FACE),D=A}function Qe(A){A!==B&&(W&&e.lineWidth(A),B=A)}function pe(A,j,te){A?(K(e.POLYGON_OFFSET_FILL),(X!==j||q!==te)&&(e.polygonOffset(j,te),X=j,q=te)):le(e.POLYGON_OFFSET_FILL)}function Ne(A){A?K(e.SCISSOR_TEST):le(e.SCISSOR_TEST)}function ct(A){A===void 0&&(A=e.TEXTURE0+$-1),ve!==A&&(e.activeTexture(A),ve=A)}function it(A,j,te){te===void 0&&(ve===null?te=e.TEXTURE0+$-1:te=ve);let ce=xe[te];ce===void 0&&(ce={type:void 0,texture:void 0},xe[te]=ce),(ce.type!==A||ce.texture!==j)&&(ve!==te&&(e.activeTexture(te),ve=te),e.bindTexture(A,j||k[A]),ce.type=A,ce.texture=j)}function m(){const A=xe[ve];A!==void 0&&A.type!==void 0&&(e.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function l(){try{e.compressedTexImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function y(){try{e.compressedTexImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function G(){try{e.texSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Y(){try{e.texSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function F(){try{e.compressedTexSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ee(){try{e.compressedTexSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ee(){try{e.texStorage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function he(){try{e.texStorage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function me(){try{e.texImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function J(){try{e.texImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function oe(A){nt.equals(A)===!1&&(e.scissor(A.x,A.y,A.z,A.w),nt.copy(A))}function Re(A){et.equals(A)===!1&&(e.viewport(A.x,A.y,A.z,A.w),et.copy(A))}function _e(A,j){let te=u.get(j);te===void 0&&(te=new WeakMap,u.set(j,te));let ce=te.get(A);ce===void 0&&(ce=e.getUniformBlockIndex(j,A.name),te.set(A,ce))}function ae(A,j){const ce=u.get(j).get(A);g.get(j)!==ce&&(e.uniformBlockBinding(j,ce,A.__bindingPointIndex),g.set(j,ce))}function ye(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),c.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),v={},ve=null,xe={},p={},E=new WeakMap,T=[],P=null,x=!1,d=null,o=null,L=null,R=null,M=null,U=null,C=null,O=new We(0,0,0),V=0,_=!1,h=null,D=null,B=null,X=null,q=null,nt.set(0,0,e.canvas.width,e.canvas.height),et.set(0,0,e.canvas.width,e.canvas.height),r.reset(),c.reset(),s.reset()}return{buffers:{color:r,depth:c,stencil:s},enable:K,disable:le,bindFramebuffer:we,drawBuffers:Se,useProgram:Be,setBlending:Ze,setMaterial:Ue,setFlipSided:be,setCullFace:ue,setLineWidth:Qe,setPolygonOffset:pe,setScissorTest:Ne,activeTexture:ct,bindTexture:it,unbindTexture:m,compressedTexImage2D:l,compressedTexImage3D:y,texImage2D:me,texImage3D:J,updateUBOMapping:_e,uniformBlockBinding:ae,texStorage2D:ee,texStorage3D:he,texSubImage2D:G,texSubImage3D:Y,compressedTexSubImage2D:F,compressedTexSubImage3D:Ee,scissor:oe,viewport:Re,reset:ye}}function hu(e,n,t,i,a,r,c){const s=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ut,v=new WeakMap;let p;const E=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(m,l){return T?new OffscreenCanvas(m,l):xs("canvas")}function x(m,l,y){let G=1;const Y=it(m);if((Y.width>y||Y.height>y)&&(G=y/Math.max(Y.width,Y.height)),G<1)if(typeof HTMLImageElement<"u"&&m instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&m instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&m instanceof ImageBitmap||typeof VideoFrame<"u"&&m instanceof VideoFrame){const F=Math.floor(G*Y.width),Ee=Math.floor(G*Y.height);p===void 0&&(p=P(F,Ee));const ee=l?P(F,Ee):p;return ee.width=F,ee.height=Ee,ee.getContext("2d").drawImage(m,0,0,F,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+F+"x"+Ee+")."),ee}else return"data"in m&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),m;return m}function d(m){return m.generateMipmaps}function o(m){e.generateMipmap(m)}function L(m){return m.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:m.isWebGL3DRenderTarget?e.TEXTURE_3D:m.isWebGLArrayRenderTarget||m.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function R(m,l,y,G,Y=!1){if(m!==null){if(e[m]!==void 0)return e[m];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+m+"'")}let F=l;if(l===e.RED&&(y===e.FLOAT&&(F=e.R32F),y===e.HALF_FLOAT&&(F=e.R16F),y===e.UNSIGNED_BYTE&&(F=e.R8)),l===e.RED_INTEGER&&(y===e.UNSIGNED_BYTE&&(F=e.R8UI),y===e.UNSIGNED_SHORT&&(F=e.R16UI),y===e.UNSIGNED_INT&&(F=e.R32UI),y===e.BYTE&&(F=e.R8I),y===e.SHORT&&(F=e.R16I),y===e.INT&&(F=e.R32I)),l===e.RG&&(y===e.FLOAT&&(F=e.RG32F),y===e.HALF_FLOAT&&(F=e.RG16F),y===e.UNSIGNED_BYTE&&(F=e.RG8)),l===e.RG_INTEGER&&(y===e.UNSIGNED_BYTE&&(F=e.RG8UI),y===e.UNSIGNED_SHORT&&(F=e.RG16UI),y===e.UNSIGNED_INT&&(F=e.RG32UI),y===e.BYTE&&(F=e.RG8I),y===e.SHORT&&(F=e.RG16I),y===e.INT&&(F=e.RG32I)),l===e.RGB_INTEGER&&(y===e.UNSIGNED_BYTE&&(F=e.RGB8UI),y===e.UNSIGNED_SHORT&&(F=e.RGB16UI),y===e.UNSIGNED_INT&&(F=e.RGB32UI),y===e.BYTE&&(F=e.RGB8I),y===e.SHORT&&(F=e.RGB16I),y===e.INT&&(F=e.RGB32I)),l===e.RGBA_INTEGER&&(y===e.UNSIGNED_BYTE&&(F=e.RGBA8UI),y===e.UNSIGNED_SHORT&&(F=e.RGBA16UI),y===e.UNSIGNED_INT&&(F=e.RGBA32UI),y===e.BYTE&&(F=e.RGBA8I),y===e.SHORT&&(F=e.RGBA16I),y===e.INT&&(F=e.RGBA32I)),l===e.RGB&&(y===e.UNSIGNED_INT_5_9_9_9_REV&&(F=e.RGB9_E5),y===e.UNSIGNED_INT_10F_11F_11F_REV&&(F=e.R11F_G11F_B10F)),l===e.RGBA){const Ee=Y?Br:at.getTransfer(G);y===e.FLOAT&&(F=e.RGBA32F),y===e.HALF_FLOAT&&(F=e.RGBA16F),y===e.UNSIGNED_BYTE&&(F=Ee===$e?e.SRGB8_ALPHA8:e.RGBA8),y===e.UNSIGNED_SHORT_4_4_4_4&&(F=e.RGBA4),y===e.UNSIGNED_SHORT_5_5_5_1&&(F=e.RGB5_A1)}return(F===e.R16F||F===e.R32F||F===e.RG16F||F===e.RG32F||F===e.RGBA16F||F===e.RGBA32F)&&n.get("EXT_color_buffer_float"),F}function M(m,l){let y;return m?l===null||l===yn||l===Un?y=e.DEPTH24_STENCIL8:l===Qt?y=e.DEPTH32F_STENCIL8:l===ei&&(y=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):l===null||l===yn||l===Un?y=e.DEPTH_COMPONENT24:l===Qt?y=e.DEPTH_COMPONENT32F:l===ei&&(y=e.DEPTH_COMPONENT16),y}function U(m,l){return d(m)===!0||m.isFramebufferTexture&&m.minFilter!==Rn&&m.minFilter!==ln?Math.log2(Math.max(l.width,l.height))+1:m.mipmaps!==void 0&&m.mipmaps.length>0?m.mipmaps.length:m.isCompressedTexture&&Array.isArray(m.image)?l.mipmaps.length:1}function C(m){const l=m.target;l.removeEventListener("dispose",C),V(l),l.isVideoTexture&&v.delete(l)}function O(m){const l=m.target;l.removeEventListener("dispose",O),h(l)}function V(m){const l=i.get(m);if(l.__webglInit===void 0)return;const y=m.source,G=E.get(y);if(G){const Y=G[l.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&_(m),Object.keys(G).length===0&&E.delete(y)}i.remove(m)}function _(m){const l=i.get(m);e.deleteTexture(l.__webglTexture);const y=m.source,G=E.get(y);delete G[l.__cacheKey],c.memory.textures--}function h(m){const l=i.get(m);if(m.depthTexture&&(m.depthTexture.dispose(),i.remove(m.depthTexture)),m.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(l.__webglFramebuffer[G]))for(let Y=0;Y<l.__webglFramebuffer[G].length;Y++)e.deleteFramebuffer(l.__webglFramebuffer[G][Y]);else e.deleteFramebuffer(l.__webglFramebuffer[G]);l.__webglDepthbuffer&&e.deleteRenderbuffer(l.__webglDepthbuffer[G])}else{if(Array.isArray(l.__webglFramebuffer))for(let G=0;G<l.__webglFramebuffer.length;G++)e.deleteFramebuffer(l.__webglFramebuffer[G]);else e.deleteFramebuffer(l.__webglFramebuffer);if(l.__webglDepthbuffer&&e.deleteRenderbuffer(l.__webglDepthbuffer),l.__webglMultisampledFramebuffer&&e.deleteFramebuffer(l.__webglMultisampledFramebuffer),l.__webglColorRenderbuffer)for(let G=0;G<l.__webglColorRenderbuffer.length;G++)l.__webglColorRenderbuffer[G]&&e.deleteRenderbuffer(l.__webglColorRenderbuffer[G]);l.__webglDepthRenderbuffer&&e.deleteRenderbuffer(l.__webglDepthRenderbuffer)}const y=m.textures;for(let G=0,Y=y.length;G<Y;G++){const F=i.get(y[G]);F.__webglTexture&&(e.deleteTexture(F.__webglTexture),c.memory.textures--),i.remove(y[G])}i.remove(m)}let D=0;function B(){D=0}function X(){const m=D;return m>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+m+" texture units while this GPU supports only "+a.maxTextures),D+=1,m}function q(m){const l=[];return l.push(m.wrapS),l.push(m.wrapT),l.push(m.wrapR||0),l.push(m.magFilter),l.push(m.minFilter),l.push(m.anisotropy),l.push(m.internalFormat),l.push(m.format),l.push(m.type),l.push(m.generateMipmaps),l.push(m.premultiplyAlpha),l.push(m.flipY),l.push(m.unpackAlignment),l.push(m.colorSpace),l.join()}function $(m,l){const y=i.get(m);if(m.isVideoTexture&&Ne(m),m.isRenderTargetTexture===!1&&m.isExternalTexture!==!0&&m.version>0&&y.__version!==m.version){const G=m.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(y,m,l);return}}else m.isExternalTexture&&(y.__webglTexture=m.sourceTexture?m.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,y.__webglTexture,e.TEXTURE0+l)}function W(m,l){const y=i.get(m);if(m.isRenderTargetTexture===!1&&m.version>0&&y.__version!==m.version){k(y,m,l);return}t.bindTexture(e.TEXTURE_2D_ARRAY,y.__webglTexture,e.TEXTURE0+l)}function ne(m,l){const y=i.get(m);if(m.isRenderTargetTexture===!1&&m.version>0&&y.__version!==m.version){k(y,m,l);return}t.bindTexture(e.TEXTURE_3D,y.__webglTexture,e.TEXTURE0+l)}function H(m,l){const y=i.get(m);if(m.version>0&&y.__version!==m.version){K(y,m,l);return}t.bindTexture(e.TEXTURE_CUBE_MAP,y.__webglTexture,e.TEXTURE0+l)}const ve={[Io]:e.REPEAT,[yo]:e.CLAMP_TO_EDGE,[Uo]:e.MIRRORED_REPEAT},xe={[Rn]:e.NEAREST,[No]:e.NEAREST_MIPMAP_NEAREST,[Hn]:e.NEAREST_MIPMAP_LINEAR,[ln]:e.LINEAR,[pi]:e.LINEAR_MIPMAP_NEAREST,[Tn]:e.LINEAR_MIPMAP_LINEAR},Ie={[ko]:e.NEVER,[Vo]:e.ALWAYS,[Ho]:e.LESS,[Rr]:e.LEQUAL,[Go]:e.EQUAL,[Bo]:e.GEQUAL,[Fo]:e.GREATER,[Oo]:e.NOTEQUAL};function Ve(m,l){if(l.type===Qt&&n.has("OES_texture_float_linear")===!1&&(l.magFilter===ln||l.magFilter===pi||l.magFilter===Hn||l.magFilter===Tn||l.minFilter===ln||l.minFilter===pi||l.minFilter===Hn||l.minFilter===Tn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(m,e.TEXTURE_WRAP_S,ve[l.wrapS]),e.texParameteri(m,e.TEXTURE_WRAP_T,ve[l.wrapT]),(m===e.TEXTURE_3D||m===e.TEXTURE_2D_ARRAY)&&e.texParameteri(m,e.TEXTURE_WRAP_R,ve[l.wrapR]),e.texParameteri(m,e.TEXTURE_MAG_FILTER,xe[l.magFilter]),e.texParameteri(m,e.TEXTURE_MIN_FILTER,xe[l.minFilter]),l.compareFunction&&(e.texParameteri(m,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(m,e.TEXTURE_COMPARE_FUNC,Ie[l.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(l.magFilter===Rn||l.minFilter!==Hn&&l.minFilter!==Tn||l.type===Qt&&n.has("OES_texture_float_linear")===!1)return;if(l.anisotropy>1||i.get(l).__currentAnisotropy){const y=n.get("EXT_texture_filter_anisotropic");e.texParameterf(m,y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(l.anisotropy,a.getMaxAnisotropy())),i.get(l).__currentAnisotropy=l.anisotropy}}}function nt(m,l){let y=!1;m.__webglInit===void 0&&(m.__webglInit=!0,l.addEventListener("dispose",C));const G=l.source;let Y=E.get(G);Y===void 0&&(Y={},E.set(G,Y));const F=q(l);if(F!==m.__cacheKey){Y[F]===void 0&&(Y[F]={texture:e.createTexture(),usedTimes:0},c.memory.textures++,y=!0),Y[F].usedTimes++;const Ee=Y[m.__cacheKey];Ee!==void 0&&(Y[m.__cacheKey].usedTimes--,Ee.usedTimes===0&&_(l)),m.__cacheKey=F,m.__webglTexture=Y[F].texture}return y}function et(m,l,y){return Math.floor(Math.floor(m/y)/l)}function Xe(m,l,y,G){const F=m.updateRanges;if(F.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,l.width,l.height,y,G,l.data);else{F.sort((J,oe)=>J.start-oe.start);let Ee=0;for(let J=1;J<F.length;J++){const oe=F[Ee],Re=F[J],_e=oe.start+oe.count,ae=et(Re.start,l.width,4),ye=et(oe.start,l.width,4);Re.start<=_e+1&&ae===ye&&et(Re.start+Re.count-1,l.width,4)===ae?oe.count=Math.max(oe.count,Re.start+Re.count-oe.start):(++Ee,F[Ee]=Re)}F.length=Ee+1;const ee=e.getParameter(e.UNPACK_ROW_LENGTH),he=e.getParameter(e.UNPACK_SKIP_PIXELS),me=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,l.width);for(let J=0,oe=F.length;J<oe;J++){const Re=F[J],_e=Math.floor(Re.start/4),ae=Math.ceil(Re.count/4),ye=_e%l.width,A=Math.floor(_e/l.width),j=ae,te=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,ye),e.pixelStorei(e.UNPACK_SKIP_ROWS,A),t.texSubImage2D(e.TEXTURE_2D,0,ye,A,j,te,y,G,l.data)}m.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ee),e.pixelStorei(e.UNPACK_SKIP_PIXELS,he),e.pixelStorei(e.UNPACK_SKIP_ROWS,me)}}function k(m,l,y){let G=e.TEXTURE_2D;(l.isDataArrayTexture||l.isCompressedArrayTexture)&&(G=e.TEXTURE_2D_ARRAY),l.isData3DTexture&&(G=e.TEXTURE_3D);const Y=nt(m,l),F=l.source;t.bindTexture(G,m.__webglTexture,e.TEXTURE0+y);const Ee=i.get(F);if(F.version!==Ee.__version||Y===!0){t.activeTexture(e.TEXTURE0+y);const ee=at.getPrimaries(at.workingColorSpace),he=l.colorSpace===cn?null:at.getPrimaries(l.colorSpace),me=l.colorSpace===cn||ee===he?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,l.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,l.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,l.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let J=x(l.image,!1,a.maxTextureSize);J=ct(l,J);const oe=r.convert(l.format,l.colorSpace),Re=r.convert(l.type);let _e=R(l.internalFormat,oe,Re,l.colorSpace,l.isVideoTexture);Ve(G,l);let ae;const ye=l.mipmaps,A=l.isVideoTexture!==!0,j=Ee.__version===void 0||Y===!0,te=F.dataReady,ce=U(l,J);if(l.isDepthTexture)_e=M(l.format===Qn,l.type),j&&(A?t.texStorage2D(e.TEXTURE_2D,1,_e,J.width,J.height):t.texImage2D(e.TEXTURE_2D,0,_e,J.width,J.height,0,oe,Re,null));else if(l.isDataTexture)if(ye.length>0){A&&j&&t.texStorage2D(e.TEXTURE_2D,ce,_e,ye[0].width,ye[0].height);for(let Z=0,z=ye.length;Z<z;Z++)ae=ye[Z],A?te&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,ae.width,ae.height,oe,Re,ae.data):t.texImage2D(e.TEXTURE_2D,Z,_e,ae.width,ae.height,0,oe,Re,ae.data);l.generateMipmaps=!1}else A?(j&&t.texStorage2D(e.TEXTURE_2D,ce,_e,J.width,J.height),te&&Xe(l,J,oe,Re)):t.texImage2D(e.TEXTURE_2D,0,_e,J.width,J.height,0,oe,Re,J.data);else if(l.isCompressedTexture)if(l.isCompressedArrayTexture){A&&j&&t.texStorage3D(e.TEXTURE_2D_ARRAY,ce,_e,ye[0].width,ye[0].height,J.depth);for(let Z=0,z=ye.length;Z<z;Z++)if(ae=ye[Z],l.format!==It)if(oe!==null)if(A){if(te)if(l.layerUpdates.size>0){const fe=Ha(ae.width,ae.height,l.format,l.type);for(const Le of l.layerUpdates){const Ye=ae.data.subarray(Le*fe/ae.data.BYTES_PER_ELEMENT,(Le+1)*fe/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,Le,ae.width,ae.height,1,oe,Ye)}l.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,ae.width,ae.height,J.depth,oe,ae.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Z,_e,ae.width,ae.height,J.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else A?te&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,ae.width,ae.height,J.depth,oe,Re,ae.data):t.texImage3D(e.TEXTURE_2D_ARRAY,Z,_e,ae.width,ae.height,J.depth,0,oe,Re,ae.data)}else{A&&j&&t.texStorage2D(e.TEXTURE_2D,ce,_e,ye[0].width,ye[0].height);for(let Z=0,z=ye.length;Z<z;Z++)ae=ye[Z],l.format!==It?oe!==null?A?te&&t.compressedTexSubImage2D(e.TEXTURE_2D,Z,0,0,ae.width,ae.height,oe,ae.data):t.compressedTexImage2D(e.TEXTURE_2D,Z,_e,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):A?te&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,ae.width,ae.height,oe,Re,ae.data):t.texImage2D(e.TEXTURE_2D,Z,_e,ae.width,ae.height,0,oe,Re,ae.data)}else if(l.isDataArrayTexture)if(A){if(j&&t.texStorage3D(e.TEXTURE_2D_ARRAY,ce,_e,J.width,J.height,J.depth),te)if(l.layerUpdates.size>0){const Z=Ha(J.width,J.height,l.format,l.type);for(const z of l.layerUpdates){const fe=J.data.subarray(z*Z/J.data.BYTES_PER_ELEMENT,(z+1)*Z/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,z,J.width,J.height,1,oe,Re,fe)}l.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,oe,Re,J.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,_e,J.width,J.height,J.depth,0,oe,Re,J.data);else if(l.isData3DTexture)A?(j&&t.texStorage3D(e.TEXTURE_3D,ce,_e,J.width,J.height,J.depth),te&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,oe,Re,J.data)):t.texImage3D(e.TEXTURE_3D,0,_e,J.width,J.height,J.depth,0,oe,Re,J.data);else if(l.isFramebufferTexture){if(j)if(A)t.texStorage2D(e.TEXTURE_2D,ce,_e,J.width,J.height);else{let Z=J.width,z=J.height;for(let fe=0;fe<ce;fe++)t.texImage2D(e.TEXTURE_2D,fe,_e,Z,z,0,oe,Re,null),Z>>=1,z>>=1}}else if(ye.length>0){if(A&&j){const Z=it(ye[0]);t.texStorage2D(e.TEXTURE_2D,ce,_e,Z.width,Z.height)}for(let Z=0,z=ye.length;Z<z;Z++)ae=ye[Z],A?te&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,oe,Re,ae):t.texImage2D(e.TEXTURE_2D,Z,_e,oe,Re,ae);l.generateMipmaps=!1}else if(A){if(j){const Z=it(J);t.texStorage2D(e.TEXTURE_2D,ce,_e,Z.width,Z.height)}te&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,oe,Re,J)}else t.texImage2D(e.TEXTURE_2D,0,_e,oe,Re,J);d(l)&&o(G),Ee.__version=F.version,l.onUpdate&&l.onUpdate(l)}m.__version=l.version}function K(m,l,y){if(l.image.length!==6)return;const G=nt(m,l),Y=l.source;t.bindTexture(e.TEXTURE_CUBE_MAP,m.__webglTexture,e.TEXTURE0+y);const F=i.get(Y);if(Y.version!==F.__version||G===!0){t.activeTexture(e.TEXTURE0+y);const Ee=at.getPrimaries(at.workingColorSpace),ee=l.colorSpace===cn?null:at.getPrimaries(l.colorSpace),he=l.colorSpace===cn||Ee===ee?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,l.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,l.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,l.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const me=l.isCompressedTexture||l.image[0].isCompressedTexture,J=l.image[0]&&l.image[0].isDataTexture,oe=[];for(let z=0;z<6;z++)!me&&!J?oe[z]=x(l.image[z],!0,a.maxCubemapSize):oe[z]=J?l.image[z].image:l.image[z],oe[z]=ct(l,oe[z]);const Re=oe[0],_e=r.convert(l.format,l.colorSpace),ae=r.convert(l.type),ye=R(l.internalFormat,_e,ae,l.colorSpace),A=l.isVideoTexture!==!0,j=F.__version===void 0||G===!0,te=Y.dataReady;let ce=U(l,Re);Ve(e.TEXTURE_CUBE_MAP,l);let Z;if(me){A&&j&&t.texStorage2D(e.TEXTURE_CUBE_MAP,ce,ye,Re.width,Re.height);for(let z=0;z<6;z++){Z=oe[z].mipmaps;for(let fe=0;fe<Z.length;fe++){const Le=Z[fe];l.format!==It?_e!==null?A?te&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,fe,0,0,Le.width,Le.height,_e,Le.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,fe,ye,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):A?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,fe,0,0,Le.width,Le.height,_e,ae,Le.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,fe,ye,Le.width,Le.height,0,_e,ae,Le.data)}}}else{if(Z=l.mipmaps,A&&j){Z.length>0&&ce++;const z=it(oe[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,ce,ye,z.width,z.height)}for(let z=0;z<6;z++)if(J){A?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,oe[z].width,oe[z].height,_e,ae,oe[z].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,ye,oe[z].width,oe[z].height,0,_e,ae,oe[z].data);for(let fe=0;fe<Z.length;fe++){const Ye=Z[fe].image[z].image;A?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,fe+1,0,0,Ye.width,Ye.height,_e,ae,Ye.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,fe+1,ye,Ye.width,Ye.height,0,_e,ae,Ye.data)}}else{A?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,_e,ae,oe[z]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,ye,_e,ae,oe[z]);for(let fe=0;fe<Z.length;fe++){const Le=Z[fe];A?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,fe+1,0,0,_e,ae,Le.image[z]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,fe+1,ye,_e,ae,Le.image[z])}}}d(l)&&o(e.TEXTURE_CUBE_MAP),F.__version=Y.version,l.onUpdate&&l.onUpdate(l)}m.__version=l.version}function le(m,l,y,G,Y,F){const Ee=r.convert(y.format,y.colorSpace),ee=r.convert(y.type),he=R(y.internalFormat,Ee,ee,y.colorSpace),me=i.get(l),J=i.get(y);if(J.__renderTarget=l,!me.__hasExternalTextures){const oe=Math.max(1,l.width>>F),Re=Math.max(1,l.height>>F);Y===e.TEXTURE_3D||Y===e.TEXTURE_2D_ARRAY?t.texImage3D(Y,F,he,oe,Re,l.depth,0,Ee,ee,null):t.texImage2D(Y,F,he,oe,Re,0,Ee,ee,null)}t.bindFramebuffer(e.FRAMEBUFFER,m),pe(l)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,G,Y,J.__webglTexture,0,Qe(l)):(Y===e.TEXTURE_2D||Y>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,G,Y,J.__webglTexture,F),t.bindFramebuffer(e.FRAMEBUFFER,null)}function we(m,l,y){if(e.bindRenderbuffer(e.RENDERBUFFER,m),l.depthBuffer){const G=l.depthTexture,Y=G&&G.isDepthTexture?G.type:null,F=M(l.stencilBuffer,Y),Ee=l.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ee=Qe(l);pe(l)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ee,F,l.width,l.height):y?e.renderbufferStorageMultisample(e.RENDERBUFFER,ee,F,l.width,l.height):e.renderbufferStorage(e.RENDERBUFFER,F,l.width,l.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Ee,e.RENDERBUFFER,m)}else{const G=l.textures;for(let Y=0;Y<G.length;Y++){const F=G[Y],Ee=r.convert(F.format,F.colorSpace),ee=r.convert(F.type),he=R(F.internalFormat,Ee,ee,F.colorSpace),me=Qe(l);y&&pe(l)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,me,he,l.width,l.height):pe(l)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,me,he,l.width,l.height):e.renderbufferStorage(e.RENDERBUFFER,he,l.width,l.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Se(m,l){if(l&&l.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(e.FRAMEBUFFER,m),!(l.depthTexture&&l.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=i.get(l.depthTexture);G.__renderTarget=l,(!G.__webglTexture||l.depthTexture.image.width!==l.width||l.depthTexture.image.height!==l.height)&&(l.depthTexture.image.width=l.width,l.depthTexture.image.height=l.height,l.depthTexture.needsUpdate=!0),$(l.depthTexture,0);const Y=G.__webglTexture,F=Qe(l);if(l.depthTexture.format===Yi)pe(l)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Y,0,F):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Y,0);else if(l.depthTexture.format===Qn)pe(l)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Y,0,F):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Be(m){const l=i.get(m),y=m.isWebGLCubeRenderTarget===!0;if(l.__boundDepthTexture!==m.depthTexture){const G=m.depthTexture;if(l.__depthDisposeCallback&&l.__depthDisposeCallback(),G){const Y=()=>{delete l.__boundDepthTexture,delete l.__depthDisposeCallback,G.removeEventListener("dispose",Y)};G.addEventListener("dispose",Y),l.__depthDisposeCallback=Y}l.__boundDepthTexture=G}if(m.depthTexture&&!l.__autoAllocateDepthBuffer){if(y)throw new Error("target.depthTexture not supported in Cube render targets");const G=m.texture.mipmaps;G&&G.length>0?Se(l.__webglFramebuffer[0],m):Se(l.__webglFramebuffer,m)}else if(y){l.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer[G]),l.__webglDepthbuffer[G]===void 0)l.__webglDepthbuffer[G]=e.createRenderbuffer(),we(l.__webglDepthbuffer[G],m,!1);else{const Y=m.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,F=l.__webglDepthbuffer[G];e.bindRenderbuffer(e.RENDERBUFFER,F),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,F)}}else{const G=m.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),l.__webglDepthbuffer===void 0)l.__webglDepthbuffer=e.createRenderbuffer(),we(l.__webglDepthbuffer,m,!1);else{const Y=m.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,F=l.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,F),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,F)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function dt(m,l,y){const G=i.get(m);l!==void 0&&le(G.__webglFramebuffer,m,m.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),y!==void 0&&Be(m)}function S(m){const l=m.texture,y=i.get(m),G=i.get(l);m.addEventListener("dispose",O);const Y=m.textures,F=m.isWebGLCubeRenderTarget===!0,Ee=Y.length>1;if(Ee||(G.__webglTexture===void 0&&(G.__webglTexture=e.createTexture()),G.__version=l.version,c.memory.textures++),F){y.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(l.mipmaps&&l.mipmaps.length>0){y.__webglFramebuffer[ee]=[];for(let he=0;he<l.mipmaps.length;he++)y.__webglFramebuffer[ee][he]=e.createFramebuffer()}else y.__webglFramebuffer[ee]=e.createFramebuffer()}else{if(l.mipmaps&&l.mipmaps.length>0){y.__webglFramebuffer=[];for(let ee=0;ee<l.mipmaps.length;ee++)y.__webglFramebuffer[ee]=e.createFramebuffer()}else y.__webglFramebuffer=e.createFramebuffer();if(Ee)for(let ee=0,he=Y.length;ee<he;ee++){const me=i.get(Y[ee]);me.__webglTexture===void 0&&(me.__webglTexture=e.createTexture(),c.memory.textures++)}if(m.samples>0&&pe(m)===!1){y.__webglMultisampledFramebuffer=e.createFramebuffer(),y.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,y.__webglMultisampledFramebuffer);for(let ee=0;ee<Y.length;ee++){const he=Y[ee];y.__webglColorRenderbuffer[ee]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,y.__webglColorRenderbuffer[ee]);const me=r.convert(he.format,he.colorSpace),J=r.convert(he.type),oe=R(he.internalFormat,me,J,he.colorSpace,m.isXRRenderTarget===!0),Re=Qe(m);e.renderbufferStorageMultisample(e.RENDERBUFFER,Re,oe,m.width,m.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ee,e.RENDERBUFFER,y.__webglColorRenderbuffer[ee])}e.bindRenderbuffer(e.RENDERBUFFER,null),m.depthBuffer&&(y.__webglDepthRenderbuffer=e.createRenderbuffer(),we(y.__webglDepthRenderbuffer,m,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(F){t.bindTexture(e.TEXTURE_CUBE_MAP,G.__webglTexture),Ve(e.TEXTURE_CUBE_MAP,l);for(let ee=0;ee<6;ee++)if(l.mipmaps&&l.mipmaps.length>0)for(let he=0;he<l.mipmaps.length;he++)le(y.__webglFramebuffer[ee][he],m,l,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he);else le(y.__webglFramebuffer[ee],m,l,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);d(l)&&o(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let ee=0,he=Y.length;ee<he;ee++){const me=Y[ee],J=i.get(me);let oe=e.TEXTURE_2D;(m.isWebGL3DRenderTarget||m.isWebGLArrayRenderTarget)&&(oe=m.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(oe,J.__webglTexture),Ve(oe,me),le(y.__webglFramebuffer,m,me,e.COLOR_ATTACHMENT0+ee,oe,0),d(me)&&o(oe)}t.unbindTexture()}else{let ee=e.TEXTURE_2D;if((m.isWebGL3DRenderTarget||m.isWebGLArrayRenderTarget)&&(ee=m.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(ee,G.__webglTexture),Ve(ee,l),l.mipmaps&&l.mipmaps.length>0)for(let he=0;he<l.mipmaps.length;he++)le(y.__webglFramebuffer[he],m,l,e.COLOR_ATTACHMENT0,ee,he);else le(y.__webglFramebuffer,m,l,e.COLOR_ATTACHMENT0,ee,0);d(l)&&o(ee),t.unbindTexture()}m.depthBuffer&&Be(m)}function Ze(m){const l=m.textures;for(let y=0,G=l.length;y<G;y++){const Y=l[y];if(d(Y)){const F=L(m),Ee=i.get(Y).__webglTexture;t.bindTexture(F,Ee),o(F),t.unbindTexture()}}}const Ue=[],be=[];function ue(m){if(m.samples>0){if(pe(m)===!1){const l=m.textures,y=m.width,G=m.height;let Y=e.COLOR_BUFFER_BIT;const F=m.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Ee=i.get(m),ee=l.length>1;if(ee)for(let me=0;me<l.length;me++)t.bindFramebuffer(e.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,Ee.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const he=m.texture.mipmaps;he&&he.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let me=0;me<l.length;me++){if(m.resolveDepthBuffer&&(m.depthBuffer&&(Y|=e.DEPTH_BUFFER_BIT),m.stencilBuffer&&m.resolveStencilBuffer&&(Y|=e.STENCIL_BUFFER_BIT)),ee){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Ee.__webglColorRenderbuffer[me]);const J=i.get(l[me]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,J,0)}e.blitFramebuffer(0,0,y,G,0,0,y,G,Y,e.NEAREST),g===!0&&(Ue.length=0,be.length=0,Ue.push(e.COLOR_ATTACHMENT0+me),m.depthBuffer&&m.resolveDepthBuffer===!1&&(Ue.push(F),be.push(F),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,be)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ee)for(let me=0;me<l.length;me++){t.bindFramebuffer(e.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.RENDERBUFFER,Ee.__webglColorRenderbuffer[me]);const J=i.get(l[me]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,Ee.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.TEXTURE_2D,J,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(m.depthBuffer&&m.resolveDepthBuffer===!1&&g){const l=m.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[l])}}}function Qe(m){return Math.min(a.maxSamples,m.samples)}function pe(m){const l=i.get(m);return m.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&l.__useRenderToTexture!==!1}function Ne(m){const l=c.render.frame;v.get(m)!==l&&(v.set(m,l),m.update())}function ct(m,l){const y=m.colorSpace,G=m.format,Y=m.type;return m.isCompressedTexture===!0||m.isVideoTexture===!0||y!==ai&&y!==cn&&(at.getTransfer(y)===$e?(G!==It||Y!==an)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",y)),l}function it(m){return typeof HTMLImageElement<"u"&&m instanceof HTMLImageElement?(u.width=m.naturalWidth||m.width,u.height=m.naturalHeight||m.height):typeof VideoFrame<"u"&&m instanceof VideoFrame?(u.width=m.displayWidth,u.height=m.displayHeight):(u.width=m.width,u.height=m.height),u}this.allocateTextureUnit=X,this.resetTextureUnits=B,this.setTexture2D=$,this.setTexture2DArray=W,this.setTexture3D=ne,this.setTextureCube=H,this.rebindTextures=dt,this.setupRenderTarget=S,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=le,this.useMultisampledRTT=pe}function mu(e,n){function t(i,a=cn){let r;const c=at.getTransfer(a);if(i===an)return e.UNSIGNED_BYTE;if(i===Cr)return e.UNSIGNED_SHORT_4_4_4_4;if(i===wr)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Yo)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Ko)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===$o)return e.BYTE;if(i===Zo)return e.SHORT;if(i===ei)return e.UNSIGNED_SHORT;if(i===Dr)return e.INT;if(i===yn)return e.UNSIGNED_INT;if(i===Qt)return e.FLOAT;if(i===ii)return e.HALF_FLOAT;if(i===Qo)return e.ALPHA;if(i===Jo)return e.RGB;if(i===It)return e.RGBA;if(i===Yi)return e.DEPTH_COMPONENT;if(i===Qn)return e.DEPTH_STENCIL;if(i===jo)return e.RED;if(i===Ur)return e.RED_INTEGER;if(i===es)return e.RG;if(i===yr)return e.RG_INTEGER;if(i===Ir)return e.RGBA_INTEGER;if(i===hi||i===mi||i===_i||i===gi)if(c===$e)if(r=n.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===hi)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===mi)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_i)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===gi)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=n.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===hi)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===mi)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_i)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===gi)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sa||i===ca||i===la||i===da)if(r=n.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===sa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ca)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===la)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===da)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fa||i===ua||i===pa)if(r=n.get("WEBGL_compressed_texture_etc"),r!==null){if(i===fa||i===ua)return c===$e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===pa)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ha||i===ma||i===_a||i===ga||i===va||i===Ea||i===Sa||i===Ma||i===Ta||i===xa||i===Aa||i===Ra||i===ba||i===Ca)if(r=n.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ha)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ma)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_a)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ga)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===va)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ea)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sa)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ma)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ta)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xa)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Aa)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ra)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ba)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ca)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wa||i===Pa||i===La)if(r=n.get("EXT_texture_compression_bptc"),r!==null){if(i===wa)return c===$e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===La)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Da||i===Ua||i===ya||i===Ia)if(r=n.get("EXT_texture_compression_rgtc"),r!==null){if(i===Da)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ua)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ya)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ia)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Un?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const _u=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gu=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vu{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new Pr(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new rn({vertexShader:_u,fragmentShader:gu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new Lr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Eu extends uo{constructor(n,t){super();const i=this;let a=null,r=1,c=null,s="local-floor",g=1,u=null,v=null,p=null,E=null,T=null,P=null;const x=typeof XRWebGLBinding<"u",d=new vu,o={},L=t.getContextAttributes();let R=null,M=null;const U=[],C=[],O=new ut;let V=null;const _=new An;_.viewport=new _t;const h=new An;h.viewport=new _t;const D=[_,h],B=new po;let X=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let K=U[k];return K===void 0&&(K=new ui,U[k]=K),K.getTargetRaySpace()},this.getControllerGrip=function(k){let K=U[k];return K===void 0&&(K=new ui,U[k]=K),K.getGripSpace()},this.getHand=function(k){let K=U[k];return K===void 0&&(K=new ui,U[k]=K),K.getHandSpace()};function $(k){const K=C.indexOf(k.inputSource);if(K===-1)return;const le=U[K];le!==void 0&&(le.update(k.inputSource,k.frame,u||c),le.dispatchEvent({type:k.type,data:k.inputSource}))}function W(){a.removeEventListener("select",$),a.removeEventListener("selectstart",$),a.removeEventListener("selectend",$),a.removeEventListener("squeeze",$),a.removeEventListener("squeezestart",$),a.removeEventListener("squeezeend",$),a.removeEventListener("end",W),a.removeEventListener("inputsourceschange",ne);for(let k=0;k<U.length;k++){const K=C[k];K!==null&&(C[k]=null,U[k].disconnect(K))}X=null,q=null,d.reset();for(const k in o)delete o[k];n.setRenderTarget(R),T=null,E=null,p=null,a=null,M=null,Xe.stop(),i.isPresenting=!1,n.setPixelRatio(V),n.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||c},this.setReferenceSpace=function(k){u=k},this.getBaseLayer=function(){return E!==null?E:T},this.getBinding=function(){return p===null&&x&&(p=new XRWebGLBinding(a,t)),p},this.getFrame=function(){return P},this.getSession=function(){return a},this.setSession=async function(k){if(a=k,a!==null){if(R=n.getRenderTarget(),a.addEventListener("select",$),a.addEventListener("selectstart",$),a.addEventListener("selectend",$),a.addEventListener("squeeze",$),a.addEventListener("squeezestart",$),a.addEventListener("squeezeend",$),a.addEventListener("end",W),a.addEventListener("inputsourceschange",ne),L.xrCompatible!==!0&&await t.makeXRCompatible(),V=n.getPixelRatio(),n.getSize(O),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,we=null,Se=null;L.depth&&(Se=L.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=L.stencil?Qn:Yi,we=L.stencil?Un:yn);const Be={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};p=this.getBinding(),E=p.createProjectionLayer(Be),a.updateRenderState({layers:[E]}),n.setPixelRatio(1),n.setSize(E.textureWidth,E.textureHeight,!1),M=new pn(E.textureWidth,E.textureHeight,{format:It,type:an,depthTexture:new Ar(E.textureWidth,E.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:L.stencil,colorSpace:n.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}else{const le={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:r};T=new XRWebGLLayer(a,t,le),a.updateRenderState({baseLayer:T}),n.setPixelRatio(1),n.setSize(T.framebufferWidth,T.framebufferHeight,!1),M=new pn(T.framebufferWidth,T.framebufferHeight,{format:It,type:an,colorSpace:n.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:T.ignoreDepthValues===!1,resolveStencilBuffer:T.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(g),u=null,c=await a.requestReferenceSpace(s),Xe.setContext(a),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function ne(k){for(let K=0;K<k.removed.length;K++){const le=k.removed[K],we=C.indexOf(le);we>=0&&(C[we]=null,U[we].disconnect(le))}for(let K=0;K<k.added.length;K++){const le=k.added[K];let we=C.indexOf(le);if(we===-1){for(let Be=0;Be<U.length;Be++)if(Be>=C.length){C.push(le),we=Be;break}else if(C[Be]===null){C[Be]=le,we=Be;break}if(we===-1)break}const Se=U[we];Se&&Se.connect(le)}}const H=new Pe,ve=new Pe;function xe(k,K,le){H.setFromMatrixPosition(K.matrixWorld),ve.setFromMatrixPosition(le.matrixWorld);const we=H.distanceTo(ve),Se=K.projectionMatrix.elements,Be=le.projectionMatrix.elements,dt=Se[14]/(Se[10]-1),S=Se[14]/(Se[10]+1),Ze=(Se[9]+1)/Se[5],Ue=(Se[9]-1)/Se[5],be=(Se[8]-1)/Se[0],ue=(Be[8]+1)/Be[0],Qe=dt*be,pe=dt*ue,Ne=we/(-be+ue),ct=Ne*-be;if(K.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(ct),k.translateZ(Ne),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),Se[10]===-1)k.projectionMatrix.copy(K.projectionMatrix),k.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const it=dt+Ne,m=S+Ne,l=Qe-ct,y=pe+(we-ct),G=Ze*S/m*it,Y=Ue*S/m*it;k.projectionMatrix.makePerspective(l,y,G,Y,it,m),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function Ie(k,K){K===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(K.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(a===null)return;let K=k.near,le=k.far;d.texture!==null&&(d.depthNear>0&&(K=d.depthNear),d.depthFar>0&&(le=d.depthFar)),B.near=h.near=_.near=K,B.far=h.far=_.far=le,(X!==B.near||q!==B.far)&&(a.updateRenderState({depthNear:B.near,depthFar:B.far}),X=B.near,q=B.far),B.layers.mask=k.layers.mask|6,_.layers.mask=B.layers.mask&3,h.layers.mask=B.layers.mask&5;const we=k.parent,Se=B.cameras;Ie(B,we);for(let Be=0;Be<Se.length;Be++)Ie(Se[Be],we);Se.length===2?xe(B,_,h):B.projectionMatrix.copy(_.projectionMatrix),Ve(k,B,we)};function Ve(k,K,le){le===null?k.matrix.copy(K.matrixWorld):(k.matrix.copy(le.matrixWorld),k.matrix.invert(),k.matrix.multiply(K.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(K.projectionMatrix),k.projectionMatrixInverse.copy(K.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=ho*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(E===null&&T===null))return g},this.setFoveation=function(k){g=k,E!==null&&(E.fixedFoveation=k),T!==null&&T.fixedFoveation!==void 0&&(T.fixedFoveation=k)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(B)},this.getCameraTexture=function(k){return o[k]};let nt=null;function et(k,K){if(v=K.getViewerPose(u||c),P=K,v!==null){const le=v.views;T!==null&&(n.setRenderTargetFramebuffer(M,T.framebuffer),n.setRenderTarget(M));let we=!1;le.length!==B.cameras.length&&(B.cameras.length=0,we=!0);for(let S=0;S<le.length;S++){const Ze=le[S];let Ue=null;if(T!==null)Ue=T.getViewport(Ze);else{const ue=p.getViewSubImage(E,Ze);Ue=ue.viewport,S===0&&(n.setRenderTargetTextures(M,ue.colorTexture,ue.depthStencilTexture),n.setRenderTarget(M))}let be=D[S];be===void 0&&(be=new An,be.layers.enable(S),be.viewport=new _t,D[S]=be),be.matrix.fromArray(Ze.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(Ze.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),S===0&&(B.matrix.copy(be.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),we===!0&&B.cameras.push(be)}const Se=a.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&x){p=i.getBinding();const S=p.getDepthInformation(le[0]);S&&S.isValid&&S.texture&&d.init(S,a.renderState)}if(Se&&Se.includes("camera-access")&&x){n.state.unbindTexture(),p=i.getBinding();for(let S=0;S<le.length;S++){const Ze=le[S].camera;if(Ze){let Ue=o[Ze];Ue||(Ue=new Pr,o[Ze]=Ue);const be=p.getCameraImage(Ze);Ue.sourceTexture=be}}}}for(let le=0;le<U.length;le++){const we=C[le],Se=U[le];we!==null&&Se!==void 0&&Se.update(we,K,u||c)}nt&&nt(k,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),P=null}const Xe=new kr;Xe.setAnimationLoop(et),this.setAnimationLoop=function(k){nt=k},this.dispose=function(){}}}const Kt=new Fr,Su=new nn;function Mu(e,n){function t(d,o){d.matrixAutoUpdate===!0&&d.updateMatrix(),o.value.copy(d.matrix)}function i(d,o){o.color.getRGB(d.fogColor.value,Or(e)),o.isFog?(d.fogNear.value=o.near,d.fogFar.value=o.far):o.isFogExp2&&(d.fogDensity.value=o.density)}function a(d,o,L,R,M){o.isMeshBasicMaterial||o.isMeshLambertMaterial?r(d,o):o.isMeshToonMaterial?(r(d,o),p(d,o)):o.isMeshPhongMaterial?(r(d,o),v(d,o)):o.isMeshStandardMaterial?(r(d,o),E(d,o),o.isMeshPhysicalMaterial&&T(d,o,M)):o.isMeshMatcapMaterial?(r(d,o),P(d,o)):o.isMeshDepthMaterial?r(d,o):o.isMeshDistanceMaterial?(r(d,o),x(d,o)):o.isMeshNormalMaterial?r(d,o):o.isLineBasicMaterial?(c(d,o),o.isLineDashedMaterial&&s(d,o)):o.isPointsMaterial?g(d,o,L,R):o.isSpriteMaterial?u(d,o):o.isShadowMaterial?(d.color.value.copy(o.color),d.opacity.value=o.opacity):o.isShaderMaterial&&(o.uniformsNeedUpdate=!1)}function r(d,o){d.opacity.value=o.opacity,o.color&&d.diffuse.value.copy(o.color),o.emissive&&d.emissive.value.copy(o.emissive).multiplyScalar(o.emissiveIntensity),o.map&&(d.map.value=o.map,t(o.map,d.mapTransform)),o.alphaMap&&(d.alphaMap.value=o.alphaMap,t(o.alphaMap,d.alphaMapTransform)),o.bumpMap&&(d.bumpMap.value=o.bumpMap,t(o.bumpMap,d.bumpMapTransform),d.bumpScale.value=o.bumpScale,o.side===xt&&(d.bumpScale.value*=-1)),o.normalMap&&(d.normalMap.value=o.normalMap,t(o.normalMap,d.normalMapTransform),d.normalScale.value.copy(o.normalScale),o.side===xt&&d.normalScale.value.negate()),o.displacementMap&&(d.displacementMap.value=o.displacementMap,t(o.displacementMap,d.displacementMapTransform),d.displacementScale.value=o.displacementScale,d.displacementBias.value=o.displacementBias),o.emissiveMap&&(d.emissiveMap.value=o.emissiveMap,t(o.emissiveMap,d.emissiveMapTransform)),o.specularMap&&(d.specularMap.value=o.specularMap,t(o.specularMap,d.specularMapTransform)),o.alphaTest>0&&(d.alphaTest.value=o.alphaTest);const L=n.get(o),R=L.envMap,M=L.envMapRotation;R&&(d.envMap.value=R,Kt.copy(M),Kt.x*=-1,Kt.y*=-1,Kt.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Kt.y*=-1,Kt.z*=-1),d.envMapRotation.value.setFromMatrix4(Su.makeRotationFromEuler(Kt)),d.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=o.reflectivity,d.ior.value=o.ior,d.refractionRatio.value=o.refractionRatio),o.lightMap&&(d.lightMap.value=o.lightMap,d.lightMapIntensity.value=o.lightMapIntensity,t(o.lightMap,d.lightMapTransform)),o.aoMap&&(d.aoMap.value=o.aoMap,d.aoMapIntensity.value=o.aoMapIntensity,t(o.aoMap,d.aoMapTransform))}function c(d,o){d.diffuse.value.copy(o.color),d.opacity.value=o.opacity,o.map&&(d.map.value=o.map,t(o.map,d.mapTransform))}function s(d,o){d.dashSize.value=o.dashSize,d.totalSize.value=o.dashSize+o.gapSize,d.scale.value=o.scale}function g(d,o,L,R){d.diffuse.value.copy(o.color),d.opacity.value=o.opacity,d.size.value=o.size*L,d.scale.value=R*.5,o.map&&(d.map.value=o.map,t(o.map,d.uvTransform)),o.alphaMap&&(d.alphaMap.value=o.alphaMap,t(o.alphaMap,d.alphaMapTransform)),o.alphaTest>0&&(d.alphaTest.value=o.alphaTest)}function u(d,o){d.diffuse.value.copy(o.color),d.opacity.value=o.opacity,d.rotation.value=o.rotation,o.map&&(d.map.value=o.map,t(o.map,d.mapTransform)),o.alphaMap&&(d.alphaMap.value=o.alphaMap,t(o.alphaMap,d.alphaMapTransform)),o.alphaTest>0&&(d.alphaTest.value=o.alphaTest)}function v(d,o){d.specular.value.copy(o.specular),d.shininess.value=Math.max(o.shininess,1e-4)}function p(d,o){o.gradientMap&&(d.gradientMap.value=o.gradientMap)}function E(d,o){d.metalness.value=o.metalness,o.metalnessMap&&(d.metalnessMap.value=o.metalnessMap,t(o.metalnessMap,d.metalnessMapTransform)),d.roughness.value=o.roughness,o.roughnessMap&&(d.roughnessMap.value=o.roughnessMap,t(o.roughnessMap,d.roughnessMapTransform)),o.envMap&&(d.envMapIntensity.value=o.envMapIntensity)}function T(d,o,L){d.ior.value=o.ior,o.sheen>0&&(d.sheenColor.value.copy(o.sheenColor).multiplyScalar(o.sheen),d.sheenRoughness.value=o.sheenRoughness,o.sheenColorMap&&(d.sheenColorMap.value=o.sheenColorMap,t(o.sheenColorMap,d.sheenColorMapTransform)),o.sheenRoughnessMap&&(d.sheenRoughnessMap.value=o.sheenRoughnessMap,t(o.sheenRoughnessMap,d.sheenRoughnessMapTransform))),o.clearcoat>0&&(d.clearcoat.value=o.clearcoat,d.clearcoatRoughness.value=o.clearcoatRoughness,o.clearcoatMap&&(d.clearcoatMap.value=o.clearcoatMap,t(o.clearcoatMap,d.clearcoatMapTransform)),o.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=o.clearcoatRoughnessMap,t(o.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),o.clearcoatNormalMap&&(d.clearcoatNormalMap.value=o.clearcoatNormalMap,t(o.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(o.clearcoatNormalScale),o.side===xt&&d.clearcoatNormalScale.value.negate())),o.dispersion>0&&(d.dispersion.value=o.dispersion),o.iridescence>0&&(d.iridescence.value=o.iridescence,d.iridescenceIOR.value=o.iridescenceIOR,d.iridescenceThicknessMinimum.value=o.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=o.iridescenceThicknessRange[1],o.iridescenceMap&&(d.iridescenceMap.value=o.iridescenceMap,t(o.iridescenceMap,d.iridescenceMapTransform)),o.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=o.iridescenceThicknessMap,t(o.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),o.transmission>0&&(d.transmission.value=o.transmission,d.transmissionSamplerMap.value=L.texture,d.transmissionSamplerSize.value.set(L.width,L.height),o.transmissionMap&&(d.transmissionMap.value=o.transmissionMap,t(o.transmissionMap,d.transmissionMapTransform)),d.thickness.value=o.thickness,o.thicknessMap&&(d.thicknessMap.value=o.thicknessMap,t(o.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=o.attenuationDistance,d.attenuationColor.value.copy(o.attenuationColor)),o.anisotropy>0&&(d.anisotropyVector.value.set(o.anisotropy*Math.cos(o.anisotropyRotation),o.anisotropy*Math.sin(o.anisotropyRotation)),o.anisotropyMap&&(d.anisotropyMap.value=o.anisotropyMap,t(o.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=o.specularIntensity,d.specularColor.value.copy(o.specularColor),o.specularColorMap&&(d.specularColorMap.value=o.specularColorMap,t(o.specularColorMap,d.specularColorMapTransform)),o.specularIntensityMap&&(d.specularIntensityMap.value=o.specularIntensityMap,t(o.specularIntensityMap,d.specularIntensityMapTransform))}function P(d,o){o.matcap&&(d.matcap.value=o.matcap)}function x(d,o){const L=n.get(o).light;d.referencePosition.value.setFromMatrixPosition(L.matrixWorld),d.nearDistance.value=L.shadow.camera.near,d.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Tu(e,n,t,i){let a={},r={},c=[];const s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function g(L,R){const M=R.program;i.uniformBlockBinding(L,M)}function u(L,R){let M=a[L.id];M===void 0&&(P(L),M=v(L),a[L.id]=M,L.addEventListener("dispose",d));const U=R.program;i.updateUBOMapping(L,U);const C=n.render.frame;r[L.id]!==C&&(E(L),r[L.id]=C)}function v(L){const R=p();L.__bindingPointIndex=R;const M=e.createBuffer(),U=L.__size,C=L.usage;return e.bindBuffer(e.UNIFORM_BUFFER,M),e.bufferData(e.UNIFORM_BUFFER,U,C),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,R,M),M}function p(){for(let L=0;L<s;L++)if(c.indexOf(L)===-1)return c.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function E(L){const R=a[L.id],M=L.uniforms,U=L.__cache;e.bindBuffer(e.UNIFORM_BUFFER,R);for(let C=0,O=M.length;C<O;C++){const V=Array.isArray(M[C])?M[C]:[M[C]];for(let _=0,h=V.length;_<h;_++){const D=V[_];if(T(D,C,_,U)===!0){const B=D.__offset,X=Array.isArray(D.value)?D.value:[D.value];let q=0;for(let $=0;$<X.length;$++){const W=X[$],ne=x(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,e.bufferSubData(e.UNIFORM_BUFFER,B+q,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,q),q+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,B,D.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function T(L,R,M,U){const C=L.value,O=R+"_"+M;if(U[O]===void 0)return typeof C=="number"||typeof C=="boolean"?U[O]=C:U[O]=C.clone(),!0;{const V=U[O];if(typeof C=="number"||typeof C=="boolean"){if(V!==C)return U[O]=C,!0}else if(V.equals(C)===!1)return V.copy(C),!0}return!1}function P(L){const R=L.uniforms;let M=0;const U=16;for(let O=0,V=R.length;O<V;O++){const _=Array.isArray(R[O])?R[O]:[R[O]];for(let h=0,D=_.length;h<D;h++){const B=_[h],X=Array.isArray(B.value)?B.value:[B.value];for(let q=0,$=X.length;q<$;q++){const W=X[q],ne=x(W),H=M%U,ve=H%ne.boundary,xe=H+ve;M+=ve,xe!==0&&U-xe<ne.storage&&(M+=U-xe),B.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=ne.storage}}}const C=M%U;return C>0&&(M+=U-C),L.__size=M,L.__cache={},this}function x(L){const R={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(R.boundary=4,R.storage=4):L.isVector2?(R.boundary=8,R.storage=8):L.isVector3||L.isColor?(R.boundary=16,R.storage=12):L.isVector4?(R.boundary=16,R.storage=16):L.isMatrix3?(R.boundary=48,R.storage=48):L.isMatrix4?(R.boundary=64,R.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),R}function d(L){const R=L.target;R.removeEventListener("dispose",d);const M=c.indexOf(R.__bindingPointIndex);c.splice(M,1),e.deleteBuffer(a[R.id]),delete a[R.id],delete r[R.id]}function o(){for(const L in a)e.deleteBuffer(a[L]);c=[],a={},r={}}return{bind:g,update:u,dispose:o}}class xu{constructor(n={}){const{canvas:t=so(),context:i=null,depth:a=!0,stencil:r=!1,alpha:c=!1,antialias:s=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:u=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:E=!1}=n;this.isWebGLRenderer=!0;let T;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=i.getContextAttributes().alpha}else T=c;const P=new Uint32Array(4),x=new Int32Array(4);let d=null,o=null;const L=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let U=!1;this._outputColorSpace=co;let C=0,O=0,V=null,_=-1,h=null;const D=new _t,B=new _t;let X=null;const q=new We(0);let $=0,W=t.width,ne=t.height,H=1,ve=null,xe=null;const Ie=new _t(0,0,W,ne),Ve=new _t(0,0,W,ne);let nt=!1;const et=new xr;let Xe=!1,k=!1;const K=new nn,le=new Pe,we=new _t,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function dt(){return V===null?H:1}let S=i;function Ze(f,b){return t.getContext(f,b)}try{const f={alpha:!0,depth:a,stencil:r,antialias:s,premultipliedAlpha:g,preserveDrawingBuffer:u,powerPreference:v,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lo}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",Z,!1),S===null){const b="webgl2";if(S=Ze(b,f),S===null)throw Ze(b)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(f){throw console.error("THREE.WebGLRenderer: "+f.message),f}let Ue,be,ue,Qe,pe,Ne,ct,it,m,l,y,G,Y,F,Ee,ee,he,me,J,oe,Re,_e,ae,ye;function A(){Ue=new Ud(S),Ue.init(),_e=new mu(S,Ue),be=new Rd(S,Ue,n,_e),ue=new pu(S,Ue),be.reversedDepthBuffer&&E&&ue.buffers.depth.setReversed(!0),Qe=new Nd(S),pe=new eu,Ne=new hu(S,Ue,ue,pe,be,_e,Qe),ct=new Cd(M),it=new Dd(M),m=new Vs(S),ae=new xd(S,m),l=new yd(S,m,Qe,ae),y=new Fd(S,l,m,Qe),J=new Od(S,be,Ne),ee=new bd(pe),G=new jf(M,ct,it,Ue,be,ae,ee),Y=new Mu(M,pe),F=new nu,Ee=new cu(Ue),me=new Td(M,ct,it,ue,y,T,g),he=new fu(M,y,be),ye=new Tu(S,Qe,be,ue),oe=new Ad(S,Ue,Qe),Re=new Id(S,Ue,Qe),Qe.programs=G.programs,M.capabilities=be,M.extensions=Ue,M.properties=pe,M.renderLists=F,M.shadowMap=he,M.state=ue,M.info=Qe}A();const j=new Eu(M,S);this.xr=j,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const f=Ue.get("WEBGL_lose_context");f&&f.loseContext()},this.forceContextRestore=function(){const f=Ue.get("WEBGL_lose_context");f&&f.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(f){f!==void 0&&(H=f,this.setSize(W,ne,!1))},this.getSize=function(f){return f.set(W,ne)},this.setSize=function(f,b,I=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=f,ne=b,t.width=Math.floor(f*H),t.height=Math.floor(b*H),I===!0&&(t.style.width=f+"px",t.style.height=b+"px"),this.setViewport(0,0,f,b)},this.getDrawingBufferSize=function(f){return f.set(W*H,ne*H).floor()},this.setDrawingBufferSize=function(f,b,I){W=f,ne=b,H=I,t.width=Math.floor(f*I),t.height=Math.floor(b*I),this.setViewport(0,0,f,b)},this.getCurrentViewport=function(f){return f.copy(D)},this.getViewport=function(f){return f.copy(Ie)},this.setViewport=function(f,b,I,N){f.isVector4?Ie.set(f.x,f.y,f.z,f.w):Ie.set(f,b,I,N),ue.viewport(D.copy(Ie).multiplyScalar(H).round())},this.getScissor=function(f){return f.copy(Ve)},this.setScissor=function(f,b,I,N){f.isVector4?Ve.set(f.x,f.y,f.z,f.w):Ve.set(f,b,I,N),ue.scissor(B.copy(Ve).multiplyScalar(H).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(f){ue.setScissorTest(nt=f)},this.setOpaqueSort=function(f){ve=f},this.setTransparentSort=function(f){xe=f},this.getClearColor=function(f){return f.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(f=!0,b=!0,I=!0){let N=0;if(f){let w=!1;if(V!==null){const Q=V.texture.format;w=Q===Ir||Q===yr||Q===Ur}if(w){const Q=V.texture.type,re=Q===an||Q===yn||Q===ei||Q===Un||Q===Cr||Q===wr,de=me.getClearColor(),se=me.getClearAlpha(),Ae=de.r,Ce=de.g,Me=de.b;re?(P[0]=Ae,P[1]=Ce,P[2]=Me,P[3]=se,S.clearBufferuiv(S.COLOR,0,P)):(x[0]=Ae,x[1]=Ce,x[2]=Me,x[3]=se,S.clearBufferiv(S.COLOR,0,x))}else N|=S.COLOR_BUFFER_BIT}b&&(N|=S.DEPTH_BUFFER_BIT),I&&(N|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),me.dispose(),F.dispose(),Ee.dispose(),pe.dispose(),ct.dispose(),it.dispose(),y.dispose(),ae.dispose(),ye.dispose(),G.dispose(),j.dispose(),j.removeEventListener("sessionstart",bt),j.removeEventListener("sessionend",ea),Xt.stop()};function te(f){f.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const f=Qe.autoReset,b=he.enabled,I=he.autoUpdate,N=he.needsUpdate,w=he.type;A(),Qe.autoReset=f,he.enabled=b,he.autoUpdate=I,he.needsUpdate=N,he.type=w}function Z(f){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",f.statusMessage)}function z(f){const b=f.target;b.removeEventListener("dispose",z),fe(b)}function fe(f){Le(f),pe.remove(f)}function Le(f){const b=pe.get(f).programs;b!==void 0&&(b.forEach(function(I){G.releaseProgram(I)}),f.isShaderMaterial&&G.releaseShaderCache(f))}this.renderBufferDirect=function(f,b,I,N,w,Q){b===null&&(b=Se);const re=w.isMesh&&w.matrixWorld.determinant()<0,de=to(f,b,I,N,w);ue.setMaterial(N,re);let se=I.index,Ae=1;if(N.wireframe===!0){if(se=l.getWireframeAttribute(I),se===void 0)return;Ae=2}const Ce=I.drawRange,Me=I.attributes.position;let Fe=Ce.start*Ae,ze=(Ce.start+Ce.count)*Ae;Q!==null&&(Fe=Math.max(Fe,Q.start*Ae),ze=Math.min(ze,(Q.start+Q.count)*Ae)),se!==null?(Fe=Math.max(Fe,0),ze=Math.min(ze,se.count)):Me!=null&&(Fe=Math.max(Fe,0),ze=Math.min(ze,Me.count));const tt=ze-Fe;if(tt<0||tt===1/0)return;ae.setup(w,N,de,I,se);let Ke,qe=oe;if(se!==null&&(Ke=m.get(se),qe=Re,qe.setIndex(Ke)),w.isMesh)N.wireframe===!0?(ue.setLineWidth(N.wireframeLinewidth*dt()),qe.setMode(S.LINES)):qe.setMode(S.TRIANGLES);else if(w.isLine){let Te=N.linewidth;Te===void 0&&(Te=1),ue.setLineWidth(Te*dt()),w.isLineSegments?qe.setMode(S.LINES):w.isLineLoop?qe.setMode(S.LINE_LOOP):qe.setMode(S.LINE_STRIP)}else w.isPoints?qe.setMode(S.POINTS):w.isSprite&&qe.setMode(S.TRIANGLES);if(w.isBatchedMesh)if(w._multiDrawInstances!==null)Di("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),qe.renderMultiDrawInstances(w._multiDrawStarts,w._multiDrawCounts,w._multiDrawCount,w._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))qe.renderMultiDraw(w._multiDrawStarts,w._multiDrawCounts,w._multiDrawCount);else{const Te=w._multiDrawStarts,Je=w._multiDrawCounts,Ge=w._multiDrawCount,gt=se?m.get(se).bytesPerElement:1,on=pe.get(N).currentProgram.getUniforms();for(let vt=0;vt<Ge;vt++)on.setValue(S,"_gl_DrawID",vt),qe.render(Te[vt]/gt,Je[vt])}else if(w.isInstancedMesh)qe.renderInstances(Fe,tt,w.count);else if(I.isInstancedBufferGeometry){const Te=I._maxInstanceCount!==void 0?I._maxInstanceCount:1/0,Je=Math.min(I.instanceCount,Te);qe.renderInstances(Fe,tt,Je)}else qe.render(Fe,tt)};function Ye(f,b,I){f.transparent===!0&&f.side===yt&&f.forceSinglePass===!1?(f.side=xt,f.needsUpdate=!0,Gn(f,b,I),f.side=Dn,f.needsUpdate=!0,Gn(f,b,I),f.side=yt):Gn(f,b,I)}this.compile=function(f,b,I=null){I===null&&(I=f),o=Ee.get(I),o.init(b),R.push(o),I.traverseVisible(function(w){w.isLight&&w.layers.test(b.layers)&&(o.pushLight(w),w.castShadow&&o.pushShadow(w))}),f!==I&&f.traverseVisible(function(w){w.isLight&&w.layers.test(b.layers)&&(o.pushLight(w),w.castShadow&&o.pushShadow(w))}),o.setupLights();const N=new Set;return f.traverse(function(w){if(!(w.isMesh||w.isPoints||w.isLine||w.isSprite))return;const Q=w.material;if(Q)if(Array.isArray(Q))for(let re=0;re<Q.length;re++){const de=Q[re];Ye(de,I,w),N.add(de)}else Ye(Q,I,w),N.add(Q)}),o=R.pop(),N},this.compileAsync=function(f,b,I=null){const N=this.compile(f,b,I);return new Promise(w=>{function Q(){if(N.forEach(function(re){pe.get(re).currentProgram.isReady()&&N.delete(re)}),N.size===0){w(f);return}setTimeout(Q,10)}Ue.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let ke=null;function Dt(f){ke&&ke(f)}function bt(){Xt.stop()}function ea(){Xt.start()}const Xt=new kr;Xt.setAnimationLoop(Dt),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(f){ke=f,j.setAnimationLoop(f),f===null?Xt.stop():Xt.start()},j.addEventListener("sessionstart",bt),j.addEventListener("sessionend",ea),this.render=function(f,b){if(b!==void 0&&b.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld(),b.parent===null&&b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(b),b=j.getCamera()),f.isScene===!0&&f.onBeforeRender(M,f,b,V),o=Ee.get(f,R.length),o.init(b),R.push(o),K.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse),et.setFromProjectionMatrix(K,oa,b.reversedDepth),k=this.localClippingEnabled,Xe=ee.init(this.clippingPlanes,k),d=F.get(f,L.length),d.init(),L.push(d),j.enabled===!0&&j.isPresenting===!0){const Q=M.xr.getDepthSensingMesh();Q!==null&&di(Q,b,-1/0,M.sortObjects)}di(f,b,0,M.sortObjects),d.finish(),M.sortObjects===!0&&d.sort(ve,xe),Be=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Be&&me.addToRenderList(d,f),this.info.render.frame++,Xe===!0&&ee.beginShadows();const I=o.state.shadowsArray;he.render(I,f,b),Xe===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const N=d.opaque,w=d.transmissive;if(o.setupLights(),b.isArrayCamera){const Q=b.cameras;if(w.length>0)for(let re=0,de=Q.length;re<de;re++){const se=Q[re];na(N,w,f,se)}Be&&me.render(f);for(let re=0,de=Q.length;re<de;re++){const se=Q[re];ta(d,f,se,se.viewport)}}else w.length>0&&na(N,w,f,b),Be&&me.render(f),ta(d,f,b);V!==null&&O===0&&(Ne.updateMultisampleRenderTarget(V),Ne.updateRenderTargetMipmap(V)),f.isScene===!0&&f.onAfterRender(M,f,b),ae.resetDefaultState(),_=-1,h=null,R.pop(),R.length>0?(o=R[R.length-1],Xe===!0&&ee.setGlobalState(M.clippingPlanes,o.state.camera)):o=null,L.pop(),L.length>0?d=L[L.length-1]:d=null};function di(f,b,I,N){if(f.visible===!1)return;if(f.layers.test(b.layers)){if(f.isGroup)I=f.renderOrder;else if(f.isLOD)f.autoUpdate===!0&&f.update(b);else if(f.isLight)o.pushLight(f),f.castShadow&&o.pushShadow(f);else if(f.isSprite){if(!f.frustumCulled||et.intersectsSprite(f)){N&&we.setFromMatrixPosition(f.matrixWorld).applyMatrix4(K);const re=y.update(f),de=f.material;de.visible&&d.push(f,re,de,I,we.z,null)}}else if((f.isMesh||f.isLine||f.isPoints)&&(!f.frustumCulled||et.intersectsObject(f))){const re=y.update(f),de=f.material;if(N&&(f.boundingSphere!==void 0?(f.boundingSphere===null&&f.computeBoundingSphere(),we.copy(f.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),we.copy(re.boundingSphere.center)),we.applyMatrix4(f.matrixWorld).applyMatrix4(K)),Array.isArray(de)){const se=re.groups;for(let Ae=0,Ce=se.length;Ae<Ce;Ae++){const Me=se[Ae],Fe=de[Me.materialIndex];Fe&&Fe.visible&&d.push(f,re,Fe,I,we.z,Me)}}else de.visible&&d.push(f,re,de,I,we.z,null)}}const Q=f.children;for(let re=0,de=Q.length;re<de;re++)di(Q[re],b,I,N)}function ta(f,b,I,N){const w=f.opaque,Q=f.transmissive,re=f.transparent;o.setupLightsView(I),Xe===!0&&ee.setGlobalState(M.clippingPlanes,I),N&&ue.viewport(D.copy(N)),w.length>0&&Bn(w,b,I),Q.length>0&&Bn(Q,b,I),re.length>0&&Bn(re,b,I),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function na(f,b,I,N){if((I.isScene===!0?I.overrideMaterial:null)!==null)return;o.state.transmissionRenderTarget[N.id]===void 0&&(o.state.transmissionRenderTarget[N.id]=new pn(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?ii:an,minFilter:Tn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const Q=o.state.transmissionRenderTarget[N.id],re=N.viewport||D;Q.setSize(re.z*M.transmissionResolutionScale,re.w*M.transmissionResolutionScale);const de=M.getRenderTarget(),se=M.getActiveCubeFace(),Ae=M.getActiveMipmapLevel();M.setRenderTarget(Q),M.getClearColor(q),$=M.getClearAlpha(),$<1&&M.setClearColor(16777215,.5),M.clear(),Be&&me.render(I);const Ce=M.toneMapping;M.toneMapping=kt;const Me=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),o.setupLightsView(N),Xe===!0&&ee.setGlobalState(M.clippingPlanes,N),Bn(f,I,N),Ne.updateMultisampleRenderTarget(Q),Ne.updateRenderTargetMipmap(Q),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let ze=0,tt=b.length;ze<tt;ze++){const Ke=b[ze],qe=Ke.object,Te=Ke.geometry,Je=Ke.material,Ge=Ke.group;if(Je.side===yt&&qe.layers.test(N.layers)){const gt=Je.side;Je.side=xt,Je.needsUpdate=!0,ia(qe,I,N,Te,Je,Ge),Je.side=gt,Je.needsUpdate=!0,Fe=!0}}Fe===!0&&(Ne.updateMultisampleRenderTarget(Q),Ne.updateRenderTargetMipmap(Q))}M.setRenderTarget(de,se,Ae),M.setClearColor(q,$),Me!==void 0&&(N.viewport=Me),M.toneMapping=Ce}function Bn(f,b,I){const N=b.isScene===!0?b.overrideMaterial:null;for(let w=0,Q=f.length;w<Q;w++){const re=f[w],de=re.object,se=re.geometry,Ae=re.group;let Ce=re.material;Ce.allowOverride===!0&&N!==null&&(Ce=N),de.layers.test(I.layers)&&ia(de,b,I,se,Ce,Ae)}}function ia(f,b,I,N,w,Q){f.onBeforeRender(M,b,I,N,w,Q),f.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,f.matrixWorld),f.normalMatrix.getNormalMatrix(f.modelViewMatrix),w.onBeforeRender(M,b,I,N,f,Q),w.transparent===!0&&w.side===yt&&w.forceSinglePass===!1?(w.side=xt,w.needsUpdate=!0,M.renderBufferDirect(I,b,N,w,f,Q),w.side=Dn,w.needsUpdate=!0,M.renderBufferDirect(I,b,N,w,f,Q),w.side=yt):M.renderBufferDirect(I,b,N,w,f,Q),f.onAfterRender(M,b,I,N,w,Q)}function Gn(f,b,I){b.isScene!==!0&&(b=Se);const N=pe.get(f),w=o.state.lights,Q=o.state.shadowsArray,re=w.state.version,de=G.getParameters(f,w.state,Q,b,I),se=G.getProgramCacheKey(de);let Ae=N.programs;N.environment=f.isMeshStandardMaterial?b.environment:null,N.fog=b.fog,N.envMap=(f.isMeshStandardMaterial?it:ct).get(f.envMap||N.environment),N.envMapRotation=N.environment!==null&&f.envMap===null?b.environmentRotation:f.envMapRotation,Ae===void 0&&(f.addEventListener("dispose",z),Ae=new Map,N.programs=Ae);let Ce=Ae.get(se);if(Ce!==void 0){if(N.currentProgram===Ce&&N.lightsStateVersion===re)return ra(f,de),Ce}else de.uniforms=G.getUniforms(f),f.onBeforeCompile(de,M),Ce=G.acquireProgram(de,se),Ae.set(se,Ce),N.uniforms=de.uniforms;const Me=N.uniforms;return(!f.isShaderMaterial&&!f.isRawShaderMaterial||f.clipping===!0)&&(Me.clippingPlanes=ee.uniform),ra(f,de),N.needsLights=io(f),N.lightsStateVersion=re,N.needsLights&&(Me.ambientLightColor.value=w.state.ambient,Me.lightProbe.value=w.state.probe,Me.directionalLights.value=w.state.directional,Me.directionalLightShadows.value=w.state.directionalShadow,Me.spotLights.value=w.state.spot,Me.spotLightShadows.value=w.state.spotShadow,Me.rectAreaLights.value=w.state.rectArea,Me.ltc_1.value=w.state.rectAreaLTC1,Me.ltc_2.value=w.state.rectAreaLTC2,Me.pointLights.value=w.state.point,Me.pointLightShadows.value=w.state.pointShadow,Me.hemisphereLights.value=w.state.hemi,Me.directionalShadowMap.value=w.state.directionalShadowMap,Me.directionalShadowMatrix.value=w.state.directionalShadowMatrix,Me.spotShadowMap.value=w.state.spotShadowMap,Me.spotLightMatrix.value=w.state.spotLightMatrix,Me.spotLightMap.value=w.state.spotLightMap,Me.pointShadowMap.value=w.state.pointShadowMap,Me.pointShadowMatrix.value=w.state.pointShadowMatrix),N.currentProgram=Ce,N.uniformsList=null,Ce}function aa(f){if(f.uniformsList===null){const b=f.currentProgram.getUniforms();f.uniformsList=$n.seqWithValue(b.seq,f.uniforms)}return f.uniformsList}function ra(f,b){const I=pe.get(f);I.outputColorSpace=b.outputColorSpace,I.batching=b.batching,I.batchingColor=b.batchingColor,I.instancing=b.instancing,I.instancingColor=b.instancingColor,I.instancingMorph=b.instancingMorph,I.skinning=b.skinning,I.morphTargets=b.morphTargets,I.morphNormals=b.morphNormals,I.morphColors=b.morphColors,I.morphTargetsCount=b.morphTargetsCount,I.numClippingPlanes=b.numClippingPlanes,I.numIntersection=b.numClipIntersection,I.vertexAlphas=b.vertexAlphas,I.vertexTangents=b.vertexTangents,I.toneMapping=b.toneMapping}function to(f,b,I,N,w){b.isScene!==!0&&(b=Se),Ne.resetTextureUnits();const Q=b.fog,re=N.isMeshStandardMaterial?b.environment:null,de=V===null?M.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:ai,se=(N.isMeshStandardMaterial?it:ct).get(N.envMap||re),Ae=N.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,Ce=!!I.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),Me=!!I.morphAttributes.position,Fe=!!I.morphAttributes.normal,ze=!!I.morphAttributes.color;let tt=kt;N.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(tt=M.toneMapping);const Ke=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,qe=Ke!==void 0?Ke.length:0,Te=pe.get(N),Je=o.state.lights;if(Xe===!0&&(k===!0||f!==h)){const ft=f===h&&N.id===_;ee.setState(N,f,ft)}let Ge=!1;N.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Je.state.version||Te.outputColorSpace!==de||w.isBatchedMesh&&Te.batching===!1||!w.isBatchedMesh&&Te.batching===!0||w.isBatchedMesh&&Te.batchingColor===!0&&w.colorTexture===null||w.isBatchedMesh&&Te.batchingColor===!1&&w.colorTexture!==null||w.isInstancedMesh&&Te.instancing===!1||!w.isInstancedMesh&&Te.instancing===!0||w.isSkinnedMesh&&Te.skinning===!1||!w.isSkinnedMesh&&Te.skinning===!0||w.isInstancedMesh&&Te.instancingColor===!0&&w.instanceColor===null||w.isInstancedMesh&&Te.instancingColor===!1&&w.instanceColor!==null||w.isInstancedMesh&&Te.instancingMorph===!0&&w.morphTexture===null||w.isInstancedMesh&&Te.instancingMorph===!1&&w.morphTexture!==null||Te.envMap!==se||N.fog===!0&&Te.fog!==Q||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ee.numPlanes||Te.numIntersection!==ee.numIntersection)||Te.vertexAlphas!==Ae||Te.vertexTangents!==Ce||Te.morphTargets!==Me||Te.morphNormals!==Fe||Te.morphColors!==ze||Te.toneMapping!==tt||Te.morphTargetsCount!==qe)&&(Ge=!0):(Ge=!0,Te.__version=N.version);let gt=Te.currentProgram;Ge===!0&&(gt=Gn(N,b,w));let on=!1,vt=!1,vn=!1;const je=gt.getUniforms(),Et=Te.uniforms;if(ue.useProgram(gt.program)&&(on=!0,vt=!0,vn=!0),N.id!==_&&(_=N.id,vt=!0),on||h!==f){ue.buffers.depth.getReversed()&&f.reversedDepth!==!0&&(f._reversedDepth=!0,f.updateProjectionMatrix()),je.setValue(S,"projectionMatrix",f.projectionMatrix),je.setValue(S,"viewMatrix",f.matrixWorldInverse);const pt=je.map.cameraPosition;pt!==void 0&&pt.setValue(S,le.setFromMatrixPosition(f.matrixWorld)),be.logarithmicDepthBuffer&&je.setValue(S,"logDepthBufFC",2/(Math.log(f.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&je.setValue(S,"isOrthographic",f.isOrthographicCamera===!0),h!==f&&(h=f,vt=!0,vn=!0)}if(w.isSkinnedMesh){je.setOptional(S,w,"bindMatrix"),je.setOptional(S,w,"bindMatrixInverse");const ft=w.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),je.setValue(S,"boneTexture",ft.boneTexture,Ne))}w.isBatchedMesh&&(je.setOptional(S,w,"batchingTexture"),je.setValue(S,"batchingTexture",w._matricesTexture,Ne),je.setOptional(S,w,"batchingIdTexture"),je.setValue(S,"batchingIdTexture",w._indirectTexture,Ne),je.setOptional(S,w,"batchingColorTexture"),w._colorsTexture!==null&&je.setValue(S,"batchingColorTexture",w._colorsTexture,Ne));const St=I.morphAttributes;if((St.position!==void 0||St.normal!==void 0||St.color!==void 0)&&J.update(w,I,gt),(vt||Te.receiveShadow!==w.receiveShadow)&&(Te.receiveShadow=w.receiveShadow,je.setValue(S,"receiveShadow",w.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(Et.envMap.value=se,Et.flipEnvMap.value=se.isCubeTexture&&se.isRenderTargetTexture===!1?-1:1),N.isMeshStandardMaterial&&N.envMap===null&&b.environment!==null&&(Et.envMapIntensity.value=b.environmentIntensity),vt&&(je.setValue(S,"toneMappingExposure",M.toneMappingExposure),Te.needsLights&&no(Et,vn),Q&&N.fog===!0&&Y.refreshFogUniforms(Et,Q),Y.refreshMaterialUniforms(Et,N,H,ne,o.state.transmissionRenderTarget[f.id]),$n.upload(S,aa(Te),Et,Ne)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&($n.upload(S,aa(Te),Et,Ne),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&je.setValue(S,"center",w.center),je.setValue(S,"modelViewMatrix",w.modelViewMatrix),je.setValue(S,"normalMatrix",w.normalMatrix),je.setValue(S,"modelMatrix",w.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const ft=N.uniformsGroups;for(let pt=0,fi=ft.length;pt<fi;pt++){const qt=ft[pt];ye.update(qt,gt),ye.bind(qt,gt)}}return gt}function no(f,b){f.ambientLightColor.needsUpdate=b,f.lightProbe.needsUpdate=b,f.directionalLights.needsUpdate=b,f.directionalLightShadows.needsUpdate=b,f.pointLights.needsUpdate=b,f.pointLightShadows.needsUpdate=b,f.spotLights.needsUpdate=b,f.spotLightShadows.needsUpdate=b,f.rectAreaLights.needsUpdate=b,f.hemisphereLights.needsUpdate=b}function io(f){return f.isMeshLambertMaterial||f.isMeshToonMaterial||f.isMeshPhongMaterial||f.isMeshStandardMaterial||f.isShadowMaterial||f.isShaderMaterial&&f.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(f,b,I){const N=pe.get(f);N.__autoAllocateDepthBuffer=f.resolveDepthBuffer===!1,N.__autoAllocateDepthBuffer===!1&&(N.__useRenderToTexture=!1),pe.get(f.texture).__webglTexture=b,pe.get(f.depthTexture).__webglTexture=N.__autoAllocateDepthBuffer?void 0:I,N.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(f,b){const I=pe.get(f);I.__webglFramebuffer=b,I.__useDefaultFramebuffer=b===void 0};const ao=S.createFramebuffer();this.setRenderTarget=function(f,b=0,I=0){V=f,C=b,O=I;let N=!0,w=null,Q=!1,re=!1;if(f){const se=pe.get(f);if(se.__useDefaultFramebuffer!==void 0)ue.bindFramebuffer(S.FRAMEBUFFER,null),N=!1;else if(se.__webglFramebuffer===void 0)Ne.setupRenderTarget(f);else if(se.__hasExternalTextures)Ne.rebindTextures(f,pe.get(f.texture).__webglTexture,pe.get(f.depthTexture).__webglTexture);else if(f.depthBuffer){const Me=f.depthTexture;if(se.__boundDepthTexture!==Me){if(Me!==null&&pe.has(Me)&&(f.width!==Me.image.width||f.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(f)}}const Ae=f.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(re=!0);const Ce=pe.get(f).__webglFramebuffer;f.isWebGLCubeRenderTarget?(Array.isArray(Ce[b])?w=Ce[b][I]:w=Ce[b],Q=!0):f.samples>0&&Ne.useMultisampledRTT(f)===!1?w=pe.get(f).__webglMultisampledFramebuffer:Array.isArray(Ce)?w=Ce[I]:w=Ce,D.copy(f.viewport),B.copy(f.scissor),X=f.scissorTest}else D.copy(Ie).multiplyScalar(H).floor(),B.copy(Ve).multiplyScalar(H).floor(),X=nt;if(I!==0&&(w=ao),ue.bindFramebuffer(S.FRAMEBUFFER,w)&&N&&ue.drawBuffers(f,w),ue.viewport(D),ue.scissor(B),ue.setScissorTest(X),Q){const se=pe.get(f.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+b,se.__webglTexture,I)}else if(re){const se=b;for(let Ae=0;Ae<f.textures.length;Ae++){const Ce=pe.get(f.textures[Ae]);S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0+Ae,Ce.__webglTexture,I,se)}}else if(f!==null&&I!==0){const se=pe.get(f.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,se.__webglTexture,I)}_=-1},this.readRenderTargetPixels=function(f,b,I,N,w,Q,re,de=0){if(!(f&&f.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let se=pe.get(f).__webglFramebuffer;if(f.isWebGLCubeRenderTarget&&re!==void 0&&(se=se[re]),se){ue.bindFramebuffer(S.FRAMEBUFFER,se);try{const Ae=f.textures[de],Ce=Ae.format,Me=Ae.type;if(!be.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!be.textureTypeReadable(Me)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}b>=0&&b<=f.width-N&&I>=0&&I<=f.height-w&&(f.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+de),S.readPixels(b,I,N,w,_e.convert(Ce),_e.convert(Me),Q))}finally{const Ae=V!==null?pe.get(V).__webglFramebuffer:null;ue.bindFramebuffer(S.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(f,b,I,N,w,Q,re,de=0){if(!(f&&f.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let se=pe.get(f).__webglFramebuffer;if(f.isWebGLCubeRenderTarget&&re!==void 0&&(se=se[re]),se)if(b>=0&&b<=f.width-N&&I>=0&&I<=f.height-w){ue.bindFramebuffer(S.FRAMEBUFFER,se);const Ae=f.textures[de],Ce=Ae.format,Me=Ae.type;if(!be.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!be.textureTypeReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Fe=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Fe),S.bufferData(S.PIXEL_PACK_BUFFER,Q.byteLength,S.STREAM_READ),f.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+de),S.readPixels(b,I,N,w,_e.convert(Ce),_e.convert(Me),0);const ze=V!==null?pe.get(V).__webglFramebuffer:null;ue.bindFramebuffer(S.FRAMEBUFFER,ze);const tt=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await fo(S,tt,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,Fe),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,Q),S.deleteBuffer(Fe),S.deleteSync(tt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(f,b=null,I=0){const N=Math.pow(2,-I),w=Math.floor(f.image.width*N),Q=Math.floor(f.image.height*N),re=b!==null?b.x:0,de=b!==null?b.y:0;Ne.setTexture2D(f,0),S.copyTexSubImage2D(S.TEXTURE_2D,I,0,0,re,de,w,Q),ue.unbindTexture()};const ro=S.createFramebuffer(),oo=S.createFramebuffer();this.copyTextureToTexture=function(f,b,I=null,N=null,w=0,Q=null){Q===null&&(w!==0?(Di("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=w,w=0):Q=0);let re,de,se,Ae,Ce,Me,Fe,ze,tt;const Ke=f.isCompressedTexture?f.mipmaps[Q]:f.image;if(I!==null)re=I.max.x-I.min.x,de=I.max.y-I.min.y,se=I.isBox3?I.max.z-I.min.z:1,Ae=I.min.x,Ce=I.min.y,Me=I.isBox3?I.min.z:0;else{const St=Math.pow(2,-w);re=Math.floor(Ke.width*St),de=Math.floor(Ke.height*St),f.isDataArrayTexture?se=Ke.depth:f.isData3DTexture?se=Math.floor(Ke.depth*St):se=1,Ae=0,Ce=0,Me=0}N!==null?(Fe=N.x,ze=N.y,tt=N.z):(Fe=0,ze=0,tt=0);const qe=_e.convert(b.format),Te=_e.convert(b.type);let Je;b.isData3DTexture?(Ne.setTexture3D(b,0),Je=S.TEXTURE_3D):b.isDataArrayTexture||b.isCompressedArrayTexture?(Ne.setTexture2DArray(b,0),Je=S.TEXTURE_2D_ARRAY):(Ne.setTexture2D(b,0),Je=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,b.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,b.unpackAlignment);const Ge=S.getParameter(S.UNPACK_ROW_LENGTH),gt=S.getParameter(S.UNPACK_IMAGE_HEIGHT),on=S.getParameter(S.UNPACK_SKIP_PIXELS),vt=S.getParameter(S.UNPACK_SKIP_ROWS),vn=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,Ke.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Ke.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Ae),S.pixelStorei(S.UNPACK_SKIP_ROWS,Ce),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Me);const je=f.isDataArrayTexture||f.isData3DTexture,Et=b.isDataArrayTexture||b.isData3DTexture;if(f.isDepthTexture){const St=pe.get(f),ft=pe.get(b),pt=pe.get(St.__renderTarget),fi=pe.get(ft.__renderTarget);ue.bindFramebuffer(S.READ_FRAMEBUFFER,pt.__webglFramebuffer),ue.bindFramebuffer(S.DRAW_FRAMEBUFFER,fi.__webglFramebuffer);for(let qt=0;qt<se;qt++)je&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,pe.get(f).__webglTexture,w,Me+qt),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,pe.get(b).__webglTexture,Q,tt+qt)),S.blitFramebuffer(Ae,Ce,re,de,Fe,ze,re,de,S.DEPTH_BUFFER_BIT,S.NEAREST);ue.bindFramebuffer(S.READ_FRAMEBUFFER,null),ue.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(w!==0||f.isRenderTargetTexture||pe.has(f)){const St=pe.get(f),ft=pe.get(b);ue.bindFramebuffer(S.READ_FRAMEBUFFER,ro),ue.bindFramebuffer(S.DRAW_FRAMEBUFFER,oo);for(let pt=0;pt<se;pt++)je?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,St.__webglTexture,w,Me+pt):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,St.__webglTexture,w),Et?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,ft.__webglTexture,Q,tt+pt):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,ft.__webglTexture,Q),w!==0?S.blitFramebuffer(Ae,Ce,re,de,Fe,ze,re,de,S.COLOR_BUFFER_BIT,S.NEAREST):Et?S.copyTexSubImage3D(Je,Q,Fe,ze,tt+pt,Ae,Ce,re,de):S.copyTexSubImage2D(Je,Q,Fe,ze,Ae,Ce,re,de);ue.bindFramebuffer(S.READ_FRAMEBUFFER,null),ue.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else Et?f.isDataTexture||f.isData3DTexture?S.texSubImage3D(Je,Q,Fe,ze,tt,re,de,se,qe,Te,Ke.data):b.isCompressedArrayTexture?S.compressedTexSubImage3D(Je,Q,Fe,ze,tt,re,de,se,qe,Ke.data):S.texSubImage3D(Je,Q,Fe,ze,tt,re,de,se,qe,Te,Ke):f.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,Q,Fe,ze,re,de,qe,Te,Ke.data):f.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,Q,Fe,ze,Ke.width,Ke.height,qe,Ke.data):S.texSubImage2D(S.TEXTURE_2D,Q,Fe,ze,re,de,qe,Te,Ke);S.pixelStorei(S.UNPACK_ROW_LENGTH,Ge),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,gt),S.pixelStorei(S.UNPACK_SKIP_PIXELS,on),S.pixelStorei(S.UNPACK_SKIP_ROWS,vt),S.pixelStorei(S.UNPACK_SKIP_IMAGES,vn),Q===0&&b.generateMipmaps&&S.generateMipmap(Je),ue.unbindTexture()},this.initRenderTarget=function(f){pe.get(f).__webglFramebuffer===void 0&&Ne.setupRenderTarget(f)},this.initTexture=function(f){f.isCubeTexture?Ne.setTextureCube(f,0):f.isData3DTexture?Ne.setTexture3D(f,0):f.isDataArrayTexture||f.isCompressedArrayTexture?Ne.setTexture2DArray(f,0):Ne.setTexture2D(f,0),ue.unbindTexture()},this.resetState=function(){C=0,O=0,V=null,ue.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(n),t.unpackColorSpace=at._getUnpackColorSpace()}}const Zn=256,bn=6378137,Wt=85.0511287798066,Au=Math.PI*bn,Ru=2*Au,Cn=e=>((e+180)%360+360)%360-180,hr=e=>{const t=Math.max(-Wt,Math.min(Wt,e))*Math.PI/180;return bn*Math.log(Math.tan(Math.PI/4+t/2))};function bu(e,n,t){if(!Number.isInteger(t)||t<0||t>30)throw new RangeError("Zoom must be an integer from 0 to 30");const i=2**t,a=Math.floor((Cn(n)+180)/360*i),c=Math.max(-Wt,Math.min(Wt,e))*Math.PI/180,s=Math.floor((1-Math.asinh(Math.tan(c))/Math.PI)/2*i);return{x:(a%i+i)%i,y:Math.max(0,Math.min(i-1,s)),z:t,n:i}}function Cu(e,n,t){const i=bu(e,n,t),a=Zn*i.n,r=(Cn(n)+180)/360*a,s=Math.max(-Wt,Math.min(Wt,e))*Math.PI/180,g=(1-Math.asinh(Math.tan(s))/Math.PI)/2*a;return{tile:i,u:r/Zn-i.x,v:g/Zn-i.y}}class wu{zoom;anchor;originTile;anchorU;anchorV;latitudeScale;tileSpan;originNorthing;constructor(n,t=12){if(!Number.isFinite(n.lat)||!Number.isFinite(n.lon)||Math.abs(n.lat)>90)throw new RangeError("Anchor must be a valid WGS84 latitude/longitude");this.anchor={lat:Math.max(-Wt,Math.min(Wt,n.lat)),lon:Cn(n.lon)},this.zoom=t;const i=Cu(this.anchor.lat,this.anchor.lon,t);this.originTile=i.tile,this.anchorU=i.u,this.anchorV=i.v,this.latitudeScale=Math.cos(this.anchor.lat*Math.PI/180),this.originNorthing=hr(this.anchor.lat),this.tileSpan=Ru/this.originTile.n*this.latitudeScale}toLocal(n){const t=Cn(n.lon-this.anchor.lon),i=bn*t*Math.PI/180,a=hr(n.lat)-this.originNorthing;return{x:i*this.latitudeScale,z:a*this.latitudeScale}}toGeo(n){const t=Cn(this.anchor.lon+n.x/(bn*this.latitudeScale)*180/Math.PI),i=this.originNorthing+n.z/this.latitudeScale;return{lon:t,lat:(2*Math.atan(Math.exp(i/bn))-Math.PI/2)*180/Math.PI}}tileOrigin(n,t){return{x:(n-this.anchorU)*this.tileSpan,z:(t+this.anchorV)*this.tileSpan}}tileOffsetAt(n,t){const i=this.anchorU+n/this.tileSpan,a=this.anchorV-t/this.tileSpan,r=Math.floor(i),c=Math.floor(a);return{dx:r>this.originTile.n/2?r-this.originTile.n:r<-this.originTile.n/2?r+this.originTile.n:r,dz:-c||0,u:i-r,v:a-c}}tileAddress(n,t){const i=this.originTile.n;return{x:((this.originTile.x+n)%i+i)%i,y:Math.max(0,Math.min(i-1,this.originTile.y-t)),z:this.zoom,n:i}}}const Yr=[{name:"Manhattan, New York",lat:40.758,lon:-73.9855,terrain:"URBAN JUNGLE"},{name:"Moab, Utah",lat:38.5733,lon:-109.5498,terrain:"RED ROCK COUNTRY"},{name:"Grand Canyon",lat:36.1069,lon:-112.1129,terrain:"THE BIG DROP"},{name:"Mount Everest",lat:27.9881,lon:86.925,terrain:"ROOF OF THE WORLD"},{name:"San Francisco",lat:37.7749,lon:-122.4194,terrain:"HILL CLIMBER"},{name:"Tokyo, Japan",lat:35.6762,lon:139.6503,terrain:"NEON TRAILS"},{name:"Sahara Desert",lat:23.4162,lon:25.6628,terrain:"ENDLESS DUNES"},{name:"Swiss Alps",lat:46.8182,lon:9.2275,terrain:"HIGH ALTITUDE"}];function Pu(e){const n=e.trim().match(/^\s*(-?\d+(?:\.\d+)?)\s*[, ]\s*(-?\d+(?:\.\d+)?)\s*$/);if(!n)return null;const t=Number(n[1]),i=Number(n[2]);return Math.abs(t)<=90&&Math.abs(i)<=180?{name:`${t.toFixed(4)}, ${i.toFixed(4)}`,lat:t,lon:i}:null}let mr=0;const Ai=new Map;async function Lu(e){const n=Pu(e);if(n)return[n];const t=e.toLowerCase().trim();if(!t)return[];if(Ai.has(t))return Ai.get(t);const i=Math.max(0,1100-(Date.now()-mr));i&&await new Promise(g=>setTimeout(g,i)),mr=Date.now();const a=new URL("https://nominatim.openstreetmap.org/search");a.search=new URLSearchParams({q:e,format:"jsonv2",limit:"5"}).toString();const r=await fetch(a,{headers:{Accept:"application/json"}});if(!r.ok)throw new Error(`Location search unavailable (${r.status})`);const s=(await r.json()).map(g=>({name:g.display_name.split(",").slice(0,3).join(",").trim(),lat:+g.lat,lon:+g.lon}));return Ai.set(t,s),s}function Du(e,n,t,i){const a=Math.max(0,Math.min(n-1,t*(n-1))),r=Math.max(0,Math.min(n-1,i*(n-1))),c=Math.floor(a),s=Math.floor(r),g=Math.min(n-1,c+1),u=Math.min(n-1,s+1),v=a-c,p=r-s,E=(T,P)=>e[P*n+T]??0;return(E(c,s)*(1-v)+E(g,s)*v)*(1-p)+(E(c,u)*(1-v)+E(g,u)*v)*p}function _r(e,n,t){const i=new Float32Array((t+1)**2);for(let a=0;a<=t;a++)for(let r=0;r<=t;r++)i[a*(t+1)+r]=Du(e,n,r/t,a/t);return i}function gr(e,n,t,i){const a=Math.max(0,Math.min(n,t*n)),r=Math.max(0,Math.min(n,i*n)),c=Math.min(n-1,Math.floor(a)),s=Math.min(n-1,Math.floor(r)),g=a-c,u=r-s,v=n+1,p=e[s*v+c]??0,E=e[s*v+c+1]??0,T=e[(s+1)*v+c]??0,P=e[(s+1)*v+c+1]??0;return g>=u?p*(1-g)+E*(g-u)+P*u:p*(1-u)+P*g+T*(u-g)}function Uu(e){const n=new Map,t=new Set;for(const i of e){const a=i.segments+1;for(let r=0;r<=i.segments;r++)for(const[c,s]of[[r,0],[r,i.segments],[0,r],[i.segments,r]]){const g=s*a+c,u=`${i.dx*i.segments+c},${i.dz*i.segments-s}`,v=n.get(u)??[];v.push({tile:i,index:g}),n.set(u,v)}}for(const i of n.values()){if(i.length<2)continue;const a=i.reduce((r,c)=>r+c.tile.grid[c.index],0)/i.length;for(const r of i)r.tile.grid[r.index]!==a&&(r.tile.grid[r.index]=a,t.add(r.tile))}return t}const Ri=12,Mt=Zn,yu=36,Bt=new Map;function vr(e,n,t){const i=`${t}/${e}/${n}`;if(Bt.has(i)){const r=Bt.get(i);return Bt.delete(i),Bt.set(i,r),r}const a=(async()=>{try{const r=new Image;r.crossOrigin="anonymous",r.src=`https://s3.amazonaws.com/elevation-tiles-prod/terrarium/${t}/${e}/${n}.png`,await new Promise((v,p)=>{r.onload=()=>v(),r.onerror=()=>p(new Error("terrain tile unavailable"))});const c=document.createElement("canvas");c.width=Mt,c.height=Mt;const s=c.getContext("2d",{willReadFrequently:!0});if(!s)throw new Error("canvas unavailable");s.drawImage(r,0,0,Mt,Mt);const g=s.getImageData(0,0,Mt,Mt).data,u=new Float32Array(Mt*Mt);for(let v=0;v<u.length;v++)u[v]=g[v*4]*256+g[v*4+1]+g[v*4+2]/256-32768;return{heights:u}}catch{return{heights:new Float32Array(Mt*Mt)}}})();for(Bt.set(i,a);Bt.size>yu;)Bt.delete(Bt.keys().next().value);return a}class Iu{constructor(n=127){this.centerSegments=n}group=new Jt;place=null;frame=null;heightSampleMs=0;heightSamples=0;tileBuildMs=0;tileBuilds=0;baseline=0;tiles=new Map;requests=new Set;coverage={x:NaN,z:NaN};generation=0;material=new At({color:16777215,roughness:1,vertexColors:!0});async load(n){this.clear();const t=++this.generation;this.place=n,this.frame=new wu(n,Ri);const i=this.frame.tileAddress(0,0),a=await vr(i.x,i.y,Ri);if(t!==this.generation)return;const r=_r(a.heights,Mt,this.centerSegments);this.baseline=gr(r,this.centerSegments,this.frame.anchorU,this.frame.anchorV),this.install(0,0,a,this.centerSegments,r),this.ensureRegion(0,0)}key(n,t){return`${n},${t}`}address(n,t){return this.frame.tileAddress(n,t)}async ensureRegion(n,t){const i=this.frame;if(!i)return;const a=i.tileOffsetAt(n,t),r=a.dx,c=a.dz;if(this.coverage.x===r&&this.coverage.z===c)return;this.coverage={x:r,z:c};const s=this.generation,g=[],u=this.centerSegments;for(let v=c-1;v<=c+1;v++)for(let p=r-1;p<=r+1;p++){const E=this.key(p,v),T=p===r&&v===c?this.centerSegments:u,P=this.tiles.get(E);P&&P.segments!==T&&(this.group.remove(P.mesh),P.mesh.geometry.dispose(),this.tiles.delete(E));const x=`${s}:${E}`;if(this.tiles.has(E)||this.requests.has(x))continue;this.requests.add(x);const d=this.address(p,v);g.push(vr(d.x,d.y,Ri).then(o=>{s===this.generation&&Math.abs(p-this.coverage.x)<=1&&Math.abs(v-this.coverage.z)<=1&&this.install(p,v,o,T)}).finally(()=>this.requests.delete(x)))}for(const[v,p]of this.tiles)(Math.abs(p.dx-r)>1||Math.abs(p.dz-c)>1)&&(this.group.remove(p.mesh),p.mesh.geometry.dispose(),this.tiles.delete(v));await Promise.all(g)}install(n,t,i,a=63,r){const c=this.key(n,t);if(this.tiles.has(c))return;const s=performance.now(),g=this.frame,u=r??_r(i.heights,Mt,a),v=new jn,p=new Float32Array((a+1)**2*3),E=[],T=[];let P=1/0,x=-1/0;for(const M of u)P=Math.min(P,M),x=Math.max(x,M);const d=/moab|grand canyon|sahara|utah|arizona/i.test(this.place?.name??""),o=(d?["#d0b587","#b99360","#977046","#796044"]:["#c9c1a6","#a49c75","#758557","#657355"]).map(M=>new We(M)),L=g.tileOrigin(n,t);for(let M=0;M<=a;M++)for(let U=0;U<=a;U++){const C=M*(a+1)+U,O=u[C],V=(O-P)/Math.max(1,x-P);p[C*3]=L.x+U/a*g.tileSpan,p[C*3+1]=wt.clamp((O-this.baseline)*1.25,-900,1800),p[C*3+2]=L.z-M/a*g.tileSpan;const _=o[V>.76?0:V>.49?1:V>.22?2:3];E.push(_.r,_.g,_.b)}for(let M=0;M<a;M++)for(let U=0;U<a;U++){const C=M*(a+1)+U,O=C+1,V=C+a+1,_=V+1;T.push(C,O,_,C,_,V)}v.setIndex(T),v.setAttribute("position",new un(p,3)),v.setAttribute("color",new ka(E,3)),v.computeVertexNormals();const R=new rt(v,this.material);R.receiveShadow=!0,R.userData.kind="terrain",this.group.add(R),this.tiles.set(c,{data:i,grid:u,mesh:R,segments:a,dx:n,dz:t}),this.reconcileSharedEdges(),this.tileBuildMs+=performance.now()-s,this.tileBuilds++}reconcileSharedEdges(){const n=Uu(Array.from(this.tiles.values()));for(const t of n)this.rebuildGeometry(t)}rebuildGeometry(n){const{segments:t,grid:i,dx:a,dz:r}=n,c=this.frame,s=new jn,g=new Float32Array((t+1)**2*3),u=[],v=[];let p=1/0,E=-1/0;for(const d of i)p=Math.min(p,d),E=Math.max(E,d);const T=/moab|grand canyon|sahara|utah|arizona/i.test(this.place?.name??""),P=(T?["#d0b587","#b99360","#977046","#796044"]:["#c9c1a6","#a49c75","#758557","#657355"]).map(d=>new We(d)),x=c.tileOrigin(a,r);for(let d=0;d<=t;d++)for(let o=0;o<=t;o++){const L=d*(t+1)+o,R=i[L],M=(R-p)/Math.max(1,E-p);g[L*3]=x.x+o/t*c.tileSpan,g[L*3+1]=wt.clamp((R-this.baseline)*1.25,-900,1800),g[L*3+2]=x.z-d/t*c.tileSpan;const U=P[M>.76?0:M>.49?1:M>.22?2:3];u.push(U.r,U.g,U.b)}for(let d=0;d<t;d++)for(let o=0;o<t;o++){const L=d*(t+1)+o,R=L+1,M=L+t+1,U=M+1;v.push(L,R,U,L,U,M)}s.setIndex(v),s.setAttribute("position",new un(g,3)),s.setAttribute("color",new ka(u,3)),s.computeVertexNormals(),n.mesh.geometry.dispose(),n.mesh.geometry=s}heightAt(n,t){if(!this.frame||!this.tiles.size)return 0;const i=performance.now();let a=this.frame.tileOffsetAt(n,t);(a.dx!==this.coverage.x||a.dz!==this.coverage.z)&&this.ensureRegion(n,t);let r=this.tiles.get(this.key(a.dx,a.dz));if(r||(r=this.tiles.get(this.key(0,0)),a=this.frame.tileOffsetAt(n,t)),!r)return 0;const c=r===this.tiles.get(this.key(a.dx,a.dz))?a.u:wt.clamp((n-this.frame.tileOrigin(r.dx,r.dz).x)/this.frame.tileSpan,0,1),s=r===this.tiles.get(this.key(a.dx,a.dz))?a.v:wt.clamp((this.frame.tileOrigin(r.dx,r.dz).z-t)/this.frame.tileSpan,0,1),g=(gr(r.grid,r.segments,c,s)-this.baseline)*1.25;return this.heightSamples++,this.heightSampleMs+=performance.now()-i,g}takePerformanceSample(){const n={heightSamples:this.heightSamples,heightSampleMs:this.heightSampleMs,tileBuilds:this.tileBuilds,tileBuildMs:this.tileBuildMs};return this.heightSamples=0,this.heightSampleMs=0,this.tileBuilds=0,this.tileBuildMs=0,n}clear(){this.generation++;for(const n of this.tiles.values())this.group.remove(n.mesh),n.mesh.geometry.dispose();this.tiles.clear(),this.requests.clear(),this.coverage={x:NaN,z:NaN}}dispose(){this.clear(),this.material.dispose()}}function Nu(e,n){return e.map(([t,i])=>n.toLocal({lat:t,lon:i}))}const Xn=new Map;let Er=0;async function Ou(e){const n=`${e.lat.toFixed(3)},${e.lon.toFixed(3)}`;if(Xn.has(n))return Xn.get(n);try{const i=localStorage.getItem(`monster-map-buildings:${n}`);if(i){const a=JSON.parse(i);if(Date.now()-a.time<360*60*1e3&&Array.isArray(a.data))return Xn.set(n,Promise.resolve(a.data)),a.data}}catch{}const t=(async()=>{try{const i=Math.max(0,5e3-(Date.now()-Er));i&&await new Promise(p=>setTimeout(p,i)),Er=Date.now();const a=.018,r=.018/Math.max(.3,Math.cos(e.lat*Math.PI/180)),s=`[out:json][timeout:12];(way["building"](${[e.lat-a,e.lon-r,e.lat+a,e.lon+r].join(",")}););out tags geom;`;let g=null;for(const p of["https://overpass.private.coffee/api/interpreter","https://overpass-api.de/api/interpreter"])try{const E=await fetch(p,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"data="+encodeURIComponent(s),signal:AbortSignal.timeout(9e3)});if(E.ok){g=E;break}}catch{}if(!g)throw new Error("Overpass providers unavailable");const v=((await g.json()).elements??[]).filter(p=>p.geometry?.length>=4).slice(0,450).map(p=>({lat:p.center?.lat??p.geometry[0].lat,lon:p.center?.lon??p.geometry[0].lon,tags:p.tags??{},coords:p.geometry.map(E=>[E.lat,E.lon])}));try{localStorage.setItem(`monster-map-buildings:${n}`,JSON.stringify({time:Date.now(),data:v}))}catch{}return v}catch{return[]}})();return Xn.set(n,t),t}const Fu=new At({color:5661034,roughness:.9});class Bu{group=new Jt;list=[];place=null;loadToken=0;async load(n,t,i,a){this.reset(i);const r=this.loadToken;this.place=n;const c=await Ou(n);if(r===this.loadToken){for(const s of c){const g=Nu(s.coords,a).map(U=>new ut(U.x,U.z)),u=g.map(U=>U.x),v=g.map(U=>U.y),p=(Math.min(...u)+Math.max(...u))/2,E=(Math.min(...v)+Math.max(...v))/2,T=Math.max(4,Math.max(...u)-Math.min(...u)),P=Math.max(4,Math.max(...v)-Math.min(...v)),x=new Ps;g.forEach((U,C)=>C?x.lineTo(U.x-p,-(U.y-E)):x.moveTo(U.x-p,-(U.y-E))),x.closePath();const d=new Ls(x,{depth:1,bevelEnabled:!1});d.rotateX(-Math.PI/2);const o=+(s.tags["building:levels"]??0),L=Math.max(5,+(s.tags.height??0)||o*3.4||8+Math.random()*32);d.scale(1,L,1);const R=new rt(d,Fu.clone());R.castShadow=!0,R.receiveShadow=!0,R.userData.kind="building",R.position.x=p,R.position.z=E,R.position.y=t(p,E),this.group.add(R);const M={mesh:R,x:p,z:E,w:T,d:P,h:L,broken:!1};this.list.push(M),i?.addBuilding(M,t(p,E))}this.list.length||this.addBarriers(t,i)}}addBarriers(n,t){const i=new At({color:13132085,roughness:.8});for(let a=0;a<4;a++)for(let r=-2;r<=2;r++){if((a+r)%3===0)continue;const c=3+(a*7+r*11+30)%3,s=3,g=2.5+(a*13+r*5+40)%3,u=r*5,v=28+a*9,p=new rt(new hn(c,g,s),i.clone());p.position.set(u,n(u,v)+g/2,v),p.castShadow=!0,p.receiveShadow=!0,p.userData.kind="destructible-barrier",this.group.add(p);const E={mesh:p,x:u,z:v,w:c,d:s,h:g,broken:!1};this.list.push(E),t?.addBuilding(E,n(u,v))}}collide(n,t,i){return this.list.find(a=>!a.broken&&Math.abs(n-a.x)<a.w/2+i&&Math.abs(t-a.z)<a.d/2+i&&Math.random()<.08)}break(n){n.broken=!0,this.group.remove(n.mesh)}reset(n){this.loadToken++;for(const t of this.list)this.group.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),n?.removeBuilding(t);this.list=[],this.place=null}}class Gu{root=new Jt;wheels=[];frontWheels=[];suspension=[];body;opts;model=new Jt;constructor(n={color:"#d84924",scale:1}){this.opts=n;const t=n.scale;this.root.scale.setScalar(t),this.model.position.y=-1.65,this.root.add(this.model),this.body=new Jt,this.model.add(this.body),this.build()}build(){const n=new At({color:this.opts.color,metalness:.3,roughness:.38}),t=new At({color:1448477,metalness:.2,roughness:.7}),i=new At({color:7977422,metalness:.65,roughness:.2}),a=new At({color:12172994,metalness:.8,roughness:.25}),r=(g,u,v,p,E,T,P,x=this.body)=>{const d=new rt(new hn(g,u,v),p);return d.position.set(E,T,P),d.castShadow=!0,d.receiveShadow=!0,x.add(d),d};r(2.25,.62,3.5,t,0,1.35,0),r(2.05,.62,1.2,n,0,1.8,.85),r(1.78,1.15,1.55,n,0,2.13,-.55),r(1.58,.72,.08,i,0,2.38,.24),r(1.55,.63,.08,i,0,2.36,-1.36),r(2.2,.18,.25,a,0,1.55,1.78),r(2.15,.12,.2,a,0,1.55,-1.8),r(.9,.35,.08,t,0,1.75,1.48),[-.78,.78].forEach(g=>{const u=new rt(new Ds(.16,16),new ti({color:16773294}));u.position.set(g,1.9,1.49),this.body.add(u)});for(let g of[-1,1])r(.12,.14,1.8,a,g*1.13,1.24,0),r(.06,.08,1.6,n,g*1.12,2.82,-.55);const c=new At({color:1052947,roughness:.92}),s=new At({color:2632749,roughness:.85});for(const g of[-1.22,1.22])for(const u of[-1.25,1.22]){const v=new Jt;v.position.set(g,.92,u),v.userData.wheelId=`${u>0?"front":"rear"}-${g<0?"left":"right"}`,this.model.add(v),this.wheels.push(v),u>0&&this.frontWheels.push(v);const p=new rt(new Vn(.83,.83,.54,24,1),c);p.rotation.z=Math.PI/2,p.castShadow=!0,v.add(p);const E=new rt(new Vn(.42,.42,.56,16),a);E.rotation.z=Math.PI/2,v.add(E);const T=new rt(new Vn(.16,.16,.58,12),n);T.rotation.z=Math.PI/2,v.add(T);const P=new Hr(new hn(.21,.16,.58),s,12),x=new nn;for(let o=0;o<12;o++){const L=o*Math.PI/6;x.makeRotationZ(L),x.setPosition(Math.cos(L)*.79,Math.sin(L)*.79,0),P.setMatrixAt(o,x)}P.instanceMatrix.needsUpdate=!0,P.castShadow=!0,v.add(P);const d=new rt(new Vn(.09,.09,.58,8),a);d.position.set(g,1.1,u),d.userData.wheelId=v.userData.wheelId,this.model.add(d),this.suspension.push(d)}for(let g=-2;g<=2;g++){const u=new rt(new Vr(.1,10,8),new ti({color:16767608}));u.position.set(g*.35,2.85,-.1),this.body.add(u)}}updateWheelContacts(n,t){for(const i of this.wheels){const a=n.find(r=>r.id===i.userData.wheelId);a&&(i.position.y=(a.height+.83*t-this.root.position.y)/t-this.model.position.y)}this.suspension.forEach(i=>{const a=n.find(r=>r.id===i.userData.wheelId);a&&(i.scale.y=wt.clamp(1-a.compression/Math.max(.01,a.travel)*.42,.5,1))})}setColor(n){this.opts.color=n,this.body.traverse(t=>{const i=t.material;i instanceof At&&i.color.getHex()===14174500&&i.color.set(n)})}}function Kr(e,n=new Pe){return n.set(Math.sin(e),0,Math.cos(e))}function $r(e,n=new Pe){return n.set(Math.cos(e),0,-Math.sin(e))}const zi=(e,n,t)=>Math.max(n,Math.min(t,e)),Hu=[{id:"front-left",x:-1.22,z:1.22},{id:"front-right",x:1.22,z:1.22},{id:"rear-left",x:-1.22,z:-1.25},{id:"rear-right",x:1.22,z:-1.25}];function bi(e,n,t,i,a=24){const r=Math.cos(n),c=Math.sin(n),s=.55*t,g=.36*t;return Hu.map(u=>{const v=e.x+u.x*r+u.z*c,p=e.z-u.x*c+u.z*r,E=i(v,p),T=E+1.65*t+.12*t,P=T-e.y,x=2*Math.sqrt(a/(.12*t));return{id:u.id,x:v,z:p,height:E,travel:s,compression:zi(P,0,s),extension:zi(-P,0,g),contact:P>=-g&&P<=s,compressionVelocity:0,compressionDamping:x*.82,reboundDamping:x*.62}})}function Vu(e,n,t,i){const a=t/(.12*i);let r=0;for(const c of e){if(c.compression<=0)continue;const s=Math.max(0,c.compression-c.travel+.08*i),g=a*(c.compression+s*2.5),u=zi(c.compressionVelocity,-12,12),v=u>=0?c.compressionDamping:c.reboundDamping,p=(n>=0?c.reboundDamping:c.compressionDamping)*n*.24;r+=Math.max(0,g+v*u-p)}return r/e.length-t}function ku(e){const n=(e[0].height+e[1].height)/2,t=(e[2].height+e[3].height)/2,i=(e[0].height+e[2].height)/2,a=(e[1].height+e[3].height)/2;return{pitch:-Math.atan2(n-t,2.47),roll:Math.atan2(a-i,2.44)}}class zu{pos=new Pe(0,0,0);vel=new Pe;yaw=0;pitch=0;roll=0;grounded=!0;nitro=100;airTime=0;speed=0;gravity=24;jumpForce=15;jumpWas=!1;previousCompression=new Map;contactPitch=0;contactRoll=0;wheelContacts=[];reset(n,t=1){this.pos.set(0,n.heightAt(0,0)+1.65*t,0),this.vel.set(0,0,0),this.yaw=0,this.pitch=0,this.roll=0,this.grounded=!0,this.nitro=100,this.airTime=0,this.contactPitch=0,this.contactRoll=0,this.wheelContacts=bi(this.pos,this.yaw,t,(i,a)=>n.heightAt(i,a),this.gravity),this.previousCompression=new Map(this.wheelContacts.map(i=>[i.id,i.compression]))}update(n,t,i,a,r){this.gravity=r.gravity,this.jumpForce=r.jump,n=Math.min(n,.04);const c=Math.max(1,Math.ceil(n*120)),s=n/c;for(let g=0;g<c;g++)this.step(s,t,i,r);a.root.position.copy(this.pos),a.root.rotation.order="YXZ",a.root.rotation.set(this.pitch+this.contactPitch,this.yaw,this.roll+this.contactRoll),a.updateWheelContacts(this.wheelContacts,r.scale),a.wheels.forEach(g=>{g.rotation.x-=this.speed*n}),a.frontWheels.forEach(g=>{g.rotation.y=-t.steer*.28})}step(n,t,i,a){const r=a.scale,c=Kr(this.yaw),s=30*(t.nitro&&this.nitro>0?1.7:1),g=26*(t.nitro&&this.nitro>0?1.5:1);t.throttle&&this.vel.addScaledVector(c,t.throttle*g*n);const u=new Pe(this.vel.x,0,this.vel.z);if(this.speed=u.length(),t.nitro&&this.nitro>0?this.nitro=Math.max(0,this.nitro-22*n):this.nitro=Math.min(100,this.nitro+8*n),t.handbrake?u.multiplyScalar(Math.max(0,1-3*n)):u.multiplyScalar(Math.max(0,1-(this.grounded?1.05:.1)*n)),this.speed>s&&u.setLength(s),this.speed>.4){const x=(this.grounded?1.8:1.05)*(.25+Math.min(1,this.speed/12)),d=Math.sign(u.dot(c))||Math.sign(t.throttle);this.yaw-=t.steer*x*n*d;const o=$r(this.yaw),L=u.dot(o);u.addScaledVector(o,-L*(this.grounded?.72:.01))}this.vel.x=u.x,this.vel.z=u.z,t.jump&&!this.jumpWas&&this.grounded&&(this.vel.y=this.jumpForce,this.grounded=!1),this.jumpWas=t.jump,this.wheelContacts=bi(this.pos,this.yaw,r,(x,d)=>i.heightAt(x,d),this.gravity);for(const x of this.wheelContacts){const d=this.previousCompression.get(x.id)??x.compression;x.compressionVelocity=(x.compression-d)/Math.max(n,1/240)}this.grounded||(this.pitch+=t.airPitch*2.8*n,this.roll+=t.airRoll*3.5*n,this.airTime+=n),this.vel.y+=Vu(this.wheelContacts,this.vel.y,this.gravity,r)*n;const v=this.pos.y;this.pos.addScaledVector(this.vel,n),this.wheelContacts=bi(this.pos,this.yaw,r,(x,d)=>i.heightAt(x,d),this.gravity);for(const x of this.wheelContacts)this.previousCompression.set(x.id,x.compression);const p=this.wheelContacts.filter(x=>x.contact&&x.compression>.015*r).length,E=Math.max(...this.wheelContacts.map(x=>x.height))+1.17*r;this.pos.y<E&&this.vel.y<0&&(!this.grounded&&this.vel.y<-3&&(this.pitch*=.35,this.roll*=.35,this.vel.y=Math.max(0,-this.vel.y*.12)),this.pos.y=E),this.grounded=this.vel.y<=.75&&p>=2,this.grounded&&(this.vel.y=Math.max(0,this.vel.y),this.airTime=0,this.pitch*=Math.max(0,1-4*n),this.roll*=Math.max(0,1-4*n)),!this.grounded&&this.airTime>1.1&&(this.pitch=wt.lerp(this.pitch,0,n*.24),this.roll=wt.lerp(this.roll,0,n*.24));const T=ku(this.wheelContacts),P=this.grounded?Math.min(1,n*9):Math.min(1,n*2);this.contactPitch=wt.lerp(this.contactPitch,this.grounded?T.pitch:0,P),this.contactRoll=wt.lerp(this.contactRoll,this.grounded?T.roll:0,P),Number.isFinite(this.pos.y)||(this.pos.y=v)}}class Wu{pressed=new Set;actions=new Map;pointerDown(n,t){this.pointerUp(n),this.actions.set(n,t),this.pressed.add(t)}pointerUp(n){const t=this.actions.get(n);t!==void 0&&(this.actions.delete(n),[...this.actions.values()].includes(t)||this.pressed.delete(t))}pointerCancel(n){this.pointerUp(n)}lostPointerCapture(n){this.pointerUp(n)}releaseAll(){this.actions.clear(),this.pressed.clear()}}function Xu(e,n){const t=(...i)=>i.some(a=>e.has(a)||n.has(a));return Number(t("d","arrowright"))-Number(t("a","arrowleft"))}class qu{keys=new Set;pointerButtons=new Wu;state={throttle:0,steer:0,nitro:!1,jump:!1,airPitch:0,airRoll:0,handbrake:!1};get touches(){return this.pointerButtons.pressed}constructor(){window.addEventListener("keydown",n=>{[" ","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n.key)&&n.preventDefault(),this.keys.add(n.key.toLowerCase())}),window.addEventListener("keyup",n=>this.keys.delete(n.key.toLowerCase())),window.addEventListener("blur",()=>this.releaseAll())}pointerDown(n,t){this.pointerButtons.pointerDown(n,t)}pointerUp(n){this.pointerButtons.pointerUp(n)}pointerCancel(n){this.pointerButtons.pointerCancel(n)}lostPointerCapture(n){this.pointerButtons.lostPointerCapture(n)}releaseAll(){this.keys.clear(),this.pointerButtons.releaseAll(),this.state={throttle:0,steer:0,nitro:!1,jump:!1,airPitch:0,airRoll:0,handbrake:!1}}update(){const n=(...p)=>p.some(E=>this.keys.has(E)||this.touches.has(E)),t=Array.from(navigator.getGamepads?.()??[]).find(p=>p?.connected),i=t?.axes??[],a=p=>t?.buttons[p]?.value??0,r=(n("w","arrowup")?1:0)-(n("s","arrowdown")?1:0),c=a(7)-a(6)||-Math.sign(Math.abs(i[1]??0)>.18?i[1]:0),s=Xu(this.keys,this.touches),g=Math.abs(i[0]??0)>.16?i[0]:0,u=(n("arrowup")?1:0)-(n("arrowdown")?1:0),v=(n("e","arrowright")?1:0)-(n("q","arrowleft")?1:0);return this.state={throttle:r||c,steer:s||g,nitro:n("shift","nitro")||a(1)>.4,jump:n(" ","jump")||a(0)>.4,airPitch:u||(Math.abs(i[3]??0)>.18?-Math.sign(i[3]):0),airRoll:v||(Math.abs(i[2]??0)>.18?Math.sign(i[2]):0),handbrake:n("control")||a(2)>.4},this.state}}const Sn=96,Ci=160;class Yu{group=new Jt;dustMesh;burstMesh;particles=[];active=[];freeDust=[];freeBurst=[];activeCount=0;rng=7886388;matrix=new nn;quat=new Us;scaleVector=new Pe;color=new We;constructor(){const n=new Vr(.5,6,5);this.dustMesh=this.makeBatch(n.clone(),Sn,13875854),this.burstMesh=this.makeBatch(n.clone(),Ci,16777215),n.dispose(),this.dustMesh.name="dust-particle-batch",this.burstMesh.name="impact-particle-batch",this.dustMesh.count=this.burstMesh.count=0,this.group.add(this.dustMesh,this.burstMesh);for(let t=0;t<Sn+Ci;t++)this.particles.push({kind:"dust",life:0,max:1,position:new Pe,velocity:new Pe,scale:1,color:16777215}),this.active.push(0);for(let t=Sn-1;t>=0;t--)this.freeDust.push(t);for(let t=Sn+Ci-1;t>=Sn;t--)this.freeBurst.push(t)}makeBatch(n,t,i){const a=new ti({color:i,vertexColors:!0,transparent:!0,depthWrite:!1});a.onBeforeCompile=c=>{c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
attribute float instanceAlpha;
varying float vParticleAlpha;`),c.vertexShader=c.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vParticleAlpha = instanceAlpha;`),c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
varying float vParticleAlpha;`),c.fragmentShader=c.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a *= vParticleAlpha;`)},a.customProgramCacheKey=()=>"rumble-particle-alpha-v1";const r=new ys(new Float32Array(t),1);return r.setUsage(Is),n.setAttribute("instanceAlpha",r),new Hr(n,a,t)}rand(){return this.rng=this.rng*1664525+1013904223>>>0,this.rng/4294967296}burst(n,t=18,i=16758605){for(let a=0;a<t;a++){const r=this.freeBurst.pop();if(r===void 0)break;const c=this.particles[r];c.kind="burst",c.life=.45+this.rand()*.8,c.max=.9,c.scale=.16+this.rand()*.26,c.color=i,c.position.copy(n),c.velocity.set((this.rand()-.5)*8,1+this.rand()*7,(this.rand()-.5)*8),this.active[this.activeCount++]=r}}dust(n,t){if(t<4||this.rand()>.27)return;const i=this.freeDust.pop();if(i===void 0)return;const a=this.particles[i];a.kind="dust",a.life=a.max=.65,a.scale=.36+this.rand()*.3,a.color=13875854,a.position.copy(n),a.velocity.set(this.rand()-.5,.4+this.rand(),this.rand()-.5),this.active[this.activeCount++]=i}update(n){let t=0,i=0,a=0;for(let r=0;r<this.activeCount;r++){const c=this.active[r],s=this.particles[c];if(s.life-=n,s.life<=0){(s.kind==="dust"?this.freeDust:this.freeBurst).push(c);continue}s.position.addScaledVector(s.velocity,n),s.scale*=1+n*.55;const g=Math.max(0,s.life/s.max*(s.kind==="dust"?.34:.9)),u=s.kind==="dust"?this.dustMesh:this.burstMesh,v=s.kind==="dust"?i++:a++;this.scaleVector.setScalar(s.scale*(s.life/s.max)),this.matrix.compose(s.position,this.quat,this.scaleVector),u.setMatrixAt(v,this.matrix),this.color.setHex(s.color),u.setColorAt(v,this.color),u.geometry.getAttribute("instanceAlpha").setX(v,g),this.active[t++]=c}this.activeCount=t,this.dustMesh.count=i,this.burstMesh.count=a,i&&(this.dustMesh.instanceMatrix.needsUpdate=!0,this.dustMesh.instanceColor.needsUpdate=!0,this.dustMesh.geometry.getAttribute("instanceAlpha").needsUpdate=!0),a&&(this.burstMesh.instanceMatrix.needsUpdate=!0,this.burstMesh.instanceColor.needsUpdate=!0,this.burstMesh.geometry.getAttribute("instanceAlpha").needsUpdate=!0)}get activeParticles(){return this.activeCount}dispose(){this.group.clear();for(const n of[this.dustMesh,this.burstMesh])n.geometry.dispose(),n.material.dispose()}}const jt=(e,n,t)=>Math.max(n,Math.min(t,e));function Ku(e,n,t){const i=jt(.2+jt(e/32,0,1)*.67+jt(n,0,1)*.16+(t?.18:0),.2,1.2),a=62+i*112;return{rpm:i,fundamentalHz:a,engineGain:.075+i*.035+jt(n,0,1)*.025,harmonicHz:a*2.4,nitroHz:260+i*390}}function Mn(e){return jt(Number.isFinite(e)?e:0,0,1)}class $u{ctx=null;master=null;compressor=null;analyser=null;meterBuffer=null;engineOsc=null;engineHarmonic=null;engineGain=null;harmonicGain=null;nitroOsc=null;nitroGain=null;skidNoise=null;skidGain=null;noiseBuffer=null;volume=.62;muted=!1;failed=!1;start(){try{this.ctx||this.createGraph(),this.ctx?.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.applyMaster()}catch{this.failed=!0}}createGraph(){const n=window,t=window.AudioContext??n.webkitAudioContext;if(!t){this.failed=!0;return}const i=new t;this.ctx=i,this.master=i.createGain(),this.master.gain.value=0,this.compressor=i.createDynamicsCompressor(),this.compressor.threshold.value=-18,this.compressor.knee.value=14,this.compressor.ratio.value=5,this.compressor.attack.value=.006,this.compressor.release.value=.16,this.analyser=i.createAnalyser(),this.analyser.fftSize=256,this.meterBuffer=new Float32Array(this.analyser.fftSize),this.master.connect(this.compressor).connect(this.analyser).connect(i.destination);const a=i.createOscillator();a.type="sawtooth";const r=i.createBiquadFilter();r.type="lowpass",r.frequency.value=620,r.Q.value=.7,this.engineGain=i.createGain(),this.engineGain.gain.value=.09,a.connect(r).connect(this.engineGain).connect(this.master),a.start(),this.engineOsc=a;const c=i.createOscillator();c.type="triangle";const s=i.createBiquadFilter();s.type="bandpass",s.frequency.value=520,s.Q.value=.65,this.harmonicGain=i.createGain(),this.harmonicGain.gain.value=.035,c.connect(s).connect(this.harmonicGain).connect(this.master),c.start(),this.engineHarmonic=c;const g=i.createOscillator();g.type="sawtooth";const u=i.createBiquadFilter();u.type="bandpass",u.frequency.value=900,u.Q.value=.8,this.nitroGain=i.createGain(),this.nitroGain.gain.value=1e-4,g.connect(u).connect(this.nitroGain).connect(this.master),g.start(),this.nitroOsc=g;const v=i.createBuffer(1,Math.floor(i.sampleRate*.35),i.sampleRate),p=v.getChannelData(0);for(let P=0;P<p.length;P++)p[P]=(Math.random()*2-1)*.55;this.noiseBuffer=v;const E=i.createBufferSource();E.buffer=v,E.loop=!0;const T=i.createBiquadFilter();T.type="bandpass",T.frequency.value=1250,T.Q.value=.5,this.skidGain=i.createGain(),this.skidGain.gain.value=1e-4,E.connect(T).connect(this.skidGain).connect(this.master),E.start(),this.skidNoise=E,this.failed=!1}setMasterVolume(n){this.volume=Mn(n),this.applyMaster()}getMasterVolume(){return this.volume}setMuted(n){this.muted=n,this.applyMaster()}mute(){this.setMuted(!0)}isMuted(){return this.muted}isAvailable(){return!!this.ctx&&!this.failed}getState(){return this.ctx?.state??(this.failed?"unavailable":"locked")}applyMaster(){this.ctx&&this.master&&this.master.gain.setTargetAtTime(this.muted?0:this.volume,this.ctx.currentTime,.025)}update(n,t=0,i=!1,a=0){const r=this.ctx;if(!r||!this.engineOsc||!this.engineHarmonic||!this.engineGain||!this.harmonicGain)return;const c=Ku(n,t,i),s=r.currentTime;this.engineOsc.frequency.setTargetAtTime(c.fundamentalHz,s,.055),this.engineHarmonic.frequency.setTargetAtTime(c.harmonicHz,s,.07),this.engineGain.gain.setTargetAtTime(c.engineGain,s,.09),this.harmonicGain.gain.setTargetAtTime(.026+c.rpm*.022,s,.09),this.nitroOsc?.frequency.setTargetAtTime(c.nitroHz,s,.045),this.nitroGain?.gain.setTargetAtTime(i?.075:1e-4,s,.05),this.skidGain?.gain.setTargetAtTime(jt(a,0,1)>.08?.12*jt(a,0,1):1e-4,s,.04)}testTone(){const n=this.ctx;if(!n||this.muted)return!1;const t=n.createOscillator(),i=n.createGain(),a=n.currentTime;return t.type="sine",t.frequency.setValueAtTime(523.25,a),i.gain.setValueAtTime(1e-4,a),i.gain.linearRampToValueAtTime(.22,a+.025),i.gain.setValueAtTime(.22,a+.24),i.gain.exponentialRampToValueAtTime(1e-4,a+.52),t.connect(i).connect(this.master),t.start(a),t.stop(a+.54),t.onended=()=>{t.disconnect(),i.disconnect()},!0}jump(){this.sweep(175,540,.34,.055,"sawtooth")}landing(n=1){this.noiseBurst(.11+Mn(n)*.08,.22),this.sweep(112,52,.19,.075*Mn(n),"sine")}impact(n=1){this.noiseBurst(.15+Mn(n)*.12,.34),this.sweep(170,43,.28,.11*Mn(n),"triangle")}sweep(n,t,i,a,r){const c=this.ctx;if(!c||this.muted)return;const s=c.createOscillator(),g=c.createGain(),u=c.currentTime;s.type=r,s.frequency.setValueAtTime(n,u),s.frequency.exponentialRampToValueAtTime(Math.max(25,t),u+i),g.gain.setValueAtTime(1e-4,u),g.gain.linearRampToValueAtTime(a,u+.012),g.gain.exponentialRampToValueAtTime(1e-4,u+i),s.connect(g).connect(this.master),s.start(u),s.stop(u+i+.015),s.onended=()=>{s.disconnect(),g.disconnect()}}noiseBurst(n,t){const i=this.ctx;if(!i||!this.noiseBuffer||this.muted)return;const a=i.createBufferSource(),r=i.createBiquadFilter(),c=i.createGain(),s=i.currentTime;a.buffer=this.noiseBuffer,r.type="lowpass",r.frequency.value=1900,c.gain.setValueAtTime(Math.max(1e-4,n),s),c.gain.exponentialRampToValueAtTime(1e-4,s+t),a.connect(r).connect(c).connect(this.master),a.start(s),a.stop(s+t+.02),a.onended=()=>{a.disconnect(),r.disconnect(),c.disconnect()}}outputRms(){if(!this.ctx||!this.analyser||!this.meterBuffer||this.ctx.state!=="running"||this.muted)return 0;this.analyser.getFloatTimeDomainData(this.meterBuffer);let n=0;for(const t of this.meterBuffer)n+=t*t;return Math.sqrt(n/this.meterBuffer.length)}}const ge=e=>document.querySelector(e),On=!!(window.matchMedia?.("(pointer: coarse)").matches||window.matchMedia?.("(any-pointer: coarse)").matches||navigator.maxTouchPoints>0||"ontouchstart"in window),Fn=document.documentElement;Fn.classList.toggle("touch-capable",On);Fn.classList.toggle("keyboard-controls-visible",!On);const Zu=ge("#app");Zu.innerHTML=`
 <canvas id="game"></canvas>
 <div class="grain"></div>
 <header class="topbar"><a class="brand" href="#"><span class="brand-icon">✦</span><span>RUMBLE<span class="accent">ROAM</span></span></a><div class="location-label"><span class="pulse"></span><span id="place-name">Moab, Utah</span><small id="terrain-name">RED ROCK COUNTRY</small></div><div class="top-actions"><button id="map-btn" class="top-btn" aria-label="Choose location">⌖ <span>LOCATIONS</span></button><button id="pause-btn" class="top-btn" aria-label="Pause game">Ⅱ <span>PAUSE</span></button><button id="help-btn" class="top-btn help-trigger" aria-label="Help and controls">?</button></div></header>
 <aside class="hud-left"><div class="stat"><span class="stat-label">VELOCITY</span><div class="speed-line"><strong id="speed">000</strong><span>KM/H</span></div><div class="speed-track"><i id="speed-bar"></i></div></div><div class="stat nitro-stat"><span class="stat-label">NITROUS</span><div class="nitro-track"><i id="nitro-bar"></i></div><small id="nitro-state">READY TO BURN</small></div></aside>
 <div class="hud-bottom"><div class="hint keyboard-hint"><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> DRIVE <i></i><kbd>SHIFT</kbd> BOOST <i></i><kbd>SPACE</kbd> JUMP <i></i><kbd>Q</kbd><kbd>E</kbd> FLIP</div><div class="touch-hint">LEFT / RIGHT STEER · HOLD GO OR BRAKE · JUMP + BOOST</div><div class="camera-toggle"><button data-camera="chase" class="selected">CHASE</button><button data-camera="far">FAR</button><button data-camera="hood">HOOD</button><button data-camera="free">FREE</button></div></div>
 <button id="settings-btn" class="settings-fab">⚙</button>
 <section id="location-panel" class="panel hidden"><div class="panel-head"><div><span class="eyebrow">PICK YOUR PLAYGROUND</span><h2>Where to next?</h2></div><button class="close-btn" data-close="location-panel">×</button></div><form id="search-form"><input id="location-search" placeholder="Search a place or paste coordinates" autocomplete="off"><button class="search-btn">SEARCH <span>↗</span></button></form><div id="search-results" class="results"></div><div class="map-wrap"><div id="mini-map"></div><div class="map-hint">CLICK MAP TO DROP A PIN</div></div><div class="preset-title">FAVORITE RUNS <span>08 LOCATIONS</span></div><div id="presets" class="presets"></div><div class="attribution">Terrain <a href="https://registry.opendata.aws/terrain-tiles/" target="_blank">Mapzen / Tilezen</a> · © <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a> · Map <a href="https://openfreemap.org/" target="_blank">OpenFreeMap</a><details class="terrain-credits"><summary>Terrain source credits</summary><div>ArcticDEM: DigitalGlobe imagery; NSF awards 1043681, 1559691 and 1542736. Australia: © Commonwealth of Australia (Geoscience Australia) 2017. Austria: © offene Daten Österreichs – Digitales Geländemodell (DGM) Österreich. Canada: Open Government Licence – Canada. Europe: Copernicus / EU-DEM. Global ETOPO1: NOAA. Mexico: INEGI, Continental relief, 2016. New Zealand: © Land Information New Zealand and NZ Government. Norway: © Kartverket. United Kingdom: © Environment Agency 2015. United States 3DEP, GMTED2010 and SRTM: USGS.</div></details></div></section>
 <section id="settings-panel" class="panel settings hidden"><div class="panel-head"><div><span class="eyebrow">TUNE THE MAYHEM</span><h2>Game settings</h2></div><button class="close-btn" data-close="settings-panel">×</button></div><label>Gravity <span id="gravity-value">24</span><input id="gravity" type="range" min="6" max="35" value="24"></label><label>Jump force <span id="jump-value">15</span><input id="jump" type="range" min="8" max="25" value="15"></label><label>Truck scale <span id="scale-value">1.0×</span><input id="scale" type="range" min="7" max="16" value="10"></label><label>Paint <input id="paint" type="color" value="#d84924"></label><label class="toggle"><span>Audio</span><input id="audio-toggle" type="checkbox" checked></label><label>Master volume <span id="volume-value">62%</span><input id="master-volume" type="range" min="0" max="100" value="62"></label><button id="audio-test" class="ghost-btn audio-test">TEST SOUND</button><small id="audio-status" class="settings-note">Sound starts after your first control input.</small><button id="reset-btn" class="search-btn full">RESET TRUCK <span>↻</span></button><small class="settings-note">Esc pauses the run. R recovers the truck. Press M to pick a new place.</small></section>
 <section id="pause-panel" class="pause-panel hidden"><span class="eyebrow">TAKE A BREATHER</span><h1>PAUSED</h1><button id="resume-btn" class="search-btn">BACK TO IT <span>▶</span></button><button id="pause-location" class="ghost-btn">CHANGE LOCATION</button></section>
 <section id="help-panel" class="panel help-panel hidden" aria-labelledby="help-title"><div class="panel-head"><div><span class="eyebrow">QUICK DRIVER GUIDE</span><h2 id="help-title">Controls</h2></div><button class="close-btn" data-close="help-panel" aria-label="Close help">×</button></div><p class="touch-guide-copy">Hold ◀ / ▶ to steer. Hold GO to accelerate or BRAKE to reverse. Hold JUMP and BOOST together for a bigger launch. Camera, reset, and pause are just below.</p><div class="help-grid"><strong>Keyboard</strong><span>W / S · Accelerate / reverse</span><span>A / D or ← / → · Steer</span><span>Shift · Nitro · Space · Jump</span><span>Q / E · Roll · R · Reset · C · Camera · Esc · Pause · M · Locations</span><strong>Touch</strong><span>◀ / ▶ · Steer · GO / BRAKE · Drive</span><span>JUMP · Launch · BOOST · Nitro</span><span>Bottom shortcuts · Reset · Camera · Pause · Help</span></div></section>
 <div id="toast" class="toast"></div>
 <div class="orientation-tip" aria-hidden="true">LANDSCAPE RECOMMENDED</div>
 <nav class="mobile-utility" aria-label="Quick game controls"><button id="touch-reset" aria-label="Reset truck">↻ <span>RESET</span></button><button id="touch-camera" aria-label="Change camera">◉ <span>CAM</span></button><button id="touch-pause" aria-label="Pause game">Ⅱ <span>PAUSE</span></button><button id="touch-help" aria-label="Help and controls">? <span>HELP</span></button><button id="touch-control-mode" aria-label="Switch control display" aria-pressed="true">⌨ <span>KEYS</span></button></nav>
 <div class="mobile-controls" aria-label="Touch driving controls"><div class="touch-action-row"><button data-touch="jump" aria-label="Jump">⬆ <span>JUMP</span></button><button data-touch="nitro" class="nitro-touch" aria-label="Hold for nitro">⚡ <span>BOOST</span></button></div><div class="touch-drive-row"><div class="dpad" aria-label="Steering"><button data-touch="a" aria-label="Steer left">◀<span>LEFT</span></button><button data-touch="d" aria-label="Steer right">▶<span>RIGHT</span></button></div><div class="pedals" aria-label="Acceleration"><button data-touch="s" class="brake" aria-label="Brake and reverse">▼<span>BRAKE</span></button><button data-touch="w" class="go" aria-label="Accelerate">▲<span>GO</span></button></div></div></div>
 <div class="loading-screen" id="loading"><div class="loader-mark">✦</div><div class="loader-title">MAPPING THE WILD</div><div class="loader-sub">LOADING REAL-WORLD TERRAIN</div><div class="loader-track"><i></i></div></div>`;const Zr=On?1:1.35,Qr=()=>({width:Math.round(window.visualViewport?.width??innerWidth),height:Math.round(window.visualViewport?.height??innerHeight)}),ni=Qr(),Tt=new xu({canvas:ge("#game"),antialias:!1,powerPreference:"high-performance"});Tt.setPixelRatio(Math.min(devicePixelRatio||1,Zr));Tt.setSize(ni.width,ni.height);Tt.shadowMap.enabled=!1;Tt.toneMapping=Gr;Tt.toneMappingExposure=1.12;const Ft=new Ns;Ft.background=new We("#b9d2d8");Ft.fog=new Os("#b9d2d8",115e-6);const _n=new An(60,ni.width/ni.height,.1,18e3);_n.position.set(0,8,-16);Ft.add(new Fs(15266559,6444868,2));const Jr=new Bs(16772559,3.2);Jr.position.set(-350,550,260);Ft.add(Jr);const Pt=new Iu(On?63:127);Ft.add(Pt.group);const zt=new Bu;Ft.add(zt.group);const wn=new Yu;Ft.add(wn.group);let Ht=new Gu;Ft.add(Ht.root);const De=new zu,{ArcadeCollisionWorld:Qu}=await Vi(async()=>{const{ArcadeCollisionWorld:e}=await import("./collision-world-oruGZRLx.js");return{ArcadeCollisionWorld:e}},__vite__mapDeps([0,1]),import.meta.url),tn=new Qu;await tn.init();const mt=new qu,lt=new $u;(location.hostname==="localhost"||location.hostname==="127.0.0.1")&&(window.__rumbleRoamDebug={spawnImpactTestBuilding(){const e=De.pos.x,n=De.pos.z,t=8,i=Pt.heightAt(e,n),a=new rt(new hn(6,t,6),new At({color:10180920}));a.position.set(e,i+t/2,n),a.userData.kind="building",zt.group.add(a);const r={mesh:a,x:e,z:n,w:6,d:6,h:t,broken:!1};zt.list.push(r),tn.addBuilding(r,i);const c=tn.step(De.pos,De.yaw,1/60);return c&&(qi++,tn.removeBuilding(c),zt.break(c),wn.burst(new Pe(c.x,De.pos.y,c.z),32,16749652),Rt=.5,Ot("CRUNCH! Structure demolished.")),c===r}});const si={gravity:24,jump:15,scale:1};let Vt="chase",Nt=!1,Wi=0,Pn=.25,Gt=null,Xi=null,fn=Yr[1],wi=0,Nn=performance.now(),Rt=0,Sr=0,Pi=performance.now(),qn=0,qi=0,Li=0,Yn=0,Mr=0,Tr=0;function Ju(){const e=performance.memory;return e?Math.round(e.usedJSHeapSize/1048576*10)/10:null}function Ot(e){const n=ge("#toast");n.textContent=e,n.classList.add("show"),clearTimeout(Sr),Sr=window.setTimeout(()=>n.classList.remove("show"),2800)}function Lt(){Fn.classList.toggle("overlay-open",["location-panel","settings-panel","help-panel","pause-panel"].some(e=>!ge("#"+e).classList.contains("hidden")))}async function ci(e){const n=++wi;fn=e,Nt=!1,["location-panel","settings-panel","help-panel","pause-panel"].forEach(t=>ge("#"+t).classList.add("hidden")),Lt(),ge("#loading").classList.remove("done"),ge("#place-name").textContent=e.name,ge("#terrain-name").textContent=e.terrain??"OPEN TERRAIN",Ot("Mapping terrain…"),await Pt.load(e),n===wi&&(De.reset(Pt,si.scale),ge("#loading").classList.add("done"),Ot("Terrain is ready. Go make a mess."),zt.load(e,(t,i)=>Pt.heightAt(t,i),tn,Pt.frame).then(()=>{n===wi&&Ot(zt.list.length?`${zt.list.length} structures ready. Go make a mess.`:"No mapped structures nearby. The terrain is yours.")}),Gt?.flyTo({center:[e.lon,e.lat],zoom:12}),Xi?.setLngLat([e.lon,e.lat]))}Yr.forEach((e,n)=>{const t=document.createElement("button");t.className="preset",t.innerHTML=`<span class="preset-index">0${n+1}</span><span>${e.name}</span><i>↗</i>`,t.onclick=()=>ci(e),ge("#presets").append(t)});ge("#search-form").addEventListener("submit",async e=>{e.preventDefault();const n=ge("#location-search").value.trim();if(!n)return;const t=ge("#search-results");t.innerHTML='<div class="search-status">SEARCHING THE GLOBE…</div>';try{const i=await Lu(n);if(!i.length){t.innerHTML='<div class="search-status">No places found. Try a nearby town or coordinates.</div>';return}t.innerHTML="";for(const a of i){const r=document.createElement("button");r.className="result",r.innerHTML=`<span>⌖</span><span>${a.name}</span><i>↗</i>`,r.onclick=()=>ci(a),t.append(r)}}catch{t.innerHTML='<div class="search-status">Location search is busy. Try coordinates like 40.7, -73.9.</div>'}});ge("#map-btn").onclick=async()=>{if(ge("#location-panel").classList.toggle("hidden"),ge("#settings-panel").classList.add("hidden"),ge("#help-panel").classList.add("hidden"),Lt(),Gt)setTimeout(()=>Gt?.resize(),100);else{const[n,t]=await Promise.all([Vi(()=>import("./maplibre-gl-BT_db7in.js"),[],import.meta.url),Vi(()=>import("./maplibre-gl-worker-re4DVwB4.js"),[],import.meta.url)]);n.setWorkerUrl(t.default),Gt=new n.Map({container:"mini-map",style:"https://tiles.openfreemap.org/styles/liberty",center:[fn.lon,fn.lat],zoom:10,attributionControl:!1}),Gt.addControl(new n.NavigationControl({showCompass:!1}),"top-right"),Xi=new n.Marker({color:"#f2632b"}).setLngLat([fn.lon,fn.lat]).addTo(Gt),Gt.on("click",i=>{const a={name:`${i.lngLat.lat.toFixed(4)}, ${i.lngLat.lng.toFixed(4)}`,lat:i.lngLat.lat,lon:i.lngLat.lng};Xi?.setLngLat(i.lngLat);const r=document.createElement("button");r.className="result",r.innerHTML=`<span>⌖</span><span>Drive at ${a.name}</span><i>↗</i>`,r.onclick=()=>ci(a),ge("#search-results").replaceChildren(r)})}};ge("#settings-btn").onclick=()=>{ge("#settings-panel").classList.toggle("hidden"),ge("#location-panel").classList.add("hidden"),ge("#help-panel").classList.add("hidden"),Lt()};const $i=()=>{ge("#help-panel").classList.toggle("hidden"),ge("#location-panel").classList.add("hidden"),ge("#settings-panel").classList.add("hidden"),Lt()};ge("#help-btn").onclick=$i;ge("#touch-help").onclick=$i;document.querySelectorAll("[data-close]").forEach(e=>e.addEventListener("click",()=>{ge("#"+e.dataset.close).classList.add("hidden"),Lt()}));const Zi=(e,n,t)=>{const i=ge("#"+e);i.oninput=()=>{const a=+i.value/(n==="scale"?10:1);si[n]=a,ge("#"+n+"-value").textContent=t(a),n==="scale"&&Ht.root.scale.setScalar(a)}};Zi("gravity","gravity",e=>e.toFixed(0));Zi("jump","jump",e=>e.toFixed(0));Zi("scale","scale",e=>e.toFixed(1)+"×");ge("#paint").addEventListener("input",e=>Ht.setColor(e.target.value));ge("#audio-toggle").addEventListener("change",e=>{const n=e.target.checked;n&&lt.start(),lt.setMuted(!n),ge("#audio-status").textContent=n?"Audio enabled.":"Audio muted."});ge("#master-volume").addEventListener("input",e=>{const n=+e.target.value;lt.setMasterVolume(n/100),ge("#volume-value").textContent=`${n}%`});ge("#audio-test").addEventListener("click",()=>{lt.start();const e=lt.testTone();ge("#audio-status").textContent=e?"Test tone playing through the game audio output.":"Unmute audio to play the test tone.",e||Ot("Turn Audio on to hear the test.")});function Qi(){De.reset(Pt,si.scale),Ht.root.visible=!0,Ot("Truck recovered. Send it!")}function Ji(e){const n=["chase","far","hood","free"];Vt=e??n[(n.indexOf(Vt)+1)%n.length],document.querySelectorAll("[data-camera]").forEach(t=>t.classList.toggle("selected",t.dataset.camera===Vt))}function ji(){Nt=!Nt,Nt&&mt.releaseAll(),ge("#pause-panel").classList.toggle("hidden",!Nt),Lt()}ge("#reset-btn").onclick=Qi;ge("#touch-reset").onclick=()=>{lt.start(),Qi()};ge("#touch-camera").onclick=()=>Ji();ge("#touch-pause").onclick=()=>ji();ge("#resume-btn").onclick=()=>{lt.start(),Nt=!1,Nn=performance.now(),ge("#pause-panel").classList.add("hidden"),Lt()};ge("#pause-btn").onclick=()=>ji();ge("#pause-location").onclick=()=>{ge("#pause-panel").classList.add("hidden"),Lt(),ge("#map-btn").click()};document.querySelectorAll("[data-camera]").forEach(e=>e.addEventListener("click",()=>Ji(e.dataset.camera)));const Ln=ge("#touch-control-mode");Ln.textContent=On?"⌨ KEYS":"◉ TOUCH";Ln.setAttribute("aria-pressed",String(!Fn.classList.contains("keyboard-controls-visible")));Ln.onclick=()=>{const e=Fn.classList.toggle("keyboard-controls-visible");Ln.innerHTML=e?"◉ <span>TOUCH</span>":"⌨ <span>KEYS</span>",Ln.setAttribute("aria-pressed",String(!e))};window.addEventListener("keydown",e=>{e.repeat||(e.key.toLowerCase()==="m"&&ge("#map-btn").click(),e.key.toLowerCase()==="c"&&Ji(),e.key.toLowerCase()==="r"&&Qi(),e.key==="Escape"&&ji(),(e.key==="?"||e.key.toLowerCase()==="h")&&$i(),(e.key===" "||e.key.toLowerCase()==="w")&&lt.start())});document.querySelectorAll("[data-touch]").forEach(e=>{const n=e.dataset.touch;e.addEventListener("pointerdown",t=>{if(!(t.pointerType==="mouse"&&t.button!==0)){t.preventDefault(),mt.pointerDown(t.pointerId,n);try{e.setPointerCapture(t.pointerId)}catch{}lt.start()}}),e.addEventListener("pointerup",t=>{t.preventDefault(),mt.pointerUp(t.pointerId)}),e.addEventListener("pointercancel",t=>mt.pointerCancel(t.pointerId)),e.addEventListener("lostpointercapture",t=>mt.lostPointerCapture(t.pointerId))});window.addEventListener("blur",()=>mt.releaseAll());document.addEventListener("visibilitychange",()=>{Nn=performance.now(),document.hidden&&(mt.releaseAll(),Nt=!0,ge("#pause-panel").classList.remove("hidden"),Lt())});window.addEventListener("pointermove",e=>{Vt==="free"&&e.buttons&&(Wi-=e.movementX*.004,Pn=wt.clamp(Pn-e.movementY*.003,-.3,1.1))});function ju(e){const n=De.pos,t=Kr(De.yaw);let i,a;if(Vt==="hood")i=n.clone().add(new Pe(0,2.3,0)).addScaledVector(t,1.2),a=i.clone().addScaledVector(t,7).add(new Pe(0,.3,0));else if(Vt==="free"){const c=new Pe(Math.sin(Wi)*Math.cos(Pn),Math.sin(Pn),Math.cos(Wi)*Math.cos(Pn));i=n.clone().add(new Pe(0,1.5,0)),a=i.clone().addScaledVector(c,-14)}else{const c=Vt==="far"?30:16,s=Vt==="far"?10:7;i=n.clone().add(new Pe(0,1.5,0)),a=n.clone().addScaledVector(t,-c).add(new Pe(0,s,0))}const r=i;Rt>0&&(a.x+=(Math.random()-.5)*Rt,a.y+=(Math.random()-.5)*Rt,Rt=Math.max(0,Rt-e*1.3)),_n.position.lerp(a,1-Math.exp(-5*e)),_n.lookAt(r)}function jr(e){requestAnimationFrame(jr);const n=performance.now(),t=Math.min((e-Nn)/1e3,.045);if(Nn=e,!Nt){const r=mt.update(),c=De.grounded,s=De.vel.y,g=performance.now();De.update(t,r,Pt,Ht,si),Tr=performance.now()-g,c&&!De.grounded&&r.jump&&(lt.jump(),Rt=Math.max(Rt,.07)),!c&&De.grounded&&(lt.landing(Math.min(1,Math.abs(s)/20)),Rt=Math.max(Rt,Math.min(.42,Math.abs(s)*.012)));const u=tn.step(De.pos,De.yaw,t);u&&(qi++,tn.removeBuilding(u),zt.break(u),wn.burst(new Pe(u.x,De.pos.y,u.z),32,16749652),De.vel.add(new Pe((De.pos.x-u.x)*3,7,(De.pos.z-u.z)*3)),Rt=.5,lt.impact(Math.min(1,De.speed/22)),Ot("CRUNCH! Structure demolished.")),wn.dust(De.pos.clone().add(new Pe(0,-1,0)),De.speed),wn.update(t);const v=Math.abs(De.vel.dot($r(De.yaw)));lt.update(De.speed,Math.max(0,r.throttle),r.nitro&&De.nitro>0,Math.max(r.handbrake?.55:0,v/Math.max(4,De.speed))),ju(t)}ge("#speed").textContent=String(Math.round(De.speed*3.6)).padStart(3,"0"),ge("#speed-bar").style.width=`${Math.min(100,De.speed/30*100)}%`,ge("#nitro-bar").style.width=`${De.nitro}%`,ge("#nitro-state").textContent=De.nitro>5?"READY TO BURN":"RECHARGING";const i=performance.now();Tt.render(Ft,_n),Mr=performance.now()-i;const a=performance.now()-n;if(Li+=a,Yn=Math.max(Yn,a),qn++,e-Pi>=1e3){const r=Pt.takePerformanceSample();window.__monsterMapMetrics={fps:Math.round(qn*1e3/(e-Pi)),frameMs:Math.round(Li/qn*10)/10,frameMsMax:Math.round(Yn*10)/10,physicsMs:+Tr.toFixed(2),renderMs:+Mr.toFixed(2),terrainSampleMs:+r.heightSampleMs.toFixed(3),terrainSamples:r.heightSamples,terrainTileBuildMs:+r.tileBuildMs.toFixed(3),terrainTileBuilds:r.tileBuilds,drawCalls:Tt.info.render.calls,triangles:Tt.info.render.triangles,geometries:Tt.info.memory.geometries,textures:Tt.info.memory.textures,heapMB:Ju(),audioState:lt.getState(),audioRms:+lt.outputRms().toFixed(4),audioMuted:lt.isMuted(),volume:lt.getMasterVolume(),speed:De.speed,position:[De.pos.x,De.pos.y,De.pos.z],destroyed:qi,yaw:De.yaw,steer:mt.state.steer,throttle:mt.state.throttle,nitro:mt.state.nitro,jump:mt.state.jump,grounded:De.grounded,activeTouchActions:mt.touches.size,frontWheelAngles:Ht.frontWheels.map(c=>c.rotation.y),rearWheelAngles:Ht.wheels.filter(c=>!Ht.frontWheels.includes(c)).map(c=>c.rotation.y),wheelContacts:De.wheelContacts.filter(c=>c.contact).length,averageCompression:De.wheelContacts.reduce((c,s)=>c+s.compression,0)/Math.max(1,De.wheelContacts.length),contactPitch:De.contactPitch,contactRoll:De.contactRoll,terrainOriginHeight:Pt.heightAt(0,0)},qn=0,Li=0,Yn=0,Pi=e}}function li(){const e=Qr();Tt.setPixelRatio(Math.min(devicePixelRatio||1,Zr)),Tt.setSize(e.width,e.height),_n.aspect=e.width/Math.max(1,e.height),_n.updateProjectionMatrix(),Gt?.resize()}window.addEventListener("resize",li);window.addEventListener("orientationchange",()=>setTimeout(li,180));window.visualViewport?.addEventListener("resize",li);const eo=ge("#game");eo.addEventListener("webglcontextlost",e=>{e.preventDefault(),mt.releaseAll(),Nt=!0,ge("#pause-panel").classList.remove("hidden"),Lt(),Ot("Graphics paused. Return to the game when ready.")});eo.addEventListener("webglcontextrestored",()=>{Nn=performance.now(),li(),Ot("Graphics restored.")});await ci(fn);requestAnimationFrame(jr);
