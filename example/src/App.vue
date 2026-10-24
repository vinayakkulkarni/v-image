<template>
  <div class="flex min-h-dvh flex-col">
    <header
      class="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8"
    >
      <a href="/" class="font-display text-lg tracking-tight">v-image</a>
      <nav class="flex items-center gap-1 text-sm">
        <a
          href="https://github.com/vinayakkulkarni/v-image"
          target="_blank"
          rel="noopener noreferrer"
          :class="navLink"
          @click="track('Outbound Click', { target: 'github' })"
        >
          GitHub
        </a>
        <a
          href="https://www.npmjs.com/package/v-image"
          target="_blank"
          rel="noopener noreferrer"
          :class="navLink"
          @click="track('Outbound Click', { target: 'npm' })"
        >
          npm
        </a>
        <button
          type="button"
          :class="navLink"
          :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
          @click="toggleTheme"
        >
          {{ isDark ? 'Light' : 'Dark' }}
        </button>
      </nav>
    </header>

    <main
      class="mx-auto grid w-full max-w-6xl flex-1 items-center gap-10 px-5 pt-6 pb-16 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-16"
    >
      <section class="min-w-0">
        <p
          class="font-mono text-xs tracking-widest text-muted-foreground uppercase"
        >
          Vue 3 · ESM · {{ version }}
        </p>
        <h1
          class="mt-4 font-display text-[clamp(3.5rem,14vw,7rem)] leading-[0.85] tracking-tight whitespace-nowrap"
        >
          v-image
        </h1>
        <p class="mt-6 max-w-md text-lg text-muted-foreground">
          A tiny
          <code class="font-mono text-base text-foreground"
            >input type="file"</code
          >
          that shows the picked image
          <span class="font-serif text-2xl text-foreground italic"
            >instantly</span
          >, as a data URL you can keep or post.
        </p>

        <div
          class="mt-8 flex max-w-md items-center gap-2 rounded-lg border border-border bg-card p-1.5 pl-4"
        >
          <code class="min-w-0 flex-1 truncate font-mono text-sm">
            <span class="text-muted-foreground select-none">$ </span
            >{{ installCommand }}
          </code>
          <button
            type="button"
            class="shrink-0 rounded-md bg-primary px-3 py-1.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-85 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            @click="copyInstall"
          >
            {{ copied ? 'Copied' : 'Copy' }}
          </button>
        </div>
      </section>

      <section
        class="min-w-0 rounded-2xl border border-border bg-card p-5 sm:p-6"
        aria-labelledby="demo-title"
      >
        <div class="flex flex-wrap items-center justify-between gap-3">
          <h2 id="demo-title" class="font-bold">Try it</h2>
          <div
            class="flex rounded-md border border-border p-0.5 text-xs"
            role="radiogroup"
            aria-label="Accepted file types"
          >
            <button
              v-for="option in acceptOptions"
              :key="option.value"
              type="button"
              role="radio"
              :aria-checked="accept === option.value"
              :class="[
                'rounded px-2.5 py-1 font-mono transition-colors',
                accept === option.value
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground',
              ]"
              @click="setAccept(option.value)"
            >
              {{ option.label }}
            </button>
          </div>
        </div>

        <v-image
          :key="accept"
          class="mt-5"
          wrapper="w-full"
          :placeholder="placeholder"
          :form="form"
          :uploaded="uploaded"
          @image-loaded="onImageLoad"
          @image-removed="onImageRemove"
        />

        <dl
          class="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border font-mono text-xs"
        >
          <div class="bg-card p-3">
            <dt class="text-muted-foreground">last event</dt>
            <dd class="mt-1 truncate">{{ lastEvent }}</dd>
          </div>
          <div class="bg-card p-3">
            <dt class="text-muted-foreground">data URL</dt>
            <dd class="mt-1 truncate">{{ dataUrlSize }}</dd>
          </div>
        </dl>
      </section>
    </main>

    <footer
      class="mx-auto w-full max-w-6xl border-t border-border px-5 py-6 text-sm text-muted-foreground sm:px-8"
    >
      MIT ·
      <a
        href="https://vinayakkulkarni.dev"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-foreground"
        >Vinayak Kulkarni</a
      >
    </footer>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { VImage } from 'v-image';
  import { version } from '../../package.json';
  import { track } from './analytics';

  const navLink =
    'rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none';
  const buttonClass =
    'mt-4 inline-flex w-full cursor-pointer items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-85 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none';
  const frameClass = 'rounded-xl border border-dashed border-border p-3';
  const imageClass = 'block aspect-[3/2] w-full rounded-lg object-cover';

  const installCommand = 'pnpm add v-image';
  const copied = ref(false);
  const copyInstall = async () => {
    await navigator.clipboard.writeText(installCommand);
    copied.value = true;
    track('Install Copy', { command: installCommand });
    setTimeout(() => {
      copied.value = false;
    }, 1600);
  };

  const isDark = ref(document.documentElement.classList.contains('dark'));
  const toggleTheme = () => {
    isDark.value = !isDark.value;
    document.documentElement.classList.toggle('dark', isDark.value);
    localStorage.setItem('v-image-color-mode', isDark.value ? 'dark' : 'light');
    track('Theme Toggle', { mode: isDark.value ? 'dark' : 'light' });
  };

  const acceptOptions = [
    { label: 'image/*', value: 'image/*' },
    { label: 'png', value: 'image/png' },
    { label: 'jpeg', value: 'image/jpeg' },
  ];
  const accept = ref('image/*');
  const setAccept = (value: string) => {
    accept.value = value;
    image.value = null;
    lastEvent.value = `accept → ${value}`;
    track('Demo Interaction', { action: 'accept', value });
  };

  const form = computed(() => ({
    name: 'demo-image',
    label: 'Choose an image',
    accept: accept.value,
  }));
  const placeholder = {
    image: '/placeholder.svg',
    alt: 'Empty image placeholder',
    imgClass: imageClass,
    btnClass: buttonClass,
    wrapper: frameClass,
  };
  const uploaded = {
    alt: 'Your selected image',
    imgClass: imageClass,
    btnClass: buttonClass,
    wrapper: frameClass,
    removeBtnText: 'Remove image',
  };

  const image = ref<string | null>(null);
  const lastEvent = ref('—');
  const dataUrlSize = computed(() =>
    image.value ? `${(image.value.length / 1024).toFixed(1)} KB` : '—',
  );

  const onImageLoad = (dataUrl: string) => {
    image.value = dataUrl;
    lastEvent.value = 'image-loaded';
    track('Demo Interaction', { action: 'image-loaded' });
  };
  const onImageRemove = () => {
    image.value = null;
    lastEvent.value = 'image-removed';
    track('Demo Interaction', { action: 'image-removed' });
  };
</script>
