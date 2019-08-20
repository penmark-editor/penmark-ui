/** @jsx jsx */
import { jsx } from '@emotion/core';

import * as React from 'react';
import {Editor as RPM, View} from 'rpm-editor';
import Toolbar from './UI/Toolbar';

export const Editor: React.SFC = () => {
    return (
        <RPM
            editable={true}
        >
            <div
                css={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto 1fr',
                    maxWidth: '70vw',
                    margin: '0 auto',
                    paddingTop: '60px'
                }} 
            >
                <Toolbar />
                <View css={{maxWidth: '50vw'}}/>
            </div>
        </RPM>
    )
}