/** @jsx jsx */
import { jsx } from '@emotion/core';

import * as React from 'react';
import {withEditorContext, IEditorProps } from 'rpm-editor';
import { ToolbarItem, ToolbarItemType } from './ToolbarItem';
import { Divider } from 'antd';

interface ToolbarProps extends IEditorProps {

}

const Toolbar: React.SFC<ToolbarProps> = (props) => {
    return (
        <div
            css={{
                display: 'flex',
                gridColumn: 'span 3',
            }}
        >
            <ToolbarItem
                type={ToolbarItemType.Select}
                action={props.editorContext.actions.bold} 
                name='Text Styles'
            />
            <Divider type='vertical' />
            <ToolbarItem
                type={ToolbarItemType.Button}
                action={props.editorContext.actions.bold} 
                name='Bold'
                icon='bold'
            />
            <ToolbarItem
                type={ToolbarItemType.Button}
                action={props.editorContext.actions.italic} 
                name='Italic'
                icon='italic'
            />
            <Divider type='vertical' />
            <ToolbarItem
                type={ToolbarItemType.Button}
                action={props.editorContext.actions.bulletList} 
                name='Bullet List'
                icon='unordered-list'
            />
            <ToolbarItem
                type={ToolbarItemType.Button}
                action={props.editorContext.actions.orderedList} 
                name='Numbered List'
                icon='ordered-list'
            />
            <Divider type='vertical' />
            <ToolbarItem
                type={ToolbarItemType.Button}
                action={props.editorContext.actions.undo} 
                name='Undo'
                icon='undo'
            />
            <ToolbarItem
                type={ToolbarItemType.Button}
                action={props.editorContext.actions.redo} 
                name='Redo'
                icon='redo'
            />
        </div>
    )
}

export default withEditorContext(Toolbar);