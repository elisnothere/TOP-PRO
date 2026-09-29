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
"[project]/components/HomeClient.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Header.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function CarouselMedia({ product }) {
    const views = product.slug === 'remera-top-pro' ? product.carouselViews?.length ? product.carouselViews : product.views || [] : [];
    if (product.slug === 'bolso-organizador' && product.variants?.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "carousel-card-image-grid",
            children: product.variants.map((variant)=>{
                const front = variant.views?.find((view)=>view.id === 'front') || variant.views?.[0];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "carousel-card-image-tile",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        className: "carousel-card-image carousel-card-image-variant",
                        src: front?.src || product.src,
                        alt: front?.alt || variant.label
                    }, void 0, false, {
                        fileName: "[project]/components/HomeClient.jsx",
                        lineNumber: 17,
                        columnNumber: 77
                    }, this)
                }, variant.id, false, {
                    fileName: "[project]/components/HomeClient.jsx",
                    lineNumber: 17,
                    columnNumber: 18
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/components/HomeClient.jsx",
            lineNumber: 14,
            columnNumber: 7
        }, this);
    }
    if (views.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "carousel-card-image-grid",
            children: views.map((view)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "carousel-card-image-tile",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        className: "carousel-card-image carousel-card-image-variant",
                        src: view.src,
                        alt: view.alt || product.name
                    }, void 0, false, {
                        fileName: "[project]/components/HomeClient.jsx",
                        lineNumber: 26,
                        columnNumber: 86
                    }, this)
                }, view.id, false, {
                    fileName: "[project]/components/HomeClient.jsx",
                    lineNumber: 26,
                    columnNumber: 30
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/HomeClient.jsx",
            lineNumber: 25,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        className: "carousel-card-image",
        src: product.src,
        alt: product.alt || product.name
    }, void 0, false, {
        fileName: "[project]/components/HomeClient.jsx",
        lineNumber: 31,
        columnNumber: 10
    }, this);
}
function CarouselCard({ product, duplicate = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "carousel-card",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: "carousel-card-link",
            href: product.page || `/producto/${product.slug}`,
            tabIndex: duplicate ? -1 : 0,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "carousel-card-image-wrap",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CarouselMedia, {
                        product: product
                    }, void 0, false, {
                        fileName: "[project]/components/HomeClient.jsx",
                        lineNumber: 38,
                        columnNumber: 51
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/HomeClient.jsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "carousel-card-copy",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: product.label
                        }, void 0, false, {
                            fileName: "[project]/components/HomeClient.jsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: product.name
                        }, void 0, false, {
                            fileName: "[project]/components/HomeClient.jsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: product.description
                        }, void 0, false, {
                            fileName: "[project]/components/HomeClient.jsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            className: "carousel-card-cta",
                            children: "Ver detalle"
                        }, void 0, false, {
                            fileName: "[project]/components/HomeClient.jsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/HomeClient.jsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/HomeClient.jsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/HomeClient.jsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
function HomeClient({ products }) {
    const carouselShellRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const carouselGroupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const carouselProducts = products.filter((product)=>product.showInCarousel !== false);
    const featured = products.find((product)=>product.slug === 'cuaderno-de-rally') || products[0];
    const bag = products.find((product)=>product.slug === 'bolso-organizador');
    const shirt = products.find((product)=>product.slug === 'remera-top-pro');
    const bagFronts = (bag?.variants || []).map((variant)=>variant.views?.find((view)=>view.id === 'front') || variant.views?.[0]).filter(Boolean);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let frameId = 0;
        const updateNotebookMotion = ()=>{
            const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
            const progress = Math.min(window.scrollY / maxScroll, 1);
            const root = document.documentElement;
            root.style.setProperty('--scroll-progress', progress.toFixed(4));
            root.style.setProperty('--notebook-rotate', `${-9 + progress * 22}deg`);
            root.style.setProperty('--notebook-shift', `${progress * -48}px`);
            root.style.setProperty('--hero-glow-shift', `${progress * 18}px`);
            frameId = 0;
        };
        const onScroll = ()=>{
            if (frameId) return;
            frameId = window.requestAnimationFrame(updateNotebookMotion);
        };
        updateNotebookMotion();
        window.addEventListener('scroll', onScroll, {
            passive: true
        });
        window.addEventListener('resize', onScroll);
        return ()=>{
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            if (frameId) window.cancelAnimationFrame(frameId);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const shell = carouselShellRef.current;
        const group = carouselGroupRef.current;
        if (!shell || !group) return undefined;
        let frameId = 0;
        let resumeTimerId = 0;
        let loopWidth = 0;
        let autoScrollPaused = false;
        let isDragging = false;
        let dragStartX = 0;
        let dragStartScrollLeft = 0;
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        const normalizeScrollPosition = ()=>{
            if (!loopWidth) return;
            if (shell.scrollLeft < 0) shell.scrollLeft += loopWidth;
            else if (shell.scrollLeft >= loopWidth) shell.scrollLeft -= loopWidth;
        };
        const setAutoScrollPaused = (paused)=>{
            autoScrollPaused = paused;
            shell.classList.toggle('is-paused', paused);
        };
        const scheduleAutoScrollResume = ()=>{
            window.clearTimeout(resumeTimerId);
            resumeTimerId = window.setTimeout(()=>setAutoScrollPaused(false), 120);
        };
        const syncCarouselWidth = ()=>{
            const shellStyles = window.getComputedStyle(shell);
            const gap = Number.parseFloat(shellStyles.getPropertyValue('--carousel-gap')) || 0;
            loopWidth = group.getBoundingClientRect().width + gap;
            shell.style.setProperty('--carousel-loop-width', `${loopWidth}px`);
            normalizeScrollPosition();
        };
        const tick = ()=>{
            if (!autoScrollPaused && !reducedMotion.matches && loopWidth > 0) {
                shell.scrollLeft += 0.65;
                normalizeScrollPosition();
            }
            frameId = window.requestAnimationFrame(tick);
        };
        const onMouseEnter = ()=>setAutoScrollPaused(true);
        const onMouseLeave = ()=>scheduleAutoScrollResume();
        const onFocusIn = ()=>setAutoScrollPaused(true);
        const onFocusOut = (event)=>{
            if (!shell.contains(event.relatedTarget)) scheduleAutoScrollResume();
        };
        const onPointerDown = (event)=>{
            if (event.button !== undefined && event.button !== 0) return;
            isDragging = true;
            dragStartX = event.clientX;
            dragStartScrollLeft = shell.scrollLeft;
            setAutoScrollPaused(true);
            shell.classList.add('is-dragging');
            shell.setPointerCapture?.(event.pointerId);
        };
        const onPointerMove = (event)=>{
            if (!isDragging) return;
            event.preventDefault();
            shell.scrollLeft = dragStartScrollLeft - (event.clientX - dragStartX);
            normalizeScrollPosition();
        };
        const endDrag = (event)=>{
            if (!isDragging) return;
            isDragging = false;
            shell.classList.remove('is-dragging');
            shell.releasePointerCapture?.(event.pointerId);
            scheduleAutoScrollResume();
        };
        syncCarouselWidth();
        frameId = window.requestAnimationFrame(tick);
        const resizeObserver = typeof ResizeObserver === 'function' ? new ResizeObserver(()=>syncCarouselWidth()) : null;
        resizeObserver?.observe(shell);
        resizeObserver?.observe(group);
        window.addEventListener('resize', syncCarouselWidth);
        shell.addEventListener('mouseleave', onMouseLeave);
        shell.addEventListener('mouseenter', onMouseEnter);
        shell.addEventListener('focusin', onFocusIn);
        shell.addEventListener('focusout', onFocusOut);
        shell.addEventListener('pointerdown', onPointerDown);
        shell.addEventListener('pointermove', onPointerMove);
        shell.addEventListener('pointerup', endDrag);
        shell.addEventListener('pointercancel', endDrag);
        return ()=>{
            if (frameId) window.cancelAnimationFrame(frameId);
            window.clearTimeout(resumeTimerId);
            resizeObserver?.disconnect();
            window.removeEventListener('resize', syncCarouselWidth);
            shell.removeEventListener('mouseleave', onMouseLeave);
            shell.removeEventListener('mouseenter', onMouseEnter);
            shell.removeEventListener('focusin', onFocusIn);
            shell.removeEventListener('focusout', onFocusOut);
            shell.removeEventListener('pointerdown', onPointerDown);
            shell.removeEventListener('pointermove', onPointerMove);
            shell.removeEventListener('pointerup', endDrag);
            shell.removeEventListener('pointercancel', endDrag);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "site-shell",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "feature-showcase",
                    id: "home",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "feature-showcase-backdrop",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "backdrop-slideshow",
                                "aria-hidden": "true",
                                children: [
                                    '/assets/SL1.png',
                                    '/assets/SL2.png',
                                    '/assets/SL3.png'
                                ].map((src, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `backdrop-slide backdrop-slide-${index + 1}`,
                                        style: {
                                            backgroundImage: `url(${src})`
                                        }
                                    }, src, false, {
                                        fileName: "[project]/components/HomeClient.jsx",
                                        lineNumber: 211,
                                        columnNumber: 94
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/HomeClient.jsx",
                                lineNumber: 210,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/HomeClient.jsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/components/HomeClient.jsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "hero-section",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hero-copy",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "eyebrow",
                                            children: "Rediseñando el rally"
                                        }, void 0, false, {
                                            fileName: "[project]/components/HomeClient.jsx",
                                            lineNumber: 217,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            children: "Pionero nacional en accesorios para Co-pilotos."
                                        }, void 0, false, {
                                            fileName: "[project]/components/HomeClient.jsx",
                                            lineNumber: 218,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hero-actions",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                className: "button button-primary",
                                                href: "/productos",
                                                children: "Ver productos"
                                            }, void 0, false, {
                                                fileName: "[project]/components/HomeClient.jsx",
                                                lineNumber: 219,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/HomeClient.jsx",
                                            lineNumber: 219,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hero-strip",
                                            "aria-label": "Brand highlights",
                                            children: [
                                                'Inspirados en el espíritu del rally, manteniendo la pasión y la emoción en cada detalle.',
                                                'Único en su ambito, innovando desde el inicio.',
                                                'Mejor calidad de productos para Co-pilotos en el mercado.'
                                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                    className: "strip-card",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: item
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/HomeClient.jsx",
                                                        lineNumber: 225,
                                                        columnNumber: 76
                                                    }, this)
                                                }, item, false, {
                                                    fileName: "[project]/components/HomeClient.jsx",
                                                    lineNumber: 225,
                                                    columnNumber: 33
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/HomeClient.jsx",
                                            lineNumber: 220,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/HomeClient.jsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "visual-stage",
                                    id: "featured",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "visual-backdrop",
                                            "aria-hidden": "true",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "glow glow-sun"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HomeClient.jsx",
                                                    lineNumber: 229,
                                                    columnNumber: 67
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "glow glow-ice"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HomeClient.jsx",
                                                    lineNumber: 229,
                                                    columnNumber: 106
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "landscape slope"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HomeClient.jsx",
                                                    lineNumber: 229,
                                                    columnNumber: 145
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/HomeClient.jsx",
                                            lineNumber: 229,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "notebook-cluster has-photo",
                                            "aria-label": "Top Pro products",
                                            children: [
                                                bagFronts[1] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hero-product photo-bag photo-bag-secondary ghost",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        className: "cover-photo",
                                                        src: bagFronts[1].src,
                                                        alt: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/HomeClient.jsx",
                                                        lineNumber: 231,
                                                        columnNumber: 99
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HomeClient.jsx",
                                                    lineNumber: 231,
                                                    columnNumber: 33
                                                }, this) : null,
                                                bagFronts[0] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hero-product photo-bag photo-bag-primary ghost",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        className: "cover-photo",
                                                        src: bagFronts[0].src,
                                                        alt: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/HomeClient.jsx",
                                                        lineNumber: 232,
                                                        columnNumber: 97
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HomeClient.jsx",
                                                    lineNumber: 232,
                                                    columnNumber: 33
                                                }, this) : null,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "notebook photo-notebook featured-notebook has-photo",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        className: "cover-photo",
                                                        src: "/assets/notebook.png",
                                                        alt: "Top Pro Rally Book notebook cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/HomeClient.jsx",
                                                        lineNumber: 233,
                                                        columnNumber: 86
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HomeClient.jsx",
                                                    lineNumber: 233,
                                                    columnNumber: 17
                                                }, this),
                                                shirt ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hero-product photo-shirt ghost ghost-left",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        className: "cover-photo",
                                                        src: "/assets/shirt.png",
                                                        alt: "Top Pro shirt"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/HomeClient.jsx",
                                                        lineNumber: 234,
                                                        columnNumber: 85
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HomeClient.jsx",
                                                    lineNumber: 234,
                                                    columnNumber: 26
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/HomeClient.jsx",
                                            lineNumber: 230,
                                            columnNumber: 15
                                        }, this),
                                        featured ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "price-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Producto destacado"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HomeClient.jsx",
                                                    lineNumber: 236,
                                                    columnNumber: 59
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: featured.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HomeClient.jsx",
                                                    lineNumber: 236,
                                                    columnNumber: 84
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: featured.price
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HomeClient.jsx",
                                                    lineNumber: 236,
                                                    columnNumber: 116
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/HomeClient.jsx",
                                            lineNumber: 236,
                                            columnNumber: 27
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/HomeClient.jsx",
                                    lineNumber: 228,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HomeClient.jsx",
                            lineNumber: 215,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/HomeClient.jsx",
                    lineNumber: 208,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "products-carousel-section",
                    id: "products",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "section-heading carousel-heading",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "eyebrow",
                                    children: "Productos disponibles"
                                }, void 0, false, {
                                    fileName: "[project]/components/HomeClient.jsx",
                                    lineNumber: 242,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Productos disponibles:"
                                }, void 0, false, {
                                    fileName: "[project]/components/HomeClient.jsx",
                                    lineNumber: 243,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Agrega los productos que quieras al carrito desde el catalogo y despues pedi todo junto por WhatsApp o checkout."
                                }, void 0, false, {
                                    fileName: "[project]/components/HomeClient.jsx",
                                    lineNumber: 244,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HomeClient.jsx",
                            lineNumber: 241,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "product-carousel-shell",
                            ref: carouselShellRef,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "product-carousel-track",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "product-carousel-group",
                                        ref: carouselGroupRef,
                                        children: carouselProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CarouselCard, {
                                                product: product
                                            }, product.slug, false, {
                                                fileName: "[project]/components/HomeClient.jsx",
                                                lineNumber: 248,
                                                columnNumber: 113
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/HomeClient.jsx",
                                        lineNumber: 248,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "product-carousel-group",
                                        "aria-hidden": "true",
                                        children: carouselProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CarouselCard, {
                                                product: product,
                                                duplicate: true
                                            }, `${product.slug}-2`, false, {
                                                fileName: "[project]/components/HomeClient.jsx",
                                                lineNumber: 249,
                                                columnNumber: 109
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/HomeClient.jsx",
                                        lineNumber: 249,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/HomeClient.jsx",
                                lineNumber: 247,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/HomeClient.jsx",
                            lineNumber: 246,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/HomeClient.jsx",
                    lineNumber: 240,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "contact-section",
                    id: "contact",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "eyebrow",
                                    children: "Donde encontrarnos"
                                }, void 0, false, {
                                    fileName: "[project]/components/HomeClient.jsx",
                                    lineNumber: 254,
                                    columnNumber: 16
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Encontranos en nuestros puntos de venta aliados."
                                }, void 0, false, {
                                    fileName: "[project]/components/HomeClient.jsx",
                                    lineNumber: 254,
                                    columnNumber: 61
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HomeClient.jsx",
                            lineNumber: 254,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "contact-panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: "button button-primary",
                                    href: "/donde-encontrarnos",
                                    children: "Donde encontrarnos"
                                }, void 0, false, {
                                    fileName: "[project]/components/HomeClient.jsx",
                                    lineNumber: 256,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "button button-secondary",
                                    href: "https://wa.me/595986732551",
                                    children: "Contactanos a traves de whatsapp"
                                }, void 0, false, {
                                    fileName: "[project]/components/HomeClient.jsx",
                                    lineNumber: 257,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HomeClient.jsx",
                            lineNumber: 255,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/HomeClient.jsx",
                    lineNumber: 253,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/HomeClient.jsx",
            lineNumber: 207,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/HomeClient.jsx",
        lineNumber: 206,
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

//# sourceMappingURL=components_1l2kden._.js.map