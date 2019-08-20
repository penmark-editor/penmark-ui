/** @jsx jsx */
import { jsx } from '@emotion/core';

import * as React from 'react';
import { Button } from "antd";

interface ToolbarButtonProps {
    children?: React.ReactChildren,
    icon?: string,
    disabled?: boolean,
    active?: boolean,
    onClick?: (event: React.MouseEvent) => void
}


export const ToolbarButton: React.SFC<ToolbarButtonProps> = (props) => {
    return (
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
    )
}