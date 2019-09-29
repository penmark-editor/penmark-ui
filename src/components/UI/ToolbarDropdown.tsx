/** @jsx jsx */
import { jsx } from '@emotion/core';

import * as React from 'react';
import { Menu, Dropdown } from "antd";
import { ShortcutTag } from './ShortcutTag';
import { Action } from 'rpm-editor';
import { ToolbarButton } from './ToolbarButton';
import { GetActionProps } from '../../helpers/GetActionProps';

interface ToolbarDropdownProps {
    name?: string,
    icon?: string,
    actions: Action[]
}

export const ToolbarDropdown: React.FC<ToolbarDropdownProps> = (props) => {

    const isAnyActive = (): boolean => {
        return props.actions.some(action => action.isActive())
    }

    const activeMenuItems = () => {    
        return props.actions.reduce((array, action, index): string[] => {
            if(action.isActive()) array.push(index.toString())
            return array;
        }, [] as string[])
    }

    const menu = (
        <Menu selectedKeys={activeMenuItems()}>
            {props.actions.map((action, index) =>
                <Menu.Item
                    key={index}
                    {...GetActionProps(action)}
                    css={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'

                    }}
                >
                    {action.getName}
                    <ShortcutTag css={{marginLeft: 12}} shortcut={action.getShortcuts[0]} />
                </Menu.Item>
            )}
        </Menu>
    )

    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <ToolbarButton name={props.name} icon={props.icon} active={isAnyActive()} />
        </Dropdown>
    )
}