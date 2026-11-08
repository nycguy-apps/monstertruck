const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./collision-world-CbzMsxrv.js","./three.core-yorVyHlg.js"])))=>i.map(i=>d[i]);
import{c as Ho,N as Kt,S as Vo,C as We,F as to,M as Vt,V as ae,R as ko,a as vt,w as Xi,W as Pa,b as Mn,d as at,L as yn,H as pi,U as pn,D as Ut,B as xt,e as Hn,f as hi,p as zo,E as Wo,g as ht,P as Dn,A as Xo,h as Ti,i as Ft,j as ci,k as da,l as Vn,m as kn,n as no,o as qo,q as gn,r as di,s as Yo,t as Ko,u as Rn,O as $o,v as Zo,x as Qo,y as Jo,z as jo,G as es,I as ts,J as ns,K as is,Q as as,T as rs,X as os,Y as ss,Z as ls,_ as cs,$ as ds,a0 as us,a1 as fs,a2 as Ai,a3 as vn,a4 as Qn,a5 as ps,a6 as In,a7 as hs,a8 as ms,a9 as _s,aa as gs,ab as io,ac as vs,ad as Ss,ae as Es,af as Ms,ag as He,ah as xs,ai as Ts,aj as As,ak as kt,al as zn,am as cn,an as rt,ao,ap as dn,aq as Ot,ar as ui,as as ro,at as oo,au as so,av as lo,aw as bs,ax as Rs,ay as ws,az as Cs,aA as co,aB as on,aC as Ps,aD as Ls,aE as ys,aF as uo,aG as Us,aH as fo,aI as po,aJ as bi,aK as Ri,aL as wi,aM as Ci,aN as $e,aO as La,aP as ya,aQ as Ua,aR as Da,aS as Ia,aT as Na,aU as Oa,aV as Fa,aW as Ba,aX as Ga,aY as Ha,aZ as Va,a_ as ka,a$ as za,b0 as Wa,b1 as Xa,b2 as qa,b3 as Ya,b4 as Ka,b5 as $a,b6 as Za,b7 as Qa,b8 as Ja,b9 as ja,ba as er,bb as tr,bc as nr,bd as ir,be as qi,bf as Yi,bg as Ki,bh as $i,bi as Zi,bj as Qi,bk as Ji,bl as Ds,bm as ar,bn as Is,bo as oi,bp as Ns,bq as rr,br as or,bs as sr,bt as ji,bu as ea,bv as Os,bw as ho,bx as Fs,by as mi,bz as Bs,bA as Gs,bB as mo,bC as hn,bD as lr,bE as Nn,bF as cr,bG as _o,bH as Wn,bI as xn,bJ as Hs,bK as go,bL as Vs,bM as ks,bN as zs,bO as dr,bP as _t,bQ as Ws,bR as Xs,bS as qs,bT as Ys,bU as Ks,bV as vo,bW as $s,bX as Zs,bY as Qs,bZ as Js,b_ as js,b$ as el,c0 as tl,c1 as nl,c2 as il,c3 as al,c4 as rl,c5 as ol,c6 as sn,c7 as Ct,c8 as Bt,c9 as ur,ca as ta,cb as So,cc as Wt,cd as fr,ce as sl,cf as Pi,cg as pr,ch as hr,ci as mr,cj as nn,ck as Eo,cl as ll,cm as cl,cn as dl,co as Mo,cp as ul,cq as fl,cr as pl}from"./three.core-yorVyHlg.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const hl="modulepreload",ml=function(e,n){return new URL(e,n).href},_r={},na=function(n,t,i){let r=Promise.resolve();if(t&&t.length>0){let s=function(m){return Promise.all(m.map(p=>Promise.resolve(p).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const o=document.getElementsByTagName("link"),h=document.querySelector("meta[property=csp-nonce]"),u=h?.nonce||h?.getAttribute("nonce");r=s(t.map(m=>{if(m=ml(m,i),m in _r)return;_r[m]=!0;const p=m.endsWith(".css"),g=p?'[rel="stylesheet"]':"";if(!!i)for(let M=o.length-1;M>=0;M--){const d=o[M];if(d.href===m&&(!p||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${g}`))return;const A=document.createElement("link");if(A.rel=p?"stylesheet":hl,p||(A.as="script"),A.crossOrigin="",A.href=m,u&&A.setAttribute("nonce",u),document.head.appendChild(A),p)return new Promise((M,d)=>{A.addEventListener("load",M),A.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${m}`)))})}))}function a(s){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s}return r.then(s=>{for(const o of s||[])o.status==="rejected"&&a(o.reason);return n().catch(a)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xo(){let e=null,n=!1,t=null,i=null;function r(a,s){t(a,s),i=e.requestAnimationFrame(r)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(r),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(a){t=a},setContext:function(a){e=a}}}function _l(e){const n=new WeakMap;function t(o,h){const u=o.array,m=o.usage,p=u.byteLength,g=e.createBuffer();e.bindBuffer(h,g),e.bufferData(h,u,m),o.onUploadCallback();let E;if(u instanceof Float32Array)E=e.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)E=e.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?E=e.HALF_FLOAT:E=e.UNSIGNED_SHORT;else if(u instanceof Int16Array)E=e.SHORT;else if(u instanceof Uint32Array)E=e.UNSIGNED_INT;else if(u instanceof Int32Array)E=e.INT;else if(u instanceof Int8Array)E=e.BYTE;else if(u instanceof Uint8Array)E=e.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)E=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:E,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,h,u){const m=h.array,p=h.updateRanges;if(e.bindBuffer(u,o),p.length===0)e.bufferSubData(u,0,m);else{p.sort((E,A)=>E.start-A.start);let g=0;for(let E=1;E<p.length;E++){const A=p[g],M=p[E];M.start<=A.start+A.count+1?A.count=Math.max(A.count,M.start+M.count-A.start):(++g,p[g]=M)}p.length=g+1;for(let E=0,A=p.length;E<A;E++){const M=p[E];e.bufferSubData(u,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}h.clearUpdateRanges()}h.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),n.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const h=n.get(o);h&&(e.deleteBuffer(h.buffer),n.delete(o))}function s(o,h){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const m=n.get(o);(!m||m.version<o.version)&&n.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=n.get(o);if(u===void 0)n.set(o,t(o,h));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,h),u.version=o.version}}return{get:r,remove:a,update:s}}var gl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vl=`#ifdef USE_ALPHAHASH
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
#endif`,Sl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,El=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ml=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tl=`#ifdef USE_AOMAP
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
#endif`,Al=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bl=`#ifdef USE_BATCHING
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
#endif`,Rl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pl=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ll=`#ifdef USE_IRIDESCENCE
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
#endif`,yl=`#ifdef USE_BUMPMAP
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
#endif`,Ul=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Il=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ol=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gl=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Hl=`#define PI 3.141592653589793
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
} // validated`,Vl=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kl=`vec3 transformedNormal = objectNormal;
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
#endif`,zl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ql=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yl="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kl=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$l=`#ifdef USE_ENVMAP
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
#endif`,Zl=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ql=`#ifdef USE_ENVMAP
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
#endif`,Jl=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jl=`#ifdef USE_ENVMAP
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
#endif`,ec=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ic=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ac=`#ifdef USE_GRADIENTMAP
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
}`,rc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lc=`uniform bool receiveShadow;
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
#endif`,cc=`#ifdef USE_ENVMAP
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
#endif`,dc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hc=`PhysicalMaterial material;
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
#endif`,mc=`struct PhysicalMaterial {
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
}`,_c=`
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
#endif`,gc=`#if defined( RE_IndirectDiffuse )
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
#endif`,vc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ec=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ac=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rc=`#if defined( USE_POINTS_UV )
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
#endif`,wc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pc=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lc=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uc=`#ifdef USE_MORPHTARGETS
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
#endif`,Dc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ic=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nc=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Oc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gc=`#ifdef USE_NORMALMAP
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
#endif`,Hc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xc=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$c=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ed=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,td=`float getShadowMask() {
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
}`,nd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,id=`#ifdef USE_SKINNING
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
#endif`,ad=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rd=`#ifdef USE_SKINNING
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
#endif`,od=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ld=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dd=`#ifdef USE_TRANSMISSION
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
#endif`,ud=`#ifdef USE_TRANSMISSION
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
#endif`,fd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,md=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _d=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gd=`uniform sampler2D t2D;
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
}`,vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Md=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xd=`#include <common>
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
}`,Td=`#if DEPTH_PACKING == 3200
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
}`,Ad=`#define DISTANCE
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
}`,bd=`#define DISTANCE
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
}`,Rd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cd=`uniform float scale;
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
}`,Pd=`uniform vec3 diffuse;
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
}`,Ld=`#include <common>
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
}`,yd=`uniform vec3 diffuse;
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
}`,Ud=`#define LAMBERT
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
}`,Dd=`#define LAMBERT
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
}`,Id=`#define MATCAP
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
}`,Nd=`#define MATCAP
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
}`,Od=`#define NORMAL
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
}`,Fd=`#define NORMAL
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
}`,Bd=`#define PHONG
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
}`,Gd=`#define PHONG
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
}`,Hd=`#define STANDARD
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
}`,Vd=`#define STANDARD
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
}`,kd=`#define TOON
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
}`,zd=`#define TOON
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
}`,Wd=`uniform float size;
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
}`,Xd=`uniform vec3 diffuse;
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
}`,qd=`#include <common>
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
}`,Yd=`uniform vec3 color;
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
}`,Kd=`uniform float rotation;
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
}`,$d=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:gl,alphahash_pars_fragment:vl,alphamap_fragment:Sl,alphamap_pars_fragment:El,alphatest_fragment:Ml,alphatest_pars_fragment:xl,aomap_fragment:Tl,aomap_pars_fragment:Al,batching_pars_vertex:bl,batching_vertex:Rl,begin_vertex:wl,beginnormal_vertex:Cl,bsdfs:Pl,iridescence_fragment:Ll,bumpmap_pars_fragment:yl,clipping_planes_fragment:Ul,clipping_planes_pars_fragment:Dl,clipping_planes_pars_vertex:Il,clipping_planes_vertex:Nl,color_fragment:Ol,color_pars_fragment:Fl,color_pars_vertex:Bl,color_vertex:Gl,common:Hl,cube_uv_reflection_fragment:Vl,defaultnormal_vertex:kl,displacementmap_pars_vertex:zl,displacementmap_vertex:Wl,emissivemap_fragment:Xl,emissivemap_pars_fragment:ql,colorspace_fragment:Yl,colorspace_pars_fragment:Kl,envmap_fragment:$l,envmap_common_pars_fragment:Zl,envmap_pars_fragment:Ql,envmap_pars_vertex:Jl,envmap_physical_pars_fragment:cc,envmap_vertex:jl,fog_vertex:ec,fog_pars_vertex:tc,fog_fragment:nc,fog_pars_fragment:ic,gradientmap_pars_fragment:ac,lightmap_pars_fragment:rc,lights_lambert_fragment:oc,lights_lambert_pars_fragment:sc,lights_pars_begin:lc,lights_toon_fragment:dc,lights_toon_pars_fragment:uc,lights_phong_fragment:fc,lights_phong_pars_fragment:pc,lights_physical_fragment:hc,lights_physical_pars_fragment:mc,lights_fragment_begin:_c,lights_fragment_maps:gc,lights_fragment_end:vc,logdepthbuf_fragment:Sc,logdepthbuf_pars_fragment:Ec,logdepthbuf_pars_vertex:Mc,logdepthbuf_vertex:xc,map_fragment:Tc,map_pars_fragment:Ac,map_particle_fragment:bc,map_particle_pars_fragment:Rc,metalnessmap_fragment:wc,metalnessmap_pars_fragment:Cc,morphinstance_vertex:Pc,morphcolor_vertex:Lc,morphnormal_vertex:yc,morphtarget_pars_vertex:Uc,morphtarget_vertex:Dc,normal_fragment_begin:Ic,normal_fragment_maps:Nc,normal_pars_fragment:Oc,normal_pars_vertex:Fc,normal_vertex:Bc,normalmap_pars_fragment:Gc,clearcoat_normal_fragment_begin:Hc,clearcoat_normal_fragment_maps:Vc,clearcoat_pars_fragment:kc,iridescence_pars_fragment:zc,opaque_fragment:Wc,packing:Xc,premultiplied_alpha_fragment:qc,project_vertex:Yc,dithering_fragment:Kc,dithering_pars_fragment:$c,roughnessmap_fragment:Zc,roughnessmap_pars_fragment:Qc,shadowmap_pars_fragment:Jc,shadowmap_pars_vertex:jc,shadowmap_vertex:ed,shadowmask_pars_fragment:td,skinbase_vertex:nd,skinning_pars_vertex:id,skinning_vertex:ad,skinnormal_vertex:rd,specularmap_fragment:od,specularmap_pars_fragment:sd,tonemapping_fragment:ld,tonemapping_pars_fragment:cd,transmission_fragment:dd,transmission_pars_fragment:ud,uv_pars_fragment:fd,uv_pars_vertex:pd,uv_vertex:hd,worldpos_vertex:md,background_vert:_d,background_frag:gd,backgroundCube_vert:vd,backgroundCube_frag:Sd,cube_vert:Ed,cube_frag:Md,depth_vert:xd,depth_frag:Td,distanceRGBA_vert:Ad,distanceRGBA_frag:bd,equirect_vert:Rd,equirect_frag:wd,linedashed_vert:Cd,linedashed_frag:Pd,meshbasic_vert:Ld,meshbasic_frag:yd,meshlambert_vert:Ud,meshlambert_frag:Dd,meshmatcap_vert:Id,meshmatcap_frag:Nd,meshnormal_vert:Od,meshnormal_frag:Fd,meshphong_vert:Bd,meshphong_frag:Gd,meshphysical_vert:Hd,meshphysical_frag:Vd,meshtoon_vert:kd,meshtoon_frag:zd,points_vert:Wd,points_frag:Xd,shadow_vert:qd,shadow_frag:Yd,sprite_vert:Kd,sprite_frag:$d},ie={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},yt={basic:{uniforms:_t([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:_t([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new We(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:_t([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:_t([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:_t([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new We(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:_t([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:_t([ie.points,ie.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:_t([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:_t([ie.common,ie.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:_t([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:_t([ie.sprite,ie.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:_t([ie.common,ie.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:_t([ie.lights,ie.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};yt.physical={uniforms:_t([yt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Jn={r:0,b:0,g:0},en=new Nn,Zd=new Vt;function Qd(e,n,t,i,r,a,s){const o=new We(0);let h=a===!0?0:1,u,m,p=null,g=0,E=null;function A(R){let x=R.isScene===!0?R.background:null;return x&&x.isTexture&&(x=(R.backgroundBlurriness>0?t:n).get(x)),x}function M(R){let x=!1;const y=A(R);y===null?l(o,h):y&&y.isColor&&(l(y,1),x=!0);const P=e.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,s):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function d(R,x){const y=A(x);y&&(y.isCubeTexture||y.mapping===mi)?(m===void 0&&(m=new rt(new hn(1,1,1),new kt({name:"BackgroundCubeMaterial",uniforms:lr(yt.backgroundCube.uniforms),vertexShader:yt.backgroundCube.vertexShader,fragmentShader:yt.backgroundCube.fragmentShader,side:xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(P,I,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),en.copy(x.backgroundRotation),en.x*=-1,en.y*=-1,en.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(en.y*=-1,en.z*=-1),m.material.uniforms.envMap.value=y,m.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(Zd.makeRotationFromEuler(en)),m.material.toneMapped=at.getTransfer(y.colorSpace)!==$e,(p!==y||g!==y.version||E!==e.toneMapping)&&(m.material.needsUpdate=!0,p=y,g=y.version,E=e.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new rt(new lo(2,2),new kt({name:"BackgroundMaterial",uniforms:lr(yt.background.uniforms),vertexShader:yt.background.vertexShader,fragmentShader:yt.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=at.getTransfer(y.colorSpace)!==$e,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(p!==y||g!==y.version||E!==e.toneMapping)&&(u.material.needsUpdate=!0,p=y,g=y.version,E=e.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null))}function l(R,x){R.getRGB(Jn,mo(e)),i.buffers.color.setClear(Jn.r,Jn.g,Jn.b,x,s)}function w(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(R,x=1){o.set(R),h=x,l(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(R){h=R,l(o,h)},render:M,addToRenderList:d,dispose:w}}function Jd(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},r=g(null);let a=r,s=!1;function o(_,U,B,X,q){let $=!1;const W=p(X,B,U);a!==W&&(a=W,u(a.object)),$=E(_,X,B,q),$&&A(_,X,B,q),q!==null&&n.update(q,e.ELEMENT_ARRAY_BUFFER),($||s)&&(s=!1,x(_,U,B,X),q!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(q).buffer))}function h(){return e.createVertexArray()}function u(_){return e.bindVertexArray(_)}function m(_){return e.deleteVertexArray(_)}function p(_,U,B){const X=B.wireframe===!0;let q=i[_.id];q===void 0&&(q={},i[_.id]=q);let $=q[U.id];$===void 0&&($={},q[U.id]=$);let W=$[X];return W===void 0&&(W=g(h()),$[X]=W),W}function g(_){const U=[],B=[],X=[];for(let q=0;q<t;q++)U[q]=0,B[q]=0,X[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:B,attributeDivisors:X,object:_,attributes:{},index:null}}function E(_,U,B,X){const q=a.attributes,$=U.attributes;let W=0;const ne=B.getAttributes();for(const V in ne)if(ne[V].location>=0){const be=q[V];let Ie=$[V];if(Ie===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(Ie=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(Ie=_.instanceColor)),be===void 0||be.attribute!==Ie||Ie&&be.data!==Ie.data)return!0;W++}return a.attributesNum!==W||a.index!==X}function A(_,U,B,X){const q={},$=U.attributes;let W=0;const ne=B.getAttributes();for(const V in ne)if(ne[V].location>=0){let be=$[V];be===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(be=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(be=_.instanceColor));const Ie={};Ie.attribute=be,be&&be.data&&(Ie.data=be.data),q[V]=Ie,W++}a.attributes=q,a.attributesNum=W,a.index=X}function M(){const _=a.newAttributes;for(let U=0,B=_.length;U<B;U++)_[U]=0}function d(_){l(_,0)}function l(_,U){const B=a.newAttributes,X=a.enabledAttributes,q=a.attributeDivisors;B[_]=1,X[_]===0&&(e.enableVertexAttribArray(_),X[_]=1),q[_]!==U&&(e.vertexAttribDivisor(_,U),q[_]=U)}function w(){const _=a.newAttributes,U=a.enabledAttributes;for(let B=0,X=U.length;B<X;B++)U[B]!==_[B]&&(e.disableVertexAttribArray(B),U[B]=0)}function R(_,U,B,X,q,$,W){W===!0?e.vertexAttribIPointer(_,U,B,q,$):e.vertexAttribPointer(_,U,B,X,q,$)}function x(_,U,B,X){M();const q=X.attributes,$=B.getAttributes(),W=U.defaultAttributeValues;for(const ne in $){const V=$[ne];if(V.location>=0){let Ee=q[ne];if(Ee===void 0&&(ne==="instanceMatrix"&&_.instanceMatrix&&(Ee=_.instanceMatrix),ne==="instanceColor"&&_.instanceColor&&(Ee=_.instanceColor)),Ee!==void 0){const be=Ee.normalized,Ie=Ee.itemSize,Ve=n.get(Ee);if(Ve===void 0)continue;const nt=Ve.buffer,et=Ve.type,Xe=Ve.bytesPerElement,k=et===e.INT||et===e.UNSIGNED_INT||Ee.gpuType===co;if(Ee.isInterleavedBufferAttribute){const K=Ee.data,fe=K.stride,Le=Ee.offset;if(K.isInstancedInterleavedBuffer){for(let xe=0;xe<V.locationSize;xe++)l(V.location+xe,K.meshPerAttribute);_.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let xe=0;xe<V.locationSize;xe++)d(V.location+xe);e.bindBuffer(e.ARRAY_BUFFER,nt);for(let xe=0;xe<V.locationSize;xe++)R(V.location+xe,Ie/V.locationSize,et,be,fe*Xe,(Le+Ie/V.locationSize*xe)*Xe,k)}else{if(Ee.isInstancedBufferAttribute){for(let K=0;K<V.locationSize;K++)l(V.location+K,Ee.meshPerAttribute);_.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let K=0;K<V.locationSize;K++)d(V.location+K);e.bindBuffer(e.ARRAY_BUFFER,nt);for(let K=0;K<V.locationSize;K++)R(V.location+K,Ie/V.locationSize,et,be,Ie*Xe,Ie/V.locationSize*K*Xe,k)}}else if(W!==void 0){const be=W[ne];if(be!==void 0)switch(be.length){case 2:e.vertexAttrib2fv(V.location,be);break;case 3:e.vertexAttrib3fv(V.location,be);break;case 4:e.vertexAttrib4fv(V.location,be);break;default:e.vertexAttrib1fv(V.location,be)}}}}w()}function y(){G();for(const _ in i){const U=i[_];for(const B in U){const X=U[B];for(const q in X)m(X[q].object),delete X[q];delete U[B]}delete i[_]}}function P(_){if(i[_.id]===void 0)return;const U=i[_.id];for(const B in U){const X=U[B];for(const q in X)m(X[q].object),delete X[q];delete U[B]}delete i[_.id]}function I(_){for(const U in i){const B=i[U];if(B[_.id]===void 0)continue;const X=B[_.id];for(const q in X)m(X[q].object),delete X[q];delete B[_.id]}}function G(){v(),s=!0,a!==r&&(a=r,u(a.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:G,resetDefaultState:v,dispose:y,releaseStatesOfGeometry:P,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:d,disableUnusedAttributes:w}}function jd(e,n,t){let i;function r(u){i=u}function a(u,m){e.drawArrays(i,u,m),t.update(m,i,1)}function s(u,m,p){p!==0&&(e.drawArraysInstanced(i,u,m,p),t.update(m,i,p))}function o(u,m,p){if(p===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,m,0,p);let E=0;for(let A=0;A<p;A++)E+=m[A];t.update(E,i,1)}function h(u,m,p,g){if(p===0)return;const E=n.get("WEBGL_multi_draw");if(E===null)for(let A=0;A<u.length;A++)s(u[A],m[A],g[A]);else{E.multiDrawArraysInstancedWEBGL(i,u,0,m,0,g,0,p);let A=0;for(let M=0;M<p;M++)A+=m[M]*g[M];t.update(A,i,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=h}function eu(e,n,t,i){let r;function a(){if(r!==void 0)return r;if(n.has("EXT_texture_filter_anisotropic")===!0){const I=n.get("EXT_texture_filter_anisotropic");r=e.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(I){return!(I!==Ft&&i.convert(I)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const G=I===pi&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(I!==pn&&i.convert(I)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==on&&!G)}function h(I){if(I==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const m=h(u);m!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",m,"instead."),u=m);const p=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),E=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),A=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),d=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),l=e.getParameter(e.MAX_VERTEX_ATTRIBS),w=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),R=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),y=A>0,P=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:s,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:g,maxTextures:E,maxVertexTextures:A,maxTextureSize:M,maxCubemapSize:d,maxAttributes:l,maxVertexUniforms:w,maxVaryings:R,maxFragmentUniforms:x,vertexTextures:y,maxSamples:P}}function tu(e){const n=this;let t=null,i=0,r=!1,a=!1;const s=new Ms,o=new He,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(p,g){const E=p.length!==0||g||i!==0||r;return r=g,i=p.length,E},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,g){t=m(p,g,0)},this.setState=function(p,g,E){const A=p.clippingPlanes,M=p.clipIntersection,d=p.clipShadows,l=e.get(p);if(!r||A===null||A.length===0||a&&!d)a?m(null):u();else{const w=a?0:i,R=w*4;let x=l.clippingState||null;h.value=x,x=m(A,g,R,E);for(let y=0;y!==R;++y)x[y]=t[y];l.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=w}};function u(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function m(p,g,E,A){const M=p!==null?p.length:0;let d=null;if(M!==0){if(d=h.value,A!==!0||d===null){const l=E+M*4,w=g.matrixWorldInverse;o.getNormalMatrix(w),(d===null||d.length<l)&&(d=new Float32Array(l));for(let R=0,x=E;R!==M;++R,x+=4)s.copy(p[R]).applyMatrix4(w,o),s.normal.toArray(d,x),d[x+3]=s.constant}h.value=d,h.needsUpdate=!0}return n.numPlanes=M,n.numIntersection=0,d}}function nu(e){let n=new WeakMap;function t(s,o){return o===ji?s.mapping=Wn:o===ea&&(s.mapping=xn),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===ji||o===ea)if(n.has(s)){const h=n.get(s).texture;return t(h,s.mapping)}else{const h=s.image;if(h&&h.height>0){const u=new Os(h.height);return u.fromEquirectangularTexture(e,s),n.set(s,u),s.addEventListener("dispose",r),t(u.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const h=n.get(o);h!==void 0&&(n.delete(o),h.dispose())}function a(){n=new WeakMap}return{get:i,dispose:a}}const Sn=4,gr=[.125,.215,.35,.446,.526,.582],rn=20,Li=new Hs,vr=new We;let yi=null,Ui=0,Di=0,Ii=!1;const an=(1+Math.sqrt(5))/2,_n=1/an,Sr=[new ae(-an,_n,0),new ae(an,_n,0),new ae(-_n,0,an),new ae(_n,0,an),new ae(0,an,-_n),new ae(0,an,_n),new ae(-1,1,-1),new ae(1,1,-1),new ae(-1,1,1),new ae(1,1,1)],iu=new ae;class Er{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,t=0,i=.1,r=100,a={}){const{size:s=256,position:o=iu}=a;yi=this._renderer.getRenderTarget(),Ui=this._renderer.getActiveCubeFace(),Di=this._renderer.getActiveMipmapLevel(),Ii=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(n,i,r,h,o),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(yi,Ui,Di),this._renderer.xr.enabled=Ii,n.scissorTest=!1,jn(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===Wn||n.mapping===xn?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),yi=this._renderer.getRenderTarget(),Ui=this._renderer.getActiveCubeFace(),Di=this._renderer.getActiveMipmapLevel(),Ii=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:pi,format:Ft,colorSpace:hi,depthBuffer:!1},r=Mr(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mr(n,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=au(a)),this._blurMaterial=ru(a,n,t)}return r}_compileMaterial(n){const t=new rt(this._lodPlanes[0],n);this._renderer.compile(t,Li)}_sceneToCubeUV(n,t,i,r,a){const h=new Dn(90,1,t,i),u=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,E=p.toneMapping;p.getClearColor(vr),p.toneMapping=Kt,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null));const M=new go({name:"PMREM.Background",side:xt,depthWrite:!1,depthTest:!1}),d=new rt(new hn,M);let l=!1;const w=n.background;w?w.isColor&&(M.color.copy(w),n.background=null,l=!0):(M.color.copy(vr),l=!0);for(let R=0;R<6;R++){const x=R%3;x===0?(h.up.set(0,u[R],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x+m[R],a.y,a.z)):x===1?(h.up.set(0,0,u[R]),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y+m[R],a.z)):(h.up.set(0,u[R],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y,a.z+m[R]));const y=this._cubeSize;jn(r,x*y,R>2?y:0,y,y),p.setRenderTarget(r),l&&p.render(d,h),p.render(n,h)}d.geometry.dispose(),d.material.dispose(),p.toneMapping=E,p.autoClear=g,n.background=w}_textureToCubeUV(n,t){const i=this._renderer,r=n.mapping===Wn||n.mapping===xn;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tr()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xr());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new rt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=n;const h=this._cubeSize;jn(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(s,Li)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Sr[(r-a-1)%Sr.length];this._blur(n,a-1,a,s,o)}t.autoClear=i}_blur(n,t,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(n,s,t,i,r,"latitudinal",a),this._halfBlur(s,n,i,i,r,"longitudinal",a)}_halfBlur(n,t,i,r,a,s,o){const h=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,p=new rt(this._lodPlanes[r],u),g=u.uniforms,E=this._sizeLods[i]-1,A=isFinite(a)?Math.PI/(2*E):2*Math.PI/(2*rn-1),M=a/A,d=isFinite(a)?1+Math.floor(m*M):rn;d>rn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${rn}`);const l=[];let w=0;for(let I=0;I<rn;++I){const G=I/M,v=Math.exp(-G*G/2);l.push(v),I===0?w+=v:I<d&&(w+=2*v)}for(let I=0;I<l.length;I++)l[I]=l[I]/w;g.envMap.value=n.texture,g.samples.value=d,g.weights.value=l,g.latitudinal.value=s==="latitudinal",o&&(g.poleAxis.value=o);const{_lodMax:R}=this;g.dTheta.value=A,g.mipInt.value=R-i;const x=this._sizeLods[r],y=3*x*(r>R-Sn?r-R+Sn:0),P=4*(this._cubeSize-x);jn(t,y,P,3*x,2*x),h.setRenderTarget(t),h.render(p,Li)}}function au(e){const n=[],t=[],i=[];let r=e;const a=e-Sn+1+gr.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let h=1/o;s>e-Sn?h=gr[s-e+Sn-1]:s===0&&(h=0),i.push(h);const u=1/(o-2),m=-u,p=1+u,g=[m,m,p,m,p,p,m,m,p,p,m,p],E=6,A=6,M=3,d=2,l=1,w=new Float32Array(M*A*E),R=new Float32Array(d*A*E),x=new Float32Array(l*A*E);for(let P=0;P<E;P++){const I=P%3*2/3-1,G=P>2?0:-1,v=[I,G,0,I+2/3,G,0,I+2/3,G+1,0,I,G,0,I+2/3,G+1,0,I,G+1,0];w.set(v,M*A*P),R.set(g,d*A*P);const _=[P,P,P,P,P,P];x.set(_,l*A*P)}const y=new zn;y.setAttribute("position",new cn(w,M)),y.setAttribute("uv",new cn(R,d)),y.setAttribute("faceIndex",new cn(x,l)),n.push(y),r>Sn&&r--}return{lodPlanes:n,sizeLods:t,sigmas:i}}function Mr(e,n,t){const i=new Mn(e,n,t);return i.texture.mapping=mi,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jn(e,n,t,i,r){e.viewport.set(n,t,i,r),e.scissor.set(n,t,i,r)}function ru(e,n,t){const i=new Float32Array(rn),r=new ae(0,1,0);return new kt({name:"SphericalGaussianBlur",defines:{n:rn,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ua(),fragmentShader:`

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
		`,blending:dn,depthTest:!1,depthWrite:!1})}function xr(){return new kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ua(),fragmentShader:`

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
		`,blending:dn,depthTest:!1,depthWrite:!1})}function Tr(){return new kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function ua(){return`

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
	`}function ou(e){let n=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const h=o.mapping,u=h===ji||h===ea,m=h===Wn||h===xn;if(u||m){let p=n.get(o);const g=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==g)return t===null&&(t=new Er(e)),p=u?t.fromEquirectangular(o,p):t.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,n.set(o,p),p.texture;if(p!==void 0)return p.texture;{const E=o.image;return u&&E&&E.height>0||m&&E&&r(E)?(t===null&&(t=new Er(e)),p=u?t.fromEquirectangular(o):t.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,n.set(o,p),o.addEventListener("dispose",a),p.texture):null}}}return o}function r(o){let h=0;const u=6;for(let m=0;m<u;m++)o[m]!==void 0&&h++;return h===u}function a(o){const h=o.target;h.removeEventListener("dispose",a);const u=n.get(h);u!==void 0&&(n.delete(h),u.dispose())}function s(){n=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function su(e){const n={};function t(i){if(n[i]!==void 0)return n[i];let r;switch(i){case"WEBGL_depth_texture":r=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=e.getExtension(i)}return n[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Xi("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function lu(e,n,t,i){const r={},a=new WeakMap;function s(p){const g=p.target;g.index!==null&&n.remove(g.index);for(const A in g.attributes)n.remove(g.attributes[A]);g.removeEventListener("dispose",s),delete r[g.id];const E=a.get(g);E&&(n.remove(E),a.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function o(p,g){return r[g.id]===!0||(g.addEventListener("dispose",s),r[g.id]=!0,t.memory.geometries++),g}function h(p){const g=p.attributes;for(const E in g)n.update(g[E],e.ARRAY_BUFFER)}function u(p){const g=[],E=p.index,A=p.attributes.position;let M=0;if(E!==null){const w=E.array;M=E.version;for(let R=0,x=w.length;R<x;R+=3){const y=w[R+0],P=w[R+1],I=w[R+2];g.push(y,P,P,I,I,y)}}else if(A!==void 0){const w=A.array;M=A.version;for(let R=0,x=w.length/3-1;R<x;R+=3){const y=R+0,P=R+1,I=R+2;g.push(y,P,P,I,I,y)}}else return;const d=new(zs(g)?Vs:ks)(g,1);d.version=M;const l=a.get(p);l&&n.remove(l),a.set(p,d)}function m(p){const g=a.get(p);if(g){const E=p.index;E!==null&&g.version<E.version&&u(p)}else u(p);return a.get(p)}return{get:o,update:h,getWireframeAttribute:m}}function cu(e,n,t){let i;function r(g){i=g}let a,s;function o(g){a=g.type,s=g.bytesPerElement}function h(g,E){e.drawElements(i,E,a,g*s),t.update(E,i,1)}function u(g,E,A){A!==0&&(e.drawElementsInstanced(i,E,a,g*s,A),t.update(E,i,A))}function m(g,E,A){if(A===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,E,0,a,g,0,A);let d=0;for(let l=0;l<A;l++)d+=E[l];t.update(d,i,1)}function p(g,E,A,M){if(A===0)return;const d=n.get("WEBGL_multi_draw");if(d===null)for(let l=0;l<g.length;l++)u(g[l]/s,E[l],M[l]);else{d.multiDrawElementsInstancedWEBGL(i,E,0,a,g,0,M,0,A);let l=0;for(let w=0;w<A;w++)l+=E[w]*M[w];t.update(l,i,1)}}this.setMode=r,this.setIndex=o,this.render=h,this.renderInstances=u,this.renderMultiDraw=m,this.renderMultiDrawInstances=p}function du(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case e.TRIANGLES:t.triangles+=o*(a/3);break;case e.LINES:t.lines+=o*(a/2);break;case e.LINE_STRIP:t.lines+=o*(a-1);break;case e.LINE_LOOP:t.lines+=o*a;break;case e.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:r,update:i}}function uu(e,n,t){const i=new WeakMap,r=new vt;function a(s,o,h){const u=s.morphTargetInfluences,m=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=m!==void 0?m.length:0;let g=i.get(o);if(g===void 0||g.count!==p){let v=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",v)};g!==void 0&&g.texture.dispose();const E=o.morphAttributes.position!==void 0,A=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],l=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let R=0;E===!0&&(R=1),A===!0&&(R=2),M===!0&&(R=3);let x=o.attributes.position.count*R,y=1;x>n.maxTextureSize&&(y=Math.ceil(x/n.maxTextureSize),x=n.maxTextureSize);const P=new Float32Array(x*y*4*p),I=new ho(P,x,y,p);I.type=on,I.needsUpdate=!0;const G=R*4;for(let _=0;_<p;_++){const U=d[_],B=l[_],X=w[_],q=x*y*4*_;for(let $=0;$<U.count;$++){const W=$*G;E===!0&&(r.fromBufferAttribute(U,$),P[q+W+0]=r.x,P[q+W+1]=r.y,P[q+W+2]=r.z,P[q+W+3]=0),A===!0&&(r.fromBufferAttribute(B,$),P[q+W+4]=r.x,P[q+W+5]=r.y,P[q+W+6]=r.z,P[q+W+7]=0),M===!0&&(r.fromBufferAttribute(X,$),P[q+W+8]=r.x,P[q+W+9]=r.y,P[q+W+10]=r.z,P[q+W+11]=X.itemSize===4?r.w:1)}}g={count:p,texture:I,size:new ht(x,y)},i.set(o,g),o.addEventListener("dispose",v)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)h.getUniforms().setValue(e,"morphTexture",s.morphTexture,t);else{let E=0;for(let M=0;M<u.length;M++)E+=u[M];const A=o.morphTargetsRelative?1:1-E;h.getUniforms().setValue(e,"morphTargetBaseInfluence",A),h.getUniforms().setValue(e,"morphTargetInfluences",u)}h.getUniforms().setValue(e,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(e,"morphTargetsTextureSize",g.size)}return{update:a}}function fu(e,n,t,i){let r=new WeakMap;function a(h){const u=i.render.frame,m=h.geometry,p=n.get(h,m);if(r.get(p)!==u&&(n.update(p),r.set(p,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",o)===!1&&h.addEventListener("dispose",o),r.get(h)!==u&&(t.update(h.instanceMatrix,e.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,e.ARRAY_BUFFER),r.set(h,u))),h.isSkinnedMesh){const g=h.skeleton;r.get(g)!==u&&(g.update(),r.set(g,u))}return p}function s(){r=new WeakMap}function o(h){const u=h.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:s}}const To=new el,Ar=new no(1,1),Ao=new ho,bo=new js,Ro=new Js,br=[],Rr=[],wr=new Float32Array(16),Cr=new Float32Array(9),Pr=new Float32Array(4);function Tn(e,n,t){const i=e[0];if(i<=0||i>0)return e;const r=n*t;let a=br[r];if(a===void 0&&(a=new Float32Array(r),br[r]=a),n!==0){i.toArray(a,0);for(let s=1,o=0;s!==n;++s)o+=t,e[s].toArray(a,o)}return a}function ot(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function st(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function _i(e,n){let t=Rr[n];t===void 0&&(t=new Int32Array(n),Rr[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function pu(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function hu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ot(t,n))return;e.uniform2fv(this.addr,n),st(t,n)}}function mu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(ot(t,n))return;e.uniform3fv(this.addr,n),st(t,n)}}function _u(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ot(t,n))return;e.uniform4fv(this.addr,n),st(t,n)}}function gu(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ot(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),st(t,n)}else{if(ot(t,i))return;Pr.set(i),e.uniformMatrix2fv(this.addr,!1,Pr),st(t,i)}}function vu(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ot(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),st(t,n)}else{if(ot(t,i))return;Cr.set(i),e.uniformMatrix3fv(this.addr,!1,Cr),st(t,i)}}function Su(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ot(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),st(t,n)}else{if(ot(t,i))return;wr.set(i),e.uniformMatrix4fv(this.addr,!1,wr),st(t,i)}}function Eu(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function Mu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ot(t,n))return;e.uniform2iv(this.addr,n),st(t,n)}}function xu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(ot(t,n))return;e.uniform3iv(this.addr,n),st(t,n)}}function Tu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ot(t,n))return;e.uniform4iv(this.addr,n),st(t,n)}}function Au(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function bu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ot(t,n))return;e.uniform2uiv(this.addr,n),st(t,n)}}function Ru(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(ot(t,n))return;e.uniform3uiv(this.addr,n),st(t,n)}}function wu(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ot(t,n))return;e.uniform4uiv(this.addr,n),st(t,n)}}function Cu(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);let a;this.type===e.SAMPLER_2D_SHADOW?(Ar.compareFunction=io,a=Ar):a=To,t.setTexture2D(n||a,r)}function Pu(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(n||bo,r)}function Lu(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(n||Ro,r)}function yu(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(n||Ao,r)}function Uu(e){switch(e){case 5126:return pu;case 35664:return hu;case 35665:return mu;case 35666:return _u;case 35674:return gu;case 35675:return vu;case 35676:return Su;case 5124:case 35670:return Eu;case 35667:case 35671:return Mu;case 35668:case 35672:return xu;case 35669:case 35673:return Tu;case 5125:return Au;case 36294:return bu;case 36295:return Ru;case 36296:return wu;case 35678:case 36198:case 36298:case 36306:case 35682:return Cu;case 35679:case 36299:case 36307:return Pu;case 35680:case 36300:case 36308:case 36293:return Lu;case 36289:case 36303:case 36311:case 36292:return yu}}function Du(e,n){e.uniform1fv(this.addr,n)}function Iu(e,n){const t=Tn(n,this.size,2);e.uniform2fv(this.addr,t)}function Nu(e,n){const t=Tn(n,this.size,3);e.uniform3fv(this.addr,t)}function Ou(e,n){const t=Tn(n,this.size,4);e.uniform4fv(this.addr,t)}function Fu(e,n){const t=Tn(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function Bu(e,n){const t=Tn(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function Gu(e,n){const t=Tn(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function Hu(e,n){e.uniform1iv(this.addr,n)}function Vu(e,n){e.uniform2iv(this.addr,n)}function ku(e,n){e.uniform3iv(this.addr,n)}function zu(e,n){e.uniform4iv(this.addr,n)}function Wu(e,n){e.uniform1uiv(this.addr,n)}function Xu(e,n){e.uniform2uiv(this.addr,n)}function qu(e,n){e.uniform3uiv(this.addr,n)}function Yu(e,n){e.uniform4uiv(this.addr,n)}function Ku(e,n,t){const i=this.cache,r=n.length,a=_i(t,r);ot(i,a)||(e.uniform1iv(this.addr,a),st(i,a));for(let s=0;s!==r;++s)t.setTexture2D(n[s]||To,a[s])}function $u(e,n,t){const i=this.cache,r=n.length,a=_i(t,r);ot(i,a)||(e.uniform1iv(this.addr,a),st(i,a));for(let s=0;s!==r;++s)t.setTexture3D(n[s]||bo,a[s])}function Zu(e,n,t){const i=this.cache,r=n.length,a=_i(t,r);ot(i,a)||(e.uniform1iv(this.addr,a),st(i,a));for(let s=0;s!==r;++s)t.setTextureCube(n[s]||Ro,a[s])}function Qu(e,n,t){const i=this.cache,r=n.length,a=_i(t,r);ot(i,a)||(e.uniform1iv(this.addr,a),st(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(n[s]||Ao,a[s])}function Ju(e){switch(e){case 5126:return Du;case 35664:return Iu;case 35665:return Nu;case 35666:return Ou;case 35674:return Fu;case 35675:return Bu;case 35676:return Gu;case 5124:case 35670:return Hu;case 35667:case 35671:return Vu;case 35668:case 35672:return ku;case 35669:case 35673:return zu;case 5125:return Wu;case 36294:return Xu;case 36295:return qu;case 36296:return Yu;case 35678:case 36198:case 36298:case 36306:case 35682:return Ku;case 35679:case 36299:case 36307:return $u;case 35680:case 36300:case 36308:case 36293:return Zu;case 36289:case 36303:case 36311:case 36292:return Qu}}class ju{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Uu(t.type)}}class ef{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ju(t.type)}}class tf{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(n,t[o.id],i)}}}const Ni=/(\w+)(\])?(\[|\.)?/g;function Lr(e,n){e.seq.push(n),e.map[n.id]=n}function nf(e,n,t){const i=e.name,r=i.length;for(Ni.lastIndex=0;;){const a=Ni.exec(i),s=Ni.lastIndex;let o=a[1];const h=a[2]==="]",u=a[3];if(h&&(o=o|0),u===void 0||u==="["&&s+2===r){Lr(t,u===void 0?new ju(o,e,n):new ef(o,e,n));break}else{let p=t.map[o];p===void 0&&(p=new tf(o),Lr(t,p)),t=p}}}class si{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=n.getActiveUniform(t,r),s=n.getUniformLocation(t,a.name);nf(a,s,this)}}setValue(n,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(n,i,r)}setOptional(n,t,i){const r=t[i];r!==void 0&&this.setValue(n,i,r)}static upload(n,t,i,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],h=i[o.id];h.needsUpdate!==!1&&o.setValue(n,h.value,r)}}static seqWithValue(n,t){const i=[];for(let r=0,a=n.length;r!==a;++r){const s=n[r];s.id in t&&i.push(s)}return i}}function yr(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const af=37297;let rf=0;function of(e,n){const t=e.split(`
`),i=[],r=Math.max(n-6,0),a=Math.min(n+6,t.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===n?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const Ur=new He;function sf(e){at._getMatrix(Ur,at.workingColorSpace,e);const n=`mat3( ${Ur.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(e)){case _o:return[n,"LinearTransferOETF"];case $e:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function Dr(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),a=(e.getShaderInfoLog(n)||"").trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+of(e.getShaderSource(n),o)}else return a}function lf(e,n){const t=sf(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function cf(e,n){let t;switch(n){case Qs:t="Linear";break;case Zs:t="Reinhard";break;case $s:t="Cineon";break;case vo:t="ACESFilmic";break;case Ks:t="AgX";break;case Ys:t="Neutral";break;case qs:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),t="Linear"}return"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ei=new ae;function df(){at.getLuminanceCoefficients(ei);const e=ei.x.toFixed(4),n=ei.y.toFixed(4),t=ei.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uf(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Un).join(`
`)}function ff(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function pf(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=e.getActiveAttrib(n,r),s=a.name;let o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:e.getAttribLocation(n,s),locationSize:o}}return t}function Un(e){return e!==""}function Ir(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function Nr(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const hf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ia(e){return e.replace(hf,_f)}const mf=new Map;function _f(e,n){let t=Oe[n];if(t===void 0){const i=mf.get(n);if(i!==void 0)t=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return ia(t)}const gf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Or(e){return e.replace(gf,vf)}function vf(e,n,t,i){let r="";for(let a=parseInt(n);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Fr(e){let n=`precision ${e.precision} float;
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
#define LOW_PRECISION`),n}function Sf(e){let n="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===ao?n="SHADOWMAP_TYPE_PCF":e.shadowMapType===Xs?n="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Ot&&(n="SHADOWMAP_TYPE_VSM"),n}function Ef(e){let n="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Wn:case xn:n="ENVMAP_TYPE_CUBE";break;case mi:n="ENVMAP_TYPE_CUBE_UV";break}return n}function Mf(e){let n="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case xn:n="ENVMAP_MODE_REFRACTION";break}return n}function xf(e){let n="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case al:n="ENVMAP_BLENDING_MULTIPLY";break;case il:n="ENVMAP_BLENDING_MIX";break;case nl:n="ENVMAP_BLENDING_ADD";break}return n}function Tf(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Af(e,n,t,i){const r=e.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const h=Sf(t),u=Ef(t),m=Mf(t),p=xf(t),g=Tf(t),E=uf(t),A=ff(a),M=r.createProgram();let d,l,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(Un).join(`
`),d.length>0&&(d+=`
`),l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(Un).join(`
`),l.length>0&&(l+=`
`)):(d=[Fr(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Un).join(`
`),l=[Fr(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+m:"",t.envMap?"#define "+p:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kt?"#define TONE_MAPPING":"",t.toneMapping!==Kt?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Kt?cf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,lf("linearToOutputTexel",t.outputColorSpace),df(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Un).join(`
`)),s=ia(s),s=Ir(s,t),s=Nr(s,t),o=ia(o),o=Ir(o,t),o=Nr(o,t),s=Or(s),o=Or(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,d=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,l=["#define varying in",t.glslVersion===dr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const R=w+d+s,x=w+l+o,y=yr(r,r.VERTEX_SHADER,R),P=yr(r,r.FRAGMENT_SHADER,x);r.attachShader(M,y),r.attachShader(M,P),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function I(U){if(e.debug.checkShaderErrors){const B=r.getProgramInfoLog(M)||"",X=r.getShaderInfoLog(y)||"",q=r.getShaderInfoLog(P)||"",$=B.trim(),W=X.trim(),ne=q.trim();let V=!0,Ee=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(V=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,M,y,P);else{const be=Dr(r,y,"vertex"),Ie=Dr(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+$+`
`+be+`
`+Ie)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(W===""||ne==="")&&(Ee=!1);Ee&&(U.diagnostics={runnable:V,programLog:$,vertexShader:{log:W,prefix:d},fragmentShader:{log:ne,prefix:l}})}r.deleteShader(y),r.deleteShader(P),G=new si(r,M),v=pf(r,M)}let G;this.getUniforms=function(){return G===void 0&&I(this),G};let v;this.getAttributes=function(){return v===void 0&&I(this),v};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(M,af)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rf++,this.cacheKey=n,this.usedTimes=1,this.program=M,this.vertexShader=y,this.fragmentShader=P,this}let bf=0;class Rf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(n);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new wf(n),t.set(n,i)),i}}class wf{constructor(n){this.id=bf++,this.code=n,this.usedTimes=0}}function Cf(e,n,t,i,r,a,s){const o=new Ws,h=new Rf,u=new Set,m=[],p=r.logarithmicDepthBuffer,g=r.vertexTextures;let E=r.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(v){return u.add(v),v===0?"uv":`uv${v}`}function d(v,_,U,B,X){const q=B.fog,$=X.geometry,W=v.isMeshStandardMaterial?B.environment:null,ne=(v.isMeshStandardMaterial?t:n).get(v.envMap||W),V=ne&&ne.mapping===mi?ne.image.height:null,Ee=A[v.type];v.precision!==null&&(E=r.getMaxPrecision(v.precision),E!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",E,"instead."));const be=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ie=be!==void 0?be.length:0;let Ve=0;$.morphAttributes.position!==void 0&&(Ve=1),$.morphAttributes.normal!==void 0&&(Ve=2),$.morphAttributes.color!==void 0&&(Ve=3);let nt,et,Xe,k;if(Ee){const ke=yt[Ee];nt=ke.vertexShader,et=ke.fragmentShader}else nt=v.vertexShader,et=v.fragmentShader,h.update(v),Xe=h.getVertexShaderID(v),k=h.getFragmentShaderID(v);const K=e.getRenderTarget(),fe=e.state.buffers.depth.getReversed(),Le=X.isInstancedMesh===!0,xe=X.isBatchedMesh===!0,Be=!!v.map,ut=!!v.matcap,T=!!ne,Ze=!!v.aoMap,Ue=!!v.lightMap,Ce=!!v.bumpMap,me=!!v.normalMap,Qe=!!v.displacementMap,_e=!!v.emissiveMap,Ne=!!v.metalnessMap,lt=!!v.roughnessMap,it=v.anisotropy>0,S=v.clearcoat>0,c=v.dispersion>0,D=v.iridescence>0,H=v.sheen>0,Y=v.transmission>0,F=it&&!!v.anisotropyMap,Me=S&&!!v.clearcoatMap,ee=S&&!!v.clearcoatNormalMap,ge=S&&!!v.clearcoatRoughnessMap,ve=D&&!!v.iridescenceMap,J=D&&!!v.iridescenceThicknessMap,se=H&&!!v.sheenColorMap,we=H&&!!v.sheenRoughnessMap,Se=!!v.specularMap,re=!!v.specularColorMap,De=!!v.specularIntensityMap,b=Y&&!!v.transmissionMap,j=Y&&!!v.thicknessMap,te=!!v.gradientMap,ue=!!v.alphaMap,Z=v.alphaTest>0,z=!!v.alphaHash,he=!!v.extensions;let ye=Kt;v.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(ye=e.toneMapping);const Ye={shaderID:Ee,shaderType:v.type,shaderName:v.name,vertexShader:nt,fragmentShader:et,defines:v.defines,customVertexShaderID:Xe,customFragmentShaderID:k,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:E,batching:xe,batchingColor:xe&&X._colorsTexture!==null,instancing:Le,instancingColor:Le&&X.instanceColor!==null,instancingMorph:Le&&X.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:K===null?e.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:hi,alphaToCoverage:!!v.alphaToCoverage,map:Be,matcap:ut,envMap:T,envMapMode:T&&ne.mapping,envMapCubeUVHeight:V,aoMap:Ze,lightMap:Ue,bumpMap:Ce,normalMap:me,displacementMap:g&&Qe,emissiveMap:_e,normalMapObjectSpace:me&&v.normalMapType===Gs,normalMapTangentSpace:me&&v.normalMapType===Bs,metalnessMap:Ne,roughnessMap:lt,anisotropy:it,anisotropyMap:F,clearcoat:S,clearcoatMap:Me,clearcoatNormalMap:ee,clearcoatRoughnessMap:ge,dispersion:c,iridescence:D,iridescenceMap:ve,iridescenceThicknessMap:J,sheen:H,sheenColorMap:se,sheenRoughnessMap:we,specularMap:Se,specularColorMap:re,specularIntensityMap:De,transmission:Y,transmissionMap:b,thicknessMap:j,gradientMap:te,opaque:v.transparent===!1&&v.blending===oi&&v.alphaToCoverage===!1,alphaMap:ue,alphaTest:Z,alphaHash:z,combine:v.combine,mapUv:Be&&M(v.map.channel),aoMapUv:Ze&&M(v.aoMap.channel),lightMapUv:Ue&&M(v.lightMap.channel),bumpMapUv:Ce&&M(v.bumpMap.channel),normalMapUv:me&&M(v.normalMap.channel),displacementMapUv:Qe&&M(v.displacementMap.channel),emissiveMapUv:_e&&M(v.emissiveMap.channel),metalnessMapUv:Ne&&M(v.metalnessMap.channel),roughnessMapUv:lt&&M(v.roughnessMap.channel),anisotropyMapUv:F&&M(v.anisotropyMap.channel),clearcoatMapUv:Me&&M(v.clearcoatMap.channel),clearcoatNormalMapUv:ee&&M(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&M(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&M(v.iridescenceMap.channel),iridescenceThicknessMapUv:J&&M(v.iridescenceThicknessMap.channel),sheenColorMapUv:se&&M(v.sheenColorMap.channel),sheenRoughnessMapUv:we&&M(v.sheenRoughnessMap.channel),specularMapUv:Se&&M(v.specularMap.channel),specularColorMapUv:re&&M(v.specularColorMap.channel),specularIntensityMapUv:De&&M(v.specularIntensityMap.channel),transmissionMapUv:b&&M(v.transmissionMap.channel),thicknessMapUv:j&&M(v.thicknessMap.channel),alphaMapUv:ue&&M(v.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(me||it),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!$.attributes.uv&&(Be||ue),fog:!!q,useFog:v.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:fe,skinning:X.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:Ve,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:ye,decodeVideoTexture:Be&&v.map.isVideoTexture===!0&&at.getTransfer(v.map.colorSpace)===$e,decodeVideoTextureEmissive:_e&&v.emissiveMap.isVideoTexture===!0&&at.getTransfer(v.emissiveMap.colorSpace)===$e,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ut,flipSided:v.side===xt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:he&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&v.extensions.multiDraw===!0||xe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ye.vertexUv1s=u.has(1),Ye.vertexUv2s=u.has(2),Ye.vertexUv3s=u.has(3),u.clear(),Ye}function l(v){const _=[];if(v.shaderID?_.push(v.shaderID):(_.push(v.customVertexShaderID),_.push(v.customFragmentShaderID)),v.defines!==void 0)for(const U in v.defines)_.push(U),_.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(w(_,v),R(_,v),_.push(e.outputColorSpace)),_.push(v.customProgramCacheKey),_.join()}function w(v,_){v.push(_.precision),v.push(_.outputColorSpace),v.push(_.envMapMode),v.push(_.envMapCubeUVHeight),v.push(_.mapUv),v.push(_.alphaMapUv),v.push(_.lightMapUv),v.push(_.aoMapUv),v.push(_.bumpMapUv),v.push(_.normalMapUv),v.push(_.displacementMapUv),v.push(_.emissiveMapUv),v.push(_.metalnessMapUv),v.push(_.roughnessMapUv),v.push(_.anisotropyMapUv),v.push(_.clearcoatMapUv),v.push(_.clearcoatNormalMapUv),v.push(_.clearcoatRoughnessMapUv),v.push(_.iridescenceMapUv),v.push(_.iridescenceThicknessMapUv),v.push(_.sheenColorMapUv),v.push(_.sheenRoughnessMapUv),v.push(_.specularMapUv),v.push(_.specularColorMapUv),v.push(_.specularIntensityMapUv),v.push(_.transmissionMapUv),v.push(_.thicknessMapUv),v.push(_.combine),v.push(_.fogExp2),v.push(_.sizeAttenuation),v.push(_.morphTargetsCount),v.push(_.morphAttributeCount),v.push(_.numDirLights),v.push(_.numPointLights),v.push(_.numSpotLights),v.push(_.numSpotLightMaps),v.push(_.numHemiLights),v.push(_.numRectAreaLights),v.push(_.numDirLightShadows),v.push(_.numPointLightShadows),v.push(_.numSpotLightShadows),v.push(_.numSpotLightShadowsWithMaps),v.push(_.numLightProbes),v.push(_.shadowMapType),v.push(_.toneMapping),v.push(_.numClippingPlanes),v.push(_.numClipIntersection),v.push(_.depthPacking)}function R(v,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),_.gradientMap&&o.enable(22),v.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reversedDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),v.push(o.mask)}function x(v){const _=A[v.type];let U;if(_){const B=yt[_];U=Fs.clone(B.uniforms)}else U=v.uniforms;return U}function y(v,_){let U;for(let B=0,X=m.length;B<X;B++){const q=m[B];if(q.cacheKey===_){U=q,++U.usedTimes;break}}return U===void 0&&(U=new Af(e,_,v,a),m.push(U)),U}function P(v){if(--v.usedTimes===0){const _=m.indexOf(v);m[_]=m[m.length-1],m.pop(),v.destroy()}}function I(v){h.remove(v)}function G(){h.dispose()}return{getParameters:d,getProgramCacheKey:l,getUniforms:x,acquireProgram:y,releaseProgram:P,releaseShaderCache:I,programs:m,dispose:G}}function Pf(){let e=new WeakMap;function n(s){return e.has(s)}function t(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function i(s){e.delete(s)}function r(s,o,h){e.get(s)[o]=h}function a(){e=new WeakMap}return{has:n,get:t,remove:i,update:r,dispose:a}}function Lf(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.z!==n.z?e.z-n.z:e.id-n.id}function Br(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function Gr(){const e=[];let n=0;const t=[],i=[],r=[];function a(){n=0,t.length=0,i.length=0,r.length=0}function s(p,g,E,A,M,d){let l=e[n];return l===void 0?(l={id:p.id,object:p,geometry:g,material:E,groupOrder:A,renderOrder:p.renderOrder,z:M,group:d},e[n]=l):(l.id=p.id,l.object=p,l.geometry=g,l.material=E,l.groupOrder=A,l.renderOrder=p.renderOrder,l.z=M,l.group=d),n++,l}function o(p,g,E,A,M,d){const l=s(p,g,E,A,M,d);E.transmission>0?i.push(l):E.transparent===!0?r.push(l):t.push(l)}function h(p,g,E,A,M,d){const l=s(p,g,E,A,M,d);E.transmission>0?i.unshift(l):E.transparent===!0?r.unshift(l):t.unshift(l)}function u(p,g){t.length>1&&t.sort(p||Lf),i.length>1&&i.sort(g||Br),r.length>1&&r.sort(g||Br)}function m(){for(let p=n,g=e.length;p<g;p++){const E=e[p];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:o,unshift:h,finish:m,sort:u}}function yf(){let e=new WeakMap;function n(i,r){const a=e.get(i);let s;return a===void 0?(s=new Gr,e.set(i,[s])):r>=a.length?(s=new Gr,a.push(s)):s=a[r],s}function t(){e=new WeakMap}return{get:n,dispose:t}}function Uf(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new ae,color:new We};break;case"SpotLight":t={position:new ae,direction:new ae,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ae,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ae,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return e[n.id]=t,t}}}function Df(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let If=0;function Nf(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function Of(e){const n=new Uf,t=Df(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new ae);const r=new ae,a=new Vt,s=new Vt;function o(u){let m=0,p=0,g=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let E=0,A=0,M=0,d=0,l=0,w=0,R=0,x=0,y=0,P=0,I=0;u.sort(Nf);for(let v=0,_=u.length;v<_;v++){const U=u[v],B=U.color,X=U.intensity,q=U.distance,$=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)m+=B.r*X,p+=B.g*X,g+=B.b*X;else if(U.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(U.sh.coefficients[W],X);I++}else if(U.isDirectionalLight){const W=n.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const ne=U.shadow,V=t.get(U);V.shadowIntensity=ne.intensity,V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,i.directionalShadow[E]=V,i.directionalShadowMap[E]=$,i.directionalShadowMatrix[E]=U.shadow.matrix,w++}i.directional[E]=W,E++}else if(U.isSpotLight){const W=n.get(U);W.position.setFromMatrixPosition(U.matrixWorld),W.color.copy(B).multiplyScalar(X),W.distance=q,W.coneCos=Math.cos(U.angle),W.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),W.decay=U.decay,i.spot[M]=W;const ne=U.shadow;if(U.map&&(i.spotLightMap[y]=U.map,y++,ne.updateMatrices(U),U.castShadow&&P++),i.spotLightMatrix[M]=ne.matrix,U.castShadow){const V=t.get(U);V.shadowIntensity=ne.intensity,V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,i.spotShadow[M]=V,i.spotShadowMap[M]=$,x++}M++}else if(U.isRectAreaLight){const W=n.get(U);W.color.copy(B).multiplyScalar(X),W.halfWidth.set(U.width*.5,0,0),W.halfHeight.set(0,U.height*.5,0),i.rectArea[d]=W,d++}else if(U.isPointLight){const W=n.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity),W.distance=U.distance,W.decay=U.decay,U.castShadow){const ne=U.shadow,V=t.get(U);V.shadowIntensity=ne.intensity,V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,V.shadowCameraNear=ne.camera.near,V.shadowCameraFar=ne.camera.far,i.pointShadow[A]=V,i.pointShadowMap[A]=$,i.pointShadowMatrix[A]=U.shadow.matrix,R++}i.point[A]=W,A++}else if(U.isHemisphereLight){const W=n.get(U);W.skyColor.copy(U.color).multiplyScalar(X),W.groundColor.copy(U.groundColor).multiplyScalar(X),i.hemi[l]=W,l++}}d>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=p,i.ambient[2]=g;const G=i.hash;(G.directionalLength!==E||G.pointLength!==A||G.spotLength!==M||G.rectAreaLength!==d||G.hemiLength!==l||G.numDirectionalShadows!==w||G.numPointShadows!==R||G.numSpotShadows!==x||G.numSpotMaps!==y||G.numLightProbes!==I)&&(i.directional.length=E,i.spot.length=M,i.rectArea.length=d,i.point.length=A,i.hemi.length=l,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=x+y-P,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=I,G.directionalLength=E,G.pointLength=A,G.spotLength=M,G.rectAreaLength=d,G.hemiLength=l,G.numDirectionalShadows=w,G.numPointShadows=R,G.numSpotShadows=x,G.numSpotMaps=y,G.numLightProbes=I,i.version=If++)}function h(u,m){let p=0,g=0,E=0,A=0,M=0;const d=m.matrixWorldInverse;for(let l=0,w=u.length;l<w;l++){const R=u[l];if(R.isDirectionalLight){const x=i.directional[p];x.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(d),p++}else if(R.isSpotLight){const x=i.spot[E];x.position.setFromMatrixPosition(R.matrixWorld),x.position.applyMatrix4(d),x.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(d),E++}else if(R.isRectAreaLight){const x=i.rectArea[A];x.position.setFromMatrixPosition(R.matrixWorld),x.position.applyMatrix4(d),s.identity(),a.copy(R.matrixWorld),a.premultiply(d),s.extractRotation(a),x.halfWidth.set(R.width*.5,0,0),x.halfHeight.set(0,R.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),A++}else if(R.isPointLight){const x=i.point[g];x.position.setFromMatrixPosition(R.matrixWorld),x.position.applyMatrix4(d),g++}else if(R.isHemisphereLight){const x=i.hemi[M];x.direction.setFromMatrixPosition(R.matrixWorld),x.direction.transformDirection(d),M++}}}return{setup:o,setupView:h,state:i}}function Hr(e){const n=new Of(e),t=[],i=[];function r(m){u.camera=m,t.length=0,i.length=0}function a(m){t.push(m)}function s(m){i.push(m)}function o(){n.setup(t)}function h(m){n.setupView(t,m)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:h,pushLight:a,pushShadow:s}}function Ff(e){let n=new WeakMap;function t(r,a=0){const s=n.get(r);let o;return s===void 0?(o=new Hr(e),n.set(r,[o])):a>=s.length?(o=new Hr(e),s.push(o)):o=s[a],o}function i(){n=new WeakMap}return{get:t,dispose:i}}const Bf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gf=`uniform sampler2D shadow_pass;
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
}`;function Hf(e,n,t){let i=new to;const r=new ht,a=new ht,s=new vt,o=new xs({depthPacking:Ts}),h=new As,u={},m=t.maxTextureSize,p={[Hn]:xt,[xt]:Hn,[Ut]:Ut},g=new kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Bf,fragmentShader:Gf}),E=g.clone();E.defines.HORIZONTAL_PASS=1;const A=new zn;A.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new rt(A,g),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ao;let l=this.type;this.render=function(P,I,G){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||P.length===0)return;const v=e.getRenderTarget(),_=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),B=e.state;B.setBlending(dn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const X=l!==Ot&&this.type===Ot,q=l===Ot&&this.type!==Ot;for(let $=0,W=P.length;$<W;$++){const ne=P[$],V=ne.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const Ee=V.getFrameExtents();if(r.multiply(Ee),a.copy(V.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(a.x=Math.floor(m/Ee.x),r.x=a.x*Ee.x,V.mapSize.x=a.x),r.y>m&&(a.y=Math.floor(m/Ee.y),r.y=a.y*Ee.y,V.mapSize.y=a.y)),V.map===null||X===!0||q===!0){const Ie=this.type!==Ot?{minFilter:In,magFilter:In}:{};V.map!==null&&V.map.dispose(),V.map=new Mn(r.x,r.y,Ie),V.map.texture.name=ne.name+".shadowMap",V.camera.updateProjectionMatrix()}e.setRenderTarget(V.map),e.clear();const be=V.getViewportCount();for(let Ie=0;Ie<be;Ie++){const Ve=V.getViewport(Ie);s.set(a.x*Ve.x,a.y*Ve.y,a.x*Ve.z,a.y*Ve.w),B.viewport(s),V.updateMatrices(ne,Ie),i=V.getFrustum(),x(I,G,V.camera,ne,this.type)}V.isPointLightShadow!==!0&&this.type===Ot&&w(V,G),V.needsUpdate=!1}l=this.type,d.needsUpdate=!1,e.setRenderTarget(v,_,U)};function w(P,I){const G=n.update(M);g.defines.VSM_SAMPLES!==P.blurSamples&&(g.defines.VSM_SAMPLES=P.blurSamples,E.defines.VSM_SAMPLES=P.blurSamples,g.needsUpdate=!0,E.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Mn(r.x,r.y)),g.uniforms.shadow_pass.value=P.map.texture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,e.setRenderTarget(P.mapPass),e.clear(),e.renderBufferDirect(I,null,G,g,M,null),E.uniforms.shadow_pass.value=P.mapPass.texture,E.uniforms.resolution.value=P.mapSize,E.uniforms.radius.value=P.radius,e.setRenderTarget(P.map),e.clear(),e.renderBufferDirect(I,null,G,E,M,null)}function R(P,I,G,v){let _=null;const U=G.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(U!==void 0)_=U;else if(_=G.isPointLight===!0?h:o,e.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const B=_.uuid,X=I.uuid;let q=u[B];q===void 0&&(q={},u[B]=q);let $=q[X];$===void 0&&($=_.clone(),q[X]=$,I.addEventListener("dispose",y)),_=$}if(_.visible=I.visible,_.wireframe=I.wireframe,v===Ot?_.side=I.shadowSide!==null?I.shadowSide:I.side:_.side=I.shadowSide!==null?I.shadowSide:p[I.side],_.alphaMap=I.alphaMap,_.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,_.map=I.map,_.clipShadows=I.clipShadows,_.clippingPlanes=I.clippingPlanes,_.clipIntersection=I.clipIntersection,_.displacementMap=I.displacementMap,_.displacementScale=I.displacementScale,_.displacementBias=I.displacementBias,_.wireframeLinewidth=I.wireframeLinewidth,_.linewidth=I.linewidth,G.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const B=e.properties.get(_);B.light=G}return _}function x(P,I,G,v,_){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&_===Ot)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,P.matrixWorld);const X=n.update(P),q=P.material;if(Array.isArray(q)){const $=X.groups;for(let W=0,ne=$.length;W<ne;W++){const V=$[W],Ee=q[V.materialIndex];if(Ee&&Ee.visible){const be=R(P,Ee,v,_);P.onBeforeShadow(e,P,I,G,X,be,V),e.renderBufferDirect(G,null,X,be,P,V),P.onAfterShadow(e,P,I,G,X,be,V)}}}else if(q.visible){const $=R(P,q,v,_);P.onBeforeShadow(e,P,I,G,X,$,null),e.renderBufferDirect(G,null,X,$,P,null),P.onAfterShadow(e,P,I,G,X,$,null)}}const B=P.children;for(let X=0,q=B.length;X<q;X++)x(B[X],I,G,v,_)}function y(P){P.target.removeEventListener("dispose",y);for(const G in u){const v=u[G],_=P.target.uuid;_ in v&&(v[_].dispose(),delete v[_])}}}const Vf={[Ji]:Qi,[Zi]:Yi,[$i]:qi,[di]:Ki,[Qi]:Ji,[Yi]:Zi,[qi]:$i,[Ki]:di};function kf(e,n){function t(){let b=!1;const j=new vt;let te=null;const ue=new vt(0,0,0,0);return{setMask:function(Z){te!==Z&&!b&&(e.colorMask(Z,Z,Z,Z),te=Z)},setLocked:function(Z){b=Z},setClear:function(Z,z,he,ye,Ye){Ye===!0&&(Z*=ye,z*=ye,he*=ye),j.set(Z,z,he,ye),ue.equals(j)===!1&&(e.clearColor(Z,z,he,ye),ue.copy(j))},reset:function(){b=!1,te=null,ue.set(-1,0,0,0)}}}function i(){let b=!1,j=!1,te=null,ue=null,Z=null;return{setReversed:function(z){if(j!==z){const he=n.get("EXT_clip_control");z?he.clipControlEXT(he.LOWER_LEFT_EXT,he.ZERO_TO_ONE_EXT):he.clipControlEXT(he.LOWER_LEFT_EXT,he.NEGATIVE_ONE_TO_ONE_EXT),j=z;const ye=Z;Z=null,this.setClear(ye)}},getReversed:function(){return j},setTest:function(z){z?K(e.DEPTH_TEST):fe(e.DEPTH_TEST)},setMask:function(z){te!==z&&!b&&(e.depthMask(z),te=z)},setFunc:function(z){if(j&&(z=Vf[z]),ue!==z){switch(z){case Ji:e.depthFunc(e.NEVER);break;case Qi:e.depthFunc(e.ALWAYS);break;case Zi:e.depthFunc(e.LESS);break;case di:e.depthFunc(e.LEQUAL);break;case $i:e.depthFunc(e.EQUAL);break;case Ki:e.depthFunc(e.GEQUAL);break;case Yi:e.depthFunc(e.GREATER);break;case qi:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ue=z}},setLocked:function(z){b=z},setClear:function(z){Z!==z&&(j&&(z=1-z),e.clearDepth(z),Z=z)},reset:function(){b=!1,te=null,ue=null,Z=null,j=!1}}}function r(){let b=!1,j=null,te=null,ue=null,Z=null,z=null,he=null,ye=null,Ye=null;return{setTest:function(ke){b||(ke?K(e.STENCIL_TEST):fe(e.STENCIL_TEST))},setMask:function(ke){j!==ke&&!b&&(e.stencilMask(ke),j=ke)},setFunc:function(ke,Nt,Lt){(te!==ke||ue!==Nt||Z!==Lt)&&(e.stencilFunc(ke,Nt,Lt),te=ke,ue=Nt,Z=Lt)},setOp:function(ke,Nt,Lt){(z!==ke||he!==Nt||ye!==Lt)&&(e.stencilOp(ke,Nt,Lt),z=ke,he=Nt,ye=Lt)},setLocked:function(ke){b=ke},setClear:function(ke){Ye!==ke&&(e.clearStencil(ke),Ye=ke)},reset:function(){b=!1,j=null,te=null,ue=null,Z=null,z=null,he=null,ye=null,Ye=null}}}const a=new t,s=new i,o=new r,h=new WeakMap,u=new WeakMap;let m={},p={},g=new WeakMap,E=[],A=null,M=!1,d=null,l=null,w=null,R=null,x=null,y=null,P=null,I=new We(0,0,0),G=0,v=!1,_=null,U=null,B=null,X=null,q=null;const $=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ne=0;const V=e.getParameter(e.VERSION);V.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=ne>=1):V.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=ne>=2);let Ee=null,be={};const Ie=e.getParameter(e.SCISSOR_BOX),Ve=e.getParameter(e.VIEWPORT),nt=new vt().fromArray(Ie),et=new vt().fromArray(Ve);function Xe(b,j,te,ue){const Z=new Uint8Array(4),z=e.createTexture();e.bindTexture(b,z),e.texParameteri(b,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(b,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let he=0;he<te;he++)b===e.TEXTURE_3D||b===e.TEXTURE_2D_ARRAY?e.texImage3D(j,0,e.RGBA,1,1,ue,0,e.RGBA,e.UNSIGNED_BYTE,Z):e.texImage2D(j+he,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Z);return z}const k={};k[e.TEXTURE_2D]=Xe(e.TEXTURE_2D,e.TEXTURE_2D,1),k[e.TEXTURE_CUBE_MAP]=Xe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[e.TEXTURE_2D_ARRAY]=Xe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),k[e.TEXTURE_3D]=Xe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),K(e.DEPTH_TEST),s.setFunc(di),Ce(!1),me(ar),K(e.CULL_FACE),Ze(dn);function K(b){m[b]!==!0&&(e.enable(b),m[b]=!0)}function fe(b){m[b]!==!1&&(e.disable(b),m[b]=!1)}function Le(b,j){return p[b]!==j?(e.bindFramebuffer(b,j),p[b]=j,b===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=j),b===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=j),!0):!1}function xe(b,j){let te=E,ue=!1;if(b){te=g.get(j),te===void 0&&(te=[],g.set(j,te));const Z=b.textures;if(te.length!==Z.length||te[0]!==e.COLOR_ATTACHMENT0){for(let z=0,he=Z.length;z<he;z++)te[z]=e.COLOR_ATTACHMENT0+z;te.length=Z.length,ue=!0}}else te[0]!==e.BACK&&(te[0]=e.BACK,ue=!0);ue&&e.drawBuffers(te)}function Be(b){return A!==b?(e.useProgram(b),A=b,!0):!1}const ut={[Rn]:e.FUNC_ADD,[Ko]:e.FUNC_SUBTRACT,[Yo]:e.FUNC_REVERSE_SUBTRACT};ut[rl]=e.MIN,ut[ol]=e.MAX;const T={[cs]:e.ZERO,[ls]:e.ONE,[ss]:e.SRC_COLOR,[os]:e.SRC_ALPHA,[rs]:e.SRC_ALPHA_SATURATE,[as]:e.DST_COLOR,[is]:e.DST_ALPHA,[ns]:e.ONE_MINUS_SRC_COLOR,[ts]:e.ONE_MINUS_SRC_ALPHA,[es]:e.ONE_MINUS_DST_COLOR,[jo]:e.ONE_MINUS_DST_ALPHA,[Jo]:e.CONSTANT_COLOR,[Qo]:e.ONE_MINUS_CONSTANT_COLOR,[Zo]:e.CONSTANT_ALPHA,[$o]:e.ONE_MINUS_CONSTANT_ALPHA};function Ze(b,j,te,ue,Z,z,he,ye,Ye,ke){if(b===dn){M===!0&&(fe(e.BLEND),M=!1);return}if(M===!1&&(K(e.BLEND),M=!0),b!==Ns){if(b!==d||ke!==v){if((l!==Rn||x!==Rn)&&(e.blendEquation(e.FUNC_ADD),l=Rn,x=Rn),ke)switch(b){case oi:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case sr:e.blendFunc(e.ONE,e.ONE);break;case or:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case rr:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case oi:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case sr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case or:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rr:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}w=null,R=null,y=null,P=null,I.set(0,0,0),G=0,d=b,v=ke}return}Z=Z||j,z=z||te,he=he||ue,(j!==l||Z!==x)&&(e.blendEquationSeparate(ut[j],ut[Z]),l=j,x=Z),(te!==w||ue!==R||z!==y||he!==P)&&(e.blendFuncSeparate(T[te],T[ue],T[z],T[he]),w=te,R=ue,y=z,P=he),(ye.equals(I)===!1||Ye!==G)&&(e.blendColor(ye.r,ye.g,ye.b,Ye),I.copy(ye),G=Ye),d=b,v=!1}function Ue(b,j){b.side===Ut?fe(e.CULL_FACE):K(e.CULL_FACE);let te=b.side===xt;j&&(te=!te),Ce(te),b.blending===oi&&b.transparent===!1?Ze(dn):Ze(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),s.setFunc(b.depthFunc),s.setTest(b.depthTest),s.setMask(b.depthWrite),a.setMask(b.colorWrite);const ue=b.stencilWrite;o.setTest(ue),ue&&(o.setMask(b.stencilWriteMask),o.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),o.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),_e(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?K(e.SAMPLE_ALPHA_TO_COVERAGE):fe(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(b){_!==b&&(b?e.frontFace(e.CW):e.frontFace(e.CCW),_=b)}function me(b){b!==Ds?(K(e.CULL_FACE),b!==U&&(b===ar?e.cullFace(e.BACK):b===Is?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):fe(e.CULL_FACE),U=b}function Qe(b){b!==B&&(W&&e.lineWidth(b),B=b)}function _e(b,j,te){b?(K(e.POLYGON_OFFSET_FILL),(X!==j||q!==te)&&(e.polygonOffset(j,te),X=j,q=te)):fe(e.POLYGON_OFFSET_FILL)}function Ne(b){b?K(e.SCISSOR_TEST):fe(e.SCISSOR_TEST)}function lt(b){b===void 0&&(b=e.TEXTURE0+$-1),Ee!==b&&(e.activeTexture(b),Ee=b)}function it(b,j,te){te===void 0&&(Ee===null?te=e.TEXTURE0+$-1:te=Ee);let ue=be[te];ue===void 0&&(ue={type:void 0,texture:void 0},be[te]=ue),(ue.type!==b||ue.texture!==j)&&(Ee!==te&&(e.activeTexture(te),Ee=te),e.bindTexture(b,j||k[b]),ue.type=b,ue.texture=j)}function S(){const b=be[Ee];b!==void 0&&b.type!==void 0&&(e.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function c(){try{e.compressedTexImage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function D(){try{e.compressedTexImage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function H(){try{e.texSubImage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Y(){try{e.texSubImage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function F(){try{e.compressedTexSubImage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Me(){try{e.compressedTexSubImage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ee(){try{e.texStorage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ge(){try{e.texStorage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ve(){try{e.texImage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function J(){try{e.texImage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function se(b){nt.equals(b)===!1&&(e.scissor(b.x,b.y,b.z,b.w),nt.copy(b))}function we(b){et.equals(b)===!1&&(e.viewport(b.x,b.y,b.z,b.w),et.copy(b))}function Se(b,j){let te=u.get(j);te===void 0&&(te=new WeakMap,u.set(j,te));let ue=te.get(b);ue===void 0&&(ue=e.getUniformBlockIndex(j,b.name),te.set(b,ue))}function re(b,j){const ue=u.get(j).get(b);h.get(j)!==ue&&(e.uniformBlockBinding(j,ue,b.__bindingPointIndex),h.set(j,ue))}function De(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),m={},Ee=null,be={},p={},g=new WeakMap,E=[],A=null,M=!1,d=null,l=null,w=null,R=null,x=null,y=null,P=null,I=new We(0,0,0),G=0,v=!1,_=null,U=null,B=null,X=null,q=null,nt.set(0,0,e.canvas.width,e.canvas.height),et.set(0,0,e.canvas.width,e.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:K,disable:fe,bindFramebuffer:Le,drawBuffers:xe,useProgram:Be,setBlending:Ze,setMaterial:Ue,setFlipSided:Ce,setCullFace:me,setLineWidth:Qe,setPolygonOffset:_e,setScissorTest:Ne,activeTexture:lt,bindTexture:it,unbindTexture:S,compressedTexImage2D:c,compressedTexImage3D:D,texImage2D:ve,texImage3D:J,updateUBOMapping:Se,uniformBlockBinding:re,texStorage2D:ee,texStorage3D:ge,texSubImage2D:H,texSubImage3D:Y,compressedTexSubImage2D:F,compressedTexSubImage3D:Me,scissor:se,viewport:we,reset:De}}function zf(e,n,t,i,r,a,s){const o=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ht,m=new WeakMap;let p;const g=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(S,c){return E?new OffscreenCanvas(S,c):tl("canvas")}function M(S,c,D){let H=1;const Y=it(S);if((Y.width>D||Y.height>D)&&(H=D/Math.max(Y.width,Y.height)),H<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const F=Math.floor(H*Y.width),Me=Math.floor(H*Y.height);p===void 0&&(p=A(F,Me));const ee=c?A(F,Me):p;return ee.width=F,ee.height=Me,ee.getContext("2d").drawImage(S,0,0,F,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+F+"x"+Me+")."),ee}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),S;return S}function d(S){return S.generateMipmaps}function l(S){e.generateMipmap(S)}function w(S){return S.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?e.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function R(S,c,D,H,Y=!1){if(S!==null){if(e[S]!==void 0)return e[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let F=c;if(c===e.RED&&(D===e.FLOAT&&(F=e.R32F),D===e.HALF_FLOAT&&(F=e.R16F),D===e.UNSIGNED_BYTE&&(F=e.R8)),c===e.RED_INTEGER&&(D===e.UNSIGNED_BYTE&&(F=e.R8UI),D===e.UNSIGNED_SHORT&&(F=e.R16UI),D===e.UNSIGNED_INT&&(F=e.R32UI),D===e.BYTE&&(F=e.R8I),D===e.SHORT&&(F=e.R16I),D===e.INT&&(F=e.R32I)),c===e.RG&&(D===e.FLOAT&&(F=e.RG32F),D===e.HALF_FLOAT&&(F=e.RG16F),D===e.UNSIGNED_BYTE&&(F=e.RG8)),c===e.RG_INTEGER&&(D===e.UNSIGNED_BYTE&&(F=e.RG8UI),D===e.UNSIGNED_SHORT&&(F=e.RG16UI),D===e.UNSIGNED_INT&&(F=e.RG32UI),D===e.BYTE&&(F=e.RG8I),D===e.SHORT&&(F=e.RG16I),D===e.INT&&(F=e.RG32I)),c===e.RGB_INTEGER&&(D===e.UNSIGNED_BYTE&&(F=e.RGB8UI),D===e.UNSIGNED_SHORT&&(F=e.RGB16UI),D===e.UNSIGNED_INT&&(F=e.RGB32UI),D===e.BYTE&&(F=e.RGB8I),D===e.SHORT&&(F=e.RGB16I),D===e.INT&&(F=e.RGB32I)),c===e.RGBA_INTEGER&&(D===e.UNSIGNED_BYTE&&(F=e.RGBA8UI),D===e.UNSIGNED_SHORT&&(F=e.RGBA16UI),D===e.UNSIGNED_INT&&(F=e.RGBA32UI),D===e.BYTE&&(F=e.RGBA8I),D===e.SHORT&&(F=e.RGBA16I),D===e.INT&&(F=e.RGBA32I)),c===e.RGB&&(D===e.UNSIGNED_INT_5_9_9_9_REV&&(F=e.RGB9_E5),D===e.UNSIGNED_INT_10F_11F_11F_REV&&(F=e.R11F_G11F_B10F)),c===e.RGBA){const Me=Y?_o:at.getTransfer(H);D===e.FLOAT&&(F=e.RGBA32F),D===e.HALF_FLOAT&&(F=e.RGBA16F),D===e.UNSIGNED_BYTE&&(F=Me===$e?e.SRGB8_ALPHA8:e.RGBA8),D===e.UNSIGNED_SHORT_4_4_4_4&&(F=e.RGBA4),D===e.UNSIGNED_SHORT_5_5_5_1&&(F=e.RGB5_A1)}return(F===e.R16F||F===e.R32F||F===e.RG16F||F===e.RG32F||F===e.RGBA16F||F===e.RGBA32F)&&n.get("EXT_color_buffer_float"),F}function x(S,c){let D;return S?c===null||c===kn||c===Vn?D=e.DEPTH24_STENCIL8:c===on?D=e.DEPTH32F_STENCIL8:c===ui&&(D=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):c===null||c===kn||c===Vn?D=e.DEPTH_COMPONENT24:c===on?D=e.DEPTH_COMPONENT32F:c===ui&&(D=e.DEPTH_COMPONENT16),D}function y(S,c){return d(S)===!0||S.isFramebufferTexture&&S.minFilter!==In&&S.minFilter!==vn?Math.log2(Math.max(c.width,c.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?c.mipmaps.length:1}function P(S){const c=S.target;c.removeEventListener("dispose",P),G(c),c.isVideoTexture&&m.delete(c)}function I(S){const c=S.target;c.removeEventListener("dispose",I),_(c)}function G(S){const c=i.get(S);if(c.__webglInit===void 0)return;const D=S.source,H=g.get(D);if(H){const Y=H[c.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&v(S),Object.keys(H).length===0&&g.delete(D)}i.remove(S)}function v(S){const c=i.get(S);e.deleteTexture(c.__webglTexture);const D=S.source,H=g.get(D);delete H[c.__cacheKey],s.memory.textures--}function _(S){const c=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(c.__webglFramebuffer[H]))for(let Y=0;Y<c.__webglFramebuffer[H].length;Y++)e.deleteFramebuffer(c.__webglFramebuffer[H][Y]);else e.deleteFramebuffer(c.__webglFramebuffer[H]);c.__webglDepthbuffer&&e.deleteRenderbuffer(c.__webglDepthbuffer[H])}else{if(Array.isArray(c.__webglFramebuffer))for(let H=0;H<c.__webglFramebuffer.length;H++)e.deleteFramebuffer(c.__webglFramebuffer[H]);else e.deleteFramebuffer(c.__webglFramebuffer);if(c.__webglDepthbuffer&&e.deleteRenderbuffer(c.__webglDepthbuffer),c.__webglMultisampledFramebuffer&&e.deleteFramebuffer(c.__webglMultisampledFramebuffer),c.__webglColorRenderbuffer)for(let H=0;H<c.__webglColorRenderbuffer.length;H++)c.__webglColorRenderbuffer[H]&&e.deleteRenderbuffer(c.__webglColorRenderbuffer[H]);c.__webglDepthRenderbuffer&&e.deleteRenderbuffer(c.__webglDepthRenderbuffer)}const D=S.textures;for(let H=0,Y=D.length;H<Y;H++){const F=i.get(D[H]);F.__webglTexture&&(e.deleteTexture(F.__webglTexture),s.memory.textures--),i.remove(D[H])}i.remove(S)}let U=0;function B(){U=0}function X(){const S=U;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),U+=1,S}function q(S){const c=[];return c.push(S.wrapS),c.push(S.wrapT),c.push(S.wrapR||0),c.push(S.magFilter),c.push(S.minFilter),c.push(S.anisotropy),c.push(S.internalFormat),c.push(S.format),c.push(S.type),c.push(S.generateMipmaps),c.push(S.premultiplyAlpha),c.push(S.flipY),c.push(S.unpackAlignment),c.push(S.colorSpace),c.join()}function $(S,c){const D=i.get(S);if(S.isVideoTexture&&Ne(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&D.__version!==S.version){const H=S.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(D,S,c);return}}else S.isExternalTexture&&(D.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,D.__webglTexture,e.TEXTURE0+c)}function W(S,c){const D=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&D.__version!==S.version){k(D,S,c);return}t.bindTexture(e.TEXTURE_2D_ARRAY,D.__webglTexture,e.TEXTURE0+c)}function ne(S,c){const D=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&D.__version!==S.version){k(D,S,c);return}t.bindTexture(e.TEXTURE_3D,D.__webglTexture,e.TEXTURE0+c)}function V(S,c){const D=i.get(S);if(S.version>0&&D.__version!==S.version){K(D,S,c);return}t.bindTexture(e.TEXTURE_CUBE_MAP,D.__webglTexture,e.TEXTURE0+c)}const Ee={[fs]:e.REPEAT,[us]:e.CLAMP_TO_EDGE,[ds]:e.MIRRORED_REPEAT},be={[In]:e.NEAREST,[ps]:e.NEAREST_MIPMAP_NEAREST,[Qn]:e.NEAREST_MIPMAP_LINEAR,[vn]:e.LINEAR,[Ai]:e.LINEAR_MIPMAP_NEAREST,[yn]:e.LINEAR_MIPMAP_LINEAR},Ie={[Es]:e.NEVER,[Ss]:e.ALWAYS,[vs]:e.LESS,[io]:e.LEQUAL,[gs]:e.EQUAL,[_s]:e.GEQUAL,[ms]:e.GREATER,[hs]:e.NOTEQUAL};function Ve(S,c){if(c.type===on&&n.has("OES_texture_float_linear")===!1&&(c.magFilter===vn||c.magFilter===Ai||c.magFilter===Qn||c.magFilter===yn||c.minFilter===vn||c.minFilter===Ai||c.minFilter===Qn||c.minFilter===yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(S,e.TEXTURE_WRAP_S,Ee[c.wrapS]),e.texParameteri(S,e.TEXTURE_WRAP_T,Ee[c.wrapT]),(S===e.TEXTURE_3D||S===e.TEXTURE_2D_ARRAY)&&e.texParameteri(S,e.TEXTURE_WRAP_R,Ee[c.wrapR]),e.texParameteri(S,e.TEXTURE_MAG_FILTER,be[c.magFilter]),e.texParameteri(S,e.TEXTURE_MIN_FILTER,be[c.minFilter]),c.compareFunction&&(e.texParameteri(S,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(S,e.TEXTURE_COMPARE_FUNC,Ie[c.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(c.magFilter===In||c.minFilter!==Qn&&c.minFilter!==yn||c.type===on&&n.has("OES_texture_float_linear")===!1)return;if(c.anisotropy>1||i.get(c).__currentAnisotropy){const D=n.get("EXT_texture_filter_anisotropic");e.texParameterf(S,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(c.anisotropy,r.getMaxAnisotropy())),i.get(c).__currentAnisotropy=c.anisotropy}}}function nt(S,c){let D=!1;S.__webglInit===void 0&&(S.__webglInit=!0,c.addEventListener("dispose",P));const H=c.source;let Y=g.get(H);Y===void 0&&(Y={},g.set(H,Y));const F=q(c);if(F!==S.__cacheKey){Y[F]===void 0&&(Y[F]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,D=!0),Y[F].usedTimes++;const Me=Y[S.__cacheKey];Me!==void 0&&(Y[S.__cacheKey].usedTimes--,Me.usedTimes===0&&v(c)),S.__cacheKey=F,S.__webglTexture=Y[F].texture}return D}function et(S,c,D){return Math.floor(Math.floor(S/D)/c)}function Xe(S,c,D,H){const F=S.updateRanges;if(F.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,c.width,c.height,D,H,c.data);else{F.sort((J,se)=>J.start-se.start);let Me=0;for(let J=1;J<F.length;J++){const se=F[Me],we=F[J],Se=se.start+se.count,re=et(we.start,c.width,4),De=et(se.start,c.width,4);we.start<=Se+1&&re===De&&et(we.start+we.count-1,c.width,4)===re?se.count=Math.max(se.count,we.start+we.count-se.start):(++Me,F[Me]=we)}F.length=Me+1;const ee=e.getParameter(e.UNPACK_ROW_LENGTH),ge=e.getParameter(e.UNPACK_SKIP_PIXELS),ve=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,c.width);for(let J=0,se=F.length;J<se;J++){const we=F[J],Se=Math.floor(we.start/4),re=Math.ceil(we.count/4),De=Se%c.width,b=Math.floor(Se/c.width),j=re,te=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,De),e.pixelStorei(e.UNPACK_SKIP_ROWS,b),t.texSubImage2D(e.TEXTURE_2D,0,De,b,j,te,D,H,c.data)}S.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ee),e.pixelStorei(e.UNPACK_SKIP_PIXELS,ge),e.pixelStorei(e.UNPACK_SKIP_ROWS,ve)}}function k(S,c,D){let H=e.TEXTURE_2D;(c.isDataArrayTexture||c.isCompressedArrayTexture)&&(H=e.TEXTURE_2D_ARRAY),c.isData3DTexture&&(H=e.TEXTURE_3D);const Y=nt(S,c),F=c.source;t.bindTexture(H,S.__webglTexture,e.TEXTURE0+D);const Me=i.get(F);if(F.version!==Me.__version||Y===!0){t.activeTexture(e.TEXTURE0+D);const ee=at.getPrimaries(at.workingColorSpace),ge=c.colorSpace===gn?null:at.getPrimaries(c.colorSpace),ve=c.colorSpace===gn||ee===ge?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,c.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,c.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,c.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let J=M(c.image,!1,r.maxTextureSize);J=lt(c,J);const se=a.convert(c.format,c.colorSpace),we=a.convert(c.type);let Se=R(c.internalFormat,se,we,c.colorSpace,c.isVideoTexture);Ve(H,c);let re;const De=c.mipmaps,b=c.isVideoTexture!==!0,j=Me.__version===void 0||Y===!0,te=F.dataReady,ue=y(c,J);if(c.isDepthTexture)Se=x(c.format===ci,c.type),j&&(b?t.texStorage2D(e.TEXTURE_2D,1,Se,J.width,J.height):t.texImage2D(e.TEXTURE_2D,0,Se,J.width,J.height,0,se,we,null));else if(c.isDataTexture)if(De.length>0){b&&j&&t.texStorage2D(e.TEXTURE_2D,ue,Se,De[0].width,De[0].height);for(let Z=0,z=De.length;Z<z;Z++)re=De[Z],b?te&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,re.width,re.height,se,we,re.data):t.texImage2D(e.TEXTURE_2D,Z,Se,re.width,re.height,0,se,we,re.data);c.generateMipmaps=!1}else b?(j&&t.texStorage2D(e.TEXTURE_2D,ue,Se,J.width,J.height),te&&Xe(c,J,se,we)):t.texImage2D(e.TEXTURE_2D,0,Se,J.width,J.height,0,se,we,J.data);else if(c.isCompressedTexture)if(c.isCompressedArrayTexture){b&&j&&t.texStorage3D(e.TEXTURE_2D_ARRAY,ue,Se,De[0].width,De[0].height,J.depth);for(let Z=0,z=De.length;Z<z;Z++)if(re=De[Z],c.format!==Ft)if(se!==null)if(b){if(te)if(c.layerUpdates.size>0){const he=cr(re.width,re.height,c.format,c.type);for(const ye of c.layerUpdates){const Ye=re.data.subarray(ye*he/re.data.BYTES_PER_ELEMENT,(ye+1)*he/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,ye,re.width,re.height,1,se,Ye)}c.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,re.width,re.height,J.depth,se,re.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Z,Se,re.width,re.height,J.depth,0,re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else b?te&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,re.width,re.height,J.depth,se,we,re.data):t.texImage3D(e.TEXTURE_2D_ARRAY,Z,Se,re.width,re.height,J.depth,0,se,we,re.data)}else{b&&j&&t.texStorage2D(e.TEXTURE_2D,ue,Se,De[0].width,De[0].height);for(let Z=0,z=De.length;Z<z;Z++)re=De[Z],c.format!==Ft?se!==null?b?te&&t.compressedTexSubImage2D(e.TEXTURE_2D,Z,0,0,re.width,re.height,se,re.data):t.compressedTexImage2D(e.TEXTURE_2D,Z,Se,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):b?te&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,re.width,re.height,se,we,re.data):t.texImage2D(e.TEXTURE_2D,Z,Se,re.width,re.height,0,se,we,re.data)}else if(c.isDataArrayTexture)if(b){if(j&&t.texStorage3D(e.TEXTURE_2D_ARRAY,ue,Se,J.width,J.height,J.depth),te)if(c.layerUpdates.size>0){const Z=cr(J.width,J.height,c.format,c.type);for(const z of c.layerUpdates){const he=J.data.subarray(z*Z/J.data.BYTES_PER_ELEMENT,(z+1)*Z/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,z,J.width,J.height,1,se,we,he)}c.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,se,we,J.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,Se,J.width,J.height,J.depth,0,se,we,J.data);else if(c.isData3DTexture)b?(j&&t.texStorage3D(e.TEXTURE_3D,ue,Se,J.width,J.height,J.depth),te&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,se,we,J.data)):t.texImage3D(e.TEXTURE_3D,0,Se,J.width,J.height,J.depth,0,se,we,J.data);else if(c.isFramebufferTexture){if(j)if(b)t.texStorage2D(e.TEXTURE_2D,ue,Se,J.width,J.height);else{let Z=J.width,z=J.height;for(let he=0;he<ue;he++)t.texImage2D(e.TEXTURE_2D,he,Se,Z,z,0,se,we,null),Z>>=1,z>>=1}}else if(De.length>0){if(b&&j){const Z=it(De[0]);t.texStorage2D(e.TEXTURE_2D,ue,Se,Z.width,Z.height)}for(let Z=0,z=De.length;Z<z;Z++)re=De[Z],b?te&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,se,we,re):t.texImage2D(e.TEXTURE_2D,Z,Se,se,we,re);c.generateMipmaps=!1}else if(b){if(j){const Z=it(J);t.texStorage2D(e.TEXTURE_2D,ue,Se,Z.width,Z.height)}te&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,se,we,J)}else t.texImage2D(e.TEXTURE_2D,0,Se,se,we,J);d(c)&&l(H),Me.__version=F.version,c.onUpdate&&c.onUpdate(c)}S.__version=c.version}function K(S,c,D){if(c.image.length!==6)return;const H=nt(S,c),Y=c.source;t.bindTexture(e.TEXTURE_CUBE_MAP,S.__webglTexture,e.TEXTURE0+D);const F=i.get(Y);if(Y.version!==F.__version||H===!0){t.activeTexture(e.TEXTURE0+D);const Me=at.getPrimaries(at.workingColorSpace),ee=c.colorSpace===gn?null:at.getPrimaries(c.colorSpace),ge=c.colorSpace===gn||Me===ee?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,c.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,c.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,c.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const ve=c.isCompressedTexture||c.image[0].isCompressedTexture,J=c.image[0]&&c.image[0].isDataTexture,se=[];for(let z=0;z<6;z++)!ve&&!J?se[z]=M(c.image[z],!0,r.maxCubemapSize):se[z]=J?c.image[z].image:c.image[z],se[z]=lt(c,se[z]);const we=se[0],Se=a.convert(c.format,c.colorSpace),re=a.convert(c.type),De=R(c.internalFormat,Se,re,c.colorSpace),b=c.isVideoTexture!==!0,j=F.__version===void 0||H===!0,te=Y.dataReady;let ue=y(c,we);Ve(e.TEXTURE_CUBE_MAP,c);let Z;if(ve){b&&j&&t.texStorage2D(e.TEXTURE_CUBE_MAP,ue,De,we.width,we.height);for(let z=0;z<6;z++){Z=se[z].mipmaps;for(let he=0;he<Z.length;he++){const ye=Z[he];c.format!==Ft?Se!==null?b?te&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,he,0,0,ye.width,ye.height,Se,ye.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,he,De,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):b?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,he,0,0,ye.width,ye.height,Se,re,ye.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,he,De,ye.width,ye.height,0,Se,re,ye.data)}}}else{if(Z=c.mipmaps,b&&j){Z.length>0&&ue++;const z=it(se[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,ue,De,z.width,z.height)}for(let z=0;z<6;z++)if(J){b?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,se[z].width,se[z].height,Se,re,se[z].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,De,se[z].width,se[z].height,0,Se,re,se[z].data);for(let he=0;he<Z.length;he++){const Ye=Z[he].image[z].image;b?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,he+1,0,0,Ye.width,Ye.height,Se,re,Ye.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,he+1,De,Ye.width,Ye.height,0,Se,re,Ye.data)}}else{b?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,Se,re,se[z]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,De,Se,re,se[z]);for(let he=0;he<Z.length;he++){const ye=Z[he];b?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,he+1,0,0,Se,re,ye.image[z]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,he+1,De,Se,re,ye.image[z])}}}d(c)&&l(e.TEXTURE_CUBE_MAP),F.__version=Y.version,c.onUpdate&&c.onUpdate(c)}S.__version=c.version}function fe(S,c,D,H,Y,F){const Me=a.convert(D.format,D.colorSpace),ee=a.convert(D.type),ge=R(D.internalFormat,Me,ee,D.colorSpace),ve=i.get(c),J=i.get(D);if(J.__renderTarget=c,!ve.__hasExternalTextures){const se=Math.max(1,c.width>>F),we=Math.max(1,c.height>>F);Y===e.TEXTURE_3D||Y===e.TEXTURE_2D_ARRAY?t.texImage3D(Y,F,ge,se,we,c.depth,0,Me,ee,null):t.texImage2D(Y,F,ge,se,we,0,Me,ee,null)}t.bindFramebuffer(e.FRAMEBUFFER,S),_e(c)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,H,Y,J.__webglTexture,0,Qe(c)):(Y===e.TEXTURE_2D||Y>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,H,Y,J.__webglTexture,F),t.bindFramebuffer(e.FRAMEBUFFER,null)}function Le(S,c,D){if(e.bindRenderbuffer(e.RENDERBUFFER,S),c.depthBuffer){const H=c.depthTexture,Y=H&&H.isDepthTexture?H.type:null,F=x(c.stencilBuffer,Y),Me=c.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ee=Qe(c);_e(c)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ee,F,c.width,c.height):D?e.renderbufferStorageMultisample(e.RENDERBUFFER,ee,F,c.width,c.height):e.renderbufferStorage(e.RENDERBUFFER,F,c.width,c.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Me,e.RENDERBUFFER,S)}else{const H=c.textures;for(let Y=0;Y<H.length;Y++){const F=H[Y],Me=a.convert(F.format,F.colorSpace),ee=a.convert(F.type),ge=R(F.internalFormat,Me,ee,F.colorSpace),ve=Qe(c);D&&_e(c)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,ve,ge,c.width,c.height):_e(c)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ve,ge,c.width,c.height):e.renderbufferStorage(e.RENDERBUFFER,ge,c.width,c.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function xe(S,c){if(c&&c.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(e.FRAMEBUFFER,S),!(c.depthTexture&&c.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const H=i.get(c.depthTexture);H.__renderTarget=c,(!H.__webglTexture||c.depthTexture.image.width!==c.width||c.depthTexture.image.height!==c.height)&&(c.depthTexture.image.width=c.width,c.depthTexture.image.height=c.height,c.depthTexture.needsUpdate=!0),$(c.depthTexture,0);const Y=H.__webglTexture,F=Qe(c);if(c.depthTexture.format===da)_e(c)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Y,0,F):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Y,0);else if(c.depthTexture.format===ci)_e(c)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Y,0,F):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Be(S){const c=i.get(S),D=S.isWebGLCubeRenderTarget===!0;if(c.__boundDepthTexture!==S.depthTexture){const H=S.depthTexture;if(c.__depthDisposeCallback&&c.__depthDisposeCallback(),H){const Y=()=>{delete c.__boundDepthTexture,delete c.__depthDisposeCallback,H.removeEventListener("dispose",Y)};H.addEventListener("dispose",Y),c.__depthDisposeCallback=Y}c.__boundDepthTexture=H}if(S.depthTexture&&!c.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");const H=S.texture.mipmaps;H&&H.length>0?xe(c.__webglFramebuffer[0],S):xe(c.__webglFramebuffer,S)}else if(D){c.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(e.FRAMEBUFFER,c.__webglFramebuffer[H]),c.__webglDepthbuffer[H]===void 0)c.__webglDepthbuffer[H]=e.createRenderbuffer(),Le(c.__webglDepthbuffer[H],S,!1);else{const Y=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,F=c.__webglDepthbuffer[H];e.bindRenderbuffer(e.RENDERBUFFER,F),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,F)}}else{const H=S.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(e.FRAMEBUFFER,c.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,c.__webglFramebuffer),c.__webglDepthbuffer===void 0)c.__webglDepthbuffer=e.createRenderbuffer(),Le(c.__webglDepthbuffer,S,!1);else{const Y=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,F=c.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,F),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,F)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function ut(S,c,D){const H=i.get(S);c!==void 0&&fe(H.__webglFramebuffer,S,S.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),D!==void 0&&Be(S)}function T(S){const c=S.texture,D=i.get(S),H=i.get(c);S.addEventListener("dispose",I);const Y=S.textures,F=S.isWebGLCubeRenderTarget===!0,Me=Y.length>1;if(Me||(H.__webglTexture===void 0&&(H.__webglTexture=e.createTexture()),H.__version=c.version,s.memory.textures++),F){D.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(c.mipmaps&&c.mipmaps.length>0){D.__webglFramebuffer[ee]=[];for(let ge=0;ge<c.mipmaps.length;ge++)D.__webglFramebuffer[ee][ge]=e.createFramebuffer()}else D.__webglFramebuffer[ee]=e.createFramebuffer()}else{if(c.mipmaps&&c.mipmaps.length>0){D.__webglFramebuffer=[];for(let ee=0;ee<c.mipmaps.length;ee++)D.__webglFramebuffer[ee]=e.createFramebuffer()}else D.__webglFramebuffer=e.createFramebuffer();if(Me)for(let ee=0,ge=Y.length;ee<ge;ee++){const ve=i.get(Y[ee]);ve.__webglTexture===void 0&&(ve.__webglTexture=e.createTexture(),s.memory.textures++)}if(S.samples>0&&_e(S)===!1){D.__webglMultisampledFramebuffer=e.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ee=0;ee<Y.length;ee++){const ge=Y[ee];D.__webglColorRenderbuffer[ee]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,D.__webglColorRenderbuffer[ee]);const ve=a.convert(ge.format,ge.colorSpace),J=a.convert(ge.type),se=R(ge.internalFormat,ve,J,ge.colorSpace,S.isXRRenderTarget===!0),we=Qe(S);e.renderbufferStorageMultisample(e.RENDERBUFFER,we,se,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ee,e.RENDERBUFFER,D.__webglColorRenderbuffer[ee])}e.bindRenderbuffer(e.RENDERBUFFER,null),S.depthBuffer&&(D.__webglDepthRenderbuffer=e.createRenderbuffer(),Le(D.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(F){t.bindTexture(e.TEXTURE_CUBE_MAP,H.__webglTexture),Ve(e.TEXTURE_CUBE_MAP,c);for(let ee=0;ee<6;ee++)if(c.mipmaps&&c.mipmaps.length>0)for(let ge=0;ge<c.mipmaps.length;ge++)fe(D.__webglFramebuffer[ee][ge],S,c,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge);else fe(D.__webglFramebuffer[ee],S,c,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);d(c)&&l(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ee=0,ge=Y.length;ee<ge;ee++){const ve=Y[ee],J=i.get(ve);let se=e.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(se=S.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(se,J.__webglTexture),Ve(se,ve),fe(D.__webglFramebuffer,S,ve,e.COLOR_ATTACHMENT0+ee,se,0),d(ve)&&l(se)}t.unbindTexture()}else{let ee=e.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ee=S.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(ee,H.__webglTexture),Ve(ee,c),c.mipmaps&&c.mipmaps.length>0)for(let ge=0;ge<c.mipmaps.length;ge++)fe(D.__webglFramebuffer[ge],S,c,e.COLOR_ATTACHMENT0,ee,ge);else fe(D.__webglFramebuffer,S,c,e.COLOR_ATTACHMENT0,ee,0);d(c)&&l(ee),t.unbindTexture()}S.depthBuffer&&Be(S)}function Ze(S){const c=S.textures;for(let D=0,H=c.length;D<H;D++){const Y=c[D];if(d(Y)){const F=w(S),Me=i.get(Y).__webglTexture;t.bindTexture(F,Me),l(F),t.unbindTexture()}}}const Ue=[],Ce=[];function me(S){if(S.samples>0){if(_e(S)===!1){const c=S.textures,D=S.width,H=S.height;let Y=e.COLOR_BUFFER_BIT;const F=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Me=i.get(S),ee=c.length>1;if(ee)for(let ve=0;ve<c.length;ve++)t.bindFramebuffer(e.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,Me.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const ge=S.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ve=0;ve<c.length;ve++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Y|=e.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Y|=e.STENCIL_BUFFER_BIT)),ee){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);const J=i.get(c[ve]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,J,0)}e.blitFramebuffer(0,0,D,H,0,0,D,H,Y,e.NEAREST),h===!0&&(Ue.length=0,Ce.length=0,Ue.push(e.COLOR_ATTACHMENT0+ve),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Ue.push(F),Ce.push(F),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ce)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ee)for(let ve=0;ve<c.length;ve++){t.bindFramebuffer(e.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);const J=i.get(c[ve]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,Me.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.TEXTURE_2D,J,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&h){const c=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[c])}}}function Qe(S){return Math.min(r.maxSamples,S.samples)}function _e(S){const c=i.get(S);return S.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&c.__useRenderToTexture!==!1}function Ne(S){const c=s.render.frame;m.get(S)!==c&&(m.set(S,c),S.update())}function lt(S,c){const D=S.colorSpace,H=S.format,Y=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||D!==hi&&D!==gn&&(at.getTransfer(D)===$e?(H!==Ft||Y!==pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),c}function it(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(u.width=S.naturalWidth||S.width,u.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(u.width=S.displayWidth,u.height=S.displayHeight):(u.width=S.width,u.height=S.height),u}this.allocateTextureUnit=X,this.resetTextureUnits=B,this.setTexture2D=$,this.setTexture2DArray=W,this.setTexture3D=ne,this.setTextureCube=V,this.rebindTextures=ut,this.setupRenderTarget=T,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=_e}function Wf(e,n){function t(i,r=gn){let a;const s=at.getTransfer(r);if(i===pn)return e.UNSIGNED_BYTE;if(i===ro)return e.UNSIGNED_SHORT_4_4_4_4;if(i===oo)return e.UNSIGNED_SHORT_5_5_5_1;if(i===bs)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Rs)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===ws)return e.BYTE;if(i===Cs)return e.SHORT;if(i===ui)return e.UNSIGNED_SHORT;if(i===co)return e.INT;if(i===kn)return e.UNSIGNED_INT;if(i===on)return e.FLOAT;if(i===pi)return e.HALF_FLOAT;if(i===Ps)return e.ALPHA;if(i===Ls)return e.RGB;if(i===Ft)return e.RGBA;if(i===da)return e.DEPTH_COMPONENT;if(i===ci)return e.DEPTH_STENCIL;if(i===ys)return e.RED;if(i===uo)return e.RED_INTEGER;if(i===Us)return e.RG;if(i===fo)return e.RG_INTEGER;if(i===po)return e.RGBA_INTEGER;if(i===bi||i===Ri||i===wi||i===Ci)if(s===$e)if(a=n.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===bi)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ri)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wi)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ci)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=n.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===bi)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ri)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wi)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ci)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===La||i===ya||i===Ua||i===Da)if(a=n.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===La)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ya)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ua)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Da)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ia||i===Na||i===Oa)if(a=n.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Ia||i===Na)return s===$e?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Oa)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Fa||i===Ba||i===Ga||i===Ha||i===Va||i===ka||i===za||i===Wa||i===Xa||i===qa||i===Ya||i===Ka||i===$a||i===Za)if(a=n.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Fa)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ba)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ga)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ha)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Va)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ka)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===za)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wa)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xa)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qa)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ya)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ka)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$a)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Za)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qa||i===Ja||i===ja)if(a=n.get("EXT_texture_compression_bptc"),a!==null){if(i===Qa)return s===$e?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ja)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ja)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===er||i===tr||i===nr||i===ir)if(a=n.get("EXT_texture_compression_rgtc"),a!==null){if(i===er)return a.COMPRESSED_RED_RGTC1_EXT;if(i===tr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===nr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ir)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Vn?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const Xf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qf=`
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

}`;class Yf{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new so(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new kt({vertexShader:Xf,fragmentShader:qf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new lo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Kf extends Wo{constructor(n,t){super();const i=this;let r=null,a=1,s=null,o="local-floor",h=1,u=null,m=null,p=null,g=null,E=null,A=null;const M=typeof XRWebGLBinding<"u",d=new Yf,l={},w=t.getContextAttributes();let R=null,x=null;const y=[],P=[],I=new ht;let G=null;const v=new Dn;v.viewport=new vt;const _=new Dn;_.viewport=new vt;const U=[v,_],B=new Xo;let X=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let K=y[k];return K===void 0&&(K=new Ti,y[k]=K),K.getTargetRaySpace()},this.getControllerGrip=function(k){let K=y[k];return K===void 0&&(K=new Ti,y[k]=K),K.getGripSpace()},this.getHand=function(k){let K=y[k];return K===void 0&&(K=new Ti,y[k]=K),K.getHandSpace()};function $(k){const K=P.indexOf(k.inputSource);if(K===-1)return;const fe=y[K];fe!==void 0&&(fe.update(k.inputSource,k.frame,u||s),fe.dispatchEvent({type:k.type,data:k.inputSource}))}function W(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",ne);for(let k=0;k<y.length;k++){const K=P[k];K!==null&&(P[k]=null,y[k].disconnect(K))}X=null,q=null,d.reset();for(const k in l)delete l[k];n.setRenderTarget(R),E=null,g=null,p=null,r=null,x=null,Xe.stop(),i.isPresenting=!1,n.setPixelRatio(G),n.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(k){u=k},this.getBaseLayer=function(){return g!==null?g:E},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return A},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(R=n.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",W),r.addEventListener("inputsourceschange",ne),w.xrCompatible!==!0&&await t.makeXRCompatible(),G=n.getPixelRatio(),n.getSize(I),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Le=null,xe=null;w.depth&&(xe=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=w.stencil?ci:da,Le=w.stencil?Vn:kn);const Be={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:a};p=this.getBinding(),g=p.createProjectionLayer(Be),r.updateRenderState({layers:[g]}),n.setPixelRatio(1),n.setSize(g.textureWidth,g.textureHeight,!1),x=new Mn(g.textureWidth,g.textureHeight,{format:Ft,type:pn,depthTexture:new no(g.textureWidth,g.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:w.stencil,colorSpace:n.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const fe={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:a};E=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:E}),n.setPixelRatio(1),n.setSize(E.framebufferWidth,E.framebufferHeight,!1),x=new Mn(E.framebufferWidth,E.framebufferHeight,{format:Ft,type:pn,colorSpace:n.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(h),u=null,s=await r.requestReferenceSpace(o),Xe.setContext(r),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function ne(k){for(let K=0;K<k.removed.length;K++){const fe=k.removed[K],Le=P.indexOf(fe);Le>=0&&(P[Le]=null,y[Le].disconnect(fe))}for(let K=0;K<k.added.length;K++){const fe=k.added[K];let Le=P.indexOf(fe);if(Le===-1){for(let Be=0;Be<y.length;Be++)if(Be>=P.length){P.push(fe),Le=Be;break}else if(P[Be]===null){P[Be]=fe,Le=Be;break}if(Le===-1)break}const xe=y[Le];xe&&xe.connect(fe)}}const V=new ae,Ee=new ae;function be(k,K,fe){V.setFromMatrixPosition(K.matrixWorld),Ee.setFromMatrixPosition(fe.matrixWorld);const Le=V.distanceTo(Ee),xe=K.projectionMatrix.elements,Be=fe.projectionMatrix.elements,ut=xe[14]/(xe[10]-1),T=xe[14]/(xe[10]+1),Ze=(xe[9]+1)/xe[5],Ue=(xe[9]-1)/xe[5],Ce=(xe[8]-1)/xe[0],me=(Be[8]+1)/Be[0],Qe=ut*Ce,_e=ut*me,Ne=Le/(-Ce+me),lt=Ne*-Ce;if(K.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(lt),k.translateZ(Ne),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),xe[10]===-1)k.projectionMatrix.copy(K.projectionMatrix),k.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const it=ut+Ne,S=T+Ne,c=Qe-lt,D=_e+(Le-lt),H=Ze*T/S*it,Y=Ue*T/S*it;k.projectionMatrix.makePerspective(c,D,H,Y,it,S),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function Ie(k,K){K===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(K.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;let K=k.near,fe=k.far;d.texture!==null&&(d.depthNear>0&&(K=d.depthNear),d.depthFar>0&&(fe=d.depthFar)),B.near=_.near=v.near=K,B.far=_.far=v.far=fe,(X!==B.near||q!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),X=B.near,q=B.far),B.layers.mask=k.layers.mask|6,v.layers.mask=B.layers.mask&3,_.layers.mask=B.layers.mask&5;const Le=k.parent,xe=B.cameras;Ie(B,Le);for(let Be=0;Be<xe.length;Be++)Ie(xe[Be],Le);xe.length===2?be(B,v,_):B.projectionMatrix.copy(v.projectionMatrix),Ve(k,B,Le)};function Ve(k,K,fe){fe===null?k.matrix.copy(K.matrixWorld):(k.matrix.copy(fe.matrixWorld),k.matrix.invert(),k.matrix.multiply(K.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(K.projectionMatrix),k.projectionMatrixInverse.copy(K.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=qo*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(g===null&&E===null))return h},this.setFoveation=function(k){h=k,g!==null&&(g.fixedFoveation=k),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=k)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(B)},this.getCameraTexture=function(k){return l[k]};let nt=null;function et(k,K){if(m=K.getViewerPose(u||s),A=K,m!==null){const fe=m.views;E!==null&&(n.setRenderTargetFramebuffer(x,E.framebuffer),n.setRenderTarget(x));let Le=!1;fe.length!==B.cameras.length&&(B.cameras.length=0,Le=!0);for(let T=0;T<fe.length;T++){const Ze=fe[T];let Ue=null;if(E!==null)Ue=E.getViewport(Ze);else{const me=p.getViewSubImage(g,Ze);Ue=me.viewport,T===0&&(n.setRenderTargetTextures(x,me.colorTexture,me.depthStencilTexture),n.setRenderTarget(x))}let Ce=U[T];Ce===void 0&&(Ce=new Dn,Ce.layers.enable(T),Ce.viewport=new vt,U[T]=Ce),Ce.matrix.fromArray(Ze.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Ze.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),T===0&&(B.matrix.copy(Ce.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Le===!0&&B.cameras.push(Ce)}const xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){p=i.getBinding();const T=p.getDepthInformation(fe[0]);T&&T.isValid&&T.texture&&d.init(T,r.renderState)}if(xe&&xe.includes("camera-access")&&M){n.state.unbindTexture(),p=i.getBinding();for(let T=0;T<fe.length;T++){const Ze=fe[T].camera;if(Ze){let Ue=l[Ze];Ue||(Ue=new so,l[Ze]=Ue);const Ce=p.getCameraImage(Ze);Ue.sourceTexture=Ce}}}}for(let fe=0;fe<y.length;fe++){const Le=P[fe],xe=y[fe];Le!==null&&xe!==void 0&&xe.update(Le,K,u||s)}nt&&nt(k,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),A=null}const Xe=new xo;Xe.setAnimationLoop(et),this.setAnimationLoop=function(k){nt=k},this.dispose=function(){}}}const tn=new Nn,$f=new Vt;function Zf(e,n){function t(d,l){d.matrixAutoUpdate===!0&&d.updateMatrix(),l.value.copy(d.matrix)}function i(d,l){l.color.getRGB(d.fogColor.value,mo(e)),l.isFog?(d.fogNear.value=l.near,d.fogFar.value=l.far):l.isFogExp2&&(d.fogDensity.value=l.density)}function r(d,l,w,R,x){l.isMeshBasicMaterial||l.isMeshLambertMaterial?a(d,l):l.isMeshToonMaterial?(a(d,l),p(d,l)):l.isMeshPhongMaterial?(a(d,l),m(d,l)):l.isMeshStandardMaterial?(a(d,l),g(d,l),l.isMeshPhysicalMaterial&&E(d,l,x)):l.isMeshMatcapMaterial?(a(d,l),A(d,l)):l.isMeshDepthMaterial?a(d,l):l.isMeshDistanceMaterial?(a(d,l),M(d,l)):l.isMeshNormalMaterial?a(d,l):l.isLineBasicMaterial?(s(d,l),l.isLineDashedMaterial&&o(d,l)):l.isPointsMaterial?h(d,l,w,R):l.isSpriteMaterial?u(d,l):l.isShadowMaterial?(d.color.value.copy(l.color),d.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}function a(d,l){d.opacity.value=l.opacity,l.color&&d.diffuse.value.copy(l.color),l.emissive&&d.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(d.map.value=l.map,t(l.map,d.mapTransform)),l.alphaMap&&(d.alphaMap.value=l.alphaMap,t(l.alphaMap,d.alphaMapTransform)),l.bumpMap&&(d.bumpMap.value=l.bumpMap,t(l.bumpMap,d.bumpMapTransform),d.bumpScale.value=l.bumpScale,l.side===xt&&(d.bumpScale.value*=-1)),l.normalMap&&(d.normalMap.value=l.normalMap,t(l.normalMap,d.normalMapTransform),d.normalScale.value.copy(l.normalScale),l.side===xt&&d.normalScale.value.negate()),l.displacementMap&&(d.displacementMap.value=l.displacementMap,t(l.displacementMap,d.displacementMapTransform),d.displacementScale.value=l.displacementScale,d.displacementBias.value=l.displacementBias),l.emissiveMap&&(d.emissiveMap.value=l.emissiveMap,t(l.emissiveMap,d.emissiveMapTransform)),l.specularMap&&(d.specularMap.value=l.specularMap,t(l.specularMap,d.specularMapTransform)),l.alphaTest>0&&(d.alphaTest.value=l.alphaTest);const w=n.get(l),R=w.envMap,x=w.envMapRotation;R&&(d.envMap.value=R,tn.copy(x),tn.x*=-1,tn.y*=-1,tn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(tn.y*=-1,tn.z*=-1),d.envMapRotation.value.setFromMatrix4($f.makeRotationFromEuler(tn)),d.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=l.reflectivity,d.ior.value=l.ior,d.refractionRatio.value=l.refractionRatio),l.lightMap&&(d.lightMap.value=l.lightMap,d.lightMapIntensity.value=l.lightMapIntensity,t(l.lightMap,d.lightMapTransform)),l.aoMap&&(d.aoMap.value=l.aoMap,d.aoMapIntensity.value=l.aoMapIntensity,t(l.aoMap,d.aoMapTransform))}function s(d,l){d.diffuse.value.copy(l.color),d.opacity.value=l.opacity,l.map&&(d.map.value=l.map,t(l.map,d.mapTransform))}function o(d,l){d.dashSize.value=l.dashSize,d.totalSize.value=l.dashSize+l.gapSize,d.scale.value=l.scale}function h(d,l,w,R){d.diffuse.value.copy(l.color),d.opacity.value=l.opacity,d.size.value=l.size*w,d.scale.value=R*.5,l.map&&(d.map.value=l.map,t(l.map,d.uvTransform)),l.alphaMap&&(d.alphaMap.value=l.alphaMap,t(l.alphaMap,d.alphaMapTransform)),l.alphaTest>0&&(d.alphaTest.value=l.alphaTest)}function u(d,l){d.diffuse.value.copy(l.color),d.opacity.value=l.opacity,d.rotation.value=l.rotation,l.map&&(d.map.value=l.map,t(l.map,d.mapTransform)),l.alphaMap&&(d.alphaMap.value=l.alphaMap,t(l.alphaMap,d.alphaMapTransform)),l.alphaTest>0&&(d.alphaTest.value=l.alphaTest)}function m(d,l){d.specular.value.copy(l.specular),d.shininess.value=Math.max(l.shininess,1e-4)}function p(d,l){l.gradientMap&&(d.gradientMap.value=l.gradientMap)}function g(d,l){d.metalness.value=l.metalness,l.metalnessMap&&(d.metalnessMap.value=l.metalnessMap,t(l.metalnessMap,d.metalnessMapTransform)),d.roughness.value=l.roughness,l.roughnessMap&&(d.roughnessMap.value=l.roughnessMap,t(l.roughnessMap,d.roughnessMapTransform)),l.envMap&&(d.envMapIntensity.value=l.envMapIntensity)}function E(d,l,w){d.ior.value=l.ior,l.sheen>0&&(d.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),d.sheenRoughness.value=l.sheenRoughness,l.sheenColorMap&&(d.sheenColorMap.value=l.sheenColorMap,t(l.sheenColorMap,d.sheenColorMapTransform)),l.sheenRoughnessMap&&(d.sheenRoughnessMap.value=l.sheenRoughnessMap,t(l.sheenRoughnessMap,d.sheenRoughnessMapTransform))),l.clearcoat>0&&(d.clearcoat.value=l.clearcoat,d.clearcoatRoughness.value=l.clearcoatRoughness,l.clearcoatMap&&(d.clearcoatMap.value=l.clearcoatMap,t(l.clearcoatMap,d.clearcoatMapTransform)),l.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap,t(l.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),l.clearcoatNormalMap&&(d.clearcoatNormalMap.value=l.clearcoatNormalMap,t(l.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),l.side===xt&&d.clearcoatNormalScale.value.negate())),l.dispersion>0&&(d.dispersion.value=l.dispersion),l.iridescence>0&&(d.iridescence.value=l.iridescence,d.iridescenceIOR.value=l.iridescenceIOR,d.iridescenceThicknessMinimum.value=l.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=l.iridescenceThicknessRange[1],l.iridescenceMap&&(d.iridescenceMap.value=l.iridescenceMap,t(l.iridescenceMap,d.iridescenceMapTransform)),l.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=l.iridescenceThicknessMap,t(l.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),l.transmission>0&&(d.transmission.value=l.transmission,d.transmissionSamplerMap.value=w.texture,d.transmissionSamplerSize.value.set(w.width,w.height),l.transmissionMap&&(d.transmissionMap.value=l.transmissionMap,t(l.transmissionMap,d.transmissionMapTransform)),d.thickness.value=l.thickness,l.thicknessMap&&(d.thicknessMap.value=l.thicknessMap,t(l.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=l.attenuationDistance,d.attenuationColor.value.copy(l.attenuationColor)),l.anisotropy>0&&(d.anisotropyVector.value.set(l.anisotropy*Math.cos(l.anisotropyRotation),l.anisotropy*Math.sin(l.anisotropyRotation)),l.anisotropyMap&&(d.anisotropyMap.value=l.anisotropyMap,t(l.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=l.specularIntensity,d.specularColor.value.copy(l.specularColor),l.specularColorMap&&(d.specularColorMap.value=l.specularColorMap,t(l.specularColorMap,d.specularColorMapTransform)),l.specularIntensityMap&&(d.specularIntensityMap.value=l.specularIntensityMap,t(l.specularIntensityMap,d.specularIntensityMapTransform))}function A(d,l){l.matcap&&(d.matcap.value=l.matcap)}function M(d,l){const w=n.get(l).light;d.referencePosition.value.setFromMatrixPosition(w.matrixWorld),d.nearDistance.value=w.shadow.camera.near,d.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Qf(e,n,t,i){let r={},a={},s=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function h(w,R){const x=R.program;i.uniformBlockBinding(w,x)}function u(w,R){let x=r[w.id];x===void 0&&(A(w),x=m(w),r[w.id]=x,w.addEventListener("dispose",d));const y=R.program;i.updateUBOMapping(w,y);const P=n.render.frame;a[w.id]!==P&&(g(w),a[w.id]=P)}function m(w){const R=p();w.__bindingPointIndex=R;const x=e.createBuffer(),y=w.__size,P=w.usage;return e.bindBuffer(e.UNIFORM_BUFFER,x),e.bufferData(e.UNIFORM_BUFFER,y,P),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,R,x),x}function p(){for(let w=0;w<o;w++)if(s.indexOf(w)===-1)return s.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const R=r[w.id],x=w.uniforms,y=w.__cache;e.bindBuffer(e.UNIFORM_BUFFER,R);for(let P=0,I=x.length;P<I;P++){const G=Array.isArray(x[P])?x[P]:[x[P]];for(let v=0,_=G.length;v<_;v++){const U=G[v];if(E(U,P,v,y)===!0){const B=U.__offset,X=Array.isArray(U.value)?U.value:[U.value];let q=0;for(let $=0;$<X.length;$++){const W=X[$],ne=M(W);typeof W=="number"||typeof W=="boolean"?(U.__data[0]=W,e.bufferSubData(e.UNIFORM_BUFFER,B+q,U.__data)):W.isMatrix3?(U.__data[0]=W.elements[0],U.__data[1]=W.elements[1],U.__data[2]=W.elements[2],U.__data[3]=0,U.__data[4]=W.elements[3],U.__data[5]=W.elements[4],U.__data[6]=W.elements[5],U.__data[7]=0,U.__data[8]=W.elements[6],U.__data[9]=W.elements[7],U.__data[10]=W.elements[8],U.__data[11]=0):(W.toArray(U.__data,q),q+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,B,U.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function E(w,R,x,y){const P=w.value,I=R+"_"+x;if(y[I]===void 0)return typeof P=="number"||typeof P=="boolean"?y[I]=P:y[I]=P.clone(),!0;{const G=y[I];if(typeof P=="number"||typeof P=="boolean"){if(G!==P)return y[I]=P,!0}else if(G.equals(P)===!1)return G.copy(P),!0}return!1}function A(w){const R=w.uniforms;let x=0;const y=16;for(let I=0,G=R.length;I<G;I++){const v=Array.isArray(R[I])?R[I]:[R[I]];for(let _=0,U=v.length;_<U;_++){const B=v[_],X=Array.isArray(B.value)?B.value:[B.value];for(let q=0,$=X.length;q<$;q++){const W=X[q],ne=M(W),V=x%y,Ee=V%ne.boundary,be=V+Ee;x+=Ee,be!==0&&y-be<ne.storage&&(x+=y-be),B.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=x,x+=ne.storage}}}const P=x%y;return P>0&&(x+=y-P),w.__size=x,w.__cache={},this}function M(w){const R={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(R.boundary=4,R.storage=4):w.isVector2?(R.boundary=8,R.storage=8):w.isVector3||w.isColor?(R.boundary=16,R.storage=12):w.isVector4?(R.boundary=16,R.storage=16):w.isMatrix3?(R.boundary=48,R.storage=48):w.isMatrix4?(R.boundary=64,R.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),R}function d(w){const R=w.target;R.removeEventListener("dispose",d);const x=s.indexOf(R.__bindingPointIndex);s.splice(x,1),e.deleteBuffer(r[R.id]),delete r[R.id],delete a[R.id]}function l(){for(const w in r)e.deleteBuffer(r[w]);s=[],r={},a={}}return{bind:h,update:u,dispose:l}}class Jf{constructor(n={}){const{canvas:t=Ho(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:u=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:g=!1}=n;this.isWebGLRenderer=!0;let E;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=i.getContextAttributes().alpha}else E=s;const A=new Uint32Array(4),M=new Int32Array(4);let d=null,l=null;const w=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let y=!1;this._outputColorSpace=Vo;let P=0,I=0,G=null,v=-1,_=null;const U=new vt,B=new vt;let X=null;const q=new We(0);let $=0,W=t.width,ne=t.height,V=1,Ee=null,be=null;const Ie=new vt(0,0,W,ne),Ve=new vt(0,0,W,ne);let nt=!1;const et=new to;let Xe=!1,k=!1;const K=new Vt,fe=new ae,Le=new vt,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function ut(){return G===null?V:1}let T=i;function Ze(f,C){return t.getContext(f,C)}try{const f={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:u,powerPreference:m,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ko}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",Z,!1),T===null){const C="webgl2";if(T=Ze(C,f),T===null)throw Ze(C)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(f){throw console.error("THREE.WebGLRenderer: "+f.message),f}let Ue,Ce,me,Qe,_e,Ne,lt,it,S,c,D,H,Y,F,Me,ee,ge,ve,J,se,we,Se,re,De;function b(){Ue=new su(T),Ue.init(),Se=new Wf(T,Ue),Ce=new eu(T,Ue,n,Se),me=new kf(T,Ue),Ce.reversedDepthBuffer&&g&&me.buffers.depth.setReversed(!0),Qe=new du(T),_e=new Pf,Ne=new zf(T,Ue,me,_e,Ce,Se,Qe),lt=new nu(x),it=new ou(x),S=new _l(T),re=new Jd(T,S),c=new lu(T,S,Qe,re),D=new fu(T,c,S,Qe),J=new uu(T,Ce,Ne),ee=new tu(_e),H=new Cf(x,lt,it,Ue,Ce,re,ee),Y=new Zf(x,_e),F=new yf,Me=new Ff(Ue),ve=new Qd(x,lt,it,me,D,E,h),ge=new Hf(x,D,Ce),De=new Qf(T,Qe,Ce,me),se=new jd(T,Ue,Qe),we=new cu(T,Ue,Qe),Qe.programs=H.programs,x.capabilities=Ce,x.extensions=Ue,x.properties=_e,x.renderLists=F,x.shadowMap=ge,x.state=me,x.info=Qe}b();const j=new Kf(x,T);this.xr=j,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const f=Ue.get("WEBGL_lose_context");f&&f.loseContext()},this.forceContextRestore=function(){const f=Ue.get("WEBGL_lose_context");f&&f.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(f){f!==void 0&&(V=f,this.setSize(W,ne,!1))},this.getSize=function(f){return f.set(W,ne)},this.setSize=function(f,C,N=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=f,ne=C,t.width=Math.floor(f*V),t.height=Math.floor(C*V),N===!0&&(t.style.width=f+"px",t.style.height=C+"px"),this.setViewport(0,0,f,C)},this.getDrawingBufferSize=function(f){return f.set(W*V,ne*V).floor()},this.setDrawingBufferSize=function(f,C,N){W=f,ne=C,V=N,t.width=Math.floor(f*N),t.height=Math.floor(C*N),this.setViewport(0,0,f,C)},this.getCurrentViewport=function(f){return f.copy(U)},this.getViewport=function(f){return f.copy(Ie)},this.setViewport=function(f,C,N,O){f.isVector4?Ie.set(f.x,f.y,f.z,f.w):Ie.set(f,C,N,O),me.viewport(U.copy(Ie).multiplyScalar(V).round())},this.getScissor=function(f){return f.copy(Ve)},this.setScissor=function(f,C,N,O){f.isVector4?Ve.set(f.x,f.y,f.z,f.w):Ve.set(f,C,N,O),me.scissor(B.copy(Ve).multiplyScalar(V).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(f){me.setScissorTest(nt=f)},this.setOpaqueSort=function(f){Ee=f},this.setTransparentSort=function(f){be=f},this.getClearColor=function(f){return f.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(f=!0,C=!0,N=!0){let O=0;if(f){let L=!1;if(G!==null){const Q=G.texture.format;L=Q===po||Q===fo||Q===uo}if(L){const Q=G.texture.type,oe=Q===pn||Q===kn||Q===ui||Q===Vn||Q===ro||Q===oo,pe=ve.getClearColor(),de=ve.getClearAlpha(),Re=pe.r,Pe=pe.g,Te=pe.b;oe?(A[0]=Re,A[1]=Pe,A[2]=Te,A[3]=de,T.clearBufferuiv(T.COLOR,0,A)):(M[0]=Re,M[1]=Pe,M[2]=Te,M[3]=de,T.clearBufferiv(T.COLOR,0,M))}else O|=T.COLOR_BUFFER_BIT}C&&(O|=T.DEPTH_BUFFER_BIT),N&&(O|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),ve.dispose(),F.dispose(),Me.dispose(),_e.dispose(),lt.dispose(),it.dispose(),D.dispose(),re.dispose(),De.dispose(),H.dispose(),j.dispose(),j.removeEventListener("sessionstart",Lt),j.removeEventListener("sessionend",Ta),Jt.stop()};function te(f){f.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const f=Qe.autoReset,C=ge.enabled,N=ge.autoUpdate,O=ge.needsUpdate,L=ge.type;b(),Qe.autoReset=f,ge.enabled=C,ge.autoUpdate=N,ge.needsUpdate=O,ge.type=L}function Z(f){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",f.statusMessage)}function z(f){const C=f.target;C.removeEventListener("dispose",z),he(C)}function he(f){ye(f),_e.remove(f)}function ye(f){const C=_e.get(f).programs;C!==void 0&&(C.forEach(function(N){H.releaseProgram(N)}),f.isShaderMaterial&&H.releaseShaderCache(f))}this.renderBufferDirect=function(f,C,N,O,L,Q){C===null&&(C=xe);const oe=L.isMesh&&L.matrixWorld.determinant()<0,pe=Io(f,C,N,O,L);me.setMaterial(O,oe);let de=N.index,Re=1;if(O.wireframe===!0){if(de=c.getWireframeAttribute(N),de===void 0)return;Re=2}const Pe=N.drawRange,Te=N.attributes.position;let Fe=Pe.start*Re,ze=(Pe.start+Pe.count)*Re;Q!==null&&(Fe=Math.max(Fe,Q.start*Re),ze=Math.min(ze,(Q.start+Q.count)*Re)),de!==null?(Fe=Math.max(Fe,0),ze=Math.min(ze,de.count)):Te!=null&&(Fe=Math.max(Fe,0),ze=Math.min(ze,Te.count));const tt=ze-Fe;if(tt<0||tt===1/0)return;re.setup(L,O,pe,N,de);let Ke,qe=se;if(de!==null&&(Ke=S.get(de),qe=we,qe.setIndex(Ke)),L.isMesh)O.wireframe===!0?(me.setLineWidth(O.wireframeLinewidth*ut()),qe.setMode(T.LINES)):qe.setMode(T.TRIANGLES);else if(L.isLine){let Ae=O.linewidth;Ae===void 0&&(Ae=1),me.setLineWidth(Ae*ut()),L.isLineSegments?qe.setMode(T.LINES):L.isLineLoop?qe.setMode(T.LINE_LOOP):qe.setMode(T.LINE_STRIP)}else L.isPoints?qe.setMode(T.POINTS):L.isSprite&&qe.setMode(T.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)Xi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),qe.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))qe.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const Ae=L._multiDrawStarts,Je=L._multiDrawCounts,Ge=L._multiDrawCount,St=de?S.get(de).bytesPerElement:1,mn=_e.get(O).currentProgram.getUniforms();for(let Et=0;Et<Ge;Et++)mn.setValue(T,"_gl_DrawID",Et),qe.render(Ae[Et]/St,Je[Et])}else if(L.isInstancedMesh)qe.renderInstances(Fe,tt,L.count);else if(N.isInstancedBufferGeometry){const Ae=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,Je=Math.min(N.instanceCount,Ae);qe.renderInstances(Fe,tt,Je)}else qe.render(Fe,tt)};function Ye(f,C,N){f.transparent===!0&&f.side===Ut&&f.forceSinglePass===!1?(f.side=xt,f.needsUpdate=!0,Zn(f,C,N),f.side=Hn,f.needsUpdate=!0,Zn(f,C,N),f.side=Ut):Zn(f,C,N)}this.compile=function(f,C,N=null){N===null&&(N=f),l=Me.get(N),l.init(C),R.push(l),N.traverseVisible(function(L){L.isLight&&L.layers.test(C.layers)&&(l.pushLight(L),L.castShadow&&l.pushShadow(L))}),f!==N&&f.traverseVisible(function(L){L.isLight&&L.layers.test(C.layers)&&(l.pushLight(L),L.castShadow&&l.pushShadow(L))}),l.setupLights();const O=new Set;return f.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const Q=L.material;if(Q)if(Array.isArray(Q))for(let oe=0;oe<Q.length;oe++){const pe=Q[oe];Ye(pe,N,L),O.add(pe)}else Ye(Q,N,L),O.add(Q)}),l=R.pop(),O},this.compileAsync=function(f,C,N=null){const O=this.compile(f,C,N);return new Promise(L=>{function Q(){if(O.forEach(function(oe){_e.get(oe).currentProgram.isReady()&&O.delete(oe)}),O.size===0){L(f);return}setTimeout(Q,10)}Ue.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let ke=null;function Nt(f){ke&&ke(f)}function Lt(){Jt.stop()}function Ta(){Jt.start()}const Jt=new xo;Jt.setAnimationLoop(Nt),typeof self<"u"&&Jt.setContext(self),this.setAnimationLoop=function(f){ke=f,j.setAnimationLoop(f),f===null?Jt.stop():Jt.start()},j.addEventListener("sessionstart",Lt),j.addEventListener("sessionend",Ta),this.render=function(f,C){if(C!==void 0&&C.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(C),C=j.getCamera()),f.isScene===!0&&f.onBeforeRender(x,f,C,G),l=Me.get(f,R.length),l.init(C),R.push(l),K.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),et.setFromProjectionMatrix(K,Pa,C.reversedDepth),k=this.localClippingEnabled,Xe=ee.init(this.clippingPlanes,k),d=F.get(f,w.length),d.init(),w.push(d),j.enabled===!0&&j.isPresenting===!0){const Q=x.xr.getDepthSensingMesh();Q!==null&&Mi(Q,C,-1/0,x.sortObjects)}Mi(f,C,0,x.sortObjects),d.finish(),x.sortObjects===!0&&d.sort(Ee,be),Be=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Be&&ve.addToRenderList(d,f),this.info.render.frame++,Xe===!0&&ee.beginShadows();const N=l.state.shadowsArray;ge.render(N,f,C),Xe===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=d.opaque,L=d.transmissive;if(l.setupLights(),C.isArrayCamera){const Q=C.cameras;if(L.length>0)for(let oe=0,pe=Q.length;oe<pe;oe++){const de=Q[oe];ba(O,L,f,de)}Be&&ve.render(f);for(let oe=0,pe=Q.length;oe<pe;oe++){const de=Q[oe];Aa(d,f,de,de.viewport)}}else L.length>0&&ba(O,L,f,C),Be&&ve.render(f),Aa(d,f,C);G!==null&&I===0&&(Ne.updateMultisampleRenderTarget(G),Ne.updateRenderTargetMipmap(G)),f.isScene===!0&&f.onAfterRender(x,f,C),re.resetDefaultState(),v=-1,_=null,R.pop(),R.length>0?(l=R[R.length-1],Xe===!0&&ee.setGlobalState(x.clippingPlanes,l.state.camera)):l=null,w.pop(),w.length>0?d=w[w.length-1]:d=null};function Mi(f,C,N,O){if(f.visible===!1)return;if(f.layers.test(C.layers)){if(f.isGroup)N=f.renderOrder;else if(f.isLOD)f.autoUpdate===!0&&f.update(C);else if(f.isLight)l.pushLight(f),f.castShadow&&l.pushShadow(f);else if(f.isSprite){if(!f.frustumCulled||et.intersectsSprite(f)){O&&Le.setFromMatrixPosition(f.matrixWorld).applyMatrix4(K);const oe=D.update(f),pe=f.material;pe.visible&&d.push(f,oe,pe,N,Le.z,null)}}else if((f.isMesh||f.isLine||f.isPoints)&&(!f.frustumCulled||et.intersectsObject(f))){const oe=D.update(f),pe=f.material;if(O&&(f.boundingSphere!==void 0?(f.boundingSphere===null&&f.computeBoundingSphere(),Le.copy(f.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Le.copy(oe.boundingSphere.center)),Le.applyMatrix4(f.matrixWorld).applyMatrix4(K)),Array.isArray(pe)){const de=oe.groups;for(let Re=0,Pe=de.length;Re<Pe;Re++){const Te=de[Re],Fe=pe[Te.materialIndex];Fe&&Fe.visible&&d.push(f,oe,Fe,N,Le.z,Te)}}else pe.visible&&d.push(f,oe,pe,N,Le.z,null)}}const Q=f.children;for(let oe=0,pe=Q.length;oe<pe;oe++)Mi(Q[oe],C,N,O)}function Aa(f,C,N,O){const L=f.opaque,Q=f.transmissive,oe=f.transparent;l.setupLightsView(N),Xe===!0&&ee.setGlobalState(x.clippingPlanes,N),O&&me.viewport(U.copy(O)),L.length>0&&$n(L,C,N),Q.length>0&&$n(Q,C,N),oe.length>0&&$n(oe,C,N),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function ba(f,C,N,O){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;l.state.transmissionRenderTarget[O.id]===void 0&&(l.state.transmissionRenderTarget[O.id]=new Mn(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?pi:pn,minFilter:yn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const Q=l.state.transmissionRenderTarget[O.id],oe=O.viewport||U;Q.setSize(oe.z*x.transmissionResolutionScale,oe.w*x.transmissionResolutionScale);const pe=x.getRenderTarget(),de=x.getActiveCubeFace(),Re=x.getActiveMipmapLevel();x.setRenderTarget(Q),x.getClearColor(q),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),x.clear(),Be&&ve.render(N);const Pe=x.toneMapping;x.toneMapping=Kt;const Te=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),l.setupLightsView(O),Xe===!0&&ee.setGlobalState(x.clippingPlanes,O),$n(f,N,O),Ne.updateMultisampleRenderTarget(Q),Ne.updateRenderTargetMipmap(Q),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let ze=0,tt=C.length;ze<tt;ze++){const Ke=C[ze],qe=Ke.object,Ae=Ke.geometry,Je=Ke.material,Ge=Ke.group;if(Je.side===Ut&&qe.layers.test(O.layers)){const St=Je.side;Je.side=xt,Je.needsUpdate=!0,Ra(qe,N,O,Ae,Je,Ge),Je.side=St,Je.needsUpdate=!0,Fe=!0}}Fe===!0&&(Ne.updateMultisampleRenderTarget(Q),Ne.updateRenderTargetMipmap(Q))}x.setRenderTarget(pe,de,Re),x.setClearColor(q,$),Te!==void 0&&(O.viewport=Te),x.toneMapping=Pe}function $n(f,C,N){const O=C.isScene===!0?C.overrideMaterial:null;for(let L=0,Q=f.length;L<Q;L++){const oe=f[L],pe=oe.object,de=oe.geometry,Re=oe.group;let Pe=oe.material;Pe.allowOverride===!0&&O!==null&&(Pe=O),pe.layers.test(N.layers)&&Ra(pe,C,N,de,Pe,Re)}}function Ra(f,C,N,O,L,Q){f.onBeforeRender(x,C,N,O,L,Q),f.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,f.matrixWorld),f.normalMatrix.getNormalMatrix(f.modelViewMatrix),L.onBeforeRender(x,C,N,O,f,Q),L.transparent===!0&&L.side===Ut&&L.forceSinglePass===!1?(L.side=xt,L.needsUpdate=!0,x.renderBufferDirect(N,C,O,L,f,Q),L.side=Hn,L.needsUpdate=!0,x.renderBufferDirect(N,C,O,L,f,Q),L.side=Ut):x.renderBufferDirect(N,C,O,L,f,Q),f.onAfterRender(x,C,N,O,L,Q)}function Zn(f,C,N){C.isScene!==!0&&(C=xe);const O=_e.get(f),L=l.state.lights,Q=l.state.shadowsArray,oe=L.state.version,pe=H.getParameters(f,L.state,Q,C,N),de=H.getProgramCacheKey(pe);let Re=O.programs;O.environment=f.isMeshStandardMaterial?C.environment:null,O.fog=C.fog,O.envMap=(f.isMeshStandardMaterial?it:lt).get(f.envMap||O.environment),O.envMapRotation=O.environment!==null&&f.envMap===null?C.environmentRotation:f.envMapRotation,Re===void 0&&(f.addEventListener("dispose",z),Re=new Map,O.programs=Re);let Pe=Re.get(de);if(Pe!==void 0){if(O.currentProgram===Pe&&O.lightsStateVersion===oe)return Ca(f,pe),Pe}else pe.uniforms=H.getUniforms(f),f.onBeforeCompile(pe,x),Pe=H.acquireProgram(pe,de),Re.set(de,Pe),O.uniforms=pe.uniforms;const Te=O.uniforms;return(!f.isShaderMaterial&&!f.isRawShaderMaterial||f.clipping===!0)&&(Te.clippingPlanes=ee.uniform),Ca(f,pe),O.needsLights=Oo(f),O.lightsStateVersion=oe,O.needsLights&&(Te.ambientLightColor.value=L.state.ambient,Te.lightProbe.value=L.state.probe,Te.directionalLights.value=L.state.directional,Te.directionalLightShadows.value=L.state.directionalShadow,Te.spotLights.value=L.state.spot,Te.spotLightShadows.value=L.state.spotShadow,Te.rectAreaLights.value=L.state.rectArea,Te.ltc_1.value=L.state.rectAreaLTC1,Te.ltc_2.value=L.state.rectAreaLTC2,Te.pointLights.value=L.state.point,Te.pointLightShadows.value=L.state.pointShadow,Te.hemisphereLights.value=L.state.hemi,Te.directionalShadowMap.value=L.state.directionalShadowMap,Te.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Te.spotShadowMap.value=L.state.spotShadowMap,Te.spotLightMatrix.value=L.state.spotLightMatrix,Te.spotLightMap.value=L.state.spotLightMap,Te.pointShadowMap.value=L.state.pointShadowMap,Te.pointShadowMatrix.value=L.state.pointShadowMatrix),O.currentProgram=Pe,O.uniformsList=null,Pe}function wa(f){if(f.uniformsList===null){const C=f.currentProgram.getUniforms();f.uniformsList=si.seqWithValue(C.seq,f.uniforms)}return f.uniformsList}function Ca(f,C){const N=_e.get(f);N.outputColorSpace=C.outputColorSpace,N.batching=C.batching,N.batchingColor=C.batchingColor,N.instancing=C.instancing,N.instancingColor=C.instancingColor,N.instancingMorph=C.instancingMorph,N.skinning=C.skinning,N.morphTargets=C.morphTargets,N.morphNormals=C.morphNormals,N.morphColors=C.morphColors,N.morphTargetsCount=C.morphTargetsCount,N.numClippingPlanes=C.numClippingPlanes,N.numIntersection=C.numClipIntersection,N.vertexAlphas=C.vertexAlphas,N.vertexTangents=C.vertexTangents,N.toneMapping=C.toneMapping}function Io(f,C,N,O,L){C.isScene!==!0&&(C=xe),Ne.resetTextureUnits();const Q=C.fog,oe=O.isMeshStandardMaterial?C.environment:null,pe=G===null?x.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:hi,de=(O.isMeshStandardMaterial?it:lt).get(O.envMap||oe),Re=O.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Pe=!!N.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Te=!!N.morphAttributes.position,Fe=!!N.morphAttributes.normal,ze=!!N.morphAttributes.color;let tt=Kt;O.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(tt=x.toneMapping);const Ke=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,qe=Ke!==void 0?Ke.length:0,Ae=_e.get(O),Je=l.state.lights;if(Xe===!0&&(k===!0||f!==_)){const ft=f===_&&O.id===v;ee.setState(O,f,ft)}let Ge=!1;O.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Je.state.version||Ae.outputColorSpace!==pe||L.isBatchedMesh&&Ae.batching===!1||!L.isBatchedMesh&&Ae.batching===!0||L.isBatchedMesh&&Ae.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Ae.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Ae.instancing===!1||!L.isInstancedMesh&&Ae.instancing===!0||L.isSkinnedMesh&&Ae.skinning===!1||!L.isSkinnedMesh&&Ae.skinning===!0||L.isInstancedMesh&&Ae.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Ae.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Ae.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Ae.instancingMorph===!1&&L.morphTexture!==null||Ae.envMap!==de||O.fog===!0&&Ae.fog!==Q||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ee.numPlanes||Ae.numIntersection!==ee.numIntersection)||Ae.vertexAlphas!==Re||Ae.vertexTangents!==Pe||Ae.morphTargets!==Te||Ae.morphNormals!==Fe||Ae.morphColors!==ze||Ae.toneMapping!==tt||Ae.morphTargetsCount!==qe)&&(Ge=!0):(Ge=!0,Ae.__version=O.version);let St=Ae.currentProgram;Ge===!0&&(St=Zn(O,C,L));let mn=!1,Et=!1,bn=!1;const je=St.getUniforms(),At=Ae.uniforms;if(me.useProgram(St.program)&&(mn=!0,Et=!0,bn=!0),O.id!==v&&(v=O.id,Et=!0),mn||_!==f){me.buffers.depth.getReversed()&&f.reversedDepth!==!0&&(f._reversedDepth=!0,f.updateProjectionMatrix()),je.setValue(T,"projectionMatrix",f.projectionMatrix),je.setValue(T,"viewMatrix",f.matrixWorldInverse);const mt=je.map.cameraPosition;mt!==void 0&&mt.setValue(T,fe.setFromMatrixPosition(f.matrixWorld)),Ce.logarithmicDepthBuffer&&je.setValue(T,"logDepthBufFC",2/(Math.log(f.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&je.setValue(T,"isOrthographic",f.isOrthographicCamera===!0),_!==f&&(_=f,Et=!0,bn=!0)}if(L.isSkinnedMesh){je.setOptional(T,L,"bindMatrix"),je.setOptional(T,L,"bindMatrixInverse");const ft=L.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),je.setValue(T,"boneTexture",ft.boneTexture,Ne))}L.isBatchedMesh&&(je.setOptional(T,L,"batchingTexture"),je.setValue(T,"batchingTexture",L._matricesTexture,Ne),je.setOptional(T,L,"batchingIdTexture"),je.setValue(T,"batchingIdTexture",L._indirectTexture,Ne),je.setOptional(T,L,"batchingColorTexture"),L._colorsTexture!==null&&je.setValue(T,"batchingColorTexture",L._colorsTexture,Ne));const bt=N.morphAttributes;if((bt.position!==void 0||bt.normal!==void 0||bt.color!==void 0)&&J.update(L,N,St),(Et||Ae.receiveShadow!==L.receiveShadow)&&(Ae.receiveShadow=L.receiveShadow,je.setValue(T,"receiveShadow",L.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(At.envMap.value=de,At.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&C.environment!==null&&(At.envMapIntensity.value=C.environmentIntensity),Et&&(je.setValue(T,"toneMappingExposure",x.toneMappingExposure),Ae.needsLights&&No(At,bn),Q&&O.fog===!0&&Y.refreshFogUniforms(At,Q),Y.refreshMaterialUniforms(At,O,V,ne,l.state.transmissionRenderTarget[f.id]),si.upload(T,wa(Ae),At,Ne)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(si.upload(T,wa(Ae),At,Ne),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&je.setValue(T,"center",L.center),je.setValue(T,"modelViewMatrix",L.modelViewMatrix),je.setValue(T,"normalMatrix",L.normalMatrix),je.setValue(T,"modelMatrix",L.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const ft=O.uniformsGroups;for(let mt=0,xi=ft.length;mt<xi;mt++){const jt=ft[mt];De.update(jt,St),De.bind(jt,St)}}return St}function No(f,C){f.ambientLightColor.needsUpdate=C,f.lightProbe.needsUpdate=C,f.directionalLights.needsUpdate=C,f.directionalLightShadows.needsUpdate=C,f.pointLights.needsUpdate=C,f.pointLightShadows.needsUpdate=C,f.spotLights.needsUpdate=C,f.spotLightShadows.needsUpdate=C,f.rectAreaLights.needsUpdate=C,f.hemisphereLights.needsUpdate=C}function Oo(f){return f.isMeshLambertMaterial||f.isMeshToonMaterial||f.isMeshPhongMaterial||f.isMeshStandardMaterial||f.isShadowMaterial||f.isShaderMaterial&&f.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(f,C,N){const O=_e.get(f);O.__autoAllocateDepthBuffer=f.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),_e.get(f.texture).__webglTexture=C,_e.get(f.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:N,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(f,C){const N=_e.get(f);N.__webglFramebuffer=C,N.__useDefaultFramebuffer=C===void 0};const Fo=T.createFramebuffer();this.setRenderTarget=function(f,C=0,N=0){G=f,P=C,I=N;let O=!0,L=null,Q=!1,oe=!1;if(f){const de=_e.get(f);if(de.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(T.FRAMEBUFFER,null),O=!1;else if(de.__webglFramebuffer===void 0)Ne.setupRenderTarget(f);else if(de.__hasExternalTextures)Ne.rebindTextures(f,_e.get(f.texture).__webglTexture,_e.get(f.depthTexture).__webglTexture);else if(f.depthBuffer){const Te=f.depthTexture;if(de.__boundDepthTexture!==Te){if(Te!==null&&_e.has(Te)&&(f.width!==Te.image.width||f.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(f)}}const Re=f.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(oe=!0);const Pe=_e.get(f).__webglFramebuffer;f.isWebGLCubeRenderTarget?(Array.isArray(Pe[C])?L=Pe[C][N]:L=Pe[C],Q=!0):f.samples>0&&Ne.useMultisampledRTT(f)===!1?L=_e.get(f).__webglMultisampledFramebuffer:Array.isArray(Pe)?L=Pe[N]:L=Pe,U.copy(f.viewport),B.copy(f.scissor),X=f.scissorTest}else U.copy(Ie).multiplyScalar(V).floor(),B.copy(Ve).multiplyScalar(V).floor(),X=nt;if(N!==0&&(L=Fo),me.bindFramebuffer(T.FRAMEBUFFER,L)&&O&&me.drawBuffers(f,L),me.viewport(U),me.scissor(B),me.setScissorTest(X),Q){const de=_e.get(f.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+C,de.__webglTexture,N)}else if(oe){const de=C;for(let Re=0;Re<f.textures.length;Re++){const Pe=_e.get(f.textures[Re]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Re,Pe.__webglTexture,N,de)}}else if(f!==null&&N!==0){const de=_e.get(f.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,de.__webglTexture,N)}v=-1},this.readRenderTargetPixels=function(f,C,N,O,L,Q,oe,pe=0){if(!(f&&f.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=_e.get(f).__webglFramebuffer;if(f.isWebGLCubeRenderTarget&&oe!==void 0&&(de=de[oe]),de){me.bindFramebuffer(T.FRAMEBUFFER,de);try{const Re=f.textures[pe],Pe=Re.format,Te=Re.type;if(!Ce.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=f.width-O&&N>=0&&N<=f.height-L&&(f.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+pe),T.readPixels(C,N,O,L,Se.convert(Pe),Se.convert(Te),Q))}finally{const Re=G!==null?_e.get(G).__webglFramebuffer:null;me.bindFramebuffer(T.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(f,C,N,O,L,Q,oe,pe=0){if(!(f&&f.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=_e.get(f).__webglFramebuffer;if(f.isWebGLCubeRenderTarget&&oe!==void 0&&(de=de[oe]),de)if(C>=0&&C<=f.width-O&&N>=0&&N<=f.height-L){me.bindFramebuffer(T.FRAMEBUFFER,de);const Re=f.textures[pe],Pe=Re.format,Te=Re.type;if(!Ce.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Fe=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Fe),T.bufferData(T.PIXEL_PACK_BUFFER,Q.byteLength,T.STREAM_READ),f.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+pe),T.readPixels(C,N,O,L,Se.convert(Pe),Se.convert(Te),0);const ze=G!==null?_e.get(G).__webglFramebuffer:null;me.bindFramebuffer(T.FRAMEBUFFER,ze);const tt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await zo(T,tt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Fe),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Q),T.deleteBuffer(Fe),T.deleteSync(tt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(f,C=null,N=0){const O=Math.pow(2,-N),L=Math.floor(f.image.width*O),Q=Math.floor(f.image.height*O),oe=C!==null?C.x:0,pe=C!==null?C.y:0;Ne.setTexture2D(f,0),T.copyTexSubImage2D(T.TEXTURE_2D,N,0,0,oe,pe,L,Q),me.unbindTexture()};const Bo=T.createFramebuffer(),Go=T.createFramebuffer();this.copyTextureToTexture=function(f,C,N=null,O=null,L=0,Q=null){Q===null&&(L!==0?(Xi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=L,L=0):Q=0);let oe,pe,de,Re,Pe,Te,Fe,ze,tt;const Ke=f.isCompressedTexture?f.mipmaps[Q]:f.image;if(N!==null)oe=N.max.x-N.min.x,pe=N.max.y-N.min.y,de=N.isBox3?N.max.z-N.min.z:1,Re=N.min.x,Pe=N.min.y,Te=N.isBox3?N.min.z:0;else{const bt=Math.pow(2,-L);oe=Math.floor(Ke.width*bt),pe=Math.floor(Ke.height*bt),f.isDataArrayTexture?de=Ke.depth:f.isData3DTexture?de=Math.floor(Ke.depth*bt):de=1,Re=0,Pe=0,Te=0}O!==null?(Fe=O.x,ze=O.y,tt=O.z):(Fe=0,ze=0,tt=0);const qe=Se.convert(C.format),Ae=Se.convert(C.type);let Je;C.isData3DTexture?(Ne.setTexture3D(C,0),Je=T.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(Ne.setTexture2DArray(C,0),Je=T.TEXTURE_2D_ARRAY):(Ne.setTexture2D(C,0),Je=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,C.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,C.unpackAlignment);const Ge=T.getParameter(T.UNPACK_ROW_LENGTH),St=T.getParameter(T.UNPACK_IMAGE_HEIGHT),mn=T.getParameter(T.UNPACK_SKIP_PIXELS),Et=T.getParameter(T.UNPACK_SKIP_ROWS),bn=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Ke.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Ke.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Re),T.pixelStorei(T.UNPACK_SKIP_ROWS,Pe),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Te);const je=f.isDataArrayTexture||f.isData3DTexture,At=C.isDataArrayTexture||C.isData3DTexture;if(f.isDepthTexture){const bt=_e.get(f),ft=_e.get(C),mt=_e.get(bt.__renderTarget),xi=_e.get(ft.__renderTarget);me.bindFramebuffer(T.READ_FRAMEBUFFER,mt.__webglFramebuffer),me.bindFramebuffer(T.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let jt=0;jt<de;jt++)je&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,_e.get(f).__webglTexture,L,Te+jt),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,_e.get(C).__webglTexture,Q,tt+jt)),T.blitFramebuffer(Re,Pe,oe,pe,Fe,ze,oe,pe,T.DEPTH_BUFFER_BIT,T.NEAREST);me.bindFramebuffer(T.READ_FRAMEBUFFER,null),me.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(L!==0||f.isRenderTargetTexture||_e.has(f)){const bt=_e.get(f),ft=_e.get(C);me.bindFramebuffer(T.READ_FRAMEBUFFER,Bo),me.bindFramebuffer(T.DRAW_FRAMEBUFFER,Go);for(let mt=0;mt<de;mt++)je?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,bt.__webglTexture,L,Te+mt):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,bt.__webglTexture,L),At?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ft.__webglTexture,Q,tt+mt):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ft.__webglTexture,Q),L!==0?T.blitFramebuffer(Re,Pe,oe,pe,Fe,ze,oe,pe,T.COLOR_BUFFER_BIT,T.NEAREST):At?T.copyTexSubImage3D(Je,Q,Fe,ze,tt+mt,Re,Pe,oe,pe):T.copyTexSubImage2D(Je,Q,Fe,ze,Re,Pe,oe,pe);me.bindFramebuffer(T.READ_FRAMEBUFFER,null),me.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else At?f.isDataTexture||f.isData3DTexture?T.texSubImage3D(Je,Q,Fe,ze,tt,oe,pe,de,qe,Ae,Ke.data):C.isCompressedArrayTexture?T.compressedTexSubImage3D(Je,Q,Fe,ze,tt,oe,pe,de,qe,Ke.data):T.texSubImage3D(Je,Q,Fe,ze,tt,oe,pe,de,qe,Ae,Ke):f.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,Q,Fe,ze,oe,pe,qe,Ae,Ke.data):f.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,Q,Fe,ze,Ke.width,Ke.height,qe,Ke.data):T.texSubImage2D(T.TEXTURE_2D,Q,Fe,ze,oe,pe,qe,Ae,Ke);T.pixelStorei(T.UNPACK_ROW_LENGTH,Ge),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,St),T.pixelStorei(T.UNPACK_SKIP_PIXELS,mn),T.pixelStorei(T.UNPACK_SKIP_ROWS,Et),T.pixelStorei(T.UNPACK_SKIP_IMAGES,bn),Q===0&&C.generateMipmaps&&T.generateMipmap(Je),me.unbindTexture()},this.initRenderTarget=function(f){_e.get(f).__webglFramebuffer===void 0&&Ne.setupRenderTarget(f)},this.initTexture=function(f){f.isCubeTexture?Ne.setTextureCube(f,0):f.isData3DTexture?Ne.setTexture3D(f,0):f.isDataArrayTexture||f.isCompressedArrayTexture?Ne.setTexture2DArray(f,0):Ne.setTexture2D(f,0),me.unbindTexture()},this.resetState=function(){P=0,I=0,G=null,me.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(n),t.unpackColorSpace=at._getUnpackColorSpace()}}const li=256,On=6378137,Zt=85.0511287798066,jf=Math.PI*On,ep=2*jf,Fn=e=>((e+180)%360+360)%360-180,Vr=e=>{const t=Math.max(-Zt,Math.min(Zt,e))*Math.PI/180;return On*Math.log(Math.tan(Math.PI/4+t/2))};function tp(e,n,t){if(!Number.isInteger(t)||t<0||t>30)throw new RangeError("Zoom must be an integer from 0 to 30");const i=2**t,r=Math.floor((Fn(n)+180)/360*i),s=Math.max(-Zt,Math.min(Zt,e))*Math.PI/180,o=Math.floor((1-Math.asinh(Math.tan(s))/Math.PI)/2*i);return{x:(r%i+i)%i,y:Math.max(0,Math.min(i-1,o)),z:t,n:i}}function np(e,n,t){const i=tp(e,n,t),r=li*i.n,a=(Fn(n)+180)/360*r,o=Math.max(-Zt,Math.min(Zt,e))*Math.PI/180,h=(1-Math.asinh(Math.tan(o))/Math.PI)/2*r;return{tile:i,u:a/li-i.x,v:h/li-i.y}}class ip{zoom;anchor;originTile;anchorU;anchorV;latitudeScale;tileSpan;originNorthing;constructor(n,t=12){if(!Number.isFinite(n.lat)||!Number.isFinite(n.lon)||Math.abs(n.lat)>90)throw new RangeError("Anchor must be a valid WGS84 latitude/longitude");this.anchor={lat:Math.max(-Zt,Math.min(Zt,n.lat)),lon:Fn(n.lon)},this.zoom=t;const i=np(this.anchor.lat,this.anchor.lon,t);this.originTile=i.tile,this.anchorU=i.u,this.anchorV=i.v,this.latitudeScale=Math.cos(this.anchor.lat*Math.PI/180),this.originNorthing=Vr(this.anchor.lat),this.tileSpan=ep/this.originTile.n*this.latitudeScale}toLocal(n){const t=Fn(n.lon-this.anchor.lon),i=On*t*Math.PI/180,r=Vr(n.lat)-this.originNorthing;return{x:i*this.latitudeScale,z:r*this.latitudeScale}}toGeo(n){const t=Fn(this.anchor.lon+n.x/(On*this.latitudeScale)*180/Math.PI),i=this.originNorthing+n.z/this.latitudeScale;return{lon:t,lat:(2*Math.atan(Math.exp(i/On))-Math.PI/2)*180/Math.PI}}tileOrigin(n,t){return{x:(n-this.anchorU)*this.tileSpan,z:(t+this.anchorV)*this.tileSpan}}tileOffsetAt(n,t){const i=this.anchorU+n/this.tileSpan,r=this.anchorV-t/this.tileSpan,a=Math.floor(i),s=Math.floor(r);return{dx:a>this.originTile.n/2?a-this.originTile.n:a<-this.originTile.n/2?a+this.originTile.n:a,dz:-s||0,u:i-a,v:r-s}}tileAddress(n,t){const i=this.originTile.n;return{x:((this.originTile.x+n)%i+i)%i,y:Math.max(0,Math.min(i-1,this.originTile.y-t)),z:this.zoom,n:i}}}const wo=[{name:"Manhattan, New York",lat:40.758,lon:-73.9855,terrain:"URBAN JUNGLE"},{name:"Moab, Utah",lat:38.5733,lon:-109.5498,terrain:"RED ROCK COUNTRY"},{name:"Grand Canyon",lat:36.1069,lon:-112.1129,terrain:"THE BIG DROP"},{name:"Mount Everest",lat:27.9881,lon:86.925,terrain:"ROOF OF THE WORLD"},{name:"San Francisco",lat:37.7749,lon:-122.4194,terrain:"HILL CLIMBER"},{name:"Tokyo, Japan",lat:35.6762,lon:139.6503,terrain:"NEON TRAILS"},{name:"Sahara Desert",lat:23.4162,lon:25.6628,terrain:"ENDLESS DUNES"},{name:"Swiss Alps",lat:46.8182,lon:9.2275,terrain:"HIGH ALTITUDE"}];function ap(e){const n=e.trim().match(/^\s*(-?\d+(?:\.\d+)?)\s*[, ]\s*(-?\d+(?:\.\d+)?)\s*$/);if(!n)return null;const t=Number(n[1]),i=Number(n[2]);return Math.abs(t)<=90&&Math.abs(i)<=180?{name:`${t.toFixed(4)}, ${i.toFixed(4)}`,lat:t,lon:i}:null}let kr=0;const Oi=new Map;async function rp(e){const n=ap(e);if(n)return[n];const t=e.toLowerCase().trim();if(!t)return[];if(Oi.has(t))return Oi.get(t);const i=Math.max(0,1100-(Date.now()-kr));i&&await new Promise(h=>setTimeout(h,i)),kr=Date.now();const r=new URL("https://nominatim.openstreetmap.org/search");r.search=new URLSearchParams({q:e,format:"jsonv2",limit:"5"}).toString();const a=await fetch(r,{headers:{Accept:"application/json"}});if(!a.ok)throw new Error(`Location search unavailable (${a.status})`);const o=(await a.json()).map(h=>({name:h.display_name.split(",").slice(0,3).join(",").trim(),lat:+h.lat,lon:+h.lon}));return Oi.set(t,o),o}function op(e,n,t,i){const r=Math.max(0,Math.min(n-1,t*(n-1))),a=Math.max(0,Math.min(n-1,i*(n-1))),s=Math.floor(r),o=Math.floor(a),h=Math.min(n-1,s+1),u=Math.min(n-1,o+1),m=r-s,p=a-o,g=(E,A)=>e[A*n+E]??0;return(g(s,o)*(1-m)+g(h,o)*m)*(1-p)+(g(s,u)*(1-m)+g(h,u)*m)*p}function zr(e,n,t){const i=new Float32Array((t+1)**2);for(let r=0;r<=t;r++)for(let a=0;a<=t;a++)i[r*(t+1)+a]=op(e,n,a/t,r/t);return i}function Wr(e,n,t,i){const r=Math.max(0,Math.min(n,t*n)),a=Math.max(0,Math.min(n,i*n)),s=Math.min(n-1,Math.floor(r)),o=Math.min(n-1,Math.floor(a)),h=r-s,u=a-o,m=n+1,p=e[o*m+s]??0,g=e[o*m+s+1]??0,E=e[(o+1)*m+s]??0,A=e[(o+1)*m+s+1]??0;return h>=u?p*(1-h)+g*(h-u)+A*u:p*(1-u)+A*h+E*(u-h)}function sp(e){const n=new Map,t=new Set;for(const i of e){const r=i.segments+1;for(let a=0;a<=i.segments;a++)for(const[s,o]of[[a,0],[a,i.segments],[0,a],[i.segments,a]]){const h=o*r+s,u=`${i.dx*i.segments+s},${i.dz*i.segments-o}`,m=n.get(u)??[];m.push({tile:i,index:h}),n.set(u,m)}}for(const i of n.values()){if(i.length<2)continue;const r=i.reduce((a,s)=>a+s.tile.grid[s.index],0)/i.length;for(const a of i)a.tile.grid[a.index]!==r&&(a.tile.grid[a.index]=r,t.add(a.tile))}return t}const Fi=12,wt=li,lp=36,zt=new Map;function Xr(e,n,t){const i=`${t}/${e}/${n}`;if(zt.has(i)){const a=zt.get(i);return zt.delete(i),zt.set(i,a),a}const r=(async()=>{try{const a=new Image;a.crossOrigin="anonymous",a.src=`https://s3.amazonaws.com/elevation-tiles-prod/terrarium/${t}/${e}/${n}.png`,await new Promise((m,p)=>{a.onload=()=>m(),a.onerror=()=>p(new Error("terrain tile unavailable"))});const s=document.createElement("canvas");s.width=wt,s.height=wt;const o=s.getContext("2d",{willReadFrequently:!0});if(!o)throw new Error("canvas unavailable");o.drawImage(a,0,0,wt,wt);const h=o.getImageData(0,0,wt,wt).data,u=new Float32Array(wt*wt);for(let m=0;m<u.length;m++)u[m]=h[m*4]*256+h[m*4+1]+h[m*4+2]/256-32768;return{heights:u}}catch{return{heights:new Float32Array(wt*wt)}}})();for(zt.set(i,r);zt.size>lp;)zt.delete(zt.keys().next().value);return r}class cp{group=new sn;place=null;frame=null;heightSampleMs=0;heightSamples=0;tileBuildMs=0;tileBuilds=0;detailQuality=1;baseline=0;tiles=new Map;requests=new Set;coverage={x:NaN,z:NaN};generation=0;centerSegments;activeTerrainShader=null;biome={desert:1,alpine:0};material;constructor(n=127){this.centerSegments=n,this.material=new Ct({color:16777215,roughness:.96,metalness:0,vertexColors:!0}),this.material.onBeforeCompile=t=>{t.uniforms.uRumbleDesert={value:this.biome.desert},t.uniforms.uRumbleAlpine={value:this.biome.alpine},t.uniforms.uRumbleDetail={value:this.detailQuality},this.activeTerrainShader=t,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.78, 0.81, 0.77), rumbleAlpineSnow * 0.82);`)},this.material.customProgramCacheKey=()=>"rumble-terrain-slope-biome-v1"}async load(n){this.clear();const t=++this.generation;this.place=n,this.frame=new ip(n,Fi);const i=n.name.toLowerCase();this.biome.desert=/moab|grand canyon|sahara|utah|arizona/i.test(i)?1:0,this.biome.alpine=/alps|everest|mountain|swiss/i.test(i)?1:0,this.activeTerrainShader&&(this.activeTerrainShader.uniforms.uRumbleDesert.value=this.biome.desert,this.activeTerrainShader.uniforms.uRumbleAlpine.value=this.biome.alpine);const r=this.frame.tileAddress(0,0),a=await Xr(r.x,r.y,Fi);if(t!==this.generation)return;const s=zr(a.heights,wt,this.centerSegments);this.baseline=Wr(s,this.centerSegments,this.frame.anchorU,this.frame.anchorV),this.install(0,0,a,this.centerSegments,s),this.ensureRegion(0,0)}key(n,t){return`${n},${t}`}address(n,t){return this.frame.tileAddress(n,t)}async ensureRegion(n,t){const i=this.frame;if(!i)return;const r=i.tileOffsetAt(n,t),a=r.dx,s=r.dz;if(this.coverage.x===a&&this.coverage.z===s)return;this.coverage={x:a,z:s};const o=this.generation,h=[],u=this.centerSegments;for(let m=s-1;m<=s+1;m++)for(let p=a-1;p<=a+1;p++){const g=this.key(p,m),E=p===a&&m===s?this.centerSegments:u,A=this.tiles.get(g);A&&A.segments!==E&&(this.group.remove(A.mesh),A.mesh.geometry.dispose(),this.tiles.delete(g));const M=`${o}:${g}`;if(this.tiles.has(g)||this.requests.has(M))continue;this.requests.add(M);const d=this.address(p,m);h.push(Xr(d.x,d.y,Fi).then(l=>{o===this.generation&&Math.abs(p-this.coverage.x)<=1&&Math.abs(m-this.coverage.z)<=1&&this.install(p,m,l,E)}).finally(()=>this.requests.delete(M)))}for(const[m,p]of this.tiles)(Math.abs(p.dx-a)>1||Math.abs(p.dz-s)>1)&&(this.group.remove(p.mesh),p.mesh.geometry.dispose(),this.tiles.delete(m));await Promise.all(h)}install(n,t,i,r=63,a){const s=this.key(n,t);if(this.tiles.has(s))return;const o=performance.now(),h=this.frame,u=a??zr(i.heights,wt,r),m=new zn,p=new Float32Array((r+1)**2*3),g=[],E=[];let A=1/0,M=-1/0;for(const x of u)A=Math.min(A,x),M=Math.max(M,x);const d=/moab|grand canyon|sahara|utah|arizona/i.test(this.place?.name??""),l=(d?["#d0b587","#b99360","#977046","#796044"]:["#c9c1a6","#a49c75","#758557","#657355"]).map(x=>new We(x)),w=h.tileOrigin(n,t);for(let x=0;x<=r;x++)for(let y=0;y<=r;y++){const P=x*(r+1)+y,I=u[P],G=(I-A)/Math.max(1,M-A);p[P*3]=w.x+y/r*h.tileSpan,p[P*3+1]=Bt.clamp((I-this.baseline)*1.25,-900,1800),p[P*3+2]=w.z-x/r*h.tileSpan;const v=l[G>.76?0:G>.49?1:G>.22?2:3];g.push(v.r,v.g,v.b)}for(let x=0;x<r;x++)for(let y=0;y<r;y++){const P=x*(r+1)+y,I=P+1,G=P+r+1,v=G+1;E.push(P,I,v,P,v,G)}m.setIndex(E),m.setAttribute("position",new cn(p,3)),m.setAttribute("color",new ur(g,3)),m.computeVertexNormals();const R=new rt(m,this.material);R.receiveShadow=!0,R.userData.kind="terrain",this.group.add(R),this.tiles.set(s,{data:i,grid:u,mesh:R,segments:r,dx:n,dz:t}),this.reconcileSharedEdges(),this.tileBuildMs+=performance.now()-o,this.tileBuilds++}reconcileSharedEdges(){const n=sp(Array.from(this.tiles.values()));for(const t of n)this.rebuildGeometry(t)}rebuildGeometry(n){const{segments:t,grid:i,dx:r,dz:a}=n,s=this.frame,o=new zn,h=new Float32Array((t+1)**2*3),u=[],m=[];let p=1/0,g=-1/0;for(const d of i)p=Math.min(p,d),g=Math.max(g,d);const E=/moab|grand canyon|sahara|utah|arizona/i.test(this.place?.name??""),A=(E?["#d0b587","#b99360","#977046","#796044"]:["#c9c1a6","#a49c75","#758557","#657355"]).map(d=>new We(d)),M=s.tileOrigin(r,a);for(let d=0;d<=t;d++)for(let l=0;l<=t;l++){const w=d*(t+1)+l,R=i[w],x=(R-p)/Math.max(1,g-p);h[w*3]=M.x+l/t*s.tileSpan,h[w*3+1]=Bt.clamp((R-this.baseline)*1.25,-900,1800),h[w*3+2]=M.z-d/t*s.tileSpan;const y=A[x>.76?0:x>.49?1:x>.22?2:3];u.push(y.r,y.g,y.b)}for(let d=0;d<t;d++)for(let l=0;l<t;l++){const w=d*(t+1)+l,R=w+1,x=w+t+1,y=x+1;m.push(w,R,y,w,y,x)}o.setIndex(m),o.setAttribute("position",new cn(h,3)),o.setAttribute("color",new ur(u,3)),o.computeVertexNormals(),n.mesh.geometry.dispose(),n.mesh.geometry=o}heightAt(n,t){if(!this.frame||!this.tiles.size)return 0;const i=performance.now();let r=this.frame.tileOffsetAt(n,t);(r.dx!==this.coverage.x||r.dz!==this.coverage.z)&&this.ensureRegion(n,t);let a=this.tiles.get(this.key(r.dx,r.dz));if(a||(a=this.tiles.get(this.key(0,0)),r=this.frame.tileOffsetAt(n,t)),!a)return 0;const s=a===this.tiles.get(this.key(r.dx,r.dz))?r.u:Bt.clamp((n-this.frame.tileOrigin(a.dx,a.dz).x)/this.frame.tileSpan,0,1),o=a===this.tiles.get(this.key(r.dx,r.dz))?r.v:Bt.clamp((this.frame.tileOrigin(a.dx,a.dz).z-t)/this.frame.tileSpan,0,1),h=(Wr(a.grid,a.segments,s,o)-this.baseline)*1.25;return this.heightSamples++,this.heightSampleMs+=performance.now()-i,h}takePerformanceSample(){const n={heightSamples:this.heightSamples,heightSampleMs:this.heightSampleMs,tileBuilds:this.tileBuilds,tileBuildMs:this.tileBuildMs};return this.heightSamples=0,this.heightSampleMs=0,this.tileBuilds=0,this.tileBuildMs=0,n}setVisualQuality(n){this.detailQuality=n==="low"?.45:n==="medium"?.72:1,this.activeTerrainShader&&(this.activeTerrainShader.uniforms.uRumbleDetail.value=this.detailQuality)}clear(){this.generation++;for(const n of this.tiles.values())this.group.remove(n.mesh),n.mesh.geometry.dispose();this.tiles.clear(),this.requests.clear(),this.coverage={x:NaN,z:NaN}}dispose(){this.clear(),this.material.dispose()}}function dp(e,n){return e.map(([t,i])=>n.toLocal({lat:t,lon:i}))}const ti=new Map;let qr=0;async function up(e){const n=`${e.lat.toFixed(3)},${e.lon.toFixed(3)}`;if(ti.has(n))return ti.get(n);try{const i=localStorage.getItem(`monster-map-buildings:${n}`);if(i){const r=JSON.parse(i);if(Date.now()-r.time<360*60*1e3&&Array.isArray(r.data))return ti.set(n,Promise.resolve(r.data)),r.data}}catch{}const t=(async()=>{try{const i=Math.max(0,5e3-(Date.now()-qr));i&&await new Promise(p=>setTimeout(p,i)),qr=Date.now();const r=.018,a=.018/Math.max(.3,Math.cos(e.lat*Math.PI/180)),o=`[out:json][timeout:12];(way["building"](${[e.lat-r,e.lon-a,e.lat+r,e.lon+a].join(",")}););out tags geom;`;let h=null;for(const p of["https://overpass.private.coffee/api/interpreter","https://overpass-api.de/api/interpreter"])try{const g=await fetch(p,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"data="+encodeURIComponent(o),signal:AbortSignal.timeout(9e3)});if(g.ok){h=g;break}}catch{}if(!h)throw new Error("Overpass providers unavailable");const m=((await h.json()).elements??[]).filter(p=>p.geometry?.length>=4).slice(0,450).map(p=>({lat:p.center?.lat??p.geometry[0].lat,lon:p.center?.lon??p.geometry[0].lon,tags:p.tags??{},coords:p.geometry.map(g=>[g.lat,g.lon])}));try{localStorage.setItem(`monster-map-buildings:${n}`,JSON.stringify({time:Date.now(),data:m}))}catch{}return m}catch{return[]}})();return ti.set(n,t),t}const fp=new Ct({color:5661034,roughness:.9});class pp{group=new sn;list=[];place=null;loadToken=0;async load(n,t,i,r){this.reset(i);const a=this.loadToken;this.place=n;const s=await up(n);if(a===this.loadToken){for(const o of s){const h=dp(o.coords,r).map(y=>new ht(y.x,y.z)),u=h.map(y=>y.x),m=h.map(y=>y.y),p=(Math.min(...u)+Math.max(...u))/2,g=(Math.min(...m)+Math.max(...m))/2,E=Math.max(4,Math.max(...u)-Math.min(...u)),A=Math.max(4,Math.max(...m)-Math.min(...m)),M=new ta;h.forEach((y,P)=>P?M.lineTo(y.x-p,-(y.y-g)):M.moveTo(y.x-p,-(y.y-g))),M.closePath();const d=new So(M,{depth:1,bevelEnabled:!1});d.rotateX(-Math.PI/2);const l=+(o.tags["building:levels"]??0),w=Math.max(5,+(o.tags.height??0)||l*3.4||8+Math.random()*32);d.scale(1,w,1);const R=new rt(d,fp.clone());R.castShadow=!0,R.receiveShadow=!0,R.userData.kind="building",R.position.x=p,R.position.z=g,R.position.y=t(p,g),this.group.add(R);const x={mesh:R,x:p,z:g,w:E,d:A,h:w,broken:!1};this.list.push(x),i?.addBuilding(x,t(p,g))}this.list.length||this.addBarriers(t,i)}}addBarriers(n,t){const i=new Ct({color:13132085,roughness:.8});for(let r=0;r<4;r++)for(let a=-2;a<=2;a++){if((r+a)%3===0)continue;const s=3+(r*7+a*11+30)%3,o=3,h=2.5+(r*13+a*5+40)%3,u=a*5,m=28+r*9,p=new rt(new hn(s,h,o),i.clone());p.position.set(u,n(u,m)+h/2,m),p.castShadow=!0,p.receiveShadow=!0,p.userData.kind="destructible-barrier",this.group.add(p);const g={mesh:p,x:u,z:m,w:s,d:o,h,broken:!1};this.list.push(g),t?.addBuilding(g,n(u,m))}}collide(n,t,i){return this.list.find(r=>!r.broken&&Math.abs(n-r.x)<r.w/2+i&&Math.abs(t-r.z)<r.d/2+i&&Math.random()<.08)}break(n){n.broken=!0,this.group.remove(n.mesh)}reset(n){this.loadToken++;for(const t of this.list)this.group.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),n?.removeBuilding(t);this.list=[],this.place=null}}const wn=new ae;function Rt(e,n,t,i,r,a){const s=2*Math.PI*r/4,o=Math.max(a-2*r,0),h=Math.PI/4;wn.copy(n),wn[i]=0,wn.normalize();const u=.5*s/(s+o),m=1-wn.angleTo(e)/h;return Math.sign(wn[t])===1?m*u:o/(s+o)+u+u*(1-m)}class fa extends hn{constructor(n=1,t=1,i=1,r=2,a=.1){const s=r*2+1;if(a=Math.min(n/2,t/2,i/2,a),super(1,1,1,s,s,s),this.type="RoundedBoxGeometry",this.parameters={width:n,height:t,depth:i,segments:r,radius:a},s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const h=new ae,u=new ae,m=new ae(n,t,i).divideScalar(2).subScalar(a),p=this.attributes.position.array,g=this.attributes.normal.array,E=this.attributes.uv.array,A=p.length/6,M=new ae,d=.5/s;for(let l=0,w=0;l<p.length;l+=3,w+=2)switch(h.fromArray(p,l),u.copy(h),u.x-=Math.sign(u.x)*d,u.y-=Math.sign(u.y)*d,u.z-=Math.sign(u.z)*d,u.normalize(),p[l+0]=m.x*Math.sign(h.x)+u.x*a,p[l+1]=m.y*Math.sign(h.y)+u.y*a,p[l+2]=m.z*Math.sign(h.z)+u.z*a,g[l+0]=u.x,g[l+1]=u.y,g[l+2]=u.z,Math.floor(l/A)){case 0:M.set(1,0,0),E[w+0]=Rt(M,u,"z","y",a,i),E[w+1]=1-Rt(M,u,"y","z",a,t);break;case 1:M.set(-1,0,0),E[w+0]=1-Rt(M,u,"z","y",a,i),E[w+1]=1-Rt(M,u,"y","z",a,t);break;case 2:M.set(0,1,0),E[w+0]=1-Rt(M,u,"x","z",a,n),E[w+1]=Rt(M,u,"z","x",a,i);break;case 3:M.set(0,-1,0),E[w+0]=1-Rt(M,u,"x","z",a,n),E[w+1]=1-Rt(M,u,"z","x",a,i);break;case 4:M.set(0,0,1),E[w+0]=1-Rt(M,u,"x","y",a,n),E[w+1]=1-Rt(M,u,"y","x",a,t);break;case 5:M.set(0,0,-1),E[w+0]=Rt(M,u,"x","y",a,n),E[w+1]=1-Rt(M,u,"y","x",a,t);break}}static fromJSON(n){return new fa(n.width,n.height,n.depth,n.segments,n.radius)}}function Cn(e,n=!1){const t=e[0].index!==null,i=new Set(Object.keys(e[0].attributes)),r=new Set(Object.keys(e[0].morphAttributes)),a={},s={},o=e[0].morphTargetsRelative,h=new zn;let u=0;for(let m=0;m<e.length;++m){const p=e[m];let g=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const E in p.attributes){if(!i.has(E))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+'. All geometries must have compatible attributes; make sure "'+E+'" attribute exists among all geometries, or in none of them.'),null;a[E]===void 0&&(a[E]=[]),a[E].push(p.attributes[E]),g++}if(g!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const E in p.morphAttributes){if(!r.has(E))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+".  .morphAttributes must be consistent throughout all geometries."),null;s[E]===void 0&&(s[E]=[]),s[E].push(p.morphAttributes[E])}if(n){let E;if(t)E=p.index.count;else if(p.attributes.position!==void 0)E=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". The geometry must have either an index or a position attribute"),null;h.addGroup(u,E,m),u+=E}}if(t){let m=0;const p=[];for(let g=0;g<e.length;++g){const E=e[g].index;for(let A=0;A<E.count;++A)p.push(E.getX(A)+m);m+=e[g].attributes.position.count}h.setIndex(p)}for(const m in a){const p=Yr(a[m]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+m+" attribute."),null;h.setAttribute(m,p)}for(const m in s){const p=s[m][0].length;if(p===0)break;h.morphAttributes=h.morphAttributes||{},h.morphAttributes[m]=[];for(let g=0;g<p;++g){const E=[];for(let M=0;M<s[m].length;++M)E.push(s[m][M][g]);const A=Yr(E);if(!A)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+m+" morphAttribute."),null;h.morphAttributes[m].push(A)}}return h}function Yr(e){let n,t,i,r=-1,a=0;for(let u=0;u<e.length;++u){const m=e[u];if(n===void 0&&(n=m.array.constructor),n!==m.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=m.itemSize),t!==m.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=m.normalized),i!==m.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=m.gpuType),r!==m.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=m.count*t}const s=new n(a),o=new cn(s,t,i);let h=0;for(let u=0;u<e.length;++u){const m=e[u];if(m.isInterleavedBufferAttribute){const p=h/t;for(let g=0,E=m.count;g<E;g++)for(let A=0;A<t;A++){const M=m.getComponent(g,A);o.setComponent(g+p,A,M)}}else s.set(m.array,h);h+=m.count*t}return r!==void 0&&(o.gpuType=r),o}const Kr=["front-left","front-right","rear-left","rear-right"],$r=[{x:-1.22,z:1.22},{x:1.22,z:1.22},{x:-1.22,z:-1.25},{x:1.22,z:-1.25}];class hp{root=new sn;wheels=[];frontWheels=[];suspension=[];body;opts;model=new sn;materials;parts={paint:[],dark:[],chrome:[],glass:[],tire:[],light:[]};wheelSprings;wheelShocks;shockRods;axleLinks;workMatrix=new Vt;workQuaternion=new Wt;workPosition=new ae;workScale=new ae;constructor(n={color:"#d84924",scale:1}){this.opts=n,this.root.scale.setScalar(n.scale),this.model.position.y=-1.65,this.root.add(this.model),this.body=new sn,this.model.add(this.body),this.makeMaterials(),this.buildChassisAndBody(),this.buildWheels(),this.finishBodyBatches()}makeMaterials(){this.materials={paint:new fr({color:this.opts.color,metalness:.43,roughness:.29,clearcoat:.62,clearcoatRoughness:.2}),dark:new Ct({color:1382939,metalness:.28,roughness:.68}),chrome:new Ct({color:12041920,metalness:.78,roughness:.24}),glass:new fr({color:8636379,metalness:.12,roughness:.15,transparent:!0,opacity:.72,clearcoat:.9,side:Ut,depthWrite:!1}),tire:new Ct({color:1053204,roughness:.94}),light:new Ct({color:16770464,emissive:16754230,emissiveIntensity:1.15,roughness:.2})}}boxGeometry(n,t,i,r,a,s,o=.025,h){const u=new fa(n,t,i,2,Math.min(o,n*.24,t*.24,i*.24)),m=h?new Wt().setFromEuler(h):new Wt;return u.applyMatrix4(new Vt().compose(new ae(r,a,s),m,new ae(1,1,1))),u}addBox(n,t,i,r,a,s,o,h=.025,u){this.parts[n].push(this.boxGeometry(t,i,r,a,s,o,h,u))}addSideShape(n,t,i,r=.045){const a=new So(n,{depth:r,bevelEnabled:!1,curveSegments:8});a.rotateY(t<0?-Math.PI/2:Math.PI/2),a.translate(t*1.11,0,0),this.parts[i].push(a)}profileShape(){const n=new ta;return n.moveTo(-2.02,1.28),n.lineTo(-2.02,1.78),n.lineTo(-1.53,1.86),n.lineTo(-1.34,2.77),n.lineTo(-.91,3.04),n.lineTo(.29,3.04),n.lineTo(.65,2.14),n.lineTo(1.2,1.98),n.lineTo(2.03,1.77),n.lineTo(2.03,1.2),n.quadraticCurveTo(1.22,2.16,.38,1.2),n.lineTo(-.4,1.2),n.quadraticCurveTo(-1.25,2.16,-2.08,1.2),n.lineTo(-2.02,1.28),n.closePath(),n}sideWindow(n,t,i,r){const a=new ta;return a.moveTo(n,t),a.lineTo(n+.12,r),a.lineTo(i-.1,r),a.lineTo(i,t),a.closePath(),a}buildChassisAndBody(){this.addBox("dark",1.75,.22,3.55,0,1.3,-.02,.055);for(const o of[-.9,.9])this.addBox("dark",.17,.2,3.7,o,1.23,-.02,.045);for(const o of[-1.38,-.2,1.16])this.addBox("chrome",2,.11,.13,0,1.21,o,.025);this.addBox("dark",1.2,.08,.95,0,1.14,.1,.025),this.addBox("paint",2.12,.46,1.27,0,1.76,1.15,.09),this.addBox("paint",1.93,.16,1.48,0,3,-.34,.065),this.addBox("paint",1.78,.96,1.24,0,2.43,-.36,.08);const n=this.profileShape();for(const o of[-1,1])this.addSideShape(n,o,"paint",.055),this.addSideShape(this.sideWindow(-1.19,2.32,-.53,2.8),o,"glass",.018),this.addSideShape(this.sideWindow(-.43,2.32,.16,2.8),o,"glass",.018),this.addBox("chrome",.035,.045,.76,o*1.17,2.2,-.17,.012),this.addBox("chrome",.04,.035,.19,o*1.18,2.05,-.24,.01),this.addBox("dark",.075,.22,1.05,o*1.12,1.31,-.05,.026);this.addBox("glass",1.56,.68,.045,0,2.56,.48,.012,new Nn(-.48,0,0)),this.addBox("glass",1.48,.52,.04,0,2.55,-1.02,.012,new Nn(.18,0,0)),this.addBox("chrome",1.75,.055,.12,0,3.08,-.34,.02),this.addBox("dark",1.4,.08,.95,0,1.64,-1.42,.02);for(const o of[-.76,.76])this.addBox("paint",.12,.34,1.02,o,1.79,-1.4,.035);this.addBox("paint",1.48,.38,.13,0,1.77,-1.93,.035);for(let o=0;o<5;o++)this.addBox("chrome",1.25,.018,.024,0,1.69,-1.78+o*.18,.004);this.addBox("chrome",2.22,.2,.22,0,1.47,1.96,.045),this.addBox("dark",1.16,.38,.055,0,1.83,1.94,.012),this.addBox("chrome",1.28,.045,.07,0,2.05,1.95,.012),this.addBox("chrome",1.28,.045,.07,0,1.61,1.95,.012);for(let o=0;o<9;o++)this.addBox("dark",.025,.34,.035,-.5+o*.125,1.83,1.98,.008);this.addBox("dark",.22,.11,.07,0,1.72,2.01,.012),this.addBox("chrome",2.12,.14,.2,0,1.52,-2,.035),this.addBox("chrome",1.95,.055,.14,0,1.68,-2,.015);for(const o of[-.82,.82])this.addBox("dark",.48,.29,.09,o,1.94,1.93,.035),this.addBox("light",.34,.19,.045,o,1.95,1.99,.035),this.addBox("light",.14,.08,.035,o,1.72,2,.018),this.addBox("dark",.18,.08,.04,o,1.52,-2.11,.018);for(const o of[-.69,.69])this.addBox("paint",.08,.055,.83,o,2.02,1.13,.025),this.addBox("chrome",.035,.025,.63,o*1.7,1.9,-.36,.01);for(const o of[-1.1,.46])this.addBox("dark",.05,.86,.06,0,2.51,o,.018);for(let o=-2;o<=2;o++)this.addBox("light",.14,.13,.08,o*.36,3.14,-.25,.06);const t=[];for(const o of[-1.17,1.17])for(const h of[-1.25,1.22]){const u=new sl(new ae(o,1.26,h-.91),new ae(o,2.14,h),new ae(o,1.26,h+.91));t.push(new Pi(u,20,.06,7,!1))}const i=Cn(t,!1);t.forEach(o=>o.dispose()),this.body.add(new rt(i,this.materials.dark));const a=[-1,1].map(o=>new pr([new ae(o*.86,1.65,-1.82),new ae(o*.86,2.85,-1.55),new ae(o*.86,3.2,-.9),new ae(o*.86,3.2,.05),new ae(o*.82,2.2,.98)])).map(o=>new Pi(o,24,.035,7,!1)),s=Cn(a,!1);a.forEach(o=>o.dispose()),this.body.add(new rt(s,this.materials.chrome));for(const o of[-1.25,1.22])this.addBox("dark",1.82,.12,.16,0,1.43,o,.025),this.addBox("chrome",1.22,.055,.07,0,1.56,o,.018)}finishBodyBatches(){for(const n of Object.keys(this.parts)){const t=this.parts[n];if(!t.length)continue;const i=Cn(t,!1);if(t.forEach(a=>a.dispose()),!i)continue;const r=new rt(i,this.materials[n]);r.castShadow=!0,r.receiveShadow=!0,r.frustumCulled=!0,this.body.add(r)}this.parts={paint:[],dark:[],chrome:[],glass:[],tire:[],light:[]}}cylinderGeometry(n,t,i=24){const r=new hr(n,n,t,i,1,!1);return r.rotateZ(Math.PI/2),r}buildWheels(){const n=new Ct({color:2698543,roughness:.9}),t=[],i=[],r=new hr(.82,.82,.61,36,1,!1);r.rotateZ(Math.PI/2),t.push(r);for(const A of[-.29,.29]){const M=new mr(.63,.12,8,36);M.rotateY(Math.PI/2),M.translate(A,0,0),t.push(M);const d=this.cylinderGeometry(.455,.045,28);d.translate(A*1.04,0,0),i.push(d);const l=new mr(.405,.025,8,32);l.rotateY(Math.PI/2),l.translate(A*1.04,0,0),i.push(l);const w=this.cylinderGeometry(.16,.075,18);w.translate(A*1.1,0,0),i.push(w);for(let R=0;R<6;R++){const x=R*Math.PI/3,y=new hn(.065,.07,.29);y.applyMatrix4(new Vt().compose(new ae(A*1.08,Math.cos(x)*.25,Math.sin(x)*.25),new Wt().setFromEuler(new Nn(x,0,0)),new ae(1,1,1))),i.push(y)}}const a=Cn(t,!1);t.forEach(A=>A.dispose());const s=Cn(i,!1);i.forEach(A=>A.dispose());const o=this.cylinderGeometry(.13,3.1,12),h=new Ct({color:3422779,metalness:.55,roughness:.48}),u=new nn(o,h,2);u.castShadow=!0;const m=new Wt().setFromAxisAngle(new ae(0,0,1),Math.PI/2);[-1.25,1.22].forEach((A,M)=>{this.workMatrix.compose(new ae(0,.91,A),m,new ae(1,1,1)),u.setMatrixAt(M,this.workMatrix)}),u.instanceMatrix.needsUpdate=!0,this.model.add(u);const p=[];for(let A=0;A<=96;A++){const M=A/96,d=M*Math.PI*2*8;p.push(new ae(Math.cos(d)*.11,M-.5,Math.sin(d)*.11))}const g=new Pi(new pr(p),128,.025,5,!1),E=new Ct({color:13817555,metalness:.78,roughness:.32});this.wheelSprings=new nn(g,E,4),this.wheelSprings.castShadow=!0,this.wheelShocks=new nn(this.cylinderGeometry(.072,.68,10),h,4),this.wheelShocks.castShadow=!0,this.shockRods=new nn(this.cylinderGeometry(.025,.62,8),this.materials.chrome,4),this.shockRods.castShadow=!0,this.model.add(this.wheelSprings,this.wheelShocks,this.shockRods);for(let A=0;A<4;A++){const M=$r[A],d=Kr[A],l=new sn;l.position.set(M.x,.92,M.z),l.userData.wheelId=d,this.model.add(l),this.wheels.push(l),A<2&&this.frontWheels.push(l);const w=new rt(a,this.materials.tire);w.castShadow=!0,w.receiveShadow=!0,l.add(w);const R=new rt(s,this.materials.chrome);R.castShadow=!0,l.add(R);const x=new hn(.32,.15,.27),y=new nn(x,n,32);y.castShadow=!0,y.receiveShadow=!0;let P=0;for(let I=0;I<2;I++)for(let G=0;G<16;G++){const v=G*Math.PI/8+I*Math.PI/16,_=new Wt().setFromAxisAngle(new ae(1,0,0),v+Math.PI/2);this.workMatrix.compose(new ae(I?.16:-.16,Math.sin(v)*.81,Math.cos(v)*.81),_,new ae(1,1,1)),y.setMatrixAt(P++,this.workMatrix)}y.instanceMatrix.needsUpdate=!0,l.add(y)}this.axleLinks=new nn(this.cylinderGeometry(.055,1,10),h,4),this.axleLinks.castShadow=!0,this.model.add(this.axleLinks),this.updateWheelContacts(Kr.map((A,M)=>({id:A,x:0,z:0,height:0,contact:!0,compression:.12,extension:0,travel:.55,compressionVelocity:0,compressionDamping:0,reboundDamping:0})),1)}updateWheelContacts(n,t){for(let i=0;i<this.wheels.length;i++){const r=this.wheels[i],a=n.find(p=>p.id===r.userData.wheelId);if(!a)continue;r.position.y=.92+a.compression/t+a.extension/t;const s=$r[i],o=a.compression/t,h=a.extension/t;this.workPosition.set(s.x*.78,1.05+h*.35-o*.2,s.z),this.workQuaternion.identity(),this.workScale.set(1,Math.max(.5,.72+h-o*.35),1),this.workMatrix.compose(this.workPosition,this.workQuaternion,this.workScale),this.wheelSprings.setMatrixAt(i,this.workMatrix),this.workPosition.y=.99+h*.32-o*.12,this.workScale.set(1,.68+h*.45-o*.2,1),this.workMatrix.compose(this.workPosition,this.workQuaternion,this.workScale),this.wheelShocks.setMatrixAt(i,this.workMatrix),this.workPosition.y=1.13+h*.3-o*.1,this.workScale.set(1,.61+h*.25-o*.1,1),this.workMatrix.compose(this.workPosition,this.workQuaternion,this.workScale),this.shockRods.setMatrixAt(i,this.workMatrix);const u=new Wt().setFromAxisAngle(new ae(0,0,1),Math.PI/2),m=Math.abs(s.x)*.9;this.workPosition.set(s.x*.54,.89+o*.35,s.z),this.workScale.set(1,m,1),this.workMatrix.compose(this.workPosition,u,this.workScale),this.axleLinks.setMatrixAt(i,this.workMatrix)}this.wheelSprings.instanceMatrix.needsUpdate=!0,this.wheelShocks.instanceMatrix.needsUpdate=!0,this.shockRods.instanceMatrix.needsUpdate=!0,this.axleLinks.instanceMatrix.needsUpdate=!0}setColor(n){this.opts.color=n,this.materials.paint.color.set(n)}}function pa(e,n=new ae){return n.set(Math.sin(e),0,Math.cos(e))}function ha(e,n=new ae){return n.set(Math.cos(e),0,-Math.sin(e))}const aa=(e,n,t)=>Math.max(n,Math.min(t,e)),mp=[{id:"front-left",x:-1.22,z:1.22},{id:"front-right",x:1.22,z:1.22},{id:"rear-left",x:-1.22,z:-1.25},{id:"rear-right",x:1.22,z:-1.25}];function Bi(e,n,t,i,r=24){const a=Math.cos(n),s=Math.sin(n),o=.55*t,h=.36*t;return mp.map(u=>{const m=e.x+u.x*a+u.z*s,p=e.z-u.x*s+u.z*a,g=i(m,p),E=g+1.65*t+.12*t,A=E-e.y,M=2*Math.sqrt(r/(.12*t));return{id:u.id,x:m,z:p,height:g,travel:o,compression:aa(A,0,o),extension:aa(-A,0,h),contact:A>=-h&&A<=o,compressionVelocity:0,compressionDamping:M*.82,reboundDamping:M*.62}})}function _p(e,n,t,i){const r=t/(.12*i);let a=0;for(const s of e){if(s.compression<=0)continue;const o=Math.max(0,s.compression-s.travel+.08*i),h=r*(s.compression+o*2.5),u=aa(s.compressionVelocity,-12,12),m=u>=0?s.compressionDamping:s.reboundDamping,p=(n>=0?s.reboundDamping:s.compressionDamping)*n*.24;a+=Math.max(0,h+m*u-p)}return a/e.length-t}function gp(e){const n=(e[0].height+e[1].height)/2,t=(e[2].height+e[3].height)/2,i=(e[0].height+e[2].height)/2,r=(e[1].height+e[3].height)/2;return{pitch:-Math.atan2(n-t,2.47),roll:Math.atan2(r-i,2.44)}}const Gi=Math.PI*2,ni=e=>e*Math.PI/180;function Xn(e,n){return Math.atan2(Math.sin(n-e),Math.cos(n-e))}function ii(e){return Math.abs(Xn(e,0))}function Zr(e,n,t=5.2){const i=1-Math.exp(-t*Math.max(0,n));return e+Xn(e,0)*i}class vp{airborne=!1;lastPitch=0;lastRoll=0;pitchProgress=0;rollProgress=0;pendingForwardFlips=0;pendingBackwardFlips=0;pendingRolls=0;flightTime=0;currentPoints=0;bestScore;constructor(n=0){this.bestScore=Math.max(0,Math.floor(n)||0)}update(n){if(!n.grounded){this.airborne?(this.flightTime=Math.max(this.flightTime,n.airtime),this.recordFlipRotation(this.advanceRotation("pitch",n.pitch)),this.pendingRolls+=Math.abs(this.advanceRotation("roll",n.roll))):this.beginFlight(n);const A=this.pendingForwardFlips+this.pendingBackwardFlips,M=A+this.pendingRolls;return this.currentPoints=Math.round(this.flightTime*80)+this.pendingRolls*500+A*600+Math.max(0,M-1)*150,null}if(!this.airborne)return null;this.flightTime=Math.max(this.flightTime,n.airtime),this.recordFlipRotation(this.advanceRotation("pitch",n.pitch)),this.pendingRolls+=Math.abs(this.advanceRotation("roll",n.roll));const t=ii(n.pitch)<ni(65)&&ii(n.roll)<ni(65),i=n.landingSpeed<=22&&t&&this.flightTime>=.45,r=this.pendingForwardFlips,a=this.pendingBackwardFlips,s=r+a,o=this.pendingRolls,h=this.flightTime;if(this.airborne=!1,!i)return this.clearFlight(),null;const u=s+o,m=n.landingSpeed<=5&&ii(n.pitch)<ni(18)&&ii(n.roll)<ni(18),p=m?300:100,g=Math.round(h*80)+o*500+s*600+Math.max(0,u-1)*150+p;this.currentPoints=g,this.bestScore=Math.max(this.bestScore,g);const E=o>=2?"DOUBLE ROLL":o===1?"BARREL ROLL":s>=2?"DOUBLE FLIP":r?"FRONT FLIP":a?"BACKFLIP":h>=1.25?m?"BIG AIR · PERFECT LANDING":"BIG AIR":m?"PERFECT LANDING":"NICE LANDING";return this.clearFlight(!1),{points:g,rolls:o,flips:s,forwardFlips:r,backwardFlips:a,airtime:h,perfect:m,message:E}}reset(){this.airborne=!1,this.clearFlight()}get isAirborne(){return this.airborne}get rolls(){return this.pendingRolls}get flips(){return this.pendingForwardFlips+this.pendingBackwardFlips}get airtime(){return this.flightTime}beginFlight(n){this.clearFlight(),this.airborne=!0,this.lastPitch=n.pitch,this.lastRoll=n.roll,this.flightTime=n.airtime}advanceRotation(n,t){const i=n==="pitch"?this.lastPitch:this.lastRoll,a=(n==="pitch"?this.pitchProgress:this.rollProgress)+Xn(i,t);n==="pitch"?(this.lastPitch=t,this.pitchProgress=a):(this.lastRoll=t,this.rollProgress=a);const s=Math.trunc(a/Gi);return s&&(n==="pitch"?this.pitchProgress-=s*Gi:this.rollProgress-=s*Gi),s}recordFlipRotation(n){n>0?this.pendingForwardFlips+=n:this.pendingBackwardFlips+=-n}clearFlight(n=!0){this.pitchProgress=0,this.rollProgress=0,this.pendingForwardFlips=0,this.pendingBackwardFlips=0,this.pendingRolls=0,this.flightTime=0,n&&(this.currentPoints=0)}}class Sp{pos=new ae(0,0,0);vel=new ae;yaw=0;pitch=0;roll=0;grounded=!0;nitro=100;airTime=0;speed=0;gravity=24;jumpForce=15;jumpWas=!1;previousCompression=new Map;contactPitch=0;contactRoll=0;wheelContacts=[];reset(n,t=1){this.pos.set(0,n.heightAt(0,0)+1.65*t,0),this.vel.set(0,0,0),this.yaw=0,this.pitch=0,this.roll=0,this.grounded=!0,this.nitro=100,this.airTime=0,this.contactPitch=0,this.contactRoll=0,this.wheelContacts=Bi(this.pos,this.yaw,t,(i,r)=>n.heightAt(i,r),this.gravity),this.previousCompression=new Map(this.wheelContacts.map(i=>[i.id,i.compression]))}update(n,t,i,r,a){this.gravity=a.gravity,this.jumpForce=a.jump,n=Math.min(n,.04);const s=Math.max(1,Math.ceil(n*120)),o=n/s;for(let h=0;h<s;h++)this.step(o,t,i,a);r.root.position.copy(this.pos),r.root.rotation.order="YXZ",r.root.rotation.set(this.pitch+this.contactPitch,this.yaw,this.roll+this.contactRoll),r.updateWheelContacts(this.wheelContacts,a.scale),r.wheels.forEach(h=>{h.rotation.x-=this.speed*n}),r.frontWheels.forEach(h=>{h.rotation.y=-t.steer*.28})}step(n,t,i,r){const a=r.scale,s=pa(this.yaw),o=30*(t.nitro&&this.nitro>0?1.7:1),h=26*(t.nitro&&this.nitro>0?1.5:1);t.throttle&&this.vel.addScaledVector(s,t.throttle*h*n);const u=new ae(this.vel.x,0,this.vel.z);if(this.speed=u.length(),t.nitro&&this.nitro>0?this.nitro=Math.max(0,this.nitro-22*n):this.nitro=Math.min(100,this.nitro+8*n),t.handbrake?u.multiplyScalar(Math.max(0,1-3*n)):u.multiplyScalar(Math.max(0,1-(this.grounded?1.05:.1)*n)),this.speed>o&&u.setLength(o),this.speed>.4){const M=(this.grounded?1.8:1.05)*(.25+Math.min(1,this.speed/12)),d=Math.sign(u.dot(s))||Math.sign(t.throttle);this.yaw-=t.steer*M*n*d;const l=ha(this.yaw),w=u.dot(l);u.addScaledVector(l,-w*(this.grounded?.72:.01))}this.vel.x=u.x,this.vel.z=u.z,t.jump&&!this.jumpWas&&this.grounded&&(this.vel.y=this.jumpForce,this.grounded=!1),this.jumpWas=t.jump,this.wheelContacts=Bi(this.pos,this.yaw,a,(M,d)=>i.heightAt(M,d),this.gravity);for(const M of this.wheelContacts){const d=this.previousCompression.get(M.id)??M.compression;M.compressionVelocity=(M.compression-d)/Math.max(n,1/240)}this.grounded||(t.level?(this.pitch=Zr(this.pitch,n),this.roll=Zr(this.roll,n)):(this.pitch+=t.airPitch*5.4*n,this.roll+=t.airRoll*6.2*n),this.airTime+=n),this.vel.y+=_p(this.wheelContacts,this.vel.y,this.gravity,a)*n;const m=this.pos.y;this.pos.addScaledVector(this.vel,n),this.wheelContacts=Bi(this.pos,this.yaw,a,(M,d)=>i.heightAt(M,d),this.gravity);for(const M of this.wheelContacts)this.previousCompression.set(M.id,M.compression);const p=this.wheelContacts.filter(M=>M.contact&&M.compression>.015*a).length,g=Math.max(...this.wheelContacts.map(M=>M.height))+1.17*a;if(this.pos.y<g&&this.vel.y<0&&(!this.grounded&&this.vel.y<-3&&(this.pitch*=.35,this.roll*=.35,this.vel.y=Math.max(0,-this.vel.y*.12)),this.pos.y=g),this.grounded=this.vel.y<=.75&&p>=2,this.grounded){this.vel.y=Math.max(0,this.vel.y),this.airTime=0;const M=Math.exp(-4*n);this.pitch=Xn(0,this.pitch)*M,this.roll=Xn(0,this.roll)*M}const E=gp(this.wheelContacts),A=this.grounded?Math.min(1,n*9):Math.min(1,n*2);this.contactPitch=Bt.lerp(this.contactPitch,this.grounded?E.pitch:0,A),this.contactRoll=Bt.lerp(this.contactRoll,this.grounded?E.roll:0,A),Number.isFinite(this.pos.y)||(this.pos.y=m)}}function ra(e){if(!e||typeof e!="object"||!("closest"in e))return!1;const n=e;return typeof n.closest=="function"&&n.closest('input,textarea,select,[contenteditable]:not([contenteditable="false"])')!==null}class Ep{pressed=new Set;actions=new Map;pointerDown(n,t){this.pointerUp(n),this.actions.set(n,t),this.pressed.add(t)}pointerUp(n){const t=this.actions.get(n);t!==void 0&&(this.actions.delete(n),[...this.actions.values()].includes(t)||this.pressed.delete(t))}pointerCancel(n){this.pointerUp(n)}lostPointerCapture(n){this.pointerUp(n)}releaseAll(){this.actions.clear(),this.pressed.clear()}}function Mp(e,n){const t=(...i)=>i.some(r=>e.has(r)||n.has(r));return Number(t("d","arrowright"))-Number(t("a","arrowleft"))}class xp{keys=new Set;pointerButtons=new Ep;state={throttle:0,steer:0,nitro:!1,jump:!1,level:!1,airPitch:0,airRoll:0,handbrake:!1};get touches(){return this.pointerButtons.pressed}constructor(){window.addEventListener("focusin",n=>{ra(n.target)&&this.releaseAll()}),window.addEventListener("keydown",n=>{if(ra(n.target)){this.releaseAll();return}[" ","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n.key)&&n.preventDefault(),this.keys.add(n.key.toLowerCase())}),window.addEventListener("keyup",n=>this.keys.delete(n.key.toLowerCase())),window.addEventListener("blur",()=>this.releaseAll())}pointerDown(n,t){this.pointerButtons.pointerDown(n,t)}pointerUp(n){this.pointerButtons.pointerUp(n)}pointerCancel(n){this.pointerButtons.pointerCancel(n)}lostPointerCapture(n){this.pointerButtons.lostPointerCapture(n)}releaseAll(){this.keys.clear(),this.pointerButtons.releaseAll(),this.state={throttle:0,steer:0,nitro:!1,jump:!1,level:!1,airPitch:0,airRoll:0,handbrake:!1}}update(){const n=(...p)=>p.some(g=>this.keys.has(g)||this.touches.has(g)),t=Array.from(navigator.getGamepads?.()??[]).find(p=>p?.connected),i=t?.axes??[],r=p=>t?.buttons[p]?.value??0,a=(n("w","arrowup")?1:0)-(n("s","arrowdown")?1:0),s=r(7)-r(6)||-Math.sign(Math.abs(i[1]??0)>.18?i[1]:0),o=Mp(this.keys,this.touches),h=Math.abs(i[0]??0)>.16?i[0]:0,u=(n("arrowup")?1:0)-(n("arrowdown")?1:0),m=(n("e","arrowright")?1:0)-(n("q","arrowleft")?1:0);return this.state={throttle:a||s,steer:o||h,nitro:n("shift","nitro")||r(1)>.4,jump:n(" ","jump")||r(0)>.4,level:n("f","level")||r(3)>.4,airPitch:u||(Math.abs(i[3]??0)>.18?-Math.sign(i[3]):0),airRoll:m||(Math.abs(i[2]??0)>.18?Math.sign(i[2]):0),handbrake:n("control")||r(2)>.4},this.state}}const Pn=96,Hi=160;class Tp{group=new sn;dustMesh;burstMesh;particles=[];active=[];freeDust=[];freeBurst=[];activeCount=0;rng=7886388;matrix=new Vt;quat=new Wt;scaleVector=new ae;color=new We;quality=1;constructor(){const n=new Eo(.5,6,5);this.dustMesh=this.makeBatch(n.clone(),Pn,13875854),this.burstMesh=this.makeBatch(n.clone(),Hi,16777215),n.dispose(),this.dustMesh.name="dust-particle-batch",this.burstMesh.name="impact-particle-batch",this.dustMesh.count=this.burstMesh.count=0,this.group.add(this.dustMesh,this.burstMesh);for(let t=0;t<Pn+Hi;t++)this.particles.push({kind:"dust",life:0,max:1,position:new ae,velocity:new ae,scale:1,color:16777215}),this.active.push(0);for(let t=Pn-1;t>=0;t--)this.freeDust.push(t);for(let t=Pn+Hi-1;t>=Pn;t--)this.freeBurst.push(t)}makeBatch(n,t,i){const r=new go({color:i,vertexColors:!0,transparent:!0,depthWrite:!1});r.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute float instanceAlpha;
varying float vParticleAlpha;`),s.vertexShader=s.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vParticleAlpha = instanceAlpha;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying float vParticleAlpha;`),s.fragmentShader=s.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a *= vParticleAlpha;`)},r.customProgramCacheKey=()=>"rumble-particle-alpha-v1";const a=new ll(new Float32Array(t),1);return a.setUsage(cl),n.setAttribute("instanceAlpha",a),new nn(n,r,t)}rand(){return this.rng=this.rng*1664525+1013904223>>>0,this.rng/4294967296}burst(n,t=18,i=16758605){t=Math.max(1,Math.round(t*this.quality));for(let r=0;r<t;r++){const a=this.freeBurst.pop();if(a===void 0)break;const s=this.particles[a];s.kind="burst",s.life=.45+this.rand()*.8,s.max=.9,s.scale=.16+this.rand()*.26,s.color=i,s.position.copy(n),s.velocity.set((this.rand()-.5)*8,1+this.rand()*7,(this.rand()-.5)*8),this.active[this.activeCount++]=a}}dust(n,t){if(t<4||this.rand()>.27*this.quality)return;const i=this.freeDust.pop();if(i===void 0)return;const r=this.particles[i];r.kind="dust",r.life=r.max=.65,r.scale=.36+this.rand()*.3,r.color=13875854,r.position.copy(n),r.velocity.set(this.rand()-.5,.4+this.rand(),this.rand()-.5),this.active[this.activeCount++]=i}update(n){let t=0,i=0,r=0;for(let a=0;a<this.activeCount;a++){const s=this.active[a],o=this.particles[s];if(o.life-=n,o.life<=0){(o.kind==="dust"?this.freeDust:this.freeBurst).push(s);continue}o.position.addScaledVector(o.velocity,n),o.scale*=1+n*.55;const h=Math.max(0,o.life/o.max*(o.kind==="dust"?.34:.9)),u=o.kind==="dust"?this.dustMesh:this.burstMesh,m=o.kind==="dust"?i++:r++;this.scaleVector.setScalar(o.scale*(o.life/o.max)),this.matrix.compose(o.position,this.quat,this.scaleVector),u.setMatrixAt(m,this.matrix),this.color.setHex(o.color),u.setColorAt(m,this.color),u.geometry.getAttribute("instanceAlpha").setX(m,h),this.active[t++]=s}this.activeCount=t,this.dustMesh.count=i,this.burstMesh.count=r,i&&(this.dustMesh.instanceMatrix.needsUpdate=!0,this.dustMesh.instanceColor.needsUpdate=!0,this.dustMesh.geometry.getAttribute("instanceAlpha").needsUpdate=!0),r&&(this.burstMesh.instanceMatrix.needsUpdate=!0,this.burstMesh.instanceColor.needsUpdate=!0,this.burstMesh.geometry.getAttribute("instanceAlpha").needsUpdate=!0)}get activeParticles(){return this.activeCount}setQuality(n){this.quality=n==="low"?.46:n==="medium"?.72:1}dispose(){this.group.clear();for(const n of[this.dustMesh,this.burstMesh])n.geometry.dispose(),n.material.dispose()}}const ln=(e,n,t)=>Math.max(n,Math.min(t,e));function Ap(e,n,t){const i=ln(.2+ln(e/32,0,1)*.67+ln(n,0,1)*.16+(t?.18:0),.2,1.2),r=62+i*112;return{rpm:i,fundamentalHz:r,engineGain:.075+i*.035+ln(n,0,1)*.025,harmonicHz:r*2.4,nitroHz:260+i*390}}function Ln(e){return ln(Number.isFinite(e)?e:0,0,1)}class bp{ctx=null;master=null;compressor=null;analyser=null;meterBuffer=null;engineOsc=null;engineHarmonic=null;engineGain=null;harmonicGain=null;nitroOsc=null;nitroGain=null;skidNoise=null;skidGain=null;noiseBuffer=null;volume=.62;muted=!1;failed=!1;start(){try{this.ctx||this.createGraph(),this.ctx?.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.applyMaster()}catch{this.failed=!0}}createGraph(){const n=window,t=window.AudioContext??n.webkitAudioContext;if(!t){this.failed=!0;return}const i=new t;this.ctx=i,this.master=i.createGain(),this.master.gain.value=0,this.compressor=i.createDynamicsCompressor(),this.compressor.threshold.value=-18,this.compressor.knee.value=14,this.compressor.ratio.value=5,this.compressor.attack.value=.006,this.compressor.release.value=.16,this.analyser=i.createAnalyser(),this.analyser.fftSize=256,this.meterBuffer=new Float32Array(this.analyser.fftSize),this.master.connect(this.compressor).connect(this.analyser).connect(i.destination);const r=i.createOscillator();r.type="sawtooth";const a=i.createBiquadFilter();a.type="lowpass",a.frequency.value=620,a.Q.value=.7,this.engineGain=i.createGain(),this.engineGain.gain.value=.09,r.connect(a).connect(this.engineGain).connect(this.master),r.start(),this.engineOsc=r;const s=i.createOscillator();s.type="triangle";const o=i.createBiquadFilter();o.type="bandpass",o.frequency.value=520,o.Q.value=.65,this.harmonicGain=i.createGain(),this.harmonicGain.gain.value=.035,s.connect(o).connect(this.harmonicGain).connect(this.master),s.start(),this.engineHarmonic=s;const h=i.createOscillator();h.type="sawtooth";const u=i.createBiquadFilter();u.type="bandpass",u.frequency.value=900,u.Q.value=.8,this.nitroGain=i.createGain(),this.nitroGain.gain.value=1e-4,h.connect(u).connect(this.nitroGain).connect(this.master),h.start(),this.nitroOsc=h;const m=i.createBuffer(1,Math.floor(i.sampleRate*.35),i.sampleRate),p=m.getChannelData(0);for(let A=0;A<p.length;A++)p[A]=(Math.random()*2-1)*.55;this.noiseBuffer=m;const g=i.createBufferSource();g.buffer=m,g.loop=!0;const E=i.createBiquadFilter();E.type="bandpass",E.frequency.value=1250,E.Q.value=.5,this.skidGain=i.createGain(),this.skidGain.gain.value=1e-4,g.connect(E).connect(this.skidGain).connect(this.master),g.start(),this.skidNoise=g,this.failed=!1}setMasterVolume(n){this.volume=Ln(n),this.applyMaster()}getMasterVolume(){return this.volume}setMuted(n){this.muted=n,this.applyMaster()}mute(){this.setMuted(!0)}isMuted(){return this.muted}isAvailable(){return!!this.ctx&&!this.failed}getState(){return this.ctx?.state??(this.failed?"unavailable":"locked")}applyMaster(){this.ctx&&this.master&&this.master.gain.setTargetAtTime(this.muted?0:this.volume,this.ctx.currentTime,.025)}update(n,t=0,i=!1,r=0){const a=this.ctx;if(!a||!this.engineOsc||!this.engineHarmonic||!this.engineGain||!this.harmonicGain)return;const s=Ap(n,t,i),o=a.currentTime;this.engineOsc.frequency.setTargetAtTime(s.fundamentalHz,o,.055),this.engineHarmonic.frequency.setTargetAtTime(s.harmonicHz,o,.07),this.engineGain.gain.setTargetAtTime(s.engineGain,o,.09),this.harmonicGain.gain.setTargetAtTime(.026+s.rpm*.022,o,.09),this.nitroOsc?.frequency.setTargetAtTime(s.nitroHz,o,.045),this.nitroGain?.gain.setTargetAtTime(i?.075:1e-4,o,.05),this.skidGain?.gain.setTargetAtTime(ln(r,0,1)>.08?.12*ln(r,0,1):1e-4,o,.04)}testTone(){const n=this.ctx;if(!n||this.muted)return!1;const t=n.createOscillator(),i=n.createGain(),r=n.currentTime;return t.type="sine",t.frequency.setValueAtTime(523.25,r),i.gain.setValueAtTime(1e-4,r),i.gain.linearRampToValueAtTime(.22,r+.025),i.gain.setValueAtTime(.22,r+.24),i.gain.exponentialRampToValueAtTime(1e-4,r+.52),t.connect(i).connect(this.master),t.start(r),t.stop(r+.54),t.onended=()=>{t.disconnect(),i.disconnect()},!0}jump(){this.sweep(175,540,.34,.055,"sawtooth")}landing(n=1){this.noiseBurst(.11+Ln(n)*.08,.22),this.sweep(112,52,.19,.075*Ln(n),"sine")}impact(n=1){this.noiseBurst(.15+Ln(n)*.12,.34),this.sweep(170,43,.28,.11*Ln(n),"triangle")}sweep(n,t,i,r,a){const s=this.ctx;if(!s||this.muted)return;const o=s.createOscillator(),h=s.createGain(),u=s.currentTime;o.type=a,o.frequency.setValueAtTime(n,u),o.frequency.exponentialRampToValueAtTime(Math.max(25,t),u+i),h.gain.setValueAtTime(1e-4,u),h.gain.linearRampToValueAtTime(r,u+.012),h.gain.exponentialRampToValueAtTime(1e-4,u+i),o.connect(h).connect(this.master),o.start(u),o.stop(u+i+.015),o.onended=()=>{o.disconnect(),h.disconnect()}}noiseBurst(n,t){const i=this.ctx;if(!i||!this.noiseBuffer||this.muted)return;const r=i.createBufferSource(),a=i.createBiquadFilter(),s=i.createGain(),o=i.currentTime;r.buffer=this.noiseBuffer,a.type="lowpass",a.frequency.value=1900,s.gain.setValueAtTime(Math.max(1e-4,n),o),s.gain.exponentialRampToValueAtTime(1e-4,o+t),r.connect(a).connect(s).connect(this.master),r.start(o),r.stop(o+t+.02),r.onended=()=>{r.disconnect(),a.disconnect(),s.disconnect()}}outputRms(){if(!this.ctx||!this.analyser||!this.meterBuffer||this.ctx.state!=="running"||this.muted)return 0;this.analyser.getFloatTimeDomainData(this.meterBuffer);let n=0;for(const t of this.meterBuffer)n+=t*t;return Math.sqrt(n/this.meterBuffer.length)}}const le=e=>document.querySelector(e),An=!!(window.matchMedia?.("(pointer: coarse)").matches||window.matchMedia?.("(any-pointer: coarse)").matches||navigator.maxTouchPoints>0||"ontouchstart"in window),Kn=document.documentElement;Kn.classList.toggle("touch-capable",An);Kn.classList.toggle("keyboard-controls-visible",!An);const Rp=le("#app");Rp.innerHTML=`
 <canvas id="game"></canvas>
 <div class="grain"></div>
 <header class="topbar"><a class="brand" href="#"><span class="brand-icon">✦</span><span>RUMBLE<span class="accent">ROAM</span></span></a><div class="location-label"><span class="pulse"></span><span id="place-name">Moab, Utah</span><small id="terrain-name">RED ROCK COUNTRY</small></div><div class="top-actions"><button id="map-btn" class="top-btn" aria-label="Choose location">⌖ <span>LOCATIONS</span></button><button id="pause-btn" class="top-btn" aria-label="Pause game">Ⅱ <span>PAUSE</span></button><button id="help-btn" class="top-btn help-trigger" aria-label="Help and controls">?</button></div></header>
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
 <div class="loading-screen" id="loading"><div class="loader-mark">✦</div><div class="loader-title">MAPPING THE WILD</div><div class="loader-sub">LOADING REAL-WORLD TERRAIN</div><div class="loader-track"><i></i></div></div>`;let Qt=An?"low":"high";const ma=e=>An?{low:.82,medium:.93,high:1}[e]:{low:.85,medium:1.1,high:1.35}[e],_a=()=>({width:Math.round(window.visualViewport?.width??innerWidth),height:Math.round(window.visualViewport?.height??innerHeight)}),fi=_a(),pt=new Jf({canvas:le("#game"),antialias:!1,powerPreference:"high-performance"});pt.setPixelRatio(Math.min(devicePixelRatio||1,ma(Qt)));pt.setSize(fi.width,fi.height);pt.shadowMap.enabled=!1;pt.toneMapping=vo;pt.toneMappingExposure=1.12;const Tt=new dl;Tt.background=new We("#9bb7c1");Tt.fog=new Mo("#b9c4bc",105e-6);const Gt=new Dn(60,fi.width/fi.height,.1,18e3);Gt.position.set(0,8,-16);Tt.add(new ul(15398143,6443323,1.45));const Co=new fl(16772559,2.55);Co.position.set(-350,550,260);Tt.add(Co);const oa=new kt({side:xt,depthWrite:!1,depthTest:!1,toneMapped:!1,uniforms:{uRumbleDesert:{value:1},uRumbleAlpine:{value:0},uSunDirection:{value:new ae(-.42,.63,.65).normalize()}},vertexShader:"varying vec3 vSkyDirection;void main(){vSkyDirection=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec3 vSkyDirection;uniform float uRumbleDesert;uniform float uRumbleAlpine;uniform vec3 uSunDirection;void main(){vec3 d=normalize(vSkyDirection);float h=smoothstep(-.16,.84,d.y);vec3 horizon=mix(vec3(.79,.72,.58),vec3(.66,.75,.77),uRumbleDesert);horizon=mix(horizon,vec3(.72,.79,.84),uRumbleAlpine);vec3 zenith=mix(vec3(.24,.37,.48),vec3(.3,.46,.55),uRumbleDesert);vec3 sky=mix(horizon,zenith,h);float sun=pow(max(dot(d,normalize(uSunDirection)),0.0),180.0);sky+=vec3(1.0,.72,.4)*sun*.32;gl_FragColor=vec4(sky,1.0);}"}),gi=new rt(new Eo(12e3,24,16),oa);gi.frustumCulled=!1;gi.renderOrder=-1e3;Tt.add(gi);const ga=new kt({transparent:!0,depthWrite:!1,toneMapped:!1,uniforms:{uOpacity:{value:.25}},vertexShader:"varying vec2 vShadowUv;void main(){vShadowUv=uv*2.0-1.0;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec2 vShadowUv;uniform float uOpacity;void main(){float r=length(vShadowUv);float a=(1.0-smoothstep(.18,1.0,r))*uOpacity;gl_FragColor=vec4(.12,.105,.085,a);}"}),qn=new rt(new pl(1,32),ga);qn.rotation.x=-Math.PI/2;qn.renderOrder=1;Tt.add(qn);const Mt=new cp(An?63:127);Tt.add(Mt.group);const $t=new pp;Tt.add($t.group);const qt=new Tp;Tt.add(qt.group);let Yt=new hp;Tt.add(Yt.root);const ce=new Sp,{ArcadeCollisionWorld:wp}=await na(async()=>{const{ArcadeCollisionWorld:e}=await import("./collision-world-CbzMsxrv.js");return{ArcadeCollisionWorld:e}},__vite__mapDeps([0,1]),import.meta.url),un=new wp;await un.init();const ct=new xp,dt=new bp,Po="rumble-roam-best-stunt-score";function Lo(){try{return Number(localStorage.getItem(Po))||0}catch{return 0}}const gt=new vp(Lo());(location.hostname==="localhost"||location.hostname==="127.0.0.1")&&(window.__rumbleRoamDebug={spawnImpactTestBuilding(){const e=ce.pos.x,n=ce.pos.z,t=8,i=Mt.heightAt(e,n),r=new rt(new hn(6,t,6),new Ct({color:10180920}));r.position.set(e,i+t/2,n),r.userData.kind="building",$t.group.add(r);const a={mesh:r,x:e,z:n,w:6,d:6,h:t,broken:!1};$t.list.push(a),un.addBuilding(a,i);const s=un.step(ce.pos,ce.yaw,1/60);return s&&(ca++,un.removeBuilding(s),$t.break(s),qt.burst(new ae(s.x,ce.pos.y,s.z),32,16749652),Pt=.5,Dt("CRUNCH! Structure demolished.")),s===a}});const vi={gravity:24,jump:15,scale:1};le("#graphics-quality").value=Qt;let fn="chase",Ht=!1,sa=0,Bn=.25,Xt=null,la=null,En=wo[1],Vi=0,Yn=performance.now(),Pt=0,Qr=0,ki=performance.now(),ai=0,ca=0,zi=0,ri=0,Jr=0,jr=0;function Cp(){const e=performance.memory;return e?Math.round(e.usedJSHeapSize/1048576*10)/10:null}function Dt(e){const n=le("#toast");n.textContent=e,n.classList.add("show"),clearTimeout(Qr),Qr=window.setTimeout(()=>n.classList.remove("show"),2800)}function It(){Kn.classList.toggle("overlay-open",["location-panel","settings-panel","help-panel","pause-panel"].some(e=>!le("#"+e).classList.contains("hidden")))}async function Si(e){const n=++Vi;En=e,Ht=!1;const t=e.name.toLowerCase(),i=/moab|grand canyon|sahara|utah|arizona/.test(t),r=/alps|everest|mountain|swiss/.test(t);oa.uniforms.uRumbleDesert.value=i?1:0,oa.uniforms.uRumbleAlpine.value=r?1:0,Tt.fog instanceof Mo&&Tt.fog.color.set(i?"#c5a983":r?"#b9c8d3":"#b9c4bc"),["location-panel","settings-panel","help-panel","pause-panel"].forEach(a=>le("#"+a).classList.add("hidden")),It(),le("#loading").classList.remove("done"),le("#place-name").textContent=e.name,le("#terrain-name").textContent=e.terrain??"OPEN TERRAIN",Dt("Mapping terrain…"),await Mt.load(e),n===Vi&&(ce.reset(Mt,vi.scale),gt.reset(),le("#loading").classList.add("done"),Dt("Terrain is ready. Go make a mess."),$t.load(e,(a,s)=>Mt.heightAt(a,s),un,Mt.frame).then(()=>{n===Vi&&Dt($t.list.length?`${$t.list.length} structures ready. Go make a mess.`:"No mapped structures nearby. The terrain is yours.")}),Xt?.flyTo({center:[e.lon,e.lat],zoom:12}),la?.setLngLat([e.lon,e.lat]))}wo.forEach((e,n)=>{const t=document.createElement("button");t.className="preset",t.innerHTML=`<span class="preset-index">0${n+1}</span><span>${e.name}</span><i>↗</i>`,t.onclick=()=>Si(e),le("#presets").append(t)});le("#search-form").addEventListener("submit",async e=>{e.preventDefault();const n=le("#location-search").value.trim();if(!n)return;const t=le("#search-results");t.innerHTML='<div class="search-status">SEARCHING THE GLOBE…</div>';try{const i=await rp(n);if(!i.length){t.innerHTML='<div class="search-status">No places found. Try a nearby town or coordinates.</div>';return}t.innerHTML="";for(const r of i){const a=document.createElement("button");a.className="result",a.innerHTML=`<span>⌖</span><span>${r.name}</span><i>↗</i>`,a.onclick=()=>Si(r),t.append(a)}}catch{t.innerHTML='<div class="search-status">Location search is busy. Try coordinates like 40.7, -73.9.</div>'}});le("#location-search").addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),le("#search-form").requestSubmit())});le("#map-btn").onclick=async()=>{if(le("#location-panel").classList.toggle("hidden"),le("#settings-panel").classList.add("hidden"),le("#help-panel").classList.add("hidden"),It(),Xt)setTimeout(()=>Xt?.resize(),100);else{const[n,t]=await Promise.all([na(()=>import("./maplibre-gl-BT_db7in.js"),[],import.meta.url),na(()=>import("./maplibre-gl-worker-re4DVwB4.js"),[],import.meta.url)]);n.setWorkerUrl(t.default),Xt=new n.Map({container:"mini-map",style:"https://tiles.openfreemap.org/styles/liberty",center:[En.lon,En.lat],zoom:10,attributionControl:!1}),Xt.addControl(new n.NavigationControl({showCompass:!1}),"top-right"),la=new n.Marker({color:"#f2632b"}).setLngLat([En.lon,En.lat]).addTo(Xt),Xt.on("click",i=>{const r={name:`${i.lngLat.lat.toFixed(4)}, ${i.lngLat.lng.toFixed(4)}`,lat:i.lngLat.lat,lon:i.lngLat.lng};la?.setLngLat(i.lngLat);const a=document.createElement("button");a.className="result",a.innerHTML=`<span>⌖</span><span>Drive at ${r.name}</span><i>↗</i>`,a.onclick=()=>Si(r),le("#search-results").replaceChildren(a)})}};le("#settings-btn").onclick=()=>{le("#settings-panel").classList.toggle("hidden"),le("#location-panel").classList.add("hidden"),le("#help-panel").classList.add("hidden"),It()};const va=()=>{le("#help-panel").classList.toggle("hidden"),le("#location-panel").classList.add("hidden"),le("#settings-panel").classList.add("hidden"),It()};le("#help-btn").onclick=va;le("#touch-help").onclick=va;document.querySelectorAll("[data-close]").forEach(e=>e.addEventListener("click",()=>{le("#"+e.dataset.close).classList.add("hidden"),It()}));const Sa=(e,n,t)=>{const i=le("#"+e);i.oninput=()=>{const r=+i.value/(n==="scale"?10:1);vi[n]=r,le("#"+n+"-value").textContent=t(r),n==="scale"&&Yt.root.scale.setScalar(r)}};Sa("gravity","gravity",e=>e.toFixed(0));Sa("jump","jump",e=>e.toFixed(0));Sa("scale","scale",e=>e.toFixed(1)+"×");le("#paint").addEventListener("input",e=>Yt.setColor(e.target.value));function Pp(e){Qt=e,le("#graphics-quality").value=e,pt.setPixelRatio(Math.min(devicePixelRatio||1,ma(e)));const n=_a();pt.setSize(n.width,n.height),Mt.setVisualQuality(e),qt.setQuality(e),ga.uniforms.uOpacity.value=yo(e)}const yo=e=>e==="low"?.18:e==="medium"?.23:.29;le("#graphics-quality").addEventListener("change",e=>Pp(e.target.value));Mt.setVisualQuality(Qt);qt.setQuality(Qt);ga.uniforms.uOpacity.value=yo(Qt);le("#audio-toggle").addEventListener("change",e=>{const n=e.target.checked;n&&dt.start(),dt.setMuted(!n),le("#audio-status").textContent=n?"Audio enabled.":"Audio muted."});le("#master-volume").addEventListener("input",e=>{const n=+e.target.value;dt.setMasterVolume(n/100),le("#volume-value").textContent=`${n}%`});le("#audio-test").addEventListener("click",()=>{dt.start();const e=dt.testTone();le("#audio-status").textContent=e?"Test tone playing through the game audio output.":"Unmute audio to play the test tone.",e||Dt("Turn Audio on to hear the test.")});function Ea(){ce.reset(Mt,vi.scale),gt.reset(),Yt.root.visible=!0,Dt("Truck recovered. Send it!")}function Ma(e){const n=["chase","far","hood","free"];fn=e??n[(n.indexOf(fn)+1)%n.length],document.querySelectorAll("[data-camera]").forEach(t=>t.classList.toggle("selected",t.dataset.camera===fn))}function xa(){Ht=!Ht,Ht&&ct.releaseAll(),le("#pause-panel").classList.toggle("hidden",!Ht),It()}le("#reset-btn").onclick=Ea;le("#touch-reset").onclick=()=>{dt.start(),Ea()};le("#touch-camera").onclick=()=>Ma();le("#touch-pause").onclick=()=>xa();le("#resume-btn").onclick=()=>{dt.start(),Ht=!1,Yn=performance.now(),le("#pause-panel").classList.add("hidden"),It()};le("#pause-btn").onclick=()=>xa();le("#pause-location").onclick=()=>{le("#pause-panel").classList.add("hidden"),It(),le("#map-btn").click()};document.querySelectorAll("[data-camera]").forEach(e=>e.addEventListener("click",()=>Ma(e.dataset.camera)));const Gn=le("#touch-control-mode");Gn.textContent=An?"⌨ KEYS":"◉ TOUCH";Gn.setAttribute("aria-pressed",String(!Kn.classList.contains("keyboard-controls-visible")));Gn.onclick=()=>{const e=Kn.classList.toggle("keyboard-controls-visible");Gn.innerHTML=e?"◉ <span>TOUCH</span>":"⌨ <span>KEYS</span>",Gn.setAttribute("aria-pressed",String(!e))};window.addEventListener("keydown",e=>{e.repeat||ra(e.target)||(e.key.toLowerCase()==="m"&&le("#map-btn").click(),e.key.toLowerCase()==="c"&&Ma(),e.key.toLowerCase()==="r"&&Ea(),e.key==="Escape"&&xa(),(e.key==="?"||e.key.toLowerCase()==="h")&&va(),(e.key===" "||e.key.toLowerCase()==="w")&&dt.start())});document.querySelectorAll("[data-touch]").forEach(e=>{const n=e.dataset.touch;e.addEventListener("pointerdown",t=>{if(!(t.pointerType==="mouse"&&t.button!==0)){t.preventDefault(),ct.pointerDown(t.pointerId,n);try{e.setPointerCapture(t.pointerId)}catch{}dt.start()}}),e.addEventListener("pointerup",t=>{t.preventDefault(),ct.pointerUp(t.pointerId)}),e.addEventListener("pointercancel",t=>ct.pointerCancel(t.pointerId)),e.addEventListener("lostpointercapture",t=>ct.lostPointerCapture(t.pointerId))});window.addEventListener("blur",()=>ct.releaseAll());document.addEventListener("visibilitychange",()=>{Yn=performance.now(),document.hidden&&(ct.releaseAll(),Ht=!0,le("#pause-panel").classList.remove("hidden"),It())});window.addEventListener("pointermove",e=>{fn==="free"&&e.buttons&&(sa-=e.movementX*.004,Bn=Bt.clamp(Bn-e.movementY*.003,-.3,1.1))});let eo=0,Wi=60;function Lp(e){const n=ce.pos,t=pa(ce.yaw),i=Math.min(1,ce.speed/28),r=Math.max(-35,Math.min(35,(ce.speed-eo)/Math.max(e,.001)));eo=ce.speed;let a,s;if(fn==="hood")a=n.clone().add(new ae(0,2.3,0)).addScaledVector(t,1.2),s=a.clone().addScaledVector(t,7).add(new ae(0,.3,0));else if(fn==="free"){const u=new ae(Math.sin(sa)*Math.cos(Bn),Math.sin(Bn),Math.cos(sa)*Math.cos(Bn));a=n.clone().add(new ae(0,1.5,0)),s=a.clone().addScaledVector(u,-14)}else{const u=fn==="far",m=(u?30:11.8)+i*(u?8:3.8),p=(u?10:5.35)+i*1.6;a=n.clone().add(new ae(0,1.4,0)).addScaledVector(t,ce.speed*.2),s=n.clone().addScaledVector(t,-m).add(new ae(0,p,0)).addScaledVector(ce.vel,-.11),u||s.addScaledVector(ha(ce.yaw),2.3),s.addScaledVector(t,-Bt.clamp(r*.018,-.8,.8))}const o=a;Pt>0&&(s.x+=(Math.random()-.5)*Pt,s.y+=(Math.random()-.5)*Pt,Pt=Math.max(0,Pt-e*1.3)),Gt.position.lerp(s,1-Math.exp(-(5.4-i*.65)*e)),Gt.lookAt(o);const h=60+i*4.5;Math.abs(h-Wi)>.15&&(Wi=h,Gt.fov=Wi,Gt.updateProjectionMatrix())}function Uo(e){requestAnimationFrame(Uo);const n=performance.now(),t=Math.min((e-Yn)/1e3,.045);if(Yn=e,!Ht){const h=ct.update(),u=ce.grounded,m=ce.vel.y,p=performance.now();ce.update(t,h,Mt,Yt,vi),jr=performance.now()-p;const g=gt.update({grounded:ce.grounded,airtime:ce.airTime,pitch:ce.pitch,roll:ce.roll,landingSpeed:Math.abs(m)});if(u&&!ce.grounded&&h.jump&&(dt.jump(),Pt=Math.max(Pt,.07)),!u&&ce.grounded&&(dt.landing(Math.min(1,Math.abs(m)/20)),Pt=Math.max(Pt,Math.min(.28,Math.abs(m)*.008)),g&&(Dt(`${g.message}  +${g.points.toLocaleString()} PTS`),gt.bestScore>Lo())))try{localStorage.setItem(Po,String(gt.bestScore))}catch{}const E=un.step(ce.pos,ce.yaw,t);E&&(ca++,un.removeBuilding(E),$t.break(E),qt.burst(new ae(E.x,ce.pos.y,E.z),32,16749652),ce.vel.add(new ae((ce.pos.x-E.x)*3,7,(ce.pos.z-E.z)*3)),Pt=.5,dt.impact(Math.min(1,ce.speed/22)),Dt("CRUNCH! Structure demolished."));const A=Math.abs(ce.vel.dot(ha(ce.yaw)));for(let M=0;M<ce.wheelContacts.length;M++){const d=ce.wheelContacts[M];qt.dust(new ae(d.x,d.height+.07,d.z),ce.speed*(A>ce.speed*.28?1.35:1))}if(h.nitro&&ce.nitro>0&&Math.random()<t*8){const M=ce.pos.clone().addScaledVector(pa(ce.yaw),-1.72);qt.burst(M.add(new ae((Math.random()-.5)*.9,.9,(Math.random()-.5)*.35)),1,16742965)}qt.update(t),dt.update(ce.speed,Math.max(0,h.throttle),h.nitro&&ce.nitro>0,Math.max(h.handbrake?.55:0,A/Math.max(4,ce.speed))),Lp(t)}gi.position.copy(Gt.position);const i=ce.wheelContacts.reduce((h,u)=>Math.max(h,u.height),-1/0),r=Number.isFinite(i)?i:Mt.heightAt(ce.pos.x,ce.pos.z),a=Bt.clamp(ce.pos.y-r,0,80);qn.position.set(ce.pos.x,r+.035,ce.pos.z),qn.scale.set(1.35+a*.055,2+a*.07,1),le("#speed").textContent=String(Math.round(ce.speed*3.6)).padStart(3,"0"),le("#speed-bar").style.width=`${Math.min(100,ce.speed/30*100)}%`,le("#nitro-bar").style.width=`${ce.nitro}%`,le("#nitro-state").textContent=ce.nitro>5?"READY TO BURN":"RECHARGING",le("#air-time").textContent=`${gt.airtime.toFixed(1)}s`,le("#stunt-score").textContent=gt.currentPoints.toLocaleString(),le("#stunt-best").textContent=gt.bestScore.toLocaleString(),le("#level-hint").textContent=gt.isAirborne?ct.state.level?"LEVELING…":"F / LEVEL TO RIGHT":"",le("#touch-level").classList.toggle("active",ct.state.level??!1);const s=performance.now();pt.render(Tt,Gt),Jr=performance.now()-s;const o=performance.now()-n;if(zi+=o,ri=Math.max(ri,o),ai++,e-ki>=1e3){const h=Mt.takePerformanceSample();window.__monsterMapMetrics={fps:Math.round(ai*1e3/(e-ki)),frameMs:Math.round(zi/ai*10)/10,frameMsMax:Math.round(ri*10)/10,physicsMs:+jr.toFixed(2),renderMs:+Jr.toFixed(2),terrainSampleMs:+h.heightSampleMs.toFixed(3),terrainSamples:h.heightSamples,terrainTileBuildMs:+h.tileBuildMs.toFixed(3),terrainTileBuilds:h.tileBuilds,pixelRatio:pt.getPixelRatio(),graphicsQuality:Qt,drawCalls:pt.info.render.calls,triangles:pt.info.render.triangles,geometries:pt.info.memory.geometries,textures:pt.info.memory.textures,heapMB:Cp(),audioState:dt.getState(),audioRms:+dt.outputRms().toFixed(4),audioMuted:dt.isMuted(),volume:dt.getMasterVolume(),speed:ce.speed,position:[ce.pos.x,ce.pos.y,ce.pos.z],destroyed:ca,yaw:ce.yaw,pitch:ce.pitch,roll:ce.roll,steer:ct.state.steer,throttle:ct.state.throttle,nitro:ct.state.nitro,jump:ct.state.jump,grounded:ce.grounded,activeTouchActions:ct.touches.size,frontWheelAngles:Yt.frontWheels.map(u=>u.rotation.y),rearWheelAngles:Yt.wheels.filter(u=>!Yt.frontWheels.includes(u)).map(u=>u.rotation.y),wheelContacts:ce.wheelContacts.filter(u=>u.contact).length,averageCompression:ce.wheelContacts.reduce((u,m)=>u+m.compression,0)/Math.max(1,ce.wheelContacts.length),contactPitch:ce.contactPitch,contactRoll:ce.contactRoll,terrainOriginHeight:Mt.heightAt(0,0),stuntAirtime:gt.airtime,stuntPoints:gt.currentPoints,bestStunt:gt.bestScore,stuntRolls:gt.rolls,stuntFlips:gt.flips,leveling:ct.state.level??!1},ai=0,zi=0,ri=0,ki=e}}function Ei(){const e=_a();pt.setPixelRatio(Math.min(devicePixelRatio||1,ma(Qt))),pt.setSize(e.width,e.height),Gt.aspect=e.width/Math.max(1,e.height),Gt.updateProjectionMatrix(),Xt?.resize()}window.addEventListener("resize",Ei);window.addEventListener("orientationchange",()=>setTimeout(Ei,180));window.visualViewport?.addEventListener("resize",Ei);const Do=le("#game");Do.addEventListener("webglcontextlost",e=>{e.preventDefault(),ct.releaseAll(),Ht=!0,le("#pause-panel").classList.remove("hidden"),It(),Dt("Graphics paused. Return to the game when ready.")});Do.addEventListener("webglcontextrestored",()=>{Yn=performance.now(),Ei(),Dt("Graphics restored.")});await Si(En);requestAnimationFrame(Uo);
