<script setup lang="ts">
import { StagewiseToolbar, type ToolbarConfig } from '@stagewise/toolbar-vue';

const config: ToolbarConfig = {
	plugins: [], // Add your custom plugins here
};
</script>

<template>
	<div>
		<ClientOnly>
			<StagewiseToolbar :config="config" />
		</ClientOnly>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>
