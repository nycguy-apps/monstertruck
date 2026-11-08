const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./collision-world-9KrwgW50.js","./three.core-CW5gjFRN.js"])))=>i.map(i=>d[i]);
import{c as Yo,N as Qt,S as Ko,C as ze,F as oo,M as Nt,V as ne,R as $o,a as Et,w as Ki,W as Ua,b as Tn,d as ot,L as In,H as mi,U as pn,D as It,B as bt,e as Vn,f as _i,p as Zo,E as Qo,g as st,P as On,A as jo,h as bi,i as kt,j as ui,k as ma,l as zn,m as Wn,n as so,o as Jo,q as vn,r as fi,s as es,t as ts,u as yn,O as ns,v as is,x as as,y as rs,z as os,G as ss,I as ls,J as cs,K as ds,Q as us,T as fs,X as hs,Y as ps,Z as ms,_ as _s,$ as gs,a0 as vs,a1 as Ss,a2 as Ri,a3 as Sn,a4 as Jn,a5 as Es,a6 as Fn,a7 as Ms,a8 as xs,a9 as Ts,aa as As,ab as lo,ac as bs,ad as Rs,ae as ws,af as Cs,ag as He,ah as ys,ai as Ps,aj as Ls,ak as Xt,al as mn,am as jt,an as rt,ao as co,ap as un,aq as Gt,ar as hi,as as uo,at as fo,au as ho,av as po,aw as Ds,ax as Us,ay as Is,az as Ns,aA as mo,aB as ln,aC as Os,aD as Fs,aE as Bs,aF as _o,aG as Gs,aH as go,aI as vo,aJ as wi,aK as Ci,aL as yi,aM as Pi,aN as $e,aO as Ia,aP as Na,aQ as Oa,aR as Fa,aS as Ba,aT as Ga,aU as Ha,aV as ka,aW as Va,aX as za,aY as Wa,aZ as Xa,a_ as qa,a$ as Ya,b0 as Ka,b1 as $a,b2 as Za,b3 as Qa,b4 as ja,b5 as Ja,b6 as er,b7 as tr,b8 as nr,b9 as ir,ba as ar,bb as rr,bc as or,bd as sr,be as $i,bf as Zi,bg as Qi,bh as ji,bi as Ji,bj as ea,bk as ta,bl as Hs,bm as lr,bn as ks,bo as si,bp as Vs,bq as cr,br as dr,bs as ur,bt as na,bu as ia,bv as zs,bw as So,bx as Ws,by as gi,bz as Xs,bA as qs,bB as Eo,bC as Jt,bD as fr,bE as xn,bF as hr,bG as Mo,bH as Xn,bI as An,bJ as Ys,bK as xo,bL as Ks,bM as $s,bN as Zs,bO as pr,bP as St,bQ as Qs,bR as js,bS as Js,bT as el,bU as tl,bV as To,bW as nl,bX as il,bY as al,bZ as rl,b_ as ol,b$ as sl,c0 as ll,c1 as cl,c2 as dl,c3 as ul,c4 as fl,c5 as hl,c6 as Vt,c7 as mt,c8 as Mt,c9 as aa,ca as ra,cb as Ao,cc as Ht,cd as mr,ce as pl,cf as Li,cg as _r,ch as gr,ci as vr,cj as Kt,ck as bo,cl as ml,cm as _l,cn as gl,co as Ro,cp as vl,cq as Sl,cr as El}from"./three.core-CW5gjFRN.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const Ml="modulepreload",xl=function(e,n){return new URL(e,n).href},Sr={},oa=function(n,t,i){let r=Promise.resolve();if(t&&t.length>0){let s=function(p){return Promise.all(p.map(f=>Promise.resolve(f).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const o=document.getElementsByTagName("link"),m=document.querySelector("meta[property=csp-nonce]"),u=m?.nonce||m?.getAttribute("nonce");r=s(t.map(p=>{if(p=xl(p,i),p in Sr)return;Sr[p]=!0;const f=p.endsWith(".css"),g=f?'[rel="stylesheet"]':"";if(!!i)for(let M=o.length-1;M>=0;M--){const c=o[M];if(c.href===p&&(!f||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${p}"]${g}`))return;const T=document.createElement("link");if(T.rel=f?"stylesheet":Ml,f||(T.as="script"),T.crossOrigin="",T.href=p,u&&T.setAttribute("nonce",u),document.head.appendChild(T),f)return new Promise((M,c)=>{T.addEventListener("load",M),T.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${p}`)))})}))}function a(s){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s}return r.then(s=>{for(const o of s||[])o.status==="rejected"&&a(o.reason);return n().catch(a)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wo(){let e=null,n=!1,t=null,i=null;function r(a,s){t(a,s),i=e.requestAnimationFrame(r)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(r),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(a){t=a},setContext:function(a){e=a}}}function Tl(e){const n=new WeakMap;function t(o,m){const u=o.array,p=o.usage,f=u.byteLength,g=e.createBuffer();e.bindBuffer(m,g),e.bufferData(m,u,p),o.onUploadCallback();let v;if(u instanceof Float32Array)v=e.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)v=e.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?v=e.HALF_FLOAT:v=e.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=e.SHORT;else if(u instanceof Uint32Array)v=e.UNSIGNED_INT;else if(u instanceof Int32Array)v=e.INT;else if(u instanceof Int8Array)v=e.BYTE;else if(u instanceof Uint8Array)v=e.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,m,u){const p=m.array,f=m.updateRanges;if(e.bindBuffer(u,o),f.length===0)e.bufferSubData(u,0,p);else{f.sort((v,T)=>v.start-T.start);let g=0;for(let v=1;v<f.length;v++){const T=f[g],M=f[v];M.start<=T.start+T.count+1?T.count=Math.max(T.count,M.start+M.count-T.start):(++g,f[g]=M)}f.length=g+1;for(let v=0,T=f.length;v<T;v++){const M=f[v];e.bufferSubData(u,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}m.clearUpdateRanges()}m.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),n.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const m=n.get(o);m&&(e.deleteBuffer(m.buffer),n.delete(o))}function s(o,m){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const p=n.get(o);(!p||p.version<o.version)&&n.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=n.get(o);if(u===void 0)n.set(o,t(o,m));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,m),u.version=o.version}}return{get:r,remove:a,update:s}}var Al=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bl=`#ifdef USE_ALPHAHASH
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
#endif`,Rl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cl=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pl=`#ifdef USE_AOMAP
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
#endif`,Ll=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dl=`#ifdef USE_BATCHING
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
#endif`,Ul=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Il=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ol=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fl=`#ifdef USE_IRIDESCENCE
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
#endif`,Bl=`#ifdef USE_BUMPMAP
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
#endif`,Gl=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ql=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Yl=`#define PI 3.141592653589793
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
} // validated`,Kl=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$l=`vec3 transformedNormal = objectNormal;
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
#endif`,Zl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ql=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ec="gl_FragColor = linearToOutputTexel( gl_FragColor );",tc=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nc=`#ifdef USE_ENVMAP
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
#endif`,ic=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ac=`#ifdef USE_ENVMAP
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
#endif`,rc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oc=`#ifdef USE_ENVMAP
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
#endif`,sc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uc=`#ifdef USE_GRADIENTMAP
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
}`,fc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mc=`uniform bool receiveShadow;
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
#endif`,_c=`#ifdef USE_ENVMAP
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
#endif`,gc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ec=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mc=`PhysicalMaterial material;
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
#endif`,xc=`struct PhysicalMaterial {
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
}`,Tc=`
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
#endif`,Ac=`#if defined( RE_IndirectDiffuse )
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
#endif`,bc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Uc=`#if defined( USE_POINTS_UV )
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
#endif`,Ic=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Oc=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fc=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gc=`#ifdef USE_MORPHTARGETS
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
#endif`,Hc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vc=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qc=`#ifdef USE_NORMALMAP
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
#endif`,Yc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$c=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jc=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ed=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,td=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,id=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ad=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,od=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ld=`float getShadowMask() {
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
}`,cd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dd=`#ifdef USE_SKINNING
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
#endif`,ud=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fd=`#ifdef USE_SKINNING
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
#endif`,hd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,md=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_d=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gd=`#ifdef USE_TRANSMISSION
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
#endif`,vd=`#ifdef USE_TRANSMISSION
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
#endif`,Sd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ed=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Md=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Td=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ad=`uniform sampler2D t2D;
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
}`,bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yd=`#include <common>
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
}`,Pd=`#if DEPTH_PACKING == 3200
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
}`,Ld=`#define DISTANCE
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
}`,Dd=`#define DISTANCE
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
}`,Ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Id=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nd=`uniform float scale;
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
}`,Od=`uniform vec3 diffuse;
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
}`,Fd=`#include <common>
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
}`,Bd=`uniform vec3 diffuse;
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
}`,Gd=`#define LAMBERT
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
}`,Hd=`#define LAMBERT
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
}`,kd=`#define MATCAP
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
}`,Vd=`#define MATCAP
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
}`,zd=`#define NORMAL
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
}`,Wd=`#define NORMAL
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
}`,Xd=`#define PHONG
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
}`,qd=`#define PHONG
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
}`,Yd=`#define STANDARD
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
}`,Kd=`#define STANDARD
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
}`,$d=`#define TOON
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
}`,Zd=`#define TOON
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
}`,Qd=`uniform float size;
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
}`,jd=`uniform vec3 diffuse;
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
}`,Jd=`#include <common>
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
}`,eu=`uniform vec3 color;
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
}`,tu=`uniform float rotation;
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
}`,nu=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:Al,alphahash_pars_fragment:bl,alphamap_fragment:Rl,alphamap_pars_fragment:wl,alphatest_fragment:Cl,alphatest_pars_fragment:yl,aomap_fragment:Pl,aomap_pars_fragment:Ll,batching_pars_vertex:Dl,batching_vertex:Ul,begin_vertex:Il,beginnormal_vertex:Nl,bsdfs:Ol,iridescence_fragment:Fl,bumpmap_pars_fragment:Bl,clipping_planes_fragment:Gl,clipping_planes_pars_fragment:Hl,clipping_planes_pars_vertex:kl,clipping_planes_vertex:Vl,color_fragment:zl,color_pars_fragment:Wl,color_pars_vertex:Xl,color_vertex:ql,common:Yl,cube_uv_reflection_fragment:Kl,defaultnormal_vertex:$l,displacementmap_pars_vertex:Zl,displacementmap_vertex:Ql,emissivemap_fragment:jl,emissivemap_pars_fragment:Jl,colorspace_fragment:ec,colorspace_pars_fragment:tc,envmap_fragment:nc,envmap_common_pars_fragment:ic,envmap_pars_fragment:ac,envmap_pars_vertex:rc,envmap_physical_pars_fragment:_c,envmap_vertex:oc,fog_vertex:sc,fog_pars_vertex:lc,fog_fragment:cc,fog_pars_fragment:dc,gradientmap_pars_fragment:uc,lightmap_pars_fragment:fc,lights_lambert_fragment:hc,lights_lambert_pars_fragment:pc,lights_pars_begin:mc,lights_toon_fragment:gc,lights_toon_pars_fragment:vc,lights_phong_fragment:Sc,lights_phong_pars_fragment:Ec,lights_physical_fragment:Mc,lights_physical_pars_fragment:xc,lights_fragment_begin:Tc,lights_fragment_maps:Ac,lights_fragment_end:bc,logdepthbuf_fragment:Rc,logdepthbuf_pars_fragment:wc,logdepthbuf_pars_vertex:Cc,logdepthbuf_vertex:yc,map_fragment:Pc,map_pars_fragment:Lc,map_particle_fragment:Dc,map_particle_pars_fragment:Uc,metalnessmap_fragment:Ic,metalnessmap_pars_fragment:Nc,morphinstance_vertex:Oc,morphcolor_vertex:Fc,morphnormal_vertex:Bc,morphtarget_pars_vertex:Gc,morphtarget_vertex:Hc,normal_fragment_begin:kc,normal_fragment_maps:Vc,normal_pars_fragment:zc,normal_pars_vertex:Wc,normal_vertex:Xc,normalmap_pars_fragment:qc,clearcoat_normal_fragment_begin:Yc,clearcoat_normal_fragment_maps:Kc,clearcoat_pars_fragment:$c,iridescence_pars_fragment:Zc,opaque_fragment:Qc,packing:jc,premultiplied_alpha_fragment:Jc,project_vertex:ed,dithering_fragment:td,dithering_pars_fragment:nd,roughnessmap_fragment:id,roughnessmap_pars_fragment:ad,shadowmap_pars_fragment:rd,shadowmap_pars_vertex:od,shadowmap_vertex:sd,shadowmask_pars_fragment:ld,skinbase_vertex:cd,skinning_pars_vertex:dd,skinning_vertex:ud,skinnormal_vertex:fd,specularmap_fragment:hd,specularmap_pars_fragment:pd,tonemapping_fragment:md,tonemapping_pars_fragment:_d,transmission_fragment:gd,transmission_pars_fragment:vd,uv_pars_fragment:Sd,uv_pars_vertex:Ed,uv_vertex:Md,worldpos_vertex:xd,background_vert:Td,background_frag:Ad,backgroundCube_vert:bd,backgroundCube_frag:Rd,cube_vert:wd,cube_frag:Cd,depth_vert:yd,depth_frag:Pd,distanceRGBA_vert:Ld,distanceRGBA_frag:Dd,equirect_vert:Ud,equirect_frag:Id,linedashed_vert:Nd,linedashed_frag:Od,meshbasic_vert:Fd,meshbasic_frag:Bd,meshlambert_vert:Gd,meshlambert_frag:Hd,meshmatcap_vert:kd,meshmatcap_frag:Vd,meshnormal_vert:zd,meshnormal_frag:Wd,meshphong_vert:Xd,meshphong_frag:qd,meshphysical_vert:Yd,meshphysical_frag:Kd,meshtoon_vert:$d,meshtoon_frag:Zd,points_vert:Qd,points_frag:jd,shadow_vert:Jd,shadow_frag:eu,sprite_vert:tu,sprite_frag:nu},ae={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Ut={basic:{uniforms:St([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:St([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new ze(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:St([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:St([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:St([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new ze(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:St([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:St([ae.points,ae.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:St([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:St([ae.common,ae.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:St([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:St([ae.sprite,ae.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:St([ae.common,ae.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:St([ae.lights,ae.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Ut.physical={uniforms:St([Ut.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const ei={r:0,b:0,g:0},an=new xn,iu=new Nt;function au(e,n,t,i,r,a,s){const o=new ze(0);let m=a===!0?0:1,u,p,f=null,g=0,v=null;function T(R){let x=R.isScene===!0?R.background:null;return x&&x.isTexture&&(x=(R.backgroundBlurriness>0?t:n).get(x)),x}function M(R){let x=!1;const D=T(R);D===null?l(o,m):D&&D.isColor&&(l(D,1),x=!0);const C=e.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function c(R,x){const D=T(x);D&&(D.isCubeTexture||D.mapping===gi)?(p===void 0&&(p=new rt(new Jt(1,1,1),new Xt({name:"BackgroundCubeMaterial",uniforms:fr(Ut.backgroundCube.uniforms),vertexShader:Ut.backgroundCube.vertexShader,fragmentShader:Ut.backgroundCube.fragmentShader,side:bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(C,U,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),an.copy(x.backgroundRotation),an.x*=-1,an.y*=-1,an.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(an.y*=-1,an.z*=-1),p.material.uniforms.envMap.value=D,p.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(iu.makeRotationFromEuler(an)),p.material.toneMapped=ot.getTransfer(D.colorSpace)!==$e,(f!==D||g!==D.version||v!==e.toneMapping)&&(p.material.needsUpdate=!0,f=D,g=D.version,v=e.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null)):D&&D.isTexture&&(u===void 0&&(u=new rt(new po(2,2),new Xt({name:"BackgroundMaterial",uniforms:fr(Ut.background.uniforms),vertexShader:Ut.background.vertexShader,fragmentShader:Ut.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=D,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=ot.getTransfer(D.colorSpace)!==$e,D.matrixAutoUpdate===!0&&D.updateMatrix(),u.material.uniforms.uvTransform.value.copy(D.matrix),(f!==D||g!==D.version||v!==e.toneMapping)&&(u.material.needsUpdate=!0,f=D,g=D.version,v=e.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null))}function l(R,x){R.getRGB(ei,Eo(e)),i.buffers.color.setClear(ei.r,ei.g,ei.b,x,s)}function b(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(R,x=1){o.set(R),m=x,l(o,m)},getClearAlpha:function(){return m},setClearAlpha:function(R){m=R,l(o,m)},render:M,addToRenderList:c,dispose:b}}function ru(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},r=g(null);let a=r,s=!1;function o(S,L,B,X,q){let $=!1;const W=f(X,B,L);a!==W&&(a=W,u(a.object)),$=v(S,X,B,q),$&&T(S,X,B,q),q!==null&&n.update(q,e.ELEMENT_ARRAY_BUFFER),($||s)&&(s=!1,x(S,L,B,X),q!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(q).buffer))}function m(){return e.createVertexArray()}function u(S){return e.bindVertexArray(S)}function p(S){return e.deleteVertexArray(S)}function f(S,L,B){const X=B.wireframe===!0;let q=i[S.id];q===void 0&&(q={},i[S.id]=q);let $=q[L.id];$===void 0&&($={},q[L.id]=$);let W=$[X];return W===void 0&&(W=g(m()),$[X]=W),W}function g(S){const L=[],B=[],X=[];for(let q=0;q<t;q++)L[q]=0,B[q]=0,X[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:X,object:S,attributes:{},index:null}}function v(S,L,B,X){const q=a.attributes,$=L.attributes;let W=0;const ie=B.getAttributes();for(const k in ie)if(ie[k].location>=0){const be=q[k];let Ie=$[k];if(Ie===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(Ie=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(Ie=S.instanceColor)),be===void 0||be.attribute!==Ie||Ie&&be.data!==Ie.data)return!0;W++}return a.attributesNum!==W||a.index!==X}function T(S,L,B,X){const q={},$=L.attributes;let W=0;const ie=B.getAttributes();for(const k in ie)if(ie[k].location>=0){let be=$[k];be===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(be=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(be=S.instanceColor));const Ie={};Ie.attribute=be,be&&be.data&&(Ie.data=be.data),q[k]=Ie,W++}a.attributes=q,a.attributesNum=W,a.index=X}function M(){const S=a.newAttributes;for(let L=0,B=S.length;L<B;L++)S[L]=0}function c(S){l(S,0)}function l(S,L){const B=a.newAttributes,X=a.enabledAttributes,q=a.attributeDivisors;B[S]=1,X[S]===0&&(e.enableVertexAttribArray(S),X[S]=1),q[S]!==L&&(e.vertexAttribDivisor(S,L),q[S]=L)}function b(){const S=a.newAttributes,L=a.enabledAttributes;for(let B=0,X=L.length;B<X;B++)L[B]!==S[B]&&(e.disableVertexAttribArray(B),L[B]=0)}function R(S,L,B,X,q,$,W){W===!0?e.vertexAttribIPointer(S,L,B,q,$):e.vertexAttribPointer(S,L,B,X,q,$)}function x(S,L,B,X){M();const q=X.attributes,$=B.getAttributes(),W=L.defaultAttributeValues;for(const ie in $){const k=$[ie];if(k.location>=0){let Ee=q[ie];if(Ee===void 0&&(ie==="instanceMatrix"&&S.instanceMatrix&&(Ee=S.instanceMatrix),ie==="instanceColor"&&S.instanceColor&&(Ee=S.instanceColor)),Ee!==void 0){const be=Ee.normalized,Ie=Ee.itemSize,ke=n.get(Ee);if(ke===void 0)continue;const nt=ke.buffer,et=ke.type,Xe=ke.bytesPerElement,V=et===e.INT||et===e.UNSIGNED_INT||Ee.gpuType===mo;if(Ee.isInterleavedBufferAttribute){const K=Ee.data,fe=K.stride,Pe=Ee.offset;if(K.isInstancedInterleavedBuffer){for(let xe=0;xe<k.locationSize;xe++)l(k.location+xe,K.meshPerAttribute);S.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let xe=0;xe<k.locationSize;xe++)c(k.location+xe);e.bindBuffer(e.ARRAY_BUFFER,nt);for(let xe=0;xe<k.locationSize;xe++)R(k.location+xe,Ie/k.locationSize,et,be,fe*Xe,(Pe+Ie/k.locationSize*xe)*Xe,V)}else{if(Ee.isInstancedBufferAttribute){for(let K=0;K<k.locationSize;K++)l(k.location+K,Ee.meshPerAttribute);S.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let K=0;K<k.locationSize;K++)c(k.location+K);e.bindBuffer(e.ARRAY_BUFFER,nt);for(let K=0;K<k.locationSize;K++)R(k.location+K,Ie/k.locationSize,et,be,Ie*Xe,Ie/k.locationSize*K*Xe,V)}}else if(W!==void 0){const be=W[ie];if(be!==void 0)switch(be.length){case 2:e.vertexAttrib2fv(k.location,be);break;case 3:e.vertexAttrib3fv(k.location,be);break;case 4:e.vertexAttrib4fv(k.location,be);break;default:e.vertexAttrib1fv(k.location,be)}}}}b()}function D(){F();for(const S in i){const L=i[S];for(const B in L){const X=L[B];for(const q in X)p(X[q].object),delete X[q];delete L[B]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const B in L){const X=L[B];for(const q in X)p(X[q].object),delete X[q];delete L[B]}delete i[S.id]}function U(S){for(const L in i){const B=i[L];if(B[S.id]===void 0)continue;const X=B[S.id];for(const q in X)p(X[q].object),delete X[q];delete B[S.id]}}function F(){_(),s=!0,a!==r&&(a=r,u(a.object))}function _(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:F,resetDefaultState:_,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:U,initAttributes:M,enableAttribute:c,disableUnusedAttributes:b}}function ou(e,n,t){let i;function r(u){i=u}function a(u,p){e.drawArrays(i,u,p),t.update(p,i,1)}function s(u,p,f){f!==0&&(e.drawArraysInstanced(i,u,p,f),t.update(p,i,f))}function o(u,p,f){if(f===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,p,0,f);let v=0;for(let T=0;T<f;T++)v+=p[T];t.update(v,i,1)}function m(u,p,f,g){if(f===0)return;const v=n.get("WEBGL_multi_draw");if(v===null)for(let T=0;T<u.length;T++)s(u[T],p[T],g[T]);else{v.multiDrawArraysInstancedWEBGL(i,u,0,p,0,g,0,f);let T=0;for(let M=0;M<f;M++)T+=p[M]*g[M];t.update(T,i,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=m}function su(e,n,t,i){let r;function a(){if(r!==void 0)return r;if(n.has("EXT_texture_filter_anisotropic")===!0){const U=n.get("EXT_texture_filter_anisotropic");r=e.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(U){return!(U!==kt&&i.convert(U)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(U){const F=U===mi&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(U!==pn&&i.convert(U)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==ln&&!F)}function m(U){if(U==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const p=m(u);p!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",p,"instead."),u=p);const f=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),v=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),T=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),c=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),l=e.getParameter(e.MAX_VERTEX_ATTRIBS),b=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),R=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),D=T>0,C=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:m,textureFormatReadable:s,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:g,maxTextures:v,maxVertexTextures:T,maxTextureSize:M,maxCubemapSize:c,maxAttributes:l,maxVertexUniforms:b,maxVaryings:R,maxFragmentUniforms:x,vertexTextures:D,maxSamples:C}}function lu(e){const n=this;let t=null,i=0,r=!1,a=!1;const s=new Cs,o=new He,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(f,g){const v=f.length!==0||g||i!==0||r;return r=g,i=f.length,v},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,g){t=p(f,g,0)},this.setState=function(f,g,v){const T=f.clippingPlanes,M=f.clipIntersection,c=f.clipShadows,l=e.get(f);if(!r||T===null||T.length===0||a&&!c)a?p(null):u();else{const b=a?0:i,R=b*4;let x=l.clippingState||null;m.value=x,x=p(T,g,R,v);for(let D=0;D!==R;++D)x[D]=t[D];l.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function u(){m.value!==t&&(m.value=t,m.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function p(f,g,v,T){const M=f!==null?f.length:0;let c=null;if(M!==0){if(c=m.value,T!==!0||c===null){const l=v+M*4,b=g.matrixWorldInverse;o.getNormalMatrix(b),(c===null||c.length<l)&&(c=new Float32Array(l));for(let R=0,x=v;R!==M;++R,x+=4)s.copy(f[R]).applyMatrix4(b,o),s.normal.toArray(c,x),c[x+3]=s.constant}m.value=c,m.needsUpdate=!0}return n.numPlanes=M,n.numIntersection=0,c}}function cu(e){let n=new WeakMap;function t(s,o){return o===na?s.mapping=Xn:o===ia&&(s.mapping=An),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===na||o===ia)if(n.has(s)){const m=n.get(s).texture;return t(m,s.mapping)}else{const m=s.image;if(m&&m.height>0){const u=new zs(m.height);return u.fromEquirectangularTexture(e,s),n.set(s,u),s.addEventListener("dispose",r),t(u.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const m=n.get(o);m!==void 0&&(n.delete(o),m.dispose())}function a(){n=new WeakMap}return{get:i,dispose:a}}const En=4,Er=[.125,.215,.35,.446,.526,.582],sn=20,Di=new Ys,Mr=new ze;let Ui=null,Ii=0,Ni=0,Oi=!1;const on=(1+Math.sqrt(5))/2,gn=1/on,xr=[new ne(-on,gn,0),new ne(on,gn,0),new ne(-gn,0,on),new ne(gn,0,on),new ne(0,on,-gn),new ne(0,on,gn),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)],du=new ne;class Tr{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,t=0,i=.1,r=100,a={}){const{size:s=256,position:o=du}=a;Ui=this._renderer.getRenderTarget(),Ii=this._renderer.getActiveCubeFace(),Ni=this._renderer.getActiveMipmapLevel(),Oi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(n,i,r,m,o),t>0&&this._blur(m,0,0,t),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=br(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(Ui,Ii,Ni),this._renderer.xr.enabled=Oi,n.scissorTest=!1,ti(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===Xn||n.mapping===An?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),Ui=this._renderer.getRenderTarget(),Ii=this._renderer.getActiveCubeFace(),Ni=this._renderer.getActiveMipmapLevel(),Oi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:mi,format:kt,colorSpace:_i,depthBuffer:!1},r=Ar(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ar(n,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uu(a)),this._blurMaterial=fu(a,n,t)}return r}_compileMaterial(n){const t=new rt(this._lodPlanes[0],n);this._renderer.compile(t,Di)}_sceneToCubeUV(n,t,i,r,a){const m=new On(90,1,t,i),u=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],f=this._renderer,g=f.autoClear,v=f.toneMapping;f.getClearColor(Mr),f.toneMapping=Qt,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const M=new xo({name:"PMREM.Background",side:bt,depthWrite:!1,depthTest:!1}),c=new rt(new Jt,M);let l=!1;const b=n.background;b?b.isColor&&(M.color.copy(b),n.background=null,l=!0):(M.color.copy(Mr),l=!0);for(let R=0;R<6;R++){const x=R%3;x===0?(m.up.set(0,u[R],0),m.position.set(a.x,a.y,a.z),m.lookAt(a.x+p[R],a.y,a.z)):x===1?(m.up.set(0,0,u[R]),m.position.set(a.x,a.y,a.z),m.lookAt(a.x,a.y+p[R],a.z)):(m.up.set(0,u[R],0),m.position.set(a.x,a.y,a.z),m.lookAt(a.x,a.y,a.z+p[R]));const D=this._cubeSize;ti(r,x*D,R>2?D:0,D,D),f.setRenderTarget(r),l&&f.render(c,m),f.render(n,m)}c.geometry.dispose(),c.material.dispose(),f.toneMapping=v,f.autoClear=g,n.background=b}_textureToCubeUV(n,t){const i=this._renderer,r=n.mapping===Xn||n.mapping===An;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rr()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=br());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new rt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=n;const m=this._cubeSize;ti(t,0,0,3*m,2*m),i.setRenderTarget(t),i.render(s,Di)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=xr[(r-a-1)%xr.length];this._blur(n,a-1,a,s,o)}t.autoClear=i}_blur(n,t,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(n,s,t,i,r,"latitudinal",a),this._halfBlur(s,n,i,i,r,"longitudinal",a)}_halfBlur(n,t,i,r,a,s,o){const m=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,f=new rt(this._lodPlanes[r],u),g=u.uniforms,v=this._sizeLods[i]-1,T=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*sn-1),M=a/T,c=isFinite(a)?1+Math.floor(p*M):sn;c>sn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${c} samples when the maximum is set to ${sn}`);const l=[];let b=0;for(let U=0;U<sn;++U){const F=U/M,_=Math.exp(-F*F/2);l.push(_),U===0?b+=_:U<c&&(b+=2*_)}for(let U=0;U<l.length;U++)l[U]=l[U]/b;g.envMap.value=n.texture,g.samples.value=c,g.weights.value=l,g.latitudinal.value=s==="latitudinal",o&&(g.poleAxis.value=o);const{_lodMax:R}=this;g.dTheta.value=T,g.mipInt.value=R-i;const x=this._sizeLods[r],D=3*x*(r>R-En?r-R+En:0),C=4*(this._cubeSize-x);ti(t,D,C,3*x,2*x),m.setRenderTarget(t),m.render(f,Di)}}function uu(e){const n=[],t=[],i=[];let r=e;const a=e-En+1+Er.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let m=1/o;s>e-En?m=Er[s-e+En-1]:s===0&&(m=0),i.push(m);const u=1/(o-2),p=-u,f=1+u,g=[p,p,f,p,f,f,p,p,f,f,p,f],v=6,T=6,M=3,c=2,l=1,b=new Float32Array(M*T*v),R=new Float32Array(c*T*v),x=new Float32Array(l*T*v);for(let C=0;C<v;C++){const U=C%3*2/3-1,F=C>2?0:-1,_=[U,F,0,U+2/3,F,0,U+2/3,F+1,0,U,F,0,U+2/3,F+1,0,U,F+1,0];b.set(_,M*T*C),R.set(g,c*T*C);const S=[C,C,C,C,C,C];x.set(S,l*T*C)}const D=new mn;D.setAttribute("position",new jt(b,M)),D.setAttribute("uv",new jt(R,c)),D.setAttribute("faceIndex",new jt(x,l)),n.push(D),r>En&&r--}return{lodPlanes:n,sizeLods:t,sigmas:i}}function Ar(e,n,t){const i=new Tn(e,n,t);return i.texture.mapping=gi,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ti(e,n,t,i,r){e.viewport.set(n,t,i,r),e.scissor.set(n,t,i,r)}function fu(e,n,t){const i=new Float32Array(sn),r=new ne(0,1,0);return new Xt({name:"SphericalGaussianBlur",defines:{n:sn,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_a(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function br(){return new Xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_a(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function Rr(){return new Xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function _a(){return`

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
	`}function hu(e){let n=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const m=o.mapping,u=m===na||m===ia,p=m===Xn||m===An;if(u||p){let f=n.get(o);const g=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==g)return t===null&&(t=new Tr(e)),f=u?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,n.set(o,f),f.texture;if(f!==void 0)return f.texture;{const v=o.image;return u&&v&&v.height>0||p&&v&&r(v)?(t===null&&(t=new Tr(e)),f=u?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,n.set(o,f),o.addEventListener("dispose",a),f.texture):null}}}return o}function r(o){let m=0;const u=6;for(let p=0;p<u;p++)o[p]!==void 0&&m++;return m===u}function a(o){const m=o.target;m.removeEventListener("dispose",a);const u=n.get(m);u!==void 0&&(n.delete(m),u.dispose())}function s(){n=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function pu(e){const n={};function t(i){if(n[i]!==void 0)return n[i];let r;switch(i){case"WEBGL_depth_texture":r=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=e.getExtension(i)}return n[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ki("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function mu(e,n,t,i){const r={},a=new WeakMap;function s(f){const g=f.target;g.index!==null&&n.remove(g.index);for(const T in g.attributes)n.remove(g.attributes[T]);g.removeEventListener("dispose",s),delete r[g.id];const v=a.get(g);v&&(n.remove(v),a.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function o(f,g){return r[g.id]===!0||(g.addEventListener("dispose",s),r[g.id]=!0,t.memory.geometries++),g}function m(f){const g=f.attributes;for(const v in g)n.update(g[v],e.ARRAY_BUFFER)}function u(f){const g=[],v=f.index,T=f.attributes.position;let M=0;if(v!==null){const b=v.array;M=v.version;for(let R=0,x=b.length;R<x;R+=3){const D=b[R+0],C=b[R+1],U=b[R+2];g.push(D,C,C,U,U,D)}}else if(T!==void 0){const b=T.array;M=T.version;for(let R=0,x=b.length/3-1;R<x;R+=3){const D=R+0,C=R+1,U=R+2;g.push(D,C,C,U,U,D)}}else return;const c=new(Zs(g)?Ks:$s)(g,1);c.version=M;const l=a.get(f);l&&n.remove(l),a.set(f,c)}function p(f){const g=a.get(f);if(g){const v=f.index;v!==null&&g.version<v.version&&u(f)}else u(f);return a.get(f)}return{get:o,update:m,getWireframeAttribute:p}}function _u(e,n,t){let i;function r(g){i=g}let a,s;function o(g){a=g.type,s=g.bytesPerElement}function m(g,v){e.drawElements(i,v,a,g*s),t.update(v,i,1)}function u(g,v,T){T!==0&&(e.drawElementsInstanced(i,v,a,g*s,T),t.update(v,i,T))}function p(g,v,T){if(T===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,v,0,a,g,0,T);let c=0;for(let l=0;l<T;l++)c+=v[l];t.update(c,i,1)}function f(g,v,T,M){if(T===0)return;const c=n.get("WEBGL_multi_draw");if(c===null)for(let l=0;l<g.length;l++)u(g[l]/s,v[l],M[l]);else{c.multiDrawElementsInstancedWEBGL(i,v,0,a,g,0,M,0,T);let l=0;for(let b=0;b<T;b++)l+=v[b]*M[b];t.update(l,i,1)}}this.setMode=r,this.setIndex=o,this.render=m,this.renderInstances=u,this.renderMultiDraw=p,this.renderMultiDrawInstances=f}function gu(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case e.TRIANGLES:t.triangles+=o*(a/3);break;case e.LINES:t.lines+=o*(a/2);break;case e.LINE_STRIP:t.lines+=o*(a-1);break;case e.LINE_LOOP:t.lines+=o*a;break;case e.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:r,update:i}}function vu(e,n,t){const i=new WeakMap,r=new Et;function a(s,o,m){const u=s.morphTargetInfluences,p=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=p!==void 0?p.length:0;let g=i.get(o);if(g===void 0||g.count!==f){let _=function(){U.dispose(),i.delete(o),o.removeEventListener("dispose",_)};g!==void 0&&g.texture.dispose();const v=o.morphAttributes.position!==void 0,T=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,c=o.morphAttributes.position||[],l=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let R=0;v===!0&&(R=1),T===!0&&(R=2),M===!0&&(R=3);let x=o.attributes.position.count*R,D=1;x>n.maxTextureSize&&(D=Math.ceil(x/n.maxTextureSize),x=n.maxTextureSize);const C=new Float32Array(x*D*4*f),U=new So(C,x,D,f);U.type=ln,U.needsUpdate=!0;const F=R*4;for(let S=0;S<f;S++){const L=c[S],B=l[S],X=b[S],q=x*D*4*S;for(let $=0;$<L.count;$++){const W=$*F;v===!0&&(r.fromBufferAttribute(L,$),C[q+W+0]=r.x,C[q+W+1]=r.y,C[q+W+2]=r.z,C[q+W+3]=0),T===!0&&(r.fromBufferAttribute(B,$),C[q+W+4]=r.x,C[q+W+5]=r.y,C[q+W+6]=r.z,C[q+W+7]=0),M===!0&&(r.fromBufferAttribute(X,$),C[q+W+8]=r.x,C[q+W+9]=r.y,C[q+W+10]=r.z,C[q+W+11]=X.itemSize===4?r.w:1)}}g={count:f,texture:U,size:new st(x,D)},i.set(o,g),o.addEventListener("dispose",_)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)m.getUniforms().setValue(e,"morphTexture",s.morphTexture,t);else{let v=0;for(let M=0;M<u.length;M++)v+=u[M];const T=o.morphTargetsRelative?1:1-v;m.getUniforms().setValue(e,"morphTargetBaseInfluence",T),m.getUniforms().setValue(e,"morphTargetInfluences",u)}m.getUniforms().setValue(e,"morphTargetsTexture",g.texture,t),m.getUniforms().setValue(e,"morphTargetsTextureSize",g.size)}return{update:a}}function Su(e,n,t,i){let r=new WeakMap;function a(m){const u=i.render.frame,p=m.geometry,f=n.get(m,p);if(r.get(f)!==u&&(n.update(f),r.set(f,u)),m.isInstancedMesh&&(m.hasEventListener("dispose",o)===!1&&m.addEventListener("dispose",o),r.get(m)!==u&&(t.update(m.instanceMatrix,e.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,e.ARRAY_BUFFER),r.set(m,u))),m.isSkinnedMesh){const g=m.skeleton;r.get(g)!==u&&(g.update(),r.set(g,u))}return f}function s(){r=new WeakMap}function o(m){const u=m.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:s}}const Co=new sl,wr=new so(1,1),yo=new So,Po=new ol,Lo=new rl,Cr=[],yr=[],Pr=new Float32Array(16),Lr=new Float32Array(9),Dr=new Float32Array(4);function Rn(e,n,t){const i=e[0];if(i<=0||i>0)return e;const r=n*t;let a=Cr[r];if(a===void 0&&(a=new Float32Array(r),Cr[r]=a),n!==0){i.toArray(a,0);for(let s=1,o=0;s!==n;++s)o+=t,e[s].toArray(a,o)}return a}function lt(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function ct(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function vi(e,n){let t=yr[n];t===void 0&&(t=new Int32Array(n),yr[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function Eu(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function Mu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(lt(t,n))return;e.uniform2fv(this.addr,n),ct(t,n)}}function xu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(lt(t,n))return;e.uniform3fv(this.addr,n),ct(t,n)}}function Tu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(lt(t,n))return;e.uniform4fv(this.addr,n),ct(t,n)}}function Au(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(lt(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),ct(t,n)}else{if(lt(t,i))return;Dr.set(i),e.uniformMatrix2fv(this.addr,!1,Dr),ct(t,i)}}function bu(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(lt(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),ct(t,n)}else{if(lt(t,i))return;Lr.set(i),e.uniformMatrix3fv(this.addr,!1,Lr),ct(t,i)}}function Ru(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(lt(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),ct(t,n)}else{if(lt(t,i))return;Pr.set(i),e.uniformMatrix4fv(this.addr,!1,Pr),ct(t,i)}}function wu(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function Cu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(lt(t,n))return;e.uniform2iv(this.addr,n),ct(t,n)}}function yu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(lt(t,n))return;e.uniform3iv(this.addr,n),ct(t,n)}}function Pu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(lt(t,n))return;e.uniform4iv(this.addr,n),ct(t,n)}}function Lu(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function Du(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(lt(t,n))return;e.uniform2uiv(this.addr,n),ct(t,n)}}function Uu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(lt(t,n))return;e.uniform3uiv(this.addr,n),ct(t,n)}}function Iu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(lt(t,n))return;e.uniform4uiv(this.addr,n),ct(t,n)}}function Nu(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);let a;this.type===e.SAMPLER_2D_SHADOW?(wr.compareFunction=lo,a=wr):a=Co,t.setTexture2D(n||a,r)}function Ou(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(n||Po,r)}function Fu(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(n||Lo,r)}function Bu(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(n||yo,r)}function Gu(e){switch(e){case 5126:return Eu;case 35664:return Mu;case 35665:return xu;case 35666:return Tu;case 35674:return Au;case 35675:return bu;case 35676:return Ru;case 5124:case 35670:return wu;case 35667:case 35671:return Cu;case 35668:case 35672:return yu;case 35669:case 35673:return Pu;case 5125:return Lu;case 36294:return Du;case 36295:return Uu;case 36296:return Iu;case 35678:case 36198:case 36298:case 36306:case 35682:return Nu;case 35679:case 36299:case 36307:return Ou;case 35680:case 36300:case 36308:case 36293:return Fu;case 36289:case 36303:case 36311:case 36292:return Bu}}function Hu(e,n){e.uniform1fv(this.addr,n)}function ku(e,n){const t=Rn(n,this.size,2);e.uniform2fv(this.addr,t)}function Vu(e,n){const t=Rn(n,this.size,3);e.uniform3fv(this.addr,t)}function zu(e,n){const t=Rn(n,this.size,4);e.uniform4fv(this.addr,t)}function Wu(e,n){const t=Rn(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function Xu(e,n){const t=Rn(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function qu(e,n){const t=Rn(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function Yu(e,n){e.uniform1iv(this.addr,n)}function Ku(e,n){e.uniform2iv(this.addr,n)}function $u(e,n){e.uniform3iv(this.addr,n)}function Zu(e,n){e.uniform4iv(this.addr,n)}function Qu(e,n){e.uniform1uiv(this.addr,n)}function ju(e,n){e.uniform2uiv(this.addr,n)}function Ju(e,n){e.uniform3uiv(this.addr,n)}function ef(e,n){e.uniform4uiv(this.addr,n)}function tf(e,n,t){const i=this.cache,r=n.length,a=vi(t,r);lt(i,a)||(e.uniform1iv(this.addr,a),ct(i,a));for(let s=0;s!==r;++s)t.setTexture2D(n[s]||Co,a[s])}function nf(e,n,t){const i=this.cache,r=n.length,a=vi(t,r);lt(i,a)||(e.uniform1iv(this.addr,a),ct(i,a));for(let s=0;s!==r;++s)t.setTexture3D(n[s]||Po,a[s])}function af(e,n,t){const i=this.cache,r=n.length,a=vi(t,r);lt(i,a)||(e.uniform1iv(this.addr,a),ct(i,a));for(let s=0;s!==r;++s)t.setTextureCube(n[s]||Lo,a[s])}function rf(e,n,t){const i=this.cache,r=n.length,a=vi(t,r);lt(i,a)||(e.uniform1iv(this.addr,a),ct(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(n[s]||yo,a[s])}function of(e){switch(e){case 5126:return Hu;case 35664:return ku;case 35665:return Vu;case 35666:return zu;case 35674:return Wu;case 35675:return Xu;case 35676:return qu;case 5124:case 35670:return Yu;case 35667:case 35671:return Ku;case 35668:case 35672:return $u;case 35669:case 35673:return Zu;case 5125:return Qu;case 36294:return ju;case 36295:return Ju;case 36296:return ef;case 35678:case 36198:case 36298:case 36306:case 35682:return tf;case 35679:case 36299:case 36307:return nf;case 35680:case 36300:case 36308:case 36293:return af;case 36289:case 36303:case 36311:case 36292:return rf}}class sf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Gu(t.type)}}class lf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=of(t.type)}}class cf{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(n,t[o.id],i)}}}const Fi=/(\w+)(\])?(\[|\.)?/g;function Ur(e,n){e.seq.push(n),e.map[n.id]=n}function df(e,n,t){const i=e.name,r=i.length;for(Fi.lastIndex=0;;){const a=Fi.exec(i),s=Fi.lastIndex;let o=a[1];const m=a[2]==="]",u=a[3];if(m&&(o=o|0),u===void 0||u==="["&&s+2===r){Ur(t,u===void 0?new sf(o,e,n):new lf(o,e,n));break}else{let f=t.map[o];f===void 0&&(f=new cf(o),Ur(t,f)),t=f}}}class li{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=n.getActiveUniform(t,r),s=n.getUniformLocation(t,a.name);df(a,s,this)}}setValue(n,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(n,i,r)}setOptional(n,t,i){const r=t[i];r!==void 0&&this.setValue(n,i,r)}static upload(n,t,i,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],m=i[o.id];m.needsUpdate!==!1&&o.setValue(n,m.value,r)}}static seqWithValue(n,t){const i=[];for(let r=0,a=n.length;r!==a;++r){const s=n[r];s.id in t&&i.push(s)}return i}}function Ir(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const uf=37297;let ff=0;function hf(e,n){const t=e.split(`
`),i=[],r=Math.max(n-6,0),a=Math.min(n+6,t.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===n?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const Nr=new He;function pf(e){ot._getMatrix(Nr,ot.workingColorSpace,e);const n=`mat3( ${Nr.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(e)){case Mo:return[n,"LinearTransferOETF"];case $e:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function Or(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),a=(e.getShaderInfoLog(n)||"").trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+hf(e.getShaderSource(n),o)}else return a}function mf(e,n){const t=pf(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function _f(e,n){let t;switch(n){case al:t="Linear";break;case il:t="Reinhard";break;case nl:t="Cineon";break;case To:t="ACESFilmic";break;case tl:t="AgX";break;case el:t="Neutral";break;case Js:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),t="Linear"}return"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ni=new ne;function gf(){ot.getLuminanceCoefficients(ni);const e=ni.x.toFixed(4),n=ni.y.toFixed(4),t=ni.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vf(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nn).join(`
`)}function Sf(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function Ef(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=e.getActiveAttrib(n,r),s=a.name;let o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:e.getAttribLocation(n,s),locationSize:o}}return t}function Nn(e){return e!==""}function Fr(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function Br(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const Mf=/^[ \t]*#include +<([\w\d./]+)>/gm;function sa(e){return e.replace(Mf,Tf)}const xf=new Map;function Tf(e,n){let t=Oe[n];if(t===void 0){const i=xf.get(n);if(i!==void 0)t=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return sa(t)}const Af=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gr(e){return e.replace(Af,bf)}function bf(e,n,t,i){let r="";for(let a=parseInt(n);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Hr(e){let n=`precision ${e.precision} float;
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
#define LOW_PRECISION`),n}function Rf(e){let n="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===co?n="SHADOWMAP_TYPE_PCF":e.shadowMapType===js?n="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Gt&&(n="SHADOWMAP_TYPE_VSM"),n}function wf(e){let n="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Xn:case An:n="ENVMAP_TYPE_CUBE";break;case gi:n="ENVMAP_TYPE_CUBE_UV";break}return n}function Cf(e){let n="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case An:n="ENVMAP_MODE_REFRACTION";break}return n}function yf(e){let n="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case ul:n="ENVMAP_BLENDING_MULTIPLY";break;case dl:n="ENVMAP_BLENDING_MIX";break;case cl:n="ENVMAP_BLENDING_ADD";break}return n}function Pf(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Lf(e,n,t,i){const r=e.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const m=Rf(t),u=wf(t),p=Cf(t),f=yf(t),g=Pf(t),v=vf(t),T=Sf(a),M=r.createProgram();let c,l,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Nn).join(`
`),c.length>0&&(c+=`
`),l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Nn).join(`
`),l.length>0&&(l+=`
`)):(c=[Hr(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nn).join(`
`),l=[Hr(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",t.envMap?"#define "+f:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qt?"#define TONE_MAPPING":"",t.toneMapping!==Qt?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Qt?_f("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,mf("linearToOutputTexel",t.outputColorSpace),gf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Nn).join(`
`)),s=sa(s),s=Fr(s,t),s=Br(s,t),o=sa(o),o=Fr(o,t),o=Br(o,t),s=Gr(s),o=Gr(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,c=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,l=["#define varying in",t.glslVersion===pr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const R=b+c+s,x=b+l+o,D=Ir(r,r.VERTEX_SHADER,R),C=Ir(r,r.FRAGMENT_SHADER,x);r.attachShader(M,D),r.attachShader(M,C),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function U(L){if(e.debug.checkShaderErrors){const B=r.getProgramInfoLog(M)||"",X=r.getShaderInfoLog(D)||"",q=r.getShaderInfoLog(C)||"",$=B.trim(),W=X.trim(),ie=q.trim();let k=!0,Ee=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(k=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,M,D,C);else{const be=Or(r,D,"vertex"),Ie=Or(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+$+`
`+be+`
`+Ie)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(W===""||ie==="")&&(Ee=!1);Ee&&(L.diagnostics={runnable:k,programLog:$,vertexShader:{log:W,prefix:c},fragmentShader:{log:ie,prefix:l}})}r.deleteShader(D),r.deleteShader(C),F=new li(r,M),_=Ef(r,M)}let F;this.getUniforms=function(){return F===void 0&&U(this),F};let _;this.getAttributes=function(){return _===void 0&&U(this),_};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(M,uf)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ff++,this.cacheKey=n,this.usedTimes=1,this.program=M,this.vertexShader=D,this.fragmentShader=C,this}let Df=0;class Uf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(n);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new If(n),t.set(n,i)),i}}class If{constructor(n){this.id=Df++,this.code=n,this.usedTimes=0}}function Nf(e,n,t,i,r,a,s){const o=new Qs,m=new Uf,u=new Set,p=[],f=r.logarithmicDepthBuffer,g=r.vertexTextures;let v=r.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(_){return u.add(_),_===0?"uv":`uv${_}`}function c(_,S,L,B,X){const q=B.fog,$=X.geometry,W=_.isMeshStandardMaterial?B.environment:null,ie=(_.isMeshStandardMaterial?t:n).get(_.envMap||W),k=ie&&ie.mapping===gi?ie.image.height:null,Ee=T[_.type];_.precision!==null&&(v=r.getMaxPrecision(_.precision),v!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",v,"instead."));const be=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ie=be!==void 0?be.length:0;let ke=0;$.morphAttributes.position!==void 0&&(ke=1),$.morphAttributes.normal!==void 0&&(ke=2),$.morphAttributes.color!==void 0&&(ke=3);let nt,et,Xe,V;if(Ee){const Ve=Ut[Ee];nt=Ve.vertexShader,et=Ve.fragmentShader}else nt=_.vertexShader,et=_.fragmentShader,m.update(_),Xe=m.getVertexShaderID(_),V=m.getFragmentShaderID(_);const K=e.getRenderTarget(),fe=e.state.buffers.depth.getReversed(),Pe=X.isInstancedMesh===!0,xe=X.isBatchedMesh===!0,Be=!!_.map,pt=!!_.matcap,A=!!ie,Ze=!!_.aoMap,De=!!_.lightMap,Ce=!!_.bumpMap,me=!!_.normalMap,Qe=!!_.displacementMap,_e=!!_.emissiveMap,Ne=!!_.metalnessMap,dt=!!_.roughnessMap,it=_.anisotropy>0,E=_.clearcoat>0,d=_.dispersion>0,I=_.iridescence>0,H=_.sheen>0,Y=_.transmission>0,G=it&&!!_.anisotropyMap,Me=E&&!!_.clearcoatMap,ee=E&&!!_.clearcoatNormalMap,ge=E&&!!_.clearcoatRoughnessMap,ve=I&&!!_.iridescenceMap,j=I&&!!_.iridescenceThicknessMap,se=H&&!!_.sheenColorMap,we=H&&!!_.sheenRoughnessMap,Se=!!_.specularMap,re=!!_.specularColorMap,Ue=!!_.specularIntensityMap,w=Y&&!!_.transmissionMap,J=Y&&!!_.thicknessMap,te=!!_.gradientMap,de=!!_.alphaMap,Z=_.alphaTest>0,z=!!_.alphaHash,pe=!!_.extensions;let Le=Qt;_.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Le=e.toneMapping);const Ye={shaderID:Ee,shaderType:_.type,shaderName:_.name,vertexShader:nt,fragmentShader:et,defines:_.defines,customVertexShaderID:Xe,customFragmentShaderID:V,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:v,batching:xe,batchingColor:xe&&X._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&X.instanceColor!==null,instancingMorph:Pe&&X.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:K===null?e.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:_i,alphaToCoverage:!!_.alphaToCoverage,map:Be,matcap:pt,envMap:A,envMapMode:A&&ie.mapping,envMapCubeUVHeight:k,aoMap:Ze,lightMap:De,bumpMap:Ce,normalMap:me,displacementMap:g&&Qe,emissiveMap:_e,normalMapObjectSpace:me&&_.normalMapType===qs,normalMapTangentSpace:me&&_.normalMapType===Xs,metalnessMap:Ne,roughnessMap:dt,anisotropy:it,anisotropyMap:G,clearcoat:E,clearcoatMap:Me,clearcoatNormalMap:ee,clearcoatRoughnessMap:ge,dispersion:d,iridescence:I,iridescenceMap:ve,iridescenceThicknessMap:j,sheen:H,sheenColorMap:se,sheenRoughnessMap:we,specularMap:Se,specularColorMap:re,specularIntensityMap:Ue,transmission:Y,transmissionMap:w,thicknessMap:J,gradientMap:te,opaque:_.transparent===!1&&_.blending===si&&_.alphaToCoverage===!1,alphaMap:de,alphaTest:Z,alphaHash:z,combine:_.combine,mapUv:Be&&M(_.map.channel),aoMapUv:Ze&&M(_.aoMap.channel),lightMapUv:De&&M(_.lightMap.channel),bumpMapUv:Ce&&M(_.bumpMap.channel),normalMapUv:me&&M(_.normalMap.channel),displacementMapUv:Qe&&M(_.displacementMap.channel),emissiveMapUv:_e&&M(_.emissiveMap.channel),metalnessMapUv:Ne&&M(_.metalnessMap.channel),roughnessMapUv:dt&&M(_.roughnessMap.channel),anisotropyMapUv:G&&M(_.anisotropyMap.channel),clearcoatMapUv:Me&&M(_.clearcoatMap.channel),clearcoatNormalMapUv:ee&&M(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&M(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&M(_.iridescenceMap.channel),iridescenceThicknessMapUv:j&&M(_.iridescenceThicknessMap.channel),sheenColorMapUv:se&&M(_.sheenColorMap.channel),sheenRoughnessMapUv:we&&M(_.sheenRoughnessMap.channel),specularMapUv:Se&&M(_.specularMap.channel),specularColorMapUv:re&&M(_.specularColorMap.channel),specularIntensityMapUv:Ue&&M(_.specularIntensityMap.channel),transmissionMapUv:w&&M(_.transmissionMap.channel),thicknessMapUv:J&&M(_.thicknessMap.channel),alphaMapUv:de&&M(_.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(me||it),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!$.attributes.uv&&(Be||de),fog:!!q,useFog:_.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:_.flatShading===!0&&_.wireframe===!1,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:fe,skinning:X.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:ke,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:e.shadowMap.enabled&&L.length>0,shadowMapType:e.shadowMap.type,toneMapping:Le,decodeVideoTexture:Be&&_.map.isVideoTexture===!0&&ot.getTransfer(_.map.colorSpace)===$e,decodeVideoTextureEmissive:_e&&_.emissiveMap.isVideoTexture===!0&&ot.getTransfer(_.emissiveMap.colorSpace)===$e,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===It,flipSided:_.side===bt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:pe&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&_.extensions.multiDraw===!0||xe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ye.vertexUv1s=u.has(1),Ye.vertexUv2s=u.has(2),Ye.vertexUv3s=u.has(3),u.clear(),Ye}function l(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const L in _.defines)S.push(L),S.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(b(S,_),R(S,_),S.push(e.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function b(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function R(_,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),_.push(o.mask)}function x(_){const S=T[_.type];let L;if(S){const B=Ut[S];L=Ws.clone(B.uniforms)}else L=_.uniforms;return L}function D(_,S){let L;for(let B=0,X=p.length;B<X;B++){const q=p[B];if(q.cacheKey===S){L=q,++L.usedTimes;break}}return L===void 0&&(L=new Lf(e,S,_,a),p.push(L)),L}function C(_){if(--_.usedTimes===0){const S=p.indexOf(_);p[S]=p[p.length-1],p.pop(),_.destroy()}}function U(_){m.remove(_)}function F(){m.dispose()}return{getParameters:c,getProgramCacheKey:l,getUniforms:x,acquireProgram:D,releaseProgram:C,releaseShaderCache:U,programs:p,dispose:F}}function Of(){let e=new WeakMap;function n(s){return e.has(s)}function t(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function i(s){e.delete(s)}function r(s,o,m){e.get(s)[o]=m}function a(){e=new WeakMap}return{has:n,get:t,remove:i,update:r,dispose:a}}function Ff(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.z!==n.z?e.z-n.z:e.id-n.id}function kr(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function Vr(){const e=[];let n=0;const t=[],i=[],r=[];function a(){n=0,t.length=0,i.length=0,r.length=0}function s(f,g,v,T,M,c){let l=e[n];return l===void 0?(l={id:f.id,object:f,geometry:g,material:v,groupOrder:T,renderOrder:f.renderOrder,z:M,group:c},e[n]=l):(l.id=f.id,l.object=f,l.geometry=g,l.material=v,l.groupOrder=T,l.renderOrder=f.renderOrder,l.z=M,l.group=c),n++,l}function o(f,g,v,T,M,c){const l=s(f,g,v,T,M,c);v.transmission>0?i.push(l):v.transparent===!0?r.push(l):t.push(l)}function m(f,g,v,T,M,c){const l=s(f,g,v,T,M,c);v.transmission>0?i.unshift(l):v.transparent===!0?r.unshift(l):t.unshift(l)}function u(f,g){t.length>1&&t.sort(f||Ff),i.length>1&&i.sort(g||kr),r.length>1&&r.sort(g||kr)}function p(){for(let f=n,g=e.length;f<g;f++){const v=e[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:o,unshift:m,finish:p,sort:u}}function Bf(){let e=new WeakMap;function n(i,r){const a=e.get(i);let s;return a===void 0?(s=new Vr,e.set(i,[s])):r>=a.length?(s=new Vr,a.push(s)):s=a[r],s}function t(){e=new WeakMap}return{get:n,dispose:t}}function Gf(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new ne,color:new ze};break;case"SpotLight":t={position:new ne,direction:new ne,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return e[n.id]=t,t}}}function Hf(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let kf=0;function Vf(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function zf(e){const n=new Gf,t=Hf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new ne);const r=new ne,a=new Nt,s=new Nt;function o(u){let p=0,f=0,g=0;for(let _=0;_<9;_++)i.probe[_].set(0,0,0);let v=0,T=0,M=0,c=0,l=0,b=0,R=0,x=0,D=0,C=0,U=0;u.sort(Vf);for(let _=0,S=u.length;_<S;_++){const L=u[_],B=L.color,X=L.intensity,q=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)p+=B.r*X,f+=B.g*X,g+=B.b*X;else if(L.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(L.sh.coefficients[W],X);U++}else if(L.isDirectionalLight){const W=n.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ie=L.shadow,k=t.get(L);k.shadowIntensity=ie.intensity,k.shadowBias=ie.bias,k.shadowNormalBias=ie.normalBias,k.shadowRadius=ie.radius,k.shadowMapSize=ie.mapSize,i.directionalShadow[v]=k,i.directionalShadowMap[v]=$,i.directionalShadowMatrix[v]=L.shadow.matrix,b++}i.directional[v]=W,v++}else if(L.isSpotLight){const W=n.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(B).multiplyScalar(X),W.distance=q,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,i.spot[M]=W;const ie=L.shadow;if(L.map&&(i.spotLightMap[D]=L.map,D++,ie.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[M]=ie.matrix,L.castShadow){const k=t.get(L);k.shadowIntensity=ie.intensity,k.shadowBias=ie.bias,k.shadowNormalBias=ie.normalBias,k.shadowRadius=ie.radius,k.shadowMapSize=ie.mapSize,i.spotShadow[M]=k,i.spotShadowMap[M]=$,x++}M++}else if(L.isRectAreaLight){const W=n.get(L);W.color.copy(B).multiplyScalar(X),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),i.rectArea[c]=W,c++}else if(L.isPointLight){const W=n.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const ie=L.shadow,k=t.get(L);k.shadowIntensity=ie.intensity,k.shadowBias=ie.bias,k.shadowNormalBias=ie.normalBias,k.shadowRadius=ie.radius,k.shadowMapSize=ie.mapSize,k.shadowCameraNear=ie.camera.near,k.shadowCameraFar=ie.camera.far,i.pointShadow[T]=k,i.pointShadowMap[T]=$,i.pointShadowMatrix[T]=L.shadow.matrix,R++}i.point[T]=W,T++}else if(L.isHemisphereLight){const W=n.get(L);W.skyColor.copy(L.color).multiplyScalar(X),W.groundColor.copy(L.groundColor).multiplyScalar(X),i.hemi[l]=W,l++}}c>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=f,i.ambient[2]=g;const F=i.hash;(F.directionalLength!==v||F.pointLength!==T||F.spotLength!==M||F.rectAreaLength!==c||F.hemiLength!==l||F.numDirectionalShadows!==b||F.numPointShadows!==R||F.numSpotShadows!==x||F.numSpotMaps!==D||F.numLightProbes!==U)&&(i.directional.length=v,i.spot.length=M,i.rectArea.length=c,i.point.length=T,i.hemi.length=l,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=x+D-C,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=U,F.directionalLength=v,F.pointLength=T,F.spotLength=M,F.rectAreaLength=c,F.hemiLength=l,F.numDirectionalShadows=b,F.numPointShadows=R,F.numSpotShadows=x,F.numSpotMaps=D,F.numLightProbes=U,i.version=kf++)}function m(u,p){let f=0,g=0,v=0,T=0,M=0;const c=p.matrixWorldInverse;for(let l=0,b=u.length;l<b;l++){const R=u[l];if(R.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(c),f++}else if(R.isSpotLight){const x=i.spot[v];x.position.setFromMatrixPosition(R.matrixWorld),x.position.applyMatrix4(c),x.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(c),v++}else if(R.isRectAreaLight){const x=i.rectArea[T];x.position.setFromMatrixPosition(R.matrixWorld),x.position.applyMatrix4(c),s.identity(),a.copy(R.matrixWorld),a.premultiply(c),s.extractRotation(a),x.halfWidth.set(R.width*.5,0,0),x.halfHeight.set(0,R.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),T++}else if(R.isPointLight){const x=i.point[g];x.position.setFromMatrixPosition(R.matrixWorld),x.position.applyMatrix4(c),g++}else if(R.isHemisphereLight){const x=i.hemi[M];x.direction.setFromMatrixPosition(R.matrixWorld),x.direction.transformDirection(c),M++}}}return{setup:o,setupView:m,state:i}}function zr(e){const n=new zf(e),t=[],i=[];function r(p){u.camera=p,t.length=0,i.length=0}function a(p){t.push(p)}function s(p){i.push(p)}function o(){n.setup(t)}function m(p){n.setupView(t,p)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:m,pushLight:a,pushShadow:s}}function Wf(e){let n=new WeakMap;function t(r,a=0){const s=n.get(r);let o;return s===void 0?(o=new zr(e),n.set(r,[o])):a>=s.length?(o=new zr(e),s.push(o)):o=s[a],o}function i(){n=new WeakMap}return{get:t,dispose:i}}const Xf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qf=`uniform sampler2D shadow_pass;
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
}`;function Yf(e,n,t){let i=new oo;const r=new st,a=new st,s=new Et,o=new ys({depthPacking:Ps}),m=new Ls,u={},p=t.maxTextureSize,f={[Vn]:bt,[bt]:Vn,[It]:It},g=new Xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:Xf,fragmentShader:qf}),v=g.clone();v.defines.HORIZONTAL_PASS=1;const T=new mn;T.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new rt(T,g),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=co;let l=this.type;this.render=function(C,U,F){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||C.length===0)return;const _=e.getRenderTarget(),S=e.getActiveCubeFace(),L=e.getActiveMipmapLevel(),B=e.state;B.setBlending(un),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const X=l!==Gt&&this.type===Gt,q=l===Gt&&this.type!==Gt;for(let $=0,W=C.length;$<W;$++){const ie=C[$],k=ie.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const Ee=k.getFrameExtents();if(r.multiply(Ee),a.copy(k.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(a.x=Math.floor(p/Ee.x),r.x=a.x*Ee.x,k.mapSize.x=a.x),r.y>p&&(a.y=Math.floor(p/Ee.y),r.y=a.y*Ee.y,k.mapSize.y=a.y)),k.map===null||X===!0||q===!0){const Ie=this.type!==Gt?{minFilter:Fn,magFilter:Fn}:{};k.map!==null&&k.map.dispose(),k.map=new Tn(r.x,r.y,Ie),k.map.texture.name=ie.name+".shadowMap",k.camera.updateProjectionMatrix()}e.setRenderTarget(k.map),e.clear();const be=k.getViewportCount();for(let Ie=0;Ie<be;Ie++){const ke=k.getViewport(Ie);s.set(a.x*ke.x,a.y*ke.y,a.x*ke.z,a.y*ke.w),B.viewport(s),k.updateMatrices(ie,Ie),i=k.getFrustum(),x(U,F,k.camera,ie,this.type)}k.isPointLightShadow!==!0&&this.type===Gt&&b(k,F),k.needsUpdate=!1}l=this.type,c.needsUpdate=!1,e.setRenderTarget(_,S,L)};function b(C,U){const F=n.update(M);g.defines.VSM_SAMPLES!==C.blurSamples&&(g.defines.VSM_SAMPLES=C.blurSamples,v.defines.VSM_SAMPLES=C.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Tn(r.x,r.y)),g.uniforms.shadow_pass.value=C.map.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,e.setRenderTarget(C.mapPass),e.clear(),e.renderBufferDirect(U,null,F,g,M,null),v.uniforms.shadow_pass.value=C.mapPass.texture,v.uniforms.resolution.value=C.mapSize,v.uniforms.radius.value=C.radius,e.setRenderTarget(C.map),e.clear(),e.renderBufferDirect(U,null,F,v,M,null)}function R(C,U,F,_){let S=null;const L=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)S=L;else if(S=F.isPointLight===!0?m:o,e.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const B=S.uuid,X=U.uuid;let q=u[B];q===void 0&&(q={},u[B]=q);let $=q[X];$===void 0&&($=S.clone(),q[X]=$,U.addEventListener("dispose",D)),S=$}if(S.visible=U.visible,S.wireframe=U.wireframe,_===Gt?S.side=U.shadowSide!==null?U.shadowSide:U.side:S.side=U.shadowSide!==null?U.shadowSide:f[U.side],S.alphaMap=U.alphaMap,S.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,S.map=U.map,S.clipShadows=U.clipShadows,S.clippingPlanes=U.clippingPlanes,S.clipIntersection=U.clipIntersection,S.displacementMap=U.displacementMap,S.displacementScale=U.displacementScale,S.displacementBias=U.displacementBias,S.wireframeLinewidth=U.wireframeLinewidth,S.linewidth=U.linewidth,F.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=e.properties.get(S);B.light=F}return S}function x(C,U,F,_,S){if(C.visible===!1)return;if(C.layers.test(U.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Gt)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);const X=n.update(C),q=C.material;if(Array.isArray(q)){const $=X.groups;for(let W=0,ie=$.length;W<ie;W++){const k=$[W],Ee=q[k.materialIndex];if(Ee&&Ee.visible){const be=R(C,Ee,_,S);C.onBeforeShadow(e,C,U,F,X,be,k),e.renderBufferDirect(F,null,X,be,C,k),C.onAfterShadow(e,C,U,F,X,be,k)}}}else if(q.visible){const $=R(C,q,_,S);C.onBeforeShadow(e,C,U,F,X,$,null),e.renderBufferDirect(F,null,X,$,C,null),C.onAfterShadow(e,C,U,F,X,$,null)}}const B=C.children;for(let X=0,q=B.length;X<q;X++)x(B[X],U,F,_,S)}function D(C){C.target.removeEventListener("dispose",D);for(const F in u){const _=u[F],S=C.target.uuid;S in _&&(_[S].dispose(),delete _[S])}}}const Kf={[ta]:ea,[Ji]:Zi,[ji]:$i,[fi]:Qi,[ea]:ta,[Zi]:Ji,[$i]:ji,[Qi]:fi};function $f(e,n){function t(){let w=!1;const J=new Et;let te=null;const de=new Et(0,0,0,0);return{setMask:function(Z){te!==Z&&!w&&(e.colorMask(Z,Z,Z,Z),te=Z)},setLocked:function(Z){w=Z},setClear:function(Z,z,pe,Le,Ye){Ye===!0&&(Z*=Le,z*=Le,pe*=Le),J.set(Z,z,pe,Le),de.equals(J)===!1&&(e.clearColor(Z,z,pe,Le),de.copy(J))},reset:function(){w=!1,te=null,de.set(-1,0,0,0)}}}function i(){let w=!1,J=!1,te=null,de=null,Z=null;return{setReversed:function(z){if(J!==z){const pe=n.get("EXT_clip_control");z?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),J=z;const Le=Z;Z=null,this.setClear(Le)}},getReversed:function(){return J},setTest:function(z){z?K(e.DEPTH_TEST):fe(e.DEPTH_TEST)},setMask:function(z){te!==z&&!w&&(e.depthMask(z),te=z)},setFunc:function(z){if(J&&(z=Kf[z]),de!==z){switch(z){case ta:e.depthFunc(e.NEVER);break;case ea:e.depthFunc(e.ALWAYS);break;case Ji:e.depthFunc(e.LESS);break;case fi:e.depthFunc(e.LEQUAL);break;case ji:e.depthFunc(e.EQUAL);break;case Qi:e.depthFunc(e.GEQUAL);break;case Zi:e.depthFunc(e.GREATER);break;case $i:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}de=z}},setLocked:function(z){w=z},setClear:function(z){Z!==z&&(J&&(z=1-z),e.clearDepth(z),Z=z)},reset:function(){w=!1,te=null,de=null,Z=null,J=!1}}}function r(){let w=!1,J=null,te=null,de=null,Z=null,z=null,pe=null,Le=null,Ye=null;return{setTest:function(Ve){w||(Ve?K(e.STENCIL_TEST):fe(e.STENCIL_TEST))},setMask:function(Ve){J!==Ve&&!w&&(e.stencilMask(Ve),J=Ve)},setFunc:function(Ve,Bt,Dt){(te!==Ve||de!==Bt||Z!==Dt)&&(e.stencilFunc(Ve,Bt,Dt),te=Ve,de=Bt,Z=Dt)},setOp:function(Ve,Bt,Dt){(z!==Ve||pe!==Bt||Le!==Dt)&&(e.stencilOp(Ve,Bt,Dt),z=Ve,pe=Bt,Le=Dt)},setLocked:function(Ve){w=Ve},setClear:function(Ve){Ye!==Ve&&(e.clearStencil(Ve),Ye=Ve)},reset:function(){w=!1,J=null,te=null,de=null,Z=null,z=null,pe=null,Le=null,Ye=null}}}const a=new t,s=new i,o=new r,m=new WeakMap,u=new WeakMap;let p={},f={},g=new WeakMap,v=[],T=null,M=!1,c=null,l=null,b=null,R=null,x=null,D=null,C=null,U=new ze(0,0,0),F=0,_=!1,S=null,L=null,B=null,X=null,q=null;const $=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ie=0;const k=e.getParameter(e.VERSION);k.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(k)[1]),W=ie>=1):k.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),W=ie>=2);let Ee=null,be={};const Ie=e.getParameter(e.SCISSOR_BOX),ke=e.getParameter(e.VIEWPORT),nt=new Et().fromArray(Ie),et=new Et().fromArray(ke);function Xe(w,J,te,de){const Z=new Uint8Array(4),z=e.createTexture();e.bindTexture(w,z),e.texParameteri(w,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(w,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let pe=0;pe<te;pe++)w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY?e.texImage3D(J,0,e.RGBA,1,1,de,0,e.RGBA,e.UNSIGNED_BYTE,Z):e.texImage2D(J+pe,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Z);return z}const V={};V[e.TEXTURE_2D]=Xe(e.TEXTURE_2D,e.TEXTURE_2D,1),V[e.TEXTURE_CUBE_MAP]=Xe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[e.TEXTURE_2D_ARRAY]=Xe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),V[e.TEXTURE_3D]=Xe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),K(e.DEPTH_TEST),s.setFunc(fi),Ce(!1),me(lr),K(e.CULL_FACE),Ze(un);function K(w){p[w]!==!0&&(e.enable(w),p[w]=!0)}function fe(w){p[w]!==!1&&(e.disable(w),p[w]=!1)}function Pe(w,J){return f[w]!==J?(e.bindFramebuffer(w,J),f[w]=J,w===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=J),w===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=J),!0):!1}function xe(w,J){let te=v,de=!1;if(w){te=g.get(J),te===void 0&&(te=[],g.set(J,te));const Z=w.textures;if(te.length!==Z.length||te[0]!==e.COLOR_ATTACHMENT0){for(let z=0,pe=Z.length;z<pe;z++)te[z]=e.COLOR_ATTACHMENT0+z;te.length=Z.length,de=!0}}else te[0]!==e.BACK&&(te[0]=e.BACK,de=!0);de&&e.drawBuffers(te)}function Be(w){return T!==w?(e.useProgram(w),T=w,!0):!1}const pt={[yn]:e.FUNC_ADD,[ts]:e.FUNC_SUBTRACT,[es]:e.FUNC_REVERSE_SUBTRACT};pt[fl]=e.MIN,pt[hl]=e.MAX;const A={[_s]:e.ZERO,[ms]:e.ONE,[ps]:e.SRC_COLOR,[hs]:e.SRC_ALPHA,[fs]:e.SRC_ALPHA_SATURATE,[us]:e.DST_COLOR,[ds]:e.DST_ALPHA,[cs]:e.ONE_MINUS_SRC_COLOR,[ls]:e.ONE_MINUS_SRC_ALPHA,[ss]:e.ONE_MINUS_DST_COLOR,[os]:e.ONE_MINUS_DST_ALPHA,[rs]:e.CONSTANT_COLOR,[as]:e.ONE_MINUS_CONSTANT_COLOR,[is]:e.CONSTANT_ALPHA,[ns]:e.ONE_MINUS_CONSTANT_ALPHA};function Ze(w,J,te,de,Z,z,pe,Le,Ye,Ve){if(w===un){M===!0&&(fe(e.BLEND),M=!1);return}if(M===!1&&(K(e.BLEND),M=!0),w!==Vs){if(w!==c||Ve!==_){if((l!==yn||x!==yn)&&(e.blendEquation(e.FUNC_ADD),l=yn,x=yn),Ve)switch(w){case si:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ur:e.blendFunc(e.ONE,e.ONE);break;case dr:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case cr:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case si:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ur:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case dr:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cr:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}b=null,R=null,D=null,C=null,U.set(0,0,0),F=0,c=w,_=Ve}return}Z=Z||J,z=z||te,pe=pe||de,(J!==l||Z!==x)&&(e.blendEquationSeparate(pt[J],pt[Z]),l=J,x=Z),(te!==b||de!==R||z!==D||pe!==C)&&(e.blendFuncSeparate(A[te],A[de],A[z],A[pe]),b=te,R=de,D=z,C=pe),(Le.equals(U)===!1||Ye!==F)&&(e.blendColor(Le.r,Le.g,Le.b,Ye),U.copy(Le),F=Ye),c=w,_=!1}function De(w,J){w.side===It?fe(e.CULL_FACE):K(e.CULL_FACE);let te=w.side===bt;J&&(te=!te),Ce(te),w.blending===si&&w.transparent===!1?Ze(un):Ze(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),s.setFunc(w.depthFunc),s.setTest(w.depthTest),s.setMask(w.depthWrite),a.setMask(w.colorWrite);const de=w.stencilWrite;o.setTest(de),de&&(o.setMask(w.stencilWriteMask),o.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),o.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),_e(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?K(e.SAMPLE_ALPHA_TO_COVERAGE):fe(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(w){S!==w&&(w?e.frontFace(e.CW):e.frontFace(e.CCW),S=w)}function me(w){w!==Hs?(K(e.CULL_FACE),w!==L&&(w===lr?e.cullFace(e.BACK):w===ks?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):fe(e.CULL_FACE),L=w}function Qe(w){w!==B&&(W&&e.lineWidth(w),B=w)}function _e(w,J,te){w?(K(e.POLYGON_OFFSET_FILL),(X!==J||q!==te)&&(e.polygonOffset(J,te),X=J,q=te)):fe(e.POLYGON_OFFSET_FILL)}function Ne(w){w?K(e.SCISSOR_TEST):fe(e.SCISSOR_TEST)}function dt(w){w===void 0&&(w=e.TEXTURE0+$-1),Ee!==w&&(e.activeTexture(w),Ee=w)}function it(w,J,te){te===void 0&&(Ee===null?te=e.TEXTURE0+$-1:te=Ee);let de=be[te];de===void 0&&(de={type:void 0,texture:void 0},be[te]=de),(de.type!==w||de.texture!==J)&&(Ee!==te&&(e.activeTexture(te),Ee=te),e.bindTexture(w,J||V[w]),de.type=w,de.texture=J)}function E(){const w=be[Ee];w!==void 0&&w.type!==void 0&&(e.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function d(){try{e.compressedTexImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function I(){try{e.compressedTexImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function H(){try{e.texSubImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Y(){try{e.texSubImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function G(){try{e.compressedTexSubImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Me(){try{e.compressedTexSubImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ee(){try{e.texStorage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ge(){try{e.texStorage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ve(){try{e.texImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function j(){try{e.texImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function se(w){nt.equals(w)===!1&&(e.scissor(w.x,w.y,w.z,w.w),nt.copy(w))}function we(w){et.equals(w)===!1&&(e.viewport(w.x,w.y,w.z,w.w),et.copy(w))}function Se(w,J){let te=u.get(J);te===void 0&&(te=new WeakMap,u.set(J,te));let de=te.get(w);de===void 0&&(de=e.getUniformBlockIndex(J,w.name),te.set(w,de))}function re(w,J){const de=u.get(J).get(w);m.get(J)!==de&&(e.uniformBlockBinding(J,de,w.__bindingPointIndex),m.set(J,de))}function Ue(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),p={},Ee=null,be={},f={},g=new WeakMap,v=[],T=null,M=!1,c=null,l=null,b=null,R=null,x=null,D=null,C=null,U=new ze(0,0,0),F=0,_=!1,S=null,L=null,B=null,X=null,q=null,nt.set(0,0,e.canvas.width,e.canvas.height),et.set(0,0,e.canvas.width,e.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:K,disable:fe,bindFramebuffer:Pe,drawBuffers:xe,useProgram:Be,setBlending:Ze,setMaterial:De,setFlipSided:Ce,setCullFace:me,setLineWidth:Qe,setPolygonOffset:_e,setScissorTest:Ne,activeTexture:dt,bindTexture:it,unbindTexture:E,compressedTexImage2D:d,compressedTexImage3D:I,texImage2D:ve,texImage3D:j,updateUBOMapping:Se,uniformBlockBinding:re,texStorage2D:ee,texStorage3D:ge,texSubImage2D:H,texSubImage3D:Y,compressedTexSubImage2D:G,compressedTexSubImage3D:Me,scissor:se,viewport:we,reset:Ue}}function Zf(e,n,t,i,r,a,s){const o=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new st,p=new WeakMap;let f;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(E,d){return v?new OffscreenCanvas(E,d):ll("canvas")}function M(E,d,I){let H=1;const Y=it(E);if((Y.width>I||Y.height>I)&&(H=I/Math.max(Y.width,Y.height)),H<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const G=Math.floor(H*Y.width),Me=Math.floor(H*Y.height);f===void 0&&(f=T(G,Me));const ee=d?T(G,Me):f;return ee.width=G,ee.height=Me,ee.getContext("2d").drawImage(E,0,0,G,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+G+"x"+Me+")."),ee}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),E;return E}function c(E){return E.generateMipmaps}function l(E){e.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?e.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function R(E,d,I,H,Y=!1){if(E!==null){if(e[E]!==void 0)return e[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let G=d;if(d===e.RED&&(I===e.FLOAT&&(G=e.R32F),I===e.HALF_FLOAT&&(G=e.R16F),I===e.UNSIGNED_BYTE&&(G=e.R8)),d===e.RED_INTEGER&&(I===e.UNSIGNED_BYTE&&(G=e.R8UI),I===e.UNSIGNED_SHORT&&(G=e.R16UI),I===e.UNSIGNED_INT&&(G=e.R32UI),I===e.BYTE&&(G=e.R8I),I===e.SHORT&&(G=e.R16I),I===e.INT&&(G=e.R32I)),d===e.RG&&(I===e.FLOAT&&(G=e.RG32F),I===e.HALF_FLOAT&&(G=e.RG16F),I===e.UNSIGNED_BYTE&&(G=e.RG8)),d===e.RG_INTEGER&&(I===e.UNSIGNED_BYTE&&(G=e.RG8UI),I===e.UNSIGNED_SHORT&&(G=e.RG16UI),I===e.UNSIGNED_INT&&(G=e.RG32UI),I===e.BYTE&&(G=e.RG8I),I===e.SHORT&&(G=e.RG16I),I===e.INT&&(G=e.RG32I)),d===e.RGB_INTEGER&&(I===e.UNSIGNED_BYTE&&(G=e.RGB8UI),I===e.UNSIGNED_SHORT&&(G=e.RGB16UI),I===e.UNSIGNED_INT&&(G=e.RGB32UI),I===e.BYTE&&(G=e.RGB8I),I===e.SHORT&&(G=e.RGB16I),I===e.INT&&(G=e.RGB32I)),d===e.RGBA_INTEGER&&(I===e.UNSIGNED_BYTE&&(G=e.RGBA8UI),I===e.UNSIGNED_SHORT&&(G=e.RGBA16UI),I===e.UNSIGNED_INT&&(G=e.RGBA32UI),I===e.BYTE&&(G=e.RGBA8I),I===e.SHORT&&(G=e.RGBA16I),I===e.INT&&(G=e.RGBA32I)),d===e.RGB&&(I===e.UNSIGNED_INT_5_9_9_9_REV&&(G=e.RGB9_E5),I===e.UNSIGNED_INT_10F_11F_11F_REV&&(G=e.R11F_G11F_B10F)),d===e.RGBA){const Me=Y?Mo:ot.getTransfer(H);I===e.FLOAT&&(G=e.RGBA32F),I===e.HALF_FLOAT&&(G=e.RGBA16F),I===e.UNSIGNED_BYTE&&(G=Me===$e?e.SRGB8_ALPHA8:e.RGBA8),I===e.UNSIGNED_SHORT_4_4_4_4&&(G=e.RGBA4),I===e.UNSIGNED_SHORT_5_5_5_1&&(G=e.RGB5_A1)}return(G===e.R16F||G===e.R32F||G===e.RG16F||G===e.RG32F||G===e.RGBA16F||G===e.RGBA32F)&&n.get("EXT_color_buffer_float"),G}function x(E,d){let I;return E?d===null||d===Wn||d===zn?I=e.DEPTH24_STENCIL8:d===ln?I=e.DEPTH32F_STENCIL8:d===hi&&(I=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):d===null||d===Wn||d===zn?I=e.DEPTH_COMPONENT24:d===ln?I=e.DEPTH_COMPONENT32F:d===hi&&(I=e.DEPTH_COMPONENT16),I}function D(E,d){return c(E)===!0||E.isFramebufferTexture&&E.minFilter!==Fn&&E.minFilter!==Sn?Math.log2(Math.max(d.width,d.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?d.mipmaps.length:1}function C(E){const d=E.target;d.removeEventListener("dispose",C),F(d),d.isVideoTexture&&p.delete(d)}function U(E){const d=E.target;d.removeEventListener("dispose",U),S(d)}function F(E){const d=i.get(E);if(d.__webglInit===void 0)return;const I=E.source,H=g.get(I);if(H){const Y=H[d.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&_(E),Object.keys(H).length===0&&g.delete(I)}i.remove(E)}function _(E){const d=i.get(E);e.deleteTexture(d.__webglTexture);const I=E.source,H=g.get(I);delete H[d.__cacheKey],s.memory.textures--}function S(E){const d=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(d.__webglFramebuffer[H]))for(let Y=0;Y<d.__webglFramebuffer[H].length;Y++)e.deleteFramebuffer(d.__webglFramebuffer[H][Y]);else e.deleteFramebuffer(d.__webglFramebuffer[H]);d.__webglDepthbuffer&&e.deleteRenderbuffer(d.__webglDepthbuffer[H])}else{if(Array.isArray(d.__webglFramebuffer))for(let H=0;H<d.__webglFramebuffer.length;H++)e.deleteFramebuffer(d.__webglFramebuffer[H]);else e.deleteFramebuffer(d.__webglFramebuffer);if(d.__webglDepthbuffer&&e.deleteRenderbuffer(d.__webglDepthbuffer),d.__webglMultisampledFramebuffer&&e.deleteFramebuffer(d.__webglMultisampledFramebuffer),d.__webglColorRenderbuffer)for(let H=0;H<d.__webglColorRenderbuffer.length;H++)d.__webglColorRenderbuffer[H]&&e.deleteRenderbuffer(d.__webglColorRenderbuffer[H]);d.__webglDepthRenderbuffer&&e.deleteRenderbuffer(d.__webglDepthRenderbuffer)}const I=E.textures;for(let H=0,Y=I.length;H<Y;H++){const G=i.get(I[H]);G.__webglTexture&&(e.deleteTexture(G.__webglTexture),s.memory.textures--),i.remove(I[H])}i.remove(E)}let L=0;function B(){L=0}function X(){const E=L;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),L+=1,E}function q(E){const d=[];return d.push(E.wrapS),d.push(E.wrapT),d.push(E.wrapR||0),d.push(E.magFilter),d.push(E.minFilter),d.push(E.anisotropy),d.push(E.internalFormat),d.push(E.format),d.push(E.type),d.push(E.generateMipmaps),d.push(E.premultiplyAlpha),d.push(E.flipY),d.push(E.unpackAlignment),d.push(E.colorSpace),d.join()}function $(E,d){const I=i.get(E);if(E.isVideoTexture&&Ne(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&I.__version!==E.version){const H=E.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(I,E,d);return}}else E.isExternalTexture&&(I.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,I.__webglTexture,e.TEXTURE0+d)}function W(E,d){const I=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&I.__version!==E.version){V(I,E,d);return}t.bindTexture(e.TEXTURE_2D_ARRAY,I.__webglTexture,e.TEXTURE0+d)}function ie(E,d){const I=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&I.__version!==E.version){V(I,E,d);return}t.bindTexture(e.TEXTURE_3D,I.__webglTexture,e.TEXTURE0+d)}function k(E,d){const I=i.get(E);if(E.version>0&&I.__version!==E.version){K(I,E,d);return}t.bindTexture(e.TEXTURE_CUBE_MAP,I.__webglTexture,e.TEXTURE0+d)}const Ee={[Ss]:e.REPEAT,[vs]:e.CLAMP_TO_EDGE,[gs]:e.MIRRORED_REPEAT},be={[Fn]:e.NEAREST,[Es]:e.NEAREST_MIPMAP_NEAREST,[Jn]:e.NEAREST_MIPMAP_LINEAR,[Sn]:e.LINEAR,[Ri]:e.LINEAR_MIPMAP_NEAREST,[In]:e.LINEAR_MIPMAP_LINEAR},Ie={[ws]:e.NEVER,[Rs]:e.ALWAYS,[bs]:e.LESS,[lo]:e.LEQUAL,[As]:e.EQUAL,[Ts]:e.GEQUAL,[xs]:e.GREATER,[Ms]:e.NOTEQUAL};function ke(E,d){if(d.type===ln&&n.has("OES_texture_float_linear")===!1&&(d.magFilter===Sn||d.magFilter===Ri||d.magFilter===Jn||d.magFilter===In||d.minFilter===Sn||d.minFilter===Ri||d.minFilter===Jn||d.minFilter===In)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(E,e.TEXTURE_WRAP_S,Ee[d.wrapS]),e.texParameteri(E,e.TEXTURE_WRAP_T,Ee[d.wrapT]),(E===e.TEXTURE_3D||E===e.TEXTURE_2D_ARRAY)&&e.texParameteri(E,e.TEXTURE_WRAP_R,Ee[d.wrapR]),e.texParameteri(E,e.TEXTURE_MAG_FILTER,be[d.magFilter]),e.texParameteri(E,e.TEXTURE_MIN_FILTER,be[d.minFilter]),d.compareFunction&&(e.texParameteri(E,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(E,e.TEXTURE_COMPARE_FUNC,Ie[d.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(d.magFilter===Fn||d.minFilter!==Jn&&d.minFilter!==In||d.type===ln&&n.has("OES_texture_float_linear")===!1)return;if(d.anisotropy>1||i.get(d).__currentAnisotropy){const I=n.get("EXT_texture_filter_anisotropic");e.texParameterf(E,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(d.anisotropy,r.getMaxAnisotropy())),i.get(d).__currentAnisotropy=d.anisotropy}}}function nt(E,d){let I=!1;E.__webglInit===void 0&&(E.__webglInit=!0,d.addEventListener("dispose",C));const H=d.source;let Y=g.get(H);Y===void 0&&(Y={},g.set(H,Y));const G=q(d);if(G!==E.__cacheKey){Y[G]===void 0&&(Y[G]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,I=!0),Y[G].usedTimes++;const Me=Y[E.__cacheKey];Me!==void 0&&(Y[E.__cacheKey].usedTimes--,Me.usedTimes===0&&_(d)),E.__cacheKey=G,E.__webglTexture=Y[G].texture}return I}function et(E,d,I){return Math.floor(Math.floor(E/I)/d)}function Xe(E,d,I,H){const G=E.updateRanges;if(G.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,d.width,d.height,I,H,d.data);else{G.sort((j,se)=>j.start-se.start);let Me=0;for(let j=1;j<G.length;j++){const se=G[Me],we=G[j],Se=se.start+se.count,re=et(we.start,d.width,4),Ue=et(se.start,d.width,4);we.start<=Se+1&&re===Ue&&et(we.start+we.count-1,d.width,4)===re?se.count=Math.max(se.count,we.start+we.count-se.start):(++Me,G[Me]=we)}G.length=Me+1;const ee=e.getParameter(e.UNPACK_ROW_LENGTH),ge=e.getParameter(e.UNPACK_SKIP_PIXELS),ve=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,d.width);for(let j=0,se=G.length;j<se;j++){const we=G[j],Se=Math.floor(we.start/4),re=Math.ceil(we.count/4),Ue=Se%d.width,w=Math.floor(Se/d.width),J=re,te=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ue),e.pixelStorei(e.UNPACK_SKIP_ROWS,w),t.texSubImage2D(e.TEXTURE_2D,0,Ue,w,J,te,I,H,d.data)}E.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ee),e.pixelStorei(e.UNPACK_SKIP_PIXELS,ge),e.pixelStorei(e.UNPACK_SKIP_ROWS,ve)}}function V(E,d,I){let H=e.TEXTURE_2D;(d.isDataArrayTexture||d.isCompressedArrayTexture)&&(H=e.TEXTURE_2D_ARRAY),d.isData3DTexture&&(H=e.TEXTURE_3D);const Y=nt(E,d),G=d.source;t.bindTexture(H,E.__webglTexture,e.TEXTURE0+I);const Me=i.get(G);if(G.version!==Me.__version||Y===!0){t.activeTexture(e.TEXTURE0+I);const ee=ot.getPrimaries(ot.workingColorSpace),ge=d.colorSpace===vn?null:ot.getPrimaries(d.colorSpace),ve=d.colorSpace===vn||ee===ge?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,d.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,d.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,d.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let j=M(d.image,!1,r.maxTextureSize);j=dt(d,j);const se=a.convert(d.format,d.colorSpace),we=a.convert(d.type);let Se=R(d.internalFormat,se,we,d.colorSpace,d.isVideoTexture);ke(H,d);let re;const Ue=d.mipmaps,w=d.isVideoTexture!==!0,J=Me.__version===void 0||Y===!0,te=G.dataReady,de=D(d,j);if(d.isDepthTexture)Se=x(d.format===ui,d.type),J&&(w?t.texStorage2D(e.TEXTURE_2D,1,Se,j.width,j.height):t.texImage2D(e.TEXTURE_2D,0,Se,j.width,j.height,0,se,we,null));else if(d.isDataTexture)if(Ue.length>0){w&&J&&t.texStorage2D(e.TEXTURE_2D,de,Se,Ue[0].width,Ue[0].height);for(let Z=0,z=Ue.length;Z<z;Z++)re=Ue[Z],w?te&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,re.width,re.height,se,we,re.data):t.texImage2D(e.TEXTURE_2D,Z,Se,re.width,re.height,0,se,we,re.data);d.generateMipmaps=!1}else w?(J&&t.texStorage2D(e.TEXTURE_2D,de,Se,j.width,j.height),te&&Xe(d,j,se,we)):t.texImage2D(e.TEXTURE_2D,0,Se,j.width,j.height,0,se,we,j.data);else if(d.isCompressedTexture)if(d.isCompressedArrayTexture){w&&J&&t.texStorage3D(e.TEXTURE_2D_ARRAY,de,Se,Ue[0].width,Ue[0].height,j.depth);for(let Z=0,z=Ue.length;Z<z;Z++)if(re=Ue[Z],d.format!==kt)if(se!==null)if(w){if(te)if(d.layerUpdates.size>0){const pe=hr(re.width,re.height,d.format,d.type);for(const Le of d.layerUpdates){const Ye=re.data.subarray(Le*pe/re.data.BYTES_PER_ELEMENT,(Le+1)*pe/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,Le,re.width,re.height,1,se,Ye)}d.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,re.width,re.height,j.depth,se,re.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Z,Se,re.width,re.height,j.depth,0,re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else w?te&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,re.width,re.height,j.depth,se,we,re.data):t.texImage3D(e.TEXTURE_2D_ARRAY,Z,Se,re.width,re.height,j.depth,0,se,we,re.data)}else{w&&J&&t.texStorage2D(e.TEXTURE_2D,de,Se,Ue[0].width,Ue[0].height);for(let Z=0,z=Ue.length;Z<z;Z++)re=Ue[Z],d.format!==kt?se!==null?w?te&&t.compressedTexSubImage2D(e.TEXTURE_2D,Z,0,0,re.width,re.height,se,re.data):t.compressedTexImage2D(e.TEXTURE_2D,Z,Se,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):w?te&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,re.width,re.height,se,we,re.data):t.texImage2D(e.TEXTURE_2D,Z,Se,re.width,re.height,0,se,we,re.data)}else if(d.isDataArrayTexture)if(w){if(J&&t.texStorage3D(e.TEXTURE_2D_ARRAY,de,Se,j.width,j.height,j.depth),te)if(d.layerUpdates.size>0){const Z=hr(j.width,j.height,d.format,d.type);for(const z of d.layerUpdates){const pe=j.data.subarray(z*Z/j.data.BYTES_PER_ELEMENT,(z+1)*Z/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,z,j.width,j.height,1,se,we,pe)}d.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,se,we,j.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,Se,j.width,j.height,j.depth,0,se,we,j.data);else if(d.isData3DTexture)w?(J&&t.texStorage3D(e.TEXTURE_3D,de,Se,j.width,j.height,j.depth),te&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,se,we,j.data)):t.texImage3D(e.TEXTURE_3D,0,Se,j.width,j.height,j.depth,0,se,we,j.data);else if(d.isFramebufferTexture){if(J)if(w)t.texStorage2D(e.TEXTURE_2D,de,Se,j.width,j.height);else{let Z=j.width,z=j.height;for(let pe=0;pe<de;pe++)t.texImage2D(e.TEXTURE_2D,pe,Se,Z,z,0,se,we,null),Z>>=1,z>>=1}}else if(Ue.length>0){if(w&&J){const Z=it(Ue[0]);t.texStorage2D(e.TEXTURE_2D,de,Se,Z.width,Z.height)}for(let Z=0,z=Ue.length;Z<z;Z++)re=Ue[Z],w?te&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,se,we,re):t.texImage2D(e.TEXTURE_2D,Z,Se,se,we,re);d.generateMipmaps=!1}else if(w){if(J){const Z=it(j);t.texStorage2D(e.TEXTURE_2D,de,Se,Z.width,Z.height)}te&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,se,we,j)}else t.texImage2D(e.TEXTURE_2D,0,Se,se,we,j);c(d)&&l(H),Me.__version=G.version,d.onUpdate&&d.onUpdate(d)}E.__version=d.version}function K(E,d,I){if(d.image.length!==6)return;const H=nt(E,d),Y=d.source;t.bindTexture(e.TEXTURE_CUBE_MAP,E.__webglTexture,e.TEXTURE0+I);const G=i.get(Y);if(Y.version!==G.__version||H===!0){t.activeTexture(e.TEXTURE0+I);const Me=ot.getPrimaries(ot.workingColorSpace),ee=d.colorSpace===vn?null:ot.getPrimaries(d.colorSpace),ge=d.colorSpace===vn||Me===ee?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,d.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,d.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,d.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const ve=d.isCompressedTexture||d.image[0].isCompressedTexture,j=d.image[0]&&d.image[0].isDataTexture,se=[];for(let z=0;z<6;z++)!ve&&!j?se[z]=M(d.image[z],!0,r.maxCubemapSize):se[z]=j?d.image[z].image:d.image[z],se[z]=dt(d,se[z]);const we=se[0],Se=a.convert(d.format,d.colorSpace),re=a.convert(d.type),Ue=R(d.internalFormat,Se,re,d.colorSpace),w=d.isVideoTexture!==!0,J=G.__version===void 0||H===!0,te=Y.dataReady;let de=D(d,we);ke(e.TEXTURE_CUBE_MAP,d);let Z;if(ve){w&&J&&t.texStorage2D(e.TEXTURE_CUBE_MAP,de,Ue,we.width,we.height);for(let z=0;z<6;z++){Z=se[z].mipmaps;for(let pe=0;pe<Z.length;pe++){const Le=Z[pe];d.format!==kt?Se!==null?w?te&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,pe,0,0,Le.width,Le.height,Se,Le.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,pe,Ue,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):w?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,pe,0,0,Le.width,Le.height,Se,re,Le.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,pe,Ue,Le.width,Le.height,0,Se,re,Le.data)}}}else{if(Z=d.mipmaps,w&&J){Z.length>0&&de++;const z=it(se[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,de,Ue,z.width,z.height)}for(let z=0;z<6;z++)if(j){w?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,se[z].width,se[z].height,Se,re,se[z].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,Ue,se[z].width,se[z].height,0,Se,re,se[z].data);for(let pe=0;pe<Z.length;pe++){const Ye=Z[pe].image[z].image;w?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,pe+1,0,0,Ye.width,Ye.height,Se,re,Ye.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,pe+1,Ue,Ye.width,Ye.height,0,Se,re,Ye.data)}}else{w?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,Se,re,se[z]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,Ue,Se,re,se[z]);for(let pe=0;pe<Z.length;pe++){const Le=Z[pe];w?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,pe+1,0,0,Se,re,Le.image[z]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,pe+1,Ue,Se,re,Le.image[z])}}}c(d)&&l(e.TEXTURE_CUBE_MAP),G.__version=Y.version,d.onUpdate&&d.onUpdate(d)}E.__version=d.version}function fe(E,d,I,H,Y,G){const Me=a.convert(I.format,I.colorSpace),ee=a.convert(I.type),ge=R(I.internalFormat,Me,ee,I.colorSpace),ve=i.get(d),j=i.get(I);if(j.__renderTarget=d,!ve.__hasExternalTextures){const se=Math.max(1,d.width>>G),we=Math.max(1,d.height>>G);Y===e.TEXTURE_3D||Y===e.TEXTURE_2D_ARRAY?t.texImage3D(Y,G,ge,se,we,d.depth,0,Me,ee,null):t.texImage2D(Y,G,ge,se,we,0,Me,ee,null)}t.bindFramebuffer(e.FRAMEBUFFER,E),_e(d)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,H,Y,j.__webglTexture,0,Qe(d)):(Y===e.TEXTURE_2D||Y>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,H,Y,j.__webglTexture,G),t.bindFramebuffer(e.FRAMEBUFFER,null)}function Pe(E,d,I){if(e.bindRenderbuffer(e.RENDERBUFFER,E),d.depthBuffer){const H=d.depthTexture,Y=H&&H.isDepthTexture?H.type:null,G=x(d.stencilBuffer,Y),Me=d.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ee=Qe(d);_e(d)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ee,G,d.width,d.height):I?e.renderbufferStorageMultisample(e.RENDERBUFFER,ee,G,d.width,d.height):e.renderbufferStorage(e.RENDERBUFFER,G,d.width,d.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Me,e.RENDERBUFFER,E)}else{const H=d.textures;for(let Y=0;Y<H.length;Y++){const G=H[Y],Me=a.convert(G.format,G.colorSpace),ee=a.convert(G.type),ge=R(G.internalFormat,Me,ee,G.colorSpace),ve=Qe(d);I&&_e(d)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,ve,ge,d.width,d.height):_e(d)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ve,ge,d.width,d.height):e.renderbufferStorage(e.RENDERBUFFER,ge,d.width,d.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function xe(E,d){if(d&&d.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(e.FRAMEBUFFER,E),!(d.depthTexture&&d.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const H=i.get(d.depthTexture);H.__renderTarget=d,(!H.__webglTexture||d.depthTexture.image.width!==d.width||d.depthTexture.image.height!==d.height)&&(d.depthTexture.image.width=d.width,d.depthTexture.image.height=d.height,d.depthTexture.needsUpdate=!0),$(d.depthTexture,0);const Y=H.__webglTexture,G=Qe(d);if(d.depthTexture.format===ma)_e(d)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Y,0,G):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Y,0);else if(d.depthTexture.format===ui)_e(d)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Y,0,G):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Be(E){const d=i.get(E),I=E.isWebGLCubeRenderTarget===!0;if(d.__boundDepthTexture!==E.depthTexture){const H=E.depthTexture;if(d.__depthDisposeCallback&&d.__depthDisposeCallback(),H){const Y=()=>{delete d.__boundDepthTexture,delete d.__depthDisposeCallback,H.removeEventListener("dispose",Y)};H.addEventListener("dispose",Y),d.__depthDisposeCallback=Y}d.__boundDepthTexture=H}if(E.depthTexture&&!d.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const H=E.texture.mipmaps;H&&H.length>0?xe(d.__webglFramebuffer[0],E):xe(d.__webglFramebuffer,E)}else if(I){d.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(e.FRAMEBUFFER,d.__webglFramebuffer[H]),d.__webglDepthbuffer[H]===void 0)d.__webglDepthbuffer[H]=e.createRenderbuffer(),Pe(d.__webglDepthbuffer[H],E,!1);else{const Y=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,G=d.__webglDepthbuffer[H];e.bindRenderbuffer(e.RENDERBUFFER,G),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,G)}}else{const H=E.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(e.FRAMEBUFFER,d.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,d.__webglFramebuffer),d.__webglDepthbuffer===void 0)d.__webglDepthbuffer=e.createRenderbuffer(),Pe(d.__webglDepthbuffer,E,!1);else{const Y=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,G=d.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,G),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,G)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function pt(E,d,I){const H=i.get(E);d!==void 0&&fe(H.__webglFramebuffer,E,E.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),I!==void 0&&Be(E)}function A(E){const d=E.texture,I=i.get(E),H=i.get(d);E.addEventListener("dispose",U);const Y=E.textures,G=E.isWebGLCubeRenderTarget===!0,Me=Y.length>1;if(Me||(H.__webglTexture===void 0&&(H.__webglTexture=e.createTexture()),H.__version=d.version,s.memory.textures++),G){I.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(d.mipmaps&&d.mipmaps.length>0){I.__webglFramebuffer[ee]=[];for(let ge=0;ge<d.mipmaps.length;ge++)I.__webglFramebuffer[ee][ge]=e.createFramebuffer()}else I.__webglFramebuffer[ee]=e.createFramebuffer()}else{if(d.mipmaps&&d.mipmaps.length>0){I.__webglFramebuffer=[];for(let ee=0;ee<d.mipmaps.length;ee++)I.__webglFramebuffer[ee]=e.createFramebuffer()}else I.__webglFramebuffer=e.createFramebuffer();if(Me)for(let ee=0,ge=Y.length;ee<ge;ee++){const ve=i.get(Y[ee]);ve.__webglTexture===void 0&&(ve.__webglTexture=e.createTexture(),s.memory.textures++)}if(E.samples>0&&_e(E)===!1){I.__webglMultisampledFramebuffer=e.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ee=0;ee<Y.length;ee++){const ge=Y[ee];I.__webglColorRenderbuffer[ee]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,I.__webglColorRenderbuffer[ee]);const ve=a.convert(ge.format,ge.colorSpace),j=a.convert(ge.type),se=R(ge.internalFormat,ve,j,ge.colorSpace,E.isXRRenderTarget===!0),we=Qe(E);e.renderbufferStorageMultisample(e.RENDERBUFFER,we,se,E.width,E.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ee,e.RENDERBUFFER,I.__webglColorRenderbuffer[ee])}e.bindRenderbuffer(e.RENDERBUFFER,null),E.depthBuffer&&(I.__webglDepthRenderbuffer=e.createRenderbuffer(),Pe(I.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(G){t.bindTexture(e.TEXTURE_CUBE_MAP,H.__webglTexture),ke(e.TEXTURE_CUBE_MAP,d);for(let ee=0;ee<6;ee++)if(d.mipmaps&&d.mipmaps.length>0)for(let ge=0;ge<d.mipmaps.length;ge++)fe(I.__webglFramebuffer[ee][ge],E,d,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge);else fe(I.__webglFramebuffer[ee],E,d,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);c(d)&&l(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ee=0,ge=Y.length;ee<ge;ee++){const ve=Y[ee],j=i.get(ve);let se=e.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(se=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(se,j.__webglTexture),ke(se,ve),fe(I.__webglFramebuffer,E,ve,e.COLOR_ATTACHMENT0+ee,se,0),c(ve)&&l(se)}t.unbindTexture()}else{let ee=e.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ee=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(ee,H.__webglTexture),ke(ee,d),d.mipmaps&&d.mipmaps.length>0)for(let ge=0;ge<d.mipmaps.length;ge++)fe(I.__webglFramebuffer[ge],E,d,e.COLOR_ATTACHMENT0,ee,ge);else fe(I.__webglFramebuffer,E,d,e.COLOR_ATTACHMENT0,ee,0);c(d)&&l(ee),t.unbindTexture()}E.depthBuffer&&Be(E)}function Ze(E){const d=E.textures;for(let I=0,H=d.length;I<H;I++){const Y=d[I];if(c(Y)){const G=b(E),Me=i.get(Y).__webglTexture;t.bindTexture(G,Me),l(G),t.unbindTexture()}}}const De=[],Ce=[];function me(E){if(E.samples>0){if(_e(E)===!1){const d=E.textures,I=E.width,H=E.height;let Y=e.COLOR_BUFFER_BIT;const G=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Me=i.get(E),ee=d.length>1;if(ee)for(let ve=0;ve<d.length;ve++)t.bindFramebuffer(e.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,Me.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const ge=E.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ve=0;ve<d.length;ve++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Y|=e.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Y|=e.STENCIL_BUFFER_BIT)),ee){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);const j=i.get(d[ve]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,j,0)}e.blitFramebuffer(0,0,I,H,0,0,I,H,Y,e.NEAREST),m===!0&&(De.length=0,Ce.length=0,De.push(e.COLOR_ATTACHMENT0+ve),E.depthBuffer&&E.resolveDepthBuffer===!1&&(De.push(G),Ce.push(G),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ce)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,De))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ee)for(let ve=0;ve<d.length;ve++){t.bindFramebuffer(e.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);const j=i.get(d[ve]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,Me.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.TEXTURE_2D,j,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&m){const d=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[d])}}}function Qe(E){return Math.min(r.maxSamples,E.samples)}function _e(E){const d=i.get(E);return E.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&d.__useRenderToTexture!==!1}function Ne(E){const d=s.render.frame;p.get(E)!==d&&(p.set(E,d),E.update())}function dt(E,d){const I=E.colorSpace,H=E.format,Y=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||I!==_i&&I!==vn&&(ot.getTransfer(I)===$e?(H!==kt||Y!==pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),d}function it(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(u.width=E.naturalWidth||E.width,u.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(u.width=E.displayWidth,u.height=E.displayHeight):(u.width=E.width,u.height=E.height),u}this.allocateTextureUnit=X,this.resetTextureUnits=B,this.setTexture2D=$,this.setTexture2DArray=W,this.setTexture3D=ie,this.setTextureCube=k,this.rebindTextures=pt,this.setupRenderTarget=A,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=_e}function Qf(e,n){function t(i,r=vn){let a;const s=ot.getTransfer(r);if(i===pn)return e.UNSIGNED_BYTE;if(i===uo)return e.UNSIGNED_SHORT_4_4_4_4;if(i===fo)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Ds)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Us)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Is)return e.BYTE;if(i===Ns)return e.SHORT;if(i===hi)return e.UNSIGNED_SHORT;if(i===mo)return e.INT;if(i===Wn)return e.UNSIGNED_INT;if(i===ln)return e.FLOAT;if(i===mi)return e.HALF_FLOAT;if(i===Os)return e.ALPHA;if(i===Fs)return e.RGB;if(i===kt)return e.RGBA;if(i===ma)return e.DEPTH_COMPONENT;if(i===ui)return e.DEPTH_STENCIL;if(i===Bs)return e.RED;if(i===_o)return e.RED_INTEGER;if(i===Gs)return e.RG;if(i===go)return e.RG_INTEGER;if(i===vo)return e.RGBA_INTEGER;if(i===wi||i===Ci||i===yi||i===Pi)if(s===$e)if(a=n.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===wi)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ci)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===yi)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pi)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=n.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===wi)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ci)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===yi)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pi)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ia||i===Na||i===Oa||i===Fa)if(a=n.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Ia)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Na)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Oa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ba||i===Ga||i===Ha)if(a=n.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Ba||i===Ga)return s===$e?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Ha)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ka||i===Va||i===za||i===Wa||i===Xa||i===qa||i===Ya||i===Ka||i===$a||i===Za||i===Qa||i===ja||i===Ja||i===er)if(a=n.get("WEBGL_compressed_texture_astc"),a!==null){if(i===ka)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Va)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===za)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wa)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xa)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qa)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ya)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ka)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$a)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Za)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qa)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ja)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ja)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===er)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===tr||i===nr||i===ir)if(a=n.get("EXT_texture_compression_bptc"),a!==null){if(i===tr)return s===$e?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ir)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ar||i===rr||i===or||i===sr)if(a=n.get("EXT_texture_compression_rgtc"),a!==null){if(i===ar)return a.COMPRESSED_RED_RGTC1_EXT;if(i===rr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===or)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zn?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const jf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jf=`
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

}`;class eh{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new ho(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new Xt({vertexShader:jf,fragmentShader:Jf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new po(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class th extends Qo{constructor(n,t){super();const i=this;let r=null,a=1,s=null,o="local-floor",m=1,u=null,p=null,f=null,g=null,v=null,T=null;const M=typeof XRWebGLBinding<"u",c=new eh,l={},b=t.getContextAttributes();let R=null,x=null;const D=[],C=[],U=new st;let F=null;const _=new On;_.viewport=new Et;const S=new On;S.viewport=new Et;const L=[_,S],B=new jo;let X=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let K=D[V];return K===void 0&&(K=new bi,D[V]=K),K.getTargetRaySpace()},this.getControllerGrip=function(V){let K=D[V];return K===void 0&&(K=new bi,D[V]=K),K.getGripSpace()},this.getHand=function(V){let K=D[V];return K===void 0&&(K=new bi,D[V]=K),K.getHandSpace()};function $(V){const K=C.indexOf(V.inputSource);if(K===-1)return;const fe=D[K];fe!==void 0&&(fe.update(V.inputSource,V.frame,u||s),fe.dispatchEvent({type:V.type,data:V.inputSource}))}function W(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",ie);for(let V=0;V<D.length;V++){const K=C[V];K!==null&&(C[V]=null,D[V].disconnect(K))}X=null,q=null,c.reset();for(const V in l)delete l[V];n.setRenderTarget(R),v=null,g=null,f=null,r=null,x=null,Xe.stop(),i.isPresenting=!1,n.setPixelRatio(F),n.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(V){u=V},this.getBaseLayer=function(){return g!==null?g:v},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return T},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(R=n.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",W),r.addEventListener("inputsourceschange",ie),b.xrCompatible!==!0&&await t.makeXRCompatible(),F=n.getPixelRatio(),n.getSize(U),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Pe=null,xe=null;b.depth&&(xe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=b.stencil?ui:ma,Pe=b.stencil?zn:Wn);const Be={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:a};f=this.getBinding(),g=f.createProjectionLayer(Be),r.updateRenderState({layers:[g]}),n.setPixelRatio(1),n.setSize(g.textureWidth,g.textureHeight,!1),x=new Tn(g.textureWidth,g.textureHeight,{format:kt,type:pn,depthTexture:new so(g.textureWidth,g.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:b.stencil,colorSpace:n.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const fe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:v}),n.setPixelRatio(1),n.setSize(v.framebufferWidth,v.framebufferHeight,!1),x=new Tn(v.framebufferWidth,v.framebufferHeight,{format:kt,type:pn,colorSpace:n.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(m),u=null,s=await r.requestReferenceSpace(o),Xe.setContext(r),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return c.getDepthTexture()};function ie(V){for(let K=0;K<V.removed.length;K++){const fe=V.removed[K],Pe=C.indexOf(fe);Pe>=0&&(C[Pe]=null,D[Pe].disconnect(fe))}for(let K=0;K<V.added.length;K++){const fe=V.added[K];let Pe=C.indexOf(fe);if(Pe===-1){for(let Be=0;Be<D.length;Be++)if(Be>=C.length){C.push(fe),Pe=Be;break}else if(C[Be]===null){C[Be]=fe,Pe=Be;break}if(Pe===-1)break}const xe=D[Pe];xe&&xe.connect(fe)}}const k=new ne,Ee=new ne;function be(V,K,fe){k.setFromMatrixPosition(K.matrixWorld),Ee.setFromMatrixPosition(fe.matrixWorld);const Pe=k.distanceTo(Ee),xe=K.projectionMatrix.elements,Be=fe.projectionMatrix.elements,pt=xe[14]/(xe[10]-1),A=xe[14]/(xe[10]+1),Ze=(xe[9]+1)/xe[5],De=(xe[9]-1)/xe[5],Ce=(xe[8]-1)/xe[0],me=(Be[8]+1)/Be[0],Qe=pt*Ce,_e=pt*me,Ne=Pe/(-Ce+me),dt=Ne*-Ce;if(K.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(dt),V.translateZ(Ne),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),xe[10]===-1)V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const it=pt+Ne,E=A+Ne,d=Qe-dt,I=_e+(Pe-dt),H=Ze*A/E*it,Y=De*A/E*it;V.projectionMatrix.makePerspective(d,I,H,Y,it,E),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function Ie(V,K){K===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(K.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let K=V.near,fe=V.far;c.texture!==null&&(c.depthNear>0&&(K=c.depthNear),c.depthFar>0&&(fe=c.depthFar)),B.near=S.near=_.near=K,B.far=S.far=_.far=fe,(X!==B.near||q!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),X=B.near,q=B.far),B.layers.mask=V.layers.mask|6,_.layers.mask=B.layers.mask&3,S.layers.mask=B.layers.mask&5;const Pe=V.parent,xe=B.cameras;Ie(B,Pe);for(let Be=0;Be<xe.length;Be++)Ie(xe[Be],Pe);xe.length===2?be(B,_,S):B.projectionMatrix.copy(_.projectionMatrix),ke(V,B,Pe)};function ke(V,K,fe){fe===null?V.matrix.copy(K.matrixWorld):(V.matrix.copy(fe.matrixWorld),V.matrix.invert(),V.matrix.multiply(K.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Jo*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(g===null&&v===null))return m},this.setFoveation=function(V){m=V,g!==null&&(g.fixedFoveation=V),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=V)},this.hasDepthSensing=function(){return c.texture!==null},this.getDepthSensingMesh=function(){return c.getMesh(B)},this.getCameraTexture=function(V){return l[V]};let nt=null;function et(V,K){if(p=K.getViewerPose(u||s),T=K,p!==null){const fe=p.views;v!==null&&(n.setRenderTargetFramebuffer(x,v.framebuffer),n.setRenderTarget(x));let Pe=!1;fe.length!==B.cameras.length&&(B.cameras.length=0,Pe=!0);for(let A=0;A<fe.length;A++){const Ze=fe[A];let De=null;if(v!==null)De=v.getViewport(Ze);else{const me=f.getViewSubImage(g,Ze);De=me.viewport,A===0&&(n.setRenderTargetTextures(x,me.colorTexture,me.depthStencilTexture),n.setRenderTarget(x))}let Ce=L[A];Ce===void 0&&(Ce=new On,Ce.layers.enable(A),Ce.viewport=new Et,L[A]=Ce),Ce.matrix.fromArray(Ze.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Ze.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(De.x,De.y,De.width,De.height),A===0&&(B.matrix.copy(Ce.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Pe===!0&&B.cameras.push(Ce)}const xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){f=i.getBinding();const A=f.getDepthInformation(fe[0]);A&&A.isValid&&A.texture&&c.init(A,r.renderState)}if(xe&&xe.includes("camera-access")&&M){n.state.unbindTexture(),f=i.getBinding();for(let A=0;A<fe.length;A++){const Ze=fe[A].camera;if(Ze){let De=l[Ze];De||(De=new ho,l[Ze]=De);const Ce=f.getCameraImage(Ze);De.sourceTexture=Ce}}}}for(let fe=0;fe<D.length;fe++){const Pe=C[fe],xe=D[fe];Pe!==null&&xe!==void 0&&xe.update(Pe,K,u||s)}nt&&nt(V,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),T=null}const Xe=new wo;Xe.setAnimationLoop(et),this.setAnimationLoop=function(V){nt=V},this.dispose=function(){}}}const rn=new xn,nh=new Nt;function ih(e,n){function t(c,l){c.matrixAutoUpdate===!0&&c.updateMatrix(),l.value.copy(c.matrix)}function i(c,l){l.color.getRGB(c.fogColor.value,Eo(e)),l.isFog?(c.fogNear.value=l.near,c.fogFar.value=l.far):l.isFogExp2&&(c.fogDensity.value=l.density)}function r(c,l,b,R,x){l.isMeshBasicMaterial||l.isMeshLambertMaterial?a(c,l):l.isMeshToonMaterial?(a(c,l),f(c,l)):l.isMeshPhongMaterial?(a(c,l),p(c,l)):l.isMeshStandardMaterial?(a(c,l),g(c,l),l.isMeshPhysicalMaterial&&v(c,l,x)):l.isMeshMatcapMaterial?(a(c,l),T(c,l)):l.isMeshDepthMaterial?a(c,l):l.isMeshDistanceMaterial?(a(c,l),M(c,l)):l.isMeshNormalMaterial?a(c,l):l.isLineBasicMaterial?(s(c,l),l.isLineDashedMaterial&&o(c,l)):l.isPointsMaterial?m(c,l,b,R):l.isSpriteMaterial?u(c,l):l.isShadowMaterial?(c.color.value.copy(l.color),c.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}function a(c,l){c.opacity.value=l.opacity,l.color&&c.diffuse.value.copy(l.color),l.emissive&&c.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(c.map.value=l.map,t(l.map,c.mapTransform)),l.alphaMap&&(c.alphaMap.value=l.alphaMap,t(l.alphaMap,c.alphaMapTransform)),l.bumpMap&&(c.bumpMap.value=l.bumpMap,t(l.bumpMap,c.bumpMapTransform),c.bumpScale.value=l.bumpScale,l.side===bt&&(c.bumpScale.value*=-1)),l.normalMap&&(c.normalMap.value=l.normalMap,t(l.normalMap,c.normalMapTransform),c.normalScale.value.copy(l.normalScale),l.side===bt&&c.normalScale.value.negate()),l.displacementMap&&(c.displacementMap.value=l.displacementMap,t(l.displacementMap,c.displacementMapTransform),c.displacementScale.value=l.displacementScale,c.displacementBias.value=l.displacementBias),l.emissiveMap&&(c.emissiveMap.value=l.emissiveMap,t(l.emissiveMap,c.emissiveMapTransform)),l.specularMap&&(c.specularMap.value=l.specularMap,t(l.specularMap,c.specularMapTransform)),l.alphaTest>0&&(c.alphaTest.value=l.alphaTest);const b=n.get(l),R=b.envMap,x=b.envMapRotation;R&&(c.envMap.value=R,rn.copy(x),rn.x*=-1,rn.y*=-1,rn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(rn.y*=-1,rn.z*=-1),c.envMapRotation.value.setFromMatrix4(nh.makeRotationFromEuler(rn)),c.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,c.reflectivity.value=l.reflectivity,c.ior.value=l.ior,c.refractionRatio.value=l.refractionRatio),l.lightMap&&(c.lightMap.value=l.lightMap,c.lightMapIntensity.value=l.lightMapIntensity,t(l.lightMap,c.lightMapTransform)),l.aoMap&&(c.aoMap.value=l.aoMap,c.aoMapIntensity.value=l.aoMapIntensity,t(l.aoMap,c.aoMapTransform))}function s(c,l){c.diffuse.value.copy(l.color),c.opacity.value=l.opacity,l.map&&(c.map.value=l.map,t(l.map,c.mapTransform))}function o(c,l){c.dashSize.value=l.dashSize,c.totalSize.value=l.dashSize+l.gapSize,c.scale.value=l.scale}function m(c,l,b,R){c.diffuse.value.copy(l.color),c.opacity.value=l.opacity,c.size.value=l.size*b,c.scale.value=R*.5,l.map&&(c.map.value=l.map,t(l.map,c.uvTransform)),l.alphaMap&&(c.alphaMap.value=l.alphaMap,t(l.alphaMap,c.alphaMapTransform)),l.alphaTest>0&&(c.alphaTest.value=l.alphaTest)}function u(c,l){c.diffuse.value.copy(l.color),c.opacity.value=l.opacity,c.rotation.value=l.rotation,l.map&&(c.map.value=l.map,t(l.map,c.mapTransform)),l.alphaMap&&(c.alphaMap.value=l.alphaMap,t(l.alphaMap,c.alphaMapTransform)),l.alphaTest>0&&(c.alphaTest.value=l.alphaTest)}function p(c,l){c.specular.value.copy(l.specular),c.shininess.value=Math.max(l.shininess,1e-4)}function f(c,l){l.gradientMap&&(c.gradientMap.value=l.gradientMap)}function g(c,l){c.metalness.value=l.metalness,l.metalnessMap&&(c.metalnessMap.value=l.metalnessMap,t(l.metalnessMap,c.metalnessMapTransform)),c.roughness.value=l.roughness,l.roughnessMap&&(c.roughnessMap.value=l.roughnessMap,t(l.roughnessMap,c.roughnessMapTransform)),l.envMap&&(c.envMapIntensity.value=l.envMapIntensity)}function v(c,l,b){c.ior.value=l.ior,l.sheen>0&&(c.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),c.sheenRoughness.value=l.sheenRoughness,l.sheenColorMap&&(c.sheenColorMap.value=l.sheenColorMap,t(l.sheenColorMap,c.sheenColorMapTransform)),l.sheenRoughnessMap&&(c.sheenRoughnessMap.value=l.sheenRoughnessMap,t(l.sheenRoughnessMap,c.sheenRoughnessMapTransform))),l.clearcoat>0&&(c.clearcoat.value=l.clearcoat,c.clearcoatRoughness.value=l.clearcoatRoughness,l.clearcoatMap&&(c.clearcoatMap.value=l.clearcoatMap,t(l.clearcoatMap,c.clearcoatMapTransform)),l.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap,t(l.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),l.clearcoatNormalMap&&(c.clearcoatNormalMap.value=l.clearcoatNormalMap,t(l.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),l.side===bt&&c.clearcoatNormalScale.value.negate())),l.dispersion>0&&(c.dispersion.value=l.dispersion),l.iridescence>0&&(c.iridescence.value=l.iridescence,c.iridescenceIOR.value=l.iridescenceIOR,c.iridescenceThicknessMinimum.value=l.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=l.iridescenceThicknessRange[1],l.iridescenceMap&&(c.iridescenceMap.value=l.iridescenceMap,t(l.iridescenceMap,c.iridescenceMapTransform)),l.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=l.iridescenceThicknessMap,t(l.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),l.transmission>0&&(c.transmission.value=l.transmission,c.transmissionSamplerMap.value=b.texture,c.transmissionSamplerSize.value.set(b.width,b.height),l.transmissionMap&&(c.transmissionMap.value=l.transmissionMap,t(l.transmissionMap,c.transmissionMapTransform)),c.thickness.value=l.thickness,l.thicknessMap&&(c.thicknessMap.value=l.thicknessMap,t(l.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=l.attenuationDistance,c.attenuationColor.value.copy(l.attenuationColor)),l.anisotropy>0&&(c.anisotropyVector.value.set(l.anisotropy*Math.cos(l.anisotropyRotation),l.anisotropy*Math.sin(l.anisotropyRotation)),l.anisotropyMap&&(c.anisotropyMap.value=l.anisotropyMap,t(l.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=l.specularIntensity,c.specularColor.value.copy(l.specularColor),l.specularColorMap&&(c.specularColorMap.value=l.specularColorMap,t(l.specularColorMap,c.specularColorMapTransform)),l.specularIntensityMap&&(c.specularIntensityMap.value=l.specularIntensityMap,t(l.specularIntensityMap,c.specularIntensityMapTransform))}function T(c,l){l.matcap&&(c.matcap.value=l.matcap)}function M(c,l){const b=n.get(l).light;c.referencePosition.value.setFromMatrixPosition(b.matrixWorld),c.nearDistance.value=b.shadow.camera.near,c.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ah(e,n,t,i){let r={},a={},s=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function m(b,R){const x=R.program;i.uniformBlockBinding(b,x)}function u(b,R){let x=r[b.id];x===void 0&&(T(b),x=p(b),r[b.id]=x,b.addEventListener("dispose",c));const D=R.program;i.updateUBOMapping(b,D);const C=n.render.frame;a[b.id]!==C&&(g(b),a[b.id]=C)}function p(b){const R=f();b.__bindingPointIndex=R;const x=e.createBuffer(),D=b.__size,C=b.usage;return e.bindBuffer(e.UNIFORM_BUFFER,x),e.bufferData(e.UNIFORM_BUFFER,D,C),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,R,x),x}function f(){for(let b=0;b<o;b++)if(s.indexOf(b)===-1)return s.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(b){const R=r[b.id],x=b.uniforms,D=b.__cache;e.bindBuffer(e.UNIFORM_BUFFER,R);for(let C=0,U=x.length;C<U;C++){const F=Array.isArray(x[C])?x[C]:[x[C]];for(let _=0,S=F.length;_<S;_++){const L=F[_];if(v(L,C,_,D)===!0){const B=L.__offset,X=Array.isArray(L.value)?L.value:[L.value];let q=0;for(let $=0;$<X.length;$++){const W=X[$],ie=M(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,e.bufferSubData(e.UNIFORM_BUFFER,B+q,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,q),q+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,B,L.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function v(b,R,x,D){const C=b.value,U=R+"_"+x;if(D[U]===void 0)return typeof C=="number"||typeof C=="boolean"?D[U]=C:D[U]=C.clone(),!0;{const F=D[U];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return D[U]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function T(b){const R=b.uniforms;let x=0;const D=16;for(let U=0,F=R.length;U<F;U++){const _=Array.isArray(R[U])?R[U]:[R[U]];for(let S=0,L=_.length;S<L;S++){const B=_[S],X=Array.isArray(B.value)?B.value:[B.value];for(let q=0,$=X.length;q<$;q++){const W=X[q],ie=M(W),k=x%D,Ee=k%ie.boundary,be=k+Ee;x+=Ee,be!==0&&D-be<ie.storage&&(x+=D-be),B.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=x,x+=ie.storage}}}const C=x%D;return C>0&&(x+=D-C),b.__size=x,b.__cache={},this}function M(b){const R={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(R.boundary=4,R.storage=4):b.isVector2?(R.boundary=8,R.storage=8):b.isVector3||b.isColor?(R.boundary=16,R.storage=12):b.isVector4?(R.boundary=16,R.storage=16):b.isMatrix3?(R.boundary=48,R.storage=48):b.isMatrix4?(R.boundary=64,R.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),R}function c(b){const R=b.target;R.removeEventListener("dispose",c);const x=s.indexOf(R.__bindingPointIndex);s.splice(x,1),e.deleteBuffer(r[R.id]),delete r[R.id],delete a[R.id]}function l(){for(const b in r)e.deleteBuffer(r[b]);s=[],r={},a={}}return{bind:m,update:u,dispose:l}}class rh{constructor(n={}){const{canvas:t=Yo(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:u=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:g=!1}=n;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=s;const T=new Uint32Array(4),M=new Int32Array(4);let c=null,l=null;const b=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let D=!1;this._outputColorSpace=Ko;let C=0,U=0,F=null,_=-1,S=null;const L=new Et,B=new Et;let X=null;const q=new ze(0);let $=0,W=t.width,ie=t.height,k=1,Ee=null,be=null;const Ie=new Et(0,0,W,ie),ke=new Et(0,0,W,ie);let nt=!1;const et=new oo;let Xe=!1,V=!1;const K=new Nt,fe=new ne,Pe=new Et,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function pt(){return F===null?k:1}let A=i;function Ze(h,y){return t.getContext(h,y)}try{const h={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:m,preserveDrawingBuffer:u,powerPreference:p,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$o}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",Z,!1),A===null){const y="webgl2";if(A=Ze(y,h),A===null)throw Ze(y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(h){throw console.error("THREE.WebGLRenderer: "+h.message),h}let De,Ce,me,Qe,_e,Ne,dt,it,E,d,I,H,Y,G,Me,ee,ge,ve,j,se,we,Se,re,Ue;function w(){De=new pu(A),De.init(),Se=new Qf(A,De),Ce=new su(A,De,n,Se),me=new $f(A,De),Ce.reversedDepthBuffer&&g&&me.buffers.depth.setReversed(!0),Qe=new gu(A),_e=new Of,Ne=new Zf(A,De,me,_e,Ce,Se,Qe),dt=new cu(x),it=new hu(x),E=new Tl(A),re=new ru(A,E),d=new mu(A,E,Qe,re),I=new Su(A,d,E,Qe),j=new vu(A,Ce,Ne),ee=new lu(_e),H=new Nf(x,dt,it,De,Ce,re,ee),Y=new ih(x,_e),G=new Bf,Me=new Wf(De),ve=new au(x,dt,it,me,I,v,m),ge=new Yf(x,I,Ce),Ue=new ah(A,Qe,Ce,me),se=new ou(A,De,Qe),we=new _u(A,De,Qe),Qe.programs=H.programs,x.capabilities=Ce,x.extensions=De,x.properties=_e,x.renderLists=G,x.shadowMap=ge,x.state=me,x.info=Qe}w();const J=new th(x,A);this.xr=J,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const h=De.get("WEBGL_lose_context");h&&h.loseContext()},this.forceContextRestore=function(){const h=De.get("WEBGL_lose_context");h&&h.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(h){h!==void 0&&(k=h,this.setSize(W,ie,!1))},this.getSize=function(h){return h.set(W,ie)},this.setSize=function(h,y,N=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=h,ie=y,t.width=Math.floor(h*k),t.height=Math.floor(y*k),N===!0&&(t.style.width=h+"px",t.style.height=y+"px"),this.setViewport(0,0,h,y)},this.getDrawingBufferSize=function(h){return h.set(W*k,ie*k).floor()},this.setDrawingBufferSize=function(h,y,N){W=h,ie=y,k=N,t.width=Math.floor(h*N),t.height=Math.floor(y*N),this.setViewport(0,0,h,y)},this.getCurrentViewport=function(h){return h.copy(L)},this.getViewport=function(h){return h.copy(Ie)},this.setViewport=function(h,y,N,O){h.isVector4?Ie.set(h.x,h.y,h.z,h.w):Ie.set(h,y,N,O),me.viewport(L.copy(Ie).multiplyScalar(k).round())},this.getScissor=function(h){return h.copy(ke)},this.setScissor=function(h,y,N,O){h.isVector4?ke.set(h.x,h.y,h.z,h.w):ke.set(h,y,N,O),me.scissor(B.copy(ke).multiplyScalar(k).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(h){me.setScissorTest(nt=h)},this.setOpaqueSort=function(h){Ee=h},this.setTransparentSort=function(h){be=h},this.getClearColor=function(h){return h.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(h=!0,y=!0,N=!0){let O=0;if(h){let P=!1;if(F!==null){const Q=F.texture.format;P=Q===vo||Q===go||Q===_o}if(P){const Q=F.texture.type,oe=Q===pn||Q===Wn||Q===hi||Q===zn||Q===uo||Q===fo,he=ve.getClearColor(),ce=ve.getClearAlpha(),Re=he.r,ye=he.g,Te=he.b;oe?(T[0]=Re,T[1]=ye,T[2]=Te,T[3]=ce,A.clearBufferuiv(A.COLOR,0,T)):(M[0]=Re,M[1]=ye,M[2]=Te,M[3]=ce,A.clearBufferiv(A.COLOR,0,M))}else O|=A.COLOR_BUFFER_BIT}y&&(O|=A.DEPTH_BUFFER_BIT),N&&(O|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),ve.dispose(),G.dispose(),Me.dispose(),_e.dispose(),dt.dispose(),it.dispose(),I.dispose(),re.dispose(),Ue.dispose(),H.dispose(),J.dispose(),J.removeEventListener("sessionstart",Dt),J.removeEventListener("sessionend",wa),tn.stop()};function te(h){h.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const h=Qe.autoReset,y=ge.enabled,N=ge.autoUpdate,O=ge.needsUpdate,P=ge.type;w(),Qe.autoReset=h,ge.enabled=y,ge.autoUpdate=N,ge.needsUpdate=O,ge.type=P}function Z(h){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",h.statusMessage)}function z(h){const y=h.target;y.removeEventListener("dispose",z),pe(y)}function pe(h){Le(h),_e.remove(h)}function Le(h){const y=_e.get(h).programs;y!==void 0&&(y.forEach(function(N){H.releaseProgram(N)}),h.isShaderMaterial&&H.releaseShaderCache(h))}this.renderBufferDirect=function(h,y,N,O,P,Q){y===null&&(y=xe);const oe=P.isMesh&&P.matrixWorld.determinant()<0,he=ko(h,y,N,O,P);me.setMaterial(O,oe);let ce=N.index,Re=1;if(O.wireframe===!0){if(ce=d.getWireframeAttribute(N),ce===void 0)return;Re=2}const ye=N.drawRange,Te=N.attributes.position;let Fe=ye.start*Re,We=(ye.start+ye.count)*Re;Q!==null&&(Fe=Math.max(Fe,Q.start*Re),We=Math.min(We,(Q.start+Q.count)*Re)),ce!==null?(Fe=Math.max(Fe,0),We=Math.min(We,ce.count)):Te!=null&&(Fe=Math.max(Fe,0),We=Math.min(We,Te.count));const tt=We-Fe;if(tt<0||tt===1/0)return;re.setup(P,O,he,N,ce);let Ke,qe=se;if(ce!==null&&(Ke=E.get(ce),qe=we,qe.setIndex(Ke)),P.isMesh)O.wireframe===!0?(me.setLineWidth(O.wireframeLinewidth*pt()),qe.setMode(A.LINES)):qe.setMode(A.TRIANGLES);else if(P.isLine){let Ae=O.linewidth;Ae===void 0&&(Ae=1),me.setLineWidth(Ae*pt()),P.isLineSegments?qe.setMode(A.LINES):P.isLineLoop?qe.setMode(A.LINE_LOOP):qe.setMode(A.LINE_STRIP)}else P.isPoints?qe.setMode(A.POINTS):P.isSprite&&qe.setMode(A.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)Ki("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),qe.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))qe.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{const Ae=P._multiDrawStarts,je=P._multiDrawCounts,Ge=P._multiDrawCount,Tt=ce?E.get(ce).bytesPerElement:1,_n=_e.get(O).currentProgram.getUniforms();for(let At=0;At<Ge;At++)_n.setValue(A,"_gl_DrawID",At),qe.render(Ae[At]/Tt,je[At])}else if(P.isInstancedMesh)qe.renderInstances(Fe,tt,P.count);else if(N.isInstancedBufferGeometry){const Ae=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,je=Math.min(N.instanceCount,Ae);qe.renderInstances(Fe,tt,je)}else qe.render(Fe,tt)};function Ye(h,y,N){h.transparent===!0&&h.side===It&&h.forceSinglePass===!1?(h.side=bt,h.needsUpdate=!0,jn(h,y,N),h.side=Vn,h.needsUpdate=!0,jn(h,y,N),h.side=It):jn(h,y,N)}this.compile=function(h,y,N=null){N===null&&(N=h),l=Me.get(N),l.init(y),R.push(l),N.traverseVisible(function(P){P.isLight&&P.layers.test(y.layers)&&(l.pushLight(P),P.castShadow&&l.pushShadow(P))}),h!==N&&h.traverseVisible(function(P){P.isLight&&P.layers.test(y.layers)&&(l.pushLight(P),P.castShadow&&l.pushShadow(P))}),l.setupLights();const O=new Set;return h.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;const Q=P.material;if(Q)if(Array.isArray(Q))for(let oe=0;oe<Q.length;oe++){const he=Q[oe];Ye(he,N,P),O.add(he)}else Ye(Q,N,P),O.add(Q)}),l=R.pop(),O},this.compileAsync=function(h,y,N=null){const O=this.compile(h,y,N);return new Promise(P=>{function Q(){if(O.forEach(function(oe){_e.get(oe).currentProgram.isReady()&&O.delete(oe)}),O.size===0){P(h);return}setTimeout(Q,10)}De.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Ve=null;function Bt(h){Ve&&Ve(h)}function Dt(){tn.stop()}function wa(){tn.start()}const tn=new wo;tn.setAnimationLoop(Bt),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(h){Ve=h,J.setAnimationLoop(h),h===null?tn.stop():tn.start()},J.addEventListener("sessionstart",Dt),J.addEventListener("sessionend",wa),this.render=function(h,y){if(y!==void 0&&y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld(),y.parent===null&&y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(y),y=J.getCamera()),h.isScene===!0&&h.onBeforeRender(x,h,y,F),l=Me.get(h,R.length),l.init(y),R.push(l),K.multiplyMatrices(y.projectionMatrix,y.matrixWorldInverse),et.setFromProjectionMatrix(K,Ua,y.reversedDepth),V=this.localClippingEnabled,Xe=ee.init(this.clippingPlanes,V),c=G.get(h,b.length),c.init(),b.push(c),J.enabled===!0&&J.isPresenting===!0){const Q=x.xr.getDepthSensingMesh();Q!==null&&Ti(Q,y,-1/0,x.sortObjects)}Ti(h,y,0,x.sortObjects),c.finish(),x.sortObjects===!0&&c.sort(Ee,be),Be=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Be&&ve.addToRenderList(c,h),this.info.render.frame++,Xe===!0&&ee.beginShadows();const N=l.state.shadowsArray;ge.render(N,h,y),Xe===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=c.opaque,P=c.transmissive;if(l.setupLights(),y.isArrayCamera){const Q=y.cameras;if(P.length>0)for(let oe=0,he=Q.length;oe<he;oe++){const ce=Q[oe];ya(O,P,h,ce)}Be&&ve.render(h);for(let oe=0,he=Q.length;oe<he;oe++){const ce=Q[oe];Ca(c,h,ce,ce.viewport)}}else P.length>0&&ya(O,P,h,y),Be&&ve.render(h),Ca(c,h,y);F!==null&&U===0&&(Ne.updateMultisampleRenderTarget(F),Ne.updateRenderTargetMipmap(F)),h.isScene===!0&&h.onAfterRender(x,h,y),re.resetDefaultState(),_=-1,S=null,R.pop(),R.length>0?(l=R[R.length-1],Xe===!0&&ee.setGlobalState(x.clippingPlanes,l.state.camera)):l=null,b.pop(),b.length>0?c=b[b.length-1]:c=null};function Ti(h,y,N,O){if(h.visible===!1)return;if(h.layers.test(y.layers)){if(h.isGroup)N=h.renderOrder;else if(h.isLOD)h.autoUpdate===!0&&h.update(y);else if(h.isLight)l.pushLight(h),h.castShadow&&l.pushShadow(h);else if(h.isSprite){if(!h.frustumCulled||et.intersectsSprite(h)){O&&Pe.setFromMatrixPosition(h.matrixWorld).applyMatrix4(K);const oe=I.update(h),he=h.material;he.visible&&c.push(h,oe,he,N,Pe.z,null)}}else if((h.isMesh||h.isLine||h.isPoints)&&(!h.frustumCulled||et.intersectsObject(h))){const oe=I.update(h),he=h.material;if(O&&(h.boundingSphere!==void 0?(h.boundingSphere===null&&h.computeBoundingSphere(),Pe.copy(h.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Pe.copy(oe.boundingSphere.center)),Pe.applyMatrix4(h.matrixWorld).applyMatrix4(K)),Array.isArray(he)){const ce=oe.groups;for(let Re=0,ye=ce.length;Re<ye;Re++){const Te=ce[Re],Fe=he[Te.materialIndex];Fe&&Fe.visible&&c.push(h,oe,Fe,N,Pe.z,Te)}}else he.visible&&c.push(h,oe,he,N,Pe.z,null)}}const Q=h.children;for(let oe=0,he=Q.length;oe<he;oe++)Ti(Q[oe],y,N,O)}function Ca(h,y,N,O){const P=h.opaque,Q=h.transmissive,oe=h.transparent;l.setupLightsView(N),Xe===!0&&ee.setGlobalState(x.clippingPlanes,N),O&&me.viewport(L.copy(O)),P.length>0&&Qn(P,y,N),Q.length>0&&Qn(Q,y,N),oe.length>0&&Qn(oe,y,N),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function ya(h,y,N,O){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;l.state.transmissionRenderTarget[O.id]===void 0&&(l.state.transmissionRenderTarget[O.id]=new Tn(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?mi:pn,minFilter:In,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const Q=l.state.transmissionRenderTarget[O.id],oe=O.viewport||L;Q.setSize(oe.z*x.transmissionResolutionScale,oe.w*x.transmissionResolutionScale);const he=x.getRenderTarget(),ce=x.getActiveCubeFace(),Re=x.getActiveMipmapLevel();x.setRenderTarget(Q),x.getClearColor(q),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),x.clear(),Be&&ve.render(N);const ye=x.toneMapping;x.toneMapping=Qt;const Te=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),l.setupLightsView(O),Xe===!0&&ee.setGlobalState(x.clippingPlanes,O),Qn(h,N,O),Ne.updateMultisampleRenderTarget(Q),Ne.updateRenderTargetMipmap(Q),De.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let We=0,tt=y.length;We<tt;We++){const Ke=y[We],qe=Ke.object,Ae=Ke.geometry,je=Ke.material,Ge=Ke.group;if(je.side===It&&qe.layers.test(O.layers)){const Tt=je.side;je.side=bt,je.needsUpdate=!0,Pa(qe,N,O,Ae,je,Ge),je.side=Tt,je.needsUpdate=!0,Fe=!0}}Fe===!0&&(Ne.updateMultisampleRenderTarget(Q),Ne.updateRenderTargetMipmap(Q))}x.setRenderTarget(he,ce,Re),x.setClearColor(q,$),Te!==void 0&&(O.viewport=Te),x.toneMapping=ye}function Qn(h,y,N){const O=y.isScene===!0?y.overrideMaterial:null;for(let P=0,Q=h.length;P<Q;P++){const oe=h[P],he=oe.object,ce=oe.geometry,Re=oe.group;let ye=oe.material;ye.allowOverride===!0&&O!==null&&(ye=O),he.layers.test(N.layers)&&Pa(he,y,N,ce,ye,Re)}}function Pa(h,y,N,O,P,Q){h.onBeforeRender(x,y,N,O,P,Q),h.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,h.matrixWorld),h.normalMatrix.getNormalMatrix(h.modelViewMatrix),P.onBeforeRender(x,y,N,O,h,Q),P.transparent===!0&&P.side===It&&P.forceSinglePass===!1?(P.side=bt,P.needsUpdate=!0,x.renderBufferDirect(N,y,O,P,h,Q),P.side=Vn,P.needsUpdate=!0,x.renderBufferDirect(N,y,O,P,h,Q),P.side=It):x.renderBufferDirect(N,y,O,P,h,Q),h.onAfterRender(x,y,N,O,P,Q)}function jn(h,y,N){y.isScene!==!0&&(y=xe);const O=_e.get(h),P=l.state.lights,Q=l.state.shadowsArray,oe=P.state.version,he=H.getParameters(h,P.state,Q,y,N),ce=H.getProgramCacheKey(he);let Re=O.programs;O.environment=h.isMeshStandardMaterial?y.environment:null,O.fog=y.fog,O.envMap=(h.isMeshStandardMaterial?it:dt).get(h.envMap||O.environment),O.envMapRotation=O.environment!==null&&h.envMap===null?y.environmentRotation:h.envMapRotation,Re===void 0&&(h.addEventListener("dispose",z),Re=new Map,O.programs=Re);let ye=Re.get(ce);if(ye!==void 0){if(O.currentProgram===ye&&O.lightsStateVersion===oe)return Da(h,he),ye}else he.uniforms=H.getUniforms(h),h.onBeforeCompile(he,x),ye=H.acquireProgram(he,ce),Re.set(ce,ye),O.uniforms=he.uniforms;const Te=O.uniforms;return(!h.isShaderMaterial&&!h.isRawShaderMaterial||h.clipping===!0)&&(Te.clippingPlanes=ee.uniform),Da(h,he),O.needsLights=zo(h),O.lightsStateVersion=oe,O.needsLights&&(Te.ambientLightColor.value=P.state.ambient,Te.lightProbe.value=P.state.probe,Te.directionalLights.value=P.state.directional,Te.directionalLightShadows.value=P.state.directionalShadow,Te.spotLights.value=P.state.spot,Te.spotLightShadows.value=P.state.spotShadow,Te.rectAreaLights.value=P.state.rectArea,Te.ltc_1.value=P.state.rectAreaLTC1,Te.ltc_2.value=P.state.rectAreaLTC2,Te.pointLights.value=P.state.point,Te.pointLightShadows.value=P.state.pointShadow,Te.hemisphereLights.value=P.state.hemi,Te.directionalShadowMap.value=P.state.directionalShadowMap,Te.directionalShadowMatrix.value=P.state.directionalShadowMatrix,Te.spotShadowMap.value=P.state.spotShadowMap,Te.spotLightMatrix.value=P.state.spotLightMatrix,Te.spotLightMap.value=P.state.spotLightMap,Te.pointShadowMap.value=P.state.pointShadowMap,Te.pointShadowMatrix.value=P.state.pointShadowMatrix),O.currentProgram=ye,O.uniformsList=null,ye}function La(h){if(h.uniformsList===null){const y=h.currentProgram.getUniforms();h.uniformsList=li.seqWithValue(y.seq,h.uniforms)}return h.uniformsList}function Da(h,y){const N=_e.get(h);N.outputColorSpace=y.outputColorSpace,N.batching=y.batching,N.batchingColor=y.batchingColor,N.instancing=y.instancing,N.instancingColor=y.instancingColor,N.instancingMorph=y.instancingMorph,N.skinning=y.skinning,N.morphTargets=y.morphTargets,N.morphNormals=y.morphNormals,N.morphColors=y.morphColors,N.morphTargetsCount=y.morphTargetsCount,N.numClippingPlanes=y.numClippingPlanes,N.numIntersection=y.numClipIntersection,N.vertexAlphas=y.vertexAlphas,N.vertexTangents=y.vertexTangents,N.toneMapping=y.toneMapping}function ko(h,y,N,O,P){y.isScene!==!0&&(y=xe),Ne.resetTextureUnits();const Q=y.fog,oe=O.isMeshStandardMaterial?y.environment:null,he=F===null?x.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:_i,ce=(O.isMeshStandardMaterial?it:dt).get(O.envMap||oe),Re=O.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,ye=!!N.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Te=!!N.morphAttributes.position,Fe=!!N.morphAttributes.normal,We=!!N.morphAttributes.color;let tt=Qt;O.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(tt=x.toneMapping);const Ke=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,qe=Ke!==void 0?Ke.length:0,Ae=_e.get(O),je=l.state.lights;if(Xe===!0&&(V===!0||h!==S)){const _t=h===S&&O.id===_;ee.setState(O,h,_t)}let Ge=!1;O.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==je.state.version||Ae.outputColorSpace!==he||P.isBatchedMesh&&Ae.batching===!1||!P.isBatchedMesh&&Ae.batching===!0||P.isBatchedMesh&&Ae.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&Ae.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&Ae.instancing===!1||!P.isInstancedMesh&&Ae.instancing===!0||P.isSkinnedMesh&&Ae.skinning===!1||!P.isSkinnedMesh&&Ae.skinning===!0||P.isInstancedMesh&&Ae.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&Ae.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&Ae.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&Ae.instancingMorph===!1&&P.morphTexture!==null||Ae.envMap!==ce||O.fog===!0&&Ae.fog!==Q||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ee.numPlanes||Ae.numIntersection!==ee.numIntersection)||Ae.vertexAlphas!==Re||Ae.vertexTangents!==ye||Ae.morphTargets!==Te||Ae.morphNormals!==Fe||Ae.morphColors!==We||Ae.toneMapping!==tt||Ae.morphTargetsCount!==qe)&&(Ge=!0):(Ge=!0,Ae.__version=O.version);let Tt=Ae.currentProgram;Ge===!0&&(Tt=jn(O,y,P));let _n=!1,At=!1,Cn=!1;const Je=Tt.getUniforms(),Rt=Ae.uniforms;if(me.useProgram(Tt.program)&&(_n=!0,At=!0,Cn=!0),O.id!==_&&(_=O.id,At=!0),_n||S!==h){me.buffers.depth.getReversed()&&h.reversedDepth!==!0&&(h._reversedDepth=!0,h.updateProjectionMatrix()),Je.setValue(A,"projectionMatrix",h.projectionMatrix),Je.setValue(A,"viewMatrix",h.matrixWorldInverse);const vt=Je.map.cameraPosition;vt!==void 0&&vt.setValue(A,fe.setFromMatrixPosition(h.matrixWorld)),Ce.logarithmicDepthBuffer&&Je.setValue(A,"logDepthBufFC",2/(Math.log(h.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Je.setValue(A,"isOrthographic",h.isOrthographicCamera===!0),S!==h&&(S=h,At=!0,Cn=!0)}if(P.isSkinnedMesh){Je.setOptional(A,P,"bindMatrix"),Je.setOptional(A,P,"bindMatrixInverse");const _t=P.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),Je.setValue(A,"boneTexture",_t.boneTexture,Ne))}P.isBatchedMesh&&(Je.setOptional(A,P,"batchingTexture"),Je.setValue(A,"batchingTexture",P._matricesTexture,Ne),Je.setOptional(A,P,"batchingIdTexture"),Je.setValue(A,"batchingIdTexture",P._indirectTexture,Ne),Je.setOptional(A,P,"batchingColorTexture"),P._colorsTexture!==null&&Je.setValue(A,"batchingColorTexture",P._colorsTexture,Ne));const wt=N.morphAttributes;if((wt.position!==void 0||wt.normal!==void 0||wt.color!==void 0)&&j.update(P,N,Tt),(At||Ae.receiveShadow!==P.receiveShadow)&&(Ae.receiveShadow=P.receiveShadow,Je.setValue(A,"receiveShadow",P.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Rt.envMap.value=ce,Rt.flipEnvMap.value=ce.isCubeTexture&&ce.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&y.environment!==null&&(Rt.envMapIntensity.value=y.environmentIntensity),At&&(Je.setValue(A,"toneMappingExposure",x.toneMappingExposure),Ae.needsLights&&Vo(Rt,Cn),Q&&O.fog===!0&&Y.refreshFogUniforms(Rt,Q),Y.refreshMaterialUniforms(Rt,O,k,ie,l.state.transmissionRenderTarget[h.id]),li.upload(A,La(Ae),Rt,Ne)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(li.upload(A,La(Ae),Rt,Ne),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Je.setValue(A,"center",P.center),Je.setValue(A,"modelViewMatrix",P.modelViewMatrix),Je.setValue(A,"normalMatrix",P.normalMatrix),Je.setValue(A,"modelMatrix",P.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const _t=O.uniformsGroups;for(let vt=0,Ai=_t.length;vt<Ai;vt++){const nn=_t[vt];Ue.update(nn,Tt),Ue.bind(nn,Tt)}}return Tt}function Vo(h,y){h.ambientLightColor.needsUpdate=y,h.lightProbe.needsUpdate=y,h.directionalLights.needsUpdate=y,h.directionalLightShadows.needsUpdate=y,h.pointLights.needsUpdate=y,h.pointLightShadows.needsUpdate=y,h.spotLights.needsUpdate=y,h.spotLightShadows.needsUpdate=y,h.rectAreaLights.needsUpdate=y,h.hemisphereLights.needsUpdate=y}function zo(h){return h.isMeshLambertMaterial||h.isMeshToonMaterial||h.isMeshPhongMaterial||h.isMeshStandardMaterial||h.isShadowMaterial||h.isShaderMaterial&&h.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(h,y,N){const O=_e.get(h);O.__autoAllocateDepthBuffer=h.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),_e.get(h.texture).__webglTexture=y,_e.get(h.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:N,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(h,y){const N=_e.get(h);N.__webglFramebuffer=y,N.__useDefaultFramebuffer=y===void 0};const Wo=A.createFramebuffer();this.setRenderTarget=function(h,y=0,N=0){F=h,C=y,U=N;let O=!0,P=null,Q=!1,oe=!1;if(h){const ce=_e.get(h);if(ce.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(A.FRAMEBUFFER,null),O=!1;else if(ce.__webglFramebuffer===void 0)Ne.setupRenderTarget(h);else if(ce.__hasExternalTextures)Ne.rebindTextures(h,_e.get(h.texture).__webglTexture,_e.get(h.depthTexture).__webglTexture);else if(h.depthBuffer){const Te=h.depthTexture;if(ce.__boundDepthTexture!==Te){if(Te!==null&&_e.has(Te)&&(h.width!==Te.image.width||h.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(h)}}const Re=h.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(oe=!0);const ye=_e.get(h).__webglFramebuffer;h.isWebGLCubeRenderTarget?(Array.isArray(ye[y])?P=ye[y][N]:P=ye[y],Q=!0):h.samples>0&&Ne.useMultisampledRTT(h)===!1?P=_e.get(h).__webglMultisampledFramebuffer:Array.isArray(ye)?P=ye[N]:P=ye,L.copy(h.viewport),B.copy(h.scissor),X=h.scissorTest}else L.copy(Ie).multiplyScalar(k).floor(),B.copy(ke).multiplyScalar(k).floor(),X=nt;if(N!==0&&(P=Wo),me.bindFramebuffer(A.FRAMEBUFFER,P)&&O&&me.drawBuffers(h,P),me.viewport(L),me.scissor(B),me.setScissorTest(X),Q){const ce=_e.get(h.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+y,ce.__webglTexture,N)}else if(oe){const ce=y;for(let Re=0;Re<h.textures.length;Re++){const ye=_e.get(h.textures[Re]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Re,ye.__webglTexture,N,ce)}}else if(h!==null&&N!==0){const ce=_e.get(h.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ce.__webglTexture,N)}_=-1},this.readRenderTargetPixels=function(h,y,N,O,P,Q,oe,he=0){if(!(h&&h.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ce=_e.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&oe!==void 0&&(ce=ce[oe]),ce){me.bindFramebuffer(A.FRAMEBUFFER,ce);try{const Re=h.textures[he],ye=Re.format,Te=Re.type;if(!Ce.textureFormatReadable(ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}y>=0&&y<=h.width-O&&N>=0&&N<=h.height-P&&(h.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+he),A.readPixels(y,N,O,P,Se.convert(ye),Se.convert(Te),Q))}finally{const Re=F!==null?_e.get(F).__webglFramebuffer:null;me.bindFramebuffer(A.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(h,y,N,O,P,Q,oe,he=0){if(!(h&&h.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ce=_e.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&oe!==void 0&&(ce=ce[oe]),ce)if(y>=0&&y<=h.width-O&&N>=0&&N<=h.height-P){me.bindFramebuffer(A.FRAMEBUFFER,ce);const Re=h.textures[he],ye=Re.format,Te=Re.type;if(!Ce.textureFormatReadable(ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Fe=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Fe),A.bufferData(A.PIXEL_PACK_BUFFER,Q.byteLength,A.STREAM_READ),h.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+he),A.readPixels(y,N,O,P,Se.convert(ye),Se.convert(Te),0);const We=F!==null?_e.get(F).__webglFramebuffer:null;me.bindFramebuffer(A.FRAMEBUFFER,We);const tt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Zo(A,tt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Fe),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,Q),A.deleteBuffer(Fe),A.deleteSync(tt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(h,y=null,N=0){const O=Math.pow(2,-N),P=Math.floor(h.image.width*O),Q=Math.floor(h.image.height*O),oe=y!==null?y.x:0,he=y!==null?y.y:0;Ne.setTexture2D(h,0),A.copyTexSubImage2D(A.TEXTURE_2D,N,0,0,oe,he,P,Q),me.unbindTexture()};const Xo=A.createFramebuffer(),qo=A.createFramebuffer();this.copyTextureToTexture=function(h,y,N=null,O=null,P=0,Q=null){Q===null&&(P!==0?(Ki("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=P,P=0):Q=0);let oe,he,ce,Re,ye,Te,Fe,We,tt;const Ke=h.isCompressedTexture?h.mipmaps[Q]:h.image;if(N!==null)oe=N.max.x-N.min.x,he=N.max.y-N.min.y,ce=N.isBox3?N.max.z-N.min.z:1,Re=N.min.x,ye=N.min.y,Te=N.isBox3?N.min.z:0;else{const wt=Math.pow(2,-P);oe=Math.floor(Ke.width*wt),he=Math.floor(Ke.height*wt),h.isDataArrayTexture?ce=Ke.depth:h.isData3DTexture?ce=Math.floor(Ke.depth*wt):ce=1,Re=0,ye=0,Te=0}O!==null?(Fe=O.x,We=O.y,tt=O.z):(Fe=0,We=0,tt=0);const qe=Se.convert(y.format),Ae=Se.convert(y.type);let je;y.isData3DTexture?(Ne.setTexture3D(y,0),je=A.TEXTURE_3D):y.isDataArrayTexture||y.isCompressedArrayTexture?(Ne.setTexture2DArray(y,0),je=A.TEXTURE_2D_ARRAY):(Ne.setTexture2D(y,0),je=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,y.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,y.unpackAlignment);const Ge=A.getParameter(A.UNPACK_ROW_LENGTH),Tt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),_n=A.getParameter(A.UNPACK_SKIP_PIXELS),At=A.getParameter(A.UNPACK_SKIP_ROWS),Cn=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Ke.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Ke.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Re),A.pixelStorei(A.UNPACK_SKIP_ROWS,ye),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Te);const Je=h.isDataArrayTexture||h.isData3DTexture,Rt=y.isDataArrayTexture||y.isData3DTexture;if(h.isDepthTexture){const wt=_e.get(h),_t=_e.get(y),vt=_e.get(wt.__renderTarget),Ai=_e.get(_t.__renderTarget);me.bindFramebuffer(A.READ_FRAMEBUFFER,vt.__webglFramebuffer),me.bindFramebuffer(A.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let nn=0;nn<ce;nn++)Je&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,_e.get(h).__webglTexture,P,Te+nn),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,_e.get(y).__webglTexture,Q,tt+nn)),A.blitFramebuffer(Re,ye,oe,he,Fe,We,oe,he,A.DEPTH_BUFFER_BIT,A.NEAREST);me.bindFramebuffer(A.READ_FRAMEBUFFER,null),me.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(P!==0||h.isRenderTargetTexture||_e.has(h)){const wt=_e.get(h),_t=_e.get(y);me.bindFramebuffer(A.READ_FRAMEBUFFER,Xo),me.bindFramebuffer(A.DRAW_FRAMEBUFFER,qo);for(let vt=0;vt<ce;vt++)Je?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,wt.__webglTexture,P,Te+vt):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,wt.__webglTexture,P),Rt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,_t.__webglTexture,Q,tt+vt):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,_t.__webglTexture,Q),P!==0?A.blitFramebuffer(Re,ye,oe,he,Fe,We,oe,he,A.COLOR_BUFFER_BIT,A.NEAREST):Rt?A.copyTexSubImage3D(je,Q,Fe,We,tt+vt,Re,ye,oe,he):A.copyTexSubImage2D(je,Q,Fe,We,Re,ye,oe,he);me.bindFramebuffer(A.READ_FRAMEBUFFER,null),me.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Rt?h.isDataTexture||h.isData3DTexture?A.texSubImage3D(je,Q,Fe,We,tt,oe,he,ce,qe,Ae,Ke.data):y.isCompressedArrayTexture?A.compressedTexSubImage3D(je,Q,Fe,We,tt,oe,he,ce,qe,Ke.data):A.texSubImage3D(je,Q,Fe,We,tt,oe,he,ce,qe,Ae,Ke):h.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,Q,Fe,We,oe,he,qe,Ae,Ke.data):h.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,Q,Fe,We,Ke.width,Ke.height,qe,Ke.data):A.texSubImage2D(A.TEXTURE_2D,Q,Fe,We,oe,he,qe,Ae,Ke);A.pixelStorei(A.UNPACK_ROW_LENGTH,Ge),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Tt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,_n),A.pixelStorei(A.UNPACK_SKIP_ROWS,At),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Cn),Q===0&&y.generateMipmaps&&A.generateMipmap(je),me.unbindTexture()},this.initRenderTarget=function(h){_e.get(h).__webglFramebuffer===void 0&&Ne.setupRenderTarget(h)},this.initTexture=function(h){h.isCubeTexture?Ne.setTextureCube(h,0):h.isData3DTexture?Ne.setTexture3D(h,0):h.isDataArrayTexture||h.isCompressedArrayTexture?Ne.setTexture2DArray(h,0):Ne.setTexture2D(h,0),me.unbindTexture()},this.resetState=function(){C=0,U=0,F=null,me.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ua}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(n),t.unpackColorSpace=ot._getUnpackColorSpace()}}const ci=256,Bn=6378137,en=85.0511287798066,oh=Math.PI*Bn,sh=2*oh,Gn=e=>((e+180)%360+360)%360-180,Wr=e=>{const t=Math.max(-en,Math.min(en,e))*Math.PI/180;return Bn*Math.log(Math.tan(Math.PI/4+t/2))};function lh(e,n,t){if(!Number.isInteger(t)||t<0||t>30)throw new RangeError("Zoom must be an integer from 0 to 30");const i=2**t,r=Math.floor((Gn(n)+180)/360*i),s=Math.max(-en,Math.min(en,e))*Math.PI/180,o=Math.floor((1-Math.asinh(Math.tan(s))/Math.PI)/2*i);return{x:(r%i+i)%i,y:Math.max(0,Math.min(i-1,o)),z:t,n:i}}function ch(e,n,t){const i=lh(e,n,t),r=ci*i.n,a=(Gn(n)+180)/360*r,o=Math.max(-en,Math.min(en,e))*Math.PI/180,m=(1-Math.asinh(Math.tan(o))/Math.PI)/2*r;return{tile:i,u:a/ci-i.x,v:m/ci-i.y}}class dh{zoom;anchor;originTile;anchorU;anchorV;latitudeScale;tileSpan;originNorthing;constructor(n,t=12){if(!Number.isFinite(n.lat)||!Number.isFinite(n.lon)||Math.abs(n.lat)>90)throw new RangeError("Anchor must be a valid WGS84 latitude/longitude");this.anchor={lat:Math.max(-en,Math.min(en,n.lat)),lon:Gn(n.lon)},this.zoom=t;const i=ch(this.anchor.lat,this.anchor.lon,t);this.originTile=i.tile,this.anchorU=i.u,this.anchorV=i.v,this.latitudeScale=Math.cos(this.anchor.lat*Math.PI/180),this.originNorthing=Wr(this.anchor.lat),this.tileSpan=sh/this.originTile.n*this.latitudeScale}toLocal(n){const t=Gn(n.lon-this.anchor.lon),i=Bn*t*Math.PI/180,r=Wr(n.lat)-this.originNorthing;return{x:i*this.latitudeScale,z:r*this.latitudeScale}}toGeo(n){const t=Gn(this.anchor.lon+n.x/(Bn*this.latitudeScale)*180/Math.PI),i=this.originNorthing+n.z/this.latitudeScale;return{lon:t,lat:(2*Math.atan(Math.exp(i/Bn))-Math.PI/2)*180/Math.PI}}tileOrigin(n,t){return{x:(n-this.anchorU)*this.tileSpan,z:(t+this.anchorV)*this.tileSpan}}tileOffsetAt(n,t){const i=this.anchorU+n/this.tileSpan,r=this.anchorV-t/this.tileSpan,a=Math.floor(i),s=Math.floor(r);return{dx:a>this.originTile.n/2?a-this.originTile.n:a<-this.originTile.n/2?a+this.originTile.n:a,dz:-s||0,u:i-a,v:r-s}}tileAddress(n,t){const i=this.originTile.n;return{x:((this.originTile.x+n)%i+i)%i,y:Math.max(0,Math.min(i-1,this.originTile.y-t)),z:this.zoom,n:i}}}const Do=[{name:"Manhattan, New York",lat:40.758,lon:-73.9855,terrain:"URBAN JUNGLE"},{name:"Moab, Utah",lat:38.5733,lon:-109.5498,terrain:"RED ROCK COUNTRY"},{name:"Grand Canyon",lat:36.1069,lon:-112.1129,terrain:"THE BIG DROP"},{name:"Mount Everest",lat:27.9881,lon:86.925,terrain:"ROOF OF THE WORLD"},{name:"San Francisco",lat:37.7749,lon:-122.4194,terrain:"HILL CLIMBER"},{name:"Tokyo, Japan",lat:35.6762,lon:139.6503,terrain:"NEON TRAILS"},{name:"Sahara Desert",lat:23.4162,lon:25.6628,terrain:"ENDLESS DUNES"},{name:"Swiss Alps",lat:46.8182,lon:9.2275,terrain:"HIGH ALTITUDE"}];function uh(e){const n=e.trim().match(/^\s*(-?\d+(?:\.\d+)?)\s*[, ]\s*(-?\d+(?:\.\d+)?)\s*$/);if(!n)return null;const t=Number(n[1]),i=Number(n[2]);return Math.abs(t)<=90&&Math.abs(i)<=180?{name:`${t.toFixed(4)}, ${i.toFixed(4)}`,lat:t,lon:i}:null}let Xr=0;const Bi=new Map;async function fh(e){const n=uh(e);if(n)return[n];const t=e.toLowerCase().trim();if(!t)return[];if(Bi.has(t))return Bi.get(t);const i=Math.max(0,1100-(Date.now()-Xr));i&&await new Promise(m=>setTimeout(m,i)),Xr=Date.now();const r=new URL("https://nominatim.openstreetmap.org/search");r.search=new URLSearchParams({q:e,format:"jsonv2",limit:"5"}).toString();const a=await fetch(r,{headers:{Accept:"application/json"}});if(!a.ok)throw new Error(`Location search unavailable (${a.status})`);const o=(await a.json()).map(m=>({name:m.display_name.split(",").slice(0,3).join(",").trim(),lat:+m.lat,lon:+m.lon}));return Bi.set(t,o),o}function hh(e,n,t,i){const r=Math.max(0,Math.min(n-1,t*(n-1))),a=Math.max(0,Math.min(n-1,i*(n-1))),s=Math.floor(r),o=Math.floor(a),m=Math.min(n-1,s+1),u=Math.min(n-1,o+1),p=r-s,f=a-o,g=(v,T)=>e[T*n+v]??0;return(g(s,o)*(1-p)+g(m,o)*p)*(1-f)+(g(s,u)*(1-p)+g(m,u)*p)*f}function qr(e,n,t){const i=new Float32Array((t+1)**2);for(let r=0;r<=t;r++)for(let a=0;a<=t;a++)i[r*(t+1)+a]=hh(e,n,a/t,r/t);return i}function Yr(e,n,t,i){const r=Math.max(0,Math.min(n,t*n)),a=Math.max(0,Math.min(n,i*n)),s=Math.min(n-1,Math.floor(r)),o=Math.min(n-1,Math.floor(a)),m=r-s,u=a-o,p=n+1,f=e[o*p+s]??0,g=e[o*p+s+1]??0,v=e[(o+1)*p+s]??0,T=e[(o+1)*p+s+1]??0;return m>=u?f*(1-m)+g*(m-u)+T*u:f*(1-u)+T*m+v*(u-m)}function ph(e){const n=new Map,t=new Set;for(const i of e){const r=i.segments+1;for(let a=0;a<=i.segments;a++)for(const[s,o]of[[a,0],[a,i.segments],[0,a],[i.segments,a]]){const m=o*r+s,u=`${i.dx*i.segments+s},${i.dz*i.segments-o}`,p=n.get(u)??[];p.push({tile:i,index:m}),n.set(u,p)}}for(const i of n.values()){if(i.length<2)continue;const r=i.reduce((a,s)=>a+s.tile.grid[s.index],0)/i.length;for(const a of i)a.tile.grid[a.index]!==r&&(a.tile.grid[a.index]=r,t.add(a.tile))}return t}const Gi=12,yt=ci,mh=36,Yt=new Map;function Kr(e,n,t){const i=`${t}/${e}/${n}`;if(Yt.has(i)){const a=Yt.get(i);return Yt.delete(i),Yt.set(i,a),a}const r=(async()=>{try{const a=new Image;a.crossOrigin="anonymous",a.src=`https://s3.amazonaws.com/elevation-tiles-prod/terrarium/${t}/${e}/${n}.png`,await new Promise((p,f)=>{a.onload=()=>p(),a.onerror=()=>f(new Error("terrain tile unavailable"))});const s=document.createElement("canvas");s.width=yt,s.height=yt;const o=s.getContext("2d",{willReadFrequently:!0});if(!o)throw new Error("canvas unavailable");o.drawImage(a,0,0,yt,yt);const m=o.getImageData(0,0,yt,yt).data,u=new Float32Array(yt*yt);for(let p=0;p<u.length;p++)u[p]=m[p*4]*256+m[p*4+1]+m[p*4+2]/256-32768;return{heights:u}}catch{return{heights:new Float32Array(yt*yt)}}})();for(Yt.set(i,r);Yt.size>mh;)Yt.delete(Yt.keys().next().value);return r}class _h{group=new Vt;place=null;frame=null;heightSampleMs=0;heightSamples=0;tileBuildMs=0;tileBuilds=0;detailQuality=1;baseline=0;tiles=new Map;requests=new Set;coverage={x:NaN,z:NaN};generation=0;centerSegments;activeTerrainShader=null;biome={desert:1,alpine:0};material;constructor(n=127){this.centerSegments=n,this.material=new mt({color:16777215,roughness:.96,metalness:0,vertexColors:!0}),this.material.onBeforeCompile=t=>{t.uniforms.uRumbleDesert={value:this.biome.desert},t.uniforms.uRumbleAlpine={value:this.biome.alpine},t.uniforms.uRumbleDetail={value:this.detailQuality},this.activeTerrainShader=t,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.78, 0.81, 0.77), rumbleAlpineSnow * 0.82);`)},this.material.customProgramCacheKey=()=>"rumble-terrain-slope-biome-v1"}async load(n){this.clear();const t=++this.generation;this.place=n,this.frame=new dh(n,Gi);const i=n.name.toLowerCase();this.biome.desert=/moab|grand canyon|sahara|utah|arizona/i.test(i)?1:0,this.biome.alpine=/alps|everest|mountain|swiss/i.test(i)?1:0,this.activeTerrainShader&&(this.activeTerrainShader.uniforms.uRumbleDesert.value=this.biome.desert,this.activeTerrainShader.uniforms.uRumbleAlpine.value=this.biome.alpine);const r=this.frame.tileAddress(0,0),a=await Kr(r.x,r.y,Gi);if(t!==this.generation)return;const s=qr(a.heights,yt,this.centerSegments);this.baseline=Yr(s,this.centerSegments,this.frame.anchorU,this.frame.anchorV),this.install(0,0,a,this.centerSegments,s),this.ensureRegion(0,0)}key(n,t){return`${n},${t}`}address(n,t){return this.frame.tileAddress(n,t)}async ensureRegion(n,t){const i=this.frame;if(!i)return;const r=i.tileOffsetAt(n,t),a=r.dx,s=r.dz;if(this.coverage.x===a&&this.coverage.z===s)return;this.coverage={x:a,z:s};const o=this.generation,m=[],u=this.centerSegments;for(let p=s-1;p<=s+1;p++)for(let f=a-1;f<=a+1;f++){const g=this.key(f,p),v=f===a&&p===s?this.centerSegments:u,T=this.tiles.get(g);T&&T.segments!==v&&(this.group.remove(T.mesh),T.mesh.geometry.dispose(),this.tiles.delete(g));const M=`${o}:${g}`;if(this.tiles.has(g)||this.requests.has(M))continue;this.requests.add(M);const c=this.address(f,p);m.push(Kr(c.x,c.y,Gi).then(l=>{o===this.generation&&Math.abs(f-this.coverage.x)<=1&&Math.abs(p-this.coverage.z)<=1&&this.install(f,p,l,v)}).finally(()=>this.requests.delete(M)))}for(const[p,f]of this.tiles)(Math.abs(f.dx-a)>1||Math.abs(f.dz-s)>1)&&(this.group.remove(f.mesh),f.mesh.geometry.dispose(),this.tiles.delete(p));await Promise.all(m)}install(n,t,i,r=63,a){const s=this.key(n,t);if(this.tiles.has(s))return;const o=performance.now(),m=this.frame,u=a??qr(i.heights,yt,r),p=new mn,f=new Float32Array((r+1)**2*3),g=[],v=[];let T=1/0,M=-1/0;for(const x of u)T=Math.min(T,x),M=Math.max(M,x);const c=/moab|grand canyon|sahara|utah|arizona/i.test(this.place?.name??""),l=(c?["#d0b587","#b99360","#977046","#796044"]:["#c9c1a6","#a49c75","#758557","#657355"]).map(x=>new ze(x)),b=m.tileOrigin(n,t);for(let x=0;x<=r;x++)for(let D=0;D<=r;D++){const C=x*(r+1)+D,U=u[C],F=(U-T)/Math.max(1,M-T);f[C*3]=b.x+D/r*m.tileSpan,f[C*3+1]=Mt.clamp((U-this.baseline)*1.25,-900,1800),f[C*3+2]=b.z-x/r*m.tileSpan;const _=l[F>.76?0:F>.49?1:F>.22?2:3];g.push(_.r,_.g,_.b)}for(let x=0;x<r;x++)for(let D=0;D<r;D++){const C=x*(r+1)+D,U=C+1,F=C+r+1,_=F+1;v.push(C,U,_,C,_,F)}p.setIndex(v),p.setAttribute("position",new jt(f,3)),p.setAttribute("color",new aa(g,3)),p.computeVertexNormals();const R=new rt(p,this.material);R.receiveShadow=!0,R.userData.kind="terrain",this.group.add(R),this.tiles.set(s,{data:i,grid:u,mesh:R,segments:r,dx:n,dz:t}),this.reconcileSharedEdges(),this.tileBuildMs+=performance.now()-o,this.tileBuilds++}reconcileSharedEdges(){const n=ph(Array.from(this.tiles.values()));for(const t of n)this.rebuildGeometry(t)}rebuildGeometry(n){const{segments:t,grid:i,dx:r,dz:a}=n,s=this.frame,o=new mn,m=new Float32Array((t+1)**2*3),u=[],p=[];let f=1/0,g=-1/0;for(const c of i)f=Math.min(f,c),g=Math.max(g,c);const v=/moab|grand canyon|sahara|utah|arizona/i.test(this.place?.name??""),T=(v?["#d0b587","#b99360","#977046","#796044"]:["#c9c1a6","#a49c75","#758557","#657355"]).map(c=>new ze(c)),M=s.tileOrigin(r,a);for(let c=0;c<=t;c++)for(let l=0;l<=t;l++){const b=c*(t+1)+l,R=i[b],x=(R-f)/Math.max(1,g-f);m[b*3]=M.x+l/t*s.tileSpan,m[b*3+1]=Mt.clamp((R-this.baseline)*1.25,-900,1800),m[b*3+2]=M.z-c/t*s.tileSpan;const D=T[x>.76?0:x>.49?1:x>.22?2:3];u.push(D.r,D.g,D.b)}for(let c=0;c<t;c++)for(let l=0;l<t;l++){const b=c*(t+1)+l,R=b+1,x=b+t+1,D=x+1;p.push(b,R,D,b,D,x)}o.setIndex(p),o.setAttribute("position",new jt(m,3)),o.setAttribute("color",new aa(u,3)),o.computeVertexNormals(),n.mesh.geometry.dispose(),n.mesh.geometry=o}heightAt(n,t){if(!this.frame||!this.tiles.size)return 0;const i=performance.now();let r=this.frame.tileOffsetAt(n,t);(r.dx!==this.coverage.x||r.dz!==this.coverage.z)&&this.ensureRegion(n,t);let a=this.tiles.get(this.key(r.dx,r.dz));if(a||(a=this.tiles.get(this.key(0,0)),r=this.frame.tileOffsetAt(n,t)),!a)return 0;const s=a===this.tiles.get(this.key(r.dx,r.dz))?r.u:Mt.clamp((n-this.frame.tileOrigin(a.dx,a.dz).x)/this.frame.tileSpan,0,1),o=a===this.tiles.get(this.key(r.dx,r.dz))?r.v:Mt.clamp((this.frame.tileOrigin(a.dx,a.dz).z-t)/this.frame.tileSpan,0,1),m=(Yr(a.grid,a.segments,s,o)-this.baseline)*1.25;return this.heightSamples++,this.heightSampleMs+=performance.now()-i,m}takePerformanceSample(){const n={heightSamples:this.heightSamples,heightSampleMs:this.heightSampleMs,tileBuilds:this.tileBuilds,tileBuildMs:this.tileBuildMs};return this.heightSamples=0,this.heightSampleMs=0,this.tileBuilds=0,this.tileBuildMs=0,n}setVisualQuality(n){this.detailQuality=n==="low"?.45:n==="medium"?.72:1,this.activeTerrainShader&&(this.activeTerrainShader.uniforms.uRumbleDetail.value=this.detailQuality)}clear(){this.generation++;for(const n of this.tiles.values())this.group.remove(n.mesh),n.mesh.geometry.dispose();this.tiles.clear(),this.requests.clear(),this.coverage={x:NaN,z:NaN}}dispose(){this.clear(),this.material.dispose()}}function Uo(e,n){return e.map(([t,i])=>n.toLocal({lat:t,lon:i}))}const gh=360*60*1e3,Hi=new Map;let $r=0;const vh=()=>({buildings:[],roads:[]});function Io(e){if(!e)return 0;const n=e.trim().match(/^([\d.]+)\s*(m|meter|meters|ft|feet)?$/i);if(!n)return 0;const t=Number(n[1]);return Number.isFinite(t)?t*(/^(ft|feet)$/i.test(n[2]??"")?.3048:1):0}function No(e){const n=(e.building??"").toLowerCase();return/industrial|warehouse|factory|manufacture/.test(n)?"industrial":/commercial|retail|office|hotel|apartments|civic|university|public/.test(n)?"commercial":/house|residential|detached|terrace|semidetached_house|bungalow/.test(n)?"residential":"other"}function Sh(e){const n=Io(e.height);if(n>0)return Mt.clamp(n,3,180);const t=Number.parseFloat(e["building:levels"]??"");if(Number.isFinite(t)&&t>0)return Mt.clamp(t,1,50)*3.2;switch(No(e)){case"commercial":return 14;case"industrial":return 8;case"residential":return 7.5;default:return 9}}function Oo(e){const n=(e.highway??"").toLowerCase();return!n||e.tunnel&&e.tunnel!=="no"||e.bridge&&e.bridge!=="no"?null:/^(motorway|motorway_link|trunk|trunk_link|primary|primary_link|secondary|secondary_link)$/.test(n)?"major":/^(residential|tertiary|tertiary_link|unclassified|living_street|service|road)$/.test(n)?"street":/^(track|path|footway|bridleway|cycleway|pedestrian|steps)$/.test(n)?"track":null}function Eh(e,n=Oo(e)){const t=Io(e.width);if(t>0)return Mt.clamp(t,.8,18);const i=(e.surface??"").toLowerCase();return n==="major"?9:n==="street"?5.5:n==="track"?/gravel|dirt|ground|earth|sand|mud/.test(i)?3.4:2.6:0}function Mh(e){return`${e.lat.toFixed(3)},${e.lon.toFixed(3)}`}async function xh(e){const n=Mh(e),t=Hi.get(n);if(t)return t;try{const r=localStorage.getItem(`rumble-roam-features-v2:${n}`);if(r){const a=JSON.parse(r);if(Date.now()-a.time<gh&&a.data?.buildings&&a.data?.roads)return Hi.set(n,Promise.resolve(a.data)),a.data}}catch{}const i=(async()=>{try{const r=Math.max(0,5e3-(Date.now()-$r));r&&await new Promise(T=>setTimeout(T,r)),$r=Date.now();const a=.012,s=.012/Math.max(.3,Math.cos(e.lat*Math.PI/180)),o=[e.lat-a,e.lon-s,e.lat+a,e.lon+s].join(","),m=`[out:json][timeout:12][maxsize:33554432];(way["building"](${o});way["highway"](${o}););out tags geom(${o});`;let u=null;for(const T of["https://overpass.private.coffee/api/interpreter","https://overpass-api.de/api/interpreter"])try{const M=await fetch(T,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"},body:`data=${encodeURIComponent(m)}`,signal:AbortSignal.timeout(1e4)});if(M.ok){u=M;break}}catch{}if(!u)throw new Error("Overpass endpoints unavailable");const p=await u.json(),f=[],g=[];for(const T of p.elements??[]){if(T.type!=="way"||!T.geometry||T.geometry.length<2)continue;const M=T.tags??{},l=Math.max(1,Math.ceil(T.geometry.length/64)),b=T.geometry.filter((R,x)=>x%l===0||x===T.geometry.length-1).map(R=>[R.lat,R.lon]);M.building&&b.length>=4&&f.length<450?f.push({id:String(T.id),tags:M,coords:b}):M.highway&&g.length<450&&g.push({id:String(T.id),tags:M,coords:b})}const v={buildings:f,roads:g};try{localStorage.setItem(`rumble-roam-features-v2:${n}`,JSON.stringify({time:Date.now(),data:v}))}catch{}return v}catch{return vh()}})();return Hi.set(n,i),i}const Zr={major:new mt({color:3423038,roughness:.98,metalness:0}),street:new mt({color:4671818,roughness:1,metalness:0}),track:new mt({color:9137486,roughness:1,metalness:0})},Th={residential:11705472,commercial:9410456,industrial:7830390,other:10524549};function Qr(e,n,t){const i=Oo(e.tags);if(!i||e.coords.length<2)return null;const r=Uo(e.coords,n).filter(f=>Number.isFinite(f.x)&&Number.isFinite(f.z));if(r.length<2)return null;const a=Eh(e.tags,i),s=[],o=[];for(let f=0;f<r.length;f++){const g=r[Math.max(0,f-1)],v=r[Math.min(r.length-1,f+1)],T=v.x-g.x,M=v.z-g.z,c=Math.hypot(T,M)||1;let l=-M/c,b=T/c;if(f>0&&f<r.length-1){const R=r[f-1],x=r[f],D=r[f+1],C=Math.hypot(x.x-R.x,x.z-R.z)||1,U=Math.hypot(D.x-x.x,D.z-x.z)||1,F=-(x.z-R.z)/C-(D.z-x.z)/U,_=(x.x-R.x)/C+(D.x-x.x)/U,S=Math.hypot(F,_)||1;l=F/S,b=_/S;const L=Math.max(.45,Math.abs(l*(-M/c)+b*(T/c))),B=Math.min(a*.9,a*.5/L);s.push(new st(x.x+l*B,x.z+b*B)),o.push(new st(x.x-l*B,x.z-b*B))}else s.push(new st(r[f].x+l*a/2,r[f].z+b*a/2)),o.push(new st(r[f].x-l*a/2,r[f].z-b*a/2))}const m=[],u=(f,g)=>m.push(f.x,t(f.x,f.y)+g,f.y);for(let f=0;f<r.length-1;f++)u(s[f],.1),u(s[f+1],.1),u(o[f],.1),u(o[f],.1),u(s[f+1],.1),u(o[f+1],.1);const p=new mn;return p.setAttribute("position",new aa(m,3)),{kind:i,geometry:p,width:a}}class Ah{group=new Vt;roadsGroup=new Vt;list=[];status={source:"fallback",buildings:0,roads:0,fallbacks:0,skippedRoads:0,message:"Loading OSM…"};loadToken=0;async load(n,t,i,r){this.reset(i);const a=this.loadToken,s=await xh(n);if(a!==this.loadToken)return this.status;for(const p of s.buildings){const f=Uo(p.coords,r).map(_=>new st(_.x,_.z)),g=f.map(_=>_.x),v=f.map(_=>_.y),T=(Math.min(...g)+Math.max(...g))/2,M=(Math.min(...v)+Math.max(...v))/2,c=Math.max(2,Math.max(...g)-Math.min(...g)),l=Math.max(2,Math.max(...v)-Math.min(...v)),b=new ra;f.forEach((_,S)=>S?b.lineTo(_.x-T,-(_.y-M)):b.moveTo(_.x-T,-(_.y-M))),b.closePath();const R=No(p.tags),x=Sh(p.tags),D=new Ao(b,{depth:1,bevelEnabled:!1});D.rotateX(-Math.PI/2),D.scale(1,x,1);const C=new mt({color:Th[R],roughness:R==="commercial"?.72:.9,metalness:R==="commercial"?.08:0});if(p.tags["building:colour"])try{C.color.set(p.tags["building:colour"])}catch{}const U=new rt(D,C);U.castShadow=!0,U.receiveShadow=!0,U.userData={kind:"osm-building",osmId:p.id,tags:p.tags,category:R},U.position.set(T,t(T,M),M),this.group.add(U);const F={id:p.id,source:"osm",category:R,mesh:U,x:T,z:M,w:c,d:l,h:x,footprint:f,tags:p.tags,broken:!1};this.list.push(F),i?.addBuilding(F,t(T,M))}let o=0,m=0;const u={major:[],street:[],track:[]};for(const p of s.roads){const f=Qr(p,r,t);if(!f){m++;continue}u[f.kind].push(f.geometry.getAttribute("position").array),f.geometry.dispose(),o++}for(const p of["major","street","track"]){const f=u[p];if(!f.length)continue;const g=f.reduce((l,b)=>l+b.length,0),v=new Float32Array(g);let T=0;for(const l of f)v.set(l,T),T+=l.length;const M=new mn;M.setAttribute("position",new jt(v,3)),M.computeVertexNormals();const c=new rt(M,Zr[p]);c.name=`osm-road-${p}`,c.userData={kind:"osm-road",roadWays:f.length},c.frustumCulled=!0,this.roadsGroup.add(c)}return this.list.length||this.addBarriers(t,i),this.status={source:s.buildings.length||o?"osm":"fallback",buildings:s.buildings.length,roads:o,fallbacks:this.list.filter(p=>p.source==="fallback").length,skippedRoads:m,message:s.buildings.length||o?`OSM · ${s.buildings.length} BUILDINGS · ${o} ROADS`:"OSM UNAVAILABLE · PRACTICE COURSE"},this.status}addFixtureRoad(n,t){const i=[-12,140].map(s=>{const o=n.toGeo({x:0,z:s});return[o.lat,o.lon]}),r=Qr({tags:{highway:"track",surface:"dirt",width:"4"},coords:i},n,t);if(!r)return null;r.geometry.computeVertexNormals();const a=new rt(r.geometry,Zr.track);return a.name="fixture-dirt-track",a.userData={kind:"fixture-road",source:"fixture"},this.roadsGroup.add(a),a}addBarriers(n,t){const i=new mt({color:13132085,roughness:.8});for(let r=0;r<4;r++)for(let a=-2;a<=2;a++){if((r+a)%3===0)continue;const s=3+(r*7+a*11+30)%3,o=3,m=2.5+(r*13+a*5+40)%3,u=a*5,p=28+r*9,f=new rt(new Jt(s,m,o),i.clone());f.position.set(u,n(u,p)+m/2,p),f.castShadow=!0,f.receiveShadow=!0,f.userData.kind="destructible-barrier",this.group.add(f);const g={id:`practice-${r}-${a}`,source:"fallback",category:"practice",mesh:f,x:u,z:p,w:s,d:o,h:m,broken:!1};this.list.push(g),t?.addBuilding(g,n(u,p))}}addFixtureBuilding(n,t,i,r,a,s={w:7,d:6,h:9}){const{w:o,d:m,h:u}=s,p=new Jt(o,u,m),f=new mt({color:11705472,roughness:.9}),g=new rt(p,f);g.position.set(t,r(t,i)+u/2,i),g.castShadow=!0,g.receiveShadow=!0,g.userData={kind:"local-test-fixture",fixtureId:n},this.group.add(g);const v={id:n,source:"fixture",category:u>18?"commercial":"residential",mesh:g,x:t,z:i,w:o,d:m,h:u,broken:!1};return this.list.push(v),a?.addBuilding(v,r(t,i)),v}break(n){return n.mesh.parent!==this.group?!1:(n.broken=!0,this.group.remove(n.mesh),n.mesh.geometry.dispose(),Array.isArray(n.mesh.material)?n.mesh.material.forEach(t=>t.dispose()):n.mesh.material.dispose(),!0)}reset(n){this.loadToken++;for(const t of this.list)this.group.remove(t.mesh),t.mesh.geometry.dispose(),Array.isArray(t.mesh.material)?t.mesh.material.forEach(i=>i.dispose()):t.mesh.material.dispose(),n?.removeBuilding(t);for(const t of this.roadsGroup.children)this.roadsGroup.remove(t),t.geometry.dispose();this.list=[],this.status={source:"fallback",buildings:0,roads:0,fallbacks:0,skippedRoads:0,message:"Loading OSM…"}}}const Pn=new ne;function Ct(e,n,t,i,r,a){const s=2*Math.PI*r/4,o=Math.max(a-2*r,0),m=Math.PI/4;Pn.copy(n),Pn[i]=0,Pn.normalize();const u=.5*s/(s+o),p=1-Pn.angleTo(e)/m;return Math.sign(Pn[t])===1?p*u:o/(s+o)+u+u*(1-p)}class ga extends Jt{constructor(n=1,t=1,i=1,r=2,a=.1){const s=r*2+1;if(a=Math.min(n/2,t/2,i/2,a),super(1,1,1,s,s,s),this.type="RoundedBoxGeometry",this.parameters={width:n,height:t,depth:i,segments:r,radius:a},s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const m=new ne,u=new ne,p=new ne(n,t,i).divideScalar(2).subScalar(a),f=this.attributes.position.array,g=this.attributes.normal.array,v=this.attributes.uv.array,T=f.length/6,M=new ne,c=.5/s;for(let l=0,b=0;l<f.length;l+=3,b+=2)switch(m.fromArray(f,l),u.copy(m),u.x-=Math.sign(u.x)*c,u.y-=Math.sign(u.y)*c,u.z-=Math.sign(u.z)*c,u.normalize(),f[l+0]=p.x*Math.sign(m.x)+u.x*a,f[l+1]=p.y*Math.sign(m.y)+u.y*a,f[l+2]=p.z*Math.sign(m.z)+u.z*a,g[l+0]=u.x,g[l+1]=u.y,g[l+2]=u.z,Math.floor(l/T)){case 0:M.set(1,0,0),v[b+0]=Ct(M,u,"z","y",a,i),v[b+1]=1-Ct(M,u,"y","z",a,t);break;case 1:M.set(-1,0,0),v[b+0]=1-Ct(M,u,"z","y",a,i),v[b+1]=1-Ct(M,u,"y","z",a,t);break;case 2:M.set(0,1,0),v[b+0]=1-Ct(M,u,"x","z",a,n),v[b+1]=Ct(M,u,"z","x",a,i);break;case 3:M.set(0,-1,0),v[b+0]=1-Ct(M,u,"x","z",a,n),v[b+1]=1-Ct(M,u,"z","x",a,i);break;case 4:M.set(0,0,1),v[b+0]=1-Ct(M,u,"x","y",a,n),v[b+1]=1-Ct(M,u,"y","x",a,t);break;case 5:M.set(0,0,-1),v[b+0]=Ct(M,u,"x","y",a,n),v[b+1]=1-Ct(M,u,"y","x",a,t);break}}static fromJSON(n){return new ga(n.width,n.height,n.depth,n.segments,n.radius)}}function Ln(e,n=!1){const t=e[0].index!==null,i=new Set(Object.keys(e[0].attributes)),r=new Set(Object.keys(e[0].morphAttributes)),a={},s={},o=e[0].morphTargetsRelative,m=new mn;let u=0;for(let p=0;p<e.length;++p){const f=e[p];let g=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const v in f.attributes){if(!i.has(v))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+'. All geometries must have compatible attributes; make sure "'+v+'" attribute exists among all geometries, or in none of them.'),null;a[v]===void 0&&(a[v]=[]),a[v].push(f.attributes[v]),g++}if(g!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const v in f.morphAttributes){if(!r.has(v))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+".  .morphAttributes must be consistent throughout all geometries."),null;s[v]===void 0&&(s[v]=[]),s[v].push(f.morphAttributes[v])}if(n){let v;if(t)v=f.index.count;else if(f.attributes.position!==void 0)v=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". The geometry must have either an index or a position attribute"),null;m.addGroup(u,v,p),u+=v}}if(t){let p=0;const f=[];for(let g=0;g<e.length;++g){const v=e[g].index;for(let T=0;T<v.count;++T)f.push(v.getX(T)+p);p+=e[g].attributes.position.count}m.setIndex(f)}for(const p in a){const f=jr(a[p]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+p+" attribute."),null;m.setAttribute(p,f)}for(const p in s){const f=s[p][0].length;if(f===0)break;m.morphAttributes=m.morphAttributes||{},m.morphAttributes[p]=[];for(let g=0;g<f;++g){const v=[];for(let M=0;M<s[p].length;++M)v.push(s[p][M][g]);const T=jr(v);if(!T)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+p+" morphAttribute."),null;m.morphAttributes[p].push(T)}}return m}function jr(e){let n,t,i,r=-1,a=0;for(let u=0;u<e.length;++u){const p=e[u];if(n===void 0&&(n=p.array.constructor),n!==p.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=p.itemSize),t!==p.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=p.normalized),i!==p.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=p.gpuType),r!==p.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=p.count*t}const s=new n(a),o=new jt(s,t,i);let m=0;for(let u=0;u<e.length;++u){const p=e[u];if(p.isInterleavedBufferAttribute){const f=m/t;for(let g=0,v=p.count;g<v;g++)for(let T=0;T<t;T++){const M=p.getComponent(g,T);o.setComponent(g+f,T,M)}}else s.set(p.array,m);m+=p.count*t}return r!==void 0&&(o.gpuType=r),o}const Jr=["front-left","front-right","rear-left","rear-right"],eo=[{x:-1.22,z:1.22},{x:1.22,z:1.22},{x:-1.22,z:-1.25},{x:1.22,z:-1.25}];class bh{root=new Vt;wheels=[];frontWheels=[];suspension=[];body;opts;model=new Vt;materials;parts={paint:[],dark:[],chrome:[],glass:[],tire:[],light:[]};wheelSprings;wheelShocks;shockRods;axleLinks;workMatrix=new Nt;workQuaternion=new Ht;workPosition=new ne;workScale=new ne;constructor(n={color:"#d84924",scale:1}){this.opts=n,this.root.scale.setScalar(n.scale),this.model.position.y=-1.65,this.root.add(this.model),this.body=new Vt,this.model.add(this.body),this.makeMaterials(),this.buildChassisAndBody(),this.buildWheels(),this.finishBodyBatches()}makeMaterials(){this.materials={paint:new mr({color:this.opts.color,metalness:.43,roughness:.29,clearcoat:.62,clearcoatRoughness:.2}),dark:new mt({color:1382939,metalness:.28,roughness:.68}),chrome:new mt({color:12041920,metalness:.78,roughness:.24}),glass:new mr({color:8636379,metalness:.12,roughness:.15,transparent:!0,opacity:.72,clearcoat:.9,side:It,depthWrite:!1}),tire:new mt({color:1053204,roughness:.94}),light:new mt({color:16770464,emissive:16754230,emissiveIntensity:1.15,roughness:.2})}}boxGeometry(n,t,i,r,a,s,o=.025,m){const u=new ga(n,t,i,2,Math.min(o,n*.24,t*.24,i*.24)),p=m?new Ht().setFromEuler(m):new Ht;return u.applyMatrix4(new Nt().compose(new ne(r,a,s),p,new ne(1,1,1))),u}addBox(n,t,i,r,a,s,o,m=.025,u){this.parts[n].push(this.boxGeometry(t,i,r,a,s,o,m,u))}addSideShape(n,t,i,r=.045){const a=new Ao(n,{depth:r,bevelEnabled:!1,curveSegments:8});a.rotateY(t<0?-Math.PI/2:Math.PI/2),a.translate(t*1.11,0,0),this.parts[i].push(a)}profileShape(){const n=new ra;return n.moveTo(-2.02,1.28),n.lineTo(-2.02,1.78),n.lineTo(-1.53,1.86),n.lineTo(-1.34,2.77),n.lineTo(-.91,3.04),n.lineTo(.29,3.04),n.lineTo(.65,2.14),n.lineTo(1.2,1.98),n.lineTo(2.03,1.77),n.lineTo(2.03,1.2),n.quadraticCurveTo(1.22,2.16,.38,1.2),n.lineTo(-.4,1.2),n.quadraticCurveTo(-1.25,2.16,-2.08,1.2),n.lineTo(-2.02,1.28),n.closePath(),n}sideWindow(n,t,i,r){const a=new ra;return a.moveTo(n,t),a.lineTo(n+.12,r),a.lineTo(i-.1,r),a.lineTo(i,t),a.closePath(),a}buildChassisAndBody(){this.addBox("dark",1.75,.22,3.55,0,1.3,-.02,.055);for(const o of[-.9,.9])this.addBox("dark",.17,.2,3.7,o,1.23,-.02,.045);for(const o of[-1.38,-.2,1.16])this.addBox("chrome",2,.11,.13,0,1.21,o,.025);this.addBox("dark",1.2,.08,.95,0,1.14,.1,.025),this.addBox("paint",2.12,.46,1.27,0,1.76,1.15,.09),this.addBox("paint",1.93,.16,1.48,0,3,-.34,.065),this.addBox("paint",1.78,.96,1.24,0,2.43,-.36,.08);const n=this.profileShape();for(const o of[-1,1])this.addSideShape(n,o,"paint",.055),this.addSideShape(this.sideWindow(-1.19,2.32,-.53,2.8),o,"glass",.018),this.addSideShape(this.sideWindow(-.43,2.32,.16,2.8),o,"glass",.018),this.addBox("chrome",.035,.045,.76,o*1.17,2.2,-.17,.012),this.addBox("chrome",.04,.035,.19,o*1.18,2.05,-.24,.01),this.addBox("dark",.075,.22,1.05,o*1.12,1.31,-.05,.026);this.addBox("glass",1.56,.68,.045,0,2.56,.48,.012,new xn(-.48,0,0)),this.addBox("glass",1.48,.52,.04,0,2.55,-1.02,.012,new xn(.18,0,0)),this.addBox("chrome",1.75,.055,.12,0,3.08,-.34,.02),this.addBox("dark",1.4,.08,.95,0,1.64,-1.42,.02);for(const o of[-.76,.76])this.addBox("paint",.12,.34,1.02,o,1.79,-1.4,.035);this.addBox("paint",1.48,.38,.13,0,1.77,-1.93,.035);for(let o=0;o<5;o++)this.addBox("chrome",1.25,.018,.024,0,1.69,-1.78+o*.18,.004);this.addBox("chrome",2.22,.2,.22,0,1.47,1.96,.045),this.addBox("dark",1.16,.38,.055,0,1.83,1.94,.012),this.addBox("chrome",1.28,.045,.07,0,2.05,1.95,.012),this.addBox("chrome",1.28,.045,.07,0,1.61,1.95,.012);for(let o=0;o<9;o++)this.addBox("dark",.025,.34,.035,-.5+o*.125,1.83,1.98,.008);this.addBox("dark",.22,.11,.07,0,1.72,2.01,.012),this.addBox("chrome",2.12,.14,.2,0,1.52,-2,.035),this.addBox("chrome",1.95,.055,.14,0,1.68,-2,.015);for(const o of[-.82,.82])this.addBox("dark",.48,.29,.09,o,1.94,1.93,.035),this.addBox("light",.34,.19,.045,o,1.95,1.99,.035),this.addBox("light",.14,.08,.035,o,1.72,2,.018),this.addBox("dark",.18,.08,.04,o,1.52,-2.11,.018);for(const o of[-.69,.69])this.addBox("paint",.08,.055,.83,o,2.02,1.13,.025),this.addBox("chrome",.035,.025,.63,o*1.7,1.9,-.36,.01);for(const o of[-1.1,.46])this.addBox("dark",.05,.86,.06,0,2.51,o,.018);for(let o=-2;o<=2;o++)this.addBox("light",.14,.13,.08,o*.36,3.14,-.25,.06);const t=[];for(const o of[-1.17,1.17])for(const m of[-1.25,1.22]){const u=new pl(new ne(o,1.26,m-.91),new ne(o,2.14,m),new ne(o,1.26,m+.91));t.push(new Li(u,20,.06,7,!1))}const i=Ln(t,!1);t.forEach(o=>o.dispose()),this.body.add(new rt(i,this.materials.dark));const a=[-1,1].map(o=>new _r([new ne(o*.86,1.65,-1.82),new ne(o*.86,2.85,-1.55),new ne(o*.86,3.2,-.9),new ne(o*.86,3.2,.05),new ne(o*.82,2.2,.98)])).map(o=>new Li(o,24,.035,7,!1)),s=Ln(a,!1);a.forEach(o=>o.dispose()),this.body.add(new rt(s,this.materials.chrome));for(const o of[-1.25,1.22])this.addBox("dark",1.82,.12,.16,0,1.43,o,.025),this.addBox("chrome",1.22,.055,.07,0,1.56,o,.018)}finishBodyBatches(){for(const n of Object.keys(this.parts)){const t=this.parts[n];if(!t.length)continue;const i=Ln(t,!1);if(t.forEach(a=>a.dispose()),!i)continue;const r=new rt(i,this.materials[n]);r.castShadow=!0,r.receiveShadow=!0,r.frustumCulled=!0,this.body.add(r)}this.parts={paint:[],dark:[],chrome:[],glass:[],tire:[],light:[]}}cylinderGeometry(n,t,i=24){const r=new gr(n,n,t,i,1,!1);return r.rotateZ(Math.PI/2),r}buildWheels(){const n=new mt({color:2698543,roughness:.9}),t=[],i=[],r=new gr(.82,.82,.61,36,1,!1);r.rotateZ(Math.PI/2),t.push(r);for(const T of[-.29,.29]){const M=new vr(.63,.12,8,36);M.rotateY(Math.PI/2),M.translate(T,0,0),t.push(M);const c=this.cylinderGeometry(.455,.045,28);c.translate(T*1.04,0,0),i.push(c);const l=new vr(.405,.025,8,32);l.rotateY(Math.PI/2),l.translate(T*1.04,0,0),i.push(l);const b=this.cylinderGeometry(.16,.075,18);b.translate(T*1.1,0,0),i.push(b);for(let R=0;R<6;R++){const x=R*Math.PI/3,D=new Jt(.065,.07,.29);D.applyMatrix4(new Nt().compose(new ne(T*1.08,Math.cos(x)*.25,Math.sin(x)*.25),new Ht().setFromEuler(new xn(x,0,0)),new ne(1,1,1))),i.push(D)}}const a=Ln(t,!1);t.forEach(T=>T.dispose());const s=Ln(i,!1);i.forEach(T=>T.dispose());const o=this.cylinderGeometry(.13,3.1,12),m=new mt({color:3422779,metalness:.55,roughness:.48}),u=new Kt(o,m,2);u.castShadow=!0;const p=new Ht().setFromAxisAngle(new ne(0,0,1),Math.PI/2);[-1.25,1.22].forEach((T,M)=>{this.workMatrix.compose(new ne(0,.91,T),p,new ne(1,1,1)),u.setMatrixAt(M,this.workMatrix)}),u.instanceMatrix.needsUpdate=!0,this.model.add(u);const f=[];for(let T=0;T<=96;T++){const M=T/96,c=M*Math.PI*2*8;f.push(new ne(Math.cos(c)*.11,M-.5,Math.sin(c)*.11))}const g=new Li(new _r(f),128,.025,5,!1),v=new mt({color:13817555,metalness:.78,roughness:.32});this.wheelSprings=new Kt(g,v,4),this.wheelSprings.castShadow=!0,this.wheelShocks=new Kt(this.cylinderGeometry(.072,.68,10),m,4),this.wheelShocks.castShadow=!0,this.shockRods=new Kt(this.cylinderGeometry(.025,.62,8),this.materials.chrome,4),this.shockRods.castShadow=!0,this.model.add(this.wheelSprings,this.wheelShocks,this.shockRods);for(let T=0;T<4;T++){const M=eo[T],c=Jr[T],l=new Vt;l.position.set(M.x,.92,M.z),l.userData.wheelId=c,this.model.add(l),this.wheels.push(l),T<2&&this.frontWheels.push(l);const b=new rt(a,this.materials.tire);b.castShadow=!0,b.receiveShadow=!0,l.add(b);const R=new rt(s,this.materials.chrome);R.castShadow=!0,l.add(R);const x=new Jt(.32,.15,.27),D=new Kt(x,n,32);D.castShadow=!0,D.receiveShadow=!0;let C=0;for(let U=0;U<2;U++)for(let F=0;F<16;F++){const _=F*Math.PI/8+U*Math.PI/16,S=new Ht().setFromAxisAngle(new ne(1,0,0),_+Math.PI/2);this.workMatrix.compose(new ne(U?.16:-.16,Math.sin(_)*.81,Math.cos(_)*.81),S,new ne(1,1,1)),D.setMatrixAt(C++,this.workMatrix)}D.instanceMatrix.needsUpdate=!0,l.add(D)}this.axleLinks=new Kt(this.cylinderGeometry(.055,1,10),m,4),this.axleLinks.castShadow=!0,this.model.add(this.axleLinks),this.updateWheelContacts(Jr.map((T,M)=>({id:T,x:0,z:0,height:0,contact:!0,compression:.12,extension:0,travel:.55,compressionVelocity:0,compressionDamping:0,reboundDamping:0})),1)}updateWheelContacts(n,t){for(let i=0;i<this.wheels.length;i++){const r=this.wheels[i],a=n.find(f=>f.id===r.userData.wheelId);if(!a)continue;r.position.y=.92+a.compression/t+a.extension/t;const s=eo[i],o=a.compression/t,m=a.extension/t;this.workPosition.set(s.x*.78,1.05+m*.35-o*.2,s.z),this.workQuaternion.identity(),this.workScale.set(1,Math.max(.5,.72+m-o*.35),1),this.workMatrix.compose(this.workPosition,this.workQuaternion,this.workScale),this.wheelSprings.setMatrixAt(i,this.workMatrix),this.workPosition.y=.99+m*.32-o*.12,this.workScale.set(1,.68+m*.45-o*.2,1),this.workMatrix.compose(this.workPosition,this.workQuaternion,this.workScale),this.wheelShocks.setMatrixAt(i,this.workMatrix),this.workPosition.y=1.13+m*.3-o*.1,this.workScale.set(1,.61+m*.25-o*.1,1),this.workMatrix.compose(this.workPosition,this.workQuaternion,this.workScale),this.shockRods.setMatrixAt(i,this.workMatrix);const u=new Ht().setFromAxisAngle(new ne(0,0,1),Math.PI/2),p=Math.abs(s.x)*.9;this.workPosition.set(s.x*.54,.89+o*.35,s.z),this.workScale.set(1,p,1),this.workMatrix.compose(this.workPosition,u,this.workScale),this.axleLinks.setMatrixAt(i,this.workMatrix)}this.wheelSprings.instanceMatrix.needsUpdate=!0,this.wheelShocks.instanceMatrix.needsUpdate=!0,this.shockRods.instanceMatrix.needsUpdate=!0,this.axleLinks.instanceMatrix.needsUpdate=!0}setColor(n){this.opts.color=n,this.materials.paint.color.set(n)}}function qn(e,n=new ne){return n.set(Math.sin(e),0,Math.cos(e))}function va(e,n=new ne){return n.set(Math.cos(e),0,-Math.sin(e))}const la=(e,n,t)=>Math.max(n,Math.min(t,e)),Rh=[{id:"front-left",x:-1.22,z:1.22},{id:"front-right",x:1.22,z:1.22},{id:"rear-left",x:-1.22,z:-1.25},{id:"rear-right",x:1.22,z:-1.25}];function ki(e,n,t,i,r=24){const a=Math.cos(n),s=Math.sin(n),o=.55*t,m=.36*t;return Rh.map(u=>{const p=e.x+u.x*a+u.z*s,f=e.z-u.x*s+u.z*a,g=i(p,f),v=g+1.65*t+.12*t,T=v-e.y,M=2*Math.sqrt(r/(.12*t));return{id:u.id,x:p,z:f,height:g,travel:o,compression:la(T,0,o),extension:la(-T,0,m),contact:T>=-m&&T<=o,compressionVelocity:0,compressionDamping:M*.82,reboundDamping:M*.62}})}function wh(e,n,t,i){const r=t/(.12*i);let a=0;for(const s of e){if(s.compression<=0)continue;const o=Math.max(0,s.compression-s.travel+.08*i),m=r*(s.compression+o*2.5),u=la(s.compressionVelocity,-12,12),p=u>=0?s.compressionDamping:s.reboundDamping,f=(n>=0?s.reboundDamping:s.compressionDamping)*n*.24;a+=Math.max(0,m+p*u-f)}return a/e.length-t}function Ch(e){const n=(e[0].height+e[1].height)/2,t=(e[2].height+e[3].height)/2,i=(e[0].height+e[2].height)/2,r=(e[1].height+e[3].height)/2;return{pitch:-Math.atan2(n-t,2.47),roll:Math.atan2(r-i,2.44)}}const Vi=Math.PI*2,ii=e=>e*Math.PI/180;function Yn(e,n){return Math.atan2(Math.sin(n-e),Math.cos(n-e))}function ai(e){return Math.abs(Yn(e,0))}function to(e,n,t=5.2){const i=1-Math.exp(-t*Math.max(0,n));return e+Yn(e,0)*i}class yh{airborne=!1;lastPitch=0;lastRoll=0;pitchProgress=0;rollProgress=0;pendingForwardFlips=0;pendingBackwardFlips=0;pendingRolls=0;flightTime=0;flightBonus=0;currentPoints=0;bestScore;constructor(n=0){this.bestScore=Math.max(0,Math.floor(n)||0)}update(n){if(!n.grounded){this.airborne?(this.flightTime=Math.max(this.flightTime,n.airtime),this.recordFlipRotation(this.advanceRotation("pitch",n.pitch)),this.pendingRolls+=Math.abs(this.advanceRotation("roll",n.roll))):this.beginFlight(n);const T=this.pendingForwardFlips+this.pendingBackwardFlips,M=T+this.pendingRolls;return this.currentPoints=Math.round(this.flightTime*80)+this.pendingRolls*500+T*600+Math.max(0,M-1)*150+this.flightBonus,null}if(!this.airborne)return null;this.flightTime=Math.max(this.flightTime,n.airtime),this.recordFlipRotation(this.advanceRotation("pitch",n.pitch)),this.pendingRolls+=Math.abs(this.advanceRotation("roll",n.roll));const t=ai(n.pitch)<ii(65)&&ai(n.roll)<ii(65),i=n.landingSpeed<=22&&t&&this.flightTime>=.45,r=this.pendingForwardFlips,a=this.pendingBackwardFlips,s=r+a,o=this.pendingRolls,m=this.flightTime;if(this.airborne=!1,!i)return this.clearFlight(),null;const u=s+o,p=n.landingSpeed<=5&&ai(n.pitch)<ii(18)&&ai(n.roll)<ii(18),f=p?300:100,g=Math.round(m*80)+o*500+s*600+Math.max(0,u-1)*150+f+this.flightBonus;this.currentPoints=g,this.bestScore=Math.max(this.bestScore,g);const v=o>=2?"DOUBLE ROLL":o===1?"BARREL ROLL":s>=2?"DOUBLE FLIP":r?"FRONT FLIP":a?"BACKFLIP":m>=1.25?p?"BIG AIR · PERFECT LANDING":"BIG AIR":p?"PERFECT LANDING":"NICE LANDING";return this.clearFlight(!1),{points:g,rolls:o,flips:s,forwardFlips:r,backwardFlips:a,airtime:m,perfect:p,message:v}}reset(){this.airborne=!1,this.clearFlight()}get isAirborne(){return this.airborne}get rolls(){return this.pendingRolls}get flips(){return this.pendingForwardFlips+this.pendingBackwardFlips}get airtime(){return this.flightTime}awardBonus(n){const t=Math.max(0,Math.floor(n));return t?(this.airborne&&(this.flightBonus+=t),this.currentPoints+=t,this.bestScore+=t,this.currentPoints):this.currentPoints}beginFlight(n){this.clearFlight(),this.airborne=!0,this.lastPitch=n.pitch,this.lastRoll=n.roll,this.flightTime=n.airtime}advanceRotation(n,t){const i=n==="pitch"?this.lastPitch:this.lastRoll,a=(n==="pitch"?this.pitchProgress:this.rollProgress)+Yn(i,t);n==="pitch"?(this.lastPitch=t,this.pitchProgress=a):(this.lastRoll=t,this.rollProgress=a);const s=Math.trunc(a/Vi);return s&&(n==="pitch"?this.pitchProgress-=s*Vi:this.rollProgress-=s*Vi),s}recordFlipRotation(n){n>0?this.pendingForwardFlips+=n:this.pendingBackwardFlips+=-n}clearFlight(n=!0){this.pitchProgress=0,this.rollProgress=0,this.pendingForwardFlips=0,this.pendingBackwardFlips=0,this.pendingRolls=0,this.flightTime=0,this.flightBonus=0,n&&(this.currentPoints=0)}}class Ph{pos=new ne(0,0,0);vel=new ne;yaw=0;pitch=0;roll=0;grounded=!0;nitro=100;airTime=0;speed=0;gravity=24;jumpForce=15;jumpWas=!1;previousCompression=new Map;contactPitch=0;contactRoll=0;wheelContacts=[];reset(n,t=1){this.pos.set(0,n.heightAt(0,0)+1.65*t,0),this.vel.set(0,0,0),this.yaw=0,this.pitch=0,this.roll=0,this.grounded=!0,this.nitro=100,this.airTime=0,this.contactPitch=0,this.contactRoll=0,this.wheelContacts=ki(this.pos,this.yaw,t,(i,r)=>n.heightAt(i,r),this.gravity),this.previousCompression=new Map(this.wheelContacts.map(i=>[i.id,i.compression]))}update(n,t,i,r,a){this.gravity=a.gravity,this.jumpForce=a.jump,n=Math.min(n,.04);const s=Math.max(1,Math.ceil(n*120)),o=n/s;for(let m=0;m<s;m++)this.step(o,t,i,a);r.root.position.copy(this.pos),r.root.rotation.order="YXZ",r.root.rotation.set(this.pitch+this.contactPitch,this.yaw,this.roll+this.contactRoll),r.updateWheelContacts(this.wheelContacts,a.scale),r.wheels.forEach(m=>{m.rotation.x-=this.speed*n}),r.frontWheels.forEach(m=>{m.rotation.y=-t.steer*.28})}step(n,t,i,r){const a=r.scale,s=qn(this.yaw),o=30*(t.nitro&&this.nitro>0?1.7:1),m=26*(t.nitro&&this.nitro>0?1.5:1);t.throttle&&this.vel.addScaledVector(s,t.throttle*m*n);const u=new ne(this.vel.x,0,this.vel.z);if(this.speed=u.length(),t.nitro&&this.nitro>0?this.nitro=Math.max(0,this.nitro-22*n):this.nitro=Math.min(100,this.nitro+8*n),t.handbrake?u.multiplyScalar(Math.max(0,1-3*n)):u.multiplyScalar(Math.max(0,1-(this.grounded?1.05:.1)*n)),this.speed>o&&u.setLength(o),this.speed>.4){const M=(this.grounded?1.8:1.05)*(.25+Math.min(1,this.speed/12)),c=Math.sign(u.dot(s))||Math.sign(t.throttle);this.yaw-=t.steer*M*n*c;const l=va(this.yaw),b=u.dot(l);u.addScaledVector(l,-b*(this.grounded?.72:.01))}this.vel.x=u.x,this.vel.z=u.z,t.jump&&!this.jumpWas&&this.grounded&&(this.vel.y=this.jumpForce,this.grounded=!1),this.jumpWas=t.jump,this.wheelContacts=ki(this.pos,this.yaw,a,(M,c)=>i.heightAt(M,c),this.gravity);for(const M of this.wheelContacts){const c=this.previousCompression.get(M.id)??M.compression;M.compressionVelocity=(M.compression-c)/Math.max(n,1/240)}this.grounded||(t.level?(this.pitch=to(this.pitch,n),this.roll=to(this.roll,n)):(this.pitch+=t.airPitch*5.4*n,this.roll+=t.airRoll*6.2*n),this.airTime+=n),this.vel.y+=wh(this.wheelContacts,this.vel.y,this.gravity,a)*n;const p=this.pos.y;this.pos.addScaledVector(this.vel,n),this.wheelContacts=ki(this.pos,this.yaw,a,(M,c)=>i.heightAt(M,c),this.gravity);for(const M of this.wheelContacts)this.previousCompression.set(M.id,M.compression);const f=this.wheelContacts.filter(M=>M.contact&&M.compression>.015*a).length,g=Math.max(...this.wheelContacts.map(M=>M.height))+1.17*a;if(this.pos.y<g&&this.vel.y<0&&(!this.grounded&&this.vel.y<-3&&(this.pitch*=.35,this.roll*=.35,this.vel.y=Math.max(0,-this.vel.y*.12)),this.pos.y=g),this.grounded=this.vel.y<=.75&&f>=2,this.grounded){this.vel.y=Math.max(0,this.vel.y),this.airTime=0;const M=Math.exp(-4*n);this.pitch=Yn(0,this.pitch)*M,this.roll=Yn(0,this.roll)*M}const v=Ch(this.wheelContacts),T=this.grounded?Math.min(1,n*9):Math.min(1,n*2);this.contactPitch=Mt.lerp(this.contactPitch,this.grounded?v.pitch:0,T),this.contactRoll=Mt.lerp(this.contactRoll,this.grounded?v.roll:0,T),Number.isFinite(this.pos.y)||(this.pos.y=p)}}function ca(e){if(!e||typeof e!="object"||!("closest"in e))return!1;const n=e;return typeof n.closest=="function"&&n.closest('input,textarea,select,[contenteditable]:not([contenteditable="false"])')!==null}class Lh{pressed=new Set;actions=new Map;pointerDown(n,t){this.pointerUp(n),this.actions.set(n,t),this.pressed.add(t)}pointerUp(n){const t=this.actions.get(n);t!==void 0&&(this.actions.delete(n),[...this.actions.values()].includes(t)||this.pressed.delete(t))}pointerCancel(n){this.pointerUp(n)}lostPointerCapture(n){this.pointerUp(n)}releaseAll(){this.actions.clear(),this.pressed.clear()}}function Dh(e,n){const t=(...i)=>i.some(r=>e.has(r)||n.has(r));return Number(t("d","arrowright"))-Number(t("a","arrowleft"))}class Uh{keys=new Set;pointerButtons=new Lh;state={throttle:0,steer:0,nitro:!1,jump:!1,level:!1,airPitch:0,airRoll:0,handbrake:!1};get touches(){return this.pointerButtons.pressed}constructor(){window.addEventListener("focusin",n=>{ca(n.target)&&this.releaseAll()}),window.addEventListener("keydown",n=>{if(ca(n.target)){this.releaseAll();return}[" ","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n.key)&&n.preventDefault(),this.keys.add(n.key.toLowerCase())}),window.addEventListener("keyup",n=>this.keys.delete(n.key.toLowerCase())),window.addEventListener("blur",()=>this.releaseAll())}pointerDown(n,t){this.pointerButtons.pointerDown(n,t)}pointerUp(n){this.pointerButtons.pointerUp(n)}pointerCancel(n){this.pointerButtons.pointerCancel(n)}lostPointerCapture(n){this.pointerButtons.lostPointerCapture(n)}releaseAll(){this.keys.clear(),this.pointerButtons.releaseAll(),this.state={throttle:0,steer:0,nitro:!1,jump:!1,level:!1,airPitch:0,airRoll:0,handbrake:!1}}update(){const n=(...f)=>f.some(g=>this.keys.has(g)||this.touches.has(g)),t=Array.from(navigator.getGamepads?.()??[]).find(f=>f?.connected),i=t?.axes??[],r=f=>t?.buttons[f]?.value??0,a=(n("w","arrowup")?1:0)-(n("s","arrowdown")?1:0),s=r(7)-r(6)||-Math.sign(Math.abs(i[1]??0)>.18?i[1]:0),o=Dh(this.keys,this.touches),m=Math.abs(i[0]??0)>.16?i[0]:0,u=(n("arrowup")?1:0)-(n("arrowdown")?1:0),p=(n("e","arrowright")?1:0)-(n("q","arrowleft")?1:0);return this.state={throttle:a||s,steer:o||m,nitro:n("shift","nitro")||r(1)>.4,jump:n(" ","jump")||r(0)>.4,level:n("f","level")||r(3)>.4,airPitch:u||(Math.abs(i[3]??0)>.18?-Math.sign(i[3]):0),airRoll:p||(Math.abs(i[2]??0)>.18?Math.sign(i[2]):0),handbrake:n("control")||r(2)>.4},this.state}}const Dn=96,zi=160;class Ih{group=new Vt;dustMesh;burstMesh;particles=[];active=[];freeDust=[];freeBurst=[];activeCount=0;rng=7886388;matrix=new Nt;quat=new Ht;scaleVector=new ne;color=new ze;quality=1;constructor(){const n=new bo(.5,6,5);this.dustMesh=this.makeBatch(n.clone(),Dn,13875854),this.burstMesh=this.makeBatch(n.clone(),zi,16777215),n.dispose(),this.dustMesh.name="dust-particle-batch",this.burstMesh.name="impact-particle-batch",this.dustMesh.count=this.burstMesh.count=0,this.group.add(this.dustMesh,this.burstMesh);for(let t=0;t<Dn+zi;t++)this.particles.push({kind:"dust",life:0,max:1,position:new ne,velocity:new ne,scale:1,color:16777215}),this.active.push(0);for(let t=Dn-1;t>=0;t--)this.freeDust.push(t);for(let t=Dn+zi-1;t>=Dn;t--)this.freeBurst.push(t)}makeBatch(n,t,i){const r=new xo({color:i,vertexColors:!0,transparent:!0,depthWrite:!1});r.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute float instanceAlpha;
varying float vParticleAlpha;`),s.vertexShader=s.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vParticleAlpha = instanceAlpha;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying float vParticleAlpha;`),s.fragmentShader=s.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a *= vParticleAlpha;`)},r.customProgramCacheKey=()=>"rumble-particle-alpha-v1";const a=new ml(new Float32Array(t),1);return a.setUsage(_l),n.setAttribute("instanceAlpha",a),new Kt(n,r,t)}rand(){return this.rng=this.rng*1664525+1013904223>>>0,this.rng/4294967296}burst(n,t=18,i=16758605){t=Math.max(1,Math.round(t*this.quality));for(let r=0;r<t;r++){const a=this.freeBurst.pop();if(a===void 0)break;const s=this.particles[a];s.kind="burst",s.life=.45+this.rand()*.8,s.max=.9,s.scale=.16+this.rand()*.26,s.color=i,s.position.copy(n),s.velocity.set((this.rand()-.5)*8,1+this.rand()*7,(this.rand()-.5)*8),this.active[this.activeCount++]=a}}dust(n,t){if(t<4||this.rand()>.27*this.quality)return;const i=this.freeDust.pop();if(i===void 0)return;const r=this.particles[i];r.kind="dust",r.life=r.max=.65,r.scale=.36+this.rand()*.3,r.color=13875854,r.position.copy(n),r.velocity.set(this.rand()-.5,.4+this.rand(),this.rand()-.5),this.active[this.activeCount++]=i}update(n){let t=0,i=0,r=0;for(let a=0;a<this.activeCount;a++){const s=this.active[a],o=this.particles[s];if(o.life-=n,o.life<=0){(o.kind==="dust"?this.freeDust:this.freeBurst).push(s);continue}o.position.addScaledVector(o.velocity,n),o.scale*=1+n*.55;const m=Math.max(0,o.life/o.max*(o.kind==="dust"?.34:.9)),u=o.kind==="dust"?this.dustMesh:this.burstMesh,p=o.kind==="dust"?i++:r++;this.scaleVector.setScalar(o.scale*(o.life/o.max)),this.matrix.compose(o.position,this.quat,this.scaleVector),u.setMatrixAt(p,this.matrix),this.color.setHex(o.color),u.setColorAt(p,this.color),u.geometry.getAttribute("instanceAlpha").setX(p,m),this.active[t++]=s}this.activeCount=t,this.dustMesh.count=i,this.burstMesh.count=r,i&&(this.dustMesh.instanceMatrix.needsUpdate=!0,this.dustMesh.instanceColor.needsUpdate=!0,this.dustMesh.geometry.getAttribute("instanceAlpha").needsUpdate=!0),r&&(this.burstMesh.instanceMatrix.needsUpdate=!0,this.burstMesh.instanceColor.needsUpdate=!0,this.burstMesh.geometry.getAttribute("instanceAlpha").needsUpdate=!0)}get activeParticles(){return this.activeCount}setQuality(n){this.quality=n==="low"?.46:n==="medium"?.72:1}dispose(){this.group.clear();for(const n of[this.dustMesh,this.burstMesh])n.geometry.dispose(),n.material.dispose()}}class Nh{group=new Vt;mesh;pieces=[];quality="high";seed=1225960503;transform=new Nt;quaternion=new Ht;vector=new ne;scratchColor=new ze;capacity=320;constructor(){const n=new Jt(1,1,1),t=new mt({color:16777215,roughness:.88,metalness:.015});this.mesh=new Kt(n,t,this.capacity),this.mesh.name="bounded-building-collapse-batch",this.mesh.count=0,this.mesh.castShadow=!1,this.mesh.receiveShadow=!1,this.mesh.frustumCulled=!1,this.group.add(this.mesh)}random(){return this.seed=this.seed*1664525+1013904223>>>0,this.seed/4294967296}destroy(n,t,i){const r=this.quality==="low"?.5:this.quality==="medium"?.75:1,a=Mt.clamp(Math.ceil(n.w/3.3),2,4),s=Mt.clamp(Math.ceil(n.h/3.5),2,5),o=Math.max(5,Math.round(a*s*r)),m=Math.min(o,this.capacity-this.pieces.length);if(!m)return 0;const u=Array.isArray(n.mesh.material)?n.mesh.material[0]:n.mesh.material,p=u instanceof mt?u.color:new ze(11705472),f=new ne(t.direction.z,0,-t.direction.x).normalize(),g=new ne(n.x,n.mesh.position.y-n.h/2,n.z);for(let v=0;v<m;v++){const T=v%a,M=Math.floor(v/a)%s,c=new ne(n.w/a*(.78+this.random()*.2),n.h/s*(.78+this.random()*.2),Math.max(.35,n.d*(.22+this.random()*.28))),l=-n.w/2+(T+.5)*n.w/a,b=(M+.5)*n.h/s,R=(this.random()-.5)*Math.max(0,n.d-c.z),x=g.clone().add(new ne(l,b,R)),D=(this.random()-.5)*(2+t.intensity*6),C=2+t.intensity*(4+this.random()*5),U=t.direction.clone().multiplyScalar(C).addScaledVector(f,D);U.y=2.5+t.intensity*(2+this.random()*6)+this.random()*2;const F=p.clone().multiplyScalar(.78+this.random()*.4),_=4.5+this.random()*1.2;this.pieces.push({position:x,velocity:U,size:c,rotation:new xn(this.random()*2,this.random()*2,this.random()*2),angular:new ne((this.random()-.5)*8,(this.random()-.5)*8,(this.random()-.5)*8),ground:i(x.x,x.z)+.06,life:_,maxLife:_,color:F})}return m}setQuality(n){this.quality=n}clear(){this.pieces.length=0,this.mesh.count=0}update(n){let t=0;for(let i=this.pieces.length-1;i>=0;i--){const r=this.pieces[i];if(r.life-=n,r.life<=0){this.pieces.splice(i,1);continue}r.velocity.y-=18*n,r.position.addScaledVector(r.velocity,n),r.rotation.x+=r.angular.x*n,r.rotation.y+=r.angular.y*n,r.rotation.z+=r.angular.z*n;const a=r.size.y/2;r.position.y<r.ground+a&&(r.position.y=r.ground+a,r.velocity.y<-1?r.velocity.y*=-.19:r.velocity.y=0,r.velocity.x*=.82,r.velocity.z*=.82,r.angular.multiplyScalar(.96));const s=r.life<.45?Math.max(.1,r.life/.45):1;this.vector.copy(r.size).multiplyScalar(s),this.quaternion.setFromEuler(r.rotation),this.transform.compose(r.position,this.quaternion,this.vector),this.mesh.setMatrixAt(t,this.transform),this.scratchColor.copy(r.color),this.mesh.setColorAt(t,this.scratchColor),t++}this.mesh.count=t,t&&(this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0))}get activeCount(){return this.pieces.length}dispose(){this.group.clear(),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.pieces.length=0}}const cn=(e,n,t)=>Math.max(n,Math.min(t,e));function Oh(e,n,t){const i=cn(.2+cn(e/32,0,1)*.67+cn(n,0,1)*.16+(t?.18:0),.2,1.2),r=62+i*112;return{rpm:i,fundamentalHz:r,engineGain:.075+i*.035+cn(n,0,1)*.025,harmonicHz:r*2.4,nitroHz:260+i*390}}function Un(e){return cn(Number.isFinite(e)?e:0,0,1)}class Fh{ctx=null;master=null;compressor=null;analyser=null;meterBuffer=null;engineOsc=null;engineHarmonic=null;engineGain=null;harmonicGain=null;nitroOsc=null;nitroGain=null;skidNoise=null;skidGain=null;noiseBuffer=null;volume=.62;muted=!1;failed=!1;start(){try{this.ctx||this.createGraph(),this.ctx?.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.applyMaster()}catch{this.failed=!0}}createGraph(){const n=window,t=window.AudioContext??n.webkitAudioContext;if(!t){this.failed=!0;return}const i=new t;this.ctx=i,this.master=i.createGain(),this.master.gain.value=0,this.compressor=i.createDynamicsCompressor(),this.compressor.threshold.value=-18,this.compressor.knee.value=14,this.compressor.ratio.value=5,this.compressor.attack.value=.006,this.compressor.release.value=.16,this.analyser=i.createAnalyser(),this.analyser.fftSize=256,this.meterBuffer=new Float32Array(this.analyser.fftSize),this.master.connect(this.compressor).connect(this.analyser).connect(i.destination);const r=i.createOscillator();r.type="sawtooth";const a=i.createBiquadFilter();a.type="lowpass",a.frequency.value=620,a.Q.value=.7,this.engineGain=i.createGain(),this.engineGain.gain.value=.09,r.connect(a).connect(this.engineGain).connect(this.master),r.start(),this.engineOsc=r;const s=i.createOscillator();s.type="triangle";const o=i.createBiquadFilter();o.type="bandpass",o.frequency.value=520,o.Q.value=.65,this.harmonicGain=i.createGain(),this.harmonicGain.gain.value=.035,s.connect(o).connect(this.harmonicGain).connect(this.master),s.start(),this.engineHarmonic=s;const m=i.createOscillator();m.type="sawtooth";const u=i.createBiquadFilter();u.type="bandpass",u.frequency.value=900,u.Q.value=.8,this.nitroGain=i.createGain(),this.nitroGain.gain.value=1e-4,m.connect(u).connect(this.nitroGain).connect(this.master),m.start(),this.nitroOsc=m;const p=i.createBuffer(1,Math.floor(i.sampleRate*.35),i.sampleRate),f=p.getChannelData(0);for(let T=0;T<f.length;T++)f[T]=(Math.random()*2-1)*.55;this.noiseBuffer=p;const g=i.createBufferSource();g.buffer=p,g.loop=!0;const v=i.createBiquadFilter();v.type="bandpass",v.frequency.value=1250,v.Q.value=.5,this.skidGain=i.createGain(),this.skidGain.gain.value=1e-4,g.connect(v).connect(this.skidGain).connect(this.master),g.start(),this.skidNoise=g,this.failed=!1}setMasterVolume(n){this.volume=Un(n),this.applyMaster()}getMasterVolume(){return this.volume}setMuted(n){this.muted=n,this.applyMaster()}mute(){this.setMuted(!0)}isMuted(){return this.muted}isAvailable(){return!!this.ctx&&!this.failed}getState(){return this.ctx?.state??(this.failed?"unavailable":"locked")}applyMaster(){this.ctx&&this.master&&this.master.gain.setTargetAtTime(this.muted?0:this.volume,this.ctx.currentTime,.025)}update(n,t=0,i=!1,r=0){const a=this.ctx;if(!a||!this.engineOsc||!this.engineHarmonic||!this.engineGain||!this.harmonicGain)return;const s=Oh(n,t,i),o=a.currentTime;this.engineOsc.frequency.setTargetAtTime(s.fundamentalHz,o,.055),this.engineHarmonic.frequency.setTargetAtTime(s.harmonicHz,o,.07),this.engineGain.gain.setTargetAtTime(s.engineGain,o,.09),this.harmonicGain.gain.setTargetAtTime(.026+s.rpm*.022,o,.09),this.nitroOsc?.frequency.setTargetAtTime(s.nitroHz,o,.045),this.nitroGain?.gain.setTargetAtTime(i?.075:1e-4,o,.05),this.skidGain?.gain.setTargetAtTime(cn(r,0,1)>.08?.12*cn(r,0,1):1e-4,o,.04)}testTone(){const n=this.ctx;if(!n||this.muted)return!1;const t=n.createOscillator(),i=n.createGain(),r=n.currentTime;return t.type="sine",t.frequency.setValueAtTime(523.25,r),i.gain.setValueAtTime(1e-4,r),i.gain.linearRampToValueAtTime(.22,r+.025),i.gain.setValueAtTime(.22,r+.24),i.gain.exponentialRampToValueAtTime(1e-4,r+.52),t.connect(i).connect(this.master),t.start(r),t.stop(r+.54),t.onended=()=>{t.disconnect(),i.disconnect()},!0}jump(){this.sweep(175,540,.34,.055,"sawtooth")}landing(n=1){this.noiseBurst(.11+Un(n)*.08,.22),this.sweep(112,52,.19,.075*Un(n),"sine")}impact(n=1){this.noiseBurst(.15+Un(n)*.12,.34),this.sweep(170,43,.28,.11*Un(n),"triangle")}sweep(n,t,i,r,a){const s=this.ctx;if(!s||this.muted)return;const o=s.createOscillator(),m=s.createGain(),u=s.currentTime;o.type=a,o.frequency.setValueAtTime(n,u),o.frequency.exponentialRampToValueAtTime(Math.max(25,t),u+i),m.gain.setValueAtTime(1e-4,u),m.gain.linearRampToValueAtTime(r,u+.012),m.gain.exponentialRampToValueAtTime(1e-4,u+i),o.connect(m).connect(this.master),o.start(u),o.stop(u+i+.015),o.onended=()=>{o.disconnect(),m.disconnect()}}noiseBurst(n,t){const i=this.ctx;if(!i||!this.noiseBuffer||this.muted)return;const r=i.createBufferSource(),a=i.createBiquadFilter(),s=i.createGain(),o=i.currentTime;r.buffer=this.noiseBuffer,a.type="lowpass",a.frequency.value=1900,s.gain.setValueAtTime(Math.max(1e-4,n),o),s.gain.exponentialRampToValueAtTime(1e-4,o+t),r.connect(a).connect(s).connect(this.master),r.start(o),r.stop(o+t+.02),r.onended=()=>{r.disconnect(),a.disconnect(),s.disconnect()}}outputRms(){if(!this.ctx||!this.analyser||!this.meterBuffer||this.ctx.state!=="running"||this.muted)return 0;this.analyser.getFloatTimeDomainData(this.meterBuffer);let n=0;for(const t of this.meterBuffer)n+=t*t;return Math.sqrt(n/this.meterBuffer.length)}}const le=e=>document.querySelector(e),wn=!!(window.matchMedia?.("(pointer: coarse)").matches||window.matchMedia?.("(any-pointer: coarse)").matches||navigator.maxTouchPoints>0||"ontouchstart"in window),Zn=document.documentElement;Zn.classList.toggle("touch-capable",wn);Zn.classList.toggle("keyboard-controls-visible",!wn);const Bh=le("#app");Bh.innerHTML=`
 <canvas id="game"></canvas>
 <div class="grain"></div>
 <header class="topbar"><a class="brand" href="#"><span class="brand-icon">✦</span><span>RUMBLE<span class="accent">ROAM</span></span></a><div class="location-label"><span class="pulse"></span><span id="place-name">Moab, Utah</span><small id="terrain-name">RED ROCK COUNTRY</small></div><div class="top-actions"><button id="map-btn" class="top-btn" aria-label="Choose location">⌖ <span>LOCATIONS</span></button><button id="pause-btn" class="top-btn" aria-label="Pause game">Ⅱ <span>PAUSE</span></button><button id="help-btn" class="top-btn help-trigger" aria-label="Help and controls">?</button></div></header><div id="geo-status" class="world-data-status" aria-live="polite">OSM DATA · CONNECTING</div>
 <aside class="hud-left"><div class="stat"><span class="stat-label">VELOCITY</span><div class="speed-line"><strong id="speed">000</strong><span>KM/H</span></div><div class="speed-track"><i id="speed-bar"></i></div></div><div class="stat nitro-stat"><span class="stat-label">NITROUS</span><div class="nitro-track"><i id="nitro-bar"></i></div><small id="nitro-state">READY TO BURN</small></div><div class="stunt-stat" aria-live="polite"><div><span>AIR TIME</span><b id="air-time">0.0s</b></div><div><span>STUNT</span><b id="stunt-score">0</b></div><small>BEST <b id="stunt-best">0</b></small><small id="level-hint" class="level-hint"></small></div></aside>
 <div class="hud-bottom"><div class="hint keyboard-hint"><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> DRIVE <i></i><kbd>SHIFT</kbd> BOOST <i></i><kbd>SPACE</kbd> JUMP <i></i><kbd>F</kbd> LEVEL <i></i><kbd>Q</kbd><kbd>E</kbd> FLIP</div><div class="touch-hint">LEFT / RIGHT STEER · HOLD GO OR BRAKE · JUMP + BOOST</div><div class="camera-toggle"><button data-camera="chase" class="selected">CHASE</button><button data-camera="far">FAR</button><button data-camera="hood">HOOD</button><button data-camera="free">FREE</button></div></div>
 <button id="settings-btn" class="settings-fab">⚙</button>
 <section id="location-panel" class="panel hidden"><div class="panel-head"><div><span class="eyebrow">PICK YOUR PLAYGROUND</span><h2>Where to next?</h2></div><button class="close-btn" data-close="location-panel">×</button></div><form id="search-form"><input id="location-search" placeholder="Search a place or paste coordinates" autocomplete="off"><button class="search-btn">SEARCH <span>↗</span></button></form><div id="search-results" class="results"></div><div class="map-wrap"><div id="mini-map"></div><div class="map-hint">CLICK MAP TO DROP A PIN</div></div><div class="preset-title">FAVORITE RUNS <span>08 LOCATIONS</span></div><div id="presets" class="presets"></div><div class="attribution">Terrain <a href="https://registry.opendata.aws/terrain-tiles/" target="_blank">Mapzen / Tilezen</a> · © <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a> · Map <a href="https://openfreemap.org/" target="_blank">OpenFreeMap</a><details class="terrain-credits"><summary>Terrain source credits</summary><div>ArcticDEM: DigitalGlobe imagery; NSF awards 1043681, 1559691 and 1542736. Australia: © Commonwealth of Australia (Geoscience Australia) 2017. Austria: © offene Daten Österreichs – Digitales Geländemodell (DGM) Österreich. Canada: Open Government Licence – Canada. Europe: Copernicus / EU-DEM. Global ETOPO1: NOAA. Mexico: INEGI, Continental relief, 2016. New Zealand: © Land Information New Zealand and NZ Government. Norway: © Kartverket. United Kingdom: © Environment Agency 2015. United States 3DEP, GMTED2010 and SRTM: USGS.</div></details></div></section>
 <section id="settings-panel" class="panel settings hidden"><div class="panel-head"><div><span class="eyebrow">TUNE THE MAYHEM</span><h2>Game settings</h2></div><button class="close-btn" data-close="settings-panel">×</button></div><label>Graphics quality <select id="graphics-quality"><option value="low">Low · smoother</option><option value="medium">Medium · balanced</option><option value="high">High · detailed</option></select></label><label>Gravity <span id="gravity-value">24</span><input id="gravity" type="range" min="6" max="35" value="24"></label><label>Jump force <span id="jump-value">15</span><input id="jump" type="range" min="8" max="25" value="15"></label><label>Truck scale <span id="scale-value">1.0×</span><input id="scale" type="range" min="7" max="16" value="10"></label><label>Paint <input id="paint" type="color" value="#d84924"></label><label class="toggle"><span>Audio</span><input id="audio-toggle" type="checkbox" checked></label><label>Master volume <span id="volume-value">62%</span><input id="master-volume" type="range" min="0" max="100" value="62"></label><button id="audio-test" class="ghost-btn audio-test">TEST SOUND</button><small id="audio-status" class="settings-note">Sound starts after your first control input.</small><button id="reset-btn" class="search-btn full">RESET TRUCK <span>↻</span></button><small class="settings-note">Esc pauses the run. R recovers the truck. Press M to pick a new place.</small></section>
 <section id="pause-panel" class="pause-panel hidden"><span class="eyebrow">TAKE A BREATHER</span><h1>PAUSED</h1><button id="resume-btn" class="search-btn">BACK TO IT <span>▶</span></button><button id="pause-location" class="ghost-btn">CHANGE LOCATION</button></section>
 <section id="help-panel" class="panel help-panel hidden" aria-labelledby="help-title"><div class="panel-head"><div><span class="eyebrow">QUICK DRIVER GUIDE</span><h2 id="help-title">Controls</h2></div><button class="close-btn" data-close="help-panel" aria-label="Close help">×</button></div><p class="touch-guide-copy">Hold ◀ / ▶ to steer. Hold GO to accelerate or BRAKE to reverse. Hold JUMP and BOOST together for a bigger launch. Camera, reset, and pause are just below.</p><div class="help-grid"><strong>Keyboard</strong><span>W / S · Accelerate / reverse</span><span>A / D or ← / → · Steer</span><span>Shift · Nitro · Space · Jump · F · Level while airborne</span><span>Q / E · Roll · R · Reset · C · Camera · Esc · Pause · M · Locations</span><strong>Touch</strong><span>◀ / ▶ · Steer · GO / BRAKE · Drive</span><span>JUMP · Launch · BOOST · Nitro</span><span>Bottom shortcuts · Reset · Camera · Pause · Help</span></div></section>
 <div id="toast" class="toast"></div>
 <div class="orientation-tip" aria-hidden="true">LANDSCAPE RECOMMENDED</div>
 <nav class="mobile-utility" aria-label="Quick game controls"><button id="touch-reset" aria-label="Reset truck">↻ <span>RESET</span></button><button id="touch-camera" aria-label="Change camera">◉ <span>CAM</span></button><button id="touch-pause" aria-label="Pause game">Ⅱ <span>PAUSE</span></button><button id="touch-help" aria-label="Help and controls">? <span>HELP</span></button><button id="touch-control-mode" aria-label="Switch control display" aria-pressed="true">⌨ <span>KEYS</span></button></nav>
 <div class="mobile-controls" aria-label="Touch driving controls"><div class="touch-action-row"><button data-touch="jump" aria-label="Jump">⬆ <span>JUMP</span></button><button data-touch="nitro" class="nitro-touch" aria-label="Hold for nitro">⚡ <span>BOOST</span></button><button id="touch-level" data-touch="level" class="level-touch" aria-label="Hold to level truck upright">↥ <span>LEVEL</span></button></div><div class="touch-drive-row"><div class="dpad" aria-label="Steering"><button data-touch="a" aria-label="Steer left">◀<span>LEFT</span></button><button data-touch="d" aria-label="Steer right">▶<span>RIGHT</span></button></div><div class="pedals" aria-label="Acceleration"><button data-touch="s" class="brake" aria-label="Brake and reverse">▼<span>BRAKE</span></button><button data-touch="w" class="go" aria-label="Accelerate">▲<span>GO</span></button></div></div></div>
 <div class="loading-screen" id="loading"><div class="loader-mark">✦</div><div class="loader-title">MAPPING THE WILD</div><div class="loader-sub">LOADING REAL-WORLD TERRAIN</div><div class="loader-track"><i></i></div></div>`;let qt=wn?"low":"high";const Sa=e=>wn?{low:.82,medium:.93,high:1}[e]:{low:.85,medium:1.1,high:1.35}[e],Ea=()=>({width:Math.round(window.visualViewport?.width??innerWidth),height:Math.round(window.visualViewport?.height??innerHeight)}),pi=Ea(),gt=new rh({canvas:le("#game"),antialias:!1,powerPreference:"high-performance"});gt.setPixelRatio(Math.min(devicePixelRatio||1,Sa(qt)));gt.setSize(pi.width,pi.height);gt.shadowMap.enabled=!1;gt.toneMapping=To;gt.toneMappingExposure=1.12;const xt=new gl;xt.background=new ze("#9bb7c1");xt.fog=new Ro("#b9c4bc",105e-6);const zt=new On(60,pi.width/pi.height,.1,18e3);zt.position.set(0,8,-16);xt.add(new vl(15398143,6443323,1.45));const Fo=new Sl(16772559,2.55);Fo.position.set(-350,550,260);xt.add(Fo);const da=new Xt({side:bt,depthWrite:!1,depthTest:!1,toneMapped:!1,uniforms:{uRumbleDesert:{value:1},uRumbleAlpine:{value:0},uSunDirection:{value:new ne(-.42,.63,.65).normalize()}},vertexShader:"varying vec3 vSkyDirection;void main(){vSkyDirection=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec3 vSkyDirection;uniform float uRumbleDesert;uniform float uRumbleAlpine;uniform vec3 uSunDirection;void main(){vec3 d=normalize(vSkyDirection);float h=smoothstep(-.16,.84,d.y);vec3 horizon=mix(vec3(.79,.72,.58),vec3(.66,.75,.77),uRumbleDesert);horizon=mix(horizon,vec3(.72,.79,.84),uRumbleAlpine);vec3 zenith=mix(vec3(.24,.37,.48),vec3(.3,.46,.55),uRumbleDesert);vec3 sky=mix(horizon,zenith,h);float sun=pow(max(dot(d,normalize(uSunDirection)),0.0),180.0);sky+=vec3(1.0,.72,.4)*sun*.32;gl_FragColor=vec4(sky,1.0);}"}),Si=new rt(new bo(12e3,24,16),da);Si.frustumCulled=!1;Si.renderOrder=-1e3;xt.add(Si);const Ma=new Xt({transparent:!0,depthWrite:!1,toneMapped:!1,uniforms:{uOpacity:{value:.25}},vertexShader:"varying vec2 vShadowUv;void main(){vShadowUv=uv*2.0-1.0;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec2 vShadowUv;uniform float uOpacity;void main(){float r=length(vShadowUv);float a=(1.0-smoothstep(.18,1.0,r))*uOpacity;gl_FragColor=vec4(.12,.105,.085,a);}"}),Kn=new rt(new El(1,32),Ma);Kn.rotation.x=-Math.PI/2;Kn.renderOrder=1;xt.add(Kn);const at=new _h(wn?63:127);xt.add(at.group);const Pt=new Ah;xt.add(Pt.group,Pt.roadsGroup);const dn=new Ih;xt.add(dn.group);const fn=new Nh;xt.add(fn.group);let Zt=new bh;xt.add(Zt.root);const ue=new Ph,{ArcadeCollisionWorld:Gh}=await oa(async()=>{const{ArcadeCollisionWorld:e}=await import("./collision-world-9KrwgW50.js");return{ArcadeCollisionWorld:e}},__vite__mapDeps([0,1]),import.meta.url),bn=new Gh;await bn.init();const ft=new Uh,ht=new Fh,ua="rumble-roam-best-stunt-score";function fa(){try{return Number(localStorage.getItem(ua))||0}catch{return 0}}const ut=new yh(fa());(location.hostname==="localhost"||location.hostname==="127.0.0.1")&&(window.__rumbleRoamDebug={spawnImpactTestBuilding(){at.frame&&Pt.addFixtureRoad(at.frame,(i,r)=>at.heightAt(i,r));const e=qn(ue.yaw),n=ue.pos.clone().addScaledVector(e,11),t=Pt.addFixtureBuilding(`fixture-impact-${Date.now()}`,n.x,n.z,(i,r)=>at.heightAt(i,r),bn,{w:7,d:6,h:9});return Ot("LOCAL TEST BUILDING AHEAD"),t.id},spawnImpactTestSet(){const e=qn(ue.yaw);return at.frame&&Pt.addFixtureRoad(at.frame,(n,t)=>at.heightAt(n,t)),[10,27].map((n,t)=>{const i=ue.pos.clone().addScaledVector(e,n);return Pt.addFixtureBuilding(`fixture-impact-set-${Date.now()}-${t}`,i.x,i.z,(r,a)=>at.heightAt(r,a),bn,t?{w:10,d:8,h:24}:{w:6,d:5,h:7}).id})},hasFixtureRoad(){return Pt.roadsGroup.children.some(e=>e.userData.kind==="fixture-road")}});const Ei={gravity:24,jump:15,scale:1};le("#graphics-quality").value=qt;let hn="chase",Wt=!1,ha=0,Hn=.25,$t=null,pa=null,Mn=Do[1],Wi=0,$n=performance.now(),Lt=0,no=0,Xi=performance.now(),ri=0,di=0,qi=0,oi=0,io=0,ao=0;function Hh(){const e=performance.memory;return e?Math.round(e.usedJSHeapSize/1048576*10)/10:null}function Ot(e){const n=le("#toast");n.textContent=e,n.classList.add("show"),clearTimeout(no),no=window.setTimeout(()=>n.classList.remove("show"),2800)}function Ft(){Zn.classList.toggle("overlay-open",["location-panel","settings-panel","help-panel","pause-panel"].some(e=>!le("#"+e).classList.contains("hidden")))}async function Mi(e){const n=++Wi;Mn=e,Wt=!1,di=0,fn.clear(),le("#geo-status").textContent="OSM DATA · LOADING";const t=e.name.toLowerCase(),i=/moab|grand canyon|sahara|utah|arizona/.test(t),r=/alps|everest|mountain|swiss/.test(t);da.uniforms.uRumbleDesert.value=i?1:0,da.uniforms.uRumbleAlpine.value=r?1:0,xt.fog instanceof Ro&&xt.fog.color.set(i?"#c5a983":r?"#b9c8d3":"#b9c4bc"),["location-panel","settings-panel","help-panel","pause-panel"].forEach(a=>le("#"+a).classList.add("hidden")),Ft(),le("#loading").classList.remove("done"),le("#place-name").textContent=e.name,le("#terrain-name").textContent=e.terrain??"OPEN TERRAIN",Ot("Mapping terrain…"),await at.load(e),n===Wi&&(ue.reset(at,Ei.scale),ut.reset(),le("#loading").classList.add("done"),Ot("Terrain is ready. Go make a mess."),Pt.load(e,(a,s)=>at.heightAt(a,s),bn,at.frame).then(a=>{n===Wi&&(le("#geo-status").textContent=a.message,Ot(a.source==="osm"?`OSM loaded · ${a.buildings} buildings · ${a.roads} roads`:"OSM is unavailable. Practice course loaded."))}),$t?.flyTo({center:[e.lon,e.lat],zoom:12}),pa?.setLngLat([e.lon,e.lat]))}Do.forEach((e,n)=>{const t=document.createElement("button");t.className="preset",t.innerHTML=`<span class="preset-index">0${n+1}</span><span>${e.name}</span><i>↗</i>`,t.onclick=()=>Mi(e),le("#presets").append(t)});le("#search-form").addEventListener("submit",async e=>{e.preventDefault();const n=le("#location-search").value.trim();if(!n)return;const t=le("#search-results");t.innerHTML='<div class="search-status">SEARCHING THE GLOBE…</div>';try{const i=await fh(n);if(!i.length){t.innerHTML='<div class="search-status">No places found. Try a nearby town or coordinates.</div>';return}t.innerHTML="";for(const r of i){const a=document.createElement("button");a.className="result",a.innerHTML=`<span>⌖</span><span>${r.name}</span><i>↗</i>`,a.onclick=()=>Mi(r),t.append(a)}}catch{t.innerHTML='<div class="search-status">Location search is busy. Try coordinates like 40.7, -73.9.</div>'}});le("#location-search").addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),le("#search-form").requestSubmit())});le("#map-btn").onclick=async()=>{if(le("#location-panel").classList.toggle("hidden"),le("#settings-panel").classList.add("hidden"),le("#help-panel").classList.add("hidden"),Ft(),$t)setTimeout(()=>$t?.resize(),100);else{const[n,t]=await Promise.all([oa(()=>import("./maplibre-gl-BT_db7in.js"),[],import.meta.url),oa(()=>import("./maplibre-gl-worker-re4DVwB4.js"),[],import.meta.url)]);n.setWorkerUrl(t.default),$t=new n.Map({container:"mini-map",style:"https://tiles.openfreemap.org/styles/liberty",center:[Mn.lon,Mn.lat],zoom:10,attributionControl:!1}),$t.addControl(new n.NavigationControl({showCompass:!1}),"top-right"),pa=new n.Marker({color:"#f2632b"}).setLngLat([Mn.lon,Mn.lat]).addTo($t),$t.on("click",i=>{const r={name:`${i.lngLat.lat.toFixed(4)}, ${i.lngLat.lng.toFixed(4)}`,lat:i.lngLat.lat,lon:i.lngLat.lng};pa?.setLngLat(i.lngLat);const a=document.createElement("button");a.className="result",a.innerHTML=`<span>⌖</span><span>Drive at ${r.name}</span><i>↗</i>`,a.onclick=()=>Mi(r),le("#search-results").replaceChildren(a)})}};le("#settings-btn").onclick=()=>{le("#settings-panel").classList.toggle("hidden"),le("#location-panel").classList.add("hidden"),le("#help-panel").classList.add("hidden"),Ft()};const xa=()=>{le("#help-panel").classList.toggle("hidden"),le("#location-panel").classList.add("hidden"),le("#settings-panel").classList.add("hidden"),Ft()};le("#help-btn").onclick=xa;le("#touch-help").onclick=xa;document.querySelectorAll("[data-close]").forEach(e=>e.addEventListener("click",()=>{le("#"+e.dataset.close).classList.add("hidden"),Ft()}));const Ta=(e,n,t)=>{const i=le("#"+e);i.oninput=()=>{const r=+i.value/(n==="scale"?10:1);Ei[n]=r,le("#"+n+"-value").textContent=t(r),n==="scale"&&Zt.root.scale.setScalar(r)}};Ta("gravity","gravity",e=>e.toFixed(0));Ta("jump","jump",e=>e.toFixed(0));Ta("scale","scale",e=>e.toFixed(1)+"×");le("#paint").addEventListener("input",e=>Zt.setColor(e.target.value));function kh(e){qt=e,le("#graphics-quality").value=e,gt.setPixelRatio(Math.min(devicePixelRatio||1,Sa(e)));const n=Ea();gt.setSize(n.width,n.height),at.setVisualQuality(e),dn.setQuality(e),fn.setQuality(e),Ma.uniforms.uOpacity.value=Bo(e)}const Bo=e=>e==="low"?.18:e==="medium"?.23:.29;le("#graphics-quality").addEventListener("change",e=>kh(e.target.value));at.setVisualQuality(qt);dn.setQuality(qt);fn.setQuality(qt);Ma.uniforms.uOpacity.value=Bo(qt);le("#audio-toggle").addEventListener("change",e=>{const n=e.target.checked;n&&ht.start(),ht.setMuted(!n),le("#audio-status").textContent=n?"Audio enabled.":"Audio muted."});le("#master-volume").addEventListener("input",e=>{const n=+e.target.value;ht.setMasterVolume(n/100),le("#volume-value").textContent=`${n}%`});le("#audio-test").addEventListener("click",()=>{ht.start();const e=ht.testTone();le("#audio-status").textContent=e?"Test tone playing through the game audio output.":"Unmute audio to play the test tone.",e||Ot("Turn Audio on to hear the test.")});function Aa(){ue.reset(at,Ei.scale),ut.reset(),Zt.root.visible=!0,Ot("Truck recovered. Send it!")}function ba(e){const n=["chase","far","hood","free"];hn=e??n[(n.indexOf(hn)+1)%n.length],document.querySelectorAll("[data-camera]").forEach(t=>t.classList.toggle("selected",t.dataset.camera===hn))}function Ra(){Wt=!Wt,Wt&&ft.releaseAll(),le("#pause-panel").classList.toggle("hidden",!Wt),Ft()}le("#reset-btn").onclick=Aa;le("#touch-reset").onclick=()=>{ht.start(),Aa()};le("#touch-camera").onclick=()=>ba();le("#touch-pause").onclick=()=>Ra();le("#resume-btn").onclick=()=>{ht.start(),Wt=!1,$n=performance.now(),le("#pause-panel").classList.add("hidden"),Ft()};le("#pause-btn").onclick=()=>Ra();le("#pause-location").onclick=()=>{le("#pause-panel").classList.add("hidden"),Ft(),le("#map-btn").click()};document.querySelectorAll("[data-camera]").forEach(e=>e.addEventListener("click",()=>ba(e.dataset.camera)));const kn=le("#touch-control-mode");kn.textContent=wn?"⌨ KEYS":"◉ TOUCH";kn.setAttribute("aria-pressed",String(!Zn.classList.contains("keyboard-controls-visible")));kn.onclick=()=>{const e=Zn.classList.toggle("keyboard-controls-visible");kn.innerHTML=e?"◉ <span>TOUCH</span>":"⌨ <span>KEYS</span>",kn.setAttribute("aria-pressed",String(!e))};window.addEventListener("keydown",e=>{e.repeat||ca(e.target)||(e.key.toLowerCase()==="m"&&le("#map-btn").click(),e.key.toLowerCase()==="c"&&ba(),e.key.toLowerCase()==="r"&&Aa(),e.key==="Escape"&&Ra(),(e.key==="?"||e.key.toLowerCase()==="h")&&xa(),(e.key===" "||e.key.toLowerCase()==="w")&&ht.start())});document.querySelectorAll("[data-touch]").forEach(e=>{const n=e.dataset.touch;e.addEventListener("pointerdown",t=>{if(!(t.pointerType==="mouse"&&t.button!==0)){t.preventDefault(),ft.pointerDown(t.pointerId,n);try{e.setPointerCapture(t.pointerId)}catch{}ht.start()}}),e.addEventListener("pointerup",t=>{t.preventDefault(),ft.pointerUp(t.pointerId)}),e.addEventListener("pointercancel",t=>ft.pointerCancel(t.pointerId)),e.addEventListener("lostpointercapture",t=>ft.lostPointerCapture(t.pointerId))});window.addEventListener("blur",()=>ft.releaseAll());document.addEventListener("visibilitychange",()=>{$n=performance.now(),document.hidden&&(ft.releaseAll(),Wt=!0,le("#pause-panel").classList.remove("hidden"),Ft())});window.addEventListener("pointermove",e=>{hn==="free"&&e.buttons&&(ha-=e.movementX*.004,Hn=Mt.clamp(Hn-e.movementY*.003,-.3,1.1))});let ro=0,Yi=60;function Vh(e){const n=ue.pos,t=qn(ue.yaw),i=Math.min(1,ue.speed/28),r=Math.max(-35,Math.min(35,(ue.speed-ro)/Math.max(e,.001)));ro=ue.speed;let a,s;if(hn==="hood")a=n.clone().add(new ne(0,2.3,0)).addScaledVector(t,1.2),s=a.clone().addScaledVector(t,7).add(new ne(0,.3,0));else if(hn==="free"){const u=new ne(Math.sin(ha)*Math.cos(Hn),Math.sin(Hn),Math.cos(ha)*Math.cos(Hn));a=n.clone().add(new ne(0,1.5,0)),s=a.clone().addScaledVector(u,-14)}else{const u=hn==="far",p=(u?30:11.8)+i*(u?8:3.8),f=(u?10:5.35)+i*1.6;a=n.clone().add(new ne(0,1.4,0)).addScaledVector(t,ue.speed*.2),s=n.clone().addScaledVector(t,-p).add(new ne(0,f,0)).addScaledVector(ue.vel,-.11),u||s.addScaledVector(va(ue.yaw),2.3),s.addScaledVector(t,-Mt.clamp(r*.018,-.8,.8))}const o=a;Lt>0&&(s.x+=(Math.random()-.5)*Lt,s.y+=(Math.random()-.5)*Lt,Lt=Math.max(0,Lt-e*1.3)),zt.position.lerp(s,1-Math.exp(-(5.4-i*.65)*e)),zt.lookAt(o);const m=60+i*4.5;Math.abs(m-Yi)>.15&&(Yi=m,zt.fov=Yi,zt.updateProjectionMatrix())}function Go(e){requestAnimationFrame(Go);const n=performance.now(),t=Math.min((e-$n)/1e3,.045);if($n=e,!Wt){const m=ft.update(),u=ue.grounded,p=ue.vel.y,f=performance.now();ue.update(t,m,at,Zt,Ei),ao=performance.now()-f;const g=ut.update({grounded:ue.grounded,airtime:ue.airTime,pitch:ue.pitch,roll:ue.roll,landingSpeed:Math.abs(p)});if(u&&!ue.grounded&&m.jump&&(ht.jump(),Lt=Math.max(Lt,.07)),!u&&ue.grounded&&(ht.landing(Math.min(1,Math.abs(p)/20)),Lt=Math.max(Lt,Math.min(.28,Math.abs(p)*.008)),g&&(Ot(`${g.message}  +${g.points.toLocaleString()} PTS`),ut.bestScore>fa())))try{localStorage.setItem(ua,String(ut.bestScore))}catch{}const v=bn.step(ue.pos,ue.yaw,t,ue.vel);if(v){const M=Pt.break(v.building);if(bn.removeBuilding(v.building),M){di++;const c=Math.round(100+Math.min(420,v.building.h*12)+v.intensity*120);ut.awardBonus(c);try{ut.bestScore>fa()&&localStorage.setItem(ua,String(ut.bestScore))}catch{}fn.destroy(v.building,v,(l,b)=>at.heightAt(l,b)),dn.burst(v.position,Math.round(22+v.intensity*20),16752988),ue.vel.addScaledVector(v.normal,-(1.5+v.intensity*4)),ue.vel.y+=1+v.intensity*2.5,Lt=Math.max(Lt,.2+v.intensity*.48),ht.impact(v.intensity),Ot(di>1?`MULTI-SMASH · +${c} PTS`:`BUILDING SMASHED · DEMOLITION BONUS +${c}`)}}const T=Math.abs(ue.vel.dot(va(ue.yaw)));for(let M=0;M<ue.wheelContacts.length;M++){const c=ue.wheelContacts[M];dn.dust(new ne(c.x,c.height+.07,c.z),ue.speed*(T>ue.speed*.28?1.35:1))}if(m.nitro&&ue.nitro>0&&Math.random()<t*8){const M=ue.pos.clone().addScaledVector(qn(ue.yaw),-1.72);dn.burst(M.add(new ne((Math.random()-.5)*.9,.9,(Math.random()-.5)*.35)),1,16742965)}dn.update(t),fn.update(t),ht.update(ue.speed,Math.max(0,m.throttle),m.nitro&&ue.nitro>0,Math.max(m.handbrake?.55:0,T/Math.max(4,ue.speed))),Vh(t)}Si.position.copy(zt.position);const i=ue.wheelContacts.reduce((m,u)=>Math.max(m,u.height),-1/0),r=Number.isFinite(i)?i:at.heightAt(ue.pos.x,ue.pos.z),a=Mt.clamp(ue.pos.y-r,0,80);Kn.position.set(ue.pos.x,r+.035,ue.pos.z),Kn.scale.set(1.35+a*.055,2+a*.07,1),le("#speed").textContent=String(Math.round(ue.speed*3.6)).padStart(3,"0"),le("#speed-bar").style.width=`${Math.min(100,ue.speed/30*100)}%`,le("#nitro-bar").style.width=`${ue.nitro}%`,le("#nitro-state").textContent=ue.nitro>5?"READY TO BURN":"RECHARGING",le("#air-time").textContent=`${ut.airtime.toFixed(1)}s`,le("#stunt-score").textContent=ut.currentPoints.toLocaleString(),le("#stunt-best").textContent=ut.bestScore.toLocaleString(),le("#level-hint").textContent=ut.isAirborne?ft.state.level?"LEVELING…":"F / LEVEL TO RIGHT":"",le("#touch-level").classList.toggle("active",ft.state.level??!1);const s=performance.now();gt.render(xt,zt),io=performance.now()-s;const o=performance.now()-n;if(qi+=o,oi=Math.max(oi,o),ri++,e-Xi>=1e3){const m=at.takePerformanceSample();window.__monsterMapMetrics={fps:Math.round(ri*1e3/(e-Xi)),frameMs:Math.round(qi/ri*10)/10,frameMsMax:Math.round(oi*10)/10,physicsMs:+ao.toFixed(2),renderMs:+io.toFixed(2),terrainSampleMs:+m.heightSampleMs.toFixed(3),terrainSamples:m.heightSamples,terrainTileBuildMs:+m.tileBuildMs.toFixed(3),terrainTileBuilds:m.tileBuilds,pixelRatio:gt.getPixelRatio(),graphicsQuality:qt,drawCalls:gt.info.render.calls,triangles:gt.info.render.triangles,geometries:gt.info.memory.geometries,textures:gt.info.memory.textures,heapMB:Hh(),audioState:ht.getState(),audioRms:+ht.outputRms().toFixed(4),audioMuted:ht.isMuted(),volume:ht.getMasterVolume(),speed:ue.speed,position:[ue.pos.x,ue.pos.y,ue.pos.z],destroyed:di,activeDebris:fn.activeCount,osmBuildings:Pt.status.buildings,osmRoads:Pt.status.roads,worldDataSource:Pt.status.source,yaw:ue.yaw,pitch:ue.pitch,roll:ue.roll,steer:ft.state.steer,throttle:ft.state.throttle,nitro:ft.state.nitro,jump:ft.state.jump,grounded:ue.grounded,activeTouchActions:ft.touches.size,frontWheelAngles:Zt.frontWheels.map(u=>u.rotation.y),rearWheelAngles:Zt.wheels.filter(u=>!Zt.frontWheels.includes(u)).map(u=>u.rotation.y),wheelContacts:ue.wheelContacts.filter(u=>u.contact).length,averageCompression:ue.wheelContacts.reduce((u,p)=>u+p.compression,0)/Math.max(1,ue.wheelContacts.length),contactPitch:ue.contactPitch,contactRoll:ue.contactRoll,terrainOriginHeight:at.heightAt(0,0),stuntAirtime:ut.airtime,stuntPoints:ut.currentPoints,bestStunt:ut.bestScore,stuntRolls:ut.rolls,stuntFlips:ut.flips,leveling:ft.state.level??!1},ri=0,qi=0,oi=0,Xi=e}}function xi(){const e=Ea();gt.setPixelRatio(Math.min(devicePixelRatio||1,Sa(qt))),gt.setSize(e.width,e.height),zt.aspect=e.width/Math.max(1,e.height),zt.updateProjectionMatrix(),$t?.resize()}window.addEventListener("resize",xi);window.addEventListener("orientationchange",()=>setTimeout(xi,180));window.visualViewport?.addEventListener("resize",xi);const Ho=le("#game");Ho.addEventListener("webglcontextlost",e=>{e.preventDefault(),ft.releaseAll(),Wt=!0,le("#pause-panel").classList.remove("hidden"),Ft(),Ot("Graphics paused. Return to the game when ready.")});Ho.addEventListener("webglcontextrestored",()=>{$n=performance.now(),xi(),Ot("Graphics restored.")});await Mi(Mn);requestAnimationFrame(Go);
