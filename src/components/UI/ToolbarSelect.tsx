/** @jsx jsx */
import { jsx } from '@emotion/core';

import * as React from 'react';
import { Button, Select } from "antd";

interface ToolbarSelectProps {
    disabled?: boolean,
    onClick?: (event: React.MouseEvent) => void
}


export const ToolbarSelect: React.SFC<ToolbarSelectProps> = (props) => {
    return (
        <Select
            className="borderless-select"
            disabled={props.disabled}
            defaultValue={0}
            style={{ width: 150 }}
        >
            <Select.OptGroup label="Paragraph">
                <Select.Option value={0}>Normal Text</Select.Option>
            </Select.OptGroup>
            <Select.OptGroup label="Headings">
                <Select.Option value={1}><h1>Heading 1</h1></Select.Option>
                <Select.Option value={2}><h2>Heading 2</h2></Select.Option>
                <Select.Option value={3}><h3>Heading 3</h3></Select.Option>
                <Select.Option value={4}><h4>Heading 4</h4></Select.Option>
                <Select.Option value={5}><h5>Heading 5</h5></Select.Option>
                <Select.Option value={6}><h6>Heading 6</h6></Select.Option>
            </Select.OptGroup>
        </Select>
    )
}