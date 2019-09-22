/** @jsx jsx */
import { jsx } from '@emotion/core';

import * as React from 'react';
import {Editor as RPM, View} from 'rpm-editor';
import Toolbar from './UI/Toolbar';
import { HtmlAttributes } from 'csstype';
import { actions } from './Actions';
import { schema } from './schema/Index';

interface EditorProps {
    style?: HtmlAttributes;
}

export const Editor: React.FC = () => {
    return (
        <RPM
            id='1'
            actions={actions}
            schema={schema}
            editable={true}
        >
                <Toolbar/>
                <View/>
        </RPM>
    )
}