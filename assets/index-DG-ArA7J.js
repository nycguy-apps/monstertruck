const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./collision-world-BxfV1_NP.js","./three.core-ChrfmkBg.js"])))=>i.map(i=>d[i]);
import{c as Pr,N as yt,S as Lr,C as Be,F as $a,M as en,V as we,R as Ur,a as mt,w as fi,W as Oi,b as tn,d as rt,L as cn,H as Hn,U as zt,D as Ct,B as St,e as mn,f as Vn,p as Dr,E as yr,g as ut,P as fn,A as Ir,h as qn,i as wt,j as On,k as bi,l as _n,m as gn,n as Za,o as Nr,q as qt,r as Fn,s as Or,t as Fr,u as sn,O as Br,v as Gr,x as Hr,y as Vr,z as kr,G as zr,I as Wr,J as Xr,K as Yr,Q as qr,T as Kr,X as $r,Y as Zr,Z as Qr,_ as Jr,$ as jr,a0 as eo,a1 as to,a2 as Kn,a3 as $t,a4 as Rn,a5 as no,a6 as dn,a7 as io,a8 as ao,a9 as ro,aa as oo,ab as Qa,ac as so,ad as co,ae as lo,af as fo,ag as He,ah as uo,ai as po,aj as ho,ak as Wt,al as Ja,am as Dn,an as ot,ao as ja,ap as kt,aq as Rt,ar as Bn,as as er,at as tr,au as nr,av as Ci,aw as mo,ax as _o,ay as go,az as vo,aA as ir,aB as Ht,aC as Eo,aD as So,aE as Mo,aF as ar,aG as To,aH as rr,aI as or,aJ as $n,aK as Zn,aL as Qn,aM as Jn,aN as $e,aO as Fi,aP as Bi,aQ as Gi,aR as Hi,aS as Vi,aT as ki,aU as zi,aV as Wi,aW as Xi,aX as Yi,aY as qi,aZ as Ki,a_ as $i,a$ as Zi,b0 as Qi,b1 as Ji,b2 as ji,b3 as ea,b4 as ta,b5 as na,b6 as ia,b7 as aa,b8 as ra,b9 as oa,ba as sa,bb as ca,bc as la,bd as fa,be as di,bf as ui,bg as pi,bh as hi,bi as mi,bj as _i,bk as gi,bl as xo,bm as da,bn as Ao,bo as yn,bp as Ro,bq as ua,br as pa,bs as ha,bt as vi,bu as Ei,bv as bo,bw as sr,bx as Co,by as kn,bz as wo,bA as Po,bB as cr,bC as vn,bD as ma,bE as lr,bF as _a,bG as fr,bH as En,bI as nn,bJ as Lo,bK as Sn,bL as Uo,bM as Do,bN as yo,bO as ga,bP as ht,bQ as Io,bR as No,bS as Oo,bT as Fo,bU as Bo,bV as dr,bW as Go,bX as Ho,bY as Vo,bZ as ko,b_ as zo,b$ as Wo,c0 as Xo,c1 as Yo,c2 as qo,c3 as Ko,c4 as $o,c5 as Zo,c6 as Jt,c7 as Tt,c8 as bt,c9 as Qo,ca as Jo,cb as jo,cc as es,cd as bn,ce as ts,cf as Si,cg as ns,ch as is,ci as as,cj as rs}from"./three.core-ChrfmkBg.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();const os="modulepreload",ss=function(e,n){return new URL(e,n).href},va={},Mi=function(n,t,i){let a=Promise.resolve();if(t&&t.length>0){let d=function(M){return Promise.all(M.map(m=>Promise.resolve(m).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};const l=document.getElementsByTagName("link"),E=document.querySelector("meta[property=csp-nonce]"),_=E?.nonce||E?.getAttribute("nonce");a=d(t.map(M=>{if(M=ss(M,i),M in va)return;va[M]=!0;const m=M.endsWith(".css"),v=m?'[rel="stylesheet"]':"";if(!!i)for(let w=l.length-1;w>=0;w--){const f=l[w];if(f.href===M&&(!m||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${M}"]${v}`))return;const D=document.createElement("link");if(D.rel=m?"stylesheet":os,m||(D.as="script"),D.crossOrigin="",D.href=M,_&&D.setAttribute("nonce",_),document.head.appendChild(D),m)return new Promise((w,f)=>{D.addEventListener("load",w),D.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${M}`)))})}))}function r(d){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=d,window.dispatchEvent(l),!l.defaultPrevented)throw d}return a.then(d=>{for(const l of d||[])l.status==="rejected"&&r(l.reason);return n().catch(r)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ur(){let e=null,n=!1,t=null,i=null;function a(r,d){t(r,d),i=e.requestAnimationFrame(a)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(a),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(r){t=r},setContext:function(r){e=r}}}function cs(e){const n=new WeakMap;function t(l,E){const _=l.array,M=l.usage,m=_.byteLength,v=e.createBuffer();e.bindBuffer(E,v),e.bufferData(E,_,M),l.onUploadCallback();let x;if(_ instanceof Float32Array)x=e.FLOAT;else if(typeof Float16Array<"u"&&_ instanceof Float16Array)x=e.HALF_FLOAT;else if(_ instanceof Uint16Array)l.isFloat16BufferAttribute?x=e.HALF_FLOAT:x=e.UNSIGNED_SHORT;else if(_ instanceof Int16Array)x=e.SHORT;else if(_ instanceof Uint32Array)x=e.UNSIGNED_INT;else if(_ instanceof Int32Array)x=e.INT;else if(_ instanceof Int8Array)x=e.BYTE;else if(_ instanceof Uint8Array)x=e.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)x=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:v,type:x,bytesPerElement:_.BYTES_PER_ELEMENT,version:l.version,size:m}}function i(l,E,_){const M=E.array,m=E.updateRanges;if(e.bindBuffer(_,l),m.length===0)e.bufferSubData(_,0,M);else{m.sort((x,D)=>x.start-D.start);let v=0;for(let x=1;x<m.length;x++){const D=m[v],w=m[x];w.start<=D.start+D.count+1?D.count=Math.max(D.count,w.start+w.count-D.start):(++v,m[v]=w)}m.length=v+1;for(let x=0,D=m.length;x<D;x++){const w=m[x];e.bufferSubData(_,w.start*M.BYTES_PER_ELEMENT,M,w.start,w.count)}E.clearUpdateRanges()}E.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const E=n.get(l);E&&(e.deleteBuffer(E.buffer),n.delete(l))}function d(l,E){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const M=n.get(l);(!M||M.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const _=n.get(l);if(_===void 0)n.set(l,t(l,E));else if(_.version<l.version){if(_.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(_.buffer,l,E),_.version=l.version}}return{get:a,remove:r,update:d}}var ls=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fs=`#ifdef USE_ALPHAHASH
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
#endif`,ds=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,us=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ps=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hs=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ms=`#ifdef USE_AOMAP
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
#endif`,_s=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gs=`#ifdef USE_BATCHING
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
#endif`,vs=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Es=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ss=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ms=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ts=`#ifdef USE_IRIDESCENCE
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
#endif`,xs=`#ifdef USE_BUMPMAP
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
#endif`,As=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rs=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bs=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cs=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ws=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ps=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ls=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Us=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ds=`#define PI 3.141592653589793
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
} // validated`,ys=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Is=`vec3 transformedNormal = objectNormal;
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
#endif`,Ns=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Os=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fs=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bs=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gs="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hs=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vs=`#ifdef USE_ENVMAP
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
#endif`,ks=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zs=`#ifdef USE_ENVMAP
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
#endif`,Ws=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xs=`#ifdef USE_ENVMAP
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
#endif`,Ys=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qs=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ks=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$s=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zs=`#ifdef USE_GRADIENTMAP
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
}`,Qs=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Js=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,js=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ec=`uniform bool receiveShadow;
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
#endif`,tc=`#ifdef USE_ENVMAP
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
#endif`,nc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ic=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ac=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oc=`PhysicalMaterial material;
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
#endif`,sc=`struct PhysicalMaterial {
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
}`,cc=`
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
#endif`,lc=`#if defined( RE_IndirectDiffuse )
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
#endif`,fc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_c=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vc=`#if defined( USE_POINTS_UV )
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
#endif`,Ec=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mc=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tc=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ac=`#ifdef USE_MORPHTARGETS
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
#endif`,Rc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cc=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uc=`#ifdef USE_NORMALMAP
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
#endif`,Dc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ic=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Oc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fc=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qc=`float getShadowMask() {
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
}`,Kc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$c=`#ifdef USE_SKINNING
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
#endif`,Zc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qc=`#ifdef USE_SKINNING
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
#endif`,Jc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,el=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tl=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nl=`#ifdef USE_TRANSMISSION
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
#endif`,il=`#ifdef USE_TRANSMISSION
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
#endif`,al=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ol=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sl=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cl=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ll=`uniform sampler2D t2D;
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
}`,fl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dl=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ul=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pl=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hl=`#include <common>
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
}`,ml=`#if DEPTH_PACKING == 3200
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
}`,_l=`#define DISTANCE
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
}`,gl=`#define DISTANCE
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
}`,vl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,El=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sl=`uniform float scale;
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
}`,Ml=`uniform vec3 diffuse;
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
}`,Tl=`#include <common>
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
}`,xl=`uniform vec3 diffuse;
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
}`,Al=`#define LAMBERT
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
}`,Rl=`#define LAMBERT
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
}`,bl=`#define MATCAP
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
}`,Cl=`#define MATCAP
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
}`,wl=`#define NORMAL
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
}`,Pl=`#define NORMAL
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
}`,Ll=`#define PHONG
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
}`,Ul=`#define PHONG
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
}`,Dl=`#define STANDARD
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
}`,yl=`#define STANDARD
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
}`,Il=`#define TOON
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
}`,Nl=`#define TOON
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
}`,Ol=`uniform float size;
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
}`,Fl=`uniform vec3 diffuse;
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
}`,Bl=`#include <common>
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
}`,Gl=`uniform vec3 color;
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
}`,Hl=`uniform float rotation;
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
}`,Vl=`uniform vec3 diffuse;
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
}`,Ie={alphahash_fragment:ls,alphahash_pars_fragment:fs,alphamap_fragment:ds,alphamap_pars_fragment:us,alphatest_fragment:ps,alphatest_pars_fragment:hs,aomap_fragment:ms,aomap_pars_fragment:_s,batching_pars_vertex:gs,batching_vertex:vs,begin_vertex:Es,beginnormal_vertex:Ss,bsdfs:Ms,iridescence_fragment:Ts,bumpmap_pars_fragment:xs,clipping_planes_fragment:As,clipping_planes_pars_fragment:Rs,clipping_planes_pars_vertex:bs,clipping_planes_vertex:Cs,color_fragment:ws,color_pars_fragment:Ps,color_pars_vertex:Ls,color_vertex:Us,common:Ds,cube_uv_reflection_fragment:ys,defaultnormal_vertex:Is,displacementmap_pars_vertex:Ns,displacementmap_vertex:Os,emissivemap_fragment:Fs,emissivemap_pars_fragment:Bs,colorspace_fragment:Gs,colorspace_pars_fragment:Hs,envmap_fragment:Vs,envmap_common_pars_fragment:ks,envmap_pars_fragment:zs,envmap_pars_vertex:Ws,envmap_physical_pars_fragment:tc,envmap_vertex:Xs,fog_vertex:Ys,fog_pars_vertex:qs,fog_fragment:Ks,fog_pars_fragment:$s,gradientmap_pars_fragment:Zs,lightmap_pars_fragment:Qs,lights_lambert_fragment:Js,lights_lambert_pars_fragment:js,lights_pars_begin:ec,lights_toon_fragment:nc,lights_toon_pars_fragment:ic,lights_phong_fragment:ac,lights_phong_pars_fragment:rc,lights_physical_fragment:oc,lights_physical_pars_fragment:sc,lights_fragment_begin:cc,lights_fragment_maps:lc,lights_fragment_end:fc,logdepthbuf_fragment:dc,logdepthbuf_pars_fragment:uc,logdepthbuf_pars_vertex:pc,logdepthbuf_vertex:hc,map_fragment:mc,map_pars_fragment:_c,map_particle_fragment:gc,map_particle_pars_fragment:vc,metalnessmap_fragment:Ec,metalnessmap_pars_fragment:Sc,morphinstance_vertex:Mc,morphcolor_vertex:Tc,morphnormal_vertex:xc,morphtarget_pars_vertex:Ac,morphtarget_vertex:Rc,normal_fragment_begin:bc,normal_fragment_maps:Cc,normal_pars_fragment:wc,normal_pars_vertex:Pc,normal_vertex:Lc,normalmap_pars_fragment:Uc,clearcoat_normal_fragment_begin:Dc,clearcoat_normal_fragment_maps:yc,clearcoat_pars_fragment:Ic,iridescence_pars_fragment:Nc,opaque_fragment:Oc,packing:Fc,premultiplied_alpha_fragment:Bc,project_vertex:Gc,dithering_fragment:Hc,dithering_pars_fragment:Vc,roughnessmap_fragment:kc,roughnessmap_pars_fragment:zc,shadowmap_pars_fragment:Wc,shadowmap_pars_vertex:Xc,shadowmap_vertex:Yc,shadowmask_pars_fragment:qc,skinbase_vertex:Kc,skinning_pars_vertex:$c,skinning_vertex:Zc,skinnormal_vertex:Qc,specularmap_fragment:Jc,specularmap_pars_fragment:jc,tonemapping_fragment:el,tonemapping_pars_fragment:tl,transmission_fragment:nl,transmission_pars_fragment:il,uv_pars_fragment:al,uv_pars_vertex:rl,uv_vertex:ol,worldpos_vertex:sl,background_vert:cl,background_frag:ll,backgroundCube_vert:fl,backgroundCube_frag:dl,cube_vert:ul,cube_frag:pl,depth_vert:hl,depth_frag:ml,distanceRGBA_vert:_l,distanceRGBA_frag:gl,equirect_vert:vl,equirect_frag:El,linedashed_vert:Sl,linedashed_frag:Ml,meshbasic_vert:Tl,meshbasic_frag:xl,meshlambert_vert:Al,meshlambert_frag:Rl,meshmatcap_vert:bl,meshmatcap_frag:Cl,meshnormal_vert:wl,meshnormal_frag:Pl,meshphong_vert:Ll,meshphong_frag:Ul,meshphysical_vert:Dl,meshphysical_frag:yl,meshtoon_vert:Il,meshtoon_frag:Nl,points_vert:Ol,points_frag:Fl,shadow_vert:Bl,shadow_frag:Gl,sprite_vert:Hl,sprite_frag:Vl},ie={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},xt={basic:{uniforms:ht([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:ht([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:ht([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:ht([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:ht([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:ht([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:ht([ie.points,ie.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:ht([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:ht([ie.common,ie.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:ht([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:ht([ie.sprite,ie.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:ht([ie.common,ie.displacementmap,{referencePosition:{value:new we},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:ht([ie.lights,ie.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};xt.physical={uniforms:ht([xt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const Cn={r:0,b:0,g:0},Ot=new lr,kl=new en;function zl(e,n,t,i,a,r,d){const l=new Be(0);let E=r===!0?0:1,_,M,m=null,v=0,x=null;function D(A){let S=A.isScene===!0?A.background:null;return S&&S.isTexture&&(S=(A.backgroundBlurriness>0?t:n).get(S)),S}function w(A){let S=!1;const N=D(A);N===null?o(l,E):N&&N.isColor&&(o(N,1),S=!0);const L=e.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,d):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,d),(e.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function f(A,S){const N=D(S);N&&(N.isCubeTexture||N.mapping===kn)?(M===void 0&&(M=new ot(new vn(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:ma(xt.backgroundCube.uniforms),vertexShader:xt.backgroundCube.vertexShader,fragmentShader:xt.backgroundCube.fragmentShader,side:St,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),M.geometry.deleteAttribute("normal"),M.geometry.deleteAttribute("uv"),M.onBeforeRender=function(L,O,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(M.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(M)),Ot.copy(S.backgroundRotation),Ot.x*=-1,Ot.y*=-1,Ot.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ot.y*=-1,Ot.z*=-1),M.material.uniforms.envMap.value=N,M.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,M.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,M.material.uniforms.backgroundRotation.value.setFromMatrix4(kl.makeRotationFromEuler(Ot)),M.material.toneMapped=rt.getTransfer(N.colorSpace)!==$e,(m!==N||v!==N.version||x!==e.toneMapping)&&(M.material.needsUpdate=!0,m=N,v=N.version,x=e.toneMapping),M.layers.enableAll(),A.unshift(M,M.geometry,M.material,0,0,null)):N&&N.isTexture&&(_===void 0&&(_=new ot(new Ci(2,2),new Wt({name:"BackgroundMaterial",uniforms:ma(xt.background.uniforms),vertexShader:xt.background.vertexShader,fragmentShader:xt.background.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),Object.defineProperty(_.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(_)),_.material.uniforms.t2D.value=N,_.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,_.material.toneMapped=rt.getTransfer(N.colorSpace)!==$e,N.matrixAutoUpdate===!0&&N.updateMatrix(),_.material.uniforms.uvTransform.value.copy(N.matrix),(m!==N||v!==N.version||x!==e.toneMapping)&&(_.material.needsUpdate=!0,m=N,v=N.version,x=e.toneMapping),_.layers.enableAll(),A.unshift(_,_.geometry,_.material,0,0,null))}function o(A,S){A.getRGB(Cn,cr(e)),i.buffers.color.setClear(Cn.r,Cn.g,Cn.b,S,d)}function C(){M!==void 0&&(M.geometry.dispose(),M.material.dispose(),M=void 0),_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0)}return{getClearColor:function(){return l},setClearColor:function(A,S=1){l.set(A),E=S,o(l,E)},getClearAlpha:function(){return E},setClearAlpha:function(A){E=A,o(l,E)},render:w,addToRenderList:f,dispose:C}}function Wl(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=v(null);let r=a,d=!1;function l(u,P,B,X,Y){let $=!1;const W=m(X,B,P);r!==W&&(r=W,_(r.object)),$=x(u,X,B,Y),$&&D(u,X,B,Y),Y!==null&&n.update(Y,e.ELEMENT_ARRAY_BUFFER),($||d)&&(d=!1,S(u,P,B,X),Y!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(Y).buffer))}function E(){return e.createVertexArray()}function _(u){return e.bindVertexArray(u)}function M(u){return e.deleteVertexArray(u)}function m(u,P,B){const X=B.wireframe===!0;let Y=i[u.id];Y===void 0&&(Y={},i[u.id]=Y);let $=Y[P.id];$===void 0&&($={},Y[P.id]=$);let W=$[X];return W===void 0&&(W=v(E()),$[X]=W),W}function v(u){const P=[],B=[],X=[];for(let Y=0;Y<t;Y++)P[Y]=0,B[Y]=0,X[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:X,object:u,attributes:{},index:null}}function x(u,P,B,X){const Y=r.attributes,$=P.attributes;let W=0;const ne=B.getAttributes();for(const H in ne)if(ne[H].location>=0){const Te=Y[H];let De=$[H];if(De===void 0&&(H==="instanceMatrix"&&u.instanceMatrix&&(De=u.instanceMatrix),H==="instanceColor"&&u.instanceColor&&(De=u.instanceColor)),Te===void 0||Te.attribute!==De||De&&Te.data!==De.data)return!0;W++}return r.attributesNum!==W||r.index!==X}function D(u,P,B,X){const Y={},$=P.attributes;let W=0;const ne=B.getAttributes();for(const H in ne)if(ne[H].location>=0){let Te=$[H];Te===void 0&&(H==="instanceMatrix"&&u.instanceMatrix&&(Te=u.instanceMatrix),H==="instanceColor"&&u.instanceColor&&(Te=u.instanceColor));const De={};De.attribute=Te,Te&&Te.data&&(De.data=Te.data),Y[H]=De,W++}r.attributes=Y,r.attributesNum=W,r.index=X}function w(){const u=r.newAttributes;for(let P=0,B=u.length;P<B;P++)u[P]=0}function f(u){o(u,0)}function o(u,P){const B=r.newAttributes,X=r.enabledAttributes,Y=r.attributeDivisors;B[u]=1,X[u]===0&&(e.enableVertexAttribArray(u),X[u]=1),Y[u]!==P&&(e.vertexAttribDivisor(u,P),Y[u]=P)}function C(){const u=r.newAttributes,P=r.enabledAttributes;for(let B=0,X=P.length;B<X;B++)P[B]!==u[B]&&(e.disableVertexAttribArray(B),P[B]=0)}function A(u,P,B,X,Y,$,W){W===!0?e.vertexAttribIPointer(u,P,B,Y,$):e.vertexAttribPointer(u,P,B,X,Y,$)}function S(u,P,B,X){w();const Y=X.attributes,$=B.getAttributes(),W=P.defaultAttributeValues;for(const ne in $){const H=$[ne];if(H.location>=0){let ge=Y[ne];if(ge===void 0&&(ne==="instanceMatrix"&&u.instanceMatrix&&(ge=u.instanceMatrix),ne==="instanceColor"&&u.instanceColor&&(ge=u.instanceColor)),ge!==void 0){const Te=ge.normalized,De=ge.itemSize,Ve=n.get(ge);if(Ve===void 0)continue;const it=Ve.buffer,tt=Ve.type,We=Ve.bytesPerElement,V=tt===e.INT||tt===e.UNSIGNED_INT||ge.gpuType===ir;if(ge.isInterleavedBufferAttribute){const K=ge.data,le=K.stride,Ce=ge.offset;if(K.isInstancedInterleavedBuffer){for(let Ee=0;Ee<H.locationSize;Ee++)o(H.location+Ee,K.meshPerAttribute);u.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Ee=0;Ee<H.locationSize;Ee++)f(H.location+Ee);e.bindBuffer(e.ARRAY_BUFFER,it);for(let Ee=0;Ee<H.locationSize;Ee++)A(H.location+Ee,De/H.locationSize,tt,Te,le*We,(Ce+De/H.locationSize*Ee)*We,V)}else{if(ge.isInstancedBufferAttribute){for(let K=0;K<H.locationSize;K++)o(H.location+K,ge.meshPerAttribute);u.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let K=0;K<H.locationSize;K++)f(H.location+K);e.bindBuffer(e.ARRAY_BUFFER,it);for(let K=0;K<H.locationSize;K++)A(H.location+K,De/H.locationSize,tt,Te,De*We,De/H.locationSize*K*We,V)}}else if(W!==void 0){const Te=W[ne];if(Te!==void 0)switch(Te.length){case 2:e.vertexAttrib2fv(H.location,Te);break;case 3:e.vertexAttrib3fv(H.location,Te);break;case 4:e.vertexAttrib4fv(H.location,Te);break;default:e.vertexAttrib1fv(H.location,Te)}}}}C()}function N(){z();for(const u in i){const P=i[u];for(const B in P){const X=P[B];for(const Y in X)M(X[Y].object),delete X[Y];delete P[B]}delete i[u]}}function L(u){if(i[u.id]===void 0)return;const P=i[u.id];for(const B in P){const X=P[B];for(const Y in X)M(X[Y].object),delete X[Y];delete P[B]}delete i[u.id]}function O(u){for(const P in i){const B=i[P];if(B[u.id]===void 0)continue;const X=B[u.id];for(const Y in X)M(X[Y].object),delete X[Y];delete B[u.id]}}function z(){h(),d=!0,r!==a&&(r=a,_(r.object))}function h(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:l,reset:z,resetDefaultState:h,dispose:N,releaseStatesOfGeometry:L,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:f,disableUnusedAttributes:C}}function Xl(e,n,t){let i;function a(_){i=_}function r(_,M){e.drawArrays(i,_,M),t.update(M,i,1)}function d(_,M,m){m!==0&&(e.drawArraysInstanced(i,_,M,m),t.update(M,i,m))}function l(_,M,m){if(m===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,_,0,M,0,m);let x=0;for(let D=0;D<m;D++)x+=M[D];t.update(x,i,1)}function E(_,M,m,v){if(m===0)return;const x=n.get("WEBGL_multi_draw");if(x===null)for(let D=0;D<_.length;D++)d(_[D],M[D],v[D]);else{x.multiDrawArraysInstancedWEBGL(i,_,0,M,0,v,0,m);let D=0;for(let w=0;w<m;w++)D+=M[w]*v[w];t.update(D,i,1)}}this.setMode=a,this.render=r,this.renderInstances=d,this.renderMultiDraw=l,this.renderMultiDrawInstances=E}function Yl(e,n,t,i){let a;function r(){if(a!==void 0)return a;if(n.has("EXT_texture_filter_anisotropic")===!0){const O=n.get("EXT_texture_filter_anisotropic");a=e.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function d(O){return!(O!==wt&&i.convert(O)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(O){const z=O===Hn&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(O!==zt&&i.convert(O)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ht&&!z)}function E(O){if(O==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let _=t.precision!==void 0?t.precision:"highp";const M=E(_);M!==_&&(console.warn("THREE.WebGLRenderer:",_,"not supported, using",M,"instead."),_=M);const m=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),x=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),D=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=e.getParameter(e.MAX_TEXTURE_SIZE),f=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),o=e.getParameter(e.MAX_VERTEX_ATTRIBS),C=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),A=e.getParameter(e.MAX_VARYING_VECTORS),S=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),N=D>0,L=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:E,textureFormatReadable:d,textureTypeReadable:l,precision:_,logarithmicDepthBuffer:m,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:D,maxTextureSize:w,maxCubemapSize:f,maxAttributes:o,maxVertexUniforms:C,maxVaryings:A,maxFragmentUniforms:S,vertexTextures:N,maxSamples:L}}function ql(e){const n=this;let t=null,i=0,a=!1,r=!1;const d=new fo,l=new He,E={value:null,needsUpdate:!1};this.uniform=E,this.numPlanes=0,this.numIntersection=0,this.init=function(m,v){const x=m.length!==0||v||i!==0||a;return a=v,i=m.length,x},this.beginShadows=function(){r=!0,M(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,v){t=M(m,v,0)},this.setState=function(m,v,x){const D=m.clippingPlanes,w=m.clipIntersection,f=m.clipShadows,o=e.get(m);if(!a||D===null||D.length===0||r&&!f)r?M(null):_();else{const C=r?0:i,A=C*4;let S=o.clippingState||null;E.value=S,S=M(D,v,A,x);for(let N=0;N!==A;++N)S[N]=t[N];o.clippingState=S,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=C}};function _(){E.value!==t&&(E.value=t,E.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function M(m,v,x,D){const w=m!==null?m.length:0;let f=null;if(w!==0){if(f=E.value,D!==!0||f===null){const o=x+w*4,C=v.matrixWorldInverse;l.getNormalMatrix(C),(f===null||f.length<o)&&(f=new Float32Array(o));for(let A=0,S=x;A!==w;++A,S+=4)d.copy(m[A]).applyMatrix4(C,l),d.normal.toArray(f,S),f[S+3]=d.constant}E.value=f,E.needsUpdate=!0}return n.numPlanes=w,n.numIntersection=0,f}}function Kl(e){let n=new WeakMap;function t(d,l){return l===vi?d.mapping=En:l===Ei&&(d.mapping=nn),d}function i(d){if(d&&d.isTexture){const l=d.mapping;if(l===vi||l===Ei)if(n.has(d)){const E=n.get(d).texture;return t(E,d.mapping)}else{const E=d.image;if(E&&E.height>0){const _=new bo(E.height);return _.fromEquirectangularTexture(e,d),n.set(d,_),d.addEventListener("dispose",a),t(_.texture,d.mapping)}else return null}}return d}function a(d){const l=d.target;l.removeEventListener("dispose",a);const E=n.get(l);E!==void 0&&(n.delete(l),E.dispose())}function r(){n=new WeakMap}return{get:i,dispose:r}}const Zt=4,Ea=[.125,.215,.35,.446,.526,.582],Gt=20,jn=new Lo,Sa=new Be;let ei=null,ti=0,ni=0,ii=!1;const Bt=(1+Math.sqrt(5))/2,Yt=1/Bt,Ma=[new we(-Bt,Yt,0),new we(Bt,Yt,0),new we(-Yt,0,Bt),new we(Yt,0,Bt),new we(0,Bt,-Yt),new we(0,Bt,Yt),new we(-1,1,-1),new we(1,1,-1),new we(-1,1,1),new we(1,1,1)],$l=new we;class Ta{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,t=0,i=.1,a=100,r={}){const{size:d=256,position:l=$l}=r;ei=this._renderer.getRenderTarget(),ti=this._renderer.getActiveCubeFace(),ni=this._renderer.getActiveMipmapLevel(),ii=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const E=this._allocateTargets();return E.depthBuffer=!0,this._sceneToCubeUV(n,i,a,E,l),t>0&&this._blur(E,0,0,t),this._applyPMREM(E),this._cleanup(E),E}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ra(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Aa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(ei,ti,ni),this._renderer.xr.enabled=ii,n.scissorTest=!1,wn(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===En||n.mapping===nn?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),ei=this._renderer.getRenderTarget(),ti=this._renderer.getActiveCubeFace(),ni=this._renderer.getActiveMipmapLevel(),ii=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:Hn,format:wt,colorSpace:Vn,depthBuffer:!1},a=xa(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xa(n,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zl(r)),this._blurMaterial=Ql(r,n,t)}return a}_compileMaterial(n){const t=new ot(this._lodPlanes[0],n);this._renderer.compile(t,jn)}_sceneToCubeUV(n,t,i,a,r){const E=new fn(90,1,t,i),_=[1,-1,1,1,1,1],M=[1,1,1,-1,-1,-1],m=this._renderer,v=m.autoClear,x=m.toneMapping;m.getClearColor(Sa),m.toneMapping=yt,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(a),m.clearDepth(),m.setRenderTarget(null));const w=new Sn({name:"PMREM.Background",side:St,depthWrite:!1,depthTest:!1}),f=new ot(new vn,w);let o=!1;const C=n.background;C?C.isColor&&(w.color.copy(C),n.background=null,o=!0):(w.color.copy(Sa),o=!0);for(let A=0;A<6;A++){const S=A%3;S===0?(E.up.set(0,_[A],0),E.position.set(r.x,r.y,r.z),E.lookAt(r.x+M[A],r.y,r.z)):S===1?(E.up.set(0,0,_[A]),E.position.set(r.x,r.y,r.z),E.lookAt(r.x,r.y+M[A],r.z)):(E.up.set(0,_[A],0),E.position.set(r.x,r.y,r.z),E.lookAt(r.x,r.y,r.z+M[A]));const N=this._cubeSize;wn(a,S*N,A>2?N:0,N,N),m.setRenderTarget(a),o&&m.render(f,E),m.render(n,E)}f.geometry.dispose(),f.material.dispose(),m.toneMapping=x,m.autoClear=v,n.background=C}_textureToCubeUV(n,t){const i=this._renderer,a=n.mapping===En||n.mapping===nn;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ra()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Aa());const r=a?this._cubemapMaterial:this._equirectMaterial,d=new ot(this._lodPlanes[0],r),l=r.uniforms;l.envMap.value=n;const E=this._cubeSize;wn(t,0,0,3*E,2*E),i.setRenderTarget(t),i.render(d,jn)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let r=1;r<a;r++){const d=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=Ma[(a-r-1)%Ma.length];this._blur(n,r-1,r,d,l)}t.autoClear=i}_blur(n,t,i,a,r){const d=this._pingPongRenderTarget;this._halfBlur(n,d,t,i,a,"latitudinal",r),this._halfBlur(d,n,i,i,a,"longitudinal",r)}_halfBlur(n,t,i,a,r,d,l){const E=this._renderer,_=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const M=3,m=new ot(this._lodPlanes[a],_),v=_.uniforms,x=this._sizeLods[i]-1,D=isFinite(r)?Math.PI/(2*x):2*Math.PI/(2*Gt-1),w=r/D,f=isFinite(r)?1+Math.floor(M*w):Gt;f>Gt&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Gt}`);const o=[];let C=0;for(let O=0;O<Gt;++O){const z=O/w,h=Math.exp(-z*z/2);o.push(h),O===0?C+=h:O<f&&(C+=2*h)}for(let O=0;O<o.length;O++)o[O]=o[O]/C;v.envMap.value=n.texture,v.samples.value=f,v.weights.value=o,v.latitudinal.value=d==="latitudinal",l&&(v.poleAxis.value=l);const{_lodMax:A}=this;v.dTheta.value=D,v.mipInt.value=A-i;const S=this._sizeLods[a],N=3*S*(a>A-Zt?a-A+Zt:0),L=4*(this._cubeSize-S);wn(t,N,L,3*S,2*S),E.setRenderTarget(t),E.render(m,jn)}}function Zl(e){const n=[],t=[],i=[];let a=e;const r=e-Zt+1+Ea.length;for(let d=0;d<r;d++){const l=Math.pow(2,a);t.push(l);let E=1/l;d>e-Zt?E=Ea[d-e+Zt-1]:d===0&&(E=0),i.push(E);const _=1/(l-2),M=-_,m=1+_,v=[M,M,m,M,m,m,M,M,m,m,M,m],x=6,D=6,w=3,f=2,o=1,C=new Float32Array(w*D*x),A=new Float32Array(f*D*x),S=new Float32Array(o*D*x);for(let L=0;L<x;L++){const O=L%3*2/3-1,z=L>2?0:-1,h=[O,z,0,O+2/3,z,0,O+2/3,z+1,0,O,z,0,O+2/3,z+1,0,O,z+1,0];C.set(h,w*D*L),A.set(v,f*D*L);const u=[L,L,L,L,L,L];S.set(u,o*D*L)}const N=new Ja;N.setAttribute("position",new Dn(C,w)),N.setAttribute("uv",new Dn(A,f)),N.setAttribute("faceIndex",new Dn(S,o)),n.push(N),a>Zt&&a--}return{lodPlanes:n,sizeLods:t,sigmas:i}}function xa(e,n,t){const i=new tn(e,n,t);return i.texture.mapping=kn,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wn(e,n,t,i,a){e.viewport.set(n,t,i,a),e.scissor.set(n,t,i,a)}function Ql(e,n,t){const i=new Float32Array(Gt),a=new we(0,1,0);return new Wt({name:"SphericalGaussianBlur",defines:{n:Gt,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:wi(),fragmentShader:`

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
		`,blending:kt,depthTest:!1,depthWrite:!1})}function Aa(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wi(),fragmentShader:`

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
		`,blending:kt,depthTest:!1,depthWrite:!1})}function Ra(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kt,depthTest:!1,depthWrite:!1})}function wi(){return`

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
	`}function Jl(e){let n=new WeakMap,t=null;function i(l){if(l&&l.isTexture){const E=l.mapping,_=E===vi||E===Ei,M=E===En||E===nn;if(_||M){let m=n.get(l);const v=m!==void 0?m.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==v)return t===null&&(t=new Ta(e)),m=_?t.fromEquirectangular(l,m):t.fromCubemap(l,m),m.texture.pmremVersion=l.pmremVersion,n.set(l,m),m.texture;if(m!==void 0)return m.texture;{const x=l.image;return _&&x&&x.height>0||M&&x&&a(x)?(t===null&&(t=new Ta(e)),m=_?t.fromEquirectangular(l):t.fromCubemap(l),m.texture.pmremVersion=l.pmremVersion,n.set(l,m),l.addEventListener("dispose",r),m.texture):null}}}return l}function a(l){let E=0;const _=6;for(let M=0;M<_;M++)l[M]!==void 0&&E++;return E===_}function r(l){const E=l.target;E.removeEventListener("dispose",r);const _=n.get(E);_!==void 0&&(n.delete(E),_.dispose())}function d(){n=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:d}}function jl(e){const n={};function t(i){if(n[i]!==void 0)return n[i];let a;switch(i){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(i)}return n[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&fi("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function ef(e,n,t,i){const a={},r=new WeakMap;function d(m){const v=m.target;v.index!==null&&n.remove(v.index);for(const D in v.attributes)n.remove(v.attributes[D]);v.removeEventListener("dispose",d),delete a[v.id];const x=r.get(v);x&&(n.remove(x),r.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function l(m,v){return a[v.id]===!0||(v.addEventListener("dispose",d),a[v.id]=!0,t.memory.geometries++),v}function E(m){const v=m.attributes;for(const x in v)n.update(v[x],e.ARRAY_BUFFER)}function _(m){const v=[],x=m.index,D=m.attributes.position;let w=0;if(x!==null){const C=x.array;w=x.version;for(let A=0,S=C.length;A<S;A+=3){const N=C[A+0],L=C[A+1],O=C[A+2];v.push(N,L,L,O,O,N)}}else if(D!==void 0){const C=D.array;w=D.version;for(let A=0,S=C.length/3-1;A<S;A+=3){const N=A+0,L=A+1,O=A+2;v.push(N,L,L,O,O,N)}}else return;const f=new(yo(v)?Uo:Do)(v,1);f.version=w;const o=r.get(m);o&&n.remove(o),r.set(m,f)}function M(m){const v=r.get(m);if(v){const x=m.index;x!==null&&v.version<x.version&&_(m)}else _(m);return r.get(m)}return{get:l,update:E,getWireframeAttribute:M}}function tf(e,n,t){let i;function a(v){i=v}let r,d;function l(v){r=v.type,d=v.bytesPerElement}function E(v,x){e.drawElements(i,x,r,v*d),t.update(x,i,1)}function _(v,x,D){D!==0&&(e.drawElementsInstanced(i,x,r,v*d,D),t.update(x,i,D))}function M(v,x,D){if(D===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,r,v,0,D);let f=0;for(let o=0;o<D;o++)f+=x[o];t.update(f,i,1)}function m(v,x,D,w){if(D===0)return;const f=n.get("WEBGL_multi_draw");if(f===null)for(let o=0;o<v.length;o++)_(v[o]/d,x[o],w[o]);else{f.multiDrawElementsInstancedWEBGL(i,x,0,r,v,0,w,0,D);let o=0;for(let C=0;C<D;C++)o+=x[C]*w[C];t.update(o,i,1)}}this.setMode=a,this.setIndex=l,this.render=E,this.renderInstances=_,this.renderMultiDraw=M,this.renderMultiDrawInstances=m}function nf(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,d,l){switch(t.calls++,d){case e.TRIANGLES:t.triangles+=l*(r/3);break;case e.LINES:t.lines+=l*(r/2);break;case e.LINE_STRIP:t.lines+=l*(r-1);break;case e.LINE_LOOP:t.lines+=l*r;break;case e.POINTS:t.points+=l*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:a,update:i}}function af(e,n,t){const i=new WeakMap,a=new mt;function r(d,l,E){const _=d.morphTargetInfluences,M=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,m=M!==void 0?M.length:0;let v=i.get(l);if(v===void 0||v.count!==m){let h=function(){O.dispose(),i.delete(l),l.removeEventListener("dispose",h)};v!==void 0&&v.texture.dispose();const x=l.morphAttributes.position!==void 0,D=l.morphAttributes.normal!==void 0,w=l.morphAttributes.color!==void 0,f=l.morphAttributes.position||[],o=l.morphAttributes.normal||[],C=l.morphAttributes.color||[];let A=0;x===!0&&(A=1),D===!0&&(A=2),w===!0&&(A=3);let S=l.attributes.position.count*A,N=1;S>n.maxTextureSize&&(N=Math.ceil(S/n.maxTextureSize),S=n.maxTextureSize);const L=new Float32Array(S*N*4*m),O=new sr(L,S,N,m);O.type=Ht,O.needsUpdate=!0;const z=A*4;for(let u=0;u<m;u++){const P=f[u],B=o[u],X=C[u],Y=S*N*4*u;for(let $=0;$<P.count;$++){const W=$*z;x===!0&&(a.fromBufferAttribute(P,$),L[Y+W+0]=a.x,L[Y+W+1]=a.y,L[Y+W+2]=a.z,L[Y+W+3]=0),D===!0&&(a.fromBufferAttribute(B,$),L[Y+W+4]=a.x,L[Y+W+5]=a.y,L[Y+W+6]=a.z,L[Y+W+7]=0),w===!0&&(a.fromBufferAttribute(X,$),L[Y+W+8]=a.x,L[Y+W+9]=a.y,L[Y+W+10]=a.z,L[Y+W+11]=X.itemSize===4?a.w:1)}}v={count:m,texture:O,size:new ut(S,N)},i.set(l,v),l.addEventListener("dispose",h)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)E.getUniforms().setValue(e,"morphTexture",d.morphTexture,t);else{let x=0;for(let w=0;w<_.length;w++)x+=_[w];const D=l.morphTargetsRelative?1:1-x;E.getUniforms().setValue(e,"morphTargetBaseInfluence",D),E.getUniforms().setValue(e,"morphTargetInfluences",_)}E.getUniforms().setValue(e,"morphTargetsTexture",v.texture,t),E.getUniforms().setValue(e,"morphTargetsTextureSize",v.size)}return{update:r}}function rf(e,n,t,i){let a=new WeakMap;function r(E){const _=i.render.frame,M=E.geometry,m=n.get(E,M);if(a.get(m)!==_&&(n.update(m),a.set(m,_)),E.isInstancedMesh&&(E.hasEventListener("dispose",l)===!1&&E.addEventListener("dispose",l),a.get(E)!==_&&(t.update(E.instanceMatrix,e.ARRAY_BUFFER),E.instanceColor!==null&&t.update(E.instanceColor,e.ARRAY_BUFFER),a.set(E,_))),E.isSkinnedMesh){const v=E.skeleton;a.get(v)!==_&&(v.update(),a.set(v,_))}return m}function d(){a=new WeakMap}function l(E){const _=E.target;_.removeEventListener("dispose",l),t.remove(_.instanceMatrix),_.instanceColor!==null&&t.remove(_.instanceColor)}return{update:r,dispose:d}}const pr=new Wo,ba=new Za(1,1),hr=new sr,mr=new zo,_r=new ko,Ca=[],wa=[],Pa=new Float32Array(16),La=new Float32Array(9),Ua=new Float32Array(4);function rn(e,n,t){const i=e[0];if(i<=0||i>0)return e;const a=n*t;let r=Ca[a];if(r===void 0&&(r=new Float32Array(a),Ca[a]=r),n!==0){i.toArray(r,0);for(let d=1,l=0;d!==n;++d)l+=t,e[d].toArray(r,l)}return r}function st(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function ct(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function zn(e,n){let t=wa[n];t===void 0&&(t=new Int32Array(n),wa[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function of(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function sf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(st(t,n))return;e.uniform2fv(this.addr,n),ct(t,n)}}function cf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(st(t,n))return;e.uniform3fv(this.addr,n),ct(t,n)}}function lf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(st(t,n))return;e.uniform4fv(this.addr,n),ct(t,n)}}function ff(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(st(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),ct(t,n)}else{if(st(t,i))return;Ua.set(i),e.uniformMatrix2fv(this.addr,!1,Ua),ct(t,i)}}function df(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(st(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),ct(t,n)}else{if(st(t,i))return;La.set(i),e.uniformMatrix3fv(this.addr,!1,La),ct(t,i)}}function uf(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(st(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),ct(t,n)}else{if(st(t,i))return;Pa.set(i),e.uniformMatrix4fv(this.addr,!1,Pa),ct(t,i)}}function pf(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function hf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(st(t,n))return;e.uniform2iv(this.addr,n),ct(t,n)}}function mf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(st(t,n))return;e.uniform3iv(this.addr,n),ct(t,n)}}function _f(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(st(t,n))return;e.uniform4iv(this.addr,n),ct(t,n)}}function gf(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function vf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(st(t,n))return;e.uniform2uiv(this.addr,n),ct(t,n)}}function Ef(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(st(t,n))return;e.uniform3uiv(this.addr,n),ct(t,n)}}function Sf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(st(t,n))return;e.uniform4uiv(this.addr,n),ct(t,n)}}function Mf(e,n,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let r;this.type===e.SAMPLER_2D_SHADOW?(ba.compareFunction=Qa,r=ba):r=pr,t.setTexture2D(n||r,a)}function Tf(e,n,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(n||mr,a)}function xf(e,n,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(n||_r,a)}function Af(e,n,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(n||hr,a)}function Rf(e){switch(e){case 5126:return of;case 35664:return sf;case 35665:return cf;case 35666:return lf;case 35674:return ff;case 35675:return df;case 35676:return uf;case 5124:case 35670:return pf;case 35667:case 35671:return hf;case 35668:case 35672:return mf;case 35669:case 35673:return _f;case 5125:return gf;case 36294:return vf;case 36295:return Ef;case 36296:return Sf;case 35678:case 36198:case 36298:case 36306:case 35682:return Mf;case 35679:case 36299:case 36307:return Tf;case 35680:case 36300:case 36308:case 36293:return xf;case 36289:case 36303:case 36311:case 36292:return Af}}function bf(e,n){e.uniform1fv(this.addr,n)}function Cf(e,n){const t=rn(n,this.size,2);e.uniform2fv(this.addr,t)}function wf(e,n){const t=rn(n,this.size,3);e.uniform3fv(this.addr,t)}function Pf(e,n){const t=rn(n,this.size,4);e.uniform4fv(this.addr,t)}function Lf(e,n){const t=rn(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function Uf(e,n){const t=rn(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function Df(e,n){const t=rn(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function yf(e,n){e.uniform1iv(this.addr,n)}function If(e,n){e.uniform2iv(this.addr,n)}function Nf(e,n){e.uniform3iv(this.addr,n)}function Of(e,n){e.uniform4iv(this.addr,n)}function Ff(e,n){e.uniform1uiv(this.addr,n)}function Bf(e,n){e.uniform2uiv(this.addr,n)}function Gf(e,n){e.uniform3uiv(this.addr,n)}function Hf(e,n){e.uniform4uiv(this.addr,n)}function Vf(e,n,t){const i=this.cache,a=n.length,r=zn(t,a);st(i,r)||(e.uniform1iv(this.addr,r),ct(i,r));for(let d=0;d!==a;++d)t.setTexture2D(n[d]||pr,r[d])}function kf(e,n,t){const i=this.cache,a=n.length,r=zn(t,a);st(i,r)||(e.uniform1iv(this.addr,r),ct(i,r));for(let d=0;d!==a;++d)t.setTexture3D(n[d]||mr,r[d])}function zf(e,n,t){const i=this.cache,a=n.length,r=zn(t,a);st(i,r)||(e.uniform1iv(this.addr,r),ct(i,r));for(let d=0;d!==a;++d)t.setTextureCube(n[d]||_r,r[d])}function Wf(e,n,t){const i=this.cache,a=n.length,r=zn(t,a);st(i,r)||(e.uniform1iv(this.addr,r),ct(i,r));for(let d=0;d!==a;++d)t.setTexture2DArray(n[d]||hr,r[d])}function Xf(e){switch(e){case 5126:return bf;case 35664:return Cf;case 35665:return wf;case 35666:return Pf;case 35674:return Lf;case 35675:return Uf;case 35676:return Df;case 5124:case 35670:return yf;case 35667:case 35671:return If;case 35668:case 35672:return Nf;case 35669:case 35673:return Of;case 5125:return Ff;case 36294:return Bf;case 36295:return Gf;case 36296:return Hf;case 35678:case 36198:case 36298:case 36306:case 35682:return Vf;case 35679:case 36299:case 36307:return kf;case 35680:case 36300:case 36308:case 36293:return zf;case 36289:case 36303:case 36311:case 36292:return Wf}}class Yf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Rf(t.type)}}class qf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xf(t.type)}}class Kf{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const a=this.seq;for(let r=0,d=a.length;r!==d;++r){const l=a[r];l.setValue(n,t[l.id],i)}}}const ai=/(\w+)(\])?(\[|\.)?/g;function Da(e,n){e.seq.push(n),e.map[n.id]=n}function $f(e,n,t){const i=e.name,a=i.length;for(ai.lastIndex=0;;){const r=ai.exec(i),d=ai.lastIndex;let l=r[1];const E=r[2]==="]",_=r[3];if(E&&(l=l|0),_===void 0||_==="["&&d+2===a){Da(t,_===void 0?new Yf(l,e,n):new qf(l,e,n));break}else{let m=t.map[l];m===void 0&&(m=new Kf(l),Da(t,m)),t=m}}}class In{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const r=n.getActiveUniform(t,a),d=n.getUniformLocation(t,r.name);$f(r,d,this)}}setValue(n,t,i,a){const r=this.map[t];r!==void 0&&r.setValue(n,i,a)}setOptional(n,t,i){const a=t[i];a!==void 0&&this.setValue(n,i,a)}static upload(n,t,i,a){for(let r=0,d=t.length;r!==d;++r){const l=t[r],E=i[l.id];E.needsUpdate!==!1&&l.setValue(n,E.value,a)}}static seqWithValue(n,t){const i=[];for(let a=0,r=n.length;a!==r;++a){const d=n[a];d.id in t&&i.push(d)}return i}}function ya(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const Zf=37297;let Qf=0;function Jf(e,n){const t=e.split(`
`),i=[],a=Math.max(n-6,0),r=Math.min(n+6,t.length);for(let d=a;d<r;d++){const l=d+1;i.push(`${l===n?">":" "} ${l}: ${t[d]}`)}return i.join(`
`)}const Ia=new He;function jf(e){rt._getMatrix(Ia,rt.workingColorSpace,e);const n=`mat3( ${Ia.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(e)){case fr:return[n,"LinearTransferOETF"];case $e:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function Na(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),r=(e.getShaderInfoLog(n)||"").trim();if(i&&r==="")return"";const d=/ERROR: 0:(\d+)/.exec(r);if(d){const l=parseInt(d[1]);return t.toUpperCase()+`

`+r+`

`+Jf(e.getShaderSource(n),l)}else return r}function ed(e,n){const t=jf(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function td(e,n){let t;switch(n){case Vo:t="Linear";break;case Ho:t="Reinhard";break;case Go:t="Cineon";break;case dr:t="ACESFilmic";break;case Bo:t="AgX";break;case Fo:t="Neutral";break;case Oo:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),t="Linear"}return"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Pn=new we;function nd(){rt.getLuminanceCoefficients(Pn);const e=Pn.x.toFixed(4),n=Pn.y.toFixed(4),t=Pn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function id(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ln).join(`
`)}function ad(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function rd(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=e.getActiveAttrib(n,a),d=r.name;let l=1;r.type===e.FLOAT_MAT2&&(l=2),r.type===e.FLOAT_MAT3&&(l=3),r.type===e.FLOAT_MAT4&&(l=4),t[d]={type:r.type,location:e.getAttribLocation(n,d),locationSize:l}}return t}function ln(e){return e!==""}function Oa(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function Fa(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const od=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ti(e){return e.replace(od,cd)}const sd=new Map;function cd(e,n){let t=Ie[n];if(t===void 0){const i=sd.get(n);if(i!==void 0)t=Ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return Ti(t)}const ld=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ba(e){return e.replace(ld,fd)}function fd(e,n,t,i){let a="";for(let r=parseInt(n);r<parseInt(t);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Ga(e){let n=`precision ${e.precision} float;
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
#define LOW_PRECISION`),n}function dd(e){let n="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===ja?n="SHADOWMAP_TYPE_PCF":e.shadowMapType===No?n="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Rt&&(n="SHADOWMAP_TYPE_VSM"),n}function ud(e){let n="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case En:case nn:n="ENVMAP_TYPE_CUBE";break;case kn:n="ENVMAP_TYPE_CUBE_UV";break}return n}function pd(e){let n="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case nn:n="ENVMAP_MODE_REFRACTION";break}return n}function hd(e){let n="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Ko:n="ENVMAP_BLENDING_MULTIPLY";break;case qo:n="ENVMAP_BLENDING_MIX";break;case Yo:n="ENVMAP_BLENDING_ADD";break}return n}function md(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function _d(e,n,t,i){const a=e.getContext(),r=t.defines;let d=t.vertexShader,l=t.fragmentShader;const E=dd(t),_=ud(t),M=pd(t),m=hd(t),v=md(t),x=id(t),D=ad(r),w=a.createProgram();let f,o,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,D].filter(ln).join(`
`),f.length>0&&(f+=`
`),o=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,D].filter(ln).join(`
`),o.length>0&&(o+=`
`)):(f=[Ga(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,D,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+M:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+E:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ln).join(`
`),o=[Ga(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,D,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.envMap?"#define "+M:"",t.envMap?"#define "+m:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+E:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yt?"#define TONE_MAPPING":"",t.toneMapping!==yt?Ie.tonemapping_pars_fragment:"",t.toneMapping!==yt?td("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,ed("linearToOutputTexel",t.outputColorSpace),nd(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ln).join(`
`)),d=Ti(d),d=Oa(d,t),d=Fa(d,t),l=Ti(l),l=Oa(l,t),l=Fa(l,t),d=Ba(d),l=Ba(l),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,f=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,o=["#define varying in",t.glslVersion===ga?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ga?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+o);const A=C+f+d,S=C+o+l,N=ya(a,a.VERTEX_SHADER,A),L=ya(a,a.FRAGMENT_SHADER,S);a.attachShader(w,N),a.attachShader(w,L),t.index0AttributeName!==void 0?a.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function O(P){if(e.debug.checkShaderErrors){const B=a.getProgramInfoLog(w)||"",X=a.getShaderInfoLog(N)||"",Y=a.getShaderInfoLog(L)||"",$=B.trim(),W=X.trim(),ne=Y.trim();let H=!0,ge=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(H=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,w,N,L);else{const Te=Na(a,N,"vertex"),De=Na(a,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+$+`
`+Te+`
`+De)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(W===""||ne==="")&&(ge=!1);ge&&(P.diagnostics={runnable:H,programLog:$,vertexShader:{log:W,prefix:f},fragmentShader:{log:ne,prefix:o}})}a.deleteShader(N),a.deleteShader(L),z=new In(a,w),h=rd(a,w)}let z;this.getUniforms=function(){return z===void 0&&O(this),z};let h;this.getAttributes=function(){return h===void 0&&O(this),h};let u=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return u===!1&&(u=a.getProgramParameter(w,Zf)),u},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qf++,this.cacheKey=n,this.usedTimes=1,this.program=w,this.vertexShader=N,this.fragmentShader=L,this}let gd=0;class vd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,a=this._getShaderStage(t),r=this._getShaderStage(i),d=this._getShaderCacheForMaterial(n);return d.has(a)===!1&&(d.add(a),a.usedTimes++),d.has(r)===!1&&(d.add(r),r.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new Ed(n),t.set(n,i)),i}}class Ed{constructor(n){this.id=gd++,this.code=n,this.usedTimes=0}}function Sd(e,n,t,i,a,r,d){const l=new Io,E=new vd,_=new Set,M=[],m=a.logarithmicDepthBuffer,v=a.vertexTextures;let x=a.precision;const D={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(h){return _.add(h),h===0?"uv":`uv${h}`}function f(h,u,P,B,X){const Y=B.fog,$=X.geometry,W=h.isMeshStandardMaterial?B.environment:null,ne=(h.isMeshStandardMaterial?t:n).get(h.envMap||W),H=ne&&ne.mapping===kn?ne.image.height:null,ge=D[h.type];h.precision!==null&&(x=a.getMaxPrecision(h.precision),x!==h.precision&&console.warn("THREE.WebGLProgram.getParameters:",h.precision,"not supported, using",x,"instead."));const Te=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,De=Te!==void 0?Te.length:0;let Ve=0;$.morphAttributes.position!==void 0&&(Ve=1),$.morphAttributes.normal!==void 0&&(Ve=2),$.morphAttributes.color!==void 0&&(Ve=3);let it,tt,We,V;if(ge){const ke=xt[ge];it=ke.vertexShader,tt=ke.fragmentShader}else it=h.vertexShader,tt=h.fragmentShader,E.update(h),We=E.getVertexShaderID(h),V=E.getFragmentShaderID(h);const K=e.getRenderTarget(),le=e.state.buffers.depth.getReversed(),Ce=X.isInstancedMesh===!0,Ee=X.isBatchedMesh===!0,Fe=!!h.map,ft=!!h.matcap,g=!!ne,Ze=!!h.aoMap,Le=!!h.lightMap,Re=!!h.bumpMap,ue=!!h.normalMap,Qe=!!h.displacementMap,pe=!!h.emissiveMap,ye=!!h.metalnessMap,lt=!!h.roughnessMap,at=h.anisotropy>0,p=h.clearcoat>0,s=h.dispersion>0,U=h.iridescence>0,G=h.sheen>0,q=h.transmission>0,F=at&&!!h.anisotropyMap,ve=p&&!!h.clearcoatMap,ee=p&&!!h.clearcoatNormalMap,he=p&&!!h.clearcoatRoughnessMap,me=U&&!!h.iridescenceMap,J=U&&!!h.iridescenceThicknessMap,oe=G&&!!h.sheenColorMap,Ae=G&&!!h.sheenRoughnessMap,_e=!!h.specularMap,ae=!!h.specularColorMap,Ue=!!h.specularIntensityMap,T=q&&!!h.transmissionMap,j=q&&!!h.thicknessMap,te=!!h.gradientMap,ce=!!h.alphaMap,Z=h.alphaTest>0,k=!!h.alphaHash,de=!!h.extensions;let Pe=yt;h.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Pe=e.toneMapping);const Ye={shaderID:ge,shaderType:h.type,shaderName:h.name,vertexShader:it,fragmentShader:tt,defines:h.defines,customVertexShaderID:We,customFragmentShaderID:V,isRawShaderMaterial:h.isRawShaderMaterial===!0,glslVersion:h.glslVersion,precision:x,batching:Ee,batchingColor:Ee&&X._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&X.instanceColor!==null,instancingMorph:Ce&&X.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:K===null?e.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Vn,alphaToCoverage:!!h.alphaToCoverage,map:Fe,matcap:ft,envMap:g,envMapMode:g&&ne.mapping,envMapCubeUVHeight:H,aoMap:Ze,lightMap:Le,bumpMap:Re,normalMap:ue,displacementMap:v&&Qe,emissiveMap:pe,normalMapObjectSpace:ue&&h.normalMapType===Po,normalMapTangentSpace:ue&&h.normalMapType===wo,metalnessMap:ye,roughnessMap:lt,anisotropy:at,anisotropyMap:F,clearcoat:p,clearcoatMap:ve,clearcoatNormalMap:ee,clearcoatRoughnessMap:he,dispersion:s,iridescence:U,iridescenceMap:me,iridescenceThicknessMap:J,sheen:G,sheenColorMap:oe,sheenRoughnessMap:Ae,specularMap:_e,specularColorMap:ae,specularIntensityMap:Ue,transmission:q,transmissionMap:T,thicknessMap:j,gradientMap:te,opaque:h.transparent===!1&&h.blending===yn&&h.alphaToCoverage===!1,alphaMap:ce,alphaTest:Z,alphaHash:k,combine:h.combine,mapUv:Fe&&w(h.map.channel),aoMapUv:Ze&&w(h.aoMap.channel),lightMapUv:Le&&w(h.lightMap.channel),bumpMapUv:Re&&w(h.bumpMap.channel),normalMapUv:ue&&w(h.normalMap.channel),displacementMapUv:Qe&&w(h.displacementMap.channel),emissiveMapUv:pe&&w(h.emissiveMap.channel),metalnessMapUv:ye&&w(h.metalnessMap.channel),roughnessMapUv:lt&&w(h.roughnessMap.channel),anisotropyMapUv:F&&w(h.anisotropyMap.channel),clearcoatMapUv:ve&&w(h.clearcoatMap.channel),clearcoatNormalMapUv:ee&&w(h.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&w(h.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&w(h.iridescenceMap.channel),iridescenceThicknessMapUv:J&&w(h.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&w(h.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&w(h.sheenRoughnessMap.channel),specularMapUv:_e&&w(h.specularMap.channel),specularColorMapUv:ae&&w(h.specularColorMap.channel),specularIntensityMapUv:Ue&&w(h.specularIntensityMap.channel),transmissionMapUv:T&&w(h.transmissionMap.channel),thicknessMapUv:j&&w(h.thicknessMap.channel),alphaMapUv:ce&&w(h.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(ue||at),vertexColors:h.vertexColors,vertexAlphas:h.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!$.attributes.uv&&(Fe||ce),fog:!!Y,useFog:h.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:h.flatShading===!0&&h.wireframe===!1,sizeAttenuation:h.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:le,skinning:X.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:Ve,numDirLights:u.directional.length,numPointLights:u.point.length,numSpotLights:u.spot.length,numSpotLightMaps:u.spotLightMap.length,numRectAreaLights:u.rectArea.length,numHemiLights:u.hemi.length,numDirLightShadows:u.directionalShadowMap.length,numPointLightShadows:u.pointShadowMap.length,numSpotLightShadows:u.spotShadowMap.length,numSpotLightShadowsWithMaps:u.numSpotLightShadowsWithMaps,numLightProbes:u.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:h.dithering,shadowMapEnabled:e.shadowMap.enabled&&P.length>0,shadowMapType:e.shadowMap.type,toneMapping:Pe,decodeVideoTexture:Fe&&h.map.isVideoTexture===!0&&rt.getTransfer(h.map.colorSpace)===$e,decodeVideoTextureEmissive:pe&&h.emissiveMap.isVideoTexture===!0&&rt.getTransfer(h.emissiveMap.colorSpace)===$e,premultipliedAlpha:h.premultipliedAlpha,doubleSided:h.side===Ct,flipSided:h.side===St,useDepthPacking:h.depthPacking>=0,depthPacking:h.depthPacking||0,index0AttributeName:h.index0AttributeName,extensionClipCullDistance:de&&h.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&h.extensions.multiDraw===!0||Ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:h.customProgramCacheKey()};return Ye.vertexUv1s=_.has(1),Ye.vertexUv2s=_.has(2),Ye.vertexUv3s=_.has(3),_.clear(),Ye}function o(h){const u=[];if(h.shaderID?u.push(h.shaderID):(u.push(h.customVertexShaderID),u.push(h.customFragmentShaderID)),h.defines!==void 0)for(const P in h.defines)u.push(P),u.push(h.defines[P]);return h.isRawShaderMaterial===!1&&(C(u,h),A(u,h),u.push(e.outputColorSpace)),u.push(h.customProgramCacheKey),u.join()}function C(h,u){h.push(u.precision),h.push(u.outputColorSpace),h.push(u.envMapMode),h.push(u.envMapCubeUVHeight),h.push(u.mapUv),h.push(u.alphaMapUv),h.push(u.lightMapUv),h.push(u.aoMapUv),h.push(u.bumpMapUv),h.push(u.normalMapUv),h.push(u.displacementMapUv),h.push(u.emissiveMapUv),h.push(u.metalnessMapUv),h.push(u.roughnessMapUv),h.push(u.anisotropyMapUv),h.push(u.clearcoatMapUv),h.push(u.clearcoatNormalMapUv),h.push(u.clearcoatRoughnessMapUv),h.push(u.iridescenceMapUv),h.push(u.iridescenceThicknessMapUv),h.push(u.sheenColorMapUv),h.push(u.sheenRoughnessMapUv),h.push(u.specularMapUv),h.push(u.specularColorMapUv),h.push(u.specularIntensityMapUv),h.push(u.transmissionMapUv),h.push(u.thicknessMapUv),h.push(u.combine),h.push(u.fogExp2),h.push(u.sizeAttenuation),h.push(u.morphTargetsCount),h.push(u.morphAttributeCount),h.push(u.numDirLights),h.push(u.numPointLights),h.push(u.numSpotLights),h.push(u.numSpotLightMaps),h.push(u.numHemiLights),h.push(u.numRectAreaLights),h.push(u.numDirLightShadows),h.push(u.numPointLightShadows),h.push(u.numSpotLightShadows),h.push(u.numSpotLightShadowsWithMaps),h.push(u.numLightProbes),h.push(u.shadowMapType),h.push(u.toneMapping),h.push(u.numClippingPlanes),h.push(u.numClipIntersection),h.push(u.depthPacking)}function A(h,u){l.disableAll(),u.supportsVertexTextures&&l.enable(0),u.instancing&&l.enable(1),u.instancingColor&&l.enable(2),u.instancingMorph&&l.enable(3),u.matcap&&l.enable(4),u.envMap&&l.enable(5),u.normalMapObjectSpace&&l.enable(6),u.normalMapTangentSpace&&l.enable(7),u.clearcoat&&l.enable(8),u.iridescence&&l.enable(9),u.alphaTest&&l.enable(10),u.vertexColors&&l.enable(11),u.vertexAlphas&&l.enable(12),u.vertexUv1s&&l.enable(13),u.vertexUv2s&&l.enable(14),u.vertexUv3s&&l.enable(15),u.vertexTangents&&l.enable(16),u.anisotropy&&l.enable(17),u.alphaHash&&l.enable(18),u.batching&&l.enable(19),u.dispersion&&l.enable(20),u.batchingColor&&l.enable(21),u.gradientMap&&l.enable(22),h.push(l.mask),l.disableAll(),u.fog&&l.enable(0),u.useFog&&l.enable(1),u.flatShading&&l.enable(2),u.logarithmicDepthBuffer&&l.enable(3),u.reversedDepthBuffer&&l.enable(4),u.skinning&&l.enable(5),u.morphTargets&&l.enable(6),u.morphNormals&&l.enable(7),u.morphColors&&l.enable(8),u.premultipliedAlpha&&l.enable(9),u.shadowMapEnabled&&l.enable(10),u.doubleSided&&l.enable(11),u.flipSided&&l.enable(12),u.useDepthPacking&&l.enable(13),u.dithering&&l.enable(14),u.transmission&&l.enable(15),u.sheen&&l.enable(16),u.opaque&&l.enable(17),u.pointsUvs&&l.enable(18),u.decodeVideoTexture&&l.enable(19),u.decodeVideoTextureEmissive&&l.enable(20),u.alphaToCoverage&&l.enable(21),h.push(l.mask)}function S(h){const u=D[h.type];let P;if(u){const B=xt[u];P=Co.clone(B.uniforms)}else P=h.uniforms;return P}function N(h,u){let P;for(let B=0,X=M.length;B<X;B++){const Y=M[B];if(Y.cacheKey===u){P=Y,++P.usedTimes;break}}return P===void 0&&(P=new _d(e,u,h,r),M.push(P)),P}function L(h){if(--h.usedTimes===0){const u=M.indexOf(h);M[u]=M[M.length-1],M.pop(),h.destroy()}}function O(h){E.remove(h)}function z(){E.dispose()}return{getParameters:f,getProgramCacheKey:o,getUniforms:S,acquireProgram:N,releaseProgram:L,releaseShaderCache:O,programs:M,dispose:z}}function Md(){let e=new WeakMap;function n(d){return e.has(d)}function t(d){let l=e.get(d);return l===void 0&&(l={},e.set(d,l)),l}function i(d){e.delete(d)}function a(d,l,E){e.get(d)[l]=E}function r(){e=new WeakMap}return{has:n,get:t,remove:i,update:a,dispose:r}}function Td(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.z!==n.z?e.z-n.z:e.id-n.id}function Ha(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function Va(){const e=[];let n=0;const t=[],i=[],a=[];function r(){n=0,t.length=0,i.length=0,a.length=0}function d(m,v,x,D,w,f){let o=e[n];return o===void 0?(o={id:m.id,object:m,geometry:v,material:x,groupOrder:D,renderOrder:m.renderOrder,z:w,group:f},e[n]=o):(o.id=m.id,o.object=m,o.geometry=v,o.material=x,o.groupOrder=D,o.renderOrder=m.renderOrder,o.z=w,o.group=f),n++,o}function l(m,v,x,D,w,f){const o=d(m,v,x,D,w,f);x.transmission>0?i.push(o):x.transparent===!0?a.push(o):t.push(o)}function E(m,v,x,D,w,f){const o=d(m,v,x,D,w,f);x.transmission>0?i.unshift(o):x.transparent===!0?a.unshift(o):t.unshift(o)}function _(m,v){t.length>1&&t.sort(m||Td),i.length>1&&i.sort(v||Ha),a.length>1&&a.sort(v||Ha)}function M(){for(let m=n,v=e.length;m<v;m++){const x=e[m];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:a,init:r,push:l,unshift:E,finish:M,sort:_}}function xd(){let e=new WeakMap;function n(i,a){const r=e.get(i);let d;return r===void 0?(d=new Va,e.set(i,[d])):a>=r.length?(d=new Va,r.push(d)):d=r[a],d}function t(){e=new WeakMap}return{get:n,dispose:t}}function Ad(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new we,color:new Be};break;case"SpotLight":t={position:new we,direction:new we,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new we,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new we,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new we,halfWidth:new we,halfHeight:new we};break}return e[n.id]=t,t}}}function Rd(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let bd=0;function Cd(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function wd(e){const n=new Ad,t=Rd(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let _=0;_<9;_++)i.probe.push(new we);const a=new we,r=new en,d=new en;function l(_){let M=0,m=0,v=0;for(let h=0;h<9;h++)i.probe[h].set(0,0,0);let x=0,D=0,w=0,f=0,o=0,C=0,A=0,S=0,N=0,L=0,O=0;_.sort(Cd);for(let h=0,u=_.length;h<u;h++){const P=_[h],B=P.color,X=P.intensity,Y=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)M+=B.r*X,m+=B.g*X,v+=B.b*X;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],X);O++}else if(P.isDirectionalLight){const W=n.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ne=P.shadow,H=t.get(P);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,i.directionalShadow[x]=H,i.directionalShadowMap[x]=$,i.directionalShadowMatrix[x]=P.shadow.matrix,C++}i.directional[x]=W,x++}else if(P.isSpotLight){const W=n.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(B).multiplyScalar(X),W.distance=Y,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[w]=W;const ne=P.shadow;if(P.map&&(i.spotLightMap[N]=P.map,N++,ne.updateMatrices(P),P.castShadow&&L++),i.spotLightMatrix[w]=ne.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,i.spotShadow[w]=H,i.spotShadowMap[w]=$,S++}w++}else if(P.isRectAreaLight){const W=n.get(P);W.color.copy(B).multiplyScalar(X),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[f]=W,f++}else if(P.isPointLight){const W=n.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const ne=P.shadow,H=t.get(P);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,H.shadowCameraNear=ne.camera.near,H.shadowCameraFar=ne.camera.far,i.pointShadow[D]=H,i.pointShadowMap[D]=$,i.pointShadowMatrix[D]=P.shadow.matrix,A++}i.point[D]=W,D++}else if(P.isHemisphereLight){const W=n.get(P);W.skyColor.copy(P.color).multiplyScalar(X),W.groundColor.copy(P.groundColor).multiplyScalar(X),i.hemi[o]=W,o++}}f>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2)),i.ambient[0]=M,i.ambient[1]=m,i.ambient[2]=v;const z=i.hash;(z.directionalLength!==x||z.pointLength!==D||z.spotLength!==w||z.rectAreaLength!==f||z.hemiLength!==o||z.numDirectionalShadows!==C||z.numPointShadows!==A||z.numSpotShadows!==S||z.numSpotMaps!==N||z.numLightProbes!==O)&&(i.directional.length=x,i.spot.length=w,i.rectArea.length=f,i.point.length=D,i.hemi.length=o,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=C,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=S+N-L,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=O,z.directionalLength=x,z.pointLength=D,z.spotLength=w,z.rectAreaLength=f,z.hemiLength=o,z.numDirectionalShadows=C,z.numPointShadows=A,z.numSpotShadows=S,z.numSpotMaps=N,z.numLightProbes=O,i.version=bd++)}function E(_,M){let m=0,v=0,x=0,D=0,w=0;const f=M.matrixWorldInverse;for(let o=0,C=_.length;o<C;o++){const A=_[o];if(A.isDirectionalLight){const S=i.directional[m];S.direction.setFromMatrixPosition(A.matrixWorld),a.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(f),m++}else if(A.isSpotLight){const S=i.spot[x];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(A.matrixWorld),a.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(f),x++}else if(A.isRectAreaLight){const S=i.rectArea[D];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(f),d.identity(),r.copy(A.matrixWorld),r.premultiply(f),d.extractRotation(r),S.halfWidth.set(A.width*.5,0,0),S.halfHeight.set(0,A.height*.5,0),S.halfWidth.applyMatrix4(d),S.halfHeight.applyMatrix4(d),D++}else if(A.isPointLight){const S=i.point[v];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(f),v++}else if(A.isHemisphereLight){const S=i.hemi[w];S.direction.setFromMatrixPosition(A.matrixWorld),S.direction.transformDirection(f),w++}}}return{setup:l,setupView:E,state:i}}function ka(e){const n=new wd(e),t=[],i=[];function a(M){_.camera=M,t.length=0,i.length=0}function r(M){t.push(M)}function d(M){i.push(M)}function l(){n.setup(t)}function E(M){n.setupView(t,M)}const _={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:a,state:_,setupLights:l,setupLightsView:E,pushLight:r,pushShadow:d}}function Pd(e){let n=new WeakMap;function t(a,r=0){const d=n.get(a);let l;return d===void 0?(l=new ka(e),n.set(a,[l])):r>=d.length?(l=new ka(e),d.push(l)):l=d[r],l}function i(){n=new WeakMap}return{get:t,dispose:i}}const Ld=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ud=`uniform sampler2D shadow_pass;
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
}`;function Dd(e,n,t){let i=new $a;const a=new ut,r=new ut,d=new mt,l=new uo({depthPacking:po}),E=new ho,_={},M=t.maxTextureSize,m={[mn]:St,[St]:mn,[Ct]:Ct},v=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Ld,fragmentShader:Ud}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const D=new Ja;D.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new ot(D,v),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ja;let o=this.type;this.render=function(L,O,z){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||L.length===0)return;const h=e.getRenderTarget(),u=e.getActiveCubeFace(),P=e.getActiveMipmapLevel(),B=e.state;B.setBlending(kt),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const X=o!==Rt&&this.type===Rt,Y=o===Rt&&this.type!==Rt;for(let $=0,W=L.length;$<W;$++){const ne=L[$],H=ne.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);const ge=H.getFrameExtents();if(a.multiply(ge),r.copy(H.mapSize),(a.x>M||a.y>M)&&(a.x>M&&(r.x=Math.floor(M/ge.x),a.x=r.x*ge.x,H.mapSize.x=r.x),a.y>M&&(r.y=Math.floor(M/ge.y),a.y=r.y*ge.y,H.mapSize.y=r.y)),H.map===null||X===!0||Y===!0){const De=this.type!==Rt?{minFilter:dn,magFilter:dn}:{};H.map!==null&&H.map.dispose(),H.map=new tn(a.x,a.y,De),H.map.texture.name=ne.name+".shadowMap",H.camera.updateProjectionMatrix()}e.setRenderTarget(H.map),e.clear();const Te=H.getViewportCount();for(let De=0;De<Te;De++){const Ve=H.getViewport(De);d.set(r.x*Ve.x,r.y*Ve.y,r.x*Ve.z,r.y*Ve.w),B.viewport(d),H.updateMatrices(ne,De),i=H.getFrustum(),S(O,z,H.camera,ne,this.type)}H.isPointLightShadow!==!0&&this.type===Rt&&C(H,z),H.needsUpdate=!1}o=this.type,f.needsUpdate=!1,e.setRenderTarget(h,u,P)};function C(L,O){const z=n.update(w);v.defines.VSM_SAMPLES!==L.blurSamples&&(v.defines.VSM_SAMPLES=L.blurSamples,x.defines.VSM_SAMPLES=L.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new tn(a.x,a.y)),v.uniforms.shadow_pass.value=L.map.texture,v.uniforms.resolution.value=L.mapSize,v.uniforms.radius.value=L.radius,e.setRenderTarget(L.mapPass),e.clear(),e.renderBufferDirect(O,null,z,v,w,null),x.uniforms.shadow_pass.value=L.mapPass.texture,x.uniforms.resolution.value=L.mapSize,x.uniforms.radius.value=L.radius,e.setRenderTarget(L.map),e.clear(),e.renderBufferDirect(O,null,z,x,w,null)}function A(L,O,z,h){let u=null;const P=z.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(P!==void 0)u=P;else if(u=z.isPointLight===!0?E:l,e.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const B=u.uuid,X=O.uuid;let Y=_[B];Y===void 0&&(Y={},_[B]=Y);let $=Y[X];$===void 0&&($=u.clone(),Y[X]=$,O.addEventListener("dispose",N)),u=$}if(u.visible=O.visible,u.wireframe=O.wireframe,h===Rt?u.side=O.shadowSide!==null?O.shadowSide:O.side:u.side=O.shadowSide!==null?O.shadowSide:m[O.side],u.alphaMap=O.alphaMap,u.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,u.map=O.map,u.clipShadows=O.clipShadows,u.clippingPlanes=O.clippingPlanes,u.clipIntersection=O.clipIntersection,u.displacementMap=O.displacementMap,u.displacementScale=O.displacementScale,u.displacementBias=O.displacementBias,u.wireframeLinewidth=O.wireframeLinewidth,u.linewidth=O.linewidth,z.isPointLight===!0&&u.isMeshDistanceMaterial===!0){const B=e.properties.get(u);B.light=z}return u}function S(L,O,z,h,u){if(L.visible===!1)return;if(L.layers.test(O.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&u===Rt)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,L.matrixWorld);const X=n.update(L),Y=L.material;if(Array.isArray(Y)){const $=X.groups;for(let W=0,ne=$.length;W<ne;W++){const H=$[W],ge=Y[H.materialIndex];if(ge&&ge.visible){const Te=A(L,ge,h,u);L.onBeforeShadow(e,L,O,z,X,Te,H),e.renderBufferDirect(z,null,X,Te,L,H),L.onAfterShadow(e,L,O,z,X,Te,H)}}}else if(Y.visible){const $=A(L,Y,h,u);L.onBeforeShadow(e,L,O,z,X,$,null),e.renderBufferDirect(z,null,X,$,L,null),L.onAfterShadow(e,L,O,z,X,$,null)}}const B=L.children;for(let X=0,Y=B.length;X<Y;X++)S(B[X],O,z,h,u)}function N(L){L.target.removeEventListener("dispose",N);for(const z in _){const h=_[z],u=L.target.uuid;u in h&&(h[u].dispose(),delete h[u])}}}const yd={[gi]:_i,[mi]:ui,[hi]:di,[Fn]:pi,[_i]:gi,[ui]:mi,[di]:hi,[pi]:Fn};function Id(e,n){function t(){let T=!1;const j=new mt;let te=null;const ce=new mt(0,0,0,0);return{setMask:function(Z){te!==Z&&!T&&(e.colorMask(Z,Z,Z,Z),te=Z)},setLocked:function(Z){T=Z},setClear:function(Z,k,de,Pe,Ye){Ye===!0&&(Z*=Pe,k*=Pe,de*=Pe),j.set(Z,k,de,Pe),ce.equals(j)===!1&&(e.clearColor(Z,k,de,Pe),ce.copy(j))},reset:function(){T=!1,te=null,ce.set(-1,0,0,0)}}}function i(){let T=!1,j=!1,te=null,ce=null,Z=null;return{setReversed:function(k){if(j!==k){const de=n.get("EXT_clip_control");k?de.clipControlEXT(de.LOWER_LEFT_EXT,de.ZERO_TO_ONE_EXT):de.clipControlEXT(de.LOWER_LEFT_EXT,de.NEGATIVE_ONE_TO_ONE_EXT),j=k;const Pe=Z;Z=null,this.setClear(Pe)}},getReversed:function(){return j},setTest:function(k){k?K(e.DEPTH_TEST):le(e.DEPTH_TEST)},setMask:function(k){te!==k&&!T&&(e.depthMask(k),te=k)},setFunc:function(k){if(j&&(k=yd[k]),ce!==k){switch(k){case gi:e.depthFunc(e.NEVER);break;case _i:e.depthFunc(e.ALWAYS);break;case mi:e.depthFunc(e.LESS);break;case Fn:e.depthFunc(e.LEQUAL);break;case hi:e.depthFunc(e.EQUAL);break;case pi:e.depthFunc(e.GEQUAL);break;case ui:e.depthFunc(e.GREATER);break;case di:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ce=k}},setLocked:function(k){T=k},setClear:function(k){Z!==k&&(j&&(k=1-k),e.clearDepth(k),Z=k)},reset:function(){T=!1,te=null,ce=null,Z=null,j=!1}}}function a(){let T=!1,j=null,te=null,ce=null,Z=null,k=null,de=null,Pe=null,Ye=null;return{setTest:function(ke){T||(ke?K(e.STENCIL_TEST):le(e.STENCIL_TEST))},setMask:function(ke){j!==ke&&!T&&(e.stencilMask(ke),j=ke)},setFunc:function(ke,At,Mt){(te!==ke||ce!==At||Z!==Mt)&&(e.stencilFunc(ke,At,Mt),te=ke,ce=At,Z=Mt)},setOp:function(ke,At,Mt){(k!==ke||de!==At||Pe!==Mt)&&(e.stencilOp(ke,At,Mt),k=ke,de=At,Pe=Mt)},setLocked:function(ke){T=ke},setClear:function(ke){Ye!==ke&&(e.clearStencil(ke),Ye=ke)},reset:function(){T=!1,j=null,te=null,ce=null,Z=null,k=null,de=null,Pe=null,Ye=null}}}const r=new t,d=new i,l=new a,E=new WeakMap,_=new WeakMap;let M={},m={},v=new WeakMap,x=[],D=null,w=!1,f=null,o=null,C=null,A=null,S=null,N=null,L=null,O=new Be(0,0,0),z=0,h=!1,u=null,P=null,B=null,X=null,Y=null;const $=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ne=0;const H=e.getParameter(e.VERSION);H.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=ne>=1):H.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=ne>=2);let ge=null,Te={};const De=e.getParameter(e.SCISSOR_BOX),Ve=e.getParameter(e.VIEWPORT),it=new mt().fromArray(De),tt=new mt().fromArray(Ve);function We(T,j,te,ce){const Z=new Uint8Array(4),k=e.createTexture();e.bindTexture(T,k),e.texParameteri(T,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(T,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let de=0;de<te;de++)T===e.TEXTURE_3D||T===e.TEXTURE_2D_ARRAY?e.texImage3D(j,0,e.RGBA,1,1,ce,0,e.RGBA,e.UNSIGNED_BYTE,Z):e.texImage2D(j+de,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Z);return k}const V={};V[e.TEXTURE_2D]=We(e.TEXTURE_2D,e.TEXTURE_2D,1),V[e.TEXTURE_CUBE_MAP]=We(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[e.TEXTURE_2D_ARRAY]=We(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),V[e.TEXTURE_3D]=We(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),d.setClear(1),l.setClear(0),K(e.DEPTH_TEST),d.setFunc(Fn),Re(!1),ue(da),K(e.CULL_FACE),Ze(kt);function K(T){M[T]!==!0&&(e.enable(T),M[T]=!0)}function le(T){M[T]!==!1&&(e.disable(T),M[T]=!1)}function Ce(T,j){return m[T]!==j?(e.bindFramebuffer(T,j),m[T]=j,T===e.DRAW_FRAMEBUFFER&&(m[e.FRAMEBUFFER]=j),T===e.FRAMEBUFFER&&(m[e.DRAW_FRAMEBUFFER]=j),!0):!1}function Ee(T,j){let te=x,ce=!1;if(T){te=v.get(j),te===void 0&&(te=[],v.set(j,te));const Z=T.textures;if(te.length!==Z.length||te[0]!==e.COLOR_ATTACHMENT0){for(let k=0,de=Z.length;k<de;k++)te[k]=e.COLOR_ATTACHMENT0+k;te.length=Z.length,ce=!0}}else te[0]!==e.BACK&&(te[0]=e.BACK,ce=!0);ce&&e.drawBuffers(te)}function Fe(T){return D!==T?(e.useProgram(T),D=T,!0):!1}const ft={[sn]:e.FUNC_ADD,[Fr]:e.FUNC_SUBTRACT,[Or]:e.FUNC_REVERSE_SUBTRACT};ft[$o]=e.MIN,ft[Zo]=e.MAX;const g={[Jr]:e.ZERO,[Qr]:e.ONE,[Zr]:e.SRC_COLOR,[$r]:e.SRC_ALPHA,[Kr]:e.SRC_ALPHA_SATURATE,[qr]:e.DST_COLOR,[Yr]:e.DST_ALPHA,[Xr]:e.ONE_MINUS_SRC_COLOR,[Wr]:e.ONE_MINUS_SRC_ALPHA,[zr]:e.ONE_MINUS_DST_COLOR,[kr]:e.ONE_MINUS_DST_ALPHA,[Vr]:e.CONSTANT_COLOR,[Hr]:e.ONE_MINUS_CONSTANT_COLOR,[Gr]:e.CONSTANT_ALPHA,[Br]:e.ONE_MINUS_CONSTANT_ALPHA};function Ze(T,j,te,ce,Z,k,de,Pe,Ye,ke){if(T===kt){w===!0&&(le(e.BLEND),w=!1);return}if(w===!1&&(K(e.BLEND),w=!0),T!==Ro){if(T!==f||ke!==h){if((o!==sn||S!==sn)&&(e.blendEquation(e.FUNC_ADD),o=sn,S=sn),ke)switch(T){case yn:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ha:e.blendFunc(e.ONE,e.ONE);break;case pa:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case ua:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case yn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ha:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case pa:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ua:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}C=null,A=null,N=null,L=null,O.set(0,0,0),z=0,f=T,h=ke}return}Z=Z||j,k=k||te,de=de||ce,(j!==o||Z!==S)&&(e.blendEquationSeparate(ft[j],ft[Z]),o=j,S=Z),(te!==C||ce!==A||k!==N||de!==L)&&(e.blendFuncSeparate(g[te],g[ce],g[k],g[de]),C=te,A=ce,N=k,L=de),(Pe.equals(O)===!1||Ye!==z)&&(e.blendColor(Pe.r,Pe.g,Pe.b,Ye),O.copy(Pe),z=Ye),f=T,h=!1}function Le(T,j){T.side===Ct?le(e.CULL_FACE):K(e.CULL_FACE);let te=T.side===St;j&&(te=!te),Re(te),T.blending===yn&&T.transparent===!1?Ze(kt):Ze(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),d.setFunc(T.depthFunc),d.setTest(T.depthTest),d.setMask(T.depthWrite),r.setMask(T.colorWrite);const ce=T.stencilWrite;l.setTest(ce),ce&&(l.setMask(T.stencilWriteMask),l.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),l.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),pe(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?K(e.SAMPLE_ALPHA_TO_COVERAGE):le(e.SAMPLE_ALPHA_TO_COVERAGE)}function Re(T){u!==T&&(T?e.frontFace(e.CW):e.frontFace(e.CCW),u=T)}function ue(T){T!==xo?(K(e.CULL_FACE),T!==P&&(T===da?e.cullFace(e.BACK):T===Ao?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):le(e.CULL_FACE),P=T}function Qe(T){T!==B&&(W&&e.lineWidth(T),B=T)}function pe(T,j,te){T?(K(e.POLYGON_OFFSET_FILL),(X!==j||Y!==te)&&(e.polygonOffset(j,te),X=j,Y=te)):le(e.POLYGON_OFFSET_FILL)}function ye(T){T?K(e.SCISSOR_TEST):le(e.SCISSOR_TEST)}function lt(T){T===void 0&&(T=e.TEXTURE0+$-1),ge!==T&&(e.activeTexture(T),ge=T)}function at(T,j,te){te===void 0&&(ge===null?te=e.TEXTURE0+$-1:te=ge);let ce=Te[te];ce===void 0&&(ce={type:void 0,texture:void 0},Te[te]=ce),(ce.type!==T||ce.texture!==j)&&(ge!==te&&(e.activeTexture(te),ge=te),e.bindTexture(T,j||V[T]),ce.type=T,ce.texture=j)}function p(){const T=Te[ge];T!==void 0&&T.type!==void 0&&(e.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function s(){try{e.compressedTexImage2D(...arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function U(){try{e.compressedTexImage3D(...arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function G(){try{e.texSubImage2D(...arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function q(){try{e.texSubImage3D(...arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function F(){try{e.compressedTexSubImage2D(...arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ve(){try{e.compressedTexSubImage3D(...arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ee(){try{e.texStorage2D(...arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function he(){try{e.texStorage3D(...arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function me(){try{e.texImage2D(...arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function J(){try{e.texImage3D(...arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function oe(T){it.equals(T)===!1&&(e.scissor(T.x,T.y,T.z,T.w),it.copy(T))}function Ae(T){tt.equals(T)===!1&&(e.viewport(T.x,T.y,T.z,T.w),tt.copy(T))}function _e(T,j){let te=_.get(j);te===void 0&&(te=new WeakMap,_.set(j,te));let ce=te.get(T);ce===void 0&&(ce=e.getUniformBlockIndex(j,T.name),te.set(T,ce))}function ae(T,j){const ce=_.get(j).get(T);E.get(j)!==ce&&(e.uniformBlockBinding(j,ce,T.__bindingPointIndex),E.set(j,ce))}function Ue(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),d.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),M={},ge=null,Te={},m={},v=new WeakMap,x=[],D=null,w=!1,f=null,o=null,C=null,A=null,S=null,N=null,L=null,O=new Be(0,0,0),z=0,h=!1,u=null,P=null,B=null,X=null,Y=null,it.set(0,0,e.canvas.width,e.canvas.height),tt.set(0,0,e.canvas.width,e.canvas.height),r.reset(),d.reset(),l.reset()}return{buffers:{color:r,depth:d,stencil:l},enable:K,disable:le,bindFramebuffer:Ce,drawBuffers:Ee,useProgram:Fe,setBlending:Ze,setMaterial:Le,setFlipSided:Re,setCullFace:ue,setLineWidth:Qe,setPolygonOffset:pe,setScissorTest:ye,activeTexture:lt,bindTexture:at,unbindTexture:p,compressedTexImage2D:s,compressedTexImage3D:U,texImage2D:me,texImage3D:J,updateUBOMapping:_e,uniformBlockBinding:ae,texStorage2D:ee,texStorage3D:he,texSubImage2D:G,texSubImage3D:q,compressedTexSubImage2D:F,compressedTexSubImage3D:ve,scissor:oe,viewport:Ae,reset:Ue}}function Nd(e,n,t,i,a,r,d){const l=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,E=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new ut,M=new WeakMap;let m;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(p,s){return x?new OffscreenCanvas(p,s):Xo("canvas")}function w(p,s,U){let G=1;const q=at(p);if((q.width>U||q.height>U)&&(G=U/Math.max(q.width,q.height)),G<1)if(typeof HTMLImageElement<"u"&&p instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&p instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&p instanceof ImageBitmap||typeof VideoFrame<"u"&&p instanceof VideoFrame){const F=Math.floor(G*q.width),ve=Math.floor(G*q.height);m===void 0&&(m=D(F,ve));const ee=s?D(F,ve):m;return ee.width=F,ee.height=ve,ee.getContext("2d").drawImage(p,0,0,F,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+F+"x"+ve+")."),ee}else return"data"in p&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),p;return p}function f(p){return p.generateMipmaps}function o(p){e.generateMipmap(p)}function C(p){return p.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:p.isWebGL3DRenderTarget?e.TEXTURE_3D:p.isWebGLArrayRenderTarget||p.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function A(p,s,U,G,q=!1){if(p!==null){if(e[p]!==void 0)return e[p];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+p+"'")}let F=s;if(s===e.RED&&(U===e.FLOAT&&(F=e.R32F),U===e.HALF_FLOAT&&(F=e.R16F),U===e.UNSIGNED_BYTE&&(F=e.R8)),s===e.RED_INTEGER&&(U===e.UNSIGNED_BYTE&&(F=e.R8UI),U===e.UNSIGNED_SHORT&&(F=e.R16UI),U===e.UNSIGNED_INT&&(F=e.R32UI),U===e.BYTE&&(F=e.R8I),U===e.SHORT&&(F=e.R16I),U===e.INT&&(F=e.R32I)),s===e.RG&&(U===e.FLOAT&&(F=e.RG32F),U===e.HALF_FLOAT&&(F=e.RG16F),U===e.UNSIGNED_BYTE&&(F=e.RG8)),s===e.RG_INTEGER&&(U===e.UNSIGNED_BYTE&&(F=e.RG8UI),U===e.UNSIGNED_SHORT&&(F=e.RG16UI),U===e.UNSIGNED_INT&&(F=e.RG32UI),U===e.BYTE&&(F=e.RG8I),U===e.SHORT&&(F=e.RG16I),U===e.INT&&(F=e.RG32I)),s===e.RGB_INTEGER&&(U===e.UNSIGNED_BYTE&&(F=e.RGB8UI),U===e.UNSIGNED_SHORT&&(F=e.RGB16UI),U===e.UNSIGNED_INT&&(F=e.RGB32UI),U===e.BYTE&&(F=e.RGB8I),U===e.SHORT&&(F=e.RGB16I),U===e.INT&&(F=e.RGB32I)),s===e.RGBA_INTEGER&&(U===e.UNSIGNED_BYTE&&(F=e.RGBA8UI),U===e.UNSIGNED_SHORT&&(F=e.RGBA16UI),U===e.UNSIGNED_INT&&(F=e.RGBA32UI),U===e.BYTE&&(F=e.RGBA8I),U===e.SHORT&&(F=e.RGBA16I),U===e.INT&&(F=e.RGBA32I)),s===e.RGB&&(U===e.UNSIGNED_INT_5_9_9_9_REV&&(F=e.RGB9_E5),U===e.UNSIGNED_INT_10F_11F_11F_REV&&(F=e.R11F_G11F_B10F)),s===e.RGBA){const ve=q?fr:rt.getTransfer(G);U===e.FLOAT&&(F=e.RGBA32F),U===e.HALF_FLOAT&&(F=e.RGBA16F),U===e.UNSIGNED_BYTE&&(F=ve===$e?e.SRGB8_ALPHA8:e.RGBA8),U===e.UNSIGNED_SHORT_4_4_4_4&&(F=e.RGBA4),U===e.UNSIGNED_SHORT_5_5_5_1&&(F=e.RGB5_A1)}return(F===e.R16F||F===e.R32F||F===e.RG16F||F===e.RG32F||F===e.RGBA16F||F===e.RGBA32F)&&n.get("EXT_color_buffer_float"),F}function S(p,s){let U;return p?s===null||s===gn||s===_n?U=e.DEPTH24_STENCIL8:s===Ht?U=e.DEPTH32F_STENCIL8:s===Bn&&(U=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):s===null||s===gn||s===_n?U=e.DEPTH_COMPONENT24:s===Ht?U=e.DEPTH_COMPONENT32F:s===Bn&&(U=e.DEPTH_COMPONENT16),U}function N(p,s){return f(p)===!0||p.isFramebufferTexture&&p.minFilter!==dn&&p.minFilter!==$t?Math.log2(Math.max(s.width,s.height))+1:p.mipmaps!==void 0&&p.mipmaps.length>0?p.mipmaps.length:p.isCompressedTexture&&Array.isArray(p.image)?s.mipmaps.length:1}function L(p){const s=p.target;s.removeEventListener("dispose",L),z(s),s.isVideoTexture&&M.delete(s)}function O(p){const s=p.target;s.removeEventListener("dispose",O),u(s)}function z(p){const s=i.get(p);if(s.__webglInit===void 0)return;const U=p.source,G=v.get(U);if(G){const q=G[s.__cacheKey];q.usedTimes--,q.usedTimes===0&&h(p),Object.keys(G).length===0&&v.delete(U)}i.remove(p)}function h(p){const s=i.get(p);e.deleteTexture(s.__webglTexture);const U=p.source,G=v.get(U);delete G[s.__cacheKey],d.memory.textures--}function u(p){const s=i.get(p);if(p.depthTexture&&(p.depthTexture.dispose(),i.remove(p.depthTexture)),p.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(s.__webglFramebuffer[G]))for(let q=0;q<s.__webglFramebuffer[G].length;q++)e.deleteFramebuffer(s.__webglFramebuffer[G][q]);else e.deleteFramebuffer(s.__webglFramebuffer[G]);s.__webglDepthbuffer&&e.deleteRenderbuffer(s.__webglDepthbuffer[G])}else{if(Array.isArray(s.__webglFramebuffer))for(let G=0;G<s.__webglFramebuffer.length;G++)e.deleteFramebuffer(s.__webglFramebuffer[G]);else e.deleteFramebuffer(s.__webglFramebuffer);if(s.__webglDepthbuffer&&e.deleteRenderbuffer(s.__webglDepthbuffer),s.__webglMultisampledFramebuffer&&e.deleteFramebuffer(s.__webglMultisampledFramebuffer),s.__webglColorRenderbuffer)for(let G=0;G<s.__webglColorRenderbuffer.length;G++)s.__webglColorRenderbuffer[G]&&e.deleteRenderbuffer(s.__webglColorRenderbuffer[G]);s.__webglDepthRenderbuffer&&e.deleteRenderbuffer(s.__webglDepthRenderbuffer)}const U=p.textures;for(let G=0,q=U.length;G<q;G++){const F=i.get(U[G]);F.__webglTexture&&(e.deleteTexture(F.__webglTexture),d.memory.textures--),i.remove(U[G])}i.remove(p)}let P=0;function B(){P=0}function X(){const p=P;return p>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+p+" texture units while this GPU supports only "+a.maxTextures),P+=1,p}function Y(p){const s=[];return s.push(p.wrapS),s.push(p.wrapT),s.push(p.wrapR||0),s.push(p.magFilter),s.push(p.minFilter),s.push(p.anisotropy),s.push(p.internalFormat),s.push(p.format),s.push(p.type),s.push(p.generateMipmaps),s.push(p.premultiplyAlpha),s.push(p.flipY),s.push(p.unpackAlignment),s.push(p.colorSpace),s.join()}function $(p,s){const U=i.get(p);if(p.isVideoTexture&&ye(p),p.isRenderTargetTexture===!1&&p.isExternalTexture!==!0&&p.version>0&&U.__version!==p.version){const G=p.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(U,p,s);return}}else p.isExternalTexture&&(U.__webglTexture=p.sourceTexture?p.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,U.__webglTexture,e.TEXTURE0+s)}function W(p,s){const U=i.get(p);if(p.isRenderTargetTexture===!1&&p.version>0&&U.__version!==p.version){V(U,p,s);return}t.bindTexture(e.TEXTURE_2D_ARRAY,U.__webglTexture,e.TEXTURE0+s)}function ne(p,s){const U=i.get(p);if(p.isRenderTargetTexture===!1&&p.version>0&&U.__version!==p.version){V(U,p,s);return}t.bindTexture(e.TEXTURE_3D,U.__webglTexture,e.TEXTURE0+s)}function H(p,s){const U=i.get(p);if(p.version>0&&U.__version!==p.version){K(U,p,s);return}t.bindTexture(e.TEXTURE_CUBE_MAP,U.__webglTexture,e.TEXTURE0+s)}const ge={[to]:e.REPEAT,[eo]:e.CLAMP_TO_EDGE,[jr]:e.MIRRORED_REPEAT},Te={[dn]:e.NEAREST,[no]:e.NEAREST_MIPMAP_NEAREST,[Rn]:e.NEAREST_MIPMAP_LINEAR,[$t]:e.LINEAR,[Kn]:e.LINEAR_MIPMAP_NEAREST,[cn]:e.LINEAR_MIPMAP_LINEAR},De={[lo]:e.NEVER,[co]:e.ALWAYS,[so]:e.LESS,[Qa]:e.LEQUAL,[oo]:e.EQUAL,[ro]:e.GEQUAL,[ao]:e.GREATER,[io]:e.NOTEQUAL};function Ve(p,s){if(s.type===Ht&&n.has("OES_texture_float_linear")===!1&&(s.magFilter===$t||s.magFilter===Kn||s.magFilter===Rn||s.magFilter===cn||s.minFilter===$t||s.minFilter===Kn||s.minFilter===Rn||s.minFilter===cn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(p,e.TEXTURE_WRAP_S,ge[s.wrapS]),e.texParameteri(p,e.TEXTURE_WRAP_T,ge[s.wrapT]),(p===e.TEXTURE_3D||p===e.TEXTURE_2D_ARRAY)&&e.texParameteri(p,e.TEXTURE_WRAP_R,ge[s.wrapR]),e.texParameteri(p,e.TEXTURE_MAG_FILTER,Te[s.magFilter]),e.texParameteri(p,e.TEXTURE_MIN_FILTER,Te[s.minFilter]),s.compareFunction&&(e.texParameteri(p,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(p,e.TEXTURE_COMPARE_FUNC,De[s.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(s.magFilter===dn||s.minFilter!==Rn&&s.minFilter!==cn||s.type===Ht&&n.has("OES_texture_float_linear")===!1)return;if(s.anisotropy>1||i.get(s).__currentAnisotropy){const U=n.get("EXT_texture_filter_anisotropic");e.texParameterf(p,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(s.anisotropy,a.getMaxAnisotropy())),i.get(s).__currentAnisotropy=s.anisotropy}}}function it(p,s){let U=!1;p.__webglInit===void 0&&(p.__webglInit=!0,s.addEventListener("dispose",L));const G=s.source;let q=v.get(G);q===void 0&&(q={},v.set(G,q));const F=Y(s);if(F!==p.__cacheKey){q[F]===void 0&&(q[F]={texture:e.createTexture(),usedTimes:0},d.memory.textures++,U=!0),q[F].usedTimes++;const ve=q[p.__cacheKey];ve!==void 0&&(q[p.__cacheKey].usedTimes--,ve.usedTimes===0&&h(s)),p.__cacheKey=F,p.__webglTexture=q[F].texture}return U}function tt(p,s,U){return Math.floor(Math.floor(p/U)/s)}function We(p,s,U,G){const F=p.updateRanges;if(F.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,s.width,s.height,U,G,s.data);else{F.sort((J,oe)=>J.start-oe.start);let ve=0;for(let J=1;J<F.length;J++){const oe=F[ve],Ae=F[J],_e=oe.start+oe.count,ae=tt(Ae.start,s.width,4),Ue=tt(oe.start,s.width,4);Ae.start<=_e+1&&ae===Ue&&tt(Ae.start+Ae.count-1,s.width,4)===ae?oe.count=Math.max(oe.count,Ae.start+Ae.count-oe.start):(++ve,F[ve]=Ae)}F.length=ve+1;const ee=e.getParameter(e.UNPACK_ROW_LENGTH),he=e.getParameter(e.UNPACK_SKIP_PIXELS),me=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,s.width);for(let J=0,oe=F.length;J<oe;J++){const Ae=F[J],_e=Math.floor(Ae.start/4),ae=Math.ceil(Ae.count/4),Ue=_e%s.width,T=Math.floor(_e/s.width),j=ae,te=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ue),e.pixelStorei(e.UNPACK_SKIP_ROWS,T),t.texSubImage2D(e.TEXTURE_2D,0,Ue,T,j,te,U,G,s.data)}p.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ee),e.pixelStorei(e.UNPACK_SKIP_PIXELS,he),e.pixelStorei(e.UNPACK_SKIP_ROWS,me)}}function V(p,s,U){let G=e.TEXTURE_2D;(s.isDataArrayTexture||s.isCompressedArrayTexture)&&(G=e.TEXTURE_2D_ARRAY),s.isData3DTexture&&(G=e.TEXTURE_3D);const q=it(p,s),F=s.source;t.bindTexture(G,p.__webglTexture,e.TEXTURE0+U);const ve=i.get(F);if(F.version!==ve.__version||q===!0){t.activeTexture(e.TEXTURE0+U);const ee=rt.getPrimaries(rt.workingColorSpace),he=s.colorSpace===qt?null:rt.getPrimaries(s.colorSpace),me=s.colorSpace===qt||ee===he?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,s.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,s.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let J=w(s.image,!1,a.maxTextureSize);J=lt(s,J);const oe=r.convert(s.format,s.colorSpace),Ae=r.convert(s.type);let _e=A(s.internalFormat,oe,Ae,s.colorSpace,s.isVideoTexture);Ve(G,s);let ae;const Ue=s.mipmaps,T=s.isVideoTexture!==!0,j=ve.__version===void 0||q===!0,te=F.dataReady,ce=N(s,J);if(s.isDepthTexture)_e=S(s.format===On,s.type),j&&(T?t.texStorage2D(e.TEXTURE_2D,1,_e,J.width,J.height):t.texImage2D(e.TEXTURE_2D,0,_e,J.width,J.height,0,oe,Ae,null));else if(s.isDataTexture)if(Ue.length>0){T&&j&&t.texStorage2D(e.TEXTURE_2D,ce,_e,Ue[0].width,Ue[0].height);for(let Z=0,k=Ue.length;Z<k;Z++)ae=Ue[Z],T?te&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,ae.width,ae.height,oe,Ae,ae.data):t.texImage2D(e.TEXTURE_2D,Z,_e,ae.width,ae.height,0,oe,Ae,ae.data);s.generateMipmaps=!1}else T?(j&&t.texStorage2D(e.TEXTURE_2D,ce,_e,J.width,J.height),te&&We(s,J,oe,Ae)):t.texImage2D(e.TEXTURE_2D,0,_e,J.width,J.height,0,oe,Ae,J.data);else if(s.isCompressedTexture)if(s.isCompressedArrayTexture){T&&j&&t.texStorage3D(e.TEXTURE_2D_ARRAY,ce,_e,Ue[0].width,Ue[0].height,J.depth);for(let Z=0,k=Ue.length;Z<k;Z++)if(ae=Ue[Z],s.format!==wt)if(oe!==null)if(T){if(te)if(s.layerUpdates.size>0){const de=_a(ae.width,ae.height,s.format,s.type);for(const Pe of s.layerUpdates){const Ye=ae.data.subarray(Pe*de/ae.data.BYTES_PER_ELEMENT,(Pe+1)*de/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,Pe,ae.width,ae.height,1,oe,Ye)}s.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,ae.width,ae.height,J.depth,oe,ae.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Z,_e,ae.width,ae.height,J.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else T?te&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,ae.width,ae.height,J.depth,oe,Ae,ae.data):t.texImage3D(e.TEXTURE_2D_ARRAY,Z,_e,ae.width,ae.height,J.depth,0,oe,Ae,ae.data)}else{T&&j&&t.texStorage2D(e.TEXTURE_2D,ce,_e,Ue[0].width,Ue[0].height);for(let Z=0,k=Ue.length;Z<k;Z++)ae=Ue[Z],s.format!==wt?oe!==null?T?te&&t.compressedTexSubImage2D(e.TEXTURE_2D,Z,0,0,ae.width,ae.height,oe,ae.data):t.compressedTexImage2D(e.TEXTURE_2D,Z,_e,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):T?te&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,ae.width,ae.height,oe,Ae,ae.data):t.texImage2D(e.TEXTURE_2D,Z,_e,ae.width,ae.height,0,oe,Ae,ae.data)}else if(s.isDataArrayTexture)if(T){if(j&&t.texStorage3D(e.TEXTURE_2D_ARRAY,ce,_e,J.width,J.height,J.depth),te)if(s.layerUpdates.size>0){const Z=_a(J.width,J.height,s.format,s.type);for(const k of s.layerUpdates){const de=J.data.subarray(k*Z/J.data.BYTES_PER_ELEMENT,(k+1)*Z/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,k,J.width,J.height,1,oe,Ae,de)}s.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,oe,Ae,J.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,_e,J.width,J.height,J.depth,0,oe,Ae,J.data);else if(s.isData3DTexture)T?(j&&t.texStorage3D(e.TEXTURE_3D,ce,_e,J.width,J.height,J.depth),te&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,oe,Ae,J.data)):t.texImage3D(e.TEXTURE_3D,0,_e,J.width,J.height,J.depth,0,oe,Ae,J.data);else if(s.isFramebufferTexture){if(j)if(T)t.texStorage2D(e.TEXTURE_2D,ce,_e,J.width,J.height);else{let Z=J.width,k=J.height;for(let de=0;de<ce;de++)t.texImage2D(e.TEXTURE_2D,de,_e,Z,k,0,oe,Ae,null),Z>>=1,k>>=1}}else if(Ue.length>0){if(T&&j){const Z=at(Ue[0]);t.texStorage2D(e.TEXTURE_2D,ce,_e,Z.width,Z.height)}for(let Z=0,k=Ue.length;Z<k;Z++)ae=Ue[Z],T?te&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,oe,Ae,ae):t.texImage2D(e.TEXTURE_2D,Z,_e,oe,Ae,ae);s.generateMipmaps=!1}else if(T){if(j){const Z=at(J);t.texStorage2D(e.TEXTURE_2D,ce,_e,Z.width,Z.height)}te&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,oe,Ae,J)}else t.texImage2D(e.TEXTURE_2D,0,_e,oe,Ae,J);f(s)&&o(G),ve.__version=F.version,s.onUpdate&&s.onUpdate(s)}p.__version=s.version}function K(p,s,U){if(s.image.length!==6)return;const G=it(p,s),q=s.source;t.bindTexture(e.TEXTURE_CUBE_MAP,p.__webglTexture,e.TEXTURE0+U);const F=i.get(q);if(q.version!==F.__version||G===!0){t.activeTexture(e.TEXTURE0+U);const ve=rt.getPrimaries(rt.workingColorSpace),ee=s.colorSpace===qt?null:rt.getPrimaries(s.colorSpace),he=s.colorSpace===qt||ve===ee?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,s.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,s.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const me=s.isCompressedTexture||s.image[0].isCompressedTexture,J=s.image[0]&&s.image[0].isDataTexture,oe=[];for(let k=0;k<6;k++)!me&&!J?oe[k]=w(s.image[k],!0,a.maxCubemapSize):oe[k]=J?s.image[k].image:s.image[k],oe[k]=lt(s,oe[k]);const Ae=oe[0],_e=r.convert(s.format,s.colorSpace),ae=r.convert(s.type),Ue=A(s.internalFormat,_e,ae,s.colorSpace),T=s.isVideoTexture!==!0,j=F.__version===void 0||G===!0,te=q.dataReady;let ce=N(s,Ae);Ve(e.TEXTURE_CUBE_MAP,s);let Z;if(me){T&&j&&t.texStorage2D(e.TEXTURE_CUBE_MAP,ce,Ue,Ae.width,Ae.height);for(let k=0;k<6;k++){Z=oe[k].mipmaps;for(let de=0;de<Z.length;de++){const Pe=Z[de];s.format!==wt?_e!==null?T?te&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de,0,0,Pe.width,Pe.height,_e,Pe.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de,Ue,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):T?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de,0,0,Pe.width,Pe.height,_e,ae,Pe.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de,Ue,Pe.width,Pe.height,0,_e,ae,Pe.data)}}}else{if(Z=s.mipmaps,T&&j){Z.length>0&&ce++;const k=at(oe[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,ce,Ue,k.width,k.height)}for(let k=0;k<6;k++)if(J){T?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,oe[k].width,oe[k].height,_e,ae,oe[k].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Ue,oe[k].width,oe[k].height,0,_e,ae,oe[k].data);for(let de=0;de<Z.length;de++){const Ye=Z[de].image[k].image;T?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de+1,0,0,Ye.width,Ye.height,_e,ae,Ye.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de+1,Ue,Ye.width,Ye.height,0,_e,ae,Ye.data)}}else{T?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,_e,ae,oe[k]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Ue,_e,ae,oe[k]);for(let de=0;de<Z.length;de++){const Pe=Z[de];T?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de+1,0,0,_e,ae,Pe.image[k]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de+1,Ue,_e,ae,Pe.image[k])}}}f(s)&&o(e.TEXTURE_CUBE_MAP),F.__version=q.version,s.onUpdate&&s.onUpdate(s)}p.__version=s.version}function le(p,s,U,G,q,F){const ve=r.convert(U.format,U.colorSpace),ee=r.convert(U.type),he=A(U.internalFormat,ve,ee,U.colorSpace),me=i.get(s),J=i.get(U);if(J.__renderTarget=s,!me.__hasExternalTextures){const oe=Math.max(1,s.width>>F),Ae=Math.max(1,s.height>>F);q===e.TEXTURE_3D||q===e.TEXTURE_2D_ARRAY?t.texImage3D(q,F,he,oe,Ae,s.depth,0,ve,ee,null):t.texImage2D(q,F,he,oe,Ae,0,ve,ee,null)}t.bindFramebuffer(e.FRAMEBUFFER,p),pe(s)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,G,q,J.__webglTexture,0,Qe(s)):(q===e.TEXTURE_2D||q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,G,q,J.__webglTexture,F),t.bindFramebuffer(e.FRAMEBUFFER,null)}function Ce(p,s,U){if(e.bindRenderbuffer(e.RENDERBUFFER,p),s.depthBuffer){const G=s.depthTexture,q=G&&G.isDepthTexture?G.type:null,F=S(s.stencilBuffer,q),ve=s.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ee=Qe(s);pe(s)?l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ee,F,s.width,s.height):U?e.renderbufferStorageMultisample(e.RENDERBUFFER,ee,F,s.width,s.height):e.renderbufferStorage(e.RENDERBUFFER,F,s.width,s.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ve,e.RENDERBUFFER,p)}else{const G=s.textures;for(let q=0;q<G.length;q++){const F=G[q],ve=r.convert(F.format,F.colorSpace),ee=r.convert(F.type),he=A(F.internalFormat,ve,ee,F.colorSpace),me=Qe(s);U&&pe(s)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,me,he,s.width,s.height):pe(s)?l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,me,he,s.width,s.height):e.renderbufferStorage(e.RENDERBUFFER,he,s.width,s.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ee(p,s){if(s&&s.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(e.FRAMEBUFFER,p),!(s.depthTexture&&s.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=i.get(s.depthTexture);G.__renderTarget=s,(!G.__webglTexture||s.depthTexture.image.width!==s.width||s.depthTexture.image.height!==s.height)&&(s.depthTexture.image.width=s.width,s.depthTexture.image.height=s.height,s.depthTexture.needsUpdate=!0),$(s.depthTexture,0);const q=G.__webglTexture,F=Qe(s);if(s.depthTexture.format===bi)pe(s)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,q,0,F):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,q,0);else if(s.depthTexture.format===On)pe(s)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,q,0,F):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Fe(p){const s=i.get(p),U=p.isWebGLCubeRenderTarget===!0;if(s.__boundDepthTexture!==p.depthTexture){const G=p.depthTexture;if(s.__depthDisposeCallback&&s.__depthDisposeCallback(),G){const q=()=>{delete s.__boundDepthTexture,delete s.__depthDisposeCallback,G.removeEventListener("dispose",q)};G.addEventListener("dispose",q),s.__depthDisposeCallback=q}s.__boundDepthTexture=G}if(p.depthTexture&&!s.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");const G=p.texture.mipmaps;G&&G.length>0?Ee(s.__webglFramebuffer[0],p):Ee(s.__webglFramebuffer,p)}else if(U){s.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer[G]),s.__webglDepthbuffer[G]===void 0)s.__webglDepthbuffer[G]=e.createRenderbuffer(),Ce(s.__webglDepthbuffer[G],p,!1);else{const q=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,F=s.__webglDepthbuffer[G];e.bindRenderbuffer(e.RENDERBUFFER,F),e.framebufferRenderbuffer(e.FRAMEBUFFER,q,e.RENDERBUFFER,F)}}else{const G=p.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),s.__webglDepthbuffer===void 0)s.__webglDepthbuffer=e.createRenderbuffer(),Ce(s.__webglDepthbuffer,p,!1);else{const q=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,F=s.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,F),e.framebufferRenderbuffer(e.FRAMEBUFFER,q,e.RENDERBUFFER,F)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function ft(p,s,U){const G=i.get(p);s!==void 0&&le(G.__webglFramebuffer,p,p.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),U!==void 0&&Fe(p)}function g(p){const s=p.texture,U=i.get(p),G=i.get(s);p.addEventListener("dispose",O);const q=p.textures,F=p.isWebGLCubeRenderTarget===!0,ve=q.length>1;if(ve||(G.__webglTexture===void 0&&(G.__webglTexture=e.createTexture()),G.__version=s.version,d.memory.textures++),F){U.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(s.mipmaps&&s.mipmaps.length>0){U.__webglFramebuffer[ee]=[];for(let he=0;he<s.mipmaps.length;he++)U.__webglFramebuffer[ee][he]=e.createFramebuffer()}else U.__webglFramebuffer[ee]=e.createFramebuffer()}else{if(s.mipmaps&&s.mipmaps.length>0){U.__webglFramebuffer=[];for(let ee=0;ee<s.mipmaps.length;ee++)U.__webglFramebuffer[ee]=e.createFramebuffer()}else U.__webglFramebuffer=e.createFramebuffer();if(ve)for(let ee=0,he=q.length;ee<he;ee++){const me=i.get(q[ee]);me.__webglTexture===void 0&&(me.__webglTexture=e.createTexture(),d.memory.textures++)}if(p.samples>0&&pe(p)===!1){U.__webglMultisampledFramebuffer=e.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ee=0;ee<q.length;ee++){const he=q[ee];U.__webglColorRenderbuffer[ee]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,U.__webglColorRenderbuffer[ee]);const me=r.convert(he.format,he.colorSpace),J=r.convert(he.type),oe=A(he.internalFormat,me,J,he.colorSpace,p.isXRRenderTarget===!0),Ae=Qe(p);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae,oe,p.width,p.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ee,e.RENDERBUFFER,U.__webglColorRenderbuffer[ee])}e.bindRenderbuffer(e.RENDERBUFFER,null),p.depthBuffer&&(U.__webglDepthRenderbuffer=e.createRenderbuffer(),Ce(U.__webglDepthRenderbuffer,p,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(F){t.bindTexture(e.TEXTURE_CUBE_MAP,G.__webglTexture),Ve(e.TEXTURE_CUBE_MAP,s);for(let ee=0;ee<6;ee++)if(s.mipmaps&&s.mipmaps.length>0)for(let he=0;he<s.mipmaps.length;he++)le(U.__webglFramebuffer[ee][he],p,s,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he);else le(U.__webglFramebuffer[ee],p,s,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);f(s)&&o(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ee=0,he=q.length;ee<he;ee++){const me=q[ee],J=i.get(me);let oe=e.TEXTURE_2D;(p.isWebGL3DRenderTarget||p.isWebGLArrayRenderTarget)&&(oe=p.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(oe,J.__webglTexture),Ve(oe,me),le(U.__webglFramebuffer,p,me,e.COLOR_ATTACHMENT0+ee,oe,0),f(me)&&o(oe)}t.unbindTexture()}else{let ee=e.TEXTURE_2D;if((p.isWebGL3DRenderTarget||p.isWebGLArrayRenderTarget)&&(ee=p.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(ee,G.__webglTexture),Ve(ee,s),s.mipmaps&&s.mipmaps.length>0)for(let he=0;he<s.mipmaps.length;he++)le(U.__webglFramebuffer[he],p,s,e.COLOR_ATTACHMENT0,ee,he);else le(U.__webglFramebuffer,p,s,e.COLOR_ATTACHMENT0,ee,0);f(s)&&o(ee),t.unbindTexture()}p.depthBuffer&&Fe(p)}function Ze(p){const s=p.textures;for(let U=0,G=s.length;U<G;U++){const q=s[U];if(f(q)){const F=C(p),ve=i.get(q).__webglTexture;t.bindTexture(F,ve),o(F),t.unbindTexture()}}}const Le=[],Re=[];function ue(p){if(p.samples>0){if(pe(p)===!1){const s=p.textures,U=p.width,G=p.height;let q=e.COLOR_BUFFER_BIT;const F=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ve=i.get(p),ee=s.length>1;if(ee)for(let me=0;me<s.length;me++)t.bindFramebuffer(e.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,ve.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const he=p.texture.mipmaps;he&&he.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let me=0;me<s.length;me++){if(p.resolveDepthBuffer&&(p.depthBuffer&&(q|=e.DEPTH_BUFFER_BIT),p.stencilBuffer&&p.resolveStencilBuffer&&(q|=e.STENCIL_BUFFER_BIT)),ee){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ve.__webglColorRenderbuffer[me]);const J=i.get(s[me]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,J,0)}e.blitFramebuffer(0,0,U,G,0,0,U,G,q,e.NEAREST),E===!0&&(Le.length=0,Re.length=0,Le.push(e.COLOR_ATTACHMENT0+me),p.depthBuffer&&p.resolveDepthBuffer===!1&&(Le.push(F),Re.push(F),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Re)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Le))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ee)for(let me=0;me<s.length;me++){t.bindFramebuffer(e.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.RENDERBUFFER,ve.__webglColorRenderbuffer[me]);const J=i.get(s[me]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,ve.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.TEXTURE_2D,J,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(p.depthBuffer&&p.resolveDepthBuffer===!1&&E){const s=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[s])}}}function Qe(p){return Math.min(a.maxSamples,p.samples)}function pe(p){const s=i.get(p);return p.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&s.__useRenderToTexture!==!1}function ye(p){const s=d.render.frame;M.get(p)!==s&&(M.set(p,s),p.update())}function lt(p,s){const U=p.colorSpace,G=p.format,q=p.type;return p.isCompressedTexture===!0||p.isVideoTexture===!0||U!==Vn&&U!==qt&&(rt.getTransfer(U)===$e?(G!==wt||q!==zt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),s}function at(p){return typeof HTMLImageElement<"u"&&p instanceof HTMLImageElement?(_.width=p.naturalWidth||p.width,_.height=p.naturalHeight||p.height):typeof VideoFrame<"u"&&p instanceof VideoFrame?(_.width=p.displayWidth,_.height=p.displayHeight):(_.width=p.width,_.height=p.height),_}this.allocateTextureUnit=X,this.resetTextureUnits=B,this.setTexture2D=$,this.setTexture2DArray=W,this.setTexture3D=ne,this.setTextureCube=H,this.rebindTextures=ft,this.setupRenderTarget=g,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=le,this.useMultisampledRTT=pe}function Od(e,n){function t(i,a=qt){let r;const d=rt.getTransfer(a);if(i===zt)return e.UNSIGNED_BYTE;if(i===er)return e.UNSIGNED_SHORT_4_4_4_4;if(i===tr)return e.UNSIGNED_SHORT_5_5_5_1;if(i===mo)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===_o)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===go)return e.BYTE;if(i===vo)return e.SHORT;if(i===Bn)return e.UNSIGNED_SHORT;if(i===ir)return e.INT;if(i===gn)return e.UNSIGNED_INT;if(i===Ht)return e.FLOAT;if(i===Hn)return e.HALF_FLOAT;if(i===Eo)return e.ALPHA;if(i===So)return e.RGB;if(i===wt)return e.RGBA;if(i===bi)return e.DEPTH_COMPONENT;if(i===On)return e.DEPTH_STENCIL;if(i===Mo)return e.RED;if(i===ar)return e.RED_INTEGER;if(i===To)return e.RG;if(i===rr)return e.RG_INTEGER;if(i===or)return e.RGBA_INTEGER;if(i===$n||i===Zn||i===Qn||i===Jn)if(d===$e)if(r=n.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===$n)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Zn)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qn)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Jn)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=n.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===$n)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Zn)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qn)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Jn)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fi||i===Bi||i===Gi||i===Hi)if(r=n.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Fi)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bi)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gi)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hi)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vi||i===ki||i===zi)if(r=n.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Vi||i===ki)return d===$e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===zi)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Wi||i===Xi||i===Yi||i===qi||i===Ki||i===$i||i===Zi||i===Qi||i===Ji||i===ji||i===ea||i===ta||i===na||i===ia)if(r=n.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Wi)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xi)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yi)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===qi)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ki)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$i)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zi)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qi)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ji)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ji)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ea)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ta)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===na)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ia)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===aa||i===ra||i===oa)if(r=n.get("EXT_texture_compression_bptc"),r!==null){if(i===aa)return d===$e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ra)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===oa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===sa||i===ca||i===la||i===fa)if(r=n.get("EXT_texture_compression_rgtc"),r!==null){if(i===sa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ca)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===la)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_n?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const Fd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bd=`
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

}`;class Gd{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new nr(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new Wt({vertexShader:Fd,fragmentShader:Bd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ot(new Ci(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hd extends yr{constructor(n,t){super();const i=this;let a=null,r=1,d=null,l="local-floor",E=1,_=null,M=null,m=null,v=null,x=null,D=null;const w=typeof XRWebGLBinding<"u",f=new Gd,o={},C=t.getContextAttributes();let A=null,S=null;const N=[],L=[],O=new ut;let z=null;const h=new fn;h.viewport=new mt;const u=new fn;u.viewport=new mt;const P=[h,u],B=new Ir;let X=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let K=N[V];return K===void 0&&(K=new qn,N[V]=K),K.getTargetRaySpace()},this.getControllerGrip=function(V){let K=N[V];return K===void 0&&(K=new qn,N[V]=K),K.getGripSpace()},this.getHand=function(V){let K=N[V];return K===void 0&&(K=new qn,N[V]=K),K.getHandSpace()};function $(V){const K=L.indexOf(V.inputSource);if(K===-1)return;const le=N[K];le!==void 0&&(le.update(V.inputSource,V.frame,_||d),le.dispatchEvent({type:V.type,data:V.inputSource}))}function W(){a.removeEventListener("select",$),a.removeEventListener("selectstart",$),a.removeEventListener("selectend",$),a.removeEventListener("squeeze",$),a.removeEventListener("squeezestart",$),a.removeEventListener("squeezeend",$),a.removeEventListener("end",W),a.removeEventListener("inputsourceschange",ne);for(let V=0;V<N.length;V++){const K=L[V];K!==null&&(L[V]=null,N[V].disconnect(K))}X=null,Y=null,f.reset();for(const V in o)delete o[V];n.setRenderTarget(A),x=null,v=null,m=null,a=null,S=null,We.stop(),i.isPresenting=!1,n.setPixelRatio(z),n.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){l=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return _||d},this.setReferenceSpace=function(V){_=V},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return m===null&&w&&(m=new XRWebGLBinding(a,t)),m},this.getFrame=function(){return D},this.getSession=function(){return a},this.setSession=async function(V){if(a=V,a!==null){if(A=n.getRenderTarget(),a.addEventListener("select",$),a.addEventListener("selectstart",$),a.addEventListener("selectend",$),a.addEventListener("squeeze",$),a.addEventListener("squeezestart",$),a.addEventListener("squeezeend",$),a.addEventListener("end",W),a.addEventListener("inputsourceschange",ne),C.xrCompatible!==!0&&await t.makeXRCompatible(),z=n.getPixelRatio(),n.getSize(O),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Ce=null,Ee=null;C.depth&&(Ee=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=C.stencil?On:bi,Ce=C.stencil?_n:gn);const Fe={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};m=this.getBinding(),v=m.createProjectionLayer(Fe),a.updateRenderState({layers:[v]}),n.setPixelRatio(1),n.setSize(v.textureWidth,v.textureHeight,!1),S=new tn(v.textureWidth,v.textureHeight,{format:wt,type:zt,depthTexture:new Za(v.textureWidth,v.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:C.stencil,colorSpace:n.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const le={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:r};x=new XRWebGLLayer(a,t,le),a.updateRenderState({baseLayer:x}),n.setPixelRatio(1),n.setSize(x.framebufferWidth,x.framebufferHeight,!1),S=new tn(x.framebufferWidth,x.framebufferHeight,{format:wt,type:zt,colorSpace:n.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(E),_=null,d=await a.requestReferenceSpace(l),We.setContext(a),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function ne(V){for(let K=0;K<V.removed.length;K++){const le=V.removed[K],Ce=L.indexOf(le);Ce>=0&&(L[Ce]=null,N[Ce].disconnect(le))}for(let K=0;K<V.added.length;K++){const le=V.added[K];let Ce=L.indexOf(le);if(Ce===-1){for(let Fe=0;Fe<N.length;Fe++)if(Fe>=L.length){L.push(le),Ce=Fe;break}else if(L[Fe]===null){L[Fe]=le,Ce=Fe;break}if(Ce===-1)break}const Ee=N[Ce];Ee&&Ee.connect(le)}}const H=new we,ge=new we;function Te(V,K,le){H.setFromMatrixPosition(K.matrixWorld),ge.setFromMatrixPosition(le.matrixWorld);const Ce=H.distanceTo(ge),Ee=K.projectionMatrix.elements,Fe=le.projectionMatrix.elements,ft=Ee[14]/(Ee[10]-1),g=Ee[14]/(Ee[10]+1),Ze=(Ee[9]+1)/Ee[5],Le=(Ee[9]-1)/Ee[5],Re=(Ee[8]-1)/Ee[0],ue=(Fe[8]+1)/Fe[0],Qe=ft*Re,pe=ft*ue,ye=Ce/(-Re+ue),lt=ye*-Re;if(K.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(lt),V.translateZ(ye),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Ee[10]===-1)V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const at=ft+ye,p=g+ye,s=Qe-lt,U=pe+(Ce-lt),G=Ze*g/p*at,q=Le*g/p*at;V.projectionMatrix.makePerspective(s,U,G,q,at,p),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function De(V,K){K===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(K.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(a===null)return;let K=V.near,le=V.far;f.texture!==null&&(f.depthNear>0&&(K=f.depthNear),f.depthFar>0&&(le=f.depthFar)),B.near=u.near=h.near=K,B.far=u.far=h.far=le,(X!==B.near||Y!==B.far)&&(a.updateRenderState({depthNear:B.near,depthFar:B.far}),X=B.near,Y=B.far),B.layers.mask=V.layers.mask|6,h.layers.mask=B.layers.mask&3,u.layers.mask=B.layers.mask&5;const Ce=V.parent,Ee=B.cameras;De(B,Ce);for(let Fe=0;Fe<Ee.length;Fe++)De(Ee[Fe],Ce);Ee.length===2?Te(B,h,u):B.projectionMatrix.copy(h.projectionMatrix),Ve(V,B,Ce)};function Ve(V,K,le){le===null?V.matrix.copy(K.matrixWorld):(V.matrix.copy(le.matrixWorld),V.matrix.invert(),V.matrix.multiply(K.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Nr*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(v===null&&x===null))return E},this.setFoveation=function(V){E=V,v!==null&&(v.fixedFoveation=V),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=V)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(B)},this.getCameraTexture=function(V){return o[V]};let it=null;function tt(V,K){if(M=K.getViewerPose(_||d),D=K,M!==null){const le=M.views;x!==null&&(n.setRenderTargetFramebuffer(S,x.framebuffer),n.setRenderTarget(S));let Ce=!1;le.length!==B.cameras.length&&(B.cameras.length=0,Ce=!0);for(let g=0;g<le.length;g++){const Ze=le[g];let Le=null;if(x!==null)Le=x.getViewport(Ze);else{const ue=m.getViewSubImage(v,Ze);Le=ue.viewport,g===0&&(n.setRenderTargetTextures(S,ue.colorTexture,ue.depthStencilTexture),n.setRenderTarget(S))}let Re=P[g];Re===void 0&&(Re=new fn,Re.layers.enable(g),Re.viewport=new mt,P[g]=Re),Re.matrix.fromArray(Ze.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Ze.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Le.x,Le.y,Le.width,Le.height),g===0&&(B.matrix.copy(Re.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ce===!0&&B.cameras.push(Re)}const Ee=a.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&w){m=i.getBinding();const g=m.getDepthInformation(le[0]);g&&g.isValid&&g.texture&&f.init(g,a.renderState)}if(Ee&&Ee.includes("camera-access")&&w){n.state.unbindTexture(),m=i.getBinding();for(let g=0;g<le.length;g++){const Ze=le[g].camera;if(Ze){let Le=o[Ze];Le||(Le=new nr,o[Ze]=Le);const Re=m.getCameraImage(Ze);Le.sourceTexture=Re}}}}for(let le=0;le<N.length;le++){const Ce=L[le],Ee=N[le];Ce!==null&&Ee!==void 0&&Ee.update(Ce,K,_||d)}it&&it(V,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),D=null}const We=new ur;We.setAnimationLoop(tt),this.setAnimationLoop=function(V){it=V},this.dispose=function(){}}}const Ft=new lr,Vd=new en;function kd(e,n){function t(f,o){f.matrixAutoUpdate===!0&&f.updateMatrix(),o.value.copy(f.matrix)}function i(f,o){o.color.getRGB(f.fogColor.value,cr(e)),o.isFog?(f.fogNear.value=o.near,f.fogFar.value=o.far):o.isFogExp2&&(f.fogDensity.value=o.density)}function a(f,o,C,A,S){o.isMeshBasicMaterial||o.isMeshLambertMaterial?r(f,o):o.isMeshToonMaterial?(r(f,o),m(f,o)):o.isMeshPhongMaterial?(r(f,o),M(f,o)):o.isMeshStandardMaterial?(r(f,o),v(f,o),o.isMeshPhysicalMaterial&&x(f,o,S)):o.isMeshMatcapMaterial?(r(f,o),D(f,o)):o.isMeshDepthMaterial?r(f,o):o.isMeshDistanceMaterial?(r(f,o),w(f,o)):o.isMeshNormalMaterial?r(f,o):o.isLineBasicMaterial?(d(f,o),o.isLineDashedMaterial&&l(f,o)):o.isPointsMaterial?E(f,o,C,A):o.isSpriteMaterial?_(f,o):o.isShadowMaterial?(f.color.value.copy(o.color),f.opacity.value=o.opacity):o.isShaderMaterial&&(o.uniformsNeedUpdate=!1)}function r(f,o){f.opacity.value=o.opacity,o.color&&f.diffuse.value.copy(o.color),o.emissive&&f.emissive.value.copy(o.emissive).multiplyScalar(o.emissiveIntensity),o.map&&(f.map.value=o.map,t(o.map,f.mapTransform)),o.alphaMap&&(f.alphaMap.value=o.alphaMap,t(o.alphaMap,f.alphaMapTransform)),o.bumpMap&&(f.bumpMap.value=o.bumpMap,t(o.bumpMap,f.bumpMapTransform),f.bumpScale.value=o.bumpScale,o.side===St&&(f.bumpScale.value*=-1)),o.normalMap&&(f.normalMap.value=o.normalMap,t(o.normalMap,f.normalMapTransform),f.normalScale.value.copy(o.normalScale),o.side===St&&f.normalScale.value.negate()),o.displacementMap&&(f.displacementMap.value=o.displacementMap,t(o.displacementMap,f.displacementMapTransform),f.displacementScale.value=o.displacementScale,f.displacementBias.value=o.displacementBias),o.emissiveMap&&(f.emissiveMap.value=o.emissiveMap,t(o.emissiveMap,f.emissiveMapTransform)),o.specularMap&&(f.specularMap.value=o.specularMap,t(o.specularMap,f.specularMapTransform)),o.alphaTest>0&&(f.alphaTest.value=o.alphaTest);const C=n.get(o),A=C.envMap,S=C.envMapRotation;A&&(f.envMap.value=A,Ft.copy(S),Ft.x*=-1,Ft.y*=-1,Ft.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ft.y*=-1,Ft.z*=-1),f.envMapRotation.value.setFromMatrix4(Vd.makeRotationFromEuler(Ft)),f.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=o.reflectivity,f.ior.value=o.ior,f.refractionRatio.value=o.refractionRatio),o.lightMap&&(f.lightMap.value=o.lightMap,f.lightMapIntensity.value=o.lightMapIntensity,t(o.lightMap,f.lightMapTransform)),o.aoMap&&(f.aoMap.value=o.aoMap,f.aoMapIntensity.value=o.aoMapIntensity,t(o.aoMap,f.aoMapTransform))}function d(f,o){f.diffuse.value.copy(o.color),f.opacity.value=o.opacity,o.map&&(f.map.value=o.map,t(o.map,f.mapTransform))}function l(f,o){f.dashSize.value=o.dashSize,f.totalSize.value=o.dashSize+o.gapSize,f.scale.value=o.scale}function E(f,o,C,A){f.diffuse.value.copy(o.color),f.opacity.value=o.opacity,f.size.value=o.size*C,f.scale.value=A*.5,o.map&&(f.map.value=o.map,t(o.map,f.uvTransform)),o.alphaMap&&(f.alphaMap.value=o.alphaMap,t(o.alphaMap,f.alphaMapTransform)),o.alphaTest>0&&(f.alphaTest.value=o.alphaTest)}function _(f,o){f.diffuse.value.copy(o.color),f.opacity.value=o.opacity,f.rotation.value=o.rotation,o.map&&(f.map.value=o.map,t(o.map,f.mapTransform)),o.alphaMap&&(f.alphaMap.value=o.alphaMap,t(o.alphaMap,f.alphaMapTransform)),o.alphaTest>0&&(f.alphaTest.value=o.alphaTest)}function M(f,o){f.specular.value.copy(o.specular),f.shininess.value=Math.max(o.shininess,1e-4)}function m(f,o){o.gradientMap&&(f.gradientMap.value=o.gradientMap)}function v(f,o){f.metalness.value=o.metalness,o.metalnessMap&&(f.metalnessMap.value=o.metalnessMap,t(o.metalnessMap,f.metalnessMapTransform)),f.roughness.value=o.roughness,o.roughnessMap&&(f.roughnessMap.value=o.roughnessMap,t(o.roughnessMap,f.roughnessMapTransform)),o.envMap&&(f.envMapIntensity.value=o.envMapIntensity)}function x(f,o,C){f.ior.value=o.ior,o.sheen>0&&(f.sheenColor.value.copy(o.sheenColor).multiplyScalar(o.sheen),f.sheenRoughness.value=o.sheenRoughness,o.sheenColorMap&&(f.sheenColorMap.value=o.sheenColorMap,t(o.sheenColorMap,f.sheenColorMapTransform)),o.sheenRoughnessMap&&(f.sheenRoughnessMap.value=o.sheenRoughnessMap,t(o.sheenRoughnessMap,f.sheenRoughnessMapTransform))),o.clearcoat>0&&(f.clearcoat.value=o.clearcoat,f.clearcoatRoughness.value=o.clearcoatRoughness,o.clearcoatMap&&(f.clearcoatMap.value=o.clearcoatMap,t(o.clearcoatMap,f.clearcoatMapTransform)),o.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=o.clearcoatRoughnessMap,t(o.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),o.clearcoatNormalMap&&(f.clearcoatNormalMap.value=o.clearcoatNormalMap,t(o.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(o.clearcoatNormalScale),o.side===St&&f.clearcoatNormalScale.value.negate())),o.dispersion>0&&(f.dispersion.value=o.dispersion),o.iridescence>0&&(f.iridescence.value=o.iridescence,f.iridescenceIOR.value=o.iridescenceIOR,f.iridescenceThicknessMinimum.value=o.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=o.iridescenceThicknessRange[1],o.iridescenceMap&&(f.iridescenceMap.value=o.iridescenceMap,t(o.iridescenceMap,f.iridescenceMapTransform)),o.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=o.iridescenceThicknessMap,t(o.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),o.transmission>0&&(f.transmission.value=o.transmission,f.transmissionSamplerMap.value=C.texture,f.transmissionSamplerSize.value.set(C.width,C.height),o.transmissionMap&&(f.transmissionMap.value=o.transmissionMap,t(o.transmissionMap,f.transmissionMapTransform)),f.thickness.value=o.thickness,o.thicknessMap&&(f.thicknessMap.value=o.thicknessMap,t(o.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=o.attenuationDistance,f.attenuationColor.value.copy(o.attenuationColor)),o.anisotropy>0&&(f.anisotropyVector.value.set(o.anisotropy*Math.cos(o.anisotropyRotation),o.anisotropy*Math.sin(o.anisotropyRotation)),o.anisotropyMap&&(f.anisotropyMap.value=o.anisotropyMap,t(o.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=o.specularIntensity,f.specularColor.value.copy(o.specularColor),o.specularColorMap&&(f.specularColorMap.value=o.specularColorMap,t(o.specularColorMap,f.specularColorMapTransform)),o.specularIntensityMap&&(f.specularIntensityMap.value=o.specularIntensityMap,t(o.specularIntensityMap,f.specularIntensityMapTransform))}function D(f,o){o.matcap&&(f.matcap.value=o.matcap)}function w(f,o){const C=n.get(o).light;f.referencePosition.value.setFromMatrixPosition(C.matrixWorld),f.nearDistance.value=C.shadow.camera.near,f.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function zd(e,n,t,i){let a={},r={},d=[];const l=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function E(C,A){const S=A.program;i.uniformBlockBinding(C,S)}function _(C,A){let S=a[C.id];S===void 0&&(D(C),S=M(C),a[C.id]=S,C.addEventListener("dispose",f));const N=A.program;i.updateUBOMapping(C,N);const L=n.render.frame;r[C.id]!==L&&(v(C),r[C.id]=L)}function M(C){const A=m();C.__bindingPointIndex=A;const S=e.createBuffer(),N=C.__size,L=C.usage;return e.bindBuffer(e.UNIFORM_BUFFER,S),e.bufferData(e.UNIFORM_BUFFER,N,L),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,A,S),S}function m(){for(let C=0;C<l;C++)if(d.indexOf(C)===-1)return d.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const A=a[C.id],S=C.uniforms,N=C.__cache;e.bindBuffer(e.UNIFORM_BUFFER,A);for(let L=0,O=S.length;L<O;L++){const z=Array.isArray(S[L])?S[L]:[S[L]];for(let h=0,u=z.length;h<u;h++){const P=z[h];if(x(P,L,h,N)===!0){const B=P.__offset,X=Array.isArray(P.value)?P.value:[P.value];let Y=0;for(let $=0;$<X.length;$++){const W=X[$],ne=w(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,e.bufferSubData(e.UNIFORM_BUFFER,B+Y,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,Y),Y+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,B,P.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function x(C,A,S,N){const L=C.value,O=A+"_"+S;if(N[O]===void 0)return typeof L=="number"||typeof L=="boolean"?N[O]=L:N[O]=L.clone(),!0;{const z=N[O];if(typeof L=="number"||typeof L=="boolean"){if(z!==L)return N[O]=L,!0}else if(z.equals(L)===!1)return z.copy(L),!0}return!1}function D(C){const A=C.uniforms;let S=0;const N=16;for(let O=0,z=A.length;O<z;O++){const h=Array.isArray(A[O])?A[O]:[A[O]];for(let u=0,P=h.length;u<P;u++){const B=h[u],X=Array.isArray(B.value)?B.value:[B.value];for(let Y=0,$=X.length;Y<$;Y++){const W=X[Y],ne=w(W),H=S%N,ge=H%ne.boundary,Te=H+ge;S+=ge,Te!==0&&N-Te<ne.storage&&(S+=N-Te),B.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=ne.storage}}}const L=S%N;return L>0&&(S+=N-L),C.__size=S,C.__cache={},this}function w(C){const A={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(A.boundary=4,A.storage=4):C.isVector2?(A.boundary=8,A.storage=8):C.isVector3||C.isColor?(A.boundary=16,A.storage=12):C.isVector4?(A.boundary=16,A.storage=16):C.isMatrix3?(A.boundary=48,A.storage=48):C.isMatrix4?(A.boundary=64,A.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),A}function f(C){const A=C.target;A.removeEventListener("dispose",f);const S=d.indexOf(A.__bindingPointIndex);d.splice(S,1),e.deleteBuffer(a[A.id]),delete a[A.id],delete r[A.id]}function o(){for(const C in a)e.deleteBuffer(a[C]);d=[],a={},r={}}return{bind:E,update:_,dispose:o}}class Wd{constructor(n={}){const{canvas:t=Pr(),context:i=null,depth:a=!0,stencil:r=!1,alpha:d=!1,antialias:l=!1,premultipliedAlpha:E=!0,preserveDrawingBuffer:_=!1,powerPreference:M="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:v=!1}=n;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=d;const D=new Uint32Array(4),w=new Int32Array(4);let f=null,o=null;const C=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let N=!1;this._outputColorSpace=Lr;let L=0,O=0,z=null,h=-1,u=null;const P=new mt,B=new mt;let X=null;const Y=new Be(0);let $=0,W=t.width,ne=t.height,H=1,ge=null,Te=null;const De=new mt(0,0,W,ne),Ve=new mt(0,0,W,ne);let it=!1;const tt=new $a;let We=!1,V=!1;const K=new en,le=new we,Ce=new mt,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function ft(){return z===null?H:1}let g=i;function Ze(c,R){return t.getContext(c,R)}try{const c={alpha:!0,depth:a,stencil:r,antialias:l,premultipliedAlpha:E,preserveDrawingBuffer:_,powerPreference:M,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ur}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",Z,!1),g===null){const R="webgl2";if(g=Ze(R,c),g===null)throw Ze(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(c){throw console.error("THREE.WebGLRenderer: "+c.message),c}let Le,Re,ue,Qe,pe,ye,lt,at,p,s,U,G,q,F,ve,ee,he,me,J,oe,Ae,_e,ae,Ue;function T(){Le=new jl(g),Le.init(),_e=new Od(g,Le),Re=new Yl(g,Le,n,_e),ue=new Id(g,Le),Re.reversedDepthBuffer&&v&&ue.buffers.depth.setReversed(!0),Qe=new nf(g),pe=new Md,ye=new Nd(g,Le,ue,pe,Re,_e,Qe),lt=new Kl(S),at=new Jl(S),p=new cs(g),ae=new Wl(g,p),s=new ef(g,p,Qe,ae),U=new rf(g,s,p,Qe),J=new af(g,Re,ye),ee=new ql(pe),G=new Sd(S,lt,at,Le,Re,ae,ee),q=new kd(S,pe),F=new xd,ve=new Pd(Le),me=new zl(S,lt,at,ue,U,x,E),he=new Dd(S,U,Re),Ue=new zd(g,Qe,Re,ue),oe=new Xl(g,Le,Qe),Ae=new tf(g,Le,Qe),Qe.programs=G.programs,S.capabilities=Re,S.extensions=Le,S.properties=pe,S.renderLists=F,S.shadowMap=he,S.state=ue,S.info=Qe}T();const j=new Hd(S,g);this.xr=j,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const c=Le.get("WEBGL_lose_context");c&&c.loseContext()},this.forceContextRestore=function(){const c=Le.get("WEBGL_lose_context");c&&c.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(c){c!==void 0&&(H=c,this.setSize(W,ne,!1))},this.getSize=function(c){return c.set(W,ne)},this.setSize=function(c,R,y=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=c,ne=R,t.width=Math.floor(c*H),t.height=Math.floor(R*H),y===!0&&(t.style.width=c+"px",t.style.height=R+"px"),this.setViewport(0,0,c,R)},this.getDrawingBufferSize=function(c){return c.set(W*H,ne*H).floor()},this.setDrawingBufferSize=function(c,R,y){W=c,ne=R,H=y,t.width=Math.floor(c*y),t.height=Math.floor(R*y),this.setViewport(0,0,c,R)},this.getCurrentViewport=function(c){return c.copy(P)},this.getViewport=function(c){return c.copy(De)},this.setViewport=function(c,R,y,I){c.isVector4?De.set(c.x,c.y,c.z,c.w):De.set(c,R,y,I),ue.viewport(P.copy(De).multiplyScalar(H).round())},this.getScissor=function(c){return c.copy(Ve)},this.setScissor=function(c,R,y,I){c.isVector4?Ve.set(c.x,c.y,c.z,c.w):Ve.set(c,R,y,I),ue.scissor(B.copy(Ve).multiplyScalar(H).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(c){ue.setScissorTest(it=c)},this.setOpaqueSort=function(c){ge=c},this.setTransparentSort=function(c){Te=c},this.getClearColor=function(c){return c.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(c=!0,R=!0,y=!0){let I=0;if(c){let b=!1;if(z!==null){const Q=z.texture.format;b=Q===or||Q===rr||Q===ar}if(b){const Q=z.texture.type,re=Q===zt||Q===gn||Q===Bn||Q===_n||Q===er||Q===tr,fe=me.getClearColor(),se=me.getClearAlpha(),xe=fe.r,be=fe.g,Se=fe.b;re?(D[0]=xe,D[1]=be,D[2]=Se,D[3]=se,g.clearBufferuiv(g.COLOR,0,D)):(w[0]=xe,w[1]=be,w[2]=Se,w[3]=se,g.clearBufferiv(g.COLOR,0,w))}else I|=g.COLOR_BUFFER_BIT}R&&(I|=g.DEPTH_BUFFER_BIT),y&&(I|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),me.dispose(),F.dispose(),ve.dispose(),pe.dispose(),lt.dispose(),at.dispose(),U.dispose(),ae.dispose(),Ue.dispose(),G.dispose(),j.dispose(),j.removeEventListener("sessionstart",Mt),j.removeEventListener("sessionend",Li),It.stop()};function te(c){c.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const c=Qe.autoReset,R=he.enabled,y=he.autoUpdate,I=he.needsUpdate,b=he.type;T(),Qe.autoReset=c,he.enabled=R,he.autoUpdate=y,he.needsUpdate=I,he.type=b}function Z(c){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",c.statusMessage)}function k(c){const R=c.target;R.removeEventListener("dispose",k),de(R)}function de(c){Pe(c),pe.remove(c)}function Pe(c){const R=pe.get(c).programs;R!==void 0&&(R.forEach(function(y){G.releaseProgram(y)}),c.isShaderMaterial&&G.releaseShaderCache(c))}this.renderBufferDirect=function(c,R,y,I,b,Q){R===null&&(R=Ee);const re=b.isMesh&&b.matrixWorld.determinant()<0,fe=xr(c,R,y,I,b);ue.setMaterial(I,re);let se=y.index,xe=1;if(I.wireframe===!0){if(se=s.getWireframeAttribute(y),se===void 0)return;xe=2}const be=y.drawRange,Se=y.attributes.position;let Oe=be.start*xe,ze=(be.start+be.count)*xe;Q!==null&&(Oe=Math.max(Oe,Q.start*xe),ze=Math.min(ze,(Q.start+Q.count)*xe)),se!==null?(Oe=Math.max(Oe,0),ze=Math.min(ze,se.count)):Se!=null&&(Oe=Math.max(Oe,0),ze=Math.min(ze,Se.count));const nt=ze-Oe;if(nt<0||nt===1/0)return;ae.setup(b,I,fe,y,se);let qe,Xe=oe;if(se!==null&&(qe=p.get(se),Xe=Ae,Xe.setIndex(qe)),b.isMesh)I.wireframe===!0?(ue.setLineWidth(I.wireframeLinewidth*ft()),Xe.setMode(g.LINES)):Xe.setMode(g.TRIANGLES);else if(b.isLine){let Me=I.linewidth;Me===void 0&&(Me=1),ue.setLineWidth(Me*ft()),b.isLineSegments?Xe.setMode(g.LINES):b.isLineLoop?Xe.setMode(g.LINE_LOOP):Xe.setMode(g.LINE_STRIP)}else b.isPoints?Xe.setMode(g.POINTS):b.isSprite&&Xe.setMode(g.TRIANGLES);if(b.isBatchedMesh)if(b._multiDrawInstances!==null)fi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Xe.renderMultiDrawInstances(b._multiDrawStarts,b._multiDrawCounts,b._multiDrawCount,b._multiDrawInstances);else if(Le.get("WEBGL_multi_draw"))Xe.renderMultiDraw(b._multiDrawStarts,b._multiDrawCounts,b._multiDrawCount);else{const Me=b._multiDrawStarts,Je=b._multiDrawCounts,Ge=b._multiDrawCount,_t=se?p.get(se).bytesPerElement:1,Xt=pe.get(I).currentProgram.getUniforms();for(let gt=0;gt<Ge;gt++)Xt.setValue(g,"_gl_DrawID",gt),Xe.render(Me[gt]/_t,Je[gt])}else if(b.isInstancedMesh)Xe.renderInstances(Oe,nt,b.count);else if(y.isInstancedBufferGeometry){const Me=y._maxInstanceCount!==void 0?y._maxInstanceCount:1/0,Je=Math.min(y.instanceCount,Me);Xe.renderInstances(Oe,nt,Je)}else Xe.render(Oe,nt)};function Ye(c,R,y){c.transparent===!0&&c.side===Ct&&c.forceSinglePass===!1?(c.side=St,c.needsUpdate=!0,An(c,R,y),c.side=mn,c.needsUpdate=!0,An(c,R,y),c.side=Ct):An(c,R,y)}this.compile=function(c,R,y=null){y===null&&(y=c),o=ve.get(y),o.init(R),A.push(o),y.traverseVisible(function(b){b.isLight&&b.layers.test(R.layers)&&(o.pushLight(b),b.castShadow&&o.pushShadow(b))}),c!==y&&c.traverseVisible(function(b){b.isLight&&b.layers.test(R.layers)&&(o.pushLight(b),b.castShadow&&o.pushShadow(b))}),o.setupLights();const I=new Set;return c.traverse(function(b){if(!(b.isMesh||b.isPoints||b.isLine||b.isSprite))return;const Q=b.material;if(Q)if(Array.isArray(Q))for(let re=0;re<Q.length;re++){const fe=Q[re];Ye(fe,y,b),I.add(fe)}else Ye(Q,y,b),I.add(Q)}),o=A.pop(),I},this.compileAsync=function(c,R,y=null){const I=this.compile(c,R,y);return new Promise(b=>{function Q(){if(I.forEach(function(re){pe.get(re).currentProgram.isReady()&&I.delete(re)}),I.size===0){b(c);return}setTimeout(Q,10)}Le.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let ke=null;function At(c){ke&&ke(c)}function Mt(){It.stop()}function Li(){It.start()}const It=new ur;It.setAnimationLoop(At),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(c){ke=c,j.setAnimationLoop(c),c===null?It.stop():It.start()},j.addEventListener("sessionstart",Mt),j.addEventListener("sessionend",Li),this.render=function(c,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(c.matrixWorldAutoUpdate===!0&&c.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(R),R=j.getCamera()),c.isScene===!0&&c.onBeforeRender(S,c,R,z),o=ve.get(c,A.length),o.init(R),A.push(o),K.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),tt.setFromProjectionMatrix(K,Oi,R.reversedDepth),V=this.localClippingEnabled,We=ee.init(this.clippingPlanes,V),f=F.get(c,C.length),f.init(),C.push(f),j.enabled===!0&&j.isPresenting===!0){const Q=S.xr.getDepthSensingMesh();Q!==null&&Xn(Q,R,-1/0,S.sortObjects)}Xn(c,R,0,S.sortObjects),f.finish(),S.sortObjects===!0&&f.sort(ge,Te),Fe=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Fe&&me.addToRenderList(f,c),this.info.render.frame++,We===!0&&ee.beginShadows();const y=o.state.shadowsArray;he.render(y,c,R),We===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const I=f.opaque,b=f.transmissive;if(o.setupLights(),R.isArrayCamera){const Q=R.cameras;if(b.length>0)for(let re=0,fe=Q.length;re<fe;re++){const se=Q[re];Di(I,b,c,se)}Fe&&me.render(c);for(let re=0,fe=Q.length;re<fe;re++){const se=Q[re];Ui(f,c,se,se.viewport)}}else b.length>0&&Di(I,b,c,R),Fe&&me.render(c),Ui(f,c,R);z!==null&&O===0&&(ye.updateMultisampleRenderTarget(z),ye.updateRenderTargetMipmap(z)),c.isScene===!0&&c.onAfterRender(S,c,R),ae.resetDefaultState(),h=-1,u=null,A.pop(),A.length>0?(o=A[A.length-1],We===!0&&ee.setGlobalState(S.clippingPlanes,o.state.camera)):o=null,C.pop(),C.length>0?f=C[C.length-1]:f=null};function Xn(c,R,y,I){if(c.visible===!1)return;if(c.layers.test(R.layers)){if(c.isGroup)y=c.renderOrder;else if(c.isLOD)c.autoUpdate===!0&&c.update(R);else if(c.isLight)o.pushLight(c),c.castShadow&&o.pushShadow(c);else if(c.isSprite){if(!c.frustumCulled||tt.intersectsSprite(c)){I&&Ce.setFromMatrixPosition(c.matrixWorld).applyMatrix4(K);const re=U.update(c),fe=c.material;fe.visible&&f.push(c,re,fe,y,Ce.z,null)}}else if((c.isMesh||c.isLine||c.isPoints)&&(!c.frustumCulled||tt.intersectsObject(c))){const re=U.update(c),fe=c.material;if(I&&(c.boundingSphere!==void 0?(c.boundingSphere===null&&c.computeBoundingSphere(),Ce.copy(c.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),Ce.copy(re.boundingSphere.center)),Ce.applyMatrix4(c.matrixWorld).applyMatrix4(K)),Array.isArray(fe)){const se=re.groups;for(let xe=0,be=se.length;xe<be;xe++){const Se=se[xe],Oe=fe[Se.materialIndex];Oe&&Oe.visible&&f.push(c,re,Oe,y,Ce.z,Se)}}else fe.visible&&f.push(c,re,fe,y,Ce.z,null)}}const Q=c.children;for(let re=0,fe=Q.length;re<fe;re++)Xn(Q[re],R,y,I)}function Ui(c,R,y,I){const b=c.opaque,Q=c.transmissive,re=c.transparent;o.setupLightsView(y),We===!0&&ee.setGlobalState(S.clippingPlanes,y),I&&ue.viewport(P.copy(I)),b.length>0&&xn(b,R,y),Q.length>0&&xn(Q,R,y),re.length>0&&xn(re,R,y),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Di(c,R,y,I){if((y.isScene===!0?y.overrideMaterial:null)!==null)return;o.state.transmissionRenderTarget[I.id]===void 0&&(o.state.transmissionRenderTarget[I.id]=new tn(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float")?Hn:zt,minFilter:cn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const Q=o.state.transmissionRenderTarget[I.id],re=I.viewport||P;Q.setSize(re.z*S.transmissionResolutionScale,re.w*S.transmissionResolutionScale);const fe=S.getRenderTarget(),se=S.getActiveCubeFace(),xe=S.getActiveMipmapLevel();S.setRenderTarget(Q),S.getClearColor(Y),$=S.getClearAlpha(),$<1&&S.setClearColor(16777215,.5),S.clear(),Fe&&me.render(y);const be=S.toneMapping;S.toneMapping=yt;const Se=I.viewport;if(I.viewport!==void 0&&(I.viewport=void 0),o.setupLightsView(I),We===!0&&ee.setGlobalState(S.clippingPlanes,I),xn(c,y,I),ye.updateMultisampleRenderTarget(Q),ye.updateRenderTargetMipmap(Q),Le.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let ze=0,nt=R.length;ze<nt;ze++){const qe=R[ze],Xe=qe.object,Me=qe.geometry,Je=qe.material,Ge=qe.group;if(Je.side===Ct&&Xe.layers.test(I.layers)){const _t=Je.side;Je.side=St,Je.needsUpdate=!0,yi(Xe,y,I,Me,Je,Ge),Je.side=_t,Je.needsUpdate=!0,Oe=!0}}Oe===!0&&(ye.updateMultisampleRenderTarget(Q),ye.updateRenderTargetMipmap(Q))}S.setRenderTarget(fe,se,xe),S.setClearColor(Y,$),Se!==void 0&&(I.viewport=Se),S.toneMapping=be}function xn(c,R,y){const I=R.isScene===!0?R.overrideMaterial:null;for(let b=0,Q=c.length;b<Q;b++){const re=c[b],fe=re.object,se=re.geometry,xe=re.group;let be=re.material;be.allowOverride===!0&&I!==null&&(be=I),fe.layers.test(y.layers)&&yi(fe,R,y,se,be,xe)}}function yi(c,R,y,I,b,Q){c.onBeforeRender(S,R,y,I,b,Q),c.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,c.matrixWorld),c.normalMatrix.getNormalMatrix(c.modelViewMatrix),b.onBeforeRender(S,R,y,I,c,Q),b.transparent===!0&&b.side===Ct&&b.forceSinglePass===!1?(b.side=St,b.needsUpdate=!0,S.renderBufferDirect(y,R,I,b,c,Q),b.side=mn,b.needsUpdate=!0,S.renderBufferDirect(y,R,I,b,c,Q),b.side=Ct):S.renderBufferDirect(y,R,I,b,c,Q),c.onAfterRender(S,R,y,I,b,Q)}function An(c,R,y){R.isScene!==!0&&(R=Ee);const I=pe.get(c),b=o.state.lights,Q=o.state.shadowsArray,re=b.state.version,fe=G.getParameters(c,b.state,Q,R,y),se=G.getProgramCacheKey(fe);let xe=I.programs;I.environment=c.isMeshStandardMaterial?R.environment:null,I.fog=R.fog,I.envMap=(c.isMeshStandardMaterial?at:lt).get(c.envMap||I.environment),I.envMapRotation=I.environment!==null&&c.envMap===null?R.environmentRotation:c.envMapRotation,xe===void 0&&(c.addEventListener("dispose",k),xe=new Map,I.programs=xe);let be=xe.get(se);if(be!==void 0){if(I.currentProgram===be&&I.lightsStateVersion===re)return Ni(c,fe),be}else fe.uniforms=G.getUniforms(c),c.onBeforeCompile(fe,S),be=G.acquireProgram(fe,se),xe.set(se,be),I.uniforms=fe.uniforms;const Se=I.uniforms;return(!c.isShaderMaterial&&!c.isRawShaderMaterial||c.clipping===!0)&&(Se.clippingPlanes=ee.uniform),Ni(c,fe),I.needsLights=Rr(c),I.lightsStateVersion=re,I.needsLights&&(Se.ambientLightColor.value=b.state.ambient,Se.lightProbe.value=b.state.probe,Se.directionalLights.value=b.state.directional,Se.directionalLightShadows.value=b.state.directionalShadow,Se.spotLights.value=b.state.spot,Se.spotLightShadows.value=b.state.spotShadow,Se.rectAreaLights.value=b.state.rectArea,Se.ltc_1.value=b.state.rectAreaLTC1,Se.ltc_2.value=b.state.rectAreaLTC2,Se.pointLights.value=b.state.point,Se.pointLightShadows.value=b.state.pointShadow,Se.hemisphereLights.value=b.state.hemi,Se.directionalShadowMap.value=b.state.directionalShadowMap,Se.directionalShadowMatrix.value=b.state.directionalShadowMatrix,Se.spotShadowMap.value=b.state.spotShadowMap,Se.spotLightMatrix.value=b.state.spotLightMatrix,Se.spotLightMap.value=b.state.spotLightMap,Se.pointShadowMap.value=b.state.pointShadowMap,Se.pointShadowMatrix.value=b.state.pointShadowMatrix),I.currentProgram=be,I.uniformsList=null,be}function Ii(c){if(c.uniformsList===null){const R=c.currentProgram.getUniforms();c.uniformsList=In.seqWithValue(R.seq,c.uniforms)}return c.uniformsList}function Ni(c,R){const y=pe.get(c);y.outputColorSpace=R.outputColorSpace,y.batching=R.batching,y.batchingColor=R.batchingColor,y.instancing=R.instancing,y.instancingColor=R.instancingColor,y.instancingMorph=R.instancingMorph,y.skinning=R.skinning,y.morphTargets=R.morphTargets,y.morphNormals=R.morphNormals,y.morphColors=R.morphColors,y.morphTargetsCount=R.morphTargetsCount,y.numClippingPlanes=R.numClippingPlanes,y.numIntersection=R.numClipIntersection,y.vertexAlphas=R.vertexAlphas,y.vertexTangents=R.vertexTangents,y.toneMapping=R.toneMapping}function xr(c,R,y,I,b){R.isScene!==!0&&(R=Ee),ye.resetTextureUnits();const Q=R.fog,re=I.isMeshStandardMaterial?R.environment:null,fe=z===null?S.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Vn,se=(I.isMeshStandardMaterial?at:lt).get(I.envMap||re),xe=I.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,be=!!y.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),Se=!!y.morphAttributes.position,Oe=!!y.morphAttributes.normal,ze=!!y.morphAttributes.color;let nt=yt;I.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(nt=S.toneMapping);const qe=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,Xe=qe!==void 0?qe.length:0,Me=pe.get(I),Je=o.state.lights;if(We===!0&&(V===!0||c!==u)){const dt=c===u&&I.id===h;ee.setState(I,c,dt)}let Ge=!1;I.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Je.state.version||Me.outputColorSpace!==fe||b.isBatchedMesh&&Me.batching===!1||!b.isBatchedMesh&&Me.batching===!0||b.isBatchedMesh&&Me.batchingColor===!0&&b.colorTexture===null||b.isBatchedMesh&&Me.batchingColor===!1&&b.colorTexture!==null||b.isInstancedMesh&&Me.instancing===!1||!b.isInstancedMesh&&Me.instancing===!0||b.isSkinnedMesh&&Me.skinning===!1||!b.isSkinnedMesh&&Me.skinning===!0||b.isInstancedMesh&&Me.instancingColor===!0&&b.instanceColor===null||b.isInstancedMesh&&Me.instancingColor===!1&&b.instanceColor!==null||b.isInstancedMesh&&Me.instancingMorph===!0&&b.morphTexture===null||b.isInstancedMesh&&Me.instancingMorph===!1&&b.morphTexture!==null||Me.envMap!==se||I.fog===!0&&Me.fog!==Q||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==ee.numPlanes||Me.numIntersection!==ee.numIntersection)||Me.vertexAlphas!==xe||Me.vertexTangents!==be||Me.morphTargets!==Se||Me.morphNormals!==Oe||Me.morphColors!==ze||Me.toneMapping!==nt||Me.morphTargetsCount!==Xe)&&(Ge=!0):(Ge=!0,Me.__version=I.version);let _t=Me.currentProgram;Ge===!0&&(_t=An(I,R,b));let Xt=!1,gt=!1,on=!1;const je=_t.getUniforms(),vt=Me.uniforms;if(ue.useProgram(_t.program)&&(Xt=!0,gt=!0,on=!0),I.id!==h&&(h=I.id,gt=!0),Xt||u!==c){ue.buffers.depth.getReversed()&&c.reversedDepth!==!0&&(c._reversedDepth=!0,c.updateProjectionMatrix()),je.setValue(g,"projectionMatrix",c.projectionMatrix),je.setValue(g,"viewMatrix",c.matrixWorldInverse);const pt=je.map.cameraPosition;pt!==void 0&&pt.setValue(g,le.setFromMatrixPosition(c.matrixWorld)),Re.logarithmicDepthBuffer&&je.setValue(g,"logDepthBufFC",2/(Math.log(c.far+1)/Math.LN2)),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&je.setValue(g,"isOrthographic",c.isOrthographicCamera===!0),u!==c&&(u=c,gt=!0,on=!0)}if(b.isSkinnedMesh){je.setOptional(g,b,"bindMatrix"),je.setOptional(g,b,"bindMatrixInverse");const dt=b.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),je.setValue(g,"boneTexture",dt.boneTexture,ye))}b.isBatchedMesh&&(je.setOptional(g,b,"batchingTexture"),je.setValue(g,"batchingTexture",b._matricesTexture,ye),je.setOptional(g,b,"batchingIdTexture"),je.setValue(g,"batchingIdTexture",b._indirectTexture,ye),je.setOptional(g,b,"batchingColorTexture"),b._colorsTexture!==null&&je.setValue(g,"batchingColorTexture",b._colorsTexture,ye));const Et=y.morphAttributes;if((Et.position!==void 0||Et.normal!==void 0||Et.color!==void 0)&&J.update(b,y,_t),(gt||Me.receiveShadow!==b.receiveShadow)&&(Me.receiveShadow=b.receiveShadow,je.setValue(g,"receiveShadow",b.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(vt.envMap.value=se,vt.flipEnvMap.value=se.isCubeTexture&&se.isRenderTargetTexture===!1?-1:1),I.isMeshStandardMaterial&&I.envMap===null&&R.environment!==null&&(vt.envMapIntensity.value=R.environmentIntensity),gt&&(je.setValue(g,"toneMappingExposure",S.toneMappingExposure),Me.needsLights&&Ar(vt,on),Q&&I.fog===!0&&q.refreshFogUniforms(vt,Q),q.refreshMaterialUniforms(vt,I,H,ne,o.state.transmissionRenderTarget[c.id]),In.upload(g,Ii(Me),vt,ye)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(In.upload(g,Ii(Me),vt,ye),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&je.setValue(g,"center",b.center),je.setValue(g,"modelViewMatrix",b.modelViewMatrix),je.setValue(g,"normalMatrix",b.normalMatrix),je.setValue(g,"modelMatrix",b.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const dt=I.uniformsGroups;for(let pt=0,Yn=dt.length;pt<Yn;pt++){const Nt=dt[pt];Ue.update(Nt,_t),Ue.bind(Nt,_t)}}return _t}function Ar(c,R){c.ambientLightColor.needsUpdate=R,c.lightProbe.needsUpdate=R,c.directionalLights.needsUpdate=R,c.directionalLightShadows.needsUpdate=R,c.pointLights.needsUpdate=R,c.pointLightShadows.needsUpdate=R,c.spotLights.needsUpdate=R,c.spotLightShadows.needsUpdate=R,c.rectAreaLights.needsUpdate=R,c.hemisphereLights.needsUpdate=R}function Rr(c){return c.isMeshLambertMaterial||c.isMeshToonMaterial||c.isMeshPhongMaterial||c.isMeshStandardMaterial||c.isShadowMaterial||c.isShaderMaterial&&c.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(c,R,y){const I=pe.get(c);I.__autoAllocateDepthBuffer=c.resolveDepthBuffer===!1,I.__autoAllocateDepthBuffer===!1&&(I.__useRenderToTexture=!1),pe.get(c.texture).__webglTexture=R,pe.get(c.depthTexture).__webglTexture=I.__autoAllocateDepthBuffer?void 0:y,I.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(c,R){const y=pe.get(c);y.__webglFramebuffer=R,y.__useDefaultFramebuffer=R===void 0};const br=g.createFramebuffer();this.setRenderTarget=function(c,R=0,y=0){z=c,L=R,O=y;let I=!0,b=null,Q=!1,re=!1;if(c){const se=pe.get(c);if(se.__useDefaultFramebuffer!==void 0)ue.bindFramebuffer(g.FRAMEBUFFER,null),I=!1;else if(se.__webglFramebuffer===void 0)ye.setupRenderTarget(c);else if(se.__hasExternalTextures)ye.rebindTextures(c,pe.get(c.texture).__webglTexture,pe.get(c.depthTexture).__webglTexture);else if(c.depthBuffer){const Se=c.depthTexture;if(se.__boundDepthTexture!==Se){if(Se!==null&&pe.has(Se)&&(c.width!==Se.image.width||c.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ye.setupDepthRenderbuffer(c)}}const xe=c.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(re=!0);const be=pe.get(c).__webglFramebuffer;c.isWebGLCubeRenderTarget?(Array.isArray(be[R])?b=be[R][y]:b=be[R],Q=!0):c.samples>0&&ye.useMultisampledRTT(c)===!1?b=pe.get(c).__webglMultisampledFramebuffer:Array.isArray(be)?b=be[y]:b=be,P.copy(c.viewport),B.copy(c.scissor),X=c.scissorTest}else P.copy(De).multiplyScalar(H).floor(),B.copy(Ve).multiplyScalar(H).floor(),X=it;if(y!==0&&(b=br),ue.bindFramebuffer(g.FRAMEBUFFER,b)&&I&&ue.drawBuffers(c,b),ue.viewport(P),ue.scissor(B),ue.setScissorTest(X),Q){const se=pe.get(c.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+R,se.__webglTexture,y)}else if(re){const se=R;for(let xe=0;xe<c.textures.length;xe++){const be=pe.get(c.textures[xe]);g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0+xe,be.__webglTexture,y,se)}}else if(c!==null&&y!==0){const se=pe.get(c.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,se.__webglTexture,y)}h=-1},this.readRenderTargetPixels=function(c,R,y,I,b,Q,re,fe=0){if(!(c&&c.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let se=pe.get(c).__webglFramebuffer;if(c.isWebGLCubeRenderTarget&&re!==void 0&&(se=se[re]),se){ue.bindFramebuffer(g.FRAMEBUFFER,se);try{const xe=c.textures[fe],be=xe.format,Se=xe.type;if(!Re.textureFormatReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(Se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=c.width-I&&y>=0&&y<=c.height-b&&(c.textures.length>1&&g.readBuffer(g.COLOR_ATTACHMENT0+fe),g.readPixels(R,y,I,b,_e.convert(be),_e.convert(Se),Q))}finally{const xe=z!==null?pe.get(z).__webglFramebuffer:null;ue.bindFramebuffer(g.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(c,R,y,I,b,Q,re,fe=0){if(!(c&&c.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let se=pe.get(c).__webglFramebuffer;if(c.isWebGLCubeRenderTarget&&re!==void 0&&(se=se[re]),se)if(R>=0&&R<=c.width-I&&y>=0&&y<=c.height-b){ue.bindFramebuffer(g.FRAMEBUFFER,se);const xe=c.textures[fe],be=xe.format,Se=xe.type;if(!Re.textureFormatReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Oe=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,Oe),g.bufferData(g.PIXEL_PACK_BUFFER,Q.byteLength,g.STREAM_READ),c.textures.length>1&&g.readBuffer(g.COLOR_ATTACHMENT0+fe),g.readPixels(R,y,I,b,_e.convert(be),_e.convert(Se),0);const ze=z!==null?pe.get(z).__webglFramebuffer:null;ue.bindFramebuffer(g.FRAMEBUFFER,ze);const nt=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await Dr(g,nt,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,Oe),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,Q),g.deleteBuffer(Oe),g.deleteSync(nt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(c,R=null,y=0){const I=Math.pow(2,-y),b=Math.floor(c.image.width*I),Q=Math.floor(c.image.height*I),re=R!==null?R.x:0,fe=R!==null?R.y:0;ye.setTexture2D(c,0),g.copyTexSubImage2D(g.TEXTURE_2D,y,0,0,re,fe,b,Q),ue.unbindTexture()};const Cr=g.createFramebuffer(),wr=g.createFramebuffer();this.copyTextureToTexture=function(c,R,y=null,I=null,b=0,Q=null){Q===null&&(b!==0?(fi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=b,b=0):Q=0);let re,fe,se,xe,be,Se,Oe,ze,nt;const qe=c.isCompressedTexture?c.mipmaps[Q]:c.image;if(y!==null)re=y.max.x-y.min.x,fe=y.max.y-y.min.y,se=y.isBox3?y.max.z-y.min.z:1,xe=y.min.x,be=y.min.y,Se=y.isBox3?y.min.z:0;else{const Et=Math.pow(2,-b);re=Math.floor(qe.width*Et),fe=Math.floor(qe.height*Et),c.isDataArrayTexture?se=qe.depth:c.isData3DTexture?se=Math.floor(qe.depth*Et):se=1,xe=0,be=0,Se=0}I!==null?(Oe=I.x,ze=I.y,nt=I.z):(Oe=0,ze=0,nt=0);const Xe=_e.convert(R.format),Me=_e.convert(R.type);let Je;R.isData3DTexture?(ye.setTexture3D(R,0),Je=g.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(ye.setTexture2DArray(R,0),Je=g.TEXTURE_2D_ARRAY):(ye.setTexture2D(R,0),Je=g.TEXTURE_2D),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,R.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,R.unpackAlignment);const Ge=g.getParameter(g.UNPACK_ROW_LENGTH),_t=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Xt=g.getParameter(g.UNPACK_SKIP_PIXELS),gt=g.getParameter(g.UNPACK_SKIP_ROWS),on=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,qe.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,qe.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,xe),g.pixelStorei(g.UNPACK_SKIP_ROWS,be),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Se);const je=c.isDataArrayTexture||c.isData3DTexture,vt=R.isDataArrayTexture||R.isData3DTexture;if(c.isDepthTexture){const Et=pe.get(c),dt=pe.get(R),pt=pe.get(Et.__renderTarget),Yn=pe.get(dt.__renderTarget);ue.bindFramebuffer(g.READ_FRAMEBUFFER,pt.__webglFramebuffer),ue.bindFramebuffer(g.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let Nt=0;Nt<se;Nt++)je&&(g.framebufferTextureLayer(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,pe.get(c).__webglTexture,b,Se+Nt),g.framebufferTextureLayer(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,pe.get(R).__webglTexture,Q,nt+Nt)),g.blitFramebuffer(xe,be,re,fe,Oe,ze,re,fe,g.DEPTH_BUFFER_BIT,g.NEAREST);ue.bindFramebuffer(g.READ_FRAMEBUFFER,null),ue.bindFramebuffer(g.DRAW_FRAMEBUFFER,null)}else if(b!==0||c.isRenderTargetTexture||pe.has(c)){const Et=pe.get(c),dt=pe.get(R);ue.bindFramebuffer(g.READ_FRAMEBUFFER,Cr),ue.bindFramebuffer(g.DRAW_FRAMEBUFFER,wr);for(let pt=0;pt<se;pt++)je?g.framebufferTextureLayer(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,Et.__webglTexture,b,Se+pt):g.framebufferTexture2D(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,Et.__webglTexture,b),vt?g.framebufferTextureLayer(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,dt.__webglTexture,Q,nt+pt):g.framebufferTexture2D(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,dt.__webglTexture,Q),b!==0?g.blitFramebuffer(xe,be,re,fe,Oe,ze,re,fe,g.COLOR_BUFFER_BIT,g.NEAREST):vt?g.copyTexSubImage3D(Je,Q,Oe,ze,nt+pt,xe,be,re,fe):g.copyTexSubImage2D(Je,Q,Oe,ze,xe,be,re,fe);ue.bindFramebuffer(g.READ_FRAMEBUFFER,null),ue.bindFramebuffer(g.DRAW_FRAMEBUFFER,null)}else vt?c.isDataTexture||c.isData3DTexture?g.texSubImage3D(Je,Q,Oe,ze,nt,re,fe,se,Xe,Me,qe.data):R.isCompressedArrayTexture?g.compressedTexSubImage3D(Je,Q,Oe,ze,nt,re,fe,se,Xe,qe.data):g.texSubImage3D(Je,Q,Oe,ze,nt,re,fe,se,Xe,Me,qe):c.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,Q,Oe,ze,re,fe,Xe,Me,qe.data):c.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,Q,Oe,ze,qe.width,qe.height,Xe,qe.data):g.texSubImage2D(g.TEXTURE_2D,Q,Oe,ze,re,fe,Xe,Me,qe);g.pixelStorei(g.UNPACK_ROW_LENGTH,Ge),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,_t),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Xt),g.pixelStorei(g.UNPACK_SKIP_ROWS,gt),g.pixelStorei(g.UNPACK_SKIP_IMAGES,on),Q===0&&R.generateMipmaps&&g.generateMipmap(Je),ue.unbindTexture()},this.initRenderTarget=function(c){pe.get(c).__webglFramebuffer===void 0&&ye.setupRenderTarget(c)},this.initTexture=function(c){c.isCubeTexture?ye.setTextureCube(c,0):c.isData3DTexture?ye.setTexture3D(c,0):c.isDataArrayTexture||c.isCompressedArrayTexture?ye.setTexture2DArray(c,0):ye.setTexture2D(c,0),ue.unbindTexture()},this.resetState=function(){L=0,O=0,z=null,ue.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(n),t.unpackColorSpace=rt._getUnpackColorSpace()}}const gr=[{name:"Manhattan, New York",lat:40.758,lon:-73.9855,terrain:"URBAN JUNGLE"},{name:"Moab, Utah",lat:38.5733,lon:-109.5498,terrain:"RED ROCK COUNTRY"},{name:"Grand Canyon",lat:36.1069,lon:-112.1129,terrain:"THE BIG DROP"},{name:"Mount Everest",lat:27.9881,lon:86.925,terrain:"ROOF OF THE WORLD"},{name:"San Francisco",lat:37.7749,lon:-122.4194,terrain:"HILL CLIMBER"},{name:"Tokyo, Japan",lat:35.6762,lon:139.6503,terrain:"NEON TRAILS"},{name:"Sahara Desert",lat:23.4162,lon:25.6628,terrain:"ENDLESS DUNES"},{name:"Swiss Alps",lat:46.8182,lon:9.2275,terrain:"HIGH ALTITUDE"}];function Xd(e){const n=e.trim().match(/^\s*(-?\d+(?:\.\d+)?)\s*[, ]\s*(-?\d+(?:\.\d+)?)\s*$/);if(!n)return null;const t=Number(n[1]),i=Number(n[2]);return Math.abs(t)<=90&&Math.abs(i)<=180?{name:`${t.toFixed(4)}, ${i.toFixed(4)}`,lat:t,lon:i}:null}let za=0;const ri=new Map;async function Yd(e){const n=Xd(e);if(n)return[n];const t=e.toLowerCase().trim();if(!t)return[];if(ri.has(t))return ri.get(t);const i=Math.max(0,1100-(Date.now()-za));i&&await new Promise(E=>setTimeout(E,i)),za=Date.now();const a=new URL("https://nominatim.openstreetmap.org/search");a.search=new URLSearchParams({q:e,format:"jsonv2",limit:"5"}).toString();const r=await fetch(a,{headers:{Accept:"application/json"}});if(!r.ok)throw new Error(`Location search unavailable (${r.status})`);const l=(await r.json()).map(E=>({name:E.display_name.split(",").slice(0,3).join(",").trim(),lat:+E.lat,lon:+E.lon}));return ri.set(t,l),l}const qd=(e,n,t)=>{const i=2**t,a=Math.floor((n+180)/360*i),r=e*Math.PI/180,d=Math.floor((1-Math.asinh(Math.tan(r))/Math.PI)/2*i);return{x:a,y:d,z:t,n:i}},Ln=12,et=256,oi=new Map;function Wa(e,n,t){const i=`${t}/${e}/${n}`;if(oi.has(i))return oi.get(i);const a=(async()=>{try{const r=new Image;r.crossOrigin="anonymous",r.src=`https://s3.amazonaws.com/elevation-tiles-prod/terrarium/${t}/${e}/${n}.png`,await new Promise((M,m)=>{r.onload=()=>M(),r.onerror=()=>m(new Error("terrain tile unavailable"))});const d=document.createElement("canvas");d.width=et,d.height=et;const l=d.getContext("2d",{willReadFrequently:!0});if(!l)return{heights:new Float32Array(et*et)};l.drawImage(r,0,0,et,et);const E=l.getImageData(0,0,et,et).data,_=new Float32Array(et*et);for(let M=0;M<_.length;M++)_[M]=E[M*4]*256+E[M*4+1]+E[M*4+2]/256-32768;return{heights:_}}catch{return{heights:new Float32Array(et*et)}}})();return oi.set(i,a),a}class Kd{group=new Jt;place=null;origin={x:0,y:0};span=7800;baseline=0;tiles=new Map;requests=new Set;coverage={x:NaN,z:NaN};material=new Tt({color:16777215,roughness:1,vertexColors:!0});async load(n){this.clear(),this.place=n;const t=qd(n.lat,n.lon,Ln);this.origin={x:t.x,y:t.y},this.span=4007501668557849e-8*Math.max(.12,Math.cos(n.lat*Math.PI/180))/2**Ln;const i=await Wa(t.x,t.y,Ln);this.baseline=i.heights[128*et+128],this.install(0,0,i,127),this.ensureRegion(0,0)}key(n,t){return`${n},${t}`}async ensureRegion(n,t){const i=Math.floor((n+this.span/2)/this.span),a=Math.floor((t+this.span/2)/this.span);if(this.coverage.x===i&&this.coverage.z===a)return;this.coverage={x:i,z:a};const r=[];for(let d=a-1;d<=a+1;d++)for(let l=i-1;l<=i+1;l++){const E=this.key(l,d),_=l===i&&d===a?127:63,M=this.tiles.get(E);M&&M.segments!==_&&(this.group.remove(M.mesh),M.mesh.geometry.dispose(),this.tiles.delete(E)),!(this.tiles.has(E)||this.requests.has(E))&&(this.requests.add(E),r.push(Wa(this.origin.x+l,this.origin.y+d,Ln).then(m=>{this.install(l,d,m,_)}).finally(()=>this.requests.delete(E))))}for(const[d,l]of this.tiles){const[E,_]=d.split(",").map(Number);(Math.abs(E-i)>1||Math.abs(_-a)>1)&&(this.group.remove(l.mesh),l.mesh.geometry.dispose(),this.tiles.delete(d))}await Promise.all(r)}install(n,t,i,a=63){const r=this.key(n,t);if(this.tiles.has(r))return;const d=new Ci(this.span,this.span,a,a);d.rotateX(-Math.PI/2);const l=d.attributes.position,E=[];let _=1/0,M=-1/0;for(let x=0;x<i.heights.length;x++)_=Math.min(_,i.heights[x]),M=Math.max(M,i.heights[x]);const m=/moab|grand canyon|sahara|utah|arizona/i.test(this.place?.name??"");for(let x=0;x<=a;x++)for(let D=0;D<=a;D++){const w=x*(a+1)+D,f=Math.round(D/a*(et-1)),o=Math.round(x/a*(et-1)),C=i.heights[o*et+f];l.setY(w,bt.clamp((C-this.baseline)*1.25,-900,1800));const A=(C-_)/Math.max(1,M-_),S=m?A>.76?new Be("#d0b587"):A>.49?new Be("#b99360"):A>.22?new Be("#977046"):new Be("#796044"):A>.76?new Be("#c9c1a6"):A>.49?new Be("#a49c75"):A>.22?new Be("#758557"):new Be("#657355");E.push(S.r,S.g,S.b)}d.setAttribute("color",new Qo(E,3)),d.computeVertexNormals();const v=new ot(d,this.material);v.position.set(n*this.span,0,t*this.span),v.receiveShadow=!0,v.userData.kind="terrain",this.group.add(v),this.tiles.set(r,{data:i,mesh:v,segments:a})}heightAt(n,t){this.ensureRegion(n,t);const i=Math.floor((n+this.span/2)/this.span),a=Math.floor((t+this.span/2)/this.span),r=this.key(i,a);let d=this.tiles.get(r),l=n-i*this.span,E=t-a*this.span;if(!d){if(d=this.tiles.get(this.key(0,0)),!d)return 0;l=n,E=t}const _=bt.clamp((l/this.span+.5)*(et-1),0,et-1),M=bt.clamp((.5-E/this.span)*(et-1),0,et-1),m=Math.floor(_),v=Math.floor(M),x=Math.min(et-1,m+1),D=Math.min(et-1,v+1),w=_-m,f=M-v,o=d.data.heights,C=(S,N)=>o[N*et+S];return(bt.lerp(bt.lerp(C(m,v),C(x,v),w),bt.lerp(C(m,D),C(x,D),w),f)-this.baseline)*1.25}clear(){for(const n of this.tiles.values())this.group.remove(n.mesh),n.mesh.geometry.dispose();this.tiles.clear(),this.requests.clear(),this.coverage={x:NaN,z:NaN}}dispose(){this.clear(),this.material.dispose()}}const Un=new Map;let Xa=0;async function $d(e){const n=`${e.lat.toFixed(3)},${e.lon.toFixed(3)}`;if(Un.has(n))return Un.get(n);try{const i=localStorage.getItem(`monster-map-buildings:${n}`);if(i){const a=JSON.parse(i);if(Date.now()-a.time<360*60*1e3&&Array.isArray(a.data))return Un.set(n,Promise.resolve(a.data)),a.data}}catch{}const t=(async()=>{try{const i=Math.max(0,5e3-(Date.now()-Xa));i&&await new Promise(m=>setTimeout(m,i)),Xa=Date.now();const a=.018,r=.018/Math.max(.3,Math.cos(e.lat*Math.PI/180)),l=`[out:json][timeout:12];(way["building"](${[e.lat-a,e.lon-r,e.lat+a,e.lon+r].join(",")}););out tags geom;`;let E=null;for(const m of["https://overpass.private.coffee/api/interpreter","https://overpass-api.de/api/interpreter"])try{const v=await fetch(m,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"data="+encodeURIComponent(l),signal:AbortSignal.timeout(9e3)});if(v.ok){E=v;break}}catch{}if(!E)throw new Error("Overpass providers unavailable");const M=((await E.json()).elements??[]).filter(m=>m.geometry?.length>=4).slice(0,450).map(m=>({lat:m.center?.lat??m.geometry[0].lat,lon:m.center?.lon??m.geometry[0].lon,tags:m.tags??{},coords:m.geometry.map(v=>[v.lat,v.lon])}));try{localStorage.setItem(`monster-map-buildings:${n}`,JSON.stringify({time:Date.now(),data:M}))}catch{}return M}catch{return[]}})();return Un.set(n,t),t}const Zd=new Tt({color:5661034,roughness:.9});class Qd{group=new Jt;list=[];place=null;loadToken=0;async load(n,t,i){this.reset(i);const a=this.loadToken;this.place=n;const r=await $d(n);if(a===this.loadToken){for(const d of r){const l=d.coords.map(([S,N])=>new ut((N-n.lon)*111320*Math.cos(n.lat*Math.PI/180),(S-n.lat)*110574)),E=l.map(S=>S.x),_=l.map(S=>S.y),M=(Math.min(...E)+Math.max(...E))/2,m=-(Math.min(..._)+Math.max(..._))/2,v=Math.max(4,Math.max(...E)-Math.min(...E)),x=Math.max(4,Math.max(..._)-Math.min(..._)),D=new Jo;l.forEach((S,N)=>N?D.lineTo(S.x-M,S.y+m):D.moveTo(S.x-M,S.y+m)),D.closePath();const w=new jo(D,{depth:1,bevelEnabled:!1});w.rotateX(-Math.PI/2);const f=+(d.tags["building:levels"]??0),o=Math.max(5,+(d.tags.height??0)||f*3.4||8+Math.random()*32);w.scale(1,o,1);const C=new ot(w,Zd.clone());C.castShadow=!0,C.receiveShadow=!0,C.userData.kind="building",C.position.x=M,C.position.z=m,C.position.y=t(M,m),this.group.add(C);const A={mesh:C,x:M,z:m,w:v,d:x,h:o,broken:!1};this.list.push(A),i?.addBuilding(A,t(M,m))}this.list.length||this.addBarriers(t,i)}}addBarriers(n,t){const i=new Tt({color:13132085,roughness:.8});for(let a=0;a<4;a++)for(let r=-2;r<=2;r++){if((a+r)%3===0)continue;const d=3+(a*7+r*11+30)%3,l=3,E=2.5+(a*13+r*5+40)%3,_=r*5,M=28+a*9,m=new ot(new vn(d,E,l),i.clone());m.position.set(_,n(_,M)+E/2,M),m.castShadow=!0,m.receiveShadow=!0,m.userData.kind="destructible-barrier",this.group.add(m);const v={mesh:m,x:_,z:M,w:d,d:l,h:E,broken:!1};this.list.push(v),t?.addBuilding(v,n(_,M))}}collide(n,t,i){return this.list.find(a=>!a.broken&&Math.abs(n-a.x)<a.w/2+i&&Math.abs(t-a.z)<a.d/2+i&&Math.random()<.08)}break(n){n.broken=!0,this.group.remove(n.mesh)}reset(n){this.loadToken++;for(const t of this.list)this.group.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),n?.removeBuilding(t);this.list=[],this.place=null}}class Jd{root=new Jt;wheels=[];suspension=[];body;opts;constructor(n={color:"#d84924",scale:1}){this.opts=n;const t=n.scale;this.root.scale.setScalar(t),this.body=new Jt,this.root.add(this.body),this.build()}build(){const n=new Tt({color:this.opts.color,metalness:.3,roughness:.38}),t=new Tt({color:1448477,metalness:.2,roughness:.7}),i=new Tt({color:7977422,metalness:.65,roughness:.2}),a=new Tt({color:12172994,metalness:.8,roughness:.25}),r=(E,_,M,m,v,x,D,w=this.body)=>{const f=new ot(new vn(E,_,M),m);return f.position.set(v,x,D),f.castShadow=!0,f.receiveShadow=!0,w.add(f),f};r(2.25,.62,3.5,t,0,1.35,0),r(2.05,.62,1.2,n,0,1.8,.85),r(1.78,1.15,1.55,n,0,2.13,-.55),r(1.58,.72,.08,i,0,2.38,.24),r(1.55,.63,.08,i,0,2.36,-1.36),r(2.2,.18,.25,a,0,1.55,1.78),r(2.15,.12,.2,a,0,1.55,-1.8),r(.9,.35,.08,t,0,1.75,1.48),[-.78,.78].forEach(E=>{const _=new ot(new es(.16,16),new Sn({color:16773294}));_.position.set(E,1.9,1.49),this.body.add(_)});for(let E of[-1,1])r(.12,.14,1.8,a,E*1.13,1.24,0),r(.06,.08,1.6,n,E*1.12,2.82,-.55);const d=new Tt({color:1052947,roughness:.92}),l=new Tt({color:2632749,roughness:.85});for(const E of[-1.22,1.22])for(const _ of[-1.25,1.22]){const M=new Jt;M.position.set(E,.92,_),this.root.add(M),this.wheels.push(M);const m=new ot(new bn(.83,.83,.54,24,1),d);m.rotation.z=Math.PI/2,m.castShadow=!0,M.add(m);const v=new ot(new bn(.42,.42,.56,16),a);v.rotation.z=Math.PI/2,M.add(v);const x=new ot(new bn(.16,.16,.58,12),n);x.rotation.z=Math.PI/2,M.add(x);const D=new ts(new vn(.21,.16,.58),l,12),w=new en;for(let o=0;o<12;o++){const C=o*Math.PI/6;w.makeRotationZ(C),w.setPosition(Math.cos(C)*.79,Math.sin(C)*.79,0),D.setMatrixAt(o,w)}D.instanceMatrix.needsUpdate=!0,D.castShadow=!0,M.add(D);const f=new ot(new bn(.09,.09,.58,8),a);f.position.set(E>0?-.25:.25,-.38,0),this.root.add(f),this.suspension.push(f)}for(let E=-2;E<=2;E++){const _=new ot(new Si(.1,10,8),new Sn({color:16767608}));_.position.set(E*.35,2.85,-.1),this.body.add(_)}}setColor(n){this.opts.color=n,this.body.traverse(t=>{const i=t.material;i instanceof Tt&&i.color.getHex()===14174500&&i.color.set(n)})}}class jd{pos=new we(0,0,0);vel=new we;yaw=0;pitch=0;roll=0;grounded=!0;nitro=100;airTime=0;speed=0;gravity=24;jumpForce=15;jumpWas=!1;reset(n){this.pos.set(0,n.heightAt(0,0)+2.2,0),this.vel.set(0,0,0),this.yaw=0,this.pitch=0,this.roll=0,this.grounded=!0,this.nitro=100}update(n,t,i,a,r){this.gravity=r.gravity,this.jumpForce=r.jump,n=Math.min(n,.04);const d=new we(Math.sin(this.yaw),0,Math.cos(this.yaw)),l=30*(t.nitro&&this.nitro>0?1.7:1),E=26*(t.nitro&&this.nitro>0?1.5:1);t.throttle&&this.vel.addScaledVector(d,t.throttle*E*n);const _=new we(this.vel.x,0,this.vel.z);if(this.speed=_.length(),t.nitro&&this.nitro>0?this.nitro=Math.max(0,this.nitro-22*n):this.nitro=Math.min(100,this.nitro+8*n),t.handbrake?_.multiplyScalar(Math.max(0,1-3*n)):_.multiplyScalar(Math.max(0,1-(this.grounded?1.05:.1)*n)),this.speed>l&&_.setLength(l),this.speed>.4){const m=(this.grounded?1.8:1.05)*(.25+Math.min(1,this.speed/12));this.yaw+=t.steer*m*n*(t.throttle<0?-1:1);const v=new we(Math.cos(this.yaw),0,-Math.sin(this.yaw)),x=_.dot(v);_.addScaledVector(v,-x*(this.grounded?.72:.01))}this.vel.x=_.x,this.vel.z=_.z,t.jump&&!this.jumpWas&&this.grounded&&(this.vel.y=this.jumpForce,this.grounded=!1),this.jumpWas=t.jump,i.heightAt(this.pos.x,this.pos.z)+1.65*r.scale,this.grounded||(this.vel.y-=this.gravity*n,this.pitch+=t.airPitch*2.8*n,this.roll+=t.airRoll*3.5*n,this.airTime+=n),this.pos.addScaledVector(this.vel,n);const M=i.heightAt(this.pos.x,this.pos.z)+1.65*r.scale;this.pos.y<=M&&(!this.grounded&&this.vel.y<-3&&(this.pitch*=.35,this.roll*=.35),this.pos.y=M,this.vel.y=0,this.grounded=!0,this.airTime=0,this.pitch*=Math.max(0,1-4*n),this.roll*=Math.max(0,1-4*n)),!this.grounded&&this.airTime>1.1&&(this.pitch=bt.lerp(this.pitch,0,n*.24),this.roll=bt.lerp(this.roll,0,n*.24)),a.root.position.copy(this.pos),a.root.rotation.order="YXZ",a.root.rotation.set(this.pitch,this.yaw,this.roll),a.wheels.forEach((m,v)=>{m.rotation.x-=this.speed*n*(v<2,1),m.position.y=.9+Math.sin(performance.now()*.012+v)*(.035+Math.min(.12,Math.abs(this.vel.y)*.004)),v<2&&(m.rotation.y=t.steer*.28)})}}class eu{keys=new Set;touches=new Set;state={throttle:0,steer:0,nitro:!1,jump:!1,airPitch:0,airRoll:0,handbrake:!1};constructor(){window.addEventListener("keydown",n=>{[" ","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n.key)&&n.preventDefault(),this.keys.add(n.key.toLowerCase())}),window.addEventListener("keyup",n=>this.keys.delete(n.key.toLowerCase()))}press(n,t){t?this.touches.add(n):this.touches.delete(n)}update(){const n=(...m)=>m.some(v=>this.keys.has(v)||this.touches.has(v)),t=Array.from(navigator.getGamepads?.()??[]).find(m=>m?.connected),i=t?.axes??[],a=m=>t?.buttons[m]?.value??0,r=(n("w","arrowup")?1:0)-(n("s","arrowdown")?1:0),d=a(7)-a(6)||-Math.sign(Math.abs(i[1]??0)>.18?i[1]:0),l=(n("d","arrowright")?1:0)-(n("a","arrowleft")?1:0),E=Math.abs(i[0]??0)>.16?i[0]:0,_=(n("arrowup")?1:0)-(n("arrowdown")?1:0),M=(n("e","arrowright")?1:0)-(n("q","arrowleft")?1:0);return this.state={throttle:r||d,steer:l||E,nitro:n("shift","nitro")||a(1)>.4,jump:n(" ","jump")||a(0)>.4,airPitch:_||(Math.abs(i[3]??0)>.18?-Math.sign(i[3]):0),airRoll:M||(Math.abs(i[2]??0)>.18?Math.sign(i[2]):0),handbrake:n("control")||a(2)>.4},this.state}}class tu{group=new Jt;puffs=[];rng=7886388;rand(){return this.rng=this.rng*1664525+1013904223>>>0,this.rng/4294967296}burst(n,t=18,i=16758605){for(let a=0;a<t;a++){const r=new Sn({color:i,transparent:!0,opacity:.9}),d=new ot(new Si(.08+this.rand()*.13,6,5),r);d.position.copy(n),this.group.add(d),this.puffs.push({mesh:d,life:.45+this.rand()*.8,max:.9,velocity:new we((this.rand()-.5)*8,1+this.rand()*7,(this.rand()-.5)*8)})}}dust(n,t){if(t<4||this.rand()>.27)return;const i=new Sn({color:13875854,transparent:!0,opacity:.28,depthWrite:!1}),a=new ot(new Si(.18+this.rand()*.15,7,6),i);a.position.copy(n),this.group.add(a),this.puffs.push({mesh:a,life:.65,max:.65,velocity:new we((this.rand()-.5)*1,.4+this.rand(),(this.rand()-.5)*1)})}update(n){this.puffs=this.puffs.filter(t=>(t.life-=n,t.mesh.position.addScaledVector(t.velocity,n),t.mesh.scale.multiplyScalar(1+n*.55),t.mesh.material.opacity=Math.max(0,t.life/t.max*.5),t.life<=0?(this.group.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),!1):!0))}}class nu{ctx=null;osc=null;gain=null;nitroGain=null;enabled=!1;start(){if(!this.ctx)try{this.ctx=new AudioContext,this.osc=this.ctx.createOscillator(),this.osc.type="sawtooth",this.gain=this.ctx.createGain(),this.gain.gain.value=1e-4;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=380,this.osc.connect(n).connect(this.gain).connect(this.ctx.destination),this.osc.start();const t=this.ctx.createOscillator();t.type="triangle",this.nitroGain=this.ctx.createGain(),this.nitroGain.gain.value=1e-4,t.connect(this.nitroGain).connect(this.ctx.destination),t.start(),this.enabled=!0}catch{}}update(n,t){!this.ctx||!this.osc||!this.gain||(this.osc.frequency.setTargetAtTime(55+n*8,this.ctx.currentTime,.12),this.gain.gain.setTargetAtTime(.015+Math.min(.035,n*.001),this.ctx.currentTime,.15),this.nitroGain?.gain.setTargetAtTime(t?.018:1e-4,this.ctx.currentTime,.08))}mute(){this.ctx&&this.gain?.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.1)}}const Ne=e=>document.querySelector(e),iu=Ne("#app");iu.innerHTML=`
 <canvas id="game"></canvas>
 <div class="grain"></div>
 <header class="topbar"><a class="brand" href="#"><span class="brand-icon">✦</span><span>RUMBLE<span class="accent">ROAM</span></span></a><div class="location-label"><span class="pulse"></span><span id="place-name">Moab, Utah</span><small id="terrain-name">RED ROCK COUNTRY</small></div><div class="top-actions"><button id="map-btn" class="top-btn">⌖ <span>LOCATIONS</span></button><button id="pause-btn" class="top-btn">Ⅱ <span>PAUSE</span></button></div></header>
 <aside class="hud-left"><div class="stat"><span class="stat-label">VELOCITY</span><div class="speed-line"><strong id="speed">000</strong><span>KM/H</span></div><div class="speed-track"><i id="speed-bar"></i></div></div><div class="stat nitro-stat"><span class="stat-label">NITROUS</span><div class="nitro-track"><i id="nitro-bar"></i></div><small id="nitro-state">READY TO BURN</small></div></aside>
 <div class="hud-bottom"><div class="hint"><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> DRIVE <i></i><kbd>SHIFT</kbd> BOOST <i></i><kbd>SPACE</kbd> JUMP <i></i><kbd>Q</kbd><kbd>E</kbd> FLIP</div><div class="camera-toggle"><button data-camera="chase" class="selected">CHASE</button><button data-camera="far">FAR</button><button data-camera="hood">HOOD</button><button data-camera="free">FREE</button></div></div>
 <button id="settings-btn" class="settings-fab">⚙</button>
 <section id="location-panel" class="panel hidden"><div class="panel-head"><div><span class="eyebrow">PICK YOUR PLAYGROUND</span><h2>Where to next?</h2></div><button class="close-btn" data-close="location-panel">×</button></div><form id="search-form"><input id="location-search" placeholder="Search a place or paste coordinates" autocomplete="off"><button class="search-btn">SEARCH <span>↗</span></button></form><div id="search-results" class="results"></div><div class="map-wrap"><div id="mini-map"></div><div class="map-hint">CLICK MAP TO DROP A PIN</div></div><div class="preset-title">FAVORITE RUNS <span>08 LOCATIONS</span></div><div id="presets" class="presets"></div><div class="attribution">Terrain <a href="https://registry.opendata.aws/terrain-tiles/" target="_blank">Mapzen / Tilezen</a> · © <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a> · Map <a href="https://openfreemap.org/" target="_blank">OpenFreeMap</a><details class="terrain-credits"><summary>Terrain source credits</summary><div>ArcticDEM: DigitalGlobe imagery; NSF awards 1043681, 1559691 and 1542736. Australia: © Commonwealth of Australia (Geoscience Australia) 2017. Austria: © offene Daten Österreichs – Digitales Geländemodell (DGM) Österreich. Canada: Open Government Licence – Canada. Europe: Copernicus / EU-DEM. Global ETOPO1: NOAA. Mexico: INEGI, Continental relief, 2016. New Zealand: © Land Information New Zealand and NZ Government. Norway: © Kartverket. United Kingdom: © Environment Agency 2015. United States 3DEP, GMTED2010 and SRTM: USGS.</div></details></div></section>
 <section id="settings-panel" class="panel settings hidden"><div class="panel-head"><div><span class="eyebrow">TUNE THE MAYHEM</span><h2>Game settings</h2></div><button class="close-btn" data-close="settings-panel">×</button></div><label>Gravity <span id="gravity-value">24</span><input id="gravity" type="range" min="6" max="35" value="24"></label><label>Jump force <span id="jump-value">15</span><input id="jump" type="range" min="8" max="25" value="15"></label><label>Truck scale <span id="scale-value">1.0×</span><input id="scale" type="range" min="7" max="16" value="10"></label><label>Paint <input id="paint" type="color" value="#d84924"></label><label class="toggle"><span>Audio</span><input id="audio-toggle" type="checkbox" checked></label><button id="reset-btn" class="search-btn full">RESET TRUCK <span>↻</span></button><small class="settings-note">Esc pauses the run. R recovers the truck. Press M to pick a new place.</small></section>
 <section id="pause-panel" class="pause-panel hidden"><span class="eyebrow">TAKE A BREATHER</span><h1>PAUSED</h1><button id="resume-btn" class="search-btn">BACK TO IT <span>▶</span></button><button id="pause-location" class="ghost-btn">CHANGE LOCATION</button></section>
 <div id="toast" class="toast"></div>
 <div class="mobile-controls"><div class="dpad"><button data-touch="a">◀</button><button data-touch="d">▶</button></div><div class="pedals"><button data-touch="q">Q</button><button data-touch="jump">JUMP</button><button data-touch="e">E</button><button data-touch="nitro" class="nitro-touch">BOOST</button><button data-touch="w" class="go">GO</button></div></div>
 <div class="loading-screen" id="loading"><div class="loader-mark">✦</div><div class="loader-title">MAPPING THE WILD</div><div class="loader-sub">LOADING REAL-WORLD TERRAIN</div><div class="loader-track"><i></i></div></div>`;const Lt=new Wd({canvas:Ne("#game"),antialias:!1,powerPreference:"high-performance"});Lt.setPixelRatio(Math.min(devicePixelRatio,1.35));Lt.setSize(innerWidth,innerHeight);Lt.shadowMap.enabled=!1;Lt.toneMapping=dr;Lt.toneMappingExposure=1.12;const Ut=new ns;Ut.background=new Be("#b9d2d8");Ut.fog=new is("#b9d2d8",115e-6);const an=new fn(60,innerWidth/innerHeight,.1,18e3);an.position.set(0,8,-16);Ut.add(new as(15266559,6444868,2));const vr=new rs(16772559,3.2);vr.position.set(-350,550,260);Ut.add(vr);const Vt=new Kd;Ut.add(Vt.group);const un=new Qd;Ut.add(un.group);const Nn=new tu;Ut.add(Nn.group);let Tn=new Jd;Ut.add(Tn.root);const Ke=new jd,{ArcadeCollisionWorld:au}=await Mi(async()=>{const{ArcadeCollisionWorld:e}=await import("./collision-world-BxfV1_NP.js");return{ArcadeCollisionWorld:e}},__vite__mapDeps([0,1]),import.meta.url),Gn=new au;await Gn.init();const xi=new eu,Mn=new nu,Er={gravity:24,jump:15,scale:1};let Pt="chase",jt=!1,Ai=0,pn=.25,Dt=null,Ri=null,Qt=gr[1],si=0,Ya=performance.now(),Kt=0,qa=0,ci=performance.now(),li=0,Ka=0;function hn(e){const n=Ne("#toast");n.textContent=e,n.classList.add("show"),clearTimeout(qa),qa=window.setTimeout(()=>n.classList.remove("show"),2800)}async function Wn(e){const n=++si;Qt=e,jt=!1,Ne("#location-panel").classList.add("hidden"),Ne("#pause-panel").classList.add("hidden"),Ne("#loading").classList.remove("done"),Ne("#place-name").textContent=e.name,Ne("#terrain-name").textContent=e.terrain??"OPEN TERRAIN",hn("Mapping terrain…"),await Vt.load(e),n===si&&(Ke.reset(Vt),Ke.pos.y=Vt.heightAt(0,0)+2.2,Ne("#loading").classList.add("done"),hn("Terrain is ready. Go make a mess."),un.load(e,(t,i)=>Vt.heightAt(t,i),Gn).then(()=>{n===si&&hn(un.list.length?`${un.list.length} structures ready. Go make a mess.`:"No mapped structures nearby. The terrain is yours.")}),Dt?.flyTo({center:[e.lon,e.lat],zoom:12}),Ri?.setLngLat([e.lon,e.lat]))}gr.forEach((e,n)=>{const t=document.createElement("button");t.className="preset",t.innerHTML=`<span class="preset-index">0${n+1}</span><span>${e.name}</span><i>↗</i>`,t.onclick=()=>Wn(e),Ne("#presets").append(t)});Ne("#search-form").addEventListener("submit",async e=>{e.preventDefault();const n=Ne("#location-search").value.trim();if(!n)return;const t=Ne("#search-results");t.innerHTML='<div class="search-status">SEARCHING THE GLOBE…</div>';try{const i=await Yd(n);if(!i.length){t.innerHTML='<div class="search-status">No places found. Try a nearby town or coordinates.</div>';return}t.innerHTML="";for(const a of i){const r=document.createElement("button");r.className="result",r.innerHTML=`<span>⌖</span><span>${a.name}</span><i>↗</i>`,r.onclick=()=>Wn(a),t.append(r)}}catch{t.innerHTML='<div class="search-status">Location search is busy. Try coordinates like 40.7, -73.9.</div>'}});Ne("#map-btn").onclick=async()=>{if(Ne("#location-panel").classList.toggle("hidden"),Ne("#settings-panel").classList.add("hidden"),Dt)setTimeout(()=>Dt?.resize(),100);else{const[n,t]=await Promise.all([Mi(()=>import("./maplibre-gl-BT_db7in.js"),[],import.meta.url),Mi(()=>import("./maplibre-gl-worker-re4DVwB4.js"),[],import.meta.url)]);n.setWorkerUrl(t.default),Dt=new n.Map({container:"mini-map",style:"https://tiles.openfreemap.org/styles/liberty",center:[Qt.lon,Qt.lat],zoom:10,attributionControl:!1}),Dt.addControl(new n.NavigationControl({showCompass:!1}),"top-right"),Ri=new n.Marker({color:"#f2632b"}).setLngLat([Qt.lon,Qt.lat]).addTo(Dt),Dt.on("click",i=>{const a={name:`${i.lngLat.lat.toFixed(4)}, ${i.lngLat.lng.toFixed(4)}`,lat:i.lngLat.lat,lon:i.lngLat.lng};Ri?.setLngLat(i.lngLat);const r=document.createElement("button");r.className="result",r.innerHTML=`<span>⌖</span><span>Drive at ${a.name}</span><i>↗</i>`,r.onclick=()=>Wn(a),Ne("#search-results").replaceChildren(r)})}};Ne("#settings-btn").onclick=()=>{Ne("#settings-panel").classList.toggle("hidden"),Ne("#location-panel").classList.add("hidden")};document.querySelectorAll("[data-close]").forEach(e=>e.addEventListener("click",()=>Ne("#"+e.dataset.close).classList.add("hidden")));const Pi=(e,n,t)=>{const i=Ne("#"+e);i.oninput=()=>{const a=+i.value/(n==="scale"?10:1);Er[n]=a,Ne("#"+n+"-value").textContent=t(a),n==="scale"&&Tn.root.scale.setScalar(a)}};Pi("gravity","gravity",e=>e.toFixed(0));Pi("jump","jump",e=>e.toFixed(0));Pi("scale","scale",e=>e.toFixed(1)+"×");Ne("#paint").addEventListener("input",e=>Tn.setColor(e.target.value));Ne("#audio-toggle").addEventListener("change",e=>{e.target.checked?Mn.start():Mn.mute()});function Sr(){Ke.reset(Vt),Tn.root.visible=!0,hn("Truck recovered. Send it!")}Ne("#reset-btn").onclick=Sr;Ne("#resume-btn").onclick=()=>{jt=!1,Ne("#pause-panel").classList.add("hidden")};Ne("#pause-btn").onclick=()=>Mr();Ne("#pause-location").onclick=()=>{Ne("#pause-panel").classList.add("hidden"),Ne("#map-btn").click()};function Mr(){jt=!jt,Ne("#pause-panel").classList.toggle("hidden",!jt)}document.querySelectorAll("[data-camera]").forEach(e=>e.addEventListener("click",()=>{Pt=e.dataset.camera,document.querySelectorAll("[data-camera]").forEach(n=>n.classList.toggle("selected",n===e))}));window.addEventListener("keydown",e=>{if(!e.repeat){if(e.key.toLowerCase()==="m"&&Ne("#map-btn").click(),e.key.toLowerCase()==="c"){const n=["chase","far","hood","free"];Pt=n[(n.indexOf(Pt)+1)%n.length],document.querySelectorAll("[data-camera]").forEach(t=>t.classList.toggle("selected",t.dataset.camera===Pt))}e.key.toLowerCase()==="r"&&Sr(),e.key==="Escape"&&Mr(),(e.key===" "||e.key.toLowerCase()==="w")&&Mn.start()}});document.querySelectorAll("[data-touch]").forEach(e=>{const n=e.dataset.touch,t=a=>{a.preventDefault(),xi.press(n,!0),Mn.start()},i=()=>xi.press(n,!1);e.addEventListener("pointerdown",t),e.addEventListener("pointerup",i),e.addEventListener("pointercancel",i),e.addEventListener("pointerleave",i)});window.addEventListener("pointermove",e=>{Pt==="free"&&e.buttons&&(Ai-=e.movementX*.004,pn=bt.clamp(pn-e.movementY*.003,-.3,1.1))});function ru(e){const n=Ke.pos,t=new we(Math.sin(Ke.yaw),0,Math.cos(Ke.yaw));let i,a;if(Pt==="hood")i=n.clone().add(new we(0,2.3,0)).addScaledVector(t,1.2),a=i.clone().addScaledVector(t,7).add(new we(0,.3,0));else if(Pt==="free"){const d=new we(Math.sin(Ai)*Math.cos(pn),Math.sin(pn),Math.cos(Ai)*Math.cos(pn));i=n.clone().add(new we(0,1.5,0)),a=i.clone().addScaledVector(d,-14)}else{const d=Pt==="far"?30:16,l=Pt==="far"?10:7;i=n.clone().add(new we(0,1.5,0)),a=n.clone().addScaledVector(t,-d).add(new we(0,l,0))}const r=i;Kt>0&&(a.x+=(Math.random()-.5)*Kt,a.y+=(Math.random()-.5)*Kt,Kt=Math.max(0,Kt-e*1.3)),an.position.lerp(a,1-Math.exp(-5*e)),an.lookAt(r)}function Tr(e){requestAnimationFrame(Tr);const n=Math.min((e-Ya)/1e3,.045);if(Ya=e,!jt){const t=xi.update();Ke.update(n,t,Vt,Tn,Er);const i=Gn.step(Ke.pos,Ke.yaw,n);i&&(Ka++,Gn.removeBuilding(i),un.break(i),Nn.burst(new we(i.x,Ke.pos.y,i.z),32,16749652),Ke.vel.add(new we((Ke.pos.x-i.x)*3,7,(Ke.pos.z-i.z)*3)),Kt=.5,hn("CRUNCH! Structure demolished.")),Nn.dust(Ke.pos.clone().add(new we(0,-1,0)),Ke.speed),Nn.update(n),Mn.update(Ke.speed,t.nitro&&Ke.nitro>0),ru(n)}Ne("#speed").textContent=String(Math.round(Ke.speed*3.6)).padStart(3,"0"),Ne("#speed-bar").style.width=`${Math.min(100,Ke.speed/30*100)}%`,Ne("#nitro-bar").style.width=`${Ke.nitro}%`,Ne("#nitro-state").textContent=Ke.nitro>5?"READY TO BURN":"RECHARGING",Lt.render(Ut,an),li++,e-ci>=1e3&&(window.__monsterMapMetrics={fps:Math.round(li*1e3/(e-ci)),drawCalls:Lt.info.render.calls,speed:Ke.speed,position:[Ke.pos.x,Ke.pos.y,Ke.pos.z],destroyed:Ka},li=0,ci=e)}window.addEventListener("resize",()=>{Lt.setSize(innerWidth,innerHeight),Lt.setPixelRatio(Math.min(devicePixelRatio,1.8)),an.aspect=innerWidth/innerHeight,an.updateProjectionMatrix(),Dt?.resize()});await Wn(Qt);requestAnimationFrame(Tr);
