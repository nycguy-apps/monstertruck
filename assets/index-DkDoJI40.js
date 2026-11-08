const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./collision-world-DMDY528w.js","./three.core-B8buOegP.js"])))=>i.map(i=>d[i]);
import{c as rs,N as Jt,S as Mo,C as We,F as xo,M as Ht,V as re,R as os,a as xt,w as na,W as za,b as Pn,d as lt,L as bn,H as Mi,U as vn,D as Lt,B as Rt,e as Yn,f as xi,p as ss,E as ls,g as at,P as kn,A as cs,h as Pi,i as Xt,j as _i,k as xa,l as Kn,m as $n,n as To,o as ds,q as xn,r as vi,s as us,t as fs,u as Nn,O as hs,v as ps,x as ms,y as gs,z as _s,G as vs,I as Ss,J as Es,K as Ms,Q as xs,T as Ts,X as bs,Y as As,Z as Rs,_ as ws,$ as Cs,a0 as ys,a1 as Ps,a2 as Li,a3 as An,a4 as ri,a5 as Ls,a6 as Vn,a7 as Ds,a8 as Us,a9 as Is,aa as Ns,ab as bo,ac as Os,ad as Fs,ae as Bs,af as Gs,ag as ze,ah as Hs,ai as ks,aj as Vs,ak as Kt,al as tn,am as en,an as ot,ao as Ao,ap as mn,aq as zt,ar as Si,as as Ro,at as wo,au as Co,av as yo,aw as zs,ax as Ws,ay as Xs,az as qs,aA as Po,aB as fn,aC as Ys,aD as Ks,aE as $s,aF as Lo,aG as Zs,aH as Do,aI as Uo,aJ as Di,aK as Ui,aL as Ii,aM as Ni,aN as Ze,aO as Wa,aP as Xa,aQ as qa,aR as Ya,aS as Ka,aT as $a,aU as Za,aV as Qa,aW as ja,aX as Ja,aY as er,aZ as tr,a_ as nr,a$ as ir,b0 as ar,b1 as rr,b2 as or,b3 as sr,b4 as lr,b5 as cr,b6 as dr,b7 as ur,b8 as fr,b9 as hr,ba as pr,bb as mr,bc as gr,bd as _r,be as ia,bf as aa,bg as ra,bh as oa,bi as sa,bj as la,bk as ca,bl as Qs,bm as vr,bn as js,bo as hi,bp as Js,bq as Sr,br as Er,bs as Mr,bt as da,bu as ua,bv as el,bw as Io,bx as tl,by as Ti,bz as nl,bA as il,bB as No,bC as nn,bD as xr,bE as Cn,bF as Tr,bG as Oo,bH as Zn,bI as Ln,bJ as al,bK as Ta,bL as rl,bM as ol,bN as sl,bO as br,bP as Mt,bQ as ll,bR as cl,bS as dl,bT as ul,bU as fl,bV as Fo,bW as hl,bX as pl,bY as ml,bZ as gl,b_ as _l,b$ as vl,c0 as Sl,c1 as El,c2 as Ml,c3 as xl,c4 as Tl,c5 as bl,c6 as qt,c7 as mt,c8 as St,c9 as Qn,ca as fa,cb as Bo,cc as Al,cd as Rl,ce as wl,cf as Wt,cg as Ar,ch as Cl,ci as Oi,cj as Rr,ck as wr,cl as Cr,cm as Zt,cn as Go,co as yl,cp as Pl,cq as Ll,cr as Ho,cs as Dl,ct as Ul,cu as Il,cv as Nl}from"./three.core-B8buOegP.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();const Ol="modulepreload",Fl=function(e,n){return new URL(e,n).href},yr={},ha=function(n,t,i){let a=Promise.resolve();if(t&&t.length>0){let s=function(m){return Promise.all(m.map(c=>Promise.resolve(c).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};const o=document.getElementsByTagName("link"),h=document.querySelector("meta[property=csp-nonce]"),u=h?.nonce||h?.getAttribute("nonce");a=s(t.map(m=>{if(m=Fl(m,i),m in yr)return;yr[m]=!0;const c=m.endsWith(".css"),_=c?'[rel="stylesheet"]':"";if(!!i)for(let x=o.length-1;x>=0;x--){const d=o[x];if(d.href===m&&(!c||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${_}`))return;const T=document.createElement("link");if(T.rel=c?"stylesheet":Ol,c||(T.as="script"),T.crossOrigin="",T.href=m,u&&T.setAttribute("nonce",u),document.head.appendChild(T),c)return new Promise((x,d)=>{T.addEventListener("load",x),T.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${m}`)))})}))}function r(s){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s}return a.then(s=>{for(const o of s||[])o.status==="rejected"&&r(o.reason);return n().catch(r)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ko(){let e=null,n=!1,t=null,i=null;function a(r,s){t(r,s),i=e.requestAnimationFrame(a)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(a),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(r){t=r},setContext:function(r){e=r}}}function Bl(e){const n=new WeakMap;function t(o,h){const u=o.array,m=o.usage,c=u.byteLength,_=e.createBuffer();e.bindBuffer(h,_),e.bufferData(h,u,m),o.onUploadCallback();let g;if(u instanceof Float32Array)g=e.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)g=e.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?g=e.HALF_FLOAT:g=e.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=e.SHORT;else if(u instanceof Uint32Array)g=e.UNSIGNED_INT;else if(u instanceof Int32Array)g=e.INT;else if(u instanceof Int8Array)g=e.BYTE;else if(u instanceof Uint8Array)g=e.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:c}}function i(o,h,u){const m=h.array,c=h.updateRanges;if(e.bindBuffer(u,o),c.length===0)e.bufferSubData(u,0,m);else{c.sort((g,T)=>g.start-T.start);let _=0;for(let g=1;g<c.length;g++){const T=c[_],x=c[g];x.start<=T.start+T.count+1?T.count=Math.max(T.count,x.start+x.count-T.start):(++_,c[_]=x)}c.length=_+1;for(let g=0,T=c.length;g<T;g++){const x=c[g];e.bufferSubData(u,x.start*m.BYTES_PER_ELEMENT,m,x.start,x.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),n.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const h=n.get(o);h&&(e.deleteBuffer(h.buffer),n.delete(o))}function s(o,h){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const m=n.get(o);(!m||m.version<o.version)&&n.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=n.get(o);if(u===void 0)n.set(o,t(o,h));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,h),u.version=o.version}}return{get:a,remove:r,update:s}}var Gl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hl=`#ifdef USE_ALPHAHASH
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
#endif`,kl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zl=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xl=`#ifdef USE_AOMAP
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
#endif`,ql=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yl=`#ifdef USE_BATCHING
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
#endif`,Kl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$l=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ql=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jl=`#ifdef USE_IRIDESCENCE
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
#endif`,Jl=`#ifdef USE_BUMPMAP
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
#endif`,ec=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ic=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ac=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sc=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lc=`#define PI 3.141592653589793
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
} // validated`,cc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dc=`vec3 transformedNormal = objectNormal;
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
#endif`,uc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mc="gl_FragColor = linearToOutputTexel( gl_FragColor );",gc=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_c=`#ifdef USE_ENVMAP
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
#endif`,vc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sc=`#ifdef USE_ENVMAP
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
#endif`,Ec=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mc=`#ifdef USE_ENVMAP
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
#endif`,xc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ac=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rc=`#ifdef USE_GRADIENTMAP
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
}`,wc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pc=`uniform bool receiveShadow;
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
#endif`,Lc=`#ifdef USE_ENVMAP
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
#endif`,Dc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ic=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Oc=`PhysicalMaterial material;
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
#endif`,Fc=`struct PhysicalMaterial {
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
}`,Bc=`
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
#endif`,Gc=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kc=`#if defined( USE_POINTS_UV )
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
#endif`,$c=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qc=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jc=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ed=`#ifdef USE_MORPHTARGETS
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
#endif`,td=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,id=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ad=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,od=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sd=`#ifdef USE_NORMALMAP
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
#endif`,ld=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ud=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,md=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_d=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ed=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Md=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Td=`float getShadowMask() {
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
}`,bd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ad=`#ifdef USE_SKINNING
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
#endif`,Rd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wd=`#ifdef USE_SKINNING
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
#endif`,Cd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ld=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dd=`#ifdef USE_TRANSMISSION
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
#endif`,Ud=`#ifdef USE_TRANSMISSION
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
#endif`,Id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Od=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gd=`uniform sampler2D t2D;
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
}`,Hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wd=`#include <common>
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
}`,Xd=`#if DEPTH_PACKING == 3200
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
}`,qd=`#define DISTANCE
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
}`,Yd=`#define DISTANCE
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
}`,Kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$d=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zd=`uniform float scale;
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
}`,Qd=`uniform vec3 diffuse;
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
}`,jd=`#include <common>
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
}`,Jd=`uniform vec3 diffuse;
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
}`,eu=`#define LAMBERT
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
}`,tu=`#define LAMBERT
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
}`,nu=`#define MATCAP
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
}`,iu=`#define MATCAP
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
}`,au=`#define NORMAL
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
}`,ru=`#define NORMAL
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
}`,ou=`#define PHONG
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
}`,su=`#define PHONG
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
}`,lu=`#define STANDARD
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
}`,cu=`#define STANDARD
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
}`,du=`#define TOON
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
}`,uu=`#define TOON
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
}`,fu=`uniform float size;
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
}`,hu=`uniform vec3 diffuse;
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
}`,pu=`#include <common>
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
}`,mu=`uniform vec3 color;
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
}`,gu=`uniform float rotation;
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
}`,_u=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:Gl,alphahash_pars_fragment:Hl,alphamap_fragment:kl,alphamap_pars_fragment:Vl,alphatest_fragment:zl,alphatest_pars_fragment:Wl,aomap_fragment:Xl,aomap_pars_fragment:ql,batching_pars_vertex:Yl,batching_vertex:Kl,begin_vertex:$l,beginnormal_vertex:Zl,bsdfs:Ql,iridescence_fragment:jl,bumpmap_pars_fragment:Jl,clipping_planes_fragment:ec,clipping_planes_pars_fragment:tc,clipping_planes_pars_vertex:nc,clipping_planes_vertex:ic,color_fragment:ac,color_pars_fragment:rc,color_pars_vertex:oc,color_vertex:sc,common:lc,cube_uv_reflection_fragment:cc,defaultnormal_vertex:dc,displacementmap_pars_vertex:uc,displacementmap_vertex:fc,emissivemap_fragment:hc,emissivemap_pars_fragment:pc,colorspace_fragment:mc,colorspace_pars_fragment:gc,envmap_fragment:_c,envmap_common_pars_fragment:vc,envmap_pars_fragment:Sc,envmap_pars_vertex:Ec,envmap_physical_pars_fragment:Lc,envmap_vertex:Mc,fog_vertex:xc,fog_pars_vertex:Tc,fog_fragment:bc,fog_pars_fragment:Ac,gradientmap_pars_fragment:Rc,lightmap_pars_fragment:wc,lights_lambert_fragment:Cc,lights_lambert_pars_fragment:yc,lights_pars_begin:Pc,lights_toon_fragment:Dc,lights_toon_pars_fragment:Uc,lights_phong_fragment:Ic,lights_phong_pars_fragment:Nc,lights_physical_fragment:Oc,lights_physical_pars_fragment:Fc,lights_fragment_begin:Bc,lights_fragment_maps:Gc,lights_fragment_end:Hc,logdepthbuf_fragment:kc,logdepthbuf_pars_fragment:Vc,logdepthbuf_pars_vertex:zc,logdepthbuf_vertex:Wc,map_fragment:Xc,map_pars_fragment:qc,map_particle_fragment:Yc,map_particle_pars_fragment:Kc,metalnessmap_fragment:$c,metalnessmap_pars_fragment:Zc,morphinstance_vertex:Qc,morphcolor_vertex:jc,morphnormal_vertex:Jc,morphtarget_pars_vertex:ed,morphtarget_vertex:td,normal_fragment_begin:nd,normal_fragment_maps:id,normal_pars_fragment:ad,normal_pars_vertex:rd,normal_vertex:od,normalmap_pars_fragment:sd,clearcoat_normal_fragment_begin:ld,clearcoat_normal_fragment_maps:cd,clearcoat_pars_fragment:dd,iridescence_pars_fragment:ud,opaque_fragment:fd,packing:hd,premultiplied_alpha_fragment:pd,project_vertex:md,dithering_fragment:gd,dithering_pars_fragment:_d,roughnessmap_fragment:vd,roughnessmap_pars_fragment:Sd,shadowmap_pars_fragment:Ed,shadowmap_pars_vertex:Md,shadowmap_vertex:xd,shadowmask_pars_fragment:Td,skinbase_vertex:bd,skinning_pars_vertex:Ad,skinning_vertex:Rd,skinnormal_vertex:wd,specularmap_fragment:Cd,specularmap_pars_fragment:yd,tonemapping_fragment:Pd,tonemapping_pars_fragment:Ld,transmission_fragment:Dd,transmission_pars_fragment:Ud,uv_pars_fragment:Id,uv_pars_vertex:Nd,uv_vertex:Od,worldpos_vertex:Fd,background_vert:Bd,background_frag:Gd,backgroundCube_vert:Hd,backgroundCube_frag:kd,cube_vert:Vd,cube_frag:zd,depth_vert:Wd,depth_frag:Xd,distanceRGBA_vert:qd,distanceRGBA_frag:Yd,equirect_vert:Kd,equirect_frag:$d,linedashed_vert:Zd,linedashed_frag:Qd,meshbasic_vert:jd,meshbasic_frag:Jd,meshlambert_vert:eu,meshlambert_frag:tu,meshmatcap_vert:nu,meshmatcap_frag:iu,meshnormal_vert:au,meshnormal_frag:ru,meshphong_vert:ou,meshphong_frag:su,meshphysical_vert:lu,meshphysical_frag:cu,meshtoon_vert:du,meshtoon_frag:uu,points_vert:fu,points_frag:hu,shadow_vert:pu,shadow_frag:mu,sprite_vert:gu,sprite_frag:_u},oe={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Ot={basic:{uniforms:Mt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Mt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new We(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Mt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Mt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Mt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new We(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Mt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Mt([oe.points,oe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Mt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Mt([oe.common,oe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Mt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Mt([oe.sprite,oe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Mt([oe.common,oe.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Mt([oe.lights,oe.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Ot.physical={uniforms:Mt([Ot.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const oi={r:0,b:0,g:0},ln=new Cn,vu=new Ht;function Su(e,n,t,i,a,r,s){const o=new We(0);let h=r===!0?0:1,u,m,c=null,_=0,g=null;function T(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?t:n).get(E)),E}function x(b){let E=!1;const w=T(b);w===null?l(o,h):w&&w.isColor&&(l(w,1),E=!0);const C=e.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function d(b,E){const w=T(E);w&&(w.isCubeTexture||w.mapping===Ti)?(m===void 0&&(m=new ot(new nn(1,1,1),new Kt({name:"BackgroundCubeMaterial",uniforms:xr(Ot.backgroundCube.uniforms),vertexShader:Ot.backgroundCube.vertexShader,fragmentShader:Ot.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(C,U,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(m)),ln.copy(E.backgroundRotation),ln.x*=-1,ln.y*=-1,ln.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ln.y*=-1,ln.z*=-1),m.material.uniforms.envMap.value=w,m.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(vu.makeRotationFromEuler(ln)),m.material.toneMapped=lt.getTransfer(w.colorSpace)!==Ze,(c!==w||_!==w.version||g!==e.toneMapping)&&(m.material.needsUpdate=!0,c=w,_=w.version,g=e.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null)):w&&w.isTexture&&(u===void 0&&(u=new ot(new yo(2,2),new Kt({name:"BackgroundMaterial",uniforms:xr(Ot.background.uniforms),vertexShader:Ot.background.vertexShader,fragmentShader:Ot.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(u)),u.material.uniforms.t2D.value=w,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.toneMapped=lt.getTransfer(w.colorSpace)!==Ze,w.matrixAutoUpdate===!0&&w.updateMatrix(),u.material.uniforms.uvTransform.value.copy(w.matrix),(c!==w||_!==w.version||g!==e.toneMapping)&&(u.material.needsUpdate=!0,c=w,_=w.version,g=e.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null))}function l(b,E){b.getRGB(oi,No(e)),i.buffers.color.setClear(oi.r,oi.g,oi.b,E,s)}function A(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,E=1){o.set(b),h=E,l(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(b){h=b,l(o,h)},render:x,addToRenderList:d,dispose:A}}function Eu(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=_(null);let r=a,s=!1;function o(S,P,B,W,q){let Y=!1;const z=c(W,B,P);r!==z&&(r=z,u(r.object)),Y=g(S,W,B,q),Y&&T(S,W,B,q),q!==null&&n.update(q,e.ELEMENT_ARRAY_BUFFER),(Y||s)&&(s=!1,E(S,P,B,W),q!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(q).buffer))}function h(){return e.createVertexArray()}function u(S){return e.bindVertexArray(S)}function m(S){return e.deleteVertexArray(S)}function c(S,P,B){const W=B.wireframe===!0;let q=i[S.id];q===void 0&&(q={},i[S.id]=q);let Y=q[P.id];Y===void 0&&(Y={},q[P.id]=Y);let z=Y[W];return z===void 0&&(z=_(h()),Y[W]=z),z}function _(S){const P=[],B=[],W=[];for(let q=0;q<t;q++)P[q]=0,B[q]=0,W[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:W,object:S,attributes:{},index:null}}function g(S,P,B,W){const q=r.attributes,Y=P.attributes;let z=0;const ne=B.getAttributes();for(const H in ne)if(ne[H].location>=0){const Se=q[H];let Re=Y[H];if(Re===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(Re=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(Re=S.instanceColor)),Se===void 0||Se.attribute!==Re||Re&&Se.data!==Re.data)return!0;z++}return r.attributesNum!==z||r.index!==W}function T(S,P,B,W){const q={},Y=P.attributes;let z=0;const ne=B.getAttributes();for(const H in ne)if(ne[H].location>=0){let Se=Y[H];Se===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(Se=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(Se=S.instanceColor));const Re={};Re.attribute=Se,Se&&Se.data&&(Re.data=Se.data),q[H]=Re,z++}r.attributes=q,r.attributesNum=z,r.index=W}function x(){const S=r.newAttributes;for(let P=0,B=S.length;P<B;P++)S[P]=0}function d(S){l(S,0)}function l(S,P){const B=r.newAttributes,W=r.enabledAttributes,q=r.attributeDivisors;B[S]=1,W[S]===0&&(e.enableVertexAttribArray(S),W[S]=1),q[S]!==P&&(e.vertexAttribDivisor(S,P),q[S]=P)}function A(){const S=r.newAttributes,P=r.enabledAttributes;for(let B=0,W=P.length;B<W;B++)P[B]!==S[B]&&(e.disableVertexAttribArray(B),P[B]=0)}function b(S,P,B,W,q,Y,z){z===!0?e.vertexAttribIPointer(S,P,B,q,Y):e.vertexAttribPointer(S,P,B,W,q,Y)}function E(S,P,B,W){x();const q=W.attributes,Y=B.getAttributes(),z=P.defaultAttributeValues;for(const ne in Y){const H=Y[ne];if(H.location>=0){let ue=q[ne];if(ue===void 0&&(ne==="instanceMatrix"&&S.instanceMatrix&&(ue=S.instanceMatrix),ne==="instanceColor"&&S.instanceColor&&(ue=S.instanceColor)),ue!==void 0){const Se=ue.normalized,Re=ue.itemSize,Ie=n.get(ue);if(Ie===void 0)continue;const Je=Ie.buffer,we=Ie.type,Fe=Ie.bytesPerElement,V=we===e.INT||we===e.UNSIGNED_INT||ue.gpuType===Po;if(ue.isInterleavedBufferAttribute){const K=ue.data,he=K.stride,De=ue.offset;if(K.isInstancedInterleavedBuffer){for(let Te=0;Te<H.locationSize;Te++)l(H.location+Te,K.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Te=0;Te<H.locationSize;Te++)d(H.location+Te);e.bindBuffer(e.ARRAY_BUFFER,Je);for(let Te=0;Te<H.locationSize;Te++)b(H.location+Te,Re/H.locationSize,we,Se,he*Fe,(De+Re/H.locationSize*Te)*Fe,V)}else{if(ue.isInstancedBufferAttribute){for(let K=0;K<H.locationSize;K++)l(H.location+K,ue.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let K=0;K<H.locationSize;K++)d(H.location+K);e.bindBuffer(e.ARRAY_BUFFER,Je);for(let K=0;K<H.locationSize;K++)b(H.location+K,Re/H.locationSize,we,Se,Re*Fe,Re/H.locationSize*K*Fe,V)}}else if(z!==void 0){const Se=z[ne];if(Se!==void 0)switch(Se.length){case 2:e.vertexAttrib2fv(H.location,Se);break;case 3:e.vertexAttrib3fv(H.location,Se);break;case 4:e.vertexAttrib4fv(H.location,Se);break;default:e.vertexAttrib1fv(H.location,Se)}}}}A()}function w(){N();for(const S in i){const P=i[S];for(const B in P){const W=P[B];for(const q in W)m(W[q].object),delete W[q];delete P[B]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const B in P){const W=P[B];for(const q in W)m(W[q].object),delete W[q];delete P[B]}delete i[S.id]}function U(S){for(const P in i){const B=i[P];if(B[S.id]===void 0)continue;const W=B[S.id];for(const q in W)m(W[q].object),delete W[q];delete B[S.id]}}function N(){v(),s=!0,r!==a&&(r=a,u(r.object))}function v(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:N,resetDefaultState:v,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:d,disableUnusedAttributes:A}}function Mu(e,n,t){let i;function a(u){i=u}function r(u,m){e.drawArrays(i,u,m),t.update(m,i,1)}function s(u,m,c){c!==0&&(e.drawArraysInstanced(i,u,m,c),t.update(m,i,c))}function o(u,m,c){if(c===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,m,0,c);let g=0;for(let T=0;T<c;T++)g+=m[T];t.update(g,i,1)}function h(u,m,c,_){if(c===0)return;const g=n.get("WEBGL_multi_draw");if(g===null)for(let T=0;T<u.length;T++)s(u[T],m[T],_[T]);else{g.multiDrawArraysInstancedWEBGL(i,u,0,m,0,_,0,c);let T=0;for(let x=0;x<c;x++)T+=m[x]*_[x];t.update(T,i,1)}}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=h}function xu(e,n,t,i){let a;function r(){if(a!==void 0)return a;if(n.has("EXT_texture_filter_anisotropic")===!0){const U=n.get("EXT_texture_filter_anisotropic");a=e.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(U){return!(U!==Xt&&i.convert(U)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(U){const N=U===Mi&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(U!==vn&&i.convert(U)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==fn&&!N)}function h(U){if(U==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const m=h(u);m!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",m,"instead."),u=m);const c=t.logarithmicDepthBuffer===!0,_=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),g=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),T=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),d=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),l=e.getParameter(e.MAX_VERTEX_ATTRIBS),A=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),b=e.getParameter(e.MAX_VARYING_VECTORS),E=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),w=T>0,C=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:s,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:c,reversedDepthBuffer:_,maxTextures:g,maxVertexTextures:T,maxTextureSize:x,maxCubemapSize:d,maxAttributes:l,maxVertexUniforms:A,maxVaryings:b,maxFragmentUniforms:E,vertexTextures:w,maxSamples:C}}function Tu(e){const n=this;let t=null,i=0,a=!1,r=!1;const s=new Gs,o=new ze,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(c,_){const g=c.length!==0||_||i!==0||a;return a=_,i=c.length,g},this.beginShadows=function(){r=!0,m(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(c,_){t=m(c,_,0)},this.setState=function(c,_,g){const T=c.clippingPlanes,x=c.clipIntersection,d=c.clipShadows,l=e.get(c);if(!a||T===null||T.length===0||r&&!d)r?m(null):u();else{const A=r?0:i,b=A*4;let E=l.clippingState||null;h.value=E,E=m(T,_,b,g);for(let w=0;w!==b;++w)E[w]=t[w];l.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function u(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function m(c,_,g,T){const x=c!==null?c.length:0;let d=null;if(x!==0){if(d=h.value,T!==!0||d===null){const l=g+x*4,A=_.matrixWorldInverse;o.getNormalMatrix(A),(d===null||d.length<l)&&(d=new Float32Array(l));for(let b=0,E=g;b!==x;++b,E+=4)s.copy(c[b]).applyMatrix4(A,o),s.normal.toArray(d,E),d[E+3]=s.constant}h.value=d,h.needsUpdate=!0}return n.numPlanes=x,n.numIntersection=0,d}}function bu(e){let n=new WeakMap;function t(s,o){return o===da?s.mapping=Zn:o===ua&&(s.mapping=Ln),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===da||o===ua)if(n.has(s)){const h=n.get(s).texture;return t(h,s.mapping)}else{const h=s.image;if(h&&h.height>0){const u=new el(h.height);return u.fromEquirectangularTexture(e,s),n.set(s,u),s.addEventListener("dispose",a),t(u.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const h=n.get(o);h!==void 0&&(n.delete(o),h.dispose())}function r(){n=new WeakMap}return{get:i,dispose:r}}const Rn=4,Pr=[.125,.215,.35,.446,.526,.582],un=20,Fi=new al,Lr=new We;let Bi=null,Gi=0,Hi=0,ki=!1;const dn=(1+Math.sqrt(5))/2,Mn=1/dn,Dr=[new re(-dn,Mn,0),new re(dn,Mn,0),new re(-Mn,0,dn),new re(Mn,0,dn),new re(0,dn,-Mn),new re(0,dn,Mn),new re(-1,1,-1),new re(1,1,-1),new re(-1,1,1),new re(1,1,1)],Au=new re;class Ur{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,t=0,i=.1,a=100,r={}){const{size:s=256,position:o=Au}=r;Bi=this._renderer.getRenderTarget(),Gi=this._renderer.getActiveCubeFace(),Hi=this._renderer.getActiveMipmapLevel(),ki=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(n,i,a,h,o),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Or(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(Bi,Gi,Hi),this._renderer.xr.enabled=ki,n.scissorTest=!1,si(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===Zn||n.mapping===Ln?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),Bi=this._renderer.getRenderTarget(),Gi=this._renderer.getActiveCubeFace(),Hi=this._renderer.getActiveMipmapLevel(),ki=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:An,minFilter:An,generateMipmaps:!1,type:Mi,format:Xt,colorSpace:xi,depthBuffer:!1},a=Ir(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ir(n,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ru(r)),this._blurMaterial=wu(r,n,t)}return a}_compileMaterial(n){const t=new ot(this._lodPlanes[0],n);this._renderer.compile(t,Fi)}_sceneToCubeUV(n,t,i,a,r){const h=new kn(90,1,t,i),u=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],c=this._renderer,_=c.autoClear,g=c.toneMapping;c.getClearColor(Lr),c.toneMapping=Jt,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(a),c.clearDepth(),c.setRenderTarget(null));const x=new Ta({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),d=new ot(new nn,x);let l=!1;const A=n.background;A?A.isColor&&(x.color.copy(A),n.background=null,l=!0):(x.color.copy(Lr),l=!0);for(let b=0;b<6;b++){const E=b%3;E===0?(h.up.set(0,u[b],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+m[b],r.y,r.z)):E===1?(h.up.set(0,0,u[b]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+m[b],r.z)):(h.up.set(0,u[b],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+m[b]));const w=this._cubeSize;si(a,E*w,b>2?w:0,w,w),c.setRenderTarget(a),l&&c.render(d,h),c.render(n,h)}d.geometry.dispose(),d.material.dispose(),c.toneMapping=g,c.autoClear=_,n.background=A}_textureToCubeUV(n,t){const i=this._renderer,a=n.mapping===Zn||n.mapping===Ln;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Or()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nr());const r=a?this._cubemapMaterial:this._equirectMaterial,s=new ot(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=n;const h=this._cubeSize;si(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(s,Fi)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let r=1;r<a;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Dr[(a-r-1)%Dr.length];this._blur(n,r-1,r,s,o)}t.autoClear=i}_blur(n,t,i,a,r){const s=this._pingPongRenderTarget;this._halfBlur(n,s,t,i,a,"latitudinal",r),this._halfBlur(s,n,i,i,a,"longitudinal",r)}_halfBlur(n,t,i,a,r,s,o){const h=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,c=new ot(this._lodPlanes[a],u),_=u.uniforms,g=this._sizeLods[i]-1,T=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*un-1),x=r/T,d=isFinite(r)?1+Math.floor(m*x):un;d>un&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${un}`);const l=[];let A=0;for(let U=0;U<un;++U){const N=U/x,v=Math.exp(-N*N/2);l.push(v),U===0?A+=v:U<d&&(A+=2*v)}for(let U=0;U<l.length;U++)l[U]=l[U]/A;_.envMap.value=n.texture,_.samples.value=d,_.weights.value=l,_.latitudinal.value=s==="latitudinal",o&&(_.poleAxis.value=o);const{_lodMax:b}=this;_.dTheta.value=T,_.mipInt.value=b-i;const E=this._sizeLods[a],w=3*E*(a>b-Rn?a-b+Rn:0),C=4*(this._cubeSize-E);si(t,w,C,3*E,2*E),h.setRenderTarget(t),h.render(c,Fi)}}function Ru(e){const n=[],t=[],i=[];let a=e;const r=e-Rn+1+Pr.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);t.push(o);let h=1/o;s>e-Rn?h=Pr[s-e+Rn-1]:s===0&&(h=0),i.push(h);const u=1/(o-2),m=-u,c=1+u,_=[m,m,c,m,c,c,m,m,c,c,m,c],g=6,T=6,x=3,d=2,l=1,A=new Float32Array(x*T*g),b=new Float32Array(d*T*g),E=new Float32Array(l*T*g);for(let C=0;C<g;C++){const U=C%3*2/3-1,N=C>2?0:-1,v=[U,N,0,U+2/3,N,0,U+2/3,N+1,0,U,N,0,U+2/3,N+1,0,U,N+1,0];A.set(v,x*T*C),b.set(_,d*T*C);const S=[C,C,C,C,C,C];E.set(S,l*T*C)}const w=new tn;w.setAttribute("position",new en(A,x)),w.setAttribute("uv",new en(b,d)),w.setAttribute("faceIndex",new en(E,l)),n.push(w),a>Rn&&a--}return{lodPlanes:n,sizeLods:t,sigmas:i}}function Ir(e,n,t){const i=new Pn(e,n,t);return i.texture.mapping=Ti,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function si(e,n,t,i,a){e.viewport.set(n,t,i,a),e.scissor.set(n,t,i,a)}function wu(e,n,t){const i=new Float32Array(un),a=new re(0,1,0);return new Kt({name:"SphericalGaussianBlur",defines:{n:un,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:ba(),fragmentShader:`

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
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Nr(){return new Kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ba(),fragmentShader:`

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
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Or(){return new Kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function ba(){return`

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
	`}function Cu(e){let n=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const h=o.mapping,u=h===da||h===ua,m=h===Zn||h===Ln;if(u||m){let c=n.get(o);const _=c!==void 0?c.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==_)return t===null&&(t=new Ur(e)),c=u?t.fromEquirectangular(o,c):t.fromCubemap(o,c),c.texture.pmremVersion=o.pmremVersion,n.set(o,c),c.texture;if(c!==void 0)return c.texture;{const g=o.image;return u&&g&&g.height>0||m&&g&&a(g)?(t===null&&(t=new Ur(e)),c=u?t.fromEquirectangular(o):t.fromCubemap(o),c.texture.pmremVersion=o.pmremVersion,n.set(o,c),o.addEventListener("dispose",r),c.texture):null}}}return o}function a(o){let h=0;const u=6;for(let m=0;m<u;m++)o[m]!==void 0&&h++;return h===u}function r(o){const h=o.target;h.removeEventListener("dispose",r);const u=n.get(h);u!==void 0&&(n.delete(h),u.dispose())}function s(){n=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function yu(e){const n={};function t(i){if(n[i]!==void 0)return n[i];let a;switch(i){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(i)}return n[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&na("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function Pu(e,n,t,i){const a={},r=new WeakMap;function s(c){const _=c.target;_.index!==null&&n.remove(_.index);for(const T in _.attributes)n.remove(_.attributes[T]);_.removeEventListener("dispose",s),delete a[_.id];const g=r.get(_);g&&(n.remove(g),r.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function o(c,_){return a[_.id]===!0||(_.addEventListener("dispose",s),a[_.id]=!0,t.memory.geometries++),_}function h(c){const _=c.attributes;for(const g in _)n.update(_[g],e.ARRAY_BUFFER)}function u(c){const _=[],g=c.index,T=c.attributes.position;let x=0;if(g!==null){const A=g.array;x=g.version;for(let b=0,E=A.length;b<E;b+=3){const w=A[b+0],C=A[b+1],U=A[b+2];_.push(w,C,C,U,U,w)}}else if(T!==void 0){const A=T.array;x=T.version;for(let b=0,E=A.length/3-1;b<E;b+=3){const w=b+0,C=b+1,U=b+2;_.push(w,C,C,U,U,w)}}else return;const d=new(sl(_)?rl:ol)(_,1);d.version=x;const l=r.get(c);l&&n.remove(l),r.set(c,d)}function m(c){const _=r.get(c);if(_){const g=c.index;g!==null&&_.version<g.version&&u(c)}else u(c);return r.get(c)}return{get:o,update:h,getWireframeAttribute:m}}function Lu(e,n,t){let i;function a(_){i=_}let r,s;function o(_){r=_.type,s=_.bytesPerElement}function h(_,g){e.drawElements(i,g,r,_*s),t.update(g,i,1)}function u(_,g,T){T!==0&&(e.drawElementsInstanced(i,g,r,_*s,T),t.update(g,i,T))}function m(_,g,T){if(T===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,r,_,0,T);let d=0;for(let l=0;l<T;l++)d+=g[l];t.update(d,i,1)}function c(_,g,T,x){if(T===0)return;const d=n.get("WEBGL_multi_draw");if(d===null)for(let l=0;l<_.length;l++)u(_[l]/s,g[l],x[l]);else{d.multiDrawElementsInstancedWEBGL(i,g,0,r,_,0,x,0,T);let l=0;for(let A=0;A<T;A++)l+=g[A]*x[A];t.update(l,i,1)}}this.setMode=a,this.setIndex=o,this.render=h,this.renderInstances=u,this.renderMultiDraw=m,this.renderMultiDrawInstances=c}function Du(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(t.calls++,s){case e.TRIANGLES:t.triangles+=o*(r/3);break;case e.LINES:t.lines+=o*(r/2);break;case e.LINE_STRIP:t.lines+=o*(r-1);break;case e.LINE_LOOP:t.lines+=o*r;break;case e.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:a,update:i}}function Uu(e,n,t){const i=new WeakMap,a=new xt;function r(s,o,h){const u=s.morphTargetInfluences,m=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,c=m!==void 0?m.length:0;let _=i.get(o);if(_===void 0||_.count!==c){let v=function(){U.dispose(),i.delete(o),o.removeEventListener("dispose",v)};_!==void 0&&_.texture.dispose();const g=o.morphAttributes.position!==void 0,T=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],l=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),T===!0&&(b=2),x===!0&&(b=3);let E=o.attributes.position.count*b,w=1;E>n.maxTextureSize&&(w=Math.ceil(E/n.maxTextureSize),E=n.maxTextureSize);const C=new Float32Array(E*w*4*c),U=new Io(C,E,w,c);U.type=fn,U.needsUpdate=!0;const N=b*4;for(let S=0;S<c;S++){const P=d[S],B=l[S],W=A[S],q=E*w*4*S;for(let Y=0;Y<P.count;Y++){const z=Y*N;g===!0&&(a.fromBufferAttribute(P,Y),C[q+z+0]=a.x,C[q+z+1]=a.y,C[q+z+2]=a.z,C[q+z+3]=0),T===!0&&(a.fromBufferAttribute(B,Y),C[q+z+4]=a.x,C[q+z+5]=a.y,C[q+z+6]=a.z,C[q+z+7]=0),x===!0&&(a.fromBufferAttribute(W,Y),C[q+z+8]=a.x,C[q+z+9]=a.y,C[q+z+10]=a.z,C[q+z+11]=W.itemSize===4?a.w:1)}}_={count:c,texture:U,size:new at(E,w)},i.set(o,_),o.addEventListener("dispose",v)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)h.getUniforms().setValue(e,"morphTexture",s.morphTexture,t);else{let g=0;for(let x=0;x<u.length;x++)g+=u[x];const T=o.morphTargetsRelative?1:1-g;h.getUniforms().setValue(e,"morphTargetBaseInfluence",T),h.getUniforms().setValue(e,"morphTargetInfluences",u)}h.getUniforms().setValue(e,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(e,"morphTargetsTextureSize",_.size)}return{update:r}}function Iu(e,n,t,i){let a=new WeakMap;function r(h){const u=i.render.frame,m=h.geometry,c=n.get(h,m);if(a.get(c)!==u&&(n.update(c),a.set(c,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",o)===!1&&h.addEventListener("dispose",o),a.get(h)!==u&&(t.update(h.instanceMatrix,e.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,e.ARRAY_BUFFER),a.set(h,u))),h.isSkinnedMesh){const _=h.skeleton;a.get(_)!==u&&(_.update(),a.set(_,u))}return c}function s(){a=new WeakMap}function o(h){const u=h.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:s}}const Vo=new vl,Fr=new To(1,1),zo=new Io,Wo=new _l,Xo=new gl,Br=[],Gr=[],Hr=new Float32Array(16),kr=new Float32Array(9),Vr=new Float32Array(4);function Dn(e,n,t){const i=e[0];if(i<=0||i>0)return e;const a=n*t;let r=Br[a];if(r===void 0&&(r=new Float32Array(a),Br[a]=r),n!==0){i.toArray(r,0);for(let s=1,o=0;s!==n;++s)o+=t,e[s].toArray(r,o)}return r}function dt(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function ut(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function bi(e,n){let t=Gr[n];t===void 0&&(t=new Int32Array(n),Gr[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function Nu(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function Ou(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(dt(t,n))return;e.uniform2fv(this.addr,n),ut(t,n)}}function Fu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(dt(t,n))return;e.uniform3fv(this.addr,n),ut(t,n)}}function Bu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(dt(t,n))return;e.uniform4fv(this.addr,n),ut(t,n)}}function Gu(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(dt(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),ut(t,n)}else{if(dt(t,i))return;Vr.set(i),e.uniformMatrix2fv(this.addr,!1,Vr),ut(t,i)}}function Hu(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(dt(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),ut(t,n)}else{if(dt(t,i))return;kr.set(i),e.uniformMatrix3fv(this.addr,!1,kr),ut(t,i)}}function ku(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(dt(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),ut(t,n)}else{if(dt(t,i))return;Hr.set(i),e.uniformMatrix4fv(this.addr,!1,Hr),ut(t,i)}}function Vu(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function zu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(dt(t,n))return;e.uniform2iv(this.addr,n),ut(t,n)}}function Wu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(dt(t,n))return;e.uniform3iv(this.addr,n),ut(t,n)}}function Xu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(dt(t,n))return;e.uniform4iv(this.addr,n),ut(t,n)}}function qu(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function Yu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(dt(t,n))return;e.uniform2uiv(this.addr,n),ut(t,n)}}function Ku(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(dt(t,n))return;e.uniform3uiv(this.addr,n),ut(t,n)}}function $u(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(dt(t,n))return;e.uniform4uiv(this.addr,n),ut(t,n)}}function Zu(e,n,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let r;this.type===e.SAMPLER_2D_SHADOW?(Fr.compareFunction=bo,r=Fr):r=Vo,t.setTexture2D(n||r,a)}function Qu(e,n,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(n||Wo,a)}function ju(e,n,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(n||Xo,a)}function Ju(e,n,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(n||zo,a)}function ef(e){switch(e){case 5126:return Nu;case 35664:return Ou;case 35665:return Fu;case 35666:return Bu;case 35674:return Gu;case 35675:return Hu;case 35676:return ku;case 5124:case 35670:return Vu;case 35667:case 35671:return zu;case 35668:case 35672:return Wu;case 35669:case 35673:return Xu;case 5125:return qu;case 36294:return Yu;case 36295:return Ku;case 36296:return $u;case 35678:case 36198:case 36298:case 36306:case 35682:return Zu;case 35679:case 36299:case 36307:return Qu;case 35680:case 36300:case 36308:case 36293:return ju;case 36289:case 36303:case 36311:case 36292:return Ju}}function tf(e,n){e.uniform1fv(this.addr,n)}function nf(e,n){const t=Dn(n,this.size,2);e.uniform2fv(this.addr,t)}function af(e,n){const t=Dn(n,this.size,3);e.uniform3fv(this.addr,t)}function rf(e,n){const t=Dn(n,this.size,4);e.uniform4fv(this.addr,t)}function of(e,n){const t=Dn(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function sf(e,n){const t=Dn(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function lf(e,n){const t=Dn(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function cf(e,n){e.uniform1iv(this.addr,n)}function df(e,n){e.uniform2iv(this.addr,n)}function uf(e,n){e.uniform3iv(this.addr,n)}function ff(e,n){e.uniform4iv(this.addr,n)}function hf(e,n){e.uniform1uiv(this.addr,n)}function pf(e,n){e.uniform2uiv(this.addr,n)}function mf(e,n){e.uniform3uiv(this.addr,n)}function gf(e,n){e.uniform4uiv(this.addr,n)}function _f(e,n,t){const i=this.cache,a=n.length,r=bi(t,a);dt(i,r)||(e.uniform1iv(this.addr,r),ut(i,r));for(let s=0;s!==a;++s)t.setTexture2D(n[s]||Vo,r[s])}function vf(e,n,t){const i=this.cache,a=n.length,r=bi(t,a);dt(i,r)||(e.uniform1iv(this.addr,r),ut(i,r));for(let s=0;s!==a;++s)t.setTexture3D(n[s]||Wo,r[s])}function Sf(e,n,t){const i=this.cache,a=n.length,r=bi(t,a);dt(i,r)||(e.uniform1iv(this.addr,r),ut(i,r));for(let s=0;s!==a;++s)t.setTextureCube(n[s]||Xo,r[s])}function Ef(e,n,t){const i=this.cache,a=n.length,r=bi(t,a);dt(i,r)||(e.uniform1iv(this.addr,r),ut(i,r));for(let s=0;s!==a;++s)t.setTexture2DArray(n[s]||zo,r[s])}function Mf(e){switch(e){case 5126:return tf;case 35664:return nf;case 35665:return af;case 35666:return rf;case 35674:return of;case 35675:return sf;case 35676:return lf;case 5124:case 35670:return cf;case 35667:case 35671:return df;case 35668:case 35672:return uf;case 35669:case 35673:return ff;case 5125:return hf;case 36294:return pf;case 36295:return mf;case 36296:return gf;case 35678:case 36198:case 36298:case 36306:case 35682:return _f;case 35679:case 36299:case 36307:return vf;case 35680:case 36300:case 36308:case 36293:return Sf;case 36289:case 36303:case 36311:case 36292:return Ef}}class xf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ef(t.type)}}class Tf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Mf(t.type)}}class bf{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(n,t[o.id],i)}}}const Vi=/(\w+)(\])?(\[|\.)?/g;function zr(e,n){e.seq.push(n),e.map[n.id]=n}function Af(e,n,t){const i=e.name,a=i.length;for(Vi.lastIndex=0;;){const r=Vi.exec(i),s=Vi.lastIndex;let o=r[1];const h=r[2]==="]",u=r[3];if(h&&(o=o|0),u===void 0||u==="["&&s+2===a){zr(t,u===void 0?new xf(o,e,n):new Tf(o,e,n));break}else{let c=t.map[o];c===void 0&&(c=new bf(o),zr(t,c)),t=c}}}class pi{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const r=n.getActiveUniform(t,a),s=n.getUniformLocation(t,r.name);Af(r,s,this)}}setValue(n,t,i,a){const r=this.map[t];r!==void 0&&r.setValue(n,i,a)}setOptional(n,t,i){const a=t[i];a!==void 0&&this.setValue(n,i,a)}static upload(n,t,i,a){for(let r=0,s=t.length;r!==s;++r){const o=t[r],h=i[o.id];h.needsUpdate!==!1&&o.setValue(n,h.value,a)}}static seqWithValue(n,t){const i=[];for(let a=0,r=n.length;a!==r;++a){const s=n[a];s.id in t&&i.push(s)}return i}}function Wr(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const Rf=37297;let wf=0;function Cf(e,n){const t=e.split(`
`),i=[],a=Math.max(n-6,0),r=Math.min(n+6,t.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===n?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const Xr=new ze;function yf(e){lt._getMatrix(Xr,lt.workingColorSpace,e);const n=`mat3( ${Xr.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(e)){case Oo:return[n,"LinearTransferOETF"];case Ze:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function qr(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),r=(e.getShaderInfoLog(n)||"").trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Cf(e.getShaderSource(n),o)}else return r}function Pf(e,n){const t=yf(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Lf(e,n){let t;switch(n){case ml:t="Linear";break;case pl:t="Reinhard";break;case hl:t="Cineon";break;case Fo:t="ACESFilmic";break;case fl:t="AgX";break;case ul:t="Neutral";break;case dl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),t="Linear"}return"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const li=new re;function Df(){lt.getLuminanceCoefficients(li);const e=li.x.toFixed(4),n=li.y.toFixed(4),t=li.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Uf(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hn).join(`
`)}function If(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function Nf(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=e.getActiveAttrib(n,a),s=r.name;let o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:e.getAttribLocation(n,s),locationSize:o}}return t}function Hn(e){return e!==""}function Yr(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function Kr(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const Of=/^[ \t]*#include +<([\w\d./]+)>/gm;function pa(e){return e.replace(Of,Bf)}const Ff=new Map;function Bf(e,n){let t=Ge[n];if(t===void 0){const i=Ff.get(n);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return pa(t)}const Gf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $r(e){return e.replace(Gf,Hf)}function Hf(e,n,t,i){let a="";for(let r=parseInt(n);r<parseInt(t);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Zr(e){let n=`precision ${e.precision} float;
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
#define LOW_PRECISION`),n}function kf(e){let n="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Ao?n="SHADOWMAP_TYPE_PCF":e.shadowMapType===cl?n="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===zt&&(n="SHADOWMAP_TYPE_VSM"),n}function Vf(e){let n="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Zn:case Ln:n="ENVMAP_TYPE_CUBE";break;case Ti:n="ENVMAP_TYPE_CUBE_UV";break}return n}function zf(e){let n="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Ln:n="ENVMAP_MODE_REFRACTION";break}return n}function Wf(e){let n="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case xl:n="ENVMAP_BLENDING_MULTIPLY";break;case Ml:n="ENVMAP_BLENDING_MIX";break;case El:n="ENVMAP_BLENDING_ADD";break}return n}function Xf(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function qf(e,n,t,i){const a=e.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const h=kf(t),u=Vf(t),m=zf(t),c=Wf(t),_=Xf(t),g=Uf(t),T=If(r),x=a.createProgram();let d,l,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Hn).join(`
`),d.length>0&&(d+=`
`),l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Hn).join(`
`),l.length>0&&(l+=`
`)):(d=[Zr(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hn).join(`
`),l=[Zr(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+m:"",t.envMap?"#define "+c:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jt?"#define TONE_MAPPING":"",t.toneMapping!==Jt?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Jt?Lf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Pf("linearToOutputTexel",t.outputColorSpace),Df(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hn).join(`
`)),s=pa(s),s=Yr(s,t),s=Kr(s,t),o=pa(o),o=Yr(o,t),o=Kr(o,t),s=$r(s),o=$r(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,d=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,l=["#define varying in",t.glslVersion===br?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===br?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const b=A+d+s,E=A+l+o,w=Wr(a,a.VERTEX_SHADER,b),C=Wr(a,a.FRAGMENT_SHADER,E);a.attachShader(x,w),a.attachShader(x,C),t.index0AttributeName!==void 0?a.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function U(P){if(e.debug.checkShaderErrors){const B=a.getProgramInfoLog(x)||"",W=a.getShaderInfoLog(w)||"",q=a.getShaderInfoLog(C)||"",Y=B.trim(),z=W.trim(),ne=q.trim();let H=!0,ue=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(H=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,x,w,C);else{const Se=qr(a,w,"vertex"),Re=qr(a,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+Y+`
`+Se+`
`+Re)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(z===""||ne==="")&&(ue=!1);ue&&(P.diagnostics={runnable:H,programLog:Y,vertexShader:{log:z,prefix:d},fragmentShader:{log:ne,prefix:l}})}a.deleteShader(w),a.deleteShader(C),N=new pi(a,x),v=Nf(a,x)}let N;this.getUniforms=function(){return N===void 0&&U(this),N};let v;this.getAttributes=function(){return v===void 0&&U(this),v};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=a.getProgramParameter(x,Rf)),S},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wf++,this.cacheKey=n,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=C,this}let Yf=0;class Kf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,a=this._getShaderStage(t),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(n);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new $f(n),t.set(n,i)),i}}class $f{constructor(n){this.id=Yf++,this.code=n,this.usedTimes=0}}function Zf(e,n,t,i,a,r,s){const o=new ll,h=new Kf,u=new Set,m=[],c=a.logarithmicDepthBuffer,_=a.vertexTextures;let g=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return u.add(v),v===0?"uv":`uv${v}`}function d(v,S,P,B,W){const q=B.fog,Y=W.geometry,z=v.isMeshStandardMaterial?B.environment:null,ne=(v.isMeshStandardMaterial?t:n).get(v.envMap||z),H=ne&&ne.mapping===Ti?ne.image.height:null,ue=T[v.type];v.precision!==null&&(g=a.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const Se=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Re=Se!==void 0?Se.length:0;let Ie=0;Y.morphAttributes.position!==void 0&&(Ie=1),Y.morphAttributes.normal!==void 0&&(Ie=2),Y.morphAttributes.color!==void 0&&(Ie=3);let Je,we,Fe,V;if(ue){const Xe=Ot[ue];Je=Xe.vertexShader,we=Xe.fragmentShader}else Je=v.vertexShader,we=v.fragmentShader,h.update(v),Fe=h.getVertexShaderID(v),V=h.getFragmentShaderID(v);const K=e.getRenderTarget(),he=e.state.buffers.depth.getReversed(),De=W.isInstancedMesh===!0,Te=W.isBatchedMesh===!0,ke=!!v.map,gt=!!v.matcap,R=!!ne,et=!!v.aoMap,Ne=!!v.lightMap,Pe=!!v.bumpMap,ge=!!v.normalMap,tt=!!v.displacementMap,_e=!!v.emissiveMap,Be=!!v.metalnessMap,ft=!!v.roughnessMap,st=v.anisotropy>0,M=v.clearcoat>0,f=v.dispersion>0,I=v.iridescence>0,k=v.sheen>0,$=v.transmission>0,G=st&&!!v.anisotropyMap,xe=M&&!!v.clearcoatMap,ie=M&&!!v.clearcoatNormalMap,ve=M&&!!v.clearcoatRoughnessMap,Ee=I&&!!v.iridescenceMap,ee=I&&!!v.iridescenceThicknessMap,ce=k&&!!v.sheenColorMap,ye=k&&!!v.sheenRoughnessMap,Me=!!v.specularMap,se=!!v.specularColorMap,Oe=!!v.specularIntensityMap,y=$&&!!v.transmissionMap,te=$&&!!v.thicknessMap,ae=!!v.gradientMap,fe=!!v.alphaMap,Z=v.alphaTest>0,X=!!v.alphaHash,me=!!v.extensions;let Ue=Jt;v.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ue=e.toneMapping);const Ke={shaderID:ue,shaderType:v.type,shaderName:v.name,vertexShader:Je,fragmentShader:we,defines:v.defines,customVertexShaderID:Fe,customFragmentShaderID:V,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Te,batchingColor:Te&&W._colorsTexture!==null,instancing:De,instancingColor:De&&W.instanceColor!==null,instancingMorph:De&&W.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:K===null?e.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:xi,alphaToCoverage:!!v.alphaToCoverage,map:ke,matcap:gt,envMap:R,envMapMode:R&&ne.mapping,envMapCubeUVHeight:H,aoMap:et,lightMap:Ne,bumpMap:Pe,normalMap:ge,displacementMap:_&&tt,emissiveMap:_e,normalMapObjectSpace:ge&&v.normalMapType===il,normalMapTangentSpace:ge&&v.normalMapType===nl,metalnessMap:Be,roughnessMap:ft,anisotropy:st,anisotropyMap:G,clearcoat:M,clearcoatMap:xe,clearcoatNormalMap:ie,clearcoatRoughnessMap:ve,dispersion:f,iridescence:I,iridescenceMap:Ee,iridescenceThicknessMap:ee,sheen:k,sheenColorMap:ce,sheenRoughnessMap:ye,specularMap:Me,specularColorMap:se,specularIntensityMap:Oe,transmission:$,transmissionMap:y,thicknessMap:te,gradientMap:ae,opaque:v.transparent===!1&&v.blending===hi&&v.alphaToCoverage===!1,alphaMap:fe,alphaTest:Z,alphaHash:X,combine:v.combine,mapUv:ke&&x(v.map.channel),aoMapUv:et&&x(v.aoMap.channel),lightMapUv:Ne&&x(v.lightMap.channel),bumpMapUv:Pe&&x(v.bumpMap.channel),normalMapUv:ge&&x(v.normalMap.channel),displacementMapUv:tt&&x(v.displacementMap.channel),emissiveMapUv:_e&&x(v.emissiveMap.channel),metalnessMapUv:Be&&x(v.metalnessMap.channel),roughnessMapUv:ft&&x(v.roughnessMap.channel),anisotropyMapUv:G&&x(v.anisotropyMap.channel),clearcoatMapUv:xe&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:ie&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:ye&&x(v.sheenRoughnessMap.channel),specularMapUv:Me&&x(v.specularMap.channel),specularColorMapUv:se&&x(v.specularColorMap.channel),specularIntensityMapUv:Oe&&x(v.specularIntensityMap.channel),transmissionMapUv:y&&x(v.transmissionMap.channel),thicknessMapUv:te&&x(v.thicknessMap.channel),alphaMapUv:fe&&x(v.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ge||st),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!Y.attributes.uv&&(ke||fe),fog:!!q,useFog:v.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:c,reversedDepthBuffer:he,skinning:W.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Ie,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:e.shadowMap.enabled&&P.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ue,decodeVideoTexture:ke&&v.map.isVideoTexture===!0&&lt.getTransfer(v.map.colorSpace)===Ze,decodeVideoTextureEmissive:_e&&v.emissiveMap.isVideoTexture===!0&&lt.getTransfer(v.emissiveMap.colorSpace)===Ze,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Lt,flipSided:v.side===Rt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:me&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&v.extensions.multiDraw===!0||Te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ke.vertexUv1s=u.has(1),Ke.vertexUv2s=u.has(2),Ke.vertexUv3s=u.has(3),u.clear(),Ke}function l(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)S.push(P),S.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(A(S,v),b(S,v),S.push(e.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function A(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function b(v,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),v.push(o.mask)}function E(v){const S=T[v.type];let P;if(S){const B=Ot[S];P=tl.clone(B.uniforms)}else P=v.uniforms;return P}function w(v,S){let P;for(let B=0,W=m.length;B<W;B++){const q=m[B];if(q.cacheKey===S){P=q,++P.usedTimes;break}}return P===void 0&&(P=new qf(e,S,v,r),m.push(P)),P}function C(v){if(--v.usedTimes===0){const S=m.indexOf(v);m[S]=m[m.length-1],m.pop(),v.destroy()}}function U(v){h.remove(v)}function N(){h.dispose()}return{getParameters:d,getProgramCacheKey:l,getUniforms:E,acquireProgram:w,releaseProgram:C,releaseShaderCache:U,programs:m,dispose:N}}function Qf(){let e=new WeakMap;function n(s){return e.has(s)}function t(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function i(s){e.delete(s)}function a(s,o,h){e.get(s)[o]=h}function r(){e=new WeakMap}return{has:n,get:t,remove:i,update:a,dispose:r}}function jf(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.z!==n.z?e.z-n.z:e.id-n.id}function Qr(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function jr(){const e=[];let n=0;const t=[],i=[],a=[];function r(){n=0,t.length=0,i.length=0,a.length=0}function s(c,_,g,T,x,d){let l=e[n];return l===void 0?(l={id:c.id,object:c,geometry:_,material:g,groupOrder:T,renderOrder:c.renderOrder,z:x,group:d},e[n]=l):(l.id=c.id,l.object=c,l.geometry=_,l.material=g,l.groupOrder=T,l.renderOrder=c.renderOrder,l.z=x,l.group=d),n++,l}function o(c,_,g,T,x,d){const l=s(c,_,g,T,x,d);g.transmission>0?i.push(l):g.transparent===!0?a.push(l):t.push(l)}function h(c,_,g,T,x,d){const l=s(c,_,g,T,x,d);g.transmission>0?i.unshift(l):g.transparent===!0?a.unshift(l):t.unshift(l)}function u(c,_){t.length>1&&t.sort(c||jf),i.length>1&&i.sort(_||Qr),a.length>1&&a.sort(_||Qr)}function m(){for(let c=n,_=e.length;c<_;c++){const g=e[c];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:a,init:r,push:o,unshift:h,finish:m,sort:u}}function Jf(){let e=new WeakMap;function n(i,a){const r=e.get(i);let s;return r===void 0?(s=new jr,e.set(i,[s])):a>=r.length?(s=new jr,r.push(s)):s=r[a],s}function t(){e=new WeakMap}return{get:n,dispose:t}}function eh(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new re,color:new We};break;case"SpotLight":t={position:new re,direction:new re,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new re,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new re,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new re,halfWidth:new re,halfHeight:new re};break}return e[n.id]=t,t}}}function th(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let nh=0;function ih(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function ah(e){const n=new eh,t=th(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new re);const a=new re,r=new Ht,s=new Ht;function o(u){let m=0,c=0,_=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let g=0,T=0,x=0,d=0,l=0,A=0,b=0,E=0,w=0,C=0,U=0;u.sort(ih);for(let v=0,S=u.length;v<S;v++){const P=u[v],B=P.color,W=P.intensity,q=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)m+=B.r*W,c+=B.g*W,_+=B.b*W;else if(P.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(P.sh.coefficients[z],W);U++}else if(P.isDirectionalLight){const z=n.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ne=P.shadow,H=t.get(P);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,i.directionalShadow[g]=H,i.directionalShadowMap[g]=Y,i.directionalShadowMatrix[g]=P.shadow.matrix,A++}i.directional[g]=z,g++}else if(P.isSpotLight){const z=n.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(B).multiplyScalar(W),z.distance=q,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,i.spot[x]=z;const ne=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,ne.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[x]=ne.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,i.spotShadow[x]=H,i.spotShadowMap[x]=Y,E++}x++}else if(P.isRectAreaLight){const z=n.get(P);z.color.copy(B).multiplyScalar(W),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),i.rectArea[d]=z,d++}else if(P.isPointLight){const z=n.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){const ne=P.shadow,H=t.get(P);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,H.shadowCameraNear=ne.camera.near,H.shadowCameraFar=ne.camera.far,i.pointShadow[T]=H,i.pointShadowMap[T]=Y,i.pointShadowMatrix[T]=P.shadow.matrix,b++}i.point[T]=z,T++}else if(P.isHemisphereLight){const z=n.get(P);z.skyColor.copy(P.color).multiplyScalar(W),z.groundColor.copy(P.groundColor).multiplyScalar(W),i.hemi[l]=z,l++}}d>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=c,i.ambient[2]=_;const N=i.hash;(N.directionalLength!==g||N.pointLength!==T||N.spotLength!==x||N.rectAreaLength!==d||N.hemiLength!==l||N.numDirectionalShadows!==A||N.numPointShadows!==b||N.numSpotShadows!==E||N.numSpotMaps!==w||N.numLightProbes!==U)&&(i.directional.length=g,i.spot.length=x,i.rectArea.length=d,i.point.length=T,i.hemi.length=l,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+w-C,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=U,N.directionalLength=g,N.pointLength=T,N.spotLength=x,N.rectAreaLength=d,N.hemiLength=l,N.numDirectionalShadows=A,N.numPointShadows=b,N.numSpotShadows=E,N.numSpotMaps=w,N.numLightProbes=U,i.version=nh++)}function h(u,m){let c=0,_=0,g=0,T=0,x=0;const d=m.matrixWorldInverse;for(let l=0,A=u.length;l<A;l++){const b=u[l];if(b.isDirectionalLight){const E=i.directional[c];E.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(d),c++}else if(b.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(d),g++}else if(b.isRectAreaLight){const E=i.rectArea[T];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(d),s.identity(),r.copy(b.matrixWorld),r.premultiply(d),s.extractRotation(r),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),T++}else if(b.isPointLight){const E=i.point[_];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(d),_++}else if(b.isHemisphereLight){const E=i.hemi[x];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(d),x++}}}return{setup:o,setupView:h,state:i}}function Jr(e){const n=new ah(e),t=[],i=[];function a(m){u.camera=m,t.length=0,i.length=0}function r(m){t.push(m)}function s(m){i.push(m)}function o(){n.setup(t)}function h(m){n.setupView(t,m)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:a,state:u,setupLights:o,setupLightsView:h,pushLight:r,pushShadow:s}}function rh(e){let n=new WeakMap;function t(a,r=0){const s=n.get(a);let o;return s===void 0?(o=new Jr(e),n.set(a,[o])):r>=s.length?(o=new Jr(e),s.push(o)):o=s[r],o}function i(){n=new WeakMap}return{get:t,dispose:i}}const oh=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sh=`uniform sampler2D shadow_pass;
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
}`;function lh(e,n,t){let i=new xo;const a=new at,r=new at,s=new xt,o=new Hs({depthPacking:ks}),h=new Vs,u={},m=t.maxTextureSize,c={[Yn]:Rt,[Rt]:Yn,[Lt]:Lt},_=new Kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:oh,fragmentShader:sh}),g=_.clone();g.defines.HORIZONTAL_PASS=1;const T=new tn;T.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ot(T,_),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ao;let l=this.type;this.render=function(C,U,N){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||C.length===0)return;const v=e.getRenderTarget(),S=e.getActiveCubeFace(),P=e.getActiveMipmapLevel(),B=e.state;B.setBlending(mn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const W=l!==zt&&this.type===zt,q=l===zt&&this.type!==zt;for(let Y=0,z=C.length;Y<z;Y++){const ne=C[Y],H=ne.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);const ue=H.getFrameExtents();if(a.multiply(ue),r.copy(H.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(r.x=Math.floor(m/ue.x),a.x=r.x*ue.x,H.mapSize.x=r.x),a.y>m&&(r.y=Math.floor(m/ue.y),a.y=r.y*ue.y,H.mapSize.y=r.y)),H.map===null||W===!0||q===!0){const Re=this.type!==zt?{minFilter:Vn,magFilter:Vn}:{};H.map!==null&&H.map.dispose(),H.map=new Pn(a.x,a.y,Re),H.map.texture.name=ne.name+".shadowMap",H.camera.updateProjectionMatrix()}e.setRenderTarget(H.map),e.clear();const Se=H.getViewportCount();for(let Re=0;Re<Se;Re++){const Ie=H.getViewport(Re);s.set(r.x*Ie.x,r.y*Ie.y,r.x*Ie.z,r.y*Ie.w),B.viewport(s),H.updateMatrices(ne,Re),i=H.getFrustum(),E(U,N,H.camera,ne,this.type)}H.isPointLightShadow!==!0&&this.type===zt&&A(H,N),H.needsUpdate=!1}l=this.type,d.needsUpdate=!1,e.setRenderTarget(v,S,P)};function A(C,U){const N=n.update(x);_.defines.VSM_SAMPLES!==C.blurSamples&&(_.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,_.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Pn(a.x,a.y)),_.uniforms.shadow_pass.value=C.map.texture,_.uniforms.resolution.value=C.mapSize,_.uniforms.radius.value=C.radius,e.setRenderTarget(C.mapPass),e.clear(),e.renderBufferDirect(U,null,N,_,x,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,e.setRenderTarget(C.map),e.clear(),e.renderBufferDirect(U,null,N,g,x,null)}function b(C,U,N,v){let S=null;const P=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)S=P;else if(S=N.isPointLight===!0?h:o,e.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const B=S.uuid,W=U.uuid;let q=u[B];q===void 0&&(q={},u[B]=q);let Y=q[W];Y===void 0&&(Y=S.clone(),q[W]=Y,U.addEventListener("dispose",w)),S=Y}if(S.visible=U.visible,S.wireframe=U.wireframe,v===zt?S.side=U.shadowSide!==null?U.shadowSide:U.side:S.side=U.shadowSide!==null?U.shadowSide:c[U.side],S.alphaMap=U.alphaMap,S.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,S.map=U.map,S.clipShadows=U.clipShadows,S.clippingPlanes=U.clippingPlanes,S.clipIntersection=U.clipIntersection,S.displacementMap=U.displacementMap,S.displacementScale=U.displacementScale,S.displacementBias=U.displacementBias,S.wireframeLinewidth=U.wireframeLinewidth,S.linewidth=U.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=e.properties.get(S);B.light=N}return S}function E(C,U,N,v,S){if(C.visible===!1)return;if(C.layers.test(U.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===zt)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);const W=n.update(C),q=C.material;if(Array.isArray(q)){const Y=W.groups;for(let z=0,ne=Y.length;z<ne;z++){const H=Y[z],ue=q[H.materialIndex];if(ue&&ue.visible){const Se=b(C,ue,v,S);C.onBeforeShadow(e,C,U,N,W,Se,H),e.renderBufferDirect(N,null,W,Se,C,H),C.onAfterShadow(e,C,U,N,W,Se,H)}}}else if(q.visible){const Y=b(C,q,v,S);C.onBeforeShadow(e,C,U,N,W,Y,null),e.renderBufferDirect(N,null,W,Y,C,null),C.onAfterShadow(e,C,U,N,W,Y,null)}}const B=C.children;for(let W=0,q=B.length;W<q;W++)E(B[W],U,N,v,S)}function w(C){C.target.removeEventListener("dispose",w);for(const N in u){const v=u[N],S=C.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}const ch={[ca]:la,[sa]:aa,[oa]:ia,[vi]:ra,[la]:ca,[aa]:sa,[ia]:oa,[ra]:vi};function dh(e,n){function t(){let y=!1;const te=new xt;let ae=null;const fe=new xt(0,0,0,0);return{setMask:function(Z){ae!==Z&&!y&&(e.colorMask(Z,Z,Z,Z),ae=Z)},setLocked:function(Z){y=Z},setClear:function(Z,X,me,Ue,Ke){Ke===!0&&(Z*=Ue,X*=Ue,me*=Ue),te.set(Z,X,me,Ue),fe.equals(te)===!1&&(e.clearColor(Z,X,me,Ue),fe.copy(te))},reset:function(){y=!1,ae=null,fe.set(-1,0,0,0)}}}function i(){let y=!1,te=!1,ae=null,fe=null,Z=null;return{setReversed:function(X){if(te!==X){const me=n.get("EXT_clip_control");X?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),te=X;const Ue=Z;Z=null,this.setClear(Ue)}},getReversed:function(){return te},setTest:function(X){X?K(e.DEPTH_TEST):he(e.DEPTH_TEST)},setMask:function(X){ae!==X&&!y&&(e.depthMask(X),ae=X)},setFunc:function(X){if(te&&(X=ch[X]),fe!==X){switch(X){case ca:e.depthFunc(e.NEVER);break;case la:e.depthFunc(e.ALWAYS);break;case sa:e.depthFunc(e.LESS);break;case vi:e.depthFunc(e.LEQUAL);break;case oa:e.depthFunc(e.EQUAL);break;case ra:e.depthFunc(e.GEQUAL);break;case aa:e.depthFunc(e.GREATER);break;case ia:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}fe=X}},setLocked:function(X){y=X},setClear:function(X){Z!==X&&(te&&(X=1-X),e.clearDepth(X),Z=X)},reset:function(){y=!1,ae=null,fe=null,Z=null,te=!1}}}function a(){let y=!1,te=null,ae=null,fe=null,Z=null,X=null,me=null,Ue=null,Ke=null;return{setTest:function(Xe){y||(Xe?K(e.STENCIL_TEST):he(e.STENCIL_TEST))},setMask:function(Xe){te!==Xe&&!y&&(e.stencilMask(Xe),te=Xe)},setFunc:function(Xe,Vt,Nt){(ae!==Xe||fe!==Vt||Z!==Nt)&&(e.stencilFunc(Xe,Vt,Nt),ae=Xe,fe=Vt,Z=Nt)},setOp:function(Xe,Vt,Nt){(X!==Xe||me!==Vt||Ue!==Nt)&&(e.stencilOp(Xe,Vt,Nt),X=Xe,me=Vt,Ue=Nt)},setLocked:function(Xe){y=Xe},setClear:function(Xe){Ke!==Xe&&(e.clearStencil(Xe),Ke=Xe)},reset:function(){y=!1,te=null,ae=null,fe=null,Z=null,X=null,me=null,Ue=null,Ke=null}}}const r=new t,s=new i,o=new a,h=new WeakMap,u=new WeakMap;let m={},c={},_=new WeakMap,g=[],T=null,x=!1,d=null,l=null,A=null,b=null,E=null,w=null,C=null,U=new We(0,0,0),N=0,v=!1,S=null,P=null,B=null,W=null,q=null;const Y=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,ne=0;const H=e.getParameter(e.VERSION);H.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(H)[1]),z=ne>=1):H.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),z=ne>=2);let ue=null,Se={};const Re=e.getParameter(e.SCISSOR_BOX),Ie=e.getParameter(e.VIEWPORT),Je=new xt().fromArray(Re),we=new xt().fromArray(Ie);function Fe(y,te,ae,fe){const Z=new Uint8Array(4),X=e.createTexture();e.bindTexture(y,X),e.texParameteri(y,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(y,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let me=0;me<ae;me++)y===e.TEXTURE_3D||y===e.TEXTURE_2D_ARRAY?e.texImage3D(te,0,e.RGBA,1,1,fe,0,e.RGBA,e.UNSIGNED_BYTE,Z):e.texImage2D(te+me,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Z);return X}const V={};V[e.TEXTURE_2D]=Fe(e.TEXTURE_2D,e.TEXTURE_2D,1),V[e.TEXTURE_CUBE_MAP]=Fe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[e.TEXTURE_2D_ARRAY]=Fe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),V[e.TEXTURE_3D]=Fe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),K(e.DEPTH_TEST),s.setFunc(vi),Pe(!1),ge(vr),K(e.CULL_FACE),et(mn);function K(y){m[y]!==!0&&(e.enable(y),m[y]=!0)}function he(y){m[y]!==!1&&(e.disable(y),m[y]=!1)}function De(y,te){return c[y]!==te?(e.bindFramebuffer(y,te),c[y]=te,y===e.DRAW_FRAMEBUFFER&&(c[e.FRAMEBUFFER]=te),y===e.FRAMEBUFFER&&(c[e.DRAW_FRAMEBUFFER]=te),!0):!1}function Te(y,te){let ae=g,fe=!1;if(y){ae=_.get(te),ae===void 0&&(ae=[],_.set(te,ae));const Z=y.textures;if(ae.length!==Z.length||ae[0]!==e.COLOR_ATTACHMENT0){for(let X=0,me=Z.length;X<me;X++)ae[X]=e.COLOR_ATTACHMENT0+X;ae.length=Z.length,fe=!0}}else ae[0]!==e.BACK&&(ae[0]=e.BACK,fe=!0);fe&&e.drawBuffers(ae)}function ke(y){return T!==y?(e.useProgram(y),T=y,!0):!1}const gt={[Nn]:e.FUNC_ADD,[fs]:e.FUNC_SUBTRACT,[us]:e.FUNC_REVERSE_SUBTRACT};gt[Tl]=e.MIN,gt[bl]=e.MAX;const R={[ws]:e.ZERO,[Rs]:e.ONE,[As]:e.SRC_COLOR,[bs]:e.SRC_ALPHA,[Ts]:e.SRC_ALPHA_SATURATE,[xs]:e.DST_COLOR,[Ms]:e.DST_ALPHA,[Es]:e.ONE_MINUS_SRC_COLOR,[Ss]:e.ONE_MINUS_SRC_ALPHA,[vs]:e.ONE_MINUS_DST_COLOR,[_s]:e.ONE_MINUS_DST_ALPHA,[gs]:e.CONSTANT_COLOR,[ms]:e.ONE_MINUS_CONSTANT_COLOR,[ps]:e.CONSTANT_ALPHA,[hs]:e.ONE_MINUS_CONSTANT_ALPHA};function et(y,te,ae,fe,Z,X,me,Ue,Ke,Xe){if(y===mn){x===!0&&(he(e.BLEND),x=!1);return}if(x===!1&&(K(e.BLEND),x=!0),y!==Js){if(y!==d||Xe!==v){if((l!==Nn||E!==Nn)&&(e.blendEquation(e.FUNC_ADD),l=Nn,E=Nn),Xe)switch(y){case hi:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Mr:e.blendFunc(e.ONE,e.ONE);break;case Er:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Sr:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}else switch(y){case hi:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Mr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Er:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sr:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}A=null,b=null,w=null,C=null,U.set(0,0,0),N=0,d=y,v=Xe}return}Z=Z||te,X=X||ae,me=me||fe,(te!==l||Z!==E)&&(e.blendEquationSeparate(gt[te],gt[Z]),l=te,E=Z),(ae!==A||fe!==b||X!==w||me!==C)&&(e.blendFuncSeparate(R[ae],R[fe],R[X],R[me]),A=ae,b=fe,w=X,C=me),(Ue.equals(U)===!1||Ke!==N)&&(e.blendColor(Ue.r,Ue.g,Ue.b,Ke),U.copy(Ue),N=Ke),d=y,v=!1}function Ne(y,te){y.side===Lt?he(e.CULL_FACE):K(e.CULL_FACE);let ae=y.side===Rt;te&&(ae=!ae),Pe(ae),y.blending===hi&&y.transparent===!1?et(mn):et(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),s.setFunc(y.depthFunc),s.setTest(y.depthTest),s.setMask(y.depthWrite),r.setMask(y.colorWrite);const fe=y.stencilWrite;o.setTest(fe),fe&&(o.setMask(y.stencilWriteMask),o.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),o.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),_e(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?K(e.SAMPLE_ALPHA_TO_COVERAGE):he(e.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(y){S!==y&&(y?e.frontFace(e.CW):e.frontFace(e.CCW),S=y)}function ge(y){y!==Qs?(K(e.CULL_FACE),y!==P&&(y===vr?e.cullFace(e.BACK):y===js?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):he(e.CULL_FACE),P=y}function tt(y){y!==B&&(z&&e.lineWidth(y),B=y)}function _e(y,te,ae){y?(K(e.POLYGON_OFFSET_FILL),(W!==te||q!==ae)&&(e.polygonOffset(te,ae),W=te,q=ae)):he(e.POLYGON_OFFSET_FILL)}function Be(y){y?K(e.SCISSOR_TEST):he(e.SCISSOR_TEST)}function ft(y){y===void 0&&(y=e.TEXTURE0+Y-1),ue!==y&&(e.activeTexture(y),ue=y)}function st(y,te,ae){ae===void 0&&(ue===null?ae=e.TEXTURE0+Y-1:ae=ue);let fe=Se[ae];fe===void 0&&(fe={type:void 0,texture:void 0},Se[ae]=fe),(fe.type!==y||fe.texture!==te)&&(ue!==ae&&(e.activeTexture(ae),ue=ae),e.bindTexture(y,te||V[y]),fe.type=y,fe.texture=te)}function M(){const y=Se[ue];y!==void 0&&y.type!==void 0&&(e.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)}function f(){try{e.compressedTexImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function I(){try{e.compressedTexImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function k(){try{e.texSubImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function $(){try{e.texSubImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function G(){try{e.compressedTexSubImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function xe(){try{e.compressedTexSubImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ie(){try{e.texStorage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ve(){try{e.texStorage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Ee(){try{e.texImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ee(){try{e.texImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ce(y){Je.equals(y)===!1&&(e.scissor(y.x,y.y,y.z,y.w),Je.copy(y))}function ye(y){we.equals(y)===!1&&(e.viewport(y.x,y.y,y.z,y.w),we.copy(y))}function Me(y,te){let ae=u.get(te);ae===void 0&&(ae=new WeakMap,u.set(te,ae));let fe=ae.get(y);fe===void 0&&(fe=e.getUniformBlockIndex(te,y.name),ae.set(y,fe))}function se(y,te){const fe=u.get(te).get(y);h.get(te)!==fe&&(e.uniformBlockBinding(te,fe,y.__bindingPointIndex),h.set(te,fe))}function Oe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),m={},ue=null,Se={},c={},_=new WeakMap,g=[],T=null,x=!1,d=null,l=null,A=null,b=null,E=null,w=null,C=null,U=new We(0,0,0),N=0,v=!1,S=null,P=null,B=null,W=null,q=null,Je.set(0,0,e.canvas.width,e.canvas.height),we.set(0,0,e.canvas.width,e.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:K,disable:he,bindFramebuffer:De,drawBuffers:Te,useProgram:ke,setBlending:et,setMaterial:Ne,setFlipSided:Pe,setCullFace:ge,setLineWidth:tt,setPolygonOffset:_e,setScissorTest:Be,activeTexture:ft,bindTexture:st,unbindTexture:M,compressedTexImage2D:f,compressedTexImage3D:I,texImage2D:Ee,texImage3D:ee,updateUBOMapping:Me,uniformBlockBinding:se,texStorage2D:ie,texStorage3D:ve,texSubImage2D:k,texSubImage3D:$,compressedTexSubImage2D:G,compressedTexSubImage3D:xe,scissor:ce,viewport:ye,reset:Oe}}function uh(e,n,t,i,a,r,s){const o=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new at,m=new WeakMap;let c;const _=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(M,f){return g?new OffscreenCanvas(M,f):Sl("canvas")}function x(M,f,I){let k=1;const $=st(M);if(($.width>I||$.height>I)&&(k=I/Math.max($.width,$.height)),k<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const G=Math.floor(k*$.width),xe=Math.floor(k*$.height);c===void 0&&(c=T(G,xe));const ie=f?T(G,xe):c;return ie.width=G,ie.height=xe,ie.getContext("2d").drawImage(M,0,0,G,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+G+"x"+xe+")."),ie}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),M;return M}function d(M){return M.generateMipmaps}function l(M){e.generateMipmap(M)}function A(M){return M.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?e.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(M,f,I,k,$=!1){if(M!==null){if(e[M]!==void 0)return e[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let G=f;if(f===e.RED&&(I===e.FLOAT&&(G=e.R32F),I===e.HALF_FLOAT&&(G=e.R16F),I===e.UNSIGNED_BYTE&&(G=e.R8)),f===e.RED_INTEGER&&(I===e.UNSIGNED_BYTE&&(G=e.R8UI),I===e.UNSIGNED_SHORT&&(G=e.R16UI),I===e.UNSIGNED_INT&&(G=e.R32UI),I===e.BYTE&&(G=e.R8I),I===e.SHORT&&(G=e.R16I),I===e.INT&&(G=e.R32I)),f===e.RG&&(I===e.FLOAT&&(G=e.RG32F),I===e.HALF_FLOAT&&(G=e.RG16F),I===e.UNSIGNED_BYTE&&(G=e.RG8)),f===e.RG_INTEGER&&(I===e.UNSIGNED_BYTE&&(G=e.RG8UI),I===e.UNSIGNED_SHORT&&(G=e.RG16UI),I===e.UNSIGNED_INT&&(G=e.RG32UI),I===e.BYTE&&(G=e.RG8I),I===e.SHORT&&(G=e.RG16I),I===e.INT&&(G=e.RG32I)),f===e.RGB_INTEGER&&(I===e.UNSIGNED_BYTE&&(G=e.RGB8UI),I===e.UNSIGNED_SHORT&&(G=e.RGB16UI),I===e.UNSIGNED_INT&&(G=e.RGB32UI),I===e.BYTE&&(G=e.RGB8I),I===e.SHORT&&(G=e.RGB16I),I===e.INT&&(G=e.RGB32I)),f===e.RGBA_INTEGER&&(I===e.UNSIGNED_BYTE&&(G=e.RGBA8UI),I===e.UNSIGNED_SHORT&&(G=e.RGBA16UI),I===e.UNSIGNED_INT&&(G=e.RGBA32UI),I===e.BYTE&&(G=e.RGBA8I),I===e.SHORT&&(G=e.RGBA16I),I===e.INT&&(G=e.RGBA32I)),f===e.RGB&&(I===e.UNSIGNED_INT_5_9_9_9_REV&&(G=e.RGB9_E5),I===e.UNSIGNED_INT_10F_11F_11F_REV&&(G=e.R11F_G11F_B10F)),f===e.RGBA){const xe=$?Oo:lt.getTransfer(k);I===e.FLOAT&&(G=e.RGBA32F),I===e.HALF_FLOAT&&(G=e.RGBA16F),I===e.UNSIGNED_BYTE&&(G=xe===Ze?e.SRGB8_ALPHA8:e.RGBA8),I===e.UNSIGNED_SHORT_4_4_4_4&&(G=e.RGBA4),I===e.UNSIGNED_SHORT_5_5_5_1&&(G=e.RGB5_A1)}return(G===e.R16F||G===e.R32F||G===e.RG16F||G===e.RG32F||G===e.RGBA16F||G===e.RGBA32F)&&n.get("EXT_color_buffer_float"),G}function E(M,f){let I;return M?f===null||f===$n||f===Kn?I=e.DEPTH24_STENCIL8:f===fn?I=e.DEPTH32F_STENCIL8:f===Si&&(I=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):f===null||f===$n||f===Kn?I=e.DEPTH_COMPONENT24:f===fn?I=e.DEPTH_COMPONENT32F:f===Si&&(I=e.DEPTH_COMPONENT16),I}function w(M,f){return d(M)===!0||M.isFramebufferTexture&&M.minFilter!==Vn&&M.minFilter!==An?Math.log2(Math.max(f.width,f.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?f.mipmaps.length:1}function C(M){const f=M.target;f.removeEventListener("dispose",C),N(f),f.isVideoTexture&&m.delete(f)}function U(M){const f=M.target;f.removeEventListener("dispose",U),S(f)}function N(M){const f=i.get(M);if(f.__webglInit===void 0)return;const I=M.source,k=_.get(I);if(k){const $=k[f.__cacheKey];$.usedTimes--,$.usedTimes===0&&v(M),Object.keys(k).length===0&&_.delete(I)}i.remove(M)}function v(M){const f=i.get(M);e.deleteTexture(f.__webglTexture);const I=M.source,k=_.get(I);delete k[f.__cacheKey],s.memory.textures--}function S(M){const f=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(f.__webglFramebuffer[k]))for(let $=0;$<f.__webglFramebuffer[k].length;$++)e.deleteFramebuffer(f.__webglFramebuffer[k][$]);else e.deleteFramebuffer(f.__webglFramebuffer[k]);f.__webglDepthbuffer&&e.deleteRenderbuffer(f.__webglDepthbuffer[k])}else{if(Array.isArray(f.__webglFramebuffer))for(let k=0;k<f.__webglFramebuffer.length;k++)e.deleteFramebuffer(f.__webglFramebuffer[k]);else e.deleteFramebuffer(f.__webglFramebuffer);if(f.__webglDepthbuffer&&e.deleteRenderbuffer(f.__webglDepthbuffer),f.__webglMultisampledFramebuffer&&e.deleteFramebuffer(f.__webglMultisampledFramebuffer),f.__webglColorRenderbuffer)for(let k=0;k<f.__webglColorRenderbuffer.length;k++)f.__webglColorRenderbuffer[k]&&e.deleteRenderbuffer(f.__webglColorRenderbuffer[k]);f.__webglDepthRenderbuffer&&e.deleteRenderbuffer(f.__webglDepthRenderbuffer)}const I=M.textures;for(let k=0,$=I.length;k<$;k++){const G=i.get(I[k]);G.__webglTexture&&(e.deleteTexture(G.__webglTexture),s.memory.textures--),i.remove(I[k])}i.remove(M)}let P=0;function B(){P=0}function W(){const M=P;return M>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+a.maxTextures),P+=1,M}function q(M){const f=[];return f.push(M.wrapS),f.push(M.wrapT),f.push(M.wrapR||0),f.push(M.magFilter),f.push(M.minFilter),f.push(M.anisotropy),f.push(M.internalFormat),f.push(M.format),f.push(M.type),f.push(M.generateMipmaps),f.push(M.premultiplyAlpha),f.push(M.flipY),f.push(M.unpackAlignment),f.push(M.colorSpace),f.join()}function Y(M,f){const I=i.get(M);if(M.isVideoTexture&&Be(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&I.__version!==M.version){const k=M.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(I,M,f);return}}else M.isExternalTexture&&(I.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,I.__webglTexture,e.TEXTURE0+f)}function z(M,f){const I=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&I.__version!==M.version){V(I,M,f);return}t.bindTexture(e.TEXTURE_2D_ARRAY,I.__webglTexture,e.TEXTURE0+f)}function ne(M,f){const I=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&I.__version!==M.version){V(I,M,f);return}t.bindTexture(e.TEXTURE_3D,I.__webglTexture,e.TEXTURE0+f)}function H(M,f){const I=i.get(M);if(M.version>0&&I.__version!==M.version){K(I,M,f);return}t.bindTexture(e.TEXTURE_CUBE_MAP,I.__webglTexture,e.TEXTURE0+f)}const ue={[Ps]:e.REPEAT,[ys]:e.CLAMP_TO_EDGE,[Cs]:e.MIRRORED_REPEAT},Se={[Vn]:e.NEAREST,[Ls]:e.NEAREST_MIPMAP_NEAREST,[ri]:e.NEAREST_MIPMAP_LINEAR,[An]:e.LINEAR,[Li]:e.LINEAR_MIPMAP_NEAREST,[bn]:e.LINEAR_MIPMAP_LINEAR},Re={[Bs]:e.NEVER,[Fs]:e.ALWAYS,[Os]:e.LESS,[bo]:e.LEQUAL,[Ns]:e.EQUAL,[Is]:e.GEQUAL,[Us]:e.GREATER,[Ds]:e.NOTEQUAL};function Ie(M,f){if(f.type===fn&&n.has("OES_texture_float_linear")===!1&&(f.magFilter===An||f.magFilter===Li||f.magFilter===ri||f.magFilter===bn||f.minFilter===An||f.minFilter===Li||f.minFilter===ri||f.minFilter===bn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(M,e.TEXTURE_WRAP_S,ue[f.wrapS]),e.texParameteri(M,e.TEXTURE_WRAP_T,ue[f.wrapT]),(M===e.TEXTURE_3D||M===e.TEXTURE_2D_ARRAY)&&e.texParameteri(M,e.TEXTURE_WRAP_R,ue[f.wrapR]),e.texParameteri(M,e.TEXTURE_MAG_FILTER,Se[f.magFilter]),e.texParameteri(M,e.TEXTURE_MIN_FILTER,Se[f.minFilter]),f.compareFunction&&(e.texParameteri(M,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(M,e.TEXTURE_COMPARE_FUNC,Re[f.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(f.magFilter===Vn||f.minFilter!==ri&&f.minFilter!==bn||f.type===fn&&n.has("OES_texture_float_linear")===!1)return;if(f.anisotropy>1||i.get(f).__currentAnisotropy){const I=n.get("EXT_texture_filter_anisotropic");e.texParameterf(M,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(f.anisotropy,a.getMaxAnisotropy())),i.get(f).__currentAnisotropy=f.anisotropy}}}function Je(M,f){let I=!1;M.__webglInit===void 0&&(M.__webglInit=!0,f.addEventListener("dispose",C));const k=f.source;let $=_.get(k);$===void 0&&($={},_.set(k,$));const G=q(f);if(G!==M.__cacheKey){$[G]===void 0&&($[G]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,I=!0),$[G].usedTimes++;const xe=$[M.__cacheKey];xe!==void 0&&($[M.__cacheKey].usedTimes--,xe.usedTimes===0&&v(f)),M.__cacheKey=G,M.__webglTexture=$[G].texture}return I}function we(M,f,I){return Math.floor(Math.floor(M/I)/f)}function Fe(M,f,I,k){const G=M.updateRanges;if(G.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,f.width,f.height,I,k,f.data);else{G.sort((ee,ce)=>ee.start-ce.start);let xe=0;for(let ee=1;ee<G.length;ee++){const ce=G[xe],ye=G[ee],Me=ce.start+ce.count,se=we(ye.start,f.width,4),Oe=we(ce.start,f.width,4);ye.start<=Me+1&&se===Oe&&we(ye.start+ye.count-1,f.width,4)===se?ce.count=Math.max(ce.count,ye.start+ye.count-ce.start):(++xe,G[xe]=ye)}G.length=xe+1;const ie=e.getParameter(e.UNPACK_ROW_LENGTH),ve=e.getParameter(e.UNPACK_SKIP_PIXELS),Ee=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,f.width);for(let ee=0,ce=G.length;ee<ce;ee++){const ye=G[ee],Me=Math.floor(ye.start/4),se=Math.ceil(ye.count/4),Oe=Me%f.width,y=Math.floor(Me/f.width),te=se,ae=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Oe),e.pixelStorei(e.UNPACK_SKIP_ROWS,y),t.texSubImage2D(e.TEXTURE_2D,0,Oe,y,te,ae,I,k,f.data)}M.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ie),e.pixelStorei(e.UNPACK_SKIP_PIXELS,ve),e.pixelStorei(e.UNPACK_SKIP_ROWS,Ee)}}function V(M,f,I){let k=e.TEXTURE_2D;(f.isDataArrayTexture||f.isCompressedArrayTexture)&&(k=e.TEXTURE_2D_ARRAY),f.isData3DTexture&&(k=e.TEXTURE_3D);const $=Je(M,f),G=f.source;t.bindTexture(k,M.__webglTexture,e.TEXTURE0+I);const xe=i.get(G);if(G.version!==xe.__version||$===!0){t.activeTexture(e.TEXTURE0+I);const ie=lt.getPrimaries(lt.workingColorSpace),ve=f.colorSpace===xn?null:lt.getPrimaries(f.colorSpace),Ee=f.colorSpace===xn||ie===ve?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,f.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,f.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let ee=x(f.image,!1,a.maxTextureSize);ee=ft(f,ee);const ce=r.convert(f.format,f.colorSpace),ye=r.convert(f.type);let Me=b(f.internalFormat,ce,ye,f.colorSpace,f.isVideoTexture);Ie(k,f);let se;const Oe=f.mipmaps,y=f.isVideoTexture!==!0,te=xe.__version===void 0||$===!0,ae=G.dataReady,fe=w(f,ee);if(f.isDepthTexture)Me=E(f.format===_i,f.type),te&&(y?t.texStorage2D(e.TEXTURE_2D,1,Me,ee.width,ee.height):t.texImage2D(e.TEXTURE_2D,0,Me,ee.width,ee.height,0,ce,ye,null));else if(f.isDataTexture)if(Oe.length>0){y&&te&&t.texStorage2D(e.TEXTURE_2D,fe,Me,Oe[0].width,Oe[0].height);for(let Z=0,X=Oe.length;Z<X;Z++)se=Oe[Z],y?ae&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,se.width,se.height,ce,ye,se.data):t.texImage2D(e.TEXTURE_2D,Z,Me,se.width,se.height,0,ce,ye,se.data);f.generateMipmaps=!1}else y?(te&&t.texStorage2D(e.TEXTURE_2D,fe,Me,ee.width,ee.height),ae&&Fe(f,ee,ce,ye)):t.texImage2D(e.TEXTURE_2D,0,Me,ee.width,ee.height,0,ce,ye,ee.data);else if(f.isCompressedTexture)if(f.isCompressedArrayTexture){y&&te&&t.texStorage3D(e.TEXTURE_2D_ARRAY,fe,Me,Oe[0].width,Oe[0].height,ee.depth);for(let Z=0,X=Oe.length;Z<X;Z++)if(se=Oe[Z],f.format!==Xt)if(ce!==null)if(y){if(ae)if(f.layerUpdates.size>0){const me=Tr(se.width,se.height,f.format,f.type);for(const Ue of f.layerUpdates){const Ke=se.data.subarray(Ue*me/se.data.BYTES_PER_ELEMENT,(Ue+1)*me/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,Ue,se.width,se.height,1,ce,Ke)}f.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,se.width,se.height,ee.depth,ce,se.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Z,Me,se.width,se.height,ee.depth,0,se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else y?ae&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,se.width,se.height,ee.depth,ce,ye,se.data):t.texImage3D(e.TEXTURE_2D_ARRAY,Z,Me,se.width,se.height,ee.depth,0,ce,ye,se.data)}else{y&&te&&t.texStorage2D(e.TEXTURE_2D,fe,Me,Oe[0].width,Oe[0].height);for(let Z=0,X=Oe.length;Z<X;Z++)se=Oe[Z],f.format!==Xt?ce!==null?y?ae&&t.compressedTexSubImage2D(e.TEXTURE_2D,Z,0,0,se.width,se.height,ce,se.data):t.compressedTexImage2D(e.TEXTURE_2D,Z,Me,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):y?ae&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,se.width,se.height,ce,ye,se.data):t.texImage2D(e.TEXTURE_2D,Z,Me,se.width,se.height,0,ce,ye,se.data)}else if(f.isDataArrayTexture)if(y){if(te&&t.texStorage3D(e.TEXTURE_2D_ARRAY,fe,Me,ee.width,ee.height,ee.depth),ae)if(f.layerUpdates.size>0){const Z=Tr(ee.width,ee.height,f.format,f.type);for(const X of f.layerUpdates){const me=ee.data.subarray(X*Z/ee.data.BYTES_PER_ELEMENT,(X+1)*Z/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,X,ee.width,ee.height,1,ce,ye,me)}f.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ce,ye,ee.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,Me,ee.width,ee.height,ee.depth,0,ce,ye,ee.data);else if(f.isData3DTexture)y?(te&&t.texStorage3D(e.TEXTURE_3D,fe,Me,ee.width,ee.height,ee.depth),ae&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ce,ye,ee.data)):t.texImage3D(e.TEXTURE_3D,0,Me,ee.width,ee.height,ee.depth,0,ce,ye,ee.data);else if(f.isFramebufferTexture){if(te)if(y)t.texStorage2D(e.TEXTURE_2D,fe,Me,ee.width,ee.height);else{let Z=ee.width,X=ee.height;for(let me=0;me<fe;me++)t.texImage2D(e.TEXTURE_2D,me,Me,Z,X,0,ce,ye,null),Z>>=1,X>>=1}}else if(Oe.length>0){if(y&&te){const Z=st(Oe[0]);t.texStorage2D(e.TEXTURE_2D,fe,Me,Z.width,Z.height)}for(let Z=0,X=Oe.length;Z<X;Z++)se=Oe[Z],y?ae&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,ce,ye,se):t.texImage2D(e.TEXTURE_2D,Z,Me,ce,ye,se);f.generateMipmaps=!1}else if(y){if(te){const Z=st(ee);t.texStorage2D(e.TEXTURE_2D,fe,Me,Z.width,Z.height)}ae&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,ce,ye,ee)}else t.texImage2D(e.TEXTURE_2D,0,Me,ce,ye,ee);d(f)&&l(k),xe.__version=G.version,f.onUpdate&&f.onUpdate(f)}M.__version=f.version}function K(M,f,I){if(f.image.length!==6)return;const k=Je(M,f),$=f.source;t.bindTexture(e.TEXTURE_CUBE_MAP,M.__webglTexture,e.TEXTURE0+I);const G=i.get($);if($.version!==G.__version||k===!0){t.activeTexture(e.TEXTURE0+I);const xe=lt.getPrimaries(lt.workingColorSpace),ie=f.colorSpace===xn?null:lt.getPrimaries(f.colorSpace),ve=f.colorSpace===xn||xe===ie?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,f.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,f.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ee=f.isCompressedTexture||f.image[0].isCompressedTexture,ee=f.image[0]&&f.image[0].isDataTexture,ce=[];for(let X=0;X<6;X++)!Ee&&!ee?ce[X]=x(f.image[X],!0,a.maxCubemapSize):ce[X]=ee?f.image[X].image:f.image[X],ce[X]=ft(f,ce[X]);const ye=ce[0],Me=r.convert(f.format,f.colorSpace),se=r.convert(f.type),Oe=b(f.internalFormat,Me,se,f.colorSpace),y=f.isVideoTexture!==!0,te=G.__version===void 0||k===!0,ae=$.dataReady;let fe=w(f,ye);Ie(e.TEXTURE_CUBE_MAP,f);let Z;if(Ee){y&&te&&t.texStorage2D(e.TEXTURE_CUBE_MAP,fe,Oe,ye.width,ye.height);for(let X=0;X<6;X++){Z=ce[X].mipmaps;for(let me=0;me<Z.length;me++){const Ue=Z[me];f.format!==Xt?Me!==null?y?ae&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,me,0,0,Ue.width,Ue.height,Me,Ue.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,me,Oe,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):y?ae&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,me,0,0,Ue.width,Ue.height,Me,se,Ue.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,me,Oe,Ue.width,Ue.height,0,Me,se,Ue.data)}}}else{if(Z=f.mipmaps,y&&te){Z.length>0&&fe++;const X=st(ce[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,fe,Oe,X.width,X.height)}for(let X=0;X<6;X++)if(ee){y?ae&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ce[X].width,ce[X].height,Me,se,ce[X].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Oe,ce[X].width,ce[X].height,0,Me,se,ce[X].data);for(let me=0;me<Z.length;me++){const Ke=Z[me].image[X].image;y?ae&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,me+1,0,0,Ke.width,Ke.height,Me,se,Ke.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,me+1,Oe,Ke.width,Ke.height,0,Me,se,Ke.data)}}else{y?ae&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Me,se,ce[X]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Oe,Me,se,ce[X]);for(let me=0;me<Z.length;me++){const Ue=Z[me];y?ae&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,me+1,0,0,Me,se,Ue.image[X]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,me+1,Oe,Me,se,Ue.image[X])}}}d(f)&&l(e.TEXTURE_CUBE_MAP),G.__version=$.version,f.onUpdate&&f.onUpdate(f)}M.__version=f.version}function he(M,f,I,k,$,G){const xe=r.convert(I.format,I.colorSpace),ie=r.convert(I.type),ve=b(I.internalFormat,xe,ie,I.colorSpace),Ee=i.get(f),ee=i.get(I);if(ee.__renderTarget=f,!Ee.__hasExternalTextures){const ce=Math.max(1,f.width>>G),ye=Math.max(1,f.height>>G);$===e.TEXTURE_3D||$===e.TEXTURE_2D_ARRAY?t.texImage3D($,G,ve,ce,ye,f.depth,0,xe,ie,null):t.texImage2D($,G,ve,ce,ye,0,xe,ie,null)}t.bindFramebuffer(e.FRAMEBUFFER,M),_e(f)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,k,$,ee.__webglTexture,0,tt(f)):($===e.TEXTURE_2D||$>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,k,$,ee.__webglTexture,G),t.bindFramebuffer(e.FRAMEBUFFER,null)}function De(M,f,I){if(e.bindRenderbuffer(e.RENDERBUFFER,M),f.depthBuffer){const k=f.depthTexture,$=k&&k.isDepthTexture?k.type:null,G=E(f.stencilBuffer,$),xe=f.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ie=tt(f);_e(f)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ie,G,f.width,f.height):I?e.renderbufferStorageMultisample(e.RENDERBUFFER,ie,G,f.width,f.height):e.renderbufferStorage(e.RENDERBUFFER,G,f.width,f.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,xe,e.RENDERBUFFER,M)}else{const k=f.textures;for(let $=0;$<k.length;$++){const G=k[$],xe=r.convert(G.format,G.colorSpace),ie=r.convert(G.type),ve=b(G.internalFormat,xe,ie,G.colorSpace),Ee=tt(f);I&&_e(f)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ee,ve,f.width,f.height):_e(f)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ee,ve,f.width,f.height):e.renderbufferStorage(e.RENDERBUFFER,ve,f.width,f.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Te(M,f){if(f&&f.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(e.FRAMEBUFFER,M),!(f.depthTexture&&f.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const k=i.get(f.depthTexture);k.__renderTarget=f,(!k.__webglTexture||f.depthTexture.image.width!==f.width||f.depthTexture.image.height!==f.height)&&(f.depthTexture.image.width=f.width,f.depthTexture.image.height=f.height,f.depthTexture.needsUpdate=!0),Y(f.depthTexture,0);const $=k.__webglTexture,G=tt(f);if(f.depthTexture.format===xa)_e(f)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,$,0,G):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,$,0);else if(f.depthTexture.format===_i)_e(f)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,$,0,G):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function ke(M){const f=i.get(M),I=M.isWebGLCubeRenderTarget===!0;if(f.__boundDepthTexture!==M.depthTexture){const k=M.depthTexture;if(f.__depthDisposeCallback&&f.__depthDisposeCallback(),k){const $=()=>{delete f.__boundDepthTexture,delete f.__depthDisposeCallback,k.removeEventListener("dispose",$)};k.addEventListener("dispose",$),f.__depthDisposeCallback=$}f.__boundDepthTexture=k}if(M.depthTexture&&!f.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const k=M.texture.mipmaps;k&&k.length>0?Te(f.__webglFramebuffer[0],M):Te(f.__webglFramebuffer,M)}else if(I){f.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(e.FRAMEBUFFER,f.__webglFramebuffer[k]),f.__webglDepthbuffer[k]===void 0)f.__webglDepthbuffer[k]=e.createRenderbuffer(),De(f.__webglDepthbuffer[k],M,!1);else{const $=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,G=f.__webglDepthbuffer[k];e.bindRenderbuffer(e.RENDERBUFFER,G),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,G)}}else{const k=M.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(e.FRAMEBUFFER,f.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,f.__webglFramebuffer),f.__webglDepthbuffer===void 0)f.__webglDepthbuffer=e.createRenderbuffer(),De(f.__webglDepthbuffer,M,!1);else{const $=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,G=f.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,G),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,G)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function gt(M,f,I){const k=i.get(M);f!==void 0&&he(k.__webglFramebuffer,M,M.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),I!==void 0&&ke(M)}function R(M){const f=M.texture,I=i.get(M),k=i.get(f);M.addEventListener("dispose",U);const $=M.textures,G=M.isWebGLCubeRenderTarget===!0,xe=$.length>1;if(xe||(k.__webglTexture===void 0&&(k.__webglTexture=e.createTexture()),k.__version=f.version,s.memory.textures++),G){I.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(f.mipmaps&&f.mipmaps.length>0){I.__webglFramebuffer[ie]=[];for(let ve=0;ve<f.mipmaps.length;ve++)I.__webglFramebuffer[ie][ve]=e.createFramebuffer()}else I.__webglFramebuffer[ie]=e.createFramebuffer()}else{if(f.mipmaps&&f.mipmaps.length>0){I.__webglFramebuffer=[];for(let ie=0;ie<f.mipmaps.length;ie++)I.__webglFramebuffer[ie]=e.createFramebuffer()}else I.__webglFramebuffer=e.createFramebuffer();if(xe)for(let ie=0,ve=$.length;ie<ve;ie++){const Ee=i.get($[ie]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=e.createTexture(),s.memory.textures++)}if(M.samples>0&&_e(M)===!1){I.__webglMultisampledFramebuffer=e.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ie=0;ie<$.length;ie++){const ve=$[ie];I.__webglColorRenderbuffer[ie]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,I.__webglColorRenderbuffer[ie]);const Ee=r.convert(ve.format,ve.colorSpace),ee=r.convert(ve.type),ce=b(ve.internalFormat,Ee,ee,ve.colorSpace,M.isXRRenderTarget===!0),ye=tt(M);e.renderbufferStorageMultisample(e.RENDERBUFFER,ye,ce,M.width,M.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ie,e.RENDERBUFFER,I.__webglColorRenderbuffer[ie])}e.bindRenderbuffer(e.RENDERBUFFER,null),M.depthBuffer&&(I.__webglDepthRenderbuffer=e.createRenderbuffer(),De(I.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(G){t.bindTexture(e.TEXTURE_CUBE_MAP,k.__webglTexture),Ie(e.TEXTURE_CUBE_MAP,f);for(let ie=0;ie<6;ie++)if(f.mipmaps&&f.mipmaps.length>0)for(let ve=0;ve<f.mipmaps.length;ve++)he(I.__webglFramebuffer[ie][ve],M,f,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve);else he(I.__webglFramebuffer[ie],M,f,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);d(f)&&l(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let ie=0,ve=$.length;ie<ve;ie++){const Ee=$[ie],ee=i.get(Ee);let ce=e.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ce=M.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(ce,ee.__webglTexture),Ie(ce,Ee),he(I.__webglFramebuffer,M,Ee,e.COLOR_ATTACHMENT0+ie,ce,0),d(Ee)&&l(ce)}t.unbindTexture()}else{let ie=e.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ie=M.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(ie,k.__webglTexture),Ie(ie,f),f.mipmaps&&f.mipmaps.length>0)for(let ve=0;ve<f.mipmaps.length;ve++)he(I.__webglFramebuffer[ve],M,f,e.COLOR_ATTACHMENT0,ie,ve);else he(I.__webglFramebuffer,M,f,e.COLOR_ATTACHMENT0,ie,0);d(f)&&l(ie),t.unbindTexture()}M.depthBuffer&&ke(M)}function et(M){const f=M.textures;for(let I=0,k=f.length;I<k;I++){const $=f[I];if(d($)){const G=A(M),xe=i.get($).__webglTexture;t.bindTexture(G,xe),l(G),t.unbindTexture()}}}const Ne=[],Pe=[];function ge(M){if(M.samples>0){if(_e(M)===!1){const f=M.textures,I=M.width,k=M.height;let $=e.COLOR_BUFFER_BIT;const G=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,xe=i.get(M),ie=f.length>1;if(ie)for(let Ee=0;Ee<f.length;Ee++)t.bindFramebuffer(e.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ee,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,xe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ee,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const ve=M.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Ee=0;Ee<f.length;Ee++){if(M.resolveDepthBuffer&&(M.depthBuffer&&($|=e.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&($|=e.STENCIL_BUFFER_BIT)),ie){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,xe.__webglColorRenderbuffer[Ee]);const ee=i.get(f[Ee]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ee,0)}e.blitFramebuffer(0,0,I,k,0,0,I,k,$,e.NEAREST),h===!0&&(Ne.length=0,Pe.length=0,Ne.push(e.COLOR_ATTACHMENT0+Ee),M.depthBuffer&&M.resolveDepthBuffer===!1&&(Ne.push(G),Pe.push(G),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Pe)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ne))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ie)for(let Ee=0;Ee<f.length;Ee++){t.bindFramebuffer(e.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ee,e.RENDERBUFFER,xe.__webglColorRenderbuffer[Ee]);const ee=i.get(f[Ee]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,xe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ee,e.TEXTURE_2D,ee,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&h){const f=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[f])}}}function tt(M){return Math.min(a.maxSamples,M.samples)}function _e(M){const f=i.get(M);return M.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&f.__useRenderToTexture!==!1}function Be(M){const f=s.render.frame;m.get(M)!==f&&(m.set(M,f),M.update())}function ft(M,f){const I=M.colorSpace,k=M.format,$=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||I!==xi&&I!==xn&&(lt.getTransfer(I)===Ze?(k!==Xt||$!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),f}function st(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(u.width=M.naturalWidth||M.width,u.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(u.width=M.displayWidth,u.height=M.displayHeight):(u.width=M.width,u.height=M.height),u}this.allocateTextureUnit=W,this.resetTextureUnits=B,this.setTexture2D=Y,this.setTexture2DArray=z,this.setTexture3D=ne,this.setTextureCube=H,this.rebindTextures=gt,this.setupRenderTarget=R,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=he,this.useMultisampledRTT=_e}function fh(e,n){function t(i,a=xn){let r;const s=lt.getTransfer(a);if(i===vn)return e.UNSIGNED_BYTE;if(i===Ro)return e.UNSIGNED_SHORT_4_4_4_4;if(i===wo)return e.UNSIGNED_SHORT_5_5_5_1;if(i===zs)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Ws)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Xs)return e.BYTE;if(i===qs)return e.SHORT;if(i===Si)return e.UNSIGNED_SHORT;if(i===Po)return e.INT;if(i===$n)return e.UNSIGNED_INT;if(i===fn)return e.FLOAT;if(i===Mi)return e.HALF_FLOAT;if(i===Ys)return e.ALPHA;if(i===Ks)return e.RGB;if(i===Xt)return e.RGBA;if(i===xa)return e.DEPTH_COMPONENT;if(i===_i)return e.DEPTH_STENCIL;if(i===$s)return e.RED;if(i===Lo)return e.RED_INTEGER;if(i===Zs)return e.RG;if(i===Do)return e.RG_INTEGER;if(i===Uo)return e.RGBA_INTEGER;if(i===Di||i===Ui||i===Ii||i===Ni)if(s===Ze)if(r=n.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Di)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ui)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ii)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ni)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=n.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Di)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ui)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ii)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ni)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wa||i===Xa||i===qa||i===Ya)if(r=n.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ka||i===$a||i===Za)if(r=n.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ka||i===$a)return s===Ze?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Za)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Qa||i===ja||i===Ja||i===er||i===tr||i===nr||i===ir||i===ar||i===rr||i===or||i===sr||i===lr||i===cr||i===dr)if(r=n.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Qa)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ja)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ja)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===er)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===tr)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nr)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ir)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ar)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===rr)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===or)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sr)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===lr)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===cr)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===dr)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ur||i===fr||i===hr)if(r=n.get("EXT_texture_compression_bptc"),r!==null){if(i===ur)return s===Ze?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===pr||i===mr||i===gr||i===_r)if(r=n.get("EXT_texture_compression_rgtc"),r!==null){if(i===pr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===mr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===gr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_r)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Kn?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const hh=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ph=`
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

}`;class mh{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new Co(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new Kt({vertexShader:hh,fragmentShader:ph,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ot(new yo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gh extends ls{constructor(n,t){super();const i=this;let a=null,r=1,s=null,o="local-floor",h=1,u=null,m=null,c=null,_=null,g=null,T=null;const x=typeof XRWebGLBinding<"u",d=new mh,l={},A=t.getContextAttributes();let b=null,E=null;const w=[],C=[],U=new at;let N=null;const v=new kn;v.viewport=new xt;const S=new kn;S.viewport=new xt;const P=[v,S],B=new cs;let W=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let K=w[V];return K===void 0&&(K=new Pi,w[V]=K),K.getTargetRaySpace()},this.getControllerGrip=function(V){let K=w[V];return K===void 0&&(K=new Pi,w[V]=K),K.getGripSpace()},this.getHand=function(V){let K=w[V];return K===void 0&&(K=new Pi,w[V]=K),K.getHandSpace()};function Y(V){const K=C.indexOf(V.inputSource);if(K===-1)return;const he=w[K];he!==void 0&&(he.update(V.inputSource,V.frame,u||s),he.dispatchEvent({type:V.type,data:V.inputSource}))}function z(){a.removeEventListener("select",Y),a.removeEventListener("selectstart",Y),a.removeEventListener("selectend",Y),a.removeEventListener("squeeze",Y),a.removeEventListener("squeezestart",Y),a.removeEventListener("squeezeend",Y),a.removeEventListener("end",z),a.removeEventListener("inputsourceschange",ne);for(let V=0;V<w.length;V++){const K=C[V];K!==null&&(C[V]=null,w[V].disconnect(K))}W=null,q=null,d.reset();for(const V in l)delete l[V];n.setRenderTarget(b),g=null,_=null,c=null,a=null,E=null,Fe.stop(),i.isPresenting=!1,n.setPixelRatio(N),n.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(V){u=V},this.getBaseLayer=function(){return _!==null?_:g},this.getBinding=function(){return c===null&&x&&(c=new XRWebGLBinding(a,t)),c},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(V){if(a=V,a!==null){if(b=n.getRenderTarget(),a.addEventListener("select",Y),a.addEventListener("selectstart",Y),a.addEventListener("selectend",Y),a.addEventListener("squeeze",Y),a.addEventListener("squeezestart",Y),a.addEventListener("squeezeend",Y),a.addEventListener("end",z),a.addEventListener("inputsourceschange",ne),A.xrCompatible!==!0&&await t.makeXRCompatible(),N=n.getPixelRatio(),n.getSize(U),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,De=null,Te=null;A.depth&&(Te=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=A.stencil?_i:xa,De=A.stencil?Kn:$n);const ke={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};c=this.getBinding(),_=c.createProjectionLayer(ke),a.updateRenderState({layers:[_]}),n.setPixelRatio(1),n.setSize(_.textureWidth,_.textureHeight,!1),E=new Pn(_.textureWidth,_.textureHeight,{format:Xt,type:vn,depthTexture:new To(_.textureWidth,_.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:A.stencil,colorSpace:n.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const he={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(a,t,he),a.updateRenderState({baseLayer:g}),n.setPixelRatio(1),n.setSize(g.framebufferWidth,g.framebufferHeight,!1),E=new Pn(g.framebufferWidth,g.framebufferHeight,{format:Xt,type:vn,colorSpace:n.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(h),u=null,s=await a.requestReferenceSpace(o),Fe.setContext(a),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function ne(V){for(let K=0;K<V.removed.length;K++){const he=V.removed[K],De=C.indexOf(he);De>=0&&(C[De]=null,w[De].disconnect(he))}for(let K=0;K<V.added.length;K++){const he=V.added[K];let De=C.indexOf(he);if(De===-1){for(let ke=0;ke<w.length;ke++)if(ke>=C.length){C.push(he),De=ke;break}else if(C[ke]===null){C[ke]=he,De=ke;break}if(De===-1)break}const Te=w[De];Te&&Te.connect(he)}}const H=new re,ue=new re;function Se(V,K,he){H.setFromMatrixPosition(K.matrixWorld),ue.setFromMatrixPosition(he.matrixWorld);const De=H.distanceTo(ue),Te=K.projectionMatrix.elements,ke=he.projectionMatrix.elements,gt=Te[14]/(Te[10]-1),R=Te[14]/(Te[10]+1),et=(Te[9]+1)/Te[5],Ne=(Te[9]-1)/Te[5],Pe=(Te[8]-1)/Te[0],ge=(ke[8]+1)/ke[0],tt=gt*Pe,_e=gt*ge,Be=De/(-Pe+ge),ft=Be*-Pe;if(K.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(ft),V.translateZ(Be),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Te[10]===-1)V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const st=gt+Be,M=R+Be,f=tt-ft,I=_e+(De-ft),k=et*R/M*st,$=Ne*R/M*st;V.projectionMatrix.makePerspective(f,I,k,$,st,M),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function Re(V,K){K===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(K.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(a===null)return;let K=V.near,he=V.far;d.texture!==null&&(d.depthNear>0&&(K=d.depthNear),d.depthFar>0&&(he=d.depthFar)),B.near=S.near=v.near=K,B.far=S.far=v.far=he,(W!==B.near||q!==B.far)&&(a.updateRenderState({depthNear:B.near,depthFar:B.far}),W=B.near,q=B.far),B.layers.mask=V.layers.mask|6,v.layers.mask=B.layers.mask&3,S.layers.mask=B.layers.mask&5;const De=V.parent,Te=B.cameras;Re(B,De);for(let ke=0;ke<Te.length;ke++)Re(Te[ke],De);Te.length===2?Se(B,v,S):B.projectionMatrix.copy(v.projectionMatrix),Ie(V,B,De)};function Ie(V,K,he){he===null?V.matrix.copy(K.matrixWorld):(V.matrix.copy(he.matrixWorld),V.matrix.invert(),V.matrix.multiply(K.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ds*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(_===null&&g===null))return h},this.setFoveation=function(V){h=V,_!==null&&(_.fixedFoveation=V),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=V)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(B)},this.getCameraTexture=function(V){return l[V]};let Je=null;function we(V,K){if(m=K.getViewerPose(u||s),T=K,m!==null){const he=m.views;g!==null&&(n.setRenderTargetFramebuffer(E,g.framebuffer),n.setRenderTarget(E));let De=!1;he.length!==B.cameras.length&&(B.cameras.length=0,De=!0);for(let R=0;R<he.length;R++){const et=he[R];let Ne=null;if(g!==null)Ne=g.getViewport(et);else{const ge=c.getViewSubImage(_,et);Ne=ge.viewport,R===0&&(n.setRenderTargetTextures(E,ge.colorTexture,ge.depthStencilTexture),n.setRenderTarget(E))}let Pe=P[R];Pe===void 0&&(Pe=new kn,Pe.layers.enable(R),Pe.viewport=new xt,P[R]=Pe),Pe.matrix.fromArray(et.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(et.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),R===0&&(B.matrix.copy(Pe.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),De===!0&&B.cameras.push(Pe)}const Te=a.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&x){c=i.getBinding();const R=c.getDepthInformation(he[0]);R&&R.isValid&&R.texture&&d.init(R,a.renderState)}if(Te&&Te.includes("camera-access")&&x){n.state.unbindTexture(),c=i.getBinding();for(let R=0;R<he.length;R++){const et=he[R].camera;if(et){let Ne=l[et];Ne||(Ne=new Co,l[et]=Ne);const Pe=c.getCameraImage(et);Ne.sourceTexture=Pe}}}}for(let he=0;he<w.length;he++){const De=C[he],Te=w[he];De!==null&&Te!==void 0&&Te.update(De,K,u||s)}Je&&Je(V,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),T=null}const Fe=new ko;Fe.setAnimationLoop(we),this.setAnimationLoop=function(V){Je=V},this.dispose=function(){}}}const cn=new Cn,_h=new Ht;function vh(e,n){function t(d,l){d.matrixAutoUpdate===!0&&d.updateMatrix(),l.value.copy(d.matrix)}function i(d,l){l.color.getRGB(d.fogColor.value,No(e)),l.isFog?(d.fogNear.value=l.near,d.fogFar.value=l.far):l.isFogExp2&&(d.fogDensity.value=l.density)}function a(d,l,A,b,E){l.isMeshBasicMaterial||l.isMeshLambertMaterial?r(d,l):l.isMeshToonMaterial?(r(d,l),c(d,l)):l.isMeshPhongMaterial?(r(d,l),m(d,l)):l.isMeshStandardMaterial?(r(d,l),_(d,l),l.isMeshPhysicalMaterial&&g(d,l,E)):l.isMeshMatcapMaterial?(r(d,l),T(d,l)):l.isMeshDepthMaterial?r(d,l):l.isMeshDistanceMaterial?(r(d,l),x(d,l)):l.isMeshNormalMaterial?r(d,l):l.isLineBasicMaterial?(s(d,l),l.isLineDashedMaterial&&o(d,l)):l.isPointsMaterial?h(d,l,A,b):l.isSpriteMaterial?u(d,l):l.isShadowMaterial?(d.color.value.copy(l.color),d.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}function r(d,l){d.opacity.value=l.opacity,l.color&&d.diffuse.value.copy(l.color),l.emissive&&d.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(d.map.value=l.map,t(l.map,d.mapTransform)),l.alphaMap&&(d.alphaMap.value=l.alphaMap,t(l.alphaMap,d.alphaMapTransform)),l.bumpMap&&(d.bumpMap.value=l.bumpMap,t(l.bumpMap,d.bumpMapTransform),d.bumpScale.value=l.bumpScale,l.side===Rt&&(d.bumpScale.value*=-1)),l.normalMap&&(d.normalMap.value=l.normalMap,t(l.normalMap,d.normalMapTransform),d.normalScale.value.copy(l.normalScale),l.side===Rt&&d.normalScale.value.negate()),l.displacementMap&&(d.displacementMap.value=l.displacementMap,t(l.displacementMap,d.displacementMapTransform),d.displacementScale.value=l.displacementScale,d.displacementBias.value=l.displacementBias),l.emissiveMap&&(d.emissiveMap.value=l.emissiveMap,t(l.emissiveMap,d.emissiveMapTransform)),l.specularMap&&(d.specularMap.value=l.specularMap,t(l.specularMap,d.specularMapTransform)),l.alphaTest>0&&(d.alphaTest.value=l.alphaTest);const A=n.get(l),b=A.envMap,E=A.envMapRotation;b&&(d.envMap.value=b,cn.copy(E),cn.x*=-1,cn.y*=-1,cn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(cn.y*=-1,cn.z*=-1),d.envMapRotation.value.setFromMatrix4(_h.makeRotationFromEuler(cn)),d.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=l.reflectivity,d.ior.value=l.ior,d.refractionRatio.value=l.refractionRatio),l.lightMap&&(d.lightMap.value=l.lightMap,d.lightMapIntensity.value=l.lightMapIntensity,t(l.lightMap,d.lightMapTransform)),l.aoMap&&(d.aoMap.value=l.aoMap,d.aoMapIntensity.value=l.aoMapIntensity,t(l.aoMap,d.aoMapTransform))}function s(d,l){d.diffuse.value.copy(l.color),d.opacity.value=l.opacity,l.map&&(d.map.value=l.map,t(l.map,d.mapTransform))}function o(d,l){d.dashSize.value=l.dashSize,d.totalSize.value=l.dashSize+l.gapSize,d.scale.value=l.scale}function h(d,l,A,b){d.diffuse.value.copy(l.color),d.opacity.value=l.opacity,d.size.value=l.size*A,d.scale.value=b*.5,l.map&&(d.map.value=l.map,t(l.map,d.uvTransform)),l.alphaMap&&(d.alphaMap.value=l.alphaMap,t(l.alphaMap,d.alphaMapTransform)),l.alphaTest>0&&(d.alphaTest.value=l.alphaTest)}function u(d,l){d.diffuse.value.copy(l.color),d.opacity.value=l.opacity,d.rotation.value=l.rotation,l.map&&(d.map.value=l.map,t(l.map,d.mapTransform)),l.alphaMap&&(d.alphaMap.value=l.alphaMap,t(l.alphaMap,d.alphaMapTransform)),l.alphaTest>0&&(d.alphaTest.value=l.alphaTest)}function m(d,l){d.specular.value.copy(l.specular),d.shininess.value=Math.max(l.shininess,1e-4)}function c(d,l){l.gradientMap&&(d.gradientMap.value=l.gradientMap)}function _(d,l){d.metalness.value=l.metalness,l.metalnessMap&&(d.metalnessMap.value=l.metalnessMap,t(l.metalnessMap,d.metalnessMapTransform)),d.roughness.value=l.roughness,l.roughnessMap&&(d.roughnessMap.value=l.roughnessMap,t(l.roughnessMap,d.roughnessMapTransform)),l.envMap&&(d.envMapIntensity.value=l.envMapIntensity)}function g(d,l,A){d.ior.value=l.ior,l.sheen>0&&(d.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),d.sheenRoughness.value=l.sheenRoughness,l.sheenColorMap&&(d.sheenColorMap.value=l.sheenColorMap,t(l.sheenColorMap,d.sheenColorMapTransform)),l.sheenRoughnessMap&&(d.sheenRoughnessMap.value=l.sheenRoughnessMap,t(l.sheenRoughnessMap,d.sheenRoughnessMapTransform))),l.clearcoat>0&&(d.clearcoat.value=l.clearcoat,d.clearcoatRoughness.value=l.clearcoatRoughness,l.clearcoatMap&&(d.clearcoatMap.value=l.clearcoatMap,t(l.clearcoatMap,d.clearcoatMapTransform)),l.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap,t(l.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),l.clearcoatNormalMap&&(d.clearcoatNormalMap.value=l.clearcoatNormalMap,t(l.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),l.side===Rt&&d.clearcoatNormalScale.value.negate())),l.dispersion>0&&(d.dispersion.value=l.dispersion),l.iridescence>0&&(d.iridescence.value=l.iridescence,d.iridescenceIOR.value=l.iridescenceIOR,d.iridescenceThicknessMinimum.value=l.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=l.iridescenceThicknessRange[1],l.iridescenceMap&&(d.iridescenceMap.value=l.iridescenceMap,t(l.iridescenceMap,d.iridescenceMapTransform)),l.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=l.iridescenceThicknessMap,t(l.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),l.transmission>0&&(d.transmission.value=l.transmission,d.transmissionSamplerMap.value=A.texture,d.transmissionSamplerSize.value.set(A.width,A.height),l.transmissionMap&&(d.transmissionMap.value=l.transmissionMap,t(l.transmissionMap,d.transmissionMapTransform)),d.thickness.value=l.thickness,l.thicknessMap&&(d.thicknessMap.value=l.thicknessMap,t(l.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=l.attenuationDistance,d.attenuationColor.value.copy(l.attenuationColor)),l.anisotropy>0&&(d.anisotropyVector.value.set(l.anisotropy*Math.cos(l.anisotropyRotation),l.anisotropy*Math.sin(l.anisotropyRotation)),l.anisotropyMap&&(d.anisotropyMap.value=l.anisotropyMap,t(l.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=l.specularIntensity,d.specularColor.value.copy(l.specularColor),l.specularColorMap&&(d.specularColorMap.value=l.specularColorMap,t(l.specularColorMap,d.specularColorMapTransform)),l.specularIntensityMap&&(d.specularIntensityMap.value=l.specularIntensityMap,t(l.specularIntensityMap,d.specularIntensityMapTransform))}function T(d,l){l.matcap&&(d.matcap.value=l.matcap)}function x(d,l){const A=n.get(l).light;d.referencePosition.value.setFromMatrixPosition(A.matrixWorld),d.nearDistance.value=A.shadow.camera.near,d.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Sh(e,n,t,i){let a={},r={},s=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function h(A,b){const E=b.program;i.uniformBlockBinding(A,E)}function u(A,b){let E=a[A.id];E===void 0&&(T(A),E=m(A),a[A.id]=E,A.addEventListener("dispose",d));const w=b.program;i.updateUBOMapping(A,w);const C=n.render.frame;r[A.id]!==C&&(_(A),r[A.id]=C)}function m(A){const b=c();A.__bindingPointIndex=b;const E=e.createBuffer(),w=A.__size,C=A.usage;return e.bindBuffer(e.UNIFORM_BUFFER,E),e.bufferData(e.UNIFORM_BUFFER,w,C),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,b,E),E}function c(){for(let A=0;A<o;A++)if(s.indexOf(A)===-1)return s.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(A){const b=a[A.id],E=A.uniforms,w=A.__cache;e.bindBuffer(e.UNIFORM_BUFFER,b);for(let C=0,U=E.length;C<U;C++){const N=Array.isArray(E[C])?E[C]:[E[C]];for(let v=0,S=N.length;v<S;v++){const P=N[v];if(g(P,C,v,w)===!0){const B=P.__offset,W=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let Y=0;Y<W.length;Y++){const z=W[Y],ne=x(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,e.bufferSubData(e.UNIFORM_BUFFER,B+q,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):(z.toArray(P.__data,q),q+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,B,P.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function g(A,b,E,w){const C=A.value,U=b+"_"+E;if(w[U]===void 0)return typeof C=="number"||typeof C=="boolean"?w[U]=C:w[U]=C.clone(),!0;{const N=w[U];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return w[U]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function T(A){const b=A.uniforms;let E=0;const w=16;for(let U=0,N=b.length;U<N;U++){const v=Array.isArray(b[U])?b[U]:[b[U]];for(let S=0,P=v.length;S<P;S++){const B=v[S],W=Array.isArray(B.value)?B.value:[B.value];for(let q=0,Y=W.length;q<Y;q++){const z=W[q],ne=x(z),H=E%w,ue=H%ne.boundary,Se=H+ue;E+=ue,Se!==0&&w-Se<ne.storage&&(E+=w-Se),B.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=E,E+=ne.storage}}}const C=E%w;return C>0&&(E+=w-C),A.__size=E,A.__cache={},this}function x(A){const b={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(b.boundary=4,b.storage=4):A.isVector2?(b.boundary=8,b.storage=8):A.isVector3||A.isColor?(b.boundary=16,b.storage=12):A.isVector4?(b.boundary=16,b.storage=16):A.isMatrix3?(b.boundary=48,b.storage=48):A.isMatrix4?(b.boundary=64,b.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),b}function d(A){const b=A.target;b.removeEventListener("dispose",d);const E=s.indexOf(b.__bindingPointIndex);s.splice(E,1),e.deleteBuffer(a[b.id]),delete a[b.id],delete r[b.id]}function l(){for(const A in a)e.deleteBuffer(a[A]);s=[],a={},r={}}return{bind:h,update:u,dispose:l}}class Eh{constructor(n={}){const{canvas:t=rs(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:u=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:_=!1}=n;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=s;const T=new Uint32Array(4),x=new Int32Array(4);let d=null,l=null;const A=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Jt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let w=!1;this._outputColorSpace=Mo;let C=0,U=0,N=null,v=-1,S=null;const P=new xt,B=new xt;let W=null;const q=new We(0);let Y=0,z=t.width,ne=t.height,H=1,ue=null,Se=null;const Re=new xt(0,0,z,ne),Ie=new xt(0,0,z,ne);let Je=!1;const we=new xo;let Fe=!1,V=!1;const K=new Ht,he=new re,De=new xt,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function gt(){return N===null?H:1}let R=i;function et(p,L){return t.getContext(p,L)}try{const p={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:u,powerPreference:m,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${os}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",Z,!1),R===null){const L="webgl2";if(R=et(L,p),R===null)throw et(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(p){throw console.error("THREE.WebGLRenderer: "+p.message),p}let Ne,Pe,ge,tt,_e,Be,ft,st,M,f,I,k,$,G,xe,ie,ve,Ee,ee,ce,ye,Me,se,Oe;function y(){Ne=new yu(R),Ne.init(),Me=new fh(R,Ne),Pe=new xu(R,Ne,n,Me),ge=new dh(R,Ne),Pe.reversedDepthBuffer&&_&&ge.buffers.depth.setReversed(!0),tt=new Du(R),_e=new Qf,Be=new uh(R,Ne,ge,_e,Pe,Me,tt),ft=new bu(E),st=new Cu(E),M=new Bl(R),se=new Eu(R,M),f=new Pu(R,M,tt,se),I=new Iu(R,f,M,tt),ee=new Uu(R,Pe,Be),ie=new Tu(_e),k=new Zf(E,ft,st,Ne,Pe,se,ie),$=new vh(E,_e),G=new Jf,xe=new rh(Ne),Ee=new Su(E,ft,st,ge,I,g,h),ve=new lh(E,I,Pe),Oe=new Sh(R,tt,Pe,ge),ce=new Mu(R,Ne,tt),ye=new Lu(R,Ne,tt),tt.programs=k.programs,E.capabilities=Pe,E.extensions=Ne,E.properties=_e,E.renderLists=G,E.shadowMap=ve,E.state=ge,E.info=tt}y();const te=new gh(E,R);this.xr=te,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const p=Ne.get("WEBGL_lose_context");p&&p.loseContext()},this.forceContextRestore=function(){const p=Ne.get("WEBGL_lose_context");p&&p.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(p){p!==void 0&&(H=p,this.setSize(z,ne,!1))},this.getSize=function(p){return p.set(z,ne)},this.setSize=function(p,L,O=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=p,ne=L,t.width=Math.floor(p*H),t.height=Math.floor(L*H),O===!0&&(t.style.width=p+"px",t.style.height=L+"px"),this.setViewport(0,0,p,L)},this.getDrawingBufferSize=function(p){return p.set(z*H,ne*H).floor()},this.setDrawingBufferSize=function(p,L,O){z=p,ne=L,H=O,t.width=Math.floor(p*O),t.height=Math.floor(L*O),this.setViewport(0,0,p,L)},this.getCurrentViewport=function(p){return p.copy(P)},this.getViewport=function(p){return p.copy(Re)},this.setViewport=function(p,L,O,F){p.isVector4?Re.set(p.x,p.y,p.z,p.w):Re.set(p,L,O,F),ge.viewport(P.copy(Re).multiplyScalar(H).round())},this.getScissor=function(p){return p.copy(Ie)},this.setScissor=function(p,L,O,F){p.isVector4?Ie.set(p.x,p.y,p.z,p.w):Ie.set(p,L,O,F),ge.scissor(B.copy(Ie).multiplyScalar(H).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(p){ge.setScissorTest(Je=p)},this.setOpaqueSort=function(p){ue=p},this.setTransparentSort=function(p){Se=p},this.getClearColor=function(p){return p.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(p=!0,L=!0,O=!0){let F=0;if(p){let D=!1;if(N!==null){const j=N.texture.format;D=j===Uo||j===Do||j===Lo}if(D){const j=N.texture.type,le=j===vn||j===$n||j===Si||j===Kn||j===Ro||j===wo,pe=Ee.getClearColor(),de=Ee.getClearAlpha(),Ce=pe.r,Le=pe.g,be=pe.b;le?(T[0]=Ce,T[1]=Le,T[2]=be,T[3]=de,R.clearBufferuiv(R.COLOR,0,T)):(x[0]=Ce,x[1]=Le,x[2]=be,x[3]=de,R.clearBufferiv(R.COLOR,0,x))}else F|=R.COLOR_BUFFER_BIT}L&&(F|=R.DEPTH_BUFFER_BIT),O&&(F|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),Ee.dispose(),G.dispose(),xe.dispose(),_e.dispose(),ft.dispose(),st.dispose(),I.dispose(),se.dispose(),Oe.dispose(),k.dispose(),te.dispose(),te.removeEventListener("sessionstart",Nt),te.removeEventListener("sessionend",Fa),on.stop()};function ae(p){p.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const p=tt.autoReset,L=ve.enabled,O=ve.autoUpdate,F=ve.needsUpdate,D=ve.type;y(),tt.autoReset=p,ve.enabled=L,ve.autoUpdate=O,ve.needsUpdate=F,ve.type=D}function Z(p){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",p.statusMessage)}function X(p){const L=p.target;L.removeEventListener("dispose",X),me(L)}function me(p){Ue(p),_e.remove(p)}function Ue(p){const L=_e.get(p).programs;L!==void 0&&(L.forEach(function(O){k.releaseProgram(O)}),p.isShaderMaterial&&k.releaseShaderCache(p))}this.renderBufferDirect=function(p,L,O,F,D,j){L===null&&(L=Te);const le=D.isMesh&&D.matrixWorld.determinant()<0,pe=Jo(p,L,O,F,D);ge.setMaterial(F,le);let de=O.index,Ce=1;if(F.wireframe===!0){if(de=f.getWireframeAttribute(O),de===void 0)return;Ce=2}const Le=O.drawRange,be=O.attributes.position;let He=Le.start*Ce,qe=(Le.start+Le.count)*Ce;j!==null&&(He=Math.max(He,j.start*Ce),qe=Math.min(qe,(j.start+j.count)*Ce)),de!==null?(He=Math.max(He,0),qe=Math.min(qe,de.count)):be!=null&&(He=Math.max(He,0),qe=Math.min(qe,be.count));const rt=qe-He;if(rt<0||rt===1/0)return;se.setup(D,F,pe,O,de);let $e,Ye=ce;if(de!==null&&($e=M.get(de),Ye=ye,Ye.setIndex($e)),D.isMesh)F.wireframe===!0?(ge.setLineWidth(F.wireframeLinewidth*gt()),Ye.setMode(R.LINES)):Ye.setMode(R.TRIANGLES);else if(D.isLine){let Ae=F.linewidth;Ae===void 0&&(Ae=1),ge.setLineWidth(Ae*gt()),D.isLineSegments?Ye.setMode(R.LINES):D.isLineLoop?Ye.setMode(R.LINE_LOOP):Ye.setMode(R.LINE_STRIP)}else D.isPoints?Ye.setMode(R.POINTS):D.isSprite&&Ye.setMode(R.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)na("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ye.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))Ye.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const Ae=D._multiDrawStarts,nt=D._multiDrawCounts,Ve=D._multiDrawCount,bt=de?M.get(de).bytesPerElement:1,En=_e.get(F).currentProgram.getUniforms();for(let At=0;At<Ve;At++)En.setValue(R,"_gl_DrawID",At),Ye.render(Ae[At]/bt,nt[At])}else if(D.isInstancedMesh)Ye.renderInstances(He,rt,D.count);else if(O.isInstancedBufferGeometry){const Ae=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,nt=Math.min(O.instanceCount,Ae);Ye.renderInstances(He,rt,nt)}else Ye.render(He,rt)};function Ke(p,L,O){p.transparent===!0&&p.side===Lt&&p.forceSinglePass===!1?(p.side=Rt,p.needsUpdate=!0,ai(p,L,O),p.side=Yn,p.needsUpdate=!0,ai(p,L,O),p.side=Lt):ai(p,L,O)}this.compile=function(p,L,O=null){O===null&&(O=p),l=xe.get(O),l.init(L),b.push(l),O.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(l.pushLight(D),D.castShadow&&l.pushShadow(D))}),p!==O&&p.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(l.pushLight(D),D.castShadow&&l.pushShadow(D))}),l.setupLights();const F=new Set;return p.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const j=D.material;if(j)if(Array.isArray(j))for(let le=0;le<j.length;le++){const pe=j[le];Ke(pe,O,D),F.add(pe)}else Ke(j,O,D),F.add(j)}),l=b.pop(),F},this.compileAsync=function(p,L,O=null){const F=this.compile(p,L,O);return new Promise(D=>{function j(){if(F.forEach(function(le){_e.get(le).currentProgram.isReady()&&F.delete(le)}),F.size===0){D(p);return}setTimeout(j,10)}Ne.get("KHR_parallel_shader_compile")!==null?j():setTimeout(j,10)})};let Xe=null;function Vt(p){Xe&&Xe(p)}function Nt(){on.stop()}function Fa(){on.start()}const on=new ko;on.setAnimationLoop(Vt),typeof self<"u"&&on.setContext(self),this.setAnimationLoop=function(p){Xe=p,te.setAnimationLoop(p),p===null?on.stop():on.start()},te.addEventListener("sessionstart",Nt),te.addEventListener("sessionend",Fa),this.render=function(p,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(L),L=te.getCamera()),p.isScene===!0&&p.onBeforeRender(E,p,L,N),l=xe.get(p,b.length),l.init(L),b.push(l),K.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),we.setFromProjectionMatrix(K,za,L.reversedDepth),V=this.localClippingEnabled,Fe=ie.init(this.clippingPlanes,V),d=G.get(p,A.length),d.init(),A.push(d),te.enabled===!0&&te.isPresenting===!0){const j=E.xr.getDepthSensingMesh();j!==null&&Ci(j,L,-1/0,E.sortObjects)}Ci(p,L,0,E.sortObjects),d.finish(),E.sortObjects===!0&&d.sort(ue,Se),ke=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,ke&&Ee.addToRenderList(d,p),this.info.render.frame++,Fe===!0&&ie.beginShadows();const O=l.state.shadowsArray;ve.render(O,p,L),Fe===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const F=d.opaque,D=d.transmissive;if(l.setupLights(),L.isArrayCamera){const j=L.cameras;if(D.length>0)for(let le=0,pe=j.length;le<pe;le++){const de=j[le];Ga(F,D,p,de)}ke&&Ee.render(p);for(let le=0,pe=j.length;le<pe;le++){const de=j[le];Ba(d,p,de,de.viewport)}}else D.length>0&&Ga(F,D,p,L),ke&&Ee.render(p),Ba(d,p,L);N!==null&&U===0&&(Be.updateMultisampleRenderTarget(N),Be.updateRenderTargetMipmap(N)),p.isScene===!0&&p.onAfterRender(E,p,L),se.resetDefaultState(),v=-1,S=null,b.pop(),b.length>0?(l=b[b.length-1],Fe===!0&&ie.setGlobalState(E.clippingPlanes,l.state.camera)):l=null,A.pop(),A.length>0?d=A[A.length-1]:d=null};function Ci(p,L,O,F){if(p.visible===!1)return;if(p.layers.test(L.layers)){if(p.isGroup)O=p.renderOrder;else if(p.isLOD)p.autoUpdate===!0&&p.update(L);else if(p.isLight)l.pushLight(p),p.castShadow&&l.pushShadow(p);else if(p.isSprite){if(!p.frustumCulled||we.intersectsSprite(p)){F&&De.setFromMatrixPosition(p.matrixWorld).applyMatrix4(K);const le=I.update(p),pe=p.material;pe.visible&&d.push(p,le,pe,O,De.z,null)}}else if((p.isMesh||p.isLine||p.isPoints)&&(!p.frustumCulled||we.intersectsObject(p))){const le=I.update(p),pe=p.material;if(F&&(p.boundingSphere!==void 0?(p.boundingSphere===null&&p.computeBoundingSphere(),De.copy(p.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),De.copy(le.boundingSphere.center)),De.applyMatrix4(p.matrixWorld).applyMatrix4(K)),Array.isArray(pe)){const de=le.groups;for(let Ce=0,Le=de.length;Ce<Le;Ce++){const be=de[Ce],He=pe[be.materialIndex];He&&He.visible&&d.push(p,le,He,O,De.z,be)}}else pe.visible&&d.push(p,le,pe,O,De.z,null)}}const j=p.children;for(let le=0,pe=j.length;le<pe;le++)Ci(j[le],L,O,F)}function Ba(p,L,O,F){const D=p.opaque,j=p.transmissive,le=p.transparent;l.setupLightsView(O),Fe===!0&&ie.setGlobalState(E.clippingPlanes,O),F&&ge.viewport(P.copy(F)),D.length>0&&ii(D,L,O),j.length>0&&ii(j,L,O),le.length>0&&ii(le,L,O),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Ga(p,L,O,F){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;l.state.transmissionRenderTarget[F.id]===void 0&&(l.state.transmissionRenderTarget[F.id]=new Pn(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float")?Mi:vn,minFilter:bn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));const j=l.state.transmissionRenderTarget[F.id],le=F.viewport||P;j.setSize(le.z*E.transmissionResolutionScale,le.w*E.transmissionResolutionScale);const pe=E.getRenderTarget(),de=E.getActiveCubeFace(),Ce=E.getActiveMipmapLevel();E.setRenderTarget(j),E.getClearColor(q),Y=E.getClearAlpha(),Y<1&&E.setClearColor(16777215,.5),E.clear(),ke&&Ee.render(O);const Le=E.toneMapping;E.toneMapping=Jt;const be=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),l.setupLightsView(F),Fe===!0&&ie.setGlobalState(E.clippingPlanes,F),ii(p,O,F),Be.updateMultisampleRenderTarget(j),Be.updateRenderTargetMipmap(j),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let qe=0,rt=L.length;qe<rt;qe++){const $e=L[qe],Ye=$e.object,Ae=$e.geometry,nt=$e.material,Ve=$e.group;if(nt.side===Lt&&Ye.layers.test(F.layers)){const bt=nt.side;nt.side=Rt,nt.needsUpdate=!0,Ha(Ye,O,F,Ae,nt,Ve),nt.side=bt,nt.needsUpdate=!0,He=!0}}He===!0&&(Be.updateMultisampleRenderTarget(j),Be.updateRenderTargetMipmap(j))}E.setRenderTarget(pe,de,Ce),E.setClearColor(q,Y),be!==void 0&&(F.viewport=be),E.toneMapping=Le}function ii(p,L,O){const F=L.isScene===!0?L.overrideMaterial:null;for(let D=0,j=p.length;D<j;D++){const le=p[D],pe=le.object,de=le.geometry,Ce=le.group;let Le=le.material;Le.allowOverride===!0&&F!==null&&(Le=F),pe.layers.test(O.layers)&&Ha(pe,L,O,de,Le,Ce)}}function Ha(p,L,O,F,D,j){p.onBeforeRender(E,L,O,F,D,j),p.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,p.matrixWorld),p.normalMatrix.getNormalMatrix(p.modelViewMatrix),D.onBeforeRender(E,L,O,F,p,j),D.transparent===!0&&D.side===Lt&&D.forceSinglePass===!1?(D.side=Rt,D.needsUpdate=!0,E.renderBufferDirect(O,L,F,D,p,j),D.side=Yn,D.needsUpdate=!0,E.renderBufferDirect(O,L,F,D,p,j),D.side=Lt):E.renderBufferDirect(O,L,F,D,p,j),p.onAfterRender(E,L,O,F,D,j)}function ai(p,L,O){L.isScene!==!0&&(L=Te);const F=_e.get(p),D=l.state.lights,j=l.state.shadowsArray,le=D.state.version,pe=k.getParameters(p,D.state,j,L,O),de=k.getProgramCacheKey(pe);let Ce=F.programs;F.environment=p.isMeshStandardMaterial?L.environment:null,F.fog=L.fog,F.envMap=(p.isMeshStandardMaterial?st:ft).get(p.envMap||F.environment),F.envMapRotation=F.environment!==null&&p.envMap===null?L.environmentRotation:p.envMapRotation,Ce===void 0&&(p.addEventListener("dispose",X),Ce=new Map,F.programs=Ce);let Le=Ce.get(de);if(Le!==void 0){if(F.currentProgram===Le&&F.lightsStateVersion===le)return Va(p,pe),Le}else pe.uniforms=k.getUniforms(p),p.onBeforeCompile(pe,E),Le=k.acquireProgram(pe,de),Ce.set(de,Le),F.uniforms=pe.uniforms;const be=F.uniforms;return(!p.isShaderMaterial&&!p.isRawShaderMaterial||p.clipping===!0)&&(be.clippingPlanes=ie.uniform),Va(p,pe),F.needsLights=ts(p),F.lightsStateVersion=le,F.needsLights&&(be.ambientLightColor.value=D.state.ambient,be.lightProbe.value=D.state.probe,be.directionalLights.value=D.state.directional,be.directionalLightShadows.value=D.state.directionalShadow,be.spotLights.value=D.state.spot,be.spotLightShadows.value=D.state.spotShadow,be.rectAreaLights.value=D.state.rectArea,be.ltc_1.value=D.state.rectAreaLTC1,be.ltc_2.value=D.state.rectAreaLTC2,be.pointLights.value=D.state.point,be.pointLightShadows.value=D.state.pointShadow,be.hemisphereLights.value=D.state.hemi,be.directionalShadowMap.value=D.state.directionalShadowMap,be.directionalShadowMatrix.value=D.state.directionalShadowMatrix,be.spotShadowMap.value=D.state.spotShadowMap,be.spotLightMatrix.value=D.state.spotLightMatrix,be.spotLightMap.value=D.state.spotLightMap,be.pointShadowMap.value=D.state.pointShadowMap,be.pointShadowMatrix.value=D.state.pointShadowMatrix),F.currentProgram=Le,F.uniformsList=null,Le}function ka(p){if(p.uniformsList===null){const L=p.currentProgram.getUniforms();p.uniformsList=pi.seqWithValue(L.seq,p.uniforms)}return p.uniformsList}function Va(p,L){const O=_e.get(p);O.outputColorSpace=L.outputColorSpace,O.batching=L.batching,O.batchingColor=L.batchingColor,O.instancing=L.instancing,O.instancingColor=L.instancingColor,O.instancingMorph=L.instancingMorph,O.skinning=L.skinning,O.morphTargets=L.morphTargets,O.morphNormals=L.morphNormals,O.morphColors=L.morphColors,O.morphTargetsCount=L.morphTargetsCount,O.numClippingPlanes=L.numClippingPlanes,O.numIntersection=L.numClipIntersection,O.vertexAlphas=L.vertexAlphas,O.vertexTangents=L.vertexTangents,O.toneMapping=L.toneMapping}function Jo(p,L,O,F,D){L.isScene!==!0&&(L=Te),Be.resetTextureUnits();const j=L.fog,le=F.isMeshStandardMaterial?L.environment:null,pe=N===null?E.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:xi,de=(F.isMeshStandardMaterial?st:ft).get(F.envMap||le),Ce=F.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Le=!!O.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),be=!!O.morphAttributes.position,He=!!O.morphAttributes.normal,qe=!!O.morphAttributes.color;let rt=Jt;F.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(rt=E.toneMapping);const $e=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ye=$e!==void 0?$e.length:0,Ae=_e.get(F),nt=l.state.lights;if(Fe===!0&&(V===!0||p!==S)){const _t=p===S&&F.id===v;ie.setState(F,p,_t)}let Ve=!1;F.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==nt.state.version||Ae.outputColorSpace!==pe||D.isBatchedMesh&&Ae.batching===!1||!D.isBatchedMesh&&Ae.batching===!0||D.isBatchedMesh&&Ae.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Ae.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Ae.instancing===!1||!D.isInstancedMesh&&Ae.instancing===!0||D.isSkinnedMesh&&Ae.skinning===!1||!D.isSkinnedMesh&&Ae.skinning===!0||D.isInstancedMesh&&Ae.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Ae.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Ae.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Ae.instancingMorph===!1&&D.morphTexture!==null||Ae.envMap!==de||F.fog===!0&&Ae.fog!==j||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ie.numPlanes||Ae.numIntersection!==ie.numIntersection)||Ae.vertexAlphas!==Ce||Ae.vertexTangents!==Le||Ae.morphTargets!==be||Ae.morphNormals!==He||Ae.morphColors!==qe||Ae.toneMapping!==rt||Ae.morphTargetsCount!==Ye)&&(Ve=!0):(Ve=!0,Ae.__version=F.version);let bt=Ae.currentProgram;Ve===!0&&(bt=ai(F,L,D));let En=!1,At=!1,In=!1;const it=bt.getUniforms(),wt=Ae.uniforms;if(ge.useProgram(bt.program)&&(En=!0,At=!0,In=!0),F.id!==v&&(v=F.id,At=!0),En||S!==p){ge.buffers.depth.getReversed()&&p.reversedDepth!==!0&&(p._reversedDepth=!0,p.updateProjectionMatrix()),it.setValue(R,"projectionMatrix",p.projectionMatrix),it.setValue(R,"viewMatrix",p.matrixWorldInverse);const Et=it.map.cameraPosition;Et!==void 0&&Et.setValue(R,he.setFromMatrixPosition(p.matrixWorld)),Pe.logarithmicDepthBuffer&&it.setValue(R,"logDepthBufFC",2/(Math.log(p.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&it.setValue(R,"isOrthographic",p.isOrthographicCamera===!0),S!==p&&(S=p,At=!0,In=!0)}if(D.isSkinnedMesh){it.setOptional(R,D,"bindMatrix"),it.setOptional(R,D,"bindMatrixInverse");const _t=D.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),it.setValue(R,"boneTexture",_t.boneTexture,Be))}D.isBatchedMesh&&(it.setOptional(R,D,"batchingTexture"),it.setValue(R,"batchingTexture",D._matricesTexture,Be),it.setOptional(R,D,"batchingIdTexture"),it.setValue(R,"batchingIdTexture",D._indirectTexture,Be),it.setOptional(R,D,"batchingColorTexture"),D._colorsTexture!==null&&it.setValue(R,"batchingColorTexture",D._colorsTexture,Be));const Ct=O.morphAttributes;if((Ct.position!==void 0||Ct.normal!==void 0||Ct.color!==void 0)&&ee.update(D,O,bt),(At||Ae.receiveShadow!==D.receiveShadow)&&(Ae.receiveShadow=D.receiveShadow,it.setValue(R,"receiveShadow",D.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(wt.envMap.value=de,wt.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&L.environment!==null&&(wt.envMapIntensity.value=L.environmentIntensity),At&&(it.setValue(R,"toneMappingExposure",E.toneMappingExposure),Ae.needsLights&&es(wt,In),j&&F.fog===!0&&$.refreshFogUniforms(wt,j),$.refreshMaterialUniforms(wt,F,H,ne,l.state.transmissionRenderTarget[p.id]),pi.upload(R,ka(Ae),wt,Be)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(pi.upload(R,ka(Ae),wt,Be),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&it.setValue(R,"center",D.center),it.setValue(R,"modelViewMatrix",D.modelViewMatrix),it.setValue(R,"normalMatrix",D.normalMatrix),it.setValue(R,"modelMatrix",D.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const _t=F.uniformsGroups;for(let Et=0,yi=_t.length;Et<yi;Et++){const sn=_t[Et];Oe.update(sn,bt),Oe.bind(sn,bt)}}return bt}function es(p,L){p.ambientLightColor.needsUpdate=L,p.lightProbe.needsUpdate=L,p.directionalLights.needsUpdate=L,p.directionalLightShadows.needsUpdate=L,p.pointLights.needsUpdate=L,p.pointLightShadows.needsUpdate=L,p.spotLights.needsUpdate=L,p.spotLightShadows.needsUpdate=L,p.rectAreaLights.needsUpdate=L,p.hemisphereLights.needsUpdate=L}function ts(p){return p.isMeshLambertMaterial||p.isMeshToonMaterial||p.isMeshPhongMaterial||p.isMeshStandardMaterial||p.isShadowMaterial||p.isShaderMaterial&&p.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(p,L,O){const F=_e.get(p);F.__autoAllocateDepthBuffer=p.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),_e.get(p.texture).__webglTexture=L,_e.get(p.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:O,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(p,L){const O=_e.get(p);O.__webglFramebuffer=L,O.__useDefaultFramebuffer=L===void 0};const ns=R.createFramebuffer();this.setRenderTarget=function(p,L=0,O=0){N=p,C=L,U=O;let F=!0,D=null,j=!1,le=!1;if(p){const de=_e.get(p);if(de.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(R.FRAMEBUFFER,null),F=!1;else if(de.__webglFramebuffer===void 0)Be.setupRenderTarget(p);else if(de.__hasExternalTextures)Be.rebindTextures(p,_e.get(p.texture).__webglTexture,_e.get(p.depthTexture).__webglTexture);else if(p.depthBuffer){const be=p.depthTexture;if(de.__boundDepthTexture!==be){if(be!==null&&_e.has(be)&&(p.width!==be.image.width||p.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(p)}}const Ce=p.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(le=!0);const Le=_e.get(p).__webglFramebuffer;p.isWebGLCubeRenderTarget?(Array.isArray(Le[L])?D=Le[L][O]:D=Le[L],j=!0):p.samples>0&&Be.useMultisampledRTT(p)===!1?D=_e.get(p).__webglMultisampledFramebuffer:Array.isArray(Le)?D=Le[O]:D=Le,P.copy(p.viewport),B.copy(p.scissor),W=p.scissorTest}else P.copy(Re).multiplyScalar(H).floor(),B.copy(Ie).multiplyScalar(H).floor(),W=Je;if(O!==0&&(D=ns),ge.bindFramebuffer(R.FRAMEBUFFER,D)&&F&&ge.drawBuffers(p,D),ge.viewport(P),ge.scissor(B),ge.setScissorTest(W),j){const de=_e.get(p.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+L,de.__webglTexture,O)}else if(le){const de=L;for(let Ce=0;Ce<p.textures.length;Ce++){const Le=_e.get(p.textures[Ce]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ce,Le.__webglTexture,O,de)}}else if(p!==null&&O!==0){const de=_e.get(p.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,de.__webglTexture,O)}v=-1},this.readRenderTargetPixels=function(p,L,O,F,D,j,le,pe=0){if(!(p&&p.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=_e.get(p).__webglFramebuffer;if(p.isWebGLCubeRenderTarget&&le!==void 0&&(de=de[le]),de){ge.bindFramebuffer(R.FRAMEBUFFER,de);try{const Ce=p.textures[pe],Le=Ce.format,be=Ce.type;if(!Pe.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=p.width-F&&O>=0&&O<=p.height-D&&(p.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+pe),R.readPixels(L,O,F,D,Me.convert(Le),Me.convert(be),j))}finally{const Ce=N!==null?_e.get(N).__webglFramebuffer:null;ge.bindFramebuffer(R.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(p,L,O,F,D,j,le,pe=0){if(!(p&&p.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=_e.get(p).__webglFramebuffer;if(p.isWebGLCubeRenderTarget&&le!==void 0&&(de=de[le]),de)if(L>=0&&L<=p.width-F&&O>=0&&O<=p.height-D){ge.bindFramebuffer(R.FRAMEBUFFER,de);const Ce=p.textures[pe],Le=Ce.format,be=Ce.type;if(!Pe.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,He),R.bufferData(R.PIXEL_PACK_BUFFER,j.byteLength,R.STREAM_READ),p.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+pe),R.readPixels(L,O,F,D,Me.convert(Le),Me.convert(be),0);const qe=N!==null?_e.get(N).__webglFramebuffer:null;ge.bindFramebuffer(R.FRAMEBUFFER,qe);const rt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await ss(R,rt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,He),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,j),R.deleteBuffer(He),R.deleteSync(rt),j}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(p,L=null,O=0){const F=Math.pow(2,-O),D=Math.floor(p.image.width*F),j=Math.floor(p.image.height*F),le=L!==null?L.x:0,pe=L!==null?L.y:0;Be.setTexture2D(p,0),R.copyTexSubImage2D(R.TEXTURE_2D,O,0,0,le,pe,D,j),ge.unbindTexture()};const is=R.createFramebuffer(),as=R.createFramebuffer();this.copyTextureToTexture=function(p,L,O=null,F=null,D=0,j=null){j===null&&(D!==0?(na("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),j=D,D=0):j=0);let le,pe,de,Ce,Le,be,He,qe,rt;const $e=p.isCompressedTexture?p.mipmaps[j]:p.image;if(O!==null)le=O.max.x-O.min.x,pe=O.max.y-O.min.y,de=O.isBox3?O.max.z-O.min.z:1,Ce=O.min.x,Le=O.min.y,be=O.isBox3?O.min.z:0;else{const Ct=Math.pow(2,-D);le=Math.floor($e.width*Ct),pe=Math.floor($e.height*Ct),p.isDataArrayTexture?de=$e.depth:p.isData3DTexture?de=Math.floor($e.depth*Ct):de=1,Ce=0,Le=0,be=0}F!==null?(He=F.x,qe=F.y,rt=F.z):(He=0,qe=0,rt=0);const Ye=Me.convert(L.format),Ae=Me.convert(L.type);let nt;L.isData3DTexture?(Be.setTexture3D(L,0),nt=R.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Be.setTexture2DArray(L,0),nt=R.TEXTURE_2D_ARRAY):(Be.setTexture2D(L,0),nt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,L.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,L.unpackAlignment);const Ve=R.getParameter(R.UNPACK_ROW_LENGTH),bt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),En=R.getParameter(R.UNPACK_SKIP_PIXELS),At=R.getParameter(R.UNPACK_SKIP_ROWS),In=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,$e.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,$e.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ce),R.pixelStorei(R.UNPACK_SKIP_ROWS,Le),R.pixelStorei(R.UNPACK_SKIP_IMAGES,be);const it=p.isDataArrayTexture||p.isData3DTexture,wt=L.isDataArrayTexture||L.isData3DTexture;if(p.isDepthTexture){const Ct=_e.get(p),_t=_e.get(L),Et=_e.get(Ct.__renderTarget),yi=_e.get(_t.__renderTarget);ge.bindFramebuffer(R.READ_FRAMEBUFFER,Et.__webglFramebuffer),ge.bindFramebuffer(R.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let sn=0;sn<de;sn++)it&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_e.get(p).__webglTexture,D,be+sn),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_e.get(L).__webglTexture,j,rt+sn)),R.blitFramebuffer(Ce,Le,le,pe,He,qe,le,pe,R.DEPTH_BUFFER_BIT,R.NEAREST);ge.bindFramebuffer(R.READ_FRAMEBUFFER,null),ge.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(D!==0||p.isRenderTargetTexture||_e.has(p)){const Ct=_e.get(p),_t=_e.get(L);ge.bindFramebuffer(R.READ_FRAMEBUFFER,is),ge.bindFramebuffer(R.DRAW_FRAMEBUFFER,as);for(let Et=0;Et<de;Et++)it?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ct.__webglTexture,D,be+Et):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ct.__webglTexture,D),wt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_t.__webglTexture,j,rt+Et):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,_t.__webglTexture,j),D!==0?R.blitFramebuffer(Ce,Le,le,pe,He,qe,le,pe,R.COLOR_BUFFER_BIT,R.NEAREST):wt?R.copyTexSubImage3D(nt,j,He,qe,rt+Et,Ce,Le,le,pe):R.copyTexSubImage2D(nt,j,He,qe,Ce,Le,le,pe);ge.bindFramebuffer(R.READ_FRAMEBUFFER,null),ge.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else wt?p.isDataTexture||p.isData3DTexture?R.texSubImage3D(nt,j,He,qe,rt,le,pe,de,Ye,Ae,$e.data):L.isCompressedArrayTexture?R.compressedTexSubImage3D(nt,j,He,qe,rt,le,pe,de,Ye,$e.data):R.texSubImage3D(nt,j,He,qe,rt,le,pe,de,Ye,Ae,$e):p.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,j,He,qe,le,pe,Ye,Ae,$e.data):p.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,j,He,qe,$e.width,$e.height,Ye,$e.data):R.texSubImage2D(R.TEXTURE_2D,j,He,qe,le,pe,Ye,Ae,$e);R.pixelStorei(R.UNPACK_ROW_LENGTH,Ve),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,bt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,En),R.pixelStorei(R.UNPACK_SKIP_ROWS,At),R.pixelStorei(R.UNPACK_SKIP_IMAGES,In),j===0&&L.generateMipmaps&&R.generateMipmap(nt),ge.unbindTexture()},this.initRenderTarget=function(p){_e.get(p).__webglFramebuffer===void 0&&Be.setupRenderTarget(p)},this.initTexture=function(p){p.isCubeTexture?Be.setTextureCube(p,0):p.isData3DTexture?Be.setTexture3D(p,0):p.isDataArrayTexture||p.isCompressedArrayTexture?Be.setTexture2DArray(p,0):Be.setTexture2D(p,0),ge.unbindTexture()},this.resetState=function(){C=0,U=0,N=null,ge.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return za}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(n),t.unpackColorSpace=lt._getUnpackColorSpace()}}const mi=256,zn=6378137,an=85.0511287798066,Mh=Math.PI*zn,xh=2*Mh,Wn=e=>((e+180)%360+360)%360-180,eo=e=>{const t=Math.max(-an,Math.min(an,e))*Math.PI/180;return zn*Math.log(Math.tan(Math.PI/4+t/2))};function Th(e,n,t){if(!Number.isInteger(t)||t<0||t>30)throw new RangeError("Zoom must be an integer from 0 to 30");const i=2**t,a=Math.floor((Wn(n)+180)/360*i),s=Math.max(-an,Math.min(an,e))*Math.PI/180,o=Math.floor((1-Math.asinh(Math.tan(s))/Math.PI)/2*i);return{x:(a%i+i)%i,y:Math.max(0,Math.min(i-1,o)),z:t,n:i}}function bh(e,n,t){const i=Th(e,n,t),a=mi*i.n,r=(Wn(n)+180)/360*a,o=Math.max(-an,Math.min(an,e))*Math.PI/180,h=(1-Math.asinh(Math.tan(o))/Math.PI)/2*a;return{tile:i,u:r/mi-i.x,v:h/mi-i.y}}class Ah{zoom;anchor;originTile;anchorU;anchorV;latitudeScale;tileSpan;originNorthing;constructor(n,t=12){if(!Number.isFinite(n.lat)||!Number.isFinite(n.lon)||Math.abs(n.lat)>90)throw new RangeError("Anchor must be a valid WGS84 latitude/longitude");this.anchor={lat:Math.max(-an,Math.min(an,n.lat)),lon:Wn(n.lon)},this.zoom=t;const i=bh(this.anchor.lat,this.anchor.lon,t);this.originTile=i.tile,this.anchorU=i.u,this.anchorV=i.v,this.latitudeScale=Math.cos(this.anchor.lat*Math.PI/180),this.originNorthing=eo(this.anchor.lat),this.tileSpan=xh/this.originTile.n*this.latitudeScale}toLocal(n){const t=Wn(n.lon-this.anchor.lon),i=zn*t*Math.PI/180,a=eo(n.lat)-this.originNorthing;return{x:i*this.latitudeScale,z:a*this.latitudeScale}}toGeo(n){const t=Wn(this.anchor.lon+n.x/(zn*this.latitudeScale)*180/Math.PI),i=this.originNorthing+n.z/this.latitudeScale;return{lon:t,lat:(2*Math.atan(Math.exp(i/zn))-Math.PI/2)*180/Math.PI}}tileOrigin(n,t){return{x:(n-this.anchorU)*this.tileSpan,z:(t+this.anchorV)*this.tileSpan}}tileOffsetAt(n,t){const i=this.anchorU+n/this.tileSpan,a=this.anchorV-t/this.tileSpan,r=Math.floor(i),s=Math.floor(a);return{dx:r>this.originTile.n/2?r-this.originTile.n:r<-this.originTile.n/2?r+this.originTile.n:r,dz:-s||0,u:i-r,v:a-s}}tileAddress(n,t){const i=this.originTile.n;return{x:((this.originTile.x+n)%i+i)%i,y:Math.max(0,Math.min(i-1,this.originTile.y-t)),z:this.zoom,n:i}}}const qo=[{name:"Midtown Manhattan, New York",lat:40.758,lon:-73.9855,terrain:"URBAN JUNGLE"},{name:"Moab, Utah",lat:38.5733,lon:-109.5498,terrain:"RED ROCK COUNTRY"},{name:"Mount Kisco, New York",lat:41.204,lon:-73.727,terrain:"WESTCHESTER BACKROADS"},{name:"Grand Canyon",lat:36.1069,lon:-112.1129,terrain:"THE BIG DROP"},{name:"Mount Everest",lat:27.9881,lon:86.925,terrain:"ROOF OF THE WORLD"},{name:"San Francisco",lat:37.7749,lon:-122.4194,terrain:"HILL CLIMBER"},{name:"Tokyo, Japan",lat:35.6762,lon:139.6503,terrain:"NEON TRAILS"},{name:"Sahara Desert",lat:23.4162,lon:25.6628,terrain:"ENDLESS DUNES"},{name:"Swiss Alps",lat:46.8182,lon:9.2275,terrain:"HIGH ALTITUDE"}];function Rh(e){const n=e.trim().match(/^\s*(-?\d+(?:\.\d+)?)\s*[, ]\s*(-?\d+(?:\.\d+)?)\s*$/);if(!n)return null;const t=Number(n[1]),i=Number(n[2]);return Math.abs(t)<=90&&Math.abs(i)<=180?{name:`${t.toFixed(4)}, ${i.toFixed(4)}`,lat:t,lon:i}:null}let to=0;const zi=new Map;async function wh(e){const n=Rh(e);if(n)return[n];const t=e.toLowerCase().trim();if(!t)return[];if(zi.has(t))return zi.get(t);const i=Math.max(0,1100-(Date.now()-to));i&&await new Promise(h=>setTimeout(h,i)),to=Date.now();const a=new URL("https://nominatim.openstreetmap.org/search");a.search=new URLSearchParams({q:e,format:"jsonv2",limit:"5"}).toString();const r=await fetch(a,{headers:{Accept:"application/json"}});if(!r.ok)throw new Error(`Location search unavailable (${r.status})`);const o=(await r.json()).map(h=>({name:h.display_name.split(",").slice(0,3).join(",").trim(),lat:+h.lat,lon:+h.lon}));return zi.set(t,o),o}function Ch(e,n,t,i){const a=Math.max(0,Math.min(n-1,t*(n-1))),r=Math.max(0,Math.min(n-1,i*(n-1))),s=Math.floor(a),o=Math.floor(r),h=Math.min(n-1,s+1),u=Math.min(n-1,o+1),m=a-s,c=r-o,_=(g,T)=>e[T*n+g]??0;return(_(s,o)*(1-m)+_(h,o)*m)*(1-c)+(_(s,u)*(1-m)+_(h,u)*m)*c}function no(e,n,t){const i=new Float32Array((t+1)**2);for(let a=0;a<=t;a++)for(let r=0;r<=t;r++)i[a*(t+1)+r]=Ch(e,n,r/t,a/t);return i}function io(e,n,t,i){const a=Math.max(0,Math.min(n,t*n)),r=Math.max(0,Math.min(n,i*n)),s=Math.min(n-1,Math.floor(a)),o=Math.min(n-1,Math.floor(r)),h=a-s,u=r-o,m=n+1,c=e[o*m+s]??0,_=e[o*m+s+1]??0,g=e[(o+1)*m+s]??0,T=e[(o+1)*m+s+1]??0;return h>=u?c*(1-h)+_*(h-u)+T*u:c*(1-u)+T*h+g*(u-h)}function yh(e){const n=new Map,t=new Set;for(const i of e){const a=i.segments+1;for(let r=0;r<=i.segments;r++)for(const[s,o]of[[r,0],[r,i.segments],[0,r],[i.segments,r]]){const h=o*a+s,u=`${i.dx*i.segments+s},${i.dz*i.segments-o}`,m=n.get(u)??[];m.push({tile:i,index:h}),n.set(u,m)}}for(const i of n.values()){if(i.length<2)continue;const a=i.reduce((r,s)=>r+s.tile.grid[s.index],0)/i.length;for(const r of i)r.tile.grid[r.index]!==a&&(r.tile.grid[r.index]=a,t.add(r.tile))}return t}const Wi=12,Pt=mi,Ph=36,$t=new Map;function ao(e,n,t){const i=`${t}/${e}/${n}`;if($t.has(i)){const r=$t.get(i);return $t.delete(i),$t.set(i,r),r}const a=(async()=>{try{const r=new Image;r.crossOrigin="anonymous",r.src=`https://s3.amazonaws.com/elevation-tiles-prod/terrarium/${t}/${e}/${n}.png`,await new Promise((m,c)=>{r.onload=()=>m(),r.onerror=()=>c(new Error("terrain tile unavailable"))});const s=document.createElement("canvas");s.width=Pt,s.height=Pt;const o=s.getContext("2d",{willReadFrequently:!0});if(!o)throw new Error("canvas unavailable");o.drawImage(r,0,0,Pt,Pt);const h=o.getImageData(0,0,Pt,Pt).data,u=new Float32Array(Pt*Pt);for(let m=0;m<u.length;m++)u[m]=h[m*4]*256+h[m*4+1]+h[m*4+2]/256-32768;return{heights:u}}catch{return{heights:new Float32Array(Pt*Pt)}}})();for($t.set(i,a);$t.size>Ph;)$t.delete($t.keys().next().value);return a}class Lh{group=new qt;place=null;frame=null;heightSampleMs=0;heightSamples=0;tileBuildMs=0;tileBuilds=0;detailQuality=1;baseline=0;tiles=new Map;requests=new Set;coverage={x:NaN,z:NaN};generation=0;centerSegments;activeTerrainShader=null;biome={desert:1,alpine:0};material;constructor(n=127){this.centerSegments=n,this.material=new mt({color:16777215,roughness:.96,metalness:0,vertexColors:!0}),this.material.onBeforeCompile=t=>{t.uniforms.uRumbleDesert={value:this.biome.desert},t.uniforms.uRumbleAlpine={value:this.biome.alpine},t.uniforms.uRumbleDetail={value:this.detailQuality},this.activeTerrainShader=t,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.78, 0.81, 0.77), rumbleAlpineSnow * 0.82);`)},this.material.customProgramCacheKey=()=>"rumble-terrain-slope-biome-v1"}async load(n){this.clear();const t=++this.generation;this.place=n,this.frame=new Ah(n,Wi);const i=n.name.toLowerCase();this.biome.desert=/moab|grand canyon|sahara|utah|arizona/i.test(i)?1:0,this.biome.alpine=/alps|everest|mountain|swiss/i.test(i)?1:0,this.activeTerrainShader&&(this.activeTerrainShader.uniforms.uRumbleDesert.value=this.biome.desert,this.activeTerrainShader.uniforms.uRumbleAlpine.value=this.biome.alpine);const a=this.frame.tileAddress(0,0),r=await ao(a.x,a.y,Wi);if(t!==this.generation)return;const s=no(r.heights,Pt,this.centerSegments);this.baseline=io(s,this.centerSegments,this.frame.anchorU,this.frame.anchorV),this.install(0,0,r,this.centerSegments,s),this.ensureRegion(0,0)}key(n,t){return`${n},${t}`}address(n,t){return this.frame.tileAddress(n,t)}async ensureRegion(n,t){const i=this.frame;if(!i)return;const a=i.tileOffsetAt(n,t),r=a.dx,s=a.dz;if(this.coverage.x===r&&this.coverage.z===s)return;this.coverage={x:r,z:s};const o=this.generation,h=[],u=this.centerSegments;for(let m=s-1;m<=s+1;m++)for(let c=r-1;c<=r+1;c++){const _=this.key(c,m),g=c===r&&m===s?this.centerSegments:u,T=this.tiles.get(_);T&&T.segments!==g&&(this.group.remove(T.mesh),T.mesh.geometry.dispose(),this.tiles.delete(_));const x=`${o}:${_}`;if(this.tiles.has(_)||this.requests.has(x))continue;this.requests.add(x);const d=this.address(c,m);h.push(ao(d.x,d.y,Wi).then(l=>{o===this.generation&&Math.abs(c-this.coverage.x)<=1&&Math.abs(m-this.coverage.z)<=1&&this.install(c,m,l,g)}).finally(()=>this.requests.delete(x)))}for(const[m,c]of this.tiles)(Math.abs(c.dx-r)>1||Math.abs(c.dz-s)>1)&&(this.group.remove(c.mesh),c.mesh.geometry.dispose(),this.tiles.delete(m));await Promise.all(h)}install(n,t,i,a=63,r){const s=this.key(n,t);if(this.tiles.has(s))return;const o=performance.now(),h=this.frame,u=r??no(i.heights,Pt,a),m=new tn,c=new Float32Array((a+1)**2*3),_=[],g=[];let T=1/0,x=-1/0;for(const E of u)T=Math.min(T,E),x=Math.max(x,E);const d=/moab|grand canyon|sahara|utah|arizona/i.test(this.place?.name??""),l=(d?["#d0b587","#b99360","#977046","#796044"]:["#c9c1a6","#a49c75","#758557","#657355"]).map(E=>new We(E)),A=h.tileOrigin(n,t);for(let E=0;E<=a;E++)for(let w=0;w<=a;w++){const C=E*(a+1)+w,U=u[C],N=(U-T)/Math.max(1,x-T);c[C*3]=A.x+w/a*h.tileSpan,c[C*3+1]=St.clamp((U-this.baseline)*1.25,-900,1800),c[C*3+2]=A.z-E/a*h.tileSpan;const v=l[N>.76?0:N>.49?1:N>.22?2:3];_.push(v.r,v.g,v.b)}for(let E=0;E<a;E++)for(let w=0;w<a;w++){const C=E*(a+1)+w,U=C+1,N=C+a+1,v=N+1;g.push(C,U,v,C,v,N)}m.setIndex(g),m.setAttribute("position",new en(c,3)),m.setAttribute("color",new Qn(_,3)),m.computeVertexNormals();const b=new ot(m,this.material);b.receiveShadow=!0,b.userData.kind="terrain",this.group.add(b),this.tiles.set(s,{data:i,grid:u,mesh:b,segments:a,dx:n,dz:t}),this.reconcileSharedEdges(),this.tileBuildMs+=performance.now()-o,this.tileBuilds++}reconcileSharedEdges(){const n=yh(Array.from(this.tiles.values()));for(const t of n)this.rebuildGeometry(t)}rebuildGeometry(n){const{segments:t,grid:i,dx:a,dz:r}=n,s=this.frame,o=new tn,h=new Float32Array((t+1)**2*3),u=[],m=[];let c=1/0,_=-1/0;for(const d of i)c=Math.min(c,d),_=Math.max(_,d);const g=/moab|grand canyon|sahara|utah|arizona/i.test(this.place?.name??""),T=(g?["#d0b587","#b99360","#977046","#796044"]:["#c9c1a6","#a49c75","#758557","#657355"]).map(d=>new We(d)),x=s.tileOrigin(a,r);for(let d=0;d<=t;d++)for(let l=0;l<=t;l++){const A=d*(t+1)+l,b=i[A],E=(b-c)/Math.max(1,_-c);h[A*3]=x.x+l/t*s.tileSpan,h[A*3+1]=St.clamp((b-this.baseline)*1.25,-900,1800),h[A*3+2]=x.z-d/t*s.tileSpan;const w=T[E>.76?0:E>.49?1:E>.22?2:3];u.push(w.r,w.g,w.b)}for(let d=0;d<t;d++)for(let l=0;l<t;l++){const A=d*(t+1)+l,b=A+1,E=A+t+1,w=E+1;m.push(A,b,w,A,w,E)}o.setIndex(m),o.setAttribute("position",new en(h,3)),o.setAttribute("color",new Qn(u,3)),o.computeVertexNormals(),n.mesh.geometry.dispose(),n.mesh.geometry=o}heightAt(n,t){if(!this.frame||!this.tiles.size)return 0;const i=performance.now();let a=this.frame.tileOffsetAt(n,t);(a.dx!==this.coverage.x||a.dz!==this.coverage.z)&&this.ensureRegion(n,t);let r=this.tiles.get(this.key(a.dx,a.dz));if(r||(r=this.tiles.get(this.key(0,0)),a=this.frame.tileOffsetAt(n,t)),!r)return 0;const s=r===this.tiles.get(this.key(a.dx,a.dz))?a.u:St.clamp((n-this.frame.tileOrigin(r.dx,r.dz).x)/this.frame.tileSpan,0,1),o=r===this.tiles.get(this.key(a.dx,a.dz))?a.v:St.clamp((this.frame.tileOrigin(r.dx,r.dz).z-t)/this.frame.tileSpan,0,1),h=(io(r.grid,r.segments,s,o)-this.baseline)*1.25;return this.heightSamples++,this.heightSampleMs+=performance.now()-i,h}takePerformanceSample(){const n={heightSamples:this.heightSamples,heightSampleMs:this.heightSampleMs,tileBuilds:this.tileBuilds,tileBuildMs:this.tileBuildMs};return this.heightSamples=0,this.heightSampleMs=0,this.tileBuilds=0,this.tileBuildMs=0,n}setVisualQuality(n){this.detailQuality=n==="low"?.45:n==="medium"?.72:1,this.activeTerrainShader&&(this.activeTerrainShader.uniforms.uRumbleDetail.value=this.detailQuality)}clear(){this.generation++;for(const n of this.tiles.values())this.group.remove(n.mesh),n.mesh.geometry.dispose();this.tiles.clear(),this.requests.clear(),this.coverage={x:NaN,z:NaN}}dispose(){this.clear(),this.material.dispose()}}function yn(e,n){return e.map(([t,i])=>n.toLocal({lat:t,lon:i}))}const ro=new Map;let Xi=null;const qi=(e="none")=>({buildings:[],roads:[],source:e});function Dh(e,n,t){return t.areas.find(i=>n>=i.bbox[0]&&e>=i.bbox[1]&&n<=i.bbox[2]&&e<=i.bbox[3])}function Tn(e){if(!e)return 0;const n=e.trim().replace(",",".").match(/^([+-]?(?:\d+(?:\.\d*)?|\.\d+))\s*(m|meters?|ft|feet|foot|')?$/i);if(!n)return 0;const t=Number(n[1]);return Number.isFinite(t)?t*(/^(ft|feet|foot|')$/i.test(n[2]??"")?.3048:1):0}function Uh(e,n=0){const t=Tn(e.height)||Tn(e["building:height"]),i=Number.parseFloat(e["building:levels"]??e.levels??""),a=Number.isFinite(i)&&i>0?i*3.2:0,r=Tn(e["roof:height"]),s=t>0?t:a>0?a+r:Ih(e,n),o=Tn(e.min_height)||Tn(e["building:min_height"]);return{height:s,minHeight:o,source:t>0?"mapped height":a>0?"levels estimate":"type estimate"}}function Yo(e){const n=(e.building??"").toLowerCase(),t=`${e.amenity??""} ${e.shop??""} ${e.office??""} ${e.tourism??""}`.toLowerCase();return/industrial|warehouse|factory|manufacture/.test(`${n} ${e.industrial??""}`)?"industrial":/commercial|retail|office|hotel|apartments|civic|university|public/.test(n)||/hotel|motel|townhall|library|school|college|university|hospital|commercial|retail/.test(t)?"commercial":/house|residential|detached|terrace|semidetached_house|bungalow/.test(n)||/residential/.test(e["building:use"]??"")?"residential":"other"}function Ih(e,n){switch(Yo(e)){case"commercial":return 14;case"industrial":return 8;case"residential":return 7.5;default:return n>1600?18:n>500?12:n>120?7:4.5}}function Sn(e){const n=(e.highway??"").toLowerCase();return!n||e.tunnel&&e.tunnel!=="no"||e.bridge&&e.bridge!=="no"?null:/^(motorway|motorway_link|trunk|trunk_link|primary|primary_link|secondary|secondary_link)$/.test(n)?"major":/^(residential|tertiary|tertiary_link|unclassified|living_street|service|road)$/.test(n)?"street":n==="track"?"track":/^(path|footway|bridleway|cycleway|pedestrian|steps)$/.test(n)?/dirt|gravel|ground|earth|sand|mud/.test(e.surface??"")?"track":"path":null}function Nh(e,n=Sn(e)){const t=Tn(e.width);if(t>0)return St.clamp(t,.8,18);const i=(e.surface??"").toLowerCase();return n==="major"?9:n==="street"?5.5:n==="path"?/^(steps|footway)$/.test(e.highway??"")?1.8:2.4:n==="track"?/gravel|dirt|ground|earth|sand|mud/.test(i)?3.4:2.6:0}function Oh(e,n,t,i=120){const a=[],r=new Set;for(const A of e){const b=A.tags["name:en"]??A.tags.name;if(!b||!Sn(A.tags)||Sn(A.tags)==="path"||A.coords.length<2)continue;const E=yn(A.coords,n).map(N=>new re(N.x,t(N.x,N.z)+.45,N.z));let w=0;for(let N=1;N<E.length;N++)w+=E[N].distanceTo(E[N-1]);if(w<30)continue;const C=E[Math.floor(E.length/2)],U=`${b.toLowerCase()}|${Math.round(C.x/90)}|${Math.round(C.z/90)}`;r.has(U)||(r.add(U),a.push({name:b.slice(0,42),points:E,center:C,length:w}))}a.sort((A,b)=>A.center.lengthSq()-b.center.lengthSq());const s=a.slice(0,Math.min(i,256));if(!s.length)return null;const o=128,h=32,u=8,m=document.createElement("canvas");m.width=o*u,m.height=h*Math.ceil(s.length/u);const c=m.getContext("2d");if(!c)return null;c.font="700 17px Arial, sans-serif",c.textAlign="center",c.textBaseline="middle",s.forEach((A,b)=>{const E=b%u*o+o/2,w=Math.floor(b/u)*h+h/2;c.lineJoin="round",c.lineWidth=5,c.strokeStyle="rgba(20,25,27,.9)",c.strokeText(A.name,E,w,o-8),c.fillStyle="rgba(255,255,245,.96)",c.fillText(A.name,E,w,o-8)});const _=new wl(m);_.colorSpace=Mo,_.minFilter=bn,_.generateMipmaps=!0;const g=[],T=[],x=[];s.forEach((A,b)=>{let E=A.points[0],w=A.points.at(-1);for(let Ie=0;Ie<A.points.length-1;Ie++)A.points[Ie].distanceTo(A.points[Ie+1])>E.distanceTo(w)*.6&&(E=A.points[Ie],w=A.points[Ie+1]);let C=w.x-E.x,U=w.z-E.z,N=Math.hypot(C,U)||1;C/=N,U/=N;const v=A.center,S=St.clamp(A.name.length*.43,5.5,13),P=1.15,B=-U*P,W=C*P,q=[[v.x-C*S-B,v.y,v.z-U*S-W],[v.x+C*S-B,v.y,v.z+U*S-W],[v.x+C*S+B,v.y,v.z+U*S+W],[v.x-C*S+B,v.y,v.z-U*S+W]],Y=b%u,z=Math.floor(b/u),ne=Y/u,H=(Y+1)/u,ue=1-(z+1)/Math.ceil(s.length/u),Se=1-z/Math.ceil(s.length/u);for(const Ie of q)g.push(...Ie);T.push(ne,ue,H,ue,H,Se,ne,Se);const Re=b*4;x.push(Re,Re+1,Re+2,Re,Re+2,Re+3)});const d=new tn;d.setAttribute("position",new Qn(g,3)),d.setAttribute("uv",new Qn(T,2)),d.setIndex(x);const l=new ot(d,new Ta({map:_,transparent:!0,depthWrite:!1,side:Lt,toneMapped:!1}));return l.name="osm-street-name-atlas",l.renderOrder=3,l.userData={kind:"osm-street-labels",labelCount:s.length,texture:_},l}async function Fh(e){Xi||(Xi=fetch("./geo/manifest.json").then(r=>r.ok?r.json():null).catch(()=>null));const n=await Xi;if(!n)return qi("coverage manifest unavailable");const t=Dh(e.lat,e.lon,n);if(!t)return qi();const i=ro.get(t.id);if(i)return i;const a=fetch(`./geo/${t.asset}`).then(async r=>{if(!r.ok)throw new Error(`Geographic package ${t.id} unavailable (${r.status})`);const s=await r.json();return{buildings:s.buildings??[],roads:s.roads??[],source:s.source??t.source,areaId:t.id}}).catch(()=>qi("geographic package unavailable"));return ro.set(t.id,a),a}const oo={major:new mt({color:3423038,roughness:.98,metalness:0}),street:new mt({color:4671818,roughness:1,metalness:0}),path:new mt({color:8749686,roughness:1,metalness:0}),track:new mt({color:9137486,roughness:1,metalness:0})},Bh={residential:11705472,commercial:9410456,industrial:7830390,other:10524549},so=Object.fromEntries(Object.entries(Bh).map(([e,n])=>[e,new mt({color:n,roughness:e==="commercial"?.72:.9,metalness:e==="commercial"?.08:0,side:Lt,emissive:n,emissiveIntensity:.06})]));function lo(e,n,t){const i=Sn(e.tags);if(!i||e.coords.length<2)return null;const a=yn(e.coords,n).filter(c=>Number.isFinite(c.x)&&Number.isFinite(c.z));if(a.length<2)return null;const r=Nh(e.tags,i),s=[],o=[];for(let c=0;c<a.length;c++){const _=a[Math.max(0,c-1)],g=a[Math.min(a.length-1,c+1)],T=g.x-_.x,x=g.z-_.z,d=Math.hypot(T,x)||1;let l=-x/d,A=T/d;if(c>0&&c<a.length-1){const b=a[c-1],E=a[c],w=a[c+1],C=Math.hypot(E.x-b.x,E.z-b.z)||1,U=Math.hypot(w.x-E.x,w.z-E.z)||1,N=-(E.z-b.z)/C-(w.z-E.z)/U,v=(E.x-b.x)/C+(w.x-E.x)/U,S=Math.hypot(N,v)||1;l=N/S,A=v/S;const P=Math.max(.45,Math.abs(l*(-x/d)+A*(T/d))),B=Math.min(r*.9,r*.5/P);s.push(new at(E.x+l*B,E.z+A*B)),o.push(new at(E.x-l*B,E.z-A*B))}else s.push(new at(a[c].x+l*r/2,a[c].z+A*r/2)),o.push(new at(a[c].x-l*r/2,a[c].z-A*r/2))}const h=[],u=(c,_)=>h.push(c.x,t(c.x,c.y)+_,c.y);for(let c=0;c<a.length-1;c++)u(s[c],.1),u(s[c+1],.1),u(o[c],.1),u(o[c],.1),u(s[c+1],.1),u(o[c+1],.1);const m=new tn;return m.setAttribute("position",new Qn(h,3)),{kind:i,geometry:m,width:r}}function Gh(e,n,t=60){let i=t*t,a;for(const r of e){const s=Sn(r.tags);if(!s||s==="path"||r.coords.length<2)continue;const o=yn(r.coords,n);for(let h=0;h<o.length-1;h++){const u=o[h],m=o[h+1],c=m.x-u.x,_=m.z-u.z,g=c*c+_*_;if(g<.01)continue;const T=St.clamp(-(u.x*c+u.z*_)/g,0,1),x=u.x+c*T,d=u.z+_*T,l=x*x+d*d;l<i&&(i=l,a=Math.atan2(c,_))}}return a}class Hh{group=new qt;roadsGroup=new qt;list=[];status={source:"none",buildings:0,roads:0,fallbacks:0,skippedRoads:0,message:"MAP DATA · LOADING"};loadToken=0;cellSize=256;cells=new Map;visibleBuildings=new Set;roads=[];labels=null;lastCullAt=0;lastCullX=Number.NaN;lastCullZ=Number.NaN;cellKey(n,t){return`${Math.floor(n/this.cellSize)},${Math.floor(t/this.cellSize)}`}updateVisibility(n,t,i=900,a=!1){const r=performance.now();if(!a&&(r-this.lastCullAt<350||Math.hypot(n-this.lastCullX,t-this.lastCullZ)<10))return;this.lastCullAt=r,this.lastCullX=n,this.lastCullZ=t;const s=Math.ceil(i/this.cellSize),o=Math.floor(n/this.cellSize),h=Math.floor(t/this.cellSize),u=new Set;for(let c=o-s;c<=o+s;c++)for(let _=h-s;_<=h+s;_++)for(const g of this.cells.get(`${c},${_}`)??[])u.add(g);const m=i*i;for(const c of[...this.visibleBuildings])!c.broken&&u.has(c)&&(c.x-n)**2+(c.z-t)**2<=m||(c.batch&&c.instanceId!==void 0&&c.batch.setVisibleAt(c.instanceId,!1),this.visibleBuildings.delete(c));for(const c of u)!c.broken&&(c.x-n)**2+(c.z-t)**2<=m&&!this.visibleBuildings.has(c)&&(c.batch&&c.instanceId!==void 0&&c.batch.setVisibleAt(c.instanceId,!0),this.visibleBuildings.add(c))}async load(n,t,i,a){this.reset(i);const r=this.loadToken,s=await Fh(n);if(r!==this.loadToken)return this.status;this.roads=s.roads;const o=new Map;let h=0;for(const T of s.buildings){const x=yn(T.coords,a).map(we=>new at(we.x,we.z));x.length>3&&x[0].distanceToSquared(x[x.length-1])<.01&&x.pop();const d=x.map(we=>we.x),l=x.map(we=>we.y);if(x.length<3)continue;const A=(Math.min(...d)+Math.max(...d))/2,b=(Math.min(...l)+Math.max(...l))/2,E=Math.max(2,Math.max(...d)-Math.min(...d)),w=Math.max(2,Math.max(...l)-Math.min(...l)),C=we=>yn(we,a).map(Fe=>new at(Fe.x-A,-(Fe.z-b))),U=we=>{const Fe=new Rl;return we.forEach((V,K)=>K?Fe.lineTo(V.x,V.y):Fe.moveTo(V.x,V.y)),Fe.closePath(),Fe},N=x.map(we=>new at(we.x-A,-(we.y-b))),v=new fa;N.forEach((we,Fe)=>Fe?v.lineTo(we.x,we.y):v.moveTo(we.x,we.y)),v.closePath();const S=(T.holes??[]).map(C).filter(we=>we.length>=3);for(const we of S)v.holes.push(U(we));const P=Yo(T.tags),B=Uh(T.tags,E*w),W=B.height,q=new Bo(v,{depth:1,bevelEnabled:!1,curveSegments:1});q.rotateX(-Math.PI/2),q.scale(1,W,1);const Y=so[P],z=new We(Y.color);if(T.tags["building:colour"]||T.tags.colour)try{z.set(T.tags["building:colour"]??T.tags.colour)}catch{}const ne=new ot(q,Y);ne.position.set(A,t(A,b)+B.minHeight,b),ne.castShadow=!0,ne.receiveShadow=!0,ne.userData={kind:"osm-building",osmId:T.id,tags:T.tags,category:P};const H=t(A,b),ue={id:T.id,source:"osm",category:P,mesh:ne,x:A,z:b,w:E,d:w,h:W,minHeight:B.minHeight,footprint:x,holes:S.map(we=>we.map(Fe=>new at(Fe.x+A,b-Fe.y))),tags:T.tags,baseY:H,broken:!1},Se=new We;Se.r=Y.color.r>0?z.r/Y.color.r:1,Se.g=Y.color.g>0?z.g/Y.color.g:1,Se.b=Y.color.b>0?z.b/Y.color.b:1,ue.mesh.userData.instanceColor=Se,this.list.push(ue);const Re=this.cellKey(A,b),Ie=this.cells.get(Re)??[];Ie.push(ue),this.cells.set(Re,Ie);const Je=o.get(P)??[];if(Je.push(ue),o.set(P,Je),++h%64===0&&(await new Promise(we=>requestAnimationFrame(()=>we())),r!==this.loadToken))return this.status}for(const[T,x]of o){const d=x.map(E=>E.mesh.geometry),l=d.reduce((E,w)=>E+w.getAttribute("position").count,0),A=d.reduce((E,w)=>E+(w.index?.count??w.getAttribute("position").count),0),b=new Al(x.length,l,Math.max(l,A),so[T]);b.name=`geographic-buildings-${T}`,b.castShadow=!0,b.receiveShadow=!0;for(const E of x){const w=E.mesh;w.updateMatrix();const C=b.addGeometry(w.geometry),U=b.addInstance(C);b.setMatrixAt(U,w.matrix),b.setColorAt(U,w.userData.instanceColor),E.batch=b,E.instanceId=U,E.mesh=b,E.renderVisible=!0,w.geometry.dispose()}b.computeBoundingBox(),b.computeBoundingSphere(),this.group.add(b)}for(const T of this.list)i?.addBuilding(T,T.baseY??0);this.updateVisibility(0,0,900,!0);let u=0,m=0;const c={major:[],street:[],path:[],track:[]};let _=0;for(const T of s.roads){const x=lo(T,a,t);if(!x){m++;continue}if(c[x.kind].push(x.geometry.getAttribute("position").array),x.geometry.dispose(),u++,++_%256===0&&(await new Promise(d=>requestAnimationFrame(()=>d())),r!==this.loadToken))return this.status}for(const T of["major","street","path","track"]){const x=c[T];if(!x.length)continue;const d=x.reduce((w,C)=>w+C.length,0),l=new Float32Array(d);let A=0;for(const w of x)l.set(w,A),A+=w.length;const b=new tn;b.setAttribute("position",new en(l,3)),b.computeVertexNormals();const E=new ot(b,oo[T]);E.name=`osm-road-${T}`,E.userData={kind:"osm-road",roadWays:x.length},E.frustumCulled=!0,this.roadsGroup.add(E)}this.labels=Oh(s.roads,a,t),this.labels&&this.roadsGroup.add(this.labels);const g=s.buildings.length>0||u>0;return this.status={source:g?"osm":"none",areaId:s.areaId,buildings:s.buildings.length,roads:u,fallbacks:0,skippedRoads:m,heading:Gh(s.roads,a),message:g?`OSM MAP · ${s.buildings.length} BUILDINGS · ${u} STREET/PATH LINES`:s.source==="none"?"TERRAIN ONLY · NO PACKAGED MAP DATA":"MAP DATA PACKAGE UNAVAILABLE · TERRAIN ONLY"},this.status}nearestStreetName(n,t,i,a=45){let r=a*a,s="";for(const o of this.roads){const h=o.tags["name:en"]??o.tags.name;if(!h||!Sn(o.tags)||Sn(o.tags)==="path")continue;const u=yn(o.coords,i);for(let m=0;m<u.length-1;m++){const c=u[m],_=u[m+1],g=_.x-c.x,T=_.z-c.z,x=g*g+T*T;if(x<.01)continue;const d=St.clamp(((n-c.x)*g+(t-c.z)*T)/x,0,1),l=c.x+g*d,A=c.z+T*d,b=(l-n)**2+(A-t)**2;b<r&&(r=b,s=h)}}return s}addFixtureRoad(n,t){const i=[-12,140].map(s=>{const o=n.toGeo({x:0,z:s});return[o.lat,o.lon]}),a=lo({tags:{highway:"track",surface:"dirt",width:"4"},coords:i},n,t);if(!a)return null;a.geometry.computeVertexNormals();const r=new ot(a.geometry,oo.track);return r.name="fixture-dirt-track",r.userData={kind:"fixture-road",source:"fixture"},this.roadsGroup.add(r),r}addPracticeCourse(n,t){return this.list.some(i=>i.source==="fallback")?0:(this.addBarriers(n,t),this.status.fallbacks=this.list.filter(i=>i.source==="fallback").length,this.status.fallbacks)}addBarriers(n,t){const i=new mt({color:13132085,roughness:.8});for(let a=0;a<4;a++)for(let r=-2;r<=2;r++){if((a+r)%3===0)continue;const s=3+(a*7+r*11+30)%3,o=3,h=2.5+(a*13+r*5+40)%3,u=r*5,m=28+a*9,c=new ot(new nn(s,h,o),i.clone());c.position.set(u,n(u,m)+h/2,m),c.castShadow=!0,c.receiveShadow=!0,c.userData={kind:"destructible-barrier",ownedMaterial:!0},this.group.add(c);const _={id:`practice-${a}-${r}`,source:"fallback",category:"practice",mesh:c,x:u,z:m,w:s,d:o,h,broken:!1};_.baseY=n(u,m),this.list.push(_),t?.addBuilding(_,_.baseY)}}addFixtureBuilding(n,t,i,a,r,s={w:7,d:6,h:9}){const{w:o,d:h,h:u}=s,m=new nn(o,u,h),c=new mt({color:11705472,roughness:.9}),_=a(t,i),g=new ot(m,c);g.position.set(t,_+u/2,i),g.castShadow=!0,g.receiveShadow=!0,g.userData.ownedMaterial=!0,g.userData={kind:"local-test-fixture",fixtureId:n},this.group.add(g);const T={id:n,source:"fixture",category:u>18?"commercial":"residential",mesh:g,x:t,z:i,w:o,d:h,h:u,baseY:_,broken:!1};return this.list.push(T),r?.addBuilding(T,_),T}break(n){return n.broken||n.mesh.parent!==this.group?!1:(n.broken=!0,this.visibleBuildings.delete(n),n.batch&&n.instanceId!==void 0?n.batch.setVisibleAt(n.instanceId,!1):(this.group.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.userData.ownedMaterial&&(Array.isArray(n.mesh.material)?n.mesh.material.forEach(t=>t.dispose()):n.mesh.material.dispose())),!0)}reset(n){this.loadToken++;for(const t of this.list)n?.removeBuilding(t),t.batch||t.mesh.geometry.dispose();for(const t of[...this.group.children]){this.group.remove(t);const i=t;i.geometry?.dispose(),i.userData.ownedMaterial&&(Array.isArray(i.material)?i.material.forEach(a=>a.dispose()):i.material?.dispose())}for(const t of this.roadsGroup.children){this.roadsGroup.remove(t);const i=t;if(i.geometry.dispose(),i===this.labels){const a=i.material;a.map?.dispose(),a.dispose()}}this.labels=null,this.roads=[],this.list=[],this.cells.clear(),this.visibleBuildings.clear(),this.lastCullAt=0,this.lastCullX=Number.NaN,this.lastCullZ=Number.NaN,this.status={source:"none",buildings:0,roads:0,fallbacks:0,skippedRoads:0,message:"MAP DATA · LOADING"}}}const On=new re;function yt(e,n,t,i,a,r){const s=2*Math.PI*a/4,o=Math.max(r-2*a,0),h=Math.PI/4;On.copy(n),On[i]=0,On.normalize();const u=.5*s/(s+o),m=1-On.angleTo(e)/h;return Math.sign(On[t])===1?m*u:o/(s+o)+u+u*(1-m)}class Aa extends nn{constructor(n=1,t=1,i=1,a=2,r=.1){const s=a*2+1;if(r=Math.min(n/2,t/2,i/2,r),super(1,1,1,s,s,s),this.type="RoundedBoxGeometry",this.parameters={width:n,height:t,depth:i,segments:a,radius:r},s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const h=new re,u=new re,m=new re(n,t,i).divideScalar(2).subScalar(r),c=this.attributes.position.array,_=this.attributes.normal.array,g=this.attributes.uv.array,T=c.length/6,x=new re,d=.5/s;for(let l=0,A=0;l<c.length;l+=3,A+=2)switch(h.fromArray(c,l),u.copy(h),u.x-=Math.sign(u.x)*d,u.y-=Math.sign(u.y)*d,u.z-=Math.sign(u.z)*d,u.normalize(),c[l+0]=m.x*Math.sign(h.x)+u.x*r,c[l+1]=m.y*Math.sign(h.y)+u.y*r,c[l+2]=m.z*Math.sign(h.z)+u.z*r,_[l+0]=u.x,_[l+1]=u.y,_[l+2]=u.z,Math.floor(l/T)){case 0:x.set(1,0,0),g[A+0]=yt(x,u,"z","y",r,i),g[A+1]=1-yt(x,u,"y","z",r,t);break;case 1:x.set(-1,0,0),g[A+0]=1-yt(x,u,"z","y",r,i),g[A+1]=1-yt(x,u,"y","z",r,t);break;case 2:x.set(0,1,0),g[A+0]=1-yt(x,u,"x","z",r,n),g[A+1]=yt(x,u,"z","x",r,i);break;case 3:x.set(0,-1,0),g[A+0]=1-yt(x,u,"x","z",r,n),g[A+1]=1-yt(x,u,"z","x",r,i);break;case 4:x.set(0,0,1),g[A+0]=1-yt(x,u,"x","y",r,n),g[A+1]=1-yt(x,u,"y","x",r,t);break;case 5:x.set(0,0,-1),g[A+0]=yt(x,u,"x","y",r,n),g[A+1]=1-yt(x,u,"y","x",r,t);break}}static fromJSON(n){return new Aa(n.width,n.height,n.depth,n.segments,n.radius)}}function Fn(e,n=!1){const t=e[0].index!==null,i=new Set(Object.keys(e[0].attributes)),a=new Set(Object.keys(e[0].morphAttributes)),r={},s={},o=e[0].morphTargetsRelative,h=new tn;let u=0;for(let m=0;m<e.length;++m){const c=e[m];let _=0;if(t!==(c.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const g in c.attributes){if(!i.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(c.attributes[g]),_++}if(_!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". Make sure all geometries have the same number of attributes."),null;if(o!==c.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const g in c.morphAttributes){if(!a.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+".  .morphAttributes must be consistent throughout all geometries."),null;s[g]===void 0&&(s[g]=[]),s[g].push(c.morphAttributes[g])}if(n){let g;if(t)g=c.index.count;else if(c.attributes.position!==void 0)g=c.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". The geometry must have either an index or a position attribute"),null;h.addGroup(u,g,m),u+=g}}if(t){let m=0;const c=[];for(let _=0;_<e.length;++_){const g=e[_].index;for(let T=0;T<g.count;++T)c.push(g.getX(T)+m);m+=e[_].attributes.position.count}h.setIndex(c)}for(const m in r){const c=co(r[m]);if(!c)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+m+" attribute."),null;h.setAttribute(m,c)}for(const m in s){const c=s[m][0].length;if(c===0)break;h.morphAttributes=h.morphAttributes||{},h.morphAttributes[m]=[];for(let _=0;_<c;++_){const g=[];for(let x=0;x<s[m].length;++x)g.push(s[m][x][_]);const T=co(g);if(!T)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+m+" morphAttribute."),null;h.morphAttributes[m].push(T)}}return h}function co(e){let n,t,i,a=-1,r=0;for(let u=0;u<e.length;++u){const m=e[u];if(n===void 0&&(n=m.array.constructor),n!==m.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=m.itemSize),t!==m.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=m.normalized),i!==m.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(a===-1&&(a=m.gpuType),a!==m.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=m.count*t}const s=new n(r),o=new en(s,t,i);let h=0;for(let u=0;u<e.length;++u){const m=e[u];if(m.isInterleavedBufferAttribute){const c=h/t;for(let _=0,g=m.count;_<g;_++)for(let T=0;T<t;T++){const x=m.getComponent(_,T);o.setComponent(_+c,T,x)}}else s.set(m.array,h);h+=m.count*t}return a!==void 0&&(o.gpuType=a),o}const uo=["front-left","front-right","rear-left","rear-right"],fo=[{x:-1.22,z:1.22},{x:1.22,z:1.22},{x:-1.22,z:-1.25},{x:1.22,z:-1.25}];class kh{root=new qt;wheels=[];frontWheels=[];suspension=[];body;opts;model=new qt;materials;parts={paint:[],dark:[],chrome:[],glass:[],tire:[],light:[]};wheelSprings;wheelShocks;shockRods;axleLinks;workMatrix=new Ht;workQuaternion=new Wt;workPosition=new re;workScale=new re;constructor(n={color:"#d84924",scale:1}){this.opts=n,this.root.scale.setScalar(n.scale),this.model.position.y=-1.65,this.root.add(this.model),this.body=new qt,this.model.add(this.body),this.makeMaterials(),this.buildChassisAndBody(),this.buildWheels(),this.finishBodyBatches()}makeMaterials(){this.materials={paint:new Ar({color:this.opts.color,metalness:.43,roughness:.29,clearcoat:.62,clearcoatRoughness:.2}),dark:new mt({color:1382939,metalness:.28,roughness:.68}),chrome:new mt({color:12041920,metalness:.78,roughness:.24}),glass:new Ar({color:8636379,metalness:.12,roughness:.15,transparent:!0,opacity:.72,clearcoat:.9,side:Lt,depthWrite:!1}),tire:new mt({color:1053204,roughness:.94}),light:new mt({color:16770464,emissive:16754230,emissiveIntensity:1.15,roughness:.2})}}boxGeometry(n,t,i,a,r,s,o=.025,h){const u=new Aa(n,t,i,2,Math.min(o,n*.24,t*.24,i*.24)),m=h?new Wt().setFromEuler(h):new Wt;return u.applyMatrix4(new Ht().compose(new re(a,r,s),m,new re(1,1,1))),u}addBox(n,t,i,a,r,s,o,h=.025,u){this.parts[n].push(this.boxGeometry(t,i,a,r,s,o,h,u))}addSideShape(n,t,i,a=.045){const r=new Bo(n,{depth:a,bevelEnabled:!1,curveSegments:8});r.rotateY(t<0?-Math.PI/2:Math.PI/2),r.translate(t*1.11,0,0),this.parts[i].push(r)}profileShape(){const n=new fa;return n.moveTo(-2.02,1.28),n.lineTo(-2.02,1.78),n.lineTo(-1.53,1.86),n.lineTo(-1.34,2.77),n.lineTo(-.91,3.04),n.lineTo(.29,3.04),n.lineTo(.65,2.14),n.lineTo(1.2,1.98),n.lineTo(2.03,1.77),n.lineTo(2.03,1.2),n.quadraticCurveTo(1.22,2.16,.38,1.2),n.lineTo(-.4,1.2),n.quadraticCurveTo(-1.25,2.16,-2.08,1.2),n.lineTo(-2.02,1.28),n.closePath(),n}sideWindow(n,t,i,a){const r=new fa;return r.moveTo(n,t),r.lineTo(n+.12,a),r.lineTo(i-.1,a),r.lineTo(i,t),r.closePath(),r}buildChassisAndBody(){this.addBox("dark",1.75,.22,3.55,0,1.3,-.02,.055);for(const o of[-.9,.9])this.addBox("dark",.17,.2,3.7,o,1.23,-.02,.045);for(const o of[-1.38,-.2,1.16])this.addBox("chrome",2,.11,.13,0,1.21,o,.025);this.addBox("dark",1.2,.08,.95,0,1.14,.1,.025),this.addBox("paint",2.12,.46,1.27,0,1.76,1.15,.09),this.addBox("paint",1.93,.16,1.48,0,3,-.34,.065),this.addBox("paint",1.78,.96,1.24,0,2.43,-.36,.08);const n=this.profileShape();for(const o of[-1,1])this.addSideShape(n,o,"paint",.055),this.addSideShape(this.sideWindow(-1.19,2.32,-.53,2.8),o,"glass",.018),this.addSideShape(this.sideWindow(-.43,2.32,.16,2.8),o,"glass",.018),this.addBox("chrome",.035,.045,.76,o*1.17,2.2,-.17,.012),this.addBox("chrome",.04,.035,.19,o*1.18,2.05,-.24,.01),this.addBox("dark",.075,.22,1.05,o*1.12,1.31,-.05,.026);this.addBox("glass",1.56,.68,.045,0,2.56,.48,.012,new Cn(-.48,0,0)),this.addBox("glass",1.48,.52,.04,0,2.55,-1.02,.012,new Cn(.18,0,0)),this.addBox("chrome",1.75,.055,.12,0,3.08,-.34,.02),this.addBox("dark",1.4,.08,.95,0,1.64,-1.42,.02);for(const o of[-.76,.76])this.addBox("paint",.12,.34,1.02,o,1.79,-1.4,.035);this.addBox("paint",1.48,.38,.13,0,1.77,-1.93,.035);for(let o=0;o<5;o++)this.addBox("chrome",1.25,.018,.024,0,1.69,-1.78+o*.18,.004);this.addBox("chrome",2.22,.2,.22,0,1.47,1.96,.045),this.addBox("dark",1.16,.38,.055,0,1.83,1.94,.012),this.addBox("chrome",1.28,.045,.07,0,2.05,1.95,.012),this.addBox("chrome",1.28,.045,.07,0,1.61,1.95,.012);for(let o=0;o<9;o++)this.addBox("dark",.025,.34,.035,-.5+o*.125,1.83,1.98,.008);this.addBox("dark",.22,.11,.07,0,1.72,2.01,.012),this.addBox("chrome",2.12,.14,.2,0,1.52,-2,.035),this.addBox("chrome",1.95,.055,.14,0,1.68,-2,.015);for(const o of[-.82,.82])this.addBox("dark",.48,.29,.09,o,1.94,1.93,.035),this.addBox("light",.34,.19,.045,o,1.95,1.99,.035),this.addBox("light",.14,.08,.035,o,1.72,2,.018),this.addBox("dark",.18,.08,.04,o,1.52,-2.11,.018);for(const o of[-.69,.69])this.addBox("paint",.08,.055,.83,o,2.02,1.13,.025),this.addBox("chrome",.035,.025,.63,o*1.7,1.9,-.36,.01);for(const o of[-1.1,.46])this.addBox("dark",.05,.86,.06,0,2.51,o,.018);for(let o=-2;o<=2;o++)this.addBox("light",.14,.13,.08,o*.36,3.14,-.25,.06);const t=[];for(const o of[-1.17,1.17])for(const h of[-1.25,1.22]){const u=new Cl(new re(o,1.26,h-.91),new re(o,2.14,h),new re(o,1.26,h+.91));t.push(new Oi(u,20,.06,7,!1))}const i=Fn(t,!1);t.forEach(o=>o.dispose()),this.body.add(new ot(i,this.materials.dark));const r=[-1,1].map(o=>new Rr([new re(o*.86,1.65,-1.82),new re(o*.86,2.85,-1.55),new re(o*.86,3.2,-.9),new re(o*.86,3.2,.05),new re(o*.82,2.2,.98)])).map(o=>new Oi(o,24,.035,7,!1)),s=Fn(r,!1);r.forEach(o=>o.dispose()),this.body.add(new ot(s,this.materials.chrome));for(const o of[-1.25,1.22])this.addBox("dark",1.82,.12,.16,0,1.43,o,.025),this.addBox("chrome",1.22,.055,.07,0,1.56,o,.018)}finishBodyBatches(){for(const n of Object.keys(this.parts)){const t=this.parts[n];if(!t.length)continue;const i=Fn(t,!1);if(t.forEach(r=>r.dispose()),!i)continue;const a=new ot(i,this.materials[n]);a.castShadow=!0,a.receiveShadow=!0,a.frustumCulled=!0,this.body.add(a)}this.parts={paint:[],dark:[],chrome:[],glass:[],tire:[],light:[]}}cylinderGeometry(n,t,i=24){const a=new wr(n,n,t,i,1,!1);return a.rotateZ(Math.PI/2),a}buildWheels(){const n=new mt({color:2698543,roughness:.9}),t=[],i=[],a=new wr(.82,.82,.61,36,1,!1);a.rotateZ(Math.PI/2),t.push(a);for(const T of[-.29,.29]){const x=new Cr(.63,.12,8,36);x.rotateY(Math.PI/2),x.translate(T,0,0),t.push(x);const d=this.cylinderGeometry(.455,.045,28);d.translate(T*1.04,0,0),i.push(d);const l=new Cr(.405,.025,8,32);l.rotateY(Math.PI/2),l.translate(T*1.04,0,0),i.push(l);const A=this.cylinderGeometry(.16,.075,18);A.translate(T*1.1,0,0),i.push(A);for(let b=0;b<6;b++){const E=b*Math.PI/3,w=new nn(.065,.07,.29);w.applyMatrix4(new Ht().compose(new re(T*1.08,Math.cos(E)*.25,Math.sin(E)*.25),new Wt().setFromEuler(new Cn(E,0,0)),new re(1,1,1))),i.push(w)}}const r=Fn(t,!1);t.forEach(T=>T.dispose());const s=Fn(i,!1);i.forEach(T=>T.dispose());const o=this.cylinderGeometry(.13,3.1,12),h=new mt({color:3422779,metalness:.55,roughness:.48}),u=new Zt(o,h,2);u.castShadow=!0;const m=new Wt().setFromAxisAngle(new re(0,0,1),Math.PI/2);[-1.25,1.22].forEach((T,x)=>{this.workMatrix.compose(new re(0,.91,T),m,new re(1,1,1)),u.setMatrixAt(x,this.workMatrix)}),u.instanceMatrix.needsUpdate=!0,this.model.add(u);const c=[];for(let T=0;T<=96;T++){const x=T/96,d=x*Math.PI*2*8;c.push(new re(Math.cos(d)*.11,x-.5,Math.sin(d)*.11))}const _=new Oi(new Rr(c),128,.025,5,!1),g=new mt({color:13817555,metalness:.78,roughness:.32});this.wheelSprings=new Zt(_,g,4),this.wheelSprings.castShadow=!0,this.wheelShocks=new Zt(this.cylinderGeometry(.072,.68,10),h,4),this.wheelShocks.castShadow=!0,this.shockRods=new Zt(this.cylinderGeometry(.025,.62,8),this.materials.chrome,4),this.shockRods.castShadow=!0,this.model.add(this.wheelSprings,this.wheelShocks,this.shockRods);for(let T=0;T<4;T++){const x=fo[T],d=uo[T],l=new qt;l.position.set(x.x,.92,x.z),l.userData.wheelId=d,this.model.add(l),this.wheels.push(l),T<2&&this.frontWheels.push(l);const A=new ot(r,this.materials.tire);A.castShadow=!0,A.receiveShadow=!0,l.add(A);const b=new ot(s,this.materials.chrome);b.castShadow=!0,l.add(b);const E=new nn(.32,.15,.27),w=new Zt(E,n,32);w.castShadow=!0,w.receiveShadow=!0;let C=0;for(let U=0;U<2;U++)for(let N=0;N<16;N++){const v=N*Math.PI/8+U*Math.PI/16,S=new Wt().setFromAxisAngle(new re(1,0,0),v+Math.PI/2);this.workMatrix.compose(new re(U?.16:-.16,Math.sin(v)*.81,Math.cos(v)*.81),S,new re(1,1,1)),w.setMatrixAt(C++,this.workMatrix)}w.instanceMatrix.needsUpdate=!0,l.add(w)}this.axleLinks=new Zt(this.cylinderGeometry(.055,1,10),h,4),this.axleLinks.castShadow=!0,this.model.add(this.axleLinks),this.updateWheelContacts(uo.map((T,x)=>({id:T,x:0,z:0,height:0,contact:!0,compression:.12,extension:0,travel:.55,compressionVelocity:0,compressionDamping:0,reboundDamping:0})),1)}updateWheelContacts(n,t){for(let i=0;i<this.wheels.length;i++){const a=this.wheels[i],r=n.find(c=>c.id===a.userData.wheelId);if(!r)continue;a.position.y=.92+r.compression/t+r.extension/t;const s=fo[i],o=r.compression/t,h=r.extension/t;this.workPosition.set(s.x*.78,1.05+h*.35-o*.2,s.z),this.workQuaternion.identity(),this.workScale.set(1,Math.max(.5,.72+h-o*.35),1),this.workMatrix.compose(this.workPosition,this.workQuaternion,this.workScale),this.wheelSprings.setMatrixAt(i,this.workMatrix),this.workPosition.y=.99+h*.32-o*.12,this.workScale.set(1,.68+h*.45-o*.2,1),this.workMatrix.compose(this.workPosition,this.workQuaternion,this.workScale),this.wheelShocks.setMatrixAt(i,this.workMatrix),this.workPosition.y=1.13+h*.3-o*.1,this.workScale.set(1,.61+h*.25-o*.1,1),this.workMatrix.compose(this.workPosition,this.workQuaternion,this.workScale),this.shockRods.setMatrixAt(i,this.workMatrix);const u=new Wt().setFromAxisAngle(new re(0,0,1),Math.PI/2),m=Math.abs(s.x)*.9;this.workPosition.set(s.x*.54,.89+o*.35,s.z),this.workScale.set(1,m,1),this.workMatrix.compose(this.workPosition,u,this.workScale),this.axleLinks.setMatrixAt(i,this.workMatrix)}this.wheelSprings.instanceMatrix.needsUpdate=!0,this.wheelShocks.instanceMatrix.needsUpdate=!0,this.shockRods.instanceMatrix.needsUpdate=!0,this.axleLinks.instanceMatrix.needsUpdate=!0}setColor(n){this.opts.color=n,this.materials.paint.color.set(n)}}function jn(e,n=new re){return n.set(Math.sin(e),0,Math.cos(e))}function Ra(e,n=new re){return n.set(Math.cos(e),0,-Math.sin(e))}const ma=(e,n,t)=>Math.max(n,Math.min(t,e)),Vh=[{id:"front-left",x:-1.22,z:1.22},{id:"front-right",x:1.22,z:1.22},{id:"rear-left",x:-1.22,z:-1.25},{id:"rear-right",x:1.22,z:-1.25}];function Yi(e,n,t,i,a=24){const r=Math.cos(n),s=Math.sin(n),o=.55*t,h=.36*t;return Vh.map(u=>{const m=e.x+u.x*r+u.z*s,c=e.z-u.x*s+u.z*r,_=i(m,c),g=_+1.65*t+.12*t,T=g-e.y,x=2*Math.sqrt(a/(.12*t));return{id:u.id,x:m,z:c,height:_,travel:o,compression:ma(T,0,o),extension:ma(-T,0,h),contact:T>=-h&&T<=o,compressionVelocity:0,compressionDamping:x*.82,reboundDamping:x*.62}})}function zh(e,n,t,i){const a=t/(.12*i);let r=0;for(const s of e){if(s.compression<=0)continue;const o=Math.max(0,s.compression-s.travel+.08*i),h=a*(s.compression+o*2.5),u=ma(s.compressionVelocity,-12,12),m=u>=0?s.compressionDamping:s.reboundDamping,c=(n>=0?s.reboundDamping:s.compressionDamping)*n*.24;r+=Math.max(0,h+m*u-c)}return r/e.length-t}function Wh(e){const n=(e[0].height+e[1].height)/2,t=(e[2].height+e[3].height)/2,i=(e[0].height+e[2].height)/2,a=(e[1].height+e[3].height)/2;return{pitch:-Math.atan2(n-t,2.47),roll:Math.atan2(a-i,2.44)}}const Ki=Math.PI*2,ci=e=>e*Math.PI/180;function Jn(e,n){return Math.atan2(Math.sin(n-e),Math.cos(n-e))}function di(e){return Math.abs(Jn(e,0))}function ho(e,n,t=5.2){const i=1-Math.exp(-t*Math.max(0,n));return e+Jn(e,0)*i}class Xh{airborne=!1;lastPitch=0;lastRoll=0;pitchProgress=0;rollProgress=0;pendingForwardFlips=0;pendingBackwardFlips=0;pendingRolls=0;flightTime=0;flightBonus=0;currentPoints=0;bestScore;constructor(n=0){this.bestScore=Math.max(0,Math.floor(n)||0)}update(n){if(!n.grounded){this.airborne?(this.flightTime=Math.max(this.flightTime,n.airtime),this.recordFlipRotation(this.advanceRotation("pitch",n.pitch)),this.pendingRolls+=Math.abs(this.advanceRotation("roll",n.roll))):this.beginFlight(n);const T=this.pendingForwardFlips+this.pendingBackwardFlips,x=T+this.pendingRolls;return this.currentPoints=Math.round(this.flightTime*80)+this.pendingRolls*500+T*600+Math.max(0,x-1)*150+this.flightBonus,null}if(!this.airborne)return null;this.flightTime=Math.max(this.flightTime,n.airtime),this.recordFlipRotation(this.advanceRotation("pitch",n.pitch)),this.pendingRolls+=Math.abs(this.advanceRotation("roll",n.roll));const t=di(n.pitch)<ci(65)&&di(n.roll)<ci(65),i=n.landingSpeed<=22&&t&&this.flightTime>=.45,a=this.pendingForwardFlips,r=this.pendingBackwardFlips,s=a+r,o=this.pendingRolls,h=this.flightTime;if(this.airborne=!1,!i)return this.clearFlight(),null;const u=s+o,m=n.landingSpeed<=5&&di(n.pitch)<ci(18)&&di(n.roll)<ci(18),c=m?300:100,_=Math.round(h*80)+o*500+s*600+Math.max(0,u-1)*150+c+this.flightBonus;this.currentPoints=_,this.bestScore=Math.max(this.bestScore,_);const g=o>=2?"DOUBLE ROLL":o===1?"BARREL ROLL":s>=2?"DOUBLE FLIP":a?"FRONT FLIP":r?"BACKFLIP":h>=1.25?m?"BIG AIR · PERFECT LANDING":"BIG AIR":m?"PERFECT LANDING":"NICE LANDING";return this.clearFlight(!1),{points:_,rolls:o,flips:s,forwardFlips:a,backwardFlips:r,airtime:h,perfect:m,message:g}}reset(){this.airborne=!1,this.clearFlight()}get isAirborne(){return this.airborne}get rolls(){return this.pendingRolls}get flips(){return this.pendingForwardFlips+this.pendingBackwardFlips}get airtime(){return this.flightTime}awardBonus(n){const t=Math.max(0,Math.floor(n));return t?(this.airborne&&(this.flightBonus+=t),this.currentPoints+=t,this.bestScore+=t,this.currentPoints):this.currentPoints}beginFlight(n){this.clearFlight(),this.airborne=!0,this.lastPitch=n.pitch,this.lastRoll=n.roll,this.flightTime=n.airtime}advanceRotation(n,t){const i=n==="pitch"?this.lastPitch:this.lastRoll,r=(n==="pitch"?this.pitchProgress:this.rollProgress)+Jn(i,t);n==="pitch"?(this.lastPitch=t,this.pitchProgress=r):(this.lastRoll=t,this.rollProgress=r);const s=Math.trunc(r/Ki);return s&&(n==="pitch"?this.pitchProgress-=s*Ki:this.rollProgress-=s*Ki),s}recordFlipRotation(n){n>0?this.pendingForwardFlips+=n:this.pendingBackwardFlips+=-n}clearFlight(n=!0){this.pitchProgress=0,this.rollProgress=0,this.pendingForwardFlips=0,this.pendingBackwardFlips=0,this.pendingRolls=0,this.flightTime=0,this.flightBonus=0,n&&(this.currentPoints=0)}}class qh{pos=new re(0,0,0);vel=new re;yaw=0;pitch=0;roll=0;grounded=!0;nitro=100;airTime=0;speed=0;gravity=24;jumpForce=15;jumpWas=!1;jumpHoldRemaining=0;coyoteRemaining=0;previousCompression=new Map;contactPitch=0;contactRoll=0;wheelContacts=[];reset(n,t=1){this.pos.set(0,n.heightAt(0,0)+1.65*t,0),this.vel.set(0,0,0),this.yaw=0,this.pitch=0,this.roll=0,this.grounded=!0,this.nitro=100,this.airTime=0,this.jumpWas=!1,this.jumpHoldRemaining=0,this.coyoteRemaining=.1,this.contactPitch=0,this.contactRoll=0,this.wheelContacts=Yi(this.pos,this.yaw,t,(i,a)=>n.heightAt(i,a),this.gravity),this.previousCompression=new Map(this.wheelContacts.map(i=>[i.id,i.compression]))}update(n,t,i,a,r){this.gravity=r.gravity,this.jumpForce=r.jump,n=Math.min(n,.04);const s=Math.max(1,Math.ceil(n*120)),o=n/s;for(let h=0;h<s;h++)this.step(o,t,i,r);a.root.position.copy(this.pos),a.root.rotation.order="YXZ",a.root.rotation.set(this.pitch+this.contactPitch,this.yaw,this.roll+this.contactRoll),a.updateWheelContacts(this.wheelContacts,r.scale),a.wheels.forEach(h=>{h.rotation.x-=this.speed*n}),a.frontWheels.forEach(h=>{h.rotation.y=-t.steer*.28})}step(n,t,i,a){const r=a.scale,s=jn(this.yaw),o=t.nitro&&this.nitro>0,h=t.throttle||(t.nitro?t.gear??1:0),u=30*(o?1.7:1),m=26*(o?1.5:1),c=this.vel.dot(s),_=h!==0&&Math.abs(c)>2&&Math.sign(c)!==Math.sign(h);h&&!_&&this.vel.addScaledVector(s,h*m*n);const g=new re(this.vel.x,0,this.vel.z);if(this.speed=g.length(),o?this.nitro=Math.max(0,this.nitro-22*n):this.nitro=Math.min(100,this.nitro+8*n),t.handbrake?g.multiplyScalar(Math.max(0,1-3*n)):g.multiplyScalar(Math.max(0,1-(_?5.5:this.grounded?1.05:.1)*n)),this.speed>u&&g.setLength(u),this.speed>.4){const w=(this.grounded?1.8:1.05)*(.25+Math.min(1,this.speed/12)),C=Math.sign(g.dot(s))||Math.sign(t.throttle);this.yaw-=t.steer*w*n*C;const U=Ra(this.yaw),N=g.dot(U);g.addScaledVector(U,-N*(this.grounded?.72:.01))}this.vel.x=g.x,this.vel.z=g.z;const T=t.jump&&!this.jumpWas&&(this.grounded||this.coyoteRemaining>0);if(T&&(this.vel.y=this.jumpForce,this.grounded=!1,this.coyoteRemaining=0,this.jumpHoldRemaining=.3),this.jumpWas=t.jump,t.jump&&!T&&this.jumpHoldRemaining>0&&this.vel.y>0){const w=Math.min(n,this.jumpHoldRemaining);this.vel.y+=Math.min(12,this.jumpForce*.8)*w,this.jumpHoldRemaining-=w}t.jump||(this.jumpHoldRemaining=0),this.wheelContacts=Yi(this.pos,this.yaw,r,(w,C)=>i.heightAt(w,C),this.gravity);for(const w of this.wheelContacts){const C=this.previousCompression.get(w.id)??w.compression;w.compressionVelocity=(w.compression-C)/Math.max(n,1/240)}this.grounded||(t.level?(this.pitch=ho(this.pitch,n),this.roll=ho(this.roll,n)):(this.pitch+=t.airPitch*5.4*n,this.roll+=t.airRoll*6.2*n),this.airTime+=n),this.vel.y+=zh(this.wheelContacts,this.vel.y,this.gravity,r)*n;const x=this.pos.y;this.pos.addScaledVector(this.vel,n),this.wheelContacts=Yi(this.pos,this.yaw,r,(w,C)=>i.heightAt(w,C),this.gravity);for(const w of this.wheelContacts)this.previousCompression.set(w.id,w.compression);const d=this.wheelContacts.filter(w=>w.contact&&w.compression>.015*r).length,l=Math.max(...this.wheelContacts.map(w=>w.height))+1.17*r;this.pos.y<l&&this.vel.y<0&&(!this.grounded&&this.vel.y<-3&&(this.pitch*=.35,this.roll*=.35,this.vel.y=Math.max(0,-this.vel.y*.12)),this.pos.y=l);const A=this.grounded;if(this.grounded=this.vel.y<=.75&&d>=2,this.grounded?this.coyoteRemaining=.1:A?this.coyoteRemaining=.1:this.coyoteRemaining=Math.max(0,this.coyoteRemaining-n),this.grounded){this.vel.y=Math.max(0,this.vel.y),this.airTime=0;const w=Math.exp(-4*n);this.pitch=Jn(0,this.pitch)*w,this.roll=Jn(0,this.roll)*w}const b=Wh(this.wheelContacts),E=this.grounded?Math.min(1,n*9):Math.min(1,n*2);this.contactPitch=St.lerp(this.contactPitch,this.grounded?b.pitch:0,E),this.contactRoll=St.lerp(this.contactRoll,this.grounded?b.roll:0,E),Number.isFinite(this.pos.y)||(this.pos.y=x)}}function ga(e){if(!e||typeof e!="object"||!("closest"in e))return!1;const n=e;return typeof n.closest=="function"&&n.closest('input,textarea,select,[contenteditable]:not([contenteditable="false"])')!==null}class Yh{pressed=new Set;actions=new Map;pointerDown(n,t){this.pointerUp(n),this.actions.set(n,t),this.pressed.add(t)}pointerUp(n){const t=this.actions.get(n);t!==void 0&&(this.actions.delete(n),[...this.actions.values()].includes(t)||this.pressed.delete(t))}pointerCancel(n){this.pointerUp(n)}lostPointerCapture(n){this.pointerUp(n)}releaseAll(){this.actions.clear(),this.pressed.clear()}}class Kh{constructor(n=54,t=.08){this.maxTravel=n,this.deadZone=t}pointerId=null;x=0;y=0;originX=0;originY=0;radius=1;pointerDown(n,t,i,a=this.maxTravel){this.pointerId=n,this.originX=t,this.originY=i,this.radius=Math.max(1,a),this.x=0,this.y=0}pointerMove(n,t,i){if(this.pointerId!==n)return;let a=(t-this.originX)/this.radius,r=(i-this.originY)/this.radius;const s=Math.hypot(a,r);s>1&&(a/=s,r/=s);const o=Math.hypot(a,r);if(o<this.deadZone){this.x=0,this.y=0;return}const h=(o-this.deadZone)/(1-this.deadZone)/o;this.x=a*h,this.y=r*h}pointerUp(n){this.pointerId===n&&this.release()}pointerCancel(n){this.pointerUp(n)}lostPointerCapture(n){this.pointerUp(n)}release(){this.pointerId=null,this.x=0,this.y=0}}function $h(e,n){const t=(...i)=>i.some(a=>e.has(a)||n.has(a));return Number(t("d","arrowright"))-Number(t("a","arrowleft"))}class Zh{keys=new Set;pointerButtons=new Yh;analog=new Kh;gear=1;steeringMode="analog";sensitivity=1;state={throttle:0,steer:0,nitro:!1,jump:!1,level:!1,airPitch:0,airRoll:0,handbrake:!1,gear:1};wasAirborne=!1;requireNeutralForAir=!1;get touches(){return this.pointerButtons.pressed}setGear(n){this.gear=n}toggleGear(){return this.gear=this.gear===1?-1:1,this.gear}setSteeringMode(n){this.steeringMode=n}setSensitivity(n){this.sensitivity=Math.max(.5,Math.min(1.5,n))}constructor(){window.addEventListener("focusin",n=>{ga(n.target)&&this.releaseAll()}),window.addEventListener("keydown",n=>{if(ga(n.target)){this.releaseAll();return}[" ","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n.key)&&n.preventDefault(),this.keys.add(n.key.toLowerCase())}),window.addEventListener("keyup",n=>this.keys.delete(n.key.toLowerCase())),window.addEventListener("blur",()=>this.releaseAll())}pointerDown(n,t){this.pointerButtons.pointerDown(n,t)}pointerUp(n){this.pointerButtons.pointerUp(n)}pointerCancel(n){this.pointerButtons.pointerCancel(n)}lostPointerCapture(n){this.pointerButtons.lostPointerCapture(n)}releaseAll(){this.keys.clear(),this.pointerButtons.releaseAll(),this.analog.release(),this.state={throttle:0,steer:0,nitro:!1,jump:!1,level:!1,airPitch:0,airRoll:0,handbrake:!1,gear:this.gear},this.wasAirborne=!1,this.requireNeutralForAir=!1}update(n=!1){const t=(...b)=>b.some(E=>this.keys.has(E)||this.touches.has(E)),i=Array.from(navigator.getGamepads?.()??[]).find(b=>b?.connected),a=i?.axes??[],r=b=>i?.buttons[b]?.value??0,s=(t("w","arrowup")?1:0)-(t("s","arrowdown")?1:0),o=t("go"),h=r(7)-r(6)||-Math.sign(Math.abs(a[1]??0)>.18?a[1]:0),u=s||(o?this.gear:0)||h,m=$h(this.keys,this.touches),c=Math.abs(a[0]??0)>.16?a[0]:0,_=this.analog.x,g=this.analog.y;n&&!this.wasAirborne&&(this.requireNeutralForAir=Math.hypot(_,g)>.2),n||(this.requireNeutralForAir=!1),n&&this.requireNeutralForAir&&Math.hypot(_,g)<.16&&(this.requireNeutralForAir=!1),this.wasAirborne=n;const T=n&&!this.requireNeutralForAir&&this.steeringMode==="analog",x=!n&&this.steeringMode==="analog"?Math.sign(_)*Math.pow(Math.abs(_),1.25)*this.sensitivity:0,d=(t("arrowup")?1:0)-(t("arrowdown")?1:0),l=(t("e","arrowright")?1:0)-(t("q","arrowleft")?1:0),A=t("shift","boost","nitro")||r(1)>.4;return this.state={throttle:u,steer:m||(this.steeringMode==="buttons"?0:x)||c,nitro:A,jump:t(" ","jump")||r(0)>.4,level:t("f","level")||r(3)>.4,airPitch:d||(T?-g:0)||(Math.abs(a[3]??0)>.18?-Math.sign(a[3]):0),airRoll:l||(T?_:0)||(Math.abs(a[2]??0)>.18?Math.sign(a[2]):0),handbrake:t("control")||r(2)>.4,gear:this.gear},this.state}}const Bn=96,$i=160;class Qh{group=new qt;dustMesh;burstMesh;particles=[];active=[];freeDust=[];freeBurst=[];activeCount=0;rng=7886388;matrix=new Ht;quat=new Wt;scaleVector=new re;color=new We;quality=1;constructor(){const n=new Go(.5,6,5);this.dustMesh=this.makeBatch(n.clone(),Bn,13875854),this.burstMesh=this.makeBatch(n.clone(),$i,16777215),n.dispose(),this.dustMesh.name="dust-particle-batch",this.burstMesh.name="impact-particle-batch",this.dustMesh.count=this.burstMesh.count=0,this.group.add(this.dustMesh,this.burstMesh);for(let t=0;t<Bn+$i;t++)this.particles.push({kind:"dust",life:0,max:1,position:new re,velocity:new re,scale:1,color:16777215}),this.active.push(0);for(let t=Bn-1;t>=0;t--)this.freeDust.push(t);for(let t=Bn+$i-1;t>=Bn;t--)this.freeBurst.push(t)}makeBatch(n,t,i){const a=new Ta({color:i,vertexColors:!0,transparent:!0,depthWrite:!1});a.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute float instanceAlpha;
varying float vParticleAlpha;`),s.vertexShader=s.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vParticleAlpha = instanceAlpha;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying float vParticleAlpha;`),s.fragmentShader=s.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a *= vParticleAlpha;`)},a.customProgramCacheKey=()=>"rumble-particle-alpha-v1";const r=new yl(new Float32Array(t),1);return r.setUsage(Pl),n.setAttribute("instanceAlpha",r),new Zt(n,a,t)}rand(){return this.rng=this.rng*1664525+1013904223>>>0,this.rng/4294967296}burst(n,t=18,i=16758605){t=Math.max(1,Math.round(t*this.quality));for(let a=0;a<t;a++){const r=this.freeBurst.pop();if(r===void 0)break;const s=this.particles[r];s.kind="burst",s.life=.45+this.rand()*.8,s.max=.9,s.scale=.16+this.rand()*.26,s.color=i,s.position.copy(n),s.velocity.set((this.rand()-.5)*8,1+this.rand()*7,(this.rand()-.5)*8),this.active[this.activeCount++]=r}}dust(n,t){if(t<4||this.rand()>.27*this.quality)return;const i=this.freeDust.pop();if(i===void 0)return;const a=this.particles[i];a.kind="dust",a.life=a.max=.65,a.scale=.36+this.rand()*.3,a.color=13875854,a.position.copy(n),a.velocity.set(this.rand()-.5,.4+this.rand(),this.rand()-.5),this.active[this.activeCount++]=i}update(n){let t=0,i=0,a=0;for(let r=0;r<this.activeCount;r++){const s=this.active[r],o=this.particles[s];if(o.life-=n,o.life<=0){(o.kind==="dust"?this.freeDust:this.freeBurst).push(s);continue}o.position.addScaledVector(o.velocity,n),o.scale*=1+n*.55;const h=Math.max(0,o.life/o.max*(o.kind==="dust"?.34:.9)),u=o.kind==="dust"?this.dustMesh:this.burstMesh,m=o.kind==="dust"?i++:a++;this.scaleVector.setScalar(o.scale*(o.life/o.max)),this.matrix.compose(o.position,this.quat,this.scaleVector),u.setMatrixAt(m,this.matrix),this.color.setHex(o.color),u.setColorAt(m,this.color),u.geometry.getAttribute("instanceAlpha").setX(m,h),this.active[t++]=s}this.activeCount=t,this.dustMesh.count=i,this.burstMesh.count=a,i&&(this.dustMesh.instanceMatrix.needsUpdate=!0,this.dustMesh.instanceColor.needsUpdate=!0,this.dustMesh.geometry.getAttribute("instanceAlpha").needsUpdate=!0),a&&(this.burstMesh.instanceMatrix.needsUpdate=!0,this.burstMesh.instanceColor.needsUpdate=!0,this.burstMesh.geometry.getAttribute("instanceAlpha").needsUpdate=!0)}get activeParticles(){return this.activeCount}setQuality(n){this.quality=n==="low"?.46:n==="medium"?.72:1}dispose(){this.group.clear();for(const n of[this.dustMesh,this.burstMesh])n.geometry.dispose(),n.material.dispose()}}class jh{group=new qt;mesh;pieces=[];quality="high";seed=1225960503;transform=new Ht;quaternion=new Wt;vector=new re;scratchColor=new We;capacity=320;constructor(){const n=new nn(1,1,1),t=new mt({color:16777215,roughness:.88,metalness:.015});this.mesh=new Zt(n,t,this.capacity),this.mesh.name="bounded-building-collapse-batch",this.mesh.count=0,this.mesh.castShadow=!1,this.mesh.receiveShadow=!1,this.mesh.frustumCulled=!1,this.group.add(this.mesh)}random(){return this.seed=this.seed*1664525+1013904223>>>0,this.seed/4294967296}destroy(n,t,i){const a=this.quality==="low"?.5:this.quality==="medium"?.75:1,r=St.clamp(Math.ceil(n.w/3.3),2,4),s=St.clamp(Math.ceil(n.h/3.5),2,5),o=Math.max(5,Math.round(r*s*a)),h=Math.min(o,this.capacity-this.pieces.length);if(!h)return 0;const u=Array.isArray(n.mesh.material)?n.mesh.material[0]:n.mesh.material,m=u instanceof mt?u.color:new We(11705472),c=new re(t.direction.z,0,-t.direction.x).normalize(),_=new re(n.x,(n.baseY??n.mesh.position.y-n.h/2)+(n.minHeight??0),n.z);for(let g=0;g<h;g++){const T=g%r,x=Math.floor(g/r)%s,d=new re(n.w/r*(.78+this.random()*.2),n.h/s*(.78+this.random()*.2),Math.max(.35,n.d*(.22+this.random()*.28))),l=-n.w/2+(T+.5)*n.w/r,A=(x+.5)*n.h/s,b=(this.random()-.5)*Math.max(0,n.d-d.z),E=_.clone().add(new re(l,A,b)),w=(this.random()-.5)*(2+t.intensity*6),C=2+t.intensity*(4+this.random()*5),U=t.direction.clone().multiplyScalar(C).addScaledVector(c,w);U.y=2.5+t.intensity*(2+this.random()*6)+this.random()*2;const N=m.clone().multiplyScalar(.78+this.random()*.4),v=4.5+this.random()*1.2;this.pieces.push({position:E,velocity:U,size:d,rotation:new Cn(this.random()*2,this.random()*2,this.random()*2),angular:new re((this.random()-.5)*8,(this.random()-.5)*8,(this.random()-.5)*8),ground:i(E.x,E.z)+.06,life:v,maxLife:v,color:N})}return h}setQuality(n){this.quality=n}clear(){this.pieces.length=0,this.mesh.count=0}update(n){let t=0;for(let i=this.pieces.length-1;i>=0;i--){const a=this.pieces[i];if(a.life-=n,a.life<=0){this.pieces.splice(i,1);continue}a.velocity.y-=18*n,a.position.addScaledVector(a.velocity,n),a.rotation.x+=a.angular.x*n,a.rotation.y+=a.angular.y*n,a.rotation.z+=a.angular.z*n;const r=a.size.y/2;a.position.y<a.ground+r&&(a.position.y=a.ground+r,a.velocity.y<-1?a.velocity.y*=-.19:a.velocity.y=0,a.velocity.x*=.82,a.velocity.z*=.82,a.angular.multiplyScalar(.96));const s=a.life<.45?Math.max(.1,a.life/.45):1;this.vector.copy(a.size).multiplyScalar(s),this.quaternion.setFromEuler(a.rotation),this.transform.compose(a.position,this.quaternion,this.vector),this.mesh.setMatrixAt(t,this.transform),this.scratchColor.copy(a.color),this.mesh.setColorAt(t,this.scratchColor),t++}this.mesh.count=t,t&&(this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0))}get activeCount(){return this.pieces.length}dispose(){this.group.clear(),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.pieces.length=0}}const hn=(e,n,t)=>Math.max(n,Math.min(t,e));function Jh(e,n,t){const i=hn(.2+hn(e/32,0,1)*.67+hn(n,0,1)*.16+(t?.18:0),.2,1.2),a=62+i*112;return{rpm:i,fundamentalHz:a,engineGain:.075+i*.035+hn(n,0,1)*.025,harmonicHz:a*2.4,nitroHz:260+i*390}}function Gn(e){return hn(Number.isFinite(e)?e:0,0,1)}class ep{ctx=null;master=null;compressor=null;analyser=null;meterBuffer=null;engineOsc=null;engineHarmonic=null;engineGain=null;harmonicGain=null;nitroOsc=null;nitroGain=null;skidNoise=null;skidGain=null;noiseBuffer=null;volume=.62;muted=!1;failed=!1;start(){try{this.ctx||this.createGraph(),this.ctx?.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.applyMaster()}catch{this.failed=!0}}createGraph(){const n=window,t=window.AudioContext??n.webkitAudioContext;if(!t){this.failed=!0;return}const i=new t;this.ctx=i,this.master=i.createGain(),this.master.gain.value=0,this.compressor=i.createDynamicsCompressor(),this.compressor.threshold.value=-18,this.compressor.knee.value=14,this.compressor.ratio.value=5,this.compressor.attack.value=.006,this.compressor.release.value=.16,this.analyser=i.createAnalyser(),this.analyser.fftSize=256,this.meterBuffer=new Float32Array(this.analyser.fftSize),this.master.connect(this.compressor).connect(this.analyser).connect(i.destination);const a=i.createOscillator();a.type="sawtooth";const r=i.createBiquadFilter();r.type="lowpass",r.frequency.value=620,r.Q.value=.7,this.engineGain=i.createGain(),this.engineGain.gain.value=.09,a.connect(r).connect(this.engineGain).connect(this.master),a.start(),this.engineOsc=a;const s=i.createOscillator();s.type="triangle";const o=i.createBiquadFilter();o.type="bandpass",o.frequency.value=520,o.Q.value=.65,this.harmonicGain=i.createGain(),this.harmonicGain.gain.value=.035,s.connect(o).connect(this.harmonicGain).connect(this.master),s.start(),this.engineHarmonic=s;const h=i.createOscillator();h.type="sawtooth";const u=i.createBiquadFilter();u.type="bandpass",u.frequency.value=900,u.Q.value=.8,this.nitroGain=i.createGain(),this.nitroGain.gain.value=1e-4,h.connect(u).connect(this.nitroGain).connect(this.master),h.start(),this.nitroOsc=h;const m=i.createBuffer(1,Math.floor(i.sampleRate*.35),i.sampleRate),c=m.getChannelData(0);for(let T=0;T<c.length;T++)c[T]=(Math.random()*2-1)*.55;this.noiseBuffer=m;const _=i.createBufferSource();_.buffer=m,_.loop=!0;const g=i.createBiquadFilter();g.type="bandpass",g.frequency.value=1250,g.Q.value=.5,this.skidGain=i.createGain(),this.skidGain.gain.value=1e-4,_.connect(g).connect(this.skidGain).connect(this.master),_.start(),this.skidNoise=_,this.failed=!1}setMasterVolume(n){this.volume=Gn(n),this.applyMaster()}getMasterVolume(){return this.volume}setMuted(n){this.muted=n,this.applyMaster()}mute(){this.setMuted(!0)}isMuted(){return this.muted}isAvailable(){return!!this.ctx&&!this.failed}getState(){return this.ctx?.state??(this.failed?"unavailable":"locked")}applyMaster(){this.ctx&&this.master&&this.master.gain.setTargetAtTime(this.muted?0:this.volume,this.ctx.currentTime,.025)}update(n,t=0,i=!1,a=0){const r=this.ctx;if(!r||!this.engineOsc||!this.engineHarmonic||!this.engineGain||!this.harmonicGain)return;const s=Jh(n,t,i),o=r.currentTime;this.engineOsc.frequency.setTargetAtTime(s.fundamentalHz,o,.055),this.engineHarmonic.frequency.setTargetAtTime(s.harmonicHz,o,.07),this.engineGain.gain.setTargetAtTime(s.engineGain,o,.09),this.harmonicGain.gain.setTargetAtTime(.026+s.rpm*.022,o,.09),this.nitroOsc?.frequency.setTargetAtTime(s.nitroHz,o,.045),this.nitroGain?.gain.setTargetAtTime(i?.075:1e-4,o,.05),this.skidGain?.gain.setTargetAtTime(hn(a,0,1)>.08?.12*hn(a,0,1):1e-4,o,.04)}testTone(){const n=this.ctx;if(!n||this.muted)return!1;const t=n.createOscillator(),i=n.createGain(),a=n.currentTime;return t.type="sine",t.frequency.setValueAtTime(523.25,a),i.gain.setValueAtTime(1e-4,a),i.gain.linearRampToValueAtTime(.22,a+.025),i.gain.setValueAtTime(.22,a+.24),i.gain.exponentialRampToValueAtTime(1e-4,a+.52),t.connect(i).connect(this.master),t.start(a),t.stop(a+.54),t.onended=()=>{t.disconnect(),i.disconnect()},!0}jump(){this.sweep(175,540,.34,.055,"sawtooth")}landing(n=1){this.noiseBurst(.11+Gn(n)*.08,.22),this.sweep(112,52,.19,.075*Gn(n),"sine")}impact(n=1){this.noiseBurst(.15+Gn(n)*.12,.34),this.sweep(170,43,.28,.11*Gn(n),"triangle")}sweep(n,t,i,a,r){const s=this.ctx;if(!s||this.muted)return;const o=s.createOscillator(),h=s.createGain(),u=s.currentTime;o.type=r,o.frequency.setValueAtTime(n,u),o.frequency.exponentialRampToValueAtTime(Math.max(25,t),u+i),h.gain.setValueAtTime(1e-4,u),h.gain.linearRampToValueAtTime(a,u+.012),h.gain.exponentialRampToValueAtTime(1e-4,u+i),o.connect(h).connect(this.master),o.start(u),o.stop(u+i+.015),o.onended=()=>{o.disconnect(),h.disconnect()}}noiseBurst(n,t){const i=this.ctx;if(!i||!this.noiseBuffer||this.muted)return;const a=i.createBufferSource(),r=i.createBiquadFilter(),s=i.createGain(),o=i.currentTime;a.buffer=this.noiseBuffer,r.type="lowpass",r.frequency.value=1900,s.gain.setValueAtTime(Math.max(1e-4,n),o),s.gain.exponentialRampToValueAtTime(1e-4,o+t),a.connect(r).connect(s).connect(this.master),a.start(o),a.stop(o+t+.02),a.onended=()=>{a.disconnect(),r.disconnect(),s.disconnect()}}outputRms(){if(!this.ctx||!this.analyser||!this.meterBuffer||this.ctx.state!=="running"||this.muted)return 0;this.analyser.getFloatTimeDomainData(this.meterBuffer);let n=0;for(const t of this.meterBuffer)n+=t*t;return Math.sqrt(n/this.meterBuffer.length)}}const Q=e=>document.querySelector(e),Un=!!(window.matchMedia?.("(pointer: coarse)").matches||window.matchMedia?.("(any-pointer: coarse)").matches||navigator.maxTouchPoints>0||"ontouchstart"in window),rn=document.documentElement;rn.classList.toggle("touch-capable",Un);rn.classList.toggle("keyboard-controls-visible",!Un);const tp=Q("#app");tp.innerHTML=`
 <canvas id="game"></canvas>
 <div class="grain"></div>
 <header class="topbar"><a class="brand" href="#"><span class="brand-icon">✦</span><span>RUMBLE<span class="accent">ROAM</span></span></a><div class="location-label"><span class="pulse"></span><span id="place-name">Moab, Utah</span><small id="terrain-name">RED ROCK COUNTRY</small></div><div class="top-actions"><button id="map-btn" class="top-btn" aria-label="Choose location">⌖ <span>LOCATIONS</span></button><button id="pause-btn" class="top-btn" aria-label="Pause game">Ⅱ <span>PAUSE</span></button><button id="help-btn" class="top-btn help-trigger" aria-label="Help and controls">?</button></div></header><div id="geo-status" class="world-data-status" aria-live="polite">GEOGRAPHIC DATA · LOADING</div><a class="world-data-credit" href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">© OPENSTREETMAP CONTRIBUTORS · ODbL</a>
 <aside class="hud-left"><div class="stat"><span class="stat-label">VELOCITY</span><div class="speed-line"><strong id="speed">000</strong><span>KM/H</span></div><div class="speed-track"><i id="speed-bar"></i></div><small id="street-name" class="street-name"></small></div><div class="stat nitro-stat"><span class="stat-label">NITROUS</span><div class="nitro-track"><i id="nitro-bar"></i></div><small id="nitro-state">READY TO BURN</small></div><div class="stunt-stat" aria-live="polite"><div><span>AIR TIME</span><b id="air-time">0.0s</b></div><div><span>STUNT</span><b id="stunt-score">0</b></div><small>BEST <b id="stunt-best">0</b></small><small id="level-hint" class="level-hint"></small></div></aside>
 <div class="hud-bottom"><div class="hint keyboard-hint"><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> DRIVE <i></i><kbd>SHIFT</kbd> BOOST <i></i><kbd>SPACE</kbd> JUMP <i></i><kbd>F</kbd> LEVEL <i></i><kbd>Q</kbd><kbd>E</kbd> FLIP</div><div class="touch-hint">LEFT THUMB STEERS · GO DRIVES · BOOST IS INDEPENDENT</div><div class="camera-toggle"><button data-camera="chase" class="selected">CHASE</button><button data-camera="far">FAR</button><button data-camera="hood">HOOD</button><button data-camera="free">FREE</button></div></div>
 <button id="settings-btn" class="settings-fab">⚙</button>
 <section id="location-panel" class="panel hidden"><div class="panel-head"><div><span class="eyebrow">PICK YOUR PLAYGROUND</span><h2>Where to next?</h2></div><button class="close-btn" data-close="location-panel">×</button></div><form id="search-form"><input id="location-search" placeholder="Search a place or paste coordinates" autocomplete="off"><button class="search-btn">SEARCH <span>↗</span></button></form><div id="search-results" class="results"></div><div class="map-wrap"><div id="mini-map"></div><div class="map-hint">CLICK MAP TO DROP A PIN</div></div><button id="practice-course" class="practice-course-btn">ADD OPTIONAL PRACTICE OBSTACLES</button><div class="preset-title">FAVORITE RUNS <span>09 LOCATIONS</span></div><div id="presets" class="presets"></div><div class="attribution">Terrain <a href="https://registry.opendata.aws/terrain-tiles/" target="_blank">Mapzen / Tilezen</a> · © <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a> · Map <a href="https://openfreemap.org/" target="_blank">OpenFreeMap</a><details class="terrain-credits"><summary>Terrain source credits</summary><div>ArcticDEM: DigitalGlobe imagery; NSF awards 1043681, 1559691 and 1542736. Australia: © Commonwealth of Australia (Geoscience Australia) 2017. Austria: © offene Daten Österreichs – Digitales Geländemodell (DGM) Österreich. Canada: Open Government Licence – Canada. Europe: Copernicus / EU-DEM. Global ETOPO1: NOAA. Mexico: INEGI, Continental relief, 2016. New Zealand: © Land Information New Zealand and NZ Government. Norway: © Kartverket. United Kingdom: © Environment Agency 2015. United States 3DEP, GMTED2010 and SRTM: USGS.</div></details></div></section>
 <section id="settings-panel" class="panel settings hidden"><div class="panel-head"><div><span class="eyebrow">TUNE THE MAYHEM</span><h2>Game settings</h2></div><button class="close-btn" data-close="settings-panel">×</button></div><label>Graphics quality <select id="graphics-quality"><option value="low">Low · smoother</option><option value="medium">Medium · balanced</option><option value="high">High · detailed</option></select></label><label>Touch steering <select id="steering-mode"><option value="analog">Analog pad</option><option value="buttons">Classic buttons</option></select></label><label>Steering sensitivity <span id="sensitivity-value">100%</span><input id="steering-sensitivity" type="range" min="50" max="150" value="100"></label><label>Gravity <span id="gravity-value">24</span><input id="gravity" type="range" min="6" max="35" value="24"></label><label>Jump force <span id="jump-value">15</span><input id="jump" type="range" min="8" max="25" value="15"></label><label>Truck scale <span id="scale-value">1.0×</span><input id="scale" type="range" min="7" max="16" value="10"></label><label>Paint <input id="paint" type="color" value="#d84924"></label><label class="toggle"><span>Audio</span><input id="audio-toggle" type="checkbox" checked></label><label>Master volume <span id="volume-value">62%</span><input id="master-volume" type="range" min="0" max="100" value="62"></label><button id="audio-test" class="ghost-btn audio-test">TEST SOUND</button><small id="audio-status" class="settings-note">Sound starts after your first control input.</small><button id="reset-btn" class="search-btn full">RESET TRUCK <span>↻</span></button><small class="settings-note">Esc pauses the run. R recovers the truck. Press M to pick a new place.</small></section>
 <section id="pause-panel" class="pause-panel hidden"><span class="eyebrow">TAKE A BREATHER</span><h1>PAUSED</h1><button id="resume-btn" class="search-btn">BACK TO IT <span>▶</span></button><button id="pause-location" class="ghost-btn">CHANGE LOCATION</button></section>
 <section id="help-panel" class="panel help-panel hidden" aria-labelledby="help-title"><div class="panel-head"><div><span class="eyebrow">QUICK DRIVER GUIDE</span><h2 id="help-title">Controls</h2></div><button class="close-btn" data-close="help-panel" aria-label="Close help">×</button></div><p class="touch-guide-copy">Drag the left thumb pad to steer, or tilt it in the air for rolls and flips. GO drives in the selected gear. BOOST accelerates on its own; JUMP launches independently. Hold LEVEL in flight to recover.</p><div class="help-grid"><strong>Keyboard</strong><span>W / S · Accelerate / reverse</span><span>A / D or ← / → · Steer</span><span>Shift · Boost · Space · Jump · F · Level while airborne</span><span>Q / E · Roll · R · Reset · C · Camera · Esc · Pause · M · Locations</span><strong>Touch</strong><span>Analog pad · Steering / aerial rolls and pitch</span><span>GO · Drive · FWD/REV · Select gear</span><span>BOOST · Acceleration/nitro · JUMP · Launch · LEVEL · Recover</span><span>Bottom shortcuts · Reset · Camera · Pause · Help</span></div></section>
 <section id="building-info" class="building-info hidden" aria-live="polite"><button id="building-info-close" class="info-close" aria-label="Close building information">×</button><span id="building-info-type" class="eyebrow">OPENSTREETMAP BUILDING</span><h3 id="building-info-name">Building</h3><div id="building-info-attrs"></div></section>
 <div id="toast" class="toast"></div>
 <div class="orientation-tip" aria-hidden="true">LANDSCAPE RECOMMENDED</div>
 <nav class="mobile-utility" aria-label="Quick game controls"><button id="touch-reset" aria-label="Reset truck">↻ <span>RESET</span></button><button id="touch-camera" aria-label="Change camera">◉ <span>CAM</span></button><button id="touch-pause" aria-label="Pause game">Ⅱ <span>PAUSE</span></button><button id="touch-help" aria-label="Help and controls">? <span>HELP</span></button><button id="touch-control-mode" aria-label="Switch control display" aria-pressed="true">⌨ <span>KEYS</span></button></nav>
 <div class="mobile-controls" aria-label="Touch driving controls"><div class="touch-steering"><div id="analog-pad" class="analog-pad" role="application" aria-label="Drag to steer; move in the air to roll and pitch"><div class="analog-ring"></div><div id="analog-knob" class="analog-knob"><span>◉</span></div><small id="analog-label">STEER</small></div><div class="classic-pad"><button data-touch="a" aria-label="Steer left">◀<span>LEFT</span></button><button data-touch="d" aria-label="Steer right">▶<span>RIGHT</span></button></div></div><div class="touch-right"><div class="touch-action-row"><button data-touch="jump" aria-label="Tap to jump; hold briefly for extra height">⬆ <span>JUMP</span></button><button data-touch="nitro" class="nitro-touch" aria-label="Hold to boost independently">⚡ <span>BOOST</span></button><button id="touch-level" data-touch="level" class="level-touch" aria-label="Hold to level truck upright">↥ <span>LEVEL</span></button></div><div class="touch-drive-row"><button id="touch-gear" class="gear-button" aria-label="Toggle forward and reverse">FWD</button><button data-touch="go" class="go-button" aria-label="Hold to accelerate">GO <small>HOLD</small></button></div></div></div>
 <div class="loading-screen" id="loading"><div class="loader-mark">✦</div><div class="loader-title">MAPPING THE WILD</div><div class="loader-sub">LOADING REAL-WORLD TERRAIN</div><div class="loader-track"><i></i></div></div>`;let Ut=Un?"low":"high";const wa=e=>Un?{low:.82,medium:.93,high:1}[e]:{low:.85,medium:1.1,high:1.35}[e],Ca=()=>({width:Math.round(window.visualViewport?.width??innerWidth),height:Math.round(window.visualViewport?.height??innerHeight)}),Ei=Ca(),vt=new Eh({canvas:Q("#game"),antialias:!1,powerPreference:"high-performance"});vt.setPixelRatio(Math.min(devicePixelRatio||1,wa(Ut)));vt.setSize(Ei.width,Ei.height);vt.shadowMap.enabled=!1;vt.toneMapping=Fo;vt.toneMappingExposure=1.12;const Tt=new Ll;Tt.background=new We("#9bb7c1");Tt.fog=new Ho("#b9c4bc",105e-6);const Ft=new kn(60,Ei.width/Ei.height,.1,18e3);Ft.position.set(0,8,-16);Tt.add(new Dl(15398143,6443323,1.45));const Ko=new Ul(16772559,2.55);Ko.position.set(-350,550,260);Tt.add(Ko);const _a=new Kt({side:Rt,depthWrite:!1,depthTest:!1,toneMapped:!1,uniforms:{uRumbleDesert:{value:1},uRumbleAlpine:{value:0},uSunDirection:{value:new re(-.42,.63,.65).normalize()}},vertexShader:"varying vec3 vSkyDirection;void main(){vSkyDirection=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec3 vSkyDirection;uniform float uRumbleDesert;uniform float uRumbleAlpine;uniform vec3 uSunDirection;void main(){vec3 d=normalize(vSkyDirection);float h=smoothstep(-.16,.84,d.y);vec3 horizon=mix(vec3(.79,.72,.58),vec3(.66,.75,.77),uRumbleDesert);horizon=mix(horizon,vec3(.72,.79,.84),uRumbleAlpine);vec3 zenith=mix(vec3(.24,.37,.48),vec3(.3,.46,.55),uRumbleDesert);vec3 sky=mix(horizon,zenith,h);float sun=pow(max(dot(d,normalize(uSunDirection)),0.0),180.0);sky+=vec3(1.0,.72,.4)*sun*.32;gl_FragColor=vec4(sky,1.0);}"}),Ai=new ot(new Go(12e3,24,16),_a);Ai.frustumCulled=!1;Ai.renderOrder=-1e3;Tt.add(Ai);const ya=new Kt({transparent:!0,depthWrite:!1,toneMapped:!1,uniforms:{uOpacity:{value:.25}},vertexShader:"varying vec2 vShadowUv;void main(){vShadowUv=uv*2.0-1.0;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec2 vShadowUv;uniform float uOpacity;void main(){float r=length(vShadowUv);float a=(1.0-smoothstep(.18,1.0,r))*uOpacity;gl_FragColor=vec4(.12,.105,.085,a);}"}),ei=new ot(new Il(1,32),ya);ei.rotation.x=-Math.PI/2;ei.renderOrder=1;Tt.add(ei);const Qe=new Lh(Un?63:127);Tt.add(Qe.group);const ct=new Hh;Tt.add(ct.group,ct.roadsGroup);const pn=new Qh;Tt.add(pn.group);const gn=new jh;Tt.add(gn.group);let jt=new kh;Tt.add(jt.root);const J=new qh,{ArcadeCollisionWorld:np}=await ha(async()=>{const{ArcadeCollisionWorld:e}=await import("./collision-world-DMDY528w.js");return{ArcadeCollisionWorld:e}},__vite__mapDeps([0,1]),import.meta.url),Bt=new np;await Bt.init();const je=new Zh,ht=new ep,va="rumble-roam-best-stunt-score";function Sa(){try{return Number(localStorage.getItem(va))||0}catch{return 0}}const pt=new Xh(Sa());(location.hostname==="localhost"||location.hostname==="127.0.0.1")&&(window.__rumbleRoamDebug={spawnImpactTestBuilding(){Qe.frame&&ct.addFixtureRoad(Qe.frame,(i,a)=>Qe.heightAt(i,a));const e=jn(J.yaw),n=J.pos.clone().addScaledVector(e,11),t=ct.addFixtureBuilding(`fixture-impact-${Date.now()}`,n.x,n.z,(i,a)=>Qe.heightAt(i,a),Bt,{w:7,d:6,h:9});return It("LOCAL TEST BUILDING AHEAD"),t.id},spawnImpactTestSet(){const e=jn(J.yaw);return Qe.frame&&ct.addFixtureRoad(Qe.frame,(n,t)=>Qe.heightAt(n,t)),[10,27].map((n,t)=>{const i=J.pos.clone().addScaledVector(e,n);return ct.addFixtureBuilding(`fixture-impact-set-${Date.now()}-${t}`,i.x,i.z,(a,r)=>Qe.heightAt(a,r),Bt,t?{w:10,d:8,h:24}:{w:6,d:5,h:7}).id})},prepareMappedImpact(){const e=ct.list.filter(s=>s.source==="osm"&&!s.broken);e.sort((s,o)=>Math.hypot(s.x-J.pos.x,s.z-J.pos.z)-Math.hypot(o.x-J.pos.x,o.z-J.pos.z));const n=e[0];if(!n)return null;const t=new re(n.x-J.pos.x,0,n.z-J.pos.z).normalize();t.lengthSq()<.1&&t.set(0,0,1);const i=Math.max(n.w,n.d)*.5+6,a=n.x-t.x*i,r=n.z-t.z*i;return J.yaw=Math.atan2(t.x,t.z),J.pos.set(a,Qe.heightAt(a,r)+1.65*ni.scale,r),J.vel.set(0,0,0),J.grounded=!0,J.pitch=0,J.roll=0,Bt.step(J.pos,J.yaw,1/120,J.vel),Bt.step(J.pos,J.yaw,1/120,J.vel),J.vel.copy(t).multiplyScalar(24),n.id},hasFixtureRoad(){return ct.roadsGroup.children.some(e=>e.userData.kind==="fixture-road")}});const ni={gravity:24,jump:15,scale:1};Q("#graphics-quality").value=Ut;let _n="chase",Yt=!1,Ea=0,Xn=.25,Qt=null,Ma=null,wn=qo[1],Zi=0,ti=performance.now(),Dt=0,po=0,mo=0,Qi=performance.now(),ui=0,gi=0,ji=0,fi=0,go=0,_o=0;const vo=new Nl,So=new at;Q("#building-info-close").onclick=()=>Q("#building-info").classList.add("hidden");Q("#game").addEventListener("pointerup",e=>{if(e.button!==0||rn.classList.contains("overlay-open"))return;const n=Q("#game").getBoundingClientRect();So.set((e.clientX-n.left)/n.width*2-1,-(e.clientY-n.top)/n.height*2+1),vo.setFromCamera(So,Ft);const t=vo.intersectObjects(ct.group.children,!1).find(m=>m.object.isBatchedMesh&&m.batchId!==void 0);if(!t)return;const i=ct.list.find(m=>m.batch===t.object&&m.instanceId===t.batchId);if(!i||i.broken||!i.tags)return;const a=i.tags,r=Q("#building-info"),s=[a["addr:housenumber"],a["addr:street"]].filter(Boolean).join(" ");Q("#building-info-name").textContent=a.name??(s||(i.category==="other"?"Mapped building":i.category[0].toUpperCase()+i.category.slice(1))),Q("#building-info-type").textContent=a["building:part"]?"OPENSTREETMAP BUILDING PART":"OPENSTREETMAP BUILDING";const o=[["Type",a.building??a["building:part"]??"—"],["Height",a.height??a["building:height"]??(a["building:levels"]?`${a["building:levels"]} levels`:"")],["Name",a.name??""],["Address",s]],h=Q("#building-info-attrs");h.replaceChildren();const u=document.createElement("dl");for(const[m,c]of o)if(c){const _=document.createElement("dt");_.textContent=m;const g=document.createElement("dd");g.textContent=c,u.append(_,g)}h.append(u),r.classList.remove("hidden")});function ip(){const e=performance.memory;return e?Math.round(e.usedJSHeapSize/1048576*10)/10:null}function It(e){const n=Q("#toast");n.textContent=e,n.classList.add("show"),clearTimeout(po),po=window.setTimeout(()=>n.classList.remove("show"),2800)}function Pa(){je.releaseAll(),Q("#analog-knob").style.transform="translate(0,0)",Q("#analog-pad").classList.remove("dragging")}function kt(){const e=["location-panel","settings-panel","help-panel","pause-panel"].some(n=>!Q("#"+n).classList.contains("hidden"));rn.classList.toggle("overlay-open",e),e&&Pa()}async function Ri(e){const n=++Zi;wn=e,Yt=!1,gi=0,Q("#building-info").classList.add("hidden"),gn.clear(),ct.reset(Bt),Q("#geo-status").textContent="GEOGRAPHIC DATA · LOADING";const t=e.name.toLowerCase(),i=/moab|grand canyon|sahara|utah|arizona/.test(t),a=/alps|everest|mountain|swiss/.test(t);_a.uniforms.uRumbleDesert.value=i?1:0,_a.uniforms.uRumbleAlpine.value=a?1:0,Tt.fog instanceof Ho&&Tt.fog.color.set(i?"#c5a983":a?"#b9c8d3":"#b9c4bc"),["location-panel","settings-panel","help-panel","pause-panel"].forEach(r=>Q("#"+r).classList.add("hidden")),kt(),Q("#loading").classList.remove("done"),Q("#place-name").textContent=e.name,Q("#terrain-name").textContent=e.terrain??"OPEN TERRAIN",It("Mapping terrain…"),await Qe.load(e),n===Zi&&(J.reset(Qe,ni.scale),pt.reset(),Q("#loading").classList.add("done"),It("Terrain is ready. Go make a mess."),ct.load(e,(r,s)=>Qe.heightAt(r,s),Bt,Qe.frame).then(r=>{n===Zi&&(r.heading!==void 0&&J.speed<2&&(J.yaw=r.heading),Q("#geo-status").textContent=r.message,It(r.source==="osm"?`OSM map · ${r.buildings} buildings · ${r.roads} street/path lines`:"No packaged map data here. Terrain only; no practice obstacles were added."))}),Qt?.flyTo({center:[e.lon,e.lat],zoom:12}),Ma?.setLngLat([e.lon,e.lat]))}Q("#practice-course").addEventListener("click",()=>{const e=ct.addPracticeCourse((n,t)=>Qe.heightAt(n,t),Bt);Q("#geo-status").textContent=`${ct.status.message} · OPTIONAL PRACTICE OBSTACLES`,It(e?`Optional practice course added · ${e} obstacles`:"Practice obstacles are already active.")});qo.forEach((e,n)=>{const t=document.createElement("button");t.className="preset",t.innerHTML=`<span class="preset-index">0${n+1}</span><span>${e.name}</span><i>↗</i>`,t.onclick=()=>Ri(e),Q("#presets").append(t)});Q("#search-form").addEventListener("submit",async e=>{e.preventDefault();const n=Q("#location-search").value.trim();if(!n)return;const t=Q("#search-results");t.innerHTML='<div class="search-status">SEARCHING THE GLOBE…</div>';try{const i=await wh(n);if(!i.length){t.innerHTML='<div class="search-status">No places found. Try a nearby town or coordinates.</div>';return}t.innerHTML="";for(const a of i){const r=document.createElement("button");r.className="result",r.innerHTML=`<span>⌖</span><span>${a.name}</span><i>↗</i>`,r.onclick=()=>Ri(a),t.append(r)}}catch{t.innerHTML='<div class="search-status">Location search is busy. Try coordinates like 40.7, -73.9.</div>'}});Q("#location-search").addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),Q("#search-form").requestSubmit())});Q("#map-btn").onclick=async()=>{if(Q("#location-panel").classList.toggle("hidden"),Q("#settings-panel").classList.add("hidden"),Q("#help-panel").classList.add("hidden"),kt(),Qt)setTimeout(()=>Qt?.resize(),100);else{const[n,t]=await Promise.all([ha(()=>import("./maplibre-gl-BT_db7in.js"),[],import.meta.url),ha(()=>import("./maplibre-gl-worker-re4DVwB4.js"),[],import.meta.url)]);n.setWorkerUrl(t.default),Qt=new n.Map({container:"mini-map",style:"https://tiles.openfreemap.org/styles/liberty",center:[wn.lon,wn.lat],zoom:10,attributionControl:!1}),Qt.addControl(new n.NavigationControl({showCompass:!1}),"top-right"),Ma=new n.Marker({color:"#f2632b"}).setLngLat([wn.lon,wn.lat]).addTo(Qt),Qt.on("click",i=>{const a={name:`${i.lngLat.lat.toFixed(4)}, ${i.lngLat.lng.toFixed(4)}`,lat:i.lngLat.lat,lon:i.lngLat.lng};Ma?.setLngLat(i.lngLat);const r=document.createElement("button");r.className="result",r.innerHTML=`<span>⌖</span><span>Drive at ${a.name}</span><i>↗</i>`,r.onclick=()=>Ri(a),Q("#search-results").replaceChildren(r)})}};Q("#settings-btn").onclick=()=>{Q("#settings-panel").classList.toggle("hidden"),Q("#location-panel").classList.add("hidden"),Q("#help-panel").classList.add("hidden"),kt()};const La=()=>{Q("#help-panel").classList.toggle("hidden"),Q("#location-panel").classList.add("hidden"),Q("#settings-panel").classList.add("hidden"),kt()};Q("#help-btn").onclick=La;Q("#touch-help").onclick=La;document.querySelectorAll("[data-close]").forEach(e=>e.addEventListener("click",()=>{Q("#"+e.dataset.close).classList.add("hidden"),kt()}));const Da=(e,n,t)=>{const i=Q("#"+e);i.oninput=()=>{const a=+i.value/(n==="scale"?10:1);ni[n]=a,Q("#"+n+"-value").textContent=t(a),n==="scale"&&jt.root.scale.setScalar(a)}};Da("gravity","gravity",e=>e.toFixed(0));Da("jump","jump",e=>e.toFixed(0));Da("scale","scale",e=>e.toFixed(1)+"×");Q("#paint").addEventListener("input",e=>jt.setColor(e.target.value));function ap(e){Ut=e,Q("#graphics-quality").value=e,vt.setPixelRatio(Math.min(devicePixelRatio||1,wa(e)));const n=Ca();vt.setSize(n.width,n.height),Qe.setVisualQuality(e),pn.setQuality(e),gn.setQuality(e),ya.uniforms.uOpacity.value=$o(e)}const $o=e=>e==="low"?.18:e==="medium"?.23:.29;Q("#graphics-quality").addEventListener("change",e=>ap(e.target.value));Qe.setVisualQuality(Ut);pn.setQuality(Ut);gn.setQuality(Ut);ya.uniforms.uOpacity.value=$o(Ut);Q("#audio-toggle").addEventListener("change",e=>{const n=e.target.checked;n&&ht.start(),ht.setMuted(!n),Q("#audio-status").textContent=n?"Audio enabled.":"Audio muted."});Q("#master-volume").addEventListener("input",e=>{const n=+e.target.value;ht.setMasterVolume(n/100),Q("#volume-value").textContent=`${n}%`});Q("#audio-test").addEventListener("click",()=>{ht.start();const e=ht.testTone();Q("#audio-status").textContent=e?"Test tone playing through the game audio output.":"Unmute audio to play the test tone.",e||It("Turn Audio on to hear the test.")});function Ua(){J.reset(Qe,ni.scale),pt.reset(),jt.root.visible=!0,It("Truck recovered. Send it!")}function Ia(e){const n=["chase","far","hood","free"];_n=e??n[(n.indexOf(_n)+1)%n.length],document.querySelectorAll("[data-camera]").forEach(t=>t.classList.toggle("selected",t.dataset.camera===_n))}function Na(){Yt=!Yt,Yt&&je.releaseAll(),Q("#pause-panel").classList.toggle("hidden",!Yt),kt()}Q("#reset-btn").onclick=Ua;Q("#touch-reset").onclick=()=>{ht.start(),Ua()};Q("#touch-camera").onclick=()=>Ia();Q("#touch-pause").onclick=()=>Na();Q("#resume-btn").onclick=()=>{ht.start(),Yt=!1,ti=performance.now(),Q("#pause-panel").classList.add("hidden"),kt()};Q("#pause-btn").onclick=()=>Na();Q("#pause-location").onclick=()=>{Q("#pause-panel").classList.add("hidden"),kt(),Q("#map-btn").click()};document.querySelectorAll("[data-camera]").forEach(e=>e.addEventListener("click",()=>Ia(e.dataset.camera)));const Ji=Q("#steering-mode"),ea=Q("#steering-sensitivity");Ji.addEventListener("change",()=>{je.setSteeringMode(Ji.value),rn.classList.toggle("classic-steering",Ji.value==="buttons")});ea.addEventListener("input",()=>{je.setSensitivity(+ea.value/100),Q("#sensitivity-value").textContent=`${ea.value}%`});Q("#touch-gear").addEventListener("click",()=>{const e=je.toggleGear();Q("#touch-gear").textContent=e===1?"FWD":"REV",Q("#touch-gear").setAttribute("aria-label",e===1?"Forward selected; toggle to reverse":"Reverse selected; toggle to forward")});const qn=Q("#touch-control-mode");qn.textContent=Un?"⌨ KEYS":"◉ TOUCH";qn.setAttribute("aria-pressed",String(!rn.classList.contains("keyboard-controls-visible")));qn.onclick=()=>{const e=rn.classList.toggle("keyboard-controls-visible");qn.innerHTML=e?"◉ <span>TOUCH</span>":"⌨ <span>KEYS</span>",qn.setAttribute("aria-pressed",String(!e))};window.addEventListener("keydown",e=>{e.repeat||ga(e.target)||(e.key.toLowerCase()==="m"&&Q("#map-btn").click(),e.key.toLowerCase()==="c"&&Ia(),e.key.toLowerCase()==="r"&&Ua(),e.key==="Escape"&&Na(),(e.key==="?"||e.key.toLowerCase()==="h")&&La(),(e.key===" "||e.key.toLowerCase()==="w")&&ht.start())});document.querySelectorAll("[data-touch]").forEach(e=>{const n=e.dataset.touch;e.addEventListener("pointerdown",t=>{if(!(t.pointerType==="mouse"&&t.button!==0)){t.preventDefault(),je.pointerDown(t.pointerId,n);try{e.setPointerCapture(t.pointerId)}catch{}ht.start()}}),e.addEventListener("pointerup",t=>{t.preventDefault(),je.pointerUp(t.pointerId)}),e.addEventListener("pointercancel",t=>je.pointerCancel(t.pointerId)),e.addEventListener("lostpointercapture",t=>je.lostPointerCapture(t.pointerId))});const Gt=Q("#analog-pad"),Zo=Q("#analog-knob");Gt.addEventListener("pointerdown",e=>{if(e.pointerType==="mouse"&&e.button!==0)return;e.preventDefault();const n=Gt.getBoundingClientRect();je.analog.pointerDown(e.pointerId,e.clientX,e.clientY,Math.min(n.width,n.height)*.42),Gt.classList.add("dragging");try{Gt.setPointerCapture(e.pointerId)}catch{}ht.start()});Gt.addEventListener("pointermove",e=>{if(je.analog.pointerId!==e.pointerId)return;e.preventDefault();const n=Gt.getBoundingClientRect();je.analog.pointerMove(e.pointerId,e.clientX,e.clientY);const t=Math.min(n.width,n.height)*.32;Zo.style.transform=`translate(${je.analog.x*t}px,${je.analog.y*t}px)`});const Oa=e=>{je.analog.pointerUp(e.pointerId),Zo.style.transform="translate(0,0)",Gt.classList.remove("dragging")};Gt.addEventListener("pointerup",Oa);Gt.addEventListener("pointercancel",Oa);Gt.addEventListener("lostpointercapture",Oa);window.addEventListener("blur",()=>Pa());document.addEventListener("visibilitychange",()=>{ti=performance.now(),document.hidden&&(Pa(),Yt=!0,Q("#pause-panel").classList.remove("hidden"),kt())});window.addEventListener("pointermove",e=>{_n==="free"&&e.buttons&&(Ea-=e.movementX*.004,Xn=St.clamp(Xn-e.movementY*.003,-.3,1.1))});let Eo=0,ta=60;function rp(e){const n=J.pos,t=jn(J.yaw),i=Math.min(1,J.speed/28),a=Math.max(-35,Math.min(35,(J.speed-Eo)/Math.max(e,.001)));Eo=J.speed;let r,s;if(_n==="hood")r=n.clone().add(new re(0,2.3,0)).addScaledVector(t,1.2),s=r.clone().addScaledVector(t,7).add(new re(0,.3,0));else if(_n==="free"){const u=new re(Math.sin(Ea)*Math.cos(Xn),Math.sin(Xn),Math.cos(Ea)*Math.cos(Xn));r=n.clone().add(new re(0,1.5,0)),s=r.clone().addScaledVector(u,-14)}else{const u=_n==="far",m=(u?30:11.8)+i*(u?8:3.8),c=(u?10:5.35)+i*1.6;r=n.clone().add(new re(0,1.4,0)).addScaledVector(t,J.speed*.2),s=n.clone().addScaledVector(t,-m).add(new re(0,c,0)).addScaledVector(J.vel,-.11),u||s.addScaledVector(Ra(J.yaw),2.3),s.addScaledVector(t,-St.clamp(a*.018,-.8,.8))}const o=r;Dt>0&&(s.x+=(Math.random()-.5)*Dt,s.y+=(Math.random()-.5)*Dt,Dt=Math.max(0,Dt-e*1.3)),Ft.position.lerp(s,1-Math.exp(-(5.4-i*.65)*e)),Ft.lookAt(o);const h=60+i*4.5;Math.abs(h-ta)>.15&&(ta=h,Ft.fov=ta,Ft.updateProjectionMatrix())}function Qo(e){requestAnimationFrame(Qo);const n=performance.now(),t=Math.min((e-ti)/1e3,.045);if(ti=e,!Yt){const h=je.update(!J.grounded),u=J.grounded,m=J.vel.y,c=performance.now();J.update(t,h,Qe,jt,ni),_o=performance.now()-c,rn.classList.toggle("airborne",!J.grounded);const _=pt.update({grounded:J.grounded,airtime:J.airTime,pitch:J.pitch,roll:J.roll,landingSpeed:Math.abs(m)});if(u&&!J.grounded&&h.jump&&(ht.jump(),Dt=Math.max(Dt,.07)),!u&&J.grounded&&(ht.landing(Math.min(1,Math.abs(m)/20)),Dt=Math.max(Dt,Math.min(.28,Math.abs(m)*.008)),_&&(It(`${_.message}  +${_.points.toLocaleString()} PTS`),pt.bestScore>Sa())))try{localStorage.setItem(va,String(pt.bestScore))}catch{}const g=Bt.step(J.pos,J.yaw,t,J.vel);if(g){const x=ct.break(g.building);if(Bt.removeBuilding(g.building),x){gi++;const d=Math.round(100+Math.min(420,g.building.h*12)+g.intensity*120);pt.awardBonus(d);try{pt.bestScore>Sa()&&localStorage.setItem(va,String(pt.bestScore))}catch{}gn.destroy(g.building,g,(l,A)=>Qe.heightAt(l,A)),pn.burst(g.position,Math.round(22+g.intensity*20),16752988),J.vel.addScaledVector(g.normal,-(1.5+g.intensity*4)),J.vel.y+=1+g.intensity*2.5,Dt=Math.max(Dt,.2+g.intensity*.48),ht.impact(g.intensity),It(gi>1?`MULTI-SMASH · +${d} PTS`:`BUILDING SMASHED · DEMOLITION BONUS +${d}`)}}const T=Math.abs(J.vel.dot(Ra(J.yaw)));for(let x=0;x<J.wheelContacts.length;x++){const d=J.wheelContacts[x];pn.dust(new re(d.x,d.height+.07,d.z),J.speed*(T>J.speed*.28?1.35:1))}if(h.nitro&&J.nitro>0&&Math.random()<t*8){const x=J.pos.clone().addScaledVector(jn(J.yaw),-1.72);pn.burst(x.add(new re((Math.random()-.5)*.9,.9,(Math.random()-.5)*.35)),1,16742965)}pn.update(t),gn.update(t),ct.updateVisibility(J.pos.x,J.pos.z,Ut==="low"?500:Ut==="medium"?800:1100),ht.update(J.speed,Math.max(0,h.throttle),h.nitro&&J.nitro>0,Math.max(h.handbrake?.55:0,T/Math.max(4,J.speed))),rp(t)}Ai.position.copy(Ft.position);const i=J.wheelContacts.reduce((h,u)=>Math.max(h,u.height),-1/0),a=Number.isFinite(i)?i:Qe.heightAt(J.pos.x,J.pos.z),r=St.clamp(J.pos.y-a,0,80);ei.position.set(J.pos.x,a+.035,J.pos.z),ei.scale.set(1.35+r*.055,2+r*.07,1),Q("#speed").textContent=String(Math.round(J.speed*3.6)).padStart(3,"0"),Q("#speed-bar").style.width=`${Math.min(100,J.speed/30*100)}%`,Q("#nitro-bar").style.width=`${J.nitro}%`,Q("#nitro-state").textContent=J.nitro>5?"READY TO BURN":"RECHARGING",Q("#air-time").textContent=`${pt.airtime.toFixed(1)}s`,Q("#stunt-score").textContent=pt.currentPoints.toLocaleString(),Q("#stunt-best").textContent=pt.bestScore.toLocaleString(),e-mo>900&&Qe.frame&&(mo=e,Q("#street-name").textContent=ct.nearestStreetName(J.pos.x,J.pos.z,Qe.frame)||""),Q("#level-hint").textContent=pt.isAirborne?je.state.level?"LEVELING…":"F / LEVEL TO RIGHT":"",Q("#touch-level").classList.toggle("active",je.state.level??!1);const s=performance.now();vt.render(Tt,Ft),go=performance.now()-s;const o=performance.now()-n;if(ji+=o,fi=Math.max(fi,o),ui++,e-Qi>=1e3){const h=Qe.takePerformanceSample();window.__monsterMapMetrics={fps:Math.round(ui*1e3/(e-Qi)),frameMs:Math.round(ji/ui*10)/10,frameMsMax:Math.round(fi*10)/10,physicsMs:+_o.toFixed(2),renderMs:+go.toFixed(2),terrainSampleMs:+h.heightSampleMs.toFixed(3),terrainSamples:h.heightSamples,terrainTileBuildMs:+h.tileBuildMs.toFixed(3),terrainTileBuilds:h.tileBuilds,pixelRatio:vt.getPixelRatio(),graphicsQuality:Ut,drawCalls:vt.info.render.calls,triangles:vt.info.render.triangles,geometries:vt.info.memory.geometries,textures:vt.info.memory.textures,heapMB:ip(),audioState:ht.getState(),audioRms:+ht.outputRms().toFixed(4),audioMuted:ht.isMuted(),volume:ht.getMasterVolume(),speed:J.speed,position:[J.pos.x,J.pos.y,J.pos.z],destroyed:gi,activeDebris:gn.activeCount,osmBuildings:ct.status.buildings,osmRoads:ct.status.roads,worldDataSource:ct.status.source,yaw:J.yaw,pitch:J.pitch,roll:J.roll,steer:je.state.steer,throttle:je.state.throttle,nitro:je.state.nitro,jump:je.state.jump,grounded:J.grounded,activeTouchActions:je.touches.size,frontWheelAngles:jt.frontWheels.map(u=>u.rotation.y),rearWheelAngles:jt.wheels.filter(u=>!jt.frontWheels.includes(u)).map(u=>u.rotation.y),wheelContacts:J.wheelContacts.filter(u=>u.contact).length,averageCompression:J.wheelContacts.reduce((u,m)=>u+m.compression,0)/Math.max(1,J.wheelContacts.length),contactPitch:J.contactPitch,contactRoll:J.contactRoll,terrainOriginHeight:Qe.heightAt(0,0),stuntAirtime:pt.airtime,stuntPoints:pt.currentPoints,bestStunt:pt.bestScore,stuntRolls:pt.rolls,stuntFlips:pt.flips,leveling:je.state.level??!1},ui=0,ji=0,fi=0,Qi=e}}function wi(){const e=Ca();vt.setPixelRatio(Math.min(devicePixelRatio||1,wa(Ut))),vt.setSize(e.width,e.height),Ft.aspect=e.width/Math.max(1,e.height),Ft.updateProjectionMatrix(),Qt?.resize()}window.addEventListener("resize",wi);window.addEventListener("orientationchange",()=>setTimeout(wi,180));window.visualViewport?.addEventListener("resize",wi);const jo=Q("#game");jo.addEventListener("webglcontextlost",e=>{e.preventDefault(),je.releaseAll(),Yt=!0,Q("#pause-panel").classList.remove("hidden"),kt(),It("Graphics paused. Return to the game when ready.")});jo.addEventListener("webglcontextrestored",()=>{ti=performance.now(),wi(),It("Graphics restored.")});await Ri(wn);requestAnimationFrame(Qo);
