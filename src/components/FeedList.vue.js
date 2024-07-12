import { defineComponent } from 'vue';
export default defineComponent({
    name: 'FeedList',
    props: {
        feeds: {
            type: Array,
            required: true
        }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4") }, });
    for (const [feed] of __VLS_getVForSourceType((__VLS_ctx.feeds))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((feed.guid)), ...{ class: ("p-4 bg-white rounded shadow hover:bg-gray-50 transition dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((feed.link)), ...{ class: ("text-blue-600 font-bold dark:text-blue-400 block") }, });
        (feed.title);
        // @ts-ignore
        [feeds,];
        if (feed.image) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ((feed.image)), alt: ("Image"), ...{ class: ("w-full h-auto mb-2") }, });
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (feed.description);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['grid-cols-1'];
        __VLS_styleScopedClasses['sm:grid-cols-2'];
        __VLS_styleScopedClasses['md:grid-cols-3'];
        __VLS_styleScopedClasses['gap-4'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['shadow'];
        __VLS_styleScopedClasses['hover:bg-gray-50'];
        __VLS_styleScopedClasses['transition'];
        __VLS_styleScopedClasses['dark:bg-gray-800'];
        __VLS_styleScopedClasses['dark:text-gray-100'];
        __VLS_styleScopedClasses['dark:hover:bg-gray-700'];
        __VLS_styleScopedClasses['text-blue-600'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['dark:text-blue-400'];
        __VLS_styleScopedClasses['block'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['h-auto'];
        __VLS_styleScopedClasses['mb-2'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'FeedList';
    let __VLS_internalComponent;
}
//# sourceMappingURL=FeedList.vue.js.map