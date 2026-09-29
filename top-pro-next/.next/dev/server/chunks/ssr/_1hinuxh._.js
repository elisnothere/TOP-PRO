module.exports = [
"[project]/components/AdminClient.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminClient
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
const emptyForm = {
    name: '',
    label: '',
    price: '',
    alt: '',
    description: '',
    detailDescription: '',
    src: '',
    stock: 0,
    allowPreorder: false,
    showInCarousel: true
};
function fileToDataUrl(file) {
    return new Promise((resolve, reject)=>{
        if (!file) return resolve('');
        const reader = new FileReader();
        reader.onload = ()=>resolve(reader.result);
        reader.onerror = ()=>reject(new Error('No se pudo leer la imagen.'));
        reader.readAsDataURL(file);
    });
}
function AdminClient() {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [editingSlug, setEditingSlug] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(emptyForm);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const load = async ()=>{
        const current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$client$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSession"])();
        setUser(current);
        if (current?.role === 'admin') {
            const [productsPayload, usersPayload] = await Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$client$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])('/api/products'),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$client$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])('/api/users')
            ]);
            setProducts(productsPayload.products || []);
            setUsers(usersPayload.users || []);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        load().catch(()=>{});
    }, []);
    if (!user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "site-shell detail-shell auth-shell",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "auth-main",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "auth-panel",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "auth-copy",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "eyebrow",
                                    children: "Admin"
                                }, void 0, false, {
                                    fileName: "[project]/components/AdminClient.jsx",
                                    lineNumber: 41,
                                    columnNumber: 151
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: "Inicia sesion"
                                }, void 0, false, {
                                    fileName: "[project]/components/AdminClient.jsx",
                                    lineNumber: 41,
                                    columnNumber: 183
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "lede",
                                    children: "Necesitas entrar con la cuenta admin para ver este panel."
                                }, void 0, false, {
                                    fileName: "[project]/components/AdminClient.jsx",
                                    lineNumber: 41,
                                    columnNumber: 205
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AdminClient.jsx",
                            lineNumber: 41,
                            columnNumber: 124
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "button button-primary",
                            href: "/auth",
                            children: "Iniciar sesion"
                        }, void 0, false, {
                            fileName: "[project]/components/AdminClient.jsx",
                            lineNumber: 41,
                            columnNumber: 292
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/AdminClient.jsx",
                    lineNumber: 41,
                    columnNumber: 92
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/AdminClient.jsx",
                lineNumber: 41,
                columnNumber: 64
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/AdminClient.jsx",
            lineNumber: 41,
            columnNumber: 12
        }, this);
    }
    if (user.role !== 'admin') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "site-shell detail-shell auth-shell",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "auth-main",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "auth-panel",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "auth-copy",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "eyebrow",
                                    children: "Admin"
                                }, void 0, false, {
                                    fileName: "[project]/components/AdminClient.jsx",
                                    lineNumber: 45,
                                    columnNumber: 151
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: "Sin acceso"
                                }, void 0, false, {
                                    fileName: "[project]/components/AdminClient.jsx",
                                    lineNumber: 45,
                                    columnNumber: 183
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "lede",
                                    children: "Esta cuenta no tiene permisos de administrador."
                                }, void 0, false, {
                                    fileName: "[project]/components/AdminClient.jsx",
                                    lineNumber: 45,
                                    columnNumber: 202
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AdminClient.jsx",
                            lineNumber: 45,
                            columnNumber: 124
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "button button-primary",
                            href: "/productos",
                            children: "Ver productos"
                        }, void 0, false, {
                            fileName: "[project]/components/AdminClient.jsx",
                            lineNumber: 45,
                            columnNumber: 279
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/AdminClient.jsx",
                    lineNumber: 45,
                    columnNumber: 92
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/AdminClient.jsx",
                lineNumber: 45,
                columnNumber: 64
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/AdminClient.jsx",
            lineNumber: 45,
            columnNumber: 12
        }, this);
    }
    const edit = (product)=>{
        setEditingSlug(product.slug);
        setForm({
            ...emptyForm,
            ...product,
            detailDescription: (product.detailDescription || []).join('\n')
        });
    };
    const submit = async (event)=>{
        event.preventDefault();
        try {
            const payload = {
                ...form,
                detailDescription: String(form.detailDescription || '').split(/\n+/).map((item)=>item.trim()).filter(Boolean),
                stock: Math.max(0, Number.parseInt(form.stock, 10) || 0)
            };
            const path = editingSlug ? `/api/products/${encodeURIComponent(editingSlug)}` : '/api/products';
            const method = editingSlug ? 'PUT' : 'POST';
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$client$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(path, {
                method,
                body: JSON.stringify(payload)
            });
            setForm(emptyForm);
            setEditingSlug('');
            setMessage('Producto guardado.');
            await load();
        } catch (error) {
            setMessage(error.message);
        }
    };
    const updateImage = async (file)=>{
        const src = await fileToDataUrl(file);
        if (src) setForm((current)=>({
                ...current,
                src
            }));
    };
    const remove = async (slug)=>{
        if (!confirm('Eliminar producto?')) return;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$client$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/api/products/${encodeURIComponent(slug)}`, {
            method: 'DELETE'
        });
        await load();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "site-shell detail-shell auth-shell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                detail: true
            }, void 0, false, {
                fileName: "[project]/components/AdminClient.jsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "admin-main",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "admin-panel",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "admin-heading",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "eyebrow",
                                            children: "Admin"
                                        }, void 0, false, {
                                            fileName: "[project]/components/AdminClient.jsx",
                                            lineNumber: 93,
                                            columnNumber: 47
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            children: "Productos"
                                        }, void 0, false, {
                                            fileName: "[project]/components/AdminClient.jsx",
                                            lineNumber: 93,
                                            columnNumber: 79
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/AdminClient.jsx",
                                    lineNumber: 93,
                                    columnNumber: 42
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "button button-secondary",
                                    onClick: ()=>{
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$client$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setSession"])(null);
                                        window.location.href = '/auth';
                                    },
                                    children: "Cerrar sesion"
                                }, void 0, false, {
                                    fileName: "[project]/components/AdminClient.jsx",
                                    lineNumber: 93,
                                    columnNumber: 103
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AdminClient.jsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "admin-stats",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Productos"
                                        }, void 0, false, {
                                            fileName: "[project]/components/AdminClient.jsx",
                                            lineNumber: 94,
                                            columnNumber: 49
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: products.length
                                        }, void 0, false, {
                                            fileName: "[project]/components/AdminClient.jsx",
                                            lineNumber: 94,
                                            columnNumber: 71
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/AdminClient.jsx",
                                    lineNumber: 94,
                                    columnNumber: 40
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Usuarios"
                                        }, void 0, false, {
                                            fileName: "[project]/components/AdminClient.jsx",
                                            lineNumber: 94,
                                            columnNumber: 124
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: users.length
                                        }, void 0, false, {
                                            fileName: "[project]/components/AdminClient.jsx",
                                            lineNumber: 94,
                                            columnNumber: 145
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/AdminClient.jsx",
                                    lineNumber: 94,
                                    columnNumber: 115
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Clientes"
                                        }, void 0, false, {
                                            fileName: "[project]/components/AdminClient.jsx",
                                            lineNumber: 94,
                                            columnNumber: 195
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: users.filter((entry)=>entry.role !== 'admin').length
                                        }, void 0, false, {
                                            fileName: "[project]/components/AdminClient.jsx",
                                            lineNumber: 94,
                                            columnNumber: 216
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/AdminClient.jsx",
                                    lineNumber: 94,
                                    columnNumber: 186
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AdminClient.jsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "admin-product-editor",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "admin-section-heading",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: editingSlug ? 'Modificar producto' : 'Crear producto'
                                        }, void 0, false, {
                                            fileName: "[project]/components/AdminClient.jsx",
                                            lineNumber: 96,
                                            columnNumber: 52
                                        }, this),
                                        editingSlug ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "button button-secondary",
                                            onClick: ()=>{
                                                setEditingSlug('');
                                                setForm(emptyForm);
                                            },
                                            children: "Cancelar edicion"
                                        }, void 0, false, {
                                            fileName: "[project]/components/AdminClient.jsx",
                                            lineNumber: 96,
                                            columnNumber: 131
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/AdminClient.jsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    className: "admin-product-form",
                                    onSubmit: submit,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Nombre"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AdminClient.jsx",
                                                    lineNumber: 98,
                                                    columnNumber: 22
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    required: true,
                                                    value: form.name,
                                                    onChange: (e)=>setForm({
                                                            ...form,
                                                            name: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AdminClient.jsx",
                                                    lineNumber: 98,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AdminClient.jsx",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Etiqueta"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AdminClient.jsx",
                                                    lineNumber: 99,
                                                    columnNumber: 22
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: form.label,
                                                    onChange: (e)=>setForm({
                                                            ...form,
                                                            label: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AdminClient.jsx",
                                                    lineNumber: 99,
                                                    columnNumber: 43
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AdminClient.jsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Precio"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AdminClient.jsx",
                                                    lineNumber: 100,
                                                    columnNumber: 22
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    required: true,
                                                    value: form.price,
                                                    onChange: (e)=>setForm({
                                                            ...form,
                                                            price: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AdminClient.jsx",
                                                    lineNumber: 100,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AdminClient.jsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Stock"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AdminClient.jsx",
                                                    lineNumber: 101,
                                                    columnNumber: 22
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: "0",
                                                    value: form.stock,
                                                    onChange: (e)=>setForm({
                                                            ...form,
                                                            stock: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AdminClient.jsx",
                                                    lineNumber: 101,
                                                    columnNumber: 40
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AdminClient.jsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Texto alternativo imagen"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AdminClient.jsx",
                                                    lineNumber: 102,
                                                    columnNumber: 22
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: form.alt,
                                                    onChange: (e)=>setForm({
                                                            ...form,
                                                            alt: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AdminClient.jsx",
                                                    lineNumber: 102,
                                                    columnNumber: 59
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AdminClient.jsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "admin-toggle-field",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: form.allowPreorder,
                                                    onChange: (e)=>setForm({
                                                            ...form,
                                                            allowPreorder: e.target.checked
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AdminClient.jsx",
                                                    lineNumber: 103,
                                                    columnNumber: 53
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Permitir pre-reserva si no hay stock"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AdminClient.jsx",
                                                    lineNumber: 103,
                                                    columnNumber: 179
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AdminClient.jsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "admin-toggle-field",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: form.showInCarousel,
                                                    onChange: (e)=>setForm({
                                                            ...form,
                                                            showInCarousel: e.target.checked
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AdminClient.jsx",
                                                    lineNumber: 104,
                                                    columnNumber: 53
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Mostrar en carrusel principal"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AdminClient.jsx",
                                                    lineNumber: 104,
                                                    columnNumber: 181
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AdminClient.jsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "admin-form-wide",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Descripcion corta"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AdminClient.jsx",
                                                    lineNumber: 105,
                                                    columnNumber: 50
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    required: true,
                                                    rows: "3",
                                                    value: form.description,
                                                    onChange: (e)=>setForm({
                                                            ...form,
                                                            description: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AdminClient.jsx",
                                                    lineNumber: 105,
                                                    columnNumber: 80
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AdminClient.jsx",
                                            lineNumber: 105,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "admin-form-wide",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Descripcion de detalle"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AdminClient.jsx",
                                                    lineNumber: 106,
                                                    columnNumber: 50
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    rows: "5",
                                                    value: form.detailDescription,
                                                    onChange: (e)=>setForm({
                                                            ...form,
                                                            detailDescription: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AdminClient.jsx",
                                                    lineNumber: 106,
                                                    columnNumber: 85
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AdminClient.jsx",
                                            lineNumber: 106,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "admin-form-wide",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Imagen del producto"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AdminClient.jsx",
                                                    lineNumber: 107,
                                                    columnNumber: 50
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    accept: ".png,.jpg,.jpeg,image/png,image/jpeg",
                                                    onChange: (e)=>updateImage(e.target.files?.[0])
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AdminClient.jsx",
                                                    lineNumber: 107,
                                                    columnNumber: 82
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AdminClient.jsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "admin-product-preview admin-form-wide",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: form.src || '/assets/logo.png',
                                                    alt: "Vista previa"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AdminClient.jsx",
                                                    lineNumber: 108,
                                                    columnNumber: 70
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Si no elegis una imagen nueva, se mantiene la actual."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AdminClient.jsx",
                                                    lineNumber: 108,
                                                    columnNumber: 133
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AdminClient.jsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this),
                                        message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "auth-message admin-form-message admin-form-wide",
                                            children: message
                                        }, void 0, false, {
                                            fileName: "[project]/components/AdminClient.jsx",
                                            lineNumber: 109,
                                            columnNumber: 26
                                        }, this) : null,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "button button-primary admin-form-wide",
                                            type: "submit",
                                            children: editingSlug ? 'Guardar cambios' : 'Crear producto'
                                        }, void 0, false, {
                                            fileName: "[project]/components/AdminClient.jsx",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/AdminClient.jsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AdminClient.jsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "admin-products",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "admin-section-heading",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: "Items publicados"
                                        }, void 0, false, {
                                            fileName: "[project]/components/AdminClient.jsx",
                                            lineNumber: 114,
                                            columnNumber: 52
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: "button button-secondary",
                                            href: "/productos",
                                            children: "Ver pagina de items"
                                        }, void 0, false, {
                                            fileName: "[project]/components/AdminClient.jsx",
                                            lineNumber: 114,
                                            columnNumber: 77
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/AdminClient.jsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this),
                                products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: "admin-product-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: product.src,
                                                alt: product.alt || product.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/AdminClient.jsx",
                                                lineNumber: 117,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: product.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AdminClient.jsx",
                                                        lineNumber: 118,
                                                        columnNumber: 22
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: product.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AdminClient.jsx",
                                                        lineNumber: 118,
                                                        columnNumber: 53
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: product.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AdminClient.jsx",
                                                        lineNumber: 118,
                                                        columnNumber: 81
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        children: [
                                                            "Stock: ",
                                                            product.stock,
                                                            " · ",
                                                            product.allowPreorder ? 'Pre-reserva activa' : 'Sin pre-reserva',
                                                            " · ",
                                                            product.showInCarousel ? 'En carrusel' : 'Fuera del carrusel'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/AdminClient.jsx",
                                                        lineNumber: 118,
                                                        columnNumber: 109
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/AdminClient.jsx",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: product.price
                                            }, void 0, false, {
                                                fileName: "[project]/components/AdminClient.jsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "admin-row-actions",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "button button-secondary",
                                                        onClick: ()=>edit(product),
                                                        children: "Editar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AdminClient.jsx",
                                                        lineNumber: 120,
                                                        columnNumber: 52
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "button button-danger",
                                                        onClick: ()=>remove(product.slug),
                                                        children: "Eliminar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AdminClient.jsx",
                                                        lineNumber: 120,
                                                        columnNumber: 141
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/AdminClient.jsx",
                                                lineNumber: 120,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, product.slug, true, {
                                        fileName: "[project]/components/AdminClient.jsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AdminClient.jsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/AdminClient.jsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/AdminClient.jsx",
                lineNumber: 91,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AdminClient.jsx",
        lineNumber: 89,
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

//# sourceMappingURL=_1hinuxh._.js.map