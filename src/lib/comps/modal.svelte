<script lang="ts">
    // 弹窗

    let visible = $state(false);

    // $effect(() => console.log(visible));

    export function open() {
        visible = true;
    }

    export function close() {
        visible = false;
    }

    function clickOutSide(e) {
        if (e.target == mask) {
            close();
        }
    }

    let mask: HTMLElement;
</script>

{#if visible}
    <section class="mask" onclick={clickOutSide} bind:this={mask}>
        <div class="modal">
            <slot />
        </div>
    </section>
{/if}

<style>
    .mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        justify-content: center;
    }
    .modal {
        width: 50%;
        height: 50%;
        position: absolute;
        top: 10%;
        border: 1px solid black;
        border-radius: 1em;
        background-color: cyan;
    }
</style>
