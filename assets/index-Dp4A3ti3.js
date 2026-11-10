const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./collision-world-DeM6Yckj.js","./three.core-By0lf9Pu.js"])))=>i.map(i=>d[i]);
import{c as _l,N as ln,S as aa,C as $e,F as vo,M as Nt,V as ne,R as Sl,a as At,w as Nr,W as Ca,b as Bn,d as vt,L as xn,H as Xi,U as Pn,D as It,B as Ct,e as ri,f as qi,p as Ml,g as ai,h as kn,i as ut,O as El,P as Qn,j as sa,k as cn,E as xl,l as dt,A as bl,m as rr,n as Xt,o as ki,q as oa,r as si,s as oi,t as _o,u as Tl,v as nn,x as wn,y as Yi,z as un,G as Ft,I as bn,J as In,K as Gi,Q as wl,T as Al,X as qn,Y as Rl,Z as yl,_ as Cl,$ as Pl,a0 as Ll,a1 as Dl,a2 as Ul,a3 as Il,a4 as Nl,a5 as Fl,a6 as Ol,a7 as Bl,a8 as kl,a9 as Gl,aa as Hl,ab as Vl,ac as zl,ad as So,ae as ar,af as mi,ag as Wl,ah as Jn,ai as Xl,aj as ql,ak as Yl,al as Kl,am as Mo,an as $l,ao as Zl,ap as jl,aq as Ql,ar as Ke,as as Jl,at as ec,au as tc,av as Eo,aw as Qt,ax as Hi,ay as xo,az as bo,aA as To,aB as wo,aC as nc,aD as ic,aE as rc,aF as ac,aG as Ao,aH as Tn,aI as sc,aJ as oc,aK as lc,aL as Ro,aM as cc,aN as yo,aO as Co,aP as sr,aQ as or,aR as lr,aS as cr,aT as st,aU as Pa,aV as La,aW as Da,aX as Ua,aY as Ia,aZ as Na,a_ as Fa,a$ as Oa,b0 as Ba,b1 as ka,b2 as Ga,b3 as Ha,b4 as Va,b5 as za,b6 as Wa,b7 as Xa,b8 as qa,b9 as Ya,ba as Ka,bb as $a,bc as Za,bd as ja,be as Qa,bf as Ja,bg as es,bh as ts,bi as ns,bj as is,bk as Fr,bl as Or,bm as Br,bn as kr,bo as Gr,bp as Hr,bq as Vr,br as uc,bs as rs,bt as dc,bu as Li,bv as fc,bw as as,bx as ss,by as os,bz as Vi,bA as zr,bB as hc,bC as Po,bD as pc,bE as mc,bF as gc,bG as Lo,bH as ls,bI as Wt,bJ as cs,bK as Do,bL as vc,bM as _c,bN as Sc,bO as us,bP as wt,bQ as Mc,bR as Uo,bS as Ec,bT as xc,bU as bc,bV as Io,bW as Tc,bX as wc,bY as Ac,bZ as Rc,b_ as yc,b$ as Cc,c0 as Pc,c1 as Lc,c2 as Dc,c3 as Uc,c4 as Ic,c5 as Nc,c6 as qt,c7 as xt,c8 as ot,c9 as zi,ca as Wr,cb as No,cc as Fc,cd as Oc,ce as Fo,cf as Bt,cg as Xr,ch as Di,ci as ds,cj as Jt,ck as Bc,cl as fs,cm as kc,cn as ur,co as hs,cp as gi,cq as Gc,cr as Hc,cs as Vc,ct as zc,cu as Oo,cv as Wc,cw as Xc,cx as qc,cy as Yc,cz as Kc}from"./three.core-By0lf9Pu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();const $c="modulepreload",Zc=function(e,t){return new URL(e,t).href},ps={},qr=function(t,n,i){let r=Promise.resolve();if(n&&n.length>0){let s=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const o=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),p=c?.nonce||c?.getAttribute("nonce");r=s(n.map(u=>{if(u=Zc(u,i),u in ps)return;ps[u]=!0;const f=u.endsWith(".css"),g=f?'[rel="stylesheet"]':"";if(!!i)for(let E=o.length-1;E>=0;E--){const h=o[E];if(h.href===u&&(!f||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${g}`))return;const M=document.createElement("link");if(M.rel=f?"stylesheet":$c,f||(M.as="script"),M.crossOrigin="",M.href=u,p&&M.setAttribute("nonce",p),document.head.appendChild(M),f)return new Promise((E,h)=>{M.addEventListener("load",E),M.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${u}`)))})}))}function a(s){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s}return r.then(s=>{for(const o of s||[])o.status==="rejected"&&a(o.reason);return t().catch(a)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bo(){let e=null,t=!1,n=null,i=null;function r(a,s){n(a,s),i=e.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(r),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function jc(e){const t=new WeakMap;function n(o,c){const p=o.array,u=o.usage,f=p.byteLength,g=e.createBuffer();e.bindBuffer(c,g),e.bufferData(c,p,u),o.onUploadCallback();let m;if(p instanceof Float32Array)m=e.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)m=e.HALF_FLOAT;else if(p instanceof Uint16Array)o.isFloat16BufferAttribute?m=e.HALF_FLOAT:m=e.UNSIGNED_SHORT;else if(p instanceof Int16Array)m=e.SHORT;else if(p instanceof Uint32Array)m=e.UNSIGNED_INT;else if(p instanceof Int32Array)m=e.INT;else if(p instanceof Int8Array)m=e.BYTE;else if(p instanceof Uint8Array)m=e.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)m=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:m,bytesPerElement:p.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,p){const u=c.array,f=c.updateRanges;if(e.bindBuffer(p,o),f.length===0)e.bufferSubData(p,0,u);else{f.sort((m,M)=>m.start-M.start);let g=0;for(let m=1;m<f.length;m++){const M=f[g],E=f[m];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++g,f[g]=E)}f.length=g+1;for(let m=0,M=f.length;m<M;m++){const E=f[m];e.bufferSubData(p,E.start*u.BYTES_PER_ELEMENT,u,E.start,E.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(e.deleteBuffer(c.buffer),t.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const p=t.get(o);if(p===void 0)t.set(o,n(o,c));else if(p.version<o.version){if(p.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(p.buffer,o,c),p.version=o.version}}return{get:r,remove:a,update:s}}var Qc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jc=`#ifdef USE_ALPHAHASH
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
#endif`,eu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ru=`#ifdef USE_AOMAP
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
#endif`,au=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,su=`#ifdef USE_BATCHING
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
#endif`,ou=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,du=`#ifdef USE_IRIDESCENCE
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
#endif`,fu=`#ifdef USE_BUMPMAP
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
#endif`,hu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_u=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Su=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Eu=`#define PI 3.141592653589793
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
} // validated`,xu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bu=`vec3 transformedNormal = objectNormal;
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
#endif`,Tu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Au=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ru=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pu=`#ifdef USE_ENVMAP
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
#endif`,Lu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Du=`#ifdef USE_ENVMAP
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
#endif`,Uu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Iu=`#ifdef USE_ENVMAP
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
#endif`,Nu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ou=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ku=`#ifdef USE_GRADIENTMAP
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
}`,Gu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zu=`uniform bool receiveShadow;
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
#endif`,Wu=`#ifdef USE_ENVMAP
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
#endif`,Xu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ku=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$u=`PhysicalMaterial material;
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
#endif`,Zu=`struct PhysicalMaterial {
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
}`,ju=`
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
#endif`,Qu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ju=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ed=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,td=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,id=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ad=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,od=`#if defined( USE_POINTS_UV )
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
#endif`,ld=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ud=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hd=`#ifdef USE_MORPHTARGETS
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
#endif`,pd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,md=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_d=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Md=`#ifdef USE_NORMALMAP
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
#endif`,Ed=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Td=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ad=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ld=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ud=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Id=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fd=`float getShadowMask() {
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
}`,Od=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bd=`#ifdef USE_SKINNING
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
#endif`,kd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gd=`#ifdef USE_SKINNING
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
#endif`,Hd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xd=`#ifdef USE_TRANSMISSION
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
#endif`,qd=`#ifdef USE_TRANSMISSION
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
#endif`,Yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$d=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qd=`uniform sampler2D t2D;
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
}`,Jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ef=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rf=`#include <common>
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
}`,af=`#if DEPTH_PACKING == 3200
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
}`,sf=`#define DISTANCE
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
}`,of=`#define DISTANCE
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
}`,lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uf=`uniform float scale;
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
}`,df=`uniform vec3 diffuse;
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
}`,ff=`#include <common>
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
}`,hf=`uniform vec3 diffuse;
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
}`,pf=`#define LAMBERT
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
}`,mf=`#define LAMBERT
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
}`,gf=`#define MATCAP
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
}`,vf=`#define MATCAP
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
}`,_f=`#define NORMAL
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
}`,Sf=`#define NORMAL
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
}`,Mf=`#define PHONG
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
}`,Ef=`#define PHONG
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
}`,xf=`#define STANDARD
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
}`,bf=`#define STANDARD
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
}`,Tf=`#define TOON
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
}`,wf=`#define TOON
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
}`,Af=`uniform float size;
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
}`,Rf=`uniform vec3 diffuse;
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
}`,yf=`#include <common>
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
}`,Cf=`uniform vec3 color;
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
}`,Pf=`uniform float rotation;
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
}`,Lf=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:Qc,alphahash_pars_fragment:Jc,alphamap_fragment:eu,alphamap_pars_fragment:tu,alphatest_fragment:nu,alphatest_pars_fragment:iu,aomap_fragment:ru,aomap_pars_fragment:au,batching_pars_vertex:su,batching_vertex:ou,begin_vertex:lu,beginnormal_vertex:cu,bsdfs:uu,iridescence_fragment:du,bumpmap_pars_fragment:fu,clipping_planes_fragment:hu,clipping_planes_pars_fragment:pu,clipping_planes_pars_vertex:mu,clipping_planes_vertex:gu,color_fragment:vu,color_pars_fragment:_u,color_pars_vertex:Su,color_vertex:Mu,common:Eu,cube_uv_reflection_fragment:xu,defaultnormal_vertex:bu,displacementmap_pars_vertex:Tu,displacementmap_vertex:wu,emissivemap_fragment:Au,emissivemap_pars_fragment:Ru,colorspace_fragment:yu,colorspace_pars_fragment:Cu,envmap_fragment:Pu,envmap_common_pars_fragment:Lu,envmap_pars_fragment:Du,envmap_pars_vertex:Uu,envmap_physical_pars_fragment:Wu,envmap_vertex:Iu,fog_vertex:Nu,fog_pars_vertex:Fu,fog_fragment:Ou,fog_pars_fragment:Bu,gradientmap_pars_fragment:ku,lightmap_pars_fragment:Gu,lights_lambert_fragment:Hu,lights_lambert_pars_fragment:Vu,lights_pars_begin:zu,lights_toon_fragment:Xu,lights_toon_pars_fragment:qu,lights_phong_fragment:Yu,lights_phong_pars_fragment:Ku,lights_physical_fragment:$u,lights_physical_pars_fragment:Zu,lights_fragment_begin:ju,lights_fragment_maps:Qu,lights_fragment_end:Ju,logdepthbuf_fragment:ed,logdepthbuf_pars_fragment:td,logdepthbuf_pars_vertex:nd,logdepthbuf_vertex:id,map_fragment:rd,map_pars_fragment:ad,map_particle_fragment:sd,map_particle_pars_fragment:od,metalnessmap_fragment:ld,metalnessmap_pars_fragment:cd,morphinstance_vertex:ud,morphcolor_vertex:dd,morphnormal_vertex:fd,morphtarget_pars_vertex:hd,morphtarget_vertex:pd,normal_fragment_begin:md,normal_fragment_maps:gd,normal_pars_fragment:vd,normal_pars_vertex:_d,normal_vertex:Sd,normalmap_pars_fragment:Md,clearcoat_normal_fragment_begin:Ed,clearcoat_normal_fragment_maps:xd,clearcoat_pars_fragment:bd,iridescence_pars_fragment:Td,opaque_fragment:wd,packing:Ad,premultiplied_alpha_fragment:Rd,project_vertex:yd,dithering_fragment:Cd,dithering_pars_fragment:Pd,roughnessmap_fragment:Ld,roughnessmap_pars_fragment:Dd,shadowmap_pars_fragment:Ud,shadowmap_pars_vertex:Id,shadowmap_vertex:Nd,shadowmask_pars_fragment:Fd,skinbase_vertex:Od,skinning_pars_vertex:Bd,skinning_vertex:kd,skinnormal_vertex:Gd,specularmap_fragment:Hd,specularmap_pars_fragment:Vd,tonemapping_fragment:zd,tonemapping_pars_fragment:Wd,transmission_fragment:Xd,transmission_pars_fragment:qd,uv_pars_fragment:Yd,uv_pars_vertex:Kd,uv_vertex:$d,worldpos_vertex:Zd,background_vert:jd,background_frag:Qd,backgroundCube_vert:Jd,backgroundCube_frag:ef,cube_vert:tf,cube_frag:nf,depth_vert:rf,depth_frag:af,distanceRGBA_vert:sf,distanceRGBA_frag:of,equirect_vert:lf,equirect_frag:cf,linedashed_vert:uf,linedashed_frag:df,meshbasic_vert:ff,meshbasic_frag:hf,meshlambert_vert:pf,meshlambert_frag:mf,meshmatcap_vert:gf,meshmatcap_frag:vf,meshnormal_vert:_f,meshnormal_frag:Sf,meshphong_vert:Mf,meshphong_frag:Ef,meshphysical_vert:xf,meshphysical_frag:bf,meshtoon_vert:Tf,meshtoon_frag:wf,points_vert:Af,points_frag:Rf,shadow_vert:yf,shadow_frag:Cf,sprite_vert:Pf,sprite_frag:Lf},fe={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},zt={basic:{uniforms:wt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:wt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new $e(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:wt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:wt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:wt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new $e(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:wt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:wt([fe.points,fe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:wt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:wt([fe.common,fe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:wt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:wt([fe.sprite,fe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:wt([fe.common,fe.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:wt([fe.lights,fe.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};zt.physical={uniforms:wt([zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const vi={r:0,b:0,g:0},vn=new Wt,Df=new Nt;function Uf(e,t,n,i,r,a,s){const o=new $e(0);let c=a===!0?0:1,p,u,f=null,g=0,m=null;function M(w){let b=w.isScene===!0?w.background:null;return b&&b.isTexture&&(b=(w.backgroundBlurriness>0?n:t).get(b)),b}function E(w){let b=!1;const y=M(w);y===null?l(o,c):y&&y.isColor&&(l(y,1),b=!0);const A=e.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(w,b){const y=M(b);y&&(y.isCubeTexture||y.mapping===Yi)?(u===void 0&&(u=new ut(new cn(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:ls(zt.backgroundCube.uniforms),vertexShader:zt.backgroundCube.vertexShader,fragmentShader:zt.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,D,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),vn.copy(b.backgroundRotation),vn.x*=-1,vn.y*=-1,vn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(vn.y*=-1,vn.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Df.makeRotationFromEuler(vn)),u.material.toneMapped=vt.getTransfer(y.colorSpace)!==st,(f!==y||g!==y.version||m!==e.toneMapping)&&(u.material.needsUpdate=!0,f=y,g=y.version,m=e.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(p===void 0&&(p=new ut(new wo(2,2),new nn({name:"BackgroundMaterial",uniforms:ls(zt.background.uniforms),vertexShader:zt.background.vertexShader,fragmentShader:zt.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=y,p.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,p.material.toneMapped=vt.getTransfer(y.colorSpace)!==st,y.matrixAutoUpdate===!0&&y.updateMatrix(),p.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||g!==y.version||m!==e.toneMapping)&&(p.material.needsUpdate=!0,f=y,g=y.version,m=e.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null))}function l(w,b){w.getRGB(vi,Lo(e)),i.buffers.color.setClear(vi.r,vi.g,vi.b,b,s)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,b=1){o.set(w),c=b,l(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,l(o,c)},render:E,addToRenderList:h,dispose:T}}function If(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},r=g(null);let a=r,s=!1;function o(S,C,O,W,q){let Z=!1;const Y=f(W,O,C);a!==Y&&(a=Y,p(a.object)),Z=m(S,W,O,q),Z&&M(S,W,O,q),q!==null&&t.update(q,e.ELEMENT_ARRAY_BUFFER),(Z||s)&&(s=!1,b(S,C,O,W),q!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function c(){return e.createVertexArray()}function p(S){return e.bindVertexArray(S)}function u(S){return e.deleteVertexArray(S)}function f(S,C,O){const W=O.wireframe===!0;let q=i[S.id];q===void 0&&(q={},i[S.id]=q);let Z=q[C.id];Z===void 0&&(Z={},q[C.id]=Z);let Y=Z[W];return Y===void 0&&(Y=g(c()),Z[W]=Y),Y}function g(S){const C=[],O=[],W=[];for(let q=0;q<n;q++)C[q]=0,O[q]=0,W[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:O,attributeDivisors:W,object:S,attributes:{},index:null}}function m(S,C,O,W){const q=a.attributes,Z=C.attributes;let Y=0;const le=O.getAttributes();for(const V in le)if(le[V].location>=0){const Ae=q[V];let Re=Z[V];if(Re===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(Re=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(Re=S.instanceColor)),Ae===void 0||Ae.attribute!==Re||Re&&Ae.data!==Re.data)return!0;Y++}return a.attributesNum!==Y||a.index!==W}function M(S,C,O,W){const q={},Z=C.attributes;let Y=0;const le=O.getAttributes();for(const V in le)if(le[V].location>=0){let Ae=Z[V];Ae===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(Ae=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(Ae=S.instanceColor));const Re={};Re.attribute=Ae,Ae&&Ae.data&&(Re.data=Ae.data),q[V]=Re,Y++}a.attributes=q,a.attributesNum=Y,a.index=W}function E(){const S=a.newAttributes;for(let C=0,O=S.length;C<O;C++)S[C]=0}function h(S){l(S,0)}function l(S,C){const O=a.newAttributes,W=a.enabledAttributes,q=a.attributeDivisors;O[S]=1,W[S]===0&&(e.enableVertexAttribArray(S),W[S]=1),q[S]!==C&&(e.vertexAttribDivisor(S,C),q[S]=C)}function T(){const S=a.newAttributes,C=a.enabledAttributes;for(let O=0,W=C.length;O<W;O++)C[O]!==S[O]&&(e.disableVertexAttribArray(O),C[O]=0)}function w(S,C,O,W,q,Z,Y){Y===!0?e.vertexAttribIPointer(S,C,O,q,Z):e.vertexAttribPointer(S,C,O,W,q,Z)}function b(S,C,O,W){E();const q=W.attributes,Z=O.getAttributes(),Y=C.defaultAttributeValues;for(const le in Z){const V=Z[le];if(V.location>=0){let ve=q[le];if(ve===void 0&&(le==="instanceMatrix"&&S.instanceMatrix&&(ve=S.instanceMatrix),le==="instanceColor"&&S.instanceColor&&(ve=S.instanceColor)),ve!==void 0){const Ae=ve.normalized,Re=ve.itemSize,Ve=t.get(ve);if(Ve===void 0)continue;const We=Ve.buffer,je=Ve.type,Xe=Ve.bytesPerElement,B=je===e.INT||je===e.UNSIGNED_INT||ve.gpuType===Ao;if(ve.isInterleavedBufferAttribute){const K=ve.data,me=K.stride,De=ve.offset;if(K.isInstancedInterleavedBuffer){for(let ye=0;ye<V.locationSize;ye++)l(V.location+ye,K.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ye=0;ye<V.locationSize;ye++)h(V.location+ye);e.bindBuffer(e.ARRAY_BUFFER,We);for(let ye=0;ye<V.locationSize;ye++)w(V.location+ye,Re/V.locationSize,je,Ae,me*Xe,(De+Re/V.locationSize*ye)*Xe,B)}else{if(ve.isInstancedBufferAttribute){for(let K=0;K<V.locationSize;K++)l(V.location+K,ve.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let K=0;K<V.locationSize;K++)h(V.location+K);e.bindBuffer(e.ARRAY_BUFFER,We);for(let K=0;K<V.locationSize;K++)w(V.location+K,Re/V.locationSize,je,Ae,Re*Xe,Re/V.locationSize*K*Xe,B)}}else if(Y!==void 0){const Ae=Y[le];if(Ae!==void 0)switch(Ae.length){case 2:e.vertexAttrib2fv(V.location,Ae);break;case 3:e.vertexAttrib3fv(V.location,Ae);break;case 4:e.vertexAttrib4fv(V.location,Ae);break;default:e.vertexAttrib1fv(V.location,Ae)}}}}T()}function y(){U();for(const S in i){const C=i[S];for(const O in C){const W=C[O];for(const q in W)u(W[q].object),delete W[q];delete C[O]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const C=i[S.id];for(const O in C){const W=C[O];for(const q in W)u(W[q].object),delete W[q];delete C[O]}delete i[S.id]}function D(S){for(const C in i){const O=i[C];if(O[S.id]===void 0)continue;const W=O[S.id];for(const q in W)u(W[q].object),delete W[q];delete O[S.id]}}function U(){_(),s=!0,a!==r&&(a=r,p(a.object))}function _(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:_,dispose:y,releaseStatesOfGeometry:A,releaseStatesOfProgram:D,initAttributes:E,enableAttribute:h,disableUnusedAttributes:T}}function Nf(e,t,n){let i;function r(p){i=p}function a(p,u){e.drawArrays(i,p,u),n.update(u,i,1)}function s(p,u,f){f!==0&&(e.drawArraysInstanced(i,p,u,f),n.update(u,i,f))}function o(p,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,p,0,u,0,f);let m=0;for(let M=0;M<f;M++)m+=u[M];n.update(m,i,1)}function c(p,u,f,g){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let M=0;M<p.length;M++)s(p[M],u[M],g[M]);else{m.multiDrawArraysInstancedWEBGL(i,p,0,u,0,g,0,f);let M=0;for(let E=0;E<f;E++)M+=u[E]*g[E];n.update(M,i,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Ff(e,t,n,i){let r;function a(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(D){return!(D!==Xt&&i.convert(D)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const U=D===Xi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==Pn&&i.convert(D)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Tn&&!U)}function c(D){if(D==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const u=c(p);u!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",u,"instead."),p=u);const f=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=e.getParameter(e.MAX_TEXTURE_SIZE),h=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),l=e.getParameter(e.MAX_VERTEX_ATTRIBS),T=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),w=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),y=M>0,A=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:p,logarithmicDepthBuffer:f,reversedDepthBuffer:g,maxTextures:m,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:h,maxAttributes:l,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:b,vertexTextures:y,maxSamples:A}}function Of(e){const t=this;let n=null,i=0,r=!1,a=!1;const s=new Ql,o=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,g){const m=f.length!==0||g||i!==0||r;return r=g,i=f.length,m},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,g){n=u(f,g,0)},this.setState=function(f,g,m){const M=f.clippingPlanes,E=f.clipIntersection,h=f.clipShadows,l=e.get(f);if(!r||M===null||M.length===0||a&&!h)a?u(null):p();else{const T=a?0:i,w=T*4;let b=l.clippingState||null;c.value=b,b=u(M,g,w,m);for(let y=0;y!==w;++y)b[y]=n[y];l.clippingState=b,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=T}};function p(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,g,m,M){const E=f!==null?f.length:0;let h=null;if(E!==0){if(h=c.value,M!==!0||h===null){const l=m+E*4,T=g.matrixWorldInverse;o.getNormalMatrix(T),(h===null||h.length<l)&&(h=new Float32Array(l));for(let w=0,b=m;w!==E;++w,b+=4)s.copy(f[w]).applyMatrix4(T,o),s.normal.toArray(h,b),h[b+3]=s.constant}c.value=h,c.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,h}}function Bf(e){let t=new WeakMap;function n(s,o){return o===Vi?s.mapping=ai:o===zr&&(s.mapping=kn),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===Vi||o===zr)if(t.has(s)){const c=t.get(s).texture;return n(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const p=new hc(c.height);return p.fromEquirectangularTexture(e,s),t.set(s,p),s.addEventListener("dispose",r),n(p.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}const On=4,ms=[.125,.215,.35,.446,.526,.582],En=20,dr=new El,gs=new $e;let fr=null,hr=0,pr=0,mr=!1;const Mn=(1+Math.sqrt(5))/2,Un=1/Mn,vs=[new ne(-Mn,Un,0),new ne(Mn,Un,0),new ne(-Un,0,Mn),new ne(Un,0,Mn),new ne(0,Mn,-Un),new ne(0,Mn,Un),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)],kf=new ne;class Yr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,r=100,a={}){const{size:s=256,position:o=kf}=a;fr=this._renderer.getRenderTarget(),hr=this._renderer.getActiveCubeFace(),pr=this._renderer.getActiveMipmapLevel(),mr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,r,c,o),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ms(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ss(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fr,hr,pr),this._renderer.xr.enabled=mr,t.scissorTest=!1,_i(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===ai||t.mapping===kn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fr=this._renderer.getRenderTarget(),hr=this._renderer.getActiveCubeFace(),pr=this._renderer.getActiveMipmapLevel(),mr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Xi,format:Xt,colorSpace:qi,depthBuffer:!1},r=_s(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_s(t,n,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gf(a)),this._blurMaterial=Hf(a,t,n)}return r}_compileMaterial(t){const n=new ut(this._lodPlanes[0],t);this._renderer.compile(n,dr)}_sceneToCubeUV(t,n,i,r,a){const c=new Qn(90,1,n,i),p=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,g=f.autoClear,m=f.toneMapping;f.getClearColor(gs),f.toneMapping=ln,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const E=new sa({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),h=new ut(new cn,E);let l=!1;const T=t.background;T?T.isColor&&(E.color.copy(T),t.background=null,l=!0):(E.color.copy(gs),l=!0);for(let w=0;w<6;w++){const b=w%3;b===0?(c.up.set(0,p[w],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x+u[w],a.y,a.z)):b===1?(c.up.set(0,0,p[w]),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y+u[w],a.z)):(c.up.set(0,p[w],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y,a.z+u[w]));const y=this._cubeSize;_i(r,b*y,w>2?y:0,y,y),f.setRenderTarget(r),l&&f.render(h,c),f.render(t,c)}h.geometry.dispose(),h.material.dispose(),f.toneMapping=m,f.autoClear=g,t.background=T}_textureToCubeUV(t,n){const i=this._renderer,r=t.mapping===ai||t.mapping===kn;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ms()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ss());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new ut(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;const c=this._cubeSize;_i(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(s,dr)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=vs[(r-a-1)%vs.length];this._blur(t,a-1,a,s,o)}n.autoClear=i}_blur(t,n,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(t,s,n,i,r,"latitudinal",a),this._halfBlur(s,t,i,i,r,"longitudinal",a)}_halfBlur(t,n,i,r,a,s,o){const c=this._renderer,p=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ut(this._lodPlanes[r],p),g=p.uniforms,m=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*En-1),E=a/M,h=isFinite(a)?1+Math.floor(u*E):En;h>En&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${En}`);const l=[];let T=0;for(let D=0;D<En;++D){const U=D/E,_=Math.exp(-U*U/2);l.push(_),D===0?T+=_:D<h&&(T+=2*_)}for(let D=0;D<l.length;D++)l[D]=l[D]/T;g.envMap.value=t.texture,g.samples.value=h,g.weights.value=l,g.latitudinal.value=s==="latitudinal",o&&(g.poleAxis.value=o);const{_lodMax:w}=this;g.dTheta.value=M,g.mipInt.value=w-i;const b=this._sizeLods[r],y=3*b*(r>w-On?r-w+On:0),A=4*(this._cubeSize-b);_i(n,y,A,3*b,2*b),c.setRenderTarget(n),c.render(f,dr)}}function Gf(e){const t=[],n=[],i=[];let r=e;const a=e-On+1+ms.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);n.push(o);let c=1/o;s>e-On?c=ms[s-e+On-1]:s===0&&(c=0),i.push(c);const p=1/(o-2),u=-p,f=1+p,g=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,M=6,E=3,h=2,l=1,T=new Float32Array(E*M*m),w=new Float32Array(h*M*m),b=new Float32Array(l*M*m);for(let A=0;A<m;A++){const D=A%3*2/3-1,U=A>2?0:-1,_=[D,U,0,D+2/3,U,0,D+2/3,U+1,0,D,U,0,D+2/3,U+1,0,D,U+1,0];T.set(_,E*M*A),w.set(g,h*M*A);const S=[A,A,A,A,A,A];b.set(S,l*M*A)}const y=new un;y.setAttribute("position",new Ft(T,E)),y.setAttribute("uv",new Ft(w,h)),y.setAttribute("faceIndex",new Ft(b,l)),t.push(y),r>On&&r--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function _s(e,t,n){const i=new Bn(e,t,n);return i.texture.mapping=Yi,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _i(e,t,n,i,r){e.viewport.set(t,n,i,r),e.scissor.set(t,n,i,r)}function Hf(e,t,n){const i=new Float32Array(En),r=new ne(0,1,0);return new nn({name:"SphericalGaussianBlur",defines:{n:En,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:la(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Ss(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:la(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Ms(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function la(){return`

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
	`}function Vf(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const c=o.mapping,p=c===Vi||c===zr,u=c===ai||c===kn;if(p||u){let f=t.get(o);const g=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==g)return n===null&&(n=new Yr(e)),f=p?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return p&&m&&m.height>0||u&&m&&r(m)?(n===null&&(n=new Yr(e)),f=p?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",a),f.texture):null}}}return o}function r(o){let c=0;const p=6;for(let u=0;u<p;u++)o[u]!==void 0&&c++;return c===p}function a(o){const c=o.target;c.removeEventListener("dispose",a);const p=t.get(c);p!==void 0&&(t.delete(c),p.dispose())}function s(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function zf(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=e.getExtension(i)}return t[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Nr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Wf(e,t,n,i){const r={},a=new WeakMap;function s(f){const g=f.target;g.index!==null&&t.remove(g.index);for(const M in g.attributes)t.remove(g.attributes[M]);g.removeEventListener("dispose",s),delete r[g.id];const m=a.get(g);m&&(t.remove(m),a.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function o(f,g){return r[g.id]===!0||(g.addEventListener("dispose",s),r[g.id]=!0,n.memory.geometries++),g}function c(f){const g=f.attributes;for(const m in g)t.update(g[m],e.ARRAY_BUFFER)}function p(f){const g=[],m=f.index,M=f.attributes.position;let E=0;if(m!==null){const T=m.array;E=m.version;for(let w=0,b=T.length;w<b;w+=3){const y=T[w+0],A=T[w+1],D=T[w+2];g.push(y,A,A,D,D,y)}}else if(M!==void 0){const T=M.array;E=M.version;for(let w=0,b=T.length/3-1;w<b;w+=3){const y=w+0,A=w+1,D=w+2;g.push(y,A,A,D,D,y)}}else return;const h=new(Sc(g)?vc:_c)(g,1);h.version=E;const l=a.get(f);l&&t.remove(l),a.set(f,h)}function u(f){const g=a.get(f);if(g){const m=f.index;m!==null&&g.version<m.version&&p(f)}else p(f);return a.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function Xf(e,t,n){let i;function r(g){i=g}let a,s;function o(g){a=g.type,s=g.bytesPerElement}function c(g,m){e.drawElements(i,m,a,g*s),n.update(m,i,1)}function p(g,m,M){M!==0&&(e.drawElementsInstanced(i,m,a,g*s,M),n.update(m,i,M))}function u(g,m,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,a,g,0,M);let h=0;for(let l=0;l<M;l++)h+=m[l];n.update(h,i,1)}function f(g,m,M,E){if(M===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let l=0;l<g.length;l++)p(g[l]/s,m[l],E[l]);else{h.multiDrawElementsInstancedWEBGL(i,m,0,a,g,0,E,0,M);let l=0;for(let T=0;T<M;T++)l+=m[T]*E[T];n.update(l,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=p,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function qf(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(n.calls++,s){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Yf(e,t,n){const i=new WeakMap,r=new At;function a(s,o,c){const p=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let g=i.get(o);if(g===void 0||g.count!==f){let _=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",_)};g!==void 0&&g.texture.dispose();const m=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,E=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],l=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let w=0;m===!0&&(w=1),M===!0&&(w=2),E===!0&&(w=3);let b=o.attributes.position.count*w,y=1;b>t.maxTextureSize&&(y=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const A=new Float32Array(b*y*4*f),D=new Po(A,b,y,f);D.type=Tn,D.needsUpdate=!0;const U=w*4;for(let S=0;S<f;S++){const C=h[S],O=l[S],W=T[S],q=b*y*4*S;for(let Z=0;Z<C.count;Z++){const Y=Z*U;m===!0&&(r.fromBufferAttribute(C,Z),A[q+Y+0]=r.x,A[q+Y+1]=r.y,A[q+Y+2]=r.z,A[q+Y+3]=0),M===!0&&(r.fromBufferAttribute(O,Z),A[q+Y+4]=r.x,A[q+Y+5]=r.y,A[q+Y+6]=r.z,A[q+Y+7]=0),E===!0&&(r.fromBufferAttribute(W,Z),A[q+Y+8]=r.x,A[q+Y+9]=r.y,A[q+Y+10]=r.z,A[q+Y+11]=W.itemSize===4?r.w:1)}}g={count:f,texture:D,size:new dt(b,y)},i.set(o,g),o.addEventListener("dispose",_)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(e,"morphTexture",s.morphTexture,n);else{let m=0;for(let E=0;E<p.length;E++)m+=p[E];const M=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(e,"morphTargetBaseInfluence",M),c.getUniforms().setValue(e,"morphTargetInfluences",p)}c.getUniforms().setValue(e,"morphTargetsTexture",g.texture,n),c.getUniforms().setValue(e,"morphTargetsTextureSize",g.size)}return{update:a}}function Kf(e,t,n,i){let r=new WeakMap;function a(c){const p=i.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==p&&(t.update(f),r.set(f,p)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==p&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),r.set(c,p))),c.isSkinnedMesh){const g=c.skeleton;r.get(g)!==p&&(g.update(),r.set(g,p))}return f}function s(){r=new WeakMap}function o(c){const p=c.target;p.removeEventListener("dispose",o),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:a,dispose:s}}const ko=new Cc,Es=new _o(1,1),Go=new Po,Ho=new yc,Vo=new Rc,xs=[],bs=[],Ts=new Float32Array(16),ws=new Float32Array(9),As=new Float32Array(4);function Vn(e,t,n){const i=e[0];if(i<=0||i>0)return e;const r=t*n;let a=xs[r];if(a===void 0&&(a=new Float32Array(r),xs[r]=a),t!==0){i.toArray(a,0);for(let s=1,o=0;s!==t;++s)o+=n,e[s].toArray(a,o)}return a}function St(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Mt(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Ki(e,t){let n=bs[t];n===void 0&&(n=new Int32Array(t),bs[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function $f(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Zf(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(St(n,t))return;e.uniform2fv(this.addr,t),Mt(n,t)}}function jf(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(St(n,t))return;e.uniform3fv(this.addr,t),Mt(n,t)}}function Qf(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(St(n,t))return;e.uniform4fv(this.addr,t),Mt(n,t)}}function Jf(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(St(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Mt(n,t)}else{if(St(n,i))return;As.set(i),e.uniformMatrix2fv(this.addr,!1,As),Mt(n,i)}}function eh(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(St(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Mt(n,t)}else{if(St(n,i))return;ws.set(i),e.uniformMatrix3fv(this.addr,!1,ws),Mt(n,i)}}function th(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(St(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Mt(n,t)}else{if(St(n,i))return;Ts.set(i),e.uniformMatrix4fv(this.addr,!1,Ts),Mt(n,i)}}function nh(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ih(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(St(n,t))return;e.uniform2iv(this.addr,t),Mt(n,t)}}function rh(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(St(n,t))return;e.uniform3iv(this.addr,t),Mt(n,t)}}function ah(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(St(n,t))return;e.uniform4iv(this.addr,t),Mt(n,t)}}function sh(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function oh(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(St(n,t))return;e.uniform2uiv(this.addr,t),Mt(n,t)}}function lh(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(St(n,t))return;e.uniform3uiv(this.addr,t),Mt(n,t)}}function ch(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(St(n,t))return;e.uniform4uiv(this.addr,t),Mt(n,t)}}function uh(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);let a;this.type===e.SAMPLER_2D_SHADOW?(Es.compareFunction=Mo,a=Es):a=ko,n.setTexture2D(t||a,r)}function dh(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(t||Ho,r)}function fh(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(t||Vo,r)}function hh(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(t||Go,r)}function ph(e){switch(e){case 5126:return $f;case 35664:return Zf;case 35665:return jf;case 35666:return Qf;case 35674:return Jf;case 35675:return eh;case 35676:return th;case 5124:case 35670:return nh;case 35667:case 35671:return ih;case 35668:case 35672:return rh;case 35669:case 35673:return ah;case 5125:return sh;case 36294:return oh;case 36295:return lh;case 36296:return ch;case 35678:case 36198:case 36298:case 36306:case 35682:return uh;case 35679:case 36299:case 36307:return dh;case 35680:case 36300:case 36308:case 36293:return fh;case 36289:case 36303:case 36311:case 36292:return hh}}function mh(e,t){e.uniform1fv(this.addr,t)}function gh(e,t){const n=Vn(t,this.size,2);e.uniform2fv(this.addr,n)}function vh(e,t){const n=Vn(t,this.size,3);e.uniform3fv(this.addr,n)}function _h(e,t){const n=Vn(t,this.size,4);e.uniform4fv(this.addr,n)}function Sh(e,t){const n=Vn(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Mh(e,t){const n=Vn(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Eh(e,t){const n=Vn(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function xh(e,t){e.uniform1iv(this.addr,t)}function bh(e,t){e.uniform2iv(this.addr,t)}function Th(e,t){e.uniform3iv(this.addr,t)}function wh(e,t){e.uniform4iv(this.addr,t)}function Ah(e,t){e.uniform1uiv(this.addr,t)}function Rh(e,t){e.uniform2uiv(this.addr,t)}function yh(e,t){e.uniform3uiv(this.addr,t)}function Ch(e,t){e.uniform4uiv(this.addr,t)}function Ph(e,t,n){const i=this.cache,r=t.length,a=Ki(n,r);St(i,a)||(e.uniform1iv(this.addr,a),Mt(i,a));for(let s=0;s!==r;++s)n.setTexture2D(t[s]||ko,a[s])}function Lh(e,t,n){const i=this.cache,r=t.length,a=Ki(n,r);St(i,a)||(e.uniform1iv(this.addr,a),Mt(i,a));for(let s=0;s!==r;++s)n.setTexture3D(t[s]||Ho,a[s])}function Dh(e,t,n){const i=this.cache,r=t.length,a=Ki(n,r);St(i,a)||(e.uniform1iv(this.addr,a),Mt(i,a));for(let s=0;s!==r;++s)n.setTextureCube(t[s]||Vo,a[s])}function Uh(e,t,n){const i=this.cache,r=t.length,a=Ki(n,r);St(i,a)||(e.uniform1iv(this.addr,a),Mt(i,a));for(let s=0;s!==r;++s)n.setTexture2DArray(t[s]||Go,a[s])}function Ih(e){switch(e){case 5126:return mh;case 35664:return gh;case 35665:return vh;case 35666:return _h;case 35674:return Sh;case 35675:return Mh;case 35676:return Eh;case 5124:case 35670:return xh;case 35667:case 35671:return bh;case 35668:case 35672:return Th;case 35669:case 35673:return wh;case 5125:return Ah;case 36294:return Rh;case 36295:return yh;case 36296:return Ch;case 35678:case 36198:case 36298:case 36306:case 35682:return Ph;case 35679:case 36299:case 36307:return Lh;case 35680:case 36300:case 36308:case 36293:return Dh;case 36289:case 36303:case 36311:case 36292:return Uh}}class Nh{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ph(n.type)}}class Fh{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Ih(n.type)}}class Oh{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(t,n[o.id],i)}}}const gr=/(\w+)(\])?(\[|\.)?/g;function Rs(e,t){e.seq.push(t),e.map[t.id]=t}function Bh(e,t,n){const i=e.name,r=i.length;for(gr.lastIndex=0;;){const a=gr.exec(i),s=gr.lastIndex;let o=a[1];const c=a[2]==="]",p=a[3];if(c&&(o=o|0),p===void 0||p==="["&&s+2===r){Rs(n,p===void 0?new Nh(o,e,t):new Fh(o,e,t));break}else{let f=n.map[o];f===void 0&&(f=new Oh(o),Rs(n,f)),n=f}}}class Ui{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=t.getActiveUniform(n,r),s=t.getUniformLocation(n,a.name);Bh(a,s,this)}}setValue(t,n,i,r){const a=this.map[n];a!==void 0&&a.setValue(t,i,r)}setOptional(t,n,i){const r=n[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,n,i,r){for(let a=0,s=n.length;a!==s;++a){const o=n[a],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,n){const i=[];for(let r=0,a=t.length;r!==a;++r){const s=t[r];s.id in n&&i.push(s)}return i}}function ys(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const kh=37297;let Gh=0;function Hh(e,t){const n=e.split(`
`),i=[],r=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===t?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}const Cs=new Ke;function Vh(e){vt._getMatrix(Cs,vt.workingColorSpace,e);const t=`mat3( ${Cs.elements.map(n=>n.toFixed(4))} )`;switch(vt.getTransfer(e)){case Do:return[t,"LinearTransferOETF"];case st:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Ps(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+a+`

`+Hh(e.getShaderSource(t),o)}else return a}function zh(e,t){const n=Vh(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Wh(e,t){let n;switch(t){case Ac:n="Linear";break;case wc:n="Reinhard";break;case Tc:n="Cineon";break;case Io:n="ACESFilmic";break;case bc:n="AgX";break;case xc:n="Neutral";break;case Ec:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Si=new ne;function Xh(){vt.getLuminanceCoefficients(Si);const e=Si.x.toFixed(4),t=Si.y.toFixed(4),n=Si.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qh(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($n).join(`
`)}function Yh(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function Kh(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=e.getActiveAttrib(t,r),s=a.name;let o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[s]={type:a.type,location:e.getAttribLocation(t,s),locationSize:o}}return n}function $n(e){return e!==""}function Ls(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ds(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const $h=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kr(e){return e.replace($h,jh)}const Zh=new Map;function jh(e,t){let n=Be[t];if(n===void 0){const i=Zh.get(t);if(i!==void 0)n=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Kr(n)}const Qh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Us(e){return e.replace(Qh,Jh)}function Jh(e,t,n,i){let r="";for(let a=parseInt(t);a<parseInt(n);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Is(e){let t=`precision ${e.precision} float;
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
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ep(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Eo?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===Uo?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Qt&&(t="SHADOWMAP_TYPE_VSM"),t}function tp(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case ai:case kn:t="ENVMAP_TYPE_CUBE";break;case Yi:t="ENVMAP_TYPE_CUBE_UV";break}return t}function np(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case kn:t="ENVMAP_MODE_REFRACTION";break}return t}function ip(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Uc:t="ENVMAP_BLENDING_MULTIPLY";break;case Dc:t="ENVMAP_BLENDING_MIX";break;case Lc:t="ENVMAP_BLENDING_ADD";break}return t}function rp(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function ap(e,t,n,i){const r=e.getContext(),a=n.defines;let s=n.vertexShader,o=n.fragmentShader;const c=ep(n),p=tp(n),u=np(n),f=ip(n),g=rp(n),m=qh(n),M=Yh(a),E=r.createProgram();let h,l,T=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter($n).join(`
`),h.length>0&&(h+=`
`),l=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter($n).join(`
`),l.length>0&&(l+=`
`)):(h=[Is(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($n).join(`
`),l=[Is(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ln?"#define TONE_MAPPING":"",n.toneMapping!==ln?Be.tonemapping_pars_fragment:"",n.toneMapping!==ln?Wh("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,zh("linearToOutputTexel",n.outputColorSpace),Xh(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter($n).join(`
`)),s=Kr(s),s=Ls(s,n),s=Ds(s,n),o=Kr(o),o=Ls(o,n),o=Ds(o,n),s=Us(s),o=Us(o),n.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,h=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,l=["#define varying in",n.glslVersion===us?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===us?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const w=T+h+s,b=T+l+o,y=ys(r,r.VERTEX_SHADER,w),A=ys(r,r.FRAGMENT_SHADER,b);r.attachShader(E,y),r.attachShader(E,A),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function D(C){if(e.debug.checkShaderErrors){const O=r.getProgramInfoLog(E)||"",W=r.getShaderInfoLog(y)||"",q=r.getShaderInfoLog(A)||"",Z=O.trim(),Y=W.trim(),le=q.trim();let V=!0,ve=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(V=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,E,y,A);else{const Ae=Ps(r,y,"vertex"),Re=Ps(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+Z+`
`+Ae+`
`+Re)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(Y===""||le==="")&&(ve=!1);ve&&(C.diagnostics={runnable:V,programLog:Z,vertexShader:{log:Y,prefix:h},fragmentShader:{log:le,prefix:l}})}r.deleteShader(y),r.deleteShader(A),U=new Ui(r,E),_=Kh(r,E)}let U;this.getUniforms=function(){return U===void 0&&D(this),U};let _;this.getAttributes=function(){return _===void 0&&D(this),_};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(E,kh)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Gh++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=y,this.fragmentShader=A,this}let sp=0;class op{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(n),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(t);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new lp(t),n.set(t,i)),i}}class lp{constructor(t){this.id=sp++,this.code=t,this.usedTimes=0}}function cp(e,t,n,i,r,a,s){const o=new Mc,c=new op,p=new Set,u=[],f=r.logarithmicDepthBuffer,g=r.vertexTextures;let m=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(_){return p.add(_),_===0?"uv":`uv${_}`}function h(_,S,C,O,W){const q=O.fog,Z=W.geometry,Y=_.isMeshStandardMaterial?O.environment:null,le=(_.isMeshStandardMaterial?n:t).get(_.envMap||Y),V=le&&le.mapping===Yi?le.image.height:null,ve=M[_.type];_.precision!==null&&(m=r.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));const Ae=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Re=Ae!==void 0?Ae.length:0;let Ve=0;Z.morphAttributes.position!==void 0&&(Ve=1),Z.morphAttributes.normal!==void 0&&(Ve=2),Z.morphAttributes.color!==void 0&&(Ve=3);let We,je,Xe,B;if(ve){const Ze=zt[ve];We=Ze.vertexShader,je=Ze.fragmentShader}else We=_.vertexShader,je=_.fragmentShader,c.update(_),Xe=c.getVertexShaderID(_),B=c.getFragmentShaderID(_);const K=e.getRenderTarget(),me=e.state.buffers.depth.getReversed(),De=W.isInstancedMesh===!0,ye=W.isBatchedMesh===!0,Ge=!!_.map,ft=!!_.matcap,R=!!le,it=!!_.aoMap,L=!!_.lightMap,re=!!_.bumpMap,j=!!_.normalMap,Ue=!!_.displacementMap,de=!!_.emissiveMap,Me=!!_.metalnessMap,qe=!!_.roughnessMap,ke=_.anisotropy>0,x=_.clearcoat>0,d=_.dispersion>0,F=_.iridescence>0,z=_.sheen>0,Q=_.transmission>0,k=ke&&!!_.anisotropyMap,xe=x&&!!_.clearcoatMap,ee=x&&!!_.clearcoatNormalMap,he=x&&!!_.clearcoatRoughnessMap,ge=F&&!!_.iridescenceMap,te=F&&!!_.iridescenceThicknessMap,oe=z&&!!_.sheenColorMap,Ee=z&&!!_.sheenRoughnessMap,_e=!!_.specularMap,ue=!!_.specularColorMap,Fe=!!_.specularIntensityMap,P=Q&&!!_.transmissionMap,ie=Q&&!!_.thicknessMap,ce=!!_.gradientMap,be=!!_.alphaMap,ae=_.alphaTest>0,J=!!_.alphaHash,we=!!_.extensions;let Oe=ln;_.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Oe=e.toneMapping);const rt={shaderID:ve,shaderType:_.type,shaderName:_.name,vertexShader:We,fragmentShader:je,defines:_.defines,customVertexShaderID:Xe,customFragmentShaderID:B,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,batching:ye,batchingColor:ye&&W._colorsTexture!==null,instancing:De,instancingColor:De&&W.instanceColor!==null,instancingMorph:De&&W.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:K===null?e.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:qi,alphaToCoverage:!!_.alphaToCoverage,map:Ge,matcap:ft,envMap:R,envMapMode:R&&le.mapping,envMapCubeUVHeight:V,aoMap:it,lightMap:L,bumpMap:re,normalMap:j,displacementMap:g&&Ue,emissiveMap:de,normalMapObjectSpace:j&&_.normalMapType===gc,normalMapTangentSpace:j&&_.normalMapType===mc,metalnessMap:Me,roughnessMap:qe,anisotropy:ke,anisotropyMap:k,clearcoat:x,clearcoatMap:xe,clearcoatNormalMap:ee,clearcoatRoughnessMap:he,dispersion:d,iridescence:F,iridescenceMap:ge,iridescenceThicknessMap:te,sheen:z,sheenColorMap:oe,sheenRoughnessMap:Ee,specularMap:_e,specularColorMap:ue,specularIntensityMap:Fe,transmission:Q,transmissionMap:P,thicknessMap:ie,gradientMap:ce,opaque:_.transparent===!1&&_.blending===Li&&_.alphaToCoverage===!1,alphaMap:be,alphaTest:ae,alphaHash:J,combine:_.combine,mapUv:Ge&&E(_.map.channel),aoMapUv:it&&E(_.aoMap.channel),lightMapUv:L&&E(_.lightMap.channel),bumpMapUv:re&&E(_.bumpMap.channel),normalMapUv:j&&E(_.normalMap.channel),displacementMapUv:Ue&&E(_.displacementMap.channel),emissiveMapUv:de&&E(_.emissiveMap.channel),metalnessMapUv:Me&&E(_.metalnessMap.channel),roughnessMapUv:qe&&E(_.roughnessMap.channel),anisotropyMapUv:k&&E(_.anisotropyMap.channel),clearcoatMapUv:xe&&E(_.clearcoatMap.channel),clearcoatNormalMapUv:ee&&E(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&E(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&E(_.iridescenceMap.channel),iridescenceThicknessMapUv:te&&E(_.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&E(_.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&E(_.sheenRoughnessMap.channel),specularMapUv:_e&&E(_.specularMap.channel),specularColorMapUv:ue&&E(_.specularColorMap.channel),specularIntensityMapUv:Fe&&E(_.specularIntensityMap.channel),transmissionMapUv:P&&E(_.transmissionMap.channel),thicknessMapUv:ie&&E(_.thicknessMap.channel),alphaMapUv:be&&E(_.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(j||ke),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!Z.attributes.uv&&(Ge||be),fog:!!q,useFog:_.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:_.flatShading===!0&&_.wireframe===!1,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:me,skinning:W.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Ve,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:e.shadowMap.enabled&&C.length>0,shadowMapType:e.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Ge&&_.map.isVideoTexture===!0&&vt.getTransfer(_.map.colorSpace)===st,decodeVideoTextureEmissive:de&&_.emissiveMap.isVideoTexture===!0&&vt.getTransfer(_.emissiveMap.colorSpace)===st,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===It,flipSided:_.side===Ct,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:we&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&_.extensions.multiDraw===!0||ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return rt.vertexUv1s=p.has(1),rt.vertexUv2s=p.has(2),rt.vertexUv3s=p.has(3),p.clear(),rt}function l(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)S.push(C),S.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(T(S,_),w(S,_),S.push(e.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function T(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function w(_,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),_.push(o.mask)}function b(_){const S=M[_.type];let C;if(S){const O=zt[S];C=pc.clone(O.uniforms)}else C=_.uniforms;return C}function y(_,S){let C;for(let O=0,W=u.length;O<W;O++){const q=u[O];if(q.cacheKey===S){C=q,++C.usedTimes;break}}return C===void 0&&(C=new ap(e,S,_,a),u.push(C)),C}function A(_){if(--_.usedTimes===0){const S=u.indexOf(_);u[S]=u[u.length-1],u.pop(),_.destroy()}}function D(_){c.remove(_)}function U(){c.dispose()}return{getParameters:h,getProgramCacheKey:l,getUniforms:b,acquireProgram:y,releaseProgram:A,releaseShaderCache:D,programs:u,dispose:U}}function up(){let e=new WeakMap;function t(s){return e.has(s)}function n(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function i(s){e.delete(s)}function r(s,o,c){e.get(s)[o]=c}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:r,dispose:a}}function dp(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Ns(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Fs(){const e=[];let t=0;const n=[],i=[],r=[];function a(){t=0,n.length=0,i.length=0,r.length=0}function s(f,g,m,M,E,h){let l=e[t];return l===void 0?(l={id:f.id,object:f,geometry:g,material:m,groupOrder:M,renderOrder:f.renderOrder,z:E,group:h},e[t]=l):(l.id=f.id,l.object=f,l.geometry=g,l.material=m,l.groupOrder=M,l.renderOrder=f.renderOrder,l.z=E,l.group=h),t++,l}function o(f,g,m,M,E,h){const l=s(f,g,m,M,E,h);m.transmission>0?i.push(l):m.transparent===!0?r.push(l):n.push(l)}function c(f,g,m,M,E,h){const l=s(f,g,m,M,E,h);m.transmission>0?i.unshift(l):m.transparent===!0?r.unshift(l):n.unshift(l)}function p(f,g){n.length>1&&n.sort(f||dp),i.length>1&&i.sort(g||Ns),r.length>1&&r.sort(g||Ns)}function u(){for(let f=t,g=e.length;f<g;f++){const m=e[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:a,push:o,unshift:c,finish:u,sort:p}}function fp(){let e=new WeakMap;function t(i,r){const a=e.get(i);let s;return a===void 0?(s=new Fs,e.set(i,[s])):r>=a.length?(s=new Fs,a.push(s)):s=a[r],s}function n(){e=new WeakMap}return{get:t,dispose:n}}function hp(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new ne,color:new $e};break;case"SpotLight":n={position:new ne,direction:new ne,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ne,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ne,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return e[t.id]=n,n}}}function pp(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let mp=0;function gp(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function vp(e){const t=new hp,n=pp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)i.probe.push(new ne);const r=new ne,a=new Nt,s=new Nt;function o(p){let u=0,f=0,g=0;for(let _=0;_<9;_++)i.probe[_].set(0,0,0);let m=0,M=0,E=0,h=0,l=0,T=0,w=0,b=0,y=0,A=0,D=0;p.sort(gp);for(let _=0,S=p.length;_<S;_++){const C=p[_],O=C.color,W=C.intensity,q=C.distance,Z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=O.r*W,f+=O.g*W,g+=O.b*W;else if(C.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(C.sh.coefficients[Y],W);D++}else if(C.isDirectionalLight){const Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const le=C.shadow,V=n.get(C);V.shadowIntensity=le.intensity,V.shadowBias=le.bias,V.shadowNormalBias=le.normalBias,V.shadowRadius=le.radius,V.shadowMapSize=le.mapSize,i.directionalShadow[m]=V,i.directionalShadowMap[m]=Z,i.directionalShadowMatrix[m]=C.shadow.matrix,T++}i.directional[m]=Y,m++}else if(C.isSpotLight){const Y=t.get(C);Y.position.setFromMatrixPosition(C.matrixWorld),Y.color.copy(O).multiplyScalar(W),Y.distance=q,Y.coneCos=Math.cos(C.angle),Y.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Y.decay=C.decay,i.spot[E]=Y;const le=C.shadow;if(C.map&&(i.spotLightMap[y]=C.map,y++,le.updateMatrices(C),C.castShadow&&A++),i.spotLightMatrix[E]=le.matrix,C.castShadow){const V=n.get(C);V.shadowIntensity=le.intensity,V.shadowBias=le.bias,V.shadowNormalBias=le.normalBias,V.shadowRadius=le.radius,V.shadowMapSize=le.mapSize,i.spotShadow[E]=V,i.spotShadowMap[E]=Z,b++}E++}else if(C.isRectAreaLight){const Y=t.get(C);Y.color.copy(O).multiplyScalar(W),Y.halfWidth.set(C.width*.5,0,0),Y.halfHeight.set(0,C.height*.5,0),i.rectArea[h]=Y,h++}else if(C.isPointLight){const Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),Y.distance=C.distance,Y.decay=C.decay,C.castShadow){const le=C.shadow,V=n.get(C);V.shadowIntensity=le.intensity,V.shadowBias=le.bias,V.shadowNormalBias=le.normalBias,V.shadowRadius=le.radius,V.shadowMapSize=le.mapSize,V.shadowCameraNear=le.camera.near,V.shadowCameraFar=le.camera.far,i.pointShadow[M]=V,i.pointShadowMap[M]=Z,i.pointShadowMatrix[M]=C.shadow.matrix,w++}i.point[M]=Y,M++}else if(C.isHemisphereLight){const Y=t.get(C);Y.skyColor.copy(C.color).multiplyScalar(W),Y.groundColor.copy(C.groundColor).multiplyScalar(W),i.hemi[l]=Y,l++}}h>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=g;const U=i.hash;(U.directionalLength!==m||U.pointLength!==M||U.spotLength!==E||U.rectAreaLength!==h||U.hemiLength!==l||U.numDirectionalShadows!==T||U.numPointShadows!==w||U.numSpotShadows!==b||U.numSpotMaps!==y||U.numLightProbes!==D)&&(i.directional.length=m,i.spot.length=E,i.rectArea.length=h,i.point.length=M,i.hemi.length=l,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=b+y-A,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=D,U.directionalLength=m,U.pointLength=M,U.spotLength=E,U.rectAreaLength=h,U.hemiLength=l,U.numDirectionalShadows=T,U.numPointShadows=w,U.numSpotShadows=b,U.numSpotMaps=y,U.numLightProbes=D,i.version=mp++)}function c(p,u){let f=0,g=0,m=0,M=0,E=0;const h=u.matrixWorldInverse;for(let l=0,T=p.length;l<T;l++){const w=p[l];if(w.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(h),f++}else if(w.isSpotLight){const b=i.spot[m];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(h),b.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(h),m++}else if(w.isRectAreaLight){const b=i.rectArea[M];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(h),s.identity(),a.copy(w.matrixWorld),a.premultiply(h),s.extractRotation(a),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),M++}else if(w.isPointLight){const b=i.point[g];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(h),g++}else if(w.isHemisphereLight){const b=i.hemi[E];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(h),E++}}}return{setup:o,setupView:c,state:i}}function Os(e){const t=new vp(e),n=[],i=[];function r(u){p.camera=u,n.length=0,i.length=0}function a(u){n.push(u)}function s(u){i.push(u)}function o(){t.setup(n)}function c(u){t.setupView(n,u)}const p={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:p,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:s}}function _p(e){let t=new WeakMap;function n(r,a=0){const s=t.get(r);let o;return s===void 0?(o=new Os(e),t.set(r,[o])):a>=s.length?(o=new Os(e),s.push(o)):o=s[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}const Sp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mp=`uniform sampler2D shadow_pass;
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
}`;function Ep(e,t,n){let i=new vo;const r=new dt,a=new dt,s=new At,o=new Jl({depthPacking:ec}),c=new tc,p={},u=n.maxTextureSize,f={[ri]:Ct,[Ct]:ri,[It]:It},g=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:Sp,fragmentShader:Mp}),m=g.clone();m.defines.HORIZONTAL_PASS=1;const M=new un;M.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new ut(M,g),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eo;let l=this.type;this.render=function(A,D,U){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||A.length===0)return;const _=e.getRenderTarget(),S=e.getActiveCubeFace(),C=e.getActiveMipmapLevel(),O=e.state;O.setBlending(wn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const W=l!==Qt&&this.type===Qt,q=l===Qt&&this.type!==Qt;for(let Z=0,Y=A.length;Z<Y;Z++){const le=A[Z],V=le.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ve=V.getFrameExtents();if(r.multiply(ve),a.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/ve.x),r.x=a.x*ve.x,V.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/ve.y),r.y=a.y*ve.y,V.mapSize.y=a.y)),V.map===null||W===!0||q===!0){const Re=this.type!==Qt?{minFilter:Jn,magFilter:Jn}:{};V.map!==null&&V.map.dispose(),V.map=new Bn(r.x,r.y,Re),V.map.texture.name=le.name+".shadowMap",V.camera.updateProjectionMatrix()}e.setRenderTarget(V.map),e.clear();const Ae=V.getViewportCount();for(let Re=0;Re<Ae;Re++){const Ve=V.getViewport(Re);s.set(a.x*Ve.x,a.y*Ve.y,a.x*Ve.z,a.y*Ve.w),O.viewport(s),V.updateMatrices(le,Re),i=V.getFrustum(),b(D,U,V.camera,le,this.type)}V.isPointLightShadow!==!0&&this.type===Qt&&T(V,U),V.needsUpdate=!1}l=this.type,h.needsUpdate=!1,e.setRenderTarget(_,S,C)};function T(A,D){const U=t.update(E);g.defines.VSM_SAMPLES!==A.blurSamples&&(g.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,g.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Bn(r.x,r.y)),g.uniforms.shadow_pass.value=A.map.texture,g.uniforms.resolution.value=A.mapSize,g.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(D,null,U,g,E,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(D,null,U,m,E,null)}function w(A,D,U,_){let S=null;const C=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)S=C;else if(S=U.isPointLight===!0?c:o,e.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const O=S.uuid,W=D.uuid;let q=p[O];q===void 0&&(q={},p[O]=q);let Z=q[W];Z===void 0&&(Z=S.clone(),q[W]=Z,D.addEventListener("dispose",y)),S=Z}if(S.visible=D.visible,S.wireframe=D.wireframe,_===Qt?S.side=D.shadowSide!==null?D.shadowSide:D.side:S.side=D.shadowSide!==null?D.shadowSide:f[D.side],S.alphaMap=D.alphaMap,S.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,S.map=D.map,S.clipShadows=D.clipShadows,S.clippingPlanes=D.clippingPlanes,S.clipIntersection=D.clipIntersection,S.displacementMap=D.displacementMap,S.displacementScale=D.displacementScale,S.displacementBias=D.displacementBias,S.wireframeLinewidth=D.wireframeLinewidth,S.linewidth=D.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=e.properties.get(S);O.light=U}return S}function b(A,D,U,_,S){if(A.visible===!1)return;if(A.layers.test(D.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Qt)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);const W=t.update(A),q=A.material;if(Array.isArray(q)){const Z=W.groups;for(let Y=0,le=Z.length;Y<le;Y++){const V=Z[Y],ve=q[V.materialIndex];if(ve&&ve.visible){const Ae=w(A,ve,_,S);A.onBeforeShadow(e,A,D,U,W,Ae,V),e.renderBufferDirect(U,null,W,Ae,A,V),A.onAfterShadow(e,A,D,U,W,Ae,V)}}}else if(q.visible){const Z=w(A,q,_,S);A.onBeforeShadow(e,A,D,U,W,Z,null),e.renderBufferDirect(U,null,W,Z,A,null),A.onAfterShadow(e,A,D,U,W,Z,null)}}const O=A.children;for(let W=0,q=O.length;W<q;W++)b(O[W],D,U,_,S)}function y(A){A.target.removeEventListener("dispose",y);for(const U in p){const _=p[U],S=A.target.uuid;S in _&&(_[S].dispose(),delete _[S])}}}const xp={[Vr]:Hr,[Gr]:Or,[kr]:Fr,[Gi]:Br,[Hr]:Vr,[Or]:Gr,[Fr]:kr,[Br]:Gi};function bp(e,t){function n(){let P=!1;const ie=new At;let ce=null;const be=new At(0,0,0,0);return{setMask:function(ae){ce!==ae&&!P&&(e.colorMask(ae,ae,ae,ae),ce=ae)},setLocked:function(ae){P=ae},setClear:function(ae,J,we,Oe,rt){rt===!0&&(ae*=Oe,J*=Oe,we*=Oe),ie.set(ae,J,we,Oe),be.equals(ie)===!1&&(e.clearColor(ae,J,we,Oe),be.copy(ie))},reset:function(){P=!1,ce=null,be.set(-1,0,0,0)}}}function i(){let P=!1,ie=!1,ce=null,be=null,ae=null;return{setReversed:function(J){if(ie!==J){const we=t.get("EXT_clip_control");J?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),ie=J;const Oe=ae;ae=null,this.setClear(Oe)}},getReversed:function(){return ie},setTest:function(J){J?K(e.DEPTH_TEST):me(e.DEPTH_TEST)},setMask:function(J){ce!==J&&!P&&(e.depthMask(J),ce=J)},setFunc:function(J){if(ie&&(J=xp[J]),be!==J){switch(J){case Vr:e.depthFunc(e.NEVER);break;case Hr:e.depthFunc(e.ALWAYS);break;case Gr:e.depthFunc(e.LESS);break;case Gi:e.depthFunc(e.LEQUAL);break;case kr:e.depthFunc(e.EQUAL);break;case Br:e.depthFunc(e.GEQUAL);break;case Or:e.depthFunc(e.GREATER);break;case Fr:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}be=J}},setLocked:function(J){P=J},setClear:function(J){ae!==J&&(ie&&(J=1-J),e.clearDepth(J),ae=J)},reset:function(){P=!1,ce=null,be=null,ae=null,ie=!1}}}function r(){let P=!1,ie=null,ce=null,be=null,ae=null,J=null,we=null,Oe=null,rt=null;return{setTest:function(Ze){P||(Ze?K(e.STENCIL_TEST):me(e.STENCIL_TEST))},setMask:function(Ze){ie!==Ze&&!P&&(e.stencilMask(Ze),ie=Ze)},setFunc:function(Ze,jt,Vt){(ce!==Ze||be!==jt||ae!==Vt)&&(e.stencilFunc(Ze,jt,Vt),ce=Ze,be=jt,ae=Vt)},setOp:function(Ze,jt,Vt){(J!==Ze||we!==jt||Oe!==Vt)&&(e.stencilOp(Ze,jt,Vt),J=Ze,we=jt,Oe=Vt)},setLocked:function(Ze){P=Ze},setClear:function(Ze){rt!==Ze&&(e.clearStencil(Ze),rt=Ze)},reset:function(){P=!1,ie=null,ce=null,be=null,ae=null,J=null,we=null,Oe=null,rt=null}}}const a=new n,s=new i,o=new r,c=new WeakMap,p=new WeakMap;let u={},f={},g=new WeakMap,m=[],M=null,E=!1,h=null,l=null,T=null,w=null,b=null,y=null,A=null,D=new $e(0,0,0),U=0,_=!1,S=null,C=null,O=null,W=null,q=null;const Z=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,le=0;const V=e.getParameter(e.VERSION);V.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(V)[1]),Y=le>=1):V.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Y=le>=2);let ve=null,Ae={};const Re=e.getParameter(e.SCISSOR_BOX),Ve=e.getParameter(e.VIEWPORT),We=new At().fromArray(Re),je=new At().fromArray(Ve);function Xe(P,ie,ce,be){const ae=new Uint8Array(4),J=e.createTexture();e.bindTexture(P,J),e.texParameteri(P,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(P,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let we=0;we<ce;we++)P===e.TEXTURE_3D||P===e.TEXTURE_2D_ARRAY?e.texImage3D(ie,0,e.RGBA,1,1,be,0,e.RGBA,e.UNSIGNED_BYTE,ae):e.texImage2D(ie+we,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ae);return J}const B={};B[e.TEXTURE_2D]=Xe(e.TEXTURE_2D,e.TEXTURE_2D,1),B[e.TEXTURE_CUBE_MAP]=Xe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[e.TEXTURE_2D_ARRAY]=Xe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),B[e.TEXTURE_3D]=Xe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),K(e.DEPTH_TEST),s.setFunc(Gi),re(!1),j(rs),K(e.CULL_FACE),it(wn);function K(P){u[P]!==!0&&(e.enable(P),u[P]=!0)}function me(P){u[P]!==!1&&(e.disable(P),u[P]=!1)}function De(P,ie){return f[P]!==ie?(e.bindFramebuffer(P,ie),f[P]=ie,P===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=ie),P===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=ie),!0):!1}function ye(P,ie){let ce=m,be=!1;if(P){ce=g.get(ie),ce===void 0&&(ce=[],g.set(ie,ce));const ae=P.textures;if(ce.length!==ae.length||ce[0]!==e.COLOR_ATTACHMENT0){for(let J=0,we=ae.length;J<we;J++)ce[J]=e.COLOR_ATTACHMENT0+J;ce.length=ae.length,be=!0}}else ce[0]!==e.BACK&&(ce[0]=e.BACK,be=!0);be&&e.drawBuffers(ce)}function Ge(P){return M!==P?(e.useProgram(P),M=P,!0):!1}const ft={[qn]:e.FUNC_ADD,[Al]:e.FUNC_SUBTRACT,[wl]:e.FUNC_REVERSE_SUBTRACT};ft[Ic]=e.MIN,ft[Nc]=e.MAX;const R={[Hl]:e.ZERO,[Gl]:e.ONE,[kl]:e.SRC_COLOR,[Bl]:e.SRC_ALPHA,[Ol]:e.SRC_ALPHA_SATURATE,[Fl]:e.DST_COLOR,[Nl]:e.DST_ALPHA,[Il]:e.ONE_MINUS_SRC_COLOR,[Ul]:e.ONE_MINUS_SRC_ALPHA,[Dl]:e.ONE_MINUS_DST_COLOR,[Ll]:e.ONE_MINUS_DST_ALPHA,[Pl]:e.CONSTANT_COLOR,[Cl]:e.ONE_MINUS_CONSTANT_COLOR,[yl]:e.CONSTANT_ALPHA,[Rl]:e.ONE_MINUS_CONSTANT_ALPHA};function it(P,ie,ce,be,ae,J,we,Oe,rt,Ze){if(P===wn){E===!0&&(me(e.BLEND),E=!1);return}if(E===!1&&(K(e.BLEND),E=!0),P!==fc){if(P!==h||Ze!==_){if((l!==qn||b!==qn)&&(e.blendEquation(e.FUNC_ADD),l=qn,b=qn),Ze)switch(P){case Li:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case os:e.blendFunc(e.ONE,e.ONE);break;case ss:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case as:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Li:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case os:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case ss:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case as:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}T=null,w=null,y=null,A=null,D.set(0,0,0),U=0,h=P,_=Ze}return}ae=ae||ie,J=J||ce,we=we||be,(ie!==l||ae!==b)&&(e.blendEquationSeparate(ft[ie],ft[ae]),l=ie,b=ae),(ce!==T||be!==w||J!==y||we!==A)&&(e.blendFuncSeparate(R[ce],R[be],R[J],R[we]),T=ce,w=be,y=J,A=we),(Oe.equals(D)===!1||rt!==U)&&(e.blendColor(Oe.r,Oe.g,Oe.b,rt),D.copy(Oe),U=rt),h=P,_=!1}function L(P,ie){P.side===It?me(e.CULL_FACE):K(e.CULL_FACE);let ce=P.side===Ct;ie&&(ce=!ce),re(ce),P.blending===Li&&P.transparent===!1?it(wn):it(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),a.setMask(P.colorWrite);const be=P.stencilWrite;o.setTest(be),be&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),de(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?K(e.SAMPLE_ALPHA_TO_COVERAGE):me(e.SAMPLE_ALPHA_TO_COVERAGE)}function re(P){S!==P&&(P?e.frontFace(e.CW):e.frontFace(e.CCW),S=P)}function j(P){P!==uc?(K(e.CULL_FACE),P!==C&&(P===rs?e.cullFace(e.BACK):P===dc?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):me(e.CULL_FACE),C=P}function Ue(P){P!==O&&(Y&&e.lineWidth(P),O=P)}function de(P,ie,ce){P?(K(e.POLYGON_OFFSET_FILL),(W!==ie||q!==ce)&&(e.polygonOffset(ie,ce),W=ie,q=ce)):me(e.POLYGON_OFFSET_FILL)}function Me(P){P?K(e.SCISSOR_TEST):me(e.SCISSOR_TEST)}function qe(P){P===void 0&&(P=e.TEXTURE0+Z-1),ve!==P&&(e.activeTexture(P),ve=P)}function ke(P,ie,ce){ce===void 0&&(ve===null?ce=e.TEXTURE0+Z-1:ce=ve);let be=Ae[ce];be===void 0&&(be={type:void 0,texture:void 0},Ae[ce]=be),(be.type!==P||be.texture!==ie)&&(ve!==ce&&(e.activeTexture(ce),ve=ce),e.bindTexture(P,ie||B[P]),be.type=P,be.texture=ie)}function x(){const P=Ae[ve];P!==void 0&&P.type!==void 0&&(e.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function d(){try{e.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function F(){try{e.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function z(){try{e.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{e.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function k(){try{e.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{e.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{e.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{e.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ge(){try{e.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{e.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(P){We.equals(P)===!1&&(e.scissor(P.x,P.y,P.z,P.w),We.copy(P))}function Ee(P){je.equals(P)===!1&&(e.viewport(P.x,P.y,P.z,P.w),je.copy(P))}function _e(P,ie){let ce=p.get(ie);ce===void 0&&(ce=new WeakMap,p.set(ie,ce));let be=ce.get(P);be===void 0&&(be=e.getUniformBlockIndex(ie,P.name),ce.set(P,be))}function ue(P,ie){const be=p.get(ie).get(P);c.get(ie)!==be&&(e.uniformBlockBinding(ie,be,P.__bindingPointIndex),c.set(ie,be))}function Fe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},ve=null,Ae={},f={},g=new WeakMap,m=[],M=null,E=!1,h=null,l=null,T=null,w=null,b=null,y=null,A=null,D=new $e(0,0,0),U=0,_=!1,S=null,C=null,O=null,W=null,q=null,We.set(0,0,e.canvas.width,e.canvas.height),je.set(0,0,e.canvas.width,e.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:K,disable:me,bindFramebuffer:De,drawBuffers:ye,useProgram:Ge,setBlending:it,setMaterial:L,setFlipSided:re,setCullFace:j,setLineWidth:Ue,setPolygonOffset:de,setScissorTest:Me,activeTexture:qe,bindTexture:ke,unbindTexture:x,compressedTexImage2D:d,compressedTexImage3D:F,texImage2D:ge,texImage3D:te,updateUBOMapping:_e,uniformBlockBinding:ue,texStorage2D:ee,texStorage3D:he,texSubImage2D:z,texSubImage3D:Q,compressedTexSubImage2D:k,compressedTexSubImage3D:xe,scissor:oe,viewport:Ee,reset:Fe}}function Tp(e,t,n,i,r,a,s){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new dt,u=new WeakMap;let f;const g=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(x,d){return m?new OffscreenCanvas(x,d):Pc("canvas")}function E(x,d,F){let z=1;const Q=ke(x);if((Q.width>F||Q.height>F)&&(z=F/Math.max(Q.width,Q.height)),z<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const k=Math.floor(z*Q.width),xe=Math.floor(z*Q.height);f===void 0&&(f=M(k,xe));const ee=d?M(k,xe):f;return ee.width=k,ee.height=xe,ee.getContext("2d").drawImage(x,0,0,k,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+k+"x"+xe+")."),ee}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),x;return x}function h(x){return x.generateMipmaps}function l(x){e.generateMipmap(x)}function T(x){return x.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?e.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function w(x,d,F,z,Q=!1){if(x!==null){if(e[x]!==void 0)return e[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let k=d;if(d===e.RED&&(F===e.FLOAT&&(k=e.R32F),F===e.HALF_FLOAT&&(k=e.R16F),F===e.UNSIGNED_BYTE&&(k=e.R8)),d===e.RED_INTEGER&&(F===e.UNSIGNED_BYTE&&(k=e.R8UI),F===e.UNSIGNED_SHORT&&(k=e.R16UI),F===e.UNSIGNED_INT&&(k=e.R32UI),F===e.BYTE&&(k=e.R8I),F===e.SHORT&&(k=e.R16I),F===e.INT&&(k=e.R32I)),d===e.RG&&(F===e.FLOAT&&(k=e.RG32F),F===e.HALF_FLOAT&&(k=e.RG16F),F===e.UNSIGNED_BYTE&&(k=e.RG8)),d===e.RG_INTEGER&&(F===e.UNSIGNED_BYTE&&(k=e.RG8UI),F===e.UNSIGNED_SHORT&&(k=e.RG16UI),F===e.UNSIGNED_INT&&(k=e.RG32UI),F===e.BYTE&&(k=e.RG8I),F===e.SHORT&&(k=e.RG16I),F===e.INT&&(k=e.RG32I)),d===e.RGB_INTEGER&&(F===e.UNSIGNED_BYTE&&(k=e.RGB8UI),F===e.UNSIGNED_SHORT&&(k=e.RGB16UI),F===e.UNSIGNED_INT&&(k=e.RGB32UI),F===e.BYTE&&(k=e.RGB8I),F===e.SHORT&&(k=e.RGB16I),F===e.INT&&(k=e.RGB32I)),d===e.RGBA_INTEGER&&(F===e.UNSIGNED_BYTE&&(k=e.RGBA8UI),F===e.UNSIGNED_SHORT&&(k=e.RGBA16UI),F===e.UNSIGNED_INT&&(k=e.RGBA32UI),F===e.BYTE&&(k=e.RGBA8I),F===e.SHORT&&(k=e.RGBA16I),F===e.INT&&(k=e.RGBA32I)),d===e.RGB&&(F===e.UNSIGNED_INT_5_9_9_9_REV&&(k=e.RGB9_E5),F===e.UNSIGNED_INT_10F_11F_11F_REV&&(k=e.R11F_G11F_B10F)),d===e.RGBA){const xe=Q?Do:vt.getTransfer(z);F===e.FLOAT&&(k=e.RGBA32F),F===e.HALF_FLOAT&&(k=e.RGBA16F),F===e.UNSIGNED_BYTE&&(k=xe===st?e.SRGB8_ALPHA8:e.RGBA8),F===e.UNSIGNED_SHORT_4_4_4_4&&(k=e.RGBA4),F===e.UNSIGNED_SHORT_5_5_5_1&&(k=e.RGB5_A1)}return(k===e.R16F||k===e.R32F||k===e.RG16F||k===e.RG32F||k===e.RGBA16F||k===e.RGBA32F)&&t.get("EXT_color_buffer_float"),k}function b(x,d){let F;return x?d===null||d===oi||d===si?F=e.DEPTH24_STENCIL8:d===Tn?F=e.DEPTH32F_STENCIL8:d===Hi&&(F=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):d===null||d===oi||d===si?F=e.DEPTH_COMPONENT24:d===Tn?F=e.DEPTH_COMPONENT32F:d===Hi&&(F=e.DEPTH_COMPONENT16),F}function y(x,d){return h(x)===!0||x.isFramebufferTexture&&x.minFilter!==Jn&&x.minFilter!==bn?Math.log2(Math.max(d.width,d.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?d.mipmaps.length:1}function A(x){const d=x.target;d.removeEventListener("dispose",A),U(d),d.isVideoTexture&&u.delete(d)}function D(x){const d=x.target;d.removeEventListener("dispose",D),S(d)}function U(x){const d=i.get(x);if(d.__webglInit===void 0)return;const F=x.source,z=g.get(F);if(z){const Q=z[d.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&_(x),Object.keys(z).length===0&&g.delete(F)}i.remove(x)}function _(x){const d=i.get(x);e.deleteTexture(d.__webglTexture);const F=x.source,z=g.get(F);delete z[d.__cacheKey],s.memory.textures--}function S(x){const d=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(d.__webglFramebuffer[z]))for(let Q=0;Q<d.__webglFramebuffer[z].length;Q++)e.deleteFramebuffer(d.__webglFramebuffer[z][Q]);else e.deleteFramebuffer(d.__webglFramebuffer[z]);d.__webglDepthbuffer&&e.deleteRenderbuffer(d.__webglDepthbuffer[z])}else{if(Array.isArray(d.__webglFramebuffer))for(let z=0;z<d.__webglFramebuffer.length;z++)e.deleteFramebuffer(d.__webglFramebuffer[z]);else e.deleteFramebuffer(d.__webglFramebuffer);if(d.__webglDepthbuffer&&e.deleteRenderbuffer(d.__webglDepthbuffer),d.__webglMultisampledFramebuffer&&e.deleteFramebuffer(d.__webglMultisampledFramebuffer),d.__webglColorRenderbuffer)for(let z=0;z<d.__webglColorRenderbuffer.length;z++)d.__webglColorRenderbuffer[z]&&e.deleteRenderbuffer(d.__webglColorRenderbuffer[z]);d.__webglDepthRenderbuffer&&e.deleteRenderbuffer(d.__webglDepthRenderbuffer)}const F=x.textures;for(let z=0,Q=F.length;z<Q;z++){const k=i.get(F[z]);k.__webglTexture&&(e.deleteTexture(k.__webglTexture),s.memory.textures--),i.remove(F[z])}i.remove(x)}let C=0;function O(){C=0}function W(){const x=C;return x>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+r.maxTextures),C+=1,x}function q(x){const d=[];return d.push(x.wrapS),d.push(x.wrapT),d.push(x.wrapR||0),d.push(x.magFilter),d.push(x.minFilter),d.push(x.anisotropy),d.push(x.internalFormat),d.push(x.format),d.push(x.type),d.push(x.generateMipmaps),d.push(x.premultiplyAlpha),d.push(x.flipY),d.push(x.unpackAlignment),d.push(x.colorSpace),d.join()}function Z(x,d){const F=i.get(x);if(x.isVideoTexture&&Me(x),x.isRenderTargetTexture===!1&&x.isExternalTexture!==!0&&x.version>0&&F.__version!==x.version){const z=x.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(F,x,d);return}}else x.isExternalTexture&&(F.__webglTexture=x.sourceTexture?x.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,F.__webglTexture,e.TEXTURE0+d)}function Y(x,d){const F=i.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&F.__version!==x.version){B(F,x,d);return}n.bindTexture(e.TEXTURE_2D_ARRAY,F.__webglTexture,e.TEXTURE0+d)}function le(x,d){const F=i.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&F.__version!==x.version){B(F,x,d);return}n.bindTexture(e.TEXTURE_3D,F.__webglTexture,e.TEXTURE0+d)}function V(x,d){const F=i.get(x);if(x.version>0&&F.__version!==x.version){K(F,x,d);return}n.bindTexture(e.TEXTURE_CUBE_MAP,F.__webglTexture,e.TEXTURE0+d)}const ve={[So]:e.REPEAT,[zl]:e.CLAMP_TO_EDGE,[Vl]:e.MIRRORED_REPEAT},Ae={[Jn]:e.NEAREST,[Wl]:e.NEAREST_MIPMAP_NEAREST,[mi]:e.NEAREST_MIPMAP_LINEAR,[bn]:e.LINEAR,[ar]:e.LINEAR_MIPMAP_NEAREST,[xn]:e.LINEAR_MIPMAP_LINEAR},Re={[jl]:e.NEVER,[Zl]:e.ALWAYS,[$l]:e.LESS,[Mo]:e.LEQUAL,[Kl]:e.EQUAL,[Yl]:e.GEQUAL,[ql]:e.GREATER,[Xl]:e.NOTEQUAL};function Ve(x,d){if(d.type===Tn&&t.has("OES_texture_float_linear")===!1&&(d.magFilter===bn||d.magFilter===ar||d.magFilter===mi||d.magFilter===xn||d.minFilter===bn||d.minFilter===ar||d.minFilter===mi||d.minFilter===xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(x,e.TEXTURE_WRAP_S,ve[d.wrapS]),e.texParameteri(x,e.TEXTURE_WRAP_T,ve[d.wrapT]),(x===e.TEXTURE_3D||x===e.TEXTURE_2D_ARRAY)&&e.texParameteri(x,e.TEXTURE_WRAP_R,ve[d.wrapR]),e.texParameteri(x,e.TEXTURE_MAG_FILTER,Ae[d.magFilter]),e.texParameteri(x,e.TEXTURE_MIN_FILTER,Ae[d.minFilter]),d.compareFunction&&(e.texParameteri(x,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(x,e.TEXTURE_COMPARE_FUNC,Re[d.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(d.magFilter===Jn||d.minFilter!==mi&&d.minFilter!==xn||d.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(d.anisotropy>1||i.get(d).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");e.texParameterf(x,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(d.anisotropy,r.getMaxAnisotropy())),i.get(d).__currentAnisotropy=d.anisotropy}}}function We(x,d){let F=!1;x.__webglInit===void 0&&(x.__webglInit=!0,d.addEventListener("dispose",A));const z=d.source;let Q=g.get(z);Q===void 0&&(Q={},g.set(z,Q));const k=q(d);if(k!==x.__cacheKey){Q[k]===void 0&&(Q[k]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,F=!0),Q[k].usedTimes++;const xe=Q[x.__cacheKey];xe!==void 0&&(Q[x.__cacheKey].usedTimes--,xe.usedTimes===0&&_(d)),x.__cacheKey=k,x.__webglTexture=Q[k].texture}return F}function je(x,d,F){return Math.floor(Math.floor(x/F)/d)}function Xe(x,d,F,z){const k=x.updateRanges;if(k.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,d.width,d.height,F,z,d.data);else{k.sort((te,oe)=>te.start-oe.start);let xe=0;for(let te=1;te<k.length;te++){const oe=k[xe],Ee=k[te],_e=oe.start+oe.count,ue=je(Ee.start,d.width,4),Fe=je(oe.start,d.width,4);Ee.start<=_e+1&&ue===Fe&&je(Ee.start+Ee.count-1,d.width,4)===ue?oe.count=Math.max(oe.count,Ee.start+Ee.count-oe.start):(++xe,k[xe]=Ee)}k.length=xe+1;const ee=e.getParameter(e.UNPACK_ROW_LENGTH),he=e.getParameter(e.UNPACK_SKIP_PIXELS),ge=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,d.width);for(let te=0,oe=k.length;te<oe;te++){const Ee=k[te],_e=Math.floor(Ee.start/4),ue=Math.ceil(Ee.count/4),Fe=_e%d.width,P=Math.floor(_e/d.width),ie=ue,ce=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Fe),e.pixelStorei(e.UNPACK_SKIP_ROWS,P),n.texSubImage2D(e.TEXTURE_2D,0,Fe,P,ie,ce,F,z,d.data)}x.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ee),e.pixelStorei(e.UNPACK_SKIP_PIXELS,he),e.pixelStorei(e.UNPACK_SKIP_ROWS,ge)}}function B(x,d,F){let z=e.TEXTURE_2D;(d.isDataArrayTexture||d.isCompressedArrayTexture)&&(z=e.TEXTURE_2D_ARRAY),d.isData3DTexture&&(z=e.TEXTURE_3D);const Q=We(x,d),k=d.source;n.bindTexture(z,x.__webglTexture,e.TEXTURE0+F);const xe=i.get(k);if(k.version!==xe.__version||Q===!0){n.activeTexture(e.TEXTURE0+F);const ee=vt.getPrimaries(vt.workingColorSpace),he=d.colorSpace===In?null:vt.getPrimaries(d.colorSpace),ge=d.colorSpace===In||ee===he?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,d.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,d.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,d.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let te=E(d.image,!1,r.maxTextureSize);te=qe(d,te);const oe=a.convert(d.format,d.colorSpace),Ee=a.convert(d.type);let _e=w(d.internalFormat,oe,Ee,d.colorSpace,d.isVideoTexture);Ve(z,d);let ue;const Fe=d.mipmaps,P=d.isVideoTexture!==!0,ie=xe.__version===void 0||Q===!0,ce=k.dataReady,be=y(d,te);if(d.isDepthTexture)_e=b(d.format===ki,d.type),ie&&(P?n.texStorage2D(e.TEXTURE_2D,1,_e,te.width,te.height):n.texImage2D(e.TEXTURE_2D,0,_e,te.width,te.height,0,oe,Ee,null));else if(d.isDataTexture)if(Fe.length>0){P&&ie&&n.texStorage2D(e.TEXTURE_2D,be,_e,Fe[0].width,Fe[0].height);for(let ae=0,J=Fe.length;ae<J;ae++)ue=Fe[ae],P?ce&&n.texSubImage2D(e.TEXTURE_2D,ae,0,0,ue.width,ue.height,oe,Ee,ue.data):n.texImage2D(e.TEXTURE_2D,ae,_e,ue.width,ue.height,0,oe,Ee,ue.data);d.generateMipmaps=!1}else P?(ie&&n.texStorage2D(e.TEXTURE_2D,be,_e,te.width,te.height),ce&&Xe(d,te,oe,Ee)):n.texImage2D(e.TEXTURE_2D,0,_e,te.width,te.height,0,oe,Ee,te.data);else if(d.isCompressedTexture)if(d.isCompressedArrayTexture){P&&ie&&n.texStorage3D(e.TEXTURE_2D_ARRAY,be,_e,Fe[0].width,Fe[0].height,te.depth);for(let ae=0,J=Fe.length;ae<J;ae++)if(ue=Fe[ae],d.format!==Xt)if(oe!==null)if(P){if(ce)if(d.layerUpdates.size>0){const we=cs(ue.width,ue.height,d.format,d.type);for(const Oe of d.layerUpdates){const rt=ue.data.subarray(Oe*we/ue.data.BYTES_PER_ELEMENT,(Oe+1)*we/ue.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ae,0,0,Oe,ue.width,ue.height,1,oe,rt)}d.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ae,0,0,0,ue.width,ue.height,te.depth,oe,ue.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,ae,_e,ue.width,ue.height,te.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?ce&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,ae,0,0,0,ue.width,ue.height,te.depth,oe,Ee,ue.data):n.texImage3D(e.TEXTURE_2D_ARRAY,ae,_e,ue.width,ue.height,te.depth,0,oe,Ee,ue.data)}else{P&&ie&&n.texStorage2D(e.TEXTURE_2D,be,_e,Fe[0].width,Fe[0].height);for(let ae=0,J=Fe.length;ae<J;ae++)ue=Fe[ae],d.format!==Xt?oe!==null?P?ce&&n.compressedTexSubImage2D(e.TEXTURE_2D,ae,0,0,ue.width,ue.height,oe,ue.data):n.compressedTexImage2D(e.TEXTURE_2D,ae,_e,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?ce&&n.texSubImage2D(e.TEXTURE_2D,ae,0,0,ue.width,ue.height,oe,Ee,ue.data):n.texImage2D(e.TEXTURE_2D,ae,_e,ue.width,ue.height,0,oe,Ee,ue.data)}else if(d.isDataArrayTexture)if(P){if(ie&&n.texStorage3D(e.TEXTURE_2D_ARRAY,be,_e,te.width,te.height,te.depth),ce)if(d.layerUpdates.size>0){const ae=cs(te.width,te.height,d.format,d.type);for(const J of d.layerUpdates){const we=te.data.subarray(J*ae/te.data.BYTES_PER_ELEMENT,(J+1)*ae/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,J,te.width,te.height,1,oe,Ee,we)}d.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,oe,Ee,te.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,_e,te.width,te.height,te.depth,0,oe,Ee,te.data);else if(d.isData3DTexture)P?(ie&&n.texStorage3D(e.TEXTURE_3D,be,_e,te.width,te.height,te.depth),ce&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,oe,Ee,te.data)):n.texImage3D(e.TEXTURE_3D,0,_e,te.width,te.height,te.depth,0,oe,Ee,te.data);else if(d.isFramebufferTexture){if(ie)if(P)n.texStorage2D(e.TEXTURE_2D,be,_e,te.width,te.height);else{let ae=te.width,J=te.height;for(let we=0;we<be;we++)n.texImage2D(e.TEXTURE_2D,we,_e,ae,J,0,oe,Ee,null),ae>>=1,J>>=1}}else if(Fe.length>0){if(P&&ie){const ae=ke(Fe[0]);n.texStorage2D(e.TEXTURE_2D,be,_e,ae.width,ae.height)}for(let ae=0,J=Fe.length;ae<J;ae++)ue=Fe[ae],P?ce&&n.texSubImage2D(e.TEXTURE_2D,ae,0,0,oe,Ee,ue):n.texImage2D(e.TEXTURE_2D,ae,_e,oe,Ee,ue);d.generateMipmaps=!1}else if(P){if(ie){const ae=ke(te);n.texStorage2D(e.TEXTURE_2D,be,_e,ae.width,ae.height)}ce&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,oe,Ee,te)}else n.texImage2D(e.TEXTURE_2D,0,_e,oe,Ee,te);h(d)&&l(z),xe.__version=k.version,d.onUpdate&&d.onUpdate(d)}x.__version=d.version}function K(x,d,F){if(d.image.length!==6)return;const z=We(x,d),Q=d.source;n.bindTexture(e.TEXTURE_CUBE_MAP,x.__webglTexture,e.TEXTURE0+F);const k=i.get(Q);if(Q.version!==k.__version||z===!0){n.activeTexture(e.TEXTURE0+F);const xe=vt.getPrimaries(vt.workingColorSpace),ee=d.colorSpace===In?null:vt.getPrimaries(d.colorSpace),he=d.colorSpace===In||xe===ee?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,d.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,d.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,d.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const ge=d.isCompressedTexture||d.image[0].isCompressedTexture,te=d.image[0]&&d.image[0].isDataTexture,oe=[];for(let J=0;J<6;J++)!ge&&!te?oe[J]=E(d.image[J],!0,r.maxCubemapSize):oe[J]=te?d.image[J].image:d.image[J],oe[J]=qe(d,oe[J]);const Ee=oe[0],_e=a.convert(d.format,d.colorSpace),ue=a.convert(d.type),Fe=w(d.internalFormat,_e,ue,d.colorSpace),P=d.isVideoTexture!==!0,ie=k.__version===void 0||z===!0,ce=Q.dataReady;let be=y(d,Ee);Ve(e.TEXTURE_CUBE_MAP,d);let ae;if(ge){P&&ie&&n.texStorage2D(e.TEXTURE_CUBE_MAP,be,Fe,Ee.width,Ee.height);for(let J=0;J<6;J++){ae=oe[J].mipmaps;for(let we=0;we<ae.length;we++){const Oe=ae[we];d.format!==Xt?_e!==null?P?ce&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,we,0,0,Oe.width,Oe.height,_e,Oe.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,we,Fe,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?ce&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,we,0,0,Oe.width,Oe.height,_e,ue,Oe.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,we,Fe,Oe.width,Oe.height,0,_e,ue,Oe.data)}}}else{if(ae=d.mipmaps,P&&ie){ae.length>0&&be++;const J=ke(oe[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,be,Fe,J.width,J.height)}for(let J=0;J<6;J++)if(te){P?ce&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,oe[J].width,oe[J].height,_e,ue,oe[J].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Fe,oe[J].width,oe[J].height,0,_e,ue,oe[J].data);for(let we=0;we<ae.length;we++){const rt=ae[we].image[J].image;P?ce&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,we+1,0,0,rt.width,rt.height,_e,ue,rt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,we+1,Fe,rt.width,rt.height,0,_e,ue,rt.data)}}else{P?ce&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,_e,ue,oe[J]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Fe,_e,ue,oe[J]);for(let we=0;we<ae.length;we++){const Oe=ae[we];P?ce&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,we+1,0,0,_e,ue,Oe.image[J]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,we+1,Fe,_e,ue,Oe.image[J])}}}h(d)&&l(e.TEXTURE_CUBE_MAP),k.__version=Q.version,d.onUpdate&&d.onUpdate(d)}x.__version=d.version}function me(x,d,F,z,Q,k){const xe=a.convert(F.format,F.colorSpace),ee=a.convert(F.type),he=w(F.internalFormat,xe,ee,F.colorSpace),ge=i.get(d),te=i.get(F);if(te.__renderTarget=d,!ge.__hasExternalTextures){const oe=Math.max(1,d.width>>k),Ee=Math.max(1,d.height>>k);Q===e.TEXTURE_3D||Q===e.TEXTURE_2D_ARRAY?n.texImage3D(Q,k,he,oe,Ee,d.depth,0,xe,ee,null):n.texImage2D(Q,k,he,oe,Ee,0,xe,ee,null)}n.bindFramebuffer(e.FRAMEBUFFER,x),de(d)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,z,Q,te.__webglTexture,0,Ue(d)):(Q===e.TEXTURE_2D||Q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,z,Q,te.__webglTexture,k),n.bindFramebuffer(e.FRAMEBUFFER,null)}function De(x,d,F){if(e.bindRenderbuffer(e.RENDERBUFFER,x),d.depthBuffer){const z=d.depthTexture,Q=z&&z.isDepthTexture?z.type:null,k=b(d.stencilBuffer,Q),xe=d.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ee=Ue(d);de(d)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ee,k,d.width,d.height):F?e.renderbufferStorageMultisample(e.RENDERBUFFER,ee,k,d.width,d.height):e.renderbufferStorage(e.RENDERBUFFER,k,d.width,d.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,xe,e.RENDERBUFFER,x)}else{const z=d.textures;for(let Q=0;Q<z.length;Q++){const k=z[Q],xe=a.convert(k.format,k.colorSpace),ee=a.convert(k.type),he=w(k.internalFormat,xe,ee,k.colorSpace),ge=Ue(d);F&&de(d)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,ge,he,d.width,d.height):de(d)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ge,he,d.width,d.height):e.renderbufferStorage(e.RENDERBUFFER,he,d.width,d.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ye(x,d){if(d&&d.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,x),!(d.depthTexture&&d.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const z=i.get(d.depthTexture);z.__renderTarget=d,(!z.__webglTexture||d.depthTexture.image.width!==d.width||d.depthTexture.image.height!==d.height)&&(d.depthTexture.image.width=d.width,d.depthTexture.image.height=d.height,d.depthTexture.needsUpdate=!0),Z(d.depthTexture,0);const Q=z.__webglTexture,k=Ue(d);if(d.depthTexture.format===oa)de(d)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Q,0,k):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Q,0);else if(d.depthTexture.format===ki)de(d)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Q,0,k):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ge(x){const d=i.get(x),F=x.isWebGLCubeRenderTarget===!0;if(d.__boundDepthTexture!==x.depthTexture){const z=x.depthTexture;if(d.__depthDisposeCallback&&d.__depthDisposeCallback(),z){const Q=()=>{delete d.__boundDepthTexture,delete d.__depthDisposeCallback,z.removeEventListener("dispose",Q)};z.addEventListener("dispose",Q),d.__depthDisposeCallback=Q}d.__boundDepthTexture=z}if(x.depthTexture&&!d.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const z=x.texture.mipmaps;z&&z.length>0?ye(d.__webglFramebuffer[0],x):ye(d.__webglFramebuffer,x)}else if(F){d.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(n.bindFramebuffer(e.FRAMEBUFFER,d.__webglFramebuffer[z]),d.__webglDepthbuffer[z]===void 0)d.__webglDepthbuffer[z]=e.createRenderbuffer(),De(d.__webglDepthbuffer[z],x,!1);else{const Q=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,k=d.__webglDepthbuffer[z];e.bindRenderbuffer(e.RENDERBUFFER,k),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,k)}}else{const z=x.texture.mipmaps;if(z&&z.length>0?n.bindFramebuffer(e.FRAMEBUFFER,d.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,d.__webglFramebuffer),d.__webglDepthbuffer===void 0)d.__webglDepthbuffer=e.createRenderbuffer(),De(d.__webglDepthbuffer,x,!1);else{const Q=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,k=d.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,k),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,k)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ft(x,d,F){const z=i.get(x);d!==void 0&&me(z.__webglFramebuffer,x,x.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),F!==void 0&&Ge(x)}function R(x){const d=x.texture,F=i.get(x),z=i.get(d);x.addEventListener("dispose",D);const Q=x.textures,k=x.isWebGLCubeRenderTarget===!0,xe=Q.length>1;if(xe||(z.__webglTexture===void 0&&(z.__webglTexture=e.createTexture()),z.__version=d.version,s.memory.textures++),k){F.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(d.mipmaps&&d.mipmaps.length>0){F.__webglFramebuffer[ee]=[];for(let he=0;he<d.mipmaps.length;he++)F.__webglFramebuffer[ee][he]=e.createFramebuffer()}else F.__webglFramebuffer[ee]=e.createFramebuffer()}else{if(d.mipmaps&&d.mipmaps.length>0){F.__webglFramebuffer=[];for(let ee=0;ee<d.mipmaps.length;ee++)F.__webglFramebuffer[ee]=e.createFramebuffer()}else F.__webglFramebuffer=e.createFramebuffer();if(xe)for(let ee=0,he=Q.length;ee<he;ee++){const ge=i.get(Q[ee]);ge.__webglTexture===void 0&&(ge.__webglTexture=e.createTexture(),s.memory.textures++)}if(x.samples>0&&de(x)===!1){F.__webglMultisampledFramebuffer=e.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ee=0;ee<Q.length;ee++){const he=Q[ee];F.__webglColorRenderbuffer[ee]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,F.__webglColorRenderbuffer[ee]);const ge=a.convert(he.format,he.colorSpace),te=a.convert(he.type),oe=w(he.internalFormat,ge,te,he.colorSpace,x.isXRRenderTarget===!0),Ee=Ue(x);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ee,oe,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ee,e.RENDERBUFFER,F.__webglColorRenderbuffer[ee])}e.bindRenderbuffer(e.RENDERBUFFER,null),x.depthBuffer&&(F.__webglDepthRenderbuffer=e.createRenderbuffer(),De(F.__webglDepthRenderbuffer,x,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(k){n.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture),Ve(e.TEXTURE_CUBE_MAP,d);for(let ee=0;ee<6;ee++)if(d.mipmaps&&d.mipmaps.length>0)for(let he=0;he<d.mipmaps.length;he++)me(F.__webglFramebuffer[ee][he],x,d,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he);else me(F.__webglFramebuffer[ee],x,d,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);h(d)&&l(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(xe){for(let ee=0,he=Q.length;ee<he;ee++){const ge=Q[ee],te=i.get(ge);let oe=e.TEXTURE_2D;(x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(oe=x.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(oe,te.__webglTexture),Ve(oe,ge),me(F.__webglFramebuffer,x,ge,e.COLOR_ATTACHMENT0+ee,oe,0),h(ge)&&l(oe)}n.unbindTexture()}else{let ee=e.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(ee=x.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ee,z.__webglTexture),Ve(ee,d),d.mipmaps&&d.mipmaps.length>0)for(let he=0;he<d.mipmaps.length;he++)me(F.__webglFramebuffer[he],x,d,e.COLOR_ATTACHMENT0,ee,he);else me(F.__webglFramebuffer,x,d,e.COLOR_ATTACHMENT0,ee,0);h(d)&&l(ee),n.unbindTexture()}x.depthBuffer&&Ge(x)}function it(x){const d=x.textures;for(let F=0,z=d.length;F<z;F++){const Q=d[F];if(h(Q)){const k=T(x),xe=i.get(Q).__webglTexture;n.bindTexture(k,xe),l(k),n.unbindTexture()}}}const L=[],re=[];function j(x){if(x.samples>0){if(de(x)===!1){const d=x.textures,F=x.width,z=x.height;let Q=e.COLOR_BUFFER_BIT;const k=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,xe=i.get(x),ee=d.length>1;if(ee)for(let ge=0;ge<d.length;ge++)n.bindFramebuffer(e.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ge,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,xe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ge,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const he=x.texture.mipmaps;he&&he.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ge=0;ge<d.length;ge++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(Q|=e.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(Q|=e.STENCIL_BUFFER_BIT)),ee){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,xe.__webglColorRenderbuffer[ge]);const te=i.get(d[ge]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,te,0)}e.blitFramebuffer(0,0,F,z,0,0,F,z,Q,e.NEAREST),c===!0&&(L.length=0,re.length=0,L.push(e.COLOR_ATTACHMENT0+ge),x.depthBuffer&&x.resolveDepthBuffer===!1&&(L.push(k),re.push(k),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,re)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,L))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ee)for(let ge=0;ge<d.length;ge++){n.bindFramebuffer(e.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ge,e.RENDERBUFFER,xe.__webglColorRenderbuffer[ge]);const te=i.get(d[ge]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,xe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ge,e.TEXTURE_2D,te,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&c){const d=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[d])}}}function Ue(x){return Math.min(r.maxSamples,x.samples)}function de(x){const d=i.get(x);return x.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&d.__useRenderToTexture!==!1}function Me(x){const d=s.render.frame;u.get(x)!==d&&(u.set(x,d),x.update())}function qe(x,d){const F=x.colorSpace,z=x.format,Q=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||F!==qi&&F!==In&&(vt.getTransfer(F)===st?(z!==Xt||Q!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),d}function ke(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(p.width=x.naturalWidth||x.width,p.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(p.width=x.displayWidth,p.height=x.displayHeight):(p.width=x.width,p.height=x.height),p}this.allocateTextureUnit=W,this.resetTextureUnits=O,this.setTexture2D=Z,this.setTexture2DArray=Y,this.setTexture3D=le,this.setTextureCube=V,this.rebindTextures=ft,this.setupRenderTarget=R,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=me,this.useMultisampledRTT=de}function wp(e,t){function n(i,r=In){let a;const s=vt.getTransfer(r);if(i===Pn)return e.UNSIGNED_BYTE;if(i===xo)return e.UNSIGNED_SHORT_4_4_4_4;if(i===bo)return e.UNSIGNED_SHORT_5_5_5_1;if(i===nc)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===ic)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===rc)return e.BYTE;if(i===ac)return e.SHORT;if(i===Hi)return e.UNSIGNED_SHORT;if(i===Ao)return e.INT;if(i===oi)return e.UNSIGNED_INT;if(i===Tn)return e.FLOAT;if(i===Xi)return e.HALF_FLOAT;if(i===sc)return e.ALPHA;if(i===oc)return e.RGB;if(i===Xt)return e.RGBA;if(i===oa)return e.DEPTH_COMPONENT;if(i===ki)return e.DEPTH_STENCIL;if(i===lc)return e.RED;if(i===Ro)return e.RED_INTEGER;if(i===cc)return e.RG;if(i===yo)return e.RG_INTEGER;if(i===Co)return e.RGBA_INTEGER;if(i===sr||i===or||i===lr||i===cr)if(s===st)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===sr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===or)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===lr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===cr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===sr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===or)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===lr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===cr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Pa||i===La||i===Da||i===Ua)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Pa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===La)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Da)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ua)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ia||i===Na||i===Fa)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Ia||i===Na)return s===st?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Fa)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Oa||i===Ba||i===ka||i===Ga||i===Ha||i===Va||i===za||i===Wa||i===Xa||i===qa||i===Ya||i===Ka||i===$a||i===Za)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Oa)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ba)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ka)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ga)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ha)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Va)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===za)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wa)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xa)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qa)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ya)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ka)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$a)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Za)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ja||i===Qa||i===Ja)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===ja)return s===st?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qa)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ja)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===es||i===ts||i===ns||i===is)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===es)return a.COMPRESSED_RED_RGTC1_EXT;if(i===ts)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ns)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===is)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===si?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const Ap=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rp=`
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

}`;class yp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const i=new To(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new nn({vertexShader:Ap,fragmentShader:Rp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ut(new wo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cp extends xl{constructor(t,n){super();const i=this;let r=null,a=1,s=null,o="local-floor",c=1,p=null,u=null,f=null,g=null,m=null,M=null;const E=typeof XRWebGLBinding<"u",h=new yp,l={},T=n.getContextAttributes();let w=null,b=null;const y=[],A=[],D=new dt;let U=null;const _=new Qn;_.viewport=new At;const S=new Qn;S.viewport=new At;const C=[_,S],O=new bl;let W=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let K=y[B];return K===void 0&&(K=new rr,y[B]=K),K.getTargetRaySpace()},this.getControllerGrip=function(B){let K=y[B];return K===void 0&&(K=new rr,y[B]=K),K.getGripSpace()},this.getHand=function(B){let K=y[B];return K===void 0&&(K=new rr,y[B]=K),K.getHandSpace()};function Z(B){const K=A.indexOf(B.inputSource);if(K===-1)return;const me=y[K];me!==void 0&&(me.update(B.inputSource,B.frame,p||s),me.dispatchEvent({type:B.type,data:B.inputSource}))}function Y(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",le);for(let B=0;B<y.length;B++){const K=A[B];K!==null&&(A[B]=null,y[B].disconnect(K))}W=null,q=null,h.reset();for(const B in l)delete l[B];t.setRenderTarget(w),m=null,g=null,f=null,r=null,b=null,Xe.stop(),i.isPresenting=!1,t.setPixelRatio(U),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||s},this.setReferenceSpace=function(B){p=B},this.getBaseLayer=function(){return g!==null?g:m},this.getBinding=function(){return f===null&&E&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(w=t.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",le),T.xrCompatible!==!0&&await n.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(D),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,De=null,ye=null;T.depth&&(ye=T.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,me=T.stencil?ki:oa,De=T.stencil?si:oi);const Ge={colorFormat:n.RGBA8,depthFormat:ye,scaleFactor:a};f=this.getBinding(),g=f.createProjectionLayer(Ge),r.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),b=new Bn(g.textureWidth,g.textureHeight,{format:Xt,type:Pn,depthTexture:new _o(g.textureWidth,g.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const me={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,n,me),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Bn(m.framebufferWidth,m.framebufferHeight,{format:Xt,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),p=null,s=await r.requestReferenceSpace(o),Xe.setContext(r),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function le(B){for(let K=0;K<B.removed.length;K++){const me=B.removed[K],De=A.indexOf(me);De>=0&&(A[De]=null,y[De].disconnect(me))}for(let K=0;K<B.added.length;K++){const me=B.added[K];let De=A.indexOf(me);if(De===-1){for(let Ge=0;Ge<y.length;Ge++)if(Ge>=A.length){A.push(me),De=Ge;break}else if(A[Ge]===null){A[Ge]=me,De=Ge;break}if(De===-1)break}const ye=y[De];ye&&ye.connect(me)}}const V=new ne,ve=new ne;function Ae(B,K,me){V.setFromMatrixPosition(K.matrixWorld),ve.setFromMatrixPosition(me.matrixWorld);const De=V.distanceTo(ve),ye=K.projectionMatrix.elements,Ge=me.projectionMatrix.elements,ft=ye[14]/(ye[10]-1),R=ye[14]/(ye[10]+1),it=(ye[9]+1)/ye[5],L=(ye[9]-1)/ye[5],re=(ye[8]-1)/ye[0],j=(Ge[8]+1)/Ge[0],Ue=ft*re,de=ft*j,Me=De/(-re+j),qe=Me*-re;if(K.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(qe),B.translateZ(Me),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),ye[10]===-1)B.projectionMatrix.copy(K.projectionMatrix),B.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const ke=ft+Me,x=R+Me,d=Ue-qe,F=de+(De-qe),z=it*R/x*ke,Q=L*R/x*ke;B.projectionMatrix.makePerspective(d,F,z,Q,ke,x),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function Re(B,K){K===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(K.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;let K=B.near,me=B.far;h.texture!==null&&(h.depthNear>0&&(K=h.depthNear),h.depthFar>0&&(me=h.depthFar)),O.near=S.near=_.near=K,O.far=S.far=_.far=me,(W!==O.near||q!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),W=O.near,q=O.far),O.layers.mask=B.layers.mask|6,_.layers.mask=O.layers.mask&3,S.layers.mask=O.layers.mask&5;const De=B.parent,ye=O.cameras;Re(O,De);for(let Ge=0;Ge<ye.length;Ge++)Re(ye[Ge],De);ye.length===2?Ae(O,_,S):O.projectionMatrix.copy(_.projectionMatrix),Ve(B,O,De)};function Ve(B,K,me){me===null?B.matrix.copy(K.matrixWorld):(B.matrix.copy(me.matrixWorld),B.matrix.invert(),B.matrix.multiply(K.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(K.projectionMatrix),B.projectionMatrixInverse.copy(K.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Tl*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(g===null&&m===null))return c},this.setFoveation=function(B){c=B,g!==null&&(g.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(B){return l[B]};let We=null;function je(B,K){if(u=K.getViewerPose(p||s),M=K,u!==null){const me=u.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let De=!1;me.length!==O.cameras.length&&(O.cameras.length=0,De=!0);for(let R=0;R<me.length;R++){const it=me[R];let L=null;if(m!==null)L=m.getViewport(it);else{const j=f.getViewSubImage(g,it);L=j.viewport,R===0&&(t.setRenderTargetTextures(b,j.colorTexture,j.depthStencilTexture),t.setRenderTarget(b))}let re=C[R];re===void 0&&(re=new Qn,re.layers.enable(R),re.viewport=new At,C[R]=re),re.matrix.fromArray(it.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(it.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(L.x,L.y,L.width,L.height),R===0&&(O.matrix.copy(re.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),De===!0&&O.cameras.push(re)}const ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){f=i.getBinding();const R=f.getDepthInformation(me[0]);R&&R.isValid&&R.texture&&h.init(R,r.renderState)}if(ye&&ye.includes("camera-access")&&E){t.state.unbindTexture(),f=i.getBinding();for(let R=0;R<me.length;R++){const it=me[R].camera;if(it){let L=l[it];L||(L=new To,l[it]=L);const re=f.getCameraImage(it);L.sourceTexture=re}}}}for(let me=0;me<y.length;me++){const De=A[me],ye=y[me];De!==null&&ye!==void 0&&ye.update(De,K,p||s)}We&&We(B,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),M=null}const Xe=new Bo;Xe.setAnimationLoop(je),this.setAnimationLoop=function(B){We=B},this.dispose=function(){}}}const _n=new Wt,Pp=new Nt;function Lp(e,t){function n(h,l){h.matrixAutoUpdate===!0&&h.updateMatrix(),l.value.copy(h.matrix)}function i(h,l){l.color.getRGB(h.fogColor.value,Lo(e)),l.isFog?(h.fogNear.value=l.near,h.fogFar.value=l.far):l.isFogExp2&&(h.fogDensity.value=l.density)}function r(h,l,T,w,b){l.isMeshBasicMaterial||l.isMeshLambertMaterial?a(h,l):l.isMeshToonMaterial?(a(h,l),f(h,l)):l.isMeshPhongMaterial?(a(h,l),u(h,l)):l.isMeshStandardMaterial?(a(h,l),g(h,l),l.isMeshPhysicalMaterial&&m(h,l,b)):l.isMeshMatcapMaterial?(a(h,l),M(h,l)):l.isMeshDepthMaterial?a(h,l):l.isMeshDistanceMaterial?(a(h,l),E(h,l)):l.isMeshNormalMaterial?a(h,l):l.isLineBasicMaterial?(s(h,l),l.isLineDashedMaterial&&o(h,l)):l.isPointsMaterial?c(h,l,T,w):l.isSpriteMaterial?p(h,l):l.isShadowMaterial?(h.color.value.copy(l.color),h.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}function a(h,l){h.opacity.value=l.opacity,l.color&&h.diffuse.value.copy(l.color),l.emissive&&h.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(h.map.value=l.map,n(l.map,h.mapTransform)),l.alphaMap&&(h.alphaMap.value=l.alphaMap,n(l.alphaMap,h.alphaMapTransform)),l.bumpMap&&(h.bumpMap.value=l.bumpMap,n(l.bumpMap,h.bumpMapTransform),h.bumpScale.value=l.bumpScale,l.side===Ct&&(h.bumpScale.value*=-1)),l.normalMap&&(h.normalMap.value=l.normalMap,n(l.normalMap,h.normalMapTransform),h.normalScale.value.copy(l.normalScale),l.side===Ct&&h.normalScale.value.negate()),l.displacementMap&&(h.displacementMap.value=l.displacementMap,n(l.displacementMap,h.displacementMapTransform),h.displacementScale.value=l.displacementScale,h.displacementBias.value=l.displacementBias),l.emissiveMap&&(h.emissiveMap.value=l.emissiveMap,n(l.emissiveMap,h.emissiveMapTransform)),l.specularMap&&(h.specularMap.value=l.specularMap,n(l.specularMap,h.specularMapTransform)),l.alphaTest>0&&(h.alphaTest.value=l.alphaTest);const T=t.get(l),w=T.envMap,b=T.envMapRotation;w&&(h.envMap.value=w,_n.copy(b),_n.x*=-1,_n.y*=-1,_n.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(_n.y*=-1,_n.z*=-1),h.envMapRotation.value.setFromMatrix4(Pp.makeRotationFromEuler(_n)),h.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=l.reflectivity,h.ior.value=l.ior,h.refractionRatio.value=l.refractionRatio),l.lightMap&&(h.lightMap.value=l.lightMap,h.lightMapIntensity.value=l.lightMapIntensity,n(l.lightMap,h.lightMapTransform)),l.aoMap&&(h.aoMap.value=l.aoMap,h.aoMapIntensity.value=l.aoMapIntensity,n(l.aoMap,h.aoMapTransform))}function s(h,l){h.diffuse.value.copy(l.color),h.opacity.value=l.opacity,l.map&&(h.map.value=l.map,n(l.map,h.mapTransform))}function o(h,l){h.dashSize.value=l.dashSize,h.totalSize.value=l.dashSize+l.gapSize,h.scale.value=l.scale}function c(h,l,T,w){h.diffuse.value.copy(l.color),h.opacity.value=l.opacity,h.size.value=l.size*T,h.scale.value=w*.5,l.map&&(h.map.value=l.map,n(l.map,h.uvTransform)),l.alphaMap&&(h.alphaMap.value=l.alphaMap,n(l.alphaMap,h.alphaMapTransform)),l.alphaTest>0&&(h.alphaTest.value=l.alphaTest)}function p(h,l){h.diffuse.value.copy(l.color),h.opacity.value=l.opacity,h.rotation.value=l.rotation,l.map&&(h.map.value=l.map,n(l.map,h.mapTransform)),l.alphaMap&&(h.alphaMap.value=l.alphaMap,n(l.alphaMap,h.alphaMapTransform)),l.alphaTest>0&&(h.alphaTest.value=l.alphaTest)}function u(h,l){h.specular.value.copy(l.specular),h.shininess.value=Math.max(l.shininess,1e-4)}function f(h,l){l.gradientMap&&(h.gradientMap.value=l.gradientMap)}function g(h,l){h.metalness.value=l.metalness,l.metalnessMap&&(h.metalnessMap.value=l.metalnessMap,n(l.metalnessMap,h.metalnessMapTransform)),h.roughness.value=l.roughness,l.roughnessMap&&(h.roughnessMap.value=l.roughnessMap,n(l.roughnessMap,h.roughnessMapTransform)),l.envMap&&(h.envMapIntensity.value=l.envMapIntensity)}function m(h,l,T){h.ior.value=l.ior,l.sheen>0&&(h.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),h.sheenRoughness.value=l.sheenRoughness,l.sheenColorMap&&(h.sheenColorMap.value=l.sheenColorMap,n(l.sheenColorMap,h.sheenColorMapTransform)),l.sheenRoughnessMap&&(h.sheenRoughnessMap.value=l.sheenRoughnessMap,n(l.sheenRoughnessMap,h.sheenRoughnessMapTransform))),l.clearcoat>0&&(h.clearcoat.value=l.clearcoat,h.clearcoatRoughness.value=l.clearcoatRoughness,l.clearcoatMap&&(h.clearcoatMap.value=l.clearcoatMap,n(l.clearcoatMap,h.clearcoatMapTransform)),l.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap,n(l.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),l.clearcoatNormalMap&&(h.clearcoatNormalMap.value=l.clearcoatNormalMap,n(l.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),l.side===Ct&&h.clearcoatNormalScale.value.negate())),l.dispersion>0&&(h.dispersion.value=l.dispersion),l.iridescence>0&&(h.iridescence.value=l.iridescence,h.iridescenceIOR.value=l.iridescenceIOR,h.iridescenceThicknessMinimum.value=l.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=l.iridescenceThicknessRange[1],l.iridescenceMap&&(h.iridescenceMap.value=l.iridescenceMap,n(l.iridescenceMap,h.iridescenceMapTransform)),l.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=l.iridescenceThicknessMap,n(l.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),l.transmission>0&&(h.transmission.value=l.transmission,h.transmissionSamplerMap.value=T.texture,h.transmissionSamplerSize.value.set(T.width,T.height),l.transmissionMap&&(h.transmissionMap.value=l.transmissionMap,n(l.transmissionMap,h.transmissionMapTransform)),h.thickness.value=l.thickness,l.thicknessMap&&(h.thicknessMap.value=l.thicknessMap,n(l.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=l.attenuationDistance,h.attenuationColor.value.copy(l.attenuationColor)),l.anisotropy>0&&(h.anisotropyVector.value.set(l.anisotropy*Math.cos(l.anisotropyRotation),l.anisotropy*Math.sin(l.anisotropyRotation)),l.anisotropyMap&&(h.anisotropyMap.value=l.anisotropyMap,n(l.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=l.specularIntensity,h.specularColor.value.copy(l.specularColor),l.specularColorMap&&(h.specularColorMap.value=l.specularColorMap,n(l.specularColorMap,h.specularColorMapTransform)),l.specularIntensityMap&&(h.specularIntensityMap.value=l.specularIntensityMap,n(l.specularIntensityMap,h.specularIntensityMapTransform))}function M(h,l){l.matcap&&(h.matcap.value=l.matcap)}function E(h,l){const T=t.get(l).light;h.referencePosition.value.setFromMatrixPosition(T.matrixWorld),h.nearDistance.value=T.shadow.camera.near,h.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Dp(e,t,n,i){let r={},a={},s=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,w){const b=w.program;i.uniformBlockBinding(T,b)}function p(T,w){let b=r[T.id];b===void 0&&(M(T),b=u(T),r[T.id]=b,T.addEventListener("dispose",h));const y=w.program;i.updateUBOMapping(T,y);const A=t.render.frame;a[T.id]!==A&&(g(T),a[T.id]=A)}function u(T){const w=f();T.__bindingPointIndex=w;const b=e.createBuffer(),y=T.__size,A=T.usage;return e.bindBuffer(e.UNIFORM_BUFFER,b),e.bufferData(e.UNIFORM_BUFFER,y,A),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,w,b),b}function f(){for(let T=0;T<o;T++)if(s.indexOf(T)===-1)return s.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(T){const w=r[T.id],b=T.uniforms,y=T.__cache;e.bindBuffer(e.UNIFORM_BUFFER,w);for(let A=0,D=b.length;A<D;A++){const U=Array.isArray(b[A])?b[A]:[b[A]];for(let _=0,S=U.length;_<S;_++){const C=U[_];if(m(C,A,_,y)===!0){const O=C.__offset,W=Array.isArray(C.value)?C.value:[C.value];let q=0;for(let Z=0;Z<W.length;Z++){const Y=W[Z],le=E(Y);typeof Y=="number"||typeof Y=="boolean"?(C.__data[0]=Y,e.bufferSubData(e.UNIFORM_BUFFER,O+q,C.__data)):Y.isMatrix3?(C.__data[0]=Y.elements[0],C.__data[1]=Y.elements[1],C.__data[2]=Y.elements[2],C.__data[3]=0,C.__data[4]=Y.elements[3],C.__data[5]=Y.elements[4],C.__data[6]=Y.elements[5],C.__data[7]=0,C.__data[8]=Y.elements[6],C.__data[9]=Y.elements[7],C.__data[10]=Y.elements[8],C.__data[11]=0):(Y.toArray(C.__data,q),q+=le.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,O,C.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function m(T,w,b,y){const A=T.value,D=w+"_"+b;if(y[D]===void 0)return typeof A=="number"||typeof A=="boolean"?y[D]=A:y[D]=A.clone(),!0;{const U=y[D];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return y[D]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function M(T){const w=T.uniforms;let b=0;const y=16;for(let D=0,U=w.length;D<U;D++){const _=Array.isArray(w[D])?w[D]:[w[D]];for(let S=0,C=_.length;S<C;S++){const O=_[S],W=Array.isArray(O.value)?O.value:[O.value];for(let q=0,Z=W.length;q<Z;q++){const Y=W[q],le=E(Y),V=b%y,ve=V%le.boundary,Ae=V+ve;b+=ve,Ae!==0&&y-Ae<le.storage&&(b+=y-Ae),O.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=b,b+=le.storage}}}const A=b%y;return A>0&&(b+=y-A),T.__size=b,T.__cache={},this}function E(T){const w={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(w.boundary=4,w.storage=4):T.isVector2?(w.boundary=8,w.storage=8):T.isVector3||T.isColor?(w.boundary=16,w.storage=12):T.isVector4?(w.boundary=16,w.storage=16):T.isMatrix3?(w.boundary=48,w.storage=48):T.isMatrix4?(w.boundary=64,w.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),w}function h(T){const w=T.target;w.removeEventListener("dispose",h);const b=s.indexOf(w.__bindingPointIndex);s.splice(b,1),e.deleteBuffer(r[w.id]),delete r[w.id],delete a[w.id]}function l(){for(const T in r)e.deleteBuffer(r[T]);s=[],r={},a={}}return{bind:c,update:p,dispose:l}}class Up{constructor(t={}){const{canvas:n=_l(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:p=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:g=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;const M=new Uint32Array(4),E=new Int32Array(4);let h=null,l=null;const T=[],w=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let y=!1;this._outputColorSpace=aa;let A=0,D=0,U=null,_=-1,S=null;const C=new At,O=new At;let W=null;const q=new $e(0);let Z=0,Y=n.width,le=n.height,V=1,ve=null,Ae=null;const Re=new At(0,0,Y,le),Ve=new At(0,0,Y,le);let We=!1;const je=new vo;let Xe=!1,B=!1;const K=new Nt,me=new ne,De=new At,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function ft(){return U===null?V:1}let R=i;function it(v,I){return n.getContext(v,I)}try{const v={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:p,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Sl}`),n.addEventListener("webglcontextlost",ce,!1),n.addEventListener("webglcontextrestored",be,!1),n.addEventListener("webglcontextcreationerror",ae,!1),R===null){const I="webgl2";if(R=it(I,v),R===null)throw it(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let L,re,j,Ue,de,Me,qe,ke,x,d,F,z,Q,k,xe,ee,he,ge,te,oe,Ee,_e,ue,Fe;function P(){L=new zf(R),L.init(),_e=new wp(R,L),re=new Ff(R,L,t,_e),j=new bp(R,L),re.reversedDepthBuffer&&g&&j.buffers.depth.setReversed(!0),Ue=new qf(R),de=new up,Me=new Tp(R,L,j,de,re,_e,Ue),qe=new Bf(b),ke=new Vf(b),x=new jc(R),ue=new If(R,x),d=new Wf(R,x,Ue,ue),F=new Kf(R,d,x,Ue),te=new Yf(R,re,Me),ee=new Of(de),z=new cp(b,qe,ke,L,re,ue,ee),Q=new Lp(b,de),k=new fp,xe=new _p(L),ge=new Uf(b,qe,ke,j,F,m,c),he=new Ep(b,F,re),Fe=new Dp(R,Ue,re,j),oe=new Nf(R,L,Ue),Ee=new Xf(R,L,Ue),Ue.programs=z.programs,b.capabilities=re,b.extensions=L,b.properties=de,b.renderLists=k,b.shadowMap=he,b.state=j,b.info=Ue}P();const ie=new Cp(b,R);this.xr=ie,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const v=L.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=L.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(v){v!==void 0&&(V=v,this.setSize(Y,le,!1))},this.getSize=function(v){return v.set(Y,le)},this.setSize=function(v,I,G=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=v,le=I,n.width=Math.floor(v*V),n.height=Math.floor(I*V),G===!0&&(n.style.width=v+"px",n.style.height=I+"px"),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set(Y*V,le*V).floor()},this.setDrawingBufferSize=function(v,I,G){Y=v,le=I,V=G,n.width=Math.floor(v*G),n.height=Math.floor(I*G),this.setViewport(0,0,v,I)},this.getCurrentViewport=function(v){return v.copy(C)},this.getViewport=function(v){return v.copy(Re)},this.setViewport=function(v,I,G,H){v.isVector4?Re.set(v.x,v.y,v.z,v.w):Re.set(v,I,G,H),j.viewport(C.copy(Re).multiplyScalar(V).round())},this.getScissor=function(v){return v.copy(Ve)},this.setScissor=function(v,I,G,H){v.isVector4?Ve.set(v.x,v.y,v.z,v.w):Ve.set(v,I,G,H),j.scissor(O.copy(Ve).multiplyScalar(V).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(v){j.setScissorTest(We=v)},this.setOpaqueSort=function(v){ve=v},this.setTransparentSort=function(v){Ae=v},this.getClearColor=function(v){return v.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor(...arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha(...arguments)},this.clear=function(v=!0,I=!0,G=!0){let H=0;if(v){let N=!1;if(U!==null){const se=U.texture.format;N=se===Co||se===yo||se===Ro}if(N){const se=U.texture.type,pe=se===Pn||se===oi||se===Hi||se===si||se===xo||se===bo,Te=ge.getClearColor(),Se=ge.getClearAlpha(),Ie=Te.r,Ne=Te.g,Ce=Te.b;pe?(M[0]=Ie,M[1]=Ne,M[2]=Ce,M[3]=Se,R.clearBufferuiv(R.COLOR,0,M)):(E[0]=Ie,E[1]=Ne,E[2]=Ce,E[3]=Se,R.clearBufferiv(R.COLOR,0,E))}else H|=R.COLOR_BUFFER_BIT}I&&(H|=R.DEPTH_BUFFER_BIT),G&&(H|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ce,!1),n.removeEventListener("webglcontextrestored",be,!1),n.removeEventListener("webglcontextcreationerror",ae,!1),ge.dispose(),k.dispose(),xe.dispose(),de.dispose(),qe.dispose(),ke.dispose(),F.dispose(),ue.dispose(),Fe.dispose(),z.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Vt),ie.removeEventListener("sessionend",ba),mn.stop()};function ce(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const v=Ue.autoReset,I=he.enabled,G=he.autoUpdate,H=he.needsUpdate,N=he.type;P(),Ue.autoReset=v,he.enabled=I,he.autoUpdate=G,he.needsUpdate=H,he.type=N}function ae(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function J(v){const I=v.target;I.removeEventListener("dispose",J),we(I)}function we(v){Oe(v),de.remove(v)}function Oe(v){const I=de.get(v).programs;I!==void 0&&(I.forEach(function(G){z.releaseProgram(G)}),v.isShaderMaterial&&z.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,G,H,N,se){I===null&&(I=ye);const pe=N.isMesh&&N.matrixWorld.determinant()<0,Te=fl(v,I,G,H,N);j.setMaterial(H,pe);let Se=G.index,Ie=1;if(H.wireframe===!0){if(Se=d.getWireframeAttribute(G),Se===void 0)return;Ie=2}const Ne=G.drawRange,Ce=G.attributes.position;let ze=Ne.start*Ie,Qe=(Ne.start+Ne.count)*Ie;se!==null&&(ze=Math.max(ze,se.start*Ie),Qe=Math.min(Qe,(se.start+se.count)*Ie)),Se!==null?(ze=Math.max(ze,0),Qe=Math.min(Qe,Se.count)):Ce!=null&&(ze=Math.max(ze,0),Qe=Math.min(Qe,Ce.count));const ht=Qe-ze;if(ht<0||ht===1/0)return;ue.setup(N,H,Te,G,Se);let at,et=oe;if(Se!==null&&(at=x.get(Se),et=Ee,et.setIndex(at)),N.isMesh)H.wireframe===!0?(j.setLineWidth(H.wireframeLinewidth*ft()),et.setMode(R.LINES)):et.setMode(R.TRIANGLES);else if(N.isLine){let Le=H.linewidth;Le===void 0&&(Le=1),j.setLineWidth(Le*ft()),N.isLineSegments?et.setMode(R.LINES):N.isLineLoop?et.setMode(R.LINE_LOOP):et.setMode(R.LINE_STRIP)}else N.isPoints?et.setMode(R.POINTS):N.isSprite&&et.setMode(R.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Nr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),et.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(L.get("WEBGL_multi_draw"))et.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Le=N._multiDrawStarts,lt=N._multiDrawCounts,Ye=N._multiDrawCount,Rt=Se?x.get(Se).bytesPerElement:1,Dn=de.get(H).currentProgram.getUniforms();for(let yt=0;yt<Ye;yt++)Dn.setValue(R,"_gl_DrawID",yt),et.render(Le[yt]/Rt,lt[yt])}else if(N.isInstancedMesh)et.renderInstances(ze,ht,N.count);else if(G.isInstancedBufferGeometry){const Le=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,lt=Math.min(G.instanceCount,Le);et.renderInstances(ze,ht,lt)}else et.render(ze,ht)};function rt(v,I,G){v.transparent===!0&&v.side===It&&v.forceSinglePass===!1?(v.side=Ct,v.needsUpdate=!0,pi(v,I,G),v.side=ri,v.needsUpdate=!0,pi(v,I,G),v.side=It):pi(v,I,G)}this.compile=function(v,I,G=null){G===null&&(G=v),l=xe.get(G),l.init(I),w.push(l),G.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(l.pushLight(N),N.castShadow&&l.pushShadow(N))}),v!==G&&v.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(l.pushLight(N),N.castShadow&&l.pushShadow(N))}),l.setupLights();const H=new Set;return v.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const se=N.material;if(se)if(Array.isArray(se))for(let pe=0;pe<se.length;pe++){const Te=se[pe];rt(Te,G,N),H.add(Te)}else rt(se,G,N),H.add(se)}),l=w.pop(),H},this.compileAsync=function(v,I,G=null){const H=this.compile(v,I,G);return new Promise(N=>{function se(){if(H.forEach(function(pe){de.get(pe).currentProgram.isReady()&&H.delete(pe)}),H.size===0){N(v);return}setTimeout(se,10)}L.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Ze=null;function jt(v){Ze&&Ze(v)}function Vt(){mn.stop()}function ba(){mn.start()}const mn=new Bo;mn.setAnimationLoop(jt),typeof self<"u"&&mn.setContext(self),this.setAnimationLoop=function(v){Ze=v,ie.setAnimationLoop(v),v===null?mn.stop():mn.start()},ie.addEventListener("sessionstart",Vt),ie.addEventListener("sessionend",ba),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(I),I=ie.getCamera()),v.isScene===!0&&v.onBeforeRender(b,v,I,U),l=xe.get(v,w.length),l.init(I),w.push(l),K.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),je.setFromProjectionMatrix(K,Ca,I.reversedDepth),B=this.localClippingEnabled,Xe=ee.init(this.clippingPlanes,B),h=k.get(v,T.length),h.init(),T.push(h),ie.enabled===!0&&ie.isPresenting===!0){const se=b.xr.getDepthSensingMesh();se!==null&&nr(se,I,-1/0,b.sortObjects)}nr(v,I,0,b.sortObjects),h.finish(),b.sortObjects===!0&&h.sort(ve,Ae),Ge=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Ge&&ge.addToRenderList(h,v),this.info.render.frame++,Xe===!0&&ee.beginShadows();const G=l.state.shadowsArray;he.render(G,v,I),Xe===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=h.opaque,N=h.transmissive;if(l.setupLights(),I.isArrayCamera){const se=I.cameras;if(N.length>0)for(let pe=0,Te=se.length;pe<Te;pe++){const Se=se[pe];wa(H,N,v,Se)}Ge&&ge.render(v);for(let pe=0,Te=se.length;pe<Te;pe++){const Se=se[pe];Ta(h,v,Se,Se.viewport)}}else N.length>0&&wa(H,N,v,I),Ge&&ge.render(v),Ta(h,v,I);U!==null&&D===0&&(Me.updateMultisampleRenderTarget(U),Me.updateRenderTargetMipmap(U)),v.isScene===!0&&v.onAfterRender(b,v,I),ue.resetDefaultState(),_=-1,S=null,w.pop(),w.length>0?(l=w[w.length-1],Xe===!0&&ee.setGlobalState(b.clippingPlanes,l.state.camera)):l=null,T.pop(),T.length>0?h=T[T.length-1]:h=null};function nr(v,I,G,H){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)G=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLight)l.pushLight(v),v.castShadow&&l.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||je.intersectsSprite(v)){H&&De.setFromMatrixPosition(v.matrixWorld).applyMatrix4(K);const pe=F.update(v),Te=v.material;Te.visible&&h.push(v,pe,Te,G,De.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||je.intersectsObject(v))){const pe=F.update(v),Te=v.material;if(H&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),De.copy(v.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),De.copy(pe.boundingSphere.center)),De.applyMatrix4(v.matrixWorld).applyMatrix4(K)),Array.isArray(Te)){const Se=pe.groups;for(let Ie=0,Ne=Se.length;Ie<Ne;Ie++){const Ce=Se[Ie],ze=Te[Ce.materialIndex];ze&&ze.visible&&h.push(v,pe,ze,G,De.z,Ce)}}else Te.visible&&h.push(v,pe,Te,G,De.z,null)}}const se=v.children;for(let pe=0,Te=se.length;pe<Te;pe++)nr(se[pe],I,G,H)}function Ta(v,I,G,H){const N=v.opaque,se=v.transmissive,pe=v.transparent;l.setupLightsView(G),Xe===!0&&ee.setGlobalState(b.clippingPlanes,G),H&&j.viewport(C.copy(H)),N.length>0&&hi(N,I,G),se.length>0&&hi(se,I,G),pe.length>0&&hi(pe,I,G),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function wa(v,I,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;l.state.transmissionRenderTarget[H.id]===void 0&&(l.state.transmissionRenderTarget[H.id]=new Bn(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")||L.has("EXT_color_buffer_float")?Xi:Pn,minFilter:xn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace}));const se=l.state.transmissionRenderTarget[H.id],pe=H.viewport||C;se.setSize(pe.z*b.transmissionResolutionScale,pe.w*b.transmissionResolutionScale);const Te=b.getRenderTarget(),Se=b.getActiveCubeFace(),Ie=b.getActiveMipmapLevel();b.setRenderTarget(se),b.getClearColor(q),Z=b.getClearAlpha(),Z<1&&b.setClearColor(16777215,.5),b.clear(),Ge&&ge.render(G);const Ne=b.toneMapping;b.toneMapping=ln;const Ce=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),l.setupLightsView(H),Xe===!0&&ee.setGlobalState(b.clippingPlanes,H),hi(v,G,H),Me.updateMultisampleRenderTarget(se),Me.updateRenderTargetMipmap(se),L.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Qe=0,ht=I.length;Qe<ht;Qe++){const at=I[Qe],et=at.object,Le=at.geometry,lt=at.material,Ye=at.group;if(lt.side===It&&et.layers.test(H.layers)){const Rt=lt.side;lt.side=Ct,lt.needsUpdate=!0,Aa(et,G,H,Le,lt,Ye),lt.side=Rt,lt.needsUpdate=!0,ze=!0}}ze===!0&&(Me.updateMultisampleRenderTarget(se),Me.updateRenderTargetMipmap(se))}b.setRenderTarget(Te,Se,Ie),b.setClearColor(q,Z),Ce!==void 0&&(H.viewport=Ce),b.toneMapping=Ne}function hi(v,I,G){const H=I.isScene===!0?I.overrideMaterial:null;for(let N=0,se=v.length;N<se;N++){const pe=v[N],Te=pe.object,Se=pe.geometry,Ie=pe.group;let Ne=pe.material;Ne.allowOverride===!0&&H!==null&&(Ne=H),Te.layers.test(G.layers)&&Aa(Te,I,G,Se,Ne,Ie)}}function Aa(v,I,G,H,N,se){v.onBeforeRender(b,I,G,H,N,se),v.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),N.onBeforeRender(b,I,G,H,v,se),N.transparent===!0&&N.side===It&&N.forceSinglePass===!1?(N.side=Ct,N.needsUpdate=!0,b.renderBufferDirect(G,I,H,N,v,se),N.side=ri,N.needsUpdate=!0,b.renderBufferDirect(G,I,H,N,v,se),N.side=It):b.renderBufferDirect(G,I,H,N,v,se),v.onAfterRender(b,I,G,H,N,se)}function pi(v,I,G){I.isScene!==!0&&(I=ye);const H=de.get(v),N=l.state.lights,se=l.state.shadowsArray,pe=N.state.version,Te=z.getParameters(v,N.state,se,I,G),Se=z.getProgramCacheKey(Te);let Ie=H.programs;H.environment=v.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(v.isMeshStandardMaterial?ke:qe).get(v.envMap||H.environment),H.envMapRotation=H.environment!==null&&v.envMap===null?I.environmentRotation:v.envMapRotation,Ie===void 0&&(v.addEventListener("dispose",J),Ie=new Map,H.programs=Ie);let Ne=Ie.get(Se);if(Ne!==void 0){if(H.currentProgram===Ne&&H.lightsStateVersion===pe)return ya(v,Te),Ne}else Te.uniforms=z.getUniforms(v),v.onBeforeCompile(Te,b),Ne=z.acquireProgram(Te,Se),Ie.set(Se,Ne),H.uniforms=Te.uniforms;const Ce=H.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ce.clippingPlanes=ee.uniform),ya(v,Te),H.needsLights=pl(v),H.lightsStateVersion=pe,H.needsLights&&(Ce.ambientLightColor.value=N.state.ambient,Ce.lightProbe.value=N.state.probe,Ce.directionalLights.value=N.state.directional,Ce.directionalLightShadows.value=N.state.directionalShadow,Ce.spotLights.value=N.state.spot,Ce.spotLightShadows.value=N.state.spotShadow,Ce.rectAreaLights.value=N.state.rectArea,Ce.ltc_1.value=N.state.rectAreaLTC1,Ce.ltc_2.value=N.state.rectAreaLTC2,Ce.pointLights.value=N.state.point,Ce.pointLightShadows.value=N.state.pointShadow,Ce.hemisphereLights.value=N.state.hemi,Ce.directionalShadowMap.value=N.state.directionalShadowMap,Ce.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ce.spotShadowMap.value=N.state.spotShadowMap,Ce.spotLightMatrix.value=N.state.spotLightMatrix,Ce.spotLightMap.value=N.state.spotLightMap,Ce.pointShadowMap.value=N.state.pointShadowMap,Ce.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Ne,H.uniformsList=null,Ne}function Ra(v){if(v.uniformsList===null){const I=v.currentProgram.getUniforms();v.uniformsList=Ui.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function ya(v,I){const G=de.get(v);G.outputColorSpace=I.outputColorSpace,G.batching=I.batching,G.batchingColor=I.batchingColor,G.instancing=I.instancing,G.instancingColor=I.instancingColor,G.instancingMorph=I.instancingMorph,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function fl(v,I,G,H,N){I.isScene!==!0&&(I=ye),Me.resetTextureUnits();const se=I.fog,pe=H.isMeshStandardMaterial?I.environment:null,Te=U===null?b.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:qi,Se=(H.isMeshStandardMaterial?ke:qe).get(H.envMap||pe),Ie=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ne=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ce=!!G.morphAttributes.position,ze=!!G.morphAttributes.normal,Qe=!!G.morphAttributes.color;let ht=ln;H.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ht=b.toneMapping);const at=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,et=at!==void 0?at.length:0,Le=de.get(H),lt=l.state.lights;if(Xe===!0&&(B===!0||v!==S)){const bt=v===S&&H.id===_;ee.setState(H,v,bt)}let Ye=!1;H.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==lt.state.version||Le.outputColorSpace!==Te||N.isBatchedMesh&&Le.batching===!1||!N.isBatchedMesh&&Le.batching===!0||N.isBatchedMesh&&Le.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Le.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Le.instancing===!1||!N.isInstancedMesh&&Le.instancing===!0||N.isSkinnedMesh&&Le.skinning===!1||!N.isSkinnedMesh&&Le.skinning===!0||N.isInstancedMesh&&Le.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Le.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Le.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Le.instancingMorph===!1&&N.morphTexture!==null||Le.envMap!==Se||H.fog===!0&&Le.fog!==se||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ee.numPlanes||Le.numIntersection!==ee.numIntersection)||Le.vertexAlphas!==Ie||Le.vertexTangents!==Ne||Le.morphTargets!==Ce||Le.morphNormals!==ze||Le.morphColors!==Qe||Le.toneMapping!==ht||Le.morphTargetsCount!==et)&&(Ye=!0):(Ye=!0,Le.__version=H.version);let Rt=Le.currentProgram;Ye===!0&&(Rt=pi(H,I,N));let Dn=!1,yt=!1,Xn=!1;const ct=Rt.getUniforms(),Pt=Le.uniforms;if(j.useProgram(Rt.program)&&(Dn=!0,yt=!0,Xn=!0),H.id!==_&&(_=H.id,yt=!0),Dn||S!==v){j.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ct.setValue(R,"projectionMatrix",v.projectionMatrix),ct.setValue(R,"viewMatrix",v.matrixWorldInverse);const Tt=ct.map.cameraPosition;Tt!==void 0&&Tt.setValue(R,me.setFromMatrixPosition(v.matrixWorld)),re.logarithmicDepthBuffer&&ct.setValue(R,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ct.setValue(R,"isOrthographic",v.isOrthographicCamera===!0),S!==v&&(S=v,yt=!0,Xn=!0)}if(N.isSkinnedMesh){ct.setOptional(R,N,"bindMatrix"),ct.setOptional(R,N,"bindMatrixInverse");const bt=N.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),ct.setValue(R,"boneTexture",bt.boneTexture,Me))}N.isBatchedMesh&&(ct.setOptional(R,N,"batchingTexture"),ct.setValue(R,"batchingTexture",N._matricesTexture,Me),ct.setOptional(R,N,"batchingIdTexture"),ct.setValue(R,"batchingIdTexture",N._indirectTexture,Me),ct.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&ct.setValue(R,"batchingColorTexture",N._colorsTexture,Me));const Lt=G.morphAttributes;if((Lt.position!==void 0||Lt.normal!==void 0||Lt.color!==void 0)&&te.update(N,G,Rt),(yt||Le.receiveShadow!==N.receiveShadow)&&(Le.receiveShadow=N.receiveShadow,ct.setValue(R,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Pt.envMap.value=Se,Pt.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&I.environment!==null&&(Pt.envMapIntensity.value=I.environmentIntensity),yt&&(ct.setValue(R,"toneMappingExposure",b.toneMappingExposure),Le.needsLights&&hl(Pt,Xn),se&&H.fog===!0&&Q.refreshFogUniforms(Pt,se),Q.refreshMaterialUniforms(Pt,H,V,le,l.state.transmissionRenderTarget[v.id]),Ui.upload(R,Ra(Le),Pt,Me)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ui.upload(R,Ra(Le),Pt,Me),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ct.setValue(R,"center",N.center),ct.setValue(R,"modelViewMatrix",N.modelViewMatrix),ct.setValue(R,"normalMatrix",N.normalMatrix),ct.setValue(R,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const bt=H.uniformsGroups;for(let Tt=0,ir=bt.length;Tt<ir;Tt++){const gn=bt[Tt];Fe.update(gn,Rt),Fe.bind(gn,Rt)}}return Rt}function hl(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function pl(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(v,I,G){const H=de.get(v);H.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),de.get(v.texture).__webglTexture=I,de.get(v.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:G,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,I){const G=de.get(v);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0};const ml=R.createFramebuffer();this.setRenderTarget=function(v,I=0,G=0){U=v,A=I,D=G;let H=!0,N=null,se=!1,pe=!1;if(v){const Se=de.get(v);if(Se.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(R.FRAMEBUFFER,null),H=!1;else if(Se.__webglFramebuffer===void 0)Me.setupRenderTarget(v);else if(Se.__hasExternalTextures)Me.rebindTextures(v,de.get(v.texture).__webglTexture,de.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ce=v.depthTexture;if(Se.__boundDepthTexture!==Ce){if(Ce!==null&&de.has(Ce)&&(v.width!==Ce.image.width||v.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Me.setupDepthRenderbuffer(v)}}const Ie=v.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(pe=!0);const Ne=de.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ne[I])?N=Ne[I][G]:N=Ne[I],se=!0):v.samples>0&&Me.useMultisampledRTT(v)===!1?N=de.get(v).__webglMultisampledFramebuffer:Array.isArray(Ne)?N=Ne[G]:N=Ne,C.copy(v.viewport),O.copy(v.scissor),W=v.scissorTest}else C.copy(Re).multiplyScalar(V).floor(),O.copy(Ve).multiplyScalar(V).floor(),W=We;if(G!==0&&(N=ml),j.bindFramebuffer(R.FRAMEBUFFER,N)&&H&&j.drawBuffers(v,N),j.viewport(C),j.scissor(O),j.setScissorTest(W),se){const Se=de.get(v.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+I,Se.__webglTexture,G)}else if(pe){const Se=I;for(let Ie=0;Ie<v.textures.length;Ie++){const Ne=de.get(v.textures[Ie]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ie,Ne.__webglTexture,G,Se)}}else if(v!==null&&G!==0){const Se=de.get(v.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Se.__webglTexture,G)}_=-1},this.readRenderTargetPixels=function(v,I,G,H,N,se,pe,Te=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=de.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se){j.bindFramebuffer(R.FRAMEBUFFER,Se);try{const Ie=v.textures[Te],Ne=Ie.format,Ce=Ie.type;if(!re.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-H&&G>=0&&G<=v.height-N&&(v.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Te),R.readPixels(I,G,H,N,_e.convert(Ne),_e.convert(Ce),se))}finally{const Ie=U!==null?de.get(U).__webglFramebuffer:null;j.bindFramebuffer(R.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(v,I,G,H,N,se,pe,Te=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=de.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se)if(I>=0&&I<=v.width-H&&G>=0&&G<=v.height-N){j.bindFramebuffer(R.FRAMEBUFFER,Se);const Ie=v.textures[Te],Ne=Ie.format,Ce=Ie.type;if(!re.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,ze),R.bufferData(R.PIXEL_PACK_BUFFER,se.byteLength,R.STREAM_READ),v.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Te),R.readPixels(I,G,H,N,_e.convert(Ne),_e.convert(Ce),0);const Qe=U!==null?de.get(U).__webglFramebuffer:null;j.bindFramebuffer(R.FRAMEBUFFER,Qe);const ht=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Ml(R,ht,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,ze),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,se),R.deleteBuffer(ze),R.deleteSync(ht),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,I=null,G=0){const H=Math.pow(2,-G),N=Math.floor(v.image.width*H),se=Math.floor(v.image.height*H),pe=I!==null?I.x:0,Te=I!==null?I.y:0;Me.setTexture2D(v,0),R.copyTexSubImage2D(R.TEXTURE_2D,G,0,0,pe,Te,N,se),j.unbindTexture()};const gl=R.createFramebuffer(),vl=R.createFramebuffer();this.copyTextureToTexture=function(v,I,G=null,H=null,N=0,se=null){se===null&&(N!==0?(Nr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=N,N=0):se=0);let pe,Te,Se,Ie,Ne,Ce,ze,Qe,ht;const at=v.isCompressedTexture?v.mipmaps[se]:v.image;if(G!==null)pe=G.max.x-G.min.x,Te=G.max.y-G.min.y,Se=G.isBox3?G.max.z-G.min.z:1,Ie=G.min.x,Ne=G.min.y,Ce=G.isBox3?G.min.z:0;else{const Lt=Math.pow(2,-N);pe=Math.floor(at.width*Lt),Te=Math.floor(at.height*Lt),v.isDataArrayTexture?Se=at.depth:v.isData3DTexture?Se=Math.floor(at.depth*Lt):Se=1,Ie=0,Ne=0,Ce=0}H!==null?(ze=H.x,Qe=H.y,ht=H.z):(ze=0,Qe=0,ht=0);const et=_e.convert(I.format),Le=_e.convert(I.type);let lt;I.isData3DTexture?(Me.setTexture3D(I,0),lt=R.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Me.setTexture2DArray(I,0),lt=R.TEXTURE_2D_ARRAY):(Me.setTexture2D(I,0),lt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,I.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,I.unpackAlignment);const Ye=R.getParameter(R.UNPACK_ROW_LENGTH),Rt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Dn=R.getParameter(R.UNPACK_SKIP_PIXELS),yt=R.getParameter(R.UNPACK_SKIP_ROWS),Xn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,at.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,at.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ie),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ne),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ce);const ct=v.isDataArrayTexture||v.isData3DTexture,Pt=I.isDataArrayTexture||I.isData3DTexture;if(v.isDepthTexture){const Lt=de.get(v),bt=de.get(I),Tt=de.get(Lt.__renderTarget),ir=de.get(bt.__renderTarget);j.bindFramebuffer(R.READ_FRAMEBUFFER,Tt.__webglFramebuffer),j.bindFramebuffer(R.DRAW_FRAMEBUFFER,ir.__webglFramebuffer);for(let gn=0;gn<Se;gn++)ct&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,de.get(v).__webglTexture,N,Ce+gn),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,de.get(I).__webglTexture,se,ht+gn)),R.blitFramebuffer(Ie,Ne,pe,Te,ze,Qe,pe,Te,R.DEPTH_BUFFER_BIT,R.NEAREST);j.bindFramebuffer(R.READ_FRAMEBUFFER,null),j.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(N!==0||v.isRenderTargetTexture||de.has(v)){const Lt=de.get(v),bt=de.get(I);j.bindFramebuffer(R.READ_FRAMEBUFFER,gl),j.bindFramebuffer(R.DRAW_FRAMEBUFFER,vl);for(let Tt=0;Tt<Se;Tt++)ct?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Lt.__webglTexture,N,Ce+Tt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Lt.__webglTexture,N),Pt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,bt.__webglTexture,se,ht+Tt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,bt.__webglTexture,se),N!==0?R.blitFramebuffer(Ie,Ne,pe,Te,ze,Qe,pe,Te,R.COLOR_BUFFER_BIT,R.NEAREST):Pt?R.copyTexSubImage3D(lt,se,ze,Qe,ht+Tt,Ie,Ne,pe,Te):R.copyTexSubImage2D(lt,se,ze,Qe,Ie,Ne,pe,Te);j.bindFramebuffer(R.READ_FRAMEBUFFER,null),j.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Pt?v.isDataTexture||v.isData3DTexture?R.texSubImage3D(lt,se,ze,Qe,ht,pe,Te,Se,et,Le,at.data):I.isCompressedArrayTexture?R.compressedTexSubImage3D(lt,se,ze,Qe,ht,pe,Te,Se,et,at.data):R.texSubImage3D(lt,se,ze,Qe,ht,pe,Te,Se,et,Le,at):v.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,se,ze,Qe,pe,Te,et,Le,at.data):v.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,se,ze,Qe,at.width,at.height,et,at.data):R.texSubImage2D(R.TEXTURE_2D,se,ze,Qe,pe,Te,et,Le,at);R.pixelStorei(R.UNPACK_ROW_LENGTH,Ye),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Rt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Dn),R.pixelStorei(R.UNPACK_SKIP_ROWS,yt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Xn),se===0&&I.generateMipmaps&&R.generateMipmap(lt),j.unbindTexture()},this.initRenderTarget=function(v){de.get(v).__webglFramebuffer===void 0&&Me.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Me.setTextureCube(v,0):v.isData3DTexture?Me.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Me.setTexture2DArray(v,0):Me.setTexture2D(v,0),j.unbindTexture()},this.resetState=function(){A=0,D=0,U=null,j.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ca}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(t),n.unpackColorSpace=vt._getUnpackColorSpace()}}const Ii=256,ei=6378137,dn=85.0511287798066,Ip=Math.PI*ei,Np=2*Ip,ti=e=>((e+180)%360+360)%360-180,Bs=e=>{const n=Math.max(-dn,Math.min(dn,e))*Math.PI/180;return ei*Math.log(Math.tan(Math.PI/4+n/2))};function Fp(e,t,n){if(!Number.isInteger(n)||n<0||n>30)throw new RangeError("Zoom must be an integer from 0 to 30");const i=2**n,r=Math.floor((ti(t)+180)/360*i),s=Math.max(-dn,Math.min(dn,e))*Math.PI/180,o=Math.floor((1-Math.asinh(Math.tan(s))/Math.PI)/2*i);return{x:(r%i+i)%i,y:Math.max(0,Math.min(i-1,o)),z:n,n:i}}function Op(e,t,n){const i=Fp(e,t,n),r=Ii*i.n,a=(ti(t)+180)/360*r,o=Math.max(-dn,Math.min(dn,e))*Math.PI/180,c=(1-Math.asinh(Math.tan(o))/Math.PI)/2*r;return{tile:i,u:a/Ii-i.x,v:c/Ii-i.y}}class Bp{zoom;anchor;originTile;anchorU;anchorV;latitudeScale;tileSpan;originNorthing;constructor(t,n=12){if(!Number.isFinite(t.lat)||!Number.isFinite(t.lon)||Math.abs(t.lat)>90)throw new RangeError("Anchor must be a valid WGS84 latitude/longitude");this.anchor={lat:Math.max(-dn,Math.min(dn,t.lat)),lon:ti(t.lon)},this.zoom=n;const i=Op(this.anchor.lat,this.anchor.lon,n);this.originTile=i.tile,this.anchorU=i.u,this.anchorV=i.v,this.latitudeScale=Math.cos(this.anchor.lat*Math.PI/180),this.originNorthing=Bs(this.anchor.lat),this.tileSpan=Np/this.originTile.n*this.latitudeScale}toLocal(t){const n=ti(t.lon-this.anchor.lon),i=ei*n*Math.PI/180,r=Bs(t.lat)-this.originNorthing;return{x:i*this.latitudeScale,z:r*this.latitudeScale}}toGeo(t){const n=ti(this.anchor.lon+t.x/(ei*this.latitudeScale)*180/Math.PI),i=this.originNorthing+t.z/this.latitudeScale;return{lon:n,lat:(2*Math.atan(Math.exp(i/ei))-Math.PI/2)*180/Math.PI}}tileOrigin(t,n){return{x:(t-this.anchorU)*this.tileSpan,z:(n+this.anchorV)*this.tileSpan}}tileOffsetAt(t,n){const i=this.anchorU+t/this.tileSpan,r=this.anchorV-n/this.tileSpan,a=Math.floor(i),s=Math.floor(r);return{dx:a>this.originTile.n/2?a-this.originTile.n:a<-this.originTile.n/2?a+this.originTile.n:a,dz:-s||0,u:i-a,v:r-s}}tileAddress(t,n){const i=this.originTile.n;return{x:((this.originTile.x+t)%i+i)%i,y:Math.max(0,Math.min(i-1,this.originTile.y-n)),z:this.zoom,n:i}}}const ca=[{name:"Midtown Manhattan, New York",lat:40.758,lon:-73.9855,terrain:"URBAN JUNGLE"},{name:"Moab, Utah",lat:38.5733,lon:-109.5498,terrain:"RED ROCK COUNTRY"},{name:"Mount Kisco, New York",lat:41.204406,lon:-73.727446,terrain:"WESTCHESTER BACKROADS"},{name:"Grand Canyon",lat:36.1069,lon:-112.1129,terrain:"THE BIG DROP"},{name:"Mount Everest",lat:27.9881,lon:86.925,terrain:"ROOF OF THE WORLD"},{name:"San Francisco",lat:37.7749,lon:-122.4194,terrain:"HILL CLIMBER"},{name:"Tokyo, Japan",lat:35.6762,lon:139.6503,terrain:"NEON TRAILS"},{name:"Sahara Desert",lat:23.4162,lon:25.6628,terrain:"ENDLESS DUNES"},{name:"Swiss Alps",lat:46.8182,lon:9.2275,terrain:"HIGH ALTITUDE"}];function kp(e){const t=e.trim().match(/^\s*(-?\d+(?:\.\d+)?)\s*[, ]\s*(-?\d+(?:\.\d+)?)\s*$/);if(!t)return null;const n=Number(t[1]),i=Number(t[2]);return Math.abs(n)<=90&&Math.abs(i)<=180?{name:`${n.toFixed(4)}, ${i.toFixed(4)}`,lat:n,lon:i}:null}let ks=0;const vr=new Map;async function Gp(e){const t=kp(e);if(t)return[t];const n=e.toLowerCase().trim();if(!n)return[];if(vr.has(n))return vr.get(n);const i=Math.max(0,1100-(Date.now()-ks));i&&await new Promise(c=>setTimeout(c,i)),ks=Date.now();const r=new URL("https://nominatim.openstreetmap.org/search");r.search=new URLSearchParams({q:e,format:"jsonv2",limit:"5"}).toString();const a=await fetch(r,{headers:{Accept:"application/json"}});if(!a.ok)throw new Error(`Location search unavailable (${a.status})`);const o=(await a.json()).map(c=>({name:c.display_name.split(",").slice(0,3).join(",").trim(),lat:+c.lat,lon:+c.lon}));return vr.set(n,o),o}function Hp(e,t,n,i){const r=Math.max(0,Math.min(t-1,n*(t-1))),a=Math.max(0,Math.min(t-1,i*(t-1))),s=Math.floor(r),o=Math.floor(a),c=Math.min(t-1,s+1),p=Math.min(t-1,o+1),u=r-s,f=a-o,g=(m,M)=>e[M*t+m]??0;return(g(s,o)*(1-u)+g(c,o)*u)*(1-f)+(g(s,p)*(1-u)+g(c,p)*u)*f}function Gs(e,t,n){const i=new Float32Array((n+1)**2);for(let r=0;r<=n;r++)for(let a=0;a<=n;a++)i[r*(n+1)+a]=Hp(e,t,a/n,r/n);return i}function Hs(e,t,n,i){const r=Math.max(0,Math.min(t,n*t)),a=Math.max(0,Math.min(t,i*t)),s=Math.min(t-1,Math.floor(r)),o=Math.min(t-1,Math.floor(a)),c=r-s,p=a-o,u=t+1,f=e[o*u+s]??0,g=e[o*u+s+1]??0,m=e[(o+1)*u+s]??0,M=e[(o+1)*u+s+1]??0;return c>=p?f*(1-c)+g*(c-p)+M*p:f*(1-p)+M*c+m*(p-c)}function Vp(e){const t=new Map,n=new Set;for(const i of e){const r=i.segments+1;for(let a=0;a<=i.segments;a++)for(const[s,o]of[[a,0],[a,i.segments],[0,a],[i.segments,a]]){const c=o*r+s,p=`${i.dx*i.segments+s},${i.dz*i.segments-o}`,u=t.get(p)??[];u.push({tile:i,index:c}),t.set(p,u)}}for(const i of t.values()){if(i.length<2)continue;const r=i.reduce((a,s)=>a+s.tile.grid[s.index],0)/i.length;for(const a of i)a.tile.grid[a.index]!==r&&(a.tile.grid[a.index]=r,n.add(a.tile))}return n}const _r=12,Ut=Ii,zp=36,rn=new Map;function Vs(e,t,n){const i=`${n}/${e}/${t}`;if(rn.has(i)){const a=rn.get(i);return rn.delete(i),rn.set(i,a),a}const r=(async()=>{try{const a=new Image;a.crossOrigin="anonymous",a.src=`https://s3.amazonaws.com/elevation-tiles-prod/terrarium/${n}/${e}/${t}.png`,await new Promise((u,f)=>{a.onload=()=>u(),a.onerror=()=>f(new Error("terrain tile unavailable"))});const s=document.createElement("canvas");s.width=Ut,s.height=Ut;const o=s.getContext("2d",{willReadFrequently:!0});if(!o)throw new Error("canvas unavailable");o.drawImage(a,0,0,Ut,Ut);const c=o.getImageData(0,0,Ut,Ut).data,p=new Float32Array(Ut*Ut);for(let u=0;u<p.length;u++)p[u]=c[u*4]*256+c[u*4+1]+c[u*4+2]/256-32768;return{heights:p}}catch{return{heights:new Float32Array(Ut*Ut)}}})();for(rn.set(i,r);rn.size>zp;)rn.delete(rn.keys().next().value);return r}class Wp{group=new qt;place=null;frame=null;heightSampleMs=0;heightSamples=0;tileBuildMs=0;tileBuilds=0;detailQuality=1;baseline=0;tiles=new Map;requests=new Set;coverage={x:NaN,z:NaN};generation=0;centerSegments;activeTerrainShader=null;biome={desert:1,alpine:0,urban:0,green:0};material;constructor(t=127){this.centerSegments=t,this.material=new xt({color:16777215,roughness:.96,metalness:0,vertexColors:!0}),this.material.onBeforeCompile=n=>{n.uniforms.uRumbleDesert={value:this.biome.desert},n.uniforms.uRumbleAlpine={value:this.biome.alpine},n.uniforms.uRumbleUrban={value:this.biome.urban},n.uniforms.uRumbleGreen={value:this.biome.green},n.uniforms.uRumbleDetail={value:this.detailQuality},this.activeTerrainShader=n,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vRumbleWorld;
varying float vRumbleUp;
varying float vRumbleElevation;`),n.vertexShader=n.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
vRumbleUp = normal.y;
vRumbleElevation = position.y;`),n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vRumbleWorld = position;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vRumbleWorld;
varying float vRumbleUp;
varying float vRumbleElevation;
uniform float uRumbleDesert;
uniform float uRumbleAlpine;
uniform float uRumbleDetail;
uniform float uRumbleUrban;
uniform float uRumbleGreen;
float rumbleHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float rumbleNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(rumbleHash(i),rumbleHash(i+vec2(1.0,0.0)),f.x),mix(rumbleHash(i+vec2(0.0,1.0)),rumbleHash(i+vec2(1.0,1.0)),f.x),f.y);}`),n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
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
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.78, 0.81, 0.77), rumbleAlpineSnow * 0.82);`)},this.material.customProgramCacheKey=()=>"rumble-terrain-material-v6"}async load(t){this.clear();const n=++this.generation;this.place=t,this.frame=new Bp(t,_r);const i=t.name.toLowerCase();this.biome.desert=/moab|grand canyon|sahara|utah|arizona/i.test(i)?1:0,this.biome.alpine=/alps|everest|mountain|swiss/i.test(i)?1:0,this.biome.urban=/manhattan|new york city|tokyo|san francisco/i.test(i)?1:0,this.biome.green=this.biome.desert||this.biome.alpine||this.biome.urban?0:1,this.activeTerrainShader&&(this.activeTerrainShader.uniforms.uRumbleDesert.value=this.biome.desert,this.activeTerrainShader.uniforms.uRumbleAlpine.value=this.biome.alpine,this.activeTerrainShader.uniforms.uRumbleUrban.value=this.biome.urban,this.activeTerrainShader.uniforms.uRumbleGreen.value=this.biome.green);const r=this.frame.tileAddress(0,0),a=await Vs(r.x,r.y,_r);if(n!==this.generation)return;const s=Gs(a.heights,Ut,this.centerSegments);this.baseline=Hs(s,this.centerSegments,this.frame.anchorU,this.frame.anchorV),this.install(0,0,a,this.centerSegments,s),this.ensureRegion(0,0)}key(t,n){return`${t},${n}`}address(t,n){return this.frame.tileAddress(t,n)}async ensureRegion(t,n){const i=this.frame;if(!i)return;const r=i.tileOffsetAt(t,n),a=r.dx,s=r.dz;if(this.coverage.x===a&&this.coverage.z===s)return;this.coverage={x:a,z:s};const o=this.generation,c=[],p=this.centerSegments;for(let u=s-1;u<=s+1;u++)for(let f=a-1;f<=a+1;f++){const g=this.key(f,u),m=f===a&&u===s?this.centerSegments:p,M=this.tiles.get(g);M&&M.segments!==m&&(this.group.remove(M.mesh),M.mesh.geometry.dispose(),this.tiles.delete(g));const E=`${o}:${g}`;if(this.tiles.has(g)||this.requests.has(E))continue;this.requests.add(E);const h=this.address(f,u);c.push(Vs(h.x,h.y,_r).then(l=>{o===this.generation&&Math.abs(f-this.coverage.x)<=1&&Math.abs(u-this.coverage.z)<=1&&this.install(f,u,l,m)}).finally(()=>this.requests.delete(E)))}for(const[u,f]of this.tiles)(Math.abs(f.dx-a)>1||Math.abs(f.dz-s)>1)&&(this.group.remove(f.mesh),f.mesh.geometry.dispose(),this.tiles.delete(u));await Promise.all(c)}install(t,n,i,r=63,a){const s=this.key(t,n);if(this.tiles.has(s))return;const o=performance.now(),c=this.frame,p=a??Gs(i.heights,Ut,r),u=new un,f=new Float32Array((r+1)**2*3),g=new Float32Array((r+1)**2*3),m=[],M=c.tileOrigin(t,n);for(let h=0;h<=r;h++)for(let l=0;l<=r;l++){const T=h*(r+1)+l,w=p[T];f[T*3]=M.x+l/r*c.tileSpan,f[T*3+1]=ot.clamp((w-this.baseline)*1.25,-900,1800),f[T*3+2]=M.z-h/r*c.tileSpan,g[T*3]=g[T*3+1]=g[T*3+2]=1}for(let h=0;h<r;h++)for(let l=0;l<r;l++){const T=h*(r+1)+l,w=T+1,b=T+r+1,y=b+1;m.push(T,w,y,T,y,b)}u.setIndex(m),u.setAttribute("position",new Ft(f,3)),u.setAttribute("color",new zi(g,3)),u.computeVertexNormals();const E=new ut(u,this.material);E.receiveShadow=!0,E.userData.kind="terrain",this.group.add(E),this.tiles.set(s,{data:i,grid:p,mesh:E,segments:r,dx:t,dz:n}),this.reconcileSharedEdges(),this.tileBuildMs+=performance.now()-o,this.tileBuilds++}reconcileSharedEdges(){const t=Vp(Array.from(this.tiles.values()));for(const n of t)this.rebuildGeometry(n)}rebuildGeometry(t){const{segments:n,grid:i,dx:r,dz:a}=t,s=this.frame,o=new un,c=new Float32Array((n+1)**2*3),p=new Float32Array((n+1)**2*3),u=[],f=s.tileOrigin(r,a);for(let g=0;g<=n;g++)for(let m=0;m<=n;m++){const M=g*(n+1)+m,E=i[M];c[M*3]=f.x+m/n*s.tileSpan,c[M*3+1]=ot.clamp((E-this.baseline)*1.25,-900,1800),c[M*3+2]=f.z-g/n*s.tileSpan,p[M*3]=p[M*3+1]=p[M*3+2]=1}for(let g=0;g<n;g++)for(let m=0;m<n;m++){const M=g*(n+1)+m,E=M+1,h=M+n+1,l=h+1;u.push(M,E,l,M,l,h)}o.setIndex(u),o.setAttribute("position",new Ft(c,3)),o.setAttribute("color",new zi(p,3)),o.computeVertexNormals(),t.mesh.geometry.dispose(),t.mesh.geometry=o}heightAt(t,n){if(!this.frame||!this.tiles.size)return 0;const i=performance.now();let r=this.frame.tileOffsetAt(t,n);(r.dx!==this.coverage.x||r.dz!==this.coverage.z)&&this.ensureRegion(t,n);let a=this.tiles.get(this.key(r.dx,r.dz));if(a||(a=this.tiles.get(this.key(0,0)),r=this.frame.tileOffsetAt(t,n)),!a)return 0;const s=a===this.tiles.get(this.key(r.dx,r.dz))?r.u:ot.clamp((t-this.frame.tileOrigin(a.dx,a.dz).x)/this.frame.tileSpan,0,1),o=a===this.tiles.get(this.key(r.dx,r.dz))?r.v:ot.clamp((this.frame.tileOrigin(a.dx,a.dz).z-n)/this.frame.tileSpan,0,1),c=(Hs(a.grid,a.segments,s,o)-this.baseline)*1.25;return this.heightSamples++,this.heightSampleMs+=performance.now()-i,c}takePerformanceSample(){const t={heightSamples:this.heightSamples,heightSampleMs:this.heightSampleMs,tileBuilds:this.tileBuilds,tileBuildMs:this.tileBuildMs};return this.heightSamples=0,this.heightSampleMs=0,this.tileBuilds=0,this.tileBuildMs=0,t}setVisualQuality(t){this.detailQuality=t==="low"?.45:t==="medium"?.72:1,this.activeTerrainShader&&(this.activeTerrainShader.uniforms.uRumbleDetail.value=this.detailQuality)}clear(){this.generation++;for(const t of this.tiles.values())this.group.remove(t.mesh),t.mesh.geometry.dispose();this.tiles.clear(),this.requests.clear(),this.coverage={x:NaN,z:NaN}}dispose(){this.clear(),this.material.dispose()}}function Nn(e,t=!1){const n=e[0].index!==null,i=new Set(Object.keys(e[0].attributes)),r=new Set(Object.keys(e[0].morphAttributes)),a={},s={},o=e[0].morphTargetsRelative,c=new un;let p=0;for(let u=0;u<e.length;++u){const f=e[u];let g=0;if(n!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in f.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;a[m]===void 0&&(a[m]=[]),a[m].push(f.attributes[m]),g++}if(g!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in f.morphAttributes){if(!r.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;s[m]===void 0&&(s[m]=[]),s[m].push(f.morphAttributes[m])}if(t){let m;if(n)m=f.index.count;else if(f.attributes.position!==void 0)m=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(p,m,u),p+=m}}if(n){let u=0;const f=[];for(let g=0;g<e.length;++g){const m=e[g].index;for(let M=0;M<m.count;++M)f.push(m.getX(M)+u);u+=e[g].attributes.position.count}c.setIndex(f)}for(const u in a){const f=zs(a[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(const u in s){const f=s[u][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let g=0;g<f;++g){const m=[];for(let E=0;E<s[u].length;++E)m.push(s[u][E][g]);const M=zs(m);if(!M)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(M)}}return c}function zs(e){let t,n,i,r=-1,a=0;for(let p=0;p<e.length;++p){const u=e[p];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=u.itemSize),n!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=u.count*n}const s=new t(a),o=new Ft(s,n,i);let c=0;for(let p=0;p<e.length;++p){const u=e[p];if(u.isInterleavedBufferAttribute){const f=c/n;for(let g=0,m=u.count;g<m;g++)for(let M=0;M<n;M++){const E=u.getComponent(g,M);o.setComponent(g+f,M,E)}}else s.set(u.array,c);c+=u.count*n}return r!==void 0&&(o.gpuType=r),o}function An(e,t){return e.map(([n,i])=>t.toLocal({lat:n,lon:i}))}const Ws=new Map;let Sr=null;const Mr=(e="none")=>({buildings:[],roads:[],source:e});function Xp(e,t,n){return n.areas.find(i=>t>=i.bbox[0]&&e>=i.bbox[1]&&t<=i.bbox[2]&&e<=i.bbox[3])}function Fn(e){if(!e)return 0;const t=e.trim().replace(",",".").match(/^([+-]?(?:\d+(?:\.\d*)?|\.\d+))\s*(m|meters?|ft|feet|foot|')?$/i);if(!t)return 0;const n=Number(t[1]);return Number.isFinite(n)?n*(/^(ft|feet|foot|')$/i.test(t[2]??"")?.3048:1):0}function qp(e,t=0){const n=Fn(e.height)||Fn(e["building:height"]),i=Number.parseFloat(e["building:levels"]??e.levels??""),r=Number.isFinite(i)&&i>0?i*3.2:0,a=Fn(e["roof:height"]),s=n>0?n:r>0?r+a:Yp(e,t),o=Fn(e.min_height)||Fn(e["building:min_height"]);return{height:s,minHeight:o,source:n>0?"mapped height":r>0?"levels estimate":"type estimate"}}function zo(e){const t=(e.building??"").toLowerCase(),n=`${e.amenity??""} ${e.shop??""} ${e.office??""} ${e.tourism??""}`.toLowerCase();return/industrial|warehouse|factory|manufacture/.test(`${t} ${e.industrial??""}`)?"industrial":/commercial|retail|office|hotel|apartments|civic|university|public/.test(t)||/hotel|motel|townhall|library|school|college|university|hospital|commercial|retail/.test(n)?"commercial":/house|residential|detached|terrace|semidetached_house|bungalow/.test(t)||/residential/.test(e["building:use"]??"")?"residential":"other"}function Yp(e,t){switch(zo(e)){case"commercial":return 14;case"industrial":return 8;case"residential":return 7.5;default:return t>1600?18:t>500?12:t>120?7:4.5}}function Ln(e){const t=(e.highway??"").toLowerCase();return!t||e.tunnel&&e.tunnel!=="no"||e.bridge&&e.bridge!=="no"?null:/^(motorway|motorway_link|trunk|trunk_link|primary|primary_link|secondary|secondary_link)$/.test(t)?"major":/^(residential|tertiary|tertiary_link|unclassified|living_street|service|road)$/.test(t)?"street":t==="track"?"track":/^(path|footway|bridleway|cycleway|pedestrian|steps)$/.test(t)?/dirt|gravel|ground|earth|sand|mud/.test(e.surface??"")?"track":"path":null}function Wo(e,t=Ln(e)){const n=Fn(e.width);if(n>0)return ot.clamp(n,.8,18);const i=(e.surface??"").toLowerCase();return t==="major"?9:t==="street"?5.5:t==="path"?/^(steps|footway)$/.test(e.highway??"")?1.8:2.4:t==="track"?/gravel|dirt|ground|earth|sand|mud/.test(i)?3.4:2.6:0}function Kp(e,t,n,i=24){const r=[],a=[];for(const y of e){const A=(y.tags["name:en"]??y.tags.name)?.trim();if(!A||!Ln(y.tags)||y.coords.length<2)continue;const D=An(y.coords,t);for(let C=1;C<D.length;C++){const O=D[C-1],W=D[C],q=Math.hypot(W.x-O.x,W.z-O.z);q>1&&a.push({name:A.slice(0,48),ax:O.x,az:O.z,bx:W.x,bz:W.z,length:q})}const U=[0];for(let C=1;C<D.length;C++)U.push(U[C-1]+Math.hypot(D[C].x-D[C-1].x,D[C].z-D[C-1].z));const _=U.at(-1)??0;if(_<2.5)continue;const S=_<70?[_*.5]:Array.from({length:Math.max(1,Math.ceil((_-16)/48))},(C,O)=>Math.min(_-7,8+O*48));for(const C of S){let O=1;for(;O<U.length-1&&U[O]<C;)O++;const W=D[O-1],q=D[O],Z=Math.hypot(q.x-W.x,q.z-W.z)||1,Y=ot.clamp((C-U[O-1])/Z,0,1),le=W.x+(q.x-W.x)*Y,V=W.z+(q.z-W.z)*Y;r.push({name:A.slice(0,48),x:le,z:V,y:n(le,V)+1.45,dx:(q.x-W.x)/Z,dz:(q.z-W.z)/Z,segmentLength:Z})}}if(!r.length)return null;const s=ot.clamp(Math.floor(i),1,64),o=8,c=256,p=48,u=document.createElement("canvas");u.width=o*c,u.height=Math.ceil(s/o)*p;const f=u.getContext("2d");if(!f)return null;const g=new Fo(u);g.colorSpace=aa,g.minFilter=xn,g.generateMipmaps=!0;const m=new Float32Array(s*12),M=new Float32Array(s*8),E=new Uint16Array(s*6);for(let y=0;y<s;y++){const A=y*4;E.set([A,A+1,A+2,A,A+2,A+3],y*6)}const h=new un;h.setAttribute("position",new Ft(m,3)),h.setAttribute("uv",new Ft(M,2)),h.setIndex(new Ft(E,1)),h.setDrawRange(0,0);const l=new sa({map:g,transparent:!0,depthTest:!0,depthWrite:!1,side:It,toneMapped:!1}),T=new ut(h,l);T.name="osm-street-name-atlas",T.renderOrder=3;let w="";const b=(y,A,D=0,U)=>{const _=Math.sin(D),S=Math.cos(D),C=[];let O=0,W=0;const q=L=>ot.clamp(L*.025,.35,3.5);for(const L of a){const re=L.bx-L.ax,j=L.bz-L.az,Ue=ot.clamp(((y-L.ax)*re+(A-L.az)*j)/(L.length*L.length),0,1),de=L.ax+re*Ue,Me=L.az+j*Ue,qe=Math.hypot(de-y,Me-A);if(qe>150)continue;O++;const ke=q(qe),x=Math.max(1,Math.ceil(L.length/ke));for(let d=0;d<=x;d++){const F=d/x,z=L.ax+re*F,Q=L.az+j*F,k=Math.hypot(z-y,Q-A);k<2.5||k>140||!U?.viewport&&(z-y)*_+(Q-A)*S<4||(C.push({name:L.name,x:z,z:Q,y:n(z,Q)+1.05,dx:re/L.length,dz:j/L.length,segmentLength:L.length,priority:1}),W++)}}const Z=[...r,...C].map(L=>{const re=L.x-y,j=L.z-A,Ue=Math.hypot(re,j),de=re*_+j*S;return{item:L,d2:Ue*Ue,ahead:de}}),Y=L=>({dx:L.dx,dz:L.dz}),le=L=>ot.clamp(L.name.length*.38,3.5,10.5),V=U?.viewport?ot.clamp(U.viewport.width*.4,128,176):0,ve=V?V*p/c:0,Ae=Z.filter(L=>L.d2<140**2),Re=Ae.filter(L=>L.d2>((L.item.priority??0)>0?(U?.viewport?2.5:13)**2:22**2)).map(L=>{const re=U?.(L.item.x,L.item.y,L.item.z),j=re?{x:re.x,y:re.y,z:re.z,visible:re.visible}:void 0,Ue=j?(j.z<-1||j.z>1?900:0)+(Math.abs(j.x)>.48?750:0)+(j.y>.35?750:0)+(j.y<-.68?500:0)+Math.abs(j.x)*18+Math.abs(j.y+.22)*24:0;let de;if(j&&V&&U?.viewport&&U.screenFrame){const d=U.screenFrame(L.item.x,L.item.y,L.item.z),F=U(L.item.x+L.item.dx,L.item.y,L.item.z+L.item.dz),z=(F.x-j.x)*U.viewport.width,Q=-(F.y-j.y)*U.viewport.height,k=Math.abs(z)>.02?ot.clamp(Math.atan2(Q,z),-.32,.32):0,xe=[d.right[0]*Math.cos(k)+d.up[0]*Math.sin(k),d.right[1]*Math.cos(k)+d.up[1]*Math.sin(k),d.right[2]*Math.cos(k)+d.up[2]*Math.sin(k)],ee=[d.up[0]*Math.cos(k)-d.right[0]*Math.sin(k),d.up[1]*Math.cos(k)-d.right[1]*Math.sin(k),d.up[2]*Math.cos(k)-d.right[2]*Math.sin(k)],he=V*.5*d.worldPerPixel,ge=ve*.5*d.worldPerPixel,te=(Ee,_e)=>{const ue=U(L.item.x+xe[0]*Ee+ee[0]*_e,L.item.y+xe[1]*Ee+ee[1]*_e,L.item.z+xe[2]*Ee+ee[2]*_e);return{x:ue.x,y:ue.y,z:ue.z}},oe=[te(-he,-ge),te(he,-ge),te(he,ge),te(-he,ge)];de={left:Math.min(...oe.map(Ee=>Ee.x)),right:Math.max(...oe.map(Ee=>Ee.x)),top:Math.max(...oe.map(Ee=>Ee.y)),bottom:Math.min(...oe.map(Ee=>Ee.y))}}const Me=!!j&&j.z>-1&&j.z<1&&Math.abs(j.x)<=1&&Math.abs(j.y)<=1,qe=!U?.viewport||V<=U.viewport.width*.72&&ve<=U.viewport.height*.18,ke=!de||de.left>=-.96&&de.right<=.96&&de.top<=.74&&de.bottom>=-.72&&j.z>-1&&j.z<1;return{...L,screen:j,bounds:de,inFrustum:Me,projectedTextDimensionsValid:qe,fitsViewport:ke,rejectReason:Me?qe?ke?void 0:"viewport-bounds":"text-dimensions":"frustum",score:(j?Math.abs(j.x)*55+Math.abs(j.y+.18)*18:Math.sqrt(L.d2))+Math.sqrt(L.d2)*.04+Ue*3-(L.item.priority??0)*8}}),Ve=Re.filter(L=>L.fitsViewport&&(!L.screen||Math.abs(L.screen.x)<1.02&&L.screen.y>-.94&&L.screen.y<.78)).sort((L,re)=>L.score-re.score);Ve.length;const We=[],je=new Map,Xe=[];let B=0,K=0;for(const{item:L,screen:re}of Ve){if(U&&re&&re.z>-1&&re.z<1&&Math.abs(re.x)<.75&&re.y>-.8&&re.y<.6&&B<8&&(B++,U(L.x,L.y,L.z,!0).visible===!1)){K++;continue}const j=Re.find(ke=>ke.item===L)?.bounds,Ue=U?.viewport?36/U.viewport.width*2:.05,de=U?.viewport?28/U.viewport.height*2:.06;if(j&&Xe.some(ke=>j.left<ke.right+Ue&&j.right>ke.left-Ue&&j.bottom<ke.top+de&&j.top>ke.bottom-de))continue;const Me=L.name.toLocaleLowerCase(),qe=je.get(Me)??[];if(!qe.some(ke=>(ke.x-L.x)**2+(ke.z-L.z)**2<38**2)&&(qe.push(L),je.set(Me,qe),We.push(L),j&&Xe.push(j),We.length>=s))break}const me=[...new Set(We.map(L=>L.name))].sort((L,re)=>L.localeCompare(re)),De=me.join("\0"),ye=new Map(me.map((L,re)=>[L,re]));De!==w&&(f.clearRect(0,0,u.width,u.height),f.font="700 32px Arial, sans-serif",f.textAlign="center",f.textBaseline="middle",f.lineJoin="round",f.lineWidth=8,me.forEach((L,re)=>{const j=re%o*c+c/2,Ue=Math.floor(re/o)*p+p/2;f.strokeStyle="rgba(15,20,22,.96)",f.strokeText(L,j,Ue,c-10),f.fillStyle="rgba(255,255,245,.99)",f.fillText(L,j,Ue,c-10)}),g.needsUpdate=!0,w=De);const Ge=h.getAttribute("position"),ft=h.getAttribute("uv");We.forEach((L,re)=>{const j=Y(L),Ue=n(L.x,L.z)+1.05,de=[L.x,Ue,L.z],Me=U?.screenFrame?.(L.x,Ue,L.z);let qe;if(Re.find(ee=>ee.item===L)?.bounds,Me&&U?.viewport&&V){const ee=U(L.x,Ue,L.z),he=U(L.x+j.dx,Ue,L.z+j.dz),ge=(he.x-ee.x)*U.viewport.width,te=-(he.y-ee.y)*U.viewport.height,oe=Math.abs(ge)>.02?ot.clamp(Math.atan2(te,ge),-.32,.32):0,Ee=[Me.right[0]*Math.cos(oe)+Me.up[0]*Math.sin(oe),Me.right[1]*Math.cos(oe)+Me.up[1]*Math.sin(oe),Me.right[2]*Math.cos(oe)+Me.up[2]*Math.sin(oe)],_e=[Me.up[0]*Math.cos(oe)-Me.right[0]*Math.sin(oe),Me.up[1]*Math.cos(oe)-Me.right[1]*Math.sin(oe),Me.up[2]*Math.cos(oe)-Me.right[2]*Math.sin(oe)],ue=V*.5*Me.worldPerPixel,Fe=ve*.5*Me.worldPerPixel,P=(ie,ce)=>[de[0]+Ee[0]*ie+_e[0]*ce,de[1]+Ee[1]*ie+_e[1]*ce,de[2]+Ee[2]*ie+_e[2]*ce];qe=[P(-ue,-Fe),P(ue,-Fe),P(ue,Fe),P(-ue,Fe)]}else{const ee=le(L),he=.66,ge=j.dx,te=j.dz;qe=[[L.x-ge*ee,Ue-he,L.z-te*ee],[L.x+ge*ee,Ue-he,L.z+te*ee],[L.x+ge*ee,Ue+he,L.z+te*ee],[L.x-ge*ee,Ue+he,L.z-te*ee]]}qe.forEach((ee,he)=>Ge.setXYZ(re*4+he,ee[0],ee[1],ee[2]));const ke=ye.get(L.name),x=ke%o,d=Math.floor(ke/o),F=u.height/p,z=x/o,Q=(x+1)/o,k=1-(d+1)/F,xe=1-d/F;ft.setXY(re*4,z,k),ft.setXY(re*4+1,Q,k),ft.setXY(re*4+2,Q,xe),ft.setXY(re*4+3,z,xe)}),Ge.needsUpdate=!0,ft.needsUpdate=!0,h.setDrawRange(0,We.length*6),h.computeBoundingSphere(),T.userData.labelCount=We.length,T.userData.candidateCount=r.length,T.userData.nearbyCount=Ve.length,T.userData.currentRoadLabels=C.length,T.userData.occludedCount=K,T.userData.labels=We.map(L=>{const re=Y(L),j=Re.find(Ue=>Ue.item===L);return{name:L.name,x:L.x,y:L.y,z:L.z,dx:re.dx,dz:re.dz,screenBounds:j?.bounds}});const R=Re.filter(L=>L.item.name.toLocaleLowerCase()==="center street").sort((L,re)=>L.d2-re.d2).slice(0,80).map(L=>({x:L.item.x,y:L.item.y,z:L.item.z,priority:L.item.priority??0,distance:Math.sqrt(L.d2),screen:L.screen,bounds:L.bounds,inFrustum:L.inFrustum,projectedTextDimensionsValid:L.projectedTextDimensionsValid,fitsViewport:L.fitsViewport,rejectReason:L.rejectReason})),it=Re.filter(L=>L.screen).sort((L,re)=>Math.hypot(L.screen.x,L.screen.y+.18)-Math.hypot(re.screen.x,re.screen.y+.18)).slice(0,24).map(L=>({name:L.item.name,x:L.item.x,z:L.item.z,distance:Math.sqrt(L.d2),screen:L.screen,bounds:L.bounds,rejectReason:L.rejectReason}));T.userData.diagnostics={namedRoadSegments:a.length,roadSegmentsNearPlayer:O,cameraSamples:W,generatedBaseLabels:r.length,generatedCurrentStreetCandidates:C.length,generatedCandidates:Z.length,withinPlayerRange:Ae.length,rejectedTooNear:Ae.length-Re.length,acceptedDistanceRange:Re.length,inCameraFrustum:Re.filter(L=>L.inFrustum).length,rejectedOutsideFrustum:Re.filter(L=>!L.inFrustum).length,rejectedViewportBounds:Re.filter(L=>L.inFrustum&&!L.fitsViewport).length,rejectedProjectedTextDimensions:Re.filter(L=>!L.projectedTextDimensionsValid).length,occlusionTests:B,rejectedOcclusion:K,selectedLabelCount:We.length,drawRange:h.drawRange.count,meshVisible:T.visible,meshInScene:T.parent!==null,labelWidthPx:V,labelHeightPx:ve,centerStreetCandidates:R,bestProjectedCandidates:it}};return T.userData={kind:"osm-street-labels",labelCount:0,candidateCount:r.length,nearbyCount:0,currentRoadLabels:0,occludedCount:0,texture:g,refresh:b},b(0,0,0),T}async function $p(e){Sr||(Sr=fetch("./geo/manifest.json").then(a=>a.ok?a.json():null).catch(()=>null));const t=await Sr;if(!t)return Mr("coverage manifest unavailable");const n=Xp(e.lat,e.lon,t);if(!n)return Mr();const i=Ws.get(n.id);if(i)return i;const r=fetch(`./geo/${n.asset}`).then(async a=>{if(!a.ok)throw new Error(`Geographic package ${n.id} unavailable (${a.status})`);const s=await a.json();return{buildings:s.buildings??[],roads:s.roads??[],source:s.source??n.source,areaId:n.id}}).catch(()=>Mr("geographic package unavailable"));return Ws.set(n.id,r),r}function Mi(e,t){const n=new xt({color:e,roughness:.96,metalness:0});return n.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vRumbleRoadUv;`),i.vertexShader=i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vRumbleRoadUv = uv;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vRumbleRoadUv;
float roadHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float roadNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(roadHash(i),roadHash(i+vec2(1.,0.)),f.x),mix(roadHash(i+vec2(0.,1.)),roadHash(i+vec2(1.,1.)),f.x),f.y);}`);let r="float aggregate=roadNoise(vRumbleRoadUv*vec2(4.8,.075));float grit=roadNoise(vRumbleRoadUv*vec2(78.,13.));float patchNoise=aggregate;diffuseColor.rgb*=.86+aggregate*.18+grit*.045+(patchNoise-.5)*.09;";t==="major"?r+="float edge=1.0-smoothstep(0.012,0.024,min(vRumbleRoadUv.x,1.0-vRumbleRoadUv.x));float dash=step(0.48,fract(vRumbleRoadUv.y/11.0));float center=1.0-smoothstep(0.003,0.009,abs(vRumbleRoadUv.x-0.5));float shoulder=1.0-smoothstep(.026,.04,min(vRumbleRoadUv.x,1.0-vRumbleRoadUv.x));diffuseColor.rgb=mix(diffuseColor.rgb,vec3(0.74,0.67,0.52),edge*0.58);diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*0.72,shoulder*.2);diffuseColor.rgb=mix(diffuseColor.rgb,vec3(0.84,0.81,0.72),center*dash*0.66);":t==="street"?r+="float edge=1.0-smoothstep(0.012,0.03,min(vRumbleRoadUv.x,1.0-vRumbleRoadUv.x));float roadWear=aggregate;float fineWear=grit;diffuseColor.rgb=mix(diffuseColor.rgb,vec3(0.54,0.51,0.45),edge*0.34);diffuseColor.rgb*=.96+roadWear*.055+(fineWear-.5)*.045;":r+="float edge=1.0-smoothstep(0.012,0.045,min(vRumbleRoadUv.x,1.0-vRumbleRoadUv.x));float trackGrain=roadNoise(vRumbleRoadUv*vec2(22.,4.));diffuseColor.rgb*=.88+trackGrain*.22;diffuseColor.rgb=mix(diffuseColor.rgb,vec3(0.56,0.48,0.34),edge*0.25);",i.fragmentShader=i.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
${r}`)},n.customProgramCacheKey=()=>`rumble-road-${t}-surface-v3`,n}const Xs={major:Mi(2698801,"major"),street:Mi(3553338,"street"),path:Mi(7828584,"path"),track:Mi(8413251,"track")},Zp={residential:11705472,commercial:9410456,industrial:7830390,other:10524549};function jp(e,t){const n=new xt({color:t,roughness:e==="commercial"?.66:.82,metalness:e==="commercial"?.1:.025,side:It,emissive:t,emissiveIntensity:.025});return n.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
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
      diffuseColor.rgb*=mix(.95,1.05,roofNoise)*mix(0.96,1.035,roofNoise*(1.0-facadeSide)*0.62);`)},n.customProgramCacheKey=()=>`rumble-building-facade-${e}-v4`,n}const qs=Object.fromEntries(Object.entries(Zp).map(([e,t])=>[e,jp(e,t)]));function Ys(e,t,n){const i=Ln(e.tags);if(!i||e.coords.length<2)return null;const r=An(e.coords,t).filter(m=>Number.isFinite(m.x)&&Number.isFinite(m.z));if(r.length<2)return null;const a=Wo(e.tags,i),s=[],o=[];for(let m=0;m<r.length;m++){const M=r[Math.max(0,m-1)],E=r[Math.min(r.length-1,m+1)],h=E.x-M.x,l=E.z-M.z,T=Math.hypot(h,l)||1;let w=-l/T,b=h/T;if(m>0&&m<r.length-1){const y=r[m-1],A=r[m],D=r[m+1],U=Math.hypot(A.x-y.x,A.z-y.z)||1,_=Math.hypot(D.x-A.x,D.z-A.z)||1,S=-(A.z-y.z)/U-(D.z-A.z)/_,C=(A.x-y.x)/U+(D.x-A.x)/_,O=Math.hypot(S,C)||1;w=S/O,b=C/O;const W=Math.max(.45,Math.abs(w*(-l/T)+b*(h/T))),q=Math.min(a*.9,a*.5/W);s.push(new dt(A.x+w*q,A.z+b*q)),o.push(new dt(A.x-w*q,A.z-b*q))}else s.push(new dt(r[m].x+w*a/2,r[m].z+b*a/2)),o.push(new dt(r[m].x-w*a/2,r[m].z-b*a/2))}const c=[],p=[],u=[0];for(let m=1;m<r.length;m++)u.push(u[m-1]+Math.hypot(r[m].x-r[m-1].x,r[m].z-r[m-1].z));const f=(m,M,E,h)=>{c.push(m.x,n(m.x,m.y)+M,m.y),p.push(E,h)};for(let m=0;m<r.length-1;m++)f(s[m],.1,0,u[m]),f(s[m+1],.1,0,u[m+1]),f(o[m],.1,1,u[m]),f(o[m],.1,1,u[m]),f(s[m+1],.1,0,u[m+1]),f(o[m+1],.1,1,u[m+1]);const g=new un;return g.setAttribute("position",new zi(c,3)),g.setAttribute("uv",new zi(p,2)),{kind:i,geometry:g,width:a}}function Qp(e,t,n=60){let i=n*n,r;for(const a of e){const s=Ln(a.tags);if(!s||s==="path"||a.coords.length<2)continue;const o=An(a.coords,t);for(let c=0;c<o.length-1;c++){const p=o[c],u=o[c+1],f=u.x-p.x,g=u.z-p.z,m=f*f+g*g;if(m<.01)continue;const M=ot.clamp(-(p.x*f+p.z*g)/m,0,1),E=p.x+f*M,h=p.z+g*M,l=E*E+h*h;l<i&&(i=l,r=Math.atan2(f,g))}}return r}class Jp{group=new qt;roadsGroup=new qt;list=[];status={source:"none",buildings:0,roads:0,fallbacks:0,skippedRoads:0,message:"MAP DATA · LOADING"};progress={phase:"idle",complete:0,total:0};loadToken=0;cellSize=256;cells=new Map;visibleBuildings=new Set;collisionBuildings=new Set;roads=[];labels=null;lastLabelUpdate=0;get streetLabelCount(){return Number(this.labels?.userData.labelCount??0)}get activeCollisionCount(){return this.collisionBuildings.size}get sceneryRoads(){return this.roads}get streetLabelPositions(){return this.labels?.userData.labels??[]}get streetLabelAtlasImage(){return this.labels?.userData.texture?.image}get streetLabelGeometryDebug(){const t=this.labels?.geometry,n=t?.getAttribute("position"),i=t?.getAttribute("uv");return{visible:this.labels?.visible,count:this.streetLabelCount,candidateCount:this.labels?.userData.candidateCount,nearbyCount:this.labels?.userData.nearbyCount,currentRoadLabels:this.labels?.userData.currentRoadLabels,occludedCount:this.labels?.userData.occludedCount,drawCount:t?.drawRange.count,positions:n?Array.from(n.array.slice(0,12)):[],uvs:i?Array.from(i.array.slice(0,8)):[],material:this.labels?.material&&this.labels.material.map?.image?{transparent:this.labels.material.transparent,depthTest:this.labels.material.depthTest,opacity:this.labels.material.opacity}:null}}get streetLabelDiagnostics(){return this.labels?.userData.diagnostics??null}updateStreetLabels(t,n,i,r,a=!1){!this.labels||!a&&performance.now()-this.lastLabelUpdate<500||(this.lastLabelUpdate=performance.now(),this.labels.userData.refresh?.(t,n,i,r))}lastCullAt=0;lastCullX=Number.NaN;lastCullZ=Number.NaN;cellKey(t,n){return`${Math.floor(t/this.cellSize)},${Math.floor(n/this.cellSize)}`}updateVisibility(t,n,i=900,r=!1){const a=performance.now();if(!r&&(a-this.lastCullAt<350||Math.hypot(t-this.lastCullX,n-this.lastCullZ)<10))return;this.lastCullAt=a,this.lastCullX=t,this.lastCullZ=n;const s=Math.ceil(i/this.cellSize),o=Math.floor(t/this.cellSize),c=Math.floor(n/this.cellSize),p=new Set;for(let f=o-s;f<=o+s;f++)for(let g=c-s;g<=c+s;g++)for(const m of this.cells.get(`${f},${g}`)??[])p.add(m);const u=i*i;for(const f of[...this.visibleBuildings])!f.broken&&p.has(f)&&(f.x-t)**2+(f.z-n)**2<=u||(f.batch&&f.instanceId!==void 0&&f.batch.setVisibleAt(f.instanceId,!1),this.visibleBuildings.delete(f));for(const f of p)!f.broken&&(f.x-t)**2+(f.z-n)**2<=u&&!this.visibleBuildings.has(f)&&(f.batch&&f.instanceId!==void 0&&f.batch.setVisibleAt(f.instanceId,!0),this.visibleBuildings.add(f))}updateCollisionWindow(t,n,i,r=120,a=!1){if(!i)return;const s=performance.now();if(!a&&s-this.lastCollisionSync<300&&Math.hypot(t-this.lastCollisionX,n-this.lastCollisionZ)<12)return;this.lastCollisionSync=s,this.lastCollisionX=t,this.lastCollisionZ=n;const o=Math.ceil((r+80)/this.cellSize),c=Math.floor(t/this.cellSize),p=Math.floor(n/this.cellSize),u=new Set;for(let g=c-o;g<=c+o;g++)for(let m=p-o;m<=p+o;m++)for(const M of this.cells.get(`${g},${m}`)??[])u.add(M);const f=r+72;for(const g of[...this.collisionBuildings]){const m=Math.hypot(g.w,g.d)*.5;(g.broken||(g.x-t)**2+(g.z-n)**2>(f+m)**2)&&(i.removeBuilding(g),this.collisionBuildings.delete(g))}for(const g of u){if(g.broken||this.collisionBuildings.has(g))continue;const m=Math.hypot(g.w,g.d)*.5;(g.x-t)**2+(g.z-n)**2<=(r+m)**2&&(i.addBuilding(g,g.baseY??0),this.collisionBuildings.add(g))}}lastCollisionSync=0;lastCollisionX=Number.NaN;lastCollisionZ=Number.NaN;async load(t,n,i,r){this.reset(i);const a=this.loadToken;this.progress={phase:"features",complete:0,total:0};const s=await $p(t);if(a!==this.loadToken)return this.status;this.progress={phase:"buildings",complete:0,total:s.buildings.length},this.roads=s.roads;const o=new Map;let c=0;for(const M of s.buildings){this.progress.complete=++c;const E=An(M.coords,r).map(B=>new dt(B.x,B.z));E.length>3&&E[0].distanceToSquared(E[E.length-1])<.01&&E.pop();const h=E.map(B=>B.x),l=E.map(B=>B.y);if(E.length<3)continue;const T=(Math.min(...h)+Math.max(...h))/2,w=(Math.min(...l)+Math.max(...l))/2,b=Math.max(2,Math.max(...h)-Math.min(...h)),y=Math.max(2,Math.max(...l)-Math.min(...l)),A=B=>An(B,r).map(K=>new dt(K.x-T,-(K.z-w))),D=B=>{const K=new Oc;return B.forEach((me,De)=>De?K.lineTo(me.x,me.y):K.moveTo(me.x,me.y)),K.closePath(),K},U=E.map(B=>new dt(B.x-T,-(B.y-w))),_=new Wr;U.forEach((B,K)=>K?_.lineTo(B.x,B.y):_.moveTo(B.x,B.y)),_.closePath();const S=(M.holes??[]).map(A).filter(B=>B.length>=3);for(const B of S)_.holes.push(D(B));const C=zo(M.tags),O=qp(M.tags,b*y),W=O.height,q=new No(_,{depth:1,bevelEnabled:!1,curveSegments:1});q.rotateX(-Math.PI/2),q.scale(1,W,1);const Z=qs[C],Y=new $e(Z.color);if(M.tags["building:colour"]||M.tags.colour)try{Y.set(M.tags["building:colour"]??M.tags.colour)}catch{}const le=new ut(q,Z);le.position.set(T,n(T,w)+O.minHeight,w),le.castShadow=!0,le.receiveShadow=!0,le.userData={kind:"osm-building",osmId:M.id,tags:M.tags,category:C};const V=n(T,w),ve={id:M.id,source:"osm",category:C,mesh:le,x:T,z:w,w:b,d:y,h:W,minHeight:O.minHeight,footprint:E,holes:S.map(B=>B.map(K=>new dt(K.x+T,w-K.y))),tags:M.tags,baseY:V,broken:!1},Ae=new $e;Ae.r=Z.color.r>0?Y.r/Z.color.r:1,Ae.g=Z.color.g>0?Y.g/Z.color.g:1,Ae.b=Z.color.b>0?Y.b/Z.color.b:1;let Re=2166136261;for(const B of String(M.id))Re=Math.imul(Re^B.charCodeAt(0),16777619);const Ve=.91+(Re>>>0)%1e3/1e3*.17;Ae.multiplyScalar(Ve),ve.mesh.userData.instanceColor=Ae,this.list.push(ve);const We=this.cellKey(T,w),je=this.cells.get(We)??[];je.push(ve),this.cells.set(We,je);const Xe=o.get(C)??[];if(Xe.push(ve),o.set(C,Xe),c%128===0&&(await new Promise(B=>setTimeout(B,0)),a!==this.loadToken))return this.status}this.progress.phase="batching";for(const[M,E]of o){const h=E.map(b=>b.mesh.geometry),l=h.reduce((b,y)=>b+y.getAttribute("position").count,0),T=h.reduce((b,y)=>b+(y.index?.count??y.getAttribute("position").count),0),w=new Fc(E.length,l,Math.max(l,T),qs[M]);w.name=`geographic-buildings-${M}`,w.castShadow=!0,w.receiveShadow=!0;for(const b of E){const y=b.mesh;y.updateMatrix();const A=w.addGeometry(y.geometry),D=w.addInstance(A);w.setMatrixAt(D,y.matrix),w.setColorAt(D,y.userData.instanceColor),b.batch=w,b.instanceId=D,b.mesh=w,b.renderVisible=!0,y.geometry.dispose()}w.computeBoundingBox(),w.computeBoundingSphere(),this.group.add(w)}this.progress.phase="colliders",this.progress.complete=0,this.progress.total=this.list.length,this.updateCollisionWindow(0,0,i,120,!0),this.progress.total=this.collisionBuildings.size,this.progress.complete=this.collisionBuildings.size,this.updateVisibility(0,0,900,!0),this.progress.phase="roads",this.progress.complete=0,this.progress.total=s.roads.length;let p=0,u=0;const f={major:[],street:[],path:[],track:[]};let g=0;for(const M of s.roads){this.progress.complete=++g;const E=Ys(M,r,n);if(!E){u++;continue}if(f[E.kind].push({positions:E.geometry.getAttribute("position").array,uvs:E.geometry.getAttribute("uv").array}),E.geometry.dispose(),p++,g%256===0&&(await new Promise(h=>setTimeout(h,0)),a!==this.loadToken))return this.status}for(const M of["major","street","path","track"]){const E=f[M];if(!E.length)continue;const h=E.reduce((D,U)=>D+U.positions.length,0),l=new Float32Array(h),T=new Float32Array(h/3*2);let w=0,b=0;for(const D of E)l.set(D.positions,w),T.set(D.uvs,b),w+=D.positions.length,b+=D.uvs.length;const y=new un;y.setAttribute("position",new Ft(l,3)),y.setAttribute("uv",new Ft(T,2)),y.computeVertexNormals();const A=new ut(y,Xs[M]);A.receiveShadow=!0,A.name=`osm-road-${M}`,A.userData={kind:"osm-road",roadWays:E.length},A.frustumCulled=!0,this.roadsGroup.add(A)}this.labels=Kp(s.roads,r,n),this.labels&&this.roadsGroup.add(this.labels);const m=s.buildings.length>0||p>0;return this.progress={phase:"complete",complete:s.roads.length,total:s.roads.length},this.status={source:m?"osm":"none",areaId:s.areaId,buildings:s.buildings.length,roads:p,fallbacks:0,skippedRoads:u,heading:Qp(s.roads,r),message:m?`OSM MAP · ${s.buildings.length} BUILDINGS · ${p} STREET/PATH LINES`:s.source==="none"?"TERRAIN ONLY · NO PACKAGED MAP DATA":"MAP DATA PACKAGE UNAVAILABLE · TERRAIN ONLY"},this.status}nearestStreetName(t,n,i,r=45){let a=r*r,s="";for(const o of this.roads){const c=o.tags["name:en"]??o.tags.name;if(!c||!Ln(o.tags)||Ln(o.tags)==="path")continue;const p=An(o.coords,i);for(let u=0;u<p.length-1;u++){const f=p[u],g=p[u+1],m=g.x-f.x,M=g.z-f.z,E=m*m+M*M;if(E<.01)continue;const h=ot.clamp(((t-f.x)*m+(n-f.z)*M)/E,0,1),l=f.x+m*h,T=f.z+M*h,w=(l-t)**2+(T-n)**2;w<a&&(a=w,s=c)}}return s}addFixtureRoad(t,n){const i=[-12,140].map(s=>{const o=t.toGeo({x:0,z:s});return[o.lat,o.lon]}),r=Ys({tags:{highway:"track",surface:"dirt",width:"4"},coords:i},t,n);if(!r)return null;r.geometry.computeVertexNormals();const a=new ut(r.geometry,Xs.track);return a.name="fixture-dirt-track",a.userData={kind:"fixture-road",source:"fixture"},this.roadsGroup.add(a),a}addPracticeCourse(t,n){return this.list.some(i=>i.source==="fallback")?0:(this.addBarriers(t,n),this.status.fallbacks=this.list.filter(i=>i.source==="fallback").length,this.status.fallbacks)}addBarriers(t,n){const i=new xt({color:13132085,roughness:.8});for(let r=0;r<4;r++)for(let a=-2;a<=2;a++){if((r+a)%3===0)continue;const s=3+(r*7+a*11+30)%3,o=3,c=2.5+(r*13+a*5+40)%3,p=a*5,u=28+r*9,f=new ut(new cn(s,c,o),i.clone());f.position.set(p,t(p,u)+c/2,u),f.castShadow=!0,f.receiveShadow=!0,f.userData={kind:"destructible-barrier",ownedMaterial:!0},this.group.add(f);const g={id:`practice-${r}-${a}`,source:"fallback",category:"practice",mesh:f,x:p,z:u,w:s,d:o,h:c,broken:!1};g.baseY=t(p,u),this.list.push(g),n?.addBuilding(g,g.baseY)}}addFixtureBuilding(t,n,i,r,a,s={w:7,d:6,h:9}){const{w:o,d:c,h:p}=s,u=new cn(o,p,c),f=new xt({color:11705472,roughness:.9}),g=r(n,i),m=new ut(u,f);m.position.set(n,g+p/2,i),m.castShadow=!0,m.receiveShadow=!0,m.userData.ownedMaterial=!0,m.userData={kind:"local-test-fixture",fixtureId:t},this.group.add(m);const M={id:t,source:"fixture",category:p>18?"commercial":"residential",mesh:m,x:n,z:i,w:o,d:c,h:p,baseY:g,broken:!1};return this.list.push(M),a?.addBuilding(M,g),M}break(t){return t.broken||t.mesh.parent!==this.group?!1:(t.broken=!0,this.visibleBuildings.delete(t),t.batch&&t.instanceId!==void 0?t.batch.setVisibleAt(t.instanceId,!1):(this.group.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.userData.ownedMaterial&&(Array.isArray(t.mesh.material)?t.mesh.material.forEach(n=>n.dispose()):t.mesh.material.dispose())),!0)}reset(t){this.loadToken++;for(const n of this.collisionBuildings)t?.removeBuilding(n);this.collisionBuildings.clear();for(const n of this.list)n.batch||n.mesh.geometry.dispose();for(const n of[...this.group.children]){this.group.remove(n);const i=n;i.geometry?.dispose(),i.userData.ownedMaterial&&(Array.isArray(i.material)?i.material.forEach(r=>r.dispose()):i.material?.dispose())}for(const n of this.roadsGroup.children){this.roadsGroup.remove(n);const i=n;i.geometry.dispose(),i===this.labels&&(i.userData.texture?.dispose(),i.material.dispose())}this.labels=null,this.roads=[],this.lastLabelUpdate=0,this.lastCollisionSync=0,this.lastCollisionX=Number.NaN,this.lastCollisionZ=Number.NaN,this.list=[],this.cells.clear(),this.visibleBuildings.clear(),this.lastCullAt=0,this.lastCullX=Number.NaN,this.lastCullZ=Number.NaN,this.status={source:"none",buildings:0,roads:0,fallbacks:0,skippedRoads:0,message:"MAP DATA · LOADING"},this.progress={phase:"idle",complete:0,total:0}}}const Er=34,Ks=e=>{let t=2166136261;for(const n of e)t=Math.imul(t^n.charCodeAt(0),16777619);return t>>>0},mt=e=>{let t=e>>>0;return t=Math.imul(t^t>>>16,73244475),t=Math.imul(t^t>>>16,73244475),((t^t>>>16)>>>0)/4294967296},em=(e,t,n)=>{const i=n.bx-n.ax,r=n.bz-n.az,a=i*i+r*r,s=a>1e-6?ot.clamp(((e-n.ax)*i+(t-n.az)*r)/a,0,1):0;return(e-(n.ax+i*s))**2+(t-(n.az+r*s))**2};function tm(e,t,n,i,r,a,s){const o=`${e.name} ${e.terrain??""}`.toLowerCase(),c=/moab|grand canyon|sahara|utah|arizona|desert/.test(o),p=/mount kisco|westchester|forest|woodland|green hills/.test(o);if(!c&&!p)return[];const u=[];for(const T of r){const w=Ln(T.tags);if(!w)continue;const b=An(T.coords,i),y=Wo(T.tags,w)*.5+7;for(let A=1;A<b.length;A++)u.push({ax:b[A-1].x,az:b[A-1].z,bx:b[A].x,bz:b[A].z,clearance:y})}const f=a.map(T=>({minX:T.x-T.w*.5-4,maxX:T.x+T.w*.5+4,minZ:T.z-T.d*.5-4,maxZ:T.z+T.d*.5+4})),g=Ks(`${e.name}:${e.lat.toFixed(4)}:${e.lon.toFixed(4)}`),m=[],M=Math.ceil(560/Er),E=24**2,h=560**2;for(let T=-M;T<=M;T++)for(let w=-M;w<=M;w++){const b=Ks(`${g}:${w}:${T}`),y=t+(w+.5+(mt(b)-.5)*.55)*Er,A=n+(T+.5+(mt(b^2654435769)-.5)*.55)*Er,D=(y-t)**2+(A-n)**2;if(D<E||D>h||mt(b^2246822507)>(c?.58:.5)||f.some(_=>y>=_.minX&&y<=_.maxX&&A>=_.minZ&&A<=_.maxZ)||u.some(_=>em(y,A,_)<_.clearance**2))continue;const U=c?mt(b^3266489909)<.52?"rock":"shrub":mt(b^668265263)<.62?"tree":"shrub";m.push({x:y,z:A,kind:U,scale:.72+mt(b^374761393)*.82,yaw:mt(b^3550635116)*Math.PI*2,seed:b})}const l=s==="low"?260:s==="medium"?440:680;return m.sort((T,w)=>(T.x-t)**2+(T.z-n)**2-((w.x-t)**2+(w.z-n)**2)),m.slice(0,l)}class nm{group=new qt;quality="low";points=[];lastCell="";frame=null;groundAt=null;roads=[];buildings=[];center={x:0,z:0};place=null;total=0;capacity=680;rockMesh;shrubMesh;trunkMesh;canopyMesh;matrix=new Nt;position=new ne;scale=new ne;quaternion=new Bt;color=new $e;constructor(){const t=new Xr(.5,1);t.computeVertexNormals();const n=new Xr(.5,1);n.computeVertexNormals();const i=new Di(.09,.16,1,7,1,!1),r=[new ds(.82,1.55,7,2),new ds(.62,1.15,7,2)];r[0].translate(0,.5,0),r[1].translate(0,1.25,0);const a=Nn(r,!1);r.forEach(o=>o.dispose());const s=(o,c,p)=>{const u=new Jt(o,new xt({color:c,roughness:.94,metalness:0,flatShading:!0}),this.capacity);return u.count=0,u.name=p,u.castShadow=!1,u.receiveShadow=!1,u.frustumCulled=!0,this.group.add(u),u};this.rockMesh=s(t,16777215,"scenery-desert-rocks"),this.shrubMesh=s(n,16777215,"scenery-low-shrubs"),this.trunkMesh=s(i,16777215,"scenery-tree-trunks"),this.canopyMesh=s(a,16777215,"scenery-tree-canopies")}setLocation(t,n,i,r,a){this.place=t,this.frame=n,this.groundAt=i,this.roads=r,this.buildings=a,this.lastCell="",this.refresh(0,0,!0)}setQuality(t){this.quality=t,this.place&&(this.lastCell="",this.refresh(this.center.x,this.center.z,!0))}update(t,n){if(!this.place||!this.frame||!this.groundAt)return;`${Math.floor(t/240)},${Math.floor(n/240)}`!==this.lastCell&&this.refresh(t,n,!0)}refresh(t,n,i){!this.place||!this.frame||!this.groundAt||!i&&!this.points.length||(this.center={x:t,z:n},this.lastCell=`${Math.floor(t/240)},${Math.floor(n/240)}`,this.points=tm(this.place,t,n,this.frame,this.roads,this.buildings,this.quality),this.populate())}populate(){if(!this.groundAt)return;let t=0,n=0,i=0;const r=a=>this.groundAt(a.x,a.z);for(const a of this.points){const s=r(a),o=a.scale;if(a.kind==="rock")this.position.set(a.x,s+.38*o,a.z),this.quaternion.setFromEuler(new Wt(a.yaw*.23,a.yaw,a.yaw*.17)),this.scale.set(o*(1.1+mt(a.seed)*2.2),o*(.55+mt(a.seed^11)*.9),o*(1+mt(a.seed^21)*1.9)),this.matrix.compose(this.position,this.quaternion,this.scale),this.rockMesh.setMatrixAt(t,this.matrix),this.color.setHSL(.075+mt(a.seed^31)*.025,.22,.35+mt(a.seed^41)*.2),this.rockMesh.setColorAt(t++,this.color);else if(a.kind==="shrub")this.position.set(a.x,s+.32*o,a.z),this.quaternion.setFromAxisAngle(new ne(0,1,0),a.yaw),this.scale.set(o*1.25,o*(.55+mt(a.seed^51)*.55),o*1.1),this.matrix.compose(this.position,this.quaternion,this.scale),this.shrubMesh.setMatrixAt(n,this.matrix),this.color.setHSL(.23+mt(a.seed^61)*.09,.3,.22+mt(a.seed^71)*.15),this.shrubMesh.setColorAt(n++,this.color);else{const c=3.5+o*(2+mt(a.seed^81)*3);this.position.set(a.x,s+c*.27,a.z),this.quaternion.setFromAxisAngle(new ne(0,1,0),a.yaw),this.scale.setScalar(o),this.scale.y=c*.56,this.matrix.compose(this.position,this.quaternion,this.scale),this.trunkMesh.setMatrixAt(i,this.matrix),this.position.y=s+c*.48,this.scale.set(o*(1.5+mt(a.seed^91)*.55),c*.62,o*(1.5+mt(a.seed^101)*.55)),this.matrix.compose(this.position,this.quaternion,this.scale),this.canopyMesh.setMatrixAt(i,this.matrix),this.color.setHSL(.27+mt(a.seed^111)*.07,.36,.2+mt(a.seed^121)*.12),this.canopyMesh.setColorAt(i,this.color),this.color.setHSL(.09,.22,.22+mt(a.seed^131)*.08),this.trunkMesh.setColorAt(i++,this.color)}}this.rockMesh.count=t,this.shrubMesh.count=n,this.trunkMesh.count=i,this.canopyMesh.count=i;for(const a of[this.rockMesh,this.shrubMesh,this.trunkMesh,this.canopyMesh])a.instanceMatrix.needsUpdate=!0,a.instanceColor&&(a.instanceColor.needsUpdate=!0),a.computeBoundingSphere();this.total=t+n+i}get instanceCount(){return this.total}clear(){this.points=[],this.total=0;for(const t of[this.rockMesh,this.shrubMesh,this.trunkMesh,this.canopyMesh])t.count=0;this.lastCell=""}dispose(){this.group.clear();for(const t of[this.rockMesh,this.shrubMesh,this.trunkMesh,this.canopyMesh])t.geometry.dispose(),t.material.dispose();this.points=[],this.total=0,this.roads=[],this.buildings=[],this.place=null,this.frame=null,this.groundAt=null}}const Yn=new ne;function Dt(e,t,n,i,r,a){const s=2*Math.PI*r/4,o=Math.max(a-2*r,0),c=Math.PI/4;Yn.copy(t),Yn[i]=0,Yn.normalize();const p=.5*s/(s+o),u=1-Yn.angleTo(e)/c;return Math.sign(Yn[n])===1?u*p:o/(s+o)+p+p*(1-u)}class ua extends cn{constructor(t=1,n=1,i=1,r=2,a=.1){const s=r*2+1;if(a=Math.min(t/2,n/2,i/2,a),super(1,1,1,s,s,s),this.type="RoundedBoxGeometry",this.parameters={width:t,height:n,depth:i,segments:r,radius:a},s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new ne,p=new ne,u=new ne(t,n,i).divideScalar(2).subScalar(a),f=this.attributes.position.array,g=this.attributes.normal.array,m=this.attributes.uv.array,M=f.length/6,E=new ne,h=.5/s;for(let l=0,T=0;l<f.length;l+=3,T+=2)switch(c.fromArray(f,l),p.copy(c),p.x-=Math.sign(p.x)*h,p.y-=Math.sign(p.y)*h,p.z-=Math.sign(p.z)*h,p.normalize(),f[l+0]=u.x*Math.sign(c.x)+p.x*a,f[l+1]=u.y*Math.sign(c.y)+p.y*a,f[l+2]=u.z*Math.sign(c.z)+p.z*a,g[l+0]=p.x,g[l+1]=p.y,g[l+2]=p.z,Math.floor(l/M)){case 0:E.set(1,0,0),m[T+0]=Dt(E,p,"z","y",a,i),m[T+1]=1-Dt(E,p,"y","z",a,n);break;case 1:E.set(-1,0,0),m[T+0]=1-Dt(E,p,"z","y",a,i),m[T+1]=1-Dt(E,p,"y","z",a,n);break;case 2:E.set(0,1,0),m[T+0]=1-Dt(E,p,"x","z",a,t),m[T+1]=Dt(E,p,"z","x",a,i);break;case 3:E.set(0,-1,0),m[T+0]=1-Dt(E,p,"x","z",a,t),m[T+1]=1-Dt(E,p,"z","x",a,i);break;case 4:E.set(0,0,1),m[T+0]=1-Dt(E,p,"x","y",a,t),m[T+1]=1-Dt(E,p,"y","x",a,n);break;case 5:E.set(0,0,-1),m[T+0]=Dt(E,p,"x","y",a,t),m[T+1]=1-Dt(E,p,"y","x",a,n);break}}static fromJSON(t){return new ua(t.width,t.height,t.depth,t.segments,t.radius)}}const $s=["front-left","front-right","rear-left","rear-right"],Zs=[{x:-1.22,z:1.22},{x:1.22,z:1.22},{x:-1.22,z:-1.25},{x:1.22,z:-1.25}];class im{root=new qt;wheels=[];frontWheels=[];suspension=[];body;opts;model=new qt;materials;parts={paint:[],dark:[],chrome:[],glass:[],tire:[],light:[],tail:[]};wheelSprings;wheelShocks;shockRods;axleLinks;workMatrix=new Nt;workQuaternion=new Bt;workPosition=new ne;workScale=new ne;constructor(t={color:"#d84924",scale:1}){this.opts=t,this.root.scale.setScalar(t.scale),this.model.position.y=-1.65,this.root.add(this.model),this.body=new qt,this.model.add(this.body),this.makeMaterials(),this.buildChassisAndBody(),this.buildWheels(),this.finishBodyBatches()}makePaintMaterial(){const n=new Uint8Array(16384);let i=1297702388;for(let s=0;s<4096;s++){i=Math.imul(i,1664525)+1013904223>>>0;const o=168+(i>>>24)*.34;n[s*4]=n[s*4+1]=n[s*4+2]=o,n[s*4+3]=255}const r=new Bc(n,64,64,Xt);r.wrapS=r.wrapT=So,r.repeat.set(5,5),r.minFilter=xn,r.magFilter=bn,r.generateMipmaps=!0,r.needsUpdate=!0;const a=new fs({color:this.opts.color,metalness:.3,roughness:.3,roughnessMap:r,clearcoat:.76,clearcoatRoughness:.17});return a.name="Rumble Roam metallic clearcoat paint",a}makeMaterials(){this.materials={paint:this.makePaintMaterial(),dark:new xt({color:1382939,metalness:.28,roughness:.68}),chrome:new xt({color:12041920,metalness:.78,roughness:.24}),glass:new fs({color:6523801,metalness:.16,roughness:.2,transparent:!0,opacity:.82,clearcoat:.9,side:It,depthWrite:!1}),tire:new xt({color:1053204,roughness:.94}),light:new xt({color:16770464,emissive:16754230,emissiveIntensity:1.15,roughness:.2}),tail:new xt({color:11999506,emissive:16717323,emissiveIntensity:.85,roughness:.28})}}boxGeometry(t,n,i,r,a,s,o=.025,c){const p=new ua(t,n,i,4,Math.min(o,t*.24,n*.24,i*.24)),u=c?new Bt().setFromEuler(c):new Bt;return p.applyMatrix4(new Nt().compose(new ne(r,a,s),u,new ne(1,1,1))),p}addBox(t,n,i,r,a,s,o,c=.025,p){this.parts[t].push(this.boxGeometry(n,i,r,a,s,o,c,p))}addSideShape(t,n,i,r=.045){const a=new No(t,{depth:r,bevelEnabled:!1,curveSegments:8});a.rotateY(n<0?-Math.PI/2:Math.PI/2),a.translate(n*1.11,0,0),this.parts[i].push(a)}profileShape(){const t=new Wr;return t.moveTo(-2.02,1.28),t.lineTo(-2.02,1.78),t.lineTo(-1.53,1.86),t.lineTo(-1.34,2.77),t.lineTo(-.91,3.04),t.lineTo(.29,3.04),t.lineTo(.65,2.14),t.lineTo(1.2,1.98),t.lineTo(2.03,1.77),t.lineTo(2.03,1.2),t.quadraticCurveTo(1.22,2.16,.38,1.2),t.lineTo(-.4,1.2),t.quadraticCurveTo(-1.25,2.16,-2.08,1.2),t.lineTo(-2.02,1.28),t.closePath(),t}sideWindow(t,n,i,r){const a=new Wr;return a.moveTo(t,n),a.lineTo(t+.12,r),a.lineTo(i-.1,r),a.lineTo(i,n),a.closePath(),a}buildChassisAndBody(){this.addBox("dark",1.75,.22,3.55,0,1.3,-.02,.055);for(const c of[-.9,.9])this.addBox("dark",.17,.2,3.7,c,1.23,-.02,.045);for(const c of[-1.38,-.2,1.16])this.addBox("chrome",2,.11,.13,0,1.21,c,.025);this.addBox("dark",1.2,.08,.95,0,1.14,.1,.025),this.addBox("paint",2.12,.46,1.27,0,1.76,1.15,.09),this.addBox("paint",1.93,.16,1.48,0,3,-.34,.065),this.addBox("paint",1.78,.96,1.24,0,2.43,-.36,.08);const t=this.profileShape();for(const c of[-1,1])this.addSideShape(t,c,"paint",.055),this.addSideShape(this.sideWindow(-1.19,2.32,-.53,2.8),c,"glass",.018),this.addSideShape(this.sideWindow(-.43,2.32,.16,2.8),c,"glass",.018),this.addBox("chrome",.035,.045,.76,c*1.17,2.2,-.17,.012),this.addBox("chrome",.04,.035,.19,c*1.18,2.05,-.24,.01),this.addBox("dark",.075,.22,1.05,c*1.12,1.31,-.05,.026);this.addBox("glass",1.56,.68,.045,0,2.56,.48,.012,new Wt(-.48,0,0)),this.addBox("glass",1.48,.52,.04,0,2.55,-1.02,.012,new Wt(.18,0,0)),this.addBox("chrome",1.75,.055,.12,0,3.08,-.34,.02),this.addBox("dark",1.4,.08,.95,0,1.64,-1.42,.02);for(const c of[-.76,.76])this.addBox("paint",.12,.34,1.02,c,1.79,-1.4,.035);this.addBox("paint",1.48,.38,.13,0,1.77,-1.93,.035);for(let c=0;c<5;c++)this.addBox("chrome",1.25,.018,.024,0,1.69,-1.78+c*.18,.004);this.addBox("chrome",2.22,.2,.22,0,1.47,1.96,.045),this.addBox("dark",1.16,.38,.055,0,1.83,1.94,.012),this.addBox("chrome",1.28,.045,.07,0,2.05,1.95,.012),this.addBox("chrome",1.28,.045,.07,0,1.61,1.95,.012);for(let c=0;c<9;c++)this.addBox("dark",.025,.34,.035,-.5+c*.125,1.83,1.98,.008);this.addBox("dark",.22,.11,.07,0,1.72,2.01,.012),this.addBox("chrome",2.12,.14,.2,0,1.52,-2,.035),this.addBox("chrome",1.95,.055,.14,0,1.68,-2,.015),this.addBox("dark",1.08,.21,.035,0,1.82,-2.015,.018),this.addBox("chrome",.62,.035,.025,0,1.83,-2.041,.009),this.addBox("chrome",.56,.14,.025,0,1.47,-2.075,.018),this.addBox("dark",.46,.075,.028,0,1.47,-2.092,.01);for(let c=-3;c<=3;c++)this.addBox("dark",.018,.17,.02,c*.13,1.82,-2.04,.005);for(const c of[-.82,.82])this.addBox("dark",.48,.29,.09,c,1.94,1.93,.035),this.addBox("light",.34,.19,.045,c,1.95,1.99,.035),this.addBox("light",.14,.08,.035,c,1.72,2,.018),this.addBox("dark",.3,.28,.08,c,1.82,-2.02,.025),this.addBox("tail",.22,.22,.055,c,1.83,-2.075,.035);for(const c of[-.69,.69])this.addBox("paint",.08,.055,.83,c,2.02,1.13,.025),this.addBox("chrome",.035,.025,.63,c*1.7,1.9,-.36,.01);for(const c of[-1.1,.46])this.addBox("dark",.05,.86,.06,0,2.51,c,.018);for(let c=-2;c<=2;c++)this.addBox("light",.14,.13,.08,c*.36,3.14,-.25,.06);this.addBox("dark",1.34,.12,.54,0,2.12,.31,.045),this.addBox("dark",.13,.56,.1,0,2.37,.35,.025);for(const c of[-.43,.43])this.addBox("dark",.44,.12,.48,c,1.93,-.15,.045),this.addBox("dark",.43,.45,.13,c,2.17,-.35,.055),this.addBox("chrome",.035,.52,.045,c*1.15,2.35,.42,.012),this.addBox("dark",.19,.13,.25,c*1.22,2.5,.42,.035);for(let c=0;c<7;c++)this.addBox("dark",.09,.045,.32,-.66+c*.22,2.02,1.12,.015);const n=[];for(const c of[-1.17,1.17])for(const p of[-1.25,1.22]){const u=new kc(new ne(c,1.26,p-.91),new ne(c,2.14,p),new ne(c,1.26,p+.91));n.push(new ur(u,20,.06,7,!1))}const i=Nn(n,!1);n.forEach(c=>c.dispose()),this.body.add(new ut(i,this.materials.dark));const a=[-1,1].map(c=>new hs([new ne(c*.86,1.65,-1.82),new ne(c*.86,2.85,-1.55),new ne(c*.86,3.2,-.9),new ne(c*.86,3.2,.05),new ne(c*.82,2.2,.98)])).map(c=>new ur(c,24,.035,7,!1)),s=Nn(a,!1);a.forEach(c=>c.dispose()),this.body.add(new ut(s,this.materials.chrome));const o=new ut(new gi(.19,.026,7,24),this.materials.dark);o.position.set(-.43,2.33,.52),this.body.add(o);for(const c of[-1.25,1.22])this.addBox("dark",1.82,.12,.16,0,1.43,c,.025),this.addBox("chrome",1.22,.055,.07,0,1.56,c,.018)}finishBodyBatches(){for(const t of Object.keys(this.parts)){const n=this.parts[t];if(!n.length)continue;const i=Nn(n,!1);if(n.forEach(a=>a.dispose()),!i)continue;const r=new ut(i,this.materials[t]);r.castShadow=!0,r.receiveShadow=!0,r.frustumCulled=!0,this.body.add(r)}this.parts={paint:[],dark:[],chrome:[],glass:[],tire:[],light:[],tail:[]}}cylinderGeometry(t,n,i=24){const r=new Di(t,t,n,i,1,!1);return r.rotateZ(Math.PI/2),r}buildWheels(){const t=new xt({color:2698543,roughness:.9}),n=[],i=[],r=new Di(.82,.82,.61,36,1,!1);r.rotateZ(Math.PI/2),n.push(r);for(const M of[-.29,.29]){const E=new gi(.63,.12,8,36);E.rotateY(Math.PI/2),E.translate(M,0,0),n.push(E);const h=this.cylinderGeometry(.455,.045,28);h.translate(M*1.04,0,0),i.push(h);const l=new gi(.405,.025,8,32);l.rotateY(Math.PI/2),l.translate(M*1.04,0,0),i.push(l);const T=new gi(.735,.018,6,40);T.rotateY(Math.PI/2),T.translate(M*.275,0,0),n.push(T);for(let b=0;b<16;b++){const y=b*Math.PI/8,A=new Di(.026,.034,.035,8,1);A.rotateZ(Math.PI/2),A.applyMatrix4(new Nt().compose(new ne(M*.32,Math.sin(y)*.68,Math.cos(y)*.68),new Bt().setFromEuler(new Wt(y,0,0)),new ne(1,1,1))),n.push(A)}const w=this.cylinderGeometry(.16,.075,18);w.translate(M*1.1,0,0),i.push(w);for(let b=0;b<6;b++){const y=b*Math.PI/3,A=new cn(.065,.07,.29);A.applyMatrix4(new Nt().compose(new ne(M*1.08,Math.cos(y)*.25,Math.sin(y)*.25),new Bt().setFromEuler(new Wt(y,0,0)),new ne(1,1,1))),i.push(A);const D=this.cylinderGeometry(.034,.018,10);D.translate(M*1.1,Math.cos(y)*.19,Math.sin(y)*.19),i.push(D)}}const a=Nn(n,!1);n.forEach(M=>M.dispose());const s=Nn(i,!1);i.forEach(M=>M.dispose());const o=this.cylinderGeometry(.13,3.1,12),c=new xt({color:3422779,metalness:.55,roughness:.48}),p=new Jt(o,c,2);p.castShadow=!0;const u=new Bt().setFromAxisAngle(new ne(0,0,1),Math.PI/2);[-1.25,1.22].forEach((M,E)=>{this.workMatrix.compose(new ne(0,.91,M),u,new ne(1,1,1)),p.setMatrixAt(E,this.workMatrix)}),p.instanceMatrix.needsUpdate=!0,this.model.add(p);const f=[];for(let M=0;M<=96;M++){const E=M/96,h=E*Math.PI*2*8;f.push(new ne(Math.cos(h)*.11,E-.5,Math.sin(h)*.11))}const g=new ur(new hs(f),128,.025,5,!1),m=new xt({color:13817555,metalness:.78,roughness:.32});this.wheelSprings=new Jt(g,m,4),this.wheelSprings.castShadow=!0,this.wheelShocks=new Jt(this.cylinderGeometry(.072,.68,10),c,4),this.wheelShocks.castShadow=!0,this.shockRods=new Jt(this.cylinderGeometry(.025,.62,8),this.materials.chrome,4),this.shockRods.castShadow=!0,this.model.add(this.wheelSprings,this.wheelShocks,this.shockRods);for(let M=0;M<4;M++){const E=Zs[M],h=$s[M],l=new qt;l.position.set(E.x,.92,E.z),l.userData.wheelId=h,this.model.add(l),this.wheels.push(l),M<2&&this.frontWheels.push(l);const T=new ut(a,this.materials.tire);T.castShadow=!0,T.receiveShadow=!0,l.add(T);const w=new ut(s,this.materials.chrome);w.castShadow=!0,l.add(w);const b=new cn(.34,.18,.3),y=new Jt(b,t,48);y.castShadow=!0,y.receiveShadow=!0;let A=0;for(let D=0;D<2;D++)for(let U=0;U<24;U++){const _=U*Math.PI/12+D*Math.PI/24,S=new Bt().setFromEuler(new Wt(_+Math.PI/2,0,D?.16:-.16));this.workMatrix.compose(new ne(D?.16:-.16,Math.sin(_)*.81,Math.cos(_)*.81),S,new ne(1,1,1)),y.setMatrixAt(A++,this.workMatrix)}y.instanceMatrix.needsUpdate=!0,l.add(y)}this.axleLinks=new Jt(this.cylinderGeometry(.055,1,10),c,4),this.axleLinks.castShadow=!0,this.model.add(this.axleLinks),this.updateWheelContacts($s.map((M,E)=>({id:M,x:0,z:0,height:0,contact:!0,compression:.12,extension:0,travel:.55,compressionVelocity:0,compressionDamping:0,reboundDamping:0})),1)}updateWheelContacts(t,n){for(let i=0;i<this.wheels.length;i++){const r=this.wheels[i],a=t.find(f=>f.id===r.userData.wheelId);if(!a)continue;r.position.y=.92+a.compression/n+a.extension/n;const s=Zs[i],o=a.compression/n,c=a.extension/n;this.workPosition.set(s.x*.78,1.05+c*.35-o*.2,s.z),this.workQuaternion.identity(),this.workScale.set(1,Math.max(.5,.72+c-o*.35),1),this.workMatrix.compose(this.workPosition,this.workQuaternion,this.workScale),this.wheelSprings.setMatrixAt(i,this.workMatrix),this.workPosition.y=.99+c*.32-o*.12,this.workScale.set(1,.68+c*.45-o*.2,1),this.workMatrix.compose(this.workPosition,this.workQuaternion,this.workScale),this.wheelShocks.setMatrixAt(i,this.workMatrix),this.workPosition.y=1.13+c*.3-o*.1,this.workScale.set(1,.61+c*.25-o*.1,1),this.workMatrix.compose(this.workPosition,this.workQuaternion,this.workScale),this.shockRods.setMatrixAt(i,this.workMatrix);const p=new Bt().setFromAxisAngle(new ne(0,0,1),Math.PI/2),u=Math.abs(s.x)*.9;this.workPosition.set(s.x*.54,.89+o*.35,s.z),this.workScale.set(1,u,1),this.workMatrix.compose(this.workPosition,p,this.workScale),this.axleLinks.setMatrixAt(i,this.workMatrix)}this.wheelSprings.instanceMatrix.needsUpdate=!0,this.wheelShocks.instanceMatrix.needsUpdate=!0,this.shockRods.instanceMatrix.needsUpdate=!0,this.axleLinks.instanceMatrix.needsUpdate=!0}setColor(t){this.opts.color=t,this.materials.paint.color.set(t)}}function fn(e,t=new ne){return t.set(Math.sin(e),0,Math.cos(e))}function $i(e,t=new ne){return t.set(Math.cos(e),0,-Math.sin(e))}const $r=(e,t,n)=>Math.max(t,Math.min(n,e)),rm=[{id:"front-left",x:-1.22,z:1.22},{id:"front-right",x:1.22,z:1.22},{id:"rear-left",x:-1.22,z:-1.25},{id:"rear-right",x:1.22,z:-1.25}];function xr(e,t,n,i,r=24){const a=Math.cos(t),s=Math.sin(t),o=.55*n,c=.36*n;return rm.map(p=>{const u=e.x+p.x*a+p.z*s,f=e.z-p.x*s+p.z*a,g=i(u,f),m=g+1.65*n+.12*n,M=m-e.y,E=2*Math.sqrt(r/(.12*n));return{id:p.id,x:u,z:f,height:g,travel:o,compression:$r(M,0,o),extension:$r(-M,0,c),contact:M>=-c&&M<=o,compressionVelocity:0,compressionDamping:E*.82,reboundDamping:E*.62}})}function am(e,t,n,i){const r=n/(.12*i);let a=0;for(const s of e){if(s.compression<=0)continue;const o=Math.max(0,s.compression-s.travel+.08*i),c=r*(s.compression+o*2.5),p=$r(s.compressionVelocity,-12,12),u=p>=0?s.compressionDamping:s.reboundDamping,f=(t>=0?s.reboundDamping:s.compressionDamping)*t*.24;a+=Math.max(0,c+u*p-f)}return a/e.length-n}function sm(e){const t=(e[0].height+e[1].height)/2,n=(e[2].height+e[3].height)/2,i=(e[0].height+e[2].height)/2,r=(e[1].height+e[3].height)/2;return{pitch:-Math.atan2(t-n,2.47),roll:Math.atan2(r-i,2.44)}}const br=(e,t,n)=>Math.max(t,Math.min(n,e));function om(e,t,n){return Math.abs(e)>1.25?Math.sign(e):Math.abs(t)>.05?Math.sign(t):n}function lm(e,t,n=!1,i=3.15){const r=Number.isFinite(t)?Math.max(0,t):0,a=n?i*.24:i;return{longitudinal:e.longitudinal,lateral:e.lateral*Math.exp(-a*r)}}function cm(e,t,n,i,r){const a=br(Number.isFinite(i)?i:0,0,.1),o=.52+br(Math.abs(n)/9,0,1)*1.55;return e-br(t,-1,1)*o*a*(r<0?-1:1)}function um(e,t){const n=fn(e),i=$i(e);return{x:n.x*t.longitudinal+i.x*t.lateral,z:n.z*t.longitudinal+i.z*t.lateral}}const Tr=Math.PI*2,Ei=e=>e*Math.PI/180;function da(e,t){return Math.atan2(Math.sin(t-e),Math.cos(t-e))}function xi(e){return Math.abs(da(e,0))}function bi(e,t,n=5.2){const i=1-Math.exp(-n*Math.max(0,t));return e+da(e,0)*i}class dm{airborne=!1;lastPitch=0;lastRoll=0;pitchProgress=0;rollProgress=0;pendingForwardFlips=0;pendingBackwardFlips=0;pendingRolls=0;flightTime=0;flightBonus=0;lastLandingDebug=null;currentPoints=0;bestScore;constructor(t=0){this.bestScore=Math.max(0,Math.floor(t)||0)}update(t){if(!t.grounded){this.airborne?(this.flightTime=Math.max(this.flightTime,t.airtime),this.recordFlipRotation(this.advanceRotation("pitch",t.pitch)),this.pendingRolls+=Math.abs(this.advanceRotation("roll",t.roll))):this.beginFlight(t);const M=this.pendingForwardFlips+this.pendingBackwardFlips,E=M+this.pendingRolls;return this.currentPoints=Math.round(this.flightTime*80)+this.pendingRolls*500+M*600+Math.max(0,E-1)*150+this.flightBonus,null}if(!this.airborne)return null;this.flightTime=Math.max(this.flightTime,t.airtime),this.recordFlipRotation(this.advanceRotation("pitch",t.pitch)),this.pendingRolls+=Math.abs(this.advanceRotation("roll",t.roll));const n=xi(t.pitch)<Ei(65)&&xi(t.roll)<Ei(65),i=t.landingSpeed<=22&&n&&this.flightTime>=.45,r=this.pendingForwardFlips,a=this.pendingBackwardFlips,s=r+a,o=this.pendingRolls,c=this.flightTime;if(this.lastLandingDebug={sample:{...t},airtime:c,rolls:o,flips:s,rollProgress:this.rollProgress,pitchProgress:this.pitchProgress,upright:n,landedWell:i},this.airborne=!1,!i)return this.clearFlight(),null;const p=s+o,u=t.landingSpeed<=5&&xi(t.pitch)<Ei(18)&&xi(t.roll)<Ei(18),f=u?300:100,g=Math.round(c*80)+o*500+s*600+Math.max(0,p-1)*150+f+this.flightBonus;this.currentPoints=g,this.bestScore=Math.max(this.bestScore,g);const m=o>=2?"DOUBLE ROLL":o===1?"BARREL ROLL":s>=2?"DOUBLE FLIP":r?"FRONT FLIP":a?"BACKFLIP":c>=1.25?u?"BIG AIR · PERFECT LANDING":"BIG AIR":u?"PERFECT LANDING":"NICE LANDING";return this.clearFlight(!1),{points:g,rolls:o,flips:s,forwardFlips:r,backwardFlips:a,airtime:c,perfect:u,message:m}}reset(){this.airborne=!1,this.clearFlight()}get isAirborne(){return this.airborne}get rolls(){return this.pendingRolls}get flips(){return this.pendingForwardFlips+this.pendingBackwardFlips}get airtime(){return this.flightTime}awardBonus(t){const n=Math.max(0,Math.floor(t));return n?(this.airborne&&(this.flightBonus+=n),this.currentPoints+=n,this.bestScore+=n,this.currentPoints):this.currentPoints}beginFlight(t){this.clearFlight(),this.airborne=!0,this.lastPitch=t.pitch,this.lastRoll=t.roll,this.flightTime=t.airtime}advanceRotation(t,n){const i=t==="pitch"?this.lastPitch:this.lastRoll,a=(t==="pitch"?this.pitchProgress:this.rollProgress)+da(i,n);t==="pitch"?(this.lastPitch=n,this.pitchProgress=a):(this.lastRoll=n,this.rollProgress=a);const s=Math.trunc(a/Tr);return s&&(t==="pitch"?this.pitchProgress-=s*Tr:this.rollProgress-=s*Tr),s}recordFlipRotation(t){t>0?this.pendingForwardFlips+=t:this.pendingBackwardFlips+=-t}clearFlight(t=!0){this.pitchProgress=0,this.rollProgress=0,this.pendingForwardFlips=0,this.pendingBackwardFlips=0,this.pendingRolls=0,this.flightTime=0,this.flightBonus=0,t&&(this.currentPoints=0)}}class fm{pos=new ne(0,0,0);vel=new ne;yaw=0;pitch=0;roll=0;grounded=!0;nitro=100;airTime=0;speed=0;gravity=24;jumpForce=15;jumpWas=!1;jumpHoldRemaining=0;coyoteRemaining=0;previousCompression=new Map;invertedContactTime=0;contactPitch=0;contactRoll=0;wheelContacts=[];reset(t,n=1){this.pos.set(0,t.heightAt(0,0)+1.65*n,0),this.vel.set(0,0,0),this.yaw=0,this.pitch=0,this.roll=0,this.grounded=!0,this.nitro=100,this.airTime=0,this.jumpWas=!1,this.jumpHoldRemaining=0,this.coyoteRemaining=.1,this.invertedContactTime=0,this.contactPitch=0,this.contactRoll=0,this.wheelContacts=xr(this.pos,this.yaw,n,(i,r)=>t.heightAt(i,r),this.gravity),this.previousCompression=new Map(this.wheelContacts.map(i=>[i.id,i.compression]))}update(t,n,i,r,a){this.gravity=a.gravity,this.jumpForce=a.jump,t=Math.min(t,.04);const s=Math.max(1,Math.ceil(t*120)),o=t/s;for(let c=0;c<s;c++)this.step(o,n,i,a);r.root.position.copy(this.pos),r.root.rotation.order="YXZ",r.root.rotation.set(this.pitch+this.contactPitch,this.yaw,this.roll+this.contactRoll),r.updateWheelContacts(this.wheelContacts,a.scale),r.wheels.forEach(c=>{c.rotation.x-=this.speed*t}),r.frontWheels.forEach(c=>{c.rotation.y=-n.steer*.28})}step(t,n,i,r){const a=r.scale,s=fn(this.yaw),o=n.nitro&&this.nitro>0,c=n.throttle||(n.nitro?n.gear??1:0),p=30*(o?1.7:1),u=26*(o?1.5:1),f=this.vel.dot(s),g=c!==0&&Math.abs(f)>2&&Math.sign(f)!==Math.sign(c);c&&!g&&this.vel.addScaledVector(s,c*u*t);const m=new ne(this.vel.x,0,this.vel.z);if(this.speed=m.length(),o?this.nitro=Math.max(0,this.nitro-22*t):this.nitro=Math.min(100,this.nitro+8*t),this.grounded){const U=om(f,c,n.gear??1);Math.abs(n.steer)>.001&&(this.yaw=cm(this.yaw,n.steer,this.speed,t,U));const _=fn(this.yaw),S=$i(this.yaw);let C={longitudinal:m.dot(_),lateral:m.dot(S)};C=lm(C,t,n.handbrake),C.longitudinal*=Math.exp(-(g?5.5:.72)*t);const O=um(this.yaw,C);m.set(O.x,0,O.z)}else m.multiplyScalar(Math.exp(-.1*t));m.length()>p&&m.setLength(p),this.vel.x=m.x,this.vel.z=m.z;const M=n.jump&&!this.jumpWas&&(this.grounded||this.coyoteRemaining>0);if(M&&(this.vel.y=this.jumpForce,this.grounded=!1,this.coyoteRemaining=0,this.jumpHoldRemaining=.3),this.jumpWas=n.jump,n.jump&&!M&&this.jumpHoldRemaining>0&&this.vel.y>0){const U=Math.min(t,this.jumpHoldRemaining);this.vel.y+=Math.min(12,this.jumpForce*.8)*U,this.jumpHoldRemaining-=U}n.jump||(this.jumpHoldRemaining=0),this.wheelContacts=xr(this.pos,this.yaw,a,(U,_)=>i.heightAt(U,_),this.gravity);for(const U of this.wheelContacts){const _=this.previousCompression.get(U.id)??U.compression;U.compressionVelocity=(U.compression-_)/Math.max(t,1/240)}Math.cos(this.pitch+this.contactPitch)*Math.cos(this.roll+this.contactRoll);const E=this.grounded&&this.invertedContactTime>1.35;if(n.level||E){const U=n.level?5.2:4.2;this.pitch=bi(this.pitch,t,U),this.roll=bi(this.roll,t,U)}else this.grounded||(this.pitch+=n.airPitch*5.4*t,this.roll+=n.airRoll*7.2*t,this.airTime+=t);this.vel.y+=am(this.wheelContacts,this.vel.y,this.gravity,a)*t;const h=this.pos.y;this.pos.addScaledVector(this.vel,t),this.wheelContacts=xr(this.pos,this.yaw,a,(U,_)=>i.heightAt(U,_),this.gravity);for(const U of this.wheelContacts)this.previousCompression.set(U.id,U.compression);const l=this.wheelContacts.filter(U=>U.contact&&U.compression>.015*a).length,T=Math.max(...this.wheelContacts.map(U=>U.height))+1.17*a,w=this.pos.y<T&&this.vel.y<0;w&&(!this.grounded&&this.vel.y<-3&&(this.vel.y=Math.min(1.1,-this.vel.y*.055)),this.pos.y=T);const b=this.grounded;this.grounded=this.vel.y<=1.25&&(l>=2||w),this.grounded?this.coyoteRemaining=.1:b?this.coyoteRemaining=.1:this.coyoteRemaining=Math.max(0,this.coyoteRemaining-t);const y=Math.cos(this.pitch+this.contactPitch)*Math.cos(this.roll+this.contactRoll);this.grounded?(this.vel.y=Math.max(0,this.vel.y),this.airTime=0,this.invertedContactTime=y<.2?this.invertedContactTime+t:0,y>=.2&&!n.level&&(this.pitch=bi(this.pitch,t,3.2),this.roll=bi(this.roll,t,3.2))):this.invertedContactTime=0;const A=sm(this.wheelContacts),D=this.grounded?Math.min(1,t*9):Math.min(1,t*2);this.contactPitch=ot.lerp(this.contactPitch,this.grounded?A.pitch:0,D),this.contactRoll=ot.lerp(this.contactRoll,this.grounded?A.roll:0,D),Number.isFinite(this.pos.y)||(this.pos.y=h)}}function Zr(e){if(!e||typeof e!="object"||!("closest"in e))return!1;const t=e;return typeof t.closest=="function"&&t.closest('input,textarea,select,[contenteditable]:not([contenteditable="false"])')!==null}class hm{pressed=new Set;actions=new Map;pointerDown(t,n){this.pointerUp(t),this.actions.set(t,n),this.pressed.add(n)}pointerUp(t){const n=this.actions.get(t);n!==void 0&&(this.actions.delete(t),[...this.actions.values()].includes(n)||this.pressed.delete(n))}pointerCancel(t){this.pointerUp(t)}lostPointerCapture(t){this.pointerUp(t)}releaseAll(){this.actions.clear(),this.pressed.clear()}}class pm{constructor(t=54,n=.08){this.maxTravel=t,this.deadZone=n}pointerId=null;x=0;y=0;originX=0;originY=0;radius=1;pointerDown(t,n,i,r=this.maxTravel){this.pointerId=t,this.originX=n,this.originY=i,this.radius=Math.max(1,r),this.x=0,this.y=0}pointerMove(t,n,i){if(this.pointerId!==t)return;let r=(n-this.originX)/this.radius,a=(i-this.originY)/this.radius;const s=Math.hypot(r,a);s>1&&(r/=s,a/=s);const o=Math.hypot(r,a);if(o<this.deadZone){this.x=0,this.y=0;return}const c=(o-this.deadZone)/(1-this.deadZone)/o;this.x=r*c,this.y=a*c}pointerUp(t){this.pointerId===t&&this.release()}pointerCancel(t){this.pointerUp(t)}lostPointerCapture(t){this.pointerUp(t)}release(){this.pointerId=null,this.x=0,this.y=0}}function mm(e,t){const n=(...i)=>i.some(r=>e.has(r)||t.has(r));return Number(n("d","arrowright"))-Number(n("a","arrowleft"))}class gm{keys=new Set;pointerButtons=new hm;analog=new pm;gear=1;steeringMode="analog";sensitivity=1;state={throttle:0,steer:0,nitro:!1,jump:!1,level:!1,airPitch:0,airRoll:0,handbrake:!1,gear:1};wasAirborne=!1;requireNeutralForAir=!1;get touches(){return this.pointerButtons.pressed}setGear(t){this.gear=t}toggleGear(){return this.gear=this.gear===1?-1:1,this.gear}setSteeringMode(t){this.steeringMode=t}setSensitivity(t){this.sensitivity=Math.max(.5,Math.min(1.5,t))}constructor(){window.addEventListener("focusin",t=>{Zr(t.target)&&this.releaseAll()}),window.addEventListener("keydown",t=>{if(Zr(t.target)){this.releaseAll();return}[" ","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.key)&&t.preventDefault(),this.keys.add(t.key.toLowerCase())}),window.addEventListener("keyup",t=>this.keys.delete(t.key.toLowerCase())),window.addEventListener("blur",()=>this.releaseAll())}pointerDown(t,n){this.pointerButtons.pointerDown(t,n)}pointerUp(t){this.pointerButtons.pointerUp(t)}pointerCancel(t){this.pointerButtons.pointerCancel(t)}lostPointerCapture(t){this.pointerButtons.lostPointerCapture(t)}releaseAll(){this.keys.clear(),this.pointerButtons.releaseAll(),this.analog.release(),this.state={throttle:0,steer:0,nitro:!1,jump:!1,level:!1,airPitch:0,airRoll:0,handbrake:!1,gear:this.gear},this.wasAirborne=!1,this.requireNeutralForAir=!1}update(t=!1){const n=(...b)=>b.some(y=>this.keys.has(y)||this.touches.has(y)),i=Array.from(navigator.getGamepads?.()??[]).find(b=>b?.connected),r=i?.axes??[],a=b=>i?.buttons[b]?.value??0,s=(n("w","arrowup")?1:0)-(n("s","arrowdown")?1:0),o=n("go"),c=a(7)-a(6)||-Math.sign(Math.abs(r[1]??0)>.18?r[1]:0),p=s||(o?this.gear:0)||c,u=mm(this.keys,this.touches),f=Math.abs(r[0]??0)>.16?r[0]:0,g=this.analog.x,m=this.analog.y,M=Number(this.keys.has("arrowright")||this.touches.has("arrowright"))-Number(this.keys.has("arrowleft")||this.touches.has("arrowleft"));t&&!this.wasAirborne&&(this.requireNeutralForAir=Math.hypot(g,m)>.2||u!==0||Math.abs(f)>.16||M!==0),t||(this.requireNeutralForAir=!1),t&&this.requireNeutralForAir&&Math.hypot(g,m)<.16&&u===0&&Math.abs(f)<=.16&&M===0&&(this.requireNeutralForAir=!1),this.wasAirborne=t;const E=t&&!this.requireNeutralForAir&&this.steeringMode==="analog",h=!t&&this.steeringMode==="analog"?Math.sign(g)*Math.pow(Math.abs(g),1.25)*this.sensitivity:0,l=(n("arrowup")?1:0)-(n("arrowdown")?1:0),T=Number(n("e"))-Number(n("q")),w=n("shift","boost","nitro")||a(1)>.4;return this.state={throttle:p,steer:u||(this.steeringMode==="buttons"?0:h)||f,nitro:w,jump:n(" ","jump")||a(0)>.4,level:n("f","level")||a(3)>.4,airPitch:l||(E?-m:0)||(Math.abs(r[3]??0)>.18?-Math.sign(r[3]):0),airRoll:T||(this.requireNeutralForAir?0:M||(E?g:0)||(Math.abs(r[2]??0)>.18?Math.sign(r[2]):0)),handbrake:n("control")||a(2)>.4,gear:this.gear},this.state}}const Kn=96,wr=160;class vm{group=new qt;dustMesh;burstMesh;particles=[];active=[];freeDust=[];freeBurst=[];activeCount=0;rng=7886388;matrix=new Nt;quat=new Bt;scaleVector=new ne;color=new $e;quality=1;constructor(){const t=new Xr(.5,1),n=new Gc(.5,0);this.dustMesh=this.makeBatch(t,Kn,13875854),this.burstMesh=this.makeBatch(n,wr,16777215),this.dustMesh.name="dust-particle-batch",this.burstMesh.name="impact-particle-batch",this.dustMesh.count=this.burstMesh.count=0,this.group.add(this.dustMesh,this.burstMesh);for(let i=0;i<Kn+wr;i++)this.particles.push({kind:"dust",life:0,max:1,position:new ne,velocity:new ne,rotation:new ne,spin:new ne,scale:1,color:16777215}),this.active.push(0);for(let i=Kn-1;i>=0;i--)this.freeDust.push(i);for(let i=Kn+wr-1;i>=Kn;i--)this.freeBurst.push(i)}makeBatch(t,n,i){const r=new sa({color:i,vertexColors:!0,transparent:!0,depthWrite:!1});r.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute float instanceAlpha;
varying float vParticleAlpha;`),s.vertexShader=s.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vParticleAlpha = instanceAlpha;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying float vParticleAlpha;`),s.fragmentShader=s.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a *= vParticleAlpha;`)},r.customProgramCacheKey=()=>"rumble-particle-shaped-alpha-v2";const a=new Hc(new Float32Array(n),1);return a.setUsage(Vc),t.setAttribute("instanceAlpha",a),new Jt(t,r,n)}rand(){return this.rng=this.rng*1664525+1013904223>>>0,this.rng/4294967296}burst(t,n=18,i=16758605){n=Math.max(1,Math.round(n*this.quality));for(let r=0;r<n;r++){const a=this.freeBurst.pop();if(a===void 0)break;const s=this.particles[a];s.kind="burst",s.life=.45+this.rand()*.8,s.max=.9,s.scale=.16+this.rand()*.26,s.color=i,s.position.copy(t),s.velocity.set((this.rand()-.5)*8,1+this.rand()*7,(this.rand()-.5)*8),s.rotation.set(this.rand()*6,this.rand()*6,this.rand()*6),s.spin.set((this.rand()-.5)*9,(this.rand()-.5)*9,(this.rand()-.5)*9),this.active[this.activeCount++]=a}}dust(t,n){if(n<4||this.rand()>.27*this.quality)return;const i=this.freeDust.pop();if(i===void 0)return;const r=this.particles[i];r.kind="dust",r.life=r.max=.65,r.scale=.36+this.rand()*.3,r.color=13875854,r.position.copy(t),r.velocity.set(this.rand()-.5,.4+this.rand(),this.rand()-.5),r.rotation.set(this.rand()*6,this.rand()*6,this.rand()*6),r.spin.set((this.rand()-.5)*1.5,(this.rand()-.5)*1.5,(this.rand()-.5)*1.5),this.active[this.activeCount++]=i}update(t){let n=0,i=0,r=0;for(let a=0;a<this.activeCount;a++){const s=this.active[a],o=this.particles[s];if(o.life-=t,o.life<=0){(o.kind==="dust"?this.freeDust:this.freeBurst).push(s);continue}o.position.addScaledVector(o.velocity,t),o.rotation.addScaledVector(o.spin,t),o.scale*=1+t*.55;const c=Math.max(0,o.life/o.max*(o.kind==="dust"?.34:.9)),p=o.kind==="dust"?this.dustMesh:this.burstMesh,u=o.kind==="dust"?i++:r++;this.scaleVector.setScalar(o.scale*(o.life/o.max)),this.quat.setFromEuler(new Wt(o.rotation.x,o.rotation.y,o.rotation.z)),this.matrix.compose(o.position,this.quat,this.scaleVector),p.setMatrixAt(u,this.matrix),this.color.setHex(o.color),p.setColorAt(u,this.color),p.geometry.getAttribute("instanceAlpha").setX(u,c),this.active[n++]=s}this.activeCount=n,this.dustMesh.count=i,this.burstMesh.count=r,i&&(this.dustMesh.instanceMatrix.needsUpdate=!0,this.dustMesh.instanceColor.needsUpdate=!0,this.dustMesh.geometry.getAttribute("instanceAlpha").needsUpdate=!0),r&&(this.burstMesh.instanceMatrix.needsUpdate=!0,this.burstMesh.instanceColor.needsUpdate=!0,this.burstMesh.geometry.getAttribute("instanceAlpha").needsUpdate=!0)}get activeParticles(){return this.activeCount}setQuality(t){this.quality=t==="low"?.46:t==="medium"?.72:1}dispose(){this.group.clear();for(const t of[this.dustMesh,this.burstMesh])t.geometry.dispose(),t.material.dispose()}}class _m{group=new qt;mesh;pieces=[];quality="high";seed=1225960503;transform=new Nt;quaternion=new Bt;vector=new ne;scratchColor=new $e;capacity=320;constructor(){const t=new cn(1,1,1),n=new xt({color:16777215,roughness:.88,metalness:.015});this.mesh=new Jt(t,n,this.capacity),this.mesh.name="bounded-building-collapse-batch",this.mesh.count=0,this.mesh.castShadow=!1,this.mesh.receiveShadow=!1,this.mesh.frustumCulled=!1,this.group.add(this.mesh)}random(){return this.seed=this.seed*1664525+1013904223>>>0,this.seed/4294967296}destroy(t,n,i){const r=this.quality==="low"?.5:this.quality==="medium"?.75:1,a=ot.clamp(Math.ceil(t.w/3.3),2,4),s=ot.clamp(Math.ceil(t.h/3.5),2,5),o=Math.max(5,Math.round(a*s*r)),c=Math.min(o,this.capacity-this.pieces.length);if(!c)return 0;const p=Array.isArray(t.mesh.material)?t.mesh.material[0]:t.mesh.material,u=p instanceof xt?p.color:new $e(11705472),f=new ne(n.direction.z,0,-n.direction.x).normalize(),g=new ne(t.x,(t.baseY??t.mesh.position.y-t.h/2)+(t.minHeight??0),t.z);for(let m=0;m<c;m++){const M=m%a,E=Math.floor(m/a)%s,h=new ne(t.w/a*(.78+this.random()*.2),t.h/s*(.78+this.random()*.2),Math.max(.35,t.d*(.22+this.random()*.28))),l=-t.w/2+(M+.5)*t.w/a,T=(E+.5)*t.h/s,w=(this.random()-.5)*Math.max(0,t.d-h.z),b=g.clone().add(new ne(l,T,w)),y=(this.random()-.5)*(2+n.intensity*6),A=2+n.intensity*(4+this.random()*5),D=n.direction.clone().multiplyScalar(A).addScaledVector(f,y);D.y=2.5+n.intensity*(2+this.random()*6)+this.random()*2;const U=u.clone().multiplyScalar(.78+this.random()*.4),_=4.5+this.random()*1.2;this.pieces.push({position:b,velocity:D,size:h,rotation:new Wt(this.random()*2,this.random()*2,this.random()*2),angular:new ne((this.random()-.5)*8,(this.random()-.5)*8,(this.random()-.5)*8),ground:i(b.x,b.z)+.06,life:_,maxLife:_,color:U})}return c}setQuality(t){this.quality=t}clear(){this.pieces.length=0,this.mesh.count=0}update(t){let n=0;for(let i=this.pieces.length-1;i>=0;i--){const r=this.pieces[i];if(r.life-=t,r.life<=0){this.pieces.splice(i,1);continue}r.velocity.y-=18*t,r.position.addScaledVector(r.velocity,t),r.rotation.x+=r.angular.x*t,r.rotation.y+=r.angular.y*t,r.rotation.z+=r.angular.z*t;const a=r.size.y/2;r.position.y<r.ground+a&&(r.position.y=r.ground+a,r.velocity.y<-1?r.velocity.y*=-.19:r.velocity.y=0,r.velocity.x*=.82,r.velocity.z*=.82,r.angular.multiplyScalar(.96));const s=r.life<.45?Math.max(.1,r.life/.45):1;this.vector.copy(r.size).multiplyScalar(s),this.quaternion.setFromEuler(r.rotation),this.transform.compose(r.position,this.quaternion,this.vector),this.mesh.setMatrixAt(n,this.transform),this.scratchColor.copy(r.color),this.mesh.setColorAt(n,this.scratchColor),n++}this.mesh.count=n,n&&(this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0))}get activeCount(){return this.pieces.length}dispose(){this.group.clear(),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.pieces.length=0}}const en=[{id:"super-wreck-roadway",title:"Super Wreck Roadway",artist:"Umplix",album:"Rumble Roam Radio",file:"umplix-super-wreck-roadway-loop.mp3",sourceUrl:"https://opengameart.org/content/super-wreck-roadway",license:"CC0 1.0",durationSeconds:134.405},{id:"hot-roadway-remake",title:"Hot Roadway [Remake]",artist:"MintoDog",album:"Rumble Roam Radio · 160 BPM",file:"mintodog-hot-roadway-remake-160.mp3",sourceUrl:"https://opengameart.org/content/hot-roadway-remake",license:"CC0 1.0",durationSeconds:120.033},{id:"un-desert",title:"Un désert",artist:"Loyalty Freak Music / Komiku",album:"Rumble Roam Radio",file:"komiku-un-desert.mp3",sourceUrl:"https://opengameart.org/content/un-d%C3%A9sert",license:"CC0 1.0",durationSeconds:245.577}],js="Rumble Roam Radio",Sm="./audio/music/";function Mm(e){return`${Sm}${e.file}`}function Ni(e,t=en.length){return!Number.isFinite(e)||t<=0?0:(Math.trunc(e)%t+t)%t}function Em(e,t=en.length,n=Math.random){if(t<=1)return 0;const i=Array.from({length:t},(r,a)=>a).filter(r=>r!==Ni(e,t));return i[Math.min(i.length-1,Math.floor(Math.max(0,Math.min(.999999,n()))*i.length))]}class xm{index=0;shuffled=!1;history=[0];historyPosition=0;get currentIndex(){return this.index}get shuffleEnabled(){return this.shuffled}setShuffle(t){this.shuffled=t}select(t){return this.index=Ni(t),this.history=[this.index],this.historyPosition=0,this.index}next(t=Math.random){let n;return this.historyPosition<this.history.length-1?n=this.history[++this.historyPosition]:(n=this.shuffled?Em(this.index,en.length,t):Ni(this.index+1),this.history.push(n),this.historyPosition=this.history.length-1),this.index=n,n}previous(){return this.historyPosition>0?this.index=this.history[--this.historyPosition]:(this.index=Ni(this.index-1),this.history.unshift(this.index)),this.index}}const Qs=["single","inline2","v_twin","inline3","inline4","flat4","inline5","inline6","v6","flat6","v8_crossplane","v8_flatplane","v10","v12","fiat500"],bm={simulationFrequency:0,fluidSimulationSteps:1,crankThrow:2,momentOfInertia:3,frictionTorque:4,tdc:5,bore:6,rodLength:7,compressionHeight:8,chamberVolume:9,deckHeight:10,intakeRunnerVolume:11,intakeRunnerArea:12,exhaustRunnerVolume:13,exhaustRunnerArea:14,intakeLobeCenter:15,exhaustLobeCenter:16,camAdvance:17,revLimit:18,limiterDuration:19,crankcasePressure:20,starterTorque:21,starterSpeed:22,throttleGamma:23,blowbyK:24,pistonDisplacement:25,intakePlenumVolume:26,intakePlenumArea:27,intakeInputFlowK:28,intakeIdleFlowK:29,intakeRunnerFlowRate:30,intakeRunnerLength:31,intakeIdlePlatePosition:32,intakeVelocityDecay:33,maxBurningEfficiency:34,windageCoefficient:35,starterReleaseSpeed:36,starterTimeout:37},Tm={mass:0,dragCoefficient:1,frontalArea:2,tireRadius:3,rollingResistance:4,finalDrive:5,drivelineEfficiency:6,maxClutchTorque:7,clutchStiffness:8},Xo={volume:0,convolution:1,highFrequencyGain:2,jitter:3,jitterCutoff:4,noise:5,noiseCutoff:6,levelerTarget:7,levelerMaxGain:8,levelerMinGain:9},wm={intake:0,exhaust:1};function Am(e){const t=Qs.indexOf(e);if(t<0)throw new Error(`unknown preset "${e}". Expected one of: ${Qs.join(", ")}`);return t}const Rm=e=>e.startsWith("_");function Ar(e,t,n){const i=[];for(const[r,a]of Object.entries(e||{})){if(Rm(r))continue;const s=t[r];if(s===void 0)throw new Error(`unknown ${n} "${r}"`);if(typeof a!="number"||!Number.isFinite(a))throw new Error(`${n} "${r}" must be a finite number`);i.push([s,a])}return i}function qo(e={}){const t={presetId:Am(e.preset||"v8_crossplane"),params:Ar(e.params,bm,"engine parameter"),audio:Ar(e.audio,Xo,"audio parameter")};if(e.vehicle&&(t.vehicle=Ar(e.vehicle,Tm,"vehicle parameter")),e.gears){if(!Array.isArray(e.gears)||e.gears.length===0)throw new Error("gears must be a non-empty array of ratios, first to top");for(const i of e.gears)if(typeof i!="number"||!Number.isFinite(i)||i<=0)throw new Error(`gear ratio ${i} must be a positive number`);t.gears=e.gears.slice()}if(e.name!==void 0){if(typeof e.name!="string")throw new Error("name must be a string");t.nameBytes=new TextEncoder().encode(e.name)}if(e.portFlow){t.portFlow=[];for(const[i,r]of Object.entries(wm)){const a=e.portFlow[i];if(a){if(!Array.isArray(a)||a.length===0)throw new Error(`portFlow.${i} must be a non-empty array of [lift, scfm]`);for(const s of a){if(!Array.isArray(s)||s.length!==2)throw new Error(`portFlow.${i} entries must be [liftMetres, scfm]`);if(!s.every(o=>typeof o=="number"&&Number.isFinite(o)))throw new Error(`portFlow.${i} entries must be finite numbers`)}t.portFlow.push([r,a.map(s=>s[0]),a.map(s=>s[1]),e.portFlow.filterRadius??0])}}}if(e.cam){const i=e.cam;t.cam=[i.intakeDuration??0,i.intakeLift??0,i.exhaustDuration??i.intakeDuration??0,i.exhaustLift??i.intakeLift??0,i.gamma??.9]}if(e.layout){const i=e.layout;if(!Array.isArray(i.banks)||i.banks.length===0)throw new Error("layout.banks must list at least one bank angle");if(!Array.isArray(i.exhausts)||i.exhausts.length===0)throw new Error("layout.exhausts must list at least one exhaust system");if(!Array.isArray(i.cylinders)||i.cylinders.length===0)throw new Error("layout.cylinders must list at least one cylinder");t.layout={banks:i.banks.map(r=>typeof r=="number"?r:r.angle),exhausts:i.exhausts.map(r=>[r.length??2.54,r.collectorArea??.002,r.outletFlowScfm??1e3,r.primaryTubeLength??.74,r.primaryFlowScfm??600,r.velocityDecay??.5,r.audioVolume??.2]),cylinders:i.cylinders.map((r,a)=>{const s=r.bank??0;if(s>=i.banks.length)throw new Error(`cylinder ${a} references bank ${s}, which does not exist`);const o=r.exhaust??0;if(o>=i.exhausts.length)throw new Error(`cylinder ${a} references exhaust ${o}, which does not exist`);return[s,r.journalAngle??0,o,r.soundAttenuation??1,r.headerPrimaryLength??.02]})}}const n=e.firingOrder;if(n){const i=t.layout?t.layout.cylinders.length:null;if(i!==null&&n.length!==i)throw new Error(`firingOrder lists ${n.length} cylinders but the layout has ${i}`);t.firingOrder=Uint32Array.from(n)}else if(t.layout)throw new Error("a custom layout also needs a firingOrder");return t}const ym=`/**\r
 * AudioWorkletProcessor that runs the engine simulation on the audio thread.\r
 *\r
 * This file is the source of truth for the worklet; \`worklet-source.js\` is a\r
 * generated string copy of it so the package can register the processor from a\r
 * Blob URL with no build configuration. Run \`npm run build:worklet\` after\r
 * editing.\r
 *\r
 * The processor talks to WebAssembly through a flat C ABI, so there is no\r
 * wasm-bindgen glue and no module loader — which matters, because an\r
 * AudioWorklet scope has neither \`fetch\` nor dynamic \`import\`. The wasm bytes\r
 * arrive through \`processorOptions\`.\r
 *\r
 * All parameter keys crossing the port are already numeric: the main thread\r
 * resolves names to ABI ids so this side needs no lookup tables.\r
 */\r
\r
/**\r
 * Copies UTF-8 bytes out of the wasm heap.\r
 *\r
 * An AudioWorkletGlobalScope has no \`TextDecoder\` or \`TextEncoder\` — it is\r
 * neither a Window nor a WorkerGlobalScope — so all text conversion happens on\r
 * the main thread and only bytes cross the port.\r
 */\r
function readBytes(w, ptr, len) {\r
  return len ? new Uint8Array(w.memory.buffer, ptr, len).slice() : new Uint8Array(0);\r
}\r
\r
/** Everything a caller needs to describe the engine that was just built. */\r
function describe(w, engine) {\r
  return {\r
    nameBytes: readBytes(w, w.es_name_ptr(engine), w.es_name_len(engine)),\r
    cylinders: w.es_cylinder_count(engine),\r
    banks: w.es_bank_count(engine),\r
    channels: w.es_channel_count(engine),\r
    displacement: w.es_displacement(engine),\r
    compressionRatio: w.es_compression_ratio(engine),\r
    revLimit: w.es_rev_limit(engine),\r
    gears: w.es_gear_count(engine),\r
  };\r
}\r
\r
class EngineSoundProcessor extends AudioWorkletProcessor {\r
  constructor(options) {\r
    super();\r
\r
    const opts = options.processorOptions || {};\r
\r
    this.wasm = null;\r
    this.engine = 0;\r
    this.outputPtr = 0;\r
    this.outputLength = 0;\r
    this.view = null;\r
    this.telemetryCountdown = 0;\r
    this.telemetryInterval = Math.max(1, Math.round(sampleRate / 128 / 20)); // ~20 Hz\r
    this.failed = false;\r
\r
    this.port.onmessage = (event) => this.handleMessage(event.data);\r
\r
    if (opts.wasm) {\r
      this.instantiate(opts.wasm);\r
      if (opts.spec) this.buildEngine(opts.spec);\r
    }\r
  }\r
\r
  instantiate(bytes) {\r
    try {\r
      const module = new WebAssembly.Module(bytes);\r
      const instance = new WebAssembly.Instance(module, {});\r
      this.wasm = instance.exports;\r
      this.port.postMessage({ type: 'ready', abi: this.wasm.es_abi_version() });\r
    } catch (error) {\r
      this.failed = true;\r
      this.port.postMessage({ type: 'error', message: String(error) });\r
    }\r
  }\r
\r
  /** Builds an engine from \`.mr\` source text. */\r
  buildEngineFromMr(source) {\r
    try {\r
      this.buildEngineFromMrInner(source);\r
    } catch (error) {\r
      this.port.postMessage({ type: 'error', message: String(error) });\r
    }\r
  }\r
\r
  buildEngineFromMrInner(source) {\r
    const w = this.wasm;\r
    if (!w) return;\r
\r
    const bytes = source;\r
    const ptr = w.es_alloc(bytes.length);\r
    new Uint8Array(w.memory.buffer, ptr, bytes.length).set(bytes);\r
    const result = w.es_mr_load(ptr, bytes.length);\r
    w.es_dealloc(ptr, bytes.length);\r
\r
    const messageBytes = readBytes(\r
      w,\r
      w.es_mr_message_ptr(result),\r
      w.es_mr_message_len(result),\r
    );\r
\r
    if (!w.es_mr_ok(result)) {\r
      w.es_mr_free(result);\r
      // The main thread decodes it; see readBytes.\r
      this.port.postMessage({ type: 'error', messageBytes });\r
      return;\r
    }\r
\r
    const cfg = w.es_mr_take_config(result);\r
    w.es_mr_free(result);\r
\r
    const engine = w.es_new(cfg, sampleRate);\r
    if (!engine) {\r
      this.port.postMessage({ type: 'error', message: 'the file described an incomplete engine' });\r
      return;\r
    }\r
\r
    if (this.engine) w.es_destroy(this.engine);\r
    this.engine = engine;\r
    this.view = null;\r
\r
    this.port.postMessage({\r
      type: 'engine',\r
      source: 'mr',\r
      ...describe(w, engine),\r
      warningsJson: messageBytes,\r
    });\r
  }\r
\r
  /**\r
   * Rebuilds the engine from a spec produced by the main thread.\r
   *\r
   * Anything thrown here would otherwise kill the processor silently — no\r
   * audio, no message, nothing in the console — so it is reported instead.\r
   */\r
  buildEngine(spec) {\r
    try {\r
      this.buildEngineFromSpec(spec);\r
    } catch (error) {\r
      this.port.postMessage({ type: 'error', message: String(error) });\r
    }\r
  }\r
\r
  buildEngineFromSpec(spec) {\r
    const w = this.wasm;\r
    if (!w) return;\r
\r
    const cfg = w.es_config_new(spec.presetId >>> 0);\r
    if (!cfg) {\r
      this.port.postMessage({ type: 'error', message: 'unknown preset' });\r
      return;\r
    }\r
\r
    if (spec.layout) {\r
      w.es_config_clear_layout(cfg);\r
      for (const angle of spec.layout.banks) {\r
        w.es_config_add_bank(cfg, angle);\r
      }\r
      for (const e of spec.layout.exhausts) {\r
        w.es_config_add_exhaust(\r
          cfg,\r
          e[0], // length, m\r
          e[1], // collector cross-section area, m^2\r
          w.es_k_carb(e[2]), // outlet flow, SCFM\r
          e[3], // primary tube length, m\r
          w.es_k_carb(e[4]), // primary flow, SCFM\r
          e[5], // velocity decay\r
          e[6], // audio volume\r
        );\r
      }\r
      for (const c of spec.layout.cylinders) {\r
        w.es_config_add_cylinder(cfg, c[0] >>> 0, c[1], c[2] >>> 0, c[3], c[4]);\r
      }\r
    }\r
\r
    for (const [key, value] of spec.vehicle || []) {\r
      w.es_config_set_vehicle(cfg, key >>> 0, value);\r
    }\r
\r
    if (spec.gears && spec.gears.length) {\r
      const bytes = spec.gears.length * 8;\r
      const ptr = w.es_alloc(bytes);\r
      new Float64Array(w.memory.buffer, ptr, spec.gears.length).set(spec.gears);\r
      w.es_config_set_gears(cfg, ptr, spec.gears.length);\r
      w.es_dealloc(ptr, bytes);\r
    }\r
\r
    if (spec.nameBytes && spec.nameBytes.length) {\r
      const ptr = w.es_alloc(spec.nameBytes.length);\r
      new Uint8Array(w.memory.buffer, ptr, spec.nameBytes.length).set(spec.nameBytes);\r
      w.es_config_set_name(cfg, ptr, spec.nameBytes.length);\r
      w.es_dealloc(ptr, spec.nameBytes.length);\r
    }\r
\r
    for (const [which, lifts, flows, filterRadius] of spec.portFlow || []) {\r
      const bytes = lifts.length * 8;\r
      const liftPtr = w.es_alloc(bytes);\r
      const flowPtr = w.es_alloc(bytes);\r
      new Float64Array(w.memory.buffer, liftPtr, lifts.length).set(lifts);\r
      new Float64Array(w.memory.buffer, flowPtr, flows.length).set(flows);\r
      w.es_config_set_port_flow(cfg, which >>> 0, liftPtr, flowPtr, lifts.length, filterRadius);\r
      w.es_dealloc(liftPtr, bytes);\r
      w.es_dealloc(flowPtr, bytes);\r
    }\r
\r
    if (spec.cam) {\r
      w.es_config_set_cam(cfg, spec.cam[0], spec.cam[1], spec.cam[2], spec.cam[3], spec.cam[4]);\r
    }\r
\r
    for (const [key, value] of spec.params || []) {\r
      w.es_config_set(cfg, key >>> 0, value);\r
    }\r
    for (const [key, value] of spec.audio || []) {\r
      w.es_config_set_audio(cfg, key >>> 0, value);\r
    }\r
\r
    // Firing order last: it reads the final journal angles and bank layout.\r
    if (spec.firingOrder && spec.firingOrder.length) {\r
      const bytes = spec.firingOrder.length * 4;\r
      const ptr = w.es_alloc(bytes);\r
      new Uint32Array(w.memory.buffer, ptr, spec.firingOrder.length).set(spec.firingOrder);\r
      w.es_config_set_firing_order(cfg, ptr, spec.firingOrder.length);\r
      w.es_dealloc(ptr, bytes);\r
    }\r
\r
    const engine = w.es_new(cfg, sampleRate);\r
    if (!engine) {\r
      this.port.postMessage({ type: 'error', message: 'engine configuration is incomplete' });\r
      return;\r
    }\r
\r
    if (this.engine) w.es_destroy(this.engine);\r
    this.engine = engine;\r
    this.view = null;\r
\r
    this.port.postMessage({\r
      type: 'engine',\r
      source: 'spec',\r
      ...describe(w, engine),\r
      warningsJson: new Uint8Array(0),\r
    });\r
  }\r
\r
  handleMessage(msg) {\r
    try {\r
      this.dispatch(msg);\r
    } catch (error) {\r
      this.port.postMessage({ type: 'error', message: String(error) });\r
    }\r
  }\r
\r
  dispatch(msg) {\r
    const w = this.wasm;\r
\r
    if (msg.type === 'wasm') {\r
      this.instantiate(msg.bytes);\r
      if (msg.spec) this.buildEngine(msg.spec);\r
      return;\r
    }\r
\r
    if (!w) return;\r
\r
    switch (msg.type) {\r
      case 'engine':\r
        this.buildEngine(msg.spec);\r
        return;\r
      case 'mr':\r
        this.buildEngineFromMr(msg.source);\r
        return;\r
      case 'dispose':\r
        if (this.engine) {\r
          w.es_destroy(this.engine);\r
          this.engine = 0;\r
        }\r
        this.disposed = true;\r
        return;\r
      default:\r
        break;\r
    }\r
\r
    if (!this.engine) return;\r
\r
    switch (msg.type) {\r
      case 'throttle':\r
        w.es_set_throttle(this.engine, msg.value);\r
        break;\r
      case 'starter':\r
        w.es_set_starter(this.engine, msg.value ? 1 : 0);\r
        break;\r
      case 'ignition':\r
        w.es_set_ignition(this.engine, msg.value ? 1 : 0);\r
        break;\r
      case 'load':\r
        w.es_set_load_torque(this.engine, msg.value);\r
        break;\r
      case 'rpm':\r
        w.es_set_rpm(this.engine, msg.value);\r
        break;\r
      case 'gear':\r
        w.es_set_gear(this.engine, msg.value);\r
        break;\r
      case 'resetSpeed':\r
        w.es_reset_road_speed(this.engine);\r
        break;\r
      case 'audioParam':\r
        w.es_set_audio_param(this.engine, msg.key >>> 0, msg.value);\r
        break;\r
      case 'impulseResponse': {\r
        const samples = msg.data;\r
        const bytes = samples.length * 4;\r
        const ptr = w.es_alloc(bytes);\r
        new Float32Array(w.memory.buffer, ptr, samples.length).set(samples);\r
        w.es_set_impulse_response(\r
          this.engine,\r
          msg.channel === undefined ? -1 : msg.channel,\r
          ptr,\r
          samples.length,\r
          msg.volume === undefined ? 1 : msg.volume,\r
        );\r
        w.es_dealloc(ptr, bytes);\r
        this.view = null;\r
        break;\r
      }\r
      case 'impulseResponseWav': {\r
        const data = new Uint8Array(msg.bytes);\r
        const ptr = w.es_alloc(data.length);\r
        new Uint8Array(w.memory.buffer, ptr, data.length).set(data);\r
        const result = w.es_set_impulse_response_wav(\r
          this.engine,\r
          msg.channel === undefined ? -1 : msg.channel,\r
          ptr,\r
          data.length,\r
          msg.volume === undefined ? 1 : msg.volume,\r
          sampleRate,\r
        );\r
        w.es_dealloc(ptr, data.length);\r
        this.view = null;\r
        if (result < 0) {\r
          this.port.postMessage({ type: 'error', message: \`could not decode WAV (\${result})\` });\r
        }\r
        break;\r
      }\r
      default:\r
        break;\r
    }\r
  }\r
\r
  ensureBuffer(length) {\r
    const w = this.wasm;\r
    if (this.outputLength !== length) {\r
      if (this.outputPtr) w.es_dealloc(this.outputPtr, this.outputLength * 4);\r
      this.outputPtr = w.es_alloc(length * 4);\r
      this.outputLength = length;\r
      this.view = null;\r
    }\r
    // A wasm memory.grow detaches every existing view.\r
    if (!this.view || this.view.buffer !== w.memory.buffer) {\r
      this.view = new Float32Array(w.memory.buffer, this.outputPtr, length);\r
    }\r
    return this.view;\r
  }\r
\r
  process(inputs, outputs) {\r
    if (this.disposed || this.failed) return !this.disposed;\r
\r
    const output = outputs[0];\r
    if (!output || output.length === 0) return true;\r
\r
    const frames = output[0].length;\r
\r
    if (!this.wasm || !this.engine) {\r
      for (const channel of output) channel.fill(0);\r
      return true;\r
    }\r
\r
    const view = this.ensureBuffer(frames);\r
    this.wasm.es_render(this.engine, this.outputPtr, frames);\r
\r
    for (const channel of output) channel.set(view);\r
\r
    if (--this.telemetryCountdown <= 0) {\r
      this.telemetryCountdown = this.telemetryInterval;\r
      this.port.postMessage({\r
        type: 'telemetry',\r
        rpm: this.wasm.es_rpm(this.engine),\r
        manifoldPressure: this.wasm.es_manifold_pressure(this.engine),\r
        levelerGain: this.wasm.es_leveler_gain(this.engine),\r
        starterEngaged: this.wasm.es_starter_engaged(this.engine) !== 0,\r
        gear: this.wasm.es_gear(this.engine),\r
        speed: this.wasm.es_road_speed(this.engine),\r
      });\r
    }\r
\r
    return true;\r
  }\r
}\r
\r
registerProcessor('engine-sound', EngineSoundProcessor);\r
`,jr=new TextDecoder,Cm=new TextEncoder;function Pm(e){if(!e||!e.length)return[];try{const t=JSON.parse(jr.decode(e));return Array.isArray(t)?t:[]}catch{return[]}}const Js=new WeakMap;function Lm(){return new URL(""+new URL("engine_sound-rVei2oJg.wasm",import.meta.url).href,import.meta.url)}async function Dm({wasmBinary:e,wasmUrl:t}){if(e)return e instanceof ArrayBuffer?e:e.buffer;const n=t||Lm(),i=await fetch(n);if(!i.ok)throw new Error(`could not fetch engine-sound wasm from ${n} (${i.status})`);return i.arrayBuffer()}async function Um(e,t){let n=Js.get(e);if(!n){const i=t||URL.createObjectURL(new Blob([ym],{type:"text/javascript"}));n=e.audioWorklet.addModule(i),Js.set(e,n)}return n}class Im extends EventTarget{constructor(t,n){super(),this.context=t,this.node=n,this.rpm=0,this.manifoldPressure=101325,this.levelerGain=1,this.starterEngaged=!1,this.cylinderCount=0,this.channelCount=0,this.displacement=0,this.warnings=[],this.disposed=!1,n.port.onmessage=i=>{const r=i.data;if(r.type==="telemetry")this.rpm=r.rpm,this.manifoldPressure=r.manifoldPressure,this.levelerGain=r.levelerGain,this.starterEngaged=r.starterEngaged,r.gear=r.gear<0?0:r.gear+1,this.gear=r.gear,this.speed=r.speed,this.dispatchEvent(new CustomEvent("telemetry",{detail:r}));else if(r.type==="engine")r.name=r.nameBytes?jr.decode(r.nameBytes):"",r.warnings=Pm(r.warningsJson),this.cylinderCount=r.cylinders,this.channelCount=r.channels,this.displacement=r.displacement,this.warnings=r.warnings||[],this.dispatchEvent(new CustomEvent("engine",{detail:r}));else if(r.type==="error"){const a=r.messageBytes?jr.decode(r.messageBytes)||"could not read the file":r.message;this.dispatchEvent(new CustomEvent("error",{detail:a}))}}}post(t,n){this.disposed||this.node.port.postMessage(t,n||[])}setThrottle(t){this.post({type:"throttle",value:Nm(t)})}setStarter(t){this.post({type:"starter",value:!!t})}setGear(t){const n=t==null?-1:Math.round(t)-1;this.post({type:"gear",value:n<0?-1:n})}resetSpeed(){this.post({type:"resetSpeed"})}setIgnition(t){this.post({type:"ignition",value:!!t})}setLoadTorque(t){this.post({type:"load",value:Number(t)||0})}setRpm(t){this.post({type:"rpm",value:Math.max(0,Number(t)||0)})}setAudioParam(t,n){const i=Xo[t];if(i===void 0)throw new Error(`unknown audio parameter "${t}"`);this.post({type:"audioParam",key:i,value:Number(n)})}setAudioParams(t){for(const[n,i]of Object.entries(t||{}))this.setAudioParam(n,i)}setImpulseResponse(t,n={}){const{channel:i=-1,volume:r=1}=n;if(typeof AudioBuffer<"u"&&t instanceof AudioBuffer){const a=Float32Array.from(t.getChannelData(0));this.post({type:"impulseResponse",channel:i,volume:r,data:a},[a.buffer]);return}if(t instanceof Float32Array){const a=Float32Array.from(t);this.post({type:"impulseResponse",channel:i,volume:r,data:a},[a.buffer]);return}if(t instanceof ArrayBuffer||ArrayBuffer.isView(t)){const a=t instanceof ArrayBuffer?t.slice(0):t.buffer.slice(0);this.post({type:"impulseResponseWav",channel:i,volume:r,bytes:a},[a]);return}throw new TypeError("impulse response must be a Float32Array, AudioBuffer or WAV bytes")}async loadImpulseResponse(t,n){const i=await fetch(t);if(!i.ok)throw new Error(`could not fetch impulse response from ${t} (${i.status})`);this.setImpulseResponse(await i.arrayBuffer(),n)}setEngine(t){this.post({type:"engine",spec:qo(t)})}async loadMr(t){const n=typeof t=="string"?t:await t.text(),i=Cm.encode(n);this.post({type:"mr",source:i},[i.buffer])}dispose(){if(!this.disposed){this.post({type:"dispose"}),this.disposed=!0;try{this.node.disconnect()}catch{}this.node.port.onmessage=null}}}function Nm(e){const t=Number(e);return Number.isFinite(t)?t<0?0:t>1?1:t:0}async function Fm(e={}){const t=e.context||new AudioContext,n=qo(e),[i]=await Promise.all([Dm(e),Um(t,e.workletUrl)]),r=new AudioWorkletNode(t,"engine-sound",{numberOfInputs:0,numberOfOutputs:1,outputChannelCount:[e.outputChannels||2],processorOptions:{wasm:i,spec:n}}),a=new Im(t,r),s=e.destination===void 0?t.destination:e.destination;return s&&r.connect(s),a}const Rn=(e,t,n)=>Math.max(t,Math.min(n,e));function Rr(e){return Rn(Number.isFinite(e)?e:0,0,1)}function eo(e,t,n){const i=Rn(Math.abs(Number.isFinite(e)?e:0)/35,0,1),r=Rn(Math.abs(Number.isFinite(t)?t:0),0,1),a=i*5,s=Math.min(5,1+Math.floor(a)),o=a-Math.floor(a);return{rpm:Rn(850+i*2500+r*(1-i)*1900+o*850+(n?180:0),850,5600),gear:s,engineGain:.26+r*.18+o*.08,load:r,nitroGain:n?.18:0,sampleRate:1}}const Yo={master:.72,engine:.45,effects:.65,music:.65};class Om{ctx=null;master=null;compressor=null;analyser=null;meterBuffer=null;spectrumBuffer=null;engineBus=null;effectsBus=null;musicBus=null;radio=new xm;musicWanted=!1;musicElement=null;musicSource=null;preloader=null;preloadedTrackId="";musicFadeTimer=0;musicTransitionId=0;musicError="";v8Engine=null;engineModelState="idle";engineModelError="";engineToneFilter=null;engineWarmth=null;engineShiftEnvelope=null;nitroRumble=null;nitroRumbleGain=null;nitroNoiseGain=null;skidGain=null;noiseBuffer=null;volumes={...Yo};muted=!1;failed=!1;previousGear=1;previousNitro=!1;smoothedRpm=850;smoothedLoad=0;musicDuckTimer=0;musicDuck=1;lastVoice=eo(0,0,!1);start(){try{this.ctx||this.createGraph(),this.ctx?.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.musicWanted&&(!this.musicElement||this.musicElement.paused)&&this.resumeCurrentTrack(),this.applyVolumes()}catch{this.failed=!0}}createGraph(){const t=window,n=window.AudioContext??t.webkitAudioContext;if(!n){this.failed=!0;return}const i=new n({latencyHint:"interactive"});this.ctx=i,this.master=i.createGain(),this.master.gain.value=0,this.compressor=i.createDynamicsCompressor(),this.compressor.threshold.value=-12,this.compressor.knee.value=12,this.compressor.ratio.value=8,this.compressor.attack.value=.003,this.compressor.release.value=.24,this.analyser=i.createAnalyser(),this.analyser.fftSize=2048,this.meterBuffer=new Float32Array(this.analyser.fftSize),this.spectrumBuffer=new Float32Array(this.analyser.frequencyBinCount),this.master.connect(this.compressor).connect(this.analyser).connect(i.destination),this.engineBus=i.createGain(),this.engineBus.gain.value=this.volumes.engine,this.engineBus.connect(this.master),this.effectsBus=i.createGain(),this.effectsBus.gain.value=this.volumes.effects,this.effectsBus.connect(this.master),this.musicBus=i.createGain(),this.musicBus.gain.value=0,this.musicBus.connect(this.master),this.noiseBuffer=this.makeNoiseBuffer(i,.5),this.createEngineGraph(i),this.loadPhysicalV8(i),this.failed=!1}makeNoiseBuffer(t,n){const i=t.createBuffer(1,Math.ceil(t.sampleRate*n),t.sampleRate),r=i.getChannelData(0);let a=1592594996;for(let s=0;s<r.length;s++)a=Math.imul(a,1664525)+1013904223>>>0,r[s]=((a>>>8)/8388608-1)*.45;return i}createEngineGraph(t){this.engineShiftEnvelope=t.createGain(),this.engineShiftEnvelope.gain.value=1,this.engineWarmth=t.createBiquadFilter(),this.engineWarmth.type="lowshelf",this.engineWarmth.frequency.value=150,this.engineWarmth.gain.value=2.8,this.engineToneFilter=t.createBiquadFilter(),this.engineToneFilter.type="lowpass",this.engineToneFilter.frequency.value=3200,this.engineToneFilter.Q.value=.55,this.engineShiftEnvelope.connect(this.engineWarmth).connect(this.engineToneFilter).connect(this.engineBus),this.nitroRumble=t.createOscillator(),this.nitroRumble.type="sine",this.nitroRumble.frequency.value=105;const n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=260,this.nitroRumbleGain=t.createGain(),this.nitroRumbleGain.gain.value=1e-4,this.nitroRumble.connect(n).connect(this.nitroRumbleGain).connect(this.effectsBus),this.nitroRumble.start();const i=t.createBufferSource();i.buffer=this.noiseBuffer,i.loop=!0;const r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=360,this.nitroNoiseGain=t.createGain(),this.nitroNoiseGain.gain.value=1e-4,i.connect(r).connect(this.nitroNoiseGain).connect(this.effectsBus),i.start();const a=t.createBufferSource();a.buffer=this.noiseBuffer,a.loop=!0;const s=t.createBiquadFilter();s.type="bandpass",s.frequency.value=1450,s.Q.value=.48,this.skidGain=t.createGain(),this.skidGain.gain.value=1e-4,a.connect(s).connect(this.skidGain).connect(this.effectsBus),a.start()}async loadPhysicalV8(t){if(!t.audioWorklet||typeof AudioWorkletNode>"u"){this.engineModelState="unsupported",this.engineModelError="AudioWorklet is unavailable";return}this.engineModelState="loading",this.engineModelError="";try{const n=await Fm({context:t,destination:this.engineShiftEnvelope,preset:"v8_crossplane",name:"Rumble Roam 9.1L cross-plane V8",params:{bore:.1143,crankThrow:.05556,revLimit:5700*Math.PI/30,momentOfInertia:.72,windageCoefficient:.018},gears:[3.2,2.25,1.62,1.22,.94],vehicle:{mass:2480,dragCoefficient:.52,frontalArea:3.3,tireRadius:1.02},audio:{volume:.46,convolution:.88,highFrequencyGain:.006,jitter:.26,jitterCutoff:5200,noise:.34,noiseCutoff:1350,levelerTarget:16500,levelerMaxGain:1.65,levelerMinGain:1e-5},workletUrl:"./audio/engine/v8-engine-worklet.js"});if(this.ctx!==t){n.dispose();return}this.v8Engine=n,n.setGear(this.lastVoice.gear),n.setThrottle(this.smoothedLoad),n.setRpm(this.smoothedRpm),n.setStarter(!0),this.engineModelState="ready"}catch(n){if(this.ctx!==t)return;this.engineModelState="error",this.engineModelError=String(n)}}setVolumes(t){this.volumes={...this.volumes,...Object.fromEntries(Object.entries(t).map(([n,i])=>[n,Rr(i)]))},this.applyVolumes()}getVolumes(){return{...this.volumes}}setMasterVolume(t){this.setVolumes({master:t})}getMasterVolume(){return this.volumes.master}setEngineVolume(t){this.setVolumes({engine:t})}setEffectsVolume(t){this.setVolumes({effects:t})}setMusicVolume(t){this.setVolumes({music:t})}setMuted(t){this.muted=t,this.applyVolumes()}mute(){this.setMuted(!0)}isMuted(){return this.muted}isAvailable(){return!!this.ctx&&!this.failed}getState(){return this.ctx?.state??(this.failed?"unavailable":"locked")}applyVolumes(){if(!this.ctx)return;const t=this.ctx.currentTime;this.master?.gain.setTargetAtTime(this.muted?0:this.volumes.master,t,.035),this.engineBus?.gain.setTargetAtTime(this.volumes.engine,t,.04),this.effectsBus?.gain.setTargetAtTime(this.volumes.effects,t,.04),this.applyMusicGain(.12)}applyMusicGain(t){if(!this.ctx||!this.musicBus)return;const n=this.isMusicPlaying()?this.volumes.music*this.musicDuck:0;this.musicBus.gain.setTargetAtTime(this.muted?0:n,this.ctx.currentTime,t)}duckMusic(t=1.35){!this.ctx||!this.musicBus||(this.musicDuck=.32,this.applyMusicGain(.025),this.musicDuckTimer&&window.clearTimeout(this.musicDuckTimer),this.musicDuckTimer=window.setTimeout(()=>{this.musicDuck=1,this.applyMusicGain(.38)},t*1e3))}update(t,n=0,i=!1,r=0,a=1/60){const s=this.ctx;if(!s)return;const o=eo(t,n,i),c=s.currentTime,p=Rn(Number.isFinite(a)?a:1/60,1/240,.05),u=o.rpm>this.smoothedRpm?.12:.32;this.smoothedRpm+=(o.rpm-this.smoothedRpm)*(1-Math.exp(-p/u)),this.smoothedLoad+=(o.load-this.smoothedLoad)*(1-Math.exp(-p/(o.load>this.smoothedLoad?.08:.24)));const f={...o,rpm:this.smoothedRpm};o.gear!==this.previousGear&&(this.v8Engine?.setGear(o.gear),this.shift(c),this.previousGear=o.gear),this.v8Engine&&(this.v8Engine.setThrottle(i?Math.max(this.smoothedLoad,.84):this.smoothedLoad),this.v8Engine.setRpm(this.smoothedRpm),this.v8Engine.setLoadTorque(this.smoothedLoad<.05&&Math.abs(t)>2?42:0)),this.nitroRumble?.frequency.setTargetAtTime(i?104+this.smoothedLoad*38:86,c,.18),this.nitroRumbleGain?.gain.setTargetAtTime(i?.055:1e-4,c,i?.12:.24),this.nitroNoiseGain?.gain.setTargetAtTime(i?.055:1e-4,c,i?.1:.22),this.skidGain?.gain.setTargetAtTime(Rn(r,0,1)>.08?.095*Rn(r,0,1):1e-4,c,.06),i&&!this.previousNitro?(this.noiseBurst(.12,.2,650),this.sweep(165,76,.25,.035,"triangle"),this.duckMusic(.75)):!i&&this.previousNitro&&this.sweep(155,72,.3,.022,"sine"),this.previousNitro=i,this.lastVoice=f}shift(t=this.ctx?.currentTime??0){if(!this.ctx)return;const i=this.engineShiftEnvelope?.gain;i&&(i.cancelScheduledValues(t),i.setValueAtTime(i.value,t),i.linearRampToValueAtTime(.78,t+.045),i.linearRampToValueAtTime(1,t+.19))}setTrackIndex(t){this.radio.select(t),this.musicError="",this.musicWanted?this.transitionTrack():this.dispatchRadioChange()}getTrackIndex(){return this.radio.currentIndex}getTrack(){return en[this.radio.currentIndex]}getTrackTitle(){return this.getTrack().title}getTrackArtist(){return this.getTrack().artist}getRadioName(){return js}isShuffleEnabled(){return this.radio.shuffleEnabled}setShuffle(t){this.radio.setShuffle(t),t?this.clearPreloader():this.preloadNextTrack()}hasSoundtrack(){return en.length>0}isMusicRequested(){return this.musicWanted}setMusicPreference(t){this.musicWanted=t}getMusicError(){return this.musicError}playMusic(){if(this.ensureGraph(),!this.ctx||!this.musicBus||!this.hasSoundtrack()){this.musicError="Rumble Roam Radio is unavailable in this build.",this.dispatchRadioChange();return}this.musicWanted=!0,this.musicError="",(!this.musicElement||this.musicElement.dataset.trackId!==this.getTrack().id)&&this.setMusicSource();const t=this.ensureMusicElement(),n=this.musicTransitionId;t.play().then(()=>{n===this.musicTransitionId&&(this.applyMusicGain(.08),this.preloadNextTrack(),this.dispatchRadioChange())}).catch(()=>{n===this.musicTransitionId&&(this.musicError="Playback did not start. Tap Music to retry after audio is enabled.",this.applyMusicGain(.08),this.dispatchRadioChange())})}pauseMusic(){this.musicWanted=!1,++this.musicTransitionId,this.musicFadeTimer&&window.clearTimeout(this.musicFadeTimer);const t=this.musicElement,n=this.ctx;if(t&&n&&this.musicBus){const i=n.currentTime;this.musicBus.gain.cancelScheduledValues(i),this.musicBus.gain.setTargetAtTime(0,i,.035),this.musicFadeTimer=window.setTimeout(()=>{t.pause(),this.musicFadeTimer=0,this.dispatchRadioChange()},120)}else t?.pause();this.dispatchRadioChange()}nextTrack(){this.radio.next(),this.transitionTrack()}previousTrack(){this.radio.previous(),this.transitionTrack()}isMusicPlaying(){return!!this.musicElement&&!this.musicElement.paused&&!this.musicElement.ended}ensureMusicElement(){return this.musicElement||(this.musicElement=this.createMusicElement(this.getTrack(),"none")),!this.musicSource&&this.ctx&&this.musicBus&&(this.musicSource=this.ctx.createMediaElementSource(this.musicElement),this.musicSource.connect(this.musicBus)),this.musicElement}setMusicSource(){const t=this.getTrack();if(this.musicElement?.dataset.trackId===t.id)return;const n=this.preloader?.dataset.trackId===t.id?this.preloader:this.createMusicElement(t,"none"),i=this.musicElement;this.preloader&&n!==this.preloader&&this.clearPreloader(),this.preloader=null,this.preloadedTrackId="",i?.pause(),this.musicSource?.disconnect(),this.musicSource=null,i&&i!==n&&this.releaseMusicElement(i),this.musicElement=n,n.preload="none",this.ctx&&this.musicBus&&(this.musicSource=this.ctx.createMediaElementSource(n),this.musicSource.connect(this.musicBus))}createMusicElement(t,n){const i=document.createElement("audio");return i.preload=n,i.loop=!1,i.hidden=!0,i.setAttribute("aria-hidden","true"),i.dataset.trackId=t.id,i.src=Mm(t),i.addEventListener("ended",()=>{this.musicWanted&&this.musicElement===i&&(++this.musicTransitionId,this.radio.next(),this.setMusicSource(),this.playCurrentTrack())}),i.addEventListener("error",()=>{!i.error||this.musicElement!==i||(this.musicError="Rumble Roam Radio could not load this track. Check your connection and press Play to retry.",this.applyMusicGain(.04),this.musicSource?.disconnect(),this.musicSource=null,this.releaseMusicElement(i),this.musicElement=null,this.dispatchRadioChange())}),document.body.append(i),n!=="none"&&i.load(),i}releaseMusicElement(t){t.pause(),t.removeAttribute("src"),t.load(),t.remove()}preloadNextTrack(){if(!this.musicWanted||!this.musicElement||this.radio.shuffleEnabled||en.length<2)return;const t=en[(this.radio.currentIndex+1)%en.length];this.preloadedTrackId!==t.id&&(this.clearPreloader(),this.preloader=this.createMusicElement(t,"metadata"),this.preloadedTrackId=t.id)}clearPreloader(){this.preloader&&this.releaseMusicElement(this.preloader),this.preloader=null,this.preloadedTrackId=""}async playCurrentTrack(){const t=this.ensureMusicElement();t.dataset.trackId!==this.getTrack().id&&this.setMusicSource();const n=this.musicTransitionId;try{if(await t.play(),n!==this.musicTransitionId)return;this.musicError="",this.applyMusicGain(.1),this.preloadNextTrack()}catch{if(n!==this.musicTransitionId)return;this.musicError="Playback did not start. Tap Music to retry after audio is enabled."}this.dispatchRadioChange()}async resumeCurrentTrack(){!this.musicWanted||!this.hasSoundtrack()||((!this.musicElement||this.musicElement.dataset.trackId!==this.getTrack().id)&&this.setMusicSource(),await this.playCurrentTrack())}transitionTrack(){const t=this.musicWanted;++this.musicTransitionId;const n=this.musicTransitionId;if(!this.hasSoundtrack()){this.dispatchRadioChange();return}if(!t){this.dispatchRadioChange();return}if(!this.ctx||!this.musicBus){this.playCurrentTrack();return}const i=this.ctx.currentTime;this.musicBus.gain.cancelScheduledValues(i),this.musicBus.gain.setTargetAtTime(0,i,.025),this.musicFadeTimer&&window.clearTimeout(this.musicFadeTimer),this.musicFadeTimer=window.setTimeout(()=>{this.musicFadeTimer=0,!(n!==this.musicTransitionId||!this.musicWanted)&&(this.setMusicSource(),this.playCurrentTrack())},100),this.dispatchRadioChange()}playDispatchScheduled=!1;dispatchRadioChange(){this.playDispatchScheduled||typeof window>"u"||(this.playDispatchScheduled=!0,queueMicrotask(()=>{this.playDispatchScheduled=!1,window.dispatchEvent(new Event("rumble-radio-change"))}))}suspend(){this.musicElement&&!this.musicElement.paused&&(this.musicElement.pause(),this.musicWanted=!0),this.ctx?.state==="running"&&this.ctx.suspend().catch(()=>{})}dispose(){this.musicDuckTimer&&window.clearTimeout(this.musicDuckTimer),this.musicFadeTimer&&window.clearTimeout(this.musicFadeTimer),this.musicWanted=!1,this.clearPreloader(),this.musicElement?.pause(),this.musicSource?.disconnect(),this.musicElement&&(this.releaseMusicElement(this.musicElement),this.musicElement=null),this.musicSource=null,this.v8Engine?.dispose(),this.v8Engine=null;try{this.engineShiftEnvelope?.disconnect(),this.engineWarmth?.disconnect(),this.engineToneFilter?.disconnect()}catch{}try{this.engineShiftEnvelope?.disconnect(),this.nitroRumble?.stop(),this.nitroRumble?.disconnect(),this.nitroRumbleGain?.disconnect(),this.nitroNoiseGain?.disconnect()}catch{}this.ctx?.close().catch(()=>{}),this.ctx=null}diagnostics(){return{state:this.getState(),rms:this.outputRms(),peak:this.outputPeak(),spectrum:this.outputSpectrum(),muted:this.muted,volumes:this.getVolumes(),rpm:this.lastVoice.rpm,gear:this.lastVoice.gear,load:this.smoothedLoad,nitro:this.previousNitro,engineModel:"physically-modeled cross-plane V8",engineModelState:this.engineModelState,engineModelError:this.engineModelError,enginePlaybackRate:1,nitroRumbleGain:this.nitroRumbleGain?.gain.value??0,radio:js,track:this.getTrackTitle(),artist:this.getTrackArtist(),trackIndex:this.getTrackIndex(),mediaTrackId:this.musicElement?.dataset.trackId??"",preloadedTrackId:this.preloadedTrackId,audioSrc:this.musicElement?.currentSrc??"",shuffle:this.isShuffleEnabled(),musicPlaying:this.isMusicPlaying(),playbackRequested:this.musicWanted,musicAvailable:this.hasSoundtrack(),musicError:this.musicError,currentTime:this.musicElement?.currentTime??0,duration:this.musicElement?.duration??0,readyState:this.musicElement?.readyState??0}}createDiagnosticCapture(){if(!this.ctx||!this.analyser)return null;const t=this.ctx.createMediaStreamDestination();return this.analyser.connect(t),{stream:t.stream,close:()=>{try{this.analyser?.disconnect(t)}catch{}for(const n of t.stream.getTracks())n.stop()}}}testTone(){return!this.ctx||this.muted?!1:(this.sweep(520,760,.22,.12,"sine"),!0)}jump(){this.sweep(145,430,.3,.05,"triangle"),this.duckMusic(.5)}landing(t=1){const n=Rr(t);this.noiseBurst(.085+n*.08,.22,1500),this.sweep(118,48,.2,.095*n,"sine"),n>.45&&this.duckMusic(.7)}impact(t=1){const n=Rr(t);this.noiseBurst(.13+n*.13,.3,2100),this.sweep(175,38,.29,.13*n,"triangle"),this.duckMusic(1.35)}ensureGraph(){this.ctx||this.start()}sweep(t,n,i,r,a){const s=this.ctx;if(!s||this.muted||!this.effectsBus)return;const o=s.createOscillator(),c=s.createBiquadFilter(),p=s.createGain(),u=s.currentTime;o.type=a,o.frequency.setValueAtTime(t,u),o.frequency.exponentialRampToValueAtTime(Math.max(24,n),u+i),c.type="lowpass",c.frequency.value=2200,p.gain.setValueAtTime(1e-4,u),p.gain.linearRampToValueAtTime(r,u+.015),p.gain.exponentialRampToValueAtTime(1e-4,u+i),o.connect(c).connect(p).connect(this.effectsBus),o.start(u),o.stop(u+i+.02),o.onended=()=>{o.disconnect(),c.disconnect(),p.disconnect()}}noiseBurst(t,n,i){const r=this.ctx;if(!r||!this.noiseBuffer||this.muted||!this.effectsBus)return;const a=r.createBufferSource(),s=r.createBiquadFilter(),o=r.createGain(),c=r.currentTime;a.buffer=this.noiseBuffer,s.type="lowpass",s.frequency.value=i,o.gain.setValueAtTime(Math.max(1e-4,t),c),o.gain.exponentialRampToValueAtTime(1e-4,c+n),a.connect(s).connect(o).connect(this.effectsBus),a.start(c),a.stop(c+n+.02),a.onended=()=>{a.disconnect(),s.disconnect(),o.disconnect()}}outputRms(){if(!this.ctx||!this.analyser||!this.meterBuffer||this.ctx.state!=="running"||this.muted)return 0;this.analyser.getFloatTimeDomainData(this.meterBuffer);let t=0;for(const n of this.meterBuffer)t+=n*n;return Math.sqrt(t/this.meterBuffer.length)}outputPeak(){if(!this.ctx||!this.analyser||!this.meterBuffer||this.ctx.state!=="running"||this.muted)return 0;this.analyser.getFloatTimeDomainData(this.meterBuffer);let t=0;for(const n of this.meterBuffer)t=Math.max(t,Math.abs(n));return t}outputSpectrum(){const t=this.ctx,n=this.analyser,i=this.spectrumBuffer;if(!t||!n||!i||t.state!=="running"||this.muted)return{low:0,mid:0,high:0,highRatio:0};n.getFloatFrequencyData(i);let r=0,a=0,s=0;const o=t.sampleRate/n.fftSize;for(let p=1;p<i.length;p++){const u=i[p];if(!Number.isFinite(u))continue;const f=Math.pow(10,u/20),g=f*f,m=p*o;m<250?r+=g:m<1e3?a+=g:m<6e3&&(s+=g)}const c=r+a+s;return{low:Math.sqrt(r),mid:Math.sqrt(a),high:Math.sqrt(s),highRatio:c>1e-12?s/c:0}}}const Ko="rumble-roam-audio-preferences-v4",Bm=["rumble-roam-audio-preferences-v3","rumble-roam-audio-preferences-v2"],Ti={volumes:{master:.72,engine:.45,effects:.65,music:.65},muted:!1,trackIndex:0,shuffle:!1,musicPlaying:!0},to={master:.62,engine:.84,effects:.72,music:.12},no=(e,t)=>typeof e=="number"&&Math.abs(e-t)<1e-4;function km(e,t){if(e)return{volumes:{...Ti.volumes,...e.volumes},muted:e.muted??!1,trackIndex:e.trackIndex??0,shuffle:e.shuffle??!1,musicPlaying:e.musicPlaying??!0};if(!t)return{...Ti,volumes:{...Ti.volumes}};const n=t.volumes,i={...Ti.volumes};for(const s of Object.keys(i)){const o=n?.[s];typeof o=="number"&&Number.isFinite(o)&&!no(o,to[s])&&(i[s]=Math.min(1,Math.max(0,o)))}const r=typeof n?.music=="number"&&!no(n.music,to.music),a=t.muted===!0;return{volumes:i,muted:t.muted??!1,trackIndex:t.trackIndex??0,shuffle:t.shuffle??!1,musicPlaying:t.musicPlaying===!1?!(r||a):t.musicPlaying??!0}}const $=e=>document.querySelector(e),zn=!!(window.matchMedia?.("(pointer: coarse)").matches||window.matchMedia?.("(any-pointer: coarse)").matches||navigator.maxTouchPoints>0||"ontouchstart"in window),hn=document.documentElement;hn.classList.toggle("touch-capable",zn);hn.classList.toggle("keyboard-controls-visible",!zn);const Gm=$("#app");Gm.innerHTML=`
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
 <div class="loading-screen" id="loading"><div class="loader-mark">✦</div><div class="loader-title">MAPPING THE WILD</div><div class="loader-sub">LOADING REAL-WORLD TERRAIN</div><div class="loader-track"><i></i></div></div>`;let Ot=zn?"low":"high";const fa=e=>zn?{low:1.5,medium:1.75,high:2}[e]:{low:.85,medium:1.1,high:1.35}[e],ha=()=>({width:Math.round(window.visualViewport?.width??innerWidth),height:Math.round(window.visualViewport?.height??innerHeight)}),Gn=ha(),_t=new Up({canvas:$("#game"),antialias:!1,powerPreference:"high-performance"});_t.setPixelRatio(Math.min(devicePixelRatio||1,fa(Ot)));_t.setSize(Gn.width,Gn.height);_t.shadowMap.enabled=!1;_t.shadowMap.type=Uo;_t.toneMapping=Io;_t.toneMappingExposure=.96;const Qr=_t.getContext(),io=Qr.getExtension("WEBGL_debug_renderer_info"),Hm=String(Qr.getParameter(io?io.UNMASKED_RENDERER_WEBGL:Qr.RENDERER)),Et=new zc,$o=new Yr(_t),Zi=document.createElement("canvas");Zi.width=512;Zi.height=256;const Wn=Zi.getContext("2d"),ui=Wn.createLinearGradient(0,0,0,256);ui.addColorStop(0,"#91aab8");ui.addColorStop(.43,"#c6d1d0");ui.addColorStop(.58,"#e3d8c7");ui.addColorStop(1,"#766b5e");Wn.fillStyle=ui;Wn.fillRect(0,0,512,256);const pa=Wn.createRadialGradient(350,138,4,350,138,105);pa.addColorStop(0,"rgba(255,241,214,.72)");pa.addColorStop(1,"rgba(255,241,214,0)");Wn.fillStyle=pa;Wn.fillRect(245,35,210,210);const ji=new Fo(Zi);ji.mapping=Vi;ji.colorSpace=aa;const Vm=$o.fromEquirectangular(ji);Et.environment=Vm.texture;Et.environmentIntensity=.42;ji.dispose();$o.dispose();Et.background=new $e("#9bb7c1");Et.fog=new Oo("#c2c9c4",65e-6);const Je=new Qn(60,Gn.width/Gn.height,.1,18e3);Je.position.set(0,8,-16);const zm=new ne,ro=new ne,yr=new ne,wi=new ne,Ai=new ne,Zn=new ne,Zo=Object.assign(((e,t,n,i=!1)=>{Je.updateMatrixWorld(!0);const r=ro.set(e,t,n),a=zm.copy(r).project(Je);if(!i)return a;yr.copy(r).sub(Je.position);const s=yr.length();Wi.set(Je.position,yr.multiplyScalar(1/Math.max(.001,s)));const o=Wi.intersectObjects(He.group.children,!1).some(c=>c.distance<s-.8);return{x:a.x,y:a.y,z:a.z,visible:!o}}),{viewport:{width:Gn.width,height:Gn.height},screenFrame:(e,t,n)=>{Je.updateMatrixWorld(!0),Je.matrixWorld.extractBasis(wi,Ai,Zn);const i=Je.position.distanceTo(ro.set(e,t,n));return{right:[wi.x,wi.y,wi.z],up:[Ai.x,Ai.y,Ai.z],worldPerPixel:2*i*Math.tan(ot.degToRad(Je.fov)*.5)/Math.max(1,innerHeight)}}});Et.add(new Xc(15398143,5851447,.82));const gt=new qc(16773336,2.35);gt.position.set(-350,550,260);gt.castShadow=!0;gt.shadow.bias=-12e-5;gt.shadow.normalBias=.025;gt.shadow.radius=2;gt.shadow.camera.left=-82;gt.shadow.camera.right=82;gt.shadow.camera.top=82;gt.shadow.camera.bottom=-82;gt.shadow.camera.near=8;gt.shadow.camera.far=380;gt.target.position.set(0,0,0);Et.add(gt,gt.target);const Jr=new nn({side:Ct,depthWrite:!1,depthTest:!1,toneMapped:!1,uniforms:{uRumbleDesert:{value:1},uRumbleAlpine:{value:0},uSunDirection:{value:new ne(-.42,.63,.65).normalize()}},vertexShader:"varying vec3 vSkyDirection;void main(){vSkyDirection=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec3 vSkyDirection;uniform float uRumbleDesert;uniform float uRumbleAlpine;uniform vec3 uSunDirection;void main(){vec3 d=normalize(vSkyDirection);float h=smoothstep(-.16,.84,d.y);vec3 horizon=mix(vec3(.79,.72,.58),vec3(.66,.75,.77),uRumbleDesert);horizon=mix(horizon,vec3(.72,.79,.84),uRumbleAlpine);vec3 zenith=mix(vec3(.24,.37,.48),vec3(.3,.46,.55),uRumbleDesert);vec3 sky=mix(horizon,zenith,h);float sun=pow(max(dot(d,normalize(uSunDirection)),0.0),180.0);sky+=vec3(1.0,.72,.4)*sun*.32;gl_FragColor=vec4(sky,1.0);}"}),Qi=new ut(new Yc(12e3,24,16),Jr);Qi.frustumCulled=!1;Qi.renderOrder=-1e3;Et.add(Qi);const ma=new nn({transparent:!0,depthWrite:!1,toneMapped:!1,uniforms:{uOpacity:{value:.25}},vertexShader:"varying vec2 vShadowUv;void main(){vShadowUv=uv*2.0-1.0;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec2 vShadowUv;uniform float uOpacity;void main(){float r=length(vShadowUv);float a=(1.0-smoothstep(.18,1.0,r))*uOpacity;gl_FragColor=vec4(.12,.105,.085,a);}"}),li=new ut(new Kc(1,32),ma);li.rotation.x=-Math.PI/2;li.renderOrder=1;Et.add(li);const tt=new Wp(zn?63:127);Et.add(tt.group);const He=new Jp;Et.add(He.group,He.roadsGroup);const Hn=new nm;Et.add(Hn.group);const sn=new vm;Et.add(sn.group);const yn=new _m;Et.add(yn.group);let on=new im;Et.add(on.root);const X=new fm,{ArcadeCollisionWorld:Wm}=await qr(async()=>{const{ArcadeCollisionWorld:e}=await import("./collision-world-DeM6Yckj.js");return{ArcadeCollisionWorld:e}},__vite__mapDeps([0,1]),import.meta.url),Gt=new Wm;await Gt.init();const nt=new gm,Pe=new Om;let Sn=null,Ri=null,yi=[];const ea="rumble-roam-best-stunt-score";function ta(){try{return Number(localStorage.getItem(ea))||0}catch{return 0}}const pt=new dm(ta());let jo=0,Qo=null;(location.hostname==="localhost"||location.hostname==="127.0.0.1")&&(window.__rumbleRoamDebug={getAudioDiagnostics(){return Pe.diagnostics()},startAudioPreviewCapture(){if(typeof MediaRecorder>"u"||Sn)return null;const e=Pe.createDiagnosticCapture();if(!e)return null;const n=["audio/webm;codecs=opus","audio/mp4","audio/webm"].find(i=>MediaRecorder.isTypeSupported(i))??"";try{Sn=new MediaRecorder(e.stream,n?{mimeType:n}:void 0)}catch{return e.close(),null}return Ri=e.close,yi=[],Sn.ondataavailable=i=>{i.data.size&&yi.push(i.data)},Sn.start(200),Sn.mimeType||n||"browser-default"},async stopAudioPreviewCapture(){const e=Sn;return e?await new Promise(t=>{e.onstop=async()=>{try{const n=new Blob(yi,{type:e.mimeType}),i=Array.from(new Uint8Array(await n.arrayBuffer()));Ri?.(),t({mimeType:n.type,bytes:i})}catch{Ri?.(),t(null)}finally{Sn=null,Ri=null,yi=[]}},e.stop()}):null},getStreetLabelCount(){return He.streetLabelCount},getStreetLabels(){return He.streetLabelPositions.map(e=>{const t=new ne(e.x,e.y,e.z).project(Je),n=e.screenBounds;return{...e,screenX:(t.x+1)*.5*innerWidth,screenY:(1-t.y)*.5*innerHeight,depth:t.z,screenBounds:n?{left:(n.left+1)*.5*innerWidth,right:(n.right+1)*.5*innerWidth,top:(1-n.bottom)*.5*innerHeight,bottom:(1-n.top)*.5*innerHeight}:void 0}})},getStreetGeometry(){return He.streetLabelGeometryDebug},getStreetLabelDiagnostics(){return He.streetLabelDiagnostics},getStreetCameraState(){return Je.updateMatrixWorld(!0),Je.getWorldDirection(Zn),{truckYaw:X.yaw,cameraPosition:[Je.position.x,Je.position.y,Je.position.z],cameraForward:[Zn.x,Zn.y,Zn.z],cameraFov:Je.fov,cameraAspect:Je.aspect,viewport:[innerWidth,innerHeight],projectionMatrix:Array.from(Je.projectionMatrix.elements),viewMatrix:Array.from(Je.matrixWorldInverse.elements)}},getStreetAtlasDataUrl(){return He.streetLabelAtlasImage?.toDataURL()??null},getPhysicsState(){return{yaw:X.yaw,pitch:X.pitch,roll:X.roll,grounded:X.grounded,position:[X.pos.x,X.pos.y,X.pos.z],speed:X.speed,verticalSpeed:X.vel.y,airTime:X.airTime,airRoll:nt.state.airRoll,analogX:nt.analog.x,stuntRolls:pt.rolls,stuntPoints:pt.currentPoints,lastLandingSpeed:jo,lastLandingAward:Qo,lastLandingDebug:pt.lastLandingDebug,stuntAirborne:pt.isAirborne,stuntAirtime:pt.airtime}},spawnImpactTestBuilding(){tt.frame&&He.addFixtureRoad(tt.frame,(i,r)=>tt.heightAt(i,r));const e=fn(X.yaw),t=X.pos.clone().addScaledVector(e,11),n=He.addFixtureBuilding(`fixture-impact-${Date.now()}`,t.x,t.z,(i,r)=>tt.heightAt(i,r),Gt,{w:7,d:6,h:9});return Ht("LOCAL TEST BUILDING AHEAD"),n.id},spawnImpactTestSet(){const e=fn(X.yaw);return tt.frame&&He.addFixtureRoad(tt.frame,(t,n)=>tt.heightAt(t,n)),[10,27].map((t,n)=>{const i=X.pos.clone().addScaledVector(e,t);return He.addFixtureBuilding(`fixture-impact-set-${Date.now()}-${n}`,i.x,i.z,(r,a)=>tt.heightAt(r,a),Gt,n?{w:10,d:8,h:24}:{w:6,d:5,h:7}).id})},prepareMappedImpact(){const e=He.list.filter(s=>s.source==="osm"&&!s.broken);e.sort((s,o)=>Math.hypot(s.x-X.pos.x,s.z-X.pos.z)-Math.hypot(o.x-X.pos.x,o.z-X.pos.z));const t=e[0];if(!t)return null;const n=new ne(t.x-X.pos.x,0,t.z-X.pos.z).normalize();n.lengthSq()<.1&&n.set(0,0,1);const i=Math.max(t.w,t.d)*.5+6,r=t.x-n.x*i,a=t.z-n.z*i;return X.yaw=Math.atan2(n.x,n.z),X.pos.set(r,tt.heightAt(r,a)+1.65*di.scale,a),X.vel.set(0,0,0),X.grounded=!0,X.pitch=0,X.roll=0,Gt.step(X.pos,X.yaw,1/120,X.vel),Gt.step(X.pos,X.yaw,1/120,X.vel),X.vel.copy(n).multiplyScalar(24),t.id},hasFixtureRoad(){return He.roadsGroup.children.some(e=>e.userData.kind==="fixture-road")}});const di={gravity:24,jump:15,scale:1};$("#graphics-quality").value=Ot;let Cn="chase",tn=!1,na=0,ni=.25,an=null,ia=null,Yt=ca[1],Cr=0,ci=performance.now(),kt=0,ao=0,so=0,oo=0,lo=0,Pr=performance.now(),Ci=0,Fi=0,Lr=0,Pi=0,co=0,uo=0;const Wi=new Wc,fo=new dt;$("#building-info-close").onclick=()=>$("#building-info").classList.add("hidden");$("#game").addEventListener("pointerup",e=>{if(e.button!==0||hn.classList.contains("overlay-open"))return;const t=$("#game").getBoundingClientRect();fo.set((e.clientX-t.left)/t.width*2-1,-(e.clientY-t.top)/t.height*2+1),Wi.setFromCamera(fo,Je);const n=Wi.intersectObjects(He.group.children,!1).find(u=>u.object.isBatchedMesh&&u.batchId!==void 0);if(!n)return;const i=He.list.find(u=>u.batch===n.object&&u.instanceId===n.batchId);if(!i||i.broken||!i.tags)return;const r=i.tags,a=$("#building-info"),s=[r["addr:housenumber"],r["addr:street"]].filter(Boolean).join(" ");$("#building-info-name").textContent=r.name??(s||(i.category==="other"?"Mapped building":i.category[0].toUpperCase()+i.category.slice(1))),$("#building-info-type").textContent=r["building:part"]?"OPENSTREETMAP BUILDING PART":"OPENSTREETMAP BUILDING";const o=[["Type",r.building??r["building:part"]??"—"],["Height",r.height??r["building:height"]??(r["building:levels"]?`${r["building:levels"]} levels`:"")],["Name",r.name??""],["Address",s]],c=$("#building-info-attrs");c.replaceChildren();const p=document.createElement("dl");for(const[u,f]of o)if(f){const g=document.createElement("dt");g.textContent=u;const m=document.createElement("dd");m.textContent=f,p.append(g,m)}c.append(p),a.classList.remove("hidden")});function Xm(){const e=performance.memory;return e?Math.round(e.usedJSHeapSize/1048576*10)/10:null}function Ht(e){const t=$("#toast");t.textContent=e,t.classList.add("show"),clearTimeout(ao),ao=window.setTimeout(()=>t.classList.remove("show"),2800)}function ga(){nt.releaseAll(),$("#analog-knob").style.transform="translate(0,0)",$("#analog-pad").classList.remove("dragging")}function $t(){const e=["location-panel","settings-panel","help-panel","pause-panel"].some(t=>!$("#"+t).classList.contains("hidden"));hn.classList.toggle("overlay-open",e),e&&ga()}function Jo(){document.querySelectorAll(".preset").forEach((e,t)=>{const n=ca[t],i=Math.abs(n.lat-Yt.lat)<2e-4&&Math.abs(n.lon-Yt.lon)<2e-4;e.classList.toggle("selected",i),e.setAttribute("aria-pressed",String(i))})}function ho(e){$("#picker-place").textContent=Yt.name,$("#picker-coverage").textContent=e}async function Ji(e){const t=++Cr;Yt=e,$("#picker-place").textContent=e.name,ho("Checking packaged OSM buildings and roads…"),Jo(),tn=!1,Fi=0,$("#building-info").classList.add("hidden"),yn.clear(),Hn.clear(),He.reset(Gt),$("#geo-status").textContent="MAPPING WORLD";const n=e.name.toLowerCase(),i=/moab|grand canyon|sahara|utah|arizona/.test(n),r=/alps|everest|mountain|swiss/.test(n);Jr.uniforms.uRumbleDesert.value=i?1:0,Jr.uniforms.uRumbleAlpine.value=r?1:0,Et.fog instanceof Oo&&Et.fog.color.set(i?"#c9b99e":r?"#bdcbd2":"#c2c9c4"),["location-panel","settings-panel","help-panel","pause-panel"].forEach(a=>$("#"+a).classList.add("hidden")),$t(),$("#loading").classList.remove("done"),$("#place-name").textContent=e.name,$("#terrain-name").textContent=e.terrain??"OPEN TERRAIN",Ht("Mapping terrain…"),await tt.load(e),t===Cr&&(X.reset(tt,di.scale),pt.reset(),$("#loading").classList.add("done"),Ht("Terrain is ready. Go make a mess."),He.load(e,(a,s)=>tt.heightAt(a,s),Gt,tt.frame).then(a=>{t===Cr&&(a.heading!==void 0&&X.speed<2&&(X.yaw=a.heading),$("#geo-status").textContent=a.source==="osm"?"OSM MAP · MAPPED":"TERRAIN ONLY",$("#geo-status").title=a.message,ho(a.source==="osm"?`${a.buildings.toLocaleString()} real OSM buildings · ${a.roads.toLocaleString()} mapped roads and paths`:"TERRAIN ONLY · no packaged buildings or roads at this location."),a.source==="osm"&&Hn.setLocation(e,tt.frame,((s,o)=>tt.heightAt(s,o)),He.sceneryRoads,He.list),Ht(a.source==="osm"?`OSM map · ${a.buildings} buildings · ${a.roads} street/path lines`:"No packaged map data here. Terrain only; no practice obstacles were added."))}),an?.flyTo({center:[e.lon,e.lat],zoom:12}),ia?.setLngLat([e.lon,e.lat]))}$("#practice-course").addEventListener("click",()=>{const e=He.addPracticeCourse((t,n)=>tt.heightAt(t,n),Gt);$("#geo-status").textContent="PRACTICE COURSE",$("#geo-status").title=`${He.status.message} · OPTIONAL PRACTICE OBSTACLES`,Ht(e?`Optional practice course added · ${e} obstacles`:"Practice obstacles are already active.")});ca.forEach((e,t)=>{const n=document.createElement("button");n.className="preset",n.setAttribute("aria-pressed","false"),n.innerHTML=`<span class="preset-index">0${t+1}</span><span>${e.name}</span><i>↗</i>`,n.onclick=()=>Ji(e),$("#presets").append(n)});Jo();$("#search-form").addEventListener("submit",async e=>{e.preventDefault();const t=$("#location-search").value.trim();if(!t)return;const n=$("#search-results");n.innerHTML='<div class="search-status">SEARCHING THE GLOBE…</div>';try{const i=await Gp(t);if(!i.length){n.innerHTML='<div class="search-status">No places found. Try a nearby town or coordinates.</div>';return}n.innerHTML="";for(const r of i){const a=document.createElement("button");a.className="result",a.innerHTML=`<span>⌖</span><span>${r.name}</span><i>↗</i>`,a.onclick=()=>Ji(r),n.append(a)}}catch{n.innerHTML='<div class="search-status">Location search is busy. Try coordinates like 40.7, -73.9.</div>'}});$("#location-search").addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),$("#search-form").requestSubmit())});$("#map-btn").onclick=async()=>{if($("#location-panel").classList.toggle("hidden"),$("#settings-panel").classList.add("hidden"),$("#help-panel").classList.add("hidden"),$t(),an)setTimeout(()=>an?.resize(),100);else{const[t,n]=await Promise.all([qr(()=>import("./maplibre-gl-BT_db7in.js"),[],import.meta.url),qr(()=>import("./maplibre-gl-worker-re4DVwB4.js"),[],import.meta.url)]);t.setWorkerUrl(n.default),an=new t.Map({container:"mini-map",style:"https://tiles.openfreemap.org/styles/liberty",center:[Yt.lon,Yt.lat],zoom:10,attributionControl:!1}),an.addControl(new t.NavigationControl({showCompass:!1}),"top-right"),ia=new t.Marker({color:"#f2632b"}).setLngLat([Yt.lon,Yt.lat]).addTo(an),an.on("click",i=>{const r={name:`${i.lngLat.lat.toFixed(4)}, ${i.lngLat.lng.toFixed(4)}`,lat:i.lngLat.lat,lon:i.lngLat.lng};ia?.setLngLat(i.lngLat);const a=document.createElement("button");a.className="result",a.innerHTML=`<span>⌖</span><span>Drive at ${r.name}</span><i>↗</i>`,a.onclick=()=>Ji(r),$("#search-results").replaceChildren(a)})}};$("#settings-btn").onclick=()=>{$("#settings-panel").classList.toggle("hidden"),$("#location-panel").classList.add("hidden"),$("#help-panel").classList.add("hidden"),$t()};const va=()=>{$("#help-panel").classList.toggle("hidden"),$("#location-panel").classList.add("hidden"),$("#settings-panel").classList.add("hidden"),$t()};$("#help-btn").onclick=va;$("#touch-help").onclick=va;document.querySelectorAll("[data-close]").forEach(e=>e.addEventListener("click",()=>{$("#"+e.dataset.close).classList.add("hidden"),$t()}));const _a=(e,t,n)=>{const i=$("#"+e);i.oninput=()=>{const r=+i.value/(t==="scale"?10:1);di[t]=r,$("#"+t+"-value").textContent=n(r),t==="scale"&&on.root.scale.setScalar(r)}};_a("gravity","gravity",e=>e.toFixed(0));_a("jump","jump",e=>e.toFixed(0));_a("scale","scale",e=>e.toFixed(1)+"×");$("#paint").addEventListener("input",e=>on.setColor(e.target.value));function el(e){Ot=e,$("#graphics-quality").value=e,_t.setPixelRatio(Math.min(devicePixelRatio||1,fa(e)));const t=ha();_t.setSize(t.width,t.height),_t.shadowMap.enabled=e!=="low",gt.castShadow=e!=="low";const n=e==="high"?1536:e==="medium"?1024:512;gt.shadow.mapSize.set(n,n),gt.shadow.needsUpdate=!0,tt.setVisualQuality(e),sn.setQuality(e),yn.setQuality(e),Hn.setQuality(e),ma.uniforms.uOpacity.value=tl(e)}const tl=e=>e==="low"?.18:e==="medium"?.23:.29;$("#graphics-quality").addEventListener("change",e=>el(e.target.value));tt.setVisualQuality(Ot);sn.setQuality(Ot);yn.setQuality(Ot);ma.uniforms.uOpacity.value=tl(Ot);el(Ot);let nl=null,il=null;try{const e=localStorage.getItem(Ko);if(e)nl=JSON.parse(e);else for(const t of Bm){const n=localStorage.getItem(t);if(n){il=JSON.parse(n);break}}}catch{}const fi=km(nl,il);Pe.setVolumes(fi.volumes??Yo);Pe.setMuted(fi.muted);Pe.setTrackIndex(fi.trackIndex);Pe.setShuffle(fi.shuffle);Pe.setMusicPreference(fi.musicPlaying);const er=(e,t,n)=>{const i=$("#"+e);i.value=String(Math.round(Pe.getVolumes()[t]*100)),$("#"+n).textContent=`${i.value}%`,i.addEventListener("input",()=>{const r=+i.value;Pe.setVolumes({[t]:r/100}),$("#"+n).textContent=`${r}%`,Zt()})};function Zt(){try{localStorage.setItem(Ko,JSON.stringify({volumes:Pe.getVolumes(),muted:Pe.isMuted(),trackIndex:Pe.getTrackIndex(),shuffle:Pe.isShuffleEnabled(),musicPlaying:Pe.isMusicRequested()}))}catch{}}const jn=$("#audio-toggle");jn.checked=!Pe.isMuted();er("master-volume","master","volume-value");er("engine-volume","engine","engine-volume-value");er("effects-volume","effects","effects-volume-value");er("music-volume","music","music-volume-value");const ra=$("#music-play"),qm=$("#music-track"),rl=$("#music-previous"),al=$("#music-next"),Oi=$("#music-shuffle"),Ym=$("#radio-quick-track"),Bi=$("#radio-quick-toggle"),sl=$("#radio-quick-previous"),ol=$("#radio-quick-next");function pn(){const e=Pe.diagnostics(),t=en[e.trackIndex];qm.textContent=`${t.artist} — ${t.title}`,Ym.textContent=`${t.title} · ${t.artist}`;const n=$("#music-credit");n.href=t.sourceUrl;const i=Pe.isMusicPlaying()?"PAUSE":e.musicError?"RETRY":"PLAY";ra.textContent=i,Bi.textContent=Pe.isMusicPlaying()?"Ⅱ":"▶",Bi.setAttribute("aria-label",Pe.isMusicPlaying()?"Pause Rumble Roam Radio":"Play Rumble Roam Radio"),ra.disabled=sl.disabled=Bi.disabled=ol.disabled=rl.disabled=al.disabled=Oi.disabled=!Pe.hasSoundtrack(),Oi.classList.toggle("selected",Pe.isShuffleEnabled()),Oi.setAttribute("aria-pressed",String(Pe.isShuffleEnabled())),e.musicError?$("#audio-status").textContent=e.musicError:$("#audio-status").textContent="Music starts on your first driving input. Volumes stay independently mixed."}pn();jn.addEventListener("change",()=>{jn.checked&&Pe.start(),Pe.setMuted(!jn.checked),$("#audio-status").textContent=jn.checked?"Game audio enabled.":"Game audio muted.",Zt()});$("#audio-test").addEventListener("click",()=>{Pe.start();const e=Pe.testTone();$("#audio-status").textContent=e?"Short test tone sent through the game output.":"Unmute audio to hear the test tone.",e||Ht("Turn Audio on to hear the test.")});rl.addEventListener("click",()=>{Pe.start(),Pe.previousTrack(),pn(),Zt()});const ll=()=>{Pe.isMusicPlaying()?Pe.pauseMusic():Pe.playMusic(),pn(),Zt()};ra.addEventListener("click",ll);Bi.addEventListener("click",ll);al.addEventListener("click",()=>{Pe.start(),Pe.nextTrack(),pn(),Zt()});sl.addEventListener("click",()=>{Pe.start(),Pe.previousTrack(),pn(),Zt()});ol.addEventListener("click",()=>{Pe.start(),Pe.nextTrack(),pn(),Zt()});Oi.addEventListener("click",()=>{Pe.setShuffle(!Pe.isShuffleEnabled()),pn(),Zt()});window.addEventListener("rumble-radio-change",()=>{pn(),Zt()});function Sa(){X.reset(tt,di.scale),pt.reset(),on.root.visible=!0,Ht("Truck recovered. Send it!")}function Ma(e){const t=["chase","far","hood","free"];Cn=e??t[(t.indexOf(Cn)+1)%t.length],document.querySelectorAll("[data-camera]").forEach(n=>n.classList.toggle("selected",n.dataset.camera===Cn))}function Ea(){tn=!tn,tn&&nt.releaseAll(),$("#pause-panel").classList.toggle("hidden",!tn),$t()}$("#reset-btn").onclick=Sa;$("#touch-reset").onclick=()=>{Pe.start(),Sa()};$("#touch-camera").onclick=()=>Ma();$("#touch-pause").onclick=()=>Ea();$("#resume-btn").onclick=()=>{Pe.start(),tn=!1,ci=performance.now(),$("#pause-panel").classList.add("hidden"),$t()};$("#pause-btn").onclick=()=>Ea();$("#pause-location").onclick=()=>{$("#pause-panel").classList.add("hidden"),$t(),$("#map-btn").click()};document.querySelectorAll("[data-camera]").forEach(e=>e.addEventListener("click",()=>Ma(e.dataset.camera)));const Dr=$("#steering-mode"),Ur=$("#steering-sensitivity");Dr.addEventListener("change",()=>{nt.setSteeringMode(Dr.value),hn.classList.toggle("classic-steering",Dr.value==="buttons")});Ur.addEventListener("input",()=>{nt.setSensitivity(+Ur.value/100),$("#sensitivity-value").textContent=`${Ur.value}%`});$("#touch-gear").addEventListener("click",()=>{const e=nt.toggleGear();$("#touch-gear").textContent=e===1?"FWD":"REV",$("#touch-gear").setAttribute("aria-label",e===1?"Forward selected; toggle to reverse":"Reverse selected; toggle to forward")});const ii=$("#touch-control-mode");ii.textContent=zn?"⌨ KEYS":"◉ TOUCH";ii.setAttribute("aria-pressed",String(!hn.classList.contains("keyboard-controls-visible")));ii.onclick=()=>{const e=hn.classList.toggle("keyboard-controls-visible");ii.innerHTML=e?"◉ <span>TOUCH</span>":"⌨ <span>KEYS</span>",ii.setAttribute("aria-pressed",String(!e))};window.addEventListener("keydown",e=>{if(e.repeat||Zr(e.target))return;const t=e.key.toLowerCase();["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"," ","shift","q","e","f"].includes(t)&&(Pe.start(),Zt()),t==="m"&&$("#map-btn").click(),t==="c"&&Ma(),t==="r"&&Sa(),e.key==="Escape"&&Ea(),(e.key==="?"||t==="h")&&va()});document.querySelectorAll("[data-touch]").forEach(e=>{const t=e.dataset.touch;e.addEventListener("pointerdown",n=>{if(!(n.pointerType==="mouse"&&n.button!==0)){n.preventDefault(),nt.pointerDown(n.pointerId,t);try{e.setPointerCapture(n.pointerId)}catch{}Pe.start()}}),e.addEventListener("pointerup",n=>{n.preventDefault(),nt.pointerUp(n.pointerId)}),e.addEventListener("pointercancel",n=>nt.pointerCancel(n.pointerId)),e.addEventListener("lostpointercapture",n=>nt.lostPointerCapture(n.pointerId))});const Kt=$("#analog-pad"),cl=$("#analog-knob");Kt.addEventListener("pointerdown",e=>{if(e.pointerType==="mouse"&&e.button!==0)return;e.preventDefault();const t=Kt.getBoundingClientRect();nt.analog.pointerDown(e.pointerId,e.clientX,e.clientY,Math.min(t.width,t.height)*.42),Kt.classList.add("dragging");try{Kt.setPointerCapture(e.pointerId)}catch{}Pe.start()});Kt.addEventListener("pointermove",e=>{if(nt.analog.pointerId!==e.pointerId)return;e.preventDefault();const t=Kt.getBoundingClientRect();nt.analog.pointerMove(e.pointerId,e.clientX,e.clientY);const n=Math.min(t.width,t.height)*.32;cl.style.transform=`translate(${nt.analog.x*n}px,${nt.analog.y*n}px)`});const xa=e=>{nt.analog.pointerUp(e.pointerId),cl.style.transform="translate(0,0)",Kt.classList.remove("dragging")};Kt.addEventListener("pointerup",xa);Kt.addEventListener("pointercancel",xa);Kt.addEventListener("lostpointercapture",xa);window.addEventListener("blur",()=>ga());document.addEventListener("visibilitychange",()=>{ci=performance.now(),document.hidden&&(Pe.suspend(),ga(),tn=!0,$("#pause-panel").classList.remove("hidden"),$t())});window.addEventListener("pointermove",e=>{Cn==="free"&&e.buttons&&(na-=e.movementX*.004,ni=ot.clamp(ni-e.movementY*.003,-.3,1.1))});let po=0,Ir=60;function Km(e){const t=X.pos,n=fn(X.yaw),i=Math.min(1,X.speed/28),r=Math.max(-35,Math.min(35,(X.speed-po)/Math.max(e,.001)));po=X.speed;const a=X.speed>3?Math.atan2(X.vel.x,X.vel.z):X.yaw,s=Math.atan2(Math.sin(a-X.yaw),Math.cos(a-X.yaw)),o=X.yaw+s*ot.clamp((X.speed-4)/8,0,.34),c=fn(o);let p,u;if(Cn==="hood")p=t.clone().add(new ne(0,2.3,0)).addScaledVector(n,1.2),u=p.clone().addScaledVector(n,7).add(new ne(0,.3,0));else if(Cn==="free"){const m=new ne(Math.sin(na)*Math.cos(ni),Math.sin(ni),Math.cos(na)*Math.cos(ni));p=t.clone().add(new ne(0,1.5,0)),u=p.clone().addScaledVector(m,-14)}else{const m=Cn==="far",M=(m?30:11.8)+i*(m?8:3.8),E=(m?10:5.35)+i*1.6;p=t.clone().add(new ne(0,1.4,0)).addScaledVector(c,X.speed*.2),u=t.clone().addScaledVector(c,-M).add(new ne(0,E,0)).addScaledVector(X.vel,-.11),m||u.addScaledVector($i(o),2.3),u.addScaledVector(c,-ot.clamp(r*.018,-.8,.8))}const f=p;kt>0&&(u.x+=(Math.random()-.5)*kt,u.y+=(Math.random()-.5)*kt,kt=Math.max(0,kt-e*1.3)),Je.position.lerp(u,1-Math.exp(-(5.4-i*.65)*e)),Je.lookAt(f);const g=60+i*4.5;Math.abs(g-Ir)>.15&&(Ir=g,Je.fov=Ir,Je.updateProjectionMatrix())}let mo=Number.NaN,go=Number.NaN;function ul(e){requestAnimationFrame(ul);const t=performance.now(),n=Math.min((e-ci)/1e3,.045);if(ci=e,e-lo>400){lo=e;const u=He.progress;u.phase==="features"?$("#geo-status").textContent="MAPPING WORLD":u.phase==="buildings"?$("#geo-status").textContent=`BUILDING WORLD · ${u.total?Math.round(u.complete/u.total*100):0}%`:u.phase==="batching"||u.phase==="colliders"?$("#geo-status").textContent="PREPARING WORLD":u.phase==="roads"&&($("#geo-status").textContent="MAPPING ROADS")}if(!tn){const u=nt.update(!X.grounded),f=X.grounded,g=X.vel.y,m=performance.now();X.update(n,u,tt,on,di),uo=performance.now()-m,hn.classList.toggle("airborne",!X.grounded);const M=pt.update({grounded:X.grounded,airtime:X.airTime,pitch:X.pitch,roll:X.roll,landingSpeed:Math.abs(g)});if(!f&&X.grounded&&(jo=Math.abs(g),Qo=M),f&&!X.grounded&&u.jump&&(Pe.jump(),kt=Math.max(kt,.07)),!f&&X.grounded&&(Pe.landing(Math.min(1,Math.abs(g)/20)),sn.burst(new ne(X.pos.x,X.pos.y-1.35,X.pos.z),Math.round(5+Math.min(14,Math.abs(g)*.65)),/moab|utah|desert/i.test(Yt.name)?13019253:10130044),kt=Math.max(kt,Math.min(.28,Math.abs(g)*.008)),M&&(Ht(`${M.message}  +${M.points.toLocaleString()} PTS`),pt.bestScore>ta())))try{localStorage.setItem(ea,String(pt.bestScore))}catch{}const E=Gt.step(X.pos,X.yaw,n,X.vel);if(E){const l=He.break(E.building);if(Gt.removeBuilding(E.building),l){Fi++;const T=Math.round(100+Math.min(420,E.building.h*12)+E.intensity*120);pt.awardBonus(T);try{pt.bestScore>ta()&&localStorage.setItem(ea,String(pt.bestScore))}catch{}yn.destroy(E.building,E,(w,b)=>tt.heightAt(w,b)),sn.burst(E.position,Math.round(22+E.intensity*20),16752988),X.vel.addScaledVector(E.normal,-(1.5+E.intensity*4)),X.vel.y+=1+E.intensity*2.5,kt=Math.max(kt,.2+E.intensity*.48),Pe.impact(E.intensity),Ht(Fi>1?`MULTI-SMASH · +${T} PTS`:`BUILDING SMASHED · DEMOLITION BONUS +${T}`)}}const h=Math.abs(X.vel.dot($i(X.yaw)));for(let l=0;l<X.wheelContacts.length;l++){const T=X.wheelContacts[l];T.contact&&sn.dust(new ne(T.x,T.height+.07,T.z),X.speed*(h>X.speed*.28?1.5:1))}if(u.nitro&&X.nitro>0&&Math.random()<n*8){const l=X.pos.clone().addScaledVector(fn(X.yaw),-1.72);sn.burst(l.add(new ne((Math.random()-.5)*.9,.9,(Math.random()-.5)*.35)),1,16742965)}sn.update(n),yn.update(n),He.updateVisibility(X.pos.x,X.pos.z,Ot==="low"?500:Ot==="medium"?800:1100),Pe.update(X.speed,u.throttle,u.nitro&&X.nitro>0,Math.max(u.handbrake?.55:0,h/Math.max(4,X.speed)),n),Km(n),e-oo>550&&(oo=e,He.updateStreetLabels(X.pos.x,X.pos.z,X.yaw,Zo))}const i=Math.floor(X.pos.x/40),r=Math.floor(X.pos.z/40);if(i!==mo||r!==go){mo=i,go=r;const u=i*40,f=r*40;gt.position.set(u-125,X.pos.y+250,f+95),gt.target.position.set(u,0,f),gt.target.updateMatrixWorld(),gt.shadow.needsUpdate=!0}Qi.position.copy(Je.position);const a=X.wheelContacts.reduce((u,f)=>Math.max(u,f.height),-1/0),s=Number.isFinite(a)?a:tt.heightAt(X.pos.x,X.pos.z),o=ot.clamp(X.pos.y-s,0,80);li.position.set(X.pos.x,s+.035,X.pos.z),li.scale.set(1.35+o*.055,2+o*.07,1),$("#speed").textContent=String(Math.round(X.speed*3.6)).padStart(3,"0"),$("#speed-bar").style.width=`${Math.min(100,X.speed/30*100)}%`,$("#nitro-bar").style.width=`${X.nitro}%`,$("#nitro-state").textContent=X.nitro>5?"READY TO BURN":"RECHARGING",$("#air-time").textContent=`${pt.airtime.toFixed(1)}s`,$("#stunt-score").textContent=pt.currentPoints.toLocaleString(),$("#stunt-best").textContent=pt.bestScore.toLocaleString(),e-so>900&&tt.frame&&(so=e,$("#street-name").textContent=He.nearestStreetName(X.pos.x,X.pos.z,tt.frame)||""),He.updateCollisionWindow(X.pos.x,X.pos.z,Gt),Hn.update(X.pos.x,X.pos.z),$("#level-hint").textContent=pt.isAirborne?nt.state.level?"LEVELING…":"F / LEVEL TO RIGHT":"",$("#touch-level").classList.toggle("active",nt.state.level??!1);const c=performance.now();_t.render(Et,Je),co=performance.now()-c;const p=performance.now()-t;if(Lr+=p,Pi=Math.max(Pi,p),Ci++,e-Pr>=1e3){const u=tt.takePerformanceSample();window.__monsterMapMetrics={fps:Math.round(Ci*1e3/(e-Pr)),frameMs:Math.round(Lr/Ci*10)/10,frameMsMax:Math.round(Pi*10)/10,physicsMs:+uo.toFixed(2),renderMs:+co.toFixed(2),terrainSampleMs:+u.heightSampleMs.toFixed(3),terrainSamples:u.heightSamples,terrainTileBuildMs:+u.tileBuildMs.toFixed(3),terrainTileBuilds:u.tileBuilds,pixelRatio:_t.getPixelRatio(),graphicsQuality:Ot,drawCalls:_t.info.render.calls,triangles:_t.info.render.triangles,geometries:_t.info.memory.geometries,textures:_t.info.memory.textures,heapMB:Xm(),audioState:Pe.getState(),audioRms:+Pe.outputRms().toFixed(4),audioMuted:Pe.isMuted(),volume:Pe.getMasterVolume(),sceneryInstances:Hn.instanceCount,activeBuildingColliders:He.activeCollisionCount,gpuRenderer:Hm,geoLoadPhase:He.progress.phase,geoLoadPercent:He.progress.total?Math.round(He.progress.complete/He.progress.total*100):0,speed:X.speed,position:[X.pos.x,X.pos.y,X.pos.z],destroyed:Fi,activeDebris:yn.activeCount,osmBuildings:He.status.buildings,osmRoads:He.status.roads,streetLabels:He.streetLabelCount,worldDataSource:He.status.source,yaw:X.yaw,pitch:X.pitch,roll:X.roll,steer:nt.state.steer,throttle:nt.state.throttle,nitro:nt.state.nitro,jump:nt.state.jump,grounded:X.grounded,activeTouchActions:nt.touches.size,frontWheelAngles:on.frontWheels.map(f=>f.rotation.y),rearWheelAngles:on.wheels.filter(f=>!on.frontWheels.includes(f)).map(f=>f.rotation.y),wheelContacts:X.wheelContacts.filter(f=>f.contact).length,averageCompression:X.wheelContacts.reduce((f,g)=>f+g.compression,0)/Math.max(1,X.wheelContacts.length),contactPitch:X.contactPitch,contactRoll:X.contactRoll,terrainOriginHeight:tt.heightAt(0,0),stuntAirtime:pt.airtime,stuntPoints:pt.currentPoints,bestStunt:pt.bestScore,stuntRolls:pt.rolls,stuntFlips:pt.flips,leveling:nt.state.level??!1},Ci=0,Lr=0,Pi=0,Pr=e}}function tr(){const e=ha();_t.setPixelRatio(Math.min(devicePixelRatio||1,fa(Ot))),_t.setSize(e.width,e.height),Je.aspect=e.width/Math.max(1,e.height),Je.updateProjectionMatrix(),Zo.viewport={width:e.width,height:e.height},an?.resize()}window.addEventListener("resize",tr);window.addEventListener("orientationchange",()=>setTimeout(tr,180));window.visualViewport?.addEventListener("resize",tr);const dl=$("#game");dl.addEventListener("webglcontextlost",e=>{e.preventDefault(),nt.releaseAll(),tn=!0,$("#pause-panel").classList.remove("hidden"),$t(),Ht("Graphics paused. Return to the game when ready.")});dl.addEventListener("webglcontextrestored",()=>{ci=performance.now(),tr(),Ht("Graphics restored.")});await Ji(Yt);requestAnimationFrame(ul);
