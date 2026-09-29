module.exports = [
"[project]/components/CheckoutClient.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CheckoutClient
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
function CheckoutClient() {
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$client$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reconcileCart"])(null, false).then(setItems);
    }, []);
    const submit = (event)=>{
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const extra = [
            `Nombre: ${formData.get('name') || ''}`,
            `Telefono: ${formData.get('phone') || ''}`,
            `Email: ${formData.get('email') || ''}`,
            `Entrega: ${formData.get('delivery') || ''}`,
            `Notas: ${formData.get('notes') || ''}`
        ].join('\n');
        window.open((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$client$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whatsappHref"])(items, extra), '_blank', 'noopener,noreferrer');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "site-shell detail-shell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                detail: true
            }, void 0, false, {
                fileName: "[project]/components/CheckoutClient.jsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "cart-main",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "cart-panel checkout-panel",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cart-heading",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "eyebrow",
                                    children: "Checkout"
                                }, void 0, false, {
                                    fileName: "[project]/components/CheckoutClient.jsx",
                                    lineNumber: 33,
                                    columnNumber: 41
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: "Finalizar pedido"
                                }, void 0, false, {
                                    fileName: "[project]/components/CheckoutClient.jsx",
                                    lineNumber: 33,
                                    columnNumber: 76
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "lede",
                                    children: "Dejanos tus datos para preparar el pedido. Por ahora la confirmacion final se envia por WhatsApp."
                                }, void 0, false, {
                                    fileName: "[project]/components/CheckoutClient.jsx",
                                    lineNumber: 33,
                                    columnNumber: 101
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CheckoutClient.jsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        items.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    className: "checkout-form",
                                    onSubmit: submit,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Nombre"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CheckoutClient.jsx",
                                                    lineNumber: 37,
                                                    columnNumber: 24
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    name: "name",
                                                    required: true,
                                                    autoComplete: "name"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CheckoutClient.jsx",
                                                    lineNumber: 37,
                                                    columnNumber: 43
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CheckoutClient.jsx",
                                            lineNumber: 37,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Telefono"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CheckoutClient.jsx",
                                                    lineNumber: 38,
                                                    columnNumber: 24
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    name: "phone",
                                                    required: true,
                                                    autoComplete: "tel"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CheckoutClient.jsx",
                                                    lineNumber: 38,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CheckoutClient.jsx",
                                            lineNumber: 38,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CheckoutClient.jsx",
                                                    lineNumber: 39,
                                                    columnNumber: 24
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    name: "email",
                                                    type: "email",
                                                    autoComplete: "email"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CheckoutClient.jsx",
                                                    lineNumber: 39,
                                                    columnNumber: 42
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CheckoutClient.jsx",
                                            lineNumber: 39,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Entrega"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CheckoutClient.jsx",
                                                    lineNumber: 40,
                                                    columnNumber: 24
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    name: "delivery",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Retiro en punto de venta"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CheckoutClient.jsx",
                                                            lineNumber: 40,
                                                            columnNumber: 68
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Coordinar envio"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CheckoutClient.jsx",
                                                            lineNumber: 40,
                                                            columnNumber: 109
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CheckoutClient.jsx",
                                                    lineNumber: 40,
                                                    columnNumber: 44
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CheckoutClient.jsx",
                                            lineNumber: 40,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "checkout-form-wide",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Notas"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CheckoutClient.jsx",
                                                    lineNumber: 41,
                                                    columnNumber: 55
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    name: "notes",
                                                    rows: "4",
                                                    placeholder: "Talles, horarios, direccion o aclaraciones."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CheckoutClient.jsx",
                                                    lineNumber: 41,
                                                    columnNumber: 73
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CheckoutClient.jsx",
                                            lineNumber: 41,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "button button-primary checkout-form-wide",
                                            type: "submit",
                                            children: "Confirmar por WhatsApp"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CheckoutClient.jsx",
                                            lineNumber: 42,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CheckoutClient.jsx",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                    className: "cart-summary checkout-summary",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: "Resumen"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CheckoutClient.jsx",
                                            lineNumber: 45,
                                            columnNumber: 17
                                        }, this),
                                        items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "checkout-summary-item",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: item.src,
                                                        alt: item.alt || item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CheckoutClient.jsx",
                                                        lineNumber: 46,
                                                        columnNumber: 92
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            item.quantity,
                                                            " x ",
                                                            item.name
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/CheckoutClient.jsx",
                                                        lineNumber: 46,
                                                        columnNumber: 142
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: item.price || 'A confirmar'
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CheckoutClient.jsx",
                                                        lineNumber: 46,
                                                        columnNumber: 178
                                                    }, this)
                                                ]
                                            }, item.key, true, {
                                                fileName: "[project]/components/CheckoutClient.jsx",
                                                lineNumber: 46,
                                                columnNumber: 38
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: "button button-secondary",
                                            href: "/carrito",
                                            children: "Editar carrito"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CheckoutClient.jsx",
                                            lineNumber: 47,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CheckoutClient.jsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CheckoutClient.jsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "not-found-panel cart-empty-panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "eyebrow",
                                    children: "Checkout"
                                }, void 0, false, {
                                    fileName: "[project]/components/CheckoutClient.jsx",
                                    lineNumber: 51,
                                    columnNumber: 67
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: "No hay productos"
                                }, void 0, false, {
                                    fileName: "[project]/components/CheckoutClient.jsx",
                                    lineNumber: 51,
                                    columnNumber: 102
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Primero agrega productos al carrito y despues podes completar tus datos."
                                }, void 0, false, {
                                    fileName: "[project]/components/CheckoutClient.jsx",
                                    lineNumber: 51,
                                    columnNumber: 127
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: "button button-primary",
                                    href: "/productos",
                                    children: "Ver productos"
                                }, void 0, false, {
                                    fileName: "[project]/components/CheckoutClient.jsx",
                                    lineNumber: 51,
                                    columnNumber: 206
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CheckoutClient.jsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CheckoutClient.jsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/CheckoutClient.jsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CheckoutClient.jsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
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
    const searchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!searchOpen) {
            return undefined;
        }
        const closeSearchOutside = (event)=>{
            if (!searchRef.current?.contains(event.target)) {
                setSearchOpen(false);
            }
        };
        const closeSearchOnEscape = (event)=>{
            if (event.key === 'Escape') {
                setSearchOpen(false);
            }
        };
        document.addEventListener('pointerdown', closeSearchOutside);
        document.addEventListener('keydown', closeSearchOnEscape);
        return ()=>{
            document.removeEventListener('pointerdown', closeSearchOutside);
            document.removeEventListener('keydown', closeSearchOnEscape);
        };
    }, [
        searchOpen
    ]);
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
                        onClick: closeMenus,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "brand-mark has-logo",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: "brand-logo",
                                    src: "/assets/logo.png",
                                    alt: "Top Pro logo"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.jsx",
                                    lineNumber: 88,
                                    columnNumber: 49
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "brand-copy",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Top Pro"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.jsx",
                                        lineNumber: 89,
                                        columnNumber: 40
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "Rally-ready goods"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.jsx",
                                        lineNumber: 89,
                                        columnNumber: 64
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.jsx",
                        lineNumber: 87,
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
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "nav-primary-link",
                                href: "/donde-encontrarnos",
                                onClick: closeMenus,
                                children: "Contactanos"
                            }, void 0, false, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.jsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "header-actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: searchRef,
                                className: `nav-search ${searchOpen ? 'is-open' : ''}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "nav-icon-button",
                                        type: "button",
                                        "aria-label": "Buscar productos",
                                        "aria-expanded": searchOpen,
                                        onClick: ()=>{
                                            setOpen(false);
                                            setSearchOpen((current)=>!current);
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            className: "nav-icon",
                                            src: "/assets/search.png",
                                            alt: ""
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.jsx",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.jsx",
                                        lineNumber: 97,
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
                                                lineNumber: 101,
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
                                                lineNumber: 102,
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
                                                                lineNumber: 106,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                children: product.price
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Header.jsx",
                                                                lineNumber: 107,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, product.slug, true, {
                                                        fileName: "[project]/components/Header.jsx",
                                                        lineNumber: 105,
                                                        columnNumber: 19
                                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "No encontramos productos."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.jsx",
                                                    lineNumber: 109,
                                                    columnNumber: 22
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.jsx",
                                                lineNumber: 103,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Header.jsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 96,
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
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    count > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "nav-cart-count",
                                        children: count
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.jsx",
                                        lineNumber: 115,
                                        columnNumber: 26
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 113,
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
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            user?.role === 'admin' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/admin",
                                children: "Admin"
                            }, void 0, false, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 120,
                                columnNumber: 37
                            }, this) : null,
                            user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "nav-logout-button",
                                type: "button",
                                onClick: logout,
                                children: "Salir"
                            }, void 0, false, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 121,
                                columnNumber: 19
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.jsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "nav-toggle",
                        type: "button",
                        "aria-expanded": open,
                        onClick: ()=>{
                            setSearchOpen(false);
                            setOpen(!open);
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 124,
                                columnNumber: 24
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 124,
                                columnNumber: 37
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Abrir navegacion"
                            }, void 0, false, {
                                fileName: "[project]/components/Header.jsx",
                                lineNumber: 124,
                                columnNumber: 50
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.jsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Header.jsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `mobile-menu-backdrop ${open ? 'is-visible' : ''}`,
                type: "button",
                "aria-label": "Cerrar navegacion",
                onClick: closeMenus
            }, void 0, false, {
                fileName: "[project]/components/Header.jsx",
                lineNumber: 127,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Header.jsx",
        lineNumber: 85,
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

//# sourceMappingURL=_1yvz8g9._.js.map