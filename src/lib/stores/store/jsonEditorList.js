import { writable } from 'svelte/store';
import {fetchList, fetchDetail} from './api';
function createSchemList() {
	const {subscribe, set, update} = writable([]);
	return {
		subscribe,
		fetchAll: () => {
			const fetchData = fetchList();
			set(fetchData);
		}
	}
}