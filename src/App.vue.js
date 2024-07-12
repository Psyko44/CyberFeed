import { defineComponent, ref } from 'vue';
import Home from './components/Home.vue';
export default defineComponent({
    name: 'App',
    components: {
        Home
    },
    setup() {
        const isDarkMode = ref(false);
        function toggleDarkMode() {
            isDarkMode.value = !isDarkMode.value;
            if (isDarkMode.value) {
                document.documentElement.classList.add('dark');
            }
            else {
                document.documentElement.classList.remove('dark');
            }
        }
        return {
            isDarkMode,
            toggleDarkMode
        };
    }
});
;

function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: (({ 'dark': __VLS_ctx.isDarkMode })) }, ...{ class: ("min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100") }, });
    __VLS_styleScopedClasses = ({ 'dark': isDarkMode });
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({ ...{ class: ("p-4 dark:text-white text-black") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container mx-auto") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col sm:flex-row sm:justify-evenly  items-center justify-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-3xl sm:text-4xl font-bold mb-4") }, });
    // @ts-ignore
    [isDarkMode,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-lg sm:text-xl mb-4 text-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.toggleDarkMode) }, ...{ class: ("bg-gray-800 text-white py-2 px-4 rounded dark:bg-gray-200 dark:text-gray-900") }, });
    (__VLS_ctx.isDarkMode ? 'Light Mode' : 'Dark Mode');
    // @ts-ignore
    [isDarkMode, toggleDarkMode,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("banner-container flex sm:items-center sm:justify-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("@/assets/img/header.png"), alt: ("Header Background"), ...{ class: ("w-full h-auto") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({ ...{ class: ("container mx-auto py-6") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .Home;
    ({}.Home);
    __VLS_components.Home;
    // @ts-ignore
    [Home,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({}));
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.footer, __VLS_intrinsicElements.footer)({ ...{ class: ("bg-gray-200 py-4 mt-auto") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container mx-auto text-center text-gray-600") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://github.com/Psyko44"), target: ("_blank"), ...{ class: ("text-gray-800 hover:text-gray-900") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-gray-800 font-bold") }, });
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['min-h-screen'];
        __VLS_styleScopedClasses['bg-gray-100'];
        __VLS_styleScopedClasses['text-gray-900'];
        __VLS_styleScopedClasses['dark:bg-gray-900'];
        __VLS_styleScopedClasses['dark:text-gray-100'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['dark:text-white'];
        __VLS_styleScopedClasses['text-black'];
        __VLS_styleScopedClasses['container'];
        __VLS_styleScopedClasses['mx-auto'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['sm:flex-row'];
        __VLS_styleScopedClasses['sm:justify-evenly'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['text-3xl'];
        __VLS_styleScopedClasses['sm:text-4xl'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['mb-4'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['sm:text-xl'];
        __VLS_styleScopedClasses['mb-4'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['bg-gray-800'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['dark:bg-gray-200'];
        __VLS_styleScopedClasses['dark:text-gray-900'];
        __VLS_styleScopedClasses['banner-container'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['sm:items-center'];
        __VLS_styleScopedClasses['sm:justify-center'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['h-auto'];
        __VLS_styleScopedClasses['container'];
        __VLS_styleScopedClasses['mx-auto'];
        __VLS_styleScopedClasses['py-6'];
        __VLS_styleScopedClasses['bg-gray-200'];
        __VLS_styleScopedClasses['py-4'];
        __VLS_styleScopedClasses['mt-auto'];
        __VLS_styleScopedClasses['container'];
        __VLS_styleScopedClasses['mx-auto'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['text-gray-600'];
        __VLS_styleScopedClasses['text-gray-800'];
        __VLS_styleScopedClasses['hover:text-gray-900'];
        __VLS_styleScopedClasses['text-gray-800'];
        __VLS_styleScopedClasses['font-bold'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {
        Home
    };
    const __VLS_name = 'App';
    let __VLS_internalComponent;
}
//# sourceMappingURL=App.vue.js.map