<script lang="ts">
    import { Motion, AnimatePresence } from "svelte-motion";
    import { cn } from "$lib/utils";
    import { onMount } from "svelte";

    export let duration = 0.4;
    export let delay = 0;
    export let yOffset = 6;
    export let blur = "6px";
    export let id = crypto.randomUUID().slice(0, 8);

    let defaultVariants = {
      hidden: { opacity: 0, y: yOffset, filter: `blur(${blur})` },
      visible: { opacity: 1, y: 0, filter: `blur(0px)` },
    };

    // Set isInView to "hidden" initially and "visible" on page load
    let isInView = "hidden";

    // Trigger animation on mount
    onMount(() => {
      isInView = "visible";
    });

    let className = "";
    export { className as class };
</script>

<AnimatePresence let:item list={[{ key: id }]}>
  <Motion
    initial="hidden"
    animate={isInView}
    exit="hidden"
    variants={defaultVariants}
    transition={{
      delay: 0.04 + delay,
      duration,
      ease: "easeOut",
    }}
    let:motion
  >
    <div
      use:motion
      class={cn(className)}
    >
      <slot>Default</slot>
    </div>
  </Motion>
</AnimatePresence>
