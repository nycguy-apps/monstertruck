const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./collision-world-CbzMsxrv.js","./three.core-yorVyHlg.js"])))=>i.map(i=>d[i]);
import{c as Lo,N as Yt,S as Uo,C as We,F as Kr,M as Gt,V as ae,R as Do,a as gt,w as Hi,W as Ta,b as En,d as at,L as yn,H as ci,U as un,D as Ut,B as Mt,e as Gn,f as di,p as Io,E as No,g as pt,P as Un,A as Oo,h as Si,i as Ot,j as ri,k as aa,l as Hn,m as Vn,n as $r,o as Fo,q as _n,r as oi,s as Bo,t as Go,u as bn,O as Ho,v as Vo,x as ko,y as zo,z as Wo,G as Xo,I as qo,J as Yo,K as Ko,Q as $o,T as Zo,X as Qo,Y as Jo,Z as jo,_ as es,$ as ts,a0 as ns,a1 as is,a2 as Ei,a3 as gn,a4 as $n,a5 as as,a6 as Dn,a7 as rs,a8 as os,a9 as ss,aa as ls,ab as Zr,ac as cs,ad as ds,ae as fs,af as us,ag as He,ah as ps,ai as hs,aj as ms,ak as Vt,al as kn,am as ln,an as rt,ao as Qr,ap as cn,aq as Nt,ar as si,as as Jr,at as jr,au as eo,av as to,aw as _s,ax as gs,ay as vs,az as Ss,aA as no,aB as rn,aC as Es,aD as Ms,aE as xs,aF as io,aG as Ts,aH as ao,aI as ro,aJ as Mi,aK as xi,aL as Ti,aM as Ai,aN as $e,aO as Aa,aP as ba,aQ as Ra,aR as wa,aS as Ca,aT as Pa,aU as ya,aV as La,aW as Ua,aX as Da,aY as Ia,aZ as Na,a_ as Oa,a$ as Fa,b0 as Ba,b1 as Ga,b2 as Ha,b3 as Va,b4 as ka,b5 as za,b6 as Wa,b7 as Xa,b8 as qa,b9 as Ya,ba as Ka,bb as $a,bc as Za,bd as Qa,be as Vi,bf as ki,bg as zi,bh as Wi,bi as Xi,bj as qi,bk as Yi,bl as As,bm as Ja,bn as bs,bo as ni,bp as Rs,bq as ja,br as er,bs as tr,bt as Ki,bu as $i,bv as ws,bw as oo,bx as Cs,by as fi,bz as Ps,bA as ys,bB as so,bC as pn,bD as nr,bE as In,bF as ir,bG as lo,bH as zn,bI as Mn,bJ as Ls,bK as co,bL as Us,bM as Ds,bN as Is,bO as ar,bP as mt,bQ as Ns,bR as Os,bS as Fs,bT as Bs,bU as Gs,bV as fo,bW as Hs,bX as Vs,bY as ks,bZ as zs,b_ as Ws,b$ as Xs,c0 as qs,c1 as Ys,c2 as Ks,c3 as $s,c4 as Zs,c5 as Qs,c6 as on,c7 as wt,c8 as Pt,c9 as rr,ca as Zi,cb as uo,cc as zt,cd as or,ce as Js,cf as bi,cg as sr,ch as lr,ci as cr,cj as tn,ck as po,cl as js,cm as el,cn as tl,co as ho,cp as nl,cq as il,cr as al}from"./three.core-yorVyHlg.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const rl="modulepreload",ol=function(e,n){return new URL(e,n).href},dr={},Qi=function(n,t,i){let r=Promise.resolve();if(t&&t.length>0){let s=function(m){return Promise.all(m.map(p=>Promise.resolve(p).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const o=document.getElementsByTagName("link"),h=document.querySelector("meta[property=csp-nonce]"),f=h?.nonce||h?.getAttribute("nonce");r=s(t.map(m=>{if(m=ol(m,i),m in dr)return;dr[m]=!0;const p=m.endsWith(".css"),g=p?'[rel="stylesheet"]':"";if(!!i)for(let M=o.length-1;M>=0;M--){const d=o[M];if(d.href===m&&(!p||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${g}`))return;const A=document.createElement("link");if(A.rel=p?"stylesheet":rl,p||(A.as="script"),A.crossOrigin="",A.href=m,f&&A.setAttribute("nonce",f),document.head.appendChild(A),p)return new Promise((M,d)=>{A.addEventListener("load",M),A.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${m}`)))})}))}function a(s){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s}return r.then(s=>{for(const o of s||[])o.status==="rejected"&&a(o.reason);return n().catch(a)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function mo(){let e=null,n=!1,t=null,i=null;function r(a,s){t(a,s),i=e.requestAnimationFrame(r)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(r),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(a){t=a},setContext:function(a){e=a}}}function sl(e){const n=new WeakMap;function t(o,h){const f=o.array,m=o.usage,p=f.byteLength,g=e.createBuffer();e.bindBuffer(h,g),e.bufferData(h,f,m),o.onUploadCallback();let E;if(f instanceof Float32Array)E=e.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)E=e.HALF_FLOAT;else if(f instanceof Uint16Array)o.isFloat16BufferAttribute?E=e.HALF_FLOAT:E=e.UNSIGNED_SHORT;else if(f instanceof Int16Array)E=e.SHORT;else if(f instanceof Uint32Array)E=e.UNSIGNED_INT;else if(f instanceof Int32Array)E=e.INT;else if(f instanceof Int8Array)E=e.BYTE;else if(f instanceof Uint8Array)E=e.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)E=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:E,bytesPerElement:f.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,h,f){const m=h.array,p=h.updateRanges;if(e.bindBuffer(f,o),p.length===0)e.bufferSubData(f,0,m);else{p.sort((E,A)=>E.start-A.start);let g=0;for(let E=1;E<p.length;E++){const A=p[g],M=p[E];M.start<=A.start+A.count+1?A.count=Math.max(A.count,M.start+M.count-A.start):(++g,p[g]=M)}p.length=g+1;for(let E=0,A=p.length;E<A;E++){const M=p[E];e.bufferSubData(f,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}h.clearUpdateRanges()}h.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),n.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const h=n.get(o);h&&(e.deleteBuffer(h.buffer),n.delete(o))}function s(o,h){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const m=n.get(o);(!m||m.version<o.version)&&n.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const f=n.get(o);if(f===void 0)n.set(o,t(o,h));else if(f.version<o.version){if(f.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,o,h),f.version=o.version}}return{get:r,remove:a,update:s}}var ll=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cl=`#ifdef USE_ALPHAHASH
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
#endif`,dl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ul=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hl=`#ifdef USE_AOMAP
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
#endif`,ml=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_l=`#ifdef USE_BATCHING
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
#endif`,gl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,El=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ml=`#ifdef USE_IRIDESCENCE
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
#endif`,xl=`#ifdef USE_BUMPMAP
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
#endif`,Tl=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Al=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yl=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ll=`#define PI 3.141592653589793
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
} // validated`,Ul=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dl=`vec3 transformedNormal = objectNormal;
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
#endif`,Il=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ol=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bl="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gl=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hl=`#ifdef USE_ENVMAP
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
#endif`,Vl=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kl=`#ifdef USE_ENVMAP
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
#endif`,zl=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wl=`#ifdef USE_ENVMAP
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
#endif`,Xl=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ql=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yl=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kl=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$l=`#ifdef USE_GRADIENTMAP
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
}`,Zl=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ql=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jl=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jl=`uniform bool receiveShadow;
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
#endif`,ec=`#ifdef USE_ENVMAP
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
#endif`,tc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ic=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ac=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rc=`PhysicalMaterial material;
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
#endif`,oc=`struct PhysicalMaterial {
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
}`,sc=`
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
#endif`,cc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_c=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gc=`#if defined( USE_POINTS_UV )
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
#endif`,vc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ec=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mc=`#if defined( USE_MORPHCOLORS )
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
#endif`,Tc=`#ifdef USE_MORPHTARGETS
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
#endif`,Ac=`#ifdef USE_MORPHTARGETS
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
vec3 nonPerturbedNormal = normal;`,Rc=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yc=`#ifdef USE_NORMALMAP
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
#endif`,Lc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Uc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ic=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Oc=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
}`,Yc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kc=`#ifdef USE_SKINNING
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
#endif`,$c=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zc=`#ifdef USE_SKINNING
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
#endif`,Qc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jc=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ed=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,td=`#ifdef USE_TRANSMISSION
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
#endif`,nd=`#ifdef USE_TRANSMISSION
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
#endif`,id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ad=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,od=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ld=`uniform sampler2D t2D;
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
}`,cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ud=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pd=`#include <common>
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
}`,hd=`#if DEPTH_PACKING == 3200
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
}`,md=`#define DISTANCE
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
}`,_d=`#define DISTANCE
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
}`,gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sd=`uniform float scale;
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
}`,Ed=`uniform vec3 diffuse;
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
}`,Md=`#include <common>
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
}`,xd=`uniform vec3 diffuse;
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
}`,Td=`#define LAMBERT
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
}`,Ad=`#define LAMBERT
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
}`,bd=`#define MATCAP
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
}`,Rd=`#define MATCAP
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
}`,wd=`#define NORMAL
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
}`,Cd=`#define NORMAL
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
}`,Pd=`#define PHONG
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
}`,yd=`#define PHONG
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
}`,Ld=`#define STANDARD
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
}`,Ud=`#define STANDARD
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
}`,Dd=`#define TOON
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
}`,Id=`#define TOON
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
}`,Nd=`uniform float size;
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
}`,Od=`uniform vec3 diffuse;
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
}`,Fd=`#include <common>
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
}`,Bd=`uniform vec3 color;
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
}`,Gd=`uniform float rotation;
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
}`,Hd=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:ll,alphahash_pars_fragment:cl,alphamap_fragment:dl,alphamap_pars_fragment:fl,alphatest_fragment:ul,alphatest_pars_fragment:pl,aomap_fragment:hl,aomap_pars_fragment:ml,batching_pars_vertex:_l,batching_vertex:gl,begin_vertex:vl,beginnormal_vertex:Sl,bsdfs:El,iridescence_fragment:Ml,bumpmap_pars_fragment:xl,clipping_planes_fragment:Tl,clipping_planes_pars_fragment:Al,clipping_planes_pars_vertex:bl,clipping_planes_vertex:Rl,color_fragment:wl,color_pars_fragment:Cl,color_pars_vertex:Pl,color_vertex:yl,common:Ll,cube_uv_reflection_fragment:Ul,defaultnormal_vertex:Dl,displacementmap_pars_vertex:Il,displacementmap_vertex:Nl,emissivemap_fragment:Ol,emissivemap_pars_fragment:Fl,colorspace_fragment:Bl,colorspace_pars_fragment:Gl,envmap_fragment:Hl,envmap_common_pars_fragment:Vl,envmap_pars_fragment:kl,envmap_pars_vertex:zl,envmap_physical_pars_fragment:ec,envmap_vertex:Wl,fog_vertex:Xl,fog_pars_vertex:ql,fog_fragment:Yl,fog_pars_fragment:Kl,gradientmap_pars_fragment:$l,lightmap_pars_fragment:Zl,lights_lambert_fragment:Ql,lights_lambert_pars_fragment:Jl,lights_pars_begin:jl,lights_toon_fragment:tc,lights_toon_pars_fragment:nc,lights_phong_fragment:ic,lights_phong_pars_fragment:ac,lights_physical_fragment:rc,lights_physical_pars_fragment:oc,lights_fragment_begin:sc,lights_fragment_maps:lc,lights_fragment_end:cc,logdepthbuf_fragment:dc,logdepthbuf_pars_fragment:fc,logdepthbuf_pars_vertex:uc,logdepthbuf_vertex:pc,map_fragment:hc,map_pars_fragment:mc,map_particle_fragment:_c,map_particle_pars_fragment:gc,metalnessmap_fragment:vc,metalnessmap_pars_fragment:Sc,morphinstance_vertex:Ec,morphcolor_vertex:Mc,morphnormal_vertex:xc,morphtarget_pars_vertex:Tc,morphtarget_vertex:Ac,normal_fragment_begin:bc,normal_fragment_maps:Rc,normal_pars_fragment:wc,normal_pars_vertex:Cc,normal_vertex:Pc,normalmap_pars_fragment:yc,clearcoat_normal_fragment_begin:Lc,clearcoat_normal_fragment_maps:Uc,clearcoat_pars_fragment:Dc,iridescence_pars_fragment:Ic,opaque_fragment:Nc,packing:Oc,premultiplied_alpha_fragment:Fc,project_vertex:Bc,dithering_fragment:Gc,dithering_pars_fragment:Hc,roughnessmap_fragment:Vc,roughnessmap_pars_fragment:kc,shadowmap_pars_fragment:zc,shadowmap_pars_vertex:Wc,shadowmap_vertex:Xc,shadowmask_pars_fragment:qc,skinbase_vertex:Yc,skinning_pars_vertex:Kc,skinning_vertex:$c,skinnormal_vertex:Zc,specularmap_fragment:Qc,specularmap_pars_fragment:Jc,tonemapping_fragment:jc,tonemapping_pars_fragment:ed,transmission_fragment:td,transmission_pars_fragment:nd,uv_pars_fragment:id,uv_pars_vertex:ad,uv_vertex:rd,worldpos_vertex:od,background_vert:sd,background_frag:ld,backgroundCube_vert:cd,backgroundCube_frag:dd,cube_vert:fd,cube_frag:ud,depth_vert:pd,depth_frag:hd,distanceRGBA_vert:md,distanceRGBA_frag:_d,equirect_vert:gd,equirect_frag:vd,linedashed_vert:Sd,linedashed_frag:Ed,meshbasic_vert:Md,meshbasic_frag:xd,meshlambert_vert:Td,meshlambert_frag:Ad,meshmatcap_vert:bd,meshmatcap_frag:Rd,meshnormal_vert:wd,meshnormal_frag:Cd,meshphong_vert:Pd,meshphong_frag:yd,meshphysical_vert:Ld,meshphysical_frag:Ud,meshtoon_vert:Dd,meshtoon_frag:Id,points_vert:Nd,points_frag:Od,shadow_vert:Fd,shadow_frag:Bd,sprite_vert:Gd,sprite_frag:Hd},ie={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Lt={basic:{uniforms:mt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:mt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new We(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:mt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:mt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:mt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new We(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:mt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:mt([ie.points,ie.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:mt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:mt([ie.common,ie.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:mt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:mt([ie.sprite,ie.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:mt([ie.common,ie.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:mt([ie.lights,ie.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Lt.physical={uniforms:mt([Lt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Zn={r:0,b:0,g:0},jt=new In,Vd=new Gt;function kd(e,n,t,i,r,a,s){const o=new We(0);let h=a===!0?0:1,f,m,p=null,g=0,E=null;function A(R){let x=R.isScene===!0?R.background:null;return x&&x.isTexture&&(x=(R.backgroundBlurriness>0?t:n).get(x)),x}function M(R){let x=!1;const L=A(R);L===null?l(o,h):L&&L.isColor&&(l(L,1),x=!0);const P=e.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,s):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function d(R,x){const L=A(x);L&&(L.isCubeTexture||L.mapping===fi)?(m===void 0&&(m=new rt(new pn(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:nr(Lt.backgroundCube.uniforms),vertexShader:Lt.backgroundCube.vertexShader,fragmentShader:Lt.backgroundCube.fragmentShader,side:Mt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(P,I,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),jt.copy(x.backgroundRotation),jt.x*=-1,jt.y*=-1,jt.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(jt.y*=-1,jt.z*=-1),m.material.uniforms.envMap.value=L,m.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(Vd.makeRotationFromEuler(jt)),m.material.toneMapped=at.getTransfer(L.colorSpace)!==$e,(p!==L||g!==L.version||E!==e.toneMapping)&&(m.material.needsUpdate=!0,p=L,g=L.version,E=e.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null)):L&&L.isTexture&&(f===void 0&&(f=new rt(new to(2,2),new Vt({name:"BackgroundMaterial",uniforms:nr(Lt.background.uniforms),vertexShader:Lt.background.vertexShader,fragmentShader:Lt.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=L,f.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,f.material.toneMapped=at.getTransfer(L.colorSpace)!==$e,L.matrixAutoUpdate===!0&&L.updateMatrix(),f.material.uniforms.uvTransform.value.copy(L.matrix),(p!==L||g!==L.version||E!==e.toneMapping)&&(f.material.needsUpdate=!0,p=L,g=L.version,E=e.toneMapping),f.layers.enableAll(),R.unshift(f,f.geometry,f.material,0,0,null))}function l(R,x){R.getRGB(Zn,so(e)),i.buffers.color.setClear(Zn.r,Zn.g,Zn.b,x,s)}function w(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return o},setClearColor:function(R,x=1){o.set(R),h=x,l(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(R){h=R,l(o,h)},render:M,addToRenderList:d,dispose:w}}function zd(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},r=g(null);let a=r,s=!1;function o(_,U,B,X,q){let $=!1;const W=p(X,B,U);a!==W&&(a=W,f(a.object)),$=E(_,X,B,q),$&&A(_,X,B,q),q!==null&&n.update(q,e.ELEMENT_ARRAY_BUFFER),($||s)&&(s=!1,x(_,U,B,X),q!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(q).buffer))}function h(){return e.createVertexArray()}function f(_){return e.bindVertexArray(_)}function m(_){return e.deleteVertexArray(_)}function p(_,U,B){const X=B.wireframe===!0;let q=i[_.id];q===void 0&&(q={},i[_.id]=q);let $=q[U.id];$===void 0&&($={},q[U.id]=$);let W=$[X];return W===void 0&&(W=g(h()),$[X]=W),W}function g(_){const U=[],B=[],X=[];for(let q=0;q<t;q++)U[q]=0,B[q]=0,X[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:B,attributeDivisors:X,object:_,attributes:{},index:null}}function E(_,U,B,X){const q=a.attributes,$=U.attributes;let W=0;const ne=B.getAttributes();for(const V in ne)if(ne[V].location>=0){const be=q[V];let Ie=$[V];if(Ie===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(Ie=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(Ie=_.instanceColor)),be===void 0||be.attribute!==Ie||Ie&&be.data!==Ie.data)return!0;W++}return a.attributesNum!==W||a.index!==X}function A(_,U,B,X){const q={},$=U.attributes;let W=0;const ne=B.getAttributes();for(const V in ne)if(ne[V].location>=0){let be=$[V];be===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(be=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(be=_.instanceColor));const Ie={};Ie.attribute=be,be&&be.data&&(Ie.data=be.data),q[V]=Ie,W++}a.attributes=q,a.attributesNum=W,a.index=X}function M(){const _=a.newAttributes;for(let U=0,B=_.length;U<B;U++)_[U]=0}function d(_){l(_,0)}function l(_,U){const B=a.newAttributes,X=a.enabledAttributes,q=a.attributeDivisors;B[_]=1,X[_]===0&&(e.enableVertexAttribArray(_),X[_]=1),q[_]!==U&&(e.vertexAttribDivisor(_,U),q[_]=U)}function w(){const _=a.newAttributes,U=a.enabledAttributes;for(let B=0,X=U.length;B<X;B++)U[B]!==_[B]&&(e.disableVertexAttribArray(B),U[B]=0)}function R(_,U,B,X,q,$,W){W===!0?e.vertexAttribIPointer(_,U,B,q,$):e.vertexAttribPointer(_,U,B,X,q,$)}function x(_,U,B,X){M();const q=X.attributes,$=B.getAttributes(),W=U.defaultAttributeValues;for(const ne in $){const V=$[ne];if(V.location>=0){let Ee=q[ne];if(Ee===void 0&&(ne==="instanceMatrix"&&_.instanceMatrix&&(Ee=_.instanceMatrix),ne==="instanceColor"&&_.instanceColor&&(Ee=_.instanceColor)),Ee!==void 0){const be=Ee.normalized,Ie=Ee.itemSize,Ve=n.get(Ee);if(Ve===void 0)continue;const nt=Ve.buffer,et=Ve.type,Xe=Ve.bytesPerElement,k=et===e.INT||et===e.UNSIGNED_INT||Ee.gpuType===no;if(Ee.isInterleavedBufferAttribute){const K=Ee.data,de=K.stride,ye=Ee.offset;if(K.isInstancedInterleavedBuffer){for(let xe=0;xe<V.locationSize;xe++)l(V.location+xe,K.meshPerAttribute);_.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let xe=0;xe<V.locationSize;xe++)d(V.location+xe);e.bindBuffer(e.ARRAY_BUFFER,nt);for(let xe=0;xe<V.locationSize;xe++)R(V.location+xe,Ie/V.locationSize,et,be,de*Xe,(ye+Ie/V.locationSize*xe)*Xe,k)}else{if(Ee.isInstancedBufferAttribute){for(let K=0;K<V.locationSize;K++)l(V.location+K,Ee.meshPerAttribute);_.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let K=0;K<V.locationSize;K++)d(V.location+K);e.bindBuffer(e.ARRAY_BUFFER,nt);for(let K=0;K<V.locationSize;K++)R(V.location+K,Ie/V.locationSize,et,be,Ie*Xe,Ie/V.locationSize*K*Xe,k)}}else if(W!==void 0){const be=W[ne];if(be!==void 0)switch(be.length){case 2:e.vertexAttrib2fv(V.location,be);break;case 3:e.vertexAttrib3fv(V.location,be);break;case 4:e.vertexAttrib4fv(V.location,be);break;default:e.vertexAttrib1fv(V.location,be)}}}}w()}function L(){G();for(const _ in i){const U=i[_];for(const B in U){const X=U[B];for(const q in X)m(X[q].object),delete X[q];delete U[B]}delete i[_]}}function P(_){if(i[_.id]===void 0)return;const U=i[_.id];for(const B in U){const X=U[B];for(const q in X)m(X[q].object),delete X[q];delete U[B]}delete i[_.id]}function I(_){for(const U in i){const B=i[U];if(B[_.id]===void 0)continue;const X=B[_.id];for(const q in X)m(X[q].object),delete X[q];delete B[_.id]}}function G(){v(),s=!0,a!==r&&(a=r,f(a.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:G,resetDefaultState:v,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:d,disableUnusedAttributes:w}}function Wd(e,n,t){let i;function r(f){i=f}function a(f,m){e.drawArrays(i,f,m),t.update(m,i,1)}function s(f,m,p){p!==0&&(e.drawArraysInstanced(i,f,m,p),t.update(m,i,p))}function o(f,m,p){if(p===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,m,0,p);let E=0;for(let A=0;A<p;A++)E+=m[A];t.update(E,i,1)}function h(f,m,p,g){if(p===0)return;const E=n.get("WEBGL_multi_draw");if(E===null)for(let A=0;A<f.length;A++)s(f[A],m[A],g[A]);else{E.multiDrawArraysInstancedWEBGL(i,f,0,m,0,g,0,p);let A=0;for(let M=0;M<p;M++)A+=m[M]*g[M];t.update(A,i,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=h}function Xd(e,n,t,i){let r;function a(){if(r!==void 0)return r;if(n.has("EXT_texture_filter_anisotropic")===!0){const I=n.get("EXT_texture_filter_anisotropic");r=e.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(I){return!(I!==Ot&&i.convert(I)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const G=I===ci&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(I!==un&&i.convert(I)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==rn&&!G)}function h(I){if(I==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const m=h(f);m!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",m,"instead."),f=m);const p=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),E=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),A=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),d=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),l=e.getParameter(e.MAX_VERTEX_ATTRIBS),w=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),R=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),L=A>0,P=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:s,textureTypeReadable:o,precision:f,logarithmicDepthBuffer:p,reversedDepthBuffer:g,maxTextures:E,maxVertexTextures:A,maxTextureSize:M,maxCubemapSize:d,maxAttributes:l,maxVertexUniforms:w,maxVaryings:R,maxFragmentUniforms:x,vertexTextures:L,maxSamples:P}}function qd(e){const n=this;let t=null,i=0,r=!1,a=!1;const s=new us,o=new He,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(p,g){const E=p.length!==0||g||i!==0||r;return r=g,i=p.length,E},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,g){t=m(p,g,0)},this.setState=function(p,g,E){const A=p.clippingPlanes,M=p.clipIntersection,d=p.clipShadows,l=e.get(p);if(!r||A===null||A.length===0||a&&!d)a?m(null):f();else{const w=a?0:i,R=w*4;let x=l.clippingState||null;h.value=x,x=m(A,g,R,E);for(let L=0;L!==R;++L)x[L]=t[L];l.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=w}};function f(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function m(p,g,E,A){const M=p!==null?p.length:0;let d=null;if(M!==0){if(d=h.value,A!==!0||d===null){const l=E+M*4,w=g.matrixWorldInverse;o.getNormalMatrix(w),(d===null||d.length<l)&&(d=new Float32Array(l));for(let R=0,x=E;R!==M;++R,x+=4)s.copy(p[R]).applyMatrix4(w,o),s.normal.toArray(d,x),d[x+3]=s.constant}h.value=d,h.needsUpdate=!0}return n.numPlanes=M,n.numIntersection=0,d}}function Yd(e){let n=new WeakMap;function t(s,o){return o===Ki?s.mapping=zn:o===$i&&(s.mapping=Mn),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===Ki||o===$i)if(n.has(s)){const h=n.get(s).texture;return t(h,s.mapping)}else{const h=s.image;if(h&&h.height>0){const f=new ws(h.height);return f.fromEquirectangularTexture(e,s),n.set(s,f),s.addEventListener("dispose",r),t(f.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const h=n.get(o);h!==void 0&&(n.delete(o),h.dispose())}function a(){n=new WeakMap}return{get:i,dispose:a}}const vn=4,fr=[.125,.215,.35,.446,.526,.582],an=20,Ri=new Ls,ur=new We;let wi=null,Ci=0,Pi=0,yi=!1;const nn=(1+Math.sqrt(5))/2,mn=1/nn,pr=[new ae(-nn,mn,0),new ae(nn,mn,0),new ae(-mn,0,nn),new ae(mn,0,nn),new ae(0,nn,-mn),new ae(0,nn,mn),new ae(-1,1,-1),new ae(1,1,-1),new ae(-1,1,1),new ae(1,1,1)],Kd=new ae;class hr{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,t=0,i=.1,r=100,a={}){const{size:s=256,position:o=Kd}=a;wi=this._renderer.getRenderTarget(),Ci=this._renderer.getActiveCubeFace(),Pi=this._renderer.getActiveMipmapLevel(),yi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(n,i,r,h,o),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_r(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(wi,Ci,Pi),this._renderer.xr.enabled=yi,n.scissorTest=!1,Qn(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===zn||n.mapping===Mn?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),wi=this._renderer.getRenderTarget(),Ci=this._renderer.getActiveCubeFace(),Pi=this._renderer.getActiveMipmapLevel(),yi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:ci,format:Ot,colorSpace:di,depthBuffer:!1},r=mr(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mr(n,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$d(a)),this._blurMaterial=Zd(a,n,t)}return r}_compileMaterial(n){const t=new rt(this._lodPlanes[0],n);this._renderer.compile(t,Ri)}_sceneToCubeUV(n,t,i,r,a){const h=new Un(90,1,t,i),f=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,E=p.toneMapping;p.getClearColor(ur),p.toneMapping=Yt,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null));const M=new co({name:"PMREM.Background",side:Mt,depthWrite:!1,depthTest:!1}),d=new rt(new pn,M);let l=!1;const w=n.background;w?w.isColor&&(M.color.copy(w),n.background=null,l=!0):(M.color.copy(ur),l=!0);for(let R=0;R<6;R++){const x=R%3;x===0?(h.up.set(0,f[R],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x+m[R],a.y,a.z)):x===1?(h.up.set(0,0,f[R]),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y+m[R],a.z)):(h.up.set(0,f[R],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y,a.z+m[R]));const L=this._cubeSize;Qn(r,x*L,R>2?L:0,L,L),p.setRenderTarget(r),l&&p.render(d,h),p.render(n,h)}d.geometry.dispose(),d.material.dispose(),p.toneMapping=E,p.autoClear=g,n.background=w}_textureToCubeUV(n,t){const i=this._renderer,r=n.mapping===zn||n.mapping===Mn;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gr()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_r());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new rt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=n;const h=this._cubeSize;Qn(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(s,Ri)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=pr[(r-a-1)%pr.length];this._blur(n,a-1,a,s,o)}t.autoClear=i}_blur(n,t,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(n,s,t,i,r,"latitudinal",a),this._halfBlur(s,n,i,i,r,"longitudinal",a)}_halfBlur(n,t,i,r,a,s,o){const h=this._renderer,f=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,p=new rt(this._lodPlanes[r],f),g=f.uniforms,E=this._sizeLods[i]-1,A=isFinite(a)?Math.PI/(2*E):2*Math.PI/(2*an-1),M=a/A,d=isFinite(a)?1+Math.floor(m*M):an;d>an&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${an}`);const l=[];let w=0;for(let I=0;I<an;++I){const G=I/M,v=Math.exp(-G*G/2);l.push(v),I===0?w+=v:I<d&&(w+=2*v)}for(let I=0;I<l.length;I++)l[I]=l[I]/w;g.envMap.value=n.texture,g.samples.value=d,g.weights.value=l,g.latitudinal.value=s==="latitudinal",o&&(g.poleAxis.value=o);const{_lodMax:R}=this;g.dTheta.value=A,g.mipInt.value=R-i;const x=this._sizeLods[r],L=3*x*(r>R-vn?r-R+vn:0),P=4*(this._cubeSize-x);Qn(t,L,P,3*x,2*x),h.setRenderTarget(t),h.render(p,Ri)}}function $d(e){const n=[],t=[],i=[];let r=e;const a=e-vn+1+fr.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let h=1/o;s>e-vn?h=fr[s-e+vn-1]:s===0&&(h=0),i.push(h);const f=1/(o-2),m=-f,p=1+f,g=[m,m,p,m,p,p,m,m,p,p,m,p],E=6,A=6,M=3,d=2,l=1,w=new Float32Array(M*A*E),R=new Float32Array(d*A*E),x=new Float32Array(l*A*E);for(let P=0;P<E;P++){const I=P%3*2/3-1,G=P>2?0:-1,v=[I,G,0,I+2/3,G,0,I+2/3,G+1,0,I,G,0,I+2/3,G+1,0,I,G+1,0];w.set(v,M*A*P),R.set(g,d*A*P);const _=[P,P,P,P,P,P];x.set(_,l*A*P)}const L=new kn;L.setAttribute("position",new ln(w,M)),L.setAttribute("uv",new ln(R,d)),L.setAttribute("faceIndex",new ln(x,l)),n.push(L),r>vn&&r--}return{lodPlanes:n,sizeLods:t,sigmas:i}}function mr(e,n,t){const i=new En(e,n,t);return i.texture.mapping=fi,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qn(e,n,t,i,r){e.viewport.set(n,t,i,r),e.scissor.set(n,t,i,r)}function Zd(e,n,t){const i=new Float32Array(an),r=new ae(0,1,0);return new Vt({name:"SphericalGaussianBlur",defines:{n:an,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ra(),fragmentShader:`

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
		`,blending:cn,depthTest:!1,depthWrite:!1})}function _r(){return new Vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ra(),fragmentShader:`

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
		`,blending:cn,depthTest:!1,depthWrite:!1})}function gr(){return new Vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function ra(){return`

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
	`}function Qd(e){let n=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const h=o.mapping,f=h===Ki||h===$i,m=h===zn||h===Mn;if(f||m){let p=n.get(o);const g=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==g)return t===null&&(t=new hr(e)),p=f?t.fromEquirectangular(o,p):t.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,n.set(o,p),p.texture;if(p!==void 0)return p.texture;{const E=o.image;return f&&E&&E.height>0||m&&E&&r(E)?(t===null&&(t=new hr(e)),p=f?t.fromEquirectangular(o):t.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,n.set(o,p),o.addEventListener("dispose",a),p.texture):null}}}return o}function r(o){let h=0;const f=6;for(let m=0;m<f;m++)o[m]!==void 0&&h++;return h===f}function a(o){const h=o.target;h.removeEventListener("dispose",a);const f=n.get(h);f!==void 0&&(n.delete(h),f.dispose())}function s(){n=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function Jd(e){const n={};function t(i){if(n[i]!==void 0)return n[i];let r;switch(i){case"WEBGL_depth_texture":r=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=e.getExtension(i)}return n[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Hi("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function jd(e,n,t,i){const r={},a=new WeakMap;function s(p){const g=p.target;g.index!==null&&n.remove(g.index);for(const A in g.attributes)n.remove(g.attributes[A]);g.removeEventListener("dispose",s),delete r[g.id];const E=a.get(g);E&&(n.remove(E),a.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function o(p,g){return r[g.id]===!0||(g.addEventListener("dispose",s),r[g.id]=!0,t.memory.geometries++),g}function h(p){const g=p.attributes;for(const E in g)n.update(g[E],e.ARRAY_BUFFER)}function f(p){const g=[],E=p.index,A=p.attributes.position;let M=0;if(E!==null){const w=E.array;M=E.version;for(let R=0,x=w.length;R<x;R+=3){const L=w[R+0],P=w[R+1],I=w[R+2];g.push(L,P,P,I,I,L)}}else if(A!==void 0){const w=A.array;M=A.version;for(let R=0,x=w.length/3-1;R<x;R+=3){const L=R+0,P=R+1,I=R+2;g.push(L,P,P,I,I,L)}}else return;const d=new(Is(g)?Us:Ds)(g,1);d.version=M;const l=a.get(p);l&&n.remove(l),a.set(p,d)}function m(p){const g=a.get(p);if(g){const E=p.index;E!==null&&g.version<E.version&&f(p)}else f(p);return a.get(p)}return{get:o,update:h,getWireframeAttribute:m}}function ef(e,n,t){let i;function r(g){i=g}let a,s;function o(g){a=g.type,s=g.bytesPerElement}function h(g,E){e.drawElements(i,E,a,g*s),t.update(E,i,1)}function f(g,E,A){A!==0&&(e.drawElementsInstanced(i,E,a,g*s,A),t.update(E,i,A))}function m(g,E,A){if(A===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,E,0,a,g,0,A);let d=0;for(let l=0;l<A;l++)d+=E[l];t.update(d,i,1)}function p(g,E,A,M){if(A===0)return;const d=n.get("WEBGL_multi_draw");if(d===null)for(let l=0;l<g.length;l++)f(g[l]/s,E[l],M[l]);else{d.multiDrawElementsInstancedWEBGL(i,E,0,a,g,0,M,0,A);let l=0;for(let w=0;w<A;w++)l+=E[w]*M[w];t.update(l,i,1)}}this.setMode=r,this.setIndex=o,this.render=h,this.renderInstances=f,this.renderMultiDraw=m,this.renderMultiDrawInstances=p}function tf(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case e.TRIANGLES:t.triangles+=o*(a/3);break;case e.LINES:t.lines+=o*(a/2);break;case e.LINE_STRIP:t.lines+=o*(a-1);break;case e.LINE_LOOP:t.lines+=o*a;break;case e.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:r,update:i}}function nf(e,n,t){const i=new WeakMap,r=new gt;function a(s,o,h){const f=s.morphTargetInfluences,m=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=m!==void 0?m.length:0;let g=i.get(o);if(g===void 0||g.count!==p){let v=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",v)};g!==void 0&&g.texture.dispose();const E=o.morphAttributes.position!==void 0,A=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],l=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let R=0;E===!0&&(R=1),A===!0&&(R=2),M===!0&&(R=3);let x=o.attributes.position.count*R,L=1;x>n.maxTextureSize&&(L=Math.ceil(x/n.maxTextureSize),x=n.maxTextureSize);const P=new Float32Array(x*L*4*p),I=new oo(P,x,L,p);I.type=rn,I.needsUpdate=!0;const G=R*4;for(let _=0;_<p;_++){const U=d[_],B=l[_],X=w[_],q=x*L*4*_;for(let $=0;$<U.count;$++){const W=$*G;E===!0&&(r.fromBufferAttribute(U,$),P[q+W+0]=r.x,P[q+W+1]=r.y,P[q+W+2]=r.z,P[q+W+3]=0),A===!0&&(r.fromBufferAttribute(B,$),P[q+W+4]=r.x,P[q+W+5]=r.y,P[q+W+6]=r.z,P[q+W+7]=0),M===!0&&(r.fromBufferAttribute(X,$),P[q+W+8]=r.x,P[q+W+9]=r.y,P[q+W+10]=r.z,P[q+W+11]=X.itemSize===4?r.w:1)}}g={count:p,texture:I,size:new pt(x,L)},i.set(o,g),o.addEventListener("dispose",v)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)h.getUniforms().setValue(e,"morphTexture",s.morphTexture,t);else{let E=0;for(let M=0;M<f.length;M++)E+=f[M];const A=o.morphTargetsRelative?1:1-E;h.getUniforms().setValue(e,"morphTargetBaseInfluence",A),h.getUniforms().setValue(e,"morphTargetInfluences",f)}h.getUniforms().setValue(e,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(e,"morphTargetsTextureSize",g.size)}return{update:a}}function af(e,n,t,i){let r=new WeakMap;function a(h){const f=i.render.frame,m=h.geometry,p=n.get(h,m);if(r.get(p)!==f&&(n.update(p),r.set(p,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",o)===!1&&h.addEventListener("dispose",o),r.get(h)!==f&&(t.update(h.instanceMatrix,e.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,e.ARRAY_BUFFER),r.set(h,f))),h.isSkinnedMesh){const g=h.skeleton;r.get(g)!==f&&(g.update(),r.set(g,f))}return p}function s(){r=new WeakMap}function o(h){const f=h.target;f.removeEventListener("dispose",o),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:s}}const _o=new Xs,vr=new $r(1,1),go=new oo,vo=new Ws,So=new zs,Sr=[],Er=[],Mr=new Float32Array(16),xr=new Float32Array(9),Tr=new Float32Array(4);function xn(e,n,t){const i=e[0];if(i<=0||i>0)return e;const r=n*t;let a=Sr[r];if(a===void 0&&(a=new Float32Array(r),Sr[r]=a),n!==0){i.toArray(a,0);for(let s=1,o=0;s!==n;++s)o+=t,e[s].toArray(a,o)}return a}function ot(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function st(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function ui(e,n){let t=Er[n];t===void 0&&(t=new Int32Array(n),Er[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function rf(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function of(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ot(t,n))return;e.uniform2fv(this.addr,n),st(t,n)}}function sf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(ot(t,n))return;e.uniform3fv(this.addr,n),st(t,n)}}function lf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ot(t,n))return;e.uniform4fv(this.addr,n),st(t,n)}}function cf(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ot(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),st(t,n)}else{if(ot(t,i))return;Tr.set(i),e.uniformMatrix2fv(this.addr,!1,Tr),st(t,i)}}function df(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ot(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),st(t,n)}else{if(ot(t,i))return;xr.set(i),e.uniformMatrix3fv(this.addr,!1,xr),st(t,i)}}function ff(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ot(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),st(t,n)}else{if(ot(t,i))return;Mr.set(i),e.uniformMatrix4fv(this.addr,!1,Mr),st(t,i)}}function uf(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function pf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ot(t,n))return;e.uniform2iv(this.addr,n),st(t,n)}}function hf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(ot(t,n))return;e.uniform3iv(this.addr,n),st(t,n)}}function mf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ot(t,n))return;e.uniform4iv(this.addr,n),st(t,n)}}function _f(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function gf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ot(t,n))return;e.uniform2uiv(this.addr,n),st(t,n)}}function vf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(ot(t,n))return;e.uniform3uiv(this.addr,n),st(t,n)}}function Sf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ot(t,n))return;e.uniform4uiv(this.addr,n),st(t,n)}}function Ef(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);let a;this.type===e.SAMPLER_2D_SHADOW?(vr.compareFunction=Zr,a=vr):a=_o,t.setTexture2D(n||a,r)}function Mf(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(n||vo,r)}function xf(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(n||So,r)}function Tf(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(n||go,r)}function Af(e){switch(e){case 5126:return rf;case 35664:return of;case 35665:return sf;case 35666:return lf;case 35674:return cf;case 35675:return df;case 35676:return ff;case 5124:case 35670:return uf;case 35667:case 35671:return pf;case 35668:case 35672:return hf;case 35669:case 35673:return mf;case 5125:return _f;case 36294:return gf;case 36295:return vf;case 36296:return Sf;case 35678:case 36198:case 36298:case 36306:case 35682:return Ef;case 35679:case 36299:case 36307:return Mf;case 35680:case 36300:case 36308:case 36293:return xf;case 36289:case 36303:case 36311:case 36292:return Tf}}function bf(e,n){e.uniform1fv(this.addr,n)}function Rf(e,n){const t=xn(n,this.size,2);e.uniform2fv(this.addr,t)}function wf(e,n){const t=xn(n,this.size,3);e.uniform3fv(this.addr,t)}function Cf(e,n){const t=xn(n,this.size,4);e.uniform4fv(this.addr,t)}function Pf(e,n){const t=xn(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function yf(e,n){const t=xn(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function Lf(e,n){const t=xn(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function Uf(e,n){e.uniform1iv(this.addr,n)}function Df(e,n){e.uniform2iv(this.addr,n)}function If(e,n){e.uniform3iv(this.addr,n)}function Nf(e,n){e.uniform4iv(this.addr,n)}function Of(e,n){e.uniform1uiv(this.addr,n)}function Ff(e,n){e.uniform2uiv(this.addr,n)}function Bf(e,n){e.uniform3uiv(this.addr,n)}function Gf(e,n){e.uniform4uiv(this.addr,n)}function Hf(e,n,t){const i=this.cache,r=n.length,a=ui(t,r);ot(i,a)||(e.uniform1iv(this.addr,a),st(i,a));for(let s=0;s!==r;++s)t.setTexture2D(n[s]||_o,a[s])}function Vf(e,n,t){const i=this.cache,r=n.length,a=ui(t,r);ot(i,a)||(e.uniform1iv(this.addr,a),st(i,a));for(let s=0;s!==r;++s)t.setTexture3D(n[s]||vo,a[s])}function kf(e,n,t){const i=this.cache,r=n.length,a=ui(t,r);ot(i,a)||(e.uniform1iv(this.addr,a),st(i,a));for(let s=0;s!==r;++s)t.setTextureCube(n[s]||So,a[s])}function zf(e,n,t){const i=this.cache,r=n.length,a=ui(t,r);ot(i,a)||(e.uniform1iv(this.addr,a),st(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(n[s]||go,a[s])}function Wf(e){switch(e){case 5126:return bf;case 35664:return Rf;case 35665:return wf;case 35666:return Cf;case 35674:return Pf;case 35675:return yf;case 35676:return Lf;case 5124:case 35670:return Uf;case 35667:case 35671:return Df;case 35668:case 35672:return If;case 35669:case 35673:return Nf;case 5125:return Of;case 36294:return Ff;case 36295:return Bf;case 36296:return Gf;case 35678:case 36198:case 36298:case 36306:case 35682:return Hf;case 35679:case 36299:case 36307:return Vf;case 35680:case 36300:case 36308:case 36293:return kf;case 36289:case 36303:case 36311:case 36292:return zf}}class Xf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Af(t.type)}}class qf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wf(t.type)}}class Yf{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(n,t[o.id],i)}}}const Li=/(\w+)(\])?(\[|\.)?/g;function Ar(e,n){e.seq.push(n),e.map[n.id]=n}function Kf(e,n,t){const i=e.name,r=i.length;for(Li.lastIndex=0;;){const a=Li.exec(i),s=Li.lastIndex;let o=a[1];const h=a[2]==="]",f=a[3];if(h&&(o=o|0),f===void 0||f==="["&&s+2===r){Ar(t,f===void 0?new Xf(o,e,n):new qf(o,e,n));break}else{let p=t.map[o];p===void 0&&(p=new Yf(o),Ar(t,p)),t=p}}}class ii{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=n.getActiveUniform(t,r),s=n.getUniformLocation(t,a.name);Kf(a,s,this)}}setValue(n,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(n,i,r)}setOptional(n,t,i){const r=t[i];r!==void 0&&this.setValue(n,i,r)}static upload(n,t,i,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],h=i[o.id];h.needsUpdate!==!1&&o.setValue(n,h.value,r)}}static seqWithValue(n,t){const i=[];for(let r=0,a=n.length;r!==a;++r){const s=n[r];s.id in t&&i.push(s)}return i}}function br(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const $f=37297;let Zf=0;function Qf(e,n){const t=e.split(`
`),i=[],r=Math.max(n-6,0),a=Math.min(n+6,t.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===n?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const Rr=new He;function Jf(e){at._getMatrix(Rr,at.workingColorSpace,e);const n=`mat3( ${Rr.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(e)){case lo:return[n,"LinearTransferOETF"];case $e:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function wr(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),a=(e.getShaderInfoLog(n)||"").trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+Qf(e.getShaderSource(n),o)}else return a}function jf(e,n){const t=Jf(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function eu(e,n){let t;switch(n){case ks:t="Linear";break;case Vs:t="Reinhard";break;case Hs:t="Cineon";break;case fo:t="ACESFilmic";break;case Gs:t="AgX";break;case Bs:t="Neutral";break;case Fs:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),t="Linear"}return"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Jn=new ae;function tu(){at.getLuminanceCoefficients(Jn);const e=Jn.x.toFixed(4),n=Jn.y.toFixed(4),t=Jn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nu(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ln).join(`
`)}function iu(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function au(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=e.getActiveAttrib(n,r),s=a.name;let o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:e.getAttribLocation(n,s),locationSize:o}}return t}function Ln(e){return e!==""}function Cr(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function Pr(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const ru=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ji(e){return e.replace(ru,su)}const ou=new Map;function su(e,n){let t=Oe[n];if(t===void 0){const i=ou.get(n);if(i!==void 0)t=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return Ji(t)}const lu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yr(e){return e.replace(lu,cu)}function cu(e,n,t,i){let r="";for(let a=parseInt(n);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Lr(e){let n=`precision ${e.precision} float;
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
#define LOW_PRECISION`),n}function du(e){let n="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Qr?n="SHADOWMAP_TYPE_PCF":e.shadowMapType===Os?n="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Nt&&(n="SHADOWMAP_TYPE_VSM"),n}function fu(e){let n="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case zn:case Mn:n="ENVMAP_TYPE_CUBE";break;case fi:n="ENVMAP_TYPE_CUBE_UV";break}return n}function uu(e){let n="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Mn:n="ENVMAP_MODE_REFRACTION";break}return n}function pu(e){let n="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case $s:n="ENVMAP_BLENDING_MULTIPLY";break;case Ks:n="ENVMAP_BLENDING_MIX";break;case Ys:n="ENVMAP_BLENDING_ADD";break}return n}function hu(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function mu(e,n,t,i){const r=e.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const h=du(t),f=fu(t),m=uu(t),p=pu(t),g=hu(t),E=nu(t),A=iu(a),M=r.createProgram();let d,l,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(Ln).join(`
`),d.length>0&&(d+=`
`),l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(Ln).join(`
`),l.length>0&&(l+=`
`)):(d=[Lr(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ln).join(`
`),l=[Lr(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",t.envMap?"#define "+p:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yt?"#define TONE_MAPPING":"",t.toneMapping!==Yt?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Yt?eu("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,jf("linearToOutputTexel",t.outputColorSpace),tu(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ln).join(`
`)),s=Ji(s),s=Cr(s,t),s=Pr(s,t),o=Ji(o),o=Cr(o,t),o=Pr(o,t),s=yr(s),o=yr(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,d=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,l=["#define varying in",t.glslVersion===ar?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ar?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const R=w+d+s,x=w+l+o,L=br(r,r.VERTEX_SHADER,R),P=br(r,r.FRAGMENT_SHADER,x);r.attachShader(M,L),r.attachShader(M,P),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function I(U){if(e.debug.checkShaderErrors){const B=r.getProgramInfoLog(M)||"",X=r.getShaderInfoLog(L)||"",q=r.getShaderInfoLog(P)||"",$=B.trim(),W=X.trim(),ne=q.trim();let V=!0,Ee=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(V=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,M,L,P);else{const be=wr(r,L,"vertex"),Ie=wr(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+$+`
`+be+`
`+Ie)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(W===""||ne==="")&&(Ee=!1);Ee&&(U.diagnostics={runnable:V,programLog:$,vertexShader:{log:W,prefix:d},fragmentShader:{log:ne,prefix:l}})}r.deleteShader(L),r.deleteShader(P),G=new ii(r,M),v=au(r,M)}let G;this.getUniforms=function(){return G===void 0&&I(this),G};let v;this.getAttributes=function(){return v===void 0&&I(this),v};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(M,$f)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zf++,this.cacheKey=n,this.usedTimes=1,this.program=M,this.vertexShader=L,this.fragmentShader=P,this}let _u=0;class gu{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(n);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new vu(n),t.set(n,i)),i}}class vu{constructor(n){this.id=_u++,this.code=n,this.usedTimes=0}}function Su(e,n,t,i,r,a,s){const o=new Ns,h=new gu,f=new Set,m=[],p=r.logarithmicDepthBuffer,g=r.vertexTextures;let E=r.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(v){return f.add(v),v===0?"uv":`uv${v}`}function d(v,_,U,B,X){const q=B.fog,$=X.geometry,W=v.isMeshStandardMaterial?B.environment:null,ne=(v.isMeshStandardMaterial?t:n).get(v.envMap||W),V=ne&&ne.mapping===fi?ne.image.height:null,Ee=A[v.type];v.precision!==null&&(E=r.getMaxPrecision(v.precision),E!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",E,"instead."));const be=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ie=be!==void 0?be.length:0;let Ve=0;$.morphAttributes.position!==void 0&&(Ve=1),$.morphAttributes.normal!==void 0&&(Ve=2),$.morphAttributes.color!==void 0&&(Ve=3);let nt,et,Xe,k;if(Ee){const ke=Lt[Ee];nt=ke.vertexShader,et=ke.fragmentShader}else nt=v.vertexShader,et=v.fragmentShader,h.update(v),Xe=h.getVertexShaderID(v),k=h.getFragmentShaderID(v);const K=e.getRenderTarget(),de=e.state.buffers.depth.getReversed(),ye=X.isInstancedMesh===!0,xe=X.isBatchedMesh===!0,Be=!!v.map,dt=!!v.matcap,T=!!ne,Ze=!!v.aoMap,Ue=!!v.lightMap,Ce=!!v.bumpMap,me=!!v.normalMap,Qe=!!v.displacementMap,_e=!!v.emissiveMap,Ne=!!v.metalnessMap,lt=!!v.roughnessMap,it=v.anisotropy>0,S=v.clearcoat>0,c=v.dispersion>0,D=v.iridescence>0,H=v.sheen>0,Y=v.transmission>0,F=it&&!!v.anisotropyMap,Me=S&&!!v.clearcoatMap,ee=S&&!!v.clearcoatNormalMap,ge=S&&!!v.clearcoatRoughnessMap,ve=D&&!!v.iridescenceMap,J=D&&!!v.iridescenceThicknessMap,se=H&&!!v.sheenColorMap,we=H&&!!v.sheenRoughnessMap,Se=!!v.specularMap,re=!!v.specularColorMap,De=!!v.specularIntensityMap,b=Y&&!!v.transmissionMap,j=Y&&!!v.thicknessMap,te=!!v.gradientMap,ce=!!v.alphaMap,Z=v.alphaTest>0,z=!!v.alphaHash,ue=!!v.extensions;let Le=Yt;v.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Le=e.toneMapping);const Ye={shaderID:Ee,shaderType:v.type,shaderName:v.name,vertexShader:nt,fragmentShader:et,defines:v.defines,customVertexShaderID:Xe,customFragmentShaderID:k,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:E,batching:xe,batchingColor:xe&&X._colorsTexture!==null,instancing:ye,instancingColor:ye&&X.instanceColor!==null,instancingMorph:ye&&X.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:K===null?e.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:di,alphaToCoverage:!!v.alphaToCoverage,map:Be,matcap:dt,envMap:T,envMapMode:T&&ne.mapping,envMapCubeUVHeight:V,aoMap:Ze,lightMap:Ue,bumpMap:Ce,normalMap:me,displacementMap:g&&Qe,emissiveMap:_e,normalMapObjectSpace:me&&v.normalMapType===ys,normalMapTangentSpace:me&&v.normalMapType===Ps,metalnessMap:Ne,roughnessMap:lt,anisotropy:it,anisotropyMap:F,clearcoat:S,clearcoatMap:Me,clearcoatNormalMap:ee,clearcoatRoughnessMap:ge,dispersion:c,iridescence:D,iridescenceMap:ve,iridescenceThicknessMap:J,sheen:H,sheenColorMap:se,sheenRoughnessMap:we,specularMap:Se,specularColorMap:re,specularIntensityMap:De,transmission:Y,transmissionMap:b,thicknessMap:j,gradientMap:te,opaque:v.transparent===!1&&v.blending===ni&&v.alphaToCoverage===!1,alphaMap:ce,alphaTest:Z,alphaHash:z,combine:v.combine,mapUv:Be&&M(v.map.channel),aoMapUv:Ze&&M(v.aoMap.channel),lightMapUv:Ue&&M(v.lightMap.channel),bumpMapUv:Ce&&M(v.bumpMap.channel),normalMapUv:me&&M(v.normalMap.channel),displacementMapUv:Qe&&M(v.displacementMap.channel),emissiveMapUv:_e&&M(v.emissiveMap.channel),metalnessMapUv:Ne&&M(v.metalnessMap.channel),roughnessMapUv:lt&&M(v.roughnessMap.channel),anisotropyMapUv:F&&M(v.anisotropyMap.channel),clearcoatMapUv:Me&&M(v.clearcoatMap.channel),clearcoatNormalMapUv:ee&&M(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&M(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&M(v.iridescenceMap.channel),iridescenceThicknessMapUv:J&&M(v.iridescenceThicknessMap.channel),sheenColorMapUv:se&&M(v.sheenColorMap.channel),sheenRoughnessMapUv:we&&M(v.sheenRoughnessMap.channel),specularMapUv:Se&&M(v.specularMap.channel),specularColorMapUv:re&&M(v.specularColorMap.channel),specularIntensityMapUv:De&&M(v.specularIntensityMap.channel),transmissionMapUv:b&&M(v.transmissionMap.channel),thicknessMapUv:j&&M(v.thicknessMap.channel),alphaMapUv:ce&&M(v.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(me||it),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!$.attributes.uv&&(Be||ce),fog:!!q,useFog:v.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:de,skinning:X.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:Ve,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:Le,decodeVideoTexture:Be&&v.map.isVideoTexture===!0&&at.getTransfer(v.map.colorSpace)===$e,decodeVideoTextureEmissive:_e&&v.emissiveMap.isVideoTexture===!0&&at.getTransfer(v.emissiveMap.colorSpace)===$e,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ut,flipSided:v.side===Mt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ue&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&v.extensions.multiDraw===!0||xe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ye.vertexUv1s=f.has(1),Ye.vertexUv2s=f.has(2),Ye.vertexUv3s=f.has(3),f.clear(),Ye}function l(v){const _=[];if(v.shaderID?_.push(v.shaderID):(_.push(v.customVertexShaderID),_.push(v.customFragmentShaderID)),v.defines!==void 0)for(const U in v.defines)_.push(U),_.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(w(_,v),R(_,v),_.push(e.outputColorSpace)),_.push(v.customProgramCacheKey),_.join()}function w(v,_){v.push(_.precision),v.push(_.outputColorSpace),v.push(_.envMapMode),v.push(_.envMapCubeUVHeight),v.push(_.mapUv),v.push(_.alphaMapUv),v.push(_.lightMapUv),v.push(_.aoMapUv),v.push(_.bumpMapUv),v.push(_.normalMapUv),v.push(_.displacementMapUv),v.push(_.emissiveMapUv),v.push(_.metalnessMapUv),v.push(_.roughnessMapUv),v.push(_.anisotropyMapUv),v.push(_.clearcoatMapUv),v.push(_.clearcoatNormalMapUv),v.push(_.clearcoatRoughnessMapUv),v.push(_.iridescenceMapUv),v.push(_.iridescenceThicknessMapUv),v.push(_.sheenColorMapUv),v.push(_.sheenRoughnessMapUv),v.push(_.specularMapUv),v.push(_.specularColorMapUv),v.push(_.specularIntensityMapUv),v.push(_.transmissionMapUv),v.push(_.thicknessMapUv),v.push(_.combine),v.push(_.fogExp2),v.push(_.sizeAttenuation),v.push(_.morphTargetsCount),v.push(_.morphAttributeCount),v.push(_.numDirLights),v.push(_.numPointLights),v.push(_.numSpotLights),v.push(_.numSpotLightMaps),v.push(_.numHemiLights),v.push(_.numRectAreaLights),v.push(_.numDirLightShadows),v.push(_.numPointLightShadows),v.push(_.numSpotLightShadows),v.push(_.numSpotLightShadowsWithMaps),v.push(_.numLightProbes),v.push(_.shadowMapType),v.push(_.toneMapping),v.push(_.numClippingPlanes),v.push(_.numClipIntersection),v.push(_.depthPacking)}function R(v,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),_.gradientMap&&o.enable(22),v.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reversedDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),v.push(o.mask)}function x(v){const _=A[v.type];let U;if(_){const B=Lt[_];U=Cs.clone(B.uniforms)}else U=v.uniforms;return U}function L(v,_){let U;for(let B=0,X=m.length;B<X;B++){const q=m[B];if(q.cacheKey===_){U=q,++U.usedTimes;break}}return U===void 0&&(U=new mu(e,_,v,a),m.push(U)),U}function P(v){if(--v.usedTimes===0){const _=m.indexOf(v);m[_]=m[m.length-1],m.pop(),v.destroy()}}function I(v){h.remove(v)}function G(){h.dispose()}return{getParameters:d,getProgramCacheKey:l,getUniforms:x,acquireProgram:L,releaseProgram:P,releaseShaderCache:I,programs:m,dispose:G}}function Eu(){let e=new WeakMap;function n(s){return e.has(s)}function t(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function i(s){e.delete(s)}function r(s,o,h){e.get(s)[o]=h}function a(){e=new WeakMap}return{has:n,get:t,remove:i,update:r,dispose:a}}function Mu(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.z!==n.z?e.z-n.z:e.id-n.id}function Ur(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function Dr(){const e=[];let n=0;const t=[],i=[],r=[];function a(){n=0,t.length=0,i.length=0,r.length=0}function s(p,g,E,A,M,d){let l=e[n];return l===void 0?(l={id:p.id,object:p,geometry:g,material:E,groupOrder:A,renderOrder:p.renderOrder,z:M,group:d},e[n]=l):(l.id=p.id,l.object=p,l.geometry=g,l.material=E,l.groupOrder=A,l.renderOrder=p.renderOrder,l.z=M,l.group=d),n++,l}function o(p,g,E,A,M,d){const l=s(p,g,E,A,M,d);E.transmission>0?i.push(l):E.transparent===!0?r.push(l):t.push(l)}function h(p,g,E,A,M,d){const l=s(p,g,E,A,M,d);E.transmission>0?i.unshift(l):E.transparent===!0?r.unshift(l):t.unshift(l)}function f(p,g){t.length>1&&t.sort(p||Mu),i.length>1&&i.sort(g||Ur),r.length>1&&r.sort(g||Ur)}function m(){for(let p=n,g=e.length;p<g;p++){const E=e[p];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:o,unshift:h,finish:m,sort:f}}function xu(){let e=new WeakMap;function n(i,r){const a=e.get(i);let s;return a===void 0?(s=new Dr,e.set(i,[s])):r>=a.length?(s=new Dr,a.push(s)):s=a[r],s}function t(){e=new WeakMap}return{get:n,dispose:t}}function Tu(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new ae,color:new We};break;case"SpotLight":t={position:new ae,direction:new ae,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ae,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ae,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return e[n.id]=t,t}}}function Au(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let bu=0;function Ru(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function wu(e){const n=new Tu,t=Au(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new ae);const r=new ae,a=new Gt,s=new Gt;function o(f){let m=0,p=0,g=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let E=0,A=0,M=0,d=0,l=0,w=0,R=0,x=0,L=0,P=0,I=0;f.sort(Ru);for(let v=0,_=f.length;v<_;v++){const U=f[v],B=U.color,X=U.intensity,q=U.distance,$=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)m+=B.r*X,p+=B.g*X,g+=B.b*X;else if(U.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(U.sh.coefficients[W],X);I++}else if(U.isDirectionalLight){const W=n.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const ne=U.shadow,V=t.get(U);V.shadowIntensity=ne.intensity,V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,i.directionalShadow[E]=V,i.directionalShadowMap[E]=$,i.directionalShadowMatrix[E]=U.shadow.matrix,w++}i.directional[E]=W,E++}else if(U.isSpotLight){const W=n.get(U);W.position.setFromMatrixPosition(U.matrixWorld),W.color.copy(B).multiplyScalar(X),W.distance=q,W.coneCos=Math.cos(U.angle),W.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),W.decay=U.decay,i.spot[M]=W;const ne=U.shadow;if(U.map&&(i.spotLightMap[L]=U.map,L++,ne.updateMatrices(U),U.castShadow&&P++),i.spotLightMatrix[M]=ne.matrix,U.castShadow){const V=t.get(U);V.shadowIntensity=ne.intensity,V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,i.spotShadow[M]=V,i.spotShadowMap[M]=$,x++}M++}else if(U.isRectAreaLight){const W=n.get(U);W.color.copy(B).multiplyScalar(X),W.halfWidth.set(U.width*.5,0,0),W.halfHeight.set(0,U.height*.5,0),i.rectArea[d]=W,d++}else if(U.isPointLight){const W=n.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity),W.distance=U.distance,W.decay=U.decay,U.castShadow){const ne=U.shadow,V=t.get(U);V.shadowIntensity=ne.intensity,V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,V.shadowCameraNear=ne.camera.near,V.shadowCameraFar=ne.camera.far,i.pointShadow[A]=V,i.pointShadowMap[A]=$,i.pointShadowMatrix[A]=U.shadow.matrix,R++}i.point[A]=W,A++}else if(U.isHemisphereLight){const W=n.get(U);W.skyColor.copy(U.color).multiplyScalar(X),W.groundColor.copy(U.groundColor).multiplyScalar(X),i.hemi[l]=W,l++}}d>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=p,i.ambient[2]=g;const G=i.hash;(G.directionalLength!==E||G.pointLength!==A||G.spotLength!==M||G.rectAreaLength!==d||G.hemiLength!==l||G.numDirectionalShadows!==w||G.numPointShadows!==R||G.numSpotShadows!==x||G.numSpotMaps!==L||G.numLightProbes!==I)&&(i.directional.length=E,i.spot.length=M,i.rectArea.length=d,i.point.length=A,i.hemi.length=l,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=x+L-P,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=I,G.directionalLength=E,G.pointLength=A,G.spotLength=M,G.rectAreaLength=d,G.hemiLength=l,G.numDirectionalShadows=w,G.numPointShadows=R,G.numSpotShadows=x,G.numSpotMaps=L,G.numLightProbes=I,i.version=bu++)}function h(f,m){let p=0,g=0,E=0,A=0,M=0;const d=m.matrixWorldInverse;for(let l=0,w=f.length;l<w;l++){const R=f[l];if(R.isDirectionalLight){const x=i.directional[p];x.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(d),p++}else if(R.isSpotLight){const x=i.spot[E];x.position.setFromMatrixPosition(R.matrixWorld),x.position.applyMatrix4(d),x.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(d),E++}else if(R.isRectAreaLight){const x=i.rectArea[A];x.position.setFromMatrixPosition(R.matrixWorld),x.position.applyMatrix4(d),s.identity(),a.copy(R.matrixWorld),a.premultiply(d),s.extractRotation(a),x.halfWidth.set(R.width*.5,0,0),x.halfHeight.set(0,R.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),A++}else if(R.isPointLight){const x=i.point[g];x.position.setFromMatrixPosition(R.matrixWorld),x.position.applyMatrix4(d),g++}else if(R.isHemisphereLight){const x=i.hemi[M];x.direction.setFromMatrixPosition(R.matrixWorld),x.direction.transformDirection(d),M++}}}return{setup:o,setupView:h,state:i}}function Ir(e){const n=new wu(e),t=[],i=[];function r(m){f.camera=m,t.length=0,i.length=0}function a(m){t.push(m)}function s(m){i.push(m)}function o(){n.setup(t)}function h(m){n.setupView(t,m)}const f={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:r,state:f,setupLights:o,setupLightsView:h,pushLight:a,pushShadow:s}}function Cu(e){let n=new WeakMap;function t(r,a=0){const s=n.get(r);let o;return s===void 0?(o=new Ir(e),n.set(r,[o])):a>=s.length?(o=new Ir(e),s.push(o)):o=s[a],o}function i(){n=new WeakMap}return{get:t,dispose:i}}const Pu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yu=`uniform sampler2D shadow_pass;
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
}`;function Lu(e,n,t){let i=new Kr;const r=new pt,a=new pt,s=new gt,o=new ps({depthPacking:hs}),h=new ms,f={},m=t.maxTextureSize,p={[Gn]:Mt,[Mt]:Gn,[Ut]:Ut},g=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:Pu,fragmentShader:yu}),E=g.clone();E.defines.HORIZONTAL_PASS=1;const A=new kn;A.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new rt(A,g),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qr;let l=this.type;this.render=function(P,I,G){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||P.length===0)return;const v=e.getRenderTarget(),_=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),B=e.state;B.setBlending(cn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const X=l!==Nt&&this.type===Nt,q=l===Nt&&this.type!==Nt;for(let $=0,W=P.length;$<W;$++){const ne=P[$],V=ne.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const Ee=V.getFrameExtents();if(r.multiply(Ee),a.copy(V.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(a.x=Math.floor(m/Ee.x),r.x=a.x*Ee.x,V.mapSize.x=a.x),r.y>m&&(a.y=Math.floor(m/Ee.y),r.y=a.y*Ee.y,V.mapSize.y=a.y)),V.map===null||X===!0||q===!0){const Ie=this.type!==Nt?{minFilter:Dn,magFilter:Dn}:{};V.map!==null&&V.map.dispose(),V.map=new En(r.x,r.y,Ie),V.map.texture.name=ne.name+".shadowMap",V.camera.updateProjectionMatrix()}e.setRenderTarget(V.map),e.clear();const be=V.getViewportCount();for(let Ie=0;Ie<be;Ie++){const Ve=V.getViewport(Ie);s.set(a.x*Ve.x,a.y*Ve.y,a.x*Ve.z,a.y*Ve.w),B.viewport(s),V.updateMatrices(ne,Ie),i=V.getFrustum(),x(I,G,V.camera,ne,this.type)}V.isPointLightShadow!==!0&&this.type===Nt&&w(V,G),V.needsUpdate=!1}l=this.type,d.needsUpdate=!1,e.setRenderTarget(v,_,U)};function w(P,I){const G=n.update(M);g.defines.VSM_SAMPLES!==P.blurSamples&&(g.defines.VSM_SAMPLES=P.blurSamples,E.defines.VSM_SAMPLES=P.blurSamples,g.needsUpdate=!0,E.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new En(r.x,r.y)),g.uniforms.shadow_pass.value=P.map.texture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,e.setRenderTarget(P.mapPass),e.clear(),e.renderBufferDirect(I,null,G,g,M,null),E.uniforms.shadow_pass.value=P.mapPass.texture,E.uniforms.resolution.value=P.mapSize,E.uniforms.radius.value=P.radius,e.setRenderTarget(P.map),e.clear(),e.renderBufferDirect(I,null,G,E,M,null)}function R(P,I,G,v){let _=null;const U=G.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(U!==void 0)_=U;else if(_=G.isPointLight===!0?h:o,e.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const B=_.uuid,X=I.uuid;let q=f[B];q===void 0&&(q={},f[B]=q);let $=q[X];$===void 0&&($=_.clone(),q[X]=$,I.addEventListener("dispose",L)),_=$}if(_.visible=I.visible,_.wireframe=I.wireframe,v===Nt?_.side=I.shadowSide!==null?I.shadowSide:I.side:_.side=I.shadowSide!==null?I.shadowSide:p[I.side],_.alphaMap=I.alphaMap,_.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,_.map=I.map,_.clipShadows=I.clipShadows,_.clippingPlanes=I.clippingPlanes,_.clipIntersection=I.clipIntersection,_.displacementMap=I.displacementMap,_.displacementScale=I.displacementScale,_.displacementBias=I.displacementBias,_.wireframeLinewidth=I.wireframeLinewidth,_.linewidth=I.linewidth,G.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const B=e.properties.get(_);B.light=G}return _}function x(P,I,G,v,_){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&_===Nt)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,P.matrixWorld);const X=n.update(P),q=P.material;if(Array.isArray(q)){const $=X.groups;for(let W=0,ne=$.length;W<ne;W++){const V=$[W],Ee=q[V.materialIndex];if(Ee&&Ee.visible){const be=R(P,Ee,v,_);P.onBeforeShadow(e,P,I,G,X,be,V),e.renderBufferDirect(G,null,X,be,P,V),P.onAfterShadow(e,P,I,G,X,be,V)}}}else if(q.visible){const $=R(P,q,v,_);P.onBeforeShadow(e,P,I,G,X,$,null),e.renderBufferDirect(G,null,X,$,P,null),P.onAfterShadow(e,P,I,G,X,$,null)}}const B=P.children;for(let X=0,q=B.length;X<q;X++)x(B[X],I,G,v,_)}function L(P){P.target.removeEventListener("dispose",L);for(const G in f){const v=f[G],_=P.target.uuid;_ in v&&(v[_].dispose(),delete v[_])}}}const Uu={[Yi]:qi,[Xi]:ki,[Wi]:Vi,[oi]:zi,[qi]:Yi,[ki]:Xi,[Vi]:Wi,[zi]:oi};function Du(e,n){function t(){let b=!1;const j=new gt;let te=null;const ce=new gt(0,0,0,0);return{setMask:function(Z){te!==Z&&!b&&(e.colorMask(Z,Z,Z,Z),te=Z)},setLocked:function(Z){b=Z},setClear:function(Z,z,ue,Le,Ye){Ye===!0&&(Z*=Le,z*=Le,ue*=Le),j.set(Z,z,ue,Le),ce.equals(j)===!1&&(e.clearColor(Z,z,ue,Le),ce.copy(j))},reset:function(){b=!1,te=null,ce.set(-1,0,0,0)}}}function i(){let b=!1,j=!1,te=null,ce=null,Z=null;return{setReversed:function(z){if(j!==z){const ue=n.get("EXT_clip_control");z?ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.ZERO_TO_ONE_EXT):ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.NEGATIVE_ONE_TO_ONE_EXT),j=z;const Le=Z;Z=null,this.setClear(Le)}},getReversed:function(){return j},setTest:function(z){z?K(e.DEPTH_TEST):de(e.DEPTH_TEST)},setMask:function(z){te!==z&&!b&&(e.depthMask(z),te=z)},setFunc:function(z){if(j&&(z=Uu[z]),ce!==z){switch(z){case Yi:e.depthFunc(e.NEVER);break;case qi:e.depthFunc(e.ALWAYS);break;case Xi:e.depthFunc(e.LESS);break;case oi:e.depthFunc(e.LEQUAL);break;case Wi:e.depthFunc(e.EQUAL);break;case zi:e.depthFunc(e.GEQUAL);break;case ki:e.depthFunc(e.GREATER);break;case Vi:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ce=z}},setLocked:function(z){b=z},setClear:function(z){Z!==z&&(j&&(z=1-z),e.clearDepth(z),Z=z)},reset:function(){b=!1,te=null,ce=null,Z=null,j=!1}}}function r(){let b=!1,j=null,te=null,ce=null,Z=null,z=null,ue=null,Le=null,Ye=null;return{setTest:function(ke){b||(ke?K(e.STENCIL_TEST):de(e.STENCIL_TEST))},setMask:function(ke){j!==ke&&!b&&(e.stencilMask(ke),j=ke)},setFunc:function(ke,It,yt){(te!==ke||ce!==It||Z!==yt)&&(e.stencilFunc(ke,It,yt),te=ke,ce=It,Z=yt)},setOp:function(ke,It,yt){(z!==ke||ue!==It||Le!==yt)&&(e.stencilOp(ke,It,yt),z=ke,ue=It,Le=yt)},setLocked:function(ke){b=ke},setClear:function(ke){Ye!==ke&&(e.clearStencil(ke),Ye=ke)},reset:function(){b=!1,j=null,te=null,ce=null,Z=null,z=null,ue=null,Le=null,Ye=null}}}const a=new t,s=new i,o=new r,h=new WeakMap,f=new WeakMap;let m={},p={},g=new WeakMap,E=[],A=null,M=!1,d=null,l=null,w=null,R=null,x=null,L=null,P=null,I=new We(0,0,0),G=0,v=!1,_=null,U=null,B=null,X=null,q=null;const $=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ne=0;const V=e.getParameter(e.VERSION);V.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=ne>=1):V.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=ne>=2);let Ee=null,be={};const Ie=e.getParameter(e.SCISSOR_BOX),Ve=e.getParameter(e.VIEWPORT),nt=new gt().fromArray(Ie),et=new gt().fromArray(Ve);function Xe(b,j,te,ce){const Z=new Uint8Array(4),z=e.createTexture();e.bindTexture(b,z),e.texParameteri(b,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(b,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let ue=0;ue<te;ue++)b===e.TEXTURE_3D||b===e.TEXTURE_2D_ARRAY?e.texImage3D(j,0,e.RGBA,1,1,ce,0,e.RGBA,e.UNSIGNED_BYTE,Z):e.texImage2D(j+ue,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Z);return z}const k={};k[e.TEXTURE_2D]=Xe(e.TEXTURE_2D,e.TEXTURE_2D,1),k[e.TEXTURE_CUBE_MAP]=Xe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[e.TEXTURE_2D_ARRAY]=Xe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),k[e.TEXTURE_3D]=Xe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),K(e.DEPTH_TEST),s.setFunc(oi),Ce(!1),me(Ja),K(e.CULL_FACE),Ze(cn);function K(b){m[b]!==!0&&(e.enable(b),m[b]=!0)}function de(b){m[b]!==!1&&(e.disable(b),m[b]=!1)}function ye(b,j){return p[b]!==j?(e.bindFramebuffer(b,j),p[b]=j,b===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=j),b===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=j),!0):!1}function xe(b,j){let te=E,ce=!1;if(b){te=g.get(j),te===void 0&&(te=[],g.set(j,te));const Z=b.textures;if(te.length!==Z.length||te[0]!==e.COLOR_ATTACHMENT0){for(let z=0,ue=Z.length;z<ue;z++)te[z]=e.COLOR_ATTACHMENT0+z;te.length=Z.length,ce=!0}}else te[0]!==e.BACK&&(te[0]=e.BACK,ce=!0);ce&&e.drawBuffers(te)}function Be(b){return A!==b?(e.useProgram(b),A=b,!0):!1}const dt={[bn]:e.FUNC_ADD,[Go]:e.FUNC_SUBTRACT,[Bo]:e.FUNC_REVERSE_SUBTRACT};dt[Zs]=e.MIN,dt[Qs]=e.MAX;const T={[es]:e.ZERO,[jo]:e.ONE,[Jo]:e.SRC_COLOR,[Qo]:e.SRC_ALPHA,[Zo]:e.SRC_ALPHA_SATURATE,[$o]:e.DST_COLOR,[Ko]:e.DST_ALPHA,[Yo]:e.ONE_MINUS_SRC_COLOR,[qo]:e.ONE_MINUS_SRC_ALPHA,[Xo]:e.ONE_MINUS_DST_COLOR,[Wo]:e.ONE_MINUS_DST_ALPHA,[zo]:e.CONSTANT_COLOR,[ko]:e.ONE_MINUS_CONSTANT_COLOR,[Vo]:e.CONSTANT_ALPHA,[Ho]:e.ONE_MINUS_CONSTANT_ALPHA};function Ze(b,j,te,ce,Z,z,ue,Le,Ye,ke){if(b===cn){M===!0&&(de(e.BLEND),M=!1);return}if(M===!1&&(K(e.BLEND),M=!0),b!==Rs){if(b!==d||ke!==v){if((l!==bn||x!==bn)&&(e.blendEquation(e.FUNC_ADD),l=bn,x=bn),ke)switch(b){case ni:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case tr:e.blendFunc(e.ONE,e.ONE);break;case er:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case ja:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case ni:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case tr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case er:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ja:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}w=null,R=null,L=null,P=null,I.set(0,0,0),G=0,d=b,v=ke}return}Z=Z||j,z=z||te,ue=ue||ce,(j!==l||Z!==x)&&(e.blendEquationSeparate(dt[j],dt[Z]),l=j,x=Z),(te!==w||ce!==R||z!==L||ue!==P)&&(e.blendFuncSeparate(T[te],T[ce],T[z],T[ue]),w=te,R=ce,L=z,P=ue),(Le.equals(I)===!1||Ye!==G)&&(e.blendColor(Le.r,Le.g,Le.b,Ye),I.copy(Le),G=Ye),d=b,v=!1}function Ue(b,j){b.side===Ut?de(e.CULL_FACE):K(e.CULL_FACE);let te=b.side===Mt;j&&(te=!te),Ce(te),b.blending===ni&&b.transparent===!1?Ze(cn):Ze(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),s.setFunc(b.depthFunc),s.setTest(b.depthTest),s.setMask(b.depthWrite),a.setMask(b.colorWrite);const ce=b.stencilWrite;o.setTest(ce),ce&&(o.setMask(b.stencilWriteMask),o.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),o.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),_e(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?K(e.SAMPLE_ALPHA_TO_COVERAGE):de(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(b){_!==b&&(b?e.frontFace(e.CW):e.frontFace(e.CCW),_=b)}function me(b){b!==As?(K(e.CULL_FACE),b!==U&&(b===Ja?e.cullFace(e.BACK):b===bs?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):de(e.CULL_FACE),U=b}function Qe(b){b!==B&&(W&&e.lineWidth(b),B=b)}function _e(b,j,te){b?(K(e.POLYGON_OFFSET_FILL),(X!==j||q!==te)&&(e.polygonOffset(j,te),X=j,q=te)):de(e.POLYGON_OFFSET_FILL)}function Ne(b){b?K(e.SCISSOR_TEST):de(e.SCISSOR_TEST)}function lt(b){b===void 0&&(b=e.TEXTURE0+$-1),Ee!==b&&(e.activeTexture(b),Ee=b)}function it(b,j,te){te===void 0&&(Ee===null?te=e.TEXTURE0+$-1:te=Ee);let ce=be[te];ce===void 0&&(ce={type:void 0,texture:void 0},be[te]=ce),(ce.type!==b||ce.texture!==j)&&(Ee!==te&&(e.activeTexture(te),Ee=te),e.bindTexture(b,j||k[b]),ce.type=b,ce.texture=j)}function S(){const b=be[Ee];b!==void 0&&b.type!==void 0&&(e.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function c(){try{e.compressedTexImage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function D(){try{e.compressedTexImage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function H(){try{e.texSubImage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Y(){try{e.texSubImage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function F(){try{e.compressedTexSubImage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Me(){try{e.compressedTexSubImage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ee(){try{e.texStorage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ge(){try{e.texStorage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ve(){try{e.texImage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function J(){try{e.texImage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function se(b){nt.equals(b)===!1&&(e.scissor(b.x,b.y,b.z,b.w),nt.copy(b))}function we(b){et.equals(b)===!1&&(e.viewport(b.x,b.y,b.z,b.w),et.copy(b))}function Se(b,j){let te=f.get(j);te===void 0&&(te=new WeakMap,f.set(j,te));let ce=te.get(b);ce===void 0&&(ce=e.getUniformBlockIndex(j,b.name),te.set(b,ce))}function re(b,j){const ce=f.get(j).get(b);h.get(j)!==ce&&(e.uniformBlockBinding(j,ce,b.__bindingPointIndex),h.set(j,ce))}function De(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),m={},Ee=null,be={},p={},g=new WeakMap,E=[],A=null,M=!1,d=null,l=null,w=null,R=null,x=null,L=null,P=null,I=new We(0,0,0),G=0,v=!1,_=null,U=null,B=null,X=null,q=null,nt.set(0,0,e.canvas.width,e.canvas.height),et.set(0,0,e.canvas.width,e.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:K,disable:de,bindFramebuffer:ye,drawBuffers:xe,useProgram:Be,setBlending:Ze,setMaterial:Ue,setFlipSided:Ce,setCullFace:me,setLineWidth:Qe,setPolygonOffset:_e,setScissorTest:Ne,activeTexture:lt,bindTexture:it,unbindTexture:S,compressedTexImage2D:c,compressedTexImage3D:D,texImage2D:ve,texImage3D:J,updateUBOMapping:Se,uniformBlockBinding:re,texStorage2D:ee,texStorage3D:ge,texSubImage2D:H,texSubImage3D:Y,compressedTexSubImage2D:F,compressedTexSubImage3D:Me,scissor:se,viewport:we,reset:De}}function Iu(e,n,t,i,r,a,s){const o=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new pt,m=new WeakMap;let p;const g=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(S,c){return E?new OffscreenCanvas(S,c):qs("canvas")}function M(S,c,D){let H=1;const Y=it(S);if((Y.width>D||Y.height>D)&&(H=D/Math.max(Y.width,Y.height)),H<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const F=Math.floor(H*Y.width),Me=Math.floor(H*Y.height);p===void 0&&(p=A(F,Me));const ee=c?A(F,Me):p;return ee.width=F,ee.height=Me,ee.getContext("2d").drawImage(S,0,0,F,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+F+"x"+Me+")."),ee}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),S;return S}function d(S){return S.generateMipmaps}function l(S){e.generateMipmap(S)}function w(S){return S.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?e.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function R(S,c,D,H,Y=!1){if(S!==null){if(e[S]!==void 0)return e[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let F=c;if(c===e.RED&&(D===e.FLOAT&&(F=e.R32F),D===e.HALF_FLOAT&&(F=e.R16F),D===e.UNSIGNED_BYTE&&(F=e.R8)),c===e.RED_INTEGER&&(D===e.UNSIGNED_BYTE&&(F=e.R8UI),D===e.UNSIGNED_SHORT&&(F=e.R16UI),D===e.UNSIGNED_INT&&(F=e.R32UI),D===e.BYTE&&(F=e.R8I),D===e.SHORT&&(F=e.R16I),D===e.INT&&(F=e.R32I)),c===e.RG&&(D===e.FLOAT&&(F=e.RG32F),D===e.HALF_FLOAT&&(F=e.RG16F),D===e.UNSIGNED_BYTE&&(F=e.RG8)),c===e.RG_INTEGER&&(D===e.UNSIGNED_BYTE&&(F=e.RG8UI),D===e.UNSIGNED_SHORT&&(F=e.RG16UI),D===e.UNSIGNED_INT&&(F=e.RG32UI),D===e.BYTE&&(F=e.RG8I),D===e.SHORT&&(F=e.RG16I),D===e.INT&&(F=e.RG32I)),c===e.RGB_INTEGER&&(D===e.UNSIGNED_BYTE&&(F=e.RGB8UI),D===e.UNSIGNED_SHORT&&(F=e.RGB16UI),D===e.UNSIGNED_INT&&(F=e.RGB32UI),D===e.BYTE&&(F=e.RGB8I),D===e.SHORT&&(F=e.RGB16I),D===e.INT&&(F=e.RGB32I)),c===e.RGBA_INTEGER&&(D===e.UNSIGNED_BYTE&&(F=e.RGBA8UI),D===e.UNSIGNED_SHORT&&(F=e.RGBA16UI),D===e.UNSIGNED_INT&&(F=e.RGBA32UI),D===e.BYTE&&(F=e.RGBA8I),D===e.SHORT&&(F=e.RGBA16I),D===e.INT&&(F=e.RGBA32I)),c===e.RGB&&(D===e.UNSIGNED_INT_5_9_9_9_REV&&(F=e.RGB9_E5),D===e.UNSIGNED_INT_10F_11F_11F_REV&&(F=e.R11F_G11F_B10F)),c===e.RGBA){const Me=Y?lo:at.getTransfer(H);D===e.FLOAT&&(F=e.RGBA32F),D===e.HALF_FLOAT&&(F=e.RGBA16F),D===e.UNSIGNED_BYTE&&(F=Me===$e?e.SRGB8_ALPHA8:e.RGBA8),D===e.UNSIGNED_SHORT_4_4_4_4&&(F=e.RGBA4),D===e.UNSIGNED_SHORT_5_5_5_1&&(F=e.RGB5_A1)}return(F===e.R16F||F===e.R32F||F===e.RG16F||F===e.RG32F||F===e.RGBA16F||F===e.RGBA32F)&&n.get("EXT_color_buffer_float"),F}function x(S,c){let D;return S?c===null||c===Vn||c===Hn?D=e.DEPTH24_STENCIL8:c===rn?D=e.DEPTH32F_STENCIL8:c===si&&(D=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):c===null||c===Vn||c===Hn?D=e.DEPTH_COMPONENT24:c===rn?D=e.DEPTH_COMPONENT32F:c===si&&(D=e.DEPTH_COMPONENT16),D}function L(S,c){return d(S)===!0||S.isFramebufferTexture&&S.minFilter!==Dn&&S.minFilter!==gn?Math.log2(Math.max(c.width,c.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?c.mipmaps.length:1}function P(S){const c=S.target;c.removeEventListener("dispose",P),G(c),c.isVideoTexture&&m.delete(c)}function I(S){const c=S.target;c.removeEventListener("dispose",I),_(c)}function G(S){const c=i.get(S);if(c.__webglInit===void 0)return;const D=S.source,H=g.get(D);if(H){const Y=H[c.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&v(S),Object.keys(H).length===0&&g.delete(D)}i.remove(S)}function v(S){const c=i.get(S);e.deleteTexture(c.__webglTexture);const D=S.source,H=g.get(D);delete H[c.__cacheKey],s.memory.textures--}function _(S){const c=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(c.__webglFramebuffer[H]))for(let Y=0;Y<c.__webglFramebuffer[H].length;Y++)e.deleteFramebuffer(c.__webglFramebuffer[H][Y]);else e.deleteFramebuffer(c.__webglFramebuffer[H]);c.__webglDepthbuffer&&e.deleteRenderbuffer(c.__webglDepthbuffer[H])}else{if(Array.isArray(c.__webglFramebuffer))for(let H=0;H<c.__webglFramebuffer.length;H++)e.deleteFramebuffer(c.__webglFramebuffer[H]);else e.deleteFramebuffer(c.__webglFramebuffer);if(c.__webglDepthbuffer&&e.deleteRenderbuffer(c.__webglDepthbuffer),c.__webglMultisampledFramebuffer&&e.deleteFramebuffer(c.__webglMultisampledFramebuffer),c.__webglColorRenderbuffer)for(let H=0;H<c.__webglColorRenderbuffer.length;H++)c.__webglColorRenderbuffer[H]&&e.deleteRenderbuffer(c.__webglColorRenderbuffer[H]);c.__webglDepthRenderbuffer&&e.deleteRenderbuffer(c.__webglDepthRenderbuffer)}const D=S.textures;for(let H=0,Y=D.length;H<Y;H++){const F=i.get(D[H]);F.__webglTexture&&(e.deleteTexture(F.__webglTexture),s.memory.textures--),i.remove(D[H])}i.remove(S)}let U=0;function B(){U=0}function X(){const S=U;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),U+=1,S}function q(S){const c=[];return c.push(S.wrapS),c.push(S.wrapT),c.push(S.wrapR||0),c.push(S.magFilter),c.push(S.minFilter),c.push(S.anisotropy),c.push(S.internalFormat),c.push(S.format),c.push(S.type),c.push(S.generateMipmaps),c.push(S.premultiplyAlpha),c.push(S.flipY),c.push(S.unpackAlignment),c.push(S.colorSpace),c.join()}function $(S,c){const D=i.get(S);if(S.isVideoTexture&&Ne(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&D.__version!==S.version){const H=S.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(D,S,c);return}}else S.isExternalTexture&&(D.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,D.__webglTexture,e.TEXTURE0+c)}function W(S,c){const D=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&D.__version!==S.version){k(D,S,c);return}t.bindTexture(e.TEXTURE_2D_ARRAY,D.__webglTexture,e.TEXTURE0+c)}function ne(S,c){const D=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&D.__version!==S.version){k(D,S,c);return}t.bindTexture(e.TEXTURE_3D,D.__webglTexture,e.TEXTURE0+c)}function V(S,c){const D=i.get(S);if(S.version>0&&D.__version!==S.version){K(D,S,c);return}t.bindTexture(e.TEXTURE_CUBE_MAP,D.__webglTexture,e.TEXTURE0+c)}const Ee={[is]:e.REPEAT,[ns]:e.CLAMP_TO_EDGE,[ts]:e.MIRRORED_REPEAT},be={[Dn]:e.NEAREST,[as]:e.NEAREST_MIPMAP_NEAREST,[$n]:e.NEAREST_MIPMAP_LINEAR,[gn]:e.LINEAR,[Ei]:e.LINEAR_MIPMAP_NEAREST,[yn]:e.LINEAR_MIPMAP_LINEAR},Ie={[fs]:e.NEVER,[ds]:e.ALWAYS,[cs]:e.LESS,[Zr]:e.LEQUAL,[ls]:e.EQUAL,[ss]:e.GEQUAL,[os]:e.GREATER,[rs]:e.NOTEQUAL};function Ve(S,c){if(c.type===rn&&n.has("OES_texture_float_linear")===!1&&(c.magFilter===gn||c.magFilter===Ei||c.magFilter===$n||c.magFilter===yn||c.minFilter===gn||c.minFilter===Ei||c.minFilter===$n||c.minFilter===yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(S,e.TEXTURE_WRAP_S,Ee[c.wrapS]),e.texParameteri(S,e.TEXTURE_WRAP_T,Ee[c.wrapT]),(S===e.TEXTURE_3D||S===e.TEXTURE_2D_ARRAY)&&e.texParameteri(S,e.TEXTURE_WRAP_R,Ee[c.wrapR]),e.texParameteri(S,e.TEXTURE_MAG_FILTER,be[c.magFilter]),e.texParameteri(S,e.TEXTURE_MIN_FILTER,be[c.minFilter]),c.compareFunction&&(e.texParameteri(S,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(S,e.TEXTURE_COMPARE_FUNC,Ie[c.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(c.magFilter===Dn||c.minFilter!==$n&&c.minFilter!==yn||c.type===rn&&n.has("OES_texture_float_linear")===!1)return;if(c.anisotropy>1||i.get(c).__currentAnisotropy){const D=n.get("EXT_texture_filter_anisotropic");e.texParameterf(S,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(c.anisotropy,r.getMaxAnisotropy())),i.get(c).__currentAnisotropy=c.anisotropy}}}function nt(S,c){let D=!1;S.__webglInit===void 0&&(S.__webglInit=!0,c.addEventListener("dispose",P));const H=c.source;let Y=g.get(H);Y===void 0&&(Y={},g.set(H,Y));const F=q(c);if(F!==S.__cacheKey){Y[F]===void 0&&(Y[F]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,D=!0),Y[F].usedTimes++;const Me=Y[S.__cacheKey];Me!==void 0&&(Y[S.__cacheKey].usedTimes--,Me.usedTimes===0&&v(c)),S.__cacheKey=F,S.__webglTexture=Y[F].texture}return D}function et(S,c,D){return Math.floor(Math.floor(S/D)/c)}function Xe(S,c,D,H){const F=S.updateRanges;if(F.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,c.width,c.height,D,H,c.data);else{F.sort((J,se)=>J.start-se.start);let Me=0;for(let J=1;J<F.length;J++){const se=F[Me],we=F[J],Se=se.start+se.count,re=et(we.start,c.width,4),De=et(se.start,c.width,4);we.start<=Se+1&&re===De&&et(we.start+we.count-1,c.width,4)===re?se.count=Math.max(se.count,we.start+we.count-se.start):(++Me,F[Me]=we)}F.length=Me+1;const ee=e.getParameter(e.UNPACK_ROW_LENGTH),ge=e.getParameter(e.UNPACK_SKIP_PIXELS),ve=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,c.width);for(let J=0,se=F.length;J<se;J++){const we=F[J],Se=Math.floor(we.start/4),re=Math.ceil(we.count/4),De=Se%c.width,b=Math.floor(Se/c.width),j=re,te=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,De),e.pixelStorei(e.UNPACK_SKIP_ROWS,b),t.texSubImage2D(e.TEXTURE_2D,0,De,b,j,te,D,H,c.data)}S.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ee),e.pixelStorei(e.UNPACK_SKIP_PIXELS,ge),e.pixelStorei(e.UNPACK_SKIP_ROWS,ve)}}function k(S,c,D){let H=e.TEXTURE_2D;(c.isDataArrayTexture||c.isCompressedArrayTexture)&&(H=e.TEXTURE_2D_ARRAY),c.isData3DTexture&&(H=e.TEXTURE_3D);const Y=nt(S,c),F=c.source;t.bindTexture(H,S.__webglTexture,e.TEXTURE0+D);const Me=i.get(F);if(F.version!==Me.__version||Y===!0){t.activeTexture(e.TEXTURE0+D);const ee=at.getPrimaries(at.workingColorSpace),ge=c.colorSpace===_n?null:at.getPrimaries(c.colorSpace),ve=c.colorSpace===_n||ee===ge?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,c.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,c.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,c.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let J=M(c.image,!1,r.maxTextureSize);J=lt(c,J);const se=a.convert(c.format,c.colorSpace),we=a.convert(c.type);let Se=R(c.internalFormat,se,we,c.colorSpace,c.isVideoTexture);Ve(H,c);let re;const De=c.mipmaps,b=c.isVideoTexture!==!0,j=Me.__version===void 0||Y===!0,te=F.dataReady,ce=L(c,J);if(c.isDepthTexture)Se=x(c.format===ri,c.type),j&&(b?t.texStorage2D(e.TEXTURE_2D,1,Se,J.width,J.height):t.texImage2D(e.TEXTURE_2D,0,Se,J.width,J.height,0,se,we,null));else if(c.isDataTexture)if(De.length>0){b&&j&&t.texStorage2D(e.TEXTURE_2D,ce,Se,De[0].width,De[0].height);for(let Z=0,z=De.length;Z<z;Z++)re=De[Z],b?te&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,re.width,re.height,se,we,re.data):t.texImage2D(e.TEXTURE_2D,Z,Se,re.width,re.height,0,se,we,re.data);c.generateMipmaps=!1}else b?(j&&t.texStorage2D(e.TEXTURE_2D,ce,Se,J.width,J.height),te&&Xe(c,J,se,we)):t.texImage2D(e.TEXTURE_2D,0,Se,J.width,J.height,0,se,we,J.data);else if(c.isCompressedTexture)if(c.isCompressedArrayTexture){b&&j&&t.texStorage3D(e.TEXTURE_2D_ARRAY,ce,Se,De[0].width,De[0].height,J.depth);for(let Z=0,z=De.length;Z<z;Z++)if(re=De[Z],c.format!==Ot)if(se!==null)if(b){if(te)if(c.layerUpdates.size>0){const ue=ir(re.width,re.height,c.format,c.type);for(const Le of c.layerUpdates){const Ye=re.data.subarray(Le*ue/re.data.BYTES_PER_ELEMENT,(Le+1)*ue/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,Le,re.width,re.height,1,se,Ye)}c.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,re.width,re.height,J.depth,se,re.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Z,Se,re.width,re.height,J.depth,0,re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else b?te&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,re.width,re.height,J.depth,se,we,re.data):t.texImage3D(e.TEXTURE_2D_ARRAY,Z,Se,re.width,re.height,J.depth,0,se,we,re.data)}else{b&&j&&t.texStorage2D(e.TEXTURE_2D,ce,Se,De[0].width,De[0].height);for(let Z=0,z=De.length;Z<z;Z++)re=De[Z],c.format!==Ot?se!==null?b?te&&t.compressedTexSubImage2D(e.TEXTURE_2D,Z,0,0,re.width,re.height,se,re.data):t.compressedTexImage2D(e.TEXTURE_2D,Z,Se,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):b?te&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,re.width,re.height,se,we,re.data):t.texImage2D(e.TEXTURE_2D,Z,Se,re.width,re.height,0,se,we,re.data)}else if(c.isDataArrayTexture)if(b){if(j&&t.texStorage3D(e.TEXTURE_2D_ARRAY,ce,Se,J.width,J.height,J.depth),te)if(c.layerUpdates.size>0){const Z=ir(J.width,J.height,c.format,c.type);for(const z of c.layerUpdates){const ue=J.data.subarray(z*Z/J.data.BYTES_PER_ELEMENT,(z+1)*Z/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,z,J.width,J.height,1,se,we,ue)}c.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,se,we,J.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,Se,J.width,J.height,J.depth,0,se,we,J.data);else if(c.isData3DTexture)b?(j&&t.texStorage3D(e.TEXTURE_3D,ce,Se,J.width,J.height,J.depth),te&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,se,we,J.data)):t.texImage3D(e.TEXTURE_3D,0,Se,J.width,J.height,J.depth,0,se,we,J.data);else if(c.isFramebufferTexture){if(j)if(b)t.texStorage2D(e.TEXTURE_2D,ce,Se,J.width,J.height);else{let Z=J.width,z=J.height;for(let ue=0;ue<ce;ue++)t.texImage2D(e.TEXTURE_2D,ue,Se,Z,z,0,se,we,null),Z>>=1,z>>=1}}else if(De.length>0){if(b&&j){const Z=it(De[0]);t.texStorage2D(e.TEXTURE_2D,ce,Se,Z.width,Z.height)}for(let Z=0,z=De.length;Z<z;Z++)re=De[Z],b?te&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,se,we,re):t.texImage2D(e.TEXTURE_2D,Z,Se,se,we,re);c.generateMipmaps=!1}else if(b){if(j){const Z=it(J);t.texStorage2D(e.TEXTURE_2D,ce,Se,Z.width,Z.height)}te&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,se,we,J)}else t.texImage2D(e.TEXTURE_2D,0,Se,se,we,J);d(c)&&l(H),Me.__version=F.version,c.onUpdate&&c.onUpdate(c)}S.__version=c.version}function K(S,c,D){if(c.image.length!==6)return;const H=nt(S,c),Y=c.source;t.bindTexture(e.TEXTURE_CUBE_MAP,S.__webglTexture,e.TEXTURE0+D);const F=i.get(Y);if(Y.version!==F.__version||H===!0){t.activeTexture(e.TEXTURE0+D);const Me=at.getPrimaries(at.workingColorSpace),ee=c.colorSpace===_n?null:at.getPrimaries(c.colorSpace),ge=c.colorSpace===_n||Me===ee?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,c.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,c.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,c.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const ve=c.isCompressedTexture||c.image[0].isCompressedTexture,J=c.image[0]&&c.image[0].isDataTexture,se=[];for(let z=0;z<6;z++)!ve&&!J?se[z]=M(c.image[z],!0,r.maxCubemapSize):se[z]=J?c.image[z].image:c.image[z],se[z]=lt(c,se[z]);const we=se[0],Se=a.convert(c.format,c.colorSpace),re=a.convert(c.type),De=R(c.internalFormat,Se,re,c.colorSpace),b=c.isVideoTexture!==!0,j=F.__version===void 0||H===!0,te=Y.dataReady;let ce=L(c,we);Ve(e.TEXTURE_CUBE_MAP,c);let Z;if(ve){b&&j&&t.texStorage2D(e.TEXTURE_CUBE_MAP,ce,De,we.width,we.height);for(let z=0;z<6;z++){Z=se[z].mipmaps;for(let ue=0;ue<Z.length;ue++){const Le=Z[ue];c.format!==Ot?Se!==null?b?te&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,ue,0,0,Le.width,Le.height,Se,Le.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,ue,De,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):b?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,ue,0,0,Le.width,Le.height,Se,re,Le.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,ue,De,Le.width,Le.height,0,Se,re,Le.data)}}}else{if(Z=c.mipmaps,b&&j){Z.length>0&&ce++;const z=it(se[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,ce,De,z.width,z.height)}for(let z=0;z<6;z++)if(J){b?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,se[z].width,se[z].height,Se,re,se[z].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,De,se[z].width,se[z].height,0,Se,re,se[z].data);for(let ue=0;ue<Z.length;ue++){const Ye=Z[ue].image[z].image;b?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,ue+1,0,0,Ye.width,Ye.height,Se,re,Ye.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,ue+1,De,Ye.width,Ye.height,0,Se,re,Ye.data)}}else{b?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,Se,re,se[z]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,De,Se,re,se[z]);for(let ue=0;ue<Z.length;ue++){const Le=Z[ue];b?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,ue+1,0,0,Se,re,Le.image[z]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+z,ue+1,De,Se,re,Le.image[z])}}}d(c)&&l(e.TEXTURE_CUBE_MAP),F.__version=Y.version,c.onUpdate&&c.onUpdate(c)}S.__version=c.version}function de(S,c,D,H,Y,F){const Me=a.convert(D.format,D.colorSpace),ee=a.convert(D.type),ge=R(D.internalFormat,Me,ee,D.colorSpace),ve=i.get(c),J=i.get(D);if(J.__renderTarget=c,!ve.__hasExternalTextures){const se=Math.max(1,c.width>>F),we=Math.max(1,c.height>>F);Y===e.TEXTURE_3D||Y===e.TEXTURE_2D_ARRAY?t.texImage3D(Y,F,ge,se,we,c.depth,0,Me,ee,null):t.texImage2D(Y,F,ge,se,we,0,Me,ee,null)}t.bindFramebuffer(e.FRAMEBUFFER,S),_e(c)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,H,Y,J.__webglTexture,0,Qe(c)):(Y===e.TEXTURE_2D||Y>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,H,Y,J.__webglTexture,F),t.bindFramebuffer(e.FRAMEBUFFER,null)}function ye(S,c,D){if(e.bindRenderbuffer(e.RENDERBUFFER,S),c.depthBuffer){const H=c.depthTexture,Y=H&&H.isDepthTexture?H.type:null,F=x(c.stencilBuffer,Y),Me=c.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ee=Qe(c);_e(c)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ee,F,c.width,c.height):D?e.renderbufferStorageMultisample(e.RENDERBUFFER,ee,F,c.width,c.height):e.renderbufferStorage(e.RENDERBUFFER,F,c.width,c.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Me,e.RENDERBUFFER,S)}else{const H=c.textures;for(let Y=0;Y<H.length;Y++){const F=H[Y],Me=a.convert(F.format,F.colorSpace),ee=a.convert(F.type),ge=R(F.internalFormat,Me,ee,F.colorSpace),ve=Qe(c);D&&_e(c)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,ve,ge,c.width,c.height):_e(c)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ve,ge,c.width,c.height):e.renderbufferStorage(e.RENDERBUFFER,ge,c.width,c.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function xe(S,c){if(c&&c.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(e.FRAMEBUFFER,S),!(c.depthTexture&&c.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const H=i.get(c.depthTexture);H.__renderTarget=c,(!H.__webglTexture||c.depthTexture.image.width!==c.width||c.depthTexture.image.height!==c.height)&&(c.depthTexture.image.width=c.width,c.depthTexture.image.height=c.height,c.depthTexture.needsUpdate=!0),$(c.depthTexture,0);const Y=H.__webglTexture,F=Qe(c);if(c.depthTexture.format===aa)_e(c)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Y,0,F):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Y,0);else if(c.depthTexture.format===ri)_e(c)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Y,0,F):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Be(S){const c=i.get(S),D=S.isWebGLCubeRenderTarget===!0;if(c.__boundDepthTexture!==S.depthTexture){const H=S.depthTexture;if(c.__depthDisposeCallback&&c.__depthDisposeCallback(),H){const Y=()=>{delete c.__boundDepthTexture,delete c.__depthDisposeCallback,H.removeEventListener("dispose",Y)};H.addEventListener("dispose",Y),c.__depthDisposeCallback=Y}c.__boundDepthTexture=H}if(S.depthTexture&&!c.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");const H=S.texture.mipmaps;H&&H.length>0?xe(c.__webglFramebuffer[0],S):xe(c.__webglFramebuffer,S)}else if(D){c.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(e.FRAMEBUFFER,c.__webglFramebuffer[H]),c.__webglDepthbuffer[H]===void 0)c.__webglDepthbuffer[H]=e.createRenderbuffer(),ye(c.__webglDepthbuffer[H],S,!1);else{const Y=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,F=c.__webglDepthbuffer[H];e.bindRenderbuffer(e.RENDERBUFFER,F),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,F)}}else{const H=S.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(e.FRAMEBUFFER,c.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,c.__webglFramebuffer),c.__webglDepthbuffer===void 0)c.__webglDepthbuffer=e.createRenderbuffer(),ye(c.__webglDepthbuffer,S,!1);else{const Y=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,F=c.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,F),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,F)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function dt(S,c,D){const H=i.get(S);c!==void 0&&de(H.__webglFramebuffer,S,S.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),D!==void 0&&Be(S)}function T(S){const c=S.texture,D=i.get(S),H=i.get(c);S.addEventListener("dispose",I);const Y=S.textures,F=S.isWebGLCubeRenderTarget===!0,Me=Y.length>1;if(Me||(H.__webglTexture===void 0&&(H.__webglTexture=e.createTexture()),H.__version=c.version,s.memory.textures++),F){D.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(c.mipmaps&&c.mipmaps.length>0){D.__webglFramebuffer[ee]=[];for(let ge=0;ge<c.mipmaps.length;ge++)D.__webglFramebuffer[ee][ge]=e.createFramebuffer()}else D.__webglFramebuffer[ee]=e.createFramebuffer()}else{if(c.mipmaps&&c.mipmaps.length>0){D.__webglFramebuffer=[];for(let ee=0;ee<c.mipmaps.length;ee++)D.__webglFramebuffer[ee]=e.createFramebuffer()}else D.__webglFramebuffer=e.createFramebuffer();if(Me)for(let ee=0,ge=Y.length;ee<ge;ee++){const ve=i.get(Y[ee]);ve.__webglTexture===void 0&&(ve.__webglTexture=e.createTexture(),s.memory.textures++)}if(S.samples>0&&_e(S)===!1){D.__webglMultisampledFramebuffer=e.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ee=0;ee<Y.length;ee++){const ge=Y[ee];D.__webglColorRenderbuffer[ee]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,D.__webglColorRenderbuffer[ee]);const ve=a.convert(ge.format,ge.colorSpace),J=a.convert(ge.type),se=R(ge.internalFormat,ve,J,ge.colorSpace,S.isXRRenderTarget===!0),we=Qe(S);e.renderbufferStorageMultisample(e.RENDERBUFFER,we,se,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ee,e.RENDERBUFFER,D.__webglColorRenderbuffer[ee])}e.bindRenderbuffer(e.RENDERBUFFER,null),S.depthBuffer&&(D.__webglDepthRenderbuffer=e.createRenderbuffer(),ye(D.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(F){t.bindTexture(e.TEXTURE_CUBE_MAP,H.__webglTexture),Ve(e.TEXTURE_CUBE_MAP,c);for(let ee=0;ee<6;ee++)if(c.mipmaps&&c.mipmaps.length>0)for(let ge=0;ge<c.mipmaps.length;ge++)de(D.__webglFramebuffer[ee][ge],S,c,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge);else de(D.__webglFramebuffer[ee],S,c,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);d(c)&&l(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ee=0,ge=Y.length;ee<ge;ee++){const ve=Y[ee],J=i.get(ve);let se=e.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(se=S.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(se,J.__webglTexture),Ve(se,ve),de(D.__webglFramebuffer,S,ve,e.COLOR_ATTACHMENT0+ee,se,0),d(ve)&&l(se)}t.unbindTexture()}else{let ee=e.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ee=S.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(ee,H.__webglTexture),Ve(ee,c),c.mipmaps&&c.mipmaps.length>0)for(let ge=0;ge<c.mipmaps.length;ge++)de(D.__webglFramebuffer[ge],S,c,e.COLOR_ATTACHMENT0,ee,ge);else de(D.__webglFramebuffer,S,c,e.COLOR_ATTACHMENT0,ee,0);d(c)&&l(ee),t.unbindTexture()}S.depthBuffer&&Be(S)}function Ze(S){const c=S.textures;for(let D=0,H=c.length;D<H;D++){const Y=c[D];if(d(Y)){const F=w(S),Me=i.get(Y).__webglTexture;t.bindTexture(F,Me),l(F),t.unbindTexture()}}}const Ue=[],Ce=[];function me(S){if(S.samples>0){if(_e(S)===!1){const c=S.textures,D=S.width,H=S.height;let Y=e.COLOR_BUFFER_BIT;const F=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Me=i.get(S),ee=c.length>1;if(ee)for(let ve=0;ve<c.length;ve++)t.bindFramebuffer(e.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,Me.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const ge=S.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ve=0;ve<c.length;ve++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Y|=e.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Y|=e.STENCIL_BUFFER_BIT)),ee){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);const J=i.get(c[ve]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,J,0)}e.blitFramebuffer(0,0,D,H,0,0,D,H,Y,e.NEAREST),h===!0&&(Ue.length=0,Ce.length=0,Ue.push(e.COLOR_ATTACHMENT0+ve),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Ue.push(F),Ce.push(F),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ce)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ee)for(let ve=0;ve<c.length;ve++){t.bindFramebuffer(e.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);const J=i.get(c[ve]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,Me.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.TEXTURE_2D,J,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&h){const c=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[c])}}}function Qe(S){return Math.min(r.maxSamples,S.samples)}function _e(S){const c=i.get(S);return S.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&c.__useRenderToTexture!==!1}function Ne(S){const c=s.render.frame;m.get(S)!==c&&(m.set(S,c),S.update())}function lt(S,c){const D=S.colorSpace,H=S.format,Y=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||D!==di&&D!==_n&&(at.getTransfer(D)===$e?(H!==Ot||Y!==un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),c}function it(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(f.width=S.naturalWidth||S.width,f.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(f.width=S.displayWidth,f.height=S.displayHeight):(f.width=S.width,f.height=S.height),f}this.allocateTextureUnit=X,this.resetTextureUnits=B,this.setTexture2D=$,this.setTexture2DArray=W,this.setTexture3D=ne,this.setTextureCube=V,this.rebindTextures=dt,this.setupRenderTarget=T,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=de,this.useMultisampledRTT=_e}function Nu(e,n){function t(i,r=_n){let a;const s=at.getTransfer(r);if(i===un)return e.UNSIGNED_BYTE;if(i===Jr)return e.UNSIGNED_SHORT_4_4_4_4;if(i===jr)return e.UNSIGNED_SHORT_5_5_5_1;if(i===_s)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===gs)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===vs)return e.BYTE;if(i===Ss)return e.SHORT;if(i===si)return e.UNSIGNED_SHORT;if(i===no)return e.INT;if(i===Vn)return e.UNSIGNED_INT;if(i===rn)return e.FLOAT;if(i===ci)return e.HALF_FLOAT;if(i===Es)return e.ALPHA;if(i===Ms)return e.RGB;if(i===Ot)return e.RGBA;if(i===aa)return e.DEPTH_COMPONENT;if(i===ri)return e.DEPTH_STENCIL;if(i===xs)return e.RED;if(i===io)return e.RED_INTEGER;if(i===Ts)return e.RG;if(i===ao)return e.RG_INTEGER;if(i===ro)return e.RGBA_INTEGER;if(i===Mi||i===xi||i===Ti||i===Ai)if(s===$e)if(a=n.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Mi)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xi)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ti)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ai)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=n.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Mi)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xi)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ti)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ai)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Aa||i===ba||i===Ra||i===wa)if(a=n.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Aa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ba)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ra)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ca||i===Pa||i===ya)if(a=n.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Ca||i===Pa)return s===$e?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===ya)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===La||i===Ua||i===Da||i===Ia||i===Na||i===Oa||i===Fa||i===Ba||i===Ga||i===Ha||i===Va||i===ka||i===za||i===Wa)if(a=n.get("WEBGL_compressed_texture_astc"),a!==null){if(i===La)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ua)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Da)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ia)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Na)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Oa)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fa)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ba)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ga)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ha)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Va)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ka)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===za)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wa)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xa||i===qa||i===Ya)if(a=n.get("EXT_texture_compression_bptc"),a!==null){if(i===Xa)return s===$e?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qa)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ya)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ka||i===$a||i===Za||i===Qa)if(a=n.get("EXT_texture_compression_rgtc"),a!==null){if(i===Ka)return a.COMPRESSED_RED_RGTC1_EXT;if(i===$a)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Za)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qa)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Hn?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const Ou=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fu=`
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

}`;class Bu{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new eo(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new Vt({vertexShader:Ou,fragmentShader:Fu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new to(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gu extends No{constructor(n,t){super();const i=this;let r=null,a=1,s=null,o="local-floor",h=1,f=null,m=null,p=null,g=null,E=null,A=null;const M=typeof XRWebGLBinding<"u",d=new Bu,l={},w=t.getContextAttributes();let R=null,x=null;const L=[],P=[],I=new pt;let G=null;const v=new Un;v.viewport=new gt;const _=new Un;_.viewport=new gt;const U=[v,_],B=new Oo;let X=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let K=L[k];return K===void 0&&(K=new Si,L[k]=K),K.getTargetRaySpace()},this.getControllerGrip=function(k){let K=L[k];return K===void 0&&(K=new Si,L[k]=K),K.getGripSpace()},this.getHand=function(k){let K=L[k];return K===void 0&&(K=new Si,L[k]=K),K.getHandSpace()};function $(k){const K=P.indexOf(k.inputSource);if(K===-1)return;const de=L[K];de!==void 0&&(de.update(k.inputSource,k.frame,f||s),de.dispatchEvent({type:k.type,data:k.inputSource}))}function W(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",ne);for(let k=0;k<L.length;k++){const K=P[k];K!==null&&(P[k]=null,L[k].disconnect(K))}X=null,q=null,d.reset();for(const k in l)delete l[k];n.setRenderTarget(R),E=null,g=null,p=null,r=null,x=null,Xe.stop(),i.isPresenting=!1,n.setPixelRatio(G),n.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||s},this.setReferenceSpace=function(k){f=k},this.getBaseLayer=function(){return g!==null?g:E},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return A},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(R=n.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",W),r.addEventListener("inputsourceschange",ne),w.xrCompatible!==!0&&await t.makeXRCompatible(),G=n.getPixelRatio(),n.getSize(I),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,ye=null,xe=null;w.depth&&(xe=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=w.stencil?ri:aa,ye=w.stencil?Hn:Vn);const Be={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:a};p=this.getBinding(),g=p.createProjectionLayer(Be),r.updateRenderState({layers:[g]}),n.setPixelRatio(1),n.setSize(g.textureWidth,g.textureHeight,!1),x=new En(g.textureWidth,g.textureHeight,{format:Ot,type:un,depthTexture:new $r(g.textureWidth,g.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:w.stencil,colorSpace:n.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const de={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:a};E=new XRWebGLLayer(r,t,de),r.updateRenderState({baseLayer:E}),n.setPixelRatio(1),n.setSize(E.framebufferWidth,E.framebufferHeight,!1),x=new En(E.framebufferWidth,E.framebufferHeight,{format:Ot,type:un,colorSpace:n.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(h),f=null,s=await r.requestReferenceSpace(o),Xe.setContext(r),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function ne(k){for(let K=0;K<k.removed.length;K++){const de=k.removed[K],ye=P.indexOf(de);ye>=0&&(P[ye]=null,L[ye].disconnect(de))}for(let K=0;K<k.added.length;K++){const de=k.added[K];let ye=P.indexOf(de);if(ye===-1){for(let Be=0;Be<L.length;Be++)if(Be>=P.length){P.push(de),ye=Be;break}else if(P[Be]===null){P[Be]=de,ye=Be;break}if(ye===-1)break}const xe=L[ye];xe&&xe.connect(de)}}const V=new ae,Ee=new ae;function be(k,K,de){V.setFromMatrixPosition(K.matrixWorld),Ee.setFromMatrixPosition(de.matrixWorld);const ye=V.distanceTo(Ee),xe=K.projectionMatrix.elements,Be=de.projectionMatrix.elements,dt=xe[14]/(xe[10]-1),T=xe[14]/(xe[10]+1),Ze=(xe[9]+1)/xe[5],Ue=(xe[9]-1)/xe[5],Ce=(xe[8]-1)/xe[0],me=(Be[8]+1)/Be[0],Qe=dt*Ce,_e=dt*me,Ne=ye/(-Ce+me),lt=Ne*-Ce;if(K.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(lt),k.translateZ(Ne),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),xe[10]===-1)k.projectionMatrix.copy(K.projectionMatrix),k.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const it=dt+Ne,S=T+Ne,c=Qe-lt,D=_e+(ye-lt),H=Ze*T/S*it,Y=Ue*T/S*it;k.projectionMatrix.makePerspective(c,D,H,Y,it,S),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function Ie(k,K){K===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(K.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;let K=k.near,de=k.far;d.texture!==null&&(d.depthNear>0&&(K=d.depthNear),d.depthFar>0&&(de=d.depthFar)),B.near=_.near=v.near=K,B.far=_.far=v.far=de,(X!==B.near||q!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),X=B.near,q=B.far),B.layers.mask=k.layers.mask|6,v.layers.mask=B.layers.mask&3,_.layers.mask=B.layers.mask&5;const ye=k.parent,xe=B.cameras;Ie(B,ye);for(let Be=0;Be<xe.length;Be++)Ie(xe[Be],ye);xe.length===2?be(B,v,_):B.projectionMatrix.copy(v.projectionMatrix),Ve(k,B,ye)};function Ve(k,K,de){de===null?k.matrix.copy(K.matrixWorld):(k.matrix.copy(de.matrixWorld),k.matrix.invert(),k.matrix.multiply(K.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(K.projectionMatrix),k.projectionMatrixInverse.copy(K.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Fo*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(g===null&&E===null))return h},this.setFoveation=function(k){h=k,g!==null&&(g.fixedFoveation=k),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=k)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(B)},this.getCameraTexture=function(k){return l[k]};let nt=null;function et(k,K){if(m=K.getViewerPose(f||s),A=K,m!==null){const de=m.views;E!==null&&(n.setRenderTargetFramebuffer(x,E.framebuffer),n.setRenderTarget(x));let ye=!1;de.length!==B.cameras.length&&(B.cameras.length=0,ye=!0);for(let T=0;T<de.length;T++){const Ze=de[T];let Ue=null;if(E!==null)Ue=E.getViewport(Ze);else{const me=p.getViewSubImage(g,Ze);Ue=me.viewport,T===0&&(n.setRenderTargetTextures(x,me.colorTexture,me.depthStencilTexture),n.setRenderTarget(x))}let Ce=U[T];Ce===void 0&&(Ce=new Un,Ce.layers.enable(T),Ce.viewport=new gt,U[T]=Ce),Ce.matrix.fromArray(Ze.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Ze.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),T===0&&(B.matrix.copy(Ce.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),ye===!0&&B.cameras.push(Ce)}const xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){p=i.getBinding();const T=p.getDepthInformation(de[0]);T&&T.isValid&&T.texture&&d.init(T,r.renderState)}if(xe&&xe.includes("camera-access")&&M){n.state.unbindTexture(),p=i.getBinding();for(let T=0;T<de.length;T++){const Ze=de[T].camera;if(Ze){let Ue=l[Ze];Ue||(Ue=new eo,l[Ze]=Ue);const Ce=p.getCameraImage(Ze);Ue.sourceTexture=Ce}}}}for(let de=0;de<L.length;de++){const ye=P[de],xe=L[de];ye!==null&&xe!==void 0&&xe.update(ye,K,f||s)}nt&&nt(k,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),A=null}const Xe=new mo;Xe.setAnimationLoop(et),this.setAnimationLoop=function(k){nt=k},this.dispose=function(){}}}const en=new In,Hu=new Gt;function Vu(e,n){function t(d,l){d.matrixAutoUpdate===!0&&d.updateMatrix(),l.value.copy(d.matrix)}function i(d,l){l.color.getRGB(d.fogColor.value,so(e)),l.isFog?(d.fogNear.value=l.near,d.fogFar.value=l.far):l.isFogExp2&&(d.fogDensity.value=l.density)}function r(d,l,w,R,x){l.isMeshBasicMaterial||l.isMeshLambertMaterial?a(d,l):l.isMeshToonMaterial?(a(d,l),p(d,l)):l.isMeshPhongMaterial?(a(d,l),m(d,l)):l.isMeshStandardMaterial?(a(d,l),g(d,l),l.isMeshPhysicalMaterial&&E(d,l,x)):l.isMeshMatcapMaterial?(a(d,l),A(d,l)):l.isMeshDepthMaterial?a(d,l):l.isMeshDistanceMaterial?(a(d,l),M(d,l)):l.isMeshNormalMaterial?a(d,l):l.isLineBasicMaterial?(s(d,l),l.isLineDashedMaterial&&o(d,l)):l.isPointsMaterial?h(d,l,w,R):l.isSpriteMaterial?f(d,l):l.isShadowMaterial?(d.color.value.copy(l.color),d.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}function a(d,l){d.opacity.value=l.opacity,l.color&&d.diffuse.value.copy(l.color),l.emissive&&d.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(d.map.value=l.map,t(l.map,d.mapTransform)),l.alphaMap&&(d.alphaMap.value=l.alphaMap,t(l.alphaMap,d.alphaMapTransform)),l.bumpMap&&(d.bumpMap.value=l.bumpMap,t(l.bumpMap,d.bumpMapTransform),d.bumpScale.value=l.bumpScale,l.side===Mt&&(d.bumpScale.value*=-1)),l.normalMap&&(d.normalMap.value=l.normalMap,t(l.normalMap,d.normalMapTransform),d.normalScale.value.copy(l.normalScale),l.side===Mt&&d.normalScale.value.negate()),l.displacementMap&&(d.displacementMap.value=l.displacementMap,t(l.displacementMap,d.displacementMapTransform),d.displacementScale.value=l.displacementScale,d.displacementBias.value=l.displacementBias),l.emissiveMap&&(d.emissiveMap.value=l.emissiveMap,t(l.emissiveMap,d.emissiveMapTransform)),l.specularMap&&(d.specularMap.value=l.specularMap,t(l.specularMap,d.specularMapTransform)),l.alphaTest>0&&(d.alphaTest.value=l.alphaTest);const w=n.get(l),R=w.envMap,x=w.envMapRotation;R&&(d.envMap.value=R,en.copy(x),en.x*=-1,en.y*=-1,en.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(en.y*=-1,en.z*=-1),d.envMapRotation.value.setFromMatrix4(Hu.makeRotationFromEuler(en)),d.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=l.reflectivity,d.ior.value=l.ior,d.refractionRatio.value=l.refractionRatio),l.lightMap&&(d.lightMap.value=l.lightMap,d.lightMapIntensity.value=l.lightMapIntensity,t(l.lightMap,d.lightMapTransform)),l.aoMap&&(d.aoMap.value=l.aoMap,d.aoMapIntensity.value=l.aoMapIntensity,t(l.aoMap,d.aoMapTransform))}function s(d,l){d.diffuse.value.copy(l.color),d.opacity.value=l.opacity,l.map&&(d.map.value=l.map,t(l.map,d.mapTransform))}function o(d,l){d.dashSize.value=l.dashSize,d.totalSize.value=l.dashSize+l.gapSize,d.scale.value=l.scale}function h(d,l,w,R){d.diffuse.value.copy(l.color),d.opacity.value=l.opacity,d.size.value=l.size*w,d.scale.value=R*.5,l.map&&(d.map.value=l.map,t(l.map,d.uvTransform)),l.alphaMap&&(d.alphaMap.value=l.alphaMap,t(l.alphaMap,d.alphaMapTransform)),l.alphaTest>0&&(d.alphaTest.value=l.alphaTest)}function f(d,l){d.diffuse.value.copy(l.color),d.opacity.value=l.opacity,d.rotation.value=l.rotation,l.map&&(d.map.value=l.map,t(l.map,d.mapTransform)),l.alphaMap&&(d.alphaMap.value=l.alphaMap,t(l.alphaMap,d.alphaMapTransform)),l.alphaTest>0&&(d.alphaTest.value=l.alphaTest)}function m(d,l){d.specular.value.copy(l.specular),d.shininess.value=Math.max(l.shininess,1e-4)}function p(d,l){l.gradientMap&&(d.gradientMap.value=l.gradientMap)}function g(d,l){d.metalness.value=l.metalness,l.metalnessMap&&(d.metalnessMap.value=l.metalnessMap,t(l.metalnessMap,d.metalnessMapTransform)),d.roughness.value=l.roughness,l.roughnessMap&&(d.roughnessMap.value=l.roughnessMap,t(l.roughnessMap,d.roughnessMapTransform)),l.envMap&&(d.envMapIntensity.value=l.envMapIntensity)}function E(d,l,w){d.ior.value=l.ior,l.sheen>0&&(d.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),d.sheenRoughness.value=l.sheenRoughness,l.sheenColorMap&&(d.sheenColorMap.value=l.sheenColorMap,t(l.sheenColorMap,d.sheenColorMapTransform)),l.sheenRoughnessMap&&(d.sheenRoughnessMap.value=l.sheenRoughnessMap,t(l.sheenRoughnessMap,d.sheenRoughnessMapTransform))),l.clearcoat>0&&(d.clearcoat.value=l.clearcoat,d.clearcoatRoughness.value=l.clearcoatRoughness,l.clearcoatMap&&(d.clearcoatMap.value=l.clearcoatMap,t(l.clearcoatMap,d.clearcoatMapTransform)),l.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap,t(l.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),l.clearcoatNormalMap&&(d.clearcoatNormalMap.value=l.clearcoatNormalMap,t(l.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),l.side===Mt&&d.clearcoatNormalScale.value.negate())),l.dispersion>0&&(d.dispersion.value=l.dispersion),l.iridescence>0&&(d.iridescence.value=l.iridescence,d.iridescenceIOR.value=l.iridescenceIOR,d.iridescenceThicknessMinimum.value=l.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=l.iridescenceThicknessRange[1],l.iridescenceMap&&(d.iridescenceMap.value=l.iridescenceMap,t(l.iridescenceMap,d.iridescenceMapTransform)),l.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=l.iridescenceThicknessMap,t(l.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),l.transmission>0&&(d.transmission.value=l.transmission,d.transmissionSamplerMap.value=w.texture,d.transmissionSamplerSize.value.set(w.width,w.height),l.transmissionMap&&(d.transmissionMap.value=l.transmissionMap,t(l.transmissionMap,d.transmissionMapTransform)),d.thickness.value=l.thickness,l.thicknessMap&&(d.thicknessMap.value=l.thicknessMap,t(l.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=l.attenuationDistance,d.attenuationColor.value.copy(l.attenuationColor)),l.anisotropy>0&&(d.anisotropyVector.value.set(l.anisotropy*Math.cos(l.anisotropyRotation),l.anisotropy*Math.sin(l.anisotropyRotation)),l.anisotropyMap&&(d.anisotropyMap.value=l.anisotropyMap,t(l.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=l.specularIntensity,d.specularColor.value.copy(l.specularColor),l.specularColorMap&&(d.specularColorMap.value=l.specularColorMap,t(l.specularColorMap,d.specularColorMapTransform)),l.specularIntensityMap&&(d.specularIntensityMap.value=l.specularIntensityMap,t(l.specularIntensityMap,d.specularIntensityMapTransform))}function A(d,l){l.matcap&&(d.matcap.value=l.matcap)}function M(d,l){const w=n.get(l).light;d.referencePosition.value.setFromMatrixPosition(w.matrixWorld),d.nearDistance.value=w.shadow.camera.near,d.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ku(e,n,t,i){let r={},a={},s=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function h(w,R){const x=R.program;i.uniformBlockBinding(w,x)}function f(w,R){let x=r[w.id];x===void 0&&(A(w),x=m(w),r[w.id]=x,w.addEventListener("dispose",d));const L=R.program;i.updateUBOMapping(w,L);const P=n.render.frame;a[w.id]!==P&&(g(w),a[w.id]=P)}function m(w){const R=p();w.__bindingPointIndex=R;const x=e.createBuffer(),L=w.__size,P=w.usage;return e.bindBuffer(e.UNIFORM_BUFFER,x),e.bufferData(e.UNIFORM_BUFFER,L,P),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,R,x),x}function p(){for(let w=0;w<o;w++)if(s.indexOf(w)===-1)return s.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const R=r[w.id],x=w.uniforms,L=w.__cache;e.bindBuffer(e.UNIFORM_BUFFER,R);for(let P=0,I=x.length;P<I;P++){const G=Array.isArray(x[P])?x[P]:[x[P]];for(let v=0,_=G.length;v<_;v++){const U=G[v];if(E(U,P,v,L)===!0){const B=U.__offset,X=Array.isArray(U.value)?U.value:[U.value];let q=0;for(let $=0;$<X.length;$++){const W=X[$],ne=M(W);typeof W=="number"||typeof W=="boolean"?(U.__data[0]=W,e.bufferSubData(e.UNIFORM_BUFFER,B+q,U.__data)):W.isMatrix3?(U.__data[0]=W.elements[0],U.__data[1]=W.elements[1],U.__data[2]=W.elements[2],U.__data[3]=0,U.__data[4]=W.elements[3],U.__data[5]=W.elements[4],U.__data[6]=W.elements[5],U.__data[7]=0,U.__data[8]=W.elements[6],U.__data[9]=W.elements[7],U.__data[10]=W.elements[8],U.__data[11]=0):(W.toArray(U.__data,q),q+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,B,U.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function E(w,R,x,L){const P=w.value,I=R+"_"+x;if(L[I]===void 0)return typeof P=="number"||typeof P=="boolean"?L[I]=P:L[I]=P.clone(),!0;{const G=L[I];if(typeof P=="number"||typeof P=="boolean"){if(G!==P)return L[I]=P,!0}else if(G.equals(P)===!1)return G.copy(P),!0}return!1}function A(w){const R=w.uniforms;let x=0;const L=16;for(let I=0,G=R.length;I<G;I++){const v=Array.isArray(R[I])?R[I]:[R[I]];for(let _=0,U=v.length;_<U;_++){const B=v[_],X=Array.isArray(B.value)?B.value:[B.value];for(let q=0,$=X.length;q<$;q++){const W=X[q],ne=M(W),V=x%L,Ee=V%ne.boundary,be=V+Ee;x+=Ee,be!==0&&L-be<ne.storage&&(x+=L-be),B.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=x,x+=ne.storage}}}const P=x%L;return P>0&&(x+=L-P),w.__size=x,w.__cache={},this}function M(w){const R={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(R.boundary=4,R.storage=4):w.isVector2?(R.boundary=8,R.storage=8):w.isVector3||w.isColor?(R.boundary=16,R.storage=12):w.isVector4?(R.boundary=16,R.storage=16):w.isMatrix3?(R.boundary=48,R.storage=48):w.isMatrix4?(R.boundary=64,R.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),R}function d(w){const R=w.target;R.removeEventListener("dispose",d);const x=s.indexOf(R.__bindingPointIndex);s.splice(x,1),e.deleteBuffer(r[R.id]),delete r[R.id],delete a[R.id]}function l(){for(const w in r)e.deleteBuffer(r[w]);s=[],r={},a={}}return{bind:h,update:f,dispose:l}}class zu{constructor(n={}){const{canvas:t=Lo(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:g=!1}=n;this.isWebGLRenderer=!0;let E;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=i.getContextAttributes().alpha}else E=s;const A=new Uint32Array(4),M=new Int32Array(4);let d=null,l=null;const w=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let L=!1;this._outputColorSpace=Uo;let P=0,I=0,G=null,v=-1,_=null;const U=new gt,B=new gt;let X=null;const q=new We(0);let $=0,W=t.width,ne=t.height,V=1,Ee=null,be=null;const Ie=new gt(0,0,W,ne),Ve=new gt(0,0,W,ne);let nt=!1;const et=new Kr;let Xe=!1,k=!1;const K=new Gt,de=new ae,ye=new gt,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function dt(){return G===null?V:1}let T=i;function Ze(u,C){return t.getContext(u,C)}try{const u={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:m,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Do}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",Z,!1),T===null){const C="webgl2";if(T=Ze(C,u),T===null)throw Ze(C)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(u){throw console.error("THREE.WebGLRenderer: "+u.message),u}let Ue,Ce,me,Qe,_e,Ne,lt,it,S,c,D,H,Y,F,Me,ee,ge,ve,J,se,we,Se,re,De;function b(){Ue=new Jd(T),Ue.init(),Se=new Nu(T,Ue),Ce=new Xd(T,Ue,n,Se),me=new Du(T,Ue),Ce.reversedDepthBuffer&&g&&me.buffers.depth.setReversed(!0),Qe=new tf(T),_e=new Eu,Ne=new Iu(T,Ue,me,_e,Ce,Se,Qe),lt=new Yd(x),it=new Qd(x),S=new sl(T),re=new zd(T,S),c=new jd(T,S,Qe,re),D=new af(T,c,S,Qe),J=new nf(T,Ce,Ne),ee=new qd(_e),H=new Su(x,lt,it,Ue,Ce,re,ee),Y=new Vu(x,_e),F=new xu,Me=new Cu(Ue),ve=new kd(x,lt,it,me,D,E,h),ge=new Lu(x,D,Ce),De=new ku(T,Qe,Ce,me),se=new Wd(T,Ue,Qe),we=new ef(T,Ue,Qe),Qe.programs=H.programs,x.capabilities=Ce,x.extensions=Ue,x.properties=_e,x.renderLists=F,x.shadowMap=ge,x.state=me,x.info=Qe}b();const j=new Gu(x,T);this.xr=j,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const u=Ue.get("WEBGL_lose_context");u&&u.loseContext()},this.forceContextRestore=function(){const u=Ue.get("WEBGL_lose_context");u&&u.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(u){u!==void 0&&(V=u,this.setSize(W,ne,!1))},this.getSize=function(u){return u.set(W,ne)},this.setSize=function(u,C,N=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=u,ne=C,t.width=Math.floor(u*V),t.height=Math.floor(C*V),N===!0&&(t.style.width=u+"px",t.style.height=C+"px"),this.setViewport(0,0,u,C)},this.getDrawingBufferSize=function(u){return u.set(W*V,ne*V).floor()},this.setDrawingBufferSize=function(u,C,N){W=u,ne=C,V=N,t.width=Math.floor(u*N),t.height=Math.floor(C*N),this.setViewport(0,0,u,C)},this.getCurrentViewport=function(u){return u.copy(U)},this.getViewport=function(u){return u.copy(Ie)},this.setViewport=function(u,C,N,O){u.isVector4?Ie.set(u.x,u.y,u.z,u.w):Ie.set(u,C,N,O),me.viewport(U.copy(Ie).multiplyScalar(V).round())},this.getScissor=function(u){return u.copy(Ve)},this.setScissor=function(u,C,N,O){u.isVector4?Ve.set(u.x,u.y,u.z,u.w):Ve.set(u,C,N,O),me.scissor(B.copy(Ve).multiplyScalar(V).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(u){me.setScissorTest(nt=u)},this.setOpaqueSort=function(u){Ee=u},this.setTransparentSort=function(u){be=u},this.getClearColor=function(u){return u.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(u=!0,C=!0,N=!0){let O=0;if(u){let y=!1;if(G!==null){const Q=G.texture.format;y=Q===ro||Q===ao||Q===io}if(y){const Q=G.texture.type,oe=Q===un||Q===Vn||Q===si||Q===Hn||Q===Jr||Q===jr,fe=ve.getClearColor(),le=ve.getClearAlpha(),Re=fe.r,Pe=fe.g,Te=fe.b;oe?(A[0]=Re,A[1]=Pe,A[2]=Te,A[3]=le,T.clearBufferuiv(T.COLOR,0,A)):(M[0]=Re,M[1]=Pe,M[2]=Te,M[3]=le,T.clearBufferiv(T.COLOR,0,M))}else O|=T.COLOR_BUFFER_BIT}C&&(O|=T.DEPTH_BUFFER_BIT),N&&(O|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),ve.dispose(),F.dispose(),Me.dispose(),_e.dispose(),lt.dispose(),it.dispose(),D.dispose(),re.dispose(),De.dispose(),H.dispose(),j.dispose(),j.removeEventListener("sessionstart",yt),j.removeEventListener("sessionend",ga),Qt.stop()};function te(u){u.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const u=Qe.autoReset,C=ge.enabled,N=ge.autoUpdate,O=ge.needsUpdate,y=ge.type;b(),Qe.autoReset=u,ge.enabled=C,ge.autoUpdate=N,ge.needsUpdate=O,ge.type=y}function Z(u){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",u.statusMessage)}function z(u){const C=u.target;C.removeEventListener("dispose",z),ue(C)}function ue(u){Le(u),_e.remove(u)}function Le(u){const C=_e.get(u).programs;C!==void 0&&(C.forEach(function(N){H.releaseProgram(N)}),u.isShaderMaterial&&H.releaseShaderCache(u))}this.renderBufferDirect=function(u,C,N,O,y,Q){C===null&&(C=xe);const oe=y.isMesh&&y.matrixWorld.determinant()<0,fe=bo(u,C,N,O,y);me.setMaterial(O,oe);let le=N.index,Re=1;if(O.wireframe===!0){if(le=c.getWireframeAttribute(N),le===void 0)return;Re=2}const Pe=N.drawRange,Te=N.attributes.position;let Fe=Pe.start*Re,ze=(Pe.start+Pe.count)*Re;Q!==null&&(Fe=Math.max(Fe,Q.start*Re),ze=Math.min(ze,(Q.start+Q.count)*Re)),le!==null?(Fe=Math.max(Fe,0),ze=Math.min(ze,le.count)):Te!=null&&(Fe=Math.max(Fe,0),ze=Math.min(ze,Te.count));const tt=ze-Fe;if(tt<0||tt===1/0)return;re.setup(y,O,fe,N,le);let Ke,qe=se;if(le!==null&&(Ke=S.get(le),qe=we,qe.setIndex(Ke)),y.isMesh)O.wireframe===!0?(me.setLineWidth(O.wireframeLinewidth*dt()),qe.setMode(T.LINES)):qe.setMode(T.TRIANGLES);else if(y.isLine){let Ae=O.linewidth;Ae===void 0&&(Ae=1),me.setLineWidth(Ae*dt()),y.isLineSegments?qe.setMode(T.LINES):y.isLineLoop?qe.setMode(T.LINE_LOOP):qe.setMode(T.LINE_STRIP)}else y.isPoints?qe.setMode(T.POINTS):y.isSprite&&qe.setMode(T.TRIANGLES);if(y.isBatchedMesh)if(y._multiDrawInstances!==null)Hi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),qe.renderMultiDrawInstances(y._multiDrawStarts,y._multiDrawCounts,y._multiDrawCount,y._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))qe.renderMultiDraw(y._multiDrawStarts,y._multiDrawCounts,y._multiDrawCount);else{const Ae=y._multiDrawStarts,Je=y._multiDrawCounts,Ge=y._multiDrawCount,vt=le?S.get(le).bytesPerElement:1,hn=_e.get(O).currentProgram.getUniforms();for(let St=0;St<Ge;St++)hn.setValue(T,"_gl_DrawID",St),qe.render(Ae[St]/vt,Je[St])}else if(y.isInstancedMesh)qe.renderInstances(Fe,tt,y.count);else if(N.isInstancedBufferGeometry){const Ae=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,Je=Math.min(N.instanceCount,Ae);qe.renderInstances(Fe,tt,Je)}else qe.render(Fe,tt)};function Ye(u,C,N){u.transparent===!0&&u.side===Ut&&u.forceSinglePass===!1?(u.side=Mt,u.needsUpdate=!0,Kn(u,C,N),u.side=Gn,u.needsUpdate=!0,Kn(u,C,N),u.side=Ut):Kn(u,C,N)}this.compile=function(u,C,N=null){N===null&&(N=u),l=Me.get(N),l.init(C),R.push(l),N.traverseVisible(function(y){y.isLight&&y.layers.test(C.layers)&&(l.pushLight(y),y.castShadow&&l.pushShadow(y))}),u!==N&&u.traverseVisible(function(y){y.isLight&&y.layers.test(C.layers)&&(l.pushLight(y),y.castShadow&&l.pushShadow(y))}),l.setupLights();const O=new Set;return u.traverse(function(y){if(!(y.isMesh||y.isPoints||y.isLine||y.isSprite))return;const Q=y.material;if(Q)if(Array.isArray(Q))for(let oe=0;oe<Q.length;oe++){const fe=Q[oe];Ye(fe,N,y),O.add(fe)}else Ye(Q,N,y),O.add(Q)}),l=R.pop(),O},this.compileAsync=function(u,C,N=null){const O=this.compile(u,C,N);return new Promise(y=>{function Q(){if(O.forEach(function(oe){_e.get(oe).currentProgram.isReady()&&O.delete(oe)}),O.size===0){y(u);return}setTimeout(Q,10)}Ue.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let ke=null;function It(u){ke&&ke(u)}function yt(){Qt.stop()}function ga(){Qt.start()}const Qt=new mo;Qt.setAnimationLoop(It),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(u){ke=u,j.setAnimationLoop(u),u===null?Qt.stop():Qt.start()},j.addEventListener("sessionstart",yt),j.addEventListener("sessionend",ga),this.render=function(u,C){if(C!==void 0&&C.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(C),C=j.getCamera()),u.isScene===!0&&u.onBeforeRender(x,u,C,G),l=Me.get(u,R.length),l.init(C),R.push(l),K.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),et.setFromProjectionMatrix(K,Ta,C.reversedDepth),k=this.localClippingEnabled,Xe=ee.init(this.clippingPlanes,k),d=F.get(u,w.length),d.init(),w.push(d),j.enabled===!0&&j.isPresenting===!0){const Q=x.xr.getDepthSensingMesh();Q!==null&&gi(Q,C,-1/0,x.sortObjects)}gi(u,C,0,x.sortObjects),d.finish(),x.sortObjects===!0&&d.sort(Ee,be),Be=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Be&&ve.addToRenderList(d,u),this.info.render.frame++,Xe===!0&&ee.beginShadows();const N=l.state.shadowsArray;ge.render(N,u,C),Xe===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=d.opaque,y=d.transmissive;if(l.setupLights(),C.isArrayCamera){const Q=C.cameras;if(y.length>0)for(let oe=0,fe=Q.length;oe<fe;oe++){const le=Q[oe];Sa(O,y,u,le)}Be&&ve.render(u);for(let oe=0,fe=Q.length;oe<fe;oe++){const le=Q[oe];va(d,u,le,le.viewport)}}else y.length>0&&Sa(O,y,u,C),Be&&ve.render(u),va(d,u,C);G!==null&&I===0&&(Ne.updateMultisampleRenderTarget(G),Ne.updateRenderTargetMipmap(G)),u.isScene===!0&&u.onAfterRender(x,u,C),re.resetDefaultState(),v=-1,_=null,R.pop(),R.length>0?(l=R[R.length-1],Xe===!0&&ee.setGlobalState(x.clippingPlanes,l.state.camera)):l=null,w.pop(),w.length>0?d=w[w.length-1]:d=null};function gi(u,C,N,O){if(u.visible===!1)return;if(u.layers.test(C.layers)){if(u.isGroup)N=u.renderOrder;else if(u.isLOD)u.autoUpdate===!0&&u.update(C);else if(u.isLight)l.pushLight(u),u.castShadow&&l.pushShadow(u);else if(u.isSprite){if(!u.frustumCulled||et.intersectsSprite(u)){O&&ye.setFromMatrixPosition(u.matrixWorld).applyMatrix4(K);const oe=D.update(u),fe=u.material;fe.visible&&d.push(u,oe,fe,N,ye.z,null)}}else if((u.isMesh||u.isLine||u.isPoints)&&(!u.frustumCulled||et.intersectsObject(u))){const oe=D.update(u),fe=u.material;if(O&&(u.boundingSphere!==void 0?(u.boundingSphere===null&&u.computeBoundingSphere(),ye.copy(u.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),ye.copy(oe.boundingSphere.center)),ye.applyMatrix4(u.matrixWorld).applyMatrix4(K)),Array.isArray(fe)){const le=oe.groups;for(let Re=0,Pe=le.length;Re<Pe;Re++){const Te=le[Re],Fe=fe[Te.materialIndex];Fe&&Fe.visible&&d.push(u,oe,Fe,N,ye.z,Te)}}else fe.visible&&d.push(u,oe,fe,N,ye.z,null)}}const Q=u.children;for(let oe=0,fe=Q.length;oe<fe;oe++)gi(Q[oe],C,N,O)}function va(u,C,N,O){const y=u.opaque,Q=u.transmissive,oe=u.transparent;l.setupLightsView(N),Xe===!0&&ee.setGlobalState(x.clippingPlanes,N),O&&me.viewport(U.copy(O)),y.length>0&&Yn(y,C,N),Q.length>0&&Yn(Q,C,N),oe.length>0&&Yn(oe,C,N),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Sa(u,C,N,O){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;l.state.transmissionRenderTarget[O.id]===void 0&&(l.state.transmissionRenderTarget[O.id]=new En(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?ci:un,minFilter:yn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const Q=l.state.transmissionRenderTarget[O.id],oe=O.viewport||U;Q.setSize(oe.z*x.transmissionResolutionScale,oe.w*x.transmissionResolutionScale);const fe=x.getRenderTarget(),le=x.getActiveCubeFace(),Re=x.getActiveMipmapLevel();x.setRenderTarget(Q),x.getClearColor(q),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),x.clear(),Be&&ve.render(N);const Pe=x.toneMapping;x.toneMapping=Yt;const Te=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),l.setupLightsView(O),Xe===!0&&ee.setGlobalState(x.clippingPlanes,O),Yn(u,N,O),Ne.updateMultisampleRenderTarget(Q),Ne.updateRenderTargetMipmap(Q),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let ze=0,tt=C.length;ze<tt;ze++){const Ke=C[ze],qe=Ke.object,Ae=Ke.geometry,Je=Ke.material,Ge=Ke.group;if(Je.side===Ut&&qe.layers.test(O.layers)){const vt=Je.side;Je.side=Mt,Je.needsUpdate=!0,Ea(qe,N,O,Ae,Je,Ge),Je.side=vt,Je.needsUpdate=!0,Fe=!0}}Fe===!0&&(Ne.updateMultisampleRenderTarget(Q),Ne.updateRenderTargetMipmap(Q))}x.setRenderTarget(fe,le,Re),x.setClearColor(q,$),Te!==void 0&&(O.viewport=Te),x.toneMapping=Pe}function Yn(u,C,N){const O=C.isScene===!0?C.overrideMaterial:null;for(let y=0,Q=u.length;y<Q;y++){const oe=u[y],fe=oe.object,le=oe.geometry,Re=oe.group;let Pe=oe.material;Pe.allowOverride===!0&&O!==null&&(Pe=O),fe.layers.test(N.layers)&&Ea(fe,C,N,le,Pe,Re)}}function Ea(u,C,N,O,y,Q){u.onBeforeRender(x,C,N,O,y,Q),u.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,u.matrixWorld),u.normalMatrix.getNormalMatrix(u.modelViewMatrix),y.onBeforeRender(x,C,N,O,u,Q),y.transparent===!0&&y.side===Ut&&y.forceSinglePass===!1?(y.side=Mt,y.needsUpdate=!0,x.renderBufferDirect(N,C,O,y,u,Q),y.side=Gn,y.needsUpdate=!0,x.renderBufferDirect(N,C,O,y,u,Q),y.side=Ut):x.renderBufferDirect(N,C,O,y,u,Q),u.onAfterRender(x,C,N,O,y,Q)}function Kn(u,C,N){C.isScene!==!0&&(C=xe);const O=_e.get(u),y=l.state.lights,Q=l.state.shadowsArray,oe=y.state.version,fe=H.getParameters(u,y.state,Q,C,N),le=H.getProgramCacheKey(fe);let Re=O.programs;O.environment=u.isMeshStandardMaterial?C.environment:null,O.fog=C.fog,O.envMap=(u.isMeshStandardMaterial?it:lt).get(u.envMap||O.environment),O.envMapRotation=O.environment!==null&&u.envMap===null?C.environmentRotation:u.envMapRotation,Re===void 0&&(u.addEventListener("dispose",z),Re=new Map,O.programs=Re);let Pe=Re.get(le);if(Pe!==void 0){if(O.currentProgram===Pe&&O.lightsStateVersion===oe)return xa(u,fe),Pe}else fe.uniforms=H.getUniforms(u),u.onBeforeCompile(fe,x),Pe=H.acquireProgram(fe,le),Re.set(le,Pe),O.uniforms=fe.uniforms;const Te=O.uniforms;return(!u.isShaderMaterial&&!u.isRawShaderMaterial||u.clipping===!0)&&(Te.clippingPlanes=ee.uniform),xa(u,fe),O.needsLights=wo(u),O.lightsStateVersion=oe,O.needsLights&&(Te.ambientLightColor.value=y.state.ambient,Te.lightProbe.value=y.state.probe,Te.directionalLights.value=y.state.directional,Te.directionalLightShadows.value=y.state.directionalShadow,Te.spotLights.value=y.state.spot,Te.spotLightShadows.value=y.state.spotShadow,Te.rectAreaLights.value=y.state.rectArea,Te.ltc_1.value=y.state.rectAreaLTC1,Te.ltc_2.value=y.state.rectAreaLTC2,Te.pointLights.value=y.state.point,Te.pointLightShadows.value=y.state.pointShadow,Te.hemisphereLights.value=y.state.hemi,Te.directionalShadowMap.value=y.state.directionalShadowMap,Te.directionalShadowMatrix.value=y.state.directionalShadowMatrix,Te.spotShadowMap.value=y.state.spotShadowMap,Te.spotLightMatrix.value=y.state.spotLightMatrix,Te.spotLightMap.value=y.state.spotLightMap,Te.pointShadowMap.value=y.state.pointShadowMap,Te.pointShadowMatrix.value=y.state.pointShadowMatrix),O.currentProgram=Pe,O.uniformsList=null,Pe}function Ma(u){if(u.uniformsList===null){const C=u.currentProgram.getUniforms();u.uniformsList=ii.seqWithValue(C.seq,u.uniforms)}return u.uniformsList}function xa(u,C){const N=_e.get(u);N.outputColorSpace=C.outputColorSpace,N.batching=C.batching,N.batchingColor=C.batchingColor,N.instancing=C.instancing,N.instancingColor=C.instancingColor,N.instancingMorph=C.instancingMorph,N.skinning=C.skinning,N.morphTargets=C.morphTargets,N.morphNormals=C.morphNormals,N.morphColors=C.morphColors,N.morphTargetsCount=C.morphTargetsCount,N.numClippingPlanes=C.numClippingPlanes,N.numIntersection=C.numClipIntersection,N.vertexAlphas=C.vertexAlphas,N.vertexTangents=C.vertexTangents,N.toneMapping=C.toneMapping}function bo(u,C,N,O,y){C.isScene!==!0&&(C=xe),Ne.resetTextureUnits();const Q=C.fog,oe=O.isMeshStandardMaterial?C.environment:null,fe=G===null?x.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:di,le=(O.isMeshStandardMaterial?it:lt).get(O.envMap||oe),Re=O.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Pe=!!N.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Te=!!N.morphAttributes.position,Fe=!!N.morphAttributes.normal,ze=!!N.morphAttributes.color;let tt=Yt;O.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(tt=x.toneMapping);const Ke=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,qe=Ke!==void 0?Ke.length:0,Ae=_e.get(O),Je=l.state.lights;if(Xe===!0&&(k===!0||u!==_)){const ft=u===_&&O.id===v;ee.setState(O,u,ft)}let Ge=!1;O.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Je.state.version||Ae.outputColorSpace!==fe||y.isBatchedMesh&&Ae.batching===!1||!y.isBatchedMesh&&Ae.batching===!0||y.isBatchedMesh&&Ae.batchingColor===!0&&y.colorTexture===null||y.isBatchedMesh&&Ae.batchingColor===!1&&y.colorTexture!==null||y.isInstancedMesh&&Ae.instancing===!1||!y.isInstancedMesh&&Ae.instancing===!0||y.isSkinnedMesh&&Ae.skinning===!1||!y.isSkinnedMesh&&Ae.skinning===!0||y.isInstancedMesh&&Ae.instancingColor===!0&&y.instanceColor===null||y.isInstancedMesh&&Ae.instancingColor===!1&&y.instanceColor!==null||y.isInstancedMesh&&Ae.instancingMorph===!0&&y.morphTexture===null||y.isInstancedMesh&&Ae.instancingMorph===!1&&y.morphTexture!==null||Ae.envMap!==le||O.fog===!0&&Ae.fog!==Q||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ee.numPlanes||Ae.numIntersection!==ee.numIntersection)||Ae.vertexAlphas!==Re||Ae.vertexTangents!==Pe||Ae.morphTargets!==Te||Ae.morphNormals!==Fe||Ae.morphColors!==ze||Ae.toneMapping!==tt||Ae.morphTargetsCount!==qe)&&(Ge=!0):(Ge=!0,Ae.__version=O.version);let vt=Ae.currentProgram;Ge===!0&&(vt=Kn(O,C,y));let hn=!1,St=!1,An=!1;const je=vt.getUniforms(),Tt=Ae.uniforms;if(me.useProgram(vt.program)&&(hn=!0,St=!0,An=!0),O.id!==v&&(v=O.id,St=!0),hn||_!==u){me.buffers.depth.getReversed()&&u.reversedDepth!==!0&&(u._reversedDepth=!0,u.updateProjectionMatrix()),je.setValue(T,"projectionMatrix",u.projectionMatrix),je.setValue(T,"viewMatrix",u.matrixWorldInverse);const ht=je.map.cameraPosition;ht!==void 0&&ht.setValue(T,de.setFromMatrixPosition(u.matrixWorld)),Ce.logarithmicDepthBuffer&&je.setValue(T,"logDepthBufFC",2/(Math.log(u.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&je.setValue(T,"isOrthographic",u.isOrthographicCamera===!0),_!==u&&(_=u,St=!0,An=!0)}if(y.isSkinnedMesh){je.setOptional(T,y,"bindMatrix"),je.setOptional(T,y,"bindMatrixInverse");const ft=y.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),je.setValue(T,"boneTexture",ft.boneTexture,Ne))}y.isBatchedMesh&&(je.setOptional(T,y,"batchingTexture"),je.setValue(T,"batchingTexture",y._matricesTexture,Ne),je.setOptional(T,y,"batchingIdTexture"),je.setValue(T,"batchingIdTexture",y._indirectTexture,Ne),je.setOptional(T,y,"batchingColorTexture"),y._colorsTexture!==null&&je.setValue(T,"batchingColorTexture",y._colorsTexture,Ne));const At=N.morphAttributes;if((At.position!==void 0||At.normal!==void 0||At.color!==void 0)&&J.update(y,N,vt),(St||Ae.receiveShadow!==y.receiveShadow)&&(Ae.receiveShadow=y.receiveShadow,je.setValue(T,"receiveShadow",y.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Tt.envMap.value=le,Tt.flipEnvMap.value=le.isCubeTexture&&le.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&C.environment!==null&&(Tt.envMapIntensity.value=C.environmentIntensity),St&&(je.setValue(T,"toneMappingExposure",x.toneMappingExposure),Ae.needsLights&&Ro(Tt,An),Q&&O.fog===!0&&Y.refreshFogUniforms(Tt,Q),Y.refreshMaterialUniforms(Tt,O,V,ne,l.state.transmissionRenderTarget[u.id]),ii.upload(T,Ma(Ae),Tt,Ne)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ii.upload(T,Ma(Ae),Tt,Ne),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&je.setValue(T,"center",y.center),je.setValue(T,"modelViewMatrix",y.modelViewMatrix),je.setValue(T,"normalMatrix",y.normalMatrix),je.setValue(T,"modelMatrix",y.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const ft=O.uniformsGroups;for(let ht=0,vi=ft.length;ht<vi;ht++){const Jt=ft[ht];De.update(Jt,vt),De.bind(Jt,vt)}}return vt}function Ro(u,C){u.ambientLightColor.needsUpdate=C,u.lightProbe.needsUpdate=C,u.directionalLights.needsUpdate=C,u.directionalLightShadows.needsUpdate=C,u.pointLights.needsUpdate=C,u.pointLightShadows.needsUpdate=C,u.spotLights.needsUpdate=C,u.spotLightShadows.needsUpdate=C,u.rectAreaLights.needsUpdate=C,u.hemisphereLights.needsUpdate=C}function wo(u){return u.isMeshLambertMaterial||u.isMeshToonMaterial||u.isMeshPhongMaterial||u.isMeshStandardMaterial||u.isShadowMaterial||u.isShaderMaterial&&u.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(u,C,N){const O=_e.get(u);O.__autoAllocateDepthBuffer=u.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),_e.get(u.texture).__webglTexture=C,_e.get(u.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:N,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(u,C){const N=_e.get(u);N.__webglFramebuffer=C,N.__useDefaultFramebuffer=C===void 0};const Co=T.createFramebuffer();this.setRenderTarget=function(u,C=0,N=0){G=u,P=C,I=N;let O=!0,y=null,Q=!1,oe=!1;if(u){const le=_e.get(u);if(le.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(T.FRAMEBUFFER,null),O=!1;else if(le.__webglFramebuffer===void 0)Ne.setupRenderTarget(u);else if(le.__hasExternalTextures)Ne.rebindTextures(u,_e.get(u.texture).__webglTexture,_e.get(u.depthTexture).__webglTexture);else if(u.depthBuffer){const Te=u.depthTexture;if(le.__boundDepthTexture!==Te){if(Te!==null&&_e.has(Te)&&(u.width!==Te.image.width||u.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(u)}}const Re=u.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(oe=!0);const Pe=_e.get(u).__webglFramebuffer;u.isWebGLCubeRenderTarget?(Array.isArray(Pe[C])?y=Pe[C][N]:y=Pe[C],Q=!0):u.samples>0&&Ne.useMultisampledRTT(u)===!1?y=_e.get(u).__webglMultisampledFramebuffer:Array.isArray(Pe)?y=Pe[N]:y=Pe,U.copy(u.viewport),B.copy(u.scissor),X=u.scissorTest}else U.copy(Ie).multiplyScalar(V).floor(),B.copy(Ve).multiplyScalar(V).floor(),X=nt;if(N!==0&&(y=Co),me.bindFramebuffer(T.FRAMEBUFFER,y)&&O&&me.drawBuffers(u,y),me.viewport(U),me.scissor(B),me.setScissorTest(X),Q){const le=_e.get(u.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+C,le.__webglTexture,N)}else if(oe){const le=C;for(let Re=0;Re<u.textures.length;Re++){const Pe=_e.get(u.textures[Re]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Re,Pe.__webglTexture,N,le)}}else if(u!==null&&N!==0){const le=_e.get(u.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,le.__webglTexture,N)}v=-1},this.readRenderTargetPixels=function(u,C,N,O,y,Q,oe,fe=0){if(!(u&&u.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let le=_e.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&oe!==void 0&&(le=le[oe]),le){me.bindFramebuffer(T.FRAMEBUFFER,le);try{const Re=u.textures[fe],Pe=Re.format,Te=Re.type;if(!Ce.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=u.width-O&&N>=0&&N<=u.height-y&&(u.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+fe),T.readPixels(C,N,O,y,Se.convert(Pe),Se.convert(Te),Q))}finally{const Re=G!==null?_e.get(G).__webglFramebuffer:null;me.bindFramebuffer(T.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(u,C,N,O,y,Q,oe,fe=0){if(!(u&&u.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let le=_e.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&oe!==void 0&&(le=le[oe]),le)if(C>=0&&C<=u.width-O&&N>=0&&N<=u.height-y){me.bindFramebuffer(T.FRAMEBUFFER,le);const Re=u.textures[fe],Pe=Re.format,Te=Re.type;if(!Ce.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Fe=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Fe),T.bufferData(T.PIXEL_PACK_BUFFER,Q.byteLength,T.STREAM_READ),u.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+fe),T.readPixels(C,N,O,y,Se.convert(Pe),Se.convert(Te),0);const ze=G!==null?_e.get(G).__webglFramebuffer:null;me.bindFramebuffer(T.FRAMEBUFFER,ze);const tt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Io(T,tt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Fe),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Q),T.deleteBuffer(Fe),T.deleteSync(tt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(u,C=null,N=0){const O=Math.pow(2,-N),y=Math.floor(u.image.width*O),Q=Math.floor(u.image.height*O),oe=C!==null?C.x:0,fe=C!==null?C.y:0;Ne.setTexture2D(u,0),T.copyTexSubImage2D(T.TEXTURE_2D,N,0,0,oe,fe,y,Q),me.unbindTexture()};const Po=T.createFramebuffer(),yo=T.createFramebuffer();this.copyTextureToTexture=function(u,C,N=null,O=null,y=0,Q=null){Q===null&&(y!==0?(Hi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=y,y=0):Q=0);let oe,fe,le,Re,Pe,Te,Fe,ze,tt;const Ke=u.isCompressedTexture?u.mipmaps[Q]:u.image;if(N!==null)oe=N.max.x-N.min.x,fe=N.max.y-N.min.y,le=N.isBox3?N.max.z-N.min.z:1,Re=N.min.x,Pe=N.min.y,Te=N.isBox3?N.min.z:0;else{const At=Math.pow(2,-y);oe=Math.floor(Ke.width*At),fe=Math.floor(Ke.height*At),u.isDataArrayTexture?le=Ke.depth:u.isData3DTexture?le=Math.floor(Ke.depth*At):le=1,Re=0,Pe=0,Te=0}O!==null?(Fe=O.x,ze=O.y,tt=O.z):(Fe=0,ze=0,tt=0);const qe=Se.convert(C.format),Ae=Se.convert(C.type);let Je;C.isData3DTexture?(Ne.setTexture3D(C,0),Je=T.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(Ne.setTexture2DArray(C,0),Je=T.TEXTURE_2D_ARRAY):(Ne.setTexture2D(C,0),Je=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,C.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,C.unpackAlignment);const Ge=T.getParameter(T.UNPACK_ROW_LENGTH),vt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),hn=T.getParameter(T.UNPACK_SKIP_PIXELS),St=T.getParameter(T.UNPACK_SKIP_ROWS),An=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Ke.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Ke.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Re),T.pixelStorei(T.UNPACK_SKIP_ROWS,Pe),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Te);const je=u.isDataArrayTexture||u.isData3DTexture,Tt=C.isDataArrayTexture||C.isData3DTexture;if(u.isDepthTexture){const At=_e.get(u),ft=_e.get(C),ht=_e.get(At.__renderTarget),vi=_e.get(ft.__renderTarget);me.bindFramebuffer(T.READ_FRAMEBUFFER,ht.__webglFramebuffer),me.bindFramebuffer(T.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let Jt=0;Jt<le;Jt++)je&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,_e.get(u).__webglTexture,y,Te+Jt),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,_e.get(C).__webglTexture,Q,tt+Jt)),T.blitFramebuffer(Re,Pe,oe,fe,Fe,ze,oe,fe,T.DEPTH_BUFFER_BIT,T.NEAREST);me.bindFramebuffer(T.READ_FRAMEBUFFER,null),me.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(y!==0||u.isRenderTargetTexture||_e.has(u)){const At=_e.get(u),ft=_e.get(C);me.bindFramebuffer(T.READ_FRAMEBUFFER,Po),me.bindFramebuffer(T.DRAW_FRAMEBUFFER,yo);for(let ht=0;ht<le;ht++)je?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,At.__webglTexture,y,Te+ht):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,At.__webglTexture,y),Tt?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ft.__webglTexture,Q,tt+ht):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ft.__webglTexture,Q),y!==0?T.blitFramebuffer(Re,Pe,oe,fe,Fe,ze,oe,fe,T.COLOR_BUFFER_BIT,T.NEAREST):Tt?T.copyTexSubImage3D(Je,Q,Fe,ze,tt+ht,Re,Pe,oe,fe):T.copyTexSubImage2D(Je,Q,Fe,ze,Re,Pe,oe,fe);me.bindFramebuffer(T.READ_FRAMEBUFFER,null),me.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Tt?u.isDataTexture||u.isData3DTexture?T.texSubImage3D(Je,Q,Fe,ze,tt,oe,fe,le,qe,Ae,Ke.data):C.isCompressedArrayTexture?T.compressedTexSubImage3D(Je,Q,Fe,ze,tt,oe,fe,le,qe,Ke.data):T.texSubImage3D(Je,Q,Fe,ze,tt,oe,fe,le,qe,Ae,Ke):u.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,Q,Fe,ze,oe,fe,qe,Ae,Ke.data):u.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,Q,Fe,ze,Ke.width,Ke.height,qe,Ke.data):T.texSubImage2D(T.TEXTURE_2D,Q,Fe,ze,oe,fe,qe,Ae,Ke);T.pixelStorei(T.UNPACK_ROW_LENGTH,Ge),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,vt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,hn),T.pixelStorei(T.UNPACK_SKIP_ROWS,St),T.pixelStorei(T.UNPACK_SKIP_IMAGES,An),Q===0&&C.generateMipmaps&&T.generateMipmap(Je),me.unbindTexture()},this.initRenderTarget=function(u){_e.get(u).__webglFramebuffer===void 0&&Ne.setupRenderTarget(u)},this.initTexture=function(u){u.isCubeTexture?Ne.setTextureCube(u,0):u.isData3DTexture?Ne.setTexture3D(u,0):u.isDataArrayTexture||u.isCompressedArrayTexture?Ne.setTexture2DArray(u,0):Ne.setTexture2D(u,0),me.unbindTexture()},this.resetState=function(){P=0,I=0,G=null,me.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ta}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(n),t.unpackColorSpace=at._getUnpackColorSpace()}}const ai=256,Nn=6378137,$t=85.0511287798066,Wu=Math.PI*Nn,Xu=2*Wu,On=e=>((e+180)%360+360)%360-180,Nr=e=>{const t=Math.max(-$t,Math.min($t,e))*Math.PI/180;return Nn*Math.log(Math.tan(Math.PI/4+t/2))};function qu(e,n,t){if(!Number.isInteger(t)||t<0||t>30)throw new RangeError("Zoom must be an integer from 0 to 30");const i=2**t,r=Math.floor((On(n)+180)/360*i),s=Math.max(-$t,Math.min($t,e))*Math.PI/180,o=Math.floor((1-Math.asinh(Math.tan(s))/Math.PI)/2*i);return{x:(r%i+i)%i,y:Math.max(0,Math.min(i-1,o)),z:t,n:i}}function Yu(e,n,t){const i=qu(e,n,t),r=ai*i.n,a=(On(n)+180)/360*r,o=Math.max(-$t,Math.min($t,e))*Math.PI/180,h=(1-Math.asinh(Math.tan(o))/Math.PI)/2*r;return{tile:i,u:a/ai-i.x,v:h/ai-i.y}}class Ku{zoom;anchor;originTile;anchorU;anchorV;latitudeScale;tileSpan;originNorthing;constructor(n,t=12){if(!Number.isFinite(n.lat)||!Number.isFinite(n.lon)||Math.abs(n.lat)>90)throw new RangeError("Anchor must be a valid WGS84 latitude/longitude");this.anchor={lat:Math.max(-$t,Math.min($t,n.lat)),lon:On(n.lon)},this.zoom=t;const i=Yu(this.anchor.lat,this.anchor.lon,t);this.originTile=i.tile,this.anchorU=i.u,this.anchorV=i.v,this.latitudeScale=Math.cos(this.anchor.lat*Math.PI/180),this.originNorthing=Nr(this.anchor.lat),this.tileSpan=Xu/this.originTile.n*this.latitudeScale}toLocal(n){const t=On(n.lon-this.anchor.lon),i=Nn*t*Math.PI/180,r=Nr(n.lat)-this.originNorthing;return{x:i*this.latitudeScale,z:r*this.latitudeScale}}toGeo(n){const t=On(this.anchor.lon+n.x/(Nn*this.latitudeScale)*180/Math.PI),i=this.originNorthing+n.z/this.latitudeScale;return{lon:t,lat:(2*Math.atan(Math.exp(i/Nn))-Math.PI/2)*180/Math.PI}}tileOrigin(n,t){return{x:(n-this.anchorU)*this.tileSpan,z:(t+this.anchorV)*this.tileSpan}}tileOffsetAt(n,t){const i=this.anchorU+n/this.tileSpan,r=this.anchorV-t/this.tileSpan,a=Math.floor(i),s=Math.floor(r);return{dx:a>this.originTile.n/2?a-this.originTile.n:a<-this.originTile.n/2?a+this.originTile.n:a,dz:-s||0,u:i-a,v:r-s}}tileAddress(n,t){const i=this.originTile.n;return{x:((this.originTile.x+n)%i+i)%i,y:Math.max(0,Math.min(i-1,this.originTile.y-t)),z:this.zoom,n:i}}}const Eo=[{name:"Manhattan, New York",lat:40.758,lon:-73.9855,terrain:"URBAN JUNGLE"},{name:"Moab, Utah",lat:38.5733,lon:-109.5498,terrain:"RED ROCK COUNTRY"},{name:"Grand Canyon",lat:36.1069,lon:-112.1129,terrain:"THE BIG DROP"},{name:"Mount Everest",lat:27.9881,lon:86.925,terrain:"ROOF OF THE WORLD"},{name:"San Francisco",lat:37.7749,lon:-122.4194,terrain:"HILL CLIMBER"},{name:"Tokyo, Japan",lat:35.6762,lon:139.6503,terrain:"NEON TRAILS"},{name:"Sahara Desert",lat:23.4162,lon:25.6628,terrain:"ENDLESS DUNES"},{name:"Swiss Alps",lat:46.8182,lon:9.2275,terrain:"HIGH ALTITUDE"}];function $u(e){const n=e.trim().match(/^\s*(-?\d+(?:\.\d+)?)\s*[, ]\s*(-?\d+(?:\.\d+)?)\s*$/);if(!n)return null;const t=Number(n[1]),i=Number(n[2]);return Math.abs(t)<=90&&Math.abs(i)<=180?{name:`${t.toFixed(4)}, ${i.toFixed(4)}`,lat:t,lon:i}:null}let Or=0;const Ui=new Map;async function Zu(e){const n=$u(e);if(n)return[n];const t=e.toLowerCase().trim();if(!t)return[];if(Ui.has(t))return Ui.get(t);const i=Math.max(0,1100-(Date.now()-Or));i&&await new Promise(h=>setTimeout(h,i)),Or=Date.now();const r=new URL("https://nominatim.openstreetmap.org/search");r.search=new URLSearchParams({q:e,format:"jsonv2",limit:"5"}).toString();const a=await fetch(r,{headers:{Accept:"application/json"}});if(!a.ok)throw new Error(`Location search unavailable (${a.status})`);const o=(await a.json()).map(h=>({name:h.display_name.split(",").slice(0,3).join(",").trim(),lat:+h.lat,lon:+h.lon}));return Ui.set(t,o),o}function Qu(e,n,t,i){const r=Math.max(0,Math.min(n-1,t*(n-1))),a=Math.max(0,Math.min(n-1,i*(n-1))),s=Math.floor(r),o=Math.floor(a),h=Math.min(n-1,s+1),f=Math.min(n-1,o+1),m=r-s,p=a-o,g=(E,A)=>e[A*n+E]??0;return(g(s,o)*(1-m)+g(h,o)*m)*(1-p)+(g(s,f)*(1-m)+g(h,f)*m)*p}function Fr(e,n,t){const i=new Float32Array((t+1)**2);for(let r=0;r<=t;r++)for(let a=0;a<=t;a++)i[r*(t+1)+a]=Qu(e,n,a/t,r/t);return i}function Br(e,n,t,i){const r=Math.max(0,Math.min(n,t*n)),a=Math.max(0,Math.min(n,i*n)),s=Math.min(n-1,Math.floor(r)),o=Math.min(n-1,Math.floor(a)),h=r-s,f=a-o,m=n+1,p=e[o*m+s]??0,g=e[o*m+s+1]??0,E=e[(o+1)*m+s]??0,A=e[(o+1)*m+s+1]??0;return h>=f?p*(1-h)+g*(h-f)+A*f:p*(1-f)+A*h+E*(f-h)}function Ju(e){const n=new Map,t=new Set;for(const i of e){const r=i.segments+1;for(let a=0;a<=i.segments;a++)for(const[s,o]of[[a,0],[a,i.segments],[0,a],[i.segments,a]]){const h=o*r+s,f=`${i.dx*i.segments+s},${i.dz*i.segments-o}`,m=n.get(f)??[];m.push({tile:i,index:h}),n.set(f,m)}}for(const i of n.values()){if(i.length<2)continue;const r=i.reduce((a,s)=>a+s.tile.grid[s.index],0)/i.length;for(const a of i)a.tile.grid[a.index]!==r&&(a.tile.grid[a.index]=r,t.add(a.tile))}return t}const Di=12,Rt=ai,ju=36,kt=new Map;function Gr(e,n,t){const i=`${t}/${e}/${n}`;if(kt.has(i)){const a=kt.get(i);return kt.delete(i),kt.set(i,a),a}const r=(async()=>{try{const a=new Image;a.crossOrigin="anonymous",a.src=`https://s3.amazonaws.com/elevation-tiles-prod/terrarium/${t}/${e}/${n}.png`,await new Promise((m,p)=>{a.onload=()=>m(),a.onerror=()=>p(new Error("terrain tile unavailable"))});const s=document.createElement("canvas");s.width=Rt,s.height=Rt;const o=s.getContext("2d",{willReadFrequently:!0});if(!o)throw new Error("canvas unavailable");o.drawImage(a,0,0,Rt,Rt);const h=o.getImageData(0,0,Rt,Rt).data,f=new Float32Array(Rt*Rt);for(let m=0;m<f.length;m++)f[m]=h[m*4]*256+h[m*4+1]+h[m*4+2]/256-32768;return{heights:f}}catch{return{heights:new Float32Array(Rt*Rt)}}})();for(kt.set(i,r);kt.size>ju;)kt.delete(kt.keys().next().value);return r}class ep{group=new on;place=null;frame=null;heightSampleMs=0;heightSamples=0;tileBuildMs=0;tileBuilds=0;detailQuality=1;baseline=0;tiles=new Map;requests=new Set;coverage={x:NaN,z:NaN};generation=0;centerSegments;activeTerrainShader=null;biome={desert:1,alpine:0};material;constructor(n=127){this.centerSegments=n,this.material=new wt({color:16777215,roughness:.96,metalness:0,vertexColors:!0}),this.material.onBeforeCompile=t=>{t.uniforms.uRumbleDesert={value:this.biome.desert},t.uniforms.uRumbleAlpine={value:this.biome.alpine},t.uniforms.uRumbleDetail={value:this.detailQuality},this.activeTerrainShader=t,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.78, 0.81, 0.77), rumbleAlpineSnow * 0.82);`)},this.material.customProgramCacheKey=()=>"rumble-terrain-slope-biome-v1"}async load(n){this.clear();const t=++this.generation;this.place=n,this.frame=new Ku(n,Di);const i=n.name.toLowerCase();this.biome.desert=/moab|grand canyon|sahara|utah|arizona/i.test(i)?1:0,this.biome.alpine=/alps|everest|mountain|swiss/i.test(i)?1:0,this.activeTerrainShader&&(this.activeTerrainShader.uniforms.uRumbleDesert.value=this.biome.desert,this.activeTerrainShader.uniforms.uRumbleAlpine.value=this.biome.alpine);const r=this.frame.tileAddress(0,0),a=await Gr(r.x,r.y,Di);if(t!==this.generation)return;const s=Fr(a.heights,Rt,this.centerSegments);this.baseline=Br(s,this.centerSegments,this.frame.anchorU,this.frame.anchorV),this.install(0,0,a,this.centerSegments,s),this.ensureRegion(0,0)}key(n,t){return`${n},${t}`}address(n,t){return this.frame.tileAddress(n,t)}async ensureRegion(n,t){const i=this.frame;if(!i)return;const r=i.tileOffsetAt(n,t),a=r.dx,s=r.dz;if(this.coverage.x===a&&this.coverage.z===s)return;this.coverage={x:a,z:s};const o=this.generation,h=[],f=this.centerSegments;for(let m=s-1;m<=s+1;m++)for(let p=a-1;p<=a+1;p++){const g=this.key(p,m),E=p===a&&m===s?this.centerSegments:f,A=this.tiles.get(g);A&&A.segments!==E&&(this.group.remove(A.mesh),A.mesh.geometry.dispose(),this.tiles.delete(g));const M=`${o}:${g}`;if(this.tiles.has(g)||this.requests.has(M))continue;this.requests.add(M);const d=this.address(p,m);h.push(Gr(d.x,d.y,Di).then(l=>{o===this.generation&&Math.abs(p-this.coverage.x)<=1&&Math.abs(m-this.coverage.z)<=1&&this.install(p,m,l,E)}).finally(()=>this.requests.delete(M)))}for(const[m,p]of this.tiles)(Math.abs(p.dx-a)>1||Math.abs(p.dz-s)>1)&&(this.group.remove(p.mesh),p.mesh.geometry.dispose(),this.tiles.delete(m));await Promise.all(h)}install(n,t,i,r=63,a){const s=this.key(n,t);if(this.tiles.has(s))return;const o=performance.now(),h=this.frame,f=a??Fr(i.heights,Rt,r),m=new kn,p=new Float32Array((r+1)**2*3),g=[],E=[];let A=1/0,M=-1/0;for(const x of f)A=Math.min(A,x),M=Math.max(M,x);const d=/moab|grand canyon|sahara|utah|arizona/i.test(this.place?.name??""),l=(d?["#d0b587","#b99360","#977046","#796044"]:["#c9c1a6","#a49c75","#758557","#657355"]).map(x=>new We(x)),w=h.tileOrigin(n,t);for(let x=0;x<=r;x++)for(let L=0;L<=r;L++){const P=x*(r+1)+L,I=f[P],G=(I-A)/Math.max(1,M-A);p[P*3]=w.x+L/r*h.tileSpan,p[P*3+1]=Pt.clamp((I-this.baseline)*1.25,-900,1800),p[P*3+2]=w.z-x/r*h.tileSpan;const v=l[G>.76?0:G>.49?1:G>.22?2:3];g.push(v.r,v.g,v.b)}for(let x=0;x<r;x++)for(let L=0;L<r;L++){const P=x*(r+1)+L,I=P+1,G=P+r+1,v=G+1;E.push(P,I,v,P,v,G)}m.setIndex(E),m.setAttribute("position",new ln(p,3)),m.setAttribute("color",new rr(g,3)),m.computeVertexNormals();const R=new rt(m,this.material);R.receiveShadow=!0,R.userData.kind="terrain",this.group.add(R),this.tiles.set(s,{data:i,grid:f,mesh:R,segments:r,dx:n,dz:t}),this.reconcileSharedEdges(),this.tileBuildMs+=performance.now()-o,this.tileBuilds++}reconcileSharedEdges(){const n=Ju(Array.from(this.tiles.values()));for(const t of n)this.rebuildGeometry(t)}rebuildGeometry(n){const{segments:t,grid:i,dx:r,dz:a}=n,s=this.frame,o=new kn,h=new Float32Array((t+1)**2*3),f=[],m=[];let p=1/0,g=-1/0;for(const d of i)p=Math.min(p,d),g=Math.max(g,d);const E=/moab|grand canyon|sahara|utah|arizona/i.test(this.place?.name??""),A=(E?["#d0b587","#b99360","#977046","#796044"]:["#c9c1a6","#a49c75","#758557","#657355"]).map(d=>new We(d)),M=s.tileOrigin(r,a);for(let d=0;d<=t;d++)for(let l=0;l<=t;l++){const w=d*(t+1)+l,R=i[w],x=(R-p)/Math.max(1,g-p);h[w*3]=M.x+l/t*s.tileSpan,h[w*3+1]=Pt.clamp((R-this.baseline)*1.25,-900,1800),h[w*3+2]=M.z-d/t*s.tileSpan;const L=A[x>.76?0:x>.49?1:x>.22?2:3];f.push(L.r,L.g,L.b)}for(let d=0;d<t;d++)for(let l=0;l<t;l++){const w=d*(t+1)+l,R=w+1,x=w+t+1,L=x+1;m.push(w,R,L,w,L,x)}o.setIndex(m),o.setAttribute("position",new ln(h,3)),o.setAttribute("color",new rr(f,3)),o.computeVertexNormals(),n.mesh.geometry.dispose(),n.mesh.geometry=o}heightAt(n,t){if(!this.frame||!this.tiles.size)return 0;const i=performance.now();let r=this.frame.tileOffsetAt(n,t);(r.dx!==this.coverage.x||r.dz!==this.coverage.z)&&this.ensureRegion(n,t);let a=this.tiles.get(this.key(r.dx,r.dz));if(a||(a=this.tiles.get(this.key(0,0)),r=this.frame.tileOffsetAt(n,t)),!a)return 0;const s=a===this.tiles.get(this.key(r.dx,r.dz))?r.u:Pt.clamp((n-this.frame.tileOrigin(a.dx,a.dz).x)/this.frame.tileSpan,0,1),o=a===this.tiles.get(this.key(r.dx,r.dz))?r.v:Pt.clamp((this.frame.tileOrigin(a.dx,a.dz).z-t)/this.frame.tileSpan,0,1),h=(Br(a.grid,a.segments,s,o)-this.baseline)*1.25;return this.heightSamples++,this.heightSampleMs+=performance.now()-i,h}takePerformanceSample(){const n={heightSamples:this.heightSamples,heightSampleMs:this.heightSampleMs,tileBuilds:this.tileBuilds,tileBuildMs:this.tileBuildMs};return this.heightSamples=0,this.heightSampleMs=0,this.tileBuilds=0,this.tileBuildMs=0,n}setVisualQuality(n){this.detailQuality=n==="low"?.45:n==="medium"?.72:1,this.activeTerrainShader&&(this.activeTerrainShader.uniforms.uRumbleDetail.value=this.detailQuality)}clear(){this.generation++;for(const n of this.tiles.values())this.group.remove(n.mesh),n.mesh.geometry.dispose();this.tiles.clear(),this.requests.clear(),this.coverage={x:NaN,z:NaN}}dispose(){this.clear(),this.material.dispose()}}function tp(e,n){return e.map(([t,i])=>n.toLocal({lat:t,lon:i}))}const jn=new Map;let Hr=0;async function np(e){const n=`${e.lat.toFixed(3)},${e.lon.toFixed(3)}`;if(jn.has(n))return jn.get(n);try{const i=localStorage.getItem(`monster-map-buildings:${n}`);if(i){const r=JSON.parse(i);if(Date.now()-r.time<360*60*1e3&&Array.isArray(r.data))return jn.set(n,Promise.resolve(r.data)),r.data}}catch{}const t=(async()=>{try{const i=Math.max(0,5e3-(Date.now()-Hr));i&&await new Promise(p=>setTimeout(p,i)),Hr=Date.now();const r=.018,a=.018/Math.max(.3,Math.cos(e.lat*Math.PI/180)),o=`[out:json][timeout:12];(way["building"](${[e.lat-r,e.lon-a,e.lat+r,e.lon+a].join(",")}););out tags geom;`;let h=null;for(const p of["https://overpass.private.coffee/api/interpreter","https://overpass-api.de/api/interpreter"])try{const g=await fetch(p,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"data="+encodeURIComponent(o),signal:AbortSignal.timeout(9e3)});if(g.ok){h=g;break}}catch{}if(!h)throw new Error("Overpass providers unavailable");const m=((await h.json()).elements??[]).filter(p=>p.geometry?.length>=4).slice(0,450).map(p=>({lat:p.center?.lat??p.geometry[0].lat,lon:p.center?.lon??p.geometry[0].lon,tags:p.tags??{},coords:p.geometry.map(g=>[g.lat,g.lon])}));try{localStorage.setItem(`monster-map-buildings:${n}`,JSON.stringify({time:Date.now(),data:m}))}catch{}return m}catch{return[]}})();return jn.set(n,t),t}const ip=new wt({color:5661034,roughness:.9});class ap{group=new on;list=[];place=null;loadToken=0;async load(n,t,i,r){this.reset(i);const a=this.loadToken;this.place=n;const s=await np(n);if(a===this.loadToken){for(const o of s){const h=tp(o.coords,r).map(L=>new pt(L.x,L.z)),f=h.map(L=>L.x),m=h.map(L=>L.y),p=(Math.min(...f)+Math.max(...f))/2,g=(Math.min(...m)+Math.max(...m))/2,E=Math.max(4,Math.max(...f)-Math.min(...f)),A=Math.max(4,Math.max(...m)-Math.min(...m)),M=new Zi;h.forEach((L,P)=>P?M.lineTo(L.x-p,-(L.y-g)):M.moveTo(L.x-p,-(L.y-g))),M.closePath();const d=new uo(M,{depth:1,bevelEnabled:!1});d.rotateX(-Math.PI/2);const l=+(o.tags["building:levels"]??0),w=Math.max(5,+(o.tags.height??0)||l*3.4||8+Math.random()*32);d.scale(1,w,1);const R=new rt(d,ip.clone());R.castShadow=!0,R.receiveShadow=!0,R.userData.kind="building",R.position.x=p,R.position.z=g,R.position.y=t(p,g),this.group.add(R);const x={mesh:R,x:p,z:g,w:E,d:A,h:w,broken:!1};this.list.push(x),i?.addBuilding(x,t(p,g))}this.list.length||this.addBarriers(t,i)}}addBarriers(n,t){const i=new wt({color:13132085,roughness:.8});for(let r=0;r<4;r++)for(let a=-2;a<=2;a++){if((r+a)%3===0)continue;const s=3+(r*7+a*11+30)%3,o=3,h=2.5+(r*13+a*5+40)%3,f=a*5,m=28+r*9,p=new rt(new pn(s,h,o),i.clone());p.position.set(f,n(f,m)+h/2,m),p.castShadow=!0,p.receiveShadow=!0,p.userData.kind="destructible-barrier",this.group.add(p);const g={mesh:p,x:f,z:m,w:s,d:o,h,broken:!1};this.list.push(g),t?.addBuilding(g,n(f,m))}}collide(n,t,i){return this.list.find(r=>!r.broken&&Math.abs(n-r.x)<r.w/2+i&&Math.abs(t-r.z)<r.d/2+i&&Math.random()<.08)}break(n){n.broken=!0,this.group.remove(n.mesh)}reset(n){this.loadToken++;for(const t of this.list)this.group.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),n?.removeBuilding(t);this.list=[],this.place=null}}const Rn=new ae;function bt(e,n,t,i,r,a){const s=2*Math.PI*r/4,o=Math.max(a-2*r,0),h=Math.PI/4;Rn.copy(n),Rn[i]=0,Rn.normalize();const f=.5*s/(s+o),m=1-Rn.angleTo(e)/h;return Math.sign(Rn[t])===1?m*f:o/(s+o)+f+f*(1-m)}class oa extends pn{constructor(n=1,t=1,i=1,r=2,a=.1){const s=r*2+1;if(a=Math.min(n/2,t/2,i/2,a),super(1,1,1,s,s,s),this.type="RoundedBoxGeometry",this.parameters={width:n,height:t,depth:i,segments:r,radius:a},s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const h=new ae,f=new ae,m=new ae(n,t,i).divideScalar(2).subScalar(a),p=this.attributes.position.array,g=this.attributes.normal.array,E=this.attributes.uv.array,A=p.length/6,M=new ae,d=.5/s;for(let l=0,w=0;l<p.length;l+=3,w+=2)switch(h.fromArray(p,l),f.copy(h),f.x-=Math.sign(f.x)*d,f.y-=Math.sign(f.y)*d,f.z-=Math.sign(f.z)*d,f.normalize(),p[l+0]=m.x*Math.sign(h.x)+f.x*a,p[l+1]=m.y*Math.sign(h.y)+f.y*a,p[l+2]=m.z*Math.sign(h.z)+f.z*a,g[l+0]=f.x,g[l+1]=f.y,g[l+2]=f.z,Math.floor(l/A)){case 0:M.set(1,0,0),E[w+0]=bt(M,f,"z","y",a,i),E[w+1]=1-bt(M,f,"y","z",a,t);break;case 1:M.set(-1,0,0),E[w+0]=1-bt(M,f,"z","y",a,i),E[w+1]=1-bt(M,f,"y","z",a,t);break;case 2:M.set(0,1,0),E[w+0]=1-bt(M,f,"x","z",a,n),E[w+1]=bt(M,f,"z","x",a,i);break;case 3:M.set(0,-1,0),E[w+0]=1-bt(M,f,"x","z",a,n),E[w+1]=1-bt(M,f,"z","x",a,i);break;case 4:M.set(0,0,1),E[w+0]=1-bt(M,f,"x","y",a,n),E[w+1]=1-bt(M,f,"y","x",a,t);break;case 5:M.set(0,0,-1),E[w+0]=bt(M,f,"x","y",a,n),E[w+1]=1-bt(M,f,"y","x",a,t);break}}static fromJSON(n){return new oa(n.width,n.height,n.depth,n.segments,n.radius)}}function wn(e,n=!1){const t=e[0].index!==null,i=new Set(Object.keys(e[0].attributes)),r=new Set(Object.keys(e[0].morphAttributes)),a={},s={},o=e[0].morphTargetsRelative,h=new kn;let f=0;for(let m=0;m<e.length;++m){const p=e[m];let g=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const E in p.attributes){if(!i.has(E))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+'. All geometries must have compatible attributes; make sure "'+E+'" attribute exists among all geometries, or in none of them.'),null;a[E]===void 0&&(a[E]=[]),a[E].push(p.attributes[E]),g++}if(g!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const E in p.morphAttributes){if(!r.has(E))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+".  .morphAttributes must be consistent throughout all geometries."),null;s[E]===void 0&&(s[E]=[]),s[E].push(p.morphAttributes[E])}if(n){let E;if(t)E=p.index.count;else if(p.attributes.position!==void 0)E=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". The geometry must have either an index or a position attribute"),null;h.addGroup(f,E,m),f+=E}}if(t){let m=0;const p=[];for(let g=0;g<e.length;++g){const E=e[g].index;for(let A=0;A<E.count;++A)p.push(E.getX(A)+m);m+=e[g].attributes.position.count}h.setIndex(p)}for(const m in a){const p=Vr(a[m]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+m+" attribute."),null;h.setAttribute(m,p)}for(const m in s){const p=s[m][0].length;if(p===0)break;h.morphAttributes=h.morphAttributes||{},h.morphAttributes[m]=[];for(let g=0;g<p;++g){const E=[];for(let M=0;M<s[m].length;++M)E.push(s[m][M][g]);const A=Vr(E);if(!A)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+m+" morphAttribute."),null;h.morphAttributes[m].push(A)}}return h}function Vr(e){let n,t,i,r=-1,a=0;for(let f=0;f<e.length;++f){const m=e[f];if(n===void 0&&(n=m.array.constructor),n!==m.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=m.itemSize),t!==m.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=m.normalized),i!==m.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=m.gpuType),r!==m.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=m.count*t}const s=new n(a),o=new ln(s,t,i);let h=0;for(let f=0;f<e.length;++f){const m=e[f];if(m.isInterleavedBufferAttribute){const p=h/t;for(let g=0,E=m.count;g<E;g++)for(let A=0;A<t;A++){const M=m.getComponent(g,A);o.setComponent(g+p,A,M)}}else s.set(m.array,h);h+=m.count*t}return r!==void 0&&(o.gpuType=r),o}const kr=["front-left","front-right","rear-left","rear-right"],zr=[{x:-1.22,z:1.22},{x:1.22,z:1.22},{x:-1.22,z:-1.25},{x:1.22,z:-1.25}];class rp{root=new on;wheels=[];frontWheels=[];suspension=[];body;opts;model=new on;materials;parts={paint:[],dark:[],chrome:[],glass:[],tire:[],light:[]};wheelSprings;wheelShocks;shockRods;axleLinks;workMatrix=new Gt;workQuaternion=new zt;workPosition=new ae;workScale=new ae;constructor(n={color:"#d84924",scale:1}){this.opts=n,this.root.scale.setScalar(n.scale),this.model.position.y=-1.65,this.root.add(this.model),this.body=new on,this.model.add(this.body),this.makeMaterials(),this.buildChassisAndBody(),this.buildWheels(),this.finishBodyBatches()}makeMaterials(){this.materials={paint:new or({color:this.opts.color,metalness:.43,roughness:.29,clearcoat:.62,clearcoatRoughness:.2}),dark:new wt({color:1382939,metalness:.28,roughness:.68}),chrome:new wt({color:12041920,metalness:.78,roughness:.24}),glass:new or({color:8636379,metalness:.12,roughness:.15,transparent:!0,opacity:.72,clearcoat:.9,side:Ut,depthWrite:!1}),tire:new wt({color:1053204,roughness:.94}),light:new wt({color:16770464,emissive:16754230,emissiveIntensity:1.15,roughness:.2})}}boxGeometry(n,t,i,r,a,s,o=.025,h){const f=new oa(n,t,i,2,Math.min(o,n*.24,t*.24,i*.24)),m=h?new zt().setFromEuler(h):new zt;return f.applyMatrix4(new Gt().compose(new ae(r,a,s),m,new ae(1,1,1))),f}addBox(n,t,i,r,a,s,o,h=.025,f){this.parts[n].push(this.boxGeometry(t,i,r,a,s,o,h,f))}addSideShape(n,t,i,r=.045){const a=new uo(n,{depth:r,bevelEnabled:!1,curveSegments:8});a.rotateY(t<0?-Math.PI/2:Math.PI/2),a.translate(t*1.11,0,0),this.parts[i].push(a)}profileShape(){const n=new Zi;return n.moveTo(-2.02,1.28),n.lineTo(-2.02,1.78),n.lineTo(-1.53,1.86),n.lineTo(-1.34,2.77),n.lineTo(-.91,3.04),n.lineTo(.29,3.04),n.lineTo(.65,2.14),n.lineTo(1.2,1.98),n.lineTo(2.03,1.77),n.lineTo(2.03,1.2),n.quadraticCurveTo(1.22,2.16,.38,1.2),n.lineTo(-.4,1.2),n.quadraticCurveTo(-1.25,2.16,-2.08,1.2),n.lineTo(-2.02,1.28),n.closePath(),n}sideWindow(n,t,i,r){const a=new Zi;return a.moveTo(n,t),a.lineTo(n+.12,r),a.lineTo(i-.1,r),a.lineTo(i,t),a.closePath(),a}buildChassisAndBody(){this.addBox("dark",1.75,.22,3.55,0,1.3,-.02,.055);for(const o of[-.9,.9])this.addBox("dark",.17,.2,3.7,o,1.23,-.02,.045);for(const o of[-1.38,-.2,1.16])this.addBox("chrome",2,.11,.13,0,1.21,o,.025);this.addBox("dark",1.2,.08,.95,0,1.14,.1,.025),this.addBox("paint",2.12,.46,1.27,0,1.76,1.15,.09),this.addBox("paint",1.93,.16,1.48,0,3,-.34,.065),this.addBox("paint",1.78,.96,1.24,0,2.43,-.36,.08);const n=this.profileShape();for(const o of[-1,1])this.addSideShape(n,o,"paint",.055),this.addSideShape(this.sideWindow(-1.19,2.32,-.53,2.8),o,"glass",.018),this.addSideShape(this.sideWindow(-.43,2.32,.16,2.8),o,"glass",.018),this.addBox("chrome",.035,.045,.76,o*1.17,2.2,-.17,.012),this.addBox("chrome",.04,.035,.19,o*1.18,2.05,-.24,.01),this.addBox("dark",.075,.22,1.05,o*1.12,1.31,-.05,.026);this.addBox("glass",1.56,.68,.045,0,2.56,.48,.012,new In(-.48,0,0)),this.addBox("glass",1.48,.52,.04,0,2.55,-1.02,.012,new In(.18,0,0)),this.addBox("chrome",1.75,.055,.12,0,3.08,-.34,.02),this.addBox("dark",1.4,.08,.95,0,1.64,-1.42,.02);for(const o of[-.76,.76])this.addBox("paint",.12,.34,1.02,o,1.79,-1.4,.035);this.addBox("paint",1.48,.38,.13,0,1.77,-1.93,.035);for(let o=0;o<5;o++)this.addBox("chrome",1.25,.018,.024,0,1.69,-1.78+o*.18,.004);this.addBox("chrome",2.22,.2,.22,0,1.47,1.96,.045),this.addBox("dark",1.16,.38,.055,0,1.83,1.94,.012),this.addBox("chrome",1.28,.045,.07,0,2.05,1.95,.012),this.addBox("chrome",1.28,.045,.07,0,1.61,1.95,.012);for(let o=0;o<9;o++)this.addBox("dark",.025,.34,.035,-.5+o*.125,1.83,1.98,.008);this.addBox("dark",.22,.11,.07,0,1.72,2.01,.012),this.addBox("chrome",2.12,.14,.2,0,1.52,-2,.035),this.addBox("chrome",1.95,.055,.14,0,1.68,-2,.015);for(const o of[-.82,.82])this.addBox("dark",.48,.29,.09,o,1.94,1.93,.035),this.addBox("light",.34,.19,.045,o,1.95,1.99,.035),this.addBox("light",.14,.08,.035,o,1.72,2,.018),this.addBox("dark",.18,.08,.04,o,1.52,-2.11,.018);for(const o of[-.69,.69])this.addBox("paint",.08,.055,.83,o,2.02,1.13,.025),this.addBox("chrome",.035,.025,.63,o*1.7,1.9,-.36,.01);for(const o of[-1.1,.46])this.addBox("dark",.05,.86,.06,0,2.51,o,.018);for(let o=-2;o<=2;o++)this.addBox("light",.14,.13,.08,o*.36,3.14,-.25,.06);const t=[];for(const o of[-1.17,1.17])for(const h of[-1.25,1.22]){const f=new Js(new ae(o,1.26,h-.91),new ae(o,2.14,h),new ae(o,1.26,h+.91));t.push(new bi(f,20,.06,7,!1))}const i=wn(t,!1);t.forEach(o=>o.dispose()),this.body.add(new rt(i,this.materials.dark));const a=[-1,1].map(o=>new sr([new ae(o*.86,1.65,-1.82),new ae(o*.86,2.85,-1.55),new ae(o*.86,3.2,-.9),new ae(o*.86,3.2,.05),new ae(o*.82,2.2,.98)])).map(o=>new bi(o,24,.035,7,!1)),s=wn(a,!1);a.forEach(o=>o.dispose()),this.body.add(new rt(s,this.materials.chrome));for(const o of[-1.25,1.22])this.addBox("dark",1.82,.12,.16,0,1.43,o,.025),this.addBox("chrome",1.22,.055,.07,0,1.56,o,.018)}finishBodyBatches(){for(const n of Object.keys(this.parts)){const t=this.parts[n];if(!t.length)continue;const i=wn(t,!1);if(t.forEach(a=>a.dispose()),!i)continue;const r=new rt(i,this.materials[n]);r.castShadow=!0,r.receiveShadow=!0,r.frustumCulled=!0,this.body.add(r)}this.parts={paint:[],dark:[],chrome:[],glass:[],tire:[],light:[]}}cylinderGeometry(n,t,i=24){const r=new lr(n,n,t,i,1,!1);return r.rotateZ(Math.PI/2),r}buildWheels(){const n=new wt({color:2698543,roughness:.9}),t=[],i=[],r=new lr(.82,.82,.61,36,1,!1);r.rotateZ(Math.PI/2),t.push(r);for(const A of[-.29,.29]){const M=new cr(.63,.12,8,36);M.rotateY(Math.PI/2),M.translate(A,0,0),t.push(M);const d=this.cylinderGeometry(.455,.045,28);d.translate(A*1.04,0,0),i.push(d);const l=new cr(.405,.025,8,32);l.rotateY(Math.PI/2),l.translate(A*1.04,0,0),i.push(l);const w=this.cylinderGeometry(.16,.075,18);w.translate(A*1.1,0,0),i.push(w);for(let R=0;R<6;R++){const x=R*Math.PI/3,L=new pn(.065,.07,.29);L.applyMatrix4(new Gt().compose(new ae(A*1.08,Math.cos(x)*.25,Math.sin(x)*.25),new zt().setFromEuler(new In(x,0,0)),new ae(1,1,1))),i.push(L)}}const a=wn(t,!1);t.forEach(A=>A.dispose());const s=wn(i,!1);i.forEach(A=>A.dispose());const o=this.cylinderGeometry(.13,3.1,12),h=new wt({color:3422779,metalness:.55,roughness:.48}),f=new tn(o,h,2);f.castShadow=!0;const m=new zt().setFromAxisAngle(new ae(0,0,1),Math.PI/2);[-1.25,1.22].forEach((A,M)=>{this.workMatrix.compose(new ae(0,.91,A),m,new ae(1,1,1)),f.setMatrixAt(M,this.workMatrix)}),f.instanceMatrix.needsUpdate=!0,this.model.add(f);const p=[];for(let A=0;A<=96;A++){const M=A/96,d=M*Math.PI*2*8;p.push(new ae(Math.cos(d)*.11,M-.5,Math.sin(d)*.11))}const g=new bi(new sr(p),128,.025,5,!1),E=new wt({color:13817555,metalness:.78,roughness:.32});this.wheelSprings=new tn(g,E,4),this.wheelSprings.castShadow=!0,this.wheelShocks=new tn(this.cylinderGeometry(.072,.68,10),h,4),this.wheelShocks.castShadow=!0,this.shockRods=new tn(this.cylinderGeometry(.025,.62,8),this.materials.chrome,4),this.shockRods.castShadow=!0,this.model.add(this.wheelSprings,this.wheelShocks,this.shockRods);for(let A=0;A<4;A++){const M=zr[A],d=kr[A],l=new on;l.position.set(M.x,.92,M.z),l.userData.wheelId=d,this.model.add(l),this.wheels.push(l),A<2&&this.frontWheels.push(l);const w=new rt(a,this.materials.tire);w.castShadow=!0,w.receiveShadow=!0,l.add(w);const R=new rt(s,this.materials.chrome);R.castShadow=!0,l.add(R);const x=new pn(.32,.15,.27),L=new tn(x,n,32);L.castShadow=!0,L.receiveShadow=!0;let P=0;for(let I=0;I<2;I++)for(let G=0;G<16;G++){const v=G*Math.PI/8+I*Math.PI/16,_=new zt().setFromAxisAngle(new ae(1,0,0),v+Math.PI/2);this.workMatrix.compose(new ae(I?.16:-.16,Math.sin(v)*.81,Math.cos(v)*.81),_,new ae(1,1,1)),L.setMatrixAt(P++,this.workMatrix)}L.instanceMatrix.needsUpdate=!0,l.add(L)}this.axleLinks=new tn(this.cylinderGeometry(.055,1,10),h,4),this.axleLinks.castShadow=!0,this.model.add(this.axleLinks),this.updateWheelContacts(kr.map((A,M)=>({id:A,x:0,z:0,height:0,contact:!0,compression:.12,extension:0,travel:.55,compressionVelocity:0,compressionDamping:0,reboundDamping:0})),1)}updateWheelContacts(n,t){for(let i=0;i<this.wheels.length;i++){const r=this.wheels[i],a=n.find(p=>p.id===r.userData.wheelId);if(!a)continue;r.position.y=.92+a.compression/t+a.extension/t;const s=zr[i],o=a.compression/t,h=a.extension/t;this.workPosition.set(s.x*.78,1.05+h*.35-o*.2,s.z),this.workQuaternion.identity(),this.workScale.set(1,Math.max(.5,.72+h-o*.35),1),this.workMatrix.compose(this.workPosition,this.workQuaternion,this.workScale),this.wheelSprings.setMatrixAt(i,this.workMatrix),this.workPosition.y=.99+h*.32-o*.12,this.workScale.set(1,.68+h*.45-o*.2,1),this.workMatrix.compose(this.workPosition,this.workQuaternion,this.workScale),this.wheelShocks.setMatrixAt(i,this.workMatrix),this.workPosition.y=1.13+h*.3-o*.1,this.workScale.set(1,.61+h*.25-o*.1,1),this.workMatrix.compose(this.workPosition,this.workQuaternion,this.workScale),this.shockRods.setMatrixAt(i,this.workMatrix);const f=new zt().setFromAxisAngle(new ae(0,0,1),Math.PI/2),m=Math.abs(s.x)*.9;this.workPosition.set(s.x*.54,.89+o*.35,s.z),this.workScale.set(1,m,1),this.workMatrix.compose(this.workPosition,f,this.workScale),this.axleLinks.setMatrixAt(i,this.workMatrix)}this.wheelSprings.instanceMatrix.needsUpdate=!0,this.wheelShocks.instanceMatrix.needsUpdate=!0,this.shockRods.instanceMatrix.needsUpdate=!0,this.axleLinks.instanceMatrix.needsUpdate=!0}setColor(n){this.opts.color=n,this.materials.paint.color.set(n)}}function sa(e,n=new ae){return n.set(Math.sin(e),0,Math.cos(e))}function la(e,n=new ae){return n.set(Math.cos(e),0,-Math.sin(e))}const ji=(e,n,t)=>Math.max(n,Math.min(t,e)),op=[{id:"front-left",x:-1.22,z:1.22},{id:"front-right",x:1.22,z:1.22},{id:"rear-left",x:-1.22,z:-1.25},{id:"rear-right",x:1.22,z:-1.25}];function Ii(e,n,t,i,r=24){const a=Math.cos(n),s=Math.sin(n),o=.55*t,h=.36*t;return op.map(f=>{const m=e.x+f.x*a+f.z*s,p=e.z-f.x*s+f.z*a,g=i(m,p),E=g+1.65*t+.12*t,A=E-e.y,M=2*Math.sqrt(r/(.12*t));return{id:f.id,x:m,z:p,height:g,travel:o,compression:ji(A,0,o),extension:ji(-A,0,h),contact:A>=-h&&A<=o,compressionVelocity:0,compressionDamping:M*.82,reboundDamping:M*.62}})}function sp(e,n,t,i){const r=t/(.12*i);let a=0;for(const s of e){if(s.compression<=0)continue;const o=Math.max(0,s.compression-s.travel+.08*i),h=r*(s.compression+o*2.5),f=ji(s.compressionVelocity,-12,12),m=f>=0?s.compressionDamping:s.reboundDamping,p=(n>=0?s.reboundDamping:s.compressionDamping)*n*.24;a+=Math.max(0,h+m*f-p)}return a/e.length-t}function lp(e){const n=(e[0].height+e[1].height)/2,t=(e[2].height+e[3].height)/2,i=(e[0].height+e[2].height)/2,r=(e[1].height+e[3].height)/2;return{pitch:-Math.atan2(n-t,2.47),roll:Math.atan2(r-i,2.44)}}class cp{pos=new ae(0,0,0);vel=new ae;yaw=0;pitch=0;roll=0;grounded=!0;nitro=100;airTime=0;speed=0;gravity=24;jumpForce=15;jumpWas=!1;previousCompression=new Map;contactPitch=0;contactRoll=0;wheelContacts=[];reset(n,t=1){this.pos.set(0,n.heightAt(0,0)+1.65*t,0),this.vel.set(0,0,0),this.yaw=0,this.pitch=0,this.roll=0,this.grounded=!0,this.nitro=100,this.airTime=0,this.contactPitch=0,this.contactRoll=0,this.wheelContacts=Ii(this.pos,this.yaw,t,(i,r)=>n.heightAt(i,r),this.gravity),this.previousCompression=new Map(this.wheelContacts.map(i=>[i.id,i.compression]))}update(n,t,i,r,a){this.gravity=a.gravity,this.jumpForce=a.jump,n=Math.min(n,.04);const s=Math.max(1,Math.ceil(n*120)),o=n/s;for(let h=0;h<s;h++)this.step(o,t,i,a);r.root.position.copy(this.pos),r.root.rotation.order="YXZ",r.root.rotation.set(this.pitch+this.contactPitch,this.yaw,this.roll+this.contactRoll),r.updateWheelContacts(this.wheelContacts,a.scale),r.wheels.forEach(h=>{h.rotation.x-=this.speed*n}),r.frontWheels.forEach(h=>{h.rotation.y=-t.steer*.28})}step(n,t,i,r){const a=r.scale,s=sa(this.yaw),o=30*(t.nitro&&this.nitro>0?1.7:1),h=26*(t.nitro&&this.nitro>0?1.5:1);t.throttle&&this.vel.addScaledVector(s,t.throttle*h*n);const f=new ae(this.vel.x,0,this.vel.z);if(this.speed=f.length(),t.nitro&&this.nitro>0?this.nitro=Math.max(0,this.nitro-22*n):this.nitro=Math.min(100,this.nitro+8*n),t.handbrake?f.multiplyScalar(Math.max(0,1-3*n)):f.multiplyScalar(Math.max(0,1-(this.grounded?1.05:.1)*n)),this.speed>o&&f.setLength(o),this.speed>.4){const M=(this.grounded?1.8:1.05)*(.25+Math.min(1,this.speed/12)),d=Math.sign(f.dot(s))||Math.sign(t.throttle);this.yaw-=t.steer*M*n*d;const l=la(this.yaw),w=f.dot(l);f.addScaledVector(l,-w*(this.grounded?.72:.01))}this.vel.x=f.x,this.vel.z=f.z,t.jump&&!this.jumpWas&&this.grounded&&(this.vel.y=this.jumpForce,this.grounded=!1),this.jumpWas=t.jump,this.wheelContacts=Ii(this.pos,this.yaw,a,(M,d)=>i.heightAt(M,d),this.gravity);for(const M of this.wheelContacts){const d=this.previousCompression.get(M.id)??M.compression;M.compressionVelocity=(M.compression-d)/Math.max(n,1/240)}this.grounded||(this.pitch+=t.airPitch*2.8*n,this.roll+=t.airRoll*3.5*n,this.airTime+=n),this.vel.y+=sp(this.wheelContacts,this.vel.y,this.gravity,a)*n;const m=this.pos.y;this.pos.addScaledVector(this.vel,n),this.wheelContacts=Ii(this.pos,this.yaw,a,(M,d)=>i.heightAt(M,d),this.gravity);for(const M of this.wheelContacts)this.previousCompression.set(M.id,M.compression);const p=this.wheelContacts.filter(M=>M.contact&&M.compression>.015*a).length,g=Math.max(...this.wheelContacts.map(M=>M.height))+1.17*a;this.pos.y<g&&this.vel.y<0&&(!this.grounded&&this.vel.y<-3&&(this.pitch*=.35,this.roll*=.35,this.vel.y=Math.max(0,-this.vel.y*.12)),this.pos.y=g),this.grounded=this.vel.y<=.75&&p>=2,this.grounded&&(this.vel.y=Math.max(0,this.vel.y),this.airTime=0,this.pitch*=Math.max(0,1-4*n),this.roll*=Math.max(0,1-4*n)),!this.grounded&&this.airTime>1.1&&(this.pitch=Pt.lerp(this.pitch,0,n*.24),this.roll=Pt.lerp(this.roll,0,n*.24));const E=lp(this.wheelContacts),A=this.grounded?Math.min(1,n*9):Math.min(1,n*2);this.contactPitch=Pt.lerp(this.contactPitch,this.grounded?E.pitch:0,A),this.contactRoll=Pt.lerp(this.contactRoll,this.grounded?E.roll:0,A),Number.isFinite(this.pos.y)||(this.pos.y=m)}}class dp{pressed=new Set;actions=new Map;pointerDown(n,t){this.pointerUp(n),this.actions.set(n,t),this.pressed.add(t)}pointerUp(n){const t=this.actions.get(n);t!==void 0&&(this.actions.delete(n),[...this.actions.values()].includes(t)||this.pressed.delete(t))}pointerCancel(n){this.pointerUp(n)}lostPointerCapture(n){this.pointerUp(n)}releaseAll(){this.actions.clear(),this.pressed.clear()}}function fp(e,n){const t=(...i)=>i.some(r=>e.has(r)||n.has(r));return Number(t("d","arrowright"))-Number(t("a","arrowleft"))}class up{keys=new Set;pointerButtons=new dp;state={throttle:0,steer:0,nitro:!1,jump:!1,airPitch:0,airRoll:0,handbrake:!1};get touches(){return this.pointerButtons.pressed}constructor(){window.addEventListener("keydown",n=>{[" ","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n.key)&&n.preventDefault(),this.keys.add(n.key.toLowerCase())}),window.addEventListener("keyup",n=>this.keys.delete(n.key.toLowerCase())),window.addEventListener("blur",()=>this.releaseAll())}pointerDown(n,t){this.pointerButtons.pointerDown(n,t)}pointerUp(n){this.pointerButtons.pointerUp(n)}pointerCancel(n){this.pointerButtons.pointerCancel(n)}lostPointerCapture(n){this.pointerButtons.lostPointerCapture(n)}releaseAll(){this.keys.clear(),this.pointerButtons.releaseAll(),this.state={throttle:0,steer:0,nitro:!1,jump:!1,airPitch:0,airRoll:0,handbrake:!1}}update(){const n=(...p)=>p.some(g=>this.keys.has(g)||this.touches.has(g)),t=Array.from(navigator.getGamepads?.()??[]).find(p=>p?.connected),i=t?.axes??[],r=p=>t?.buttons[p]?.value??0,a=(n("w","arrowup")?1:0)-(n("s","arrowdown")?1:0),s=r(7)-r(6)||-Math.sign(Math.abs(i[1]??0)>.18?i[1]:0),o=fp(this.keys,this.touches),h=Math.abs(i[0]??0)>.16?i[0]:0,f=(n("arrowup")?1:0)-(n("arrowdown")?1:0),m=(n("e","arrowright")?1:0)-(n("q","arrowleft")?1:0);return this.state={throttle:a||s,steer:o||h,nitro:n("shift","nitro")||r(1)>.4,jump:n(" ","jump")||r(0)>.4,airPitch:f||(Math.abs(i[3]??0)>.18?-Math.sign(i[3]):0),airRoll:m||(Math.abs(i[2]??0)>.18?Math.sign(i[2]):0),handbrake:n("control")||r(2)>.4},this.state}}const Cn=96,Ni=160;class pp{group=new on;dustMesh;burstMesh;particles=[];active=[];freeDust=[];freeBurst=[];activeCount=0;rng=7886388;matrix=new Gt;quat=new zt;scaleVector=new ae;color=new We;quality=1;constructor(){const n=new po(.5,6,5);this.dustMesh=this.makeBatch(n.clone(),Cn,13875854),this.burstMesh=this.makeBatch(n.clone(),Ni,16777215),n.dispose(),this.dustMesh.name="dust-particle-batch",this.burstMesh.name="impact-particle-batch",this.dustMesh.count=this.burstMesh.count=0,this.group.add(this.dustMesh,this.burstMesh);for(let t=0;t<Cn+Ni;t++)this.particles.push({kind:"dust",life:0,max:1,position:new ae,velocity:new ae,scale:1,color:16777215}),this.active.push(0);for(let t=Cn-1;t>=0;t--)this.freeDust.push(t);for(let t=Cn+Ni-1;t>=Cn;t--)this.freeBurst.push(t)}makeBatch(n,t,i){const r=new co({color:i,vertexColors:!0,transparent:!0,depthWrite:!1});r.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute float instanceAlpha;
varying float vParticleAlpha;`),s.vertexShader=s.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vParticleAlpha = instanceAlpha;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying float vParticleAlpha;`),s.fragmentShader=s.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a *= vParticleAlpha;`)},r.customProgramCacheKey=()=>"rumble-particle-alpha-v1";const a=new js(new Float32Array(t),1);return a.setUsage(el),n.setAttribute("instanceAlpha",a),new tn(n,r,t)}rand(){return this.rng=this.rng*1664525+1013904223>>>0,this.rng/4294967296}burst(n,t=18,i=16758605){t=Math.max(1,Math.round(t*this.quality));for(let r=0;r<t;r++){const a=this.freeBurst.pop();if(a===void 0)break;const s=this.particles[a];s.kind="burst",s.life=.45+this.rand()*.8,s.max=.9,s.scale=.16+this.rand()*.26,s.color=i,s.position.copy(n),s.velocity.set((this.rand()-.5)*8,1+this.rand()*7,(this.rand()-.5)*8),this.active[this.activeCount++]=a}}dust(n,t){if(t<4||this.rand()>.27*this.quality)return;const i=this.freeDust.pop();if(i===void 0)return;const r=this.particles[i];r.kind="dust",r.life=r.max=.65,r.scale=.36+this.rand()*.3,r.color=13875854,r.position.copy(n),r.velocity.set(this.rand()-.5,.4+this.rand(),this.rand()-.5),this.active[this.activeCount++]=i}update(n){let t=0,i=0,r=0;for(let a=0;a<this.activeCount;a++){const s=this.active[a],o=this.particles[s];if(o.life-=n,o.life<=0){(o.kind==="dust"?this.freeDust:this.freeBurst).push(s);continue}o.position.addScaledVector(o.velocity,n),o.scale*=1+n*.55;const h=Math.max(0,o.life/o.max*(o.kind==="dust"?.34:.9)),f=o.kind==="dust"?this.dustMesh:this.burstMesh,m=o.kind==="dust"?i++:r++;this.scaleVector.setScalar(o.scale*(o.life/o.max)),this.matrix.compose(o.position,this.quat,this.scaleVector),f.setMatrixAt(m,this.matrix),this.color.setHex(o.color),f.setColorAt(m,this.color),f.geometry.getAttribute("instanceAlpha").setX(m,h),this.active[t++]=s}this.activeCount=t,this.dustMesh.count=i,this.burstMesh.count=r,i&&(this.dustMesh.instanceMatrix.needsUpdate=!0,this.dustMesh.instanceColor.needsUpdate=!0,this.dustMesh.geometry.getAttribute("instanceAlpha").needsUpdate=!0),r&&(this.burstMesh.instanceMatrix.needsUpdate=!0,this.burstMesh.instanceColor.needsUpdate=!0,this.burstMesh.geometry.getAttribute("instanceAlpha").needsUpdate=!0)}get activeParticles(){return this.activeCount}setQuality(n){this.quality=n==="low"?.46:n==="medium"?.72:1}dispose(){this.group.clear();for(const n of[this.dustMesh,this.burstMesh])n.geometry.dispose(),n.material.dispose()}}const sn=(e,n,t)=>Math.max(n,Math.min(t,e));function hp(e,n,t){const i=sn(.2+sn(e/32,0,1)*.67+sn(n,0,1)*.16+(t?.18:0),.2,1.2),r=62+i*112;return{rpm:i,fundamentalHz:r,engineGain:.075+i*.035+sn(n,0,1)*.025,harmonicHz:r*2.4,nitroHz:260+i*390}}function Pn(e){return sn(Number.isFinite(e)?e:0,0,1)}class mp{ctx=null;master=null;compressor=null;analyser=null;meterBuffer=null;engineOsc=null;engineHarmonic=null;engineGain=null;harmonicGain=null;nitroOsc=null;nitroGain=null;skidNoise=null;skidGain=null;noiseBuffer=null;volume=.62;muted=!1;failed=!1;start(){try{this.ctx||this.createGraph(),this.ctx?.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.applyMaster()}catch{this.failed=!0}}createGraph(){const n=window,t=window.AudioContext??n.webkitAudioContext;if(!t){this.failed=!0;return}const i=new t;this.ctx=i,this.master=i.createGain(),this.master.gain.value=0,this.compressor=i.createDynamicsCompressor(),this.compressor.threshold.value=-18,this.compressor.knee.value=14,this.compressor.ratio.value=5,this.compressor.attack.value=.006,this.compressor.release.value=.16,this.analyser=i.createAnalyser(),this.analyser.fftSize=256,this.meterBuffer=new Float32Array(this.analyser.fftSize),this.master.connect(this.compressor).connect(this.analyser).connect(i.destination);const r=i.createOscillator();r.type="sawtooth";const a=i.createBiquadFilter();a.type="lowpass",a.frequency.value=620,a.Q.value=.7,this.engineGain=i.createGain(),this.engineGain.gain.value=.09,r.connect(a).connect(this.engineGain).connect(this.master),r.start(),this.engineOsc=r;const s=i.createOscillator();s.type="triangle";const o=i.createBiquadFilter();o.type="bandpass",o.frequency.value=520,o.Q.value=.65,this.harmonicGain=i.createGain(),this.harmonicGain.gain.value=.035,s.connect(o).connect(this.harmonicGain).connect(this.master),s.start(),this.engineHarmonic=s;const h=i.createOscillator();h.type="sawtooth";const f=i.createBiquadFilter();f.type="bandpass",f.frequency.value=900,f.Q.value=.8,this.nitroGain=i.createGain(),this.nitroGain.gain.value=1e-4,h.connect(f).connect(this.nitroGain).connect(this.master),h.start(),this.nitroOsc=h;const m=i.createBuffer(1,Math.floor(i.sampleRate*.35),i.sampleRate),p=m.getChannelData(0);for(let A=0;A<p.length;A++)p[A]=(Math.random()*2-1)*.55;this.noiseBuffer=m;const g=i.createBufferSource();g.buffer=m,g.loop=!0;const E=i.createBiquadFilter();E.type="bandpass",E.frequency.value=1250,E.Q.value=.5,this.skidGain=i.createGain(),this.skidGain.gain.value=1e-4,g.connect(E).connect(this.skidGain).connect(this.master),g.start(),this.skidNoise=g,this.failed=!1}setMasterVolume(n){this.volume=Pn(n),this.applyMaster()}getMasterVolume(){return this.volume}setMuted(n){this.muted=n,this.applyMaster()}mute(){this.setMuted(!0)}isMuted(){return this.muted}isAvailable(){return!!this.ctx&&!this.failed}getState(){return this.ctx?.state??(this.failed?"unavailable":"locked")}applyMaster(){this.ctx&&this.master&&this.master.gain.setTargetAtTime(this.muted?0:this.volume,this.ctx.currentTime,.025)}update(n,t=0,i=!1,r=0){const a=this.ctx;if(!a||!this.engineOsc||!this.engineHarmonic||!this.engineGain||!this.harmonicGain)return;const s=hp(n,t,i),o=a.currentTime;this.engineOsc.frequency.setTargetAtTime(s.fundamentalHz,o,.055),this.engineHarmonic.frequency.setTargetAtTime(s.harmonicHz,o,.07),this.engineGain.gain.setTargetAtTime(s.engineGain,o,.09),this.harmonicGain.gain.setTargetAtTime(.026+s.rpm*.022,o,.09),this.nitroOsc?.frequency.setTargetAtTime(s.nitroHz,o,.045),this.nitroGain?.gain.setTargetAtTime(i?.075:1e-4,o,.05),this.skidGain?.gain.setTargetAtTime(sn(r,0,1)>.08?.12*sn(r,0,1):1e-4,o,.04)}testTone(){const n=this.ctx;if(!n||this.muted)return!1;const t=n.createOscillator(),i=n.createGain(),r=n.currentTime;return t.type="sine",t.frequency.setValueAtTime(523.25,r),i.gain.setValueAtTime(1e-4,r),i.gain.linearRampToValueAtTime(.22,r+.025),i.gain.setValueAtTime(.22,r+.24),i.gain.exponentialRampToValueAtTime(1e-4,r+.52),t.connect(i).connect(this.master),t.start(r),t.stop(r+.54),t.onended=()=>{t.disconnect(),i.disconnect()},!0}jump(){this.sweep(175,540,.34,.055,"sawtooth")}landing(n=1){this.noiseBurst(.11+Pn(n)*.08,.22),this.sweep(112,52,.19,.075*Pn(n),"sine")}impact(n=1){this.noiseBurst(.15+Pn(n)*.12,.34),this.sweep(170,43,.28,.11*Pn(n),"triangle")}sweep(n,t,i,r,a){const s=this.ctx;if(!s||this.muted)return;const o=s.createOscillator(),h=s.createGain(),f=s.currentTime;o.type=a,o.frequency.setValueAtTime(n,f),o.frequency.exponentialRampToValueAtTime(Math.max(25,t),f+i),h.gain.setValueAtTime(1e-4,f),h.gain.linearRampToValueAtTime(r,f+.012),h.gain.exponentialRampToValueAtTime(1e-4,f+i),o.connect(h).connect(this.master),o.start(f),o.stop(f+i+.015),o.onended=()=>{o.disconnect(),h.disconnect()}}noiseBurst(n,t){const i=this.ctx;if(!i||!this.noiseBuffer||this.muted)return;const r=i.createBufferSource(),a=i.createBiquadFilter(),s=i.createGain(),o=i.currentTime;r.buffer=this.noiseBuffer,a.type="lowpass",a.frequency.value=1900,s.gain.setValueAtTime(Math.max(1e-4,n),o),s.gain.exponentialRampToValueAtTime(1e-4,o+t),r.connect(a).connect(s).connect(this.master),r.start(o),r.stop(o+t+.02),r.onended=()=>{r.disconnect(),a.disconnect(),s.disconnect()}}outputRms(){if(!this.ctx||!this.analyser||!this.meterBuffer||this.ctx.state!=="running"||this.muted)return 0;this.analyser.getFloatTimeDomainData(this.meterBuffer);let n=0;for(const t of this.meterBuffer)n+=t*t;return Math.sqrt(n/this.meterBuffer.length)}}const he=e=>document.querySelector(e),Tn=!!(window.matchMedia?.("(pointer: coarse)").matches||window.matchMedia?.("(any-pointer: coarse)").matches||navigator.maxTouchPoints>0||"ontouchstart"in window),qn=document.documentElement;qn.classList.toggle("touch-capable",Tn);qn.classList.toggle("keyboard-controls-visible",!Tn);const _p=he("#app");_p.innerHTML=`
 <canvas id="game"></canvas>
 <div class="grain"></div>
 <header class="topbar"><a class="brand" href="#"><span class="brand-icon">✦</span><span>RUMBLE<span class="accent">ROAM</span></span></a><div class="location-label"><span class="pulse"></span><span id="place-name">Moab, Utah</span><small id="terrain-name">RED ROCK COUNTRY</small></div><div class="top-actions"><button id="map-btn" class="top-btn" aria-label="Choose location">⌖ <span>LOCATIONS</span></button><button id="pause-btn" class="top-btn" aria-label="Pause game">Ⅱ <span>PAUSE</span></button><button id="help-btn" class="top-btn help-trigger" aria-label="Help and controls">?</button></div></header>
 <aside class="hud-left"><div class="stat"><span class="stat-label">VELOCITY</span><div class="speed-line"><strong id="speed">000</strong><span>KM/H</span></div><div class="speed-track"><i id="speed-bar"></i></div></div><div class="stat nitro-stat"><span class="stat-label">NITROUS</span><div class="nitro-track"><i id="nitro-bar"></i></div><small id="nitro-state">READY TO BURN</small></div></aside>
 <div class="hud-bottom"><div class="hint keyboard-hint"><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> DRIVE <i></i><kbd>SHIFT</kbd> BOOST <i></i><kbd>SPACE</kbd> JUMP <i></i><kbd>Q</kbd><kbd>E</kbd> FLIP</div><div class="touch-hint">LEFT / RIGHT STEER · HOLD GO OR BRAKE · JUMP + BOOST</div><div class="camera-toggle"><button data-camera="chase" class="selected">CHASE</button><button data-camera="far">FAR</button><button data-camera="hood">HOOD</button><button data-camera="free">FREE</button></div></div>
 <button id="settings-btn" class="settings-fab">⚙</button>
 <section id="location-panel" class="panel hidden"><div class="panel-head"><div><span class="eyebrow">PICK YOUR PLAYGROUND</span><h2>Where to next?</h2></div><button class="close-btn" data-close="location-panel">×</button></div><form id="search-form"><input id="location-search" placeholder="Search a place or paste coordinates" autocomplete="off"><button class="search-btn">SEARCH <span>↗</span></button></form><div id="search-results" class="results"></div><div class="map-wrap"><div id="mini-map"></div><div class="map-hint">CLICK MAP TO DROP A PIN</div></div><div class="preset-title">FAVORITE RUNS <span>08 LOCATIONS</span></div><div id="presets" class="presets"></div><div class="attribution">Terrain <a href="https://registry.opendata.aws/terrain-tiles/" target="_blank">Mapzen / Tilezen</a> · © <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a> · Map <a href="https://openfreemap.org/" target="_blank">OpenFreeMap</a><details class="terrain-credits"><summary>Terrain source credits</summary><div>ArcticDEM: DigitalGlobe imagery; NSF awards 1043681, 1559691 and 1542736. Australia: © Commonwealth of Australia (Geoscience Australia) 2017. Austria: © offene Daten Österreichs – Digitales Geländemodell (DGM) Österreich. Canada: Open Government Licence – Canada. Europe: Copernicus / EU-DEM. Global ETOPO1: NOAA. Mexico: INEGI, Continental relief, 2016. New Zealand: © Land Information New Zealand and NZ Government. Norway: © Kartverket. United Kingdom: © Environment Agency 2015. United States 3DEP, GMTED2010 and SRTM: USGS.</div></details></div></section>
 <section id="settings-panel" class="panel settings hidden"><div class="panel-head"><div><span class="eyebrow">TUNE THE MAYHEM</span><h2>Game settings</h2></div><button class="close-btn" data-close="settings-panel">×</button></div><label>Graphics quality <select id="graphics-quality"><option value="low">Low · smoother</option><option value="medium">Medium · balanced</option><option value="high">High · detailed</option></select></label><label>Gravity <span id="gravity-value">24</span><input id="gravity" type="range" min="6" max="35" value="24"></label><label>Jump force <span id="jump-value">15</span><input id="jump" type="range" min="8" max="25" value="15"></label><label>Truck scale <span id="scale-value">1.0×</span><input id="scale" type="range" min="7" max="16" value="10"></label><label>Paint <input id="paint" type="color" value="#d84924"></label><label class="toggle"><span>Audio</span><input id="audio-toggle" type="checkbox" checked></label><label>Master volume <span id="volume-value">62%</span><input id="master-volume" type="range" min="0" max="100" value="62"></label><button id="audio-test" class="ghost-btn audio-test">TEST SOUND</button><small id="audio-status" class="settings-note">Sound starts after your first control input.</small><button id="reset-btn" class="search-btn full">RESET TRUCK <span>↻</span></button><small class="settings-note">Esc pauses the run. R recovers the truck. Press M to pick a new place.</small></section>
 <section id="pause-panel" class="pause-panel hidden"><span class="eyebrow">TAKE A BREATHER</span><h1>PAUSED</h1><button id="resume-btn" class="search-btn">BACK TO IT <span>▶</span></button><button id="pause-location" class="ghost-btn">CHANGE LOCATION</button></section>
 <section id="help-panel" class="panel help-panel hidden" aria-labelledby="help-title"><div class="panel-head"><div><span class="eyebrow">QUICK DRIVER GUIDE</span><h2 id="help-title">Controls</h2></div><button class="close-btn" data-close="help-panel" aria-label="Close help">×</button></div><p class="touch-guide-copy">Hold ◀ / ▶ to steer. Hold GO to accelerate or BRAKE to reverse. Hold JUMP and BOOST together for a bigger launch. Camera, reset, and pause are just below.</p><div class="help-grid"><strong>Keyboard</strong><span>W / S · Accelerate / reverse</span><span>A / D or ← / → · Steer</span><span>Shift · Nitro · Space · Jump</span><span>Q / E · Roll · R · Reset · C · Camera · Esc · Pause · M · Locations</span><strong>Touch</strong><span>◀ / ▶ · Steer · GO / BRAKE · Drive</span><span>JUMP · Launch · BOOST · Nitro</span><span>Bottom shortcuts · Reset · Camera · Pause · Help</span></div></section>
 <div id="toast" class="toast"></div>
 <div class="orientation-tip" aria-hidden="true">LANDSCAPE RECOMMENDED</div>
 <nav class="mobile-utility" aria-label="Quick game controls"><button id="touch-reset" aria-label="Reset truck">↻ <span>RESET</span></button><button id="touch-camera" aria-label="Change camera">◉ <span>CAM</span></button><button id="touch-pause" aria-label="Pause game">Ⅱ <span>PAUSE</span></button><button id="touch-help" aria-label="Help and controls">? <span>HELP</span></button><button id="touch-control-mode" aria-label="Switch control display" aria-pressed="true">⌨ <span>KEYS</span></button></nav>
 <div class="mobile-controls" aria-label="Touch driving controls"><div class="touch-action-row"><button data-touch="jump" aria-label="Jump">⬆ <span>JUMP</span></button><button data-touch="nitro" class="nitro-touch" aria-label="Hold for nitro">⚡ <span>BOOST</span></button></div><div class="touch-drive-row"><div class="dpad" aria-label="Steering"><button data-touch="a" aria-label="Steer left">◀<span>LEFT</span></button><button data-touch="d" aria-label="Steer right">▶<span>RIGHT</span></button></div><div class="pedals" aria-label="Acceleration"><button data-touch="s" class="brake" aria-label="Brake and reverse">▼<span>BRAKE</span></button><button data-touch="w" class="go" aria-label="Accelerate">▲<span>GO</span></button></div></div></div>
 <div class="loading-screen" id="loading"><div class="loader-mark">✦</div><div class="loader-title">MAPPING THE WILD</div><div class="loader-sub">LOADING REAL-WORLD TERRAIN</div><div class="loader-track"><i></i></div></div>`;let Zt=Tn?"low":"high";const ca=e=>Tn?{low:.82,medium:.93,high:1}[e]:{low:.85,medium:1.1,high:1.35}[e],da=()=>({width:Math.round(window.visualViewport?.width??innerWidth),height:Math.round(window.visualViewport?.height??innerHeight)}),li=da(),ut=new zu({canvas:he("#game"),antialias:!1,powerPreference:"high-performance"});ut.setPixelRatio(Math.min(devicePixelRatio||1,ca(Zt)));ut.setSize(li.width,li.height);ut.shadowMap.enabled=!1;ut.toneMapping=fo;ut.toneMappingExposure=1.12;const xt=new tl;xt.background=new We("#9bb7c1");xt.fog=new ho("#b9c4bc",105e-6);const Ft=new Un(60,li.width/li.height,.1,18e3);Ft.position.set(0,8,-16);xt.add(new nl(15398143,6443323,1.45));const Mo=new il(16772559,2.55);Mo.position.set(-350,550,260);xt.add(Mo);const ea=new Vt({side:Mt,depthWrite:!1,depthTest:!1,toneMapped:!1,uniforms:{uRumbleDesert:{value:1},uRumbleAlpine:{value:0},uSunDirection:{value:new ae(-.42,.63,.65).normalize()}},vertexShader:"varying vec3 vSkyDirection;void main(){vSkyDirection=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec3 vSkyDirection;uniform float uRumbleDesert;uniform float uRumbleAlpine;uniform vec3 uSunDirection;void main(){vec3 d=normalize(vSkyDirection);float h=smoothstep(-.16,.84,d.y);vec3 horizon=mix(vec3(.79,.72,.58),vec3(.66,.75,.77),uRumbleDesert);horizon=mix(horizon,vec3(.72,.79,.84),uRumbleAlpine);vec3 zenith=mix(vec3(.24,.37,.48),vec3(.3,.46,.55),uRumbleDesert);vec3 sky=mix(horizon,zenith,h);float sun=pow(max(dot(d,normalize(uSunDirection)),0.0),180.0);sky+=vec3(1.0,.72,.4)*sun*.32;gl_FragColor=vec4(sky,1.0);}"}),pi=new rt(new po(12e3,24,16),ea);pi.frustumCulled=!1;pi.renderOrder=-1e3;xt.add(pi);const fa=new Vt({transparent:!0,depthWrite:!1,toneMapped:!1,uniforms:{uOpacity:{value:.25}},vertexShader:"varying vec2 vShadowUv;void main(){vShadowUv=uv*2.0-1.0;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec2 vShadowUv;uniform float uOpacity;void main(){float r=length(vShadowUv);float a=(1.0-smoothstep(.18,1.0,r))*uOpacity;gl_FragColor=vec4(.12,.105,.085,a);}"}),Wn=new rt(new al(1,32),fa);Wn.rotation.x=-Math.PI/2;Wn.renderOrder=1;xt.add(Wn);const Et=new ep(Tn?63:127);xt.add(Et.group);const Kt=new ap;xt.add(Kt.group);const Xt=new pp;xt.add(Xt.group);let qt=new rp;xt.add(qt.root);const pe=new cp,{ArcadeCollisionWorld:gp}=await Qi(async()=>{const{ArcadeCollisionWorld:e}=await import("./collision-world-CbzMsxrv.js");return{ArcadeCollisionWorld:e}},__vite__mapDeps([0,1]),import.meta.url),dn=new gp;await dn.init();const _t=new up,ct=new mp;(location.hostname==="localhost"||location.hostname==="127.0.0.1")&&(window.__rumbleRoamDebug={spawnImpactTestBuilding(){const e=pe.pos.x,n=pe.pos.z,t=8,i=Et.heightAt(e,n),r=new rt(new pn(6,t,6),new wt({color:10180920}));r.position.set(e,i+t/2,n),r.userData.kind="building",Kt.group.add(r);const a={mesh:r,x:e,z:n,w:6,d:6,h:t,broken:!1};Kt.list.push(a),dn.addBuilding(a,i);const s=dn.step(pe.pos,pe.yaw,1/60);return s&&(ia++,dn.removeBuilding(s),Kt.break(s),Xt.burst(new ae(s.x,pe.pos.y,s.z),32,16749652),Ct=.5,Ht("CRUNCH! Structure demolished.")),s===a}});const hi={gravity:24,jump:15,scale:1};he("#graphics-quality").value=Zt;let fn="chase",Bt=!1,ta=0,Fn=.25,Wt=null,na=null,Sn=Eo[1],Oi=0,Xn=performance.now(),Ct=0,Wr=0,Fi=performance.now(),ei=0,ia=0,Bi=0,ti=0,Xr=0,qr=0;function vp(){const e=performance.memory;return e?Math.round(e.usedJSHeapSize/1048576*10)/10:null}function Ht(e){const n=he("#toast");n.textContent=e,n.classList.add("show"),clearTimeout(Wr),Wr=window.setTimeout(()=>n.classList.remove("show"),2800)}function Dt(){qn.classList.toggle("overlay-open",["location-panel","settings-panel","help-panel","pause-panel"].some(e=>!he("#"+e).classList.contains("hidden")))}async function mi(e){const n=++Oi;Sn=e,Bt=!1;const t=e.name.toLowerCase(),i=/moab|grand canyon|sahara|utah|arizona/.test(t),r=/alps|everest|mountain|swiss/.test(t);ea.uniforms.uRumbleDesert.value=i?1:0,ea.uniforms.uRumbleAlpine.value=r?1:0,xt.fog instanceof ho&&xt.fog.color.set(i?"#c5a983":r?"#b9c8d3":"#b9c4bc"),["location-panel","settings-panel","help-panel","pause-panel"].forEach(a=>he("#"+a).classList.add("hidden")),Dt(),he("#loading").classList.remove("done"),he("#place-name").textContent=e.name,he("#terrain-name").textContent=e.terrain??"OPEN TERRAIN",Ht("Mapping terrain…"),await Et.load(e),n===Oi&&(pe.reset(Et,hi.scale),he("#loading").classList.add("done"),Ht("Terrain is ready. Go make a mess."),Kt.load(e,(a,s)=>Et.heightAt(a,s),dn,Et.frame).then(()=>{n===Oi&&Ht(Kt.list.length?`${Kt.list.length} structures ready. Go make a mess.`:"No mapped structures nearby. The terrain is yours.")}),Wt?.flyTo({center:[e.lon,e.lat],zoom:12}),na?.setLngLat([e.lon,e.lat]))}Eo.forEach((e,n)=>{const t=document.createElement("button");t.className="preset",t.innerHTML=`<span class="preset-index">0${n+1}</span><span>${e.name}</span><i>↗</i>`,t.onclick=()=>mi(e),he("#presets").append(t)});he("#search-form").addEventListener("submit",async e=>{e.preventDefault();const n=he("#location-search").value.trim();if(!n)return;const t=he("#search-results");t.innerHTML='<div class="search-status">SEARCHING THE GLOBE…</div>';try{const i=await Zu(n);if(!i.length){t.innerHTML='<div class="search-status">No places found. Try a nearby town or coordinates.</div>';return}t.innerHTML="";for(const r of i){const a=document.createElement("button");a.className="result",a.innerHTML=`<span>⌖</span><span>${r.name}</span><i>↗</i>`,a.onclick=()=>mi(r),t.append(a)}}catch{t.innerHTML='<div class="search-status">Location search is busy. Try coordinates like 40.7, -73.9.</div>'}});he("#map-btn").onclick=async()=>{if(he("#location-panel").classList.toggle("hidden"),he("#settings-panel").classList.add("hidden"),he("#help-panel").classList.add("hidden"),Dt(),Wt)setTimeout(()=>Wt?.resize(),100);else{const[n,t]=await Promise.all([Qi(()=>import("./maplibre-gl-BT_db7in.js"),[],import.meta.url),Qi(()=>import("./maplibre-gl-worker-re4DVwB4.js"),[],import.meta.url)]);n.setWorkerUrl(t.default),Wt=new n.Map({container:"mini-map",style:"https://tiles.openfreemap.org/styles/liberty",center:[Sn.lon,Sn.lat],zoom:10,attributionControl:!1}),Wt.addControl(new n.NavigationControl({showCompass:!1}),"top-right"),na=new n.Marker({color:"#f2632b"}).setLngLat([Sn.lon,Sn.lat]).addTo(Wt),Wt.on("click",i=>{const r={name:`${i.lngLat.lat.toFixed(4)}, ${i.lngLat.lng.toFixed(4)}`,lat:i.lngLat.lat,lon:i.lngLat.lng};na?.setLngLat(i.lngLat);const a=document.createElement("button");a.className="result",a.innerHTML=`<span>⌖</span><span>Drive at ${r.name}</span><i>↗</i>`,a.onclick=()=>mi(r),he("#search-results").replaceChildren(a)})}};he("#settings-btn").onclick=()=>{he("#settings-panel").classList.toggle("hidden"),he("#location-panel").classList.add("hidden"),he("#help-panel").classList.add("hidden"),Dt()};const ua=()=>{he("#help-panel").classList.toggle("hidden"),he("#location-panel").classList.add("hidden"),he("#settings-panel").classList.add("hidden"),Dt()};he("#help-btn").onclick=ua;he("#touch-help").onclick=ua;document.querySelectorAll("[data-close]").forEach(e=>e.addEventListener("click",()=>{he("#"+e.dataset.close).classList.add("hidden"),Dt()}));const pa=(e,n,t)=>{const i=he("#"+e);i.oninput=()=>{const r=+i.value/(n==="scale"?10:1);hi[n]=r,he("#"+n+"-value").textContent=t(r),n==="scale"&&qt.root.scale.setScalar(r)}};pa("gravity","gravity",e=>e.toFixed(0));pa("jump","jump",e=>e.toFixed(0));pa("scale","scale",e=>e.toFixed(1)+"×");he("#paint").addEventListener("input",e=>qt.setColor(e.target.value));function Sp(e){Zt=e,he("#graphics-quality").value=e,ut.setPixelRatio(Math.min(devicePixelRatio||1,ca(e)));const n=da();ut.setSize(n.width,n.height),Et.setVisualQuality(e),Xt.setQuality(e),fa.uniforms.uOpacity.value=xo(e)}const xo=e=>e==="low"?.18:e==="medium"?.23:.29;he("#graphics-quality").addEventListener("change",e=>Sp(e.target.value));Et.setVisualQuality(Zt);Xt.setQuality(Zt);fa.uniforms.uOpacity.value=xo(Zt);he("#audio-toggle").addEventListener("change",e=>{const n=e.target.checked;n&&ct.start(),ct.setMuted(!n),he("#audio-status").textContent=n?"Audio enabled.":"Audio muted."});he("#master-volume").addEventListener("input",e=>{const n=+e.target.value;ct.setMasterVolume(n/100),he("#volume-value").textContent=`${n}%`});he("#audio-test").addEventListener("click",()=>{ct.start();const e=ct.testTone();he("#audio-status").textContent=e?"Test tone playing through the game audio output.":"Unmute audio to play the test tone.",e||Ht("Turn Audio on to hear the test.")});function ha(){pe.reset(Et,hi.scale),qt.root.visible=!0,Ht("Truck recovered. Send it!")}function ma(e){const n=["chase","far","hood","free"];fn=e??n[(n.indexOf(fn)+1)%n.length],document.querySelectorAll("[data-camera]").forEach(t=>t.classList.toggle("selected",t.dataset.camera===fn))}function _a(){Bt=!Bt,Bt&&_t.releaseAll(),he("#pause-panel").classList.toggle("hidden",!Bt),Dt()}he("#reset-btn").onclick=ha;he("#touch-reset").onclick=()=>{ct.start(),ha()};he("#touch-camera").onclick=()=>ma();he("#touch-pause").onclick=()=>_a();he("#resume-btn").onclick=()=>{ct.start(),Bt=!1,Xn=performance.now(),he("#pause-panel").classList.add("hidden"),Dt()};he("#pause-btn").onclick=()=>_a();he("#pause-location").onclick=()=>{he("#pause-panel").classList.add("hidden"),Dt(),he("#map-btn").click()};document.querySelectorAll("[data-camera]").forEach(e=>e.addEventListener("click",()=>ma(e.dataset.camera)));const Bn=he("#touch-control-mode");Bn.textContent=Tn?"⌨ KEYS":"◉ TOUCH";Bn.setAttribute("aria-pressed",String(!qn.classList.contains("keyboard-controls-visible")));Bn.onclick=()=>{const e=qn.classList.toggle("keyboard-controls-visible");Bn.innerHTML=e?"◉ <span>TOUCH</span>":"⌨ <span>KEYS</span>",Bn.setAttribute("aria-pressed",String(!e))};window.addEventListener("keydown",e=>{e.repeat||(e.key.toLowerCase()==="m"&&he("#map-btn").click(),e.key.toLowerCase()==="c"&&ma(),e.key.toLowerCase()==="r"&&ha(),e.key==="Escape"&&_a(),(e.key==="?"||e.key.toLowerCase()==="h")&&ua(),(e.key===" "||e.key.toLowerCase()==="w")&&ct.start())});document.querySelectorAll("[data-touch]").forEach(e=>{const n=e.dataset.touch;e.addEventListener("pointerdown",t=>{if(!(t.pointerType==="mouse"&&t.button!==0)){t.preventDefault(),_t.pointerDown(t.pointerId,n);try{e.setPointerCapture(t.pointerId)}catch{}ct.start()}}),e.addEventListener("pointerup",t=>{t.preventDefault(),_t.pointerUp(t.pointerId)}),e.addEventListener("pointercancel",t=>_t.pointerCancel(t.pointerId)),e.addEventListener("lostpointercapture",t=>_t.lostPointerCapture(t.pointerId))});window.addEventListener("blur",()=>_t.releaseAll());document.addEventListener("visibilitychange",()=>{Xn=performance.now(),document.hidden&&(_t.releaseAll(),Bt=!0,he("#pause-panel").classList.remove("hidden"),Dt())});window.addEventListener("pointermove",e=>{fn==="free"&&e.buttons&&(ta-=e.movementX*.004,Fn=Pt.clamp(Fn-e.movementY*.003,-.3,1.1))});let Yr=0,Gi=60;function Ep(e){const n=pe.pos,t=sa(pe.yaw),i=Math.min(1,pe.speed/28),r=Math.max(-35,Math.min(35,(pe.speed-Yr)/Math.max(e,.001)));Yr=pe.speed;let a,s;if(fn==="hood")a=n.clone().add(new ae(0,2.3,0)).addScaledVector(t,1.2),s=a.clone().addScaledVector(t,7).add(new ae(0,.3,0));else if(fn==="free"){const f=new ae(Math.sin(ta)*Math.cos(Fn),Math.sin(Fn),Math.cos(ta)*Math.cos(Fn));a=n.clone().add(new ae(0,1.5,0)),s=a.clone().addScaledVector(f,-14)}else{const f=fn==="far",m=(f?30:11.8)+i*(f?8:3.8),p=(f?10:5.35)+i*1.6;a=n.clone().add(new ae(0,1.4,0)).addScaledVector(t,pe.speed*.2),s=n.clone().addScaledVector(t,-m).add(new ae(0,p,0)).addScaledVector(pe.vel,-.11),f||s.addScaledVector(la(pe.yaw),2.3),s.addScaledVector(t,-Pt.clamp(r*.018,-.8,.8))}const o=a;Ct>0&&(s.x+=(Math.random()-.5)*Ct,s.y+=(Math.random()-.5)*Ct,Ct=Math.max(0,Ct-e*1.3)),Ft.position.lerp(s,1-Math.exp(-(5.4-i*.65)*e)),Ft.lookAt(o);const h=60+i*4.5;Math.abs(h-Gi)>.15&&(Gi=h,Ft.fov=Gi,Ft.updateProjectionMatrix())}function To(e){requestAnimationFrame(To);const n=performance.now(),t=Math.min((e-Xn)/1e3,.045);if(Xn=e,!Bt){const h=_t.update(),f=pe.grounded,m=pe.vel.y,p=performance.now();pe.update(t,h,Et,qt,hi),qr=performance.now()-p,f&&!pe.grounded&&h.jump&&(ct.jump(),Ct=Math.max(Ct,.07)),!f&&pe.grounded&&(ct.landing(Math.min(1,Math.abs(m)/20)),Ct=Math.max(Ct,Math.min(.42,Math.abs(m)*.012)));const g=dn.step(pe.pos,pe.yaw,t);g&&(ia++,dn.removeBuilding(g),Kt.break(g),Xt.burst(new ae(g.x,pe.pos.y,g.z),32,16749652),pe.vel.add(new ae((pe.pos.x-g.x)*3,7,(pe.pos.z-g.z)*3)),Ct=.5,ct.impact(Math.min(1,pe.speed/22)),Ht("CRUNCH! Structure demolished."));const E=Math.abs(pe.vel.dot(la(pe.yaw)));for(let A=0;A<pe.wheelContacts.length;A++){const M=pe.wheelContacts[A];Xt.dust(new ae(M.x,M.height+.07,M.z),pe.speed*(E>pe.speed*.28?1.35:1))}if(h.nitro&&pe.nitro>0&&Math.random()<t*8){const A=pe.pos.clone().addScaledVector(sa(pe.yaw),-1.72);Xt.burst(A.add(new ae((Math.random()-.5)*.9,.9,(Math.random()-.5)*.35)),1,16742965)}Xt.update(t),ct.update(pe.speed,Math.max(0,h.throttle),h.nitro&&pe.nitro>0,Math.max(h.handbrake?.55:0,E/Math.max(4,pe.speed))),Ep(t)}pi.position.copy(Ft.position);const i=pe.wheelContacts.reduce((h,f)=>Math.max(h,f.height),-1/0),r=Number.isFinite(i)?i:Et.heightAt(pe.pos.x,pe.pos.z),a=Pt.clamp(pe.pos.y-r,0,80);Wn.position.set(pe.pos.x,r+.035,pe.pos.z),Wn.scale.set(1.35+a*.055,2+a*.07,1),he("#speed").textContent=String(Math.round(pe.speed*3.6)).padStart(3,"0"),he("#speed-bar").style.width=`${Math.min(100,pe.speed/30*100)}%`,he("#nitro-bar").style.width=`${pe.nitro}%`,he("#nitro-state").textContent=pe.nitro>5?"READY TO BURN":"RECHARGING";const s=performance.now();ut.render(xt,Ft),Xr=performance.now()-s;const o=performance.now()-n;if(Bi+=o,ti=Math.max(ti,o),ei++,e-Fi>=1e3){const h=Et.takePerformanceSample();window.__monsterMapMetrics={fps:Math.round(ei*1e3/(e-Fi)),frameMs:Math.round(Bi/ei*10)/10,frameMsMax:Math.round(ti*10)/10,physicsMs:+qr.toFixed(2),renderMs:+Xr.toFixed(2),terrainSampleMs:+h.heightSampleMs.toFixed(3),terrainSamples:h.heightSamples,terrainTileBuildMs:+h.tileBuildMs.toFixed(3),terrainTileBuilds:h.tileBuilds,pixelRatio:ut.getPixelRatio(),graphicsQuality:Zt,drawCalls:ut.info.render.calls,triangles:ut.info.render.triangles,geometries:ut.info.memory.geometries,textures:ut.info.memory.textures,heapMB:vp(),audioState:ct.getState(),audioRms:+ct.outputRms().toFixed(4),audioMuted:ct.isMuted(),volume:ct.getMasterVolume(),speed:pe.speed,position:[pe.pos.x,pe.pos.y,pe.pos.z],destroyed:ia,yaw:pe.yaw,steer:_t.state.steer,throttle:_t.state.throttle,nitro:_t.state.nitro,jump:_t.state.jump,grounded:pe.grounded,activeTouchActions:_t.touches.size,frontWheelAngles:qt.frontWheels.map(f=>f.rotation.y),rearWheelAngles:qt.wheels.filter(f=>!qt.frontWheels.includes(f)).map(f=>f.rotation.y),wheelContacts:pe.wheelContacts.filter(f=>f.contact).length,averageCompression:pe.wheelContacts.reduce((f,m)=>f+m.compression,0)/Math.max(1,pe.wheelContacts.length),contactPitch:pe.contactPitch,contactRoll:pe.contactRoll,terrainOriginHeight:Et.heightAt(0,0)},ei=0,Bi=0,ti=0,Fi=e}}function _i(){const e=da();ut.setPixelRatio(Math.min(devicePixelRatio||1,ca(Zt))),ut.setSize(e.width,e.height),Ft.aspect=e.width/Math.max(1,e.height),Ft.updateProjectionMatrix(),Wt?.resize()}window.addEventListener("resize",_i);window.addEventListener("orientationchange",()=>setTimeout(_i,180));window.visualViewport?.addEventListener("resize",_i);const Ao=he("#game");Ao.addEventListener("webglcontextlost",e=>{e.preventDefault(),_t.releaseAll(),Bt=!0,he("#pause-panel").classList.remove("hidden"),Dt(),Ht("Graphics paused. Return to the game when ready.")});Ao.addEventListener("webglcontextrestored",()=>{Xn=performance.now(),_i(),Ht("Graphics restored.")});await mi(Sn);requestAnimationFrame(To);
