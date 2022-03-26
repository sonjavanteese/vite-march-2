import { writable } from 'svelte/store';

function toggleSidebar() {
	const { subscribe, set, update } = writable(false);
	return {
		subscribe,
		toggle: () => update(n => (n = !n)),
		show: () => set(true),
		reset: () => set(false)
	};
}

export const isOpen = toggleSidebar();