/** @jsx jsx */
import { jsx } from '@emotion/core';

import * as React from 'react';
import {withEditorContext, EditorContext } from 'rpm-editor';
import { Divider } from 'antd';
import { GetActionProps } from '../../helpers/GetActionProps';
import { ToolbarButton } from './ToolbarButton';
import { HeadingsSelector } from './HeadingsSelector';
import { ToolbarDropdown } from './ToolbarDropdown';

interface ToolbarProps extends EditorContext {

}

const Toolbar: React.FC<ToolbarProps> = (props) => {
    return (
        <div
            css={{
                display: 'flex'
            }}
        >
            <HeadingsSelector name="Text Styles" />
            <Divider type='vertical' />
            <ToolbarButton 
                {...GetActionProps(props.actions.bold)}
                icon='bold'
            />
            <ToolbarButton 
                {...GetActionProps(props.actions.italic)}
                icon='italic'
            />
            <ToolbarDropdown 
                name='More Formatting' 
                icon='ellipsis' 
                actions={[
                    props.actions.underline,
                    props.actions.strikethrough,
                    props.actions.subscript,
                    props.actions.superscript
                ]}
            />
            <Divider type='vertical' />
            <ToolbarButton 
                {...GetActionProps(props.actions.bulletList)}
                icon='unordered-list'
            />
            <ToolbarButton 
                {...GetActionProps(props.actions.orderedList)}
                icon='ordered-list'
            />
            <Divider type='vertical' />
            <ToolbarButton 
                {...GetActionProps(props.actions.undo)}
                icon='undo'
            />
            <ToolbarButton 
                {...GetActionProps(props.actions.redo)}
                icon='redo'
            />
        </div>
    )
}

export default withEditorContext(Toolbar);