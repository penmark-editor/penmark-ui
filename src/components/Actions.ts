import { Actions, Action } from 'rpm-editor';
import { toggleMark, setBlockType } from 'prosemirror-commands';
import { wrapInList } from 'prosemirror-schema-list';
import { undo, redo } from 'prosemirror-history';
import { schema } from './schema/Index';
import Shortcut from 'rpm-editor/lib/actions/Shortcut';

export const actions: Actions = {

    // Mark Commands
    bold: new Action({
        command: () => toggleMark(schema.marks.strong),
        type: schema.marks.strong,
        name: 'Bold',
        shortcuts: [
            new Shortcut({key: 'Mod-b'})
        ]
    }),
    italic: new Action({
        command: () => toggleMark(schema.marks.em),
        type: schema.marks.em,
        name: 'Italic',
        shortcuts: [
            new Shortcut({key: 'Mod-i'})
        ]
    }),
    underline: new Action({
        command: () => toggleMark(schema.marks.underline),
        type: schema.marks.underline,
        shortcuts: [
            new Shortcut({ key: 'Mod-u' })
        ],
        name: 'Underline'
    }),
    strikethrough: new Action({
        command: () => toggleMark(schema.marks.strikethrough),
        type: schema.marks.strikethrough,
        shortcuts: [
            new Shortcut({ key: 'Mod-Shift-s' })
        ],
        name: 'Strikethrough'
    }),
    subscript: new Action({
        command: () => toggleMark(schema.marks.subscript),
        type: schema.marks.subscript,
        name: 'Subscript'
    }),
    superscript: new Action({
        command: () => toggleMark(schema.marks.superscript),
        type: schema.marks.superscript,
        name: 'Superscript'
    }),
    code: new Action({
        command: () => toggleMark(schema.marks.code),
        type: schema.marks.code,
        name: 'Code'
    }),

    // Node Commands
    heading: new Action({
        command: (attrs) => setBlockType(schema.nodes.heading, { level: attrs.level }),
        type: schema.nodes.heading,
        name: 'Heading',
        shortcuts: [
            new Shortcut({name: 'Normal Text', key: 'Shift-Mod-0', attrs: {level: 0}}),
            new Shortcut({name: 'Heading 1', key: 'Shift-Mod-1', attrs: {level: 1}}),
            new Shortcut({name: 'Heading 2', key: 'Shift-Mod-2', attrs: {level: 2}}),
            new Shortcut({name: 'Heading 3', key: 'Shift-Mod-3', attrs: {level: 3}}),
            new Shortcut({name: 'Heading 4', key: 'Shift-Mod-4', attrs: {level: 4}}),
            new Shortcut({name: 'Heading 5', key: 'Shift-Mod-5', attrs: {level: 5}}),
            new Shortcut({name: 'Heading 6', key: 'Shift-Mod-6', attrs: {level: 6}})
        ]
    }),
    paragraph: new Action({
        command: () => setBlockType(schema.nodes.paragraph),
        type: schema.nodes.paragraph,
        name: 'Paragraph'
    }),
    codeBlock: new Action({
        command: () => setBlockType(schema.nodes.code_block),
        type: schema.nodes.code_block,
        name: 'Code Block'
    }),
    bulletList: new Action({
        command: () => wrapInList(schema.nodes.bullet_list),
        type: schema.nodes.bullet_list,
        name: 'Bullet List'
    }),
    orderedList: new Action({
        command: () => wrapInList(schema.nodes.ordered_list),
        type: schema.nodes.ordered_list,
        name: 'Numbered List'
    }),
    blockquote: new Action({
        command: () => setBlockType(schema.nodes.blockquote),
        type: schema.nodes.blockquote,
        name: 'Block Quote'
    }),

    // History Commands
    undo: new Action({
        command: () => undo,
        name: 'Undo',
        shortcuts: [
            new Shortcut({key: 'Mod-z'})
        ]
    }),
    redo: new Action({
        command: () => redo,
        name: 'Redo',
        shortcuts: [
            new Shortcut({key: 'Shift-Mod-z'})
        ]
    })
}