import {
	window,
	commands,
	ExtensionContext,
	workspace
} from 'vscode';
export function activate(context: ExtensionContext) {
	console.log('mpearon.vsce-parse-cmtracelogs has been initialized');
	let disposable = commands.registerCommand('extension.parseCMTraceLogs', () => {
	});
	context.subscriptions.push(disposable);
}
export function deactivate() {}
