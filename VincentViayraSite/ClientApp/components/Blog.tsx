﻿import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class Blog extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>What I have been reading?</h1>
        </div>;
    }
}