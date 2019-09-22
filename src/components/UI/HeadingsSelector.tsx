/** @jsx jsx */
import { jsx } from '@emotion/core';

import * as React from 'react';
import { Select, Tag, Tooltip } from "antd";
import { schema } from '../schema/Index';
import { EditorContext, withEditorContext } from 'rpm-editor';
import { findParentNodeOfType } from 'prosemirror-utils';
import { ShortcutTag } from './ShortcutTag';

interface HeadingsSelectorProps extends EditorContext {
    name?: string
}


const HeadingsSelectorComponent: React.SFC<HeadingsSelectorProps> = (props) => {

    const [activeValue, setActiveValue] = React.useState(0);
    const headingAction = props.actions.heading;

    React.useEffect(() => {
        const node = findParentNodeOfType([schema.nodes.heading, schema.nodes.paragraph])(props.editorState.selection);
        if (node) setActiveValue(node.node.attrs.level | 0)
    }, [props.editorState]);

    const handleChange = (value: number) => {
        headingAction.execute({ level: value });
    }

    const Heading = ({ level, children }: { level: number, children: React.ReactNode }) => {
        if (level < 1) return React.createElement('span', null, children);
        return React.createElement(`h${level}`, null, children);
    }

    const optionStyling = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '50px'
    }

    return (
        <Tooltip title={
            <React.Fragment>
                Text Styles
                <ShortcutTag shortcut="Shift-Ctrl-0..6" inverted />
            </React.Fragment>
        }>
            <Select
                className="borderless-select"
                value={activeValue}
                style={{ width: 150 }}
                dropdownMatchSelectWidth={false}
                dropdownStyle={{ width: 300}}
                onSelect={(value: number) => handleChange(value)}
                css={{
                    ".ant-select-selection:active": {
                        boxShadow: 'none'
                    },
                    ".ant-select-selection-selected-value": {
                        '> h1, h2, h3, h4, h5, h6': {
                            fontSize: 14,
                            fontWeight: 'normal'
                        },
                        '> .shortcut-tag': {
                            display: 'none'
                        }
                    }
                }}
            >
                <Select.OptGroup label="Paragraph">
                    <Select.Option key={0} value={0} style={optionStyling}>
                        <Heading level={0}>{headingAction.getShortcuts[0].name}</Heading>
                        <ShortcutTag shortcut={headingAction.getShortcuts[0]} />
                    </Select.Option>
                </Select.OptGroup>
                <Select.OptGroup label="Headings">
                    {headingAction.getShortcuts.filter(s => s.attrs.level > 0).map(shortcut =>
                        <Select.Option key={shortcut.attrs.level} value={shortcut.attrs.level} style={optionStyling}>
                            <Heading level={shortcut.attrs.level}>{shortcut.name}</Heading>
                            <ShortcutTag shortcut={shortcut} />
                        </Select.Option>
                    )}
                </Select.OptGroup>
            </Select>
        </Tooltip>
    )
}

export const HeadingsSelector = withEditorContext(HeadingsSelectorComponent);