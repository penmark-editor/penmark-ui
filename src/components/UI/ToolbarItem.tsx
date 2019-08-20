import * as React from 'react';
import { ToolbarButton } from './ToolbarButton';
import Action from 'rpm-editor/lib/actions/Action';
import { GetToolbarButtonProps } from '../../helpers/GetToolbarButtonProps';
import { Tooltip } from 'antd';
import { ToolbarSelect } from './ToolbarSelect';

interface ToolbarItemProps {
    action: Action,
    name: string,
    icon?: string,
    type: ToolbarItemType
}

export enum ToolbarItemType {
    Button,
    Select
}

export const ToolbarItem: React.SFC<ToolbarItemProps> = (props) => {



    switch(props.type) {
        case ToolbarItemType.Button:
            return (
                <Tooltip title={props.name} placement='top'>
                    <ToolbarButton
                        {...GetToolbarButtonProps(props.action)}
                        icon={props.icon}
                    />
                </Tooltip>
            );

        case ToolbarItemType.Select:
            return (
                <Tooltip title={props.name} placement='top'>
                    <ToolbarSelect
                        
                    />
                </Tooltip>
            )
    }
}