const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./collision-world-CV6XyUh9.js","./three.core-DJ5Fh1xw.js"])))=>i.map(i=>d[i]);
import{c as $o,N as jt,S as Zo,C as Ve,F as uo,M as Bt,V as ae,R as Qo,a as xt,w as Zi,W as Oa,b as An,d as st,L as In,H as _i,U as mn,D as Dt,B as Rt,e as Vn,f as vi,p as jo,E as Jo,g as at,P as On,A as es,h as Ri,i as zt,j as fi,k as _a,l as zn,m as Wn,n as fo,o as ts,q as Sn,r as hi,s as ns,t as is,u as yn,O as as,v as rs,x as os,y as ss,z as ls,G as cs,I as ds,J as us,K as fs,Q as hs,T as ps,X as ms,Y as gs,Z as _s,_ as vs,$ as Ss,a0 as Es,a1 as Ms,a2 as wi,a3 as En,a4 as ei,a5 as xs,a6 as Fn,a7 as Ts,a8 as As,a9 as bs,aa as Rs,ab as ho,ac as ws,ad as Cs,ae as ys,af as Ps,ag as ke,ah as Ls,ai as Ds,aj as Us,ak as Yt,al as gn,am as Jt,an as ot,ao as po,ap as fn,aq as kt,ar as pi,as as mo,at as go,au as _o,av as vo,aw as Is,ax as Ns,ay as Os,az as Fs,aA as So,aB as cn,aC as Bs,aD as Gs,aE as Hs,aF as Eo,aG as ks,aH as Mo,aI as xo,aJ as Ci,aK as yi,aL as Pi,aM as Li,aN as Ze,aO as Fa,aP as Ba,aQ as Ga,aR as Ha,aS as ka,aT as Va,aU as za,aV as Wa,aW as Xa,aX as qa,aY as Ya,aZ as Ka,a_ as $a,a$ as Za,b0 as Qa,b1 as ja,b2 as Ja,b3 as er,b4 as tr,b5 as nr,b6 as ir,b7 as ar,b8 as rr,b9 as or,ba as sr,bb as lr,bc as cr,bd as dr,be as Qi,bf as ji,bg as Ji,bh as ea,bi as ta,bj as na,bk as ia,bl as Vs,bm as ur,bn as zs,bo as li,bp as Ws,bq as fr,br as hr,bs as pr,bt as aa,bu as ra,bv as Xs,bw as To,bx as qs,by as Si,bz as Ys,bA as Ks,bB as Ao,bC as en,bD as mr,bE as Tn,bF as gr,bG as bo,bH as Xn,bI as bn,bJ as $s,bK as Ro,bL as Zs,bM as Qs,bN as js,bO as _r,bP as Mt,bQ as Js,bR as el,bS as tl,bT as nl,bU as il,bV as wo,bW as al,bX as rl,bY as ol,bZ as sl,b_ as ll,b$ as cl,c0 as dl,c1 as ul,c2 as fl,c3 as hl,c4 as pl,c5 as ml,c6 as Wt,c7 as pt,c8 as St,c9 as oa,ca as sa,cb as Co,cc as gl,cd as _l,ce as Vt,cf as vr,cg as vl,ch as Di,ci as Sr,cj as Er,ck as Mr,cl as $t,cm as yo,cn as Sl,co as El,cp as Ml,cq as Po,cr as xl,cs as Tl,ct as Al}from"./three.core-DJ5Fh1xw.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const bl="modulepreload",Rl=function(e,n){return new URL(e,n).href},xr={},la=function(n,t,i){let r=Promise.resolve();if(t&&t.length>0){let s=function(m){return Promise.all(m.map(f=>Promise.resolve(f).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const o=document.getElementsByTagName("link"),p=document.querySelector("meta[property=csp-nonce]"),u=p?.nonce||p?.getAttribute("nonce");r=s(t.map(m=>{if(m=Rl(m,i),m in xr)return;xr[m]=!0;const f=m.endsWith(".css"),g=f?'[rel="stylesheet"]':"";if(!!i)for(let M=o.length-1;M>=0;M--){const c=o[M];if(c.href===m&&(!f||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${g}`))return;const T=document.createElement("link");if(T.rel=f?"stylesheet":bl,f||(T.as="script"),T.crossOrigin="",T.href=m,u&&T.setAttribute("nonce",u),document.head.appendChild(T),f)return new Promise((M,c)=>{T.addEventListener("load",M),T.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${m}`)))})}))}function a(s){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s}return r.then(s=>{for(const o of s||[])o.status==="rejected"&&a(o.reason);return n().catch(a)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Lo(){let e=null,n=!1,t=null,i=null;function r(a,s){t(a,s),i=e.requestAnimationFrame(r)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(r),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(a){t=a},setContext:function(a){e=a}}}function wl(e){const n=new WeakMap;function t(o,p){const u=o.array,m=o.usage,f=u.byteLength,g=e.createBuffer();e.bindBuffer(p,g),e.bufferData(p,u,m),o.onUploadCallback();let _;if(u instanceof Float32Array)_=e.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)_=e.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?_=e.HALF_FLOAT:_=e.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=e.SHORT;else if(u instanceof Uint32Array)_=e.UNSIGNED_INT;else if(u instanceof Int32Array)_=e.INT;else if(u instanceof Int8Array)_=e.BYTE;else if(u instanceof Uint8Array)_=e.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,p,u){const m=p.array,f=p.updateRanges;if(e.bindBuffer(u,o),f.length===0)e.bufferSubData(u,0,m);else{f.sort((_,T)=>_.start-T.start);let g=0;for(let _=1;_<f.length;_++){const T=f[g],M=f[_];M.start<=T.start+T.count+1?T.count=Math.max(T.count,M.start+M.count-T.start):(++g,f[g]=M)}f.length=g+1;for(let _=0,T=f.length;_<T;_++){const M=f[_];e.bufferSubData(u,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}p.clearUpdateRanges()}p.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),n.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const p=n.get(o);p&&(e.deleteBuffer(p.buffer),n.delete(o))}function s(o,p){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const m=n.get(o);(!m||m.version<o.version)&&n.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=n.get(o);if(u===void 0)n.set(o,t(o,p));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,p),u.version=o.version}}return{get:r,remove:a,update:s}}var Cl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yl=`#ifdef USE_ALPHAHASH
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
#endif`,Pl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ll=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dl=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ul=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Il=`#ifdef USE_AOMAP
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
#endif`,Nl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ol=`#ifdef USE_BATCHING
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
#endif`,Fl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hl=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kl=`#ifdef USE_IRIDESCENCE
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
#endif`,Vl=`#ifdef USE_BUMPMAP
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
#endif`,zl=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ql=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$l=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zl=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ql=`#define PI 3.141592653589793
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
} // validated`,jl=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jl=`vec3 transformedNormal = objectNormal;
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
#endif`,ec=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ic=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ac="gl_FragColor = linearToOutputTexel( gl_FragColor );",rc=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,oc=`#ifdef USE_ENVMAP
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
#endif`,sc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lc=`#ifdef USE_ENVMAP
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
#endif`,cc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dc=`#ifdef USE_ENVMAP
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
#endif`,uc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mc=`#ifdef USE_GRADIENTMAP
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
}`,gc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_c=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sc=`uniform bool receiveShadow;
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
#endif`,Ec=`#ifdef USE_ENVMAP
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
#endif`,Mc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ac=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bc=`PhysicalMaterial material;
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
#endif`,Rc=`struct PhysicalMaterial {
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
}`,wc=`
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
#endif`,Cc=`#if defined( RE_IndirectDiffuse )
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
#endif`,yc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ic=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Oc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fc=`#if defined( USE_POINTS_UV )
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
#endif`,Bc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hc=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kc=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zc=`#ifdef USE_MORPHTARGETS
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
#endif`,Wc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qc=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$c=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zc=`#ifdef USE_NORMALMAP
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
#endif`,Qc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ed=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,td=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,id=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ad=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,od=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ld=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ud=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fd=`float getShadowMask() {
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
}`,hd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pd=`#ifdef USE_SKINNING
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
#endif`,md=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gd=`#ifdef USE_SKINNING
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
#endif`,_d=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ed=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Md=`#ifdef USE_TRANSMISSION
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
#endif`,xd=`#ifdef USE_TRANSMISSION
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
#endif`,Td=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ad=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cd=`uniform sampler2D t2D;
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
}`,yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ld=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ud=`#include <common>
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
}`,Id=`#if DEPTH_PACKING == 3200
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
}`,Nd=`#define DISTANCE
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
}`,Od=`#define DISTANCE
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
}`,Fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gd=`uniform float scale;
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
}`,Hd=`uniform vec3 diffuse;
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
}`,kd=`#include <common>
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
}`,Vd=`uniform vec3 diffuse;
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
}`,zd=`#define LAMBERT
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
}`,Wd=`#define LAMBERT
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
}`,Xd=`#define MATCAP
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
}`,qd=`#define MATCAP
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
}`,Yd=`#define NORMAL
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
}`,Kd=`#define NORMAL
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
}`,$d=`#define PHONG
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
}`,Zd=`#define PHONG
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
}`,Qd=`#define STANDARD
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
}`,jd=`#define STANDARD
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
}`,Jd=`#define TOON
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
}`,eu=`#define TOON
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
}`,tu=`uniform float size;
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
}`,nu=`uniform vec3 diffuse;
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
}`,iu=`#include <common>
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
}`,au=`uniform vec3 color;
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
}`,ru=`uniform float rotation;
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
}`,ou=`uniform vec3 diffuse;
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
}`,Fe={alphahash_fragment:Cl,alphahash_pars_fragment:yl,alphamap_fragment:Pl,alphamap_pars_fragment:Ll,alphatest_fragment:Dl,alphatest_pars_fragment:Ul,aomap_fragment:Il,aomap_pars_fragment:Nl,batching_pars_vertex:Ol,batching_vertex:Fl,begin_vertex:Bl,beginnormal_vertex:Gl,bsdfs:Hl,iridescence_fragment:kl,bumpmap_pars_fragment:Vl,clipping_planes_fragment:zl,clipping_planes_pars_fragment:Wl,clipping_planes_pars_vertex:Xl,clipping_planes_vertex:ql,color_fragment:Yl,color_pars_fragment:Kl,color_pars_vertex:$l,color_vertex:Zl,common:Ql,cube_uv_reflection_fragment:jl,defaultnormal_vertex:Jl,displacementmap_pars_vertex:ec,displacementmap_vertex:tc,emissivemap_fragment:nc,emissivemap_pars_fragment:ic,colorspace_fragment:ac,colorspace_pars_fragment:rc,envmap_fragment:oc,envmap_common_pars_fragment:sc,envmap_pars_fragment:lc,envmap_pars_vertex:cc,envmap_physical_pars_fragment:Ec,envmap_vertex:dc,fog_vertex:uc,fog_pars_vertex:fc,fog_fragment:hc,fog_pars_fragment:pc,gradientmap_pars_fragment:mc,lightmap_pars_fragment:gc,lights_lambert_fragment:_c,lights_lambert_pars_fragment:vc,lights_pars_begin:Sc,lights_toon_fragment:Mc,lights_toon_pars_fragment:xc,lights_phong_fragment:Tc,lights_phong_pars_fragment:Ac,lights_physical_fragment:bc,lights_physical_pars_fragment:Rc,lights_fragment_begin:wc,lights_fragment_maps:Cc,lights_fragment_end:yc,logdepthbuf_fragment:Pc,logdepthbuf_pars_fragment:Lc,logdepthbuf_pars_vertex:Dc,logdepthbuf_vertex:Uc,map_fragment:Ic,map_pars_fragment:Nc,map_particle_fragment:Oc,map_particle_pars_fragment:Fc,metalnessmap_fragment:Bc,metalnessmap_pars_fragment:Gc,morphinstance_vertex:Hc,morphcolor_vertex:kc,morphnormal_vertex:Vc,morphtarget_pars_vertex:zc,morphtarget_vertex:Wc,normal_fragment_begin:Xc,normal_fragment_maps:qc,normal_pars_fragment:Yc,normal_pars_vertex:Kc,normal_vertex:$c,normalmap_pars_fragment:Zc,clearcoat_normal_fragment_begin:Qc,clearcoat_normal_fragment_maps:jc,clearcoat_pars_fragment:Jc,iridescence_pars_fragment:ed,opaque_fragment:td,packing:nd,premultiplied_alpha_fragment:id,project_vertex:ad,dithering_fragment:rd,dithering_pars_fragment:od,roughnessmap_fragment:sd,roughnessmap_pars_fragment:ld,shadowmap_pars_fragment:cd,shadowmap_pars_vertex:dd,shadowmap_vertex:ud,shadowmask_pars_fragment:fd,skinbase_vertex:hd,skinning_pars_vertex:pd,skinning_vertex:md,skinnormal_vertex:gd,specularmap_fragment:_d,specularmap_pars_fragment:vd,tonemapping_fragment:Sd,tonemapping_pars_fragment:Ed,transmission_fragment:Md,transmission_pars_fragment:xd,uv_pars_fragment:Td,uv_pars_vertex:Ad,uv_vertex:bd,worldpos_vertex:Rd,background_vert:wd,background_frag:Cd,backgroundCube_vert:yd,backgroundCube_frag:Pd,cube_vert:Ld,cube_frag:Dd,depth_vert:Ud,depth_frag:Id,distanceRGBA_vert:Nd,distanceRGBA_frag:Od,equirect_vert:Fd,equirect_frag:Bd,linedashed_vert:Gd,linedashed_frag:Hd,meshbasic_vert:kd,meshbasic_frag:Vd,meshlambert_vert:zd,meshlambert_frag:Wd,meshmatcap_vert:Xd,meshmatcap_frag:qd,meshnormal_vert:Yd,meshnormal_frag:Kd,meshphong_vert:$d,meshphong_frag:Zd,meshphysical_vert:Qd,meshphysical_frag:jd,meshtoon_vert:Jd,meshtoon_frag:eu,points_vert:tu,points_frag:nu,shadow_vert:iu,shadow_frag:au,sprite_vert:ru,sprite_frag:ou},re={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Ot={basic:{uniforms:Mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Mt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Mt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Mt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Mt([re.points,re.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Mt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Mt([re.common,re.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Mt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Mt([re.sprite,re.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Mt([re.common,re.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Mt([re.lights,re.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Ot.physical={uniforms:Mt([Ot.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const ti={r:0,b:0,g:0},rn=new Tn,su=new Bt;function lu(e,n,t,i,r,a,s){const o=new Ve(0);let p=a===!0?0:1,u,m,f=null,g=0,_=null;function T(R){let x=R.isScene===!0?R.background:null;return x&&x.isTexture&&(x=(R.backgroundBlurriness>0?t:n).get(x)),x}function M(R){let x=!1;const D=T(R);D===null?l(o,p):D&&D.isColor&&(l(D,1),x=!0);const C=e.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function c(R,x){const D=T(x);D&&(D.isCubeTexture||D.mapping===Si)?(m===void 0&&(m=new ot(new en(1,1,1),new Yt({name:"BackgroundCubeMaterial",uniforms:mr(Ot.backgroundCube.uniforms),vertexShader:Ot.backgroundCube.vertexShader,fragmentShader:Ot.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(C,I,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),rn.copy(x.backgroundRotation),rn.x*=-1,rn.y*=-1,rn.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(rn.y*=-1,rn.z*=-1),m.material.uniforms.envMap.value=D,m.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(su.makeRotationFromEuler(rn)),m.material.toneMapped=st.getTransfer(D.colorSpace)!==Ze,(f!==D||g!==D.version||_!==e.toneMapping)&&(m.material.needsUpdate=!0,f=D,g=D.version,_=e.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null)):D&&D.isTexture&&(u===void 0&&(u=new ot(new vo(2,2),new Yt({name:"BackgroundMaterial",uniforms:mr(Ot.background.uniforms),vertexShader:Ot.background.vertexShader,fragmentShader:Ot.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=D,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=st.getTransfer(D.colorSpace)!==Ze,D.matrixAutoUpdate===!0&&D.updateMatrix(),u.material.uniforms.uvTransform.value.copy(D.matrix),(f!==D||g!==D.version||_!==e.toneMapping)&&(u.material.needsUpdate=!0,f=D,g=D.version,_=e.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null))}function l(R,x){R.getRGB(ti,Ao(e)),i.buffers.color.setClear(ti.r,ti.g,ti.b,x,s)}function b(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(R,x=1){o.set(R),p=x,l(o,p)},getClearAlpha:function(){return p},setClearAlpha:function(R){p=R,l(o,p)},render:M,addToRenderList:c,dispose:b}}function cu(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},r=g(null);let a=r,s=!1;function o(S,L,F,X,q){let K=!1;const V=f(X,F,L);a!==V&&(a=V,u(a.object)),K=_(S,X,F,q),K&&T(S,X,F,q),q!==null&&n.update(q,e.ELEMENT_ARRAY_BUFFER),(K||s)&&(s=!1,x(S,L,F,X),q!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(q).buffer))}function p(){return e.createVertexArray()}function u(S){return e.bindVertexArray(S)}function m(S){return e.deleteVertexArray(S)}function f(S,L,F){const X=F.wireframe===!0;let q=i[S.id];q===void 0&&(q={},i[S.id]=q);let K=q[L.id];K===void 0&&(K={},q[L.id]=K);let V=K[X];return V===void 0&&(V=g(p()),K[X]=V),V}function g(S){const L=[],F=[],X=[];for(let q=0;q<t;q++)L[q]=0,F[q]=0,X[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:X,object:S,attributes:{},index:null}}function _(S,L,F,X){const q=a.attributes,K=L.attributes;let V=0;const ne=F.getAttributes();for(const H in ne)if(ne[H].location>=0){const be=q[H];let de=K[H];if(de===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(de=S.instanceColor)),be===void 0||be.attribute!==de||de&&be.data!==de.data)return!0;V++}return a.attributesNum!==V||a.index!==X}function T(S,L,F,X){const q={},K=L.attributes;let V=0;const ne=F.getAttributes();for(const H in ne)if(ne[H].location>=0){let be=K[H];be===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(be=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(be=S.instanceColor));const de={};de.attribute=be,be&&be.data&&(de.data=be.data),q[H]=de,V++}a.attributes=q,a.attributesNum=V,a.index=X}function M(){const S=a.newAttributes;for(let L=0,F=S.length;L<F;L++)S[L]=0}function c(S){l(S,0)}function l(S,L){const F=a.newAttributes,X=a.enabledAttributes,q=a.attributeDivisors;F[S]=1,X[S]===0&&(e.enableVertexAttribArray(S),X[S]=1),q[S]!==L&&(e.vertexAttribDivisor(S,L),q[S]=L)}function b(){const S=a.newAttributes,L=a.enabledAttributes;for(let F=0,X=L.length;F<X;F++)L[F]!==S[F]&&(e.disableVertexAttribArray(F),L[F]=0)}function R(S,L,F,X,q,K,V){V===!0?e.vertexAttribIPointer(S,L,F,q,K):e.vertexAttribPointer(S,L,F,X,q,K)}function x(S,L,F,X){M();const q=X.attributes,K=F.getAttributes(),V=L.defaultAttributeValues;for(const ne in K){const H=K[ne];if(H.location>=0){let ge=q[ne];if(ge===void 0&&(ne==="instanceMatrix"&&S.instanceMatrix&&(ge=S.instanceMatrix),ne==="instanceColor"&&S.instanceColor&&(ge=S.instanceColor)),ge!==void 0){const be=ge.normalized,de=ge.itemSize,De=n.get(ge);if(De===void 0)continue;const Ye=De.buffer,Qe=De.type,Xe=De.bytesPerElement,z=Qe===e.INT||Qe===e.UNSIGNED_INT||ge.gpuType===So;if(ge.isInterleavedBufferAttribute){const $=ge.data,he=$.stride,Le=ge.offset;if($.isInstancedInterleavedBuffer){for(let Te=0;Te<H.locationSize;Te++)l(H.location+Te,$.meshPerAttribute);S.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Te=0;Te<H.locationSize;Te++)c(H.location+Te);e.bindBuffer(e.ARRAY_BUFFER,Ye);for(let Te=0;Te<H.locationSize;Te++)R(H.location+Te,de/H.locationSize,Qe,be,he*Xe,(Le+de/H.locationSize*Te)*Xe,z)}else{if(ge.isInstancedBufferAttribute){for(let $=0;$<H.locationSize;$++)l(H.location+$,ge.meshPerAttribute);S.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let $=0;$<H.locationSize;$++)c(H.location+$);e.bindBuffer(e.ARRAY_BUFFER,Ye);for(let $=0;$<H.locationSize;$++)R(H.location+$,de/H.locationSize,Qe,be,de*Xe,de/H.locationSize*$*Xe,z)}}else if(V!==void 0){const be=V[ne];if(be!==void 0)switch(be.length){case 2:e.vertexAttrib2fv(H.location,be);break;case 3:e.vertexAttrib3fv(H.location,be);break;case 4:e.vertexAttrib4fv(H.location,be);break;default:e.vertexAttrib1fv(H.location,be)}}}}b()}function D(){B();for(const S in i){const L=i[S];for(const F in L){const X=L[F];for(const q in X)m(X[q].object),delete X[q];delete L[F]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const F in L){const X=L[F];for(const q in X)m(X[q].object),delete X[q];delete L[F]}delete i[S.id]}function I(S){for(const L in i){const F=i[L];if(F[S.id]===void 0)continue;const X=F[S.id];for(const q in X)m(X[q].object),delete X[q];delete F[S.id]}}function B(){v(),s=!0,a!==r&&(a=r,u(a.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:B,resetDefaultState:v,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:c,disableUnusedAttributes:b}}function du(e,n,t){let i;function r(u){i=u}function a(u,m){e.drawArrays(i,u,m),t.update(m,i,1)}function s(u,m,f){f!==0&&(e.drawArraysInstanced(i,u,m,f),t.update(m,i,f))}function o(u,m,f){if(f===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,m,0,f);let _=0;for(let T=0;T<f;T++)_+=m[T];t.update(_,i,1)}function p(u,m,f,g){if(f===0)return;const _=n.get("WEBGL_multi_draw");if(_===null)for(let T=0;T<u.length;T++)s(u[T],m[T],g[T]);else{_.multiDrawArraysInstancedWEBGL(i,u,0,m,0,g,0,f);let T=0;for(let M=0;M<f;M++)T+=m[M]*g[M];t.update(T,i,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=p}function uu(e,n,t,i){let r;function a(){if(r!==void 0)return r;if(n.has("EXT_texture_filter_anisotropic")===!0){const I=n.get("EXT_texture_filter_anisotropic");r=e.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(I){return!(I!==zt&&i.convert(I)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const B=I===_i&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(I!==mn&&i.convert(I)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==cn&&!B)}function p(I){if(I==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const m=p(u);m!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",m,"instead."),u=m);const f=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),_=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),T=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),c=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),l=e.getParameter(e.MAX_VERTEX_ATTRIBS),b=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),R=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),D=T>0,C=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:p,textureFormatReadable:s,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:g,maxTextures:_,maxVertexTextures:T,maxTextureSize:M,maxCubemapSize:c,maxAttributes:l,maxVertexUniforms:b,maxVaryings:R,maxFragmentUniforms:x,vertexTextures:D,maxSamples:C}}function fu(e){const n=this;let t=null,i=0,r=!1,a=!1;const s=new Ps,o=new ke,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(f,g){const _=f.length!==0||g||i!==0||r;return r=g,i=f.length,_},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,g){t=m(f,g,0)},this.setState=function(f,g,_){const T=f.clippingPlanes,M=f.clipIntersection,c=f.clipShadows,l=e.get(f);if(!r||T===null||T.length===0||a&&!c)a?m(null):u();else{const b=a?0:i,R=b*4;let x=l.clippingState||null;p.value=x,x=m(T,g,R,_);for(let D=0;D!==R;++D)x[D]=t[D];l.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function u(){p.value!==t&&(p.value=t,p.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function m(f,g,_,T){const M=f!==null?f.length:0;let c=null;if(M!==0){if(c=p.value,T!==!0||c===null){const l=_+M*4,b=g.matrixWorldInverse;o.getNormalMatrix(b),(c===null||c.length<l)&&(c=new Float32Array(l));for(let R=0,x=_;R!==M;++R,x+=4)s.copy(f[R]).applyMatrix4(b,o),s.normal.toArray(c,x),c[x+3]=s.constant}p.value=c,p.needsUpdate=!0}return n.numPlanes=M,n.numIntersection=0,c}}function hu(e){let n=new WeakMap;function t(s,o){return o===aa?s.mapping=Xn:o===ra&&(s.mapping=bn),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===aa||o===ra)if(n.has(s)){const p=n.get(s).texture;return t(p,s.mapping)}else{const p=s.image;if(p&&p.height>0){const u=new Xs(p.height);return u.fromEquirectangularTexture(e,s),n.set(s,u),s.addEventListener("dispose",r),t(u.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const p=n.get(o);p!==void 0&&(n.delete(o),p.dispose())}function a(){n=new WeakMap}return{get:i,dispose:a}}const Mn=4,Tr=[.125,.215,.35,.446,.526,.582],ln=20,Ui=new $s,Ar=new Ve;let Ii=null,Ni=0,Oi=0,Fi=!1;const sn=(1+Math.sqrt(5))/2,vn=1/sn,br=[new ae(-sn,vn,0),new ae(sn,vn,0),new ae(-vn,0,sn),new ae(vn,0,sn),new ae(0,sn,-vn),new ae(0,sn,vn),new ae(-1,1,-1),new ae(1,1,-1),new ae(-1,1,1),new ae(1,1,1)],pu=new ae;class Rr{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,t=0,i=.1,r=100,a={}){const{size:s=256,position:o=pu}=a;Ii=this._renderer.getRenderTarget(),Ni=this._renderer.getActiveCubeFace(),Oi=this._renderer.getActiveMipmapLevel(),Fi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(n,i,r,p,o),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(Ii,Ni,Oi),this._renderer.xr.enabled=Fi,n.scissorTest=!1,ni(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===Xn||n.mapping===bn?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),Ii=this._renderer.getRenderTarget(),Ni=this._renderer.getActiveCubeFace(),Oi=this._renderer.getActiveMipmapLevel(),Fi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:_i,format:zt,colorSpace:vi,depthBuffer:!1},r=wr(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wr(n,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mu(a)),this._blurMaterial=gu(a,n,t)}return r}_compileMaterial(n){const t=new ot(this._lodPlanes[0],n);this._renderer.compile(t,Ui)}_sceneToCubeUV(n,t,i,r,a){const p=new On(90,1,t,i),u=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],f=this._renderer,g=f.autoClear,_=f.toneMapping;f.getClearColor(Ar),f.toneMapping=jt,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const M=new Ro({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),c=new ot(new en,M);let l=!1;const b=n.background;b?b.isColor&&(M.color.copy(b),n.background=null,l=!0):(M.color.copy(Ar),l=!0);for(let R=0;R<6;R++){const x=R%3;x===0?(p.up.set(0,u[R],0),p.position.set(a.x,a.y,a.z),p.lookAt(a.x+m[R],a.y,a.z)):x===1?(p.up.set(0,0,u[R]),p.position.set(a.x,a.y,a.z),p.lookAt(a.x,a.y+m[R],a.z)):(p.up.set(0,u[R],0),p.position.set(a.x,a.y,a.z),p.lookAt(a.x,a.y,a.z+m[R]));const D=this._cubeSize;ni(r,x*D,R>2?D:0,D,D),f.setRenderTarget(r),l&&f.render(c,p),f.render(n,p)}c.geometry.dispose(),c.material.dispose(),f.toneMapping=_,f.autoClear=g,n.background=b}_textureToCubeUV(n,t){const i=this._renderer,r=n.mapping===Xn||n.mapping===bn;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yr()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cr());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new ot(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=n;const p=this._cubeSize;ni(t,0,0,3*p,2*p),i.setRenderTarget(t),i.render(s,Ui)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=br[(r-a-1)%br.length];this._blur(n,a-1,a,s,o)}t.autoClear=i}_blur(n,t,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(n,s,t,i,r,"latitudinal",a),this._halfBlur(s,n,i,i,r,"longitudinal",a)}_halfBlur(n,t,i,r,a,s,o){const p=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,f=new ot(this._lodPlanes[r],u),g=u.uniforms,_=this._sizeLods[i]-1,T=isFinite(a)?Math.PI/(2*_):2*Math.PI/(2*ln-1),M=a/T,c=isFinite(a)?1+Math.floor(m*M):ln;c>ln&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${c} samples when the maximum is set to ${ln}`);const l=[];let b=0;for(let I=0;I<ln;++I){const B=I/M,v=Math.exp(-B*B/2);l.push(v),I===0?b+=v:I<c&&(b+=2*v)}for(let I=0;I<l.length;I++)l[I]=l[I]/b;g.envMap.value=n.texture,g.samples.value=c,g.weights.value=l,g.latitudinal.value=s==="latitudinal",o&&(g.poleAxis.value=o);const{_lodMax:R}=this;g.dTheta.value=T,g.mipInt.value=R-i;const x=this._sizeLods[r],D=3*x*(r>R-Mn?r-R+Mn:0),C=4*(this._cubeSize-x);ni(t,D,C,3*x,2*x),p.setRenderTarget(t),p.render(f,Ui)}}function mu(e){const n=[],t=[],i=[];let r=e;const a=e-Mn+1+Tr.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let p=1/o;s>e-Mn?p=Tr[s-e+Mn-1]:s===0&&(p=0),i.push(p);const u=1/(o-2),m=-u,f=1+u,g=[m,m,f,m,f,f,m,m,f,f,m,f],_=6,T=6,M=3,c=2,l=1,b=new Float32Array(M*T*_),R=new Float32Array(c*T*_),x=new Float32Array(l*T*_);for(let C=0;C<_;C++){const I=C%3*2/3-1,B=C>2?0:-1,v=[I,B,0,I+2/3,B,0,I+2/3,B+1,0,I,B,0,I+2/3,B+1,0,I,B+1,0];b.set(v,M*T*C),R.set(g,c*T*C);const S=[C,C,C,C,C,C];x.set(S,l*T*C)}const D=new gn;D.setAttribute("position",new Jt(b,M)),D.setAttribute("uv",new Jt(R,c)),D.setAttribute("faceIndex",new Jt(x,l)),n.push(D),r>Mn&&r--}return{lodPlanes:n,sizeLods:t,sigmas:i}}function wr(e,n,t){const i=new An(e,n,t);return i.texture.mapping=Si,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ni(e,n,t,i,r){e.viewport.set(n,t,i,r),e.scissor.set(n,t,i,r)}function gu(e,n,t){const i=new Float32Array(ln),r=new ae(0,1,0);return new Yt({name:"SphericalGaussianBlur",defines:{n:ln,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:va(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Cr(){return new Yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:va(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function yr(){return new Yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function va(){return`

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
	`}function _u(e){let n=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const p=o.mapping,u=p===aa||p===ra,m=p===Xn||p===bn;if(u||m){let f=n.get(o);const g=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==g)return t===null&&(t=new Rr(e)),f=u?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,n.set(o,f),f.texture;if(f!==void 0)return f.texture;{const _=o.image;return u&&_&&_.height>0||m&&_&&r(_)?(t===null&&(t=new Rr(e)),f=u?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,n.set(o,f),o.addEventListener("dispose",a),f.texture):null}}}return o}function r(o){let p=0;const u=6;for(let m=0;m<u;m++)o[m]!==void 0&&p++;return p===u}function a(o){const p=o.target;p.removeEventListener("dispose",a);const u=n.get(p);u!==void 0&&(n.delete(p),u.dispose())}function s(){n=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function vu(e){const n={};function t(i){if(n[i]!==void 0)return n[i];let r;switch(i){case"WEBGL_depth_texture":r=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=e.getExtension(i)}return n[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Zi("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Su(e,n,t,i){const r={},a=new WeakMap;function s(f){const g=f.target;g.index!==null&&n.remove(g.index);for(const T in g.attributes)n.remove(g.attributes[T]);g.removeEventListener("dispose",s),delete r[g.id];const _=a.get(g);_&&(n.remove(_),a.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function o(f,g){return r[g.id]===!0||(g.addEventListener("dispose",s),r[g.id]=!0,t.memory.geometries++),g}function p(f){const g=f.attributes;for(const _ in g)n.update(g[_],e.ARRAY_BUFFER)}function u(f){const g=[],_=f.index,T=f.attributes.position;let M=0;if(_!==null){const b=_.array;M=_.version;for(let R=0,x=b.length;R<x;R+=3){const D=b[R+0],C=b[R+1],I=b[R+2];g.push(D,C,C,I,I,D)}}else if(T!==void 0){const b=T.array;M=T.version;for(let R=0,x=b.length/3-1;R<x;R+=3){const D=R+0,C=R+1,I=R+2;g.push(D,C,C,I,I,D)}}else return;const c=new(js(g)?Zs:Qs)(g,1);c.version=M;const l=a.get(f);l&&n.remove(l),a.set(f,c)}function m(f){const g=a.get(f);if(g){const _=f.index;_!==null&&g.version<_.version&&u(f)}else u(f);return a.get(f)}return{get:o,update:p,getWireframeAttribute:m}}function Eu(e,n,t){let i;function r(g){i=g}let a,s;function o(g){a=g.type,s=g.bytesPerElement}function p(g,_){e.drawElements(i,_,a,g*s),t.update(_,i,1)}function u(g,_,T){T!==0&&(e.drawElementsInstanced(i,_,a,g*s,T),t.update(_,i,T))}function m(g,_,T){if(T===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,_,0,a,g,0,T);let c=0;for(let l=0;l<T;l++)c+=_[l];t.update(c,i,1)}function f(g,_,T,M){if(T===0)return;const c=n.get("WEBGL_multi_draw");if(c===null)for(let l=0;l<g.length;l++)u(g[l]/s,_[l],M[l]);else{c.multiDrawElementsInstancedWEBGL(i,_,0,a,g,0,M,0,T);let l=0;for(let b=0;b<T;b++)l+=_[b]*M[b];t.update(l,i,1)}}this.setMode=r,this.setIndex=o,this.render=p,this.renderInstances=u,this.renderMultiDraw=m,this.renderMultiDrawInstances=f}function Mu(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case e.TRIANGLES:t.triangles+=o*(a/3);break;case e.LINES:t.lines+=o*(a/2);break;case e.LINE_STRIP:t.lines+=o*(a-1);break;case e.LINE_LOOP:t.lines+=o*a;break;case e.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:r,update:i}}function xu(e,n,t){const i=new WeakMap,r=new xt;function a(s,o,p){const u=s.morphTargetInfluences,m=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=m!==void 0?m.length:0;let g=i.get(o);if(g===void 0||g.count!==f){let v=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",v)};g!==void 0&&g.texture.dispose();const _=o.morphAttributes.position!==void 0,T=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,c=o.morphAttributes.position||[],l=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let R=0;_===!0&&(R=1),T===!0&&(R=2),M===!0&&(R=3);let x=o.attributes.position.count*R,D=1;x>n.maxTextureSize&&(D=Math.ceil(x/n.maxTextureSize),x=n.maxTextureSize);const C=new Float32Array(x*D*4*f),I=new To(C,x,D,f);I.type=cn,I.needsUpdate=!0;const B=R*4;for(let S=0;S<f;S++){const L=c[S],F=l[S],X=b[S],q=x*D*4*S;for(let K=0;K<L.count;K++){const V=K*B;_===!0&&(r.fromBufferAttribute(L,K),C[q+V+0]=r.x,C[q+V+1]=r.y,C[q+V+2]=r.z,C[q+V+3]=0),T===!0&&(r.fromBufferAttribute(F,K),C[q+V+4]=r.x,C[q+V+5]=r.y,C[q+V+6]=r.z,C[q+V+7]=0),M===!0&&(r.fromBufferAttribute(X,K),C[q+V+8]=r.x,C[q+V+9]=r.y,C[q+V+10]=r.z,C[q+V+11]=X.itemSize===4?r.w:1)}}g={count:f,texture:I,size:new at(x,D)},i.set(o,g),o.addEventListener("dispose",v)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)p.getUniforms().setValue(e,"morphTexture",s.morphTexture,t);else{let _=0;for(let M=0;M<u.length;M++)_+=u[M];const T=o.morphTargetsRelative?1:1-_;p.getUniforms().setValue(e,"morphTargetBaseInfluence",T),p.getUniforms().setValue(e,"morphTargetInfluences",u)}p.getUniforms().setValue(e,"morphTargetsTexture",g.texture,t),p.getUniforms().setValue(e,"morphTargetsTextureSize",g.size)}return{update:a}}function Tu(e,n,t,i){let r=new WeakMap;function a(p){const u=i.render.frame,m=p.geometry,f=n.get(p,m);if(r.get(f)!==u&&(n.update(f),r.set(f,u)),p.isInstancedMesh&&(p.hasEventListener("dispose",o)===!1&&p.addEventListener("dispose",o),r.get(p)!==u&&(t.update(p.instanceMatrix,e.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,e.ARRAY_BUFFER),r.set(p,u))),p.isSkinnedMesh){const g=p.skeleton;r.get(g)!==u&&(g.update(),r.set(g,u))}return f}function s(){r=new WeakMap}function o(p){const u=p.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:s}}const Do=new cl,Pr=new fo(1,1),Uo=new To,Io=new ll,No=new sl,Lr=[],Dr=[],Ur=new Float32Array(16),Ir=new Float32Array(9),Nr=new Float32Array(4);function Rn(e,n,t){const i=e[0];if(i<=0||i>0)return e;const r=n*t;let a=Lr[r];if(a===void 0&&(a=new Float32Array(r),Lr[r]=a),n!==0){i.toArray(a,0);for(let s=1,o=0;s!==n;++s)o+=t,e[s].toArray(a,o)}return a}function lt(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function ct(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function Ei(e,n){let t=Dr[n];t===void 0&&(t=new Int32Array(n),Dr[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function Au(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function bu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(lt(t,n))return;e.uniform2fv(this.addr,n),ct(t,n)}}function Ru(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(lt(t,n))return;e.uniform3fv(this.addr,n),ct(t,n)}}function wu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(lt(t,n))return;e.uniform4fv(this.addr,n),ct(t,n)}}function Cu(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(lt(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),ct(t,n)}else{if(lt(t,i))return;Nr.set(i),e.uniformMatrix2fv(this.addr,!1,Nr),ct(t,i)}}function yu(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(lt(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),ct(t,n)}else{if(lt(t,i))return;Ir.set(i),e.uniformMatrix3fv(this.addr,!1,Ir),ct(t,i)}}function Pu(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(lt(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),ct(t,n)}else{if(lt(t,i))return;Ur.set(i),e.uniformMatrix4fv(this.addr,!1,Ur),ct(t,i)}}function Lu(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function Du(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(lt(t,n))return;e.uniform2iv(this.addr,n),ct(t,n)}}function Uu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(lt(t,n))return;e.uniform3iv(this.addr,n),ct(t,n)}}function Iu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(lt(t,n))return;e.uniform4iv(this.addr,n),ct(t,n)}}function Nu(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function Ou(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(lt(t,n))return;e.uniform2uiv(this.addr,n),ct(t,n)}}function Fu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(lt(t,n))return;e.uniform3uiv(this.addr,n),ct(t,n)}}function Bu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(lt(t,n))return;e.uniform4uiv(this.addr,n),ct(t,n)}}function Gu(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);let a;this.type===e.SAMPLER_2D_SHADOW?(Pr.compareFunction=ho,a=Pr):a=Do,t.setTexture2D(n||a,r)}function Hu(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(n||Io,r)}function ku(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(n||No,r)}function Vu(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(n||Uo,r)}function zu(e){switch(e){case 5126:return Au;case 35664:return bu;case 35665:return Ru;case 35666:return wu;case 35674:return Cu;case 35675:return yu;case 35676:return Pu;case 5124:case 35670:return Lu;case 35667:case 35671:return Du;case 35668:case 35672:return Uu;case 35669:case 35673:return Iu;case 5125:return Nu;case 36294:return Ou;case 36295:return Fu;case 36296:return Bu;case 35678:case 36198:case 36298:case 36306:case 35682:return Gu;case 35679:case 36299:case 36307:return Hu;case 35680:case 36300:case 36308:case 36293:return ku;case 36289:case 36303:case 36311:case 36292:return Vu}}function Wu(e,n){e.uniform1fv(this.addr,n)}function Xu(e,n){const t=Rn(n,this.size,2);e.uniform2fv(this.addr,t)}function qu(e,n){const t=Rn(n,this.size,3);e.uniform3fv(this.addr,t)}function Yu(e,n){const t=Rn(n,this.size,4);e.uniform4fv(this.addr,t)}function Ku(e,n){const t=Rn(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function $u(e,n){const t=Rn(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function Zu(e,n){const t=Rn(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function Qu(e,n){e.uniform1iv(this.addr,n)}function ju(e,n){e.uniform2iv(this.addr,n)}function Ju(e,n){e.uniform3iv(this.addr,n)}function ef(e,n){e.uniform4iv(this.addr,n)}function tf(e,n){e.uniform1uiv(this.addr,n)}function nf(e,n){e.uniform2uiv(this.addr,n)}function af(e,n){e.uniform3uiv(this.addr,n)}function rf(e,n){e.uniform4uiv(this.addr,n)}function of(e,n,t){const i=this.cache,r=n.length,a=Ei(t,r);lt(i,a)||(e.uniform1iv(this.addr,a),ct(i,a));for(let s=0;s!==r;++s)t.setTexture2D(n[s]||Do,a[s])}function sf(e,n,t){const i=this.cache,r=n.length,a=Ei(t,r);lt(i,a)||(e.uniform1iv(this.addr,a),ct(i,a));for(let s=0;s!==r;++s)t.setTexture3D(n[s]||Io,a[s])}function lf(e,n,t){const i=this.cache,r=n.length,a=Ei(t,r);lt(i,a)||(e.uniform1iv(this.addr,a),ct(i,a));for(let s=0;s!==r;++s)t.setTextureCube(n[s]||No,a[s])}function cf(e,n,t){const i=this.cache,r=n.length,a=Ei(t,r);lt(i,a)||(e.uniform1iv(this.addr,a),ct(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(n[s]||Uo,a[s])}function df(e){switch(e){case 5126:return Wu;case 35664:return Xu;case 35665:return qu;case 35666:return Yu;case 35674:return Ku;case 35675:return $u;case 35676:return Zu;case 5124:case 35670:return Qu;case 35667:case 35671:return ju;case 35668:case 35672:return Ju;case 35669:case 35673:return ef;case 5125:return tf;case 36294:return nf;case 36295:return af;case 36296:return rf;case 35678:case 36198:case 36298:case 36306:case 35682:return of;case 35679:case 36299:case 36307:return sf;case 35680:case 36300:case 36308:case 36293:return lf;case 36289:case 36303:case 36311:case 36292:return cf}}class uf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=zu(t.type)}}class ff{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=df(t.type)}}class hf{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(n,t[o.id],i)}}}const Bi=/(\w+)(\])?(\[|\.)?/g;function Or(e,n){e.seq.push(n),e.map[n.id]=n}function pf(e,n,t){const i=e.name,r=i.length;for(Bi.lastIndex=0;;){const a=Bi.exec(i),s=Bi.lastIndex;let o=a[1];const p=a[2]==="]",u=a[3];if(p&&(o=o|0),u===void 0||u==="["&&s+2===r){Or(t,u===void 0?new uf(o,e,n):new ff(o,e,n));break}else{let f=t.map[o];f===void 0&&(f=new hf(o),Or(t,f)),t=f}}}class ci{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=n.getActiveUniform(t,r),s=n.getUniformLocation(t,a.name);pf(a,s,this)}}setValue(n,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(n,i,r)}setOptional(n,t,i){const r=t[i];r!==void 0&&this.setValue(n,i,r)}static upload(n,t,i,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],p=i[o.id];p.needsUpdate!==!1&&o.setValue(n,p.value,r)}}static seqWithValue(n,t){const i=[];for(let r=0,a=n.length;r!==a;++r){const s=n[r];s.id in t&&i.push(s)}return i}}function Fr(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const mf=37297;let gf=0;function _f(e,n){const t=e.split(`
`),i=[],r=Math.max(n-6,0),a=Math.min(n+6,t.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===n?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const Br=new ke;function vf(e){st._getMatrix(Br,st.workingColorSpace,e);const n=`mat3( ${Br.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(e)){case bo:return[n,"LinearTransferOETF"];case Ze:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function Gr(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),a=(e.getShaderInfoLog(n)||"").trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+_f(e.getShaderSource(n),o)}else return a}function Sf(e,n){const t=vf(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ef(e,n){let t;switch(n){case ol:t="Linear";break;case rl:t="Reinhard";break;case al:t="Cineon";break;case wo:t="ACESFilmic";break;case il:t="AgX";break;case nl:t="Neutral";break;case tl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),t="Linear"}return"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ii=new ae;function Mf(){st.getLuminanceCoefficients(ii);const e=ii.x.toFixed(4),n=ii.y.toFixed(4),t=ii.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xf(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nn).join(`
`)}function Tf(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function Af(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=e.getActiveAttrib(n,r),s=a.name;let o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:e.getAttribLocation(n,s),locationSize:o}}return t}function Nn(e){return e!==""}function Hr(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function kr(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const bf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ca(e){return e.replace(bf,wf)}const Rf=new Map;function wf(e,n){let t=Fe[n];if(t===void 0){const i=Rf.get(n);if(i!==void 0)t=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return ca(t)}const Cf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vr(e){return e.replace(Cf,yf)}function yf(e,n,t,i){let r="";for(let a=parseInt(n);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function zr(e){let n=`precision ${e.precision} float;
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
#define LOW_PRECISION`),n}function Pf(e){let n="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===po?n="SHADOWMAP_TYPE_PCF":e.shadowMapType===el?n="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===kt&&(n="SHADOWMAP_TYPE_VSM"),n}function Lf(e){let n="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Xn:case bn:n="ENVMAP_TYPE_CUBE";break;case Si:n="ENVMAP_TYPE_CUBE_UV";break}return n}function Df(e){let n="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case bn:n="ENVMAP_MODE_REFRACTION";break}return n}function Uf(e){let n="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case hl:n="ENVMAP_BLENDING_MULTIPLY";break;case fl:n="ENVMAP_BLENDING_MIX";break;case ul:n="ENVMAP_BLENDING_ADD";break}return n}function If(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Nf(e,n,t,i){const r=e.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const p=Pf(t),u=Lf(t),m=Df(t),f=Uf(t),g=If(t),_=xf(t),T=Tf(a),M=r.createProgram();let c,l,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Nn).join(`
`),c.length>0&&(c+=`
`),l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Nn).join(`
`),l.length>0&&(l+=`
`)):(c=[zr(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nn).join(`
`),l=[zr(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+m:"",t.envMap?"#define "+f:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jt?"#define TONE_MAPPING":"",t.toneMapping!==jt?Fe.tonemapping_pars_fragment:"",t.toneMapping!==jt?Ef("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,Sf("linearToOutputTexel",t.outputColorSpace),Mf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Nn).join(`
`)),s=ca(s),s=Hr(s,t),s=kr(s,t),o=ca(o),o=Hr(o,t),o=kr(o,t),s=Vr(s),o=Vr(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,c=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,l=["#define varying in",t.glslVersion===_r?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_r?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const R=b+c+s,x=b+l+o,D=Fr(r,r.VERTEX_SHADER,R),C=Fr(r,r.FRAGMENT_SHADER,x);r.attachShader(M,D),r.attachShader(M,C),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function I(L){if(e.debug.checkShaderErrors){const F=r.getProgramInfoLog(M)||"",X=r.getShaderInfoLog(D)||"",q=r.getShaderInfoLog(C)||"",K=F.trim(),V=X.trim(),ne=q.trim();let H=!0,ge=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(H=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,M,D,C);else{const be=Gr(r,D,"vertex"),de=Gr(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+K+`
`+be+`
`+de)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(V===""||ne==="")&&(ge=!1);ge&&(L.diagnostics={runnable:H,programLog:K,vertexShader:{log:V,prefix:c},fragmentShader:{log:ne,prefix:l}})}r.deleteShader(D),r.deleteShader(C),B=new ci(r,M),v=Af(r,M)}let B;this.getUniforms=function(){return B===void 0&&I(this),B};let v;this.getAttributes=function(){return v===void 0&&I(this),v};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(M,mf)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gf++,this.cacheKey=n,this.usedTimes=1,this.program=M,this.vertexShader=D,this.fragmentShader=C,this}let Of=0;class Ff{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(n);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new Bf(n),t.set(n,i)),i}}class Bf{constructor(n){this.id=Of++,this.code=n,this.usedTimes=0}}function Gf(e,n,t,i,r,a,s){const o=new Js,p=new Ff,u=new Set,m=[],f=r.logarithmicDepthBuffer,g=r.vertexTextures;let _=r.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(v){return u.add(v),v===0?"uv":`uv${v}`}function c(v,S,L,F,X){const q=F.fog,K=X.geometry,V=v.isMeshStandardMaterial?F.environment:null,ne=(v.isMeshStandardMaterial?t:n).get(v.envMap||V),H=ne&&ne.mapping===Si?ne.image.height:null,ge=T[v.type];v.precision!==null&&(_=r.getMaxPrecision(v.precision),_!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",_,"instead."));const be=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,de=be!==void 0?be.length:0;let De=0;K.morphAttributes.position!==void 0&&(De=1),K.morphAttributes.normal!==void 0&&(De=2),K.morphAttributes.color!==void 0&&(De=3);let Ye,Qe,Xe,z;if(ge){const ze=Ot[ge];Ye=ze.vertexShader,Qe=ze.fragmentShader}else Ye=v.vertexShader,Qe=v.fragmentShader,p.update(v),Xe=p.getVertexShaderID(v),z=p.getFragmentShaderID(v);const $=e.getRenderTarget(),he=e.state.buffers.depth.getReversed(),Le=X.isInstancedMesh===!0,Te=X.isBatchedMesh===!0,Ge=!!v.map,gt=!!v.matcap,A=!!ne,je=!!v.aoMap,Ie=!!v.lightMap,ye=!!v.bumpMap,_e=!!v.normalMap,Je=!!v.displacementMap,ve=!!v.emissiveMap,Oe=!!v.metalnessMap,dt=!!v.roughnessMap,rt=v.anisotropy>0,E=v.clearcoat>0,d=v.dispersion>0,U=v.iridescence>0,k=v.sheen>0,Y=v.transmission>0,G=rt&&!!v.anisotropyMap,xe=E&&!!v.clearcoatMap,te=E&&!!v.clearcoatNormalMap,Se=E&&!!v.clearcoatRoughnessMap,Ee=U&&!!v.iridescenceMap,j=U&&!!v.iridescenceThicknessMap,le=k&&!!v.sheenColorMap,Ce=k&&!!v.sheenRoughnessMap,Me=!!v.specularMap,oe=!!v.specularColorMap,Ne=!!v.specularIntensityMap,w=Y&&!!v.transmissionMap,J=Y&&!!v.thicknessMap,ie=!!v.gradientMap,fe=!!v.alphaMap,Z=v.alphaTest>0,W=!!v.alphaHash,me=!!v.extensions;let Ue=jt;v.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ue=e.toneMapping);const Ke={shaderID:ge,shaderType:v.type,shaderName:v.name,vertexShader:Ye,fragmentShader:Qe,defines:v.defines,customVertexShaderID:Xe,customFragmentShaderID:z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:_,batching:Te,batchingColor:Te&&X._colorsTexture!==null,instancing:Le,instancingColor:Le&&X.instanceColor!==null,instancingMorph:Le&&X.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:$===null?e.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:vi,alphaToCoverage:!!v.alphaToCoverage,map:Ge,matcap:gt,envMap:A,envMapMode:A&&ne.mapping,envMapCubeUVHeight:H,aoMap:je,lightMap:Ie,bumpMap:ye,normalMap:_e,displacementMap:g&&Je,emissiveMap:ve,normalMapObjectSpace:_e&&v.normalMapType===Ks,normalMapTangentSpace:_e&&v.normalMapType===Ys,metalnessMap:Oe,roughnessMap:dt,anisotropy:rt,anisotropyMap:G,clearcoat:E,clearcoatMap:xe,clearcoatNormalMap:te,clearcoatRoughnessMap:Se,dispersion:d,iridescence:U,iridescenceMap:Ee,iridescenceThicknessMap:j,sheen:k,sheenColorMap:le,sheenRoughnessMap:Ce,specularMap:Me,specularColorMap:oe,specularIntensityMap:Ne,transmission:Y,transmissionMap:w,thicknessMap:J,gradientMap:ie,opaque:v.transparent===!1&&v.blending===li&&v.alphaToCoverage===!1,alphaMap:fe,alphaTest:Z,alphaHash:W,combine:v.combine,mapUv:Ge&&M(v.map.channel),aoMapUv:je&&M(v.aoMap.channel),lightMapUv:Ie&&M(v.lightMap.channel),bumpMapUv:ye&&M(v.bumpMap.channel),normalMapUv:_e&&M(v.normalMap.channel),displacementMapUv:Je&&M(v.displacementMap.channel),emissiveMapUv:ve&&M(v.emissiveMap.channel),metalnessMapUv:Oe&&M(v.metalnessMap.channel),roughnessMapUv:dt&&M(v.roughnessMap.channel),anisotropyMapUv:G&&M(v.anisotropyMap.channel),clearcoatMapUv:xe&&M(v.clearcoatMap.channel),clearcoatNormalMapUv:te&&M(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&M(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&M(v.iridescenceMap.channel),iridescenceThicknessMapUv:j&&M(v.iridescenceThicknessMap.channel),sheenColorMapUv:le&&M(v.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&M(v.sheenRoughnessMap.channel),specularMapUv:Me&&M(v.specularMap.channel),specularColorMapUv:oe&&M(v.specularColorMap.channel),specularIntensityMapUv:Ne&&M(v.specularIntensityMap.channel),transmissionMapUv:w&&M(v.transmissionMap.channel),thicknessMapUv:J&&M(v.thicknessMap.channel),alphaMapUv:fe&&M(v.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(_e||rt),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!K.attributes.uv&&(Ge||fe),fog:!!q,useFog:v.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:he,skinning:X.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:De,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:e.shadowMap.enabled&&L.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Ge&&v.map.isVideoTexture===!0&&st.getTransfer(v.map.colorSpace)===Ze,decodeVideoTextureEmissive:ve&&v.emissiveMap.isVideoTexture===!0&&st.getTransfer(v.emissiveMap.colorSpace)===Ze,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Dt,flipSided:v.side===Rt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:me&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&v.extensions.multiDraw===!0||Te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ke.vertexUv1s=u.has(1),Ke.vertexUv2s=u.has(2),Ke.vertexUv3s=u.has(3),u.clear(),Ke}function l(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)S.push(L),S.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(b(S,v),R(S,v),S.push(e.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function b(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function R(v,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),v.push(o.mask)}function x(v){const S=T[v.type];let L;if(S){const F=Ot[S];L=qs.clone(F.uniforms)}else L=v.uniforms;return L}function D(v,S){let L;for(let F=0,X=m.length;F<X;F++){const q=m[F];if(q.cacheKey===S){L=q,++L.usedTimes;break}}return L===void 0&&(L=new Nf(e,S,v,a),m.push(L)),L}function C(v){if(--v.usedTimes===0){const S=m.indexOf(v);m[S]=m[m.length-1],m.pop(),v.destroy()}}function I(v){p.remove(v)}function B(){p.dispose()}return{getParameters:c,getProgramCacheKey:l,getUniforms:x,acquireProgram:D,releaseProgram:C,releaseShaderCache:I,programs:m,dispose:B}}function Hf(){let e=new WeakMap;function n(s){return e.has(s)}function t(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function i(s){e.delete(s)}function r(s,o,p){e.get(s)[o]=p}function a(){e=new WeakMap}return{has:n,get:t,remove:i,update:r,dispose:a}}function kf(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.z!==n.z?e.z-n.z:e.id-n.id}function Wr(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function Xr(){const e=[];let n=0;const t=[],i=[],r=[];function a(){n=0,t.length=0,i.length=0,r.length=0}function s(f,g,_,T,M,c){let l=e[n];return l===void 0?(l={id:f.id,object:f,geometry:g,material:_,groupOrder:T,renderOrder:f.renderOrder,z:M,group:c},e[n]=l):(l.id=f.id,l.object=f,l.geometry=g,l.material=_,l.groupOrder=T,l.renderOrder=f.renderOrder,l.z=M,l.group=c),n++,l}function o(f,g,_,T,M,c){const l=s(f,g,_,T,M,c);_.transmission>0?i.push(l):_.transparent===!0?r.push(l):t.push(l)}function p(f,g,_,T,M,c){const l=s(f,g,_,T,M,c);_.transmission>0?i.unshift(l):_.transparent===!0?r.unshift(l):t.unshift(l)}function u(f,g){t.length>1&&t.sort(f||kf),i.length>1&&i.sort(g||Wr),r.length>1&&r.sort(g||Wr)}function m(){for(let f=n,g=e.length;f<g;f++){const _=e[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:o,unshift:p,finish:m,sort:u}}function Vf(){let e=new WeakMap;function n(i,r){const a=e.get(i);let s;return a===void 0?(s=new Xr,e.set(i,[s])):r>=a.length?(s=new Xr,a.push(s)):s=a[r],s}function t(){e=new WeakMap}return{get:n,dispose:t}}function zf(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new ae,color:new Ve};break;case"SpotLight":t={position:new ae,direction:new ae,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ae,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ae,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return e[n.id]=t,t}}}function Wf(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let Xf=0;function qf(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function Yf(e){const n=new zf,t=Wf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new ae);const r=new ae,a=new Bt,s=new Bt;function o(u){let m=0,f=0,g=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let _=0,T=0,M=0,c=0,l=0,b=0,R=0,x=0,D=0,C=0,I=0;u.sort(qf);for(let v=0,S=u.length;v<S;v++){const L=u[v],F=L.color,X=L.intensity,q=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)m+=F.r*X,f+=F.g*X,g+=F.b*X;else if(L.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(L.sh.coefficients[V],X);I++}else if(L.isDirectionalLight){const V=n.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ne=L.shadow,H=t.get(L);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,i.directionalShadow[_]=H,i.directionalShadowMap[_]=K,i.directionalShadowMatrix[_]=L.shadow.matrix,b++}i.directional[_]=V,_++}else if(L.isSpotLight){const V=n.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(F).multiplyScalar(X),V.distance=q,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,i.spot[M]=V;const ne=L.shadow;if(L.map&&(i.spotLightMap[D]=L.map,D++,ne.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[M]=ne.matrix,L.castShadow){const H=t.get(L);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,i.spotShadow[M]=H,i.spotShadowMap[M]=K,x++}M++}else if(L.isRectAreaLight){const V=n.get(L);V.color.copy(F).multiplyScalar(X),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),i.rectArea[c]=V,c++}else if(L.isPointLight){const V=n.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){const ne=L.shadow,H=t.get(L);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,H.shadowCameraNear=ne.camera.near,H.shadowCameraFar=ne.camera.far,i.pointShadow[T]=H,i.pointShadowMap[T]=K,i.pointShadowMatrix[T]=L.shadow.matrix,R++}i.point[T]=V,T++}else if(L.isHemisphereLight){const V=n.get(L);V.skyColor.copy(L.color).multiplyScalar(X),V.groundColor.copy(L.groundColor).multiplyScalar(X),i.hemi[l]=V,l++}}c>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=f,i.ambient[2]=g;const B=i.hash;(B.directionalLength!==_||B.pointLength!==T||B.spotLength!==M||B.rectAreaLength!==c||B.hemiLength!==l||B.numDirectionalShadows!==b||B.numPointShadows!==R||B.numSpotShadows!==x||B.numSpotMaps!==D||B.numLightProbes!==I)&&(i.directional.length=_,i.spot.length=M,i.rectArea.length=c,i.point.length=T,i.hemi.length=l,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=x+D-C,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=I,B.directionalLength=_,B.pointLength=T,B.spotLength=M,B.rectAreaLength=c,B.hemiLength=l,B.numDirectionalShadows=b,B.numPointShadows=R,B.numSpotShadows=x,B.numSpotMaps=D,B.numLightProbes=I,i.version=Xf++)}function p(u,m){let f=0,g=0,_=0,T=0,M=0;const c=m.matrixWorldInverse;for(let l=0,b=u.length;l<b;l++){const R=u[l];if(R.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(c),f++}else if(R.isSpotLight){const x=i.spot[_];x.position.setFromMatrixPosition(R.matrixWorld),x.position.applyMatrix4(c),x.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(c),_++}else if(R.isRectAreaLight){const x=i.rectArea[T];x.position.setFromMatrixPosition(R.matrixWorld),x.position.applyMatrix4(c),s.identity(),a.copy(R.matrixWorld),a.premultiply(c),s.extractRotation(a),x.halfWidth.set(R.width*.5,0,0),x.halfHeight.set(0,R.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),T++}else if(R.isPointLight){const x=i.point[g];x.position.setFromMatrixPosition(R.matrixWorld),x.position.applyMatrix4(c),g++}else if(R.isHemisphereLight){const x=i.hemi[M];x.direction.setFromMatrixPosition(R.matrixWorld),x.direction.transformDirection(c),M++}}}return{setup:o,setupView:p,state:i}}function qr(e){const n=new Yf(e),t=[],i=[];function r(m){u.camera=m,t.length=0,i.length=0}function a(m){t.push(m)}function s(m){i.push(m)}function o(){n.setup(t)}function p(m){n.setupView(t,m)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:p,pushLight:a,pushShadow:s}}function Kf(e){let n=new WeakMap;function t(r,a=0){const s=n.get(r);let o;return s===void 0?(o=new qr(e),n.set(r,[o])):a>=s.length?(o=new qr(e),s.push(o)):o=s[a],o}function i(){n=new WeakMap}return{get:t,dispose:i}}const $f=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zf=`uniform sampler2D shadow_pass;
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
}`;function Qf(e,n,t){let i=new uo;const r=new at,a=new at,s=new xt,o=new Ls({depthPacking:Ds}),p=new Us,u={},m=t.maxTextureSize,f={[Vn]:Rt,[Rt]:Vn,[Dt]:Dt},g=new Yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:$f,fragmentShader:Zf}),_=g.clone();_.defines.HORIZONTAL_PASS=1;const T=new gn;T.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ot(T,g),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=po;let l=this.type;this.render=function(C,I,B){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||C.length===0)return;const v=e.getRenderTarget(),S=e.getActiveCubeFace(),L=e.getActiveMipmapLevel(),F=e.state;F.setBlending(fn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const X=l!==kt&&this.type===kt,q=l===kt&&this.type!==kt;for(let K=0,V=C.length;K<V;K++){const ne=C[K],H=ne.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ge=H.getFrameExtents();if(r.multiply(ge),a.copy(H.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(a.x=Math.floor(m/ge.x),r.x=a.x*ge.x,H.mapSize.x=a.x),r.y>m&&(a.y=Math.floor(m/ge.y),r.y=a.y*ge.y,H.mapSize.y=a.y)),H.map===null||X===!0||q===!0){const de=this.type!==kt?{minFilter:Fn,magFilter:Fn}:{};H.map!==null&&H.map.dispose(),H.map=new An(r.x,r.y,de),H.map.texture.name=ne.name+".shadowMap",H.camera.updateProjectionMatrix()}e.setRenderTarget(H.map),e.clear();const be=H.getViewportCount();for(let de=0;de<be;de++){const De=H.getViewport(de);s.set(a.x*De.x,a.y*De.y,a.x*De.z,a.y*De.w),F.viewport(s),H.updateMatrices(ne,de),i=H.getFrustum(),x(I,B,H.camera,ne,this.type)}H.isPointLightShadow!==!0&&this.type===kt&&b(H,B),H.needsUpdate=!1}l=this.type,c.needsUpdate=!1,e.setRenderTarget(v,S,L)};function b(C,I){const B=n.update(M);g.defines.VSM_SAMPLES!==C.blurSamples&&(g.defines.VSM_SAMPLES=C.blurSamples,_.defines.VSM_SAMPLES=C.blurSamples,g.needsUpdate=!0,_.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new An(r.x,r.y)),g.uniforms.shadow_pass.value=C.map.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,e.setRenderTarget(C.mapPass),e.clear(),e.renderBufferDirect(I,null,B,g,M,null),_.uniforms.shadow_pass.value=C.mapPass.texture,_.uniforms.resolution.value=C.mapSize,_.uniforms.radius.value=C.radius,e.setRenderTarget(C.map),e.clear(),e.renderBufferDirect(I,null,B,_,M,null)}function R(C,I,B,v){let S=null;const L=B.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)S=L;else if(S=B.isPointLight===!0?p:o,e.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const F=S.uuid,X=I.uuid;let q=u[F];q===void 0&&(q={},u[F]=q);let K=q[X];K===void 0&&(K=S.clone(),q[X]=K,I.addEventListener("dispose",D)),S=K}if(S.visible=I.visible,S.wireframe=I.wireframe,v===kt?S.side=I.shadowSide!==null?I.shadowSide:I.side:S.side=I.shadowSide!==null?I.shadowSide:f[I.side],S.alphaMap=I.alphaMap,S.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,S.map=I.map,S.clipShadows=I.clipShadows,S.clippingPlanes=I.clippingPlanes,S.clipIntersection=I.clipIntersection,S.displacementMap=I.displacementMap,S.displacementScale=I.displacementScale,S.displacementBias=I.displacementBias,S.wireframeLinewidth=I.wireframeLinewidth,S.linewidth=I.linewidth,B.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=e.properties.get(S);F.light=B}return S}function x(C,I,B,v,S){if(C.visible===!1)return;if(C.layers.test(I.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===kt)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,C.matrixWorld);const X=n.update(C),q=C.material;if(Array.isArray(q)){const K=X.groups;for(let V=0,ne=K.length;V<ne;V++){const H=K[V],ge=q[H.materialIndex];if(ge&&ge.visible){const be=R(C,ge,v,S);C.onBeforeShadow(e,C,I,B,X,be,H),e.renderBufferDirect(B,null,X,be,C,H),C.onAfterShadow(e,C,I,B,X,be,H)}}}else if(q.visible){const K=R(C,q,v,S);C.onBeforeShadow(e,C,I,B,X,K,null),e.renderBufferDirect(B,null,X,K,C,null),C.onAfterShadow(e,C,I,B,X,K,null)}}const F=C.children;for(let X=0,q=F.length;X<q;X++)x(F[X],I,B,v,S)}function D(C){C.target.removeEventListener("dispose",D);for(const B in u){const v=u[B],S=C.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}const jf={[ia]:na,[ta]:ji,[ea]:Qi,[hi]:Ji,[na]:ia,[ji]:ta,[Qi]:ea,[Ji]:hi};function Jf(e,n){function t(){let w=!1;const J=new xt;let ie=null;const fe=new xt(0,0,0,0);return{setMask:function(Z){ie!==Z&&!w&&(e.colorMask(Z,Z,Z,Z),ie=Z)},setLocked:function(Z){w=Z},setClear:function(Z,W,me,Ue,Ke){Ke===!0&&(Z*=Ue,W*=Ue,me*=Ue),J.set(Z,W,me,Ue),fe.equals(J)===!1&&(e.clearColor(Z,W,me,Ue),fe.copy(J))},reset:function(){w=!1,ie=null,fe.set(-1,0,0,0)}}}function i(){let w=!1,J=!1,ie=null,fe=null,Z=null;return{setReversed:function(W){if(J!==W){const me=n.get("EXT_clip_control");W?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),J=W;const Ue=Z;Z=null,this.setClear(Ue)}},getReversed:function(){return J},setTest:function(W){W?$(e.DEPTH_TEST):he(e.DEPTH_TEST)},setMask:function(W){ie!==W&&!w&&(e.depthMask(W),ie=W)},setFunc:function(W){if(J&&(W=jf[W]),fe!==W){switch(W){case ia:e.depthFunc(e.NEVER);break;case na:e.depthFunc(e.ALWAYS);break;case ta:e.depthFunc(e.LESS);break;case hi:e.depthFunc(e.LEQUAL);break;case ea:e.depthFunc(e.EQUAL);break;case Ji:e.depthFunc(e.GEQUAL);break;case ji:e.depthFunc(e.GREATER);break;case Qi:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}fe=W}},setLocked:function(W){w=W},setClear:function(W){Z!==W&&(J&&(W=1-W),e.clearDepth(W),Z=W)},reset:function(){w=!1,ie=null,fe=null,Z=null,J=!1}}}function r(){let w=!1,J=null,ie=null,fe=null,Z=null,W=null,me=null,Ue=null,Ke=null;return{setTest:function(ze){w||(ze?$(e.STENCIL_TEST):he(e.STENCIL_TEST))},setMask:function(ze){J!==ze&&!w&&(e.stencilMask(ze),J=ze)},setFunc:function(ze,Ht,Nt){(ie!==ze||fe!==Ht||Z!==Nt)&&(e.stencilFunc(ze,Ht,Nt),ie=ze,fe=Ht,Z=Nt)},setOp:function(ze,Ht,Nt){(W!==ze||me!==Ht||Ue!==Nt)&&(e.stencilOp(ze,Ht,Nt),W=ze,me=Ht,Ue=Nt)},setLocked:function(ze){w=ze},setClear:function(ze){Ke!==ze&&(e.clearStencil(ze),Ke=ze)},reset:function(){w=!1,J=null,ie=null,fe=null,Z=null,W=null,me=null,Ue=null,Ke=null}}}const a=new t,s=new i,o=new r,p=new WeakMap,u=new WeakMap;let m={},f={},g=new WeakMap,_=[],T=null,M=!1,c=null,l=null,b=null,R=null,x=null,D=null,C=null,I=new Ve(0,0,0),B=0,v=!1,S=null,L=null,F=null,X=null,q=null;const K=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,ne=0;const H=e.getParameter(e.VERSION);H.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(H)[1]),V=ne>=1):H.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),V=ne>=2);let ge=null,be={};const de=e.getParameter(e.SCISSOR_BOX),De=e.getParameter(e.VIEWPORT),Ye=new xt().fromArray(de),Qe=new xt().fromArray(De);function Xe(w,J,ie,fe){const Z=new Uint8Array(4),W=e.createTexture();e.bindTexture(w,W),e.texParameteri(w,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(w,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let me=0;me<ie;me++)w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY?e.texImage3D(J,0,e.RGBA,1,1,fe,0,e.RGBA,e.UNSIGNED_BYTE,Z):e.texImage2D(J+me,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Z);return W}const z={};z[e.TEXTURE_2D]=Xe(e.TEXTURE_2D,e.TEXTURE_2D,1),z[e.TEXTURE_CUBE_MAP]=Xe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[e.TEXTURE_2D_ARRAY]=Xe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),z[e.TEXTURE_3D]=Xe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),$(e.DEPTH_TEST),s.setFunc(hi),ye(!1),_e(ur),$(e.CULL_FACE),je(fn);function $(w){m[w]!==!0&&(e.enable(w),m[w]=!0)}function he(w){m[w]!==!1&&(e.disable(w),m[w]=!1)}function Le(w,J){return f[w]!==J?(e.bindFramebuffer(w,J),f[w]=J,w===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=J),w===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=J),!0):!1}function Te(w,J){let ie=_,fe=!1;if(w){ie=g.get(J),ie===void 0&&(ie=[],g.set(J,ie));const Z=w.textures;if(ie.length!==Z.length||ie[0]!==e.COLOR_ATTACHMENT0){for(let W=0,me=Z.length;W<me;W++)ie[W]=e.COLOR_ATTACHMENT0+W;ie.length=Z.length,fe=!0}}else ie[0]!==e.BACK&&(ie[0]=e.BACK,fe=!0);fe&&e.drawBuffers(ie)}function Ge(w){return T!==w?(e.useProgram(w),T=w,!0):!1}const gt={[yn]:e.FUNC_ADD,[is]:e.FUNC_SUBTRACT,[ns]:e.FUNC_REVERSE_SUBTRACT};gt[pl]=e.MIN,gt[ml]=e.MAX;const A={[vs]:e.ZERO,[_s]:e.ONE,[gs]:e.SRC_COLOR,[ms]:e.SRC_ALPHA,[ps]:e.SRC_ALPHA_SATURATE,[hs]:e.DST_COLOR,[fs]:e.DST_ALPHA,[us]:e.ONE_MINUS_SRC_COLOR,[ds]:e.ONE_MINUS_SRC_ALPHA,[cs]:e.ONE_MINUS_DST_COLOR,[ls]:e.ONE_MINUS_DST_ALPHA,[ss]:e.CONSTANT_COLOR,[os]:e.ONE_MINUS_CONSTANT_COLOR,[rs]:e.CONSTANT_ALPHA,[as]:e.ONE_MINUS_CONSTANT_ALPHA};function je(w,J,ie,fe,Z,W,me,Ue,Ke,ze){if(w===fn){M===!0&&(he(e.BLEND),M=!1);return}if(M===!1&&($(e.BLEND),M=!0),w!==Ws){if(w!==c||ze!==v){if((l!==yn||x!==yn)&&(e.blendEquation(e.FUNC_ADD),l=yn,x=yn),ze)switch(w){case li:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case pr:e.blendFunc(e.ONE,e.ONE);break;case hr:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case fr:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case li:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case pr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case hr:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fr:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}b=null,R=null,D=null,C=null,I.set(0,0,0),B=0,c=w,v=ze}return}Z=Z||J,W=W||ie,me=me||fe,(J!==l||Z!==x)&&(e.blendEquationSeparate(gt[J],gt[Z]),l=J,x=Z),(ie!==b||fe!==R||W!==D||me!==C)&&(e.blendFuncSeparate(A[ie],A[fe],A[W],A[me]),b=ie,R=fe,D=W,C=me),(Ue.equals(I)===!1||Ke!==B)&&(e.blendColor(Ue.r,Ue.g,Ue.b,Ke),I.copy(Ue),B=Ke),c=w,v=!1}function Ie(w,J){w.side===Dt?he(e.CULL_FACE):$(e.CULL_FACE);let ie=w.side===Rt;J&&(ie=!ie),ye(ie),w.blending===li&&w.transparent===!1?je(fn):je(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),s.setFunc(w.depthFunc),s.setTest(w.depthTest),s.setMask(w.depthWrite),a.setMask(w.colorWrite);const fe=w.stencilWrite;o.setTest(fe),fe&&(o.setMask(w.stencilWriteMask),o.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),o.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),ve(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?$(e.SAMPLE_ALPHA_TO_COVERAGE):he(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(w){S!==w&&(w?e.frontFace(e.CW):e.frontFace(e.CCW),S=w)}function _e(w){w!==Vs?($(e.CULL_FACE),w!==L&&(w===ur?e.cullFace(e.BACK):w===zs?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):he(e.CULL_FACE),L=w}function Je(w){w!==F&&(V&&e.lineWidth(w),F=w)}function ve(w,J,ie){w?($(e.POLYGON_OFFSET_FILL),(X!==J||q!==ie)&&(e.polygonOffset(J,ie),X=J,q=ie)):he(e.POLYGON_OFFSET_FILL)}function Oe(w){w?$(e.SCISSOR_TEST):he(e.SCISSOR_TEST)}function dt(w){w===void 0&&(w=e.TEXTURE0+K-1),ge!==w&&(e.activeTexture(w),ge=w)}function rt(w,J,ie){ie===void 0&&(ge===null?ie=e.TEXTURE0+K-1:ie=ge);let fe=be[ie];fe===void 0&&(fe={type:void 0,texture:void 0},be[ie]=fe),(fe.type!==w||fe.texture!==J)&&(ge!==ie&&(e.activeTexture(ie),ge=ie),e.bindTexture(w,J||z[w]),fe.type=w,fe.texture=J)}function E(){const w=be[ge];w!==void 0&&w.type!==void 0&&(e.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function d(){try{e.compressedTexImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function U(){try{e.compressedTexImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function k(){try{e.texSubImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Y(){try{e.texSubImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function G(){try{e.compressedTexSubImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function xe(){try{e.compressedTexSubImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function te(){try{e.texStorage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Se(){try{e.texStorage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ee(){try{e.texImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function j(){try{e.texImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function le(w){Ye.equals(w)===!1&&(e.scissor(w.x,w.y,w.z,w.w),Ye.copy(w))}function Ce(w){Qe.equals(w)===!1&&(e.viewport(w.x,w.y,w.z,w.w),Qe.copy(w))}function Me(w,J){let ie=u.get(J);ie===void 0&&(ie=new WeakMap,u.set(J,ie));let fe=ie.get(w);fe===void 0&&(fe=e.getUniformBlockIndex(J,w.name),ie.set(w,fe))}function oe(w,J){const fe=u.get(J).get(w);p.get(J)!==fe&&(e.uniformBlockBinding(J,fe,w.__bindingPointIndex),p.set(J,fe))}function Ne(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),m={},ge=null,be={},f={},g=new WeakMap,_=[],T=null,M=!1,c=null,l=null,b=null,R=null,x=null,D=null,C=null,I=new Ve(0,0,0),B=0,v=!1,S=null,L=null,F=null,X=null,q=null,Ye.set(0,0,e.canvas.width,e.canvas.height),Qe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:$,disable:he,bindFramebuffer:Le,drawBuffers:Te,useProgram:Ge,setBlending:je,setMaterial:Ie,setFlipSided:ye,setCullFace:_e,setLineWidth:Je,setPolygonOffset:ve,setScissorTest:Oe,activeTexture:dt,bindTexture:rt,unbindTexture:E,compressedTexImage2D:d,compressedTexImage3D:U,texImage2D:Ee,texImage3D:j,updateUBOMapping:Me,uniformBlockBinding:oe,texStorage2D:te,texStorage3D:Se,texSubImage2D:k,texSubImage3D:Y,compressedTexSubImage2D:G,compressedTexSubImage3D:xe,scissor:le,viewport:Ce,reset:Ne}}function eh(e,n,t,i,r,a,s){const o=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new at,m=new WeakMap;let f;const g=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(E,d){return _?new OffscreenCanvas(E,d):dl("canvas")}function M(E,d,U){let k=1;const Y=rt(E);if((Y.width>U||Y.height>U)&&(k=U/Math.max(Y.width,Y.height)),k<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const G=Math.floor(k*Y.width),xe=Math.floor(k*Y.height);f===void 0&&(f=T(G,xe));const te=d?T(G,xe):f;return te.width=G,te.height=xe,te.getContext("2d").drawImage(E,0,0,G,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+G+"x"+xe+")."),te}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),E;return E}function c(E){return E.generateMipmaps}function l(E){e.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?e.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function R(E,d,U,k,Y=!1){if(E!==null){if(e[E]!==void 0)return e[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let G=d;if(d===e.RED&&(U===e.FLOAT&&(G=e.R32F),U===e.HALF_FLOAT&&(G=e.R16F),U===e.UNSIGNED_BYTE&&(G=e.R8)),d===e.RED_INTEGER&&(U===e.UNSIGNED_BYTE&&(G=e.R8UI),U===e.UNSIGNED_SHORT&&(G=e.R16UI),U===e.UNSIGNED_INT&&(G=e.R32UI),U===e.BYTE&&(G=e.R8I),U===e.SHORT&&(G=e.R16I),U===e.INT&&(G=e.R32I)),d===e.RG&&(U===e.FLOAT&&(G=e.RG32F),U===e.HALF_FLOAT&&(G=e.RG16F),U===e.UNSIGNED_BYTE&&(G=e.RG8)),d===e.RG_INTEGER&&(U===e.UNSIGNED_BYTE&&(G=e.RG8UI),U===e.UNSIGNED_SHORT&&(G=e.RG16UI),U===e.UNSIGNED_INT&&(G=e.RG32UI),U===e.BYTE&&(G=e.RG8I),U===e.SHORT&&(G=e.RG16I),U===e.INT&&(G=e.RG32I)),d===e.RGB_INTEGER&&(U===e.UNSIGNED_BYTE&&(G=e.RGB8UI),U===e.UNSIGNED_SHORT&&(G=e.RGB16UI),U===e.UNSIGNED_INT&&(G=e.RGB32UI),U===e.BYTE&&(G=e.RGB8I),U===e.SHORT&&(G=e.RGB16I),U===e.INT&&(G=e.RGB32I)),d===e.RGBA_INTEGER&&(U===e.UNSIGNED_BYTE&&(G=e.RGBA8UI),U===e.UNSIGNED_SHORT&&(G=e.RGBA16UI),U===e.UNSIGNED_INT&&(G=e.RGBA32UI),U===e.BYTE&&(G=e.RGBA8I),U===e.SHORT&&(G=e.RGBA16I),U===e.INT&&(G=e.RGBA32I)),d===e.RGB&&(U===e.UNSIGNED_INT_5_9_9_9_REV&&(G=e.RGB9_E5),U===e.UNSIGNED_INT_10F_11F_11F_REV&&(G=e.R11F_G11F_B10F)),d===e.RGBA){const xe=Y?bo:st.getTransfer(k);U===e.FLOAT&&(G=e.RGBA32F),U===e.HALF_FLOAT&&(G=e.RGBA16F),U===e.UNSIGNED_BYTE&&(G=xe===Ze?e.SRGB8_ALPHA8:e.RGBA8),U===e.UNSIGNED_SHORT_4_4_4_4&&(G=e.RGBA4),U===e.UNSIGNED_SHORT_5_5_5_1&&(G=e.RGB5_A1)}return(G===e.R16F||G===e.R32F||G===e.RG16F||G===e.RG32F||G===e.RGBA16F||G===e.RGBA32F)&&n.get("EXT_color_buffer_float"),G}function x(E,d){let U;return E?d===null||d===Wn||d===zn?U=e.DEPTH24_STENCIL8:d===cn?U=e.DEPTH32F_STENCIL8:d===pi&&(U=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):d===null||d===Wn||d===zn?U=e.DEPTH_COMPONENT24:d===cn?U=e.DEPTH_COMPONENT32F:d===pi&&(U=e.DEPTH_COMPONENT16),U}function D(E,d){return c(E)===!0||E.isFramebufferTexture&&E.minFilter!==Fn&&E.minFilter!==En?Math.log2(Math.max(d.width,d.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?d.mipmaps.length:1}function C(E){const d=E.target;d.removeEventListener("dispose",C),B(d),d.isVideoTexture&&m.delete(d)}function I(E){const d=E.target;d.removeEventListener("dispose",I),S(d)}function B(E){const d=i.get(E);if(d.__webglInit===void 0)return;const U=E.source,k=g.get(U);if(k){const Y=k[d.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&v(E),Object.keys(k).length===0&&g.delete(U)}i.remove(E)}function v(E){const d=i.get(E);e.deleteTexture(d.__webglTexture);const U=E.source,k=g.get(U);delete k[d.__cacheKey],s.memory.textures--}function S(E){const d=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(d.__webglFramebuffer[k]))for(let Y=0;Y<d.__webglFramebuffer[k].length;Y++)e.deleteFramebuffer(d.__webglFramebuffer[k][Y]);else e.deleteFramebuffer(d.__webglFramebuffer[k]);d.__webglDepthbuffer&&e.deleteRenderbuffer(d.__webglDepthbuffer[k])}else{if(Array.isArray(d.__webglFramebuffer))for(let k=0;k<d.__webglFramebuffer.length;k++)e.deleteFramebuffer(d.__webglFramebuffer[k]);else e.deleteFramebuffer(d.__webglFramebuffer);if(d.__webglDepthbuffer&&e.deleteRenderbuffer(d.__webglDepthbuffer),d.__webglMultisampledFramebuffer&&e.deleteFramebuffer(d.__webglMultisampledFramebuffer),d.__webglColorRenderbuffer)for(let k=0;k<d.__webglColorRenderbuffer.length;k++)d.__webglColorRenderbuffer[k]&&e.deleteRenderbuffer(d.__webglColorRenderbuffer[k]);d.__webglDepthRenderbuffer&&e.deleteRenderbuffer(d.__webglDepthRenderbuffer)}const U=E.textures;for(let k=0,Y=U.length;k<Y;k++){const G=i.get(U[k]);G.__webglTexture&&(e.deleteTexture(G.__webglTexture),s.memory.textures--),i.remove(U[k])}i.remove(E)}let L=0;function F(){L=0}function X(){const E=L;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),L+=1,E}function q(E){const d=[];return d.push(E.wrapS),d.push(E.wrapT),d.push(E.wrapR||0),d.push(E.magFilter),d.push(E.minFilter),d.push(E.anisotropy),d.push(E.internalFormat),d.push(E.format),d.push(E.type),d.push(E.generateMipmaps),d.push(E.premultiplyAlpha),d.push(E.flipY),d.push(E.unpackAlignment),d.push(E.colorSpace),d.join()}function K(E,d){const U=i.get(E);if(E.isVideoTexture&&Oe(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&U.__version!==E.version){const k=E.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{z(U,E,d);return}}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,U.__webglTexture,e.TEXTURE0+d)}function V(E,d){const U=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){z(U,E,d);return}t.bindTexture(e.TEXTURE_2D_ARRAY,U.__webglTexture,e.TEXTURE0+d)}function ne(E,d){const U=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){z(U,E,d);return}t.bindTexture(e.TEXTURE_3D,U.__webglTexture,e.TEXTURE0+d)}function H(E,d){const U=i.get(E);if(E.version>0&&U.__version!==E.version){$(U,E,d);return}t.bindTexture(e.TEXTURE_CUBE_MAP,U.__webglTexture,e.TEXTURE0+d)}const ge={[Ms]:e.REPEAT,[Es]:e.CLAMP_TO_EDGE,[Ss]:e.MIRRORED_REPEAT},be={[Fn]:e.NEAREST,[xs]:e.NEAREST_MIPMAP_NEAREST,[ei]:e.NEAREST_MIPMAP_LINEAR,[En]:e.LINEAR,[wi]:e.LINEAR_MIPMAP_NEAREST,[In]:e.LINEAR_MIPMAP_LINEAR},de={[ys]:e.NEVER,[Cs]:e.ALWAYS,[ws]:e.LESS,[ho]:e.LEQUAL,[Rs]:e.EQUAL,[bs]:e.GEQUAL,[As]:e.GREATER,[Ts]:e.NOTEQUAL};function De(E,d){if(d.type===cn&&n.has("OES_texture_float_linear")===!1&&(d.magFilter===En||d.magFilter===wi||d.magFilter===ei||d.magFilter===In||d.minFilter===En||d.minFilter===wi||d.minFilter===ei||d.minFilter===In)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(E,e.TEXTURE_WRAP_S,ge[d.wrapS]),e.texParameteri(E,e.TEXTURE_WRAP_T,ge[d.wrapT]),(E===e.TEXTURE_3D||E===e.TEXTURE_2D_ARRAY)&&e.texParameteri(E,e.TEXTURE_WRAP_R,ge[d.wrapR]),e.texParameteri(E,e.TEXTURE_MAG_FILTER,be[d.magFilter]),e.texParameteri(E,e.TEXTURE_MIN_FILTER,be[d.minFilter]),d.compareFunction&&(e.texParameteri(E,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(E,e.TEXTURE_COMPARE_FUNC,de[d.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(d.magFilter===Fn||d.minFilter!==ei&&d.minFilter!==In||d.type===cn&&n.has("OES_texture_float_linear")===!1)return;if(d.anisotropy>1||i.get(d).__currentAnisotropy){const U=n.get("EXT_texture_filter_anisotropic");e.texParameterf(E,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(d.anisotropy,r.getMaxAnisotropy())),i.get(d).__currentAnisotropy=d.anisotropy}}}function Ye(E,d){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,d.addEventListener("dispose",C));const k=d.source;let Y=g.get(k);Y===void 0&&(Y={},g.set(k,Y));const G=q(d);if(G!==E.__cacheKey){Y[G]===void 0&&(Y[G]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,U=!0),Y[G].usedTimes++;const xe=Y[E.__cacheKey];xe!==void 0&&(Y[E.__cacheKey].usedTimes--,xe.usedTimes===0&&v(d)),E.__cacheKey=G,E.__webglTexture=Y[G].texture}return U}function Qe(E,d,U){return Math.floor(Math.floor(E/U)/d)}function Xe(E,d,U,k){const G=E.updateRanges;if(G.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,d.width,d.height,U,k,d.data);else{G.sort((j,le)=>j.start-le.start);let xe=0;for(let j=1;j<G.length;j++){const le=G[xe],Ce=G[j],Me=le.start+le.count,oe=Qe(Ce.start,d.width,4),Ne=Qe(le.start,d.width,4);Ce.start<=Me+1&&oe===Ne&&Qe(Ce.start+Ce.count-1,d.width,4)===oe?le.count=Math.max(le.count,Ce.start+Ce.count-le.start):(++xe,G[xe]=Ce)}G.length=xe+1;const te=e.getParameter(e.UNPACK_ROW_LENGTH),Se=e.getParameter(e.UNPACK_SKIP_PIXELS),Ee=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,d.width);for(let j=0,le=G.length;j<le;j++){const Ce=G[j],Me=Math.floor(Ce.start/4),oe=Math.ceil(Ce.count/4),Ne=Me%d.width,w=Math.floor(Me/d.width),J=oe,ie=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ne),e.pixelStorei(e.UNPACK_SKIP_ROWS,w),t.texSubImage2D(e.TEXTURE_2D,0,Ne,w,J,ie,U,k,d.data)}E.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,te),e.pixelStorei(e.UNPACK_SKIP_PIXELS,Se),e.pixelStorei(e.UNPACK_SKIP_ROWS,Ee)}}function z(E,d,U){let k=e.TEXTURE_2D;(d.isDataArrayTexture||d.isCompressedArrayTexture)&&(k=e.TEXTURE_2D_ARRAY),d.isData3DTexture&&(k=e.TEXTURE_3D);const Y=Ye(E,d),G=d.source;t.bindTexture(k,E.__webglTexture,e.TEXTURE0+U);const xe=i.get(G);if(G.version!==xe.__version||Y===!0){t.activeTexture(e.TEXTURE0+U);const te=st.getPrimaries(st.workingColorSpace),Se=d.colorSpace===Sn?null:st.getPrimaries(d.colorSpace),Ee=d.colorSpace===Sn||te===Se?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,d.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,d.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,d.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let j=M(d.image,!1,r.maxTextureSize);j=dt(d,j);const le=a.convert(d.format,d.colorSpace),Ce=a.convert(d.type);let Me=R(d.internalFormat,le,Ce,d.colorSpace,d.isVideoTexture);De(k,d);let oe;const Ne=d.mipmaps,w=d.isVideoTexture!==!0,J=xe.__version===void 0||Y===!0,ie=G.dataReady,fe=D(d,j);if(d.isDepthTexture)Me=x(d.format===fi,d.type),J&&(w?t.texStorage2D(e.TEXTURE_2D,1,Me,j.width,j.height):t.texImage2D(e.TEXTURE_2D,0,Me,j.width,j.height,0,le,Ce,null));else if(d.isDataTexture)if(Ne.length>0){w&&J&&t.texStorage2D(e.TEXTURE_2D,fe,Me,Ne[0].width,Ne[0].height);for(let Z=0,W=Ne.length;Z<W;Z++)oe=Ne[Z],w?ie&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,oe.width,oe.height,le,Ce,oe.data):t.texImage2D(e.TEXTURE_2D,Z,Me,oe.width,oe.height,0,le,Ce,oe.data);d.generateMipmaps=!1}else w?(J&&t.texStorage2D(e.TEXTURE_2D,fe,Me,j.width,j.height),ie&&Xe(d,j,le,Ce)):t.texImage2D(e.TEXTURE_2D,0,Me,j.width,j.height,0,le,Ce,j.data);else if(d.isCompressedTexture)if(d.isCompressedArrayTexture){w&&J&&t.texStorage3D(e.TEXTURE_2D_ARRAY,fe,Me,Ne[0].width,Ne[0].height,j.depth);for(let Z=0,W=Ne.length;Z<W;Z++)if(oe=Ne[Z],d.format!==zt)if(le!==null)if(w){if(ie)if(d.layerUpdates.size>0){const me=gr(oe.width,oe.height,d.format,d.type);for(const Ue of d.layerUpdates){const Ke=oe.data.subarray(Ue*me/oe.data.BYTES_PER_ELEMENT,(Ue+1)*me/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,Ue,oe.width,oe.height,1,le,Ke)}d.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,oe.width,oe.height,j.depth,le,oe.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Z,Me,oe.width,oe.height,j.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else w?ie&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,oe.width,oe.height,j.depth,le,Ce,oe.data):t.texImage3D(e.TEXTURE_2D_ARRAY,Z,Me,oe.width,oe.height,j.depth,0,le,Ce,oe.data)}else{w&&J&&t.texStorage2D(e.TEXTURE_2D,fe,Me,Ne[0].width,Ne[0].height);for(let Z=0,W=Ne.length;Z<W;Z++)oe=Ne[Z],d.format!==zt?le!==null?w?ie&&t.compressedTexSubImage2D(e.TEXTURE_2D,Z,0,0,oe.width,oe.height,le,oe.data):t.compressedTexImage2D(e.TEXTURE_2D,Z,Me,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):w?ie&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,oe.width,oe.height,le,Ce,oe.data):t.texImage2D(e.TEXTURE_2D,Z,Me,oe.width,oe.height,0,le,Ce,oe.data)}else if(d.isDataArrayTexture)if(w){if(J&&t.texStorage3D(e.TEXTURE_2D_ARRAY,fe,Me,j.width,j.height,j.depth),ie)if(d.layerUpdates.size>0){const Z=gr(j.width,j.height,d.format,d.type);for(const W of d.layerUpdates){const me=j.data.subarray(W*Z/j.data.BYTES_PER_ELEMENT,(W+1)*Z/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,W,j.width,j.height,1,le,Ce,me)}d.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,le,Ce,j.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,Me,j.width,j.height,j.depth,0,le,Ce,j.data);else if(d.isData3DTexture)w?(J&&t.texStorage3D(e.TEXTURE_3D,fe,Me,j.width,j.height,j.depth),ie&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,le,Ce,j.data)):t.texImage3D(e.TEXTURE_3D,0,Me,j.width,j.height,j.depth,0,le,Ce,j.data);else if(d.isFramebufferTexture){if(J)if(w)t.texStorage2D(e.TEXTURE_2D,fe,Me,j.width,j.height);else{let Z=j.width,W=j.height;for(let me=0;me<fe;me++)t.texImage2D(e.TEXTURE_2D,me,Me,Z,W,0,le,Ce,null),Z>>=1,W>>=1}}else if(Ne.length>0){if(w&&J){const Z=rt(Ne[0]);t.texStorage2D(e.TEXTURE_2D,fe,Me,Z.width,Z.height)}for(let Z=0,W=Ne.length;Z<W;Z++)oe=Ne[Z],w?ie&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,le,Ce,oe):t.texImage2D(e.TEXTURE_2D,Z,Me,le,Ce,oe);d.generateMipmaps=!1}else if(w){if(J){const Z=rt(j);t.texStorage2D(e.TEXTURE_2D,fe,Me,Z.width,Z.height)}ie&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,le,Ce,j)}else t.texImage2D(e.TEXTURE_2D,0,Me,le,Ce,j);c(d)&&l(k),xe.__version=G.version,d.onUpdate&&d.onUpdate(d)}E.__version=d.version}function $(E,d,U){if(d.image.length!==6)return;const k=Ye(E,d),Y=d.source;t.bindTexture(e.TEXTURE_CUBE_MAP,E.__webglTexture,e.TEXTURE0+U);const G=i.get(Y);if(Y.version!==G.__version||k===!0){t.activeTexture(e.TEXTURE0+U);const xe=st.getPrimaries(st.workingColorSpace),te=d.colorSpace===Sn?null:st.getPrimaries(d.colorSpace),Se=d.colorSpace===Sn||xe===te?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,d.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,d.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,d.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Ee=d.isCompressedTexture||d.image[0].isCompressedTexture,j=d.image[0]&&d.image[0].isDataTexture,le=[];for(let W=0;W<6;W++)!Ee&&!j?le[W]=M(d.image[W],!0,r.maxCubemapSize):le[W]=j?d.image[W].image:d.image[W],le[W]=dt(d,le[W]);const Ce=le[0],Me=a.convert(d.format,d.colorSpace),oe=a.convert(d.type),Ne=R(d.internalFormat,Me,oe,d.colorSpace),w=d.isVideoTexture!==!0,J=G.__version===void 0||k===!0,ie=Y.dataReady;let fe=D(d,Ce);De(e.TEXTURE_CUBE_MAP,d);let Z;if(Ee){w&&J&&t.texStorage2D(e.TEXTURE_CUBE_MAP,fe,Ne,Ce.width,Ce.height);for(let W=0;W<6;W++){Z=le[W].mipmaps;for(let me=0;me<Z.length;me++){const Ue=Z[me];d.format!==zt?Me!==null?w?ie&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,me,0,0,Ue.width,Ue.height,Me,Ue.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,me,Ne,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):w?ie&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,me,0,0,Ue.width,Ue.height,Me,oe,Ue.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,me,Ne,Ue.width,Ue.height,0,Me,oe,Ue.data)}}}else{if(Z=d.mipmaps,w&&J){Z.length>0&&fe++;const W=rt(le[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,fe,Ne,W.width,W.height)}for(let W=0;W<6;W++)if(j){w?ie&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,le[W].width,le[W].height,Me,oe,le[W].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Ne,le[W].width,le[W].height,0,Me,oe,le[W].data);for(let me=0;me<Z.length;me++){const Ke=Z[me].image[W].image;w?ie&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,me+1,0,0,Ke.width,Ke.height,Me,oe,Ke.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,me+1,Ne,Ke.width,Ke.height,0,Me,oe,Ke.data)}}else{w?ie&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,Me,oe,le[W]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Ne,Me,oe,le[W]);for(let me=0;me<Z.length;me++){const Ue=Z[me];w?ie&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,me+1,0,0,Me,oe,Ue.image[W]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+W,me+1,Ne,Me,oe,Ue.image[W])}}}c(d)&&l(e.TEXTURE_CUBE_MAP),G.__version=Y.version,d.onUpdate&&d.onUpdate(d)}E.__version=d.version}function he(E,d,U,k,Y,G){const xe=a.convert(U.format,U.colorSpace),te=a.convert(U.type),Se=R(U.internalFormat,xe,te,U.colorSpace),Ee=i.get(d),j=i.get(U);if(j.__renderTarget=d,!Ee.__hasExternalTextures){const le=Math.max(1,d.width>>G),Ce=Math.max(1,d.height>>G);Y===e.TEXTURE_3D||Y===e.TEXTURE_2D_ARRAY?t.texImage3D(Y,G,Se,le,Ce,d.depth,0,xe,te,null):t.texImage2D(Y,G,Se,le,Ce,0,xe,te,null)}t.bindFramebuffer(e.FRAMEBUFFER,E),ve(d)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,k,Y,j.__webglTexture,0,Je(d)):(Y===e.TEXTURE_2D||Y>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,k,Y,j.__webglTexture,G),t.bindFramebuffer(e.FRAMEBUFFER,null)}function Le(E,d,U){if(e.bindRenderbuffer(e.RENDERBUFFER,E),d.depthBuffer){const k=d.depthTexture,Y=k&&k.isDepthTexture?k.type:null,G=x(d.stencilBuffer,Y),xe=d.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,te=Je(d);ve(d)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,te,G,d.width,d.height):U?e.renderbufferStorageMultisample(e.RENDERBUFFER,te,G,d.width,d.height):e.renderbufferStorage(e.RENDERBUFFER,G,d.width,d.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,xe,e.RENDERBUFFER,E)}else{const k=d.textures;for(let Y=0;Y<k.length;Y++){const G=k[Y],xe=a.convert(G.format,G.colorSpace),te=a.convert(G.type),Se=R(G.internalFormat,xe,te,G.colorSpace),Ee=Je(d);U&&ve(d)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ee,Se,d.width,d.height):ve(d)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ee,Se,d.width,d.height):e.renderbufferStorage(e.RENDERBUFFER,Se,d.width,d.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Te(E,d){if(d&&d.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(e.FRAMEBUFFER,E),!(d.depthTexture&&d.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const k=i.get(d.depthTexture);k.__renderTarget=d,(!k.__webglTexture||d.depthTexture.image.width!==d.width||d.depthTexture.image.height!==d.height)&&(d.depthTexture.image.width=d.width,d.depthTexture.image.height=d.height,d.depthTexture.needsUpdate=!0),K(d.depthTexture,0);const Y=k.__webglTexture,G=Je(d);if(d.depthTexture.format===_a)ve(d)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Y,0,G):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Y,0);else if(d.depthTexture.format===fi)ve(d)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Y,0,G):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Ge(E){const d=i.get(E),U=E.isWebGLCubeRenderTarget===!0;if(d.__boundDepthTexture!==E.depthTexture){const k=E.depthTexture;if(d.__depthDisposeCallback&&d.__depthDisposeCallback(),k){const Y=()=>{delete d.__boundDepthTexture,delete d.__depthDisposeCallback,k.removeEventListener("dispose",Y)};k.addEventListener("dispose",Y),d.__depthDisposeCallback=Y}d.__boundDepthTexture=k}if(E.depthTexture&&!d.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");const k=E.texture.mipmaps;k&&k.length>0?Te(d.__webglFramebuffer[0],E):Te(d.__webglFramebuffer,E)}else if(U){d.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(e.FRAMEBUFFER,d.__webglFramebuffer[k]),d.__webglDepthbuffer[k]===void 0)d.__webglDepthbuffer[k]=e.createRenderbuffer(),Le(d.__webglDepthbuffer[k],E,!1);else{const Y=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,G=d.__webglDepthbuffer[k];e.bindRenderbuffer(e.RENDERBUFFER,G),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,G)}}else{const k=E.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(e.FRAMEBUFFER,d.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,d.__webglFramebuffer),d.__webglDepthbuffer===void 0)d.__webglDepthbuffer=e.createRenderbuffer(),Le(d.__webglDepthbuffer,E,!1);else{const Y=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,G=d.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,G),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,G)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function gt(E,d,U){const k=i.get(E);d!==void 0&&he(k.__webglFramebuffer,E,E.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),U!==void 0&&Ge(E)}function A(E){const d=E.texture,U=i.get(E),k=i.get(d);E.addEventListener("dispose",I);const Y=E.textures,G=E.isWebGLCubeRenderTarget===!0,xe=Y.length>1;if(xe||(k.__webglTexture===void 0&&(k.__webglTexture=e.createTexture()),k.__version=d.version,s.memory.textures++),G){U.__webglFramebuffer=[];for(let te=0;te<6;te++)if(d.mipmaps&&d.mipmaps.length>0){U.__webglFramebuffer[te]=[];for(let Se=0;Se<d.mipmaps.length;Se++)U.__webglFramebuffer[te][Se]=e.createFramebuffer()}else U.__webglFramebuffer[te]=e.createFramebuffer()}else{if(d.mipmaps&&d.mipmaps.length>0){U.__webglFramebuffer=[];for(let te=0;te<d.mipmaps.length;te++)U.__webglFramebuffer[te]=e.createFramebuffer()}else U.__webglFramebuffer=e.createFramebuffer();if(xe)for(let te=0,Se=Y.length;te<Se;te++){const Ee=i.get(Y[te]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=e.createTexture(),s.memory.textures++)}if(E.samples>0&&ve(E)===!1){U.__webglMultisampledFramebuffer=e.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let te=0;te<Y.length;te++){const Se=Y[te];U.__webglColorRenderbuffer[te]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,U.__webglColorRenderbuffer[te]);const Ee=a.convert(Se.format,Se.colorSpace),j=a.convert(Se.type),le=R(Se.internalFormat,Ee,j,Se.colorSpace,E.isXRRenderTarget===!0),Ce=Je(E);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ce,le,E.width,E.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+te,e.RENDERBUFFER,U.__webglColorRenderbuffer[te])}e.bindRenderbuffer(e.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=e.createRenderbuffer(),Le(U.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(G){t.bindTexture(e.TEXTURE_CUBE_MAP,k.__webglTexture),De(e.TEXTURE_CUBE_MAP,d);for(let te=0;te<6;te++)if(d.mipmaps&&d.mipmaps.length>0)for(let Se=0;Se<d.mipmaps.length;Se++)he(U.__webglFramebuffer[te][Se],E,d,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se);else he(U.__webglFramebuffer[te],E,d,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);c(d)&&l(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let te=0,Se=Y.length;te<Se;te++){const Ee=Y[te],j=i.get(Ee);let le=e.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(le=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(le,j.__webglTexture),De(le,Ee),he(U.__webglFramebuffer,E,Ee,e.COLOR_ATTACHMENT0+te,le,0),c(Ee)&&l(le)}t.unbindTexture()}else{let te=e.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(te=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(te,k.__webglTexture),De(te,d),d.mipmaps&&d.mipmaps.length>0)for(let Se=0;Se<d.mipmaps.length;Se++)he(U.__webglFramebuffer[Se],E,d,e.COLOR_ATTACHMENT0,te,Se);else he(U.__webglFramebuffer,E,d,e.COLOR_ATTACHMENT0,te,0);c(d)&&l(te),t.unbindTexture()}E.depthBuffer&&Ge(E)}function je(E){const d=E.textures;for(let U=0,k=d.length;U<k;U++){const Y=d[U];if(c(Y)){const G=b(E),xe=i.get(Y).__webglTexture;t.bindTexture(G,xe),l(G),t.unbindTexture()}}}const Ie=[],ye=[];function _e(E){if(E.samples>0){if(ve(E)===!1){const d=E.textures,U=E.width,k=E.height;let Y=e.COLOR_BUFFER_BIT;const G=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,xe=i.get(E),te=d.length>1;if(te)for(let Ee=0;Ee<d.length;Ee++)t.bindFramebuffer(e.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ee,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,xe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ee,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const Se=E.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Ee=0;Ee<d.length;Ee++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Y|=e.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Y|=e.STENCIL_BUFFER_BIT)),te){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,xe.__webglColorRenderbuffer[Ee]);const j=i.get(d[Ee]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,j,0)}e.blitFramebuffer(0,0,U,k,0,0,U,k,Y,e.NEAREST),p===!0&&(Ie.length=0,ye.length=0,Ie.push(e.COLOR_ATTACHMENT0+Ee),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Ie.push(G),ye.push(G),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ye)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ie))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),te)for(let Ee=0;Ee<d.length;Ee++){t.bindFramebuffer(e.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ee,e.RENDERBUFFER,xe.__webglColorRenderbuffer[Ee]);const j=i.get(d[Ee]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,xe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ee,e.TEXTURE_2D,j,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&p){const d=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[d])}}}function Je(E){return Math.min(r.maxSamples,E.samples)}function ve(E){const d=i.get(E);return E.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&d.__useRenderToTexture!==!1}function Oe(E){const d=s.render.frame;m.get(E)!==d&&(m.set(E,d),E.update())}function dt(E,d){const U=E.colorSpace,k=E.format,Y=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||U!==vi&&U!==Sn&&(st.getTransfer(U)===Ze?(k!==zt||Y!==mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),d}function rt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(u.width=E.naturalWidth||E.width,u.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(u.width=E.displayWidth,u.height=E.displayHeight):(u.width=E.width,u.height=E.height),u}this.allocateTextureUnit=X,this.resetTextureUnits=F,this.setTexture2D=K,this.setTexture2DArray=V,this.setTexture3D=ne,this.setTextureCube=H,this.rebindTextures=gt,this.setupRenderTarget=A,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=he,this.useMultisampledRTT=ve}function th(e,n){function t(i,r=Sn){let a;const s=st.getTransfer(r);if(i===mn)return e.UNSIGNED_BYTE;if(i===mo)return e.UNSIGNED_SHORT_4_4_4_4;if(i===go)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Is)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Ns)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Os)return e.BYTE;if(i===Fs)return e.SHORT;if(i===pi)return e.UNSIGNED_SHORT;if(i===So)return e.INT;if(i===Wn)return e.UNSIGNED_INT;if(i===cn)return e.FLOAT;if(i===_i)return e.HALF_FLOAT;if(i===Bs)return e.ALPHA;if(i===Gs)return e.RGB;if(i===zt)return e.RGBA;if(i===_a)return e.DEPTH_COMPONENT;if(i===fi)return e.DEPTH_STENCIL;if(i===Hs)return e.RED;if(i===Eo)return e.RED_INTEGER;if(i===ks)return e.RG;if(i===Mo)return e.RG_INTEGER;if(i===xo)return e.RGBA_INTEGER;if(i===Ci||i===yi||i===Pi||i===Li)if(s===Ze)if(a=n.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Ci)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yi)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pi)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Li)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=n.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Ci)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yi)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pi)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Li)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fa||i===Ba||i===Ga||i===Ha)if(a=n.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Fa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ba)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ga)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ha)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ka||i===Va||i===za)if(a=n.get("WEBGL_compressed_texture_etc"),a!==null){if(i===ka||i===Va)return s===Ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===za)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Wa||i===Xa||i===qa||i===Ya||i===Ka||i===$a||i===Za||i===Qa||i===ja||i===Ja||i===er||i===tr||i===nr||i===ir)if(a=n.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Wa)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xa)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===qa)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ya)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ka)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$a)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Za)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qa)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ja)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ja)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===er)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===tr)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nr)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ir)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ar||i===rr||i===or)if(a=n.get("EXT_texture_compression_bptc"),a!==null){if(i===ar)return s===Ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===or)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===sr||i===lr||i===cr||i===dr)if(a=n.get("EXT_texture_compression_rgtc"),a!==null){if(i===sr)return a.COMPRESSED_RED_RGTC1_EXT;if(i===lr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===cr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zn?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const nh=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ih=`
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

}`;class ah{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new _o(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new Yt({vertexShader:nh,fragmentShader:ih,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ot(new vo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rh extends Jo{constructor(n,t){super();const i=this;let r=null,a=1,s=null,o="local-floor",p=1,u=null,m=null,f=null,g=null,_=null,T=null;const M=typeof XRWebGLBinding<"u",c=new ah,l={},b=t.getContextAttributes();let R=null,x=null;const D=[],C=[],I=new at;let B=null;const v=new On;v.viewport=new xt;const S=new On;S.viewport=new xt;const L=[v,S],F=new es;let X=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let $=D[z];return $===void 0&&($=new Ri,D[z]=$),$.getTargetRaySpace()},this.getControllerGrip=function(z){let $=D[z];return $===void 0&&($=new Ri,D[z]=$),$.getGripSpace()},this.getHand=function(z){let $=D[z];return $===void 0&&($=new Ri,D[z]=$),$.getHandSpace()};function K(z){const $=C.indexOf(z.inputSource);if($===-1)return;const he=D[$];he!==void 0&&(he.update(z.inputSource,z.frame,u||s),he.dispatchEvent({type:z.type,data:z.inputSource}))}function V(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",ne);for(let z=0;z<D.length;z++){const $=C[z];$!==null&&(C[z]=null,D[z].disconnect($))}X=null,q=null,c.reset();for(const z in l)delete l[z];n.setRenderTarget(R),_=null,g=null,f=null,r=null,x=null,Xe.stop(),i.isPresenting=!1,n.setPixelRatio(B),n.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(z){u=z},this.getBaseLayer=function(){return g!==null?g:_},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return T},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(R=n.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",V),r.addEventListener("inputsourceschange",ne),b.xrCompatible!==!0&&await t.makeXRCompatible(),B=n.getPixelRatio(),n.getSize(I),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Le=null,Te=null;b.depth&&(Te=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=b.stencil?fi:_a,Le=b.stencil?zn:Wn);const Ge={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:a};f=this.getBinding(),g=f.createProjectionLayer(Ge),r.updateRenderState({layers:[g]}),n.setPixelRatio(1),n.setSize(g.textureWidth,g.textureHeight,!1),x=new An(g.textureWidth,g.textureHeight,{format:zt,type:mn,depthTexture:new fo(g.textureWidth,g.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:b.stencil,colorSpace:n.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const he={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:_}),n.setPixelRatio(1),n.setSize(_.framebufferWidth,_.framebufferHeight,!1),x=new An(_.framebufferWidth,_.framebufferHeight,{format:zt,type:mn,colorSpace:n.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(p),u=null,s=await r.requestReferenceSpace(o),Xe.setContext(r),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return c.getDepthTexture()};function ne(z){for(let $=0;$<z.removed.length;$++){const he=z.removed[$],Le=C.indexOf(he);Le>=0&&(C[Le]=null,D[Le].disconnect(he))}for(let $=0;$<z.added.length;$++){const he=z.added[$];let Le=C.indexOf(he);if(Le===-1){for(let Ge=0;Ge<D.length;Ge++)if(Ge>=C.length){C.push(he),Le=Ge;break}else if(C[Ge]===null){C[Ge]=he,Le=Ge;break}if(Le===-1)break}const Te=D[Le];Te&&Te.connect(he)}}const H=new ae,ge=new ae;function be(z,$,he){H.setFromMatrixPosition($.matrixWorld),ge.setFromMatrixPosition(he.matrixWorld);const Le=H.distanceTo(ge),Te=$.projectionMatrix.elements,Ge=he.projectionMatrix.elements,gt=Te[14]/(Te[10]-1),A=Te[14]/(Te[10]+1),je=(Te[9]+1)/Te[5],Ie=(Te[9]-1)/Te[5],ye=(Te[8]-1)/Te[0],_e=(Ge[8]+1)/Ge[0],Je=gt*ye,ve=gt*_e,Oe=Le/(-ye+_e),dt=Oe*-ye;if($.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(dt),z.translateZ(Oe),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),Te[10]===-1)z.projectionMatrix.copy($.projectionMatrix),z.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const rt=gt+Oe,E=A+Oe,d=Je-dt,U=ve+(Le-dt),k=je*A/E*rt,Y=Ie*A/E*rt;z.projectionMatrix.makePerspective(d,U,k,Y,rt,E),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function de(z,$){$===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices($.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;let $=z.near,he=z.far;c.texture!==null&&(c.depthNear>0&&($=c.depthNear),c.depthFar>0&&(he=c.depthFar)),F.near=S.near=v.near=$,F.far=S.far=v.far=he,(X!==F.near||q!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),X=F.near,q=F.far),F.layers.mask=z.layers.mask|6,v.layers.mask=F.layers.mask&3,S.layers.mask=F.layers.mask&5;const Le=z.parent,Te=F.cameras;de(F,Le);for(let Ge=0;Ge<Te.length;Ge++)de(Te[Ge],Le);Te.length===2?be(F,v,S):F.projectionMatrix.copy(v.projectionMatrix),De(z,F,Le)};function De(z,$,he){he===null?z.matrix.copy($.matrixWorld):(z.matrix.copy(he.matrixWorld),z.matrix.invert(),z.matrix.multiply($.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy($.projectionMatrix),z.projectionMatrixInverse.copy($.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=ts*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(g===null&&_===null))return p},this.setFoveation=function(z){p=z,g!==null&&(g.fixedFoveation=z),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=z)},this.hasDepthSensing=function(){return c.texture!==null},this.getDepthSensingMesh=function(){return c.getMesh(F)},this.getCameraTexture=function(z){return l[z]};let Ye=null;function Qe(z,$){if(m=$.getViewerPose(u||s),T=$,m!==null){const he=m.views;_!==null&&(n.setRenderTargetFramebuffer(x,_.framebuffer),n.setRenderTarget(x));let Le=!1;he.length!==F.cameras.length&&(F.cameras.length=0,Le=!0);for(let A=0;A<he.length;A++){const je=he[A];let Ie=null;if(_!==null)Ie=_.getViewport(je);else{const _e=f.getViewSubImage(g,je);Ie=_e.viewport,A===0&&(n.setRenderTargetTextures(x,_e.colorTexture,_e.depthStencilTexture),n.setRenderTarget(x))}let ye=L[A];ye===void 0&&(ye=new On,ye.layers.enable(A),ye.viewport=new xt,L[A]=ye),ye.matrix.fromArray(je.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(je.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),A===0&&(F.matrix.copy(ye.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Le===!0&&F.cameras.push(ye)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){f=i.getBinding();const A=f.getDepthInformation(he[0]);A&&A.isValid&&A.texture&&c.init(A,r.renderState)}if(Te&&Te.includes("camera-access")&&M){n.state.unbindTexture(),f=i.getBinding();for(let A=0;A<he.length;A++){const je=he[A].camera;if(je){let Ie=l[je];Ie||(Ie=new _o,l[je]=Ie);const ye=f.getCameraImage(je);Ie.sourceTexture=ye}}}}for(let he=0;he<D.length;he++){const Le=C[he],Te=D[he];Le!==null&&Te!==void 0&&Te.update(Le,$,u||s)}Ye&&Ye(z,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),T=null}const Xe=new Lo;Xe.setAnimationLoop(Qe),this.setAnimationLoop=function(z){Ye=z},this.dispose=function(){}}}const on=new Tn,oh=new Bt;function sh(e,n){function t(c,l){c.matrixAutoUpdate===!0&&c.updateMatrix(),l.value.copy(c.matrix)}function i(c,l){l.color.getRGB(c.fogColor.value,Ao(e)),l.isFog?(c.fogNear.value=l.near,c.fogFar.value=l.far):l.isFogExp2&&(c.fogDensity.value=l.density)}function r(c,l,b,R,x){l.isMeshBasicMaterial||l.isMeshLambertMaterial?a(c,l):l.isMeshToonMaterial?(a(c,l),f(c,l)):l.isMeshPhongMaterial?(a(c,l),m(c,l)):l.isMeshStandardMaterial?(a(c,l),g(c,l),l.isMeshPhysicalMaterial&&_(c,l,x)):l.isMeshMatcapMaterial?(a(c,l),T(c,l)):l.isMeshDepthMaterial?a(c,l):l.isMeshDistanceMaterial?(a(c,l),M(c,l)):l.isMeshNormalMaterial?a(c,l):l.isLineBasicMaterial?(s(c,l),l.isLineDashedMaterial&&o(c,l)):l.isPointsMaterial?p(c,l,b,R):l.isSpriteMaterial?u(c,l):l.isShadowMaterial?(c.color.value.copy(l.color),c.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}function a(c,l){c.opacity.value=l.opacity,l.color&&c.diffuse.value.copy(l.color),l.emissive&&c.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(c.map.value=l.map,t(l.map,c.mapTransform)),l.alphaMap&&(c.alphaMap.value=l.alphaMap,t(l.alphaMap,c.alphaMapTransform)),l.bumpMap&&(c.bumpMap.value=l.bumpMap,t(l.bumpMap,c.bumpMapTransform),c.bumpScale.value=l.bumpScale,l.side===Rt&&(c.bumpScale.value*=-1)),l.normalMap&&(c.normalMap.value=l.normalMap,t(l.normalMap,c.normalMapTransform),c.normalScale.value.copy(l.normalScale),l.side===Rt&&c.normalScale.value.negate()),l.displacementMap&&(c.displacementMap.value=l.displacementMap,t(l.displacementMap,c.displacementMapTransform),c.displacementScale.value=l.displacementScale,c.displacementBias.value=l.displacementBias),l.emissiveMap&&(c.emissiveMap.value=l.emissiveMap,t(l.emissiveMap,c.emissiveMapTransform)),l.specularMap&&(c.specularMap.value=l.specularMap,t(l.specularMap,c.specularMapTransform)),l.alphaTest>0&&(c.alphaTest.value=l.alphaTest);const b=n.get(l),R=b.envMap,x=b.envMapRotation;R&&(c.envMap.value=R,on.copy(x),on.x*=-1,on.y*=-1,on.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(on.y*=-1,on.z*=-1),c.envMapRotation.value.setFromMatrix4(oh.makeRotationFromEuler(on)),c.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,c.reflectivity.value=l.reflectivity,c.ior.value=l.ior,c.refractionRatio.value=l.refractionRatio),l.lightMap&&(c.lightMap.value=l.lightMap,c.lightMapIntensity.value=l.lightMapIntensity,t(l.lightMap,c.lightMapTransform)),l.aoMap&&(c.aoMap.value=l.aoMap,c.aoMapIntensity.value=l.aoMapIntensity,t(l.aoMap,c.aoMapTransform))}function s(c,l){c.diffuse.value.copy(l.color),c.opacity.value=l.opacity,l.map&&(c.map.value=l.map,t(l.map,c.mapTransform))}function o(c,l){c.dashSize.value=l.dashSize,c.totalSize.value=l.dashSize+l.gapSize,c.scale.value=l.scale}function p(c,l,b,R){c.diffuse.value.copy(l.color),c.opacity.value=l.opacity,c.size.value=l.size*b,c.scale.value=R*.5,l.map&&(c.map.value=l.map,t(l.map,c.uvTransform)),l.alphaMap&&(c.alphaMap.value=l.alphaMap,t(l.alphaMap,c.alphaMapTransform)),l.alphaTest>0&&(c.alphaTest.value=l.alphaTest)}function u(c,l){c.diffuse.value.copy(l.color),c.opacity.value=l.opacity,c.rotation.value=l.rotation,l.map&&(c.map.value=l.map,t(l.map,c.mapTransform)),l.alphaMap&&(c.alphaMap.value=l.alphaMap,t(l.alphaMap,c.alphaMapTransform)),l.alphaTest>0&&(c.alphaTest.value=l.alphaTest)}function m(c,l){c.specular.value.copy(l.specular),c.shininess.value=Math.max(l.shininess,1e-4)}function f(c,l){l.gradientMap&&(c.gradientMap.value=l.gradientMap)}function g(c,l){c.metalness.value=l.metalness,l.metalnessMap&&(c.metalnessMap.value=l.metalnessMap,t(l.metalnessMap,c.metalnessMapTransform)),c.roughness.value=l.roughness,l.roughnessMap&&(c.roughnessMap.value=l.roughnessMap,t(l.roughnessMap,c.roughnessMapTransform)),l.envMap&&(c.envMapIntensity.value=l.envMapIntensity)}function _(c,l,b){c.ior.value=l.ior,l.sheen>0&&(c.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),c.sheenRoughness.value=l.sheenRoughness,l.sheenColorMap&&(c.sheenColorMap.value=l.sheenColorMap,t(l.sheenColorMap,c.sheenColorMapTransform)),l.sheenRoughnessMap&&(c.sheenRoughnessMap.value=l.sheenRoughnessMap,t(l.sheenRoughnessMap,c.sheenRoughnessMapTransform))),l.clearcoat>0&&(c.clearcoat.value=l.clearcoat,c.clearcoatRoughness.value=l.clearcoatRoughness,l.clearcoatMap&&(c.clearcoatMap.value=l.clearcoatMap,t(l.clearcoatMap,c.clearcoatMapTransform)),l.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap,t(l.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),l.clearcoatNormalMap&&(c.clearcoatNormalMap.value=l.clearcoatNormalMap,t(l.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),l.side===Rt&&c.clearcoatNormalScale.value.negate())),l.dispersion>0&&(c.dispersion.value=l.dispersion),l.iridescence>0&&(c.iridescence.value=l.iridescence,c.iridescenceIOR.value=l.iridescenceIOR,c.iridescenceThicknessMinimum.value=l.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=l.iridescenceThicknessRange[1],l.iridescenceMap&&(c.iridescenceMap.value=l.iridescenceMap,t(l.iridescenceMap,c.iridescenceMapTransform)),l.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=l.iridescenceThicknessMap,t(l.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),l.transmission>0&&(c.transmission.value=l.transmission,c.transmissionSamplerMap.value=b.texture,c.transmissionSamplerSize.value.set(b.width,b.height),l.transmissionMap&&(c.transmissionMap.value=l.transmissionMap,t(l.transmissionMap,c.transmissionMapTransform)),c.thickness.value=l.thickness,l.thicknessMap&&(c.thicknessMap.value=l.thicknessMap,t(l.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=l.attenuationDistance,c.attenuationColor.value.copy(l.attenuationColor)),l.anisotropy>0&&(c.anisotropyVector.value.set(l.anisotropy*Math.cos(l.anisotropyRotation),l.anisotropy*Math.sin(l.anisotropyRotation)),l.anisotropyMap&&(c.anisotropyMap.value=l.anisotropyMap,t(l.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=l.specularIntensity,c.specularColor.value.copy(l.specularColor),l.specularColorMap&&(c.specularColorMap.value=l.specularColorMap,t(l.specularColorMap,c.specularColorMapTransform)),l.specularIntensityMap&&(c.specularIntensityMap.value=l.specularIntensityMap,t(l.specularIntensityMap,c.specularIntensityMapTransform))}function T(c,l){l.matcap&&(c.matcap.value=l.matcap)}function M(c,l){const b=n.get(l).light;c.referencePosition.value.setFromMatrixPosition(b.matrixWorld),c.nearDistance.value=b.shadow.camera.near,c.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function lh(e,n,t,i){let r={},a={},s=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function p(b,R){const x=R.program;i.uniformBlockBinding(b,x)}function u(b,R){let x=r[b.id];x===void 0&&(T(b),x=m(b),r[b.id]=x,b.addEventListener("dispose",c));const D=R.program;i.updateUBOMapping(b,D);const C=n.render.frame;a[b.id]!==C&&(g(b),a[b.id]=C)}function m(b){const R=f();b.__bindingPointIndex=R;const x=e.createBuffer(),D=b.__size,C=b.usage;return e.bindBuffer(e.UNIFORM_BUFFER,x),e.bufferData(e.UNIFORM_BUFFER,D,C),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,R,x),x}function f(){for(let b=0;b<o;b++)if(s.indexOf(b)===-1)return s.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(b){const R=r[b.id],x=b.uniforms,D=b.__cache;e.bindBuffer(e.UNIFORM_BUFFER,R);for(let C=0,I=x.length;C<I;C++){const B=Array.isArray(x[C])?x[C]:[x[C]];for(let v=0,S=B.length;v<S;v++){const L=B[v];if(_(L,C,v,D)===!0){const F=L.__offset,X=Array.isArray(L.value)?L.value:[L.value];let q=0;for(let K=0;K<X.length;K++){const V=X[K],ne=M(V);typeof V=="number"||typeof V=="boolean"?(L.__data[0]=V,e.bufferSubData(e.UNIFORM_BUFFER,F+q,L.__data)):V.isMatrix3?(L.__data[0]=V.elements[0],L.__data[1]=V.elements[1],L.__data[2]=V.elements[2],L.__data[3]=0,L.__data[4]=V.elements[3],L.__data[5]=V.elements[4],L.__data[6]=V.elements[5],L.__data[7]=0,L.__data[8]=V.elements[6],L.__data[9]=V.elements[7],L.__data[10]=V.elements[8],L.__data[11]=0):(V.toArray(L.__data,q),q+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,F,L.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function _(b,R,x,D){const C=b.value,I=R+"_"+x;if(D[I]===void 0)return typeof C=="number"||typeof C=="boolean"?D[I]=C:D[I]=C.clone(),!0;{const B=D[I];if(typeof C=="number"||typeof C=="boolean"){if(B!==C)return D[I]=C,!0}else if(B.equals(C)===!1)return B.copy(C),!0}return!1}function T(b){const R=b.uniforms;let x=0;const D=16;for(let I=0,B=R.length;I<B;I++){const v=Array.isArray(R[I])?R[I]:[R[I]];for(let S=0,L=v.length;S<L;S++){const F=v[S],X=Array.isArray(F.value)?F.value:[F.value];for(let q=0,K=X.length;q<K;q++){const V=X[q],ne=M(V),H=x%D,ge=H%ne.boundary,be=H+ge;x+=ge,be!==0&&D-be<ne.storage&&(x+=D-be),F.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=ne.storage}}}const C=x%D;return C>0&&(x+=D-C),b.__size=x,b.__cache={},this}function M(b){const R={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(R.boundary=4,R.storage=4):b.isVector2?(R.boundary=8,R.storage=8):b.isVector3||b.isColor?(R.boundary=16,R.storage=12):b.isVector4?(R.boundary=16,R.storage=16):b.isMatrix3?(R.boundary=48,R.storage=48):b.isMatrix4?(R.boundary=64,R.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),R}function c(b){const R=b.target;R.removeEventListener("dispose",c);const x=s.indexOf(R.__bindingPointIndex);s.splice(x,1),e.deleteBuffer(r[R.id]),delete r[R.id],delete a[R.id]}function l(){for(const b in r)e.deleteBuffer(r[b]);s=[],r={},a={}}return{bind:p,update:u,dispose:l}}class ch{constructor(n={}){const{canvas:t=$o(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:u=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:g=!1}=n;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=s;const T=new Uint32Array(4),M=new Int32Array(4);let c=null,l=null;const b=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=jt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let D=!1;this._outputColorSpace=Zo;let C=0,I=0,B=null,v=-1,S=null;const L=new xt,F=new xt;let X=null;const q=new Ve(0);let K=0,V=t.width,ne=t.height,H=1,ge=null,be=null;const de=new xt(0,0,V,ne),De=new xt(0,0,V,ne);let Ye=!1;const Qe=new uo;let Xe=!1,z=!1;const $=new Bt,he=new ae,Le=new xt,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function gt(){return B===null?H:1}let A=i;function je(h,y){return t.getContext(h,y)}try{const h={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:p,preserveDrawingBuffer:u,powerPreference:m,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qo}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",Z,!1),A===null){const y="webgl2";if(A=je(y,h),A===null)throw je(y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(h){throw console.error("THREE.WebGLRenderer: "+h.message),h}let Ie,ye,_e,Je,ve,Oe,dt,rt,E,d,U,k,Y,G,xe,te,Se,Ee,j,le,Ce,Me,oe,Ne;function w(){Ie=new vu(A),Ie.init(),Me=new th(A,Ie),ye=new uu(A,Ie,n,Me),_e=new Jf(A,Ie),ye.reversedDepthBuffer&&g&&_e.buffers.depth.setReversed(!0),Je=new Mu(A),ve=new Hf,Oe=new eh(A,Ie,_e,ve,ye,Me,Je),dt=new hu(x),rt=new _u(x),E=new wl(A),oe=new cu(A,E),d=new Su(A,E,Je,oe),U=new Tu(A,d,E,Je),j=new xu(A,ye,Oe),te=new fu(ve),k=new Gf(x,dt,rt,Ie,ye,oe,te),Y=new sh(x,ve),G=new Vf,xe=new Kf(Ie),Ee=new lu(x,dt,rt,_e,U,_,p),Se=new Qf(x,U,ye),Ne=new lh(A,Je,ye,_e),le=new du(A,Ie,Je),Ce=new Eu(A,Ie,Je),Je.programs=k.programs,x.capabilities=ye,x.extensions=Ie,x.properties=ve,x.renderLists=G,x.shadowMap=Se,x.state=_e,x.info=Je}w();const J=new rh(x,A);this.xr=J,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const h=Ie.get("WEBGL_lose_context");h&&h.loseContext()},this.forceContextRestore=function(){const h=Ie.get("WEBGL_lose_context");h&&h.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(h){h!==void 0&&(H=h,this.setSize(V,ne,!1))},this.getSize=function(h){return h.set(V,ne)},this.setSize=function(h,y,N=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=h,ne=y,t.width=Math.floor(h*H),t.height=Math.floor(y*H),N===!0&&(t.style.width=h+"px",t.style.height=y+"px"),this.setViewport(0,0,h,y)},this.getDrawingBufferSize=function(h){return h.set(V*H,ne*H).floor()},this.setDrawingBufferSize=function(h,y,N){V=h,ne=y,H=N,t.width=Math.floor(h*N),t.height=Math.floor(y*N),this.setViewport(0,0,h,y)},this.getCurrentViewport=function(h){return h.copy(L)},this.getViewport=function(h){return h.copy(de)},this.setViewport=function(h,y,N,O){h.isVector4?de.set(h.x,h.y,h.z,h.w):de.set(h,y,N,O),_e.viewport(L.copy(de).multiplyScalar(H).round())},this.getScissor=function(h){return h.copy(De)},this.setScissor=function(h,y,N,O){h.isVector4?De.set(h.x,h.y,h.z,h.w):De.set(h,y,N,O),_e.scissor(F.copy(De).multiplyScalar(H).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(h){_e.setScissorTest(Ye=h)},this.setOpaqueSort=function(h){ge=h},this.setTransparentSort=function(h){be=h},this.getClearColor=function(h){return h.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(h=!0,y=!0,N=!0){let O=0;if(h){let P=!1;if(B!==null){const Q=B.texture.format;P=Q===xo||Q===Mo||Q===Eo}if(P){const Q=B.texture.type,se=Q===mn||Q===Wn||Q===pi||Q===zn||Q===mo||Q===go,pe=Ee.getClearColor(),ue=Ee.getClearAlpha(),we=pe.r,Pe=pe.g,Ae=pe.b;se?(T[0]=we,T[1]=Pe,T[2]=Ae,T[3]=ue,A.clearBufferuiv(A.COLOR,0,T)):(M[0]=we,M[1]=Pe,M[2]=Ae,M[3]=ue,A.clearBufferiv(A.COLOR,0,M))}else O|=A.COLOR_BUFFER_BIT}y&&(O|=A.DEPTH_BUFFER_BIT),N&&(O|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),Ee.dispose(),G.dispose(),xe.dispose(),ve.dispose(),dt.dispose(),rt.dispose(),U.dispose(),oe.dispose(),Ne.dispose(),k.dispose(),J.dispose(),J.removeEventListener("sessionstart",Nt),J.removeEventListener("sessionend",Pa),nn.stop()};function ie(h){h.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const h=Je.autoReset,y=Se.enabled,N=Se.autoUpdate,O=Se.needsUpdate,P=Se.type;w(),Je.autoReset=h,Se.enabled=y,Se.autoUpdate=N,Se.needsUpdate=O,Se.type=P}function Z(h){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",h.statusMessage)}function W(h){const y=h.target;y.removeEventListener("dispose",W),me(y)}function me(h){Ue(h),ve.remove(h)}function Ue(h){const y=ve.get(h).programs;y!==void 0&&(y.forEach(function(N){k.releaseProgram(N)}),h.isShaderMaterial&&k.releaseShaderCache(h))}this.renderBufferDirect=function(h,y,N,O,P,Q){y===null&&(y=Te);const se=P.isMesh&&P.matrixWorld.determinant()<0,pe=zo(h,y,N,O,P);_e.setMaterial(O,se);let ue=N.index,we=1;if(O.wireframe===!0){if(ue=d.getWireframeAttribute(N),ue===void 0)return;we=2}const Pe=N.drawRange,Ae=N.attributes.position;let Be=Pe.start*we,We=(Pe.start+Pe.count)*we;Q!==null&&(Be=Math.max(Be,Q.start*we),We=Math.min(We,(Q.start+Q.count)*we)),ue!==null?(Be=Math.max(Be,0),We=Math.min(We,ue.count)):Ae!=null&&(Be=Math.max(Be,0),We=Math.min(We,Ae.count));const it=We-Be;if(it<0||it===1/0)return;oe.setup(P,O,pe,N,ue);let $e,qe=le;if(ue!==null&&($e=E.get(ue),qe=Ce,qe.setIndex($e)),P.isMesh)O.wireframe===!0?(_e.setLineWidth(O.wireframeLinewidth*gt()),qe.setMode(A.LINES)):qe.setMode(A.TRIANGLES);else if(P.isLine){let Re=O.linewidth;Re===void 0&&(Re=1),_e.setLineWidth(Re*gt()),P.isLineSegments?qe.setMode(A.LINES):P.isLineLoop?qe.setMode(A.LINE_LOOP):qe.setMode(A.LINE_STRIP)}else P.isPoints?qe.setMode(A.POINTS):P.isSprite&&qe.setMode(A.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)Zi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),qe.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(Ie.get("WEBGL_multi_draw"))qe.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{const Re=P._multiDrawStarts,et=P._multiDrawCounts,He=P._multiDrawCount,At=ue?E.get(ue).bytesPerElement:1,_n=ve.get(O).currentProgram.getUniforms();for(let bt=0;bt<He;bt++)_n.setValue(A,"_gl_DrawID",bt),qe.render(Re[bt]/At,et[bt])}else if(P.isInstancedMesh)qe.renderInstances(Be,it,P.count);else if(N.isInstancedBufferGeometry){const Re=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,et=Math.min(N.instanceCount,Re);qe.renderInstances(Be,it,et)}else qe.render(Be,it)};function Ke(h,y,N){h.transparent===!0&&h.side===Dt&&h.forceSinglePass===!1?(h.side=Rt,h.needsUpdate=!0,Jn(h,y,N),h.side=Vn,h.needsUpdate=!0,Jn(h,y,N),h.side=Dt):Jn(h,y,N)}this.compile=function(h,y,N=null){N===null&&(N=h),l=xe.get(N),l.init(y),R.push(l),N.traverseVisible(function(P){P.isLight&&P.layers.test(y.layers)&&(l.pushLight(P),P.castShadow&&l.pushShadow(P))}),h!==N&&h.traverseVisible(function(P){P.isLight&&P.layers.test(y.layers)&&(l.pushLight(P),P.castShadow&&l.pushShadow(P))}),l.setupLights();const O=new Set;return h.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;const Q=P.material;if(Q)if(Array.isArray(Q))for(let se=0;se<Q.length;se++){const pe=Q[se];Ke(pe,N,P),O.add(pe)}else Ke(Q,N,P),O.add(Q)}),l=R.pop(),O},this.compileAsync=function(h,y,N=null){const O=this.compile(h,y,N);return new Promise(P=>{function Q(){if(O.forEach(function(se){ve.get(se).currentProgram.isReady()&&O.delete(se)}),O.size===0){P(h);return}setTimeout(Q,10)}Ie.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let ze=null;function Ht(h){ze&&ze(h)}function Nt(){nn.stop()}function Pa(){nn.start()}const nn=new Lo;nn.setAnimationLoop(Ht),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(h){ze=h,J.setAnimationLoop(h),h===null?nn.stop():nn.start()},J.addEventListener("sessionstart",Nt),J.addEventListener("sessionend",Pa),this.render=function(h,y){if(y!==void 0&&y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld(),y.parent===null&&y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(y),y=J.getCamera()),h.isScene===!0&&h.onBeforeRender(x,h,y,B),l=xe.get(h,R.length),l.init(y),R.push(l),$.multiplyMatrices(y.projectionMatrix,y.matrixWorldInverse),Qe.setFromProjectionMatrix($,Oa,y.reversedDepth),z=this.localClippingEnabled,Xe=te.init(this.clippingPlanes,z),c=G.get(h,b.length),c.init(),b.push(c),J.enabled===!0&&J.isPresenting===!0){const Q=x.xr.getDepthSensingMesh();Q!==null&&Ai(Q,y,-1/0,x.sortObjects)}Ai(h,y,0,x.sortObjects),c.finish(),x.sortObjects===!0&&c.sort(ge,be),Ge=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Ge&&Ee.addToRenderList(c,h),this.info.render.frame++,Xe===!0&&te.beginShadows();const N=l.state.shadowsArray;Se.render(N,h,y),Xe===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=c.opaque,P=c.transmissive;if(l.setupLights(),y.isArrayCamera){const Q=y.cameras;if(P.length>0)for(let se=0,pe=Q.length;se<pe;se++){const ue=Q[se];Da(O,P,h,ue)}Ge&&Ee.render(h);for(let se=0,pe=Q.length;se<pe;se++){const ue=Q[se];La(c,h,ue,ue.viewport)}}else P.length>0&&Da(O,P,h,y),Ge&&Ee.render(h),La(c,h,y);B!==null&&I===0&&(Oe.updateMultisampleRenderTarget(B),Oe.updateRenderTargetMipmap(B)),h.isScene===!0&&h.onAfterRender(x,h,y),oe.resetDefaultState(),v=-1,S=null,R.pop(),R.length>0?(l=R[R.length-1],Xe===!0&&te.setGlobalState(x.clippingPlanes,l.state.camera)):l=null,b.pop(),b.length>0?c=b[b.length-1]:c=null};function Ai(h,y,N,O){if(h.visible===!1)return;if(h.layers.test(y.layers)){if(h.isGroup)N=h.renderOrder;else if(h.isLOD)h.autoUpdate===!0&&h.update(y);else if(h.isLight)l.pushLight(h),h.castShadow&&l.pushShadow(h);else if(h.isSprite){if(!h.frustumCulled||Qe.intersectsSprite(h)){O&&Le.setFromMatrixPosition(h.matrixWorld).applyMatrix4($);const se=U.update(h),pe=h.material;pe.visible&&c.push(h,se,pe,N,Le.z,null)}}else if((h.isMesh||h.isLine||h.isPoints)&&(!h.frustumCulled||Qe.intersectsObject(h))){const se=U.update(h),pe=h.material;if(O&&(h.boundingSphere!==void 0?(h.boundingSphere===null&&h.computeBoundingSphere(),Le.copy(h.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),Le.copy(se.boundingSphere.center)),Le.applyMatrix4(h.matrixWorld).applyMatrix4($)),Array.isArray(pe)){const ue=se.groups;for(let we=0,Pe=ue.length;we<Pe;we++){const Ae=ue[we],Be=pe[Ae.materialIndex];Be&&Be.visible&&c.push(h,se,Be,N,Le.z,Ae)}}else pe.visible&&c.push(h,se,pe,N,Le.z,null)}}const Q=h.children;for(let se=0,pe=Q.length;se<pe;se++)Ai(Q[se],y,N,O)}function La(h,y,N,O){const P=h.opaque,Q=h.transmissive,se=h.transparent;l.setupLightsView(N),Xe===!0&&te.setGlobalState(x.clippingPlanes,N),O&&_e.viewport(L.copy(O)),P.length>0&&jn(P,y,N),Q.length>0&&jn(Q,y,N),se.length>0&&jn(se,y,N),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Da(h,y,N,O){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;l.state.transmissionRenderTarget[O.id]===void 0&&(l.state.transmissionRenderTarget[O.id]=new An(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float")?_i:mn,minFilter:In,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const Q=l.state.transmissionRenderTarget[O.id],se=O.viewport||L;Q.setSize(se.z*x.transmissionResolutionScale,se.w*x.transmissionResolutionScale);const pe=x.getRenderTarget(),ue=x.getActiveCubeFace(),we=x.getActiveMipmapLevel();x.setRenderTarget(Q),x.getClearColor(q),K=x.getClearAlpha(),K<1&&x.setClearColor(16777215,.5),x.clear(),Ge&&Ee.render(N);const Pe=x.toneMapping;x.toneMapping=jt;const Ae=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),l.setupLightsView(O),Xe===!0&&te.setGlobalState(x.clippingPlanes,O),jn(h,N,O),Oe.updateMultisampleRenderTarget(Q),Oe.updateRenderTargetMipmap(Q),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let We=0,it=y.length;We<it;We++){const $e=y[We],qe=$e.object,Re=$e.geometry,et=$e.material,He=$e.group;if(et.side===Dt&&qe.layers.test(O.layers)){const At=et.side;et.side=Rt,et.needsUpdate=!0,Ua(qe,N,O,Re,et,He),et.side=At,et.needsUpdate=!0,Be=!0}}Be===!0&&(Oe.updateMultisampleRenderTarget(Q),Oe.updateRenderTargetMipmap(Q))}x.setRenderTarget(pe,ue,we),x.setClearColor(q,K),Ae!==void 0&&(O.viewport=Ae),x.toneMapping=Pe}function jn(h,y,N){const O=y.isScene===!0?y.overrideMaterial:null;for(let P=0,Q=h.length;P<Q;P++){const se=h[P],pe=se.object,ue=se.geometry,we=se.group;let Pe=se.material;Pe.allowOverride===!0&&O!==null&&(Pe=O),pe.layers.test(N.layers)&&Ua(pe,y,N,ue,Pe,we)}}function Ua(h,y,N,O,P,Q){h.onBeforeRender(x,y,N,O,P,Q),h.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,h.matrixWorld),h.normalMatrix.getNormalMatrix(h.modelViewMatrix),P.onBeforeRender(x,y,N,O,h,Q),P.transparent===!0&&P.side===Dt&&P.forceSinglePass===!1?(P.side=Rt,P.needsUpdate=!0,x.renderBufferDirect(N,y,O,P,h,Q),P.side=Vn,P.needsUpdate=!0,x.renderBufferDirect(N,y,O,P,h,Q),P.side=Dt):x.renderBufferDirect(N,y,O,P,h,Q),h.onAfterRender(x,y,N,O,P,Q)}function Jn(h,y,N){y.isScene!==!0&&(y=Te);const O=ve.get(h),P=l.state.lights,Q=l.state.shadowsArray,se=P.state.version,pe=k.getParameters(h,P.state,Q,y,N),ue=k.getProgramCacheKey(pe);let we=O.programs;O.environment=h.isMeshStandardMaterial?y.environment:null,O.fog=y.fog,O.envMap=(h.isMeshStandardMaterial?rt:dt).get(h.envMap||O.environment),O.envMapRotation=O.environment!==null&&h.envMap===null?y.environmentRotation:h.envMapRotation,we===void 0&&(h.addEventListener("dispose",W),we=new Map,O.programs=we);let Pe=we.get(ue);if(Pe!==void 0){if(O.currentProgram===Pe&&O.lightsStateVersion===se)return Na(h,pe),Pe}else pe.uniforms=k.getUniforms(h),h.onBeforeCompile(pe,x),Pe=k.acquireProgram(pe,ue),we.set(ue,Pe),O.uniforms=pe.uniforms;const Ae=O.uniforms;return(!h.isShaderMaterial&&!h.isRawShaderMaterial||h.clipping===!0)&&(Ae.clippingPlanes=te.uniform),Na(h,pe),O.needsLights=Xo(h),O.lightsStateVersion=se,O.needsLights&&(Ae.ambientLightColor.value=P.state.ambient,Ae.lightProbe.value=P.state.probe,Ae.directionalLights.value=P.state.directional,Ae.directionalLightShadows.value=P.state.directionalShadow,Ae.spotLights.value=P.state.spot,Ae.spotLightShadows.value=P.state.spotShadow,Ae.rectAreaLights.value=P.state.rectArea,Ae.ltc_1.value=P.state.rectAreaLTC1,Ae.ltc_2.value=P.state.rectAreaLTC2,Ae.pointLights.value=P.state.point,Ae.pointLightShadows.value=P.state.pointShadow,Ae.hemisphereLights.value=P.state.hemi,Ae.directionalShadowMap.value=P.state.directionalShadowMap,Ae.directionalShadowMatrix.value=P.state.directionalShadowMatrix,Ae.spotShadowMap.value=P.state.spotShadowMap,Ae.spotLightMatrix.value=P.state.spotLightMatrix,Ae.spotLightMap.value=P.state.spotLightMap,Ae.pointShadowMap.value=P.state.pointShadowMap,Ae.pointShadowMatrix.value=P.state.pointShadowMatrix),O.currentProgram=Pe,O.uniformsList=null,Pe}function Ia(h){if(h.uniformsList===null){const y=h.currentProgram.getUniforms();h.uniformsList=ci.seqWithValue(y.seq,h.uniforms)}return h.uniformsList}function Na(h,y){const N=ve.get(h);N.outputColorSpace=y.outputColorSpace,N.batching=y.batching,N.batchingColor=y.batchingColor,N.instancing=y.instancing,N.instancingColor=y.instancingColor,N.instancingMorph=y.instancingMorph,N.skinning=y.skinning,N.morphTargets=y.morphTargets,N.morphNormals=y.morphNormals,N.morphColors=y.morphColors,N.morphTargetsCount=y.morphTargetsCount,N.numClippingPlanes=y.numClippingPlanes,N.numIntersection=y.numClipIntersection,N.vertexAlphas=y.vertexAlphas,N.vertexTangents=y.vertexTangents,N.toneMapping=y.toneMapping}function zo(h,y,N,O,P){y.isScene!==!0&&(y=Te),Oe.resetTextureUnits();const Q=y.fog,se=O.isMeshStandardMaterial?y.environment:null,pe=B===null?x.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:vi,ue=(O.isMeshStandardMaterial?rt:dt).get(O.envMap||se),we=O.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Pe=!!N.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Ae=!!N.morphAttributes.position,Be=!!N.morphAttributes.normal,We=!!N.morphAttributes.color;let it=jt;O.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(it=x.toneMapping);const $e=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,qe=$e!==void 0?$e.length:0,Re=ve.get(O),et=l.state.lights;if(Xe===!0&&(z===!0||h!==S)){const _t=h===S&&O.id===v;te.setState(O,h,_t)}let He=!1;O.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==et.state.version||Re.outputColorSpace!==pe||P.isBatchedMesh&&Re.batching===!1||!P.isBatchedMesh&&Re.batching===!0||P.isBatchedMesh&&Re.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&Re.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&Re.instancing===!1||!P.isInstancedMesh&&Re.instancing===!0||P.isSkinnedMesh&&Re.skinning===!1||!P.isSkinnedMesh&&Re.skinning===!0||P.isInstancedMesh&&Re.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&Re.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&Re.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&Re.instancingMorph===!1&&P.morphTexture!==null||Re.envMap!==ue||O.fog===!0&&Re.fog!==Q||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==te.numPlanes||Re.numIntersection!==te.numIntersection)||Re.vertexAlphas!==we||Re.vertexTangents!==Pe||Re.morphTargets!==Ae||Re.morphNormals!==Be||Re.morphColors!==We||Re.toneMapping!==it||Re.morphTargetsCount!==qe)&&(He=!0):(He=!0,Re.__version=O.version);let At=Re.currentProgram;He===!0&&(At=Jn(O,y,P));let _n=!1,bt=!1,Cn=!1;const tt=At.getUniforms(),wt=Re.uniforms;if(_e.useProgram(At.program)&&(_n=!0,bt=!0,Cn=!0),O.id!==v&&(v=O.id,bt=!0),_n||S!==h){_e.buffers.depth.getReversed()&&h.reversedDepth!==!0&&(h._reversedDepth=!0,h.updateProjectionMatrix()),tt.setValue(A,"projectionMatrix",h.projectionMatrix),tt.setValue(A,"viewMatrix",h.matrixWorldInverse);const Et=tt.map.cameraPosition;Et!==void 0&&Et.setValue(A,he.setFromMatrixPosition(h.matrixWorld)),ye.logarithmicDepthBuffer&&tt.setValue(A,"logDepthBufFC",2/(Math.log(h.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&tt.setValue(A,"isOrthographic",h.isOrthographicCamera===!0),S!==h&&(S=h,bt=!0,Cn=!0)}if(P.isSkinnedMesh){tt.setOptional(A,P,"bindMatrix"),tt.setOptional(A,P,"bindMatrixInverse");const _t=P.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),tt.setValue(A,"boneTexture",_t.boneTexture,Oe))}P.isBatchedMesh&&(tt.setOptional(A,P,"batchingTexture"),tt.setValue(A,"batchingTexture",P._matricesTexture,Oe),tt.setOptional(A,P,"batchingIdTexture"),tt.setValue(A,"batchingIdTexture",P._indirectTexture,Oe),tt.setOptional(A,P,"batchingColorTexture"),P._colorsTexture!==null&&tt.setValue(A,"batchingColorTexture",P._colorsTexture,Oe));const Ct=N.morphAttributes;if((Ct.position!==void 0||Ct.normal!==void 0||Ct.color!==void 0)&&j.update(P,N,At),(bt||Re.receiveShadow!==P.receiveShadow)&&(Re.receiveShadow=P.receiveShadow,tt.setValue(A,"receiveShadow",P.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(wt.envMap.value=ue,wt.flipEnvMap.value=ue.isCubeTexture&&ue.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&y.environment!==null&&(wt.envMapIntensity.value=y.environmentIntensity),bt&&(tt.setValue(A,"toneMappingExposure",x.toneMappingExposure),Re.needsLights&&Wo(wt,Cn),Q&&O.fog===!0&&Y.refreshFogUniforms(wt,Q),Y.refreshMaterialUniforms(wt,O,H,ne,l.state.transmissionRenderTarget[h.id]),ci.upload(A,Ia(Re),wt,Oe)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ci.upload(A,Ia(Re),wt,Oe),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&tt.setValue(A,"center",P.center),tt.setValue(A,"modelViewMatrix",P.modelViewMatrix),tt.setValue(A,"normalMatrix",P.normalMatrix),tt.setValue(A,"modelMatrix",P.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const _t=O.uniformsGroups;for(let Et=0,bi=_t.length;Et<bi;Et++){const an=_t[Et];Ne.update(an,At),Ne.bind(an,At)}}return At}function Wo(h,y){h.ambientLightColor.needsUpdate=y,h.lightProbe.needsUpdate=y,h.directionalLights.needsUpdate=y,h.directionalLightShadows.needsUpdate=y,h.pointLights.needsUpdate=y,h.pointLightShadows.needsUpdate=y,h.spotLights.needsUpdate=y,h.spotLightShadows.needsUpdate=y,h.rectAreaLights.needsUpdate=y,h.hemisphereLights.needsUpdate=y}function Xo(h){return h.isMeshLambertMaterial||h.isMeshToonMaterial||h.isMeshPhongMaterial||h.isMeshStandardMaterial||h.isShadowMaterial||h.isShaderMaterial&&h.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(h,y,N){const O=ve.get(h);O.__autoAllocateDepthBuffer=h.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),ve.get(h.texture).__webglTexture=y,ve.get(h.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:N,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(h,y){const N=ve.get(h);N.__webglFramebuffer=y,N.__useDefaultFramebuffer=y===void 0};const qo=A.createFramebuffer();this.setRenderTarget=function(h,y=0,N=0){B=h,C=y,I=N;let O=!0,P=null,Q=!1,se=!1;if(h){const ue=ve.get(h);if(ue.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(A.FRAMEBUFFER,null),O=!1;else if(ue.__webglFramebuffer===void 0)Oe.setupRenderTarget(h);else if(ue.__hasExternalTextures)Oe.rebindTextures(h,ve.get(h.texture).__webglTexture,ve.get(h.depthTexture).__webglTexture);else if(h.depthBuffer){const Ae=h.depthTexture;if(ue.__boundDepthTexture!==Ae){if(Ae!==null&&ve.has(Ae)&&(h.width!==Ae.image.width||h.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(h)}}const we=h.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(se=!0);const Pe=ve.get(h).__webglFramebuffer;h.isWebGLCubeRenderTarget?(Array.isArray(Pe[y])?P=Pe[y][N]:P=Pe[y],Q=!0):h.samples>0&&Oe.useMultisampledRTT(h)===!1?P=ve.get(h).__webglMultisampledFramebuffer:Array.isArray(Pe)?P=Pe[N]:P=Pe,L.copy(h.viewport),F.copy(h.scissor),X=h.scissorTest}else L.copy(de).multiplyScalar(H).floor(),F.copy(De).multiplyScalar(H).floor(),X=Ye;if(N!==0&&(P=qo),_e.bindFramebuffer(A.FRAMEBUFFER,P)&&O&&_e.drawBuffers(h,P),_e.viewport(L),_e.scissor(F),_e.setScissorTest(X),Q){const ue=ve.get(h.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+y,ue.__webglTexture,N)}else if(se){const ue=y;for(let we=0;we<h.textures.length;we++){const Pe=ve.get(h.textures[we]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+we,Pe.__webglTexture,N,ue)}}else if(h!==null&&N!==0){const ue=ve.get(h.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ue.__webglTexture,N)}v=-1},this.readRenderTargetPixels=function(h,y,N,O,P,Q,se,pe=0){if(!(h&&h.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=ve.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&se!==void 0&&(ue=ue[se]),ue){_e.bindFramebuffer(A.FRAMEBUFFER,ue);try{const we=h.textures[pe],Pe=we.format,Ae=we.type;if(!ye.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}y>=0&&y<=h.width-O&&N>=0&&N<=h.height-P&&(h.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+pe),A.readPixels(y,N,O,P,Me.convert(Pe),Me.convert(Ae),Q))}finally{const we=B!==null?ve.get(B).__webglFramebuffer:null;_e.bindFramebuffer(A.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(h,y,N,O,P,Q,se,pe=0){if(!(h&&h.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=ve.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&se!==void 0&&(ue=ue[se]),ue)if(y>=0&&y<=h.width-O&&N>=0&&N<=h.height-P){_e.bindFramebuffer(A.FRAMEBUFFER,ue);const we=h.textures[pe],Pe=we.format,Ae=we.type;if(!ye.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Be=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Be),A.bufferData(A.PIXEL_PACK_BUFFER,Q.byteLength,A.STREAM_READ),h.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+pe),A.readPixels(y,N,O,P,Me.convert(Pe),Me.convert(Ae),0);const We=B!==null?ve.get(B).__webglFramebuffer:null;_e.bindFramebuffer(A.FRAMEBUFFER,We);const it=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await jo(A,it,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Be),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,Q),A.deleteBuffer(Be),A.deleteSync(it),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(h,y=null,N=0){const O=Math.pow(2,-N),P=Math.floor(h.image.width*O),Q=Math.floor(h.image.height*O),se=y!==null?y.x:0,pe=y!==null?y.y:0;Oe.setTexture2D(h,0),A.copyTexSubImage2D(A.TEXTURE_2D,N,0,0,se,pe,P,Q),_e.unbindTexture()};const Yo=A.createFramebuffer(),Ko=A.createFramebuffer();this.copyTextureToTexture=function(h,y,N=null,O=null,P=0,Q=null){Q===null&&(P!==0?(Zi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=P,P=0):Q=0);let se,pe,ue,we,Pe,Ae,Be,We,it;const $e=h.isCompressedTexture?h.mipmaps[Q]:h.image;if(N!==null)se=N.max.x-N.min.x,pe=N.max.y-N.min.y,ue=N.isBox3?N.max.z-N.min.z:1,we=N.min.x,Pe=N.min.y,Ae=N.isBox3?N.min.z:0;else{const Ct=Math.pow(2,-P);se=Math.floor($e.width*Ct),pe=Math.floor($e.height*Ct),h.isDataArrayTexture?ue=$e.depth:h.isData3DTexture?ue=Math.floor($e.depth*Ct):ue=1,we=0,Pe=0,Ae=0}O!==null?(Be=O.x,We=O.y,it=O.z):(Be=0,We=0,it=0);const qe=Me.convert(y.format),Re=Me.convert(y.type);let et;y.isData3DTexture?(Oe.setTexture3D(y,0),et=A.TEXTURE_3D):y.isDataArrayTexture||y.isCompressedArrayTexture?(Oe.setTexture2DArray(y,0),et=A.TEXTURE_2D_ARRAY):(Oe.setTexture2D(y,0),et=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,y.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,y.unpackAlignment);const He=A.getParameter(A.UNPACK_ROW_LENGTH),At=A.getParameter(A.UNPACK_IMAGE_HEIGHT),_n=A.getParameter(A.UNPACK_SKIP_PIXELS),bt=A.getParameter(A.UNPACK_SKIP_ROWS),Cn=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,$e.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,$e.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,we),A.pixelStorei(A.UNPACK_SKIP_ROWS,Pe),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ae);const tt=h.isDataArrayTexture||h.isData3DTexture,wt=y.isDataArrayTexture||y.isData3DTexture;if(h.isDepthTexture){const Ct=ve.get(h),_t=ve.get(y),Et=ve.get(Ct.__renderTarget),bi=ve.get(_t.__renderTarget);_e.bindFramebuffer(A.READ_FRAMEBUFFER,Et.__webglFramebuffer),_e.bindFramebuffer(A.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let an=0;an<ue;an++)tt&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ve.get(h).__webglTexture,P,Ae+an),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ve.get(y).__webglTexture,Q,it+an)),A.blitFramebuffer(we,Pe,se,pe,Be,We,se,pe,A.DEPTH_BUFFER_BIT,A.NEAREST);_e.bindFramebuffer(A.READ_FRAMEBUFFER,null),_e.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(P!==0||h.isRenderTargetTexture||ve.has(h)){const Ct=ve.get(h),_t=ve.get(y);_e.bindFramebuffer(A.READ_FRAMEBUFFER,Yo),_e.bindFramebuffer(A.DRAW_FRAMEBUFFER,Ko);for(let Et=0;Et<ue;Et++)tt?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ct.__webglTexture,P,Ae+Et):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ct.__webglTexture,P),wt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,_t.__webglTexture,Q,it+Et):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,_t.__webglTexture,Q),P!==0?A.blitFramebuffer(we,Pe,se,pe,Be,We,se,pe,A.COLOR_BUFFER_BIT,A.NEAREST):wt?A.copyTexSubImage3D(et,Q,Be,We,it+Et,we,Pe,se,pe):A.copyTexSubImage2D(et,Q,Be,We,we,Pe,se,pe);_e.bindFramebuffer(A.READ_FRAMEBUFFER,null),_e.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else wt?h.isDataTexture||h.isData3DTexture?A.texSubImage3D(et,Q,Be,We,it,se,pe,ue,qe,Re,$e.data):y.isCompressedArrayTexture?A.compressedTexSubImage3D(et,Q,Be,We,it,se,pe,ue,qe,$e.data):A.texSubImage3D(et,Q,Be,We,it,se,pe,ue,qe,Re,$e):h.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,Q,Be,We,se,pe,qe,Re,$e.data):h.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,Q,Be,We,$e.width,$e.height,qe,$e.data):A.texSubImage2D(A.TEXTURE_2D,Q,Be,We,se,pe,qe,Re,$e);A.pixelStorei(A.UNPACK_ROW_LENGTH,He),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,At),A.pixelStorei(A.UNPACK_SKIP_PIXELS,_n),A.pixelStorei(A.UNPACK_SKIP_ROWS,bt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Cn),Q===0&&y.generateMipmaps&&A.generateMipmap(et),_e.unbindTexture()},this.initRenderTarget=function(h){ve.get(h).__webglFramebuffer===void 0&&Oe.setupRenderTarget(h)},this.initTexture=function(h){h.isCubeTexture?Oe.setTextureCube(h,0):h.isData3DTexture?Oe.setTexture3D(h,0):h.isDataArrayTexture||h.isCompressedArrayTexture?Oe.setTexture2DArray(h,0):Oe.setTexture2D(h,0),_e.unbindTexture()},this.resetState=function(){C=0,I=0,B=null,_e.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(n),t.unpackColorSpace=st._getUnpackColorSpace()}}const di=256,Bn=6378137,tn=85.0511287798066,dh=Math.PI*Bn,uh=2*dh,Gn=e=>((e+180)%360+360)%360-180,Yr=e=>{const t=Math.max(-tn,Math.min(tn,e))*Math.PI/180;return Bn*Math.log(Math.tan(Math.PI/4+t/2))};function fh(e,n,t){if(!Number.isInteger(t)||t<0||t>30)throw new RangeError("Zoom must be an integer from 0 to 30");const i=2**t,r=Math.floor((Gn(n)+180)/360*i),s=Math.max(-tn,Math.min(tn,e))*Math.PI/180,o=Math.floor((1-Math.asinh(Math.tan(s))/Math.PI)/2*i);return{x:(r%i+i)%i,y:Math.max(0,Math.min(i-1,o)),z:t,n:i}}function hh(e,n,t){const i=fh(e,n,t),r=di*i.n,a=(Gn(n)+180)/360*r,o=Math.max(-tn,Math.min(tn,e))*Math.PI/180,p=(1-Math.asinh(Math.tan(o))/Math.PI)/2*r;return{tile:i,u:a/di-i.x,v:p/di-i.y}}class ph{zoom;anchor;originTile;anchorU;anchorV;latitudeScale;tileSpan;originNorthing;constructor(n,t=12){if(!Number.isFinite(n.lat)||!Number.isFinite(n.lon)||Math.abs(n.lat)>90)throw new RangeError("Anchor must be a valid WGS84 latitude/longitude");this.anchor={lat:Math.max(-tn,Math.min(tn,n.lat)),lon:Gn(n.lon)},this.zoom=t;const i=hh(this.anchor.lat,this.anchor.lon,t);this.originTile=i.tile,this.anchorU=i.u,this.anchorV=i.v,this.latitudeScale=Math.cos(this.anchor.lat*Math.PI/180),this.originNorthing=Yr(this.anchor.lat),this.tileSpan=uh/this.originTile.n*this.latitudeScale}toLocal(n){const t=Gn(n.lon-this.anchor.lon),i=Bn*t*Math.PI/180,r=Yr(n.lat)-this.originNorthing;return{x:i*this.latitudeScale,z:r*this.latitudeScale}}toGeo(n){const t=Gn(this.anchor.lon+n.x/(Bn*this.latitudeScale)*180/Math.PI),i=this.originNorthing+n.z/this.latitudeScale;return{lon:t,lat:(2*Math.atan(Math.exp(i/Bn))-Math.PI/2)*180/Math.PI}}tileOrigin(n,t){return{x:(n-this.anchorU)*this.tileSpan,z:(t+this.anchorV)*this.tileSpan}}tileOffsetAt(n,t){const i=this.anchorU+n/this.tileSpan,r=this.anchorV-t/this.tileSpan,a=Math.floor(i),s=Math.floor(r);return{dx:a>this.originTile.n/2?a-this.originTile.n:a<-this.originTile.n/2?a+this.originTile.n:a,dz:-s||0,u:i-a,v:r-s}}tileAddress(n,t){const i=this.originTile.n;return{x:((this.originTile.x+n)%i+i)%i,y:Math.max(0,Math.min(i-1,this.originTile.y-t)),z:this.zoom,n:i}}}const Oo=[{name:"Midtown Manhattan, New York",lat:40.758,lon:-73.9855,terrain:"URBAN JUNGLE"},{name:"Moab, Utah",lat:38.5733,lon:-109.5498,terrain:"RED ROCK COUNTRY"},{name:"Mount Kisco, New York",lat:41.204,lon:-73.727,terrain:"WESTCHESTER BACKROADS"},{name:"Grand Canyon",lat:36.1069,lon:-112.1129,terrain:"THE BIG DROP"},{name:"Mount Everest",lat:27.9881,lon:86.925,terrain:"ROOF OF THE WORLD"},{name:"San Francisco",lat:37.7749,lon:-122.4194,terrain:"HILL CLIMBER"},{name:"Tokyo, Japan",lat:35.6762,lon:139.6503,terrain:"NEON TRAILS"},{name:"Sahara Desert",lat:23.4162,lon:25.6628,terrain:"ENDLESS DUNES"},{name:"Swiss Alps",lat:46.8182,lon:9.2275,terrain:"HIGH ALTITUDE"}];function mh(e){const n=e.trim().match(/^\s*(-?\d+(?:\.\d+)?)\s*[, ]\s*(-?\d+(?:\.\d+)?)\s*$/);if(!n)return null;const t=Number(n[1]),i=Number(n[2]);return Math.abs(t)<=90&&Math.abs(i)<=180?{name:`${t.toFixed(4)}, ${i.toFixed(4)}`,lat:t,lon:i}:null}let Kr=0;const Gi=new Map;async function gh(e){const n=mh(e);if(n)return[n];const t=e.toLowerCase().trim();if(!t)return[];if(Gi.has(t))return Gi.get(t);const i=Math.max(0,1100-(Date.now()-Kr));i&&await new Promise(p=>setTimeout(p,i)),Kr=Date.now();const r=new URL("https://nominatim.openstreetmap.org/search");r.search=new URLSearchParams({q:e,format:"jsonv2",limit:"5"}).toString();const a=await fetch(r,{headers:{Accept:"application/json"}});if(!a.ok)throw new Error(`Location search unavailable (${a.status})`);const o=(await a.json()).map(p=>({name:p.display_name.split(",").slice(0,3).join(",").trim(),lat:+p.lat,lon:+p.lon}));return Gi.set(t,o),o}function _h(e,n,t,i){const r=Math.max(0,Math.min(n-1,t*(n-1))),a=Math.max(0,Math.min(n-1,i*(n-1))),s=Math.floor(r),o=Math.floor(a),p=Math.min(n-1,s+1),u=Math.min(n-1,o+1),m=r-s,f=a-o,g=(_,T)=>e[T*n+_]??0;return(g(s,o)*(1-m)+g(p,o)*m)*(1-f)+(g(s,u)*(1-m)+g(p,u)*m)*f}function $r(e,n,t){const i=new Float32Array((t+1)**2);for(let r=0;r<=t;r++)for(let a=0;a<=t;a++)i[r*(t+1)+a]=_h(e,n,a/t,r/t);return i}function Zr(e,n,t,i){const r=Math.max(0,Math.min(n,t*n)),a=Math.max(0,Math.min(n,i*n)),s=Math.min(n-1,Math.floor(r)),o=Math.min(n-1,Math.floor(a)),p=r-s,u=a-o,m=n+1,f=e[o*m+s]??0,g=e[o*m+s+1]??0,_=e[(o+1)*m+s]??0,T=e[(o+1)*m+s+1]??0;return p>=u?f*(1-p)+g*(p-u)+T*u:f*(1-u)+T*p+_*(u-p)}function vh(e){const n=new Map,t=new Set;for(const i of e){const r=i.segments+1;for(let a=0;a<=i.segments;a++)for(const[s,o]of[[a,0],[a,i.segments],[0,a],[i.segments,a]]){const p=o*r+s,u=`${i.dx*i.segments+s},${i.dz*i.segments-o}`,m=n.get(u)??[];m.push({tile:i,index:p}),n.set(u,m)}}for(const i of n.values()){if(i.length<2)continue;const r=i.reduce((a,s)=>a+s.tile.grid[s.index],0)/i.length;for(const a of i)a.tile.grid[a.index]!==r&&(a.tile.grid[a.index]=r,t.add(a.tile))}return t}const Hi=12,Pt=di,Sh=36,Kt=new Map;function Qr(e,n,t){const i=`${t}/${e}/${n}`;if(Kt.has(i)){const a=Kt.get(i);return Kt.delete(i),Kt.set(i,a),a}const r=(async()=>{try{const a=new Image;a.crossOrigin="anonymous",a.src=`https://s3.amazonaws.com/elevation-tiles-prod/terrarium/${t}/${e}/${n}.png`,await new Promise((m,f)=>{a.onload=()=>m(),a.onerror=()=>f(new Error("terrain tile unavailable"))});const s=document.createElement("canvas");s.width=Pt,s.height=Pt;const o=s.getContext("2d",{willReadFrequently:!0});if(!o)throw new Error("canvas unavailable");o.drawImage(a,0,0,Pt,Pt);const p=o.getImageData(0,0,Pt,Pt).data,u=new Float32Array(Pt*Pt);for(let m=0;m<u.length;m++)u[m]=p[m*4]*256+p[m*4+1]+p[m*4+2]/256-32768;return{heights:u}}catch{return{heights:new Float32Array(Pt*Pt)}}})();for(Kt.set(i,r);Kt.size>Sh;)Kt.delete(Kt.keys().next().value);return r}class Eh{group=new Wt;place=null;frame=null;heightSampleMs=0;heightSamples=0;tileBuildMs=0;tileBuilds=0;detailQuality=1;baseline=0;tiles=new Map;requests=new Set;coverage={x:NaN,z:NaN};generation=0;centerSegments;activeTerrainShader=null;biome={desert:1,alpine:0};material;constructor(n=127){this.centerSegments=n,this.material=new pt({color:16777215,roughness:.96,metalness:0,vertexColors:!0}),this.material.onBeforeCompile=t=>{t.uniforms.uRumbleDesert={value:this.biome.desert},t.uniforms.uRumbleAlpine={value:this.biome.alpine},t.uniforms.uRumbleDetail={value:this.detailQuality},this.activeTerrainShader=t,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vRumbleWorld;
varying float vRumbleUp;`),t.vertexShader=t.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
vRumbleUp = normal.y;`),t.vertexShader=t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vRumbleWorld = position;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vRumbleWorld;
varying float vRumbleUp;
uniform float uRumbleDesert;
uniform float uRumbleAlpine;
uniform float uRumbleDetail;`),t.fragmentShader=t.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        float rumbleSlope = 1.0 - clamp(vRumbleUp, 0.0, 1.0);
        float rumbleRock = smoothstep(0.12, 0.52, rumbleSlope);
        // Fine non-periodic-looking surface breakup avoids broad stripes at distance.
        float rumbleGrain = sin(vRumbleWorld.x * 1.71 + sin(vRumbleWorld.z * 0.93) * 2.1) * sin(vRumbleWorld.z * 1.37 + vRumbleWorld.x * 0.43);
        vec3 rumbleWarmRock = vec3(0.52, 0.335, 0.19);
        vec3 rumbleCoolRock = vec3(0.37, 0.405, 0.36);
        vec3 rumbleRockColor = mix(rumbleCoolRock, rumbleWarmRock, uRumbleDesert);
        diffuseColor.rgb *= 0.98 + rumbleGrain * (0.035 * uRumbleDetail);
        diffuseColor.rgb = mix(diffuseColor.rgb, rumbleRockColor * (0.96 + rumbleGrain * (0.045 * uRumbleDetail)), rumbleRock * 0.58);
        float rumbleAlpineSnow = uRumbleAlpine * smoothstep(300.0, 650.0, vRumbleWorld.y) * smoothstep(0.35, 0.8, vRumbleUp);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.78, 0.81, 0.77), rumbleAlpineSnow * 0.82);`)},this.material.customProgramCacheKey=()=>"rumble-terrain-slope-biome-v1"}async load(n){this.clear();const t=++this.generation;this.place=n,this.frame=new ph(n,Hi);const i=n.name.toLowerCase();this.biome.desert=/moab|grand canyon|sahara|utah|arizona/i.test(i)?1:0,this.biome.alpine=/alps|everest|mountain|swiss/i.test(i)?1:0,this.activeTerrainShader&&(this.activeTerrainShader.uniforms.uRumbleDesert.value=this.biome.desert,this.activeTerrainShader.uniforms.uRumbleAlpine.value=this.biome.alpine);const r=this.frame.tileAddress(0,0),a=await Qr(r.x,r.y,Hi);if(t!==this.generation)return;const s=$r(a.heights,Pt,this.centerSegments);this.baseline=Zr(s,this.centerSegments,this.frame.anchorU,this.frame.anchorV),this.install(0,0,a,this.centerSegments,s),this.ensureRegion(0,0)}key(n,t){return`${n},${t}`}address(n,t){return this.frame.tileAddress(n,t)}async ensureRegion(n,t){const i=this.frame;if(!i)return;const r=i.tileOffsetAt(n,t),a=r.dx,s=r.dz;if(this.coverage.x===a&&this.coverage.z===s)return;this.coverage={x:a,z:s};const o=this.generation,p=[],u=this.centerSegments;for(let m=s-1;m<=s+1;m++)for(let f=a-1;f<=a+1;f++){const g=this.key(f,m),_=f===a&&m===s?this.centerSegments:u,T=this.tiles.get(g);T&&T.segments!==_&&(this.group.remove(T.mesh),T.mesh.geometry.dispose(),this.tiles.delete(g));const M=`${o}:${g}`;if(this.tiles.has(g)||this.requests.has(M))continue;this.requests.add(M);const c=this.address(f,m);p.push(Qr(c.x,c.y,Hi).then(l=>{o===this.generation&&Math.abs(f-this.coverage.x)<=1&&Math.abs(m-this.coverage.z)<=1&&this.install(f,m,l,_)}).finally(()=>this.requests.delete(M)))}for(const[m,f]of this.tiles)(Math.abs(f.dx-a)>1||Math.abs(f.dz-s)>1)&&(this.group.remove(f.mesh),f.mesh.geometry.dispose(),this.tiles.delete(m));await Promise.all(p)}install(n,t,i,r=63,a){const s=this.key(n,t);if(this.tiles.has(s))return;const o=performance.now(),p=this.frame,u=a??$r(i.heights,Pt,r),m=new gn,f=new Float32Array((r+1)**2*3),g=[],_=[];let T=1/0,M=-1/0;for(const x of u)T=Math.min(T,x),M=Math.max(M,x);const c=/moab|grand canyon|sahara|utah|arizona/i.test(this.place?.name??""),l=(c?["#d0b587","#b99360","#977046","#796044"]:["#c9c1a6","#a49c75","#758557","#657355"]).map(x=>new Ve(x)),b=p.tileOrigin(n,t);for(let x=0;x<=r;x++)for(let D=0;D<=r;D++){const C=x*(r+1)+D,I=u[C],B=(I-T)/Math.max(1,M-T);f[C*3]=b.x+D/r*p.tileSpan,f[C*3+1]=St.clamp((I-this.baseline)*1.25,-900,1800),f[C*3+2]=b.z-x/r*p.tileSpan;const v=l[B>.76?0:B>.49?1:B>.22?2:3];g.push(v.r,v.g,v.b)}for(let x=0;x<r;x++)for(let D=0;D<r;D++){const C=x*(r+1)+D,I=C+1,B=C+r+1,v=B+1;_.push(C,I,v,C,v,B)}m.setIndex(_),m.setAttribute("position",new Jt(f,3)),m.setAttribute("color",new oa(g,3)),m.computeVertexNormals();const R=new ot(m,this.material);R.receiveShadow=!0,R.userData.kind="terrain",this.group.add(R),this.tiles.set(s,{data:i,grid:u,mesh:R,segments:r,dx:n,dz:t}),this.reconcileSharedEdges(),this.tileBuildMs+=performance.now()-o,this.tileBuilds++}reconcileSharedEdges(){const n=vh(Array.from(this.tiles.values()));for(const t of n)this.rebuildGeometry(t)}rebuildGeometry(n){const{segments:t,grid:i,dx:r,dz:a}=n,s=this.frame,o=new gn,p=new Float32Array((t+1)**2*3),u=[],m=[];let f=1/0,g=-1/0;for(const c of i)f=Math.min(f,c),g=Math.max(g,c);const _=/moab|grand canyon|sahara|utah|arizona/i.test(this.place?.name??""),T=(_?["#d0b587","#b99360","#977046","#796044"]:["#c9c1a6","#a49c75","#758557","#657355"]).map(c=>new Ve(c)),M=s.tileOrigin(r,a);for(let c=0;c<=t;c++)for(let l=0;l<=t;l++){const b=c*(t+1)+l,R=i[b],x=(R-f)/Math.max(1,g-f);p[b*3]=M.x+l/t*s.tileSpan,p[b*3+1]=St.clamp((R-this.baseline)*1.25,-900,1800),p[b*3+2]=M.z-c/t*s.tileSpan;const D=T[x>.76?0:x>.49?1:x>.22?2:3];u.push(D.r,D.g,D.b)}for(let c=0;c<t;c++)for(let l=0;l<t;l++){const b=c*(t+1)+l,R=b+1,x=b+t+1,D=x+1;m.push(b,R,D,b,D,x)}o.setIndex(m),o.setAttribute("position",new Jt(p,3)),o.setAttribute("color",new oa(u,3)),o.computeVertexNormals(),n.mesh.geometry.dispose(),n.mesh.geometry=o}heightAt(n,t){if(!this.frame||!this.tiles.size)return 0;const i=performance.now();let r=this.frame.tileOffsetAt(n,t);(r.dx!==this.coverage.x||r.dz!==this.coverage.z)&&this.ensureRegion(n,t);let a=this.tiles.get(this.key(r.dx,r.dz));if(a||(a=this.tiles.get(this.key(0,0)),r=this.frame.tileOffsetAt(n,t)),!a)return 0;const s=a===this.tiles.get(this.key(r.dx,r.dz))?r.u:St.clamp((n-this.frame.tileOrigin(a.dx,a.dz).x)/this.frame.tileSpan,0,1),o=a===this.tiles.get(this.key(r.dx,r.dz))?r.v:St.clamp((this.frame.tileOrigin(a.dx,a.dz).z-t)/this.frame.tileSpan,0,1),p=(Zr(a.grid,a.segments,s,o)-this.baseline)*1.25;return this.heightSamples++,this.heightSampleMs+=performance.now()-i,p}takePerformanceSample(){const n={heightSamples:this.heightSamples,heightSampleMs:this.heightSampleMs,tileBuilds:this.tileBuilds,tileBuildMs:this.tileBuildMs};return this.heightSamples=0,this.heightSampleMs=0,this.tileBuilds=0,this.tileBuildMs=0,n}setVisualQuality(n){this.detailQuality=n==="low"?.45:n==="medium"?.72:1,this.activeTerrainShader&&(this.activeTerrainShader.uniforms.uRumbleDetail.value=this.detailQuality)}clear(){this.generation++;for(const n of this.tiles.values())this.group.remove(n.mesh),n.mesh.geometry.dispose();this.tiles.clear(),this.requests.clear(),this.coverage={x:NaN,z:NaN}}dispose(){this.clear(),this.material.dispose()}}function mi(e,n){return e.map(([t,i])=>n.toLocal({lat:t,lon:i}))}const jr=new Map;let ki=null;const Vi=(e="none")=>({buildings:[],roads:[],source:e});function Mh(e,n,t){return t.areas.find(i=>n>=i.bbox[0]&&e>=i.bbox[1]&&n<=i.bbox[2]&&e<=i.bbox[3])}function Fo(e){if(!e)return 0;const n=e.trim().match(/^([\d.]+)\s*(m|meter|meters|ft|feet)?$/i);if(!n)return 0;const t=Number(n[1]);return Number.isFinite(t)?t*(/^(ft|feet)$/i.test(n[2]??"")?.3048:1):0}function Bo(e){const n=(e.building??"").toLowerCase(),t=`${e.amenity??""} ${e.shop??""} ${e.office??""} ${e.tourism??""}`.toLowerCase();return/industrial|warehouse|factory|manufacture/.test(`${n} ${e.industrial??""}`)?"industrial":/commercial|retail|office|hotel|apartments|civic|university|public/.test(n)||/hotel|motel|townhall|library|school|college|university|hospital|commercial|retail/.test(t)?"commercial":/house|residential|detached|terrace|semidetached_house|bungalow/.test(n)||/residential/.test(e["building:use"]??"")?"residential":"other"}function xh(e,n=0){const t=Fo(e.height);if(t>0)return St.clamp(t,3,180);const i=Number.parseFloat(e["building:levels"]??"");if(Number.isFinite(i)&&i>0)return St.clamp(i,1,50)*3.2;switch(Bo(e)){case"commercial":return 14;case"industrial":return 8;case"residential":return 7.5;default:return n>1600?18:n>500?12:n>120?7:4.5}}function Sa(e){const n=(e.highway??"").toLowerCase();return!n||e.tunnel&&e.tunnel!=="no"||e.bridge&&e.bridge!=="no"?null:/^(motorway|motorway_link|trunk|trunk_link|primary|primary_link|secondary|secondary_link)$/.test(n)?"major":/^(residential|tertiary|tertiary_link|unclassified|living_street|service|road)$/.test(n)?"street":n==="track"?"track":/^(path|footway|bridleway|cycleway|pedestrian|steps)$/.test(n)?/dirt|gravel|ground|earth|sand|mud/.test(e.surface??"")?"track":"path":null}function Th(e,n=Sa(e)){const t=Fo(e.width);if(t>0)return St.clamp(t,.8,18);const i=(e.surface??"").toLowerCase();return n==="major"?9:n==="street"?5.5:n==="path"?/^(steps|footway)$/.test(e.highway??"")?1.8:2.4:n==="track"?/gravel|dirt|ground|earth|sand|mud/.test(i)?3.4:2.6:0}async function Ah(e){ki||(ki=fetch("./geo/manifest.json").then(a=>a.ok?a.json():null).catch(()=>null));const n=await ki;if(!n)return Vi("coverage manifest unavailable");const t=Mh(e.lat,e.lon,n);if(!t)return Vi();const i=jr.get(t.id);if(i)return i;const r=fetch(`./geo/${t.asset}`).then(async a=>{if(!a.ok)throw new Error(`Geographic package ${t.id} unavailable (${a.status})`);const s=await a.json();return{buildings:s.buildings??[],roads:s.roads??[],source:s.source??t.source,areaId:t.id}}).catch(()=>Vi("geographic package unavailable"));return jr.set(t.id,r),r}const Jr={major:new pt({color:3423038,roughness:.98,metalness:0}),street:new pt({color:4671818,roughness:1,metalness:0}),path:new pt({color:8749686,roughness:1,metalness:0}),track:new pt({color:9137486,roughness:1,metalness:0})},bh={residential:11705472,commercial:9410456,industrial:7830390,other:10524549},eo=Object.fromEntries(Object.entries(bh).map(([e,n])=>[e,new pt({color:n,roughness:e==="commercial"?.72:.9,metalness:e==="commercial"?.08:0,side:Dt,emissive:n,emissiveIntensity:.06})]));function to(e,n,t){const i=Sa(e.tags);if(!i||e.coords.length<2)return null;const r=mi(e.coords,n).filter(f=>Number.isFinite(f.x)&&Number.isFinite(f.z));if(r.length<2)return null;const a=Th(e.tags,i),s=[],o=[];for(let f=0;f<r.length;f++){const g=r[Math.max(0,f-1)],_=r[Math.min(r.length-1,f+1)],T=_.x-g.x,M=_.z-g.z,c=Math.hypot(T,M)||1;let l=-M/c,b=T/c;if(f>0&&f<r.length-1){const R=r[f-1],x=r[f],D=r[f+1],C=Math.hypot(x.x-R.x,x.z-R.z)||1,I=Math.hypot(D.x-x.x,D.z-x.z)||1,B=-(x.z-R.z)/C-(D.z-x.z)/I,v=(x.x-R.x)/C+(D.x-x.x)/I,S=Math.hypot(B,v)||1;l=B/S,b=v/S;const L=Math.max(.45,Math.abs(l*(-M/c)+b*(T/c))),F=Math.min(a*.9,a*.5/L);s.push(new at(x.x+l*F,x.z+b*F)),o.push(new at(x.x-l*F,x.z-b*F))}else s.push(new at(r[f].x+l*a/2,r[f].z+b*a/2)),o.push(new at(r[f].x-l*a/2,r[f].z-b*a/2))}const p=[],u=(f,g)=>p.push(f.x,t(f.x,f.y)+g,f.y);for(let f=0;f<r.length-1;f++)u(s[f],.1),u(s[f+1],.1),u(o[f],.1),u(o[f],.1),u(s[f+1],.1),u(o[f+1],.1);const m=new gn;return m.setAttribute("position",new oa(p,3)),{kind:i,geometry:m,width:a}}function Rh(e,n,t=60){let i=t*t,r;for(const a of e){const s=Sa(a.tags);if(!s||s==="path"||a.coords.length<2)continue;const o=mi(a.coords,n);for(let p=0;p<o.length-1;p++){const u=o[p],m=o[p+1],f=m.x-u.x,g=m.z-u.z,_=f*f+g*g;if(_<.01)continue;const T=St.clamp(-(u.x*f+u.z*g)/_,0,1),M=u.x+f*T,c=u.z+g*T,l=M*M+c*c;l<i&&(i=l,r=Math.atan2(f,g))}}return r}class wh{group=new Wt;roadsGroup=new Wt;list=[];status={source:"none",buildings:0,roads:0,fallbacks:0,skippedRoads:0,message:"MAP DATA · LOADING"};loadToken=0;cellSize=256;cells=new Map;visibleBuildings=new Set;lastCullAt=0;lastCullX=Number.NaN;lastCullZ=Number.NaN;cellKey(n,t){return`${Math.floor(n/this.cellSize)},${Math.floor(t/this.cellSize)}`}updateVisibility(n,t,i=900,r=!1){const a=performance.now();if(!r&&(a-this.lastCullAt<350||Math.hypot(n-this.lastCullX,t-this.lastCullZ)<10))return;this.lastCullAt=a,this.lastCullX=n,this.lastCullZ=t;const s=Math.ceil(i/this.cellSize),o=Math.floor(n/this.cellSize),p=Math.floor(t/this.cellSize),u=new Set;for(let f=o-s;f<=o+s;f++)for(let g=p-s;g<=p+s;g++)for(const _ of this.cells.get(`${f},${g}`)??[])u.add(_);const m=i*i;for(const f of[...this.visibleBuildings])!f.broken&&u.has(f)&&(f.x-n)**2+(f.z-t)**2<=m||(f.batch&&f.instanceId!==void 0&&f.batch.setVisibleAt(f.instanceId,!1),this.visibleBuildings.delete(f));for(const f of u)!f.broken&&(f.x-n)**2+(f.z-t)**2<=m&&!this.visibleBuildings.has(f)&&(f.batch&&f.instanceId!==void 0&&f.batch.setVisibleAt(f.instanceId,!0),this.visibleBuildings.add(f))}async load(n,t,i,r){this.reset(i);const a=this.loadToken,s=await Ah(n);if(a!==this.loadToken)return this.status;const o=new Map;for(const g of s.buildings){const _=mi(g.coords,r).map(de=>new at(de.x,de.z));_.length>3&&_[0].distanceToSquared(_[_.length-1])<.01&&_.pop();const T=_.map(de=>de.x),M=_.map(de=>de.y);if(_.length<3)continue;const c=(Math.min(...T)+Math.max(...T))/2,l=(Math.min(...M)+Math.max(...M))/2,b=Math.max(2,Math.max(...T)-Math.min(...T)),R=Math.max(2,Math.max(...M)-Math.min(...M)),x=de=>mi(de,r).map(De=>new at(De.x-c,-(De.z-l))),D=de=>{const De=new _l;return de.forEach((Ye,Qe)=>Qe?De.lineTo(Ye.x,Ye.y):De.moveTo(Ye.x,Ye.y)),De.closePath(),De},C=_.map(de=>new at(de.x-c,-(de.y-l))),I=new sa;C.forEach((de,De)=>De?I.lineTo(de.x,de.y):I.moveTo(de.x,de.y)),I.closePath();const B=(g.holes??[]).map(x).filter(de=>de.length>=3);for(const de of B)I.holes.push(D(de));const v=Bo(g.tags),S=xh(g.tags,b*R),L=new Co(I,{depth:1,bevelEnabled:!1,curveSegments:1});L.rotateX(-Math.PI/2),L.scale(1,S,1);const F=eo[v],X=new Ve(F.color);if(g.tags["building:colour"]||g.tags.colour)try{X.set(g.tags["building:colour"]??g.tags.colour)}catch{}const q=new ot(L,F);q.position.set(c,t(c,l),l),q.castShadow=!0,q.receiveShadow=!0,q.userData={kind:"osm-building",osmId:g.id,tags:g.tags,category:v};const K=t(c,l),V={id:g.id,source:"osm",category:v,mesh:q,x:c,z:l,w:b,d:R,h:S,footprint:_,holes:B.map(de=>de.map(De=>new at(De.x+c,l-De.y))),tags:g.tags,baseY:K,broken:!1},ne=new Ve;ne.r=F.color.r>0?X.r/F.color.r:1,ne.g=F.color.g>0?X.g/F.color.g:1,ne.b=F.color.b>0?X.b/F.color.b:1,V.mesh.userData.instanceColor=ne,this.list.push(V),i?.addBuilding(V,K);const H=this.cellKey(c,l),ge=this.cells.get(H)??[];ge.push(V),this.cells.set(H,ge);const be=o.get(v)??[];be.push(V),o.set(v,be)}for(const[g,_]of o){const T=_.map(b=>b.mesh.geometry),M=T.reduce((b,R)=>b+R.getAttribute("position").count,0),c=T.reduce((b,R)=>b+(R.index?.count??R.getAttribute("position").count),0),l=new gl(_.length,M,Math.max(M,c),eo[g]);l.name=`geographic-buildings-${g}`,l.castShadow=!0,l.receiveShadow=!0;for(const b of _){const R=b.mesh;R.updateMatrix();const x=l.addGeometry(R.geometry),D=l.addInstance(x);l.setMatrixAt(D,R.matrix),l.setColorAt(D,R.userData.instanceColor),b.batch=l,b.instanceId=D,b.mesh=l,b.renderVisible=!0,R.geometry.dispose()}l.computeBoundingBox(),l.computeBoundingSphere(),this.group.add(l)}this.updateVisibility(0,0,900,!0);let p=0,u=0;const m={major:[],street:[],path:[],track:[]};for(const g of s.roads){const _=to(g,r,t);if(!_){u++;continue}m[_.kind].push(_.geometry.getAttribute("position").array),_.geometry.dispose(),p++}for(const g of["major","street","path","track"]){const _=m[g];if(!_.length)continue;const T=_.reduce((R,x)=>R+x.length,0),M=new Float32Array(T);let c=0;for(const R of _)M.set(R,c),c+=R.length;const l=new gn;l.setAttribute("position",new Jt(M,3)),l.computeVertexNormals();const b=new ot(l,Jr[g]);b.name=`osm-road-${g}`,b.userData={kind:"osm-road",roadWays:_.length},b.frustumCulled=!0,this.roadsGroup.add(b)}const f=s.buildings.length>0||p>0;return this.status={source:f?"osm":"none",areaId:s.areaId,buildings:s.buildings.length,roads:p,fallbacks:0,skippedRoads:u,heading:Rh(s.roads,r),message:f?`OSM MAP · ${s.buildings.length} BUILDINGS · ${p} STREET/PATH LINES`:s.source==="none"?"TERRAIN ONLY · NO PACKAGED MAP DATA":"MAP DATA PACKAGE UNAVAILABLE · TERRAIN ONLY"},this.status}addFixtureRoad(n,t){const i=[-12,140].map(s=>{const o=n.toGeo({x:0,z:s});return[o.lat,o.lon]}),r=to({tags:{highway:"track",surface:"dirt",width:"4"},coords:i},n,t);if(!r)return null;r.geometry.computeVertexNormals();const a=new ot(r.geometry,Jr.track);return a.name="fixture-dirt-track",a.userData={kind:"fixture-road",source:"fixture"},this.roadsGroup.add(a),a}addPracticeCourse(n,t){return this.list.some(i=>i.source==="fallback")?0:(this.addBarriers(n,t),this.status.fallbacks=this.list.filter(i=>i.source==="fallback").length,this.status.fallbacks)}addBarriers(n,t){const i=new pt({color:13132085,roughness:.8});for(let r=0;r<4;r++)for(let a=-2;a<=2;a++){if((r+a)%3===0)continue;const s=3+(r*7+a*11+30)%3,o=3,p=2.5+(r*13+a*5+40)%3,u=a*5,m=28+r*9,f=new ot(new en(s,p,o),i.clone());f.position.set(u,n(u,m)+p/2,m),f.castShadow=!0,f.receiveShadow=!0,f.userData={kind:"destructible-barrier",ownedMaterial:!0},this.group.add(f);const g={id:`practice-${r}-${a}`,source:"fallback",category:"practice",mesh:f,x:u,z:m,w:s,d:o,h:p,broken:!1};g.baseY=n(u,m),this.list.push(g),t?.addBuilding(g,g.baseY)}}addFixtureBuilding(n,t,i,r,a,s={w:7,d:6,h:9}){const{w:o,d:p,h:u}=s,m=new en(o,u,p),f=new pt({color:11705472,roughness:.9}),g=r(t,i),_=new ot(m,f);_.position.set(t,g+u/2,i),_.castShadow=!0,_.receiveShadow=!0,_.userData.ownedMaterial=!0,_.userData={kind:"local-test-fixture",fixtureId:n},this.group.add(_);const T={id:n,source:"fixture",category:u>18?"commercial":"residential",mesh:_,x:t,z:i,w:o,d:p,h:u,baseY:g,broken:!1};return this.list.push(T),a?.addBuilding(T,g),T}break(n){return n.broken||n.mesh.parent!==this.group?!1:(n.broken=!0,this.visibleBuildings.delete(n),n.batch&&n.instanceId!==void 0?n.batch.setVisibleAt(n.instanceId,!1):(this.group.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.userData.ownedMaterial&&(Array.isArray(n.mesh.material)?n.mesh.material.forEach(t=>t.dispose()):n.mesh.material.dispose())),!0)}reset(n){this.loadToken++;for(const t of this.list)n?.removeBuilding(t);for(const t of[...this.group.children]){this.group.remove(t);const i=t;i.geometry?.dispose(),i.userData.ownedMaterial&&(Array.isArray(i.material)?i.material.forEach(r=>r.dispose()):i.material?.dispose())}for(const t of this.roadsGroup.children)this.roadsGroup.remove(t),t.geometry.dispose();this.list=[],this.cells.clear(),this.visibleBuildings.clear(),this.lastCullAt=0,this.lastCullX=Number.NaN,this.lastCullZ=Number.NaN,this.status={source:"none",buildings:0,roads:0,fallbacks:0,skippedRoads:0,message:"MAP DATA · LOADING"}}}const Pn=new ae;function yt(e,n,t,i,r,a){const s=2*Math.PI*r/4,o=Math.max(a-2*r,0),p=Math.PI/4;Pn.copy(n),Pn[i]=0,Pn.normalize();const u=.5*s/(s+o),m=1-Pn.angleTo(e)/p;return Math.sign(Pn[t])===1?m*u:o/(s+o)+u+u*(1-m)}class Ea extends en{constructor(n=1,t=1,i=1,r=2,a=.1){const s=r*2+1;if(a=Math.min(n/2,t/2,i/2,a),super(1,1,1,s,s,s),this.type="RoundedBoxGeometry",this.parameters={width:n,height:t,depth:i,segments:r,radius:a},s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const p=new ae,u=new ae,m=new ae(n,t,i).divideScalar(2).subScalar(a),f=this.attributes.position.array,g=this.attributes.normal.array,_=this.attributes.uv.array,T=f.length/6,M=new ae,c=.5/s;for(let l=0,b=0;l<f.length;l+=3,b+=2)switch(p.fromArray(f,l),u.copy(p),u.x-=Math.sign(u.x)*c,u.y-=Math.sign(u.y)*c,u.z-=Math.sign(u.z)*c,u.normalize(),f[l+0]=m.x*Math.sign(p.x)+u.x*a,f[l+1]=m.y*Math.sign(p.y)+u.y*a,f[l+2]=m.z*Math.sign(p.z)+u.z*a,g[l+0]=u.x,g[l+1]=u.y,g[l+2]=u.z,Math.floor(l/T)){case 0:M.set(1,0,0),_[b+0]=yt(M,u,"z","y",a,i),_[b+1]=1-yt(M,u,"y","z",a,t);break;case 1:M.set(-1,0,0),_[b+0]=1-yt(M,u,"z","y",a,i),_[b+1]=1-yt(M,u,"y","z",a,t);break;case 2:M.set(0,1,0),_[b+0]=1-yt(M,u,"x","z",a,n),_[b+1]=yt(M,u,"z","x",a,i);break;case 3:M.set(0,-1,0),_[b+0]=1-yt(M,u,"x","z",a,n),_[b+1]=1-yt(M,u,"z","x",a,i);break;case 4:M.set(0,0,1),_[b+0]=1-yt(M,u,"x","y",a,n),_[b+1]=1-yt(M,u,"y","x",a,t);break;case 5:M.set(0,0,-1),_[b+0]=yt(M,u,"x","y",a,n),_[b+1]=1-yt(M,u,"y","x",a,t);break}}static fromJSON(n){return new Ea(n.width,n.height,n.depth,n.segments,n.radius)}}function Ln(e,n=!1){const t=e[0].index!==null,i=new Set(Object.keys(e[0].attributes)),r=new Set(Object.keys(e[0].morphAttributes)),a={},s={},o=e[0].morphTargetsRelative,p=new gn;let u=0;for(let m=0;m<e.length;++m){const f=e[m];let g=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const _ in f.attributes){if(!i.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+'. All geometries must have compatible attributes; make sure "'+_+'" attribute exists among all geometries, or in none of them.'),null;a[_]===void 0&&(a[_]=[]),a[_].push(f.attributes[_]),g++}if(g!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const _ in f.morphAttributes){if(!r.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+".  .morphAttributes must be consistent throughout all geometries."),null;s[_]===void 0&&(s[_]=[]),s[_].push(f.morphAttributes[_])}if(n){let _;if(t)_=f.index.count;else if(f.attributes.position!==void 0)_=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". The geometry must have either an index or a position attribute"),null;p.addGroup(u,_,m),u+=_}}if(t){let m=0;const f=[];for(let g=0;g<e.length;++g){const _=e[g].index;for(let T=0;T<_.count;++T)f.push(_.getX(T)+m);m+=e[g].attributes.position.count}p.setIndex(f)}for(const m in a){const f=no(a[m]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+m+" attribute."),null;p.setAttribute(m,f)}for(const m in s){const f=s[m][0].length;if(f===0)break;p.morphAttributes=p.morphAttributes||{},p.morphAttributes[m]=[];for(let g=0;g<f;++g){const _=[];for(let M=0;M<s[m].length;++M)_.push(s[m][M][g]);const T=no(_);if(!T)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+m+" morphAttribute."),null;p.morphAttributes[m].push(T)}}return p}function no(e){let n,t,i,r=-1,a=0;for(let u=0;u<e.length;++u){const m=e[u];if(n===void 0&&(n=m.array.constructor),n!==m.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=m.itemSize),t!==m.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=m.normalized),i!==m.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=m.gpuType),r!==m.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=m.count*t}const s=new n(a),o=new Jt(s,t,i);let p=0;for(let u=0;u<e.length;++u){const m=e[u];if(m.isInterleavedBufferAttribute){const f=p/t;for(let g=0,_=m.count;g<_;g++)for(let T=0;T<t;T++){const M=m.getComponent(g,T);o.setComponent(g+f,T,M)}}else s.set(m.array,p);p+=m.count*t}return r!==void 0&&(o.gpuType=r),o}const io=["front-left","front-right","rear-left","rear-right"],ao=[{x:-1.22,z:1.22},{x:1.22,z:1.22},{x:-1.22,z:-1.25},{x:1.22,z:-1.25}];class Ch{root=new Wt;wheels=[];frontWheels=[];suspension=[];body;opts;model=new Wt;materials;parts={paint:[],dark:[],chrome:[],glass:[],tire:[],light:[]};wheelSprings;wheelShocks;shockRods;axleLinks;workMatrix=new Bt;workQuaternion=new Vt;workPosition=new ae;workScale=new ae;constructor(n={color:"#d84924",scale:1}){this.opts=n,this.root.scale.setScalar(n.scale),this.model.position.y=-1.65,this.root.add(this.model),this.body=new Wt,this.model.add(this.body),this.makeMaterials(),this.buildChassisAndBody(),this.buildWheels(),this.finishBodyBatches()}makeMaterials(){this.materials={paint:new vr({color:this.opts.color,metalness:.43,roughness:.29,clearcoat:.62,clearcoatRoughness:.2}),dark:new pt({color:1382939,metalness:.28,roughness:.68}),chrome:new pt({color:12041920,metalness:.78,roughness:.24}),glass:new vr({color:8636379,metalness:.12,roughness:.15,transparent:!0,opacity:.72,clearcoat:.9,side:Dt,depthWrite:!1}),tire:new pt({color:1053204,roughness:.94}),light:new pt({color:16770464,emissive:16754230,emissiveIntensity:1.15,roughness:.2})}}boxGeometry(n,t,i,r,a,s,o=.025,p){const u=new Ea(n,t,i,2,Math.min(o,n*.24,t*.24,i*.24)),m=p?new Vt().setFromEuler(p):new Vt;return u.applyMatrix4(new Bt().compose(new ae(r,a,s),m,new ae(1,1,1))),u}addBox(n,t,i,r,a,s,o,p=.025,u){this.parts[n].push(this.boxGeometry(t,i,r,a,s,o,p,u))}addSideShape(n,t,i,r=.045){const a=new Co(n,{depth:r,bevelEnabled:!1,curveSegments:8});a.rotateY(t<0?-Math.PI/2:Math.PI/2),a.translate(t*1.11,0,0),this.parts[i].push(a)}profileShape(){const n=new sa;return n.moveTo(-2.02,1.28),n.lineTo(-2.02,1.78),n.lineTo(-1.53,1.86),n.lineTo(-1.34,2.77),n.lineTo(-.91,3.04),n.lineTo(.29,3.04),n.lineTo(.65,2.14),n.lineTo(1.2,1.98),n.lineTo(2.03,1.77),n.lineTo(2.03,1.2),n.quadraticCurveTo(1.22,2.16,.38,1.2),n.lineTo(-.4,1.2),n.quadraticCurveTo(-1.25,2.16,-2.08,1.2),n.lineTo(-2.02,1.28),n.closePath(),n}sideWindow(n,t,i,r){const a=new sa;return a.moveTo(n,t),a.lineTo(n+.12,r),a.lineTo(i-.1,r),a.lineTo(i,t),a.closePath(),a}buildChassisAndBody(){this.addBox("dark",1.75,.22,3.55,0,1.3,-.02,.055);for(const o of[-.9,.9])this.addBox("dark",.17,.2,3.7,o,1.23,-.02,.045);for(const o of[-1.38,-.2,1.16])this.addBox("chrome",2,.11,.13,0,1.21,o,.025);this.addBox("dark",1.2,.08,.95,0,1.14,.1,.025),this.addBox("paint",2.12,.46,1.27,0,1.76,1.15,.09),this.addBox("paint",1.93,.16,1.48,0,3,-.34,.065),this.addBox("paint",1.78,.96,1.24,0,2.43,-.36,.08);const n=this.profileShape();for(const o of[-1,1])this.addSideShape(n,o,"paint",.055),this.addSideShape(this.sideWindow(-1.19,2.32,-.53,2.8),o,"glass",.018),this.addSideShape(this.sideWindow(-.43,2.32,.16,2.8),o,"glass",.018),this.addBox("chrome",.035,.045,.76,o*1.17,2.2,-.17,.012),this.addBox("chrome",.04,.035,.19,o*1.18,2.05,-.24,.01),this.addBox("dark",.075,.22,1.05,o*1.12,1.31,-.05,.026);this.addBox("glass",1.56,.68,.045,0,2.56,.48,.012,new Tn(-.48,0,0)),this.addBox("glass",1.48,.52,.04,0,2.55,-1.02,.012,new Tn(.18,0,0)),this.addBox("chrome",1.75,.055,.12,0,3.08,-.34,.02),this.addBox("dark",1.4,.08,.95,0,1.64,-1.42,.02);for(const o of[-.76,.76])this.addBox("paint",.12,.34,1.02,o,1.79,-1.4,.035);this.addBox("paint",1.48,.38,.13,0,1.77,-1.93,.035);for(let o=0;o<5;o++)this.addBox("chrome",1.25,.018,.024,0,1.69,-1.78+o*.18,.004);this.addBox("chrome",2.22,.2,.22,0,1.47,1.96,.045),this.addBox("dark",1.16,.38,.055,0,1.83,1.94,.012),this.addBox("chrome",1.28,.045,.07,0,2.05,1.95,.012),this.addBox("chrome",1.28,.045,.07,0,1.61,1.95,.012);for(let o=0;o<9;o++)this.addBox("dark",.025,.34,.035,-.5+o*.125,1.83,1.98,.008);this.addBox("dark",.22,.11,.07,0,1.72,2.01,.012),this.addBox("chrome",2.12,.14,.2,0,1.52,-2,.035),this.addBox("chrome",1.95,.055,.14,0,1.68,-2,.015);for(const o of[-.82,.82])this.addBox("dark",.48,.29,.09,o,1.94,1.93,.035),this.addBox("light",.34,.19,.045,o,1.95,1.99,.035),this.addBox("light",.14,.08,.035,o,1.72,2,.018),this.addBox("dark",.18,.08,.04,o,1.52,-2.11,.018);for(const o of[-.69,.69])this.addBox("paint",.08,.055,.83,o,2.02,1.13,.025),this.addBox("chrome",.035,.025,.63,o*1.7,1.9,-.36,.01);for(const o of[-1.1,.46])this.addBox("dark",.05,.86,.06,0,2.51,o,.018);for(let o=-2;o<=2;o++)this.addBox("light",.14,.13,.08,o*.36,3.14,-.25,.06);const t=[];for(const o of[-1.17,1.17])for(const p of[-1.25,1.22]){const u=new vl(new ae(o,1.26,p-.91),new ae(o,2.14,p),new ae(o,1.26,p+.91));t.push(new Di(u,20,.06,7,!1))}const i=Ln(t,!1);t.forEach(o=>o.dispose()),this.body.add(new ot(i,this.materials.dark));const a=[-1,1].map(o=>new Sr([new ae(o*.86,1.65,-1.82),new ae(o*.86,2.85,-1.55),new ae(o*.86,3.2,-.9),new ae(o*.86,3.2,.05),new ae(o*.82,2.2,.98)])).map(o=>new Di(o,24,.035,7,!1)),s=Ln(a,!1);a.forEach(o=>o.dispose()),this.body.add(new ot(s,this.materials.chrome));for(const o of[-1.25,1.22])this.addBox("dark",1.82,.12,.16,0,1.43,o,.025),this.addBox("chrome",1.22,.055,.07,0,1.56,o,.018)}finishBodyBatches(){for(const n of Object.keys(this.parts)){const t=this.parts[n];if(!t.length)continue;const i=Ln(t,!1);if(t.forEach(a=>a.dispose()),!i)continue;const r=new ot(i,this.materials[n]);r.castShadow=!0,r.receiveShadow=!0,r.frustumCulled=!0,this.body.add(r)}this.parts={paint:[],dark:[],chrome:[],glass:[],tire:[],light:[]}}cylinderGeometry(n,t,i=24){const r=new Er(n,n,t,i,1,!1);return r.rotateZ(Math.PI/2),r}buildWheels(){const n=new pt({color:2698543,roughness:.9}),t=[],i=[],r=new Er(.82,.82,.61,36,1,!1);r.rotateZ(Math.PI/2),t.push(r);for(const T of[-.29,.29]){const M=new Mr(.63,.12,8,36);M.rotateY(Math.PI/2),M.translate(T,0,0),t.push(M);const c=this.cylinderGeometry(.455,.045,28);c.translate(T*1.04,0,0),i.push(c);const l=new Mr(.405,.025,8,32);l.rotateY(Math.PI/2),l.translate(T*1.04,0,0),i.push(l);const b=this.cylinderGeometry(.16,.075,18);b.translate(T*1.1,0,0),i.push(b);for(let R=0;R<6;R++){const x=R*Math.PI/3,D=new en(.065,.07,.29);D.applyMatrix4(new Bt().compose(new ae(T*1.08,Math.cos(x)*.25,Math.sin(x)*.25),new Vt().setFromEuler(new Tn(x,0,0)),new ae(1,1,1))),i.push(D)}}const a=Ln(t,!1);t.forEach(T=>T.dispose());const s=Ln(i,!1);i.forEach(T=>T.dispose());const o=this.cylinderGeometry(.13,3.1,12),p=new pt({color:3422779,metalness:.55,roughness:.48}),u=new $t(o,p,2);u.castShadow=!0;const m=new Vt().setFromAxisAngle(new ae(0,0,1),Math.PI/2);[-1.25,1.22].forEach((T,M)=>{this.workMatrix.compose(new ae(0,.91,T),m,new ae(1,1,1)),u.setMatrixAt(M,this.workMatrix)}),u.instanceMatrix.needsUpdate=!0,this.model.add(u);const f=[];for(let T=0;T<=96;T++){const M=T/96,c=M*Math.PI*2*8;f.push(new ae(Math.cos(c)*.11,M-.5,Math.sin(c)*.11))}const g=new Di(new Sr(f),128,.025,5,!1),_=new pt({color:13817555,metalness:.78,roughness:.32});this.wheelSprings=new $t(g,_,4),this.wheelSprings.castShadow=!0,this.wheelShocks=new $t(this.cylinderGeometry(.072,.68,10),p,4),this.wheelShocks.castShadow=!0,this.shockRods=new $t(this.cylinderGeometry(.025,.62,8),this.materials.chrome,4),this.shockRods.castShadow=!0,this.model.add(this.wheelSprings,this.wheelShocks,this.shockRods);for(let T=0;T<4;T++){const M=ao[T],c=io[T],l=new Wt;l.position.set(M.x,.92,M.z),l.userData.wheelId=c,this.model.add(l),this.wheels.push(l),T<2&&this.frontWheels.push(l);const b=new ot(a,this.materials.tire);b.castShadow=!0,b.receiveShadow=!0,l.add(b);const R=new ot(s,this.materials.chrome);R.castShadow=!0,l.add(R);const x=new en(.32,.15,.27),D=new $t(x,n,32);D.castShadow=!0,D.receiveShadow=!0;let C=0;for(let I=0;I<2;I++)for(let B=0;B<16;B++){const v=B*Math.PI/8+I*Math.PI/16,S=new Vt().setFromAxisAngle(new ae(1,0,0),v+Math.PI/2);this.workMatrix.compose(new ae(I?.16:-.16,Math.sin(v)*.81,Math.cos(v)*.81),S,new ae(1,1,1)),D.setMatrixAt(C++,this.workMatrix)}D.instanceMatrix.needsUpdate=!0,l.add(D)}this.axleLinks=new $t(this.cylinderGeometry(.055,1,10),p,4),this.axleLinks.castShadow=!0,this.model.add(this.axleLinks),this.updateWheelContacts(io.map((T,M)=>({id:T,x:0,z:0,height:0,contact:!0,compression:.12,extension:0,travel:.55,compressionVelocity:0,compressionDamping:0,reboundDamping:0})),1)}updateWheelContacts(n,t){for(let i=0;i<this.wheels.length;i++){const r=this.wheels[i],a=n.find(f=>f.id===r.userData.wheelId);if(!a)continue;r.position.y=.92+a.compression/t+a.extension/t;const s=ao[i],o=a.compression/t,p=a.extension/t;this.workPosition.set(s.x*.78,1.05+p*.35-o*.2,s.z),this.workQuaternion.identity(),this.workScale.set(1,Math.max(.5,.72+p-o*.35),1),this.workMatrix.compose(this.workPosition,this.workQuaternion,this.workScale),this.wheelSprings.setMatrixAt(i,this.workMatrix),this.workPosition.y=.99+p*.32-o*.12,this.workScale.set(1,.68+p*.45-o*.2,1),this.workMatrix.compose(this.workPosition,this.workQuaternion,this.workScale),this.wheelShocks.setMatrixAt(i,this.workMatrix),this.workPosition.y=1.13+p*.3-o*.1,this.workScale.set(1,.61+p*.25-o*.1,1),this.workMatrix.compose(this.workPosition,this.workQuaternion,this.workScale),this.shockRods.setMatrixAt(i,this.workMatrix);const u=new Vt().setFromAxisAngle(new ae(0,0,1),Math.PI/2),m=Math.abs(s.x)*.9;this.workPosition.set(s.x*.54,.89+o*.35,s.z),this.workScale.set(1,m,1),this.workMatrix.compose(this.workPosition,u,this.workScale),this.axleLinks.setMatrixAt(i,this.workMatrix)}this.wheelSprings.instanceMatrix.needsUpdate=!0,this.wheelShocks.instanceMatrix.needsUpdate=!0,this.shockRods.instanceMatrix.needsUpdate=!0,this.axleLinks.instanceMatrix.needsUpdate=!0}setColor(n){this.opts.color=n,this.materials.paint.color.set(n)}}function qn(e,n=new ae){return n.set(Math.sin(e),0,Math.cos(e))}function Ma(e,n=new ae){return n.set(Math.cos(e),0,-Math.sin(e))}const da=(e,n,t)=>Math.max(n,Math.min(t,e)),yh=[{id:"front-left",x:-1.22,z:1.22},{id:"front-right",x:1.22,z:1.22},{id:"rear-left",x:-1.22,z:-1.25},{id:"rear-right",x:1.22,z:-1.25}];function zi(e,n,t,i,r=24){const a=Math.cos(n),s=Math.sin(n),o=.55*t,p=.36*t;return yh.map(u=>{const m=e.x+u.x*a+u.z*s,f=e.z-u.x*s+u.z*a,g=i(m,f),_=g+1.65*t+.12*t,T=_-e.y,M=2*Math.sqrt(r/(.12*t));return{id:u.id,x:m,z:f,height:g,travel:o,compression:da(T,0,o),extension:da(-T,0,p),contact:T>=-p&&T<=o,compressionVelocity:0,compressionDamping:M*.82,reboundDamping:M*.62}})}function Ph(e,n,t,i){const r=t/(.12*i);let a=0;for(const s of e){if(s.compression<=0)continue;const o=Math.max(0,s.compression-s.travel+.08*i),p=r*(s.compression+o*2.5),u=da(s.compressionVelocity,-12,12),m=u>=0?s.compressionDamping:s.reboundDamping,f=(n>=0?s.reboundDamping:s.compressionDamping)*n*.24;a+=Math.max(0,p+m*u-f)}return a/e.length-t}function Lh(e){const n=(e[0].height+e[1].height)/2,t=(e[2].height+e[3].height)/2,i=(e[0].height+e[2].height)/2,r=(e[1].height+e[3].height)/2;return{pitch:-Math.atan2(n-t,2.47),roll:Math.atan2(r-i,2.44)}}const Wi=Math.PI*2,ai=e=>e*Math.PI/180;function Yn(e,n){return Math.atan2(Math.sin(n-e),Math.cos(n-e))}function ri(e){return Math.abs(Yn(e,0))}function ro(e,n,t=5.2){const i=1-Math.exp(-t*Math.max(0,n));return e+Yn(e,0)*i}class Dh{airborne=!1;lastPitch=0;lastRoll=0;pitchProgress=0;rollProgress=0;pendingForwardFlips=0;pendingBackwardFlips=0;pendingRolls=0;flightTime=0;flightBonus=0;currentPoints=0;bestScore;constructor(n=0){this.bestScore=Math.max(0,Math.floor(n)||0)}update(n){if(!n.grounded){this.airborne?(this.flightTime=Math.max(this.flightTime,n.airtime),this.recordFlipRotation(this.advanceRotation("pitch",n.pitch)),this.pendingRolls+=Math.abs(this.advanceRotation("roll",n.roll))):this.beginFlight(n);const T=this.pendingForwardFlips+this.pendingBackwardFlips,M=T+this.pendingRolls;return this.currentPoints=Math.round(this.flightTime*80)+this.pendingRolls*500+T*600+Math.max(0,M-1)*150+this.flightBonus,null}if(!this.airborne)return null;this.flightTime=Math.max(this.flightTime,n.airtime),this.recordFlipRotation(this.advanceRotation("pitch",n.pitch)),this.pendingRolls+=Math.abs(this.advanceRotation("roll",n.roll));const t=ri(n.pitch)<ai(65)&&ri(n.roll)<ai(65),i=n.landingSpeed<=22&&t&&this.flightTime>=.45,r=this.pendingForwardFlips,a=this.pendingBackwardFlips,s=r+a,o=this.pendingRolls,p=this.flightTime;if(this.airborne=!1,!i)return this.clearFlight(),null;const u=s+o,m=n.landingSpeed<=5&&ri(n.pitch)<ai(18)&&ri(n.roll)<ai(18),f=m?300:100,g=Math.round(p*80)+o*500+s*600+Math.max(0,u-1)*150+f+this.flightBonus;this.currentPoints=g,this.bestScore=Math.max(this.bestScore,g);const _=o>=2?"DOUBLE ROLL":o===1?"BARREL ROLL":s>=2?"DOUBLE FLIP":r?"FRONT FLIP":a?"BACKFLIP":p>=1.25?m?"BIG AIR · PERFECT LANDING":"BIG AIR":m?"PERFECT LANDING":"NICE LANDING";return this.clearFlight(!1),{points:g,rolls:o,flips:s,forwardFlips:r,backwardFlips:a,airtime:p,perfect:m,message:_}}reset(){this.airborne=!1,this.clearFlight()}get isAirborne(){return this.airborne}get rolls(){return this.pendingRolls}get flips(){return this.pendingForwardFlips+this.pendingBackwardFlips}get airtime(){return this.flightTime}awardBonus(n){const t=Math.max(0,Math.floor(n));return t?(this.airborne&&(this.flightBonus+=t),this.currentPoints+=t,this.bestScore+=t,this.currentPoints):this.currentPoints}beginFlight(n){this.clearFlight(),this.airborne=!0,this.lastPitch=n.pitch,this.lastRoll=n.roll,this.flightTime=n.airtime}advanceRotation(n,t){const i=n==="pitch"?this.lastPitch:this.lastRoll,a=(n==="pitch"?this.pitchProgress:this.rollProgress)+Yn(i,t);n==="pitch"?(this.lastPitch=t,this.pitchProgress=a):(this.lastRoll=t,this.rollProgress=a);const s=Math.trunc(a/Wi);return s&&(n==="pitch"?this.pitchProgress-=s*Wi:this.rollProgress-=s*Wi),s}recordFlipRotation(n){n>0?this.pendingForwardFlips+=n:this.pendingBackwardFlips+=-n}clearFlight(n=!0){this.pitchProgress=0,this.rollProgress=0,this.pendingForwardFlips=0,this.pendingBackwardFlips=0,this.pendingRolls=0,this.flightTime=0,this.flightBonus=0,n&&(this.currentPoints=0)}}class Uh{pos=new ae(0,0,0);vel=new ae;yaw=0;pitch=0;roll=0;grounded=!0;nitro=100;airTime=0;speed=0;gravity=24;jumpForce=15;jumpWas=!1;previousCompression=new Map;contactPitch=0;contactRoll=0;wheelContacts=[];reset(n,t=1){this.pos.set(0,n.heightAt(0,0)+1.65*t,0),this.vel.set(0,0,0),this.yaw=0,this.pitch=0,this.roll=0,this.grounded=!0,this.nitro=100,this.airTime=0,this.contactPitch=0,this.contactRoll=0,this.wheelContacts=zi(this.pos,this.yaw,t,(i,r)=>n.heightAt(i,r),this.gravity),this.previousCompression=new Map(this.wheelContacts.map(i=>[i.id,i.compression]))}update(n,t,i,r,a){this.gravity=a.gravity,this.jumpForce=a.jump,n=Math.min(n,.04);const s=Math.max(1,Math.ceil(n*120)),o=n/s;for(let p=0;p<s;p++)this.step(o,t,i,a);r.root.position.copy(this.pos),r.root.rotation.order="YXZ",r.root.rotation.set(this.pitch+this.contactPitch,this.yaw,this.roll+this.contactRoll),r.updateWheelContacts(this.wheelContacts,a.scale),r.wheels.forEach(p=>{p.rotation.x-=this.speed*n}),r.frontWheels.forEach(p=>{p.rotation.y=-t.steer*.28})}step(n,t,i,r){const a=r.scale,s=qn(this.yaw),o=30*(t.nitro&&this.nitro>0?1.7:1),p=26*(t.nitro&&this.nitro>0?1.5:1);t.throttle&&this.vel.addScaledVector(s,t.throttle*p*n);const u=new ae(this.vel.x,0,this.vel.z);if(this.speed=u.length(),t.nitro&&this.nitro>0?this.nitro=Math.max(0,this.nitro-22*n):this.nitro=Math.min(100,this.nitro+8*n),t.handbrake?u.multiplyScalar(Math.max(0,1-3*n)):u.multiplyScalar(Math.max(0,1-(this.grounded?1.05:.1)*n)),this.speed>o&&u.setLength(o),this.speed>.4){const M=(this.grounded?1.8:1.05)*(.25+Math.min(1,this.speed/12)),c=Math.sign(u.dot(s))||Math.sign(t.throttle);this.yaw-=t.steer*M*n*c;const l=Ma(this.yaw),b=u.dot(l);u.addScaledVector(l,-b*(this.grounded?.72:.01))}this.vel.x=u.x,this.vel.z=u.z,t.jump&&!this.jumpWas&&this.grounded&&(this.vel.y=this.jumpForce,this.grounded=!1),this.jumpWas=t.jump,this.wheelContacts=zi(this.pos,this.yaw,a,(M,c)=>i.heightAt(M,c),this.gravity);for(const M of this.wheelContacts){const c=this.previousCompression.get(M.id)??M.compression;M.compressionVelocity=(M.compression-c)/Math.max(n,1/240)}this.grounded||(t.level?(this.pitch=ro(this.pitch,n),this.roll=ro(this.roll,n)):(this.pitch+=t.airPitch*5.4*n,this.roll+=t.airRoll*6.2*n),this.airTime+=n),this.vel.y+=Ph(this.wheelContacts,this.vel.y,this.gravity,a)*n;const m=this.pos.y;this.pos.addScaledVector(this.vel,n),this.wheelContacts=zi(this.pos,this.yaw,a,(M,c)=>i.heightAt(M,c),this.gravity);for(const M of this.wheelContacts)this.previousCompression.set(M.id,M.compression);const f=this.wheelContacts.filter(M=>M.contact&&M.compression>.015*a).length,g=Math.max(...this.wheelContacts.map(M=>M.height))+1.17*a;if(this.pos.y<g&&this.vel.y<0&&(!this.grounded&&this.vel.y<-3&&(this.pitch*=.35,this.roll*=.35,this.vel.y=Math.max(0,-this.vel.y*.12)),this.pos.y=g),this.grounded=this.vel.y<=.75&&f>=2,this.grounded){this.vel.y=Math.max(0,this.vel.y),this.airTime=0;const M=Math.exp(-4*n);this.pitch=Yn(0,this.pitch)*M,this.roll=Yn(0,this.roll)*M}const _=Lh(this.wheelContacts),T=this.grounded?Math.min(1,n*9):Math.min(1,n*2);this.contactPitch=St.lerp(this.contactPitch,this.grounded?_.pitch:0,T),this.contactRoll=St.lerp(this.contactRoll,this.grounded?_.roll:0,T),Number.isFinite(this.pos.y)||(this.pos.y=m)}}function ua(e){if(!e||typeof e!="object"||!("closest"in e))return!1;const n=e;return typeof n.closest=="function"&&n.closest('input,textarea,select,[contenteditable]:not([contenteditable="false"])')!==null}class Ih{pressed=new Set;actions=new Map;pointerDown(n,t){this.pointerUp(n),this.actions.set(n,t),this.pressed.add(t)}pointerUp(n){const t=this.actions.get(n);t!==void 0&&(this.actions.delete(n),[...this.actions.values()].includes(t)||this.pressed.delete(t))}pointerCancel(n){this.pointerUp(n)}lostPointerCapture(n){this.pointerUp(n)}releaseAll(){this.actions.clear(),this.pressed.clear()}}function Nh(e,n){const t=(...i)=>i.some(r=>e.has(r)||n.has(r));return Number(t("d","arrowright"))-Number(t("a","arrowleft"))}class Oh{keys=new Set;pointerButtons=new Ih;state={throttle:0,steer:0,nitro:!1,jump:!1,level:!1,airPitch:0,airRoll:0,handbrake:!1};get touches(){return this.pointerButtons.pressed}constructor(){window.addEventListener("focusin",n=>{ua(n.target)&&this.releaseAll()}),window.addEventListener("keydown",n=>{if(ua(n.target)){this.releaseAll();return}[" ","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n.key)&&n.preventDefault(),this.keys.add(n.key.toLowerCase())}),window.addEventListener("keyup",n=>this.keys.delete(n.key.toLowerCase())),window.addEventListener("blur",()=>this.releaseAll())}pointerDown(n,t){this.pointerButtons.pointerDown(n,t)}pointerUp(n){this.pointerButtons.pointerUp(n)}pointerCancel(n){this.pointerButtons.pointerCancel(n)}lostPointerCapture(n){this.pointerButtons.lostPointerCapture(n)}releaseAll(){this.keys.clear(),this.pointerButtons.releaseAll(),this.state={throttle:0,steer:0,nitro:!1,jump:!1,level:!1,airPitch:0,airRoll:0,handbrake:!1}}update(){const n=(...f)=>f.some(g=>this.keys.has(g)||this.touches.has(g)),t=Array.from(navigator.getGamepads?.()??[]).find(f=>f?.connected),i=t?.axes??[],r=f=>t?.buttons[f]?.value??0,a=(n("w","arrowup")?1:0)-(n("s","arrowdown")?1:0),s=r(7)-r(6)||-Math.sign(Math.abs(i[1]??0)>.18?i[1]:0),o=Nh(this.keys,this.touches),p=Math.abs(i[0]??0)>.16?i[0]:0,u=(n("arrowup")?1:0)-(n("arrowdown")?1:0),m=(n("e","arrowright")?1:0)-(n("q","arrowleft")?1:0);return this.state={throttle:a||s,steer:o||p,nitro:n("shift","nitro")||r(1)>.4,jump:n(" ","jump")||r(0)>.4,level:n("f","level")||r(3)>.4,airPitch:u||(Math.abs(i[3]??0)>.18?-Math.sign(i[3]):0),airRoll:m||(Math.abs(i[2]??0)>.18?Math.sign(i[2]):0),handbrake:n("control")||r(2)>.4},this.state}}const Dn=96,Xi=160;class Fh{group=new Wt;dustMesh;burstMesh;particles=[];active=[];freeDust=[];freeBurst=[];activeCount=0;rng=7886388;matrix=new Bt;quat=new Vt;scaleVector=new ae;color=new Ve;quality=1;constructor(){const n=new yo(.5,6,5);this.dustMesh=this.makeBatch(n.clone(),Dn,13875854),this.burstMesh=this.makeBatch(n.clone(),Xi,16777215),n.dispose(),this.dustMesh.name="dust-particle-batch",this.burstMesh.name="impact-particle-batch",this.dustMesh.count=this.burstMesh.count=0,this.group.add(this.dustMesh,this.burstMesh);for(let t=0;t<Dn+Xi;t++)this.particles.push({kind:"dust",life:0,max:1,position:new ae,velocity:new ae,scale:1,color:16777215}),this.active.push(0);for(let t=Dn-1;t>=0;t--)this.freeDust.push(t);for(let t=Dn+Xi-1;t>=Dn;t--)this.freeBurst.push(t)}makeBatch(n,t,i){const r=new Ro({color:i,vertexColors:!0,transparent:!0,depthWrite:!1});r.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute float instanceAlpha;
varying float vParticleAlpha;`),s.vertexShader=s.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vParticleAlpha = instanceAlpha;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying float vParticleAlpha;`),s.fragmentShader=s.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a *= vParticleAlpha;`)},r.customProgramCacheKey=()=>"rumble-particle-alpha-v1";const a=new Sl(new Float32Array(t),1);return a.setUsage(El),n.setAttribute("instanceAlpha",a),new $t(n,r,t)}rand(){return this.rng=this.rng*1664525+1013904223>>>0,this.rng/4294967296}burst(n,t=18,i=16758605){t=Math.max(1,Math.round(t*this.quality));for(let r=0;r<t;r++){const a=this.freeBurst.pop();if(a===void 0)break;const s=this.particles[a];s.kind="burst",s.life=.45+this.rand()*.8,s.max=.9,s.scale=.16+this.rand()*.26,s.color=i,s.position.copy(n),s.velocity.set((this.rand()-.5)*8,1+this.rand()*7,(this.rand()-.5)*8),this.active[this.activeCount++]=a}}dust(n,t){if(t<4||this.rand()>.27*this.quality)return;const i=this.freeDust.pop();if(i===void 0)return;const r=this.particles[i];r.kind="dust",r.life=r.max=.65,r.scale=.36+this.rand()*.3,r.color=13875854,r.position.copy(n),r.velocity.set(this.rand()-.5,.4+this.rand(),this.rand()-.5),this.active[this.activeCount++]=i}update(n){let t=0,i=0,r=0;for(let a=0;a<this.activeCount;a++){const s=this.active[a],o=this.particles[s];if(o.life-=n,o.life<=0){(o.kind==="dust"?this.freeDust:this.freeBurst).push(s);continue}o.position.addScaledVector(o.velocity,n),o.scale*=1+n*.55;const p=Math.max(0,o.life/o.max*(o.kind==="dust"?.34:.9)),u=o.kind==="dust"?this.dustMesh:this.burstMesh,m=o.kind==="dust"?i++:r++;this.scaleVector.setScalar(o.scale*(o.life/o.max)),this.matrix.compose(o.position,this.quat,this.scaleVector),u.setMatrixAt(m,this.matrix),this.color.setHex(o.color),u.setColorAt(m,this.color),u.geometry.getAttribute("instanceAlpha").setX(m,p),this.active[t++]=s}this.activeCount=t,this.dustMesh.count=i,this.burstMesh.count=r,i&&(this.dustMesh.instanceMatrix.needsUpdate=!0,this.dustMesh.instanceColor.needsUpdate=!0,this.dustMesh.geometry.getAttribute("instanceAlpha").needsUpdate=!0),r&&(this.burstMesh.instanceMatrix.needsUpdate=!0,this.burstMesh.instanceColor.needsUpdate=!0,this.burstMesh.geometry.getAttribute("instanceAlpha").needsUpdate=!0)}get activeParticles(){return this.activeCount}setQuality(n){this.quality=n==="low"?.46:n==="medium"?.72:1}dispose(){this.group.clear();for(const n of[this.dustMesh,this.burstMesh])n.geometry.dispose(),n.material.dispose()}}class Bh{group=new Wt;mesh;pieces=[];quality="high";seed=1225960503;transform=new Bt;quaternion=new Vt;vector=new ae;scratchColor=new Ve;capacity=320;constructor(){const n=new en(1,1,1),t=new pt({color:16777215,roughness:.88,metalness:.015});this.mesh=new $t(n,t,this.capacity),this.mesh.name="bounded-building-collapse-batch",this.mesh.count=0,this.mesh.castShadow=!1,this.mesh.receiveShadow=!1,this.mesh.frustumCulled=!1,this.group.add(this.mesh)}random(){return this.seed=this.seed*1664525+1013904223>>>0,this.seed/4294967296}destroy(n,t,i){const r=this.quality==="low"?.5:this.quality==="medium"?.75:1,a=St.clamp(Math.ceil(n.w/3.3),2,4),s=St.clamp(Math.ceil(n.h/3.5),2,5),o=Math.max(5,Math.round(a*s*r)),p=Math.min(o,this.capacity-this.pieces.length);if(!p)return 0;const u=Array.isArray(n.mesh.material)?n.mesh.material[0]:n.mesh.material,m=u instanceof pt?u.color:new Ve(11705472),f=new ae(t.direction.z,0,-t.direction.x).normalize(),g=new ae(n.x,n.baseY??n.mesh.position.y-n.h/2,n.z);for(let _=0;_<p;_++){const T=_%a,M=Math.floor(_/a)%s,c=new ae(n.w/a*(.78+this.random()*.2),n.h/s*(.78+this.random()*.2),Math.max(.35,n.d*(.22+this.random()*.28))),l=-n.w/2+(T+.5)*n.w/a,b=(M+.5)*n.h/s,R=(this.random()-.5)*Math.max(0,n.d-c.z),x=g.clone().add(new ae(l,b,R)),D=(this.random()-.5)*(2+t.intensity*6),C=2+t.intensity*(4+this.random()*5),I=t.direction.clone().multiplyScalar(C).addScaledVector(f,D);I.y=2.5+t.intensity*(2+this.random()*6)+this.random()*2;const B=m.clone().multiplyScalar(.78+this.random()*.4),v=4.5+this.random()*1.2;this.pieces.push({position:x,velocity:I,size:c,rotation:new Tn(this.random()*2,this.random()*2,this.random()*2),angular:new ae((this.random()-.5)*8,(this.random()-.5)*8,(this.random()-.5)*8),ground:i(x.x,x.z)+.06,life:v,maxLife:v,color:B})}return p}setQuality(n){this.quality=n}clear(){this.pieces.length=0,this.mesh.count=0}update(n){let t=0;for(let i=this.pieces.length-1;i>=0;i--){const r=this.pieces[i];if(r.life-=n,r.life<=0){this.pieces.splice(i,1);continue}r.velocity.y-=18*n,r.position.addScaledVector(r.velocity,n),r.rotation.x+=r.angular.x*n,r.rotation.y+=r.angular.y*n,r.rotation.z+=r.angular.z*n;const a=r.size.y/2;r.position.y<r.ground+a&&(r.position.y=r.ground+a,r.velocity.y<-1?r.velocity.y*=-.19:r.velocity.y=0,r.velocity.x*=.82,r.velocity.z*=.82,r.angular.multiplyScalar(.96));const s=r.life<.45?Math.max(.1,r.life/.45):1;this.vector.copy(r.size).multiplyScalar(s),this.quaternion.setFromEuler(r.rotation),this.transform.compose(r.position,this.quaternion,this.vector),this.mesh.setMatrixAt(t,this.transform),this.scratchColor.copy(r.color),this.mesh.setColorAt(t,this.scratchColor),t++}this.mesh.count=t,t&&(this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0))}get activeCount(){return this.pieces.length}dispose(){this.group.clear(),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.pieces.length=0}}const dn=(e,n,t)=>Math.max(n,Math.min(t,e));function Gh(e,n,t){const i=dn(.2+dn(e/32,0,1)*.67+dn(n,0,1)*.16+(t?.18:0),.2,1.2),r=62+i*112;return{rpm:i,fundamentalHz:r,engineGain:.075+i*.035+dn(n,0,1)*.025,harmonicHz:r*2.4,nitroHz:260+i*390}}function Un(e){return dn(Number.isFinite(e)?e:0,0,1)}class Hh{ctx=null;master=null;compressor=null;analyser=null;meterBuffer=null;engineOsc=null;engineHarmonic=null;engineGain=null;harmonicGain=null;nitroOsc=null;nitroGain=null;skidNoise=null;skidGain=null;noiseBuffer=null;volume=.62;muted=!1;failed=!1;start(){try{this.ctx||this.createGraph(),this.ctx?.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.applyMaster()}catch{this.failed=!0}}createGraph(){const n=window,t=window.AudioContext??n.webkitAudioContext;if(!t){this.failed=!0;return}const i=new t;this.ctx=i,this.master=i.createGain(),this.master.gain.value=0,this.compressor=i.createDynamicsCompressor(),this.compressor.threshold.value=-18,this.compressor.knee.value=14,this.compressor.ratio.value=5,this.compressor.attack.value=.006,this.compressor.release.value=.16,this.analyser=i.createAnalyser(),this.analyser.fftSize=256,this.meterBuffer=new Float32Array(this.analyser.fftSize),this.master.connect(this.compressor).connect(this.analyser).connect(i.destination);const r=i.createOscillator();r.type="sawtooth";const a=i.createBiquadFilter();a.type="lowpass",a.frequency.value=620,a.Q.value=.7,this.engineGain=i.createGain(),this.engineGain.gain.value=.09,r.connect(a).connect(this.engineGain).connect(this.master),r.start(),this.engineOsc=r;const s=i.createOscillator();s.type="triangle";const o=i.createBiquadFilter();o.type="bandpass",o.frequency.value=520,o.Q.value=.65,this.harmonicGain=i.createGain(),this.harmonicGain.gain.value=.035,s.connect(o).connect(this.harmonicGain).connect(this.master),s.start(),this.engineHarmonic=s;const p=i.createOscillator();p.type="sawtooth";const u=i.createBiquadFilter();u.type="bandpass",u.frequency.value=900,u.Q.value=.8,this.nitroGain=i.createGain(),this.nitroGain.gain.value=1e-4,p.connect(u).connect(this.nitroGain).connect(this.master),p.start(),this.nitroOsc=p;const m=i.createBuffer(1,Math.floor(i.sampleRate*.35),i.sampleRate),f=m.getChannelData(0);for(let T=0;T<f.length;T++)f[T]=(Math.random()*2-1)*.55;this.noiseBuffer=m;const g=i.createBufferSource();g.buffer=m,g.loop=!0;const _=i.createBiquadFilter();_.type="bandpass",_.frequency.value=1250,_.Q.value=.5,this.skidGain=i.createGain(),this.skidGain.gain.value=1e-4,g.connect(_).connect(this.skidGain).connect(this.master),g.start(),this.skidNoise=g,this.failed=!1}setMasterVolume(n){this.volume=Un(n),this.applyMaster()}getMasterVolume(){return this.volume}setMuted(n){this.muted=n,this.applyMaster()}mute(){this.setMuted(!0)}isMuted(){return this.muted}isAvailable(){return!!this.ctx&&!this.failed}getState(){return this.ctx?.state??(this.failed?"unavailable":"locked")}applyMaster(){this.ctx&&this.master&&this.master.gain.setTargetAtTime(this.muted?0:this.volume,this.ctx.currentTime,.025)}update(n,t=0,i=!1,r=0){const a=this.ctx;if(!a||!this.engineOsc||!this.engineHarmonic||!this.engineGain||!this.harmonicGain)return;const s=Gh(n,t,i),o=a.currentTime;this.engineOsc.frequency.setTargetAtTime(s.fundamentalHz,o,.055),this.engineHarmonic.frequency.setTargetAtTime(s.harmonicHz,o,.07),this.engineGain.gain.setTargetAtTime(s.engineGain,o,.09),this.harmonicGain.gain.setTargetAtTime(.026+s.rpm*.022,o,.09),this.nitroOsc?.frequency.setTargetAtTime(s.nitroHz,o,.045),this.nitroGain?.gain.setTargetAtTime(i?.075:1e-4,o,.05),this.skidGain?.gain.setTargetAtTime(dn(r,0,1)>.08?.12*dn(r,0,1):1e-4,o,.04)}testTone(){const n=this.ctx;if(!n||this.muted)return!1;const t=n.createOscillator(),i=n.createGain(),r=n.currentTime;return t.type="sine",t.frequency.setValueAtTime(523.25,r),i.gain.setValueAtTime(1e-4,r),i.gain.linearRampToValueAtTime(.22,r+.025),i.gain.setValueAtTime(.22,r+.24),i.gain.exponentialRampToValueAtTime(1e-4,r+.52),t.connect(i).connect(this.master),t.start(r),t.stop(r+.54),t.onended=()=>{t.disconnect(),i.disconnect()},!0}jump(){this.sweep(175,540,.34,.055,"sawtooth")}landing(n=1){this.noiseBurst(.11+Un(n)*.08,.22),this.sweep(112,52,.19,.075*Un(n),"sine")}impact(n=1){this.noiseBurst(.15+Un(n)*.12,.34),this.sweep(170,43,.28,.11*Un(n),"triangle")}sweep(n,t,i,r,a){const s=this.ctx;if(!s||this.muted)return;const o=s.createOscillator(),p=s.createGain(),u=s.currentTime;o.type=a,o.frequency.setValueAtTime(n,u),o.frequency.exponentialRampToValueAtTime(Math.max(25,t),u+i),p.gain.setValueAtTime(1e-4,u),p.gain.linearRampToValueAtTime(r,u+.012),p.gain.exponentialRampToValueAtTime(1e-4,u+i),o.connect(p).connect(this.master),o.start(u),o.stop(u+i+.015),o.onended=()=>{o.disconnect(),p.disconnect()}}noiseBurst(n,t){const i=this.ctx;if(!i||!this.noiseBuffer||this.muted)return;const r=i.createBufferSource(),a=i.createBiquadFilter(),s=i.createGain(),o=i.currentTime;r.buffer=this.noiseBuffer,a.type="lowpass",a.frequency.value=1900,s.gain.setValueAtTime(Math.max(1e-4,n),o),s.gain.exponentialRampToValueAtTime(1e-4,o+t),r.connect(a).connect(s).connect(this.master),r.start(o),r.stop(o+t+.02),r.onended=()=>{r.disconnect(),a.disconnect(),s.disconnect()}}outputRms(){if(!this.ctx||!this.analyser||!this.meterBuffer||this.ctx.state!=="running"||this.muted)return 0;this.analyser.getFloatTimeDomainData(this.meterBuffer);let n=0;for(const t of this.meterBuffer)n+=t*t;return Math.sqrt(n/this.meterBuffer.length)}}const ce=e=>document.querySelector(e),wn=!!(window.matchMedia?.("(pointer: coarse)").matches||window.matchMedia?.("(any-pointer: coarse)").matches||navigator.maxTouchPoints>0||"ontouchstart"in window),Zn=document.documentElement;Zn.classList.toggle("touch-capable",wn);Zn.classList.toggle("keyboard-controls-visible",!wn);const kh=ce("#app");kh.innerHTML=`
 <canvas id="game"></canvas>
 <div class="grain"></div>
 <header class="topbar"><a class="brand" href="#"><span class="brand-icon">✦</span><span>RUMBLE<span class="accent">ROAM</span></span></a><div class="location-label"><span class="pulse"></span><span id="place-name">Moab, Utah</span><small id="terrain-name">RED ROCK COUNTRY</small></div><div class="top-actions"><button id="map-btn" class="top-btn" aria-label="Choose location">⌖ <span>LOCATIONS</span></button><button id="pause-btn" class="top-btn" aria-label="Pause game">Ⅱ <span>PAUSE</span></button><button id="help-btn" class="top-btn help-trigger" aria-label="Help and controls">?</button></div></header><div id="geo-status" class="world-data-status" aria-live="polite">GEOGRAPHIC DATA · LOADING</div><a class="world-data-credit" href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">© OPENSTREETMAP CONTRIBUTORS · ODbL</a>
 <aside class="hud-left"><div class="stat"><span class="stat-label">VELOCITY</span><div class="speed-line"><strong id="speed">000</strong><span>KM/H</span></div><div class="speed-track"><i id="speed-bar"></i></div></div><div class="stat nitro-stat"><span class="stat-label">NITROUS</span><div class="nitro-track"><i id="nitro-bar"></i></div><small id="nitro-state">READY TO BURN</small></div><div class="stunt-stat" aria-live="polite"><div><span>AIR TIME</span><b id="air-time">0.0s</b></div><div><span>STUNT</span><b id="stunt-score">0</b></div><small>BEST <b id="stunt-best">0</b></small><small id="level-hint" class="level-hint"></small></div></aside>
 <div class="hud-bottom"><div class="hint keyboard-hint"><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> DRIVE <i></i><kbd>SHIFT</kbd> BOOST <i></i><kbd>SPACE</kbd> JUMP <i></i><kbd>F</kbd> LEVEL <i></i><kbd>Q</kbd><kbd>E</kbd> FLIP</div><div class="touch-hint">LEFT / RIGHT STEER · HOLD GO OR BRAKE · JUMP + BOOST</div><div class="camera-toggle"><button data-camera="chase" class="selected">CHASE</button><button data-camera="far">FAR</button><button data-camera="hood">HOOD</button><button data-camera="free">FREE</button></div></div>
 <button id="settings-btn" class="settings-fab">⚙</button>
 <section id="location-panel" class="panel hidden"><div class="panel-head"><div><span class="eyebrow">PICK YOUR PLAYGROUND</span><h2>Where to next?</h2></div><button class="close-btn" data-close="location-panel">×</button></div><form id="search-form"><input id="location-search" placeholder="Search a place or paste coordinates" autocomplete="off"><button class="search-btn">SEARCH <span>↗</span></button></form><div id="search-results" class="results"></div><div class="map-wrap"><div id="mini-map"></div><div class="map-hint">CLICK MAP TO DROP A PIN</div></div><button id="practice-course" class="practice-course-btn">ADD OPTIONAL PRACTICE OBSTACLES</button><div class="preset-title">FAVORITE RUNS <span>09 LOCATIONS</span></div><div id="presets" class="presets"></div><div class="attribution">Terrain <a href="https://registry.opendata.aws/terrain-tiles/" target="_blank">Mapzen / Tilezen</a> · © <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a> · Map <a href="https://openfreemap.org/" target="_blank">OpenFreeMap</a><details class="terrain-credits"><summary>Terrain source credits</summary><div>ArcticDEM: DigitalGlobe imagery; NSF awards 1043681, 1559691 and 1542736. Australia: © Commonwealth of Australia (Geoscience Australia) 2017. Austria: © offene Daten Österreichs – Digitales Geländemodell (DGM) Österreich. Canada: Open Government Licence – Canada. Europe: Copernicus / EU-DEM. Global ETOPO1: NOAA. Mexico: INEGI, Continental relief, 2016. New Zealand: © Land Information New Zealand and NZ Government. Norway: © Kartverket. United Kingdom: © Environment Agency 2015. United States 3DEP, GMTED2010 and SRTM: USGS.</div></details></div></section>
 <section id="settings-panel" class="panel settings hidden"><div class="panel-head"><div><span class="eyebrow">TUNE THE MAYHEM</span><h2>Game settings</h2></div><button class="close-btn" data-close="settings-panel">×</button></div><label>Graphics quality <select id="graphics-quality"><option value="low">Low · smoother</option><option value="medium">Medium · balanced</option><option value="high">High · detailed</option></select></label><label>Gravity <span id="gravity-value">24</span><input id="gravity" type="range" min="6" max="35" value="24"></label><label>Jump force <span id="jump-value">15</span><input id="jump" type="range" min="8" max="25" value="15"></label><label>Truck scale <span id="scale-value">1.0×</span><input id="scale" type="range" min="7" max="16" value="10"></label><label>Paint <input id="paint" type="color" value="#d84924"></label><label class="toggle"><span>Audio</span><input id="audio-toggle" type="checkbox" checked></label><label>Master volume <span id="volume-value">62%</span><input id="master-volume" type="range" min="0" max="100" value="62"></label><button id="audio-test" class="ghost-btn audio-test">TEST SOUND</button><small id="audio-status" class="settings-note">Sound starts after your first control input.</small><button id="reset-btn" class="search-btn full">RESET TRUCK <span>↻</span></button><small class="settings-note">Esc pauses the run. R recovers the truck. Press M to pick a new place.</small></section>
 <section id="pause-panel" class="pause-panel hidden"><span class="eyebrow">TAKE A BREATHER</span><h1>PAUSED</h1><button id="resume-btn" class="search-btn">BACK TO IT <span>▶</span></button><button id="pause-location" class="ghost-btn">CHANGE LOCATION</button></section>
 <section id="help-panel" class="panel help-panel hidden" aria-labelledby="help-title"><div class="panel-head"><div><span class="eyebrow">QUICK DRIVER GUIDE</span><h2 id="help-title">Controls</h2></div><button class="close-btn" data-close="help-panel" aria-label="Close help">×</button></div><p class="touch-guide-copy">Hold ◀ / ▶ to steer. Hold GO to accelerate or BRAKE to reverse. Hold JUMP and BOOST together for a bigger launch. Camera, reset, and pause are just below.</p><div class="help-grid"><strong>Keyboard</strong><span>W / S · Accelerate / reverse</span><span>A / D or ← / → · Steer</span><span>Shift · Nitro · Space · Jump · F · Level while airborne</span><span>Q / E · Roll · R · Reset · C · Camera · Esc · Pause · M · Locations</span><strong>Touch</strong><span>◀ / ▶ · Steer · GO / BRAKE · Drive</span><span>JUMP · Launch · BOOST · Nitro</span><span>Bottom shortcuts · Reset · Camera · Pause · Help</span></div></section>
 <div id="toast" class="toast"></div>
 <div class="orientation-tip" aria-hidden="true">LANDSCAPE RECOMMENDED</div>
 <nav class="mobile-utility" aria-label="Quick game controls"><button id="touch-reset" aria-label="Reset truck">↻ <span>RESET</span></button><button id="touch-camera" aria-label="Change camera">◉ <span>CAM</span></button><button id="touch-pause" aria-label="Pause game">Ⅱ <span>PAUSE</span></button><button id="touch-help" aria-label="Help and controls">? <span>HELP</span></button><button id="touch-control-mode" aria-label="Switch control display" aria-pressed="true">⌨ <span>KEYS</span></button></nav>
 <div class="mobile-controls" aria-label="Touch driving controls"><div class="touch-action-row"><button data-touch="jump" aria-label="Jump">⬆ <span>JUMP</span></button><button data-touch="nitro" class="nitro-touch" aria-label="Hold for nitro">⚡ <span>BOOST</span></button><button id="touch-level" data-touch="level" class="level-touch" aria-label="Hold to level truck upright">↥ <span>LEVEL</span></button></div><div class="touch-drive-row"><div class="dpad" aria-label="Steering"><button data-touch="a" aria-label="Steer left">◀<span>LEFT</span></button><button data-touch="d" aria-label="Steer right">▶<span>RIGHT</span></button></div><div class="pedals" aria-label="Acceleration"><button data-touch="s" class="brake" aria-label="Brake and reverse">▼<span>BRAKE</span></button><button data-touch="w" class="go" aria-label="Accelerate">▲<span>GO</span></button></div></div></div>
 <div class="loading-screen" id="loading"><div class="loader-mark">✦</div><div class="loader-title">MAPPING THE WILD</div><div class="loader-sub">LOADING REAL-WORLD TERRAIN</div><div class="loader-track"><i></i></div></div>`;let Ut=wn?"low":"high";const xa=e=>wn?{low:.82,medium:.93,high:1}[e]:{low:.85,medium:1.1,high:1.35}[e],Ta=()=>({width:Math.round(window.visualViewport?.width??innerWidth),height:Math.round(window.visualViewport?.height??innerHeight)}),gi=Ta(),vt=new ch({canvas:ce("#game"),antialias:!1,powerPreference:"high-performance"});vt.setPixelRatio(Math.min(devicePixelRatio||1,xa(Ut)));vt.setSize(gi.width,gi.height);vt.shadowMap.enabled=!1;vt.toneMapping=wo;vt.toneMappingExposure=1.12;const Tt=new Ml;Tt.background=new Ve("#9bb7c1");Tt.fog=new Po("#b9c4bc",105e-6);const Xt=new On(60,gi.width/gi.height,.1,18e3);Xt.position.set(0,8,-16);Tt.add(new xl(15398143,6443323,1.45));const Go=new Tl(16772559,2.55);Go.position.set(-350,550,260);Tt.add(Go);const fa=new Yt({side:Rt,depthWrite:!1,depthTest:!1,toneMapped:!1,uniforms:{uRumbleDesert:{value:1},uRumbleAlpine:{value:0},uSunDirection:{value:new ae(-.42,.63,.65).normalize()}},vertexShader:"varying vec3 vSkyDirection;void main(){vSkyDirection=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec3 vSkyDirection;uniform float uRumbleDesert;uniform float uRumbleAlpine;uniform vec3 uSunDirection;void main(){vec3 d=normalize(vSkyDirection);float h=smoothstep(-.16,.84,d.y);vec3 horizon=mix(vec3(.79,.72,.58),vec3(.66,.75,.77),uRumbleDesert);horizon=mix(horizon,vec3(.72,.79,.84),uRumbleAlpine);vec3 zenith=mix(vec3(.24,.37,.48),vec3(.3,.46,.55),uRumbleDesert);vec3 sky=mix(horizon,zenith,h);float sun=pow(max(dot(d,normalize(uSunDirection)),0.0),180.0);sky+=vec3(1.0,.72,.4)*sun*.32;gl_FragColor=vec4(sky,1.0);}"}),Mi=new ot(new yo(12e3,24,16),fa);Mi.frustumCulled=!1;Mi.renderOrder=-1e3;Tt.add(Mi);const Aa=new Yt({transparent:!0,depthWrite:!1,toneMapped:!1,uniforms:{uOpacity:{value:.25}},vertexShader:"varying vec2 vShadowUv;void main(){vShadowUv=uv*2.0-1.0;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec2 vShadowUv;uniform float uOpacity;void main(){float r=length(vShadowUv);float a=(1.0-smoothstep(.18,1.0,r))*uOpacity;gl_FragColor=vec4(.12,.105,.085,a);}"}),Kn=new ot(new Al(1,32),Aa);Kn.rotation.x=-Math.PI/2;Kn.renderOrder=1;Tt.add(Kn);const nt=new Eh(wn?63:127);Tt.add(nt.group);const mt=new wh;Tt.add(mt.group,mt.roadsGroup);const un=new Fh;Tt.add(un.group);const hn=new Bh;Tt.add(hn.group);let Qt=new Ch;Tt.add(Qt.root);const ee=new Uh,{ArcadeCollisionWorld:Vh}=await la(async()=>{const{ArcadeCollisionWorld:e}=await import("./collision-world-CV6XyUh9.js");return{ArcadeCollisionWorld:e}},__vite__mapDeps([0,1]),import.meta.url),Ft=new Vh;await Ft.init();const ft=new Oh,ht=new Hh,ha="rumble-roam-best-stunt-score";function pa(){try{return Number(localStorage.getItem(ha))||0}catch{return 0}}const ut=new Dh(pa());(location.hostname==="localhost"||location.hostname==="127.0.0.1")&&(window.__rumbleRoamDebug={spawnImpactTestBuilding(){nt.frame&&mt.addFixtureRoad(nt.frame,(i,r)=>nt.heightAt(i,r));const e=qn(ee.yaw),n=ee.pos.clone().addScaledVector(e,11),t=mt.addFixtureBuilding(`fixture-impact-${Date.now()}`,n.x,n.z,(i,r)=>nt.heightAt(i,r),Ft,{w:7,d:6,h:9});return It("LOCAL TEST BUILDING AHEAD"),t.id},spawnImpactTestSet(){const e=qn(ee.yaw);return nt.frame&&mt.addFixtureRoad(nt.frame,(n,t)=>nt.heightAt(n,t)),[10,27].map((n,t)=>{const i=ee.pos.clone().addScaledVector(e,n);return mt.addFixtureBuilding(`fixture-impact-set-${Date.now()}-${t}`,i.x,i.z,(r,a)=>nt.heightAt(r,a),Ft,t?{w:10,d:8,h:24}:{w:6,d:5,h:7}).id})},prepareMappedImpact(){const e=mt.list.filter(s=>s.source==="osm"&&!s.broken);e.sort((s,o)=>Math.hypot(s.x-ee.pos.x,s.z-ee.pos.z)-Math.hypot(o.x-ee.pos.x,o.z-ee.pos.z));const n=e[0];if(!n)return null;const t=new ae(n.x-ee.pos.x,0,n.z-ee.pos.z).normalize();t.lengthSq()<.1&&t.set(0,0,1);const i=Math.max(n.w,n.d)*.5+6,r=n.x-t.x*i,a=n.z-t.z*i;return ee.yaw=Math.atan2(t.x,t.z),ee.pos.set(r,nt.heightAt(r,a)+1.65*Qn.scale,a),ee.vel.set(0,0,0),ee.grounded=!0,ee.pitch=0,ee.roll=0,Ft.step(ee.pos,ee.yaw,1/120,ee.vel),Ft.step(ee.pos,ee.yaw,1/120,ee.vel),ee.vel.copy(t).multiplyScalar(24),n.id},hasFixtureRoad(){return mt.roadsGroup.children.some(e=>e.userData.kind==="fixture-road")}});const Qn={gravity:24,jump:15,scale:1};ce("#graphics-quality").value=Ut;let pn="chase",qt=!1,ma=0,Hn=.25,Zt=null,ga=null,xn=Oo[1],qi=0,$n=performance.now(),Lt=0,oo=0,Yi=performance.now(),oi=0,ui=0,Ki=0,si=0,so=0,lo=0;function zh(){const e=performance.memory;return e?Math.round(e.usedJSHeapSize/1048576*10)/10:null}function It(e){const n=ce("#toast");n.textContent=e,n.classList.add("show"),clearTimeout(oo),oo=window.setTimeout(()=>n.classList.remove("show"),2800)}function Gt(){Zn.classList.toggle("overlay-open",["location-panel","settings-panel","help-panel","pause-panel"].some(e=>!ce("#"+e).classList.contains("hidden")))}async function xi(e){const n=++qi;xn=e,qt=!1,ui=0,hn.clear(),mt.reset(Ft),ce("#geo-status").textContent="GEOGRAPHIC DATA · LOADING";const t=e.name.toLowerCase(),i=/moab|grand canyon|sahara|utah|arizona/.test(t),r=/alps|everest|mountain|swiss/.test(t);fa.uniforms.uRumbleDesert.value=i?1:0,fa.uniforms.uRumbleAlpine.value=r?1:0,Tt.fog instanceof Po&&Tt.fog.color.set(i?"#c5a983":r?"#b9c8d3":"#b9c4bc"),["location-panel","settings-panel","help-panel","pause-panel"].forEach(a=>ce("#"+a).classList.add("hidden")),Gt(),ce("#loading").classList.remove("done"),ce("#place-name").textContent=e.name,ce("#terrain-name").textContent=e.terrain??"OPEN TERRAIN",It("Mapping terrain…"),await nt.load(e),n===qi&&(ee.reset(nt,Qn.scale),ut.reset(),ce("#loading").classList.add("done"),It("Terrain is ready. Go make a mess."),mt.load(e,(a,s)=>nt.heightAt(a,s),Ft,nt.frame).then(a=>{n===qi&&(a.heading!==void 0&&ee.speed<2&&(ee.yaw=a.heading),ce("#geo-status").textContent=a.message,It(a.source==="osm"?`OSM map · ${a.buildings} buildings · ${a.roads} street/path lines`:"No packaged map data here. Terrain only; no practice obstacles were added."))}),Zt?.flyTo({center:[e.lon,e.lat],zoom:12}),ga?.setLngLat([e.lon,e.lat]))}ce("#practice-course").addEventListener("click",()=>{const e=mt.addPracticeCourse((n,t)=>nt.heightAt(n,t),Ft);ce("#geo-status").textContent=`${mt.status.message} · OPTIONAL PRACTICE OBSTACLES`,It(e?`Optional practice course added · ${e} obstacles`:"Practice obstacles are already active.")});Oo.forEach((e,n)=>{const t=document.createElement("button");t.className="preset",t.innerHTML=`<span class="preset-index">0${n+1}</span><span>${e.name}</span><i>↗</i>`,t.onclick=()=>xi(e),ce("#presets").append(t)});ce("#search-form").addEventListener("submit",async e=>{e.preventDefault();const n=ce("#location-search").value.trim();if(!n)return;const t=ce("#search-results");t.innerHTML='<div class="search-status">SEARCHING THE GLOBE…</div>';try{const i=await gh(n);if(!i.length){t.innerHTML='<div class="search-status">No places found. Try a nearby town or coordinates.</div>';return}t.innerHTML="";for(const r of i){const a=document.createElement("button");a.className="result",a.innerHTML=`<span>⌖</span><span>${r.name}</span><i>↗</i>`,a.onclick=()=>xi(r),t.append(a)}}catch{t.innerHTML='<div class="search-status">Location search is busy. Try coordinates like 40.7, -73.9.</div>'}});ce("#location-search").addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),ce("#search-form").requestSubmit())});ce("#map-btn").onclick=async()=>{if(ce("#location-panel").classList.toggle("hidden"),ce("#settings-panel").classList.add("hidden"),ce("#help-panel").classList.add("hidden"),Gt(),Zt)setTimeout(()=>Zt?.resize(),100);else{const[n,t]=await Promise.all([la(()=>import("./maplibre-gl-BT_db7in.js"),[],import.meta.url),la(()=>import("./maplibre-gl-worker-re4DVwB4.js"),[],import.meta.url)]);n.setWorkerUrl(t.default),Zt=new n.Map({container:"mini-map",style:"https://tiles.openfreemap.org/styles/liberty",center:[xn.lon,xn.lat],zoom:10,attributionControl:!1}),Zt.addControl(new n.NavigationControl({showCompass:!1}),"top-right"),ga=new n.Marker({color:"#f2632b"}).setLngLat([xn.lon,xn.lat]).addTo(Zt),Zt.on("click",i=>{const r={name:`${i.lngLat.lat.toFixed(4)}, ${i.lngLat.lng.toFixed(4)}`,lat:i.lngLat.lat,lon:i.lngLat.lng};ga?.setLngLat(i.lngLat);const a=document.createElement("button");a.className="result",a.innerHTML=`<span>⌖</span><span>Drive at ${r.name}</span><i>↗</i>`,a.onclick=()=>xi(r),ce("#search-results").replaceChildren(a)})}};ce("#settings-btn").onclick=()=>{ce("#settings-panel").classList.toggle("hidden"),ce("#location-panel").classList.add("hidden"),ce("#help-panel").classList.add("hidden"),Gt()};const ba=()=>{ce("#help-panel").classList.toggle("hidden"),ce("#location-panel").classList.add("hidden"),ce("#settings-panel").classList.add("hidden"),Gt()};ce("#help-btn").onclick=ba;ce("#touch-help").onclick=ba;document.querySelectorAll("[data-close]").forEach(e=>e.addEventListener("click",()=>{ce("#"+e.dataset.close).classList.add("hidden"),Gt()}));const Ra=(e,n,t)=>{const i=ce("#"+e);i.oninput=()=>{const r=+i.value/(n==="scale"?10:1);Qn[n]=r,ce("#"+n+"-value").textContent=t(r),n==="scale"&&Qt.root.scale.setScalar(r)}};Ra("gravity","gravity",e=>e.toFixed(0));Ra("jump","jump",e=>e.toFixed(0));Ra("scale","scale",e=>e.toFixed(1)+"×");ce("#paint").addEventListener("input",e=>Qt.setColor(e.target.value));function Wh(e){Ut=e,ce("#graphics-quality").value=e,vt.setPixelRatio(Math.min(devicePixelRatio||1,xa(e)));const n=Ta();vt.setSize(n.width,n.height),nt.setVisualQuality(e),un.setQuality(e),hn.setQuality(e),Aa.uniforms.uOpacity.value=Ho(e)}const Ho=e=>e==="low"?.18:e==="medium"?.23:.29;ce("#graphics-quality").addEventListener("change",e=>Wh(e.target.value));nt.setVisualQuality(Ut);un.setQuality(Ut);hn.setQuality(Ut);Aa.uniforms.uOpacity.value=Ho(Ut);ce("#audio-toggle").addEventListener("change",e=>{const n=e.target.checked;n&&ht.start(),ht.setMuted(!n),ce("#audio-status").textContent=n?"Audio enabled.":"Audio muted."});ce("#master-volume").addEventListener("input",e=>{const n=+e.target.value;ht.setMasterVolume(n/100),ce("#volume-value").textContent=`${n}%`});ce("#audio-test").addEventListener("click",()=>{ht.start();const e=ht.testTone();ce("#audio-status").textContent=e?"Test tone playing through the game audio output.":"Unmute audio to play the test tone.",e||It("Turn Audio on to hear the test.")});function wa(){ee.reset(nt,Qn.scale),ut.reset(),Qt.root.visible=!0,It("Truck recovered. Send it!")}function Ca(e){const n=["chase","far","hood","free"];pn=e??n[(n.indexOf(pn)+1)%n.length],document.querySelectorAll("[data-camera]").forEach(t=>t.classList.toggle("selected",t.dataset.camera===pn))}function ya(){qt=!qt,qt&&ft.releaseAll(),ce("#pause-panel").classList.toggle("hidden",!qt),Gt()}ce("#reset-btn").onclick=wa;ce("#touch-reset").onclick=()=>{ht.start(),wa()};ce("#touch-camera").onclick=()=>Ca();ce("#touch-pause").onclick=()=>ya();ce("#resume-btn").onclick=()=>{ht.start(),qt=!1,$n=performance.now(),ce("#pause-panel").classList.add("hidden"),Gt()};ce("#pause-btn").onclick=()=>ya();ce("#pause-location").onclick=()=>{ce("#pause-panel").classList.add("hidden"),Gt(),ce("#map-btn").click()};document.querySelectorAll("[data-camera]").forEach(e=>e.addEventListener("click",()=>Ca(e.dataset.camera)));const kn=ce("#touch-control-mode");kn.textContent=wn?"⌨ KEYS":"◉ TOUCH";kn.setAttribute("aria-pressed",String(!Zn.classList.contains("keyboard-controls-visible")));kn.onclick=()=>{const e=Zn.classList.toggle("keyboard-controls-visible");kn.innerHTML=e?"◉ <span>TOUCH</span>":"⌨ <span>KEYS</span>",kn.setAttribute("aria-pressed",String(!e))};window.addEventListener("keydown",e=>{e.repeat||ua(e.target)||(e.key.toLowerCase()==="m"&&ce("#map-btn").click(),e.key.toLowerCase()==="c"&&Ca(),e.key.toLowerCase()==="r"&&wa(),e.key==="Escape"&&ya(),(e.key==="?"||e.key.toLowerCase()==="h")&&ba(),(e.key===" "||e.key.toLowerCase()==="w")&&ht.start())});document.querySelectorAll("[data-touch]").forEach(e=>{const n=e.dataset.touch;e.addEventListener("pointerdown",t=>{if(!(t.pointerType==="mouse"&&t.button!==0)){t.preventDefault(),ft.pointerDown(t.pointerId,n);try{e.setPointerCapture(t.pointerId)}catch{}ht.start()}}),e.addEventListener("pointerup",t=>{t.preventDefault(),ft.pointerUp(t.pointerId)}),e.addEventListener("pointercancel",t=>ft.pointerCancel(t.pointerId)),e.addEventListener("lostpointercapture",t=>ft.lostPointerCapture(t.pointerId))});window.addEventListener("blur",()=>ft.releaseAll());document.addEventListener("visibilitychange",()=>{$n=performance.now(),document.hidden&&(ft.releaseAll(),qt=!0,ce("#pause-panel").classList.remove("hidden"),Gt())});window.addEventListener("pointermove",e=>{pn==="free"&&e.buttons&&(ma-=e.movementX*.004,Hn=St.clamp(Hn-e.movementY*.003,-.3,1.1))});let co=0,$i=60;function Xh(e){const n=ee.pos,t=qn(ee.yaw),i=Math.min(1,ee.speed/28),r=Math.max(-35,Math.min(35,(ee.speed-co)/Math.max(e,.001)));co=ee.speed;let a,s;if(pn==="hood")a=n.clone().add(new ae(0,2.3,0)).addScaledVector(t,1.2),s=a.clone().addScaledVector(t,7).add(new ae(0,.3,0));else if(pn==="free"){const u=new ae(Math.sin(ma)*Math.cos(Hn),Math.sin(Hn),Math.cos(ma)*Math.cos(Hn));a=n.clone().add(new ae(0,1.5,0)),s=a.clone().addScaledVector(u,-14)}else{const u=pn==="far",m=(u?30:11.8)+i*(u?8:3.8),f=(u?10:5.35)+i*1.6;a=n.clone().add(new ae(0,1.4,0)).addScaledVector(t,ee.speed*.2),s=n.clone().addScaledVector(t,-m).add(new ae(0,f,0)).addScaledVector(ee.vel,-.11),u||s.addScaledVector(Ma(ee.yaw),2.3),s.addScaledVector(t,-St.clamp(r*.018,-.8,.8))}const o=a;Lt>0&&(s.x+=(Math.random()-.5)*Lt,s.y+=(Math.random()-.5)*Lt,Lt=Math.max(0,Lt-e*1.3)),Xt.position.lerp(s,1-Math.exp(-(5.4-i*.65)*e)),Xt.lookAt(o);const p=60+i*4.5;Math.abs(p-$i)>.15&&($i=p,Xt.fov=$i,Xt.updateProjectionMatrix())}function ko(e){requestAnimationFrame(ko);const n=performance.now(),t=Math.min((e-$n)/1e3,.045);if($n=e,!qt){const p=ft.update(),u=ee.grounded,m=ee.vel.y,f=performance.now();ee.update(t,p,nt,Qt,Qn),lo=performance.now()-f;const g=ut.update({grounded:ee.grounded,airtime:ee.airTime,pitch:ee.pitch,roll:ee.roll,landingSpeed:Math.abs(m)});if(u&&!ee.grounded&&p.jump&&(ht.jump(),Lt=Math.max(Lt,.07)),!u&&ee.grounded&&(ht.landing(Math.min(1,Math.abs(m)/20)),Lt=Math.max(Lt,Math.min(.28,Math.abs(m)*.008)),g&&(It(`${g.message}  +${g.points.toLocaleString()} PTS`),ut.bestScore>pa())))try{localStorage.setItem(ha,String(ut.bestScore))}catch{}const _=Ft.step(ee.pos,ee.yaw,t,ee.vel);if(_){const M=mt.break(_.building);if(Ft.removeBuilding(_.building),M){ui++;const c=Math.round(100+Math.min(420,_.building.h*12)+_.intensity*120);ut.awardBonus(c);try{ut.bestScore>pa()&&localStorage.setItem(ha,String(ut.bestScore))}catch{}hn.destroy(_.building,_,(l,b)=>nt.heightAt(l,b)),un.burst(_.position,Math.round(22+_.intensity*20),16752988),ee.vel.addScaledVector(_.normal,-(1.5+_.intensity*4)),ee.vel.y+=1+_.intensity*2.5,Lt=Math.max(Lt,.2+_.intensity*.48),ht.impact(_.intensity),It(ui>1?`MULTI-SMASH · +${c} PTS`:`BUILDING SMASHED · DEMOLITION BONUS +${c}`)}}const T=Math.abs(ee.vel.dot(Ma(ee.yaw)));for(let M=0;M<ee.wheelContacts.length;M++){const c=ee.wheelContacts[M];un.dust(new ae(c.x,c.height+.07,c.z),ee.speed*(T>ee.speed*.28?1.35:1))}if(p.nitro&&ee.nitro>0&&Math.random()<t*8){const M=ee.pos.clone().addScaledVector(qn(ee.yaw),-1.72);un.burst(M.add(new ae((Math.random()-.5)*.9,.9,(Math.random()-.5)*.35)),1,16742965)}un.update(t),hn.update(t),mt.updateVisibility(ee.pos.x,ee.pos.z,Ut==="low"?500:Ut==="medium"?800:1100),ht.update(ee.speed,Math.max(0,p.throttle),p.nitro&&ee.nitro>0,Math.max(p.handbrake?.55:0,T/Math.max(4,ee.speed))),Xh(t)}Mi.position.copy(Xt.position);const i=ee.wheelContacts.reduce((p,u)=>Math.max(p,u.height),-1/0),r=Number.isFinite(i)?i:nt.heightAt(ee.pos.x,ee.pos.z),a=St.clamp(ee.pos.y-r,0,80);Kn.position.set(ee.pos.x,r+.035,ee.pos.z),Kn.scale.set(1.35+a*.055,2+a*.07,1),ce("#speed").textContent=String(Math.round(ee.speed*3.6)).padStart(3,"0"),ce("#speed-bar").style.width=`${Math.min(100,ee.speed/30*100)}%`,ce("#nitro-bar").style.width=`${ee.nitro}%`,ce("#nitro-state").textContent=ee.nitro>5?"READY TO BURN":"RECHARGING",ce("#air-time").textContent=`${ut.airtime.toFixed(1)}s`,ce("#stunt-score").textContent=ut.currentPoints.toLocaleString(),ce("#stunt-best").textContent=ut.bestScore.toLocaleString(),ce("#level-hint").textContent=ut.isAirborne?ft.state.level?"LEVELING…":"F / LEVEL TO RIGHT":"",ce("#touch-level").classList.toggle("active",ft.state.level??!1);const s=performance.now();vt.render(Tt,Xt),so=performance.now()-s;const o=performance.now()-n;if(Ki+=o,si=Math.max(si,o),oi++,e-Yi>=1e3){const p=nt.takePerformanceSample();window.__monsterMapMetrics={fps:Math.round(oi*1e3/(e-Yi)),frameMs:Math.round(Ki/oi*10)/10,frameMsMax:Math.round(si*10)/10,physicsMs:+lo.toFixed(2),renderMs:+so.toFixed(2),terrainSampleMs:+p.heightSampleMs.toFixed(3),terrainSamples:p.heightSamples,terrainTileBuildMs:+p.tileBuildMs.toFixed(3),terrainTileBuilds:p.tileBuilds,pixelRatio:vt.getPixelRatio(),graphicsQuality:Ut,drawCalls:vt.info.render.calls,triangles:vt.info.render.triangles,geometries:vt.info.memory.geometries,textures:vt.info.memory.textures,heapMB:zh(),audioState:ht.getState(),audioRms:+ht.outputRms().toFixed(4),audioMuted:ht.isMuted(),volume:ht.getMasterVolume(),speed:ee.speed,position:[ee.pos.x,ee.pos.y,ee.pos.z],destroyed:ui,activeDebris:hn.activeCount,osmBuildings:mt.status.buildings,osmRoads:mt.status.roads,worldDataSource:mt.status.source,yaw:ee.yaw,pitch:ee.pitch,roll:ee.roll,steer:ft.state.steer,throttle:ft.state.throttle,nitro:ft.state.nitro,jump:ft.state.jump,grounded:ee.grounded,activeTouchActions:ft.touches.size,frontWheelAngles:Qt.frontWheels.map(u=>u.rotation.y),rearWheelAngles:Qt.wheels.filter(u=>!Qt.frontWheels.includes(u)).map(u=>u.rotation.y),wheelContacts:ee.wheelContacts.filter(u=>u.contact).length,averageCompression:ee.wheelContacts.reduce((u,m)=>u+m.compression,0)/Math.max(1,ee.wheelContacts.length),contactPitch:ee.contactPitch,contactRoll:ee.contactRoll,terrainOriginHeight:nt.heightAt(0,0),stuntAirtime:ut.airtime,stuntPoints:ut.currentPoints,bestStunt:ut.bestScore,stuntRolls:ut.rolls,stuntFlips:ut.flips,leveling:ft.state.level??!1},oi=0,Ki=0,si=0,Yi=e}}function Ti(){const e=Ta();vt.setPixelRatio(Math.min(devicePixelRatio||1,xa(Ut))),vt.setSize(e.width,e.height),Xt.aspect=e.width/Math.max(1,e.height),Xt.updateProjectionMatrix(),Zt?.resize()}window.addEventListener("resize",Ti);window.addEventListener("orientationchange",()=>setTimeout(Ti,180));window.visualViewport?.addEventListener("resize",Ti);const Vo=ce("#game");Vo.addEventListener("webglcontextlost",e=>{e.preventDefault(),ft.releaseAll(),qt=!0,ce("#pause-panel").classList.remove("hidden"),Gt(),It("Graphics paused. Return to the game when ready.")});Vo.addEventListener("webglcontextrestored",()=>{$n=performance.now(),Ti(),It("Graphics restored.")});await xi(xn);requestAnimationFrame(ko);
