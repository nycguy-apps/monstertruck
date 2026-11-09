const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./collision-world-DeM6Yckj.js","./three.core-By0lf9Pu.js"])))=>i.map(i=>d[i]);
import{c as ul,N as cn,S as tr,C as $e,F as fs,M as Ft,V as ne,R as fl,a as Rt,w as Da,W as Rr,b as On,d as vt,L as xn,H as Xi,U as yn,D as Nt,B as yt,e as ii,f as qi,p as hl,g as ai,h as Bn,i as dt,O as pl,P as jn,j as nr,k as dn,E as ml,l as ut,A as gl,m as ia,n as qt,o as Gi,q as ir,r as ri,s as oi,t as hs,u as vl,v as an,x as An,y as Yi,z as un,G as Ot,I as bn,J as Un,K as ki,Q as _l,T as Sl,X as Xn,Y as Ml,Z as El,_ as xl,$ as bl,a0 as Tl,a1 as Al,a2 as Rl,a3 as wl,a4 as Cl,a5 as yl,a6 as Pl,a7 as Ll,a8 as Dl,a9 as Ul,aa as Il,ab as Nl,ac as Fl,ad as ps,ae as aa,af as mi,ag as Ol,ah as Qn,ai as Bl,aj as Gl,ak as kl,al as Hl,am as ms,an as Vl,ao as zl,ap as Wl,aq as Xl,ar as Ke,as as ql,at as Yl,au as Kl,av as gs,aw as Jt,ax as Hi,ay as vs,az as _s,aA as Ss,aB as Ms,aC as $l,aD as Zl,aE as jl,aF as Ql,aG as Es,aH as Tn,aI as Jl,aJ as ec,aK as tc,aL as xs,aM as nc,aN as bs,aO as Ts,aP as ra,aQ as oa,aR as sa,aS as la,aT as ot,aU as wr,aV as Cr,aW as yr,aX as Pr,aY as Lr,aZ as Dr,a_ as Ur,a$ as Ir,b0 as Nr,b1 as Fr,b2 as Or,b3 as Br,b4 as Gr,b5 as kr,b6 as Hr,b7 as Vr,b8 as zr,b9 as Wr,ba as Xr,bb as qr,bc as Yr,bd as Kr,be as $r,bf as Zr,bg as jr,bh as Qr,bi as Jr,bj as eo,bk as Ua,bl as Ia,bm as Na,bn as Fa,bo as Oa,bp as Ba,bq as Ga,br as ic,bs as to,bt as ac,bu as Li,bv as rc,bw as no,bx as io,by as ao,bz as Vi,bA as ka,bB as oc,bC as As,bD as sc,bE as lc,bF as cc,bG as Rs,bH as ro,bI as Xt,bJ as oo,bK as ws,bL as dc,bM as uc,bN as fc,bO as so,bP as At,bQ as hc,bR as Cs,bS as pc,bT as mc,bU as gc,bV as ys,bW as vc,bX as _c,bY as Sc,bZ as Mc,b_ as Ec,b$ as xc,c0 as bc,c1 as Tc,c2 as Ac,c3 as Rc,c4 as wc,c5 as Cc,c6 as Yt,c7 as xt,c8 as st,c9 as zi,ca as Ha,cb as Ps,cc as yc,cd as Pc,ce as Ls,cf as Gt,cg as Va,ch as Di,ci as lo,cj as en,ck as Lc,cl as co,cm as Dc,cn as ca,co as uo,cp as gi,cq as Uc,cr as Ic,cs as Nc,ct as Fc,cu as Ds,cv as Oc,cw as Bc,cx as Gc,cy as kc,cz as Hc}from"./three.core-By0lf9Pu.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const Vc="modulepreload",zc=function(e,n){return new URL(e,n).href},fo={},za=function(n,t,i){let r=Promise.resolve();if(t&&t.length>0){let o=function(d){return Promise.all(d.map(u=>Promise.resolve(u).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const s=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),h=c?.nonce||c?.getAttribute("nonce");r=o(t.map(d=>{if(d=zc(d,i),d in fo)return;fo[d]=!0;const u=d.endsWith(".css"),g=u?'[rel="stylesheet"]':"";if(!!i)for(let E=s.length-1;E>=0;E--){const p=s[E];if(p.href===d&&(!u||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${g}`))return;const M=document.createElement("link");if(M.rel=u?"stylesheet":Vc,u||(M.as="script"),M.crossOrigin="",M.href=d,h&&M.setAttribute("nonce",h),document.head.appendChild(M),u)return new Promise((E,p)=>{M.addEventListener("load",E),M.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${d}`)))})}))}function a(o){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o}return r.then(o=>{for(const s of o||[])s.status==="rejected"&&a(s.reason);return n().catch(a)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Us(){let e=null,n=!1,t=null,i=null;function r(a,o){t(a,o),i=e.requestAnimationFrame(r)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(r),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(a){t=a},setContext:function(a){e=a}}}function Wc(e){const n=new WeakMap;function t(s,c){const h=s.array,d=s.usage,u=h.byteLength,g=e.createBuffer();e.bindBuffer(c,g),e.bufferData(c,h,d),s.onUploadCallback();let m;if(h instanceof Float32Array)m=e.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)m=e.HALF_FLOAT;else if(h instanceof Uint16Array)s.isFloat16BufferAttribute?m=e.HALF_FLOAT:m=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=e.SHORT;else if(h instanceof Uint32Array)m=e.UNSIGNED_INT;else if(h instanceof Int32Array)m=e.INT;else if(h instanceof Int8Array)m=e.BYTE;else if(h instanceof Uint8Array)m=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:s.version,size:u}}function i(s,c,h){const d=c.array,u=c.updateRanges;if(e.bindBuffer(h,s),u.length===0)e.bufferSubData(h,0,d);else{u.sort((m,M)=>m.start-M.start);let g=0;for(let m=1;m<u.length;m++){const M=u[g],E=u[m];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++g,u[g]=E)}u.length=g+1;for(let m=0,M=u.length;m<M;m++){const E=u[m];e.bufferSubData(h,E.start*d.BYTES_PER_ELEMENT,d,E.start,E.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(s){return s.isInterleavedBufferAttribute&&(s=s.data),n.get(s)}function a(s){s.isInterleavedBufferAttribute&&(s=s.data);const c=n.get(s);c&&(e.deleteBuffer(c.buffer),n.delete(s))}function o(s,c){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const d=n.get(s);(!d||d.version<s.version)&&n.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const h=n.get(s);if(h===void 0)n.set(s,t(s,c));else if(h.version<s.version){if(h.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,s,c),h.version=s.version}}return{get:r,remove:a,update:o}}var Xc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qc=`#ifdef USE_ALPHAHASH
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
#endif`,Yc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$c=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jc=`#ifdef USE_AOMAP
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
#endif`,Qc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jc=`#ifdef USE_BATCHING
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
#endif`,ed=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,td=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,id=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ad=`#ifdef USE_IRIDESCENCE
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
#endif`,rd=`#ifdef USE_BUMPMAP
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
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pd=`#define PI 3.141592653589793
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
} // validated`,md=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gd=`vec3 transformedNormal = objectNormal;
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
#endif`,vd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_d=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Md=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ed="gl_FragColor = linearToOutputTexel( gl_FragColor );",xd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bd=`#ifdef USE_ENVMAP
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
#endif`,Td=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ad=`#ifdef USE_ENVMAP
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
#endif`,Rd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wd=`#ifdef USE_ENVMAP
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
#endif`,Cd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ld=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dd=`#ifdef USE_GRADIENTMAP
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
}`,Ud=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Id=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fd=`uniform bool receiveShadow;
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
#endif`,Od=`#ifdef USE_ENVMAP
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
#endif`,Bd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vd=`PhysicalMaterial material;
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
#endif`,zd=`struct PhysicalMaterial {
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
}`,Wd=`
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
#endif`,Xd=`#if defined( RE_IndirectDiffuse )
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
#endif`,qd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$d=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eu=`#if defined( USE_POINTS_UV )
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
#endif`,tu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,au=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ru=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ou=`#ifdef USE_MORPHTARGETS
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
#endif`,su=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,du=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hu=`#ifdef USE_NORMALMAP
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
#endif`,pu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_u=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Su=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Eu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Au=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ru=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yu=`float getShadowMask() {
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
}`,Pu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lu=`#ifdef USE_SKINNING
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
#endif`,Du=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Uu=`#ifdef USE_SKINNING
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
#endif`,Iu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ou=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bu=`#ifdef USE_TRANSMISSION
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
#endif`,Gu=`#ifdef USE_TRANSMISSION
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
#endif`,ku=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xu=`uniform sampler2D t2D;
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
}`,qu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ku=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$u=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zu=`#include <common>
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
}`,ju=`#if DEPTH_PACKING == 3200
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
}`,Qu=`#define DISTANCE
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
}`,Ju=`#define DISTANCE
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
}`,ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nf=`uniform float scale;
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
}`,af=`uniform vec3 diffuse;
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
}`,rf=`#include <common>
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
}`,of=`uniform vec3 diffuse;
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
}`,sf=`#define LAMBERT
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
}`,lf=`#define LAMBERT
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
}`,cf=`#define MATCAP
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
}`,df=`#define MATCAP
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
}`,uf=`#define NORMAL
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
}`,ff=`#define NORMAL
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
}`,hf=`#define PHONG
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
}`,pf=`#define PHONG
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
}`,mf=`#define STANDARD
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
}`,gf=`#define STANDARD
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
}`,vf=`#define TOON
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
}`,_f=`#define TOON
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
}`,Sf=`uniform float size;
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
}`,Mf=`uniform vec3 diffuse;
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
}`,Ef=`#include <common>
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
}`,xf=`uniform vec3 color;
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
}`,bf=`uniform float rotation;
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
}`,Tf=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:Xc,alphahash_pars_fragment:qc,alphamap_fragment:Yc,alphamap_pars_fragment:Kc,alphatest_fragment:$c,alphatest_pars_fragment:Zc,aomap_fragment:jc,aomap_pars_fragment:Qc,batching_pars_vertex:Jc,batching_vertex:ed,begin_vertex:td,beginnormal_vertex:nd,bsdfs:id,iridescence_fragment:ad,bumpmap_pars_fragment:rd,clipping_planes_fragment:od,clipping_planes_pars_fragment:sd,clipping_planes_pars_vertex:ld,clipping_planes_vertex:cd,color_fragment:dd,color_pars_fragment:ud,color_pars_vertex:fd,color_vertex:hd,common:pd,cube_uv_reflection_fragment:md,defaultnormal_vertex:gd,displacementmap_pars_vertex:vd,displacementmap_vertex:_d,emissivemap_fragment:Sd,emissivemap_pars_fragment:Md,colorspace_fragment:Ed,colorspace_pars_fragment:xd,envmap_fragment:bd,envmap_common_pars_fragment:Td,envmap_pars_fragment:Ad,envmap_pars_vertex:Rd,envmap_physical_pars_fragment:Od,envmap_vertex:wd,fog_vertex:Cd,fog_pars_vertex:yd,fog_fragment:Pd,fog_pars_fragment:Ld,gradientmap_pars_fragment:Dd,lightmap_pars_fragment:Ud,lights_lambert_fragment:Id,lights_lambert_pars_fragment:Nd,lights_pars_begin:Fd,lights_toon_fragment:Bd,lights_toon_pars_fragment:Gd,lights_phong_fragment:kd,lights_phong_pars_fragment:Hd,lights_physical_fragment:Vd,lights_physical_pars_fragment:zd,lights_fragment_begin:Wd,lights_fragment_maps:Xd,lights_fragment_end:qd,logdepthbuf_fragment:Yd,logdepthbuf_pars_fragment:Kd,logdepthbuf_pars_vertex:$d,logdepthbuf_vertex:Zd,map_fragment:jd,map_pars_fragment:Qd,map_particle_fragment:Jd,map_particle_pars_fragment:eu,metalnessmap_fragment:tu,metalnessmap_pars_fragment:nu,morphinstance_vertex:iu,morphcolor_vertex:au,morphnormal_vertex:ru,morphtarget_pars_vertex:ou,morphtarget_vertex:su,normal_fragment_begin:lu,normal_fragment_maps:cu,normal_pars_fragment:du,normal_pars_vertex:uu,normal_vertex:fu,normalmap_pars_fragment:hu,clearcoat_normal_fragment_begin:pu,clearcoat_normal_fragment_maps:mu,clearcoat_pars_fragment:gu,iridescence_pars_fragment:vu,opaque_fragment:_u,packing:Su,premultiplied_alpha_fragment:Mu,project_vertex:Eu,dithering_fragment:xu,dithering_pars_fragment:bu,roughnessmap_fragment:Tu,roughnessmap_pars_fragment:Au,shadowmap_pars_fragment:Ru,shadowmap_pars_vertex:wu,shadowmap_vertex:Cu,shadowmask_pars_fragment:yu,skinbase_vertex:Pu,skinning_pars_vertex:Lu,skinning_vertex:Du,skinnormal_vertex:Uu,specularmap_fragment:Iu,specularmap_pars_fragment:Nu,tonemapping_fragment:Fu,tonemapping_pars_fragment:Ou,transmission_fragment:Bu,transmission_pars_fragment:Gu,uv_pars_fragment:ku,uv_pars_vertex:Hu,uv_vertex:Vu,worldpos_vertex:zu,background_vert:Wu,background_frag:Xu,backgroundCube_vert:qu,backgroundCube_frag:Yu,cube_vert:Ku,cube_frag:$u,depth_vert:Zu,depth_frag:ju,distanceRGBA_vert:Qu,distanceRGBA_frag:Ju,equirect_vert:ef,equirect_frag:tf,linedashed_vert:nf,linedashed_frag:af,meshbasic_vert:rf,meshbasic_frag:of,meshlambert_vert:sf,meshlambert_frag:lf,meshmatcap_vert:cf,meshmatcap_frag:df,meshnormal_vert:uf,meshnormal_frag:ff,meshphong_vert:hf,meshphong_frag:pf,meshphysical_vert:mf,meshphysical_frag:gf,meshtoon_vert:vf,meshtoon_frag:_f,points_vert:Sf,points_frag:Mf,shadow_vert:Ef,shadow_frag:xf,sprite_vert:bf,sprite_frag:Tf},fe={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Wt={basic:{uniforms:At([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:At([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new $e(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:At([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:At([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:At([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new $e(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:At([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:At([fe.points,fe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:At([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:At([fe.common,fe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:At([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:At([fe.sprite,fe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:At([fe.common,fe.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:At([fe.lights,fe.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Wt.physical={uniforms:At([Wt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const vi={r:0,b:0,g:0},vn=new Xt,Af=new Ft;function Rf(e,n,t,i,r,a,o){const s=new $e(0);let c=a===!0?0:1,h,d,u=null,g=0,m=null;function M(A){let b=A.isScene===!0?A.background:null;return b&&b.isTexture&&(b=(A.backgroundBlurriness>0?t:n).get(b)),b}function E(A){let b=!1;const C=M(A);C===null?l(s,c):C&&C.isColor&&(l(C,1),b=!0);const R=e.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(e.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function p(A,b){const C=M(b);C&&(C.isCubeTexture||C.mapping===Yi)?(d===void 0&&(d=new dt(new dn(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:ro(Wt.backgroundCube.uniforms),vertexShader:Wt.backgroundCube.vertexShader,fragmentShader:Wt.backgroundCube.fragmentShader,side:yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,D,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),vn.copy(b.backgroundRotation),vn.x*=-1,vn.y*=-1,vn.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(vn.y*=-1,vn.z*=-1),d.material.uniforms.envMap.value=C,d.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Af.makeRotationFromEuler(vn)),d.material.toneMapped=vt.getTransfer(C.colorSpace)!==ot,(u!==C||g!==C.version||m!==e.toneMapping)&&(d.material.needsUpdate=!0,u=C,g=C.version,m=e.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(h===void 0&&(h=new dt(new Ms(2,2),new an({name:"BackgroundMaterial",uniforms:ro(Wt.background.uniforms),vertexShader:Wt.background.vertexShader,fragmentShader:Wt.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=C,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.toneMapped=vt.getTransfer(C.colorSpace)!==ot,C.matrixAutoUpdate===!0&&C.updateMatrix(),h.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||g!==C.version||m!==e.toneMapping)&&(h.material.needsUpdate=!0,u=C,g=C.version,m=e.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null))}function l(A,b){A.getRGB(vi,Rs(e)),i.buffers.color.setClear(vi.r,vi.g,vi.b,b,o)}function T(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return s},setClearColor:function(A,b=1){s.set(A),c=b,l(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(A){c=A,l(s,c)},render:E,addToRenderList:p,dispose:T}}function wf(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},r=g(null);let a=r,o=!1;function s(S,P,O,W,X){let Z=!1;const q=u(W,O,P);a!==q&&(a=q,h(a.object)),Z=m(S,W,O,X),Z&&M(S,W,O,X),X!==null&&n.update(X,e.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,b(S,P,O,W),X!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(X).buffer))}function c(){return e.createVertexArray()}function h(S){return e.bindVertexArray(S)}function d(S){return e.deleteVertexArray(S)}function u(S,P,O){const W=O.wireframe===!0;let X=i[S.id];X===void 0&&(X={},i[S.id]=X);let Z=X[P.id];Z===void 0&&(Z={},X[P.id]=Z);let q=Z[W];return q===void 0&&(q=g(c()),Z[W]=q),q}function g(S){const P=[],O=[],W=[];for(let X=0;X<t;X++)P[X]=0,O[X]=0,W[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:W,object:S,attributes:{},index:null}}function m(S,P,O,W){const X=a.attributes,Z=P.attributes;let q=0;const le=O.getAttributes();for(const V in le)if(le[V].location>=0){const Re=X[V];let we=Z[V];if(we===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(we=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(we=S.instanceColor)),Re===void 0||Re.attribute!==we||we&&Re.data!==we.data)return!0;q++}return a.attributesNum!==q||a.index!==W}function M(S,P,O,W){const X={},Z=P.attributes;let q=0;const le=O.getAttributes();for(const V in le)if(le[V].location>=0){let Re=Z[V];Re===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(Re=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(Re=S.instanceColor));const we={};we.attribute=Re,Re&&Re.data&&(we.data=Re.data),X[V]=we,q++}a.attributes=X,a.attributesNum=q,a.index=W}function E(){const S=a.newAttributes;for(let P=0,O=S.length;P<O;P++)S[P]=0}function p(S){l(S,0)}function l(S,P){const O=a.newAttributes,W=a.enabledAttributes,X=a.attributeDivisors;O[S]=1,W[S]===0&&(e.enableVertexAttribArray(S),W[S]=1),X[S]!==P&&(e.vertexAttribDivisor(S,P),X[S]=P)}function T(){const S=a.newAttributes,P=a.enabledAttributes;for(let O=0,W=P.length;O<W;O++)P[O]!==S[O]&&(e.disableVertexAttribArray(O),P[O]=0)}function A(S,P,O,W,X,Z,q){q===!0?e.vertexAttribIPointer(S,P,O,X,Z):e.vertexAttribPointer(S,P,O,W,X,Z)}function b(S,P,O,W){E();const X=W.attributes,Z=O.getAttributes(),q=P.defaultAttributeValues;for(const le in Z){const V=Z[le];if(V.location>=0){let ve=X[le];if(ve===void 0&&(le==="instanceMatrix"&&S.instanceMatrix&&(ve=S.instanceMatrix),le==="instanceColor"&&S.instanceColor&&(ve=S.instanceColor)),ve!==void 0){const Re=ve.normalized,we=ve.itemSize,Ve=n.get(ve);if(Ve===void 0)continue;const We=Ve.buffer,je=Ve.type,Xe=Ve.bytesPerElement,B=je===e.INT||je===e.UNSIGNED_INT||ve.gpuType===Es;if(ve.isInterleavedBufferAttribute){const K=ve.data,me=K.stride,De=ve.offset;if(K.isInstancedInterleavedBuffer){for(let Ce=0;Ce<V.locationSize;Ce++)l(V.location+Ce,K.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Ce=0;Ce<V.locationSize;Ce++)p(V.location+Ce);e.bindBuffer(e.ARRAY_BUFFER,We);for(let Ce=0;Ce<V.locationSize;Ce++)A(V.location+Ce,we/V.locationSize,je,Re,me*Xe,(De+we/V.locationSize*Ce)*Xe,B)}else{if(ve.isInstancedBufferAttribute){for(let K=0;K<V.locationSize;K++)l(V.location+K,ve.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let K=0;K<V.locationSize;K++)p(V.location+K);e.bindBuffer(e.ARRAY_BUFFER,We);for(let K=0;K<V.locationSize;K++)A(V.location+K,we/V.locationSize,je,Re,we*Xe,we/V.locationSize*K*Xe,B)}}else if(q!==void 0){const Re=q[le];if(Re!==void 0)switch(Re.length){case 2:e.vertexAttrib2fv(V.location,Re);break;case 3:e.vertexAttrib3fv(V.location,Re);break;case 4:e.vertexAttrib4fv(V.location,Re);break;default:e.vertexAttrib1fv(V.location,Re)}}}}T()}function C(){U();for(const S in i){const P=i[S];for(const O in P){const W=P[O];for(const X in W)d(W[X].object),delete W[X];delete P[O]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const O in P){const W=P[O];for(const X in W)d(W[X].object),delete W[X];delete P[O]}delete i[S.id]}function D(S){for(const P in i){const O=i[P];if(O[S.id]===void 0)continue;const W=O[S.id];for(const X in W)d(W[X].object),delete W[X];delete O[S.id]}}function U(){_(),o=!0,a!==r&&(a=r,h(a.object))}function _(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:s,reset:U,resetDefaultState:_,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:D,initAttributes:E,enableAttribute:p,disableUnusedAttributes:T}}function Cf(e,n,t){let i;function r(h){i=h}function a(h,d){e.drawArrays(i,h,d),t.update(d,i,1)}function o(h,d,u){u!==0&&(e.drawArraysInstanced(i,h,d,u),t.update(d,i,u))}function s(h,d,u){if(u===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,d,0,u);let m=0;for(let M=0;M<u;M++)m+=d[M];t.update(m,i,1)}function c(h,d,u,g){if(u===0)return;const m=n.get("WEBGL_multi_draw");if(m===null)for(let M=0;M<h.length;M++)o(h[M],d[M],g[M]);else{m.multiDrawArraysInstancedWEBGL(i,h,0,d,0,g,0,u);let M=0;for(let E=0;E<u;E++)M+=d[E]*g[E];t.update(M,i,1)}}this.setMode=r,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function yf(e,n,t,i){let r;function a(){if(r!==void 0)return r;if(n.has("EXT_texture_filter_anisotropic")===!0){const D=n.get("EXT_texture_filter_anisotropic");r=e.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==qt&&i.convert(D)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(D){const U=D===Xi&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(D!==yn&&i.convert(D)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Tn&&!U)}function c(D){if(D==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const d=c(h);d!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);const u=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),m=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=e.getParameter(e.MAX_TEXTURE_SIZE),p=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),l=e.getParameter(e.MAX_VERTEX_ATTRIBS),T=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),A=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),C=M>0,R=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:h,logarithmicDepthBuffer:u,reversedDepthBuffer:g,maxTextures:m,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:p,maxAttributes:l,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:b,vertexTextures:C,maxSamples:R}}function Pf(e){const n=this;let t=null,i=0,r=!1,a=!1;const o=new Xl,s=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,g){const m=u.length!==0||g||i!==0||r;return r=g,i=u.length,m},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,g){t=d(u,g,0)},this.setState=function(u,g,m){const M=u.clippingPlanes,E=u.clipIntersection,p=u.clipShadows,l=e.get(u);if(!r||M===null||M.length===0||a&&!p)a?d(null):h();else{const T=a?0:i,A=T*4;let b=l.clippingState||null;c.value=b,b=d(M,g,A,m);for(let C=0;C!==A;++C)b[C]=t[C];l.clippingState=b,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=T}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function d(u,g,m,M){const E=u!==null?u.length:0;let p=null;if(E!==0){if(p=c.value,M!==!0||p===null){const l=m+E*4,T=g.matrixWorldInverse;s.getNormalMatrix(T),(p===null||p.length<l)&&(p=new Float32Array(l));for(let A=0,b=m;A!==E;++A,b+=4)o.copy(u[A]).applyMatrix4(T,s),o.normal.toArray(p,b),p[b+3]=o.constant}c.value=p,c.needsUpdate=!0}return n.numPlanes=E,n.numIntersection=0,p}}function Lf(e){let n=new WeakMap;function t(o,s){return s===Vi?o.mapping=ai:s===ka&&(o.mapping=Bn),o}function i(o){if(o&&o.isTexture){const s=o.mapping;if(s===Vi||s===ka)if(n.has(o)){const c=n.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const h=new oc(c.height);return h.fromEquirectangularTexture(e,o),n.set(o,h),o.addEventListener("dispose",r),t(h.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const c=n.get(s);c!==void 0&&(n.delete(s),c.dispose())}function a(){n=new WeakMap}return{get:i,dispose:a}}const Fn=4,ho=[.125,.215,.35,.446,.526,.582],En=20,da=new pl,po=new $e;let ua=null,fa=0,ha=0,pa=!1;const Mn=(1+Math.sqrt(5))/2,Dn=1/Mn,mo=[new ne(-Mn,Dn,0),new ne(Mn,Dn,0),new ne(-Dn,0,Mn),new ne(Dn,0,Mn),new ne(0,Mn,-Dn),new ne(0,Mn,Dn),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)],Df=new ne;class Wa{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,t=0,i=.1,r=100,a={}){const{size:o=256,position:s=Df}=a;ua=this._renderer.getRenderTarget(),fa=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(n,i,r,c,s),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_o(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(ua,fa,ha),this._renderer.xr.enabled=pa,n.scissorTest=!1,_i(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===ai||n.mapping===Bn?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),ua=this._renderer.getRenderTarget(),fa=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Xi,format:qt,colorSpace:qi,depthBuffer:!1},r=go(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=go(n,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Uf(a)),this._blurMaterial=If(a,n,t)}return r}_compileMaterial(n){const t=new dt(this._lodPlanes[0],n);this._renderer.compile(t,da)}_sceneToCubeUV(n,t,i,r,a){const c=new jn(90,1,t,i),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,g=u.autoClear,m=u.toneMapping;u.getClearColor(po),u.toneMapping=cn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));const E=new nr({name:"PMREM.Background",side:yt,depthWrite:!1,depthTest:!1}),p=new dt(new dn,E);let l=!1;const T=n.background;T?T.isColor&&(E.color.copy(T),n.background=null,l=!0):(E.color.copy(po),l=!0);for(let A=0;A<6;A++){const b=A%3;b===0?(c.up.set(0,h[A],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x+d[A],a.y,a.z)):b===1?(c.up.set(0,0,h[A]),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y+d[A],a.z)):(c.up.set(0,h[A],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y,a.z+d[A]));const C=this._cubeSize;_i(r,b*C,A>2?C:0,C,C),u.setRenderTarget(r),l&&u.render(p,c),u.render(n,c)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=m,u.autoClear=g,n.background=T}_textureToCubeUV(n,t){const i=this._renderer,r=n.mapping===ai||n.mapping===Bn;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_o()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vo());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new dt(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=n;const c=this._cubeSize;_i(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,da)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=mo[(r-a-1)%mo.length];this._blur(n,a-1,a,o,s)}t.autoClear=i}_blur(n,t,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(n,o,t,i,r,"latitudinal",a),this._halfBlur(o,n,i,i,r,"longitudinal",a)}_halfBlur(n,t,i,r,a,o,s){const c=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new dt(this._lodPlanes[r],h),g=h.uniforms,m=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*En-1),E=a/M,p=isFinite(a)?1+Math.floor(d*E):En;p>En&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${En}`);const l=[];let T=0;for(let D=0;D<En;++D){const U=D/E,_=Math.exp(-U*U/2);l.push(_),D===0?T+=_:D<p&&(T+=2*_)}for(let D=0;D<l.length;D++)l[D]=l[D]/T;g.envMap.value=n.texture,g.samples.value=p,g.weights.value=l,g.latitudinal.value=o==="latitudinal",s&&(g.poleAxis.value=s);const{_lodMax:A}=this;g.dTheta.value=M,g.mipInt.value=A-i;const b=this._sizeLods[r],C=3*b*(r>A-Fn?r-A+Fn:0),R=4*(this._cubeSize-b);_i(t,C,R,3*b,2*b),c.setRenderTarget(t),c.render(u,da)}}function Uf(e){const n=[],t=[],i=[];let r=e;const a=e-Fn+1+ho.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);t.push(s);let c=1/s;o>e-Fn?c=ho[o-e+Fn-1]:o===0&&(c=0),i.push(c);const h=1/(s-2),d=-h,u=1+h,g=[d,d,u,d,u,u,d,d,u,u,d,u],m=6,M=6,E=3,p=2,l=1,T=new Float32Array(E*M*m),A=new Float32Array(p*M*m),b=new Float32Array(l*M*m);for(let R=0;R<m;R++){const D=R%3*2/3-1,U=R>2?0:-1,_=[D,U,0,D+2/3,U,0,D+2/3,U+1,0,D,U,0,D+2/3,U+1,0,D,U+1,0];T.set(_,E*M*R),A.set(g,p*M*R);const S=[R,R,R,R,R,R];b.set(S,l*M*R)}const C=new un;C.setAttribute("position",new Ot(T,E)),C.setAttribute("uv",new Ot(A,p)),C.setAttribute("faceIndex",new Ot(b,l)),n.push(C),r>Fn&&r--}return{lodPlanes:n,sizeLods:t,sigmas:i}}function go(e,n,t){const i=new On(e,n,t);return i.texture.mapping=Yi,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _i(e,n,t,i,r){e.viewport.set(n,t,i,r),e.scissor.set(n,t,i,r)}function If(e,n,t){const i=new Float32Array(En),r=new ne(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:En,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ar(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function vo(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ar(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function _o(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ar(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function ar(){return`

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
	`}function Nf(e){let n=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const c=s.mapping,h=c===Vi||c===ka,d=c===ai||c===Bn;if(h||d){let u=n.get(s);const g=u!==void 0?u.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==g)return t===null&&(t=new Wa(e)),u=h?t.fromEquirectangular(s,u):t.fromCubemap(s,u),u.texture.pmremVersion=s.pmremVersion,n.set(s,u),u.texture;if(u!==void 0)return u.texture;{const m=s.image;return h&&m&&m.height>0||d&&m&&r(m)?(t===null&&(t=new Wa(e)),u=h?t.fromEquirectangular(s):t.fromCubemap(s),u.texture.pmremVersion=s.pmremVersion,n.set(s,u),s.addEventListener("dispose",a),u.texture):null}}}return s}function r(s){let c=0;const h=6;for(let d=0;d<h;d++)s[d]!==void 0&&c++;return c===h}function a(s){const c=s.target;c.removeEventListener("dispose",a);const h=n.get(c);h!==void 0&&(n.delete(c),h.dispose())}function o(){n=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Ff(e){const n={};function t(i){if(n[i]!==void 0)return n[i];let r;switch(i){case"WEBGL_depth_texture":r=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=e.getExtension(i)}return n[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Da("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Of(e,n,t,i){const r={},a=new WeakMap;function o(u){const g=u.target;g.index!==null&&n.remove(g.index);for(const M in g.attributes)n.remove(g.attributes[M]);g.removeEventListener("dispose",o),delete r[g.id];const m=a.get(g);m&&(n.remove(m),a.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function s(u,g){return r[g.id]===!0||(g.addEventListener("dispose",o),r[g.id]=!0,t.memory.geometries++),g}function c(u){const g=u.attributes;for(const m in g)n.update(g[m],e.ARRAY_BUFFER)}function h(u){const g=[],m=u.index,M=u.attributes.position;let E=0;if(m!==null){const T=m.array;E=m.version;for(let A=0,b=T.length;A<b;A+=3){const C=T[A+0],R=T[A+1],D=T[A+2];g.push(C,R,R,D,D,C)}}else if(M!==void 0){const T=M.array;E=M.version;for(let A=0,b=T.length/3-1;A<b;A+=3){const C=A+0,R=A+1,D=A+2;g.push(C,R,R,D,D,C)}}else return;const p=new(fc(g)?dc:uc)(g,1);p.version=E;const l=a.get(u);l&&n.remove(l),a.set(u,p)}function d(u){const g=a.get(u);if(g){const m=u.index;m!==null&&g.version<m.version&&h(u)}else h(u);return a.get(u)}return{get:s,update:c,getWireframeAttribute:d}}function Bf(e,n,t){let i;function r(g){i=g}let a,o;function s(g){a=g.type,o=g.bytesPerElement}function c(g,m){e.drawElements(i,m,a,g*o),t.update(m,i,1)}function h(g,m,M){M!==0&&(e.drawElementsInstanced(i,m,a,g*o,M),t.update(m,i,M))}function d(g,m,M){if(M===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,a,g,0,M);let p=0;for(let l=0;l<M;l++)p+=m[l];t.update(p,i,1)}function u(g,m,M,E){if(M===0)return;const p=n.get("WEBGL_multi_draw");if(p===null)for(let l=0;l<g.length;l++)h(g[l]/o,m[l],E[l]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,a,g,0,E,0,M);let l=0;for(let T=0;T<M;T++)l+=m[T]*E[T];t.update(l,i,1)}}this.setMode=r,this.setIndex=s,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function Gf(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(t.calls++,o){case e.TRIANGLES:t.triangles+=s*(a/3);break;case e.LINES:t.lines+=s*(a/2);break;case e.LINE_STRIP:t.lines+=s*(a-1);break;case e.LINE_LOOP:t.lines+=s*a;break;case e.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:r,update:i}}function kf(e,n,t){const i=new WeakMap,r=new Rt;function a(o,s,c){const h=o.morphTargetInfluences,d=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,u=d!==void 0?d.length:0;let g=i.get(s);if(g===void 0||g.count!==u){let _=function(){D.dispose(),i.delete(s),s.removeEventListener("dispose",_)};g!==void 0&&g.texture.dispose();const m=s.morphAttributes.position!==void 0,M=s.morphAttributes.normal!==void 0,E=s.morphAttributes.color!==void 0,p=s.morphAttributes.position||[],l=s.morphAttributes.normal||[],T=s.morphAttributes.color||[];let A=0;m===!0&&(A=1),M===!0&&(A=2),E===!0&&(A=3);let b=s.attributes.position.count*A,C=1;b>n.maxTextureSize&&(C=Math.ceil(b/n.maxTextureSize),b=n.maxTextureSize);const R=new Float32Array(b*C*4*u),D=new As(R,b,C,u);D.type=Tn,D.needsUpdate=!0;const U=A*4;for(let S=0;S<u;S++){const P=p[S],O=l[S],W=T[S],X=b*C*4*S;for(let Z=0;Z<P.count;Z++){const q=Z*U;m===!0&&(r.fromBufferAttribute(P,Z),R[X+q+0]=r.x,R[X+q+1]=r.y,R[X+q+2]=r.z,R[X+q+3]=0),M===!0&&(r.fromBufferAttribute(O,Z),R[X+q+4]=r.x,R[X+q+5]=r.y,R[X+q+6]=r.z,R[X+q+7]=0),E===!0&&(r.fromBufferAttribute(W,Z),R[X+q+8]=r.x,R[X+q+9]=r.y,R[X+q+10]=r.z,R[X+q+11]=W.itemSize===4?r.w:1)}}g={count:u,texture:D,size:new ut(b,C)},i.set(s,g),s.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(e,"morphTexture",o.morphTexture,t);else{let m=0;for(let E=0;E<h.length;E++)m+=h[E];const M=s.morphTargetsRelative?1:1-m;c.getUniforms().setValue(e,"morphTargetBaseInfluence",M),c.getUniforms().setValue(e,"morphTargetInfluences",h)}c.getUniforms().setValue(e,"morphTargetsTexture",g.texture,t),c.getUniforms().setValue(e,"morphTargetsTextureSize",g.size)}return{update:a}}function Hf(e,n,t,i){let r=new WeakMap;function a(c){const h=i.render.frame,d=c.geometry,u=n.get(c,d);if(r.get(u)!==h&&(n.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),r.get(c)!==h&&(t.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,e.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const g=c.skeleton;r.get(g)!==h&&(g.update(),r.set(g,h))}return u}function o(){r=new WeakMap}function s(c){const h=c.target;h.removeEventListener("dispose",s),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const Is=new xc,So=new hs(1,1),Ns=new As,Fs=new Ec,Os=new Mc,Mo=[],Eo=[],xo=new Float32Array(16),bo=new Float32Array(9),To=new Float32Array(4);function Hn(e,n,t){const i=e[0];if(i<=0||i>0)return e;const r=n*t;let a=Mo[r];if(a===void 0&&(a=new Float32Array(r),Mo[r]=a),n!==0){i.toArray(a,0);for(let o=1,s=0;o!==n;++o)s+=t,e[o].toArray(a,s)}return a}function St(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function Mt(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function Ki(e,n){let t=Eo[n];t===void 0&&(t=new Int32Array(n),Eo[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function Vf(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function zf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(St(t,n))return;e.uniform2fv(this.addr,n),Mt(t,n)}}function Wf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(St(t,n))return;e.uniform3fv(this.addr,n),Mt(t,n)}}function Xf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(St(t,n))return;e.uniform4fv(this.addr,n),Mt(t,n)}}function qf(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(St(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),Mt(t,n)}else{if(St(t,i))return;To.set(i),e.uniformMatrix2fv(this.addr,!1,To),Mt(t,i)}}function Yf(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(St(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),Mt(t,n)}else{if(St(t,i))return;bo.set(i),e.uniformMatrix3fv(this.addr,!1,bo),Mt(t,i)}}function Kf(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(St(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),Mt(t,n)}else{if(St(t,i))return;xo.set(i),e.uniformMatrix4fv(this.addr,!1,xo),Mt(t,i)}}function $f(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function Zf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(St(t,n))return;e.uniform2iv(this.addr,n),Mt(t,n)}}function jf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(St(t,n))return;e.uniform3iv(this.addr,n),Mt(t,n)}}function Qf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(St(t,n))return;e.uniform4iv(this.addr,n),Mt(t,n)}}function Jf(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function eh(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(St(t,n))return;e.uniform2uiv(this.addr,n),Mt(t,n)}}function th(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(St(t,n))return;e.uniform3uiv(this.addr,n),Mt(t,n)}}function nh(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(St(t,n))return;e.uniform4uiv(this.addr,n),Mt(t,n)}}function ih(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);let a;this.type===e.SAMPLER_2D_SHADOW?(So.compareFunction=ms,a=So):a=Is,t.setTexture2D(n||a,r)}function ah(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(n||Fs,r)}function rh(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(n||Os,r)}function oh(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(n||Ns,r)}function sh(e){switch(e){case 5126:return Vf;case 35664:return zf;case 35665:return Wf;case 35666:return Xf;case 35674:return qf;case 35675:return Yf;case 35676:return Kf;case 5124:case 35670:return $f;case 35667:case 35671:return Zf;case 35668:case 35672:return jf;case 35669:case 35673:return Qf;case 5125:return Jf;case 36294:return eh;case 36295:return th;case 36296:return nh;case 35678:case 36198:case 36298:case 36306:case 35682:return ih;case 35679:case 36299:case 36307:return ah;case 35680:case 36300:case 36308:case 36293:return rh;case 36289:case 36303:case 36311:case 36292:return oh}}function lh(e,n){e.uniform1fv(this.addr,n)}function ch(e,n){const t=Hn(n,this.size,2);e.uniform2fv(this.addr,t)}function dh(e,n){const t=Hn(n,this.size,3);e.uniform3fv(this.addr,t)}function uh(e,n){const t=Hn(n,this.size,4);e.uniform4fv(this.addr,t)}function fh(e,n){const t=Hn(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function hh(e,n){const t=Hn(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function ph(e,n){const t=Hn(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function mh(e,n){e.uniform1iv(this.addr,n)}function gh(e,n){e.uniform2iv(this.addr,n)}function vh(e,n){e.uniform3iv(this.addr,n)}function _h(e,n){e.uniform4iv(this.addr,n)}function Sh(e,n){e.uniform1uiv(this.addr,n)}function Mh(e,n){e.uniform2uiv(this.addr,n)}function Eh(e,n){e.uniform3uiv(this.addr,n)}function xh(e,n){e.uniform4uiv(this.addr,n)}function bh(e,n,t){const i=this.cache,r=n.length,a=Ki(t,r);St(i,a)||(e.uniform1iv(this.addr,a),Mt(i,a));for(let o=0;o!==r;++o)t.setTexture2D(n[o]||Is,a[o])}function Th(e,n,t){const i=this.cache,r=n.length,a=Ki(t,r);St(i,a)||(e.uniform1iv(this.addr,a),Mt(i,a));for(let o=0;o!==r;++o)t.setTexture3D(n[o]||Fs,a[o])}function Ah(e,n,t){const i=this.cache,r=n.length,a=Ki(t,r);St(i,a)||(e.uniform1iv(this.addr,a),Mt(i,a));for(let o=0;o!==r;++o)t.setTextureCube(n[o]||Os,a[o])}function Rh(e,n,t){const i=this.cache,r=n.length,a=Ki(t,r);St(i,a)||(e.uniform1iv(this.addr,a),Mt(i,a));for(let o=0;o!==r;++o)t.setTexture2DArray(n[o]||Ns,a[o])}function wh(e){switch(e){case 5126:return lh;case 35664:return ch;case 35665:return dh;case 35666:return uh;case 35674:return fh;case 35675:return hh;case 35676:return ph;case 5124:case 35670:return mh;case 35667:case 35671:return gh;case 35668:case 35672:return vh;case 35669:case 35673:return _h;case 5125:return Sh;case 36294:return Mh;case 36295:return Eh;case 36296:return xh;case 35678:case 36198:case 36298:case 36306:case 35682:return bh;case 35679:case 36299:case 36307:return Th;case 35680:case 36300:case 36308:case 36293:return Ah;case 36289:case 36303:case 36311:case 36292:return Rh}}class Ch{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=sh(t.type)}}class yh{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wh(t.type)}}class Ph{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(n,t[s.id],i)}}}const ma=/(\w+)(\])?(\[|\.)?/g;function Ao(e,n){e.seq.push(n),e.map[n.id]=n}function Lh(e,n,t){const i=e.name,r=i.length;for(ma.lastIndex=0;;){const a=ma.exec(i),o=ma.lastIndex;let s=a[1];const c=a[2]==="]",h=a[3];if(c&&(s=s|0),h===void 0||h==="["&&o+2===r){Ao(t,h===void 0?new Ch(s,e,n):new yh(s,e,n));break}else{let u=t.map[s];u===void 0&&(u=new Ph(s),Ao(t,u)),t=u}}}class Ui{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=n.getActiveUniform(t,r),o=n.getUniformLocation(t,a.name);Lh(a,o,this)}}setValue(n,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(n,i,r)}setOptional(n,t,i){const r=t[i];r!==void 0&&this.setValue(n,i,r)}static upload(n,t,i,r){for(let a=0,o=t.length;a!==o;++a){const s=t[a],c=i[s.id];c.needsUpdate!==!1&&s.setValue(n,c.value,r)}}static seqWithValue(n,t){const i=[];for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.id in t&&i.push(o)}return i}}function Ro(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const Dh=37297;let Uh=0;function Ih(e,n){const t=e.split(`
`),i=[],r=Math.max(n-6,0),a=Math.min(n+6,t.length);for(let o=r;o<a;o++){const s=o+1;i.push(`${s===n?">":" "} ${s}: ${t[o]}`)}return i.join(`
`)}const wo=new Ke;function Nh(e){vt._getMatrix(wo,vt.workingColorSpace,e);const n=`mat3( ${wo.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(e)){case ws:return[n,"LinearTransferOETF"];case ot:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function Co(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),a=(e.getShaderInfoLog(n)||"").trim();if(i&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const s=parseInt(o[1]);return t.toUpperCase()+`

`+a+`

`+Ih(e.getShaderSource(n),s)}else return a}function Fh(e,n){const t=Nh(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Oh(e,n){let t;switch(n){case Sc:t="Linear";break;case _c:t="Reinhard";break;case vc:t="Cineon";break;case ys:t="ACESFilmic";break;case gc:t="AgX";break;case mc:t="Neutral";break;case pc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),t="Linear"}return"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Si=new ne;function Bh(){vt.getLuminanceCoefficients(Si);const e=Si.x.toFixed(4),n=Si.y.toFixed(4),t=Si.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gh(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kn).join(`
`)}function kh(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function Hh(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=e.getActiveAttrib(n,r),o=a.name;let s=1;a.type===e.FLOAT_MAT2&&(s=2),a.type===e.FLOAT_MAT3&&(s=3),a.type===e.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:e.getAttribLocation(n,o),locationSize:s}}return t}function Kn(e){return e!==""}function yo(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function Po(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const Vh=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xa(e){return e.replace(Vh,Wh)}const zh=new Map;function Wh(e,n){let t=Be[n];if(t===void 0){const i=zh.get(n);if(i!==void 0)t=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return Xa(t)}const Xh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lo(e){return e.replace(Xh,qh)}function qh(e,n,t,i){let r="";for(let a=parseInt(n);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Do(e){let n=`precision ${e.precision} float;
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
#define LOW_PRECISION`),n}function Yh(e){let n="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===gs?n="SHADOWMAP_TYPE_PCF":e.shadowMapType===Cs?n="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Jt&&(n="SHADOWMAP_TYPE_VSM"),n}function Kh(e){let n="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case ai:case Bn:n="ENVMAP_TYPE_CUBE";break;case Yi:n="ENVMAP_TYPE_CUBE_UV";break}return n}function $h(e){let n="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Bn:n="ENVMAP_MODE_REFRACTION";break}return n}function Zh(e){let n="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Rc:n="ENVMAP_BLENDING_MULTIPLY";break;case Ac:n="ENVMAP_BLENDING_MIX";break;case Tc:n="ENVMAP_BLENDING_ADD";break}return n}function jh(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Qh(e,n,t,i){const r=e.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const c=Yh(t),h=Kh(t),d=$h(t),u=Zh(t),g=jh(t),m=Gh(t),M=kh(a),E=r.createProgram();let p,l,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Kn).join(`
`),p.length>0&&(p+=`
`),l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Kn).join(`
`),l.length>0&&(l+=`
`)):(p=[Do(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kn).join(`
`),l=[Do(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cn?"#define TONE_MAPPING":"",t.toneMapping!==cn?Be.tonemapping_pars_fragment:"",t.toneMapping!==cn?Oh("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Fh("linearToOutputTexel",t.outputColorSpace),Bh(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Kn).join(`
`)),o=Xa(o),o=yo(o,t),o=Po(o,t),s=Xa(s),s=yo(s,t),s=Po(s,t),o=Lo(o),s=Lo(s),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,l=["#define varying in",t.glslVersion===so?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===so?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const A=T+p+o,b=T+l+s,C=Ro(r,r.VERTEX_SHADER,A),R=Ro(r,r.FRAGMENT_SHADER,b);r.attachShader(E,C),r.attachShader(E,R),t.index0AttributeName!==void 0?r.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function D(P){if(e.debug.checkShaderErrors){const O=r.getProgramInfoLog(E)||"",W=r.getShaderInfoLog(C)||"",X=r.getShaderInfoLog(R)||"",Z=O.trim(),q=W.trim(),le=X.trim();let V=!0,ve=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(V=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,E,C,R);else{const Re=Co(r,C,"vertex"),we=Co(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+Z+`
`+Re+`
`+we)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(q===""||le==="")&&(ve=!1);ve&&(P.diagnostics={runnable:V,programLog:Z,vertexShader:{log:q,prefix:p},fragmentShader:{log:le,prefix:l}})}r.deleteShader(C),r.deleteShader(R),U=new Ui(r,E),_=Hh(r,E)}let U;this.getUniforms=function(){return U===void 0&&D(this),U};let _;this.getAttributes=function(){return _===void 0&&D(this),_};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(E,Dh)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Uh++,this.cacheKey=n,this.usedTimes=1,this.program=E,this.vertexShader=C,this.fragmentShader=R,this}let Jh=0;class ep{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(n);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new tp(n),t.set(n,i)),i}}class tp{constructor(n){this.id=Jh++,this.code=n,this.usedTimes=0}}function np(e,n,t,i,r,a,o){const s=new hc,c=new ep,h=new Set,d=[],u=r.logarithmicDepthBuffer,g=r.vertexTextures;let m=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(_){return h.add(_),_===0?"uv":`uv${_}`}function p(_,S,P,O,W){const X=O.fog,Z=W.geometry,q=_.isMeshStandardMaterial?O.environment:null,le=(_.isMeshStandardMaterial?t:n).get(_.envMap||q),V=le&&le.mapping===Yi?le.image.height:null,ve=M[_.type];_.precision!==null&&(m=r.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));const Re=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,we=Re!==void 0?Re.length:0;let Ve=0;Z.morphAttributes.position!==void 0&&(Ve=1),Z.morphAttributes.normal!==void 0&&(Ve=2),Z.morphAttributes.color!==void 0&&(Ve=3);let We,je,Xe,B;if(ve){const Ze=Wt[ve];We=Ze.vertexShader,je=Ze.fragmentShader}else We=_.vertexShader,je=_.fragmentShader,c.update(_),Xe=c.getVertexShaderID(_),B=c.getFragmentShaderID(_);const K=e.getRenderTarget(),me=e.state.buffers.depth.getReversed(),De=W.isInstancedMesh===!0,Ce=W.isBatchedMesh===!0,ke=!!_.map,ft=!!_.matcap,w=!!le,it=!!_.aoMap,L=!!_.lightMap,ae=!!_.bumpMap,j=!!_.normalMap,Ue=!!_.displacementMap,ue=!!_.emissiveMap,Me=!!_.metalnessMap,qe=!!_.roughnessMap,Ge=_.anisotropy>0,x=_.clearcoat>0,f=_.dispersion>0,F=_.iridescence>0,z=_.sheen>0,Q=_.transmission>0,G=Ge&&!!_.anisotropyMap,xe=x&&!!_.clearcoatMap,ee=x&&!!_.clearcoatNormalMap,he=x&&!!_.clearcoatRoughnessMap,ge=F&&!!_.iridescenceMap,te=F&&!!_.iridescenceThicknessMap,se=z&&!!_.sheenColorMap,Ee=z&&!!_.sheenRoughnessMap,_e=!!_.specularMap,de=!!_.specularColorMap,Fe=!!_.specularIntensityMap,y=Q&&!!_.transmissionMap,ie=Q&&!!_.thicknessMap,ce=!!_.gradientMap,be=!!_.alphaMap,re=_.alphaTest>0,J=!!_.alphaHash,Ae=!!_.extensions;let Oe=cn;_.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Oe=e.toneMapping);const at={shaderID:ve,shaderType:_.type,shaderName:_.name,vertexShader:We,fragmentShader:je,defines:_.defines,customVertexShaderID:Xe,customFragmentShaderID:B,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,batching:Ce,batchingColor:Ce&&W._colorsTexture!==null,instancing:De,instancingColor:De&&W.instanceColor!==null,instancingMorph:De&&W.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:K===null?e.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:qi,alphaToCoverage:!!_.alphaToCoverage,map:ke,matcap:ft,envMap:w,envMapMode:w&&le.mapping,envMapCubeUVHeight:V,aoMap:it,lightMap:L,bumpMap:ae,normalMap:j,displacementMap:g&&Ue,emissiveMap:ue,normalMapObjectSpace:j&&_.normalMapType===cc,normalMapTangentSpace:j&&_.normalMapType===lc,metalnessMap:Me,roughnessMap:qe,anisotropy:Ge,anisotropyMap:G,clearcoat:x,clearcoatMap:xe,clearcoatNormalMap:ee,clearcoatRoughnessMap:he,dispersion:f,iridescence:F,iridescenceMap:ge,iridescenceThicknessMap:te,sheen:z,sheenColorMap:se,sheenRoughnessMap:Ee,specularMap:_e,specularColorMap:de,specularIntensityMap:Fe,transmission:Q,transmissionMap:y,thicknessMap:ie,gradientMap:ce,opaque:_.transparent===!1&&_.blending===Li&&_.alphaToCoverage===!1,alphaMap:be,alphaTest:re,alphaHash:J,combine:_.combine,mapUv:ke&&E(_.map.channel),aoMapUv:it&&E(_.aoMap.channel),lightMapUv:L&&E(_.lightMap.channel),bumpMapUv:ae&&E(_.bumpMap.channel),normalMapUv:j&&E(_.normalMap.channel),displacementMapUv:Ue&&E(_.displacementMap.channel),emissiveMapUv:ue&&E(_.emissiveMap.channel),metalnessMapUv:Me&&E(_.metalnessMap.channel),roughnessMapUv:qe&&E(_.roughnessMap.channel),anisotropyMapUv:G&&E(_.anisotropyMap.channel),clearcoatMapUv:xe&&E(_.clearcoatMap.channel),clearcoatNormalMapUv:ee&&E(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&E(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&E(_.iridescenceMap.channel),iridescenceThicknessMapUv:te&&E(_.iridescenceThicknessMap.channel),sheenColorMapUv:se&&E(_.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&E(_.sheenRoughnessMap.channel),specularMapUv:_e&&E(_.specularMap.channel),specularColorMapUv:de&&E(_.specularColorMap.channel),specularIntensityMapUv:Fe&&E(_.specularIntensityMap.channel),transmissionMapUv:y&&E(_.transmissionMap.channel),thicknessMapUv:ie&&E(_.thicknessMap.channel),alphaMapUv:be&&E(_.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(j||Ge),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!Z.attributes.uv&&(ke||be),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.flatShading===!0&&_.wireframe===!1,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:me,skinning:W.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Ve,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:e.shadowMap.enabled&&P.length>0,shadowMapType:e.shadowMap.type,toneMapping:Oe,decodeVideoTexture:ke&&_.map.isVideoTexture===!0&&vt.getTransfer(_.map.colorSpace)===ot,decodeVideoTextureEmissive:ue&&_.emissiveMap.isVideoTexture===!0&&vt.getTransfer(_.emissiveMap.colorSpace)===ot,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Nt,flipSided:_.side===yt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ae&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&_.extensions.multiDraw===!0||Ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return at.vertexUv1s=h.has(1),at.vertexUv2s=h.has(2),at.vertexUv3s=h.has(3),h.clear(),at}function l(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)S.push(P),S.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(T(S,_),A(S,_),S.push(e.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function T(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function A(_,S){s.disableAll(),S.supportsVertexTextures&&s.enable(0),S.instancing&&s.enable(1),S.instancingColor&&s.enable(2),S.instancingMorph&&s.enable(3),S.matcap&&s.enable(4),S.envMap&&s.enable(5),S.normalMapObjectSpace&&s.enable(6),S.normalMapTangentSpace&&s.enable(7),S.clearcoat&&s.enable(8),S.iridescence&&s.enable(9),S.alphaTest&&s.enable(10),S.vertexColors&&s.enable(11),S.vertexAlphas&&s.enable(12),S.vertexUv1s&&s.enable(13),S.vertexUv2s&&s.enable(14),S.vertexUv3s&&s.enable(15),S.vertexTangents&&s.enable(16),S.anisotropy&&s.enable(17),S.alphaHash&&s.enable(18),S.batching&&s.enable(19),S.dispersion&&s.enable(20),S.batchingColor&&s.enable(21),S.gradientMap&&s.enable(22),_.push(s.mask),s.disableAll(),S.fog&&s.enable(0),S.useFog&&s.enable(1),S.flatShading&&s.enable(2),S.logarithmicDepthBuffer&&s.enable(3),S.reversedDepthBuffer&&s.enable(4),S.skinning&&s.enable(5),S.morphTargets&&s.enable(6),S.morphNormals&&s.enable(7),S.morphColors&&s.enable(8),S.premultipliedAlpha&&s.enable(9),S.shadowMapEnabled&&s.enable(10),S.doubleSided&&s.enable(11),S.flipSided&&s.enable(12),S.useDepthPacking&&s.enable(13),S.dithering&&s.enable(14),S.transmission&&s.enable(15),S.sheen&&s.enable(16),S.opaque&&s.enable(17),S.pointsUvs&&s.enable(18),S.decodeVideoTexture&&s.enable(19),S.decodeVideoTextureEmissive&&s.enable(20),S.alphaToCoverage&&s.enable(21),_.push(s.mask)}function b(_){const S=M[_.type];let P;if(S){const O=Wt[S];P=sc.clone(O.uniforms)}else P=_.uniforms;return P}function C(_,S){let P;for(let O=0,W=d.length;O<W;O++){const X=d[O];if(X.cacheKey===S){P=X,++P.usedTimes;break}}return P===void 0&&(P=new Qh(e,S,_,a),d.push(P)),P}function R(_){if(--_.usedTimes===0){const S=d.indexOf(_);d[S]=d[d.length-1],d.pop(),_.destroy()}}function D(_){c.remove(_)}function U(){c.dispose()}return{getParameters:p,getProgramCacheKey:l,getUniforms:b,acquireProgram:C,releaseProgram:R,releaseShaderCache:D,programs:d,dispose:U}}function ip(){let e=new WeakMap;function n(o){return e.has(o)}function t(o){let s=e.get(o);return s===void 0&&(s={},e.set(o,s)),s}function i(o){e.delete(o)}function r(o,s,c){e.get(o)[s]=c}function a(){e=new WeakMap}return{has:n,get:t,remove:i,update:r,dispose:a}}function ap(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.z!==n.z?e.z-n.z:e.id-n.id}function Uo(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function Io(){const e=[];let n=0;const t=[],i=[],r=[];function a(){n=0,t.length=0,i.length=0,r.length=0}function o(u,g,m,M,E,p){let l=e[n];return l===void 0?(l={id:u.id,object:u,geometry:g,material:m,groupOrder:M,renderOrder:u.renderOrder,z:E,group:p},e[n]=l):(l.id=u.id,l.object=u,l.geometry=g,l.material=m,l.groupOrder=M,l.renderOrder=u.renderOrder,l.z=E,l.group=p),n++,l}function s(u,g,m,M,E,p){const l=o(u,g,m,M,E,p);m.transmission>0?i.push(l):m.transparent===!0?r.push(l):t.push(l)}function c(u,g,m,M,E,p){const l=o(u,g,m,M,E,p);m.transmission>0?i.unshift(l):m.transparent===!0?r.unshift(l):t.unshift(l)}function h(u,g){t.length>1&&t.sort(u||ap),i.length>1&&i.sort(g||Uo),r.length>1&&r.sort(g||Uo)}function d(){for(let u=n,g=e.length;u<g;u++){const m=e[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:s,unshift:c,finish:d,sort:h}}function rp(){let e=new WeakMap;function n(i,r){const a=e.get(i);let o;return a===void 0?(o=new Io,e.set(i,[o])):r>=a.length?(o=new Io,a.push(o)):o=a[r],o}function t(){e=new WeakMap}return{get:n,dispose:t}}function op(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new ne,color:new $e};break;case"SpotLight":t={position:new ne,direction:new ne,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return e[n.id]=t,t}}}function sp(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let lp=0;function cp(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function dp(e){const n=new op,t=sp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new ne);const r=new ne,a=new Ft,o=new Ft;function s(h){let d=0,u=0,g=0;for(let _=0;_<9;_++)i.probe[_].set(0,0,0);let m=0,M=0,E=0,p=0,l=0,T=0,A=0,b=0,C=0,R=0,D=0;h.sort(cp);for(let _=0,S=h.length;_<S;_++){const P=h[_],O=P.color,W=P.intensity,X=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=O.r*W,u+=O.g*W,g+=O.b*W;else if(P.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(P.sh.coefficients[q],W);D++}else if(P.isDirectionalLight){const q=n.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const le=P.shadow,V=t.get(P);V.shadowIntensity=le.intensity,V.shadowBias=le.bias,V.shadowNormalBias=le.normalBias,V.shadowRadius=le.radius,V.shadowMapSize=le.mapSize,i.directionalShadow[m]=V,i.directionalShadowMap[m]=Z,i.directionalShadowMatrix[m]=P.shadow.matrix,T++}i.directional[m]=q,m++}else if(P.isSpotLight){const q=n.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(O).multiplyScalar(W),q.distance=X,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,i.spot[E]=q;const le=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,le.updateMatrices(P),P.castShadow&&R++),i.spotLightMatrix[E]=le.matrix,P.castShadow){const V=t.get(P);V.shadowIntensity=le.intensity,V.shadowBias=le.bias,V.shadowNormalBias=le.normalBias,V.shadowRadius=le.radius,V.shadowMapSize=le.mapSize,i.spotShadow[E]=V,i.spotShadowMap[E]=Z,b++}E++}else if(P.isRectAreaLight){const q=n.get(P);q.color.copy(O).multiplyScalar(W),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),i.rectArea[p]=q,p++}else if(P.isPointLight){const q=n.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const le=P.shadow,V=t.get(P);V.shadowIntensity=le.intensity,V.shadowBias=le.bias,V.shadowNormalBias=le.normalBias,V.shadowRadius=le.radius,V.shadowMapSize=le.mapSize,V.shadowCameraNear=le.camera.near,V.shadowCameraFar=le.camera.far,i.pointShadow[M]=V,i.pointShadowMap[M]=Z,i.pointShadowMatrix[M]=P.shadow.matrix,A++}i.point[M]=q,M++}else if(P.isHemisphereLight){const q=n.get(P);q.skyColor.copy(P.color).multiplyScalar(W),q.groundColor.copy(P.groundColor).multiplyScalar(W),i.hemi[l]=q,l++}}p>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=g;const U=i.hash;(U.directionalLength!==m||U.pointLength!==M||U.spotLength!==E||U.rectAreaLength!==p||U.hemiLength!==l||U.numDirectionalShadows!==T||U.numPointShadows!==A||U.numSpotShadows!==b||U.numSpotMaps!==C||U.numLightProbes!==D)&&(i.directional.length=m,i.spot.length=E,i.rectArea.length=p,i.point.length=M,i.hemi.length=l,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=b+C-R,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=D,U.directionalLength=m,U.pointLength=M,U.spotLength=E,U.rectAreaLength=p,U.hemiLength=l,U.numDirectionalShadows=T,U.numPointShadows=A,U.numSpotShadows=b,U.numSpotMaps=C,U.numLightProbes=D,i.version=lp++)}function c(h,d){let u=0,g=0,m=0,M=0,E=0;const p=d.matrixWorldInverse;for(let l=0,T=h.length;l<T;l++){const A=h[l];if(A.isDirectionalLight){const b=i.directional[u];b.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),u++}else if(A.isSpotLight){const b=i.spot[m];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),m++}else if(A.isRectAreaLight){const b=i.rectArea[M];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(p),o.identity(),a.copy(A.matrixWorld),a.premultiply(p),o.extractRotation(a),b.halfWidth.set(A.width*.5,0,0),b.halfHeight.set(0,A.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),M++}else if(A.isPointLight){const b=i.point[g];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(p),g++}else if(A.isHemisphereLight){const b=i.hemi[E];b.direction.setFromMatrixPosition(A.matrixWorld),b.direction.transformDirection(p),E++}}}return{setup:s,setupView:c,state:i}}function No(e){const n=new dp(e),t=[],i=[];function r(d){h.camera=d,t.length=0,i.length=0}function a(d){t.push(d)}function o(d){i.push(d)}function s(){n.setup(t)}function c(d){n.setupView(t,d)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function up(e){let n=new WeakMap;function t(r,a=0){const o=n.get(r);let s;return o===void 0?(s=new No(e),n.set(r,[s])):a>=o.length?(s=new No(e),o.push(s)):s=o[a],s}function i(){n=new WeakMap}return{get:t,dispose:i}}const fp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hp=`uniform sampler2D shadow_pass;
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
}`;function pp(e,n,t){let i=new fs;const r=new ut,a=new ut,o=new Rt,s=new ql({depthPacking:Yl}),c=new Kl,h={},d=t.maxTextureSize,u={[ii]:yt,[yt]:ii,[Nt]:Nt},g=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:fp,fragmentShader:hp}),m=g.clone();m.defines.HORIZONTAL_PASS=1;const M=new un;M.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new dt(M,g),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gs;let l=this.type;this.render=function(R,D,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const _=e.getRenderTarget(),S=e.getActiveCubeFace(),P=e.getActiveMipmapLevel(),O=e.state;O.setBlending(An),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const W=l!==Jt&&this.type===Jt,X=l===Jt&&this.type!==Jt;for(let Z=0,q=R.length;Z<q;Z++){const le=R[Z],V=le.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ve=V.getFrameExtents();if(r.multiply(ve),a.copy(V.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/ve.x),r.x=a.x*ve.x,V.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/ve.y),r.y=a.y*ve.y,V.mapSize.y=a.y)),V.map===null||W===!0||X===!0){const we=this.type!==Jt?{minFilter:Qn,magFilter:Qn}:{};V.map!==null&&V.map.dispose(),V.map=new On(r.x,r.y,we),V.map.texture.name=le.name+".shadowMap",V.camera.updateProjectionMatrix()}e.setRenderTarget(V.map),e.clear();const Re=V.getViewportCount();for(let we=0;we<Re;we++){const Ve=V.getViewport(we);o.set(a.x*Ve.x,a.y*Ve.y,a.x*Ve.z,a.y*Ve.w),O.viewport(o),V.updateMatrices(le,we),i=V.getFrustum(),b(D,U,V.camera,le,this.type)}V.isPointLightShadow!==!0&&this.type===Jt&&T(V,U),V.needsUpdate=!1}l=this.type,p.needsUpdate=!1,e.setRenderTarget(_,S,P)};function T(R,D){const U=n.update(E);g.defines.VSM_SAMPLES!==R.blurSamples&&(g.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,g.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new On(r.x,r.y)),g.uniforms.shadow_pass.value=R.map.texture,g.uniforms.resolution.value=R.mapSize,g.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(D,null,U,g,E,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(D,null,U,m,E,null)}function A(R,D,U,_){let S=null;const P=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)S=P;else if(S=U.isPointLight===!0?c:s,e.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const O=S.uuid,W=D.uuid;let X=h[O];X===void 0&&(X={},h[O]=X);let Z=X[W];Z===void 0&&(Z=S.clone(),X[W]=Z,D.addEventListener("dispose",C)),S=Z}if(S.visible=D.visible,S.wireframe=D.wireframe,_===Jt?S.side=D.shadowSide!==null?D.shadowSide:D.side:S.side=D.shadowSide!==null?D.shadowSide:u[D.side],S.alphaMap=D.alphaMap,S.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,S.map=D.map,S.clipShadows=D.clipShadows,S.clippingPlanes=D.clippingPlanes,S.clipIntersection=D.clipIntersection,S.displacementMap=D.displacementMap,S.displacementScale=D.displacementScale,S.displacementBias=D.displacementBias,S.wireframeLinewidth=D.wireframeLinewidth,S.linewidth=D.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=e.properties.get(S);O.light=U}return S}function b(R,D,U,_,S){if(R.visible===!1)return;if(R.layers.test(D.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===Jt)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);const W=n.update(R),X=R.material;if(Array.isArray(X)){const Z=W.groups;for(let q=0,le=Z.length;q<le;q++){const V=Z[q],ve=X[V.materialIndex];if(ve&&ve.visible){const Re=A(R,ve,_,S);R.onBeforeShadow(e,R,D,U,W,Re,V),e.renderBufferDirect(U,null,W,Re,R,V),R.onAfterShadow(e,R,D,U,W,Re,V)}}}else if(X.visible){const Z=A(R,X,_,S);R.onBeforeShadow(e,R,D,U,W,Z,null),e.renderBufferDirect(U,null,W,Z,R,null),R.onAfterShadow(e,R,D,U,W,Z,null)}}const O=R.children;for(let W=0,X=O.length;W<X;W++)b(O[W],D,U,_,S)}function C(R){R.target.removeEventListener("dispose",C);for(const U in h){const _=h[U],S=R.target.uuid;S in _&&(_[S].dispose(),delete _[S])}}}const mp={[Ga]:Ba,[Oa]:Ia,[Fa]:Ua,[ki]:Na,[Ba]:Ga,[Ia]:Oa,[Ua]:Fa,[Na]:ki};function gp(e,n){function t(){let y=!1;const ie=new Rt;let ce=null;const be=new Rt(0,0,0,0);return{setMask:function(re){ce!==re&&!y&&(e.colorMask(re,re,re,re),ce=re)},setLocked:function(re){y=re},setClear:function(re,J,Ae,Oe,at){at===!0&&(re*=Oe,J*=Oe,Ae*=Oe),ie.set(re,J,Ae,Oe),be.equals(ie)===!1&&(e.clearColor(re,J,Ae,Oe),be.copy(ie))},reset:function(){y=!1,ce=null,be.set(-1,0,0,0)}}}function i(){let y=!1,ie=!1,ce=null,be=null,re=null;return{setReversed:function(J){if(ie!==J){const Ae=n.get("EXT_clip_control");J?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),ie=J;const Oe=re;re=null,this.setClear(Oe)}},getReversed:function(){return ie},setTest:function(J){J?K(e.DEPTH_TEST):me(e.DEPTH_TEST)},setMask:function(J){ce!==J&&!y&&(e.depthMask(J),ce=J)},setFunc:function(J){if(ie&&(J=mp[J]),be!==J){switch(J){case Ga:e.depthFunc(e.NEVER);break;case Ba:e.depthFunc(e.ALWAYS);break;case Oa:e.depthFunc(e.LESS);break;case ki:e.depthFunc(e.LEQUAL);break;case Fa:e.depthFunc(e.EQUAL);break;case Na:e.depthFunc(e.GEQUAL);break;case Ia:e.depthFunc(e.GREATER);break;case Ua:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}be=J}},setLocked:function(J){y=J},setClear:function(J){re!==J&&(ie&&(J=1-J),e.clearDepth(J),re=J)},reset:function(){y=!1,ce=null,be=null,re=null,ie=!1}}}function r(){let y=!1,ie=null,ce=null,be=null,re=null,J=null,Ae=null,Oe=null,at=null;return{setTest:function(Ze){y||(Ze?K(e.STENCIL_TEST):me(e.STENCIL_TEST))},setMask:function(Ze){ie!==Ze&&!y&&(e.stencilMask(Ze),ie=Ze)},setFunc:function(Ze,Qt,zt){(ce!==Ze||be!==Qt||re!==zt)&&(e.stencilFunc(Ze,Qt,zt),ce=Ze,be=Qt,re=zt)},setOp:function(Ze,Qt,zt){(J!==Ze||Ae!==Qt||Oe!==zt)&&(e.stencilOp(Ze,Qt,zt),J=Ze,Ae=Qt,Oe=zt)},setLocked:function(Ze){y=Ze},setClear:function(Ze){at!==Ze&&(e.clearStencil(Ze),at=Ze)},reset:function(){y=!1,ie=null,ce=null,be=null,re=null,J=null,Ae=null,Oe=null,at=null}}}const a=new t,o=new i,s=new r,c=new WeakMap,h=new WeakMap;let d={},u={},g=new WeakMap,m=[],M=null,E=!1,p=null,l=null,T=null,A=null,b=null,C=null,R=null,D=new $e(0,0,0),U=0,_=!1,S=null,P=null,O=null,W=null,X=null;const Z=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,le=0;const V=e.getParameter(e.VERSION);V.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=le>=1):V.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=le>=2);let ve=null,Re={};const we=e.getParameter(e.SCISSOR_BOX),Ve=e.getParameter(e.VIEWPORT),We=new Rt().fromArray(we),je=new Rt().fromArray(Ve);function Xe(y,ie,ce,be){const re=new Uint8Array(4),J=e.createTexture();e.bindTexture(y,J),e.texParameteri(y,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(y,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ae=0;Ae<ce;Ae++)y===e.TEXTURE_3D||y===e.TEXTURE_2D_ARRAY?e.texImage3D(ie,0,e.RGBA,1,1,be,0,e.RGBA,e.UNSIGNED_BYTE,re):e.texImage2D(ie+Ae,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,re);return J}const B={};B[e.TEXTURE_2D]=Xe(e.TEXTURE_2D,e.TEXTURE_2D,1),B[e.TEXTURE_CUBE_MAP]=Xe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[e.TEXTURE_2D_ARRAY]=Xe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),B[e.TEXTURE_3D]=Xe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),K(e.DEPTH_TEST),o.setFunc(ki),ae(!1),j(to),K(e.CULL_FACE),it(An);function K(y){d[y]!==!0&&(e.enable(y),d[y]=!0)}function me(y){d[y]!==!1&&(e.disable(y),d[y]=!1)}function De(y,ie){return u[y]!==ie?(e.bindFramebuffer(y,ie),u[y]=ie,y===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=ie),y===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ce(y,ie){let ce=m,be=!1;if(y){ce=g.get(ie),ce===void 0&&(ce=[],g.set(ie,ce));const re=y.textures;if(ce.length!==re.length||ce[0]!==e.COLOR_ATTACHMENT0){for(let J=0,Ae=re.length;J<Ae;J++)ce[J]=e.COLOR_ATTACHMENT0+J;ce.length=re.length,be=!0}}else ce[0]!==e.BACK&&(ce[0]=e.BACK,be=!0);be&&e.drawBuffers(ce)}function ke(y){return M!==y?(e.useProgram(y),M=y,!0):!1}const ft={[Xn]:e.FUNC_ADD,[Sl]:e.FUNC_SUBTRACT,[_l]:e.FUNC_REVERSE_SUBTRACT};ft[wc]=e.MIN,ft[Cc]=e.MAX;const w={[Il]:e.ZERO,[Ul]:e.ONE,[Dl]:e.SRC_COLOR,[Ll]:e.SRC_ALPHA,[Pl]:e.SRC_ALPHA_SATURATE,[yl]:e.DST_COLOR,[Cl]:e.DST_ALPHA,[wl]:e.ONE_MINUS_SRC_COLOR,[Rl]:e.ONE_MINUS_SRC_ALPHA,[Al]:e.ONE_MINUS_DST_COLOR,[Tl]:e.ONE_MINUS_DST_ALPHA,[bl]:e.CONSTANT_COLOR,[xl]:e.ONE_MINUS_CONSTANT_COLOR,[El]:e.CONSTANT_ALPHA,[Ml]:e.ONE_MINUS_CONSTANT_ALPHA};function it(y,ie,ce,be,re,J,Ae,Oe,at,Ze){if(y===An){E===!0&&(me(e.BLEND),E=!1);return}if(E===!1&&(K(e.BLEND),E=!0),y!==rc){if(y!==p||Ze!==_){if((l!==Xn||b!==Xn)&&(e.blendEquation(e.FUNC_ADD),l=Xn,b=Xn),Ze)switch(y){case Li:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ao:e.blendFunc(e.ONE,e.ONE);break;case io:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case no:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}else switch(y){case Li:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ao:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case io:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case no:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}T=null,A=null,C=null,R=null,D.set(0,0,0),U=0,p=y,_=Ze}return}re=re||ie,J=J||ce,Ae=Ae||be,(ie!==l||re!==b)&&(e.blendEquationSeparate(ft[ie],ft[re]),l=ie,b=re),(ce!==T||be!==A||J!==C||Ae!==R)&&(e.blendFuncSeparate(w[ce],w[be],w[J],w[Ae]),T=ce,A=be,C=J,R=Ae),(Oe.equals(D)===!1||at!==U)&&(e.blendColor(Oe.r,Oe.g,Oe.b,at),D.copy(Oe),U=at),p=y,_=!1}function L(y,ie){y.side===Nt?me(e.CULL_FACE):K(e.CULL_FACE);let ce=y.side===yt;ie&&(ce=!ce),ae(ce),y.blending===Li&&y.transparent===!1?it(An):it(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),o.setFunc(y.depthFunc),o.setTest(y.depthTest),o.setMask(y.depthWrite),a.setMask(y.colorWrite);const be=y.stencilWrite;s.setTest(be),be&&(s.setMask(y.stencilWriteMask),s.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),s.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),ue(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?K(e.SAMPLE_ALPHA_TO_COVERAGE):me(e.SAMPLE_ALPHA_TO_COVERAGE)}function ae(y){S!==y&&(y?e.frontFace(e.CW):e.frontFace(e.CCW),S=y)}function j(y){y!==ic?(K(e.CULL_FACE),y!==P&&(y===to?e.cullFace(e.BACK):y===ac?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):me(e.CULL_FACE),P=y}function Ue(y){y!==O&&(q&&e.lineWidth(y),O=y)}function ue(y,ie,ce){y?(K(e.POLYGON_OFFSET_FILL),(W!==ie||X!==ce)&&(e.polygonOffset(ie,ce),W=ie,X=ce)):me(e.POLYGON_OFFSET_FILL)}function Me(y){y?K(e.SCISSOR_TEST):me(e.SCISSOR_TEST)}function qe(y){y===void 0&&(y=e.TEXTURE0+Z-1),ve!==y&&(e.activeTexture(y),ve=y)}function Ge(y,ie,ce){ce===void 0&&(ve===null?ce=e.TEXTURE0+Z-1:ce=ve);let be=Re[ce];be===void 0&&(be={type:void 0,texture:void 0},Re[ce]=be),(be.type!==y||be.texture!==ie)&&(ve!==ce&&(e.activeTexture(ce),ve=ce),e.bindTexture(y,ie||B[y]),be.type=y,be.texture=ie)}function x(){const y=Re[ve];y!==void 0&&y.type!==void 0&&(e.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)}function f(){try{e.compressedTexImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function F(){try{e.compressedTexImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function z(){try{e.texSubImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Q(){try{e.texSubImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function G(){try{e.compressedTexSubImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function xe(){try{e.compressedTexSubImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ee(){try{e.texStorage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function he(){try{e.texStorage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ge(){try{e.texImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function te(){try{e.texImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function se(y){We.equals(y)===!1&&(e.scissor(y.x,y.y,y.z,y.w),We.copy(y))}function Ee(y){je.equals(y)===!1&&(e.viewport(y.x,y.y,y.z,y.w),je.copy(y))}function _e(y,ie){let ce=h.get(ie);ce===void 0&&(ce=new WeakMap,h.set(ie,ce));let be=ce.get(y);be===void 0&&(be=e.getUniformBlockIndex(ie,y.name),ce.set(y,be))}function de(y,ie){const be=h.get(ie).get(y);c.get(ie)!==be&&(e.uniformBlockBinding(ie,be,y.__bindingPointIndex),c.set(ie,be))}function Fe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),d={},ve=null,Re={},u={},g=new WeakMap,m=[],M=null,E=!1,p=null,l=null,T=null,A=null,b=null,C=null,R=null,D=new $e(0,0,0),U=0,_=!1,S=null,P=null,O=null,W=null,X=null,We.set(0,0,e.canvas.width,e.canvas.height),je.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:K,disable:me,bindFramebuffer:De,drawBuffers:Ce,useProgram:ke,setBlending:it,setMaterial:L,setFlipSided:ae,setCullFace:j,setLineWidth:Ue,setPolygonOffset:ue,setScissorTest:Me,activeTexture:qe,bindTexture:Ge,unbindTexture:x,compressedTexImage2D:f,compressedTexImage3D:F,texImage2D:ge,texImage3D:te,updateUBOMapping:_e,uniformBlockBinding:de,texStorage2D:ee,texStorage3D:he,texSubImage2D:z,texSubImage3D:Q,compressedTexSubImage2D:G,compressedTexSubImage3D:xe,scissor:se,viewport:Ee,reset:Fe}}function vp(e,n,t,i,r,a,o){const s=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ut,d=new WeakMap;let u;const g=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(x,f){return m?new OffscreenCanvas(x,f):bc("canvas")}function E(x,f,F){let z=1;const Q=Ge(x);if((Q.width>F||Q.height>F)&&(z=F/Math.max(Q.width,Q.height)),z<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const G=Math.floor(z*Q.width),xe=Math.floor(z*Q.height);u===void 0&&(u=M(G,xe));const ee=f?M(G,xe):u;return ee.width=G,ee.height=xe,ee.getContext("2d").drawImage(x,0,0,G,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+G+"x"+xe+")."),ee}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),x;return x}function p(x){return x.generateMipmaps}function l(x){e.generateMipmap(x)}function T(x){return x.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?e.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function A(x,f,F,z,Q=!1){if(x!==null){if(e[x]!==void 0)return e[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let G=f;if(f===e.RED&&(F===e.FLOAT&&(G=e.R32F),F===e.HALF_FLOAT&&(G=e.R16F),F===e.UNSIGNED_BYTE&&(G=e.R8)),f===e.RED_INTEGER&&(F===e.UNSIGNED_BYTE&&(G=e.R8UI),F===e.UNSIGNED_SHORT&&(G=e.R16UI),F===e.UNSIGNED_INT&&(G=e.R32UI),F===e.BYTE&&(G=e.R8I),F===e.SHORT&&(G=e.R16I),F===e.INT&&(G=e.R32I)),f===e.RG&&(F===e.FLOAT&&(G=e.RG32F),F===e.HALF_FLOAT&&(G=e.RG16F),F===e.UNSIGNED_BYTE&&(G=e.RG8)),f===e.RG_INTEGER&&(F===e.UNSIGNED_BYTE&&(G=e.RG8UI),F===e.UNSIGNED_SHORT&&(G=e.RG16UI),F===e.UNSIGNED_INT&&(G=e.RG32UI),F===e.BYTE&&(G=e.RG8I),F===e.SHORT&&(G=e.RG16I),F===e.INT&&(G=e.RG32I)),f===e.RGB_INTEGER&&(F===e.UNSIGNED_BYTE&&(G=e.RGB8UI),F===e.UNSIGNED_SHORT&&(G=e.RGB16UI),F===e.UNSIGNED_INT&&(G=e.RGB32UI),F===e.BYTE&&(G=e.RGB8I),F===e.SHORT&&(G=e.RGB16I),F===e.INT&&(G=e.RGB32I)),f===e.RGBA_INTEGER&&(F===e.UNSIGNED_BYTE&&(G=e.RGBA8UI),F===e.UNSIGNED_SHORT&&(G=e.RGBA16UI),F===e.UNSIGNED_INT&&(G=e.RGBA32UI),F===e.BYTE&&(G=e.RGBA8I),F===e.SHORT&&(G=e.RGBA16I),F===e.INT&&(G=e.RGBA32I)),f===e.RGB&&(F===e.UNSIGNED_INT_5_9_9_9_REV&&(G=e.RGB9_E5),F===e.UNSIGNED_INT_10F_11F_11F_REV&&(G=e.R11F_G11F_B10F)),f===e.RGBA){const xe=Q?ws:vt.getTransfer(z);F===e.FLOAT&&(G=e.RGBA32F),F===e.HALF_FLOAT&&(G=e.RGBA16F),F===e.UNSIGNED_BYTE&&(G=xe===ot?e.SRGB8_ALPHA8:e.RGBA8),F===e.UNSIGNED_SHORT_4_4_4_4&&(G=e.RGBA4),F===e.UNSIGNED_SHORT_5_5_5_1&&(G=e.RGB5_A1)}return(G===e.R16F||G===e.R32F||G===e.RG16F||G===e.RG32F||G===e.RGBA16F||G===e.RGBA32F)&&n.get("EXT_color_buffer_float"),G}function b(x,f){let F;return x?f===null||f===oi||f===ri?F=e.DEPTH24_STENCIL8:f===Tn?F=e.DEPTH32F_STENCIL8:f===Hi&&(F=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):f===null||f===oi||f===ri?F=e.DEPTH_COMPONENT24:f===Tn?F=e.DEPTH_COMPONENT32F:f===Hi&&(F=e.DEPTH_COMPONENT16),F}function C(x,f){return p(x)===!0||x.isFramebufferTexture&&x.minFilter!==Qn&&x.minFilter!==bn?Math.log2(Math.max(f.width,f.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?f.mipmaps.length:1}function R(x){const f=x.target;f.removeEventListener("dispose",R),U(f),f.isVideoTexture&&d.delete(f)}function D(x){const f=x.target;f.removeEventListener("dispose",D),S(f)}function U(x){const f=i.get(x);if(f.__webglInit===void 0)return;const F=x.source,z=g.get(F);if(z){const Q=z[f.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&_(x),Object.keys(z).length===0&&g.delete(F)}i.remove(x)}function _(x){const f=i.get(x);e.deleteTexture(f.__webglTexture);const F=x.source,z=g.get(F);delete z[f.__cacheKey],o.memory.textures--}function S(x){const f=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(f.__webglFramebuffer[z]))for(let Q=0;Q<f.__webglFramebuffer[z].length;Q++)e.deleteFramebuffer(f.__webglFramebuffer[z][Q]);else e.deleteFramebuffer(f.__webglFramebuffer[z]);f.__webglDepthbuffer&&e.deleteRenderbuffer(f.__webglDepthbuffer[z])}else{if(Array.isArray(f.__webglFramebuffer))for(let z=0;z<f.__webglFramebuffer.length;z++)e.deleteFramebuffer(f.__webglFramebuffer[z]);else e.deleteFramebuffer(f.__webglFramebuffer);if(f.__webglDepthbuffer&&e.deleteRenderbuffer(f.__webglDepthbuffer),f.__webglMultisampledFramebuffer&&e.deleteFramebuffer(f.__webglMultisampledFramebuffer),f.__webglColorRenderbuffer)for(let z=0;z<f.__webglColorRenderbuffer.length;z++)f.__webglColorRenderbuffer[z]&&e.deleteRenderbuffer(f.__webglColorRenderbuffer[z]);f.__webglDepthRenderbuffer&&e.deleteRenderbuffer(f.__webglDepthRenderbuffer)}const F=x.textures;for(let z=0,Q=F.length;z<Q;z++){const G=i.get(F[z]);G.__webglTexture&&(e.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(F[z])}i.remove(x)}let P=0;function O(){P=0}function W(){const x=P;return x>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+r.maxTextures),P+=1,x}function X(x){const f=[];return f.push(x.wrapS),f.push(x.wrapT),f.push(x.wrapR||0),f.push(x.magFilter),f.push(x.minFilter),f.push(x.anisotropy),f.push(x.internalFormat),f.push(x.format),f.push(x.type),f.push(x.generateMipmaps),f.push(x.premultiplyAlpha),f.push(x.flipY),f.push(x.unpackAlignment),f.push(x.colorSpace),f.join()}function Z(x,f){const F=i.get(x);if(x.isVideoTexture&&Me(x),x.isRenderTargetTexture===!1&&x.isExternalTexture!==!0&&x.version>0&&F.__version!==x.version){const z=x.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(F,x,f);return}}else x.isExternalTexture&&(F.__webglTexture=x.sourceTexture?x.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,F.__webglTexture,e.TEXTURE0+f)}function q(x,f){const F=i.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&F.__version!==x.version){B(F,x,f);return}t.bindTexture(e.TEXTURE_2D_ARRAY,F.__webglTexture,e.TEXTURE0+f)}function le(x,f){const F=i.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&F.__version!==x.version){B(F,x,f);return}t.bindTexture(e.TEXTURE_3D,F.__webglTexture,e.TEXTURE0+f)}function V(x,f){const F=i.get(x);if(x.version>0&&F.__version!==x.version){K(F,x,f);return}t.bindTexture(e.TEXTURE_CUBE_MAP,F.__webglTexture,e.TEXTURE0+f)}const ve={[ps]:e.REPEAT,[Fl]:e.CLAMP_TO_EDGE,[Nl]:e.MIRRORED_REPEAT},Re={[Qn]:e.NEAREST,[Ol]:e.NEAREST_MIPMAP_NEAREST,[mi]:e.NEAREST_MIPMAP_LINEAR,[bn]:e.LINEAR,[aa]:e.LINEAR_MIPMAP_NEAREST,[xn]:e.LINEAR_MIPMAP_LINEAR},we={[Wl]:e.NEVER,[zl]:e.ALWAYS,[Vl]:e.LESS,[ms]:e.LEQUAL,[Hl]:e.EQUAL,[kl]:e.GEQUAL,[Gl]:e.GREATER,[Bl]:e.NOTEQUAL};function Ve(x,f){if(f.type===Tn&&n.has("OES_texture_float_linear")===!1&&(f.magFilter===bn||f.magFilter===aa||f.magFilter===mi||f.magFilter===xn||f.minFilter===bn||f.minFilter===aa||f.minFilter===mi||f.minFilter===xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(x,e.TEXTURE_WRAP_S,ve[f.wrapS]),e.texParameteri(x,e.TEXTURE_WRAP_T,ve[f.wrapT]),(x===e.TEXTURE_3D||x===e.TEXTURE_2D_ARRAY)&&e.texParameteri(x,e.TEXTURE_WRAP_R,ve[f.wrapR]),e.texParameteri(x,e.TEXTURE_MAG_FILTER,Re[f.magFilter]),e.texParameteri(x,e.TEXTURE_MIN_FILTER,Re[f.minFilter]),f.compareFunction&&(e.texParameteri(x,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(x,e.TEXTURE_COMPARE_FUNC,we[f.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(f.magFilter===Qn||f.minFilter!==mi&&f.minFilter!==xn||f.type===Tn&&n.has("OES_texture_float_linear")===!1)return;if(f.anisotropy>1||i.get(f).__currentAnisotropy){const F=n.get("EXT_texture_filter_anisotropic");e.texParameterf(x,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(f.anisotropy,r.getMaxAnisotropy())),i.get(f).__currentAnisotropy=f.anisotropy}}}function We(x,f){let F=!1;x.__webglInit===void 0&&(x.__webglInit=!0,f.addEventListener("dispose",R));const z=f.source;let Q=g.get(z);Q===void 0&&(Q={},g.set(z,Q));const G=X(f);if(G!==x.__cacheKey){Q[G]===void 0&&(Q[G]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Q[G].usedTimes++;const xe=Q[x.__cacheKey];xe!==void 0&&(Q[x.__cacheKey].usedTimes--,xe.usedTimes===0&&_(f)),x.__cacheKey=G,x.__webglTexture=Q[G].texture}return F}function je(x,f,F){return Math.floor(Math.floor(x/F)/f)}function Xe(x,f,F,z){const G=x.updateRanges;if(G.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,f.width,f.height,F,z,f.data);else{G.sort((te,se)=>te.start-se.start);let xe=0;for(let te=1;te<G.length;te++){const se=G[xe],Ee=G[te],_e=se.start+se.count,de=je(Ee.start,f.width,4),Fe=je(se.start,f.width,4);Ee.start<=_e+1&&de===Fe&&je(Ee.start+Ee.count-1,f.width,4)===de?se.count=Math.max(se.count,Ee.start+Ee.count-se.start):(++xe,G[xe]=Ee)}G.length=xe+1;const ee=e.getParameter(e.UNPACK_ROW_LENGTH),he=e.getParameter(e.UNPACK_SKIP_PIXELS),ge=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,f.width);for(let te=0,se=G.length;te<se;te++){const Ee=G[te],_e=Math.floor(Ee.start/4),de=Math.ceil(Ee.count/4),Fe=_e%f.width,y=Math.floor(_e/f.width),ie=de,ce=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Fe),e.pixelStorei(e.UNPACK_SKIP_ROWS,y),t.texSubImage2D(e.TEXTURE_2D,0,Fe,y,ie,ce,F,z,f.data)}x.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ee),e.pixelStorei(e.UNPACK_SKIP_PIXELS,he),e.pixelStorei(e.UNPACK_SKIP_ROWS,ge)}}function B(x,f,F){let z=e.TEXTURE_2D;(f.isDataArrayTexture||f.isCompressedArrayTexture)&&(z=e.TEXTURE_2D_ARRAY),f.isData3DTexture&&(z=e.TEXTURE_3D);const Q=We(x,f),G=f.source;t.bindTexture(z,x.__webglTexture,e.TEXTURE0+F);const xe=i.get(G);if(G.version!==xe.__version||Q===!0){t.activeTexture(e.TEXTURE0+F);const ee=vt.getPrimaries(vt.workingColorSpace),he=f.colorSpace===Un?null:vt.getPrimaries(f.colorSpace),ge=f.colorSpace===Un||ee===he?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,f.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,f.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let te=E(f.image,!1,r.maxTextureSize);te=qe(f,te);const se=a.convert(f.format,f.colorSpace),Ee=a.convert(f.type);let _e=A(f.internalFormat,se,Ee,f.colorSpace,f.isVideoTexture);Ve(z,f);let de;const Fe=f.mipmaps,y=f.isVideoTexture!==!0,ie=xe.__version===void 0||Q===!0,ce=G.dataReady,be=C(f,te);if(f.isDepthTexture)_e=b(f.format===Gi,f.type),ie&&(y?t.texStorage2D(e.TEXTURE_2D,1,_e,te.width,te.height):t.texImage2D(e.TEXTURE_2D,0,_e,te.width,te.height,0,se,Ee,null));else if(f.isDataTexture)if(Fe.length>0){y&&ie&&t.texStorage2D(e.TEXTURE_2D,be,_e,Fe[0].width,Fe[0].height);for(let re=0,J=Fe.length;re<J;re++)de=Fe[re],y?ce&&t.texSubImage2D(e.TEXTURE_2D,re,0,0,de.width,de.height,se,Ee,de.data):t.texImage2D(e.TEXTURE_2D,re,_e,de.width,de.height,0,se,Ee,de.data);f.generateMipmaps=!1}else y?(ie&&t.texStorage2D(e.TEXTURE_2D,be,_e,te.width,te.height),ce&&Xe(f,te,se,Ee)):t.texImage2D(e.TEXTURE_2D,0,_e,te.width,te.height,0,se,Ee,te.data);else if(f.isCompressedTexture)if(f.isCompressedArrayTexture){y&&ie&&t.texStorage3D(e.TEXTURE_2D_ARRAY,be,_e,Fe[0].width,Fe[0].height,te.depth);for(let re=0,J=Fe.length;re<J;re++)if(de=Fe[re],f.format!==qt)if(se!==null)if(y){if(ce)if(f.layerUpdates.size>0){const Ae=oo(de.width,de.height,f.format,f.type);for(const Oe of f.layerUpdates){const at=de.data.subarray(Oe*Ae/de.data.BYTES_PER_ELEMENT,(Oe+1)*Ae/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,re,0,0,Oe,de.width,de.height,1,se,at)}f.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,re,0,0,0,de.width,de.height,te.depth,se,de.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,re,_e,de.width,de.height,te.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else y?ce&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,re,0,0,0,de.width,de.height,te.depth,se,Ee,de.data):t.texImage3D(e.TEXTURE_2D_ARRAY,re,_e,de.width,de.height,te.depth,0,se,Ee,de.data)}else{y&&ie&&t.texStorage2D(e.TEXTURE_2D,be,_e,Fe[0].width,Fe[0].height);for(let re=0,J=Fe.length;re<J;re++)de=Fe[re],f.format!==qt?se!==null?y?ce&&t.compressedTexSubImage2D(e.TEXTURE_2D,re,0,0,de.width,de.height,se,de.data):t.compressedTexImage2D(e.TEXTURE_2D,re,_e,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):y?ce&&t.texSubImage2D(e.TEXTURE_2D,re,0,0,de.width,de.height,se,Ee,de.data):t.texImage2D(e.TEXTURE_2D,re,_e,de.width,de.height,0,se,Ee,de.data)}else if(f.isDataArrayTexture)if(y){if(ie&&t.texStorage3D(e.TEXTURE_2D_ARRAY,be,_e,te.width,te.height,te.depth),ce)if(f.layerUpdates.size>0){const re=oo(te.width,te.height,f.format,f.type);for(const J of f.layerUpdates){const Ae=te.data.subarray(J*re/te.data.BYTES_PER_ELEMENT,(J+1)*re/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,J,te.width,te.height,1,se,Ee,Ae)}f.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,se,Ee,te.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,_e,te.width,te.height,te.depth,0,se,Ee,te.data);else if(f.isData3DTexture)y?(ie&&t.texStorage3D(e.TEXTURE_3D,be,_e,te.width,te.height,te.depth),ce&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,se,Ee,te.data)):t.texImage3D(e.TEXTURE_3D,0,_e,te.width,te.height,te.depth,0,se,Ee,te.data);else if(f.isFramebufferTexture){if(ie)if(y)t.texStorage2D(e.TEXTURE_2D,be,_e,te.width,te.height);else{let re=te.width,J=te.height;for(let Ae=0;Ae<be;Ae++)t.texImage2D(e.TEXTURE_2D,Ae,_e,re,J,0,se,Ee,null),re>>=1,J>>=1}}else if(Fe.length>0){if(y&&ie){const re=Ge(Fe[0]);t.texStorage2D(e.TEXTURE_2D,be,_e,re.width,re.height)}for(let re=0,J=Fe.length;re<J;re++)de=Fe[re],y?ce&&t.texSubImage2D(e.TEXTURE_2D,re,0,0,se,Ee,de):t.texImage2D(e.TEXTURE_2D,re,_e,se,Ee,de);f.generateMipmaps=!1}else if(y){if(ie){const re=Ge(te);t.texStorage2D(e.TEXTURE_2D,be,_e,re.width,re.height)}ce&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,se,Ee,te)}else t.texImage2D(e.TEXTURE_2D,0,_e,se,Ee,te);p(f)&&l(z),xe.__version=G.version,f.onUpdate&&f.onUpdate(f)}x.__version=f.version}function K(x,f,F){if(f.image.length!==6)return;const z=We(x,f),Q=f.source;t.bindTexture(e.TEXTURE_CUBE_MAP,x.__webglTexture,e.TEXTURE0+F);const G=i.get(Q);if(Q.version!==G.__version||z===!0){t.activeTexture(e.TEXTURE0+F);const xe=vt.getPrimaries(vt.workingColorSpace),ee=f.colorSpace===Un?null:vt.getPrimaries(f.colorSpace),he=f.colorSpace===Un||xe===ee?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,f.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,f.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const ge=f.isCompressedTexture||f.image[0].isCompressedTexture,te=f.image[0]&&f.image[0].isDataTexture,se=[];for(let J=0;J<6;J++)!ge&&!te?se[J]=E(f.image[J],!0,r.maxCubemapSize):se[J]=te?f.image[J].image:f.image[J],se[J]=qe(f,se[J]);const Ee=se[0],_e=a.convert(f.format,f.colorSpace),de=a.convert(f.type),Fe=A(f.internalFormat,_e,de,f.colorSpace),y=f.isVideoTexture!==!0,ie=G.__version===void 0||z===!0,ce=Q.dataReady;let be=C(f,Ee);Ve(e.TEXTURE_CUBE_MAP,f);let re;if(ge){y&&ie&&t.texStorage2D(e.TEXTURE_CUBE_MAP,be,Fe,Ee.width,Ee.height);for(let J=0;J<6;J++){re=se[J].mipmaps;for(let Ae=0;Ae<re.length;Ae++){const Oe=re[Ae];f.format!==qt?_e!==null?y?ce&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae,0,0,Oe.width,Oe.height,_e,Oe.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae,Fe,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):y?ce&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae,0,0,Oe.width,Oe.height,_e,de,Oe.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae,Fe,Oe.width,Oe.height,0,_e,de,Oe.data)}}}else{if(re=f.mipmaps,y&&ie){re.length>0&&be++;const J=Ge(se[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,be,Fe,J.width,J.height)}for(let J=0;J<6;J++)if(te){y?ce&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,se[J].width,se[J].height,_e,de,se[J].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Fe,se[J].width,se[J].height,0,_e,de,se[J].data);for(let Ae=0;Ae<re.length;Ae++){const at=re[Ae].image[J].image;y?ce&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae+1,0,0,at.width,at.height,_e,de,at.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae+1,Fe,at.width,at.height,0,_e,de,at.data)}}else{y?ce&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,_e,de,se[J]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Fe,_e,de,se[J]);for(let Ae=0;Ae<re.length;Ae++){const Oe=re[Ae];y?ce&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae+1,0,0,_e,de,Oe.image[J]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae+1,Fe,_e,de,Oe.image[J])}}}p(f)&&l(e.TEXTURE_CUBE_MAP),G.__version=Q.version,f.onUpdate&&f.onUpdate(f)}x.__version=f.version}function me(x,f,F,z,Q,G){const xe=a.convert(F.format,F.colorSpace),ee=a.convert(F.type),he=A(F.internalFormat,xe,ee,F.colorSpace),ge=i.get(f),te=i.get(F);if(te.__renderTarget=f,!ge.__hasExternalTextures){const se=Math.max(1,f.width>>G),Ee=Math.max(1,f.height>>G);Q===e.TEXTURE_3D||Q===e.TEXTURE_2D_ARRAY?t.texImage3D(Q,G,he,se,Ee,f.depth,0,xe,ee,null):t.texImage2D(Q,G,he,se,Ee,0,xe,ee,null)}t.bindFramebuffer(e.FRAMEBUFFER,x),ue(f)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,z,Q,te.__webglTexture,0,Ue(f)):(Q===e.TEXTURE_2D||Q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,z,Q,te.__webglTexture,G),t.bindFramebuffer(e.FRAMEBUFFER,null)}function De(x,f,F){if(e.bindRenderbuffer(e.RENDERBUFFER,x),f.depthBuffer){const z=f.depthTexture,Q=z&&z.isDepthTexture?z.type:null,G=b(f.stencilBuffer,Q),xe=f.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ee=Ue(f);ue(f)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ee,G,f.width,f.height):F?e.renderbufferStorageMultisample(e.RENDERBUFFER,ee,G,f.width,f.height):e.renderbufferStorage(e.RENDERBUFFER,G,f.width,f.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,xe,e.RENDERBUFFER,x)}else{const z=f.textures;for(let Q=0;Q<z.length;Q++){const G=z[Q],xe=a.convert(G.format,G.colorSpace),ee=a.convert(G.type),he=A(G.internalFormat,xe,ee,G.colorSpace),ge=Ue(f);F&&ue(f)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,ge,he,f.width,f.height):ue(f)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ge,he,f.width,f.height):e.renderbufferStorage(e.RENDERBUFFER,he,f.width,f.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ce(x,f){if(f&&f.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(e.FRAMEBUFFER,x),!(f.depthTexture&&f.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const z=i.get(f.depthTexture);z.__renderTarget=f,(!z.__webglTexture||f.depthTexture.image.width!==f.width||f.depthTexture.image.height!==f.height)&&(f.depthTexture.image.width=f.width,f.depthTexture.image.height=f.height,f.depthTexture.needsUpdate=!0),Z(f.depthTexture,0);const Q=z.__webglTexture,G=Ue(f);if(f.depthTexture.format===ir)ue(f)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Q,0,G):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Q,0);else if(f.depthTexture.format===Gi)ue(f)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Q,0,G):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ke(x){const f=i.get(x),F=x.isWebGLCubeRenderTarget===!0;if(f.__boundDepthTexture!==x.depthTexture){const z=x.depthTexture;if(f.__depthDisposeCallback&&f.__depthDisposeCallback(),z){const Q=()=>{delete f.__boundDepthTexture,delete f.__depthDisposeCallback,z.removeEventListener("dispose",Q)};z.addEventListener("dispose",Q),f.__depthDisposeCallback=Q}f.__boundDepthTexture=z}if(x.depthTexture&&!f.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const z=x.texture.mipmaps;z&&z.length>0?Ce(f.__webglFramebuffer[0],x):Ce(f.__webglFramebuffer,x)}else if(F){f.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(e.FRAMEBUFFER,f.__webglFramebuffer[z]),f.__webglDepthbuffer[z]===void 0)f.__webglDepthbuffer[z]=e.createRenderbuffer(),De(f.__webglDepthbuffer[z],x,!1);else{const Q=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,G=f.__webglDepthbuffer[z];e.bindRenderbuffer(e.RENDERBUFFER,G),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,G)}}else{const z=x.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(e.FRAMEBUFFER,f.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,f.__webglFramebuffer),f.__webglDepthbuffer===void 0)f.__webglDepthbuffer=e.createRenderbuffer(),De(f.__webglDepthbuffer,x,!1);else{const Q=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,G=f.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,G),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,G)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function ft(x,f,F){const z=i.get(x);f!==void 0&&me(z.__webglFramebuffer,x,x.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),F!==void 0&&ke(x)}function w(x){const f=x.texture,F=i.get(x),z=i.get(f);x.addEventListener("dispose",D);const Q=x.textures,G=x.isWebGLCubeRenderTarget===!0,xe=Q.length>1;if(xe||(z.__webglTexture===void 0&&(z.__webglTexture=e.createTexture()),z.__version=f.version,o.memory.textures++),G){F.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(f.mipmaps&&f.mipmaps.length>0){F.__webglFramebuffer[ee]=[];for(let he=0;he<f.mipmaps.length;he++)F.__webglFramebuffer[ee][he]=e.createFramebuffer()}else F.__webglFramebuffer[ee]=e.createFramebuffer()}else{if(f.mipmaps&&f.mipmaps.length>0){F.__webglFramebuffer=[];for(let ee=0;ee<f.mipmaps.length;ee++)F.__webglFramebuffer[ee]=e.createFramebuffer()}else F.__webglFramebuffer=e.createFramebuffer();if(xe)for(let ee=0,he=Q.length;ee<he;ee++){const ge=i.get(Q[ee]);ge.__webglTexture===void 0&&(ge.__webglTexture=e.createTexture(),o.memory.textures++)}if(x.samples>0&&ue(x)===!1){F.__webglMultisampledFramebuffer=e.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ee=0;ee<Q.length;ee++){const he=Q[ee];F.__webglColorRenderbuffer[ee]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,F.__webglColorRenderbuffer[ee]);const ge=a.convert(he.format,he.colorSpace),te=a.convert(he.type),se=A(he.internalFormat,ge,te,he.colorSpace,x.isXRRenderTarget===!0),Ee=Ue(x);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ee,se,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ee,e.RENDERBUFFER,F.__webglColorRenderbuffer[ee])}e.bindRenderbuffer(e.RENDERBUFFER,null),x.depthBuffer&&(F.__webglDepthRenderbuffer=e.createRenderbuffer(),De(F.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(G){t.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture),Ve(e.TEXTURE_CUBE_MAP,f);for(let ee=0;ee<6;ee++)if(f.mipmaps&&f.mipmaps.length>0)for(let he=0;he<f.mipmaps.length;he++)me(F.__webglFramebuffer[ee][he],x,f,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he);else me(F.__webglFramebuffer[ee],x,f,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);p(f)&&l(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let ee=0,he=Q.length;ee<he;ee++){const ge=Q[ee],te=i.get(ge);let se=e.TEXTURE_2D;(x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(se=x.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(se,te.__webglTexture),Ve(se,ge),me(F.__webglFramebuffer,x,ge,e.COLOR_ATTACHMENT0+ee,se,0),p(ge)&&l(se)}t.unbindTexture()}else{let ee=e.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(ee=x.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(ee,z.__webglTexture),Ve(ee,f),f.mipmaps&&f.mipmaps.length>0)for(let he=0;he<f.mipmaps.length;he++)me(F.__webglFramebuffer[he],x,f,e.COLOR_ATTACHMENT0,ee,he);else me(F.__webglFramebuffer,x,f,e.COLOR_ATTACHMENT0,ee,0);p(f)&&l(ee),t.unbindTexture()}x.depthBuffer&&ke(x)}function it(x){const f=x.textures;for(let F=0,z=f.length;F<z;F++){const Q=f[F];if(p(Q)){const G=T(x),xe=i.get(Q).__webglTexture;t.bindTexture(G,xe),l(G),t.unbindTexture()}}}const L=[],ae=[];function j(x){if(x.samples>0){if(ue(x)===!1){const f=x.textures,F=x.width,z=x.height;let Q=e.COLOR_BUFFER_BIT;const G=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,xe=i.get(x),ee=f.length>1;if(ee)for(let ge=0;ge<f.length;ge++)t.bindFramebuffer(e.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ge,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,xe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ge,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const he=x.texture.mipmaps;he&&he.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ge=0;ge<f.length;ge++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(Q|=e.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(Q|=e.STENCIL_BUFFER_BIT)),ee){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,xe.__webglColorRenderbuffer[ge]);const te=i.get(f[ge]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,te,0)}e.blitFramebuffer(0,0,F,z,0,0,F,z,Q,e.NEAREST),c===!0&&(L.length=0,ae.length=0,L.push(e.COLOR_ATTACHMENT0+ge),x.depthBuffer&&x.resolveDepthBuffer===!1&&(L.push(G),ae.push(G),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ae)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,L))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ee)for(let ge=0;ge<f.length;ge++){t.bindFramebuffer(e.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ge,e.RENDERBUFFER,xe.__webglColorRenderbuffer[ge]);const te=i.get(f[ge]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,xe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ge,e.TEXTURE_2D,te,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&c){const f=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[f])}}}function Ue(x){return Math.min(r.maxSamples,x.samples)}function ue(x){const f=i.get(x);return x.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&f.__useRenderToTexture!==!1}function Me(x){const f=o.render.frame;d.get(x)!==f&&(d.set(x,f),x.update())}function qe(x,f){const F=x.colorSpace,z=x.format,Q=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||F!==qi&&F!==Un&&(vt.getTransfer(F)===ot?(z!==qt||Q!==yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),f}function Ge(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(h.width=x.naturalWidth||x.width,h.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(h.width=x.displayWidth,h.height=x.displayHeight):(h.width=x.width,h.height=x.height),h}this.allocateTextureUnit=W,this.resetTextureUnits=O,this.setTexture2D=Z,this.setTexture2DArray=q,this.setTexture3D=le,this.setTextureCube=V,this.rebindTextures=ft,this.setupRenderTarget=w,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ue}function _p(e,n){function t(i,r=Un){let a;const o=vt.getTransfer(r);if(i===yn)return e.UNSIGNED_BYTE;if(i===vs)return e.UNSIGNED_SHORT_4_4_4_4;if(i===_s)return e.UNSIGNED_SHORT_5_5_5_1;if(i===$l)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Zl)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===jl)return e.BYTE;if(i===Ql)return e.SHORT;if(i===Hi)return e.UNSIGNED_SHORT;if(i===Es)return e.INT;if(i===oi)return e.UNSIGNED_INT;if(i===Tn)return e.FLOAT;if(i===Xi)return e.HALF_FLOAT;if(i===Jl)return e.ALPHA;if(i===ec)return e.RGB;if(i===qt)return e.RGBA;if(i===ir)return e.DEPTH_COMPONENT;if(i===Gi)return e.DEPTH_STENCIL;if(i===tc)return e.RED;if(i===xs)return e.RED_INTEGER;if(i===nc)return e.RG;if(i===bs)return e.RG_INTEGER;if(i===Ts)return e.RGBA_INTEGER;if(i===ra||i===oa||i===sa||i===la)if(o===ot)if(a=n.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===ra)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===oa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===la)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=n.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===ra)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===oa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===la)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wr||i===Cr||i===yr||i===Pr)if(a=n.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===wr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Lr||i===Dr||i===Ur)if(a=n.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Lr||i===Dr)return o===ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Ur)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ir||i===Nr||i===Fr||i===Or||i===Br||i===Gr||i===kr||i===Hr||i===Vr||i===zr||i===Wr||i===Xr||i===qr||i===Yr)if(a=n.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Ir)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nr)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fr)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Or)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Br)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gr)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===kr)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hr)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vr)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zr)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wr)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xr)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qr)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yr)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Kr||i===$r||i===Zr)if(a=n.get("EXT_texture_compression_bptc"),a!==null){if(i===Kr)return o===ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$r)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jr||i===Qr||i===Jr||i===eo)if(a=n.get("EXT_texture_compression_rgtc"),a!==null){if(i===jr)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Qr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Jr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===eo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ri?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const Sp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mp=`
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

}`;class Ep{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new Ss(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new an({vertexShader:Sp,fragmentShader:Mp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new Ms(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xp extends ml{constructor(n,t){super();const i=this;let r=null,a=1,o=null,s="local-floor",c=1,h=null,d=null,u=null,g=null,m=null,M=null;const E=typeof XRWebGLBinding<"u",p=new Ep,l={},T=t.getContextAttributes();let A=null,b=null;const C=[],R=[],D=new ut;let U=null;const _=new jn;_.viewport=new Rt;const S=new jn;S.viewport=new Rt;const P=[_,S],O=new gl;let W=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let K=C[B];return K===void 0&&(K=new ia,C[B]=K),K.getTargetRaySpace()},this.getControllerGrip=function(B){let K=C[B];return K===void 0&&(K=new ia,C[B]=K),K.getGripSpace()},this.getHand=function(B){let K=C[B];return K===void 0&&(K=new ia,C[B]=K),K.getHandSpace()};function Z(B){const K=R.indexOf(B.inputSource);if(K===-1)return;const me=C[K];me!==void 0&&(me.update(B.inputSource,B.frame,h||o),me.dispatchEvent({type:B.type,data:B.inputSource}))}function q(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",le);for(let B=0;B<C.length;B++){const K=R[B];K!==null&&(R[B]=null,C[B].disconnect(K))}W=null,X=null,p.reset();for(const B in l)delete l[B];n.setRenderTarget(A),m=null,g=null,u=null,r=null,b=null,Xe.stop(),i.isPresenting=!1,n.setPixelRatio(U),n.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(B){h=B},this.getBaseLayer=function(){return g!==null?g:m},this.getBinding=function(){return u===null&&E&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(A=n.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",q),r.addEventListener("inputsourceschange",le),T.xrCompatible!==!0&&await t.makeXRCompatible(),U=n.getPixelRatio(),n.getSize(D),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,De=null,Ce=null;T.depth&&(Ce=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=T.stencil?Gi:ir,De=T.stencil?ri:oi);const ke={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:a};u=this.getBinding(),g=u.createProjectionLayer(ke),r.updateRenderState({layers:[g]}),n.setPixelRatio(1),n.setSize(g.textureWidth,g.textureHeight,!1),b=new On(g.textureWidth,g.textureHeight,{format:qt,type:yn,depthTexture:new hs(g.textureWidth,g.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:T.stencil,colorSpace:n.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const me={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,me),r.updateRenderState({baseLayer:m}),n.setPixelRatio(1),n.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new On(m.framebufferWidth,m.framebufferHeight,{format:qt,type:yn,colorSpace:n.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),h=null,o=await r.requestReferenceSpace(s),Xe.setContext(r),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function le(B){for(let K=0;K<B.removed.length;K++){const me=B.removed[K],De=R.indexOf(me);De>=0&&(R[De]=null,C[De].disconnect(me))}for(let K=0;K<B.added.length;K++){const me=B.added[K];let De=R.indexOf(me);if(De===-1){for(let ke=0;ke<C.length;ke++)if(ke>=R.length){R.push(me),De=ke;break}else if(R[ke]===null){R[ke]=me,De=ke;break}if(De===-1)break}const Ce=C[De];Ce&&Ce.connect(me)}}const V=new ne,ve=new ne;function Re(B,K,me){V.setFromMatrixPosition(K.matrixWorld),ve.setFromMatrixPosition(me.matrixWorld);const De=V.distanceTo(ve),Ce=K.projectionMatrix.elements,ke=me.projectionMatrix.elements,ft=Ce[14]/(Ce[10]-1),w=Ce[14]/(Ce[10]+1),it=(Ce[9]+1)/Ce[5],L=(Ce[9]-1)/Ce[5],ae=(Ce[8]-1)/Ce[0],j=(ke[8]+1)/ke[0],Ue=ft*ae,ue=ft*j,Me=De/(-ae+j),qe=Me*-ae;if(K.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(qe),B.translateZ(Me),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),Ce[10]===-1)B.projectionMatrix.copy(K.projectionMatrix),B.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Ge=ft+Me,x=w+Me,f=Ue-qe,F=ue+(De-qe),z=it*w/x*Ge,Q=L*w/x*Ge;B.projectionMatrix.makePerspective(f,F,z,Q,Ge,x),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function we(B,K){K===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(K.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;let K=B.near,me=B.far;p.texture!==null&&(p.depthNear>0&&(K=p.depthNear),p.depthFar>0&&(me=p.depthFar)),O.near=S.near=_.near=K,O.far=S.far=_.far=me,(W!==O.near||X!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),W=O.near,X=O.far),O.layers.mask=B.layers.mask|6,_.layers.mask=O.layers.mask&3,S.layers.mask=O.layers.mask&5;const De=B.parent,Ce=O.cameras;we(O,De);for(let ke=0;ke<Ce.length;ke++)we(Ce[ke],De);Ce.length===2?Re(O,_,S):O.projectionMatrix.copy(_.projectionMatrix),Ve(B,O,De)};function Ve(B,K,me){me===null?B.matrix.copy(K.matrixWorld):(B.matrix.copy(me.matrixWorld),B.matrix.invert(),B.matrix.multiply(K.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(K.projectionMatrix),B.projectionMatrixInverse.copy(K.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=vl*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(g===null&&m===null))return c},this.setFoveation=function(B){c=B,g!==null&&(g.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(B){return l[B]};let We=null;function je(B,K){if(d=K.getViewerPose(h||o),M=K,d!==null){const me=d.views;m!==null&&(n.setRenderTargetFramebuffer(b,m.framebuffer),n.setRenderTarget(b));let De=!1;me.length!==O.cameras.length&&(O.cameras.length=0,De=!0);for(let w=0;w<me.length;w++){const it=me[w];let L=null;if(m!==null)L=m.getViewport(it);else{const j=u.getViewSubImage(g,it);L=j.viewport,w===0&&(n.setRenderTargetTextures(b,j.colorTexture,j.depthStencilTexture),n.setRenderTarget(b))}let ae=P[w];ae===void 0&&(ae=new jn,ae.layers.enable(w),ae.viewport=new Rt,P[w]=ae),ae.matrix.fromArray(it.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(it.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(L.x,L.y,L.width,L.height),w===0&&(O.matrix.copy(ae.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),De===!0&&O.cameras.push(ae)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){u=i.getBinding();const w=u.getDepthInformation(me[0]);w&&w.isValid&&w.texture&&p.init(w,r.renderState)}if(Ce&&Ce.includes("camera-access")&&E){n.state.unbindTexture(),u=i.getBinding();for(let w=0;w<me.length;w++){const it=me[w].camera;if(it){let L=l[it];L||(L=new Ss,l[it]=L);const ae=u.getCameraImage(it);L.sourceTexture=ae}}}}for(let me=0;me<C.length;me++){const De=R[me],Ce=C[me];De!==null&&Ce!==void 0&&Ce.update(De,K,h||o)}We&&We(B,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),M=null}const Xe=new Us;Xe.setAnimationLoop(je),this.setAnimationLoop=function(B){We=B},this.dispose=function(){}}}const _n=new Xt,bp=new Ft;function Tp(e,n){function t(p,l){p.matrixAutoUpdate===!0&&p.updateMatrix(),l.value.copy(p.matrix)}function i(p,l){l.color.getRGB(p.fogColor.value,Rs(e)),l.isFog?(p.fogNear.value=l.near,p.fogFar.value=l.far):l.isFogExp2&&(p.fogDensity.value=l.density)}function r(p,l,T,A,b){l.isMeshBasicMaterial||l.isMeshLambertMaterial?a(p,l):l.isMeshToonMaterial?(a(p,l),u(p,l)):l.isMeshPhongMaterial?(a(p,l),d(p,l)):l.isMeshStandardMaterial?(a(p,l),g(p,l),l.isMeshPhysicalMaterial&&m(p,l,b)):l.isMeshMatcapMaterial?(a(p,l),M(p,l)):l.isMeshDepthMaterial?a(p,l):l.isMeshDistanceMaterial?(a(p,l),E(p,l)):l.isMeshNormalMaterial?a(p,l):l.isLineBasicMaterial?(o(p,l),l.isLineDashedMaterial&&s(p,l)):l.isPointsMaterial?c(p,l,T,A):l.isSpriteMaterial?h(p,l):l.isShadowMaterial?(p.color.value.copy(l.color),p.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}function a(p,l){p.opacity.value=l.opacity,l.color&&p.diffuse.value.copy(l.color),l.emissive&&p.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(p.map.value=l.map,t(l.map,p.mapTransform)),l.alphaMap&&(p.alphaMap.value=l.alphaMap,t(l.alphaMap,p.alphaMapTransform)),l.bumpMap&&(p.bumpMap.value=l.bumpMap,t(l.bumpMap,p.bumpMapTransform),p.bumpScale.value=l.bumpScale,l.side===yt&&(p.bumpScale.value*=-1)),l.normalMap&&(p.normalMap.value=l.normalMap,t(l.normalMap,p.normalMapTransform),p.normalScale.value.copy(l.normalScale),l.side===yt&&p.normalScale.value.negate()),l.displacementMap&&(p.displacementMap.value=l.displacementMap,t(l.displacementMap,p.displacementMapTransform),p.displacementScale.value=l.displacementScale,p.displacementBias.value=l.displacementBias),l.emissiveMap&&(p.emissiveMap.value=l.emissiveMap,t(l.emissiveMap,p.emissiveMapTransform)),l.specularMap&&(p.specularMap.value=l.specularMap,t(l.specularMap,p.specularMapTransform)),l.alphaTest>0&&(p.alphaTest.value=l.alphaTest);const T=n.get(l),A=T.envMap,b=T.envMapRotation;A&&(p.envMap.value=A,_n.copy(b),_n.x*=-1,_n.y*=-1,_n.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(_n.y*=-1,_n.z*=-1),p.envMapRotation.value.setFromMatrix4(bp.makeRotationFromEuler(_n)),p.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=l.reflectivity,p.ior.value=l.ior,p.refractionRatio.value=l.refractionRatio),l.lightMap&&(p.lightMap.value=l.lightMap,p.lightMapIntensity.value=l.lightMapIntensity,t(l.lightMap,p.lightMapTransform)),l.aoMap&&(p.aoMap.value=l.aoMap,p.aoMapIntensity.value=l.aoMapIntensity,t(l.aoMap,p.aoMapTransform))}function o(p,l){p.diffuse.value.copy(l.color),p.opacity.value=l.opacity,l.map&&(p.map.value=l.map,t(l.map,p.mapTransform))}function s(p,l){p.dashSize.value=l.dashSize,p.totalSize.value=l.dashSize+l.gapSize,p.scale.value=l.scale}function c(p,l,T,A){p.diffuse.value.copy(l.color),p.opacity.value=l.opacity,p.size.value=l.size*T,p.scale.value=A*.5,l.map&&(p.map.value=l.map,t(l.map,p.uvTransform)),l.alphaMap&&(p.alphaMap.value=l.alphaMap,t(l.alphaMap,p.alphaMapTransform)),l.alphaTest>0&&(p.alphaTest.value=l.alphaTest)}function h(p,l){p.diffuse.value.copy(l.color),p.opacity.value=l.opacity,p.rotation.value=l.rotation,l.map&&(p.map.value=l.map,t(l.map,p.mapTransform)),l.alphaMap&&(p.alphaMap.value=l.alphaMap,t(l.alphaMap,p.alphaMapTransform)),l.alphaTest>0&&(p.alphaTest.value=l.alphaTest)}function d(p,l){p.specular.value.copy(l.specular),p.shininess.value=Math.max(l.shininess,1e-4)}function u(p,l){l.gradientMap&&(p.gradientMap.value=l.gradientMap)}function g(p,l){p.metalness.value=l.metalness,l.metalnessMap&&(p.metalnessMap.value=l.metalnessMap,t(l.metalnessMap,p.metalnessMapTransform)),p.roughness.value=l.roughness,l.roughnessMap&&(p.roughnessMap.value=l.roughnessMap,t(l.roughnessMap,p.roughnessMapTransform)),l.envMap&&(p.envMapIntensity.value=l.envMapIntensity)}function m(p,l,T){p.ior.value=l.ior,l.sheen>0&&(p.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),p.sheenRoughness.value=l.sheenRoughness,l.sheenColorMap&&(p.sheenColorMap.value=l.sheenColorMap,t(l.sheenColorMap,p.sheenColorMapTransform)),l.sheenRoughnessMap&&(p.sheenRoughnessMap.value=l.sheenRoughnessMap,t(l.sheenRoughnessMap,p.sheenRoughnessMapTransform))),l.clearcoat>0&&(p.clearcoat.value=l.clearcoat,p.clearcoatRoughness.value=l.clearcoatRoughness,l.clearcoatMap&&(p.clearcoatMap.value=l.clearcoatMap,t(l.clearcoatMap,p.clearcoatMapTransform)),l.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap,t(l.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),l.clearcoatNormalMap&&(p.clearcoatNormalMap.value=l.clearcoatNormalMap,t(l.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),l.side===yt&&p.clearcoatNormalScale.value.negate())),l.dispersion>0&&(p.dispersion.value=l.dispersion),l.iridescence>0&&(p.iridescence.value=l.iridescence,p.iridescenceIOR.value=l.iridescenceIOR,p.iridescenceThicknessMinimum.value=l.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=l.iridescenceThicknessRange[1],l.iridescenceMap&&(p.iridescenceMap.value=l.iridescenceMap,t(l.iridescenceMap,p.iridescenceMapTransform)),l.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=l.iridescenceThicknessMap,t(l.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),l.transmission>0&&(p.transmission.value=l.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),l.transmissionMap&&(p.transmissionMap.value=l.transmissionMap,t(l.transmissionMap,p.transmissionMapTransform)),p.thickness.value=l.thickness,l.thicknessMap&&(p.thicknessMap.value=l.thicknessMap,t(l.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=l.attenuationDistance,p.attenuationColor.value.copy(l.attenuationColor)),l.anisotropy>0&&(p.anisotropyVector.value.set(l.anisotropy*Math.cos(l.anisotropyRotation),l.anisotropy*Math.sin(l.anisotropyRotation)),l.anisotropyMap&&(p.anisotropyMap.value=l.anisotropyMap,t(l.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=l.specularIntensity,p.specularColor.value.copy(l.specularColor),l.specularColorMap&&(p.specularColorMap.value=l.specularColorMap,t(l.specularColorMap,p.specularColorMapTransform)),l.specularIntensityMap&&(p.specularIntensityMap.value=l.specularIntensityMap,t(l.specularIntensityMap,p.specularIntensityMapTransform))}function M(p,l){l.matcap&&(p.matcap.value=l.matcap)}function E(p,l){const T=n.get(l).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Ap(e,n,t,i){let r={},a={},o=[];const s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,A){const b=A.program;i.uniformBlockBinding(T,b)}function h(T,A){let b=r[T.id];b===void 0&&(M(T),b=d(T),r[T.id]=b,T.addEventListener("dispose",p));const C=A.program;i.updateUBOMapping(T,C);const R=n.render.frame;a[T.id]!==R&&(g(T),a[T.id]=R)}function d(T){const A=u();T.__bindingPointIndex=A;const b=e.createBuffer(),C=T.__size,R=T.usage;return e.bindBuffer(e.UNIFORM_BUFFER,b),e.bufferData(e.UNIFORM_BUFFER,C,R),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,A,b),b}function u(){for(let T=0;T<s;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(T){const A=r[T.id],b=T.uniforms,C=T.__cache;e.bindBuffer(e.UNIFORM_BUFFER,A);for(let R=0,D=b.length;R<D;R++){const U=Array.isArray(b[R])?b[R]:[b[R]];for(let _=0,S=U.length;_<S;_++){const P=U[_];if(m(P,R,_,C)===!0){const O=P.__offset,W=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let Z=0;Z<W.length;Z++){const q=W[Z],le=E(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,e.bufferSubData(e.UNIFORM_BUFFER,O+X,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,X),X+=le.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,O,P.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function m(T,A,b,C){const R=T.value,D=A+"_"+b;if(C[D]===void 0)return typeof R=="number"||typeof R=="boolean"?C[D]=R:C[D]=R.clone(),!0;{const U=C[D];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return C[D]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function M(T){const A=T.uniforms;let b=0;const C=16;for(let D=0,U=A.length;D<U;D++){const _=Array.isArray(A[D])?A[D]:[A[D]];for(let S=0,P=_.length;S<P;S++){const O=_[S],W=Array.isArray(O.value)?O.value:[O.value];for(let X=0,Z=W.length;X<Z;X++){const q=W[X],le=E(q),V=b%C,ve=V%le.boundary,Re=V+ve;b+=ve,Re!==0&&C-Re<le.storage&&(b+=C-Re),O.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=b,b+=le.storage}}}const R=b%C;return R>0&&(b+=C-R),T.__size=b,T.__cache={},this}function E(T){const A={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(A.boundary=4,A.storage=4):T.isVector2?(A.boundary=8,A.storage=8):T.isVector3||T.isColor?(A.boundary=16,A.storage=12):T.isVector4?(A.boundary=16,A.storage=16):T.isMatrix3?(A.boundary=48,A.storage=48):T.isMatrix4?(A.boundary=64,A.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),A}function p(T){const A=T.target;A.removeEventListener("dispose",p);const b=o.indexOf(A.__bindingPointIndex);o.splice(b,1),e.deleteBuffer(r[A.id]),delete r[A.id],delete a[A.id]}function l(){for(const T in r)e.deleteBuffer(r[T]);o=[],r={},a={}}return{bind:c,update:h,dispose:l}}class Rp{constructor(n={}){const{canvas:t=ul(),context:i=null,depth:r=!0,stencil:a=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:g=!1}=n;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const M=new Uint32Array(4),E=new Int32Array(4);let p=null,l=null;const T=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let C=!1;this._outputColorSpace=tr;let R=0,D=0,U=null,_=-1,S=null;const P=new Rt,O=new Rt;let W=null;const X=new $e(0);let Z=0,q=t.width,le=t.height,V=1,ve=null,Re=null;const we=new Rt(0,0,q,le),Ve=new Rt(0,0,q,le);let We=!1;const je=new fs;let Xe=!1,B=!1;const K=new Ft,me=new ne,De=new Rt,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function ft(){return U===null?V:1}let w=i;function it(v,I){return t.getContext(v,I)}try{const v={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fl}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",re,!1),w===null){const I="webgl2";if(w=it(I,v),w===null)throw it(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let L,ae,j,Ue,ue,Me,qe,Ge,x,f,F,z,Q,G,xe,ee,he,ge,te,se,Ee,_e,de,Fe;function y(){L=new Ff(w),L.init(),_e=new _p(w,L),ae=new yf(w,L,n,_e),j=new gp(w,L),ae.reversedDepthBuffer&&g&&j.buffers.depth.setReversed(!0),Ue=new Gf(w),ue=new ip,Me=new vp(w,L,j,ue,ae,_e,Ue),qe=new Lf(b),Ge=new Nf(b),x=new Wc(w),de=new wf(w,x),f=new Of(w,x,Ue,de),F=new Hf(w,f,x,Ue),te=new kf(w,ae,Me),ee=new Pf(ue),z=new np(b,qe,Ge,L,ae,de,ee),Q=new Tp(b,ue),G=new rp,xe=new up(L),ge=new Rf(b,qe,Ge,j,F,m,c),he=new pp(b,F,ae),Fe=new Ap(w,Ue,ae,j),se=new Cf(w,L,Ue),Ee=new Bf(w,L,Ue),Ue.programs=z.programs,b.capabilities=ae,b.extensions=L,b.properties=ue,b.renderLists=G,b.shadowMap=he,b.state=j,b.info=Ue}y();const ie=new xp(b,w);this.xr=ie,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const v=L.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=L.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(v){v!==void 0&&(V=v,this.setSize(q,le,!1))},this.getSize=function(v){return v.set(q,le)},this.setSize=function(v,I,k=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=v,le=I,t.width=Math.floor(v*V),t.height=Math.floor(I*V),k===!0&&(t.style.width=v+"px",t.style.height=I+"px"),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set(q*V,le*V).floor()},this.setDrawingBufferSize=function(v,I,k){q=v,le=I,V=k,t.width=Math.floor(v*k),t.height=Math.floor(I*k),this.setViewport(0,0,v,I)},this.getCurrentViewport=function(v){return v.copy(P)},this.getViewport=function(v){return v.copy(we)},this.setViewport=function(v,I,k,H){v.isVector4?we.set(v.x,v.y,v.z,v.w):we.set(v,I,k,H),j.viewport(P.copy(we).multiplyScalar(V).round())},this.getScissor=function(v){return v.copy(Ve)},this.setScissor=function(v,I,k,H){v.isVector4?Ve.set(v.x,v.y,v.z,v.w):Ve.set(v,I,k,H),j.scissor(O.copy(Ve).multiplyScalar(V).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(v){j.setScissorTest(We=v)},this.setOpaqueSort=function(v){ve=v},this.setTransparentSort=function(v){Re=v},this.getClearColor=function(v){return v.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor(...arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha(...arguments)},this.clear=function(v=!0,I=!0,k=!0){let H=0;if(v){let N=!1;if(U!==null){const oe=U.texture.format;N=oe===Ts||oe===bs||oe===xs}if(N){const oe=U.texture.type,pe=oe===yn||oe===oi||oe===Hi||oe===ri||oe===vs||oe===_s,Te=ge.getClearColor(),Se=ge.getClearAlpha(),Ie=Te.r,Ne=Te.g,ye=Te.b;pe?(M[0]=Ie,M[1]=Ne,M[2]=ye,M[3]=Se,w.clearBufferuiv(w.COLOR,0,M)):(E[0]=Ie,E[1]=Ne,E[2]=ye,E[3]=Se,w.clearBufferiv(w.COLOR,0,E))}else H|=w.COLOR_BUFFER_BIT}I&&(H|=w.DEPTH_BUFFER_BIT),k&&(H|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",re,!1),ge.dispose(),G.dispose(),xe.dispose(),ue.dispose(),qe.dispose(),Ge.dispose(),F.dispose(),de.dispose(),Fe.dispose(),z.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",zt),ie.removeEventListener("sessionend",Mr),mn.stop()};function ce(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const v=Ue.autoReset,I=he.enabled,k=he.autoUpdate,H=he.needsUpdate,N=he.type;y(),Ue.autoReset=v,he.enabled=I,he.autoUpdate=k,he.needsUpdate=H,he.type=N}function re(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function J(v){const I=v.target;I.removeEventListener("dispose",J),Ae(I)}function Ae(v){Oe(v),ue.remove(v)}function Oe(v){const I=ue.get(v).programs;I!==void 0&&(I.forEach(function(k){z.releaseProgram(k)}),v.isShaderMaterial&&z.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,k,H,N,oe){I===null&&(I=Ce);const pe=N.isMesh&&N.matrixWorld.determinant()<0,Te=rl(v,I,k,H,N);j.setMaterial(H,pe);let Se=k.index,Ie=1;if(H.wireframe===!0){if(Se=f.getWireframeAttribute(k),Se===void 0)return;Ie=2}const Ne=k.drawRange,ye=k.attributes.position;let ze=Ne.start*Ie,Qe=(Ne.start+Ne.count)*Ie;oe!==null&&(ze=Math.max(ze,oe.start*Ie),Qe=Math.min(Qe,(oe.start+oe.count)*Ie)),Se!==null?(ze=Math.max(ze,0),Qe=Math.min(Qe,Se.count)):ye!=null&&(ze=Math.max(ze,0),Qe=Math.min(Qe,ye.count));const ht=Qe-ze;if(ht<0||ht===1/0)return;de.setup(N,H,Te,k,Se);let rt,et=se;if(Se!==null&&(rt=x.get(Se),et=Ee,et.setIndex(rt)),N.isMesh)H.wireframe===!0?(j.setLineWidth(H.wireframeLinewidth*ft()),et.setMode(w.LINES)):et.setMode(w.TRIANGLES);else if(N.isLine){let Le=H.linewidth;Le===void 0&&(Le=1),j.setLineWidth(Le*ft()),N.isLineSegments?et.setMode(w.LINES):N.isLineLoop?et.setMode(w.LINE_LOOP):et.setMode(w.LINE_STRIP)}else N.isPoints?et.setMode(w.POINTS):N.isSprite&&et.setMode(w.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Da("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),et.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(L.get("WEBGL_multi_draw"))et.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Le=N._multiDrawStarts,lt=N._multiDrawCounts,Ye=N._multiDrawCount,wt=Se?x.get(Se).bytesPerElement:1,Ln=ue.get(H).currentProgram.getUniforms();for(let Ct=0;Ct<Ye;Ct++)Ln.setValue(w,"_gl_DrawID",Ct),et.render(Le[Ct]/wt,lt[Ct])}else if(N.isInstancedMesh)et.renderInstances(ze,ht,N.count);else if(k.isInstancedBufferGeometry){const Le=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,lt=Math.min(k.instanceCount,Le);et.renderInstances(ze,ht,lt)}else et.render(ze,ht)};function at(v,I,k){v.transparent===!0&&v.side===Nt&&v.forceSinglePass===!1?(v.side=yt,v.needsUpdate=!0,pi(v,I,k),v.side=ii,v.needsUpdate=!0,pi(v,I,k),v.side=Nt):pi(v,I,k)}this.compile=function(v,I,k=null){k===null&&(k=v),l=xe.get(k),l.init(I),A.push(l),k.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(l.pushLight(N),N.castShadow&&l.pushShadow(N))}),v!==k&&v.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(l.pushLight(N),N.castShadow&&l.pushShadow(N))}),l.setupLights();const H=new Set;return v.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const oe=N.material;if(oe)if(Array.isArray(oe))for(let pe=0;pe<oe.length;pe++){const Te=oe[pe];at(Te,k,N),H.add(Te)}else at(oe,k,N),H.add(oe)}),l=A.pop(),H},this.compileAsync=function(v,I,k=null){const H=this.compile(v,I,k);return new Promise(N=>{function oe(){if(H.forEach(function(pe){ue.get(pe).currentProgram.isReady()&&H.delete(pe)}),H.size===0){N(v);return}setTimeout(oe,10)}L.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Ze=null;function Qt(v){Ze&&Ze(v)}function zt(){mn.stop()}function Mr(){mn.start()}const mn=new Us;mn.setAnimationLoop(Qt),typeof self<"u"&&mn.setContext(self),this.setAnimationLoop=function(v){Ze=v,ie.setAnimationLoop(v),v===null?mn.stop():mn.start()},ie.addEventListener("sessionstart",zt),ie.addEventListener("sessionend",Mr),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(I),I=ie.getCamera()),v.isScene===!0&&v.onBeforeRender(b,v,I,U),l=xe.get(v,A.length),l.init(I),A.push(l),K.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),je.setFromProjectionMatrix(K,Rr,I.reversedDepth),B=this.localClippingEnabled,Xe=ee.init(this.clippingPlanes,B),p=G.get(v,T.length),p.init(),T.push(p),ie.enabled===!0&&ie.isPresenting===!0){const oe=b.xr.getDepthSensingMesh();oe!==null&&ta(oe,I,-1/0,b.sortObjects)}ta(v,I,0,b.sortObjects),p.finish(),b.sortObjects===!0&&p.sort(ve,Re),ke=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,ke&&ge.addToRenderList(p,v),this.info.render.frame++,Xe===!0&&ee.beginShadows();const k=l.state.shadowsArray;he.render(k,v,I),Xe===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=p.opaque,N=p.transmissive;if(l.setupLights(),I.isArrayCamera){const oe=I.cameras;if(N.length>0)for(let pe=0,Te=oe.length;pe<Te;pe++){const Se=oe[pe];xr(H,N,v,Se)}ke&&ge.render(v);for(let pe=0,Te=oe.length;pe<Te;pe++){const Se=oe[pe];Er(p,v,Se,Se.viewport)}}else N.length>0&&xr(H,N,v,I),ke&&ge.render(v),Er(p,v,I);U!==null&&D===0&&(Me.updateMultisampleRenderTarget(U),Me.updateRenderTargetMipmap(U)),v.isScene===!0&&v.onAfterRender(b,v,I),de.resetDefaultState(),_=-1,S=null,A.pop(),A.length>0?(l=A[A.length-1],Xe===!0&&ee.setGlobalState(b.clippingPlanes,l.state.camera)):l=null,T.pop(),T.length>0?p=T[T.length-1]:p=null};function ta(v,I,k,H){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)k=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLight)l.pushLight(v),v.castShadow&&l.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||je.intersectsSprite(v)){H&&De.setFromMatrixPosition(v.matrixWorld).applyMatrix4(K);const pe=F.update(v),Te=v.material;Te.visible&&p.push(v,pe,Te,k,De.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||je.intersectsObject(v))){const pe=F.update(v),Te=v.material;if(H&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),De.copy(v.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),De.copy(pe.boundingSphere.center)),De.applyMatrix4(v.matrixWorld).applyMatrix4(K)),Array.isArray(Te)){const Se=pe.groups;for(let Ie=0,Ne=Se.length;Ie<Ne;Ie++){const ye=Se[Ie],ze=Te[ye.materialIndex];ze&&ze.visible&&p.push(v,pe,ze,k,De.z,ye)}}else Te.visible&&p.push(v,pe,Te,k,De.z,null)}}const oe=v.children;for(let pe=0,Te=oe.length;pe<Te;pe++)ta(oe[pe],I,k,H)}function Er(v,I,k,H){const N=v.opaque,oe=v.transmissive,pe=v.transparent;l.setupLightsView(k),Xe===!0&&ee.setGlobalState(b.clippingPlanes,k),H&&j.viewport(P.copy(H)),N.length>0&&hi(N,I,k),oe.length>0&&hi(oe,I,k),pe.length>0&&hi(pe,I,k),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function xr(v,I,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;l.state.transmissionRenderTarget[H.id]===void 0&&(l.state.transmissionRenderTarget[H.id]=new On(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")||L.has("EXT_color_buffer_float")?Xi:yn,minFilter:xn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace}));const oe=l.state.transmissionRenderTarget[H.id],pe=H.viewport||P;oe.setSize(pe.z*b.transmissionResolutionScale,pe.w*b.transmissionResolutionScale);const Te=b.getRenderTarget(),Se=b.getActiveCubeFace(),Ie=b.getActiveMipmapLevel();b.setRenderTarget(oe),b.getClearColor(X),Z=b.getClearAlpha(),Z<1&&b.setClearColor(16777215,.5),b.clear(),ke&&ge.render(k);const Ne=b.toneMapping;b.toneMapping=cn;const ye=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),l.setupLightsView(H),Xe===!0&&ee.setGlobalState(b.clippingPlanes,H),hi(v,k,H),Me.updateMultisampleRenderTarget(oe),Me.updateRenderTargetMipmap(oe),L.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Qe=0,ht=I.length;Qe<ht;Qe++){const rt=I[Qe],et=rt.object,Le=rt.geometry,lt=rt.material,Ye=rt.group;if(lt.side===Nt&&et.layers.test(H.layers)){const wt=lt.side;lt.side=yt,lt.needsUpdate=!0,br(et,k,H,Le,lt,Ye),lt.side=wt,lt.needsUpdate=!0,ze=!0}}ze===!0&&(Me.updateMultisampleRenderTarget(oe),Me.updateRenderTargetMipmap(oe))}b.setRenderTarget(Te,Se,Ie),b.setClearColor(X,Z),ye!==void 0&&(H.viewport=ye),b.toneMapping=Ne}function hi(v,I,k){const H=I.isScene===!0?I.overrideMaterial:null;for(let N=0,oe=v.length;N<oe;N++){const pe=v[N],Te=pe.object,Se=pe.geometry,Ie=pe.group;let Ne=pe.material;Ne.allowOverride===!0&&H!==null&&(Ne=H),Te.layers.test(k.layers)&&br(Te,I,k,Se,Ne,Ie)}}function br(v,I,k,H,N,oe){v.onBeforeRender(b,I,k,H,N,oe),v.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),N.onBeforeRender(b,I,k,H,v,oe),N.transparent===!0&&N.side===Nt&&N.forceSinglePass===!1?(N.side=yt,N.needsUpdate=!0,b.renderBufferDirect(k,I,H,N,v,oe),N.side=ii,N.needsUpdate=!0,b.renderBufferDirect(k,I,H,N,v,oe),N.side=Nt):b.renderBufferDirect(k,I,H,N,v,oe),v.onAfterRender(b,I,k,H,N,oe)}function pi(v,I,k){I.isScene!==!0&&(I=Ce);const H=ue.get(v),N=l.state.lights,oe=l.state.shadowsArray,pe=N.state.version,Te=z.getParameters(v,N.state,oe,I,k),Se=z.getProgramCacheKey(Te);let Ie=H.programs;H.environment=v.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(v.isMeshStandardMaterial?Ge:qe).get(v.envMap||H.environment),H.envMapRotation=H.environment!==null&&v.envMap===null?I.environmentRotation:v.envMapRotation,Ie===void 0&&(v.addEventListener("dispose",J),Ie=new Map,H.programs=Ie);let Ne=Ie.get(Se);if(Ne!==void 0){if(H.currentProgram===Ne&&H.lightsStateVersion===pe)return Ar(v,Te),Ne}else Te.uniforms=z.getUniforms(v),v.onBeforeCompile(Te,b),Ne=z.acquireProgram(Te,Se),Ie.set(Se,Ne),H.uniforms=Te.uniforms;const ye=H.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(ye.clippingPlanes=ee.uniform),Ar(v,Te),H.needsLights=sl(v),H.lightsStateVersion=pe,H.needsLights&&(ye.ambientLightColor.value=N.state.ambient,ye.lightProbe.value=N.state.probe,ye.directionalLights.value=N.state.directional,ye.directionalLightShadows.value=N.state.directionalShadow,ye.spotLights.value=N.state.spot,ye.spotLightShadows.value=N.state.spotShadow,ye.rectAreaLights.value=N.state.rectArea,ye.ltc_1.value=N.state.rectAreaLTC1,ye.ltc_2.value=N.state.rectAreaLTC2,ye.pointLights.value=N.state.point,ye.pointLightShadows.value=N.state.pointShadow,ye.hemisphereLights.value=N.state.hemi,ye.directionalShadowMap.value=N.state.directionalShadowMap,ye.directionalShadowMatrix.value=N.state.directionalShadowMatrix,ye.spotShadowMap.value=N.state.spotShadowMap,ye.spotLightMatrix.value=N.state.spotLightMatrix,ye.spotLightMap.value=N.state.spotLightMap,ye.pointShadowMap.value=N.state.pointShadowMap,ye.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Ne,H.uniformsList=null,Ne}function Tr(v){if(v.uniformsList===null){const I=v.currentProgram.getUniforms();v.uniformsList=Ui.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function Ar(v,I){const k=ue.get(v);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function rl(v,I,k,H,N){I.isScene!==!0&&(I=Ce),Me.resetTextureUnits();const oe=I.fog,pe=H.isMeshStandardMaterial?I.environment:null,Te=U===null?b.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:qi,Se=(H.isMeshStandardMaterial?Ge:qe).get(H.envMap||pe),Ie=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ne=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),ye=!!k.morphAttributes.position,ze=!!k.morphAttributes.normal,Qe=!!k.morphAttributes.color;let ht=cn;H.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ht=b.toneMapping);const rt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,et=rt!==void 0?rt.length:0,Le=ue.get(H),lt=l.state.lights;if(Xe===!0&&(B===!0||v!==S)){const bt=v===S&&H.id===_;ee.setState(H,v,bt)}let Ye=!1;H.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==lt.state.version||Le.outputColorSpace!==Te||N.isBatchedMesh&&Le.batching===!1||!N.isBatchedMesh&&Le.batching===!0||N.isBatchedMesh&&Le.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Le.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Le.instancing===!1||!N.isInstancedMesh&&Le.instancing===!0||N.isSkinnedMesh&&Le.skinning===!1||!N.isSkinnedMesh&&Le.skinning===!0||N.isInstancedMesh&&Le.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Le.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Le.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Le.instancingMorph===!1&&N.morphTexture!==null||Le.envMap!==Se||H.fog===!0&&Le.fog!==oe||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ee.numPlanes||Le.numIntersection!==ee.numIntersection)||Le.vertexAlphas!==Ie||Le.vertexTangents!==Ne||Le.morphTargets!==ye||Le.morphNormals!==ze||Le.morphColors!==Qe||Le.toneMapping!==ht||Le.morphTargetsCount!==et)&&(Ye=!0):(Ye=!0,Le.__version=H.version);let wt=Le.currentProgram;Ye===!0&&(wt=pi(H,I,N));let Ln=!1,Ct=!1,Wn=!1;const ct=wt.getUniforms(),Pt=Le.uniforms;if(j.useProgram(wt.program)&&(Ln=!0,Ct=!0,Wn=!0),H.id!==_&&(_=H.id,Ct=!0),Ln||S!==v){j.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ct.setValue(w,"projectionMatrix",v.projectionMatrix),ct.setValue(w,"viewMatrix",v.matrixWorldInverse);const Tt=ct.map.cameraPosition;Tt!==void 0&&Tt.setValue(w,me.setFromMatrixPosition(v.matrixWorld)),ae.logarithmicDepthBuffer&&ct.setValue(w,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ct.setValue(w,"isOrthographic",v.isOrthographicCamera===!0),S!==v&&(S=v,Ct=!0,Wn=!0)}if(N.isSkinnedMesh){ct.setOptional(w,N,"bindMatrix"),ct.setOptional(w,N,"bindMatrixInverse");const bt=N.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),ct.setValue(w,"boneTexture",bt.boneTexture,Me))}N.isBatchedMesh&&(ct.setOptional(w,N,"batchingTexture"),ct.setValue(w,"batchingTexture",N._matricesTexture,Me),ct.setOptional(w,N,"batchingIdTexture"),ct.setValue(w,"batchingIdTexture",N._indirectTexture,Me),ct.setOptional(w,N,"batchingColorTexture"),N._colorsTexture!==null&&ct.setValue(w,"batchingColorTexture",N._colorsTexture,Me));const Lt=k.morphAttributes;if((Lt.position!==void 0||Lt.normal!==void 0||Lt.color!==void 0)&&te.update(N,k,wt),(Ct||Le.receiveShadow!==N.receiveShadow)&&(Le.receiveShadow=N.receiveShadow,ct.setValue(w,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Pt.envMap.value=Se,Pt.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&I.environment!==null&&(Pt.envMapIntensity.value=I.environmentIntensity),Ct&&(ct.setValue(w,"toneMappingExposure",b.toneMappingExposure),Le.needsLights&&ol(Pt,Wn),oe&&H.fog===!0&&Q.refreshFogUniforms(Pt,oe),Q.refreshMaterialUniforms(Pt,H,V,le,l.state.transmissionRenderTarget[v.id]),Ui.upload(w,Tr(Le),Pt,Me)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ui.upload(w,Tr(Le),Pt,Me),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ct.setValue(w,"center",N.center),ct.setValue(w,"modelViewMatrix",N.modelViewMatrix),ct.setValue(w,"normalMatrix",N.normalMatrix),ct.setValue(w,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const bt=H.uniformsGroups;for(let Tt=0,na=bt.length;Tt<na;Tt++){const gn=bt[Tt];Fe.update(gn,wt),Fe.bind(gn,wt)}}return wt}function ol(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function sl(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(v,I,k){const H=ue.get(v);H.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),ue.get(v.texture).__webglTexture=I,ue.get(v.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:k,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,I){const k=ue.get(v);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0};const ll=w.createFramebuffer();this.setRenderTarget=function(v,I=0,k=0){U=v,R=I,D=k;let H=!0,N=null,oe=!1,pe=!1;if(v){const Se=ue.get(v);if(Se.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(w.FRAMEBUFFER,null),H=!1;else if(Se.__webglFramebuffer===void 0)Me.setupRenderTarget(v);else if(Se.__hasExternalTextures)Me.rebindTextures(v,ue.get(v.texture).__webglTexture,ue.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const ye=v.depthTexture;if(Se.__boundDepthTexture!==ye){if(ye!==null&&ue.has(ye)&&(v.width!==ye.image.width||v.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Me.setupDepthRenderbuffer(v)}}const Ie=v.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(pe=!0);const Ne=ue.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ne[I])?N=Ne[I][k]:N=Ne[I],oe=!0):v.samples>0&&Me.useMultisampledRTT(v)===!1?N=ue.get(v).__webglMultisampledFramebuffer:Array.isArray(Ne)?N=Ne[k]:N=Ne,P.copy(v.viewport),O.copy(v.scissor),W=v.scissorTest}else P.copy(we).multiplyScalar(V).floor(),O.copy(Ve).multiplyScalar(V).floor(),W=We;if(k!==0&&(N=ll),j.bindFramebuffer(w.FRAMEBUFFER,N)&&H&&j.drawBuffers(v,N),j.viewport(P),j.scissor(O),j.setScissorTest(W),oe){const Se=ue.get(v.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+I,Se.__webglTexture,k)}else if(pe){const Se=I;for(let Ie=0;Ie<v.textures.length;Ie++){const Ne=ue.get(v.textures[Ie]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Ie,Ne.__webglTexture,k,Se)}}else if(v!==null&&k!==0){const Se=ue.get(v.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Se.__webglTexture,k)}_=-1},this.readRenderTargetPixels=function(v,I,k,H,N,oe,pe,Te=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=ue.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se){j.bindFramebuffer(w.FRAMEBUFFER,Se);try{const Ie=v.textures[Te],Ne=Ie.format,ye=Ie.type;if(!ae.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-H&&k>=0&&k<=v.height-N&&(v.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Te),w.readPixels(I,k,H,N,_e.convert(Ne),_e.convert(ye),oe))}finally{const Ie=U!==null?ue.get(U).__webglFramebuffer:null;j.bindFramebuffer(w.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(v,I,k,H,N,oe,pe,Te=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=ue.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se)if(I>=0&&I<=v.width-H&&k>=0&&k<=v.height-N){j.bindFramebuffer(w.FRAMEBUFFER,Se);const Ie=v.textures[Te],Ne=Ie.format,ye=Ie.type;if(!ae.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,ze),w.bufferData(w.PIXEL_PACK_BUFFER,oe.byteLength,w.STREAM_READ),v.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Te),w.readPixels(I,k,H,N,_e.convert(Ne),_e.convert(ye),0);const Qe=U!==null?ue.get(U).__webglFramebuffer:null;j.bindFramebuffer(w.FRAMEBUFFER,Qe);const ht=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await hl(w,ht,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,ze),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,oe),w.deleteBuffer(ze),w.deleteSync(ht),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,I=null,k=0){const H=Math.pow(2,-k),N=Math.floor(v.image.width*H),oe=Math.floor(v.image.height*H),pe=I!==null?I.x:0,Te=I!==null?I.y:0;Me.setTexture2D(v,0),w.copyTexSubImage2D(w.TEXTURE_2D,k,0,0,pe,Te,N,oe),j.unbindTexture()};const cl=w.createFramebuffer(),dl=w.createFramebuffer();this.copyTextureToTexture=function(v,I,k=null,H=null,N=0,oe=null){oe===null&&(N!==0?(Da("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=N,N=0):oe=0);let pe,Te,Se,Ie,Ne,ye,ze,Qe,ht;const rt=v.isCompressedTexture?v.mipmaps[oe]:v.image;if(k!==null)pe=k.max.x-k.min.x,Te=k.max.y-k.min.y,Se=k.isBox3?k.max.z-k.min.z:1,Ie=k.min.x,Ne=k.min.y,ye=k.isBox3?k.min.z:0;else{const Lt=Math.pow(2,-N);pe=Math.floor(rt.width*Lt),Te=Math.floor(rt.height*Lt),v.isDataArrayTexture?Se=rt.depth:v.isData3DTexture?Se=Math.floor(rt.depth*Lt):Se=1,Ie=0,Ne=0,ye=0}H!==null?(ze=H.x,Qe=H.y,ht=H.z):(ze=0,Qe=0,ht=0);const et=_e.convert(I.format),Le=_e.convert(I.type);let lt;I.isData3DTexture?(Me.setTexture3D(I,0),lt=w.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Me.setTexture2DArray(I,0),lt=w.TEXTURE_2D_ARRAY):(Me.setTexture2D(I,0),lt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,I.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,I.unpackAlignment);const Ye=w.getParameter(w.UNPACK_ROW_LENGTH),wt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Ln=w.getParameter(w.UNPACK_SKIP_PIXELS),Ct=w.getParameter(w.UNPACK_SKIP_ROWS),Wn=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,rt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,rt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ie),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ne),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ye);const ct=v.isDataArrayTexture||v.isData3DTexture,Pt=I.isDataArrayTexture||I.isData3DTexture;if(v.isDepthTexture){const Lt=ue.get(v),bt=ue.get(I),Tt=ue.get(Lt.__renderTarget),na=ue.get(bt.__renderTarget);j.bindFramebuffer(w.READ_FRAMEBUFFER,Tt.__webglFramebuffer),j.bindFramebuffer(w.DRAW_FRAMEBUFFER,na.__webglFramebuffer);for(let gn=0;gn<Se;gn++)ct&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ue.get(v).__webglTexture,N,ye+gn),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ue.get(I).__webglTexture,oe,ht+gn)),w.blitFramebuffer(Ie,Ne,pe,Te,ze,Qe,pe,Te,w.DEPTH_BUFFER_BIT,w.NEAREST);j.bindFramebuffer(w.READ_FRAMEBUFFER,null),j.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(N!==0||v.isRenderTargetTexture||ue.has(v)){const Lt=ue.get(v),bt=ue.get(I);j.bindFramebuffer(w.READ_FRAMEBUFFER,cl),j.bindFramebuffer(w.DRAW_FRAMEBUFFER,dl);for(let Tt=0;Tt<Se;Tt++)ct?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Lt.__webglTexture,N,ye+Tt):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Lt.__webglTexture,N),Pt?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,bt.__webglTexture,oe,ht+Tt):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,bt.__webglTexture,oe),N!==0?w.blitFramebuffer(Ie,Ne,pe,Te,ze,Qe,pe,Te,w.COLOR_BUFFER_BIT,w.NEAREST):Pt?w.copyTexSubImage3D(lt,oe,ze,Qe,ht+Tt,Ie,Ne,pe,Te):w.copyTexSubImage2D(lt,oe,ze,Qe,Ie,Ne,pe,Te);j.bindFramebuffer(w.READ_FRAMEBUFFER,null),j.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Pt?v.isDataTexture||v.isData3DTexture?w.texSubImage3D(lt,oe,ze,Qe,ht,pe,Te,Se,et,Le,rt.data):I.isCompressedArrayTexture?w.compressedTexSubImage3D(lt,oe,ze,Qe,ht,pe,Te,Se,et,rt.data):w.texSubImage3D(lt,oe,ze,Qe,ht,pe,Te,Se,et,Le,rt):v.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,oe,ze,Qe,pe,Te,et,Le,rt.data):v.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,oe,ze,Qe,rt.width,rt.height,et,rt.data):w.texSubImage2D(w.TEXTURE_2D,oe,ze,Qe,pe,Te,et,Le,rt);w.pixelStorei(w.UNPACK_ROW_LENGTH,Ye),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,wt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ln),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ct),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Wn),oe===0&&I.generateMipmaps&&w.generateMipmap(lt),j.unbindTexture()},this.initRenderTarget=function(v){ue.get(v).__webglFramebuffer===void 0&&Me.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Me.setTextureCube(v,0):v.isData3DTexture?Me.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Me.setTexture2DArray(v,0):Me.setTexture2D(v,0),j.unbindTexture()},this.resetState=function(){R=0,D=0,U=null,j.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(n),t.unpackColorSpace=vt._getUnpackColorSpace()}}const Ii=256,Jn=6378137,fn=85.0511287798066,wp=Math.PI*Jn,Cp=2*wp,ei=e=>((e+180)%360+360)%360-180,Fo=e=>{const t=Math.max(-fn,Math.min(fn,e))*Math.PI/180;return Jn*Math.log(Math.tan(Math.PI/4+t/2))};function yp(e,n,t){if(!Number.isInteger(t)||t<0||t>30)throw new RangeError("Zoom must be an integer from 0 to 30");const i=2**t,r=Math.floor((ei(n)+180)/360*i),o=Math.max(-fn,Math.min(fn,e))*Math.PI/180,s=Math.floor((1-Math.asinh(Math.tan(o))/Math.PI)/2*i);return{x:(r%i+i)%i,y:Math.max(0,Math.min(i-1,s)),z:t,n:i}}function Pp(e,n,t){const i=yp(e,n,t),r=Ii*i.n,a=(ei(n)+180)/360*r,s=Math.max(-fn,Math.min(fn,e))*Math.PI/180,c=(1-Math.asinh(Math.tan(s))/Math.PI)/2*r;return{tile:i,u:a/Ii-i.x,v:c/Ii-i.y}}class Lp{zoom;anchor;originTile;anchorU;anchorV;latitudeScale;tileSpan;originNorthing;constructor(n,t=12){if(!Number.isFinite(n.lat)||!Number.isFinite(n.lon)||Math.abs(n.lat)>90)throw new RangeError("Anchor must be a valid WGS84 latitude/longitude");this.anchor={lat:Math.max(-fn,Math.min(fn,n.lat)),lon:ei(n.lon)},this.zoom=t;const i=Pp(this.anchor.lat,this.anchor.lon,t);this.originTile=i.tile,this.anchorU=i.u,this.anchorV=i.v,this.latitudeScale=Math.cos(this.anchor.lat*Math.PI/180),this.originNorthing=Fo(this.anchor.lat),this.tileSpan=Cp/this.originTile.n*this.latitudeScale}toLocal(n){const t=ei(n.lon-this.anchor.lon),i=Jn*t*Math.PI/180,r=Fo(n.lat)-this.originNorthing;return{x:i*this.latitudeScale,z:r*this.latitudeScale}}toGeo(n){const t=ei(this.anchor.lon+n.x/(Jn*this.latitudeScale)*180/Math.PI),i=this.originNorthing+n.z/this.latitudeScale;return{lon:t,lat:(2*Math.atan(Math.exp(i/Jn))-Math.PI/2)*180/Math.PI}}tileOrigin(n,t){return{x:(n-this.anchorU)*this.tileSpan,z:(t+this.anchorV)*this.tileSpan}}tileOffsetAt(n,t){const i=this.anchorU+n/this.tileSpan,r=this.anchorV-t/this.tileSpan,a=Math.floor(i),o=Math.floor(r);return{dx:a>this.originTile.n/2?a-this.originTile.n:a<-this.originTile.n/2?a+this.originTile.n:a,dz:-o||0,u:i-a,v:r-o}}tileAddress(n,t){const i=this.originTile.n;return{x:((this.originTile.x+n)%i+i)%i,y:Math.max(0,Math.min(i-1,this.originTile.y-t)),z:this.zoom,n:i}}}const rr=[{name:"Midtown Manhattan, New York",lat:40.758,lon:-73.9855,terrain:"URBAN JUNGLE"},{name:"Moab, Utah",lat:38.5733,lon:-109.5498,terrain:"RED ROCK COUNTRY"},{name:"Mount Kisco, New York",lat:41.204406,lon:-73.727446,terrain:"WESTCHESTER BACKROADS"},{name:"Grand Canyon",lat:36.1069,lon:-112.1129,terrain:"THE BIG DROP"},{name:"Mount Everest",lat:27.9881,lon:86.925,terrain:"ROOF OF THE WORLD"},{name:"San Francisco",lat:37.7749,lon:-122.4194,terrain:"HILL CLIMBER"},{name:"Tokyo, Japan",lat:35.6762,lon:139.6503,terrain:"NEON TRAILS"},{name:"Sahara Desert",lat:23.4162,lon:25.6628,terrain:"ENDLESS DUNES"},{name:"Swiss Alps",lat:46.8182,lon:9.2275,terrain:"HIGH ALTITUDE"}];function Dp(e){const n=e.trim().match(/^\s*(-?\d+(?:\.\d+)?)\s*[, ]\s*(-?\d+(?:\.\d+)?)\s*$/);if(!n)return null;const t=Number(n[1]),i=Number(n[2]);return Math.abs(t)<=90&&Math.abs(i)<=180?{name:`${t.toFixed(4)}, ${i.toFixed(4)}`,lat:t,lon:i}:null}let Oo=0;const ga=new Map;async function Up(e){const n=Dp(e);if(n)return[n];const t=e.toLowerCase().trim();if(!t)return[];if(ga.has(t))return ga.get(t);const i=Math.max(0,1100-(Date.now()-Oo));i&&await new Promise(c=>setTimeout(c,i)),Oo=Date.now();const r=new URL("https://nominatim.openstreetmap.org/search");r.search=new URLSearchParams({q:e,format:"jsonv2",limit:"5"}).toString();const a=await fetch(r,{headers:{Accept:"application/json"}});if(!a.ok)throw new Error(`Location search unavailable (${a.status})`);const s=(await a.json()).map(c=>({name:c.display_name.split(",").slice(0,3).join(",").trim(),lat:+c.lat,lon:+c.lon}));return ga.set(t,s),s}function Ip(e,n,t,i){const r=Math.max(0,Math.min(n-1,t*(n-1))),a=Math.max(0,Math.min(n-1,i*(n-1))),o=Math.floor(r),s=Math.floor(a),c=Math.min(n-1,o+1),h=Math.min(n-1,s+1),d=r-o,u=a-s,g=(m,M)=>e[M*n+m]??0;return(g(o,s)*(1-d)+g(c,s)*d)*(1-u)+(g(o,h)*(1-d)+g(c,h)*d)*u}function Bo(e,n,t){const i=new Float32Array((t+1)**2);for(let r=0;r<=t;r++)for(let a=0;a<=t;a++)i[r*(t+1)+a]=Ip(e,n,a/t,r/t);return i}function Go(e,n,t,i){const r=Math.max(0,Math.min(n,t*n)),a=Math.max(0,Math.min(n,i*n)),o=Math.min(n-1,Math.floor(r)),s=Math.min(n-1,Math.floor(a)),c=r-o,h=a-s,d=n+1,u=e[s*d+o]??0,g=e[s*d+o+1]??0,m=e[(s+1)*d+o]??0,M=e[(s+1)*d+o+1]??0;return c>=h?u*(1-c)+g*(c-h)+M*h:u*(1-h)+M*c+m*(h-c)}function Np(e){const n=new Map,t=new Set;for(const i of e){const r=i.segments+1;for(let a=0;a<=i.segments;a++)for(const[o,s]of[[a,0],[a,i.segments],[0,a],[i.segments,a]]){const c=s*r+o,h=`${i.dx*i.segments+o},${i.dz*i.segments-s}`,d=n.get(h)??[];d.push({tile:i,index:c}),n.set(h,d)}}for(const i of n.values()){if(i.length<2)continue;const r=i.reduce((a,o)=>a+o.tile.grid[o.index],0)/i.length;for(const a of i)a.tile.grid[a.index]!==r&&(a.tile.grid[a.index]=r,t.add(a.tile))}return t}const va=12,Ut=Ii,Fp=36,rn=new Map;function ko(e,n,t){const i=`${t}/${e}/${n}`;if(rn.has(i)){const a=rn.get(i);return rn.delete(i),rn.set(i,a),a}const r=(async()=>{try{const a=new Image;a.crossOrigin="anonymous",a.src=`https://s3.amazonaws.com/elevation-tiles-prod/terrarium/${t}/${e}/${n}.png`,await new Promise((d,u)=>{a.onload=()=>d(),a.onerror=()=>u(new Error("terrain tile unavailable"))});const o=document.createElement("canvas");o.width=Ut,o.height=Ut;const s=o.getContext("2d",{willReadFrequently:!0});if(!s)throw new Error("canvas unavailable");s.drawImage(a,0,0,Ut,Ut);const c=s.getImageData(0,0,Ut,Ut).data,h=new Float32Array(Ut*Ut);for(let d=0;d<h.length;d++)h[d]=c[d*4]*256+c[d*4+1]+c[d*4+2]/256-32768;return{heights:h}}catch{return{heights:new Float32Array(Ut*Ut)}}})();for(rn.set(i,r);rn.size>Fp;)rn.delete(rn.keys().next().value);return r}class Op{group=new Yt;place=null;frame=null;heightSampleMs=0;heightSamples=0;tileBuildMs=0;tileBuilds=0;detailQuality=1;baseline=0;tiles=new Map;requests=new Set;coverage={x:NaN,z:NaN};generation=0;centerSegments;activeTerrainShader=null;biome={desert:1,alpine:0,urban:0,green:0};material;constructor(n=127){this.centerSegments=n,this.material=new xt({color:16777215,roughness:.96,metalness:0,vertexColors:!0}),this.material.onBeforeCompile=t=>{t.uniforms.uRumbleDesert={value:this.biome.desert},t.uniforms.uRumbleAlpine={value:this.biome.alpine},t.uniforms.uRumbleUrban={value:this.biome.urban},t.uniforms.uRumbleGreen={value:this.biome.green},t.uniforms.uRumbleDetail={value:this.detailQuality},this.activeTerrainShader=t,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.78, 0.81, 0.77), rumbleAlpineSnow * 0.82);`)},this.material.customProgramCacheKey=()=>"rumble-terrain-material-v6"}async load(n){this.clear();const t=++this.generation;this.place=n,this.frame=new Lp(n,va);const i=n.name.toLowerCase();this.biome.desert=/moab|grand canyon|sahara|utah|arizona/i.test(i)?1:0,this.biome.alpine=/alps|everest|mountain|swiss/i.test(i)?1:0,this.biome.urban=/manhattan|new york city|tokyo|san francisco/i.test(i)?1:0,this.biome.green=this.biome.desert||this.biome.alpine||this.biome.urban?0:1,this.activeTerrainShader&&(this.activeTerrainShader.uniforms.uRumbleDesert.value=this.biome.desert,this.activeTerrainShader.uniforms.uRumbleAlpine.value=this.biome.alpine,this.activeTerrainShader.uniforms.uRumbleUrban.value=this.biome.urban,this.activeTerrainShader.uniforms.uRumbleGreen.value=this.biome.green);const r=this.frame.tileAddress(0,0),a=await ko(r.x,r.y,va);if(t!==this.generation)return;const o=Bo(a.heights,Ut,this.centerSegments);this.baseline=Go(o,this.centerSegments,this.frame.anchorU,this.frame.anchorV),this.install(0,0,a,this.centerSegments,o),this.ensureRegion(0,0)}key(n,t){return`${n},${t}`}address(n,t){return this.frame.tileAddress(n,t)}async ensureRegion(n,t){const i=this.frame;if(!i)return;const r=i.tileOffsetAt(n,t),a=r.dx,o=r.dz;if(this.coverage.x===a&&this.coverage.z===o)return;this.coverage={x:a,z:o};const s=this.generation,c=[],h=this.centerSegments;for(let d=o-1;d<=o+1;d++)for(let u=a-1;u<=a+1;u++){const g=this.key(u,d),m=u===a&&d===o?this.centerSegments:h,M=this.tiles.get(g);M&&M.segments!==m&&(this.group.remove(M.mesh),M.mesh.geometry.dispose(),this.tiles.delete(g));const E=`${s}:${g}`;if(this.tiles.has(g)||this.requests.has(E))continue;this.requests.add(E);const p=this.address(u,d);c.push(ko(p.x,p.y,va).then(l=>{s===this.generation&&Math.abs(u-this.coverage.x)<=1&&Math.abs(d-this.coverage.z)<=1&&this.install(u,d,l,m)}).finally(()=>this.requests.delete(E)))}for(const[d,u]of this.tiles)(Math.abs(u.dx-a)>1||Math.abs(u.dz-o)>1)&&(this.group.remove(u.mesh),u.mesh.geometry.dispose(),this.tiles.delete(d));await Promise.all(c)}install(n,t,i,r=63,a){const o=this.key(n,t);if(this.tiles.has(o))return;const s=performance.now(),c=this.frame,h=a??Bo(i.heights,Ut,r),d=new un,u=new Float32Array((r+1)**2*3),g=new Float32Array((r+1)**2*3),m=[],M=c.tileOrigin(n,t);for(let p=0;p<=r;p++)for(let l=0;l<=r;l++){const T=p*(r+1)+l,A=h[T];u[T*3]=M.x+l/r*c.tileSpan,u[T*3+1]=st.clamp((A-this.baseline)*1.25,-900,1800),u[T*3+2]=M.z-p/r*c.tileSpan,g[T*3]=g[T*3+1]=g[T*3+2]=1}for(let p=0;p<r;p++)for(let l=0;l<r;l++){const T=p*(r+1)+l,A=T+1,b=T+r+1,C=b+1;m.push(T,A,C,T,C,b)}d.setIndex(m),d.setAttribute("position",new Ot(u,3)),d.setAttribute("color",new zi(g,3)),d.computeVertexNormals();const E=new dt(d,this.material);E.receiveShadow=!0,E.userData.kind="terrain",this.group.add(E),this.tiles.set(o,{data:i,grid:h,mesh:E,segments:r,dx:n,dz:t}),this.reconcileSharedEdges(),this.tileBuildMs+=performance.now()-s,this.tileBuilds++}reconcileSharedEdges(){const n=Np(Array.from(this.tiles.values()));for(const t of n)this.rebuildGeometry(t)}rebuildGeometry(n){const{segments:t,grid:i,dx:r,dz:a}=n,o=this.frame,s=new un,c=new Float32Array((t+1)**2*3),h=new Float32Array((t+1)**2*3),d=[],u=o.tileOrigin(r,a);for(let g=0;g<=t;g++)for(let m=0;m<=t;m++){const M=g*(t+1)+m,E=i[M];c[M*3]=u.x+m/t*o.tileSpan,c[M*3+1]=st.clamp((E-this.baseline)*1.25,-900,1800),c[M*3+2]=u.z-g/t*o.tileSpan,h[M*3]=h[M*3+1]=h[M*3+2]=1}for(let g=0;g<t;g++)for(let m=0;m<t;m++){const M=g*(t+1)+m,E=M+1,p=M+t+1,l=p+1;d.push(M,E,l,M,l,p)}s.setIndex(d),s.setAttribute("position",new Ot(c,3)),s.setAttribute("color",new zi(h,3)),s.computeVertexNormals(),n.mesh.geometry.dispose(),n.mesh.geometry=s}heightAt(n,t){if(!this.frame||!this.tiles.size)return 0;const i=performance.now();let r=this.frame.tileOffsetAt(n,t);(r.dx!==this.coverage.x||r.dz!==this.coverage.z)&&this.ensureRegion(n,t);let a=this.tiles.get(this.key(r.dx,r.dz));if(a||(a=this.tiles.get(this.key(0,0)),r=this.frame.tileOffsetAt(n,t)),!a)return 0;const o=a===this.tiles.get(this.key(r.dx,r.dz))?r.u:st.clamp((n-this.frame.tileOrigin(a.dx,a.dz).x)/this.frame.tileSpan,0,1),s=a===this.tiles.get(this.key(r.dx,r.dz))?r.v:st.clamp((this.frame.tileOrigin(a.dx,a.dz).z-t)/this.frame.tileSpan,0,1),c=(Go(a.grid,a.segments,o,s)-this.baseline)*1.25;return this.heightSamples++,this.heightSampleMs+=performance.now()-i,c}takePerformanceSample(){const n={heightSamples:this.heightSamples,heightSampleMs:this.heightSampleMs,tileBuilds:this.tileBuilds,tileBuildMs:this.tileBuildMs};return this.heightSamples=0,this.heightSampleMs=0,this.tileBuilds=0,this.tileBuildMs=0,n}setVisualQuality(n){this.detailQuality=n==="low"?.45:n==="medium"?.72:1,this.activeTerrainShader&&(this.activeTerrainShader.uniforms.uRumbleDetail.value=this.detailQuality)}clear(){this.generation++;for(const n of this.tiles.values())this.group.remove(n.mesh),n.mesh.geometry.dispose();this.tiles.clear(),this.requests.clear(),this.coverage={x:NaN,z:NaN}}dispose(){this.clear(),this.material.dispose()}}function In(e,n=!1){const t=e[0].index!==null,i=new Set(Object.keys(e[0].attributes)),r=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new un;let h=0;for(let d=0;d<e.length;++d){const u=e[d];let g=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in u.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;a[m]===void 0&&(a[m]=[]),a[m].push(u.attributes[m]),g++}if(g!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(s!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in u.morphAttributes){if(!r.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;o[m]===void 0&&(o[m]=[]),o[m].push(u.morphAttributes[m])}if(n){let m;if(t)m=u.index.count;else if(u.attributes.position!==void 0)m=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,m,d),h+=m}}if(t){let d=0;const u=[];for(let g=0;g<e.length;++g){const m=e[g].index;for(let M=0;M<m.count;++M)u.push(m.getX(M)+d);d+=e[g].attributes.position.count}c.setIndex(u)}for(const d in a){const u=Ho(a[d]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;c.setAttribute(d,u)}for(const d in o){const u=o[d][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[d]=[];for(let g=0;g<u;++g){const m=[];for(let E=0;E<o[d].length;++E)m.push(o[d][E][g]);const M=Ho(m);if(!M)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;c.morphAttributes[d].push(M)}}return c}function Ho(e){let n,t,i,r=-1,a=0;for(let h=0;h<e.length;++h){const d=e[h];if(n===void 0&&(n=d.array.constructor),n!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=d.normalized),i!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=d.gpuType),r!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=d.count*t}const o=new n(a),s=new Ot(o,t,i);let c=0;for(let h=0;h<e.length;++h){const d=e[h];if(d.isInterleavedBufferAttribute){const u=c/t;for(let g=0,m=d.count;g<m;g++)for(let M=0;M<t;M++){const E=d.getComponent(g,M);s.setComponent(g+u,M,E)}}else o.set(d.array,c);c+=d.count*t}return r!==void 0&&(s.gpuType=r),s}function Rn(e,n){return e.map(([t,i])=>n.toLocal({lat:t,lon:i}))}const Vo=new Map;let _a=null;const Sa=(e="none")=>({buildings:[],roads:[],source:e});function Bp(e,n,t){return t.areas.find(i=>n>=i.bbox[0]&&e>=i.bbox[1]&&n<=i.bbox[2]&&e<=i.bbox[3])}function Nn(e){if(!e)return 0;const n=e.trim().replace(",",".").match(/^([+-]?(?:\d+(?:\.\d*)?|\.\d+))\s*(m|meters?|ft|feet|foot|')?$/i);if(!n)return 0;const t=Number(n[1]);return Number.isFinite(t)?t*(/^(ft|feet|foot|')$/i.test(n[2]??"")?.3048:1):0}function Gp(e,n=0){const t=Nn(e.height)||Nn(e["building:height"]),i=Number.parseFloat(e["building:levels"]??e.levels??""),r=Number.isFinite(i)&&i>0?i*3.2:0,a=Nn(e["roof:height"]),o=t>0?t:r>0?r+a:kp(e,n),s=Nn(e.min_height)||Nn(e["building:min_height"]);return{height:o,minHeight:s,source:t>0?"mapped height":r>0?"levels estimate":"type estimate"}}function Bs(e){const n=(e.building??"").toLowerCase(),t=`${e.amenity??""} ${e.shop??""} ${e.office??""} ${e.tourism??""}`.toLowerCase();return/industrial|warehouse|factory|manufacture/.test(`${n} ${e.industrial??""}`)?"industrial":/commercial|retail|office|hotel|apartments|civic|university|public/.test(n)||/hotel|motel|townhall|library|school|college|university|hospital|commercial|retail/.test(t)?"commercial":/house|residential|detached|terrace|semidetached_house|bungalow/.test(n)||/residential/.test(e["building:use"]??"")?"residential":"other"}function kp(e,n){switch(Bs(e)){case"commercial":return 14;case"industrial":return 8;case"residential":return 7.5;default:return n>1600?18:n>500?12:n>120?7:4.5}}function Pn(e){const n=(e.highway??"").toLowerCase();return!n||e.tunnel&&e.tunnel!=="no"||e.bridge&&e.bridge!=="no"?null:/^(motorway|motorway_link|trunk|trunk_link|primary|primary_link|secondary|secondary_link)$/.test(n)?"major":/^(residential|tertiary|tertiary_link|unclassified|living_street|service|road)$/.test(n)?"street":n==="track"?"track":/^(path|footway|bridleway|cycleway|pedestrian|steps)$/.test(n)?/dirt|gravel|ground|earth|sand|mud/.test(e.surface??"")?"track":"path":null}function Gs(e,n=Pn(e)){const t=Nn(e.width);if(t>0)return st.clamp(t,.8,18);const i=(e.surface??"").toLowerCase();return n==="major"?9:n==="street"?5.5:n==="path"?/^(steps|footway)$/.test(e.highway??"")?1.8:2.4:n==="track"?/gravel|dirt|ground|earth|sand|mud/.test(i)?3.4:2.6:0}function Hp(e,n,t,i=24){const r=[],a=[];for(const C of e){const R=(C.tags["name:en"]??C.tags.name)?.trim();if(!R||!Pn(C.tags)||C.coords.length<2)continue;const D=Rn(C.coords,n);for(let P=1;P<D.length;P++){const O=D[P-1],W=D[P],X=Math.hypot(W.x-O.x,W.z-O.z);X>1&&a.push({name:R.slice(0,48),ax:O.x,az:O.z,bx:W.x,bz:W.z,length:X})}const U=[0];for(let P=1;P<D.length;P++)U.push(U[P-1]+Math.hypot(D[P].x-D[P-1].x,D[P].z-D[P-1].z));const _=U.at(-1)??0;if(_<2.5)continue;const S=_<70?[_*.5]:Array.from({length:Math.max(1,Math.ceil((_-16)/48))},(P,O)=>Math.min(_-7,8+O*48));for(const P of S){let O=1;for(;O<U.length-1&&U[O]<P;)O++;const W=D[O-1],X=D[O],Z=Math.hypot(X.x-W.x,X.z-W.z)||1,q=st.clamp((P-U[O-1])/Z,0,1),le=W.x+(X.x-W.x)*q,V=W.z+(X.z-W.z)*q;r.push({name:R.slice(0,48),x:le,z:V,y:t(le,V)+1.45,dx:(X.x-W.x)/Z,dz:(X.z-W.z)/Z,segmentLength:Z})}}if(!r.length)return null;const o=st.clamp(Math.floor(i),1,64),s=8,c=256,h=48,d=document.createElement("canvas");d.width=s*c,d.height=Math.ceil(o/s)*h;const u=d.getContext("2d");if(!u)return null;const g=new Ls(d);g.colorSpace=tr,g.minFilter=xn,g.generateMipmaps=!0;const m=new Float32Array(o*12),M=new Float32Array(o*8),E=new Uint16Array(o*6);for(let C=0;C<o;C++){const R=C*4;E.set([R,R+1,R+2,R,R+2,R+3],C*6)}const p=new un;p.setAttribute("position",new Ot(m,3)),p.setAttribute("uv",new Ot(M,2)),p.setIndex(new Ot(E,1)),p.setDrawRange(0,0);const l=new nr({map:g,transparent:!0,depthTest:!0,depthWrite:!1,side:Nt,toneMapped:!1}),T=new dt(p,l);T.name="osm-street-name-atlas",T.renderOrder=3;let A="";const b=(C,R,D=0,U)=>{const _=Math.sin(D),S=Math.cos(D),P=[];let O=0,W=0;const X=L=>st.clamp(L*.025,.35,3.5);for(const L of a){const ae=L.bx-L.ax,j=L.bz-L.az,Ue=st.clamp(((C-L.ax)*ae+(R-L.az)*j)/(L.length*L.length),0,1),ue=L.ax+ae*Ue,Me=L.az+j*Ue,qe=Math.hypot(ue-C,Me-R);if(qe>150)continue;O++;const Ge=X(qe),x=Math.max(1,Math.ceil(L.length/Ge));for(let f=0;f<=x;f++){const F=f/x,z=L.ax+ae*F,Q=L.az+j*F,G=Math.hypot(z-C,Q-R);G<2.5||G>140||!U?.viewport&&(z-C)*_+(Q-R)*S<4||(P.push({name:L.name,x:z,z:Q,y:t(z,Q)+1.05,dx:ae/L.length,dz:j/L.length,segmentLength:L.length,priority:1}),W++)}}const Z=[...r,...P].map(L=>{const ae=L.x-C,j=L.z-R,Ue=Math.hypot(ae,j),ue=ae*_+j*S;return{item:L,d2:Ue*Ue,ahead:ue}}),q=L=>({dx:L.dx,dz:L.dz}),le=L=>st.clamp(L.name.length*.38,3.5,10.5),V=U?.viewport?st.clamp(U.viewport.width*.4,128,176):0,ve=V?V*h/c:0,Re=Z.filter(L=>L.d2<140**2),we=Re.filter(L=>L.d2>((L.item.priority??0)>0?(U?.viewport?2.5:13)**2:22**2)).map(L=>{const ae=U?.(L.item.x,L.item.y,L.item.z),j=ae?{x:ae.x,y:ae.y,z:ae.z,visible:ae.visible}:void 0,Ue=j?(j.z<-1||j.z>1?900:0)+(Math.abs(j.x)>.48?750:0)+(j.y>.35?750:0)+(j.y<-.68?500:0)+Math.abs(j.x)*18+Math.abs(j.y+.22)*24:0;let ue;if(j&&V&&U?.viewport&&U.screenFrame){const f=U.screenFrame(L.item.x,L.item.y,L.item.z),F=U(L.item.x+L.item.dx,L.item.y,L.item.z+L.item.dz),z=(F.x-j.x)*U.viewport.width,Q=-(F.y-j.y)*U.viewport.height,G=Math.abs(z)>.02?st.clamp(Math.atan2(Q,z),-.32,.32):0,xe=[f.right[0]*Math.cos(G)+f.up[0]*Math.sin(G),f.right[1]*Math.cos(G)+f.up[1]*Math.sin(G),f.right[2]*Math.cos(G)+f.up[2]*Math.sin(G)],ee=[f.up[0]*Math.cos(G)-f.right[0]*Math.sin(G),f.up[1]*Math.cos(G)-f.right[1]*Math.sin(G),f.up[2]*Math.cos(G)-f.right[2]*Math.sin(G)],he=V*.5*f.worldPerPixel,ge=ve*.5*f.worldPerPixel,te=(Ee,_e)=>{const de=U(L.item.x+xe[0]*Ee+ee[0]*_e,L.item.y+xe[1]*Ee+ee[1]*_e,L.item.z+xe[2]*Ee+ee[2]*_e);return{x:de.x,y:de.y,z:de.z}},se=[te(-he,-ge),te(he,-ge),te(he,ge),te(-he,ge)];ue={left:Math.min(...se.map(Ee=>Ee.x)),right:Math.max(...se.map(Ee=>Ee.x)),top:Math.max(...se.map(Ee=>Ee.y)),bottom:Math.min(...se.map(Ee=>Ee.y))}}const Me=!!j&&j.z>-1&&j.z<1&&Math.abs(j.x)<=1&&Math.abs(j.y)<=1,qe=!U?.viewport||V<=U.viewport.width*.72&&ve<=U.viewport.height*.18,Ge=!ue||ue.left>=-.96&&ue.right<=.96&&ue.top<=.74&&ue.bottom>=-.72&&j.z>-1&&j.z<1;return{...L,screen:j,bounds:ue,inFrustum:Me,projectedTextDimensionsValid:qe,fitsViewport:Ge,rejectReason:Me?qe?Ge?void 0:"viewport-bounds":"text-dimensions":"frustum",score:(j?Math.abs(j.x)*55+Math.abs(j.y+.18)*18:Math.sqrt(L.d2))+Math.sqrt(L.d2)*.04+Ue*3-(L.item.priority??0)*8}}),Ve=we.filter(L=>L.fitsViewport&&(!L.screen||Math.abs(L.screen.x)<1.02&&L.screen.y>-.94&&L.screen.y<.78)).sort((L,ae)=>L.score-ae.score);Ve.length;const We=[],je=new Map,Xe=[];let B=0,K=0;for(const{item:L,screen:ae}of Ve){if(U&&ae&&ae.z>-1&&ae.z<1&&Math.abs(ae.x)<.75&&ae.y>-.8&&ae.y<.6&&B<8&&(B++,U(L.x,L.y,L.z,!0).visible===!1)){K++;continue}const j=we.find(Ge=>Ge.item===L)?.bounds,Ue=U?.viewport?36/U.viewport.width*2:.05,ue=U?.viewport?28/U.viewport.height*2:.06;if(j&&Xe.some(Ge=>j.left<Ge.right+Ue&&j.right>Ge.left-Ue&&j.bottom<Ge.top+ue&&j.top>Ge.bottom-ue))continue;const Me=L.name.toLocaleLowerCase(),qe=je.get(Me)??[];if(!qe.some(Ge=>(Ge.x-L.x)**2+(Ge.z-L.z)**2<38**2)&&(qe.push(L),je.set(Me,qe),We.push(L),j&&Xe.push(j),We.length>=o))break}const me=[...new Set(We.map(L=>L.name))].sort((L,ae)=>L.localeCompare(ae)),De=me.join("\0"),Ce=new Map(me.map((L,ae)=>[L,ae]));De!==A&&(u.clearRect(0,0,d.width,d.height),u.font="700 32px Arial, sans-serif",u.textAlign="center",u.textBaseline="middle",u.lineJoin="round",u.lineWidth=8,me.forEach((L,ae)=>{const j=ae%s*c+c/2,Ue=Math.floor(ae/s)*h+h/2;u.strokeStyle="rgba(15,20,22,.96)",u.strokeText(L,j,Ue,c-10),u.fillStyle="rgba(255,255,245,.99)",u.fillText(L,j,Ue,c-10)}),g.needsUpdate=!0,A=De);const ke=p.getAttribute("position"),ft=p.getAttribute("uv");We.forEach((L,ae)=>{const j=q(L),Ue=t(L.x,L.z)+1.05,ue=[L.x,Ue,L.z],Me=U?.screenFrame?.(L.x,Ue,L.z);let qe;if(we.find(ee=>ee.item===L)?.bounds,Me&&U?.viewport&&V){const ee=U(L.x,Ue,L.z),he=U(L.x+j.dx,Ue,L.z+j.dz),ge=(he.x-ee.x)*U.viewport.width,te=-(he.y-ee.y)*U.viewport.height,se=Math.abs(ge)>.02?st.clamp(Math.atan2(te,ge),-.32,.32):0,Ee=[Me.right[0]*Math.cos(se)+Me.up[0]*Math.sin(se),Me.right[1]*Math.cos(se)+Me.up[1]*Math.sin(se),Me.right[2]*Math.cos(se)+Me.up[2]*Math.sin(se)],_e=[Me.up[0]*Math.cos(se)-Me.right[0]*Math.sin(se),Me.up[1]*Math.cos(se)-Me.right[1]*Math.sin(se),Me.up[2]*Math.cos(se)-Me.right[2]*Math.sin(se)],de=V*.5*Me.worldPerPixel,Fe=ve*.5*Me.worldPerPixel,y=(ie,ce)=>[ue[0]+Ee[0]*ie+_e[0]*ce,ue[1]+Ee[1]*ie+_e[1]*ce,ue[2]+Ee[2]*ie+_e[2]*ce];qe=[y(-de,-Fe),y(de,-Fe),y(de,Fe),y(-de,Fe)]}else{const ee=le(L),he=.66,ge=j.dx,te=j.dz;qe=[[L.x-ge*ee,Ue-he,L.z-te*ee],[L.x+ge*ee,Ue-he,L.z+te*ee],[L.x+ge*ee,Ue+he,L.z+te*ee],[L.x-ge*ee,Ue+he,L.z-te*ee]]}qe.forEach((ee,he)=>ke.setXYZ(ae*4+he,ee[0],ee[1],ee[2]));const Ge=Ce.get(L.name),x=Ge%s,f=Math.floor(Ge/s),F=d.height/h,z=x/s,Q=(x+1)/s,G=1-(f+1)/F,xe=1-f/F;ft.setXY(ae*4,z,G),ft.setXY(ae*4+1,Q,G),ft.setXY(ae*4+2,Q,xe),ft.setXY(ae*4+3,z,xe)}),ke.needsUpdate=!0,ft.needsUpdate=!0,p.setDrawRange(0,We.length*6),p.computeBoundingSphere(),T.userData.labelCount=We.length,T.userData.candidateCount=r.length,T.userData.nearbyCount=Ve.length,T.userData.currentRoadLabels=P.length,T.userData.occludedCount=K,T.userData.labels=We.map(L=>{const ae=q(L),j=we.find(Ue=>Ue.item===L);return{name:L.name,x:L.x,y:L.y,z:L.z,dx:ae.dx,dz:ae.dz,screenBounds:j?.bounds}});const w=we.filter(L=>L.item.name.toLocaleLowerCase()==="center street").sort((L,ae)=>L.d2-ae.d2).slice(0,80).map(L=>({x:L.item.x,y:L.item.y,z:L.item.z,priority:L.item.priority??0,distance:Math.sqrt(L.d2),screen:L.screen,bounds:L.bounds,inFrustum:L.inFrustum,projectedTextDimensionsValid:L.projectedTextDimensionsValid,fitsViewport:L.fitsViewport,rejectReason:L.rejectReason})),it=we.filter(L=>L.screen).sort((L,ae)=>Math.hypot(L.screen.x,L.screen.y+.18)-Math.hypot(ae.screen.x,ae.screen.y+.18)).slice(0,24).map(L=>({name:L.item.name,x:L.item.x,z:L.item.z,distance:Math.sqrt(L.d2),screen:L.screen,bounds:L.bounds,rejectReason:L.rejectReason}));T.userData.diagnostics={namedRoadSegments:a.length,roadSegmentsNearPlayer:O,cameraSamples:W,generatedBaseLabels:r.length,generatedCurrentStreetCandidates:P.length,generatedCandidates:Z.length,withinPlayerRange:Re.length,rejectedTooNear:Re.length-we.length,acceptedDistanceRange:we.length,inCameraFrustum:we.filter(L=>L.inFrustum).length,rejectedOutsideFrustum:we.filter(L=>!L.inFrustum).length,rejectedViewportBounds:we.filter(L=>L.inFrustum&&!L.fitsViewport).length,rejectedProjectedTextDimensions:we.filter(L=>!L.projectedTextDimensionsValid).length,occlusionTests:B,rejectedOcclusion:K,selectedLabelCount:We.length,drawRange:p.drawRange.count,meshVisible:T.visible,meshInScene:T.parent!==null,labelWidthPx:V,labelHeightPx:ve,centerStreetCandidates:w,bestProjectedCandidates:it}};return T.userData={kind:"osm-street-labels",labelCount:0,candidateCount:r.length,nearbyCount:0,currentRoadLabels:0,occludedCount:0,texture:g,refresh:b},b(0,0,0),T}async function Vp(e){_a||(_a=fetch("./geo/manifest.json").then(a=>a.ok?a.json():null).catch(()=>null));const n=await _a;if(!n)return Sa("coverage manifest unavailable");const t=Bp(e.lat,e.lon,n);if(!t)return Sa();const i=Vo.get(t.id);if(i)return i;const r=fetch(`./geo/${t.asset}`).then(async a=>{if(!a.ok)throw new Error(`Geographic package ${t.id} unavailable (${a.status})`);const o=await a.json();return{buildings:o.buildings??[],roads:o.roads??[],source:o.source??t.source,areaId:t.id}}).catch(()=>Sa("geographic package unavailable"));return Vo.set(t.id,r),r}function Mi(e,n){const t=new xt({color:e,roughness:.96,metalness:0});return t.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vRumbleRoadUv;`),i.vertexShader=i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vRumbleRoadUv = uv;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vRumbleRoadUv;
float roadHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float roadNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(roadHash(i),roadHash(i+vec2(1.,0.)),f.x),mix(roadHash(i+vec2(0.,1.)),roadHash(i+vec2(1.,1.)),f.x),f.y);}`);let r="float aggregate=roadNoise(vRumbleRoadUv*vec2(4.8,.075));float grit=roadNoise(vRumbleRoadUv*vec2(78.,13.));float patchNoise=aggregate;diffuseColor.rgb*=.86+aggregate*.18+grit*.045+(patchNoise-.5)*.09;";n==="major"?r+="float edge=1.0-smoothstep(0.012,0.024,min(vRumbleRoadUv.x,1.0-vRumbleRoadUv.x));float dash=step(0.48,fract(vRumbleRoadUv.y/11.0));float center=1.0-smoothstep(0.003,0.009,abs(vRumbleRoadUv.x-0.5));float shoulder=1.0-smoothstep(.026,.04,min(vRumbleRoadUv.x,1.0-vRumbleRoadUv.x));diffuseColor.rgb=mix(diffuseColor.rgb,vec3(0.74,0.67,0.52),edge*0.58);diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*0.72,shoulder*.2);diffuseColor.rgb=mix(diffuseColor.rgb,vec3(0.84,0.81,0.72),center*dash*0.66);":n==="street"?r+="float edge=1.0-smoothstep(0.012,0.03,min(vRumbleRoadUv.x,1.0-vRumbleRoadUv.x));float roadWear=aggregate;float fineWear=grit;diffuseColor.rgb=mix(diffuseColor.rgb,vec3(0.54,0.51,0.45),edge*0.34);diffuseColor.rgb*=.96+roadWear*.055+(fineWear-.5)*.045;":r+="float edge=1.0-smoothstep(0.012,0.045,min(vRumbleRoadUv.x,1.0-vRumbleRoadUv.x));float trackGrain=roadNoise(vRumbleRoadUv*vec2(22.,4.));diffuseColor.rgb*=.88+trackGrain*.22;diffuseColor.rgb=mix(diffuseColor.rgb,vec3(0.56,0.48,0.34),edge*0.25);",i.fragmentShader=i.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
${r}`)},t.customProgramCacheKey=()=>`rumble-road-${n}-surface-v3`,t}const zo={major:Mi(2698801,"major"),street:Mi(3553338,"street"),path:Mi(7828584,"path"),track:Mi(8413251,"track")},zp={residential:11705472,commercial:9410456,industrial:7830390,other:10524549};function Wp(e,n){const t=new xt({color:n,roughness:e==="commercial"?.66:.82,metalness:e==="commercial"?.1:.025,side:Nt,emissive:n,emissiveIntensity:.025});return t.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
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
      diffuseColor.rgb*=mix(.95,1.05,roofNoise)*mix(0.96,1.035,roofNoise*(1.0-facadeSide)*0.62);`)},t.customProgramCacheKey=()=>`rumble-building-facade-${e}-v4`,t}const Wo=Object.fromEntries(Object.entries(zp).map(([e,n])=>[e,Wp(e,n)]));function Xo(e,n,t){const i=Pn(e.tags);if(!i||e.coords.length<2)return null;const r=Rn(e.coords,n).filter(m=>Number.isFinite(m.x)&&Number.isFinite(m.z));if(r.length<2)return null;const a=Gs(e.tags,i),o=[],s=[];for(let m=0;m<r.length;m++){const M=r[Math.max(0,m-1)],E=r[Math.min(r.length-1,m+1)],p=E.x-M.x,l=E.z-M.z,T=Math.hypot(p,l)||1;let A=-l/T,b=p/T;if(m>0&&m<r.length-1){const C=r[m-1],R=r[m],D=r[m+1],U=Math.hypot(R.x-C.x,R.z-C.z)||1,_=Math.hypot(D.x-R.x,D.z-R.z)||1,S=-(R.z-C.z)/U-(D.z-R.z)/_,P=(R.x-C.x)/U+(D.x-R.x)/_,O=Math.hypot(S,P)||1;A=S/O,b=P/O;const W=Math.max(.45,Math.abs(A*(-l/T)+b*(p/T))),X=Math.min(a*.9,a*.5/W);o.push(new ut(R.x+A*X,R.z+b*X)),s.push(new ut(R.x-A*X,R.z-b*X))}else o.push(new ut(r[m].x+A*a/2,r[m].z+b*a/2)),s.push(new ut(r[m].x-A*a/2,r[m].z-b*a/2))}const c=[],h=[],d=[0];for(let m=1;m<r.length;m++)d.push(d[m-1]+Math.hypot(r[m].x-r[m-1].x,r[m].z-r[m-1].z));const u=(m,M,E,p)=>{c.push(m.x,t(m.x,m.y)+M,m.y),h.push(E,p)};for(let m=0;m<r.length-1;m++)u(o[m],.1,0,d[m]),u(o[m+1],.1,0,d[m+1]),u(s[m],.1,1,d[m]),u(s[m],.1,1,d[m]),u(o[m+1],.1,0,d[m+1]),u(s[m+1],.1,1,d[m+1]);const g=new un;return g.setAttribute("position",new zi(c,3)),g.setAttribute("uv",new zi(h,2)),{kind:i,geometry:g,width:a}}function Xp(e,n,t=60){let i=t*t,r;for(const a of e){const o=Pn(a.tags);if(!o||o==="path"||a.coords.length<2)continue;const s=Rn(a.coords,n);for(let c=0;c<s.length-1;c++){const h=s[c],d=s[c+1],u=d.x-h.x,g=d.z-h.z,m=u*u+g*g;if(m<.01)continue;const M=st.clamp(-(h.x*u+h.z*g)/m,0,1),E=h.x+u*M,p=h.z+g*M,l=E*E+p*p;l<i&&(i=l,r=Math.atan2(u,g))}}return r}class qp{group=new Yt;roadsGroup=new Yt;list=[];status={source:"none",buildings:0,roads:0,fallbacks:0,skippedRoads:0,message:"MAP DATA · LOADING"};progress={phase:"idle",complete:0,total:0};loadToken=0;cellSize=256;cells=new Map;visibleBuildings=new Set;collisionBuildings=new Set;roads=[];labels=null;lastLabelUpdate=0;get streetLabelCount(){return Number(this.labels?.userData.labelCount??0)}get activeCollisionCount(){return this.collisionBuildings.size}get sceneryRoads(){return this.roads}get streetLabelPositions(){return this.labels?.userData.labels??[]}get streetLabelAtlasImage(){return this.labels?.userData.texture?.image}get streetLabelGeometryDebug(){const n=this.labels?.geometry,t=n?.getAttribute("position"),i=n?.getAttribute("uv");return{visible:this.labels?.visible,count:this.streetLabelCount,candidateCount:this.labels?.userData.candidateCount,nearbyCount:this.labels?.userData.nearbyCount,currentRoadLabels:this.labels?.userData.currentRoadLabels,occludedCount:this.labels?.userData.occludedCount,drawCount:n?.drawRange.count,positions:t?Array.from(t.array.slice(0,12)):[],uvs:i?Array.from(i.array.slice(0,8)):[],material:this.labels?.material&&this.labels.material.map?.image?{transparent:this.labels.material.transparent,depthTest:this.labels.material.depthTest,opacity:this.labels.material.opacity}:null}}get streetLabelDiagnostics(){return this.labels?.userData.diagnostics??null}updateStreetLabels(n,t,i,r,a=!1){!this.labels||!a&&performance.now()-this.lastLabelUpdate<500||(this.lastLabelUpdate=performance.now(),this.labels.userData.refresh?.(n,t,i,r))}lastCullAt=0;lastCullX=Number.NaN;lastCullZ=Number.NaN;cellKey(n,t){return`${Math.floor(n/this.cellSize)},${Math.floor(t/this.cellSize)}`}updateVisibility(n,t,i=900,r=!1){const a=performance.now();if(!r&&(a-this.lastCullAt<350||Math.hypot(n-this.lastCullX,t-this.lastCullZ)<10))return;this.lastCullAt=a,this.lastCullX=n,this.lastCullZ=t;const o=Math.ceil(i/this.cellSize),s=Math.floor(n/this.cellSize),c=Math.floor(t/this.cellSize),h=new Set;for(let u=s-o;u<=s+o;u++)for(let g=c-o;g<=c+o;g++)for(const m of this.cells.get(`${u},${g}`)??[])h.add(m);const d=i*i;for(const u of[...this.visibleBuildings])!u.broken&&h.has(u)&&(u.x-n)**2+(u.z-t)**2<=d||(u.batch&&u.instanceId!==void 0&&u.batch.setVisibleAt(u.instanceId,!1),this.visibleBuildings.delete(u));for(const u of h)!u.broken&&(u.x-n)**2+(u.z-t)**2<=d&&!this.visibleBuildings.has(u)&&(u.batch&&u.instanceId!==void 0&&u.batch.setVisibleAt(u.instanceId,!0),this.visibleBuildings.add(u))}updateCollisionWindow(n,t,i,r=120,a=!1){if(!i)return;const o=performance.now();if(!a&&o-this.lastCollisionSync<300&&Math.hypot(n-this.lastCollisionX,t-this.lastCollisionZ)<12)return;this.lastCollisionSync=o,this.lastCollisionX=n,this.lastCollisionZ=t;const s=Math.ceil((r+80)/this.cellSize),c=Math.floor(n/this.cellSize),h=Math.floor(t/this.cellSize),d=new Set;for(let g=c-s;g<=c+s;g++)for(let m=h-s;m<=h+s;m++)for(const M of this.cells.get(`${g},${m}`)??[])d.add(M);const u=r+72;for(const g of[...this.collisionBuildings]){const m=Math.hypot(g.w,g.d)*.5;(g.broken||(g.x-n)**2+(g.z-t)**2>(u+m)**2)&&(i.removeBuilding(g),this.collisionBuildings.delete(g))}for(const g of d){if(g.broken||this.collisionBuildings.has(g))continue;const m=Math.hypot(g.w,g.d)*.5;(g.x-n)**2+(g.z-t)**2<=(r+m)**2&&(i.addBuilding(g,g.baseY??0),this.collisionBuildings.add(g))}}lastCollisionSync=0;lastCollisionX=Number.NaN;lastCollisionZ=Number.NaN;async load(n,t,i,r){this.reset(i);const a=this.loadToken;this.progress={phase:"features",complete:0,total:0};const o=await Vp(n);if(a!==this.loadToken)return this.status;this.progress={phase:"buildings",complete:0,total:o.buildings.length},this.roads=o.roads;const s=new Map;let c=0;for(const M of o.buildings){this.progress.complete=++c;const E=Rn(M.coords,r).map(B=>new ut(B.x,B.z));E.length>3&&E[0].distanceToSquared(E[E.length-1])<.01&&E.pop();const p=E.map(B=>B.x),l=E.map(B=>B.y);if(E.length<3)continue;const T=(Math.min(...p)+Math.max(...p))/2,A=(Math.min(...l)+Math.max(...l))/2,b=Math.max(2,Math.max(...p)-Math.min(...p)),C=Math.max(2,Math.max(...l)-Math.min(...l)),R=B=>Rn(B,r).map(K=>new ut(K.x-T,-(K.z-A))),D=B=>{const K=new Pc;return B.forEach((me,De)=>De?K.lineTo(me.x,me.y):K.moveTo(me.x,me.y)),K.closePath(),K},U=E.map(B=>new ut(B.x-T,-(B.y-A))),_=new Ha;U.forEach((B,K)=>K?_.lineTo(B.x,B.y):_.moveTo(B.x,B.y)),_.closePath();const S=(M.holes??[]).map(R).filter(B=>B.length>=3);for(const B of S)_.holes.push(D(B));const P=Bs(M.tags),O=Gp(M.tags,b*C),W=O.height,X=new Ps(_,{depth:1,bevelEnabled:!1,curveSegments:1});X.rotateX(-Math.PI/2),X.scale(1,W,1);const Z=Wo[P],q=new $e(Z.color);if(M.tags["building:colour"]||M.tags.colour)try{q.set(M.tags["building:colour"]??M.tags.colour)}catch{}const le=new dt(X,Z);le.position.set(T,t(T,A)+O.minHeight,A),le.castShadow=!0,le.receiveShadow=!0,le.userData={kind:"osm-building",osmId:M.id,tags:M.tags,category:P};const V=t(T,A),ve={id:M.id,source:"osm",category:P,mesh:le,x:T,z:A,w:b,d:C,h:W,minHeight:O.minHeight,footprint:E,holes:S.map(B=>B.map(K=>new ut(K.x+T,A-K.y))),tags:M.tags,baseY:V,broken:!1},Re=new $e;Re.r=Z.color.r>0?q.r/Z.color.r:1,Re.g=Z.color.g>0?q.g/Z.color.g:1,Re.b=Z.color.b>0?q.b/Z.color.b:1;let we=2166136261;for(const B of String(M.id))we=Math.imul(we^B.charCodeAt(0),16777619);const Ve=.91+(we>>>0)%1e3/1e3*.17;Re.multiplyScalar(Ve),ve.mesh.userData.instanceColor=Re,this.list.push(ve);const We=this.cellKey(T,A),je=this.cells.get(We)??[];je.push(ve),this.cells.set(We,je);const Xe=s.get(P)??[];if(Xe.push(ve),s.set(P,Xe),c%128===0&&(await new Promise(B=>setTimeout(B,0)),a!==this.loadToken))return this.status}this.progress.phase="batching";for(const[M,E]of s){const p=E.map(b=>b.mesh.geometry),l=p.reduce((b,C)=>b+C.getAttribute("position").count,0),T=p.reduce((b,C)=>b+(C.index?.count??C.getAttribute("position").count),0),A=new yc(E.length,l,Math.max(l,T),Wo[M]);A.name=`geographic-buildings-${M}`,A.castShadow=!0,A.receiveShadow=!0;for(const b of E){const C=b.mesh;C.updateMatrix();const R=A.addGeometry(C.geometry),D=A.addInstance(R);A.setMatrixAt(D,C.matrix),A.setColorAt(D,C.userData.instanceColor),b.batch=A,b.instanceId=D,b.mesh=A,b.renderVisible=!0,C.geometry.dispose()}A.computeBoundingBox(),A.computeBoundingSphere(),this.group.add(A)}this.progress.phase="colliders",this.progress.complete=0,this.progress.total=this.list.length,this.updateCollisionWindow(0,0,i,120,!0),this.progress.total=this.collisionBuildings.size,this.progress.complete=this.collisionBuildings.size,this.updateVisibility(0,0,900,!0),this.progress.phase="roads",this.progress.complete=0,this.progress.total=o.roads.length;let h=0,d=0;const u={major:[],street:[],path:[],track:[]};let g=0;for(const M of o.roads){this.progress.complete=++g;const E=Xo(M,r,t);if(!E){d++;continue}if(u[E.kind].push({positions:E.geometry.getAttribute("position").array,uvs:E.geometry.getAttribute("uv").array}),E.geometry.dispose(),h++,g%256===0&&(await new Promise(p=>setTimeout(p,0)),a!==this.loadToken))return this.status}for(const M of["major","street","path","track"]){const E=u[M];if(!E.length)continue;const p=E.reduce((D,U)=>D+U.positions.length,0),l=new Float32Array(p),T=new Float32Array(p/3*2);let A=0,b=0;for(const D of E)l.set(D.positions,A),T.set(D.uvs,b),A+=D.positions.length,b+=D.uvs.length;const C=new un;C.setAttribute("position",new Ot(l,3)),C.setAttribute("uv",new Ot(T,2)),C.computeVertexNormals();const R=new dt(C,zo[M]);R.receiveShadow=!0,R.name=`osm-road-${M}`,R.userData={kind:"osm-road",roadWays:E.length},R.frustumCulled=!0,this.roadsGroup.add(R)}this.labels=Hp(o.roads,r,t),this.labels&&this.roadsGroup.add(this.labels);const m=o.buildings.length>0||h>0;return this.progress={phase:"complete",complete:o.roads.length,total:o.roads.length},this.status={source:m?"osm":"none",areaId:o.areaId,buildings:o.buildings.length,roads:h,fallbacks:0,skippedRoads:d,heading:Xp(o.roads,r),message:m?`OSM MAP · ${o.buildings.length} BUILDINGS · ${h} STREET/PATH LINES`:o.source==="none"?"TERRAIN ONLY · NO PACKAGED MAP DATA":"MAP DATA PACKAGE UNAVAILABLE · TERRAIN ONLY"},this.status}nearestStreetName(n,t,i,r=45){let a=r*r,o="";for(const s of this.roads){const c=s.tags["name:en"]??s.tags.name;if(!c||!Pn(s.tags)||Pn(s.tags)==="path")continue;const h=Rn(s.coords,i);for(let d=0;d<h.length-1;d++){const u=h[d],g=h[d+1],m=g.x-u.x,M=g.z-u.z,E=m*m+M*M;if(E<.01)continue;const p=st.clamp(((n-u.x)*m+(t-u.z)*M)/E,0,1),l=u.x+m*p,T=u.z+M*p,A=(l-n)**2+(T-t)**2;A<a&&(a=A,o=c)}}return o}addFixtureRoad(n,t){const i=[-12,140].map(o=>{const s=n.toGeo({x:0,z:o});return[s.lat,s.lon]}),r=Xo({tags:{highway:"track",surface:"dirt",width:"4"},coords:i},n,t);if(!r)return null;r.geometry.computeVertexNormals();const a=new dt(r.geometry,zo.track);return a.name="fixture-dirt-track",a.userData={kind:"fixture-road",source:"fixture"},this.roadsGroup.add(a),a}addPracticeCourse(n,t){return this.list.some(i=>i.source==="fallback")?0:(this.addBarriers(n,t),this.status.fallbacks=this.list.filter(i=>i.source==="fallback").length,this.status.fallbacks)}addBarriers(n,t){const i=new xt({color:13132085,roughness:.8});for(let r=0;r<4;r++)for(let a=-2;a<=2;a++){if((r+a)%3===0)continue;const o=3+(r*7+a*11+30)%3,s=3,c=2.5+(r*13+a*5+40)%3,h=a*5,d=28+r*9,u=new dt(new dn(o,c,s),i.clone());u.position.set(h,n(h,d)+c/2,d),u.castShadow=!0,u.receiveShadow=!0,u.userData={kind:"destructible-barrier",ownedMaterial:!0},this.group.add(u);const g={id:`practice-${r}-${a}`,source:"fallback",category:"practice",mesh:u,x:h,z:d,w:o,d:s,h:c,broken:!1};g.baseY=n(h,d),this.list.push(g),t?.addBuilding(g,g.baseY)}}addFixtureBuilding(n,t,i,r,a,o={w:7,d:6,h:9}){const{w:s,d:c,h}=o,d=new dn(s,h,c),u=new xt({color:11705472,roughness:.9}),g=r(t,i),m=new dt(d,u);m.position.set(t,g+h/2,i),m.castShadow=!0,m.receiveShadow=!0,m.userData.ownedMaterial=!0,m.userData={kind:"local-test-fixture",fixtureId:n},this.group.add(m);const M={id:n,source:"fixture",category:h>18?"commercial":"residential",mesh:m,x:t,z:i,w:s,d:c,h,baseY:g,broken:!1};return this.list.push(M),a?.addBuilding(M,g),M}break(n){return n.broken||n.mesh.parent!==this.group?!1:(n.broken=!0,this.visibleBuildings.delete(n),n.batch&&n.instanceId!==void 0?n.batch.setVisibleAt(n.instanceId,!1):(this.group.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.userData.ownedMaterial&&(Array.isArray(n.mesh.material)?n.mesh.material.forEach(t=>t.dispose()):n.mesh.material.dispose())),!0)}reset(n){this.loadToken++;for(const t of this.collisionBuildings)n?.removeBuilding(t);this.collisionBuildings.clear();for(const t of this.list)t.batch||t.mesh.geometry.dispose();for(const t of[...this.group.children]){this.group.remove(t);const i=t;i.geometry?.dispose(),i.userData.ownedMaterial&&(Array.isArray(i.material)?i.material.forEach(r=>r.dispose()):i.material?.dispose())}for(const t of this.roadsGroup.children){this.roadsGroup.remove(t);const i=t;i.geometry.dispose(),i===this.labels&&(i.userData.texture?.dispose(),i.material.dispose())}this.labels=null,this.roads=[],this.lastLabelUpdate=0,this.lastCollisionSync=0,this.lastCollisionX=Number.NaN,this.lastCollisionZ=Number.NaN,this.list=[],this.cells.clear(),this.visibleBuildings.clear(),this.lastCullAt=0,this.lastCullX=Number.NaN,this.lastCullZ=Number.NaN,this.status={source:"none",buildings:0,roads:0,fallbacks:0,skippedRoads:0,message:"MAP DATA · LOADING"},this.progress={phase:"idle",complete:0,total:0}}}const Ma=34,qo=e=>{let n=2166136261;for(const t of e)n=Math.imul(n^t.charCodeAt(0),16777619);return n>>>0},mt=e=>{let n=e>>>0;return n=Math.imul(n^n>>>16,73244475),n=Math.imul(n^n>>>16,73244475),((n^n>>>16)>>>0)/4294967296},Yp=(e,n,t)=>{const i=t.bx-t.ax,r=t.bz-t.az,a=i*i+r*r,o=a>1e-6?st.clamp(((e-t.ax)*i+(n-t.az)*r)/a,0,1):0;return(e-(t.ax+i*o))**2+(n-(t.az+r*o))**2};function Kp(e,n,t,i,r,a,o){const s=`${e.name} ${e.terrain??""}`.toLowerCase(),c=/moab|grand canyon|sahara|utah|arizona|desert/.test(s),h=/mount kisco|westchester|forest|woodland|green hills/.test(s);if(!c&&!h)return[];const d=[];for(const T of r){const A=Pn(T.tags);if(!A)continue;const b=Rn(T.coords,i),C=Gs(T.tags,A)*.5+7;for(let R=1;R<b.length;R++)d.push({ax:b[R-1].x,az:b[R-1].z,bx:b[R].x,bz:b[R].z,clearance:C})}const u=a.map(T=>({minX:T.x-T.w*.5-4,maxX:T.x+T.w*.5+4,minZ:T.z-T.d*.5-4,maxZ:T.z+T.d*.5+4})),g=qo(`${e.name}:${e.lat.toFixed(4)}:${e.lon.toFixed(4)}`),m=[],M=Math.ceil(560/Ma),E=24**2,p=560**2;for(let T=-M;T<=M;T++)for(let A=-M;A<=M;A++){const b=qo(`${g}:${A}:${T}`),C=n+(A+.5+(mt(b)-.5)*.55)*Ma,R=t+(T+.5+(mt(b^2654435769)-.5)*.55)*Ma,D=(C-n)**2+(R-t)**2;if(D<E||D>p||mt(b^2246822507)>(c?.58:.5)||u.some(_=>C>=_.minX&&C<=_.maxX&&R>=_.minZ&&R<=_.maxZ)||d.some(_=>Yp(C,R,_)<_.clearance**2))continue;const U=c?mt(b^3266489909)<.52?"rock":"shrub":mt(b^668265263)<.62?"tree":"shrub";m.push({x:C,z:R,kind:U,scale:.72+mt(b^374761393)*.82,yaw:mt(b^3550635116)*Math.PI*2,seed:b})}const l=o==="low"?260:o==="medium"?440:680;return m.sort((T,A)=>(T.x-n)**2+(T.z-t)**2-((A.x-n)**2+(A.z-t)**2)),m.slice(0,l)}class $p{group=new Yt;quality="low";points=[];lastCell="";frame=null;groundAt=null;roads=[];buildings=[];center={x:0,z:0};place=null;total=0;capacity=680;rockMesh;shrubMesh;trunkMesh;canopyMesh;matrix=new Ft;position=new ne;scale=new ne;quaternion=new Gt;color=new $e;constructor(){const n=new Va(.5,1);n.computeVertexNormals();const t=new Va(.5,1);t.computeVertexNormals();const i=new Di(.09,.16,1,7,1,!1),r=[new lo(.82,1.55,7,2),new lo(.62,1.15,7,2)];r[0].translate(0,.5,0),r[1].translate(0,1.25,0);const a=In(r,!1);r.forEach(s=>s.dispose());const o=(s,c,h)=>{const d=new en(s,new xt({color:c,roughness:.94,metalness:0,flatShading:!0}),this.capacity);return d.count=0,d.name=h,d.castShadow=!1,d.receiveShadow=!1,d.frustumCulled=!0,this.group.add(d),d};this.rockMesh=o(n,16777215,"scenery-desert-rocks"),this.shrubMesh=o(t,16777215,"scenery-low-shrubs"),this.trunkMesh=o(i,16777215,"scenery-tree-trunks"),this.canopyMesh=o(a,16777215,"scenery-tree-canopies")}setLocation(n,t,i,r,a){this.place=n,this.frame=t,this.groundAt=i,this.roads=r,this.buildings=a,this.lastCell="",this.refresh(0,0,!0)}setQuality(n){this.quality=n,this.place&&(this.lastCell="",this.refresh(this.center.x,this.center.z,!0))}update(n,t){if(!this.place||!this.frame||!this.groundAt)return;`${Math.floor(n/240)},${Math.floor(t/240)}`!==this.lastCell&&this.refresh(n,t,!0)}refresh(n,t,i){!this.place||!this.frame||!this.groundAt||!i&&!this.points.length||(this.center={x:n,z:t},this.lastCell=`${Math.floor(n/240)},${Math.floor(t/240)}`,this.points=Kp(this.place,n,t,this.frame,this.roads,this.buildings,this.quality),this.populate())}populate(){if(!this.groundAt)return;let n=0,t=0,i=0;const r=a=>this.groundAt(a.x,a.z);for(const a of this.points){const o=r(a),s=a.scale;if(a.kind==="rock")this.position.set(a.x,o+.38*s,a.z),this.quaternion.setFromEuler(new Xt(a.yaw*.23,a.yaw,a.yaw*.17)),this.scale.set(s*(1.1+mt(a.seed)*2.2),s*(.55+mt(a.seed^11)*.9),s*(1+mt(a.seed^21)*1.9)),this.matrix.compose(this.position,this.quaternion,this.scale),this.rockMesh.setMatrixAt(n,this.matrix),this.color.setHSL(.075+mt(a.seed^31)*.025,.22,.35+mt(a.seed^41)*.2),this.rockMesh.setColorAt(n++,this.color);else if(a.kind==="shrub")this.position.set(a.x,o+.32*s,a.z),this.quaternion.setFromAxisAngle(new ne(0,1,0),a.yaw),this.scale.set(s*1.25,s*(.55+mt(a.seed^51)*.55),s*1.1),this.matrix.compose(this.position,this.quaternion,this.scale),this.shrubMesh.setMatrixAt(t,this.matrix),this.color.setHSL(.23+mt(a.seed^61)*.09,.3,.22+mt(a.seed^71)*.15),this.shrubMesh.setColorAt(t++,this.color);else{const c=3.5+s*(2+mt(a.seed^81)*3);this.position.set(a.x,o+c*.27,a.z),this.quaternion.setFromAxisAngle(new ne(0,1,0),a.yaw),this.scale.setScalar(s),this.scale.y=c*.56,this.matrix.compose(this.position,this.quaternion,this.scale),this.trunkMesh.setMatrixAt(i,this.matrix),this.position.y=o+c*.48,this.scale.set(s*(1.5+mt(a.seed^91)*.55),c*.62,s*(1.5+mt(a.seed^101)*.55)),this.matrix.compose(this.position,this.quaternion,this.scale),this.canopyMesh.setMatrixAt(i,this.matrix),this.color.setHSL(.27+mt(a.seed^111)*.07,.36,.2+mt(a.seed^121)*.12),this.canopyMesh.setColorAt(i,this.color),this.color.setHSL(.09,.22,.22+mt(a.seed^131)*.08),this.trunkMesh.setColorAt(i++,this.color)}}this.rockMesh.count=n,this.shrubMesh.count=t,this.trunkMesh.count=i,this.canopyMesh.count=i;for(const a of[this.rockMesh,this.shrubMesh,this.trunkMesh,this.canopyMesh])a.instanceMatrix.needsUpdate=!0,a.instanceColor&&(a.instanceColor.needsUpdate=!0),a.computeBoundingSphere();this.total=n+t+i}get instanceCount(){return this.total}clear(){this.points=[],this.total=0;for(const n of[this.rockMesh,this.shrubMesh,this.trunkMesh,this.canopyMesh])n.count=0;this.lastCell=""}dispose(){this.group.clear();for(const n of[this.rockMesh,this.shrubMesh,this.trunkMesh,this.canopyMesh])n.geometry.dispose(),n.material.dispose();this.points=[],this.total=0,this.roads=[],this.buildings=[],this.place=null,this.frame=null,this.groundAt=null}}const qn=new ne;function Dt(e,n,t,i,r,a){const o=2*Math.PI*r/4,s=Math.max(a-2*r,0),c=Math.PI/4;qn.copy(n),qn[i]=0,qn.normalize();const h=.5*o/(o+s),d=1-qn.angleTo(e)/c;return Math.sign(qn[t])===1?d*h:s/(o+s)+h+h*(1-d)}class or extends dn{constructor(n=1,t=1,i=1,r=2,a=.1){const o=r*2+1;if(a=Math.min(n/2,t/2,i/2,a),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:n,height:t,depth:i,segments:r,radius:a},o===1)return;const s=this.toNonIndexed();this.index=null,this.attributes.position=s.attributes.position,this.attributes.normal=s.attributes.normal,this.attributes.uv=s.attributes.uv;const c=new ne,h=new ne,d=new ne(n,t,i).divideScalar(2).subScalar(a),u=this.attributes.position.array,g=this.attributes.normal.array,m=this.attributes.uv.array,M=u.length/6,E=new ne,p=.5/o;for(let l=0,T=0;l<u.length;l+=3,T+=2)switch(c.fromArray(u,l),h.copy(c),h.x-=Math.sign(h.x)*p,h.y-=Math.sign(h.y)*p,h.z-=Math.sign(h.z)*p,h.normalize(),u[l+0]=d.x*Math.sign(c.x)+h.x*a,u[l+1]=d.y*Math.sign(c.y)+h.y*a,u[l+2]=d.z*Math.sign(c.z)+h.z*a,g[l+0]=h.x,g[l+1]=h.y,g[l+2]=h.z,Math.floor(l/M)){case 0:E.set(1,0,0),m[T+0]=Dt(E,h,"z","y",a,i),m[T+1]=1-Dt(E,h,"y","z",a,t);break;case 1:E.set(-1,0,0),m[T+0]=1-Dt(E,h,"z","y",a,i),m[T+1]=1-Dt(E,h,"y","z",a,t);break;case 2:E.set(0,1,0),m[T+0]=1-Dt(E,h,"x","z",a,n),m[T+1]=Dt(E,h,"z","x",a,i);break;case 3:E.set(0,-1,0),m[T+0]=1-Dt(E,h,"x","z",a,n),m[T+1]=1-Dt(E,h,"z","x",a,i);break;case 4:E.set(0,0,1),m[T+0]=1-Dt(E,h,"x","y",a,n),m[T+1]=1-Dt(E,h,"y","x",a,t);break;case 5:E.set(0,0,-1),m[T+0]=Dt(E,h,"x","y",a,n),m[T+1]=1-Dt(E,h,"y","x",a,t);break}}static fromJSON(n){return new or(n.width,n.height,n.depth,n.segments,n.radius)}}const Yo=["front-left","front-right","rear-left","rear-right"],Ko=[{x:-1.22,z:1.22},{x:1.22,z:1.22},{x:-1.22,z:-1.25},{x:1.22,z:-1.25}];class Zp{root=new Yt;wheels=[];frontWheels=[];suspension=[];body;opts;model=new Yt;materials;parts={paint:[],dark:[],chrome:[],glass:[],tire:[],light:[],tail:[]};wheelSprings;wheelShocks;shockRods;axleLinks;workMatrix=new Ft;workQuaternion=new Gt;workPosition=new ne;workScale=new ne;constructor(n={color:"#d84924",scale:1}){this.opts=n,this.root.scale.setScalar(n.scale),this.model.position.y=-1.65,this.root.add(this.model),this.body=new Yt,this.model.add(this.body),this.makeMaterials(),this.buildChassisAndBody(),this.buildWheels(),this.finishBodyBatches()}makePaintMaterial(){const t=new Uint8Array(16384);let i=1297702388;for(let o=0;o<4096;o++){i=Math.imul(i,1664525)+1013904223>>>0;const s=168+(i>>>24)*.34;t[o*4]=t[o*4+1]=t[o*4+2]=s,t[o*4+3]=255}const r=new Lc(t,64,64,qt);r.wrapS=r.wrapT=ps,r.repeat.set(5,5),r.minFilter=xn,r.magFilter=bn,r.generateMipmaps=!0,r.needsUpdate=!0;const a=new co({color:this.opts.color,metalness:.3,roughness:.3,roughnessMap:r,clearcoat:.76,clearcoatRoughness:.17});return a.name="Rumble Roam metallic clearcoat paint",a}makeMaterials(){this.materials={paint:this.makePaintMaterial(),dark:new xt({color:1382939,metalness:.28,roughness:.68}),chrome:new xt({color:12041920,metalness:.78,roughness:.24}),glass:new co({color:6523801,metalness:.16,roughness:.2,transparent:!0,opacity:.82,clearcoat:.9,side:Nt,depthWrite:!1}),tire:new xt({color:1053204,roughness:.94}),light:new xt({color:16770464,emissive:16754230,emissiveIntensity:1.15,roughness:.2}),tail:new xt({color:11999506,emissive:16717323,emissiveIntensity:.85,roughness:.28})}}boxGeometry(n,t,i,r,a,o,s=.025,c){const h=new or(n,t,i,4,Math.min(s,n*.24,t*.24,i*.24)),d=c?new Gt().setFromEuler(c):new Gt;return h.applyMatrix4(new Ft().compose(new ne(r,a,o),d,new ne(1,1,1))),h}addBox(n,t,i,r,a,o,s,c=.025,h){this.parts[n].push(this.boxGeometry(t,i,r,a,o,s,c,h))}addSideShape(n,t,i,r=.045){const a=new Ps(n,{depth:r,bevelEnabled:!1,curveSegments:8});a.rotateY(t<0?-Math.PI/2:Math.PI/2),a.translate(t*1.11,0,0),this.parts[i].push(a)}profileShape(){const n=new Ha;return n.moveTo(-2.02,1.28),n.lineTo(-2.02,1.78),n.lineTo(-1.53,1.86),n.lineTo(-1.34,2.77),n.lineTo(-.91,3.04),n.lineTo(.29,3.04),n.lineTo(.65,2.14),n.lineTo(1.2,1.98),n.lineTo(2.03,1.77),n.lineTo(2.03,1.2),n.quadraticCurveTo(1.22,2.16,.38,1.2),n.lineTo(-.4,1.2),n.quadraticCurveTo(-1.25,2.16,-2.08,1.2),n.lineTo(-2.02,1.28),n.closePath(),n}sideWindow(n,t,i,r){const a=new Ha;return a.moveTo(n,t),a.lineTo(n+.12,r),a.lineTo(i-.1,r),a.lineTo(i,t),a.closePath(),a}buildChassisAndBody(){this.addBox("dark",1.75,.22,3.55,0,1.3,-.02,.055);for(const c of[-.9,.9])this.addBox("dark",.17,.2,3.7,c,1.23,-.02,.045);for(const c of[-1.38,-.2,1.16])this.addBox("chrome",2,.11,.13,0,1.21,c,.025);this.addBox("dark",1.2,.08,.95,0,1.14,.1,.025),this.addBox("paint",2.12,.46,1.27,0,1.76,1.15,.09),this.addBox("paint",1.93,.16,1.48,0,3,-.34,.065),this.addBox("paint",1.78,.96,1.24,0,2.43,-.36,.08);const n=this.profileShape();for(const c of[-1,1])this.addSideShape(n,c,"paint",.055),this.addSideShape(this.sideWindow(-1.19,2.32,-.53,2.8),c,"glass",.018),this.addSideShape(this.sideWindow(-.43,2.32,.16,2.8),c,"glass",.018),this.addBox("chrome",.035,.045,.76,c*1.17,2.2,-.17,.012),this.addBox("chrome",.04,.035,.19,c*1.18,2.05,-.24,.01),this.addBox("dark",.075,.22,1.05,c*1.12,1.31,-.05,.026);this.addBox("glass",1.56,.68,.045,0,2.56,.48,.012,new Xt(-.48,0,0)),this.addBox("glass",1.48,.52,.04,0,2.55,-1.02,.012,new Xt(.18,0,0)),this.addBox("chrome",1.75,.055,.12,0,3.08,-.34,.02),this.addBox("dark",1.4,.08,.95,0,1.64,-1.42,.02);for(const c of[-.76,.76])this.addBox("paint",.12,.34,1.02,c,1.79,-1.4,.035);this.addBox("paint",1.48,.38,.13,0,1.77,-1.93,.035);for(let c=0;c<5;c++)this.addBox("chrome",1.25,.018,.024,0,1.69,-1.78+c*.18,.004);this.addBox("chrome",2.22,.2,.22,0,1.47,1.96,.045),this.addBox("dark",1.16,.38,.055,0,1.83,1.94,.012),this.addBox("chrome",1.28,.045,.07,0,2.05,1.95,.012),this.addBox("chrome",1.28,.045,.07,0,1.61,1.95,.012);for(let c=0;c<9;c++)this.addBox("dark",.025,.34,.035,-.5+c*.125,1.83,1.98,.008);this.addBox("dark",.22,.11,.07,0,1.72,2.01,.012),this.addBox("chrome",2.12,.14,.2,0,1.52,-2,.035),this.addBox("chrome",1.95,.055,.14,0,1.68,-2,.015),this.addBox("dark",1.08,.21,.035,0,1.82,-2.015,.018),this.addBox("chrome",.62,.035,.025,0,1.83,-2.041,.009),this.addBox("chrome",.56,.14,.025,0,1.47,-2.075,.018),this.addBox("dark",.46,.075,.028,0,1.47,-2.092,.01);for(let c=-3;c<=3;c++)this.addBox("dark",.018,.17,.02,c*.13,1.82,-2.04,.005);for(const c of[-.82,.82])this.addBox("dark",.48,.29,.09,c,1.94,1.93,.035),this.addBox("light",.34,.19,.045,c,1.95,1.99,.035),this.addBox("light",.14,.08,.035,c,1.72,2,.018),this.addBox("dark",.3,.28,.08,c,1.82,-2.02,.025),this.addBox("tail",.22,.22,.055,c,1.83,-2.075,.035);for(const c of[-.69,.69])this.addBox("paint",.08,.055,.83,c,2.02,1.13,.025),this.addBox("chrome",.035,.025,.63,c*1.7,1.9,-.36,.01);for(const c of[-1.1,.46])this.addBox("dark",.05,.86,.06,0,2.51,c,.018);for(let c=-2;c<=2;c++)this.addBox("light",.14,.13,.08,c*.36,3.14,-.25,.06);this.addBox("dark",1.34,.12,.54,0,2.12,.31,.045),this.addBox("dark",.13,.56,.1,0,2.37,.35,.025);for(const c of[-.43,.43])this.addBox("dark",.44,.12,.48,c,1.93,-.15,.045),this.addBox("dark",.43,.45,.13,c,2.17,-.35,.055),this.addBox("chrome",.035,.52,.045,c*1.15,2.35,.42,.012),this.addBox("dark",.19,.13,.25,c*1.22,2.5,.42,.035);for(let c=0;c<7;c++)this.addBox("dark",.09,.045,.32,-.66+c*.22,2.02,1.12,.015);const t=[];for(const c of[-1.17,1.17])for(const h of[-1.25,1.22]){const d=new Dc(new ne(c,1.26,h-.91),new ne(c,2.14,h),new ne(c,1.26,h+.91));t.push(new ca(d,20,.06,7,!1))}const i=In(t,!1);t.forEach(c=>c.dispose()),this.body.add(new dt(i,this.materials.dark));const a=[-1,1].map(c=>new uo([new ne(c*.86,1.65,-1.82),new ne(c*.86,2.85,-1.55),new ne(c*.86,3.2,-.9),new ne(c*.86,3.2,.05),new ne(c*.82,2.2,.98)])).map(c=>new ca(c,24,.035,7,!1)),o=In(a,!1);a.forEach(c=>c.dispose()),this.body.add(new dt(o,this.materials.chrome));const s=new dt(new gi(.19,.026,7,24),this.materials.dark);s.position.set(-.43,2.33,.52),this.body.add(s);for(const c of[-1.25,1.22])this.addBox("dark",1.82,.12,.16,0,1.43,c,.025),this.addBox("chrome",1.22,.055,.07,0,1.56,c,.018)}finishBodyBatches(){for(const n of Object.keys(this.parts)){const t=this.parts[n];if(!t.length)continue;const i=In(t,!1);if(t.forEach(a=>a.dispose()),!i)continue;const r=new dt(i,this.materials[n]);r.castShadow=!0,r.receiveShadow=!0,r.frustumCulled=!0,this.body.add(r)}this.parts={paint:[],dark:[],chrome:[],glass:[],tire:[],light:[],tail:[]}}cylinderGeometry(n,t,i=24){const r=new Di(n,n,t,i,1,!1);return r.rotateZ(Math.PI/2),r}buildWheels(){const n=new xt({color:2698543,roughness:.9}),t=[],i=[],r=new Di(.82,.82,.61,36,1,!1);r.rotateZ(Math.PI/2),t.push(r);for(const M of[-.29,.29]){const E=new gi(.63,.12,8,36);E.rotateY(Math.PI/2),E.translate(M,0,0),t.push(E);const p=this.cylinderGeometry(.455,.045,28);p.translate(M*1.04,0,0),i.push(p);const l=new gi(.405,.025,8,32);l.rotateY(Math.PI/2),l.translate(M*1.04,0,0),i.push(l);const T=new gi(.735,.018,6,40);T.rotateY(Math.PI/2),T.translate(M*.275,0,0),t.push(T);for(let b=0;b<16;b++){const C=b*Math.PI/8,R=new Di(.026,.034,.035,8,1);R.rotateZ(Math.PI/2),R.applyMatrix4(new Ft().compose(new ne(M*.32,Math.sin(C)*.68,Math.cos(C)*.68),new Gt().setFromEuler(new Xt(C,0,0)),new ne(1,1,1))),t.push(R)}const A=this.cylinderGeometry(.16,.075,18);A.translate(M*1.1,0,0),i.push(A);for(let b=0;b<6;b++){const C=b*Math.PI/3,R=new dn(.065,.07,.29);R.applyMatrix4(new Ft().compose(new ne(M*1.08,Math.cos(C)*.25,Math.sin(C)*.25),new Gt().setFromEuler(new Xt(C,0,0)),new ne(1,1,1))),i.push(R);const D=this.cylinderGeometry(.034,.018,10);D.translate(M*1.1,Math.cos(C)*.19,Math.sin(C)*.19),i.push(D)}}const a=In(t,!1);t.forEach(M=>M.dispose());const o=In(i,!1);i.forEach(M=>M.dispose());const s=this.cylinderGeometry(.13,3.1,12),c=new xt({color:3422779,metalness:.55,roughness:.48}),h=new en(s,c,2);h.castShadow=!0;const d=new Gt().setFromAxisAngle(new ne(0,0,1),Math.PI/2);[-1.25,1.22].forEach((M,E)=>{this.workMatrix.compose(new ne(0,.91,M),d,new ne(1,1,1)),h.setMatrixAt(E,this.workMatrix)}),h.instanceMatrix.needsUpdate=!0,this.model.add(h);const u=[];for(let M=0;M<=96;M++){const E=M/96,p=E*Math.PI*2*8;u.push(new ne(Math.cos(p)*.11,E-.5,Math.sin(p)*.11))}const g=new ca(new uo(u),128,.025,5,!1),m=new xt({color:13817555,metalness:.78,roughness:.32});this.wheelSprings=new en(g,m,4),this.wheelSprings.castShadow=!0,this.wheelShocks=new en(this.cylinderGeometry(.072,.68,10),c,4),this.wheelShocks.castShadow=!0,this.shockRods=new en(this.cylinderGeometry(.025,.62,8),this.materials.chrome,4),this.shockRods.castShadow=!0,this.model.add(this.wheelSprings,this.wheelShocks,this.shockRods);for(let M=0;M<4;M++){const E=Ko[M],p=Yo[M],l=new Yt;l.position.set(E.x,.92,E.z),l.userData.wheelId=p,this.model.add(l),this.wheels.push(l),M<2&&this.frontWheels.push(l);const T=new dt(a,this.materials.tire);T.castShadow=!0,T.receiveShadow=!0,l.add(T);const A=new dt(o,this.materials.chrome);A.castShadow=!0,l.add(A);const b=new dn(.34,.18,.3),C=new en(b,n,48);C.castShadow=!0,C.receiveShadow=!0;let R=0;for(let D=0;D<2;D++)for(let U=0;U<24;U++){const _=U*Math.PI/12+D*Math.PI/24,S=new Gt().setFromEuler(new Xt(_+Math.PI/2,0,D?.16:-.16));this.workMatrix.compose(new ne(D?.16:-.16,Math.sin(_)*.81,Math.cos(_)*.81),S,new ne(1,1,1)),C.setMatrixAt(R++,this.workMatrix)}C.instanceMatrix.needsUpdate=!0,l.add(C)}this.axleLinks=new en(this.cylinderGeometry(.055,1,10),c,4),this.axleLinks.castShadow=!0,this.model.add(this.axleLinks),this.updateWheelContacts(Yo.map((M,E)=>({id:M,x:0,z:0,height:0,contact:!0,compression:.12,extension:0,travel:.55,compressionVelocity:0,compressionDamping:0,reboundDamping:0})),1)}updateWheelContacts(n,t){for(let i=0;i<this.wheels.length;i++){const r=this.wheels[i],a=n.find(u=>u.id===r.userData.wheelId);if(!a)continue;r.position.y=.92+a.compression/t+a.extension/t;const o=Ko[i],s=a.compression/t,c=a.extension/t;this.workPosition.set(o.x*.78,1.05+c*.35-s*.2,o.z),this.workQuaternion.identity(),this.workScale.set(1,Math.max(.5,.72+c-s*.35),1),this.workMatrix.compose(this.workPosition,this.workQuaternion,this.workScale),this.wheelSprings.setMatrixAt(i,this.workMatrix),this.workPosition.y=.99+c*.32-s*.12,this.workScale.set(1,.68+c*.45-s*.2,1),this.workMatrix.compose(this.workPosition,this.workQuaternion,this.workScale),this.wheelShocks.setMatrixAt(i,this.workMatrix),this.workPosition.y=1.13+c*.3-s*.1,this.workScale.set(1,.61+c*.25-s*.1,1),this.workMatrix.compose(this.workPosition,this.workQuaternion,this.workScale),this.shockRods.setMatrixAt(i,this.workMatrix);const h=new Gt().setFromAxisAngle(new ne(0,0,1),Math.PI/2),d=Math.abs(o.x)*.9;this.workPosition.set(o.x*.54,.89+s*.35,o.z),this.workScale.set(1,d,1),this.workMatrix.compose(this.workPosition,h,this.workScale),this.axleLinks.setMatrixAt(i,this.workMatrix)}this.wheelSprings.instanceMatrix.needsUpdate=!0,this.wheelShocks.instanceMatrix.needsUpdate=!0,this.shockRods.instanceMatrix.needsUpdate=!0,this.axleLinks.instanceMatrix.needsUpdate=!0}setColor(n){this.opts.color=n,this.materials.paint.color.set(n)}}function si(e,n=new ne){return n.set(Math.sin(e),0,Math.cos(e))}function sr(e,n=new ne){return n.set(Math.cos(e),0,-Math.sin(e))}const qa=(e,n,t)=>Math.max(n,Math.min(t,e)),jp=[{id:"front-left",x:-1.22,z:1.22},{id:"front-right",x:1.22,z:1.22},{id:"rear-left",x:-1.22,z:-1.25},{id:"rear-right",x:1.22,z:-1.25}];function Ea(e,n,t,i,r=24){const a=Math.cos(n),o=Math.sin(n),s=.55*t,c=.36*t;return jp.map(h=>{const d=e.x+h.x*a+h.z*o,u=e.z-h.x*o+h.z*a,g=i(d,u),m=g+1.65*t+.12*t,M=m-e.y,E=2*Math.sqrt(r/(.12*t));return{id:h.id,x:d,z:u,height:g,travel:s,compression:qa(M,0,s),extension:qa(-M,0,c),contact:M>=-c&&M<=s,compressionVelocity:0,compressionDamping:E*.82,reboundDamping:E*.62}})}function Qp(e,n,t,i){const r=t/(.12*i);let a=0;for(const o of e){if(o.compression<=0)continue;const s=Math.max(0,o.compression-o.travel+.08*i),c=r*(o.compression+s*2.5),h=qa(o.compressionVelocity,-12,12),d=h>=0?o.compressionDamping:o.reboundDamping,u=(n>=0?o.reboundDamping:o.compressionDamping)*n*.24;a+=Math.max(0,c+d*h-u)}return a/e.length-t}function Jp(e){const n=(e[0].height+e[1].height)/2,t=(e[2].height+e[3].height)/2,i=(e[0].height+e[2].height)/2,r=(e[1].height+e[3].height)/2;return{pitch:-Math.atan2(n-t,2.47),roll:Math.atan2(r-i,2.44)}}const xa=Math.PI*2,Ei=e=>e*Math.PI/180;function lr(e,n){return Math.atan2(Math.sin(n-e),Math.cos(n-e))}function xi(e){return Math.abs(lr(e,0))}function bi(e,n,t=5.2){const i=1-Math.exp(-t*Math.max(0,n));return e+lr(e,0)*i}class em{airborne=!1;lastPitch=0;lastRoll=0;pitchProgress=0;rollProgress=0;pendingForwardFlips=0;pendingBackwardFlips=0;pendingRolls=0;flightTime=0;flightBonus=0;lastLandingDebug=null;currentPoints=0;bestScore;constructor(n=0){this.bestScore=Math.max(0,Math.floor(n)||0)}update(n){if(!n.grounded){this.airborne?(this.flightTime=Math.max(this.flightTime,n.airtime),this.recordFlipRotation(this.advanceRotation("pitch",n.pitch)),this.pendingRolls+=Math.abs(this.advanceRotation("roll",n.roll))):this.beginFlight(n);const M=this.pendingForwardFlips+this.pendingBackwardFlips,E=M+this.pendingRolls;return this.currentPoints=Math.round(this.flightTime*80)+this.pendingRolls*500+M*600+Math.max(0,E-1)*150+this.flightBonus,null}if(!this.airborne)return null;this.flightTime=Math.max(this.flightTime,n.airtime),this.recordFlipRotation(this.advanceRotation("pitch",n.pitch)),this.pendingRolls+=Math.abs(this.advanceRotation("roll",n.roll));const t=xi(n.pitch)<Ei(65)&&xi(n.roll)<Ei(65),i=n.landingSpeed<=22&&t&&this.flightTime>=.45,r=this.pendingForwardFlips,a=this.pendingBackwardFlips,o=r+a,s=this.pendingRolls,c=this.flightTime;if(this.lastLandingDebug={sample:{...n},airtime:c,rolls:s,flips:o,rollProgress:this.rollProgress,pitchProgress:this.pitchProgress,upright:t,landedWell:i},this.airborne=!1,!i)return this.clearFlight(),null;const h=o+s,d=n.landingSpeed<=5&&xi(n.pitch)<Ei(18)&&xi(n.roll)<Ei(18),u=d?300:100,g=Math.round(c*80)+s*500+o*600+Math.max(0,h-1)*150+u+this.flightBonus;this.currentPoints=g,this.bestScore=Math.max(this.bestScore,g);const m=s>=2?"DOUBLE ROLL":s===1?"BARREL ROLL":o>=2?"DOUBLE FLIP":r?"FRONT FLIP":a?"BACKFLIP":c>=1.25?d?"BIG AIR · PERFECT LANDING":"BIG AIR":d?"PERFECT LANDING":"NICE LANDING";return this.clearFlight(!1),{points:g,rolls:s,flips:o,forwardFlips:r,backwardFlips:a,airtime:c,perfect:d,message:m}}reset(){this.airborne=!1,this.clearFlight()}get isAirborne(){return this.airborne}get rolls(){return this.pendingRolls}get flips(){return this.pendingForwardFlips+this.pendingBackwardFlips}get airtime(){return this.flightTime}awardBonus(n){const t=Math.max(0,Math.floor(n));return t?(this.airborne&&(this.flightBonus+=t),this.currentPoints+=t,this.bestScore+=t,this.currentPoints):this.currentPoints}beginFlight(n){this.clearFlight(),this.airborne=!0,this.lastPitch=n.pitch,this.lastRoll=n.roll,this.flightTime=n.airtime}advanceRotation(n,t){const i=n==="pitch"?this.lastPitch:this.lastRoll,a=(n==="pitch"?this.pitchProgress:this.rollProgress)+lr(i,t);n==="pitch"?(this.lastPitch=t,this.pitchProgress=a):(this.lastRoll=t,this.rollProgress=a);const o=Math.trunc(a/xa);return o&&(n==="pitch"?this.pitchProgress-=o*xa:this.rollProgress-=o*xa),o}recordFlipRotation(n){n>0?this.pendingForwardFlips+=n:this.pendingBackwardFlips+=-n}clearFlight(n=!0){this.pitchProgress=0,this.rollProgress=0,this.pendingForwardFlips=0,this.pendingBackwardFlips=0,this.pendingRolls=0,this.flightTime=0,this.flightBonus=0,n&&(this.currentPoints=0)}}class tm{pos=new ne(0,0,0);vel=new ne;yaw=0;pitch=0;roll=0;grounded=!0;nitro=100;airTime=0;speed=0;gravity=24;jumpForce=15;jumpWas=!1;jumpHoldRemaining=0;coyoteRemaining=0;previousCompression=new Map;invertedContactTime=0;contactPitch=0;contactRoll=0;wheelContacts=[];reset(n,t=1){this.pos.set(0,n.heightAt(0,0)+1.65*t,0),this.vel.set(0,0,0),this.yaw=0,this.pitch=0,this.roll=0,this.grounded=!0,this.nitro=100,this.airTime=0,this.jumpWas=!1,this.jumpHoldRemaining=0,this.coyoteRemaining=.1,this.invertedContactTime=0,this.contactPitch=0,this.contactRoll=0,this.wheelContacts=Ea(this.pos,this.yaw,t,(i,r)=>n.heightAt(i,r),this.gravity),this.previousCompression=new Map(this.wheelContacts.map(i=>[i.id,i.compression]))}update(n,t,i,r,a){this.gravity=a.gravity,this.jumpForce=a.jump,n=Math.min(n,.04);const o=Math.max(1,Math.ceil(n*120)),s=n/o;for(let c=0;c<o;c++)this.step(s,t,i,a);r.root.position.copy(this.pos),r.root.rotation.order="YXZ",r.root.rotation.set(this.pitch+this.contactPitch,this.yaw,this.roll+this.contactRoll),r.updateWheelContacts(this.wheelContacts,a.scale),r.wheels.forEach(c=>{c.rotation.x-=this.speed*n}),r.frontWheels.forEach(c=>{c.rotation.y=-t.steer*.28})}step(n,t,i,r){const a=r.scale,o=si(this.yaw),s=t.nitro&&this.nitro>0,c=t.throttle||(t.nitro?t.gear??1:0),h=30*(s?1.7:1),d=26*(s?1.5:1),u=this.vel.dot(o),g=c!==0&&Math.abs(u)>2&&Math.sign(u)!==Math.sign(c);c&&!g&&this.vel.addScaledVector(o,c*d*n);const m=new ne(this.vel.x,0,this.vel.z);if(this.speed=m.length(),s?this.nitro=Math.max(0,this.nitro-22*n):this.nitro=Math.min(100,this.nitro+8*n),t.handbrake?m.multiplyScalar(Math.max(0,1-3*n)):m.multiplyScalar(Math.max(0,1-(g?5.5:this.grounded?1.05:.1)*n)),this.speed>h&&m.setLength(h),this.speed>.4){const U=(this.grounded?1.8:1.05)*(.25+Math.min(1,this.speed/12)),_=Math.sign(m.dot(o))||Math.sign(t.throttle);this.yaw-=t.steer*U*n*_;const S=sr(this.yaw),P=m.dot(S);m.addScaledVector(S,-P*(this.grounded?.72:.01))}this.vel.x=m.x,this.vel.z=m.z;const M=t.jump&&!this.jumpWas&&(this.grounded||this.coyoteRemaining>0);if(M&&(this.vel.y=this.jumpForce,this.grounded=!1,this.coyoteRemaining=0,this.jumpHoldRemaining=.3),this.jumpWas=t.jump,t.jump&&!M&&this.jumpHoldRemaining>0&&this.vel.y>0){const U=Math.min(n,this.jumpHoldRemaining);this.vel.y+=Math.min(12,this.jumpForce*.8)*U,this.jumpHoldRemaining-=U}t.jump||(this.jumpHoldRemaining=0),this.wheelContacts=Ea(this.pos,this.yaw,a,(U,_)=>i.heightAt(U,_),this.gravity);for(const U of this.wheelContacts){const _=this.previousCompression.get(U.id)??U.compression;U.compressionVelocity=(U.compression-_)/Math.max(n,1/240)}Math.cos(this.pitch+this.contactPitch)*Math.cos(this.roll+this.contactRoll);const E=this.grounded&&this.invertedContactTime>1.35;if(t.level||E){const U=t.level?5.2:4.2;this.pitch=bi(this.pitch,n,U),this.roll=bi(this.roll,n,U)}else this.grounded||(this.pitch+=t.airPitch*5.4*n,this.roll+=t.airRoll*7.2*n,this.airTime+=n);this.vel.y+=Qp(this.wheelContacts,this.vel.y,this.gravity,a)*n;const p=this.pos.y;this.pos.addScaledVector(this.vel,n),this.wheelContacts=Ea(this.pos,this.yaw,a,(U,_)=>i.heightAt(U,_),this.gravity);for(const U of this.wheelContacts)this.previousCompression.set(U.id,U.compression);const l=this.wheelContacts.filter(U=>U.contact&&U.compression>.015*a).length,T=Math.max(...this.wheelContacts.map(U=>U.height))+1.17*a,A=this.pos.y<T&&this.vel.y<0;A&&(!this.grounded&&this.vel.y<-3&&(this.vel.y=Math.min(1.1,-this.vel.y*.055)),this.pos.y=T);const b=this.grounded;this.grounded=this.vel.y<=1.25&&(l>=2||A),this.grounded?this.coyoteRemaining=.1:b?this.coyoteRemaining=.1:this.coyoteRemaining=Math.max(0,this.coyoteRemaining-n);const C=Math.cos(this.pitch+this.contactPitch)*Math.cos(this.roll+this.contactRoll);this.grounded?(this.vel.y=Math.max(0,this.vel.y),this.airTime=0,this.invertedContactTime=C<.2?this.invertedContactTime+n:0,C>=.2&&!t.level&&(this.pitch=bi(this.pitch,n,3.2),this.roll=bi(this.roll,n,3.2))):this.invertedContactTime=0;const R=Jp(this.wheelContacts),D=this.grounded?Math.min(1,n*9):Math.min(1,n*2);this.contactPitch=st.lerp(this.contactPitch,this.grounded?R.pitch:0,D),this.contactRoll=st.lerp(this.contactRoll,this.grounded?R.roll:0,D),Number.isFinite(this.pos.y)||(this.pos.y=p)}}function Ya(e){if(!e||typeof e!="object"||!("closest"in e))return!1;const n=e;return typeof n.closest=="function"&&n.closest('input,textarea,select,[contenteditable]:not([contenteditable="false"])')!==null}class nm{pressed=new Set;actions=new Map;pointerDown(n,t){this.pointerUp(n),this.actions.set(n,t),this.pressed.add(t)}pointerUp(n){const t=this.actions.get(n);t!==void 0&&(this.actions.delete(n),[...this.actions.values()].includes(t)||this.pressed.delete(t))}pointerCancel(n){this.pointerUp(n)}lostPointerCapture(n){this.pointerUp(n)}releaseAll(){this.actions.clear(),this.pressed.clear()}}class im{constructor(n=54,t=.08){this.maxTravel=n,this.deadZone=t}pointerId=null;x=0;y=0;originX=0;originY=0;radius=1;pointerDown(n,t,i,r=this.maxTravel){this.pointerId=n,this.originX=t,this.originY=i,this.radius=Math.max(1,r),this.x=0,this.y=0}pointerMove(n,t,i){if(this.pointerId!==n)return;let r=(t-this.originX)/this.radius,a=(i-this.originY)/this.radius;const o=Math.hypot(r,a);o>1&&(r/=o,a/=o);const s=Math.hypot(r,a);if(s<this.deadZone){this.x=0,this.y=0;return}const c=(s-this.deadZone)/(1-this.deadZone)/s;this.x=r*c,this.y=a*c}pointerUp(n){this.pointerId===n&&this.release()}pointerCancel(n){this.pointerUp(n)}lostPointerCapture(n){this.pointerUp(n)}release(){this.pointerId=null,this.x=0,this.y=0}}function am(e,n){const t=(...i)=>i.some(r=>e.has(r)||n.has(r));return Number(t("d","arrowright"))-Number(t("a","arrowleft"))}class rm{keys=new Set;pointerButtons=new nm;analog=new im;gear=1;steeringMode="analog";sensitivity=1;state={throttle:0,steer:0,nitro:!1,jump:!1,level:!1,airPitch:0,airRoll:0,handbrake:!1,gear:1};wasAirborne=!1;requireNeutralForAir=!1;get touches(){return this.pointerButtons.pressed}setGear(n){this.gear=n}toggleGear(){return this.gear=this.gear===1?-1:1,this.gear}setSteeringMode(n){this.steeringMode=n}setSensitivity(n){this.sensitivity=Math.max(.5,Math.min(1.5,n))}constructor(){window.addEventListener("focusin",n=>{Ya(n.target)&&this.releaseAll()}),window.addEventListener("keydown",n=>{if(Ya(n.target)){this.releaseAll();return}[" ","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n.key)&&n.preventDefault(),this.keys.add(n.key.toLowerCase())}),window.addEventListener("keyup",n=>this.keys.delete(n.key.toLowerCase())),window.addEventListener("blur",()=>this.releaseAll())}pointerDown(n,t){this.pointerButtons.pointerDown(n,t)}pointerUp(n){this.pointerButtons.pointerUp(n)}pointerCancel(n){this.pointerButtons.pointerCancel(n)}lostPointerCapture(n){this.pointerButtons.lostPointerCapture(n)}releaseAll(){this.keys.clear(),this.pointerButtons.releaseAll(),this.analog.release(),this.state={throttle:0,steer:0,nitro:!1,jump:!1,level:!1,airPitch:0,airRoll:0,handbrake:!1,gear:this.gear},this.wasAirborne=!1,this.requireNeutralForAir=!1}update(n=!1){const t=(...b)=>b.some(C=>this.keys.has(C)||this.touches.has(C)),i=Array.from(navigator.getGamepads?.()??[]).find(b=>b?.connected),r=i?.axes??[],a=b=>i?.buttons[b]?.value??0,o=(t("w","arrowup")?1:0)-(t("s","arrowdown")?1:0),s=t("go"),c=a(7)-a(6)||-Math.sign(Math.abs(r[1]??0)>.18?r[1]:0),h=o||(s?this.gear:0)||c,d=am(this.keys,this.touches),u=Math.abs(r[0]??0)>.16?r[0]:0,g=this.analog.x,m=this.analog.y,M=Number(this.keys.has("arrowright")||this.touches.has("arrowright"))-Number(this.keys.has("arrowleft")||this.touches.has("arrowleft"));n&&!this.wasAirborne&&(this.requireNeutralForAir=Math.hypot(g,m)>.2||d!==0||Math.abs(u)>.16||M!==0),n||(this.requireNeutralForAir=!1),n&&this.requireNeutralForAir&&Math.hypot(g,m)<.16&&d===0&&Math.abs(u)<=.16&&M===0&&(this.requireNeutralForAir=!1),this.wasAirborne=n;const E=n&&!this.requireNeutralForAir&&this.steeringMode==="analog",p=!n&&this.steeringMode==="analog"?Math.sign(g)*Math.pow(Math.abs(g),1.25)*this.sensitivity:0,l=(t("arrowup")?1:0)-(t("arrowdown")?1:0),T=Number(t("e"))-Number(t("q")),A=t("shift","boost","nitro")||a(1)>.4;return this.state={throttle:h,steer:d||(this.steeringMode==="buttons"?0:p)||u,nitro:A,jump:t(" ","jump")||a(0)>.4,level:t("f","level")||a(3)>.4,airPitch:l||(E?-m:0)||(Math.abs(r[3]??0)>.18?-Math.sign(r[3]):0),airRoll:T||(this.requireNeutralForAir?0:M||(E?g:0)||(Math.abs(r[2]??0)>.18?Math.sign(r[2]):0)),handbrake:t("control")||a(2)>.4,gear:this.gear},this.state}}const Yn=96,ba=160;class om{group=new Yt;dustMesh;burstMesh;particles=[];active=[];freeDust=[];freeBurst=[];activeCount=0;rng=7886388;matrix=new Ft;quat=new Gt;scaleVector=new ne;color=new $e;quality=1;constructor(){const n=new Va(.5,1),t=new Uc(.5,0);this.dustMesh=this.makeBatch(n,Yn,13875854),this.burstMesh=this.makeBatch(t,ba,16777215),this.dustMesh.name="dust-particle-batch",this.burstMesh.name="impact-particle-batch",this.dustMesh.count=this.burstMesh.count=0,this.group.add(this.dustMesh,this.burstMesh);for(let i=0;i<Yn+ba;i++)this.particles.push({kind:"dust",life:0,max:1,position:new ne,velocity:new ne,rotation:new ne,spin:new ne,scale:1,color:16777215}),this.active.push(0);for(let i=Yn-1;i>=0;i--)this.freeDust.push(i);for(let i=Yn+ba-1;i>=Yn;i--)this.freeBurst.push(i)}makeBatch(n,t,i){const r=new nr({color:i,vertexColors:!0,transparent:!0,depthWrite:!1});r.onBeforeCompile=o=>{o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
attribute float instanceAlpha;
varying float vParticleAlpha;`),o.vertexShader=o.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vParticleAlpha = instanceAlpha;`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
varying float vParticleAlpha;`),o.fragmentShader=o.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a *= vParticleAlpha;`)},r.customProgramCacheKey=()=>"rumble-particle-shaped-alpha-v2";const a=new Ic(new Float32Array(t),1);return a.setUsage(Nc),n.setAttribute("instanceAlpha",a),new en(n,r,t)}rand(){return this.rng=this.rng*1664525+1013904223>>>0,this.rng/4294967296}burst(n,t=18,i=16758605){t=Math.max(1,Math.round(t*this.quality));for(let r=0;r<t;r++){const a=this.freeBurst.pop();if(a===void 0)break;const o=this.particles[a];o.kind="burst",o.life=.45+this.rand()*.8,o.max=.9,o.scale=.16+this.rand()*.26,o.color=i,o.position.copy(n),o.velocity.set((this.rand()-.5)*8,1+this.rand()*7,(this.rand()-.5)*8),o.rotation.set(this.rand()*6,this.rand()*6,this.rand()*6),o.spin.set((this.rand()-.5)*9,(this.rand()-.5)*9,(this.rand()-.5)*9),this.active[this.activeCount++]=a}}dust(n,t){if(t<4||this.rand()>.27*this.quality)return;const i=this.freeDust.pop();if(i===void 0)return;const r=this.particles[i];r.kind="dust",r.life=r.max=.65,r.scale=.36+this.rand()*.3,r.color=13875854,r.position.copy(n),r.velocity.set(this.rand()-.5,.4+this.rand(),this.rand()-.5),r.rotation.set(this.rand()*6,this.rand()*6,this.rand()*6),r.spin.set((this.rand()-.5)*1.5,(this.rand()-.5)*1.5,(this.rand()-.5)*1.5),this.active[this.activeCount++]=i}update(n){let t=0,i=0,r=0;for(let a=0;a<this.activeCount;a++){const o=this.active[a],s=this.particles[o];if(s.life-=n,s.life<=0){(s.kind==="dust"?this.freeDust:this.freeBurst).push(o);continue}s.position.addScaledVector(s.velocity,n),s.rotation.addScaledVector(s.spin,n),s.scale*=1+n*.55;const c=Math.max(0,s.life/s.max*(s.kind==="dust"?.34:.9)),h=s.kind==="dust"?this.dustMesh:this.burstMesh,d=s.kind==="dust"?i++:r++;this.scaleVector.setScalar(s.scale*(s.life/s.max)),this.quat.setFromEuler(new Xt(s.rotation.x,s.rotation.y,s.rotation.z)),this.matrix.compose(s.position,this.quat,this.scaleVector),h.setMatrixAt(d,this.matrix),this.color.setHex(s.color),h.setColorAt(d,this.color),h.geometry.getAttribute("instanceAlpha").setX(d,c),this.active[t++]=o}this.activeCount=t,this.dustMesh.count=i,this.burstMesh.count=r,i&&(this.dustMesh.instanceMatrix.needsUpdate=!0,this.dustMesh.instanceColor.needsUpdate=!0,this.dustMesh.geometry.getAttribute("instanceAlpha").needsUpdate=!0),r&&(this.burstMesh.instanceMatrix.needsUpdate=!0,this.burstMesh.instanceColor.needsUpdate=!0,this.burstMesh.geometry.getAttribute("instanceAlpha").needsUpdate=!0)}get activeParticles(){return this.activeCount}setQuality(n){this.quality=n==="low"?.46:n==="medium"?.72:1}dispose(){this.group.clear();for(const n of[this.dustMesh,this.burstMesh])n.geometry.dispose(),n.material.dispose()}}class sm{group=new Yt;mesh;pieces=[];quality="high";seed=1225960503;transform=new Ft;quaternion=new Gt;vector=new ne;scratchColor=new $e;capacity=320;constructor(){const n=new dn(1,1,1),t=new xt({color:16777215,roughness:.88,metalness:.015});this.mesh=new en(n,t,this.capacity),this.mesh.name="bounded-building-collapse-batch",this.mesh.count=0,this.mesh.castShadow=!1,this.mesh.receiveShadow=!1,this.mesh.frustumCulled=!1,this.group.add(this.mesh)}random(){return this.seed=this.seed*1664525+1013904223>>>0,this.seed/4294967296}destroy(n,t,i){const r=this.quality==="low"?.5:this.quality==="medium"?.75:1,a=st.clamp(Math.ceil(n.w/3.3),2,4),o=st.clamp(Math.ceil(n.h/3.5),2,5),s=Math.max(5,Math.round(a*o*r)),c=Math.min(s,this.capacity-this.pieces.length);if(!c)return 0;const h=Array.isArray(n.mesh.material)?n.mesh.material[0]:n.mesh.material,d=h instanceof xt?h.color:new $e(11705472),u=new ne(t.direction.z,0,-t.direction.x).normalize(),g=new ne(n.x,(n.baseY??n.mesh.position.y-n.h/2)+(n.minHeight??0),n.z);for(let m=0;m<c;m++){const M=m%a,E=Math.floor(m/a)%o,p=new ne(n.w/a*(.78+this.random()*.2),n.h/o*(.78+this.random()*.2),Math.max(.35,n.d*(.22+this.random()*.28))),l=-n.w/2+(M+.5)*n.w/a,T=(E+.5)*n.h/o,A=(this.random()-.5)*Math.max(0,n.d-p.z),b=g.clone().add(new ne(l,T,A)),C=(this.random()-.5)*(2+t.intensity*6),R=2+t.intensity*(4+this.random()*5),D=t.direction.clone().multiplyScalar(R).addScaledVector(u,C);D.y=2.5+t.intensity*(2+this.random()*6)+this.random()*2;const U=d.clone().multiplyScalar(.78+this.random()*.4),_=4.5+this.random()*1.2;this.pieces.push({position:b,velocity:D,size:p,rotation:new Xt(this.random()*2,this.random()*2,this.random()*2),angular:new ne((this.random()-.5)*8,(this.random()-.5)*8,(this.random()-.5)*8),ground:i(b.x,b.z)+.06,life:_,maxLife:_,color:U})}return c}setQuality(n){this.quality=n}clear(){this.pieces.length=0,this.mesh.count=0}update(n){let t=0;for(let i=this.pieces.length-1;i>=0;i--){const r=this.pieces[i];if(r.life-=n,r.life<=0){this.pieces.splice(i,1);continue}r.velocity.y-=18*n,r.position.addScaledVector(r.velocity,n),r.rotation.x+=r.angular.x*n,r.rotation.y+=r.angular.y*n,r.rotation.z+=r.angular.z*n;const a=r.size.y/2;r.position.y<r.ground+a&&(r.position.y=r.ground+a,r.velocity.y<-1?r.velocity.y*=-.19:r.velocity.y=0,r.velocity.x*=.82,r.velocity.z*=.82,r.angular.multiplyScalar(.96));const o=r.life<.45?Math.max(.1,r.life/.45):1;this.vector.copy(r.size).multiplyScalar(o),this.quaternion.setFromEuler(r.rotation),this.transform.compose(r.position,this.quaternion,this.vector),this.mesh.setMatrixAt(t,this.transform),this.scratchColor.copy(r.color),this.mesh.setColorAt(t,this.scratchColor),t++}this.mesh.count=t,t&&(this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0))}get activeCount(){return this.pieces.length}dispose(){this.group.clear(),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.pieces.length=0}}const tn=[{id:"super-wreck-roadway",title:"Super Wreck Roadway",artist:"Umplix",album:"Rumble Roam Radio",file:"umplix-super-wreck-roadway-loop.mp3",sourceUrl:"https://opengameart.org/content/super-wreck-roadway",license:"CC0 1.0",durationSeconds:134.405},{id:"hot-roadway-remake",title:"Hot Roadway [Remake]",artist:"MintoDog",album:"Rumble Roam Radio · 160 BPM",file:"mintodog-hot-roadway-remake-160.mp3",sourceUrl:"https://opengameart.org/content/hot-roadway-remake",license:"CC0 1.0",durationSeconds:120.033},{id:"un-desert",title:"Un désert",artist:"Loyalty Freak Music / Komiku",album:"Rumble Roam Radio",file:"komiku-un-desert.mp3",sourceUrl:"https://opengameart.org/content/un-d%C3%A9sert",license:"CC0 1.0",durationSeconds:245.577}],$o="Rumble Roam Radio",lm="./audio/music/";function cm(e){return`${lm}${e.file}`}function Ni(e,n=tn.length){return!Number.isFinite(e)||n<=0?0:(Math.trunc(e)%n+n)%n}function dm(e,n=tn.length,t=Math.random){if(n<=1)return 0;const i=Array.from({length:n},(r,a)=>a).filter(r=>r!==Ni(e,n));return i[Math.min(i.length-1,Math.floor(Math.max(0,Math.min(.999999,t()))*i.length))]}class um{index=0;shuffled=!1;history=[0];historyPosition=0;get currentIndex(){return this.index}get shuffleEnabled(){return this.shuffled}setShuffle(n){this.shuffled=n}select(n){return this.index=Ni(n),this.history=[this.index],this.historyPosition=0,this.index}next(n=Math.random){let t;return this.historyPosition<this.history.length-1?t=this.history[++this.historyPosition]:(t=this.shuffled?dm(this.index,tn.length,n):Ni(this.index+1),this.history.push(t),this.historyPosition=this.history.length-1),this.index=t,t}previous(){return this.historyPosition>0?this.index=this.history[--this.historyPosition]:(this.index=Ni(this.index-1),this.history.unshift(this.index)),this.index}}const It=(e,n,t)=>Math.max(n,Math.min(t,e));function Ta(e){return It(Number.isFinite(e)?e:0,0,1)}function Zo(e,n,t){const i=It(Math.abs(Number.isFinite(e)?e:0)/34,0,1),r=It(Number.isFinite(n)?n:0,0,1),a=Math.min(5,1+Math.floor(i*4.999)),o=(a-1)/5,s=a/5,c=It((i-o)/Math.max(.001,s-o),0,1),h=It(790+c*3700+r*(1-i)*950+(t?260:0),790,6100);return{rpm:h,gear:a,engineGain:.26+r*.18+c*.08,load:r,nitroGain:t?.18:0,sampleRate:It(.97+(h-790)/5310*.08,.97,1.05)}}const ks={master:.72,engine:.45,effects:.65,music:.65},fm={idle:"./audio/engine/readeonly-engine-idle-loop.mp3",acceleration:"./audio/engine/dermeehdrescher-generic-v8-acceleration.wav",deceleration:"./audio/engine/dermeehdrescher-generic-v8-deceleration.wav",rev:"./audio/engine/henaway-big-block-v8-rev.mp3"};class hm{ctx=null;master=null;compressor=null;analyser=null;meterBuffer=null;spectrumBuffer=null;engineBus=null;effectsBus=null;musicBus=null;radio=new um;musicWanted=!1;musicElement=null;musicSource=null;preloader=null;preloadedTrackId="";musicFadeTimer=0;musicTransitionId=0;musicError="";engineSamples={};engineSampleSources=[];engineSampleGains={};engineSampleFilters={};engineSampleState="idle";engineSampleError="";engineShiftEnvelope=null;nitroRumble=null;nitroRumbleGain=null;nitroNoiseGain=null;skidGain=null;noiseBuffer=null;volumes={...ks};muted=!1;failed=!1;previousGear=1;previousNitro=!1;previousHighLoad=!1;lastHighLoadAt=-1/0;smoothedRpm=790;smoothedLoad=0;musicDuckTimer=0;musicDuck=1;lastVoice=Zo(0,0,!1);start(){try{this.ctx||this.createGraph(),this.ctx?.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.musicWanted&&(!this.musicElement||this.musicElement.paused)&&this.resumeCurrentTrack(),this.applyVolumes()}catch{this.failed=!0}}createGraph(){const n=window,t=window.AudioContext??n.webkitAudioContext;if(!t){this.failed=!0;return}const i=new t({latencyHint:"interactive"});this.ctx=i,this.master=i.createGain(),this.master.gain.value=0,this.compressor=i.createDynamicsCompressor(),this.compressor.threshold.value=-12,this.compressor.knee.value=12,this.compressor.ratio.value=8,this.compressor.attack.value=.003,this.compressor.release.value=.24,this.analyser=i.createAnalyser(),this.analyser.fftSize=2048,this.meterBuffer=new Float32Array(this.analyser.fftSize),this.spectrumBuffer=new Float32Array(this.analyser.frequencyBinCount),this.master.connect(this.compressor).connect(this.analyser).connect(i.destination),this.engineBus=i.createGain(),this.engineBus.gain.value=this.volumes.engine,this.engineBus.connect(this.master),this.effectsBus=i.createGain(),this.effectsBus.gain.value=this.volumes.effects,this.effectsBus.connect(this.master),this.musicBus=i.createGain(),this.musicBus.gain.value=0,this.musicBus.connect(this.master),this.noiseBuffer=this.makeNoiseBuffer(i,.5),this.createEngineGraph(i),this.loadEngineSamples(i),this.failed=!1}makeNoiseBuffer(n,t){const i=n.createBuffer(1,Math.ceil(n.sampleRate*t),n.sampleRate),r=i.getChannelData(0);let a=1592594996;for(let o=0;o<r.length;o++)a=Math.imul(a,1664525)+1013904223>>>0,r[o]=((a>>>8)/8388608-1)*.45;return i}createEngineGraph(n){this.engineShiftEnvelope=n.createGain(),this.engineShiftEnvelope.gain.value=1,this.engineShiftEnvelope.connect(this.engineBus);for(const c of["idle","acceleration","deceleration"]){const h=n.createGain();h.gain.value=0,h.connect(this.engineShiftEnvelope),this.engineSampleGains[c]=h;const d=n.createBiquadFilter();d.type="lowpass",d.frequency.value=3900,d.Q.value=.55;const u=n.createBiquadFilter();u.type="lowshelf",u.frequency.value=145,u.gain.value=2.2,u.connect(d).connect(h),this.engineSampleFilters[c]=u}const t=n.createGain();t.gain.value=0,t.connect(this.engineBus),this.engineSampleGains.rev=t,this.nitroRumble=n.createOscillator(),this.nitroRumble.type="sine",this.nitroRumble.frequency.value=105;const i=n.createBiquadFilter();i.type="lowpass",i.frequency.value=260,this.nitroRumbleGain=n.createGain(),this.nitroRumbleGain.gain.value=1e-4,this.nitroRumble.connect(i).connect(this.nitroRumbleGain).connect(this.effectsBus),this.nitroRumble.start();const r=n.createBufferSource();r.buffer=this.noiseBuffer,r.loop=!0;const a=n.createBiquadFilter();a.type="lowpass",a.frequency.value=360,this.nitroNoiseGain=n.createGain(),this.nitroNoiseGain.gain.value=1e-4,r.connect(a).connect(this.nitroNoiseGain).connect(this.effectsBus),r.start();const o=n.createBufferSource();o.buffer=this.noiseBuffer,o.loop=!0;const s=n.createBiquadFilter();s.type="bandpass",s.frequency.value=1450,s.Q.value=.48,this.skidGain=n.createGain(),this.skidGain.gain.value=1e-4,o.connect(s).connect(this.skidGain).connect(this.effectsBus),o.start()}async loadEngineSamples(n){this.engineSampleState="loading",this.engineSampleError="";const t=Object.entries(fm),i=await Promise.allSettled(t.map(async([o,s])=>{const c=await fetch(s);if(!c.ok)throw new Error(`${o} sample returned HTTP ${c.status}`);const h=await n.decodeAudioData(await c.arrayBuffer());return[o,h]}));if(this.ctx!==n)return;const r=[];for(let o=0;o<i.length;o++){const s=i[o];if(s.status==="rejected"){r.push(String(s.reason));continue}const[c,h]=s.value;if(this.engineSamples[c]=c==="idle"||c==="acceleration"||c==="deceleration"?this.makeSeamlessLoop(n,h):h,c!=="rev"){const d=n.createBufferSource();d.buffer=this.engineSamples[c],d.loop=!0,d.connect(this.engineSampleFilters[c]),d.start(),this.engineSampleSources.push(d)}}const a=!!(this.engineSamples.idle||this.engineSamples.acceleration||this.engineSamples.deceleration);this.engineSampleState=a?"ready":"error",this.engineSampleError=r.join("; "),this.updateEngineSampleMix(this.lastVoice,this.smoothedLoad,!1,n.currentTime,.01)}makeSeamlessLoop(n,t){const i=t.length,r=Math.min(Math.floor(t.sampleRate*.035),Math.floor(i/8));if(r<8||i<=r*2)return t;const a=n.createBuffer(t.numberOfChannels,i-r,t.sampleRate);for(let o=0;o<t.numberOfChannels;o++){const s=t.getChannelData(o),c=a.getChannelData(o),h=i-r*2;c.set(s.subarray(r,i-r),0);for(let d=0;d<r;d++){const u=d/Math.max(1,r-1),g=Math.cos(u*Math.PI*.5),m=Math.sin(u*Math.PI*.5);c[h+d]=s[i-r+d]*g+s[d]*m}}return a}updateEngineSampleMix(n,t,i,r,a){const o=It((n.rpm-790)/5310,0,1),s=this.engineSamples.idle?.78*Math.pow(1-o,.72)*(1-t*.78):0,c=this.engineSamples.acceleration?.74*Math.sqrt(t)*(.34+o*.66):0,h=this.engineSamples.deceleration?.44*Math.sqrt(1-t)*o:0;this.engineSampleGains.idle?.gain.setTargetAtTime(s,r,a),this.engineSampleGains.acceleration?.gain.setTargetAtTime(c,r,a),this.engineSampleGains.deceleration?.gain.setTargetAtTime(h,r,a);for(const d of this.engineSampleSources)d.buffer===this.engineSamples.idle?d.playbackRate.setTargetAtTime(It(n.sampleRate,.97,1.01),r,.3):d.playbackRate.setTargetAtTime(It(n.sampleRate,.97,1.05),r,.24);i&&this.engineSampleGains.rev?.gain.setTargetAtTime(.12,r,.12)}playRecordedRev(){const n=this.ctx,t=this.engineSamples.rev,i=this.engineSampleGains.rev;if(!n||!t||!i||this.muted)return;const r=n.currentTime,a=n.createBufferSource();a.buffer=t,a.playbackRate.value=.99,i.gain.cancelScheduledValues(r),i.gain.setValueAtTime(1e-4,r),i.gain.linearRampToValueAtTime(.13,r+.08),i.gain.setTargetAtTime(1e-4,r+Math.min(t.duration,2.7),.12),a.connect(i),a.start(r),a.stop(r+Math.min(t.duration,3.2)),a.onended=()=>{a.disconnect(),i.gain.setTargetAtTime(0,n.currentTime,.04)}}setVolumes(n){this.volumes={...this.volumes,...Object.fromEntries(Object.entries(n).map(([t,i])=>[t,Ta(i)]))},this.applyVolumes()}getVolumes(){return{...this.volumes}}setMasterVolume(n){this.setVolumes({master:n})}getMasterVolume(){return this.volumes.master}setEngineVolume(n){this.setVolumes({engine:n})}setEffectsVolume(n){this.setVolumes({effects:n})}setMusicVolume(n){this.setVolumes({music:n})}setMuted(n){this.muted=n,this.applyVolumes()}mute(){this.setMuted(!0)}isMuted(){return this.muted}isAvailable(){return!!this.ctx&&!this.failed}getState(){return this.ctx?.state??(this.failed?"unavailable":"locked")}applyVolumes(){if(!this.ctx)return;const n=this.ctx.currentTime;this.master?.gain.setTargetAtTime(this.muted?0:this.volumes.master,n,.035),this.engineBus?.gain.setTargetAtTime(this.volumes.engine,n,.04),this.effectsBus?.gain.setTargetAtTime(this.volumes.effects,n,.04),this.applyMusicGain(.12)}applyMusicGain(n){if(!this.ctx||!this.musicBus)return;const t=this.isMusicPlaying()?this.volumes.music*this.musicDuck:0;this.musicBus.gain.setTargetAtTime(this.muted?0:t,this.ctx.currentTime,n)}duckMusic(n=1.35){!this.ctx||!this.musicBus||(this.musicDuck=.32,this.applyMusicGain(.025),this.musicDuckTimer&&window.clearTimeout(this.musicDuckTimer),this.musicDuckTimer=window.setTimeout(()=>{this.musicDuck=1,this.applyMusicGain(.38)},n*1e3))}update(n,t=0,i=!1,r=0,a=1/60){const o=this.ctx;if(!o)return;const s=Zo(n,t,i),c=o.currentTime,h=It(Number.isFinite(a)?a:1/60,1/240,.05),d=s.rpm>this.smoothedRpm?.12:.32;this.smoothedRpm+=(s.rpm-this.smoothedRpm)*(1-Math.exp(-h/d)),this.smoothedLoad+=(s.load-this.smoothedLoad)*(1-Math.exp(-h/(s.load>this.smoothedLoad?.08:.24)));const u={...s,rpm:this.smoothedRpm};this.updateEngineSampleMix(u,this.smoothedLoad,i,c,.09),this.nitroRumble?.frequency.setTargetAtTime(i?104+this.smoothedLoad*38:86,c,.18),this.nitroRumbleGain?.gain.setTargetAtTime(i?.055:1e-4,c,i?.12:.24),this.nitroNoiseGain?.gain.setTargetAtTime(i?.055:1e-4,c,i?.1:.22),this.skidGain?.gain.setTargetAtTime(It(r,0,1)>.08?.095*It(r,0,1):1e-4,c,.06),s.gear!==this.previousGear&&s.rpm>1400&&(this.shift(),this.previousGear=s.gear);const g=this.smoothedLoad>.76;(g&&!this.previousHighLoad&&c-this.lastHighLoadAt>2.2||i&&!this.previousNitro)&&(this.playRecordedRev(),this.lastHighLoadAt=c),i&&!this.previousNitro?(this.noiseBurst(.12,.2,650),this.sweep(165,76,.25,.035,"triangle"),this.duckMusic(.75)):!i&&this.previousNitro&&this.sweep(155,72,.3,.022,"sine"),this.previousNitro=i,this.previousHighLoad=g,this.lastVoice=u}shift(){const n=this.ctx;if(!n)return;const t=n.currentTime,i=this.engineShiftEnvelope?.gain;i&&(i.cancelScheduledValues(t),i.setValueAtTime(i.value,t),i.linearRampToValueAtTime(.64,t+.055),i.linearRampToValueAtTime(1,t+.24)),this.noiseBurst(.07,.14,780)}setTrackIndex(n){this.radio.select(n),this.musicError="",this.musicWanted?this.transitionTrack():this.dispatchRadioChange()}getTrackIndex(){return this.radio.currentIndex}getTrack(){return tn[this.radio.currentIndex]}getTrackTitle(){return this.getTrack().title}getTrackArtist(){return this.getTrack().artist}getRadioName(){return $o}isShuffleEnabled(){return this.radio.shuffleEnabled}setShuffle(n){this.radio.setShuffle(n),n?this.clearPreloader():this.preloadNextTrack()}hasSoundtrack(){return tn.length>0}isMusicRequested(){return this.musicWanted}setMusicPreference(n){this.musicWanted=n}getMusicError(){return this.musicError}playMusic(){if(this.ensureGraph(),!this.ctx||!this.musicBus||!this.hasSoundtrack()){this.musicError="Rumble Roam Radio is unavailable in this build.",this.dispatchRadioChange();return}this.musicWanted=!0,this.musicError="",(!this.musicElement||this.musicElement.dataset.trackId!==this.getTrack().id)&&this.setMusicSource();const n=this.ensureMusicElement(),t=this.musicTransitionId;n.play().then(()=>{t===this.musicTransitionId&&(this.applyMusicGain(.08),this.preloadNextTrack(),this.dispatchRadioChange())}).catch(()=>{t===this.musicTransitionId&&(this.musicError="Playback did not start. Tap Music to retry after audio is enabled.",this.applyMusicGain(.08),this.dispatchRadioChange())})}pauseMusic(){this.musicWanted=!1,++this.musicTransitionId,this.musicFadeTimer&&window.clearTimeout(this.musicFadeTimer);const n=this.musicElement,t=this.ctx;if(n&&t&&this.musicBus){const i=t.currentTime;this.musicBus.gain.cancelScheduledValues(i),this.musicBus.gain.setTargetAtTime(0,i,.035),this.musicFadeTimer=window.setTimeout(()=>{n.pause(),this.musicFadeTimer=0,this.dispatchRadioChange()},120)}else n?.pause();this.dispatchRadioChange()}nextTrack(){this.radio.next(),this.transitionTrack()}previousTrack(){this.radio.previous(),this.transitionTrack()}isMusicPlaying(){return!!this.musicElement&&!this.musicElement.paused&&!this.musicElement.ended}ensureMusicElement(){return this.musicElement||(this.musicElement=this.createMusicElement(this.getTrack(),"none")),!this.musicSource&&this.ctx&&this.musicBus&&(this.musicSource=this.ctx.createMediaElementSource(this.musicElement),this.musicSource.connect(this.musicBus)),this.musicElement}setMusicSource(){const n=this.getTrack();if(this.musicElement?.dataset.trackId===n.id)return;const t=this.preloader?.dataset.trackId===n.id?this.preloader:this.createMusicElement(n,"none"),i=this.musicElement;this.preloader&&t!==this.preloader&&this.clearPreloader(),this.preloader=null,this.preloadedTrackId="",i?.pause(),this.musicSource?.disconnect(),this.musicSource=null,i&&i!==t&&this.releaseMusicElement(i),this.musicElement=t,t.preload="none",this.ctx&&this.musicBus&&(this.musicSource=this.ctx.createMediaElementSource(t),this.musicSource.connect(this.musicBus))}createMusicElement(n,t){const i=document.createElement("audio");return i.preload=t,i.loop=!1,i.hidden=!0,i.setAttribute("aria-hidden","true"),i.dataset.trackId=n.id,i.src=cm(n),i.addEventListener("ended",()=>{this.musicWanted&&this.musicElement===i&&(++this.musicTransitionId,this.radio.next(),this.setMusicSource(),this.playCurrentTrack())}),i.addEventListener("error",()=>{!i.error||this.musicElement!==i||(this.musicError="Rumble Roam Radio could not load this track. Check your connection and press Play to retry.",this.applyMusicGain(.04),this.musicSource?.disconnect(),this.musicSource=null,this.releaseMusicElement(i),this.musicElement=null,this.dispatchRadioChange())}),document.body.append(i),t!=="none"&&i.load(),i}releaseMusicElement(n){n.pause(),n.removeAttribute("src"),n.load(),n.remove()}preloadNextTrack(){if(!this.musicWanted||!this.musicElement||this.radio.shuffleEnabled||tn.length<2)return;const n=tn[(this.radio.currentIndex+1)%tn.length];this.preloadedTrackId!==n.id&&(this.clearPreloader(),this.preloader=this.createMusicElement(n,"metadata"),this.preloadedTrackId=n.id)}clearPreloader(){this.preloader&&this.releaseMusicElement(this.preloader),this.preloader=null,this.preloadedTrackId=""}async playCurrentTrack(){const n=this.ensureMusicElement();n.dataset.trackId!==this.getTrack().id&&this.setMusicSource();const t=this.musicTransitionId;try{if(await n.play(),t!==this.musicTransitionId)return;this.musicError="",this.applyMusicGain(.1),this.preloadNextTrack()}catch{if(t!==this.musicTransitionId)return;this.musicError="Playback did not start. Tap Music to retry after audio is enabled."}this.dispatchRadioChange()}async resumeCurrentTrack(){!this.musicWanted||!this.hasSoundtrack()||((!this.musicElement||this.musicElement.dataset.trackId!==this.getTrack().id)&&this.setMusicSource(),await this.playCurrentTrack())}transitionTrack(){const n=this.musicWanted;++this.musicTransitionId;const t=this.musicTransitionId;if(!this.hasSoundtrack()){this.dispatchRadioChange();return}if(!n){this.dispatchRadioChange();return}if(!this.ctx||!this.musicBus){this.playCurrentTrack();return}const i=this.ctx.currentTime;this.musicBus.gain.cancelScheduledValues(i),this.musicBus.gain.setTargetAtTime(0,i,.025),this.musicFadeTimer&&window.clearTimeout(this.musicFadeTimer),this.musicFadeTimer=window.setTimeout(()=>{this.musicFadeTimer=0,!(t!==this.musicTransitionId||!this.musicWanted)&&(this.setMusicSource(),this.playCurrentTrack())},100),this.dispatchRadioChange()}playDispatchScheduled=!1;dispatchRadioChange(){this.playDispatchScheduled||typeof window>"u"||(this.playDispatchScheduled=!0,queueMicrotask(()=>{this.playDispatchScheduled=!1,window.dispatchEvent(new Event("rumble-radio-change"))}))}suspend(){this.musicElement&&!this.musicElement.paused&&(this.musicElement.pause(),this.musicWanted=!0),this.ctx?.state==="running"&&this.ctx.suspend().catch(()=>{})}dispose(){this.musicDuckTimer&&window.clearTimeout(this.musicDuckTimer),this.musicFadeTimer&&window.clearTimeout(this.musicFadeTimer),this.musicWanted=!1,this.clearPreloader(),this.musicElement?.pause(),this.musicSource?.disconnect(),this.musicElement&&(this.releaseMusicElement(this.musicElement),this.musicElement=null),this.musicSource=null;for(const n of this.engineSampleSources)try{n.stop(),n.disconnect()}catch{}this.engineSampleSources=[];for(const n of Object.values(this.engineSampleGains))try{n?.disconnect()}catch{}for(const n of Object.values(this.engineSampleFilters))try{n?.disconnect()}catch{}try{this.engineShiftEnvelope?.disconnect(),this.nitroRumble?.stop(),this.nitroRumble?.disconnect(),this.nitroRumbleGain?.disconnect(),this.nitroNoiseGain?.disconnect()}catch{}this.ctx?.close().catch(()=>{}),this.ctx=null}diagnostics(){return{state:this.getState(),rms:this.outputRms(),spectrum:this.outputSpectrum(),muted:this.muted,volumes:this.getVolumes(),rpm:this.lastVoice.rpm,gear:this.lastVoice.gear,load:this.smoothedLoad,nitro:this.previousNitro,engineSampleState:this.engineSampleState,engineSampleError:this.engineSampleError,enginePlaybackRate:this.lastVoice.sampleRate,nitroRumbleGain:this.nitroRumbleGain?.gain.value??0,radio:$o,track:this.getTrackTitle(),artist:this.getTrackArtist(),trackIndex:this.getTrackIndex(),mediaTrackId:this.musicElement?.dataset.trackId??"",preloadedTrackId:this.preloadedTrackId,audioSrc:this.musicElement?.currentSrc??"",shuffle:this.isShuffleEnabled(),musicPlaying:this.isMusicPlaying(),playbackRequested:this.musicWanted,musicAvailable:this.hasSoundtrack(),musicError:this.musicError,currentTime:this.musicElement?.currentTime??0,duration:this.musicElement?.duration??0,readyState:this.musicElement?.readyState??0}}createDiagnosticCapture(){if(!this.ctx||!this.analyser)return null;const n=this.ctx.createMediaStreamDestination();return this.analyser.connect(n),{stream:n.stream,close:()=>{try{this.analyser?.disconnect(n)}catch{}for(const t of n.stream.getTracks())t.stop()}}}testTone(){return!this.ctx||this.muted?!1:(this.sweep(520,760,.22,.12,"sine"),!0)}jump(){this.sweep(145,430,.3,.05,"triangle"),this.duckMusic(.5)}landing(n=1){const t=Ta(n);this.noiseBurst(.085+t*.08,.22,1500),this.sweep(118,48,.2,.095*t,"sine"),t>.45&&this.duckMusic(.7)}impact(n=1){const t=Ta(n);this.noiseBurst(.13+t*.13,.3,2100),this.sweep(175,38,.29,.13*t,"triangle"),this.duckMusic(1.35)}ensureGraph(){this.ctx||this.start()}sweep(n,t,i,r,a){const o=this.ctx;if(!o||this.muted||!this.effectsBus)return;const s=o.createOscillator(),c=o.createBiquadFilter(),h=o.createGain(),d=o.currentTime;s.type=a,s.frequency.setValueAtTime(n,d),s.frequency.exponentialRampToValueAtTime(Math.max(24,t),d+i),c.type="lowpass",c.frequency.value=2200,h.gain.setValueAtTime(1e-4,d),h.gain.linearRampToValueAtTime(r,d+.015),h.gain.exponentialRampToValueAtTime(1e-4,d+i),s.connect(c).connect(h).connect(this.effectsBus),s.start(d),s.stop(d+i+.02),s.onended=()=>{s.disconnect(),c.disconnect(),h.disconnect()}}noiseBurst(n,t,i){const r=this.ctx;if(!r||!this.noiseBuffer||this.muted||!this.effectsBus)return;const a=r.createBufferSource(),o=r.createBiquadFilter(),s=r.createGain(),c=r.currentTime;a.buffer=this.noiseBuffer,o.type="lowpass",o.frequency.value=i,s.gain.setValueAtTime(Math.max(1e-4,n),c),s.gain.exponentialRampToValueAtTime(1e-4,c+t),a.connect(o).connect(s).connect(this.effectsBus),a.start(c),a.stop(c+t+.02),a.onended=()=>{a.disconnect(),o.disconnect(),s.disconnect()}}outputRms(){if(!this.ctx||!this.analyser||!this.meterBuffer||this.ctx.state!=="running"||this.muted)return 0;this.analyser.getFloatTimeDomainData(this.meterBuffer);let n=0;for(const t of this.meterBuffer)n+=t*t;return Math.sqrt(n/this.meterBuffer.length)}outputSpectrum(){const n=this.ctx,t=this.analyser,i=this.spectrumBuffer;if(!n||!t||!i||n.state!=="running"||this.muted)return{low:0,mid:0,high:0,highRatio:0};t.getFloatFrequencyData(i);let r=0,a=0,o=0;const s=n.sampleRate/t.fftSize;for(let h=1;h<i.length;h++){const d=i[h];if(!Number.isFinite(d))continue;const u=Math.pow(10,d/20),g=u*u,m=h*s;m<250?r+=g:m<1e3?a+=g:m<6e3&&(o+=g)}const c=r+a+o;return{low:Math.sqrt(r),mid:Math.sqrt(a),high:Math.sqrt(o),highRatio:c>1e-12?o/c:0}}}const Hs="rumble-roam-audio-preferences-v4",pm=["rumble-roam-audio-preferences-v3","rumble-roam-audio-preferences-v2"],Ti={volumes:{master:.72,engine:.45,effects:.65,music:.65},muted:!1,trackIndex:0,shuffle:!1,musicPlaying:!0},jo={master:.62,engine:.84,effects:.72,music:.12},Qo=(e,n)=>typeof e=="number"&&Math.abs(e-n)<1e-4;function mm(e,n){if(e)return{volumes:{...Ti.volumes,...e.volumes},muted:e.muted??!1,trackIndex:e.trackIndex??0,shuffle:e.shuffle??!1,musicPlaying:e.musicPlaying??!0};if(!n)return{...Ti,volumes:{...Ti.volumes}};const t=n.volumes,i={...Ti.volumes};for(const o of Object.keys(i)){const s=t?.[o];typeof s=="number"&&Number.isFinite(s)&&!Qo(s,jo[o])&&(i[o]=Math.min(1,Math.max(0,s)))}const r=typeof t?.music=="number"&&!Qo(t.music,jo.music),a=n.muted===!0;return{volumes:i,muted:n.muted??!1,trackIndex:n.trackIndex??0,shuffle:n.shuffle??!1,musicPlaying:n.musicPlaying===!1?!(r||a):n.musicPlaying??!0}}const $=e=>document.querySelector(e),Vn=!!(window.matchMedia?.("(pointer: coarse)").matches||window.matchMedia?.("(any-pointer: coarse)").matches||navigator.maxTouchPoints>0||"ontouchstart"in window),hn=document.documentElement;hn.classList.toggle("touch-capable",Vn);hn.classList.toggle("keyboard-controls-visible",!Vn);const gm=$("#app");gm.innerHTML=`
 <canvas id="game"></canvas>
 <div class="grain"></div>
 <header class="topbar"><a class="brand" href="#"><span class="brand-icon">✦</span><span>RUMBLE<span class="accent">ROAM</span></span></a><div class="location-label"><span class="pulse"></span><span id="place-name">Moab, Utah</span><small id="terrain-name">RED ROCK COUNTRY</small></div><div class="top-actions"><button id="map-btn" class="top-btn place-button" aria-label="Open map and choose a place">⌖ <span>MAP</span></button><button id="pause-btn" class="top-btn" aria-label="Pause game">Ⅱ <span>PAUSE</span></button><button id="help-btn" class="top-btn help-trigger" aria-label="Help and controls">?</button></div></header><div id="geo-status" class="world-data-status" aria-live="polite">GEOGRAPHIC DATA · LOADING</div><a class="world-data-credit" href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">© OPENSTREETMAP CONTRIBUTORS · ODbL</a>
 <aside class="hud-left"><div class="stat"><span class="stat-label">VELOCITY</span><div class="speed-line"><strong id="speed">000</strong><span>KM/H</span></div><div class="speed-track"><i id="speed-bar"></i></div><small id="street-name" class="street-name"></small></div><div class="stat nitro-stat"><span class="stat-label">NITROUS</span><div class="nitro-track"><i id="nitro-bar"></i></div><small id="nitro-state">READY TO BURN</small></div><div class="radio-quick" aria-label="Rumble Roam Radio"><span id="radio-quick-track" class="radio-quick-track">Super Wreck Roadway · Umplix</span><button id="radio-quick-previous" type="button" aria-label="Previous song" title="Previous song">◀|</button><button id="radio-quick-toggle" type="button" aria-label="Play Rumble Roam Radio" title="Play or pause music">▶</button><button id="radio-quick-next" type="button" aria-label="Next song" title="Next song">|▶</button></div><div class="stunt-stat" aria-live="polite"><div><span>AIR TIME</span><b id="air-time">0.0s</b></div><div><span>STUNT</span><b id="stunt-score">0</b></div><small>BEST <b id="stunt-best">0</b></small><small id="level-hint" class="level-hint"></small></div></aside>
 <div class="hud-bottom"><div class="hint keyboard-hint"><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> DRIVE <i></i><kbd>SHIFT</kbd> BOOST <i></i><kbd>SPACE</kbd> JUMP <i></i><kbd>F</kbd> LEVEL <i></i><kbd>Q</kbd><kbd>E</kbd> FLIP</div><div class="touch-hint">LEFT THUMB STEERS · GO DRIVES · BOOST IS INDEPENDENT</div><div class="camera-toggle"><button data-camera="chase" class="selected">CHASE</button><button data-camera="far">FAR</button><button data-camera="hood">HOOD</button><button data-camera="free">FREE</button></div></div>
 <button id="settings-btn" class="settings-fab">⚙</button>
 <section id="location-panel" class="panel hidden"><div class="panel-head"><div><span class="eyebrow">PICK YOUR PLAYGROUND</span><h2>Map / Places</h2></div><button class="close-btn" data-close="location-panel" aria-label="Close map and places">×</button></div><div class="picker-current"><strong id="picker-place">Moab, Utah</strong><span id="picker-coverage" aria-live="polite">Checking packaged map coverage…</span></div><form id="search-form"><input id="location-search" placeholder="Search a place or paste coordinates" autocomplete="off"><button class="search-btn">SEARCH <span>↗</span></button></form><div id="search-results" class="results"></div><div class="map-wrap"><div id="mini-map"></div><div class="map-hint">CLICK MAP TO DROP A PIN</div></div><button id="practice-course" class="practice-course-btn">ADD OPTIONAL PRACTICE OBSTACLES</button><div class="preset-title">FAVORITE RUNS <span>09 LOCATIONS</span></div><div id="presets" class="presets"></div><div class="coverage-disclosure">Packaged OSM buildings and roads are available only in Manhattan, Mount Kisco and Moab. Other locations load terrain only; worldwide building and road streaming is not available.</div><div class="attribution">Terrain <a href="https://registry.opendata.aws/terrain-tiles/" target="_blank">Mapzen / Tilezen</a> · © <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a> · Map <a href="https://openfreemap.org/" target="_blank">OpenFreeMap</a><details class="terrain-credits"><summary>Terrain source credits</summary><div>ArcticDEM: DigitalGlobe imagery; NSF awards 1043681, 1559691 and 1542736. Australia: © Commonwealth of Australia (Geoscience Australia) 2017. Austria: © offene Daten Österreichs – Digitales Geländemodell (DGM) Österreich. Canada: Open Government Licence – Canada. Europe: Copernicus / EU-DEM. Global ETOPO1: NOAA. Mexico: INEGI, Continental relief, 2016. New Zealand: © Land Information New Zealand and NZ Government. Norway: © Kartverket. United Kingdom: © Environment Agency 2015. United States 3DEP, GMTED2010 and SRTM: USGS.</div></details></div></section>
 <section id="settings-panel" class="panel settings hidden"><div class="panel-head"><div><span class="eyebrow">TUNE THE MAYHEM</span><h2>Game settings</h2></div><button class="close-btn" data-close="settings-panel">×</button></div><label>Graphics quality <select id="graphics-quality"><option value="low">Low · smoother</option><option value="medium">Medium · balanced</option><option value="high">High · detailed</option></select></label><label>Touch steering <select id="steering-mode"><option value="analog">Analog pad</option><option value="buttons">Classic buttons</option></select></label><label>Steering sensitivity <span id="sensitivity-value">100%</span><input id="steering-sensitivity" type="range" min="50" max="150" value="100"></label><label>Gravity <span id="gravity-value">24</span><input id="gravity" type="range" min="6" max="35" value="24"></label><label>Jump force <span id="jump-value">15</span><input id="jump" type="range" min="8" max="25" value="15"></label><label>Truck scale <span id="scale-value">1.0×</span><input id="scale" type="range" min="7" max="16" value="10"></label><label>Paint <input id="paint" type="color" value="#d84924"></label><label class="toggle"><span>Audio</span><input id="audio-toggle" type="checkbox" checked></label><label>Master volume <span id="volume-value">72%</span><input id="master-volume" type="range" min="0" max="100" value="72"></label><label>Engine volume <span id="engine-volume-value">45%</span><input id="engine-volume" type="range" min="0" max="100" value="45"></label><label>Effects volume <span id="effects-volume-value">65%</span><input id="effects-volume" type="range" min="0" max="100" value="65"></label><label>Music volume <span id="music-volume-value">65%</span><input id="music-volume" type="range" min="0" max="100" value="65"></label><div class="radio-heading"><span class="eyebrow">RUMBLE ROAM RADIO</span><small id="music-track" class="settings-note">Super Wreck Roadway — Umplix</small><a id="music-credit" class="music-attribution" href="https://opengameart.org/content/super-wreck-roadway" target="_blank" rel="noreferrer">CC0 track source ↗</a></div><div class="music-controls"><button id="music-previous" class="ghost-btn" aria-label="Previous track">PREV</button><button id="music-play" class="ghost-btn">PLAY</button><button id="music-next" class="ghost-btn" aria-label="Next track">NEXT</button><button id="music-shuffle" class="ghost-btn" aria-label="Toggle shuffle" aria-pressed="false">SHUFFLE</button></div><button id="audio-test" class="ghost-btn audio-test">TEST SOUND</button><small id="audio-status" class="settings-note">Music starts with the first driving input; saved audio choices are remembered.</small><button id="reset-btn" class="search-btn full">RESET TRUCK <span>↻</span></button><small class="settings-note">Esc pauses the run. R recovers the truck. Press M to pick a new place.</small></section>
 <section id="pause-panel" class="pause-panel hidden"><span class="eyebrow">TAKE A BREATHER</span><h1>PAUSED</h1><button id="resume-btn" class="search-btn">BACK TO IT <span>▶</span></button><button id="pause-location" class="ghost-btn">CHANGE LOCATION</button></section>
 <section id="help-panel" class="panel help-panel hidden" aria-labelledby="help-title"><div class="panel-head"><div><span class="eyebrow">QUICK DRIVER GUIDE</span><h2 id="help-title">Controls</h2></div><button class="close-btn" data-close="help-panel" aria-label="Close help">×</button></div><p class="touch-guide-copy">Drag the left thumb pad to steer, or tilt it in the air for rolls and flips. GO drives in the selected gear. BOOST accelerates on its own; JUMP launches independently. Hold LEVEL in air or on the ground to smoothly right the truck.</p><div class="help-grid"><strong>Keyboard</strong><span>W / S · Accelerate / reverse</span><span>A / D or ← / → · Steer</span><span>Shift · Boost · Space · Jump · F · Hold to level in air or on ground</span><span>Q / E · Roll · R · Reset · C · Camera · Esc · Pause · M · Locations</span><strong>Touch</strong><span>Analog pad · Steering / aerial rolls and pitch</span><span>GO · Drive · FWD/REV · Select gear</span><span>BOOST · Acceleration/nitro · JUMP · Launch · LEVEL · Recover</span><span>Bottom shortcuts · Reset · Camera · Pause · Help</span></div></section>
 <section id="building-info" class="building-info hidden" aria-live="polite"><button id="building-info-close" class="info-close" aria-label="Close building information">×</button><span id="building-info-type" class="eyebrow">OPENSTREETMAP BUILDING</span><h3 id="building-info-name">Building</h3><div id="building-info-attrs"></div></section>
 <div id="toast" class="toast"></div>
 <div class="orientation-tip" aria-hidden="true">LANDSCAPE RECOMMENDED</div>
 <nav class="mobile-utility" aria-label="Quick game controls"><button id="touch-reset" aria-label="Reset truck">↻ <span>RESET</span></button><button id="touch-camera" aria-label="Change camera">◉ <span>CAM</span></button><button id="touch-pause" aria-label="Pause game">Ⅱ <span>PAUSE</span></button><button id="touch-help" aria-label="Help and controls">? <span>HELP</span></button><button id="touch-control-mode" aria-label="Switch control display" aria-pressed="true">⌨ <span>KEYS</span></button></nav>
 <div class="mobile-controls" aria-label="Touch driving controls"><div class="touch-steering"><div id="analog-pad" class="analog-pad" role="application" aria-label="Drag to steer; move in the air to roll and pitch"><div class="analog-ring"></div><div id="analog-knob" class="analog-knob"><span>◉</span></div><small id="analog-label">STEER</small></div><div class="classic-pad"><button data-touch="a" aria-label="Steer left">◀<span>LEFT</span></button><button data-touch="d" aria-label="Steer right">▶<span>RIGHT</span></button></div></div><div class="touch-right"><div class="touch-action-row"><button data-touch="jump" aria-label="Tap to jump; hold briefly for extra height">⬆ <span>JUMP</span></button><button data-touch="nitro" class="nitro-touch" aria-label="Hold to boost independently">⚡ <span>BOOST</span></button><button id="touch-level" data-touch="level" class="level-touch" aria-label="Hold to level truck upright">↥ <span>LEVEL</span></button></div><div class="touch-drive-row"><button id="touch-gear" class="gear-button" aria-label="Toggle forward and reverse">FWD</button><button data-touch="go" class="go-button" aria-label="Hold to accelerate">GO <small>HOLD</small></button></div></div></div>
 <div class="loading-screen" id="loading"><div class="loader-mark">✦</div><div class="loader-title">MAPPING THE WILD</div><div class="loader-sub">LOADING REAL-WORLD TERRAIN</div><div class="loader-track"><i></i></div></div>`;let Bt=Vn?"low":"high";const cr=e=>Vn?{low:1.5,medium:1.75,high:2}[e]:{low:.85,medium:1.1,high:1.35}[e],dr=()=>({width:Math.round(window.visualViewport?.width??innerWidth),height:Math.round(window.visualViewport?.height??innerHeight)}),Gn=dr(),_t=new Rp({canvas:$("#game"),antialias:!1,powerPreference:"high-performance"});_t.setPixelRatio(Math.min(devicePixelRatio||1,cr(Bt)));_t.setSize(Gn.width,Gn.height);_t.shadowMap.enabled=!1;_t.shadowMap.type=Cs;_t.toneMapping=ys;_t.toneMappingExposure=.96;const Ka=_t.getContext(),Jo=Ka.getExtension("WEBGL_debug_renderer_info"),vm=String(Ka.getParameter(Jo?Jo.UNMASKED_RENDERER_WEBGL:Ka.RENDERER)),Et=new Fc,Vs=new Wa(_t),$i=document.createElement("canvas");$i.width=512;$i.height=256;const zn=$i.getContext("2d"),di=zn.createLinearGradient(0,0,0,256);di.addColorStop(0,"#91aab8");di.addColorStop(.43,"#c6d1d0");di.addColorStop(.58,"#e3d8c7");di.addColorStop(1,"#766b5e");zn.fillStyle=di;zn.fillRect(0,0,512,256);const ur=zn.createRadialGradient(350,138,4,350,138,105);ur.addColorStop(0,"rgba(255,241,214,.72)");ur.addColorStop(1,"rgba(255,241,214,0)");zn.fillStyle=ur;zn.fillRect(245,35,210,210);const Zi=new Ls($i);Zi.mapping=Vi;Zi.colorSpace=tr;const _m=Vs.fromEquirectangular(Zi);Et.environment=_m.texture;Et.environmentIntensity=.42;Zi.dispose();Vs.dispose();Et.background=new $e("#9bb7c1");Et.fog=new Ds("#c2c9c4",65e-6);const Je=new jn(60,Gn.width/Gn.height,.1,18e3);Je.position.set(0,8,-16);const Sm=new ne,es=new ne,Aa=new ne,Ai=new ne,Ri=new ne,$n=new ne,zs=Object.assign(((e,n,t,i=!1)=>{Je.updateMatrixWorld(!0);const r=es.set(e,n,t),a=Sm.copy(r).project(Je);if(!i)return a;Aa.copy(r).sub(Je.position);const o=Aa.length();Wi.set(Je.position,Aa.multiplyScalar(1/Math.max(.001,o)));const s=Wi.intersectObjects(He.group.children,!1).some(c=>c.distance<o-.8);return{x:a.x,y:a.y,z:a.z,visible:!s}}),{viewport:{width:Gn.width,height:Gn.height},screenFrame:(e,n,t)=>{Je.updateMatrixWorld(!0),Je.matrixWorld.extractBasis(Ai,Ri,$n);const i=Je.position.distanceTo(es.set(e,n,t));return{right:[Ai.x,Ai.y,Ai.z],up:[Ri.x,Ri.y,Ri.z],worldPerPixel:2*i*Math.tan(st.degToRad(Je.fov)*.5)/Math.max(1,innerHeight)}}});Et.add(new Bc(15398143,5851447,.82));const gt=new Gc(16773336,2.35);gt.position.set(-350,550,260);gt.castShadow=!0;gt.shadow.bias=-12e-5;gt.shadow.normalBias=.025;gt.shadow.radius=2;gt.shadow.camera.left=-82;gt.shadow.camera.right=82;gt.shadow.camera.top=82;gt.shadow.camera.bottom=-82;gt.shadow.camera.near=8;gt.shadow.camera.far=380;gt.target.position.set(0,0,0);Et.add(gt,gt.target);const $a=new an({side:yt,depthWrite:!1,depthTest:!1,toneMapped:!1,uniforms:{uRumbleDesert:{value:1},uRumbleAlpine:{value:0},uSunDirection:{value:new ne(-.42,.63,.65).normalize()}},vertexShader:"varying vec3 vSkyDirection;void main(){vSkyDirection=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec3 vSkyDirection;uniform float uRumbleDesert;uniform float uRumbleAlpine;uniform vec3 uSunDirection;void main(){vec3 d=normalize(vSkyDirection);float h=smoothstep(-.16,.84,d.y);vec3 horizon=mix(vec3(.79,.72,.58),vec3(.66,.75,.77),uRumbleDesert);horizon=mix(horizon,vec3(.72,.79,.84),uRumbleAlpine);vec3 zenith=mix(vec3(.24,.37,.48),vec3(.3,.46,.55),uRumbleDesert);vec3 sky=mix(horizon,zenith,h);float sun=pow(max(dot(d,normalize(uSunDirection)),0.0),180.0);sky+=vec3(1.0,.72,.4)*sun*.32;gl_FragColor=vec4(sky,1.0);}"}),ji=new dt(new kc(12e3,24,16),$a);ji.frustumCulled=!1;ji.renderOrder=-1e3;Et.add(ji);const fr=new an({transparent:!0,depthWrite:!1,toneMapped:!1,uniforms:{uOpacity:{value:.25}},vertexShader:"varying vec2 vShadowUv;void main(){vShadowUv=uv*2.0-1.0;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec2 vShadowUv;uniform float uOpacity;void main(){float r=length(vShadowUv);float a=(1.0-smoothstep(.18,1.0,r))*uOpacity;gl_FragColor=vec4(.12,.105,.085,a);}"}),li=new dt(new Hc(1,32),fr);li.rotation.x=-Math.PI/2;li.renderOrder=1;Et.add(li);const tt=new Op(Vn?63:127);Et.add(tt.group);const He=new qp;Et.add(He.group,He.roadsGroup);const kn=new $p;Et.add(kn.group);const sn=new om;Et.add(sn.group);const wn=new sm;Et.add(wn.group);let ln=new Zp;Et.add(ln.root);const Y=new tm,{ArcadeCollisionWorld:Mm}=await za(async()=>{const{ArcadeCollisionWorld:e}=await import("./collision-world-DeM6Yckj.js");return{ArcadeCollisionWorld:e}},__vite__mapDeps([0,1]),import.meta.url),Ht=new Mm;await Ht.init();const nt=new rm,Pe=new hm;let Sn=null,wi=null,Ci=[];const Za="rumble-roam-best-stunt-score";function ja(){try{return Number(localStorage.getItem(Za))||0}catch{return 0}}const pt=new em(ja());let Ws=0,Xs=null;(location.hostname==="localhost"||location.hostname==="127.0.0.1")&&(window.__rumbleRoamDebug={getAudioDiagnostics(){return Pe.diagnostics()},startAudioPreviewCapture(){if(typeof MediaRecorder>"u"||Sn)return null;const e=Pe.createDiagnosticCapture();if(!e)return null;const t=["audio/webm;codecs=opus","audio/mp4","audio/webm"].find(i=>MediaRecorder.isTypeSupported(i))??"";try{Sn=new MediaRecorder(e.stream,t?{mimeType:t}:void 0)}catch{return e.close(),null}return wi=e.close,Ci=[],Sn.ondataavailable=i=>{i.data.size&&Ci.push(i.data)},Sn.start(200),Sn.mimeType||t||"browser-default"},async stopAudioPreviewCapture(){const e=Sn;return e?await new Promise(n=>{e.onstop=async()=>{try{const t=new Blob(Ci,{type:e.mimeType}),i=Array.from(new Uint8Array(await t.arrayBuffer()));wi?.(),n({mimeType:t.type,bytes:i})}catch{wi?.(),n(null)}finally{Sn=null,wi=null,Ci=[]}},e.stop()}):null},getStreetLabelCount(){return He.streetLabelCount},getStreetLabels(){return He.streetLabelPositions.map(e=>{const n=new ne(e.x,e.y,e.z).project(Je),t=e.screenBounds;return{...e,screenX:(n.x+1)*.5*innerWidth,screenY:(1-n.y)*.5*innerHeight,depth:n.z,screenBounds:t?{left:(t.left+1)*.5*innerWidth,right:(t.right+1)*.5*innerWidth,top:(1-t.bottom)*.5*innerHeight,bottom:(1-t.top)*.5*innerHeight}:void 0}})},getStreetGeometry(){return He.streetLabelGeometryDebug},getStreetLabelDiagnostics(){return He.streetLabelDiagnostics},getStreetCameraState(){return Je.updateMatrixWorld(!0),Je.getWorldDirection($n),{truckYaw:Y.yaw,cameraPosition:[Je.position.x,Je.position.y,Je.position.z],cameraForward:[$n.x,$n.y,$n.z],cameraFov:Je.fov,cameraAspect:Je.aspect,viewport:[innerWidth,innerHeight],projectionMatrix:Array.from(Je.projectionMatrix.elements),viewMatrix:Array.from(Je.matrixWorldInverse.elements)}},getStreetAtlasDataUrl(){return He.streetLabelAtlasImage?.toDataURL()??null},getPhysicsState(){return{yaw:Y.yaw,pitch:Y.pitch,roll:Y.roll,grounded:Y.grounded,position:[Y.pos.x,Y.pos.y,Y.pos.z],speed:Y.speed,verticalSpeed:Y.vel.y,airTime:Y.airTime,airRoll:nt.state.airRoll,analogX:nt.analog.x,stuntRolls:pt.rolls,stuntPoints:pt.currentPoints,lastLandingSpeed:Ws,lastLandingAward:Xs,lastLandingDebug:pt.lastLandingDebug,stuntAirborne:pt.isAirborne,stuntAirtime:pt.airtime}},spawnImpactTestBuilding(){tt.frame&&He.addFixtureRoad(tt.frame,(i,r)=>tt.heightAt(i,r));const e=si(Y.yaw),n=Y.pos.clone().addScaledVector(e,11),t=He.addFixtureBuilding(`fixture-impact-${Date.now()}`,n.x,n.z,(i,r)=>tt.heightAt(i,r),Ht,{w:7,d:6,h:9});return Vt("LOCAL TEST BUILDING AHEAD"),t.id},spawnImpactTestSet(){const e=si(Y.yaw);return tt.frame&&He.addFixtureRoad(tt.frame,(n,t)=>tt.heightAt(n,t)),[10,27].map((n,t)=>{const i=Y.pos.clone().addScaledVector(e,n);return He.addFixtureBuilding(`fixture-impact-set-${Date.now()}-${t}`,i.x,i.z,(r,a)=>tt.heightAt(r,a),Ht,t?{w:10,d:8,h:24}:{w:6,d:5,h:7}).id})},prepareMappedImpact(){const e=He.list.filter(o=>o.source==="osm"&&!o.broken);e.sort((o,s)=>Math.hypot(o.x-Y.pos.x,o.z-Y.pos.z)-Math.hypot(s.x-Y.pos.x,s.z-Y.pos.z));const n=e[0];if(!n)return null;const t=new ne(n.x-Y.pos.x,0,n.z-Y.pos.z).normalize();t.lengthSq()<.1&&t.set(0,0,1);const i=Math.max(n.w,n.d)*.5+6,r=n.x-t.x*i,a=n.z-t.z*i;return Y.yaw=Math.atan2(t.x,t.z),Y.pos.set(r,tt.heightAt(r,a)+1.65*ui.scale,a),Y.vel.set(0,0,0),Y.grounded=!0,Y.pitch=0,Y.roll=0,Ht.step(Y.pos,Y.yaw,1/120,Y.vel),Ht.step(Y.pos,Y.yaw,1/120,Y.vel),Y.vel.copy(t).multiplyScalar(24),n.id},hasFixtureRoad(){return He.roadsGroup.children.some(e=>e.userData.kind==="fixture-road")}});const ui={gravity:24,jump:15,scale:1};$("#graphics-quality").value=Bt;let Cn="chase",nn=!1,Qa=0,ti=.25,on=null,Ja=null,Kt=rr[1],Ra=0,ci=performance.now(),kt=0,ts=0,ns=0,is=0,as=0,wa=performance.now(),yi=0,Fi=0,Ca=0,Pi=0,rs=0,os=0;const Wi=new Oc,ss=new ut;$("#building-info-close").onclick=()=>$("#building-info").classList.add("hidden");$("#game").addEventListener("pointerup",e=>{if(e.button!==0||hn.classList.contains("overlay-open"))return;const n=$("#game").getBoundingClientRect();ss.set((e.clientX-n.left)/n.width*2-1,-(e.clientY-n.top)/n.height*2+1),Wi.setFromCamera(ss,Je);const t=Wi.intersectObjects(He.group.children,!1).find(d=>d.object.isBatchedMesh&&d.batchId!==void 0);if(!t)return;const i=He.list.find(d=>d.batch===t.object&&d.instanceId===t.batchId);if(!i||i.broken||!i.tags)return;const r=i.tags,a=$("#building-info"),o=[r["addr:housenumber"],r["addr:street"]].filter(Boolean).join(" ");$("#building-info-name").textContent=r.name??(o||(i.category==="other"?"Mapped building":i.category[0].toUpperCase()+i.category.slice(1))),$("#building-info-type").textContent=r["building:part"]?"OPENSTREETMAP BUILDING PART":"OPENSTREETMAP BUILDING";const s=[["Type",r.building??r["building:part"]??"—"],["Height",r.height??r["building:height"]??(r["building:levels"]?`${r["building:levels"]} levels`:"")],["Name",r.name??""],["Address",o]],c=$("#building-info-attrs");c.replaceChildren();const h=document.createElement("dl");for(const[d,u]of s)if(u){const g=document.createElement("dt");g.textContent=d;const m=document.createElement("dd");m.textContent=u,h.append(g,m)}c.append(h),a.classList.remove("hidden")});function Em(){const e=performance.memory;return e?Math.round(e.usedJSHeapSize/1048576*10)/10:null}function Vt(e){const n=$("#toast");n.textContent=e,n.classList.add("show"),clearTimeout(ts),ts=window.setTimeout(()=>n.classList.remove("show"),2800)}function hr(){nt.releaseAll(),$("#analog-knob").style.transform="translate(0,0)",$("#analog-pad").classList.remove("dragging")}function Zt(){const e=["location-panel","settings-panel","help-panel","pause-panel"].some(n=>!$("#"+n).classList.contains("hidden"));hn.classList.toggle("overlay-open",e),e&&hr()}function qs(){document.querySelectorAll(".preset").forEach((e,n)=>{const t=rr[n],i=Math.abs(t.lat-Kt.lat)<2e-4&&Math.abs(t.lon-Kt.lon)<2e-4;e.classList.toggle("selected",i),e.setAttribute("aria-pressed",String(i))})}function ls(e){$("#picker-place").textContent=Kt.name,$("#picker-coverage").textContent=e}async function Qi(e){const n=++Ra;Kt=e,$("#picker-place").textContent=e.name,ls("Checking packaged OSM buildings and roads…"),qs(),nn=!1,Fi=0,$("#building-info").classList.add("hidden"),wn.clear(),kn.clear(),He.reset(Ht),$("#geo-status").textContent="MAPPING WORLD";const t=e.name.toLowerCase(),i=/moab|grand canyon|sahara|utah|arizona/.test(t),r=/alps|everest|mountain|swiss/.test(t);$a.uniforms.uRumbleDesert.value=i?1:0,$a.uniforms.uRumbleAlpine.value=r?1:0,Et.fog instanceof Ds&&Et.fog.color.set(i?"#c9b99e":r?"#bdcbd2":"#c2c9c4"),["location-panel","settings-panel","help-panel","pause-panel"].forEach(a=>$("#"+a).classList.add("hidden")),Zt(),$("#loading").classList.remove("done"),$("#place-name").textContent=e.name,$("#terrain-name").textContent=e.terrain??"OPEN TERRAIN",Vt("Mapping terrain…"),await tt.load(e),n===Ra&&(Y.reset(tt,ui.scale),pt.reset(),$("#loading").classList.add("done"),Vt("Terrain is ready. Go make a mess."),He.load(e,(a,o)=>tt.heightAt(a,o),Ht,tt.frame).then(a=>{n===Ra&&(a.heading!==void 0&&Y.speed<2&&(Y.yaw=a.heading),$("#geo-status").textContent=a.source==="osm"?"OSM MAP · MAPPED":"TERRAIN ONLY",$("#geo-status").title=a.message,ls(a.source==="osm"?`${a.buildings.toLocaleString()} real OSM buildings · ${a.roads.toLocaleString()} mapped roads and paths`:"TERRAIN ONLY · no packaged buildings or roads at this location."),a.source==="osm"&&kn.setLocation(e,tt.frame,((o,s)=>tt.heightAt(o,s)),He.sceneryRoads,He.list),Vt(a.source==="osm"?`OSM map · ${a.buildings} buildings · ${a.roads} street/path lines`:"No packaged map data here. Terrain only; no practice obstacles were added."))}),on?.flyTo({center:[e.lon,e.lat],zoom:12}),Ja?.setLngLat([e.lon,e.lat]))}$("#practice-course").addEventListener("click",()=>{const e=He.addPracticeCourse((n,t)=>tt.heightAt(n,t),Ht);$("#geo-status").textContent="PRACTICE COURSE",$("#geo-status").title=`${He.status.message} · OPTIONAL PRACTICE OBSTACLES`,Vt(e?`Optional practice course added · ${e} obstacles`:"Practice obstacles are already active.")});rr.forEach((e,n)=>{const t=document.createElement("button");t.className="preset",t.setAttribute("aria-pressed","false"),t.innerHTML=`<span class="preset-index">0${n+1}</span><span>${e.name}</span><i>↗</i>`,t.onclick=()=>Qi(e),$("#presets").append(t)});qs();$("#search-form").addEventListener("submit",async e=>{e.preventDefault();const n=$("#location-search").value.trim();if(!n)return;const t=$("#search-results");t.innerHTML='<div class="search-status">SEARCHING THE GLOBE…</div>';try{const i=await Up(n);if(!i.length){t.innerHTML='<div class="search-status">No places found. Try a nearby town or coordinates.</div>';return}t.innerHTML="";for(const r of i){const a=document.createElement("button");a.className="result",a.innerHTML=`<span>⌖</span><span>${r.name}</span><i>↗</i>`,a.onclick=()=>Qi(r),t.append(a)}}catch{t.innerHTML='<div class="search-status">Location search is busy. Try coordinates like 40.7, -73.9.</div>'}});$("#location-search").addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),$("#search-form").requestSubmit())});$("#map-btn").onclick=async()=>{if($("#location-panel").classList.toggle("hidden"),$("#settings-panel").classList.add("hidden"),$("#help-panel").classList.add("hidden"),Zt(),on)setTimeout(()=>on?.resize(),100);else{const[n,t]=await Promise.all([za(()=>import("./maplibre-gl-BT_db7in.js"),[],import.meta.url),za(()=>import("./maplibre-gl-worker-re4DVwB4.js"),[],import.meta.url)]);n.setWorkerUrl(t.default),on=new n.Map({container:"mini-map",style:"https://tiles.openfreemap.org/styles/liberty",center:[Kt.lon,Kt.lat],zoom:10,attributionControl:!1}),on.addControl(new n.NavigationControl({showCompass:!1}),"top-right"),Ja=new n.Marker({color:"#f2632b"}).setLngLat([Kt.lon,Kt.lat]).addTo(on),on.on("click",i=>{const r={name:`${i.lngLat.lat.toFixed(4)}, ${i.lngLat.lng.toFixed(4)}`,lat:i.lngLat.lat,lon:i.lngLat.lng};Ja?.setLngLat(i.lngLat);const a=document.createElement("button");a.className="result",a.innerHTML=`<span>⌖</span><span>Drive at ${r.name}</span><i>↗</i>`,a.onclick=()=>Qi(r),$("#search-results").replaceChildren(a)})}};$("#settings-btn").onclick=()=>{$("#settings-panel").classList.toggle("hidden"),$("#location-panel").classList.add("hidden"),$("#help-panel").classList.add("hidden"),Zt()};const pr=()=>{$("#help-panel").classList.toggle("hidden"),$("#location-panel").classList.add("hidden"),$("#settings-panel").classList.add("hidden"),Zt()};$("#help-btn").onclick=pr;$("#touch-help").onclick=pr;document.querySelectorAll("[data-close]").forEach(e=>e.addEventListener("click",()=>{$("#"+e.dataset.close).classList.add("hidden"),Zt()}));const mr=(e,n,t)=>{const i=$("#"+e);i.oninput=()=>{const r=+i.value/(n==="scale"?10:1);ui[n]=r,$("#"+n+"-value").textContent=t(r),n==="scale"&&ln.root.scale.setScalar(r)}};mr("gravity","gravity",e=>e.toFixed(0));mr("jump","jump",e=>e.toFixed(0));mr("scale","scale",e=>e.toFixed(1)+"×");$("#paint").addEventListener("input",e=>ln.setColor(e.target.value));function Ys(e){Bt=e,$("#graphics-quality").value=e,_t.setPixelRatio(Math.min(devicePixelRatio||1,cr(e)));const n=dr();_t.setSize(n.width,n.height),_t.shadowMap.enabled=e!=="low",gt.castShadow=e!=="low";const t=e==="high"?1536:e==="medium"?1024:512;gt.shadow.mapSize.set(t,t),gt.shadow.needsUpdate=!0,tt.setVisualQuality(e),sn.setQuality(e),wn.setQuality(e),kn.setQuality(e),fr.uniforms.uOpacity.value=Ks(e)}const Ks=e=>e==="low"?.18:e==="medium"?.23:.29;$("#graphics-quality").addEventListener("change",e=>Ys(e.target.value));tt.setVisualQuality(Bt);sn.setQuality(Bt);wn.setQuality(Bt);fr.uniforms.uOpacity.value=Ks(Bt);Ys(Bt);let $s=null,Zs=null;try{const e=localStorage.getItem(Hs);if(e)$s=JSON.parse(e);else for(const n of pm){const t=localStorage.getItem(n);if(t){Zs=JSON.parse(t);break}}}catch{}const fi=mm($s,Zs);Pe.setVolumes(fi.volumes??ks);Pe.setMuted(fi.muted);Pe.setTrackIndex(fi.trackIndex);Pe.setShuffle(fi.shuffle);Pe.setMusicPreference(fi.musicPlaying);const Ji=(e,n,t)=>{const i=$("#"+e);i.value=String(Math.round(Pe.getVolumes()[n]*100)),$("#"+t).textContent=`${i.value}%`,i.addEventListener("input",()=>{const r=+i.value;Pe.setVolumes({[n]:r/100}),$("#"+t).textContent=`${r}%`,jt()})};function jt(){try{localStorage.setItem(Hs,JSON.stringify({volumes:Pe.getVolumes(),muted:Pe.isMuted(),trackIndex:Pe.getTrackIndex(),shuffle:Pe.isShuffleEnabled(),musicPlaying:Pe.isMusicRequested()}))}catch{}}const Zn=$("#audio-toggle");Zn.checked=!Pe.isMuted();Ji("master-volume","master","volume-value");Ji("engine-volume","engine","engine-volume-value");Ji("effects-volume","effects","effects-volume-value");Ji("music-volume","music","music-volume-value");const er=$("#music-play"),xm=$("#music-track"),js=$("#music-previous"),Qs=$("#music-next"),Oi=$("#music-shuffle"),bm=$("#radio-quick-track"),Bi=$("#radio-quick-toggle"),Js=$("#radio-quick-previous"),el=$("#radio-quick-next");function pn(){const e=Pe.diagnostics(),n=tn[e.trackIndex];xm.textContent=`${n.artist} — ${n.title}`,bm.textContent=`${n.title} · ${n.artist}`;const t=$("#music-credit");t.href=n.sourceUrl;const i=Pe.isMusicPlaying()?"PAUSE":e.musicError?"RETRY":"PLAY";er.textContent=i,Bi.textContent=Pe.isMusicPlaying()?"Ⅱ":"▶",Bi.setAttribute("aria-label",Pe.isMusicPlaying()?"Pause Rumble Roam Radio":"Play Rumble Roam Radio"),er.disabled=Js.disabled=Bi.disabled=el.disabled=js.disabled=Qs.disabled=Oi.disabled=!Pe.hasSoundtrack(),Oi.classList.toggle("selected",Pe.isShuffleEnabled()),Oi.setAttribute("aria-pressed",String(Pe.isShuffleEnabled())),e.musicError?$("#audio-status").textContent=e.musicError:$("#audio-status").textContent="Music starts on your first driving input. Volumes stay independently mixed."}pn();Zn.addEventListener("change",()=>{Zn.checked&&Pe.start(),Pe.setMuted(!Zn.checked),$("#audio-status").textContent=Zn.checked?"Game audio enabled.":"Game audio muted.",jt()});$("#audio-test").addEventListener("click",()=>{Pe.start();const e=Pe.testTone();$("#audio-status").textContent=e?"Short test tone sent through the game output.":"Unmute audio to hear the test tone.",e||Vt("Turn Audio on to hear the test.")});js.addEventListener("click",()=>{Pe.start(),Pe.previousTrack(),pn(),jt()});const tl=()=>{Pe.isMusicPlaying()?Pe.pauseMusic():Pe.playMusic(),pn(),jt()};er.addEventListener("click",tl);Bi.addEventListener("click",tl);Qs.addEventListener("click",()=>{Pe.start(),Pe.nextTrack(),pn(),jt()});Js.addEventListener("click",()=>{Pe.start(),Pe.previousTrack(),pn(),jt()});el.addEventListener("click",()=>{Pe.start(),Pe.nextTrack(),pn(),jt()});Oi.addEventListener("click",()=>{Pe.setShuffle(!Pe.isShuffleEnabled()),pn(),jt()});window.addEventListener("rumble-radio-change",()=>{pn(),jt()});function gr(){Y.reset(tt,ui.scale),pt.reset(),ln.root.visible=!0,Vt("Truck recovered. Send it!")}function vr(e){const n=["chase","far","hood","free"];Cn=e??n[(n.indexOf(Cn)+1)%n.length],document.querySelectorAll("[data-camera]").forEach(t=>t.classList.toggle("selected",t.dataset.camera===Cn))}function _r(){nn=!nn,nn&&nt.releaseAll(),$("#pause-panel").classList.toggle("hidden",!nn),Zt()}$("#reset-btn").onclick=gr;$("#touch-reset").onclick=()=>{Pe.start(),gr()};$("#touch-camera").onclick=()=>vr();$("#touch-pause").onclick=()=>_r();$("#resume-btn").onclick=()=>{Pe.start(),nn=!1,ci=performance.now(),$("#pause-panel").classList.add("hidden"),Zt()};$("#pause-btn").onclick=()=>_r();$("#pause-location").onclick=()=>{$("#pause-panel").classList.add("hidden"),Zt(),$("#map-btn").click()};document.querySelectorAll("[data-camera]").forEach(e=>e.addEventListener("click",()=>vr(e.dataset.camera)));const ya=$("#steering-mode"),Pa=$("#steering-sensitivity");ya.addEventListener("change",()=>{nt.setSteeringMode(ya.value),hn.classList.toggle("classic-steering",ya.value==="buttons")});Pa.addEventListener("input",()=>{nt.setSensitivity(+Pa.value/100),$("#sensitivity-value").textContent=`${Pa.value}%`});$("#touch-gear").addEventListener("click",()=>{const e=nt.toggleGear();$("#touch-gear").textContent=e===1?"FWD":"REV",$("#touch-gear").setAttribute("aria-label",e===1?"Forward selected; toggle to reverse":"Reverse selected; toggle to forward")});const ni=$("#touch-control-mode");ni.textContent=Vn?"⌨ KEYS":"◉ TOUCH";ni.setAttribute("aria-pressed",String(!hn.classList.contains("keyboard-controls-visible")));ni.onclick=()=>{const e=hn.classList.toggle("keyboard-controls-visible");ni.innerHTML=e?"◉ <span>TOUCH</span>":"⌨ <span>KEYS</span>",ni.setAttribute("aria-pressed",String(!e))};window.addEventListener("keydown",e=>{if(e.repeat||Ya(e.target))return;const n=e.key.toLowerCase();["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"," ","shift","q","e","f"].includes(n)&&(Pe.start(),jt()),n==="m"&&$("#map-btn").click(),n==="c"&&vr(),n==="r"&&gr(),e.key==="Escape"&&_r(),(e.key==="?"||n==="h")&&pr()});document.querySelectorAll("[data-touch]").forEach(e=>{const n=e.dataset.touch;e.addEventListener("pointerdown",t=>{if(!(t.pointerType==="mouse"&&t.button!==0)){t.preventDefault(),nt.pointerDown(t.pointerId,n);try{e.setPointerCapture(t.pointerId)}catch{}Pe.start()}}),e.addEventListener("pointerup",t=>{t.preventDefault(),nt.pointerUp(t.pointerId)}),e.addEventListener("pointercancel",t=>nt.pointerCancel(t.pointerId)),e.addEventListener("lostpointercapture",t=>nt.lostPointerCapture(t.pointerId))});const $t=$("#analog-pad"),nl=$("#analog-knob");$t.addEventListener("pointerdown",e=>{if(e.pointerType==="mouse"&&e.button!==0)return;e.preventDefault();const n=$t.getBoundingClientRect();nt.analog.pointerDown(e.pointerId,e.clientX,e.clientY,Math.min(n.width,n.height)*.42),$t.classList.add("dragging");try{$t.setPointerCapture(e.pointerId)}catch{}Pe.start()});$t.addEventListener("pointermove",e=>{if(nt.analog.pointerId!==e.pointerId)return;e.preventDefault();const n=$t.getBoundingClientRect();nt.analog.pointerMove(e.pointerId,e.clientX,e.clientY);const t=Math.min(n.width,n.height)*.32;nl.style.transform=`translate(${nt.analog.x*t}px,${nt.analog.y*t}px)`});const Sr=e=>{nt.analog.pointerUp(e.pointerId),nl.style.transform="translate(0,0)",$t.classList.remove("dragging")};$t.addEventListener("pointerup",Sr);$t.addEventListener("pointercancel",Sr);$t.addEventListener("lostpointercapture",Sr);window.addEventListener("blur",()=>hr());document.addEventListener("visibilitychange",()=>{ci=performance.now(),document.hidden&&(Pe.suspend(),hr(),nn=!0,$("#pause-panel").classList.remove("hidden"),Zt())});window.addEventListener("pointermove",e=>{Cn==="free"&&e.buttons&&(Qa-=e.movementX*.004,ti=st.clamp(ti-e.movementY*.003,-.3,1.1))});let cs=0,La=60;function Tm(e){const n=Y.pos,t=si(Y.yaw),i=Math.min(1,Y.speed/28),r=Math.max(-35,Math.min(35,(Y.speed-cs)/Math.max(e,.001)));cs=Y.speed;let a,o;if(Cn==="hood")a=n.clone().add(new ne(0,2.3,0)).addScaledVector(t,1.2),o=a.clone().addScaledVector(t,7).add(new ne(0,.3,0));else if(Cn==="free"){const h=new ne(Math.sin(Qa)*Math.cos(ti),Math.sin(ti),Math.cos(Qa)*Math.cos(ti));a=n.clone().add(new ne(0,1.5,0)),o=a.clone().addScaledVector(h,-14)}else{const h=Cn==="far",d=(h?30:11.8)+i*(h?8:3.8),u=(h?10:5.35)+i*1.6;a=n.clone().add(new ne(0,1.4,0)).addScaledVector(t,Y.speed*.2),o=n.clone().addScaledVector(t,-d).add(new ne(0,u,0)).addScaledVector(Y.vel,-.11),h||o.addScaledVector(sr(Y.yaw),2.3),o.addScaledVector(t,-st.clamp(r*.018,-.8,.8))}const s=a;kt>0&&(o.x+=(Math.random()-.5)*kt,o.y+=(Math.random()-.5)*kt,kt=Math.max(0,kt-e*1.3)),Je.position.lerp(o,1-Math.exp(-(5.4-i*.65)*e)),Je.lookAt(s);const c=60+i*4.5;Math.abs(c-La)>.15&&(La=c,Je.fov=La,Je.updateProjectionMatrix())}let ds=Number.NaN,us=Number.NaN;function il(e){requestAnimationFrame(il);const n=performance.now(),t=Math.min((e-ci)/1e3,.045);if(ci=e,e-as>400){as=e;const d=He.progress;d.phase==="features"?$("#geo-status").textContent="MAPPING WORLD":d.phase==="buildings"?$("#geo-status").textContent=`BUILDING WORLD · ${d.total?Math.round(d.complete/d.total*100):0}%`:d.phase==="batching"||d.phase==="colliders"?$("#geo-status").textContent="PREPARING WORLD":d.phase==="roads"&&($("#geo-status").textContent="MAPPING ROADS")}if(!nn){const d=nt.update(!Y.grounded),u=Y.grounded,g=Y.vel.y,m=performance.now();Y.update(t,d,tt,ln,ui),os=performance.now()-m,hn.classList.toggle("airborne",!Y.grounded);const M=pt.update({grounded:Y.grounded,airtime:Y.airTime,pitch:Y.pitch,roll:Y.roll,landingSpeed:Math.abs(g)});if(!u&&Y.grounded&&(Ws=Math.abs(g),Xs=M),u&&!Y.grounded&&d.jump&&(Pe.jump(),kt=Math.max(kt,.07)),!u&&Y.grounded&&(Pe.landing(Math.min(1,Math.abs(g)/20)),sn.burst(new ne(Y.pos.x,Y.pos.y-1.35,Y.pos.z),Math.round(5+Math.min(14,Math.abs(g)*.65)),/moab|utah|desert/i.test(Kt.name)?13019253:10130044),kt=Math.max(kt,Math.min(.28,Math.abs(g)*.008)),M&&(Vt(`${M.message}  +${M.points.toLocaleString()} PTS`),pt.bestScore>ja())))try{localStorage.setItem(Za,String(pt.bestScore))}catch{}const E=Ht.step(Y.pos,Y.yaw,t,Y.vel);if(E){const l=He.break(E.building);if(Ht.removeBuilding(E.building),l){Fi++;const T=Math.round(100+Math.min(420,E.building.h*12)+E.intensity*120);pt.awardBonus(T);try{pt.bestScore>ja()&&localStorage.setItem(Za,String(pt.bestScore))}catch{}wn.destroy(E.building,E,(A,b)=>tt.heightAt(A,b)),sn.burst(E.position,Math.round(22+E.intensity*20),16752988),Y.vel.addScaledVector(E.normal,-(1.5+E.intensity*4)),Y.vel.y+=1+E.intensity*2.5,kt=Math.max(kt,.2+E.intensity*.48),Pe.impact(E.intensity),Vt(Fi>1?`MULTI-SMASH · +${T} PTS`:`BUILDING SMASHED · DEMOLITION BONUS +${T}`)}}const p=Math.abs(Y.vel.dot(sr(Y.yaw)));for(let l=0;l<Y.wheelContacts.length;l++){const T=Y.wheelContacts[l];T.contact&&sn.dust(new ne(T.x,T.height+.07,T.z),Y.speed*(p>Y.speed*.28?1.5:1))}if(d.nitro&&Y.nitro>0&&Math.random()<t*8){const l=Y.pos.clone().addScaledVector(si(Y.yaw),-1.72);sn.burst(l.add(new ne((Math.random()-.5)*.9,.9,(Math.random()-.5)*.35)),1,16742965)}sn.update(t),wn.update(t),He.updateVisibility(Y.pos.x,Y.pos.z,Bt==="low"?500:Bt==="medium"?800:1100),Pe.update(Y.speed,Math.max(0,d.throttle),d.nitro&&Y.nitro>0,Math.max(d.handbrake?.55:0,p/Math.max(4,Y.speed)),t),Tm(t),e-is>550&&(is=e,He.updateStreetLabels(Y.pos.x,Y.pos.z,Y.yaw,zs))}const i=Math.floor(Y.pos.x/40),r=Math.floor(Y.pos.z/40);if(i!==ds||r!==us){ds=i,us=r;const d=i*40,u=r*40;gt.position.set(d-125,Y.pos.y+250,u+95),gt.target.position.set(d,0,u),gt.target.updateMatrixWorld(),gt.shadow.needsUpdate=!0}ji.position.copy(Je.position);const a=Y.wheelContacts.reduce((d,u)=>Math.max(d,u.height),-1/0),o=Number.isFinite(a)?a:tt.heightAt(Y.pos.x,Y.pos.z),s=st.clamp(Y.pos.y-o,0,80);li.position.set(Y.pos.x,o+.035,Y.pos.z),li.scale.set(1.35+s*.055,2+s*.07,1),$("#speed").textContent=String(Math.round(Y.speed*3.6)).padStart(3,"0"),$("#speed-bar").style.width=`${Math.min(100,Y.speed/30*100)}%`,$("#nitro-bar").style.width=`${Y.nitro}%`,$("#nitro-state").textContent=Y.nitro>5?"READY TO BURN":"RECHARGING",$("#air-time").textContent=`${pt.airtime.toFixed(1)}s`,$("#stunt-score").textContent=pt.currentPoints.toLocaleString(),$("#stunt-best").textContent=pt.bestScore.toLocaleString(),e-ns>900&&tt.frame&&(ns=e,$("#street-name").textContent=He.nearestStreetName(Y.pos.x,Y.pos.z,tt.frame)||""),He.updateCollisionWindow(Y.pos.x,Y.pos.z,Ht),kn.update(Y.pos.x,Y.pos.z),$("#level-hint").textContent=pt.isAirborne?nt.state.level?"LEVELING…":"F / LEVEL TO RIGHT":"",$("#touch-level").classList.toggle("active",nt.state.level??!1);const c=performance.now();_t.render(Et,Je),rs=performance.now()-c;const h=performance.now()-n;if(Ca+=h,Pi=Math.max(Pi,h),yi++,e-wa>=1e3){const d=tt.takePerformanceSample();window.__monsterMapMetrics={fps:Math.round(yi*1e3/(e-wa)),frameMs:Math.round(Ca/yi*10)/10,frameMsMax:Math.round(Pi*10)/10,physicsMs:+os.toFixed(2),renderMs:+rs.toFixed(2),terrainSampleMs:+d.heightSampleMs.toFixed(3),terrainSamples:d.heightSamples,terrainTileBuildMs:+d.tileBuildMs.toFixed(3),terrainTileBuilds:d.tileBuilds,pixelRatio:_t.getPixelRatio(),graphicsQuality:Bt,drawCalls:_t.info.render.calls,triangles:_t.info.render.triangles,geometries:_t.info.memory.geometries,textures:_t.info.memory.textures,heapMB:Em(),audioState:Pe.getState(),audioRms:+Pe.outputRms().toFixed(4),audioMuted:Pe.isMuted(),volume:Pe.getMasterVolume(),sceneryInstances:kn.instanceCount,activeBuildingColliders:He.activeCollisionCount,gpuRenderer:vm,geoLoadPhase:He.progress.phase,geoLoadPercent:He.progress.total?Math.round(He.progress.complete/He.progress.total*100):0,speed:Y.speed,position:[Y.pos.x,Y.pos.y,Y.pos.z],destroyed:Fi,activeDebris:wn.activeCount,osmBuildings:He.status.buildings,osmRoads:He.status.roads,streetLabels:He.streetLabelCount,worldDataSource:He.status.source,yaw:Y.yaw,pitch:Y.pitch,roll:Y.roll,steer:nt.state.steer,throttle:nt.state.throttle,nitro:nt.state.nitro,jump:nt.state.jump,grounded:Y.grounded,activeTouchActions:nt.touches.size,frontWheelAngles:ln.frontWheels.map(u=>u.rotation.y),rearWheelAngles:ln.wheels.filter(u=>!ln.frontWheels.includes(u)).map(u=>u.rotation.y),wheelContacts:Y.wheelContacts.filter(u=>u.contact).length,averageCompression:Y.wheelContacts.reduce((u,g)=>u+g.compression,0)/Math.max(1,Y.wheelContacts.length),contactPitch:Y.contactPitch,contactRoll:Y.contactRoll,terrainOriginHeight:tt.heightAt(0,0),stuntAirtime:pt.airtime,stuntPoints:pt.currentPoints,bestStunt:pt.bestScore,stuntRolls:pt.rolls,stuntFlips:pt.flips,leveling:nt.state.level??!1},yi=0,Ca=0,Pi=0,wa=e}}function ea(){const e=dr();_t.setPixelRatio(Math.min(devicePixelRatio||1,cr(Bt))),_t.setSize(e.width,e.height),Je.aspect=e.width/Math.max(1,e.height),Je.updateProjectionMatrix(),zs.viewport={width:e.width,height:e.height},on?.resize()}window.addEventListener("resize",ea);window.addEventListener("orientationchange",()=>setTimeout(ea,180));window.visualViewport?.addEventListener("resize",ea);const al=$("#game");al.addEventListener("webglcontextlost",e=>{e.preventDefault(),nt.releaseAll(),nn=!0,$("#pause-panel").classList.remove("hidden"),Zt(),Vt("Graphics paused. Return to the game when ready.")});al.addEventListener("webglcontextrestored",()=>{ci=performance.now(),ea(),Vt("Graphics restored.")});await Qi(Kt);requestAnimationFrame(il);
