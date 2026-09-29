module.exports = [
"[project]/components/Header.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$client$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/client-utils.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Header({ detail = false }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const sync = ()=>{
            setUser((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$client$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSession"])());
            setCount((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$client$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCart"])().reduce((total, item)=>total + (Number.parseInt(item.quantity, 10) || 1), 0));
        };
        sync();
        window.addEventListener('toppro-auth-change', sync);
        window.addEventListener('toppro-cart-change', sync);
        return ()=>{
            window.removeEventListener('toppro-auth-change', sync);
            window.removeEventListener('toppro-cart-change', sync);
        };
    }, []);
    const logout = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$client$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setSession"])(null);
        window.location.href = '/';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `topbar ${detail ? 'detail-topbar' : ''} ${open ? 'is-open' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "brand",
                        href: "/",
                        "aria-label": "Top Pro home",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "brand-mark has-logo",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: "brand-logo",
                                    src: "/assets/logo.png",
                                    alt: "Top Pro logo"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.jsx",
                                    lineNumber: 35,
                                    columnNumber: 49
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "brand-copy",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Top Pro"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.jsx",
                                        lineNumber: 36,
                                        columnNumber: 40
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "Rally-ready goods"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.jsx",
                                        lineNumber: 36,
                                        columnNumber: 64
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.jsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "nav-toggle",
                        type: "button",
                        "aria-expanded": open,
                        onClick: ()=>setOpen(!open),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 39,
                                columnNumber: 24
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 39,
                                columnNumber: 37
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Abrir navegacion"
                            }, void 0, false, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 39,
                                columnNumber: 50
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.jsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: `nav ${detail ? 'detail-nav' : ''} ${open ? 'is-open' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/productos",
                                children: "Productos"
                            }, void 0, false, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/donde-encontrarnos",
                                children: "Contacto"
                            }, void 0, false, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/carrito",
                                children: [
                                    "Carrito",
                                    count > 0 ? ` (${count})` : ''
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            user?.role === 'admin' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/admin",
                                children: "Admin"
                            }, void 0, false, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 45,
                                columnNumber: 37
                            }, this) : null,
                            user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/auth",
                                        children: user.name || 'Mi cuenta'
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.jsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "nav-logout-button",
                                        type: "button",
                                        onClick: logout,
                                        children: "Salir"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.jsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/auth",
                                children: "Ingresar"
                            }, void 0, false, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 51,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.jsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Header.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `mobile-menu-backdrop ${open ? 'is-visible' : ''}`,
                type: "button",
                "aria-label": "Cerrar navegacion",
                onClick: ()=>setOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/Header.jsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Header.jsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/client-utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CART_KEY",
    ()=>CART_KEY,
    "SESSION_KEY",
    ()=>SESSION_KEY,
    "TOKEN_KEY",
    ()=>TOKEN_KEY,
    "addToCart",
    ()=>addToCart,
    "apiRequest",
    ()=>apiRequest,
    "availabilityLabel",
    ()=>availabilityLabel,
    "canAddProduct",
    ()=>canAddProduct,
    "cartTotal",
    ()=>cartTotal,
    "clearCart",
    ()=>clearCart,
    "formatUsdTotal",
    ()=>formatUsdTotal,
    "getCart",
    ()=>getCart,
    "getSession",
    ()=>getSession,
    "getToken",
    ()=>getToken,
    "normalizeCartItem",
    ()=>normalizeCartItem,
    "reconcileCart",
    ()=>reconcileCart,
    "removeCartItem",
    ()=>removeCartItem,
    "setSession",
    ()=>setSession,
    "updateCartQuantity",
    ()=>updateCartQuantity,
    "whatsappHref",
    ()=>whatsappHref
]);
'use client';
const TOKEN_KEY = 'top-pro-api-token';
const SESSION_KEY = 'top-pro-session';
const CART_KEY = 'top-pro-cart';
function getToken() {
    if ("TURBOPACK compile-time truthy", 1) return '';
    //TURBOPACK unreachable
    ;
}
function getSession() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
}
function setSession(user, token = '') {
    if (!user) {
        localStorage.removeItem(SESSION_KEY);
        localStorage.removeItem(TOKEN_KEY);
    } else {
        localStorage.setItem(SESSION_KEY, JSON.stringify(user));
        if (token) localStorage.setItem(TOKEN_KEY, token);
    }
    window.dispatchEvent(new CustomEvent('toppro-auth-change'));
}
async function apiRequest(path, options = {}) {
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers || {}
    };
    const token = getToken();
    if (token) headers.Authorization = `Bearer ${token}`;
    const response = await fetch(path, {
        ...options,
        headers,
        cache: 'no-store'
    });
    const payload = await response.json().catch(()=>({}));
    if (!response.ok) throw new Error(payload.error || 'No se pudo completar la accion.');
    return payload;
}
function canAddProduct(product) {
    const stock = Number.parseInt(product?.stock, 10) || 0;
    return stock > 0 || product?.allowPreorder === true;
}
function availabilityLabel(product) {
    const stock = Number.parseInt(product?.stock, 10) || 0;
    if (stock > 0) return `Stock disponible: ${stock}`;
    if (product?.allowPreorder) return 'Sin stock inmediato · Pre-reserva disponible';
    return 'Sin stock';
}
function getCart() {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
}
function getItemKey(slug, variantId = '') {
    return `${slug || 'producto'}::${variantId || 'default'}`;
}
function normalizeCartItem(product, options = {}) {
    const variant = options.variant || null;
    const variantLabel = options.variantLabel || variant?.label || '';
    const variantId = options.variantId || variant?.id || '';
    const frontView = variant?.views?.find((view)=>view.id === 'front') || variant?.views?.[0] || null;
    return {
        key: getItemKey(product.slug, variantId),
        slug: product.slug,
        page: product.page || `/producto/${product.slug}`,
        name: variantLabel ? `${product.name} - ${variantLabel}` : product.name,
        baseName: product.name,
        variantId,
        variantLabel,
        price: options.price || variant?.price || product.price || '',
        src: options.image?.src || frontView?.src || product.src || '',
        alt: options.image?.alt || frontView?.alt || product.alt || product.name,
        quantity: Math.max(1, Number.parseInt(options.quantity, 10) || 1)
    };
}
async function reconcileCart(products = null, notify = false) {
    const currentItems = getCart();
    let latestProducts = products;
    if (!latestProducts) {
        latestProducts = (await apiRequest('/api/products')).products || [];
    }
    const productMap = new Map(latestProducts.map((product)=>[
            product.slug,
            product
        ]));
    const nextItems = currentItems.map((item)=>{
        const product = productMap.get(item.slug);
        if (!product || !canAddProduct(product)) return null;
        const variant = item.variantId ? (product.variants || []).find((entry)=>entry.id === item.variantId) : null;
        if (item.variantId && !variant) return null;
        return normalizeCartItem(product, {
            quantity: item.quantity,
            variant,
            variantId: item.variantId,
            variantLabel: variant?.label || item.variantLabel,
            price: variant?.price || product.price || item.price
        });
    }).filter(Boolean);
    if (JSON.stringify(currentItems) !== JSON.stringify(nextItems)) {
        localStorage.setItem(CART_KEY, JSON.stringify(nextItems));
        if (notify) window.dispatchEvent(new CustomEvent('toppro-cart-change'));
    }
    return nextItems;
}
async function addToCart(product, options = {}) {
    const products = (await apiRequest('/api/products')).products || [];
    const latest = products.find((item)=>item.slug === product.slug) || product;
    if (!canAddProduct(latest)) {
        await reconcileCart(products, true);
        return {
            ok: false
        };
    }
    const items = await reconcileCart(products, false);
    const nextItem = normalizeCartItem(latest, options);
    const existingIndex = items.findIndex((item)=>item.key === nextItem.key);
    if (existingIndex >= 0) {
        items[existingIndex] = {
            ...items[existingIndex],
            ...nextItem,
            quantity: items[existingIndex].quantity + nextItem.quantity
        };
    } else {
        items.push(nextItem);
    }
    localStorage.setItem(CART_KEY, JSON.stringify(items));
    window.dispatchEvent(new CustomEvent('toppro-cart-change'));
    return {
        ok: true
    };
}
function updateCartQuantity(key, quantity) {
    const items = getCart().map((item)=>item.key === key ? {
            ...item,
            quantity: Math.max(1, Number.parseInt(quantity, 10) || 1)
        } : item);
    localStorage.setItem(CART_KEY, JSON.stringify(items));
    window.dispatchEvent(new CustomEvent('toppro-cart-change'));
}
function removeCartItem(key) {
    localStorage.setItem(CART_KEY, JSON.stringify(getCart().filter((item)=>item.key !== key)));
    window.dispatchEvent(new CustomEvent('toppro-cart-change'));
}
function clearCart() {
    localStorage.setItem(CART_KEY, '[]');
    window.dispatchEvent(new CustomEvent('toppro-cart-change'));
}
function formatUsdTotal(amount) {
    return `${(Math.round((amount + Number.EPSILON) * 100) / 100).toFixed(2)} USD`;
}
function cartTotal(items) {
    return items.reduce((total, item)=>{
        const match = String(item.price || '').replace(',', '.').match(/(\d+(?:\.\d+)?)/);
        const price = match ? Number.parseFloat(match[1]) : 0;
        return total + price * (Number.parseInt(item.quantity, 10) || 1);
    }, 0);
}
function whatsappHref(items, extra = '') {
    const lines = items.map((item)=>`- ${item.quantity} x ${item.name}${item.price ? ` (${item.price})` : ''}`);
    const total = cartTotal(items);
    const message = [
        'Hola Top Pro, quiero pedir estos productos:',
        ...lines,
        total > 0 ? `\nTotal: ${formatUsdTotal(total)}` : '',
        extra ? `\nDatos del pedido:\n${extra}` : ''
    ].filter(Boolean).join('\n');
    return `https://wa.me/595986732551?text=${encodeURIComponent(message)}`;
}
}),
];

//# sourceMappingURL=components_0i-evhu._.js.map