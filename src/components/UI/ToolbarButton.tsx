/** @jsx jsx */
import { jsx } from '@emotion/core';

import * as React from 'react';
import { Button, Tooltip, Tag } from "antd";
import Shortcut from 'rpm-editor/lib/actions/Shortcut';
import { ShortcutTag } from './ShortcutTag';

interface ToolbarButtonProps {
    children?: React.ReactChildren,
    name?: string,
    shortcut?: Shortcut,
    icon?: string,
    disabled?: boolean,
    active?: boolean,
    onClick?: (event: React.MouseEvent) => void
}


export const ToolbarButton: React.SFC<ToolbarButtonProps> = (props) => {
    return (
        <Tooltip
            title={
                <React.Fragment>
                    <span>{props.name}</span>
                    {props.shortcut &&
                        <ShortcutTag shortcut={props.shortcut} inverted />
                    }
                </React.Fragment>
            }
            placement='top'
        >
            <Button
                css={{
                    backgroundColor: props.active ? '#1890ff' : 'inherit',
                    color: props.active ? '#fff' : 'inherit',
                    '&:hover': {
                        backgroundColor: '#f5f5f5'
                    }
                }}
                icon={props.icon}
                disabled={props.disabled}
                type="link"
                onClick={props.onClick}
                {...props}
            >
                {props.children}
            </Button>
        </Tooltip>

    )
}