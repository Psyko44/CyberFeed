import { defineComponent, ref } from 'vue';
export default defineComponent({
    name: 'SearchBar',
    emits: ['search'],
    setup(props, { emit }) {
        const query = ref('');
        function search() {
            emit('search', query.value);
        }
        return {
            query,
            search
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ ...{ onInput: (__VLS_ctx.search) }, type: ("text"), value: ((__VLS_ctx.query)), placeholder: ("Search..."), ...{ class: ("w-full md:w-1/2 lg:w-1/3 p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100") }, });
    // @ts-ignore
    [search, query,];
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
    const __VLS_name = 'SearchBar';
    let __VLS_internalComponent;
}
//# sourceMappingURL=SearchBar.vue.js.map