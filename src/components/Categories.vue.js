import { defineComponent, ref } from 'vue';
export default defineComponent({
    name: 'Categories',
    emits: ['select-category'],
    setup(props, { emit }) {
        const selectedCategory = ref('all');
        function selectCategory() {
            emit('select-category', selectedCategory.value);
        }
        return {
            selectedCategory,
            selectCategory
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
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ onChange: (__VLS_ctx.selectCategory) }, value: ((__VLS_ctx.selectedCategory)), ...{ class: ("w-full md:w-1/2 lg:w-1/3 p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("all"), });
    // @ts-ignore
    [selectCategory, selectedCategory,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("CVE"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("Malware"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("Crypto"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("Phishing"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("DDoS"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("Data Breach"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("Hacking"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("APT"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("Zero-Day"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("Social Engineering"), });
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['md:w-1/2'];
        __VLS_styleScopedClasses['lg:w-1/3'];
        __VLS_styleScopedClasses['p-2'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-gray-300'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['dark:bg-gray-800'];
        __VLS_styleScopedClasses['dark:border-gray-600'];
        __VLS_styleScopedClasses['dark:text-gray-100'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'Categories';
    let __VLS_internalComponent;
}
//# sourceMappingURL=Categories.vue.js.map