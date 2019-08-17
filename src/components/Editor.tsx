import * as React from 'react';
import * as v from 'prosemirror-view';
import {Editor as RPM, View} from 'rpm-editor';

export const Editor: React.SFC = () => {
    return (
        <RPM editable={true}>
            <View/>
        </RPM>
    )
}