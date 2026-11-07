const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./collision-world-CrI1_Cw_.js","./three.core-ChrfmkBg.js"])))=>i.map(i=>d[i]);
import{c as Jr,N as Gt,S as Qr,C as Ye,F as _r,M as fn,V as Pe,R as jr,a as mt,w as Ri,W as ea,b as un,d as rt,L as En,H as Qn,U as en,D as Pt,B as Mt,e as wn,f as jn,p as eo,E as to,g as ft,P as Mn,A as no,h as si,i as Lt,j as Kn,k as Vi,l as Pn,m as Ln,n as gr,o as io,q as on,r as qn,s as ao,t as ro,u as vn,O as oo,v as so,x as co,y as lo,z as fo,G as uo,I as po,J as ho,K as mo,Q as _o,T as go,X as vo,Y as Eo,Z as So,_ as Mo,$ as To,a0 as xo,a1 as Ao,a2 as ci,a3 as sn,a4 as Bn,a5 as Ro,a6 as Tn,a7 as bo,a8 as Co,a9 as wo,aa as Po,ab as vr,ac as Lo,ad as Do,ae as Uo,af as yo,ag as He,ah as Io,ai as No,aj as Oo,ak as tn,al as $n,am as dn,an as at,ao as Er,ap as Qt,aq as wt,ar as Zn,as as Sr,at as Mr,au as Tr,av as xr,aw as Fo,ax as Bo,ay as Go,az as Ho,aA as Ar,aB as Zt,aC as Vo,aD as ko,aE as zo,aF as Rr,aG as Wo,aH as br,aI as Cr,aJ as li,aK as di,aL as fi,aM as ui,aN as $e,aO as ta,aP as na,aQ as ia,aR as aa,aS as ra,aT as oa,aU as sa,aV as ca,aW as la,aX as da,aY as fa,aZ as ua,a_ as pa,a$ as ha,b0 as ma,b1 as _a,b2 as ga,b3 as va,b4 as Ea,b5 as Sa,b6 as Ma,b7 as Ta,b8 as xa,b9 as Aa,ba as Ra,bb as ba,bc as Ca,bd as wa,be as bi,bf as Ci,bg as wi,bh as Pi,bi as Li,bj as Di,bk as Ui,bl as Xo,bm as Pa,bn as Yo,bo as Wn,bp as Ko,bq as La,br as Da,bs as Ua,bt as yi,bu as Ii,bv as qo,bw as wr,bx as $o,by as ei,bz as Zo,bA as Jo,bB as Pr,bC as pn,bD as ya,bE as Lr,bF as Ia,bG as Dr,bH as Dn,bI as hn,bJ as Qo,bK as Un,bL as jo,bM as es,bN as ts,bO as Na,bP as pt,bQ as ns,bR as is,bS as as,bT as rs,bU as os,bV as Ur,bW as ss,bX as cs,bY as ls,bZ as ds,b_ as fs,b$ as us,c0 as ps,c1 as hs,c2 as ms,c3 as _s,c4 as gs,c5 as vs,c6 as Jt,c7 as Tt,c8 as Rt,c9 as Oa,ca as Es,cb as Ss,cc as Ms,cd as Gn,ce as Ts,cf as Ni,cg as xs,ch as As,ci as Rs,cj as bs}from"./three.core-ChrfmkBg.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();const Cs="modulepreload",ws=function(e,n){return new URL(e,n).href},Fa={},Oi=function(n,t,i){let a=Promise.resolve();if(t&&t.length>0){let d=function(E){return Promise.all(E.map(p=>Promise.resolve(p).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};const c=document.getElementsByTagName("link"),g=document.querySelector("meta[property=csp-nonce]"),_=g?.nonce||g?.getAttribute("nonce");a=d(t.map(E=>{if(E=ws(E,i),E in Fa)return;Fa[E]=!0;const p=E.endsWith(".css"),v=p?'[rel="stylesheet"]':"";if(!!i)for(let R=c.length-1;R>=0;R--){const l=c[R];if(l.href===E&&(!p||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${E}"]${v}`))return;const L=document.createElement("link");if(L.rel=p?"stylesheet":Cs,p||(L.as="script"),L.crossOrigin="",L.href=E,_&&L.setAttribute("nonce",_),document.head.appendChild(L),p)return new Promise((R,l)=>{L.addEventListener("load",R),L.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${E}`)))})}))}function r(d){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=d,window.dispatchEvent(c),!c.defaultPrevented)throw d}return a.then(d=>{for(const c of d||[])c.status==="rejected"&&r(c.reason);return n().catch(r)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yr(){let e=null,n=!1,t=null,i=null;function a(r,d){t(r,d),i=e.requestAnimationFrame(a)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(a),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(r){t=r},setContext:function(r){e=r}}}function Ps(e){const n=new WeakMap;function t(c,g){const _=c.array,E=c.usage,p=_.byteLength,v=e.createBuffer();e.bindBuffer(g,v),e.bufferData(g,_,E),c.onUploadCallback();let T;if(_ instanceof Float32Array)T=e.FLOAT;else if(typeof Float16Array<"u"&&_ instanceof Float16Array)T=e.HALF_FLOAT;else if(_ instanceof Uint16Array)c.isFloat16BufferAttribute?T=e.HALF_FLOAT:T=e.UNSIGNED_SHORT;else if(_ instanceof Int16Array)T=e.SHORT;else if(_ instanceof Uint32Array)T=e.UNSIGNED_INT;else if(_ instanceof Int32Array)T=e.INT;else if(_ instanceof Int8Array)T=e.BYTE;else if(_ instanceof Uint8Array)T=e.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)T=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:v,type:T,bytesPerElement:_.BYTES_PER_ELEMENT,version:c.version,size:p}}function i(c,g,_){const E=g.array,p=g.updateRanges;if(e.bindBuffer(_,c),p.length===0)e.bufferSubData(_,0,E);else{p.sort((T,L)=>T.start-L.start);let v=0;for(let T=1;T<p.length;T++){const L=p[v],R=p[T];R.start<=L.start+L.count+1?L.count=Math.max(L.count,R.start+R.count-L.start):(++v,p[v]=R)}p.length=v+1;for(let T=0,L=p.length;T<L;T++){const R=p[T];e.bufferSubData(_,R.start*E.BYTES_PER_ELEMENT,E,R.start,R.count)}g.clearUpdateRanges()}g.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);const g=n.get(c);g&&(e.deleteBuffer(g.buffer),n.delete(c))}function d(c,g){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const E=n.get(c);(!E||E.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const _=n.get(c);if(_===void 0)n.set(c,t(c,g));else if(_.version<c.version){if(_.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(_.buffer,c,g),_.version=c.version}}return{get:a,remove:r,update:d}}var Ls=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ds=`#ifdef USE_ALPHAHASH
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
#endif`,Us=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ys=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Is=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ns=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Os=`#ifdef USE_AOMAP
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
#endif`,Fs=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bs=`#ifdef USE_BATCHING
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
#endif`,Gs=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hs=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vs=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ks=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zs=`#ifdef USE_IRIDESCENCE
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
#endif`,Ws=`#ifdef USE_BUMPMAP
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
#endif`,Xs=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ys=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ks=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qs=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$s=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zs=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Js=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qs=`#if defined( USE_COLOR_ALPHA )
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
#endif`,js=`#define PI 3.141592653589793
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
} // validated`,ec=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tc=`vec3 transformedNormal = objectNormal;
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
#endif`,nc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ic=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ac=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oc="gl_FragColor = linearToOutputTexel( gl_FragColor );",sc=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cc=`#ifdef USE_ENVMAP
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
#endif`,lc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dc=`#ifdef USE_ENVMAP
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
#endif`,fc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uc=`#ifdef USE_ENVMAP
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
#endif`,pc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_c=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gc=`#ifdef USE_GRADIENTMAP
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
}`,vc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ec=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mc=`uniform bool receiveShadow;
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
#endif`,Tc=`#ifdef USE_ENVMAP
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
#endif`,xc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ac=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cc=`PhysicalMaterial material;
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
#endif`,wc=`struct PhysicalMaterial {
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
}`,Pc=`
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
#endif`,Lc=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ic=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Oc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gc=`#if defined( USE_POINTS_UV )
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
#endif`,Hc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kc=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zc=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xc=`#ifdef USE_MORPHTARGETS
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
#endif`,Yc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#endif`,$c=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qc=`#ifdef USE_NORMALMAP
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
#endif`,jc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,el=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tl=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nl=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,il=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,al=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rl=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ol=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sl=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cl=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ll=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dl=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fl=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ul=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pl=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hl=`float getShadowMask() {
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
}`,ml=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_l=`#ifdef USE_SKINNING
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
#endif`,gl=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vl=`#ifdef USE_SKINNING
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
#endif`,El=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sl=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ml=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tl=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xl=`#ifdef USE_TRANSMISSION
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
#endif`,Al=`#ifdef USE_TRANSMISSION
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
#endif`,Rl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wl=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pl=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ll=`uniform sampler2D t2D;
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
}`,Dl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ul=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Il=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nl=`#include <common>
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
}`,Ol=`#if DEPTH_PACKING == 3200
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
}`,Fl=`#define DISTANCE
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
}`,Bl=`#define DISTANCE
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
}`,Gl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hl=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vl=`uniform float scale;
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
}`,kl=`uniform vec3 diffuse;
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
}`,zl=`#include <common>
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
}`,Wl=`uniform vec3 diffuse;
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
}`,Xl=`#define LAMBERT
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
}`,Yl=`#define LAMBERT
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
}`,Kl=`#define MATCAP
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
}`,ql=`#define MATCAP
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
}`,$l=`#define NORMAL
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
}`,Zl=`#define NORMAL
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
}`,Jl=`#define PHONG
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
}`,Ql=`#define PHONG
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
}`,jl=`#define STANDARD
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
}`,ed=`#define STANDARD
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
}`,td=`#define TOON
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
}`,nd=`#define TOON
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
}`,id=`uniform float size;
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
}`,ad=`uniform vec3 diffuse;
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
}`,rd=`#include <common>
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
}`,od=`uniform vec3 color;
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
}`,sd=`uniform float rotation;
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
}`,cd=`uniform vec3 diffuse;
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
}`,Ne={alphahash_fragment:Ls,alphahash_pars_fragment:Ds,alphamap_fragment:Us,alphamap_pars_fragment:ys,alphatest_fragment:Is,alphatest_pars_fragment:Ns,aomap_fragment:Os,aomap_pars_fragment:Fs,batching_pars_vertex:Bs,batching_vertex:Gs,begin_vertex:Hs,beginnormal_vertex:Vs,bsdfs:ks,iridescence_fragment:zs,bumpmap_pars_fragment:Ws,clipping_planes_fragment:Xs,clipping_planes_pars_fragment:Ys,clipping_planes_pars_vertex:Ks,clipping_planes_vertex:qs,color_fragment:$s,color_pars_fragment:Zs,color_pars_vertex:Js,color_vertex:Qs,common:js,cube_uv_reflection_fragment:ec,defaultnormal_vertex:tc,displacementmap_pars_vertex:nc,displacementmap_vertex:ic,emissivemap_fragment:ac,emissivemap_pars_fragment:rc,colorspace_fragment:oc,colorspace_pars_fragment:sc,envmap_fragment:cc,envmap_common_pars_fragment:lc,envmap_pars_fragment:dc,envmap_pars_vertex:fc,envmap_physical_pars_fragment:Tc,envmap_vertex:uc,fog_vertex:pc,fog_pars_vertex:hc,fog_fragment:mc,fog_pars_fragment:_c,gradientmap_pars_fragment:gc,lightmap_pars_fragment:vc,lights_lambert_fragment:Ec,lights_lambert_pars_fragment:Sc,lights_pars_begin:Mc,lights_toon_fragment:xc,lights_toon_pars_fragment:Ac,lights_phong_fragment:Rc,lights_phong_pars_fragment:bc,lights_physical_fragment:Cc,lights_physical_pars_fragment:wc,lights_fragment_begin:Pc,lights_fragment_maps:Lc,lights_fragment_end:Dc,logdepthbuf_fragment:Uc,logdepthbuf_pars_fragment:yc,logdepthbuf_pars_vertex:Ic,logdepthbuf_vertex:Nc,map_fragment:Oc,map_pars_fragment:Fc,map_particle_fragment:Bc,map_particle_pars_fragment:Gc,metalnessmap_fragment:Hc,metalnessmap_pars_fragment:Vc,morphinstance_vertex:kc,morphcolor_vertex:zc,morphnormal_vertex:Wc,morphtarget_pars_vertex:Xc,morphtarget_vertex:Yc,normal_fragment_begin:Kc,normal_fragment_maps:qc,normal_pars_fragment:$c,normal_pars_vertex:Zc,normal_vertex:Jc,normalmap_pars_fragment:Qc,clearcoat_normal_fragment_begin:jc,clearcoat_normal_fragment_maps:el,clearcoat_pars_fragment:tl,iridescence_pars_fragment:nl,opaque_fragment:il,packing:al,premultiplied_alpha_fragment:rl,project_vertex:ol,dithering_fragment:sl,dithering_pars_fragment:cl,roughnessmap_fragment:ll,roughnessmap_pars_fragment:dl,shadowmap_pars_fragment:fl,shadowmap_pars_vertex:ul,shadowmap_vertex:pl,shadowmask_pars_fragment:hl,skinbase_vertex:ml,skinning_pars_vertex:_l,skinning_vertex:gl,skinnormal_vertex:vl,specularmap_fragment:El,specularmap_pars_fragment:Sl,tonemapping_fragment:Ml,tonemapping_pars_fragment:Tl,transmission_fragment:xl,transmission_pars_fragment:Al,uv_pars_fragment:Rl,uv_pars_vertex:bl,uv_vertex:Cl,worldpos_vertex:wl,background_vert:Pl,background_frag:Ll,backgroundCube_vert:Dl,backgroundCube_frag:Ul,cube_vert:yl,cube_frag:Il,depth_vert:Nl,depth_frag:Ol,distanceRGBA_vert:Fl,distanceRGBA_frag:Bl,equirect_vert:Gl,equirect_frag:Hl,linedashed_vert:Vl,linedashed_frag:kl,meshbasic_vert:zl,meshbasic_frag:Wl,meshlambert_vert:Xl,meshlambert_frag:Yl,meshmatcap_vert:Kl,meshmatcap_frag:ql,meshnormal_vert:$l,meshnormal_frag:Zl,meshphong_vert:Jl,meshphong_frag:Ql,meshphysical_vert:jl,meshphysical_frag:ed,meshtoon_vert:td,meshtoon_frag:nd,points_vert:id,points_frag:ad,shadow_vert:rd,shadow_frag:od,sprite_vert:sd,sprite_frag:cd},ie={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},At={basic:{uniforms:pt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:pt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:pt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:pt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:pt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:pt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:pt([ie.points,ie.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:pt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:pt([ie.common,ie.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:pt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:pt([ie.sprite,ie.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:pt([ie.common,ie.displacementmap,{referencePosition:{value:new Pe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:pt([ie.lights,ie.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};At.physical={uniforms:pt([At.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const Hn={r:0,b:0,g:0},Xt=new Lr,ld=new fn;function dd(e,n,t,i,a,r,d){const c=new Ye(0);let g=r===!0?0:1,_,E,p=null,v=0,T=null;function L(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?t:n).get(M)),M}function R(x){let M=!1;const U=L(x);U===null?o(c,g):U&&U.isColor&&(o(U,1),M=!0);const P=e.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,d):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,d),(e.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function l(x,M){const U=L(M);U&&(U.isCubeTexture||U.mapping===ei)?(E===void 0&&(E=new at(new pn(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:ya(At.backgroundCube.uniforms),vertexShader:At.backgroundCube.vertexShader,fragmentShader:At.backgroundCube.fragmentShader,side:Mt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),E.geometry.deleteAttribute("normal"),E.geometry.deleteAttribute("uv"),E.onBeforeRender=function(P,N,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(E.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(E)),Xt.copy(M.backgroundRotation),Xt.x*=-1,Xt.y*=-1,Xt.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Xt.y*=-1,Xt.z*=-1),E.material.uniforms.envMap.value=U,E.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,E.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,E.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,E.material.uniforms.backgroundRotation.value.setFromMatrix4(ld.makeRotationFromEuler(Xt)),E.material.toneMapped=rt.getTransfer(U.colorSpace)!==$e,(p!==U||v!==U.version||T!==e.toneMapping)&&(E.material.needsUpdate=!0,p=U,v=U.version,T=e.toneMapping),E.layers.enableAll(),x.unshift(E,E.geometry,E.material,0,0,null)):U&&U.isTexture&&(_===void 0&&(_=new at(new xr(2,2),new tn({name:"BackgroundMaterial",uniforms:ya(At.background.uniforms),vertexShader:At.background.vertexShader,fragmentShader:At.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),Object.defineProperty(_.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(_)),_.material.uniforms.t2D.value=U,_.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,_.material.toneMapped=rt.getTransfer(U.colorSpace)!==$e,U.matrixAutoUpdate===!0&&U.updateMatrix(),_.material.uniforms.uvTransform.value.copy(U.matrix),(p!==U||v!==U.version||T!==e.toneMapping)&&(_.material.needsUpdate=!0,p=U,v=U.version,T=e.toneMapping),_.layers.enableAll(),x.unshift(_,_.geometry,_.material,0,0,null))}function o(x,M){x.getRGB(Hn,Pr(e)),i.buffers.color.setClear(Hn.r,Hn.g,Hn.b,M,d)}function w(){E!==void 0&&(E.geometry.dispose(),E.material.dispose(),E=void 0),_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0)}return{getClearColor:function(){return c},setClearColor:function(x,M=1){c.set(x),g=M,o(c,g)},getClearAlpha:function(){return g},setClearAlpha:function(x){g=x,o(c,g)},render:R,addToRenderList:l,dispose:w}}function fd(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=v(null);let r=a,d=!1;function c(u,D,B,X,Y){let $=!1;const W=p(X,B,D);r!==W&&(r=W,_(r.object)),$=T(u,X,B,Y),$&&L(u,X,B,Y),Y!==null&&n.update(Y,e.ELEMENT_ARRAY_BUFFER),($||d)&&(d=!1,M(u,D,B,X),Y!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(Y).buffer))}function g(){return e.createVertexArray()}function _(u){return e.bindVertexArray(u)}function E(u){return e.deleteVertexArray(u)}function p(u,D,B){const X=B.wireframe===!0;let Y=i[u.id];Y===void 0&&(Y={},i[u.id]=Y);let $=Y[D.id];$===void 0&&($={},Y[D.id]=$);let W=$[X];return W===void 0&&(W=v(g()),$[X]=W),W}function v(u){const D=[],B=[],X=[];for(let Y=0;Y<t;Y++)D[Y]=0,B[Y]=0,X[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:X,object:u,attributes:{},index:null}}function T(u,D,B,X){const Y=r.attributes,$=D.attributes;let W=0;const ne=B.getAttributes();for(const H in ne)if(ne[H].location>=0){const xe=Y[H];let ye=$[H];if(ye===void 0&&(H==="instanceMatrix"&&u.instanceMatrix&&(ye=u.instanceMatrix),H==="instanceColor"&&u.instanceColor&&(ye=u.instanceColor)),xe===void 0||xe.attribute!==ye||ye&&xe.data!==ye.data)return!0;W++}return r.attributesNum!==W||r.index!==X}function L(u,D,B,X){const Y={},$=D.attributes;let W=0;const ne=B.getAttributes();for(const H in ne)if(ne[H].location>=0){let xe=$[H];xe===void 0&&(H==="instanceMatrix"&&u.instanceMatrix&&(xe=u.instanceMatrix),H==="instanceColor"&&u.instanceColor&&(xe=u.instanceColor));const ye={};ye.attribute=xe,xe&&xe.data&&(ye.data=xe.data),Y[H]=ye,W++}r.attributes=Y,r.attributesNum=W,r.index=X}function R(){const u=r.newAttributes;for(let D=0,B=u.length;D<B;D++)u[D]=0}function l(u){o(u,0)}function o(u,D){const B=r.newAttributes,X=r.enabledAttributes,Y=r.attributeDivisors;B[u]=1,X[u]===0&&(e.enableVertexAttribArray(u),X[u]=1),Y[u]!==D&&(e.vertexAttribDivisor(u,D),Y[u]=D)}function w(){const u=r.newAttributes,D=r.enabledAttributes;for(let B=0,X=D.length;B<X;B++)D[B]!==u[B]&&(e.disableVertexAttribArray(B),D[B]=0)}function x(u,D,B,X,Y,$,W){W===!0?e.vertexAttribIPointer(u,D,B,Y,$):e.vertexAttribPointer(u,D,B,X,Y,$)}function M(u,D,B,X){R();const Y=X.attributes,$=B.getAttributes(),W=D.defaultAttributeValues;for(const ne in $){const H=$[ne];if(H.location>=0){let ge=Y[ne];if(ge===void 0&&(ne==="instanceMatrix"&&u.instanceMatrix&&(ge=u.instanceMatrix),ne==="instanceColor"&&u.instanceColor&&(ge=u.instanceColor)),ge!==void 0){const xe=ge.normalized,ye=ge.itemSize,Ve=n.get(ge);if(Ve===void 0)continue;const nt=Ve.buffer,et=Ve.type,We=Ve.bytesPerElement,k=et===e.INT||et===e.UNSIGNED_INT||ge.gpuType===Ar;if(ge.isInterleavedBufferAttribute){const q=ge.data,le=q.stride,we=ge.offset;if(q.isInstancedInterleavedBuffer){for(let Ee=0;Ee<H.locationSize;Ee++)o(H.location+Ee,q.meshPerAttribute);u.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Ee=0;Ee<H.locationSize;Ee++)l(H.location+Ee);e.bindBuffer(e.ARRAY_BUFFER,nt);for(let Ee=0;Ee<H.locationSize;Ee++)x(H.location+Ee,ye/H.locationSize,et,xe,le*We,(we+ye/H.locationSize*Ee)*We,k)}else{if(ge.isInstancedBufferAttribute){for(let q=0;q<H.locationSize;q++)o(H.location+q,ge.meshPerAttribute);u.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let q=0;q<H.locationSize;q++)l(H.location+q);e.bindBuffer(e.ARRAY_BUFFER,nt);for(let q=0;q<H.locationSize;q++)x(H.location+q,ye/H.locationSize,et,xe,ye*We,ye/H.locationSize*q*We,k)}}else if(W!==void 0){const xe=W[ne];if(xe!==void 0)switch(xe.length){case 2:e.vertexAttrib2fv(H.location,xe);break;case 3:e.vertexAttrib3fv(H.location,xe);break;case 4:e.vertexAttrib4fv(H.location,xe);break;default:e.vertexAttrib1fv(H.location,xe)}}}}w()}function U(){V();for(const u in i){const D=i[u];for(const B in D){const X=D[B];for(const Y in X)E(X[Y].object),delete X[Y];delete D[B]}delete i[u]}}function P(u){if(i[u.id]===void 0)return;const D=i[u.id];for(const B in D){const X=D[B];for(const Y in X)E(X[Y].object),delete X[Y];delete D[B]}delete i[u.id]}function N(u){for(const D in i){const B=i[D];if(B[u.id]===void 0)continue;const X=B[u.id];for(const Y in X)E(X[Y].object),delete X[Y];delete B[u.id]}}function V(){m(),d=!0,r!==a&&(r=a,_(r.object))}function m(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:c,reset:V,resetDefaultState:m,dispose:U,releaseStatesOfGeometry:P,releaseStatesOfProgram:N,initAttributes:R,enableAttribute:l,disableUnusedAttributes:w}}function ud(e,n,t){let i;function a(_){i=_}function r(_,E){e.drawArrays(i,_,E),t.update(E,i,1)}function d(_,E,p){p!==0&&(e.drawArraysInstanced(i,_,E,p),t.update(E,i,p))}function c(_,E,p){if(p===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,_,0,E,0,p);let T=0;for(let L=0;L<p;L++)T+=E[L];t.update(T,i,1)}function g(_,E,p,v){if(p===0)return;const T=n.get("WEBGL_multi_draw");if(T===null)for(let L=0;L<_.length;L++)d(_[L],E[L],v[L]);else{T.multiDrawArraysInstancedWEBGL(i,_,0,E,0,v,0,p);let L=0;for(let R=0;R<p;R++)L+=E[R]*v[R];t.update(L,i,1)}}this.setMode=a,this.render=r,this.renderInstances=d,this.renderMultiDraw=c,this.renderMultiDrawInstances=g}function pd(e,n,t,i){let a;function r(){if(a!==void 0)return a;if(n.has("EXT_texture_filter_anisotropic")===!0){const N=n.get("EXT_texture_filter_anisotropic");a=e.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function d(N){return!(N!==Lt&&i.convert(N)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(N){const V=N===Qn&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(N!==en&&i.convert(N)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Zt&&!V)}function g(N){if(N==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let _=t.precision!==void 0?t.precision:"highp";const E=g(_);E!==_&&(console.warn("THREE.WebGLRenderer:",_,"not supported, using",E,"instead."),_=E);const p=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),T=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),L=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=e.getParameter(e.MAX_TEXTURE_SIZE),l=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),o=e.getParameter(e.MAX_VERTEX_ATTRIBS),w=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),x=e.getParameter(e.MAX_VARYING_VECTORS),M=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),U=L>0,P=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:g,textureFormatReadable:d,textureTypeReadable:c,precision:_,logarithmicDepthBuffer:p,reversedDepthBuffer:v,maxTextures:T,maxVertexTextures:L,maxTextureSize:R,maxCubemapSize:l,maxAttributes:o,maxVertexUniforms:w,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:U,maxSamples:P}}function hd(e){const n=this;let t=null,i=0,a=!1,r=!1;const d=new yo,c=new He,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(p,v){const T=p.length!==0||v||i!==0||a;return a=v,i=p.length,T},this.beginShadows=function(){r=!0,E(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,v){t=E(p,v,0)},this.setState=function(p,v,T){const L=p.clippingPlanes,R=p.clipIntersection,l=p.clipShadows,o=e.get(p);if(!a||L===null||L.length===0||r&&!l)r?E(null):_();else{const w=r?0:i,x=w*4;let M=o.clippingState||null;g.value=M,M=E(L,v,x,T);for(let U=0;U!==x;++U)M[U]=t[U];o.clippingState=M,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=w}};function _(){g.value!==t&&(g.value=t,g.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function E(p,v,T,L){const R=p!==null?p.length:0;let l=null;if(R!==0){if(l=g.value,L!==!0||l===null){const o=T+R*4,w=v.matrixWorldInverse;c.getNormalMatrix(w),(l===null||l.length<o)&&(l=new Float32Array(o));for(let x=0,M=T;x!==R;++x,M+=4)d.copy(p[x]).applyMatrix4(w,c),d.normal.toArray(l,M),l[M+3]=d.constant}g.value=l,g.needsUpdate=!0}return n.numPlanes=R,n.numIntersection=0,l}}function md(e){let n=new WeakMap;function t(d,c){return c===yi?d.mapping=Dn:c===Ii&&(d.mapping=hn),d}function i(d){if(d&&d.isTexture){const c=d.mapping;if(c===yi||c===Ii)if(n.has(d)){const g=n.get(d).texture;return t(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const _=new qo(g.height);return _.fromEquirectangularTexture(e,d),n.set(d,_),d.addEventListener("dispose",a),t(_.texture,d.mapping)}else return null}}return d}function a(d){const c=d.target;c.removeEventListener("dispose",a);const g=n.get(c);g!==void 0&&(n.delete(c),g.dispose())}function r(){n=new WeakMap}return{get:i,dispose:r}}const cn=4,Ba=[.125,.215,.35,.446,.526,.582],qt=20,pi=new Qo,Ga=new Ye;let hi=null,mi=0,_i=0,gi=!1;const Kt=(1+Math.sqrt(5))/2,rn=1/Kt,Ha=[new Pe(-Kt,rn,0),new Pe(Kt,rn,0),new Pe(-rn,0,Kt),new Pe(rn,0,Kt),new Pe(0,Kt,-rn),new Pe(0,Kt,rn),new Pe(-1,1,-1),new Pe(1,1,-1),new Pe(-1,1,1),new Pe(1,1,1)],_d=new Pe;class Va{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,t=0,i=.1,a=100,r={}){const{size:d=256,position:c=_d}=r;hi=this._renderer.getRenderTarget(),mi=this._renderer.getActiveCubeFace(),_i=this._renderer.getActiveMipmapLevel(),gi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(n,i,a,g,c),t>0&&this._blur(g,0,0,t),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=za(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(hi,mi,_i),this._renderer.xr.enabled=gi,n.scissorTest=!1,Vn(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===Dn||n.mapping===hn?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),hi=this._renderer.getRenderTarget(),mi=this._renderer.getActiveCubeFace(),_i=this._renderer.getActiveMipmapLevel(),gi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Qn,format:Lt,colorSpace:jn,depthBuffer:!1},a=ka(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ka(n,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gd(r)),this._blurMaterial=vd(r,n,t)}return a}_compileMaterial(n){const t=new at(this._lodPlanes[0],n);this._renderer.compile(t,pi)}_sceneToCubeUV(n,t,i,a,r){const g=new Mn(90,1,t,i),_=[1,-1,1,1,1,1],E=[1,1,1,-1,-1,-1],p=this._renderer,v=p.autoClear,T=p.toneMapping;p.getClearColor(Ga),p.toneMapping=Gt,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(a),p.clearDepth(),p.setRenderTarget(null));const R=new Un({name:"PMREM.Background",side:Mt,depthWrite:!1,depthTest:!1}),l=new at(new pn,R);let o=!1;const w=n.background;w?w.isColor&&(R.color.copy(w),n.background=null,o=!0):(R.color.copy(Ga),o=!0);for(let x=0;x<6;x++){const M=x%3;M===0?(g.up.set(0,_[x],0),g.position.set(r.x,r.y,r.z),g.lookAt(r.x+E[x],r.y,r.z)):M===1?(g.up.set(0,0,_[x]),g.position.set(r.x,r.y,r.z),g.lookAt(r.x,r.y+E[x],r.z)):(g.up.set(0,_[x],0),g.position.set(r.x,r.y,r.z),g.lookAt(r.x,r.y,r.z+E[x]));const U=this._cubeSize;Vn(a,M*U,x>2?U:0,U,U),p.setRenderTarget(a),o&&p.render(l,g),p.render(n,g)}l.geometry.dispose(),l.material.dispose(),p.toneMapping=T,p.autoClear=v,n.background=w}_textureToCubeUV(n,t){const i=this._renderer,a=n.mapping===Dn||n.mapping===hn;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wa()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=za());const r=a?this._cubemapMaterial:this._equirectMaterial,d=new at(this._lodPlanes[0],r),c=r.uniforms;c.envMap.value=n;const g=this._cubeSize;Vn(t,0,0,3*g,2*g),i.setRenderTarget(t),i.render(d,pi)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let r=1;r<a;r++){const d=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),c=Ha[(a-r-1)%Ha.length];this._blur(n,r-1,r,d,c)}t.autoClear=i}_blur(n,t,i,a,r){const d=this._pingPongRenderTarget;this._halfBlur(n,d,t,i,a,"latitudinal",r),this._halfBlur(d,n,i,i,a,"longitudinal",r)}_halfBlur(n,t,i,a,r,d,c){const g=this._renderer,_=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const E=3,p=new at(this._lodPlanes[a],_),v=_.uniforms,T=this._sizeLods[i]-1,L=isFinite(r)?Math.PI/(2*T):2*Math.PI/(2*qt-1),R=r/L,l=isFinite(r)?1+Math.floor(E*R):qt;l>qt&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${l} samples when the maximum is set to ${qt}`);const o=[];let w=0;for(let N=0;N<qt;++N){const V=N/R,m=Math.exp(-V*V/2);o.push(m),N===0?w+=m:N<l&&(w+=2*m)}for(let N=0;N<o.length;N++)o[N]=o[N]/w;v.envMap.value=n.texture,v.samples.value=l,v.weights.value=o,v.latitudinal.value=d==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:x}=this;v.dTheta.value=L,v.mipInt.value=x-i;const M=this._sizeLods[a],U=3*M*(a>x-cn?a-x+cn:0),P=4*(this._cubeSize-M);Vn(t,U,P,3*M,2*M),g.setRenderTarget(t),g.render(p,pi)}}function gd(e){const n=[],t=[],i=[];let a=e;const r=e-cn+1+Ba.length;for(let d=0;d<r;d++){const c=Math.pow(2,a);t.push(c);let g=1/c;d>e-cn?g=Ba[d-e+cn-1]:d===0&&(g=0),i.push(g);const _=1/(c-2),E=-_,p=1+_,v=[E,E,p,E,p,p,E,E,p,p,E,p],T=6,L=6,R=3,l=2,o=1,w=new Float32Array(R*L*T),x=new Float32Array(l*L*T),M=new Float32Array(o*L*T);for(let P=0;P<T;P++){const N=P%3*2/3-1,V=P>2?0:-1,m=[N,V,0,N+2/3,V,0,N+2/3,V+1,0,N,V,0,N+2/3,V+1,0,N,V+1,0];w.set(m,R*L*P),x.set(v,l*L*P);const u=[P,P,P,P,P,P];M.set(u,o*L*P)}const U=new $n;U.setAttribute("position",new dn(w,R)),U.setAttribute("uv",new dn(x,l)),U.setAttribute("faceIndex",new dn(M,o)),n.push(U),a>cn&&a--}return{lodPlanes:n,sizeLods:t,sigmas:i}}function ka(e,n,t){const i=new un(e,n,t);return i.texture.mapping=ei,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vn(e,n,t,i,a){e.viewport.set(n,t,i,a),e.scissor.set(n,t,i,a)}function vd(e,n,t){const i=new Float32Array(qt),a=new Pe(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:qt,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:ki(),fragmentShader:`

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
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function za(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ki(),fragmentShader:`

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
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function Wa(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ki(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function ki(){return`

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
	`}function Ed(e){let n=new WeakMap,t=null;function i(c){if(c&&c.isTexture){const g=c.mapping,_=g===yi||g===Ii,E=g===Dn||g===hn;if(_||E){let p=n.get(c);const v=p!==void 0?p.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==v)return t===null&&(t=new Va(e)),p=_?t.fromEquirectangular(c,p):t.fromCubemap(c,p),p.texture.pmremVersion=c.pmremVersion,n.set(c,p),p.texture;if(p!==void 0)return p.texture;{const T=c.image;return _&&T&&T.height>0||E&&T&&a(T)?(t===null&&(t=new Va(e)),p=_?t.fromEquirectangular(c):t.fromCubemap(c),p.texture.pmremVersion=c.pmremVersion,n.set(c,p),c.addEventListener("dispose",r),p.texture):null}}}return c}function a(c){let g=0;const _=6;for(let E=0;E<_;E++)c[E]!==void 0&&g++;return g===_}function r(c){const g=c.target;g.removeEventListener("dispose",r);const _=n.get(g);_!==void 0&&(n.delete(g),_.dispose())}function d(){n=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:d}}function Sd(e){const n={};function t(i){if(n[i]!==void 0)return n[i];let a;switch(i){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(i)}return n[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&Ri("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function Md(e,n,t,i){const a={},r=new WeakMap;function d(p){const v=p.target;v.index!==null&&n.remove(v.index);for(const L in v.attributes)n.remove(v.attributes[L]);v.removeEventListener("dispose",d),delete a[v.id];const T=r.get(v);T&&(n.remove(T),r.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(p,v){return a[v.id]===!0||(v.addEventListener("dispose",d),a[v.id]=!0,t.memory.geometries++),v}function g(p){const v=p.attributes;for(const T in v)n.update(v[T],e.ARRAY_BUFFER)}function _(p){const v=[],T=p.index,L=p.attributes.position;let R=0;if(T!==null){const w=T.array;R=T.version;for(let x=0,M=w.length;x<M;x+=3){const U=w[x+0],P=w[x+1],N=w[x+2];v.push(U,P,P,N,N,U)}}else if(L!==void 0){const w=L.array;R=L.version;for(let x=0,M=w.length/3-1;x<M;x+=3){const U=x+0,P=x+1,N=x+2;v.push(U,P,P,N,N,U)}}else return;const l=new(ts(v)?jo:es)(v,1);l.version=R;const o=r.get(p);o&&n.remove(o),r.set(p,l)}function E(p){const v=r.get(p);if(v){const T=p.index;T!==null&&v.version<T.version&&_(p)}else _(p);return r.get(p)}return{get:c,update:g,getWireframeAttribute:E}}function Td(e,n,t){let i;function a(v){i=v}let r,d;function c(v){r=v.type,d=v.bytesPerElement}function g(v,T){e.drawElements(i,T,r,v*d),t.update(T,i,1)}function _(v,T,L){L!==0&&(e.drawElementsInstanced(i,T,r,v*d,L),t.update(T,i,L))}function E(v,T,L){if(L===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,T,0,r,v,0,L);let l=0;for(let o=0;o<L;o++)l+=T[o];t.update(l,i,1)}function p(v,T,L,R){if(L===0)return;const l=n.get("WEBGL_multi_draw");if(l===null)for(let o=0;o<v.length;o++)_(v[o]/d,T[o],R[o]);else{l.multiDrawElementsInstancedWEBGL(i,T,0,r,v,0,R,0,L);let o=0;for(let w=0;w<L;w++)o+=T[w]*R[w];t.update(o,i,1)}}this.setMode=a,this.setIndex=c,this.render=g,this.renderInstances=_,this.renderMultiDraw=E,this.renderMultiDrawInstances=p}function xd(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,d,c){switch(t.calls++,d){case e.TRIANGLES:t.triangles+=c*(r/3);break;case e.LINES:t.lines+=c*(r/2);break;case e.LINE_STRIP:t.lines+=c*(r-1);break;case e.LINE_LOOP:t.lines+=c*r;break;case e.POINTS:t.points+=c*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:a,update:i}}function Ad(e,n,t){const i=new WeakMap,a=new mt;function r(d,c,g){const _=d.morphTargetInfluences,E=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=E!==void 0?E.length:0;let v=i.get(c);if(v===void 0||v.count!==p){let m=function(){N.dispose(),i.delete(c),c.removeEventListener("dispose",m)};v!==void 0&&v.texture.dispose();const T=c.morphAttributes.position!==void 0,L=c.morphAttributes.normal!==void 0,R=c.morphAttributes.color!==void 0,l=c.morphAttributes.position||[],o=c.morphAttributes.normal||[],w=c.morphAttributes.color||[];let x=0;T===!0&&(x=1),L===!0&&(x=2),R===!0&&(x=3);let M=c.attributes.position.count*x,U=1;M>n.maxTextureSize&&(U=Math.ceil(M/n.maxTextureSize),M=n.maxTextureSize);const P=new Float32Array(M*U*4*p),N=new wr(P,M,U,p);N.type=Zt,N.needsUpdate=!0;const V=x*4;for(let u=0;u<p;u++){const D=l[u],B=o[u],X=w[u],Y=M*U*4*u;for(let $=0;$<D.count;$++){const W=$*V;T===!0&&(a.fromBufferAttribute(D,$),P[Y+W+0]=a.x,P[Y+W+1]=a.y,P[Y+W+2]=a.z,P[Y+W+3]=0),L===!0&&(a.fromBufferAttribute(B,$),P[Y+W+4]=a.x,P[Y+W+5]=a.y,P[Y+W+6]=a.z,P[Y+W+7]=0),R===!0&&(a.fromBufferAttribute(X,$),P[Y+W+8]=a.x,P[Y+W+9]=a.y,P[Y+W+10]=a.z,P[Y+W+11]=X.itemSize===4?a.w:1)}}v={count:p,texture:N,size:new ft(M,U)},i.set(c,v),c.addEventListener("dispose",m)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)g.getUniforms().setValue(e,"morphTexture",d.morphTexture,t);else{let T=0;for(let R=0;R<_.length;R++)T+=_[R];const L=c.morphTargetsRelative?1:1-T;g.getUniforms().setValue(e,"morphTargetBaseInfluence",L),g.getUniforms().setValue(e,"morphTargetInfluences",_)}g.getUniforms().setValue(e,"morphTargetsTexture",v.texture,t),g.getUniforms().setValue(e,"morphTargetsTextureSize",v.size)}return{update:r}}function Rd(e,n,t,i){let a=new WeakMap;function r(g){const _=i.render.frame,E=g.geometry,p=n.get(g,E);if(a.get(p)!==_&&(n.update(p),a.set(p,_)),g.isInstancedMesh&&(g.hasEventListener("dispose",c)===!1&&g.addEventListener("dispose",c),a.get(g)!==_&&(t.update(g.instanceMatrix,e.ARRAY_BUFFER),g.instanceColor!==null&&t.update(g.instanceColor,e.ARRAY_BUFFER),a.set(g,_))),g.isSkinnedMesh){const v=g.skeleton;a.get(v)!==_&&(v.update(),a.set(v,_))}return p}function d(){a=new WeakMap}function c(g){const _=g.target;_.removeEventListener("dispose",c),t.remove(_.instanceMatrix),_.instanceColor!==null&&t.remove(_.instanceColor)}return{update:r,dispose:d}}const Ir=new us,Xa=new gr(1,1),Nr=new wr,Or=new fs,Fr=new ds,Ya=[],Ka=[],qa=new Float32Array(16),$a=new Float32Array(9),Za=new Float32Array(4);function _n(e,n,t){const i=e[0];if(i<=0||i>0)return e;const a=n*t;let r=Ya[a];if(r===void 0&&(r=new Float32Array(a),Ya[a]=r),n!==0){i.toArray(r,0);for(let d=1,c=0;d!==n;++d)c+=t,e[d].toArray(r,c)}return r}function ot(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function st(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function ti(e,n){let t=Ka[n];t===void 0&&(t=new Int32Array(n),Ka[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function bd(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function Cd(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ot(t,n))return;e.uniform2fv(this.addr,n),st(t,n)}}function wd(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(ot(t,n))return;e.uniform3fv(this.addr,n),st(t,n)}}function Pd(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ot(t,n))return;e.uniform4fv(this.addr,n),st(t,n)}}function Ld(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ot(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),st(t,n)}else{if(ot(t,i))return;Za.set(i),e.uniformMatrix2fv(this.addr,!1,Za),st(t,i)}}function Dd(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ot(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),st(t,n)}else{if(ot(t,i))return;$a.set(i),e.uniformMatrix3fv(this.addr,!1,$a),st(t,i)}}function Ud(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ot(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),st(t,n)}else{if(ot(t,i))return;qa.set(i),e.uniformMatrix4fv(this.addr,!1,qa),st(t,i)}}function yd(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function Id(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ot(t,n))return;e.uniform2iv(this.addr,n),st(t,n)}}function Nd(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(ot(t,n))return;e.uniform3iv(this.addr,n),st(t,n)}}function Od(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ot(t,n))return;e.uniform4iv(this.addr,n),st(t,n)}}function Fd(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function Bd(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ot(t,n))return;e.uniform2uiv(this.addr,n),st(t,n)}}function Gd(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(ot(t,n))return;e.uniform3uiv(this.addr,n),st(t,n)}}function Hd(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ot(t,n))return;e.uniform4uiv(this.addr,n),st(t,n)}}function Vd(e,n,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let r;this.type===e.SAMPLER_2D_SHADOW?(Xa.compareFunction=vr,r=Xa):r=Ir,t.setTexture2D(n||r,a)}function kd(e,n,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(n||Or,a)}function zd(e,n,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(n||Fr,a)}function Wd(e,n,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(n||Nr,a)}function Xd(e){switch(e){case 5126:return bd;case 35664:return Cd;case 35665:return wd;case 35666:return Pd;case 35674:return Ld;case 35675:return Dd;case 35676:return Ud;case 5124:case 35670:return yd;case 35667:case 35671:return Id;case 35668:case 35672:return Nd;case 35669:case 35673:return Od;case 5125:return Fd;case 36294:return Bd;case 36295:return Gd;case 36296:return Hd;case 35678:case 36198:case 36298:case 36306:case 35682:return Vd;case 35679:case 36299:case 36307:return kd;case 35680:case 36300:case 36308:case 36293:return zd;case 36289:case 36303:case 36311:case 36292:return Wd}}function Yd(e,n){e.uniform1fv(this.addr,n)}function Kd(e,n){const t=_n(n,this.size,2);e.uniform2fv(this.addr,t)}function qd(e,n){const t=_n(n,this.size,3);e.uniform3fv(this.addr,t)}function $d(e,n){const t=_n(n,this.size,4);e.uniform4fv(this.addr,t)}function Zd(e,n){const t=_n(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function Jd(e,n){const t=_n(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function Qd(e,n){const t=_n(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function jd(e,n){e.uniform1iv(this.addr,n)}function ef(e,n){e.uniform2iv(this.addr,n)}function tf(e,n){e.uniform3iv(this.addr,n)}function nf(e,n){e.uniform4iv(this.addr,n)}function af(e,n){e.uniform1uiv(this.addr,n)}function rf(e,n){e.uniform2uiv(this.addr,n)}function of(e,n){e.uniform3uiv(this.addr,n)}function sf(e,n){e.uniform4uiv(this.addr,n)}function cf(e,n,t){const i=this.cache,a=n.length,r=ti(t,a);ot(i,r)||(e.uniform1iv(this.addr,r),st(i,r));for(let d=0;d!==a;++d)t.setTexture2D(n[d]||Ir,r[d])}function lf(e,n,t){const i=this.cache,a=n.length,r=ti(t,a);ot(i,r)||(e.uniform1iv(this.addr,r),st(i,r));for(let d=0;d!==a;++d)t.setTexture3D(n[d]||Or,r[d])}function df(e,n,t){const i=this.cache,a=n.length,r=ti(t,a);ot(i,r)||(e.uniform1iv(this.addr,r),st(i,r));for(let d=0;d!==a;++d)t.setTextureCube(n[d]||Fr,r[d])}function ff(e,n,t){const i=this.cache,a=n.length,r=ti(t,a);ot(i,r)||(e.uniform1iv(this.addr,r),st(i,r));for(let d=0;d!==a;++d)t.setTexture2DArray(n[d]||Nr,r[d])}function uf(e){switch(e){case 5126:return Yd;case 35664:return Kd;case 35665:return qd;case 35666:return $d;case 35674:return Zd;case 35675:return Jd;case 35676:return Qd;case 5124:case 35670:return jd;case 35667:case 35671:return ef;case 35668:case 35672:return tf;case 35669:case 35673:return nf;case 5125:return af;case 36294:return rf;case 36295:return of;case 36296:return sf;case 35678:case 36198:case 36298:case 36306:case 35682:return cf;case 35679:case 36299:case 36307:return lf;case 35680:case 36300:case 36308:case 36293:return df;case 36289:case 36303:case 36311:case 36292:return ff}}class pf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Xd(t.type)}}class hf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=uf(t.type)}}class mf{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const a=this.seq;for(let r=0,d=a.length;r!==d;++r){const c=a[r];c.setValue(n,t[c.id],i)}}}const vi=/(\w+)(\])?(\[|\.)?/g;function Ja(e,n){e.seq.push(n),e.map[n.id]=n}function _f(e,n,t){const i=e.name,a=i.length;for(vi.lastIndex=0;;){const r=vi.exec(i),d=vi.lastIndex;let c=r[1];const g=r[2]==="]",_=r[3];if(g&&(c=c|0),_===void 0||_==="["&&d+2===a){Ja(t,_===void 0?new pf(c,e,n):new hf(c,e,n));break}else{let p=t.map[c];p===void 0&&(p=new mf(c),Ja(t,p)),t=p}}}class Xn{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const r=n.getActiveUniform(t,a),d=n.getUniformLocation(t,r.name);_f(r,d,this)}}setValue(n,t,i,a){const r=this.map[t];r!==void 0&&r.setValue(n,i,a)}setOptional(n,t,i){const a=t[i];a!==void 0&&this.setValue(n,i,a)}static upload(n,t,i,a){for(let r=0,d=t.length;r!==d;++r){const c=t[r],g=i[c.id];g.needsUpdate!==!1&&c.setValue(n,g.value,a)}}static seqWithValue(n,t){const i=[];for(let a=0,r=n.length;a!==r;++a){const d=n[a];d.id in t&&i.push(d)}return i}}function Qa(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const gf=37297;let vf=0;function Ef(e,n){const t=e.split(`
`),i=[],a=Math.max(n-6,0),r=Math.min(n+6,t.length);for(let d=a;d<r;d++){const c=d+1;i.push(`${c===n?">":" "} ${c}: ${t[d]}`)}return i.join(`
`)}const ja=new He;function Sf(e){rt._getMatrix(ja,rt.workingColorSpace,e);const n=`mat3( ${ja.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(e)){case Dr:return[n,"LinearTransferOETF"];case $e:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function er(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),r=(e.getShaderInfoLog(n)||"").trim();if(i&&r==="")return"";const d=/ERROR: 0:(\d+)/.exec(r);if(d){const c=parseInt(d[1]);return t.toUpperCase()+`

`+r+`

`+Ef(e.getShaderSource(n),c)}else return r}function Mf(e,n){const t=Sf(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Tf(e,n){let t;switch(n){case ls:t="Linear";break;case cs:t="Reinhard";break;case ss:t="Cineon";break;case Ur:t="ACESFilmic";break;case os:t="AgX";break;case rs:t="Neutral";break;case as:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),t="Linear"}return"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const kn=new Pe;function xf(){rt.getLuminanceCoefficients(kn);const e=kn.x.toFixed(4),n=kn.y.toFixed(4),t=kn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Af(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sn).join(`
`)}function Rf(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function bf(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=e.getActiveAttrib(n,a),d=r.name;let c=1;r.type===e.FLOAT_MAT2&&(c=2),r.type===e.FLOAT_MAT3&&(c=3),r.type===e.FLOAT_MAT4&&(c=4),t[d]={type:r.type,location:e.getAttribLocation(n,d),locationSize:c}}return t}function Sn(e){return e!==""}function tr(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function nr(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const Cf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fi(e){return e.replace(Cf,Pf)}const wf=new Map;function Pf(e,n){let t=Ne[n];if(t===void 0){const i=wf.get(n);if(i!==void 0)t=Ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return Fi(t)}const Lf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ir(e){return e.replace(Lf,Df)}function Df(e,n,t,i){let a="";for(let r=parseInt(n);r<parseInt(t);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function ar(e){let n=`precision ${e.precision} float;
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
#define LOW_PRECISION`),n}function Uf(e){let n="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Er?n="SHADOWMAP_TYPE_PCF":e.shadowMapType===is?n="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===wt&&(n="SHADOWMAP_TYPE_VSM"),n}function yf(e){let n="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Dn:case hn:n="ENVMAP_TYPE_CUBE";break;case ei:n="ENVMAP_TYPE_CUBE_UV";break}return n}function If(e){let n="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case hn:n="ENVMAP_MODE_REFRACTION";break}return n}function Nf(e){let n="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case _s:n="ENVMAP_BLENDING_MULTIPLY";break;case ms:n="ENVMAP_BLENDING_MIX";break;case hs:n="ENVMAP_BLENDING_ADD";break}return n}function Of(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Ff(e,n,t,i){const a=e.getContext(),r=t.defines;let d=t.vertexShader,c=t.fragmentShader;const g=Uf(t),_=yf(t),E=If(t),p=Nf(t),v=Of(t),T=Af(t),L=Rf(r),R=a.createProgram();let l,o,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,L].filter(Sn).join(`
`),l.length>0&&(l+=`
`),o=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,L].filter(Sn).join(`
`),o.length>0&&(o+=`
`)):(l=[ar(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,L,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+E:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+g:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sn).join(`
`),o=[ar(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,L,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.envMap?"#define "+E:"",t.envMap?"#define "+p:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+g:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gt?"#define TONE_MAPPING":"",t.toneMapping!==Gt?Ne.tonemapping_pars_fragment:"",t.toneMapping!==Gt?Tf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,Mf("linearToOutputTexel",t.outputColorSpace),xf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sn).join(`
`)),d=Fi(d),d=tr(d,t),d=nr(d,t),c=Fi(c),c=tr(c,t),c=nr(c,t),d=ir(d),c=ir(c),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,l=[T,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+l,o=["#define varying in",t.glslVersion===Na?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Na?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+o);const x=w+l+d,M=w+o+c,U=Qa(a,a.VERTEX_SHADER,x),P=Qa(a,a.FRAGMENT_SHADER,M);a.attachShader(R,U),a.attachShader(R,P),t.index0AttributeName!==void 0?a.bindAttribLocation(R,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R);function N(D){if(e.debug.checkShaderErrors){const B=a.getProgramInfoLog(R)||"",X=a.getShaderInfoLog(U)||"",Y=a.getShaderInfoLog(P)||"",$=B.trim(),W=X.trim(),ne=Y.trim();let H=!0,ge=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1)if(H=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,R,U,P);else{const xe=er(a,U,"vertex"),ye=er(a,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(R,a.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+$+`
`+xe+`
`+ye)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(W===""||ne==="")&&(ge=!1);ge&&(D.diagnostics={runnable:H,programLog:$,vertexShader:{log:W,prefix:l},fragmentShader:{log:ne,prefix:o}})}a.deleteShader(U),a.deleteShader(P),V=new Xn(a,R),m=bf(a,R)}let V;this.getUniforms=function(){return V===void 0&&N(this),V};let m;this.getAttributes=function(){return m===void 0&&N(this),m};let u=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return u===!1&&(u=a.getProgramParameter(R,gf)),u},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vf++,this.cacheKey=n,this.usedTimes=1,this.program=R,this.vertexShader=U,this.fragmentShader=P,this}let Bf=0;class Gf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,a=this._getShaderStage(t),r=this._getShaderStage(i),d=this._getShaderCacheForMaterial(n);return d.has(a)===!1&&(d.add(a),a.usedTimes++),d.has(r)===!1&&(d.add(r),r.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new Hf(n),t.set(n,i)),i}}class Hf{constructor(n){this.id=Bf++,this.code=n,this.usedTimes=0}}function Vf(e,n,t,i,a,r,d){const c=new ns,g=new Gf,_=new Set,E=[],p=a.logarithmicDepthBuffer,v=a.vertexTextures;let T=a.precision;const L={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(m){return _.add(m),m===0?"uv":`uv${m}`}function l(m,u,D,B,X){const Y=B.fog,$=X.geometry,W=m.isMeshStandardMaterial?B.environment:null,ne=(m.isMeshStandardMaterial?t:n).get(m.envMap||W),H=ne&&ne.mapping===ei?ne.image.height:null,ge=L[m.type];m.precision!==null&&(T=a.getMaxPrecision(m.precision),T!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",T,"instead."));const xe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ye=xe!==void 0?xe.length:0;let Ve=0;$.morphAttributes.position!==void 0&&(Ve=1),$.morphAttributes.normal!==void 0&&(Ve=2),$.morphAttributes.color!==void 0&&(Ve=3);let nt,et,We,k;if(ge){const ke=At[ge];nt=ke.vertexShader,et=ke.fragmentShader}else nt=m.vertexShader,et=m.fragmentShader,g.update(m),We=g.getVertexShaderID(m),k=g.getFragmentShaderID(m);const q=e.getRenderTarget(),le=e.state.buffers.depth.getReversed(),we=X.isInstancedMesh===!0,Ee=X.isBatchedMesh===!0,Be=!!m.map,lt=!!m.matcap,S=!!ne,Ze=!!m.aoMap,De=!!m.lightMap,be=!!m.bumpMap,ue=!!m.normalMap,Je=!!m.displacementMap,pe=!!m.emissiveMap,Ie=!!m.metalnessMap,ct=!!m.roughnessMap,it=m.anisotropy>0,h=m.clearcoat>0,s=m.dispersion>0,y=m.iridescence>0,G=m.sheen>0,K=m.transmission>0,F=it&&!!m.anisotropyMap,ve=h&&!!m.clearcoatMap,ee=h&&!!m.clearcoatNormalMap,he=h&&!!m.clearcoatRoughnessMap,me=y&&!!m.iridescenceMap,Q=y&&!!m.iridescenceThicknessMap,oe=G&&!!m.sheenColorMap,Re=G&&!!m.sheenRoughnessMap,_e=!!m.specularMap,ae=!!m.specularColorMap,Ue=!!m.specularIntensityMap,A=K&&!!m.transmissionMap,j=K&&!!m.thicknessMap,te=!!m.gradientMap,ce=!!m.alphaMap,Z=m.alphaTest>0,z=!!m.alphaHash,fe=!!m.extensions;let Le=Gt;m.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Le=e.toneMapping);const Ke={shaderID:ge,shaderType:m.type,shaderName:m.name,vertexShader:nt,fragmentShader:et,defines:m.defines,customVertexShaderID:We,customFragmentShaderID:k,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:T,batching:Ee,batchingColor:Ee&&X._colorsTexture!==null,instancing:we,instancingColor:we&&X.instanceColor!==null,instancingMorph:we&&X.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:q===null?e.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:jn,alphaToCoverage:!!m.alphaToCoverage,map:Be,matcap:lt,envMap:S,envMapMode:S&&ne.mapping,envMapCubeUVHeight:H,aoMap:Ze,lightMap:De,bumpMap:be,normalMap:ue,displacementMap:v&&Je,emissiveMap:pe,normalMapObjectSpace:ue&&m.normalMapType===Jo,normalMapTangentSpace:ue&&m.normalMapType===Zo,metalnessMap:Ie,roughnessMap:ct,anisotropy:it,anisotropyMap:F,clearcoat:h,clearcoatMap:ve,clearcoatNormalMap:ee,clearcoatRoughnessMap:he,dispersion:s,iridescence:y,iridescenceMap:me,iridescenceThicknessMap:Q,sheen:G,sheenColorMap:oe,sheenRoughnessMap:Re,specularMap:_e,specularColorMap:ae,specularIntensityMap:Ue,transmission:K,transmissionMap:A,thicknessMap:j,gradientMap:te,opaque:m.transparent===!1&&m.blending===Wn&&m.alphaToCoverage===!1,alphaMap:ce,alphaTest:Z,alphaHash:z,combine:m.combine,mapUv:Be&&R(m.map.channel),aoMapUv:Ze&&R(m.aoMap.channel),lightMapUv:De&&R(m.lightMap.channel),bumpMapUv:be&&R(m.bumpMap.channel),normalMapUv:ue&&R(m.normalMap.channel),displacementMapUv:Je&&R(m.displacementMap.channel),emissiveMapUv:pe&&R(m.emissiveMap.channel),metalnessMapUv:Ie&&R(m.metalnessMap.channel),roughnessMapUv:ct&&R(m.roughnessMap.channel),anisotropyMapUv:F&&R(m.anisotropyMap.channel),clearcoatMapUv:ve&&R(m.clearcoatMap.channel),clearcoatNormalMapUv:ee&&R(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&R(m.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&R(m.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&R(m.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&R(m.sheenColorMap.channel),sheenRoughnessMapUv:Re&&R(m.sheenRoughnessMap.channel),specularMapUv:_e&&R(m.specularMap.channel),specularColorMapUv:ae&&R(m.specularColorMap.channel),specularIntensityMapUv:Ue&&R(m.specularIntensityMap.channel),transmissionMapUv:A&&R(m.transmissionMap.channel),thicknessMapUv:j&&R(m.thicknessMap.channel),alphaMapUv:ce&&R(m.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(ue||it),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!$.attributes.uv&&(Be||ce),fog:!!Y,useFog:m.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:m.flatShading===!0&&m.wireframe===!1,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:le,skinning:X.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Ve,numDirLights:u.directional.length,numPointLights:u.point.length,numSpotLights:u.spot.length,numSpotLightMaps:u.spotLightMap.length,numRectAreaLights:u.rectArea.length,numHemiLights:u.hemi.length,numDirLightShadows:u.directionalShadowMap.length,numPointLightShadows:u.pointShadowMap.length,numSpotLightShadows:u.spotShadowMap.length,numSpotLightShadowsWithMaps:u.numSpotLightShadowsWithMaps,numLightProbes:u.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:m.dithering,shadowMapEnabled:e.shadowMap.enabled&&D.length>0,shadowMapType:e.shadowMap.type,toneMapping:Le,decodeVideoTexture:Be&&m.map.isVideoTexture===!0&&rt.getTransfer(m.map.colorSpace)===$e,decodeVideoTextureEmissive:pe&&m.emissiveMap.isVideoTexture===!0&&rt.getTransfer(m.emissiveMap.colorSpace)===$e,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===Pt,flipSided:m.side===Mt,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:fe&&m.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&m.extensions.multiDraw===!0||Ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Ke.vertexUv1s=_.has(1),Ke.vertexUv2s=_.has(2),Ke.vertexUv3s=_.has(3),_.clear(),Ke}function o(m){const u=[];if(m.shaderID?u.push(m.shaderID):(u.push(m.customVertexShaderID),u.push(m.customFragmentShaderID)),m.defines!==void 0)for(const D in m.defines)u.push(D),u.push(m.defines[D]);return m.isRawShaderMaterial===!1&&(w(u,m),x(u,m),u.push(e.outputColorSpace)),u.push(m.customProgramCacheKey),u.join()}function w(m,u){m.push(u.precision),m.push(u.outputColorSpace),m.push(u.envMapMode),m.push(u.envMapCubeUVHeight),m.push(u.mapUv),m.push(u.alphaMapUv),m.push(u.lightMapUv),m.push(u.aoMapUv),m.push(u.bumpMapUv),m.push(u.normalMapUv),m.push(u.displacementMapUv),m.push(u.emissiveMapUv),m.push(u.metalnessMapUv),m.push(u.roughnessMapUv),m.push(u.anisotropyMapUv),m.push(u.clearcoatMapUv),m.push(u.clearcoatNormalMapUv),m.push(u.clearcoatRoughnessMapUv),m.push(u.iridescenceMapUv),m.push(u.iridescenceThicknessMapUv),m.push(u.sheenColorMapUv),m.push(u.sheenRoughnessMapUv),m.push(u.specularMapUv),m.push(u.specularColorMapUv),m.push(u.specularIntensityMapUv),m.push(u.transmissionMapUv),m.push(u.thicknessMapUv),m.push(u.combine),m.push(u.fogExp2),m.push(u.sizeAttenuation),m.push(u.morphTargetsCount),m.push(u.morphAttributeCount),m.push(u.numDirLights),m.push(u.numPointLights),m.push(u.numSpotLights),m.push(u.numSpotLightMaps),m.push(u.numHemiLights),m.push(u.numRectAreaLights),m.push(u.numDirLightShadows),m.push(u.numPointLightShadows),m.push(u.numSpotLightShadows),m.push(u.numSpotLightShadowsWithMaps),m.push(u.numLightProbes),m.push(u.shadowMapType),m.push(u.toneMapping),m.push(u.numClippingPlanes),m.push(u.numClipIntersection),m.push(u.depthPacking)}function x(m,u){c.disableAll(),u.supportsVertexTextures&&c.enable(0),u.instancing&&c.enable(1),u.instancingColor&&c.enable(2),u.instancingMorph&&c.enable(3),u.matcap&&c.enable(4),u.envMap&&c.enable(5),u.normalMapObjectSpace&&c.enable(6),u.normalMapTangentSpace&&c.enable(7),u.clearcoat&&c.enable(8),u.iridescence&&c.enable(9),u.alphaTest&&c.enable(10),u.vertexColors&&c.enable(11),u.vertexAlphas&&c.enable(12),u.vertexUv1s&&c.enable(13),u.vertexUv2s&&c.enable(14),u.vertexUv3s&&c.enable(15),u.vertexTangents&&c.enable(16),u.anisotropy&&c.enable(17),u.alphaHash&&c.enable(18),u.batching&&c.enable(19),u.dispersion&&c.enable(20),u.batchingColor&&c.enable(21),u.gradientMap&&c.enable(22),m.push(c.mask),c.disableAll(),u.fog&&c.enable(0),u.useFog&&c.enable(1),u.flatShading&&c.enable(2),u.logarithmicDepthBuffer&&c.enable(3),u.reversedDepthBuffer&&c.enable(4),u.skinning&&c.enable(5),u.morphTargets&&c.enable(6),u.morphNormals&&c.enable(7),u.morphColors&&c.enable(8),u.premultipliedAlpha&&c.enable(9),u.shadowMapEnabled&&c.enable(10),u.doubleSided&&c.enable(11),u.flipSided&&c.enable(12),u.useDepthPacking&&c.enable(13),u.dithering&&c.enable(14),u.transmission&&c.enable(15),u.sheen&&c.enable(16),u.opaque&&c.enable(17),u.pointsUvs&&c.enable(18),u.decodeVideoTexture&&c.enable(19),u.decodeVideoTextureEmissive&&c.enable(20),u.alphaToCoverage&&c.enable(21),m.push(c.mask)}function M(m){const u=L[m.type];let D;if(u){const B=At[u];D=$o.clone(B.uniforms)}else D=m.uniforms;return D}function U(m,u){let D;for(let B=0,X=E.length;B<X;B++){const Y=E[B];if(Y.cacheKey===u){D=Y,++D.usedTimes;break}}return D===void 0&&(D=new Ff(e,u,m,r),E.push(D)),D}function P(m){if(--m.usedTimes===0){const u=E.indexOf(m);E[u]=E[E.length-1],E.pop(),m.destroy()}}function N(m){g.remove(m)}function V(){g.dispose()}return{getParameters:l,getProgramCacheKey:o,getUniforms:M,acquireProgram:U,releaseProgram:P,releaseShaderCache:N,programs:E,dispose:V}}function kf(){let e=new WeakMap;function n(d){return e.has(d)}function t(d){let c=e.get(d);return c===void 0&&(c={},e.set(d,c)),c}function i(d){e.delete(d)}function a(d,c,g){e.get(d)[c]=g}function r(){e=new WeakMap}return{has:n,get:t,remove:i,update:a,dispose:r}}function zf(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.z!==n.z?e.z-n.z:e.id-n.id}function rr(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function or(){const e=[];let n=0;const t=[],i=[],a=[];function r(){n=0,t.length=0,i.length=0,a.length=0}function d(p,v,T,L,R,l){let o=e[n];return o===void 0?(o={id:p.id,object:p,geometry:v,material:T,groupOrder:L,renderOrder:p.renderOrder,z:R,group:l},e[n]=o):(o.id=p.id,o.object=p,o.geometry=v,o.material=T,o.groupOrder=L,o.renderOrder=p.renderOrder,o.z=R,o.group=l),n++,o}function c(p,v,T,L,R,l){const o=d(p,v,T,L,R,l);T.transmission>0?i.push(o):T.transparent===!0?a.push(o):t.push(o)}function g(p,v,T,L,R,l){const o=d(p,v,T,L,R,l);T.transmission>0?i.unshift(o):T.transparent===!0?a.unshift(o):t.unshift(o)}function _(p,v){t.length>1&&t.sort(p||zf),i.length>1&&i.sort(v||rr),a.length>1&&a.sort(v||rr)}function E(){for(let p=n,v=e.length;p<v;p++){const T=e[p];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:t,transmissive:i,transparent:a,init:r,push:c,unshift:g,finish:E,sort:_}}function Wf(){let e=new WeakMap;function n(i,a){const r=e.get(i);let d;return r===void 0?(d=new or,e.set(i,[d])):a>=r.length?(d=new or,r.push(d)):d=r[a],d}function t(){e=new WeakMap}return{get:n,dispose:t}}function Xf(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new Pe,color:new Ye};break;case"SpotLight":t={position:new Pe,direction:new Pe,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Pe,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Pe,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new Pe,halfWidth:new Pe,halfHeight:new Pe};break}return e[n.id]=t,t}}}function Yf(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let Kf=0;function qf(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function $f(e){const n=new Xf,t=Yf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let _=0;_<9;_++)i.probe.push(new Pe);const a=new Pe,r=new fn,d=new fn;function c(_){let E=0,p=0,v=0;for(let m=0;m<9;m++)i.probe[m].set(0,0,0);let T=0,L=0,R=0,l=0,o=0,w=0,x=0,M=0,U=0,P=0,N=0;_.sort(qf);for(let m=0,u=_.length;m<u;m++){const D=_[m],B=D.color,X=D.intensity,Y=D.distance,$=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)E+=B.r*X,p+=B.g*X,v+=B.b*X;else if(D.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(D.sh.coefficients[W],X);N++}else if(D.isDirectionalLight){const W=n.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ne=D.shadow,H=t.get(D);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,i.directionalShadow[T]=H,i.directionalShadowMap[T]=$,i.directionalShadowMatrix[T]=D.shadow.matrix,w++}i.directional[T]=W,T++}else if(D.isSpotLight){const W=n.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(B).multiplyScalar(X),W.distance=Y,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,i.spot[R]=W;const ne=D.shadow;if(D.map&&(i.spotLightMap[U]=D.map,U++,ne.updateMatrices(D),D.castShadow&&P++),i.spotLightMatrix[R]=ne.matrix,D.castShadow){const H=t.get(D);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,i.spotShadow[R]=H,i.spotShadowMap[R]=$,M++}R++}else if(D.isRectAreaLight){const W=n.get(D);W.color.copy(B).multiplyScalar(X),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),i.rectArea[l]=W,l++}else if(D.isPointLight){const W=n.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){const ne=D.shadow,H=t.get(D);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,H.shadowCameraNear=ne.camera.near,H.shadowCameraFar=ne.camera.far,i.pointShadow[L]=H,i.pointShadowMap[L]=$,i.pointShadowMatrix[L]=D.shadow.matrix,x++}i.point[L]=W,L++}else if(D.isHemisphereLight){const W=n.get(D);W.skyColor.copy(D.color).multiplyScalar(X),W.groundColor.copy(D.groundColor).multiplyScalar(X),i.hemi[o]=W,o++}}l>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2)),i.ambient[0]=E,i.ambient[1]=p,i.ambient[2]=v;const V=i.hash;(V.directionalLength!==T||V.pointLength!==L||V.spotLength!==R||V.rectAreaLength!==l||V.hemiLength!==o||V.numDirectionalShadows!==w||V.numPointShadows!==x||V.numSpotShadows!==M||V.numSpotMaps!==U||V.numLightProbes!==N)&&(i.directional.length=T,i.spot.length=R,i.rectArea.length=l,i.point.length=L,i.hemi.length=o,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=M+U-P,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=N,V.directionalLength=T,V.pointLength=L,V.spotLength=R,V.rectAreaLength=l,V.hemiLength=o,V.numDirectionalShadows=w,V.numPointShadows=x,V.numSpotShadows=M,V.numSpotMaps=U,V.numLightProbes=N,i.version=Kf++)}function g(_,E){let p=0,v=0,T=0,L=0,R=0;const l=E.matrixWorldInverse;for(let o=0,w=_.length;o<w;o++){const x=_[o];if(x.isDirectionalLight){const M=i.directional[p];M.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(l),p++}else if(x.isSpotLight){const M=i.spot[T];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(l),M.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(l),T++}else if(x.isRectAreaLight){const M=i.rectArea[L];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(l),d.identity(),r.copy(x.matrixWorld),r.premultiply(l),d.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(d),M.halfHeight.applyMatrix4(d),L++}else if(x.isPointLight){const M=i.point[v];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(l),v++}else if(x.isHemisphereLight){const M=i.hemi[R];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(l),R++}}}return{setup:c,setupView:g,state:i}}function sr(e){const n=new $f(e),t=[],i=[];function a(E){_.camera=E,t.length=0,i.length=0}function r(E){t.push(E)}function d(E){i.push(E)}function c(){n.setup(t)}function g(E){n.setupView(t,E)}const _={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:a,state:_,setupLights:c,setupLightsView:g,pushLight:r,pushShadow:d}}function Zf(e){let n=new WeakMap;function t(a,r=0){const d=n.get(a);let c;return d===void 0?(c=new sr(e),n.set(a,[c])):r>=d.length?(c=new sr(e),d.push(c)):c=d[r],c}function i(){n=new WeakMap}return{get:t,dispose:i}}const Jf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qf=`uniform sampler2D shadow_pass;
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
}`;function jf(e,n,t){let i=new _r;const a=new ft,r=new ft,d=new mt,c=new Io({depthPacking:No}),g=new Oo,_={},E=t.maxTextureSize,p={[wn]:Mt,[Mt]:wn,[Pt]:Pt},v=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Jf,fragmentShader:Qf}),T=v.clone();T.defines.HORIZONTAL_PASS=1;const L=new $n;L.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new at(L,v),l=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Er;let o=this.type;this.render=function(P,N,V){if(l.enabled===!1||l.autoUpdate===!1&&l.needsUpdate===!1||P.length===0)return;const m=e.getRenderTarget(),u=e.getActiveCubeFace(),D=e.getActiveMipmapLevel(),B=e.state;B.setBlending(Qt),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const X=o!==wt&&this.type===wt,Y=o===wt&&this.type!==wt;for(let $=0,W=P.length;$<W;$++){const ne=P[$],H=ne.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);const ge=H.getFrameExtents();if(a.multiply(ge),r.copy(H.mapSize),(a.x>E||a.y>E)&&(a.x>E&&(r.x=Math.floor(E/ge.x),a.x=r.x*ge.x,H.mapSize.x=r.x),a.y>E&&(r.y=Math.floor(E/ge.y),a.y=r.y*ge.y,H.mapSize.y=r.y)),H.map===null||X===!0||Y===!0){const ye=this.type!==wt?{minFilter:Tn,magFilter:Tn}:{};H.map!==null&&H.map.dispose(),H.map=new un(a.x,a.y,ye),H.map.texture.name=ne.name+".shadowMap",H.camera.updateProjectionMatrix()}e.setRenderTarget(H.map),e.clear();const xe=H.getViewportCount();for(let ye=0;ye<xe;ye++){const Ve=H.getViewport(ye);d.set(r.x*Ve.x,r.y*Ve.y,r.x*Ve.z,r.y*Ve.w),B.viewport(d),H.updateMatrices(ne,ye),i=H.getFrustum(),M(N,V,H.camera,ne,this.type)}H.isPointLightShadow!==!0&&this.type===wt&&w(H,V),H.needsUpdate=!1}o=this.type,l.needsUpdate=!1,e.setRenderTarget(m,u,D)};function w(P,N){const V=n.update(R);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,T.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,T.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new un(a.x,a.y)),v.uniforms.shadow_pass.value=P.map.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,e.setRenderTarget(P.mapPass),e.clear(),e.renderBufferDirect(N,null,V,v,R,null),T.uniforms.shadow_pass.value=P.mapPass.texture,T.uniforms.resolution.value=P.mapSize,T.uniforms.radius.value=P.radius,e.setRenderTarget(P.map),e.clear(),e.renderBufferDirect(N,null,V,T,R,null)}function x(P,N,V,m){let u=null;const D=V.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(D!==void 0)u=D;else if(u=V.isPointLight===!0?g:c,e.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const B=u.uuid,X=N.uuid;let Y=_[B];Y===void 0&&(Y={},_[B]=Y);let $=Y[X];$===void 0&&($=u.clone(),Y[X]=$,N.addEventListener("dispose",U)),u=$}if(u.visible=N.visible,u.wireframe=N.wireframe,m===wt?u.side=N.shadowSide!==null?N.shadowSide:N.side:u.side=N.shadowSide!==null?N.shadowSide:p[N.side],u.alphaMap=N.alphaMap,u.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,u.map=N.map,u.clipShadows=N.clipShadows,u.clippingPlanes=N.clippingPlanes,u.clipIntersection=N.clipIntersection,u.displacementMap=N.displacementMap,u.displacementScale=N.displacementScale,u.displacementBias=N.displacementBias,u.wireframeLinewidth=N.wireframeLinewidth,u.linewidth=N.linewidth,V.isPointLight===!0&&u.isMeshDistanceMaterial===!0){const B=e.properties.get(u);B.light=V}return u}function M(P,N,V,m,u){if(P.visible===!1)return;if(P.layers.test(N.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&u===wt)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,P.matrixWorld);const X=n.update(P),Y=P.material;if(Array.isArray(Y)){const $=X.groups;for(let W=0,ne=$.length;W<ne;W++){const H=$[W],ge=Y[H.materialIndex];if(ge&&ge.visible){const xe=x(P,ge,m,u);P.onBeforeShadow(e,P,N,V,X,xe,H),e.renderBufferDirect(V,null,X,xe,P,H),P.onAfterShadow(e,P,N,V,X,xe,H)}}}else if(Y.visible){const $=x(P,Y,m,u);P.onBeforeShadow(e,P,N,V,X,$,null),e.renderBufferDirect(V,null,X,$,P,null),P.onAfterShadow(e,P,N,V,X,$,null)}}const B=P.children;for(let X=0,Y=B.length;X<Y;X++)M(B[X],N,V,m,u)}function U(P){P.target.removeEventListener("dispose",U);for(const V in _){const m=_[V],u=P.target.uuid;u in m&&(m[u].dispose(),delete m[u])}}}const eu={[Ui]:Di,[Li]:Ci,[Pi]:bi,[qn]:wi,[Di]:Ui,[Ci]:Li,[bi]:Pi,[wi]:qn};function tu(e,n){function t(){let A=!1;const j=new mt;let te=null;const ce=new mt(0,0,0,0);return{setMask:function(Z){te!==Z&&!A&&(e.colorMask(Z,Z,Z,Z),te=Z)},setLocked:function(Z){A=Z},setClear:function(Z,z,fe,Le,Ke){Ke===!0&&(Z*=Le,z*=Le,fe*=Le),j.set(Z,z,fe,Le),ce.equals(j)===!1&&(e.clearColor(Z,z,fe,Le),ce.copy(j))},reset:function(){A=!1,te=null,ce.set(-1,0,0,0)}}}function i(){let A=!1,j=!1,te=null,ce=null,Z=null;return{setReversed:function(z){if(j!==z){const fe=n.get("EXT_clip_control");z?fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.ZERO_TO_ONE_EXT):fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.NEGATIVE_ONE_TO_ONE_EXT),j=z;const Le=Z;Z=null,this.setClear(Le)}},getReversed:function(){return j},setTest:function(z){z?q(e.DEPTH_TEST):le(e.DEPTH_TEST)},setMask:function(z){te!==z&&!A&&(e.depthMask(z),te=z)},setFunc:function(z){if(j&&(z=eu[z]),ce!==z){switch(z){case Ui:e.depthFunc(e.NEVER);break;case Di:e.depthFunc(e.ALWAYS);break;case Li:e.depthFunc(e.LESS);break;case qn:e.depthFunc(e.LEQUAL);break;case Pi:e.depthFunc(e.EQUAL);break;case wi:e.depthFunc(e.GEQUAL);break;case Ci:e.depthFunc(e.GREATER);break;case bi:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ce=z}},setLocked:function(z){A=z},setClear:function(z){Z!==z&&(j&&(z=1-z),e.clearDepth(z),Z=z)},reset:function(){A=!1,te=null,ce=null,Z=null,j=!1}}}function a(){let A=!1,j=null,te=null,ce=null,Z=null,z=null,fe=null,Le=null,Ke=null;return{setTest:function(ke){A||(ke?q(e.STENCIL_TEST):le(e.STENCIL_TEST))},setMask:function(ke){j!==ke&&!A&&(e.stencilMask(ke),j=ke)},setFunc:function(ke,Ct,xt){(te!==ke||ce!==Ct||Z!==xt)&&(e.stencilFunc(ke,Ct,xt),te=ke,ce=Ct,Z=xt)},setOp:function(ke,Ct,xt){(z!==ke||fe!==Ct||Le!==xt)&&(e.stencilOp(ke,Ct,xt),z=ke,fe=Ct,Le=xt)},setLocked:function(ke){A=ke},setClear:function(ke){Ke!==ke&&(e.clearStencil(ke),Ke=ke)},reset:function(){A=!1,j=null,te=null,ce=null,Z=null,z=null,fe=null,Le=null,Ke=null}}}const r=new t,d=new i,c=new a,g=new WeakMap,_=new WeakMap;let E={},p={},v=new WeakMap,T=[],L=null,R=!1,l=null,o=null,w=null,x=null,M=null,U=null,P=null,N=new Ye(0,0,0),V=0,m=!1,u=null,D=null,B=null,X=null,Y=null;const $=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ne=0;const H=e.getParameter(e.VERSION);H.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=ne>=1):H.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=ne>=2);let ge=null,xe={};const ye=e.getParameter(e.SCISSOR_BOX),Ve=e.getParameter(e.VIEWPORT),nt=new mt().fromArray(ye),et=new mt().fromArray(Ve);function We(A,j,te,ce){const Z=new Uint8Array(4),z=e.createTexture();e.bindTexture(A,z),e.texParameteri(A,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(A,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let fe=0;fe<te;fe++)A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY?e.texImage3D(j,0,e.RGBA,1,1,ce,0,e.RGBA,e.UNSIGNED_BYTE,Z):e.texImage2D(j+fe,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Z);return z}const k={};k[e.TEXTURE_2D]=We(e.TEXTURE_2D,e.TEXTURE_2D,1),k[e.TEXTURE_CUBE_MAP]=We(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[e.TEXTURE_2D_ARRAY]=We(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),k[e.TEXTURE_3D]=We(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),d.setClear(1),c.setClear(0),q(e.DEPTH_TEST),d.setFunc(qn),be(!1),ue(Pa),q(e.CULL_FACE),Ze(Qt);function q(A){E[A]!==!0&&(e.enable(A),E[A]=!0)}function le(A){E[A]!==!1&&(e.disable(A),E[A]=!1)}function we(A,j){return p[A]!==j?(e.bindFramebuffer(A,j),p[A]=j,A===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=j),A===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=j),!0):!1}function Ee(A,j){let te=T,ce=!1;if(A){te=v.get(j),te===void 0&&(te=[],v.set(j,te));const Z=A.textures;if(te.length!==Z.length||te[0]!==e.COLOR_ATTACHMENT0){for(let z=0,fe=Z.length;z<fe;z++)te[z]=e.COLOR_ATTACHMENT0+z;te.length=Z.length,ce=!0}}else te[0]!==e.BACK&&(te[0]=e.BACK,ce=!0);ce&&e.drawBuffers(te)}function Be(A){return L!==A?(e.useProgram(A),L=A,!0):!1}const lt={[vn]:e.FUNC_ADD,[ro]:e.FUNC_SUBTRACT,[ao]:e.FUNC_REVERSE_SUBTRACT};lt[gs]=e.MIN,lt[vs]=e.MAX;const S={[Mo]:e.ZERO,[So]:e.ONE,[Eo]:e.SRC_COLOR,[vo]:e.SRC_ALPHA,[go]:e.SRC_ALPHA_SATURATE,[_o]:e.DST_COLOR,[mo]:e.DST_ALPHA,[ho]:e.ONE_MINUS_SRC_COLOR,[po]:e.ONE_MINUS_SRC_ALPHA,[uo]:e.ONE_MINUS_DST_COLOR,[fo]:e.ONE_MINUS_DST_ALPHA,[lo]:e.CONSTANT_COLOR,[co]:e.ONE_MINUS_CONSTANT_COLOR,[so]:e.CONSTANT_ALPHA,[oo]:e.ONE_MINUS_CONSTANT_ALPHA};function Ze(A,j,te,ce,Z,z,fe,Le,Ke,ke){if(A===Qt){R===!0&&(le(e.BLEND),R=!1);return}if(R===!1&&(q(e.BLEND),R=!0),A!==Ko){if(A!==l||ke!==m){if((o!==vn||M!==vn)&&(e.blendEquation(e.FUNC_ADD),o=vn,M=vn),ke)switch(A){case Wn:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ua:e.blendFunc(e.ONE,e.ONE);break;case Da:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case La:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Wn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ua:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Da:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case La:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}w=null,x=null,U=null,P=null,N.set(0,0,0),V=0,l=A,m=ke}return}Z=Z||j,z=z||te,fe=fe||ce,(j!==o||Z!==M)&&(e.blendEquationSeparate(lt[j],lt[Z]),o=j,M=Z),(te!==w||ce!==x||z!==U||fe!==P)&&(e.blendFuncSeparate(S[te],S[ce],S[z],S[fe]),w=te,x=ce,U=z,P=fe),(Le.equals(N)===!1||Ke!==V)&&(e.blendColor(Le.r,Le.g,Le.b,Ke),N.copy(Le),V=Ke),l=A,m=!1}function De(A,j){A.side===Pt?le(e.CULL_FACE):q(e.CULL_FACE);let te=A.side===Mt;j&&(te=!te),be(te),A.blending===Wn&&A.transparent===!1?Ze(Qt):Ze(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),d.setFunc(A.depthFunc),d.setTest(A.depthTest),d.setMask(A.depthWrite),r.setMask(A.colorWrite);const ce=A.stencilWrite;c.setTest(ce),ce&&(c.setMask(A.stencilWriteMask),c.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),c.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),pe(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?q(e.SAMPLE_ALPHA_TO_COVERAGE):le(e.SAMPLE_ALPHA_TO_COVERAGE)}function be(A){u!==A&&(A?e.frontFace(e.CW):e.frontFace(e.CCW),u=A)}function ue(A){A!==Xo?(q(e.CULL_FACE),A!==D&&(A===Pa?e.cullFace(e.BACK):A===Yo?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):le(e.CULL_FACE),D=A}function Je(A){A!==B&&(W&&e.lineWidth(A),B=A)}function pe(A,j,te){A?(q(e.POLYGON_OFFSET_FILL),(X!==j||Y!==te)&&(e.polygonOffset(j,te),X=j,Y=te)):le(e.POLYGON_OFFSET_FILL)}function Ie(A){A?q(e.SCISSOR_TEST):le(e.SCISSOR_TEST)}function ct(A){A===void 0&&(A=e.TEXTURE0+$-1),ge!==A&&(e.activeTexture(A),ge=A)}function it(A,j,te){te===void 0&&(ge===null?te=e.TEXTURE0+$-1:te=ge);let ce=xe[te];ce===void 0&&(ce={type:void 0,texture:void 0},xe[te]=ce),(ce.type!==A||ce.texture!==j)&&(ge!==te&&(e.activeTexture(te),ge=te),e.bindTexture(A,j||k[A]),ce.type=A,ce.texture=j)}function h(){const A=xe[ge];A!==void 0&&A.type!==void 0&&(e.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function s(){try{e.compressedTexImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function y(){try{e.compressedTexImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function G(){try{e.texSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function K(){try{e.texSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function F(){try{e.compressedTexSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ve(){try{e.compressedTexSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ee(){try{e.texStorage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function he(){try{e.texStorage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function me(){try{e.texImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Q(){try{e.texImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function oe(A){nt.equals(A)===!1&&(e.scissor(A.x,A.y,A.z,A.w),nt.copy(A))}function Re(A){et.equals(A)===!1&&(e.viewport(A.x,A.y,A.z,A.w),et.copy(A))}function _e(A,j){let te=_.get(j);te===void 0&&(te=new WeakMap,_.set(j,te));let ce=te.get(A);ce===void 0&&(ce=e.getUniformBlockIndex(j,A.name),te.set(A,ce))}function ae(A,j){const ce=_.get(j).get(A);g.get(j)!==ce&&(e.uniformBlockBinding(j,ce,A.__bindingPointIndex),g.set(j,ce))}function Ue(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),d.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),E={},ge=null,xe={},p={},v=new WeakMap,T=[],L=null,R=!1,l=null,o=null,w=null,x=null,M=null,U=null,P=null,N=new Ye(0,0,0),V=0,m=!1,u=null,D=null,B=null,X=null,Y=null,nt.set(0,0,e.canvas.width,e.canvas.height),et.set(0,0,e.canvas.width,e.canvas.height),r.reset(),d.reset(),c.reset()}return{buffers:{color:r,depth:d,stencil:c},enable:q,disable:le,bindFramebuffer:we,drawBuffers:Ee,useProgram:Be,setBlending:Ze,setMaterial:De,setFlipSided:be,setCullFace:ue,setLineWidth:Je,setPolygonOffset:pe,setScissorTest:Ie,activeTexture:ct,bindTexture:it,unbindTexture:h,compressedTexImage2D:s,compressedTexImage3D:y,texImage2D:me,texImage3D:Q,updateUBOMapping:_e,uniformBlockBinding:ae,texStorage2D:ee,texStorage3D:he,texSubImage2D:G,texSubImage3D:K,compressedTexSubImage2D:F,compressedTexSubImage3D:ve,scissor:oe,viewport:Re,reset:Ue}}function nu(e,n,t,i,a,r,d){const c=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new ft,E=new WeakMap;let p;const v=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function L(h,s){return T?new OffscreenCanvas(h,s):ps("canvas")}function R(h,s,y){let G=1;const K=it(h);if((K.width>y||K.height>y)&&(G=y/Math.max(K.width,K.height)),G<1)if(typeof HTMLImageElement<"u"&&h instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&h instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&h instanceof ImageBitmap||typeof VideoFrame<"u"&&h instanceof VideoFrame){const F=Math.floor(G*K.width),ve=Math.floor(G*K.height);p===void 0&&(p=L(F,ve));const ee=s?L(F,ve):p;return ee.width=F,ee.height=ve,ee.getContext("2d").drawImage(h,0,0,F,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+F+"x"+ve+")."),ee}else return"data"in h&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),h;return h}function l(h){return h.generateMipmaps}function o(h){e.generateMipmap(h)}function w(h){return h.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:h.isWebGL3DRenderTarget?e.TEXTURE_3D:h.isWebGLArrayRenderTarget||h.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function x(h,s,y,G,K=!1){if(h!==null){if(e[h]!==void 0)return e[h];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+h+"'")}let F=s;if(s===e.RED&&(y===e.FLOAT&&(F=e.R32F),y===e.HALF_FLOAT&&(F=e.R16F),y===e.UNSIGNED_BYTE&&(F=e.R8)),s===e.RED_INTEGER&&(y===e.UNSIGNED_BYTE&&(F=e.R8UI),y===e.UNSIGNED_SHORT&&(F=e.R16UI),y===e.UNSIGNED_INT&&(F=e.R32UI),y===e.BYTE&&(F=e.R8I),y===e.SHORT&&(F=e.R16I),y===e.INT&&(F=e.R32I)),s===e.RG&&(y===e.FLOAT&&(F=e.RG32F),y===e.HALF_FLOAT&&(F=e.RG16F),y===e.UNSIGNED_BYTE&&(F=e.RG8)),s===e.RG_INTEGER&&(y===e.UNSIGNED_BYTE&&(F=e.RG8UI),y===e.UNSIGNED_SHORT&&(F=e.RG16UI),y===e.UNSIGNED_INT&&(F=e.RG32UI),y===e.BYTE&&(F=e.RG8I),y===e.SHORT&&(F=e.RG16I),y===e.INT&&(F=e.RG32I)),s===e.RGB_INTEGER&&(y===e.UNSIGNED_BYTE&&(F=e.RGB8UI),y===e.UNSIGNED_SHORT&&(F=e.RGB16UI),y===e.UNSIGNED_INT&&(F=e.RGB32UI),y===e.BYTE&&(F=e.RGB8I),y===e.SHORT&&(F=e.RGB16I),y===e.INT&&(F=e.RGB32I)),s===e.RGBA_INTEGER&&(y===e.UNSIGNED_BYTE&&(F=e.RGBA8UI),y===e.UNSIGNED_SHORT&&(F=e.RGBA16UI),y===e.UNSIGNED_INT&&(F=e.RGBA32UI),y===e.BYTE&&(F=e.RGBA8I),y===e.SHORT&&(F=e.RGBA16I),y===e.INT&&(F=e.RGBA32I)),s===e.RGB&&(y===e.UNSIGNED_INT_5_9_9_9_REV&&(F=e.RGB9_E5),y===e.UNSIGNED_INT_10F_11F_11F_REV&&(F=e.R11F_G11F_B10F)),s===e.RGBA){const ve=K?Dr:rt.getTransfer(G);y===e.FLOAT&&(F=e.RGBA32F),y===e.HALF_FLOAT&&(F=e.RGBA16F),y===e.UNSIGNED_BYTE&&(F=ve===$e?e.SRGB8_ALPHA8:e.RGBA8),y===e.UNSIGNED_SHORT_4_4_4_4&&(F=e.RGBA4),y===e.UNSIGNED_SHORT_5_5_5_1&&(F=e.RGB5_A1)}return(F===e.R16F||F===e.R32F||F===e.RG16F||F===e.RG32F||F===e.RGBA16F||F===e.RGBA32F)&&n.get("EXT_color_buffer_float"),F}function M(h,s){let y;return h?s===null||s===Ln||s===Pn?y=e.DEPTH24_STENCIL8:s===Zt?y=e.DEPTH32F_STENCIL8:s===Zn&&(y=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):s===null||s===Ln||s===Pn?y=e.DEPTH_COMPONENT24:s===Zt?y=e.DEPTH_COMPONENT32F:s===Zn&&(y=e.DEPTH_COMPONENT16),y}function U(h,s){return l(h)===!0||h.isFramebufferTexture&&h.minFilter!==Tn&&h.minFilter!==sn?Math.log2(Math.max(s.width,s.height))+1:h.mipmaps!==void 0&&h.mipmaps.length>0?h.mipmaps.length:h.isCompressedTexture&&Array.isArray(h.image)?s.mipmaps.length:1}function P(h){const s=h.target;s.removeEventListener("dispose",P),V(s),s.isVideoTexture&&E.delete(s)}function N(h){const s=h.target;s.removeEventListener("dispose",N),u(s)}function V(h){const s=i.get(h);if(s.__webglInit===void 0)return;const y=h.source,G=v.get(y);if(G){const K=G[s.__cacheKey];K.usedTimes--,K.usedTimes===0&&m(h),Object.keys(G).length===0&&v.delete(y)}i.remove(h)}function m(h){const s=i.get(h);e.deleteTexture(s.__webglTexture);const y=h.source,G=v.get(y);delete G[s.__cacheKey],d.memory.textures--}function u(h){const s=i.get(h);if(h.depthTexture&&(h.depthTexture.dispose(),i.remove(h.depthTexture)),h.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(s.__webglFramebuffer[G]))for(let K=0;K<s.__webglFramebuffer[G].length;K++)e.deleteFramebuffer(s.__webglFramebuffer[G][K]);else e.deleteFramebuffer(s.__webglFramebuffer[G]);s.__webglDepthbuffer&&e.deleteRenderbuffer(s.__webglDepthbuffer[G])}else{if(Array.isArray(s.__webglFramebuffer))for(let G=0;G<s.__webglFramebuffer.length;G++)e.deleteFramebuffer(s.__webglFramebuffer[G]);else e.deleteFramebuffer(s.__webglFramebuffer);if(s.__webglDepthbuffer&&e.deleteRenderbuffer(s.__webglDepthbuffer),s.__webglMultisampledFramebuffer&&e.deleteFramebuffer(s.__webglMultisampledFramebuffer),s.__webglColorRenderbuffer)for(let G=0;G<s.__webglColorRenderbuffer.length;G++)s.__webglColorRenderbuffer[G]&&e.deleteRenderbuffer(s.__webglColorRenderbuffer[G]);s.__webglDepthRenderbuffer&&e.deleteRenderbuffer(s.__webglDepthRenderbuffer)}const y=h.textures;for(let G=0,K=y.length;G<K;G++){const F=i.get(y[G]);F.__webglTexture&&(e.deleteTexture(F.__webglTexture),d.memory.textures--),i.remove(y[G])}i.remove(h)}let D=0;function B(){D=0}function X(){const h=D;return h>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+h+" texture units while this GPU supports only "+a.maxTextures),D+=1,h}function Y(h){const s=[];return s.push(h.wrapS),s.push(h.wrapT),s.push(h.wrapR||0),s.push(h.magFilter),s.push(h.minFilter),s.push(h.anisotropy),s.push(h.internalFormat),s.push(h.format),s.push(h.type),s.push(h.generateMipmaps),s.push(h.premultiplyAlpha),s.push(h.flipY),s.push(h.unpackAlignment),s.push(h.colorSpace),s.join()}function $(h,s){const y=i.get(h);if(h.isVideoTexture&&Ie(h),h.isRenderTargetTexture===!1&&h.isExternalTexture!==!0&&h.version>0&&y.__version!==h.version){const G=h.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(y,h,s);return}}else h.isExternalTexture&&(y.__webglTexture=h.sourceTexture?h.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,y.__webglTexture,e.TEXTURE0+s)}function W(h,s){const y=i.get(h);if(h.isRenderTargetTexture===!1&&h.version>0&&y.__version!==h.version){k(y,h,s);return}t.bindTexture(e.TEXTURE_2D_ARRAY,y.__webglTexture,e.TEXTURE0+s)}function ne(h,s){const y=i.get(h);if(h.isRenderTargetTexture===!1&&h.version>0&&y.__version!==h.version){k(y,h,s);return}t.bindTexture(e.TEXTURE_3D,y.__webglTexture,e.TEXTURE0+s)}function H(h,s){const y=i.get(h);if(h.version>0&&y.__version!==h.version){q(y,h,s);return}t.bindTexture(e.TEXTURE_CUBE_MAP,y.__webglTexture,e.TEXTURE0+s)}const ge={[Ao]:e.REPEAT,[xo]:e.CLAMP_TO_EDGE,[To]:e.MIRRORED_REPEAT},xe={[Tn]:e.NEAREST,[Ro]:e.NEAREST_MIPMAP_NEAREST,[Bn]:e.NEAREST_MIPMAP_LINEAR,[sn]:e.LINEAR,[ci]:e.LINEAR_MIPMAP_NEAREST,[En]:e.LINEAR_MIPMAP_LINEAR},ye={[Uo]:e.NEVER,[Do]:e.ALWAYS,[Lo]:e.LESS,[vr]:e.LEQUAL,[Po]:e.EQUAL,[wo]:e.GEQUAL,[Co]:e.GREATER,[bo]:e.NOTEQUAL};function Ve(h,s){if(s.type===Zt&&n.has("OES_texture_float_linear")===!1&&(s.magFilter===sn||s.magFilter===ci||s.magFilter===Bn||s.magFilter===En||s.minFilter===sn||s.minFilter===ci||s.minFilter===Bn||s.minFilter===En)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(h,e.TEXTURE_WRAP_S,ge[s.wrapS]),e.texParameteri(h,e.TEXTURE_WRAP_T,ge[s.wrapT]),(h===e.TEXTURE_3D||h===e.TEXTURE_2D_ARRAY)&&e.texParameteri(h,e.TEXTURE_WRAP_R,ge[s.wrapR]),e.texParameteri(h,e.TEXTURE_MAG_FILTER,xe[s.magFilter]),e.texParameteri(h,e.TEXTURE_MIN_FILTER,xe[s.minFilter]),s.compareFunction&&(e.texParameteri(h,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(h,e.TEXTURE_COMPARE_FUNC,ye[s.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(s.magFilter===Tn||s.minFilter!==Bn&&s.minFilter!==En||s.type===Zt&&n.has("OES_texture_float_linear")===!1)return;if(s.anisotropy>1||i.get(s).__currentAnisotropy){const y=n.get("EXT_texture_filter_anisotropic");e.texParameterf(h,y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(s.anisotropy,a.getMaxAnisotropy())),i.get(s).__currentAnisotropy=s.anisotropy}}}function nt(h,s){let y=!1;h.__webglInit===void 0&&(h.__webglInit=!0,s.addEventListener("dispose",P));const G=s.source;let K=v.get(G);K===void 0&&(K={},v.set(G,K));const F=Y(s);if(F!==h.__cacheKey){K[F]===void 0&&(K[F]={texture:e.createTexture(),usedTimes:0},d.memory.textures++,y=!0),K[F].usedTimes++;const ve=K[h.__cacheKey];ve!==void 0&&(K[h.__cacheKey].usedTimes--,ve.usedTimes===0&&m(s)),h.__cacheKey=F,h.__webglTexture=K[F].texture}return y}function et(h,s,y){return Math.floor(Math.floor(h/y)/s)}function We(h,s,y,G){const F=h.updateRanges;if(F.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,s.width,s.height,y,G,s.data);else{F.sort((Q,oe)=>Q.start-oe.start);let ve=0;for(let Q=1;Q<F.length;Q++){const oe=F[ve],Re=F[Q],_e=oe.start+oe.count,ae=et(Re.start,s.width,4),Ue=et(oe.start,s.width,4);Re.start<=_e+1&&ae===Ue&&et(Re.start+Re.count-1,s.width,4)===ae?oe.count=Math.max(oe.count,Re.start+Re.count-oe.start):(++ve,F[ve]=Re)}F.length=ve+1;const ee=e.getParameter(e.UNPACK_ROW_LENGTH),he=e.getParameter(e.UNPACK_SKIP_PIXELS),me=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,s.width);for(let Q=0,oe=F.length;Q<oe;Q++){const Re=F[Q],_e=Math.floor(Re.start/4),ae=Math.ceil(Re.count/4),Ue=_e%s.width,A=Math.floor(_e/s.width),j=ae,te=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ue),e.pixelStorei(e.UNPACK_SKIP_ROWS,A),t.texSubImage2D(e.TEXTURE_2D,0,Ue,A,j,te,y,G,s.data)}h.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ee),e.pixelStorei(e.UNPACK_SKIP_PIXELS,he),e.pixelStorei(e.UNPACK_SKIP_ROWS,me)}}function k(h,s,y){let G=e.TEXTURE_2D;(s.isDataArrayTexture||s.isCompressedArrayTexture)&&(G=e.TEXTURE_2D_ARRAY),s.isData3DTexture&&(G=e.TEXTURE_3D);const K=nt(h,s),F=s.source;t.bindTexture(G,h.__webglTexture,e.TEXTURE0+y);const ve=i.get(F);if(F.version!==ve.__version||K===!0){t.activeTexture(e.TEXTURE0+y);const ee=rt.getPrimaries(rt.workingColorSpace),he=s.colorSpace===on?null:rt.getPrimaries(s.colorSpace),me=s.colorSpace===on||ee===he?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,s.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,s.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let Q=R(s.image,!1,a.maxTextureSize);Q=ct(s,Q);const oe=r.convert(s.format,s.colorSpace),Re=r.convert(s.type);let _e=x(s.internalFormat,oe,Re,s.colorSpace,s.isVideoTexture);Ve(G,s);let ae;const Ue=s.mipmaps,A=s.isVideoTexture!==!0,j=ve.__version===void 0||K===!0,te=F.dataReady,ce=U(s,Q);if(s.isDepthTexture)_e=M(s.format===Kn,s.type),j&&(A?t.texStorage2D(e.TEXTURE_2D,1,_e,Q.width,Q.height):t.texImage2D(e.TEXTURE_2D,0,_e,Q.width,Q.height,0,oe,Re,null));else if(s.isDataTexture)if(Ue.length>0){A&&j&&t.texStorage2D(e.TEXTURE_2D,ce,_e,Ue[0].width,Ue[0].height);for(let Z=0,z=Ue.length;Z<z;Z++)ae=Ue[Z],A?te&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,ae.width,ae.height,oe,Re,ae.data):t.texImage2D(e.TEXTURE_2D,Z,_e,ae.width,ae.height,0,oe,Re,ae.data);s.generateMipmaps=!1}else A?(j&&t.texStorage2D(e.TEXTURE_2D,ce,_e,Q.width,Q.height),te&&We(s,Q,oe,Re)):t.texImage2D(e.TEXTURE_2D,0,_e,Q.width,Q.height,0,oe,Re,Q.data);else if(s.isCompressedTexture)if(s.isCompressedArrayTexture){A&&j&&t.texStorage3D(e.TEXTURE_2D_ARRAY,ce,_e,Ue[0].width,Ue[0].height,Q.depth);for(let Z=0,z=Ue.length;Z<z;Z++)if(ae=Ue[Z],s.format!==Lt)if(oe!==null)if(A){if(te)if(s.layerUpdates.size>0){const fe=Ia(ae.width,ae.height,s.format,s.type);for(const Le of s.layerUpdates){const Ke=ae.data.subarray(Le*fe/ae.data.BYTES_PER_ELEMENT,(Le+1)*fe/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,Le,ae.width,ae.height,1,oe,Ke)}s.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,ae.width,ae.height,Q.depth,oe,ae.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Z,_e,ae.width,ae.height,Q.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else A?te&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,ae.width,ae.height,Q.depth,oe,Re,ae.data):t.texImage3D(e.TEXTURE_2D_ARRAY,Z,_e,ae.width,ae.height,Q.depth,0,oe,Re,ae.data)}else{A&&j&&t.texStorage2D(e.TEXTURE_2D,ce,_e,Ue[0].width,Ue[0].height);for(let Z=0,z=Ue.length;Z<z;Z++)ae=Ue[Z],s.format!==Lt?oe!==null?A?te&&t.compressedTexSubImage2D(e.TEXTURE_2D,Z,0,0,ae.width,ae.height,oe,ae.data):t.compressedTexImage2D(e.TEXTURE_2D,Z,_e,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):A?te&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,ae.width,ae.height,oe,Re,ae.data):t.texImage2D(e.TEXTURE_2D,Z,_e,ae.width,ae.height,0,oe,Re,ae.data)}else if(s.isDataArrayTexture)if(A){if(j&&t.texStorage3D(e.TEXTURE_2D_ARRAY,ce,_e,Q.width,Q.height,Q.depth),te)if(s.layerUpdates.size>0){const Z=Ia(Q.width,Q.height,s.format,s.type);for(const z of s.layerUpdates){const fe=Q.data.subarray(z*Z/Q.data.BYTES_PER_ELEMENT,(z+1)*Z/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,z,Q.width,Q.height,1,oe,Re,fe)}s.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,oe,Re,Q.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,_e,Q.width,Q.height,Q.depth,0,oe,Re,Q.data);else if(s.isData3DTexture)A?(j&&t.texStorage3D(e.TEXTURE_3D,ce,_e,Q.width,Q.height,Q.depth),te&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,oe,Re,Q.data)):t.texImage3D(e.TEXTURE_3D,0,_e,Q.width,Q.height,Q.depth,0,oe,Re,Q.data);else if(s.isFramebufferTexture){if(j)if(A)t.texStorage2D(e.TEXTURE_2D,ce,_e,Q.width,Q.height);else{let Z=Q.width,z=Q.height;for(let fe=0;fe<ce;fe++)t.texImage2D(e.TEXTURE_2D,fe,_e,Z,z,0,oe,Re,null),Z>>=1,z>>=1}}else if(Ue.length>0){if(A&&j){const Z=it(Ue[0]);t.texStorage2D(e.TEXTURE_2D,ce,_e,Z.width,Z.height)}for(let Z=0,z=Ue.length;Z<z;Z++)ae=Ue[Z],A?te&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,oe,Re,ae):t.texImage2D(e.TEXTURE_2D,Z,_e,oe,Re,ae);s.generateMipmaps=!1}else if(A){if(j){const Z=it(Q);t.texStorage2D(e.TEXTURE_2D,ce,_e,Z.width,Z.height)}te&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,oe,Re,Q)}else t.texImage2D(e.TEXTURE_2D,0,_e,oe,Re,Q);l(s)&&o(G),ve.__version=F.version,s.onUpdate&&s.onUpdate(s)}h.__version=s.version}function q(h,s,y){if(s.image.length!==6)return;const G=nt(h,s),K=s.source;t.bindTexture(e.TEXTURE_CUBE_MAP,h.__webglTexture,e.TEXTURE0+y);const F=i.get(K);if(K.version!==F.__version||G===!0){t.activeTexture(e.TEXTURE0+y);const ve=rt.getPrimaries(rt.workingColorSpace),ee=s.colorSpace===on?null:rt.getPrimaries(s.colorSpace),he=s.colorSpace===on||ve===ee?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,s.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,s.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const me=s.isCompressedTexture||s.image[0].isCompressedTexture,Q=s.image[0]&&s.image[0].isDataTexture,oe=[];for(let z=0;z<6;z++)!me&&!Q?oe[z]=R(s.image[z],!0,a.maxCubemapSize):oe[z]=Q?s.image[z].image:s.image[z],oe[z]=ct(s,oe[z]);const Re=oe[0],_e=r.convert(s.format,s.colorSpace),ae=r.convert(s.type),Ue=x(s.internalFormat,_e,ae,s.colorSpace),A=s.isVideoTexture!==!0,j=F.__version===void 0||G===!0,te=K.dataReady;let ce=U(s,Re);Ve(e.TEXTURE_CUBE_MAP,s);let Z;if(me){A&&j&&t.texStorage2D(e.TEXTURE_CUBE_MAP,ce,Ue,Re.width,Re.height);for(let z=0;z<6;z++){Z=oe[z].mipmaps;for(let fe=0;fe<Z.length;fe++){const Le=Z[fe];s.format!==Lt?_e!==null?A?te&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,fe,0,0,Le.width,Le.height,_e,Le.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,fe,Ue,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):A?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,fe,0,0,Le.width,Le.height,_e,ae,Le.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,fe,Ue,Le.width,Le.height,0,_e,ae,Le.data)}}}else{if(Z=s.mipmaps,A&&j){Z.length>0&&ce++;const z=it(oe[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,ce,Ue,z.width,z.height)}for(let z=0;z<6;z++)if(Q){A?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,oe[z].width,oe[z].height,_e,ae,oe[z].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,Ue,oe[z].width,oe[z].height,0,_e,ae,oe[z].data);for(let fe=0;fe<Z.length;fe++){const Ke=Z[fe].image[z].image;A?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,fe+1,0,0,Ke.width,Ke.height,_e,ae,Ke.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,fe+1,Ue,Ke.width,Ke.height,0,_e,ae,Ke.data)}}else{A?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,_e,ae,oe[z]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,Ue,_e,ae,oe[z]);for(let fe=0;fe<Z.length;fe++){const Le=Z[fe];A?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,fe+1,0,0,_e,ae,Le.image[z]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,fe+1,Ue,_e,ae,Le.image[z])}}}l(s)&&o(e.TEXTURE_CUBE_MAP),F.__version=K.version,s.onUpdate&&s.onUpdate(s)}h.__version=s.version}function le(h,s,y,G,K,F){const ve=r.convert(y.format,y.colorSpace),ee=r.convert(y.type),he=x(y.internalFormat,ve,ee,y.colorSpace),me=i.get(s),Q=i.get(y);if(Q.__renderTarget=s,!me.__hasExternalTextures){const oe=Math.max(1,s.width>>F),Re=Math.max(1,s.height>>F);K===e.TEXTURE_3D||K===e.TEXTURE_2D_ARRAY?t.texImage3D(K,F,he,oe,Re,s.depth,0,ve,ee,null):t.texImage2D(K,F,he,oe,Re,0,ve,ee,null)}t.bindFramebuffer(e.FRAMEBUFFER,h),pe(s)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,G,K,Q.__webglTexture,0,Je(s)):(K===e.TEXTURE_2D||K>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,G,K,Q.__webglTexture,F),t.bindFramebuffer(e.FRAMEBUFFER,null)}function we(h,s,y){if(e.bindRenderbuffer(e.RENDERBUFFER,h),s.depthBuffer){const G=s.depthTexture,K=G&&G.isDepthTexture?G.type:null,F=M(s.stencilBuffer,K),ve=s.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ee=Je(s);pe(s)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ee,F,s.width,s.height):y?e.renderbufferStorageMultisample(e.RENDERBUFFER,ee,F,s.width,s.height):e.renderbufferStorage(e.RENDERBUFFER,F,s.width,s.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ve,e.RENDERBUFFER,h)}else{const G=s.textures;for(let K=0;K<G.length;K++){const F=G[K],ve=r.convert(F.format,F.colorSpace),ee=r.convert(F.type),he=x(F.internalFormat,ve,ee,F.colorSpace),me=Je(s);y&&pe(s)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,me,he,s.width,s.height):pe(s)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,me,he,s.width,s.height):e.renderbufferStorage(e.RENDERBUFFER,he,s.width,s.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ee(h,s){if(s&&s.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(e.FRAMEBUFFER,h),!(s.depthTexture&&s.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=i.get(s.depthTexture);G.__renderTarget=s,(!G.__webglTexture||s.depthTexture.image.width!==s.width||s.depthTexture.image.height!==s.height)&&(s.depthTexture.image.width=s.width,s.depthTexture.image.height=s.height,s.depthTexture.needsUpdate=!0),$(s.depthTexture,0);const K=G.__webglTexture,F=Je(s);if(s.depthTexture.format===Vi)pe(s)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,K,0,F):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,K,0);else if(s.depthTexture.format===Kn)pe(s)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,K,0,F):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Be(h){const s=i.get(h),y=h.isWebGLCubeRenderTarget===!0;if(s.__boundDepthTexture!==h.depthTexture){const G=h.depthTexture;if(s.__depthDisposeCallback&&s.__depthDisposeCallback(),G){const K=()=>{delete s.__boundDepthTexture,delete s.__depthDisposeCallback,G.removeEventListener("dispose",K)};G.addEventListener("dispose",K),s.__depthDisposeCallback=K}s.__boundDepthTexture=G}if(h.depthTexture&&!s.__autoAllocateDepthBuffer){if(y)throw new Error("target.depthTexture not supported in Cube render targets");const G=h.texture.mipmaps;G&&G.length>0?Ee(s.__webglFramebuffer[0],h):Ee(s.__webglFramebuffer,h)}else if(y){s.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer[G]),s.__webglDepthbuffer[G]===void 0)s.__webglDepthbuffer[G]=e.createRenderbuffer(),we(s.__webglDepthbuffer[G],h,!1);else{const K=h.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,F=s.__webglDepthbuffer[G];e.bindRenderbuffer(e.RENDERBUFFER,F),e.framebufferRenderbuffer(e.FRAMEBUFFER,K,e.RENDERBUFFER,F)}}else{const G=h.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),s.__webglDepthbuffer===void 0)s.__webglDepthbuffer=e.createRenderbuffer(),we(s.__webglDepthbuffer,h,!1);else{const K=h.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,F=s.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,F),e.framebufferRenderbuffer(e.FRAMEBUFFER,K,e.RENDERBUFFER,F)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function lt(h,s,y){const G=i.get(h);s!==void 0&&le(G.__webglFramebuffer,h,h.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),y!==void 0&&Be(h)}function S(h){const s=h.texture,y=i.get(h),G=i.get(s);h.addEventListener("dispose",N);const K=h.textures,F=h.isWebGLCubeRenderTarget===!0,ve=K.length>1;if(ve||(G.__webglTexture===void 0&&(G.__webglTexture=e.createTexture()),G.__version=s.version,d.memory.textures++),F){y.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(s.mipmaps&&s.mipmaps.length>0){y.__webglFramebuffer[ee]=[];for(let he=0;he<s.mipmaps.length;he++)y.__webglFramebuffer[ee][he]=e.createFramebuffer()}else y.__webglFramebuffer[ee]=e.createFramebuffer()}else{if(s.mipmaps&&s.mipmaps.length>0){y.__webglFramebuffer=[];for(let ee=0;ee<s.mipmaps.length;ee++)y.__webglFramebuffer[ee]=e.createFramebuffer()}else y.__webglFramebuffer=e.createFramebuffer();if(ve)for(let ee=0,he=K.length;ee<he;ee++){const me=i.get(K[ee]);me.__webglTexture===void 0&&(me.__webglTexture=e.createTexture(),d.memory.textures++)}if(h.samples>0&&pe(h)===!1){y.__webglMultisampledFramebuffer=e.createFramebuffer(),y.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,y.__webglMultisampledFramebuffer);for(let ee=0;ee<K.length;ee++){const he=K[ee];y.__webglColorRenderbuffer[ee]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,y.__webglColorRenderbuffer[ee]);const me=r.convert(he.format,he.colorSpace),Q=r.convert(he.type),oe=x(he.internalFormat,me,Q,he.colorSpace,h.isXRRenderTarget===!0),Re=Je(h);e.renderbufferStorageMultisample(e.RENDERBUFFER,Re,oe,h.width,h.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ee,e.RENDERBUFFER,y.__webglColorRenderbuffer[ee])}e.bindRenderbuffer(e.RENDERBUFFER,null),h.depthBuffer&&(y.__webglDepthRenderbuffer=e.createRenderbuffer(),we(y.__webglDepthRenderbuffer,h,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(F){t.bindTexture(e.TEXTURE_CUBE_MAP,G.__webglTexture),Ve(e.TEXTURE_CUBE_MAP,s);for(let ee=0;ee<6;ee++)if(s.mipmaps&&s.mipmaps.length>0)for(let he=0;he<s.mipmaps.length;he++)le(y.__webglFramebuffer[ee][he],h,s,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he);else le(y.__webglFramebuffer[ee],h,s,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);l(s)&&o(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ee=0,he=K.length;ee<he;ee++){const me=K[ee],Q=i.get(me);let oe=e.TEXTURE_2D;(h.isWebGL3DRenderTarget||h.isWebGLArrayRenderTarget)&&(oe=h.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(oe,Q.__webglTexture),Ve(oe,me),le(y.__webglFramebuffer,h,me,e.COLOR_ATTACHMENT0+ee,oe,0),l(me)&&o(oe)}t.unbindTexture()}else{let ee=e.TEXTURE_2D;if((h.isWebGL3DRenderTarget||h.isWebGLArrayRenderTarget)&&(ee=h.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(ee,G.__webglTexture),Ve(ee,s),s.mipmaps&&s.mipmaps.length>0)for(let he=0;he<s.mipmaps.length;he++)le(y.__webglFramebuffer[he],h,s,e.COLOR_ATTACHMENT0,ee,he);else le(y.__webglFramebuffer,h,s,e.COLOR_ATTACHMENT0,ee,0);l(s)&&o(ee),t.unbindTexture()}h.depthBuffer&&Be(h)}function Ze(h){const s=h.textures;for(let y=0,G=s.length;y<G;y++){const K=s[y];if(l(K)){const F=w(h),ve=i.get(K).__webglTexture;t.bindTexture(F,ve),o(F),t.unbindTexture()}}}const De=[],be=[];function ue(h){if(h.samples>0){if(pe(h)===!1){const s=h.textures,y=h.width,G=h.height;let K=e.COLOR_BUFFER_BIT;const F=h.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ve=i.get(h),ee=s.length>1;if(ee)for(let me=0;me<s.length;me++)t.bindFramebuffer(e.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,ve.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const he=h.texture.mipmaps;he&&he.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let me=0;me<s.length;me++){if(h.resolveDepthBuffer&&(h.depthBuffer&&(K|=e.DEPTH_BUFFER_BIT),h.stencilBuffer&&h.resolveStencilBuffer&&(K|=e.STENCIL_BUFFER_BIT)),ee){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ve.__webglColorRenderbuffer[me]);const Q=i.get(s[me]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Q,0)}e.blitFramebuffer(0,0,y,G,0,0,y,G,K,e.NEAREST),g===!0&&(De.length=0,be.length=0,De.push(e.COLOR_ATTACHMENT0+me),h.depthBuffer&&h.resolveDepthBuffer===!1&&(De.push(F),be.push(F),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,be)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,De))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ee)for(let me=0;me<s.length;me++){t.bindFramebuffer(e.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.RENDERBUFFER,ve.__webglColorRenderbuffer[me]);const Q=i.get(s[me]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,ve.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.TEXTURE_2D,Q,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(h.depthBuffer&&h.resolveDepthBuffer===!1&&g){const s=h.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[s])}}}function Je(h){return Math.min(a.maxSamples,h.samples)}function pe(h){const s=i.get(h);return h.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&s.__useRenderToTexture!==!1}function Ie(h){const s=d.render.frame;E.get(h)!==s&&(E.set(h,s),h.update())}function ct(h,s){const y=h.colorSpace,G=h.format,K=h.type;return h.isCompressedTexture===!0||h.isVideoTexture===!0||y!==jn&&y!==on&&(rt.getTransfer(y)===$e?(G!==Lt||K!==en)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",y)),s}function it(h){return typeof HTMLImageElement<"u"&&h instanceof HTMLImageElement?(_.width=h.naturalWidth||h.width,_.height=h.naturalHeight||h.height):typeof VideoFrame<"u"&&h instanceof VideoFrame?(_.width=h.displayWidth,_.height=h.displayHeight):(_.width=h.width,_.height=h.height),_}this.allocateTextureUnit=X,this.resetTextureUnits=B,this.setTexture2D=$,this.setTexture2DArray=W,this.setTexture3D=ne,this.setTextureCube=H,this.rebindTextures=lt,this.setupRenderTarget=S,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=le,this.useMultisampledRTT=pe}function iu(e,n){function t(i,a=on){let r;const d=rt.getTransfer(a);if(i===en)return e.UNSIGNED_BYTE;if(i===Sr)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Mr)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Fo)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Bo)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Go)return e.BYTE;if(i===Ho)return e.SHORT;if(i===Zn)return e.UNSIGNED_SHORT;if(i===Ar)return e.INT;if(i===Ln)return e.UNSIGNED_INT;if(i===Zt)return e.FLOAT;if(i===Qn)return e.HALF_FLOAT;if(i===Vo)return e.ALPHA;if(i===ko)return e.RGB;if(i===Lt)return e.RGBA;if(i===Vi)return e.DEPTH_COMPONENT;if(i===Kn)return e.DEPTH_STENCIL;if(i===zo)return e.RED;if(i===Rr)return e.RED_INTEGER;if(i===Wo)return e.RG;if(i===br)return e.RG_INTEGER;if(i===Cr)return e.RGBA_INTEGER;if(i===li||i===di||i===fi||i===ui)if(d===$e)if(r=n.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===li)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===di)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fi)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ui)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=n.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===li)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===di)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fi)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ui)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ta||i===na||i===ia||i===aa)if(r=n.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ta)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===na)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ia)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===aa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ra||i===oa||i===sa)if(r=n.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ra||i===oa)return d===$e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===sa)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ca||i===la||i===da||i===fa||i===ua||i===pa||i===ha||i===ma||i===_a||i===ga||i===va||i===Ea||i===Sa||i===Ma)if(r=n.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ca)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===la)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===da)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fa)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ua)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pa)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ha)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ma)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_a)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ga)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===va)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ea)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sa)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ma)return d===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ta||i===xa||i===Aa)if(r=n.get("EXT_texture_compression_bptc"),r!==null){if(i===Ta)return d===$e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Aa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ra||i===ba||i===Ca||i===wa)if(r=n.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ra)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ba)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ca)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Pn?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const au=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ru=`
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

}`;class ou{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new Tr(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new tn({vertexShader:au,fragmentShader:ru,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new at(new xr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class su extends to{constructor(n,t){super();const i=this;let a=null,r=1,d=null,c="local-floor",g=1,_=null,E=null,p=null,v=null,T=null,L=null;const R=typeof XRWebGLBinding<"u",l=new ou,o={},w=t.getContextAttributes();let x=null,M=null;const U=[],P=[],N=new ft;let V=null;const m=new Mn;m.viewport=new mt;const u=new Mn;u.viewport=new mt;const D=[m,u],B=new no;let X=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let q=U[k];return q===void 0&&(q=new si,U[k]=q),q.getTargetRaySpace()},this.getControllerGrip=function(k){let q=U[k];return q===void 0&&(q=new si,U[k]=q),q.getGripSpace()},this.getHand=function(k){let q=U[k];return q===void 0&&(q=new si,U[k]=q),q.getHandSpace()};function $(k){const q=P.indexOf(k.inputSource);if(q===-1)return;const le=U[q];le!==void 0&&(le.update(k.inputSource,k.frame,_||d),le.dispatchEvent({type:k.type,data:k.inputSource}))}function W(){a.removeEventListener("select",$),a.removeEventListener("selectstart",$),a.removeEventListener("selectend",$),a.removeEventListener("squeeze",$),a.removeEventListener("squeezestart",$),a.removeEventListener("squeezeend",$),a.removeEventListener("end",W),a.removeEventListener("inputsourceschange",ne);for(let k=0;k<U.length;k++){const q=P[k];q!==null&&(P[k]=null,U[k].disconnect(q))}X=null,Y=null,l.reset();for(const k in o)delete o[k];n.setRenderTarget(x),T=null,v=null,p=null,a=null,M=null,We.stop(),i.isPresenting=!1,n.setPixelRatio(V),n.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){c=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return _||d},this.setReferenceSpace=function(k){_=k},this.getBaseLayer=function(){return v!==null?v:T},this.getBinding=function(){return p===null&&R&&(p=new XRWebGLBinding(a,t)),p},this.getFrame=function(){return L},this.getSession=function(){return a},this.setSession=async function(k){if(a=k,a!==null){if(x=n.getRenderTarget(),a.addEventListener("select",$),a.addEventListener("selectstart",$),a.addEventListener("selectend",$),a.addEventListener("squeeze",$),a.addEventListener("squeezestart",$),a.addEventListener("squeezeend",$),a.addEventListener("end",W),a.addEventListener("inputsourceschange",ne),w.xrCompatible!==!0&&await t.makeXRCompatible(),V=n.getPixelRatio(),n.getSize(N),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,we=null,Ee=null;w.depth&&(Ee=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=w.stencil?Kn:Vi,we=w.stencil?Pn:Ln);const Be={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};p=this.getBinding(),v=p.createProjectionLayer(Be),a.updateRenderState({layers:[v]}),n.setPixelRatio(1),n.setSize(v.textureWidth,v.textureHeight,!1),M=new un(v.textureWidth,v.textureHeight,{format:Lt,type:en,depthTexture:new gr(v.textureWidth,v.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:w.stencil,colorSpace:n.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const le={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};T=new XRWebGLLayer(a,t,le),a.updateRenderState({baseLayer:T}),n.setPixelRatio(1),n.setSize(T.framebufferWidth,T.framebufferHeight,!1),M=new un(T.framebufferWidth,T.framebufferHeight,{format:Lt,type:en,colorSpace:n.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:T.ignoreDepthValues===!1,resolveStencilBuffer:T.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(g),_=null,d=await a.requestReferenceSpace(c),We.setContext(a),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return l.getDepthTexture()};function ne(k){for(let q=0;q<k.removed.length;q++){const le=k.removed[q],we=P.indexOf(le);we>=0&&(P[we]=null,U[we].disconnect(le))}for(let q=0;q<k.added.length;q++){const le=k.added[q];let we=P.indexOf(le);if(we===-1){for(let Be=0;Be<U.length;Be++)if(Be>=P.length){P.push(le),we=Be;break}else if(P[Be]===null){P[Be]=le,we=Be;break}if(we===-1)break}const Ee=U[we];Ee&&Ee.connect(le)}}const H=new Pe,ge=new Pe;function xe(k,q,le){H.setFromMatrixPosition(q.matrixWorld),ge.setFromMatrixPosition(le.matrixWorld);const we=H.distanceTo(ge),Ee=q.projectionMatrix.elements,Be=le.projectionMatrix.elements,lt=Ee[14]/(Ee[10]-1),S=Ee[14]/(Ee[10]+1),Ze=(Ee[9]+1)/Ee[5],De=(Ee[9]-1)/Ee[5],be=(Ee[8]-1)/Ee[0],ue=(Be[8]+1)/Be[0],Je=lt*be,pe=lt*ue,Ie=we/(-be+ue),ct=Ie*-be;if(q.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(ct),k.translateZ(Ie),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),Ee[10]===-1)k.projectionMatrix.copy(q.projectionMatrix),k.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const it=lt+Ie,h=S+Ie,s=Je-ct,y=pe+(we-ct),G=Ze*S/h*it,K=De*S/h*it;k.projectionMatrix.makePerspective(s,y,G,K,it,h),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function ye(k,q){q===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(q.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(a===null)return;let q=k.near,le=k.far;l.texture!==null&&(l.depthNear>0&&(q=l.depthNear),l.depthFar>0&&(le=l.depthFar)),B.near=u.near=m.near=q,B.far=u.far=m.far=le,(X!==B.near||Y!==B.far)&&(a.updateRenderState({depthNear:B.near,depthFar:B.far}),X=B.near,Y=B.far),B.layers.mask=k.layers.mask|6,m.layers.mask=B.layers.mask&3,u.layers.mask=B.layers.mask&5;const we=k.parent,Ee=B.cameras;ye(B,we);for(let Be=0;Be<Ee.length;Be++)ye(Ee[Be],we);Ee.length===2?xe(B,m,u):B.projectionMatrix.copy(m.projectionMatrix),Ve(k,B,we)};function Ve(k,q,le){le===null?k.matrix.copy(q.matrixWorld):(k.matrix.copy(le.matrixWorld),k.matrix.invert(),k.matrix.multiply(q.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(q.projectionMatrix),k.projectionMatrixInverse.copy(q.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=io*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(v===null&&T===null))return g},this.setFoveation=function(k){g=k,v!==null&&(v.fixedFoveation=k),T!==null&&T.fixedFoveation!==void 0&&(T.fixedFoveation=k)},this.hasDepthSensing=function(){return l.texture!==null},this.getDepthSensingMesh=function(){return l.getMesh(B)},this.getCameraTexture=function(k){return o[k]};let nt=null;function et(k,q){if(E=q.getViewerPose(_||d),L=q,E!==null){const le=E.views;T!==null&&(n.setRenderTargetFramebuffer(M,T.framebuffer),n.setRenderTarget(M));let we=!1;le.length!==B.cameras.length&&(B.cameras.length=0,we=!0);for(let S=0;S<le.length;S++){const Ze=le[S];let De=null;if(T!==null)De=T.getViewport(Ze);else{const ue=p.getViewSubImage(v,Ze);De=ue.viewport,S===0&&(n.setRenderTargetTextures(M,ue.colorTexture,ue.depthStencilTexture),n.setRenderTarget(M))}let be=D[S];be===void 0&&(be=new Mn,be.layers.enable(S),be.viewport=new mt,D[S]=be),be.matrix.fromArray(Ze.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(Ze.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(De.x,De.y,De.width,De.height),S===0&&(B.matrix.copy(be.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),we===!0&&B.cameras.push(be)}const Ee=a.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&R){p=i.getBinding();const S=p.getDepthInformation(le[0]);S&&S.isValid&&S.texture&&l.init(S,a.renderState)}if(Ee&&Ee.includes("camera-access")&&R){n.state.unbindTexture(),p=i.getBinding();for(let S=0;S<le.length;S++){const Ze=le[S].camera;if(Ze){let De=o[Ze];De||(De=new Tr,o[Ze]=De);const be=p.getCameraImage(Ze);De.sourceTexture=be}}}}for(let le=0;le<U.length;le++){const we=P[le],Ee=U[le];we!==null&&Ee!==void 0&&Ee.update(we,q,_||d)}nt&&nt(k,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),L=null}const We=new yr;We.setAnimationLoop(et),this.setAnimationLoop=function(k){nt=k},this.dispose=function(){}}}const Yt=new Lr,cu=new fn;function lu(e,n){function t(l,o){l.matrixAutoUpdate===!0&&l.updateMatrix(),o.value.copy(l.matrix)}function i(l,o){o.color.getRGB(l.fogColor.value,Pr(e)),o.isFog?(l.fogNear.value=o.near,l.fogFar.value=o.far):o.isFogExp2&&(l.fogDensity.value=o.density)}function a(l,o,w,x,M){o.isMeshBasicMaterial||o.isMeshLambertMaterial?r(l,o):o.isMeshToonMaterial?(r(l,o),p(l,o)):o.isMeshPhongMaterial?(r(l,o),E(l,o)):o.isMeshStandardMaterial?(r(l,o),v(l,o),o.isMeshPhysicalMaterial&&T(l,o,M)):o.isMeshMatcapMaterial?(r(l,o),L(l,o)):o.isMeshDepthMaterial?r(l,o):o.isMeshDistanceMaterial?(r(l,o),R(l,o)):o.isMeshNormalMaterial?r(l,o):o.isLineBasicMaterial?(d(l,o),o.isLineDashedMaterial&&c(l,o)):o.isPointsMaterial?g(l,o,w,x):o.isSpriteMaterial?_(l,o):o.isShadowMaterial?(l.color.value.copy(o.color),l.opacity.value=o.opacity):o.isShaderMaterial&&(o.uniformsNeedUpdate=!1)}function r(l,o){l.opacity.value=o.opacity,o.color&&l.diffuse.value.copy(o.color),o.emissive&&l.emissive.value.copy(o.emissive).multiplyScalar(o.emissiveIntensity),o.map&&(l.map.value=o.map,t(o.map,l.mapTransform)),o.alphaMap&&(l.alphaMap.value=o.alphaMap,t(o.alphaMap,l.alphaMapTransform)),o.bumpMap&&(l.bumpMap.value=o.bumpMap,t(o.bumpMap,l.bumpMapTransform),l.bumpScale.value=o.bumpScale,o.side===Mt&&(l.bumpScale.value*=-1)),o.normalMap&&(l.normalMap.value=o.normalMap,t(o.normalMap,l.normalMapTransform),l.normalScale.value.copy(o.normalScale),o.side===Mt&&l.normalScale.value.negate()),o.displacementMap&&(l.displacementMap.value=o.displacementMap,t(o.displacementMap,l.displacementMapTransform),l.displacementScale.value=o.displacementScale,l.displacementBias.value=o.displacementBias),o.emissiveMap&&(l.emissiveMap.value=o.emissiveMap,t(o.emissiveMap,l.emissiveMapTransform)),o.specularMap&&(l.specularMap.value=o.specularMap,t(o.specularMap,l.specularMapTransform)),o.alphaTest>0&&(l.alphaTest.value=o.alphaTest);const w=n.get(o),x=w.envMap,M=w.envMapRotation;x&&(l.envMap.value=x,Yt.copy(M),Yt.x*=-1,Yt.y*=-1,Yt.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Yt.y*=-1,Yt.z*=-1),l.envMapRotation.value.setFromMatrix4(cu.makeRotationFromEuler(Yt)),l.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,l.reflectivity.value=o.reflectivity,l.ior.value=o.ior,l.refractionRatio.value=o.refractionRatio),o.lightMap&&(l.lightMap.value=o.lightMap,l.lightMapIntensity.value=o.lightMapIntensity,t(o.lightMap,l.lightMapTransform)),o.aoMap&&(l.aoMap.value=o.aoMap,l.aoMapIntensity.value=o.aoMapIntensity,t(o.aoMap,l.aoMapTransform))}function d(l,o){l.diffuse.value.copy(o.color),l.opacity.value=o.opacity,o.map&&(l.map.value=o.map,t(o.map,l.mapTransform))}function c(l,o){l.dashSize.value=o.dashSize,l.totalSize.value=o.dashSize+o.gapSize,l.scale.value=o.scale}function g(l,o,w,x){l.diffuse.value.copy(o.color),l.opacity.value=o.opacity,l.size.value=o.size*w,l.scale.value=x*.5,o.map&&(l.map.value=o.map,t(o.map,l.uvTransform)),o.alphaMap&&(l.alphaMap.value=o.alphaMap,t(o.alphaMap,l.alphaMapTransform)),o.alphaTest>0&&(l.alphaTest.value=o.alphaTest)}function _(l,o){l.diffuse.value.copy(o.color),l.opacity.value=o.opacity,l.rotation.value=o.rotation,o.map&&(l.map.value=o.map,t(o.map,l.mapTransform)),o.alphaMap&&(l.alphaMap.value=o.alphaMap,t(o.alphaMap,l.alphaMapTransform)),o.alphaTest>0&&(l.alphaTest.value=o.alphaTest)}function E(l,o){l.specular.value.copy(o.specular),l.shininess.value=Math.max(o.shininess,1e-4)}function p(l,o){o.gradientMap&&(l.gradientMap.value=o.gradientMap)}function v(l,o){l.metalness.value=o.metalness,o.metalnessMap&&(l.metalnessMap.value=o.metalnessMap,t(o.metalnessMap,l.metalnessMapTransform)),l.roughness.value=o.roughness,o.roughnessMap&&(l.roughnessMap.value=o.roughnessMap,t(o.roughnessMap,l.roughnessMapTransform)),o.envMap&&(l.envMapIntensity.value=o.envMapIntensity)}function T(l,o,w){l.ior.value=o.ior,o.sheen>0&&(l.sheenColor.value.copy(o.sheenColor).multiplyScalar(o.sheen),l.sheenRoughness.value=o.sheenRoughness,o.sheenColorMap&&(l.sheenColorMap.value=o.sheenColorMap,t(o.sheenColorMap,l.sheenColorMapTransform)),o.sheenRoughnessMap&&(l.sheenRoughnessMap.value=o.sheenRoughnessMap,t(o.sheenRoughnessMap,l.sheenRoughnessMapTransform))),o.clearcoat>0&&(l.clearcoat.value=o.clearcoat,l.clearcoatRoughness.value=o.clearcoatRoughness,o.clearcoatMap&&(l.clearcoatMap.value=o.clearcoatMap,t(o.clearcoatMap,l.clearcoatMapTransform)),o.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=o.clearcoatRoughnessMap,t(o.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),o.clearcoatNormalMap&&(l.clearcoatNormalMap.value=o.clearcoatNormalMap,t(o.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(o.clearcoatNormalScale),o.side===Mt&&l.clearcoatNormalScale.value.negate())),o.dispersion>0&&(l.dispersion.value=o.dispersion),o.iridescence>0&&(l.iridescence.value=o.iridescence,l.iridescenceIOR.value=o.iridescenceIOR,l.iridescenceThicknessMinimum.value=o.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=o.iridescenceThicknessRange[1],o.iridescenceMap&&(l.iridescenceMap.value=o.iridescenceMap,t(o.iridescenceMap,l.iridescenceMapTransform)),o.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=o.iridescenceThicknessMap,t(o.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),o.transmission>0&&(l.transmission.value=o.transmission,l.transmissionSamplerMap.value=w.texture,l.transmissionSamplerSize.value.set(w.width,w.height),o.transmissionMap&&(l.transmissionMap.value=o.transmissionMap,t(o.transmissionMap,l.transmissionMapTransform)),l.thickness.value=o.thickness,o.thicknessMap&&(l.thicknessMap.value=o.thicknessMap,t(o.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=o.attenuationDistance,l.attenuationColor.value.copy(o.attenuationColor)),o.anisotropy>0&&(l.anisotropyVector.value.set(o.anisotropy*Math.cos(o.anisotropyRotation),o.anisotropy*Math.sin(o.anisotropyRotation)),o.anisotropyMap&&(l.anisotropyMap.value=o.anisotropyMap,t(o.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=o.specularIntensity,l.specularColor.value.copy(o.specularColor),o.specularColorMap&&(l.specularColorMap.value=o.specularColorMap,t(o.specularColorMap,l.specularColorMapTransform)),o.specularIntensityMap&&(l.specularIntensityMap.value=o.specularIntensityMap,t(o.specularIntensityMap,l.specularIntensityMapTransform))}function L(l,o){o.matcap&&(l.matcap.value=o.matcap)}function R(l,o){const w=n.get(o).light;l.referencePosition.value.setFromMatrixPosition(w.matrixWorld),l.nearDistance.value=w.shadow.camera.near,l.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function du(e,n,t,i){let a={},r={},d=[];const c=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function g(w,x){const M=x.program;i.uniformBlockBinding(w,M)}function _(w,x){let M=a[w.id];M===void 0&&(L(w),M=E(w),a[w.id]=M,w.addEventListener("dispose",l));const U=x.program;i.updateUBOMapping(w,U);const P=n.render.frame;r[w.id]!==P&&(v(w),r[w.id]=P)}function E(w){const x=p();w.__bindingPointIndex=x;const M=e.createBuffer(),U=w.__size,P=w.usage;return e.bindBuffer(e.UNIFORM_BUFFER,M),e.bufferData(e.UNIFORM_BUFFER,U,P),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,x,M),M}function p(){for(let w=0;w<c;w++)if(d.indexOf(w)===-1)return d.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(w){const x=a[w.id],M=w.uniforms,U=w.__cache;e.bindBuffer(e.UNIFORM_BUFFER,x);for(let P=0,N=M.length;P<N;P++){const V=Array.isArray(M[P])?M[P]:[M[P]];for(let m=0,u=V.length;m<u;m++){const D=V[m];if(T(D,P,m,U)===!0){const B=D.__offset,X=Array.isArray(D.value)?D.value:[D.value];let Y=0;for(let $=0;$<X.length;$++){const W=X[$],ne=R(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,e.bufferSubData(e.UNIFORM_BUFFER,B+Y,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,Y),Y+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,B,D.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function T(w,x,M,U){const P=w.value,N=x+"_"+M;if(U[N]===void 0)return typeof P=="number"||typeof P=="boolean"?U[N]=P:U[N]=P.clone(),!0;{const V=U[N];if(typeof P=="number"||typeof P=="boolean"){if(V!==P)return U[N]=P,!0}else if(V.equals(P)===!1)return V.copy(P),!0}return!1}function L(w){const x=w.uniforms;let M=0;const U=16;for(let N=0,V=x.length;N<V;N++){const m=Array.isArray(x[N])?x[N]:[x[N]];for(let u=0,D=m.length;u<D;u++){const B=m[u],X=Array.isArray(B.value)?B.value:[B.value];for(let Y=0,$=X.length;Y<$;Y++){const W=X[Y],ne=R(W),H=M%U,ge=H%ne.boundary,xe=H+ge;M+=ge,xe!==0&&U-xe<ne.storage&&(M+=U-xe),B.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=ne.storage}}}const P=M%U;return P>0&&(M+=U-P),w.__size=M,w.__cache={},this}function R(w){const x={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(x.boundary=4,x.storage=4):w.isVector2?(x.boundary=8,x.storage=8):w.isVector3||w.isColor?(x.boundary=16,x.storage=12):w.isVector4?(x.boundary=16,x.storage=16):w.isMatrix3?(x.boundary=48,x.storage=48):w.isMatrix4?(x.boundary=64,x.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),x}function l(w){const x=w.target;x.removeEventListener("dispose",l);const M=d.indexOf(x.__bindingPointIndex);d.splice(M,1),e.deleteBuffer(a[x.id]),delete a[x.id],delete r[x.id]}function o(){for(const w in a)e.deleteBuffer(a[w]);d=[],a={},r={}}return{bind:g,update:_,dispose:o}}class fu{constructor(n={}){const{canvas:t=Jr(),context:i=null,depth:a=!0,stencil:r=!1,alpha:d=!1,antialias:c=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:_=!1,powerPreference:E="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:v=!1}=n;this.isWebGLRenderer=!0;let T;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=i.getContextAttributes().alpha}else T=d;const L=new Uint32Array(4),R=new Int32Array(4);let l=null,o=null;const w=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let U=!1;this._outputColorSpace=Qr;let P=0,N=0,V=null,m=-1,u=null;const D=new mt,B=new mt;let X=null;const Y=new Ye(0);let $=0,W=t.width,ne=t.height,H=1,ge=null,xe=null;const ye=new mt(0,0,W,ne),Ve=new mt(0,0,W,ne);let nt=!1;const et=new _r;let We=!1,k=!1;const q=new fn,le=new Pe,we=new mt,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function lt(){return V===null?H:1}let S=i;function Ze(f,b){return t.getContext(f,b)}try{const f={alpha:!0,depth:a,stencil:r,antialias:c,premultipliedAlpha:g,preserveDrawingBuffer:_,powerPreference:E,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jr}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",Z,!1),S===null){const b="webgl2";if(S=Ze(b,f),S===null)throw Ze(b)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(f){throw console.error("THREE.WebGLRenderer: "+f.message),f}let De,be,ue,Je,pe,Ie,ct,it,h,s,y,G,K,F,ve,ee,he,me,Q,oe,Re,_e,ae,Ue;function A(){De=new Sd(S),De.init(),_e=new iu(S,De),be=new pd(S,De,n,_e),ue=new tu(S,De),be.reversedDepthBuffer&&v&&ue.buffers.depth.setReversed(!0),Je=new xd(S),pe=new kf,Ie=new nu(S,De,ue,pe,be,_e,Je),ct=new md(M),it=new Ed(M),h=new Ps(S),ae=new fd(S,h),s=new Md(S,h,Je,ae),y=new Rd(S,s,h,Je),Q=new Ad(S,be,Ie),ee=new hd(pe),G=new Vf(M,ct,it,De,be,ae,ee),K=new lu(M,pe),F=new Wf,ve=new Zf(De),me=new dd(M,ct,it,ue,y,T,g),he=new jf(M,y,be),Ue=new du(S,Je,be,ue),oe=new ud(S,De,Je),Re=new Td(S,De,Je),Je.programs=G.programs,M.capabilities=be,M.extensions=De,M.properties=pe,M.renderLists=F,M.shadowMap=he,M.state=ue,M.info=Je}A();const j=new su(M,S);this.xr=j,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const f=De.get("WEBGL_lose_context");f&&f.loseContext()},this.forceContextRestore=function(){const f=De.get("WEBGL_lose_context");f&&f.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(f){f!==void 0&&(H=f,this.setSize(W,ne,!1))},this.getSize=function(f){return f.set(W,ne)},this.setSize=function(f,b,I=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=f,ne=b,t.width=Math.floor(f*H),t.height=Math.floor(b*H),I===!0&&(t.style.width=f+"px",t.style.height=b+"px"),this.setViewport(0,0,f,b)},this.getDrawingBufferSize=function(f){return f.set(W*H,ne*H).floor()},this.setDrawingBufferSize=function(f,b,I){W=f,ne=b,H=I,t.width=Math.floor(f*I),t.height=Math.floor(b*I),this.setViewport(0,0,f,b)},this.getCurrentViewport=function(f){return f.copy(D)},this.getViewport=function(f){return f.copy(ye)},this.setViewport=function(f,b,I,O){f.isVector4?ye.set(f.x,f.y,f.z,f.w):ye.set(f,b,I,O),ue.viewport(D.copy(ye).multiplyScalar(H).round())},this.getScissor=function(f){return f.copy(Ve)},this.setScissor=function(f,b,I,O){f.isVector4?Ve.set(f.x,f.y,f.z,f.w):Ve.set(f,b,I,O),ue.scissor(B.copy(Ve).multiplyScalar(H).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(f){ue.setScissorTest(nt=f)},this.setOpaqueSort=function(f){ge=f},this.setTransparentSort=function(f){xe=f},this.getClearColor=function(f){return f.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(f=!0,b=!0,I=!0){let O=0;if(f){let C=!1;if(V!==null){const J=V.texture.format;C=J===Cr||J===br||J===Rr}if(C){const J=V.texture.type,re=J===en||J===Ln||J===Zn||J===Pn||J===Sr||J===Mr,de=me.getClearColor(),se=me.getClearAlpha(),Ae=de.r,Ce=de.g,Se=de.b;re?(L[0]=Ae,L[1]=Ce,L[2]=Se,L[3]=se,S.clearBufferuiv(S.COLOR,0,L)):(R[0]=Ae,R[1]=Ce,R[2]=Se,R[3]=se,S.clearBufferiv(S.COLOR,0,R))}else O|=S.COLOR_BUFFER_BIT}b&&(O|=S.DEPTH_BUFFER_BIT),I&&(O|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),me.dispose(),F.dispose(),ve.dispose(),pe.dispose(),ct.dispose(),it.dispose(),y.dispose(),ae.dispose(),Ue.dispose(),G.dispose(),j.dispose(),j.removeEventListener("sessionstart",xt),j.removeEventListener("sessionend",qi),zt.stop()};function te(f){f.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const f=Je.autoReset,b=he.enabled,I=he.autoUpdate,O=he.needsUpdate,C=he.type;A(),Je.autoReset=f,he.enabled=b,he.autoUpdate=I,he.needsUpdate=O,he.type=C}function Z(f){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",f.statusMessage)}function z(f){const b=f.target;b.removeEventListener("dispose",z),fe(b)}function fe(f){Le(f),pe.remove(f)}function Le(f){const b=pe.get(f).programs;b!==void 0&&(b.forEach(function(I){G.releaseProgram(I)}),f.isShaderMaterial&&G.releaseShaderCache(f))}this.renderBufferDirect=function(f,b,I,O,C,J){b===null&&(b=Ee);const re=C.isMesh&&C.matrixWorld.determinant()<0,de=Xr(f,b,I,O,C);ue.setMaterial(O,re);let se=I.index,Ae=1;if(O.wireframe===!0){if(se=s.getWireframeAttribute(I),se===void 0)return;Ae=2}const Ce=I.drawRange,Se=I.attributes.position;let Oe=Ce.start*Ae,ze=(Ce.start+Ce.count)*Ae;J!==null&&(Oe=Math.max(Oe,J.start*Ae),ze=Math.min(ze,(J.start+J.count)*Ae)),se!==null?(Oe=Math.max(Oe,0),ze=Math.min(ze,se.count)):Se!=null&&(Oe=Math.max(Oe,0),ze=Math.min(ze,Se.count));const tt=ze-Oe;if(tt<0||tt===1/0)return;ae.setup(C,O,de,I,se);let qe,Xe=oe;if(se!==null&&(qe=h.get(se),Xe=Re,Xe.setIndex(qe)),C.isMesh)O.wireframe===!0?(ue.setLineWidth(O.wireframeLinewidth*lt()),Xe.setMode(S.LINES)):Xe.setMode(S.TRIANGLES);else if(C.isLine){let Te=O.linewidth;Te===void 0&&(Te=1),ue.setLineWidth(Te*lt()),C.isLineSegments?Xe.setMode(S.LINES):C.isLineLoop?Xe.setMode(S.LINE_LOOP):Xe.setMode(S.LINE_STRIP)}else C.isPoints?Xe.setMode(S.POINTS):C.isSprite&&Xe.setMode(S.TRIANGLES);if(C.isBatchedMesh)if(C._multiDrawInstances!==null)Ri("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Xe.renderMultiDrawInstances(C._multiDrawStarts,C._multiDrawCounts,C._multiDrawCount,C._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))Xe.renderMultiDraw(C._multiDrawStarts,C._multiDrawCounts,C._multiDrawCount);else{const Te=C._multiDrawStarts,Qe=C._multiDrawCounts,Ge=C._multiDrawCount,_t=se?h.get(se).bytesPerElement:1,an=pe.get(O).currentProgram.getUniforms();for(let gt=0;gt<Ge;gt++)an.setValue(S,"_gl_DrawID",gt),Xe.render(Te[gt]/_t,Qe[gt])}else if(C.isInstancedMesh)Xe.renderInstances(Oe,tt,C.count);else if(I.isInstancedBufferGeometry){const Te=I._maxInstanceCount!==void 0?I._maxInstanceCount:1/0,Qe=Math.min(I.instanceCount,Te);Xe.renderInstances(Oe,tt,Qe)}else Xe.render(Oe,tt)};function Ke(f,b,I){f.transparent===!0&&f.side===Pt&&f.forceSinglePass===!1?(f.side=Mt,f.needsUpdate=!0,Fn(f,b,I),f.side=wn,f.needsUpdate=!0,Fn(f,b,I),f.side=Pt):Fn(f,b,I)}this.compile=function(f,b,I=null){I===null&&(I=f),o=ve.get(I),o.init(b),x.push(o),I.traverseVisible(function(C){C.isLight&&C.layers.test(b.layers)&&(o.pushLight(C),C.castShadow&&o.pushShadow(C))}),f!==I&&f.traverseVisible(function(C){C.isLight&&C.layers.test(b.layers)&&(o.pushLight(C),C.castShadow&&o.pushShadow(C))}),o.setupLights();const O=new Set;return f.traverse(function(C){if(!(C.isMesh||C.isPoints||C.isLine||C.isSprite))return;const J=C.material;if(J)if(Array.isArray(J))for(let re=0;re<J.length;re++){const de=J[re];Ke(de,I,C),O.add(de)}else Ke(J,I,C),O.add(J)}),o=x.pop(),O},this.compileAsync=function(f,b,I=null){const O=this.compile(f,b,I);return new Promise(C=>{function J(){if(O.forEach(function(re){pe.get(re).currentProgram.isReady()&&O.delete(re)}),O.size===0){C(f);return}setTimeout(J,10)}De.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let ke=null;function Ct(f){ke&&ke(f)}function xt(){zt.stop()}function qi(){zt.start()}const zt=new yr;zt.setAnimationLoop(Ct),typeof self<"u"&&zt.setContext(self),this.setAnimationLoop=function(f){ke=f,j.setAnimationLoop(f),f===null?zt.stop():zt.start()},j.addEventListener("sessionstart",xt),j.addEventListener("sessionend",qi),this.render=function(f,b){if(b!==void 0&&b.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld(),b.parent===null&&b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(b),b=j.getCamera()),f.isScene===!0&&f.onBeforeRender(M,f,b,V),o=ve.get(f,x.length),o.init(b),x.push(o),q.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse),et.setFromProjectionMatrix(q,ea,b.reversedDepth),k=this.localClippingEnabled,We=ee.init(this.clippingPlanes,k),l=F.get(f,w.length),l.init(),w.push(l),j.enabled===!0&&j.isPresenting===!0){const J=M.xr.getDepthSensingMesh();J!==null&&ri(J,b,-1/0,M.sortObjects)}ri(f,b,0,M.sortObjects),l.finish(),M.sortObjects===!0&&l.sort(ge,xe),Be=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Be&&me.addToRenderList(l,f),this.info.render.frame++,We===!0&&ee.beginShadows();const I=o.state.shadowsArray;he.render(I,f,b),We===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=l.opaque,C=l.transmissive;if(o.setupLights(),b.isArrayCamera){const J=b.cameras;if(C.length>0)for(let re=0,de=J.length;re<de;re++){const se=J[re];Zi(O,C,f,se)}Be&&me.render(f);for(let re=0,de=J.length;re<de;re++){const se=J[re];$i(l,f,se,se.viewport)}}else C.length>0&&Zi(O,C,f,b),Be&&me.render(f),$i(l,f,b);V!==null&&N===0&&(Ie.updateMultisampleRenderTarget(V),Ie.updateRenderTargetMipmap(V)),f.isScene===!0&&f.onAfterRender(M,f,b),ae.resetDefaultState(),m=-1,u=null,x.pop(),x.length>0?(o=x[x.length-1],We===!0&&ee.setGlobalState(M.clippingPlanes,o.state.camera)):o=null,w.pop(),w.length>0?l=w[w.length-1]:l=null};function ri(f,b,I,O){if(f.visible===!1)return;if(f.layers.test(b.layers)){if(f.isGroup)I=f.renderOrder;else if(f.isLOD)f.autoUpdate===!0&&f.update(b);else if(f.isLight)o.pushLight(f),f.castShadow&&o.pushShadow(f);else if(f.isSprite){if(!f.frustumCulled||et.intersectsSprite(f)){O&&we.setFromMatrixPosition(f.matrixWorld).applyMatrix4(q);const re=y.update(f),de=f.material;de.visible&&l.push(f,re,de,I,we.z,null)}}else if((f.isMesh||f.isLine||f.isPoints)&&(!f.frustumCulled||et.intersectsObject(f))){const re=y.update(f),de=f.material;if(O&&(f.boundingSphere!==void 0?(f.boundingSphere===null&&f.computeBoundingSphere(),we.copy(f.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),we.copy(re.boundingSphere.center)),we.applyMatrix4(f.matrixWorld).applyMatrix4(q)),Array.isArray(de)){const se=re.groups;for(let Ae=0,Ce=se.length;Ae<Ce;Ae++){const Se=se[Ae],Oe=de[Se.materialIndex];Oe&&Oe.visible&&l.push(f,re,Oe,I,we.z,Se)}}else de.visible&&l.push(f,re,de,I,we.z,null)}}const J=f.children;for(let re=0,de=J.length;re<de;re++)ri(J[re],b,I,O)}function $i(f,b,I,O){const C=f.opaque,J=f.transmissive,re=f.transparent;o.setupLightsView(I),We===!0&&ee.setGlobalState(M.clippingPlanes,I),O&&ue.viewport(D.copy(O)),C.length>0&&On(C,b,I),J.length>0&&On(J,b,I),re.length>0&&On(re,b,I),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Zi(f,b,I,O){if((I.isScene===!0?I.overrideMaterial:null)!==null)return;o.state.transmissionRenderTarget[O.id]===void 0&&(o.state.transmissionRenderTarget[O.id]=new un(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?Qn:en,minFilter:En,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const J=o.state.transmissionRenderTarget[O.id],re=O.viewport||D;J.setSize(re.z*M.transmissionResolutionScale,re.w*M.transmissionResolutionScale);const de=M.getRenderTarget(),se=M.getActiveCubeFace(),Ae=M.getActiveMipmapLevel();M.setRenderTarget(J),M.getClearColor(Y),$=M.getClearAlpha(),$<1&&M.setClearColor(16777215,.5),M.clear(),Be&&me.render(I);const Ce=M.toneMapping;M.toneMapping=Gt;const Se=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),o.setupLightsView(O),We===!0&&ee.setGlobalState(M.clippingPlanes,O),On(f,I,O),Ie.updateMultisampleRenderTarget(J),Ie.updateRenderTargetMipmap(J),De.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let ze=0,tt=b.length;ze<tt;ze++){const qe=b[ze],Xe=qe.object,Te=qe.geometry,Qe=qe.material,Ge=qe.group;if(Qe.side===Pt&&Xe.layers.test(O.layers)){const _t=Qe.side;Qe.side=Mt,Qe.needsUpdate=!0,Ji(Xe,I,O,Te,Qe,Ge),Qe.side=_t,Qe.needsUpdate=!0,Oe=!0}}Oe===!0&&(Ie.updateMultisampleRenderTarget(J),Ie.updateRenderTargetMipmap(J))}M.setRenderTarget(de,se,Ae),M.setClearColor(Y,$),Se!==void 0&&(O.viewport=Se),M.toneMapping=Ce}function On(f,b,I){const O=b.isScene===!0?b.overrideMaterial:null;for(let C=0,J=f.length;C<J;C++){const re=f[C],de=re.object,se=re.geometry,Ae=re.group;let Ce=re.material;Ce.allowOverride===!0&&O!==null&&(Ce=O),de.layers.test(I.layers)&&Ji(de,b,I,se,Ce,Ae)}}function Ji(f,b,I,O,C,J){f.onBeforeRender(M,b,I,O,C,J),f.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,f.matrixWorld),f.normalMatrix.getNormalMatrix(f.modelViewMatrix),C.onBeforeRender(M,b,I,O,f,J),C.transparent===!0&&C.side===Pt&&C.forceSinglePass===!1?(C.side=Mt,C.needsUpdate=!0,M.renderBufferDirect(I,b,O,C,f,J),C.side=wn,C.needsUpdate=!0,M.renderBufferDirect(I,b,O,C,f,J),C.side=Pt):M.renderBufferDirect(I,b,O,C,f,J),f.onAfterRender(M,b,I,O,C,J)}function Fn(f,b,I){b.isScene!==!0&&(b=Ee);const O=pe.get(f),C=o.state.lights,J=o.state.shadowsArray,re=C.state.version,de=G.getParameters(f,C.state,J,b,I),se=G.getProgramCacheKey(de);let Ae=O.programs;O.environment=f.isMeshStandardMaterial?b.environment:null,O.fog=b.fog,O.envMap=(f.isMeshStandardMaterial?it:ct).get(f.envMap||O.environment),O.envMapRotation=O.environment!==null&&f.envMap===null?b.environmentRotation:f.envMapRotation,Ae===void 0&&(f.addEventListener("dispose",z),Ae=new Map,O.programs=Ae);let Ce=Ae.get(se);if(Ce!==void 0){if(O.currentProgram===Ce&&O.lightsStateVersion===re)return ji(f,de),Ce}else de.uniforms=G.getUniforms(f),f.onBeforeCompile(de,M),Ce=G.acquireProgram(de,se),Ae.set(se,Ce),O.uniforms=de.uniforms;const Se=O.uniforms;return(!f.isShaderMaterial&&!f.isRawShaderMaterial||f.clipping===!0)&&(Se.clippingPlanes=ee.uniform),ji(f,de),O.needsLights=Kr(f),O.lightsStateVersion=re,O.needsLights&&(Se.ambientLightColor.value=C.state.ambient,Se.lightProbe.value=C.state.probe,Se.directionalLights.value=C.state.directional,Se.directionalLightShadows.value=C.state.directionalShadow,Se.spotLights.value=C.state.spot,Se.spotLightShadows.value=C.state.spotShadow,Se.rectAreaLights.value=C.state.rectArea,Se.ltc_1.value=C.state.rectAreaLTC1,Se.ltc_2.value=C.state.rectAreaLTC2,Se.pointLights.value=C.state.point,Se.pointLightShadows.value=C.state.pointShadow,Se.hemisphereLights.value=C.state.hemi,Se.directionalShadowMap.value=C.state.directionalShadowMap,Se.directionalShadowMatrix.value=C.state.directionalShadowMatrix,Se.spotShadowMap.value=C.state.spotShadowMap,Se.spotLightMatrix.value=C.state.spotLightMatrix,Se.spotLightMap.value=C.state.spotLightMap,Se.pointShadowMap.value=C.state.pointShadowMap,Se.pointShadowMatrix.value=C.state.pointShadowMatrix),O.currentProgram=Ce,O.uniformsList=null,Ce}function Qi(f){if(f.uniformsList===null){const b=f.currentProgram.getUniforms();f.uniformsList=Xn.seqWithValue(b.seq,f.uniforms)}return f.uniformsList}function ji(f,b){const I=pe.get(f);I.outputColorSpace=b.outputColorSpace,I.batching=b.batching,I.batchingColor=b.batchingColor,I.instancing=b.instancing,I.instancingColor=b.instancingColor,I.instancingMorph=b.instancingMorph,I.skinning=b.skinning,I.morphTargets=b.morphTargets,I.morphNormals=b.morphNormals,I.morphColors=b.morphColors,I.morphTargetsCount=b.morphTargetsCount,I.numClippingPlanes=b.numClippingPlanes,I.numIntersection=b.numClipIntersection,I.vertexAlphas=b.vertexAlphas,I.vertexTangents=b.vertexTangents,I.toneMapping=b.toneMapping}function Xr(f,b,I,O,C){b.isScene!==!0&&(b=Ee),Ie.resetTextureUnits();const J=b.fog,re=O.isMeshStandardMaterial?b.environment:null,de=V===null?M.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:jn,se=(O.isMeshStandardMaterial?it:ct).get(O.envMap||re),Ae=O.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,Ce=!!I.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Se=!!I.morphAttributes.position,Oe=!!I.morphAttributes.normal,ze=!!I.morphAttributes.color;let tt=Gt;O.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(tt=M.toneMapping);const qe=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Xe=qe!==void 0?qe.length:0,Te=pe.get(O),Qe=o.state.lights;if(We===!0&&(k===!0||f!==u)){const dt=f===u&&O.id===m;ee.setState(O,f,dt)}let Ge=!1;O.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Qe.state.version||Te.outputColorSpace!==de||C.isBatchedMesh&&Te.batching===!1||!C.isBatchedMesh&&Te.batching===!0||C.isBatchedMesh&&Te.batchingColor===!0&&C.colorTexture===null||C.isBatchedMesh&&Te.batchingColor===!1&&C.colorTexture!==null||C.isInstancedMesh&&Te.instancing===!1||!C.isInstancedMesh&&Te.instancing===!0||C.isSkinnedMesh&&Te.skinning===!1||!C.isSkinnedMesh&&Te.skinning===!0||C.isInstancedMesh&&Te.instancingColor===!0&&C.instanceColor===null||C.isInstancedMesh&&Te.instancingColor===!1&&C.instanceColor!==null||C.isInstancedMesh&&Te.instancingMorph===!0&&C.morphTexture===null||C.isInstancedMesh&&Te.instancingMorph===!1&&C.morphTexture!==null||Te.envMap!==se||O.fog===!0&&Te.fog!==J||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ee.numPlanes||Te.numIntersection!==ee.numIntersection)||Te.vertexAlphas!==Ae||Te.vertexTangents!==Ce||Te.morphTargets!==Se||Te.morphNormals!==Oe||Te.morphColors!==ze||Te.toneMapping!==tt||Te.morphTargetsCount!==Xe)&&(Ge=!0):(Ge=!0,Te.__version=O.version);let _t=Te.currentProgram;Ge===!0&&(_t=Fn(O,b,C));let an=!1,gt=!1,gn=!1;const je=_t.getUniforms(),vt=Te.uniforms;if(ue.useProgram(_t.program)&&(an=!0,gt=!0,gn=!0),O.id!==m&&(m=O.id,gt=!0),an||u!==f){ue.buffers.depth.getReversed()&&f.reversedDepth!==!0&&(f._reversedDepth=!0,f.updateProjectionMatrix()),je.setValue(S,"projectionMatrix",f.projectionMatrix),je.setValue(S,"viewMatrix",f.matrixWorldInverse);const ut=je.map.cameraPosition;ut!==void 0&&ut.setValue(S,le.setFromMatrixPosition(f.matrixWorld)),be.logarithmicDepthBuffer&&je.setValue(S,"logDepthBufFC",2/(Math.log(f.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&je.setValue(S,"isOrthographic",f.isOrthographicCamera===!0),u!==f&&(u=f,gt=!0,gn=!0)}if(C.isSkinnedMesh){je.setOptional(S,C,"bindMatrix"),je.setOptional(S,C,"bindMatrixInverse");const dt=C.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),je.setValue(S,"boneTexture",dt.boneTexture,Ie))}C.isBatchedMesh&&(je.setOptional(S,C,"batchingTexture"),je.setValue(S,"batchingTexture",C._matricesTexture,Ie),je.setOptional(S,C,"batchingIdTexture"),je.setValue(S,"batchingIdTexture",C._indirectTexture,Ie),je.setOptional(S,C,"batchingColorTexture"),C._colorsTexture!==null&&je.setValue(S,"batchingColorTexture",C._colorsTexture,Ie));const Et=I.morphAttributes;if((Et.position!==void 0||Et.normal!==void 0||Et.color!==void 0)&&Q.update(C,I,_t),(gt||Te.receiveShadow!==C.receiveShadow)&&(Te.receiveShadow=C.receiveShadow,je.setValue(S,"receiveShadow",C.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(vt.envMap.value=se,vt.flipEnvMap.value=se.isCubeTexture&&se.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&b.environment!==null&&(vt.envMapIntensity.value=b.environmentIntensity),gt&&(je.setValue(S,"toneMappingExposure",M.toneMappingExposure),Te.needsLights&&Yr(vt,gn),J&&O.fog===!0&&K.refreshFogUniforms(vt,J),K.refreshMaterialUniforms(vt,O,H,ne,o.state.transmissionRenderTarget[f.id]),Xn.upload(S,Qi(Te),vt,Ie)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Xn.upload(S,Qi(Te),vt,Ie),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&je.setValue(S,"center",C.center),je.setValue(S,"modelViewMatrix",C.modelViewMatrix),je.setValue(S,"normalMatrix",C.normalMatrix),je.setValue(S,"modelMatrix",C.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const dt=O.uniformsGroups;for(let ut=0,oi=dt.length;ut<oi;ut++){const Wt=dt[ut];Ue.update(Wt,_t),Ue.bind(Wt,_t)}}return _t}function Yr(f,b){f.ambientLightColor.needsUpdate=b,f.lightProbe.needsUpdate=b,f.directionalLights.needsUpdate=b,f.directionalLightShadows.needsUpdate=b,f.pointLights.needsUpdate=b,f.pointLightShadows.needsUpdate=b,f.spotLights.needsUpdate=b,f.spotLightShadows.needsUpdate=b,f.rectAreaLights.needsUpdate=b,f.hemisphereLights.needsUpdate=b}function Kr(f){return f.isMeshLambertMaterial||f.isMeshToonMaterial||f.isMeshPhongMaterial||f.isMeshStandardMaterial||f.isShadowMaterial||f.isShaderMaterial&&f.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(f,b,I){const O=pe.get(f);O.__autoAllocateDepthBuffer=f.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),pe.get(f.texture).__webglTexture=b,pe.get(f.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:I,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(f,b){const I=pe.get(f);I.__webglFramebuffer=b,I.__useDefaultFramebuffer=b===void 0};const qr=S.createFramebuffer();this.setRenderTarget=function(f,b=0,I=0){V=f,P=b,N=I;let O=!0,C=null,J=!1,re=!1;if(f){const se=pe.get(f);if(se.__useDefaultFramebuffer!==void 0)ue.bindFramebuffer(S.FRAMEBUFFER,null),O=!1;else if(se.__webglFramebuffer===void 0)Ie.setupRenderTarget(f);else if(se.__hasExternalTextures)Ie.rebindTextures(f,pe.get(f.texture).__webglTexture,pe.get(f.depthTexture).__webglTexture);else if(f.depthBuffer){const Se=f.depthTexture;if(se.__boundDepthTexture!==Se){if(Se!==null&&pe.has(Se)&&(f.width!==Se.image.width||f.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ie.setupDepthRenderbuffer(f)}}const Ae=f.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(re=!0);const Ce=pe.get(f).__webglFramebuffer;f.isWebGLCubeRenderTarget?(Array.isArray(Ce[b])?C=Ce[b][I]:C=Ce[b],J=!0):f.samples>0&&Ie.useMultisampledRTT(f)===!1?C=pe.get(f).__webglMultisampledFramebuffer:Array.isArray(Ce)?C=Ce[I]:C=Ce,D.copy(f.viewport),B.copy(f.scissor),X=f.scissorTest}else D.copy(ye).multiplyScalar(H).floor(),B.copy(Ve).multiplyScalar(H).floor(),X=nt;if(I!==0&&(C=qr),ue.bindFramebuffer(S.FRAMEBUFFER,C)&&O&&ue.drawBuffers(f,C),ue.viewport(D),ue.scissor(B),ue.setScissorTest(X),J){const se=pe.get(f.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+b,se.__webglTexture,I)}else if(re){const se=b;for(let Ae=0;Ae<f.textures.length;Ae++){const Ce=pe.get(f.textures[Ae]);S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0+Ae,Ce.__webglTexture,I,se)}}else if(f!==null&&I!==0){const se=pe.get(f.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,se.__webglTexture,I)}m=-1},this.readRenderTargetPixels=function(f,b,I,O,C,J,re,de=0){if(!(f&&f.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let se=pe.get(f).__webglFramebuffer;if(f.isWebGLCubeRenderTarget&&re!==void 0&&(se=se[re]),se){ue.bindFramebuffer(S.FRAMEBUFFER,se);try{const Ae=f.textures[de],Ce=Ae.format,Se=Ae.type;if(!be.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!be.textureTypeReadable(Se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}b>=0&&b<=f.width-O&&I>=0&&I<=f.height-C&&(f.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+de),S.readPixels(b,I,O,C,_e.convert(Ce),_e.convert(Se),J))}finally{const Ae=V!==null?pe.get(V).__webglFramebuffer:null;ue.bindFramebuffer(S.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(f,b,I,O,C,J,re,de=0){if(!(f&&f.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let se=pe.get(f).__webglFramebuffer;if(f.isWebGLCubeRenderTarget&&re!==void 0&&(se=se[re]),se)if(b>=0&&b<=f.width-O&&I>=0&&I<=f.height-C){ue.bindFramebuffer(S.FRAMEBUFFER,se);const Ae=f.textures[de],Ce=Ae.format,Se=Ae.type;if(!be.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!be.textureTypeReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Oe=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Oe),S.bufferData(S.PIXEL_PACK_BUFFER,J.byteLength,S.STREAM_READ),f.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+de),S.readPixels(b,I,O,C,_e.convert(Ce),_e.convert(Se),0);const ze=V!==null?pe.get(V).__webglFramebuffer:null;ue.bindFramebuffer(S.FRAMEBUFFER,ze);const tt=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await eo(S,tt,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,Oe),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,J),S.deleteBuffer(Oe),S.deleteSync(tt),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(f,b=null,I=0){const O=Math.pow(2,-I),C=Math.floor(f.image.width*O),J=Math.floor(f.image.height*O),re=b!==null?b.x:0,de=b!==null?b.y:0;Ie.setTexture2D(f,0),S.copyTexSubImage2D(S.TEXTURE_2D,I,0,0,re,de,C,J),ue.unbindTexture()};const $r=S.createFramebuffer(),Zr=S.createFramebuffer();this.copyTextureToTexture=function(f,b,I=null,O=null,C=0,J=null){J===null&&(C!==0?(Ri("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=C,C=0):J=0);let re,de,se,Ae,Ce,Se,Oe,ze,tt;const qe=f.isCompressedTexture?f.mipmaps[J]:f.image;if(I!==null)re=I.max.x-I.min.x,de=I.max.y-I.min.y,se=I.isBox3?I.max.z-I.min.z:1,Ae=I.min.x,Ce=I.min.y,Se=I.isBox3?I.min.z:0;else{const Et=Math.pow(2,-C);re=Math.floor(qe.width*Et),de=Math.floor(qe.height*Et),f.isDataArrayTexture?se=qe.depth:f.isData3DTexture?se=Math.floor(qe.depth*Et):se=1,Ae=0,Ce=0,Se=0}O!==null?(Oe=O.x,ze=O.y,tt=O.z):(Oe=0,ze=0,tt=0);const Xe=_e.convert(b.format),Te=_e.convert(b.type);let Qe;b.isData3DTexture?(Ie.setTexture3D(b,0),Qe=S.TEXTURE_3D):b.isDataArrayTexture||b.isCompressedArrayTexture?(Ie.setTexture2DArray(b,0),Qe=S.TEXTURE_2D_ARRAY):(Ie.setTexture2D(b,0),Qe=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,b.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,b.unpackAlignment);const Ge=S.getParameter(S.UNPACK_ROW_LENGTH),_t=S.getParameter(S.UNPACK_IMAGE_HEIGHT),an=S.getParameter(S.UNPACK_SKIP_PIXELS),gt=S.getParameter(S.UNPACK_SKIP_ROWS),gn=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,qe.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,qe.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Ae),S.pixelStorei(S.UNPACK_SKIP_ROWS,Ce),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Se);const je=f.isDataArrayTexture||f.isData3DTexture,vt=b.isDataArrayTexture||b.isData3DTexture;if(f.isDepthTexture){const Et=pe.get(f),dt=pe.get(b),ut=pe.get(Et.__renderTarget),oi=pe.get(dt.__renderTarget);ue.bindFramebuffer(S.READ_FRAMEBUFFER,ut.__webglFramebuffer),ue.bindFramebuffer(S.DRAW_FRAMEBUFFER,oi.__webglFramebuffer);for(let Wt=0;Wt<se;Wt++)je&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,pe.get(f).__webglTexture,C,Se+Wt),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,pe.get(b).__webglTexture,J,tt+Wt)),S.blitFramebuffer(Ae,Ce,re,de,Oe,ze,re,de,S.DEPTH_BUFFER_BIT,S.NEAREST);ue.bindFramebuffer(S.READ_FRAMEBUFFER,null),ue.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(C!==0||f.isRenderTargetTexture||pe.has(f)){const Et=pe.get(f),dt=pe.get(b);ue.bindFramebuffer(S.READ_FRAMEBUFFER,$r),ue.bindFramebuffer(S.DRAW_FRAMEBUFFER,Zr);for(let ut=0;ut<se;ut++)je?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Et.__webglTexture,C,Se+ut):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Et.__webglTexture,C),vt?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,dt.__webglTexture,J,tt+ut):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,dt.__webglTexture,J),C!==0?S.blitFramebuffer(Ae,Ce,re,de,Oe,ze,re,de,S.COLOR_BUFFER_BIT,S.NEAREST):vt?S.copyTexSubImage3D(Qe,J,Oe,ze,tt+ut,Ae,Ce,re,de):S.copyTexSubImage2D(Qe,J,Oe,ze,Ae,Ce,re,de);ue.bindFramebuffer(S.READ_FRAMEBUFFER,null),ue.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else vt?f.isDataTexture||f.isData3DTexture?S.texSubImage3D(Qe,J,Oe,ze,tt,re,de,se,Xe,Te,qe.data):b.isCompressedArrayTexture?S.compressedTexSubImage3D(Qe,J,Oe,ze,tt,re,de,se,Xe,qe.data):S.texSubImage3D(Qe,J,Oe,ze,tt,re,de,se,Xe,Te,qe):f.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,J,Oe,ze,re,de,Xe,Te,qe.data):f.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,J,Oe,ze,qe.width,qe.height,Xe,qe.data):S.texSubImage2D(S.TEXTURE_2D,J,Oe,ze,re,de,Xe,Te,qe);S.pixelStorei(S.UNPACK_ROW_LENGTH,Ge),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,_t),S.pixelStorei(S.UNPACK_SKIP_PIXELS,an),S.pixelStorei(S.UNPACK_SKIP_ROWS,gt),S.pixelStorei(S.UNPACK_SKIP_IMAGES,gn),J===0&&b.generateMipmaps&&S.generateMipmap(Qe),ue.unbindTexture()},this.initRenderTarget=function(f){pe.get(f).__webglFramebuffer===void 0&&Ie.setupRenderTarget(f)},this.initTexture=function(f){f.isCubeTexture?Ie.setTextureCube(f,0):f.isData3DTexture?Ie.setTexture3D(f,0):f.isDataArrayTexture||f.isCompressedArrayTexture?Ie.setTexture2DArray(f,0):Ie.setTexture2D(f,0),ue.unbindTexture()},this.resetState=function(){P=0,N=0,V=null,ue.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ea}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(n),t.unpackColorSpace=rt._getUnpackColorSpace()}}const Yn=256,xn=6378137,kt=85.0511287798066,uu=Math.PI*xn,pu=2*uu,An=e=>((e+180)%360+360)%360-180,cr=e=>{const t=Math.max(-kt,Math.min(kt,e))*Math.PI/180;return xn*Math.log(Math.tan(Math.PI/4+t/2))};function hu(e,n,t){if(!Number.isInteger(t)||t<0||t>30)throw new RangeError("Zoom must be an integer from 0 to 30");const i=2**t,a=Math.floor((An(n)+180)/360*i),d=Math.max(-kt,Math.min(kt,e))*Math.PI/180,c=Math.floor((1-Math.asinh(Math.tan(d))/Math.PI)/2*i);return{x:(a%i+i)%i,y:Math.max(0,Math.min(i-1,c)),z:t,n:i}}function mu(e,n,t){const i=hu(e,n,t),a=Yn*i.n,r=(An(n)+180)/360*a,c=Math.max(-kt,Math.min(kt,e))*Math.PI/180,g=(1-Math.asinh(Math.tan(c))/Math.PI)/2*a;return{tile:i,u:r/Yn-i.x,v:g/Yn-i.y}}class _u{zoom;anchor;originTile;anchorU;anchorV;latitudeScale;tileSpan;originNorthing;constructor(n,t=12){if(!Number.isFinite(n.lat)||!Number.isFinite(n.lon)||Math.abs(n.lat)>90)throw new RangeError("Anchor must be a valid WGS84 latitude/longitude");this.anchor={lat:Math.max(-kt,Math.min(kt,n.lat)),lon:An(n.lon)},this.zoom=t;const i=mu(this.anchor.lat,this.anchor.lon,t);this.originTile=i.tile,this.anchorU=i.u,this.anchorV=i.v,this.latitudeScale=Math.cos(this.anchor.lat*Math.PI/180),this.originNorthing=cr(this.anchor.lat),this.tileSpan=pu/this.originTile.n*this.latitudeScale}toLocal(n){const t=An(n.lon-this.anchor.lon),i=xn*t*Math.PI/180,a=cr(n.lat)-this.originNorthing;return{x:i*this.latitudeScale,z:a*this.latitudeScale}}toGeo(n){const t=An(this.anchor.lon+n.x/(xn*this.latitudeScale)*180/Math.PI),i=this.originNorthing+n.z/this.latitudeScale;return{lon:t,lat:(2*Math.atan(Math.exp(i/xn))-Math.PI/2)*180/Math.PI}}tileOrigin(n,t){return{x:(n-this.anchorU)*this.tileSpan,z:(t+this.anchorV)*this.tileSpan}}tileOffsetAt(n,t){const i=this.anchorU+n/this.tileSpan,a=this.anchorV-t/this.tileSpan,r=Math.floor(i),d=Math.floor(a);return{dx:r>this.originTile.n/2?r-this.originTile.n:r<-this.originTile.n/2?r+this.originTile.n:r,dz:-d||0,u:i-r,v:a-d}}tileAddress(n,t){const i=this.originTile.n;return{x:((this.originTile.x+n)%i+i)%i,y:Math.max(0,Math.min(i-1,this.originTile.y-t)),z:this.zoom,n:i}}}const Br=[{name:"Manhattan, New York",lat:40.758,lon:-73.9855,terrain:"URBAN JUNGLE"},{name:"Moab, Utah",lat:38.5733,lon:-109.5498,terrain:"RED ROCK COUNTRY"},{name:"Grand Canyon",lat:36.1069,lon:-112.1129,terrain:"THE BIG DROP"},{name:"Mount Everest",lat:27.9881,lon:86.925,terrain:"ROOF OF THE WORLD"},{name:"San Francisco",lat:37.7749,lon:-122.4194,terrain:"HILL CLIMBER"},{name:"Tokyo, Japan",lat:35.6762,lon:139.6503,terrain:"NEON TRAILS"},{name:"Sahara Desert",lat:23.4162,lon:25.6628,terrain:"ENDLESS DUNES"},{name:"Swiss Alps",lat:46.8182,lon:9.2275,terrain:"HIGH ALTITUDE"}];function gu(e){const n=e.trim().match(/^\s*(-?\d+(?:\.\d+)?)\s*[, ]\s*(-?\d+(?:\.\d+)?)\s*$/);if(!n)return null;const t=Number(n[1]),i=Number(n[2]);return Math.abs(t)<=90&&Math.abs(i)<=180?{name:`${t.toFixed(4)}, ${i.toFixed(4)}`,lat:t,lon:i}:null}let lr=0;const Ei=new Map;async function vu(e){const n=gu(e);if(n)return[n];const t=e.toLowerCase().trim();if(!t)return[];if(Ei.has(t))return Ei.get(t);const i=Math.max(0,1100-(Date.now()-lr));i&&await new Promise(g=>setTimeout(g,i)),lr=Date.now();const a=new URL("https://nominatim.openstreetmap.org/search");a.search=new URLSearchParams({q:e,format:"jsonv2",limit:"5"}).toString();const r=await fetch(a,{headers:{Accept:"application/json"}});if(!r.ok)throw new Error(`Location search unavailable (${r.status})`);const c=(await r.json()).map(g=>({name:g.display_name.split(",").slice(0,3).join(",").trim(),lat:+g.lat,lon:+g.lon}));return Ei.set(t,c),c}function Eu(e,n,t,i){const a=Math.max(0,Math.min(n-1,t*(n-1))),r=Math.max(0,Math.min(n-1,i*(n-1))),d=Math.floor(a),c=Math.floor(r),g=Math.min(n-1,d+1),_=Math.min(n-1,c+1),E=a-d,p=r-c,v=(T,L)=>e[L*n+T]??0;return(v(d,c)*(1-E)+v(g,c)*E)*(1-p)+(v(d,_)*(1-E)+v(g,_)*E)*p}function dr(e,n,t){const i=new Float32Array((t+1)**2);for(let a=0;a<=t;a++)for(let r=0;r<=t;r++)i[a*(t+1)+r]=Eu(e,n,r/t,a/t);return i}function fr(e,n,t,i){const a=Math.max(0,Math.min(n,t*n)),r=Math.max(0,Math.min(n,i*n)),d=Math.min(n-1,Math.floor(a)),c=Math.min(n-1,Math.floor(r)),g=a-d,_=r-c,E=n+1,p=e[c*E+d]??0,v=e[c*E+d+1]??0,T=e[(c+1)*E+d]??0,L=e[(c+1)*E+d+1]??0;return g>=_?p*(1-g)+v*(g-_)+L*_:p*(1-_)+L*g+T*(_-g)}function Su(e){const n=new Map,t=new Set;for(const i of e){const a=i.segments+1;for(let r=0;r<=i.segments;r++)for(const[d,c]of[[r,0],[r,i.segments],[0,r],[i.segments,r]]){const g=c*a+d,_=`${i.dx*i.segments+d},${i.dz*i.segments-c}`,E=n.get(_)??[];E.push({tile:i,index:g}),n.set(_,E)}}for(const i of n.values()){if(i.length<2)continue;const a=i.reduce((r,d)=>r+d.tile.grid[d.index],0)/i.length;for(const r of i)r.tile.grid[r.index]!==a&&(r.tile.grid[r.index]=a,t.add(r.tile))}return t}const Si=12,St=Yn,Mu=36,Nt=new Map;function ur(e,n,t){const i=`${t}/${e}/${n}`;if(Nt.has(i)){const r=Nt.get(i);return Nt.delete(i),Nt.set(i,r),r}const a=(async()=>{try{const r=new Image;r.crossOrigin="anonymous",r.src=`https://s3.amazonaws.com/elevation-tiles-prod/terrarium/${t}/${e}/${n}.png`,await new Promise((E,p)=>{r.onload=()=>E(),r.onerror=()=>p(new Error("terrain tile unavailable"))});const d=document.createElement("canvas");d.width=St,d.height=St;const c=d.getContext("2d",{willReadFrequently:!0});if(!c)throw new Error("canvas unavailable");c.drawImage(r,0,0,St,St);const g=c.getImageData(0,0,St,St).data,_=new Float32Array(St*St);for(let E=0;E<_.length;E++)_[E]=g[E*4]*256+g[E*4+1]+g[E*4+2]/256-32768;return{heights:_}}catch{return{heights:new Float32Array(St*St)}}})();for(Nt.set(i,a);Nt.size>Mu;)Nt.delete(Nt.keys().next().value);return a}class Tu{constructor(n=127){this.centerSegments=n}group=new Jt;place=null;frame=null;baseline=0;tiles=new Map;requests=new Set;coverage={x:NaN,z:NaN};generation=0;material=new Tt({color:16777215,roughness:1,vertexColors:!0});async load(n){this.clear();const t=++this.generation;this.place=n,this.frame=new _u(n,Si);const i=this.frame.tileAddress(0,0),a=await ur(i.x,i.y,Si);if(t!==this.generation)return;const r=dr(a.heights,St,this.centerSegments);this.baseline=fr(r,this.centerSegments,this.frame.anchorU,this.frame.anchorV),this.install(0,0,a,this.centerSegments,r),this.ensureRegion(0,0)}key(n,t){return`${n},${t}`}address(n,t){return this.frame.tileAddress(n,t)}async ensureRegion(n,t){const i=this.frame;if(!i)return;const a=i.tileOffsetAt(n,t),r=a.dx,d=a.dz;if(this.coverage.x===r&&this.coverage.z===d)return;this.coverage={x:r,z:d};const c=this.generation,g=[],_=this.centerSegments;for(let E=d-1;E<=d+1;E++)for(let p=r-1;p<=r+1;p++){const v=this.key(p,E),T=p===r&&E===d?this.centerSegments:_,L=this.tiles.get(v);L&&L.segments!==T&&(this.group.remove(L.mesh),L.mesh.geometry.dispose(),this.tiles.delete(v));const R=`${c}:${v}`;if(this.tiles.has(v)||this.requests.has(R))continue;this.requests.add(R);const l=this.address(p,E);g.push(ur(l.x,l.y,Si).then(o=>{c===this.generation&&Math.abs(p-this.coverage.x)<=1&&Math.abs(E-this.coverage.z)<=1&&this.install(p,E,o,T)}).finally(()=>this.requests.delete(R)))}for(const[E,p]of this.tiles)(Math.abs(p.dx-r)>1||Math.abs(p.dz-d)>1)&&(this.group.remove(p.mesh),p.mesh.geometry.dispose(),this.tiles.delete(E));await Promise.all(g)}install(n,t,i,a=63,r){const d=this.key(n,t);if(this.tiles.has(d))return;const c=this.frame,g=r??dr(i.heights,St,a),_=new $n,E=new Float32Array((a+1)**2*3),p=[],v=[];let T=1/0,L=-1/0;for(const x of g)T=Math.min(T,x),L=Math.max(L,x);const R=/moab|grand canyon|sahara|utah|arizona/i.test(this.place?.name??""),l=(R?["#d0b587","#b99360","#977046","#796044"]:["#c9c1a6","#a49c75","#758557","#657355"]).map(x=>new Ye(x)),o=c.tileOrigin(n,t);for(let x=0;x<=a;x++)for(let M=0;M<=a;M++){const U=x*(a+1)+M,P=g[U],N=(P-T)/Math.max(1,L-T);E[U*3]=o.x+M/a*c.tileSpan,E[U*3+1]=Rt.clamp((P-this.baseline)*1.25,-900,1800),E[U*3+2]=o.z-x/a*c.tileSpan;const V=l[N>.76?0:N>.49?1:N>.22?2:3];p.push(V.r,V.g,V.b)}for(let x=0;x<a;x++)for(let M=0;M<a;M++){const U=x*(a+1)+M,P=U+1,N=U+a+1,V=N+1;v.push(U,P,V,U,V,N)}_.setIndex(v),_.setAttribute("position",new dn(E,3)),_.setAttribute("color",new Oa(p,3)),_.computeVertexNormals();const w=new at(_,this.material);w.receiveShadow=!0,w.userData.kind="terrain",this.group.add(w),this.tiles.set(d,{data:i,grid:g,mesh:w,segments:a,dx:n,dz:t}),this.reconcileSharedEdges()}reconcileSharedEdges(){const n=Su(Array.from(this.tiles.values()));for(const t of n)this.rebuildGeometry(t)}rebuildGeometry(n){const{segments:t,grid:i,dx:a,dz:r}=n,d=this.frame,c=new $n,g=new Float32Array((t+1)**2*3),_=[],E=[];let p=1/0,v=-1/0;for(const l of i)p=Math.min(p,l),v=Math.max(v,l);const T=/moab|grand canyon|sahara|utah|arizona/i.test(this.place?.name??""),L=(T?["#d0b587","#b99360","#977046","#796044"]:["#c9c1a6","#a49c75","#758557","#657355"]).map(l=>new Ye(l)),R=d.tileOrigin(a,r);for(let l=0;l<=t;l++)for(let o=0;o<=t;o++){const w=l*(t+1)+o,x=i[w],M=(x-p)/Math.max(1,v-p);g[w*3]=R.x+o/t*d.tileSpan,g[w*3+1]=Rt.clamp((x-this.baseline)*1.25,-900,1800),g[w*3+2]=R.z-l/t*d.tileSpan;const U=L[M>.76?0:M>.49?1:M>.22?2:3];_.push(U.r,U.g,U.b)}for(let l=0;l<t;l++)for(let o=0;o<t;o++){const w=l*(t+1)+o,x=w+1,M=w+t+1,U=M+1;E.push(w,x,U,w,U,M)}c.setIndex(E),c.setAttribute("position",new dn(g,3)),c.setAttribute("color",new Oa(_,3)),c.computeVertexNormals(),n.mesh.geometry.dispose(),n.mesh.geometry=c}heightAt(n,t){if(!this.frame||!this.tiles.size)return 0;this.ensureRegion(n,t);let i=this.frame.tileOffsetAt(n,t),a=this.tiles.get(this.key(i.dx,i.dz));if(a||(a=this.tiles.get(this.key(0,0)),i=this.frame.tileOffsetAt(n,t)),!a)return 0;const r=a===this.tiles.get(this.key(i.dx,i.dz))?i.u:Rt.clamp((n-this.frame.tileOrigin(a.dx,a.dz).x)/this.frame.tileSpan,0,1),d=a===this.tiles.get(this.key(i.dx,i.dz))?i.v:Rt.clamp((this.frame.tileOrigin(a.dx,a.dz).z-t)/this.frame.tileSpan,0,1);return(fr(a.grid,a.segments,r,d)-this.baseline)*1.25}clear(){this.generation++;for(const n of this.tiles.values())this.group.remove(n.mesh),n.mesh.geometry.dispose();this.tiles.clear(),this.requests.clear(),this.coverage={x:NaN,z:NaN}}dispose(){this.clear(),this.material.dispose()}}function xu(e,n){return e.map(([t,i])=>n.toLocal({lat:t,lon:i}))}const zn=new Map;let pr=0;async function Au(e){const n=`${e.lat.toFixed(3)},${e.lon.toFixed(3)}`;if(zn.has(n))return zn.get(n);try{const i=localStorage.getItem(`monster-map-buildings:${n}`);if(i){const a=JSON.parse(i);if(Date.now()-a.time<360*60*1e3&&Array.isArray(a.data))return zn.set(n,Promise.resolve(a.data)),a.data}}catch{}const t=(async()=>{try{const i=Math.max(0,5e3-(Date.now()-pr));i&&await new Promise(p=>setTimeout(p,i)),pr=Date.now();const a=.018,r=.018/Math.max(.3,Math.cos(e.lat*Math.PI/180)),c=`[out:json][timeout:12];(way["building"](${[e.lat-a,e.lon-r,e.lat+a,e.lon+r].join(",")}););out tags geom;`;let g=null;for(const p of["https://overpass.private.coffee/api/interpreter","https://overpass-api.de/api/interpreter"])try{const v=await fetch(p,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"data="+encodeURIComponent(c),signal:AbortSignal.timeout(9e3)});if(v.ok){g=v;break}}catch{}if(!g)throw new Error("Overpass providers unavailable");const E=((await g.json()).elements??[]).filter(p=>p.geometry?.length>=4).slice(0,450).map(p=>({lat:p.center?.lat??p.geometry[0].lat,lon:p.center?.lon??p.geometry[0].lon,tags:p.tags??{},coords:p.geometry.map(v=>[v.lat,v.lon])}));try{localStorage.setItem(`monster-map-buildings:${n}`,JSON.stringify({time:Date.now(),data:E}))}catch{}return E}catch{return[]}})();return zn.set(n,t),t}const Ru=new Tt({color:5661034,roughness:.9});class bu{group=new Jt;list=[];place=null;loadToken=0;async load(n,t,i,a){this.reset(i);const r=this.loadToken;this.place=n;const d=await Au(n);if(r===this.loadToken){for(const c of d){const g=xu(c.coords,a).map(U=>new ft(U.x,U.z)),_=g.map(U=>U.x),E=g.map(U=>U.y),p=(Math.min(..._)+Math.max(..._))/2,v=(Math.min(...E)+Math.max(...E))/2,T=Math.max(4,Math.max(..._)-Math.min(..._)),L=Math.max(4,Math.max(...E)-Math.min(...E)),R=new Es;g.forEach((U,P)=>P?R.lineTo(U.x-p,-(U.y-v)):R.moveTo(U.x-p,-(U.y-v))),R.closePath();const l=new Ss(R,{depth:1,bevelEnabled:!1});l.rotateX(-Math.PI/2);const o=+(c.tags["building:levels"]??0),w=Math.max(5,+(c.tags.height??0)||o*3.4||8+Math.random()*32);l.scale(1,w,1);const x=new at(l,Ru.clone());x.castShadow=!0,x.receiveShadow=!0,x.userData.kind="building",x.position.x=p,x.position.z=v,x.position.y=t(p,v),this.group.add(x);const M={mesh:x,x:p,z:v,w:T,d:L,h:w,broken:!1};this.list.push(M),i?.addBuilding(M,t(p,v))}this.list.length||this.addBarriers(t,i)}}addBarriers(n,t){const i=new Tt({color:13132085,roughness:.8});for(let a=0;a<4;a++)for(let r=-2;r<=2;r++){if((a+r)%3===0)continue;const d=3+(a*7+r*11+30)%3,c=3,g=2.5+(a*13+r*5+40)%3,_=r*5,E=28+a*9,p=new at(new pn(d,g,c),i.clone());p.position.set(_,n(_,E)+g/2,E),p.castShadow=!0,p.receiveShadow=!0,p.userData.kind="destructible-barrier",this.group.add(p);const v={mesh:p,x:_,z:E,w:d,d:c,h:g,broken:!1};this.list.push(v),t?.addBuilding(v,n(_,E))}}collide(n,t,i){return this.list.find(a=>!a.broken&&Math.abs(n-a.x)<a.w/2+i&&Math.abs(t-a.z)<a.d/2+i&&Math.random()<.08)}break(n){n.broken=!0,this.group.remove(n.mesh)}reset(n){this.loadToken++;for(const t of this.list)this.group.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),n?.removeBuilding(t);this.list=[],this.place=null}}class Cu{root=new Jt;wheels=[];frontWheels=[];suspension=[];body;opts;model=new Jt;constructor(n={color:"#d84924",scale:1}){this.opts=n;const t=n.scale;this.root.scale.setScalar(t),this.model.position.y=-1.65,this.root.add(this.model),this.body=new Jt,this.model.add(this.body),this.build()}build(){const n=new Tt({color:this.opts.color,metalness:.3,roughness:.38}),t=new Tt({color:1448477,metalness:.2,roughness:.7}),i=new Tt({color:7977422,metalness:.65,roughness:.2}),a=new Tt({color:12172994,metalness:.8,roughness:.25}),r=(g,_,E,p,v,T,L,R=this.body)=>{const l=new at(new pn(g,_,E),p);return l.position.set(v,T,L),l.castShadow=!0,l.receiveShadow=!0,R.add(l),l};r(2.25,.62,3.5,t,0,1.35,0),r(2.05,.62,1.2,n,0,1.8,.85),r(1.78,1.15,1.55,n,0,2.13,-.55),r(1.58,.72,.08,i,0,2.38,.24),r(1.55,.63,.08,i,0,2.36,-1.36),r(2.2,.18,.25,a,0,1.55,1.78),r(2.15,.12,.2,a,0,1.55,-1.8),r(.9,.35,.08,t,0,1.75,1.48),[-.78,.78].forEach(g=>{const _=new at(new Ms(.16,16),new Un({color:16773294}));_.position.set(g,1.9,1.49),this.body.add(_)});for(let g of[-1,1])r(.12,.14,1.8,a,g*1.13,1.24,0),r(.06,.08,1.6,n,g*1.12,2.82,-.55);const d=new Tt({color:1052947,roughness:.92}),c=new Tt({color:2632749,roughness:.85});for(const g of[-1.22,1.22])for(const _ of[-1.25,1.22]){const E=new Jt;E.position.set(g,.92,_),E.userData.wheelId=`${_>0?"front":"rear"}-${g<0?"left":"right"}`,this.model.add(E),this.wheels.push(E),_>0&&this.frontWheels.push(E);const p=new at(new Gn(.83,.83,.54,24,1),d);p.rotation.z=Math.PI/2,p.castShadow=!0,E.add(p);const v=new at(new Gn(.42,.42,.56,16),a);v.rotation.z=Math.PI/2,E.add(v);const T=new at(new Gn(.16,.16,.58,12),n);T.rotation.z=Math.PI/2,E.add(T);const L=new Ts(new pn(.21,.16,.58),c,12),R=new fn;for(let o=0;o<12;o++){const w=o*Math.PI/6;R.makeRotationZ(w),R.setPosition(Math.cos(w)*.79,Math.sin(w)*.79,0),L.setMatrixAt(o,R)}L.instanceMatrix.needsUpdate=!0,L.castShadow=!0,E.add(L);const l=new at(new Gn(.09,.09,.58,8),a);l.position.set(g,1.1,_),l.userData.wheelId=E.userData.wheelId,this.model.add(l),this.suspension.push(l)}for(let g=-2;g<=2;g++){const _=new at(new Ni(.1,10,8),new Un({color:16767608}));_.position.set(g*.35,2.85,-.1),this.body.add(_)}}updateWheelContacts(n,t){for(const i of this.wheels){const a=n.find(r=>r.id===i.userData.wheelId);a&&(i.position.y=(a.height+.83*t-this.root.position.y)/t-this.model.position.y)}this.suspension.forEach(i=>{const a=n.find(r=>r.id===i.userData.wheelId);a&&(i.scale.y=Rt.clamp(1-a.compression/Math.max(.01,a.travel)*.42,.5,1))})}setColor(n){this.opts.color=n,this.body.traverse(t=>{const i=t.material;i instanceof Tt&&i.color.getHex()===14174500&&i.color.set(n)})}}function Gr(e,n=new Pe){return n.set(Math.sin(e),0,Math.cos(e))}function wu(e,n=new Pe){return n.set(Math.cos(e),0,-Math.sin(e))}const hr=(e,n,t)=>Math.max(n,Math.min(t,e)),Pu=[{id:"front-left",x:-1.22,z:1.22},{id:"front-right",x:1.22,z:1.22},{id:"rear-left",x:-1.22,z:-1.25},{id:"rear-right",x:1.22,z:-1.25}];function Mi(e,n,t,i,a=24){const r=Math.cos(n),d=Math.sin(n),c=.55*t,g=.36*t;return Pu.map(_=>{const E=e.x+_.x*r+_.z*d,p=e.z-_.x*d+_.z*r,v=i(E,p),T=v+1.65*t+.12*t,L=T-e.y,R=2*Math.sqrt(a/(.12*t));return{id:_.id,x:E,z:p,height:v,travel:c,compression:hr(L,0,c),extension:hr(-L,0,g),contact:L>=-g&&L<=c,compressionDamping:R*.88,reboundDamping:R*.72}})}function Lu(e,n,t,i){const a=t/(.12*i);let r=0;for(const d of e){if(d.compression<=0)continue;const c=Math.max(0,d.compression-d.travel+.08*i),g=a*(d.compression+c*2.5),_=(n>=0?d.reboundDamping:d.compressionDamping)*n;r+=Math.max(0,g-_)}return r/e.length-t}function Du(e){const n=(e[0].height+e[1].height)/2,t=(e[2].height+e[3].height)/2,i=(e[0].height+e[2].height)/2,a=(e[1].height+e[3].height)/2;return{pitch:-Math.atan2(n-t,2.47),roll:Math.atan2(a-i,2.44)}}class Uu{pos=new Pe(0,0,0);vel=new Pe;yaw=0;pitch=0;roll=0;grounded=!0;nitro=100;airTime=0;speed=0;gravity=24;jumpForce=15;jumpWas=!1;contactPitch=0;contactRoll=0;wheelContacts=[];reset(n,t=1){this.pos.set(0,n.heightAt(0,0)+1.65*t,0),this.vel.set(0,0,0),this.yaw=0,this.pitch=0,this.roll=0,this.grounded=!0,this.nitro=100,this.airTime=0,this.contactPitch=0,this.contactRoll=0,this.wheelContacts=Mi(this.pos,this.yaw,t,(i,a)=>n.heightAt(i,a),this.gravity)}update(n,t,i,a,r){this.gravity=r.gravity,this.jumpForce=r.jump,n=Math.min(n,.04);const d=Math.max(1,Math.ceil(n*120)),c=n/d;for(let g=0;g<d;g++)this.step(c,t,i,r);a.root.position.copy(this.pos),a.root.rotation.order="YXZ",a.root.rotation.set(this.pitch+this.contactPitch,this.yaw,this.roll+this.contactRoll),a.updateWheelContacts(this.wheelContacts,r.scale),a.wheels.forEach(g=>{g.rotation.x-=this.speed*n}),a.frontWheels.forEach(g=>{g.rotation.y=-t.steer*.28})}step(n,t,i,a){const r=a.scale,d=Gr(this.yaw),c=30*(t.nitro&&this.nitro>0?1.7:1),g=26*(t.nitro&&this.nitro>0?1.5:1);t.throttle&&this.vel.addScaledVector(d,t.throttle*g*n);const _=new Pe(this.vel.x,0,this.vel.z);if(this.speed=_.length(),t.nitro&&this.nitro>0?this.nitro=Math.max(0,this.nitro-22*n):this.nitro=Math.min(100,this.nitro+8*n),t.handbrake?_.multiplyScalar(Math.max(0,1-3*n)):_.multiplyScalar(Math.max(0,1-(this.grounded?1.05:.1)*n)),this.speed>c&&_.setLength(c),this.speed>.4){const R=(this.grounded?1.8:1.05)*(.25+Math.min(1,this.speed/12)),l=Math.sign(_.dot(d))||Math.sign(t.throttle);this.yaw-=t.steer*R*n*l;const o=wu(this.yaw),w=_.dot(o);_.addScaledVector(o,-w*(this.grounded?.72:.01))}this.vel.x=_.x,this.vel.z=_.z,t.jump&&!this.jumpWas&&this.grounded&&(this.vel.y=this.jumpForce,this.grounded=!1),this.jumpWas=t.jump,this.wheelContacts=Mi(this.pos,this.yaw,r,(R,l)=>i.heightAt(R,l),this.gravity),this.grounded||(this.pitch+=t.airPitch*2.8*n,this.roll+=t.airRoll*3.5*n,this.airTime+=n),this.vel.y+=Lu(this.wheelContacts,this.vel.y,this.gravity,r)*n;const E=this.pos.y;this.pos.addScaledVector(this.vel,n),this.wheelContacts=Mi(this.pos,this.yaw,r,(R,l)=>i.heightAt(R,l),this.gravity);const p=this.wheelContacts.filter(R=>R.contact&&R.compression>.015*r).length,v=Math.max(...this.wheelContacts.map(R=>R.height))+1.17*r;this.pos.y<v&&this.vel.y<0&&(!this.grounded&&this.vel.y<-3&&(this.pitch*=.35,this.roll*=.35,this.vel.y=Math.max(0,-this.vel.y*.12)),this.pos.y=v),this.grounded=this.vel.y<=.75&&p>=2,this.grounded&&(this.vel.y=Math.max(0,this.vel.y),this.airTime=0,this.pitch*=Math.max(0,1-4*n),this.roll*=Math.max(0,1-4*n)),!this.grounded&&this.airTime>1.1&&(this.pitch=Rt.lerp(this.pitch,0,n*.24),this.roll=Rt.lerp(this.roll,0,n*.24));const T=Du(this.wheelContacts),L=this.grounded?Math.min(1,n*9):Math.min(1,n*2);this.contactPitch=Rt.lerp(this.contactPitch,this.grounded?T.pitch:0,L),this.contactRoll=Rt.lerp(this.contactRoll,this.grounded?T.roll:0,L),Number.isFinite(this.pos.y)||(this.pos.y=E)}}class yu{pressed=new Set;actions=new Map;pointerDown(n,t){this.pointerUp(n),this.actions.set(n,t),this.pressed.add(t)}pointerUp(n){const t=this.actions.get(n);t!==void 0&&(this.actions.delete(n),[...this.actions.values()].includes(t)||this.pressed.delete(t))}pointerCancel(n){this.pointerUp(n)}lostPointerCapture(n){this.pointerUp(n)}releaseAll(){this.actions.clear(),this.pressed.clear()}}function Iu(e,n){const t=(...i)=>i.some(a=>e.has(a)||n.has(a));return Number(t("d","arrowright"))-Number(t("a","arrowleft"))}class Nu{keys=new Set;pointerButtons=new yu;state={throttle:0,steer:0,nitro:!1,jump:!1,airPitch:0,airRoll:0,handbrake:!1};get touches(){return this.pointerButtons.pressed}constructor(){window.addEventListener("keydown",n=>{[" ","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n.key)&&n.preventDefault(),this.keys.add(n.key.toLowerCase())}),window.addEventListener("keyup",n=>this.keys.delete(n.key.toLowerCase())),window.addEventListener("blur",()=>this.releaseAll())}pointerDown(n,t){this.pointerButtons.pointerDown(n,t)}pointerUp(n){this.pointerButtons.pointerUp(n)}pointerCancel(n){this.pointerButtons.pointerCancel(n)}lostPointerCapture(n){this.pointerButtons.lostPointerCapture(n)}releaseAll(){this.keys.clear(),this.pointerButtons.releaseAll(),this.state={throttle:0,steer:0,nitro:!1,jump:!1,airPitch:0,airRoll:0,handbrake:!1}}update(){const n=(...p)=>p.some(v=>this.keys.has(v)||this.touches.has(v)),t=Array.from(navigator.getGamepads?.()??[]).find(p=>p?.connected),i=t?.axes??[],a=p=>t?.buttons[p]?.value??0,r=(n("w","arrowup")?1:0)-(n("s","arrowdown")?1:0),d=a(7)-a(6)||-Math.sign(Math.abs(i[1]??0)>.18?i[1]:0),c=Iu(this.keys,this.touches),g=Math.abs(i[0]??0)>.16?i[0]:0,_=(n("arrowup")?1:0)-(n("arrowdown")?1:0),E=(n("e","arrowright")?1:0)-(n("q","arrowleft")?1:0);return this.state={throttle:r||d,steer:c||g,nitro:n("shift","nitro")||a(1)>.4,jump:n(" ","jump")||a(0)>.4,airPitch:_||(Math.abs(i[3]??0)>.18?-Math.sign(i[3]):0),airRoll:E||(Math.abs(i[2]??0)>.18?Math.sign(i[2]):0),handbrake:n("control")||a(2)>.4},this.state}}class Ou{group=new Jt;puffs=[];rng=7886388;rand(){return this.rng=this.rng*1664525+1013904223>>>0,this.rng/4294967296}burst(n,t=18,i=16758605){for(let a=0;a<t;a++){const r=new Un({color:i,transparent:!0,opacity:.9}),d=new at(new Ni(.08+this.rand()*.13,6,5),r);d.position.copy(n),this.group.add(d),this.puffs.push({mesh:d,life:.45+this.rand()*.8,max:.9,velocity:new Pe((this.rand()-.5)*8,1+this.rand()*7,(this.rand()-.5)*8)})}}dust(n,t){if(t<4||this.rand()>.27)return;const i=new Un({color:13875854,transparent:!0,opacity:.28,depthWrite:!1}),a=new at(new Ni(.18+this.rand()*.15,7,6),i);a.position.copy(n),this.group.add(a),this.puffs.push({mesh:a,life:.65,max:.65,velocity:new Pe((this.rand()-.5)*1,.4+this.rand(),(this.rand()-.5)*1)})}update(n){this.puffs=this.puffs.filter(t=>(t.life-=n,t.mesh.position.addScaledVector(t.velocity,n),t.mesh.scale.multiplyScalar(1+n*.55),t.mesh.material.opacity=Math.max(0,t.life/t.max*.5),t.life<=0?(this.group.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),!1):!0))}}class Fu{ctx=null;osc=null;gain=null;nitroGain=null;enabled=!1;start(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});return}try{const n=window,t=window.AudioContext??n.webkitAudioContext;if(!t)return;this.ctx=new t,this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.osc=this.ctx.createOscillator(),this.osc.type="sawtooth",this.gain=this.ctx.createGain(),this.gain.gain.value=1e-4;const i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.value=380,this.osc.connect(i).connect(this.gain).connect(this.ctx.destination),this.osc.start();const a=this.ctx.createOscillator();a.type="triangle",this.nitroGain=this.ctx.createGain(),this.nitroGain.gain.value=1e-4,a.connect(this.nitroGain).connect(this.ctx.destination),a.start(),this.enabled=!0}catch{}}update(n,t){!this.ctx||!this.osc||!this.gain||(this.osc.frequency.setTargetAtTime(55+n*8,this.ctx.currentTime,.12),this.gain.gain.setTargetAtTime(.015+Math.min(.035,n*.001),this.ctx.currentTime,.15),this.nitroGain?.gain.setTargetAtTime(t?.018:1e-4,this.ctx.currentTime,.08))}mute(){this.ctx&&this.gain?.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.1)}}const Me=e=>document.querySelector(e),In=!!(window.matchMedia?.("(pointer: coarse)").matches||window.matchMedia?.("(any-pointer: coarse)").matches||navigator.maxTouchPoints>0||"ontouchstart"in window),Nn=document.documentElement;Nn.classList.toggle("touch-capable",In);Nn.classList.toggle("keyboard-controls-visible",!In);const Bu=Me("#app");Bu.innerHTML=`
 <canvas id="game"></canvas>
 <div class="grain"></div>
 <header class="topbar"><a class="brand" href="#"><span class="brand-icon">✦</span><span>RUMBLE<span class="accent">ROAM</span></span></a><div class="location-label"><span class="pulse"></span><span id="place-name">Moab, Utah</span><small id="terrain-name">RED ROCK COUNTRY</small></div><div class="top-actions"><button id="map-btn" class="top-btn" aria-label="Choose location">⌖ <span>LOCATIONS</span></button><button id="pause-btn" class="top-btn" aria-label="Pause game">Ⅱ <span>PAUSE</span></button><button id="help-btn" class="top-btn help-trigger" aria-label="Help and controls">?</button></div></header>
 <aside class="hud-left"><div class="stat"><span class="stat-label">VELOCITY</span><div class="speed-line"><strong id="speed">000</strong><span>KM/H</span></div><div class="speed-track"><i id="speed-bar"></i></div></div><div class="stat nitro-stat"><span class="stat-label">NITROUS</span><div class="nitro-track"><i id="nitro-bar"></i></div><small id="nitro-state">READY TO BURN</small></div></aside>
 <div class="hud-bottom"><div class="hint keyboard-hint"><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> DRIVE <i></i><kbd>SHIFT</kbd> BOOST <i></i><kbd>SPACE</kbd> JUMP <i></i><kbd>Q</kbd><kbd>E</kbd> FLIP</div><div class="touch-hint">LEFT / RIGHT STEER · HOLD GO OR BRAKE · JUMP + BOOST</div><div class="camera-toggle"><button data-camera="chase" class="selected">CHASE</button><button data-camera="far">FAR</button><button data-camera="hood">HOOD</button><button data-camera="free">FREE</button></div></div>
 <button id="settings-btn" class="settings-fab">⚙</button>
 <section id="location-panel" class="panel hidden"><div class="panel-head"><div><span class="eyebrow">PICK YOUR PLAYGROUND</span><h2>Where to next?</h2></div><button class="close-btn" data-close="location-panel">×</button></div><form id="search-form"><input id="location-search" placeholder="Search a place or paste coordinates" autocomplete="off"><button class="search-btn">SEARCH <span>↗</span></button></form><div id="search-results" class="results"></div><div class="map-wrap"><div id="mini-map"></div><div class="map-hint">CLICK MAP TO DROP A PIN</div></div><div class="preset-title">FAVORITE RUNS <span>08 LOCATIONS</span></div><div id="presets" class="presets"></div><div class="attribution">Terrain <a href="https://registry.opendata.aws/terrain-tiles/" target="_blank">Mapzen / Tilezen</a> · © <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a> · Map <a href="https://openfreemap.org/" target="_blank">OpenFreeMap</a><details class="terrain-credits"><summary>Terrain source credits</summary><div>ArcticDEM: DigitalGlobe imagery; NSF awards 1043681, 1559691 and 1542736. Australia: © Commonwealth of Australia (Geoscience Australia) 2017. Austria: © offene Daten Österreichs – Digitales Geländemodell (DGM) Österreich. Canada: Open Government Licence – Canada. Europe: Copernicus / EU-DEM. Global ETOPO1: NOAA. Mexico: INEGI, Continental relief, 2016. New Zealand: © Land Information New Zealand and NZ Government. Norway: © Kartverket. United Kingdom: © Environment Agency 2015. United States 3DEP, GMTED2010 and SRTM: USGS.</div></details></div></section>
 <section id="settings-panel" class="panel settings hidden"><div class="panel-head"><div><span class="eyebrow">TUNE THE MAYHEM</span><h2>Game settings</h2></div><button class="close-btn" data-close="settings-panel">×</button></div><label>Gravity <span id="gravity-value">24</span><input id="gravity" type="range" min="6" max="35" value="24"></label><label>Jump force <span id="jump-value">15</span><input id="jump" type="range" min="8" max="25" value="15"></label><label>Truck scale <span id="scale-value">1.0×</span><input id="scale" type="range" min="7" max="16" value="10"></label><label>Paint <input id="paint" type="color" value="#d84924"></label><label class="toggle"><span>Audio</span><input id="audio-toggle" type="checkbox" checked></label><button id="reset-btn" class="search-btn full">RESET TRUCK <span>↻</span></button><small class="settings-note">Esc pauses the run. R recovers the truck. Press M to pick a new place.</small></section>
 <section id="pause-panel" class="pause-panel hidden"><span class="eyebrow">TAKE A BREATHER</span><h1>PAUSED</h1><button id="resume-btn" class="search-btn">BACK TO IT <span>▶</span></button><button id="pause-location" class="ghost-btn">CHANGE LOCATION</button></section>
 <section id="help-panel" class="panel help-panel hidden" aria-labelledby="help-title"><div class="panel-head"><div><span class="eyebrow">QUICK DRIVER GUIDE</span><h2 id="help-title">Controls</h2></div><button class="close-btn" data-close="help-panel" aria-label="Close help">×</button></div><p class="touch-guide-copy">Hold ◀ / ▶ to steer. Hold GO to accelerate or BRAKE to reverse. Hold JUMP and BOOST together for a bigger launch. Camera, reset, and pause are just below.</p><div class="help-grid"><strong>Keyboard</strong><span>W / S · Accelerate / reverse</span><span>A / D or ← / → · Steer</span><span>Shift · Nitro · Space · Jump</span><span>Q / E · Roll · R · Reset · C · Camera · Esc · Pause · M · Locations</span><strong>Touch</strong><span>◀ / ▶ · Steer · GO / BRAKE · Drive</span><span>JUMP · Launch · BOOST · Nitro</span><span>Bottom shortcuts · Reset · Camera · Pause · Help</span></div></section>
 <div id="toast" class="toast"></div>
 <div class="orientation-tip" aria-hidden="true">LANDSCAPE RECOMMENDED</div>
 <nav class="mobile-utility" aria-label="Quick game controls"><button id="touch-reset" aria-label="Reset truck">↻ <span>RESET</span></button><button id="touch-camera" aria-label="Change camera">◉ <span>CAM</span></button><button id="touch-pause" aria-label="Pause game">Ⅱ <span>PAUSE</span></button><button id="touch-help" aria-label="Help and controls">? <span>HELP</span></button><button id="touch-control-mode" aria-label="Switch control display" aria-pressed="true">⌨ <span>KEYS</span></button></nav>
 <div class="mobile-controls" aria-label="Touch driving controls"><div class="touch-action-row"><button data-touch="jump" aria-label="Jump">⬆ <span>JUMP</span></button><button data-touch="nitro" class="nitro-touch" aria-label="Hold for nitro">⚡ <span>BOOST</span></button></div><div class="touch-drive-row"><div class="dpad" aria-label="Steering"><button data-touch="a" aria-label="Steer left">◀<span>LEFT</span></button><button data-touch="d" aria-label="Steer right">▶<span>RIGHT</span></button></div><div class="pedals" aria-label="Acceleration"><button data-touch="s" class="brake" aria-label="Brake and reverse">▼<span>BRAKE</span></button><button data-touch="w" class="go" aria-label="Accelerate">▲<span>GO</span></button></div></div></div>
 <div class="loading-screen" id="loading"><div class="loader-mark">✦</div><div class="loader-title">MAPPING THE WILD</div><div class="loader-sub">LOADING REAL-WORLD TERRAIN</div><div class="loader-track"><i></i></div></div>`;const Hr=In?1:1.35,Vr=()=>({width:Math.round(window.visualViewport?.width??innerWidth),height:Math.round(window.visualViewport?.height??innerHeight)}),Jn=Vr(),yt=new fu({canvas:Me("#game"),antialias:!1,powerPreference:"high-performance"});yt.setPixelRatio(Math.min(devicePixelRatio||1,Hr));yt.setSize(Jn.width,Jn.height);yt.shadowMap.enabled=!1;yt.toneMapping=Ur;yt.toneMappingExposure=1.12;const It=new xs;It.background=new Ye("#b9d2d8");It.fog=new As("#b9d2d8",115e-6);const mn=new Mn(60,Jn.width/Jn.height,.1,18e3);mn.position.set(0,8,-16);It.add(new Rs(15266559,6444868,2));const kr=new bs(16772559,3.2);kr.position.set(-350,550,260);It.add(kr);const Dt=new Tu(In?63:127);It.add(Dt.group);const Ht=new bu;It.add(Ht.group);const Rn=new Ou;It.add(Rn.group);let Ft=new Cu;It.add(Ft.root);const Fe=new Uu,{ArcadeCollisionWorld:Gu}=await Oi(async()=>{const{ArcadeCollisionWorld:e}=await import("./collision-world-CrI1_Cw_.js");return{ArcadeCollisionWorld:e}},__vite__mapDeps([0,1]),import.meta.url),jt=new Gu;await jt.init();const ht=new Nu,nn=new Fu;(location.hostname==="localhost"||location.hostname==="127.0.0.1")&&(window.__rumbleRoamDebug={spawnImpactTestBuilding(){const e=Fe.pos.x,n=Fe.pos.z,t=8,i=Dt.heightAt(e,n),a=new at(new pn(6,t,6),new Tt({color:10180920}));a.position.set(e,i+t/2,n),a.userData.kind="building",Ht.group.add(a);const r={mesh:a,x:e,z:n,w:6,d:6,h:t,broken:!1};Ht.list.push(r),jt.addBuilding(r,i);const d=jt.step(Fe.pos,Fe.yaw,1/60);return d&&(Hi++,jt.removeBuilding(d),Ht.break(d),Rn.burst(new Pe(d.x,Fe.pos.y,d.z),32,16749652),$t=.5,Vt("CRUNCH! Structure demolished.")),d===r}});const ni={gravity:24,jump:15,scale:1};let Bt="chase",Ut=!1,Bi=0,bn=.25,Ot=null,Gi=null,ln=Br[1],Ti=0,yn=performance.now(),$t=0,mr=0,xi=performance.now(),Ai=0,Hi=0;function Vt(e){const n=Me("#toast");n.textContent=e,n.classList.add("show"),clearTimeout(mr),mr=window.setTimeout(()=>n.classList.remove("show"),2800)}function bt(){Nn.classList.toggle("overlay-open",["location-panel","settings-panel","help-panel","pause-panel"].some(e=>!Me("#"+e).classList.contains("hidden")))}async function ii(e){const n=++Ti;ln=e,Ut=!1,["location-panel","settings-panel","help-panel","pause-panel"].forEach(t=>Me("#"+t).classList.add("hidden")),bt(),Me("#loading").classList.remove("done"),Me("#place-name").textContent=e.name,Me("#terrain-name").textContent=e.terrain??"OPEN TERRAIN",Vt("Mapping terrain…"),await Dt.load(e),n===Ti&&(Fe.reset(Dt,ni.scale),Me("#loading").classList.add("done"),Vt("Terrain is ready. Go make a mess."),Ht.load(e,(t,i)=>Dt.heightAt(t,i),jt,Dt.frame).then(()=>{n===Ti&&Vt(Ht.list.length?`${Ht.list.length} structures ready. Go make a mess.`:"No mapped structures nearby. The terrain is yours.")}),Ot?.flyTo({center:[e.lon,e.lat],zoom:12}),Gi?.setLngLat([e.lon,e.lat]))}Br.forEach((e,n)=>{const t=document.createElement("button");t.className="preset",t.innerHTML=`<span class="preset-index">0${n+1}</span><span>${e.name}</span><i>↗</i>`,t.onclick=()=>ii(e),Me("#presets").append(t)});Me("#search-form").addEventListener("submit",async e=>{e.preventDefault();const n=Me("#location-search").value.trim();if(!n)return;const t=Me("#search-results");t.innerHTML='<div class="search-status">SEARCHING THE GLOBE…</div>';try{const i=await vu(n);if(!i.length){t.innerHTML='<div class="search-status">No places found. Try a nearby town or coordinates.</div>';return}t.innerHTML="";for(const a of i){const r=document.createElement("button");r.className="result",r.innerHTML=`<span>⌖</span><span>${a.name}</span><i>↗</i>`,r.onclick=()=>ii(a),t.append(r)}}catch{t.innerHTML='<div class="search-status">Location search is busy. Try coordinates like 40.7, -73.9.</div>'}});Me("#map-btn").onclick=async()=>{if(Me("#location-panel").classList.toggle("hidden"),Me("#settings-panel").classList.add("hidden"),Me("#help-panel").classList.add("hidden"),bt(),Ot)setTimeout(()=>Ot?.resize(),100);else{const[n,t]=await Promise.all([Oi(()=>import("./maplibre-gl-BT_db7in.js"),[],import.meta.url),Oi(()=>import("./maplibre-gl-worker-re4DVwB4.js"),[],import.meta.url)]);n.setWorkerUrl(t.default),Ot=new n.Map({container:"mini-map",style:"https://tiles.openfreemap.org/styles/liberty",center:[ln.lon,ln.lat],zoom:10,attributionControl:!1}),Ot.addControl(new n.NavigationControl({showCompass:!1}),"top-right"),Gi=new n.Marker({color:"#f2632b"}).setLngLat([ln.lon,ln.lat]).addTo(Ot),Ot.on("click",i=>{const a={name:`${i.lngLat.lat.toFixed(4)}, ${i.lngLat.lng.toFixed(4)}`,lat:i.lngLat.lat,lon:i.lngLat.lng};Gi?.setLngLat(i.lngLat);const r=document.createElement("button");r.className="result",r.innerHTML=`<span>⌖</span><span>Drive at ${a.name}</span><i>↗</i>`,r.onclick=()=>ii(a),Me("#search-results").replaceChildren(r)})}};Me("#settings-btn").onclick=()=>{Me("#settings-panel").classList.toggle("hidden"),Me("#location-panel").classList.add("hidden"),Me("#help-panel").classList.add("hidden"),bt()};const zi=()=>{Me("#help-panel").classList.toggle("hidden"),Me("#location-panel").classList.add("hidden"),Me("#settings-panel").classList.add("hidden"),bt()};Me("#help-btn").onclick=zi;Me("#touch-help").onclick=zi;document.querySelectorAll("[data-close]").forEach(e=>e.addEventListener("click",()=>{Me("#"+e.dataset.close).classList.add("hidden"),bt()}));const Wi=(e,n,t)=>{const i=Me("#"+e);i.oninput=()=>{const a=+i.value/(n==="scale"?10:1);ni[n]=a,Me("#"+n+"-value").textContent=t(a),n==="scale"&&Ft.root.scale.setScalar(a)}};Wi("gravity","gravity",e=>e.toFixed(0));Wi("jump","jump",e=>e.toFixed(0));Wi("scale","scale",e=>e.toFixed(1)+"×");Me("#paint").addEventListener("input",e=>Ft.setColor(e.target.value));Me("#audio-toggle").addEventListener("change",e=>{e.target.checked?nn.start():nn.mute()});function Xi(){Fe.reset(Dt,ni.scale),Ft.root.visible=!0,Vt("Truck recovered. Send it!")}function Yi(e){const n=["chase","far","hood","free"];Bt=e??n[(n.indexOf(Bt)+1)%n.length],document.querySelectorAll("[data-camera]").forEach(t=>t.classList.toggle("selected",t.dataset.camera===Bt))}function Ki(){Ut=!Ut,Ut&&ht.releaseAll(),Me("#pause-panel").classList.toggle("hidden",!Ut),bt()}Me("#reset-btn").onclick=Xi;Me("#touch-reset").onclick=()=>{nn.start(),Xi()};Me("#touch-camera").onclick=()=>Yi();Me("#touch-pause").onclick=()=>Ki();Me("#resume-btn").onclick=()=>{nn.start(),Ut=!1,yn=performance.now(),Me("#pause-panel").classList.add("hidden"),bt()};Me("#pause-btn").onclick=()=>Ki();Me("#pause-location").onclick=()=>{Me("#pause-panel").classList.add("hidden"),bt(),Me("#map-btn").click()};document.querySelectorAll("[data-camera]").forEach(e=>e.addEventListener("click",()=>Yi(e.dataset.camera)));const Cn=Me("#touch-control-mode");Cn.textContent=In?"⌨ KEYS":"◉ TOUCH";Cn.setAttribute("aria-pressed",String(!Nn.classList.contains("keyboard-controls-visible")));Cn.onclick=()=>{const e=Nn.classList.toggle("keyboard-controls-visible");Cn.innerHTML=e?"◉ <span>TOUCH</span>":"⌨ <span>KEYS</span>",Cn.setAttribute("aria-pressed",String(!e))};window.addEventListener("keydown",e=>{e.repeat||(e.key.toLowerCase()==="m"&&Me("#map-btn").click(),e.key.toLowerCase()==="c"&&Yi(),e.key.toLowerCase()==="r"&&Xi(),e.key==="Escape"&&Ki(),(e.key==="?"||e.key.toLowerCase()==="h")&&zi(),(e.key===" "||e.key.toLowerCase()==="w")&&nn.start())});document.querySelectorAll("[data-touch]").forEach(e=>{const n=e.dataset.touch;e.addEventListener("pointerdown",t=>{if(!(t.pointerType==="mouse"&&t.button!==0)){t.preventDefault(),ht.pointerDown(t.pointerId,n);try{e.setPointerCapture(t.pointerId)}catch{}nn.start()}}),e.addEventListener("pointerup",t=>{t.preventDefault(),ht.pointerUp(t.pointerId)}),e.addEventListener("pointercancel",t=>ht.pointerCancel(t.pointerId)),e.addEventListener("lostpointercapture",t=>ht.lostPointerCapture(t.pointerId))});window.addEventListener("blur",()=>ht.releaseAll());document.addEventListener("visibilitychange",()=>{yn=performance.now(),document.hidden&&(ht.releaseAll(),Ut=!0,Me("#pause-panel").classList.remove("hidden"),bt())});window.addEventListener("pointermove",e=>{Bt==="free"&&e.buttons&&(Bi-=e.movementX*.004,bn=Rt.clamp(bn-e.movementY*.003,-.3,1.1))});function Hu(e){const n=Fe.pos,t=Gr(Fe.yaw);let i,a;if(Bt==="hood")i=n.clone().add(new Pe(0,2.3,0)).addScaledVector(t,1.2),a=i.clone().addScaledVector(t,7).add(new Pe(0,.3,0));else if(Bt==="free"){const d=new Pe(Math.sin(Bi)*Math.cos(bn),Math.sin(bn),Math.cos(Bi)*Math.cos(bn));i=n.clone().add(new Pe(0,1.5,0)),a=i.clone().addScaledVector(d,-14)}else{const d=Bt==="far"?30:16,c=Bt==="far"?10:7;i=n.clone().add(new Pe(0,1.5,0)),a=n.clone().addScaledVector(t,-d).add(new Pe(0,c,0))}const r=i;$t>0&&(a.x+=(Math.random()-.5)*$t,a.y+=(Math.random()-.5)*$t,$t=Math.max(0,$t-e*1.3)),mn.position.lerp(a,1-Math.exp(-5*e)),mn.lookAt(r)}function zr(e){requestAnimationFrame(zr);const n=Math.min((e-yn)/1e3,.045);if(yn=e,!Ut){const t=ht.update();Fe.update(n,t,Dt,Ft,ni);const i=jt.step(Fe.pos,Fe.yaw,n);i&&(Hi++,jt.removeBuilding(i),Ht.break(i),Rn.burst(new Pe(i.x,Fe.pos.y,i.z),32,16749652),Fe.vel.add(new Pe((Fe.pos.x-i.x)*3,7,(Fe.pos.z-i.z)*3)),$t=.5,Vt("CRUNCH! Structure demolished.")),Rn.dust(Fe.pos.clone().add(new Pe(0,-1,0)),Fe.speed),Rn.update(n),nn.update(Fe.speed,t.nitro&&Fe.nitro>0),Hu(n)}Me("#speed").textContent=String(Math.round(Fe.speed*3.6)).padStart(3,"0"),Me("#speed-bar").style.width=`${Math.min(100,Fe.speed/30*100)}%`,Me("#nitro-bar").style.width=`${Fe.nitro}%`,Me("#nitro-state").textContent=Fe.nitro>5?"READY TO BURN":"RECHARGING",yt.render(It,mn),Ai++,e-xi>=1e3&&(window.__monsterMapMetrics={fps:Math.round(Ai*1e3/(e-xi)),drawCalls:yt.info.render.calls,speed:Fe.speed,position:[Fe.pos.x,Fe.pos.y,Fe.pos.z],destroyed:Hi,yaw:Fe.yaw,steer:ht.state.steer,throttle:ht.state.throttle,nitro:ht.state.nitro,jump:ht.state.jump,grounded:Fe.grounded,activeTouchActions:ht.touches.size,frontWheelAngles:Ft.frontWheels.map(t=>t.rotation.y),rearWheelAngles:Ft.wheels.filter(t=>!Ft.frontWheels.includes(t)).map(t=>t.rotation.y),wheelContacts:Fe.wheelContacts.filter(t=>t.contact).length,averageCompression:Fe.wheelContacts.reduce((t,i)=>t+i.compression,0)/Math.max(1,Fe.wheelContacts.length),contactPitch:Fe.contactPitch,contactRoll:Fe.contactRoll,terrainOriginHeight:Dt.heightAt(0,0)},Ai=0,xi=e)}function ai(){const e=Vr();yt.setPixelRatio(Math.min(devicePixelRatio||1,Hr)),yt.setSize(e.width,e.height),mn.aspect=e.width/Math.max(1,e.height),mn.updateProjectionMatrix(),Ot?.resize()}window.addEventListener("resize",ai);window.addEventListener("orientationchange",()=>setTimeout(ai,180));window.visualViewport?.addEventListener("resize",ai);const Wr=Me("#game");Wr.addEventListener("webglcontextlost",e=>{e.preventDefault(),ht.releaseAll(),Ut=!0,Me("#pause-panel").classList.remove("hidden"),bt(),Vt("Graphics paused. Return to the game when ready.")});Wr.addEventListener("webglcontextrestored",()=>{yn=performance.now(),ai(),Vt("Graphics restored.")});await ii(ln);requestAnimationFrame(zr);
