module.exports = [
"[project]/components/Header.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$catalog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/catalog.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$client$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/client-utils.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function Header({ detail = false }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchOpen, setSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const normalizedQuery = query.trim().toLowerCase();
    const searchResults = normalizedQuery ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$catalog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["catalogProducts"].filter((product)=>{
        const haystack = [
            product.name,
            product.label,
            product.description,
            product.price,
            product.slug
        ].join(' ').toLowerCase();
        return haystack.includes(normalizedQuery);
    }) : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$catalog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["catalogProducts"];
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
    const closeMenus = ()=>{
        setOpen(false);
        setSearchOpen(false);
    };
    const logout = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$client$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setSession"])(null);
        window.location.href = '/';
    };
    const submitSearch = (event)=>{
        event.preventDefault();
        if (searchResults.length > 0) {
            router.push(searchResults[0].page || `/producto/${searchResults[0].slug}`);
            closeMenus();
        }
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
                                    lineNumber: 61,
                                    columnNumber: 49
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "brand-copy",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Top Pro"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.jsx",
                                        lineNumber: 62,
                                        columnNumber: 40
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "Rally-ready goods"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.jsx",
                                        lineNumber: 62,
                                        columnNumber: 64
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.jsx",
                        lineNumber: 60,
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
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 65,
                                columnNumber: 24
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 65,
                                columnNumber: 37
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Abrir navegacion"
                            }, void 0, false, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 65,
                                columnNumber: 50
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.jsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: `nav ${detail ? 'detail-nav' : ''} ${open ? 'is-open' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "nav-primary-link",
                                href: "/productos",
                                onClick: closeMenus,
                                children: "Productos"
                            }, void 0, false, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "nav-primary-link",
                                href: "/donde-encontrarnos",
                                onClick: closeMenus,
                                children: "Contactanos"
                            }, void 0, false, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `nav-search ${searchOpen ? 'is-open' : ''}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "nav-icon-button",
                                        type: "button",
                                        "aria-label": "Buscar productos",
                                        "aria-expanded": searchOpen,
                                        onClick: ()=>setSearchOpen(!searchOpen),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            className: "nav-icon",
                                            src: "/assets/search.png",
                                            alt: ""
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.jsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.jsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        className: "nav-search-panel",
                                        hidden: !searchOpen,
                                        onSubmit: submitSearch,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "sr-only",
                                                htmlFor: "site-search",
                                                children: "Buscar productos"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.jsx",
                                                lineNumber: 75,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "site-search",
                                                value: query,
                                                onChange: (event)=>setQuery(event.target.value),
                                                placeholder: "Buscar productos",
                                                autoComplete: "off"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.jsx",
                                                lineNumber: 76,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "nav-search-results",
                                                children: searchResults.length > 0 ? searchResults.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: product.page || `/producto/${product.slug}`,
                                                        onClick: closeMenus,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: product.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Header.jsx",
                                                                lineNumber: 80,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                children: product.price
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Header.jsx",
                                                                lineNumber: 81,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, product.slug, true, {
                                                        fileName: "[project]/components/Header.jsx",
                                                        lineNumber: 79,
                                                        columnNumber: 19
                                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "No encontramos productos."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.jsx",
                                                    lineNumber: 83,
                                                    columnNumber: 22
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.jsx",
                                                lineNumber: 77,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Header.jsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "nav-icon-button nav-cart-link",
                                href: "/carrito",
                                "aria-label": `Carrito${count > 0 ? `, ${count} productos` : ''}`,
                                onClick: closeMenus,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        className: "nav-icon",
                                        src: "/assets/cart.png",
                                        alt: ""
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.jsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    count > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "nav-cart-count",
                                        children: count
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.jsx",
                                        lineNumber: 89,
                                        columnNumber: 26
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "nav-icon-button",
                                href: "/auth",
                                "aria-label": user ? user.name || 'Mi cuenta' : 'Ingresar',
                                onClick: closeMenus,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: "nav-icon nav-login-icon",
                                    src: "/assets/login-cropped.png",
                                    alt: ""
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.jsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            user?.role === 'admin' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/admin",
                                children: "Admin"
                            }, void 0, false, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 94,
                                columnNumber: 37
                            }, this) : null,
                            user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "nav-logout-button",
                                type: "button",
                                onClick: logout,
                                children: "Salir"
                            }, void 0, false, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 95,
                                columnNumber: 19
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.jsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Header.jsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `mobile-menu-backdrop ${open ? 'is-visible' : ''}`,
                type: "button",
                "aria-label": "Cerrar navegacion",
                onClick: closeMenus
            }, void 0, false, {
                fileName: "[project]/components/Header.jsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Header.jsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ProductDetailClient.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductDetailClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Header.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$client$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/client-utils.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function ProductDetailClient({ initialProduct, slug }) {
    const [product, setProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialProduct);
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [variantId, setVariantId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialProduct?.variants?.[0]?.id || '');
    const [buttonText, setButtonText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Agregar a carrito');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$client$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/api/products/${encodeURIComponent(slug)}`).then((payload)=>{
            setProduct(payload.product);
            setVariantId(payload.product?.variants?.[0]?.id || '');
        }).catch(()=>{});
    }, [
        slug
    ]);
    const variant = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(product?.variants || []).find((item)=>item.id === variantId) || null, [
        product,
        variantId
    ]);
    const views = variant?.views || product?.views || [];
    const front = views.find((view)=>view.id === 'front') || views[0] || {
        src: product?.src,
        alt: product?.alt
    };
    const back = views.find((view)=>view.id === 'back') || views[1] || null;
    const title = variant ? variant.label : product?.name;
    const price = variant?.price || product?.price;
    const available = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$client$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["canAddProduct"])(product);
    if (!product) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "site-shell detail-shell",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "detail-main",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "not-found-panel",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "eyebrow",
                            children: "Top Pro"
                        }, void 0, false, {
                            fileName: "[project]/components/ProductDetailClient.jsx",
                            lineNumber: 30,
                            columnNumber: 120
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: "Producto no encontrado"
                        }, void 0, false, {
                            fileName: "[project]/components/ProductDetailClient.jsx",
                            lineNumber: 30,
                            columnNumber: 154
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "button button-primary",
                            href: "/productos",
                            children: "Volver al catalogo"
                        }, void 0, false, {
                            fileName: "[project]/components/ProductDetailClient.jsx",
                            lineNumber: 30,
                            columnNumber: 185
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ProductDetailClient.jsx",
                    lineNumber: 30,
                    columnNumber: 83
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ProductDetailClient.jsx",
                lineNumber: 30,
                columnNumber: 53
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ProductDetailClient.jsx",
            lineNumber: 30,
            columnNumber: 12
        }, this);
    }
    const add = async ()=>{
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$client$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addToCart"])(product, {
            quantity,
            variant,
            variantId: variant?.id || '',
            variantLabel: variant?.label || '',
            price,
            image: {
                src: front?.src || product.src,
                alt: front?.alt || product.alt
            }
        });
        setButtonText(result.ok ? 'Agregado' : 'Sin stock');
        if (result.ok) setTimeout(()=>setButtonText('Agregar a carrito'), 1200);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "site-shell detail-shell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                detail: true
            }, void 0, false, {
                fileName: "[project]/components/ProductDetailClient.jsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "detail-main",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "detail-panel",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "detail-copy",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "eyebrow",
                                    children: product.label
                                }, void 0, false, {
                                    fileName: "[project]/components/ProductDetailClient.jsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/components/ProductDetailClient.jsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "lede",
                                    children: product.description
                                }, void 0, false, {
                                    fileName: "[project]/components/ProductDetailClient.jsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "detail-description",
                                    children: (product.detailDescription || []).map((paragraph)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: paragraph
                                        }, paragraph, false, {
                                            fileName: "[project]/components/ProductDetailClient.jsx",
                                            lineNumber: 55,
                                            columnNumber: 103
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/ProductDetailClient.jsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "detail-price-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Precio"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ProductDetailClient.jsx",
                                            lineNumber: 56,
                                            columnNumber: 48
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: price
                                        }, void 0, false, {
                                            fileName: "[project]/components/ProductDetailClient.jsx",
                                            lineNumber: 56,
                                            columnNumber: 67
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            className: "product-availability",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$client$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["availabilityLabel"])(product)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ProductDetailClient.jsx",
                                            lineNumber: 56,
                                            columnNumber: 91
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ProductDetailClient.jsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProductDetailClient.jsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "detail-aside",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `detail-image-card detail-image-toggle ${back ? 'has-rotation' : ''}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            className: "detail-product-image detail-product-image-front",
                                            src: front?.src || product.src,
                                            alt: front?.alt || product.alt,
                                            "data-view-id": "front"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ProductDetailClient.jsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this),
                                        back ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            className: "detail-product-image detail-product-image-back",
                                            src: back.src,
                                            alt: "",
                                            "aria-hidden": "true",
                                            "data-view-id": "back"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ProductDetailClient.jsx",
                                            lineNumber: 61,
                                            columnNumber: 23
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ProductDetailClient.jsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                product.variants?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "detail-variant-panel",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "detail-option-group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "field-label",
                                                children: "Elegir bolso"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProductDetailClient.jsx",
                                                lineNumber: 63,
                                                columnNumber: 116
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "detail-variant-select",
                                                value: variantId,
                                                onChange: (event)=>setVariantId(event.target.value),
                                                children: product.variants.map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: entry.id,
                                                        children: entry.label
                                                    }, entry.id, false, {
                                                        fileName: "[project]/components/ProductDetailClient.jsx",
                                                        lineNumber: 63,
                                                        columnNumber: 313
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProductDetailClient.jsx",
                                                lineNumber: 63,
                                                columnNumber: 165
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProductDetailClient.jsx",
                                        lineNumber: 63,
                                        columnNumber: 79
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ProductDetailClient.jsx",
                                    lineNumber: 63,
                                    columnNumber: 41
                                }, this) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "request-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "request-note",
                                            children: "Elegi la cantidad y guardamos el producto en tu carrito."
                                        }, void 0, false, {
                                            fileName: "[project]/components/ProductDetailClient.jsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "field-label",
                                            htmlFor: "product-quantity",
                                            children: "Cantidad deseada"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ProductDetailClient.jsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "quantity-input",
                                            id: "product-quantity",
                                            type: "number",
                                            min: "1",
                                            step: "1",
                                            value: quantity,
                                            onChange: (event)=>setQuantity(Math.max(1, Number.parseInt(event.target.value, 10) || 1))
                                        }, void 0, false, {
                                            fileName: "[project]/components/ProductDetailClient.jsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `button ${available ? 'button-primary' : 'button-secondary'} detail-cart-button`,
                                            disabled: !available,
                                            type: "button",
                                            onClick: add,
                                            children: available ? buttonText : 'Sin stock'
                                        }, void 0, false, {
                                            fileName: "[project]/components/ProductDetailClient.jsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: "button button-secondary",
                                            href: "/carrito",
                                            children: "Ver carrito"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ProductDetailClient.jsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: "button button-secondary",
                                            href: "/productos",
                                            children: "Volver a productos"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ProductDetailClient.jsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ProductDetailClient.jsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProductDetailClient.jsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ProductDetailClient.jsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ProductDetailClient.jsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProductDetailClient.jsx",
        lineNumber: 47,
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
"[project]/lib/catalog.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "catalogProducts",
    ()=>catalogProducts,
    "stores",
    ()=>stores,
    "whatsappNumber",
    ()=>whatsappNumber
]);
const whatsappNumber = '595986732551';
const catalogProducts = [
    {
        slug: 'cuaderno-de-rally',
        page: '/cuaderno-de-rally',
        name: 'Cuaderno de Co-Pilotos',
        label: 'Disponible ahora',
        description: 'El cuaderno preferido de los Co-pilotos Paraguayos.',
        detailDescription: [
            'El mejor cuaderno con el que podes contar para el tramo, fácil, practico y Top Pro.',
            'Formato practico e ingenioso para tus notas de cada P.E.'
        ],
        price: '9.85 USD',
        src: '/assets/notebook.png',
        alt: 'Cuaderno de Rally Top Pro',
        stock: 0,
        allowPreorder: false,
        showInCarousel: true
    },
    {
        slug: 'remera-top-pro',
        page: '/remera-top-pro',
        name: 'Remera Top Pro',
        label: 'Merch oficial',
        description: 'Una remera ligera para llevar la identidad de Top Pro fuera del auto y del parque de reparaciones.',
        detailDescription: [
            'Una prenda comoda para eventos, viajes y dias de carrera, con una presencia simple que mantiene visible la identidad de Top Pro.',
            'Ideal para quienes quieren vestir la marca dentro y fuera del circuito sin perder practicidad ni estilo.'
        ],
        price: 'Pronto disponible',
        src: '/assets/shirt.png',
        alt: 'Remera Top Pro',
        stock: 0,
        allowPreorder: false,
        showInCarousel: true,
        carouselViews: [
            {
                id: 'front',
                label: 'Frente',
                src: '/assets/shirt-carousel-front.png',
                alt: 'Remera Top Pro para carrusel de frente'
            },
            {
                id: 'back',
                label: 'Dorso',
                src: '/assets/shirt-carousel-back.png',
                alt: 'Remera Top Pro para carrusel de dorso'
            }
        ],
        views: [
            {
                id: 'front',
                label: 'Frente',
                src: '/assets/shirt-front.png',
                alt: 'Remera Top Pro de frente'
            },
            {
                id: 'back',
                label: 'Dorso',
                src: '/assets/shirt-back.png',
                alt: 'Remera Top Pro de dorso'
            }
        ]
    },
    {
        slug: 'bolso-organizador',
        page: '/bolso-organizador',
        name: 'Bolso Organizador',
        label: 'Equipo esencial',
        description: 'Bolsones de símil carbono con velcro y cierres resistentes hechos para accesorios ajustable a la jaula del vehículo, cuentan con varios compartimentos.',
        detailDescription: [
            'Diseñado para mantener accesorios, documentos y elementos de apoyo ordenados antes, durante y despues de cada salida.',
            'Es una opcion practica para mover tu equipo dentro y fuera del tramo.'
        ],
        price: '57.47 USD',
        src: '/assets/bag.png',
        alt: 'Bolso organizador Top Pro',
        stock: 0,
        allowPreorder: false,
        showInCarousel: true,
        variants: [
            {
                id: 'bag-1',
                label: 'Maletin de copiloto',
                whatsappLabel: 'Maletin de copiloto',
                views: [
                    {
                        id: 'front',
                        label: 'Frente',
                        src: '/assets/Bag 1 front.png',
                        alt: 'Bolso Organizador Top Pro modelo 1 de frente'
                    },
                    {
                        id: 'back',
                        label: 'Dorso',
                        src: '/assets/Bag 1 back.png',
                        alt: 'Bolso Organizador Top Pro modelo 1 de dorso'
                    }
                ]
            },
            {
                id: 'bag-2',
                label: 'Organizador de Co-Piloto',
                whatsappLabel: 'Organizador de Co-Piloto',
                price: '41 USD',
                views: [
                    {
                        id: 'front',
                        label: 'Frente',
                        src: '/assets/Bag 2 front.png',
                        alt: 'Bolso Organizador Top Pro modelo 2 de frente'
                    },
                    {
                        id: 'back',
                        label: 'Dorso',
                        src: '/assets/Bag 2 back.png',
                        alt: 'Bolso Organizador Top Pro modelo 2 de dorso'
                    }
                ]
            }
        ]
    }
];
const stores = [
    {
        name: 'Tienda Rally',
        detail: 'Punto de venta aliado.',
        url: 'https://maps.app.goo.gl/pEd7NmqUiVsvqf436'
    },
    {
        name: 'Proximamente',
        detail: 'Esperanos, muy pronto estaremos mas cerca de vos.'
    },
    {
        name: 'Proximamente',
        detail: 'Esperanos, muy pronto estaremos mas cerca de vos.'
    }
];
}),
];

//# sourceMappingURL=_17dkrkz._.js.map