const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./collision-world-DeM6Yckj.js","./three.core-By0lf9Pu.js"])))=>i.map(i=>d[i]);
import{c as nl,N as ln,S as Ja,C as $e,F as ls,M as Nt,V as ne,R as il,a as Rt,w as Pa,W as br,b as Fn,d as vt,L as Mn,H as zi,U as wn,D as It,B as yt,e as ai,f as Wi,p as al,g as ri,h as On,i as dt,O as rl,P as jn,j as er,k as cn,E as ol,l as ut,A as sl,m as ta,n as Xt,o as Oi,q as tr,r as oi,s as si,t as cs,u as ll,v as nn,x as Tn,y as Xi,z as dn,G as Ft,I as En,J as Dn,K as Bi,Q as cl,T as dl,X as qn,Y as ul,Z as fl,_ as hl,$ as pl,a0 as ml,a1 as gl,a2 as vl,a3 as _l,a4 as Sl,a5 as Ml,a6 as El,a7 as xl,a8 as Tl,a9 as bl,aa as Al,ab as Rl,ac as wl,ad as ds,ae as na,af as mi,ag as Cl,ah as Jn,ai as yl,aj as Pl,ak as Ll,al as Dl,am as us,an as Ul,ao as Il,ap as Nl,aq as Fl,ar as Ke,as as Ol,at as Bl,au as Gl,av as fs,aw as Qt,ax as Gi,ay as hs,az as ps,aA as ms,aB as gs,aC as kl,aD as Hl,aE as Vl,aF as zl,aG as vs,aH as xn,aI as Wl,aJ as Xl,aK as ql,aL as _s,aM as Yl,aN as Ss,aO as Ms,aP as ia,aQ as aa,aR as ra,aS as oa,aT as ot,aU as Ar,aV as Rr,aW as wr,aX as Cr,aY as yr,aZ as Pr,a_ as Lr,a$ as Dr,b0 as Ur,b1 as Ir,b2 as Nr,b3 as Fr,b4 as Or,b5 as Br,b6 as Gr,b7 as kr,b8 as Hr,b9 as Vr,ba as zr,bb as Wr,bc as Xr,bd as qr,be as Yr,bf as Kr,bg as $r,bh as Zr,bi as Qr,bj as jr,bk as La,bl as Da,bm as Ua,bn as Ia,bo as Na,bp as Fa,bq as Oa,br as Kl,bs as Jr,bt as $l,bu as Pi,bv as Zl,bw as eo,bx as to,by as no,bz as ki,bA as Ba,bB as Ql,bC as Es,bD as jl,bE as Jl,bF as ec,bG as xs,bH as io,bI as Wt,bJ as ao,bK as Ts,bL as tc,bM as nc,bN as ic,bO as ro,bP as At,bQ as ac,bR as bs,bS as rc,bT as oc,bU as sc,bV as As,bW as lc,bX as cc,bY as dc,bZ as uc,b_ as fc,b$ as hc,c0 as pc,c1 as mc,c2 as gc,c3 as vc,c4 as _c,c5 as Sc,c6 as qt,c7 as xt,c8 as st,c9 as Hi,ca as Ga,cb as Rs,cc as Mc,cd as Ec,ce as ws,cf as Bt,cg as ka,ch as Li,ci as oo,cj as jt,ck as xc,cl as so,cm as Tc,cn as sa,co as lo,cp as gi,cq as bc,cr as Ac,cs as Rc,ct as wc,cu as Cs,cv as Cc,cw as yc,cx as Pc,cy as Lc,cz as Dc}from"./three.core-By0lf9Pu.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const Uc="modulepreload",Ic=function(e,n){return new URL(e,n).href},co={},Ha=function(n,t,i){let r=Promise.resolve();if(t&&t.length>0){let o=function(d){return Promise.all(d.map(h=>Promise.resolve(h).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const s=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),p=c?.nonce||c?.getAttribute("nonce");r=o(t.map(d=>{if(d=Ic(d,i),d in co)return;co[d]=!0;const h=d.endsWith(".css"),g=h?'[rel="stylesheet"]':"";if(!!i)for(let E=s.length-1;E>=0;E--){const f=s[E];if(f.href===d&&(!h||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${g}`))return;const M=document.createElement("link");if(M.rel=h?"stylesheet":Uc,h||(M.as="script"),M.crossOrigin="",M.href=d,p&&M.setAttribute("nonce",p),document.head.appendChild(M),h)return new Promise((E,f)=>{M.addEventListener("load",E),M.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${d}`)))})}))}function a(o){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o}return r.then(o=>{for(const s of o||[])s.status==="rejected"&&a(s.reason);return n().catch(a)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ys(){let e=null,n=!1,t=null,i=null;function r(a,o){t(a,o),i=e.requestAnimationFrame(r)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(r),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(a){t=a},setContext:function(a){e=a}}}function Nc(e){const n=new WeakMap;function t(s,c){const p=s.array,d=s.usage,h=p.byteLength,g=e.createBuffer();e.bindBuffer(c,g),e.bufferData(c,p,d),s.onUploadCallback();let m;if(p instanceof Float32Array)m=e.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)m=e.HALF_FLOAT;else if(p instanceof Uint16Array)s.isFloat16BufferAttribute?m=e.HALF_FLOAT:m=e.UNSIGNED_SHORT;else if(p instanceof Int16Array)m=e.SHORT;else if(p instanceof Uint32Array)m=e.UNSIGNED_INT;else if(p instanceof Int32Array)m=e.INT;else if(p instanceof Int8Array)m=e.BYTE;else if(p instanceof Uint8Array)m=e.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)m=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:m,bytesPerElement:p.BYTES_PER_ELEMENT,version:s.version,size:h}}function i(s,c,p){const d=c.array,h=c.updateRanges;if(e.bindBuffer(p,s),h.length===0)e.bufferSubData(p,0,d);else{h.sort((m,M)=>m.start-M.start);let g=0;for(let m=1;m<h.length;m++){const M=h[g],E=h[m];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++g,h[g]=E)}h.length=g+1;for(let m=0,M=h.length;m<M;m++){const E=h[m];e.bufferSubData(p,E.start*d.BYTES_PER_ELEMENT,d,E.start,E.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(s){return s.isInterleavedBufferAttribute&&(s=s.data),n.get(s)}function a(s){s.isInterleavedBufferAttribute&&(s=s.data);const c=n.get(s);c&&(e.deleteBuffer(c.buffer),n.delete(s))}function o(s,c){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const d=n.get(s);(!d||d.version<s.version)&&n.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const p=n.get(s);if(p===void 0)n.set(s,t(s,c));else if(p.version<s.version){if(p.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(p.buffer,s,c),p.version=s.version}}return{get:r,remove:a,update:o}}var Fc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Oc=`#ifdef USE_ALPHAHASH
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
#endif`,Bc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vc=`#ifdef USE_AOMAP
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
#endif`,zc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wc=`#ifdef USE_BATCHING
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
#endif`,Xc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$c=`#ifdef USE_IRIDESCENCE
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
#endif`,Zc=`#ifdef USE_BUMPMAP
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
#endif`,Qc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
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
#endif`,rd=`#define PI 3.141592653589793
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
} // validated`,od=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sd=`vec3 transformedNormal = objectNormal;
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
#endif`,ld=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ud=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fd="gl_FragColor = linearToOutputTexel( gl_FragColor );",hd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pd=`#ifdef USE_ENVMAP
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
#endif`,md=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gd=`#ifdef USE_ENVMAP
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
#endif`,vd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_d=`#ifdef USE_ENVMAP
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
#endif`,Sd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Md=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ed=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Td=`#ifdef USE_GRADIENTMAP
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
}`,bd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ad=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wd=`uniform bool receiveShadow;
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
#endif`,Cd=`#ifdef USE_ENVMAP
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
#endif`,yd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ld=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ud=`PhysicalMaterial material;
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
#endif`,Id=`struct PhysicalMaterial {
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
}`,Nd=`
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
#endif`,Fd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Od=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xd=`#if defined( USE_POINTS_UV )
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
#endif`,qd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$d=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qd=`#ifdef USE_MORPHTARGETS
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
#endif`,jd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,eu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,au=`#ifdef USE_NORMALMAP
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
#endif`,ru=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ou=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,su=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,du=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_u=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Su=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mu=`float getShadowMask() {
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
}`,Eu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xu=`#ifdef USE_SKINNING
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
#endif`,Tu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bu=`#ifdef USE_SKINNING
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
#endif`,Au=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ru=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yu=`#ifdef USE_TRANSMISSION
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
#endif`,Pu=`#ifdef USE_TRANSMISSION
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
#endif`,Lu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Du=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fu=`uniform sampler2D t2D;
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
}`,Ou=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Gu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ku=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hu=`#include <common>
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
}`,Vu=`#if DEPTH_PACKING == 3200
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
}`,zu=`#define DISTANCE
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
}`,Wu=`#define DISTANCE
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
}`,Xu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yu=`uniform float scale;
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
}`,Ku=`uniform vec3 diffuse;
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
}`,$u=`#include <common>
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
}`,Zu=`uniform vec3 diffuse;
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
}`,Qu=`#define LAMBERT
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
}`,ju=`#define LAMBERT
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
}`,Ju=`#define MATCAP
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
}`,ef=`#define MATCAP
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
}`,tf=`#define NORMAL
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
}`,nf=`#define NORMAL
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
}`,af=`#define PHONG
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
}`,rf=`#define PHONG
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
}`,of=`#define STANDARD
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
}`,sf=`#define STANDARD
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
}`,lf=`#define TOON
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
}`,cf=`#define TOON
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
}`,df=`uniform float size;
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
}`,uf=`uniform vec3 diffuse;
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
}`,ff=`#include <common>
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
}`,hf=`uniform vec3 color;
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
}`,pf=`uniform float rotation;
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
}`,mf=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:Fc,alphahash_pars_fragment:Oc,alphamap_fragment:Bc,alphamap_pars_fragment:Gc,alphatest_fragment:kc,alphatest_pars_fragment:Hc,aomap_fragment:Vc,aomap_pars_fragment:zc,batching_pars_vertex:Wc,batching_vertex:Xc,begin_vertex:qc,beginnormal_vertex:Yc,bsdfs:Kc,iridescence_fragment:$c,bumpmap_pars_fragment:Zc,clipping_planes_fragment:Qc,clipping_planes_pars_fragment:jc,clipping_planes_pars_vertex:Jc,clipping_planes_vertex:ed,color_fragment:td,color_pars_fragment:nd,color_pars_vertex:id,color_vertex:ad,common:rd,cube_uv_reflection_fragment:od,defaultnormal_vertex:sd,displacementmap_pars_vertex:ld,displacementmap_vertex:cd,emissivemap_fragment:dd,emissivemap_pars_fragment:ud,colorspace_fragment:fd,colorspace_pars_fragment:hd,envmap_fragment:pd,envmap_common_pars_fragment:md,envmap_pars_fragment:gd,envmap_pars_vertex:vd,envmap_physical_pars_fragment:Cd,envmap_vertex:_d,fog_vertex:Sd,fog_pars_vertex:Md,fog_fragment:Ed,fog_pars_fragment:xd,gradientmap_pars_fragment:Td,lightmap_pars_fragment:bd,lights_lambert_fragment:Ad,lights_lambert_pars_fragment:Rd,lights_pars_begin:wd,lights_toon_fragment:yd,lights_toon_pars_fragment:Pd,lights_phong_fragment:Ld,lights_phong_pars_fragment:Dd,lights_physical_fragment:Ud,lights_physical_pars_fragment:Id,lights_fragment_begin:Nd,lights_fragment_maps:Fd,lights_fragment_end:Od,logdepthbuf_fragment:Bd,logdepthbuf_pars_fragment:Gd,logdepthbuf_pars_vertex:kd,logdepthbuf_vertex:Hd,map_fragment:Vd,map_pars_fragment:zd,map_particle_fragment:Wd,map_particle_pars_fragment:Xd,metalnessmap_fragment:qd,metalnessmap_pars_fragment:Yd,morphinstance_vertex:Kd,morphcolor_vertex:$d,morphnormal_vertex:Zd,morphtarget_pars_vertex:Qd,morphtarget_vertex:jd,normal_fragment_begin:Jd,normal_fragment_maps:eu,normal_pars_fragment:tu,normal_pars_vertex:nu,normal_vertex:iu,normalmap_pars_fragment:au,clearcoat_normal_fragment_begin:ru,clearcoat_normal_fragment_maps:ou,clearcoat_pars_fragment:su,iridescence_pars_fragment:lu,opaque_fragment:cu,packing:du,premultiplied_alpha_fragment:uu,project_vertex:fu,dithering_fragment:hu,dithering_pars_fragment:pu,roughnessmap_fragment:mu,roughnessmap_pars_fragment:gu,shadowmap_pars_fragment:vu,shadowmap_pars_vertex:_u,shadowmap_vertex:Su,shadowmask_pars_fragment:Mu,skinbase_vertex:Eu,skinning_pars_vertex:xu,skinning_vertex:Tu,skinnormal_vertex:bu,specularmap_fragment:Au,specularmap_pars_fragment:Ru,tonemapping_fragment:wu,tonemapping_pars_fragment:Cu,transmission_fragment:yu,transmission_pars_fragment:Pu,uv_pars_fragment:Lu,uv_pars_vertex:Du,uv_vertex:Uu,worldpos_vertex:Iu,background_vert:Nu,background_frag:Fu,backgroundCube_vert:Ou,backgroundCube_frag:Bu,cube_vert:Gu,cube_frag:ku,depth_vert:Hu,depth_frag:Vu,distanceRGBA_vert:zu,distanceRGBA_frag:Wu,equirect_vert:Xu,equirect_frag:qu,linedashed_vert:Yu,linedashed_frag:Ku,meshbasic_vert:$u,meshbasic_frag:Zu,meshlambert_vert:Qu,meshlambert_frag:ju,meshmatcap_vert:Ju,meshmatcap_frag:ef,meshnormal_vert:tf,meshnormal_frag:nf,meshphong_vert:af,meshphong_frag:rf,meshphysical_vert:of,meshphysical_frag:sf,meshtoon_vert:lf,meshtoon_frag:cf,points_vert:df,points_frag:uf,shadow_vert:ff,shadow_frag:hf,sprite_vert:pf,sprite_frag:mf},fe={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},zt={basic:{uniforms:At([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:At([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new $e(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:At([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:At([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:At([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new $e(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:At([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:At([fe.points,fe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:At([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:At([fe.common,fe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:At([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:At([fe.sprite,fe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:At([fe.common,fe.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:At([fe.lights,fe.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};zt.physical={uniforms:At([zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const vi={r:0,b:0,g:0},mn=new Wt,gf=new Nt;function vf(e,n,t,i,r,a,o){const s=new $e(0);let c=a===!0?0:1,p,d,h=null,g=0,m=null;function M(A){let x=A.isScene===!0?A.background:null;return x&&x.isTexture&&(x=(A.backgroundBlurriness>0?t:n).get(x)),x}function E(A){let x=!1;const C=M(A);C===null?l(s,c):C&&C.isColor&&(l(C,1),x=!0);const R=e.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(e.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function f(A,x){const C=M(x);C&&(C.isCubeTexture||C.mapping===Xi)?(d===void 0&&(d=new dt(new cn(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:io(zt.backgroundCube.uniforms),vertexShader:zt.backgroundCube.vertexShader,fragmentShader:zt.backgroundCube.fragmentShader,side:yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,D,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),mn.copy(x.backgroundRotation),mn.x*=-1,mn.y*=-1,mn.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(mn.y*=-1,mn.z*=-1),d.material.uniforms.envMap.value=C,d.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(gf.makeRotationFromEuler(mn)),d.material.toneMapped=vt.getTransfer(C.colorSpace)!==ot,(h!==C||g!==C.version||m!==e.toneMapping)&&(d.material.needsUpdate=!0,h=C,g=C.version,m=e.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new dt(new gs(2,2),new nn({name:"BackgroundMaterial",uniforms:io(zt.background.uniforms),vertexShader:zt.background.vertexShader,fragmentShader:zt.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,p.material.toneMapped=vt.getTransfer(C.colorSpace)!==ot,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||g!==C.version||m!==e.toneMapping)&&(p.material.needsUpdate=!0,h=C,g=C.version,m=e.toneMapping),p.layers.enableAll(),A.unshift(p,p.geometry,p.material,0,0,null))}function l(A,x){A.getRGB(vi,xs(e)),i.buffers.color.setClear(vi.r,vi.g,vi.b,x,o)}function b(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return s},setClearColor:function(A,x=1){s.set(A),c=x,l(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(A){c=A,l(s,c)},render:E,addToRenderList:f,dispose:b}}function _f(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},r=g(null);let a=r,o=!1;function s(S,P,O,W,X){let $=!1;const q=h(W,O,P);a!==q&&(a=q,p(a.object)),$=m(S,W,O,X),$&&M(S,W,O,X),X!==null&&n.update(X,e.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,x(S,P,O,W),X!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(X).buffer))}function c(){return e.createVertexArray()}function p(S){return e.bindVertexArray(S)}function d(S){return e.deleteVertexArray(S)}function h(S,P,O){const W=O.wireframe===!0;let X=i[S.id];X===void 0&&(X={},i[S.id]=X);let $=X[P.id];$===void 0&&($={},X[P.id]=$);let q=$[W];return q===void 0&&(q=g(c()),$[W]=q),q}function g(S){const P=[],O=[],W=[];for(let X=0;X<t;X++)P[X]=0,O[X]=0,W[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:W,object:S,attributes:{},index:null}}function m(S,P,O,W){const X=a.attributes,$=P.attributes;let q=0;const le=O.getAttributes();for(const V in le)if(le[V].location>=0){const Re=X[V];let we=$[V];if(we===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(we=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(we=S.instanceColor)),Re===void 0||Re.attribute!==we||we&&Re.data!==we.data)return!0;q++}return a.attributesNum!==q||a.index!==W}function M(S,P,O,W){const X={},$=P.attributes;let q=0;const le=O.getAttributes();for(const V in le)if(le[V].location>=0){let Re=$[V];Re===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(Re=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(Re=S.instanceColor));const we={};we.attribute=Re,Re&&Re.data&&(we.data=Re.data),X[V]=we,q++}a.attributes=X,a.attributesNum=q,a.index=W}function E(){const S=a.newAttributes;for(let P=0,O=S.length;P<O;P++)S[P]=0}function f(S){l(S,0)}function l(S,P){const O=a.newAttributes,W=a.enabledAttributes,X=a.attributeDivisors;O[S]=1,W[S]===0&&(e.enableVertexAttribArray(S),W[S]=1),X[S]!==P&&(e.vertexAttribDivisor(S,P),X[S]=P)}function b(){const S=a.newAttributes,P=a.enabledAttributes;for(let O=0,W=P.length;O<W;O++)P[O]!==S[O]&&(e.disableVertexAttribArray(O),P[O]=0)}function A(S,P,O,W,X,$,q){q===!0?e.vertexAttribIPointer(S,P,O,X,$):e.vertexAttribPointer(S,P,O,W,X,$)}function x(S,P,O,W){E();const X=W.attributes,$=O.getAttributes(),q=P.defaultAttributeValues;for(const le in $){const V=$[le];if(V.location>=0){let ve=X[le];if(ve===void 0&&(le==="instanceMatrix"&&S.instanceMatrix&&(ve=S.instanceMatrix),le==="instanceColor"&&S.instanceColor&&(ve=S.instanceColor)),ve!==void 0){const Re=ve.normalized,we=ve.itemSize,Ve=n.get(ve);if(Ve===void 0)continue;const We=Ve.buffer,Qe=Ve.type,Xe=Ve.bytesPerElement,B=Qe===e.INT||Qe===e.UNSIGNED_INT||ve.gpuType===vs;if(ve.isInterleavedBufferAttribute){const K=ve.data,me=K.stride,Le=ve.offset;if(K.isInstancedInterleavedBuffer){for(let Ce=0;Ce<V.locationSize;Ce++)l(V.location+Ce,K.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Ce=0;Ce<V.locationSize;Ce++)f(V.location+Ce);e.bindBuffer(e.ARRAY_BUFFER,We);for(let Ce=0;Ce<V.locationSize;Ce++)A(V.location+Ce,we/V.locationSize,Qe,Re,me*Xe,(Le+we/V.locationSize*Ce)*Xe,B)}else{if(ve.isInstancedBufferAttribute){for(let K=0;K<V.locationSize;K++)l(V.location+K,ve.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let K=0;K<V.locationSize;K++)f(V.location+K);e.bindBuffer(e.ARRAY_BUFFER,We);for(let K=0;K<V.locationSize;K++)A(V.location+K,we/V.locationSize,Qe,Re,we*Xe,we/V.locationSize*K*Xe,B)}}else if(q!==void 0){const Re=q[le];if(Re!==void 0)switch(Re.length){case 2:e.vertexAttrib2fv(V.location,Re);break;case 3:e.vertexAttrib3fv(V.location,Re);break;case 4:e.vertexAttrib4fv(V.location,Re);break;default:e.vertexAttrib1fv(V.location,Re)}}}}b()}function C(){U();for(const S in i){const P=i[S];for(const O in P){const W=P[O];for(const X in W)d(W[X].object),delete W[X];delete P[O]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const O in P){const W=P[O];for(const X in W)d(W[X].object),delete W[X];delete P[O]}delete i[S.id]}function D(S){for(const P in i){const O=i[P];if(O[S.id]===void 0)continue;const W=O[S.id];for(const X in W)d(W[X].object),delete W[X];delete O[S.id]}}function U(){_(),o=!0,a!==r&&(a=r,p(a.object))}function _(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:s,reset:U,resetDefaultState:_,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:D,initAttributes:E,enableAttribute:f,disableUnusedAttributes:b}}function Sf(e,n,t){let i;function r(p){i=p}function a(p,d){e.drawArrays(i,p,d),t.update(d,i,1)}function o(p,d,h){h!==0&&(e.drawArraysInstanced(i,p,d,h),t.update(d,i,h))}function s(p,d,h){if(h===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,p,0,d,0,h);let m=0;for(let M=0;M<h;M++)m+=d[M];t.update(m,i,1)}function c(p,d,h,g){if(h===0)return;const m=n.get("WEBGL_multi_draw");if(m===null)for(let M=0;M<p.length;M++)o(p[M],d[M],g[M]);else{m.multiDrawArraysInstancedWEBGL(i,p,0,d,0,g,0,h);let M=0;for(let E=0;E<h;E++)M+=d[E]*g[E];t.update(M,i,1)}}this.setMode=r,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function Mf(e,n,t,i){let r;function a(){if(r!==void 0)return r;if(n.has("EXT_texture_filter_anisotropic")===!0){const D=n.get("EXT_texture_filter_anisotropic");r=e.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==Xt&&i.convert(D)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(D){const U=D===zi&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(D!==wn&&i.convert(D)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==xn&&!U)}function c(D){if(D==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const d=c(p);d!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",d,"instead."),p=d);const h=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),m=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=e.getParameter(e.MAX_TEXTURE_SIZE),f=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),l=e.getParameter(e.MAX_VERTEX_ATTRIBS),b=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),A=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),C=M>0,R=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:p,logarithmicDepthBuffer:h,reversedDepthBuffer:g,maxTextures:m,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:f,maxAttributes:l,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:x,vertexTextures:C,maxSamples:R}}function Ef(e){const n=this;let t=null,i=0,r=!1,a=!1;const o=new Fl,s=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,g){const m=h.length!==0||g||i!==0||r;return r=g,i=h.length,m},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,g){t=d(h,g,0)},this.setState=function(h,g,m){const M=h.clippingPlanes,E=h.clipIntersection,f=h.clipShadows,l=e.get(h);if(!r||M===null||M.length===0||a&&!f)a?d(null):p();else{const b=a?0:i,A=b*4;let x=l.clippingState||null;c.value=x,x=d(M,g,A,m);for(let C=0;C!==A;++C)x[C]=t[C];l.clippingState=x,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=b}};function p(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function d(h,g,m,M){const E=h!==null?h.length:0;let f=null;if(E!==0){if(f=c.value,M!==!0||f===null){const l=m+E*4,b=g.matrixWorldInverse;s.getNormalMatrix(b),(f===null||f.length<l)&&(f=new Float32Array(l));for(let A=0,x=m;A!==E;++A,x+=4)o.copy(h[A]).applyMatrix4(b,s),o.normal.toArray(f,x),f[x+3]=o.constant}c.value=f,c.needsUpdate=!0}return n.numPlanes=E,n.numIntersection=0,f}}function xf(e){let n=new WeakMap;function t(o,s){return s===ki?o.mapping=ri:s===Ba&&(o.mapping=On),o}function i(o){if(o&&o.isTexture){const s=o.mapping;if(s===ki||s===Ba)if(n.has(o)){const c=n.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const p=new Ql(c.height);return p.fromEquirectangularTexture(e,o),n.set(o,p),o.addEventListener("dispose",r),t(p.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const c=n.get(s);c!==void 0&&(n.delete(s),c.dispose())}function a(){n=new WeakMap}return{get:i,dispose:a}}const Nn=4,uo=[.125,.215,.35,.446,.526,.582],Sn=20,la=new rl,fo=new $e;let ca=null,da=0,ua=0,fa=!1;const _n=(1+Math.sqrt(5))/2,Ln=1/_n,ho=[new ne(-_n,Ln,0),new ne(_n,Ln,0),new ne(-Ln,0,_n),new ne(Ln,0,_n),new ne(0,_n,-Ln),new ne(0,_n,Ln),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)],Tf=new ne;class Va{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,t=0,i=.1,r=100,a={}){const{size:o=256,position:s=Tf}=a;ca=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(n,i,r,c,s),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=go(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(ca,da,ua),this._renderer.xr.enabled=fa,n.scissorTest=!1,_i(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===ri||n.mapping===On?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),ca=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:zi,format:Xt,colorSpace:Wi,depthBuffer:!1},r=po(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=po(n,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bf(a)),this._blurMaterial=Af(a,n,t)}return r}_compileMaterial(n){const t=new dt(this._lodPlanes[0],n);this._renderer.compile(t,la)}_sceneToCubeUV(n,t,i,r,a){const c=new jn(90,1,t,i),p=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,g=h.autoClear,m=h.toneMapping;h.getClearColor(fo),h.toneMapping=ln,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const E=new er({name:"PMREM.Background",side:yt,depthWrite:!1,depthTest:!1}),f=new dt(new cn,E);let l=!1;const b=n.background;b?b.isColor&&(E.color.copy(b),n.background=null,l=!0):(E.color.copy(fo),l=!0);for(let A=0;A<6;A++){const x=A%3;x===0?(c.up.set(0,p[A],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x+d[A],a.y,a.z)):x===1?(c.up.set(0,0,p[A]),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y+d[A],a.z)):(c.up.set(0,p[A],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y,a.z+d[A]));const C=this._cubeSize;_i(r,x*C,A>2?C:0,C,C),h.setRenderTarget(r),l&&h.render(f,c),h.render(n,c)}f.geometry.dispose(),f.material.dispose(),h.toneMapping=m,h.autoClear=g,n.background=b}_textureToCubeUV(n,t){const i=this._renderer,r=n.mapping===ri||n.mapping===On;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=go()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mo());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new dt(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=n;const c=this._cubeSize;_i(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,la)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=ho[(r-a-1)%ho.length];this._blur(n,a-1,a,o,s)}t.autoClear=i}_blur(n,t,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(n,o,t,i,r,"latitudinal",a),this._halfBlur(o,n,i,i,r,"longitudinal",a)}_halfBlur(n,t,i,r,a,o,s){const c=this._renderer,p=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new dt(this._lodPlanes[r],p),g=p.uniforms,m=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Sn-1),E=a/M,f=isFinite(a)?1+Math.floor(d*E):Sn;f>Sn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Sn}`);const l=[];let b=0;for(let D=0;D<Sn;++D){const U=D/E,_=Math.exp(-U*U/2);l.push(_),D===0?b+=_:D<f&&(b+=2*_)}for(let D=0;D<l.length;D++)l[D]=l[D]/b;g.envMap.value=n.texture,g.samples.value=f,g.weights.value=l,g.latitudinal.value=o==="latitudinal",s&&(g.poleAxis.value=s);const{_lodMax:A}=this;g.dTheta.value=M,g.mipInt.value=A-i;const x=this._sizeLods[r],C=3*x*(r>A-Nn?r-A+Nn:0),R=4*(this._cubeSize-x);_i(t,C,R,3*x,2*x),c.setRenderTarget(t),c.render(h,la)}}function bf(e){const n=[],t=[],i=[];let r=e;const a=e-Nn+1+uo.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);t.push(s);let c=1/s;o>e-Nn?c=uo[o-e+Nn-1]:o===0&&(c=0),i.push(c);const p=1/(s-2),d=-p,h=1+p,g=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,M=6,E=3,f=2,l=1,b=new Float32Array(E*M*m),A=new Float32Array(f*M*m),x=new Float32Array(l*M*m);for(let R=0;R<m;R++){const D=R%3*2/3-1,U=R>2?0:-1,_=[D,U,0,D+2/3,U,0,D+2/3,U+1,0,D,U,0,D+2/3,U+1,0,D,U+1,0];b.set(_,E*M*R),A.set(g,f*M*R);const S=[R,R,R,R,R,R];x.set(S,l*M*R)}const C=new dn;C.setAttribute("position",new Ft(b,E)),C.setAttribute("uv",new Ft(A,f)),C.setAttribute("faceIndex",new Ft(x,l)),n.push(C),r>Nn&&r--}return{lodPlanes:n,sizeLods:t,sigmas:i}}function po(e,n,t){const i=new Fn(e,n,t);return i.texture.mapping=Xi,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _i(e,n,t,i,r){e.viewport.set(n,t,i,r),e.scissor.set(n,t,i,r)}function Af(e,n,t){const i=new Float32Array(Sn),r=new ne(0,1,0);return new nn({name:"SphericalGaussianBlur",defines:{n:Sn,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:nr(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function mo(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nr(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function go(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function nr(){return`

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
	`}function Rf(e){let n=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const c=s.mapping,p=c===ki||c===Ba,d=c===ri||c===On;if(p||d){let h=n.get(s);const g=h!==void 0?h.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==g)return t===null&&(t=new Va(e)),h=p?t.fromEquirectangular(s,h):t.fromCubemap(s,h),h.texture.pmremVersion=s.pmremVersion,n.set(s,h),h.texture;if(h!==void 0)return h.texture;{const m=s.image;return p&&m&&m.height>0||d&&m&&r(m)?(t===null&&(t=new Va(e)),h=p?t.fromEquirectangular(s):t.fromCubemap(s),h.texture.pmremVersion=s.pmremVersion,n.set(s,h),s.addEventListener("dispose",a),h.texture):null}}}return s}function r(s){let c=0;const p=6;for(let d=0;d<p;d++)s[d]!==void 0&&c++;return c===p}function a(s){const c=s.target;c.removeEventListener("dispose",a);const p=n.get(c);p!==void 0&&(n.delete(c),p.dispose())}function o(){n=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function wf(e){const n={};function t(i){if(n[i]!==void 0)return n[i];let r;switch(i){case"WEBGL_depth_texture":r=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=e.getExtension(i)}return n[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Pa("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Cf(e,n,t,i){const r={},a=new WeakMap;function o(h){const g=h.target;g.index!==null&&n.remove(g.index);for(const M in g.attributes)n.remove(g.attributes[M]);g.removeEventListener("dispose",o),delete r[g.id];const m=a.get(g);m&&(n.remove(m),a.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function s(h,g){return r[g.id]===!0||(g.addEventListener("dispose",o),r[g.id]=!0,t.memory.geometries++),g}function c(h){const g=h.attributes;for(const m in g)n.update(g[m],e.ARRAY_BUFFER)}function p(h){const g=[],m=h.index,M=h.attributes.position;let E=0;if(m!==null){const b=m.array;E=m.version;for(let A=0,x=b.length;A<x;A+=3){const C=b[A+0],R=b[A+1],D=b[A+2];g.push(C,R,R,D,D,C)}}else if(M!==void 0){const b=M.array;E=M.version;for(let A=0,x=b.length/3-1;A<x;A+=3){const C=A+0,R=A+1,D=A+2;g.push(C,R,R,D,D,C)}}else return;const f=new(ic(g)?tc:nc)(g,1);f.version=E;const l=a.get(h);l&&n.remove(l),a.set(h,f)}function d(h){const g=a.get(h);if(g){const m=h.index;m!==null&&g.version<m.version&&p(h)}else p(h);return a.get(h)}return{get:s,update:c,getWireframeAttribute:d}}function yf(e,n,t){let i;function r(g){i=g}let a,o;function s(g){a=g.type,o=g.bytesPerElement}function c(g,m){e.drawElements(i,m,a,g*o),t.update(m,i,1)}function p(g,m,M){M!==0&&(e.drawElementsInstanced(i,m,a,g*o,M),t.update(m,i,M))}function d(g,m,M){if(M===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,a,g,0,M);let f=0;for(let l=0;l<M;l++)f+=m[l];t.update(f,i,1)}function h(g,m,M,E){if(M===0)return;const f=n.get("WEBGL_multi_draw");if(f===null)for(let l=0;l<g.length;l++)p(g[l]/o,m[l],E[l]);else{f.multiDrawElementsInstancedWEBGL(i,m,0,a,g,0,E,0,M);let l=0;for(let b=0;b<M;b++)l+=m[b]*E[b];t.update(l,i,1)}}this.setMode=r,this.setIndex=s,this.render=c,this.renderInstances=p,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function Pf(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(t.calls++,o){case e.TRIANGLES:t.triangles+=s*(a/3);break;case e.LINES:t.lines+=s*(a/2);break;case e.LINE_STRIP:t.lines+=s*(a-1);break;case e.LINE_LOOP:t.lines+=s*a;break;case e.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Lf(e,n,t){const i=new WeakMap,r=new Rt;function a(o,s,c){const p=o.morphTargetInfluences,d=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,h=d!==void 0?d.length:0;let g=i.get(s);if(g===void 0||g.count!==h){let _=function(){D.dispose(),i.delete(s),s.removeEventListener("dispose",_)};g!==void 0&&g.texture.dispose();const m=s.morphAttributes.position!==void 0,M=s.morphAttributes.normal!==void 0,E=s.morphAttributes.color!==void 0,f=s.morphAttributes.position||[],l=s.morphAttributes.normal||[],b=s.morphAttributes.color||[];let A=0;m===!0&&(A=1),M===!0&&(A=2),E===!0&&(A=3);let x=s.attributes.position.count*A,C=1;x>n.maxTextureSize&&(C=Math.ceil(x/n.maxTextureSize),x=n.maxTextureSize);const R=new Float32Array(x*C*4*h),D=new Es(R,x,C,h);D.type=xn,D.needsUpdate=!0;const U=A*4;for(let S=0;S<h;S++){const P=f[S],O=l[S],W=b[S],X=x*C*4*S;for(let $=0;$<P.count;$++){const q=$*U;m===!0&&(r.fromBufferAttribute(P,$),R[X+q+0]=r.x,R[X+q+1]=r.y,R[X+q+2]=r.z,R[X+q+3]=0),M===!0&&(r.fromBufferAttribute(O,$),R[X+q+4]=r.x,R[X+q+5]=r.y,R[X+q+6]=r.z,R[X+q+7]=0),E===!0&&(r.fromBufferAttribute(W,$),R[X+q+8]=r.x,R[X+q+9]=r.y,R[X+q+10]=r.z,R[X+q+11]=W.itemSize===4?r.w:1)}}g={count:h,texture:D,size:new ut(x,C)},i.set(s,g),s.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(e,"morphTexture",o.morphTexture,t);else{let m=0;for(let E=0;E<p.length;E++)m+=p[E];const M=s.morphTargetsRelative?1:1-m;c.getUniforms().setValue(e,"morphTargetBaseInfluence",M),c.getUniforms().setValue(e,"morphTargetInfluences",p)}c.getUniforms().setValue(e,"morphTargetsTexture",g.texture,t),c.getUniforms().setValue(e,"morphTargetsTextureSize",g.size)}return{update:a}}function Df(e,n,t,i){let r=new WeakMap;function a(c){const p=i.render.frame,d=c.geometry,h=n.get(c,d);if(r.get(h)!==p&&(n.update(h),r.set(h,p)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),r.get(c)!==p&&(t.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,e.ARRAY_BUFFER),r.set(c,p))),c.isSkinnedMesh){const g=c.skeleton;r.get(g)!==p&&(g.update(),r.set(g,p))}return h}function o(){r=new WeakMap}function s(c){const p=c.target;p.removeEventListener("dispose",s),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:a,dispose:o}}const Ps=new hc,vo=new cs(1,1),Ls=new Es,Ds=new fc,Us=new uc,_o=[],So=[],Mo=new Float32Array(16),Eo=new Float32Array(9),xo=new Float32Array(4);function kn(e,n,t){const i=e[0];if(i<=0||i>0)return e;const r=n*t;let a=_o[r];if(a===void 0&&(a=new Float32Array(r),_o[r]=a),n!==0){i.toArray(a,0);for(let o=1,s=0;o!==n;++o)s+=t,e[o].toArray(a,s)}return a}function St(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function Mt(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function qi(e,n){let t=So[n];t===void 0&&(t=new Int32Array(n),So[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function Uf(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function If(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(St(t,n))return;e.uniform2fv(this.addr,n),Mt(t,n)}}function Nf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(St(t,n))return;e.uniform3fv(this.addr,n),Mt(t,n)}}function Ff(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(St(t,n))return;e.uniform4fv(this.addr,n),Mt(t,n)}}function Of(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(St(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),Mt(t,n)}else{if(St(t,i))return;xo.set(i),e.uniformMatrix2fv(this.addr,!1,xo),Mt(t,i)}}function Bf(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(St(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),Mt(t,n)}else{if(St(t,i))return;Eo.set(i),e.uniformMatrix3fv(this.addr,!1,Eo),Mt(t,i)}}function Gf(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(St(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),Mt(t,n)}else{if(St(t,i))return;Mo.set(i),e.uniformMatrix4fv(this.addr,!1,Mo),Mt(t,i)}}function kf(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function Hf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(St(t,n))return;e.uniform2iv(this.addr,n),Mt(t,n)}}function Vf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(St(t,n))return;e.uniform3iv(this.addr,n),Mt(t,n)}}function zf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(St(t,n))return;e.uniform4iv(this.addr,n),Mt(t,n)}}function Wf(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function Xf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(St(t,n))return;e.uniform2uiv(this.addr,n),Mt(t,n)}}function qf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(St(t,n))return;e.uniform3uiv(this.addr,n),Mt(t,n)}}function Yf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(St(t,n))return;e.uniform4uiv(this.addr,n),Mt(t,n)}}function Kf(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);let a;this.type===e.SAMPLER_2D_SHADOW?(vo.compareFunction=us,a=vo):a=Ps,t.setTexture2D(n||a,r)}function $f(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(n||Ds,r)}function Zf(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(n||Us,r)}function Qf(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(n||Ls,r)}function jf(e){switch(e){case 5126:return Uf;case 35664:return If;case 35665:return Nf;case 35666:return Ff;case 35674:return Of;case 35675:return Bf;case 35676:return Gf;case 5124:case 35670:return kf;case 35667:case 35671:return Hf;case 35668:case 35672:return Vf;case 35669:case 35673:return zf;case 5125:return Wf;case 36294:return Xf;case 36295:return qf;case 36296:return Yf;case 35678:case 36198:case 36298:case 36306:case 35682:return Kf;case 35679:case 36299:case 36307:return $f;case 35680:case 36300:case 36308:case 36293:return Zf;case 36289:case 36303:case 36311:case 36292:return Qf}}function Jf(e,n){e.uniform1fv(this.addr,n)}function eh(e,n){const t=kn(n,this.size,2);e.uniform2fv(this.addr,t)}function th(e,n){const t=kn(n,this.size,3);e.uniform3fv(this.addr,t)}function nh(e,n){const t=kn(n,this.size,4);e.uniform4fv(this.addr,t)}function ih(e,n){const t=kn(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function ah(e,n){const t=kn(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function rh(e,n){const t=kn(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function oh(e,n){e.uniform1iv(this.addr,n)}function sh(e,n){e.uniform2iv(this.addr,n)}function lh(e,n){e.uniform3iv(this.addr,n)}function ch(e,n){e.uniform4iv(this.addr,n)}function dh(e,n){e.uniform1uiv(this.addr,n)}function uh(e,n){e.uniform2uiv(this.addr,n)}function fh(e,n){e.uniform3uiv(this.addr,n)}function hh(e,n){e.uniform4uiv(this.addr,n)}function ph(e,n,t){const i=this.cache,r=n.length,a=qi(t,r);St(i,a)||(e.uniform1iv(this.addr,a),Mt(i,a));for(let o=0;o!==r;++o)t.setTexture2D(n[o]||Ps,a[o])}function mh(e,n,t){const i=this.cache,r=n.length,a=qi(t,r);St(i,a)||(e.uniform1iv(this.addr,a),Mt(i,a));for(let o=0;o!==r;++o)t.setTexture3D(n[o]||Ds,a[o])}function gh(e,n,t){const i=this.cache,r=n.length,a=qi(t,r);St(i,a)||(e.uniform1iv(this.addr,a),Mt(i,a));for(let o=0;o!==r;++o)t.setTextureCube(n[o]||Us,a[o])}function vh(e,n,t){const i=this.cache,r=n.length,a=qi(t,r);St(i,a)||(e.uniform1iv(this.addr,a),Mt(i,a));for(let o=0;o!==r;++o)t.setTexture2DArray(n[o]||Ls,a[o])}function _h(e){switch(e){case 5126:return Jf;case 35664:return eh;case 35665:return th;case 35666:return nh;case 35674:return ih;case 35675:return ah;case 35676:return rh;case 5124:case 35670:return oh;case 35667:case 35671:return sh;case 35668:case 35672:return lh;case 35669:case 35673:return ch;case 5125:return dh;case 36294:return uh;case 36295:return fh;case 36296:return hh;case 35678:case 36198:case 36298:case 36306:case 35682:return ph;case 35679:case 36299:case 36307:return mh;case 35680:case 36300:case 36308:case 36293:return gh;case 36289:case 36303:case 36311:case 36292:return vh}}class Sh{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=jf(t.type)}}class Mh{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_h(t.type)}}class Eh{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(n,t[s.id],i)}}}const ha=/(\w+)(\])?(\[|\.)?/g;function To(e,n){e.seq.push(n),e.map[n.id]=n}function xh(e,n,t){const i=e.name,r=i.length;for(ha.lastIndex=0;;){const a=ha.exec(i),o=ha.lastIndex;let s=a[1];const c=a[2]==="]",p=a[3];if(c&&(s=s|0),p===void 0||p==="["&&o+2===r){To(t,p===void 0?new Sh(s,e,n):new Mh(s,e,n));break}else{let h=t.map[s];h===void 0&&(h=new Eh(s),To(t,h)),t=h}}}class Di{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=n.getActiveUniform(t,r),o=n.getUniformLocation(t,a.name);xh(a,o,this)}}setValue(n,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(n,i,r)}setOptional(n,t,i){const r=t[i];r!==void 0&&this.setValue(n,i,r)}static upload(n,t,i,r){for(let a=0,o=t.length;a!==o;++a){const s=t[a],c=i[s.id];c.needsUpdate!==!1&&s.setValue(n,c.value,r)}}static seqWithValue(n,t){const i=[];for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.id in t&&i.push(o)}return i}}function bo(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const Th=37297;let bh=0;function Ah(e,n){const t=e.split(`
`),i=[],r=Math.max(n-6,0),a=Math.min(n+6,t.length);for(let o=r;o<a;o++){const s=o+1;i.push(`${s===n?">":" "} ${s}: ${t[o]}`)}return i.join(`
`)}const Ao=new Ke;function Rh(e){vt._getMatrix(Ao,vt.workingColorSpace,e);const n=`mat3( ${Ao.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(e)){case Ts:return[n,"LinearTransferOETF"];case ot:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function Ro(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),a=(e.getShaderInfoLog(n)||"").trim();if(i&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const s=parseInt(o[1]);return t.toUpperCase()+`

`+a+`

`+Ah(e.getShaderSource(n),s)}else return a}function wh(e,n){const t=Rh(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ch(e,n){let t;switch(n){case dc:t="Linear";break;case cc:t="Reinhard";break;case lc:t="Cineon";break;case As:t="ACESFilmic";break;case sc:t="AgX";break;case oc:t="Neutral";break;case rc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),t="Linear"}return"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Si=new ne;function yh(){vt.getLuminanceCoefficients(Si);const e=Si.x.toFixed(4),n=Si.y.toFixed(4),t=Si.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ph(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($n).join(`
`)}function Lh(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function Dh(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=e.getActiveAttrib(n,r),o=a.name;let s=1;a.type===e.FLOAT_MAT2&&(s=2),a.type===e.FLOAT_MAT3&&(s=3),a.type===e.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:e.getAttribLocation(n,o),locationSize:s}}return t}function $n(e){return e!==""}function wo(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function Co(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const Uh=/^[ \t]*#include +<([\w\d./]+)>/gm;function za(e){return e.replace(Uh,Nh)}const Ih=new Map;function Nh(e,n){let t=Be[n];if(t===void 0){const i=Ih.get(n);if(i!==void 0)t=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return za(t)}const Fh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yo(e){return e.replace(Fh,Oh)}function Oh(e,n,t,i){let r="";for(let a=parseInt(n);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Po(e){let n=`precision ${e.precision} float;
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
#define LOW_PRECISION`),n}function Bh(e){let n="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===fs?n="SHADOWMAP_TYPE_PCF":e.shadowMapType===bs?n="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Qt&&(n="SHADOWMAP_TYPE_VSM"),n}function Gh(e){let n="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case ri:case On:n="ENVMAP_TYPE_CUBE";break;case Xi:n="ENVMAP_TYPE_CUBE_UV";break}return n}function kh(e){let n="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case On:n="ENVMAP_MODE_REFRACTION";break}return n}function Hh(e){let n="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case vc:n="ENVMAP_BLENDING_MULTIPLY";break;case gc:n="ENVMAP_BLENDING_MIX";break;case mc:n="ENVMAP_BLENDING_ADD";break}return n}function Vh(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function zh(e,n,t,i){const r=e.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const c=Bh(t),p=Gh(t),d=kh(t),h=Hh(t),g=Vh(t),m=Ph(t),M=Lh(a),E=r.createProgram();let f,l,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter($n).join(`
`),f.length>0&&(f+=`
`),l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter($n).join(`
`),l.length>0&&(l+=`
`)):(f=[Po(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($n).join(`
`),l=[Po(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ln?"#define TONE_MAPPING":"",t.toneMapping!==ln?Be.tonemapping_pars_fragment:"",t.toneMapping!==ln?Ch("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,wh("linearToOutputTexel",t.outputColorSpace),yh(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($n).join(`
`)),o=za(o),o=wo(o,t),o=Co(o,t),s=za(s),s=wo(s,t),s=Co(s,t),o=yo(o),s=yo(s),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,l=["#define varying in",t.glslVersion===ro?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ro?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const A=b+f+o,x=b+l+s,C=bo(r,r.VERTEX_SHADER,A),R=bo(r,r.FRAGMENT_SHADER,x);r.attachShader(E,C),r.attachShader(E,R),t.index0AttributeName!==void 0?r.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function D(P){if(e.debug.checkShaderErrors){const O=r.getProgramInfoLog(E)||"",W=r.getShaderInfoLog(C)||"",X=r.getShaderInfoLog(R)||"",$=O.trim(),q=W.trim(),le=X.trim();let V=!0,ve=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(V=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,E,C,R);else{const Re=Ro(r,C,"vertex"),we=Ro(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+$+`
`+Re+`
`+we)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(q===""||le==="")&&(ve=!1);ve&&(P.diagnostics={runnable:V,programLog:$,vertexShader:{log:q,prefix:f},fragmentShader:{log:le,prefix:l}})}r.deleteShader(C),r.deleteShader(R),U=new Di(r,E),_=Dh(r,E)}let U;this.getUniforms=function(){return U===void 0&&D(this),U};let _;this.getAttributes=function(){return _===void 0&&D(this),_};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(E,Th)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bh++,this.cacheKey=n,this.usedTimes=1,this.program=E,this.vertexShader=C,this.fragmentShader=R,this}let Wh=0;class Xh{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(n);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new qh(n),t.set(n,i)),i}}class qh{constructor(n){this.id=Wh++,this.code=n,this.usedTimes=0}}function Yh(e,n,t,i,r,a,o){const s=new ac,c=new Xh,p=new Set,d=[],h=r.logarithmicDepthBuffer,g=r.vertexTextures;let m=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(_){return p.add(_),_===0?"uv":`uv${_}`}function f(_,S,P,O,W){const X=O.fog,$=W.geometry,q=_.isMeshStandardMaterial?O.environment:null,le=(_.isMeshStandardMaterial?t:n).get(_.envMap||q),V=le&&le.mapping===Xi?le.image.height:null,ve=M[_.type];_.precision!==null&&(m=r.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));const Re=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,we=Re!==void 0?Re.length:0;let Ve=0;$.morphAttributes.position!==void 0&&(Ve=1),$.morphAttributes.normal!==void 0&&(Ve=2),$.morphAttributes.color!==void 0&&(Ve=3);let We,Qe,Xe,B;if(ve){const Ze=zt[ve];We=Ze.vertexShader,Qe=Ze.fragmentShader}else We=_.vertexShader,Qe=_.fragmentShader,c.update(_),Xe=c.getVertexShaderID(_),B=c.getFragmentShaderID(_);const K=e.getRenderTarget(),me=e.state.buffers.depth.getReversed(),Le=W.isInstancedMesh===!0,Ce=W.isBatchedMesh===!0,ke=!!_.map,ft=!!_.matcap,w=!!le,it=!!_.aoMap,L=!!_.lightMap,ae=!!_.bumpMap,Q=!!_.normalMap,De=!!_.displacementMap,ue=!!_.emissiveMap,Me=!!_.metalnessMap,qe=!!_.roughnessMap,Ge=_.anisotropy>0,T=_.clearcoat>0,u=_.dispersion>0,F=_.iridescence>0,z=_.sheen>0,j=_.transmission>0,G=Ge&&!!_.anisotropyMap,xe=T&&!!_.clearcoatMap,ee=T&&!!_.clearcoatNormalMap,he=T&&!!_.clearcoatRoughnessMap,ge=F&&!!_.iridescenceMap,te=F&&!!_.iridescenceThicknessMap,se=z&&!!_.sheenColorMap,Ee=z&&!!_.sheenRoughnessMap,_e=!!_.specularMap,de=!!_.specularColorMap,Fe=!!_.specularIntensityMap,y=j&&!!_.transmissionMap,ie=j&&!!_.thicknessMap,ce=!!_.gradientMap,Te=!!_.alphaMap,re=_.alphaTest>0,J=!!_.alphaHash,Ae=!!_.extensions;let Oe=ln;_.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Oe=e.toneMapping);const at={shaderID:ve,shaderType:_.type,shaderName:_.name,vertexShader:We,fragmentShader:Qe,defines:_.defines,customVertexShaderID:Xe,customFragmentShaderID:B,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,batching:Ce,batchingColor:Ce&&W._colorsTexture!==null,instancing:Le,instancingColor:Le&&W.instanceColor!==null,instancingMorph:Le&&W.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:K===null?e.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Wi,alphaToCoverage:!!_.alphaToCoverage,map:ke,matcap:ft,envMap:w,envMapMode:w&&le.mapping,envMapCubeUVHeight:V,aoMap:it,lightMap:L,bumpMap:ae,normalMap:Q,displacementMap:g&&De,emissiveMap:ue,normalMapObjectSpace:Q&&_.normalMapType===ec,normalMapTangentSpace:Q&&_.normalMapType===Jl,metalnessMap:Me,roughnessMap:qe,anisotropy:Ge,anisotropyMap:G,clearcoat:T,clearcoatMap:xe,clearcoatNormalMap:ee,clearcoatRoughnessMap:he,dispersion:u,iridescence:F,iridescenceMap:ge,iridescenceThicknessMap:te,sheen:z,sheenColorMap:se,sheenRoughnessMap:Ee,specularMap:_e,specularColorMap:de,specularIntensityMap:Fe,transmission:j,transmissionMap:y,thicknessMap:ie,gradientMap:ce,opaque:_.transparent===!1&&_.blending===Pi&&_.alphaToCoverage===!1,alphaMap:Te,alphaTest:re,alphaHash:J,combine:_.combine,mapUv:ke&&E(_.map.channel),aoMapUv:it&&E(_.aoMap.channel),lightMapUv:L&&E(_.lightMap.channel),bumpMapUv:ae&&E(_.bumpMap.channel),normalMapUv:Q&&E(_.normalMap.channel),displacementMapUv:De&&E(_.displacementMap.channel),emissiveMapUv:ue&&E(_.emissiveMap.channel),metalnessMapUv:Me&&E(_.metalnessMap.channel),roughnessMapUv:qe&&E(_.roughnessMap.channel),anisotropyMapUv:G&&E(_.anisotropyMap.channel),clearcoatMapUv:xe&&E(_.clearcoatMap.channel),clearcoatNormalMapUv:ee&&E(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&E(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&E(_.iridescenceMap.channel),iridescenceThicknessMapUv:te&&E(_.iridescenceThicknessMap.channel),sheenColorMapUv:se&&E(_.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&E(_.sheenRoughnessMap.channel),specularMapUv:_e&&E(_.specularMap.channel),specularColorMapUv:de&&E(_.specularColorMap.channel),specularIntensityMapUv:Fe&&E(_.specularIntensityMap.channel),transmissionMapUv:y&&E(_.transmissionMap.channel),thicknessMapUv:ie&&E(_.thicknessMap.channel),alphaMapUv:Te&&E(_.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Q||Ge),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!$.attributes.uv&&(ke||Te),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.flatShading===!0&&_.wireframe===!1,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:me,skinning:W.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Ve,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:e.shadowMap.enabled&&P.length>0,shadowMapType:e.shadowMap.type,toneMapping:Oe,decodeVideoTexture:ke&&_.map.isVideoTexture===!0&&vt.getTransfer(_.map.colorSpace)===ot,decodeVideoTextureEmissive:ue&&_.emissiveMap.isVideoTexture===!0&&vt.getTransfer(_.emissiveMap.colorSpace)===ot,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===It,flipSided:_.side===yt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ae&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&_.extensions.multiDraw===!0||Ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return at.vertexUv1s=p.has(1),at.vertexUv2s=p.has(2),at.vertexUv3s=p.has(3),p.clear(),at}function l(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)S.push(P),S.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(b(S,_),A(S,_),S.push(e.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function b(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function A(_,S){s.disableAll(),S.supportsVertexTextures&&s.enable(0),S.instancing&&s.enable(1),S.instancingColor&&s.enable(2),S.instancingMorph&&s.enable(3),S.matcap&&s.enable(4),S.envMap&&s.enable(5),S.normalMapObjectSpace&&s.enable(6),S.normalMapTangentSpace&&s.enable(7),S.clearcoat&&s.enable(8),S.iridescence&&s.enable(9),S.alphaTest&&s.enable(10),S.vertexColors&&s.enable(11),S.vertexAlphas&&s.enable(12),S.vertexUv1s&&s.enable(13),S.vertexUv2s&&s.enable(14),S.vertexUv3s&&s.enable(15),S.vertexTangents&&s.enable(16),S.anisotropy&&s.enable(17),S.alphaHash&&s.enable(18),S.batching&&s.enable(19),S.dispersion&&s.enable(20),S.batchingColor&&s.enable(21),S.gradientMap&&s.enable(22),_.push(s.mask),s.disableAll(),S.fog&&s.enable(0),S.useFog&&s.enable(1),S.flatShading&&s.enable(2),S.logarithmicDepthBuffer&&s.enable(3),S.reversedDepthBuffer&&s.enable(4),S.skinning&&s.enable(5),S.morphTargets&&s.enable(6),S.morphNormals&&s.enable(7),S.morphColors&&s.enable(8),S.premultipliedAlpha&&s.enable(9),S.shadowMapEnabled&&s.enable(10),S.doubleSided&&s.enable(11),S.flipSided&&s.enable(12),S.useDepthPacking&&s.enable(13),S.dithering&&s.enable(14),S.transmission&&s.enable(15),S.sheen&&s.enable(16),S.opaque&&s.enable(17),S.pointsUvs&&s.enable(18),S.decodeVideoTexture&&s.enable(19),S.decodeVideoTextureEmissive&&s.enable(20),S.alphaToCoverage&&s.enable(21),_.push(s.mask)}function x(_){const S=M[_.type];let P;if(S){const O=zt[S];P=jl.clone(O.uniforms)}else P=_.uniforms;return P}function C(_,S){let P;for(let O=0,W=d.length;O<W;O++){const X=d[O];if(X.cacheKey===S){P=X,++P.usedTimes;break}}return P===void 0&&(P=new zh(e,S,_,a),d.push(P)),P}function R(_){if(--_.usedTimes===0){const S=d.indexOf(_);d[S]=d[d.length-1],d.pop(),_.destroy()}}function D(_){c.remove(_)}function U(){c.dispose()}return{getParameters:f,getProgramCacheKey:l,getUniforms:x,acquireProgram:C,releaseProgram:R,releaseShaderCache:D,programs:d,dispose:U}}function Kh(){let e=new WeakMap;function n(o){return e.has(o)}function t(o){let s=e.get(o);return s===void 0&&(s={},e.set(o,s)),s}function i(o){e.delete(o)}function r(o,s,c){e.get(o)[s]=c}function a(){e=new WeakMap}return{has:n,get:t,remove:i,update:r,dispose:a}}function $h(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.z!==n.z?e.z-n.z:e.id-n.id}function Lo(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function Do(){const e=[];let n=0;const t=[],i=[],r=[];function a(){n=0,t.length=0,i.length=0,r.length=0}function o(h,g,m,M,E,f){let l=e[n];return l===void 0?(l={id:h.id,object:h,geometry:g,material:m,groupOrder:M,renderOrder:h.renderOrder,z:E,group:f},e[n]=l):(l.id=h.id,l.object=h,l.geometry=g,l.material=m,l.groupOrder=M,l.renderOrder=h.renderOrder,l.z=E,l.group=f),n++,l}function s(h,g,m,M,E,f){const l=o(h,g,m,M,E,f);m.transmission>0?i.push(l):m.transparent===!0?r.push(l):t.push(l)}function c(h,g,m,M,E,f){const l=o(h,g,m,M,E,f);m.transmission>0?i.unshift(l):m.transparent===!0?r.unshift(l):t.unshift(l)}function p(h,g){t.length>1&&t.sort(h||$h),i.length>1&&i.sort(g||Lo),r.length>1&&r.sort(g||Lo)}function d(){for(let h=n,g=e.length;h<g;h++){const m=e[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:s,unshift:c,finish:d,sort:p}}function Zh(){let e=new WeakMap;function n(i,r){const a=e.get(i);let o;return a===void 0?(o=new Do,e.set(i,[o])):r>=a.length?(o=new Do,a.push(o)):o=a[r],o}function t(){e=new WeakMap}return{get:n,dispose:t}}function Qh(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new ne,color:new $e};break;case"SpotLight":t={position:new ne,direction:new ne,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return e[n.id]=t,t}}}function jh(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let Jh=0;function ep(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function tp(e){const n=new Qh,t=jh(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)i.probe.push(new ne);const r=new ne,a=new Nt,o=new Nt;function s(p){let d=0,h=0,g=0;for(let _=0;_<9;_++)i.probe[_].set(0,0,0);let m=0,M=0,E=0,f=0,l=0,b=0,A=0,x=0,C=0,R=0,D=0;p.sort(ep);for(let _=0,S=p.length;_<S;_++){const P=p[_],O=P.color,W=P.intensity,X=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=O.r*W,h+=O.g*W,g+=O.b*W;else if(P.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(P.sh.coefficients[q],W);D++}else if(P.isDirectionalLight){const q=n.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const le=P.shadow,V=t.get(P);V.shadowIntensity=le.intensity,V.shadowBias=le.bias,V.shadowNormalBias=le.normalBias,V.shadowRadius=le.radius,V.shadowMapSize=le.mapSize,i.directionalShadow[m]=V,i.directionalShadowMap[m]=$,i.directionalShadowMatrix[m]=P.shadow.matrix,b++}i.directional[m]=q,m++}else if(P.isSpotLight){const q=n.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(O).multiplyScalar(W),q.distance=X,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,i.spot[E]=q;const le=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,le.updateMatrices(P),P.castShadow&&R++),i.spotLightMatrix[E]=le.matrix,P.castShadow){const V=t.get(P);V.shadowIntensity=le.intensity,V.shadowBias=le.bias,V.shadowNormalBias=le.normalBias,V.shadowRadius=le.radius,V.shadowMapSize=le.mapSize,i.spotShadow[E]=V,i.spotShadowMap[E]=$,x++}E++}else if(P.isRectAreaLight){const q=n.get(P);q.color.copy(O).multiplyScalar(W),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),i.rectArea[f]=q,f++}else if(P.isPointLight){const q=n.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const le=P.shadow,V=t.get(P);V.shadowIntensity=le.intensity,V.shadowBias=le.bias,V.shadowNormalBias=le.normalBias,V.shadowRadius=le.radius,V.shadowMapSize=le.mapSize,V.shadowCameraNear=le.camera.near,V.shadowCameraFar=le.camera.far,i.pointShadow[M]=V,i.pointShadowMap[M]=$,i.pointShadowMatrix[M]=P.shadow.matrix,A++}i.point[M]=q,M++}else if(P.isHemisphereLight){const q=n.get(P);q.skyColor.copy(P.color).multiplyScalar(W),q.groundColor.copy(P.groundColor).multiplyScalar(W),i.hemi[l]=q,l++}}f>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=g;const U=i.hash;(U.directionalLength!==m||U.pointLength!==M||U.spotLength!==E||U.rectAreaLength!==f||U.hemiLength!==l||U.numDirectionalShadows!==b||U.numPointShadows!==A||U.numSpotShadows!==x||U.numSpotMaps!==C||U.numLightProbes!==D)&&(i.directional.length=m,i.spot.length=E,i.rectArea.length=f,i.point.length=M,i.hemi.length=l,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=x+C-R,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=D,U.directionalLength=m,U.pointLength=M,U.spotLength=E,U.rectAreaLength=f,U.hemiLength=l,U.numDirectionalShadows=b,U.numPointShadows=A,U.numSpotShadows=x,U.numSpotMaps=C,U.numLightProbes=D,i.version=Jh++)}function c(p,d){let h=0,g=0,m=0,M=0,E=0;const f=d.matrixWorldInverse;for(let l=0,b=p.length;l<b;l++){const A=p[l];if(A.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(f),h++}else if(A.isSpotLight){const x=i.spot[m];x.position.setFromMatrixPosition(A.matrixWorld),x.position.applyMatrix4(f),x.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(f),m++}else if(A.isRectAreaLight){const x=i.rectArea[M];x.position.setFromMatrixPosition(A.matrixWorld),x.position.applyMatrix4(f),o.identity(),a.copy(A.matrixWorld),a.premultiply(f),o.extractRotation(a),x.halfWidth.set(A.width*.5,0,0),x.halfHeight.set(0,A.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),M++}else if(A.isPointLight){const x=i.point[g];x.position.setFromMatrixPosition(A.matrixWorld),x.position.applyMatrix4(f),g++}else if(A.isHemisphereLight){const x=i.hemi[E];x.direction.setFromMatrixPosition(A.matrixWorld),x.direction.transformDirection(f),E++}}}return{setup:s,setupView:c,state:i}}function Uo(e){const n=new tp(e),t=[],i=[];function r(d){p.camera=d,t.length=0,i.length=0}function a(d){t.push(d)}function o(d){i.push(d)}function s(){n.setup(t)}function c(d){n.setupView(t,d)}const p={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:r,state:p,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function np(e){let n=new WeakMap;function t(r,a=0){const o=n.get(r);let s;return o===void 0?(s=new Uo(e),n.set(r,[s])):a>=o.length?(s=new Uo(e),o.push(s)):s=o[a],s}function i(){n=new WeakMap}return{get:t,dispose:i}}const ip=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ap=`uniform sampler2D shadow_pass;
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
}`;function rp(e,n,t){let i=new ls;const r=new ut,a=new ut,o=new Rt,s=new Ol({depthPacking:Bl}),c=new Gl,p={},d=t.maxTextureSize,h={[ai]:yt,[yt]:ai,[It]:It},g=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:ip,fragmentShader:ap}),m=g.clone();m.defines.HORIZONTAL_PASS=1;const M=new dn;M.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new dt(M,g),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fs;let l=this.type;this.render=function(R,D,U){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;const _=e.getRenderTarget(),S=e.getActiveCubeFace(),P=e.getActiveMipmapLevel(),O=e.state;O.setBlending(Tn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const W=l!==Qt&&this.type===Qt,X=l===Qt&&this.type!==Qt;for(let $=0,q=R.length;$<q;$++){const le=R[$],V=le.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ve=V.getFrameExtents();if(r.multiply(ve),a.copy(V.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/ve.x),r.x=a.x*ve.x,V.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/ve.y),r.y=a.y*ve.y,V.mapSize.y=a.y)),V.map===null||W===!0||X===!0){const we=this.type!==Qt?{minFilter:Jn,magFilter:Jn}:{};V.map!==null&&V.map.dispose(),V.map=new Fn(r.x,r.y,we),V.map.texture.name=le.name+".shadowMap",V.camera.updateProjectionMatrix()}e.setRenderTarget(V.map),e.clear();const Re=V.getViewportCount();for(let we=0;we<Re;we++){const Ve=V.getViewport(we);o.set(a.x*Ve.x,a.y*Ve.y,a.x*Ve.z,a.y*Ve.w),O.viewport(o),V.updateMatrices(le,we),i=V.getFrustum(),x(D,U,V.camera,le,this.type)}V.isPointLightShadow!==!0&&this.type===Qt&&b(V,U),V.needsUpdate=!1}l=this.type,f.needsUpdate=!1,e.setRenderTarget(_,S,P)};function b(R,D){const U=n.update(E);g.defines.VSM_SAMPLES!==R.blurSamples&&(g.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,g.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Fn(r.x,r.y)),g.uniforms.shadow_pass.value=R.map.texture,g.uniforms.resolution.value=R.mapSize,g.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(D,null,U,g,E,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(D,null,U,m,E,null)}function A(R,D,U,_){let S=null;const P=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)S=P;else if(S=U.isPointLight===!0?c:s,e.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const O=S.uuid,W=D.uuid;let X=p[O];X===void 0&&(X={},p[O]=X);let $=X[W];$===void 0&&($=S.clone(),X[W]=$,D.addEventListener("dispose",C)),S=$}if(S.visible=D.visible,S.wireframe=D.wireframe,_===Qt?S.side=D.shadowSide!==null?D.shadowSide:D.side:S.side=D.shadowSide!==null?D.shadowSide:h[D.side],S.alphaMap=D.alphaMap,S.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,S.map=D.map,S.clipShadows=D.clipShadows,S.clippingPlanes=D.clippingPlanes,S.clipIntersection=D.clipIntersection,S.displacementMap=D.displacementMap,S.displacementScale=D.displacementScale,S.displacementBias=D.displacementBias,S.wireframeLinewidth=D.wireframeLinewidth,S.linewidth=D.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=e.properties.get(S);O.light=U}return S}function x(R,D,U,_,S){if(R.visible===!1)return;if(R.layers.test(D.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===Qt)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);const W=n.update(R),X=R.material;if(Array.isArray(X)){const $=W.groups;for(let q=0,le=$.length;q<le;q++){const V=$[q],ve=X[V.materialIndex];if(ve&&ve.visible){const Re=A(R,ve,_,S);R.onBeforeShadow(e,R,D,U,W,Re,V),e.renderBufferDirect(U,null,W,Re,R,V),R.onAfterShadow(e,R,D,U,W,Re,V)}}}else if(X.visible){const $=A(R,X,_,S);R.onBeforeShadow(e,R,D,U,W,$,null),e.renderBufferDirect(U,null,W,$,R,null),R.onAfterShadow(e,R,D,U,W,$,null)}}const O=R.children;for(let W=0,X=O.length;W<X;W++)x(O[W],D,U,_,S)}function C(R){R.target.removeEventListener("dispose",C);for(const U in p){const _=p[U],S=R.target.uuid;S in _&&(_[S].dispose(),delete _[S])}}}const op={[Oa]:Fa,[Na]:Da,[Ia]:La,[Bi]:Ua,[Fa]:Oa,[Da]:Na,[La]:Ia,[Ua]:Bi};function sp(e,n){function t(){let y=!1;const ie=new Rt;let ce=null;const Te=new Rt(0,0,0,0);return{setMask:function(re){ce!==re&&!y&&(e.colorMask(re,re,re,re),ce=re)},setLocked:function(re){y=re},setClear:function(re,J,Ae,Oe,at){at===!0&&(re*=Oe,J*=Oe,Ae*=Oe),ie.set(re,J,Ae,Oe),Te.equals(ie)===!1&&(e.clearColor(re,J,Ae,Oe),Te.copy(ie))},reset:function(){y=!1,ce=null,Te.set(-1,0,0,0)}}}function i(){let y=!1,ie=!1,ce=null,Te=null,re=null;return{setReversed:function(J){if(ie!==J){const Ae=n.get("EXT_clip_control");J?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),ie=J;const Oe=re;re=null,this.setClear(Oe)}},getReversed:function(){return ie},setTest:function(J){J?K(e.DEPTH_TEST):me(e.DEPTH_TEST)},setMask:function(J){ce!==J&&!y&&(e.depthMask(J),ce=J)},setFunc:function(J){if(ie&&(J=op[J]),Te!==J){switch(J){case Oa:e.depthFunc(e.NEVER);break;case Fa:e.depthFunc(e.ALWAYS);break;case Na:e.depthFunc(e.LESS);break;case Bi:e.depthFunc(e.LEQUAL);break;case Ia:e.depthFunc(e.EQUAL);break;case Ua:e.depthFunc(e.GEQUAL);break;case Da:e.depthFunc(e.GREATER);break;case La:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Te=J}},setLocked:function(J){y=J},setClear:function(J){re!==J&&(ie&&(J=1-J),e.clearDepth(J),re=J)},reset:function(){y=!1,ce=null,Te=null,re=null,ie=!1}}}function r(){let y=!1,ie=null,ce=null,Te=null,re=null,J=null,Ae=null,Oe=null,at=null;return{setTest:function(Ze){y||(Ze?K(e.STENCIL_TEST):me(e.STENCIL_TEST))},setMask:function(Ze){ie!==Ze&&!y&&(e.stencilMask(Ze),ie=Ze)},setFunc:function(Ze,Zt,Vt){(ce!==Ze||Te!==Zt||re!==Vt)&&(e.stencilFunc(Ze,Zt,Vt),ce=Ze,Te=Zt,re=Vt)},setOp:function(Ze,Zt,Vt){(J!==Ze||Ae!==Zt||Oe!==Vt)&&(e.stencilOp(Ze,Zt,Vt),J=Ze,Ae=Zt,Oe=Vt)},setLocked:function(Ze){y=Ze},setClear:function(Ze){at!==Ze&&(e.clearStencil(Ze),at=Ze)},reset:function(){y=!1,ie=null,ce=null,Te=null,re=null,J=null,Ae=null,Oe=null,at=null}}}const a=new t,o=new i,s=new r,c=new WeakMap,p=new WeakMap;let d={},h={},g=new WeakMap,m=[],M=null,E=!1,f=null,l=null,b=null,A=null,x=null,C=null,R=null,D=new $e(0,0,0),U=0,_=!1,S=null,P=null,O=null,W=null,X=null;const $=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,le=0;const V=e.getParameter(e.VERSION);V.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=le>=1):V.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=le>=2);let ve=null,Re={};const we=e.getParameter(e.SCISSOR_BOX),Ve=e.getParameter(e.VIEWPORT),We=new Rt().fromArray(we),Qe=new Rt().fromArray(Ve);function Xe(y,ie,ce,Te){const re=new Uint8Array(4),J=e.createTexture();e.bindTexture(y,J),e.texParameteri(y,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(y,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ae=0;Ae<ce;Ae++)y===e.TEXTURE_3D||y===e.TEXTURE_2D_ARRAY?e.texImage3D(ie,0,e.RGBA,1,1,Te,0,e.RGBA,e.UNSIGNED_BYTE,re):e.texImage2D(ie+Ae,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,re);return J}const B={};B[e.TEXTURE_2D]=Xe(e.TEXTURE_2D,e.TEXTURE_2D,1),B[e.TEXTURE_CUBE_MAP]=Xe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[e.TEXTURE_2D_ARRAY]=Xe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),B[e.TEXTURE_3D]=Xe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),K(e.DEPTH_TEST),o.setFunc(Bi),ae(!1),Q(Jr),K(e.CULL_FACE),it(Tn);function K(y){d[y]!==!0&&(e.enable(y),d[y]=!0)}function me(y){d[y]!==!1&&(e.disable(y),d[y]=!1)}function Le(y,ie){return h[y]!==ie?(e.bindFramebuffer(y,ie),h[y]=ie,y===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=ie),y===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ce(y,ie){let ce=m,Te=!1;if(y){ce=g.get(ie),ce===void 0&&(ce=[],g.set(ie,ce));const re=y.textures;if(ce.length!==re.length||ce[0]!==e.COLOR_ATTACHMENT0){for(let J=0,Ae=re.length;J<Ae;J++)ce[J]=e.COLOR_ATTACHMENT0+J;ce.length=re.length,Te=!0}}else ce[0]!==e.BACK&&(ce[0]=e.BACK,Te=!0);Te&&e.drawBuffers(ce)}function ke(y){return M!==y?(e.useProgram(y),M=y,!0):!1}const ft={[qn]:e.FUNC_ADD,[dl]:e.FUNC_SUBTRACT,[cl]:e.FUNC_REVERSE_SUBTRACT};ft[_c]=e.MIN,ft[Sc]=e.MAX;const w={[Al]:e.ZERO,[bl]:e.ONE,[Tl]:e.SRC_COLOR,[xl]:e.SRC_ALPHA,[El]:e.SRC_ALPHA_SATURATE,[Ml]:e.DST_COLOR,[Sl]:e.DST_ALPHA,[_l]:e.ONE_MINUS_SRC_COLOR,[vl]:e.ONE_MINUS_SRC_ALPHA,[gl]:e.ONE_MINUS_DST_COLOR,[ml]:e.ONE_MINUS_DST_ALPHA,[pl]:e.CONSTANT_COLOR,[hl]:e.ONE_MINUS_CONSTANT_COLOR,[fl]:e.CONSTANT_ALPHA,[ul]:e.ONE_MINUS_CONSTANT_ALPHA};function it(y,ie,ce,Te,re,J,Ae,Oe,at,Ze){if(y===Tn){E===!0&&(me(e.BLEND),E=!1);return}if(E===!1&&(K(e.BLEND),E=!0),y!==Zl){if(y!==f||Ze!==_){if((l!==qn||x!==qn)&&(e.blendEquation(e.FUNC_ADD),l=qn,x=qn),Ze)switch(y){case Pi:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case no:e.blendFunc(e.ONE,e.ONE);break;case to:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case eo:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}else switch(y){case Pi:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case no:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case to:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}b=null,A=null,C=null,R=null,D.set(0,0,0),U=0,f=y,_=Ze}return}re=re||ie,J=J||ce,Ae=Ae||Te,(ie!==l||re!==x)&&(e.blendEquationSeparate(ft[ie],ft[re]),l=ie,x=re),(ce!==b||Te!==A||J!==C||Ae!==R)&&(e.blendFuncSeparate(w[ce],w[Te],w[J],w[Ae]),b=ce,A=Te,C=J,R=Ae),(Oe.equals(D)===!1||at!==U)&&(e.blendColor(Oe.r,Oe.g,Oe.b,at),D.copy(Oe),U=at),f=y,_=!1}function L(y,ie){y.side===It?me(e.CULL_FACE):K(e.CULL_FACE);let ce=y.side===yt;ie&&(ce=!ce),ae(ce),y.blending===Pi&&y.transparent===!1?it(Tn):it(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),o.setFunc(y.depthFunc),o.setTest(y.depthTest),o.setMask(y.depthWrite),a.setMask(y.colorWrite);const Te=y.stencilWrite;s.setTest(Te),Te&&(s.setMask(y.stencilWriteMask),s.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),s.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),ue(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?K(e.SAMPLE_ALPHA_TO_COVERAGE):me(e.SAMPLE_ALPHA_TO_COVERAGE)}function ae(y){S!==y&&(y?e.frontFace(e.CW):e.frontFace(e.CCW),S=y)}function Q(y){y!==Kl?(K(e.CULL_FACE),y!==P&&(y===Jr?e.cullFace(e.BACK):y===$l?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):me(e.CULL_FACE),P=y}function De(y){y!==O&&(q&&e.lineWidth(y),O=y)}function ue(y,ie,ce){y?(K(e.POLYGON_OFFSET_FILL),(W!==ie||X!==ce)&&(e.polygonOffset(ie,ce),W=ie,X=ce)):me(e.POLYGON_OFFSET_FILL)}function Me(y){y?K(e.SCISSOR_TEST):me(e.SCISSOR_TEST)}function qe(y){y===void 0&&(y=e.TEXTURE0+$-1),ve!==y&&(e.activeTexture(y),ve=y)}function Ge(y,ie,ce){ce===void 0&&(ve===null?ce=e.TEXTURE0+$-1:ce=ve);let Te=Re[ce];Te===void 0&&(Te={type:void 0,texture:void 0},Re[ce]=Te),(Te.type!==y||Te.texture!==ie)&&(ve!==ce&&(e.activeTexture(ce),ve=ce),e.bindTexture(y,ie||B[y]),Te.type=y,Te.texture=ie)}function T(){const y=Re[ve];y!==void 0&&y.type!==void 0&&(e.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)}function u(){try{e.compressedTexImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function F(){try{e.compressedTexImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function z(){try{e.texSubImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function j(){try{e.texSubImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function G(){try{e.compressedTexSubImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function xe(){try{e.compressedTexSubImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ee(){try{e.texStorage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function he(){try{e.texStorage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ge(){try{e.texImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function te(){try{e.texImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function se(y){We.equals(y)===!1&&(e.scissor(y.x,y.y,y.z,y.w),We.copy(y))}function Ee(y){Qe.equals(y)===!1&&(e.viewport(y.x,y.y,y.z,y.w),Qe.copy(y))}function _e(y,ie){let ce=p.get(ie);ce===void 0&&(ce=new WeakMap,p.set(ie,ce));let Te=ce.get(y);Te===void 0&&(Te=e.getUniformBlockIndex(ie,y.name),ce.set(y,Te))}function de(y,ie){const Te=p.get(ie).get(y);c.get(ie)!==Te&&(e.uniformBlockBinding(ie,Te,y.__bindingPointIndex),c.set(ie,Te))}function Fe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),d={},ve=null,Re={},h={},g=new WeakMap,m=[],M=null,E=!1,f=null,l=null,b=null,A=null,x=null,C=null,R=null,D=new $e(0,0,0),U=0,_=!1,S=null,P=null,O=null,W=null,X=null,We.set(0,0,e.canvas.width,e.canvas.height),Qe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:K,disable:me,bindFramebuffer:Le,drawBuffers:Ce,useProgram:ke,setBlending:it,setMaterial:L,setFlipSided:ae,setCullFace:Q,setLineWidth:De,setPolygonOffset:ue,setScissorTest:Me,activeTexture:qe,bindTexture:Ge,unbindTexture:T,compressedTexImage2D:u,compressedTexImage3D:F,texImage2D:ge,texImage3D:te,updateUBOMapping:_e,uniformBlockBinding:de,texStorage2D:ee,texStorage3D:he,texSubImage2D:z,texSubImage3D:j,compressedTexSubImage2D:G,compressedTexSubImage3D:xe,scissor:se,viewport:Ee,reset:Fe}}function lp(e,n,t,i,r,a,o){const s=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ut,d=new WeakMap;let h;const g=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(T,u){return m?new OffscreenCanvas(T,u):pc("canvas")}function E(T,u,F){let z=1;const j=Ge(T);if((j.width>F||j.height>F)&&(z=F/Math.max(j.width,j.height)),z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const G=Math.floor(z*j.width),xe=Math.floor(z*j.height);h===void 0&&(h=M(G,xe));const ee=u?M(G,xe):h;return ee.width=G,ee.height=xe,ee.getContext("2d").drawImage(T,0,0,G,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+G+"x"+xe+")."),ee}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function f(T){return T.generateMipmaps}function l(T){e.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?e.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function A(T,u,F,z,j=!1){if(T!==null){if(e[T]!==void 0)return e[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let G=u;if(u===e.RED&&(F===e.FLOAT&&(G=e.R32F),F===e.HALF_FLOAT&&(G=e.R16F),F===e.UNSIGNED_BYTE&&(G=e.R8)),u===e.RED_INTEGER&&(F===e.UNSIGNED_BYTE&&(G=e.R8UI),F===e.UNSIGNED_SHORT&&(G=e.R16UI),F===e.UNSIGNED_INT&&(G=e.R32UI),F===e.BYTE&&(G=e.R8I),F===e.SHORT&&(G=e.R16I),F===e.INT&&(G=e.R32I)),u===e.RG&&(F===e.FLOAT&&(G=e.RG32F),F===e.HALF_FLOAT&&(G=e.RG16F),F===e.UNSIGNED_BYTE&&(G=e.RG8)),u===e.RG_INTEGER&&(F===e.UNSIGNED_BYTE&&(G=e.RG8UI),F===e.UNSIGNED_SHORT&&(G=e.RG16UI),F===e.UNSIGNED_INT&&(G=e.RG32UI),F===e.BYTE&&(G=e.RG8I),F===e.SHORT&&(G=e.RG16I),F===e.INT&&(G=e.RG32I)),u===e.RGB_INTEGER&&(F===e.UNSIGNED_BYTE&&(G=e.RGB8UI),F===e.UNSIGNED_SHORT&&(G=e.RGB16UI),F===e.UNSIGNED_INT&&(G=e.RGB32UI),F===e.BYTE&&(G=e.RGB8I),F===e.SHORT&&(G=e.RGB16I),F===e.INT&&(G=e.RGB32I)),u===e.RGBA_INTEGER&&(F===e.UNSIGNED_BYTE&&(G=e.RGBA8UI),F===e.UNSIGNED_SHORT&&(G=e.RGBA16UI),F===e.UNSIGNED_INT&&(G=e.RGBA32UI),F===e.BYTE&&(G=e.RGBA8I),F===e.SHORT&&(G=e.RGBA16I),F===e.INT&&(G=e.RGBA32I)),u===e.RGB&&(F===e.UNSIGNED_INT_5_9_9_9_REV&&(G=e.RGB9_E5),F===e.UNSIGNED_INT_10F_11F_11F_REV&&(G=e.R11F_G11F_B10F)),u===e.RGBA){const xe=j?Ts:vt.getTransfer(z);F===e.FLOAT&&(G=e.RGBA32F),F===e.HALF_FLOAT&&(G=e.RGBA16F),F===e.UNSIGNED_BYTE&&(G=xe===ot?e.SRGB8_ALPHA8:e.RGBA8),F===e.UNSIGNED_SHORT_4_4_4_4&&(G=e.RGBA4),F===e.UNSIGNED_SHORT_5_5_5_1&&(G=e.RGB5_A1)}return(G===e.R16F||G===e.R32F||G===e.RG16F||G===e.RG32F||G===e.RGBA16F||G===e.RGBA32F)&&n.get("EXT_color_buffer_float"),G}function x(T,u){let F;return T?u===null||u===si||u===oi?F=e.DEPTH24_STENCIL8:u===xn?F=e.DEPTH32F_STENCIL8:u===Gi&&(F=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):u===null||u===si||u===oi?F=e.DEPTH_COMPONENT24:u===xn?F=e.DEPTH_COMPONENT32F:u===Gi&&(F=e.DEPTH_COMPONENT16),F}function C(T,u){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==Jn&&T.minFilter!==En?Math.log2(Math.max(u.width,u.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?u.mipmaps.length:1}function R(T){const u=T.target;u.removeEventListener("dispose",R),U(u),u.isVideoTexture&&d.delete(u)}function D(T){const u=T.target;u.removeEventListener("dispose",D),S(u)}function U(T){const u=i.get(T);if(u.__webglInit===void 0)return;const F=T.source,z=g.get(F);if(z){const j=z[u.__cacheKey];j.usedTimes--,j.usedTimes===0&&_(T),Object.keys(z).length===0&&g.delete(F)}i.remove(T)}function _(T){const u=i.get(T);e.deleteTexture(u.__webglTexture);const F=T.source,z=g.get(F);delete z[u.__cacheKey],o.memory.textures--}function S(T){const u=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(u.__webglFramebuffer[z]))for(let j=0;j<u.__webglFramebuffer[z].length;j++)e.deleteFramebuffer(u.__webglFramebuffer[z][j]);else e.deleteFramebuffer(u.__webglFramebuffer[z]);u.__webglDepthbuffer&&e.deleteRenderbuffer(u.__webglDepthbuffer[z])}else{if(Array.isArray(u.__webglFramebuffer))for(let z=0;z<u.__webglFramebuffer.length;z++)e.deleteFramebuffer(u.__webglFramebuffer[z]);else e.deleteFramebuffer(u.__webglFramebuffer);if(u.__webglDepthbuffer&&e.deleteRenderbuffer(u.__webglDepthbuffer),u.__webglMultisampledFramebuffer&&e.deleteFramebuffer(u.__webglMultisampledFramebuffer),u.__webglColorRenderbuffer)for(let z=0;z<u.__webglColorRenderbuffer.length;z++)u.__webglColorRenderbuffer[z]&&e.deleteRenderbuffer(u.__webglColorRenderbuffer[z]);u.__webglDepthRenderbuffer&&e.deleteRenderbuffer(u.__webglDepthRenderbuffer)}const F=T.textures;for(let z=0,j=F.length;z<j;z++){const G=i.get(F[z]);G.__webglTexture&&(e.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(F[z])}i.remove(T)}let P=0;function O(){P=0}function W(){const T=P;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),P+=1,T}function X(T){const u=[];return u.push(T.wrapS),u.push(T.wrapT),u.push(T.wrapR||0),u.push(T.magFilter),u.push(T.minFilter),u.push(T.anisotropy),u.push(T.internalFormat),u.push(T.format),u.push(T.type),u.push(T.generateMipmaps),u.push(T.premultiplyAlpha),u.push(T.flipY),u.push(T.unpackAlignment),u.push(T.colorSpace),u.join()}function $(T,u){const F=i.get(T);if(T.isVideoTexture&&Me(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){const z=T.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(F,T,u);return}}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,F.__webglTexture,e.TEXTURE0+u)}function q(T,u){const F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){B(F,T,u);return}t.bindTexture(e.TEXTURE_2D_ARRAY,F.__webglTexture,e.TEXTURE0+u)}function le(T,u){const F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){B(F,T,u);return}t.bindTexture(e.TEXTURE_3D,F.__webglTexture,e.TEXTURE0+u)}function V(T,u){const F=i.get(T);if(T.version>0&&F.__version!==T.version){K(F,T,u);return}t.bindTexture(e.TEXTURE_CUBE_MAP,F.__webglTexture,e.TEXTURE0+u)}const ve={[ds]:e.REPEAT,[wl]:e.CLAMP_TO_EDGE,[Rl]:e.MIRRORED_REPEAT},Re={[Jn]:e.NEAREST,[Cl]:e.NEAREST_MIPMAP_NEAREST,[mi]:e.NEAREST_MIPMAP_LINEAR,[En]:e.LINEAR,[na]:e.LINEAR_MIPMAP_NEAREST,[Mn]:e.LINEAR_MIPMAP_LINEAR},we={[Nl]:e.NEVER,[Il]:e.ALWAYS,[Ul]:e.LESS,[us]:e.LEQUAL,[Dl]:e.EQUAL,[Ll]:e.GEQUAL,[Pl]:e.GREATER,[yl]:e.NOTEQUAL};function Ve(T,u){if(u.type===xn&&n.has("OES_texture_float_linear")===!1&&(u.magFilter===En||u.magFilter===na||u.magFilter===mi||u.magFilter===Mn||u.minFilter===En||u.minFilter===na||u.minFilter===mi||u.minFilter===Mn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(T,e.TEXTURE_WRAP_S,ve[u.wrapS]),e.texParameteri(T,e.TEXTURE_WRAP_T,ve[u.wrapT]),(T===e.TEXTURE_3D||T===e.TEXTURE_2D_ARRAY)&&e.texParameteri(T,e.TEXTURE_WRAP_R,ve[u.wrapR]),e.texParameteri(T,e.TEXTURE_MAG_FILTER,Re[u.magFilter]),e.texParameteri(T,e.TEXTURE_MIN_FILTER,Re[u.minFilter]),u.compareFunction&&(e.texParameteri(T,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(T,e.TEXTURE_COMPARE_FUNC,we[u.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(u.magFilter===Jn||u.minFilter!==mi&&u.minFilter!==Mn||u.type===xn&&n.has("OES_texture_float_linear")===!1)return;if(u.anisotropy>1||i.get(u).__currentAnisotropy){const F=n.get("EXT_texture_filter_anisotropic");e.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(u.anisotropy,r.getMaxAnisotropy())),i.get(u).__currentAnisotropy=u.anisotropy}}}function We(T,u){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,u.addEventListener("dispose",R));const z=u.source;let j=g.get(z);j===void 0&&(j={},g.set(z,j));const G=X(u);if(G!==T.__cacheKey){j[G]===void 0&&(j[G]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,F=!0),j[G].usedTimes++;const xe=j[T.__cacheKey];xe!==void 0&&(j[T.__cacheKey].usedTimes--,xe.usedTimes===0&&_(u)),T.__cacheKey=G,T.__webglTexture=j[G].texture}return F}function Qe(T,u,F){return Math.floor(Math.floor(T/F)/u)}function Xe(T,u,F,z){const G=T.updateRanges;if(G.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,u.width,u.height,F,z,u.data);else{G.sort((te,se)=>te.start-se.start);let xe=0;for(let te=1;te<G.length;te++){const se=G[xe],Ee=G[te],_e=se.start+se.count,de=Qe(Ee.start,u.width,4),Fe=Qe(se.start,u.width,4);Ee.start<=_e+1&&de===Fe&&Qe(Ee.start+Ee.count-1,u.width,4)===de?se.count=Math.max(se.count,Ee.start+Ee.count-se.start):(++xe,G[xe]=Ee)}G.length=xe+1;const ee=e.getParameter(e.UNPACK_ROW_LENGTH),he=e.getParameter(e.UNPACK_SKIP_PIXELS),ge=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,u.width);for(let te=0,se=G.length;te<se;te++){const Ee=G[te],_e=Math.floor(Ee.start/4),de=Math.ceil(Ee.count/4),Fe=_e%u.width,y=Math.floor(_e/u.width),ie=de,ce=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Fe),e.pixelStorei(e.UNPACK_SKIP_ROWS,y),t.texSubImage2D(e.TEXTURE_2D,0,Fe,y,ie,ce,F,z,u.data)}T.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ee),e.pixelStorei(e.UNPACK_SKIP_PIXELS,he),e.pixelStorei(e.UNPACK_SKIP_ROWS,ge)}}function B(T,u,F){let z=e.TEXTURE_2D;(u.isDataArrayTexture||u.isCompressedArrayTexture)&&(z=e.TEXTURE_2D_ARRAY),u.isData3DTexture&&(z=e.TEXTURE_3D);const j=We(T,u),G=u.source;t.bindTexture(z,T.__webglTexture,e.TEXTURE0+F);const xe=i.get(G);if(G.version!==xe.__version||j===!0){t.activeTexture(e.TEXTURE0+F);const ee=vt.getPrimaries(vt.workingColorSpace),he=u.colorSpace===Dn?null:vt.getPrimaries(u.colorSpace),ge=u.colorSpace===Dn||ee===he?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,u.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,u.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,u.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let te=E(u.image,!1,r.maxTextureSize);te=qe(u,te);const se=a.convert(u.format,u.colorSpace),Ee=a.convert(u.type);let _e=A(u.internalFormat,se,Ee,u.colorSpace,u.isVideoTexture);Ve(z,u);let de;const Fe=u.mipmaps,y=u.isVideoTexture!==!0,ie=xe.__version===void 0||j===!0,ce=G.dataReady,Te=C(u,te);if(u.isDepthTexture)_e=x(u.format===Oi,u.type),ie&&(y?t.texStorage2D(e.TEXTURE_2D,1,_e,te.width,te.height):t.texImage2D(e.TEXTURE_2D,0,_e,te.width,te.height,0,se,Ee,null));else if(u.isDataTexture)if(Fe.length>0){y&&ie&&t.texStorage2D(e.TEXTURE_2D,Te,_e,Fe[0].width,Fe[0].height);for(let re=0,J=Fe.length;re<J;re++)de=Fe[re],y?ce&&t.texSubImage2D(e.TEXTURE_2D,re,0,0,de.width,de.height,se,Ee,de.data):t.texImage2D(e.TEXTURE_2D,re,_e,de.width,de.height,0,se,Ee,de.data);u.generateMipmaps=!1}else y?(ie&&t.texStorage2D(e.TEXTURE_2D,Te,_e,te.width,te.height),ce&&Xe(u,te,se,Ee)):t.texImage2D(e.TEXTURE_2D,0,_e,te.width,te.height,0,se,Ee,te.data);else if(u.isCompressedTexture)if(u.isCompressedArrayTexture){y&&ie&&t.texStorage3D(e.TEXTURE_2D_ARRAY,Te,_e,Fe[0].width,Fe[0].height,te.depth);for(let re=0,J=Fe.length;re<J;re++)if(de=Fe[re],u.format!==Xt)if(se!==null)if(y){if(ce)if(u.layerUpdates.size>0){const Ae=ao(de.width,de.height,u.format,u.type);for(const Oe of u.layerUpdates){const at=de.data.subarray(Oe*Ae/de.data.BYTES_PER_ELEMENT,(Oe+1)*Ae/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,re,0,0,Oe,de.width,de.height,1,se,at)}u.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,re,0,0,0,de.width,de.height,te.depth,se,de.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,re,_e,de.width,de.height,te.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else y?ce&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,re,0,0,0,de.width,de.height,te.depth,se,Ee,de.data):t.texImage3D(e.TEXTURE_2D_ARRAY,re,_e,de.width,de.height,te.depth,0,se,Ee,de.data)}else{y&&ie&&t.texStorage2D(e.TEXTURE_2D,Te,_e,Fe[0].width,Fe[0].height);for(let re=0,J=Fe.length;re<J;re++)de=Fe[re],u.format!==Xt?se!==null?y?ce&&t.compressedTexSubImage2D(e.TEXTURE_2D,re,0,0,de.width,de.height,se,de.data):t.compressedTexImage2D(e.TEXTURE_2D,re,_e,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):y?ce&&t.texSubImage2D(e.TEXTURE_2D,re,0,0,de.width,de.height,se,Ee,de.data):t.texImage2D(e.TEXTURE_2D,re,_e,de.width,de.height,0,se,Ee,de.data)}else if(u.isDataArrayTexture)if(y){if(ie&&t.texStorage3D(e.TEXTURE_2D_ARRAY,Te,_e,te.width,te.height,te.depth),ce)if(u.layerUpdates.size>0){const re=ao(te.width,te.height,u.format,u.type);for(const J of u.layerUpdates){const Ae=te.data.subarray(J*re/te.data.BYTES_PER_ELEMENT,(J+1)*re/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,J,te.width,te.height,1,se,Ee,Ae)}u.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,se,Ee,te.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,_e,te.width,te.height,te.depth,0,se,Ee,te.data);else if(u.isData3DTexture)y?(ie&&t.texStorage3D(e.TEXTURE_3D,Te,_e,te.width,te.height,te.depth),ce&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,se,Ee,te.data)):t.texImage3D(e.TEXTURE_3D,0,_e,te.width,te.height,te.depth,0,se,Ee,te.data);else if(u.isFramebufferTexture){if(ie)if(y)t.texStorage2D(e.TEXTURE_2D,Te,_e,te.width,te.height);else{let re=te.width,J=te.height;for(let Ae=0;Ae<Te;Ae++)t.texImage2D(e.TEXTURE_2D,Ae,_e,re,J,0,se,Ee,null),re>>=1,J>>=1}}else if(Fe.length>0){if(y&&ie){const re=Ge(Fe[0]);t.texStorage2D(e.TEXTURE_2D,Te,_e,re.width,re.height)}for(let re=0,J=Fe.length;re<J;re++)de=Fe[re],y?ce&&t.texSubImage2D(e.TEXTURE_2D,re,0,0,se,Ee,de):t.texImage2D(e.TEXTURE_2D,re,_e,se,Ee,de);u.generateMipmaps=!1}else if(y){if(ie){const re=Ge(te);t.texStorage2D(e.TEXTURE_2D,Te,_e,re.width,re.height)}ce&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,se,Ee,te)}else t.texImage2D(e.TEXTURE_2D,0,_e,se,Ee,te);f(u)&&l(z),xe.__version=G.version,u.onUpdate&&u.onUpdate(u)}T.__version=u.version}function K(T,u,F){if(u.image.length!==6)return;const z=We(T,u),j=u.source;t.bindTexture(e.TEXTURE_CUBE_MAP,T.__webglTexture,e.TEXTURE0+F);const G=i.get(j);if(j.version!==G.__version||z===!0){t.activeTexture(e.TEXTURE0+F);const xe=vt.getPrimaries(vt.workingColorSpace),ee=u.colorSpace===Dn?null:vt.getPrimaries(u.colorSpace),he=u.colorSpace===Dn||xe===ee?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,u.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,u.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,u.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const ge=u.isCompressedTexture||u.image[0].isCompressedTexture,te=u.image[0]&&u.image[0].isDataTexture,se=[];for(let J=0;J<6;J++)!ge&&!te?se[J]=E(u.image[J],!0,r.maxCubemapSize):se[J]=te?u.image[J].image:u.image[J],se[J]=qe(u,se[J]);const Ee=se[0],_e=a.convert(u.format,u.colorSpace),de=a.convert(u.type),Fe=A(u.internalFormat,_e,de,u.colorSpace),y=u.isVideoTexture!==!0,ie=G.__version===void 0||z===!0,ce=j.dataReady;let Te=C(u,Ee);Ve(e.TEXTURE_CUBE_MAP,u);let re;if(ge){y&&ie&&t.texStorage2D(e.TEXTURE_CUBE_MAP,Te,Fe,Ee.width,Ee.height);for(let J=0;J<6;J++){re=se[J].mipmaps;for(let Ae=0;Ae<re.length;Ae++){const Oe=re[Ae];u.format!==Xt?_e!==null?y?ce&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae,0,0,Oe.width,Oe.height,_e,Oe.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae,Fe,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):y?ce&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae,0,0,Oe.width,Oe.height,_e,de,Oe.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae,Fe,Oe.width,Oe.height,0,_e,de,Oe.data)}}}else{if(re=u.mipmaps,y&&ie){re.length>0&&Te++;const J=Ge(se[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,Te,Fe,J.width,J.height)}for(let J=0;J<6;J++)if(te){y?ce&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,se[J].width,se[J].height,_e,de,se[J].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Fe,se[J].width,se[J].height,0,_e,de,se[J].data);for(let Ae=0;Ae<re.length;Ae++){const at=re[Ae].image[J].image;y?ce&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae+1,0,0,at.width,at.height,_e,de,at.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae+1,Fe,at.width,at.height,0,_e,de,at.data)}}else{y?ce&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,_e,de,se[J]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Fe,_e,de,se[J]);for(let Ae=0;Ae<re.length;Ae++){const Oe=re[Ae];y?ce&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae+1,0,0,_e,de,Oe.image[J]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae+1,Fe,_e,de,Oe.image[J])}}}f(u)&&l(e.TEXTURE_CUBE_MAP),G.__version=j.version,u.onUpdate&&u.onUpdate(u)}T.__version=u.version}function me(T,u,F,z,j,G){const xe=a.convert(F.format,F.colorSpace),ee=a.convert(F.type),he=A(F.internalFormat,xe,ee,F.colorSpace),ge=i.get(u),te=i.get(F);if(te.__renderTarget=u,!ge.__hasExternalTextures){const se=Math.max(1,u.width>>G),Ee=Math.max(1,u.height>>G);j===e.TEXTURE_3D||j===e.TEXTURE_2D_ARRAY?t.texImage3D(j,G,he,se,Ee,u.depth,0,xe,ee,null):t.texImage2D(j,G,he,se,Ee,0,xe,ee,null)}t.bindFramebuffer(e.FRAMEBUFFER,T),ue(u)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,z,j,te.__webglTexture,0,De(u)):(j===e.TEXTURE_2D||j>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,z,j,te.__webglTexture,G),t.bindFramebuffer(e.FRAMEBUFFER,null)}function Le(T,u,F){if(e.bindRenderbuffer(e.RENDERBUFFER,T),u.depthBuffer){const z=u.depthTexture,j=z&&z.isDepthTexture?z.type:null,G=x(u.stencilBuffer,j),xe=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ee=De(u);ue(u)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ee,G,u.width,u.height):F?e.renderbufferStorageMultisample(e.RENDERBUFFER,ee,G,u.width,u.height):e.renderbufferStorage(e.RENDERBUFFER,G,u.width,u.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,xe,e.RENDERBUFFER,T)}else{const z=u.textures;for(let j=0;j<z.length;j++){const G=z[j],xe=a.convert(G.format,G.colorSpace),ee=a.convert(G.type),he=A(G.internalFormat,xe,ee,G.colorSpace),ge=De(u);F&&ue(u)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,ge,he,u.width,u.height):ue(u)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ge,he,u.width,u.height):e.renderbufferStorage(e.RENDERBUFFER,he,u.width,u.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ce(T,u){if(u&&u.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(e.FRAMEBUFFER,T),!(u.depthTexture&&u.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const z=i.get(u.depthTexture);z.__renderTarget=u,(!z.__webglTexture||u.depthTexture.image.width!==u.width||u.depthTexture.image.height!==u.height)&&(u.depthTexture.image.width=u.width,u.depthTexture.image.height=u.height,u.depthTexture.needsUpdate=!0),$(u.depthTexture,0);const j=z.__webglTexture,G=De(u);if(u.depthTexture.format===tr)ue(u)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,j,0,G):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,j,0);else if(u.depthTexture.format===Oi)ue(u)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,j,0,G):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function ke(T){const u=i.get(T),F=T.isWebGLCubeRenderTarget===!0;if(u.__boundDepthTexture!==T.depthTexture){const z=T.depthTexture;if(u.__depthDisposeCallback&&u.__depthDisposeCallback(),z){const j=()=>{delete u.__boundDepthTexture,delete u.__depthDisposeCallback,z.removeEventListener("dispose",j)};z.addEventListener("dispose",j),u.__depthDisposeCallback=j}u.__boundDepthTexture=z}if(T.depthTexture&&!u.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const z=T.texture.mipmaps;z&&z.length>0?Ce(u.__webglFramebuffer[0],T):Ce(u.__webglFramebuffer,T)}else if(F){u.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer[z]),u.__webglDepthbuffer[z]===void 0)u.__webglDepthbuffer[z]=e.createRenderbuffer(),Le(u.__webglDepthbuffer[z],T,!1);else{const j=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,G=u.__webglDepthbuffer[z];e.bindRenderbuffer(e.RENDERBUFFER,G),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,G)}}else{const z=T.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),u.__webglDepthbuffer===void 0)u.__webglDepthbuffer=e.createRenderbuffer(),Le(u.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,G=u.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,G),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,G)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function ft(T,u,F){const z=i.get(T);u!==void 0&&me(z.__webglFramebuffer,T,T.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),F!==void 0&&ke(T)}function w(T){const u=T.texture,F=i.get(T),z=i.get(u);T.addEventListener("dispose",D);const j=T.textures,G=T.isWebGLCubeRenderTarget===!0,xe=j.length>1;if(xe||(z.__webglTexture===void 0&&(z.__webglTexture=e.createTexture()),z.__version=u.version,o.memory.textures++),G){F.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(u.mipmaps&&u.mipmaps.length>0){F.__webglFramebuffer[ee]=[];for(let he=0;he<u.mipmaps.length;he++)F.__webglFramebuffer[ee][he]=e.createFramebuffer()}else F.__webglFramebuffer[ee]=e.createFramebuffer()}else{if(u.mipmaps&&u.mipmaps.length>0){F.__webglFramebuffer=[];for(let ee=0;ee<u.mipmaps.length;ee++)F.__webglFramebuffer[ee]=e.createFramebuffer()}else F.__webglFramebuffer=e.createFramebuffer();if(xe)for(let ee=0,he=j.length;ee<he;ee++){const ge=i.get(j[ee]);ge.__webglTexture===void 0&&(ge.__webglTexture=e.createTexture(),o.memory.textures++)}if(T.samples>0&&ue(T)===!1){F.__webglMultisampledFramebuffer=e.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ee=0;ee<j.length;ee++){const he=j[ee];F.__webglColorRenderbuffer[ee]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,F.__webglColorRenderbuffer[ee]);const ge=a.convert(he.format,he.colorSpace),te=a.convert(he.type),se=A(he.internalFormat,ge,te,he.colorSpace,T.isXRRenderTarget===!0),Ee=De(T);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ee,se,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ee,e.RENDERBUFFER,F.__webglColorRenderbuffer[ee])}e.bindRenderbuffer(e.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=e.createRenderbuffer(),Le(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(G){t.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture),Ve(e.TEXTURE_CUBE_MAP,u);for(let ee=0;ee<6;ee++)if(u.mipmaps&&u.mipmaps.length>0)for(let he=0;he<u.mipmaps.length;he++)me(F.__webglFramebuffer[ee][he],T,u,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he);else me(F.__webglFramebuffer[ee],T,u,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);f(u)&&l(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let ee=0,he=j.length;ee<he;ee++){const ge=j[ee],te=i.get(ge);let se=e.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(se=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(se,te.__webglTexture),Ve(se,ge),me(F.__webglFramebuffer,T,ge,e.COLOR_ATTACHMENT0+ee,se,0),f(ge)&&l(se)}t.unbindTexture()}else{let ee=e.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ee=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(ee,z.__webglTexture),Ve(ee,u),u.mipmaps&&u.mipmaps.length>0)for(let he=0;he<u.mipmaps.length;he++)me(F.__webglFramebuffer[he],T,u,e.COLOR_ATTACHMENT0,ee,he);else me(F.__webglFramebuffer,T,u,e.COLOR_ATTACHMENT0,ee,0);f(u)&&l(ee),t.unbindTexture()}T.depthBuffer&&ke(T)}function it(T){const u=T.textures;for(let F=0,z=u.length;F<z;F++){const j=u[F];if(f(j)){const G=b(T),xe=i.get(j).__webglTexture;t.bindTexture(G,xe),l(G),t.unbindTexture()}}}const L=[],ae=[];function Q(T){if(T.samples>0){if(ue(T)===!1){const u=T.textures,F=T.width,z=T.height;let j=e.COLOR_BUFFER_BIT;const G=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,xe=i.get(T),ee=u.length>1;if(ee)for(let ge=0;ge<u.length;ge++)t.bindFramebuffer(e.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ge,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,xe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ge,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const he=T.texture.mipmaps;he&&he.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ge=0;ge<u.length;ge++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=e.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=e.STENCIL_BUFFER_BIT)),ee){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,xe.__webglColorRenderbuffer[ge]);const te=i.get(u[ge]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,te,0)}e.blitFramebuffer(0,0,F,z,0,0,F,z,j,e.NEAREST),c===!0&&(L.length=0,ae.length=0,L.push(e.COLOR_ATTACHMENT0+ge),T.depthBuffer&&T.resolveDepthBuffer===!1&&(L.push(G),ae.push(G),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ae)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,L))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ee)for(let ge=0;ge<u.length;ge++){t.bindFramebuffer(e.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ge,e.RENDERBUFFER,xe.__webglColorRenderbuffer[ge]);const te=i.get(u[ge]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,xe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ge,e.TEXTURE_2D,te,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const u=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[u])}}}function De(T){return Math.min(r.maxSamples,T.samples)}function ue(T){const u=i.get(T);return T.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&u.__useRenderToTexture!==!1}function Me(T){const u=o.render.frame;d.get(T)!==u&&(d.set(T,u),T.update())}function qe(T,u){const F=T.colorSpace,z=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==Wi&&F!==Dn&&(vt.getTransfer(F)===ot?(z!==Xt||j!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),u}function Ge(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(p.width=T.naturalWidth||T.width,p.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(p.width=T.displayWidth,p.height=T.displayHeight):(p.width=T.width,p.height=T.height),p}this.allocateTextureUnit=W,this.resetTextureUnits=O,this.setTexture2D=$,this.setTexture2DArray=q,this.setTexture3D=le,this.setTextureCube=V,this.rebindTextures=ft,this.setupRenderTarget=w,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ue}function cp(e,n){function t(i,r=Dn){let a;const o=vt.getTransfer(r);if(i===wn)return e.UNSIGNED_BYTE;if(i===hs)return e.UNSIGNED_SHORT_4_4_4_4;if(i===ps)return e.UNSIGNED_SHORT_5_5_5_1;if(i===kl)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Hl)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Vl)return e.BYTE;if(i===zl)return e.SHORT;if(i===Gi)return e.UNSIGNED_SHORT;if(i===vs)return e.INT;if(i===si)return e.UNSIGNED_INT;if(i===xn)return e.FLOAT;if(i===zi)return e.HALF_FLOAT;if(i===Wl)return e.ALPHA;if(i===Xl)return e.RGB;if(i===Xt)return e.RGBA;if(i===tr)return e.DEPTH_COMPONENT;if(i===Oi)return e.DEPTH_STENCIL;if(i===ql)return e.RED;if(i===_s)return e.RED_INTEGER;if(i===Yl)return e.RG;if(i===Ss)return e.RG_INTEGER;if(i===Ms)return e.RGBA_INTEGER;if(i===ia||i===aa||i===ra||i===oa)if(o===ot)if(a=n.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===ia)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===aa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ra)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===oa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=n.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===ia)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===aa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ra)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===oa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ar||i===Rr||i===wr||i===Cr)if(a=n.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Ar)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Cr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yr||i===Pr||i===Lr)if(a=n.get("WEBGL_compressed_texture_etc"),a!==null){if(i===yr||i===Pr)return o===ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Lr)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Dr||i===Ur||i===Ir||i===Nr||i===Fr||i===Or||i===Br||i===Gr||i===kr||i===Hr||i===Vr||i===zr||i===Wr||i===Xr)if(a=n.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Dr)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ur)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ir)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nr)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fr)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Or)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Br)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Gr)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kr)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hr)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vr)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zr)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wr)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xr)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qr||i===Yr||i===Kr)if(a=n.get("EXT_texture_compression_bptc"),a!==null){if(i===qr)return o===ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$r||i===Zr||i===Qr||i===jr)if(a=n.get("EXT_texture_compression_rgtc"),a!==null){if(i===$r)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Zr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===oi?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const dp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,up=`
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

}`;class fp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new ms(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new nn({vertexShader:dp,fragmentShader:up,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new gs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hp extends ol{constructor(n,t){super();const i=this;let r=null,a=1,o=null,s="local-floor",c=1,p=null,d=null,h=null,g=null,m=null,M=null;const E=typeof XRWebGLBinding<"u",f=new fp,l={},b=t.getContextAttributes();let A=null,x=null;const C=[],R=[],D=new ut;let U=null;const _=new jn;_.viewport=new Rt;const S=new jn;S.viewport=new Rt;const P=[_,S],O=new sl;let W=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let K=C[B];return K===void 0&&(K=new ta,C[B]=K),K.getTargetRaySpace()},this.getControllerGrip=function(B){let K=C[B];return K===void 0&&(K=new ta,C[B]=K),K.getGripSpace()},this.getHand=function(B){let K=C[B];return K===void 0&&(K=new ta,C[B]=K),K.getHandSpace()};function $(B){const K=R.indexOf(B.inputSource);if(K===-1)return;const me=C[K];me!==void 0&&(me.update(B.inputSource,B.frame,p||o),me.dispatchEvent({type:B.type,data:B.inputSource}))}function q(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",le);for(let B=0;B<C.length;B++){const K=R[B];K!==null&&(R[B]=null,C[B].disconnect(K))}W=null,X=null,f.reset();for(const B in l)delete l[B];n.setRenderTarget(A),m=null,g=null,h=null,r=null,x=null,Xe.stop(),i.isPresenting=!1,n.setPixelRatio(U),n.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||o},this.setReferenceSpace=function(B){p=B},this.getBaseLayer=function(){return g!==null?g:m},this.getBinding=function(){return h===null&&E&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(A=n.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",q),r.addEventListener("inputsourceschange",le),b.xrCompatible!==!0&&await t.makeXRCompatible(),U=n.getPixelRatio(),n.getSize(D),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Le=null,Ce=null;b.depth&&(Ce=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=b.stencil?Oi:tr,Le=b.stencil?oi:si);const ke={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:a};h=this.getBinding(),g=h.createProjectionLayer(ke),r.updateRenderState({layers:[g]}),n.setPixelRatio(1),n.setSize(g.textureWidth,g.textureHeight,!1),x=new Fn(g.textureWidth,g.textureHeight,{format:Xt,type:wn,depthTexture:new cs(g.textureWidth,g.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:b.stencil,colorSpace:n.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const me={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,me),r.updateRenderState({baseLayer:m}),n.setPixelRatio(1),n.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new Fn(m.framebufferWidth,m.framebufferHeight,{format:Xt,type:wn,colorSpace:n.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),p=null,o=await r.requestReferenceSpace(s),Xe.setContext(r),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function le(B){for(let K=0;K<B.removed.length;K++){const me=B.removed[K],Le=R.indexOf(me);Le>=0&&(R[Le]=null,C[Le].disconnect(me))}for(let K=0;K<B.added.length;K++){const me=B.added[K];let Le=R.indexOf(me);if(Le===-1){for(let ke=0;ke<C.length;ke++)if(ke>=R.length){R.push(me),Le=ke;break}else if(R[ke]===null){R[ke]=me,Le=ke;break}if(Le===-1)break}const Ce=C[Le];Ce&&Ce.connect(me)}}const V=new ne,ve=new ne;function Re(B,K,me){V.setFromMatrixPosition(K.matrixWorld),ve.setFromMatrixPosition(me.matrixWorld);const Le=V.distanceTo(ve),Ce=K.projectionMatrix.elements,ke=me.projectionMatrix.elements,ft=Ce[14]/(Ce[10]-1),w=Ce[14]/(Ce[10]+1),it=(Ce[9]+1)/Ce[5],L=(Ce[9]-1)/Ce[5],ae=(Ce[8]-1)/Ce[0],Q=(ke[8]+1)/ke[0],De=ft*ae,ue=ft*Q,Me=Le/(-ae+Q),qe=Me*-ae;if(K.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(qe),B.translateZ(Me),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),Ce[10]===-1)B.projectionMatrix.copy(K.projectionMatrix),B.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Ge=ft+Me,T=w+Me,u=De-qe,F=ue+(Le-qe),z=it*w/T*Ge,j=L*w/T*Ge;B.projectionMatrix.makePerspective(u,F,z,j,Ge,T),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function we(B,K){K===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(K.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;let K=B.near,me=B.far;f.texture!==null&&(f.depthNear>0&&(K=f.depthNear),f.depthFar>0&&(me=f.depthFar)),O.near=S.near=_.near=K,O.far=S.far=_.far=me,(W!==O.near||X!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),W=O.near,X=O.far),O.layers.mask=B.layers.mask|6,_.layers.mask=O.layers.mask&3,S.layers.mask=O.layers.mask&5;const Le=B.parent,Ce=O.cameras;we(O,Le);for(let ke=0;ke<Ce.length;ke++)we(Ce[ke],Le);Ce.length===2?Re(O,_,S):O.projectionMatrix.copy(_.projectionMatrix),Ve(B,O,Le)};function Ve(B,K,me){me===null?B.matrix.copy(K.matrixWorld):(B.matrix.copy(me.matrixWorld),B.matrix.invert(),B.matrix.multiply(K.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(K.projectionMatrix),B.projectionMatrixInverse.copy(K.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=ll*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(g===null&&m===null))return c},this.setFoveation=function(B){c=B,g!==null&&(g.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(O)},this.getCameraTexture=function(B){return l[B]};let We=null;function Qe(B,K){if(d=K.getViewerPose(p||o),M=K,d!==null){const me=d.views;m!==null&&(n.setRenderTargetFramebuffer(x,m.framebuffer),n.setRenderTarget(x));let Le=!1;me.length!==O.cameras.length&&(O.cameras.length=0,Le=!0);for(let w=0;w<me.length;w++){const it=me[w];let L=null;if(m!==null)L=m.getViewport(it);else{const Q=h.getViewSubImage(g,it);L=Q.viewport,w===0&&(n.setRenderTargetTextures(x,Q.colorTexture,Q.depthStencilTexture),n.setRenderTarget(x))}let ae=P[w];ae===void 0&&(ae=new jn,ae.layers.enable(w),ae.viewport=new Rt,P[w]=ae),ae.matrix.fromArray(it.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(it.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(L.x,L.y,L.width,L.height),w===0&&(O.matrix.copy(ae.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Le===!0&&O.cameras.push(ae)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){h=i.getBinding();const w=h.getDepthInformation(me[0]);w&&w.isValid&&w.texture&&f.init(w,r.renderState)}if(Ce&&Ce.includes("camera-access")&&E){n.state.unbindTexture(),h=i.getBinding();for(let w=0;w<me.length;w++){const it=me[w].camera;if(it){let L=l[it];L||(L=new ms,l[it]=L);const ae=h.getCameraImage(it);L.sourceTexture=ae}}}}for(let me=0;me<C.length;me++){const Le=R[me],Ce=C[me];Le!==null&&Ce!==void 0&&Ce.update(Le,K,p||o)}We&&We(B,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),M=null}const Xe=new ys;Xe.setAnimationLoop(Qe),this.setAnimationLoop=function(B){We=B},this.dispose=function(){}}}const gn=new Wt,pp=new Nt;function mp(e,n){function t(f,l){f.matrixAutoUpdate===!0&&f.updateMatrix(),l.value.copy(f.matrix)}function i(f,l){l.color.getRGB(f.fogColor.value,xs(e)),l.isFog?(f.fogNear.value=l.near,f.fogFar.value=l.far):l.isFogExp2&&(f.fogDensity.value=l.density)}function r(f,l,b,A,x){l.isMeshBasicMaterial||l.isMeshLambertMaterial?a(f,l):l.isMeshToonMaterial?(a(f,l),h(f,l)):l.isMeshPhongMaterial?(a(f,l),d(f,l)):l.isMeshStandardMaterial?(a(f,l),g(f,l),l.isMeshPhysicalMaterial&&m(f,l,x)):l.isMeshMatcapMaterial?(a(f,l),M(f,l)):l.isMeshDepthMaterial?a(f,l):l.isMeshDistanceMaterial?(a(f,l),E(f,l)):l.isMeshNormalMaterial?a(f,l):l.isLineBasicMaterial?(o(f,l),l.isLineDashedMaterial&&s(f,l)):l.isPointsMaterial?c(f,l,b,A):l.isSpriteMaterial?p(f,l):l.isShadowMaterial?(f.color.value.copy(l.color),f.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}function a(f,l){f.opacity.value=l.opacity,l.color&&f.diffuse.value.copy(l.color),l.emissive&&f.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(f.map.value=l.map,t(l.map,f.mapTransform)),l.alphaMap&&(f.alphaMap.value=l.alphaMap,t(l.alphaMap,f.alphaMapTransform)),l.bumpMap&&(f.bumpMap.value=l.bumpMap,t(l.bumpMap,f.bumpMapTransform),f.bumpScale.value=l.bumpScale,l.side===yt&&(f.bumpScale.value*=-1)),l.normalMap&&(f.normalMap.value=l.normalMap,t(l.normalMap,f.normalMapTransform),f.normalScale.value.copy(l.normalScale),l.side===yt&&f.normalScale.value.negate()),l.displacementMap&&(f.displacementMap.value=l.displacementMap,t(l.displacementMap,f.displacementMapTransform),f.displacementScale.value=l.displacementScale,f.displacementBias.value=l.displacementBias),l.emissiveMap&&(f.emissiveMap.value=l.emissiveMap,t(l.emissiveMap,f.emissiveMapTransform)),l.specularMap&&(f.specularMap.value=l.specularMap,t(l.specularMap,f.specularMapTransform)),l.alphaTest>0&&(f.alphaTest.value=l.alphaTest);const b=n.get(l),A=b.envMap,x=b.envMapRotation;A&&(f.envMap.value=A,gn.copy(x),gn.x*=-1,gn.y*=-1,gn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(gn.y*=-1,gn.z*=-1),f.envMapRotation.value.setFromMatrix4(pp.makeRotationFromEuler(gn)),f.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=l.reflectivity,f.ior.value=l.ior,f.refractionRatio.value=l.refractionRatio),l.lightMap&&(f.lightMap.value=l.lightMap,f.lightMapIntensity.value=l.lightMapIntensity,t(l.lightMap,f.lightMapTransform)),l.aoMap&&(f.aoMap.value=l.aoMap,f.aoMapIntensity.value=l.aoMapIntensity,t(l.aoMap,f.aoMapTransform))}function o(f,l){f.diffuse.value.copy(l.color),f.opacity.value=l.opacity,l.map&&(f.map.value=l.map,t(l.map,f.mapTransform))}function s(f,l){f.dashSize.value=l.dashSize,f.totalSize.value=l.dashSize+l.gapSize,f.scale.value=l.scale}function c(f,l,b,A){f.diffuse.value.copy(l.color),f.opacity.value=l.opacity,f.size.value=l.size*b,f.scale.value=A*.5,l.map&&(f.map.value=l.map,t(l.map,f.uvTransform)),l.alphaMap&&(f.alphaMap.value=l.alphaMap,t(l.alphaMap,f.alphaMapTransform)),l.alphaTest>0&&(f.alphaTest.value=l.alphaTest)}function p(f,l){f.diffuse.value.copy(l.color),f.opacity.value=l.opacity,f.rotation.value=l.rotation,l.map&&(f.map.value=l.map,t(l.map,f.mapTransform)),l.alphaMap&&(f.alphaMap.value=l.alphaMap,t(l.alphaMap,f.alphaMapTransform)),l.alphaTest>0&&(f.alphaTest.value=l.alphaTest)}function d(f,l){f.specular.value.copy(l.specular),f.shininess.value=Math.max(l.shininess,1e-4)}function h(f,l){l.gradientMap&&(f.gradientMap.value=l.gradientMap)}function g(f,l){f.metalness.value=l.metalness,l.metalnessMap&&(f.metalnessMap.value=l.metalnessMap,t(l.metalnessMap,f.metalnessMapTransform)),f.roughness.value=l.roughness,l.roughnessMap&&(f.roughnessMap.value=l.roughnessMap,t(l.roughnessMap,f.roughnessMapTransform)),l.envMap&&(f.envMapIntensity.value=l.envMapIntensity)}function m(f,l,b){f.ior.value=l.ior,l.sheen>0&&(f.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),f.sheenRoughness.value=l.sheenRoughness,l.sheenColorMap&&(f.sheenColorMap.value=l.sheenColorMap,t(l.sheenColorMap,f.sheenColorMapTransform)),l.sheenRoughnessMap&&(f.sheenRoughnessMap.value=l.sheenRoughnessMap,t(l.sheenRoughnessMap,f.sheenRoughnessMapTransform))),l.clearcoat>0&&(f.clearcoat.value=l.clearcoat,f.clearcoatRoughness.value=l.clearcoatRoughness,l.clearcoatMap&&(f.clearcoatMap.value=l.clearcoatMap,t(l.clearcoatMap,f.clearcoatMapTransform)),l.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap,t(l.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),l.clearcoatNormalMap&&(f.clearcoatNormalMap.value=l.clearcoatNormalMap,t(l.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),l.side===yt&&f.clearcoatNormalScale.value.negate())),l.dispersion>0&&(f.dispersion.value=l.dispersion),l.iridescence>0&&(f.iridescence.value=l.iridescence,f.iridescenceIOR.value=l.iridescenceIOR,f.iridescenceThicknessMinimum.value=l.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=l.iridescenceThicknessRange[1],l.iridescenceMap&&(f.iridescenceMap.value=l.iridescenceMap,t(l.iridescenceMap,f.iridescenceMapTransform)),l.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=l.iridescenceThicknessMap,t(l.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),l.transmission>0&&(f.transmission.value=l.transmission,f.transmissionSamplerMap.value=b.texture,f.transmissionSamplerSize.value.set(b.width,b.height),l.transmissionMap&&(f.transmissionMap.value=l.transmissionMap,t(l.transmissionMap,f.transmissionMapTransform)),f.thickness.value=l.thickness,l.thicknessMap&&(f.thicknessMap.value=l.thicknessMap,t(l.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=l.attenuationDistance,f.attenuationColor.value.copy(l.attenuationColor)),l.anisotropy>0&&(f.anisotropyVector.value.set(l.anisotropy*Math.cos(l.anisotropyRotation),l.anisotropy*Math.sin(l.anisotropyRotation)),l.anisotropyMap&&(f.anisotropyMap.value=l.anisotropyMap,t(l.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=l.specularIntensity,f.specularColor.value.copy(l.specularColor),l.specularColorMap&&(f.specularColorMap.value=l.specularColorMap,t(l.specularColorMap,f.specularColorMapTransform)),l.specularIntensityMap&&(f.specularIntensityMap.value=l.specularIntensityMap,t(l.specularIntensityMap,f.specularIntensityMapTransform))}function M(f,l){l.matcap&&(f.matcap.value=l.matcap)}function E(f,l){const b=n.get(l).light;f.referencePosition.value.setFromMatrixPosition(b.matrixWorld),f.nearDistance.value=b.shadow.camera.near,f.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function gp(e,n,t,i){let r={},a={},o=[];const s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,A){const x=A.program;i.uniformBlockBinding(b,x)}function p(b,A){let x=r[b.id];x===void 0&&(M(b),x=d(b),r[b.id]=x,b.addEventListener("dispose",f));const C=A.program;i.updateUBOMapping(b,C);const R=n.render.frame;a[b.id]!==R&&(g(b),a[b.id]=R)}function d(b){const A=h();b.__bindingPointIndex=A;const x=e.createBuffer(),C=b.__size,R=b.usage;return e.bindBuffer(e.UNIFORM_BUFFER,x),e.bufferData(e.UNIFORM_BUFFER,C,R),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,A,x),x}function h(){for(let b=0;b<s;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(b){const A=r[b.id],x=b.uniforms,C=b.__cache;e.bindBuffer(e.UNIFORM_BUFFER,A);for(let R=0,D=x.length;R<D;R++){const U=Array.isArray(x[R])?x[R]:[x[R]];for(let _=0,S=U.length;_<S;_++){const P=U[_];if(m(P,R,_,C)===!0){const O=P.__offset,W=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let $=0;$<W.length;$++){const q=W[$],le=E(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,e.bufferSubData(e.UNIFORM_BUFFER,O+X,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,X),X+=le.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,O,P.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function m(b,A,x,C){const R=b.value,D=A+"_"+x;if(C[D]===void 0)return typeof R=="number"||typeof R=="boolean"?C[D]=R:C[D]=R.clone(),!0;{const U=C[D];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return C[D]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function M(b){const A=b.uniforms;let x=0;const C=16;for(let D=0,U=A.length;D<U;D++){const _=Array.isArray(A[D])?A[D]:[A[D]];for(let S=0,P=_.length;S<P;S++){const O=_[S],W=Array.isArray(O.value)?O.value:[O.value];for(let X=0,$=W.length;X<$;X++){const q=W[X],le=E(q),V=x%C,ve=V%le.boundary,Re=V+ve;x+=ve,Re!==0&&C-Re<le.storage&&(x+=C-Re),O.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=le.storage}}}const R=x%C;return R>0&&(x+=C-R),b.__size=x,b.__cache={},this}function E(b){const A={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(A.boundary=4,A.storage=4):b.isVector2?(A.boundary=8,A.storage=8):b.isVector3||b.isColor?(A.boundary=16,A.storage=12):b.isVector4?(A.boundary=16,A.storage=16):b.isMatrix3?(A.boundary=48,A.storage=48):b.isMatrix4?(A.boundary=64,A.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),A}function f(b){const A=b.target;A.removeEventListener("dispose",f);const x=o.indexOf(A.__bindingPointIndex);o.splice(x,1),e.deleteBuffer(r[A.id]),delete r[A.id],delete a[A.id]}function l(){for(const b in r)e.deleteBuffer(r[b]);o=[],r={},a={}}return{bind:c,update:p,dispose:l}}class vp{constructor(n={}){const{canvas:t=nl(),context:i=null,depth:r=!0,stencil:a=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:p=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:g=!1}=n;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const M=new Uint32Array(4),E=new Int32Array(4);let f=null,l=null;const b=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let C=!1;this._outputColorSpace=Ja;let R=0,D=0,U=null,_=-1,S=null;const P=new Rt,O=new Rt;let W=null;const X=new $e(0);let $=0,q=t.width,le=t.height,V=1,ve=null,Re=null;const we=new Rt(0,0,q,le),Ve=new Rt(0,0,q,le);let We=!1;const Qe=new ls;let Xe=!1,B=!1;const K=new Nt,me=new ne,Le=new Rt,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function ft(){return U===null?V:1}let w=i;function it(v,I){return t.getContext(v,I)}try{const v={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:p,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${il}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",re,!1),w===null){const I="webgl2";if(w=it(I,v),w===null)throw it(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let L,ae,Q,De,ue,Me,qe,Ge,T,u,F,z,j,G,xe,ee,he,ge,te,se,Ee,_e,de,Fe;function y(){L=new wf(w),L.init(),_e=new cp(w,L),ae=new Mf(w,L,n,_e),Q=new sp(w,L),ae.reversedDepthBuffer&&g&&Q.buffers.depth.setReversed(!0),De=new Pf(w),ue=new Kh,Me=new lp(w,L,Q,ue,ae,_e,De),qe=new xf(x),Ge=new Rf(x),T=new Nc(w),de=new _f(w,T),u=new Cf(w,T,De,de),F=new Df(w,u,T,De),te=new Lf(w,ae,Me),ee=new Ef(ue),z=new Yh(x,qe,Ge,L,ae,de,ee),j=new mp(x,ue),G=new Zh,xe=new np(L),ge=new vf(x,qe,Ge,Q,F,m,c),he=new rp(x,F,ae),Fe=new gp(w,De,ae,Q),se=new Sf(w,L,De),Ee=new yf(w,L,De),De.programs=z.programs,x.capabilities=ae,x.extensions=L,x.properties=ue,x.renderLists=G,x.shadowMap=he,x.state=Q,x.info=De}y();const ie=new hp(x,w);this.xr=ie,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const v=L.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=L.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(v){v!==void 0&&(V=v,this.setSize(q,le,!1))},this.getSize=function(v){return v.set(q,le)},this.setSize=function(v,I,k=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=v,le=I,t.width=Math.floor(v*V),t.height=Math.floor(I*V),k===!0&&(t.style.width=v+"px",t.style.height=I+"px"),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set(q*V,le*V).floor()},this.setDrawingBufferSize=function(v,I,k){q=v,le=I,V=k,t.width=Math.floor(v*k),t.height=Math.floor(I*k),this.setViewport(0,0,v,I)},this.getCurrentViewport=function(v){return v.copy(P)},this.getViewport=function(v){return v.copy(we)},this.setViewport=function(v,I,k,H){v.isVector4?we.set(v.x,v.y,v.z,v.w):we.set(v,I,k,H),Q.viewport(P.copy(we).multiplyScalar(V).round())},this.getScissor=function(v){return v.copy(Ve)},this.setScissor=function(v,I,k,H){v.isVector4?Ve.set(v.x,v.y,v.z,v.w):Ve.set(v,I,k,H),Q.scissor(O.copy(Ve).multiplyScalar(V).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(v){Q.setScissorTest(We=v)},this.setOpaqueSort=function(v){ve=v},this.setTransparentSort=function(v){Re=v},this.getClearColor=function(v){return v.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor(...arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha(...arguments)},this.clear=function(v=!0,I=!0,k=!0){let H=0;if(v){let N=!1;if(U!==null){const oe=U.texture.format;N=oe===Ms||oe===Ss||oe===_s}if(N){const oe=U.texture.type,pe=oe===wn||oe===si||oe===Gi||oe===oi||oe===hs||oe===ps,be=ge.getClearColor(),Se=ge.getClearAlpha(),Ue=be.r,Ne=be.g,ye=be.b;pe?(M[0]=Ue,M[1]=Ne,M[2]=ye,M[3]=Se,w.clearBufferuiv(w.COLOR,0,M)):(E[0]=Ue,E[1]=Ne,E[2]=ye,E[3]=Se,w.clearBufferiv(w.COLOR,0,E))}else H|=w.COLOR_BUFFER_BIT}I&&(H|=w.DEPTH_BUFFER_BIT),k&&(H|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",re,!1),ge.dispose(),G.dispose(),xe.dispose(),ue.dispose(),qe.dispose(),Ge.dispose(),F.dispose(),de.dispose(),Fe.dispose(),z.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Vt),ie.removeEventListener("sessionend",_r),hn.stop()};function ce(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const v=De.autoReset,I=he.enabled,k=he.autoUpdate,H=he.needsUpdate,N=he.type;y(),De.autoReset=v,he.enabled=I,he.autoUpdate=k,he.needsUpdate=H,he.type=N}function re(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function J(v){const I=v.target;I.removeEventListener("dispose",J),Ae(I)}function Ae(v){Oe(v),ue.remove(v)}function Oe(v){const I=ue.get(v).programs;I!==void 0&&(I.forEach(function(k){z.releaseProgram(k)}),v.isShaderMaterial&&z.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,k,H,N,oe){I===null&&(I=Ce);const pe=N.isMesh&&N.matrixWorld.determinant()<0,be=Zs(v,I,k,H,N);Q.setMaterial(H,pe);let Se=k.index,Ue=1;if(H.wireframe===!0){if(Se=u.getWireframeAttribute(k),Se===void 0)return;Ue=2}const Ne=k.drawRange,ye=k.attributes.position;let ze=Ne.start*Ue,je=(Ne.start+Ne.count)*Ue;oe!==null&&(ze=Math.max(ze,oe.start*Ue),je=Math.min(je,(oe.start+oe.count)*Ue)),Se!==null?(ze=Math.max(ze,0),je=Math.min(je,Se.count)):ye!=null&&(ze=Math.max(ze,0),je=Math.min(je,ye.count));const ht=je-ze;if(ht<0||ht===1/0)return;de.setup(N,H,be,k,Se);let rt,et=se;if(Se!==null&&(rt=T.get(Se),et=Ee,et.setIndex(rt)),N.isMesh)H.wireframe===!0?(Q.setLineWidth(H.wireframeLinewidth*ft()),et.setMode(w.LINES)):et.setMode(w.TRIANGLES);else if(N.isLine){let Pe=H.linewidth;Pe===void 0&&(Pe=1),Q.setLineWidth(Pe*ft()),N.isLineSegments?et.setMode(w.LINES):N.isLineLoop?et.setMode(w.LINE_LOOP):et.setMode(w.LINE_STRIP)}else N.isPoints?et.setMode(w.POINTS):N.isSprite&&et.setMode(w.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Pa("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),et.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(L.get("WEBGL_multi_draw"))et.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Pe=N._multiDrawStarts,lt=N._multiDrawCounts,Ye=N._multiDrawCount,wt=Se?T.get(Se).bytesPerElement:1,Pn=ue.get(H).currentProgram.getUniforms();for(let Ct=0;Ct<Ye;Ct++)Pn.setValue(w,"_gl_DrawID",Ct),et.render(Pe[Ct]/wt,lt[Ct])}else if(N.isInstancedMesh)et.renderInstances(ze,ht,N.count);else if(k.isInstancedBufferGeometry){const Pe=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,lt=Math.min(k.instanceCount,Pe);et.renderInstances(ze,ht,lt)}else et.render(ze,ht)};function at(v,I,k){v.transparent===!0&&v.side===It&&v.forceSinglePass===!1?(v.side=yt,v.needsUpdate=!0,pi(v,I,k),v.side=ai,v.needsUpdate=!0,pi(v,I,k),v.side=It):pi(v,I,k)}this.compile=function(v,I,k=null){k===null&&(k=v),l=xe.get(k),l.init(I),A.push(l),k.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(l.pushLight(N),N.castShadow&&l.pushShadow(N))}),v!==k&&v.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(l.pushLight(N),N.castShadow&&l.pushShadow(N))}),l.setupLights();const H=new Set;return v.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const oe=N.material;if(oe)if(Array.isArray(oe))for(let pe=0;pe<oe.length;pe++){const be=oe[pe];at(be,k,N),H.add(be)}else at(oe,k,N),H.add(oe)}),l=A.pop(),H},this.compileAsync=function(v,I,k=null){const H=this.compile(v,I,k);return new Promise(N=>{function oe(){if(H.forEach(function(pe){ue.get(pe).currentProgram.isReady()&&H.delete(pe)}),H.size===0){N(v);return}setTimeout(oe,10)}L.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Ze=null;function Zt(v){Ze&&Ze(v)}function Vt(){hn.stop()}function _r(){hn.start()}const hn=new ys;hn.setAnimationLoop(Zt),typeof self<"u"&&hn.setContext(self),this.setAnimationLoop=function(v){Ze=v,ie.setAnimationLoop(v),v===null?hn.stop():hn.start()},ie.addEventListener("sessionstart",Vt),ie.addEventListener("sessionend",_r),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(I),I=ie.getCamera()),v.isScene===!0&&v.onBeforeRender(x,v,I,U),l=xe.get(v,A.length),l.init(I),A.push(l),K.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Qe.setFromProjectionMatrix(K,br,I.reversedDepth),B=this.localClippingEnabled,Xe=ee.init(this.clippingPlanes,B),f=G.get(v,b.length),f.init(),b.push(f),ie.enabled===!0&&ie.isPresenting===!0){const oe=x.xr.getDepthSensingMesh();oe!==null&&Ji(oe,I,-1/0,x.sortObjects)}Ji(v,I,0,x.sortObjects),f.finish(),x.sortObjects===!0&&f.sort(ve,Re),ke=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,ke&&ge.addToRenderList(f,v),this.info.render.frame++,Xe===!0&&ee.beginShadows();const k=l.state.shadowsArray;he.render(k,v,I),Xe===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=f.opaque,N=f.transmissive;if(l.setupLights(),I.isArrayCamera){const oe=I.cameras;if(N.length>0)for(let pe=0,be=oe.length;pe<be;pe++){const Se=oe[pe];Mr(H,N,v,Se)}ke&&ge.render(v);for(let pe=0,be=oe.length;pe<be;pe++){const Se=oe[pe];Sr(f,v,Se,Se.viewport)}}else N.length>0&&Mr(H,N,v,I),ke&&ge.render(v),Sr(f,v,I);U!==null&&D===0&&(Me.updateMultisampleRenderTarget(U),Me.updateRenderTargetMipmap(U)),v.isScene===!0&&v.onAfterRender(x,v,I),de.resetDefaultState(),_=-1,S=null,A.pop(),A.length>0?(l=A[A.length-1],Xe===!0&&ee.setGlobalState(x.clippingPlanes,l.state.camera)):l=null,b.pop(),b.length>0?f=b[b.length-1]:f=null};function Ji(v,I,k,H){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)k=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLight)l.pushLight(v),v.castShadow&&l.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Qe.intersectsSprite(v)){H&&Le.setFromMatrixPosition(v.matrixWorld).applyMatrix4(K);const pe=F.update(v),be=v.material;be.visible&&f.push(v,pe,be,k,Le.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Qe.intersectsObject(v))){const pe=F.update(v),be=v.material;if(H&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Le.copy(v.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Le.copy(pe.boundingSphere.center)),Le.applyMatrix4(v.matrixWorld).applyMatrix4(K)),Array.isArray(be)){const Se=pe.groups;for(let Ue=0,Ne=Se.length;Ue<Ne;Ue++){const ye=Se[Ue],ze=be[ye.materialIndex];ze&&ze.visible&&f.push(v,pe,ze,k,Le.z,ye)}}else be.visible&&f.push(v,pe,be,k,Le.z,null)}}const oe=v.children;for(let pe=0,be=oe.length;pe<be;pe++)Ji(oe[pe],I,k,H)}function Sr(v,I,k,H){const N=v.opaque,oe=v.transmissive,pe=v.transparent;l.setupLightsView(k),Xe===!0&&ee.setGlobalState(x.clippingPlanes,k),H&&Q.viewport(P.copy(H)),N.length>0&&hi(N,I,k),oe.length>0&&hi(oe,I,k),pe.length>0&&hi(pe,I,k),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Mr(v,I,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;l.state.transmissionRenderTarget[H.id]===void 0&&(l.state.transmissionRenderTarget[H.id]=new Fn(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")||L.has("EXT_color_buffer_float")?zi:wn,minFilter:Mn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace}));const oe=l.state.transmissionRenderTarget[H.id],pe=H.viewport||P;oe.setSize(pe.z*x.transmissionResolutionScale,pe.w*x.transmissionResolutionScale);const be=x.getRenderTarget(),Se=x.getActiveCubeFace(),Ue=x.getActiveMipmapLevel();x.setRenderTarget(oe),x.getClearColor(X),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),x.clear(),ke&&ge.render(k);const Ne=x.toneMapping;x.toneMapping=ln;const ye=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),l.setupLightsView(H),Xe===!0&&ee.setGlobalState(x.clippingPlanes,H),hi(v,k,H),Me.updateMultisampleRenderTarget(oe),Me.updateRenderTargetMipmap(oe),L.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let je=0,ht=I.length;je<ht;je++){const rt=I[je],et=rt.object,Pe=rt.geometry,lt=rt.material,Ye=rt.group;if(lt.side===It&&et.layers.test(H.layers)){const wt=lt.side;lt.side=yt,lt.needsUpdate=!0,Er(et,k,H,Pe,lt,Ye),lt.side=wt,lt.needsUpdate=!0,ze=!0}}ze===!0&&(Me.updateMultisampleRenderTarget(oe),Me.updateRenderTargetMipmap(oe))}x.setRenderTarget(be,Se,Ue),x.setClearColor(X,$),ye!==void 0&&(H.viewport=ye),x.toneMapping=Ne}function hi(v,I,k){const H=I.isScene===!0?I.overrideMaterial:null;for(let N=0,oe=v.length;N<oe;N++){const pe=v[N],be=pe.object,Se=pe.geometry,Ue=pe.group;let Ne=pe.material;Ne.allowOverride===!0&&H!==null&&(Ne=H),be.layers.test(k.layers)&&Er(be,I,k,Se,Ne,Ue)}}function Er(v,I,k,H,N,oe){v.onBeforeRender(x,I,k,H,N,oe),v.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),N.onBeforeRender(x,I,k,H,v,oe),N.transparent===!0&&N.side===It&&N.forceSinglePass===!1?(N.side=yt,N.needsUpdate=!0,x.renderBufferDirect(k,I,H,N,v,oe),N.side=ai,N.needsUpdate=!0,x.renderBufferDirect(k,I,H,N,v,oe),N.side=It):x.renderBufferDirect(k,I,H,N,v,oe),v.onAfterRender(x,I,k,H,N,oe)}function pi(v,I,k){I.isScene!==!0&&(I=Ce);const H=ue.get(v),N=l.state.lights,oe=l.state.shadowsArray,pe=N.state.version,be=z.getParameters(v,N.state,oe,I,k),Se=z.getProgramCacheKey(be);let Ue=H.programs;H.environment=v.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(v.isMeshStandardMaterial?Ge:qe).get(v.envMap||H.environment),H.envMapRotation=H.environment!==null&&v.envMap===null?I.environmentRotation:v.envMapRotation,Ue===void 0&&(v.addEventListener("dispose",J),Ue=new Map,H.programs=Ue);let Ne=Ue.get(Se);if(Ne!==void 0){if(H.currentProgram===Ne&&H.lightsStateVersion===pe)return Tr(v,be),Ne}else be.uniforms=z.getUniforms(v),v.onBeforeCompile(be,x),Ne=z.acquireProgram(be,Se),Ue.set(Se,Ne),H.uniforms=be.uniforms;const ye=H.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(ye.clippingPlanes=ee.uniform),Tr(v,be),H.needsLights=js(v),H.lightsStateVersion=pe,H.needsLights&&(ye.ambientLightColor.value=N.state.ambient,ye.lightProbe.value=N.state.probe,ye.directionalLights.value=N.state.directional,ye.directionalLightShadows.value=N.state.directionalShadow,ye.spotLights.value=N.state.spot,ye.spotLightShadows.value=N.state.spotShadow,ye.rectAreaLights.value=N.state.rectArea,ye.ltc_1.value=N.state.rectAreaLTC1,ye.ltc_2.value=N.state.rectAreaLTC2,ye.pointLights.value=N.state.point,ye.pointLightShadows.value=N.state.pointShadow,ye.hemisphereLights.value=N.state.hemi,ye.directionalShadowMap.value=N.state.directionalShadowMap,ye.directionalShadowMatrix.value=N.state.directionalShadowMatrix,ye.spotShadowMap.value=N.state.spotShadowMap,ye.spotLightMatrix.value=N.state.spotLightMatrix,ye.spotLightMap.value=N.state.spotLightMap,ye.pointShadowMap.value=N.state.pointShadowMap,ye.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Ne,H.uniformsList=null,Ne}function xr(v){if(v.uniformsList===null){const I=v.currentProgram.getUniforms();v.uniformsList=Di.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function Tr(v,I){const k=ue.get(v);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function Zs(v,I,k,H,N){I.isScene!==!0&&(I=Ce),Me.resetTextureUnits();const oe=I.fog,pe=H.isMeshStandardMaterial?I.environment:null,be=U===null?x.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Wi,Se=(H.isMeshStandardMaterial?Ge:qe).get(H.envMap||pe),Ue=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ne=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),ye=!!k.morphAttributes.position,ze=!!k.morphAttributes.normal,je=!!k.morphAttributes.color;let ht=ln;H.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ht=x.toneMapping);const rt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,et=rt!==void 0?rt.length:0,Pe=ue.get(H),lt=l.state.lights;if(Xe===!0&&(B===!0||v!==S)){const Tt=v===S&&H.id===_;ee.setState(H,v,Tt)}let Ye=!1;H.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==lt.state.version||Pe.outputColorSpace!==be||N.isBatchedMesh&&Pe.batching===!1||!N.isBatchedMesh&&Pe.batching===!0||N.isBatchedMesh&&Pe.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Pe.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Pe.instancing===!1||!N.isInstancedMesh&&Pe.instancing===!0||N.isSkinnedMesh&&Pe.skinning===!1||!N.isSkinnedMesh&&Pe.skinning===!0||N.isInstancedMesh&&Pe.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Pe.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Pe.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Pe.instancingMorph===!1&&N.morphTexture!==null||Pe.envMap!==Se||H.fog===!0&&Pe.fog!==oe||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ee.numPlanes||Pe.numIntersection!==ee.numIntersection)||Pe.vertexAlphas!==Ue||Pe.vertexTangents!==Ne||Pe.morphTargets!==ye||Pe.morphNormals!==ze||Pe.morphColors!==je||Pe.toneMapping!==ht||Pe.morphTargetsCount!==et)&&(Ye=!0):(Ye=!0,Pe.__version=H.version);let wt=Pe.currentProgram;Ye===!0&&(wt=pi(H,I,N));let Pn=!1,Ct=!1,Xn=!1;const ct=wt.getUniforms(),Pt=Pe.uniforms;if(Q.useProgram(wt.program)&&(Pn=!0,Ct=!0,Xn=!0),H.id!==_&&(_=H.id,Ct=!0),Pn||S!==v){Q.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ct.setValue(w,"projectionMatrix",v.projectionMatrix),ct.setValue(w,"viewMatrix",v.matrixWorldInverse);const bt=ct.map.cameraPosition;bt!==void 0&&bt.setValue(w,me.setFromMatrixPosition(v.matrixWorld)),ae.logarithmicDepthBuffer&&ct.setValue(w,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ct.setValue(w,"isOrthographic",v.isOrthographicCamera===!0),S!==v&&(S=v,Ct=!0,Xn=!0)}if(N.isSkinnedMesh){ct.setOptional(w,N,"bindMatrix"),ct.setOptional(w,N,"bindMatrixInverse");const Tt=N.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),ct.setValue(w,"boneTexture",Tt.boneTexture,Me))}N.isBatchedMesh&&(ct.setOptional(w,N,"batchingTexture"),ct.setValue(w,"batchingTexture",N._matricesTexture,Me),ct.setOptional(w,N,"batchingIdTexture"),ct.setValue(w,"batchingIdTexture",N._indirectTexture,Me),ct.setOptional(w,N,"batchingColorTexture"),N._colorsTexture!==null&&ct.setValue(w,"batchingColorTexture",N._colorsTexture,Me));const Lt=k.morphAttributes;if((Lt.position!==void 0||Lt.normal!==void 0||Lt.color!==void 0)&&te.update(N,k,wt),(Ct||Pe.receiveShadow!==N.receiveShadow)&&(Pe.receiveShadow=N.receiveShadow,ct.setValue(w,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Pt.envMap.value=Se,Pt.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&I.environment!==null&&(Pt.envMapIntensity.value=I.environmentIntensity),Ct&&(ct.setValue(w,"toneMappingExposure",x.toneMappingExposure),Pe.needsLights&&Qs(Pt,Xn),oe&&H.fog===!0&&j.refreshFogUniforms(Pt,oe),j.refreshMaterialUniforms(Pt,H,V,le,l.state.transmissionRenderTarget[v.id]),Di.upload(w,xr(Pe),Pt,Me)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Di.upload(w,xr(Pe),Pt,Me),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ct.setValue(w,"center",N.center),ct.setValue(w,"modelViewMatrix",N.modelViewMatrix),ct.setValue(w,"normalMatrix",N.normalMatrix),ct.setValue(w,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Tt=H.uniformsGroups;for(let bt=0,ea=Tt.length;bt<ea;bt++){const pn=Tt[bt];Fe.update(pn,wt),Fe.bind(pn,wt)}}return wt}function Qs(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function js(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(v,I,k){const H=ue.get(v);H.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),ue.get(v.texture).__webglTexture=I,ue.get(v.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:k,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,I){const k=ue.get(v);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0};const Js=w.createFramebuffer();this.setRenderTarget=function(v,I=0,k=0){U=v,R=I,D=k;let H=!0,N=null,oe=!1,pe=!1;if(v){const Se=ue.get(v);if(Se.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(w.FRAMEBUFFER,null),H=!1;else if(Se.__webglFramebuffer===void 0)Me.setupRenderTarget(v);else if(Se.__hasExternalTextures)Me.rebindTextures(v,ue.get(v.texture).__webglTexture,ue.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const ye=v.depthTexture;if(Se.__boundDepthTexture!==ye){if(ye!==null&&ue.has(ye)&&(v.width!==ye.image.width||v.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Me.setupDepthRenderbuffer(v)}}const Ue=v.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(pe=!0);const Ne=ue.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ne[I])?N=Ne[I][k]:N=Ne[I],oe=!0):v.samples>0&&Me.useMultisampledRTT(v)===!1?N=ue.get(v).__webglMultisampledFramebuffer:Array.isArray(Ne)?N=Ne[k]:N=Ne,P.copy(v.viewport),O.copy(v.scissor),W=v.scissorTest}else P.copy(we).multiplyScalar(V).floor(),O.copy(Ve).multiplyScalar(V).floor(),W=We;if(k!==0&&(N=Js),Q.bindFramebuffer(w.FRAMEBUFFER,N)&&H&&Q.drawBuffers(v,N),Q.viewport(P),Q.scissor(O),Q.setScissorTest(W),oe){const Se=ue.get(v.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+I,Se.__webglTexture,k)}else if(pe){const Se=I;for(let Ue=0;Ue<v.textures.length;Ue++){const Ne=ue.get(v.textures[Ue]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Ue,Ne.__webglTexture,k,Se)}}else if(v!==null&&k!==0){const Se=ue.get(v.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Se.__webglTexture,k)}_=-1},this.readRenderTargetPixels=function(v,I,k,H,N,oe,pe,be=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=ue.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se){Q.bindFramebuffer(w.FRAMEBUFFER,Se);try{const Ue=v.textures[be],Ne=Ue.format,ye=Ue.type;if(!ae.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-H&&k>=0&&k<=v.height-N&&(v.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+be),w.readPixels(I,k,H,N,_e.convert(Ne),_e.convert(ye),oe))}finally{const Ue=U!==null?ue.get(U).__webglFramebuffer:null;Q.bindFramebuffer(w.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(v,I,k,H,N,oe,pe,be=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=ue.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se)if(I>=0&&I<=v.width-H&&k>=0&&k<=v.height-N){Q.bindFramebuffer(w.FRAMEBUFFER,Se);const Ue=v.textures[be],Ne=Ue.format,ye=Ue.type;if(!ae.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,ze),w.bufferData(w.PIXEL_PACK_BUFFER,oe.byteLength,w.STREAM_READ),v.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+be),w.readPixels(I,k,H,N,_e.convert(Ne),_e.convert(ye),0);const je=U!==null?ue.get(U).__webglFramebuffer:null;Q.bindFramebuffer(w.FRAMEBUFFER,je);const ht=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await al(w,ht,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,ze),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,oe),w.deleteBuffer(ze),w.deleteSync(ht),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,I=null,k=0){const H=Math.pow(2,-k),N=Math.floor(v.image.width*H),oe=Math.floor(v.image.height*H),pe=I!==null?I.x:0,be=I!==null?I.y:0;Me.setTexture2D(v,0),w.copyTexSubImage2D(w.TEXTURE_2D,k,0,0,pe,be,N,oe),Q.unbindTexture()};const el=w.createFramebuffer(),tl=w.createFramebuffer();this.copyTextureToTexture=function(v,I,k=null,H=null,N=0,oe=null){oe===null&&(N!==0?(Pa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=N,N=0):oe=0);let pe,be,Se,Ue,Ne,ye,ze,je,ht;const rt=v.isCompressedTexture?v.mipmaps[oe]:v.image;if(k!==null)pe=k.max.x-k.min.x,be=k.max.y-k.min.y,Se=k.isBox3?k.max.z-k.min.z:1,Ue=k.min.x,Ne=k.min.y,ye=k.isBox3?k.min.z:0;else{const Lt=Math.pow(2,-N);pe=Math.floor(rt.width*Lt),be=Math.floor(rt.height*Lt),v.isDataArrayTexture?Se=rt.depth:v.isData3DTexture?Se=Math.floor(rt.depth*Lt):Se=1,Ue=0,Ne=0,ye=0}H!==null?(ze=H.x,je=H.y,ht=H.z):(ze=0,je=0,ht=0);const et=_e.convert(I.format),Pe=_e.convert(I.type);let lt;I.isData3DTexture?(Me.setTexture3D(I,0),lt=w.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Me.setTexture2DArray(I,0),lt=w.TEXTURE_2D_ARRAY):(Me.setTexture2D(I,0),lt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,I.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,I.unpackAlignment);const Ye=w.getParameter(w.UNPACK_ROW_LENGTH),wt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Pn=w.getParameter(w.UNPACK_SKIP_PIXELS),Ct=w.getParameter(w.UNPACK_SKIP_ROWS),Xn=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,rt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,rt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ue),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ne),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ye);const ct=v.isDataArrayTexture||v.isData3DTexture,Pt=I.isDataArrayTexture||I.isData3DTexture;if(v.isDepthTexture){const Lt=ue.get(v),Tt=ue.get(I),bt=ue.get(Lt.__renderTarget),ea=ue.get(Tt.__renderTarget);Q.bindFramebuffer(w.READ_FRAMEBUFFER,bt.__webglFramebuffer),Q.bindFramebuffer(w.DRAW_FRAMEBUFFER,ea.__webglFramebuffer);for(let pn=0;pn<Se;pn++)ct&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ue.get(v).__webglTexture,N,ye+pn),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ue.get(I).__webglTexture,oe,ht+pn)),w.blitFramebuffer(Ue,Ne,pe,be,ze,je,pe,be,w.DEPTH_BUFFER_BIT,w.NEAREST);Q.bindFramebuffer(w.READ_FRAMEBUFFER,null),Q.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(N!==0||v.isRenderTargetTexture||ue.has(v)){const Lt=ue.get(v),Tt=ue.get(I);Q.bindFramebuffer(w.READ_FRAMEBUFFER,el),Q.bindFramebuffer(w.DRAW_FRAMEBUFFER,tl);for(let bt=0;bt<Se;bt++)ct?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Lt.__webglTexture,N,ye+bt):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Lt.__webglTexture,N),Pt?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Tt.__webglTexture,oe,ht+bt):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Tt.__webglTexture,oe),N!==0?w.blitFramebuffer(Ue,Ne,pe,be,ze,je,pe,be,w.COLOR_BUFFER_BIT,w.NEAREST):Pt?w.copyTexSubImage3D(lt,oe,ze,je,ht+bt,Ue,Ne,pe,be):w.copyTexSubImage2D(lt,oe,ze,je,Ue,Ne,pe,be);Q.bindFramebuffer(w.READ_FRAMEBUFFER,null),Q.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Pt?v.isDataTexture||v.isData3DTexture?w.texSubImage3D(lt,oe,ze,je,ht,pe,be,Se,et,Pe,rt.data):I.isCompressedArrayTexture?w.compressedTexSubImage3D(lt,oe,ze,je,ht,pe,be,Se,et,rt.data):w.texSubImage3D(lt,oe,ze,je,ht,pe,be,Se,et,Pe,rt):v.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,oe,ze,je,pe,be,et,Pe,rt.data):v.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,oe,ze,je,rt.width,rt.height,et,rt.data):w.texSubImage2D(w.TEXTURE_2D,oe,ze,je,pe,be,et,Pe,rt);w.pixelStorei(w.UNPACK_ROW_LENGTH,Ye),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,wt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Pn),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ct),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Xn),oe===0&&I.generateMipmaps&&w.generateMipmap(lt),Q.unbindTexture()},this.initRenderTarget=function(v){ue.get(v).__webglFramebuffer===void 0&&Me.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Me.setTextureCube(v,0):v.isData3DTexture?Me.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Me.setTexture2DArray(v,0):Me.setTexture2D(v,0),Q.unbindTexture()},this.resetState=function(){R=0,D=0,U=null,Q.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return br}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(n),t.unpackColorSpace=vt._getUnpackColorSpace()}}const Ui=256,ei=6378137,un=85.0511287798066,_p=Math.PI*ei,Sp=2*_p,ti=e=>((e+180)%360+360)%360-180,Io=e=>{const t=Math.max(-un,Math.min(un,e))*Math.PI/180;return ei*Math.log(Math.tan(Math.PI/4+t/2))};function Mp(e,n,t){if(!Number.isInteger(t)||t<0||t>30)throw new RangeError("Zoom must be an integer from 0 to 30");const i=2**t,r=Math.floor((ti(n)+180)/360*i),o=Math.max(-un,Math.min(un,e))*Math.PI/180,s=Math.floor((1-Math.asinh(Math.tan(o))/Math.PI)/2*i);return{x:(r%i+i)%i,y:Math.max(0,Math.min(i-1,s)),z:t,n:i}}function Ep(e,n,t){const i=Mp(e,n,t),r=Ui*i.n,a=(ti(n)+180)/360*r,s=Math.max(-un,Math.min(un,e))*Math.PI/180,c=(1-Math.asinh(Math.tan(s))/Math.PI)/2*r;return{tile:i,u:a/Ui-i.x,v:c/Ui-i.y}}class xp{zoom;anchor;originTile;anchorU;anchorV;latitudeScale;tileSpan;originNorthing;constructor(n,t=12){if(!Number.isFinite(n.lat)||!Number.isFinite(n.lon)||Math.abs(n.lat)>90)throw new RangeError("Anchor must be a valid WGS84 latitude/longitude");this.anchor={lat:Math.max(-un,Math.min(un,n.lat)),lon:ti(n.lon)},this.zoom=t;const i=Ep(this.anchor.lat,this.anchor.lon,t);this.originTile=i.tile,this.anchorU=i.u,this.anchorV=i.v,this.latitudeScale=Math.cos(this.anchor.lat*Math.PI/180),this.originNorthing=Io(this.anchor.lat),this.tileSpan=Sp/this.originTile.n*this.latitudeScale}toLocal(n){const t=ti(n.lon-this.anchor.lon),i=ei*t*Math.PI/180,r=Io(n.lat)-this.originNorthing;return{x:i*this.latitudeScale,z:r*this.latitudeScale}}toGeo(n){const t=ti(this.anchor.lon+n.x/(ei*this.latitudeScale)*180/Math.PI),i=this.originNorthing+n.z/this.latitudeScale;return{lon:t,lat:(2*Math.atan(Math.exp(i/ei))-Math.PI/2)*180/Math.PI}}tileOrigin(n,t){return{x:(n-this.anchorU)*this.tileSpan,z:(t+this.anchorV)*this.tileSpan}}tileOffsetAt(n,t){const i=this.anchorU+n/this.tileSpan,r=this.anchorV-t/this.tileSpan,a=Math.floor(i),o=Math.floor(r);return{dx:a>this.originTile.n/2?a-this.originTile.n:a<-this.originTile.n/2?a+this.originTile.n:a,dz:-o||0,u:i-a,v:r-o}}tileAddress(n,t){const i=this.originTile.n;return{x:((this.originTile.x+n)%i+i)%i,y:Math.max(0,Math.min(i-1,this.originTile.y-t)),z:this.zoom,n:i}}}const ir=[{name:"Midtown Manhattan, New York",lat:40.758,lon:-73.9855,terrain:"URBAN JUNGLE"},{name:"Moab, Utah",lat:38.5733,lon:-109.5498,terrain:"RED ROCK COUNTRY"},{name:"Mount Kisco, New York",lat:41.204406,lon:-73.727446,terrain:"WESTCHESTER BACKROADS"},{name:"Grand Canyon",lat:36.1069,lon:-112.1129,terrain:"THE BIG DROP"},{name:"Mount Everest",lat:27.9881,lon:86.925,terrain:"ROOF OF THE WORLD"},{name:"San Francisco",lat:37.7749,lon:-122.4194,terrain:"HILL CLIMBER"},{name:"Tokyo, Japan",lat:35.6762,lon:139.6503,terrain:"NEON TRAILS"},{name:"Sahara Desert",lat:23.4162,lon:25.6628,terrain:"ENDLESS DUNES"},{name:"Swiss Alps",lat:46.8182,lon:9.2275,terrain:"HIGH ALTITUDE"}];function Tp(e){const n=e.trim().match(/^\s*(-?\d+(?:\.\d+)?)\s*[, ]\s*(-?\d+(?:\.\d+)?)\s*$/);if(!n)return null;const t=Number(n[1]),i=Number(n[2]);return Math.abs(t)<=90&&Math.abs(i)<=180?{name:`${t.toFixed(4)}, ${i.toFixed(4)}`,lat:t,lon:i}:null}let No=0;const pa=new Map;async function bp(e){const n=Tp(e);if(n)return[n];const t=e.toLowerCase().trim();if(!t)return[];if(pa.has(t))return pa.get(t);const i=Math.max(0,1100-(Date.now()-No));i&&await new Promise(c=>setTimeout(c,i)),No=Date.now();const r=new URL("https://nominatim.openstreetmap.org/search");r.search=new URLSearchParams({q:e,format:"jsonv2",limit:"5"}).toString();const a=await fetch(r,{headers:{Accept:"application/json"}});if(!a.ok)throw new Error(`Location search unavailable (${a.status})`);const s=(await a.json()).map(c=>({name:c.display_name.split(",").slice(0,3).join(",").trim(),lat:+c.lat,lon:+c.lon}));return pa.set(t,s),s}function Ap(e,n,t,i){const r=Math.max(0,Math.min(n-1,t*(n-1))),a=Math.max(0,Math.min(n-1,i*(n-1))),o=Math.floor(r),s=Math.floor(a),c=Math.min(n-1,o+1),p=Math.min(n-1,s+1),d=r-o,h=a-s,g=(m,M)=>e[M*n+m]??0;return(g(o,s)*(1-d)+g(c,s)*d)*(1-h)+(g(o,p)*(1-d)+g(c,p)*d)*h}function Fo(e,n,t){const i=new Float32Array((t+1)**2);for(let r=0;r<=t;r++)for(let a=0;a<=t;a++)i[r*(t+1)+a]=Ap(e,n,a/t,r/t);return i}function Oo(e,n,t,i){const r=Math.max(0,Math.min(n,t*n)),a=Math.max(0,Math.min(n,i*n)),o=Math.min(n-1,Math.floor(r)),s=Math.min(n-1,Math.floor(a)),c=r-o,p=a-s,d=n+1,h=e[s*d+o]??0,g=e[s*d+o+1]??0,m=e[(s+1)*d+o]??0,M=e[(s+1)*d+o+1]??0;return c>=p?h*(1-c)+g*(c-p)+M*p:h*(1-p)+M*c+m*(p-c)}function Rp(e){const n=new Map,t=new Set;for(const i of e){const r=i.segments+1;for(let a=0;a<=i.segments;a++)for(const[o,s]of[[a,0],[a,i.segments],[0,a],[i.segments,a]]){const c=s*r+o,p=`${i.dx*i.segments+o},${i.dz*i.segments-s}`,d=n.get(p)??[];d.push({tile:i,index:c}),n.set(p,d)}}for(const i of n.values()){if(i.length<2)continue;const r=i.reduce((a,o)=>a+o.tile.grid[o.index],0)/i.length;for(const a of i)a.tile.grid[a.index]!==r&&(a.tile.grid[a.index]=r,t.add(a.tile))}return t}const ma=12,Ut=Ui,wp=36,an=new Map;function Bo(e,n,t){const i=`${t}/${e}/${n}`;if(an.has(i)){const a=an.get(i);return an.delete(i),an.set(i,a),a}const r=(async()=>{try{const a=new Image;a.crossOrigin="anonymous",a.src=`https://s3.amazonaws.com/elevation-tiles-prod/terrarium/${t}/${e}/${n}.png`,await new Promise((d,h)=>{a.onload=()=>d(),a.onerror=()=>h(new Error("terrain tile unavailable"))});const o=document.createElement("canvas");o.width=Ut,o.height=Ut;const s=o.getContext("2d",{willReadFrequently:!0});if(!s)throw new Error("canvas unavailable");s.drawImage(a,0,0,Ut,Ut);const c=s.getImageData(0,0,Ut,Ut).data,p=new Float32Array(Ut*Ut);for(let d=0;d<p.length;d++)p[d]=c[d*4]*256+c[d*4+1]+c[d*4+2]/256-32768;return{heights:p}}catch{return{heights:new Float32Array(Ut*Ut)}}})();for(an.set(i,r);an.size>wp;)an.delete(an.keys().next().value);return r}class Cp{group=new qt;place=null;frame=null;heightSampleMs=0;heightSamples=0;tileBuildMs=0;tileBuilds=0;detailQuality=1;baseline=0;tiles=new Map;requests=new Set;coverage={x:NaN,z:NaN};generation=0;centerSegments;activeTerrainShader=null;biome={desert:1,alpine:0,urban:0,green:0};material;constructor(n=127){this.centerSegments=n,this.material=new xt({color:16777215,roughness:.96,metalness:0,vertexColors:!0}),this.material.onBeforeCompile=t=>{t.uniforms.uRumbleDesert={value:this.biome.desert},t.uniforms.uRumbleAlpine={value:this.biome.alpine},t.uniforms.uRumbleUrban={value:this.biome.urban},t.uniforms.uRumbleGreen={value:this.biome.green},t.uniforms.uRumbleDetail={value:this.detailQuality},this.activeTerrainShader=t,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vRumbleWorld;
varying float vRumbleUp;
varying float vRumbleElevation;`),t.vertexShader=t.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
vRumbleUp = normal.y;
vRumbleElevation = position.y;`),t.vertexShader=t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vRumbleWorld = position;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vRumbleWorld;
varying float vRumbleUp;
varying float vRumbleElevation;
uniform float uRumbleDesert;
uniform float uRumbleAlpine;
uniform float uRumbleDetail;
uniform float uRumbleUrban;
uniform float uRumbleGreen;
float rumbleHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float rumbleNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(rumbleHash(i),rumbleHash(i+vec2(1.0,0.0)),f.x),mix(rumbleHash(i+vec2(0.0,1.0)),rumbleHash(i+vec2(1.0,1.0)),f.x),f.y);}`),t.fragmentShader=t.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        float rumbleSlope = 1.0 - clamp(vRumbleUp, 0.0, 1.0);
        vec2 rumbleWorld = vRumbleWorld.xz;
        float rumbleMacro = rumbleNoise(rumbleWorld * 0.004);
        float rumbleMid = rumbleNoise(rumbleWorld * 0.052);
        // Interpolated fine noise avoids the obvious square-cell stipple that
        // appeared when each pebble cell used a discontinuous hash value.
        float rumblePebbles = rumbleNoise(rumbleWorld * mix(0.8, 2.8, uRumbleDetail));
        float rumbleGrain = (rumbleMacro - 0.5) * 0.22 + (rumbleMid - 0.5) * 0.16 + (rumblePebbles - 0.5) * 0.075;
        float rumbleElevation = smoothstep(12.0, 250.0, vRumbleElevation + (rumbleMacro - 0.5) * 38.0);
        float rumbleRock = smoothstep(0.18, 0.63, rumbleSlope + (rumbleMacro - 0.5) * 0.18);
        vec3 rumbleSand = vec3(0.39, 0.245, 0.145);
        vec3 rumbleRedSoil = vec3(0.31, 0.125, 0.065);
        vec3 rumbleMesa = vec3(0.36, 0.16, 0.082);
        vec3 rumbleGreenEarth = vec3(0.18, 0.235, 0.12);
        vec3 rumbleUrbanGround = vec3(0.29, 0.30, 0.285);
        vec3 rumbleBase = mix(vec3(0.22,0.205,0.16), rumbleGreenEarth, uRumbleGreen);
        rumbleBase = mix(rumbleBase, rumbleUrbanGround, uRumbleUrban);
        vec3 desertBase = mix(rumbleSand, rumbleRedSoil, 0.28 + rumbleElevation * 0.3 + (rumbleMacro - 0.5) * 0.22);
        desertBase = mix(desertBase, rumbleMesa, smoothstep(0.46,0.78,rumbleMid) * 0.34);
        rumbleBase = mix(rumbleBase, desertBase, uRumbleDesert);
        vec3 rumbleRockColor = mix(vec3(0.25,0.255,0.235), vec3(0.21,0.095,0.052), uRumbleDesert);
        vec3 rumbleSurface = rumbleBase * (0.85 + rumbleGrain);
        rumbleSurface = mix(rumbleSurface, rumbleRockColor * (0.84 + rumbleGrain), rumbleRock * mix(0.4, 0.76, uRumbleDesert));
        float rumbleStone = smoothstep(0.72,0.9,rumblePebbles) * uRumbleDetail;
        rumbleSurface = mix(rumbleSurface, rumbleSurface * vec3(0.76,0.7,0.61), rumbleStone * 0.2);
        rumbleSurface = mix(rumbleSurface, rumbleSurface * vec3(1.12,1.07,0.96), smoothstep(0.65,0.86,rumblePebbles) * 0.085);
        diffuseColor.rgb *= rumbleSurface;
        float rumbleAlpineSnow = uRumbleAlpine * smoothstep(300.0, 650.0, vRumbleWorld.y) * smoothstep(0.35, 0.8, vRumbleUp);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.78, 0.81, 0.77), rumbleAlpineSnow * 0.82);`)},this.material.customProgramCacheKey=()=>"rumble-terrain-material-v6"}async load(n){this.clear();const t=++this.generation;this.place=n,this.frame=new xp(n,ma);const i=n.name.toLowerCase();this.biome.desert=/moab|grand canyon|sahara|utah|arizona/i.test(i)?1:0,this.biome.alpine=/alps|everest|mountain|swiss/i.test(i)?1:0,this.biome.urban=/manhattan|new york city|tokyo|san francisco/i.test(i)?1:0,this.biome.green=this.biome.desert||this.biome.alpine||this.biome.urban?0:1,this.activeTerrainShader&&(this.activeTerrainShader.uniforms.uRumbleDesert.value=this.biome.desert,this.activeTerrainShader.uniforms.uRumbleAlpine.value=this.biome.alpine,this.activeTerrainShader.uniforms.uRumbleUrban.value=this.biome.urban,this.activeTerrainShader.uniforms.uRumbleGreen.value=this.biome.green);const r=this.frame.tileAddress(0,0),a=await Bo(r.x,r.y,ma);if(t!==this.generation)return;const o=Fo(a.heights,Ut,this.centerSegments);this.baseline=Oo(o,this.centerSegments,this.frame.anchorU,this.frame.anchorV),this.install(0,0,a,this.centerSegments,o),this.ensureRegion(0,0)}key(n,t){return`${n},${t}`}address(n,t){return this.frame.tileAddress(n,t)}async ensureRegion(n,t){const i=this.frame;if(!i)return;const r=i.tileOffsetAt(n,t),a=r.dx,o=r.dz;if(this.coverage.x===a&&this.coverage.z===o)return;this.coverage={x:a,z:o};const s=this.generation,c=[],p=this.centerSegments;for(let d=o-1;d<=o+1;d++)for(let h=a-1;h<=a+1;h++){const g=this.key(h,d),m=h===a&&d===o?this.centerSegments:p,M=this.tiles.get(g);M&&M.segments!==m&&(this.group.remove(M.mesh),M.mesh.geometry.dispose(),this.tiles.delete(g));const E=`${s}:${g}`;if(this.tiles.has(g)||this.requests.has(E))continue;this.requests.add(E);const f=this.address(h,d);c.push(Bo(f.x,f.y,ma).then(l=>{s===this.generation&&Math.abs(h-this.coverage.x)<=1&&Math.abs(d-this.coverage.z)<=1&&this.install(h,d,l,m)}).finally(()=>this.requests.delete(E)))}for(const[d,h]of this.tiles)(Math.abs(h.dx-a)>1||Math.abs(h.dz-o)>1)&&(this.group.remove(h.mesh),h.mesh.geometry.dispose(),this.tiles.delete(d));await Promise.all(c)}install(n,t,i,r=63,a){const o=this.key(n,t);if(this.tiles.has(o))return;const s=performance.now(),c=this.frame,p=a??Fo(i.heights,Ut,r),d=new dn,h=new Float32Array((r+1)**2*3),g=new Float32Array((r+1)**2*3),m=[],M=c.tileOrigin(n,t);for(let f=0;f<=r;f++)for(let l=0;l<=r;l++){const b=f*(r+1)+l,A=p[b];h[b*3]=M.x+l/r*c.tileSpan,h[b*3+1]=st.clamp((A-this.baseline)*1.25,-900,1800),h[b*3+2]=M.z-f/r*c.tileSpan,g[b*3]=g[b*3+1]=g[b*3+2]=1}for(let f=0;f<r;f++)for(let l=0;l<r;l++){const b=f*(r+1)+l,A=b+1,x=b+r+1,C=x+1;m.push(b,A,C,b,C,x)}d.setIndex(m),d.setAttribute("position",new Ft(h,3)),d.setAttribute("color",new Hi(g,3)),d.computeVertexNormals();const E=new dt(d,this.material);E.receiveShadow=!0,E.userData.kind="terrain",this.group.add(E),this.tiles.set(o,{data:i,grid:p,mesh:E,segments:r,dx:n,dz:t}),this.reconcileSharedEdges(),this.tileBuildMs+=performance.now()-s,this.tileBuilds++}reconcileSharedEdges(){const n=Rp(Array.from(this.tiles.values()));for(const t of n)this.rebuildGeometry(t)}rebuildGeometry(n){const{segments:t,grid:i,dx:r,dz:a}=n,o=this.frame,s=new dn,c=new Float32Array((t+1)**2*3),p=new Float32Array((t+1)**2*3),d=[],h=o.tileOrigin(r,a);for(let g=0;g<=t;g++)for(let m=0;m<=t;m++){const M=g*(t+1)+m,E=i[M];c[M*3]=h.x+m/t*o.tileSpan,c[M*3+1]=st.clamp((E-this.baseline)*1.25,-900,1800),c[M*3+2]=h.z-g/t*o.tileSpan,p[M*3]=p[M*3+1]=p[M*3+2]=1}for(let g=0;g<t;g++)for(let m=0;m<t;m++){const M=g*(t+1)+m,E=M+1,f=M+t+1,l=f+1;d.push(M,E,l,M,l,f)}s.setIndex(d),s.setAttribute("position",new Ft(c,3)),s.setAttribute("color",new Hi(p,3)),s.computeVertexNormals(),n.mesh.geometry.dispose(),n.mesh.geometry=s}heightAt(n,t){if(!this.frame||!this.tiles.size)return 0;const i=performance.now();let r=this.frame.tileOffsetAt(n,t);(r.dx!==this.coverage.x||r.dz!==this.coverage.z)&&this.ensureRegion(n,t);let a=this.tiles.get(this.key(r.dx,r.dz));if(a||(a=this.tiles.get(this.key(0,0)),r=this.frame.tileOffsetAt(n,t)),!a)return 0;const o=a===this.tiles.get(this.key(r.dx,r.dz))?r.u:st.clamp((n-this.frame.tileOrigin(a.dx,a.dz).x)/this.frame.tileSpan,0,1),s=a===this.tiles.get(this.key(r.dx,r.dz))?r.v:st.clamp((this.frame.tileOrigin(a.dx,a.dz).z-t)/this.frame.tileSpan,0,1),c=(Oo(a.grid,a.segments,o,s)-this.baseline)*1.25;return this.heightSamples++,this.heightSampleMs+=performance.now()-i,c}takePerformanceSample(){const n={heightSamples:this.heightSamples,heightSampleMs:this.heightSampleMs,tileBuilds:this.tileBuilds,tileBuildMs:this.tileBuildMs};return this.heightSamples=0,this.heightSampleMs=0,this.tileBuilds=0,this.tileBuildMs=0,n}setVisualQuality(n){this.detailQuality=n==="low"?.45:n==="medium"?.72:1,this.activeTerrainShader&&(this.activeTerrainShader.uniforms.uRumbleDetail.value=this.detailQuality)}clear(){this.generation++;for(const n of this.tiles.values())this.group.remove(n.mesh),n.mesh.geometry.dispose();this.tiles.clear(),this.requests.clear(),this.coverage={x:NaN,z:NaN}}dispose(){this.clear(),this.material.dispose()}}function Un(e,n=!1){const t=e[0].index!==null,i=new Set(Object.keys(e[0].attributes)),r=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new dn;let p=0;for(let d=0;d<e.length;++d){const h=e[d];let g=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in h.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;a[m]===void 0&&(a[m]=[]),a[m].push(h.attributes[m]),g++}if(g!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(s!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in h.morphAttributes){if(!r.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;o[m]===void 0&&(o[m]=[]),o[m].push(h.morphAttributes[m])}if(n){let m;if(t)m=h.index.count;else if(h.attributes.position!==void 0)m=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;c.addGroup(p,m,d),p+=m}}if(t){let d=0;const h=[];for(let g=0;g<e.length;++g){const m=e[g].index;for(let M=0;M<m.count;++M)h.push(m.getX(M)+d);d+=e[g].attributes.position.count}c.setIndex(h)}for(const d in a){const h=Go(a[d]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;c.setAttribute(d,h)}for(const d in o){const h=o[d][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[d]=[];for(let g=0;g<h;++g){const m=[];for(let E=0;E<o[d].length;++E)m.push(o[d][E][g]);const M=Go(m);if(!M)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;c.morphAttributes[d].push(M)}}return c}function Go(e){let n,t,i,r=-1,a=0;for(let p=0;p<e.length;++p){const d=e[p];if(n===void 0&&(n=d.array.constructor),n!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=d.normalized),i!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=d.gpuType),r!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=d.count*t}const o=new n(a),s=new Ft(o,t,i);let c=0;for(let p=0;p<e.length;++p){const d=e[p];if(d.isInterleavedBufferAttribute){const h=c/t;for(let g=0,m=d.count;g<m;g++)for(let M=0;M<t;M++){const E=d.getComponent(g,M);s.setComponent(g+h,M,E)}}else o.set(d.array,c);c+=d.count*t}return r!==void 0&&(s.gpuType=r),s}function bn(e,n){return e.map(([t,i])=>n.toLocal({lat:t,lon:i}))}const ko=new Map;let ga=null;const va=(e="none")=>({buildings:[],roads:[],source:e});function yp(e,n,t){return t.areas.find(i=>n>=i.bbox[0]&&e>=i.bbox[1]&&n<=i.bbox[2]&&e<=i.bbox[3])}function In(e){if(!e)return 0;const n=e.trim().replace(",",".").match(/^([+-]?(?:\d+(?:\.\d*)?|\.\d+))\s*(m|meters?|ft|feet|foot|')?$/i);if(!n)return 0;const t=Number(n[1]);return Number.isFinite(t)?t*(/^(ft|feet|foot|')$/i.test(n[2]??"")?.3048:1):0}function Pp(e,n=0){const t=In(e.height)||In(e["building:height"]),i=Number.parseFloat(e["building:levels"]??e.levels??""),r=Number.isFinite(i)&&i>0?i*3.2:0,a=In(e["roof:height"]),o=t>0?t:r>0?r+a:Lp(e,n),s=In(e.min_height)||In(e["building:min_height"]);return{height:o,minHeight:s,source:t>0?"mapped height":r>0?"levels estimate":"type estimate"}}function Is(e){const n=(e.building??"").toLowerCase(),t=`${e.amenity??""} ${e.shop??""} ${e.office??""} ${e.tourism??""}`.toLowerCase();return/industrial|warehouse|factory|manufacture/.test(`${n} ${e.industrial??""}`)?"industrial":/commercial|retail|office|hotel|apartments|civic|university|public/.test(n)||/hotel|motel|townhall|library|school|college|university|hospital|commercial|retail/.test(t)?"commercial":/house|residential|detached|terrace|semidetached_house|bungalow/.test(n)||/residential/.test(e["building:use"]??"")?"residential":"other"}function Lp(e,n){switch(Is(e)){case"commercial":return 14;case"industrial":return 8;case"residential":return 7.5;default:return n>1600?18:n>500?12:n>120?7:4.5}}function Cn(e){const n=(e.highway??"").toLowerCase();return!n||e.tunnel&&e.tunnel!=="no"||e.bridge&&e.bridge!=="no"?null:/^(motorway|motorway_link|trunk|trunk_link|primary|primary_link|secondary|secondary_link)$/.test(n)?"major":/^(residential|tertiary|tertiary_link|unclassified|living_street|service|road)$/.test(n)?"street":n==="track"?"track":/^(path|footway|bridleway|cycleway|pedestrian|steps)$/.test(n)?/dirt|gravel|ground|earth|sand|mud/.test(e.surface??"")?"track":"path":null}function Ns(e,n=Cn(e)){const t=In(e.width);if(t>0)return st.clamp(t,.8,18);const i=(e.surface??"").toLowerCase();return n==="major"?9:n==="street"?5.5:n==="path"?/^(steps|footway)$/.test(e.highway??"")?1.8:2.4:n==="track"?/gravel|dirt|ground|earth|sand|mud/.test(i)?3.4:2.6:0}function Dp(e,n,t,i=24){const r=[],a=[];for(const C of e){const R=(C.tags["name:en"]??C.tags.name)?.trim();if(!R||!Cn(C.tags)||C.coords.length<2)continue;const D=bn(C.coords,n);for(let P=1;P<D.length;P++){const O=D[P-1],W=D[P],X=Math.hypot(W.x-O.x,W.z-O.z);X>1&&a.push({name:R.slice(0,48),ax:O.x,az:O.z,bx:W.x,bz:W.z,length:X})}const U=[0];for(let P=1;P<D.length;P++)U.push(U[P-1]+Math.hypot(D[P].x-D[P-1].x,D[P].z-D[P-1].z));const _=U.at(-1)??0;if(_<2.5)continue;const S=_<70?[_*.5]:Array.from({length:Math.max(1,Math.ceil((_-16)/48))},(P,O)=>Math.min(_-7,8+O*48));for(const P of S){let O=1;for(;O<U.length-1&&U[O]<P;)O++;const W=D[O-1],X=D[O],$=Math.hypot(X.x-W.x,X.z-W.z)||1,q=st.clamp((P-U[O-1])/$,0,1),le=W.x+(X.x-W.x)*q,V=W.z+(X.z-W.z)*q;r.push({name:R.slice(0,48),x:le,z:V,y:t(le,V)+1.45,dx:(X.x-W.x)/$,dz:(X.z-W.z)/$,segmentLength:$})}}if(!r.length)return null;const o=st.clamp(Math.floor(i),1,64),s=8,c=256,p=48,d=document.createElement("canvas");d.width=s*c,d.height=Math.ceil(o/s)*p;const h=d.getContext("2d");if(!h)return null;const g=new ws(d);g.colorSpace=Ja,g.minFilter=Mn,g.generateMipmaps=!0;const m=new Float32Array(o*12),M=new Float32Array(o*8),E=new Uint16Array(o*6);for(let C=0;C<o;C++){const R=C*4;E.set([R,R+1,R+2,R,R+2,R+3],C*6)}const f=new dn;f.setAttribute("position",new Ft(m,3)),f.setAttribute("uv",new Ft(M,2)),f.setIndex(new Ft(E,1)),f.setDrawRange(0,0);const l=new er({map:g,transparent:!0,depthTest:!0,depthWrite:!1,side:It,toneMapped:!1}),b=new dt(f,l);b.name="osm-street-name-atlas",b.renderOrder=3;let A="";const x=(C,R,D=0,U)=>{const _=Math.sin(D),S=Math.cos(D),P=[];let O=0,W=0;const X=L=>st.clamp(L*.025,.35,3.5);for(const L of a){const ae=L.bx-L.ax,Q=L.bz-L.az,De=st.clamp(((C-L.ax)*ae+(R-L.az)*Q)/(L.length*L.length),0,1),ue=L.ax+ae*De,Me=L.az+Q*De,qe=Math.hypot(ue-C,Me-R);if(qe>150)continue;O++;const Ge=X(qe),T=Math.max(1,Math.ceil(L.length/Ge));for(let u=0;u<=T;u++){const F=u/T,z=L.ax+ae*F,j=L.az+Q*F,G=Math.hypot(z-C,j-R);G<2.5||G>140||!U?.viewport&&(z-C)*_+(j-R)*S<4||(P.push({name:L.name,x:z,z:j,y:t(z,j)+1.05,dx:ae/L.length,dz:Q/L.length,segmentLength:L.length,priority:1}),W++)}}const $=[...r,...P].map(L=>{const ae=L.x-C,Q=L.z-R,De=Math.hypot(ae,Q),ue=ae*_+Q*S;return{item:L,d2:De*De,ahead:ue}}),q=L=>({dx:L.dx,dz:L.dz}),le=L=>st.clamp(L.name.length*.38,3.5,10.5),V=U?.viewport?st.clamp(U.viewport.width*.4,128,176):0,ve=V?V*p/c:0,Re=$.filter(L=>L.d2<140**2),we=Re.filter(L=>L.d2>((L.item.priority??0)>0?(U?.viewport?2.5:13)**2:22**2)).map(L=>{const ae=U?.(L.item.x,L.item.y,L.item.z),Q=ae?{x:ae.x,y:ae.y,z:ae.z,visible:ae.visible}:void 0,De=Q?(Q.z<-1||Q.z>1?900:0)+(Math.abs(Q.x)>.48?750:0)+(Q.y>.35?750:0)+(Q.y<-.68?500:0)+Math.abs(Q.x)*18+Math.abs(Q.y+.22)*24:0;let ue;if(Q&&V&&U?.viewport&&U.screenFrame){const u=U.screenFrame(L.item.x,L.item.y,L.item.z),F=U(L.item.x+L.item.dx,L.item.y,L.item.z+L.item.dz),z=(F.x-Q.x)*U.viewport.width,j=-(F.y-Q.y)*U.viewport.height,G=Math.abs(z)>.02?st.clamp(Math.atan2(j,z),-.32,.32):0,xe=[u.right[0]*Math.cos(G)+u.up[0]*Math.sin(G),u.right[1]*Math.cos(G)+u.up[1]*Math.sin(G),u.right[2]*Math.cos(G)+u.up[2]*Math.sin(G)],ee=[u.up[0]*Math.cos(G)-u.right[0]*Math.sin(G),u.up[1]*Math.cos(G)-u.right[1]*Math.sin(G),u.up[2]*Math.cos(G)-u.right[2]*Math.sin(G)],he=V*.5*u.worldPerPixel,ge=ve*.5*u.worldPerPixel,te=(Ee,_e)=>{const de=U(L.item.x+xe[0]*Ee+ee[0]*_e,L.item.y+xe[1]*Ee+ee[1]*_e,L.item.z+xe[2]*Ee+ee[2]*_e);return{x:de.x,y:de.y,z:de.z}},se=[te(-he,-ge),te(he,-ge),te(he,ge),te(-he,ge)];ue={left:Math.min(...se.map(Ee=>Ee.x)),right:Math.max(...se.map(Ee=>Ee.x)),top:Math.max(...se.map(Ee=>Ee.y)),bottom:Math.min(...se.map(Ee=>Ee.y))}}const Me=!!Q&&Q.z>-1&&Q.z<1&&Math.abs(Q.x)<=1&&Math.abs(Q.y)<=1,qe=!U?.viewport||V<=U.viewport.width*.72&&ve<=U.viewport.height*.18,Ge=!ue||ue.left>=-.96&&ue.right<=.96&&ue.top<=.74&&ue.bottom>=-.72&&Q.z>-1&&Q.z<1;return{...L,screen:Q,bounds:ue,inFrustum:Me,projectedTextDimensionsValid:qe,fitsViewport:Ge,rejectReason:Me?qe?Ge?void 0:"viewport-bounds":"text-dimensions":"frustum",score:(Q?Math.abs(Q.x)*55+Math.abs(Q.y+.18)*18:Math.sqrt(L.d2))+Math.sqrt(L.d2)*.04+De*3-(L.item.priority??0)*8}}),Ve=we.filter(L=>L.fitsViewport&&(!L.screen||Math.abs(L.screen.x)<1.02&&L.screen.y>-.94&&L.screen.y<.78)).sort((L,ae)=>L.score-ae.score);Ve.length;const We=[],Qe=new Map,Xe=[];let B=0,K=0;for(const{item:L,screen:ae}of Ve){if(U&&ae&&ae.z>-1&&ae.z<1&&Math.abs(ae.x)<.75&&ae.y>-.8&&ae.y<.6&&B<8&&(B++,U(L.x,L.y,L.z,!0).visible===!1)){K++;continue}const Q=we.find(Ge=>Ge.item===L)?.bounds,De=U?.viewport?36/U.viewport.width*2:.05,ue=U?.viewport?28/U.viewport.height*2:.06;if(Q&&Xe.some(Ge=>Q.left<Ge.right+De&&Q.right>Ge.left-De&&Q.bottom<Ge.top+ue&&Q.top>Ge.bottom-ue))continue;const Me=L.name.toLocaleLowerCase(),qe=Qe.get(Me)??[];if(!qe.some(Ge=>(Ge.x-L.x)**2+(Ge.z-L.z)**2<38**2)&&(qe.push(L),Qe.set(Me,qe),We.push(L),Q&&Xe.push(Q),We.length>=o))break}const me=[...new Set(We.map(L=>L.name))].sort((L,ae)=>L.localeCompare(ae)),Le=me.join("\0"),Ce=new Map(me.map((L,ae)=>[L,ae]));Le!==A&&(h.clearRect(0,0,d.width,d.height),h.font="700 32px Arial, sans-serif",h.textAlign="center",h.textBaseline="middle",h.lineJoin="round",h.lineWidth=8,me.forEach((L,ae)=>{const Q=ae%s*c+c/2,De=Math.floor(ae/s)*p+p/2;h.strokeStyle="rgba(15,20,22,.96)",h.strokeText(L,Q,De,c-10),h.fillStyle="rgba(255,255,245,.99)",h.fillText(L,Q,De,c-10)}),g.needsUpdate=!0,A=Le);const ke=f.getAttribute("position"),ft=f.getAttribute("uv");We.forEach((L,ae)=>{const Q=q(L),De=t(L.x,L.z)+1.05,ue=[L.x,De,L.z],Me=U?.screenFrame?.(L.x,De,L.z);let qe;if(we.find(ee=>ee.item===L)?.bounds,Me&&U?.viewport&&V){const ee=U(L.x,De,L.z),he=U(L.x+Q.dx,De,L.z+Q.dz),ge=(he.x-ee.x)*U.viewport.width,te=-(he.y-ee.y)*U.viewport.height,se=Math.abs(ge)>.02?st.clamp(Math.atan2(te,ge),-.32,.32):0,Ee=[Me.right[0]*Math.cos(se)+Me.up[0]*Math.sin(se),Me.right[1]*Math.cos(se)+Me.up[1]*Math.sin(se),Me.right[2]*Math.cos(se)+Me.up[2]*Math.sin(se)],_e=[Me.up[0]*Math.cos(se)-Me.right[0]*Math.sin(se),Me.up[1]*Math.cos(se)-Me.right[1]*Math.sin(se),Me.up[2]*Math.cos(se)-Me.right[2]*Math.sin(se)],de=V*.5*Me.worldPerPixel,Fe=ve*.5*Me.worldPerPixel,y=(ie,ce)=>[ue[0]+Ee[0]*ie+_e[0]*ce,ue[1]+Ee[1]*ie+_e[1]*ce,ue[2]+Ee[2]*ie+_e[2]*ce];qe=[y(-de,-Fe),y(de,-Fe),y(de,Fe),y(-de,Fe)]}else{const ee=le(L),he=.66,ge=Q.dx,te=Q.dz;qe=[[L.x-ge*ee,De-he,L.z-te*ee],[L.x+ge*ee,De-he,L.z+te*ee],[L.x+ge*ee,De+he,L.z+te*ee],[L.x-ge*ee,De+he,L.z-te*ee]]}qe.forEach((ee,he)=>ke.setXYZ(ae*4+he,ee[0],ee[1],ee[2]));const Ge=Ce.get(L.name),T=Ge%s,u=Math.floor(Ge/s),F=d.height/p,z=T/s,j=(T+1)/s,G=1-(u+1)/F,xe=1-u/F;ft.setXY(ae*4,z,G),ft.setXY(ae*4+1,j,G),ft.setXY(ae*4+2,j,xe),ft.setXY(ae*4+3,z,xe)}),ke.needsUpdate=!0,ft.needsUpdate=!0,f.setDrawRange(0,We.length*6),f.computeBoundingSphere(),b.userData.labelCount=We.length,b.userData.candidateCount=r.length,b.userData.nearbyCount=Ve.length,b.userData.currentRoadLabels=P.length,b.userData.occludedCount=K,b.userData.labels=We.map(L=>{const ae=q(L),Q=we.find(De=>De.item===L);return{name:L.name,x:L.x,y:L.y,z:L.z,dx:ae.dx,dz:ae.dz,screenBounds:Q?.bounds}});const w=we.filter(L=>L.item.name.toLocaleLowerCase()==="center street").sort((L,ae)=>L.d2-ae.d2).slice(0,80).map(L=>({x:L.item.x,y:L.item.y,z:L.item.z,priority:L.item.priority??0,distance:Math.sqrt(L.d2),screen:L.screen,bounds:L.bounds,inFrustum:L.inFrustum,projectedTextDimensionsValid:L.projectedTextDimensionsValid,fitsViewport:L.fitsViewport,rejectReason:L.rejectReason})),it=we.filter(L=>L.screen).sort((L,ae)=>Math.hypot(L.screen.x,L.screen.y+.18)-Math.hypot(ae.screen.x,ae.screen.y+.18)).slice(0,24).map(L=>({name:L.item.name,x:L.item.x,z:L.item.z,distance:Math.sqrt(L.d2),screen:L.screen,bounds:L.bounds,rejectReason:L.rejectReason}));b.userData.diagnostics={namedRoadSegments:a.length,roadSegmentsNearPlayer:O,cameraSamples:W,generatedBaseLabels:r.length,generatedCurrentStreetCandidates:P.length,generatedCandidates:$.length,withinPlayerRange:Re.length,rejectedTooNear:Re.length-we.length,acceptedDistanceRange:we.length,inCameraFrustum:we.filter(L=>L.inFrustum).length,rejectedOutsideFrustum:we.filter(L=>!L.inFrustum).length,rejectedViewportBounds:we.filter(L=>L.inFrustum&&!L.fitsViewport).length,rejectedProjectedTextDimensions:we.filter(L=>!L.projectedTextDimensionsValid).length,occlusionTests:B,rejectedOcclusion:K,selectedLabelCount:We.length,drawRange:f.drawRange.count,meshVisible:b.visible,meshInScene:b.parent!==null,labelWidthPx:V,labelHeightPx:ve,centerStreetCandidates:w,bestProjectedCandidates:it}};return b.userData={kind:"osm-street-labels",labelCount:0,candidateCount:r.length,nearbyCount:0,currentRoadLabels:0,occludedCount:0,texture:g,refresh:x},x(0,0,0),b}async function Up(e){ga||(ga=fetch("./geo/manifest.json").then(a=>a.ok?a.json():null).catch(()=>null));const n=await ga;if(!n)return va("coverage manifest unavailable");const t=yp(e.lat,e.lon,n);if(!t)return va();const i=ko.get(t.id);if(i)return i;const r=fetch(`./geo/${t.asset}`).then(async a=>{if(!a.ok)throw new Error(`Geographic package ${t.id} unavailable (${a.status})`);const o=await a.json();return{buildings:o.buildings??[],roads:o.roads??[],source:o.source??t.source,areaId:t.id}}).catch(()=>va("geographic package unavailable"));return ko.set(t.id,r),r}function Mi(e,n){const t=new xt({color:e,roughness:.96,metalness:0});return t.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vRumbleRoadUv;`),i.vertexShader=i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vRumbleRoadUv = uv;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vRumbleRoadUv;
float roadHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float roadNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(roadHash(i),roadHash(i+vec2(1.,0.)),f.x),mix(roadHash(i+vec2(0.,1.)),roadHash(i+vec2(1.,1.)),f.x),f.y);}`);let r="float aggregate=roadNoise(vRumbleRoadUv*vec2(4.8,.075));float grit=roadNoise(vRumbleRoadUv*vec2(78.,13.));float patchNoise=aggregate;diffuseColor.rgb*=.86+aggregate*.18+grit*.045+(patchNoise-.5)*.09;";n==="major"?r+="float edge=1.0-smoothstep(0.012,0.024,min(vRumbleRoadUv.x,1.0-vRumbleRoadUv.x));float dash=step(0.48,fract(vRumbleRoadUv.y/11.0));float center=1.0-smoothstep(0.003,0.009,abs(vRumbleRoadUv.x-0.5));float shoulder=1.0-smoothstep(.026,.04,min(vRumbleRoadUv.x,1.0-vRumbleRoadUv.x));diffuseColor.rgb=mix(diffuseColor.rgb,vec3(0.74,0.67,0.52),edge*0.58);diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*0.72,shoulder*.2);diffuseColor.rgb=mix(diffuseColor.rgb,vec3(0.84,0.81,0.72),center*dash*0.66);":n==="street"?r+="float edge=1.0-smoothstep(0.012,0.03,min(vRumbleRoadUv.x,1.0-vRumbleRoadUv.x));float roadWear=aggregate;float fineWear=grit;diffuseColor.rgb=mix(diffuseColor.rgb,vec3(0.54,0.51,0.45),edge*0.34);diffuseColor.rgb*=.96+roadWear*.055+(fineWear-.5)*.045;":r+="float edge=1.0-smoothstep(0.012,0.045,min(vRumbleRoadUv.x,1.0-vRumbleRoadUv.x));float trackGrain=roadNoise(vRumbleRoadUv*vec2(22.,4.));diffuseColor.rgb*=.88+trackGrain*.22;diffuseColor.rgb=mix(diffuseColor.rgb,vec3(0.56,0.48,0.34),edge*0.25);",i.fragmentShader=i.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
${r}`)},t.customProgramCacheKey=()=>`rumble-road-${n}-surface-v3`,t}const Ho={major:Mi(2698801,"major"),street:Mi(3553338,"street"),path:Mi(7828584,"path"),track:Mi(8413251,"track")},Ip={residential:11705472,commercial:9410456,industrial:7830390,other:10524549};function Np(e,n){const t=new xt({color:n,roughness:e==="commercial"?.66:.82,metalness:e==="commercial"?.1:.025,side:It,emissive:n,emissiveIntensity:.025});return t.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vFacadeWorld;`),i.vertexShader=i.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vFacadeWorld = worldPosition.xyz;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vFacadeWorld;
float facadeHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}`);const r=e==="commercial"?"0.78":e==="industrial"?"0.38":"0.55";i.fragmentShader=i.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      // Three's vNormal is already in view space. Transforming it by
      // viewMatrix again made the facade/window classification camera-relative
      // and produced unstable wall treatment as the chase camera moved.
      vec3 facadeNormal=normalize(vNormal);
      float facadeSide=1.0-smoothstep(0.12,0.42,abs(facadeNormal.y));
      vec2 facadePlane=abs(facadeNormal.x)>0.55?vFacadeWorld.zy:vFacadeWorld.xy;
      float facadeGrain=facadeHash(floor(facadePlane*vec2(0.21,0.13)));
      diffuseColor.rgb*=mix(0.94,1.055,facadeGrain);
      vec2 facadeGrid=vec2(facadePlane.x*0.74,facadePlane.y*0.29);
      vec2 facadeCell=fract(facadeGrid);
      float facadeWindow=step(0.15,facadeCell.x)*step(0.13,facadeCell.y)*step(facadeCell.x,0.85)*step(facadeCell.y,0.82);
      float facadeLit=step(${r},facadeHash(floor(facadeGrid)));
      vec3 facadeGlass=vec3(0.16,0.22,0.23)+vec3(0.22,0.16,0.075)*facadeLit;
      float facadeFloors=step(0.955,fract(facadePlane.y*0.31));
      float windowFrame=facadeWindow*(1.0-smoothstep(0.03,0.085,min(min(facadeCell.x,1.0-facadeCell.x),min(facadeCell.y,1.0-facadeCell.y))));
      diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*0.82,facadeSide*windowFrame*0.28);
      diffuseColor.rgb=mix(diffuseColor.rgb,facadeGlass,facadeSide*facadeWindow*0.68);
      diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*0.78,facadeSide*facadeFloors*0.2);
      float roofNoise=facadeHash(floor(vFacadeWorld.xz*0.22));
      diffuseColor.rgb*=mix(.95,1.05,roofNoise)*mix(0.96,1.035,roofNoise*(1.0-facadeSide)*0.62);`)},t.customProgramCacheKey=()=>`rumble-building-facade-${e}-v4`,t}const Vo=Object.fromEntries(Object.entries(Ip).map(([e,n])=>[e,Np(e,n)]));function zo(e,n,t){const i=Cn(e.tags);if(!i||e.coords.length<2)return null;const r=bn(e.coords,n).filter(m=>Number.isFinite(m.x)&&Number.isFinite(m.z));if(r.length<2)return null;const a=Ns(e.tags,i),o=[],s=[];for(let m=0;m<r.length;m++){const M=r[Math.max(0,m-1)],E=r[Math.min(r.length-1,m+1)],f=E.x-M.x,l=E.z-M.z,b=Math.hypot(f,l)||1;let A=-l/b,x=f/b;if(m>0&&m<r.length-1){const C=r[m-1],R=r[m],D=r[m+1],U=Math.hypot(R.x-C.x,R.z-C.z)||1,_=Math.hypot(D.x-R.x,D.z-R.z)||1,S=-(R.z-C.z)/U-(D.z-R.z)/_,P=(R.x-C.x)/U+(D.x-R.x)/_,O=Math.hypot(S,P)||1;A=S/O,x=P/O;const W=Math.max(.45,Math.abs(A*(-l/b)+x*(f/b))),X=Math.min(a*.9,a*.5/W);o.push(new ut(R.x+A*X,R.z+x*X)),s.push(new ut(R.x-A*X,R.z-x*X))}else o.push(new ut(r[m].x+A*a/2,r[m].z+x*a/2)),s.push(new ut(r[m].x-A*a/2,r[m].z-x*a/2))}const c=[],p=[],d=[0];for(let m=1;m<r.length;m++)d.push(d[m-1]+Math.hypot(r[m].x-r[m-1].x,r[m].z-r[m-1].z));const h=(m,M,E,f)=>{c.push(m.x,t(m.x,m.y)+M,m.y),p.push(E,f)};for(let m=0;m<r.length-1;m++)h(o[m],.1,0,d[m]),h(o[m+1],.1,0,d[m+1]),h(s[m],.1,1,d[m]),h(s[m],.1,1,d[m]),h(o[m+1],.1,0,d[m+1]),h(s[m+1],.1,1,d[m+1]);const g=new dn;return g.setAttribute("position",new Hi(c,3)),g.setAttribute("uv",new Hi(p,2)),{kind:i,geometry:g,width:a}}function Fp(e,n,t=60){let i=t*t,r;for(const a of e){const o=Cn(a.tags);if(!o||o==="path"||a.coords.length<2)continue;const s=bn(a.coords,n);for(let c=0;c<s.length-1;c++){const p=s[c],d=s[c+1],h=d.x-p.x,g=d.z-p.z,m=h*h+g*g;if(m<.01)continue;const M=st.clamp(-(p.x*h+p.z*g)/m,0,1),E=p.x+h*M,f=p.z+g*M,l=E*E+f*f;l<i&&(i=l,r=Math.atan2(h,g))}}return r}class Op{group=new qt;roadsGroup=new qt;list=[];status={source:"none",buildings:0,roads:0,fallbacks:0,skippedRoads:0,message:"MAP DATA · LOADING"};progress={phase:"idle",complete:0,total:0};loadToken=0;cellSize=256;cells=new Map;visibleBuildings=new Set;collisionBuildings=new Set;roads=[];labels=null;lastLabelUpdate=0;get streetLabelCount(){return Number(this.labels?.userData.labelCount??0)}get activeCollisionCount(){return this.collisionBuildings.size}get sceneryRoads(){return this.roads}get streetLabelPositions(){return this.labels?.userData.labels??[]}get streetLabelAtlasImage(){return this.labels?.userData.texture?.image}get streetLabelGeometryDebug(){const n=this.labels?.geometry,t=n?.getAttribute("position"),i=n?.getAttribute("uv");return{visible:this.labels?.visible,count:this.streetLabelCount,candidateCount:this.labels?.userData.candidateCount,nearbyCount:this.labels?.userData.nearbyCount,currentRoadLabels:this.labels?.userData.currentRoadLabels,occludedCount:this.labels?.userData.occludedCount,drawCount:n?.drawRange.count,positions:t?Array.from(t.array.slice(0,12)):[],uvs:i?Array.from(i.array.slice(0,8)):[],material:this.labels?.material&&this.labels.material.map?.image?{transparent:this.labels.material.transparent,depthTest:this.labels.material.depthTest,opacity:this.labels.material.opacity}:null}}get streetLabelDiagnostics(){return this.labels?.userData.diagnostics??null}updateStreetLabels(n,t,i,r,a=!1){!this.labels||!a&&performance.now()-this.lastLabelUpdate<500||(this.lastLabelUpdate=performance.now(),this.labels.userData.refresh?.(n,t,i,r))}lastCullAt=0;lastCullX=Number.NaN;lastCullZ=Number.NaN;cellKey(n,t){return`${Math.floor(n/this.cellSize)},${Math.floor(t/this.cellSize)}`}updateVisibility(n,t,i=900,r=!1){const a=performance.now();if(!r&&(a-this.lastCullAt<350||Math.hypot(n-this.lastCullX,t-this.lastCullZ)<10))return;this.lastCullAt=a,this.lastCullX=n,this.lastCullZ=t;const o=Math.ceil(i/this.cellSize),s=Math.floor(n/this.cellSize),c=Math.floor(t/this.cellSize),p=new Set;for(let h=s-o;h<=s+o;h++)for(let g=c-o;g<=c+o;g++)for(const m of this.cells.get(`${h},${g}`)??[])p.add(m);const d=i*i;for(const h of[...this.visibleBuildings])!h.broken&&p.has(h)&&(h.x-n)**2+(h.z-t)**2<=d||(h.batch&&h.instanceId!==void 0&&h.batch.setVisibleAt(h.instanceId,!1),this.visibleBuildings.delete(h));for(const h of p)!h.broken&&(h.x-n)**2+(h.z-t)**2<=d&&!this.visibleBuildings.has(h)&&(h.batch&&h.instanceId!==void 0&&h.batch.setVisibleAt(h.instanceId,!0),this.visibleBuildings.add(h))}updateCollisionWindow(n,t,i,r=120,a=!1){if(!i)return;const o=performance.now();if(!a&&o-this.lastCollisionSync<300&&Math.hypot(n-this.lastCollisionX,t-this.lastCollisionZ)<12)return;this.lastCollisionSync=o,this.lastCollisionX=n,this.lastCollisionZ=t;const s=Math.ceil((r+80)/this.cellSize),c=Math.floor(n/this.cellSize),p=Math.floor(t/this.cellSize),d=new Set;for(let g=c-s;g<=c+s;g++)for(let m=p-s;m<=p+s;m++)for(const M of this.cells.get(`${g},${m}`)??[])d.add(M);const h=r+72;for(const g of[...this.collisionBuildings]){const m=Math.hypot(g.w,g.d)*.5;(g.broken||(g.x-n)**2+(g.z-t)**2>(h+m)**2)&&(i.removeBuilding(g),this.collisionBuildings.delete(g))}for(const g of d){if(g.broken||this.collisionBuildings.has(g))continue;const m=Math.hypot(g.w,g.d)*.5;(g.x-n)**2+(g.z-t)**2<=(r+m)**2&&(i.addBuilding(g,g.baseY??0),this.collisionBuildings.add(g))}}lastCollisionSync=0;lastCollisionX=Number.NaN;lastCollisionZ=Number.NaN;async load(n,t,i,r){this.reset(i);const a=this.loadToken;this.progress={phase:"features",complete:0,total:0};const o=await Up(n);if(a!==this.loadToken)return this.status;this.progress={phase:"buildings",complete:0,total:o.buildings.length},this.roads=o.roads;const s=new Map;let c=0;for(const M of o.buildings){this.progress.complete=++c;const E=bn(M.coords,r).map(B=>new ut(B.x,B.z));E.length>3&&E[0].distanceToSquared(E[E.length-1])<.01&&E.pop();const f=E.map(B=>B.x),l=E.map(B=>B.y);if(E.length<3)continue;const b=(Math.min(...f)+Math.max(...f))/2,A=(Math.min(...l)+Math.max(...l))/2,x=Math.max(2,Math.max(...f)-Math.min(...f)),C=Math.max(2,Math.max(...l)-Math.min(...l)),R=B=>bn(B,r).map(K=>new ut(K.x-b,-(K.z-A))),D=B=>{const K=new Ec;return B.forEach((me,Le)=>Le?K.lineTo(me.x,me.y):K.moveTo(me.x,me.y)),K.closePath(),K},U=E.map(B=>new ut(B.x-b,-(B.y-A))),_=new Ga;U.forEach((B,K)=>K?_.lineTo(B.x,B.y):_.moveTo(B.x,B.y)),_.closePath();const S=(M.holes??[]).map(R).filter(B=>B.length>=3);for(const B of S)_.holes.push(D(B));const P=Is(M.tags),O=Pp(M.tags,x*C),W=O.height,X=new Rs(_,{depth:1,bevelEnabled:!1,curveSegments:1});X.rotateX(-Math.PI/2),X.scale(1,W,1);const $=Vo[P],q=new $e($.color);if(M.tags["building:colour"]||M.tags.colour)try{q.set(M.tags["building:colour"]??M.tags.colour)}catch{}const le=new dt(X,$);le.position.set(b,t(b,A)+O.minHeight,A),le.castShadow=!0,le.receiveShadow=!0,le.userData={kind:"osm-building",osmId:M.id,tags:M.tags,category:P};const V=t(b,A),ve={id:M.id,source:"osm",category:P,mesh:le,x:b,z:A,w:x,d:C,h:W,minHeight:O.minHeight,footprint:E,holes:S.map(B=>B.map(K=>new ut(K.x+b,A-K.y))),tags:M.tags,baseY:V,broken:!1},Re=new $e;Re.r=$.color.r>0?q.r/$.color.r:1,Re.g=$.color.g>0?q.g/$.color.g:1,Re.b=$.color.b>0?q.b/$.color.b:1;let we=2166136261;for(const B of String(M.id))we=Math.imul(we^B.charCodeAt(0),16777619);const Ve=.91+(we>>>0)%1e3/1e3*.17;Re.multiplyScalar(Ve),ve.mesh.userData.instanceColor=Re,this.list.push(ve);const We=this.cellKey(b,A),Qe=this.cells.get(We)??[];Qe.push(ve),this.cells.set(We,Qe);const Xe=s.get(P)??[];if(Xe.push(ve),s.set(P,Xe),c%128===0&&(await new Promise(B=>setTimeout(B,0)),a!==this.loadToken))return this.status}this.progress.phase="batching";for(const[M,E]of s){const f=E.map(x=>x.mesh.geometry),l=f.reduce((x,C)=>x+C.getAttribute("position").count,0),b=f.reduce((x,C)=>x+(C.index?.count??C.getAttribute("position").count),0),A=new Mc(E.length,l,Math.max(l,b),Vo[M]);A.name=`geographic-buildings-${M}`,A.castShadow=!0,A.receiveShadow=!0;for(const x of E){const C=x.mesh;C.updateMatrix();const R=A.addGeometry(C.geometry),D=A.addInstance(R);A.setMatrixAt(D,C.matrix),A.setColorAt(D,C.userData.instanceColor),x.batch=A,x.instanceId=D,x.mesh=A,x.renderVisible=!0,C.geometry.dispose()}A.computeBoundingBox(),A.computeBoundingSphere(),this.group.add(A)}this.progress.phase="colliders",this.progress.complete=0,this.progress.total=this.list.length,this.updateCollisionWindow(0,0,i,120,!0),this.progress.total=this.collisionBuildings.size,this.progress.complete=this.collisionBuildings.size,this.updateVisibility(0,0,900,!0),this.progress.phase="roads",this.progress.complete=0,this.progress.total=o.roads.length;let p=0,d=0;const h={major:[],street:[],path:[],track:[]};let g=0;for(const M of o.roads){this.progress.complete=++g;const E=zo(M,r,t);if(!E){d++;continue}if(h[E.kind].push({positions:E.geometry.getAttribute("position").array,uvs:E.geometry.getAttribute("uv").array}),E.geometry.dispose(),p++,g%256===0&&(await new Promise(f=>setTimeout(f,0)),a!==this.loadToken))return this.status}for(const M of["major","street","path","track"]){const E=h[M];if(!E.length)continue;const f=E.reduce((D,U)=>D+U.positions.length,0),l=new Float32Array(f),b=new Float32Array(f/3*2);let A=0,x=0;for(const D of E)l.set(D.positions,A),b.set(D.uvs,x),A+=D.positions.length,x+=D.uvs.length;const C=new dn;C.setAttribute("position",new Ft(l,3)),C.setAttribute("uv",new Ft(b,2)),C.computeVertexNormals();const R=new dt(C,Ho[M]);R.receiveShadow=!0,R.name=`osm-road-${M}`,R.userData={kind:"osm-road",roadWays:E.length},R.frustumCulled=!0,this.roadsGroup.add(R)}this.labels=Dp(o.roads,r,t),this.labels&&this.roadsGroup.add(this.labels);const m=o.buildings.length>0||p>0;return this.progress={phase:"complete",complete:o.roads.length,total:o.roads.length},this.status={source:m?"osm":"none",areaId:o.areaId,buildings:o.buildings.length,roads:p,fallbacks:0,skippedRoads:d,heading:Fp(o.roads,r),message:m?`OSM MAP · ${o.buildings.length} BUILDINGS · ${p} STREET/PATH LINES`:o.source==="none"?"TERRAIN ONLY · NO PACKAGED MAP DATA":"MAP DATA PACKAGE UNAVAILABLE · TERRAIN ONLY"},this.status}nearestStreetName(n,t,i,r=45){let a=r*r,o="";for(const s of this.roads){const c=s.tags["name:en"]??s.tags.name;if(!c||!Cn(s.tags)||Cn(s.tags)==="path")continue;const p=bn(s.coords,i);for(let d=0;d<p.length-1;d++){const h=p[d],g=p[d+1],m=g.x-h.x,M=g.z-h.z,E=m*m+M*M;if(E<.01)continue;const f=st.clamp(((n-h.x)*m+(t-h.z)*M)/E,0,1),l=h.x+m*f,b=h.z+M*f,A=(l-n)**2+(b-t)**2;A<a&&(a=A,o=c)}}return o}addFixtureRoad(n,t){const i=[-12,140].map(o=>{const s=n.toGeo({x:0,z:o});return[s.lat,s.lon]}),r=zo({tags:{highway:"track",surface:"dirt",width:"4"},coords:i},n,t);if(!r)return null;r.geometry.computeVertexNormals();const a=new dt(r.geometry,Ho.track);return a.name="fixture-dirt-track",a.userData={kind:"fixture-road",source:"fixture"},this.roadsGroup.add(a),a}addPracticeCourse(n,t){return this.list.some(i=>i.source==="fallback")?0:(this.addBarriers(n,t),this.status.fallbacks=this.list.filter(i=>i.source==="fallback").length,this.status.fallbacks)}addBarriers(n,t){const i=new xt({color:13132085,roughness:.8});for(let r=0;r<4;r++)for(let a=-2;a<=2;a++){if((r+a)%3===0)continue;const o=3+(r*7+a*11+30)%3,s=3,c=2.5+(r*13+a*5+40)%3,p=a*5,d=28+r*9,h=new dt(new cn(o,c,s),i.clone());h.position.set(p,n(p,d)+c/2,d),h.castShadow=!0,h.receiveShadow=!0,h.userData={kind:"destructible-barrier",ownedMaterial:!0},this.group.add(h);const g={id:`practice-${r}-${a}`,source:"fallback",category:"practice",mesh:h,x:p,z:d,w:o,d:s,h:c,broken:!1};g.baseY=n(p,d),this.list.push(g),t?.addBuilding(g,g.baseY)}}addFixtureBuilding(n,t,i,r,a,o={w:7,d:6,h:9}){const{w:s,d:c,h:p}=o,d=new cn(s,p,c),h=new xt({color:11705472,roughness:.9}),g=r(t,i),m=new dt(d,h);m.position.set(t,g+p/2,i),m.castShadow=!0,m.receiveShadow=!0,m.userData.ownedMaterial=!0,m.userData={kind:"local-test-fixture",fixtureId:n},this.group.add(m);const M={id:n,source:"fixture",category:p>18?"commercial":"residential",mesh:m,x:t,z:i,w:s,d:c,h:p,baseY:g,broken:!1};return this.list.push(M),a?.addBuilding(M,g),M}break(n){return n.broken||n.mesh.parent!==this.group?!1:(n.broken=!0,this.visibleBuildings.delete(n),n.batch&&n.instanceId!==void 0?n.batch.setVisibleAt(n.instanceId,!1):(this.group.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.userData.ownedMaterial&&(Array.isArray(n.mesh.material)?n.mesh.material.forEach(t=>t.dispose()):n.mesh.material.dispose())),!0)}reset(n){this.loadToken++;for(const t of this.collisionBuildings)n?.removeBuilding(t);this.collisionBuildings.clear();for(const t of this.list)t.batch||t.mesh.geometry.dispose();for(const t of[...this.group.children]){this.group.remove(t);const i=t;i.geometry?.dispose(),i.userData.ownedMaterial&&(Array.isArray(i.material)?i.material.forEach(r=>r.dispose()):i.material?.dispose())}for(const t of this.roadsGroup.children){this.roadsGroup.remove(t);const i=t;i.geometry.dispose(),i===this.labels&&(i.userData.texture?.dispose(),i.material.dispose())}this.labels=null,this.roads=[],this.lastLabelUpdate=0,this.lastCollisionSync=0,this.lastCollisionX=Number.NaN,this.lastCollisionZ=Number.NaN,this.list=[],this.cells.clear(),this.visibleBuildings.clear(),this.lastCullAt=0,this.lastCullX=Number.NaN,this.lastCullZ=Number.NaN,this.status={source:"none",buildings:0,roads:0,fallbacks:0,skippedRoads:0,message:"MAP DATA · LOADING"},this.progress={phase:"idle",complete:0,total:0}}}const _a=34,Wo=e=>{let n=2166136261;for(const t of e)n=Math.imul(n^t.charCodeAt(0),16777619);return n>>>0},mt=e=>{let n=e>>>0;return n=Math.imul(n^n>>>16,73244475),n=Math.imul(n^n>>>16,73244475),((n^n>>>16)>>>0)/4294967296},Bp=(e,n,t)=>{const i=t.bx-t.ax,r=t.bz-t.az,a=i*i+r*r,o=a>1e-6?st.clamp(((e-t.ax)*i+(n-t.az)*r)/a,0,1):0;return(e-(t.ax+i*o))**2+(n-(t.az+r*o))**2};function Gp(e,n,t,i,r,a,o){const s=`${e.name} ${e.terrain??""}`.toLowerCase(),c=/moab|grand canyon|sahara|utah|arizona|desert/.test(s),p=/mount kisco|westchester|forest|woodland|green hills/.test(s);if(!c&&!p)return[];const d=[];for(const b of r){const A=Cn(b.tags);if(!A)continue;const x=bn(b.coords,i),C=Ns(b.tags,A)*.5+7;for(let R=1;R<x.length;R++)d.push({ax:x[R-1].x,az:x[R-1].z,bx:x[R].x,bz:x[R].z,clearance:C})}const h=a.map(b=>({minX:b.x-b.w*.5-4,maxX:b.x+b.w*.5+4,minZ:b.z-b.d*.5-4,maxZ:b.z+b.d*.5+4})),g=Wo(`${e.name}:${e.lat.toFixed(4)}:${e.lon.toFixed(4)}`),m=[],M=Math.ceil(560/_a),E=24**2,f=560**2;for(let b=-M;b<=M;b++)for(let A=-M;A<=M;A++){const x=Wo(`${g}:${A}:${b}`),C=n+(A+.5+(mt(x)-.5)*.55)*_a,R=t+(b+.5+(mt(x^2654435769)-.5)*.55)*_a,D=(C-n)**2+(R-t)**2;if(D<E||D>f||mt(x^2246822507)>(c?.58:.5)||h.some(_=>C>=_.minX&&C<=_.maxX&&R>=_.minZ&&R<=_.maxZ)||d.some(_=>Bp(C,R,_)<_.clearance**2))continue;const U=c?mt(x^3266489909)<.52?"rock":"shrub":mt(x^668265263)<.62?"tree":"shrub";m.push({x:C,z:R,kind:U,scale:.72+mt(x^374761393)*.82,yaw:mt(x^3550635116)*Math.PI*2,seed:x})}const l=o==="low"?260:o==="medium"?440:680;return m.sort((b,A)=>(b.x-n)**2+(b.z-t)**2-((A.x-n)**2+(A.z-t)**2)),m.slice(0,l)}class kp{group=new qt;quality="low";points=[];lastCell="";frame=null;groundAt=null;roads=[];buildings=[];center={x:0,z:0};place=null;total=0;capacity=680;rockMesh;shrubMesh;trunkMesh;canopyMesh;matrix=new Nt;position=new ne;scale=new ne;quaternion=new Bt;color=new $e;constructor(){const n=new ka(.5,1);n.computeVertexNormals();const t=new ka(.5,1);t.computeVertexNormals();const i=new Li(.09,.16,1,7,1,!1),r=[new oo(.82,1.55,7,2),new oo(.62,1.15,7,2)];r[0].translate(0,.5,0),r[1].translate(0,1.25,0);const a=Un(r,!1);r.forEach(s=>s.dispose());const o=(s,c,p)=>{const d=new jt(s,new xt({color:c,roughness:.94,metalness:0,flatShading:!0}),this.capacity);return d.count=0,d.name=p,d.castShadow=!1,d.receiveShadow=!1,d.frustumCulled=!0,this.group.add(d),d};this.rockMesh=o(n,16777215,"scenery-desert-rocks"),this.shrubMesh=o(t,16777215,"scenery-low-shrubs"),this.trunkMesh=o(i,16777215,"scenery-tree-trunks"),this.canopyMesh=o(a,16777215,"scenery-tree-canopies")}setLocation(n,t,i,r,a){this.place=n,this.frame=t,this.groundAt=i,this.roads=r,this.buildings=a,this.lastCell="",this.refresh(0,0,!0)}setQuality(n){this.quality=n,this.place&&(this.lastCell="",this.refresh(this.center.x,this.center.z,!0))}update(n,t){if(!this.place||!this.frame||!this.groundAt)return;`${Math.floor(n/240)},${Math.floor(t/240)}`!==this.lastCell&&this.refresh(n,t,!0)}refresh(n,t,i){!this.place||!this.frame||!this.groundAt||!i&&!this.points.length||(this.center={x:n,z:t},this.lastCell=`${Math.floor(n/240)},${Math.floor(t/240)}`,this.points=Gp(this.place,n,t,this.frame,this.roads,this.buildings,this.quality),this.populate())}populate(){if(!this.groundAt)return;let n=0,t=0,i=0;const r=a=>this.groundAt(a.x,a.z);for(const a of this.points){const o=r(a),s=a.scale;if(a.kind==="rock")this.position.set(a.x,o+.38*s,a.z),this.quaternion.setFromEuler(new Wt(a.yaw*.23,a.yaw,a.yaw*.17)),this.scale.set(s*(1.1+mt(a.seed)*2.2),s*(.55+mt(a.seed^11)*.9),s*(1+mt(a.seed^21)*1.9)),this.matrix.compose(this.position,this.quaternion,this.scale),this.rockMesh.setMatrixAt(n,this.matrix),this.color.setHSL(.075+mt(a.seed^31)*.025,.22,.35+mt(a.seed^41)*.2),this.rockMesh.setColorAt(n++,this.color);else if(a.kind==="shrub")this.position.set(a.x,o+.32*s,a.z),this.quaternion.setFromAxisAngle(new ne(0,1,0),a.yaw),this.scale.set(s*1.25,s*(.55+mt(a.seed^51)*.55),s*1.1),this.matrix.compose(this.position,this.quaternion,this.scale),this.shrubMesh.setMatrixAt(t,this.matrix),this.color.setHSL(.23+mt(a.seed^61)*.09,.3,.22+mt(a.seed^71)*.15),this.shrubMesh.setColorAt(t++,this.color);else{const c=3.5+s*(2+mt(a.seed^81)*3);this.position.set(a.x,o+c*.27,a.z),this.quaternion.setFromAxisAngle(new ne(0,1,0),a.yaw),this.scale.setScalar(s),this.scale.y=c*.56,this.matrix.compose(this.position,this.quaternion,this.scale),this.trunkMesh.setMatrixAt(i,this.matrix),this.position.y=o+c*.48,this.scale.set(s*(1.5+mt(a.seed^91)*.55),c*.62,s*(1.5+mt(a.seed^101)*.55)),this.matrix.compose(this.position,this.quaternion,this.scale),this.canopyMesh.setMatrixAt(i,this.matrix),this.color.setHSL(.27+mt(a.seed^111)*.07,.36,.2+mt(a.seed^121)*.12),this.canopyMesh.setColorAt(i,this.color),this.color.setHSL(.09,.22,.22+mt(a.seed^131)*.08),this.trunkMesh.setColorAt(i++,this.color)}}this.rockMesh.count=n,this.shrubMesh.count=t,this.trunkMesh.count=i,this.canopyMesh.count=i;for(const a of[this.rockMesh,this.shrubMesh,this.trunkMesh,this.canopyMesh])a.instanceMatrix.needsUpdate=!0,a.instanceColor&&(a.instanceColor.needsUpdate=!0),a.computeBoundingSphere();this.total=n+t+i}get instanceCount(){return this.total}clear(){this.points=[],this.total=0;for(const n of[this.rockMesh,this.shrubMesh,this.trunkMesh,this.canopyMesh])n.count=0;this.lastCell=""}dispose(){this.group.clear();for(const n of[this.rockMesh,this.shrubMesh,this.trunkMesh,this.canopyMesh])n.geometry.dispose(),n.material.dispose();this.points=[],this.total=0,this.roads=[],this.buildings=[],this.place=null,this.frame=null,this.groundAt=null}}const Yn=new ne;function Dt(e,n,t,i,r,a){const o=2*Math.PI*r/4,s=Math.max(a-2*r,0),c=Math.PI/4;Yn.copy(n),Yn[i]=0,Yn.normalize();const p=.5*o/(o+s),d=1-Yn.angleTo(e)/c;return Math.sign(Yn[t])===1?d*p:s/(o+s)+p+p*(1-d)}class ar extends cn{constructor(n=1,t=1,i=1,r=2,a=.1){const o=r*2+1;if(a=Math.min(n/2,t/2,i/2,a),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:n,height:t,depth:i,segments:r,radius:a},o===1)return;const s=this.toNonIndexed();this.index=null,this.attributes.position=s.attributes.position,this.attributes.normal=s.attributes.normal,this.attributes.uv=s.attributes.uv;const c=new ne,p=new ne,d=new ne(n,t,i).divideScalar(2).subScalar(a),h=this.attributes.position.array,g=this.attributes.normal.array,m=this.attributes.uv.array,M=h.length/6,E=new ne,f=.5/o;for(let l=0,b=0;l<h.length;l+=3,b+=2)switch(c.fromArray(h,l),p.copy(c),p.x-=Math.sign(p.x)*f,p.y-=Math.sign(p.y)*f,p.z-=Math.sign(p.z)*f,p.normalize(),h[l+0]=d.x*Math.sign(c.x)+p.x*a,h[l+1]=d.y*Math.sign(c.y)+p.y*a,h[l+2]=d.z*Math.sign(c.z)+p.z*a,g[l+0]=p.x,g[l+1]=p.y,g[l+2]=p.z,Math.floor(l/M)){case 0:E.set(1,0,0),m[b+0]=Dt(E,p,"z","y",a,i),m[b+1]=1-Dt(E,p,"y","z",a,t);break;case 1:E.set(-1,0,0),m[b+0]=1-Dt(E,p,"z","y",a,i),m[b+1]=1-Dt(E,p,"y","z",a,t);break;case 2:E.set(0,1,0),m[b+0]=1-Dt(E,p,"x","z",a,n),m[b+1]=Dt(E,p,"z","x",a,i);break;case 3:E.set(0,-1,0),m[b+0]=1-Dt(E,p,"x","z",a,n),m[b+1]=1-Dt(E,p,"z","x",a,i);break;case 4:E.set(0,0,1),m[b+0]=1-Dt(E,p,"x","y",a,n),m[b+1]=1-Dt(E,p,"y","x",a,t);break;case 5:E.set(0,0,-1),m[b+0]=Dt(E,p,"x","y",a,n),m[b+1]=1-Dt(E,p,"y","x",a,t);break}}static fromJSON(n){return new ar(n.width,n.height,n.depth,n.segments,n.radius)}}const Xo=["front-left","front-right","rear-left","rear-right"],qo=[{x:-1.22,z:1.22},{x:1.22,z:1.22},{x:-1.22,z:-1.25},{x:1.22,z:-1.25}];class Hp{root=new qt;wheels=[];frontWheels=[];suspension=[];body;opts;model=new qt;materials;parts={paint:[],dark:[],chrome:[],glass:[],tire:[],light:[],tail:[]};wheelSprings;wheelShocks;shockRods;axleLinks;workMatrix=new Nt;workQuaternion=new Bt;workPosition=new ne;workScale=new ne;constructor(n={color:"#d84924",scale:1}){this.opts=n,this.root.scale.setScalar(n.scale),this.model.position.y=-1.65,this.root.add(this.model),this.body=new qt,this.model.add(this.body),this.makeMaterials(),this.buildChassisAndBody(),this.buildWheels(),this.finishBodyBatches()}makePaintMaterial(){const t=new Uint8Array(16384);let i=1297702388;for(let o=0;o<4096;o++){i=Math.imul(i,1664525)+1013904223>>>0;const s=168+(i>>>24)*.34;t[o*4]=t[o*4+1]=t[o*4+2]=s,t[o*4+3]=255}const r=new xc(t,64,64,Xt);r.wrapS=r.wrapT=ds,r.repeat.set(5,5),r.minFilter=Mn,r.magFilter=En,r.generateMipmaps=!0,r.needsUpdate=!0;const a=new so({color:this.opts.color,metalness:.3,roughness:.3,roughnessMap:r,clearcoat:.76,clearcoatRoughness:.17});return a.name="Rumble Roam metallic clearcoat paint",a}makeMaterials(){this.materials={paint:this.makePaintMaterial(),dark:new xt({color:1382939,metalness:.28,roughness:.68}),chrome:new xt({color:12041920,metalness:.78,roughness:.24}),glass:new so({color:6523801,metalness:.16,roughness:.2,transparent:!0,opacity:.82,clearcoat:.9,side:It,depthWrite:!1}),tire:new xt({color:1053204,roughness:.94}),light:new xt({color:16770464,emissive:16754230,emissiveIntensity:1.15,roughness:.2}),tail:new xt({color:11999506,emissive:16717323,emissiveIntensity:.85,roughness:.28})}}boxGeometry(n,t,i,r,a,o,s=.025,c){const p=new ar(n,t,i,4,Math.min(s,n*.24,t*.24,i*.24)),d=c?new Bt().setFromEuler(c):new Bt;return p.applyMatrix4(new Nt().compose(new ne(r,a,o),d,new ne(1,1,1))),p}addBox(n,t,i,r,a,o,s,c=.025,p){this.parts[n].push(this.boxGeometry(t,i,r,a,o,s,c,p))}addSideShape(n,t,i,r=.045){const a=new Rs(n,{depth:r,bevelEnabled:!1,curveSegments:8});a.rotateY(t<0?-Math.PI/2:Math.PI/2),a.translate(t*1.11,0,0),this.parts[i].push(a)}profileShape(){const n=new Ga;return n.moveTo(-2.02,1.28),n.lineTo(-2.02,1.78),n.lineTo(-1.53,1.86),n.lineTo(-1.34,2.77),n.lineTo(-.91,3.04),n.lineTo(.29,3.04),n.lineTo(.65,2.14),n.lineTo(1.2,1.98),n.lineTo(2.03,1.77),n.lineTo(2.03,1.2),n.quadraticCurveTo(1.22,2.16,.38,1.2),n.lineTo(-.4,1.2),n.quadraticCurveTo(-1.25,2.16,-2.08,1.2),n.lineTo(-2.02,1.28),n.closePath(),n}sideWindow(n,t,i,r){const a=new Ga;return a.moveTo(n,t),a.lineTo(n+.12,r),a.lineTo(i-.1,r),a.lineTo(i,t),a.closePath(),a}buildChassisAndBody(){this.addBox("dark",1.75,.22,3.55,0,1.3,-.02,.055);for(const c of[-.9,.9])this.addBox("dark",.17,.2,3.7,c,1.23,-.02,.045);for(const c of[-1.38,-.2,1.16])this.addBox("chrome",2,.11,.13,0,1.21,c,.025);this.addBox("dark",1.2,.08,.95,0,1.14,.1,.025),this.addBox("paint",2.12,.46,1.27,0,1.76,1.15,.09),this.addBox("paint",1.93,.16,1.48,0,3,-.34,.065),this.addBox("paint",1.78,.96,1.24,0,2.43,-.36,.08);const n=this.profileShape();for(const c of[-1,1])this.addSideShape(n,c,"paint",.055),this.addSideShape(this.sideWindow(-1.19,2.32,-.53,2.8),c,"glass",.018),this.addSideShape(this.sideWindow(-.43,2.32,.16,2.8),c,"glass",.018),this.addBox("chrome",.035,.045,.76,c*1.17,2.2,-.17,.012),this.addBox("chrome",.04,.035,.19,c*1.18,2.05,-.24,.01),this.addBox("dark",.075,.22,1.05,c*1.12,1.31,-.05,.026);this.addBox("glass",1.56,.68,.045,0,2.56,.48,.012,new Wt(-.48,0,0)),this.addBox("glass",1.48,.52,.04,0,2.55,-1.02,.012,new Wt(.18,0,0)),this.addBox("chrome",1.75,.055,.12,0,3.08,-.34,.02),this.addBox("dark",1.4,.08,.95,0,1.64,-1.42,.02);for(const c of[-.76,.76])this.addBox("paint",.12,.34,1.02,c,1.79,-1.4,.035);this.addBox("paint",1.48,.38,.13,0,1.77,-1.93,.035);for(let c=0;c<5;c++)this.addBox("chrome",1.25,.018,.024,0,1.69,-1.78+c*.18,.004);this.addBox("chrome",2.22,.2,.22,0,1.47,1.96,.045),this.addBox("dark",1.16,.38,.055,0,1.83,1.94,.012),this.addBox("chrome",1.28,.045,.07,0,2.05,1.95,.012),this.addBox("chrome",1.28,.045,.07,0,1.61,1.95,.012);for(let c=0;c<9;c++)this.addBox("dark",.025,.34,.035,-.5+c*.125,1.83,1.98,.008);this.addBox("dark",.22,.11,.07,0,1.72,2.01,.012),this.addBox("chrome",2.12,.14,.2,0,1.52,-2,.035),this.addBox("chrome",1.95,.055,.14,0,1.68,-2,.015),this.addBox("dark",1.08,.21,.035,0,1.82,-2.015,.018),this.addBox("chrome",.62,.035,.025,0,1.83,-2.041,.009),this.addBox("chrome",.56,.14,.025,0,1.47,-2.075,.018),this.addBox("dark",.46,.075,.028,0,1.47,-2.092,.01);for(let c=-3;c<=3;c++)this.addBox("dark",.018,.17,.02,c*.13,1.82,-2.04,.005);for(const c of[-.82,.82])this.addBox("dark",.48,.29,.09,c,1.94,1.93,.035),this.addBox("light",.34,.19,.045,c,1.95,1.99,.035),this.addBox("light",.14,.08,.035,c,1.72,2,.018),this.addBox("dark",.3,.28,.08,c,1.82,-2.02,.025),this.addBox("tail",.22,.22,.055,c,1.83,-2.075,.035);for(const c of[-.69,.69])this.addBox("paint",.08,.055,.83,c,2.02,1.13,.025),this.addBox("chrome",.035,.025,.63,c*1.7,1.9,-.36,.01);for(const c of[-1.1,.46])this.addBox("dark",.05,.86,.06,0,2.51,c,.018);for(let c=-2;c<=2;c++)this.addBox("light",.14,.13,.08,c*.36,3.14,-.25,.06);this.addBox("dark",1.34,.12,.54,0,2.12,.31,.045),this.addBox("dark",.13,.56,.1,0,2.37,.35,.025);for(const c of[-.43,.43])this.addBox("dark",.44,.12,.48,c,1.93,-.15,.045),this.addBox("dark",.43,.45,.13,c,2.17,-.35,.055),this.addBox("chrome",.035,.52,.045,c*1.15,2.35,.42,.012),this.addBox("dark",.19,.13,.25,c*1.22,2.5,.42,.035);for(let c=0;c<7;c++)this.addBox("dark",.09,.045,.32,-.66+c*.22,2.02,1.12,.015);const t=[];for(const c of[-1.17,1.17])for(const p of[-1.25,1.22]){const d=new Tc(new ne(c,1.26,p-.91),new ne(c,2.14,p),new ne(c,1.26,p+.91));t.push(new sa(d,20,.06,7,!1))}const i=Un(t,!1);t.forEach(c=>c.dispose()),this.body.add(new dt(i,this.materials.dark));const a=[-1,1].map(c=>new lo([new ne(c*.86,1.65,-1.82),new ne(c*.86,2.85,-1.55),new ne(c*.86,3.2,-.9),new ne(c*.86,3.2,.05),new ne(c*.82,2.2,.98)])).map(c=>new sa(c,24,.035,7,!1)),o=Un(a,!1);a.forEach(c=>c.dispose()),this.body.add(new dt(o,this.materials.chrome));const s=new dt(new gi(.19,.026,7,24),this.materials.dark);s.position.set(-.43,2.33,.52),this.body.add(s);for(const c of[-1.25,1.22])this.addBox("dark",1.82,.12,.16,0,1.43,c,.025),this.addBox("chrome",1.22,.055,.07,0,1.56,c,.018)}finishBodyBatches(){for(const n of Object.keys(this.parts)){const t=this.parts[n];if(!t.length)continue;const i=Un(t,!1);if(t.forEach(a=>a.dispose()),!i)continue;const r=new dt(i,this.materials[n]);r.castShadow=!0,r.receiveShadow=!0,r.frustumCulled=!0,this.body.add(r)}this.parts={paint:[],dark:[],chrome:[],glass:[],tire:[],light:[],tail:[]}}cylinderGeometry(n,t,i=24){const r=new Li(n,n,t,i,1,!1);return r.rotateZ(Math.PI/2),r}buildWheels(){const n=new xt({color:2698543,roughness:.9}),t=[],i=[],r=new Li(.82,.82,.61,36,1,!1);r.rotateZ(Math.PI/2),t.push(r);for(const M of[-.29,.29]){const E=new gi(.63,.12,8,36);E.rotateY(Math.PI/2),E.translate(M,0,0),t.push(E);const f=this.cylinderGeometry(.455,.045,28);f.translate(M*1.04,0,0),i.push(f);const l=new gi(.405,.025,8,32);l.rotateY(Math.PI/2),l.translate(M*1.04,0,0),i.push(l);const b=new gi(.735,.018,6,40);b.rotateY(Math.PI/2),b.translate(M*.275,0,0),t.push(b);for(let x=0;x<16;x++){const C=x*Math.PI/8,R=new Li(.026,.034,.035,8,1);R.rotateZ(Math.PI/2),R.applyMatrix4(new Nt().compose(new ne(M*.32,Math.sin(C)*.68,Math.cos(C)*.68),new Bt().setFromEuler(new Wt(C,0,0)),new ne(1,1,1))),t.push(R)}const A=this.cylinderGeometry(.16,.075,18);A.translate(M*1.1,0,0),i.push(A);for(let x=0;x<6;x++){const C=x*Math.PI/3,R=new cn(.065,.07,.29);R.applyMatrix4(new Nt().compose(new ne(M*1.08,Math.cos(C)*.25,Math.sin(C)*.25),new Bt().setFromEuler(new Wt(C,0,0)),new ne(1,1,1))),i.push(R);const D=this.cylinderGeometry(.034,.018,10);D.translate(M*1.1,Math.cos(C)*.19,Math.sin(C)*.19),i.push(D)}}const a=Un(t,!1);t.forEach(M=>M.dispose());const o=Un(i,!1);i.forEach(M=>M.dispose());const s=this.cylinderGeometry(.13,3.1,12),c=new xt({color:3422779,metalness:.55,roughness:.48}),p=new jt(s,c,2);p.castShadow=!0;const d=new Bt().setFromAxisAngle(new ne(0,0,1),Math.PI/2);[-1.25,1.22].forEach((M,E)=>{this.workMatrix.compose(new ne(0,.91,M),d,new ne(1,1,1)),p.setMatrixAt(E,this.workMatrix)}),p.instanceMatrix.needsUpdate=!0,this.model.add(p);const h=[];for(let M=0;M<=96;M++){const E=M/96,f=E*Math.PI*2*8;h.push(new ne(Math.cos(f)*.11,E-.5,Math.sin(f)*.11))}const g=new sa(new lo(h),128,.025,5,!1),m=new xt({color:13817555,metalness:.78,roughness:.32});this.wheelSprings=new jt(g,m,4),this.wheelSprings.castShadow=!0,this.wheelShocks=new jt(this.cylinderGeometry(.072,.68,10),c,4),this.wheelShocks.castShadow=!0,this.shockRods=new jt(this.cylinderGeometry(.025,.62,8),this.materials.chrome,4),this.shockRods.castShadow=!0,this.model.add(this.wheelSprings,this.wheelShocks,this.shockRods);for(let M=0;M<4;M++){const E=qo[M],f=Xo[M],l=new qt;l.position.set(E.x,.92,E.z),l.userData.wheelId=f,this.model.add(l),this.wheels.push(l),M<2&&this.frontWheels.push(l);const b=new dt(a,this.materials.tire);b.castShadow=!0,b.receiveShadow=!0,l.add(b);const A=new dt(o,this.materials.chrome);A.castShadow=!0,l.add(A);const x=new cn(.34,.18,.3),C=new jt(x,n,48);C.castShadow=!0,C.receiveShadow=!0;let R=0;for(let D=0;D<2;D++)for(let U=0;U<24;U++){const _=U*Math.PI/12+D*Math.PI/24,S=new Bt().setFromEuler(new Wt(_+Math.PI/2,0,D?.16:-.16));this.workMatrix.compose(new ne(D?.16:-.16,Math.sin(_)*.81,Math.cos(_)*.81),S,new ne(1,1,1)),C.setMatrixAt(R++,this.workMatrix)}C.instanceMatrix.needsUpdate=!0,l.add(C)}this.axleLinks=new jt(this.cylinderGeometry(.055,1,10),c,4),this.axleLinks.castShadow=!0,this.model.add(this.axleLinks),this.updateWheelContacts(Xo.map((M,E)=>({id:M,x:0,z:0,height:0,contact:!0,compression:.12,extension:0,travel:.55,compressionVelocity:0,compressionDamping:0,reboundDamping:0})),1)}updateWheelContacts(n,t){for(let i=0;i<this.wheels.length;i++){const r=this.wheels[i],a=n.find(h=>h.id===r.userData.wheelId);if(!a)continue;r.position.y=.92+a.compression/t+a.extension/t;const o=qo[i],s=a.compression/t,c=a.extension/t;this.workPosition.set(o.x*.78,1.05+c*.35-s*.2,o.z),this.workQuaternion.identity(),this.workScale.set(1,Math.max(.5,.72+c-s*.35),1),this.workMatrix.compose(this.workPosition,this.workQuaternion,this.workScale),this.wheelSprings.setMatrixAt(i,this.workMatrix),this.workPosition.y=.99+c*.32-s*.12,this.workScale.set(1,.68+c*.45-s*.2,1),this.workMatrix.compose(this.workPosition,this.workQuaternion,this.workScale),this.wheelShocks.setMatrixAt(i,this.workMatrix),this.workPosition.y=1.13+c*.3-s*.1,this.workScale.set(1,.61+c*.25-s*.1,1),this.workMatrix.compose(this.workPosition,this.workQuaternion,this.workScale),this.shockRods.setMatrixAt(i,this.workMatrix);const p=new Bt().setFromAxisAngle(new ne(0,0,1),Math.PI/2),d=Math.abs(o.x)*.9;this.workPosition.set(o.x*.54,.89+s*.35,o.z),this.workScale.set(1,d,1),this.workMatrix.compose(this.workPosition,p,this.workScale),this.axleLinks.setMatrixAt(i,this.workMatrix)}this.wheelSprings.instanceMatrix.needsUpdate=!0,this.wheelShocks.instanceMatrix.needsUpdate=!0,this.shockRods.instanceMatrix.needsUpdate=!0,this.axleLinks.instanceMatrix.needsUpdate=!0}setColor(n){this.opts.color=n,this.materials.paint.color.set(n)}}function li(e,n=new ne){return n.set(Math.sin(e),0,Math.cos(e))}function rr(e,n=new ne){return n.set(Math.cos(e),0,-Math.sin(e))}const Wa=(e,n,t)=>Math.max(n,Math.min(t,e)),Vp=[{id:"front-left",x:-1.22,z:1.22},{id:"front-right",x:1.22,z:1.22},{id:"rear-left",x:-1.22,z:-1.25},{id:"rear-right",x:1.22,z:-1.25}];function Sa(e,n,t,i,r=24){const a=Math.cos(n),o=Math.sin(n),s=.55*t,c=.36*t;return Vp.map(p=>{const d=e.x+p.x*a+p.z*o,h=e.z-p.x*o+p.z*a,g=i(d,h),m=g+1.65*t+.12*t,M=m-e.y,E=2*Math.sqrt(r/(.12*t));return{id:p.id,x:d,z:h,height:g,travel:s,compression:Wa(M,0,s),extension:Wa(-M,0,c),contact:M>=-c&&M<=s,compressionVelocity:0,compressionDamping:E*.82,reboundDamping:E*.62}})}function zp(e,n,t,i){const r=t/(.12*i);let a=0;for(const o of e){if(o.compression<=0)continue;const s=Math.max(0,o.compression-o.travel+.08*i),c=r*(o.compression+s*2.5),p=Wa(o.compressionVelocity,-12,12),d=p>=0?o.compressionDamping:o.reboundDamping,h=(n>=0?o.reboundDamping:o.compressionDamping)*n*.24;a+=Math.max(0,c+d*p-h)}return a/e.length-t}function Wp(e){const n=(e[0].height+e[1].height)/2,t=(e[2].height+e[3].height)/2,i=(e[0].height+e[2].height)/2,r=(e[1].height+e[3].height)/2;return{pitch:-Math.atan2(n-t,2.47),roll:Math.atan2(r-i,2.44)}}const Ma=Math.PI*2,Ei=e=>e*Math.PI/180;function or(e,n){return Math.atan2(Math.sin(n-e),Math.cos(n-e))}function xi(e){return Math.abs(or(e,0))}function Ti(e,n,t=5.2){const i=1-Math.exp(-t*Math.max(0,n));return e+or(e,0)*i}class Xp{airborne=!1;lastPitch=0;lastRoll=0;pitchProgress=0;rollProgress=0;pendingForwardFlips=0;pendingBackwardFlips=0;pendingRolls=0;flightTime=0;flightBonus=0;lastLandingDebug=null;currentPoints=0;bestScore;constructor(n=0){this.bestScore=Math.max(0,Math.floor(n)||0)}update(n){if(!n.grounded){this.airborne?(this.flightTime=Math.max(this.flightTime,n.airtime),this.recordFlipRotation(this.advanceRotation("pitch",n.pitch)),this.pendingRolls+=Math.abs(this.advanceRotation("roll",n.roll))):this.beginFlight(n);const M=this.pendingForwardFlips+this.pendingBackwardFlips,E=M+this.pendingRolls;return this.currentPoints=Math.round(this.flightTime*80)+this.pendingRolls*500+M*600+Math.max(0,E-1)*150+this.flightBonus,null}if(!this.airborne)return null;this.flightTime=Math.max(this.flightTime,n.airtime),this.recordFlipRotation(this.advanceRotation("pitch",n.pitch)),this.pendingRolls+=Math.abs(this.advanceRotation("roll",n.roll));const t=xi(n.pitch)<Ei(65)&&xi(n.roll)<Ei(65),i=n.landingSpeed<=22&&t&&this.flightTime>=.45,r=this.pendingForwardFlips,a=this.pendingBackwardFlips,o=r+a,s=this.pendingRolls,c=this.flightTime;if(this.lastLandingDebug={sample:{...n},airtime:c,rolls:s,flips:o,rollProgress:this.rollProgress,pitchProgress:this.pitchProgress,upright:t,landedWell:i},this.airborne=!1,!i)return this.clearFlight(),null;const p=o+s,d=n.landingSpeed<=5&&xi(n.pitch)<Ei(18)&&xi(n.roll)<Ei(18),h=d?300:100,g=Math.round(c*80)+s*500+o*600+Math.max(0,p-1)*150+h+this.flightBonus;this.currentPoints=g,this.bestScore=Math.max(this.bestScore,g);const m=s>=2?"DOUBLE ROLL":s===1?"BARREL ROLL":o>=2?"DOUBLE FLIP":r?"FRONT FLIP":a?"BACKFLIP":c>=1.25?d?"BIG AIR · PERFECT LANDING":"BIG AIR":d?"PERFECT LANDING":"NICE LANDING";return this.clearFlight(!1),{points:g,rolls:s,flips:o,forwardFlips:r,backwardFlips:a,airtime:c,perfect:d,message:m}}reset(){this.airborne=!1,this.clearFlight()}get isAirborne(){return this.airborne}get rolls(){return this.pendingRolls}get flips(){return this.pendingForwardFlips+this.pendingBackwardFlips}get airtime(){return this.flightTime}awardBonus(n){const t=Math.max(0,Math.floor(n));return t?(this.airborne&&(this.flightBonus+=t),this.currentPoints+=t,this.bestScore+=t,this.currentPoints):this.currentPoints}beginFlight(n){this.clearFlight(),this.airborne=!0,this.lastPitch=n.pitch,this.lastRoll=n.roll,this.flightTime=n.airtime}advanceRotation(n,t){const i=n==="pitch"?this.lastPitch:this.lastRoll,a=(n==="pitch"?this.pitchProgress:this.rollProgress)+or(i,t);n==="pitch"?(this.lastPitch=t,this.pitchProgress=a):(this.lastRoll=t,this.rollProgress=a);const o=Math.trunc(a/Ma);return o&&(n==="pitch"?this.pitchProgress-=o*Ma:this.rollProgress-=o*Ma),o}recordFlipRotation(n){n>0?this.pendingForwardFlips+=n:this.pendingBackwardFlips+=-n}clearFlight(n=!0){this.pitchProgress=0,this.rollProgress=0,this.pendingForwardFlips=0,this.pendingBackwardFlips=0,this.pendingRolls=0,this.flightTime=0,this.flightBonus=0,n&&(this.currentPoints=0)}}class qp{pos=new ne(0,0,0);vel=new ne;yaw=0;pitch=0;roll=0;grounded=!0;nitro=100;airTime=0;speed=0;gravity=24;jumpForce=15;jumpWas=!1;jumpHoldRemaining=0;coyoteRemaining=0;previousCompression=new Map;invertedContactTime=0;contactPitch=0;contactRoll=0;wheelContacts=[];reset(n,t=1){this.pos.set(0,n.heightAt(0,0)+1.65*t,0),this.vel.set(0,0,0),this.yaw=0,this.pitch=0,this.roll=0,this.grounded=!0,this.nitro=100,this.airTime=0,this.jumpWas=!1,this.jumpHoldRemaining=0,this.coyoteRemaining=.1,this.invertedContactTime=0,this.contactPitch=0,this.contactRoll=0,this.wheelContacts=Sa(this.pos,this.yaw,t,(i,r)=>n.heightAt(i,r),this.gravity),this.previousCompression=new Map(this.wheelContacts.map(i=>[i.id,i.compression]))}update(n,t,i,r,a){this.gravity=a.gravity,this.jumpForce=a.jump,n=Math.min(n,.04);const o=Math.max(1,Math.ceil(n*120)),s=n/o;for(let c=0;c<o;c++)this.step(s,t,i,a);r.root.position.copy(this.pos),r.root.rotation.order="YXZ",r.root.rotation.set(this.pitch+this.contactPitch,this.yaw,this.roll+this.contactRoll),r.updateWheelContacts(this.wheelContacts,a.scale),r.wheels.forEach(c=>{c.rotation.x-=this.speed*n}),r.frontWheels.forEach(c=>{c.rotation.y=-t.steer*.28})}step(n,t,i,r){const a=r.scale,o=li(this.yaw),s=t.nitro&&this.nitro>0,c=t.throttle||(t.nitro?t.gear??1:0),p=30*(s?1.7:1),d=26*(s?1.5:1),h=this.vel.dot(o),g=c!==0&&Math.abs(h)>2&&Math.sign(h)!==Math.sign(c);c&&!g&&this.vel.addScaledVector(o,c*d*n);const m=new ne(this.vel.x,0,this.vel.z);if(this.speed=m.length(),s?this.nitro=Math.max(0,this.nitro-22*n):this.nitro=Math.min(100,this.nitro+8*n),t.handbrake?m.multiplyScalar(Math.max(0,1-3*n)):m.multiplyScalar(Math.max(0,1-(g?5.5:this.grounded?1.05:.1)*n)),this.speed>p&&m.setLength(p),this.speed>.4){const U=(this.grounded?1.8:1.05)*(.25+Math.min(1,this.speed/12)),_=Math.sign(m.dot(o))||Math.sign(t.throttle);this.yaw-=t.steer*U*n*_;const S=rr(this.yaw),P=m.dot(S);m.addScaledVector(S,-P*(this.grounded?.72:.01))}this.vel.x=m.x,this.vel.z=m.z;const M=t.jump&&!this.jumpWas&&(this.grounded||this.coyoteRemaining>0);if(M&&(this.vel.y=this.jumpForce,this.grounded=!1,this.coyoteRemaining=0,this.jumpHoldRemaining=.3),this.jumpWas=t.jump,t.jump&&!M&&this.jumpHoldRemaining>0&&this.vel.y>0){const U=Math.min(n,this.jumpHoldRemaining);this.vel.y+=Math.min(12,this.jumpForce*.8)*U,this.jumpHoldRemaining-=U}t.jump||(this.jumpHoldRemaining=0),this.wheelContacts=Sa(this.pos,this.yaw,a,(U,_)=>i.heightAt(U,_),this.gravity);for(const U of this.wheelContacts){const _=this.previousCompression.get(U.id)??U.compression;U.compressionVelocity=(U.compression-_)/Math.max(n,1/240)}Math.cos(this.pitch+this.contactPitch)*Math.cos(this.roll+this.contactRoll);const E=this.grounded&&this.invertedContactTime>1.35;if(t.level||E){const U=t.level?5.2:4.2;this.pitch=Ti(this.pitch,n,U),this.roll=Ti(this.roll,n,U)}else this.grounded||(this.pitch+=t.airPitch*5.4*n,this.roll+=t.airRoll*7.2*n,this.airTime+=n);this.vel.y+=zp(this.wheelContacts,this.vel.y,this.gravity,a)*n;const f=this.pos.y;this.pos.addScaledVector(this.vel,n),this.wheelContacts=Sa(this.pos,this.yaw,a,(U,_)=>i.heightAt(U,_),this.gravity);for(const U of this.wheelContacts)this.previousCompression.set(U.id,U.compression);const l=this.wheelContacts.filter(U=>U.contact&&U.compression>.015*a).length,b=Math.max(...this.wheelContacts.map(U=>U.height))+1.17*a,A=this.pos.y<b&&this.vel.y<0;A&&(!this.grounded&&this.vel.y<-3&&(this.vel.y=Math.min(1.1,-this.vel.y*.055)),this.pos.y=b);const x=this.grounded;this.grounded=this.vel.y<=1.25&&(l>=2||A),this.grounded?this.coyoteRemaining=.1:x?this.coyoteRemaining=.1:this.coyoteRemaining=Math.max(0,this.coyoteRemaining-n);const C=Math.cos(this.pitch+this.contactPitch)*Math.cos(this.roll+this.contactRoll);this.grounded?(this.vel.y=Math.max(0,this.vel.y),this.airTime=0,this.invertedContactTime=C<.2?this.invertedContactTime+n:0,C>=.2&&!t.level&&(this.pitch=Ti(this.pitch,n,3.2),this.roll=Ti(this.roll,n,3.2))):this.invertedContactTime=0;const R=Wp(this.wheelContacts),D=this.grounded?Math.min(1,n*9):Math.min(1,n*2);this.contactPitch=st.lerp(this.contactPitch,this.grounded?R.pitch:0,D),this.contactRoll=st.lerp(this.contactRoll,this.grounded?R.roll:0,D),Number.isFinite(this.pos.y)||(this.pos.y=f)}}function Xa(e){if(!e||typeof e!="object"||!("closest"in e))return!1;const n=e;return typeof n.closest=="function"&&n.closest('input,textarea,select,[contenteditable]:not([contenteditable="false"])')!==null}class Yp{pressed=new Set;actions=new Map;pointerDown(n,t){this.pointerUp(n),this.actions.set(n,t),this.pressed.add(t)}pointerUp(n){const t=this.actions.get(n);t!==void 0&&(this.actions.delete(n),[...this.actions.values()].includes(t)||this.pressed.delete(t))}pointerCancel(n){this.pointerUp(n)}lostPointerCapture(n){this.pointerUp(n)}releaseAll(){this.actions.clear(),this.pressed.clear()}}class Kp{constructor(n=54,t=.08){this.maxTravel=n,this.deadZone=t}pointerId=null;x=0;y=0;originX=0;originY=0;radius=1;pointerDown(n,t,i,r=this.maxTravel){this.pointerId=n,this.originX=t,this.originY=i,this.radius=Math.max(1,r),this.x=0,this.y=0}pointerMove(n,t,i){if(this.pointerId!==n)return;let r=(t-this.originX)/this.radius,a=(i-this.originY)/this.radius;const o=Math.hypot(r,a);o>1&&(r/=o,a/=o);const s=Math.hypot(r,a);if(s<this.deadZone){this.x=0,this.y=0;return}const c=(s-this.deadZone)/(1-this.deadZone)/s;this.x=r*c,this.y=a*c}pointerUp(n){this.pointerId===n&&this.release()}pointerCancel(n){this.pointerUp(n)}lostPointerCapture(n){this.pointerUp(n)}release(){this.pointerId=null,this.x=0,this.y=0}}function $p(e,n){const t=(...i)=>i.some(r=>e.has(r)||n.has(r));return Number(t("d","arrowright"))-Number(t("a","arrowleft"))}class Zp{keys=new Set;pointerButtons=new Yp;analog=new Kp;gear=1;steeringMode="analog";sensitivity=1;state={throttle:0,steer:0,nitro:!1,jump:!1,level:!1,airPitch:0,airRoll:0,handbrake:!1,gear:1};wasAirborne=!1;requireNeutralForAir=!1;get touches(){return this.pointerButtons.pressed}setGear(n){this.gear=n}toggleGear(){return this.gear=this.gear===1?-1:1,this.gear}setSteeringMode(n){this.steeringMode=n}setSensitivity(n){this.sensitivity=Math.max(.5,Math.min(1.5,n))}constructor(){window.addEventListener("focusin",n=>{Xa(n.target)&&this.releaseAll()}),window.addEventListener("keydown",n=>{if(Xa(n.target)){this.releaseAll();return}[" ","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n.key)&&n.preventDefault(),this.keys.add(n.key.toLowerCase())}),window.addEventListener("keyup",n=>this.keys.delete(n.key.toLowerCase())),window.addEventListener("blur",()=>this.releaseAll())}pointerDown(n,t){this.pointerButtons.pointerDown(n,t)}pointerUp(n){this.pointerButtons.pointerUp(n)}pointerCancel(n){this.pointerButtons.pointerCancel(n)}lostPointerCapture(n){this.pointerButtons.lostPointerCapture(n)}releaseAll(){this.keys.clear(),this.pointerButtons.releaseAll(),this.analog.release(),this.state={throttle:0,steer:0,nitro:!1,jump:!1,level:!1,airPitch:0,airRoll:0,handbrake:!1,gear:this.gear},this.wasAirborne=!1,this.requireNeutralForAir=!1}update(n=!1){const t=(...x)=>x.some(C=>this.keys.has(C)||this.touches.has(C)),i=Array.from(navigator.getGamepads?.()??[]).find(x=>x?.connected),r=i?.axes??[],a=x=>i?.buttons[x]?.value??0,o=(t("w","arrowup")?1:0)-(t("s","arrowdown")?1:0),s=t("go"),c=a(7)-a(6)||-Math.sign(Math.abs(r[1]??0)>.18?r[1]:0),p=o||(s?this.gear:0)||c,d=$p(this.keys,this.touches),h=Math.abs(r[0]??0)>.16?r[0]:0,g=this.analog.x,m=this.analog.y,M=Number(this.keys.has("arrowright")||this.touches.has("arrowright"))-Number(this.keys.has("arrowleft")||this.touches.has("arrowleft"));n&&!this.wasAirborne&&(this.requireNeutralForAir=Math.hypot(g,m)>.2||d!==0||Math.abs(h)>.16||M!==0),n||(this.requireNeutralForAir=!1),n&&this.requireNeutralForAir&&Math.hypot(g,m)<.16&&d===0&&Math.abs(h)<=.16&&M===0&&(this.requireNeutralForAir=!1),this.wasAirborne=n;const E=n&&!this.requireNeutralForAir&&this.steeringMode==="analog",f=!n&&this.steeringMode==="analog"?Math.sign(g)*Math.pow(Math.abs(g),1.25)*this.sensitivity:0,l=(t("arrowup")?1:0)-(t("arrowdown")?1:0),b=Number(t("e"))-Number(t("q")),A=t("shift","boost","nitro")||a(1)>.4;return this.state={throttle:p,steer:d||(this.steeringMode==="buttons"?0:f)||h,nitro:A,jump:t(" ","jump")||a(0)>.4,level:t("f","level")||a(3)>.4,airPitch:l||(E?-m:0)||(Math.abs(r[3]??0)>.18?-Math.sign(r[3]):0),airRoll:b||(this.requireNeutralForAir?0:M||(E?g:0)||(Math.abs(r[2]??0)>.18?Math.sign(r[2]):0)),handbrake:t("control")||a(2)>.4,gear:this.gear},this.state}}const Kn=96,Ea=160;class Qp{group=new qt;dustMesh;burstMesh;particles=[];active=[];freeDust=[];freeBurst=[];activeCount=0;rng=7886388;matrix=new Nt;quat=new Bt;scaleVector=new ne;color=new $e;quality=1;constructor(){const n=new ka(.5,1),t=new bc(.5,0);this.dustMesh=this.makeBatch(n,Kn,13875854),this.burstMesh=this.makeBatch(t,Ea,16777215),this.dustMesh.name="dust-particle-batch",this.burstMesh.name="impact-particle-batch",this.dustMesh.count=this.burstMesh.count=0,this.group.add(this.dustMesh,this.burstMesh);for(let i=0;i<Kn+Ea;i++)this.particles.push({kind:"dust",life:0,max:1,position:new ne,velocity:new ne,rotation:new ne,spin:new ne,scale:1,color:16777215}),this.active.push(0);for(let i=Kn-1;i>=0;i--)this.freeDust.push(i);for(let i=Kn+Ea-1;i>=Kn;i--)this.freeBurst.push(i)}makeBatch(n,t,i){const r=new er({color:i,vertexColors:!0,transparent:!0,depthWrite:!1});r.onBeforeCompile=o=>{o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
attribute float instanceAlpha;
varying float vParticleAlpha;`),o.vertexShader=o.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vParticleAlpha = instanceAlpha;`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
varying float vParticleAlpha;`),o.fragmentShader=o.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a *= vParticleAlpha;`)},r.customProgramCacheKey=()=>"rumble-particle-shaped-alpha-v2";const a=new Ac(new Float32Array(t),1);return a.setUsage(Rc),n.setAttribute("instanceAlpha",a),new jt(n,r,t)}rand(){return this.rng=this.rng*1664525+1013904223>>>0,this.rng/4294967296}burst(n,t=18,i=16758605){t=Math.max(1,Math.round(t*this.quality));for(let r=0;r<t;r++){const a=this.freeBurst.pop();if(a===void 0)break;const o=this.particles[a];o.kind="burst",o.life=.45+this.rand()*.8,o.max=.9,o.scale=.16+this.rand()*.26,o.color=i,o.position.copy(n),o.velocity.set((this.rand()-.5)*8,1+this.rand()*7,(this.rand()-.5)*8),o.rotation.set(this.rand()*6,this.rand()*6,this.rand()*6),o.spin.set((this.rand()-.5)*9,(this.rand()-.5)*9,(this.rand()-.5)*9),this.active[this.activeCount++]=a}}dust(n,t){if(t<4||this.rand()>.27*this.quality)return;const i=this.freeDust.pop();if(i===void 0)return;const r=this.particles[i];r.kind="dust",r.life=r.max=.65,r.scale=.36+this.rand()*.3,r.color=13875854,r.position.copy(n),r.velocity.set(this.rand()-.5,.4+this.rand(),this.rand()-.5),r.rotation.set(this.rand()*6,this.rand()*6,this.rand()*6),r.spin.set((this.rand()-.5)*1.5,(this.rand()-.5)*1.5,(this.rand()-.5)*1.5),this.active[this.activeCount++]=i}update(n){let t=0,i=0,r=0;for(let a=0;a<this.activeCount;a++){const o=this.active[a],s=this.particles[o];if(s.life-=n,s.life<=0){(s.kind==="dust"?this.freeDust:this.freeBurst).push(o);continue}s.position.addScaledVector(s.velocity,n),s.rotation.addScaledVector(s.spin,n),s.scale*=1+n*.55;const c=Math.max(0,s.life/s.max*(s.kind==="dust"?.34:.9)),p=s.kind==="dust"?this.dustMesh:this.burstMesh,d=s.kind==="dust"?i++:r++;this.scaleVector.setScalar(s.scale*(s.life/s.max)),this.quat.setFromEuler(new Wt(s.rotation.x,s.rotation.y,s.rotation.z)),this.matrix.compose(s.position,this.quat,this.scaleVector),p.setMatrixAt(d,this.matrix),this.color.setHex(s.color),p.setColorAt(d,this.color),p.geometry.getAttribute("instanceAlpha").setX(d,c),this.active[t++]=o}this.activeCount=t,this.dustMesh.count=i,this.burstMesh.count=r,i&&(this.dustMesh.instanceMatrix.needsUpdate=!0,this.dustMesh.instanceColor.needsUpdate=!0,this.dustMesh.geometry.getAttribute("instanceAlpha").needsUpdate=!0),r&&(this.burstMesh.instanceMatrix.needsUpdate=!0,this.burstMesh.instanceColor.needsUpdate=!0,this.burstMesh.geometry.getAttribute("instanceAlpha").needsUpdate=!0)}get activeParticles(){return this.activeCount}setQuality(n){this.quality=n==="low"?.46:n==="medium"?.72:1}dispose(){this.group.clear();for(const n of[this.dustMesh,this.burstMesh])n.geometry.dispose(),n.material.dispose()}}class jp{group=new qt;mesh;pieces=[];quality="high";seed=1225960503;transform=new Nt;quaternion=new Bt;vector=new ne;scratchColor=new $e;capacity=320;constructor(){const n=new cn(1,1,1),t=new xt({color:16777215,roughness:.88,metalness:.015});this.mesh=new jt(n,t,this.capacity),this.mesh.name="bounded-building-collapse-batch",this.mesh.count=0,this.mesh.castShadow=!1,this.mesh.receiveShadow=!1,this.mesh.frustumCulled=!1,this.group.add(this.mesh)}random(){return this.seed=this.seed*1664525+1013904223>>>0,this.seed/4294967296}destroy(n,t,i){const r=this.quality==="low"?.5:this.quality==="medium"?.75:1,a=st.clamp(Math.ceil(n.w/3.3),2,4),o=st.clamp(Math.ceil(n.h/3.5),2,5),s=Math.max(5,Math.round(a*o*r)),c=Math.min(s,this.capacity-this.pieces.length);if(!c)return 0;const p=Array.isArray(n.mesh.material)?n.mesh.material[0]:n.mesh.material,d=p instanceof xt?p.color:new $e(11705472),h=new ne(t.direction.z,0,-t.direction.x).normalize(),g=new ne(n.x,(n.baseY??n.mesh.position.y-n.h/2)+(n.minHeight??0),n.z);for(let m=0;m<c;m++){const M=m%a,E=Math.floor(m/a)%o,f=new ne(n.w/a*(.78+this.random()*.2),n.h/o*(.78+this.random()*.2),Math.max(.35,n.d*(.22+this.random()*.28))),l=-n.w/2+(M+.5)*n.w/a,b=(E+.5)*n.h/o,A=(this.random()-.5)*Math.max(0,n.d-f.z),x=g.clone().add(new ne(l,b,A)),C=(this.random()-.5)*(2+t.intensity*6),R=2+t.intensity*(4+this.random()*5),D=t.direction.clone().multiplyScalar(R).addScaledVector(h,C);D.y=2.5+t.intensity*(2+this.random()*6)+this.random()*2;const U=d.clone().multiplyScalar(.78+this.random()*.4),_=4.5+this.random()*1.2;this.pieces.push({position:x,velocity:D,size:f,rotation:new Wt(this.random()*2,this.random()*2,this.random()*2),angular:new ne((this.random()-.5)*8,(this.random()-.5)*8,(this.random()-.5)*8),ground:i(x.x,x.z)+.06,life:_,maxLife:_,color:U})}return c}setQuality(n){this.quality=n}clear(){this.pieces.length=0,this.mesh.count=0}update(n){let t=0;for(let i=this.pieces.length-1;i>=0;i--){const r=this.pieces[i];if(r.life-=n,r.life<=0){this.pieces.splice(i,1);continue}r.velocity.y-=18*n,r.position.addScaledVector(r.velocity,n),r.rotation.x+=r.angular.x*n,r.rotation.y+=r.angular.y*n,r.rotation.z+=r.angular.z*n;const a=r.size.y/2;r.position.y<r.ground+a&&(r.position.y=r.ground+a,r.velocity.y<-1?r.velocity.y*=-.19:r.velocity.y=0,r.velocity.x*=.82,r.velocity.z*=.82,r.angular.multiplyScalar(.96));const o=r.life<.45?Math.max(.1,r.life/.45):1;this.vector.copy(r.size).multiplyScalar(o),this.quaternion.setFromEuler(r.rotation),this.transform.compose(r.position,this.quaternion,this.vector),this.mesh.setMatrixAt(t,this.transform),this.scratchColor.copy(r.color),this.mesh.setColorAt(t,this.scratchColor),t++}this.mesh.count=t,t&&(this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0))}get activeCount(){return this.pieces.length}dispose(){this.group.clear(),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.pieces.length=0}}const Jt=[{id:"super-wreck-roadway",title:"Super Wreck Roadway",artist:"Umplix",album:"Rumble Roam Radio",file:"umplix-super-wreck-roadway-loop.mp3",sourceUrl:"https://opengameart.org/content/super-wreck-roadway",license:"CC0 1.0",durationSeconds:134.405},{id:"hot-roadway-remake",title:"Hot Roadway [Remake]",artist:"MintoDog",album:"Rumble Roam Radio · 160 BPM",file:"mintodog-hot-roadway-remake-160.mp3",sourceUrl:"https://opengameart.org/content/hot-roadway-remake",license:"CC0 1.0",durationSeconds:120.033},{id:"un-desert",title:"Un désert",artist:"Loyalty Freak Music / Komiku",album:"Rumble Roam Radio",file:"komiku-un-desert.mp3",sourceUrl:"https://opengameart.org/content/un-d%C3%A9sert",license:"CC0 1.0",durationSeconds:245.577}],Yo="Rumble Roam Radio",Jp="./audio/music/";function em(e){return`${Jp}${e.file}`}function Ii(e,n=Jt.length){return!Number.isFinite(e)||n<=0?0:(Math.trunc(e)%n+n)%n}function tm(e,n=Jt.length,t=Math.random){if(n<=1)return 0;const i=Array.from({length:n},(r,a)=>a).filter(r=>r!==Ii(e,n));return i[Math.min(i.length-1,Math.floor(Math.max(0,Math.min(.999999,t()))*i.length))]}class nm{index=0;shuffled=!1;history=[0];historyPosition=0;get currentIndex(){return this.index}get shuffleEnabled(){return this.shuffled}setShuffle(n){this.shuffled=n}select(n){return this.index=Ii(n),this.history=[this.index],this.historyPosition=0,this.index}next(n=Math.random){let t;return this.historyPosition<this.history.length-1?t=this.history[++this.historyPosition]:(t=this.shuffled?tm(this.index,Jt.length,n):Ii(this.index+1),this.history.push(t),this.historyPosition=this.history.length-1),this.index=t,t}previous(){return this.historyPosition>0?this.index=this.history[--this.historyPosition]:(this.index=Ii(this.index-1),this.history.unshift(this.index)),this.index}}const en=(e,n,t)=>Math.max(n,Math.min(t,e));function xa(e){return en(Number.isFinite(e)?e:0,0,1)}function Ko(e,n,t){const i=en(Math.abs(Number.isFinite(e)?e:0)/34,0,1),r=en(Number.isFinite(n)?n:0,0,1),a=Math.min(5,1+Math.floor(i*4.999)),o=(a-1)/5,s=a/5,c=en((i-o)/Math.max(.001,s-o),0,1),p=en(790+c*3700+r*(1-i)*950+(t?260:0),790,6100),d=p*4/60;return{rpm:p,gear:a,firingHz:d,engineGain:.22+r*.16+c*.055,midHz:d*2.02,highHz:d*4.03,superchargerHz:290+p*.24+r*300,load:r,nitroGain:t?.34:0}}const Fs={master:.62,engine:.84,effects:.72,music:.12};class im{ctx=null;master=null;compressor=null;analyser=null;meterBuffer=null;engineBus=null;effectsBus=null;musicBus=null;radio=new nm;musicWanted=!1;musicElement=null;musicSource=null;preloader=null;preloadedTrackId="";musicFadeTimer=0;musicTransitionId=0;musicError="";engineVoices=[];engineFilters=[];engineLayers=[];supercharger=null;superchargerGain=null;nitroWhine=null;nitroWhineGain=null;nitroNoiseGain=null;skidGain=null;noiseBuffer=null;volumes={...Fs};muted=!1;failed=!1;previousGear=1;previousNitro=!1;smoothedRpm=790;smoothedLoad=0;musicDuckTimer=0;musicDuck=1;lastVoice=Ko(0,0,!1);start(){try{this.ctx||this.createGraph(),this.ctx?.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.musicWanted&&(!this.musicElement||this.musicElement.paused)&&this.resumeCurrentTrack(),this.applyVolumes()}catch{this.failed=!0}}createGraph(){const n=window,t=window.AudioContext??n.webkitAudioContext;if(!t){this.failed=!0;return}const i=new t({latencyHint:"interactive"});this.ctx=i,this.master=i.createGain(),this.master.gain.value=0,this.compressor=i.createDynamicsCompressor(),this.compressor.threshold.value=-16,this.compressor.knee.value=18,this.compressor.ratio.value=4.5,this.compressor.attack.value=.008,this.compressor.release.value=.22,this.analyser=i.createAnalyser(),this.analyser.fftSize=512,this.meterBuffer=new Float32Array(this.analyser.fftSize),this.master.connect(this.compressor).connect(this.analyser).connect(i.destination),this.engineBus=i.createGain(),this.engineBus.gain.value=this.volumes.engine,this.engineBus.connect(this.master),this.effectsBus=i.createGain(),this.effectsBus.gain.value=this.volumes.effects,this.effectsBus.connect(this.master),this.musicBus=i.createGain(),this.musicBus.gain.value=0,this.musicBus.connect(this.master),this.noiseBuffer=this.makeNoiseBuffer(i,.5),this.createEngineGraph(i),this.failed=!1}makeNoiseBuffer(n,t){const i=n.createBuffer(1,Math.ceil(n.sampleRate*t),n.sampleRate),r=i.getChannelData(0);let a=1592594996;for(let o=0;o<r.length;o++)a=Math.imul(a,1664525)+1013904223>>>0,r[o]=((a>>>8)/8388608-1)*.45;return i}createEngineGraph(n){const t=new Float32Array(17),i=new Float32Array(17);for(let A=1;A<i.length;A++)i[A]=(A%2?1:-.42)/Math.pow(A,.86);const r=n.createPeriodicWave(t,i,{disableNormalization:!1}),a=[{mul:1,type:"custom",filter:"lowpass",cut:470,q:.78,gain:.48},{mul:2.02,type:"sawtooth",filter:"bandpass",cut:760,q:.72,gain:.24},{mul:4.03,type:"triangle",filter:"bandpass",cut:1750,q:.64,gain:.13}];for(const A of a){const x=n.createOscillator();A.type==="custom"?x.setPeriodicWave(r):x.type=A.type;const C=n.createBiquadFilter();C.type=A.filter,C.frequency.value=A.cut,C.Q.value=A.q;const R=n.createGain();R.gain.value=A.gain,x.connect(C).connect(R).connect(this.engineBus),x.start(),this.engineVoices.push(x),this.engineFilters.push(C),this.engineLayers.push(R)}const o=n.createOscillator();o.type="sine",o.frequency.value=5.7;const s=n.createGain();s.gain.value=.035,o.connect(s).connect(this.engineLayers[0].gain),o.start();const c=n.createBufferSource();c.buffer=this.noiseBuffer,c.loop=!0;const p=n.createBiquadFilter();p.type="lowpass",p.frequency.value=440;const d=n.createGain();d.gain.value=.005,c.connect(p).connect(d).connect(this.engineBus),c.start(),this.supercharger=n.createOscillator(),this.supercharger.type="sine";const h=n.createBiquadFilter();h.type="bandpass",h.frequency.value=1400,h.Q.value=1.1,this.superchargerGain=n.createGain(),this.superchargerGain.gain.value=1e-4,this.supercharger.connect(h).connect(this.superchargerGain).connect(this.engineBus),this.supercharger.start();const g=n.createOscillator();g.type="sawtooth",g.frequency.value=600,this.nitroWhine=g;const m=n.createBiquadFilter();m.type="highpass",m.frequency.value=520;const M=n.createGain();M.gain.value=1e-4,g.connect(m).connect(M).connect(this.effectsBus),g.start(),this.nitroWhineGain=M;const E=n.createBufferSource();E.buffer=this.noiseBuffer,E.loop=!0;const f=n.createBiquadFilter();f.type="bandpass",f.frequency.value=1100,f.Q.value=.55,this.nitroNoiseGain=n.createGain(),this.nitroNoiseGain.gain.value=1e-4,E.connect(f).connect(this.nitroNoiseGain).connect(this.effectsBus),E.start();const l=n.createBufferSource();l.buffer=this.noiseBuffer,l.loop=!0;const b=n.createBiquadFilter();b.type="bandpass",b.frequency.value=1450,b.Q.value=.48,this.skidGain=n.createGain(),this.skidGain.gain.value=1e-4,l.connect(b).connect(this.skidGain).connect(this.effectsBus),l.start()}setVolumes(n){this.volumes={...this.volumes,...Object.fromEntries(Object.entries(n).map(([t,i])=>[t,xa(i)]))},this.applyVolumes()}getVolumes(){return{...this.volumes}}setMasterVolume(n){this.setVolumes({master:n})}getMasterVolume(){return this.volumes.master}setEngineVolume(n){this.setVolumes({engine:n})}setEffectsVolume(n){this.setVolumes({effects:n})}setMusicVolume(n){this.setVolumes({music:n})}setMuted(n){this.muted=n,this.applyVolumes()}mute(){this.setMuted(!0)}isMuted(){return this.muted}isAvailable(){return!!this.ctx&&!this.failed}getState(){return this.ctx?.state??(this.failed?"unavailable":"locked")}applyVolumes(){if(!this.ctx)return;const n=this.ctx.currentTime;this.master?.gain.setTargetAtTime(this.muted?0:this.volumes.master,n,.035),this.engineBus?.gain.setTargetAtTime(this.volumes.engine,n,.04),this.effectsBus?.gain.setTargetAtTime(this.volumes.effects,n,.04),this.applyMusicGain(.12)}applyMusicGain(n){if(!this.ctx||!this.musicBus)return;const t=this.isMusicPlaying()?this.volumes.music*this.musicDuck:0;this.musicBus.gain.setTargetAtTime(this.muted?0:t,this.ctx.currentTime,n)}duckMusic(n=1.35){!this.ctx||!this.musicBus||(this.musicDuck=.32,this.applyMusicGain(.025),this.musicDuckTimer&&window.clearTimeout(this.musicDuckTimer),this.musicDuckTimer=window.setTimeout(()=>{this.musicDuck=1,this.applyMusicGain(.38)},n*1e3))}update(n,t=0,i=!1,r=0,a=1/60){const o=this.ctx;if(!o||!this.engineVoices.length)return;const s=Ko(n,t,i),c=o.currentTime,p=en(Number.isFinite(a)?a:1/60,1/240,.05),d=s.rpm>this.smoothedRpm?.12:.32;this.smoothedRpm+=(s.rpm-this.smoothedRpm)*(1-Math.exp(-p/d)),this.smoothedLoad+=(s.load-this.smoothedLoad)*(1-Math.exp(-p/(s.load>this.smoothedLoad?.08:.24)));const h=this.smoothedRpm*4/60;this.engineVoices[0]?.frequency.setTargetAtTime(h,c,.035),this.engineVoices[1]?.frequency.setTargetAtTime(h*2.02,c,.04),this.engineVoices[2]?.frequency.setTargetAtTime(h*4.03,c,.05),this.engineLayers[0]?.gain.setTargetAtTime(.34+this.smoothedLoad*.2+(i?.08:0),c,.08),this.engineLayers[1]?.gain.setTargetAtTime(.16+this.smoothedLoad*.12+(i?.11:0),c,.08),this.engineLayers[2]?.gain.setTargetAtTime(.055+en((this.smoothedRpm-2100)/3900,0,1)*.12+(i?.16:0),c,.09),this.engineFilters[0]?.frequency.setTargetAtTime(390+this.smoothedRpm*.12,c,.12),this.engineFilters[1]?.frequency.setTargetAtTime(470+this.smoothedRpm*.31,c,.1),this.engineFilters[2]?.frequency.setTargetAtTime(900+this.smoothedRpm*.57,c,.1),this.supercharger?.frequency.setTargetAtTime(s.superchargerHz,c,.09),this.superchargerGain?.gain.setTargetAtTime(.006+this.smoothedLoad*.045+(i?.045:0),c,.11),this.nitroWhine?.frequency.setTargetAtTime(480+this.smoothedRpm*.18,c,.08),this.nitroWhineGain?.gain.setTargetAtTime(i?.24:1e-4,c,i?.07:.2),this.nitroNoiseGain?.gain.setTargetAtTime(i?.13:1e-4,c,i?.1:.22),this.skidGain?.gain.setTargetAtTime(en(r,0,1)>.08?.095*en(r,0,1):1e-4,c,.06),s.gear!==this.previousGear&&s.rpm>1400&&(this.shift(),this.previousGear=s.gear),i&&!this.previousNitro?(this.noiseBurst(.18,.22,2200),this.sweep(230,980,.27,.075,"sawtooth"),this.duckMusic(.75)):!i&&this.previousNitro&&this.sweep(830,180,.32,.045,"triangle"),this.previousNitro=i,this.lastVoice={...s,rpm:this.smoothedRpm}}shift(){const n=this.ctx;if(!n)return;const t=n.currentTime;for(const i of this.engineLayers){const r=i.gain.value;i.gain.cancelScheduledValues(t),i.gain.setValueAtTime(r,t),i.gain.linearRampToValueAtTime(r*.48,t+.055),i.gain.linearRampToValueAtTime(r,t+.22)}this.noiseBurst(.07,.14,780)}setTrackIndex(n){this.radio.select(n),this.musicError="",this.musicWanted?this.transitionTrack():this.dispatchRadioChange()}getTrackIndex(){return this.radio.currentIndex}getTrack(){return Jt[this.radio.currentIndex]}getTrackTitle(){return this.getTrack().title}getTrackArtist(){return this.getTrack().artist}getRadioName(){return Yo}isShuffleEnabled(){return this.radio.shuffleEnabled}setShuffle(n){this.radio.setShuffle(n),n?this.clearPreloader():this.preloadNextTrack()}hasSoundtrack(){return Jt.length>0}isMusicRequested(){return this.musicWanted}setMusicPreference(n){this.musicWanted=n}getMusicError(){return this.musicError}playMusic(){if(this.ensureGraph(),!this.ctx||!this.musicBus||!this.hasSoundtrack()){this.musicError="Rumble Roam Radio is unavailable in this build.",this.dispatchRadioChange();return}this.musicWanted=!0,this.musicError="",(!this.musicElement||this.musicElement.dataset.trackId!==this.getTrack().id)&&this.setMusicSource();const n=this.ensureMusicElement(),t=this.musicTransitionId;n.play().then(()=>{t===this.musicTransitionId&&(this.applyMusicGain(.08),this.preloadNextTrack(),this.dispatchRadioChange())}).catch(()=>{t===this.musicTransitionId&&(this.musicWanted=!1,this.musicError="Playback was blocked. Press Play after audio is enabled.",this.applyMusicGain(.08),this.dispatchRadioChange())})}pauseMusic(){this.musicWanted=!1,++this.musicTransitionId,this.musicFadeTimer&&window.clearTimeout(this.musicFadeTimer);const n=this.musicElement,t=this.ctx;if(n&&t&&this.musicBus){const i=t.currentTime;this.musicBus.gain.cancelScheduledValues(i),this.musicBus.gain.setTargetAtTime(0,i,.035),this.musicFadeTimer=window.setTimeout(()=>{n.pause(),this.musicFadeTimer=0,this.dispatchRadioChange()},120)}else n?.pause();this.dispatchRadioChange()}nextTrack(){this.radio.next(),this.transitionTrack()}previousTrack(){this.radio.previous(),this.transitionTrack()}isMusicPlaying(){return!!this.musicElement&&!this.musicElement.paused&&!this.musicElement.ended}ensureMusicElement(){return this.musicElement||(this.musicElement=this.createMusicElement(this.getTrack(),"none")),!this.musicSource&&this.ctx&&this.musicBus&&(this.musicSource=this.ctx.createMediaElementSource(this.musicElement),this.musicSource.connect(this.musicBus)),this.musicElement}setMusicSource(){const n=this.getTrack();if(this.musicElement?.dataset.trackId===n.id)return;const t=this.preloader?.dataset.trackId===n.id?this.preloader:this.createMusicElement(n,"none"),i=this.musicElement;this.preloader&&t!==this.preloader&&this.clearPreloader(),this.preloader=null,this.preloadedTrackId="",i?.pause(),this.musicSource?.disconnect(),this.musicSource=null,i&&i!==t&&this.releaseMusicElement(i),this.musicElement=t,t.preload="none",this.ctx&&this.musicBus&&(this.musicSource=this.ctx.createMediaElementSource(t),this.musicSource.connect(this.musicBus))}createMusicElement(n,t){const i=document.createElement("audio");return i.preload=t,i.loop=!1,i.hidden=!0,i.setAttribute("aria-hidden","true"),i.dataset.trackId=n.id,i.src=em(n),i.addEventListener("ended",()=>{this.musicWanted&&this.musicElement===i&&(++this.musicTransitionId,this.radio.next(),this.setMusicSource(),this.playCurrentTrack())}),i.addEventListener("error",()=>{!i.error||this.musicElement!==i||(this.musicError="Rumble Roam Radio could not load this track. Check your connection and press Play to retry.",this.musicWanted=!1,this.applyMusicGain(.04),this.dispatchRadioChange())}),document.body.append(i),t!=="none"&&i.load(),i}releaseMusicElement(n){n.pause(),n.removeAttribute("src"),n.load(),n.remove()}preloadNextTrack(){if(!this.musicWanted||!this.musicElement||this.radio.shuffleEnabled||Jt.length<2)return;const n=Jt[(this.radio.currentIndex+1)%Jt.length];this.preloadedTrackId!==n.id&&(this.clearPreloader(),this.preloader=this.createMusicElement(n,"metadata"),this.preloadedTrackId=n.id)}clearPreloader(){this.preloader&&this.releaseMusicElement(this.preloader),this.preloader=null,this.preloadedTrackId=""}async playCurrentTrack(){const n=this.ensureMusicElement();n.dataset.trackId!==this.getTrack().id&&this.setMusicSource();const t=this.musicTransitionId;try{if(await n.play(),t!==this.musicTransitionId)return;this.musicError="",this.applyMusicGain(.1),this.preloadNextTrack()}catch{if(t!==this.musicTransitionId)return;this.musicWanted=!1,this.musicError="Playback was blocked. Press Play after audio is enabled."}this.dispatchRadioChange()}async resumeCurrentTrack(){!this.musicWanted||!this.hasSoundtrack()||((!this.musicElement||this.musicElement.dataset.trackId!==this.getTrack().id)&&this.setMusicSource(),await this.playCurrentTrack())}transitionTrack(){const n=this.musicWanted;++this.musicTransitionId;const t=this.musicTransitionId;if(!this.hasSoundtrack()){this.dispatchRadioChange();return}if(!n){this.dispatchRadioChange();return}if(!this.ctx||!this.musicBus){this.playCurrentTrack();return}const i=this.ctx.currentTime;this.musicBus.gain.cancelScheduledValues(i),this.musicBus.gain.setTargetAtTime(0,i,.025),this.musicFadeTimer&&window.clearTimeout(this.musicFadeTimer),this.musicFadeTimer=window.setTimeout(()=>{this.musicFadeTimer=0,!(t!==this.musicTransitionId||!this.musicWanted)&&(this.setMusicSource(),this.playCurrentTrack())},100),this.dispatchRadioChange()}playDispatchScheduled=!1;dispatchRadioChange(){this.playDispatchScheduled||typeof window>"u"||(this.playDispatchScheduled=!0,queueMicrotask(()=>{this.playDispatchScheduled=!1,window.dispatchEvent(new Event("rumble-radio-change"))}))}suspend(){this.musicElement&&!this.musicElement.paused&&(this.musicElement.pause(),this.musicWanted=!0),this.ctx?.state==="running"&&this.ctx.suspend().catch(()=>{})}dispose(){this.musicDuckTimer&&window.clearTimeout(this.musicDuckTimer),this.musicFadeTimer&&window.clearTimeout(this.musicFadeTimer),this.musicWanted=!1,this.clearPreloader(),this.musicElement?.pause(),this.musicSource?.disconnect(),this.musicElement&&(this.releaseMusicElement(this.musicElement),this.musicElement=null),this.musicSource=null;for(const n of[...this.engineVoices,...this.engineFilters,...this.engineLayers])try{n.disconnect()}catch{}this.ctx?.close().catch(()=>{}),this.ctx=null}diagnostics(){return{state:this.getState(),rms:this.outputRms(),muted:this.muted,volumes:this.getVolumes(),rpm:this.lastVoice.rpm,gear:this.lastVoice.gear,load:this.smoothedLoad,nitro:this.previousNitro,nitroWhineGain:this.nitroWhineGain?.gain.value??0,radio:Yo,track:this.getTrackTitle(),artist:this.getTrackArtist(),trackIndex:this.getTrackIndex(),mediaTrackId:this.musicElement?.dataset.trackId??"",preloadedTrackId:this.preloadedTrackId,audioSrc:this.musicElement?.currentSrc??"",shuffle:this.isShuffleEnabled(),musicPlaying:this.isMusicPlaying(),playbackRequested:this.musicWanted,musicAvailable:this.hasSoundtrack(),musicError:this.musicError,currentTime:this.musicElement?.currentTime??0,duration:this.musicElement?.duration??0,readyState:this.musicElement?.readyState??0}}createDiagnosticCapture(){if(!this.ctx||!this.analyser)return null;const n=this.ctx.createMediaStreamDestination();return this.analyser.connect(n),{stream:n.stream,close:()=>{try{this.analyser?.disconnect(n)}catch{}for(const t of n.stream.getTracks())t.stop()}}}testTone(){return!this.ctx||this.muted?!1:(this.sweep(520,760,.22,.12,"sine"),!0)}jump(){this.sweep(145,430,.3,.05,"triangle"),this.duckMusic(.5)}landing(n=1){const t=xa(n);this.noiseBurst(.085+t*.08,.22,1500),this.sweep(118,48,.2,.095*t,"sine"),t>.45&&this.duckMusic(.7)}impact(n=1){const t=xa(n);this.noiseBurst(.13+t*.13,.3,2100),this.sweep(175,38,.29,.13*t,"triangle"),this.duckMusic(1.35)}ensureGraph(){this.ctx||this.start()}sweep(n,t,i,r,a){const o=this.ctx;if(!o||this.muted||!this.effectsBus)return;const s=o.createOscillator(),c=o.createBiquadFilter(),p=o.createGain(),d=o.currentTime;s.type=a,s.frequency.setValueAtTime(n,d),s.frequency.exponentialRampToValueAtTime(Math.max(24,t),d+i),c.type="lowpass",c.frequency.value=2200,p.gain.setValueAtTime(1e-4,d),p.gain.linearRampToValueAtTime(r,d+.015),p.gain.exponentialRampToValueAtTime(1e-4,d+i),s.connect(c).connect(p).connect(this.effectsBus),s.start(d),s.stop(d+i+.02),s.onended=()=>{s.disconnect(),c.disconnect(),p.disconnect()}}noiseBurst(n,t,i){const r=this.ctx;if(!r||!this.noiseBuffer||this.muted||!this.effectsBus)return;const a=r.createBufferSource(),o=r.createBiquadFilter(),s=r.createGain(),c=r.currentTime;a.buffer=this.noiseBuffer,o.type="lowpass",o.frequency.value=i,s.gain.setValueAtTime(Math.max(1e-4,n),c),s.gain.exponentialRampToValueAtTime(1e-4,c+t),a.connect(o).connect(s).connect(this.effectsBus),a.start(c),a.stop(c+t+.02),a.onended=()=>{a.disconnect(),o.disconnect(),s.disconnect()}}outputRms(){if(!this.ctx||!this.analyser||!this.meterBuffer||this.ctx.state!=="running"||this.muted)return 0;this.analyser.getFloatTimeDomainData(this.meterBuffer);let n=0;for(const t of this.meterBuffer)n+=t*t;return Math.sqrt(n/this.meterBuffer.length)}}const Z=e=>document.querySelector(e),Hn=!!(window.matchMedia?.("(pointer: coarse)").matches||window.matchMedia?.("(any-pointer: coarse)").matches||navigator.maxTouchPoints>0||"ontouchstart"in window),fn=document.documentElement;fn.classList.toggle("touch-capable",Hn);fn.classList.toggle("keyboard-controls-visible",!Hn);const am=Z("#app");am.innerHTML=`
 <canvas id="game"></canvas>
 <div class="grain"></div>
 <header class="topbar"><a class="brand" href="#"><span class="brand-icon">✦</span><span>RUMBLE<span class="accent">ROAM</span></span></a><div class="location-label"><span class="pulse"></span><span id="place-name">Moab, Utah</span><small id="terrain-name">RED ROCK COUNTRY</small></div><div class="top-actions"><button id="map-btn" class="top-btn place-button" aria-label="Open map and choose a place">⌖ <span>MAP</span></button><button id="pause-btn" class="top-btn" aria-label="Pause game">Ⅱ <span>PAUSE</span></button><button id="help-btn" class="top-btn help-trigger" aria-label="Help and controls">?</button></div></header><div id="geo-status" class="world-data-status" aria-live="polite">GEOGRAPHIC DATA · LOADING</div><a class="world-data-credit" href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">© OPENSTREETMAP CONTRIBUTORS · ODbL</a>
 <aside class="hud-left"><div class="stat"><span class="stat-label">VELOCITY</span><div class="speed-line"><strong id="speed">000</strong><span>KM/H</span></div><div class="speed-track"><i id="speed-bar"></i></div><small id="street-name" class="street-name"></small></div><div class="stat nitro-stat"><span class="stat-label">NITROUS</span><div class="nitro-track"><i id="nitro-bar"></i></div><small id="nitro-state">READY TO BURN</small></div><div class="stunt-stat" aria-live="polite"><div><span>AIR TIME</span><b id="air-time">0.0s</b></div><div><span>STUNT</span><b id="stunt-score">0</b></div><small>BEST <b id="stunt-best">0</b></small><small id="level-hint" class="level-hint"></small></div></aside>
 <div class="hud-bottom"><div class="hint keyboard-hint"><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> DRIVE <i></i><kbd>SHIFT</kbd> BOOST <i></i><kbd>SPACE</kbd> JUMP <i></i><kbd>F</kbd> LEVEL <i></i><kbd>Q</kbd><kbd>E</kbd> FLIP</div><div class="touch-hint">LEFT THUMB STEERS · GO DRIVES · BOOST IS INDEPENDENT</div><div class="camera-toggle"><button data-camera="chase" class="selected">CHASE</button><button data-camera="far">FAR</button><button data-camera="hood">HOOD</button><button data-camera="free">FREE</button></div></div>
 <button id="settings-btn" class="settings-fab">⚙</button>
 <section id="location-panel" class="panel hidden"><div class="panel-head"><div><span class="eyebrow">PICK YOUR PLAYGROUND</span><h2>Map / Places</h2></div><button class="close-btn" data-close="location-panel" aria-label="Close map and places">×</button></div><div class="picker-current"><strong id="picker-place">Moab, Utah</strong><span id="picker-coverage" aria-live="polite">Checking packaged map coverage…</span></div><form id="search-form"><input id="location-search" placeholder="Search a place or paste coordinates" autocomplete="off"><button class="search-btn">SEARCH <span>↗</span></button></form><div id="search-results" class="results"></div><div class="map-wrap"><div id="mini-map"></div><div class="map-hint">CLICK MAP TO DROP A PIN</div></div><button id="practice-course" class="practice-course-btn">ADD OPTIONAL PRACTICE OBSTACLES</button><div class="preset-title">FAVORITE RUNS <span>09 LOCATIONS</span></div><div id="presets" class="presets"></div><div class="coverage-disclosure">Packaged OSM buildings and roads are available only in Manhattan, Mount Kisco and Moab. Other locations load terrain only; worldwide building and road streaming is not available.</div><div class="attribution">Terrain <a href="https://registry.opendata.aws/terrain-tiles/" target="_blank">Mapzen / Tilezen</a> · © <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a> · Map <a href="https://openfreemap.org/" target="_blank">OpenFreeMap</a><details class="terrain-credits"><summary>Terrain source credits</summary><div>ArcticDEM: DigitalGlobe imagery; NSF awards 1043681, 1559691 and 1542736. Australia: © Commonwealth of Australia (Geoscience Australia) 2017. Austria: © offene Daten Österreichs – Digitales Geländemodell (DGM) Österreich. Canada: Open Government Licence – Canada. Europe: Copernicus / EU-DEM. Global ETOPO1: NOAA. Mexico: INEGI, Continental relief, 2016. New Zealand: © Land Information New Zealand and NZ Government. Norway: © Kartverket. United Kingdom: © Environment Agency 2015. United States 3DEP, GMTED2010 and SRTM: USGS.</div></details></div></section>
 <section id="settings-panel" class="panel settings hidden"><div class="panel-head"><div><span class="eyebrow">TUNE THE MAYHEM</span><h2>Game settings</h2></div><button class="close-btn" data-close="settings-panel">×</button></div><label>Graphics quality <select id="graphics-quality"><option value="low">Low · smoother</option><option value="medium">Medium · balanced</option><option value="high">High · detailed</option></select></label><label>Touch steering <select id="steering-mode"><option value="analog">Analog pad</option><option value="buttons">Classic buttons</option></select></label><label>Steering sensitivity <span id="sensitivity-value">100%</span><input id="steering-sensitivity" type="range" min="50" max="150" value="100"></label><label>Gravity <span id="gravity-value">24</span><input id="gravity" type="range" min="6" max="35" value="24"></label><label>Jump force <span id="jump-value">15</span><input id="jump" type="range" min="8" max="25" value="15"></label><label>Truck scale <span id="scale-value">1.0×</span><input id="scale" type="range" min="7" max="16" value="10"></label><label>Paint <input id="paint" type="color" value="#d84924"></label><label class="toggle"><span>Audio</span><input id="audio-toggle" type="checkbox" checked></label><label>Master volume <span id="volume-value">62%</span><input id="master-volume" type="range" min="0" max="100" value="62"></label><label>Engine volume <span id="engine-volume-value">84%</span><input id="engine-volume" type="range" min="0" max="100" value="84"></label><label>Effects volume <span id="effects-volume-value">72%</span><input id="effects-volume" type="range" min="0" max="100" value="72"></label><label>Music volume <span id="music-volume-value">12%</span><input id="music-volume" type="range" min="0" max="100" value="12"></label><div class="radio-heading"><span class="eyebrow">RUMBLE ROAM RADIO</span><small id="music-track" class="settings-note">Super Wreck Roadway — Umplix</small><a id="music-credit" class="music-attribution" href="https://opengameart.org/content/super-wreck-roadway" target="_blank" rel="noreferrer">CC0 track source ↗</a></div><div class="music-controls"><button id="music-previous" class="ghost-btn" aria-label="Previous track">PREV</button><button id="music-play" class="ghost-btn">PLAY</button><button id="music-next" class="ghost-btn" aria-label="Next track">NEXT</button><button id="music-shuffle" class="ghost-btn" aria-label="Toggle shuffle" aria-pressed="false">SHUFFLE</button></div><button id="audio-test" class="ghost-btn audio-test">TEST SOUND</button><small id="audio-status" class="settings-note">Music is optional; the V8 remains prominent. Audio starts after your first input.</small><button id="reset-btn" class="search-btn full">RESET TRUCK <span>↻</span></button><small class="settings-note">Esc pauses the run. R recovers the truck. Press M to pick a new place.</small></section>
 <section id="pause-panel" class="pause-panel hidden"><span class="eyebrow">TAKE A BREATHER</span><h1>PAUSED</h1><button id="resume-btn" class="search-btn">BACK TO IT <span>▶</span></button><button id="pause-location" class="ghost-btn">CHANGE LOCATION</button></section>
 <section id="help-panel" class="panel help-panel hidden" aria-labelledby="help-title"><div class="panel-head"><div><span class="eyebrow">QUICK DRIVER GUIDE</span><h2 id="help-title">Controls</h2></div><button class="close-btn" data-close="help-panel" aria-label="Close help">×</button></div><p class="touch-guide-copy">Drag the left thumb pad to steer, or tilt it in the air for rolls and flips. GO drives in the selected gear. BOOST accelerates on its own; JUMP launches independently. Hold LEVEL in air or on the ground to smoothly right the truck.</p><div class="help-grid"><strong>Keyboard</strong><span>W / S · Accelerate / reverse</span><span>A / D or ← / → · Steer</span><span>Shift · Boost · Space · Jump · F · Hold to level in air or on ground</span><span>Q / E · Roll · R · Reset · C · Camera · Esc · Pause · M · Locations</span><strong>Touch</strong><span>Analog pad · Steering / aerial rolls and pitch</span><span>GO · Drive · FWD/REV · Select gear</span><span>BOOST · Acceleration/nitro · JUMP · Launch · LEVEL · Recover</span><span>Bottom shortcuts · Reset · Camera · Pause · Help</span></div></section>
 <section id="building-info" class="building-info hidden" aria-live="polite"><button id="building-info-close" class="info-close" aria-label="Close building information">×</button><span id="building-info-type" class="eyebrow">OPENSTREETMAP BUILDING</span><h3 id="building-info-name">Building</h3><div id="building-info-attrs"></div></section>
 <div id="toast" class="toast"></div>
 <div class="orientation-tip" aria-hidden="true">LANDSCAPE RECOMMENDED</div>
 <nav class="mobile-utility" aria-label="Quick game controls"><button id="touch-reset" aria-label="Reset truck">↻ <span>RESET</span></button><button id="touch-camera" aria-label="Change camera">◉ <span>CAM</span></button><button id="touch-pause" aria-label="Pause game">Ⅱ <span>PAUSE</span></button><button id="touch-help" aria-label="Help and controls">? <span>HELP</span></button><button id="touch-control-mode" aria-label="Switch control display" aria-pressed="true">⌨ <span>KEYS</span></button></nav>
 <div class="mobile-controls" aria-label="Touch driving controls"><div class="touch-steering"><div id="analog-pad" class="analog-pad" role="application" aria-label="Drag to steer; move in the air to roll and pitch"><div class="analog-ring"></div><div id="analog-knob" class="analog-knob"><span>◉</span></div><small id="analog-label">STEER</small></div><div class="classic-pad"><button data-touch="a" aria-label="Steer left">◀<span>LEFT</span></button><button data-touch="d" aria-label="Steer right">▶<span>RIGHT</span></button></div></div><div class="touch-right"><div class="touch-action-row"><button data-touch="jump" aria-label="Tap to jump; hold briefly for extra height">⬆ <span>JUMP</span></button><button data-touch="nitro" class="nitro-touch" aria-label="Hold to boost independently">⚡ <span>BOOST</span></button><button id="touch-level" data-touch="level" class="level-touch" aria-label="Hold to level truck upright">↥ <span>LEVEL</span></button></div><div class="touch-drive-row"><button id="touch-gear" class="gear-button" aria-label="Toggle forward and reverse">FWD</button><button data-touch="go" class="go-button" aria-label="Hold to accelerate">GO <small>HOLD</small></button></div></div></div>
 <div class="loading-screen" id="loading"><div class="loader-mark">✦</div><div class="loader-title">MAPPING THE WILD</div><div class="loader-sub">LOADING REAL-WORLD TERRAIN</div><div class="loader-track"><i></i></div></div>`;let Ot=Hn?"low":"high";const sr=e=>Hn?{low:1.5,medium:1.75,high:2}[e]:{low:.85,medium:1.1,high:1.35}[e],lr=()=>({width:Math.round(window.visualViewport?.width??innerWidth),height:Math.round(window.visualViewport?.height??innerHeight)}),Bn=lr(),_t=new vp({canvas:Z("#game"),antialias:!1,powerPreference:"high-performance"});_t.setPixelRatio(Math.min(devicePixelRatio||1,sr(Ot)));_t.setSize(Bn.width,Bn.height);_t.shadowMap.enabled=!1;_t.shadowMap.type=bs;_t.toneMapping=As;_t.toneMappingExposure=.96;const qa=_t.getContext(),$o=qa.getExtension("WEBGL_debug_renderer_info"),rm=String(qa.getParameter($o?$o.UNMASKED_RENDERER_WEBGL:qa.RENDERER)),Et=new wc,Os=new Va(_t),Yi=document.createElement("canvas");Yi.width=512;Yi.height=256;const Vn=Yi.getContext("2d"),ui=Vn.createLinearGradient(0,0,0,256);ui.addColorStop(0,"#91aab8");ui.addColorStop(.43,"#c6d1d0");ui.addColorStop(.58,"#e3d8c7");ui.addColorStop(1,"#766b5e");Vn.fillStyle=ui;Vn.fillRect(0,0,512,256);const cr=Vn.createRadialGradient(350,138,4,350,138,105);cr.addColorStop(0,"rgba(255,241,214,.72)");cr.addColorStop(1,"rgba(255,241,214,0)");Vn.fillStyle=cr;Vn.fillRect(245,35,210,210);const Ki=new ws(Yi);Ki.mapping=ki;Ki.colorSpace=Ja;const om=Os.fromEquirectangular(Ki);Et.environment=om.texture;Et.environmentIntensity=.42;Ki.dispose();Os.dispose();Et.background=new $e("#9bb7c1");Et.fog=new Cs("#c2c9c4",65e-6);const Je=new jn(60,Bn.width/Bn.height,.1,18e3);Je.position.set(0,8,-16);const sm=new ne,Zo=new ne,Ta=new ne,bi=new ne,Ai=new ne,Zn=new ne,Bs=Object.assign(((e,n,t,i=!1)=>{Je.updateMatrixWorld(!0);const r=Zo.set(e,n,t),a=sm.copy(r).project(Je);if(!i)return a;Ta.copy(r).sub(Je.position);const o=Ta.length();Vi.set(Je.position,Ta.multiplyScalar(1/Math.max(.001,o)));const s=Vi.intersectObjects(He.group.children,!1).some(c=>c.distance<o-.8);return{x:a.x,y:a.y,z:a.z,visible:!s}}),{viewport:{width:Bn.width,height:Bn.height},screenFrame:(e,n,t)=>{Je.updateMatrixWorld(!0),Je.matrixWorld.extractBasis(bi,Ai,Zn);const i=Je.position.distanceTo(Zo.set(e,n,t));return{right:[bi.x,bi.y,bi.z],up:[Ai.x,Ai.y,Ai.z],worldPerPixel:2*i*Math.tan(st.degToRad(Je.fov)*.5)/Math.max(1,innerHeight)}}});Et.add(new yc(15398143,5851447,.82));const gt=new Pc(16773336,2.35);gt.position.set(-350,550,260);gt.castShadow=!0;gt.shadow.bias=-12e-5;gt.shadow.normalBias=.025;gt.shadow.radius=2;gt.shadow.camera.left=-82;gt.shadow.camera.right=82;gt.shadow.camera.top=82;gt.shadow.camera.bottom=-82;gt.shadow.camera.near=8;gt.shadow.camera.far=380;gt.target.position.set(0,0,0);Et.add(gt,gt.target);const Ya=new nn({side:yt,depthWrite:!1,depthTest:!1,toneMapped:!1,uniforms:{uRumbleDesert:{value:1},uRumbleAlpine:{value:0},uSunDirection:{value:new ne(-.42,.63,.65).normalize()}},vertexShader:"varying vec3 vSkyDirection;void main(){vSkyDirection=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec3 vSkyDirection;uniform float uRumbleDesert;uniform float uRumbleAlpine;uniform vec3 uSunDirection;void main(){vec3 d=normalize(vSkyDirection);float h=smoothstep(-.16,.84,d.y);vec3 horizon=mix(vec3(.79,.72,.58),vec3(.66,.75,.77),uRumbleDesert);horizon=mix(horizon,vec3(.72,.79,.84),uRumbleAlpine);vec3 zenith=mix(vec3(.24,.37,.48),vec3(.3,.46,.55),uRumbleDesert);vec3 sky=mix(horizon,zenith,h);float sun=pow(max(dot(d,normalize(uSunDirection)),0.0),180.0);sky+=vec3(1.0,.72,.4)*sun*.32;gl_FragColor=vec4(sky,1.0);}"}),$i=new dt(new Lc(12e3,24,16),Ya);$i.frustumCulled=!1;$i.renderOrder=-1e3;Et.add($i);const dr=new nn({transparent:!0,depthWrite:!1,toneMapped:!1,uniforms:{uOpacity:{value:.25}},vertexShader:"varying vec2 vShadowUv;void main(){vShadowUv=uv*2.0-1.0;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec2 vShadowUv;uniform float uOpacity;void main(){float r=length(vShadowUv);float a=(1.0-smoothstep(.18,1.0,r))*uOpacity;gl_FragColor=vec4(.12,.105,.085,a);}"}),ci=new dt(new Dc(1,32),dr);ci.rotation.x=-Math.PI/2;ci.renderOrder=1;Et.add(ci);const tt=new Cp(Hn?63:127);Et.add(tt.group);const He=new Op;Et.add(He.group,He.roadsGroup);const Gn=new kp;Et.add(Gn.group);const on=new Qp;Et.add(on.group);const An=new jp;Et.add(An.group);let sn=new Hp;Et.add(sn.root);const Y=new qp,{ArcadeCollisionWorld:lm}=await Ha(async()=>{const{ArcadeCollisionWorld:e}=await import("./collision-world-DeM6Yckj.js");return{ArcadeCollisionWorld:e}},__vite__mapDeps([0,1]),import.meta.url),kt=new lm;await kt.init();const nt=new Zp,Ie=new im;let vn=null,Ri=null,wi=[];const Ka="rumble-roam-best-stunt-score";function $a(){try{return Number(localStorage.getItem(Ka))||0}catch{return 0}}const pt=new Xp($a());let Gs=0,ks=null;(location.hostname==="localhost"||location.hostname==="127.0.0.1")&&(window.__rumbleRoamDebug={getAudioDiagnostics(){return Ie.diagnostics()},startAudioPreviewCapture(){if(typeof MediaRecorder>"u"||vn)return null;const e=Ie.createDiagnosticCapture();if(!e)return null;const t=["audio/webm;codecs=opus","audio/mp4","audio/webm"].find(i=>MediaRecorder.isTypeSupported(i))??"";try{vn=new MediaRecorder(e.stream,t?{mimeType:t}:void 0)}catch{return e.close(),null}return Ri=e.close,wi=[],vn.ondataavailable=i=>{i.data.size&&wi.push(i.data)},vn.start(200),vn.mimeType||t||"browser-default"},async stopAudioPreviewCapture(){const e=vn;return e?await new Promise(n=>{e.onstop=async()=>{try{const t=new Blob(wi,{type:e.mimeType}),i=Array.from(new Uint8Array(await t.arrayBuffer()));Ri?.(),n({mimeType:t.type,bytes:i})}catch{Ri?.(),n(null)}finally{vn=null,Ri=null,wi=[]}},e.stop()}):null},getStreetLabelCount(){return He.streetLabelCount},getStreetLabels(){return He.streetLabelPositions.map(e=>{const n=new ne(e.x,e.y,e.z).project(Je),t=e.screenBounds;return{...e,screenX:(n.x+1)*.5*innerWidth,screenY:(1-n.y)*.5*innerHeight,depth:n.z,screenBounds:t?{left:(t.left+1)*.5*innerWidth,right:(t.right+1)*.5*innerWidth,top:(1-t.bottom)*.5*innerHeight,bottom:(1-t.top)*.5*innerHeight}:void 0}})},getStreetGeometry(){return He.streetLabelGeometryDebug},getStreetLabelDiagnostics(){return He.streetLabelDiagnostics},getStreetCameraState(){return Je.updateMatrixWorld(!0),Je.getWorldDirection(Zn),{truckYaw:Y.yaw,cameraPosition:[Je.position.x,Je.position.y,Je.position.z],cameraForward:[Zn.x,Zn.y,Zn.z],cameraFov:Je.fov,cameraAspect:Je.aspect,viewport:[innerWidth,innerHeight],projectionMatrix:Array.from(Je.projectionMatrix.elements),viewMatrix:Array.from(Je.matrixWorldInverse.elements)}},getStreetAtlasDataUrl(){return He.streetLabelAtlasImage?.toDataURL()??null},getPhysicsState(){return{yaw:Y.yaw,pitch:Y.pitch,roll:Y.roll,grounded:Y.grounded,position:[Y.pos.x,Y.pos.y,Y.pos.z],speed:Y.speed,verticalSpeed:Y.vel.y,airTime:Y.airTime,airRoll:nt.state.airRoll,analogX:nt.analog.x,stuntRolls:pt.rolls,stuntPoints:pt.currentPoints,lastLandingSpeed:Gs,lastLandingAward:ks,lastLandingDebug:pt.lastLandingDebug,stuntAirborne:pt.isAirborne,stuntAirtime:pt.airtime}},spawnImpactTestBuilding(){tt.frame&&He.addFixtureRoad(tt.frame,(i,r)=>tt.heightAt(i,r));const e=li(Y.yaw),n=Y.pos.clone().addScaledVector(e,11),t=He.addFixtureBuilding(`fixture-impact-${Date.now()}`,n.x,n.z,(i,r)=>tt.heightAt(i,r),kt,{w:7,d:6,h:9});return Ht("LOCAL TEST BUILDING AHEAD"),t.id},spawnImpactTestSet(){const e=li(Y.yaw);return tt.frame&&He.addFixtureRoad(tt.frame,(n,t)=>tt.heightAt(n,t)),[10,27].map((n,t)=>{const i=Y.pos.clone().addScaledVector(e,n);return He.addFixtureBuilding(`fixture-impact-set-${Date.now()}-${t}`,i.x,i.z,(r,a)=>tt.heightAt(r,a),kt,t?{w:10,d:8,h:24}:{w:6,d:5,h:7}).id})},prepareMappedImpact(){const e=He.list.filter(o=>o.source==="osm"&&!o.broken);e.sort((o,s)=>Math.hypot(o.x-Y.pos.x,o.z-Y.pos.z)-Math.hypot(s.x-Y.pos.x,s.z-Y.pos.z));const n=e[0];if(!n)return null;const t=new ne(n.x-Y.pos.x,0,n.z-Y.pos.z).normalize();t.lengthSq()<.1&&t.set(0,0,1);const i=Math.max(n.w,n.d)*.5+6,r=n.x-t.x*i,a=n.z-t.z*i;return Y.yaw=Math.atan2(t.x,t.z),Y.pos.set(r,tt.heightAt(r,a)+1.65*fi.scale,a),Y.vel.set(0,0,0),Y.grounded=!0,Y.pitch=0,Y.roll=0,kt.step(Y.pos,Y.yaw,1/120,Y.vel),kt.step(Y.pos,Y.yaw,1/120,Y.vel),Y.vel.copy(t).multiplyScalar(24),n.id},hasFixtureRoad(){return He.roadsGroup.children.some(e=>e.userData.kind==="fixture-road")}});const fi={gravity:24,jump:15,scale:1};Z("#graphics-quality").value=Ot;let Rn="chase",tn=!1,Za=0,ni=.25,rn=null,Qa=null,Yt=ir[1],ba=0,di=performance.now(),Gt=0,Qo=0,jo=0,Jo=0,es=0,Aa=performance.now(),Ci=0,Ni=0,Ra=0,yi=0,ts=0,ns=0;const Vi=new Cc,is=new ut;Z("#building-info-close").onclick=()=>Z("#building-info").classList.add("hidden");Z("#game").addEventListener("pointerup",e=>{if(e.button!==0||fn.classList.contains("overlay-open"))return;const n=Z("#game").getBoundingClientRect();is.set((e.clientX-n.left)/n.width*2-1,-(e.clientY-n.top)/n.height*2+1),Vi.setFromCamera(is,Je);const t=Vi.intersectObjects(He.group.children,!1).find(d=>d.object.isBatchedMesh&&d.batchId!==void 0);if(!t)return;const i=He.list.find(d=>d.batch===t.object&&d.instanceId===t.batchId);if(!i||i.broken||!i.tags)return;const r=i.tags,a=Z("#building-info"),o=[r["addr:housenumber"],r["addr:street"]].filter(Boolean).join(" ");Z("#building-info-name").textContent=r.name??(o||(i.category==="other"?"Mapped building":i.category[0].toUpperCase()+i.category.slice(1))),Z("#building-info-type").textContent=r["building:part"]?"OPENSTREETMAP BUILDING PART":"OPENSTREETMAP BUILDING";const s=[["Type",r.building??r["building:part"]??"—"],["Height",r.height??r["building:height"]??(r["building:levels"]?`${r["building:levels"]} levels`:"")],["Name",r.name??""],["Address",o]],c=Z("#building-info-attrs");c.replaceChildren();const p=document.createElement("dl");for(const[d,h]of s)if(h){const g=document.createElement("dt");g.textContent=d;const m=document.createElement("dd");m.textContent=h,p.append(g,m)}c.append(p),a.classList.remove("hidden")});function cm(){const e=performance.memory;return e?Math.round(e.usedJSHeapSize/1048576*10)/10:null}function Ht(e){const n=Z("#toast");n.textContent=e,n.classList.add("show"),clearTimeout(Qo),Qo=window.setTimeout(()=>n.classList.remove("show"),2800)}function ur(){nt.releaseAll(),Z("#analog-knob").style.transform="translate(0,0)",Z("#analog-pad").classList.remove("dragging")}function $t(){const e=["location-panel","settings-panel","help-panel","pause-panel"].some(n=>!Z("#"+n).classList.contains("hidden"));fn.classList.toggle("overlay-open",e),e&&ur()}function Hs(){document.querySelectorAll(".preset").forEach((e,n)=>{const t=ir[n],i=Math.abs(t.lat-Yt.lat)<2e-4&&Math.abs(t.lon-Yt.lon)<2e-4;e.classList.toggle("selected",i),e.setAttribute("aria-pressed",String(i))})}function as(e){Z("#picker-place").textContent=Yt.name,Z("#picker-coverage").textContent=e}async function Zi(e){const n=++ba;Yt=e,Z("#picker-place").textContent=e.name,as("Checking packaged OSM buildings and roads…"),Hs(),tn=!1,Ni=0,Z("#building-info").classList.add("hidden"),An.clear(),Gn.clear(),He.reset(kt),Z("#geo-status").textContent="MAPPING WORLD";const t=e.name.toLowerCase(),i=/moab|grand canyon|sahara|utah|arizona/.test(t),r=/alps|everest|mountain|swiss/.test(t);Ya.uniforms.uRumbleDesert.value=i?1:0,Ya.uniforms.uRumbleAlpine.value=r?1:0,Et.fog instanceof Cs&&Et.fog.color.set(i?"#c9b99e":r?"#bdcbd2":"#c2c9c4"),["location-panel","settings-panel","help-panel","pause-panel"].forEach(a=>Z("#"+a).classList.add("hidden")),$t(),Z("#loading").classList.remove("done"),Z("#place-name").textContent=e.name,Z("#terrain-name").textContent=e.terrain??"OPEN TERRAIN",Ht("Mapping terrain…"),await tt.load(e),n===ba&&(Y.reset(tt,fi.scale),pt.reset(),Z("#loading").classList.add("done"),Ht("Terrain is ready. Go make a mess."),He.load(e,(a,o)=>tt.heightAt(a,o),kt,tt.frame).then(a=>{n===ba&&(a.heading!==void 0&&Y.speed<2&&(Y.yaw=a.heading),Z("#geo-status").textContent=a.source==="osm"?"OSM MAP · MAPPED":"TERRAIN ONLY",Z("#geo-status").title=a.message,as(a.source==="osm"?`${a.buildings.toLocaleString()} real OSM buildings · ${a.roads.toLocaleString()} mapped roads and paths`:"TERRAIN ONLY · no packaged buildings or roads at this location."),a.source==="osm"&&Gn.setLocation(e,tt.frame,((o,s)=>tt.heightAt(o,s)),He.sceneryRoads,He.list),Ht(a.source==="osm"?`OSM map · ${a.buildings} buildings · ${a.roads} street/path lines`:"No packaged map data here. Terrain only; no practice obstacles were added."))}),rn?.flyTo({center:[e.lon,e.lat],zoom:12}),Qa?.setLngLat([e.lon,e.lat]))}Z("#practice-course").addEventListener("click",()=>{const e=He.addPracticeCourse((n,t)=>tt.heightAt(n,t),kt);Z("#geo-status").textContent="PRACTICE COURSE",Z("#geo-status").title=`${He.status.message} · OPTIONAL PRACTICE OBSTACLES`,Ht(e?`Optional practice course added · ${e} obstacles`:"Practice obstacles are already active.")});ir.forEach((e,n)=>{const t=document.createElement("button");t.className="preset",t.setAttribute("aria-pressed","false"),t.innerHTML=`<span class="preset-index">0${n+1}</span><span>${e.name}</span><i>↗</i>`,t.onclick=()=>Zi(e),Z("#presets").append(t)});Hs();Z("#search-form").addEventListener("submit",async e=>{e.preventDefault();const n=Z("#location-search").value.trim();if(!n)return;const t=Z("#search-results");t.innerHTML='<div class="search-status">SEARCHING THE GLOBE…</div>';try{const i=await bp(n);if(!i.length){t.innerHTML='<div class="search-status">No places found. Try a nearby town or coordinates.</div>';return}t.innerHTML="";for(const r of i){const a=document.createElement("button");a.className="result",a.innerHTML=`<span>⌖</span><span>${r.name}</span><i>↗</i>`,a.onclick=()=>Zi(r),t.append(a)}}catch{t.innerHTML='<div class="search-status">Location search is busy. Try coordinates like 40.7, -73.9.</div>'}});Z("#location-search").addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),Z("#search-form").requestSubmit())});Z("#map-btn").onclick=async()=>{if(Z("#location-panel").classList.toggle("hidden"),Z("#settings-panel").classList.add("hidden"),Z("#help-panel").classList.add("hidden"),$t(),rn)setTimeout(()=>rn?.resize(),100);else{const[n,t]=await Promise.all([Ha(()=>import("./maplibre-gl-BT_db7in.js"),[],import.meta.url),Ha(()=>import("./maplibre-gl-worker-re4DVwB4.js"),[],import.meta.url)]);n.setWorkerUrl(t.default),rn=new n.Map({container:"mini-map",style:"https://tiles.openfreemap.org/styles/liberty",center:[Yt.lon,Yt.lat],zoom:10,attributionControl:!1}),rn.addControl(new n.NavigationControl({showCompass:!1}),"top-right"),Qa=new n.Marker({color:"#f2632b"}).setLngLat([Yt.lon,Yt.lat]).addTo(rn),rn.on("click",i=>{const r={name:`${i.lngLat.lat.toFixed(4)}, ${i.lngLat.lng.toFixed(4)}`,lat:i.lngLat.lat,lon:i.lngLat.lng};Qa?.setLngLat(i.lngLat);const a=document.createElement("button");a.className="result",a.innerHTML=`<span>⌖</span><span>Drive at ${r.name}</span><i>↗</i>`,a.onclick=()=>Zi(r),Z("#search-results").replaceChildren(a)})}};Z("#settings-btn").onclick=()=>{Z("#settings-panel").classList.toggle("hidden"),Z("#location-panel").classList.add("hidden"),Z("#help-panel").classList.add("hidden"),$t()};const fr=()=>{Z("#help-panel").classList.toggle("hidden"),Z("#location-panel").classList.add("hidden"),Z("#settings-panel").classList.add("hidden"),$t()};Z("#help-btn").onclick=fr;Z("#touch-help").onclick=fr;document.querySelectorAll("[data-close]").forEach(e=>e.addEventListener("click",()=>{Z("#"+e.dataset.close).classList.add("hidden"),$t()}));const hr=(e,n,t)=>{const i=Z("#"+e);i.oninput=()=>{const r=+i.value/(n==="scale"?10:1);fi[n]=r,Z("#"+n+"-value").textContent=t(r),n==="scale"&&sn.root.scale.setScalar(r)}};hr("gravity","gravity",e=>e.toFixed(0));hr("jump","jump",e=>e.toFixed(0));hr("scale","scale",e=>e.toFixed(1)+"×");Z("#paint").addEventListener("input",e=>sn.setColor(e.target.value));function Vs(e){Ot=e,Z("#graphics-quality").value=e,_t.setPixelRatio(Math.min(devicePixelRatio||1,sr(e)));const n=lr();_t.setSize(n.width,n.height),_t.shadowMap.enabled=e!=="low",gt.castShadow=e!=="low";const t=e==="high"?1536:e==="medium"?1024:512;gt.shadow.mapSize.set(t,t),gt.shadow.needsUpdate=!0,tt.setVisualQuality(e),on.setQuality(e),An.setQuality(e),Gn.setQuality(e),dr.uniforms.uOpacity.value=zs(e)}const zs=e=>e==="low"?.18:e==="medium"?.23:.29;Z("#graphics-quality").addEventListener("change",e=>Vs(e.target.value));tt.setVisualQuality(Ot);on.setQuality(Ot);An.setQuality(Ot);dr.uniforms.uOpacity.value=zs(Ot);Vs(Ot);const Ws="rumble-roam-audio-preferences-v3",dm="rumble-roam-audio-preferences-v2";let zn={};try{zn=JSON.parse(localStorage.getItem(Ws)??localStorage.getItem(dm)??"{}")}catch{}Ie.setVolumes(zn.volumes??Fs);Ie.setMuted(zn.muted??!1);Ie.setTrackIndex(zn.trackIndex??0);Ie.setShuffle(zn.shuffle??!1);Ie.setMusicPreference(zn.musicPlaying??!1);const Qi=(e,n,t)=>{const i=Z("#"+e);i.value=String(Math.round(Ie.getVolumes()[n]*100)),Z("#"+t).textContent=`${i.value}%`,i.addEventListener("input",()=>{const r=+i.value;Ie.setVolumes({[n]:r/100}),Z("#"+t).textContent=`${r}%`,yn()})};function yn(){try{localStorage.setItem(Ws,JSON.stringify({volumes:Ie.getVolumes(),muted:Ie.isMuted(),trackIndex:Ie.getTrackIndex(),shuffle:Ie.isShuffleEnabled(),musicPlaying:Ie.isMusicRequested()}))}catch{}}const Qn=Z("#audio-toggle");Qn.checked=!Ie.isMuted();Qi("master-volume","master","volume-value");Qi("engine-volume","engine","engine-volume-value");Qi("effects-volume","effects","effects-volume-value");Qi("music-volume","music","music-volume-value");const ja=Z("#music-play"),um=Z("#music-track"),Xs=Z("#music-previous"),qs=Z("#music-next"),Fi=Z("#music-shuffle");function Wn(){const e=Ie.diagnostics(),n=Jt[e.trackIndex];um.textContent=`${n.artist} — ${n.title}`;const t=Z("#music-credit");t.href=n.sourceUrl,ja.textContent=Ie.isMusicRequested()?"PAUSE":"PLAY",ja.disabled=!Ie.hasSoundtrack(),Xs.disabled=qs.disabled=Fi.disabled=!Ie.hasSoundtrack(),Fi.classList.toggle("selected",Ie.isShuffleEnabled()),Fi.setAttribute("aria-pressed",String(Ie.isShuffleEnabled())),e.musicError?Z("#audio-status").textContent=e.musicError:Z("#audio-status").textContent="CC0 music loads on demand. Engine and effects stay independently mixed."}Wn();Qn.addEventListener("change",()=>{Qn.checked&&Ie.start(),Ie.setMuted(!Qn.checked),Z("#audio-status").textContent=Qn.checked?"Game audio enabled.":"Game audio muted.",yn()});Z("#audio-test").addEventListener("click",()=>{Ie.start();const e=Ie.testTone();Z("#audio-status").textContent=e?"Short test tone sent through the game output.":"Unmute audio to hear the test tone.",e||Ht("Turn Audio on to hear the test.")});Xs.addEventListener("click",()=>{Ie.start(),Ie.previousTrack(),Wn(),yn()});ja.addEventListener("click",()=>{Ie.start(),Ie.isMusicRequested()?Ie.pauseMusic():Ie.playMusic(),Wn(),yn()});qs.addEventListener("click",()=>{Ie.start(),Ie.nextTrack(),Wn(),yn()});Fi.addEventListener("click",()=>{Ie.setShuffle(!Ie.isShuffleEnabled()),Wn(),yn()});window.addEventListener("rumble-radio-change",()=>{Wn(),yn()});function pr(){Y.reset(tt,fi.scale),pt.reset(),sn.root.visible=!0,Ht("Truck recovered. Send it!")}function mr(e){const n=["chase","far","hood","free"];Rn=e??n[(n.indexOf(Rn)+1)%n.length],document.querySelectorAll("[data-camera]").forEach(t=>t.classList.toggle("selected",t.dataset.camera===Rn))}function gr(){tn=!tn,tn&&nt.releaseAll(),Z("#pause-panel").classList.toggle("hidden",!tn),$t()}Z("#reset-btn").onclick=pr;Z("#touch-reset").onclick=()=>{Ie.start(),pr()};Z("#touch-camera").onclick=()=>mr();Z("#touch-pause").onclick=()=>gr();Z("#resume-btn").onclick=()=>{Ie.start(),tn=!1,di=performance.now(),Z("#pause-panel").classList.add("hidden"),$t()};Z("#pause-btn").onclick=()=>gr();Z("#pause-location").onclick=()=>{Z("#pause-panel").classList.add("hidden"),$t(),Z("#map-btn").click()};document.querySelectorAll("[data-camera]").forEach(e=>e.addEventListener("click",()=>mr(e.dataset.camera)));const wa=Z("#steering-mode"),Ca=Z("#steering-sensitivity");wa.addEventListener("change",()=>{nt.setSteeringMode(wa.value),fn.classList.toggle("classic-steering",wa.value==="buttons")});Ca.addEventListener("input",()=>{nt.setSensitivity(+Ca.value/100),Z("#sensitivity-value").textContent=`${Ca.value}%`});Z("#touch-gear").addEventListener("click",()=>{const e=nt.toggleGear();Z("#touch-gear").textContent=e===1?"FWD":"REV",Z("#touch-gear").setAttribute("aria-label",e===1?"Forward selected; toggle to reverse":"Reverse selected; toggle to forward")});const ii=Z("#touch-control-mode");ii.textContent=Hn?"⌨ KEYS":"◉ TOUCH";ii.setAttribute("aria-pressed",String(!fn.classList.contains("keyboard-controls-visible")));ii.onclick=()=>{const e=fn.classList.toggle("keyboard-controls-visible");ii.innerHTML=e?"◉ <span>TOUCH</span>":"⌨ <span>KEYS</span>",ii.setAttribute("aria-pressed",String(!e))};window.addEventListener("keydown",e=>{e.repeat||Xa(e.target)||(e.key.toLowerCase()==="m"&&Z("#map-btn").click(),e.key.toLowerCase()==="c"&&mr(),e.key.toLowerCase()==="r"&&pr(),e.key==="Escape"&&gr(),(e.key==="?"||e.key.toLowerCase()==="h")&&fr(),(e.key===" "||e.key.toLowerCase()==="w")&&Ie.start())});document.querySelectorAll("[data-touch]").forEach(e=>{const n=e.dataset.touch;e.addEventListener("pointerdown",t=>{if(!(t.pointerType==="mouse"&&t.button!==0)){t.preventDefault(),nt.pointerDown(t.pointerId,n);try{e.setPointerCapture(t.pointerId)}catch{}Ie.start()}}),e.addEventListener("pointerup",t=>{t.preventDefault(),nt.pointerUp(t.pointerId)}),e.addEventListener("pointercancel",t=>nt.pointerCancel(t.pointerId)),e.addEventListener("lostpointercapture",t=>nt.lostPointerCapture(t.pointerId))});const Kt=Z("#analog-pad"),Ys=Z("#analog-knob");Kt.addEventListener("pointerdown",e=>{if(e.pointerType==="mouse"&&e.button!==0)return;e.preventDefault();const n=Kt.getBoundingClientRect();nt.analog.pointerDown(e.pointerId,e.clientX,e.clientY,Math.min(n.width,n.height)*.42),Kt.classList.add("dragging");try{Kt.setPointerCapture(e.pointerId)}catch{}Ie.start()});Kt.addEventListener("pointermove",e=>{if(nt.analog.pointerId!==e.pointerId)return;e.preventDefault();const n=Kt.getBoundingClientRect();nt.analog.pointerMove(e.pointerId,e.clientX,e.clientY);const t=Math.min(n.width,n.height)*.32;Ys.style.transform=`translate(${nt.analog.x*t}px,${nt.analog.y*t}px)`});const vr=e=>{nt.analog.pointerUp(e.pointerId),Ys.style.transform="translate(0,0)",Kt.classList.remove("dragging")};Kt.addEventListener("pointerup",vr);Kt.addEventListener("pointercancel",vr);Kt.addEventListener("lostpointercapture",vr);window.addEventListener("blur",()=>ur());document.addEventListener("visibilitychange",()=>{di=performance.now(),document.hidden&&(Ie.suspend(),ur(),tn=!0,Z("#pause-panel").classList.remove("hidden"),$t())});window.addEventListener("pointermove",e=>{Rn==="free"&&e.buttons&&(Za-=e.movementX*.004,ni=st.clamp(ni-e.movementY*.003,-.3,1.1))});let rs=0,ya=60;function fm(e){const n=Y.pos,t=li(Y.yaw),i=Math.min(1,Y.speed/28),r=Math.max(-35,Math.min(35,(Y.speed-rs)/Math.max(e,.001)));rs=Y.speed;let a,o;if(Rn==="hood")a=n.clone().add(new ne(0,2.3,0)).addScaledVector(t,1.2),o=a.clone().addScaledVector(t,7).add(new ne(0,.3,0));else if(Rn==="free"){const p=new ne(Math.sin(Za)*Math.cos(ni),Math.sin(ni),Math.cos(Za)*Math.cos(ni));a=n.clone().add(new ne(0,1.5,0)),o=a.clone().addScaledVector(p,-14)}else{const p=Rn==="far",d=(p?30:11.8)+i*(p?8:3.8),h=(p?10:5.35)+i*1.6;a=n.clone().add(new ne(0,1.4,0)).addScaledVector(t,Y.speed*.2),o=n.clone().addScaledVector(t,-d).add(new ne(0,h,0)).addScaledVector(Y.vel,-.11),p||o.addScaledVector(rr(Y.yaw),2.3),o.addScaledVector(t,-st.clamp(r*.018,-.8,.8))}const s=a;Gt>0&&(o.x+=(Math.random()-.5)*Gt,o.y+=(Math.random()-.5)*Gt,Gt=Math.max(0,Gt-e*1.3)),Je.position.lerp(o,1-Math.exp(-(5.4-i*.65)*e)),Je.lookAt(s);const c=60+i*4.5;Math.abs(c-ya)>.15&&(ya=c,Je.fov=ya,Je.updateProjectionMatrix())}let os=Number.NaN,ss=Number.NaN;function Ks(e){requestAnimationFrame(Ks);const n=performance.now(),t=Math.min((e-di)/1e3,.045);if(di=e,e-es>400){es=e;const d=He.progress;d.phase==="features"?Z("#geo-status").textContent="MAPPING WORLD":d.phase==="buildings"?Z("#geo-status").textContent=`BUILDING WORLD · ${d.total?Math.round(d.complete/d.total*100):0}%`:d.phase==="batching"||d.phase==="colliders"?Z("#geo-status").textContent="PREPARING WORLD":d.phase==="roads"&&(Z("#geo-status").textContent="MAPPING ROADS")}if(!tn){const d=nt.update(!Y.grounded),h=Y.grounded,g=Y.vel.y,m=performance.now();Y.update(t,d,tt,sn,fi),ns=performance.now()-m,fn.classList.toggle("airborne",!Y.grounded);const M=pt.update({grounded:Y.grounded,airtime:Y.airTime,pitch:Y.pitch,roll:Y.roll,landingSpeed:Math.abs(g)});if(!h&&Y.grounded&&(Gs=Math.abs(g),ks=M),h&&!Y.grounded&&d.jump&&(Ie.jump(),Gt=Math.max(Gt,.07)),!h&&Y.grounded&&(Ie.landing(Math.min(1,Math.abs(g)/20)),on.burst(new ne(Y.pos.x,Y.pos.y-1.35,Y.pos.z),Math.round(5+Math.min(14,Math.abs(g)*.65)),/moab|utah|desert/i.test(Yt.name)?13019253:10130044),Gt=Math.max(Gt,Math.min(.28,Math.abs(g)*.008)),M&&(Ht(`${M.message}  +${M.points.toLocaleString()} PTS`),pt.bestScore>$a())))try{localStorage.setItem(Ka,String(pt.bestScore))}catch{}const E=kt.step(Y.pos,Y.yaw,t,Y.vel);if(E){const l=He.break(E.building);if(kt.removeBuilding(E.building),l){Ni++;const b=Math.round(100+Math.min(420,E.building.h*12)+E.intensity*120);pt.awardBonus(b);try{pt.bestScore>$a()&&localStorage.setItem(Ka,String(pt.bestScore))}catch{}An.destroy(E.building,E,(A,x)=>tt.heightAt(A,x)),on.burst(E.position,Math.round(22+E.intensity*20),16752988),Y.vel.addScaledVector(E.normal,-(1.5+E.intensity*4)),Y.vel.y+=1+E.intensity*2.5,Gt=Math.max(Gt,.2+E.intensity*.48),Ie.impact(E.intensity),Ht(Ni>1?`MULTI-SMASH · +${b} PTS`:`BUILDING SMASHED · DEMOLITION BONUS +${b}`)}}const f=Math.abs(Y.vel.dot(rr(Y.yaw)));for(let l=0;l<Y.wheelContacts.length;l++){const b=Y.wheelContacts[l];b.contact&&on.dust(new ne(b.x,b.height+.07,b.z),Y.speed*(f>Y.speed*.28?1.5:1))}if(d.nitro&&Y.nitro>0&&Math.random()<t*8){const l=Y.pos.clone().addScaledVector(li(Y.yaw),-1.72);on.burst(l.add(new ne((Math.random()-.5)*.9,.9,(Math.random()-.5)*.35)),1,16742965)}on.update(t),An.update(t),He.updateVisibility(Y.pos.x,Y.pos.z,Ot==="low"?500:Ot==="medium"?800:1100),Ie.update(Y.speed,Math.max(0,d.throttle),d.nitro&&Y.nitro>0,Math.max(d.handbrake?.55:0,f/Math.max(4,Y.speed)),t),fm(t),e-Jo>550&&(Jo=e,He.updateStreetLabels(Y.pos.x,Y.pos.z,Y.yaw,Bs))}const i=Math.floor(Y.pos.x/40),r=Math.floor(Y.pos.z/40);if(i!==os||r!==ss){os=i,ss=r;const d=i*40,h=r*40;gt.position.set(d-125,Y.pos.y+250,h+95),gt.target.position.set(d,0,h),gt.target.updateMatrixWorld(),gt.shadow.needsUpdate=!0}$i.position.copy(Je.position);const a=Y.wheelContacts.reduce((d,h)=>Math.max(d,h.height),-1/0),o=Number.isFinite(a)?a:tt.heightAt(Y.pos.x,Y.pos.z),s=st.clamp(Y.pos.y-o,0,80);ci.position.set(Y.pos.x,o+.035,Y.pos.z),ci.scale.set(1.35+s*.055,2+s*.07,1),Z("#speed").textContent=String(Math.round(Y.speed*3.6)).padStart(3,"0"),Z("#speed-bar").style.width=`${Math.min(100,Y.speed/30*100)}%`,Z("#nitro-bar").style.width=`${Y.nitro}%`,Z("#nitro-state").textContent=Y.nitro>5?"READY TO BURN":"RECHARGING",Z("#air-time").textContent=`${pt.airtime.toFixed(1)}s`,Z("#stunt-score").textContent=pt.currentPoints.toLocaleString(),Z("#stunt-best").textContent=pt.bestScore.toLocaleString(),e-jo>900&&tt.frame&&(jo=e,Z("#street-name").textContent=He.nearestStreetName(Y.pos.x,Y.pos.z,tt.frame)||""),He.updateCollisionWindow(Y.pos.x,Y.pos.z,kt),Gn.update(Y.pos.x,Y.pos.z),Z("#level-hint").textContent=pt.isAirborne?nt.state.level?"LEVELING…":"F / LEVEL TO RIGHT":"",Z("#touch-level").classList.toggle("active",nt.state.level??!1);const c=performance.now();_t.render(Et,Je),ts=performance.now()-c;const p=performance.now()-n;if(Ra+=p,yi=Math.max(yi,p),Ci++,e-Aa>=1e3){const d=tt.takePerformanceSample();window.__monsterMapMetrics={fps:Math.round(Ci*1e3/(e-Aa)),frameMs:Math.round(Ra/Ci*10)/10,frameMsMax:Math.round(yi*10)/10,physicsMs:+ns.toFixed(2),renderMs:+ts.toFixed(2),terrainSampleMs:+d.heightSampleMs.toFixed(3),terrainSamples:d.heightSamples,terrainTileBuildMs:+d.tileBuildMs.toFixed(3),terrainTileBuilds:d.tileBuilds,pixelRatio:_t.getPixelRatio(),graphicsQuality:Ot,drawCalls:_t.info.render.calls,triangles:_t.info.render.triangles,geometries:_t.info.memory.geometries,textures:_t.info.memory.textures,heapMB:cm(),audioState:Ie.getState(),audioRms:+Ie.outputRms().toFixed(4),audioMuted:Ie.isMuted(),volume:Ie.getMasterVolume(),sceneryInstances:Gn.instanceCount,activeBuildingColliders:He.activeCollisionCount,gpuRenderer:rm,geoLoadPhase:He.progress.phase,geoLoadPercent:He.progress.total?Math.round(He.progress.complete/He.progress.total*100):0,speed:Y.speed,position:[Y.pos.x,Y.pos.y,Y.pos.z],destroyed:Ni,activeDebris:An.activeCount,osmBuildings:He.status.buildings,osmRoads:He.status.roads,streetLabels:He.streetLabelCount,worldDataSource:He.status.source,yaw:Y.yaw,pitch:Y.pitch,roll:Y.roll,steer:nt.state.steer,throttle:nt.state.throttle,nitro:nt.state.nitro,jump:nt.state.jump,grounded:Y.grounded,activeTouchActions:nt.touches.size,frontWheelAngles:sn.frontWheels.map(h=>h.rotation.y),rearWheelAngles:sn.wheels.filter(h=>!sn.frontWheels.includes(h)).map(h=>h.rotation.y),wheelContacts:Y.wheelContacts.filter(h=>h.contact).length,averageCompression:Y.wheelContacts.reduce((h,g)=>h+g.compression,0)/Math.max(1,Y.wheelContacts.length),contactPitch:Y.contactPitch,contactRoll:Y.contactRoll,terrainOriginHeight:tt.heightAt(0,0),stuntAirtime:pt.airtime,stuntPoints:pt.currentPoints,bestStunt:pt.bestScore,stuntRolls:pt.rolls,stuntFlips:pt.flips,leveling:nt.state.level??!1},Ci=0,Ra=0,yi=0,Aa=e}}function ji(){const e=lr();_t.setPixelRatio(Math.min(devicePixelRatio||1,sr(Ot))),_t.setSize(e.width,e.height),Je.aspect=e.width/Math.max(1,e.height),Je.updateProjectionMatrix(),Bs.viewport={width:e.width,height:e.height},rn?.resize()}window.addEventListener("resize",ji);window.addEventListener("orientationchange",()=>setTimeout(ji,180));window.visualViewport?.addEventListener("resize",ji);const $s=Z("#game");$s.addEventListener("webglcontextlost",e=>{e.preventDefault(),nt.releaseAll(),tn=!0,Z("#pause-panel").classList.remove("hidden"),$t(),Ht("Graphics paused. Return to the game when ready.")});$s.addEventListener("webglcontextrestored",()=>{di=performance.now(),ji(),Ht("Graphics restored.")});await Zi(Yt);requestAnimationFrame(Ks);
