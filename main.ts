import { App, Editor, Plugin, Setting, PluginSettingTab, MarkdownView } from 'obsidian';

export default class AddNoteLink extends Plugin {
    async onload() {
        console.log('loading my plugin...');
        
    }

    async onunload() {
        console.log('unloading my plugin...');
        
    }
}