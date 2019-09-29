/** @jsx jsx */
import { jsx, InterpolationWithTheme } from '@emotion/core';

import * as React from 'react';
import { Tag } from 'antd';
import Shortcut from 'rpm-editor/lib/actions/Shortcut';

interface ShortcutTagProps {
    shortcut: Shortcut | string,
    inverted?: boolean
}

export const ShortcutTag: React.FC<ShortcutTagProps> = (props) => {
    return (
        <React.Fragment>
            {props.shortcut ? (
                <Tag
                    className='shortcut-tag'
                    {...(props.inverted ? { color: "#000000ab" } : {})}
                    css={{
                        marginLeft: 4,
                        marginRight: 0
                    }}
                >
                    {props.shortcut instanceof Shortcut ? props.shortcut.getFriendlyKey() : props.shortcut}
                </Tag>
            ) : (
                    null
                )}
        </React.Fragment>
    )
}