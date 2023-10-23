<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import type monaco from 'monaco-editor';

	//import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
	import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
	import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
	import GithubTheme from './github.theme.json';

	let editorElement: HTMLDivElement;
	let editor: monaco.editor.IStandaloneCodeEditor;
	let model: monaco.editor.ITextModel;

	let Monaco;

	export let content: string;
	onMount(async () => {
		self.MonacoEnvironment = {
			getWorker: function (_: any, label: string) {
				if (label === 'json') {
					return new jsonWorker();
				}
				return new editorWorker();
			}
		};

		Monaco = await import('monaco-editor');

		Monaco.languages.typescript.typescriptDefaults.setEagerModelSync(true);

		Monaco.editor.defineTheme('github-light', GithubTheme);
		editor = Monaco.editor.create(editorElement, {
			automaticLayout: true,
			language: 'json',
			theme: 'github-light',
			value: '{}'
		});

		editor.onKeyUp((e) => {
			content = editor.getValue({
				preserveBOM: true,
				lineEnding: ''
			});
		});
        editor.onDidPaste((e) => {
            content = editor.getValue({
				preserveBOM: true,
				lineEnding: ''
			});
        })
		return () => editor?.dispose();
	});
</script>

<div class="h-full border rounded-md" bind:this={editorElement} />

<style>
	:global(.monaco-editor) {
		/* padding-left: 15px; */
		/* padding-right: 15px; */
	}
</style>
