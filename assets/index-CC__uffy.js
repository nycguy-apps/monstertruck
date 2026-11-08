const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./collision-world-CtPx0JAz.js","./three.core-BQPXSg0h.js"])))=>i.map(i=>d[i]);
import{c as gs,N as tn,S as yo,C as Ye,F as Po,M as kt,V as ce,R as _s,a as Tt,w as oa,W as Za,b as yn,d as ht,L as bn,H as bi,U as Sn,D as Dt,B as wt,e as $n,f as Ai,p as vs,E as Ss,g as ct,P as zn,A as Ms,h as Ui,i as qt,j as Mi,k as wa,l as Zn,m as jn,n as Lo,o as Es,q as xn,r as Ei,s as xs,t as Ts,u as On,O as bs,v as As,x as Rs,y as ws,z as Cs,G as ys,I as Ps,J as Ls,K as Ds,Q as Us,T as Is,X as Ns,Y as Os,Z as Fs,_ as Bs,$ as Gs,a0 as Hs,a1 as ks,a2 as Ii,a3 as An,a4 as ri,a5 as Vs,a6 as Wn,a7 as zs,a8 as Ws,a9 as Xs,aa as qs,ab as Do,ac as Ys,ad as Ks,ae as $s,af as Zs,ag as qe,ah as js,ai as Qs,aj as Js,ak as Zt,al as nn,am as It,an as ft,ao as Uo,ap as gn,aq as Wt,ar as xi,as as Io,at as No,au as Oo,av as Fo,aw as el,ax as tl,ay as nl,az as il,aA as Bo,aB as hn,aC as al,aD as rl,aE as ol,aF as Go,aG as sl,aH as Ho,aI as ko,aJ as Ni,aK as Oi,aL as Fi,aM as Bi,aN as at,aO as ja,aP as Qa,aQ as Ja,aR as er,aS as tr,aT as nr,aU as ir,aV as ar,aW as rr,aX as or,aY as sr,aZ as lr,a_ as cr,a$ as dr,b0 as ur,b1 as fr,b2 as hr,b3 as pr,b4 as mr,b5 as gr,b6 as _r,b7 as vr,b8 as Sr,b9 as Mr,ba as Er,bb as xr,bc as Tr,bd as br,be as sa,bf as la,bg as ca,bh as da,bi as ua,bj as fa,bk as ha,bl as ll,bm as Ar,bn as cl,bo as gi,bp as dl,bq as Rr,br as wr,bs as Cr,bt as pa,bu as ma,bv as ul,bw as Vo,bx as fl,by as Ri,bz as hl,bA as pl,bB as zo,bC as an,bD as yr,bE as wn,bF as Pr,bG as Wo,bH as Qn,bI as Pn,bJ as ml,bK as Ca,bL as gl,bM as _l,bN as vl,bO as Lr,bP as xt,bQ as Sl,bR as Ml,bS as El,bT as xl,bU as Tl,bV as Xo,bW as bl,bX as Al,bY as Rl,bZ as wl,b_ as Cl,b$ as yl,c0 as Pl,c1 as Ll,c2 as Dl,c3 as Ul,c4 as Il,c5 as Nl,c6 as Yt,c7 as vt,c8 as lt,c9 as ga,ca as _a,cb as qo,cc as Ol,cd as Fl,ce as Bl,cf as Xt,cg as Dr,ch as Gl,ci as Gi,cj as Ur,ck as Ir,cl as Nr,cm as Qt,cn as Yo,co as Hl,cp as kl,cq as Vl,cr as Ko,cs as zl,ct as Wl,cu as Xl,cv as ql}from"./three.core-BQPXSg0h.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const Yl="modulepreload",Kl=function(e,n){return new URL(e,n).href},Or={},va=function(n,t,i){let r=Promise.resolve();if(t&&t.length>0){let s=function(p){return Promise.all(p.map(d=>Promise.resolve(d).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const o=document.getElementsByTagName("link"),h=document.querySelector("meta[property=csp-nonce]"),f=h?.nonce||h?.getAttribute("nonce");r=s(t.map(p=>{if(p=Kl(p,i),p in Or)return;Or[p]=!0;const d=p.endsWith(".css"),g=d?'[rel="stylesheet"]':"";if(!!i)for(let x=o.length-1;x>=0;x--){const c=o[x];if(c.href===p&&(!d||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${p}"]${g}`))return;const T=document.createElement("link");if(T.rel=d?"stylesheet":Yl,d||(T.as="script"),T.crossOrigin="",T.href=p,f&&T.setAttribute("nonce",f),document.head.appendChild(T),d)return new Promise((x,c)=>{T.addEventListener("load",x),T.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${p}`)))})}))}function a(s){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s}return r.then(s=>{for(const o of s||[])o.status==="rejected"&&a(o.reason);return n().catch(a)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $o(){let e=null,n=!1,t=null,i=null;function r(a,s){t(a,s),i=e.requestAnimationFrame(r)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(r),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(a){t=a},setContext:function(a){e=a}}}function $l(e){const n=new WeakMap;function t(o,h){const f=o.array,p=o.usage,d=f.byteLength,g=e.createBuffer();e.bindBuffer(h,g),e.bufferData(h,f,p),o.onUploadCallback();let _;if(f instanceof Float32Array)_=e.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)_=e.HALF_FLOAT;else if(f instanceof Uint16Array)o.isFloat16BufferAttribute?_=e.HALF_FLOAT:_=e.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=e.SHORT;else if(f instanceof Uint32Array)_=e.UNSIGNED_INT;else if(f instanceof Int32Array)_=e.INT;else if(f instanceof Int8Array)_=e.BYTE;else if(f instanceof Uint8Array)_=e.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,h,f){const p=h.array,d=h.updateRanges;if(e.bindBuffer(f,o),d.length===0)e.bufferSubData(f,0,p);else{d.sort((_,T)=>_.start-T.start);let g=0;for(let _=1;_<d.length;_++){const T=d[g],x=d[_];x.start<=T.start+T.count+1?T.count=Math.max(T.count,x.start+x.count-T.start):(++g,d[g]=x)}d.length=g+1;for(let _=0,T=d.length;_<T;_++){const x=d[_];e.bufferSubData(f,x.start*p.BYTES_PER_ELEMENT,p,x.start,x.count)}h.clearUpdateRanges()}h.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),n.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const h=n.get(o);h&&(e.deleteBuffer(h.buffer),n.delete(o))}function s(o,h){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const p=n.get(o);(!p||p.version<o.version)&&n.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const f=n.get(o);if(f===void 0)n.set(o,t(o,h));else if(f.version<o.version){if(f.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,o,h),f.version=o.version}}return{get:r,remove:a,update:s}}var Zl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jl=`#ifdef USE_ALPHAHASH
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
#endif`,Ql=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ec=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nc=`#ifdef USE_AOMAP
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
#endif`,ic=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ac=`#ifdef USE_BATCHING
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
#endif`,rc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cc=`#ifdef USE_IRIDESCENCE
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
#endif`,dc=`#ifdef USE_BUMPMAP
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
#endif`,uc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_c=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vc=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sc=`#define PI 3.141592653589793
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
} // validated`,Mc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ec=`vec3 transformedNormal = objectNormal;
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
#endif`,xc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ac=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rc="gl_FragColor = linearToOutputTexel( gl_FragColor );",wc=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cc=`#ifdef USE_ENVMAP
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
#endif`,yc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pc=`#ifdef USE_ENVMAP
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
#endif`,Lc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dc=`#ifdef USE_ENVMAP
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
#endif`,Uc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ic=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Oc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fc=`#ifdef USE_GRADIENTMAP
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
}`,Bc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kc=`uniform bool receiveShadow;
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
#endif`,Vc=`#ifdef USE_ENVMAP
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
#endif`,zc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yc=`PhysicalMaterial material;
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
#endif`,Kc=`struct PhysicalMaterial {
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
}`,$c=`
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
#endif`,Zc=`#if defined( RE_IndirectDiffuse )
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
#endif`,jc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ed=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,td=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,id=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ad=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rd=`#if defined( USE_POINTS_UV )
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
#endif`,od=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ld=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ud=`#ifdef USE_MORPHTARGETS
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
#endif`,fd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_d=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vd=`#ifdef USE_NORMALMAP
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
#endif`,Sd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Md=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ed=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Td=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ad=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ld=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ud=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Id=`float getShadowMask() {
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
}`,Nd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Od=`#ifdef USE_SKINNING
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
#endif`,Fd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bd=`#ifdef USE_SKINNING
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
#endif`,Gd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zd=`#ifdef USE_TRANSMISSION
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
#endif`,Wd=`#ifdef USE_TRANSMISSION
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
#endif`,Xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $d=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zd=`uniform sampler2D t2D;
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
}`,jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tu=`#include <common>
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
}`,nu=`#if DEPTH_PACKING == 3200
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
}`,iu=`#define DISTANCE
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
}`,au=`#define DISTANCE
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
}`,ru=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ou=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,su=`uniform float scale;
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
}`,lu=`uniform vec3 diffuse;
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
}`,cu=`#include <common>
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
}`,du=`uniform vec3 diffuse;
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
}`,uu=`#define LAMBERT
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
}`,fu=`#define LAMBERT
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
}`,hu=`#define MATCAP
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
}`,pu=`#define MATCAP
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
}`,mu=`#define NORMAL
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
}`,gu=`#define NORMAL
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
}`,_u=`#define PHONG
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
}`,vu=`#define PHONG
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
}`,Su=`#define STANDARD
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
}`,Mu=`#define STANDARD
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
}`,Eu=`#define TOON
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
}`,xu=`#define TOON
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
}`,Tu=`uniform float size;
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
}`,bu=`uniform vec3 diffuse;
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
}`,Au=`#include <common>
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
}`,Ru=`uniform vec3 color;
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
}`,wu=`uniform float rotation;
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
}`,Cu=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:Zl,alphahash_pars_fragment:jl,alphamap_fragment:Ql,alphamap_pars_fragment:Jl,alphatest_fragment:ec,alphatest_pars_fragment:tc,aomap_fragment:nc,aomap_pars_fragment:ic,batching_pars_vertex:ac,batching_vertex:rc,begin_vertex:oc,beginnormal_vertex:sc,bsdfs:lc,iridescence_fragment:cc,bumpmap_pars_fragment:dc,clipping_planes_fragment:uc,clipping_planes_pars_fragment:fc,clipping_planes_pars_vertex:hc,clipping_planes_vertex:pc,color_fragment:mc,color_pars_fragment:gc,color_pars_vertex:_c,color_vertex:vc,common:Sc,cube_uv_reflection_fragment:Mc,defaultnormal_vertex:Ec,displacementmap_pars_vertex:xc,displacementmap_vertex:Tc,emissivemap_fragment:bc,emissivemap_pars_fragment:Ac,colorspace_fragment:Rc,colorspace_pars_fragment:wc,envmap_fragment:Cc,envmap_common_pars_fragment:yc,envmap_pars_fragment:Pc,envmap_pars_vertex:Lc,envmap_physical_pars_fragment:Vc,envmap_vertex:Dc,fog_vertex:Uc,fog_pars_vertex:Ic,fog_fragment:Nc,fog_pars_fragment:Oc,gradientmap_pars_fragment:Fc,lightmap_pars_fragment:Bc,lights_lambert_fragment:Gc,lights_lambert_pars_fragment:Hc,lights_pars_begin:kc,lights_toon_fragment:zc,lights_toon_pars_fragment:Wc,lights_phong_fragment:Xc,lights_phong_pars_fragment:qc,lights_physical_fragment:Yc,lights_physical_pars_fragment:Kc,lights_fragment_begin:$c,lights_fragment_maps:Zc,lights_fragment_end:jc,logdepthbuf_fragment:Qc,logdepthbuf_pars_fragment:Jc,logdepthbuf_pars_vertex:ed,logdepthbuf_vertex:td,map_fragment:nd,map_pars_fragment:id,map_particle_fragment:ad,map_particle_pars_fragment:rd,metalnessmap_fragment:od,metalnessmap_pars_fragment:sd,morphinstance_vertex:ld,morphcolor_vertex:cd,morphnormal_vertex:dd,morphtarget_pars_vertex:ud,morphtarget_vertex:fd,normal_fragment_begin:hd,normal_fragment_maps:pd,normal_pars_fragment:md,normal_pars_vertex:gd,normal_vertex:_d,normalmap_pars_fragment:vd,clearcoat_normal_fragment_begin:Sd,clearcoat_normal_fragment_maps:Md,clearcoat_pars_fragment:Ed,iridescence_pars_fragment:xd,opaque_fragment:Td,packing:bd,premultiplied_alpha_fragment:Ad,project_vertex:Rd,dithering_fragment:wd,dithering_pars_fragment:Cd,roughnessmap_fragment:yd,roughnessmap_pars_fragment:Pd,shadowmap_pars_fragment:Ld,shadowmap_pars_vertex:Dd,shadowmap_vertex:Ud,shadowmask_pars_fragment:Id,skinbase_vertex:Nd,skinning_pars_vertex:Od,skinning_vertex:Fd,skinnormal_vertex:Bd,specularmap_fragment:Gd,specularmap_pars_fragment:Hd,tonemapping_fragment:kd,tonemapping_pars_fragment:Vd,transmission_fragment:zd,transmission_pars_fragment:Wd,uv_pars_fragment:Xd,uv_pars_vertex:qd,uv_vertex:Yd,worldpos_vertex:Kd,background_vert:$d,background_frag:Zd,backgroundCube_vert:jd,backgroundCube_frag:Qd,cube_vert:Jd,cube_frag:eu,depth_vert:tu,depth_frag:nu,distanceRGBA_vert:iu,distanceRGBA_frag:au,equirect_vert:ru,equirect_frag:ou,linedashed_vert:su,linedashed_frag:lu,meshbasic_vert:cu,meshbasic_frag:du,meshlambert_vert:uu,meshlambert_frag:fu,meshmatcap_vert:hu,meshmatcap_frag:pu,meshnormal_vert:mu,meshnormal_frag:gu,meshphong_vert:_u,meshphong_frag:vu,meshphysical_vert:Su,meshphysical_frag:Mu,meshtoon_vert:Eu,meshtoon_frag:xu,points_vert:Tu,points_frag:bu,shadow_vert:Au,shadow_frag:Ru,sprite_vert:wu,sprite_frag:Cu},pe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Bt={basic:{uniforms:xt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:xt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:xt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:xt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:xt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:xt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:xt([pe.points,pe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:xt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:xt([pe.common,pe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:xt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:xt([pe.sprite,pe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:xt([pe.common,pe.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:xt([pe.lights,pe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Bt.physical={uniforms:xt([Bt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const oi={r:0,b:0,g:0},cn=new wn,yu=new kt;function Pu(e,n,t,i,r,a,s){const o=new Ye(0);let h=a===!0?0:1,f,p,d=null,g=0,_=null;function T(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?t:n).get(E)),E}function x(b){let E=!1;const w=T(b);w===null?l(o,h):w&&w.isColor&&(l(w,1),E=!0);const C=e.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function c(b,E){const w=T(E);w&&(w.isCubeTexture||w.mapping===Ri)?(p===void 0&&(p=new ft(new an(1,1,1),new Zt({name:"BackgroundCubeMaterial",uniforms:yr(Bt.backgroundCube.uniforms),vertexShader:Bt.backgroundCube.vertexShader,fragmentShader:Bt.backgroundCube.fragmentShader,side:wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(C,U,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),cn.copy(E.backgroundRotation),cn.x*=-1,cn.y*=-1,cn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(cn.y*=-1,cn.z*=-1),p.material.uniforms.envMap.value=w,p.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(yu.makeRotationFromEuler(cn)),p.material.toneMapped=ht.getTransfer(w.colorSpace)!==at,(d!==w||g!==w.version||_!==e.toneMapping)&&(p.material.needsUpdate=!0,d=w,g=w.version,_=e.toneMapping),p.layers.enableAll(),b.unshift(p,p.geometry,p.material,0,0,null)):w&&w.isTexture&&(f===void 0&&(f=new ft(new Fo(2,2),new Zt({name:"BackgroundMaterial",uniforms:yr(Bt.background.uniforms),vertexShader:Bt.background.vertexShader,fragmentShader:Bt.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=w,f.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,f.material.toneMapped=ht.getTransfer(w.colorSpace)!==at,w.matrixAutoUpdate===!0&&w.updateMatrix(),f.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||g!==w.version||_!==e.toneMapping)&&(f.material.needsUpdate=!0,d=w,g=w.version,_=e.toneMapping),f.layers.enableAll(),b.unshift(f,f.geometry,f.material,0,0,null))}function l(b,E){b.getRGB(oi,zo(e)),i.buffers.color.setClear(oi.r,oi.g,oi.b,E,s)}function A(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,E=1){o.set(b),h=E,l(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(b){h=b,l(o,h)},render:x,addToRenderList:c,dispose:A}}function Lu(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},r=g(null);let a=r,s=!1;function o(M,P,F,z,Y){let K=!1;const X=d(z,F,P);a!==X&&(a=X,f(a.object)),K=_(M,z,F,Y),K&&T(M,z,F,Y),Y!==null&&n.update(Y,e.ELEMENT_ARRAY_BUFFER),(K||s)&&(s=!1,E(M,P,F,z),Y!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(Y).buffer))}function h(){return e.createVertexArray()}function f(M){return e.bindVertexArray(M)}function p(M){return e.deleteVertexArray(M)}function d(M,P,F){const z=F.wireframe===!0;let Y=i[M.id];Y===void 0&&(Y={},i[M.id]=Y);let K=Y[P.id];K===void 0&&(K={},Y[P.id]=K);let X=K[z];return X===void 0&&(X=g(h()),K[z]=X),X}function g(M){const P=[],F=[],z=[];for(let Y=0;Y<t;Y++)P[Y]=0,F[Y]=0,z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:z,object:M,attributes:{},index:null}}function _(M,P,F,z){const Y=a.attributes,K=P.attributes;let X=0;const re=F.getAttributes();for(const H in re)if(re[H].location>=0){const Ae=Y[H];let Ce=K[H];if(Ce===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(Ce=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(Ce=M.instanceColor)),Ae===void 0||Ae.attribute!==Ce||Ce&&Ae.data!==Ce.data)return!0;X++}return a.attributesNum!==X||a.index!==z}function T(M,P,F,z){const Y={},K=P.attributes;let X=0;const re=F.getAttributes();for(const H in re)if(re[H].location>=0){let Ae=K[H];Ae===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(Ae=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(Ae=M.instanceColor));const Ce={};Ce.attribute=Ae,Ae&&Ae.data&&(Ce.data=Ae.data),Y[H]=Ce,X++}a.attributes=Y,a.attributesNum=X,a.index=z}function x(){const M=a.newAttributes;for(let P=0,F=M.length;P<F;P++)M[P]=0}function c(M){l(M,0)}function l(M,P){const F=a.newAttributes,z=a.enabledAttributes,Y=a.attributeDivisors;F[M]=1,z[M]===0&&(e.enableVertexAttribArray(M),z[M]=1),Y[M]!==P&&(e.vertexAttribDivisor(M,P),Y[M]=P)}function A(){const M=a.newAttributes,P=a.enabledAttributes;for(let F=0,z=P.length;F<z;F++)P[F]!==M[F]&&(e.disableVertexAttribArray(F),P[F]=0)}function b(M,P,F,z,Y,K,X){X===!0?e.vertexAttribIPointer(M,P,F,Y,K):e.vertexAttribPointer(M,P,F,z,Y,K)}function E(M,P,F,z){x();const Y=z.attributes,K=F.getAttributes(),X=P.defaultAttributeValues;for(const re in K){const H=K[re];if(H.location>=0){let ve=Y[re];if(ve===void 0&&(re==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),re==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor)),ve!==void 0){const Ae=ve.normalized,Ce=ve.itemSize,Ve=n.get(ve);if(Ve===void 0)continue;const We=Ve.buffer,Pe=Ve.type,Fe=Ve.bytesPerElement,W=Pe===e.INT||Pe===e.UNSIGNED_INT||ve.gpuType===Bo;if(ve.isInterleavedBufferAttribute){const Q=ve.data,Ee=Q.stride,Ie=ve.offset;if(Q.isInstancedInterleavedBuffer){for(let Re=0;Re<H.locationSize;Re++)l(H.location+Re,Q.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Re=0;Re<H.locationSize;Re++)c(H.location+Re);e.bindBuffer(e.ARRAY_BUFFER,We);for(let Re=0;Re<H.locationSize;Re++)b(H.location+Re,Ce/H.locationSize,Pe,Ae,Ee*Fe,(Ie+Ce/H.locationSize*Re)*Fe,W)}else{if(ve.isInstancedBufferAttribute){for(let Q=0;Q<H.locationSize;Q++)l(H.location+Q,ve.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Q=0;Q<H.locationSize;Q++)c(H.location+Q);e.bindBuffer(e.ARRAY_BUFFER,We);for(let Q=0;Q<H.locationSize;Q++)b(H.location+Q,Ce/H.locationSize,Pe,Ae,Ce*Fe,Ce/H.locationSize*Q*Fe,W)}}else if(X!==void 0){const Ae=X[re];if(Ae!==void 0)switch(Ae.length){case 2:e.vertexAttrib2fv(H.location,Ae);break;case 3:e.vertexAttrib3fv(H.location,Ae);break;case 4:e.vertexAttrib4fv(H.location,Ae);break;default:e.vertexAttrib1fv(H.location,Ae)}}}}A()}function w(){L();for(const M in i){const P=i[M];for(const F in P){const z=P[F];for(const Y in z)p(z[Y].object),delete z[Y];delete P[F]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const P=i[M.id];for(const F in P){const z=P[F];for(const Y in z)p(z[Y].object),delete z[Y];delete P[F]}delete i[M.id]}function U(M){for(const P in i){const F=i[P];if(F[M.id]===void 0)continue;const z=F[M.id];for(const Y in z)p(z[Y].object),delete z[Y];delete F[M.id]}}function L(){v(),s=!0,a!==r&&(a=r,f(a.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:v,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:c,disableUnusedAttributes:A}}function Du(e,n,t){let i;function r(f){i=f}function a(f,p){e.drawArrays(i,f,p),t.update(p,i,1)}function s(f,p,d){d!==0&&(e.drawArraysInstanced(i,f,p,d),t.update(p,i,d))}function o(f,p,d){if(d===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,p,0,d);let _=0;for(let T=0;T<d;T++)_+=p[T];t.update(_,i,1)}function h(f,p,d,g){if(d===0)return;const _=n.get("WEBGL_multi_draw");if(_===null)for(let T=0;T<f.length;T++)s(f[T],p[T],g[T]);else{_.multiDrawArraysInstancedWEBGL(i,f,0,p,0,g,0,d);let T=0;for(let x=0;x<d;x++)T+=p[x]*g[x];t.update(T,i,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=h}function Uu(e,n,t,i){let r;function a(){if(r!==void 0)return r;if(n.has("EXT_texture_filter_anisotropic")===!0){const U=n.get("EXT_texture_filter_anisotropic");r=e.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(U){return!(U!==qt&&i.convert(U)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(U){const L=U===bi&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(U!==Sn&&i.convert(U)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==hn&&!L)}function h(U){if(U==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const p=h(f);p!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);const d=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),_=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),T=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),c=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),l=e.getParameter(e.MAX_VERTEX_ATTRIBS),A=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),b=e.getParameter(e.MAX_VARYING_VECTORS),E=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),w=T>0,C=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:s,textureTypeReadable:o,precision:f,logarithmicDepthBuffer:d,reversedDepthBuffer:g,maxTextures:_,maxVertexTextures:T,maxTextureSize:x,maxCubemapSize:c,maxAttributes:l,maxVertexUniforms:A,maxVaryings:b,maxFragmentUniforms:E,vertexTextures:w,maxSamples:C}}function Iu(e){const n=this;let t=null,i=0,r=!1,a=!1;const s=new Zs,o=new qe,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(d,g){const _=d.length!==0||g||i!==0||r;return r=g,i=d.length,_},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,g){t=p(d,g,0)},this.setState=function(d,g,_){const T=d.clippingPlanes,x=d.clipIntersection,c=d.clipShadows,l=e.get(d);if(!r||T===null||T.length===0||a&&!c)a?p(null):f();else{const A=a?0:i,b=A*4;let E=l.clippingState||null;h.value=E,E=p(T,g,b,_);for(let w=0;w!==b;++w)E[w]=t[w];l.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function f(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function p(d,g,_,T){const x=d!==null?d.length:0;let c=null;if(x!==0){if(c=h.value,T!==!0||c===null){const l=_+x*4,A=g.matrixWorldInverse;o.getNormalMatrix(A),(c===null||c.length<l)&&(c=new Float32Array(l));for(let b=0,E=_;b!==x;++b,E+=4)s.copy(d[b]).applyMatrix4(A,o),s.normal.toArray(c,E),c[E+3]=s.constant}h.value=c,h.needsUpdate=!0}return n.numPlanes=x,n.numIntersection=0,c}}function Nu(e){let n=new WeakMap;function t(s,o){return o===pa?s.mapping=Qn:o===ma&&(s.mapping=Pn),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===pa||o===ma)if(n.has(s)){const h=n.get(s).texture;return t(h,s.mapping)}else{const h=s.image;if(h&&h.height>0){const f=new ul(h.height);return f.fromEquirectangularTexture(e,s),n.set(s,f),s.addEventListener("dispose",r),t(f.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const h=n.get(o);h!==void 0&&(n.delete(o),h.dispose())}function a(){n=new WeakMap}return{get:i,dispose:a}}const Rn=4,Fr=[.125,.215,.35,.446,.526,.582],fn=20,Hi=new ml,Br=new Ye;let ki=null,Vi=0,zi=0,Wi=!1;const un=(1+Math.sqrt(5))/2,En=1/un,Gr=[new ce(-un,En,0),new ce(un,En,0),new ce(-En,0,un),new ce(En,0,un),new ce(0,un,-En),new ce(0,un,En),new ce(-1,1,-1),new ce(1,1,-1),new ce(-1,1,1),new ce(1,1,1)],Ou=new ce;class Hr{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,t=0,i=.1,r=100,a={}){const{size:s=256,position:o=Ou}=a;ki=this._renderer.getRenderTarget(),Vi=this._renderer.getActiveCubeFace(),zi=this._renderer.getActiveMipmapLevel(),Wi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(n,i,r,h,o),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(ki,Vi,zi),this._renderer.xr.enabled=Wi,n.scissorTest=!1,si(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===Qn||n.mapping===Pn?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),ki=this._renderer.getRenderTarget(),Vi=this._renderer.getActiveCubeFace(),zi=this._renderer.getActiveMipmapLevel(),Wi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:An,minFilter:An,generateMipmaps:!1,type:bi,format:qt,colorSpace:Ai,depthBuffer:!1},r=kr(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kr(n,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fu(a)),this._blurMaterial=Bu(a,n,t)}return r}_compileMaterial(n){const t=new ft(this._lodPlanes[0],n);this._renderer.compile(t,Hi)}_sceneToCubeUV(n,t,i,r,a){const h=new zn(90,1,t,i),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],d=this._renderer,g=d.autoClear,_=d.toneMapping;d.getClearColor(Br),d.toneMapping=tn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const x=new Ca({name:"PMREM.Background",side:wt,depthWrite:!1,depthTest:!1}),c=new ft(new an,x);let l=!1;const A=n.background;A?A.isColor&&(x.color.copy(A),n.background=null,l=!0):(x.color.copy(Br),l=!0);for(let b=0;b<6;b++){const E=b%3;E===0?(h.up.set(0,f[b],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x+p[b],a.y,a.z)):E===1?(h.up.set(0,0,f[b]),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y+p[b],a.z)):(h.up.set(0,f[b],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y,a.z+p[b]));const w=this._cubeSize;si(r,E*w,b>2?w:0,w,w),d.setRenderTarget(r),l&&d.render(c,h),d.render(n,h)}c.geometry.dispose(),c.material.dispose(),d.toneMapping=_,d.autoClear=g,n.background=A}_textureToCubeUV(n,t){const i=this._renderer,r=n.mapping===Qn||n.mapping===Pn;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zr()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vr());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new ft(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=n;const h=this._cubeSize;si(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(s,Hi)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Gr[(r-a-1)%Gr.length];this._blur(n,a-1,a,s,o)}t.autoClear=i}_blur(n,t,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(n,s,t,i,r,"latitudinal",a),this._halfBlur(s,n,i,i,r,"longitudinal",a)}_halfBlur(n,t,i,r,a,s,o){const h=this._renderer,f=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,d=new ft(this._lodPlanes[r],f),g=f.uniforms,_=this._sizeLods[i]-1,T=isFinite(a)?Math.PI/(2*_):2*Math.PI/(2*fn-1),x=a/T,c=isFinite(a)?1+Math.floor(p*x):fn;c>fn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${c} samples when the maximum is set to ${fn}`);const l=[];let A=0;for(let U=0;U<fn;++U){const L=U/x,v=Math.exp(-L*L/2);l.push(v),U===0?A+=v:U<c&&(A+=2*v)}for(let U=0;U<l.length;U++)l[U]=l[U]/A;g.envMap.value=n.texture,g.samples.value=c,g.weights.value=l,g.latitudinal.value=s==="latitudinal",o&&(g.poleAxis.value=o);const{_lodMax:b}=this;g.dTheta.value=T,g.mipInt.value=b-i;const E=this._sizeLods[r],w=3*E*(r>b-Rn?r-b+Rn:0),C=4*(this._cubeSize-E);si(t,w,C,3*E,2*E),h.setRenderTarget(t),h.render(d,Hi)}}function Fu(e){const n=[],t=[],i=[];let r=e;const a=e-Rn+1+Fr.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let h=1/o;s>e-Rn?h=Fr[s-e+Rn-1]:s===0&&(h=0),i.push(h);const f=1/(o-2),p=-f,d=1+f,g=[p,p,d,p,d,d,p,p,d,d,p,d],_=6,T=6,x=3,c=2,l=1,A=new Float32Array(x*T*_),b=new Float32Array(c*T*_),E=new Float32Array(l*T*_);for(let C=0;C<_;C++){const U=C%3*2/3-1,L=C>2?0:-1,v=[U,L,0,U+2/3,L,0,U+2/3,L+1,0,U,L,0,U+2/3,L+1,0,U,L+1,0];A.set(v,x*T*C),b.set(g,c*T*C);const M=[C,C,C,C,C,C];E.set(M,l*T*C)}const w=new nn;w.setAttribute("position",new It(A,x)),w.setAttribute("uv",new It(b,c)),w.setAttribute("faceIndex",new It(E,l)),n.push(w),r>Rn&&r--}return{lodPlanes:n,sizeLods:t,sigmas:i}}function kr(e,n,t){const i=new yn(e,n,t);return i.texture.mapping=Ri,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function si(e,n,t,i,r){e.viewport.set(n,t,i,r),e.scissor.set(n,t,i,r)}function Bu(e,n,t){const i=new Float32Array(fn),r=new ce(0,1,0);return new Zt({name:"SphericalGaussianBlur",defines:{n:fn,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ya(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Vr(){return new Zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ya(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function zr(){return new Zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function ya(){return`

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
	`}function Gu(e){let n=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const h=o.mapping,f=h===pa||h===ma,p=h===Qn||h===Pn;if(f||p){let d=n.get(o);const g=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==g)return t===null&&(t=new Hr(e)),d=f?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,n.set(o,d),d.texture;if(d!==void 0)return d.texture;{const _=o.image;return f&&_&&_.height>0||p&&_&&r(_)?(t===null&&(t=new Hr(e)),d=f?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,n.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function r(o){let h=0;const f=6;for(let p=0;p<f;p++)o[p]!==void 0&&h++;return h===f}function a(o){const h=o.target;h.removeEventListener("dispose",a);const f=n.get(h);f!==void 0&&(n.delete(h),f.dispose())}function s(){n=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function Hu(e){const n={};function t(i){if(n[i]!==void 0)return n[i];let r;switch(i){case"WEBGL_depth_texture":r=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=e.getExtension(i)}return n[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&oa("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ku(e,n,t,i){const r={},a=new WeakMap;function s(d){const g=d.target;g.index!==null&&n.remove(g.index);for(const T in g.attributes)n.remove(g.attributes[T]);g.removeEventListener("dispose",s),delete r[g.id];const _=a.get(g);_&&(n.remove(_),a.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function o(d,g){return r[g.id]===!0||(g.addEventListener("dispose",s),r[g.id]=!0,t.memory.geometries++),g}function h(d){const g=d.attributes;for(const _ in g)n.update(g[_],e.ARRAY_BUFFER)}function f(d){const g=[],_=d.index,T=d.attributes.position;let x=0;if(_!==null){const A=_.array;x=_.version;for(let b=0,E=A.length;b<E;b+=3){const w=A[b+0],C=A[b+1],U=A[b+2];g.push(w,C,C,U,U,w)}}else if(T!==void 0){const A=T.array;x=T.version;for(let b=0,E=A.length/3-1;b<E;b+=3){const w=b+0,C=b+1,U=b+2;g.push(w,C,C,U,U,w)}}else return;const c=new(vl(g)?gl:_l)(g,1);c.version=x;const l=a.get(d);l&&n.remove(l),a.set(d,c)}function p(d){const g=a.get(d);if(g){const _=d.index;_!==null&&g.version<_.version&&f(d)}else f(d);return a.get(d)}return{get:o,update:h,getWireframeAttribute:p}}function Vu(e,n,t){let i;function r(g){i=g}let a,s;function o(g){a=g.type,s=g.bytesPerElement}function h(g,_){e.drawElements(i,_,a,g*s),t.update(_,i,1)}function f(g,_,T){T!==0&&(e.drawElementsInstanced(i,_,a,g*s,T),t.update(_,i,T))}function p(g,_,T){if(T===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,_,0,a,g,0,T);let c=0;for(let l=0;l<T;l++)c+=_[l];t.update(c,i,1)}function d(g,_,T,x){if(T===0)return;const c=n.get("WEBGL_multi_draw");if(c===null)for(let l=0;l<g.length;l++)f(g[l]/s,_[l],x[l]);else{c.multiDrawElementsInstancedWEBGL(i,_,0,a,g,0,x,0,T);let l=0;for(let A=0;A<T;A++)l+=_[A]*x[A];t.update(l,i,1)}}this.setMode=r,this.setIndex=o,this.render=h,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=d}function zu(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case e.TRIANGLES:t.triangles+=o*(a/3);break;case e.LINES:t.lines+=o*(a/2);break;case e.LINE_STRIP:t.lines+=o*(a-1);break;case e.LINE_LOOP:t.lines+=o*a;break;case e.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Wu(e,n,t){const i=new WeakMap,r=new Tt;function a(s,o,h){const f=s.morphTargetInfluences,p=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=p!==void 0?p.length:0;let g=i.get(o);if(g===void 0||g.count!==d){let v=function(){U.dispose(),i.delete(o),o.removeEventListener("dispose",v)};g!==void 0&&g.texture.dispose();const _=o.morphAttributes.position!==void 0,T=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,c=o.morphAttributes.position||[],l=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let b=0;_===!0&&(b=1),T===!0&&(b=2),x===!0&&(b=3);let E=o.attributes.position.count*b,w=1;E>n.maxTextureSize&&(w=Math.ceil(E/n.maxTextureSize),E=n.maxTextureSize);const C=new Float32Array(E*w*4*d),U=new Vo(C,E,w,d);U.type=hn,U.needsUpdate=!0;const L=b*4;for(let M=0;M<d;M++){const P=c[M],F=l[M],z=A[M],Y=E*w*4*M;for(let K=0;K<P.count;K++){const X=K*L;_===!0&&(r.fromBufferAttribute(P,K),C[Y+X+0]=r.x,C[Y+X+1]=r.y,C[Y+X+2]=r.z,C[Y+X+3]=0),T===!0&&(r.fromBufferAttribute(F,K),C[Y+X+4]=r.x,C[Y+X+5]=r.y,C[Y+X+6]=r.z,C[Y+X+7]=0),x===!0&&(r.fromBufferAttribute(z,K),C[Y+X+8]=r.x,C[Y+X+9]=r.y,C[Y+X+10]=r.z,C[Y+X+11]=z.itemSize===4?r.w:1)}}g={count:d,texture:U,size:new ct(E,w)},i.set(o,g),o.addEventListener("dispose",v)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)h.getUniforms().setValue(e,"morphTexture",s.morphTexture,t);else{let _=0;for(let x=0;x<f.length;x++)_+=f[x];const T=o.morphTargetsRelative?1:1-_;h.getUniforms().setValue(e,"morphTargetBaseInfluence",T),h.getUniforms().setValue(e,"morphTargetInfluences",f)}h.getUniforms().setValue(e,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(e,"morphTargetsTextureSize",g.size)}return{update:a}}function Xu(e,n,t,i){let r=new WeakMap;function a(h){const f=i.render.frame,p=h.geometry,d=n.get(h,p);if(r.get(d)!==f&&(n.update(d),r.set(d,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",o)===!1&&h.addEventListener("dispose",o),r.get(h)!==f&&(t.update(h.instanceMatrix,e.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,e.ARRAY_BUFFER),r.set(h,f))),h.isSkinnedMesh){const g=h.skeleton;r.get(g)!==f&&(g.update(),r.set(g,f))}return d}function s(){r=new WeakMap}function o(h){const f=h.target;f.removeEventListener("dispose",o),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:s}}const Zo=new yl,Wr=new Lo(1,1),jo=new Vo,Qo=new Cl,Jo=new wl,Xr=[],qr=[],Yr=new Float32Array(16),Kr=new Float32Array(9),$r=new Float32Array(4);function Un(e,n,t){const i=e[0];if(i<=0||i>0)return e;const r=n*t;let a=Xr[r];if(a===void 0&&(a=new Float32Array(r),Xr[r]=a),n!==0){i.toArray(a,0);for(let s=1,o=0;s!==n;++s)o+=t,e[s].toArray(a,o)}return a}function pt(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function mt(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function wi(e,n){let t=qr[n];t===void 0&&(t=new Int32Array(n),qr[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function qu(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function Yu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(pt(t,n))return;e.uniform2fv(this.addr,n),mt(t,n)}}function Ku(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(pt(t,n))return;e.uniform3fv(this.addr,n),mt(t,n)}}function $u(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(pt(t,n))return;e.uniform4fv(this.addr,n),mt(t,n)}}function Zu(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(pt(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),mt(t,n)}else{if(pt(t,i))return;$r.set(i),e.uniformMatrix2fv(this.addr,!1,$r),mt(t,i)}}function ju(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(pt(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),mt(t,n)}else{if(pt(t,i))return;Kr.set(i),e.uniformMatrix3fv(this.addr,!1,Kr),mt(t,i)}}function Qu(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(pt(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),mt(t,n)}else{if(pt(t,i))return;Yr.set(i),e.uniformMatrix4fv(this.addr,!1,Yr),mt(t,i)}}function Ju(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function ef(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(pt(t,n))return;e.uniform2iv(this.addr,n),mt(t,n)}}function tf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(pt(t,n))return;e.uniform3iv(this.addr,n),mt(t,n)}}function nf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(pt(t,n))return;e.uniform4iv(this.addr,n),mt(t,n)}}function af(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function rf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(pt(t,n))return;e.uniform2uiv(this.addr,n),mt(t,n)}}function of(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(pt(t,n))return;e.uniform3uiv(this.addr,n),mt(t,n)}}function sf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(pt(t,n))return;e.uniform4uiv(this.addr,n),mt(t,n)}}function lf(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);let a;this.type===e.SAMPLER_2D_SHADOW?(Wr.compareFunction=Do,a=Wr):a=Zo,t.setTexture2D(n||a,r)}function cf(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(n||Qo,r)}function df(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(n||Jo,r)}function uf(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(n||jo,r)}function ff(e){switch(e){case 5126:return qu;case 35664:return Yu;case 35665:return Ku;case 35666:return $u;case 35674:return Zu;case 35675:return ju;case 35676:return Qu;case 5124:case 35670:return Ju;case 35667:case 35671:return ef;case 35668:case 35672:return tf;case 35669:case 35673:return nf;case 5125:return af;case 36294:return rf;case 36295:return of;case 36296:return sf;case 35678:case 36198:case 36298:case 36306:case 35682:return lf;case 35679:case 36299:case 36307:return cf;case 35680:case 36300:case 36308:case 36293:return df;case 36289:case 36303:case 36311:case 36292:return uf}}function hf(e,n){e.uniform1fv(this.addr,n)}function pf(e,n){const t=Un(n,this.size,2);e.uniform2fv(this.addr,t)}function mf(e,n){const t=Un(n,this.size,3);e.uniform3fv(this.addr,t)}function gf(e,n){const t=Un(n,this.size,4);e.uniform4fv(this.addr,t)}function _f(e,n){const t=Un(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function vf(e,n){const t=Un(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function Sf(e,n){const t=Un(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function Mf(e,n){e.uniform1iv(this.addr,n)}function Ef(e,n){e.uniform2iv(this.addr,n)}function xf(e,n){e.uniform3iv(this.addr,n)}function Tf(e,n){e.uniform4iv(this.addr,n)}function bf(e,n){e.uniform1uiv(this.addr,n)}function Af(e,n){e.uniform2uiv(this.addr,n)}function Rf(e,n){e.uniform3uiv(this.addr,n)}function wf(e,n){e.uniform4uiv(this.addr,n)}function Cf(e,n,t){const i=this.cache,r=n.length,a=wi(t,r);pt(i,a)||(e.uniform1iv(this.addr,a),mt(i,a));for(let s=0;s!==r;++s)t.setTexture2D(n[s]||Zo,a[s])}function yf(e,n,t){const i=this.cache,r=n.length,a=wi(t,r);pt(i,a)||(e.uniform1iv(this.addr,a),mt(i,a));for(let s=0;s!==r;++s)t.setTexture3D(n[s]||Qo,a[s])}function Pf(e,n,t){const i=this.cache,r=n.length,a=wi(t,r);pt(i,a)||(e.uniform1iv(this.addr,a),mt(i,a));for(let s=0;s!==r;++s)t.setTextureCube(n[s]||Jo,a[s])}function Lf(e,n,t){const i=this.cache,r=n.length,a=wi(t,r);pt(i,a)||(e.uniform1iv(this.addr,a),mt(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(n[s]||jo,a[s])}function Df(e){switch(e){case 5126:return hf;case 35664:return pf;case 35665:return mf;case 35666:return gf;case 35674:return _f;case 35675:return vf;case 35676:return Sf;case 5124:case 35670:return Mf;case 35667:case 35671:return Ef;case 35668:case 35672:return xf;case 35669:case 35673:return Tf;case 5125:return bf;case 36294:return Af;case 36295:return Rf;case 36296:return wf;case 35678:case 36198:case 36298:case 36306:case 35682:return Cf;case 35679:case 36299:case 36307:return yf;case 35680:case 36300:case 36308:case 36293:return Pf;case 36289:case 36303:case 36311:case 36292:return Lf}}class Uf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ff(t.type)}}class If{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Df(t.type)}}class Nf{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(n,t[o.id],i)}}}const Xi=/(\w+)(\])?(\[|\.)?/g;function Zr(e,n){e.seq.push(n),e.map[n.id]=n}function Of(e,n,t){const i=e.name,r=i.length;for(Xi.lastIndex=0;;){const a=Xi.exec(i),s=Xi.lastIndex;let o=a[1];const h=a[2]==="]",f=a[3];if(h&&(o=o|0),f===void 0||f==="["&&s+2===r){Zr(t,f===void 0?new Uf(o,e,n):new If(o,e,n));break}else{let d=t.map[o];d===void 0&&(d=new Nf(o),Zr(t,d)),t=d}}}class _i{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=n.getActiveUniform(t,r),s=n.getUniformLocation(t,a.name);Of(a,s,this)}}setValue(n,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(n,i,r)}setOptional(n,t,i){const r=t[i];r!==void 0&&this.setValue(n,i,r)}static upload(n,t,i,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],h=i[o.id];h.needsUpdate!==!1&&o.setValue(n,h.value,r)}}static seqWithValue(n,t){const i=[];for(let r=0,a=n.length;r!==a;++r){const s=n[r];s.id in t&&i.push(s)}return i}}function jr(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const Ff=37297;let Bf=0;function Gf(e,n){const t=e.split(`
`),i=[],r=Math.max(n-6,0),a=Math.min(n+6,t.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===n?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const Qr=new qe;function Hf(e){ht._getMatrix(Qr,ht.workingColorSpace,e);const n=`mat3( ${Qr.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(e)){case Wo:return[n,"LinearTransferOETF"];case at:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function Jr(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),a=(e.getShaderInfoLog(n)||"").trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+Gf(e.getShaderSource(n),o)}else return a}function kf(e,n){const t=Hf(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Vf(e,n){let t;switch(n){case Rl:t="Linear";break;case Al:t="Reinhard";break;case bl:t="Cineon";break;case Xo:t="ACESFilmic";break;case Tl:t="AgX";break;case xl:t="Neutral";break;case El:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),t="Linear"}return"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const li=new ce;function zf(){ht.getLuminanceCoefficients(li);const e=li.x.toFixed(4),n=li.y.toFixed(4),t=li.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wf(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kn).join(`
`)}function Xf(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function qf(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=e.getActiveAttrib(n,r),s=a.name;let o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:e.getAttribLocation(n,s),locationSize:o}}return t}function kn(e){return e!==""}function eo(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function to(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const Yf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sa(e){return e.replace(Yf,$f)}const Kf=new Map;function $f(e,n){let t=ke[n];if(t===void 0){const i=Kf.get(n);if(i!==void 0)t=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return Sa(t)}const Zf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function no(e){return e.replace(Zf,jf)}function jf(e,n,t,i){let r="";for(let a=parseInt(n);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function io(e){let n=`precision ${e.precision} float;
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
#define LOW_PRECISION`),n}function Qf(e){let n="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Uo?n="SHADOWMAP_TYPE_PCF":e.shadowMapType===Ml?n="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Wt&&(n="SHADOWMAP_TYPE_VSM"),n}function Jf(e){let n="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Qn:case Pn:n="ENVMAP_TYPE_CUBE";break;case Ri:n="ENVMAP_TYPE_CUBE_UV";break}return n}function eh(e){let n="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Pn:n="ENVMAP_MODE_REFRACTION";break}return n}function th(e){let n="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Ul:n="ENVMAP_BLENDING_MULTIPLY";break;case Dl:n="ENVMAP_BLENDING_MIX";break;case Ll:n="ENVMAP_BLENDING_ADD";break}return n}function nh(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function ih(e,n,t,i){const r=e.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const h=Qf(t),f=Jf(t),p=eh(t),d=th(t),g=nh(t),_=Wf(t),T=Xf(a),x=r.createProgram();let c,l,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(kn).join(`
`),c.length>0&&(c+=`
`),l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(kn).join(`
`),l.length>0&&(l+=`
`)):(c=[io(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kn).join(`
`),l=[io(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",t.envMap?"#define "+d:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==tn?"#define TONE_MAPPING":"",t.toneMapping!==tn?ke.tonemapping_pars_fragment:"",t.toneMapping!==tn?Vf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,kf("linearToOutputTexel",t.outputColorSpace),zf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(kn).join(`
`)),s=Sa(s),s=eo(s,t),s=to(s,t),o=Sa(o),o=eo(o,t),o=to(o,t),s=no(s),o=no(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,c=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,l=["#define varying in",t.glslVersion===Lr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const b=A+c+s,E=A+l+o,w=jr(r,r.VERTEX_SHADER,b),C=jr(r,r.FRAGMENT_SHADER,E);r.attachShader(x,w),r.attachShader(x,C),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function U(P){if(e.debug.checkShaderErrors){const F=r.getProgramInfoLog(x)||"",z=r.getShaderInfoLog(w)||"",Y=r.getShaderInfoLog(C)||"",K=F.trim(),X=z.trim(),re=Y.trim();let H=!0,ve=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(H=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,x,w,C);else{const Ae=Jr(r,w,"vertex"),Ce=Jr(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+K+`
`+Ae+`
`+Ce)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(X===""||re==="")&&(ve=!1);ve&&(P.diagnostics={runnable:H,programLog:K,vertexShader:{log:X,prefix:c},fragmentShader:{log:re,prefix:l}})}r.deleteShader(w),r.deleteShader(C),L=new _i(r,x),v=qf(r,x)}let L;this.getUniforms=function(){return L===void 0&&U(this),L};let v;this.getAttributes=function(){return v===void 0&&U(this),v};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,Ff)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Bf++,this.cacheKey=n,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=C,this}let ah=0;class rh{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(n);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new oh(n),t.set(n,i)),i}}class oh{constructor(n){this.id=ah++,this.code=n,this.usedTimes=0}}function sh(e,n,t,i,r,a,s){const o=new Sl,h=new rh,f=new Set,p=[],d=r.logarithmicDepthBuffer,g=r.vertexTextures;let _=r.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return f.add(v),v===0?"uv":`uv${v}`}function c(v,M,P,F,z){const Y=F.fog,K=z.geometry,X=v.isMeshStandardMaterial?F.environment:null,re=(v.isMeshStandardMaterial?t:n).get(v.envMap||X),H=re&&re.mapping===Ri?re.image.height:null,ve=T[v.type];v.precision!==null&&(_=r.getMaxPrecision(v.precision),_!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",_,"instead."));const Ae=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ce=Ae!==void 0?Ae.length:0;let Ve=0;K.morphAttributes.position!==void 0&&(Ve=1),K.morphAttributes.normal!==void 0&&(Ve=2),K.morphAttributes.color!==void 0&&(Ve=3);let We,Pe,Fe,W;if(ve){const Ke=Bt[ve];We=Ke.vertexShader,Pe=Ke.fragmentShader}else We=v.vertexShader,Pe=v.fragmentShader,h.update(v),Fe=h.getVertexShaderID(v),W=h.getFragmentShaderID(v);const Q=e.getRenderTarget(),Ee=e.state.buffers.depth.getReversed(),Ie=z.isInstancedMesh===!0,Re=z.isBatchedMesh===!0,He=!!v.map,gt=!!v.matcap,R=!!re,I=!!v.aoMap,se=!!v.lightMap,ne=!!v.bumpMap,le=!!v.normalMap,Be=!!v.displacementMap,de=!!v.emissiveMap,De=!!v.metalnessMap,tt=!!v.roughnessMap,$e=v.anisotropy>0,S=v.clearcoat>0,u=v.dispersion>0,O=v.iridescence>0,V=v.sheen>0,q=v.transmission>0,k=$e&&!!v.anisotropyMap,fe=S&&!!v.clearcoatMap,J=S&&!!v.clearcoatNormalMap,ge=S&&!!v.clearcoatRoughnessMap,_e=O&&!!v.iridescenceMap,Z=O&&!!v.iridescenceThicknessMap,oe=V&&!!v.sheenColorMap,we=V&&!!v.sheenRoughnessMap,Se=!!v.specularMap,he=!!v.specularColorMap,Oe=!!v.specularIntensityMap,y=q&&!!v.transmissionMap,te=q&&!!v.thicknessMap,ue=!!v.gradientMap,xe=!!v.alphaMap,ie=v.alphaTest>0,$=!!v.alphaHash,be=!!v.extensions;let Ge=tn;v.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ge=e.toneMapping);const nt={shaderID:ve,shaderType:v.type,shaderName:v.name,vertexShader:We,fragmentShader:Pe,defines:v.defines,customVertexShaderID:Fe,customFragmentShaderID:W,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:_,batching:Re,batchingColor:Re&&z._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&z.instanceColor!==null,instancingMorph:Ie&&z.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Q===null?e.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ai,alphaToCoverage:!!v.alphaToCoverage,map:He,matcap:gt,envMap:R,envMapMode:R&&re.mapping,envMapCubeUVHeight:H,aoMap:I,lightMap:se,bumpMap:ne,normalMap:le,displacementMap:g&&Be,emissiveMap:de,normalMapObjectSpace:le&&v.normalMapType===pl,normalMapTangentSpace:le&&v.normalMapType===hl,metalnessMap:De,roughnessMap:tt,anisotropy:$e,anisotropyMap:k,clearcoat:S,clearcoatMap:fe,clearcoatNormalMap:J,clearcoatRoughnessMap:ge,dispersion:u,iridescence:O,iridescenceMap:_e,iridescenceThicknessMap:Z,sheen:V,sheenColorMap:oe,sheenRoughnessMap:we,specularMap:Se,specularColorMap:he,specularIntensityMap:Oe,transmission:q,transmissionMap:y,thicknessMap:te,gradientMap:ue,opaque:v.transparent===!1&&v.blending===gi&&v.alphaToCoverage===!1,alphaMap:xe,alphaTest:ie,alphaHash:$,combine:v.combine,mapUv:He&&x(v.map.channel),aoMapUv:I&&x(v.aoMap.channel),lightMapUv:se&&x(v.lightMap.channel),bumpMapUv:ne&&x(v.bumpMap.channel),normalMapUv:le&&x(v.normalMap.channel),displacementMapUv:Be&&x(v.displacementMap.channel),emissiveMapUv:de&&x(v.emissiveMap.channel),metalnessMapUv:De&&x(v.metalnessMap.channel),roughnessMapUv:tt&&x(v.roughnessMap.channel),anisotropyMapUv:k&&x(v.anisotropyMap.channel),clearcoatMapUv:fe&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:J&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:we&&x(v.sheenRoughnessMap.channel),specularMapUv:Se&&x(v.specularMap.channel),specularColorMapUv:he&&x(v.specularColorMap.channel),specularIntensityMapUv:Oe&&x(v.specularIntensityMap.channel),transmissionMapUv:y&&x(v.transmissionMap.channel),thicknessMapUv:te&&x(v.thicknessMap.channel),alphaMapUv:xe&&x(v.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(le||$e),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!K.attributes.uv&&(He||xe),fog:!!Y,useFog:v.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ee,skinning:z.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:Ve,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:e.shadowMap.enabled&&P.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ge,decodeVideoTexture:He&&v.map.isVideoTexture===!0&&ht.getTransfer(v.map.colorSpace)===at,decodeVideoTextureEmissive:de&&v.emissiveMap.isVideoTexture===!0&&ht.getTransfer(v.emissiveMap.colorSpace)===at,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Dt,flipSided:v.side===wt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:be&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&v.extensions.multiDraw===!0||Re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return nt.vertexUv1s=f.has(1),nt.vertexUv2s=f.has(2),nt.vertexUv3s=f.has(3),f.clear(),nt}function l(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)M.push(P),M.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(A(M,v),b(M,v),M.push(e.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function A(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function b(v,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),v.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),v.push(o.mask)}function E(v){const M=T[v.type];let P;if(M){const F=Bt[M];P=fl.clone(F.uniforms)}else P=v.uniforms;return P}function w(v,M){let P;for(let F=0,z=p.length;F<z;F++){const Y=p[F];if(Y.cacheKey===M){P=Y,++P.usedTimes;break}}return P===void 0&&(P=new ih(e,M,v,a),p.push(P)),P}function C(v){if(--v.usedTimes===0){const M=p.indexOf(v);p[M]=p[p.length-1],p.pop(),v.destroy()}}function U(v){h.remove(v)}function L(){h.dispose()}return{getParameters:c,getProgramCacheKey:l,getUniforms:E,acquireProgram:w,releaseProgram:C,releaseShaderCache:U,programs:p,dispose:L}}function lh(){let e=new WeakMap;function n(s){return e.has(s)}function t(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function i(s){e.delete(s)}function r(s,o,h){e.get(s)[o]=h}function a(){e=new WeakMap}return{has:n,get:t,remove:i,update:r,dispose:a}}function ch(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.z!==n.z?e.z-n.z:e.id-n.id}function ao(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function ro(){const e=[];let n=0;const t=[],i=[],r=[];function a(){n=0,t.length=0,i.length=0,r.length=0}function s(d,g,_,T,x,c){let l=e[n];return l===void 0?(l={id:d.id,object:d,geometry:g,material:_,groupOrder:T,renderOrder:d.renderOrder,z:x,group:c},e[n]=l):(l.id=d.id,l.object=d,l.geometry=g,l.material=_,l.groupOrder=T,l.renderOrder=d.renderOrder,l.z=x,l.group=c),n++,l}function o(d,g,_,T,x,c){const l=s(d,g,_,T,x,c);_.transmission>0?i.push(l):_.transparent===!0?r.push(l):t.push(l)}function h(d,g,_,T,x,c){const l=s(d,g,_,T,x,c);_.transmission>0?i.unshift(l):_.transparent===!0?r.unshift(l):t.unshift(l)}function f(d,g){t.length>1&&t.sort(d||ch),i.length>1&&i.sort(g||ao),r.length>1&&r.sort(g||ao)}function p(){for(let d=n,g=e.length;d<g;d++){const _=e[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:o,unshift:h,finish:p,sort:f}}function dh(){let e=new WeakMap;function n(i,r){const a=e.get(i);let s;return a===void 0?(s=new ro,e.set(i,[s])):r>=a.length?(s=new ro,a.push(s)):s=a[r],s}function t(){e=new WeakMap}return{get:n,dispose:t}}function uh(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new ce,color:new Ye};break;case"SpotLight":t={position:new ce,direction:new ce,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ce,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ce,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return e[n.id]=t,t}}}function fh(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let hh=0;function ph(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function mh(e){const n=new uh,t=fh(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new ce);const r=new ce,a=new kt,s=new kt;function o(f){let p=0,d=0,g=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let _=0,T=0,x=0,c=0,l=0,A=0,b=0,E=0,w=0,C=0,U=0;f.sort(ph);for(let v=0,M=f.length;v<M;v++){const P=f[v],F=P.color,z=P.intensity,Y=P.distance,K=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)p+=F.r*z,d+=F.g*z,g+=F.b*z;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],z);U++}else if(P.isDirectionalLight){const X=n.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const re=P.shadow,H=t.get(P);H.shadowIntensity=re.intensity,H.shadowBias=re.bias,H.shadowNormalBias=re.normalBias,H.shadowRadius=re.radius,H.shadowMapSize=re.mapSize,i.directionalShadow[_]=H,i.directionalShadowMap[_]=K,i.directionalShadowMatrix[_]=P.shadow.matrix,A++}i.directional[_]=X,_++}else if(P.isSpotLight){const X=n.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(F).multiplyScalar(z),X.distance=Y,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[x]=X;const re=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,re.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[x]=re.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=re.intensity,H.shadowBias=re.bias,H.shadowNormalBias=re.normalBias,H.shadowRadius=re.radius,H.shadowMapSize=re.mapSize,i.spotShadow[x]=H,i.spotShadowMap[x]=K,E++}x++}else if(P.isRectAreaLight){const X=n.get(P);X.color.copy(F).multiplyScalar(z),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[c]=X,c++}else if(P.isPointLight){const X=n.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const re=P.shadow,H=t.get(P);H.shadowIntensity=re.intensity,H.shadowBias=re.bias,H.shadowNormalBias=re.normalBias,H.shadowRadius=re.radius,H.shadowMapSize=re.mapSize,H.shadowCameraNear=re.camera.near,H.shadowCameraFar=re.camera.far,i.pointShadow[T]=H,i.pointShadowMap[T]=K,i.pointShadowMatrix[T]=P.shadow.matrix,b++}i.point[T]=X,T++}else if(P.isHemisphereLight){const X=n.get(P);X.skyColor.copy(P.color).multiplyScalar(z),X.groundColor.copy(P.groundColor).multiplyScalar(z),i.hemi[l]=X,l++}}c>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=d,i.ambient[2]=g;const L=i.hash;(L.directionalLength!==_||L.pointLength!==T||L.spotLength!==x||L.rectAreaLength!==c||L.hemiLength!==l||L.numDirectionalShadows!==A||L.numPointShadows!==b||L.numSpotShadows!==E||L.numSpotMaps!==w||L.numLightProbes!==U)&&(i.directional.length=_,i.spot.length=x,i.rectArea.length=c,i.point.length=T,i.hemi.length=l,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+w-C,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=U,L.directionalLength=_,L.pointLength=T,L.spotLength=x,L.rectAreaLength=c,L.hemiLength=l,L.numDirectionalShadows=A,L.numPointShadows=b,L.numSpotShadows=E,L.numSpotMaps=w,L.numLightProbes=U,i.version=hh++)}function h(f,p){let d=0,g=0,_=0,T=0,x=0;const c=p.matrixWorldInverse;for(let l=0,A=f.length;l<A;l++){const b=f[l];if(b.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(c),d++}else if(b.isSpotLight){const E=i.spot[_];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(c),E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(c),_++}else if(b.isRectAreaLight){const E=i.rectArea[T];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(c),s.identity(),a.copy(b.matrixWorld),a.premultiply(c),s.extractRotation(a),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),T++}else if(b.isPointLight){const E=i.point[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(c),g++}else if(b.isHemisphereLight){const E=i.hemi[x];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(c),x++}}}return{setup:o,setupView:h,state:i}}function oo(e){const n=new mh(e),t=[],i=[];function r(p){f.camera=p,t.length=0,i.length=0}function a(p){t.push(p)}function s(p){i.push(p)}function o(){n.setup(t)}function h(p){n.setupView(t,p)}const f={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:r,state:f,setupLights:o,setupLightsView:h,pushLight:a,pushShadow:s}}function gh(e){let n=new WeakMap;function t(r,a=0){const s=n.get(r);let o;return s===void 0?(o=new oo(e),n.set(r,[o])):a>=s.length?(o=new oo(e),s.push(o)):o=s[a],o}function i(){n=new WeakMap}return{get:t,dispose:i}}const _h=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vh=`uniform sampler2D shadow_pass;
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
}`;function Sh(e,n,t){let i=new Po;const r=new ct,a=new ct,s=new Tt,o=new js({depthPacking:Qs}),h=new Js,f={},p=t.maxTextureSize,d={[$n]:wt,[wt]:$n,[Dt]:Dt},g=new Zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:_h,fragmentShader:vh}),_=g.clone();_.defines.HORIZONTAL_PASS=1;const T=new nn;T.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ft(T,g),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uo;let l=this.type;this.render=function(C,U,L){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||C.length===0)return;const v=e.getRenderTarget(),M=e.getActiveCubeFace(),P=e.getActiveMipmapLevel(),F=e.state;F.setBlending(gn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=l!==Wt&&this.type===Wt,Y=l===Wt&&this.type!==Wt;for(let K=0,X=C.length;K<X;K++){const re=C[K],H=re.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ve=H.getFrameExtents();if(r.multiply(ve),a.copy(H.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(a.x=Math.floor(p/ve.x),r.x=a.x*ve.x,H.mapSize.x=a.x),r.y>p&&(a.y=Math.floor(p/ve.y),r.y=a.y*ve.y,H.mapSize.y=a.y)),H.map===null||z===!0||Y===!0){const Ce=this.type!==Wt?{minFilter:Wn,magFilter:Wn}:{};H.map!==null&&H.map.dispose(),H.map=new yn(r.x,r.y,Ce),H.map.texture.name=re.name+".shadowMap",H.camera.updateProjectionMatrix()}e.setRenderTarget(H.map),e.clear();const Ae=H.getViewportCount();for(let Ce=0;Ce<Ae;Ce++){const Ve=H.getViewport(Ce);s.set(a.x*Ve.x,a.y*Ve.y,a.x*Ve.z,a.y*Ve.w),F.viewport(s),H.updateMatrices(re,Ce),i=H.getFrustum(),E(U,L,H.camera,re,this.type)}H.isPointLightShadow!==!0&&this.type===Wt&&A(H,L),H.needsUpdate=!1}l=this.type,c.needsUpdate=!1,e.setRenderTarget(v,M,P)};function A(C,U){const L=n.update(x);g.defines.VSM_SAMPLES!==C.blurSamples&&(g.defines.VSM_SAMPLES=C.blurSamples,_.defines.VSM_SAMPLES=C.blurSamples,g.needsUpdate=!0,_.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new yn(r.x,r.y)),g.uniforms.shadow_pass.value=C.map.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,e.setRenderTarget(C.mapPass),e.clear(),e.renderBufferDirect(U,null,L,g,x,null),_.uniforms.shadow_pass.value=C.mapPass.texture,_.uniforms.resolution.value=C.mapSize,_.uniforms.radius.value=C.radius,e.setRenderTarget(C.map),e.clear(),e.renderBufferDirect(U,null,L,_,x,null)}function b(C,U,L,v){let M=null;const P=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)M=P;else if(M=L.isPointLight===!0?h:o,e.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const F=M.uuid,z=U.uuid;let Y=f[F];Y===void 0&&(Y={},f[F]=Y);let K=Y[z];K===void 0&&(K=M.clone(),Y[z]=K,U.addEventListener("dispose",w)),M=K}if(M.visible=U.visible,M.wireframe=U.wireframe,v===Wt?M.side=U.shadowSide!==null?U.shadowSide:U.side:M.side=U.shadowSide!==null?U.shadowSide:d[U.side],M.alphaMap=U.alphaMap,M.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,M.map=U.map,M.clipShadows=U.clipShadows,M.clippingPlanes=U.clippingPlanes,M.clipIntersection=U.clipIntersection,M.displacementMap=U.displacementMap,M.displacementScale=U.displacementScale,M.displacementBias=U.displacementBias,M.wireframeLinewidth=U.wireframeLinewidth,M.linewidth=U.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=e.properties.get(M);F.light=L}return M}function E(C,U,L,v,M){if(C.visible===!1)return;if(C.layers.test(U.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Wt)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const z=n.update(C),Y=C.material;if(Array.isArray(Y)){const K=z.groups;for(let X=0,re=K.length;X<re;X++){const H=K[X],ve=Y[H.materialIndex];if(ve&&ve.visible){const Ae=b(C,ve,v,M);C.onBeforeShadow(e,C,U,L,z,Ae,H),e.renderBufferDirect(L,null,z,Ae,C,H),C.onAfterShadow(e,C,U,L,z,Ae,H)}}}else if(Y.visible){const K=b(C,Y,v,M);C.onBeforeShadow(e,C,U,L,z,K,null),e.renderBufferDirect(L,null,z,K,C,null),C.onAfterShadow(e,C,U,L,z,K,null)}}const F=C.children;for(let z=0,Y=F.length;z<Y;z++)E(F[z],U,L,v,M)}function w(C){C.target.removeEventListener("dispose",w);for(const L in f){const v=f[L],M=C.target.uuid;M in v&&(v[M].dispose(),delete v[M])}}}const Mh={[ha]:fa,[ua]:la,[da]:sa,[Ei]:ca,[fa]:ha,[la]:ua,[sa]:da,[ca]:Ei};function Eh(e,n){function t(){let y=!1;const te=new Tt;let ue=null;const xe=new Tt(0,0,0,0);return{setMask:function(ie){ue!==ie&&!y&&(e.colorMask(ie,ie,ie,ie),ue=ie)},setLocked:function(ie){y=ie},setClear:function(ie,$,be,Ge,nt){nt===!0&&(ie*=Ge,$*=Ge,be*=Ge),te.set(ie,$,be,Ge),xe.equals(te)===!1&&(e.clearColor(ie,$,be,Ge),xe.copy(te))},reset:function(){y=!1,ue=null,xe.set(-1,0,0,0)}}}function i(){let y=!1,te=!1,ue=null,xe=null,ie=null;return{setReversed:function($){if(te!==$){const be=n.get("EXT_clip_control");$?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),te=$;const Ge=ie;ie=null,this.setClear(Ge)}},getReversed:function(){return te},setTest:function($){$?Q(e.DEPTH_TEST):Ee(e.DEPTH_TEST)},setMask:function($){ue!==$&&!y&&(e.depthMask($),ue=$)},setFunc:function($){if(te&&($=Mh[$]),xe!==$){switch($){case ha:e.depthFunc(e.NEVER);break;case fa:e.depthFunc(e.ALWAYS);break;case ua:e.depthFunc(e.LESS);break;case Ei:e.depthFunc(e.LEQUAL);break;case da:e.depthFunc(e.EQUAL);break;case ca:e.depthFunc(e.GEQUAL);break;case la:e.depthFunc(e.GREATER);break;case sa:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}xe=$}},setLocked:function($){y=$},setClear:function($){ie!==$&&(te&&($=1-$),e.clearDepth($),ie=$)},reset:function(){y=!1,ue=null,xe=null,ie=null,te=!1}}}function r(){let y=!1,te=null,ue=null,xe=null,ie=null,$=null,be=null,Ge=null,nt=null;return{setTest:function(Ke){y||(Ke?Q(e.STENCIL_TEST):Ee(e.STENCIL_TEST))},setMask:function(Ke){te!==Ke&&!y&&(e.stencilMask(Ke),te=Ke)},setFunc:function(Ke,zt,Ft){(ue!==Ke||xe!==zt||ie!==Ft)&&(e.stencilFunc(Ke,zt,Ft),ue=Ke,xe=zt,ie=Ft)},setOp:function(Ke,zt,Ft){($!==Ke||be!==zt||Ge!==Ft)&&(e.stencilOp(Ke,zt,Ft),$=Ke,be=zt,Ge=Ft)},setLocked:function(Ke){y=Ke},setClear:function(Ke){nt!==Ke&&(e.clearStencil(Ke),nt=Ke)},reset:function(){y=!1,te=null,ue=null,xe=null,ie=null,$=null,be=null,Ge=null,nt=null}}}const a=new t,s=new i,o=new r,h=new WeakMap,f=new WeakMap;let p={},d={},g=new WeakMap,_=[],T=null,x=!1,c=null,l=null,A=null,b=null,E=null,w=null,C=null,U=new Ye(0,0,0),L=0,v=!1,M=null,P=null,F=null,z=null,Y=null;const K=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,re=0;const H=e.getParameter(e.VERSION);H.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=re>=1):H.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=re>=2);let ve=null,Ae={};const Ce=e.getParameter(e.SCISSOR_BOX),Ve=e.getParameter(e.VIEWPORT),We=new Tt().fromArray(Ce),Pe=new Tt().fromArray(Ve);function Fe(y,te,ue,xe){const ie=new Uint8Array(4),$=e.createTexture();e.bindTexture(y,$),e.texParameteri(y,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(y,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let be=0;be<ue;be++)y===e.TEXTURE_3D||y===e.TEXTURE_2D_ARRAY?e.texImage3D(te,0,e.RGBA,1,1,xe,0,e.RGBA,e.UNSIGNED_BYTE,ie):e.texImage2D(te+be,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ie);return $}const W={};W[e.TEXTURE_2D]=Fe(e.TEXTURE_2D,e.TEXTURE_2D,1),W[e.TEXTURE_CUBE_MAP]=Fe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[e.TEXTURE_2D_ARRAY]=Fe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),W[e.TEXTURE_3D]=Fe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Q(e.DEPTH_TEST),s.setFunc(Ei),ne(!1),le(Ar),Q(e.CULL_FACE),I(gn);function Q(y){p[y]!==!0&&(e.enable(y),p[y]=!0)}function Ee(y){p[y]!==!1&&(e.disable(y),p[y]=!1)}function Ie(y,te){return d[y]!==te?(e.bindFramebuffer(y,te),d[y]=te,y===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=te),y===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=te),!0):!1}function Re(y,te){let ue=_,xe=!1;if(y){ue=g.get(te),ue===void 0&&(ue=[],g.set(te,ue));const ie=y.textures;if(ue.length!==ie.length||ue[0]!==e.COLOR_ATTACHMENT0){for(let $=0,be=ie.length;$<be;$++)ue[$]=e.COLOR_ATTACHMENT0+$;ue.length=ie.length,xe=!0}}else ue[0]!==e.BACK&&(ue[0]=e.BACK,xe=!0);xe&&e.drawBuffers(ue)}function He(y){return T!==y?(e.useProgram(y),T=y,!0):!1}const gt={[On]:e.FUNC_ADD,[Ts]:e.FUNC_SUBTRACT,[xs]:e.FUNC_REVERSE_SUBTRACT};gt[Il]=e.MIN,gt[Nl]=e.MAX;const R={[Bs]:e.ZERO,[Fs]:e.ONE,[Os]:e.SRC_COLOR,[Ns]:e.SRC_ALPHA,[Is]:e.SRC_ALPHA_SATURATE,[Us]:e.DST_COLOR,[Ds]:e.DST_ALPHA,[Ls]:e.ONE_MINUS_SRC_COLOR,[Ps]:e.ONE_MINUS_SRC_ALPHA,[ys]:e.ONE_MINUS_DST_COLOR,[Cs]:e.ONE_MINUS_DST_ALPHA,[ws]:e.CONSTANT_COLOR,[Rs]:e.ONE_MINUS_CONSTANT_COLOR,[As]:e.CONSTANT_ALPHA,[bs]:e.ONE_MINUS_CONSTANT_ALPHA};function I(y,te,ue,xe,ie,$,be,Ge,nt,Ke){if(y===gn){x===!0&&(Ee(e.BLEND),x=!1);return}if(x===!1&&(Q(e.BLEND),x=!0),y!==dl){if(y!==c||Ke!==v){if((l!==On||E!==On)&&(e.blendEquation(e.FUNC_ADD),l=On,E=On),Ke)switch(y){case gi:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Cr:e.blendFunc(e.ONE,e.ONE);break;case wr:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Rr:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}else switch(y){case gi:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Cr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case wr:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rr:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}A=null,b=null,w=null,C=null,U.set(0,0,0),L=0,c=y,v=Ke}return}ie=ie||te,$=$||ue,be=be||xe,(te!==l||ie!==E)&&(e.blendEquationSeparate(gt[te],gt[ie]),l=te,E=ie),(ue!==A||xe!==b||$!==w||be!==C)&&(e.blendFuncSeparate(R[ue],R[xe],R[$],R[be]),A=ue,b=xe,w=$,C=be),(Ge.equals(U)===!1||nt!==L)&&(e.blendColor(Ge.r,Ge.g,Ge.b,nt),U.copy(Ge),L=nt),c=y,v=!1}function se(y,te){y.side===Dt?Ee(e.CULL_FACE):Q(e.CULL_FACE);let ue=y.side===wt;te&&(ue=!ue),ne(ue),y.blending===gi&&y.transparent===!1?I(gn):I(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),s.setFunc(y.depthFunc),s.setTest(y.depthTest),s.setMask(y.depthWrite),a.setMask(y.colorWrite);const xe=y.stencilWrite;o.setTest(xe),xe&&(o.setMask(y.stencilWriteMask),o.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),o.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),de(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?Q(e.SAMPLE_ALPHA_TO_COVERAGE):Ee(e.SAMPLE_ALPHA_TO_COVERAGE)}function ne(y){M!==y&&(y?e.frontFace(e.CW):e.frontFace(e.CCW),M=y)}function le(y){y!==ll?(Q(e.CULL_FACE),y!==P&&(y===Ar?e.cullFace(e.BACK):y===cl?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ee(e.CULL_FACE),P=y}function Be(y){y!==F&&(X&&e.lineWidth(y),F=y)}function de(y,te,ue){y?(Q(e.POLYGON_OFFSET_FILL),(z!==te||Y!==ue)&&(e.polygonOffset(te,ue),z=te,Y=ue)):Ee(e.POLYGON_OFFSET_FILL)}function De(y){y?Q(e.SCISSOR_TEST):Ee(e.SCISSOR_TEST)}function tt(y){y===void 0&&(y=e.TEXTURE0+K-1),ve!==y&&(e.activeTexture(y),ve=y)}function $e(y,te,ue){ue===void 0&&(ve===null?ue=e.TEXTURE0+K-1:ue=ve);let xe=Ae[ue];xe===void 0&&(xe={type:void 0,texture:void 0},Ae[ue]=xe),(xe.type!==y||xe.texture!==te)&&(ve!==ue&&(e.activeTexture(ue),ve=ue),e.bindTexture(y,te||W[y]),xe.type=y,xe.texture=te)}function S(){const y=Ae[ve];y!==void 0&&y.type!==void 0&&(e.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)}function u(){try{e.compressedTexImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function O(){try{e.compressedTexImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function V(){try{e.texSubImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function q(){try{e.texSubImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function k(){try{e.compressedTexSubImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function fe(){try{e.compressedTexSubImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function J(){try{e.texStorage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ge(){try{e.texStorage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function _e(){try{e.texImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Z(){try{e.texImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function oe(y){We.equals(y)===!1&&(e.scissor(y.x,y.y,y.z,y.w),We.copy(y))}function we(y){Pe.equals(y)===!1&&(e.viewport(y.x,y.y,y.z,y.w),Pe.copy(y))}function Se(y,te){let ue=f.get(te);ue===void 0&&(ue=new WeakMap,f.set(te,ue));let xe=ue.get(y);xe===void 0&&(xe=e.getUniformBlockIndex(te,y.name),ue.set(y,xe))}function he(y,te){const xe=f.get(te).get(y);h.get(te)!==xe&&(e.uniformBlockBinding(te,xe,y.__bindingPointIndex),h.set(te,xe))}function Oe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),p={},ve=null,Ae={},d={},g=new WeakMap,_=[],T=null,x=!1,c=null,l=null,A=null,b=null,E=null,w=null,C=null,U=new Ye(0,0,0),L=0,v=!1,M=null,P=null,F=null,z=null,Y=null,We.set(0,0,e.canvas.width,e.canvas.height),Pe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:Q,disable:Ee,bindFramebuffer:Ie,drawBuffers:Re,useProgram:He,setBlending:I,setMaterial:se,setFlipSided:ne,setCullFace:le,setLineWidth:Be,setPolygonOffset:de,setScissorTest:De,activeTexture:tt,bindTexture:$e,unbindTexture:S,compressedTexImage2D:u,compressedTexImage3D:O,texImage2D:_e,texImage3D:Z,updateUBOMapping:Se,uniformBlockBinding:he,texStorage2D:J,texStorage3D:ge,texSubImage2D:V,texSubImage3D:q,compressedTexSubImage2D:k,compressedTexSubImage3D:fe,scissor:oe,viewport:we,reset:Oe}}function xh(e,n,t,i,r,a,s){const o=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new ct,p=new WeakMap;let d;const g=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(S,u){return _?new OffscreenCanvas(S,u):Pl("canvas")}function x(S,u,O){let V=1;const q=$e(S);if((q.width>O||q.height>O)&&(V=O/Math.max(q.width,q.height)),V<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const k=Math.floor(V*q.width),fe=Math.floor(V*q.height);d===void 0&&(d=T(k,fe));const J=u?T(k,fe):d;return J.width=k,J.height=fe,J.getContext("2d").drawImage(S,0,0,k,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+k+"x"+fe+")."),J}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),S;return S}function c(S){return S.generateMipmaps}function l(S){e.generateMipmap(S)}function A(S){return S.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?e.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(S,u,O,V,q=!1){if(S!==null){if(e[S]!==void 0)return e[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let k=u;if(u===e.RED&&(O===e.FLOAT&&(k=e.R32F),O===e.HALF_FLOAT&&(k=e.R16F),O===e.UNSIGNED_BYTE&&(k=e.R8)),u===e.RED_INTEGER&&(O===e.UNSIGNED_BYTE&&(k=e.R8UI),O===e.UNSIGNED_SHORT&&(k=e.R16UI),O===e.UNSIGNED_INT&&(k=e.R32UI),O===e.BYTE&&(k=e.R8I),O===e.SHORT&&(k=e.R16I),O===e.INT&&(k=e.R32I)),u===e.RG&&(O===e.FLOAT&&(k=e.RG32F),O===e.HALF_FLOAT&&(k=e.RG16F),O===e.UNSIGNED_BYTE&&(k=e.RG8)),u===e.RG_INTEGER&&(O===e.UNSIGNED_BYTE&&(k=e.RG8UI),O===e.UNSIGNED_SHORT&&(k=e.RG16UI),O===e.UNSIGNED_INT&&(k=e.RG32UI),O===e.BYTE&&(k=e.RG8I),O===e.SHORT&&(k=e.RG16I),O===e.INT&&(k=e.RG32I)),u===e.RGB_INTEGER&&(O===e.UNSIGNED_BYTE&&(k=e.RGB8UI),O===e.UNSIGNED_SHORT&&(k=e.RGB16UI),O===e.UNSIGNED_INT&&(k=e.RGB32UI),O===e.BYTE&&(k=e.RGB8I),O===e.SHORT&&(k=e.RGB16I),O===e.INT&&(k=e.RGB32I)),u===e.RGBA_INTEGER&&(O===e.UNSIGNED_BYTE&&(k=e.RGBA8UI),O===e.UNSIGNED_SHORT&&(k=e.RGBA16UI),O===e.UNSIGNED_INT&&(k=e.RGBA32UI),O===e.BYTE&&(k=e.RGBA8I),O===e.SHORT&&(k=e.RGBA16I),O===e.INT&&(k=e.RGBA32I)),u===e.RGB&&(O===e.UNSIGNED_INT_5_9_9_9_REV&&(k=e.RGB9_E5),O===e.UNSIGNED_INT_10F_11F_11F_REV&&(k=e.R11F_G11F_B10F)),u===e.RGBA){const fe=q?Wo:ht.getTransfer(V);O===e.FLOAT&&(k=e.RGBA32F),O===e.HALF_FLOAT&&(k=e.RGBA16F),O===e.UNSIGNED_BYTE&&(k=fe===at?e.SRGB8_ALPHA8:e.RGBA8),O===e.UNSIGNED_SHORT_4_4_4_4&&(k=e.RGBA4),O===e.UNSIGNED_SHORT_5_5_5_1&&(k=e.RGB5_A1)}return(k===e.R16F||k===e.R32F||k===e.RG16F||k===e.RG32F||k===e.RGBA16F||k===e.RGBA32F)&&n.get("EXT_color_buffer_float"),k}function E(S,u){let O;return S?u===null||u===jn||u===Zn?O=e.DEPTH24_STENCIL8:u===hn?O=e.DEPTH32F_STENCIL8:u===xi&&(O=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):u===null||u===jn||u===Zn?O=e.DEPTH_COMPONENT24:u===hn?O=e.DEPTH_COMPONENT32F:u===xi&&(O=e.DEPTH_COMPONENT16),O}function w(S,u){return c(S)===!0||S.isFramebufferTexture&&S.minFilter!==Wn&&S.minFilter!==An?Math.log2(Math.max(u.width,u.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?u.mipmaps.length:1}function C(S){const u=S.target;u.removeEventListener("dispose",C),L(u),u.isVideoTexture&&p.delete(u)}function U(S){const u=S.target;u.removeEventListener("dispose",U),M(u)}function L(S){const u=i.get(S);if(u.__webglInit===void 0)return;const O=S.source,V=g.get(O);if(V){const q=V[u.__cacheKey];q.usedTimes--,q.usedTimes===0&&v(S),Object.keys(V).length===0&&g.delete(O)}i.remove(S)}function v(S){const u=i.get(S);e.deleteTexture(u.__webglTexture);const O=S.source,V=g.get(O);delete V[u.__cacheKey],s.memory.textures--}function M(S){const u=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(u.__webglFramebuffer[V]))for(let q=0;q<u.__webglFramebuffer[V].length;q++)e.deleteFramebuffer(u.__webglFramebuffer[V][q]);else e.deleteFramebuffer(u.__webglFramebuffer[V]);u.__webglDepthbuffer&&e.deleteRenderbuffer(u.__webglDepthbuffer[V])}else{if(Array.isArray(u.__webglFramebuffer))for(let V=0;V<u.__webglFramebuffer.length;V++)e.deleteFramebuffer(u.__webglFramebuffer[V]);else e.deleteFramebuffer(u.__webglFramebuffer);if(u.__webglDepthbuffer&&e.deleteRenderbuffer(u.__webglDepthbuffer),u.__webglMultisampledFramebuffer&&e.deleteFramebuffer(u.__webglMultisampledFramebuffer),u.__webglColorRenderbuffer)for(let V=0;V<u.__webglColorRenderbuffer.length;V++)u.__webglColorRenderbuffer[V]&&e.deleteRenderbuffer(u.__webglColorRenderbuffer[V]);u.__webglDepthRenderbuffer&&e.deleteRenderbuffer(u.__webglDepthRenderbuffer)}const O=S.textures;for(let V=0,q=O.length;V<q;V++){const k=i.get(O[V]);k.__webglTexture&&(e.deleteTexture(k.__webglTexture),s.memory.textures--),i.remove(O[V])}i.remove(S)}let P=0;function F(){P=0}function z(){const S=P;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),P+=1,S}function Y(S){const u=[];return u.push(S.wrapS),u.push(S.wrapT),u.push(S.wrapR||0),u.push(S.magFilter),u.push(S.minFilter),u.push(S.anisotropy),u.push(S.internalFormat),u.push(S.format),u.push(S.type),u.push(S.generateMipmaps),u.push(S.premultiplyAlpha),u.push(S.flipY),u.push(S.unpackAlignment),u.push(S.colorSpace),u.join()}function K(S,u){const O=i.get(S);if(S.isVideoTexture&&De(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&O.__version!==S.version){const V=S.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(O,S,u);return}}else S.isExternalTexture&&(O.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,O.__webglTexture,e.TEXTURE0+u)}function X(S,u){const O=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){W(O,S,u);return}t.bindTexture(e.TEXTURE_2D_ARRAY,O.__webglTexture,e.TEXTURE0+u)}function re(S,u){const O=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){W(O,S,u);return}t.bindTexture(e.TEXTURE_3D,O.__webglTexture,e.TEXTURE0+u)}function H(S,u){const O=i.get(S);if(S.version>0&&O.__version!==S.version){Q(O,S,u);return}t.bindTexture(e.TEXTURE_CUBE_MAP,O.__webglTexture,e.TEXTURE0+u)}const ve={[ks]:e.REPEAT,[Hs]:e.CLAMP_TO_EDGE,[Gs]:e.MIRRORED_REPEAT},Ae={[Wn]:e.NEAREST,[Vs]:e.NEAREST_MIPMAP_NEAREST,[ri]:e.NEAREST_MIPMAP_LINEAR,[An]:e.LINEAR,[Ii]:e.LINEAR_MIPMAP_NEAREST,[bn]:e.LINEAR_MIPMAP_LINEAR},Ce={[$s]:e.NEVER,[Ks]:e.ALWAYS,[Ys]:e.LESS,[Do]:e.LEQUAL,[qs]:e.EQUAL,[Xs]:e.GEQUAL,[Ws]:e.GREATER,[zs]:e.NOTEQUAL};function Ve(S,u){if(u.type===hn&&n.has("OES_texture_float_linear")===!1&&(u.magFilter===An||u.magFilter===Ii||u.magFilter===ri||u.magFilter===bn||u.minFilter===An||u.minFilter===Ii||u.minFilter===ri||u.minFilter===bn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(S,e.TEXTURE_WRAP_S,ve[u.wrapS]),e.texParameteri(S,e.TEXTURE_WRAP_T,ve[u.wrapT]),(S===e.TEXTURE_3D||S===e.TEXTURE_2D_ARRAY)&&e.texParameteri(S,e.TEXTURE_WRAP_R,ve[u.wrapR]),e.texParameteri(S,e.TEXTURE_MAG_FILTER,Ae[u.magFilter]),e.texParameteri(S,e.TEXTURE_MIN_FILTER,Ae[u.minFilter]),u.compareFunction&&(e.texParameteri(S,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(S,e.TEXTURE_COMPARE_FUNC,Ce[u.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(u.magFilter===Wn||u.minFilter!==ri&&u.minFilter!==bn||u.type===hn&&n.has("OES_texture_float_linear")===!1)return;if(u.anisotropy>1||i.get(u).__currentAnisotropy){const O=n.get("EXT_texture_filter_anisotropic");e.texParameterf(S,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(u.anisotropy,r.getMaxAnisotropy())),i.get(u).__currentAnisotropy=u.anisotropy}}}function We(S,u){let O=!1;S.__webglInit===void 0&&(S.__webglInit=!0,u.addEventListener("dispose",C));const V=u.source;let q=g.get(V);q===void 0&&(q={},g.set(V,q));const k=Y(u);if(k!==S.__cacheKey){q[k]===void 0&&(q[k]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,O=!0),q[k].usedTimes++;const fe=q[S.__cacheKey];fe!==void 0&&(q[S.__cacheKey].usedTimes--,fe.usedTimes===0&&v(u)),S.__cacheKey=k,S.__webglTexture=q[k].texture}return O}function Pe(S,u,O){return Math.floor(Math.floor(S/O)/u)}function Fe(S,u,O,V){const k=S.updateRanges;if(k.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,u.width,u.height,O,V,u.data);else{k.sort((Z,oe)=>Z.start-oe.start);let fe=0;for(let Z=1;Z<k.length;Z++){const oe=k[fe],we=k[Z],Se=oe.start+oe.count,he=Pe(we.start,u.width,4),Oe=Pe(oe.start,u.width,4);we.start<=Se+1&&he===Oe&&Pe(we.start+we.count-1,u.width,4)===he?oe.count=Math.max(oe.count,we.start+we.count-oe.start):(++fe,k[fe]=we)}k.length=fe+1;const J=e.getParameter(e.UNPACK_ROW_LENGTH),ge=e.getParameter(e.UNPACK_SKIP_PIXELS),_e=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,u.width);for(let Z=0,oe=k.length;Z<oe;Z++){const we=k[Z],Se=Math.floor(we.start/4),he=Math.ceil(we.count/4),Oe=Se%u.width,y=Math.floor(Se/u.width),te=he,ue=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Oe),e.pixelStorei(e.UNPACK_SKIP_ROWS,y),t.texSubImage2D(e.TEXTURE_2D,0,Oe,y,te,ue,O,V,u.data)}S.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,J),e.pixelStorei(e.UNPACK_SKIP_PIXELS,ge),e.pixelStorei(e.UNPACK_SKIP_ROWS,_e)}}function W(S,u,O){let V=e.TEXTURE_2D;(u.isDataArrayTexture||u.isCompressedArrayTexture)&&(V=e.TEXTURE_2D_ARRAY),u.isData3DTexture&&(V=e.TEXTURE_3D);const q=We(S,u),k=u.source;t.bindTexture(V,S.__webglTexture,e.TEXTURE0+O);const fe=i.get(k);if(k.version!==fe.__version||q===!0){t.activeTexture(e.TEXTURE0+O);const J=ht.getPrimaries(ht.workingColorSpace),ge=u.colorSpace===xn?null:ht.getPrimaries(u.colorSpace),_e=u.colorSpace===xn||J===ge?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,u.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,u.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,u.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let Z=x(u.image,!1,r.maxTextureSize);Z=tt(u,Z);const oe=a.convert(u.format,u.colorSpace),we=a.convert(u.type);let Se=b(u.internalFormat,oe,we,u.colorSpace,u.isVideoTexture);Ve(V,u);let he;const Oe=u.mipmaps,y=u.isVideoTexture!==!0,te=fe.__version===void 0||q===!0,ue=k.dataReady,xe=w(u,Z);if(u.isDepthTexture)Se=E(u.format===Mi,u.type),te&&(y?t.texStorage2D(e.TEXTURE_2D,1,Se,Z.width,Z.height):t.texImage2D(e.TEXTURE_2D,0,Se,Z.width,Z.height,0,oe,we,null));else if(u.isDataTexture)if(Oe.length>0){y&&te&&t.texStorage2D(e.TEXTURE_2D,xe,Se,Oe[0].width,Oe[0].height);for(let ie=0,$=Oe.length;ie<$;ie++)he=Oe[ie],y?ue&&t.texSubImage2D(e.TEXTURE_2D,ie,0,0,he.width,he.height,oe,we,he.data):t.texImage2D(e.TEXTURE_2D,ie,Se,he.width,he.height,0,oe,we,he.data);u.generateMipmaps=!1}else y?(te&&t.texStorage2D(e.TEXTURE_2D,xe,Se,Z.width,Z.height),ue&&Fe(u,Z,oe,we)):t.texImage2D(e.TEXTURE_2D,0,Se,Z.width,Z.height,0,oe,we,Z.data);else if(u.isCompressedTexture)if(u.isCompressedArrayTexture){y&&te&&t.texStorage3D(e.TEXTURE_2D_ARRAY,xe,Se,Oe[0].width,Oe[0].height,Z.depth);for(let ie=0,$=Oe.length;ie<$;ie++)if(he=Oe[ie],u.format!==qt)if(oe!==null)if(y){if(ue)if(u.layerUpdates.size>0){const be=Pr(he.width,he.height,u.format,u.type);for(const Ge of u.layerUpdates){const nt=he.data.subarray(Ge*be/he.data.BYTES_PER_ELEMENT,(Ge+1)*be/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ie,0,0,Ge,he.width,he.height,1,oe,nt)}u.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ie,0,0,0,he.width,he.height,Z.depth,oe,he.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,ie,Se,he.width,he.height,Z.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else y?ue&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,ie,0,0,0,he.width,he.height,Z.depth,oe,we,he.data):t.texImage3D(e.TEXTURE_2D_ARRAY,ie,Se,he.width,he.height,Z.depth,0,oe,we,he.data)}else{y&&te&&t.texStorage2D(e.TEXTURE_2D,xe,Se,Oe[0].width,Oe[0].height);for(let ie=0,$=Oe.length;ie<$;ie++)he=Oe[ie],u.format!==qt?oe!==null?y?ue&&t.compressedTexSubImage2D(e.TEXTURE_2D,ie,0,0,he.width,he.height,oe,he.data):t.compressedTexImage2D(e.TEXTURE_2D,ie,Se,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):y?ue&&t.texSubImage2D(e.TEXTURE_2D,ie,0,0,he.width,he.height,oe,we,he.data):t.texImage2D(e.TEXTURE_2D,ie,Se,he.width,he.height,0,oe,we,he.data)}else if(u.isDataArrayTexture)if(y){if(te&&t.texStorage3D(e.TEXTURE_2D_ARRAY,xe,Se,Z.width,Z.height,Z.depth),ue)if(u.layerUpdates.size>0){const ie=Pr(Z.width,Z.height,u.format,u.type);for(const $ of u.layerUpdates){const be=Z.data.subarray($*ie/Z.data.BYTES_PER_ELEMENT,($+1)*ie/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,$,Z.width,Z.height,1,oe,we,be)}u.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,oe,we,Z.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,Se,Z.width,Z.height,Z.depth,0,oe,we,Z.data);else if(u.isData3DTexture)y?(te&&t.texStorage3D(e.TEXTURE_3D,xe,Se,Z.width,Z.height,Z.depth),ue&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,oe,we,Z.data)):t.texImage3D(e.TEXTURE_3D,0,Se,Z.width,Z.height,Z.depth,0,oe,we,Z.data);else if(u.isFramebufferTexture){if(te)if(y)t.texStorage2D(e.TEXTURE_2D,xe,Se,Z.width,Z.height);else{let ie=Z.width,$=Z.height;for(let be=0;be<xe;be++)t.texImage2D(e.TEXTURE_2D,be,Se,ie,$,0,oe,we,null),ie>>=1,$>>=1}}else if(Oe.length>0){if(y&&te){const ie=$e(Oe[0]);t.texStorage2D(e.TEXTURE_2D,xe,Se,ie.width,ie.height)}for(let ie=0,$=Oe.length;ie<$;ie++)he=Oe[ie],y?ue&&t.texSubImage2D(e.TEXTURE_2D,ie,0,0,oe,we,he):t.texImage2D(e.TEXTURE_2D,ie,Se,oe,we,he);u.generateMipmaps=!1}else if(y){if(te){const ie=$e(Z);t.texStorage2D(e.TEXTURE_2D,xe,Se,ie.width,ie.height)}ue&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,oe,we,Z)}else t.texImage2D(e.TEXTURE_2D,0,Se,oe,we,Z);c(u)&&l(V),fe.__version=k.version,u.onUpdate&&u.onUpdate(u)}S.__version=u.version}function Q(S,u,O){if(u.image.length!==6)return;const V=We(S,u),q=u.source;t.bindTexture(e.TEXTURE_CUBE_MAP,S.__webglTexture,e.TEXTURE0+O);const k=i.get(q);if(q.version!==k.__version||V===!0){t.activeTexture(e.TEXTURE0+O);const fe=ht.getPrimaries(ht.workingColorSpace),J=u.colorSpace===xn?null:ht.getPrimaries(u.colorSpace),ge=u.colorSpace===xn||fe===J?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,u.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,u.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,u.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const _e=u.isCompressedTexture||u.image[0].isCompressedTexture,Z=u.image[0]&&u.image[0].isDataTexture,oe=[];for(let $=0;$<6;$++)!_e&&!Z?oe[$]=x(u.image[$],!0,r.maxCubemapSize):oe[$]=Z?u.image[$].image:u.image[$],oe[$]=tt(u,oe[$]);const we=oe[0],Se=a.convert(u.format,u.colorSpace),he=a.convert(u.type),Oe=b(u.internalFormat,Se,he,u.colorSpace),y=u.isVideoTexture!==!0,te=k.__version===void 0||V===!0,ue=q.dataReady;let xe=w(u,we);Ve(e.TEXTURE_CUBE_MAP,u);let ie;if(_e){y&&te&&t.texStorage2D(e.TEXTURE_CUBE_MAP,xe,Oe,we.width,we.height);for(let $=0;$<6;$++){ie=oe[$].mipmaps;for(let be=0;be<ie.length;be++){const Ge=ie[be];u.format!==qt?Se!==null?y?ue&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,be,0,0,Ge.width,Ge.height,Se,Ge.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,be,Oe,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):y?ue&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,be,0,0,Ge.width,Ge.height,Se,he,Ge.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,be,Oe,Ge.width,Ge.height,0,Se,he,Ge.data)}}}else{if(ie=u.mipmaps,y&&te){ie.length>0&&xe++;const $=$e(oe[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,xe,Oe,$.width,$.height)}for(let $=0;$<6;$++)if(Z){y?ue&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,oe[$].width,oe[$].height,Se,he,oe[$].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Oe,oe[$].width,oe[$].height,0,Se,he,oe[$].data);for(let be=0;be<ie.length;be++){const nt=ie[be].image[$].image;y?ue&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,be+1,0,0,nt.width,nt.height,Se,he,nt.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,be+1,Oe,nt.width,nt.height,0,Se,he,nt.data)}}else{y?ue&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Se,he,oe[$]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Oe,Se,he,oe[$]);for(let be=0;be<ie.length;be++){const Ge=ie[be];y?ue&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,be+1,0,0,Se,he,Ge.image[$]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,be+1,Oe,Se,he,Ge.image[$])}}}c(u)&&l(e.TEXTURE_CUBE_MAP),k.__version=q.version,u.onUpdate&&u.onUpdate(u)}S.__version=u.version}function Ee(S,u,O,V,q,k){const fe=a.convert(O.format,O.colorSpace),J=a.convert(O.type),ge=b(O.internalFormat,fe,J,O.colorSpace),_e=i.get(u),Z=i.get(O);if(Z.__renderTarget=u,!_e.__hasExternalTextures){const oe=Math.max(1,u.width>>k),we=Math.max(1,u.height>>k);q===e.TEXTURE_3D||q===e.TEXTURE_2D_ARRAY?t.texImage3D(q,k,ge,oe,we,u.depth,0,fe,J,null):t.texImage2D(q,k,ge,oe,we,0,fe,J,null)}t.bindFramebuffer(e.FRAMEBUFFER,S),de(u)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,V,q,Z.__webglTexture,0,Be(u)):(q===e.TEXTURE_2D||q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,V,q,Z.__webglTexture,k),t.bindFramebuffer(e.FRAMEBUFFER,null)}function Ie(S,u,O){if(e.bindRenderbuffer(e.RENDERBUFFER,S),u.depthBuffer){const V=u.depthTexture,q=V&&V.isDepthTexture?V.type:null,k=E(u.stencilBuffer,q),fe=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,J=Be(u);de(u)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,J,k,u.width,u.height):O?e.renderbufferStorageMultisample(e.RENDERBUFFER,J,k,u.width,u.height):e.renderbufferStorage(e.RENDERBUFFER,k,u.width,u.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,fe,e.RENDERBUFFER,S)}else{const V=u.textures;for(let q=0;q<V.length;q++){const k=V[q],fe=a.convert(k.format,k.colorSpace),J=a.convert(k.type),ge=b(k.internalFormat,fe,J,k.colorSpace),_e=Be(u);O&&de(u)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,_e,ge,u.width,u.height):de(u)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,_e,ge,u.width,u.height):e.renderbufferStorage(e.RENDERBUFFER,ge,u.width,u.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Re(S,u){if(u&&u.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(e.FRAMEBUFFER,S),!(u.depthTexture&&u.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=i.get(u.depthTexture);V.__renderTarget=u,(!V.__webglTexture||u.depthTexture.image.width!==u.width||u.depthTexture.image.height!==u.height)&&(u.depthTexture.image.width=u.width,u.depthTexture.image.height=u.height,u.depthTexture.needsUpdate=!0),K(u.depthTexture,0);const q=V.__webglTexture,k=Be(u);if(u.depthTexture.format===wa)de(u)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,q,0,k):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,q,0);else if(u.depthTexture.format===Mi)de(u)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,q,0,k):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function He(S){const u=i.get(S),O=S.isWebGLCubeRenderTarget===!0;if(u.__boundDepthTexture!==S.depthTexture){const V=S.depthTexture;if(u.__depthDisposeCallback&&u.__depthDisposeCallback(),V){const q=()=>{delete u.__boundDepthTexture,delete u.__depthDisposeCallback,V.removeEventListener("dispose",q)};V.addEventListener("dispose",q),u.__depthDisposeCallback=q}u.__boundDepthTexture=V}if(S.depthTexture&&!u.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const V=S.texture.mipmaps;V&&V.length>0?Re(u.__webglFramebuffer[0],S):Re(u.__webglFramebuffer,S)}else if(O){u.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer[V]),u.__webglDepthbuffer[V]===void 0)u.__webglDepthbuffer[V]=e.createRenderbuffer(),Ie(u.__webglDepthbuffer[V],S,!1);else{const q=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,k=u.__webglDepthbuffer[V];e.bindRenderbuffer(e.RENDERBUFFER,k),e.framebufferRenderbuffer(e.FRAMEBUFFER,q,e.RENDERBUFFER,k)}}else{const V=S.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),u.__webglDepthbuffer===void 0)u.__webglDepthbuffer=e.createRenderbuffer(),Ie(u.__webglDepthbuffer,S,!1);else{const q=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,k=u.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,k),e.framebufferRenderbuffer(e.FRAMEBUFFER,q,e.RENDERBUFFER,k)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function gt(S,u,O){const V=i.get(S);u!==void 0&&Ee(V.__webglFramebuffer,S,S.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),O!==void 0&&He(S)}function R(S){const u=S.texture,O=i.get(S),V=i.get(u);S.addEventListener("dispose",U);const q=S.textures,k=S.isWebGLCubeRenderTarget===!0,fe=q.length>1;if(fe||(V.__webglTexture===void 0&&(V.__webglTexture=e.createTexture()),V.__version=u.version,s.memory.textures++),k){O.__webglFramebuffer=[];for(let J=0;J<6;J++)if(u.mipmaps&&u.mipmaps.length>0){O.__webglFramebuffer[J]=[];for(let ge=0;ge<u.mipmaps.length;ge++)O.__webglFramebuffer[J][ge]=e.createFramebuffer()}else O.__webglFramebuffer[J]=e.createFramebuffer()}else{if(u.mipmaps&&u.mipmaps.length>0){O.__webglFramebuffer=[];for(let J=0;J<u.mipmaps.length;J++)O.__webglFramebuffer[J]=e.createFramebuffer()}else O.__webglFramebuffer=e.createFramebuffer();if(fe)for(let J=0,ge=q.length;J<ge;J++){const _e=i.get(q[J]);_e.__webglTexture===void 0&&(_e.__webglTexture=e.createTexture(),s.memory.textures++)}if(S.samples>0&&de(S)===!1){O.__webglMultisampledFramebuffer=e.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let J=0;J<q.length;J++){const ge=q[J];O.__webglColorRenderbuffer[J]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,O.__webglColorRenderbuffer[J]);const _e=a.convert(ge.format,ge.colorSpace),Z=a.convert(ge.type),oe=b(ge.internalFormat,_e,Z,ge.colorSpace,S.isXRRenderTarget===!0),we=Be(S);e.renderbufferStorageMultisample(e.RENDERBUFFER,we,oe,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+J,e.RENDERBUFFER,O.__webglColorRenderbuffer[J])}e.bindRenderbuffer(e.RENDERBUFFER,null),S.depthBuffer&&(O.__webglDepthRenderbuffer=e.createRenderbuffer(),Ie(O.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(k){t.bindTexture(e.TEXTURE_CUBE_MAP,V.__webglTexture),Ve(e.TEXTURE_CUBE_MAP,u);for(let J=0;J<6;J++)if(u.mipmaps&&u.mipmaps.length>0)for(let ge=0;ge<u.mipmaps.length;ge++)Ee(O.__webglFramebuffer[J][ge],S,u,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge);else Ee(O.__webglFramebuffer[J],S,u,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);c(u)&&l(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let J=0,ge=q.length;J<ge;J++){const _e=q[J],Z=i.get(_e);let oe=e.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(oe=S.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(oe,Z.__webglTexture),Ve(oe,_e),Ee(O.__webglFramebuffer,S,_e,e.COLOR_ATTACHMENT0+J,oe,0),c(_e)&&l(oe)}t.unbindTexture()}else{let J=e.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(J=S.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(J,V.__webglTexture),Ve(J,u),u.mipmaps&&u.mipmaps.length>0)for(let ge=0;ge<u.mipmaps.length;ge++)Ee(O.__webglFramebuffer[ge],S,u,e.COLOR_ATTACHMENT0,J,ge);else Ee(O.__webglFramebuffer,S,u,e.COLOR_ATTACHMENT0,J,0);c(u)&&l(J),t.unbindTexture()}S.depthBuffer&&He(S)}function I(S){const u=S.textures;for(let O=0,V=u.length;O<V;O++){const q=u[O];if(c(q)){const k=A(S),fe=i.get(q).__webglTexture;t.bindTexture(k,fe),l(k),t.unbindTexture()}}}const se=[],ne=[];function le(S){if(S.samples>0){if(de(S)===!1){const u=S.textures,O=S.width,V=S.height;let q=e.COLOR_BUFFER_BIT;const k=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,fe=i.get(S),J=u.length>1;if(J)for(let _e=0;_e<u.length;_e++)t.bindFramebuffer(e.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,fe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const ge=S.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let _e=0;_e<u.length;_e++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(q|=e.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(q|=e.STENCIL_BUFFER_BIT)),J){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,fe.__webglColorRenderbuffer[_e]);const Z=i.get(u[_e]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Z,0)}e.blitFramebuffer(0,0,O,V,0,0,O,V,q,e.NEAREST),h===!0&&(se.length=0,ne.length=0,se.push(e.COLOR_ATTACHMENT0+_e),S.depthBuffer&&S.resolveDepthBuffer===!1&&(se.push(k),ne.push(k),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ne)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),J)for(let _e=0;_e<u.length;_e++){t.bindFramebuffer(e.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.RENDERBUFFER,fe.__webglColorRenderbuffer[_e]);const Z=i.get(u[_e]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,fe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.TEXTURE_2D,Z,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&h){const u=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[u])}}}function Be(S){return Math.min(r.maxSamples,S.samples)}function de(S){const u=i.get(S);return S.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&u.__useRenderToTexture!==!1}function De(S){const u=s.render.frame;p.get(S)!==u&&(p.set(S,u),S.update())}function tt(S,u){const O=S.colorSpace,V=S.format,q=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||O!==Ai&&O!==xn&&(ht.getTransfer(O)===at?(V!==qt||q!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),u}function $e(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(f.width=S.naturalWidth||S.width,f.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(f.width=S.displayWidth,f.height=S.displayHeight):(f.width=S.width,f.height=S.height),f}this.allocateTextureUnit=z,this.resetTextureUnits=F,this.setTexture2D=K,this.setTexture2DArray=X,this.setTexture3D=re,this.setTextureCube=H,this.rebindTextures=gt,this.setupRenderTarget=R,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=de}function Th(e,n){function t(i,r=xn){let a;const s=ht.getTransfer(r);if(i===Sn)return e.UNSIGNED_BYTE;if(i===Io)return e.UNSIGNED_SHORT_4_4_4_4;if(i===No)return e.UNSIGNED_SHORT_5_5_5_1;if(i===el)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===tl)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===nl)return e.BYTE;if(i===il)return e.SHORT;if(i===xi)return e.UNSIGNED_SHORT;if(i===Bo)return e.INT;if(i===jn)return e.UNSIGNED_INT;if(i===hn)return e.FLOAT;if(i===bi)return e.HALF_FLOAT;if(i===al)return e.ALPHA;if(i===rl)return e.RGB;if(i===qt)return e.RGBA;if(i===wa)return e.DEPTH_COMPONENT;if(i===Mi)return e.DEPTH_STENCIL;if(i===ol)return e.RED;if(i===Go)return e.RED_INTEGER;if(i===sl)return e.RG;if(i===Ho)return e.RG_INTEGER;if(i===ko)return e.RGBA_INTEGER;if(i===Ni||i===Oi||i===Fi||i===Bi)if(s===at)if(a=n.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Ni)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Oi)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fi)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Bi)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=n.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Ni)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Oi)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fi)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Bi)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ja||i===Qa||i===Ja||i===er)if(a=n.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===ja)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ja)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===er)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===tr||i===nr||i===ir)if(a=n.get("WEBGL_compressed_texture_etc"),a!==null){if(i===tr||i===nr)return s===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===ir)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ar||i===rr||i===or||i===sr||i===lr||i===cr||i===dr||i===ur||i===fr||i===hr||i===pr||i===mr||i===gr||i===_r)if(a=n.get("WEBGL_compressed_texture_astc"),a!==null){if(i===ar)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rr)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===or)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===sr)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lr)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cr)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===dr)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ur)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fr)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hr)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pr)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===mr)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gr)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_r)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vr||i===Sr||i===Mr)if(a=n.get("EXT_texture_compression_bptc"),a!==null){if(i===vr)return s===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Mr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Er||i===xr||i===Tr||i===br)if(a=n.get("EXT_texture_compression_rgtc"),a!==null){if(i===Er)return a.COMPRESSED_RED_RGTC1_EXT;if(i===xr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Tr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===br)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zn?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const bh=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ah=`
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

}`;class Rh{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new Oo(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new Zt({vertexShader:bh,fragmentShader:Ah,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new Fo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wh extends Ss{constructor(n,t){super();const i=this;let r=null,a=1,s=null,o="local-floor",h=1,f=null,p=null,d=null,g=null,_=null,T=null;const x=typeof XRWebGLBinding<"u",c=new Rh,l={},A=t.getContextAttributes();let b=null,E=null;const w=[],C=[],U=new ct;let L=null;const v=new zn;v.viewport=new Tt;const M=new zn;M.viewport=new Tt;const P=[v,M],F=new Ms;let z=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Q=w[W];return Q===void 0&&(Q=new Ui,w[W]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(W){let Q=w[W];return Q===void 0&&(Q=new Ui,w[W]=Q),Q.getGripSpace()},this.getHand=function(W){let Q=w[W];return Q===void 0&&(Q=new Ui,w[W]=Q),Q.getHandSpace()};function K(W){const Q=C.indexOf(W.inputSource);if(Q===-1)return;const Ee=w[Q];Ee!==void 0&&(Ee.update(W.inputSource,W.frame,f||s),Ee.dispatchEvent({type:W.type,data:W.inputSource}))}function X(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",re);for(let W=0;W<w.length;W++){const Q=C[W];Q!==null&&(C[W]=null,w[W].disconnect(Q))}z=null,Y=null,c.reset();for(const W in l)delete l[W];n.setRenderTarget(b),_=null,g=null,d=null,r=null,E=null,Fe.stop(),i.isPresenting=!1,n.setPixelRatio(L),n.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||s},this.setReferenceSpace=function(W){f=W},this.getBaseLayer=function(){return g!==null?g:_},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return T},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(b=n.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",X),r.addEventListener("inputsourceschange",re),A.xrCompatible!==!0&&await t.makeXRCompatible(),L=n.getPixelRatio(),n.getSize(U),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Ie=null,Re=null;A.depth&&(Re=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=A.stencil?Mi:wa,Ie=A.stencil?Zn:jn);const He={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:a};d=this.getBinding(),g=d.createProjectionLayer(He),r.updateRenderState({layers:[g]}),n.setPixelRatio(1),n.setSize(g.textureWidth,g.textureHeight,!1),E=new yn(g.textureWidth,g.textureHeight,{format:qt,type:Sn,depthTexture:new Lo(g.textureWidth,g.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:A.stencil,colorSpace:n.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Ee={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(r,t,Ee),r.updateRenderState({baseLayer:_}),n.setPixelRatio(1),n.setSize(_.framebufferWidth,_.framebufferHeight,!1),E=new yn(_.framebufferWidth,_.framebufferHeight,{format:qt,type:Sn,colorSpace:n.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(h),f=null,s=await r.requestReferenceSpace(o),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return c.getDepthTexture()};function re(W){for(let Q=0;Q<W.removed.length;Q++){const Ee=W.removed[Q],Ie=C.indexOf(Ee);Ie>=0&&(C[Ie]=null,w[Ie].disconnect(Ee))}for(let Q=0;Q<W.added.length;Q++){const Ee=W.added[Q];let Ie=C.indexOf(Ee);if(Ie===-1){for(let He=0;He<w.length;He++)if(He>=C.length){C.push(Ee),Ie=He;break}else if(C[He]===null){C[He]=Ee,Ie=He;break}if(Ie===-1)break}const Re=w[Ie];Re&&Re.connect(Ee)}}const H=new ce,ve=new ce;function Ae(W,Q,Ee){H.setFromMatrixPosition(Q.matrixWorld),ve.setFromMatrixPosition(Ee.matrixWorld);const Ie=H.distanceTo(ve),Re=Q.projectionMatrix.elements,He=Ee.projectionMatrix.elements,gt=Re[14]/(Re[10]-1),R=Re[14]/(Re[10]+1),I=(Re[9]+1)/Re[5],se=(Re[9]-1)/Re[5],ne=(Re[8]-1)/Re[0],le=(He[8]+1)/He[0],Be=gt*ne,de=gt*le,De=Ie/(-ne+le),tt=De*-ne;if(Q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(tt),W.translateZ(De),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Re[10]===-1)W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const $e=gt+De,S=R+De,u=Be-tt,O=de+(Ie-tt),V=I*R/S*$e,q=se*R/S*$e;W.projectionMatrix.makePerspective(u,O,V,q,$e,S),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function Ce(W,Q){Q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let Q=W.near,Ee=W.far;c.texture!==null&&(c.depthNear>0&&(Q=c.depthNear),c.depthFar>0&&(Ee=c.depthFar)),F.near=M.near=v.near=Q,F.far=M.far=v.far=Ee,(z!==F.near||Y!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),z=F.near,Y=F.far),F.layers.mask=W.layers.mask|6,v.layers.mask=F.layers.mask&3,M.layers.mask=F.layers.mask&5;const Ie=W.parent,Re=F.cameras;Ce(F,Ie);for(let He=0;He<Re.length;He++)Ce(Re[He],Ie);Re.length===2?Ae(F,v,M):F.projectionMatrix.copy(v.projectionMatrix),Ve(W,F,Ie)};function Ve(W,Q,Ee){Ee===null?W.matrix.copy(Q.matrixWorld):(W.matrix.copy(Ee.matrixWorld),W.matrix.invert(),W.matrix.multiply(Q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Es*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(g===null&&_===null))return h},this.setFoveation=function(W){h=W,g!==null&&(g.fixedFoveation=W),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=W)},this.hasDepthSensing=function(){return c.texture!==null},this.getDepthSensingMesh=function(){return c.getMesh(F)},this.getCameraTexture=function(W){return l[W]};let We=null;function Pe(W,Q){if(p=Q.getViewerPose(f||s),T=Q,p!==null){const Ee=p.views;_!==null&&(n.setRenderTargetFramebuffer(E,_.framebuffer),n.setRenderTarget(E));let Ie=!1;Ee.length!==F.cameras.length&&(F.cameras.length=0,Ie=!0);for(let R=0;R<Ee.length;R++){const I=Ee[R];let se=null;if(_!==null)se=_.getViewport(I);else{const le=d.getViewSubImage(g,I);se=le.viewport,R===0&&(n.setRenderTargetTextures(E,le.colorTexture,le.depthStencilTexture),n.setRenderTarget(E))}let ne=P[R];ne===void 0&&(ne=new zn,ne.layers.enable(R),ne.viewport=new Tt,P[R]=ne),ne.matrix.fromArray(I.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(I.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(se.x,se.y,se.width,se.height),R===0&&(F.matrix.copy(ne.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ie===!0&&F.cameras.push(ne)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){d=i.getBinding();const R=d.getDepthInformation(Ee[0]);R&&R.isValid&&R.texture&&c.init(R,r.renderState)}if(Re&&Re.includes("camera-access")&&x){n.state.unbindTexture(),d=i.getBinding();for(let R=0;R<Ee.length;R++){const I=Ee[R].camera;if(I){let se=l[I];se||(se=new Oo,l[I]=se);const ne=d.getCameraImage(I);se.sourceTexture=ne}}}}for(let Ee=0;Ee<w.length;Ee++){const Ie=C[Ee],Re=w[Ee];Ie!==null&&Re!==void 0&&Re.update(Ie,Q,f||s)}We&&We(W,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),T=null}const Fe=new $o;Fe.setAnimationLoop(Pe),this.setAnimationLoop=function(W){We=W},this.dispose=function(){}}}const dn=new wn,Ch=new kt;function yh(e,n){function t(c,l){c.matrixAutoUpdate===!0&&c.updateMatrix(),l.value.copy(c.matrix)}function i(c,l){l.color.getRGB(c.fogColor.value,zo(e)),l.isFog?(c.fogNear.value=l.near,c.fogFar.value=l.far):l.isFogExp2&&(c.fogDensity.value=l.density)}function r(c,l,A,b,E){l.isMeshBasicMaterial||l.isMeshLambertMaterial?a(c,l):l.isMeshToonMaterial?(a(c,l),d(c,l)):l.isMeshPhongMaterial?(a(c,l),p(c,l)):l.isMeshStandardMaterial?(a(c,l),g(c,l),l.isMeshPhysicalMaterial&&_(c,l,E)):l.isMeshMatcapMaterial?(a(c,l),T(c,l)):l.isMeshDepthMaterial?a(c,l):l.isMeshDistanceMaterial?(a(c,l),x(c,l)):l.isMeshNormalMaterial?a(c,l):l.isLineBasicMaterial?(s(c,l),l.isLineDashedMaterial&&o(c,l)):l.isPointsMaterial?h(c,l,A,b):l.isSpriteMaterial?f(c,l):l.isShadowMaterial?(c.color.value.copy(l.color),c.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}function a(c,l){c.opacity.value=l.opacity,l.color&&c.diffuse.value.copy(l.color),l.emissive&&c.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(c.map.value=l.map,t(l.map,c.mapTransform)),l.alphaMap&&(c.alphaMap.value=l.alphaMap,t(l.alphaMap,c.alphaMapTransform)),l.bumpMap&&(c.bumpMap.value=l.bumpMap,t(l.bumpMap,c.bumpMapTransform),c.bumpScale.value=l.bumpScale,l.side===wt&&(c.bumpScale.value*=-1)),l.normalMap&&(c.normalMap.value=l.normalMap,t(l.normalMap,c.normalMapTransform),c.normalScale.value.copy(l.normalScale),l.side===wt&&c.normalScale.value.negate()),l.displacementMap&&(c.displacementMap.value=l.displacementMap,t(l.displacementMap,c.displacementMapTransform),c.displacementScale.value=l.displacementScale,c.displacementBias.value=l.displacementBias),l.emissiveMap&&(c.emissiveMap.value=l.emissiveMap,t(l.emissiveMap,c.emissiveMapTransform)),l.specularMap&&(c.specularMap.value=l.specularMap,t(l.specularMap,c.specularMapTransform)),l.alphaTest>0&&(c.alphaTest.value=l.alphaTest);const A=n.get(l),b=A.envMap,E=A.envMapRotation;b&&(c.envMap.value=b,dn.copy(E),dn.x*=-1,dn.y*=-1,dn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(dn.y*=-1,dn.z*=-1),c.envMapRotation.value.setFromMatrix4(Ch.makeRotationFromEuler(dn)),c.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,c.reflectivity.value=l.reflectivity,c.ior.value=l.ior,c.refractionRatio.value=l.refractionRatio),l.lightMap&&(c.lightMap.value=l.lightMap,c.lightMapIntensity.value=l.lightMapIntensity,t(l.lightMap,c.lightMapTransform)),l.aoMap&&(c.aoMap.value=l.aoMap,c.aoMapIntensity.value=l.aoMapIntensity,t(l.aoMap,c.aoMapTransform))}function s(c,l){c.diffuse.value.copy(l.color),c.opacity.value=l.opacity,l.map&&(c.map.value=l.map,t(l.map,c.mapTransform))}function o(c,l){c.dashSize.value=l.dashSize,c.totalSize.value=l.dashSize+l.gapSize,c.scale.value=l.scale}function h(c,l,A,b){c.diffuse.value.copy(l.color),c.opacity.value=l.opacity,c.size.value=l.size*A,c.scale.value=b*.5,l.map&&(c.map.value=l.map,t(l.map,c.uvTransform)),l.alphaMap&&(c.alphaMap.value=l.alphaMap,t(l.alphaMap,c.alphaMapTransform)),l.alphaTest>0&&(c.alphaTest.value=l.alphaTest)}function f(c,l){c.diffuse.value.copy(l.color),c.opacity.value=l.opacity,c.rotation.value=l.rotation,l.map&&(c.map.value=l.map,t(l.map,c.mapTransform)),l.alphaMap&&(c.alphaMap.value=l.alphaMap,t(l.alphaMap,c.alphaMapTransform)),l.alphaTest>0&&(c.alphaTest.value=l.alphaTest)}function p(c,l){c.specular.value.copy(l.specular),c.shininess.value=Math.max(l.shininess,1e-4)}function d(c,l){l.gradientMap&&(c.gradientMap.value=l.gradientMap)}function g(c,l){c.metalness.value=l.metalness,l.metalnessMap&&(c.metalnessMap.value=l.metalnessMap,t(l.metalnessMap,c.metalnessMapTransform)),c.roughness.value=l.roughness,l.roughnessMap&&(c.roughnessMap.value=l.roughnessMap,t(l.roughnessMap,c.roughnessMapTransform)),l.envMap&&(c.envMapIntensity.value=l.envMapIntensity)}function _(c,l,A){c.ior.value=l.ior,l.sheen>0&&(c.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),c.sheenRoughness.value=l.sheenRoughness,l.sheenColorMap&&(c.sheenColorMap.value=l.sheenColorMap,t(l.sheenColorMap,c.sheenColorMapTransform)),l.sheenRoughnessMap&&(c.sheenRoughnessMap.value=l.sheenRoughnessMap,t(l.sheenRoughnessMap,c.sheenRoughnessMapTransform))),l.clearcoat>0&&(c.clearcoat.value=l.clearcoat,c.clearcoatRoughness.value=l.clearcoatRoughness,l.clearcoatMap&&(c.clearcoatMap.value=l.clearcoatMap,t(l.clearcoatMap,c.clearcoatMapTransform)),l.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap,t(l.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),l.clearcoatNormalMap&&(c.clearcoatNormalMap.value=l.clearcoatNormalMap,t(l.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),l.side===wt&&c.clearcoatNormalScale.value.negate())),l.dispersion>0&&(c.dispersion.value=l.dispersion),l.iridescence>0&&(c.iridescence.value=l.iridescence,c.iridescenceIOR.value=l.iridescenceIOR,c.iridescenceThicknessMinimum.value=l.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=l.iridescenceThicknessRange[1],l.iridescenceMap&&(c.iridescenceMap.value=l.iridescenceMap,t(l.iridescenceMap,c.iridescenceMapTransform)),l.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=l.iridescenceThicknessMap,t(l.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),l.transmission>0&&(c.transmission.value=l.transmission,c.transmissionSamplerMap.value=A.texture,c.transmissionSamplerSize.value.set(A.width,A.height),l.transmissionMap&&(c.transmissionMap.value=l.transmissionMap,t(l.transmissionMap,c.transmissionMapTransform)),c.thickness.value=l.thickness,l.thicknessMap&&(c.thicknessMap.value=l.thicknessMap,t(l.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=l.attenuationDistance,c.attenuationColor.value.copy(l.attenuationColor)),l.anisotropy>0&&(c.anisotropyVector.value.set(l.anisotropy*Math.cos(l.anisotropyRotation),l.anisotropy*Math.sin(l.anisotropyRotation)),l.anisotropyMap&&(c.anisotropyMap.value=l.anisotropyMap,t(l.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=l.specularIntensity,c.specularColor.value.copy(l.specularColor),l.specularColorMap&&(c.specularColorMap.value=l.specularColorMap,t(l.specularColorMap,c.specularColorMapTransform)),l.specularIntensityMap&&(c.specularIntensityMap.value=l.specularIntensityMap,t(l.specularIntensityMap,c.specularIntensityMapTransform))}function T(c,l){l.matcap&&(c.matcap.value=l.matcap)}function x(c,l){const A=n.get(l).light;c.referencePosition.value.setFromMatrixPosition(A.matrixWorld),c.nearDistance.value=A.shadow.camera.near,c.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Ph(e,n,t,i){let r={},a={},s=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function h(A,b){const E=b.program;i.uniformBlockBinding(A,E)}function f(A,b){let E=r[A.id];E===void 0&&(T(A),E=p(A),r[A.id]=E,A.addEventListener("dispose",c));const w=b.program;i.updateUBOMapping(A,w);const C=n.render.frame;a[A.id]!==C&&(g(A),a[A.id]=C)}function p(A){const b=d();A.__bindingPointIndex=b;const E=e.createBuffer(),w=A.__size,C=A.usage;return e.bindBuffer(e.UNIFORM_BUFFER,E),e.bufferData(e.UNIFORM_BUFFER,w,C),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,b,E),E}function d(){for(let A=0;A<o;A++)if(s.indexOf(A)===-1)return s.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(A){const b=r[A.id],E=A.uniforms,w=A.__cache;e.bindBuffer(e.UNIFORM_BUFFER,b);for(let C=0,U=E.length;C<U;C++){const L=Array.isArray(E[C])?E[C]:[E[C]];for(let v=0,M=L.length;v<M;v++){const P=L[v];if(_(P,C,v,w)===!0){const F=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let Y=0;for(let K=0;K<z.length;K++){const X=z[K],re=x(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,e.bufferSubData(e.UNIFORM_BUFFER,F+Y,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,Y),Y+=re.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,F,P.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function _(A,b,E,w){const C=A.value,U=b+"_"+E;if(w[U]===void 0)return typeof C=="number"||typeof C=="boolean"?w[U]=C:w[U]=C.clone(),!0;{const L=w[U];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return w[U]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function T(A){const b=A.uniforms;let E=0;const w=16;for(let U=0,L=b.length;U<L;U++){const v=Array.isArray(b[U])?b[U]:[b[U]];for(let M=0,P=v.length;M<P;M++){const F=v[M],z=Array.isArray(F.value)?F.value:[F.value];for(let Y=0,K=z.length;Y<K;Y++){const X=z[Y],re=x(X),H=E%w,ve=H%re.boundary,Ae=H+ve;E+=ve,Ae!==0&&w-Ae<re.storage&&(E+=w-Ae),F.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=E,E+=re.storage}}}const C=E%w;return C>0&&(E+=w-C),A.__size=E,A.__cache={},this}function x(A){const b={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(b.boundary=4,b.storage=4):A.isVector2?(b.boundary=8,b.storage=8):A.isVector3||A.isColor?(b.boundary=16,b.storage=12):A.isVector4?(b.boundary=16,b.storage=16):A.isMatrix3?(b.boundary=48,b.storage=48):A.isMatrix4?(b.boundary=64,b.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),b}function c(A){const b=A.target;b.removeEventListener("dispose",c);const E=s.indexOf(b.__bindingPointIndex);s.splice(E,1),e.deleteBuffer(r[b.id]),delete r[b.id],delete a[b.id]}function l(){for(const A in r)e.deleteBuffer(r[A]);s=[],r={},a={}}return{bind:h,update:f,dispose:l}}class Lh{constructor(n={}){const{canvas:t=gs(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:g=!1}=n;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=s;const T=new Uint32Array(4),x=new Int32Array(4);let c=null,l=null;const A=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let w=!1;this._outputColorSpace=yo;let C=0,U=0,L=null,v=-1,M=null;const P=new Tt,F=new Tt;let z=null;const Y=new Ye(0);let K=0,X=t.width,re=t.height,H=1,ve=null,Ae=null;const Ce=new Tt(0,0,X,re),Ve=new Tt(0,0,X,re);let We=!1;const Pe=new Po;let Fe=!1,W=!1;const Q=new kt,Ee=new ce,Ie=new Tt,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function gt(){return L===null?H:1}let R=i;function I(m,D){return t.getContext(m,D)}try{const m={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_s}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",ie,!1),R===null){const D="webgl2";if(R=I(D,m),R===null)throw I(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(m){throw console.error("THREE.WebGLRenderer: "+m.message),m}let se,ne,le,Be,de,De,tt,$e,S,u,O,V,q,k,fe,J,ge,_e,Z,oe,we,Se,he,Oe;function y(){se=new Hu(R),se.init(),Se=new Th(R,se),ne=new Uu(R,se,n,Se),le=new Eh(R,se),ne.reversedDepthBuffer&&g&&le.buffers.depth.setReversed(!0),Be=new zu(R),de=new lh,De=new xh(R,se,le,de,ne,Se,Be),tt=new Nu(E),$e=new Gu(E),S=new $l(R),he=new Lu(R,S),u=new ku(R,S,Be,he),O=new Xu(R,u,S,Be),Z=new Wu(R,ne,De),J=new Iu(de),V=new sh(E,tt,$e,se,ne,he,J),q=new yh(E,de),k=new dh,fe=new gh(se),_e=new Pu(E,tt,$e,le,O,_,h),ge=new Sh(E,O,ne),Oe=new Ph(R,Be,ne,le),oe=new Du(R,se,Be),we=new Vu(R,se,Be),Be.programs=V.programs,E.capabilities=ne,E.extensions=se,E.properties=de,E.renderLists=k,E.shadowMap=ge,E.state=le,E.info=Be}y();const te=new wh(E,R);this.xr=te,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const m=se.get("WEBGL_lose_context");m&&m.loseContext()},this.forceContextRestore=function(){const m=se.get("WEBGL_lose_context");m&&m.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(m){m!==void 0&&(H=m,this.setSize(X,re,!1))},this.getSize=function(m){return m.set(X,re)},this.setSize=function(m,D,B=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=m,re=D,t.width=Math.floor(m*H),t.height=Math.floor(D*H),B===!0&&(t.style.width=m+"px",t.style.height=D+"px"),this.setViewport(0,0,m,D)},this.getDrawingBufferSize=function(m){return m.set(X*H,re*H).floor()},this.setDrawingBufferSize=function(m,D,B){X=m,re=D,H=B,t.width=Math.floor(m*B),t.height=Math.floor(D*B),this.setViewport(0,0,m,D)},this.getCurrentViewport=function(m){return m.copy(P)},this.getViewport=function(m){return m.copy(Ce)},this.setViewport=function(m,D,B,G){m.isVector4?Ce.set(m.x,m.y,m.z,m.w):Ce.set(m,D,B,G),le.viewport(P.copy(Ce).multiplyScalar(H).round())},this.getScissor=function(m){return m.copy(Ve)},this.setScissor=function(m,D,B,G){m.isVector4?Ve.set(m.x,m.y,m.z,m.w):Ve.set(m,D,B,G),le.scissor(F.copy(Ve).multiplyScalar(H).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(m){le.setScissorTest(We=m)},this.setOpaqueSort=function(m){ve=m},this.setTransparentSort=function(m){Ae=m},this.getClearColor=function(m){return m.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(m=!0,D=!0,B=!0){let G=0;if(m){let N=!1;if(L!==null){const ae=L.texture.format;N=ae===ko||ae===Ho||ae===Go}if(N){const ae=L.texture.type,me=ae===Sn||ae===jn||ae===xi||ae===Zn||ae===Io||ae===No,Te=_e.getClearColor(),Me=_e.getClearAlpha(),Ue=Te.r,Ne=Te.g,ye=Te.b;me?(T[0]=Ue,T[1]=Ne,T[2]=ye,T[3]=Me,R.clearBufferuiv(R.COLOR,0,T)):(x[0]=Ue,x[1]=Ne,x[2]=ye,x[3]=Me,R.clearBufferiv(R.COLOR,0,x))}else G|=R.COLOR_BUFFER_BIT}D&&(G|=R.DEPTH_BUFFER_BIT),B&&(G|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),_e.dispose(),k.dispose(),fe.dispose(),de.dispose(),tt.dispose(),$e.dispose(),O.dispose(),he.dispose(),Oe.dispose(),V.dispose(),te.dispose(),te.removeEventListener("sessionstart",Ft),te.removeEventListener("sessionend",Wa),sn.stop()};function ue(m){m.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const m=Be.autoReset,D=ge.enabled,B=ge.autoUpdate,G=ge.needsUpdate,N=ge.type;y(),Be.autoReset=m,ge.enabled=D,ge.autoUpdate=B,ge.needsUpdate=G,ge.type=N}function ie(m){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",m.statusMessage)}function $(m){const D=m.target;D.removeEventListener("dispose",$),be(D)}function be(m){Ge(m),de.remove(m)}function Ge(m){const D=de.get(m).programs;D!==void 0&&(D.forEach(function(B){V.releaseProgram(B)}),m.isShaderMaterial&&V.releaseShaderCache(m))}this.renderBufferDirect=function(m,D,B,G,N,ae){D===null&&(D=Re);const me=N.isMesh&&N.matrixWorld.determinant()<0,Te=ds(m,D,B,G,N);le.setMaterial(G,me);let Me=B.index,Ue=1;if(G.wireframe===!0){if(Me=u.getWireframeAttribute(B),Me===void 0)return;Ue=2}const Ne=B.drawRange,ye=B.attributes.position;let ze=Ne.start*Ue,Ze=(Ne.start+Ne.count)*Ue;ae!==null&&(ze=Math.max(ze,ae.start*Ue),Ze=Math.min(Ze,(ae.start+ae.count)*Ue)),Me!==null?(ze=Math.max(ze,0),Ze=Math.min(Ze,Me.count)):ye!=null&&(ze=Math.max(ze,0),Ze=Math.min(Ze,ye.count));const dt=Ze-ze;if(dt<0||dt===1/0)return;he.setup(N,G,Te,B,Me);let it,Je=oe;if(Me!==null&&(it=S.get(Me),Je=we,Je.setIndex(it)),N.isMesh)G.wireframe===!0?(le.setLineWidth(G.wireframeLinewidth*gt()),Je.setMode(R.LINES)):Je.setMode(R.TRIANGLES);else if(N.isLine){let Le=G.linewidth;Le===void 0&&(Le=1),le.setLineWidth(Le*gt()),N.isLineSegments?Je.setMode(R.LINES):N.isLineLoop?Je.setMode(R.LINE_LOOP):Je.setMode(R.LINE_STRIP)}else N.isPoints?Je.setMode(R.POINTS):N.isSprite&&Je.setMode(R.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)oa("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Je.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))Je.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Le=N._multiDrawStarts,ot=N._multiDrawCounts,Xe=N._multiDrawCount,At=Me?S.get(Me).bytesPerElement:1,Mn=de.get(G).currentProgram.getUniforms();for(let Rt=0;Rt<Xe;Rt++)Mn.setValue(R,"_gl_DrawID",Rt),Je.render(Le[Rt]/At,ot[Rt])}else if(N.isInstancedMesh)Je.renderInstances(ze,dt,N.count);else if(B.isInstancedBufferGeometry){const Le=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ot=Math.min(B.instanceCount,Le);Je.renderInstances(ze,dt,ot)}else Je.render(ze,dt)};function nt(m,D,B){m.transparent===!0&&m.side===Dt&&m.forceSinglePass===!1?(m.side=wt,m.needsUpdate=!0,ai(m,D,B),m.side=$n,m.needsUpdate=!0,ai(m,D,B),m.side=Dt):ai(m,D,B)}this.compile=function(m,D,B=null){B===null&&(B=m),l=fe.get(B),l.init(D),b.push(l),B.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(l.pushLight(N),N.castShadow&&l.pushShadow(N))}),m!==B&&m.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(l.pushLight(N),N.castShadow&&l.pushShadow(N))}),l.setupLights();const G=new Set;return m.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ae=N.material;if(ae)if(Array.isArray(ae))for(let me=0;me<ae.length;me++){const Te=ae[me];nt(Te,B,N),G.add(Te)}else nt(ae,B,N),G.add(ae)}),l=b.pop(),G},this.compileAsync=function(m,D,B=null){const G=this.compile(m,D,B);return new Promise(N=>{function ae(){if(G.forEach(function(me){de.get(me).currentProgram.isReady()&&G.delete(me)}),G.size===0){N(m);return}setTimeout(ae,10)}se.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Ke=null;function zt(m){Ke&&Ke(m)}function Ft(){sn.stop()}function Wa(){sn.start()}const sn=new $o;sn.setAnimationLoop(zt),typeof self<"u"&&sn.setContext(self),this.setAnimationLoop=function(m){Ke=m,te.setAnimationLoop(m),m===null?sn.stop():sn.start()},te.addEventListener("sessionstart",Ft),te.addEventListener("sessionend",Wa),this.render=function(m,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(D),D=te.getCamera()),m.isScene===!0&&m.onBeforeRender(E,m,D,L),l=fe.get(m,b.length),l.init(D),b.push(l),Q.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Pe.setFromProjectionMatrix(Q,Za,D.reversedDepth),W=this.localClippingEnabled,Fe=J.init(this.clippingPlanes,W),c=k.get(m,A.length),c.init(),A.push(c),te.enabled===!0&&te.isPresenting===!0){const ae=E.xr.getDepthSensingMesh();ae!==null&&Li(ae,D,-1/0,E.sortObjects)}Li(m,D,0,E.sortObjects),c.finish(),E.sortObjects===!0&&c.sort(ve,Ae),He=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,He&&_e.addToRenderList(c,m),this.info.render.frame++,Fe===!0&&J.beginShadows();const B=l.state.shadowsArray;ge.render(B,m,D),Fe===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=c.opaque,N=c.transmissive;if(l.setupLights(),D.isArrayCamera){const ae=D.cameras;if(N.length>0)for(let me=0,Te=ae.length;me<Te;me++){const Me=ae[me];qa(G,N,m,Me)}He&&_e.render(m);for(let me=0,Te=ae.length;me<Te;me++){const Me=ae[me];Xa(c,m,Me,Me.viewport)}}else N.length>0&&qa(G,N,m,D),He&&_e.render(m),Xa(c,m,D);L!==null&&U===0&&(De.updateMultisampleRenderTarget(L),De.updateRenderTargetMipmap(L)),m.isScene===!0&&m.onAfterRender(E,m,D),he.resetDefaultState(),v=-1,M=null,b.pop(),b.length>0?(l=b[b.length-1],Fe===!0&&J.setGlobalState(E.clippingPlanes,l.state.camera)):l=null,A.pop(),A.length>0?c=A[A.length-1]:c=null};function Li(m,D,B,G){if(m.visible===!1)return;if(m.layers.test(D.layers)){if(m.isGroup)B=m.renderOrder;else if(m.isLOD)m.autoUpdate===!0&&m.update(D);else if(m.isLight)l.pushLight(m),m.castShadow&&l.pushShadow(m);else if(m.isSprite){if(!m.frustumCulled||Pe.intersectsSprite(m)){G&&Ie.setFromMatrixPosition(m.matrixWorld).applyMatrix4(Q);const me=O.update(m),Te=m.material;Te.visible&&c.push(m,me,Te,B,Ie.z,null)}}else if((m.isMesh||m.isLine||m.isPoints)&&(!m.frustumCulled||Pe.intersectsObject(m))){const me=O.update(m),Te=m.material;if(G&&(m.boundingSphere!==void 0?(m.boundingSphere===null&&m.computeBoundingSphere(),Ie.copy(m.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ie.copy(me.boundingSphere.center)),Ie.applyMatrix4(m.matrixWorld).applyMatrix4(Q)),Array.isArray(Te)){const Me=me.groups;for(let Ue=0,Ne=Me.length;Ue<Ne;Ue++){const ye=Me[Ue],ze=Te[ye.materialIndex];ze&&ze.visible&&c.push(m,me,ze,B,Ie.z,ye)}}else Te.visible&&c.push(m,me,Te,B,Ie.z,null)}}const ae=m.children;for(let me=0,Te=ae.length;me<Te;me++)Li(ae[me],D,B,G)}function Xa(m,D,B,G){const N=m.opaque,ae=m.transmissive,me=m.transparent;l.setupLightsView(B),Fe===!0&&J.setGlobalState(E.clippingPlanes,B),G&&le.viewport(P.copy(G)),N.length>0&&ii(N,D,B),ae.length>0&&ii(ae,D,B),me.length>0&&ii(me,D,B),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function qa(m,D,B,G){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;l.state.transmissionRenderTarget[G.id]===void 0&&(l.state.transmissionRenderTarget[G.id]=new yn(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?bi:Sn,minFilter:bn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));const ae=l.state.transmissionRenderTarget[G.id],me=G.viewport||P;ae.setSize(me.z*E.transmissionResolutionScale,me.w*E.transmissionResolutionScale);const Te=E.getRenderTarget(),Me=E.getActiveCubeFace(),Ue=E.getActiveMipmapLevel();E.setRenderTarget(ae),E.getClearColor(Y),K=E.getClearAlpha(),K<1&&E.setClearColor(16777215,.5),E.clear(),He&&_e.render(B);const Ne=E.toneMapping;E.toneMapping=tn;const ye=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),l.setupLightsView(G),Fe===!0&&J.setGlobalState(E.clippingPlanes,G),ii(m,B,G),De.updateMultisampleRenderTarget(ae),De.updateRenderTargetMipmap(ae),se.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Ze=0,dt=D.length;Ze<dt;Ze++){const it=D[Ze],Je=it.object,Le=it.geometry,ot=it.material,Xe=it.group;if(ot.side===Dt&&Je.layers.test(G.layers)){const At=ot.side;ot.side=wt,ot.needsUpdate=!0,Ya(Je,B,G,Le,ot,Xe),ot.side=At,ot.needsUpdate=!0,ze=!0}}ze===!0&&(De.updateMultisampleRenderTarget(ae),De.updateRenderTargetMipmap(ae))}E.setRenderTarget(Te,Me,Ue),E.setClearColor(Y,K),ye!==void 0&&(G.viewport=ye),E.toneMapping=Ne}function ii(m,D,B){const G=D.isScene===!0?D.overrideMaterial:null;for(let N=0,ae=m.length;N<ae;N++){const me=m[N],Te=me.object,Me=me.geometry,Ue=me.group;let Ne=me.material;Ne.allowOverride===!0&&G!==null&&(Ne=G),Te.layers.test(B.layers)&&Ya(Te,D,B,Me,Ne,Ue)}}function Ya(m,D,B,G,N,ae){m.onBeforeRender(E,D,B,G,N,ae),m.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,m.matrixWorld),m.normalMatrix.getNormalMatrix(m.modelViewMatrix),N.onBeforeRender(E,D,B,G,m,ae),N.transparent===!0&&N.side===Dt&&N.forceSinglePass===!1?(N.side=wt,N.needsUpdate=!0,E.renderBufferDirect(B,D,G,N,m,ae),N.side=$n,N.needsUpdate=!0,E.renderBufferDirect(B,D,G,N,m,ae),N.side=Dt):E.renderBufferDirect(B,D,G,N,m,ae),m.onAfterRender(E,D,B,G,N,ae)}function ai(m,D,B){D.isScene!==!0&&(D=Re);const G=de.get(m),N=l.state.lights,ae=l.state.shadowsArray,me=N.state.version,Te=V.getParameters(m,N.state,ae,D,B),Me=V.getProgramCacheKey(Te);let Ue=G.programs;G.environment=m.isMeshStandardMaterial?D.environment:null,G.fog=D.fog,G.envMap=(m.isMeshStandardMaterial?$e:tt).get(m.envMap||G.environment),G.envMapRotation=G.environment!==null&&m.envMap===null?D.environmentRotation:m.envMapRotation,Ue===void 0&&(m.addEventListener("dispose",$),Ue=new Map,G.programs=Ue);let Ne=Ue.get(Me);if(Ne!==void 0){if(G.currentProgram===Ne&&G.lightsStateVersion===me)return $a(m,Te),Ne}else Te.uniforms=V.getUniforms(m),m.onBeforeCompile(Te,E),Ne=V.acquireProgram(Te,Me),Ue.set(Me,Ne),G.uniforms=Te.uniforms;const ye=G.uniforms;return(!m.isShaderMaterial&&!m.isRawShaderMaterial||m.clipping===!0)&&(ye.clippingPlanes=J.uniform),$a(m,Te),G.needsLights=fs(m),G.lightsStateVersion=me,G.needsLights&&(ye.ambientLightColor.value=N.state.ambient,ye.lightProbe.value=N.state.probe,ye.directionalLights.value=N.state.directional,ye.directionalLightShadows.value=N.state.directionalShadow,ye.spotLights.value=N.state.spot,ye.spotLightShadows.value=N.state.spotShadow,ye.rectAreaLights.value=N.state.rectArea,ye.ltc_1.value=N.state.rectAreaLTC1,ye.ltc_2.value=N.state.rectAreaLTC2,ye.pointLights.value=N.state.point,ye.pointLightShadows.value=N.state.pointShadow,ye.hemisphereLights.value=N.state.hemi,ye.directionalShadowMap.value=N.state.directionalShadowMap,ye.directionalShadowMatrix.value=N.state.directionalShadowMatrix,ye.spotShadowMap.value=N.state.spotShadowMap,ye.spotLightMatrix.value=N.state.spotLightMatrix,ye.spotLightMap.value=N.state.spotLightMap,ye.pointShadowMap.value=N.state.pointShadowMap,ye.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Ne,G.uniformsList=null,Ne}function Ka(m){if(m.uniformsList===null){const D=m.currentProgram.getUniforms();m.uniformsList=_i.seqWithValue(D.seq,m.uniforms)}return m.uniformsList}function $a(m,D){const B=de.get(m);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function ds(m,D,B,G,N){D.isScene!==!0&&(D=Re),De.resetTextureUnits();const ae=D.fog,me=G.isMeshStandardMaterial?D.environment:null,Te=L===null?E.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ai,Me=(G.isMeshStandardMaterial?$e:tt).get(G.envMap||me),Ue=G.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ne=!!B.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),ye=!!B.morphAttributes.position,ze=!!B.morphAttributes.normal,Ze=!!B.morphAttributes.color;let dt=tn;G.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(dt=E.toneMapping);const it=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Je=it!==void 0?it.length:0,Le=de.get(G),ot=l.state.lights;if(Fe===!0&&(W===!0||m!==M)){const St=m===M&&G.id===v;J.setState(G,m,St)}let Xe=!1;G.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==ot.state.version||Le.outputColorSpace!==Te||N.isBatchedMesh&&Le.batching===!1||!N.isBatchedMesh&&Le.batching===!0||N.isBatchedMesh&&Le.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Le.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Le.instancing===!1||!N.isInstancedMesh&&Le.instancing===!0||N.isSkinnedMesh&&Le.skinning===!1||!N.isSkinnedMesh&&Le.skinning===!0||N.isInstancedMesh&&Le.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Le.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Le.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Le.instancingMorph===!1&&N.morphTexture!==null||Le.envMap!==Me||G.fog===!0&&Le.fog!==ae||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==J.numPlanes||Le.numIntersection!==J.numIntersection)||Le.vertexAlphas!==Ue||Le.vertexTangents!==Ne||Le.morphTargets!==ye||Le.morphNormals!==ze||Le.morphColors!==Ze||Le.toneMapping!==dt||Le.morphTargetsCount!==Je)&&(Xe=!0):(Xe=!0,Le.__version=G.version);let At=Le.currentProgram;Xe===!0&&(At=ai(G,D,N));let Mn=!1,Rt=!1,Nn=!1;const st=At.getUniforms(),Ct=Le.uniforms;if(le.useProgram(At.program)&&(Mn=!0,Rt=!0,Nn=!0),G.id!==v&&(v=G.id,Rt=!0),Mn||M!==m){le.buffers.depth.getReversed()&&m.reversedDepth!==!0&&(m._reversedDepth=!0,m.updateProjectionMatrix()),st.setValue(R,"projectionMatrix",m.projectionMatrix),st.setValue(R,"viewMatrix",m.matrixWorldInverse);const Et=st.map.cameraPosition;Et!==void 0&&Et.setValue(R,Ee.setFromMatrixPosition(m.matrixWorld)),ne.logarithmicDepthBuffer&&st.setValue(R,"logDepthBufFC",2/(Math.log(m.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&st.setValue(R,"isOrthographic",m.isOrthographicCamera===!0),M!==m&&(M=m,Rt=!0,Nn=!0)}if(N.isSkinnedMesh){st.setOptional(R,N,"bindMatrix"),st.setOptional(R,N,"bindMatrixInverse");const St=N.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),st.setValue(R,"boneTexture",St.boneTexture,De))}N.isBatchedMesh&&(st.setOptional(R,N,"batchingTexture"),st.setValue(R,"batchingTexture",N._matricesTexture,De),st.setOptional(R,N,"batchingIdTexture"),st.setValue(R,"batchingIdTexture",N._indirectTexture,De),st.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&st.setValue(R,"batchingColorTexture",N._colorsTexture,De));const yt=B.morphAttributes;if((yt.position!==void 0||yt.normal!==void 0||yt.color!==void 0)&&Z.update(N,B,At),(Rt||Le.receiveShadow!==N.receiveShadow)&&(Le.receiveShadow=N.receiveShadow,st.setValue(R,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Ct.envMap.value=Me,Ct.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&D.environment!==null&&(Ct.envMapIntensity.value=D.environmentIntensity),Rt&&(st.setValue(R,"toneMappingExposure",E.toneMappingExposure),Le.needsLights&&us(Ct,Nn),ae&&G.fog===!0&&q.refreshFogUniforms(Ct,ae),q.refreshMaterialUniforms(Ct,G,H,re,l.state.transmissionRenderTarget[m.id]),_i.upload(R,Ka(Le),Ct,De)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(_i.upload(R,Ka(Le),Ct,De),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&st.setValue(R,"center",N.center),st.setValue(R,"modelViewMatrix",N.modelViewMatrix),st.setValue(R,"normalMatrix",N.normalMatrix),st.setValue(R,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const St=G.uniformsGroups;for(let Et=0,Di=St.length;Et<Di;Et++){const ln=St[Et];Oe.update(ln,At),Oe.bind(ln,At)}}return At}function us(m,D){m.ambientLightColor.needsUpdate=D,m.lightProbe.needsUpdate=D,m.directionalLights.needsUpdate=D,m.directionalLightShadows.needsUpdate=D,m.pointLights.needsUpdate=D,m.pointLightShadows.needsUpdate=D,m.spotLights.needsUpdate=D,m.spotLightShadows.needsUpdate=D,m.rectAreaLights.needsUpdate=D,m.hemisphereLights.needsUpdate=D}function fs(m){return m.isMeshLambertMaterial||m.isMeshToonMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isShadowMaterial||m.isShaderMaterial&&m.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(m,D,B){const G=de.get(m);G.__autoAllocateDepthBuffer=m.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),de.get(m.texture).__webglTexture=D,de.get(m.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:B,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(m,D){const B=de.get(m);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0};const hs=R.createFramebuffer();this.setRenderTarget=function(m,D=0,B=0){L=m,C=D,U=B;let G=!0,N=null,ae=!1,me=!1;if(m){const Me=de.get(m);if(Me.__useDefaultFramebuffer!==void 0)le.bindFramebuffer(R.FRAMEBUFFER,null),G=!1;else if(Me.__webglFramebuffer===void 0)De.setupRenderTarget(m);else if(Me.__hasExternalTextures)De.rebindTextures(m,de.get(m.texture).__webglTexture,de.get(m.depthTexture).__webglTexture);else if(m.depthBuffer){const ye=m.depthTexture;if(Me.__boundDepthTexture!==ye){if(ye!==null&&de.has(ye)&&(m.width!==ye.image.width||m.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");De.setupDepthRenderbuffer(m)}}const Ue=m.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(me=!0);const Ne=de.get(m).__webglFramebuffer;m.isWebGLCubeRenderTarget?(Array.isArray(Ne[D])?N=Ne[D][B]:N=Ne[D],ae=!0):m.samples>0&&De.useMultisampledRTT(m)===!1?N=de.get(m).__webglMultisampledFramebuffer:Array.isArray(Ne)?N=Ne[B]:N=Ne,P.copy(m.viewport),F.copy(m.scissor),z=m.scissorTest}else P.copy(Ce).multiplyScalar(H).floor(),F.copy(Ve).multiplyScalar(H).floor(),z=We;if(B!==0&&(N=hs),le.bindFramebuffer(R.FRAMEBUFFER,N)&&G&&le.drawBuffers(m,N),le.viewport(P),le.scissor(F),le.setScissorTest(z),ae){const Me=de.get(m.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+D,Me.__webglTexture,B)}else if(me){const Me=D;for(let Ue=0;Ue<m.textures.length;Ue++){const Ne=de.get(m.textures[Ue]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ue,Ne.__webglTexture,B,Me)}}else if(m!==null&&B!==0){const Me=de.get(m.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Me.__webglTexture,B)}v=-1},this.readRenderTargetPixels=function(m,D,B,G,N,ae,me,Te=0){if(!(m&&m.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=de.get(m).__webglFramebuffer;if(m.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){le.bindFramebuffer(R.FRAMEBUFFER,Me);try{const Ue=m.textures[Te],Ne=Ue.format,ye=Ue.type;if(!ne.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=m.width-G&&B>=0&&B<=m.height-N&&(m.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Te),R.readPixels(D,B,G,N,Se.convert(Ne),Se.convert(ye),ae))}finally{const Ue=L!==null?de.get(L).__webglFramebuffer:null;le.bindFramebuffer(R.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(m,D,B,G,N,ae,me,Te=0){if(!(m&&m.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=de.get(m).__webglFramebuffer;if(m.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me)if(D>=0&&D<=m.width-G&&B>=0&&B<=m.height-N){le.bindFramebuffer(R.FRAMEBUFFER,Me);const Ue=m.textures[Te],Ne=Ue.format,ye=Ue.type;if(!ne.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,ze),R.bufferData(R.PIXEL_PACK_BUFFER,ae.byteLength,R.STREAM_READ),m.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Te),R.readPixels(D,B,G,N,Se.convert(Ne),Se.convert(ye),0);const Ze=L!==null?de.get(L).__webglFramebuffer:null;le.bindFramebuffer(R.FRAMEBUFFER,Ze);const dt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await vs(R,dt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,ze),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ae),R.deleteBuffer(ze),R.deleteSync(dt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(m,D=null,B=0){const G=Math.pow(2,-B),N=Math.floor(m.image.width*G),ae=Math.floor(m.image.height*G),me=D!==null?D.x:0,Te=D!==null?D.y:0;De.setTexture2D(m,0),R.copyTexSubImage2D(R.TEXTURE_2D,B,0,0,me,Te,N,ae),le.unbindTexture()};const ps=R.createFramebuffer(),ms=R.createFramebuffer();this.copyTextureToTexture=function(m,D,B=null,G=null,N=0,ae=null){ae===null&&(N!==0?(oa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ae=N,N=0):ae=0);let me,Te,Me,Ue,Ne,ye,ze,Ze,dt;const it=m.isCompressedTexture?m.mipmaps[ae]:m.image;if(B!==null)me=B.max.x-B.min.x,Te=B.max.y-B.min.y,Me=B.isBox3?B.max.z-B.min.z:1,Ue=B.min.x,Ne=B.min.y,ye=B.isBox3?B.min.z:0;else{const yt=Math.pow(2,-N);me=Math.floor(it.width*yt),Te=Math.floor(it.height*yt),m.isDataArrayTexture?Me=it.depth:m.isData3DTexture?Me=Math.floor(it.depth*yt):Me=1,Ue=0,Ne=0,ye=0}G!==null?(ze=G.x,Ze=G.y,dt=G.z):(ze=0,Ze=0,dt=0);const Je=Se.convert(D.format),Le=Se.convert(D.type);let ot;D.isData3DTexture?(De.setTexture3D(D,0),ot=R.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(De.setTexture2DArray(D,0),ot=R.TEXTURE_2D_ARRAY):(De.setTexture2D(D,0),ot=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,D.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,D.unpackAlignment);const Xe=R.getParameter(R.UNPACK_ROW_LENGTH),At=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Mn=R.getParameter(R.UNPACK_SKIP_PIXELS),Rt=R.getParameter(R.UNPACK_SKIP_ROWS),Nn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,it.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,it.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ue),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ne),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ye);const st=m.isDataArrayTexture||m.isData3DTexture,Ct=D.isDataArrayTexture||D.isData3DTexture;if(m.isDepthTexture){const yt=de.get(m),St=de.get(D),Et=de.get(yt.__renderTarget),Di=de.get(St.__renderTarget);le.bindFramebuffer(R.READ_FRAMEBUFFER,Et.__webglFramebuffer),le.bindFramebuffer(R.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let ln=0;ln<Me;ln++)st&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,de.get(m).__webglTexture,N,ye+ln),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,de.get(D).__webglTexture,ae,dt+ln)),R.blitFramebuffer(Ue,Ne,me,Te,ze,Ze,me,Te,R.DEPTH_BUFFER_BIT,R.NEAREST);le.bindFramebuffer(R.READ_FRAMEBUFFER,null),le.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(N!==0||m.isRenderTargetTexture||de.has(m)){const yt=de.get(m),St=de.get(D);le.bindFramebuffer(R.READ_FRAMEBUFFER,ps),le.bindFramebuffer(R.DRAW_FRAMEBUFFER,ms);for(let Et=0;Et<Me;Et++)st?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,yt.__webglTexture,N,ye+Et):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,yt.__webglTexture,N),Ct?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,St.__webglTexture,ae,dt+Et):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,St.__webglTexture,ae),N!==0?R.blitFramebuffer(Ue,Ne,me,Te,ze,Ze,me,Te,R.COLOR_BUFFER_BIT,R.NEAREST):Ct?R.copyTexSubImage3D(ot,ae,ze,Ze,dt+Et,Ue,Ne,me,Te):R.copyTexSubImage2D(ot,ae,ze,Ze,Ue,Ne,me,Te);le.bindFramebuffer(R.READ_FRAMEBUFFER,null),le.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Ct?m.isDataTexture||m.isData3DTexture?R.texSubImage3D(ot,ae,ze,Ze,dt,me,Te,Me,Je,Le,it.data):D.isCompressedArrayTexture?R.compressedTexSubImage3D(ot,ae,ze,Ze,dt,me,Te,Me,Je,it.data):R.texSubImage3D(ot,ae,ze,Ze,dt,me,Te,Me,Je,Le,it):m.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ae,ze,Ze,me,Te,Je,Le,it.data):m.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ae,ze,Ze,it.width,it.height,Je,it.data):R.texSubImage2D(R.TEXTURE_2D,ae,ze,Ze,me,Te,Je,Le,it);R.pixelStorei(R.UNPACK_ROW_LENGTH,Xe),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,At),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Mn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Rt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Nn),ae===0&&D.generateMipmaps&&R.generateMipmap(ot),le.unbindTexture()},this.initRenderTarget=function(m){de.get(m).__webglFramebuffer===void 0&&De.setupRenderTarget(m)},this.initTexture=function(m){m.isCubeTexture?De.setTextureCube(m,0):m.isData3DTexture?De.setTexture3D(m,0):m.isDataArrayTexture||m.isCompressedArrayTexture?De.setTexture2DArray(m,0):De.setTexture2D(m,0),le.unbindTexture()},this.resetState=function(){C=0,U=0,L=null,le.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Za}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(n),t.unpackColorSpace=ht._getUnpackColorSpace()}}const vi=256,Xn=6378137,rn=85.0511287798066,Dh=Math.PI*Xn,Uh=2*Dh,qn=e=>((e+180)%360+360)%360-180,so=e=>{const t=Math.max(-rn,Math.min(rn,e))*Math.PI/180;return Xn*Math.log(Math.tan(Math.PI/4+t/2))};function Ih(e,n,t){if(!Number.isInteger(t)||t<0||t>30)throw new RangeError("Zoom must be an integer from 0 to 30");const i=2**t,r=Math.floor((qn(n)+180)/360*i),s=Math.max(-rn,Math.min(rn,e))*Math.PI/180,o=Math.floor((1-Math.asinh(Math.tan(s))/Math.PI)/2*i);return{x:(r%i+i)%i,y:Math.max(0,Math.min(i-1,o)),z:t,n:i}}function Nh(e,n,t){const i=Ih(e,n,t),r=vi*i.n,a=(qn(n)+180)/360*r,o=Math.max(-rn,Math.min(rn,e))*Math.PI/180,h=(1-Math.asinh(Math.tan(o))/Math.PI)/2*r;return{tile:i,u:a/vi-i.x,v:h/vi-i.y}}class Oh{zoom;anchor;originTile;anchorU;anchorV;latitudeScale;tileSpan;originNorthing;constructor(n,t=12){if(!Number.isFinite(n.lat)||!Number.isFinite(n.lon)||Math.abs(n.lat)>90)throw new RangeError("Anchor must be a valid WGS84 latitude/longitude");this.anchor={lat:Math.max(-rn,Math.min(rn,n.lat)),lon:qn(n.lon)},this.zoom=t;const i=Nh(this.anchor.lat,this.anchor.lon,t);this.originTile=i.tile,this.anchorU=i.u,this.anchorV=i.v,this.latitudeScale=Math.cos(this.anchor.lat*Math.PI/180),this.originNorthing=so(this.anchor.lat),this.tileSpan=Uh/this.originTile.n*this.latitudeScale}toLocal(n){const t=qn(n.lon-this.anchor.lon),i=Xn*t*Math.PI/180,r=so(n.lat)-this.originNorthing;return{x:i*this.latitudeScale,z:r*this.latitudeScale}}toGeo(n){const t=qn(this.anchor.lon+n.x/(Xn*this.latitudeScale)*180/Math.PI),i=this.originNorthing+n.z/this.latitudeScale;return{lon:t,lat:(2*Math.atan(Math.exp(i/Xn))-Math.PI/2)*180/Math.PI}}tileOrigin(n,t){return{x:(n-this.anchorU)*this.tileSpan,z:(t+this.anchorV)*this.tileSpan}}tileOffsetAt(n,t){const i=this.anchorU+n/this.tileSpan,r=this.anchorV-t/this.tileSpan,a=Math.floor(i),s=Math.floor(r);return{dx:a>this.originTile.n/2?a-this.originTile.n:a<-this.originTile.n/2?a+this.originTile.n:a,dz:-s||0,u:i-a,v:r-s}}tileAddress(n,t){const i=this.originTile.n;return{x:((this.originTile.x+n)%i+i)%i,y:Math.max(0,Math.min(i-1,this.originTile.y-t)),z:this.zoom,n:i}}}const Pa=[{name:"Midtown Manhattan, New York",lat:40.758,lon:-73.9855,terrain:"URBAN JUNGLE"},{name:"Moab, Utah",lat:38.5733,lon:-109.5498,terrain:"RED ROCK COUNTRY"},{name:"Mount Kisco, New York",lat:41.204406,lon:-73.727446,terrain:"WESTCHESTER BACKROADS"},{name:"Grand Canyon",lat:36.1069,lon:-112.1129,terrain:"THE BIG DROP"},{name:"Mount Everest",lat:27.9881,lon:86.925,terrain:"ROOF OF THE WORLD"},{name:"San Francisco",lat:37.7749,lon:-122.4194,terrain:"HILL CLIMBER"},{name:"Tokyo, Japan",lat:35.6762,lon:139.6503,terrain:"NEON TRAILS"},{name:"Sahara Desert",lat:23.4162,lon:25.6628,terrain:"ENDLESS DUNES"},{name:"Swiss Alps",lat:46.8182,lon:9.2275,terrain:"HIGH ALTITUDE"}];function Fh(e){const n=e.trim().match(/^\s*(-?\d+(?:\.\d+)?)\s*[, ]\s*(-?\d+(?:\.\d+)?)\s*$/);if(!n)return null;const t=Number(n[1]),i=Number(n[2]);return Math.abs(t)<=90&&Math.abs(i)<=180?{name:`${t.toFixed(4)}, ${i.toFixed(4)}`,lat:t,lon:i}:null}let lo=0;const qi=new Map;async function Bh(e){const n=Fh(e);if(n)return[n];const t=e.toLowerCase().trim();if(!t)return[];if(qi.has(t))return qi.get(t);const i=Math.max(0,1100-(Date.now()-lo));i&&await new Promise(h=>setTimeout(h,i)),lo=Date.now();const r=new URL("https://nominatim.openstreetmap.org/search");r.search=new URLSearchParams({q:e,format:"jsonv2",limit:"5"}).toString();const a=await fetch(r,{headers:{Accept:"application/json"}});if(!a.ok)throw new Error(`Location search unavailable (${a.status})`);const o=(await a.json()).map(h=>({name:h.display_name.split(",").slice(0,3).join(",").trim(),lat:+h.lat,lon:+h.lon}));return qi.set(t,o),o}function Gh(e,n,t,i){const r=Math.max(0,Math.min(n-1,t*(n-1))),a=Math.max(0,Math.min(n-1,i*(n-1))),s=Math.floor(r),o=Math.floor(a),h=Math.min(n-1,s+1),f=Math.min(n-1,o+1),p=r-s,d=a-o,g=(_,T)=>e[T*n+_]??0;return(g(s,o)*(1-p)+g(h,o)*p)*(1-d)+(g(s,f)*(1-p)+g(h,f)*p)*d}function co(e,n,t){const i=new Float32Array((t+1)**2);for(let r=0;r<=t;r++)for(let a=0;a<=t;a++)i[r*(t+1)+a]=Gh(e,n,a/t,r/t);return i}function uo(e,n,t,i){const r=Math.max(0,Math.min(n,t*n)),a=Math.max(0,Math.min(n,i*n)),s=Math.min(n-1,Math.floor(r)),o=Math.min(n-1,Math.floor(a)),h=r-s,f=a-o,p=n+1,d=e[o*p+s]??0,g=e[o*p+s+1]??0,_=e[(o+1)*p+s]??0,T=e[(o+1)*p+s+1]??0;return h>=f?d*(1-h)+g*(h-f)+T*f:d*(1-f)+T*h+_*(f-h)}function Hh(e){const n=new Map,t=new Set;for(const i of e){const r=i.segments+1;for(let a=0;a<=i.segments;a++)for(const[s,o]of[[a,0],[a,i.segments],[0,a],[i.segments,a]]){const h=o*r+s,f=`${i.dx*i.segments+s},${i.dz*i.segments-o}`,p=n.get(f)??[];p.push({tile:i,index:h}),n.set(f,p)}}for(const i of n.values()){if(i.length<2)continue;const r=i.reduce((a,s)=>a+s.tile.grid[s.index],0)/i.length;for(const a of i)a.tile.grid[a.index]!==r&&(a.tile.grid[a.index]=r,t.add(a.tile))}return t}const Yi=12,Lt=vi,kh=36,jt=new Map;function fo(e,n,t){const i=`${t}/${e}/${n}`;if(jt.has(i)){const a=jt.get(i);return jt.delete(i),jt.set(i,a),a}const r=(async()=>{try{const a=new Image;a.crossOrigin="anonymous",a.src=`https://s3.amazonaws.com/elevation-tiles-prod/terrarium/${t}/${e}/${n}.png`,await new Promise((p,d)=>{a.onload=()=>p(),a.onerror=()=>d(new Error("terrain tile unavailable"))});const s=document.createElement("canvas");s.width=Lt,s.height=Lt;const o=s.getContext("2d",{willReadFrequently:!0});if(!o)throw new Error("canvas unavailable");o.drawImage(a,0,0,Lt,Lt);const h=o.getImageData(0,0,Lt,Lt).data,f=new Float32Array(Lt*Lt);for(let p=0;p<f.length;p++)f[p]=h[p*4]*256+h[p*4+1]+h[p*4+2]/256-32768;return{heights:f}}catch{return{heights:new Float32Array(Lt*Lt)}}})();for(jt.set(i,r);jt.size>kh;)jt.delete(jt.keys().next().value);return r}class Vh{group=new Yt;place=null;frame=null;heightSampleMs=0;heightSamples=0;tileBuildMs=0;tileBuilds=0;detailQuality=1;baseline=0;tiles=new Map;requests=new Set;coverage={x:NaN,z:NaN};generation=0;centerSegments;activeTerrainShader=null;biome={desert:1,alpine:0};material;constructor(n=127){this.centerSegments=n,this.material=new vt({color:16777215,roughness:.96,metalness:0,vertexColors:!0}),this.material.onBeforeCompile=t=>{t.uniforms.uRumbleDesert={value:this.biome.desert},t.uniforms.uRumbleAlpine={value:this.biome.alpine},t.uniforms.uRumbleDetail={value:this.detailQuality},this.activeTerrainShader=t,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.78, 0.81, 0.77), rumbleAlpineSnow * 0.82);`)},this.material.customProgramCacheKey=()=>"rumble-terrain-slope-biome-v1"}async load(n){this.clear();const t=++this.generation;this.place=n,this.frame=new Oh(n,Yi);const i=n.name.toLowerCase();this.biome.desert=/moab|grand canyon|sahara|utah|arizona/i.test(i)?1:0,this.biome.alpine=/alps|everest|mountain|swiss/i.test(i)?1:0,this.activeTerrainShader&&(this.activeTerrainShader.uniforms.uRumbleDesert.value=this.biome.desert,this.activeTerrainShader.uniforms.uRumbleAlpine.value=this.biome.alpine);const r=this.frame.tileAddress(0,0),a=await fo(r.x,r.y,Yi);if(t!==this.generation)return;const s=co(a.heights,Lt,this.centerSegments);this.baseline=uo(s,this.centerSegments,this.frame.anchorU,this.frame.anchorV),this.install(0,0,a,this.centerSegments,s),this.ensureRegion(0,0)}key(n,t){return`${n},${t}`}address(n,t){return this.frame.tileAddress(n,t)}async ensureRegion(n,t){const i=this.frame;if(!i)return;const r=i.tileOffsetAt(n,t),a=r.dx,s=r.dz;if(this.coverage.x===a&&this.coverage.z===s)return;this.coverage={x:a,z:s};const o=this.generation,h=[],f=this.centerSegments;for(let p=s-1;p<=s+1;p++)for(let d=a-1;d<=a+1;d++){const g=this.key(d,p),_=d===a&&p===s?this.centerSegments:f,T=this.tiles.get(g);T&&T.segments!==_&&(this.group.remove(T.mesh),T.mesh.geometry.dispose(),this.tiles.delete(g));const x=`${o}:${g}`;if(this.tiles.has(g)||this.requests.has(x))continue;this.requests.add(x);const c=this.address(d,p);h.push(fo(c.x,c.y,Yi).then(l=>{o===this.generation&&Math.abs(d-this.coverage.x)<=1&&Math.abs(p-this.coverage.z)<=1&&this.install(d,p,l,_)}).finally(()=>this.requests.delete(x)))}for(const[p,d]of this.tiles)(Math.abs(d.dx-a)>1||Math.abs(d.dz-s)>1)&&(this.group.remove(d.mesh),d.mesh.geometry.dispose(),this.tiles.delete(p));await Promise.all(h)}install(n,t,i,r=63,a){const s=this.key(n,t);if(this.tiles.has(s))return;const o=performance.now(),h=this.frame,f=a??co(i.heights,Lt,r),p=new nn,d=new Float32Array((r+1)**2*3),g=[],_=[];let T=1/0,x=-1/0;for(const E of f)T=Math.min(T,E),x=Math.max(x,E);const c=/moab|grand canyon|sahara|utah|arizona/i.test(this.place?.name??""),l=(c?["#d0b587","#b99360","#977046","#796044"]:["#c9c1a6","#a49c75","#758557","#657355"]).map(E=>new Ye(E)),A=h.tileOrigin(n,t);for(let E=0;E<=r;E++)for(let w=0;w<=r;w++){const C=E*(r+1)+w,U=f[C],L=(U-T)/Math.max(1,x-T);d[C*3]=A.x+w/r*h.tileSpan,d[C*3+1]=lt.clamp((U-this.baseline)*1.25,-900,1800),d[C*3+2]=A.z-E/r*h.tileSpan;const v=l[L>.76?0:L>.49?1:L>.22?2:3];g.push(v.r,v.g,v.b)}for(let E=0;E<r;E++)for(let w=0;w<r;w++){const C=E*(r+1)+w,U=C+1,L=C+r+1,v=L+1;_.push(C,U,v,C,v,L)}p.setIndex(_),p.setAttribute("position",new It(d,3)),p.setAttribute("color",new ga(g,3)),p.computeVertexNormals();const b=new ft(p,this.material);b.receiveShadow=!0,b.userData.kind="terrain",this.group.add(b),this.tiles.set(s,{data:i,grid:f,mesh:b,segments:r,dx:n,dz:t}),this.reconcileSharedEdges(),this.tileBuildMs+=performance.now()-o,this.tileBuilds++}reconcileSharedEdges(){const n=Hh(Array.from(this.tiles.values()));for(const t of n)this.rebuildGeometry(t)}rebuildGeometry(n){const{segments:t,grid:i,dx:r,dz:a}=n,s=this.frame,o=new nn,h=new Float32Array((t+1)**2*3),f=[],p=[];let d=1/0,g=-1/0;for(const c of i)d=Math.min(d,c),g=Math.max(g,c);const _=/moab|grand canyon|sahara|utah|arizona/i.test(this.place?.name??""),T=(_?["#d0b587","#b99360","#977046","#796044"]:["#c9c1a6","#a49c75","#758557","#657355"]).map(c=>new Ye(c)),x=s.tileOrigin(r,a);for(let c=0;c<=t;c++)for(let l=0;l<=t;l++){const A=c*(t+1)+l,b=i[A],E=(b-d)/Math.max(1,g-d);h[A*3]=x.x+l/t*s.tileSpan,h[A*3+1]=lt.clamp((b-this.baseline)*1.25,-900,1800),h[A*3+2]=x.z-c/t*s.tileSpan;const w=T[E>.76?0:E>.49?1:E>.22?2:3];f.push(w.r,w.g,w.b)}for(let c=0;c<t;c++)for(let l=0;l<t;l++){const A=c*(t+1)+l,b=A+1,E=A+t+1,w=E+1;p.push(A,b,w,A,w,E)}o.setIndex(p),o.setAttribute("position",new It(h,3)),o.setAttribute("color",new ga(f,3)),o.computeVertexNormals(),n.mesh.geometry.dispose(),n.mesh.geometry=o}heightAt(n,t){if(!this.frame||!this.tiles.size)return 0;const i=performance.now();let r=this.frame.tileOffsetAt(n,t);(r.dx!==this.coverage.x||r.dz!==this.coverage.z)&&this.ensureRegion(n,t);let a=this.tiles.get(this.key(r.dx,r.dz));if(a||(a=this.tiles.get(this.key(0,0)),r=this.frame.tileOffsetAt(n,t)),!a)return 0;const s=a===this.tiles.get(this.key(r.dx,r.dz))?r.u:lt.clamp((n-this.frame.tileOrigin(a.dx,a.dz).x)/this.frame.tileSpan,0,1),o=a===this.tiles.get(this.key(r.dx,r.dz))?r.v:lt.clamp((this.frame.tileOrigin(a.dx,a.dz).z-t)/this.frame.tileSpan,0,1),h=(uo(a.grid,a.segments,s,o)-this.baseline)*1.25;return this.heightSamples++,this.heightSampleMs+=performance.now()-i,h}takePerformanceSample(){const n={heightSamples:this.heightSamples,heightSampleMs:this.heightSampleMs,tileBuilds:this.tileBuilds,tileBuildMs:this.tileBuildMs};return this.heightSamples=0,this.heightSampleMs=0,this.tileBuilds=0,this.tileBuildMs=0,n}setVisualQuality(n){this.detailQuality=n==="low"?.45:n==="medium"?.72:1,this.activeTerrainShader&&(this.activeTerrainShader.uniforms.uRumbleDetail.value=this.detailQuality)}clear(){this.generation++;for(const n of this.tiles.values())this.group.remove(n.mesh),n.mesh.geometry.dispose();this.tiles.clear(),this.requests.clear(),this.coverage={x:NaN,z:NaN}}dispose(){this.clear(),this.material.dispose()}}function Cn(e,n){return e.map(([t,i])=>n.toLocal({lat:t,lon:i}))}const ho=new Map;let Ki=null;const $i=(e="none")=>({buildings:[],roads:[],source:e});function zh(e,n,t){return t.areas.find(i=>n>=i.bbox[0]&&e>=i.bbox[1]&&n<=i.bbox[2]&&e<=i.bbox[3])}function Tn(e){if(!e)return 0;const n=e.trim().replace(",",".").match(/^([+-]?(?:\d+(?:\.\d*)?|\.\d+))\s*(m|meters?|ft|feet|foot|')?$/i);if(!n)return 0;const t=Number(n[1]);return Number.isFinite(t)?t*(/^(ft|feet|foot|')$/i.test(n[2]??"")?.3048:1):0}function Wh(e,n=0){const t=Tn(e.height)||Tn(e["building:height"]),i=Number.parseFloat(e["building:levels"]??e.levels??""),r=Number.isFinite(i)&&i>0?i*3.2:0,a=Tn(e["roof:height"]),s=t>0?t:r>0?r+a:Xh(e,n),o=Tn(e.min_height)||Tn(e["building:min_height"]);return{height:s,minHeight:o,source:t>0?"mapped height":r>0?"levels estimate":"type estimate"}}function es(e){const n=(e.building??"").toLowerCase(),t=`${e.amenity??""} ${e.shop??""} ${e.office??""} ${e.tourism??""}`.toLowerCase();return/industrial|warehouse|factory|manufacture/.test(`${n} ${e.industrial??""}`)?"industrial":/commercial|retail|office|hotel|apartments|civic|university|public/.test(n)||/hotel|motel|townhall|library|school|college|university|hospital|commercial|retail/.test(t)?"commercial":/house|residential|detached|terrace|semidetached_house|bungalow/.test(n)||/residential/.test(e["building:use"]??"")?"residential":"other"}function Xh(e,n){switch(es(e)){case"commercial":return 14;case"industrial":return 8;case"residential":return 7.5;default:return n>1600?18:n>500?12:n>120?7:4.5}}function Ln(e){const n=(e.highway??"").toLowerCase();return!n||e.tunnel&&e.tunnel!=="no"||e.bridge&&e.bridge!=="no"?null:/^(motorway|motorway_link|trunk|trunk_link|primary|primary_link|secondary|secondary_link)$/.test(n)?"major":/^(residential|tertiary|tertiary_link|unclassified|living_street|service|road)$/.test(n)?"street":n==="track"?"track":/^(path|footway|bridleway|cycleway|pedestrian|steps)$/.test(n)?/dirt|gravel|ground|earth|sand|mud/.test(e.surface??"")?"track":"path":null}function qh(e,n=Ln(e)){const t=Tn(e.width);if(t>0)return lt.clamp(t,.8,18);const i=(e.surface??"").toLowerCase();return n==="major"?9:n==="street"?5.5:n==="path"?/^(steps|footway)$/.test(e.highway??"")?1.8:2.4:n==="track"?/gravel|dirt|ground|earth|sand|mud/.test(i)?3.4:2.6:0}function Yh(e,n,t,i=24){const r=[],a=[];for(const w of e){const C=(w.tags["name:en"]??w.tags.name)?.trim();if(!C||!Ln(w.tags)||w.coords.length<2)continue;const U=Cn(w.coords,n);for(let P=1;P<U.length;P++){const F=U[P-1],z=U[P],Y=Math.hypot(z.x-F.x,z.z-F.z);Y>1&&a.push({name:C.slice(0,48),ax:F.x,az:F.z,bx:z.x,bz:z.z,length:Y})}const L=[0];for(let P=1;P<U.length;P++)L.push(L[P-1]+Math.hypot(U[P].x-U[P-1].x,U[P].z-U[P-1].z));const v=L.at(-1)??0;if(v<2.5)continue;const M=v<70?[v*.5]:Array.from({length:Math.max(1,Math.ceil((v-16)/48))},(P,F)=>Math.min(v-7,8+F*48));for(const P of M){let F=1;for(;F<L.length-1&&L[F]<P;)F++;const z=U[F-1],Y=U[F],K=Math.hypot(Y.x-z.x,Y.z-z.z)||1,X=lt.clamp((P-L[F-1])/K,0,1),re=z.x+(Y.x-z.x)*X,H=z.z+(Y.z-z.z)*X;r.push({name:C.slice(0,48),x:re,z:H,y:t(re,H)+1.45,dx:(Y.x-z.x)/K,dz:(Y.z-z.z)/K,segmentLength:K})}}if(!r.length)return null;const s=lt.clamp(Math.floor(i),1,64),o=8,h=256,f=48,p=document.createElement("canvas");p.width=o*h,p.height=Math.ceil(s/o)*f;const d=p.getContext("2d");if(!d)return null;const g=new Bl(p);g.colorSpace=yo,g.minFilter=bn,g.generateMipmaps=!0;const _=new Float32Array(s*12),T=new Float32Array(s*8),x=new Uint16Array(s*6);for(let w=0;w<s;w++){const C=w*4;x.set([C,C+1,C+2,C,C+2,C+3],w*6)}const c=new nn;c.setAttribute("position",new It(_,3)),c.setAttribute("uv",new It(T,2)),c.setIndex(new It(x,1)),c.setDrawRange(0,0);const l=new Ca({map:g,transparent:!0,depthTest:!0,depthWrite:!1,side:Dt,toneMapped:!1}),A=new ft(c,l);A.name="osm-street-name-atlas",A.renderOrder=3;let b="";const E=(w,C,U=0,L)=>{const v=Math.sin(U),M=Math.cos(U),P=[];let F=0,z=0;const Y=I=>lt.clamp(I*.025,.35,3.5);for(const I of a){const se=I.bx-I.ax,ne=I.bz-I.az,le=lt.clamp(((w-I.ax)*se+(C-I.az)*ne)/(I.length*I.length),0,1),Be=I.ax+se*le,de=I.az+ne*le,De=Math.hypot(Be-w,de-C);if(De>150)continue;F++;const tt=Y(De),$e=Math.max(1,Math.ceil(I.length/tt));for(let S=0;S<=$e;S++){const u=S/$e,O=I.ax+se*u,V=I.az+ne*u,q=Math.hypot(O-w,V-C);q<2.5||q>140||!L?.viewport&&(O-w)*v+(V-C)*M<4||(P.push({name:I.name,x:O,z:V,y:t(O,V)+1.05,dx:se/I.length,dz:ne/I.length,segmentLength:I.length,priority:1}),z++)}}const K=[...r,...P].map(I=>{const se=I.x-w,ne=I.z-C,le=Math.hypot(se,ne),Be=se*v+ne*M;return{item:I,d2:le*le,ahead:Be}}),X=I=>({dx:I.dx,dz:I.dz}),re=I=>lt.clamp(I.name.length*.38,3.5,10.5),H=L?.viewport?lt.clamp(L.viewport.width*.4,128,176):0,ve=H?H*f/h:0,Ae=K.filter(I=>I.d2<140**2),Ce=Ae.filter(I=>I.d2>((I.item.priority??0)>0?(L?.viewport?2.5:13)**2:22**2)).map(I=>{const se=L?.(I.item.x,I.item.y,I.item.z),ne=se?{x:se.x,y:se.y,z:se.z,visible:se.visible}:void 0,le=ne?(ne.z<-1||ne.z>1?900:0)+(Math.abs(ne.x)>.48?750:0)+(ne.y>.35?750:0)+(ne.y<-.68?500:0)+Math.abs(ne.x)*18+Math.abs(ne.y+.22)*24:0;let Be;if(ne&&H&&L?.viewport&&L.screenFrame){const S=L.screenFrame(I.item.x,I.item.y,I.item.z),u=L(I.item.x+I.item.dx,I.item.y,I.item.z+I.item.dz),O=(u.x-ne.x)*L.viewport.width,V=-(u.y-ne.y)*L.viewport.height,q=Math.abs(O)>.02?lt.clamp(Math.atan2(V,O),-.32,.32):0,k=[S.right[0]*Math.cos(q)+S.up[0]*Math.sin(q),S.right[1]*Math.cos(q)+S.up[1]*Math.sin(q),S.right[2]*Math.cos(q)+S.up[2]*Math.sin(q)],fe=[S.up[0]*Math.cos(q)-S.right[0]*Math.sin(q),S.up[1]*Math.cos(q)-S.right[1]*Math.sin(q),S.up[2]*Math.cos(q)-S.right[2]*Math.sin(q)],J=H*.5*S.worldPerPixel,ge=ve*.5*S.worldPerPixel,_e=(oe,we)=>{const Se=L(I.item.x+k[0]*oe+fe[0]*we,I.item.y+k[1]*oe+fe[1]*we,I.item.z+k[2]*oe+fe[2]*we);return{x:Se.x,y:Se.y,z:Se.z}},Z=[_e(-J,-ge),_e(J,-ge),_e(J,ge),_e(-J,ge)];Be={left:Math.min(...Z.map(oe=>oe.x)),right:Math.max(...Z.map(oe=>oe.x)),top:Math.max(...Z.map(oe=>oe.y)),bottom:Math.min(...Z.map(oe=>oe.y))}}const de=!!ne&&ne.z>-1&&ne.z<1&&Math.abs(ne.x)<=1&&Math.abs(ne.y)<=1,De=!L?.viewport||H<=L.viewport.width*.72&&ve<=L.viewport.height*.18,tt=!Be||Be.left>=-.96&&Be.right<=.96&&Be.top<=.74&&Be.bottom>=-.72&&ne.z>-1&&ne.z<1;return{...I,screen:ne,bounds:Be,inFrustum:de,projectedTextDimensionsValid:De,fitsViewport:tt,rejectReason:de?De?tt?void 0:"viewport-bounds":"text-dimensions":"frustum",score:(ne?Math.abs(ne.x)*55+Math.abs(ne.y+.18)*18:Math.sqrt(I.d2))+Math.sqrt(I.d2)*.04+le*3-(I.item.priority??0)*8}}),Ve=Ce.filter(I=>I.fitsViewport&&(!I.screen||Math.abs(I.screen.x)<1.02&&I.screen.y>-.94&&I.screen.y<.78)).sort((I,se)=>I.score-se.score);Ve.length;const We=[],Pe=new Map;let Fe=0,W=0;for(const{item:I,screen:se}of Ve){if(L&&se&&se.z>-1&&se.z<1&&Math.abs(se.x)<.75&&se.y>-.8&&se.y<.6&&Fe<8&&(Fe++,L(I.x,I.y,I.z,!0).visible===!1)){W++;continue}const ne=I.name.toLocaleLowerCase(),le=Pe.get(ne)??[];if(!le.some(Be=>(Be.x-I.x)**2+(Be.z-I.z)**2<38**2)&&(le.push(I),Pe.set(ne,le),We.push(I),We.length>=s))break}const Q=[...new Set(We.map(I=>I.name))].sort((I,se)=>I.localeCompare(se)),Ee=Q.join("\0"),Ie=new Map(Q.map((I,se)=>[I,se]));Ee!==b&&(d.clearRect(0,0,p.width,p.height),d.font="700 32px Arial, sans-serif",d.textAlign="center",d.textBaseline="middle",d.lineJoin="round",d.lineWidth=8,Q.forEach((I,se)=>{const ne=se%o*h+h/2,le=Math.floor(se/o)*f+f/2;d.strokeStyle="rgba(15,20,22,.96)",d.strokeText(I,ne,le,h-10),d.fillStyle="rgba(255,255,245,.99)",d.fillText(I,ne,le,h-10)}),g.needsUpdate=!0,b=Ee);const Re=c.getAttribute("position"),He=c.getAttribute("uv");We.forEach((I,se)=>{const ne=X(I),le=t(I.x,I.z)+1.05,Be=[I.x,le,I.z],de=L?.screenFrame?.(I.x,le,I.z);let De;if(Ce.find(fe=>fe.item===I)?.bounds,de&&L?.viewport&&H){const fe=L(I.x,le,I.z),J=L(I.x+ne.dx,le,I.z+ne.dz),ge=(J.x-fe.x)*L.viewport.width,_e=-(J.y-fe.y)*L.viewport.height,Z=Math.abs(ge)>.02?lt.clamp(Math.atan2(_e,ge),-.32,.32):0,oe=[de.right[0]*Math.cos(Z)+de.up[0]*Math.sin(Z),de.right[1]*Math.cos(Z)+de.up[1]*Math.sin(Z),de.right[2]*Math.cos(Z)+de.up[2]*Math.sin(Z)],we=[de.up[0]*Math.cos(Z)-de.right[0]*Math.sin(Z),de.up[1]*Math.cos(Z)-de.right[1]*Math.sin(Z),de.up[2]*Math.cos(Z)-de.right[2]*Math.sin(Z)],Se=H*.5*de.worldPerPixel,he=ve*.5*de.worldPerPixel,Oe=(y,te)=>[Be[0]+oe[0]*y+we[0]*te,Be[1]+oe[1]*y+we[1]*te,Be[2]+oe[2]*y+we[2]*te];De=[Oe(-Se,-he),Oe(Se,-he),Oe(Se,he),Oe(-Se,he)]}else{const fe=re(I),J=.66,ge=ne.dx,_e=ne.dz;De=[[I.x-ge*fe,le-J,I.z-_e*fe],[I.x+ge*fe,le-J,I.z+_e*fe],[I.x+ge*fe,le+J,I.z+_e*fe],[I.x-ge*fe,le+J,I.z-_e*fe]]}De.forEach((fe,J)=>Re.setXYZ(se*4+J,fe[0],fe[1],fe[2]));const tt=Ie.get(I.name),$e=tt%o,S=Math.floor(tt/o),u=p.height/f,O=$e/o,V=($e+1)/o,q=1-(S+1)/u,k=1-S/u;He.setXY(se*4,O,q),He.setXY(se*4+1,V,q),He.setXY(se*4+2,V,k),He.setXY(se*4+3,O,k)}),Re.needsUpdate=!0,He.needsUpdate=!0,c.setDrawRange(0,We.length*6),c.computeBoundingSphere(),A.userData.labelCount=We.length,A.userData.candidateCount=r.length,A.userData.nearbyCount=Ve.length,A.userData.currentRoadLabels=P.length,A.userData.occludedCount=W,A.userData.labels=We.map(I=>{const se=X(I),ne=Ce.find(le=>le.item===I);return{name:I.name,x:I.x,y:I.y,z:I.z,dx:se.dx,dz:se.dz,screenBounds:ne?.bounds}});const gt=Ce.filter(I=>I.item.name.toLocaleLowerCase()==="center street").sort((I,se)=>I.d2-se.d2).slice(0,80).map(I=>({x:I.item.x,y:I.item.y,z:I.item.z,priority:I.item.priority??0,distance:Math.sqrt(I.d2),screen:I.screen,bounds:I.bounds,inFrustum:I.inFrustum,projectedTextDimensionsValid:I.projectedTextDimensionsValid,fitsViewport:I.fitsViewport,rejectReason:I.rejectReason})),R=Ce.filter(I=>I.screen).sort((I,se)=>Math.hypot(I.screen.x,I.screen.y+.18)-Math.hypot(se.screen.x,se.screen.y+.18)).slice(0,24).map(I=>({name:I.item.name,x:I.item.x,z:I.item.z,distance:Math.sqrt(I.d2),screen:I.screen,bounds:I.bounds,rejectReason:I.rejectReason}));A.userData.diagnostics={namedRoadSegments:a.length,roadSegmentsNearPlayer:F,cameraSamples:z,generatedBaseLabels:r.length,generatedCurrentStreetCandidates:P.length,generatedCandidates:K.length,withinPlayerRange:Ae.length,rejectedTooNear:Ae.length-Ce.length,acceptedDistanceRange:Ce.length,inCameraFrustum:Ce.filter(I=>I.inFrustum).length,rejectedOutsideFrustum:Ce.filter(I=>!I.inFrustum).length,rejectedViewportBounds:Ce.filter(I=>I.inFrustum&&!I.fitsViewport).length,rejectedProjectedTextDimensions:Ce.filter(I=>!I.projectedTextDimensionsValid).length,occlusionTests:Fe,rejectedOcclusion:W,selectedLabelCount:We.length,drawRange:c.drawRange.count,meshVisible:A.visible,meshInScene:A.parent!==null,labelWidthPx:H,labelHeightPx:ve,centerStreetCandidates:gt,bestProjectedCandidates:R}};return A.userData={kind:"osm-street-labels",labelCount:0,candidateCount:r.length,nearbyCount:0,currentRoadLabels:0,occludedCount:0,texture:g,refresh:E},E(0,0,0),A}async function Kh(e){Ki||(Ki=fetch("./geo/manifest.json").then(a=>a.ok?a.json():null).catch(()=>null));const n=await Ki;if(!n)return $i("coverage manifest unavailable");const t=zh(e.lat,e.lon,n);if(!t)return $i();const i=ho.get(t.id);if(i)return i;const r=fetch(`./geo/${t.asset}`).then(async a=>{if(!a.ok)throw new Error(`Geographic package ${t.id} unavailable (${a.status})`);const s=await a.json();return{buildings:s.buildings??[],roads:s.roads??[],source:s.source??t.source,areaId:t.id}}).catch(()=>$i("geographic package unavailable"));return ho.set(t.id,r),r}const po={major:new vt({color:3423038,roughness:.98,metalness:0}),street:new vt({color:4671818,roughness:1,metalness:0}),path:new vt({color:8749686,roughness:1,metalness:0}),track:new vt({color:9137486,roughness:1,metalness:0})},$h={residential:11705472,commercial:9410456,industrial:7830390,other:10524549},mo=Object.fromEntries(Object.entries($h).map(([e,n])=>[e,new vt({color:n,roughness:e==="commercial"?.72:.9,metalness:e==="commercial"?.08:0,side:Dt,emissive:n,emissiveIntensity:.06})]));function go(e,n,t){const i=Ln(e.tags);if(!i||e.coords.length<2)return null;const r=Cn(e.coords,n).filter(d=>Number.isFinite(d.x)&&Number.isFinite(d.z));if(r.length<2)return null;const a=qh(e.tags,i),s=[],o=[];for(let d=0;d<r.length;d++){const g=r[Math.max(0,d-1)],_=r[Math.min(r.length-1,d+1)],T=_.x-g.x,x=_.z-g.z,c=Math.hypot(T,x)||1;let l=-x/c,A=T/c;if(d>0&&d<r.length-1){const b=r[d-1],E=r[d],w=r[d+1],C=Math.hypot(E.x-b.x,E.z-b.z)||1,U=Math.hypot(w.x-E.x,w.z-E.z)||1,L=-(E.z-b.z)/C-(w.z-E.z)/U,v=(E.x-b.x)/C+(w.x-E.x)/U,M=Math.hypot(L,v)||1;l=L/M,A=v/M;const P=Math.max(.45,Math.abs(l*(-x/c)+A*(T/c))),F=Math.min(a*.9,a*.5/P);s.push(new ct(E.x+l*F,E.z+A*F)),o.push(new ct(E.x-l*F,E.z-A*F))}else s.push(new ct(r[d].x+l*a/2,r[d].z+A*a/2)),o.push(new ct(r[d].x-l*a/2,r[d].z-A*a/2))}const h=[],f=(d,g)=>h.push(d.x,t(d.x,d.y)+g,d.y);for(let d=0;d<r.length-1;d++)f(s[d],.1),f(s[d+1],.1),f(o[d],.1),f(o[d],.1),f(s[d+1],.1),f(o[d+1],.1);const p=new nn;return p.setAttribute("position",new ga(h,3)),{kind:i,geometry:p,width:a}}function Zh(e,n,t=60){let i=t*t,r;for(const a of e){const s=Ln(a.tags);if(!s||s==="path"||a.coords.length<2)continue;const o=Cn(a.coords,n);for(let h=0;h<o.length-1;h++){const f=o[h],p=o[h+1],d=p.x-f.x,g=p.z-f.z,_=d*d+g*g;if(_<.01)continue;const T=lt.clamp(-(f.x*d+f.z*g)/_,0,1),x=f.x+d*T,c=f.z+g*T,l=x*x+c*c;l<i&&(i=l,r=Math.atan2(d,g))}}return r}class jh{group=new Yt;roadsGroup=new Yt;list=[];status={source:"none",buildings:0,roads:0,fallbacks:0,skippedRoads:0,message:"MAP DATA · LOADING"};loadToken=0;cellSize=256;cells=new Map;visibleBuildings=new Set;roads=[];labels=null;lastLabelUpdate=0;get streetLabelCount(){return Number(this.labels?.userData.labelCount??0)}get streetLabelPositions(){return this.labels?.userData.labels??[]}get streetLabelAtlasImage(){return this.labels?.userData.texture?.image}get streetLabelGeometryDebug(){const n=this.labels?.geometry,t=n?.getAttribute("position"),i=n?.getAttribute("uv");return{visible:this.labels?.visible,count:this.streetLabelCount,candidateCount:this.labels?.userData.candidateCount,nearbyCount:this.labels?.userData.nearbyCount,currentRoadLabels:this.labels?.userData.currentRoadLabels,occludedCount:this.labels?.userData.occludedCount,drawCount:n?.drawRange.count,positions:t?Array.from(t.array.slice(0,12)):[],uvs:i?Array.from(i.array.slice(0,8)):[],material:this.labels?.material&&this.labels.material.map?.image?{transparent:this.labels.material.transparent,depthTest:this.labels.material.depthTest,opacity:this.labels.material.opacity}:null}}get streetLabelDiagnostics(){return this.labels?.userData.diagnostics??null}updateStreetLabels(n,t,i,r,a=!1){!this.labels||!a&&performance.now()-this.lastLabelUpdate<500||(this.lastLabelUpdate=performance.now(),this.labels.userData.refresh?.(n,t,i,r))}lastCullAt=0;lastCullX=Number.NaN;lastCullZ=Number.NaN;cellKey(n,t){return`${Math.floor(n/this.cellSize)},${Math.floor(t/this.cellSize)}`}updateVisibility(n,t,i=900,r=!1){const a=performance.now();if(!r&&(a-this.lastCullAt<350||Math.hypot(n-this.lastCullX,t-this.lastCullZ)<10))return;this.lastCullAt=a,this.lastCullX=n,this.lastCullZ=t;const s=Math.ceil(i/this.cellSize),o=Math.floor(n/this.cellSize),h=Math.floor(t/this.cellSize),f=new Set;for(let d=o-s;d<=o+s;d++)for(let g=h-s;g<=h+s;g++)for(const _ of this.cells.get(`${d},${g}`)??[])f.add(_);const p=i*i;for(const d of[...this.visibleBuildings])!d.broken&&f.has(d)&&(d.x-n)**2+(d.z-t)**2<=p||(d.batch&&d.instanceId!==void 0&&d.batch.setVisibleAt(d.instanceId,!1),this.visibleBuildings.delete(d));for(const d of f)!d.broken&&(d.x-n)**2+(d.z-t)**2<=p&&!this.visibleBuildings.has(d)&&(d.batch&&d.instanceId!==void 0&&d.batch.setVisibleAt(d.instanceId,!0),this.visibleBuildings.add(d))}async load(n,t,i,r){this.reset(i);const a=this.loadToken,s=await Kh(n);if(a!==this.loadToken)return this.status;this.roads=s.roads;const o=new Map;let h=0;for(const T of s.buildings){const x=Cn(T.coords,r).map(Pe=>new ct(Pe.x,Pe.z));x.length>3&&x[0].distanceToSquared(x[x.length-1])<.01&&x.pop();const c=x.map(Pe=>Pe.x),l=x.map(Pe=>Pe.y);if(x.length<3)continue;const A=(Math.min(...c)+Math.max(...c))/2,b=(Math.min(...l)+Math.max(...l))/2,E=Math.max(2,Math.max(...c)-Math.min(...c)),w=Math.max(2,Math.max(...l)-Math.min(...l)),C=Pe=>Cn(Pe,r).map(Fe=>new ct(Fe.x-A,-(Fe.z-b))),U=Pe=>{const Fe=new Fl;return Pe.forEach((W,Q)=>Q?Fe.lineTo(W.x,W.y):Fe.moveTo(W.x,W.y)),Fe.closePath(),Fe},L=x.map(Pe=>new ct(Pe.x-A,-(Pe.y-b))),v=new _a;L.forEach((Pe,Fe)=>Fe?v.lineTo(Pe.x,Pe.y):v.moveTo(Pe.x,Pe.y)),v.closePath();const M=(T.holes??[]).map(C).filter(Pe=>Pe.length>=3);for(const Pe of M)v.holes.push(U(Pe));const P=es(T.tags),F=Wh(T.tags,E*w),z=F.height,Y=new qo(v,{depth:1,bevelEnabled:!1,curveSegments:1});Y.rotateX(-Math.PI/2),Y.scale(1,z,1);const K=mo[P],X=new Ye(K.color);if(T.tags["building:colour"]||T.tags.colour)try{X.set(T.tags["building:colour"]??T.tags.colour)}catch{}const re=new ft(Y,K);re.position.set(A,t(A,b)+F.minHeight,b),re.castShadow=!0,re.receiveShadow=!0,re.userData={kind:"osm-building",osmId:T.id,tags:T.tags,category:P};const H=t(A,b),ve={id:T.id,source:"osm",category:P,mesh:re,x:A,z:b,w:E,d:w,h:z,minHeight:F.minHeight,footprint:x,holes:M.map(Pe=>Pe.map(Fe=>new ct(Fe.x+A,b-Fe.y))),tags:T.tags,baseY:H,broken:!1},Ae=new Ye;Ae.r=K.color.r>0?X.r/K.color.r:1,Ae.g=K.color.g>0?X.g/K.color.g:1,Ae.b=K.color.b>0?X.b/K.color.b:1,ve.mesh.userData.instanceColor=Ae,this.list.push(ve);const Ce=this.cellKey(A,b),Ve=this.cells.get(Ce)??[];Ve.push(ve),this.cells.set(Ce,Ve);const We=o.get(P)??[];if(We.push(ve),o.set(P,We),++h%64===0&&(await new Promise(Pe=>requestAnimationFrame(()=>Pe())),a!==this.loadToken))return this.status}for(const[T,x]of o){const c=x.map(E=>E.mesh.geometry),l=c.reduce((E,w)=>E+w.getAttribute("position").count,0),A=c.reduce((E,w)=>E+(w.index?.count??w.getAttribute("position").count),0),b=new Ol(x.length,l,Math.max(l,A),mo[T]);b.name=`geographic-buildings-${T}`,b.castShadow=!0,b.receiveShadow=!0;for(const E of x){const w=E.mesh;w.updateMatrix();const C=b.addGeometry(w.geometry),U=b.addInstance(C);b.setMatrixAt(U,w.matrix),b.setColorAt(U,w.userData.instanceColor),E.batch=b,E.instanceId=U,E.mesh=b,E.renderVisible=!0,w.geometry.dispose()}b.computeBoundingBox(),b.computeBoundingSphere(),this.group.add(b)}for(const T of this.list)i?.addBuilding(T,T.baseY??0);this.updateVisibility(0,0,900,!0);let f=0,p=0;const d={major:[],street:[],path:[],track:[]};let g=0;for(const T of s.roads){const x=go(T,r,t);if(!x){p++;continue}if(d[x.kind].push(x.geometry.getAttribute("position").array),x.geometry.dispose(),f++,++g%256===0&&(await new Promise(c=>requestAnimationFrame(()=>c())),a!==this.loadToken))return this.status}for(const T of["major","street","path","track"]){const x=d[T];if(!x.length)continue;const c=x.reduce((w,C)=>w+C.length,0),l=new Float32Array(c);let A=0;for(const w of x)l.set(w,A),A+=w.length;const b=new nn;b.setAttribute("position",new It(l,3)),b.computeVertexNormals();const E=new ft(b,po[T]);E.name=`osm-road-${T}`,E.userData={kind:"osm-road",roadWays:x.length},E.frustumCulled=!0,this.roadsGroup.add(E)}this.labels=Yh(s.roads,r,t),this.labels&&this.roadsGroup.add(this.labels);const _=s.buildings.length>0||f>0;return this.status={source:_?"osm":"none",areaId:s.areaId,buildings:s.buildings.length,roads:f,fallbacks:0,skippedRoads:p,heading:Zh(s.roads,r),message:_?`OSM MAP · ${s.buildings.length} BUILDINGS · ${f} STREET/PATH LINES`:s.source==="none"?"TERRAIN ONLY · NO PACKAGED MAP DATA":"MAP DATA PACKAGE UNAVAILABLE · TERRAIN ONLY"},this.status}nearestStreetName(n,t,i,r=45){let a=r*r,s="";for(const o of this.roads){const h=o.tags["name:en"]??o.tags.name;if(!h||!Ln(o.tags)||Ln(o.tags)==="path")continue;const f=Cn(o.coords,i);for(let p=0;p<f.length-1;p++){const d=f[p],g=f[p+1],_=g.x-d.x,T=g.z-d.z,x=_*_+T*T;if(x<.01)continue;const c=lt.clamp(((n-d.x)*_+(t-d.z)*T)/x,0,1),l=d.x+_*c,A=d.z+T*c,b=(l-n)**2+(A-t)**2;b<a&&(a=b,s=h)}}return s}addFixtureRoad(n,t){const i=[-12,140].map(s=>{const o=n.toGeo({x:0,z:s});return[o.lat,o.lon]}),r=go({tags:{highway:"track",surface:"dirt",width:"4"},coords:i},n,t);if(!r)return null;r.geometry.computeVertexNormals();const a=new ft(r.geometry,po.track);return a.name="fixture-dirt-track",a.userData={kind:"fixture-road",source:"fixture"},this.roadsGroup.add(a),a}addPracticeCourse(n,t){return this.list.some(i=>i.source==="fallback")?0:(this.addBarriers(n,t),this.status.fallbacks=this.list.filter(i=>i.source==="fallback").length,this.status.fallbacks)}addBarriers(n,t){const i=new vt({color:13132085,roughness:.8});for(let r=0;r<4;r++)for(let a=-2;a<=2;a++){if((r+a)%3===0)continue;const s=3+(r*7+a*11+30)%3,o=3,h=2.5+(r*13+a*5+40)%3,f=a*5,p=28+r*9,d=new ft(new an(s,h,o),i.clone());d.position.set(f,n(f,p)+h/2,p),d.castShadow=!0,d.receiveShadow=!0,d.userData={kind:"destructible-barrier",ownedMaterial:!0},this.group.add(d);const g={id:`practice-${r}-${a}`,source:"fallback",category:"practice",mesh:d,x:f,z:p,w:s,d:o,h,broken:!1};g.baseY=n(f,p),this.list.push(g),t?.addBuilding(g,g.baseY)}}addFixtureBuilding(n,t,i,r,a,s={w:7,d:6,h:9}){const{w:o,d:h,h:f}=s,p=new an(o,f,h),d=new vt({color:11705472,roughness:.9}),g=r(t,i),_=new ft(p,d);_.position.set(t,g+f/2,i),_.castShadow=!0,_.receiveShadow=!0,_.userData.ownedMaterial=!0,_.userData={kind:"local-test-fixture",fixtureId:n},this.group.add(_);const T={id:n,source:"fixture",category:f>18?"commercial":"residential",mesh:_,x:t,z:i,w:o,d:h,h:f,baseY:g,broken:!1};return this.list.push(T),a?.addBuilding(T,g),T}break(n){return n.broken||n.mesh.parent!==this.group?!1:(n.broken=!0,this.visibleBuildings.delete(n),n.batch&&n.instanceId!==void 0?n.batch.setVisibleAt(n.instanceId,!1):(this.group.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.userData.ownedMaterial&&(Array.isArray(n.mesh.material)?n.mesh.material.forEach(t=>t.dispose()):n.mesh.material.dispose())),!0)}reset(n){this.loadToken++;for(const t of this.list)n?.removeBuilding(t),t.batch||t.mesh.geometry.dispose();for(const t of[...this.group.children]){this.group.remove(t);const i=t;i.geometry?.dispose(),i.userData.ownedMaterial&&(Array.isArray(i.material)?i.material.forEach(r=>r.dispose()):i.material?.dispose())}for(const t of this.roadsGroup.children){this.roadsGroup.remove(t);const i=t;i.geometry.dispose(),i===this.labels&&(i.userData.texture?.dispose(),i.material.dispose())}this.labels=null,this.roads=[],this.lastLabelUpdate=0,this.list=[],this.cells.clear(),this.visibleBuildings.clear(),this.lastCullAt=0,this.lastCullX=Number.NaN,this.lastCullZ=Number.NaN,this.status={source:"none",buildings:0,roads:0,fallbacks:0,skippedRoads:0,message:"MAP DATA · LOADING"}}}const Fn=new ce;function Pt(e,n,t,i,r,a){const s=2*Math.PI*r/4,o=Math.max(a-2*r,0),h=Math.PI/4;Fn.copy(n),Fn[i]=0,Fn.normalize();const f=.5*s/(s+o),p=1-Fn.angleTo(e)/h;return Math.sign(Fn[t])===1?p*f:o/(s+o)+f+f*(1-p)}class La extends an{constructor(n=1,t=1,i=1,r=2,a=.1){const s=r*2+1;if(a=Math.min(n/2,t/2,i/2,a),super(1,1,1,s,s,s),this.type="RoundedBoxGeometry",this.parameters={width:n,height:t,depth:i,segments:r,radius:a},s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const h=new ce,f=new ce,p=new ce(n,t,i).divideScalar(2).subScalar(a),d=this.attributes.position.array,g=this.attributes.normal.array,_=this.attributes.uv.array,T=d.length/6,x=new ce,c=.5/s;for(let l=0,A=0;l<d.length;l+=3,A+=2)switch(h.fromArray(d,l),f.copy(h),f.x-=Math.sign(f.x)*c,f.y-=Math.sign(f.y)*c,f.z-=Math.sign(f.z)*c,f.normalize(),d[l+0]=p.x*Math.sign(h.x)+f.x*a,d[l+1]=p.y*Math.sign(h.y)+f.y*a,d[l+2]=p.z*Math.sign(h.z)+f.z*a,g[l+0]=f.x,g[l+1]=f.y,g[l+2]=f.z,Math.floor(l/T)){case 0:x.set(1,0,0),_[A+0]=Pt(x,f,"z","y",a,i),_[A+1]=1-Pt(x,f,"y","z",a,t);break;case 1:x.set(-1,0,0),_[A+0]=1-Pt(x,f,"z","y",a,i),_[A+1]=1-Pt(x,f,"y","z",a,t);break;case 2:x.set(0,1,0),_[A+0]=1-Pt(x,f,"x","z",a,n),_[A+1]=Pt(x,f,"z","x",a,i);break;case 3:x.set(0,-1,0),_[A+0]=1-Pt(x,f,"x","z",a,n),_[A+1]=1-Pt(x,f,"z","x",a,i);break;case 4:x.set(0,0,1),_[A+0]=1-Pt(x,f,"x","y",a,n),_[A+1]=1-Pt(x,f,"y","x",a,t);break;case 5:x.set(0,0,-1),_[A+0]=Pt(x,f,"x","y",a,n),_[A+1]=1-Pt(x,f,"y","x",a,t);break}}static fromJSON(n){return new La(n.width,n.height,n.depth,n.segments,n.radius)}}function Bn(e,n=!1){const t=e[0].index!==null,i=new Set(Object.keys(e[0].attributes)),r=new Set(Object.keys(e[0].morphAttributes)),a={},s={},o=e[0].morphTargetsRelative,h=new nn;let f=0;for(let p=0;p<e.length;++p){const d=e[p];let g=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const _ in d.attributes){if(!i.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+'. All geometries must have compatible attributes; make sure "'+_+'" attribute exists among all geometries, or in none of them.'),null;a[_]===void 0&&(a[_]=[]),a[_].push(d.attributes[_]),g++}if(g!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const _ in d.morphAttributes){if(!r.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+".  .morphAttributes must be consistent throughout all geometries."),null;s[_]===void 0&&(s[_]=[]),s[_].push(d.morphAttributes[_])}if(n){let _;if(t)_=d.index.count;else if(d.attributes.position!==void 0)_=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". The geometry must have either an index or a position attribute"),null;h.addGroup(f,_,p),f+=_}}if(t){let p=0;const d=[];for(let g=0;g<e.length;++g){const _=e[g].index;for(let T=0;T<_.count;++T)d.push(_.getX(T)+p);p+=e[g].attributes.position.count}h.setIndex(d)}for(const p in a){const d=_o(a[p]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+p+" attribute."),null;h.setAttribute(p,d)}for(const p in s){const d=s[p][0].length;if(d===0)break;h.morphAttributes=h.morphAttributes||{},h.morphAttributes[p]=[];for(let g=0;g<d;++g){const _=[];for(let x=0;x<s[p].length;++x)_.push(s[p][x][g]);const T=_o(_);if(!T)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+p+" morphAttribute."),null;h.morphAttributes[p].push(T)}}return h}function _o(e){let n,t,i,r=-1,a=0;for(let f=0;f<e.length;++f){const p=e[f];if(n===void 0&&(n=p.array.constructor),n!==p.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=p.itemSize),t!==p.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=p.normalized),i!==p.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=p.gpuType),r!==p.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=p.count*t}const s=new n(a),o=new It(s,t,i);let h=0;for(let f=0;f<e.length;++f){const p=e[f];if(p.isInterleavedBufferAttribute){const d=h/t;for(let g=0,_=p.count;g<_;g++)for(let T=0;T<t;T++){const x=p.getComponent(g,T);o.setComponent(g+d,T,x)}}else s.set(p.array,h);h+=p.count*t}return r!==void 0&&(o.gpuType=r),o}const vo=["front-left","front-right","rear-left","rear-right"],So=[{x:-1.22,z:1.22},{x:1.22,z:1.22},{x:-1.22,z:-1.25},{x:1.22,z:-1.25}];class Qh{root=new Yt;wheels=[];frontWheels=[];suspension=[];body;opts;model=new Yt;materials;parts={paint:[],dark:[],chrome:[],glass:[],tire:[],light:[]};wheelSprings;wheelShocks;shockRods;axleLinks;workMatrix=new kt;workQuaternion=new Xt;workPosition=new ce;workScale=new ce;constructor(n={color:"#d84924",scale:1}){this.opts=n,this.root.scale.setScalar(n.scale),this.model.position.y=-1.65,this.root.add(this.model),this.body=new Yt,this.model.add(this.body),this.makeMaterials(),this.buildChassisAndBody(),this.buildWheels(),this.finishBodyBatches()}makeMaterials(){this.materials={paint:new Dr({color:this.opts.color,metalness:.43,roughness:.29,clearcoat:.62,clearcoatRoughness:.2}),dark:new vt({color:1382939,metalness:.28,roughness:.68}),chrome:new vt({color:12041920,metalness:.78,roughness:.24}),glass:new Dr({color:8636379,metalness:.12,roughness:.15,transparent:!0,opacity:.72,clearcoat:.9,side:Dt,depthWrite:!1}),tire:new vt({color:1053204,roughness:.94}),light:new vt({color:16770464,emissive:16754230,emissiveIntensity:1.15,roughness:.2})}}boxGeometry(n,t,i,r,a,s,o=.025,h){const f=new La(n,t,i,2,Math.min(o,n*.24,t*.24,i*.24)),p=h?new Xt().setFromEuler(h):new Xt;return f.applyMatrix4(new kt().compose(new ce(r,a,s),p,new ce(1,1,1))),f}addBox(n,t,i,r,a,s,o,h=.025,f){this.parts[n].push(this.boxGeometry(t,i,r,a,s,o,h,f))}addSideShape(n,t,i,r=.045){const a=new qo(n,{depth:r,bevelEnabled:!1,curveSegments:8});a.rotateY(t<0?-Math.PI/2:Math.PI/2),a.translate(t*1.11,0,0),this.parts[i].push(a)}profileShape(){const n=new _a;return n.moveTo(-2.02,1.28),n.lineTo(-2.02,1.78),n.lineTo(-1.53,1.86),n.lineTo(-1.34,2.77),n.lineTo(-.91,3.04),n.lineTo(.29,3.04),n.lineTo(.65,2.14),n.lineTo(1.2,1.98),n.lineTo(2.03,1.77),n.lineTo(2.03,1.2),n.quadraticCurveTo(1.22,2.16,.38,1.2),n.lineTo(-.4,1.2),n.quadraticCurveTo(-1.25,2.16,-2.08,1.2),n.lineTo(-2.02,1.28),n.closePath(),n}sideWindow(n,t,i,r){const a=new _a;return a.moveTo(n,t),a.lineTo(n+.12,r),a.lineTo(i-.1,r),a.lineTo(i,t),a.closePath(),a}buildChassisAndBody(){this.addBox("dark",1.75,.22,3.55,0,1.3,-.02,.055);for(const o of[-.9,.9])this.addBox("dark",.17,.2,3.7,o,1.23,-.02,.045);for(const o of[-1.38,-.2,1.16])this.addBox("chrome",2,.11,.13,0,1.21,o,.025);this.addBox("dark",1.2,.08,.95,0,1.14,.1,.025),this.addBox("paint",2.12,.46,1.27,0,1.76,1.15,.09),this.addBox("paint",1.93,.16,1.48,0,3,-.34,.065),this.addBox("paint",1.78,.96,1.24,0,2.43,-.36,.08);const n=this.profileShape();for(const o of[-1,1])this.addSideShape(n,o,"paint",.055),this.addSideShape(this.sideWindow(-1.19,2.32,-.53,2.8),o,"glass",.018),this.addSideShape(this.sideWindow(-.43,2.32,.16,2.8),o,"glass",.018),this.addBox("chrome",.035,.045,.76,o*1.17,2.2,-.17,.012),this.addBox("chrome",.04,.035,.19,o*1.18,2.05,-.24,.01),this.addBox("dark",.075,.22,1.05,o*1.12,1.31,-.05,.026);this.addBox("glass",1.56,.68,.045,0,2.56,.48,.012,new wn(-.48,0,0)),this.addBox("glass",1.48,.52,.04,0,2.55,-1.02,.012,new wn(.18,0,0)),this.addBox("chrome",1.75,.055,.12,0,3.08,-.34,.02),this.addBox("dark",1.4,.08,.95,0,1.64,-1.42,.02);for(const o of[-.76,.76])this.addBox("paint",.12,.34,1.02,o,1.79,-1.4,.035);this.addBox("paint",1.48,.38,.13,0,1.77,-1.93,.035);for(let o=0;o<5;o++)this.addBox("chrome",1.25,.018,.024,0,1.69,-1.78+o*.18,.004);this.addBox("chrome",2.22,.2,.22,0,1.47,1.96,.045),this.addBox("dark",1.16,.38,.055,0,1.83,1.94,.012),this.addBox("chrome",1.28,.045,.07,0,2.05,1.95,.012),this.addBox("chrome",1.28,.045,.07,0,1.61,1.95,.012);for(let o=0;o<9;o++)this.addBox("dark",.025,.34,.035,-.5+o*.125,1.83,1.98,.008);this.addBox("dark",.22,.11,.07,0,1.72,2.01,.012),this.addBox("chrome",2.12,.14,.2,0,1.52,-2,.035),this.addBox("chrome",1.95,.055,.14,0,1.68,-2,.015);for(const o of[-.82,.82])this.addBox("dark",.48,.29,.09,o,1.94,1.93,.035),this.addBox("light",.34,.19,.045,o,1.95,1.99,.035),this.addBox("light",.14,.08,.035,o,1.72,2,.018),this.addBox("dark",.18,.08,.04,o,1.52,-2.11,.018);for(const o of[-.69,.69])this.addBox("paint",.08,.055,.83,o,2.02,1.13,.025),this.addBox("chrome",.035,.025,.63,o*1.7,1.9,-.36,.01);for(const o of[-1.1,.46])this.addBox("dark",.05,.86,.06,0,2.51,o,.018);for(let o=-2;o<=2;o++)this.addBox("light",.14,.13,.08,o*.36,3.14,-.25,.06);const t=[];for(const o of[-1.17,1.17])for(const h of[-1.25,1.22]){const f=new Gl(new ce(o,1.26,h-.91),new ce(o,2.14,h),new ce(o,1.26,h+.91));t.push(new Gi(f,20,.06,7,!1))}const i=Bn(t,!1);t.forEach(o=>o.dispose()),this.body.add(new ft(i,this.materials.dark));const a=[-1,1].map(o=>new Ur([new ce(o*.86,1.65,-1.82),new ce(o*.86,2.85,-1.55),new ce(o*.86,3.2,-.9),new ce(o*.86,3.2,.05),new ce(o*.82,2.2,.98)])).map(o=>new Gi(o,24,.035,7,!1)),s=Bn(a,!1);a.forEach(o=>o.dispose()),this.body.add(new ft(s,this.materials.chrome));for(const o of[-1.25,1.22])this.addBox("dark",1.82,.12,.16,0,1.43,o,.025),this.addBox("chrome",1.22,.055,.07,0,1.56,o,.018)}finishBodyBatches(){for(const n of Object.keys(this.parts)){const t=this.parts[n];if(!t.length)continue;const i=Bn(t,!1);if(t.forEach(a=>a.dispose()),!i)continue;const r=new ft(i,this.materials[n]);r.castShadow=!0,r.receiveShadow=!0,r.frustumCulled=!0,this.body.add(r)}this.parts={paint:[],dark:[],chrome:[],glass:[],tire:[],light:[]}}cylinderGeometry(n,t,i=24){const r=new Ir(n,n,t,i,1,!1);return r.rotateZ(Math.PI/2),r}buildWheels(){const n=new vt({color:2698543,roughness:.9}),t=[],i=[],r=new Ir(.82,.82,.61,36,1,!1);r.rotateZ(Math.PI/2),t.push(r);for(const T of[-.29,.29]){const x=new Nr(.63,.12,8,36);x.rotateY(Math.PI/2),x.translate(T,0,0),t.push(x);const c=this.cylinderGeometry(.455,.045,28);c.translate(T*1.04,0,0),i.push(c);const l=new Nr(.405,.025,8,32);l.rotateY(Math.PI/2),l.translate(T*1.04,0,0),i.push(l);const A=this.cylinderGeometry(.16,.075,18);A.translate(T*1.1,0,0),i.push(A);for(let b=0;b<6;b++){const E=b*Math.PI/3,w=new an(.065,.07,.29);w.applyMatrix4(new kt().compose(new ce(T*1.08,Math.cos(E)*.25,Math.sin(E)*.25),new Xt().setFromEuler(new wn(E,0,0)),new ce(1,1,1))),i.push(w)}}const a=Bn(t,!1);t.forEach(T=>T.dispose());const s=Bn(i,!1);i.forEach(T=>T.dispose());const o=this.cylinderGeometry(.13,3.1,12),h=new vt({color:3422779,metalness:.55,roughness:.48}),f=new Qt(o,h,2);f.castShadow=!0;const p=new Xt().setFromAxisAngle(new ce(0,0,1),Math.PI/2);[-1.25,1.22].forEach((T,x)=>{this.workMatrix.compose(new ce(0,.91,T),p,new ce(1,1,1)),f.setMatrixAt(x,this.workMatrix)}),f.instanceMatrix.needsUpdate=!0,this.model.add(f);const d=[];for(let T=0;T<=96;T++){const x=T/96,c=x*Math.PI*2*8;d.push(new ce(Math.cos(c)*.11,x-.5,Math.sin(c)*.11))}const g=new Gi(new Ur(d),128,.025,5,!1),_=new vt({color:13817555,metalness:.78,roughness:.32});this.wheelSprings=new Qt(g,_,4),this.wheelSprings.castShadow=!0,this.wheelShocks=new Qt(this.cylinderGeometry(.072,.68,10),h,4),this.wheelShocks.castShadow=!0,this.shockRods=new Qt(this.cylinderGeometry(.025,.62,8),this.materials.chrome,4),this.shockRods.castShadow=!0,this.model.add(this.wheelSprings,this.wheelShocks,this.shockRods);for(let T=0;T<4;T++){const x=So[T],c=vo[T],l=new Yt;l.position.set(x.x,.92,x.z),l.userData.wheelId=c,this.model.add(l),this.wheels.push(l),T<2&&this.frontWheels.push(l);const A=new ft(a,this.materials.tire);A.castShadow=!0,A.receiveShadow=!0,l.add(A);const b=new ft(s,this.materials.chrome);b.castShadow=!0,l.add(b);const E=new an(.32,.15,.27),w=new Qt(E,n,32);w.castShadow=!0,w.receiveShadow=!0;let C=0;for(let U=0;U<2;U++)for(let L=0;L<16;L++){const v=L*Math.PI/8+U*Math.PI/16,M=new Xt().setFromAxisAngle(new ce(1,0,0),v+Math.PI/2);this.workMatrix.compose(new ce(U?.16:-.16,Math.sin(v)*.81,Math.cos(v)*.81),M,new ce(1,1,1)),w.setMatrixAt(C++,this.workMatrix)}w.instanceMatrix.needsUpdate=!0,l.add(w)}this.axleLinks=new Qt(this.cylinderGeometry(.055,1,10),h,4),this.axleLinks.castShadow=!0,this.model.add(this.axleLinks),this.updateWheelContacts(vo.map((T,x)=>({id:T,x:0,z:0,height:0,contact:!0,compression:.12,extension:0,travel:.55,compressionVelocity:0,compressionDamping:0,reboundDamping:0})),1)}updateWheelContacts(n,t){for(let i=0;i<this.wheels.length;i++){const r=this.wheels[i],a=n.find(d=>d.id===r.userData.wheelId);if(!a)continue;r.position.y=.92+a.compression/t+a.extension/t;const s=So[i],o=a.compression/t,h=a.extension/t;this.workPosition.set(s.x*.78,1.05+h*.35-o*.2,s.z),this.workQuaternion.identity(),this.workScale.set(1,Math.max(.5,.72+h-o*.35),1),this.workMatrix.compose(this.workPosition,this.workQuaternion,this.workScale),this.wheelSprings.setMatrixAt(i,this.workMatrix),this.workPosition.y=.99+h*.32-o*.12,this.workScale.set(1,.68+h*.45-o*.2,1),this.workMatrix.compose(this.workPosition,this.workQuaternion,this.workScale),this.wheelShocks.setMatrixAt(i,this.workMatrix),this.workPosition.y=1.13+h*.3-o*.1,this.workScale.set(1,.61+h*.25-o*.1,1),this.workMatrix.compose(this.workPosition,this.workQuaternion,this.workScale),this.shockRods.setMatrixAt(i,this.workMatrix);const f=new Xt().setFromAxisAngle(new ce(0,0,1),Math.PI/2),p=Math.abs(s.x)*.9;this.workPosition.set(s.x*.54,.89+o*.35,s.z),this.workScale.set(1,p,1),this.workMatrix.compose(this.workPosition,f,this.workScale),this.axleLinks.setMatrixAt(i,this.workMatrix)}this.wheelSprings.instanceMatrix.needsUpdate=!0,this.wheelShocks.instanceMatrix.needsUpdate=!0,this.shockRods.instanceMatrix.needsUpdate=!0,this.axleLinks.instanceMatrix.needsUpdate=!0}setColor(n){this.opts.color=n,this.materials.paint.color.set(n)}}function Jn(e,n=new ce){return n.set(Math.sin(e),0,Math.cos(e))}function Da(e,n=new ce){return n.set(Math.cos(e),0,-Math.sin(e))}const Ma=(e,n,t)=>Math.max(n,Math.min(t,e)),Jh=[{id:"front-left",x:-1.22,z:1.22},{id:"front-right",x:1.22,z:1.22},{id:"rear-left",x:-1.22,z:-1.25},{id:"rear-right",x:1.22,z:-1.25}];function Zi(e,n,t,i,r=24){const a=Math.cos(n),s=Math.sin(n),o=.55*t,h=.36*t;return Jh.map(f=>{const p=e.x+f.x*a+f.z*s,d=e.z-f.x*s+f.z*a,g=i(p,d),_=g+1.65*t+.12*t,T=_-e.y,x=2*Math.sqrt(r/(.12*t));return{id:f.id,x:p,z:d,height:g,travel:o,compression:Ma(T,0,o),extension:Ma(-T,0,h),contact:T>=-h&&T<=o,compressionVelocity:0,compressionDamping:x*.82,reboundDamping:x*.62}})}function ep(e,n,t,i){const r=t/(.12*i);let a=0;for(const s of e){if(s.compression<=0)continue;const o=Math.max(0,s.compression-s.travel+.08*i),h=r*(s.compression+o*2.5),f=Ma(s.compressionVelocity,-12,12),p=f>=0?s.compressionDamping:s.reboundDamping,d=(n>=0?s.reboundDamping:s.compressionDamping)*n*.24;a+=Math.max(0,h+p*f-d)}return a/e.length-t}function tp(e){const n=(e[0].height+e[1].height)/2,t=(e[2].height+e[3].height)/2,i=(e[0].height+e[2].height)/2,r=(e[1].height+e[3].height)/2;return{pitch:-Math.atan2(n-t,2.47),roll:Math.atan2(r-i,2.44)}}const ji=Math.PI*2,ci=e=>e*Math.PI/180;function Ua(e,n){return Math.atan2(Math.sin(n-e),Math.cos(n-e))}function di(e){return Math.abs(Ua(e,0))}function ui(e,n,t=5.2){const i=1-Math.exp(-t*Math.max(0,n));return e+Ua(e,0)*i}class np{airborne=!1;lastPitch=0;lastRoll=0;pitchProgress=0;rollProgress=0;pendingForwardFlips=0;pendingBackwardFlips=0;pendingRolls=0;flightTime=0;flightBonus=0;lastLandingDebug=null;currentPoints=0;bestScore;constructor(n=0){this.bestScore=Math.max(0,Math.floor(n)||0)}update(n){if(!n.grounded){this.airborne?(this.flightTime=Math.max(this.flightTime,n.airtime),this.recordFlipRotation(this.advanceRotation("pitch",n.pitch)),this.pendingRolls+=Math.abs(this.advanceRotation("roll",n.roll))):this.beginFlight(n);const T=this.pendingForwardFlips+this.pendingBackwardFlips,x=T+this.pendingRolls;return this.currentPoints=Math.round(this.flightTime*80)+this.pendingRolls*500+T*600+Math.max(0,x-1)*150+this.flightBonus,null}if(!this.airborne)return null;this.flightTime=Math.max(this.flightTime,n.airtime),this.recordFlipRotation(this.advanceRotation("pitch",n.pitch)),this.pendingRolls+=Math.abs(this.advanceRotation("roll",n.roll));const t=di(n.pitch)<ci(65)&&di(n.roll)<ci(65),i=n.landingSpeed<=22&&t&&this.flightTime>=.45,r=this.pendingForwardFlips,a=this.pendingBackwardFlips,s=r+a,o=this.pendingRolls,h=this.flightTime;if(this.lastLandingDebug={sample:{...n},airtime:h,rolls:o,flips:s,rollProgress:this.rollProgress,pitchProgress:this.pitchProgress,upright:t,landedWell:i},this.airborne=!1,!i)return this.clearFlight(),null;const f=s+o,p=n.landingSpeed<=5&&di(n.pitch)<ci(18)&&di(n.roll)<ci(18),d=p?300:100,g=Math.round(h*80)+o*500+s*600+Math.max(0,f-1)*150+d+this.flightBonus;this.currentPoints=g,this.bestScore=Math.max(this.bestScore,g);const _=o>=2?"DOUBLE ROLL":o===1?"BARREL ROLL":s>=2?"DOUBLE FLIP":r?"FRONT FLIP":a?"BACKFLIP":h>=1.25?p?"BIG AIR · PERFECT LANDING":"BIG AIR":p?"PERFECT LANDING":"NICE LANDING";return this.clearFlight(!1),{points:g,rolls:o,flips:s,forwardFlips:r,backwardFlips:a,airtime:h,perfect:p,message:_}}reset(){this.airborne=!1,this.clearFlight()}get isAirborne(){return this.airborne}get rolls(){return this.pendingRolls}get flips(){return this.pendingForwardFlips+this.pendingBackwardFlips}get airtime(){return this.flightTime}awardBonus(n){const t=Math.max(0,Math.floor(n));return t?(this.airborne&&(this.flightBonus+=t),this.currentPoints+=t,this.bestScore+=t,this.currentPoints):this.currentPoints}beginFlight(n){this.clearFlight(),this.airborne=!0,this.lastPitch=n.pitch,this.lastRoll=n.roll,this.flightTime=n.airtime}advanceRotation(n,t){const i=n==="pitch"?this.lastPitch:this.lastRoll,a=(n==="pitch"?this.pitchProgress:this.rollProgress)+Ua(i,t);n==="pitch"?(this.lastPitch=t,this.pitchProgress=a):(this.lastRoll=t,this.rollProgress=a);const s=Math.trunc(a/ji);return s&&(n==="pitch"?this.pitchProgress-=s*ji:this.rollProgress-=s*ji),s}recordFlipRotation(n){n>0?this.pendingForwardFlips+=n:this.pendingBackwardFlips+=-n}clearFlight(n=!0){this.pitchProgress=0,this.rollProgress=0,this.pendingForwardFlips=0,this.pendingBackwardFlips=0,this.pendingRolls=0,this.flightTime=0,this.flightBonus=0,n&&(this.currentPoints=0)}}class ip{pos=new ce(0,0,0);vel=new ce;yaw=0;pitch=0;roll=0;grounded=!0;nitro=100;airTime=0;speed=0;gravity=24;jumpForce=15;jumpWas=!1;jumpHoldRemaining=0;coyoteRemaining=0;previousCompression=new Map;invertedContactTime=0;contactPitch=0;contactRoll=0;wheelContacts=[];reset(n,t=1){this.pos.set(0,n.heightAt(0,0)+1.65*t,0),this.vel.set(0,0,0),this.yaw=0,this.pitch=0,this.roll=0,this.grounded=!0,this.nitro=100,this.airTime=0,this.jumpWas=!1,this.jumpHoldRemaining=0,this.coyoteRemaining=.1,this.invertedContactTime=0,this.contactPitch=0,this.contactRoll=0,this.wheelContacts=Zi(this.pos,this.yaw,t,(i,r)=>n.heightAt(i,r),this.gravity),this.previousCompression=new Map(this.wheelContacts.map(i=>[i.id,i.compression]))}update(n,t,i,r,a){this.gravity=a.gravity,this.jumpForce=a.jump,n=Math.min(n,.04);const s=Math.max(1,Math.ceil(n*120)),o=n/s;for(let h=0;h<s;h++)this.step(o,t,i,a);r.root.position.copy(this.pos),r.root.rotation.order="YXZ",r.root.rotation.set(this.pitch+this.contactPitch,this.yaw,this.roll+this.contactRoll),r.updateWheelContacts(this.wheelContacts,a.scale),r.wheels.forEach(h=>{h.rotation.x-=this.speed*n}),r.frontWheels.forEach(h=>{h.rotation.y=-t.steer*.28})}step(n,t,i,r){const a=r.scale,s=Jn(this.yaw),o=t.nitro&&this.nitro>0,h=t.throttle||(t.nitro?t.gear??1:0),f=30*(o?1.7:1),p=26*(o?1.5:1),d=this.vel.dot(s),g=h!==0&&Math.abs(d)>2&&Math.sign(d)!==Math.sign(h);h&&!g&&this.vel.addScaledVector(s,h*p*n);const _=new ce(this.vel.x,0,this.vel.z);if(this.speed=_.length(),o?this.nitro=Math.max(0,this.nitro-22*n):this.nitro=Math.min(100,this.nitro+8*n),t.handbrake?_.multiplyScalar(Math.max(0,1-3*n)):_.multiplyScalar(Math.max(0,1-(g?5.5:this.grounded?1.05:.1)*n)),this.speed>f&&_.setLength(f),this.speed>.4){const L=(this.grounded?1.8:1.05)*(.25+Math.min(1,this.speed/12)),v=Math.sign(_.dot(s))||Math.sign(t.throttle);this.yaw-=t.steer*L*n*v;const M=Da(this.yaw),P=_.dot(M);_.addScaledVector(M,-P*(this.grounded?.72:.01))}this.vel.x=_.x,this.vel.z=_.z;const T=t.jump&&!this.jumpWas&&(this.grounded||this.coyoteRemaining>0);if(T&&(this.vel.y=this.jumpForce,this.grounded=!1,this.coyoteRemaining=0,this.jumpHoldRemaining=.3),this.jumpWas=t.jump,t.jump&&!T&&this.jumpHoldRemaining>0&&this.vel.y>0){const L=Math.min(n,this.jumpHoldRemaining);this.vel.y+=Math.min(12,this.jumpForce*.8)*L,this.jumpHoldRemaining-=L}t.jump||(this.jumpHoldRemaining=0),this.wheelContacts=Zi(this.pos,this.yaw,a,(L,v)=>i.heightAt(L,v),this.gravity);for(const L of this.wheelContacts){const v=this.previousCompression.get(L.id)??L.compression;L.compressionVelocity=(L.compression-v)/Math.max(n,1/240)}Math.cos(this.pitch+this.contactPitch)*Math.cos(this.roll+this.contactRoll);const x=this.grounded&&this.invertedContactTime>1.35;if(t.level||x){const L=t.level?5.2:4.2;this.pitch=ui(this.pitch,n,L),this.roll=ui(this.roll,n,L)}else this.grounded||(this.pitch+=t.airPitch*5.4*n,this.roll+=t.airRoll*7.2*n,this.airTime+=n);this.vel.y+=ep(this.wheelContacts,this.vel.y,this.gravity,a)*n;const c=this.pos.y;this.pos.addScaledVector(this.vel,n),this.wheelContacts=Zi(this.pos,this.yaw,a,(L,v)=>i.heightAt(L,v),this.gravity);for(const L of this.wheelContacts)this.previousCompression.set(L.id,L.compression);const l=this.wheelContacts.filter(L=>L.contact&&L.compression>.015*a).length,A=Math.max(...this.wheelContacts.map(L=>L.height))+1.17*a,b=this.pos.y<A&&this.vel.y<0;b&&(!this.grounded&&this.vel.y<-3&&(this.vel.y=Math.min(1.1,-this.vel.y*.055)),this.pos.y=A);const E=this.grounded;this.grounded=this.vel.y<=1.25&&(l>=2||b),this.grounded?this.coyoteRemaining=.1:E?this.coyoteRemaining=.1:this.coyoteRemaining=Math.max(0,this.coyoteRemaining-n);const w=Math.cos(this.pitch+this.contactPitch)*Math.cos(this.roll+this.contactRoll);this.grounded?(this.vel.y=Math.max(0,this.vel.y),this.airTime=0,this.invertedContactTime=w<.2?this.invertedContactTime+n:0,w>=.2&&!t.level&&(this.pitch=ui(this.pitch,n,3.2),this.roll=ui(this.roll,n,3.2))):this.invertedContactTime=0;const C=tp(this.wheelContacts),U=this.grounded?Math.min(1,n*9):Math.min(1,n*2);this.contactPitch=lt.lerp(this.contactPitch,this.grounded?C.pitch:0,U),this.contactRoll=lt.lerp(this.contactRoll,this.grounded?C.roll:0,U),Number.isFinite(this.pos.y)||(this.pos.y=c)}}function Ea(e){if(!e||typeof e!="object"||!("closest"in e))return!1;const n=e;return typeof n.closest=="function"&&n.closest('input,textarea,select,[contenteditable]:not([contenteditable="false"])')!==null}class ap{pressed=new Set;actions=new Map;pointerDown(n,t){this.pointerUp(n),this.actions.set(n,t),this.pressed.add(t)}pointerUp(n){const t=this.actions.get(n);t!==void 0&&(this.actions.delete(n),[...this.actions.values()].includes(t)||this.pressed.delete(t))}pointerCancel(n){this.pointerUp(n)}lostPointerCapture(n){this.pointerUp(n)}releaseAll(){this.actions.clear(),this.pressed.clear()}}class rp{constructor(n=54,t=.08){this.maxTravel=n,this.deadZone=t}pointerId=null;x=0;y=0;originX=0;originY=0;radius=1;pointerDown(n,t,i,r=this.maxTravel){this.pointerId=n,this.originX=t,this.originY=i,this.radius=Math.max(1,r),this.x=0,this.y=0}pointerMove(n,t,i){if(this.pointerId!==n)return;let r=(t-this.originX)/this.radius,a=(i-this.originY)/this.radius;const s=Math.hypot(r,a);s>1&&(r/=s,a/=s);const o=Math.hypot(r,a);if(o<this.deadZone){this.x=0,this.y=0;return}const h=(o-this.deadZone)/(1-this.deadZone)/o;this.x=r*h,this.y=a*h}pointerUp(n){this.pointerId===n&&this.release()}pointerCancel(n){this.pointerUp(n)}lostPointerCapture(n){this.pointerUp(n)}release(){this.pointerId=null,this.x=0,this.y=0}}function op(e,n){const t=(...i)=>i.some(r=>e.has(r)||n.has(r));return Number(t("d","arrowright"))-Number(t("a","arrowleft"))}class sp{keys=new Set;pointerButtons=new ap;analog=new rp;gear=1;steeringMode="analog";sensitivity=1;state={throttle:0,steer:0,nitro:!1,jump:!1,level:!1,airPitch:0,airRoll:0,handbrake:!1,gear:1};wasAirborne=!1;requireNeutralForAir=!1;get touches(){return this.pointerButtons.pressed}setGear(n){this.gear=n}toggleGear(){return this.gear=this.gear===1?-1:1,this.gear}setSteeringMode(n){this.steeringMode=n}setSensitivity(n){this.sensitivity=Math.max(.5,Math.min(1.5,n))}constructor(){window.addEventListener("focusin",n=>{Ea(n.target)&&this.releaseAll()}),window.addEventListener("keydown",n=>{if(Ea(n.target)){this.releaseAll();return}[" ","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n.key)&&n.preventDefault(),this.keys.add(n.key.toLowerCase())}),window.addEventListener("keyup",n=>this.keys.delete(n.key.toLowerCase())),window.addEventListener("blur",()=>this.releaseAll())}pointerDown(n,t){this.pointerButtons.pointerDown(n,t)}pointerUp(n){this.pointerButtons.pointerUp(n)}pointerCancel(n){this.pointerButtons.pointerCancel(n)}lostPointerCapture(n){this.pointerButtons.lostPointerCapture(n)}releaseAll(){this.keys.clear(),this.pointerButtons.releaseAll(),this.analog.release(),this.state={throttle:0,steer:0,nitro:!1,jump:!1,level:!1,airPitch:0,airRoll:0,handbrake:!1,gear:this.gear},this.wasAirborne=!1,this.requireNeutralForAir=!1}update(n=!1){const t=(...E)=>E.some(w=>this.keys.has(w)||this.touches.has(w)),i=Array.from(navigator.getGamepads?.()??[]).find(E=>E?.connected),r=i?.axes??[],a=E=>i?.buttons[E]?.value??0,s=(t("w","arrowup")?1:0)-(t("s","arrowdown")?1:0),o=t("go"),h=a(7)-a(6)||-Math.sign(Math.abs(r[1]??0)>.18?r[1]:0),f=s||(o?this.gear:0)||h,p=op(this.keys,this.touches),d=Math.abs(r[0]??0)>.16?r[0]:0,g=this.analog.x,_=this.analog.y,T=Number(this.keys.has("arrowright")||this.touches.has("arrowright"))-Number(this.keys.has("arrowleft")||this.touches.has("arrowleft"));n&&!this.wasAirborne&&(this.requireNeutralForAir=Math.hypot(g,_)>.2||p!==0||Math.abs(d)>.16||T!==0),n||(this.requireNeutralForAir=!1),n&&this.requireNeutralForAir&&Math.hypot(g,_)<.16&&p===0&&Math.abs(d)<=.16&&T===0&&(this.requireNeutralForAir=!1),this.wasAirborne=n;const x=n&&!this.requireNeutralForAir&&this.steeringMode==="analog",c=!n&&this.steeringMode==="analog"?Math.sign(g)*Math.pow(Math.abs(g),1.25)*this.sensitivity:0,l=(t("arrowup")?1:0)-(t("arrowdown")?1:0),A=Number(t("e"))-Number(t("q")),b=t("shift","boost","nitro")||a(1)>.4;return this.state={throttle:f,steer:p||(this.steeringMode==="buttons"?0:c)||d,nitro:b,jump:t(" ","jump")||a(0)>.4,level:t("f","level")||a(3)>.4,airPitch:l||(x?-_:0)||(Math.abs(r[3]??0)>.18?-Math.sign(r[3]):0),airRoll:A||(this.requireNeutralForAir?0:T||(x?g:0)||(Math.abs(r[2]??0)>.18?Math.sign(r[2]):0)),handbrake:t("control")||a(2)>.4,gear:this.gear},this.state}}const Gn=96,Qi=160;class lp{group=new Yt;dustMesh;burstMesh;particles=[];active=[];freeDust=[];freeBurst=[];activeCount=0;rng=7886388;matrix=new kt;quat=new Xt;scaleVector=new ce;color=new Ye;quality=1;constructor(){const n=new Yo(.5,6,5);this.dustMesh=this.makeBatch(n.clone(),Gn,13875854),this.burstMesh=this.makeBatch(n.clone(),Qi,16777215),n.dispose(),this.dustMesh.name="dust-particle-batch",this.burstMesh.name="impact-particle-batch",this.dustMesh.count=this.burstMesh.count=0,this.group.add(this.dustMesh,this.burstMesh);for(let t=0;t<Gn+Qi;t++)this.particles.push({kind:"dust",life:0,max:1,position:new ce,velocity:new ce,scale:1,color:16777215}),this.active.push(0);for(let t=Gn-1;t>=0;t--)this.freeDust.push(t);for(let t=Gn+Qi-1;t>=Gn;t--)this.freeBurst.push(t)}makeBatch(n,t,i){const r=new Ca({color:i,vertexColors:!0,transparent:!0,depthWrite:!1});r.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute float instanceAlpha;
varying float vParticleAlpha;`),s.vertexShader=s.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vParticleAlpha = instanceAlpha;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying float vParticleAlpha;`),s.fragmentShader=s.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a *= vParticleAlpha;`)},r.customProgramCacheKey=()=>"rumble-particle-alpha-v1";const a=new Hl(new Float32Array(t),1);return a.setUsage(kl),n.setAttribute("instanceAlpha",a),new Qt(n,r,t)}rand(){return this.rng=this.rng*1664525+1013904223>>>0,this.rng/4294967296}burst(n,t=18,i=16758605){t=Math.max(1,Math.round(t*this.quality));for(let r=0;r<t;r++){const a=this.freeBurst.pop();if(a===void 0)break;const s=this.particles[a];s.kind="burst",s.life=.45+this.rand()*.8,s.max=.9,s.scale=.16+this.rand()*.26,s.color=i,s.position.copy(n),s.velocity.set((this.rand()-.5)*8,1+this.rand()*7,(this.rand()-.5)*8),this.active[this.activeCount++]=a}}dust(n,t){if(t<4||this.rand()>.27*this.quality)return;const i=this.freeDust.pop();if(i===void 0)return;const r=this.particles[i];r.kind="dust",r.life=r.max=.65,r.scale=.36+this.rand()*.3,r.color=13875854,r.position.copy(n),r.velocity.set(this.rand()-.5,.4+this.rand(),this.rand()-.5),this.active[this.activeCount++]=i}update(n){let t=0,i=0,r=0;for(let a=0;a<this.activeCount;a++){const s=this.active[a],o=this.particles[s];if(o.life-=n,o.life<=0){(o.kind==="dust"?this.freeDust:this.freeBurst).push(s);continue}o.position.addScaledVector(o.velocity,n),o.scale*=1+n*.55;const h=Math.max(0,o.life/o.max*(o.kind==="dust"?.34:.9)),f=o.kind==="dust"?this.dustMesh:this.burstMesh,p=o.kind==="dust"?i++:r++;this.scaleVector.setScalar(o.scale*(o.life/o.max)),this.matrix.compose(o.position,this.quat,this.scaleVector),f.setMatrixAt(p,this.matrix),this.color.setHex(o.color),f.setColorAt(p,this.color),f.geometry.getAttribute("instanceAlpha").setX(p,h),this.active[t++]=s}this.activeCount=t,this.dustMesh.count=i,this.burstMesh.count=r,i&&(this.dustMesh.instanceMatrix.needsUpdate=!0,this.dustMesh.instanceColor.needsUpdate=!0,this.dustMesh.geometry.getAttribute("instanceAlpha").needsUpdate=!0),r&&(this.burstMesh.instanceMatrix.needsUpdate=!0,this.burstMesh.instanceColor.needsUpdate=!0,this.burstMesh.geometry.getAttribute("instanceAlpha").needsUpdate=!0)}get activeParticles(){return this.activeCount}setQuality(n){this.quality=n==="low"?.46:n==="medium"?.72:1}dispose(){this.group.clear();for(const n of[this.dustMesh,this.burstMesh])n.geometry.dispose(),n.material.dispose()}}class cp{group=new Yt;mesh;pieces=[];quality="high";seed=1225960503;transform=new kt;quaternion=new Xt;vector=new ce;scratchColor=new Ye;capacity=320;constructor(){const n=new an(1,1,1),t=new vt({color:16777215,roughness:.88,metalness:.015});this.mesh=new Qt(n,t,this.capacity),this.mesh.name="bounded-building-collapse-batch",this.mesh.count=0,this.mesh.castShadow=!1,this.mesh.receiveShadow=!1,this.mesh.frustumCulled=!1,this.group.add(this.mesh)}random(){return this.seed=this.seed*1664525+1013904223>>>0,this.seed/4294967296}destroy(n,t,i){const r=this.quality==="low"?.5:this.quality==="medium"?.75:1,a=lt.clamp(Math.ceil(n.w/3.3),2,4),s=lt.clamp(Math.ceil(n.h/3.5),2,5),o=Math.max(5,Math.round(a*s*r)),h=Math.min(o,this.capacity-this.pieces.length);if(!h)return 0;const f=Array.isArray(n.mesh.material)?n.mesh.material[0]:n.mesh.material,p=f instanceof vt?f.color:new Ye(11705472),d=new ce(t.direction.z,0,-t.direction.x).normalize(),g=new ce(n.x,(n.baseY??n.mesh.position.y-n.h/2)+(n.minHeight??0),n.z);for(let _=0;_<h;_++){const T=_%a,x=Math.floor(_/a)%s,c=new ce(n.w/a*(.78+this.random()*.2),n.h/s*(.78+this.random()*.2),Math.max(.35,n.d*(.22+this.random()*.28))),l=-n.w/2+(T+.5)*n.w/a,A=(x+.5)*n.h/s,b=(this.random()-.5)*Math.max(0,n.d-c.z),E=g.clone().add(new ce(l,A,b)),w=(this.random()-.5)*(2+t.intensity*6),C=2+t.intensity*(4+this.random()*5),U=t.direction.clone().multiplyScalar(C).addScaledVector(d,w);U.y=2.5+t.intensity*(2+this.random()*6)+this.random()*2;const L=p.clone().multiplyScalar(.78+this.random()*.4),v=4.5+this.random()*1.2;this.pieces.push({position:E,velocity:U,size:c,rotation:new wn(this.random()*2,this.random()*2,this.random()*2),angular:new ce((this.random()-.5)*8,(this.random()-.5)*8,(this.random()-.5)*8),ground:i(E.x,E.z)+.06,life:v,maxLife:v,color:L})}return h}setQuality(n){this.quality=n}clear(){this.pieces.length=0,this.mesh.count=0}update(n){let t=0;for(let i=this.pieces.length-1;i>=0;i--){const r=this.pieces[i];if(r.life-=n,r.life<=0){this.pieces.splice(i,1);continue}r.velocity.y-=18*n,r.position.addScaledVector(r.velocity,n),r.rotation.x+=r.angular.x*n,r.rotation.y+=r.angular.y*n,r.rotation.z+=r.angular.z*n;const a=r.size.y/2;r.position.y<r.ground+a&&(r.position.y=r.ground+a,r.velocity.y<-1?r.velocity.y*=-.19:r.velocity.y=0,r.velocity.x*=.82,r.velocity.z*=.82,r.angular.multiplyScalar(.96));const s=r.life<.45?Math.max(.1,r.life/.45):1;this.vector.copy(r.size).multiplyScalar(s),this.quaternion.setFromEuler(r.rotation),this.transform.compose(r.position,this.quaternion,this.vector),this.mesh.setMatrixAt(t,this.transform),this.scratchColor.copy(r.color),this.mesh.setColorAt(t,this.scratchColor),t++}this.mesh.count=t,t&&(this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0))}get activeCount(){return this.pieces.length}dispose(){this.group.clear(),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.pieces.length=0}}const pn=(e,n,t)=>Math.max(n,Math.min(t,e));function dp(e,n,t){const i=pn(.2+pn(e/32,0,1)*.67+pn(n,0,1)*.16+(t?.18:0),.2,1.2),r=62+i*112;return{rpm:i,fundamentalHz:r,engineGain:.075+i*.035+pn(n,0,1)*.025,harmonicHz:r*2.4,nitroHz:260+i*390}}function Hn(e){return pn(Number.isFinite(e)?e:0,0,1)}class up{ctx=null;master=null;compressor=null;analyser=null;meterBuffer=null;engineOsc=null;engineHarmonic=null;engineGain=null;harmonicGain=null;nitroOsc=null;nitroGain=null;skidNoise=null;skidGain=null;noiseBuffer=null;volume=.62;muted=!1;failed=!1;start(){try{this.ctx||this.createGraph(),this.ctx?.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.applyMaster()}catch{this.failed=!0}}createGraph(){const n=window,t=window.AudioContext??n.webkitAudioContext;if(!t){this.failed=!0;return}const i=new t;this.ctx=i,this.master=i.createGain(),this.master.gain.value=0,this.compressor=i.createDynamicsCompressor(),this.compressor.threshold.value=-18,this.compressor.knee.value=14,this.compressor.ratio.value=5,this.compressor.attack.value=.006,this.compressor.release.value=.16,this.analyser=i.createAnalyser(),this.analyser.fftSize=256,this.meterBuffer=new Float32Array(this.analyser.fftSize),this.master.connect(this.compressor).connect(this.analyser).connect(i.destination);const r=i.createOscillator();r.type="sawtooth";const a=i.createBiquadFilter();a.type="lowpass",a.frequency.value=620,a.Q.value=.7,this.engineGain=i.createGain(),this.engineGain.gain.value=.09,r.connect(a).connect(this.engineGain).connect(this.master),r.start(),this.engineOsc=r;const s=i.createOscillator();s.type="triangle";const o=i.createBiquadFilter();o.type="bandpass",o.frequency.value=520,o.Q.value=.65,this.harmonicGain=i.createGain(),this.harmonicGain.gain.value=.035,s.connect(o).connect(this.harmonicGain).connect(this.master),s.start(),this.engineHarmonic=s;const h=i.createOscillator();h.type="sawtooth";const f=i.createBiquadFilter();f.type="bandpass",f.frequency.value=900,f.Q.value=.8,this.nitroGain=i.createGain(),this.nitroGain.gain.value=1e-4,h.connect(f).connect(this.nitroGain).connect(this.master),h.start(),this.nitroOsc=h;const p=i.createBuffer(1,Math.floor(i.sampleRate*.35),i.sampleRate),d=p.getChannelData(0);for(let T=0;T<d.length;T++)d[T]=(Math.random()*2-1)*.55;this.noiseBuffer=p;const g=i.createBufferSource();g.buffer=p,g.loop=!0;const _=i.createBiquadFilter();_.type="bandpass",_.frequency.value=1250,_.Q.value=.5,this.skidGain=i.createGain(),this.skidGain.gain.value=1e-4,g.connect(_).connect(this.skidGain).connect(this.master),g.start(),this.skidNoise=g,this.failed=!1}setMasterVolume(n){this.volume=Hn(n),this.applyMaster()}getMasterVolume(){return this.volume}setMuted(n){this.muted=n,this.applyMaster()}mute(){this.setMuted(!0)}isMuted(){return this.muted}isAvailable(){return!!this.ctx&&!this.failed}getState(){return this.ctx?.state??(this.failed?"unavailable":"locked")}applyMaster(){this.ctx&&this.master&&this.master.gain.setTargetAtTime(this.muted?0:this.volume,this.ctx.currentTime,.025)}update(n,t=0,i=!1,r=0){const a=this.ctx;if(!a||!this.engineOsc||!this.engineHarmonic||!this.engineGain||!this.harmonicGain)return;const s=dp(n,t,i),o=a.currentTime;this.engineOsc.frequency.setTargetAtTime(s.fundamentalHz,o,.055),this.engineHarmonic.frequency.setTargetAtTime(s.harmonicHz,o,.07),this.engineGain.gain.setTargetAtTime(s.engineGain,o,.09),this.harmonicGain.gain.setTargetAtTime(.026+s.rpm*.022,o,.09),this.nitroOsc?.frequency.setTargetAtTime(s.nitroHz,o,.045),this.nitroGain?.gain.setTargetAtTime(i?.075:1e-4,o,.05),this.skidGain?.gain.setTargetAtTime(pn(r,0,1)>.08?.12*pn(r,0,1):1e-4,o,.04)}testTone(){const n=this.ctx;if(!n||this.muted)return!1;const t=n.createOscillator(),i=n.createGain(),r=n.currentTime;return t.type="sine",t.frequency.setValueAtTime(523.25,r),i.gain.setValueAtTime(1e-4,r),i.gain.linearRampToValueAtTime(.22,r+.025),i.gain.setValueAtTime(.22,r+.24),i.gain.exponentialRampToValueAtTime(1e-4,r+.52),t.connect(i).connect(this.master),t.start(r),t.stop(r+.54),t.onended=()=>{t.disconnect(),i.disconnect()},!0}jump(){this.sweep(175,540,.34,.055,"sawtooth")}landing(n=1){this.noiseBurst(.11+Hn(n)*.08,.22),this.sweep(112,52,.19,.075*Hn(n),"sine")}impact(n=1){this.noiseBurst(.15+Hn(n)*.12,.34),this.sweep(170,43,.28,.11*Hn(n),"triangle")}sweep(n,t,i,r,a){const s=this.ctx;if(!s||this.muted)return;const o=s.createOscillator(),h=s.createGain(),f=s.currentTime;o.type=a,o.frequency.setValueAtTime(n,f),o.frequency.exponentialRampToValueAtTime(Math.max(25,t),f+i),h.gain.setValueAtTime(1e-4,f),h.gain.linearRampToValueAtTime(r,f+.012),h.gain.exponentialRampToValueAtTime(1e-4,f+i),o.connect(h).connect(this.master),o.start(f),o.stop(f+i+.015),o.onended=()=>{o.disconnect(),h.disconnect()}}noiseBurst(n,t){const i=this.ctx;if(!i||!this.noiseBuffer||this.muted)return;const r=i.createBufferSource(),a=i.createBiquadFilter(),s=i.createGain(),o=i.currentTime;r.buffer=this.noiseBuffer,a.type="lowpass",a.frequency.value=1900,s.gain.setValueAtTime(Math.max(1e-4,n),o),s.gain.exponentialRampToValueAtTime(1e-4,o+t),r.connect(a).connect(s).connect(this.master),r.start(o),r.stop(o+t+.02),r.onended=()=>{r.disconnect(),a.disconnect(),s.disconnect()}}outputRms(){if(!this.ctx||!this.analyser||!this.meterBuffer||this.ctx.state!=="running"||this.muted)return 0;this.analyser.getFloatTimeDomainData(this.meterBuffer);let n=0;for(const t of this.meterBuffer)n+=t*t;return Math.sqrt(n/this.meterBuffer.length)}}const ee=e=>document.querySelector(e),In=!!(window.matchMedia?.("(pointer: coarse)").matches||window.matchMedia?.("(any-pointer: coarse)").matches||navigator.maxTouchPoints>0||"ontouchstart"in window),on=document.documentElement;on.classList.toggle("touch-capable",In);on.classList.toggle("keyboard-controls-visible",!In);const fp=ee("#app");fp.innerHTML=`
 <canvas id="game"></canvas>
 <div class="grain"></div>
 <header class="topbar"><a class="brand" href="#"><span class="brand-icon">✦</span><span>RUMBLE<span class="accent">ROAM</span></span></a><div class="location-label"><span class="pulse"></span><span id="place-name">Moab, Utah</span><small id="terrain-name">RED ROCK COUNTRY</small></div><div class="top-actions"><button id="map-btn" class="top-btn place-button" aria-label="Open map and choose a place">⌖ <span>MAP</span></button><button id="pause-btn" class="top-btn" aria-label="Pause game">Ⅱ <span>PAUSE</span></button><button id="help-btn" class="top-btn help-trigger" aria-label="Help and controls">?</button></div></header><div id="geo-status" class="world-data-status" aria-live="polite">GEOGRAPHIC DATA · LOADING</div><a class="world-data-credit" href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">© OPENSTREETMAP CONTRIBUTORS · ODbL</a>
 <aside class="hud-left"><div class="stat"><span class="stat-label">VELOCITY</span><div class="speed-line"><strong id="speed">000</strong><span>KM/H</span></div><div class="speed-track"><i id="speed-bar"></i></div><small id="street-name" class="street-name"></small></div><div class="stat nitro-stat"><span class="stat-label">NITROUS</span><div class="nitro-track"><i id="nitro-bar"></i></div><small id="nitro-state">READY TO BURN</small></div><div class="stunt-stat" aria-live="polite"><div><span>AIR TIME</span><b id="air-time">0.0s</b></div><div><span>STUNT</span><b id="stunt-score">0</b></div><small>BEST <b id="stunt-best">0</b></small><small id="level-hint" class="level-hint"></small></div></aside>
 <div class="hud-bottom"><div class="hint keyboard-hint"><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> DRIVE <i></i><kbd>SHIFT</kbd> BOOST <i></i><kbd>SPACE</kbd> JUMP <i></i><kbd>F</kbd> LEVEL <i></i><kbd>Q</kbd><kbd>E</kbd> FLIP</div><div class="touch-hint">LEFT THUMB STEERS · GO DRIVES · BOOST IS INDEPENDENT</div><div class="camera-toggle"><button data-camera="chase" class="selected">CHASE</button><button data-camera="far">FAR</button><button data-camera="hood">HOOD</button><button data-camera="free">FREE</button></div></div>
 <button id="settings-btn" class="settings-fab">⚙</button>
 <section id="location-panel" class="panel hidden"><div class="panel-head"><div><span class="eyebrow">PICK YOUR PLAYGROUND</span><h2>Map / Places</h2></div><button class="close-btn" data-close="location-panel" aria-label="Close map and places">×</button></div><div class="picker-current"><strong id="picker-place">Moab, Utah</strong><span id="picker-coverage" aria-live="polite">Checking packaged map coverage…</span></div><form id="search-form"><input id="location-search" placeholder="Search a place or paste coordinates" autocomplete="off"><button class="search-btn">SEARCH <span>↗</span></button></form><div id="search-results" class="results"></div><div class="map-wrap"><div id="mini-map"></div><div class="map-hint">CLICK MAP TO DROP A PIN</div></div><button id="practice-course" class="practice-course-btn">ADD OPTIONAL PRACTICE OBSTACLES</button><div class="preset-title">FAVORITE RUNS <span>09 LOCATIONS</span></div><div id="presets" class="presets"></div><div class="coverage-disclosure">Packaged OSM buildings and roads are available only in Manhattan, Mount Kisco and Moab. Other locations load terrain only; worldwide building and road streaming is not available.</div><div class="attribution">Terrain <a href="https://registry.opendata.aws/terrain-tiles/" target="_blank">Mapzen / Tilezen</a> · © <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a> · Map <a href="https://openfreemap.org/" target="_blank">OpenFreeMap</a><details class="terrain-credits"><summary>Terrain source credits</summary><div>ArcticDEM: DigitalGlobe imagery; NSF awards 1043681, 1559691 and 1542736. Australia: © Commonwealth of Australia (Geoscience Australia) 2017. Austria: © offene Daten Österreichs – Digitales Geländemodell (DGM) Österreich. Canada: Open Government Licence – Canada. Europe: Copernicus / EU-DEM. Global ETOPO1: NOAA. Mexico: INEGI, Continental relief, 2016. New Zealand: © Land Information New Zealand and NZ Government. Norway: © Kartverket. United Kingdom: © Environment Agency 2015. United States 3DEP, GMTED2010 and SRTM: USGS.</div></details></div></section>
 <section id="settings-panel" class="panel settings hidden"><div class="panel-head"><div><span class="eyebrow">TUNE THE MAYHEM</span><h2>Game settings</h2></div><button class="close-btn" data-close="settings-panel">×</button></div><label>Graphics quality <select id="graphics-quality"><option value="low">Low · smoother</option><option value="medium">Medium · balanced</option><option value="high">High · detailed</option></select></label><label>Touch steering <select id="steering-mode"><option value="analog">Analog pad</option><option value="buttons">Classic buttons</option></select></label><label>Steering sensitivity <span id="sensitivity-value">100%</span><input id="steering-sensitivity" type="range" min="50" max="150" value="100"></label><label>Gravity <span id="gravity-value">24</span><input id="gravity" type="range" min="6" max="35" value="24"></label><label>Jump force <span id="jump-value">15</span><input id="jump" type="range" min="8" max="25" value="15"></label><label>Truck scale <span id="scale-value">1.0×</span><input id="scale" type="range" min="7" max="16" value="10"></label><label>Paint <input id="paint" type="color" value="#d84924"></label><label class="toggle"><span>Audio</span><input id="audio-toggle" type="checkbox" checked></label><label>Master volume <span id="volume-value">62%</span><input id="master-volume" type="range" min="0" max="100" value="62"></label><button id="audio-test" class="ghost-btn audio-test">TEST SOUND</button><small id="audio-status" class="settings-note">Sound starts after your first control input.</small><button id="reset-btn" class="search-btn full">RESET TRUCK <span>↻</span></button><small class="settings-note">Esc pauses the run. R recovers the truck. Press M to pick a new place.</small></section>
 <section id="pause-panel" class="pause-panel hidden"><span class="eyebrow">TAKE A BREATHER</span><h1>PAUSED</h1><button id="resume-btn" class="search-btn">BACK TO IT <span>▶</span></button><button id="pause-location" class="ghost-btn">CHANGE LOCATION</button></section>
 <section id="help-panel" class="panel help-panel hidden" aria-labelledby="help-title"><div class="panel-head"><div><span class="eyebrow">QUICK DRIVER GUIDE</span><h2 id="help-title">Controls</h2></div><button class="close-btn" data-close="help-panel" aria-label="Close help">×</button></div><p class="touch-guide-copy">Drag the left thumb pad to steer, or tilt it in the air for rolls and flips. GO drives in the selected gear. BOOST accelerates on its own; JUMP launches independently. Hold LEVEL in air or on the ground to smoothly right the truck.</p><div class="help-grid"><strong>Keyboard</strong><span>W / S · Accelerate / reverse</span><span>A / D or ← / → · Steer</span><span>Shift · Boost · Space · Jump · F · Hold to level in air or on ground</span><span>Q / E · Roll · R · Reset · C · Camera · Esc · Pause · M · Locations</span><strong>Touch</strong><span>Analog pad · Steering / aerial rolls and pitch</span><span>GO · Drive · FWD/REV · Select gear</span><span>BOOST · Acceleration/nitro · JUMP · Launch · LEVEL · Recover</span><span>Bottom shortcuts · Reset · Camera · Pause · Help</span></div></section>
 <section id="building-info" class="building-info hidden" aria-live="polite"><button id="building-info-close" class="info-close" aria-label="Close building information">×</button><span id="building-info-type" class="eyebrow">OPENSTREETMAP BUILDING</span><h3 id="building-info-name">Building</h3><div id="building-info-attrs"></div></section>
 <div id="toast" class="toast"></div>
 <div class="orientation-tip" aria-hidden="true">LANDSCAPE RECOMMENDED</div>
 <nav class="mobile-utility" aria-label="Quick game controls"><button id="touch-reset" aria-label="Reset truck">↻ <span>RESET</span></button><button id="touch-camera" aria-label="Change camera">◉ <span>CAM</span></button><button id="touch-pause" aria-label="Pause game">Ⅱ <span>PAUSE</span></button><button id="touch-help" aria-label="Help and controls">? <span>HELP</span></button><button id="touch-control-mode" aria-label="Switch control display" aria-pressed="true">⌨ <span>KEYS</span></button></nav>
 <div class="mobile-controls" aria-label="Touch driving controls"><div class="touch-steering"><div id="analog-pad" class="analog-pad" role="application" aria-label="Drag to steer; move in the air to roll and pitch"><div class="analog-ring"></div><div id="analog-knob" class="analog-knob"><span>◉</span></div><small id="analog-label">STEER</small></div><div class="classic-pad"><button data-touch="a" aria-label="Steer left">◀<span>LEFT</span></button><button data-touch="d" aria-label="Steer right">▶<span>RIGHT</span></button></div></div><div class="touch-right"><div class="touch-action-row"><button data-touch="jump" aria-label="Tap to jump; hold briefly for extra height">⬆ <span>JUMP</span></button><button data-touch="nitro" class="nitro-touch" aria-label="Hold to boost independently">⚡ <span>BOOST</span></button><button id="touch-level" data-touch="level" class="level-touch" aria-label="Hold to level truck upright">↥ <span>LEVEL</span></button></div><div class="touch-drive-row"><button id="touch-gear" class="gear-button" aria-label="Toggle forward and reverse">FWD</button><button data-touch="go" class="go-button" aria-label="Hold to accelerate">GO <small>HOLD</small></button></div></div></div>
 <div class="loading-screen" id="loading"><div class="loader-mark">✦</div><div class="loader-title">MAPPING THE WILD</div><div class="loader-sub">LOADING REAL-WORLD TERRAIN</div><div class="loader-track"><i></i></div></div>`;let Nt=In?"low":"high";const Ia=e=>In?{low:.82,medium:.93,high:1}[e]:{low:.85,medium:1.1,high:1.35}[e],Na=()=>({width:Math.round(window.visualViewport?.width??innerWidth),height:Math.round(window.visualViewport?.height??innerHeight)}),Dn=Na(),Mt=new Lh({canvas:ee("#game"),antialias:!1,powerPreference:"high-performance"});Mt.setPixelRatio(Math.min(devicePixelRatio||1,Ia(Nt)));Mt.setSize(Dn.width,Dn.height);Mt.shadowMap.enabled=!1;Mt.toneMapping=Xo;Mt.toneMappingExposure=1.12;const bt=new Vl;bt.background=new Ye("#9bb7c1");bt.fog=new Ko("#b9c4bc",105e-6);const Qe=new zn(60,Dn.width/Dn.height,.1,18e3);Qe.position.set(0,8,-16);const hp=new ce,Mo=new ce,Ji=new ce,fi=new ce,hi=new ce,Vn=new ce,ts=Object.assign(((e,n,t,i=!1)=>{Qe.updateMatrixWorld(!0);const r=Mo.set(e,n,t),a=hp.copy(r).project(Qe);if(!i)return a;Ji.copy(r).sub(Qe.position);const s=Ji.length();Ti.set(Qe.position,Ji.multiplyScalar(1/Math.max(.001,s)));const o=Ti.intersectObjects(je.group.children,!1).some(h=>h.distance<s-.8);return{x:a.x,y:a.y,z:a.z,visible:!o}}),{viewport:{width:Dn.width,height:Dn.height},screenFrame:(e,n,t)=>{Qe.updateMatrixWorld(!0),Qe.matrixWorld.extractBasis(fi,hi,Vn);const i=Qe.position.distanceTo(Mo.set(e,n,t));return{right:[fi.x,fi.y,fi.z],up:[hi.x,hi.y,hi.z],worldPerPixel:2*i*Math.tan(lt.degToRad(Qe.fov)*.5)/Math.max(1,innerHeight)}}});bt.add(new Wl(15398143,6443323,1.45));const ns=new Xl(16772559,2.55);ns.position.set(-350,550,260);bt.add(ns);const xa=new Zt({side:wt,depthWrite:!1,depthTest:!1,toneMapped:!1,uniforms:{uRumbleDesert:{value:1},uRumbleAlpine:{value:0},uSunDirection:{value:new ce(-.42,.63,.65).normalize()}},vertexShader:"varying vec3 vSkyDirection;void main(){vSkyDirection=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec3 vSkyDirection;uniform float uRumbleDesert;uniform float uRumbleAlpine;uniform vec3 uSunDirection;void main(){vec3 d=normalize(vSkyDirection);float h=smoothstep(-.16,.84,d.y);vec3 horizon=mix(vec3(.79,.72,.58),vec3(.66,.75,.77),uRumbleDesert);horizon=mix(horizon,vec3(.72,.79,.84),uRumbleAlpine);vec3 zenith=mix(vec3(.24,.37,.48),vec3(.3,.46,.55),uRumbleDesert);vec3 sky=mix(horizon,zenith,h);float sun=pow(max(dot(d,normalize(uSunDirection)),0.0),180.0);sky+=vec3(1.0,.72,.4)*sun*.32;gl_FragColor=vec4(sky,1.0);}"}),Ci=new ft(new Yo(12e3,24,16),xa);Ci.frustumCulled=!1;Ci.renderOrder=-1e3;bt.add(Ci);const Oa=new Zt({transparent:!0,depthWrite:!1,toneMapped:!1,uniforms:{uOpacity:{value:.25}},vertexShader:"varying vec2 vShadowUv;void main(){vShadowUv=uv*2.0-1.0;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec2 vShadowUv;uniform float uOpacity;void main(){float r=length(vShadowUv);float a=(1.0-smoothstep(.18,1.0,r))*uOpacity;gl_FragColor=vec4(.12,.105,.085,a);}"}),ei=new ft(new ql(1,32),Oa);ei.rotation.x=-Math.PI/2;ei.renderOrder=1;bt.add(ei);const rt=new Vh(In?63:127);bt.add(rt.group);const je=new jh;bt.add(je.group,je.roadsGroup);const mn=new lp;bt.add(mn.group);const _n=new cp;bt.add(_n.group);let en=new Qh;bt.add(en.root);const j=new ip,{ArcadeCollisionWorld:pp}=await va(async()=>{const{ArcadeCollisionWorld:e}=await import("./collision-world-CtPx0JAz.js");return{ArcadeCollisionWorld:e}},__vite__mapDeps([0,1]),import.meta.url),Gt=new pp;await Gt.init();const et=new sp,_t=new up,Ta="rumble-roam-best-stunt-score";function ba(){try{return Number(localStorage.getItem(Ta))||0}catch{return 0}}const ut=new np(ba());let is=0,as=null;(location.hostname==="localhost"||location.hostname==="127.0.0.1")&&(window.__rumbleRoamDebug={getStreetLabelCount(){return je.streetLabelCount},getStreetLabels(){return je.streetLabelPositions.map(e=>{const n=new ce(e.x,e.y,e.z).project(Qe),t=e.screenBounds;return{...e,screenX:(n.x+1)*.5*innerWidth,screenY:(1-n.y)*.5*innerHeight,depth:n.z,screenBounds:t?{left:(t.left+1)*.5*innerWidth,right:(t.right+1)*.5*innerWidth,top:(1-t.bottom)*.5*innerHeight,bottom:(1-t.top)*.5*innerHeight}:void 0}})},getStreetGeometry(){return je.streetLabelGeometryDebug},getStreetLabelDiagnostics(){return je.streetLabelDiagnostics},getStreetCameraState(){return Qe.updateMatrixWorld(!0),Qe.getWorldDirection(Vn),{truckYaw:j.yaw,cameraPosition:[Qe.position.x,Qe.position.y,Qe.position.z],cameraForward:[Vn.x,Vn.y,Vn.z],cameraFov:Qe.fov,cameraAspect:Qe.aspect,viewport:[innerWidth,innerHeight],projectionMatrix:Array.from(Qe.projectionMatrix.elements),viewMatrix:Array.from(Qe.matrixWorldInverse.elements)}},getStreetAtlasDataUrl(){return je.streetLabelAtlasImage?.toDataURL()??null},getPhysicsState(){return{yaw:j.yaw,pitch:j.pitch,roll:j.roll,grounded:j.grounded,position:[j.pos.x,j.pos.y,j.pos.z],speed:j.speed,verticalSpeed:j.vel.y,airTime:j.airTime,airRoll:et.state.airRoll,analogX:et.analog.x,stuntRolls:ut.rolls,stuntPoints:ut.currentPoints,lastLandingSpeed:is,lastLandingAward:as,lastLandingDebug:ut.lastLandingDebug,stuntAirborne:ut.isAirborne,stuntAirtime:ut.airtime}},spawnImpactTestBuilding(){rt.frame&&je.addFixtureRoad(rt.frame,(i,r)=>rt.heightAt(i,r));const e=Jn(j.yaw),n=j.pos.clone().addScaledVector(e,11),t=je.addFixtureBuilding(`fixture-impact-${Date.now()}`,n.x,n.z,(i,r)=>rt.heightAt(i,r),Gt,{w:7,d:6,h:9});return Ot("LOCAL TEST BUILDING AHEAD"),t.id},spawnImpactTestSet(){const e=Jn(j.yaw);return rt.frame&&je.addFixtureRoad(rt.frame,(n,t)=>rt.heightAt(n,t)),[10,27].map((n,t)=>{const i=j.pos.clone().addScaledVector(e,n);return je.addFixtureBuilding(`fixture-impact-set-${Date.now()}-${t}`,i.x,i.z,(r,a)=>rt.heightAt(r,a),Gt,t?{w:10,d:8,h:24}:{w:6,d:5,h:7}).id})},prepareMappedImpact(){const e=je.list.filter(s=>s.source==="osm"&&!s.broken);e.sort((s,o)=>Math.hypot(s.x-j.pos.x,s.z-j.pos.z)-Math.hypot(o.x-j.pos.x,o.z-j.pos.z));const n=e[0];if(!n)return null;const t=new ce(n.x-j.pos.x,0,n.z-j.pos.z).normalize();t.lengthSq()<.1&&t.set(0,0,1);const i=Math.max(n.w,n.d)*.5+6,r=n.x-t.x*i,a=n.z-t.z*i;return j.yaw=Math.atan2(t.x,t.z),j.pos.set(r,rt.heightAt(r,a)+1.65*ni.scale,a),j.vel.set(0,0,0),j.grounded=!0,j.pitch=0,j.roll=0,Gt.step(j.pos,j.yaw,1/120,j.vel),Gt.step(j.pos,j.yaw,1/120,j.vel),j.vel.copy(t).multiplyScalar(24),n.id},hasFixtureRoad(){return je.roadsGroup.children.some(e=>e.userData.kind==="fixture-road")}});const ni={gravity:24,jump:15,scale:1};ee("#graphics-quality").value=Nt;let vn="chase",Kt=!1,Aa=0,Yn=.25,Jt=null,Ra=null,$t=Pa[1],ea=0,ti=performance.now(),Ut=0,Eo=0,xo=0,To=0,ta=performance.now(),pi=0,Si=0,na=0,mi=0,bo=0,Ao=0;const Ti=new zl,Ro=new ct;ee("#building-info-close").onclick=()=>ee("#building-info").classList.add("hidden");ee("#game").addEventListener("pointerup",e=>{if(e.button!==0||on.classList.contains("overlay-open"))return;const n=ee("#game").getBoundingClientRect();Ro.set((e.clientX-n.left)/n.width*2-1,-(e.clientY-n.top)/n.height*2+1),Ti.setFromCamera(Ro,Qe);const t=Ti.intersectObjects(je.group.children,!1).find(p=>p.object.isBatchedMesh&&p.batchId!==void 0);if(!t)return;const i=je.list.find(p=>p.batch===t.object&&p.instanceId===t.batchId);if(!i||i.broken||!i.tags)return;const r=i.tags,a=ee("#building-info"),s=[r["addr:housenumber"],r["addr:street"]].filter(Boolean).join(" ");ee("#building-info-name").textContent=r.name??(s||(i.category==="other"?"Mapped building":i.category[0].toUpperCase()+i.category.slice(1))),ee("#building-info-type").textContent=r["building:part"]?"OPENSTREETMAP BUILDING PART":"OPENSTREETMAP BUILDING";const o=[["Type",r.building??r["building:part"]??"—"],["Height",r.height??r["building:height"]??(r["building:levels"]?`${r["building:levels"]} levels`:"")],["Name",r.name??""],["Address",s]],h=ee("#building-info-attrs");h.replaceChildren();const f=document.createElement("dl");for(const[p,d]of o)if(d){const g=document.createElement("dt");g.textContent=p;const _=document.createElement("dd");_.textContent=d,f.append(g,_)}h.append(f),a.classList.remove("hidden")});function mp(){const e=performance.memory;return e?Math.round(e.usedJSHeapSize/1048576*10)/10:null}function Ot(e){const n=ee("#toast");n.textContent=e,n.classList.add("show"),clearTimeout(Eo),Eo=window.setTimeout(()=>n.classList.remove("show"),2800)}function Fa(){et.releaseAll(),ee("#analog-knob").style.transform="translate(0,0)",ee("#analog-pad").classList.remove("dragging")}function Vt(){const e=["location-panel","settings-panel","help-panel","pause-panel"].some(n=>!ee("#"+n).classList.contains("hidden"));on.classList.toggle("overlay-open",e),e&&Fa()}function rs(){document.querySelectorAll(".preset").forEach((e,n)=>{const t=Pa[n],i=Math.abs(t.lat-$t.lat)<2e-4&&Math.abs(t.lon-$t.lon)<2e-4;e.classList.toggle("selected",i),e.setAttribute("aria-pressed",String(i))})}function wo(e){ee("#picker-place").textContent=$t.name,ee("#picker-coverage").textContent=e}async function yi(e){const n=++ea;$t=e,ee("#picker-place").textContent=e.name,wo("Checking packaged OSM buildings and roads…"),rs(),Kt=!1,Si=0,ee("#building-info").classList.add("hidden"),_n.clear(),je.reset(Gt),ee("#geo-status").textContent="GEOGRAPHIC DATA · LOADING";const t=e.name.toLowerCase(),i=/moab|grand canyon|sahara|utah|arizona/.test(t),r=/alps|everest|mountain|swiss/.test(t);xa.uniforms.uRumbleDesert.value=i?1:0,xa.uniforms.uRumbleAlpine.value=r?1:0,bt.fog instanceof Ko&&bt.fog.color.set(i?"#c5a983":r?"#b9c8d3":"#b9c4bc"),["location-panel","settings-panel","help-panel","pause-panel"].forEach(a=>ee("#"+a).classList.add("hidden")),Vt(),ee("#loading").classList.remove("done"),ee("#place-name").textContent=e.name,ee("#terrain-name").textContent=e.terrain??"OPEN TERRAIN",Ot("Mapping terrain…"),await rt.load(e),n===ea&&(j.reset(rt,ni.scale),ut.reset(),ee("#loading").classList.add("done"),Ot("Terrain is ready. Go make a mess."),je.load(e,(a,s)=>rt.heightAt(a,s),Gt,rt.frame).then(a=>{n===ea&&(a.heading!==void 0&&j.speed<2&&(j.yaw=a.heading),ee("#geo-status").textContent=a.message,wo(a.source==="osm"?`${a.buildings.toLocaleString()} real OSM buildings · ${a.roads.toLocaleString()} mapped roads and paths`:"TERRAIN ONLY · no packaged buildings or roads at this location."),Ot(a.source==="osm"?`OSM map · ${a.buildings} buildings · ${a.roads} street/path lines`:"No packaged map data here. Terrain only; no practice obstacles were added."))}),Jt?.flyTo({center:[e.lon,e.lat],zoom:12}),Ra?.setLngLat([e.lon,e.lat]))}ee("#practice-course").addEventListener("click",()=>{const e=je.addPracticeCourse((n,t)=>rt.heightAt(n,t),Gt);ee("#geo-status").textContent=`${je.status.message} · OPTIONAL PRACTICE OBSTACLES`,Ot(e?`Optional practice course added · ${e} obstacles`:"Practice obstacles are already active.")});Pa.forEach((e,n)=>{const t=document.createElement("button");t.className="preset",t.setAttribute("aria-pressed","false"),t.innerHTML=`<span class="preset-index">0${n+1}</span><span>${e.name}</span><i>↗</i>`,t.onclick=()=>yi(e),ee("#presets").append(t)});rs();ee("#search-form").addEventListener("submit",async e=>{e.preventDefault();const n=ee("#location-search").value.trim();if(!n)return;const t=ee("#search-results");t.innerHTML='<div class="search-status">SEARCHING THE GLOBE…</div>';try{const i=await Bh(n);if(!i.length){t.innerHTML='<div class="search-status">No places found. Try a nearby town or coordinates.</div>';return}t.innerHTML="";for(const r of i){const a=document.createElement("button");a.className="result",a.innerHTML=`<span>⌖</span><span>${r.name}</span><i>↗</i>`,a.onclick=()=>yi(r),t.append(a)}}catch{t.innerHTML='<div class="search-status">Location search is busy. Try coordinates like 40.7, -73.9.</div>'}});ee("#location-search").addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),ee("#search-form").requestSubmit())});ee("#map-btn").onclick=async()=>{if(ee("#location-panel").classList.toggle("hidden"),ee("#settings-panel").classList.add("hidden"),ee("#help-panel").classList.add("hidden"),Vt(),Jt)setTimeout(()=>Jt?.resize(),100);else{const[n,t]=await Promise.all([va(()=>import("./maplibre-gl-BT_db7in.js"),[],import.meta.url),va(()=>import("./maplibre-gl-worker-re4DVwB4.js"),[],import.meta.url)]);n.setWorkerUrl(t.default),Jt=new n.Map({container:"mini-map",style:"https://tiles.openfreemap.org/styles/liberty",center:[$t.lon,$t.lat],zoom:10,attributionControl:!1}),Jt.addControl(new n.NavigationControl({showCompass:!1}),"top-right"),Ra=new n.Marker({color:"#f2632b"}).setLngLat([$t.lon,$t.lat]).addTo(Jt),Jt.on("click",i=>{const r={name:`${i.lngLat.lat.toFixed(4)}, ${i.lngLat.lng.toFixed(4)}`,lat:i.lngLat.lat,lon:i.lngLat.lng};Ra?.setLngLat(i.lngLat);const a=document.createElement("button");a.className="result",a.innerHTML=`<span>⌖</span><span>Drive at ${r.name}</span><i>↗</i>`,a.onclick=()=>yi(r),ee("#search-results").replaceChildren(a)})}};ee("#settings-btn").onclick=()=>{ee("#settings-panel").classList.toggle("hidden"),ee("#location-panel").classList.add("hidden"),ee("#help-panel").classList.add("hidden"),Vt()};const Ba=()=>{ee("#help-panel").classList.toggle("hidden"),ee("#location-panel").classList.add("hidden"),ee("#settings-panel").classList.add("hidden"),Vt()};ee("#help-btn").onclick=Ba;ee("#touch-help").onclick=Ba;document.querySelectorAll("[data-close]").forEach(e=>e.addEventListener("click",()=>{ee("#"+e.dataset.close).classList.add("hidden"),Vt()}));const Ga=(e,n,t)=>{const i=ee("#"+e);i.oninput=()=>{const r=+i.value/(n==="scale"?10:1);ni[n]=r,ee("#"+n+"-value").textContent=t(r),n==="scale"&&en.root.scale.setScalar(r)}};Ga("gravity","gravity",e=>e.toFixed(0));Ga("jump","jump",e=>e.toFixed(0));Ga("scale","scale",e=>e.toFixed(1)+"×");ee("#paint").addEventListener("input",e=>en.setColor(e.target.value));function gp(e){Nt=e,ee("#graphics-quality").value=e,Mt.setPixelRatio(Math.min(devicePixelRatio||1,Ia(e)));const n=Na();Mt.setSize(n.width,n.height),rt.setVisualQuality(e),mn.setQuality(e),_n.setQuality(e),Oa.uniforms.uOpacity.value=os(e)}const os=e=>e==="low"?.18:e==="medium"?.23:.29;ee("#graphics-quality").addEventListener("change",e=>gp(e.target.value));rt.setVisualQuality(Nt);mn.setQuality(Nt);_n.setQuality(Nt);Oa.uniforms.uOpacity.value=os(Nt);ee("#audio-toggle").addEventListener("change",e=>{const n=e.target.checked;n&&_t.start(),_t.setMuted(!n),ee("#audio-status").textContent=n?"Audio enabled.":"Audio muted."});ee("#master-volume").addEventListener("input",e=>{const n=+e.target.value;_t.setMasterVolume(n/100),ee("#volume-value").textContent=`${n}%`});ee("#audio-test").addEventListener("click",()=>{_t.start();const e=_t.testTone();ee("#audio-status").textContent=e?"Test tone playing through the game audio output.":"Unmute audio to play the test tone.",e||Ot("Turn Audio on to hear the test.")});function Ha(){j.reset(rt,ni.scale),ut.reset(),en.root.visible=!0,Ot("Truck recovered. Send it!")}function ka(e){const n=["chase","far","hood","free"];vn=e??n[(n.indexOf(vn)+1)%n.length],document.querySelectorAll("[data-camera]").forEach(t=>t.classList.toggle("selected",t.dataset.camera===vn))}function Va(){Kt=!Kt,Kt&&et.releaseAll(),ee("#pause-panel").classList.toggle("hidden",!Kt),Vt()}ee("#reset-btn").onclick=Ha;ee("#touch-reset").onclick=()=>{_t.start(),Ha()};ee("#touch-camera").onclick=()=>ka();ee("#touch-pause").onclick=()=>Va();ee("#resume-btn").onclick=()=>{_t.start(),Kt=!1,ti=performance.now(),ee("#pause-panel").classList.add("hidden"),Vt()};ee("#pause-btn").onclick=()=>Va();ee("#pause-location").onclick=()=>{ee("#pause-panel").classList.add("hidden"),Vt(),ee("#map-btn").click()};document.querySelectorAll("[data-camera]").forEach(e=>e.addEventListener("click",()=>ka(e.dataset.camera)));const ia=ee("#steering-mode"),aa=ee("#steering-sensitivity");ia.addEventListener("change",()=>{et.setSteeringMode(ia.value),on.classList.toggle("classic-steering",ia.value==="buttons")});aa.addEventListener("input",()=>{et.setSensitivity(+aa.value/100),ee("#sensitivity-value").textContent=`${aa.value}%`});ee("#touch-gear").addEventListener("click",()=>{const e=et.toggleGear();ee("#touch-gear").textContent=e===1?"FWD":"REV",ee("#touch-gear").setAttribute("aria-label",e===1?"Forward selected; toggle to reverse":"Reverse selected; toggle to forward")});const Kn=ee("#touch-control-mode");Kn.textContent=In?"⌨ KEYS":"◉ TOUCH";Kn.setAttribute("aria-pressed",String(!on.classList.contains("keyboard-controls-visible")));Kn.onclick=()=>{const e=on.classList.toggle("keyboard-controls-visible");Kn.innerHTML=e?"◉ <span>TOUCH</span>":"⌨ <span>KEYS</span>",Kn.setAttribute("aria-pressed",String(!e))};window.addEventListener("keydown",e=>{e.repeat||Ea(e.target)||(e.key.toLowerCase()==="m"&&ee("#map-btn").click(),e.key.toLowerCase()==="c"&&ka(),e.key.toLowerCase()==="r"&&Ha(),e.key==="Escape"&&Va(),(e.key==="?"||e.key.toLowerCase()==="h")&&Ba(),(e.key===" "||e.key.toLowerCase()==="w")&&_t.start())});document.querySelectorAll("[data-touch]").forEach(e=>{const n=e.dataset.touch;e.addEventListener("pointerdown",t=>{if(!(t.pointerType==="mouse"&&t.button!==0)){t.preventDefault(),et.pointerDown(t.pointerId,n);try{e.setPointerCapture(t.pointerId)}catch{}_t.start()}}),e.addEventListener("pointerup",t=>{t.preventDefault(),et.pointerUp(t.pointerId)}),e.addEventListener("pointercancel",t=>et.pointerCancel(t.pointerId)),e.addEventListener("lostpointercapture",t=>et.lostPointerCapture(t.pointerId))});const Ht=ee("#analog-pad"),ss=ee("#analog-knob");Ht.addEventListener("pointerdown",e=>{if(e.pointerType==="mouse"&&e.button!==0)return;e.preventDefault();const n=Ht.getBoundingClientRect();et.analog.pointerDown(e.pointerId,e.clientX,e.clientY,Math.min(n.width,n.height)*.42),Ht.classList.add("dragging");try{Ht.setPointerCapture(e.pointerId)}catch{}_t.start()});Ht.addEventListener("pointermove",e=>{if(et.analog.pointerId!==e.pointerId)return;e.preventDefault();const n=Ht.getBoundingClientRect();et.analog.pointerMove(e.pointerId,e.clientX,e.clientY);const t=Math.min(n.width,n.height)*.32;ss.style.transform=`translate(${et.analog.x*t}px,${et.analog.y*t}px)`});const za=e=>{et.analog.pointerUp(e.pointerId),ss.style.transform="translate(0,0)",Ht.classList.remove("dragging")};Ht.addEventListener("pointerup",za);Ht.addEventListener("pointercancel",za);Ht.addEventListener("lostpointercapture",za);window.addEventListener("blur",()=>Fa());document.addEventListener("visibilitychange",()=>{ti=performance.now(),document.hidden&&(Fa(),Kt=!0,ee("#pause-panel").classList.remove("hidden"),Vt())});window.addEventListener("pointermove",e=>{vn==="free"&&e.buttons&&(Aa-=e.movementX*.004,Yn=lt.clamp(Yn-e.movementY*.003,-.3,1.1))});let Co=0,ra=60;function _p(e){const n=j.pos,t=Jn(j.yaw),i=Math.min(1,j.speed/28),r=Math.max(-35,Math.min(35,(j.speed-Co)/Math.max(e,.001)));Co=j.speed;let a,s;if(vn==="hood")a=n.clone().add(new ce(0,2.3,0)).addScaledVector(t,1.2),s=a.clone().addScaledVector(t,7).add(new ce(0,.3,0));else if(vn==="free"){const f=new ce(Math.sin(Aa)*Math.cos(Yn),Math.sin(Yn),Math.cos(Aa)*Math.cos(Yn));a=n.clone().add(new ce(0,1.5,0)),s=a.clone().addScaledVector(f,-14)}else{const f=vn==="far",p=(f?30:11.8)+i*(f?8:3.8),d=(f?10:5.35)+i*1.6;a=n.clone().add(new ce(0,1.4,0)).addScaledVector(t,j.speed*.2),s=n.clone().addScaledVector(t,-p).add(new ce(0,d,0)).addScaledVector(j.vel,-.11),f||s.addScaledVector(Da(j.yaw),2.3),s.addScaledVector(t,-lt.clamp(r*.018,-.8,.8))}const o=a;Ut>0&&(s.x+=(Math.random()-.5)*Ut,s.y+=(Math.random()-.5)*Ut,Ut=Math.max(0,Ut-e*1.3)),Qe.position.lerp(s,1-Math.exp(-(5.4-i*.65)*e)),Qe.lookAt(o);const h=60+i*4.5;Math.abs(h-ra)>.15&&(ra=h,Qe.fov=ra,Qe.updateProjectionMatrix())}function ls(e){requestAnimationFrame(ls);const n=performance.now(),t=Math.min((e-ti)/1e3,.045);if(ti=e,!Kt){const h=et.update(!j.grounded),f=j.grounded,p=j.vel.y,d=performance.now();j.update(t,h,rt,en,ni),Ao=performance.now()-d,on.classList.toggle("airborne",!j.grounded);const g=ut.update({grounded:j.grounded,airtime:j.airTime,pitch:j.pitch,roll:j.roll,landingSpeed:Math.abs(p)});if(!f&&j.grounded&&(is=Math.abs(p),as=g),f&&!j.grounded&&h.jump&&(_t.jump(),Ut=Math.max(Ut,.07)),!f&&j.grounded&&(_t.landing(Math.min(1,Math.abs(p)/20)),Ut=Math.max(Ut,Math.min(.28,Math.abs(p)*.008)),g&&(Ot(`${g.message}  +${g.points.toLocaleString()} PTS`),ut.bestScore>ba())))try{localStorage.setItem(Ta,String(ut.bestScore))}catch{}const _=Gt.step(j.pos,j.yaw,t,j.vel);if(_){const x=je.break(_.building);if(Gt.removeBuilding(_.building),x){Si++;const c=Math.round(100+Math.min(420,_.building.h*12)+_.intensity*120);ut.awardBonus(c);try{ut.bestScore>ba()&&localStorage.setItem(Ta,String(ut.bestScore))}catch{}_n.destroy(_.building,_,(l,A)=>rt.heightAt(l,A)),mn.burst(_.position,Math.round(22+_.intensity*20),16752988),j.vel.addScaledVector(_.normal,-(1.5+_.intensity*4)),j.vel.y+=1+_.intensity*2.5,Ut=Math.max(Ut,.2+_.intensity*.48),_t.impact(_.intensity),Ot(Si>1?`MULTI-SMASH · +${c} PTS`:`BUILDING SMASHED · DEMOLITION BONUS +${c}`)}}const T=Math.abs(j.vel.dot(Da(j.yaw)));for(let x=0;x<j.wheelContacts.length;x++){const c=j.wheelContacts[x];mn.dust(new ce(c.x,c.height+.07,c.z),j.speed*(T>j.speed*.28?1.35:1))}if(h.nitro&&j.nitro>0&&Math.random()<t*8){const x=j.pos.clone().addScaledVector(Jn(j.yaw),-1.72);mn.burst(x.add(new ce((Math.random()-.5)*.9,.9,(Math.random()-.5)*.35)),1,16742965)}mn.update(t),_n.update(t),je.updateVisibility(j.pos.x,j.pos.z,Nt==="low"?500:Nt==="medium"?800:1100),_t.update(j.speed,Math.max(0,h.throttle),h.nitro&&j.nitro>0,Math.max(h.handbrake?.55:0,T/Math.max(4,j.speed))),_p(t),e-To>550&&(To=e,je.updateStreetLabels(j.pos.x,j.pos.z,j.yaw,ts))}Ci.position.copy(Qe.position);const i=j.wheelContacts.reduce((h,f)=>Math.max(h,f.height),-1/0),r=Number.isFinite(i)?i:rt.heightAt(j.pos.x,j.pos.z),a=lt.clamp(j.pos.y-r,0,80);ei.position.set(j.pos.x,r+.035,j.pos.z),ei.scale.set(1.35+a*.055,2+a*.07,1),ee("#speed").textContent=String(Math.round(j.speed*3.6)).padStart(3,"0"),ee("#speed-bar").style.width=`${Math.min(100,j.speed/30*100)}%`,ee("#nitro-bar").style.width=`${j.nitro}%`,ee("#nitro-state").textContent=j.nitro>5?"READY TO BURN":"RECHARGING",ee("#air-time").textContent=`${ut.airtime.toFixed(1)}s`,ee("#stunt-score").textContent=ut.currentPoints.toLocaleString(),ee("#stunt-best").textContent=ut.bestScore.toLocaleString(),e-xo>900&&rt.frame&&(xo=e,ee("#street-name").textContent=je.nearestStreetName(j.pos.x,j.pos.z,rt.frame)||""),ee("#level-hint").textContent=ut.isAirborne?et.state.level?"LEVELING…":"F / LEVEL TO RIGHT":"",ee("#touch-level").classList.toggle("active",et.state.level??!1);const s=performance.now();Mt.render(bt,Qe),bo=performance.now()-s;const o=performance.now()-n;if(na+=o,mi=Math.max(mi,o),pi++,e-ta>=1e3){const h=rt.takePerformanceSample();window.__monsterMapMetrics={fps:Math.round(pi*1e3/(e-ta)),frameMs:Math.round(na/pi*10)/10,frameMsMax:Math.round(mi*10)/10,physicsMs:+Ao.toFixed(2),renderMs:+bo.toFixed(2),terrainSampleMs:+h.heightSampleMs.toFixed(3),terrainSamples:h.heightSamples,terrainTileBuildMs:+h.tileBuildMs.toFixed(3),terrainTileBuilds:h.tileBuilds,pixelRatio:Mt.getPixelRatio(),graphicsQuality:Nt,drawCalls:Mt.info.render.calls,triangles:Mt.info.render.triangles,geometries:Mt.info.memory.geometries,textures:Mt.info.memory.textures,heapMB:mp(),audioState:_t.getState(),audioRms:+_t.outputRms().toFixed(4),audioMuted:_t.isMuted(),volume:_t.getMasterVolume(),speed:j.speed,position:[j.pos.x,j.pos.y,j.pos.z],destroyed:Si,activeDebris:_n.activeCount,osmBuildings:je.status.buildings,osmRoads:je.status.roads,streetLabels:je.streetLabelCount,worldDataSource:je.status.source,yaw:j.yaw,pitch:j.pitch,roll:j.roll,steer:et.state.steer,throttle:et.state.throttle,nitro:et.state.nitro,jump:et.state.jump,grounded:j.grounded,activeTouchActions:et.touches.size,frontWheelAngles:en.frontWheels.map(f=>f.rotation.y),rearWheelAngles:en.wheels.filter(f=>!en.frontWheels.includes(f)).map(f=>f.rotation.y),wheelContacts:j.wheelContacts.filter(f=>f.contact).length,averageCompression:j.wheelContacts.reduce((f,p)=>f+p.compression,0)/Math.max(1,j.wheelContacts.length),contactPitch:j.contactPitch,contactRoll:j.contactRoll,terrainOriginHeight:rt.heightAt(0,0),stuntAirtime:ut.airtime,stuntPoints:ut.currentPoints,bestStunt:ut.bestScore,stuntRolls:ut.rolls,stuntFlips:ut.flips,leveling:et.state.level??!1},pi=0,na=0,mi=0,ta=e}}function Pi(){const e=Na();Mt.setPixelRatio(Math.min(devicePixelRatio||1,Ia(Nt))),Mt.setSize(e.width,e.height),Qe.aspect=e.width/Math.max(1,e.height),Qe.updateProjectionMatrix(),ts.viewport={width:e.width,height:e.height},Jt?.resize()}window.addEventListener("resize",Pi);window.addEventListener("orientationchange",()=>setTimeout(Pi,180));window.visualViewport?.addEventListener("resize",Pi);const cs=ee("#game");cs.addEventListener("webglcontextlost",e=>{e.preventDefault(),et.releaseAll(),Kt=!0,ee("#pause-panel").classList.remove("hidden"),Vt(),Ot("Graphics paused. Return to the game when ready.")});cs.addEventListener("webglcontextrestored",()=>{ti=performance.now(),Pi(),Ot("Graphics restored.")});await yi($t);requestAnimationFrame(ls);
